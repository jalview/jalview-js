(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.annotations"),I$=[[0,['fr.orsay.lri.varna.models.annotations.ChemProbAnnotation','.ChemProbAnnotationType'],'java.awt.Color','org.xml.sax.helpers.AttributesImpl','fr.orsay.lri.varna.utils.XMLUtils',['java.awt.geom.Point2D','.Double']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChemProbAnnotation", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['ChemProbAnnotationType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['_outward'],'D',['_intensity'],'O',['_mbfst','fr.orsay.lri.varna.models.rna.ModeleBase','+_mbsnd','_color','java.awt.Color','_type','fr.orsay.lri.varna.models.annotations.ChemProbAnnotation.ChemProbAnnotationType']]
,['D',['DEFAULT_INTENSITY'],'S',['XML_ELEMENT_NAME','XML_VAR_INDEX5_NAME','XML_VAR_INDEX3_NAME','XML_VAR_COLOR_NAME','XML_VAR_INTENSITY_NAME','XML_VAR_TYPE_NAME','XML_VAR_OUTWARD_NAME'],'O',['DEFAULT_TYPE','fr.orsay.lri.varna.models.annotations.ChemProbAnnotation.ChemProbAnnotationType','DEFAULT_COLOR','java.awt.Color']]]

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(3,1));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_INDEX5_NAME, "CDATA", "" + this._mbfst.getIndex$());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_INDEX3_NAME, "CDATA", "" + this._mbsnd.getIndex$());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_COLOR_NAME, "CDATA", $I$(4).toHTMLNotation$java_awt_Color(this._color));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_INTENSITY_NAME, "CDATA", "" + new Double(this._intensity).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_TYPE_NAME, "CDATA", "" + this._type);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_OUTWARD_NAME, "CDATA", "" + this._outward);
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$S', function (mbfst, mbsnd, styleDesc) {
C$.c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase.apply(this, [mbfst, mbsnd]);
this.applyStyle$S(styleDesc);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (mbfst, mbsnd) {
C$.c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType$D.apply(this, [mbfst, mbsnd, C$.DEFAULT_TYPE, C$.DEFAULT_INTENSITY]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$D', function (mbfst, mbsnd, intensity) {
C$.c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType$D.apply(this, [mbfst, mbsnd, C$.DEFAULT_TYPE, intensity]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType', function (mbfst, mbsnd, type) {
C$.c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType$D.apply(this, [mbfst, mbsnd, type, C$.DEFAULT_INTENSITY]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType$D', function (mbfst, mbsnd, type, intensity) {
C$.c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType$D$java_awt_Color$Z.apply(this, [mbfst, mbsnd, type, intensity, C$.DEFAULT_COLOR, true]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType$D$java_awt_Color$Z', function (mbfst, mbsnd, type, intensity, color, out) {
;C$.$init$.apply(this);
if (mbfst.getIndex$() > mbsnd.getIndex$()) {
var tmp=mbsnd;
mbsnd=mbfst;
mbfst=tmp;
}this._mbfst=mbfst;
this._mbsnd=mbsnd;
this._type=type;
this._intensity=intensity;
this._color=color;
this._outward=out;
}, 1);

Clazz.newMeth(C$, 'isOut$', function () {
return this._outward;
});

Clazz.newMeth(C$, 'setOut$Z', function (b) {
this._outward=b;
});

Clazz.newMeth(C$, 'getColor$', function () {
return this._color;
});

Clazz.newMeth(C$, 'getIntensity$', function () {
return this._intensity;
});

Clazz.newMeth(C$, 'getType$', function () {
return this._type;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color', function (c) {
this._color=c;
});

Clazz.newMeth(C$, 'setIntensity$D', function (d) {
this._intensity=d;
});

Clazz.newMeth(C$, 'getAnchorPosition$', function () {
var result=Clazz.new_([(this._mbfst.getCoords$().x + this._mbsnd.getCoords$().x) / 2.0, (this._mbfst.getCoords$().y + this._mbsnd.getCoords$().y) / 2.0],$I$(5,1).c$$D$D);
return result;
});

Clazz.newMeth(C$, 'getDirVector$', function () {
var norm=this.getNormalVector$();
var result=Clazz.new_($I$(5,1).c$$D$D,[-norm.y, norm.x]);
var anchor=this.getAnchorPosition$();
var center=Clazz.new_([(this._mbfst.getCenter$().x + this._mbsnd.getCenter$().x) / 2.0, (this._mbfst.getCenter$().y + this._mbsnd.getCenter$().y) / 2.0],$I$(5,1).c$$D$D);
var vradius=Clazz.new_([(center.x - anchor.x) / 2.0, (center.y - anchor.y) / 2.0],$I$(5,1).c$$D$D);
if (this._outward) {
if (result.x * vradius.x + result.y * vradius.y > 0 ) {
return Clazz.new_($I$(5,1).c$$D$D,[-result.x, -result.y]);
}} else {
if (result.x * vradius.x + result.y * vradius.y < 0 ) {
return Clazz.new_($I$(5,1).c$$D$D,[-result.x, -result.y]);
}}return result;
});

Clazz.newMeth(C$, 'getNormalVector$', function () {
var tmp;
if (this._mbfst === this._mbsnd ) {
tmp=Clazz.new_([(-(this._mbsnd.getCenter$().y - this._mbsnd.getCoords$().y)), ((this._mbsnd.getCenter$().x - this._mbsnd.getCoords$().x))],$I$(5,1).c$$D$D);
} else {
tmp=Clazz.new_([(this._mbsnd.getCoords$().x - this._mbfst.getCoords$().x) / 2.0, (this._mbsnd.getCoords$().y - this._mbfst.getCoords$().y) / 2.0],$I$(5,1).c$$D$D);
}var norm=tmp.distance$D$D(0, 0);
var result=Clazz.new_($I$(5,1).c$$D$D,[tmp.x / norm, tmp.y / norm]);
return result;
});

Clazz.newMeth(C$, 'annotTypeFromString$S', function (value) {
if (value.toLowerCase$().equals$O("arrow")) {
return $I$(1).ARROW;
} else if (value.toLowerCase$().equals$O("triangle")) {
return $I$(1).TRIANGLE;
} else if (value.toLowerCase$().equals$O("pin")) {
return $I$(1).PIN;
} else if (value.toLowerCase$().equals$O("dot")) {
return $I$(1).DOT;
} else {
return $I$(1).ARROW;
}}, 1);

Clazz.newMeth(C$, 'applyStyle$S', function (styleDesc) {
var chemProbs=styleDesc.split$S(",");
for (var i=0; i < chemProbs.length; i++) {
var thisStyle=chemProbs[i];
var data=thisStyle.split$S("=");
if (data.length == 2) {
var name=data[0];
var value=data[1];
if (name.toLowerCase$().equals$O("color")) {
var c=$I$(2).decode$S(value);
if (c == null ) {
c=this._color;
}this.setColor$java_awt_Color(c);
} else if (name.toLowerCase$().equals$O("intensity")) {
this._intensity=Double.parseDouble$S(value);
} else if (name.toLowerCase$().equals$O("dir")) {
this._outward=value.toLowerCase$().equals$O("out");
} else if (name.toLowerCase$().equals$O("glyph")) {
this._type=C$.annotTypeFromString$S(value);
}}}
});

Clazz.newMeth(C$, 'setType$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType', function (s) {
this._type=s;
});

Clazz.newMeth(C$, 'clone$', function () {
var result=Clazz.new_(C$.c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase,[this._mbfst, this._mbsnd]);
result._intensity=this._intensity;
result._type=this._type;
result._color=this._color;
result._outward=this._outward;
return result;
});

Clazz.newMeth(C$, 'toString', function () {
return "Chem. prob. " + this._type + " Base#" + this._mbfst.getBaseNumber$() + "-" + this._mbsnd.getBaseNumber$() ;
});

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_INTENSITY=1.0;
C$.DEFAULT_TYPE=$I$(1).ARROW;
C$.DEFAULT_COLOR=$I$(2).blue.darker$();
C$.XML_ELEMENT_NAME="ChemProbAnnotation";
C$.XML_VAR_INDEX5_NAME="Index5";
C$.XML_VAR_INDEX3_NAME="Index3";
C$.XML_VAR_COLOR_NAME="Color";
C$.XML_VAR_INTENSITY_NAME="Intensity";
C$.XML_VAR_TYPE_NAME="Type";
C$.XML_VAR_OUTWARD_NAME="Outward";
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.ChemProbAnnotation, "ChemProbAnnotationType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "TRIANGLE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ARROW", 1, []);
Clazz.newEnumConst($vals, C$.c$, "PIN", 2, []);
Clazz.newEnumConst($vals, C$.c$, "DOT", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
