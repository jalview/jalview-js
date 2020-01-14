(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'java.awt.RenderingHints','java.util.Hashtable','java.awt.geom.AffineTransform','java.awt.BasicStroke','java.awt.Color','swingjs.JSToolkit',['java.awt.geom.RoundRectangle2D','.Double'],'swingjs.api.js.DOMNode','swingjs.JSGraphicsCompositor','swingjs.JSUtil','swingjs.api.js.HTML5CanvasContext2D','java.awt.Font','java.awt.Toolkit','java.awt.Rectangle','java.awt.AlphaComposite','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSGraphics2D", null, null, 'Cloneable');
C$.pixelRatio=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.pixelRatio=(function () { var ctx = document.createElement("canvas").getContext("2d"), dpr = window.devicePixelRatio || 1, bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1; return dpr / bsr; })() ||1;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.backgroundPainted=false;
this.constrainX=0;
this.constrainY=0;
this.width=0;
this.height=0;
this.canvas=null;
this.ctx=null;
this.gc=null;
this.currentStroke=null;
this.currentClip=null;
this.alphaComposite=null;
this.initialState=0;
this.isShifted=false;
this.font=null;
this.hints=null;
this.transform=null;
this.backgroundColor=null;
this.inPath=false;
this.foregroundColor=null;
this.rrect=null;
this.imageData=null;
this.buf8=null;
this.lastx=0;
this.lasty=0;
this.nx=0;
this.ny=0;
this.clearColorSaved=null;
this.clearing=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O', function (canvas) {
C$.$init$.apply(this);
this.hints=Clazz.new_($I$(1).c$$java_util_Map,[Clazz.new_($I$(2))]);
this.canvas=canvas;
this.ctx=this.canvas.getContext("2d");
this.transform=Clazz.new_($I$(3));
this.setStroke$java_awt_Stroke(Clazz.new_($I$(4)));
{
this.gc = SwingJS; this.width = canvas.width; this.height = canvas.height;
}
this.setAntialias$Z(true);
this.setClip$I$I$I$I(0, 0, this.width, this.height);
}, 1);

Clazz.newMeth(C$, 'setAntialias$Z', function (tf) {

this.ctx.mozImageSmoothingEnabled = false;
this.ctx.webkitImageSmoothingEnabled = false;
this.ctx.msImageSmoothingEnabled = false;
this.ctx.imageSmoothingEnabled = false;
this.isShifted=tf;
});

Clazz.newMeth(C$, 'getDeviceConfiguration$', function () {
return this.gc;
});

Clazz.newMeth(C$, 'drawLine$I$I$I$I', function (x0, y0, x1, y1) {
var inPath=this.inPath;
if (!inPath) {
if (x0 == x1 && y0 == y1 ) {
this.fillRect$I$I$I$I(x0, y0, 1, 1);
return;
}this.doStroke$Z(true);
}this.ctx.moveTo(x0, y0);
this.ctx.lineTo(x1, y1);
if (!inPath) this.doStroke$Z(false);
});

Clazz.newMeth(C$, 'drawOval$I$I$I$I', function (left, top, width, height) {
this.doStroke$Z(true);
if (width == height) p$1.doCirc$I$I$I.apply(this, [left, top, width]);
 else p$1.doArc$D$D$D$D$D$D$I.apply(this, [left, top, width, height, 0, 360, 0]);
this.doStroke$Z(false);
});

Clazz.newMeth(C$, 'fillOval$I$I$I$I', function (left, top, width, height) {
this.ctx.beginPath();
if (width == height) p$1.doCirc$I$I$I.apply(this, [left, top, width]);
 else p$1.doArc$D$D$D$D$D$D$I.apply(this, [left, top, width, height, 0, 360, 1]);
this.ctx.fill();
});

Clazz.newMeth(C$, 'doCirc$I$I$I', function (left, top, diameter) {
if (diameter <= 0) return;
var r=diameter / 2.0;
this.ctx.arc(left + r, top + r, r, 0, 6.283185307179586, false);
}, p$1);

Clazz.newMeth(C$, 'drawArc$I$I$I$I$I$I', function (x, y, width, height, startAngle, arcAngle) {
this.doStroke$Z(true);
p$1.doArc$D$D$D$D$D$D$I.apply(this, [x, y, width, height, startAngle, arcAngle, 0]);
this.doStroke$Z(false);
});

Clazz.newMeth(C$, 'fillArc$I$I$I$I$I$I', function (centerX, centerY, width, height, startAngle, arcAngle) {
this.ctx.beginPath();
p$1.doArc$D$D$D$D$D$D$I.apply(this, [centerX, centerY, width, height, startAngle, arcAngle, 1]);
this.ctx.fill();
});

Clazz.newMeth(C$, 'doArc$D$D$D$D$D$D$I', function (x, y, width, height, startAngle, arcAngle, mode) {
if (width <= 0  || height <= 0  ) return;
this.ctx.save();
{
if (arcAngle < 0 ) {
startAngle += arcAngle;
arcAngle=-arcAngle;
}this.ctx.translate(x, y);
this.ctx.scale(width / 2, height / 2);
this.ctx.beginPath();
this.ctx.arc(1, 1, 1, p$1.toRad$D.apply(this, [360 - startAngle]), p$1.toRad$D.apply(this, [360 - arcAngle - startAngle ]), true);
if (mode == 1) this.ctx.lineTo(1, 1);
}this.ctx.restore();
}, p$1);

Clazz.newMeth(C$, 'toRad$D', function (a) {
return a * (0.017453292519943295);
}, p$1);

Clazz.newMeth(C$, 'clearRect$I$I$I$I', function (x, y, width, height) {
this.backgroundPainted=true;
p$1.clearRectPriv$I$I$I$I.apply(this, [x, y, width, height]);
});

Clazz.newMeth(C$, 'clearRectPriv$I$I$I$I', function (x, y, w, h) {
this.ctx.clearRect(x, y, w, h);
if (!this.clearing) p$1.setGraphicsColor$java_awt_Color.apply(this, [this.backgroundColor == null  ? $I$(5).WHITE : this.backgroundColor]);
this.fillRect$I$I$I$I(x, y, w, h);
if (!this.clearing) p$1.setGraphicsColor$java_awt_Color.apply(this, [this.foregroundColor]);
}, p$1);

Clazz.newMeth(C$, 'drawPolygon$java_awt_Polygon', function (p) {
p$1.doPoly$IA$IA$I$I.apply(this, [p.xpoints, p.ypoints, p.npoints, 1]);
});

Clazz.newMeth(C$, 'drawPolygon$IA$IA$I', function (axPoints, ayPoints, nPoints) {
p$1.doPoly$IA$IA$I$I.apply(this, [axPoints, ayPoints, nPoints, 1]);
});

Clazz.newMeth(C$, 'drawPolyline$IA$IA$I', function (xPoints, yPoints, nPoints) {
p$1.doPoly$IA$IA$I$I.apply(this, [xPoints, yPoints, nPoints, 0]);
});

Clazz.newMeth(C$, 'fillPolygon$java_awt_Polygon', function (p) {
p$1.doPoly$IA$IA$I$I.apply(this, [p.xpoints, p.ypoints, p.npoints, 2]);
});

Clazz.newMeth(C$, 'fillPolygon$IA$IA$I', function (axPoints, ayPoints, nPoints) {
p$1.doPoly$IA$IA$I$I.apply(this, [axPoints, ayPoints, nPoints, 2]);
});

Clazz.newMeth(C$, 'doPoly$IA$IA$I$I', function (axPoints, ayPoints, nPoints, mode) {
this.ctx.beginPath();
if (mode != 2) this.ctx.translate(0.5, 0.5);
this.ctx.moveTo(axPoints[0], ayPoints[0]);
for (var i=1; i < nPoints; i++) {
this.ctx.lineTo(axPoints[i], ayPoints[i]);
}
if (mode != 0) this.ctx.lineTo(axPoints[0], ayPoints[0]);
if (mode != 2) {
this.ctx.stroke();
this.ctx.translate(-0.5, -0.5);
} else {
this.ctx.fill();
}}, p$1);

Clazz.newMeth(C$, 'drawRect$I$I$I$I', function (x, y, width, height) {
if (width <= 0 || height <= 0 ) return;
this.ctx.translate(0.5, 0.5);
this.ctx.beginPath();
this.ctx.rect(x, y, width, height);
this.ctx.stroke();
this.ctx.translate(-0.5, -0.5);
});

Clazz.newMeth(C$, 'fillRect$I$I$I$I', function (x, y, width, height) {
if (width <= 0 || height <= 0 ) return;
this.backgroundPainted=true;
this.ctx.fillRect(x, y, width, height);
});

Clazz.newMeth(C$, 'draw3DRect$I$I$I$I$Z', function (x, y, width, height, raised) {
p$1.do3DRect$I$I$I$I$Z$I.apply(this, [x, y, width, height, raised, 1]);
});

Clazz.newMeth(C$, 'fill3DRect$I$I$I$I$Z', function (x, y, width, height, raised) {
p$1.do3DRect$I$I$I$I$Z$I.apply(this, [x, y, width, height, raised, 2]);
});

Clazz.newMeth(C$, 'do3DRect$I$I$I$I$Z$I', function (x, y, width, height, raised, mode) {
if (width <= 0 || height <= 0 ) return;
var p=this.getPaint$();
var c=this.getColor$();
var brighter=c.brighter$();
var darker=c.darker$();
if (!raised) {
this.setColor$java_awt_Color(darker);
} else if (p !== c ) {
this.setColor$java_awt_Color(c);
}if (mode == 2) this.fillRect$I$I$I$I(x + 1, y + 1, width - 2, height - 2);
this.setColor$java_awt_Color(raised ? brighter : darker);
this.fillRect$I$I$I$I(x, y, 1, height);
this.fillRect$I$I$I$I(x + 1, y, width - 2, 1);
this.setColor$java_awt_Color(raised ? darker : brighter);
this.fillRect$I$I$I$I(x + 1, y + height - 1, width - 1, 1);
this.fillRect$I$I$I$I(x + width - 1, y, 1, height - 1);
this.setPaint$java_awt_Paint(p);
}, p$1);

Clazz.newMeth(C$, 'setFont$java_awt_Font', function (font) {
if (font === this.font ) return;
this.font=font;
if (font != null ) this.ctx.font=$I$(6).getCanvasFont$java_awt_Font(font);
});

Clazz.newMeth(C$, 'setStrokeBold$Z', function (tf) {
p$1.setLineWidth$D.apply(this, [tf ? 2.0 : 1.0]);
});

Clazz.newMeth(C$, 'setLineWidth$D', function (d) {
this.ctx.lineWidth=d;
}, p$1);

Clazz.newMeth(C$, 'canDoLineTo$', function () {
return true;
});

Clazz.newMeth(C$, 'doStroke$Z', function (isBegin) {
this.inPath=isBegin;
if (isBegin) {
this.ctx.translate(0.5, 0.5);
this.ctx.beginPath();
} else {
this.ctx.stroke();
this.ctx.translate(-0.5, -0.5);
}});

Clazz.newMeth(C$, 'lineTo$I$I', function (x2, y2) {
if (this.inPath) {
this.ctx.lineTo(x2, y2);
} else {
this.ctx.translate(0.5, 0.5);
this.ctx.lineTo(x2, y2);
this.ctx.translate(-0.5, -0.5);
}});

Clazz.newMeth(C$, 'clip$java_awt_Shape', function (s) {
this.ctx.beginPath();
p$1.doShape$java_awt_Shape.apply(this, [s]);
this.currentClip=s;
this.ctx.clip();
});

Clazz.newMeth(C$, 'draw$java_awt_Shape', function (s) {
this.doStroke$Z(true);
p$1.doShape$java_awt_Shape.apply(this, [s]);
this.doStroke$Z(false);
});

Clazz.newMeth(C$, 'doShape$java_awt_Shape', function (s) {
var pts=Clazz.array(Double.TYPE, [6]);
var pi=s.getPathIterator$java_awt_geom_AffineTransform(null);
while (!pi.isDone$()){
switch (pi.currentSegment$DA(pts)) {
case 0:
this.ctx.moveTo(pts[0], pts[1]);
break;
case 1:
this.ctx.lineTo(pts[0], pts[1]);
break;
case 2:
this.ctx.quadraticCurveTo(pts[0], pts[1], pts[2], pts[3]);
break;
case 3:
this.ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
break;
case 4:
this.ctx.closePath();
break;
}
pi.next$();
}
return pi.getWindingRule$();
}, p$1);

Clazz.newMeth(C$, 'fill$java_awt_Shape', function (s) {
this.ctx.beginPath();
if (p$1.doShape$java_awt_Shape.apply(this, [s]) == 0) {
this.ctx.fill("evenodd");
}
 else this.ctx.fill();
});

Clazz.newMeth(C$, 'drawRoundRect$I$I$I$I$I$I', function (x, y, width, height, arcWidth, arcHeight) {
p$1.doRoundRect$I$I$I$I$I$I$I.apply(this, [x, y, width, height, arcWidth, arcHeight, 1]);
});

Clazz.newMeth(C$, 'fillRoundRect$I$I$I$I$I$I', function (x, y, width, height, arcWidth, arcHeight) {
p$1.doRoundRect$I$I$I$I$I$I$I.apply(this, [x, y, width, height, arcWidth, arcHeight, 2]);
});

Clazz.newMeth(C$, 'doRoundRect$I$I$I$I$I$I$I', function (x, y, w, h, aw, ah, mode) {
if (this.rrect == null  || this.rrect.getX$() != x   || this.rrect.getY$() != y   || this.rrect.getWidth$() != w   || this.rrect.getHeight$() != h   || this.rrect.getArcWidth$() != aw   || this.rrect.getArcHeight$() != ah  ) {
this.rrect=Clazz.new_($I$(7).c$$D$D$D$D$D$D,[x, y, w, h, aw, ah]);
}if (mode == 2) this.fill$java_awt_Shape(this.rrect);
 else this.draw$java_awt_Shape(this.rrect);
}, p$1);

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver', function (img, x, y, observer) {
return this.drawImagePriv$java_awt_Image$I$I$java_awt_image_ImageObserver(img, x, y, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver', function (img, x, y, width, height, observer) {
if (width <= 0 || height <= 0 ) return true;
this.backgroundPainted=true;
if (img != null ) {
var imgNode=p$1.getImageNode$java_awt_Image.apply(this, [img]);
if (imgNode != null ) this.ctx.drawImage(imgNode, x, y, width, height);
if (observer != null ) p$1.observe$java_awt_Image$java_awt_image_ImageObserver$Z.apply(this, [img, observer, imgNode != null ]);
}return true;
});

Clazz.newMeth(C$, 'getImageNode$java_awt_Image', function (img) {
this.backgroundPainted=true;
var imgNode=$I$(8).getImageNode(img);
return (imgNode == null  ? $I$(9).createImageNode$java_awt_Image(img) : imgNode);
}, p$1);

Clazz.newMeth(C$, 'observe$java_awt_Image$java_awt_image_ImageObserver$Z', function (img, observer, isOK) {
observer.imageUpdate$(img, (isOK ? 0 : 192), -1, -1, -1, -1);
}, p$1);

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$java_awt_Color$java_awt_image_ImageObserver', function (img, x, y, bgcolor, observer) {
this.backgroundPainted=true;
return this.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(img, x, y, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver', function (img, x, y, width, height, bgcolor, observer) {
if (width <= 0 || height <= 0 ) return false;
this.backgroundPainted=true;
return this.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(img, x, y, width, height, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver', function (img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, observer) {
this.backgroundPainted=true;
if (img != null ) {
var bytes=null;
var imgNode=p$1.getImageNode$java_awt_Image.apply(this, [img]);
if (imgNode != null ) this.ctx.drawImage(imgNode, sx1, sy1, sx2 - sx1, sy2 - sy1, dx1, dy1, dx2 - dx1, dy2 - dy1);
if (observer != null ) p$1.observe$java_awt_Image$java_awt_image_ImageObserver$Z.apply(this, [img, observer, imgNode != null ]);
}return true;
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver', function (img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, bgcolor, observer) {
$I$(10).notImplemented$S(null);
return this.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver', function (img, xform, obs) {
return p$1.drawImageXT$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver.apply(this, [img, xform, obs]);
});

Clazz.newMeth(C$, 'drawRenderedImage$java_awt_image_RenderedImage$java_awt_geom_AffineTransform', function (img, xform) {
p$1.drawImageXT$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver.apply(this, [img, xform, null]);
});

Clazz.newMeth(C$, 'drawRenderableImage$java_awt_image_renderable_RenderableImage$java_awt_geom_AffineTransform', function (img, xform) {
p$1.drawImageXT$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver.apply(this, [img, xform, null]);
});

Clazz.newMeth(C$, 'drawImageXT$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver', function (img, xform, obs) {
this.ctx.save();
p$1.transformCTX$java_awt_geom_AffineTransform.apply(this, [xform]);
var ret=this.drawImagePriv$java_awt_Image$I$I$java_awt_image_ImageObserver(img, 0, 0, obs);
this.ctx.restore();
return ret;
}, p$1);

Clazz.newMeth(C$, 'drawImagePriv$java_awt_Image$I$I$java_awt_image_ImageObserver', function (img, x, y, observer) {
this.backgroundPainted=true;
if (img != null ) {
var pixels=null;
var isRGB=false;

pixels = img._pix; isRGB = (img.imageType == 1);
var imgNode=null;
var width=(img).getRaster$().getWidth$();
var height=(img).getRaster$().getHeight$();
if (pixels == null ) {
if ((imgNode=p$1.getImageNode$java_awt_Image.apply(this, [img])) != null ) this.ctx.drawImage(imgNode, x, y, width, height);
} else {
p$1.drawDirect$IA$I$I$I$I$Z.apply(this, [pixels, x, y, width, height, isRGB]);
}if (observer != null ) p$1.observe$java_awt_Image$java_awt_image_ImageObserver$Z.apply(this, [img, observer, imgNode != null ]);
}return true;
});

Clazz.newMeth(C$, 'drawDirectRGBA$IA', function (pixels) {
this.backgroundPainted=true;
p$1.drawDirect$IA$I$I$I$I$Z.apply(this, [pixels, 0, 0, this.width, this.height, false]);
});

Clazz.newMeth(C$, 'drawDirect$IA$I$I$I$I$Z', function (pixels, x, y, width, height, isRGB) {
if (this.buf8 == null  || x != this.lastx  || y != this.lasty  || this.nx != width  || this.ny != height ) {
this.imageData=this.ctx.getImageData(x, y, width, height);
this.buf8=this.imageData.data;
this.lastx=x;
this.lasty=y;
this.nx=width;
this.ny=height;
}for (var pt=0, i=0, n=Math.min((this.buf8.length/4|0), pixels.length); i < n; i++) {
var argb=pixels[i];
this.buf8[pt++]=(argb >> 16) & 255;
this.buf8[pt++]=(argb >> 8) & 255;
this.buf8[pt++]=argb & 255;
this.buf8[pt++]=(isRGB ? 255 : (argb >> 24) & 255);
}
var m=$I$(11).getMatrix(this.ctx, this.transform);
if (m[0] != 1  || m[1] != 0   || m[2] != 0   || m[3] != 1  ) System.err.println$S("Unsupported transform");
x=(x+(m[4])|0);
y=(y+(m[5])|0);
this.ctx.putImageData(this.imageData, x, y);
}, p$1);

Clazz.newMeth(C$, 'hit$java_awt_Rectangle$java_awt_Shape$Z', function (rect, s, onStroke) {
$I$(10).notImplemented$S(null);
return false;
});

Clazz.newMeth(C$, 'getStroke$', function () {
return this.currentStroke;
});

Clazz.newMeth(C$, 'setStroke$java_awt_Stroke', function (s) {
if (!(Clazz.instanceOf(s, "java.awt.BasicStroke"))) return;
var b=this.currentStroke=s;
var dash=b.getDashArray$();
var idash=Clazz.array(Integer.TYPE, [dash == null  ? 0 : dash.length]);
for (var i=idash.length; --i >= 0; ) idash[i]=(dash[i]|0);

this.ctx.setLineDash(idash);
p$1.setLineWidth$D.apply(this, [b.getLineWidth$()]);
var lineCap;
var lineJoin;
var miterLimit=-1;
switch (b.getEndCap$()) {
case 0:
lineCap="butt";
break;
case 2:
lineCap="square";
break;
case 1:
default:
lineCap="round";
}
switch (b.getLineJoin$()) {
case 2:
lineJoin="bevel";
break;
case 0:
lineJoin="miter";
miterLimit=b.getMiterLimit$();
break;
case 1:
lineJoin="round";
}
{
this.ctx.lineCap = lineCap; this.ctx.lineJoin = lineJoin; if (miterLimit >= 0) this.ctx.miterLimit = miterLimit;
}
});

Clazz.newMeth(C$, 'setRenderingHint$java_awt_RenderingHints_Key$O', function (hintKey, hintValue) {
this.hints.put$O$O(hintKey, hintValue);
});

Clazz.newMeth(C$, 'getRenderingHint$java_awt_RenderingHints_Key', function (hintKey) {
return this.hints.get$O(hintKey);
});

Clazz.newMeth(C$, 'setRenderingHints$java_util_Map', function (hints) {
this.hints=Clazz.new_($I$(1).c$$java_util_Map,[hints]);
});

Clazz.newMeth(C$, 'addRenderingHints$java_util_Map', function (hints) {
for (var e, $e = hints.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.hints.put$O$O(e.getKey$(), e.getValue$());

});

Clazz.newMeth(C$, 'getRenderingHints$', function () {
return this.hints;
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color', function (c) {
this.backgroundColor=c;
});

Clazz.newMeth(C$, 'getBackground$', function () {
return this.backgroundColor;
});

Clazz.newMeth(C$, 'getColor$', function () {
return this.foregroundColor;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color', function (c) {
if (this.clearing) {
this.clearColorSaved=c;
} else {
this.foregroundColor=c;
p$1.setGraphicsColor$java_awt_Color.apply(this, [c]);
}});

Clazz.newMeth(C$, 'setPaint$java_awt_Paint', function (paint) {
this.setColor$java_awt_Color(paint);
});

Clazz.newMeth(C$, 'getFont$', function () {
if (this.font == null ) this.font=Clazz.new_($I$(12).c$$S$I$I,["Arial", 0, 12]);
return this.font;
});

Clazz.newMeth(C$, 'getFontMetrics$', function () {
return this.getFontMetrics$java_awt_Font(this.getFont$());
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font', function (f) {
return $I$(13).getDefaultToolkit$().getFontMetrics$java_awt_Font(f);
});

Clazz.newMeth(C$, 'clipRect$I$I$I$I', function (x, y, width, height) {
this.ctx.beginPath();
this.ctx.rect(x, y, width, height);
p$1.setCurrentClip$I$I$I$I.apply(this, [x, y, width, height]);
this.ctx.clip();
});

Clazz.newMeth(C$, 'setClip$I$I$I$I', function (x, y, width, height) {
p$1.setCurrentClip$I$I$I$I.apply(this, [x, y, width, height]);
this.ctx.beginPath();
this.ctx.rect(x, y, width, height);
this.ctx.clip();
});

Clazz.newMeth(C$, 'setCurrentClip$I$I$I$I', function (x, y, width, height) {
var r=(Clazz.instanceOf(this.currentClip, "java.awt.Rectangle") ? this.currentClip : null);
if (r == null  || r.x != x  || r.y != y  || r.width != width  || r.height != height ) this.currentClip=Clazz.new_($I$(14).c$$I$I$I$I,[x, y, width, height]);
}, p$1);

Clazz.newMeth(C$, 'setClip$java_awt_Shape', function (clip) {
if (clip == null ) {
this.setClip$I$I$I$I(0, 0, this.width, this.height);
return;
}this.currentClip=clip;
this.ctx.beginPath();
p$1.doShape$java_awt_Shape.apply(this, [clip]);
this.ctx.clip();
});

Clazz.newMeth(C$, 'hitClip$I$I$I$I', function (x, y, width, height) {
var clipRect=this.getClipBounds$();
if (clipRect == null ) {
return true;
}return clipRect.intersects$D$D$D$D(x, y, width, height);
});

Clazz.newMeth(C$, 'setGraphicsColor$java_awt_Color', function (c) {
if (c == null ) return;
this.ctx.fillStyle=this.ctx.strokeStyle=$I$(6).getCSSColor$java_awt_Color(c);
}, p$1);

Clazz.newMeth(C$, 'copyArea$I$I$I$I$I$I', function (x, y, width, height, dx, dy) {
this.ctx.putImageData(this.ctx.getImageData(x, y, width, height), x + dx, y + dy);
});

Clazz.newMeth(C$, 'getClip$', function () {
return this.currentClip == null  ? p$1.getClipBoundsImpl.apply(this, []) : this.currentClip;
});

Clazz.newMeth(C$, 'drawString$S$I$I', function (s, x, y) {
p$1.fillText$S$F$F.apply(this, [s, x, y]);
});

Clazz.newMeth(C$, 'drawChars$CA$I$I', function (chars, x, y) {
p$1.fillText$S$F$F.apply(this, [String.valueOf$CA(chars), x, y]);
});

Clazz.newMeth(C$, 'drawChars$CA$I$I$I$I', function (data, offset, length, x, y) {
this.drawString$S$I$I( String.instantialize(data, offset, length), x, y);
});

Clazz.newMeth(C$, 'drawBytes$BA$I$I$I$I', function (data, offset, length, x, y) {
this.drawString$S$I$I( String.instantialize(data, offset, length), x, y);
});

Clazz.newMeth(C$, 'drawString$S$F$F', function (str, x, y) {
p$1.fillText$S$F$F.apply(this, [str, x, y]);
});

Clazz.newMeth(C$, 'fillText$S$F$F', function (str, x, y) {
this.ctx.fillText(str, x, y);
}, p$1);

Clazz.newMeth(C$, 'drawString$java_text_AttributedCharacterIterator$I$I', function (iterator, x, y) {
$I$(10).notImplemented$S(null);
});

Clazz.newMeth(C$, 'drawString$java_text_AttributedCharacterIterator$F$F', function (iterator, x, y) {
$I$(10).notImplemented$S(null);
});

Clazz.newMeth(C$, 'translate$D$D', function (tx, ty) {
$I$(10).notImplemented$S(null);
});

Clazz.newMeth(C$, 'shear$D$D', function (shx, shy) {
$I$(10).notImplemented$S(null);
});

Clazz.newMeth(C$, 'translate$I$I', function (x, y) {
this.ctx.translate(x, y);
this.transform.translate$D$D(x, y);
});

Clazz.newMeth(C$, 'rotate$D', function (radians) {
this.ctx.rotate(radians);
this.transform.rotate$D(radians);
});

Clazz.newMeth(C$, 'rotate$D$D$D', function (theta, x, y) {
this.ctx.translate(x, y);
this.ctx.rotate(theta);
this.ctx.translate(-x, -y);
this.transform.rotate$D$D$D(theta, x, y);
});

Clazz.newMeth(C$, 'scale$D$D', function (sx, sy) {
this.ctx.scale(sx, sy);
this.transform.scale$D$D(sx, sy);
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform', function (t) {
p$1.transformCTX$java_awt_geom_AffineTransform.apply(this, [t]);
this.transform.concatenate$java_awt_geom_AffineTransform(t);
});

Clazz.newMeth(C$, 'transformCTX$java_awt_geom_AffineTransform', function (t) {
{
this.ctx.transform (t.m00, t.m10, t.m01, t.m11, t.m02, t.m12);
}
}, p$1);

Clazz.newMeth(C$, 'setTransform$java_awt_geom_AffineTransform', function (t) {
{
this.ctx.setTransform (t.m00, t.m10, t.m01, t.m11, t.m02, t.m12);
}
this.transform.setTransform$java_awt_geom_AffineTransform(t);
});

Clazz.newMeth(C$, 'getTransform$', function () {
return this.transform.clone$();
});

Clazz.newMeth(C$, 'getPaint$', function () {
return this.getColor$();
});

Clazz.newMeth(C$, 'getFontRenderContext$', function () {
return this.getFontMetrics$java_awt_Font(this.getFont$()).getFontRenderContext$();
});

Clazz.newMeth(C$, 'setPaintMode$', function () {
this.setComposite$java_awt_Composite($I$(15).SrcOver);
});

Clazz.newMeth(C$, 'setXORMode$java_awt_Color', function (c) {
if (c == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null XORColor"]);
this.setComposite$java_awt_Composite($I$(15).Xor);
});

Clazz.newMeth(C$, 'getClipRect$', function () {
return this.getClipBounds$();
});

Clazz.newMeth(C$, 'getClipBounds$', function () {
return this.getClipBounds$java_awt_Rectangle(null);
});

Clazz.newMeth(C$, 'getClipBounds$java_awt_Rectangle', function (r) {
var clipRect=p$1.getClipBoundsImpl.apply(this, []);
if (r == null ) {
r=clipRect;
} else {
r.x=clipRect.x;
r.y=clipRect.y;
r.width=clipRect.width;
r.height=clipRect.height;
}return r;
});

Clazz.newMeth(C$, 'getClipBoundsImpl', function () {
if (this.currentClip == null ) {
this.currentClip=Clazz.new_($I$(14).c$$I$I$I$I,[0, 0, this.width, this.height]);
}return this.currentClip.getBounds$();
}, p$1);

Clazz.newMeth(C$, 'setComposite$java_awt_Composite', function (comp) {
if (comp === this.alphaComposite ) return;
var isAlpha=Clazz.instanceOf(comp, "java.awt.AlphaComposite");
var newRule=(!isAlpha ? 0 : (comp).getRule$());
var isValid=(isAlpha && this.alphaComposite == null   || newRule != this.alphaComposite.getRule$() );
if (isValid && $I$(9).setGraphicsCompositeAlpha$swingjs_JSGraphics2D$I(this, newRule) ) {
this.alphaComposite=comp;
}if (newRule == 1) {
this.clearColorSaved=this.foregroundColor;
this.setColor$java_awt_Color($I$(5).black);
this.clearing=true;
} else if (this.clearing) {
this.clearing=false;
this.setColor$java_awt_Color(this.clearColorSaved);
this.clearColorSaved=null;
}this.setAlpha$F(comp == null  ? 1 : (comp).getAlpha$());
});

Clazz.newMeth(C$, 'getComposite$', function () {
return this.alphaComposite;
});

Clazz.newMeth(C$, 'drawImage$java_awt_image_BufferedImage$java_awt_image_BufferedImageOp$I$I', function (img, op, x, y) {
$I$(9).drawImageOp$swingjs_JSGraphics2D$java_awt_image_BufferedImage$java_awt_image_BufferedImageOp$I$I(this, img, op, x, y);
});

Clazz.newMeth(C$, 'setAlpha$F', function (f) {
{
this.ctx.globalAlpha = f;
}
});

Clazz.newMeth(C$, 'getCanvas$', function () {
return this.canvas;
});

Clazz.newMeth(C$, 'isBackgroundPainted$', function () {
return this.backgroundPainted;
});

Clazz.newMeth(C$, 'mark$', function () {
this.ctx.save();
var map=Clazz.array(java.lang.Object, [7]);
var alpha=0;
{
alpha = this.ctx.globalAlpha;
}
map[0]=Float.valueOf$F(alpha);
map[1]=this.alphaComposite;
map[2]=this.currentStroke;
map[3]=this.transform;
map[4]=this.font;
map[5]=this.currentClip;
map[6]=(this.backgroundPainted ? $I$(16).TRUE : $I$(16).FALSE);
this.backgroundPainted=false;
return $I$(11).push(this.ctx, map);
});

Clazz.newMeth(C$, 'reset$I', function (n0) {
if (n0 < 1) n0=1;
while ($I$(11).getSavedLevel(this.ctx) >= n0){
var map=$I$(11).pop(this.ctx);
this.setComposite$java_awt_Composite(map[1]);
var alpha=map[0];
if (alpha != null ) this.setAlpha$F(alpha.floatValue$());
this.setStroke$java_awt_Stroke(map[2]);
this.setTransform$java_awt_geom_AffineTransform(map[3]);
this.setFont$java_awt_Font(map[4]);
this.currentClip=map[5];
this.backgroundPainted=(map[6]).booleanValue$();
this.ctx.restore();
}
});

Clazz.newMeth(C$, 'create$I$I$I$I', function (x, y, width, height) {
var g=this.create$();
if (g == null ) return null;
g.translate$I$I(x, y);
g.clipRect$I$I$I$I(0, 0, width, height);
return g;
});

Clazz.newMeth(C$, 'create$', function () {
return this.clone$();
});

Clazz.newMeth(C$, 'clone$', function () {
var n=this.mark$();
var g=this;
{
g = Clazz.clone(this);
}
g.transform=Clazz.new_($I$(3).c$$java_awt_geom_AffineTransform,[this.transform]);
if (this.hints != null ) {
g.hints=this.hints.clone$();
}g.setStroke$java_awt_Stroke(this.currentStroke.clone$());
g.initialState=n;
return g;
});

Clazz.newMeth(C$, 'dispose$', function () {
this.reset$I(this.initialState);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:42 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
