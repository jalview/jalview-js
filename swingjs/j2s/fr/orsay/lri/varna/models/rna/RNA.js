(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),p$1={},I$=[[0,'java.util.ArrayList','fr.orsay.lri.varna.models.rna.StructureTemp','fr.orsay.lri.varna.models.rna.ModeleBackbone','org.xml.sax.helpers.AttributesImpl','fr.orsay.lri.varna.utils.XMLUtils','java.io.FileWriter','fr.orsay.lri.varna.exceptions.ExceptionWritingForbidden','java.awt.Color',['fr.orsay.lri.varna.models.rna.ModeleBP','.Edge'],['java.awt.geom.Point2D','.Double'],['fr.orsay.lri.varna.models.VARNAConfig','.BP_STYLE'],'fr.orsay.lri.varna.models.VARNAConfig',['fr.orsay.lri.varna.models.rna.ModeleBackboneElement','.BackboneType'],'fr.orsay.lri.varna.VARNAPanel','java.io.OutputStreamWriter','java.io.FileOutputStream',['fr.orsay.lri.varna.models.annotations.ChemProbAnnotation','.ChemProbAnnotationType'],'java.awt.geom.GeneralPath',['fr.orsay.lri.varna.models.annotations.TextAnnotation','.AnchorType'],'fr.orsay.lri.varna.models.export.PSExport','fr.orsay.lri.varna.models.export.XFIGExport','fr.orsay.lri.varna.models.export.TikzExport','fr.orsay.lri.varna.models.export.SVGExport',['java.awt.geom.Rectangle2D','.Double'],'fr.orsay.lri.varna.models.rna.VARNASecDraw','fr.orsay.lri.varna.models.templates.DrawRNATemplateMethod','fr.orsay.lri.varna.models.templates.DrawRNATemplateCurveMethod','fr.orsay.lri.varna.models.rna.DrawRNATemplate','java.util.Vector','fr.orsay.lri.varna.applications.templateEditor.Couple','fr.orsay.lri.varna.models.naView.NAView','java.util.HashSet','fr.orsay.lri.varna.models.rna.ModeleBackboneElement','fr.orsay.lri.varna.models.rna.ModeleBaseNucleotide','fr.orsay.lri.varna.models.rna.ModeleBasesComparison','fr.orsay.lri.varna.factories.RNAFactory','java.util.Stack','fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses','java.awt.Point','fr.orsay.lri.varna.models.rna.ModeleBP','java.util.Arrays','fr.orsay.lri.varna.exceptions.ExceptionExportFailed','fr.orsay.lri.varna.utils.RNAMLParser','fr.orsay.lri.varna.models.annotations.TextAnnotation','java.util.Hashtable','java.io.StreamTokenizer','java.io.ByteArrayOutputStream','java.io.ObjectOutputStream','java.io.ObjectInputStream','java.io.ByteArrayInputStream','fr.orsay.lri.varna.models.annotations.HighlightRegionAnnotation']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RNA", null, 'fr.orsay.lri.varna.interfaces.InterfaceVARNAObservable', 'java.io.Serializable');
C$.CHEM_PROB_ARROW_THICKNESS=0;
C$.NormalBases=null;
C$.XML_ELEMENT_NAME=null;
C$.XML_VAR_BASE_SPACING_NAME=null;
C$.XML_VAR_DRAWN_NAME=null;
C$.XML_VAR_NAME_NAME=null;
C$.XML_VAR_DRAWN_MODE_NAME=null;
C$.XML_VAR_ID_NAME=null;
C$.XML_VAR_BP_HEIGHT_NAME=null;
C$.XML_VAR_BASES_NAME=null;
C$.XML_VAR_BASEPAIRS_NAME=null;
C$.XML_VAR_ANNOTATIONS_NAME=null;
C$.XML_VAR_BACKBONE_NAME=null;
C$.HYSTERESIS_EPSILON=0;
C$.HYSTERESIS_ATTRACTORS=null;
C$.DBNStrandSep=null;
C$.MIN_DISTANCE=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.CHEM_PROB_ARROW_THICKNESS=2.0;
C$.NormalBases=Clazz.new_($I$(1));
C$.XML_ELEMENT_NAME="RNA";
C$.XML_VAR_BASE_SPACING_NAME="spacing";
C$.XML_VAR_DRAWN_NAME="drawn";
C$.XML_VAR_NAME_NAME="name";
C$.XML_VAR_DRAWN_MODE_NAME="mode";
C$.XML_VAR_ID_NAME="id";
C$.XML_VAR_BP_HEIGHT_NAME="delta";
C$.XML_VAR_BASES_NAME="bases";
C$.XML_VAR_BASEPAIRS_NAME="BPs";
C$.XML_VAR_ANNOTATIONS_NAME="annotations";
C$.XML_VAR_BACKBONE_NAME="backbone";
C$.HYSTERESIS_EPSILON=0.15;
C$.HYSTERESIS_ATTRACTORS=Clazz.array(Double.TYPE, -1, [0.0, 0.7853981633974483, 1.5707963267948966, 2.356194490192345, 3.141592653589793, 3.9269908169872414, 4.71238898038469, 5.497787143782138]);
C$.DBNStrandSep="&";
C$.MIN_DISTANCE=10.0;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.BASE_RADIUS=0;
this.CHEM_PROB_DIST=0;
this.CHEM_PROB_BASE_LENGTH=0;
this.CHEM_PROB_ARROW_HEIGHT=0;
this.CHEM_PROB_ARROW_WIDTH=0;
this.CHEM_PROB_TRIANGLE_WIDTH=0;
this.CHEM_PROB_PIN_SEMIDIAG=0;
this.CHEM_PROB_DOT_RADIUS=0;
this._debugShape=null;
this._drawMode=0;
this._drawn=false;
this._name=null;
this._id=null;
this._bpHeightIncrement=0;
this._listeBases=null;
this._listStrands=null;
this._structureAux=null;
this._listeAnnotations=null;
this._listeRegionHighlights=null;
this._chemProbAnnotations=null;
this._backbone=null;
this._listeVARNAListener=null;
this._strandEndsAnnotated=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.BASE_RADIUS=10;
this.CHEM_PROB_DIST=14;
this.CHEM_PROB_BASE_LENGTH=30;
this.CHEM_PROB_ARROW_HEIGHT=10;
this.CHEM_PROB_ARROW_WIDTH=5;
this.CHEM_PROB_TRIANGLE_WIDTH=2.5;
this.CHEM_PROB_PIN_SEMIDIAG=6;
this.CHEM_PROB_DOT_RADIUS=6.0;
{
C$.NormalBases.add$TE("a");
C$.NormalBases.add$TE("c");
C$.NormalBases.add$TE("g");
C$.NormalBases.add$TE("u");
C$.NormalBases.add$TE("t");
}
this._debugShape=null;
this._drawMode=2;
this._drawn=false;
this._name="";
this._id="";
this._bpHeightIncrement=0.65;
this._listStrands=Clazz.new_($I$(2));
this._structureAux=Clazz.new_($I$(1));
this._listeAnnotations=Clazz.new_($I$(1));
this._listeRegionHighlights=Clazz.new_($I$(1));
this._chemProbAnnotations=Clazz.new_($I$(1));
this._backbone=Clazz.new_($I$(3));
this._listeVARNAListener=Clazz.new_($I$(1));
this._strandEndsAnnotated=false;
}, 1);

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(4));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_DRAWN_NAME, "CDATA", "" + this._drawn);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_DRAWN_MODE_NAME, "CDATA", "" + this._drawMode);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_ID_NAME, "CDATA", "" + this._id);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_BP_HEIGHT_NAME, "CDATA", "" + new Double(this._bpHeightIncrement).toString());
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
atts.clear$();
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_VAR_NAME_NAME, atts);
$I$(5).exportCDATAString$javax_xml_transform_sax_TransformerHandler$S(hd, "" + this._name);
hd.endElement$S$S$S("", "", C$.XML_VAR_NAME_NAME);
atts.clear$();
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_VAR_BASES_NAME, atts);
for (var mb, $mb = this._listeBases.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
mb.toXML$javax_xml_transform_sax_TransformerHandler(hd);
}
hd.endElement$S$S$S("", "", C$.XML_VAR_BASES_NAME);
atts.clear$();
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_VAR_BASEPAIRS_NAME, atts);
for (var mbp, $mbp = this.getSecStrBPs$().iterator$(); $mbp.hasNext$()&&((mbp=($mbp.next$())),1);) {
mbp.toXML$javax_xml_transform_sax_TransformerHandler$Z(hd, true);
}
for (var mbp, $mbp = this._structureAux.iterator$(); $mbp.hasNext$()&&((mbp=($mbp.next$())),1);) {
mbp.toXML$javax_xml_transform_sax_TransformerHandler$Z(hd, false);
}
hd.endElement$S$S$S("", "", C$.XML_VAR_BASEPAIRS_NAME);
atts.clear$();
this.getBackbone$().toXML$javax_xml_transform_sax_TransformerHandler(hd);
atts.clear$();
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_VAR_ANNOTATIONS_NAME, atts);
for (var ta, $ta = this._listeAnnotations.iterator$(); $ta.hasNext$()&&((ta=($ta.next$())),1);) {
ta.toXML$javax_xml_transform_sax_TransformerHandler(hd);
}
for (var hra, $hra = this._listeRegionHighlights.iterator$(); $hra.hasNext$()&&((hra=($hra.next$())),1);) {
hra.toXML$javax_xml_transform_sax_TransformerHandler(hd);
}
for (var cpa, $cpa = this._chemProbAnnotations.iterator$(); $cpa.hasNext$()&&((cpa=($cpa.next$())),1);) {
cpa.toXML$javax_xml_transform_sax_TransformerHandler(hd);
}
hd.endElement$S$S$S("", "", C$.XML_VAR_ANNOTATIONS_NAME);
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'getBackbone$', function () {
return this._backbone;
});

Clazz.newMeth(C$, 'setBackbone$fr_orsay_lri_varna_models_rna_ModeleBackbone', function (b) {
this._backbone=b;
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S.apply(this, [""]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
Clazz.super_(C$, this,1);
this._name=name;
this._listeBases=Clazz.new_($I$(1));
this._drawn=false;
this.init$();
}, 1);

Clazz.newMeth(C$, 'toString', function () {
if (this._name.equals$O("")) {
return this.getStructDBN$();
} else {
return this._name;
}});

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA', function (r) {
Clazz.super_(C$, this,1);
this._drawMode=r._drawMode;
this._listeBases.addAll$java_util_Collection(r._listeBases);
this._listeVARNAListener=r._listeVARNAListener;
this._drawn=r._drawn;
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$', function () {
});

Clazz.newMeth(C$, 'saveRNADBN$S$S', function (path, title) {
try {
var out=Clazz.new_($I$(6).c$$S,[path]);
if (!title.equals$O("")) {
out.write$S("> " + title + "\n" );
}out.write$S(this.getListeBasesToString$());
out.write$I("\n".$c());
var str="";
for (var i=0; i < this._listeBases.size$(); i++) {
if (this._listeBases.get$I(i).getElementStructure$() == -1) {
str += ".";
} else {
if (this._listeBases.get$I(i).getElementStructure$() > i) {
str += "(";
} else {
str += ")";
}}}
out.write$S(str);
out.write$I("\n".$c());
out.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(7).c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getBaseInnerColor$I$fr_orsay_lri_varna_models_VARNAConfig', function (i, conf) {
var result=this._listeBases.get$I(i).getStyleBase$().getBaseInnerColor$();
var res=this._listeBases.get$I(i).getContent$();
if (conf._drawColorMap) {
result=conf._cm.getColorForValue$D(this._listeBases.get$I(i).getValue$());
} else if ((conf._colorDashBases && (res.contains$CharSequence("-")) )) {
result=conf._dashBasesColor;
} else if ((conf._colorSpecialBases && !C$.NormalBases.contains$O(res.toLowerCase$()) )) {
result=conf._specialBasesColor;
}return result;
});

Clazz.newMeth(C$, 'getBaseOuterColor$I$fr_orsay_lri_varna_models_VARNAConfig', function (i, conf) {
var result=this._listeBases.get$I(i).getStyleBase$().getBaseOutlineColor$();
return result;
});

Clazz.newMeth(C$, 'correctComponent$D', function (c) {
c=c / 255.0;
if (c <= 0.03928 ) c=c / 12.92;
 else c=Math.pow(((c + 0.055) / 1.055), 2.4);
return c;
}, 1);

Clazz.newMeth(C$, 'getLuminance$java_awt_Color', function (c) {
return 0.2126 * C$.correctComponent$D(c.getRed$()) + 0.7152 * C$.correctComponent$D(c.getGreen$()) + 0.0722 * C$.correctComponent$D(c.getBlue$());
}, 1);

Clazz.newMeth(C$, 'whiteLabelPreferrable$java_awt_Color', function (c) {
if (C$.getLuminance$java_awt_Color(c) > 0.32 ) return false;
return true;
}, 1);

Clazz.newMeth(C$, 'getBaseNameColor$I$fr_orsay_lri_varna_models_VARNAConfig', function (i, conf) {
var result=this._listeBases.get$I(i).getStyleBase$().getBaseNameColor$();
if (C$.whiteLabelPreferrable$java_awt_Color(this.getBaseInnerColor$I$fr_orsay_lri_varna_models_VARNAConfig(i, conf))) {
result=$I$(8).white;
}return result;
});

Clazz.newMeth(C$, 'getBasePairColor$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig', function (bp, conf) {
var bondColor=conf._bondColor;
if (conf._useBaseColorsForBPs) {
bondColor=this._listeBases.get$I(bp.getPartner5$().getIndex$()).getStyleBase$().getBaseInnerColor$();
}if (bp != null ) {
bondColor=bp.getStyle$().getColor$java_awt_Color(bondColor);
}return bondColor;
});

Clazz.newMeth(C$, 'getBasePairThickness$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig', function (bp, conf) {
var thickness=bp.getStyle$().getThickness$D(conf._bpThickness);
return thickness;
});

Clazz.newMeth(C$, 'drawSymbol$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$D', function (out, posx, posy, normx, normy, radius, isCIS, e, thickness) {
var bck=out.getCurrentColor$();
switch (e) {
case $I$(9).WC:
if (isCIS) {
out.fillCircle$D$D$D$D$java_awt_Color(posx, posy, (radius / 2.0), thickness, bck);
} else {
out.fillCircle$D$D$D$D$java_awt_Color(posx, posy, (radius / 2.0), thickness, $I$(8).white);
out.setColor$java_awt_Color(bck);
out.drawCircle$D$D$D$D(posx, posy, (radius / 2.0), thickness);
}break;
case $I$(9).HOOGSTEEN:
{
var xtab=Clazz.array(Double.TYPE, [4]);
var ytab=Clazz.array(Double.TYPE, [4]);
xtab[0]=posx - radius * normx / 2.0 - radius * normy / 2.0;
ytab[0]=posy - radius * normy / 2.0 + radius * normx / 2.0;
xtab[1]=posx + radius * normx / 2.0 - radius * normy / 2.0;
ytab[1]=posy + radius * normy / 2.0 + radius * normx / 2.0;
xtab[2]=posx + radius * normx / 2.0 + radius * normy / 2.0;
ytab[2]=posy + radius * normy / 2.0 - radius * normx / 2.0;
xtab[3]=posx - radius * normx / 2.0 + radius * normy / 2.0;
ytab[3]=posy - radius * normy / 2.0 - radius * normx / 2.0;
if (isCIS) {
out.fillPolygon$DA$DA$java_awt_Color(xtab, ytab, bck);
} else {
out.fillPolygon$DA$DA$java_awt_Color(xtab, ytab, $I$(8).white);
out.setColor$java_awt_Color(bck);
out.drawPolygon$DA$DA$D(xtab, ytab, thickness);
}}break;
case $I$(9).SUGAR:
{
var ix=radius * normx / 2.0;
var iy=radius * normy / 2.0;
var jx=radius * normy / 2.0;
var jy=-radius * normx / 2.0;
var xtab=Clazz.array(Double.TYPE, [3]);
var ytab=Clazz.array(Double.TYPE, [3]);
xtab[0]=posx - ix + jx;
ytab[0]=posy - iy + jy;
xtab[1]=posx + ix + jx ;
ytab[1]=posy + iy + jy ;
xtab[2]=posx - jx;
ytab[2]=posy - jy;
if (isCIS) {
out.fillPolygon$DA$DA$java_awt_Color(xtab, ytab, bck);
} else {
out.fillPolygon$DA$DA$java_awt_Color(xtab, ytab, $I$(8).white);
out.setColor$java_awt_Color(bck);
out.drawPolygon$DA$DA$D(xtab, ytab, thickness);
}}break;
}
out.setColor$java_awt_Color(bck);
}, p$1);

Clazz.newMeth(C$, 'drawBasePairArc$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig', function (out, i, j, orig, dest, style, conf) {
var coef;
var distance;
var center=Clazz.new_($I$(10).c$$D$D,[(orig.x + dest.x) / 2.0, (orig.y + dest.y) / 2.0 + this.BASE_RADIUS]);
if (j - i == 1) coef=this._bpHeightIncrement * 2;
 else coef=this._bpHeightIncrement * 1;
distance=(Math.round(dest.x - orig.x)|0);
if (conf._mainBPStyle !== $I$(11).LW ) {
out.drawArc$java_awt_geom_Point2D_Double$D$D$D$D(center, distance, distance * coef, 180, 0);
} else {
var thickness=this.getBasePairThickness$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig(style, conf);
var radiusCircle=((65.0 - this.BASE_RADIUS) / 5.0);
if (style.isCanonical$()) {
if (style.isCanonicalGC$()) {
if ((orig.x != dest.x ) || (orig.y != dest.y ) ) {
out.drawArc$java_awt_geom_Point2D_Double$D$D$D$D(center, distance - this.BASE_RADIUS / 2.0, distance * coef - (this.BASE_RADIUS/2|0), 180, 0);
out.drawArc$java_awt_geom_Point2D_Double$D$D$D$D(center, distance + this.BASE_RADIUS / 2.0, distance * coef + (this.BASE_RADIUS/2|0), 180, 0);
}} else if (!style.isWobbleUG$()) {
out.drawArc$java_awt_geom_Point2D_Double$D$D$D$D(center, distance, distance * coef, 180, 0);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$D.apply(this, [out, center.x, center.y + distance * coef / 2.0, 180.0, 0, radiusCircle, style.isCIS$(), style.getEdgePartner5$(), thickness]);
} else {
out.drawArc$java_awt_geom_Point2D_Double$D$D$D$D(orig, distance, distance * coef, 180, 0);
}} else {
var p1=style.getEdgePartner5$();
var p2=style.getEdgePartner3$();
out.drawArc$java_awt_geom_Point2D_Double$D$D$D$D(center, distance, distance * coef, 180, 0);
if (p1 === p2 ) {
p$1.drawSymbol$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$D.apply(this, [out, center.x, center.y + distance * coef / 2.0, 1.0, 0, radiusCircle, style.isCIS$(), style.getEdgePartner5$(), thickness]);
} else {
p$1.drawSymbol$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$D.apply(this, [out, center.x - this.BASE_RADIUS, center.y + distance * coef / 2.0, 1.0, 0, radiusCircle, style.isCIS$(), p1, thickness]);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$D.apply(this, [out, center.x + this.BASE_RADIUS, center.y + distance * coef / 2.0, 1.0, 0, radiusCircle, style.isCIS$(), p2, thickness]);
}}}}, p$1);

Clazz.newMeth(C$, 'drawBasePair$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig', function (out, orig, dest, style, conf) {
var dx=dest.x - orig.x;
var dy=dest.y - orig.y;
var dist=Math.sqrt((dest.x - orig.x) * (dest.x - orig.x) + (dest.y - orig.y) * (dest.y - orig.y));
dx /= dist;
dy /= dist;
var nx=-dy;
var ny=dx;
orig=Clazz.new_($I$(10).c$$D$D,[orig.x + this.BASE_RADIUS * dx, orig.y + this.BASE_RADIUS * dy]);
dest=Clazz.new_($I$(10).c$$D$D,[dest.x - this.BASE_RADIUS * dx, dest.y - this.BASE_RADIUS * dy]);
if (conf._mainBPStyle === $I$(11).LW ) {
var thickness=this.getBasePairThickness$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig(style, conf);
var radiusCircle=((65.0 - this.BASE_RADIUS) / 5.0);
if (style.isCanonical$()) {
if (style.isCanonicalGC$()) {
if ((orig.x != dest.x ) || (orig.y != dest.y ) ) {
nx *= this.BASE_RADIUS / 4.0;
ny *= this.BASE_RADIUS / 4.0;
out.drawLine$D$D$D$D$D((orig.x + nx), (orig.y + ny), (dest.x + nx), (dest.y + ny), conf._bpThickness);
out.drawLine$D$D$D$D$D((orig.x - nx), (orig.y - ny), (dest.x - nx), (dest.y - ny), conf._bpThickness);
}} else if (style.isCanonicalAU$()) {
out.drawLine$D$D$D$D$D(orig.x, orig.y, dest.x, dest.y, conf._bpThickness);
} else if (style.isWobbleUG$()) {
var cx=(dest.x + orig.x) / 2.0;
var cy=(dest.y + orig.y) / 2.0;
out.drawLine$D$D$D$D$D(orig.x, orig.y, dest.x, dest.y, conf._bpThickness);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$D.apply(this, [out, cx, cy, nx, ny, radiusCircle, false, $I$(9).WC, thickness]);
} else {
var cx=(dest.x + orig.x) / 2.0;
var cy=(dest.y + orig.y) / 2.0;
out.drawLine$D$D$D$D$D(orig.x, orig.y, dest.x, dest.y, conf._bpThickness);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$D.apply(this, [out, cx, cy, nx, ny, radiusCircle, style.isCIS$(), style.getEdgePartner5$(), thickness]);
}} else {
var p1=style.getEdgePartner5$();
var p2=style.getEdgePartner3$();
var cx=(dest.x + orig.x) / 2.0;
var cy=(dest.y + orig.y) / 2.0;
out.drawLine$D$D$D$D$D(orig.x, orig.y, dest.x, dest.y, conf._bpThickness);
if (p1 === p2 ) {
p$1.drawSymbol$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$D.apply(this, [out, cx, cy, nx, ny, radiusCircle, style.isCIS$(), p1, thickness]);
} else {
var vdx=(dest.x - orig.x);
var vdy=(dest.y - orig.y);
vdx /= 6.0;
vdy /= 6.0;
p$1.drawSymbol$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$D.apply(this, [out, cx + vdx, cy + vdy, nx, ny, radiusCircle, style.isCIS$(), p2, thickness]);
p$1.drawSymbol$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$D$D$D$Z$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$D.apply(this, [out, cx - vdx, cy - vdy, nx, ny, radiusCircle, style.isCIS$(), p1, thickness]);
}}} else if (conf._mainBPStyle === $I$(11).RNAVIZ ) {
var xcenter=(orig.x + dest.x) / 2.0;
var ycenter=(orig.y + dest.y) / 2.0;
out.fillCircle$D$D$D$D$java_awt_Color(xcenter, ycenter, 3.0 * conf._bpThickness, conf._bpThickness, out.getCurrentColor$());
} else if (conf._mainBPStyle === $I$(11).SIMPLE ) {
out.drawLine$D$D$D$D$D(orig.x, orig.y, dest.x, dest.y, conf._bpThickness);
}}, p$1);

Clazz.newMeth(C$, 'drawColorMap$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_export_SecStrDrawingProducer', function (_conf, out) {
var v1=_conf._cm.getMinValue$();
var v2=_conf._cm.getMaxValue$();
var x;
var y;
var xSpaceAvail=0;
var ySpaceAvail=0;
var thickness=1.0;
var currentBBox=out.getBoundingBox$();
var xBase=(currentBBox.getMaxX$() - _conf._colorMapWidth - _conf._colorMapXOffset );
var yBase=(currentBBox.getMinY$() - _conf._colorMapHeight - $I$(12).DEFAULT_COLOR_MAP_FONT_SIZE );
for (var i=0; i < _conf._colorMapWidth ; i++) {
var ratio=((i) / (_conf._colorMapWidth - 1));
var val=v1 + (v2 - v1) * ratio;
var c=_conf._cm.getColorForValue$D(val);
x=((xBase + i)|0);
y=(yBase|0);
out.fillRectangle$D$D$D$D$java_awt_Color(x, y, $I$(12).DEFAULT_COLOR_MAP_STRIPE_WIDTH, _conf._colorMapHeight, c);
}
out.setColor$java_awt_Color($I$(12).DEFAULT_COLOR_MAP_OUTLINE);
out.drawRectangle$D$D$D$D$D(xBase, yBase, _conf._colorMapWidth + $I$(12).DEFAULT_COLOR_MAP_STRIPE_WIDTH - 1, _conf._colorMapHeight, thickness);
out.setColor$java_awt_Color($I$(12).DEFAULT_COLOR_MAP_FONT_COLOR);
out.setFont$I$D(out.getCurrentFont$(), $I$(12).DEFAULT_COLOR_MAP_FONT_SIZE / 1.5);
out.drawText$D$D$S(xBase, yBase + _conf._colorMapHeight + $I$(12).DEFAULT_COLOR_MAP_FONT_SIZE / 1.7 , "" + new Double(_conf._cm.getMinValue$()).toString());
out.drawText$D$D$S(xBase + $I$(12).DEFAULT_COLOR_MAP_STRIPE_WIDTH + _conf._colorMapWidth , yBase + _conf._colorMapHeight + $I$(12).DEFAULT_COLOR_MAP_FONT_SIZE / 1.7 , "" + new Double(_conf._cm.getMaxValue$()).toString());
out.drawText$D$D$S(xBase + ($I$(12).DEFAULT_COLOR_MAP_STRIPE_WIDTH + _conf._colorMapWidth) / 2.0, yBase - ($I$(12).DEFAULT_COLOR_MAP_FONT_SIZE / 1.7), _conf._colorMapCaption);
}, p$1);

Clazz.newMeth(C$, 'renderRegionHighlights$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA', function (out, realCoords, realCenters) {
for (var r, $r = this._listeRegionHighlights.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
var s=r.getShape$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$D(realCoords, realCenters, 1.0);
out.setColor$java_awt_Color(r.getFillColor$());
out.fillPolygon$java_awt_geom_GeneralPath$java_awt_Color(s, r.getFillColor$());
out.setColor$java_awt_Color(r.getOutlineColor$());
out.drawPolygon$java_awt_geom_GeneralPath$D(s, 1);
}
}, p$1);

Clazz.newMeth(C$, 'saveRNA$S$fr_orsay_lri_varna_models_VARNAConfig$D$fr_orsay_lri_varna_models_export_SecStrDrawingProducer', function (path, conf, scale, out) {
out.setScale$D(scale);
var EPSMargin=40;
var minX=1.7976931348623157E308;
var maxX=4.9E-324;
var minY=1.7976931348623157E308;
var maxY=4.9E-324;
var x0;
var y0;
var x1;
var y1;
var xc;
var yc;
var xp;
var yp;
var dx;
var dy;
var norm;
for (var i=0; i < this._listeBases.size$(); i++) {
minX=Math.min(minX, (this._listeBases.get$I(i).getCoords$().getX$() - this.BASE_RADIUS - EPSMargin ));
minY=Math.min(minY, -(this._listeBases.get$I(i).getCoords$().getY$() - this.BASE_RADIUS - EPSMargin ));
maxX=Math.max(maxX, (this._listeBases.get$I(i).getCoords$().getX$() + this.BASE_RADIUS + EPSMargin ));
maxY=Math.max(maxY, -(this._listeBases.get$I(i).getCoords$().getY$() + this.BASE_RADIUS + EPSMargin ));
}
var coords=Clazz.array($I$(10), [this._listeBases.size$()]);
var centers=Clazz.array($I$(10), [this._listeBases.size$()]);
for (var i=0; i < this._listeBases.size$(); i++) {
xp=(this._listeBases.get$I(i).getCoords$().getX$() - minX);
yp=-(this._listeBases.get$I(i).getCoords$().getY$() - minY);
coords[i]=Clazz.new_($I$(10).c$$D$D,[xp, yp]);
var centerBck=this.getCenter$I(i);
if (this.get_drawMode$() == 3 || this.get_drawMode$() == 2 ) {
if ((this._listeBases.get$I(i).getElementStructure$() != -1) && i < this._listeBases.size$() - 1  && i > 1 ) {
var b1=this.get_listeBases$().get$I(i - 1);
var b2=this.get_listeBases$().get$I(i + 1);
var j1=b1.getElementStructure$();
var j2=b2.getElementStructure$();
if (!!((j1 == -1) ^ (j2 == -1))) {
var a1=b1.getCoords$();
var a2=b2.getCoords$();
var c1=b1.getCenter$();
var c2=b2.getCenter$();
centerBck.x=this._listeBases.get$I(i).getCoords$().x + (c1.x - a1.x) / c1.distance$java_awt_geom_Point2D(a1) + (c2.x - a2.x) / c2.distance$java_awt_geom_Point2D(a2);
centerBck.y=this._listeBases.get$I(i).getCoords$().y + (c1.y - a1.y) / c1.distance$java_awt_geom_Point2D(a1) + (c2.y - a2.y) / c2.distance$java_awt_geom_Point2D(a2);
}}}xc=(centerBck.getX$() - minX);
yc=-(centerBck.getY$() - minY);
centers[i]=Clazz.new_($I$(10).c$$D$D,[xc, yc]);
}
if (conf._drawBackground) out.setBackgroundColor$java_awt_Color(conf._backgroundColor);
p$1.renderRegionHighlights$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA.apply(this, [out, coords, centers]);
if (conf._drawBackbone) {
for (var i=1; i < this._listeBases.size$(); i++) {
var p1=coords[i - 1];
var p2=coords[i];
x0=p1.x;
y0=p1.y;
x1=p2.x;
y1=p2.y;
var vn=Clazz.new_($I$(10));
var dist=p1.distance$java_awt_geom_Point2D(p2);
var a=this._listeBases.get$I(i - 1).getElementStructure$();
var b=this._listeBases.get$I(i).getElementStructure$();
var bt=this._backbone.getTypeBefore$I(i);
var consecutivePair=(a == i) && (b == i - 1) ;
if (dist > 0 ) {
if (bt !== $I$(13).DISCONTINUOUS_TYPE ) {
var c=this._backbone.getColorBefore$I$java_awt_Color(i, conf._backboneColor);
if (bt === $I$(13).MISSING_PART_TYPE ) {
c.brighter$();
}out.setColor$java_awt_Color(c);
vn.x=(x1 - x0) / dist;
vn.y=(y1 - y0) / dist;
if (consecutivePair && (this.getDrawMode$() != 4) && (this.getDrawMode$() != 1)  ) {
var dir=0;
if (i + 1 < coords.length) {
dir=(this.testDirectionality$I$I$I(i - 1, i, i + 1) ? 1 : -1);
} else if (i - 2 >= 0) {
dir=(this.testDirectionality$I$I$I(i - 2, i - 1, i) ? 1 : -1);
}var centerSeg=Clazz.new_($I$(10).c$$D$D,[(p1.x + p2.x) / 2.0, (p1.y + p2.y) / 2.0]);
var centerDist=40.0 * scale;
var centerLoop=Clazz.new_($I$(10).c$$D$D,[centerSeg.x + centerDist * dir * vn.y , centerSeg.y - centerDist * dir * vn.x ]);
var radius=centerLoop.distance$java_awt_geom_Point2D(p1);
var a1=360.0 * (Math.atan2(p1.y - centerLoop.y, p1.x - centerLoop.x)) / (6.283185307179586);
var a2=360.0 * (Math.atan2(p2.y - centerLoop.y, p2.x - centerLoop.x)) / (6.283185307179586);
if (dir > 0) {
var tmp=a1;
a1=a2;
a2=tmp;
}if (a1 < 0 ) {
a1 += 360.0;
}if (a2 < 0 ) {
a2 += 360.0;
}out.drawArc$java_awt_geom_Point2D_Double$D$D$D$D(centerLoop, 2.0 * radius, 2.0 * radius, a1, a2);
} else {
out.drawLine$D$D$D$D$D((x0 + this.BASE_RADIUS * vn.x), (y0 + this.BASE_RADIUS * vn.y), (x1 - this.BASE_RADIUS * vn.x), (y1 - this.BASE_RADIUS * vn.y), 1.0);
}}}}
}for (var i=0; i < this._listeBases.size$(); i++) {
if (this._listeBases.get$I(i).getElementStructure$() > i) {
var style=this._listeBases.get$I(i).getStyleBP$();
if (style.isCanonical$() || conf._drawnNonCanonicalBP ) {
var bpcol=this.getBasePairColor$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig(style, conf);
out.setColor$java_awt_Color(bpcol);
var j=this._listeBases.get$I(i).getElementStructure$();
x0=coords[i].x;
y0=coords[i].y;
x1=coords[j].x;
y1=coords[j].y;
dx=x1 - x0;
dy=y1 - y0;
norm=Math.sqrt(dx * dx + dy * dy);
dx /= norm;
dy /= norm;
if (this._drawMode == 1 || this._drawMode == 2  || this._drawMode == 3 ) {
p$1.drawBasePair$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig.apply(this, [out, Clazz.new_($I$(10).c$$D$D,[x0, y0]), Clazz.new_($I$(10).c$$D$D,[x1, y1]), style, conf]);
} else if (this._drawMode == 4) {
p$1.drawBasePairArc$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig.apply(this, [out, i, j, Clazz.new_($I$(10).c$$D$D,[x0, y0]), Clazz.new_($I$(10).c$$D$D,[x1, y1]), style, conf]);
}}}}
if (conf._drawnNonPlanarBP) {
for (var i=0; i < this._structureAux.size$(); i++) {
var bp=this._structureAux.get$I(i);
out.setColor$java_awt_Color(this.getBasePairColor$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig(bp, conf));
var a=bp.getPartner5$().getIndex$();
var b=bp.getPartner3$().getIndex$();
if (bp.isCanonical$() || conf._drawnNonCanonicalBP ) {
x0=coords[a].x;
y0=coords[a].y;
x1=coords[b].x;
y1=coords[b].y;
dx=x1 - x0;
dy=y1 - y0;
norm=Math.sqrt(dx * dx + dy * dy);
dx /= norm;
dy /= norm;
if ((this._drawMode == 1) || (this._drawMode == 2) || this._drawMode == 3  ) {
p$1.drawBasePair$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig.apply(this, [out, Clazz.new_($I$(10).c$$D$D,[x0, y0]), Clazz.new_($I$(10).c$$D$D,[x1, y1]), bp, conf]);
} else if (this._drawMode == 4) {
p$1.drawBasePairArc$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$I$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_VARNAConfig.apply(this, [out, a, b, Clazz.new_($I$(10).c$$D$D,[x0, y0]), Clazz.new_($I$(10).c$$D$D,[x1, y1]), bp, conf]);
}}}
}var baseFontSize=(1.5 * this.BASE_RADIUS);
out.setFont$I$D(18, baseFontSize);
for (var i=0; i < this._listeBases.size$(); i++) {
x0=coords[i].x;
y0=coords[i].y;
var baseInnerColor=this.getBaseInnerColor$I$fr_orsay_lri_varna_models_VARNAConfig(i, conf);
var baseOuterColor=this.getBaseOuterColor$I$fr_orsay_lri_varna_models_VARNAConfig(i, conf);
var baseNameColor=this.getBaseNameColor$I$fr_orsay_lri_varna_models_VARNAConfig(i, conf);
if (C$.whiteLabelPreferrable$java_awt_Color(baseInnerColor)) {
baseNameColor=$I$(8).white;
}if (Clazz.instanceOf(this._listeBases.get$I(i), "fr.orsay.lri.varna.models.rna.ModeleBasesComparison")) {
var mb=this._listeBases.get$I(i);
if (conf._fillBases) {
out.fillRectangle$D$D$D$D$java_awt_Color(x0 - 1.5 * this.BASE_RADIUS, y0 - this.BASE_RADIUS, 3 * this.BASE_RADIUS, 2 * this.BASE_RADIUS, baseInnerColor);
}if (conf._drawOutlineBases) {
out.setColor$java_awt_Color(baseOuterColor);
out.drawRectangle$D$D$D$D$D(x0 - 1.5 * this.BASE_RADIUS, y0 - this.BASE_RADIUS, 3 * this.BASE_RADIUS, 2 * this.BASE_RADIUS, 1);
out.drawLine$D$D$D$D$D(x0, y0 - this.BASE_RADIUS, x0, y0 + this.BASE_RADIUS, 1);
}out.setColor$java_awt_Color(baseNameColor);
out.drawText$D$D$S(x0 - 0.75 * this.BASE_RADIUS, y0, "" + mb.getBase1$());
out.drawText$D$D$S(x0 + 0.75 * this.BASE_RADIUS, y0, "" + mb.getBase2$());
} else if (Clazz.instanceOf(this._listeBases.get$I(i), "fr.orsay.lri.varna.models.rna.ModeleBaseNucleotide")) {
if (conf._fillBases) {
out.fillCircle$D$D$D$D$java_awt_Color(x0, y0, this.BASE_RADIUS, 1, baseInnerColor);
}if (conf._drawOutlineBases) {
out.setColor$java_awt_Color(baseOuterColor);
out.drawCircle$D$D$D$D(x0, y0, this.BASE_RADIUS, 1);
}out.setColor$java_awt_Color(baseNameColor);
out.drawText$D$D$S(x0, y0, this._listeBases.get$I(i).getContent$());
}}
var numFontSize=(1.5 * this.BASE_RADIUS);
out.setFont$I$D(18, numFontSize);
for (var i=0; i < this._listeBases.size$(); i++) {
var basenum=this._listeBases.get$I(i).getBaseNumber$();
if (basenum == -1) {
basenum=i + 1;
}var mb=this._listeBases.get$I(i);
if (this.isNumberDrawn$fr_orsay_lri_varna_models_rna_ModeleBase$I(mb, conf._numPeriod)) {
out.setColor$java_awt_Color(mb.getStyleBase$().getBaseNumberColor$());
x0=coords[i].x;
y0=coords[i].y;
x1=centers[i].x;
y1=centers[i].y;
dx=x1 - x0;
dy=y1 - y0;
norm=Math.sqrt(dx * dx + dy * dy);
dx /= norm;
dy /= norm;
var vn=$I$(14).computeExcentricUnitVector$I$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA(i, coords, centers);
out.drawLine$D$D$D$D$D((x0 + 1.5 * this.BASE_RADIUS * vn.x ), (y0 + 1.5 * this.BASE_RADIUS * vn.y ), (x0 + 2.5 * this.BASE_RADIUS * vn.x ), (y0 + 2.5 * this.BASE_RADIUS * vn.y ), 1);
out.drawText$D$D$S((x0 + (conf._distNumbers + 1.0) * this.BASE_RADIUS * vn.x ), (y0 + (conf._distNumbers + 1.0) * this.BASE_RADIUS * vn.y ), mb.getLabel$());
}}
p$1.renderAnnotations$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$fr_orsay_lri_varna_models_VARNAConfig.apply(this, [out, minX, minY, conf]);
if (conf._drawColorMap) {
p$1.drawColorMap$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_export_SecStrDrawingProducer.apply(this, [conf, out]);
}var currentBBox=out.getBoundingBox$();
var titleFontSize=(2.0 * conf._titleFont.getSize$());
out.setColor$java_awt_Color(conf._titleColor);
out.setFont$I$D(16, titleFontSize);
var yTitle=currentBBox.y - titleFontSize / 2.0;
if (!this.getName$().equals$O("")) {
out.drawText$D$D$S((maxX - minX) / 2.0, yTitle, this.getName$());
}var fout;
try {
fout=Clazz.new_($I$(15).c$$java_io_OutputStream$S,[Clazz.new_($I$(16).c$$S,[path]), "UTF-8"]);
fout.write$S(out.export$());
fout.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(7).c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'buildCaptionPosition$fr_orsay_lri_varna_models_rna_ModeleBase$D$fr_orsay_lri_varna_models_VARNAConfig', function (mb, heightEstimate, conf) {
var radius=2.0;
if (this.isNumberDrawn$fr_orsay_lri_varna_models_rna_ModeleBase$I(mb, conf._numPeriod)) {
radius += (conf._distNumbers + 1.0);
}var center=mb.getCenter$();
var p=mb.getCoords$();
var realDistance=this.BASE_RADIUS * radius + heightEstimate;
return Clazz.new_($I$(10).c$$D$D,[center.getX$() + (p.getX$() - center.getX$()) * ((p.distance$java_awt_geom_Point2D(center) + realDistance) / p.distance$java_awt_geom_Point2D(center)), center.getY$() + (p.getY$() - center.getY$()) * ((p.distance$java_awt_geom_Point2D(center) + realDistance) / p.distance$java_awt_geom_Point2D(center))]);
});

Clazz.newMeth(C$, 'getBPHeightIncrement$', function () {
return this._bpHeightIncrement;
});

Clazz.newMeth(C$, 'setBPHeightIncrement$D', function (d) {
this._bpHeightIncrement=d;
});

Clazz.newMeth(C$, 'drawChemProbAnnotation$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation$java_awt_geom_Point2D_Double$D$D', function (out, cpa, anchor, minX, minY) {
out.setColor$java_awt_Color(cpa.getColor$());
var v=cpa.getDirVector$();
var vn=cpa.getNormalVector$();
var base=Clazz.new_($I$(10).c$$D$D,[(anchor.x + this.CHEM_PROB_DIST * v.x), (anchor.y + this.CHEM_PROB_DIST * v.y)]);
var edge=Clazz.new_($I$(10).c$$D$D,[(base.x + this.CHEM_PROB_BASE_LENGTH * cpa.getIntensity$() * v.x ), (base.y + this.CHEM_PROB_BASE_LENGTH * cpa.getIntensity$() * v.y )]);
var thickness=C$.CHEM_PROB_ARROW_THICKNESS * cpa.getIntensity$();
switch (cpa.getType$()) {
case $I$(17).ARROW:
{
var arrowTip1=Clazz.new_($I$(10).c$$D$D,[(base.x + cpa.getIntensity$() * (this.CHEM_PROB_ARROW_WIDTH * vn.x + this.CHEM_PROB_ARROW_HEIGHT * v.x)), (base.y + cpa.getIntensity$() * (this.CHEM_PROB_ARROW_WIDTH * vn.y + this.CHEM_PROB_ARROW_HEIGHT * v.y))]);
var arrowTip2=Clazz.new_($I$(10).c$$D$D,[(base.x + cpa.getIntensity$() * (-this.CHEM_PROB_ARROW_WIDTH * vn.x + this.CHEM_PROB_ARROW_HEIGHT * v.x)), (base.y + cpa.getIntensity$() * (-this.CHEM_PROB_ARROW_WIDTH * vn.y + this.CHEM_PROB_ARROW_HEIGHT * v.y))]);
out.drawLine$D$D$D$D$D(base.x - minX, minY - base.y, edge.x - minX, minY - edge.y, thickness);
out.drawLine$D$D$D$D$D(base.x - minX, minY - base.y, arrowTip1.x - minX, minY - arrowTip1.y, thickness);
out.drawLine$D$D$D$D$D(base.x - minX, minY - base.y, arrowTip2.x - minX, minY - arrowTip2.y, thickness);
}break;
case $I$(17).PIN:
{
var side1=Clazz.new_($I$(10).c$$D$D,[(edge.x - cpa.getIntensity$() * (this.CHEM_PROB_PIN_SEMIDIAG * v.x)), (edge.y - cpa.getIntensity$() * (this.CHEM_PROB_PIN_SEMIDIAG * v.y))]);
var side2=Clazz.new_($I$(10).c$$D$D,[(edge.x - cpa.getIntensity$() * (this.CHEM_PROB_PIN_SEMIDIAG * vn.x)), (edge.y - cpa.getIntensity$() * (this.CHEM_PROB_PIN_SEMIDIAG * vn.y))]);
var side3=Clazz.new_($I$(10).c$$D$D,[(edge.x + cpa.getIntensity$() * (this.CHEM_PROB_PIN_SEMIDIAG * v.x)), (edge.y + cpa.getIntensity$() * (this.CHEM_PROB_PIN_SEMIDIAG * v.y))]);
var side4=Clazz.new_($I$(10).c$$D$D,[(edge.x + cpa.getIntensity$() * (this.CHEM_PROB_PIN_SEMIDIAG * vn.x)), (edge.y + cpa.getIntensity$() * (this.CHEM_PROB_PIN_SEMIDIAG * vn.y))]);
var p2=Clazz.new_($I$(18));
p2.moveTo$F$F((side1.x - minX), (minY - side1.y));
p2.lineTo$F$F((side2.x - minX), (minY - side2.y));
p2.lineTo$F$F((side3.x - minX), (minY - side3.y));
p2.lineTo$F$F((side4.x - minX), (minY - side4.y));
p2.closePath$();
out.fillPolygon$java_awt_geom_GeneralPath$java_awt_Color(p2, cpa.getColor$());
out.drawLine$D$D$D$D$D(base.x - minX, minY - base.y, edge.x - minX, minY - edge.y, thickness);
}break;
case $I$(17).TRIANGLE:
{
var arrowTip1=Clazz.new_($I$(10).c$$D$D,[(edge.x + cpa.getIntensity$() * (this.CHEM_PROB_TRIANGLE_WIDTH * vn.x)), (edge.y + cpa.getIntensity$() * (this.CHEM_PROB_TRIANGLE_WIDTH * vn.y))]);
var arrowTip2=Clazz.new_($I$(10).c$$D$D,[(edge.x + cpa.getIntensity$() * (-this.CHEM_PROB_TRIANGLE_WIDTH * vn.x)), (edge.y + cpa.getIntensity$() * (-this.CHEM_PROB_TRIANGLE_WIDTH * vn.y))]);
var p2=Clazz.new_($I$(18));
p2.moveTo$F$F((base.x - minX), (minY - base.y));
p2.lineTo$F$F((arrowTip1.x - minX), (minY - arrowTip1.y));
p2.lineTo$F$F((arrowTip2.x - minX), (minY - arrowTip2.y));
p2.closePath$();
out.fillPolygon$java_awt_geom_GeneralPath$java_awt_Color(p2, cpa.getColor$());
}break;
case $I$(17).DOT:
{
var radius=new Double(this.CHEM_PROB_DOT_RADIUS * cpa.getIntensity$());
var center=Clazz.new_($I$(10).c$$D$D,[(base.x + (radius).doubleValue$() * v.x) - minX, minY - (base.y + (radius).doubleValue$() * v.y)]);
out.fillCircle$D$D$D$D$java_awt_Color(center.x, center.y, (radius).doubleValue$(), thickness, cpa.getColor$());
}break;
}
}, p$1);

Clazz.newMeth(C$, 'renderAnnotations$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$D$D$fr_orsay_lri_varna_models_VARNAConfig', function (out, minX, minY, conf) {
for (var textAnnotation, $textAnnotation = this.getAnnotations$().iterator$(); $textAnnotation.hasNext$()&&((textAnnotation=($textAnnotation.next$())),1);) {
out.setColor$java_awt_Color(textAnnotation.getColor$());
out.setFont$I$D(18, 2.0 * textAnnotation.getFont$().getSize$());
var position=textAnnotation.getCenterPosition$();
if (textAnnotation.getType$() === $I$(19).BASE ) {
var mb=textAnnotation.getAncrage$();
var fontHeight=Math.ceil(textAnnotation.getFont$().getSize$());
position=this.buildCaptionPosition$fr_orsay_lri_varna_models_rna_ModeleBase$D$fr_orsay_lri_varna_models_VARNAConfig(mb, fontHeight, conf);
}out.drawText$D$D$S(position.x - minX, -(position.y - minY), textAnnotation.getTexte$());
}
for (var cpa, $cpa = this.getChemProbAnnotations$().iterator$(); $cpa.hasNext$()&&((cpa=($cpa.next$())),1);) {
var anchor=cpa.getAnchorPosition$();
p$1.drawChemProbAnnotation$fr_orsay_lri_varna_models_export_SecStrDrawingProducer$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation$java_awt_geom_Point2D_Double$D$D.apply(this, [out, cpa, anchor, minX, minY]);
}
}, p$1);

Clazz.newMeth(C$, 'isNumberDrawn$fr_orsay_lri_varna_models_rna_ModeleBase$I', function (mb, numPeriod) {
if (numPeriod <= 0) return false;
return ((mb.getIndex$() == 0) || ((mb.getBaseNumber$()) % numPeriod == 0) || (mb.getIndex$() == this.get_listeBases$().size$() - 1)  );
});

Clazz.newMeth(C$, 'saveRNAEPS$S$fr_orsay_lri_varna_models_VARNAConfig', function (path, conf) {
var out=Clazz.new_($I$(20));
p$1.saveRNA$S$fr_orsay_lri_varna_models_VARNAConfig$D$fr_orsay_lri_varna_models_export_SecStrDrawingProducer.apply(this, [path, conf, 0.4, out]);
});

Clazz.newMeth(C$, 'saveRNAXFIG$S$fr_orsay_lri_varna_models_VARNAConfig', function (path, conf) {
var out=Clazz.new_($I$(21));
p$1.saveRNA$S$fr_orsay_lri_varna_models_VARNAConfig$D$fr_orsay_lri_varna_models_export_SecStrDrawingProducer.apply(this, [path, conf, 20, out]);
});

Clazz.newMeth(C$, 'saveRNATIKZ$S$fr_orsay_lri_varna_models_VARNAConfig', function (path, conf) {
var out=Clazz.new_($I$(22));
p$1.saveRNA$S$fr_orsay_lri_varna_models_VARNAConfig$D$fr_orsay_lri_varna_models_export_SecStrDrawingProducer.apply(this, [path, conf, 0.15, out]);
});

Clazz.newMeth(C$, 'saveRNASVG$S$fr_orsay_lri_varna_models_VARNAConfig', function (path, conf) {
var out=Clazz.new_($I$(23));
p$1.saveRNA$S$fr_orsay_lri_varna_models_VARNAConfig$D$fr_orsay_lri_varna_models_export_SecStrDrawingProducer.apply(this, [path, conf, 0.5, out]);
});

Clazz.newMeth(C$, 'getBBox$', function () {
var result=Clazz.new_($I$(24).c$$D$D$D$D,[10, 10, 10, 10]);
var minx;
var maxx;
var miny;
var maxy;
minx=1.7976931348623157E308;
miny=1.7976931348623157E308;
maxx=-1.7976931348623157E308;
maxy=-1.7976931348623157E308;
for (var i=0; i < this._listeBases.size$(); i++) {
minx=Math.min(this._listeBases.get$I(i).getCoords$().getX$() - this.BASE_RADIUS, minx);
miny=Math.min(this._listeBases.get$I(i).getCoords$().getY$() - this.BASE_RADIUS, miny);
maxx=Math.max(this._listeBases.get$I(i).getCoords$().getX$() + this.BASE_RADIUS, maxx);
maxy=Math.max(this._listeBases.get$I(i).getCoords$().getY$() + this.BASE_RADIUS, maxy);
}
result.x=minx;
result.y=miny;
result.width=Math.max(maxx - minx, 1);
result.height=Math.max(maxy - miny, 1);
if (this._drawMode == 4) {
var realHeight=this._bpHeightIncrement * result.width / 2.0;
result.height += realHeight;
result.y -= realHeight;
}return result;
});

Clazz.newMeth(C$, 'setCoord$I$java_awt_geom_Point2D_Double', function (index, p) {
this.setCoord$I$D$D(index, p.x, p.y);
});

Clazz.newMeth(C$, 'setCoord$I$D$D', function (index, x, y) {
if (index < this._listeBases.size$()) {
this._listeBases.get$I(index).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[x, y]));
}});

Clazz.newMeth(C$, 'getCoords$I', function (i) {
if (i < this._listeBases.size$() && i >= 0 ) {
return this._listeBases.get$I(i).getCoords$();
}return Clazz.new_($I$(10));
});

Clazz.newMeth(C$, 'getBaseContent$I', function (i) {
if ((i >= 0) && (i < this._listeBases.size$()) ) {
return this._listeBases.get$I(i).getContent$();
}return "";
});

Clazz.newMeth(C$, 'getBaseNumber$I', function (i) {
if ((i >= 0) && (i < this._listeBases.size$()) ) {
return this._listeBases.get$I(i).getBaseNumber$();
}return -1;
});

Clazz.newMeth(C$, 'getCenter$I', function (i) {
if (i < this._listeBases.size$()) {
return this._listeBases.get$I(i).getCenter$();
}return Clazz.new_($I$(10));
});

Clazz.newMeth(C$, 'setCenter$I$D$D', function (i, x, y) {
this.setCenter$I$java_awt_geom_Point2D_Double(i, Clazz.new_($I$(10).c$$D$D,[x, y]));
});

Clazz.newMeth(C$, 'setCenter$I$java_awt_geom_Point2D_Double', function (i, p) {
if (i < this._listeBases.size$()) {
this._listeBases.get$I(i).setCenter$java_awt_geom_Point2D_Double(p);
}});

Clazz.newMeth(C$, 'drawRNACircle$fr_orsay_lri_varna_models_VARNAConfig', function (conf) {
this._drawn=true;
this._drawMode=1;
var radius=(((3 * (this._listeBases.size$() + 1) * this.BASE_RADIUS ) / (6.283185307179586))|0);
var angle;
for (var i=0; i < this._listeBases.size$(); i++) {
angle=-(((-(i + 1)) * 2.0 * 3.141592653589793 ) / ((this._listeBases.size$() + 1)) - 1.5707963267948966);
this._listeBases.get$I(i).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[(radius * Math.cos(angle) * conf._spaceBetweenBases ), (radius * Math.sin(angle) * conf._spaceBetweenBases )]));
this._listeBases.get$I(i).setCenter$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[0, 0]));
}
});

Clazz.newMeth(C$, 'drawRNAVARNAView$fr_orsay_lri_varna_models_VARNAConfig', function (conf) {
this._drawn=true;
this._drawMode=5;
var vs=Clazz.new_($I$(25));
vs.drawRNA$D$fr_orsay_lri_varna_models_rna_RNA(1, this);
});

Clazz.newMeth(C$, 'drawRNALine$fr_orsay_lri_varna_models_VARNAConfig', function (conf) {
this._drawn=true;
this._drawMode=4;
for (var i=0; i < this.get_listeBases$().size$(); i++) {
this.get_listeBases$().get$I(i).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[i * conf._spaceBetweenBases * 20 , 0]));
this.get_listeBases$().get$I(i).setCenter$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[i * conf._spaceBetweenBases * 20 , -10]));
}
});

Clazz.newMeth(C$, 'drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$Z$fr_orsay_lri_varna_models_VARNAConfig', function (template, straightBulges, conf) {
return this.drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z(template, conf, $I$(26).getDefault$(), $I$(27).getDefault$(), straightBulges);
});

Clazz.newMeth(C$, 'drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$Z', function (template, conf, helixLengthAdjustmentMethod, straightBulges) {
return this.drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z(template, conf, helixLengthAdjustmentMethod, $I$(27).getDefault$(), straightBulges);
});

Clazz.newMeth(C$, 'drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z', function (template, conf, helixLengthAdjustmentMethod, curveMethod, straightBulges) {
this._drawn=true;
this._drawMode=7;
var drawRNATemplate=Clazz.new_($I$(28).c$$fr_orsay_lri_varna_models_rna_RNA,[this]);
drawRNATemplate.drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z(template, conf, helixLengthAdjustmentMethod, curveMethod, straightBulges);
return drawRNATemplate.getMapping$();
});

Clazz.newMeth(C$, 'objFun$I$I$D$D$D', function (n1, n2, r, bpdist, multidist) {
return ((n1) * 2.0 * Math.asin((bpdist) / (2.0 * r))  + (n2) * 2.0 * Math.asin((multidist) / (2.0 * r))  - (6.283185307179586));
}, 1);

Clazz.newMeth(C$, 'determineRadius$I$I$D', function (nbHel, nbUnpaired, startRadius) {
return C$.determineRadius$I$I$D$D$D(nbHel, nbUnpaired, startRadius, 65.0, 35.0);
});

Clazz.newMeth(C$, 'determineRadius$I$I$D$D$D', function (nbHel, nbUnpaired, startRadius, bpdist, multidist) {
var xmin=bpdist / 2.0;
var xmax=3.0 * multidist + 1;
var x=(xmin + xmax) / 2.0;
var y=10000.0;
var ymin=-1000.0;
var ymax=1000.0;
var numIt=0;
var precision=1.0E-5;
while ((Math.abs(y) > precision ) && (numIt < 10000) ){
x=(xmin + xmax) / 2.0;
y=C$.objFun$I$I$D$D$D(nbHel, nbUnpaired, x, bpdist, multidist);
ymin=C$.objFun$I$I$D$D$D(nbHel, nbUnpaired, xmax, bpdist, multidist);
ymax=C$.objFun$I$I$D$D$D(nbHel, nbUnpaired, xmin, bpdist, multidist);
if (ymin > 0.0 ) {
xmax=xmax + (xmax - xmin);
} else if ((y <= 0.0 ) && (ymax > 0.0 ) ) {
xmax=x;
} else if ((y >= 0.0 ) && (ymin < 0.0 ) ) {
xmin=x;
} else if (ymax < 0.0 ) {
xmin=Math.max(xmin - (x - xmin), Math.max(bpdist / 2.0, multidist / 2.0));
xmax=x;
}numIt++;
}
return x;
}, 1);

Clazz.newMeth(C$, 'drawRNA$fr_orsay_lri_varna_models_VARNAConfig', function (conf) {
this.drawRNA$I$fr_orsay_lri_varna_models_VARNAConfig(2, conf);
});

Clazz.newMeth(C$, 'drawRNA$I$fr_orsay_lri_varna_models_VARNAConfig', function (mode, conf) {
this._drawMode=mode;
switch (this.get_drawMode$()) {
case 2:
this.drawRNARadiate$fr_orsay_lri_varna_models_VARNAConfig(conf);
break;
case 4:
this.drawRNALine$fr_orsay_lri_varna_models_VARNAConfig(conf);
break;
case 1:
this.drawRNACircle$fr_orsay_lri_varna_models_VARNAConfig(conf);
break;
case 3:
this.drawRNANAView$fr_orsay_lri_varna_models_VARNAConfig(conf);
break;
case 5:
this.drawRNAVARNAView$fr_orsay_lri_varna_models_VARNAConfig(conf);
break;
default:
break;
}
});

Clazz.newMeth(C$, 'getDrawMode$', function () {
return this._drawMode;
});

Clazz.newMeth(C$, 'normalizeAngle$D', function (angle) {
return C$.normalizeAngle$D$D(angle, 0.0);
}, 1);

Clazz.newMeth(C$, 'normalizeAngle$D$D', function (angle, fromVal) {
var toVal=fromVal + 6.283185307179586;
var result=angle;
while (result < fromVal ){
result += 6.283185307179586;
}
while (result >= toVal ){
result -= 6.283185307179586;
}
return result;
}, 1);

Clazz.newMeth(C$, 'correctHysteresis$D', function (angle) {
var result=C$.normalizeAngle$D(angle);
for (var i=0; i < C$.HYSTERESIS_ATTRACTORS.length; i++) {
var att=C$.HYSTERESIS_ATTRACTORS[i];
if (Math.abs(C$.normalizeAngle$D$D(att - result, -3.141592653589793)) < C$.HYSTERESIS_EPSILON ) {
result=att;
}}
return result;
}, 1);

Clazz.newMeth(C$, 'distributeUnpaired$D$D$D$D$java_awt_geom_Point2D_Double$java_util_Vector', function (radius, angle, pHel, base, center, bases) {
var mydist=Math.abs(radius * (angle / (bases.size$() + 1)));
var addedRadius=0.0;
var PA=Clazz.new_($I$(10).c$$D$D,[center.x + radius * Math.cos(base + pHel), center.y + radius * Math.sin(base + pHel)]);
var PB=Clazz.new_($I$(10).c$$D$D,[center.x + radius * Math.cos(base + pHel + angle ), center.y + radius * Math.sin(base + pHel + angle )]);
var dist=PA.distance$java_awt_geom_Point2D(PB);
var VN=Clazz.new_($I$(10).c$$D$D,[(PB.y - PA.y) / dist, (-PB.x + PA.x) / dist]);
if (mydist < 2 * this.BASE_RADIUS ) {
addedRadius=Math.min(1.0, (2 * this.BASE_RADIUS - mydist) / 4) * p$1.computeRadius$D$D.apply(this, [mydist, 2.29 * (bases.size$() + 1) * this.BASE_RADIUS  - mydist]);
}var pos=p$1.computeNewAngles$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$D$D$D.apply(this, [bases.size$(), center, VN, angle, base + pHel, radius, addedRadius]);
for (var i=0; i < bases.size$(); i++) {
var k=(bases.get$I(i)).intValue$();
this.setCoord$I$java_awt_geom_Point2D_Double(k, pos.get$I(i));
}
}, p$1);

Clazz.newMeth(C$, 'computeRadius$D$D', function (b, pobj) {
var a=b;
var aL=a;
var aU=Infinity;
var h=(a - b) * (a - b) / ((a + b) * (a + b));
var p=3.141592653589793 * (a + b) * (1 + h / 4.0 + h * h / 64.0 + h * h * h  / 256.0 + 25.0 * h * h * h * h  / 16384.0)  / 2.0;
var aold=a + 1.0;
while ((Math.abs(p - pobj) > 0.001 ) && (aold != a ) ){
aold=a;
if (p < pobj ) {
aL=a;
if (aU == Infinity ) {
a *= 2.0;
} else {
a=(a + aU) / 2.0;
}} else {
aU=a;
a=(a + aL) / 2.0;
}h=(a - b) * (a - b) / ((a + b) * (a + b));
p=(3.141592653589793 * (a + b) * (1 + h / 4.0 + h * h / 64.0 + h * h * h  / 256.0 + 25.0 * h * h * h * h  / 16384.0) ) / 2.0;
}
return a;
}, p$1);

Clazz.newMeth(C$, 'computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (center, p) {
var dist=center.distance$java_awt_geom_Point2D(p);
var angle=Math.asin((p.y - center.y) / dist);
if (p.x - center.x < 0 ) {
angle=3.141592653589793 - angle;
}return angle;
}, 1);

Clazz.newMeth(C$, 'rotatePoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D', function (center, p, angle) {
var dist=p.distance$java_awt_geom_Point2D(center);
var oldAngle=Math.asin((p.y - center.y) / dist);
if (p.x - center.x < 0 ) {
oldAngle=3.141592653589793 - oldAngle;
}var newX=(center.x + dist * Math.cos(oldAngle + angle));
var newY=(center.y + dist * Math.sin(oldAngle + angle));
return Clazz.new_($I$(10).c$$D$D,[newX, newY]);
}, p$1);

Clazz.newMeth(C$, 'rotateHelix$java_awt_geom_Point2D_Double$I$I$D', function (center, i, j, angle) {
for (var k=i; k <= j; k++) {
var oldp=this.getCoords$I(k);
var newp=p$1.rotatePoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D.apply(this, [center, oldp, angle]);
this.setCoord$I$java_awt_geom_Point2D_Double(k, newp);
if ((k != i) && (k != j) ) {
var oldc=this.get_listeBases$().get$I(k).getCenter$();
var newc=p$1.rotatePoint$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D.apply(this, [center, oldc, angle]);
this.setCenter$I$java_awt_geom_Point2D_Double(k, newc);
}}
}, p$1);

Clazz.newMeth(C$, 'fixUnpairedPositions$Z$D$D$D$D$D$D$java_awt_geom_Point2D_Double$java_util_Vector$java_util_Vector', function (isDirect, angleRightPartner, angleLimitLeft, angleLimitRight, angleLeftPartner, radius, base, center, prevBases, nextBases) {
if (isDirect) {
var anglePrev=C$.normalizeAngle$D(angleLimitLeft - angleRightPartner);
var angleNext=C$.normalizeAngle$D(angleLeftPartner - angleLimitRight);
p$1.distributeUnpaired$D$D$D$D$java_awt_geom_Point2D_Double$java_util_Vector.apply(this, [radius, anglePrev, angleRightPartner, base, center, prevBases]);
p$1.distributeUnpaired$D$D$D$D$java_awt_geom_Point2D_Double$java_util_Vector.apply(this, [radius, -angleNext, angleLeftPartner, base, center, nextBases]);
} else {
var anglePrev=C$.normalizeAngle$D(angleLeftPartner - angleLimitRight);
var angleNext=C$.normalizeAngle$D(angleLimitLeft - angleRightPartner);
p$1.distributeUnpaired$D$D$D$D$java_awt_geom_Point2D_Double$java_util_Vector.apply(this, [radius, -anglePrev, angleLeftPartner, base, center, prevBases]);
p$1.distributeUnpaired$D$D$D$D$java_awt_geom_Point2D_Double$java_util_Vector.apply(this, [radius, angleNext, angleRightPartner, base, center, nextBases]);
}}, p$1);

Clazz.newMeth(C$, 'getPoint$D$D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$D$D', function (angleLine, angleBulge, center, VN, radius, addedRadius, dirBulge) {
return Clazz.new_($I$(10).c$$D$D,[center.x + radius * Math.cos(angleLine) + dirBulge * addedRadius * Math.sin(angleBulge) * VN.x , center.y + radius * Math.sin(angleLine) + dirBulge * addedRadius * Math.sin(angleBulge) * VN.y ]);
}, 1);

Clazz.newMeth(C$, 'computeNewAngles$I$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$D$D$D', function (numPoints, center, VN, angle, angleBase, radius, addedRadius) {
var result=Clazz.new_($I$(1));
if (numPoints > 0) {
var factors=Clazz.new_($I$(1));
var prevP=Clazz.new_($I$(10).c$$D$D,[center.x + radius * Math.cos(angleBase), center.y + radius * Math.sin(angleBase)]);
var fact=0.0;
var angleBulge=0.0;
var dirBulge=(angle < 0 ) ? -1.0 : 1.0;
var dtarget=2.0 * this.BASE_RADIUS;
for (var i=0; i < numPoints; i++) {
var lbound=fact;
var ubound=1.0;
var angleLine=angleBase + angle * fact;
angleBulge=3.141592653589793 * fact;
var currP=C$.getPoint$D$D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$D$D(angleLine, angleBulge, center, VN, radius, addedRadius, dirBulge);
var numIter=0;
while ((Math.abs(currP.distance$java_awt_geom_Point2D(prevP) - dtarget) > 0.01 ) && (numIter < 100) ){
if (currP.distance$java_awt_geom_Point2D(prevP) > dtarget ) {
ubound=fact;
fact=(fact + lbound) / 2.0;
} else {
lbound=fact;
fact=(fact + ubound) / 2.0;
}angleLine=angleBase + angle * fact;
angleBulge=3.141592653589793 * fact;
currP=C$.getPoint$D$D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$D$D(angleLine, angleBulge, center, VN, radius, addedRadius, dirBulge);
numIter++;
}
factors.add$TE(new Double(fact));
prevP=currP;
}
var rescale=1.0 / ((factors.get$I(factors.size$() - 1)).doubleValue$() + (factors.get$I(0)).doubleValue$());
for (var j=0; j < factors.size$(); j++) {
factors.set$I$TE(j, new Double((factors.get$I(j)).doubleValue$() * rescale));
}
if (addedRadius > 0 ) {
prevP=C$.getPoint$D$D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$D$D(angleBase, 0, center, VN, radius, addedRadius, dirBulge);
var totDist=0.0;
for (var j=0; j < factors.size$(); j++) {
var newfact=(factors.get$I(j)).doubleValue$();
var angleLine=angleBase + angle * newfact;
angleBulge=3.141592653589793 * newfact;
var currP=C$.getPoint$D$D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$D$D(angleLine, angleBulge, center, VN, radius, addedRadius, dirBulge);
totDist += currP.distance$java_awt_geom_Point2D(prevP);
prevP=currP;
}
totDist += C$.getPoint$D$D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$D$D(angleBase + angle, 3.141592653589793, center, VN, radius, addedRadius, dirBulge).distance$java_awt_geom_Point2D(prevP);
dtarget=totDist / (numPoints + 1);
fact=0.0;
factors=Clazz.new_($I$(1));
prevP=Clazz.new_($I$(10).c$$D$D,[center.x + radius * Math.cos(angleBase), center.y + radius * Math.sin(angleBase)]);
for (var i=0; i < numPoints; i++) {
var lbound=fact;
var ubound=1.5;
var angleLine=angleBase + angle * fact;
angleBulge=3.141592653589793 * fact;
var currP=C$.getPoint$D$D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$D$D(angleLine, angleBulge, center, VN, radius, addedRadius, dirBulge);
var numIter=0;
while ((Math.abs(currP.distance$java_awt_geom_Point2D(prevP) - dtarget) > 0.01 ) && (numIter < 100) ){
if (currP.distance$java_awt_geom_Point2D(prevP) > dtarget ) {
ubound=fact;
fact=(fact + lbound) / 2.0;
} else {
lbound=fact;
fact=(fact + ubound) / 2.0;
}angleLine=angleBase + angle * fact;
angleBulge=3.141592653589793 * fact;
currP=C$.getPoint$D$D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$D$D(angleLine, angleBulge, center, VN, radius, addedRadius, dirBulge);
numIter++;
}
factors.add$TE(new Double(fact));
prevP=currP;
}
rescale=1.0 / ((factors.get$I(factors.size$() - 1)).doubleValue$() + (factors.get$I(0)).doubleValue$());
for (var j=0; j < factors.size$(); j++) {
factors.set$I$TE(j, new Double((factors.get$I(j)).doubleValue$() * rescale));
}
}for (var j=0; j < factors.size$(); j++) {
var newfact=(factors.get$I(j)).doubleValue$();
var angleLine=angleBase + angle * newfact;
angleBulge=3.141592653589793 * newfact;
result.add$TE(C$.getPoint$D$D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D$D$D(angleLine, angleBulge, center, VN, radius, addedRadius, dirBulge));
}
}return result;
}, p$1);

Clazz.newMeth(C$, 'drawLoop$I$I$D$D$D$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$Z', function (i, j, x, y, dirAngle, coords, centers, angles, straightBulges) {
if (i > j) {
return;
}if (this._listeBases.get$I(i).getElementStructure$() == j) {
var normalAngle=1.5707963267948966;
centers[i]=Clazz.new_($I$(10).c$$D$D,[x, y]);
centers[j]=Clazz.new_($I$(10).c$$D$D,[x, y]);
coords[i].x=(x + 65.0 * Math.cos(dirAngle - normalAngle) / 2.0);
coords[i].y=(y + 65.0 * Math.sin(dirAngle - normalAngle) / 2.0);
coords[j].x=(x + 65.0 * Math.cos(dirAngle + normalAngle) / 2.0);
coords[j].y=(y + 65.0 * Math.sin(dirAngle + normalAngle) / 2.0);
this.drawLoop$I$I$D$D$D$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$Z(i + 1, j - 1, x + 40.0 * Math.cos(dirAngle), y + 40.0 * Math.sin(dirAngle), dirAngle, coords, centers, angles, straightBulges);
} else {
var k=i;
var basesMultiLoop=Clazz.new_($I$(29));
var helices=Clazz.new_($I$(29));
var l;
while (k <= j){
l=this._listeBases.get$I(k).getElementStructure$();
if (l > k) {
basesMultiLoop.add$TE( new Integer(k));
basesMultiLoop.add$TE( new Integer(l));
helices.add$TE( new Integer(k));
k=l + 1;
} else {
basesMultiLoop.add$TE( new Integer(k));
k++;
}}
var mlSize=basesMultiLoop.size$() + 2;
var numHelices=helices.size$() + 1;
var totalLength=35.0 * (mlSize - numHelices) + 65.0 * numHelices;
var multiLoopRadius;
var angleIncrementML;
var angleIncrementBP;
if (mlSize > 3) {
multiLoopRadius=C$.determineRadius$I$I$D$D$D(numHelices, mlSize - numHelices, (totalLength) / (6.283185307179586), 65.0, 35.0);
angleIncrementML=-2.0 * Math.asin((35.0) / (2.0 * multiLoopRadius));
angleIncrementBP=-2.0 * Math.asin((65.0) / (2.0 * multiLoopRadius));
} else {
multiLoopRadius=35.0;
angleIncrementBP=-2.0 * Math.asin((65.0) / (2.0 * multiLoopRadius));
angleIncrementML=(-6.283185307179586 - angleIncrementBP) / 2.0;
}var centerDist=Math.sqrt(Math.max(Math.pow(multiLoopRadius, 2) - Math.pow(32.5, 2), 0.0)) - 40.0;
var mlCenter=Clazz.new_($I$(10).c$$D$D,[(x + (centerDist * Math.cos(dirAngle))), (y + (centerDist * Math.sin(dirAngle)))]);
var baseAngle=dirAngle + 3.141592653589793 + 0.5 * angleIncrementBP  + 1.0 * angleIncrementML;
var currUnpaired=Clazz.new_($I$(1));
var currInterval=Clazz.new_($I$(30).c$$TT$TU,[new Double(0.), new Double(baseAngle - 1.0 * angleIncrementML)]);
var intervals=Clazz.new_($I$(1));
for (k=basesMultiLoop.size$() - 1; k >= 0; k--) {
l=basesMultiLoop.get$I(k).intValue$();
centers[l]=mlCenter;
var isPaired=(this._listeBases.get$I(l).getElementStructure$() != -1);
var isPaired3=isPaired && (this._listeBases.get$I(l).getElementStructure$() < l) ;
var isPaired5=isPaired && !isPaired3 ;
if (isPaired3) {
if ((numHelices == 2) && straightBulges ) {
baseAngle=dirAngle - angleIncrementBP / 2.0;
} else {
baseAngle=C$.correctHysteresis$D(baseAngle + angleIncrementBP / 2.0) - angleIncrementBP / 2.0;
}currInterval.first=new Double(baseAngle);
intervals.add$TE(Clazz.new_($I$(30).c$$TT$TU,[currUnpaired, currInterval]));
currInterval=Clazz.new_($I$(30).c$$TT$TU,[new Double(-1.0), new Double(-1.0)]);
currUnpaired=Clazz.new_($I$(1));
} else if (isPaired5) {
currInterval.second=new Double(baseAngle);
} else {
currUnpaired.add$TE(new Integer(l));
}angles[l]=baseAngle;
if (isPaired3) {
baseAngle += angleIncrementBP;
} else {
baseAngle += angleIncrementML;
}}
currInterval.first=new Double(dirAngle - 3.141592653589793 - 0.5 * angleIncrementBP );
intervals.add$TE(Clazz.new_($I$(30).c$$TT$TU,[currUnpaired, currInterval]));
for (var inter, $inter = intervals.iterator$(); $inter.hasNext$()&&((inter=($inter.next$())),1);) {
var mina=(inter.second.first).doubleValue$();
var maxa=C$.normalizeAngle$D$D((inter.second.second).doubleValue$(), mina);
for (var n=0; n < inter.first.size$(); n++) {
var ratio=(1.0 + n) / (1.0 + inter.first.size$());
var b=(inter.first.get$I(n)).intValue$();
angles[b]=mina + (1.0 - ratio) * (maxa - mina);
}
}
for (k=basesMultiLoop.size$() - 1; k >= 0; k--) {
l=basesMultiLoop.get$I(k).intValue$();
coords[l].x=mlCenter.x + multiLoopRadius * Math.cos(angles[l]);
coords[l].y=mlCenter.y + multiLoopRadius * Math.sin(angles[l]);
}
var newAngle;
var m;
var n;
for (k=0; k < helices.size$(); k++) {
m=helices.get$I(k).intValue$();
n=this._listeBases.get$I(m).getElementStructure$();
newAngle=(angles[m] + angles[n]) / 2.0;
this.drawLoop$I$I$D$D$D$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$Z(m + 1, n - 1, (40.0 * Math.cos(newAngle)) + (coords[m].x + coords[n].x) / 2.0, (40.0 * Math.sin(newAngle)) + (coords[m].y + coords[n].y) / 2.0, newAngle, coords, centers, angles, straightBulges);
}
}});

Clazz.newMeth(C$, 'getPreviousUnpaired$java_awt_Point', function (h) {
var prevBases=Clazz.new_($I$(29));
var over=false;
var i=h.y + 1;
while (!over){
if (i >= this.get_listeBases$().size$()) {
over=true;
} else {
if (this.get_listeBases$().get$I(i).getElementStructure$() == -1) {
prevBases.add$TE( new Integer(i));
} else {
over=true;
}}i++;
}
return prevBases;
}, p$1);

Clazz.newMeth(C$, 'getNextUnpaired$java_awt_Point', function (h) {
var over=false;
var i=h.x - 1;
var nextBases=Clazz.new_($I$(29));
while (!over){
if (i < 0) {
over=true;
} else {
if (this.get_listeBases$().get$I(i).getElementStructure$() == -1) {
nextBases.add$TE( new Integer(i));
} else {
over=true;
}}i--;
}
return nextBases;
}, p$1);

Clazz.newMeth(C$, 'rotateEverything$D$D$D$D$java_awt_Point$java_awt_Point$java_util_Hashtable', function (delta, base, pLimL, pLimR, h, ml, backupPos) {
var isDirect=this.testDirectionality$I$I$I(ml.x, ml.y, h.x);
var center=this.get_listeBases$().get$I(h.x).getCenter$();
for (var k=h.x; k <= h.y; k++) {
backupPos.put$TK$TV(new Integer(k), this.getBaseAt$I(k).getCoords$());
}
p$1.rotateHelix$java_awt_geom_Point2D_Double$I$I$D.apply(this, [center, h.x, h.y, delta]);
var helixStart=this.getCoords$I(h.x);
var helixStop=this.getCoords$I(h.y);
var pHelR;
var pHelL;
if (isDirect) {
pHelR=C$.computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, helixStop) - base;
pHelL=C$.computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, helixStart) - base;
} else {
pHelL=C$.computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, helixStop) - base;
pHelR=C$.computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(center, helixStart) - base;
}var prevBases=p$1.getPreviousUnpaired$java_awt_Point.apply(this, [h]);
var nextBases=p$1.getNextUnpaired$java_awt_Point.apply(this, [h]);
var radius=center.distance$java_awt_geom_Point2D(helixStart);
for (var j=0; j < prevBases.size$(); j++) {
var k=(prevBases.get$I(j)).intValue$();
backupPos.put$TK$TV(new Integer(k), this.getCoords$I(k));
}
for (var j=0; j < nextBases.size$(); j++) {
var k=(nextBases.get$I(j)).intValue$();
backupPos.put$TK$TV(new Integer(k), this.getCoords$I(k));
}
p$1.fixUnpairedPositions$Z$D$D$D$D$D$D$java_awt_geom_Point2D_Double$java_util_Vector$java_util_Vector.apply(this, [isDirect, pHelR, pLimL, pLimR, pHelL, radius, base, center, prevBases, nextBases]);
});

Clazz.newMeth(C$, 'drawRNARadiate$', function () {
this.drawRNARadiate$D$D$Z$Z(-1.0, $I$(12).DEFAULT_SPACE_BETWEEN_BASES, true, true);
});

Clazz.newMeth(C$, 'drawRNARadiate$fr_orsay_lri_varna_models_VARNAConfig', function (conf) {
this.drawRNARadiate$D$D$Z$Z(-1.0, conf._spaceBetweenBases, conf._flatExteriorLoop, false);
});

Clazz.newMeth(C$, 'drawRNARadiate$D$D$Z$Z', function (dirAngle, _spaceBetweenBases, flatExteriorLoop, straightBulges) {
this._drawn=true;
straightBulges=true;
this._drawMode=2;
var coords=Clazz.array($I$(10), [this._listeBases.size$()]);
var centers=Clazz.array($I$(10), [this._listeBases.size$()]);
var angles=Clazz.array(Double.TYPE, [this._listeBases.size$()]);
for (var i=0; i < this._listeBases.size$(); i++) {
coords[i]=Clazz.new_($I$(10).c$$D$D,[0, 0]);
centers[i]=Clazz.new_($I$(10).c$$D$D,[0, 0]);
}
if (flatExteriorLoop) {
dirAngle += -0.5707963267948966;
var i=0;
var x=0.0;
var y=0.0;
var vx=-Math.sin(dirAngle);
var vy=Math.cos(dirAngle);
while (i < this._listeBases.size$()){
coords[i].x=x;
coords[i].y=y;
centers[i].x=x + 65.0 * vy;
centers[i].y=y - 65.0 * vx;
var j=this._listeBases.get$I(i).getElementStructure$();
if (j > i) {
var increment=0.0;
if (i + 1 < this._listeBases.size$()) {
if (this._listeBases.get$I(i + 1).getElementStructure$() == -1) {
}}this.drawLoop$I$I$D$D$D$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$Z(i, j, x + (65.0 * vx / 2.0), y + (65.0 * vy / 2.0) + increment , dirAngle, coords, centers, angles, straightBulges);
centers[i].x=coords[i].x + 65.0 * vy;
centers[i].y=y - 65.0 * vx;
i=j;
x += 65.0 * vx;
y += 65.0 * vy;
centers[i].x=coords[i].x + 65.0 * vy;
centers[i].y=y - 65.0 * vx;
}x += 35.0 * vx;
y += 35.0 * vy;
i+=1;
}
} else {
this.drawLoop$I$I$D$D$D$java_awt_geom_Point2D_DoubleA$java_awt_geom_Point2D_DoubleA$DA$Z(0, this._listeBases.size$() - 1, 0, 0, dirAngle, coords, centers, angles, straightBulges);
}for (var i=0; i < this._listeBases.size$(); i++) {
this._listeBases.get$I(i).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[coords[i].x * _spaceBetweenBases, coords[i].y * _spaceBetweenBases]));
this._listeBases.get$I(i).setCenter$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[centers[i].x * _spaceBetweenBases, centers[i].y * _spaceBetweenBases]));
}
});

Clazz.newMeth(C$, 'drawRNANAView$fr_orsay_lri_varna_models_VARNAConfig', function (conf) {
this._drawMode=3;
this._drawn=true;
var X=Clazz.new_($I$(1).c$$I,[this._listeBases.size$()]);
var Y=Clazz.new_($I$(1).c$$I,[this._listeBases.size$()]);
var pair_table=Clazz.new_($I$(1).c$$I,[this._listeBases.size$()]);
for (var i=0; i < this._listeBases.size$(); i++) {
pair_table.add$TE(Short.valueOf$S(String.valueOf$I(this._listeBases.get$I(i).getElementStructure$())));
}
var naView=Clazz.new_($I$(31));
naView.naview_xy_coordinates$java_util_ArrayList$java_util_ArrayList$java_util_ArrayList(pair_table, X, Y);
for (var i=0; i < this._listeBases.size$(); i++) {
this._listeBases.get$I(i).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[(X.get$I(i)).doubleValue$() * 2.5 * conf._spaceBetweenBases , (Y.get$I(i)).doubleValue$() * 2.5 * conf._spaceBetweenBases ]));
}
for (var i=0; i < this._listeBases.size$(); i++) {
var indicePartner=this._listeBases.get$I(i).getElementStructure$();
if (indicePartner != -1) {
var base=this._listeBases.get$I(i).getCoords$();
var partner=this._listeBases.get$I(indicePartner).getCoords$();
this._listeBases.get$I(i).setCenter$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[(base.x + partner.x) / 2.0, (base.y + partner.y) / 2.0]));
} else {
var loop=this.getLoopBases$I(i);
var tmpx=0.0;
var tmpy=0.0;
for (var j=0; j < loop.size$(); j++) {
var partner=(loop.elementAt$I(j)).intValue$();
var loopmember=this._listeBases.get$I(partner).getCoords$();
tmpx += loopmember.x;
tmpy += loopmember.y;
}
this._listeBases.get$I(i).setCenter$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[tmpx / loop.size$(), tmpy / loop.size$()]));
}}
});

Clazz.newMeth(C$, 'getAllPartners$I', function (indice) {
var result=Clazz.new_($I$(1));
var me=this.getBaseAt$I(indice);
var i=me.getElementStructure$();
if (i != -1) {
result.add$TE(this.getBaseAt$I(i));
}var msbps=this.getAuxBPs$I(indice);
for (var m, $m = msbps.iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
result.add$TE(m.getPartner$fr_orsay_lri_varna_models_rna_ModeleBase(me));
}
return result;
});

Clazz.newMeth(C$, 'get_drawMode$', function () {
return this._drawMode;
});

Clazz.newMeth(C$, 'setDrawMode$I', function (drawMode) {
this._drawMode=drawMode;
});

Clazz.newMeth(C$, 'getSeparatorPositions$S', function (s) {
var result=Clazz.new_($I$(32));
var index=s.indexOf$S(C$.DBNStrandSep);
while (index >= 0){
result.add$TE(new Integer(index));
index=s.indexOf$S$I(C$.DBNStrandSep, index + 1);
}
return result;
});

Clazz.newMeth(C$, 'setRNA$S$S', function (seq, str) {
var al=C$.explodeSequence$S(seq);
var sepPos=this.getSeparatorPositions$S(str);
var alRes=Clazz.new_($I$(1));
var resSepPos=Clazz.new_($I$(32));
var strRes="";
for (var i=0; i < al.size$(); i++) {
if (sepPos.contains$O(new Integer(i)) && al.get$I(i).equals$O(C$.DBNStrandSep) ) {
resSepPos.add$TE(new Integer(alRes.size$() - 1));
} else {
alRes.add$TE(al.get$I(i));
if (i < str.length$()) {
strRes += str.charAt$I(i);
} else {
strRes += ".";
}}}
for (var i=al.size$(); i < str.length$(); i++) {
alRes.add$TE(" ");
strRes += str.charAt$I(i);
}
this.setRNA$java_util_List$S(alRes, strRes);
for (var i, $i = resSepPos.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
this._backbone.addElement$fr_orsay_lri_varna_models_rna_ModeleBackboneElement(Clazz.new_($I$(33).c$$I$fr_orsay_lri_varna_models_rna_ModeleBackboneElement_BackboneType,[i, $I$(13).DISCONTINUOUS_TYPE]));
}
});

Clazz.newMeth(C$, 'setRNA$S', function (seq) {
var s=C$.explodeSequence$S(seq);
var str=Clazz.array(Integer.TYPE, [s.size$()]);
for (var i=0; i < str.length; i++) {
str[i]=-1;
}
try {
this.setRNA$java_util_List$IA(s, str);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setRNA$S$IA', function (seq, str) {
this.setRNA$java_util_List$IA(C$.explodeSequence$S(seq), str);
});

Clazz.newMeth(C$, 'setRNA$SA$IA', function (seq, str) {
this.setRNA$SA$IA$I(seq, str, 1);
});

Clazz.newMeth(C$, 'setRNA$java_util_List$IA', function (seq, str) {
this.setRNA$SA$IA$I(seq.toArray$TTA(Clazz.array(String, [seq.size$()])), str, 1);
});

Clazz.newMeth(C$, 'setRNA$java_util_List$IA$I', function (seq, str, baseIndex) {
this.setRNA$SA$IA$I(seq.toArray$TTA(Clazz.array(String, [seq.size$()])), str, baseIndex);
});

Clazz.newMeth(C$, 'setRNA$SA$IA$I', function (seq, str, baseIndex) {
this.clearAnnotations$();
this._listeBases=Clazz.new_($I$(1));
if (seq.length != str.length) {
this.warningEmition$S("Sequence length " + seq.length + " differs from that of secondary structure " + str.length + ". \nAdapting sequence length ..." );
if (seq.length < str.length) {
var nseq=Clazz.array(String, [str.length]);
for (var i=0; i < seq.length; i++) {
nseq[i]=seq[i];
}
for (var i=seq.length; i < nseq.length; i++) {
nseq[i]="";
}
seq=nseq;
} else {
var seqTmp=Clazz.array(String, [str.length]);
for (var i=0; i < str.length; i++) {
seqTmp[i]=seq[i];
}
seq=seqTmp;
}}for (var i=0; i < str.length; i++) {
this._listeBases.add$TE(Clazz.new_($I$(34).c$$S$I$I,[seq[i], i, baseIndex + i]));
}
p$1.applyStruct$IA.apply(this, [str]);
});

Clazz.newMeth(C$, 'setRNA$S$S$java_util_ArrayList', function (seq, struct, basesOwn) {
this.clearAnnotations$();
this._listeBases=Clazz.new_($I$(1));
var array_struct=this.parseStruct$S(struct);
var size=struct.length$();
var j=0;
for (var i=0; i < size; i++) {
var mb;
if (seq.charAt$I(j) != seq.charAt$I(j + 1)) {
var mbc=Clazz.new_($I$(35).c$$C$C$I,[seq.charAt$I(j), seq.charAt$I(j + 1), i]);
mbc.set_appartenance$I((basesOwn.get$I(i)).intValue$());
mbc.setBaseNumber$I(i + 1);
mb=mbc;
} else {
mb=Clazz.new_($I$(34).c$$S$I$I,["" + seq.charAt$I(j), i, i + 1]);
}this._listeBases.add$TE(mb);
j+=2;
}
for (var i=0; i < size; i++) {
if (array_struct[i] != -1) {
p$1.addBPNow$I$I.apply(this, [i, array_struct[i]]);
}j+=2;
}
});

Clazz.newMeth(C$, 'setRNA$java_util_List$S', function (seq, dbnStr) {
this.clearAnnotations$();
var finStr=$I$(36).parseSecStr$S(dbnStr);
this.setRNA$java_util_List$IA(seq, finStr);
});

Clazz.newMeth(C$, 'explodeSequence$S', function (seq) {
var analyzedSeq=Clazz.new_($I$(1));
var i=0;
while (i < seq.length$()){
if (seq.charAt$I(i) == "{") {
var found=false;
var buf="";
i++;
while (!!(!found & (i < seq.length$()))){
if (seq.charAt$I(i) != "}") {
buf += seq.charAt$I(i);
i++;
} else {
found=true;
}}
analyzedSeq.add$TE(buf);
} else {
analyzedSeq.add$TE("" + seq.charAt$I(i));
}i++;
}
return analyzedSeq;
}, 1);

Clazz.newMeth(C$, 'parseStruct$S', function (str) {
var result=Clazz.array(Integer.TYPE, [str.length$()]);
var unexpectedChar=-1;
var p=Clazz.new_($I$(37));
for (var i=0; i < str.length$(); i++) {
var c=str.charAt$I(i);
if (c == "(") {
p.push$TE( new Integer(i));
} else if (c == "." || c == "-"  || c == ":" ) {
result[i]=-1;
} else if (c == ")") {
if (p.size$() == 0) {
throw Clazz.new_($I$(38).c$$I,[i + 1]);
}var j=p.pop$().intValue$();
result[i]=j;
result[j]=i;
} else {
if (unexpectedChar == -1) unexpectedChar=i;
break;
}}
if (unexpectedChar != -1) {
}if (p.size$() != 0) {
throw Clazz.new_($I$(38).c$$I,[p.pop$().intValue$() + 1]);
}return result;
});

Clazz.newMeth(C$, 'getHelixInterval$I', function (index) {
if ((index < 0) || (index >= this._listeBases.size$()) ) {
return Clazz.new_($I$(39).c$$I$I,[index, index]);
}var j=this._listeBases.get$I(index).getElementStructure$();
if (j != -1) {
var minH=index;
var maxH=index;
if (j > index) {
maxH=j;
} else {
minH=j;
}var over=false;
while (!over){
if ((minH < 0) || (maxH >= this._listeBases.size$()) ) {
over=true;
} else {
if (this._listeBases.get$I(minH).getElementStructure$() == maxH) {
minH--;
maxH++;
} else {
over=true;
}}}
minH++;
maxH--;
return Clazz.new_($I$(39).c$$I$I,[minH, maxH]);
}return Clazz.new_($I$(39).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'getExteriorHelix$I', function (index) {
var h=this.getHelixInterval$I(index);
var a=h.x;
var b=h.y;
while (!((h.x == 0))){
a=h.x;
b=h.y;
h=this.getHelixInterval$I(a - 1);
}
return Clazz.new_($I$(39).c$$I$I,[a, b]);
});

Clazz.newMeth(C$, 'getHelix$I', function (index) {
var result=Clazz.new_($I$(1));
if ((index < 0) || (index >= this._listeBases.size$()) ) {
return result;
}var p=this.getHelixInterval$I(index);
for (var i=p.x; i <= p.y; i++) {
result.add$TE(new Integer(i));
result.add$TE(new Integer(this._listeBases.get$I(i).getElementStructure$()));
}
return result;
});

Clazz.newMeth(C$, 'getMultiLoop$I', function (index) {
if ((index < 0) || (index >= this._listeBases.size$()) ) {
return Clazz.new_($I$(39).c$$I$I,[index, index]);
}var h=this.getHelixInterval$I(index);
var minH=h.x - 1;
var maxH=h.y + 1;
var over=false;
while (!over){
if (minH < 0) {
over=true;
minH=0;
} else {
if (this._listeBases.get$I(minH).getElementStructure$() == -1) {
minH--;
} else if (this._listeBases.get$I(minH).getElementStructure$() < minH) {
minH=this._listeBases.get$I(minH).getElementStructure$() - 1;
} else {
over=true;
}}}
over=false;
while (!over){
if (maxH > this._listeBases.size$() - 1) {
over=true;
maxH=this._listeBases.size$() - 1;
} else {
if (this._listeBases.get$I(maxH).getElementStructure$() == -1) {
maxH++;
} else if (this._listeBases.get$I(maxH).getElementStructure$() > maxH) {
maxH=this._listeBases.get$I(maxH).getElementStructure$() + 1;
} else {
over=true;
}}}
return Clazz.new_($I$(39).c$$I$I,[minH, maxH]);
});

Clazz.newMeth(C$, 'getLoopBases$I', function (startIndex) {
var result=Clazz.new_($I$(29));
if ((startIndex < 0) || (startIndex >= this._listeBases.size$()) ) {
return result;
}var index=startIndex;
result.add$TE(new Integer(startIndex));
if (this._listeBases.get$I(index).getElementStructure$() <= index) {
index=(index + 1) % this._listeBases.size$();
} else {
index=this._listeBases.get$I(index).getElementStructure$();
result.add$TE(new Integer(index));
index=(index + 1) % this._listeBases.size$();
}while (index != startIndex){
result.add$TE(new Integer(index));
if (this._listeBases.get$I(index).getElementStructure$() == -1) {
index=(index + 1) % this._listeBases.size$();
} else {
index=this._listeBases.get$I(index).getElementStructure$();
result.add$TE(new Integer(index));
index=(index + 1) % this._listeBases.size$();
}}
return result;
});

Clazz.newMeth(C$, 'getStructDBN$', function () {
var result="";
for (var i=0; i < this._listeBases.size$(); i++) {
var j=this._listeBases.get$I(i).getElementStructure$();
if (j == -1) {
result += ".";
} else if (i > j) {
result += ")";
} else {
result += "(";
}}
return this.addStrandSeparators$S(result);
});

Clazz.newMeth(C$, 'getNonCrossingSubset$java_util_ArrayList', function (rankedBPs) {
var currentBPs=Clazz.new_($I$(1));
var pile=Clazz.new_($I$(37));
for (var i=0; i < rankedBPs.size$(); i++) {
var lbp=rankedBPs.get$I(i);
if (!lbp.isEmpty$()) {
var bp=lbp.get$I(0);
var ok=true;
if (!pile.empty$()) {
var x=(pile.peek$()).intValue$();
if ((bp.getIndex3$() >= x)) {
ok=false;
}}if (ok) {
lbp.remove$I(0);
currentBPs.add$TE(bp);
pile.add$TE(new Integer(bp.getIndex3$()));
}}if (!pile.empty$() && (i == (pile.peek$()).intValue$() ) ) {
pile.pop$();
}}
return currentBPs;
}, p$1);

Clazz.newMeth(C$, 'paginateStructure$', function () {
var result=Clazz.new_($I$(1));
var bps=this.getAllBPs$();
var mt=Clazz.array($I$(40), [bps.size$()]);
bps.toArray$TTA(mt);
$I$(41).sort$TTA$java_util_Comparator(mt, ((P$.RNA$1||
(function(){var C$=Clazz.newClass(P$, "RNA$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$fr_orsay_lri_varna_models_rna_ModeleBP$fr_orsay_lri_varna_models_rna_ModeleBP','compare$','compare$TT$TT'], function (arg0, arg1) {
if (arg0.getIndex5$() != arg1.getIndex5$()) return arg0.getIndex5$() - arg1.getIndex5$();
 else return arg0.getIndex3$() - arg1.getIndex3$();
});
})()
), Clazz.new_(P$.RNA$1.$init$, [this, null])));
var rankedBps=Clazz.new_($I$(1));
for (var i=0; i < this.getSize$(); i++) {
rankedBps.add$TE(Clazz.new_($I$(1)));
}
for (var i=0; i < mt.length; i++) {
rankedBps.get$I(mt[i].getIndex5$()).add$TE(mt[i]);
}
while (!bps.isEmpty$()){
var currentBPs=p$1.getNonCrossingSubset$java_util_ArrayList.apply(this, [rankedBps]);
var ss=Clazz.array(Integer.TYPE, [this.getSize$()]);
for (var i=0; i < ss.length; i++) {
ss[i]=-1;
}
for (var i=0; i < currentBPs.size$(); i++) {
var mbp=currentBPs.get$I(i);
ss[mbp.getIndex3$()]=mbp.getIndex5$();
ss[mbp.getIndex5$()]=mbp.getIndex3$();
}
bps.removeAll$java_util_Collection(currentBPs);
result.add$TE(ss);
}
return result;
});

Clazz.newMeth(C$, 'showBasic$IA', function (res) {
for (var i=0; i < res.length; i++) {
System.out.print$S(res[i] + ",");
}
System.out.println$();
}, p$1);

Clazz.newMeth(C$, 'getStrandShifts$', function () {
var result=Clazz.array(Integer.TYPE, [this.getSize$()]);
var acc=0;
for (var i=0; i < this.getSize$(); i++) {
if (this._backbone.getTypeBefore$I(i) === $I$(13).DISCONTINUOUS_TYPE ) {
acc++;
}result[i]=acc;
}
return result;
});

Clazz.newMeth(C$, 'addStrandSeparators$S', function (s) {
var res="";
for (var i=0; i < s.length$(); i++) {
res += s.charAt$I(i);
if (this._backbone.getTypeAfter$I(i) === $I$(13).DISCONTINUOUS_TYPE ) {
res += C$.DBNStrandSep;
}}
return res;
});

Clazz.newMeth(C$, 'getStructDBN$Z', function (includeMostPKs) {
var result=this.getStructDBN$();
if (includeMostPKs) {
var pages=this.paginateStructure$();
var res=Clazz.array(Character.TYPE, [this.getSize$()]);
for (var i=0; i < res.length; i++) {
res[i]=".";
}
var open=Clazz.array(Character.TYPE, -1, ["(", "[", "{", "<", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
var close=Clazz.array(Character.TYPE, [open.length]);
close[0]=")";
close[1]="]";
close[2]="}";
close[3]=">";
for (var i=4; i < open.length; i++) {
close[i]=Character.toLowerCase$C(open[i]);
}
for (var p=0; p < Math.min(pages.size$(), open.length); p++) {
var page=pages.get$I(p);
for (var i=0; i < res.length; i++) {
if (page[i] != -1 && page[i] > i  && res[i] == "."  && res[page[i]] == "." ) {
res[i]=open[p];
res[page[i]]=close[p];
}}
}
result="";
for (var i=0; i < res.length; i++) {
result += res[i];
}
}return this.addStrandSeparators$S(result);
});

Clazz.newMeth(C$, 'getStructDBN$IA', function (str) {
var result="";
for (var i=0; i < str.length; i++) {
if (str[i] == -1) {
result += ".";
} else if (str[i] > i) {
result += "(";
} else {
result += ")";
}}
return this.addStrandSeparators$S(result);
});

Clazz.newMeth(C$, 'getSeq$', function () {
var result="";
for (var i=0; i < this._listeBases.size$(); i++) {
result += (this._listeBases.get$I(i)).getContent$();
}
return this.addStrandSeparators$S(result);
});

Clazz.newMeth(C$, 'getStructBPSEQ$', function () {
var result="";
var str=this.getNonOverlappingStruct$();
for (var i=0; i < this._listeBases.size$(); i++) {
result += (i + 1) + " " + (this._listeBases.get$I(i)).getContent$() + " " + (str[i] + 1) + "\n" ;
}
return result;
});

Clazz.newMeth(C$, 'getNonCrossingStruct$', function () {
var result=Clazz.array(Integer.TYPE, [this._listeBases.size$()]);
for (var i=0; i < this._listeBases.size$(); i++) {
result[i]=this._listeBases.get$I(i).getElementStructure$();
}
return result;
});

Clazz.newMeth(C$, 'getNonOverlappingStruct$', function () {
var result=this.getNonCrossingStruct$();
for (var i=0; i < this._structureAux.size$(); i++) {
var msbp=this._structureAux.get$I(i);
var mb5=msbp.getPartner5$();
var mb3=msbp.getPartner3$();
var j5=mb5.getIndex$();
var j3=mb3.getIndex$();
if ((result[j3] == -1) && (result[j5] == -1) ) {
result[j3]=j5;
result[j5]=j3;
}}
return result;
});

Clazz.newMeth(C$, 'getStructCT$', function () {
var result="";
for (var i=0; i < this._listeBases.size$(); i++) {
result += (i + 1) + " " + (this._listeBases.get$I(i)).getContent$() + " " + i + " " + (i + 2) + " " + (this._listeBases.get$I(i).getElementStructure$() + 1) + " " + (i + 1) + "\n" ;
}
return result;
});

Clazz.newMeth(C$, 'saveAsBPSEQ$S$S', function (path, title) {
try {
var f=Clazz.new_($I$(6).c$$S,[path]);
f.write$S("# " + title + "\n" );
f.write$S(this.getStructBPSEQ$() + "\n");
f.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(42).c$$S$S,[e.getMessage$(), path]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'saveAsCT$S$S', function (path, title) {
try {
var f=Clazz.new_($I$(6).c$$S,[path]);
f.write$S("" + this._listeBases.size$() + " " + title + "\n" );
f.write$S(this.getStructCT$() + "\n");
f.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(42).c$$S$S,[e.getMessage$(), path]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'saveAsDBN$S$S', function (path, title) {
try {
var f=Clazz.new_($I$(6).c$$S,[path]);
f.write$S("> " + title + "\n" );
f.write$S(this.getListeBasesToString$() + "\n");
f.write$S(this.getStructDBN$() + "\n");
f.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(42).c$$S$S,[e.getMessage$(), path]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getListeBasesToString$', function () {
var s= String.instantialize();
for (var i=0; i < this._listeBases.size$(); i++) {
s += (this._listeBases.get$I(i)).getContent$();
}
return this.addStrandSeparators$S(s);
});

Clazz.newMeth(C$, 'applyBPs$java_util_ArrayList', function (allbps) {
var planar=Clazz.new_($I$(1));
var others=Clazz.new_($I$(1));
$I$(43).planarize$java_util_ArrayList$java_util_ArrayList$java_util_ArrayList$I(allbps, planar, others, this.getSize$());
for (var mb, $mb = planar.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
p$1.addBPnow$I$I$fr_orsay_lri_varna_models_rna_ModeleBP.apply(this, [mb.getPartner5$().getIndex$(), mb.getPartner3$().getIndex$(), mb]);
}
for (var mb, $mb = others.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
this.addBPAux$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(mb.getPartner5$().getIndex$(), mb.getPartner3$().getIndex$(), mb);
}
});

Clazz.newMeth(C$, 'set_listeBases$java_util_ArrayList', function (_liste) {
this._listeBases=_liste;
});

Clazz.newMeth(C$, 'addVARNAListener$fr_orsay_lri_varna_interfaces_InterfaceVARNAListener', function (rl) {
this._listeVARNAListener.add$TE(rl);
});

Clazz.newMeth(C$, 'warningEmition$S', function (warningMessage) {
for (var i=0; i < this._listeVARNAListener.size$(); i++) {
this._listeVARNAListener.get$I(i).onWarningEmitted$S(warningMessage);
}
});

Clazz.newMeth(C$, 'applyStyleOnBases$java_util_ArrayList$fr_orsay_lri_varna_models_rna_ModelBaseStyle', function (basesList, style) {
for (var i=1; i < basesList.size$(); i++) {
this._listeBases.get$I((basesList.get$I(i)).intValue$()).setStyleBase$fr_orsay_lri_varna_models_rna_ModelBaseStyle(style);
}
});

Clazz.newMeth(C$, 'correctReciprocity$IA', function (str) {
var result=Clazz.array(Integer.TYPE, [str.length]);
for (var i=0; i < str.length; i++) {
if (str[i] != -1) {
if (i == str[str[i]]) {
result[i]=str[i];
} else {
str[str[i]]=i;
}} else {
result[i]=-1;
}}
return result;
}, p$1);

Clazz.newMeth(C$, 'applyStruct$IA', function (str) {
str=p$1.correctReciprocity$IA.apply(this, [str]);
var planarSubset=$I$(43).planarize$IA(str);
this._structureAux.clear$();
for (var i=0; i < planarSubset.length; i++) {
if (str[i] > i) {
if (planarSubset[i] > i) {
p$1.addBPNow$I$I.apply(this, [i, planarSubset[i]]);
} else if ((planarSubset[i] != str[i])) {
this.addBPAux$I$I(i, str[i]);
}}}
}, p$1);

Clazz.newMeth(C$, 'get_listeBases$', function () {
return this._listeBases;
});

Clazz.newMeth(C$, 'getSize$', function () {
return this._listeBases.size$();
});

Clazz.newMeth(C$, 'findAll$', function () {
var listAll=Clazz.new_($I$(1));
for (var i=0; i < this.get_listeBases$().size$(); i++) {
listAll.add$TE(new Integer(i));
}
return listAll;
});

Clazz.newMeth(C$, 'findBulge$I', function (index) {
var listUp=Clazz.new_($I$(1));
if (this.get_listeBases$().get$I(index).getElementStructure$() == -1) {
var i=index;
var over=false;
while ((i < this.get_listeBases$().size$()) && !over ){
var j=this.get_listeBases$().get$I(i).getElementStructure$();
if (j == -1) {
listUp.add$TE(new Integer(i));
i++;
} else {
over=true;
}}
i=index - 1;
over=false;
while ((i >= 0) && !over ){
var j=this.get_listeBases$().get$I(i).getElementStructure$();
if (j == -1) {
listUp.add$TE(new Integer(i));
i--;
} else {
over=true;
}}
}return listUp;
});

Clazz.newMeth(C$, 'findStem$I', function (index) {
var listUp=Clazz.new_($I$(1));
var i=index;
do {
listUp.add$TE(new Integer(i));
var j=this.get_listeBases$().get$I(i).getElementStructure$();
if (j == -1) {
i=(i + 1) % this.getSize$();
} else {
if ((j < i) && (index <= i) && (j <= index)  ) {
i=j;
} else {
i=(i + 1) % this.getSize$();
}}} while (i != index);
return listUp;
});

Clazz.newMeth(C$, 'getHelixCountOnLoop$I', function (indice) {
var cptHelice=0;
if (indice < 0 || indice >= this.get_listeBases$().size$() ) return cptHelice;
var i=indice;
var j=this.get_listeBases$().get$I(i).getElementStructure$();
var justJumped=false;
if ((j != -1) && (j < i) ) {
i=j + 1;
indice=i;
}do {
j=this.get_listeBases$().get$I(i).getElementStructure$();
if ((j != -1) && (!justJumped) ) {
i=j;
justJumped=true;
cptHelice++;
} else {
i=(i + 1) % this.get_listeBases$().size$();
justJumped=false;
}} while (i != indice);
return cptHelice;
});

Clazz.newMeth(C$, 'findLoop$I', function (indice) {
return this.findLoopForward$I(indice);
});

Clazz.newMeth(C$, 'findLoopForward$I', function (indice) {
var base=Clazz.new_($I$(1));
if (indice < 0 || indice >= this.get_listeBases$().size$() ) return base;
var i=indice;
var j=this.get_listeBases$().get$I(i).getElementStructure$();
var justJumped=false;
if (j != -1) {
i=Math.min(i, j) + 1;
indice=i;
}do {
base.add$TE(new Integer(i));
j=this.get_listeBases$().get$I(i).getElementStructure$();
if ((j != -1) && (!justJumped) ) {
i=j;
justJumped=true;
} else {
i=(i + 1) % this.get_listeBases$().size$();
justJumped=false;
}} while (i != indice);
return base;
});

Clazz.newMeth(C$, 'findPair$I', function (indice) {
var base=Clazz.new_($I$(1));
var j=this.get_listeBases$().get$I(indice).getElementStructure$();
if (j != -1) {
base.add$TE(new Integer(Math.min(indice, j)));
base.add$TE(new Integer(Math.max(indice, j)));
}return base;
});

Clazz.newMeth(C$, 'findLoopBackward$I', function (indice) {
var base=Clazz.new_($I$(1));
if (indice < 0 || indice >= this.get_listeBases$().size$() ) return base;
var i=indice;
var j=this.get_listeBases$().get$I(i).getElementStructure$();
var justJumped=false;
if (j != -1) {
i=Math.min(i, j) - 1;
indice=i;
}if (i < 0) {
return base;
}do {
base.add$TE(new Integer(i));
j=this.get_listeBases$().get$I(i).getElementStructure$();
if ((j != -1) && (!justJumped) ) {
i=j;
justJumped=true;
} else {
i=(i + this.get_listeBases$().size$() - 1) % this.get_listeBases$().size$();
justJumped=false;
}} while (i != indice);
return base;
});

Clazz.newMeth(C$, 'findHelix$I', function (indice) {
var list=Clazz.new_($I$(1));
if (this.get_listeBases$().get$I(indice).getElementStructure$() != -1) {
list.add$TE(new Integer(indice));
list.add$TE(new Integer(this.get_listeBases$().get$I(indice).getElementStructure$()));
var i=1;
var prec=this.get_listeBases$().get$I(indice).getElementStructure$();
while (indice + i < this.get_listeBases$().size$() && this.get_listeBases$().get$I(indice + i).getElementStructure$() != -1  && this.get_listeBases$().get$I(indice + i).getElementStructure$() == prec - 1 ){
list.add$TE(new Integer(indice + i));
list.add$TE(new Integer(this.get_listeBases$().get$I(indice + i).getElementStructure$()));
prec=this.get_listeBases$().get$I(indice + i).getElementStructure$();
i++;
}
i=-1;
prec=this.get_listeBases$().get$I(indice).getElementStructure$();
while (indice + i >= 0 && this.get_listeBases$().get$I(indice + i).getElementStructure$() != -1  && this.get_listeBases$().get$I(indice + i).getElementStructure$() == prec + 1 ){
list.add$TE(new Integer(indice + i));
list.add$TE(new Integer(this.get_listeBases$().get$I(indice + i).getElementStructure$()));
prec=this.get_listeBases$().get$I(indice + i).getElementStructure$();
i--;
}
}return list;
});

Clazz.newMeth(C$, 'find3Prime$I', function (indice) {
var list=Clazz.new_($I$(1));
var over=false;
while ((indice >= 0) && !over ){
over=(this.get_listeBases$().get$I(indice).getElementStructure$() != -1);
indice--;
}
indice++;
if (over) {
indice++;
}for (var i=indice; i < this.get_listeBases$().size$(); i++) {
list.add$TE(new Integer(i));
if (this.get_listeBases$().get$I(i).getElementStructure$() != -1) {
return Clazz.new_($I$(1));
}}
return list;
});

Clazz.newMeth(C$, 'find5Prime$I', function (indice) {
var list=Clazz.new_($I$(1));
for (var i=0; i <= indice; i++) {
list.add$TE(new Integer(i));
if (this.get_listeBases$().get$I(i).getElementStructure$() != -1) {
return Clazz.new_($I$(1));
}}
return list;
});

Clazz.newMeth(C$, 'angle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (p1, p2, p3) {
var alpha=new Double(Math.atan2(p1.y - p2.y, p1.x - p2.x));
var beta=new Double(Math.atan2(p3.y - p2.y, p3.x - p2.x));
var angle=new Double(((beta).doubleValue$() - (alpha).doubleValue$()));
while ((angle).doubleValue$() < 0.0  || (angle).doubleValue$() > 6.283185307179586  ){
if ((angle).doubleValue$() < 0.0 ) angle += 6.283185307179586;
 else if ((angle).doubleValue$() > 6.283185307179586 ) angle -= 6.283185307179586;
}
return angle;
}, 1);

Clazz.newMeth(C$, 'findNonPairedBaseGroup$Integer', function (get_nearestBase) {
var list=Clazz.new_($I$(1));
var indice=(get_nearestBase).intValue$();
var nonpairedUp=true;
var nonpairedDown=true;
while (indice < this.get_listeBases$().size$() && nonpairedUp ){
if (this.get_listeBases$().get$I(indice).getElementStructure$() == -1) {
list.add$TE(new Integer(indice));
indice++;
} else {
nonpairedUp=false;
}}
indice=(get_nearestBase).intValue$() - 1;
while (indice >= 0 && nonpairedDown ){
if (this.get_listeBases$().get$I(indice).getElementStructure$() == -1) {
list.add$TE(new Integer(indice));
indice--;
} else {
nonpairedDown=false;
}}
return list;
});

Clazz.newMeth(C$, 'getStructureAux$', function () {
return this._structureAux;
});

Clazz.newMeth(C$, 'getIndexFromBaseNumber$I', function (num) {
for (var i=0; i < this._listeBases.size$(); i++) {
if (this._listeBases.get$I(i).getBaseNumber$() == num) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'addBPToStructureUsingNumbers$I$I', function (baseNumber5, baseNumber3) {
var i=this.getIndexFromBaseNumber$I(baseNumber5);
var j=this.getIndexFromBaseNumber$I(baseNumber3);
this.addBP$I$I(i, j);
});

Clazz.newMeth(C$, 'addBPToStructureUsingNumbers$I$I$fr_orsay_lri_varna_models_rna_ModeleBP', function (number5, number3, msbp) {
this.addBP$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(this.getIndexFromBaseNumber$I(number5), this.getIndexFromBaseNumber$I(number3), msbp);
});

Clazz.newMeth(C$, 'addBP$I$I', function (index5, index3) {
var i=index5;
var j=index3;
var part5=this._listeBases.get$I(i);
var part3=this._listeBases.get$I(j);
var msbp=Clazz.new_($I$(40).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase,[part5, part3]);
this.addBP$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(i, j, msbp);
});

Clazz.newMeth(C$, 'addBP$I$I$fr_orsay_lri_varna_models_rna_ModeleBP', function (index5, index3, msbp) {
var i=index5;
var j=index3;
if (j < i) {
var k=j;
j=i;
i=k;
}if (i != -1) {
for (var k=i; k <= j; k++) {
var tmp=this._listeBases.get$I(k);
var l=tmp.getElementStructure$();
if (l != -1) {
if ((l <= i) || (l >= j) ) {
this.addBPAux$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(i, j, msbp);
return;
}}}
p$1.addBPnow$I$I$fr_orsay_lri_varna_models_rna_ModeleBP.apply(this, [i, j, msbp]);
}});

Clazz.newMeth(C$, 'removeBP$fr_orsay_lri_varna_models_rna_ModeleBP', function (ms) {
if (this._structureAux.contains$O(ms)) {
this._structureAux.remove$O(ms);
} else {
var m5=ms.getPartner5$();
var m3=ms.getPartner3$();
var i=m5.getIndex$();
var j=m3.getIndex$();
if ((m5.getElementStructure$() == m3.getIndex$()) && (m3.getElementStructure$() == m5.getIndex$()) ) {
m5.removeElementStructure$();
m3.removeElementStructure$();
}}});

Clazz.newMeth(C$, 'addBPNow$I$I', function (i, j) {
if (j < i) {
var k=j;
j=i;
i=k;
}var part5=this._listeBases.get$I(i);
var part3=this._listeBases.get$I(j);
var msbp=Clazz.new_($I$(40).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase,[part5, part3]);
p$1.addBPnow$I$I$fr_orsay_lri_varna_models_rna_ModeleBP.apply(this, [i, j, msbp]);
}, p$1);

Clazz.newMeth(C$, 'addBPnow$I$I$fr_orsay_lri_varna_models_rna_ModeleBP', function (i, j, msbp) {
if (j < i) {
var k=j;
j=i;
i=k;
}var part5=this._listeBases.get$I(i);
var part3=this._listeBases.get$I(j);
msbp.setPartner5$fr_orsay_lri_varna_models_rna_ModeleBase(part5);
msbp.setPartner3$fr_orsay_lri_varna_models_rna_ModeleBase(part3);
part5.setElementStructure$I$fr_orsay_lri_varna_models_rna_ModeleBP(j, msbp);
part3.setElementStructure$I$fr_orsay_lri_varna_models_rna_ModeleBP(i, msbp);
}, p$1);

Clazz.newMeth(C$, 'addBPAux$I$I', function (i, j) {
var part5=this._listeBases.get$I(i);
var part3=this._listeBases.get$I(j);
var msbp=Clazz.new_($I$(40).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase,[part5, part3]);
this.addBPAux$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(i, j, msbp);
});

Clazz.newMeth(C$, 'addBPAux$I$I$fr_orsay_lri_varna_models_rna_ModeleBP', function (i, j, msbp) {
if (j < i) {
var k=j;
j=i;
i=k;
}var part5=this._listeBases.get$I(i);
var part3=this._listeBases.get$I(j);
msbp.setPartner5$fr_orsay_lri_varna_models_rna_ModeleBase(part5);
msbp.setPartner3$fr_orsay_lri_varna_models_rna_ModeleBase(part3);
this._structureAux.add$TE(msbp);
});

Clazz.newMeth(C$, 'getBPsAt$I', function (i) {
var result=Clazz.new_($I$(1));
if (this._listeBases.get$I(i).getElementStructure$() != -1) {
result.add$TE(this._listeBases.get$I(i).getStyleBP$());
}for (var k=0; k < this._structureAux.size$(); k++) {
var bp=this._structureAux.get$I(k);
if ((bp.getPartner5$().getIndex$() == i) || (bp.getPartner3$().getIndex$() == i) ) {
result.add$TE(bp);
}}
return result;
});

Clazz.newMeth(C$, 'getBPStyle$I$I', function (i, j) {
var result=null;
if (i > j) {
var k=j;
j=i;
i=k;
}if (this._listeBases.get$I(i).getElementStructure$() == j) {
result=this._listeBases.get$I(i).getStyleBP$();
}for (var k=0; k < this._structureAux.size$(); k++) {
var bp=this._structureAux.get$I(k);
if ((bp.getPartner5$().getIndex$() == i) && (bp.getPartner3$().getIndex$() == j) ) {
result=bp;
}}
return result;
});

Clazz.newMeth(C$, 'getSecStrBPs$', function () {
var result=Clazz.new_($I$(1));
for (var i=0; i < this.getSize$(); i++) {
var mb=this._listeBases.get$I(i);
var k=mb.getElementStructure$();
if ((k != -1) && (k > i) ) {
result.add$TE(mb.getStyleBP$());
}}
return result;
});

Clazz.newMeth(C$, 'getAuxBPs$', function () {
var result=Clazz.new_($I$(1));
for (var bp, $bp = this._structureAux.iterator$(); $bp.hasNext$()&&((bp=($bp.next$())),1);) {
result.add$TE(bp);
}
return result;
});

Clazz.newMeth(C$, 'getAllBPs$', function () {
var result=Clazz.new_($I$(1));
result.addAll$java_util_Collection(this.getSecStrBPs$());
result.addAll$java_util_Collection(this.getAuxBPs$());
return result;
});

Clazz.newMeth(C$, 'getAuxBPs$I', function (i) {
var result=Clazz.new_($I$(1));
for (var bp, $bp = this._structureAux.iterator$(); $bp.hasNext$()&&((bp=($bp.next$())),1);) {
if ((bp.getPartner5$().getIndex$() == i) || (bp.getPartner3$().getIndex$() == i) ) {
result.add$TE(bp);
}}
return result;
});

Clazz.newMeth(C$, 'setBaseInnerColor$java_awt_Color', function (c) {
for (var i=0; i < this._listeBases.size$(); i++) {
var mb=this._listeBases.get$I(i);
mb.getStyleBase$().setBaseInnerColor$java_awt_Color(c);
}
});

Clazz.newMeth(C$, 'setBaseNumbersColor$java_awt_Color', function (c) {
for (var i=0; i < this._listeBases.size$(); i++) {
var mb=this._listeBases.get$I(i);
mb.getStyleBase$().setBaseNumberColor$java_awt_Color(c);
}
});

Clazz.newMeth(C$, 'setBaseNameColor$java_awt_Color', function (c) {
for (var i=0; i < this._listeBases.size$(); i++) {
var mb=this._listeBases.get$I(i);
mb.getStyleBase$().setBaseNameColor$java_awt_Color(c);
}
});

Clazz.newMeth(C$, 'setBaseOutlineColor$java_awt_Color', function (c) {
for (var i=0; i < this._listeBases.size$(); i++) {
var mb=this._listeBases.get$I(i);
mb.getStyleBase$().setBaseOutlineColor$java_awt_Color(c);
}
});

Clazz.newMeth(C$, 'getName$', function () {
return this._name;
});

Clazz.newMeth(C$, 'setName$S', function (n) {
this._name=n;
});

Clazz.newMeth(C$, 'getAnnotations$', function () {
return this._listeAnnotations;
});

Clazz.newMeth(C$, 'removeAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation', function (t) {
return this._listeAnnotations.remove$O(t);
});

Clazz.newMeth(C$, 'addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation', function (t) {
this._listeAnnotations.add$TE(t);
});

Clazz.newMeth(C$, 'removeAnnotation$S', function (filter) {
var condamne=Clazz.new_($I$(1));
for (var t, $t = this._listeAnnotations.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
if (t.getTexte$().contains$CharSequence(filter)) {
condamne.add$TE(t);
}}
for (var t, $t = condamne.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
this._listeAnnotations.remove$O(t);
}
});

Clazz.newMeth(C$, 'clearAnnotations$', function () {
this._listeAnnotations.clear$();
});

Clazz.newMeth(C$, 'autoAnnotateStrandEnds$', function () {
if (!this._strandEndsAnnotated) {
var tailleListBases=this._listeBases.size$();
var endAnnotate=false;
this.addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(Clazz.new_($I$(44).c$$S$fr_orsay_lri_varna_models_rna_ModeleBase,["5\'", this._listeBases.get$I(0)]));
for (var i=0; i < this._listeBases.size$() - 1; i++) {
var realposA=this._listeBases.get$I(i).getBaseNumber$();
var realposB=this._listeBases.get$I(i + 1).getBaseNumber$();
if (realposB - realposA != 1) {
this.addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(Clazz.new_($I$(44).c$$S$fr_orsay_lri_varna_models_rna_ModeleBase,["3\'", this._listeBases.get$I(i)]));
this.addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(Clazz.new_($I$(44).c$$S$fr_orsay_lri_varna_models_rna_ModeleBase,["5\'", this._listeBases.get$I(i + 1)]));
if (i + 1 == this._listeBases.size$() - 1) {
endAnnotate=true;
}}}
if (!endAnnotate) {
this.addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(Clazz.new_($I$(44).c$$S$fr_orsay_lri_varna_models_rna_ModeleBase,["3\'", this._listeBases.get$I(tailleListBases - 1)]));
}this._strandEndsAnnotated=true;
} else {
this.removeAnnotation$S("3\'");
this.removeAnnotation$S("5\'");
this._strandEndsAnnotated=false;
}});

Clazz.newMeth(C$, 'autoAnnotateHelices$', function () {
var p=Clazz.new_($I$(37));
p.push$TE(new Integer(0));
var nbH=1;
while (!p.empty$()){
var i=(p.pop$()).intValue$();
if (i < this._listeBases.size$()) {
var mb=this._listeBases.get$I(i);
var j=mb.getElementStructure$();
if (j == -1) {
p.push$TE(new Integer(i + 1));
} else {
if (j > i) {
var mbp=this._listeBases.get$I(j);
p.push$TE(new Integer(j + 1));
var h=Clazz.new_($I$(1));
var k=1;
while (mb.getElementStructure$() == mbp.getIndex$()){
h.add$TE(mb);
h.add$TE(mbp);
mb=this._listeBases.get$I(i + k);
mbp=this._listeBases.get$I(j - k);
k++;
}
try {
this.addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(Clazz.new_($I$(44).c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType,["H" + nbH++, h, $I$(19).HELIX]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
p.push$TE(new Integer(i + k));
}}}}
});

Clazz.newMeth(C$, 'autoAnnotateTerminalLoops$', function () {
var p=Clazz.new_($I$(37));
p.push$TE(new Integer(0));
var nbT=1;
while (!p.empty$()){
var i=(p.pop$()).intValue$();
if (i < this._listeBases.size$()) {
var mb=this._listeBases.get$I(i);
var j=mb.getElementStructure$();
if (j == -1) {
var k=1;
var t=Clazz.new_($I$(1));
while ((i + k < this.getSize$()) && (mb.getElementStructure$() == -1) ){
t.add$TE(mb);
mb=this._listeBases.get$I(i + k);
k++;
}
if (mb.getElementStructure$() != -1) {
if (mb.getElementStructure$() == i - 1) {
try {
t.add$TE(this._listeBases.get$I(i - 1));
t.add$TE(this._listeBases.get$I(i + k - 1));
this.addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(Clazz.new_($I$(44).c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType,["T" + nbT++, t, $I$(19).LOOP]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}p.push$TE(new Integer(i + k - 1));
}} else {
if (j > i) {
p.push$TE(new Integer(j + 1));
p.push$TE(new Integer(i + 1));
}}}}
});

Clazz.newMeth(C$, 'autoAnnotateInteriorLoops$', function () {
var p=Clazz.new_($I$(37));
p.push$TE(new Integer(0));
var nbT=1;
while (!p.empty$()){
var i=(p.pop$()).intValue$();
if (i < this._listeBases.size$()) {
var mb=this._listeBases.get$I(i);
var j=mb.getElementStructure$();
if (j == -1) {
var k=i + 1;
var t=Clazz.new_($I$(1));
var terminal=true;
while ((k < this.getSize$()) && ((mb.getElementStructure$() >= i) || (mb.getElementStructure$() == -1) ) ){
t.add$TE(mb);
mb=this._listeBases.get$I(k);
if ((mb.getElementStructure$() == -1) || (mb.getElementStructure$() < k) ) k++;
 else {
p.push$TE(new Integer(k));
terminal=false;
k=mb.getElementStructure$();
}}
if (mb.getElementStructure$() != -1) {
if ((mb.getElementStructure$() == i - 1) && !terminal ) {
try {
t.add$TE(this._listeBases.get$I(i - 1));
t.add$TE(this._listeBases.get$I(k - 1));
this.addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(Clazz.new_($I$(44).c$$S$java_util_ArrayList$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType,["I" + nbT++, t, $I$(19).LOOP]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
p.push$TE(new Integer(k - 1));
}}} else {
if (j > i) {
p.push$TE(new Integer(i + 1));
}}}}
});

Clazz.newMeth(C$, 'getAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation_AnchorType$fr_orsay_lri_varna_models_rna_ModeleBase', function (type, base) {
var result=null;
for (var t, $t = this._listeAnnotations.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
if (t.getType$() === type ) {
switch (type) {
case $I$(19).BASE:
if (base === t.getAncrage$() ) return t;
break;
case $I$(19).HELIX:
case $I$(19).LOOP:
{
var mbl=t.getAncrage$();
if (mbl.contains$O(base)) return t;
}break;
}
}}
return result;
});

Clazz.newMeth(C$, 'addChemProbAnnotation$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation', function (cpa) {
this._chemProbAnnotations.add$TE(cpa);
});

Clazz.newMeth(C$, 'getChemProbAnnotations$', function () {
return this._chemProbAnnotations;
});

Clazz.newMeth(C$, 'setColorMapValues$DoubleA$fr_orsay_lri_varna_models_rna_ModeleColorMap', function (values, cm) {
this.setColorMapValues$DoubleA$fr_orsay_lri_varna_models_rna_ModeleColorMap$Z(values, cm, false);
});

Clazz.newMeth(C$, 'adaptColorMapToValues$fr_orsay_lri_varna_models_rna_ModeleColorMap', function (cm) {
var min=1.7976931348623157E308;
var max=4.9E-324;
for (var i=0; i < Math.min(this._listeBases.size$(), this._listeBases.size$()); i++) {
var mb=this._listeBases.get$I(i);
max=Math.max(max, mb.getValue$());
min=Math.min(min, mb.getValue$());
}
cm.rescale$D$D(min, max);
});

Clazz.newMeth(C$, 'loadDotPlot$java_io_StreamTokenizer', function (st) {
var result=Clazz.new_($I$(1));
try {
var inSeq=false;
var sequence="";
var accumulator=Clazz.new_($I$(1));
var type=st.nextToken$();
var BP=Clazz.new_($I$(45));
while (type != -1){
switch (type) {
case (-2):
accumulator.add$TE(new Double(st.nval));
break;
case (10):
break;
case (-3):
if (st.sval.equals$O("/sequence")) {
inSeq=true;
} else if (st.sval.equals$O("ubox")) {
var i=accumulator.get$I(accumulator.size$() - 3).intValue$() - 1;
var j=accumulator.get$I(accumulator.size$() - 2).intValue$() - 1;
var val=(accumulator.get$I(accumulator.size$() - 1)).doubleValue$();
BP.put$TK$TV(Clazz.new_($I$(30).c$$TT$TU,[new Integer(Math.min(i, j)), new Integer(Math.max(i, j))]), new Double(val * val));
accumulator.clear$();
} else if (inSeq) {
sequence += st.sval;
}break;
case 41:
inSeq=false;
break;
}
type=st.nextToken$();
}
for (var i=0; i < this.getSize$(); i++) {
var j=this.getBaseAt$I(i).getElementStructure$();
if (j != -1) {
var coor=Clazz.new_($I$(30).c$$TT$TU,[new Integer(Math.min(i, j)), new Integer(Math.max(i, j))]);
if (BP.containsKey$O(coor)) {
result.add$TE(BP.get$O(coor));
} else {
result.add$TE(new Double(0.));
}} else {
var acc=1.0;
for (var k=0; k < this.getSize$(); k++) {
var coor=Clazz.new_($I$(30).c$$TT$TU,[new Integer(Math.min(i, k)), new Integer(Math.max(i, k))]);
if (BP.containsKey$O(coor)) {
acc -= (BP.get$O(coor)).doubleValue$();
}}
result.add$TE(new Double(acc));
}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
return result;
}, p$1);

Clazz.newMeth(C$, 'readValues$java_io_Reader$fr_orsay_lri_varna_models_rna_ModeleColorMap', function (r, cm) {
try {
var st=Clazz.new_($I$(46).c$$java_io_Reader,[r]);
st.eolIsSignificant$Z(true);
st.wordChars$I$I("/".$c(), "/".$c());
st.parseNumbers$();
var vals=Clazz.new_($I$(1));
var curVals=Clazz.new_($I$(1));
var type=st.nextToken$();
var isDotPlot=false;
if (type == 37 ) {
vals=p$1.loadDotPlot$java_io_StreamTokenizer.apply(this, [st]);
isDotPlot=true;
} else {
while (type != -1){
switch (type) {
case (-2):
curVals.add$TE(new Double(st.nval));
break;
case (10):
if (curVals.size$() > 0) {
vals.add$TE(curVals.get$I(curVals.size$() - 1));
curVals=Clazz.new_($I$(1));
}break;
}
type=st.nextToken$();
}
if (curVals.size$() > 0) vals.add$TE(curVals.get$I(curVals.size$() - 1));
}var v=Clazz.array(Double, [vals.size$()]);
for (var i=0; i < Math.min(vals.size$(), this.getSize$()); i++) {
v[i]=vals.get$I(i);
}
this.setColorMapValues$DoubleA$fr_orsay_lri_varna_models_rna_ModeleColorMap$Z(v, cm, true);
if (isDotPlot) {
cm.setMinValue$D(0.0);
cm.setMaxValue$D(1.0);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setColorMapValues$DoubleA$fr_orsay_lri_varna_models_rna_ModeleColorMap$Z', function (values, cm, rescaleColorMap) {
if (values.length > 0) {
for (var i=0; i < Math.min(values.length, this._listeBases.size$()); i++) {
var mb=this._listeBases.get$I(i);
mb.setValue$D((values[i]).doubleValue$());
}
if (rescaleColorMap) {
this.adaptColorMapToValues$fr_orsay_lri_varna_models_rna_ModeleColorMap(cm);
}}});

Clazz.newMeth(C$, 'getColorMapValues$', function () {
var values=Clazz.array(Double, [this._listeBases.size$()]);
for (var i=0; i < this._listeBases.size$(); i++) {
values[i]=new Double(this._listeBases.get$I(i).getValue$());
}
return values;
});

Clazz.newMeth(C$, 'rescaleColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap', function (cm) {
var max=new Double(4.9E-324);
var min=new Double(1.7976931348623157E308);
for (var i=0; i < this._listeBases.size$(); i++) {
var value=new Double(this._listeBases.get$I(i).getValue$());
max=new Double(Math.max((max).doubleValue$(), (value).doubleValue$()));
min=new Double(Math.min((min).doubleValue$(), (value).doubleValue$()));
}
cm.rescale$D$D((min).doubleValue$(), (max).doubleValue$());
});

Clazz.newMeth(C$, 'addBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (mb) {
this._listeBases.add$TE(mb);
});

Clazz.newMeth(C$, 'setSequence$S', function (s) {
this.setSequence$java_util_List(C$.explodeSequence$S(s));
});

Clazz.newMeth(C$, 'setSequence$java_util_List', function (s) {
var i=0;
var j=0;
while ((i < s.size$()) && (j < this._listeBases.size$()) ){
var mb=this._listeBases.get$I(j);
if (Clazz.instanceOf(mb, "fr.orsay.lri.varna.models.rna.ModeleBaseNucleotide")) {
(mb).setBase$S(s.get$I(i));
i++;
j++;
} else if (Clazz.instanceOf(mb, "fr.orsay.lri.varna.models.rna.ModeleBasesComparison")) {
(mb).setBase1$Character(new Character(((s.get$I(i).length$() > 0) ? s.get$I(i).charAt$I(0) : " ")));
(mb).setBase2$Character(new Character(((s.get$I(i + 1).length$() > 0) ? s.get$I(i + 1).charAt$I(0) : " ")));
i+=2;
j++;
} else j++;
}
for (i=this._listeBases.size$(); i < s.size$(); i++) {
this._listeBases.add$TE(Clazz.new_($I$(34).c$$S$I,[s.get$I(i), i]));
}
});

Clazz.newMeth(C$, 'eraseSequence$', function () {
var j=0;
while ((j < this._listeBases.size$())){
var mb=this._listeBases.get$I(j);
if (Clazz.instanceOf(mb, "fr.orsay.lri.varna.models.rna.ModeleBaseNucleotide")) {
(mb).setBase$S("");
j++;
} else if (Clazz.instanceOf(mb, "fr.orsay.lri.varna.models.rna.ModeleBasesComparison")) {
(mb).setBase1$Character(new Character(' '));
(mb).setBase2$Character(new Character(' '));
j++;
} else j++;
}
});

Clazz.newMeth(C$, 'clone$', function () {
try {
var out=Clazz.new_($I$(47));
var oout=Clazz.new_($I$(48).c$$java_io_OutputStream,[out]);
oout.writeObject$O(this);
var $in=Clazz.new_($I$(49).c$$java_io_InputStream,[Clazz.new_($I$(50).c$$BA,[out.toByteArray$()])]);
return $in.readObject$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["cannot clone class [" + this.getClass$().getName$() + "] via serialization: " + e.toString() ]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getBaseAt$I', function (index) {
return this._listeBases.get$I(index);
});

Clazz.newMeth(C$, 'getBasesAt$java_util_Collection', function (indices) {
var mbs=Clazz.new_($I$(1));
for (var i, $i = indices.iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
mbs.add$TE(this.getBaseAt$I(i));
}
return mbs;
});

Clazz.newMeth(C$, 'getBasesBetween$I$I', function (from, to) {
var mbs=Clazz.new_($I$(1));
var bck=Math.min(from, to);
to=Math.max(from, to);
from=bck;
for (var i=from; i <= to; i++) {
mbs.add$TE(this.getBaseAt$I(i));
}
return mbs;
});

Clazz.newMeth(C$, 'addHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation', function (n) {
this._listeRegionHighlights.add$TE(n);
});

Clazz.newMeth(C$, 'removeHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation', function (n) {
this._listeRegionHighlights.remove$O(n);
});

Clazz.newMeth(C$, 'removeChemProbAnnotation$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation', function (a) {
this._chemProbAnnotations.remove$O(a);
});

Clazz.newMeth(C$, 'clearChemProbAnnotations$', function () {
this._chemProbAnnotations.clear$();
});

Clazz.newMeth(C$, 'addHighlightRegion$I$I$java_awt_Color$java_awt_Color$D', function (from, to, fill, outline, radius) {
this._listeRegionHighlights.add$TE(Clazz.new_($I$(51).c$$java_util_ArrayList$java_awt_Color$java_awt_Color$D,[this.getBasesBetween$I$I(from, to), fill, outline, radius]));
});

Clazz.newMeth(C$, 'addHighlightRegion$I$I', function (from, to) {
this._listeRegionHighlights.add$TE(Clazz.new_($I$(51).c$$java_util_ArrayList,[this.getBasesBetween$I$I(from, to)]));
});

Clazz.newMeth(C$, 'getHighlightRegion$', function () {
return this._listeRegionHighlights;
});

Clazz.newMeth(C$, 'globalRotation$Double', function (angleDegres) {
if (this._listeBases.size$() > 0) {
var angle=new Double((angleDegres).doubleValue$() * 3.141592653589793 / 180);
var maxX=new Double(this._listeBases.get$I(0).getCoords$().x);
var maxY=new Double(this._listeBases.get$I(0).getCoords$().y);
var minX=new Double(this._listeBases.get$I(0).getCoords$().x);
var minY=new Double(this._listeBases.get$I(0).getCoords$().y);
for (var i=0; i < this._listeBases.size$(); i++) {
if (this._listeBases.get$I(i).getCoords$().getX$() < (minX).doubleValue$() ) minX=new Double(this._listeBases.get$I(i).getCoords$().getX$());
if (this._listeBases.get$I(i).getCoords$().getY$() < (minY).doubleValue$() ) minY=new Double(this._listeBases.get$I(i).getCoords$().getY$());
if (this._listeBases.get$I(i).getCoords$().getX$() > (maxX).doubleValue$() ) maxX=new Double(this._listeBases.get$I(i).getCoords$().getX$());
if (this._listeBases.get$I(i).getCoords$().getX$() > (maxY).doubleValue$() ) maxY=new Double(this._listeBases.get$I(i).getCoords$().getY$());
}
var centre=Clazz.new_($I$(10).c$$D$D,[((maxX).doubleValue$() - (minX).doubleValue$()) / 2, ((maxY).doubleValue$() - (minY).doubleValue$()) / 2]);
var x;
var y;
for (var i=0; i < this._listeBases.size$(); i++) {
x=new Double(Math.cos((angle).doubleValue$()) * (this._listeBases.get$I(i).getCenter$().getX$() - centre.x) - Math.sin((angle).doubleValue$()) * (this._listeBases.get$I(i).getCenter$().getY$() - centre.y) + centre.x);
y=new Double(Math.sin((angle).doubleValue$()) * (this._listeBases.get$I(i).getCenter$().getX$() - centre.x) + Math.cos((angle).doubleValue$()) * (this._listeBases.get$I(i).getCenter$().getY$() - centre.y) + centre.y);
this._listeBases.get$I(i).setCenter$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[(x).doubleValue$(), (y).doubleValue$()]));
x=new Double(Math.cos((angle).doubleValue$()) * (this._listeBases.get$I(i).getCoords$().getX$() - centre.x) - Math.sin((angle).doubleValue$()) * (this._listeBases.get$I(i).getCoords$().getY$() - centre.y) + centre.x);
y=new Double(Math.sin((angle).doubleValue$()) * (this._listeBases.get$I(i).getCoords$().getX$() - centre.x) + Math.cos((angle).doubleValue$()) * (this._listeBases.get$I(i).getCoords$().getY$() - centre.y) + centre.y);
this._listeBases.get$I(i).setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(10).c$$D$D,[(x).doubleValue$(), (y).doubleValue$()]));
}
}});

Clazz.newMeth(C$, 'flipHelix$java_awt_Point', function (h) {
if (h.x != -1 && h.y != -1  && h.x != h.y ) {
var hBeg=h.x;
var hEnd=h.y;
var A=this.getCoords$I(hBeg);
var B=this.getCoords$I(hEnd);
var AB=Clazz.new_($I$(10).c$$D$D,[B.x - A.x, B.y - A.y]);
var normAB=Math.sqrt(AB.x * AB.x + AB.y * AB.y);
var O=A;
var Ox=Clazz.new_($I$(10).c$$D$D,[AB.x / normAB, AB.y / normAB]);
var old=Clazz.new_($I$(45));
for (var i=hBeg + 1; i < hEnd; i++) {
var P=this.getCoords$I(i);
var nP=C$.project$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(O, Ox, P);
old.put$TK$TV(new Integer(i), nP);
this.setCoord$I$java_awt_geom_Point2D_Double(i, nP);
var Center=this.getCenter$I(i);
this.setCenter$I$java_awt_geom_Point2D_Double(i, C$.project$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(O, Ox, Center));
}
}});

Clazz.newMeth(C$, 'project$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (O, Ox, C) {
var OC=Clazz.new_($I$(10).c$$D$D,[C.x - O.x, C.y - O.y]);
var normOX=(Ox.x * OC.x + Ox.y * OC.y);
var OX=Clazz.new_($I$(10).c$$D$D,[(normOX * Ox.x), (normOX * Ox.y)]);
var XC=Clazz.new_($I$(10).c$$D$D,[OC.x - OX.x, OC.y - OX.y]);
var OCP=Clazz.new_($I$(10).c$$D$D,[OX.x - XC.x, OX.y - XC.y]);
var CP=Clazz.new_($I$(10).c$$D$D,[O.x + OCP.x, O.y + OCP.y]);
return CP;
}, 1);

Clazz.newMeth(C$, 'testDirectionality$I$I$I', function (i, j, k) {
var pi=this.getCoords$I(i);
var pj=this.getCoords$I(j);
var pk=this.getCoords$I(k);
return C$.testDirectionality$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(pi, pj, pk);
});

Clazz.newMeth(C$, 'testDirectionality$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (pi, pj, pk) {
var test=(pj.x - pi.x) * (pk.y - pj.y) - (pj.y - pi.y) * (pk.x - pj.x);
return test < 0.0 ;
}, 1);

Clazz.newMeth(C$, 'getOrientation$', function () {
var maxDist=4.9E-324;
var angle=0;
for (var i=0; i < this._listeBases.size$(); i++) {
var b1=this._listeBases.get$I(i);
for (var j=i + 1; j < this._listeBases.size$(); j++) {
var b2=this._listeBases.get$I(j);
var p1=b1._coords.toPoint2D$();
var p2=b2._coords.toPoint2D$();
var dist=p1.distance$java_awt_geom_Point2D(p2);
if (dist > maxDist ) {
maxDist=dist;
angle=C$.computeAngle$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double(p1, p2);
}}
}
return angle;
});

Clazz.newMeth(C$, 'hasVirtualLoops$', function () {
var consecutiveBPs=false;
for (var i=0; i < this._listeBases.size$(); i++) {
var j=this._listeBases.get$I(i).getElementStructure$();
if (j == i + 1) {
consecutiveBPs=true;
}}
return ((this._drawMode != 4) && (this._drawMode != 1) && (consecutiveBPs)  );
});

Clazz.newMeth(C$, 'getHTMLDescription$', function () {
var result="<table>";
result += "<tr><td><b>Name:</b></td><td>" + this._name + "</td></tr>" ;
result += "<tr><td><b>Length:</b></td><td>" + this.getSize$() + " nts</td></tr>" ;
result += "<tr><td><b>Base-pairs:</b></td><td>" + this.getAllBPs$().size$() + " </td></tr>" ;
return result + "</table>";
});

Clazz.newMeth(C$, 'getID$', function () {
return this._id;
});

Clazz.newMeth(C$, 'setID$S', function (id) {
this._id=id;
});

Clazz.newMeth(C$, 'getGapPositions$S', function (gapString) {
var result=Clazz.new_($I$(1));
for (var i=0; i < gapString.length$(); i++) {
var c=gapString.charAt$I(i);
if (c == "." || c == ":" ) {
result.add$TE(new Integer(i));
}}
return result;
}, 1);

Clazz.newMeth(C$, 'restrictTo$S', function (gapString) {
return this.restrictTo$java_util_ArrayList(C$.getGapPositions$S(gapString));
});

Clazz.newMeth(C$, 'restrictTo$java_util_ArrayList', function (positions) {
var result=Clazz.new_(C$);
var oldSeq=this.getSeq$();
var newSeq="";
var removedPos=Clazz.new_($I$(32).c$$java_util_Collection,[positions]);
var matching=Clazz.array(Integer.TYPE, [oldSeq.length$()]);
var j=0;
for (var i=0; i < oldSeq.length$(); i++) {
matching[i]=j;
if (!removedPos.contains$O(new Integer(i))) {
newSeq += oldSeq.charAt$I(i);
j++;
}}
result.setRNA$S(newSeq);
for (var m, $m = this.getAllBPs$().iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
if (removedPos.contains$O(new Integer(m.getIndex5$())) || removedPos.contains$O(new Integer(m.getIndex3$())) ) {
var i5=matching[m.getIndex5$()];
var i3=matching[m.getIndex3$()];
var msbp=Clazz.new_($I$(40).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$fr_orsay_lri_varna_models_rna_ModeleBP_Stericity,[result.getBaseAt$I(i5), result.getBaseAt$I(i3), m.getEdgePartner5$(), m.getEdgePartner3$(), m.getStericity$()]);
result.addBP$I$I$fr_orsay_lri_varna_models_rna_ModeleBP(i5, i3, msbp);
}}
return result;
});

Clazz.newMeth(C$, 'rescale$D', function (d) {
for (var mb, $mb = this._listeBases.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
mb._coords.x *= d;
mb._coords.y *= d;
mb._center.x *= d;
mb._center.y *= d;
}
});

Clazz.newMeth(C$, 'getListeBases$', function () {
return this._listeBases;
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:30:03 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
