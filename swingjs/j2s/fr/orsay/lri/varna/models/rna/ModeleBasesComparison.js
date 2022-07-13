(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'java.awt.Color','org.xml.sax.helpers.AttributesImpl','fr.orsay.lri.varna.models.rna.ModeleBase','fr.orsay.lri.varna.utils.XMLUtils',['java.awt.geom.Point2D','.Double'],'fr.orsay.lri.varna.models.rna.ModelBaseStyle','fr.orsay.lri.varna.models.rna.VARNAPoint']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ModeleBasesComparison", null, 'fr.orsay.lri.varna.models.rna.ModeleBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._appartenance=-1;
},1);

C$.$fields$=[['I',['_appartenance','_index'],'O',['_base1','Character','+_base2']]
,['S',['XML_ELEMENT_NAME','XML_VAR_FIRST_CONTENT_NAME','XML_VAR_SECOND_CONTENT_NAME','XML_VAR_MEMBERSHIP_NAME'],'O',['FIRST_RNA_COLOR','java.awt.Color','+SECOND_RNA_COLOR','+BOTH_RNA_COLOR','+DEFAULT_RNA_COLOR']]]

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(2,1));
atts.addAttribute$S$S$S$S$S("", "", $I$(3).XML_VAR_INDEX_NAME, "CDATA", "" + this._index);
atts.addAttribute$S$S$S$S$S("", "", $I$(3).XML_VAR_NUMBER_NAME, "CDATA", "" + this._realIndex);
atts.addAttribute$S$S$S$S$S("", "", $I$(3).XML_VAR_CUSTOM_DRAWN_NAME, "CDATA", "" + this._colorie);
atts.addAttribute$S$S$S$S$S("", "", $I$(3).XML_VAR_LABEL_NAME, "CDATA", "" + this._label);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_MEMBERSHIP_NAME, "CDATA", "" + this._appartenance);
atts.addAttribute$S$S$S$S$S("", "", "VALUE", "CDATA", "" + new Double(this._value).toString());
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
atts.clear$();
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_VAR_FIRST_CONTENT_NAME, atts);
$I$(4).exportCDATAString$javax_xml_transform_sax_TransformerHandler$S(hd, "" + this._base1);
hd.endElement$S$S$S("", "", C$.XML_VAR_FIRST_CONTENT_NAME);
atts.clear$();
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_VAR_SECOND_CONTENT_NAME, atts);
$I$(4).exportCDATAString$javax_xml_transform_sax_TransformerHandler$S(hd, "" + this._base2);
hd.endElement$S$S$S("", "", C$.XML_VAR_SECOND_CONTENT_NAME);
this._coords.toXML$javax_xml_transform_sax_TransformerHandler$S(hd, $I$(3).XML_VAR_POSITION_NAME);
this._center.toXML$javax_xml_transform_sax_TransformerHandler$S(hd, $I$(3).XML_VAR_CENTER_NAME);
if ((this._colorie).valueOf()) {
this._styleBase.toXML$javax_xml_transform_sax_TransformerHandler(hd);
}hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'c$$I', function (index) {
C$.c$$C$C$I.apply(this, [" ", " ", index]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D$I', function (coords, index) {
C$.c$$C$C$java_awt_geom_Point2D$I.apply(this, [" ", " ", Clazz.new_([coords.getX$(), coords.getY$()],$I$(5,1).c$$D$D), index]);
}, 1);

Clazz.newMeth(C$, 'c$$C$C$I', function (base1, base2, index) {
C$.c$$C$C$I$I.apply(this, [base1, base2, -1, index]);
}, 1);

Clazz.newMeth(C$, 'c$$C$C$java_awt_geom_Point2D$I', function (base1, base2, coords, index) {
C$.c$$java_awt_geom_Point2D$C$C$Z$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I$I.apply(this, [Clazz.new_([coords.getX$(), coords.getY$()],$I$(5,1).c$$D$D), base1, base2, true, Clazz.new_($I$(6,1)), -1, index]);
}, 1);

Clazz.newMeth(C$, 'c$$C$C$I$I', function (base1, base2, elementStructure, index) {
C$.c$$java_awt_geom_Point2D$C$C$Z$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I$I.apply(this, [Clazz.new_($I$(5,1)), base1, base2, true, Clazz.new_($I$(6,1)), elementStructure, index]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D$C$C$Z$fr_orsay_lri_varna_models_rna_ModelBaseStyle$I$I', function (coords, base1, base2, colorie, mb, elementStructure, index) {
Clazz.super_(C$, this);
this._colorie=new Boolean(colorie);
this._base1=new Character(base1);
this._base2=new Character(base2);
this._styleBase=mb;
this._coords=Clazz.new_([coords.getX$(), coords.getY$()],$I$(7,1).c$$D$D);
this._index=index;
}, 1);

Clazz.newMeth(C$, 'getStyleBase$', function () {
if ((this._colorie).valueOf()) return this._styleBase;
return Clazz.new_($I$(6,1));
});

Clazz.newMeth(C$, 'getColored$', function () {
return this._colorie;
});

Clazz.newMeth(C$, 'set_colored$Boolean', function (colored) {
this._colorie=colored;
});

Clazz.newMeth(C$, 'getBase1$', function () {
return this._base1;
});

Clazz.newMeth(C$, 'setBase1$Character', function (_base1) {
this._base1=_base1;
});

Clazz.newMeth(C$, 'getBase2$', function () {
return this._base2;
});

Clazz.newMeth(C$, 'setBase2$Character', function (_base2) {
this._base2=_base2;
});

Clazz.newMeth(C$, 'getBases$', function () {
return String.valueOf$O(this._base1) + String.valueOf$O(this._base2);
});

Clazz.newMeth(C$, 'getContent$', function () {
return this.getBases$();
});

Clazz.newMeth(C$, 'get_appartenance$', function () {
return this._appartenance;
});

Clazz.newMeth(C$, 'set_appartenance$I', function (_appartenance) {
if (_appartenance == 0) {
this.getStyleBase$().setBaseInnerColor$java_awt_Color(C$.BOTH_RNA_COLOR);
} else if (_appartenance == 1) {
this.getStyleBase$().setBaseInnerColor$java_awt_Color(C$.FIRST_RNA_COLOR);
} else if (_appartenance == 2) {
this.getStyleBase$().setBaseInnerColor$java_awt_Color(C$.SECOND_RNA_COLOR);
} else {
this.getStyleBase$().setBaseInnerColor$java_awt_Color(C$.DEFAULT_RNA_COLOR);
}this._appartenance=_appartenance;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this._index;
});

Clazz.newMeth(C$, 'setContent$S', function (s) {
this.setBase1$Character(new Character(s.charAt$I(0)));
this.setBase2$Character(new Character(s.charAt$I(1)));
});

C$.$static$=function(){C$.$static$=0;
C$.XML_ELEMENT_NAME="NTPair";
C$.XML_VAR_FIRST_CONTENT_NAME="base1";
C$.XML_VAR_SECOND_CONTENT_NAME="base2";
C$.XML_VAR_MEMBERSHIP_NAME="type";
C$.FIRST_RNA_COLOR=$I$(1).decode$S("#FFDD99");
C$.SECOND_RNA_COLOR=$I$(1).decode$S("#99DDFF");
C$.BOTH_RNA_COLOR=$I$(1).decode$S("#99DD99");
C$.DEFAULT_RNA_COLOR=$I$(1).white;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
