(function(){var P$=Clazz.newPackage("org.jmol.applet"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ClassPreloader", null, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.appletWrapper=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_applet_AppletWrapper', function (appletWrapper) {
Clazz.super_(C$, this,1);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
