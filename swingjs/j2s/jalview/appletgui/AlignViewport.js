(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Font','jalview.workers.AlignCalcManager','jalview.bin.JalviewLite','jalview.renderer.ResidueShader','jalview.schemes.ColourSchemeProperty','jalview.schemes.UserColourScheme','java.awt.Frame','jalview.datamodel.SequenceGroup','jalview.datamodel.ColumnSelection','jalview.datamodel.HiddenColumns','jalview.structure.StructureSelectionManager','jalview.datamodel.SearchResults']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignViewport", null, 'jalview.viewmodel.AlignmentViewport', 'jalview.structure.SelectionSource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cursorMode=false;
this.font=Clazz.new_($I$(1,1).c$$S$I$I,["SansSerif", 0, 10]);
this.validCharWidth=true;
this.featureSettings=null;
this.heightScale=1;
this.widthScale=1;
this.followSelection=true;
},1);

C$.$fields$=[['Z',['cursorMode','validCharWidth','centreColumnLabels','followSelection'],'F',['heightScale','widthScale'],'O',['font','java.awt.Font','applet','jalview.bin.JalviewLite','annotationColumnSelectionState','jalview.appletgui.AnnotationColumnChooser','nullFrame','java.awt.Frame','featureSettings','jalview.appletgui.FeatureSettings']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite',  function (al, applet) {
;C$.superclazz.c$$jalview_datamodel_AlignmentI.apply(this,[al]);C$.$init$.apply(this);
this.calculator=Clazz.new_($I$(2,1));
this.applet=applet;
this.setPadGaps$Z(true);
if (applet != null ) {
var param=applet.getParameter$S("widthScale");
if (param != null ) {
try {
this.widthScale=Float.valueOf$S(param).floatValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (this.widthScale <= 1.0 ) {
System.err.println$S("Invalid alignment character width scaling factor (" + new Float(this.widthScale).toString() + "). Ignoring." );
this.widthScale=1;
}if ($I$(3).debug) {
System.err.println$S("Alignment character width scaling factor is now " + new Float(this.widthScale).toString());
}}param=applet.getParameter$S("heightScale");
if (param != null ) {
try {
this.heightScale=Float.valueOf$S(param).floatValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (this.heightScale <= 1.0 ) {
System.err.println$S("Invalid alignment character height scaling factor (" + new Float(this.heightScale).toString() + "). Ignoring." );
this.heightScale=1;
}if ($I$(3).debug) {
System.err.println$S("Alignment character height scaling factor is now " + new Float(this.heightScale).toString());
}}}this.setFont$java_awt_Font$Z(this.font, true);
if (applet != null ) {
this.setShowJVSuffix$Z(applet.getDefaultParameter$S$Z("showFullId", this.getShowJVSuffix$()));
this.setShowAnnotation$Z(applet.getDefaultParameter$S$Z("showAnnotation", this.isShowAnnotation$()));
this.showConservation=applet.getDefaultParameter$S$Z("showConservation", this.showConservation);
this.showQuality=applet.getDefaultParameter$S$Z("showQuality", this.showQuality);
this.showConsensus=applet.getDefaultParameter$S$Z("showConsensus", this.showConsensus);
this.showOccupancy=applet.getDefaultParameter$S$Z("showOccupancy", this.showOccupancy);
this.setShowUnconserved$Z(applet.getDefaultParameter$S$Z("showUnconserved", this.getShowUnconserved$()));
this.setScaleProteinAsCdna$Z(applet.getDefaultParameter$S$Z("scaleProteinAsCdna", this.isScaleProteinAsCdna$()));
var param=applet.getParameter$S("upperCase");
if (param != null ) {
if (param.equalsIgnoreCase$S("bold")) {
this.setUpperCasebold$Z(true);
}}this.sortByTree=applet.getDefaultParameter$S$Z("sortByTree", this.sortByTree);
this.setFollowHighlight$Z(applet.getDefaultParameter$S$Z("automaticScrolling", this.isFollowHighlight$()));
this.followSelection=this.isFollowHighlight$();
this.showSequenceLogo=applet.getDefaultParameter$S$Z("showSequenceLogo", this.showSequenceLogo);
this.normaliseSequenceLogo=applet.getDefaultParameter$S$Z("normaliseSequenceLogo", applet.getDefaultParameter$S$Z("normaliseLogo", this.normaliseSequenceLogo));
this.showGroupConsensus=applet.getDefaultParameter$S$Z("showGroupConsensus", this.showGroupConsensus);
this.showGroupConservation=applet.getDefaultParameter$S$Z("showGroupConservation", this.showGroupConservation);
this.showConsensusHistogram=applet.getDefaultParameter$S$Z("showConsensusHistogram", this.showConsensusHistogram);
}if (applet != null ) {
var colour=al.isNucleotide$() ? applet.getParameter$S("defaultColourNuc") : applet.getParameter$S("defaultColourProt");
if (colour == null ) {
colour=applet.getParameter$S("defaultColour");
}if (colour == null ) {
colour=applet.getParameter$S("userDefinedColour");
if (colour != null ) {
colour="User Defined";
}}if (colour != null ) {
this.residueShading=Clazz.new_([$I$(5).getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S(this, this.alignment, colour)],$I$(4,1).c$$jalview_schemes_ColourSchemeI);
if (this.residueShading != null ) {
this.residueShading.setConsensus$jalview_datamodel_ProfilesI(this.hconsensus);
}}if (applet.getParameter$S("userDefinedColour") != null ) {
this.residueShading=Clazz.new_([Clazz.new_([applet.getParameter$S("userDefinedColour")],$I$(6,1).c$$S)],$I$(4,1).c$$jalview_schemes_ColourSchemeI);
}}this.initAutoAnnotation$();
}, 1);

Clazz.newMeth(C$, 'setFont$java_awt_Font$Z',  function (f, setGrid) {
this.font=f;
if (this.nullFrame == null ) {
this.nullFrame=Clazz.new_($I$(7,1));
this.nullFrame.addNotify$();
}if (setGrid) {
var fm=this.nullFrame.getGraphics$().getFontMetrics$java_awt_Font(this.font);
this.setCharHeight$I(((this.heightScale * fm.getHeight$())|0));
this.setCharWidth$I(((this.widthScale * fm.charWidth$C("M"))|0));
}if (this.isUpperCasebold$()) {
var f2=Clazz.new_([f.getName$(), 1, f.getSize$()],$I$(1,1).c$$S$I$I);
var fm=this.nullFrame.getGraphics$().getFontMetrics$java_awt_Font(f2);
this.setCharWidth$I(((this.widthScale * ((fm.stringWidth$S("MMMMMMMMMMM")/10|0)))|0));
}});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.font;
});

Clazz.newMeth(C$, 'resetSeqLimits$I',  function (height) {
this.ranges.setEndSeq$I((height/this.getCharHeight$()|0) - 1);
});

Clazz.newMeth(C$, 'getCentreColumnLabels$',  function () {
return this.centreColumnLabels;
});

Clazz.newMeth(C$, 'getFollowSelection$',  function () {
return this.followSelection;
});

Clazz.newMeth(C$, 'sendSelection$',  function () {
this.getStructureSelectionManager$().sendSelection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource(Clazz.new_([this.getSelectionGroup$()],$I$(8,1).c$$jalview_datamodel_SequenceGroup), Clazz.new_([this.getColumnSelection$()],$I$(9,1).c$$jalview_datamodel_ColumnSelection), Clazz.new_([this.getAlignment$().getHiddenColumns$()],$I$(10,1).c$$jalview_datamodel_HiddenColumns), this);
});

Clazz.newMeth(C$, 'getStructureSelectionManager$',  function () {
return $I$(11).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(this.applet);
});

Clazz.newMeth(C$, 'isNormaliseSequenceLogo$',  function () {
return this.normaliseSequenceLogo;
});

Clazz.newMeth(C$, 'setNormaliseSequenceLogo$Z',  function (state) {
this.normaliseSequenceLogo=state;
});

Clazz.newMeth(C$, 'isValidCharWidth$',  function () {
return this.validCharWidth;
});

Clazz.newMeth(C$, 'getAnnotationColumnSelectionState$',  function () {
return this.annotationColumnSelectionState;
});

Clazz.newMeth(C$, 'setAnnotationColumnSelectionState$jalview_appletgui_AnnotationColumnChooser',  function (annotationColumnSelectionState) {
this.annotationColumnSelectionState=annotationColumnSelectionState;
});

Clazz.newMeth(C$, 'mirrorCommand$jalview_commands_CommandI$Z$jalview_structure_StructureSelectionManager$jalview_structure_VamsasSource',  function (command, undo, ssm, source) {
if (Clazz.instanceOf(source, "jalview.api.AlignViewportI") && (source).getCodingComplement$() === this  ) {
} else {
return;
}var mappedCommand=ssm.mapCommand$jalview_commands_CommandI$Z$jalview_datamodel_AlignmentI$C(command, undo, this.getAlignment$(), this.getGapCharacter$());
if (mappedCommand != null ) {
mappedCommand.doCommand$jalview_datamodel_AlignmentIA(null);
this.firePropertyChange$S$O$O("alignment", null, this.getAlignment$().getSequences$());
}});

Clazz.newMeth(C$, 'getVamsasSource$',  function () {
return this;
});

Clazz.newMeth(C$, 'scrollComplementaryAlignment$jalview_appletgui_AlignmentPanel',  function (complementPanel) {
if (complementPanel == null ) {
return;
}var sr=Clazz.new_($I$(12,1));
var seqOffset=this.findComplementScrollTarget$jalview_datamodel_SearchResultsI(sr);
if (!sr.isEmpty$()) {
complementPanel.setToScrollComplementPanel$Z(false);
complementPanel.scrollToCentre$jalview_datamodel_SearchResultsI$I(sr, seqOffset);
complementPanel.setToScrollComplementPanel$Z(true);
}});

Clazz.newMeth(C$, 'applyFeaturesStyle$jalview_api_FeatureSettingsModelI',  function (featureSettings) {
});

Clazz.newMeth(C$, 'mergeFeaturesStyle$jalview_api_FeatureSettingsModelI',  function (featureSettings) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:27 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
