(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.annotations"),p$1={},I$=[[0,'java.awt.Color','java.awt.Font','org.xml.sax.helpers.AttributesImpl','fr.orsay.lri.varna.utils.XMLUtils',['fr.orsay.lri.varna.models.annotations.TextAnnotation','.AnchorType'],'fr.orsay.lri.varna.models.rna.VARNAPoint','java.text.DecimalFormat',['java.awt.geom.Point2D','.Double'],'java.util.Collections','fr.orsay.lri.varna.models.VARNAConfigLoader','java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextAnnotation", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['AnchorType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['_angle'],'S',['_text'],'O',['_typeAnchor','fr.orsay.lri.varna.models.annotations.TextAnnotation.AnchorType','_color','java.awt.Color','_anchor','java.lang.Object','_font','java.awt.Font']]
,['S',['XML_ELEMENT_NAME','XML_VAR_TYPE_NAME','XML_VAR_COLOR_NAME','XML_VAR_ANGLE_NAME','XML_VAR_TEXT_NAME'],'O',['DEFAULTCOLOR','java.awt.Color','DEFAULTFONT','java.awt.Font']]]

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(3,1));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_TYPE_NAME, "CDATA", "" + this._typeAnchor);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_COLOR_NAME, "CDATA", "" + $I$(4).toHTMLNotation$java_awt_Color(this._color));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_ANGLE_NAME, "CDATA", "" + new Double(this._angle).toString());
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
atts.clear$();
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_VAR_TEXT_NAME, atts);
$I$(4).exportCDATAString$javax_xml_transform_sax_TransformerHandler$S(hd, this._text);
hd.endElement$S$S$S("", "", C$.XML_VAR_TEXT_NAME);
switch (this._typeAnchor) {
case $I$(5).POSITION:
(this._anchor).toXML$javax_xml_transform_sax_TransformerHandler$S(hd, "pos");
break;
case $I$(5).BASE:
$I$(4).toXML$javax_xml_transform_sax_TransformerHandler$fr_orsay_lri_varna_models_rna_ModeleBase(hd, this._anchor);
break;
case $I$(5).HELIX:
$I$(4).toXML$javax_xml_transform_sax_TransformerHandler$java_util_ArrayList(hd, this._anchor);
break;
case $I$(5).LOOP:
$I$(4).toXML$javax_xml_transform_sax_TransformerHandler$java_util_ArrayList(hd, this._anchor);
break;
}
$I$(4).toXML$javax_xml_transform_sax_TransformerHandler$java_awt_Font(hd, this._font);
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'c$$S', function (texte) {
;C$.$init$.apply(this);
this._text=texte;
this._color=C$.DEFAULTCOLOR;
this._font=C$.DEFAULTFONT;
this._angle=0;
}, 1);

Clazz.newMeth(C$, 'c$$S$D$D', function (texte, x, y) {
C$.c$$S.apply(this, [texte]);
this._anchor=Clazz.new_($I$(6,1).c$$D$D,[x, y]);
this._typeAnchor=$I$(5).POSITION;
}, 1);

Clazz.newMeth(C$, 'c$$S$fr_orsay_lri_varna_models_rna_ModeleBase', function (texte, mb) {
C$.c$$S.apply(this, [texte]);
this._anchor=mb;
this._typeAnchor=$I$(5).BASE;
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType', function (texte, listeBase, type) {
C$.c$$S.apply(this, [texte]);
this._anchor=listeBase;
if (type === $I$(5).HELIX ) this._typeAnchor=$I$(5).HELIX;
 else if (type === $I$(5).LOOP ) this._typeAnchor=$I$(5).LOOP;
 else throw Clazz.new_(Clazz.load('Exception').c$$S,["Bad argument"]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_annotations_TextAnnotation', function (textAnnotation) {
;C$.$init$.apply(this);
this._anchor=textAnnotation.getAncrage$();
this._font=textAnnotation.getFont$();
this._text=textAnnotation.getTexte$();
this._typeAnchor=textAnnotation.getType$();
}, 1);

Clazz.newMeth(C$, 'getTexte$', function () {
return this._text;
});

Clazz.newMeth(C$, 'setText$S', function (_texte) {
this._text=_texte;
});

Clazz.newMeth(C$, 'getFont$', function () {
return this._font;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font', function (_font) {
this._font=_font;
});

Clazz.newMeth(C$, 'getAncrage$', function () {
return this._anchor;
});

Clazz.newMeth(C$, 'setAncrage$fr_orsay_lri_varna_models_rna_ModeleBase', function (mb) {
this._anchor=mb;
this._typeAnchor=$I$(5).BASE;
});

Clazz.newMeth(C$, 'setAncrage$D$D', function (x, y) {
this._anchor=Clazz.new_($I$(6,1).c$$D$D,[x, y]);
this._typeAnchor=$I$(5).POSITION;
});

Clazz.newMeth(C$, 'setAncrage$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType', function (list, type) {
this._anchor=list;
if (type === $I$(5).HELIX ) this._typeAnchor=$I$(5).HELIX;
 else if (type === $I$(5).LOOP ) this._typeAnchor=$I$(5).LOOP;
 else throw Clazz.new_(Clazz.load('Exception').c$$S,["Bad argument"]);
});

Clazz.newMeth(C$, 'getType$', function () {
return this._typeAnchor;
});

Clazz.newMeth(C$, 'setType$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType', function (t) {
this._typeAnchor=t;
});

Clazz.newMeth(C$, 'getColor$', function () {
return this._color;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color', function (color) {
this._color=color;
});

Clazz.newMeth(C$, 'getHelixDescription$', function () {
var listeBase=(this._anchor);
var minA=2147483647;
var maxA=-2147483648;
var minB=2147483647;
var maxB=-2147483648;
for (var mb, $mb = listeBase.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
var i=mb.getBaseNumber$();
if (mb.getElementStructure$() > i) {
minA=Math.min(minA, i);
maxA=Math.max(maxA, i);
} else {
minB=Math.min(minB, i);
maxB=Math.max(maxB, i);
}}
return "[" + minA + "," + maxA + "] [" + minB + "," + maxB + "]" ;
});

Clazz.newMeth(C$, 'getLoopDescription$', function () {
var listeBase=(this._anchor);
var min=2147483647;
var max=-2147483648;
for (var mb, $mb = listeBase.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
var i=mb.getBaseNumber$();
min=Math.min(min, i);
max=Math.max(max, i);
}
return "[" + min + "," + max + "]" ;
});

Clazz.newMeth(C$, 'toString', function () {
var tmp="[" + this._text + "] " ;
switch (this._typeAnchor) {
case $I$(5).POSITION:
var formatter=Clazz.new_($I$(7,1).c$$S,[".00"]);
return tmp + " at (" + formatter.format$D(this.getCenterPosition$().x) + "," + formatter.format$D(this.getCenterPosition$().y) + ")" ;
case $I$(5).BASE:
return tmp + " on base " + (this._anchor).getBaseNumber$() ;
case $I$(5).HELIX:
return tmp + " on helix " + this.getHelixDescription$() ;
case $I$(5).LOOP:
return tmp + " on loop " + this.getLoopDescription$() ;
default:
return tmp;
}
});

Clazz.newMeth(C$, 'getCenterPosition$', function () {
switch (this._typeAnchor) {
case $I$(5).POSITION:
return (this._anchor).toPoint2D$();
case $I$(5).BASE:
return (this._anchor).getCoords$();
case $I$(5).HELIX:
return p$1.calculLoopHelix.apply(this, []);
case $I$(5).LOOP:
return p$1.calculLoop.apply(this, []);
default:
return Clazz.new_($I$(8,1).c$$D$D,[0.0, 0.0]);
}
});

Clazz.newMeth(C$, 'calculLoop', function () {
var liste=p$1.extractedArrayListModeleBaseFromAncrage.apply(this, []);
var totalX=0.0;
var totalY=0.0;
for (var base, $base = liste.iterator$(); $base.hasNext$()&&((base=($base.next$())),1);) {
totalX += base.getCoords$().x;
totalY += base.getCoords$().y;
}
return Clazz.new_([totalX / liste.size$(), totalY / liste.size$()],$I$(8,1).c$$D$D);
}, p$1);

Clazz.newMeth(C$, 'calculLoopHelix', function () {
var liste=p$1.extractedArrayListModeleBaseFromAncrage.apply(this, []);
$I$(9).sort$java_util_List(liste);
var totalX=0.0;
var totalY=0.0;
var num=0.0;
for (var i=0; i < liste.size$(); i++) {
var base=liste.get$I(i);
if ((i > 0 && (i < liste.size$() - 1) ) || (((liste.size$()/2|0)) % 2 == 0) ) {
totalX += base.getCoords$().x;
totalY += base.getCoords$().y;
num += 1;
}}
return Clazz.new_($I$(8,1).c$$D$D,[totalX / num, totalY / num]);
}, p$1);

Clazz.newMeth(C$, 'extractedArrayListModeleBaseFromAncrage', function () {
return this._anchor;
}, p$1);

Clazz.newMeth(C$, 'clone$', function () {
var textAnnot=null;
try {
switch (this._typeAnchor) {
case $I$(5).BASE:
textAnnot=Clazz.new_(C$.c$$S$fr_orsay_lri_varna_models_rna_ModeleBase,[this._text, this._anchor]);
break;
case $I$(5).POSITION:
textAnnot=Clazz.new_(C$.c$$S$D$D,[this._text, (this._anchor).x, (this._anchor).y]);
break;
case $I$(5).LOOP:
textAnnot=Clazz.new_(C$.c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType,[this._text, p$1.extractedArrayListModeleBaseFromAncrage.apply(this, []), $I$(5).LOOP]);
break;
case $I$(5).HELIX:
textAnnot=Clazz.new_(C$.c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType,[this._text, p$1.extractedArrayListModeleBaseFromAncrage.apply(this, []), $I$(5).HELIX]);
break;
default:
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
textAnnot.setFont$java_awt_Font(this._font);
textAnnot.setColor$java_awt_Color(this._color);
return textAnnot;
});

Clazz.newMeth(C$, 'copy$fr_orsay_lri_varna_models_annotations_TextAnnotation', function (textAnnotation) {
this._anchor=textAnnotation.getAncrage$();
this._font=textAnnotation.getFont$();
this._text=textAnnotation.getTexte$();
this._typeAnchor=textAnnotation.getType$();
this._color=textAnnotation.getColor$();
this._angle=textAnnotation.getAngleInDegres$();
});

Clazz.newMeth(C$, 'getAngleInDegres$', function () {
return this._angle;
});

Clazz.newMeth(C$, 'getAngleInRadians$', function () {
return (this.getAngleInDegres$() * 3.141592653589793) / 180.0;
});

Clazz.newMeth(C$, 'setAngleInDegres$D', function (_angle) {
this._angle=_angle;
});

Clazz.newMeth(C$, 'setAngleInRadians$D', function (_angle) {
this._angle=_angle * 180 / 3.141592653589793;
});

Clazz.newMeth(C$, 'parse$S$fr_orsay_lri_varna_VARNAPanel', function (thisAnn, vp) {
var data=thisAnn.split$S(":");
var text="";
var anchor=-1;
var x=-1;
var y=-1;
var type=$I$(5).LOOP;
var font=C$.DEFAULTFONT;
var color=C$.DEFAULTCOLOR;
var ann=null;
try {
if (data.length == 2) {
text=data[0];
var data2=data[1].split$S(",");
for (var j=0; j < data2.length; j++) {
var opt=data2[j];
var data3=opt.split$S("=");
if (data3.length == 2) {
var name=data3[0].toLowerCase$();
var value=data3[1];
if (name.equals$O("type")) {
if (value.toUpperCase$().equals$O("H")) {
type=$I$(5).HELIX;
} else if (value.toUpperCase$().equals$O("L")) {
type=$I$(5).LOOP;
} else if (value.toUpperCase$().equals$O("P")) {
type=$I$(5).POSITION;
} else if (value.toUpperCase$().equals$O("B")) {
type=$I$(5).BASE;
}} else if (name.equals$O("x")) {
x=Integer.parseInt$S(value);
} else if (name.equals$O("y")) {
y=Integer.parseInt$S(value);
} else if (name.equals$O("anchor")) {
anchor=Integer.parseInt$S(value);
} else if (name.equals$O("size")) {
font=font.deriveFont$F(Integer.parseInt$S(value));
} else if (name.equals$O("color")) {
color=$I$(10).getSafeColor$S$java_awt_Color(value, color);
}}}
switch (type) {
case $I$(5).POSITION:
if ((x != -1) && (y != -1) ) {
var p=vp.panelToLogicPoint$java_awt_geom_Point2D_Double(Clazz.new_($I$(8,1).c$$D$D,[x, y]));
ann=Clazz.new_(C$.c$$S$D$D,[text, p.x, p.y]);
}break;
case $I$(5).BASE:
if (anchor != -1) {
var index=vp.getRNA$().getIndexFromBaseNumber$I(anchor);
var mb=vp.getRNA$().get_listeBases$().get$I(index);
ann=Clazz.new_(C$.c$$S$fr_orsay_lri_varna_models_rna_ModeleBase,[text, mb]);
}break;
case $I$(5).HELIX:
if (anchor != -1) {
var mbl=Clazz.new_($I$(11,1));
var index=vp.getRNA$().getIndexFromBaseNumber$I(anchor);
var il=vp.getRNA$().findHelix$I(index);
for (var k, $k = il.iterator$(); $k.hasNext$()&&((k=($k.next$()).intValue$()),1);) {
mbl.add$O(vp.getRNA$().get_listeBases$().get$I(k));
}
ann=Clazz.new_(C$.c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType,[text, mbl, type]);
}break;
case $I$(5).LOOP:
if (anchor != -1) {
var mbl=Clazz.new_($I$(11,1));
var index=vp.getRNA$().getIndexFromBaseNumber$I(anchor);
var il=vp.getRNA$().findLoop$I(index);
for (var k, $k = il.iterator$(); $k.hasNext$()&&((k=($k.next$()).intValue$()),1);) {
mbl.add$O(vp.getRNA$().get_listeBases$().get$I(k));
}
ann=Clazz.new_(C$.c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType,[text, mbl, type]);
}break;
}
if (ann != null ) {
ann.setColor$java_awt_Color(color);
ann.setFont$java_awt_Font(font);
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Apply Annotations: " + e.toString());
} else {
throw e;
}
}
return ann;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DEFAULTCOLOR=$I$(1).black;
C$.DEFAULTFONT=Clazz.new_($I$(2,1).c$$S$I$I,["Arial", 0, 12]);
C$.XML_ELEMENT_NAME="textAnnotation";
C$.XML_VAR_TYPE_NAME="type";
C$.XML_VAR_COLOR_NAME="color";
C$.XML_VAR_ANGLE_NAME="angle";
C$.XML_VAR_TEXT_NAME="text";
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.TextAnnotation, "AnchorType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "POSITION", 0, []);
Clazz.newEnumConst($vals, C$.c$, "BASE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "HELIX", 2, []);
Clazz.newEnumConst($vals, C$.c$, "LOOP", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
