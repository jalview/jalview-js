(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'java.awt.BasicStroke','org.jmol.awt.AwtColor','java.awt.image.BufferedImage','java.awt.geom.GeneralPath']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AwtG2D", null, null, 'org.jmol.api.GenericGraphics');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.strokeBasic=null;
this.strokeBold=null;
this.path=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.strokeBasic=Clazz.new_($I$(1));
this.strokeBold=Clazz.new_($I$(1).c$$F,[2.0]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getColor4$I$I$I$I', function (r, g, b, a) {
return Clazz.new_($I$(2).c$$I$I$I$I,[r, g, b, a]);
});

Clazz.newMeth(C$, 'getColor3$I$I$I', function (r, g, b) {
return Clazz.new_($I$(2).c$$I$I$I,[r, g, b]);
});

Clazz.newMeth(C$, 'getColor1$I', function (rgb) {
return Clazz.new_($I$(2).c$$I,[rgb]);
});

Clazz.newMeth(C$, 'drawString$O$S$I$I', function (g, text, x, y) {
(g).drawString$S$I$I(text, x, y);
});

Clazz.newMeth(C$, 'drawStringRotated$O$S$I$I$D', function (g, text, x, y, angle) {
angle=angle / 180.0 * 3.141592653589793;
(g).rotate$D$D$D(angle, x, y);
(g).drawString$S$I$I(text, x, y);
(g).rotate$D$D$D(-angle, x, y);
});

Clazz.newMeth(C$, 'setGraphicsColor$O$javajs_api_GenericColor', function (g, c) {
(g).setColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'setFont$O$javajs_awt_Font', function (g, font) {
(g).setFont$java_awt_Font(font.font);
return font;
});

Clazz.newMeth(C$, 'drawGrayScaleImage$O$O$I$I$I$I$I$I$I$I', function (g, image2d, destX0, destY0, destX1, destY1, srcX0, srcY0, srcX1, srcY1) {
(g).drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(image2d, destX0, destY0, destX1, destY1, srcX0, srcY0, srcX1, srcY1, null);
});

Clazz.newMeth(C$, 'newGrayScaleImage$O$O$I$I$IA', function (gMain, image, width, height, buffer) {
var image2D=Clazz.new_($I$(3).c$$I$I$I,[width, height, 10]);
image2D.getRaster$().setSamples$I$I$I$I$I$IA(0, 0, width, height, 0, buffer);
return image2D;
});

Clazz.newMeth(C$, 'fillRect$O$I$I$I$I', function (g, x, y, width, height) {
(g).fillRect$I$I$I$I(x, y, width, height);
});

Clazz.newMeth(C$, 'drawLine$O$I$I$I$I', function (g, x0, y0, x1, y1) {
if (this.path == null ) {
(g).drawLine$I$I$I$I(x0, y0, x1, y1);
} else {
this.path.moveTo$F$F(x0, y0);
this.path.lineTo$F$F(x1, y1);
}});

Clazz.newMeth(C$, 'drawRect$O$I$I$I$I', function (g, x, y, xPixels, yPixels) {
(g).drawRect$I$I$I$I(x, y, xPixels, yPixels);
});

Clazz.newMeth(C$, 'drawCircle$O$I$I$I', function (g, x, y, diameter) {
(g).drawOval$I$I$I$I(x, y, diameter, diameter);
});

Clazz.newMeth(C$, 'drawPolygon$O$IA$IA$I', function (g, axPoints, ayPoints, nPoints) {
(g).drawPolygon$IA$IA$I(axPoints, ayPoints, nPoints);
});

Clazz.newMeth(C$, 'fillCircle$O$I$I$I', function (g, x, y, diameter) {
(g).fillOval$I$I$I$I(x, y, diameter, diameter);
});

Clazz.newMeth(C$, 'fillPolygon$O$IA$IA$I', function (g, ayPoints, axPoints, nPoints) {
(g).fillPolygon$IA$IA$I(ayPoints, axPoints, nPoints);
});

Clazz.newMeth(C$, 'translateScale$O$D$D$D', function (g, x, y, scale) {
(g).translate$D$D(x, y);
(g).scale$D$D(scale, scale);
});

Clazz.newMeth(C$, 'setStrokeBold$O$Z', function (g, tf) {
(g).setStroke$java_awt_Stroke(tf ? this.strokeBold : this.strokeBasic);
});

Clazz.newMeth(C$, 'fillBackground$O$javajs_api_GenericColor', function (g, bgcolor) {
});

Clazz.newMeth(C$, 'setWindowParameters$I$I', function (width, height) {
});

Clazz.newMeth(C$, 'canDoLineTo$', function () {
return true;
});

Clazz.newMeth(C$, 'doStroke$O$Z', function (g, isBegin) {
if (isBegin || this.path == null  ) {
this.path=Clazz.new_($I$(4));
} else {
(g).draw$java_awt_Shape(this.path);
this.path=null;
}});

Clazz.newMeth(C$, 'lineTo$O$I$I', function (g, x2, y2) {
this.path.lineTo$F$F(x2, y2);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
