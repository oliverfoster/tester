/*
* Kineo-specific functionality forks of Adapt Learning e-learning Framework
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Gavin McMaster <gavin.mcmaster@kineo.com>
*/

define(function(require) {

	//jQuery function to focus with no scroll (accessibility requirement for control focus)
	if ($.fn.focusNoScroll === undefined) $.fn.focusNoScroll = function(){
	  var y = $(window).scrollTop();
	  this[0].focus();
	  window.scrollTo(null, y);
	  return this; //chainability
	};

});
