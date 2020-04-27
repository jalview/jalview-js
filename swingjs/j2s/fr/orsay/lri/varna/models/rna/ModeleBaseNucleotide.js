(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'java.util.HashMap','org.xml.sax.helpers.AttributesImpl','fr.orsay.lri.varna.models.rna.ModeleBase','fr.orsay.lri.varna.utils.XMLUtils','fr.orsay.lri.varna.models.rna.ModelBaseStyle',['java.awt.geom.Point2D','.Double'],'fr.orsay.lri.varna.models.rna.VARNAPoint',['fr.orsay.lri.varna.models.rna.ModeleBaseNucleotide','.STATE_SPECIAL_CHARS_STATES']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ModeleBaseNucleotide", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'fr.orsay.lri.varna.models.rna.ModeleBase');
C$.$classes$=[['STATE_SPECIAL_CHARS_STATES',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
{
C$._subscripts.put$O$O(new Character('0'), new Character('\u2080'));
C$._subscripts.put$O$O(new Character('1'), new Character('\u2081'));
C$._subscripts.put$O$O(new Character('2'), new Character('\u2082'));
C$._subscripts.put$O$O(new Character('3'), new Character('\u2083'));
C$._subscripts.put$O$O(new Character('4'), new Character('\u2084'));
C$._subscripts.put$O$O(new Character('5'), new Character('\u2085'));
C$._subscripts.put$O$O(new Character('6'), new Character('\u2086'));
C$._subscripts.put$O$O(new Character('7'), new Character('\u2087'));
C$._subscripts.put$O$O(new Character('8'), new Character('\u2088'));
C$._subscripts.put$O$O(new Character('9'), new Character('\u2089'));
C$._subscripts.put$O$O(new Character('+'), new Character('\u208a'));
C$._subscripts.put$O$O(new Character('-'), new Character('\u208b'));
C$._subscripts.put$O$O(new Character('a'), new Character('\u2090'));
C$._subscripts.put$O$O(new Character('e'), new Character('\u2091'));
C$._subscripts.put$O$O(new Character('o'), new Character('\u2092'));
C$._subscripts.put$O$O(new Character('i'), new Character('\u1d62'));
C$._subscripts.put$O$O(new Character('r'), new Character('\u1d63'));
C$._subscripts.put$O$O(new Character('u'), new Character('\u1d64'));
C$._subscripts.put$O$O(new Character('v'), new Character('\u1d65'));
C$._subscripts.put$O$O(new Character('x'), new Character('\u2093'));
C$._superscripts.put$O$O(new Character('0'), new Character('\u2070'));
C$._superscripts.put$O$O(new Character('1'), new Character('\u00b9'));
C$._superscripts.put$O$O(new Character('2'), new Character('\u00b2'));
C$._superscripts.put$O$O(new Character('3'), new Character('\u00b3'));
C$._superscripts.put$O$O(new Character('4'), new Character('\u2074'));
C$._superscripts.put$O$O(new Character('5'), new Character('\u2075'));
C$._superscripts.put$O$O(new Character('6'), new Character('\u2076'));
C$._superscripts.put$O$O(new Character('7'), new Character('\u2077'));
C$._superscripts.put$O$O(new Character('8'), new Character('\u2078'));
C$._superscripts.put$O$O(new Character('9'), new Character('\u2079'));
C$._superscripts.put$O$O(new Character('+'), new Character('\u207a'));
C$._superscripts.put$O$O(new Character('-'), new Character('\u207b'));
C$._superscripts.put$O$O(new Character('i'), new Character('\u2071'));
C$._superscripts.put$O$O(new Character('n'), new Character('\u207f'));
C$._commands.put$O$O("alpha", new Character('\u03b1'));
C$._commands.put$O$O("beta", new Character('\u03b2'));
C$._commands.put$O$O("gamma", new Character('\u03b3'));
C$._commands.put$O$O("delta", new Character('\u03b4'));
C$._commands.put$O$O("epsilon", new Character('\u03b5'));
C$._commands.put$O$O("zeta", new Character('\u03b6'));
C$._commands.put$O$O("eta", new Character('\u03b7'));
C$._commands.put$O$O("theta", new Character('\u03b8'));
C$._commands.put$O$O("iota", new Character('\u03b9'));
C$._commands.put$O$O("kappa", new Character('\u03ba'));
C$._commands.put$O$O("lambda", new Character('\u03bb'));
C$._commands.put$O$O("mu", new Character('\u03bc'));
C$._commands.put$O$O("nu", new Character('\u03bd'));
C$._commands.put$O$O("xi", new Character('\u03be'));
C$._commands.put$O$O("omicron", new Character('\u03bf'));
C$._commands.put$O$O("pi", new Character('\u03c1'));
C$._commands.put$O$O("rho", new Character('\u03c2'));
C$._commands.put$O$O("sigma", new Character('\u03c3'));
C$._commands.put$O$O("tau", new Character('\u03c4'));
C$._commands.put$O$O("upsilon", new Character('\u03c5'));
C$._commands.put$O$O("phi", new Character('\u03c6'));
C$._commands.put$O$O("chi", new Character('\u03c7'));
C$._commands.put$O$O("psi", new Character('\u03c8'));
C$._commands.put$O$O("omega", new Character('\u03c9'));
C$._commands.put$O$O("Psi", new Character('\u03a8'));
C$._commands.put$O$O("Phi", new Character('\u03a6'));
C$._commands.put$O$O("Sigma", new Character('\u03a3'));
C$._commands.put$O$O("Pi", new Character('\u03a0'));
C$._commands.put$O$O("Theta", new Character('\u0398'));
C$._commands.put$O$O("Omega", new Character('\u03a9'));
C$._commands.put$O$O("Gamma", new Character('\u0393'));
C$._commands.put$O$O("Delta", new Character('\u0394'));
C$._commands.put$O$O("Lambda", new Character('\u039b'));
}
},1);

C$.$fields$=[['I',['_index'],'S',['_c']]
,['S',['XML_ELEMENT_NAME','XML_VAR_CONTENT_NAME'],'O',['_subscripts','java.util.HashMap','+_superscripts','+_commands']]]

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(2,1));
atts.addAttribute$S$S$S$S$S("", "", $I$(3).XML_VAR_INDEX_NAME, "CDATA", "" + this._index);
atts.addAttribute$S$S$S$S$S("", "", $I$(3).XML_VAR_NUMBER_NAME, "CDATA", "" + this._realIndex);
atts.addAttribute$S$S$S$S$S("", "", $I$(3).XML_VAR_CUSTOM_DRAWN_NAME, "CDATA", "" + this._colorie);
atts.addAttribute$S$S$S$S$S("", "", $I$(3).XML_VAR_VALUE_NAME, "CDATA", "" + new Double(this._value).toString());
atts.addAttribute$S$S$S$S$S("", "", $I$(3).XML_VAR_LABEL_NAME, "CDATA", "" + this._label);
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
atts.clear$();
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_VAR_CONTENT_NAME, atts);
$I$(4).exportCDATAString$javax_xml_transform_sax_TransformerHandler$S(hd, this._c);
hd.endElement$S$S$S("", "", C$.XML_VAR_CONTENT_NAME);
this._coords.toXML$javax_xml_transform_sax_TransformerHandler$S(hd, $I$(3).XML_VAR_POSITION_NAME);
this._center.toXML$javax_xml_transform_sax_TransformerHandler$S(hd, $I$(3).XML_VAR_CENTER_NAME);
if ((this._colorie).valueOf()) {
this._styleBase.toXML$javax_xml_transform_sax_TransformerHandler(hd);
}hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'c$$I', function (index) {
C$.c$$S$I.apply(this, [" ", index]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (s, index) {
C$.c$$S$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I.apply(this, [s, Clazz.new_($I$(5,1)), index]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I', function (s, index, baseNumber) {
C$.c$$S$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I.apply(this, [s, Clazz.new_($I$(5,1)), index]);
this._realIndex=baseNumber;
}, 1);

Clazz.newMeth(C$, 'c$$S$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I', function (s, msb, index) {
C$.c$$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$Z$S$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I$I.apply(this, [Clazz.new_($I$(6,1)), Clazz.new_($I$(6,1)), true, s, msb, -1, index]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I$I', function (msb, index, baseNumber) {
C$.c$$S$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I.apply(this, ["", msb, index]);
this._realIndex=baseNumber;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_Double$I', function (coord, index) {
C$.c$$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$Z$S$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I$I.apply(this, [Clazz.new_([coord.getX$(), coord.getY$()],$I$(6,1).c$$D$D), Clazz.new_($I$(6,1)), true, "", Clazz.new_($I$(5,1)), -1, index]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModeleBaseNucleotide$I', function (mb, index) {
C$.c$$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$Z$S$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I$I.apply(this, [Clazz.new_([mb.getCoords$().getX$(), mb.getCoords$().getY$()],$I$(6,1).c$$D$D), Clazz.new_([mb.getCenter$().getX$(), mb.getCenter$().getY$()],$I$(6,1).c$$D$D), true, mb.getBase$(), mb.getStyleBase$(), mb.getElementStructure$(), index]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$Z$S$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I$I', function (coords, center, colorie, label, mb, elementStruct, index) {
Clazz.super_(C$, this);
this._colorie=new Boolean(colorie);
this._c=label;
this._styleBase=mb;
this._coords=Clazz.new_($I$(7,1).c$$java_awt_geom_Point2D_Double,[coords]);
this._center=Clazz.new_($I$(7,1).c$$java_awt_geom_Point2D_Double,[center]);
this._index=index;
this._realIndex=index + 1;
this._value=0.0;
}, 1);

Clazz.newMeth(C$, 'getStyleBase$', function () {
if ((this._colorie).valueOf()) return this._styleBase;
return Clazz.new_($I$(5,1));
});

Clazz.newMeth(C$, 'getBase$', function () {
return C$.decode$S(this._c);
});

Clazz.newMeth(C$, 'setBase$S', function (_s) {
this._c=_s;
});

Clazz.newMeth(C$, 'getContent$', function () {
return this.getBase$();
});

Clazz.newMeth(C$, 'setContent$S', function (s) {
this.setBase$S(s);
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this._index;
});

Clazz.newMeth(C$, 'toString', function () {
return "" + this._realIndex + " (" + this._index + ") (x,y):" + this._coords + " C:" + this._center ;
});

Clazz.newMeth(C$, 'decode$S', function (s) {
if (s.length$() <= 1) {
return s;
}var state=$I$(8).NORMAL;
var result="";
var buffer="";
for (var i=0; i < s.length$(); i++) {
var c=s.charAt$I(i);
switch (state) {
case $I$(8).NORMAL:
{
switch (c.$c()) {
case 95:
state=$I$(8).SUBSCRIPT;
break;
case 94:
state=$I$(8).SUPERSCRIPT;
break;
case 92:
buffer="";
state=$I$(8).COMMAND;
break;
default:
result += c;
state=$I$(8).NORMAL;
break;
}
}break;
case $I$(8).SUBSCRIPT:
case $I$(8).SUPERSCRIPT:
{
switch (c.$c()) {
case 95:
state=$I$(8).SUBSCRIPT;
break;
case 94:
state=$I$(8).SUPERSCRIPT;
break;
case 92:
buffer="";
state=$I$(8).COMMAND;
break;
default:
if ((state === $I$(8).SUBSCRIPT ) && C$._subscripts.containsKey$O(new Character(c)) ) result += C$._subscripts.get$O(new Character(c));
 else if ((state === $I$(8).SUPERSCRIPT ) && C$._superscripts.containsKey$O(new Character(c)) ) result += C$._superscripts.get$O(new Character(c));
 else result += c;
state=$I$(8).NORMAL;
break;
}
}break;
case $I$(8).COMMAND:
{
switch (c.$c()) {
case 95:
if (C$._commands.containsKey$O(buffer)) {
result += C$._commands.get$O(buffer);
} else {
result += buffer;
}buffer="";
state=$I$(8).SUBSCRIPT;
break;
case 94:
if (C$._commands.containsKey$O(buffer)) {
result += C$._commands.get$O(buffer);
} else {
result += buffer;
}buffer="";
state=$I$(8).SUPERSCRIPT;
break;
case 92:
if (C$._commands.containsKey$O(buffer)) {
result += C$._commands.get$O(buffer);
} else {
result += buffer;
}buffer="";
state=$I$(8).COMMAND;
break;
case 32:
state=$I$(8).NORMAL;
if (C$._commands.containsKey$O(buffer)) {
result += C$._commands.get$O(buffer);
} else {
result += buffer;
}buffer="";
break;
default:
buffer += c;
break;
}
}break;
}
}
if (C$._commands.containsKey$O(buffer)) {
result += C$._commands.get$O(buffer);
} else {
result += buffer;
}return result;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.XML_ELEMENT_NAME="nt";
C$.XML_VAR_CONTENT_NAME="base";
C$._subscripts=Clazz.new_($I$(1,1));
C$._superscripts=Clazz.new_($I$(1,1));
C$._commands=Clazz.new_($I$(1,1));
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.ModeleBaseNucleotide, "STATE_SPECIAL_CHARS_STATES", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NORMAL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SUBSCRIPT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "SUPERSCRIPT", 2, []);
Clazz.newEnumConst($vals, C$.c$, "COMMAND", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
