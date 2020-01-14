(function(){var P$=Clazz.newPackage("sun.swing"),p$1={},I$=[[0,'java.util.HashMap','sun.swing.ImageCache','java.awt.image.BufferedImage']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CachedPainter");
C$.cacheMap=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.cacheMap=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCache$O', function (key) {
{
var cache=C$.cacheMap.get$O(key);
if (cache == null ) {
cache=Clazz.new_($I$(2).c$$I,[1]);
C$.cacheMap.put$TK$TV(key, cache);
}return cache;
}}, 1);

Clazz.newMeth(C$, 'c$$I', function (cacheCount) {
C$.$init$.apply(this);
C$.getCache$O(this.getClass$()).setMaxCount$I(cacheCount);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Component$java_awt_Graphics$I$I$I$I$OA', function (c, g, x, y, w, h, args) {
if (w <= 0 || h <= 0 ) {
return;
}if (c != null ) {
p$1.paint0$java_awt_Component$java_awt_Graphics$I$I$I$I$OA.apply(this, [c, g, x, y, w, h, args]);
} else {
p$1.paint0$java_awt_Component$java_awt_Graphics$I$I$I$I$OA.apply(this, [c, g, x, y, w, h, args]);
}});

Clazz.newMeth(C$, 'paint0$java_awt_Component$java_awt_Graphics$I$I$I$I$OA', function (c, g, x, y, w, h, args) {
var key=this.getClass$();
var config=p$1.getGraphicsConfiguration$java_awt_Component.apply(this, [c]);
var cache=C$.getCache$O(key);
var image=cache.getImage$O$java_awt_GraphicsConfiguration$I$I$OA(key, config, w, h, args);
var attempts=0;
do {
var draw=false;
if (Clazz.instanceOf(image, "java.awt.image.VolatileImage")) {
switch ((image).validate$java_awt_GraphicsConfiguration(config)) {
case 2:
(image).flush$();
image=null;
break;
case 1:
draw=true;
break;
}
}if (image == null ) {
image=this.createImage$java_awt_Component$I$I$java_awt_GraphicsConfiguration$OA(c, w, h, config, args);
cache.setImage$O$java_awt_GraphicsConfiguration$I$I$OA$java_awt_Image(key, config, w, h, args, image);
draw=true;
}if (draw) {
var g2=image.getGraphics$();
this.paintToImage$java_awt_Component$java_awt_Image$java_awt_Graphics$I$I$OA(c, image, g2, w, h, args);
g2.dispose$();
}this.paintImage$java_awt_Component$java_awt_Graphics$I$I$I$I$java_awt_Image$OA(c, g, x, y, w, h, image, args);
} while ((Clazz.instanceOf(image, "java.awt.image.VolatileImage")) && (image).contentsLost$() && ++attempts < 3  );
}, p$1);

Clazz.newMeth(C$, 'paintImage$java_awt_Component$java_awt_Graphics$I$I$I$I$java_awt_Image$OA', function (c, g, x, y, w, h, image, args) {
(g).drawImagePriv$java_awt_Image$I$I$java_awt_image_ImageObserver(image, x, y, null);
});

Clazz.newMeth(C$, 'createImage$java_awt_Component$I$I$java_awt_GraphicsConfiguration$OA', function (c, w, h, config, args) {
if (config == null ) {
return Clazz.new_($I$(3).c$$I$I$I,[w, h, 1]);
}return config.createCompatibleVolatileImage$I$I(w, h);
});

Clazz.newMeth(C$, 'flush$', function () {
{
C$.getCache$O(this.getClass$()).flush$();
}});

Clazz.newMeth(C$, 'getGraphicsConfiguration$java_awt_Component', function (c) {
if (c == null ) {
return null;
}return c.getGraphicsConfiguration$();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
