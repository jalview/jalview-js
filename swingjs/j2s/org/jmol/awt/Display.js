(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'java.awt.Toolkit','java.awt.image.MemoryImageSource','java.awt.Point','java.awt.Cursor','javax.swing.JOptionPane','javajs.util.PT','javax.swing.SwingUtilities']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Display");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getFullScreenDimensions$O$IA', function (display, widthHeight) {
var d=$I$(1).getDefaultToolkit$().getScreenSize$();
widthHeight[0]=d.width;
widthHeight[1]=d.height;
}, 1);

Clazz.newMeth(C$, 'hasFocus$O', function (display) {
return (display).hasFocus$();
}, 1);

Clazz.newMeth(C$, 'requestFocusInWindow$O', function (display) {
(display).requestFocusInWindow$();
}, 1);

Clazz.newMeth(C$, 'repaint$O', function (display) {
(display).repaint$();
}, 1);

Clazz.newMeth(C$, 'renderScreenImage$org_jmol_api_PlatformViewer$O$O', function (vwr, g, size) {
(vwr).renderScreenImage$O$I$I(g, (size).width, (size).height);
}, 1);

Clazz.newMeth(C$, 'setTransparentCursor$O', function (display) {
var pixels=Clazz.array(Integer.TYPE, [1]);
var image=$I$(1).getDefaultToolkit$().createImage$java_awt_image_ImageProducer(Clazz.new_($I$(2).c$$I$I$IA$I$I,[1, 1, pixels, 0, 1]));
var transparentCursor=$I$(1).getDefaultToolkit$().createCustomCursor$java_awt_Image$java_awt_Point$S(image, Clazz.new_($I$(3).c$$I$I,[0, 0]), "invisibleCursor");
(display).setCursor$java_awt_Cursor(transparentCursor);
}, 1);

Clazz.newMeth(C$, 'setCursor$I$O', function (c, display) {
(display).setCursor$java_awt_Cursor($I$(4).getPredefinedCursor$I(c));
}, 1);

Clazz.newMeth(C$, 'prompt$S$S$SA$Z', function (label, data, list, asButtons) {
try {
if (!asButtons) return $I$(5).showInputDialog$O$O(label, data);
if (data != null ) list=$I$(6).split$S$S(data, "|");
var i=$I$(5).showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(null, label, "Jmol prompt", -1, 1, null, list, list == null  ? "OK" : list[0]);
return (data == null  ? "" + i : i == -1 ? "null" : list[i]);
} catch (e) {
return "null";
}
}, 1);

Clazz.newMeth(C$, 'convertPointFromScreen$O$javajs_util_P3', function (display, ptTemp) {
var xyTemp=Clazz.new_($I$(3));
xyTemp.x=(ptTemp.x|0);
xyTemp.y=(ptTemp.y|0);
$I$(7).convertPointFromScreen$java_awt_Point$java_awt_Component(xyTemp, display);
ptTemp.set$F$F$F(xyTemp.x, xyTemp.y, NaN);
}, 1);

Clazz.newMeth(C$, 'drawImage$O$O$I$I$I$I', function (g, img, x, y, width, height) {
(g).drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(img, x, y, width, height, null);
}, 1);

Clazz.newMeth(C$, 'drawImageDTI$O$O$I$I$I$I', function (g, img, x, y, width, height) {
(g).drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(img, x, y, x == 0 ? width >> 1 : width, height, 0, y, width, height, null);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
