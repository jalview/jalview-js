(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'java.util.StringTokenizer','java.util.ResourceBundle','org.openscience.jmol.app.janocchio.Nmr','java.util.Locale','javax.swing.ImageIcon']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NmrResourceHandler");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['stringsResourceBundle','java.util.ResourceBundle']]
,['O',['instance','org.openscience.jmol.app.janocchio.NmrResourceHandler']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
var language="en";
var country="";
var localeString=System.getProperty$S("user.language");
if (localeString != null ) {
var st=Clazz.new_($I$(1,1).c$$S$S,[localeString, "_"]);
if (st.hasMoreTokens$()) {
language=st.nextToken$();
}if (st.hasMoreTokens$()) {
country=st.nextToken$();
}}this.stringsResourceBundle=$I$(2,"getBundle$S$java_util_Locale",[$I$(3).path + "Properties.Nmr", Clazz.new_($I$(4,1).c$$S$S,[language, country])]);
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
return (C$.instance == null  ? (C$.instance=Clazz.new_(C$)) : C$.instance);
}, 1);

Clazz.newMeth(C$, 'getIcon$S', function (key) {
var resourceName=null;
try {
resourceName=p$1.getString$S.apply(this, [key]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
} else {
throw e;
}
}
if (resourceName != null ) {
var imageName=$I$(3).path.replace$C$C(".", "/") + "images/" + resourceName ;
var imageUrl=Clazz.getClass($I$(3)).getClassLoader$().getResource$S(imageName);
if (imageUrl != null ) {
return Clazz.new_($I$(5,1).c$$java_net_URL,[imageUrl]);
}}return null;
}, p$1);

Clazz.newMeth(C$, 'getStringX$S', function (key) {
return p$1.getString$S.apply(C$.getInstance$(), [key]);
}, 1);

Clazz.newMeth(C$, 'getIconX$S', function (key) {
return p$1.getIcon$S.apply(C$.getInstance$(), [key]);
}, 1);

Clazz.newMeth(C$, 'getString$S', function (key) {
var result=null;
try {
result=this.stringsResourceBundle.getString$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
} else {
throw e;
}
}
return result == null  ? key : result;
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
