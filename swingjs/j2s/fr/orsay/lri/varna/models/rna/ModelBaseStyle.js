(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'org.xml.sax.helpers.AttributesImpl','fr.orsay.lri.varna.utils.XMLUtils','fr.orsay.lri.varna.models.VARNAConfig','java.awt.Color','java.util.ArrayList','fr.orsay.lri.varna.exceptions.ExceptionModeleStyleBaseSyntaxError','fr.orsay.lri.varna.exceptions.ExceptionParameterError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModelBaseStyle", null, null, ['Cloneable', 'java.io.Serializable']);
C$.XML_ELEMENT_NAME=null;
C$.XML_VAR_OUTLINE_NAME=null;
C$.XML_VAR_INNER_NAME=null;
C$.XML_VAR_NUMBER_NAME=null;
C$.XML_VAR_NAME_NAME=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.XML_ELEMENT_NAME="basestyle";
C$.XML_VAR_OUTLINE_NAME="outline";
C$.XML_VAR_INNER_NAME="inner";
C$.XML_VAR_NUMBER_NAME="num";
C$.XML_VAR_NAME_NAME="name";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._base_outline_color=null;
this._base_inner_color=null;
this._base_number_color=null;
this._base_name_color=null;
this._selected=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(1));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_OUTLINE_NAME, "CDATA", "" + $I$(2).toHTMLNotation$java_awt_Color(this._base_outline_color));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_INNER_NAME, "CDATA", "" + $I$(2).toHTMLNotation$java_awt_Color(this._base_inner_color));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_NUMBER_NAME, "CDATA", "" + $I$(2).toHTMLNotation$java_awt_Color(this._base_number_color));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_NAME_NAME, "CDATA", "" + $I$(2).toHTMLNotation$java_awt_Color(this._base_name_color));
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'clone$', function () {
var result=Clazz.new_(C$);
result._base_inner_color=this._base_inner_color;
result._base_name_color=this._base_name_color;
result._base_number_color=this._base_number_color;
result._base_outline_color=this._base_outline_color;
result._selected=this._selected;
return result;
});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this._base_outline_color=$I$(3).BASE_OUTLINE_COLOR_DEFAULT;
this._base_inner_color=$I$(3).BASE_INNER_COLOR_DEFAULT;
this._base_number_color=$I$(3).BASE_NUMBER_COLOR_DEFAULT;
this._base_name_color=$I$(3).BASE_NAME_COLOR_DEFAULT;
this._selected=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Font', function (outline, inner, number, name, font) {
C$.$init$.apply(this);
this._base_outline_color=outline;
this._base_inner_color=inner;
this._base_number_color=number;
this._base_name_color=name;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (parameterValue) {
C$.c$.apply(this, []);
this.assignParameters$S(parameterValue);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModelBaseStyle', function (msb) {
C$.$init$.apply(this);
this._base_outline_color=msb.getBaseOutlineColor$();
this._base_inner_color=msb.getBaseInnerColor$();
this._base_number_color=msb.getBaseNumberColor$();
this._base_name_color=msb.getBaseNameColor$();
}, 1);

Clazz.newMeth(C$, 'getBaseOutlineColor$', function () {
return this._base_outline_color;
});

Clazz.newMeth(C$, 'setBaseOutlineColor$java_awt_Color', function (_base_outline_color) {
this._base_outline_color=_base_outline_color;
});

Clazz.newMeth(C$, 'getBaseInnerColor$', function () {
return this._base_inner_color;
});

Clazz.newMeth(C$, 'setBaseInnerColor$java_awt_Color', function (_base_inner_color) {
this._base_inner_color=_base_inner_color;
});

Clazz.newMeth(C$, 'getBaseNumberColor$', function () {
return this._base_number_color;
});

Clazz.newMeth(C$, 'setBaseNumberColor$java_awt_Color', function (_base_numbers_color) {
this._base_number_color=_base_numbers_color;
});

Clazz.newMeth(C$, 'getBaseNameColor$', function () {
return this._base_name_color;
});

Clazz.newMeth(C$, 'setBaseNameColor$java_awt_Color', function (_base_name_color) {
this._base_name_color=_base_name_color;
});

Clazz.newMeth(C$, 'getSafeColor$S', function (col) {
var result;
try {
result=$I$(4).decode$S(col);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
result=$I$(4).getColor$S$java_awt_Color(col, $I$(4).green);
} else {
throw e;
}
}
return result;
}, 1);

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
if (namesArray.get$I(i).toLowerCase$().equals$O("fill")) {
try {
this.setBaseInnerColor$java_awt_Color(C$.getSafeColor$S(valuesArray.get$I(i)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_($I$(7).c$$S$S,[e.getMessage$(), "Bad inner color Syntax:" + valuesArray.get$I(i)]);
} else {
throw e;
}
}
} else if (namesArray.get$I(i).toLowerCase$().equals$O("label")) {
try {
this.setBaseNameColor$java_awt_Color(C$.getSafeColor$S(valuesArray.get$I(i)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_($I$(7).c$$S$S,[e.getMessage$(), "Bad name color Syntax:" + valuesArray.get$I(i)]);
} else {
throw e;
}
}
} else if (namesArray.get$I(i).toLowerCase$().equals$O("number")) {
try {
this.setBaseNumberColor$java_awt_Color(C$.getSafeColor$S(valuesArray.get$I(i)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_($I$(7).c$$S$S,[e.getMessage$(), "Bad numbers color Syntax:" + valuesArray.get$I(i)]);
} else {
throw e;
}
}
} else if (namesArray.get$I(i).toLowerCase$().equals$O("outline")) {
try {
this.setBaseOutlineColor$java_awt_Color(C$.getSafeColor$S(valuesArray.get$I(i)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_($I$(7).c$$S$S,[e.getMessage$(), "Bad outline color Syntax:" + valuesArray.get$I(i)]);
} else {
throw e;
}
}
} else throw Clazz.new_($I$(6).c$$S,["Unknown parameter:" + namesArray.get$I(i)]);
}
});

Clazz.newMeth(C$, 'StyleToInteger$S', function (s) {
var style;
if (s.toLowerCase$().equals$O("italic")) style=new Integer(2);
 else if (s.toLowerCase$().equals$O("bold")) style=new Integer(1);
 else if (s.toLowerCase$().equals$O("plain")) style=new Integer(0);
 else style=null;
return style;
}, 1);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:30:01 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
