(function(){var P$=Clazz.newPackage("org.jmol.i18n"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.i18n.Resource','org.jmol.util.Logger','java.text.MessageFormat','javajs.util.PT','org.jmol.i18n.Language']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GT", null, null, 'org.jmol.api.Translator');
C$.ignoreApplicationBundle=false;
C$.getTextWrapper=null;
C$.languageList=null;
C$.allowDebug=false;
C$.vwr=null;
C$.htLanguages=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.ignoreApplicationBundle=false;
C$.allowDebug=false;
C$.htLanguages=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.resources=null;
this.resourceCount=0;
this.doTranslate=false;
this.language=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.resources=null;
this.resourceCount=0;
this.doTranslate=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['translate$S','translate$'], function (s) {
return C$.$$S(s);
});

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$S', function (vwr, langCode) {
C$.$init$.apply(this);

{}
this.resources=null;
this.resourceCount=0;
C$.getTextWrapper=this;
if (langCode != null  && langCode.length$() == 0 ) langCode="none";
if (langCode != null ) this.language=langCode;
if ("none".equals$O(this.language)) this.language=null;
if (this.language == null ) this.language=$I$(2).getLanguage$();
if (this.language == null ) this.language="en";
var la=this.language;
var la_co=null;
var la_co_va=null;
var i=this.language.indexOf$S("_");
if (i >= 0) {
la=la.substring$I$I(0, i);
la_co=this.language;
if ((i=la_co.indexOf$S$I("_", ++i)) >= 0) {
la_co=la_co.substring$I$I(0, i);
la_co_va=this.language;
}}if ((this.language=p$1.getSupported$S.apply(this, [la_co_va])) == null  && (this.language=p$1.getSupported$S.apply(this, [la_co])) == null   && (this.language=p$1.getSupported$S.apply(this, [la])) == null  ) {
this.language="en";
System.out.println$S(this.language + " not supported -- using en");
return;
}la_co_va=null;
la_co=null;
switch (this.language.length$()) {
default:
la_co_va=this.language;
la_co=this.language.substring$I$I(0, 5);
la=this.language.substring$I$I(0, 2);
break;
case 5:
la_co=this.language;
la=this.language.substring$I$I(0, 2);
break;
case 2:
la=this.language;
break;
}
la_co=p$1.getSupported$S.apply(this, [la_co]);
la=p$1.getSupported$S.apply(this, [la]);
if (la == la_co || "en_US".equals$O(la) ) la=null;
if (la_co == la_co_va) la_co=null;
if ("en_US".equals$O(la_co)) return;
if (C$.allowDebug && $I$(3).debugging ) $I$(3).debug$S("Instantiating gettext wrapper for " + this.language + " using files for language:" + la + " country:" + la_co + " variant:" + la_co_va );
if (!C$.ignoreApplicationBundle) p$1.addBundles$org_jmol_viewer_Viewer$S$S$S$S.apply(this, [vwr, "Jmol", la_co_va, null, null]);
p$1.addBundles$org_jmol_viewer_Viewer$S$S$S$S.apply(this, [vwr, "JmolApplet", la_co_va, null, null]);
if (!C$.ignoreApplicationBundle) p$1.addBundles$org_jmol_viewer_Viewer$S$S$S$S.apply(this, [vwr, "Jmol", null, la_co, null]);
p$1.addBundles$org_jmol_viewer_Viewer$S$S$S$S.apply(this, [vwr, "JmolApplet", null, la_co, null]);
if (!C$.ignoreApplicationBundle) p$1.addBundles$org_jmol_viewer_Viewer$S$S$S$S.apply(this, [vwr, "Jmol", null, null, la]);
p$1.addBundles$org_jmol_viewer_Viewer$S$S$S$S.apply(this, [vwr, "JmolApplet", null, null, la]);
}, 1);

Clazz.newMeth(C$, 'getLanguageList$org_jmol_i18n_GT', function (gt) {
if (C$.languageList == null ) {
if (gt == null ) gt=C$.getTextWrapper$();
p$1.createLanguageList.apply(gt, []);
}return C$.languageList;
}, 1);

Clazz.newMeth(C$, 'getLanguage$', function () {
return C$.getTextWrapper$().language;
}, 1);

Clazz.newMeth(C$, 'ignoreApplicationBundle$', function () {
C$.ignoreApplicationBundle=true;
}, 1);

Clazz.newMeth(C$, 'setDoTranslate$Z', function (TF) {
var b=C$.getDoTranslate$();
C$.getTextWrapper$().doTranslate=TF;
return b;
}, 1);

Clazz.newMeth(C$, 'getDoTranslate$', function () {
return C$.getTextWrapper$().doTranslate;
}, 1);

Clazz.newMeth(C$, '$$S', function (string) {
return p$1.getString$S.apply(C$.getTextWrapper$(), [string]);
}, 1);

Clazz.newMeth(C$, 'o$S$O', function (s, o) {
if (Clazz.instanceOf(o, Clazz.array(java.lang.Object, -1))) {
if ((o).length != 1) return $I$(4).format$S$OA(s, o);
o=(o)[0];
}return $I$(5).rep$S$S$S(s, "{0}", o.toString());
}, 1);

Clazz.newMeth(C$, 'i$S$I', function (s, n) {
return $I$(5).rep$S$S$S(s, "{0}", "" + n);
}, 1);

Clazz.newMeth(C$, 'escapeHTML$S', function (msg) {
var ch;
for (var i=msg.length$(); --i >= 0; ) if (((ch=msg.charAt$I(i)).$c()) > 127 ) {
msg=msg.substring$I$I(0, i) + "&#" + (ch.$c()) + ";" + msg.substring$I(i + 1) ;
}
return msg;
}, 1);

Clazz.newMeth(C$, 'getTextWrapper$', function () {
return (C$.getTextWrapper == null  ? C$.getTextWrapper=Clazz.new_(C$.c$$org_jmol_viewer_Viewer$S,[null, null]) : C$.getTextWrapper);
}, 1);

Clazz.newMeth(C$, 'createLanguageList', function () {
var wasTranslating=this.doTranslate;
this.doTranslate=false;
C$.languageList=$I$(6).getLanguageList$();
this.doTranslate=wasTranslating;
}, p$1);

Clazz.newMeth(C$, 'getSupported$S', function (code) {
if (code == null ) return null;
var s=C$.htLanguages.get$O(code);
if (s != null ) return (s.length$() == 0 ? null : s);
s=$I$(6).getSupported$org_jmol_i18n_LanguageA$S(C$.getLanguageList$org_jmol_i18n_GT(this), code);
C$.htLanguages.put$TK$TV(code, (s == null  ? "" : s));
return s;
}, p$1);

Clazz.newMeth(C$, 'addBundles$org_jmol_viewer_Viewer$S$S$S$S', function (vwr, type, la_co_va, la_co, la) {
try {
var className="org.jmol.translation." + type + "." ;
if (la_co_va != null ) p$1.addBundle$org_jmol_viewer_Viewer$S$S.apply(this, [vwr, className, la_co_va]);
if (la_co != null ) p$1.addBundle$org_jmol_viewer_Viewer$S$S.apply(this, [vwr, className, la_co]);
if (la != null ) p$1.addBundle$org_jmol_viewer_Viewer$S$S.apply(this, [vwr, className, la]);
} catch (exception) {
if (Clazz.exceptionOf(exception,"Exception")){
if (C$.allowDebug) $I$(3).errorEx$S$Throwable("Some exception occurred!", exception);
this.resources=null;
this.resourceCount=0;
} else {
throw exception;
}
}
}, p$1);

Clazz.newMeth(C$, 'addBundle$org_jmol_viewer_Viewer$S$S', function (vwr, className, name) {
var resource=$I$(2).getResource$org_jmol_viewer_Viewer$S$S(vwr, className, name);
if (resource != null ) {
if (this.resources == null ) {
this.resources=Clazz.array($I$(2), [8]);
this.resourceCount=0;
}this.resources[this.resourceCount]=resource;
this.resourceCount++;
if (C$.allowDebug) $I$(3).debug$S("GT adding " + className);
}}, p$1);

Clazz.newMeth(C$, 'getString$S', function (s) {
var trans=null;
if (this.doTranslate) {
for (var bundle=0; bundle < this.resourceCount; bundle++) {
trans=this.resources[bundle].getString$S(s);
if (trans != null ) {
s=trans;
break;
}}
if (this.resourceCount > 0 && trans == null   && C$.allowDebug  && $I$(3).debugging ) $I$(3).debug$S("No trans, using default: " + s);
}if (trans == null ) {
if (s.startsWith$S("[")) s=s.substring$I(s.indexOf$S("]") + 1);
 else if (s.endsWith$S("]")) s=s.substring$I$I(0, s.indexOf$S("["));
}return s;
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
