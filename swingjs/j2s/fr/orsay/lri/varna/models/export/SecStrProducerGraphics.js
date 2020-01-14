(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),I$=[[0,'fr.orsay.lri.varna.models.export.SecStrDrawingProducer','java.io.FileWriter','fr.orsay.lri.varna.exceptions.ExceptionWritingForbidden']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SecStrProducerGraphics", null, null, 'fr.orsay.lri.varna.models.export.VueVARNAGraphics');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._ss=null;
this._thickness=0;
this._color=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_export_SecStrDrawingProducer', function (ss) {
C$.$init$.apply(this);
this._ss=ss;
}, 1);

Clazz.newMeth(C$, 'draw$java_awt_geom_GeneralPath', function (s) {
this._ss.fillPolygon$java_awt_geom_GeneralPath$java_awt_Color(s, this.getColor$());
});

Clazz.newMeth(C$, 'drawArc$D$D$D$D$D$D', function (x, y, rx, ry, angleStart, angleEnd) {
});

Clazz.newMeth(C$, 'drawLine$D$D$D$D', function (x1, y1, x2, y2) {
this._ss.drawLine$D$D$D$D$D(x1, -y1, x2, -y2, this._thickness);
});

Clazz.newMeth(C$, 'drawCircle$D$D$D', function (x, y, r) {
this._ss.drawCircle$D$D$D$D(x + 0.5 * r, -y - 0.5 * r, 0.5 * r, this._thickness);
});

Clazz.newMeth(C$, 'drawRect$D$D$D$D', function (x, y, w, h) {
});

Clazz.newMeth(C$, 'drawRoundRect$D$D$D$D$D$D', function (x, y, w, h, rx, ry) {
});

Clazz.newMeth(C$, 'drawStringCentered$S$D$D', function (res, x, y) {
this._ss.drawText$D$D$S(x, -y, res);
});

Clazz.newMeth(C$, 'fill$java_awt_geom_GeneralPath', function (s) {
this._ss.fillPolygon$java_awt_geom_GeneralPath$java_awt_Color(s, this.getColor$());
});

Clazz.newMeth(C$, 'fillCircle$D$D$D', function (x, y, r) {
this._ss.fillCircle$D$D$D$D$java_awt_Color(x + 0.5 * r, -y - 0.5 * r, 0.5 * r, this._thickness, this._ss.getCurrentColor$());
});

Clazz.newMeth(C$, 'fillRect$D$D$D$D', function (x, y, w, h) {
});

Clazz.newMeth(C$, 'fillRoundRect$D$D$D$D$D$D', function (x, y, w, h, rx, ry) {
});

Clazz.newMeth(C$, 'getColor$', function () {
return this._ss.getCurrentColor$();
});

Clazz.newMeth(C$, 'getStringDimension$S', function (s) {
return null;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color', function (c) {
this._ss.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'setSelectionStroke$', function () {
});

Clazz.newMeth(C$, 'setFont$java_awt_Font', function (f) {
this._ss.setFont$I$D($I$(1).FONT_HELVETICA_BOLD, f.getSize2D$());
});

Clazz.newMeth(C$, 'setPlainStroke$', function () {
});

Clazz.newMeth(C$, 'setStrokeThickness$D', function (t) {
this._thickness=t;
});

Clazz.newMeth(C$, 'saveToDisk$S', function (path) {
var fout;
try {
fout=Clazz.new_($I$(2).c$$S,[path]);
fout.write$S(this._ss.export$());
fout.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(3).c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
