(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'swingjs.api.Interface','java.awt.image.ColorModel','java.awt.image.WritableRaster','Boolean','java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GraphicsConfiguration");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createCompatibleImage$I$I$I', function (width, height, transparency) {
if (this.getColorModel$().getTransparency$() == transparency) {
return this.createCompatibleImage$I$I(width, height);
}var cm=this.getColorModel$I(transparency);
if (cm == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown transparency: " + transparency]);
}var wr=cm.createCompatibleWritableRaster$I$I(width, height);
return this.newBufferedImage$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable(cm, wr, cm.isAlphaPremultiplied$(), null);
});

Clazz.newMeth(C$, 'newBufferedImage$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable', function (cm, wr, alphaPremultiplied, properties) {
return $I$(1).getInstanceWithParams$S$ClassA$OA("java.awt.image.BufferedImage", Clazz.array(Class, -1, [Clazz.getClass($I$(2)), Clazz.getClass($I$(3)), Clazz.getClass($I$(4)), Clazz.getClass($I$(5))]), Clazz.array(java.lang.Object, -1, [cm, wr, alphaPremultiplied ? $I$(4).TRUE : $I$(4).FALSE, properties]));
});

Clazz.newMeth(C$, 'createCompatibleVolatileImage$I$I', function (width, height) {
var vi=null;
try {
vi=this.createCompatibleVolatileImage$I$I$java_awt_ImageCapabilities$I(width, height, null, 1);
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.AWTException")){
Clazz.assert(C$, this, function(){return false});
} else {
throw e;
}
}
return vi;
});

Clazz.newMeth(C$, 'createCompatibleVolatileImage$I$I$I', function (width, height, transparency) {
var vi=null;
try {
vi=this.createCompatibleVolatileImage$I$I$java_awt_ImageCapabilities$I(width, height, null, transparency);
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.AWTException")){
Clazz.assert(C$, this, function(){return false});
} else {
throw e;
}
}
return vi;
});

Clazz.newMeth(C$, 'createCompatibleVolatileImage$I$I$java_awt_ImageCapabilities$I', function (width, height, caps, transparency) {
var vi=$I$(1).getInstanceWithParams$S$ClassA$OA("sun.awt.image.SunVolatileImage", Clazz.array(Class, -1, [Clazz.getClass(C$), Clazz.getClass(Integer), Clazz.getClass(Integer), Clazz.getClass($I$(4)), Clazz.getClass(java.lang.Object), Clazz.getClass(Integer)]), Clazz.array(java.lang.Object, -1, [this, Integer.valueOf$I(width), Integer.valueOf$I(height), caps, Integer.valueOf$I(transparency)]));
if (caps != null  && caps.isAccelerated$()  && !vi.getCapabilities$().isAccelerated$() ) {
throw Clazz.new_(Clazz.load('java.awt.AWTException').c$$S,["Supplied image capabilities could not be met by this graphics configuration."]);
}return vi;
});

Clazz.newMeth(C$, 'isTranslucencyCapable$', function () {
return false;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:21 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
