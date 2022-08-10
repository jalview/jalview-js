(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),p$1={},I$=[[0,'StringBuffer','java.util.Hashtable']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XFIGExport", null, 'fr.orsay.lri.varna.models.export.SecStrDrawingProducer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$_font=0;
this.buf=Clazz.new_($I$(1,1));
this._definedCols=Clazz.new_($I$(2,1));
this._nextColCode=32;
},1);

C$.$fields$=[['I',['$_font','_nextColCode'],'O',['buf','StringBuffer','_definedCols','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
C$.superclazz.prototype.setScale$D.apply(this, [20.0]);
}, 1);

Clazz.newMeth(C$, 'ensureColorDefinition$java_awt_Color', function (col) {
if (!this._definedCols.containsKey$O(col)) {
if (this._nextColCode < 543) {
var curColorCode=this._nextColCode;
this._definedCols.put$O$O(col, new Integer(curColorCode));
this._nextColCode++;
var RGBR=Integer.toHexString$I(col.getRed$());
if (RGBR.length$() < 2) {
RGBR="0" + RGBR;
}var RGBG=Integer.toHexString$I(col.getGreen$());
if (RGBG.length$() < 2) {
RGBG="0" + RGBG;
}var RGBB=Integer.toHexString$I(col.getBlue$());
if (RGBB.length$() < 2) {
RGBB="0" + RGBB;
}var RGBHex="#" + RGBR + RGBG + RGBB ;
RGBHex=RGBHex.toUpperCase$();
return "0 " + curColorCode + " " + RGBHex + "\n" ;
}}return "";
}, p$1);

Clazz.newMeth(C$, 'getColorCode$java_awt_Color', function (col) {
if (this._definedCols.containsKey$O(col)) {
return (this._definedCols.get$O(col)).valueOf();
}return 0;
}, p$1);

Clazz.newMeth(C$, 'getCurColorCode', function () {
if (this._definedCols.containsKey$O(this._curColor)) {
return (this._definedCols.get$O(this._curColor)).valueOf();
}return 0;
}, p$1);

Clazz.newMeth(C$, 'XFIGHeader', function () {
return "#FIG 3.2\nLandscape\nCenter\nInches\nLetter  \n100.00\nSingle\n-2\n1200 2\n";
}, p$1);

Clazz.newMeth(C$, 'drawCircleS$java_awt_geom_Point2D_Double$D$D', function (p, radius, thickness) {
return ("1 3 0 " + (thickness|0) + " " + p$1.getCurColorCode.apply(this, []) + " 7 50 -1 -1 0.000 1 0.0000 " + (p.x|0) + " " + (-p.y|0) + " " + (radius|0) + " " + (radius|0) + " 1 1 1 1\n" );
});

Clazz.newMeth(C$, 'drawLineS$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D', function (p0, p1, thickness) {
return ("2 1 0 " + (thickness|0) + " " + p$1.getCurColorCode.apply(this, []) + " 7 60 -1 -1 0.000 0 0 -1 0 0 2\n" + " " + (p0.x|0) + " " + (-p0.y|0) + " " + (p1.x|0) + " " + (-p1.y|0) + "\n" );
});

Clazz.newMeth(C$, 'drawRectangleS$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D', function (p, dims, thickness) {
return ("2 2 0 " + (thickness|0) + " " + p$1.getCurColorCode.apply(this, []) + " 7 50 -1 -1 0.000 0 0 -1 0 0 5\n" + "\t " + ((p.x)|0) + " " + ((-p.y)|0) + " " + ((p.x + dims.x)|0) + " " + ((-p.y)|0) + " " + ((p.x + dims.x)|0) + " " + (-(p.y + dims.y)|0) + " " + ((p.x)|0) + " " + (-(p.y + dims.y)|0) + " " + ((p.x)|0) + " " + (-(p.y)|0) + "\n" );
});

Clazz.newMeth(C$, 'drawTextS$java_awt_geom_Point2D_Double$S', function (p, txt) {
return ("4 1 " + p$1.getCurColorCode.apply(this, []) + " 40 -1 " + this.$_font + " " + (this._fontsize|0) + " 0.0000 6 " + new Double(4 * this._fontsize).toString()  + " " + ((2 * this._fontsize)|0) + " " + ((p.x)|0) + " " + (-(p.y - 6 * this._fontsize)|0) + " " + txt + "\\u0001\n");
});

Clazz.newMeth(C$, 'fillCircleS$java_awt_geom_Point2D_Double$D$D$java_awt_Color', function (p, radius, thickness, col) {
var coldef=p$1.ensureColorDefinition$java_awt_Color.apply(this, [col]);
return (coldef + "1 3 0 " + (thickness|0) + " 0 " + p$1.getColorCode$java_awt_Color.apply(this, [col]) + " 50 0 20 0.000 1 0.0000 " + (p.x|0) + " " + (-p.y|0) + " " + (radius|0) + " " + (radius|0) + " 1 1 1 1\n" );
});

Clazz.newMeth(C$, 'setFontS$I$D', function (font, size) {
this.$_font=font;
this._fontsize=1.2 * size;
return "";
});

Clazz.newMeth(C$, 'setColorS$java_awt_Color', function (col) {
C$.superclazz.prototype.setColorS$java_awt_Color.apply(this, [col]);
return (p$1.ensureColorDefinition$java_awt_Color.apply(this, [col]));
});

Clazz.newMeth(C$, 'footerS$', function () {
return "";
});

Clazz.newMeth(C$, 'headerS$java_awt_geom_Rectangle2D_Double', function (bb) {
return p$1.XFIGHeader.apply(this, []);
});

Clazz.newMeth(C$, 'drawArcS$java_awt_geom_Point2D_Double$D$D$D$D', function (origine, width, height, startAngle, endAngle) {
var p1x=origine.x;
var p1y=-origine.y;
var p2x=origine.x + width / 2.0;
var p2y=-origine.y - height / 2.0;
var p3x=origine.x + width;
var p3y=p1y;
var cx=(p1x + p3x) / 2.0;
var cy=p3y + height / 2.0;
return ("5 1 0 1 " + p$1.getCurColorCode.apply(this, []) + " 7 50 0 -1 4.000 0 0 0 0 " + new Double(cx).toString() + " " + new Double(cy).toString() + " " + (p1x|0) + " " + (p1y|0) + " " + (p2x|0) + " " + (p2y|0) + " " + (p3x|0) + " " + (p3y|0) + "\n" );
});

Clazz.newMeth(C$, 'drawPolygonS$java_awt_geom_Point2D_DoubleA$D', function (points, thickness) {
if (points.length > 0) {
var result="2 3 0 1 " + p$1.getCurColorCode.apply(this, []) + " 7 40 0 -1 4.000 0 0 0 0 0 " + (points.length + 1) + "\n" ;
for (var i=0; i < points.length; i++) {
result += (Math.round(points[i].x)|0) + " " + (Math.round(-points[i].y)|0) + " " ;
}
result += (Math.round(points[0].x)|0) + " " + (Math.round(-points[0].y)|0) + " " ;
result += "\n";
return result;
} else {
return "";
}});

Clazz.newMeth(C$, 'fillPolygonS$java_awt_geom_Point2D_DoubleA$java_awt_Color', function (points, col) {
if (points.length > 0) {
var coldef=p$1.ensureColorDefinition$java_awt_Color.apply(this, [col]);
var result="2 3 0 1 0 " + p$1.getColorCode$java_awt_Color.apply(this, [col]) + " 35 0 0 4.000 0 0 0 0 0 " + (points.length + 1) + "\n" ;
for (var i=0; i < points.length; i++) {
result += (Math.round(points[i].x)|0) + " " + (Math.round(-points[i].y)|0) + " " ;
}
result += (Math.round(points[0].x)|0) + " " + (Math.round(-points[0].y)|0) + " " ;
result += "\n";
return coldef + result;
} else {
return "";
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
