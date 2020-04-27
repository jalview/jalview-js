(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "TikzExport", null, 'fr.orsay.lri.varna.models.export.SecStrDrawingProducer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
C$.superclazz.prototype.setScale$D.apply(this, [0.2]);
}, 1);

Clazz.newMeth(C$, 'TikzHeader', function () {
return "\\documentclass[tikz,border=10pt]{standalone}\n\\usepackage{tikz,relsize}\n\\usetikzlibrary{positioning}\n\\begin{document}\n\\begin{tikzpicture}[inner sep=0, fill=none,draw=none,text=none,font={\\sf}]\n";
}, p$1);

Clazz.newMeth(C$, 'formatPoint$java_awt_geom_Point2D_Double', function (p) {
return p$1.formatPoint$D$D.apply(this, [p.x, p.y]);
}, p$1);

Clazz.newMeth(C$, 'formatPoint$D$D', function (x, y) {
return "(" + (new Double(C$.superclazz.prototype.getScale$.apply(this, []) * x).toString()) + "," + new Double((C$.superclazz.prototype.getScale$.apply(this, []) * y)).toString() + ")" ;
}, p$1);

Clazz.newMeth(C$, 'drawCircleS$java_awt_geom_Point2D_Double$D$D', function (p, radius, thickness) {
return "  \\draw[draw=currColor] " + p$1.formatPoint$java_awt_geom_Point2D_Double.apply(this, [p]) + " circle (" + new Double((radius * C$.superclazz.prototype.getScale$.apply(this, []))).toString() + ");\n" ;
});

Clazz.newMeth(C$, 'fillCircleS$java_awt_geom_Point2D_Double$D$D$java_awt_Color', function (p, radius, thickness, col) {
return this.setColorS$java_awt_Color(col) + "  \\fill[fill=currColor] " + p$1.formatPoint$java_awt_geom_Point2D_Double.apply(this, [p]) + " circle (" + new Double((radius * C$.superclazz.prototype.getScale$.apply(this, []))).toString() + ");\n" ;
});

Clazz.newMeth(C$, 'drawLineS$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D', function (p0, p1, thickness) {
return "  \\draw[draw=currColor] " + p$1.formatPoint$java_awt_geom_Point2D_Double.apply(this, [p0]) + " -- " + p$1.formatPoint$java_awt_geom_Point2D_Double.apply(this, [p1]) + ";\n" ;
});

Clazz.newMeth(C$, 'drawRectangleS$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D', function (p, dims, thickness) {
return "  \\draw[draw=currColor] " + p$1.formatPoint$java_awt_geom_Point2D_Double.apply(this, [p]) + " -- " + p$1.formatPoint$D$D.apply(this, [p.x + dims.x, p.y]) + " -- " + p$1.formatPoint$D$D.apply(this, [p.x + dims.x, p.y + dims.y]) + " -- " + p$1.formatPoint$D$D.apply(this, [p.x, p.y + dims.y]) + " -- " + p$1.formatPoint$java_awt_geom_Point2D_Double.apply(this, [p]) + ";\n" ;
});

Clazz.newMeth(C$, 'drawTextS$java_awt_geom_Point2D_Double$S', function (p, txt) {
return "  \\node[text=currColor] at " + p$1.formatPoint$java_awt_geom_Point2D_Double.apply(this, [p]) + " {" + txt + "};\n" ;
});

Clazz.newMeth(C$, 'setFontS$I$D', function (font, size) {
this._font=font;
this._fontsize=1.2 * size;
return "";
});

Clazz.newMeth(C$, 'setColorS$java_awt_Color', function (col) {
C$.superclazz.prototype.setColorS$java_awt_Color.apply(this, [col]);
return "\\definecolor{currColor}{rgb}{" + (new Double((col.getRed$()) / 255.0).toString()) + "," + new Double(((col.getGreen$()) / 255.0)).toString() + "," + new Double(((col.getBlue$()) / 255.0)).toString() + "}\n" ;
});

Clazz.newMeth(C$, 'footerS$', function () {
return "\\end{tikzpicture}\n\\end{document}";
});

Clazz.newMeth(C$, 'headerS$java_awt_geom_Rectangle2D_Double', function (bb) {
return p$1.TikzHeader.apply(this, []);
});

Clazz.newMeth(C$, 'drawArcS$java_awt_geom_Point2D_Double$D$D$D$D', function (origine, width, height, startAngle, endAngle) {
return "";
});

Clazz.newMeth(C$, 'drawPolygonS$java_awt_geom_Point2D_DoubleA$D', function (points, thickness) {
if (points.length > 0) {
var result="\\draw[draw=currColor] ";
for (var i=0; i < points.length; i++) {
result += "" + p$1.formatPoint$java_awt_geom_Point2D_Double.apply(this, [points[i]]) + " -- " ;
}
result += "" + p$1.formatPoint$java_awt_geom_Point2D_Double.apply(this, [points[0]]) + ";" ;
return result;
} else {
return "";
}});

Clazz.newMeth(C$, 'fillPolygonS$java_awt_geom_Point2D_DoubleA$java_awt_Color', function (points, col) {
if (points.length > 0) {
var result="\\fill[fill=currColor] ";
for (var i=0; i < points.length; i++) {
result += "" + p$1.formatPoint$java_awt_geom_Point2D_Double.apply(this, [points[i]]) + " -- " ;
}
result += "" + p$1.formatPoint$java_awt_geom_Point2D_Double.apply(this, [points[0]]) + ";" ;
return this.setColorS$java_awt_Color(col) + result;
} else {
return this.setColorS$java_awt_Color(col);
}});

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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
