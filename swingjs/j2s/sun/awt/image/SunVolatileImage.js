(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SunVolatileImage", null, 'java.awt.image.VolatileImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['width','height'],'O',['graphicsConfig','java.awt.GraphicsConfiguration','caps','java.awt.ImageCapabilities']]]

Clazz.newMeth(C$, 'c$$java_awt_GraphicsConfiguration$I$I$I$O',  function (graphicsConfig, width, height, transparency, capsObject) {
Clazz.super_(C$, this);
this.graphicsConfig=graphicsConfig;
this.width=width;
this.height=height;
this.transparency=transparency;
this.caps=capsObject;
}, 1);

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'getGraphicsConfig$',  function () {
return this.graphicsConfig;
});

Clazz.newMeth(C$, 'getSnapshot$',  function () {
return null;
});

Clazz.newMeth(C$, 'createGraphics$',  function () {
return null;
});

Clazz.newMeth(C$, 'validate$java_awt_GraphicsConfiguration',  function (gc) {
return 0;
});

Clazz.newMeth(C$, 'contentsLost$',  function () {
return false;
});

Clazz.newMeth(C$, 'getCapabilities$',  function () {
return this.caps;
});

Clazz.newMeth(C$, 'getWidth$java_awt_image_ImageObserver',  function (observer) {
return 0;
});

Clazz.newMeth(C$, 'getHeight$java_awt_image_ImageObserver',  function (observer) {
return 0;
});

Clazz.newMeth(C$, 'getProperty$S$java_awt_image_ImageObserver',  function (name, observer) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-28 16:08:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
