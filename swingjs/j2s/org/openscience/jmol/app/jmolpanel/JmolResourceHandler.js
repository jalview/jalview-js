(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,'org.jmol.i18n.GT','java.util.StringTokenizer','java.util.Locale',['java.util.ResourceBundle','.Control'],'java.util.ResourceBundle','java.util.PropertyResourceBundle','javax.swing.ImageIcon']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JmolResourceHandler");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['stringsResourceBundle','java.util.ResourceBundle','+generalResourceBundle']]
,['O',['instance','org.openscience.jmol.app.jmolpanel.JmolResourceHandler','codePath','java.lang.Object']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
var language="en";
var country="";
var localeString=$I$(1).getLanguage$();
if (localeString != null ) {
var st=Clazz.new_($I$(2,1).c$$S$S,[localeString, "_"]);
if (st.hasMoreTokens$()) {
language=st.nextToken$();
}if (st.hasMoreTokens$()) {
country=st.nextToken$();
}}var locale=Clazz.new_($I$(3,1).c$$S$S,[language, country]);
var control=$I$(4,"getControl$java_util_List",[$I$(4).FORMAT_PROPERTIES]);
this.stringsResourceBundle=$I$(5).getBundle$S$java_util_Locale$java_util_ResourceBundle_Control("org.openscience.jmol.app.jmolpanel.Properties.Jmol", locale, control);
try {
var t="/org/openscience/jmol/app/jmolpanel/Properties/Jmol-resources.properties";
this.generalResourceBundle=Clazz.new_([this.getClass$().getResourceAsStream$S(t)],$I$(6,1).c$$java_io_InputStream);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[ex.toString()]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
C$.instance=null;
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'getStringX$S', function (key) {
return p$1.getString$S.apply(C$.getInstance$(), [key]);
}, 1);

Clazz.newMeth(C$, 'getIconX$S', function (key) {
return p$1.getIcon$S.apply(C$.getInstance$(), [key]);
}, 1);

Clazz.newMeth(C$, 'getIcon$S', function (key) {
var resourceName=null;
try {
resourceName=p$1.getString$S.apply(this, [key]);
if (resourceName == key) return null;
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
} else {
throw e;
}
}
if (resourceName != null ) {
var imageName="org/openscience/jmol/app/images/" + resourceName;
var imageUrl=this.getClass$().getClassLoader$().getResource$S(imageName);
if (imageUrl != null ) {
var s=imageUrl.toString();
C$.codePath=s.substring$I$I(0, s.indexOf$S(imageName));
return Clazz.new_($I$(7,1).c$$java_net_URL,[imageUrl]);
}}return null;
}, p$1);

Clazz.newMeth(C$, 'getString$S', function (key) {
var result=null;
if (this.stringsResourceBundle != null  && this.stringsResourceBundle.containsKey$S(key) ) try {
result=this.stringsResourceBundle.getString$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
} else {
throw e;
}
}
if (result == null ) {
if (this.generalResourceBundle.containsKey$S(key)) try {
result=this.generalResourceBundle.getString$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
} else {
throw e;
}
}
}return result != null  ? result : key;
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
