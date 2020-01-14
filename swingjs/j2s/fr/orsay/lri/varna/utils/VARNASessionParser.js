(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.utils"),p$1={},I$=[[0,'java.util.TreeSet','java.net.URL','java.io.InputStreamReader','org.xml.sax.InputSource','java.io.StringReader','fr.orsay.lri.varna.VARNAPanel','fr.orsay.lri.varna.models.VARNAConfig','fr.orsay.lri.varna.models.rna.RNA','fr.orsay.lri.varna.models.rna.ModeleBackbone','fr.orsay.lri.varna.models.rna.ModeleBackboneElement',['fr.orsay.lri.varna.models.rna.ModeleBackboneElement','.BackboneType'],'java.awt.Color','fr.orsay.lri.varna.models.annotations.TextAnnotation','fr.orsay.lri.varna.models.rna.ModeleBaseNucleotide','fr.orsay.lri.varna.models.rna.ModeleBase','Boolean','fr.orsay.lri.varna.utils.XMLUtils','StringBuffer','fr.orsay.lri.varna.models.rna.ModeleBasesComparison','fr.orsay.lri.varna.models.rna.ModeleBP',['fr.orsay.lri.varna.models.rna.ModeleBP','.Edge'],['fr.orsay.lri.varna.models.rna.ModeleBP','.Stericity'],'fr.orsay.lri.varna.models.annotations.ChemProbAnnotation',['fr.orsay.lri.varna.models.annotations.ChemProbAnnotation','.ChemProbAnnotationType'],['fr.orsay.lri.varna.models.annotations.TextAnnotation','.AnchorType'],'fr.orsay.lri.varna.models.annotations.HighlightRegionAnnotation','fr.orsay.lri.varna.models.rna.VARNAPoint',['java.awt.geom.Point2D','.Double'],'fr.orsay.lri.varna.models.rna.ModelBaseStyle','fr.orsay.lri.varna.models.rna.ModeleBPStyle']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VARNASessionParser", null, 'org.xml.sax.helpers.DefaultHandler');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._buffer=null;
this.mbn=null;
this.mbc=null;
this.mbp=null;
this.mbps=null;
this.msb=null;
this.ta=null;
this.backbone=null;
this.hra=null;
this.rna=null;
this.f=null;
this.config=null;
this._context=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._buffer=null;
this.mbn=null;
this.mbc=null;
this.mbp=null;
this.mbps=null;
this.msb=null;
this.ta=null;
this.backbone=null;
this.hra=null;
this.rna=null;
this.f=null;
this.config=null;
this._context=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createSourceFromURL$S', function (path) {
var url=null;
try {
url=Clazz.new_($I$(2).c$$S,[path]);
var connexion=url.openConnection$();
connexion.setUseCaches$Z(false);
var r=connexion.getInputStream$();
var inr=Clazz.new_($I$(3).c$$java_io_InputStream,[r]);
return Clazz.new_($I$(4).c$$java_io_Reader,[inr]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return Clazz.new_($I$(4).c$$java_io_Reader,[Clazz.new_($I$(5).c$$S,[""])]);
});

Clazz.newMeth(C$, ['resolveEntity$S$S','resolveEntity$'], function (publicId, systemId) {
return Clazz.new_($I$(4).c$$java_io_Reader,[Clazz.new_($I$(5).c$$S,[""])]);
});

Clazz.newMeth(C$, 'addToContext$S', function (s) {
this._context.add$TE(s);
}, p$1);

Clazz.newMeth(C$, 'removeFromContext$S', function (s) {
this._context.remove$O(s);
}, p$1);

Clazz.newMeth(C$, 'contextContains$S', function (s) {
return this._context.contains$O(s);
}, p$1);

Clazz.newMeth(C$, 'startElement$S$S$S$org_xml_sax_Attributes', function (uri, localName, qName, attributes) {
if (qName.equals$O($I$(6).XML_ELEMENT_NAME)) {
} else if (qName.equals$O($I$(7).XML_ELEMENT_NAME)) {
this.config=Clazz.new_($I$(7));
this.config.loadFromXMLAttributes$org_xml_sax_Attributes(attributes);
} else if (qName.equals$O($I$(8).XML_ELEMENT_NAME)) {
this.rna=Clazz.new_($I$(8));
var mode=Integer.parseInt$S(attributes.getValue$S($I$(8).XML_VAR_DRAWN_MODE_NAME));
this.rna.setDrawMode$I(mode);
} else if (qName.equals$O($I$(9).XML_ELEMENT_NAME)) {
this.backbone=Clazz.new_($I$(9));
this.rna.setBackbone$fr_orsay_lri_varna_models_rna_ModeleBackbone(this.backbone);
} else if (qName.equals$O($I$(10).XML_ELEMENT_NAME)) {
if (this.backbone != null ) {
var index=Integer.parseInt$S(attributes.getValue$S($I$(10).XML_VAR_INDEX_NAME));
var type=$I$(11).getType$S((attributes.getValue$S($I$(10).XML_VAR_TYPE_NAME)));
var c=null;
if (type === $I$(11).CUSTOM_COLOR ) {
c=$I$(12).decode$S(attributes.getValue$S($I$(13).XML_VAR_COLOR_NAME));
this.backbone.addElement$fr_orsay_lri_varna_models_rna_ModeleBackboneElement(Clazz.new_($I$(10).c$$I$java_awt_Color,[index, c]));
} else {
this.backbone.addElement$fr_orsay_lri_varna_models_rna_ModeleBackboneElement(Clazz.new_($I$(10).c$$I$fr_orsay_lri_varna_models_rna_ModeleBackboneElement_BackboneType,[index, type]));
}}} else if (qName.equals$O($I$(9).XML_ELEMENT_NAME)) {
this.backbone=Clazz.new_($I$(9));
} else if (qName.equals$O($I$(14).XML_ELEMENT_NAME)) {
if (this.rna != null ) {
this.mbn=Clazz.new_($I$(14).c$$I,[this.rna.getSize$()]);
if (this.mbn.getIndex$() != Integer.parseInt$S(attributes.getValue$S($I$(15).XML_VAR_INDEX_NAME))) throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["Index mismatch for Base"]);
this.mbn.setBaseNumber$I(Integer.parseInt$S(attributes.getValue$S($I$(15).XML_VAR_NUMBER_NAME)));
this.mbn.setLabel$S(attributes.getValue$S($I$(15).XML_VAR_LABEL_NAME));
this.mbn.setColorie$Boolean(new Boolean($I$(16).parseBoolean$S(attributes.getValue$S($I$(15).XML_VAR_CUSTOM_DRAWN_NAME))));
this.mbn.setValue$D(Double.parseDouble$S(attributes.getValue$S($I$(15).XML_VAR_VALUE_NAME)));
this.rna.addBase$fr_orsay_lri_varna_models_rna_ModeleBase(this.mbn);
}} else if (qName.equals$O($I$(17).XML_FONT_ELEMENT_NAME)) {
this.f=$I$(17).getFont$S$org_xml_sax_Attributes(qName, attributes);
if (p$1.contextContains$S.apply(this, [$I$(13).XML_ELEMENT_NAME])) {
this.ta.setFont$java_awt_Font(this.f);
this.f=null;
} else if (p$1.contextContains$S.apply(this, [$I$(7).XML_ELEMENT_NAME])) {
var role=attributes.getValue$S($I$(17).XML_ROLE_NAME);
if (role.equals$O($I$(7).XML_VAR_TITLE_FONT)) {
this.config._titleFont=$I$(17).getFont$S$org_xml_sax_Attributes(qName, attributes);
} else if (role.equals$O($I$(7).XML_VAR_NUMBERS_FONT)) {
this.config._numbersFont=$I$(17).getFont$S$org_xml_sax_Attributes(qName, attributes);
} else if (role.equals$O($I$(7).XML_VAR_FONT_BASES)) {
this.config._fontBasesGeneral=$I$(17).getFont$S$org_xml_sax_Attributes(qName, attributes);
}}} else if (qName.equals$O($I$(14).XML_VAR_CONTENT_NAME)) {
this._buffer=Clazz.new_($I$(18));
} else if (qName.equals$O($I$(19).XML_VAR_FIRST_CONTENT_NAME)) {
this._buffer=Clazz.new_($I$(18));
} else if (qName.equals$O($I$(19).XML_VAR_SECOND_CONTENT_NAME)) {
this._buffer=Clazz.new_($I$(18));
} else if (qName.equals$O($I$(19).XML_ELEMENT_NAME)) {
if (this.rna != null ) {
this.mbc=Clazz.new_($I$(19).c$$I,[this.rna.getSize$()]);
if (this.mbc.getIndex$() != Integer.parseInt$S(attributes.getValue$S($I$(15).XML_VAR_INDEX_NAME))) throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["Index mismatch for Base"]);
this.mbc.setBaseNumber$I(Integer.parseInt$S(attributes.getValue$S($I$(15).XML_VAR_NUMBER_NAME)));
this.mbc.setLabel$S(attributes.getValue$S($I$(15).XML_VAR_LABEL_NAME));
this.mbc.set_appartenance$I(Integer.parseInt$S(attributes.getValue$S($I$(19).XML_VAR_MEMBERSHIP_NAME)));
this.mbc.setColorie$Boolean(new Boolean($I$(16).parseBoolean$S(attributes.getValue$S($I$(15).XML_VAR_CUSTOM_DRAWN_NAME))));
this.mbc.setValue$D(Double.parseDouble$S(attributes.getValue$S($I$(15).XML_VAR_VALUE_NAME)));
this.rna.addBase$fr_orsay_lri_varna_models_rna_ModeleBase(this.mbc);
}} else if (qName.equals$O($I$(8).XML_VAR_NAME_NAME)) {
if (this.rna != null ) {
this._buffer=Clazz.new_($I$(18));
}} else if (qName.equals$O($I$(20).XML_ELEMENT_NAME)) {
var e5=$I$(21).valueOf$S(attributes.getValue$S($I$(20).XML_VAR_EDGE5_NAME));
var e3=$I$(21).valueOf$S(attributes.getValue$S($I$(20).XML_VAR_EDGE3_NAME));
var s=$I$(22).valueOf$S(attributes.getValue$S($I$(20).XML_VAR_STERICITY_NAME));
var i5=Integer.parseInt$S(attributes.getValue$S($I$(20).XML_VAR_PARTNER5_NAME));
var i3=Integer.parseInt$S(attributes.getValue$S($I$(20).XML_VAR_PARTNER3_NAME));
var inSecStr=$I$(16).parseBoolean$S(attributes.getValue$S($I$(20).XML_VAR_SEC_STR_NAME));
this.mbp=Clazz.new_($I$(20).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$fr_orsay_lri_varna_models_rna_ModeleBP_Stericity,[this.rna.getBaseAt$I(i5), this.rna.getBaseAt$I(i3), e5, e3, s]);
if (inSecStr) this.rna.addBP$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(i5, i3, this.mbp);
 else this.rna.addBPAux$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(i5, i3, this.mbp);
} else if (qName.equals$O($I$(23).XML_ELEMENT_NAME)) {
var i5=Integer.parseInt$S(attributes.getValue$S($I$(23).XML_VAR_INDEX5_NAME));
var i3=Integer.parseInt$S(attributes.getValue$S($I$(23).XML_VAR_INDEX3_NAME));
var cpa=Clazz.new_($I$(23).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase,[this.rna.getBaseAt$I(i5), this.rna.getBaseAt$I(i3)]);
cpa.setColor$java_awt_Color($I$(12).decode$S(attributes.getValue$S($I$(23).XML_VAR_COLOR_NAME)));
cpa.setIntensity$D(Double.parseDouble$S(attributes.getValue$S($I$(23).XML_VAR_INTENSITY_NAME)));
cpa.setType$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType($I$(24).valueOf$S(attributes.getValue$S($I$(23).XML_VAR_TYPE_NAME)));
cpa.setOut$Z($I$(16).parseBoolean$S(attributes.getValue$S($I$(23).XML_VAR_OUTWARD_NAME)));
this.rna.addChemProbAnnotation$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation(cpa);
} else if (qName.equals$O($I$(13).XML_VAR_TEXT_NAME)) {
this._buffer=Clazz.new_($I$(18));
} else if (qName.equals$O($I$(7).XML_VAR_TITLE)) {
this._buffer=Clazz.new_($I$(18));
} else if (qName.equals$O($I$(7).XML_VAR_CM_CAPTION)) {
this._buffer=Clazz.new_($I$(18));
} else if (qName.equals$O($I$(13).XML_ELEMENT_NAME)) {
var t=$I$(25).valueOf$S(attributes.getValue$S($I$(13).XML_VAR_TYPE_NAME));
this.ta=Clazz.new_($I$(13).c$$S,[""]);
this.ta.setColor$java_awt_Color($I$(12).decode$S(attributes.getValue$S($I$(13).XML_VAR_COLOR_NAME)));
this.ta.setAngleInDegres$D(Double.parseDouble$S(attributes.getValue$S($I$(13).XML_VAR_ANGLE_NAME)));
this.ta.setType$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType(t);
} else if (qName.equals$O($I$(26).XML_ELEMENT_NAME)) {
this.hra=Clazz.new_($I$(26));
this.rna.addHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation(this.hra);
this.hra.setOutlineColor$java_awt_Color($I$(12).decode$S(attributes.getValue$S($I$(26).XML_VAR_OUTLINE_NAME)));
this.hra.setFillColor$java_awt_Color($I$(12).decode$S(attributes.getValue$S($I$(26).XML_VAR_FILL_NAME)));
this.hra.setRadius$D(Double.parseDouble$S(attributes.getValue$S($I$(26).XML_VAR_RADIUS_NAME)));
} else if (qName.equals$O($I$(17).XML_BASELIST_ELEMENT_NAME)) {
this._buffer=Clazz.new_($I$(18));
} else if (qName.equals$O($I$(27).XML_ELEMENT_NAME)) {
var vp=Clazz.new_($I$(28));
vp.x=Double.parseDouble$S(attributes.getValue$S($I$(27).XML_VAR_X_NAME));
vp.y=Double.parseDouble$S(attributes.getValue$S($I$(27).XML_VAR_Y_NAME));
var role=attributes.getValue$S($I$(27).XML_VAR_ROLE_NAME);
if (p$1.contextContains$S.apply(this, [$I$(14).XML_ELEMENT_NAME])) {
if (role != null ) {
if (role.equals$O($I$(15).XML_VAR_POSITION_NAME)) {
if (this.mbn != null ) {
this.mbn.setCoords$java_awt_geom_Point2D_Double(vp);
} else throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["No Base model for this position Point"]);
} else if (role.equals$O($I$(15).XML_VAR_CENTER_NAME)) {
if (this.mbn != null ) {
this.mbn.setCenter$java_awt_geom_Point2D_Double(vp);
} else throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["No Base model for this center Point"]);
}}}if (p$1.contextContains$S.apply(this, [$I$(19).XML_ELEMENT_NAME])) {
if (role != null ) {
if (role.equals$O($I$(15).XML_VAR_POSITION_NAME)) {
if (this.mbc != null ) {
this.mbc.setCoords$java_awt_geom_Point2D_Double(vp);
} else throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["No Base model for this position Point"]);
} else if (role.equals$O($I$(15).XML_VAR_CENTER_NAME)) {
if (this.mbc != null ) {
this.mbc.setCenter$java_awt_geom_Point2D_Double(vp);
} else throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["No Base model for this center Point"]);
}}}if (p$1.contextContains$S.apply(this, [$I$(13).XML_ELEMENT_NAME])) {
if (this.ta != null ) this.ta.setAncrage$D$D(vp.x, vp.y);
 else throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["No TextAnnotation model for this Point"]);
}} else if (qName.equals$O($I$(29).XML_ELEMENT_NAME)) {
this.msb=Clazz.new_($I$(29));
this.msb.setBaseOutlineColor$java_awt_Color($I$(12).decode$S(attributes.getValue$S($I$(29).XML_VAR_OUTLINE_NAME)));
this.msb.setBaseInnerColor$java_awt_Color($I$(12).decode$S(attributes.getValue$S($I$(29).XML_VAR_INNER_NAME)));
this.msb.setBaseNameColor$java_awt_Color($I$(12).decode$S(attributes.getValue$S($I$(29).XML_VAR_NAME_NAME)));
this.msb.setBaseNumberColor$java_awt_Color($I$(12).decode$S(attributes.getValue$S($I$(29).XML_VAR_NUMBER_NAME)));
if (this.mbn != null ) {
this.mbn.setStyleBase$fr_orsay_lri_varna_models_rna_ModelBaseStyle(this.msb);
} else if (this.mbc != null ) {
this.mbc.setStyleBase$fr_orsay_lri_varna_models_rna_ModelBaseStyle(this.msb);
}this.msb=null;
} else if (qName.equals$O($I$(30).XML_ELEMENT_NAME)) {
this.mbps=Clazz.new_($I$(30));
var customColor=$I$(16).parseBoolean$S(attributes.getValue$S($I$(30).XML_VAR_CUSTOM_STYLED_NAME));
if (customColor) this.mbps.setCustomColor$java_awt_Color($I$(12).decode$S(attributes.getValue$S($I$(30).XML_VAR_COLOR_NAME)));
this.mbps.setThickness$D(Double.parseDouble$S(attributes.getValue$S($I$(30).XML_VAR_THICKNESS_NAME)));
this.mbps.setBent$D(Double.parseDouble$S(attributes.getValue$S($I$(30).XML_VAR_BENT_NAME)));
if (this.mbp != null ) {
this.mbp.setStyle$fr_orsay_lri_varna_models_rna_ModeleBPStyle(this.mbps);
}this.mbps=null;
}p$1.addToContext$S.apply(this, [qName]);
});

Clazz.newMeth(C$, 'endElement$S$S$S', function (uri, localName, qName) {
if (qName.equals$O($I$(14).XML_VAR_CONTENT_NAME)) {
if (this._buffer == null ) {
throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["Invalid location for tag " + $I$(14).XML_VAR_CONTENT_NAME]);
}if (this.mbn == null ) {
throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["Invalid location for tag " + $I$(14).XML_VAR_CONTENT_NAME]);
}var val=this._buffer.toString();
this.mbn.setContent$S(val);
} else if (qName.equals$O($I$(19).XML_VAR_FIRST_CONTENT_NAME)) {
if (this._buffer == null ) {
throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["Invalid location for tag " + $I$(14).XML_VAR_CONTENT_NAME]);
}if (this.mbc == null ) {
throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["Invalid location for tag " + $I$(14).XML_VAR_CONTENT_NAME]);
}var val=this._buffer.toString();
this.mbc.setBase1$Character(new Character(val.trim$().charAt$I(0)));
} else if (qName.equals$O($I$(19).XML_VAR_SECOND_CONTENT_NAME)) {
if (this._buffer == null ) {
throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["Invalid location for tag " + $I$(14).XML_VAR_CONTENT_NAME]);
}if (this.mbc == null ) {
throw Clazz.new_(Clazz.load('org.xml.sax.SAXException').c$$S,["Invalid location for tag " + $I$(14).XML_VAR_CONTENT_NAME]);
}var val=this._buffer.toString();
this.mbc.setBase2$Character(new Character(val.trim$().charAt$I(0)));
} else if (qName.equals$O($I$(14).XML_ELEMENT_NAME)) {
this.mbn=null;
} else if (qName.equals$O($I$(20).XML_ELEMENT_NAME)) {
this.mbp=null;
} else if (qName.equals$O($I$(26).XML_ELEMENT_NAME)) {
this.hra=null;
} else if (qName.equals$O($I$(13).XML_VAR_TEXT_NAME)) {
var text=this._buffer.toString();
this.ta.setText$S(text);
this._buffer=null;
} else if (qName.equals$O($I$(8).XML_VAR_NAME_NAME)) {
if (this.rna != null ) {
this.rna.setName$S(this._buffer.toString());
this._buffer=null;
}} else if (qName.equals$O($I$(7).XML_VAR_CM_CAPTION)) {
this.config._colorMapCaption=this._buffer.toString();
this._buffer=null;
} else if (qName.equals$O($I$(13).XML_ELEMENT_NAME)) {
this.rna.addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(this.ta);
this.ta=null;
} else if (qName.equals$O($I$(17).XML_BASELIST_ELEMENT_NAME)) {
var result=this._buffer.toString();
var al=$I$(17).toModeleBaseArray$S$fr_orsay_lri_varna_models_rna_RNA(result, this.rna);
if (p$1.contextContains$S.apply(this, [$I$(13).XML_ELEMENT_NAME])) {
switch (this.ta.getType$()) {
case $I$(25).POSITION:
break;
case $I$(25).BASE:
this.ta.setAncrage$fr_orsay_lri_varna_models_rna_ModeleBase(al.get$I(0));
break;
case $I$(25).HELIX:
case $I$(25).LOOP:
try {
this.ta.setAncrage$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType(al, this.ta.getType$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
break;
default:
}
}if (p$1.contextContains$S.apply(this, [$I$(26).XML_ELEMENT_NAME])) {
this.hra.setBases$java_util_ArrayList(al);
}this._buffer=null;
}p$1.removeFromContext$S.apply(this, [qName]);
});

Clazz.newMeth(C$, 'characters$CA$I$I', function (ch, start, length) {
var lecture= String.instantialize(ch, start, length);
if (this._buffer != null ) this._buffer.append$S(lecture);
});

Clazz.newMeth(C$, 'startDocument$', function () {
});

Clazz.newMeth(C$, 'endDocument$', function () {
});

Clazz.newMeth(C$, 'getRNA$', function () {
return this.rna;
});

Clazz.newMeth(C$, 'getVARNAConfig$', function () {
return this.config;
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:30:03 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
