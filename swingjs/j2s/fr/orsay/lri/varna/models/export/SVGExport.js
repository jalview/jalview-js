(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),p$1={},I$=[[0,['java.awt.geom.Rectangle2D','.Double'],['java.awt.geom.Point2D','.Double']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SVGExport", null, 'fr.orsay.lri.varna.models.export.SecStrDrawingProducer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$_fontsize=0;
this._bb=null;
this._thickness=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.$_fontsize=10.0;
this._bb=Clazz.new_($I$(1).c$$D$D$D$D,[0, 0, 10, 10]);
this._thickness=2.0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
C$.superclazz.prototype.setScale$D.apply(this, [0.5]);
}, 1);

Clazz.newMeth(C$, 'getRGBString$java_awt_Color', function (col) {
var rpc=((((col.getRed$()) / 255.0) * 100)|0);
var gpc=((((col.getGreen$()) / 255.0) * 100)|0);
var bpc=((((col.getBlue$()) / 255.0) * 100)|0);
return "rgb(" + rpc + "%, " + gpc + "%, " + bpc + "%)" ;
}, p$1);

Clazz.newMeth(C$, 'drawCircleS$java_awt_geom_Point2D_Double$D$D', function (base, radius, thickness) {
this._thickness=thickness;
return "<circle cx=\"" + new Double(base.x).toString() + "\" cy=\"" + new Double((this._bb.height - base.y)).toString() + "\" r=\"" + new Double(radius).toString() + "\" stroke=\"" + p$1.getRGBString$java_awt_Color.apply(this, [this._curColor]) + "\" stroke-width=\"" + new Double(thickness).toString() + "\" fill=\"none\"/>\n" ;
});

Clazz.newMeth(C$, 'drawLineS$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D', function (orig, dest, thickness) {
this._thickness=thickness;
return "<line x1=\"" + new Double(orig.x).toString() + "\" y1=\"" + new Double((this._bb.height - orig.y)).toString() + "\" x2=\"" + new Double(dest.x).toString() + "\" y2=\"" + new Double((this._bb.height - dest.y)).toString() + "\" stroke=\"" + p$1.getRGBString$java_awt_Color.apply(this, [this._curColor]) + "\" stroke-width=\"" + new Double(thickness).toString() + "\" />\n" ;
});

Clazz.newMeth(C$, 'drawRectangleS$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D', function (orig, dims, thickness) {
this._thickness=thickness;
return "<rect x=\"" + new Double(orig.x).toString() + "\" y=\"" + new Double((this._bb.height - orig.y - dims.y )).toString() + "\" width=\"" + new Double(dims.x).toString() + "\" height=\"" + new Double(dims.y).toString() + "\" fill=\"none\" style=\"stroke-width:" + new Double(thickness).toString() + ";stroke:" + p$1.getRGBString$java_awt_Color.apply(this, [this._curColor]) + "\"/>" ;
});

Clazz.newMeth(C$, 'drawTextS$java_awt_geom_Point2D_Double$S', function (base, txt) {
return "<text x=\"" + (new Double(base.x).toString()) + "\" y=\"" + new Double((this._bb.height - base.y + 0.4 * this.$_fontsize)).toString() + "\" text-anchor=\"middle\" font-family=\"Verdana\" font-size=\"" + new Double(this.$_fontsize).toString() + "\" fill=\"" + p$1.getRGBString$java_awt_Color.apply(this, [this._curColor]) + "\" >" + txt + "</text>\n" ;
});

Clazz.newMeth(C$, 'fillCircleS$java_awt_geom_Point2D_Double$D$D$java_awt_Color', function (base, radius, thickness, col) {
this._thickness=thickness;
return "<circle cx=\"" + new Double(base.x).toString() + "\" cy=\"" + new Double((this._bb.height - base.y)).toString() + "\" r=\"" + new Double(radius).toString() + "\" stroke=\"none\" stroke-width=\"" + new Double(thickness).toString() + "\" fill=\"" + p$1.getRGBString$java_awt_Color.apply(this, [col]) + "\"/>\n" ;
});

Clazz.newMeth(C$, 'footerS$', function () {
return "</svg>\n";
});

Clazz.newMeth(C$, 'headerS$java_awt_geom_Rectangle2D_Double', function (bb) {
this._bb=bb;
return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \n\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\n<svg width=\"100%\" height=\"100%\" version=\"1.1\"\nxmlns=\"http://www.w3.org/2000/svg\">\n";
});

Clazz.newMeth(C$, 'setFontS$I$D', function (font, size) {
this.$_fontsize=0.5 * size;
return "";
});

Clazz.newMeth(C$, 'polarToCartesian$java_awt_geom_Point2D_Double$D$D$D', function (center, radiusX, radiusY, angleInDegrees) {
var angleInRadians=(angleInDegrees) * 3.141592653589793 / 180.0;
return Clazz.new_($I$(2).c$$D$D,[center.x + (radiusX * Math.cos(angleInRadians)), this._bb.height - (center.y + (radiusY * Math.sin(angleInRadians)))]);
}, p$1);

Clazz.newMeth(C$, 'drawArcS$java_awt_geom_Point2D_Double$D$D$D$D', function (o, width, height, startAngle, endAngle) {
var rx=width / 2.0;
var ry=height / 2.0;
var ps=p$1.polarToCartesian$java_awt_geom_Point2D_Double$D$D$D.apply(this, [o, rx, ry, startAngle]);
var pe=p$1.polarToCartesian$java_awt_geom_Point2D_Double$D$D$D.apply(this, [o, rx, ry, endAngle]);
var d="<path d=\"M " + new Double(ps.x).toString() + "," + new Double(ps.y).toString() + " A " + new Double(rx).toString() + "," + new Double(ry).toString() + " 0 1,1 " + new Double(pe.x).toString() + "," + new Double(pe.y).toString() + "\" style=\"fill:none; stroke:" + p$1.getRGBString$java_awt_Color.apply(this, [this._curColor]) + "; stroke-width:" + new Double(this._thickness).toString() + "\"/>\n" ;
return d;
});

Clazz.newMeth(C$, 'drawPolygonS$java_awt_geom_Point2D_DoubleA$D', function (points, thickness) {
var result="<path d=\"";
for (var i=0; i < points.length; i++) {
if (i == 0) {
result += "M " + new Double(points[i].x).toString() + " " + new Double((this._bb.height - points[i].y)).toString() + " " ;
} else {
result += "L " + new Double(points[i].x).toString() + " " + new Double((this._bb.height - points[i].y)).toString() + " " ;
}}
result += "z\" style=\"fill:none; stroke:" + p$1.getRGBString$java_awt_Color.apply(this, [this._curColor]) + "; stroke-width:" + new Double(thickness).toString() + ";\"/>\n" ;
return result;
});

Clazz.newMeth(C$, 'fillPolygonS$java_awt_geom_Point2D_DoubleA$java_awt_Color', function (points, col) {
var result="<path d=\"";
for (var i=0; i < points.length; i++) {
if (i == 0) {
result += "M " + new Double(points[i].x).toString() + " " + new Double((this._bb.height - points[i].y)).toString() + " " ;
} else {
result += "L " + new Double(points[i].x).toString() + " " + new Double((this._bb.height - points[i].y)).toString() + " " ;
}}
result += "z\" fill=\"" + p$1.getRGBString$java_awt_Color.apply(this, [col]) + "\" style=\"stroke:none;\"/>\n" ;
return result;
});

Clazz.newMeth(C$, 'drawBaseStartS$I', function (index) {
return "";
});

Clazz.newMeth(C$, 'drawBaseEndS$I', function (index) {
return "";
});

Clazz.newMeth(C$, 'drawBasePairStartS$I$I$fr_orsay_lri_varna_models_rna_ModeleBP', function (i, j, bps) {
return "";
});

Clazz.newMeth(C$, 'drawBasePairEndS$I', function (index) {
return "";
});

Clazz.newMeth(C$, 'drawBackboneStartS$I$I', function (i, j) {
return "";
});

Clazz.newMeth(C$, 'drawBackboneEndS$I', function (index) {
return "";
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
