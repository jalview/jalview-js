(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'org.xml.sax.helpers.AttributesImpl',['fr.orsay.lri.varna.models.rna.ModeleBP','.Edge'],['fr.orsay.lri.varna.models.rna.ModeleBP','.Stericity'],'fr.orsay.lri.varna.models.rna.ModeleBPStyle','java.util.ArrayList','fr.orsay.lri.varna.exceptions.ExceptionModeleStyleBaseSyntaxError','fr.orsay.lri.varna.models.rna.ModelBaseStyle','fr.orsay.lri.varna.exceptions.ExceptionParameterError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModeleBP", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.io.Serializable', 'Comparable']);
C$.XML_ELEMENT_NAME=null;
C$.XML_VAR_PARTNER5_NAME=null;
C$.XML_VAR_EDGE5_NAME=null;
C$.XML_VAR_PARTNER3_NAME=null;
C$.XML_VAR_EDGE3_NAME=null;
C$.XML_VAR_STERICITY_NAME=null;
C$.XML_VAR_SEC_STR_NAME=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.XML_ELEMENT_NAME="bp";
C$.XML_VAR_PARTNER5_NAME="part5";
C$.XML_VAR_EDGE5_NAME="edge5";
C$.XML_VAR_PARTNER3_NAME="part3";
C$.XML_VAR_EDGE3_NAME="edge3";
C$.XML_VAR_STERICITY_NAME="orient";
C$.XML_VAR_SEC_STR_NAME="secstr";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._partner5=null;
this._edge5=null;
this._partner3=null;
this._edge3=null;
this._stericity=null;
this._style=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler$Z', function (hd, inSecondaryStructure) {
var atts=Clazz.new_($I$(1));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_PARTNER5_NAME, "CDATA", "" + this._partner5.getIndex$());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_PARTNER3_NAME, "CDATA", "" + this._partner3.getIndex$());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_EDGE5_NAME, "CDATA", "" + this._edge5);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_EDGE3_NAME, "CDATA", "" + this._edge3);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_STERICITY_NAME, "CDATA", "" + this._stericity);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_SEC_STR_NAME, "CDATA", "" + inSecondaryStructure);
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
this._style.toXML$javax_xml_transform_sax_TransformerHandler(hd);
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
this.toXML$javax_xml_transform_sax_TransformerHandler$Z(hd, false);
});

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (part5, part3) {
C$.c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$fr_orsay_lri_varna_models_rna_ModeleBP_Stericity.apply(this, [part5, part3, $I$(2).WC, $I$(2).WC, $I$(3).CIS]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$fr_orsay_lri_varna_models_rna_ModeleBP_Stericity', function (part5, part3, edge5, edge3, ster) {
C$.$init$.apply(this);
this._partner5=part5;
this._partner3=part3;
this._edge5=edge5;
this._edge3=edge3;
this._stericity=ster;
this._style=Clazz.new_($I$(4));
}, 1);

Clazz.newMeth(C$, 'c$$S', function (text) {
C$.$init$.apply(this);
this._style=Clazz.new_($I$(4));
this.assignParameters$S(text);
}, 1);

Clazz.newMeth(C$, 'setStericity$fr_orsay_lri_varna_models_rna_ModeleBP_Stericity', function (s) {
this._stericity=s;
});

Clazz.newMeth(C$, 'setEdge5$fr_orsay_lri_varna_models_rna_ModeleBP_Edge', function (e) {
this._edge5=e;
});

Clazz.newMeth(C$, 'setEdge3$fr_orsay_lri_varna_models_rna_ModeleBP_Edge', function (e) {
this._edge3=e;
});

Clazz.newMeth(C$, 'setStyle$fr_orsay_lri_varna_models_rna_ModeleBPStyle', function (e) {
this._style=e;
});

Clazz.newMeth(C$, 'getStyle$', function () {
return this._style;
});

Clazz.newMeth(C$, 'isCanonicalGC$', function () {
var si=this._partner5.getContent$();
var sj=this._partner3.getContent$();
if ((si.length$() >= 1) && (sj.length$() >= 1) ) {
var ci=si.toUpperCase$().charAt$I(0);
var cj=sj.toUpperCase$().charAt$I(0);
if (((ci == "G") && (cj == "C") ) || ((ci == "C") && (cj == "G") ) ) {
return this.isCanonical$() && (this.getStericity$() === $I$(3).CIS ) ;
}}return false;
});

Clazz.newMeth(C$, 'isCanonicalAU$', function () {
var si=this._partner5.getContent$();
var sj=this._partner3.getContent$();
if ((si.length$() >= 1) && (sj.length$() >= 1) ) {
var ci=si.toUpperCase$().charAt$I(0);
var cj=sj.toUpperCase$().charAt$I(0);
if (((ci == "A") && (cj == "U") ) || ((ci == "U") && (cj == "A") ) || ((ci == "U") && (cj == "T") ) || ((ci == "T") && (cj == "U") )  ) {
return this.isCanonical$();
}}return false;
});

Clazz.newMeth(C$, 'isWobbleUG$', function () {
var si=this._partner5.getContent$();
var sj=this._partner3.getContent$();
if ((si.length$() >= 1) && (sj.length$() >= 1) ) {
var ci=si.toUpperCase$().charAt$I(0);
var cj=sj.toUpperCase$().charAt$I(0);
if (((ci == "G") && (cj == "U") ) || ((ci == "U") && (cj == "G") ) ) {
return (this.isCanonical$());
}}return false;
});

Clazz.newMeth(C$, 'isCanonical$', function () {
return (this._edge5 === $I$(2).WC ) && (this._edge3 === $I$(2).WC ) && (this._stericity === $I$(3).CIS )  ;
});

Clazz.newMeth(C$, 'getStericity$', function () {
return this._stericity;
});

Clazz.newMeth(C$, 'isCIS$', function () {
return (this._stericity === $I$(3).CIS );
});

Clazz.newMeth(C$, 'isTRANS$', function () {
return (this._stericity === $I$(3).TRANS );
});

Clazz.newMeth(C$, 'getEdgePartner5$', function () {
return this._edge5;
});

Clazz.newMeth(C$, 'getEdgePartner3$', function () {
return this._edge3;
});

Clazz.newMeth(C$, 'getPartner$fr_orsay_lri_varna_models_rna_ModeleBase', function (mb) {
if (mb === this._partner3 ) return this._partner5;
 else return this._partner3;
});

Clazz.newMeth(C$, 'getPartner5$', function () {
return this._partner5;
});

Clazz.newMeth(C$, 'getPartner3$', function () {
return this._partner3;
});

Clazz.newMeth(C$, 'getIndex5$', function () {
return this._partner5.getIndex$();
});

Clazz.newMeth(C$, 'getIndex3$', function () {
return this._partner3.getIndex$();
});

Clazz.newMeth(C$, 'setPartner5$fr_orsay_lri_varna_models_rna_ModeleBase', function (mb) {
this._partner5=mb;
});

Clazz.newMeth(C$, 'setPartner3$fr_orsay_lri_varna_models_rna_ModeleBase', function (mb) {
this._partner3=mb;
});

Clazz.newMeth(C$, 'assignParameters$S', function (parametersValue) {
if (parametersValue.equals$O("")) return;
var parametersL=parametersValue.split$S(",");
var namesArray=Clazz.new_($I$(5));
var valuesArray=Clazz.new_($I$(5));
var param;
for (var i=0; i < parametersL.length; i++) {
param=parametersL[i].split$S("=");
if (param.length != 2) throw Clazz.new_($I$(6).c$$S,["Bad parameter: '" + param[0] + "' ..." ]);
namesArray.add$TE(param[0].replace$CharSequence$CharSequence(" ", ""));
valuesArray.add$TE(param[1].replace$CharSequence$CharSequence(" ", ""));
}
for (var i=0; i < namesArray.size$(); i++) {
if (namesArray.get$I(i).toLowerCase$().equals$O("color")) {
try {
this._style.setCustomColor$java_awt_Color($I$(7).getSafeColor$S(valuesArray.get$I(i)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_($I$(8).c$$S$S,[e.getMessage$(), "Bad inner color Syntax:" + valuesArray.get$I(i)]);
} else {
throw e;
}
}
} else if (namesArray.get$I(i).toLowerCase$().equals$O("thickness")) {
try {
this._style.setThickness$D(Double.parseDouble$S(valuesArray.get$I(i)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_($I$(8).c$$S$S,[e.getMessage$(), "Bad value for bp thickness:" + valuesArray.get$I(i)]);
} else {
throw e;
}
}
} else if (namesArray.get$I(i).toLowerCase$().equals$O("edge5")) {
var s=valuesArray.get$I(i);
if (s.toLowerCase$().equals$O("wc")) {
this.setEdge5$fr_orsay_lri_varna_models_rna_ModeleBP_Edge($I$(2).WC);
} else if (s.toLowerCase$().equals$O("h")) {
this.setEdge5$fr_orsay_lri_varna_models_rna_ModeleBP_Edge($I$(2).HOOGSTEEN);
} else if (s.toLowerCase$().equals$O("s")) {
this.setEdge5$fr_orsay_lri_varna_models_rna_ModeleBP_Edge($I$(2).SUGAR);
} else throw Clazz.new_($I$(8).c$$S,["Bad value for edge:" + valuesArray.get$I(i)]);
} else if (namesArray.get$I(i).toLowerCase$().equals$O("edge3")) {
var s=valuesArray.get$I(i);
if (s.toLowerCase$().equals$O("wc")) {
this.setEdge3$fr_orsay_lri_varna_models_rna_ModeleBP_Edge($I$(2).WC);
} else if (s.toLowerCase$().equals$O("h")) {
this.setEdge3$fr_orsay_lri_varna_models_rna_ModeleBP_Edge($I$(2).HOOGSTEEN);
} else if (s.toLowerCase$().equals$O("s")) {
this.setEdge3$fr_orsay_lri_varna_models_rna_ModeleBP_Edge($I$(2).SUGAR);
} else throw Clazz.new_($I$(8).c$$S,["Bad value for edge:" + valuesArray.get$I(i)]);
} else if (namesArray.get$I(i).toLowerCase$().equals$O("stericity")) {
var s=valuesArray.get$I(i);
if (s.toLowerCase$().equals$O("cis")) {
this.setStericity$fr_orsay_lri_varna_models_rna_ModeleBP_Stericity($I$(3).CIS);
} else if (s.toLowerCase$().equals$O("trans")) {
this.setStericity$fr_orsay_lri_varna_models_rna_ModeleBP_Stericity($I$(3).TRANS);
} else throw Clazz.new_($I$(8).c$$S,["Bad value for stericity:" + valuesArray.get$I(i)]);
} else throw Clazz.new_($I$(6).c$$S,["Unknown parameter:" + namesArray.get$I(i)]);
}
});

Clazz.newMeth(C$, 'toString', function () {
var result="";
result += "(" + this._partner5.getIndex$() + "," + this._partner3.getIndex$() + ")" ;
return result;
});

Clazz.newMeth(C$, ['compareTo$fr_orsay_lri_varna_models_rna_ModeleBP','compareTo$','compareTo$TT'], function (mb) {
if (this.getIndex5$() != mb.getIndex5$()) {
return this.getIndex5$() - mb.getIndex5$();
}return this.getIndex3$() - mb.getIndex3$();
});
;
(function(){var C$=Clazz.newClass(P$.ModeleBP, "Edge", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "WC", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SUGAR", 1, []);
Clazz.newEnumConst($vals, C$.c$, "HOOGSTEEN", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.ModeleBP, "Stericity", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "CIS", 0, []);
Clazz.newEnumConst($vals, C$.c$, "TRANS", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:30:03 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
