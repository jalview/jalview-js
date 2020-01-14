(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'swingjs.JSUtil','java.util.Locale']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSApp");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.params=null;
this.appletCodeBase=null;
this.appletIdiomaBase=null;
this.appletDocumentBase=null;
this.appletName=null;
this.htmlName=null;
this.main=null;
this.syncId=null;
this.testAsync=false;
this.async=false;
this.strJavaVersion=null;
this.strJavaVendor=null;
this.isApplet=false;
this.isFrame=false;
this.html5Applet=null;
this.fullName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.fullName="Main";
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Hashtable', function (params) {
C$.$init$.apply(this);
this.setAppParams$java_util_Hashtable(params);
}, 1);

Clazz.newMeth(C$, 'getParameter$S', function (name) {
var s=this.params.get$O(name);
System.out.println$S("get parameter: " + name + " = " + s );
return (s == null  ? null : "" + s);
});

Clazz.newMeth(C$, 'setAppParams$java_util_Hashtable', function (params) {
this.params=params;
var language=this.getParameter$S("language");
if (language == null ) language=$I$(1).J2S.getDefaultLanguage(false);
$I$(2).setDefault$java_util_Locale($I$(1).getDefaultLocale$S(language));
this.htmlName=p$1.extract$S$S.apply(this, ["" + this.getParameter$S("name"), "_object"]);
this.appletName=p$1.extract$S$S.apply(this, [this.htmlName + "_", "_"]);
this.syncId=this.getParameter$S("syncId");
this.fullName=this.htmlName + "__" + this.syncId + "__" ;
params.put$TK$TV("fullName", this.fullName);
var o=params.get$O("codePath");
if (o == null ) o="../java/";
this.appletCodeBase=o.toString();
this.appletIdiomaBase=this.appletCodeBase.substring$I$I(0, this.appletCodeBase.lastIndexOf$S$I("/", this.appletCodeBase.length$() - 2) + 1) + "idioma";
o=params.get$O("documentBase");
this.appletDocumentBase=(o == null  ? "" : o.toString());
if (params.containsKey$O("maximumSize")) Math.max((params.get$O("maximumSize")).intValue$(), 100);
this.async=(this.testAsync || params.containsKey$O("async") );
var applet=$I$(1).J2S.findApplet(this.htmlName);
var javaver=$I$(1).J2S.getJavaVersion();
this.html5Applet=applet;
this.strJavaVersion=javaver;
this.strJavaVendor="Java2Script/Java 1.6 (HTML5)";
o=params.get$O("assets");
if (o != null ) $I$(1).loadJavaResourcesFromZip$ClassLoader$S$java_util_Map(this.getClass$().getClassLoader$(), o, null);
System.out.println$S("JSApp initialized");
});

Clazz.newMeth(C$, 'extract$S$S', function (string, key) {
{
return string.split(key)[0];
}
return null;
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:41 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
