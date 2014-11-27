/*
* Kineo-specific functionality forks of Adapt Learning e-learning Framework
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Gavin McMaster <gavin.mcmaster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	var DrawerView = require('coreViews/drawerView');
	var QuestionView = require('coreViews/questionView');
    var ComponentView = require('coreViews/componentView');
    var ButtonsView =  require('coreViews/buttonsView');
    var NavigationView =  require('coreViews/navigationView');
    var AdaptView = require('coreViews/adaptView');
    var AdaptModel = require('coreModels/adaptModel');
    var CourseModel = require('coreModels/courseModel');
    var ContentObjectsModel = require('coreModels/contentObjectModel');

    require('extensions/adapt-framework-kineoFork/js/utility');
   
	/**** start Adapt utility methods *******/

    // Allows a selector to be passed in and Adapt will navigate to this element
    // added shouldOffsetTopNav and create settings offset object. Plus the currentPage check
    Adapt.navigateToElement = function(selector, settings, shouldOffsetTopNav) {
        //console.log("KineoAdapt.navigateToElement " + selector);
    
        // shouldOffsetTopNav overrides settings.offset if exists
        if(shouldOffsetTopNav===undefined) shouldOffsetTopNav = true;

        // Setup settings object
        var settings = (settings || {});
        if(shouldOffsetTopNav) {
            var offset = -($('.navigation').height()+10);
            settings.offset = {top:offset, left:0};
        }

        // Removes . symbol from the selector to find the model
        var currentModelId = selector.replace(/\./g, '');
        var currentModel = Adapt[Adapt.mapById(currentModelId)].findWhere({_id: currentModelId});
        
        // Get current page to check whether this is the current page
        var currentPage = (currentModel._siblings === 'contentObjects') ? currentModel : currentModel.findAncestor('contentObjects');

        // If current page - scrollTo element
        if (currentPage.get('_id') === Adapt.location._currentId) {
           return Adapt.scrollTo(selector, settings);
        }

        // If the element is on another page navigate and wait until pageView:ready is fired
        // Then scrollTo element
        Adapt.once('pageView:ready', function() {
            _.defer(function() {
                Adapt.scrollTo(selector, settings, offset)
            })
        });

        Backbone.history.navigate('#/id/' + currentPage.get('_id'), {trigger: true});
    }

    /**** end Adapt utility methods *******/

    /**** start models *******/

    AdaptModel.prototype.defaults = {
        _canShowFeedback: true,
        _isComplete: false,
        _isProgress: true,
        _isEnabled: true,
        _isResetOnRevisit: false,
        _isAvailable: true,
        _isOptional: false,
        _isTrackable: true,
        _isReady: false,
        _isVisible: true,
        _isInteractionsComplete: false
    }

    AdaptModel.prototype.setupModel = function() {
        if (this.get('_type') === 'page') {
            this._children = 'articles';
        }
        if (this._siblings === 'contentObjects' && this.get('_parentId') !== Adapt.course.get('_id')) {
            this._parent = 'contentObjects';
        }
        if (this._children) {
            if (this.get('_isOptional')) this.setOptional(true);
            this.setupChildListeners();
        }
        this.init();
        if (this._children !== undefined) this.checkCompletionStatus();
    }

    AdaptModel.prototype.setOptional = function(value) {
        this.set({_isOptional: value});
        if (this._children) this.setOnChildren('_isOptional', value, {pluginName: 'core'});
    };

    AdaptModel.prototype.setupChildListeners = function() {
        if(!this.getChildren()) return;

        this.getChildren().each(function(child) {
            this.listenTo(child, 'change:_isReady', this.checkReadyStatus);
            this.listenTo(child, 'change:_isComplete', this.checkCompletionStatus);
            this.listenTo(child, 'change:_isInteractionsComplete', this.checkInteractionStatus);
        }, this);
    }

    AdaptModel.prototype.checkInteractionStatus = function () {
        if(!this.getChildren()) return;
        if (this.getChildren().findWhere({_isInteractionsComplete: false})) {
            this.set('_isInteractionsComplete', false);
            return;
        }
        this.set('_isInteractionsComplete', true);
     }

     AdaptModel.prototype.checkCompletionStatus = function () {
        // Filter children based upon whether they are available
        var availableChildren = new Backbone.Collection(this.getChildren().where({_isAvailable: true}));
        // Check if any mandatory children are incomplete
        // If not - set this model to _isComplete: true
        if (availableChildren.findWhere({_isComplete:false, _isOptional:false})) return;
        this.set({_isComplete: true});
     }


    ContentObjectsModel.prototype.getCompletionAsPercentage = function() {
        var completedChildrenAsPercentage = (this.get('_type') == 'menu') ? this.getMenuCompletionAsPercentage() : this.getPageCompletionAsPercentage();

        this.set({'completedChildrenAsPercentage': completedChildrenAsPercentage});
        return completedChildrenAsPercentage; 
    };

    ContentObjectsModel.prototype.getMenuCompletionAsPercentage = function() {
        var totalChildren = this.findDescendants('components').length;
        var completedChildren = 0;

        this.getChildren().each(function (child) {
            var children = child.findDescendants('components');
            var availableChildren = new Backbone.Collection(children.where({_isAvailable:true, _isProgress: true}));
            var allChildrenOptional = !(availableChildren.findWhere({_isOptional:false}));
            (allChildrenOptional) ? totalChildren -= availableChildren.length : completedChildren += (child.getCompleteComponentsAsPercentage() / 100) * availableChildren.length;
        });

        if (totalChildren === 0) return 100;
        var completedChildrenAsPercentage = (completedChildren / totalChildren) * 100;
        
        return completedChildrenAsPercentage;
    };

    ContentObjectsModel.prototype.getPageCompletionAsPercentage = function() {            
        return this.getCompleteComponentsAsPercentage();
    };

    CourseModel.prototype.getCompleteComponentsAsPercentage = ContentObjectsModel.prototype.getCompleteComponentsAsPercentage = function() {
        var children = this.findDescendants('components');
        var availableChildren = new Backbone.Collection(children.where({_isAvailable:true, _isProgress: true}));
        var hasOptionalChildren = availableChildren.findWhere({_isOptional:true});
        var allChildrenOptional = !(availableChildren.findWhere({_isOptional:false}));
        var filteredChildren = (hasOptionalChildren && !allChildrenOptional) ? new Backbone.Collection(availableChildren.where({_isOptional:false})) : availableChildren;
        var completedChildren = filteredChildren.where({_isComplete:true});
        if (filteredChildren.length === 0) {
            this.set({'completedChildrenAsPercentage': 100});
            return 100;
        }
        var completedChildrenAsPercentage = (completedChildren.length / filteredChildren.length) * 100;
        this.set({'completedChildrenAsPercentage': completedChildrenAsPercentage});
        return completedChildrenAsPercentage;
    };

    /**** end models *******/

    /***** start views ****/

    // fork for Search extension integration. Search isn't added to DrawerCollection as needs to be to be appended as the last item,
    // so we need to know if there are no items so we can make the drawer button visible
    DrawerView.prototype.checkIfDrawerIsAvailable = function() {
        console.log("KineoDrawerView,checkIfDrawerIsAvailable");
        if(this.collection.length == 0) {
            $('.navigation-drawer-toggle-button').addClass('display-none');
            Adapt.trigger('drawer:noItems');
        }
    }

    // _isInteractionsComplete
    ComponentView.prototype.setCompletionStatus = function() {

        AdaptView.prototype.setCompletionStatus.apply(this, arguments);
        
        if (this.model.get('_isVisible')) {
            this.model.set('_isInteractionsComplete', true);
        }

    }

    // _isInteractionsComplete
    ComponentView.prototype.remove = function() {
        this.model.set('_isInteractionsComplete', false);

        return AdaptView.prototype.remove.apply(this, arguments);
    }

    // refactor 7 line if statement down to ternary statement
    QuestionView.prototype.checkQuestionCompletion = function() {
        //console.log("KineoQuestionView,checkQuestionCompletion");
        var isComplete = false;
            
        if (this.model.get('_isCorrect') || (this.model.get('_attemptsLeft') === 0) ) {
            isComplete = true;  
        } 

        if (isComplete) {
            this.setCompletionStatus();
            this.$('.component-widget').addClass('complete show-user-answer');
        }
    }

    // issue detailed here:https://github.com/cgkineo/adapt_framework/issues/2/
    QuestionView.prototype.updateButtons = function() {

        var isNoAttemptsLeft = (this.model.get('_attemptsLeft') === 0);
        var isCorrect = this.model.get('_isCorrect');
        var isEnabled = this.model.get('_isEnabled');
        var buttonState = this.model.get('_buttonState');

        if (isNoAttemptsLeft || isCorrect) {
            if (isCorrect) {
                this.model.set('_buttonState', 'correct');
            } else if (buttonState === 'submit' || buttonState === 'hideCorrectAnswer'){
                this.model.set('_buttonState', 'showCorrectAnswer');
            } else {
                this.model.set('_buttonState', 'hideCorrectAnswer');
            }
        } else {
            if (isEnabled) {
                this.model.set('_buttonState', 'submit');
            } else {
                this.model.set('_buttonState', 'reset');
            }
        }
    }

    // forked to not set _isComplete back to false
    QuestionView.prototype.checkIfResetOnRevisit = function() {
        //console.log("KineoQuestionView:checkIfResetOnRevisit");
        var isResetOnRevisit = this.model.get('_isResetOnRevisit');
        //check if new session
        var isNewSession = this.model.get('_isComplete') === true && this.model.get("_isSubmitted") === undefined;

        // If reset is enabled set defaults
        // Call blank method for question to handle
        if (isResetOnRevisit || isNewSession) {
            var attempts = this.model.get('_attempts');
            this.model.set({
                _isEnabled: true,
                _attemptsLeft: attempts,
                _isCorrect: false,
                _isComplete: isNewSession ? false : this.model.get("_isComplete"),
                _isSubmitted: false,
                _buttonState: 'submit'
            });
            // Defer is added to allow the component to render
            _.defer(_.bind(function() {
                //this.resetButtons();
                this.resetQuestionOnRevisit();
            }, this));

        } else {

            // If complete - display users answer
            // or reset the question if not complete
            var isComplete = this.model.get('_isComplete');

            if (isComplete) {
                this.model.set('_buttonState', 'hideCorrectAnswer');
                // Defer is added to allow the component to render
                _.defer(_.bind(function() {
                    this.onHideCorrectAnswerClicked(); 
                }, this));
                
            } else {
                this.model.set('_buttonState', 'submit');
                // Defer is added to allow the component to render
                _.defer(_.bind(function() {
                    this.onResetClicked();
                }, this));
            }
        }
    }

    // ButtonsView extends all down to these issues: https://github.com/cgkineo/adapt_framework/issues/1
    // and https://github.com/cgkineo/adapt_framework/issues/2
    ButtonsView.prototype.postRender = function() {
        if (this.model.get("_canShowFeedback") === false) this.$el.addClass("hide-feedback");
        this.onButtonStateChanged(null, this.model.get('_buttonState'));
        this.checkResetSubmittedState();
        this.onFeedbackMessageChanged(null, this.model.get('feedbackMessage'));
    }

    ButtonsView.prototype.onActionClicked = function() {
        var buttonState = this.model.get('_buttonState');
        this.trigger('buttons:' + buttonState);
        this.checkResetSubmittedState();
    }

    // https://github.com/cgkineo/adapt_framework/commit/2d6eef35abd0cae882b52b0eea25f06a04fbebaf
    ButtonsView.prototype.checkResetSubmittedState = function() {
        var isSubmitted = this.model.get('_isSubmitted');
        if(!isSubmitted) {
            var $icon = this.$('.buttons-marking-icon');
            $icon.removeClass('icon-cross');  
            $icon.removeClass('icon-tick');  
            $icon.addClass('display-none');
            this.$el.removeClass("submitted");
        } else {
            this.$el.addClass("submitted");
        }
    }

    // Multiple issues - https://github.com/cgkineo/adapt_framework/issues/2
    ButtonsView.prototype.updateAttemptsCount = function(model, changedAttribute) {
        var isSubmitted = this.model.get('_isSubmitted');
        var attemptsLeft = (this.model.get('_attemptsLeft')) ? this.model.get('_attemptsLeft') : this.model.get('_attempts')
        var isCorrect = this.model.get('_isCorrect');
        var shouldDisplayAttempts = this.model.get('_shouldDisplayAttempts');
        var attemptsString;

        if (!isSubmitted && attemptsLeft != 0) {
            attemptsString = attemptsLeft + " ";
            if (attemptsLeft > 1) {
                attemptsString += this.model.get('_buttons').remainingAttempts;
            } else if (attemptsLeft === 1){
                attemptsString += this.model.get('_buttons').remainingAttempt;
            }

        } else {
            this.$('.buttons-display-inner').addClass('visibility-hidden');
            var $icon = this.$('.buttons-marking-icon').removeClass('display-none');
            $icon.removeClass('icon-cross');  
            $icon.removeClass('icon-tick'); 
            if (isCorrect) {
                $icon.addClass('icon-tick');
            } else {
                $icon.addClass('icon-cross');
            }
        }

        if (shouldDisplayAttempts) {
            this.$('.buttons-display-inner').html(attemptsString);
        }        
    }
	
	// new navigation functionality
	
	NavigationView.prototype.initialize = function() {
		this.listenTo(Adapt, 'router:menu router:page', this.determineNavButtonVisibility);
		this.listenTo(Adapt, 'navigation:menuButton', this.navigateToParentMenu);
		this.template = "navigation";
		this.preRender();
	}
	
	NavigationView.prototype.addConfigClasses = function() {
		var config = Adapt.course.get('_navigation');
		if (config === undefined) return;
		if (config._showIconBorders) this.$el.addClass("show-icon-border");
		if (config._showAllTooltipsOnHover) this.$el.addClass("show-all-tooltips-hover");
		if (config._tooltipsAlwaysVisible) this.$el.addClass("tooltips-always-visible");
	}
	
	NavigationView.prototype.render = function() {
		var template = Handlebars.templates[this.template];
		var data = {
			config: Adapt.course.get('_navigation'),
			aria: Adapt.course.get('_accessibility')._ariaLabels
		};
		
		this.$el.html(template(data)).appendTo('#wrapper');
		
		_.defer(_.bind(function() {
			Adapt.trigger('navigationView:postRender', this);
			this.addConfigClasses();
		}, this));
		
		return this;
	}
	
	NavigationView.prototype.determineNavButtonVisibility = function(model) {
		var $buttons = $('.navigation-button');
		var visibleClass = 'display-none';
		if (model.get('_type') === "course") $buttons.addClass(visibleClass);
		else $buttons.removeClass(visibleClass);
	}
	
	NavigationView.prototype.navigateToParentMenu = function() {
		var parentId = Adapt.findById(Adapt.location._currentId).get("_parentId");
		var route = (parentId === "course") ? "#/" : "#/id/" + parentId;
		Backbone.history.navigate(route, { trigger: true });
	}

    /**** end views *****/
})
