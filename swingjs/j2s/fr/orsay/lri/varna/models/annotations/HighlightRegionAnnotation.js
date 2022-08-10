(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.annotations"),p$1={},I$=[[0,'java.awt.Color','org.xml.sax.helpers.AttributesImpl','fr.orsay.lri.varna.utils.XMLUtils','java.util.ArrayList',['java.awt.geom.Point2D','.Double'],'java.util.LinkedList','java.awt.geom.GeneralPath','fr.orsay.lri.varna.models.VARNAConfigLoader']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HighlightRegionAnnotation", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._outlineColor=C$.DEFAULT_OUTLINE_COLOR;
this._fillColor=C$.DEFAULT_FILL_COLOR;
this._radius=16.0;
},1);

C$.$fields$=[['D',['_radius'],'O',['+_outlineColor','+_fillColor','_bases','java.util.ArrayList']]
,['S',['XML_ELEMENT_NAME','XML_VAR_OUTLINE_NAME','XML_VAR_FILL_NAME','XML_VAR_RADIUS_NAME'],'O',['DEFAULT_OUTLINE_COLOR','java.awt.Color','+DEFAULT_FILL_COLOR']]]

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(2,1));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_OUTLINE_NAME, "CDATA", "" + $I$(3).toHTMLNotation$java_awt_Color(this._outlineColor));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_FILL_NAME, "CDATA", "" + $I$(3).toHTMLNotation$java_awt_Color(this._fillColor));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_RADIUS_NAME, "CDATA", "" + new Double(this._radius).toString());
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
$I$(3).toXML$javax_xml_transform_sax_TransformerHandler$java_util_ArrayList(hd, this._bases);
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA$I$I', function (r, startIndex, stopIndex) {
C$.c$$java_util_ArrayList.apply(this, [r.getBasesBetween$I$I(startIndex, stopIndex)]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_ArrayList.apply(this, [Clazz.new_($I$(4,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayList', function (b) {
C$.c$$java_util_ArrayList$java_awt_Color$java_awt_Color$D.apply(this, [b, C$.DEFAULT_FILL_COLOR, C$.DEFAULT_OUTLINE_COLOR, 16.0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_ArrayList$java_awt_Color$java_awt_Color$D', function (b, fill, outline, radius) {
;C$.$init$.apply(this);
this._bases=b;
this._fillColor=fill;
this._outlineColor=outline;
this._radius=radius;
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
return Clazz.new_(C$.c$$java_util_ArrayList$java_awt_Color$java_awt_Color$D,[this._bases, this._fillColor, this._outlineColor, this._radius]);
});

Clazz.newMeth(C$, 'getMinIndex$', function () {
var min=2147483647;
for (var mb, $mb = this._bases.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
min=Math.min(min, mb.getIndex$());
}
return min;
});

Clazz.newMeth(C$, 'getMaxIndex$', function () {
var max=-2147483648;
for (var mb, $mb = this._bases.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
max=Math.max(max, mb.getIndex$());
}
return max;
});

Clazz.newMeth(C$, 'setOutlineColor$java_awt_Color', function (c) {
this._outlineColor=c;
});

Clazz.newMeth(C$, 'getBases$', function () {
return this._bases;
});

Clazz.newMeth(C$, 'setBases$java_util_ArrayList', function (b) {
this._bases=b;
});

Clazz.newMeth(C$, 'setFillColor$java_awt_Color', function (c) {
this._fillColor=c;
});

Clazz.newMeth(C$, 'getFillColor$', function () {
return this._fillColor;
});

Clazz.newMeth(C$, 'getOutlineColor$', function () {
return this._outlineColor;
});

Clazz.newMeth(C$, 'getRadius$', function () {
return this._radius;
});

Clazz.newMeth(C$, 'setRadius$D', function (v) {
this._radius=v;
});

Clazz.newMeth(C$, 'symImage$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (p, center) {
return Clazz.new_($I$(5,1).c$$D$D,[2.0 * center.x - p.x, 2.0 * center.y - p.y]);
}, p$1);

Clazz.newMeth(C$, 'buildRoundedCorner$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (p1, p2, anotherPoint) {
var result=Clazz.new_($I$(6,1));
var m=Clazz.new_([(p1.x + p2.x) / 2.0, (p1.y + p2.y) / 2.0],$I$(5,1).c$$D$D);
var rad=p1.distance$java_awt_geom_Point2D(p2) / 2.0;
var angle=Math.atan2(p1.y - m.y, p1.x - m.x);
var incr=0.18479956785822313;
var pdir=Clazz.new_([m.x + rad * Math.cos(angle + 1.5707963267948966), m.y + rad * Math.sin(angle + 1.5707963267948966)],$I$(5,1).c$$D$D);
if (pdir.distance$java_awt_geom_Point2D(anotherPoint) < p1.distance$java_awt_geom_Point2D(anotherPoint) ) {
incr=-incr;
}for (var k=1; k <= 16; k++) {
var angle2=angle + k * incr;
var interForward=Clazz.new_([m.x + rad * Math.cos(angle2), m.y + rad * Math.sin(angle2)],$I$(5,1).c$$D$D);
result.addLast$O(interForward);
}
return result;
}, p$1);

Clazz.newMeth(C$, 'getShape$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$D', function (realCoords, realCenters, scaleFactor) {
var p=Clazz.new_($I$(7,1));
var pointList=Clazz.new_($I$(6,1));
for (var i=0; i < this.getBases$().size$(); i++) {
var j1=this.getBases$().get$I(i).getIndex$();
{
var j0=j1 - 1;
var j2=j1 + 1;
var p0=Clazz.new_($I$(5,1).c$$D$D,[0.0, 0.0]);
var p1=Clazz.new_($I$(5,1).c$$D$D,[0.0, 0.0]);
var p2=Clazz.new_($I$(5,1).c$$D$D,[0.0, 0.0]);
if (i == 0) {
if (i == this.getBases$().size$() - 1) {
p1=realCoords[j1];
p0=Clazz.new_([p1.x + scaleFactor * this.getRadius$(), p1.y],$I$(5,1).c$$D$D);
p2=Clazz.new_([p1.x - scaleFactor * this.getRadius$(), p1.y],$I$(5,1).c$$D$D);
} else {
p1=realCoords[j1];
p2=realCoords[j2];
p0=p$1.symImage$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [p2, p1]);
}} else if (i == this.getBases$().size$() - 1) {
p0=realCoords[j0];
p1=realCoords[j1];
p2=p$1.symImage$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [p0, p1]);
;} else {
p0=realCoords[j0];
p1=realCoords[j1];
p2=realCoords[j2];
}var dist1=p2.distance$java_awt_geom_Point2D(p1);
var v1=Clazz.new_([(p2.x - p1.x) / dist1, (p2.y - p1.y) / dist1],$I$(5,1).c$$D$D);
var vn1=Clazz.new_($I$(5,1).c$$D$D,[v1.y, -v1.x]);
var dist2=p1.distance$java_awt_geom_Point2D(p0);
var v2=Clazz.new_([(p1.x - p0.x) / dist2, (p1.y - p0.y) / dist2],$I$(5,1).c$$D$D);
var vn2=Clazz.new_($I$(5,1).c$$D$D,[v2.y, -v2.x]);
var h=(Clazz.new_($I$(5,1).c$$D$D,[vn2.x - vn1.x, vn2.y - vn1.y]).distance$java_awt_geom_Point2D(Clazz.new_($I$(5,1).c$$D$D,[0, 0])) / 2.0);
var vn=Clazz.new_([(vn1.x + vn2.x) / 2.0, (vn1.y + vn2.y) / 2.0],$I$(5,1).c$$D$D);
var D=vn.distance$java_awt_geom_Point2D(Clazz.new_($I$(5,1).c$$D$D,[0.0, 0.0]));
vn.x /= D;
vn.y /= D;
var nnorm=(D + h * h / D);
var nnormF=nnorm;
var nnormB=nnorm;
var interForward=Clazz.new_([p1.x + nnormF * scaleFactor * this.getRadius$() * vn.x , p1.y + nnormF * scaleFactor * this.getRadius$() * vn.y ],$I$(5,1).c$$D$D);
var interBackward=Clazz.new_([p1.x - nnormB * scaleFactor * this.getRadius$() * vn.x , p1.y - nnormB * scaleFactor * this.getRadius$() * vn.y ],$I$(5,1).c$$D$D);
if (pointList.size$() > 0) {
var prev1=pointList.getLast$();
var prev2=pointList.getFirst$();
if ((interForward.distance$java_awt_geom_Point2D(prev1) + interBackward.distance$java_awt_geom_Point2D(prev2)) < (interForward.distance$java_awt_geom_Point2D(prev2) + interBackward.distance$java_awt_geom_Point2D(prev1)) ) {
pointList.addLast$O(interForward);
pointList.addFirst$O(interBackward);
} else {
pointList.addFirst$O(interForward);
pointList.addLast$O(interBackward);
}} else {
pointList.addLast$O(interForward);
pointList.addFirst$O(interBackward);
}}}
if (this.getBases$().size$() == 1) {
var midl=(pointList.size$()/2|0);
var mid=pointList.get$I(midl);
var apoint=Clazz.new_($I$(5,1).c$$D$D,[mid.x + 1.0, mid.y]);
var pointListStart=p$1.buildRoundedCorner$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [pointList.get$I(midl - 1), pointList.get$I(midl), apoint]);
pointList.addAll$I$java_util_Collection(midl, pointListStart);
mid=pointList.get$I(midl);
apoint=Clazz.new_($I$(5,1).c$$D$D,[mid.x + 1.0, mid.y]);
var pointListEnd=p$1.buildRoundedCorner$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [pointList.get$I(pointList.size$() - 1), pointList.get$I(0), apoint]);
pointList.addAll$I$java_util_Collection(0, pointListEnd);
} else if (this.getBases$().size$() > 1) {
var midl=(pointList.size$()/2|0);
var apoint=p$1.symImage$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [pointList.get$I(midl), pointList.get$I(midl - 1)]);
var pointListStart=p$1.buildRoundedCorner$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [pointList.get$I(midl - 1), pointList.get$I(midl), apoint]);
pointList.addAll$I$java_util_Collection(midl, pointListStart);
apoint=p$1.symImage$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [realCoords[this.getBases$().get$I(this.getBases$().size$() - 1).getIndex$()], realCoords[this.getBases$().get$I(this.getBases$().size$() - 2).getIndex$()]]);
var pointListEnd=p$1.buildRoundedCorner$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [pointList.get$I(pointList.size$() - 1), pointList.get$I(0), apoint]);
pointList.addAll$I$java_util_Collection(0, pointListEnd);
}if (pointList.size$() > 0) {
var point=pointList.get$I(0);
p.moveTo$F$F(point.x, point.y);
for (var i=1; i < pointList.size$(); i++) {
point=pointList.get$I(i);
p.lineTo$F$F(point.x, point.y);
}
p.closePath$();
}return p;
});

Clazz.newMeth(C$, 'parseHighlightRegionAnnotation$S$fr_orsay_lri_varna_VARNAPanel', function (txt, vp) {
try {
var parts=txt.split$S(":");
var coords=parts[0].split$S("-");
var from=Integer.parseInt$S(coords[0]);
var to=Integer.parseInt$S(coords[1]);
var i=vp.getRNA$().getIndexFromBaseNumber$I(from);
var j=vp.getRNA$().getIndexFromBaseNumber$I(to);
var fill=C$.DEFAULT_FILL_COLOR;
var outline=C$.DEFAULT_OUTLINE_COLOR;
var radius=16.0;
var bases=vp.getRNA$().getBasesBetween$I$I(i, j);
if (parts.length > 1) {
try {
var options=parts[1].split$S(",");
for (var k=0; k < options.length; k++) {
try {
var data=options[k].split$S("=");
var lhs=data[0].toLowerCase$();
var rhs=data[1];
if (lhs.equals$O("fill")) {
fill=$I$(8).getSafeColor$S$java_awt_Color(rhs, fill);
} else if (lhs.equals$O("outline")) {
outline=$I$(8).getSafeColor$S$java_awt_Color(rhs, outline);
} else if (lhs.equals$O("radius")) {
radius=Double.parseDouble$S(rhs);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}return Clazz.new_(C$.c$$java_util_ArrayList$java_awt_Color$java_awt_Color$D,[bases, fill, outline, radius]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var result="Highlighted region " + this.getMinIndex$() + "-" + this.getMaxIndex$() ;
return result;
});

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_OUTLINE_COLOR=$I$(1).decode$S("#6ed86e");
C$.DEFAULT_FILL_COLOR=$I$(1).decode$S("#bcffdd");
C$.XML_ELEMENT_NAME="region";
C$.XML_VAR_OUTLINE_NAME="outline";
C$.XML_VAR_FILL_NAME="fill";
C$.XML_VAR_RADIUS_NAME="radius";
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
