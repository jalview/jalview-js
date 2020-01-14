(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'swingjs.JSUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GraphicsEnvironment");
C$.localEnv=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLocalGraphicsEnvironment$', function () {
if (C$.localEnv == null ) {
C$.localEnv=$I$(1).getInstance$S("swingjs.JSGraphicsEnvironment");
}return C$.localEnv;
}, 1);

Clazz.newMeth(C$, 'isHeadless$', function () {
return false;
}, 1);

Clazz.newMeth(C$, 'getHeadlessProperty$', function () {
return false;
}, 1);

Clazz.newMeth(C$, 'checkHeadless$', function () {
}, 1);

Clazz.newMeth(C$, 'isHeadlessInstance$', function () {
return C$.getHeadlessProperty$();
});

Clazz.newMeth(C$, 'registerFont$java_awt_Font', function (font) {
return true;
});

Clazz.newMeth(C$, 'preferLocaleFonts$', function () {
});

Clazz.newMeth(C$, 'preferProportionalFonts$', function () {
});

Clazz.newMeth(C$, 'getCenterPoint$', function () {
return null;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:22 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
