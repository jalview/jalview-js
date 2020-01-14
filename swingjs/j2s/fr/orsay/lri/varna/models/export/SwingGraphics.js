(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),p$1={},I$=[[0,'java.awt.BasicStroke','java.awt.Dimension',['java.awt.geom.Rectangle2D','.Double'],['java.awt.geom.Ellipse2D','.Double']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SwingGraphics", null, null, 'fr.orsay.lri.varna.models.export.VueVARNAGraphics');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._dashedStroke=null;
this._plainStroke=null;
this._g2d=null;
this._debug=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._debug=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Graphics2D', function (g2d) {
C$.$init$.apply(this);
this._g2d=g2d;
var dash=Clazz.array(Float.TYPE, -1, [5.0, 5.0]);
this._dashedStroke=Clazz.new_($I$(1).c$$F$I$I$F$FA$F,[1.0, 1, 1, 3.0, dash, 0]);
this._plainStroke=Clazz.new_($I$(1).c$$F$I$I$F,[1.0, 1, 1, 3.0]);
}, 1);

Clazz.newMeth(C$, 'getStringDimension$S', function (s) {
var fm=this._g2d.getFontMetrics$();
var r=fm.getStringBounds$S$java_awt_Graphics(s, this._g2d);
return (Clazz.new_($I$(2).c$$I$I,[(r.getWidth$()|0), fm.getAscent$() - fm.getDescent$()]));
});

Clazz.newMeth(C$, 'drawStringCentered$S$D$D', function (res, x, y) {
var d=this.getStringDimension$S(res);
x -= d.width / 2.0;
y += d.height / 2.0;
if (this._debug) {
var bck=this._g2d.getStroke$();
this._g2d.setStroke$java_awt_Stroke(this._plainStroke);
this._g2d.draw$java_awt_Shape(Clazz.new_($I$(3).c$$D$D$D$D,[x, y - d.height, d.width, d.height]));
this._g2d.setStroke$java_awt_Stroke(bck);
}this._g2d.drawString$S$F$F(res, (x), (y));
});

Clazz.newMeth(C$, 'draw$java_awt_geom_GeneralPath', function (s) {
this._g2d.draw$java_awt_Shape(s);
});

Clazz.newMeth(C$, 'drawArc$D$D$D$D$D$D', function (x, y, rx, ry, angleStart, angleEnd) {
this._g2d.drawArc$I$I$I$I$I$I(((x - rx / 2.0)|0), ((y - ry / 2.0)|0), (rx|0), (ry|0), (angleStart|0), (angleEnd|0));
});

Clazz.newMeth(C$, 'drawLine$D$D$D$D', function (x1, y1, x2, y2) {
this._g2d.drawLine$I$I$I$I((x1|0), (y1|0), (x2|0), (y2|0));
});

Clazz.newMeth(C$, 'drawCircle$D$D$D', function (x, y, r) {
this._g2d.draw$java_awt_Shape(Clazz.new_($I$(4).c$$D$D$D$D,[x, y, r, r]));
});

Clazz.newMeth(C$, 'drawRect$D$D$D$D', function (x, y, w, h) {
this._g2d.drawRect$I$I$I$I((x|0), (y|0), (w|0), (h|0));
});

Clazz.newMeth(C$, 'drawRoundRect$D$D$D$D$D$D', function (x, y, w, h, rx, ry) {
this._g2d.drawRoundRect$I$I$I$I$I$I((x|0), (y|0), (w|0), (h|0), (rx|0), (ry|0));
});

Clazz.newMeth(C$, 'drawString$S$D$D', function (s, x, y) {
this._g2d.drawString$S$F$F(s, x, y);
});

Clazz.newMeth(C$, 'fill$java_awt_geom_GeneralPath', function (s) {
this._g2d.fill$java_awt_Shape(s);
});

Clazz.newMeth(C$, 'fillCircle$D$D$D', function (x, y, r) {
this._g2d.fill$java_awt_Shape(Clazz.new_($I$(4).c$$D$D$D$D,[x, y, r, r]));
});

Clazz.newMeth(C$, 'fillRect$D$D$D$D', function (x, y, w, h) {
this._g2d.fill$java_awt_Shape(Clazz.new_($I$(3).c$$D$D$D$D,[x, y, w, h]));
});

Clazz.newMeth(C$, 'fillRoundRect$D$D$D$D$D$D', function (x, y, w, h, rx, ry) {
this._g2d.fillRoundRect$I$I$I$I$I$I((x|0), (y|0), (w|0), (h|0), (rx|0), (ry|0));
});

Clazz.newMeth(C$, 'getColor$', function () {
return this._g2d.getColor$();
});

Clazz.newMeth(C$, 'setColor$java_awt_Color', function (c) {
this._g2d.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'setSelectionStroke$', function () {
this._g2d.setStroke$java_awt_Stroke(this._dashedStroke);
});

Clazz.newMeth(C$, 'setFont$java_awt_Font', function (f) {
this._g2d.setFont$java_awt_Font(f);
});

Clazz.newMeth(C$, 'setPlainStroke$', function () {
this._g2d.setStroke$java_awt_Stroke(this._plainStroke);
});

Clazz.newMeth(C$, 'deriveStroke$java_awt_BasicStroke$D', function (s, t) {
return Clazz.new_($I$(1).c$$F$I$I$F$FA$F,[t, s.getEndCap$(), s.getLineJoin$(), s.getMiterLimit$(), s.getDashArray$(), s.getDashPhase$()]);
}, p$1);

Clazz.newMeth(C$, 'setStrokeThickness$D', function (t) {
var dashed=(this._g2d.getStroke$() === this._dashedStroke );
this._plainStroke=p$1.deriveStroke$java_awt_BasicStroke$D.apply(this, [this._plainStroke, t]);
if (dashed) {
this._g2d.setStroke$java_awt_Stroke(this._dashedStroke);
} else {
this._g2d.setStroke$java_awt_Stroke(this._plainStroke);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
