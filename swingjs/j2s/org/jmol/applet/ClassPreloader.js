(function(){var P$=Clazz.newPackage("org.jmol.applet"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ClassPreloader", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['appletWrapper','org.jmol.applet.AppletWrapper']]]

Clazz.newMeth(C$, 'c$$org_jmol_applet_AppletWrapper', function (appletWrapper) {
Clazz.super_(C$, this);
this.appletWrapper=appletWrapper;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var className;
this.setPriority$I(this.getPriority$() - 1);
while ((className=this.appletWrapper.getNextPreloadClassName$()) != null ){
try {
var lastCharIndex=className.length$() - 1;
var constructOne=className.charAt$I(lastCharIndex) == "+";
System.out.println$S("ClassPreloader - " + className);
if (constructOne) className=className.substring$I$I(0, lastCharIndex);
var preloadClass=Clazz.forName(className);
if (constructOne) preloadClass.newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1).fatalEx$S$Throwable("error preloading " + className, e);
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
