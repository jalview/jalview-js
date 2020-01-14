(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.utils"),I$=[[0,'java.util.Formatter','org.xml.sax.helpers.AttributesImpl','java.awt.Font','java.util.ArrayList','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "XMLUtils");
C$.XML_BASELIST_ELEMENT_NAME=null;
C$.XML_FONT_ELEMENT_NAME=null;
C$.XML_ROLE_NAME=null;
C$.XML_NAME_NAME=null;
C$.XML_FAMILY_NAME=null;
C$.XML_STYLE_NAME=null;
C$.XML_SIZE_NAME=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.XML_BASELIST_ELEMENT_NAME="baselist";
C$.XML_FONT_ELEMENT_NAME="font";
C$.XML_ROLE_NAME="role";
C$.XML_NAME_NAME="name";
C$.XML_FAMILY_NAME="family";
C$.XML_STYLE_NAME="style";
C$.XML_SIZE_NAME="size";
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toHTMLNotation$java_awt_Color', function (c) {
var f=Clazz.new_($I$(1));
f.format$S$OA("#%02X%02X%02X", [new Integer(c.getRed$()), new Integer(c.getGreen$()), new Integer(c.getBlue$())]);
return f.toString();
}, 1);

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler$java_awt_Font', function (hd, f) {
C$.toXML$javax_xml_transform_sax_TransformerHandler$java_awt_Font$S(hd, f, "");
}, 1);

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler$java_awt_Font$S', function (hd, f, role) {
var atts=Clazz.new_($I$(2));
if (!role.equals$O("")) atts.addAttribute$S$S$S$S$S("", "", C$.XML_ROLE_NAME, "CDATA", "" + role);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_NAME_NAME, "CDATA", "" + f.getName$());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_STYLE_NAME, "CDATA", "" + f.getStyle$());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_SIZE_NAME, "CDATA", "" + new Float(f.getSize2D$()).toString());
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_FONT_ELEMENT_NAME, atts);
hd.endElement$S$S$S("", "", C$.XML_FONT_ELEMENT_NAME);
}, 1);

Clazz.newMeth(C$, 'getFont$S$org_xml_sax_Attributes', function (qName, attributes) {
if (qName.equals$O(C$.XML_FONT_ELEMENT_NAME)) {
var style=Integer.parseInt$S(attributes.getValue$S(C$.XML_STYLE_NAME));
var name=(attributes.getValue$S(C$.XML_NAME_NAME));
var size=Double.parseDouble$S(attributes.getValue$S(C$.XML_SIZE_NAME));
var f=Clazz.new_($I$(3).c$$S$I$I,[name, style, (size|0)]);
return f.deriveFont$F(size);
}return null;
}, 1);

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler$fr_orsay_lri_varna_models_rna_ModeleBase', function (hd, mb) {
var m=Clazz.new_($I$(4));
m.add$TE(mb);
C$.toXML$javax_xml_transform_sax_TransformerHandler$java_util_ArrayList(hd, m);
}, 1);

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler$java_util_ArrayList', function (hd, m) {
var atts=Clazz.new_($I$(2));
var result="";
for (var mb, $mb = m.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
if (!result.equals$O("")) result += ",";
result += mb.getIndex$();
}
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_BASELIST_ELEMENT_NAME, atts);
C$.exportCDATAString$javax_xml_transform_sax_TransformerHandler$S(hd, result);
hd.endElement$S$S$S("", "", C$.XML_BASELIST_ELEMENT_NAME);
}, 1);

Clazz.newMeth(C$, 'toModeleBaseArray$S$fr_orsay_lri_varna_models_rna_RNA', function (baselist, rna) {
var result=Clazz.new_($I$(4));
var data=baselist.trim$().split$S(",");
for (var i=0; i < data.length; i++) {
var index=Integer.parseInt$S(data[i]);
result.add$TE(rna.getBaseAt$I(index));
}
return result;
}, 1);

Clazz.newMeth(C$, 'exportCDATAElem$javax_xml_transform_sax_TransformerHandler$S$S', function (hd, elem, s) {
var t=s.toCharArray$();
var atts=Clazz.new_($I$(2));
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", elem, atts);
hd.startCDATA$();
hd.characters$CA$I$I(t, 0, t.length);
hd.endCDATA$();
hd.endElement$S$S$S("", "", elem);
}, 1);

Clazz.newMeth(C$, 'exportCDATAString$javax_xml_transform_sax_TransformerHandler$S', function (hd, s) {
var t=s.toCharArray$();
hd.startCDATA$();
hd.characters$CA$I$I(t, 0, t.length);
hd.endCDATA$();
}, 1);

Clazz.newMeth(C$, 'getBoolean$org_xml_sax_Attributes$S$Z', function (attributes, attName, defVal) {
var val=attributes.getValue$S(attName);
if (val != null ) {
return $I$(5).parseBoolean$S(val);
}return defVal;
}, 1);

Clazz.newMeth(C$, 'getInt$org_xml_sax_Attributes$S$I', function (attributes, attName, defVal) {
var val=attributes.getValue$S(attName);
if (val != null ) {
return Integer.parseInt$S(val);
}return defVal;
}, 1);

Clazz.newMeth(C$, 'getDouble$org_xml_sax_Attributes$S$D', function (attributes, attName, defVal) {
var val=attributes.getValue$S(attName);
if (val != null ) {
return Double.parseDouble$S(val);
}return defVal;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:30:01 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
