(function(){var P$=Clazz.newPackage("org.jibble.epsgraphics"),p$1={},I$=[[0,'java.awt.font.FontRenderContext','org.jibble.epsgraphics.EpsDocument','java.awt.Color','java.awt.geom.AffineTransform','java.awt.AlphaComposite','java.awt.Font','java.awt.BasicStroke','java.io.FileOutputStream','jalview.util.MessageManager',['java.awt.geom.Point2D','.Float'],'java.awt.Rectangle','java.util.Hashtable','java.awt.image.BufferedImage','java.text.AttributedString','java.awt.font.TextAttribute','java.awt.font.TextLayout','StringBuffer','java.awt.GraphicsEnvironment','java.awt.RenderingHints','java.awt.geom.Area',['java.awt.geom.Line2D','.Float'],['java.awt.geom.RoundRectangle2D','.Float'],['java.awt.geom.Ellipse2D','.Float'],['java.awt.geom.Arc2D','.Float'],'java.awt.geom.GeneralPath','java.awt.Polygon','java.awt.image.PixelGrabber','java.io.StringWriter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EpsGraphics2D", null, 'java.awt.Graphics2D');
C$._fontRenderContext=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$._fontRenderContext=Clazz.new_($I$(1).c$$java_awt_geom_AffineTransform$Z$Z,[null, false, true]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._color=null;
this._backgroundColor=null;
this._paint=null;
this._composite=null;
this._stroke=null;
this._font=null;
this._clip=null;
this._clipTransform=null;
this._transform=null;
this._accurateTextMode=false;
this._document=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S.apply(this, ["Untitled"]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (title) {
Clazz.super_(C$, this,1);
this._document=Clazz.new_($I$(2).c$$S,[title]);
this._backgroundColor=$I$(3).white;
this._clip=null;
this._transform=Clazz.new_($I$(4));
this._clipTransform=Clazz.new_($I$(4));
this._accurateTextMode=true;
this.setColor$java_awt_Color($I$(3).black);
this.setPaint$java_awt_Paint($I$(3).black);
this.setComposite$java_awt_Composite($I$(5).getInstance$I(1));
this.setFont$java_awt_Font($I$(6).decode$S(null));
this.setStroke$java_awt_Stroke(Clazz.new_($I$(7)));
}, 1);

Clazz.newMeth(C$, 'c$$S$java_io_File$I$I$I$I', function (title, file, minX, minY, maxX, maxY) {
C$.c$$S$java_io_OutputStream$I$I$I$I.apply(this, [title, Clazz.new_($I$(8).c$$java_io_File,[file]), minX, minY, maxX, maxY]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_io_OutputStream$I$I$I$I', function (title, outputStream, minX, minY, maxX, maxY) {
C$.c$$S.apply(this, [title]);
this._document=Clazz.new_($I$(2).c$$S$java_io_OutputStream$I$I$I$I,[title, outputStream, minX, minY, maxX, maxY]);
}, 1);

Clazz.newMeth(C$, 'c$$org_jibble_epsgraphics_EpsGraphics2D', function (g) {
Clazz.super_(C$, this,1);
this._document=g._document;
this._backgroundColor=g._backgroundColor;
this._clip=g._clip;
this._clipTransform=g._clipTransform.clone$();
this._transform=g._transform.clone$();
this._color=g._color;
this._paint=g._paint;
this._composite=g._composite;
this._font=g._font;
this._stroke=g._stroke;
this._accurateTextMode=g._accurateTextMode;
}, 1);

Clazz.newMeth(C$, 'methodNotSupported', function () {
var e=Clazz.new_(Clazz.load('org.jibble.epsgraphics.EpsException').c$$S,[$I$(9).formatMessage$S$SA("exception.eps_method_not_supported", Clazz.array(String, -1, ["0.8.8"]))]);
e.printStackTrace$java_io_PrintStream(System.err);
}, p$1);

Clazz.newMeth(C$, 'setAccurateTextMode$Z', function (b) {
this._accurateTextMode=b;
});

Clazz.newMeth(C$, 'getAccurateTextMode$', function () {
return this._accurateTextMode;
});

Clazz.newMeth(C$, 'flush$', function () {
this._document.flush$();
});

Clazz.newMeth(C$, 'close$', function () {
this.flush$();
this._document.close$();
});

Clazz.newMeth(C$, 'append$S', function (line) {
this._document.append$org_jibble_epsgraphics_EpsGraphics2D$S(this, line);
}, p$1);

Clazz.newMeth(C$, 'transform$F$F', function (x, y) {
var result=Clazz.new_($I$(10).c$$F$F,[x, y]);
result=this._transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(result, result);
result.setLocation$D$D(result.getX$(), -result.getY$());
return result;
}, p$1);

Clazz.newMeth(C$, 'draw$java_awt_Shape$S', function (s, action) {
if (s != null ) {
if (!this._transform.isIdentity$()) {
s=this._transform.createTransformedShape$java_awt_Shape(s);
}if (!action.equals$O("clip")) {
var shapeBounds=s.getBounds2D$();
var visibleBounds=shapeBounds;
if (this._clip != null ) {
var clipBounds=this._clip.getBounds2D$();
visibleBounds=shapeBounds.createIntersection$java_awt_geom_Rectangle2D(clipBounds);
}var lineRadius=this._stroke.getLineWidth$() / 2;
var minX=visibleBounds.getMinX$() - lineRadius;
var minY=visibleBounds.getMinY$() - lineRadius;
var maxX=visibleBounds.getMaxX$() + lineRadius;
var maxY=visibleBounds.getMaxY$() + lineRadius;
this._document.updateBounds$D$D(minX, -minY);
this._document.updateBounds$D$D(maxX, -maxY);
}p$1.append$S.apply(this, ["newpath"]);
var type=0;
var coords=Clazz.array(Float.TYPE, [6]);
var it=s.getPathIterator$java_awt_geom_AffineTransform(null);
var x0=0;
var y0=0;
var count=0;
while (!it.isDone$()){
type=it.currentSegment$FA(coords);
var x1=coords[0];
var y1=-coords[1];
var x2=coords[2];
var y2=-coords[3];
var x3=coords[4];
var y3=-coords[5];
if (type == 4) {
p$1.append$S.apply(this, ["closepath"]);
count++;
} else if (type == 3) {
p$1.append$S.apply(this, [new Float(x1).toString() + " " + new Float(y1).toString() + " " + new Float(x2).toString() + " " + new Float(y2).toString() + " " + new Float(x3).toString() + " " + new Float(y3).toString() + " curveto" ]);
count++;
x0=x3;
y0=y3;
} else if (type == 1) {
p$1.append$S.apply(this, [new Float(x1).toString() + " " + new Float(y1).toString() + " lineto" ]);
count++;
x0=x1;
y0=y1;
} else if (type == 0) {
p$1.append$S.apply(this, [new Float(x1).toString() + " " + new Float(y1).toString() + " moveto" ]);
count++;
x0=x1;
y0=y1;
} else if (type == 2) {
var _x1=x0 + 0.6666667 * (x1 - x0);
var _y1=y0 + 0.6666667 * (y1 - y0);
var _x2=x1 + 0.33333334 * (x2 - x1);
var _y2=y1 + 0.33333334 * (y2 - y1);
var _x3=x2;
var _y3=y2;
p$1.append$S.apply(this, [new Float(_x1).toString() + " " + new Float(_y1).toString() + " " + new Float(_x2).toString() + " " + new Float(_y2).toString() + " " + new Float(_x3).toString() + " " + new Float(_y3).toString() + " curveto" ]);
count++;
x0=_x3;
y0=_y3;
} else if (type == 0) {
} else if (type == 1) {
}it.next$();
}
p$1.append$S.apply(this, [action]);
p$1.append$S.apply(this, ["newpath"]);
}}, p$1);

Clazz.newMeth(C$, 'toHexString$I', function (n) {
var result=Integer.toString$I$I(n, 16);
while (result.length$() < 2){
result="0" + result;
}
return result;
}, p$1);

Clazz.newMeth(C$, 'draw3DRect$I$I$I$I$Z', function (x, y, width, height, raised) {
var originalColor=this.getColor$();
var originalStroke=this.getStroke$();
this.setStroke$java_awt_Stroke(Clazz.new_($I$(7).c$$F,[1.0]));
if (raised) {
this.setColor$java_awt_Color(originalColor.brighter$());
} else {
this.setColor$java_awt_Color(originalColor.darker$());
}this.drawLine$I$I$I$I(x, y, x + width, y);
this.drawLine$I$I$I$I(x, y, x, y + height);
if (raised) {
this.setColor$java_awt_Color(originalColor.darker$());
} else {
this.setColor$java_awt_Color(originalColor.brighter$());
}this.drawLine$I$I$I$I(x + width, y + height, x, y + height);
this.drawLine$I$I$I$I(x + width, y + height, x + width, y);
this.setColor$java_awt_Color(originalColor);
this.setStroke$java_awt_Stroke(originalStroke);
});

Clazz.newMeth(C$, 'fill3DRect$I$I$I$I$Z', function (x, y, width, height, raised) {
var originalColor=this.getColor$();
if (raised) {
this.setColor$java_awt_Color(originalColor.brighter$());
} else {
this.setColor$java_awt_Color(originalColor.darker$());
}p$1.draw$java_awt_Shape$S.apply(this, [Clazz.new_($I$(11).c$$I$I$I$I,[x, y, width, height]), "fill"]);
this.setColor$java_awt_Color(originalColor);
this.draw3DRect$I$I$I$I$Z(x, y, width, height, raised);
});

Clazz.newMeth(C$, 'draw$java_awt_Shape', function (s) {
p$1.draw$java_awt_Shape$S.apply(this, [s, "stroke"]);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver', function (img, xform, obs) {
var at=this.getTransform$();
this.transform$java_awt_geom_AffineTransform(xform);
var st=this.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(img, 0, 0, obs);
this.setTransform$java_awt_geom_AffineTransform(at);
return st;
});

Clazz.newMeth(C$, 'drawImage$java_awt_image_BufferedImage$java_awt_image_BufferedImageOp$I$I', function (img, op, x, y) {
var img1=op.filter$java_awt_image_BufferedImage$java_awt_image_BufferedImage(img, null);
this.drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(img1, Clazz.new_($I$(4).c$$F$F$F$F$F$F,[1.0, 0.0, 0.0, 1.0, x, y]), null);
});

Clazz.newMeth(C$, 'drawRenderedImage$java_awt_image_RenderedImage$java_awt_geom_AffineTransform', function (img, xform) {
var properties=Clazz.new_($I$(12));
var names=img.getPropertyNames$();
for (var i=0; i < names.length; i++) {
properties.put$TK$TV(names[i], img.getProperty$S(names[i]));
}
var cm=img.getColorModel$();
var wr=img.copyData$java_awt_image_WritableRaster(null);
var img1=Clazz.new_($I$(13).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[cm, wr, cm.isAlphaPremultiplied$(), properties]);
var at=$I$(4).getTranslateInstance$D$D(img.getMinX$(), img.getMinY$());
at.preConcatenate$java_awt_geom_AffineTransform(xform);
this.drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(img1, at, null);
});

Clazz.newMeth(C$, 'drawRenderableImage$java_awt_image_renderable_RenderableImage$java_awt_geom_AffineTransform', function (img, xform) {
this.drawRenderedImage$java_awt_image_RenderedImage$java_awt_geom_AffineTransform(img.createDefaultRendering$(), xform);
});

Clazz.newMeth(C$, 'drawString$S$I$I', function (str, x, y) {
this.drawString$S$F$F(str, x, y);
});

Clazz.newMeth(C$, 'drawString$S$F$F', function (s, x, y) {
if (s != null  && s.length$() > 0 ) {
var as=Clazz.new_($I$(14).c$$S,[s]);
as.addAttribute$java_text_AttributedCharacterIterator_Attribute$O($I$(15).FONT, this.getFont$());
this.drawString$java_text_AttributedCharacterIterator$F$F(as.getIterator$(), x, y);
}});

Clazz.newMeth(C$, 'drawString$java_text_AttributedCharacterIterator$I$I', function (iterator, x, y) {
this.drawString$java_text_AttributedCharacterIterator$F$F(iterator, x, y);
});

Clazz.newMeth(C$, 'drawString$java_text_AttributedCharacterIterator$F$F', function (iterator, x, y) {
if (this.getAccurateTextMode$()) {
var layout=Clazz.new_($I$(16).c$$java_text_AttributedCharacterIterator$java_awt_font_FontRenderContext,[iterator, this.getFontRenderContext$()]);
var shape=layout.getOutline$java_awt_geom_AffineTransform($I$(4).getTranslateInstance$D$D(x, y));
p$1.draw$java_awt_Shape$S.apply(this, [shape, "fill"]);
} else {
p$1.append$S.apply(this, ["newpath"]);
var location=p$1.transform$F$F.apply(this, [x, y]);
p$1.append$S.apply(this, [new Double(location.getX$()).toString() + " " + new Double(location.getY$()).toString() + " moveto" ]);
var buffer=Clazz.new_($I$(17));
for (var ch=iterator.first$(); ch != "\uffff"; ch=iterator.next$()) {
if (ch == "(" || ch == ")" ) {
buffer.append$C("\\");
}buffer.append$C(ch);
}
p$1.append$S.apply(this, ["(" + buffer.toString() + ") show" ]);
}});

Clazz.newMeth(C$, 'drawGlyphVector$java_awt_font_GlyphVector$F$F', function (g, x, y) {
var shape=g.getOutline$F$F(x, y);
p$1.draw$java_awt_Shape$S.apply(this, [shape, "fill"]);
});

Clazz.newMeth(C$, 'fill$java_awt_Shape', function (s) {
p$1.draw$java_awt_Shape$S.apply(this, [s, "fill"]);
});

Clazz.newMeth(C$, 'hit$java_awt_Rectangle$java_awt_Shape$Z', function (rect, s, onStroke) {
return s.intersects$java_awt_geom_Rectangle2D(rect);
});

Clazz.newMeth(C$, 'getDeviceConfiguration$', function () {
var gc=null;
var ge=$I$(18).getLocalGraphicsEnvironment$();
var gds=ge.getScreenDevices$();
for (var i=0; i < gds.length; i++) {
var gd=gds[i];
var gcs=gd.getConfigurations$();
if (gcs.length > 0) {
return gcs[0];
}}
return gc;
});

Clazz.newMeth(C$, 'setComposite$java_awt_Composite', function (comp) {
this._composite=comp;
});

Clazz.newMeth(C$, 'setPaint$java_awt_Paint', function (paint) {
this._paint=paint;
if (Clazz.instanceOf(paint, "java.awt.Color")) {
this.setColor$java_awt_Color(paint);
}});

Clazz.newMeth(C$, 'setStroke$java_awt_Stroke', function (s) {
if (Clazz.instanceOf(s, "java.awt.BasicStroke")) {
this._stroke=s;
p$1.append$S.apply(this, [new Float(this._stroke.getLineWidth$()).toString() + " setlinewidth"]);
var miterLimit=this._stroke.getMiterLimit$();
if (miterLimit < 1.0 ) {
miterLimit=1;
}p$1.append$S.apply(this, [new Float(miterLimit).toString() + " setmiterlimit"]);
p$1.append$S.apply(this, [this._stroke.getLineJoin$() + " setlinejoin"]);
p$1.append$S.apply(this, [this._stroke.getEndCap$() + " setlinecap"]);
var dashes=Clazz.new_($I$(17));
dashes.append$S("[ ");
var dashArray=this._stroke.getDashArray$();
if (dashArray != null ) {
for (var i=0; i < dashArray.length; i++) {
dashes.append$S((new Float(dashArray[i]).toString()) + " ");
}
}dashes.append$S("]");
p$1.append$S.apply(this, [dashes.toString() + " 0 setdash"]);
}});

Clazz.newMeth(C$, 'setRenderingHint$java_awt_RenderingHints_Key$O', function (hintKey, hintValue) {
});

Clazz.newMeth(C$, 'getRenderingHint$java_awt_RenderingHints_Key', function (hintKey) {
return null;
});

Clazz.newMeth(C$, 'setRenderingHints$java_util_Map', function (hints) {
});

Clazz.newMeth(C$, 'addRenderingHints$java_util_Map', function (hints) {
});

Clazz.newMeth(C$, 'getRenderingHints$', function () {
return Clazz.new_($I$(19).c$$java_util_Map,[null]);
});

Clazz.newMeth(C$, 'translate$I$I', function (x, y) {
this.translate$D$D(x, y);
});

Clazz.newMeth(C$, 'translate$D$D', function (tx, ty) {
this.transform$java_awt_geom_AffineTransform($I$(4).getTranslateInstance$D$D(tx, ty));
});

Clazz.newMeth(C$, 'rotate$D', function (theta) {
this.rotate$D$D$D(theta, 0, 0);
});

Clazz.newMeth(C$, 'rotate$D$D$D', function (theta, x, y) {
this.transform$java_awt_geom_AffineTransform($I$(4).getRotateInstance$D$D$D(theta, x, y));
});

Clazz.newMeth(C$, 'scale$D$D', function (sx, sy) {
this.transform$java_awt_geom_AffineTransform($I$(4).getScaleInstance$D$D(sx, sy));
});

Clazz.newMeth(C$, 'shear$D$D', function (shx, shy) {
this.transform$java_awt_geom_AffineTransform($I$(4).getShearInstance$D$D(shx, shy));
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform', function (Tx) {
this._transform.concatenate$java_awt_geom_AffineTransform(Tx);
this.setTransform$java_awt_geom_AffineTransform(this.getTransform$());
});

Clazz.newMeth(C$, 'setTransform$java_awt_geom_AffineTransform', function (Tx) {
if (Tx == null ) {
this._transform=Clazz.new_($I$(4));
} else {
this._transform=Clazz.new_($I$(4).c$$java_awt_geom_AffineTransform,[Tx]);
}this.setStroke$java_awt_Stroke(this.getStroke$());
this.setFont$java_awt_Font(this.getFont$());
});

Clazz.newMeth(C$, 'getTransform$', function () {
return Clazz.new_($I$(4).c$$java_awt_geom_AffineTransform,[this._transform]);
});

Clazz.newMeth(C$, 'getPaint$', function () {
return this._paint;
});

Clazz.newMeth(C$, 'getComposite$', function () {
return this._composite;
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color', function (color) {
if (color == null ) {
color=$I$(3).black;
}this._backgroundColor=color;
});

Clazz.newMeth(C$, 'getBackground$', function () {
return this._backgroundColor;
});

Clazz.newMeth(C$, 'getStroke$', function () {
return this._stroke;
});

Clazz.newMeth(C$, 'clip$java_awt_Shape', function (s) {
if (this._clip == null ) {
this.setClip$java_awt_Shape(s);
} else {
var area=Clazz.new_($I$(20).c$$java_awt_Shape,[this._clip]);
area.intersect$java_awt_geom_Area(Clazz.new_($I$(20).c$$java_awt_Shape,[s]));
this.setClip$java_awt_Shape(area);
}});

Clazz.newMeth(C$, 'getFontRenderContext$', function () {
return C$._fontRenderContext;
});

Clazz.newMeth(C$, 'create$', function () {
return Clazz.new_(C$.c$$org_jibble_epsgraphics_EpsGraphics2D,[this]);
});

Clazz.newMeth(C$, 'create$I$I$I$I', function (x, y, width, height) {
var g=this.create$();
g.translate$I$I(x, y);
g.clipRect$I$I$I$I(0, 0, width, height);
return g;
});

Clazz.newMeth(C$, 'getColor$', function () {
return this._color;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color', function (c) {
if (c == null ) {
c=$I$(3).black;
}this._color=c;
p$1.append$S.apply(this, [(new Float(c.getRed$() / 255.0).toString()) + " " + new Float((c.getGreen$() / 255.0)).toString() + " " + new Float((c.getBlue$() / 255.0)).toString() + " setrgbcolor" ]);
});

Clazz.newMeth(C$, 'setPaintMode$', function () {
});

Clazz.newMeth(C$, 'setXORMode$java_awt_Color', function (c1) {
p$1.methodNotSupported.apply(this, []);
});

Clazz.newMeth(C$, 'getFont$', function () {
return this._font;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font', function (font) {
if (font == null ) {
font=$I$(6).decode$S(null);
}this._font=font;
p$1.append$S.apply(this, ["/" + this._font.getPSName$() + " findfont " + (this._font.getSize$()) + " scalefont setfont" ]);
});

Clazz.newMeth(C$, 'getFontMetrics$', function () {
return this.getFontMetrics$java_awt_Font(this.getFont$());
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font', function (f) {
var image=Clazz.new_($I$(13).c$$I$I$I,[1, 1, 1]);
var g=image.getGraphics$();
return g.getFontMetrics$java_awt_Font(f);
});

Clazz.newMeth(C$, 'getClipBounds$', function () {
if (this._clip == null ) {
return null;
}var rect=this.getClip$().getBounds$();
return rect;
});

Clazz.newMeth(C$, 'clipRect$I$I$I$I', function (x, y, width, height) {
this.clip$java_awt_Shape(Clazz.new_($I$(11).c$$I$I$I$I,[x, y, width, height]));
});

Clazz.newMeth(C$, 'setClip$I$I$I$I', function (x, y, width, height) {
this.setClip$java_awt_Shape(Clazz.new_($I$(11).c$$I$I$I$I,[x, y, width, height]));
});

Clazz.newMeth(C$, 'getClip$', function () {
if (this._clip == null ) {
return null;
} else {
try {
var t=this._transform.createInverse$();
t.concatenate$java_awt_geom_AffineTransform(this._clipTransform);
return t.createTransformedShape$java_awt_Shape(this._clip);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.jibble.epsgraphics.EpsException').c$$S,[$I$(9).formatMessage$S$SA("exception.eps_unable_to_get_inverse_matrix", Clazz.array(String, -1, [this._transform.toString()]))]);
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'setClip$java_awt_Shape', function (clip) {
if (clip != null ) {
if (this._document.isClipSet$()) {
p$1.append$S.apply(this, ["grestore"]);
p$1.append$S.apply(this, ["gsave"]);
} else {
this._document.setClipSet$Z(true);
p$1.append$S.apply(this, ["gsave"]);
}p$1.draw$java_awt_Shape$S.apply(this, [clip, "clip"]);
this._clip=clip;
this._clipTransform=this._transform.clone$();
} else {
if (this._document.isClipSet$()) {
p$1.append$S.apply(this, ["grestore"]);
this._document.setClipSet$Z(false);
}this._clip=null;
}});

Clazz.newMeth(C$, 'copyArea$I$I$I$I$I$I', function (x, y, width, height, dx, dy) {
p$1.methodNotSupported.apply(this, []);
});

Clazz.newMeth(C$, 'drawLine$I$I$I$I', function (x1, y1, x2, y2) {
var shape=Clazz.new_($I$(21).c$$F$F$F$F,[x1, y1, x2, y2]);
this.draw$java_awt_Shape(shape);
});

Clazz.newMeth(C$, 'fillRect$I$I$I$I', function (x, y, width, height) {
var shape=Clazz.new_($I$(11).c$$I$I$I$I,[x, y, width, height]);
p$1.draw$java_awt_Shape$S.apply(this, [shape, "fill"]);
});

Clazz.newMeth(C$, 'drawRect$I$I$I$I', function (x, y, width, height) {
var shape=Clazz.new_($I$(11).c$$I$I$I$I,[x, y, width, height]);
this.draw$java_awt_Shape(shape);
});

Clazz.newMeth(C$, 'clearRect$I$I$I$I', function (x, y, width, height) {
var originalColor=this.getColor$();
this.setColor$java_awt_Color(this.getBackground$());
var shape=Clazz.new_($I$(11).c$$I$I$I$I,[x, y, width, height]);
p$1.draw$java_awt_Shape$S.apply(this, [shape, "fill"]);
this.setColor$java_awt_Color(originalColor);
});

Clazz.newMeth(C$, 'drawRoundRect$I$I$I$I$I$I', function (x, y, width, height, arcWidth, arcHeight) {
var shape=Clazz.new_($I$(22).c$$F$F$F$F$F$F,[x, y, width, height, arcWidth, arcHeight]);
this.draw$java_awt_Shape(shape);
});

Clazz.newMeth(C$, 'fillRoundRect$I$I$I$I$I$I', function (x, y, width, height, arcWidth, arcHeight) {
var shape=Clazz.new_($I$(22).c$$F$F$F$F$F$F,[x, y, width, height, arcWidth, arcHeight]);
p$1.draw$java_awt_Shape$S.apply(this, [shape, "fill"]);
});

Clazz.newMeth(C$, 'drawOval$I$I$I$I', function (x, y, width, height) {
var shape=Clazz.new_($I$(23).c$$F$F$F$F,[x, y, width, height]);
this.draw$java_awt_Shape(shape);
});

Clazz.newMeth(C$, 'fillOval$I$I$I$I', function (x, y, width, height) {
var shape=Clazz.new_($I$(23).c$$F$F$F$F,[x, y, width, height]);
p$1.draw$java_awt_Shape$S.apply(this, [shape, "fill"]);
});

Clazz.newMeth(C$, 'drawArc$I$I$I$I$I$I', function (x, y, width, height, startAngle, arcAngle) {
var shape=Clazz.new_($I$(24).c$$F$F$F$F$F$F$I,[x, y, width, height, startAngle, arcAngle, 0]);
this.draw$java_awt_Shape(shape);
});

Clazz.newMeth(C$, 'fillArc$I$I$I$I$I$I', function (x, y, width, height, startAngle, arcAngle) {
var shape=Clazz.new_($I$(24).c$$F$F$F$F$F$F$I,[x, y, width, height, startAngle, arcAngle, 2]);
p$1.draw$java_awt_Shape$S.apply(this, [shape, "fill"]);
});

Clazz.newMeth(C$, 'drawPolyline$IA$IA$I', function (xPoints, yPoints, nPoints) {
if (nPoints > 0) {
var path=Clazz.new_($I$(25));
path.moveTo$F$F(xPoints[0], yPoints[0]);
for (var i=1; i < nPoints; i++) {
path.lineTo$F$F(xPoints[i], yPoints[i]);
}
this.draw$java_awt_Shape(path);
}});

Clazz.newMeth(C$, 'drawPolygon$IA$IA$I', function (xPoints, yPoints, nPoints) {
var shape=Clazz.new_($I$(26).c$$IA$IA$I,[xPoints, yPoints, nPoints]);
this.draw$java_awt_Shape(shape);
});

Clazz.newMeth(C$, 'drawPolygon$java_awt_Polygon', function (p) {
this.draw$java_awt_Shape(p);
});

Clazz.newMeth(C$, 'fillPolygon$IA$IA$I', function (xPoints, yPoints, nPoints) {
var shape=Clazz.new_($I$(26).c$$IA$IA$I,[xPoints, yPoints, nPoints]);
p$1.draw$java_awt_Shape$S.apply(this, [shape, "fill"]);
});

Clazz.newMeth(C$, 'fillPolygon$java_awt_Polygon', function (p) {
p$1.draw$java_awt_Shape$S.apply(this, [p, "fill"]);
});

Clazz.newMeth(C$, 'drawChars$CA$I$I$I$I', function (data, offset, length, x, y) {
var string= String.instantialize(data, offset, length);
this.drawString$S$I$I(string, x, y);
});

Clazz.newMeth(C$, 'drawBytes$BA$I$I$I$I', function (data, offset, length, x, y) {
var string= String.instantialize(data, offset, length);
this.drawString$S$I$I(string, x, y);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver', function (img, x, y, observer) {
return this.drawImage$java_awt_Image$I$I$java_awt_Color$java_awt_image_ImageObserver(img, x, y, $I$(3).white, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver', function (img, x, y, width, height, observer) {
return this.drawImage$java_awt_Image$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver(img, x, y, width, height, $I$(3).white, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$java_awt_Color$java_awt_image_ImageObserver', function (img, x, y, bgcolor, observer) {
var width=img.getWidth$java_awt_image_ImageObserver(null);
var height=img.getHeight$java_awt_image_ImageObserver(null);
return this.drawImage$java_awt_Image$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver(img, x, y, width, height, bgcolor, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver', function (img, x, y, width, height, bgcolor, observer) {
return this.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver(img, x, y, x + width, y + height, 0, 0, width, height, bgcolor, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver', function (img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, observer) {
return this.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver(img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, $I$(3).white, observer);
});

Clazz.newMeth(C$, 'drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver', function (img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, bgcolor, observer) {
if (dx1 >= dx2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dx1 >= dx2"]);
}if (sx1 >= sx2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sx1 >= sx2"]);
}if (dy1 >= dy2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dy1 >= dy2"]);
}if (sy1 >= sy2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sy1 >= sy2"]);
}p$1.append$S.apply(this, ["gsave"]);
var width=sx2 - sx1;
var height=sy2 - sy1;
var destWidth=dx2 - dx1;
var destHeight=dy2 - dy1;
var pixels=Clazz.array(Integer.TYPE, [width * height]);
var pg=Clazz.new_($I$(27).c$$java_awt_Image$I$I$I$I$IA$I$I,[img, sx1, sy1, sx2 - sx1, sy2 - sy1, pixels, 0, width]);
try {
pg.grabPixels$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
return false;
} else {
throw e;
}
}
var matrix=Clazz.new_($I$(4).c$$java_awt_geom_AffineTransform,[this._transform]);
matrix.translate$D$D(dx1, dy1);
matrix.scale$D$D(destWidth / width, destHeight / height);
var m=Clazz.array(Double.TYPE, [6]);
try {
matrix=matrix.createInverse$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.jibble.epsgraphics.EpsException').c$$S,[$I$(9).formatMessage$S$SA("exception.eps_unable_to_get_inverse_matrix", Clazz.array(String, -1, [matrix.toString()]))]);
} else {
throw e;
}
}
matrix.scale$D$D(1, -1);
matrix.getMatrix$DA(m);
p$1.append$S.apply(this, [width + " " + height + " 8 [" + new Double(m[0]).toString() + " " + new Double(m[1]).toString() + " " + new Double(m[2]).toString() + " " + new Double(m[3]).toString() + " " + new Double(m[4]).toString() + " " + new Double(m[5]).toString() + "]" ]);
var oldColor=this.getColor$();
this.setColor$java_awt_Color(this.getBackground$());
this.fillRect$I$I$I$I(dx1, dy1, destWidth, destHeight);
this.setColor$java_awt_Color(oldColor);
p$1.append$S.apply(this, ["{currentfile 3 " + width + " mul string readhexstring pop} bind" ]);
p$1.append$S.apply(this, ["false 3 colorimage"]);
var line=Clazz.new_($I$(17));
for (var y=0; y < height; y++) {
for (var x=0; x < width; x++) {
var color=Clazz.new_($I$(3).c$$I,[pixels[x + width * y]]);
line.append$S(p$1.toHexString$I.apply(this, [color.getRed$()]) + p$1.toHexString$I.apply(this, [color.getGreen$()]) + p$1.toHexString$I.apply(this, [color.getBlue$()]) );
if (line.length$() > 64) {
p$1.append$S.apply(this, [line.toString()]);
line=Clazz.new_($I$(17));
}}
}
if (line.length$() > 0) {
p$1.append$S.apply(this, [line.toString()]);
}p$1.append$S.apply(this, ["grestore"]);
return true;
});

Clazz.newMeth(C$, 'dispose$', function () {
this._document=null;
});

Clazz.newMeth(C$, 'finalize$', function () {
C$.superclazz.prototype.finalize$.apply(this, []);
});

Clazz.newMeth(C$, 'toString', function () {
var writer=Clazz.new_($I$(28));
try {
this._document.write$java_io_Writer(writer);
this._document.flush$();
this._document.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.jibble.epsgraphics.EpsException').c$$S,[e.toString()]);
} else {
throw e;
}
}
return writer.toString();
});

Clazz.newMeth(C$, 'hitClip$I$I$I$I', function (x, y, width, height) {
if (this._clip == null ) {
return true;
}var rect=Clazz.new_($I$(11).c$$I$I$I$I,[x, y, width, height]);
return this.hit$java_awt_Rectangle$java_awt_Shape$Z(rect, this._clip, true);
});

Clazz.newMeth(C$, 'getClipBounds$java_awt_Rectangle', function (r) {
if (this._clip == null ) {
return r;
}var rect=this.getClipBounds$();
r.setLocation$I$I((rect.getX$()|0), (rect.getY$()|0));
r.setSize$I$I((rect.getWidth$()|0), (rect.getHeight$()|0));
return r;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
