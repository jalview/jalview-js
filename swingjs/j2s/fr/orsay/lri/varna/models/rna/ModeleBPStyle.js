(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'fr.orsay.lri.varna.models.VARNAConfig','org.xml.sax.helpers.AttributesImpl','fr.orsay.lri.varna.utils.XMLUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModeleBPStyle", null, null, 'java.io.Serializable');
C$.XML_ELEMENT_NAME=null;
C$.XML_VAR_CUSTOM_STYLED_NAME=null;
C$.XML_VAR_COLOR_NAME=null;
C$.XML_VAR_THICKNESS_NAME=null;
C$.XML_VAR_BENT_NAME=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.XML_ELEMENT_NAME="BPstyle";
C$.XML_VAR_CUSTOM_STYLED_NAME="custom";
C$.XML_VAR_COLOR_NAME="color";
C$.XML_VAR_THICKNESS_NAME="thickness";
C$.XML_VAR_BENT_NAME="bent";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._isCustomColored=false;
this._color=null;
this._thickness=0;
this._bent=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._isCustomColored=false;
this._color=$I$(1).DEFAULT_BOND_COLOR;
this._thickness=-1.0;
this._bent=0.0;
}, 1);

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(2));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_CUSTOM_STYLED_NAME, "CDATA", "" + this._isCustomColored);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_COLOR_NAME, "CDATA", $I$(3).toHTMLNotation$java_awt_Color(this._color));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_THICKNESS_NAME, "CDATA", "" + new Double(this._thickness).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_BENT_NAME, "CDATA", "" + new Double(this._bent).toString());
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'getBent$', function () {
return this._bent;
});

Clazz.newMeth(C$, 'isBent$', function () {
return (this._bent != 0.0 );
});

Clazz.newMeth(C$, 'setBent$D', function (b) {
this._bent=b;
});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setCustomColor$java_awt_Color', function (c) {
this._isCustomColored=true;
this._color=c;
});

Clazz.newMeth(C$, 'useDefaultColor$', function () {
this._isCustomColored=false;
});

Clazz.newMeth(C$, 'isCustomColored$', function () {
return this._isCustomColored;
});

Clazz.newMeth(C$, 'getCustomColor$', function () {
return this._color;
});

Clazz.newMeth(C$, 'getColor$java_awt_Color', function (def) {
if (this.isCustomColored$()) {
return this._color;
} else {
return def;
}});

Clazz.newMeth(C$, 'getThickness$D', function (def) {
if (this._thickness > 0 ) return this._thickness;
 else return def;
});

Clazz.newMeth(C$, 'setThickness$D', function (thickness) {
this._thickness=thickness;
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:30:01 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
