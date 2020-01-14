(function(){var P$=Clazz.newPackage("org.jmol.applet"),I$=[[0,'javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolApplet", null, 'org.jmol.applet.AppletWrapper', 'org.jmol.api.JmolAppletInterface');
C$.preloadClasses=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.preloadClasses=Clazz.array(String, -1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S$I$SA.apply(this, ["jmol75x29x8.gif", 3, C$.preloadClasses]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['getPropertyAsString$S','getPropertyAsString'], function (infoType) {
return (this.wrappedApplet == null  ? null : "" + (this.wrappedApplet).getPropertyAsString$S("" + infoType));
});

Clazz.newMeth(C$, ['getPropertyAsString$S$S','getPropertyAsString'], function (infoType, paramInfo) {
return (this.wrappedApplet == null  ? null : "" + (this.wrappedApplet).getPropertyAsString$S$S("" + infoType, "" + paramInfo));
});

Clazz.newMeth(C$, ['getPropertyAsJSON$S','getPropertyAsJSON'], function (infoType) {
return (this.wrappedApplet == null  ? null : "" + (this.wrappedApplet).getPropertyAsJSON$S("" + infoType));
});

Clazz.newMeth(C$, ['getPropertyAsJSON$S$S','getPropertyAsJSON'], function (infoType, paramInfo) {
return (this.wrappedApplet == null  ? null : "" + (this.wrappedApplet).getPropertyAsJSON$S$S("" + infoType, "" + paramInfo));
});

Clazz.newMeth(C$, ['getJSpecViewProperty$S','getJSpecViewProperty'], function (infoType) {
return null;
});

Clazz.newMeth(C$, ['getProperty$S$S','getProperty'], function (infoType, paramInfo) {
return (this.wrappedApplet == null  ? null : (this.wrappedApplet).getProperty$S$S("" + infoType, "" + paramInfo));
});

Clazz.newMeth(C$, ['getProperty$S','getProperty'], function (infoType) {
return (this.wrappedApplet == null  ? null : (this.wrappedApplet).getProperty$S("" + infoType));
});

Clazz.newMeth(C$, ['loadInlineArray$SA$S$Z','loadInlineArray'], function (strModels, script, isAppend) {
if (this.wrappedApplet == null  || strModels == null   || strModels.length == 0 ) return null;
var s="" + strModels[0];
if (s.indexOf$I("\n") >= 0 || s.indexOf$I("\r") >= 0 ) {
var converted=Clazz.array(String, [strModels.length]);
for (var i=0; i < strModels.length; ++i) converted[i]="" + strModels[i];

return (this.wrappedApplet).loadInlineArray$SA$S$Z(converted, "" + script, isAppend);
}var sb=Clazz.new_($I$(1));
for (var i=0; i < strModels.length; ++i) sb.append$S(strModels[i]).appendC$C("\n");

return (this.wrappedApplet).loadInlineString$S$S$Z(sb.toString(), "" + script, isAppend);
});

Clazz.newMeth(C$, ['loadInlineString$S$S$Z','loadInlineString'], function (strModel, script, isAppend) {
return (this.wrappedApplet == null  ? null : (this.wrappedApplet).loadInlineString$S$S$Z("" + strModel, "" + script, isAppend));
});

Clazz.newMeth(C$, ['loadInline$S','loadInline'], function (strModel) {
return (this.wrappedApplet == null  ? null : (this.wrappedApplet).loadInline$S("" + strModel));
});

Clazz.newMeth(C$, ['loadInline$S$S','loadInline'], function (strModel, script) {
return (this.wrappedApplet == null  ? null : (this.wrappedApplet).loadInline$S$S("" + strModel, "" + script));
});

Clazz.newMeth(C$, ['loadInline$SA','loadInline'], function (strModels) {
return (this.wrappedApplet == null  ? null : (this.wrappedApplet).loadInline$SA(strModels));
});

Clazz.newMeth(C$, ['loadInline$SA$S','loadInline'], function (strModels, script) {
return (this.wrappedApplet == null  ? null : (this.wrappedApplet).loadInline$SA$S(strModels, script));
});

Clazz.newMeth(C$, ['loadDOMNode$O','loadDOMNode'], function (DOMNode) {
return (this.wrappedApplet == null  ? null : (this.wrappedApplet).loadDOMNode$O(DOMNode));
});

Clazz.newMeth(C$, ['script$S','script'], function (script) {
if (this.wrappedApplet != null ) (this.wrappedApplet).script$S("" + script);
});

Clazz.newMeth(C$, ['syncScript$S','syncScript'], function (script) {
if (this.wrappedApplet != null ) (this.wrappedApplet).syncScript$S("" + script);
});

Clazz.newMeth(C$, ['setStereoGraphics$Z','setStereoGraphics'], function (isStereo) {
return (this.wrappedApplet == null  ? null : (this.wrappedApplet).setStereoGraphics$Z(isStereo));
});

Clazz.newMeth(C$, ['scriptNoWait$S','scriptNoWait'], function (script) {
if (this.wrappedApplet != null ) return "" + ((this.wrappedApplet).scriptNoWait$S("" + script));
return null;
});

Clazz.newMeth(C$, ['scriptCheck$S','scriptCheck'], function (script) {
if (this.wrappedApplet != null ) return "" + ((this.wrappedApplet).scriptCheck$S("" + script));
return null;
});

Clazz.newMeth(C$, ['scriptWait$S','scriptWait'], function (script) {
if (this.wrappedApplet != null ) return "" + ((this.wrappedApplet).scriptWait$S("" + script));
return null;
});

Clazz.newMeth(C$, ['scriptWait$S$S','scriptWait'], function (script, statusParams) {
if (statusParams == null ) statusParams="";
if (this.wrappedApplet != null ) return "" + ((this.wrappedApplet).scriptWait$S$S("" + script, statusParams));
return null;
});

Clazz.newMeth(C$, ['scriptWaitOutput$S','scriptWaitOutput'], function (script) {
if (this.wrappedApplet != null ) return "" + ((this.wrappedApplet).scriptWaitOutput$S("" + script));
return null;
});

Clazz.newMeth(C$, ['registerApplet$S$S','registerApplet'], function (id, fullName) {
var applet=this.getAppletContext$().getApplet$S(id);
if (applet == null ) System.out.println$S("could not find " + id);
this.register$S$org_jmol_api_JmolSyncInterface(fullName, applet);
});

Clazz.newMeth(C$, ['register$S$org_jmol_api_JmolSyncInterface','register'], function (id, jsi) {
if (this.wrappedApplet != null ) (this.wrappedApplet).register$S$org_jmol_api_JmolSyncInterface(id, jsi);
});

Clazz.newMeth(C$, ['getModelIndexFromId$S','getModelIndexFromId'], function (id) {
return (this.wrappedApplet == null  ? -2147483648 : (this.wrappedApplet).getModelIndexFromId$S(id));
});

Clazz.newMeth(C$, ['notifyAudioEnded$O','notifyAudioEnded'], function (htParams) {
if (this.wrappedApplet != null ) (this.wrappedApplet).notifyAudioEnded$O(htParams);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
