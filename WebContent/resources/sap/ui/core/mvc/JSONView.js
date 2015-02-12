/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/library','./View'],function(){"use strict";sap.ui.core.mvc.View.extend("sap.ui.core.mvc.JSONView",{metadata:{library:"sap.ui.core"}});(function(){sap.ui.jsonview=function(i,v){return sap.ui.view(i,v,sap.ui.core.mvc.ViewType.JSON)};sap.ui.core.mvc.JSONView._sType=sap.ui.core.mvc.ViewType.JSON;sap.ui.core.mvc.JSONView.prototype.initViewSettings=function(s){if(!s){throw new Error("mSettings must be given")}if(s.viewName&&s.viewContent){throw new Error("View name and view content are given. There is no point in doing this, so please decide.")}else if(!s.viewName&&!s.viewContent){throw new Error("Neither view name nor view content is given. One of them is required.")}if(s.viewName){this._loadTemplate(s.viewName)}else if(s.viewContent){this.mProperties["viewContent"]=s.viewContent;if(typeof s.viewContent==="string"){this._oJSONView=jQuery.parseJSON(s.viewContent);if(!this._oJSONView){throw new Error("error when parsing viewContent: "+s.viewContent)}}else if(typeof s.viewContent==="object"){this._oJSONView=s.viewContent}else{throw new Error("viewContent must be a JSON string or object, but is a "+(typeof s.viewContent))}}else{}if((this._oJSONView.resourceBundleName||this._oJSONView.resourceBundleUrl)&&(!s.models||!s.models[this._oJSONView.resourceBundleAlias])){var m=new sap.ui.model.resource.ResourceModel({bundleName:this._oJSONView.resourceBundleName,bundleUrl:this._oJSONView.resourceBundleUrl});this.setModel(m,this._oJSONView.resourceBundleAlias)}};sap.ui.core.mvc.JSONView.prototype.onControllerConnected=function(c){var t=this;sap.ui.base.ManagedObject.runWithPreprocessors(function(){t.applySettings({content:t._oJSONView.content})},{id:function(i){return t.createId(i)},settings:function(s){var m=this.getMetadata(),v=m.getJSONKeys(),k,V,K;for(k in s){if(K=v[k]){V=s[k];switch(K._iKind){case 3:s[k]=t.createId(V);break;case 5:if(typeof s[k]==="string"){s[k]=[c[s[k]],c]}break}}}}})};sap.ui.core.mvc.JSONView.prototype._loadTemplate=function(t){var r=jQuery.sap.getResourceName(t,".view.json");this._oJSONView=jQuery.sap.loadResource(r)};sap.ui.core.mvc.JSONView.prototype.getControllerName=function(){return this._oJSONView.controllerName}}());return sap.ui.core.mvc.JSONView},true);
