/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/EventProvider','./BindingMode','./Context'],function(q,E,B,C){"use strict";var M=E.extend("sap.ui.model.Model",{constructor:function(){E.apply(this,arguments);this.oData={};this.bDestroyed=false;this.aBindings=[];this.mContexts={};this.iSizeLimit=100;this.sDefaultBindingMode=B.TwoWay;this.mSupportedBindingModes={"OneWay":true,"TwoWay":true,"OneTime":true};this.bLegacySyntax=false},metadata:{"abstract":true,publicMethods:["bindProperty","bindList","bindTree","bindContext","createBindingContext","destroyBindingContext","getProperty","getDefaultBindingMode","setDefaultBindingMode","isBindingModeSupported","attachParseError","detachParseError","attachRequestCompleted","detachRequestCompleted","attachRequestFailed","detachRequestFailed","attachRequestSent","detachRequestSent","setSizeLimit","refresh","isList","getObject"]}});M.M_EVENTS={ParseError:"parseError",RequestFailed:"requestFailed",RequestSent:"requestSent",RequestCompleted:"requestCompleted"};M.prototype.attachRequestFailed=function(d,f,l){this.attachEvent("requestFailed",d,f,l);return this};M.prototype.detachRequestFailed=function(f,l){this.detachEvent("requestFailed",f,l);return this};M.prototype.fireRequestFailed=function(a){this.fireEvent("requestFailed",a);return this};M.prototype.attachParseError=function(d,f,l){this.attachEvent("parseError",d,f,l);return this};M.prototype.detachParseError=function(f,l){this.detachEvent("parseError",f,l);return this};M.prototype.fireParseError=function(a){this.fireEvent("parseError",a);return this};M.prototype.attachRequestSent=function(d,f,l){this.attachEvent("requestSent",d,f,l);return this};M.prototype.detachRequestSent=function(f,l){this.detachEvent("requestSent",f,l);return this};M.prototype.fireRequestSent=function(a){this.fireEvent("requestSent",a);return this};M.prototype.attachRequestCompleted=function(d,f,l){this.attachEvent("requestCompleted",d,f,l);return this};M.prototype.detachRequestCompleted=function(f,l){this.detachEvent("requestCompleted",f,l);return this};M.prototype.fireRequestCompleted=function(a){this.fireEvent("requestCompleted",a);return this};M.prototype.getObject=function(p,c){return this.getProperty(p,c)};M.prototype.getContext=function(p){if(!q.sap.startsWith(p,"/")){throw new Error("Path "+p+" must start with a / ")}var c=this.mContexts[p];if(!c){c=new C(this,p);this.mContexts[p]=c}return c};M.prototype.resolve=function(p,c){var i=!q.sap.startsWith(p,"/"),r=p,s;if(i){if(c){s=c.getPath();r=s+(q.sap.endsWith(s,"/")?"":"/")+p}else{r=this.isLegacySyntax()?"/"+p:undefined}}if(r&&r!=="/"&&q.sap.endsWith(r,"/")){r=r.substr(0,r.length-1)}return r};M.prototype.addBinding=function(b){this.aBindings.push(b)};M.prototype.removeBinding=function(b){for(var i=0;i<this.aBindings.length;i++){if(this.aBindings[i]==b){this.aBindings.splice(i,1);break}}};M.prototype.getDefaultBindingMode=function(){return this.sDefaultBindingMode};M.prototype.setDefaultBindingMode=function(m){if(this.isBindingModeSupported(m)){this.sDefaultBindingMode=m}else{throw new Error("Binding mode "+m+" is not supported by this model.")}};M.prototype.isBindingModeSupported=function(m){return(m in this.mSupportedBindingModes)};M.prototype.setLegacySyntax=function(l){this.bLegacySyntax=l};M.prototype.isLegacySyntax=function(){return this.bLegacySyntax};M.prototype.setSizeLimit=function(s){this.iSizeLimit=s};M.prototype.getInterface=function(){return this};M.prototype.refresh=function(f){this.checkUpdate(f)};M.prototype.checkUpdate=function(f){var b=this.aBindings.slice(0);q.each(b,function(i,o){o.checkUpdate(f)})};M.prototype.destroy=function(){this.oData={};this.aBindings=[];this.mContexts={};this.bDestroyed=true;E.prototype.destroy.apply(this,arguments)};return M},true);
