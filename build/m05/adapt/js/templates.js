require(["handlebars"],function(){
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["results"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"results-title component-title\">\n        <h4 class=\"results-title-inner component-title-inner\">\n            ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </h4>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"results-body component-body\">\n        <div class=\"results-body-inner component-body-inner\">\n            ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </div>\n    </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"results-feedback component-feedback\">\n        <div class=\"results-feedback-inner component-feedback-inner\">\n            ";
  stack1 = ((helper = (helper = helpers.feedbackMessage || (depth0 != null ? depth0.feedbackMessage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"feedbackMessage","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </div>\n    </div>\n";
},"7":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "    <div class=\"results-associatedLearning component-associatedLearning\">\n        <div class=\"results-associatedLearning-inner component-associatedLearning-inner\">\n            <ul>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._associatedLearning : depth0), {"name":"each","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </ul>\n        </div>\n    </div>\n";
},"8":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._linkToAssociatedLearning : depths[1]), {"name":"if","hash":{},"fn":this.program(9, data, depths),"inverse":this.program(11, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        <a href=\"#\" class=\"associatedLearning-link\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\"><li>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</li></a>\n";
},"11":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        <li>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "<div class=\"results-inner component-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.feedbackMessage : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._associatedLearning : depth0), {"name":"if","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true,"useDepths":true});
this["Handlebars"]["templates"]["accordion"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <div class=\"accordion-item\">\n            <a href=\"#\" class=\"accordion-item-title ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" title=\""
    + escapeExpression(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"alt","hash":{},"data":data}) : helper)))
    + "\">\n              <div class=\"accordion-item-title-inner\">\n                <div class=\"accordion-item-title-icon icon icon-plus\"></div>\n                  <h5>\n                      ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                  </h5>\n              </div>\n            </a>\n            <div class=\"accordion-item-body\">\n                <div class=\"accordion-item-body-inner\">\n                    ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </div>\n            </div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
  return "visited";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"accordion-inner component-inner\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"accordion-widget component-widget\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["blank"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"blank-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._blank : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\"></div>\n";
},"useData":true});
this["Handlebars"]["templates"]["gmcq"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted user ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  return "correct";
  },"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "        <div class=\"gmcq-item component-item ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " "
    + escapeExpression(((helpers.odd || (depth0 && depth0.odd) || helperMissing).call(depth0, (data && data.index), {"name":"odd","hash":{},"data":data})))
    + "\">\n            <input type=\"checkbox\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\"/>\n            <label for=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"component-item-color component-item-text-color component-item-boder ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.selected : depth0), {"name":"if","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n            \n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" data-large=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\"/>\n            \n                <div class=\"gmcq-item-checkbox\">\n                    <div class=\"gmcq-item-state\">\n                        <div class=\"gmcq-item-icon gmcq-answer-icon icon\"></div>\n                        <div class=\"gmcq-item-icon gmcq-correct-icon icon icon-tick\"></div>\n                        <div class=\"gmcq-item-icon gmcq-incorrect-icon icon icon-cross\"></div>\n                    </div>\n                    <h5 class=\"gmcq-item-inner\">\n                        ";
  stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </h5>\n                </div>\n            </label>\n        </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.correct : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"7":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"9":function(depth0,helpers,partials,data) {
  return "selected";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"gmcq-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._gmcq : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"gmcq-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <div class=\"buttons\"  role=\"button\">\n";
  stack1 = this.invokePartial(partials.buttons, '            ', 'buttons', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});
this["Handlebars"]["templates"]["graphic"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"graphic-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._graphic : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <div class=\"graphic-widget component-widget\">\n        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" data-large=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\"/>\n    </div>\n</div>";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["hotgraphic"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "          <div class=\"hotgraphic-item component-item item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n            <div class=\"hotgraphic-item-graphic\">\n              <div class=\"hotgraphic-item-graphic-inner\">\n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n              </div>\n            </div>\n            <div class=\"hotgraphic-item-body\">\n              <div class=\"hotgraphic-item-body-inner\">\n                <h5>\n                  ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                </h5>\n                <p>\n                  ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </p>\n              </div>\n            </div>\n          </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "      <a href=\"#\" class=\"hotgraphic-graphic-pin component-item-text-color ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-id=\"item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" style=\"top:";
  stack1 = ((helper = (helper = helpers._top || (depth0 != null ? depth0._top : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_top","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "%; left:";
  stack1 = ((helper = (helper = helpers._left || (depth0 != null ? depth0._left : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_left","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "%;\" role=\"button\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.pinAlt || (depth0 != null ? depth0.pinAlt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pinAlt","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"hotgraphic-graphic-pin-icon component-item-color icon icon-pin\"></div>\n      </a>\n";
},"4":function(depth0,helpers,partials,data) {
  return "visited";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"hotgraphic-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.hotGraphic : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '  ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "  <div class=\"hotgraphic-widget component-widget\">\n\n    <div class=\"hotgraphic-graphic\">\n\n      <div class=\"hotgraphic-popup\" role=\"dialog\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.hotgraphicPopUp : stack1), depth0))
    + "\">\n\n        <div class=\"hotgraphic-popup-toolbar component-item-color clearfix\">\n          <div class=\"hotgraphic-popup-nav component-item-color\">\n            <a href=\"#\" class=\"hotgraphic-popup-controls back\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n              <div class=\"hotgraphic-popup-arrow-l component-item-text-color icon icon-controls-small-left\" role=\"button\"></div>\n            </a>\n            <div class=\"hotgraphic-popup-count component-item-text-color\">\n              <span class=\"current\">1</span>/<span class=\"total\">3</span>\n            </div>\n            <a href=\"#\" class=\"hotgraphic-popup-controls next\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\" role=\"button\">\n              <div class=\"hotgraphic-popup-arrow-r component-item-text-color icon icon-controls-small-right\"></div>\n            </a>\n          </div>\n          <a href=\"#\" class=\"hotgraphic-popup-done\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\" role=\"button\">\n            <div class=\"hotgraphic-popup-close component-item-text-color icon icon-cross\"></div>\n          </a>\n        </div>\n\n        <div class=\"hotgraphic-popup-inner clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n\n      </div>\n\n      <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["matching"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  return "correct";
  },"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"matching-item item ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n      <div class=\"matching-item-title\">";
  stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n      <div class=\"matching-select-container component-item-color\">\n        <div class=\"matching-select-state\">\n          <div class=\"matching-select-icon component-text-color matching-dropdown-icon icon icon-controls-small-down\"></div>\n          <div class=\"matching-select-icon component-text-color matching-correct-icon icon icon-tick\"></div>\n          <div class=\"matching-select-icon component-text-color matching-incorrect-icon icon icon-cross\"></div>\n        </div>\n        <select class=\"matching-select component-text-color\">\n          <option>\n            "
    + escapeExpression(lambda((depths[1] != null ? depths[1].placeholder : depths[1]), depth0))
    + "\n          </option>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._options : depth0), {"name":"each","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </select>\n      </div>\n    </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"7":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          <option>\n            "
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "\n          </option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"matching-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._matching : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '  ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "  <div class=\"matching-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n  <div class=\"buttons\" role=\"button\">\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});
this["Handlebars"]["templates"]["mcq"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  return "correct";
  },"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"mcq-item component-item component-item-color ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n        <input type=\"";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isRadio : depths[1]), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.program(13, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\"/>\n            <label for=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"component-item-text-color component-item-border";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isSelected : depth0), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                <div class=\"mcq-item-state\">\n                    <div class=\"mcq-item-icon mcq-answer-icon ";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isRadio : depths[1]), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.program(13, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " component-item-text-color icon\"></div>\n                    <div class=\"mcq-item-icon mcq-correct-icon icon icon-tick\"></div>\n                    <div class=\"mcq-item-icon mcq-incorrect-icon icon icon-cross\"></div>\n                </div>\n                <h5 class=\"mcq-item-inner\">\n                    ";
  stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </h5>\n            </label>\n        </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"7":function(depth0,helpers,partials,data) {
  return " correct";
  },"9":function(depth0,helpers,partials,data) {
  return " incorrect";
  },"11":function(depth0,helpers,partials,data) {
  return "radio";
  },"13":function(depth0,helpers,partials,data) {
  return "checkbox";
  },"15":function(depth0,helpers,partials,data) {
  return " selected";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"mcq-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.mcq : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"mcq-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});
this["Handlebars"]["templates"]["media"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "      <audio src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1), depth0))
    + "\" type=\"audio/mp3\"/>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        <audio src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1), depth0))
    + "\" type=\"audio/ogg\"/>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "        <video preload=\"none\" width=\"640px\" height=\"360px\" poster=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1), depth0))
    + "\" style=\"width:100%; height:100%;\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </video>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1), depth0))
    + "\" type=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.type : stack1), depth0))
    + "\"/>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp4 : stack1), depth0))
    + "\" type=\"video/mp4\"/>\n            <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogv : stack1), depth0))
    + "\" type=\"video/ogg\"/>\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "    <div class=\"media-transcript-container\" role=\"document\">\n      <a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "\" target=\"_blank\" class=\"media-transcript button\">\n        <div class=\"transcript-text-container\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.transcriptText : stack1), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n      </a>\n    </div>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.transcriptText : stack1), depth0))
    + "\n";
},"14":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"media-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.media : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"media-widget component-widget\">\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.transcriptLink : stack1), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <div class=\"narrative-strapline-title\">\n                        <h5 class=\"narrative-strapline-title-inner\">\n                           ";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " \n                        </h5>\n                    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <div class=\"narrative-slider-graphic ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.visited : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                    <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n                </div>\n";
},"4":function(depth0,helpers,partials,data) {
  return "visited";
  },"6":function(depth0,helpers,partials,data) {
  return "                <div class=\"narrative-progress component-item-color component-item-border\"></div>\n";
  },"8":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"narrative-content-item\">\n                    <div class=\"narrative-content-title\">\n                        <h5 class=\"narrative-content-title-inner\">\n                           ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += " \n                        </h5>\n                    </div>\n                    <div class=\"narrative-content-body\">\n                        <div class=\"narrative-content-body-inner\">\n                            ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                        </div> \n                    </div>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"narrative-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.narrative : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"narrative-widget component-widget\">\n        \n        <div class=\"narrative-strapline\">\n            <div class=\"narrative-strapline-header\">\n                <div class=\"narrative-strapline-header-inner clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\n            </div>\n            <a href=\"#\" class=\"narrative-popup-open\" tabindex=\"-1\">\n                <div class=\"icon icon-plus\"></div>\n            </a>\n        </div>\n        \n        <div class=\"narrative-slide-container\">\n  \n            <a href=\"#\" class=\"narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-left\"></div>\n            </a>\n            <a href=\"#\" class=\"narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-right\"></div>\n            </a>\n            \n            <div class=\"narrative-slider clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n            <div class=\"narrative-indicators\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n        </div>\n\n        <div class=\"narrative-content\">\n            <div class=\"narrative-content-inner\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n        </div>\n\n    </div>    \n</div>";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["slider"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  return "correct";
  },"5":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.correct : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"6":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"slider-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.slider : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"slider-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <div class=\"slider-holder clearfix\">\n            <div class=\"slider-scale-labels\">\n                <div class=\"slider-scale-start\">"
    + escapeExpression(((helper = (helper = helpers.labelStart || (depth0 != null ? depth0.labelStart : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"labelStart","hash":{},"data":data}) : helper)))
    + "</div>\n                <div class=\"slider-scale-end\">"
    + escapeExpression(((helper = (helper = helpers.labelEnd || (depth0 != null ? depth0.labelEnd : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"labelEnd","hash":{},"data":data}) : helper)))
    + "</div>\n            </div>\n            <div class=\"slider-scaler component-item-color\">\n                <div class=\"slider-modelranges\"></div>\n                <div class=\"slider-markers\"></div>\n                <div class=\"slider-answer component-item-color component-item-text-color\"></div>\n                <div class=\"slider-scale-marker component-item-color component-item-text-color\"></div>\n            </div>\n            <div class=\"slider-background\">\n                <div class=\"slider-item component-item ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                    <div class=\"slider-sliderange\">\n                        <a href=\"#\" class=\"slider-handle component-item-color component-item-text-color\" role=\"slider\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.sliderHandle : stack1), depth0))
    + "\"></a>\n                        <div class=\"slider-bar component-item-color\"></div>\n                    </div>\n                    <div class=\"slider-outer-bar\">\n                    <div class=\"slider-item-state\">\n                        <div class=\"slider-icon slider-correct-icon icon icon-tick\"></div>\n                        <div class=\"slider-icon slider-incorrect-icon icon icon-cross\"></div>\n                    </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"buttons\" role=\"button\">\n    </div>\n</div>";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"text-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.text : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"usePartial":true,"useData":true});
this["Handlebars"]["templates"]["textinput"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted user ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  return "correct";
  },"5":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "        <div class=\"textinput-item component-item component-item-color component-item-border clearfix ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prefix : depth0), {"name":"if","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.program(13, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.suffix : depth0), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div class=\"textinput-item-state\">\n                <div class=\"textinput-icon textinput-correct-icon icon icon-tick\"></div>\n                <div class=\"textinput-icon textinput-incorrect-icon icon icon-cross\"></div>\n            </div>\n        </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.correct : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"7":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <label class=\"textinput-item-prefix component-item-text-color\">";
  stack1 = ((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prefix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</label>\n";
},"11":function(depth0,helpers,partials,data,depths) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <input type=\"text\" placeholder=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1].placeholder : depths[1]), depth0))
    + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" value=\"\" role=\"textbox\">\n";
},"13":function(depth0,helpers,partials,data,depths) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "                <input type=\"text\" placeholder=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1].placeholder : depths[1]), depth0))
    + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.userAnswer || (depth0 != null ? depth0.userAnswer : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"userAnswer","hash":{},"data":data}) : helper)))
    + "\" disabled=\"true\" role=\"textbox\">\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <label class=\"textinput-item-suffix component-item-text-color\">";
  stack1 = ((helper = (helper = helpers.suffix || (depth0 != null ? depth0.suffix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"suffix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</label>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"component-inner textinput-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._textInput : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"component-widget textinput-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <div class=\"buttons\"  role=\"button\">\n";
  stack1 = this.invokePartial(partials.buttons, '            ', 'buttons', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});
this["Handlebars"]["templates"]["boxmenu-item"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "visited";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "		<span class=\"menu-item-duration\">Duration: ";
  stack1 = ((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"duration","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"menu-item-inner\" role=\"menuitem\"  aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._ariaLabels : depth0)) != null ? stack1.item : stack1), depth0))
    + "\">\n	<div class=\"menu-graphic\">\n		<a href=\"#/id/"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" role=\"button\">\n			<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" />\n		</a>\n	</div>\n	<div class=\"menu-item-title\">\n		<h2 class=\"menu-item-title-inner\" role=\"heading\">";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h2>\n	</div>\n	<div class=\"menu-item-body\">\n		<div class=\"menu-item-body-inner\">";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n	</div>\n	<div class=\"menu-item-button\">\n		<a href=\"#/id/"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._ariaLabels : depth0)) != null ? stack1.linkText : stack1), depth0))
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n			";
  stack1 = ((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		</a>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.duration : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n	<div class=\"menu-item-progress\">\n		<div class=\"menu-item-progress-indicator\">\n			<div class=\"menu-item-progress-indicator-bar\" style=\"width:"
    + escapeExpression(((helper = (helper = helpers.completedChildrenAsPercentage || (depth0 != null ? depth0.completedChildrenAsPercentage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"completedChildrenAsPercentage","hash":{},"data":data}) : helper)))
    + "%\"></div>\n		</div>\n	</div>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["boxmenu"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "		<div class=\"menu-title\">\n			<h1 class=\"menu-title-inner\" role=\"heading\">\n				";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</h1>\n		</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "		<div class=\"menu-body\">\n			<div class=\"menu-body-inner\">\n				";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</div>\n		</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"menu-container\" role=\"menu\">\n	<div class='menu-container-inner box-menu-inner clearfix'>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"article-title\">\n        <h2 class=\"article-title-inner\">\n            ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </h2>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"article-body\">\n        <div class=\"article-body-inner\">\n            ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </div>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"article-inner block-container\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});
this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"block-title\">\n        <h3 class=\"block-title-inner\">\n            ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </h3>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"block-body\">\n        <div class=\"block-body-inner\">\n            ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </div>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"block-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <div class=\"component-container\">\n    </div>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "    <div class=\"buttons-display\">\n        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n        <div class=\"buttons-display-inner\">\n        </div>\n    </div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "<div class=\"buttons-inner\">\n    <div class=\"buttons-cluster clearfix\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._shouldDisplayAttempts : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <button class=\"buttons-action\">";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.submit : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</button>\n        <button class=\"buttons-feedback\" disabled=\"true\">";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.showFeedback : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</button>\n    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._shouldDisplayAttempts : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});
this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "<div class=\"drawer-inner\" role=\"complementary\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1), depth0))
    + "\">\n	<div class=\"drawer-toolbar clearfix\">\n		<div class=\"drawer-back-button\">\n		<a href=\"#\" class=\"drawer-back icon icon-controls-small-left\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.previous || (depth0 != null ? depth0.previous : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"previous","hash":{},"data":data}) : helper)))
    + "\">\n		</a>\n		</div>\n		<div class=\"drawer-close-button\">\n		<a href=\"#\" class=\"drawer-close icon icon-cross\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.closeDrawer || (depth0 != null ? depth0.closeDrawer : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"closeDrawer","hash":{},"data":data}) : helper)))
    + "\">\n		</a>\n		</div>\n	</div>\n	<div class=\"drawer-holder\">\n	</div>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<a class=\"drawer-item-open "
    + escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"className","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">\n	<div class=\"drawer-item-title\">\n		<h5 class=\"drawer-item-title-inner\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h5>\n	</div>\n	<div class=\"drawer-item-description\">\n		<div class=\"drawer-item-description-inner\">";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n	</div>\n</a>";
},"useData":true});
this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"loading\">\n    <div class=\"loading-image\"><h3>Loading...</h3></div>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "		<a href=\"#\" class=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._back : stack1)) != null ? stack1._class : stack1), depth0))
    + " icon navigation-button "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._back : stack1)) != null ? stack1._iconTypeClass : stack1), depth0))
    + " "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._back : stack1)) != null ? stack1._layout : stack1), depth0))
    + " naviation-core-item\" data-event=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._back : stack1)) != null ? stack1._dataEvent : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.aria : depth0)) != null ? stack1.previous : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._back : stack1)) != null ? stack1._tooltip : stack1), depth0))
    + "\">\n			<span class=\"tooltip\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._back : stack1)) != null ? stack1._showTooltip : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n		</a>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._back : stack1)) != null ? stack1._tooltip : stack1), depth0));
  },"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "		<a href=\"#\" class=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._class : stack1), depth0))
    + " icon navigation-button "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._iconTypeClass : stack1), depth0))
    + " "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._layout : stack1), depth0))
    + " naviation-core-item\" data-event=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._dataEvent : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.aria : depth0)) != null ? stack1._menu : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._tooltip : stack1), depth0))
    + "\">\n			<span class=\"tooltip\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._showTooltip : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n		</a>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._tooltip : stack1), depth0));
  },"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<div class=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._title : stack1)) != null ? stack1._class : stack1), depth0))
    + " title "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._title : stack1)) != null ? stack1._layout : stack1), depth0))
    + " naviation-core-item\">\n			"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._title : stack1)) != null ? stack1._text : stack1), depth0))
    + "\n		</div>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "		<a href=\"#\" class=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._drawer : stack1)) != null ? stack1._class : stack1), depth0))
    + " icon "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._drawer : stack1)) != null ? stack1._iconTypeClass : stack1), depth0))
    + " "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._drawer : stack1)) != null ? stack1._layout : stack1), depth0))
    + " naviation-core-item\" data-event=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._drawer : stack1)) != null ? stack1._dataEvent : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.aria : depth0)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._drawer : stack1)) != null ? stack1._tooltip : stack1), depth0))
    + "\">\n			<span class=\"tooltip\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._drawer : stack1)) != null ? stack1._showTooltip : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n		</a>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._drawer : stack1)) != null ? stack1._tooltip : stack1), depth0));
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"navigation-inner clearfix\" role=\"navigation\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._back : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._title : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._drawer : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});
this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <div class=\"notify-popup-toolbar\">\n        <a href=\"#\" class=\"notify-popup-done\" role=\"button\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.closePopup || (depth0 != null ? depth0.closePopup : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"closePopup","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"notify-popup-icon-close icon icon-cross\"></div>\n        </a>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                <div class=\"notify-popup-icon\">\n                    <div class=\"icon";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "prompt", {"name":"if_value_equals","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "alert", {"name":"if_value_equals","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                    </div>\n                </div>\n";
},"4":function(depth0,helpers,partials,data) {
  return " icon-question";
  },"6":function(depth0,helpers,partials,data) {
  return " icon-warning";
  },"8":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"notify-popup-title\">\n                    <h5 class=\"notify-popup-title-inner\">\n                    ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </h5>\n                </div>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"notify-popup-body\">\n                    <div class=\"notify-popup-body-inner\">";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n                </div>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                <div class=\"notify-popup-buttons\">\n\n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "alert", {"name":"if_value_equals","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "prompt", {"name":"if_value_equals","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </div>\n";
},"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <a href=\"#\" class=\"notify-popup-button notify-popup-alert-button\" role=\"button\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a>\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._prompts : depth0), {"name":"each","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"16":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                        <a href=\"#\" class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_callbackEvent","hash":{},"data":data}) : helper)))
    + "\" role=\"button\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"promptText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"promptText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"notify-popup notify-type-"
    + escapeExpression(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_type","hash":{},"data":data}) : helper)))
    + "\" role=\"alertdialog\">\n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "popup", {"name":"if_value_equals","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"notify-popup-inner\">\n        <div class=\"notify-popup-content\">\n            <div class=\"notify-popup-content-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._showIcon : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"notify-shadow\"></div>";
},"useData":true});
this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"notify-push-inner\" role=\"dialog\">\n	<div class=\"notify-push-title\">\n		<div class=\"notify-push-title-inner\">\n			";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n	<div class=\"notify-push-body\">\n		<div class=\"notify-push-body-inner\">\n			";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n		</div>\n	</div>\n</div>\n<a href=\"#\" class=\"notify-push-close\" role=\"button\">\n	<span class=\"icon icon-cross\"></span>\n</a>";
},"useData":true});
this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"page-title\" role=\"heading\">\n        <h1 class=\"page-title-inner\">\n            ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </h1>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"page-inner article-container\" role=\"main\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.page : stack1), depth0))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});
this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});
});
//# sourceMappingURL=..//../adapt/js/templates.js.map