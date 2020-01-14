(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),p$1={};
var C$=Clazz.newClass(P$, "PSExport", null, 'fr.orsay.lri.varna.models.export.SecStrDrawingProducer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
C$.superclazz.prototype.setScale$D.apply(this, [0.4]);
}, 1);

Clazz.newMeth(C$, 'PSMacros', function () {
var setFontSize="/setbasefont \n{ /Helvetica-Bold findfont\n  exch scalefont\n  setfont \n  } def\n\n";
var writeTextCentered="/txtcenter \n{ dup \n  stringwidth pop\n  2 div neg \n  3 -1 roll \n  2 div neg\n  rmoveto\n  show\n  } def\n\n";
var drawEllipse="/ellipse {\n  /endangle exch def\n  /startangle exch def\n  /yrad exch def\n  /xrad exch def\n  /y exch def\n  /x exch def\n  /savematrix matrix currentmatrix def\n  x y translate\n  xrad yrad scale\n  0 0 1 startangle endangle arc\n  savematrix setmatrix\n  } def\n\n";
return setFontSize + writeTextCentered + drawEllipse ;
}, p$1);

Clazz.newMeth(C$, 'EPSHeader$D$D$D$D', function (minX, maxX, minY, maxY) {
var bbox=p$1.PSBBox$D$D$D$D.apply(this, [minX, minY, maxX, maxY]);
var init="%!PS-Adobe-3.0\n%%Pages: 1\n" + bbox + "%%EndComments\n" + "%%Page: 1 1\n" ;
var macros=p$1.PSMacros.apply(this, []);
return init + macros;
}, p$1);

Clazz.newMeth(C$, 'EPSFooter', function () {
return "showpage\n%%EndPage: 1\n%%EOF";
}, p$1);

Clazz.newMeth(C$, 'PSNewPath', function () {
return ("newpath\n");
}, p$1);

Clazz.newMeth(C$, 'PSMoveTo$D$D', function (x, y) {
return ("" + new Double(x).toString() + " " + new Double(y).toString() + " moveto\n" );
}, p$1);

Clazz.newMeth(C$, 'PSLineTo$D$D', function (dx, dy) {
return ("" + new Double(dx).toString() + " " + new Double(dy).toString() + " lineto\n" );
}, p$1);

Clazz.newMeth(C$, 'PSRLineTo$D$D', function (dx, dy) {
return ("" + new Double(dx).toString() + " " + new Double(dy).toString() + " rlineto\n" );
}, p$1);

Clazz.newMeth(C$, 'PSSetLineWidth$D', function (thickness) {
thickness /= 2;
return ("" + new Double(thickness).toString() + " setlinewidth\n" );
}, p$1);

Clazz.newMeth(C$, 'PSStroke', function () {
return ("stroke\n");
}, p$1);

Clazz.newMeth(C$, 'PSArc$D$D$D$D$D$D', function (x, y, radiusX, radiusY, angleFrom, angleTo) {
var centerX=x;
var centerY=y;
return (new Double(centerX).toString() + " " + new Double(centerY).toString() + " " + new Double(radiusX / 2.0).toString()  + " " + new Double(radiusY / 2.0).toString() + " " + new Double(angleTo).toString() + " " + new Double(angleFrom).toString() + " ellipse\n");
}, p$1);

Clazz.newMeth(C$, 'PSArc$D$D$D$D$D', function (x, y, radius, angleFrom, angleTo) {
return ("" + new Double(x).toString() + " " + new Double(y).toString() + " " + new Double(radius).toString() + " " + new Double(angleFrom).toString() + " " + new Double(angleTo).toString() + "  arc\n" );
}, p$1);

Clazz.newMeth(C$, 'PSBBox$D$D$D$D', function (minX, maxX, minY, maxY) {
var norm=("%%BoundingBox: " + (Math.floor(minX)|0) + " " + (Math.floor(minY)|0) + " " + (Math.ceil(maxX)|0) + " " + (Math.ceil(maxY)|0) + "\n" );
var high=("%%HighResBoundingBox: " + (Math.floor(minX)|0) + " " + (Math.floor(minY)|0) + " " + (Math.ceil(maxX)|0) + " " + (Math.ceil(maxY)|0) + "\n" );
return norm + high;
}, p$1);

Clazz.newMeth(C$, 'PSText$S', function (txt) {
return ("(" + txt + ") " );
}, p$1);

Clazz.newMeth(C$, 'PSShow', function () {
return ("show\n");
}, p$1);

Clazz.newMeth(C$, 'PSClosePath', function () {
return ("closepath\n");
}, p$1);

Clazz.newMeth(C$, 'PSFill', function () {
return ("fill\n");
}, p$1);

Clazz.newMeth(C$, 'PSSetColor$java_awt_Color', function (col) {
return ("" + (new Double((col.getRed$()) / 255.0).toString()) + " " + new Double(((col.getGreen$()) / 255.0)).toString() + " " + new Double(((col.getBlue$()) / 255.0)).toString() + " setrgbcolor\n" );
}, p$1);

Clazz.newMeth(C$, 'fontName$I', function (font) {
switch (font) {
case (0):
return "/Times-Roman";
case (1):
return "/Times-Bold";
case (2):
return "/Times-Italic";
case (3):
return "/Times-BoldItalic";
case (16):
return "/Helvetica";
case (18):
return "/Helvetica-Bold";
case (17):
return "/Helvetica-Oblique";
case (19):
return "/Helvetica-BoldOblique";
case (12):
return "/Courier";
case (13):
return "/Courier-Bold";
case (14):
return "/Courier-Oblique";
case (15):
return "/Courier-BoldOblique";
}
return "/Helvetica";
}, p$1);

Clazz.newMeth(C$, 'PSSetFont$I$D', function (font, size) {
return (p$1.fontName$I.apply(this, [font]) + " findfont " + new Double(size).toString() + " scalefont setfont\n" );
}, p$1);

Clazz.newMeth(C$, 'setFontS$I$D', function (font, size) {
this._fontsize=((0.4 * size)|0);
return p$1.PSSetFont$I$D.apply(this, [font, this._fontsize]);
});

Clazz.newMeth(C$, 'setColorS$java_awt_Color', function (col) {
C$.superclazz.prototype.setColorS$java_awt_Color.apply(this, [col]);
var result=p$1.PSSetColor$java_awt_Color.apply(this, [col]);
return result;
});

Clazz.newMeth(C$, 'drawLineS$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D', function (p0, p1, thickness) {
var tmp="";
tmp += p$1.PSMoveTo$D$D.apply(this, [p0.x, p0.y]);
tmp += p$1.PSLineTo$D$D.apply(this, [p1.x, p1.y]);
tmp += p$1.PSSetLineWidth$D.apply(this, [thickness]);
tmp += p$1.PSStroke.apply(this, []);
return tmp;
});

Clazz.newMeth(C$, 'drawTextS$java_awt_geom_Point2D_Double$S', function (p, txt) {
var tmp="";
tmp += p$1.PSMoveTo$D$D.apply(this, [p.x, p.y]);
tmp += ("" + (new Double(this._fontsize / 2.0 + 1).toString()) + " \n" );
tmp += p$1.PSText$S.apply(this, [txt]);
tmp += (" txtcenter\n");
return tmp;
});

Clazz.newMeth(C$, 'drawRectangleS$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D', function (orig, dims, thickness) {
var tmp=p$1.PSNewPath.apply(this, []);
tmp += p$1.PSMoveTo$D$D.apply(this, [orig.x, orig.y]);
tmp += p$1.PSRLineTo$D$D.apply(this, [0, dims.y]);
tmp += p$1.PSRLineTo$D$D.apply(this, [dims.x, 0]);
tmp += p$1.PSRLineTo$D$D.apply(this, [0, -dims.y]);
tmp += p$1.PSClosePath.apply(this, []);
tmp += p$1.PSSetLineWidth$D.apply(this, [thickness]);
tmp += p$1.PSStroke.apply(this, []);
return tmp;
});

Clazz.newMeth(C$, 'drawCircleS$java_awt_geom_Point2D_Double$D$D', function (p, radius, thickness) {
var tmp=p$1.PSNewPath.apply(this, []);
tmp += p$1.PSArc$D$D$D$D$D.apply(this, [p.x, p.y, radius, 0, 360]);
tmp += p$1.PSSetLineWidth$D.apply(this, [thickness]);
tmp += p$1.PSStroke.apply(this, []);
return tmp;
});

Clazz.newMeth(C$, 'fillCircleS$java_awt_geom_Point2D_Double$D$D$java_awt_Color', function (p, radius, thickness, color) {
var tmp=p$1.PSNewPath.apply(this, []);
tmp += p$1.PSArc$D$D$D$D$D.apply(this, [p.x, p.y, radius, 0, 360]);
tmp += p$1.PSSetLineWidth$D.apply(this, [thickness]);
tmp += p$1.PSSetColor$java_awt_Color.apply(this, [color]);
tmp += p$1.PSFill.apply(this, []);
return tmp;
});

Clazz.newMeth(C$, 'footerS$', function () {
return p$1.EPSFooter.apply(this, []);
});

Clazz.newMeth(C$, 'headerS$java_awt_geom_Rectangle2D_Double', function (bb) {
return p$1.EPSHeader$D$D$D$D.apply(this, [bb.x, bb.y, bb.x + bb.width, bb.y + bb.height]);
});

Clazz.newMeth(C$, 'drawArcS$java_awt_geom_Point2D_Double$D$D$D$D', function (origine, width, height, startAngle, endAngle) {
return p$1.PSArc$D$D$D$D$D$D.apply(this, [origine.x, origine.y, width, height, startAngle, endAngle]) + p$1.PSStroke.apply(this, []);
});

Clazz.newMeth(C$, 'drawPolygonS$java_awt_geom_Point2D_DoubleA$D', function (points, thickness) {
var tmp=p$1.PSNewPath.apply(this, []);
tmp += p$1.PSSetLineWidth$D.apply(this, [thickness]);
for (var i=0; i < points.length; i++) {
if (i == 0) {
tmp += p$1.PSMoveTo$D$D.apply(this, [points[i].x, points[i].y]);
} else {
tmp += p$1.PSLineTo$D$D.apply(this, [points[i].x, points[i].y]);
}}
tmp += p$1.PSClosePath.apply(this, []);
tmp += p$1.PSStroke.apply(this, []);
return tmp;
});

Clazz.newMeth(C$, 'fillPolygonS$java_awt_geom_Point2D_DoubleA$java_awt_Color', function (points, color) {
var bck=this._curColor;
var tmp=p$1.PSNewPath.apply(this, []);
for (var i=0; i < points.length; i++) {
if (i == 0) {
tmp += p$1.PSMoveTo$D$D.apply(this, [points[i].x, points[i].y]);
} else {
tmp += p$1.PSLineTo$D$D.apply(this, [points[i].x, points[i].y]);
}}
tmp += p$1.PSClosePath.apply(this, []);
tmp += p$1.PSSetColor$java_awt_Color.apply(this, [color]);
tmp += p$1.PSFill.apply(this, []);
tmp += p$1.PSSetColor$java_awt_Color.apply(this, [bck]);
return tmp;
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
