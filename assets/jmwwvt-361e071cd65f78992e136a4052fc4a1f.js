"use strict";define("jmwwvt/ajax/service",["exports","ember","ember-ajax/services/ajax","jmwwvt/config/environment"],function(e,t,n,a){e.default=n.default.extend({host:a.default.apiHost,auth:t.default.inject.service(),headers:t.default.computed("auth.credentials.token",{get:function(){var e={},t=this.get("auth.credentials.token");return t&&(e.Authorization="Token token="+t),e}})})}),define("jmwwvt/app",["exports","ember","jmwwvt/resolver","ember-load-initializers","jmwwvt/config/environment"],function(e,t,n,a,l){var o=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,o=t.default.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:n.default}),(0,a.default)(o,l.default.modulePrefix),e.default=o}),define("jmwwvt/application/adapter",["exports","jmwwvt/config/environment","active-model-adapter","ember"],function(e,t,n,a){e.default=n.default.extend({host:t.default.apiHost,auth:a.default.inject.service(),headers:a.default.computed("auth.credentials.token",{get:function(){var e={},t=this.get("auth.credentials.token");return t&&(e.Authorization="Token token="+t),e}})})}),define("jmwwvt/application/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{signOut:function(){var e=this;this.get("auth").signOut().then(function(){return e.get("store").unloadAll()}).then(function(){return e.transitionTo("sign-in")}).then(function(){e.get("flashMessages").warning("You have been signed out.")}).catch(function(){e.get("flashMessages").danger("There was a problem. Are you sure you're signed-in?")})},error:function(e){var t=e.errors&&e.errors.some(function(e){return"401"===e.status});return t?(this.get("flashMessages").danger("You must be authenticated to access this page."),this.transitionTo("/sign-in")):this.get("flashMessages").danger("There was a problem. Please try again."),!1}}})}),define("jmwwvt/application/serializer",["exports","active-model-adapter"],function(e,t){e.default=t.ActiveModelSerializer.extend({})}),define("jmwwvt/application/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Z6a30t/n",block:'{"statements":[["append",["helper",["my-application"],null,[["signOut"],["signOut"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/application/template.hbs"}})}),define("jmwwvt/auth/service",["exports","ember","ember-local-storage"],function(e,t,n){e.default=t.default.Service.extend({ajax:t.default.inject.service(),credentials:(0,n.storageFor)("auth"),isAuthenticated:t.default.computed.bool("credentials.token"),signUp:function(e){return this.get("ajax").post("/sign-up",{data:{credentials:{email:e.email,password:e.password,password_confirmation:e.passwordConfirmation}}})},signIn:function(e){var t=this;return this.get("ajax").post("/sign-in",{data:{credentials:{email:e.email,password:e.password}}}).then(function(e){t.get("credentials").set("id",e.user.id),t.get("credentials").set("email",e.user.email),t.get("credentials").set("token",e.user.token)})},changePassword:function(e){return this.get("ajax").patch("/change-password/"+this.get("credentials.id"),{data:{passwords:{old:e.previous,new:e.next}}})},signOut:function(){var e=this;return this.get("ajax").del("/sign-out/"+this.get("credentials.id")).finally(function(){return e.get("credentials").reset()})}})}),define("jmwwvt/auth/storage",["exports","ember-local-storage/local/object"],function(e,t){e.default=t.default.extend({})}),define("jmwwvt/category-image/model",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({title:t.default.attr("string"),category:t.default.attr("string"),description:t.default.attr("string"),link:t.default.attr("string")})}),define("jmwwvt/category/edit/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("jmwwvt/category/edit/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"kTmVCcpd",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/category/edit/template.hbs"}})}),define("jmwwvt/category/model",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({category:t.default.attr("string"),count:t.default.attr("string")})}),define("jmwwvt/category/new/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return console.log("this ran!"),this.get("store").createRecord("portfolio-image",{})},actions:{createImage:function(e){e.save(),this.transitionTo("portfolio")},cancelCreateImage:function(e){e.rollbackAttributes(),this.transitionTo("portfolio")}}})}),define("jmwwvt/category/new/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"gpZmwFpf",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Create a new image link!!!"],["close-element"],["text","\\n"],["append",["helper",["portfolio-image-edit"],null,[["image","save","cancel"],[["get",["model"]],"createImage","cancelCreateImage"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/category/new/template.hbs"}})}),define("jmwwvt/category/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(e){console.log("happening");var t=this.get("store").find("portfolio-image",e.image_id);console.log("Category: ",t.get("category-image"));var n=this.get("store").findRecord("category",{category:t.get("category")});return n},image:function(e){var t=this.get("store").findRecord("category",{category:e.get("category")});return t},actions:{deleteLink:function(e){e.destroyRecord()}}})}),define("jmwwvt/category/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"bbkkTV89",block:'{"statements":[["open-element","div",[]],["static-attr","class","main-content"],["flush-element"],["text","\\n  "],["open-element","h2",[]],["flush-element"],["text","portfolio category contents go here"],["close-element"],["text","\\n  "],["append",["unknown",["model","category"]],false],["text","\\n"],["block",["each"],[["get",["image"]]],null,2],["block",["link-to"],["category/new"],null,0],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  Add an image\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","img",[]],["dynamic-attr","src",["unknown",["image","link"]],null],["static-attr","alt","portfolio_category"],["static-attr","class","portfolio-image"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["link-to"],["category",["get",["image"]]],null,1]],"locals":["image"]}],"hasPartials":false}',meta:{moduleName:"jmwwvt/category/template.hbs"}})}),define("jmwwvt/change-password/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{changePassword:function(e){var t=this;this.get("auth").changePassword(e).then(function(){return t.get("auth").signOut()}).then(function(){return t.transitionTo("sign-in")}).then(function(){t.get("flashMessages").success("Successfully changed your password!")}).then(function(){t.get("flashMessages").warning("You have been signed out.")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("jmwwvt/change-password/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"5erW1+vl",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Change Password"],["close-element"],["text","\\n\\n"],["append",["helper",["change-password-form"],null,[["submit"],["changePassword"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/change-password/template.hbs"}})}),define("jmwwvt/components/change-password-form/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],passwords:{},actions:{submit:function(){this.sendAction("submit",this.get("passwords"))},reset:function(){this.set("passwords",{})}}})}),define("jmwwvt/components/change-password-form/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"8rR6lvse",block:'{"statements":[["open-element","div",[]],["static-attr","class","form-group"],["flush-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","previous"],["flush-element"],["text","Old Password"],["close-element"],["text","\\n  "],["append",["helper",["input"],null,[["type","class","id","placeholder","value"],["password","form-control","previous","Old password",["get",["passwords","previous"]]]]],false],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","div",[]],["static-attr","class","form-group"],["flush-element"],["text","\\n  "],["open-element","label",[]],["static-attr","for","next"],["flush-element"],["text","New Password"],["close-element"],["text","\\n  "],["append",["helper",["input"],null,[["type","class","id","placeholder","value"],["password","form-control","next","New password",["get",["passwords","next"]]]]],false],["text","\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Change Password\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/change-password-form/template.hbs"}})}),define("jmwwvt/components/edit-image/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({actions:{save:function(){this.sendAction("save",this.get("image"))},cancel:function(){this.sendAction("cancel",this.get("image"))}}})}),define("jmwwvt/components/edit-image/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"1SQmIaf/",block:'{"statements":[["open-element","form",[]],["modifier",["action"],[["get",[null]],"save"],[["on"],["submit"]]],["flush-element"],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value"],["Title",["get",["image","title"]]]]],false],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value"],["Description",["get",["image","description"]]]]],false],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value"],["Link",["get",["image","link"]]]]],false],["text","\\n  "],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-xs"],["flush-element"],["text","Save"],["close-element"],["text","\\n  "],["open-element","button",[]],["static-attr","class","btn btn-xs btn-danger"],["modifier",["action"],[["get",[null]],"cancel"]],["flush-element"],["text","Cancel"],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/edit-image/template.hbs"}})}),define("jmwwvt/components/email-input/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("jmwwvt/components/email-input/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"0qYYOEt2",block:'{"statements":[["open-element","label",[]],["static-attr","for","email"],["flush-element"],["text","Email"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["email","email","Email",["get",["email"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/email-input/template.hbs"}})}),define("jmwwvt/components/flash-message",["exports","ember-cli-flash/components/flash-message"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("jmwwvt/components/hamburger-menu/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"button",classNames:["navbar-toggle","collapsed"],attributeBindings:["toggle:data-toggle","target:data-target","expanded:aria-expanded"],toggle:"collapse",target:"#navigation",expanded:!1})}),define("jmwwvt/components/hamburger-menu/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"ECTtXuED",block:'{"statements":[["text","  "],["open-element","span",[]],["static-attr","class","sr-only"],["flush-element"],["text","Toggle navigation"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n  "],["open-element","span",[]],["static-attr","class","icon-bar"],["flush-element"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/hamburger-menu/template.hbs"}})}),define("jmwwvt/components/image-link/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({})}),define("jmwwvt/components/image-link/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"uYVtAP/O",block:'{"statements":[["text","an image goes here\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/image-link/template.hbs"}})}),define("jmwwvt/components/my-application/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({auth:t.default.inject.service(),user:t.default.computed.alias("auth.credentials.email"),isAuthenticated:t.default.computed.alias("auth.isAuthenticated"),actions:{signOut:function(){this.sendAction("signOut")}}})}),define("jmwwvt/components/my-application/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"tae+DCry",block:'{"statements":[["open-element","nav",[]],["static-attr","class","navbar navbar-default"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","container-fluid"],["flush-element"],["text","\\n    "],["append",["unknown",["navbar-header"]],false],["text","\\n\\n    "],["open-element","div",[]],["static-attr","class","collapse navbar-collapse"],["static-attr","id","navigation"],["flush-element"],["text","\\n      "],["open-element","ul",[]],["static-attr","class","nav navbar-nav"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isAuthenticated"]]],null,8],["text","      "],["close-element"],["text","\\n      "],["open-element","a",[]],["flush-element"],["block",["link-to"],["portfolio"],null,6],["close-element"],["text","\\n      "],["open-element","ul",[]],["static-attr","class","nav navbar-nav navbar-right"],["flush-element"],["text","\\n"],["block",["if"],[["get",["isAuthenticated"]]],null,5,3],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["block",["each"],[["get",["flashMessages","queue"]]],null,0],["text","\\n"],["open-element","div",[]],["static-attr","class","col-md-8 col-md-offset-2"],["flush-element"],["text","\\n  "],["append",["unknown",["outlet"]],false],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["append",["helper",["flash-message"],null,[["flash"],[["get",["flash"]]]]],false],["text","\\n"]],"locals":["flash"]},{"statements":[["text","Sign In"]],"locals":[]},{"statements":[["text","Sign Up"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["sign-up"],null,2],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["sign-in"],null,1],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","Change Password"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["change-password"],null,4],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["open-element","a",[]],["static-attr","href","#"],["modifier",["action"],[["get",[null]],"signOut"]],["flush-element"],["text","Sign Out"],["close-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","Portfolio"]],"locals":[]},{"statements":[["text","Users"]],"locals":[]},{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["users"],null,7],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/my-application/template.hbs"}})}),define("jmwwvt/components/navbar-header/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["navbar-header"]})}),define("jmwwvt/components/navbar-header/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"dhmtvaFP",block:'{"statements":[["append",["unknown",["hamburger-menu"]],false],["text","\\n"],["block",["link-to"],["application"],[["class"],["navbar-brand"]],0],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","Home"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/navbar-header/template.hbs"}})}),define("jmwwvt/components/password-confirmation-input/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("jmwwvt/components/password-confirmation-input/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"rud1jTD4",block:'{"statements":[["open-element","label",[]],["static-attr","for","password-confirmation"],["flush-element"],["text","Password Confirmation"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["password","password-confirmation","Password Confirmation",["get",["password"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/password-confirmation-input/template.hbs"}})}),define("jmwwvt/components/password-input/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["form-group"]})}),define("jmwwvt/components/password-input/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"X4PU/b7t",block:'{"statements":[["open-element","label",[]],["static-attr","for","kind"],["flush-element"],["text","Password"],["close-element"],["text","\\n"],["append",["helper",["input"],null,[["type","id","placeholder","value"],["password","password","Password",["get",["password"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/password-input/template.hbs"}})}),define("jmwwvt/components/portfolio-image-edit/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({actions:{save:function(){this.sendAction("save",this.get("image"))},cancel:function(){this.sendAction("cancel",this.get("image"))}}})}),define("jmwwvt/components/portfolio-image-edit/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"fCro+aCv",block:'{"statements":[["open-element","form",[]],["modifier",["action"],[["get",[null]],"save"],[["on"],["submit"]]],["flush-element"],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value","required"],["Title",["get",["image","title"]],true]]],false],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value","required"],["Category",["get",["image","category"]],true]]],false],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value","required"],["Description",["get",["image","description"]],true]]],false],["text","\\n  "],["append",["helper",["input"],null,[["placeholder","value","required"],["Link",["get",["image","link"]],true]]],false],["text","\\n  "],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-xs"],["flush-element"],["text","Save"],["close-element"],["text","\\n  "],["open-element","button",[]],["static-attr","class","btn btn-xs btn-danger"],["modifier",["action"],[["get",[null]],"cancel"]],["flush-element"],["text","Cancel"],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/portfolio-image-edit/template.hbs"}})}),define("jmwwvt/components/portfolio-image/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({model:function(e){var t=this.get("store").findRecord("portfolio-image",e.portfolioimage_id);return t},auth:t.default.inject.service(),matchTag:t.default.computed("image",function(){var e="z"!==this.get("image").get("category");return e}),canEdit:t.default.computed("image",function(){var e=this.get("auth.credentials.id"),t=this.get("image").get("_owner");return e===t}),actions:{deleteLink:function(){this.sendAction("deleteLink",this.get("image"))},save:function(e){this.sendAction("save",e)},cancel:function(e){this.sendAction("cancel",e)}}})}),define("jmwwvt/components/portfolio-image/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"FG1T7ir3",block:'{"statements":[["block",["if"],[["get",["matchTag"]]],null,2]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      "],["open-element","button",[]],["static-attr","class","btn btn-xs btn-default"],["flush-element"],["text","EDIT"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["link-to"],["portfolio-image/edit",["get",["image"]]],null,0],["text","    "],["open-element","button",[]],["static-attr","class","btn btn-xs btn-danger"],["modifier",["action"],[["get",[null]],"deleteLink"]],["flush-element"],["text","DELETE"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","img",[]],["dynamic-attr","src",["unknown",["image","link"]],null],["static-attr","alt","portfolio_category"],["static-attr","class","portfolio-image"],["flush-element"],["close-element"],["text","\\n  "],["open-element","br",[]],["flush-element"],["close-element"],["text","\\n"],["block",["if"],[["get",["canEdit"]]],null,1]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/portfolio-image/template.hbs"}})}),define("jmwwvt/components/sign-in-form/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],actions:{submit:function(){this.sendAction("submit",this.get("credentials"))},reset:function(){this.set("credentials",{})}}})}),define("jmwwvt/components/sign-in-form/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"RW/E5zBU",block:'{"statements":[["append",["helper",["email-input"],null,[["email"],[["get",["credentials","email"]]]]],false],["text","\\n"],["append",["helper",["password-input"],null,[["password"],[["get",["credentials","password"]]]]],false],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Sign In\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/sign-in-form/template.hbs"}})}),define("jmwwvt/components/sign-up-form/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"form",classNames:["form-horizontal"],credentials:{},actions:{submit:function(){this.sendAction("submit",this.get("credentials"))},reset:function(){this.set("credentials",{})}}})}),define("jmwwvt/components/sign-up-form/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"/vCSrzRz",block:'{"statements":[["append",["helper",["email-input"],null,[["email"],[["get",["credentials","email"]]]]],false],["text","\\n"],["append",["helper",["password-input"],null,[["password"],[["get",["credentials","password"]]]]],false],["text","\\n"],["append",["helper",["password-confirmation-input"],null,[["password"],[["get",["credentials","passwordConfirmation"]]]]],false],["text","\\n\\n"],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","btn btn-primary"],["modifier",["action"],[["get",[null]],"submit"]],["flush-element"],["text","\\n  Sign Up\\n"],["close-element"],["text","\\n\\n"],["open-element","button",[]],["static-attr","class","btn btn-default"],["modifier",["action"],[["get",[null]],"reset"]],["flush-element"],["text","\\n  Cancel\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/components/sign-up-form/template.hbs"}})}),define("jmwwvt/contact/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("jmwwvt/contact/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"QGt34lFl",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/contact/template.hbs"}})}),define("jmwwvt/controllers/array",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("jmwwvt/controllers/object",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("jmwwvt/flash/object",["exports","ember-cli-flash/flash/object"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("jmwwvt/helpers/app-version",["exports","ember","jmwwvt/config/environment"],function(e,t,n){function a(){return l}e.appVersion=a;var l=n.default.APP.version;e.default=t.default.Helper.helper(a)}),define("jmwwvt/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("jmwwvt/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("jmwwvt/index/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("jmwwvt/index/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"nn2Azz/j",block:'{"statements":[["open-element","div",[]],["static-attr","class","main-content chalk-text"],["flush-element"],["text","\\n  "],["open-element","h1",[]],["flush-element"],["text","about us info goes here"],["close-element"],["text","\\n  "],["open-element","p",[]],["flush-element"],["text","Providing quality workmanship for your home improvement needs. We will work with you to ensure all your needs and expectations are met. No job too small."],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/index/template.hbs"}})}),define("jmwwvt/initializers/active-model-adapter",["exports","active-model-adapter","active-model-adapter/active-model-serializer"],function(e,t,n){e.default={name:"active-model-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("adapter:-active-model",t.default),e.register("serializer:-active-model",n.default)}}}),define("jmwwvt/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","jmwwvt/config/environment"],function(e,t,n){var a=n.default.APP,l=a.name,o=a.version;e.default={name:"App Version",initialize:(0,t.default)(l,o)}}),define("jmwwvt/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("jmwwvt/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("jmwwvt/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("jmwwvt/initializers/export-application-global",["exports","ember","jmwwvt/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var l,o=n.default.exportApplicationGlobal;l="string"==typeof o?o:t.default.String.classify(n.default.modulePrefix),a[l]||(a[l]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[l]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("jmwwvt/initializers/flash-messages",["exports","ember","jmwwvt/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0],t=n.default||{},a=t.flashMessageDefaults,r=a||[],m=r.injectionFactories,c=o(i,a),d=!(m&&m.length);e.register("config:flash-messages",c,{instantiate:!1}),e.inject("service:flash-messages","flashMessageDefaults","config:flash-messages"),l(s,d,{id:"ember-cli-flash.deprecate-injection-factories",until:"2.0.0"}),c.injectionFactories.forEach(function(t){e.inject(t,"flashMessages","service:flash-messages")})}e.initialize=a;var l=t.default.deprecate,o=t.default.assign||t.default.merge,s="[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.",i={timeout:3e3,extendedTimeout:0,priority:100,sticky:!1,showProgress:!1,type:"info",types:["success","info","warning","danger","alert","secondary"],injectionFactories:["route","controller","view","component"],preventDuplicates:!1};e.default={name:"flash-messages",initialize:a}}),define("jmwwvt/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("jmwwvt/initializers/local-storage-adapter",["exports","ember-local-storage/initializers/local-storage-adapter"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("jmwwvt/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("jmwwvt/initializers/text-field",["exports","ember"],function(e,t){function n(){t.default.TextField.reopen({classNames:["form-control"]})}e.initialize=n,e.default={name:"text-field",initialize:n}}),define("jmwwvt/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("jmwwvt/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("jmwwvt/portfolio-image/edit/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(e){return this.get("store").find("portfolio-image",e.portfolio_image_id)},actions:{save:function(e){e.save(),
this.transitionTo("portfolio")},cancel:function(e){e.rollbackAttributes(),this.transitionTo("portfolio")}}})}),define("jmwwvt/portfolio-image/edit/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"c4ArN07z",block:'{"statements":[["append",["helper",["portfolio-image-edit"],null,[["image","save","cancel"],[["get",["model"]],"save","cancel"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/portfolio-image/edit/template.hbs"}})}),define("jmwwvt/portfolio-image/model",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({title:t.default.attr("string"),category:t.default.attr("string"),description:t.default.attr("string"),link:t.default.attr("string"),_owner:t.default.attr("string")})}),define("jmwwvt/portfolio-image/new/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return console.log("this ran!"),this.get("store").createRecord("portfolio-image",{})},actions:{createImage:function(e){e.save(),this.transitionTo("portfolio")},cancelCreateImage:function(e){e.rollbackAttributes(),this.transitionTo("portfolio")}}})}),define("jmwwvt/portfolio-image/new/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"MbZN54JB",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Create a new image link!!!"],["close-element"],["text","\\n"],["append",["helper",["portfolio-image-edit"],null,[["image","save","cancel"],[["get",["model"]],"createImage","cancelCreateImage"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/portfolio-image/new/template.hbs"}})}),define("jmwwvt/portfolio/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),model:function(){var e=this.get("store").findAll("category"),t=this.get("store").findAll("portfolio-image");console.log(this.get("auth.isAuthenticated"));var n=this.get("auth.isAuthenticated");return{categories:e,images:t,loggedIn:n}},actions:{editLink:function(e){this.transitionTo("portfolio-image/edit",e)},deleteLink:function(e){e.destroyRecord()}},createCategory:function(e){var t=this.get("store").createRecord("portfolio-image",e);t.save()}})}),define("jmwwvt/portfolio/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"uiwn9LoD",block:'{"statements":[["open-element","div",[]],["static-attr","class","main-content chalk-text"],["flush-element"],["text","\\n  "],["open-element","h2",[]],["flush-element"],["text","portfolio categories go here"],["close-element"],["text","\\n"],["block",["each"],[["get",["model","images"]]],null,2],["block",["if"],[["get",["model","loggedIn"]]],null,1],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","button",[]],["static-attr","class","btn btn-xs btn-std"],["flush-element"],["text","Add Image"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["link-to"],["portfolio-image/new"],null,0]],"locals":[]},{"statements":[["text","    "],["append",["helper",["portfolio-image"],null,[["image","editLink","deleteLink"],[["get",["image"]],"editLink","deleteLink"]]],false],["text","\\n"]],"locals":["image"]}],"hasPartials":false}',meta:{moduleName:"jmwwvt/portfolio/template.hbs"}})}),define("jmwwvt/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("jmwwvt/router",["exports","ember","jmwwvt/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType});a.map(function(){this.route("sign-up"),this.route("sign-in"),this.route("change-password"),this.route("users"),this.route("portfolio"),this.route("contact"),this.route("portfolio-image/new"),this.route("portfolio-image/edit",{path:"portfolio-image/:portfolio_image_id/edit"}),this.route("category",{path:"category/:image_id"}),this.route("category/new"),this.route("category/edit",{path:"category/:image_id/edit"})}),e.default=a}),define("jmwwvt/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("jmwwvt/services/flash-messages",["exports","ember-cli-flash/services/flash-messages"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("jmwwvt/sign-in/route",["exports","ember","rsvp"],function(e,t,n){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),model:function(){return n.default.Promise.resolve({})},actions:{signIn:function(e){var t=this;return this.get("auth").signIn(e).then(function(){return t.transitionTo("application")}).then(function(){return t.get("flashMessages").success("Thanks for signing in!")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("jmwwvt/sign-in/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"VSumN6QZ",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Sign In"],["close-element"],["text","\\n\\n"],["append",["helper",["sign-in-form"],null,[["submit","reset","credentials"],["signIn","reset",["get",["model"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/sign-in/template.hbs"}})}),define("jmwwvt/sign-up/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({auth:t.default.inject.service(),flashMessages:t.default.inject.service(),actions:{signUp:function(e){var t=this;this.get("auth").signUp(e).then(function(){return t.get("auth").signIn(e)}).then(function(){return t.transitionTo("application")}).then(function(){t.get("flashMessages").success("Successfully signed-up! You have also been signed-in.")}).catch(function(){t.get("flashMessages").danger("There was a problem. Please try again.")})}}})}),define("jmwwvt/sign-up/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"s5Slnfjn",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Sign Up"],["close-element"],["text","\\n\\n"],["append",["helper",["sign-up-form"],null,[["submit"],["signUp"]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"jmwwvt/sign-up/template.hbs"}})}),define("jmwwvt/tags/model",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({})}),define("jmwwvt/user/model",["exports","ember-data"],function(e,t){e.default=t.default.Model.extend({email:t.default.attr("string")})}),define("jmwwvt/users/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return this.get("store").findAll("user")}})}),define("jmwwvt/users/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"WaSTGdwi",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Users"],["close-element"],["text","\\n\\n"],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["model"]]],null,0],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","li",[]],["flush-element"],["append",["unknown",["user","email"]],false],["close-element"],["text","\\n"]],"locals":["user"]}],"hasPartials":false}',meta:{moduleName:"jmwwvt/users/template.hbs"}})}),define("jmwwvt/config/environment",["ember"],function(e){var t="jmwwvt";try{var n=t+"/config/environment",a=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),l=JSON.parse(unescape(a)),o={default:l};return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("jmwwvt/app").default.create({name:"jmwwvt",version:"0.0.0+178d14d4"});