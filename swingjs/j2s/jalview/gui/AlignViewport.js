(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.Hashtable','jalview.bin.Console','jalview.bin.Cache',['jalview.analysis.AnnotationSorter','.SequenceAnnotationOrder'],'java.awt.Font','jalview.schemes.ColourSchemeProperty','jalview.renderer.ResidueShader','jalview.gui.UserDefinedColours','java.awt.Container','jalview.structure.StructureSelectionManager','jalview.gui.Desktop','jalview.datamodel.SequenceGroup','jalview.datamodel.ColumnSelection','jalview.datamodel.HiddenColumns','jalview.gui.PaintRefresher','jalview.analysis.AlignmentUtils','jalview.util.MessageManager','jalview.gui.JvSwingUtils','jalview.gui.JvOptionPane','jalview.datamodel.Alignment','jalview.gui.AlignFrame','jalview.gui.SplitFrame','jalview.datamodel.SearchResults','java.util.ArrayList','jalview.util.ColorUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignViewport", null, 'jalview.viewmodel.AlignmentViewport', 'jalview.structure.SelectionSource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cursorMode=false;
this.antiAlias=false;
this.explodedGeometry=null;
this.viewName=null;
this.gatherViewsHere=false;
this.followSelection=true;
this.calcIdParams=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['cursorMode','antiAlias','gatherViewsHere','validCharWidth','followSelection'],'S',['viewName'],'O',['font','java.awt.Font','explodedGeometry','java.awt.Rectangle','annotationColumnSelectionState','jalview.gui.AnnotationColumnChooser','calcIdParams','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI',  function (al) {
;C$.superclazz.c$$jalview_datamodel_AlignmentI.apply(this,[al]);C$.$init$.apply(this);
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$S',  function (al, seqsetid) {
C$.c$$jalview_datamodel_AlignmentI$S$S.apply(this, [al, seqsetid, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$S$S',  function (al, seqsetid, viewid) {
;C$.superclazz.c$$jalview_datamodel_AlignmentI.apply(this,[al]);C$.$init$.apply(this);
this.sequenceSetID=seqsetid;
this.viewId=viewid;
if (seqsetid != null ) {
$I$(2).debug$S("Setting viewport's sequence set id : " + this.sequenceSetID);
}if (this.viewId != null ) {
$I$(2).debug$S("Setting viewport's view id : " + this.viewId);
}this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns',  function (al, hiddenColumns) {
;C$.superclazz.c$$jalview_datamodel_AlignmentI.apply(this,[al]);C$.$init$.apply(this);
if (hiddenColumns != null ) {
al.setHiddenColumns$jalview_datamodel_HiddenColumns(hiddenColumns);
}this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$S',  function (al, hiddenColumns, seqsetid) {
C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$S$S.apply(this, [al, hiddenColumns, seqsetid, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$S$S',  function (al, hiddenColumns, seqsetid, viewid) {
;C$.superclazz.c$$jalview_datamodel_AlignmentI.apply(this,[al]);C$.$init$.apply(this);
this.sequenceSetID=seqsetid;
this.viewId=viewid;
if (seqsetid != null ) {
$I$(2).debug$S("Setting viewport's sequence set id : " + this.sequenceSetID);
}if (this.viewId != null ) {
$I$(2).debug$S("Setting viewport's view id : " + this.viewId);
}if (hiddenColumns != null ) {
al.setHiddenColumns$jalview_datamodel_HiddenColumns(hiddenColumns);
}this.init$();
}, 1);

Clazz.newMeth(C$, 'applyViewProperties',  function () {
this.antiAlias=$I$(3).getDefault$S$Z("ANTI_ALIAS", true);
this.viewStyle.setShowJVSuffix$Z($I$(3).getDefault$S$Z("SHOW_JVSUFFIX", true));
this.setShowAnnotation$Z($I$(3).getDefault$S$Z("SHOW_ANNOTATIONS", true));
this.setRightAlignIds$Z($I$(3).getDefault$S$Z("RIGHT_ALIGN_IDS", false));
this.setCentreColumnLabels$Z($I$(3).getDefault$S$Z("CENTRE_COLUMN_LABELS", false));
this.autoCalculateConsensus=$I$(3).getDefault$S$Z("AUTO_CALC_CONSENSUS", true);
this.setPadGaps$Z($I$(3).getDefault$S$Z("PAD_GAPS", true));
this.setShowNPFeats$Z($I$(3).getDefault$S$Z("SHOW_NPFEATS_TOOLTIP", true));
this.setShowDBRefs$Z($I$(3).getDefault$S$Z("SHOW_DBREFS_TOOLTIP", true));
this.viewStyle.setSeqNameItalics$Z($I$(3).getDefault$S$Z("ID_ITALICS", true));
this.viewStyle.setWrapAlignment$Z($I$(3).getDefault$S$Z("WRAP_ALIGNMENT", false));
this.viewStyle.setShowUnconserved$Z($I$(3).getDefault$S$Z("SHOW_UNCONSERVED", false));
this.sortByTree=$I$(3).getDefault$S$Z("SORT_BY_TREE", false);
this.followSelection=$I$(3).getDefault$S$Z("FOLLOW_SELECTIONS", true);
this.sortAnnotationsBy=$I$(4,"valueOf$S",[$I$(3,"getDefault$S$S",["SORT_ANNOTATIONS", $I$(4).NONE.name$()])]);
this.showAutocalculatedAbove=$I$(3).getDefault$S$Z("SHOW_AUTOCALC_ABOVE", false);
this.viewStyle.setScaleProteinAsCdna$Z($I$(3).getDefault$S$Z("SCALE_PROTEIN_TO_CDNA", true));
}, p$1);

Clazz.newMeth(C$, 'init$',  function () {
p$1.applyViewProperties.apply(this, []);
var fontName=$I$(3).getDefault$S$S("FONT_NAME", "SansSerif");
var fontStyle=$I$(3).getDefault$S$S("FONT_STYLE", "0");
var fontSize=$I$(3).getDefault$S$S("FONT_SIZE", "10");
var style=0;
if (fontStyle.equals$O("bold")) {
style=1;
} else if (fontStyle.equals$O("italic")) {
style=2;
}this.setFont$java_awt_Font$Z(Clazz.new_([fontName, style, Integer.parseInt$S(fontSize)],$I$(5,1).c$$S$I$I), true);
this.alignment.setGapCharacter$C($I$(3).getDefault$S$S("GAP_SYMBOL", "-").charAt$I(0));
if (this.hconsensus == null  && !this.isDataset ) {
if (!this.alignment.isNucleotide$()) {
this.showConservation=$I$(3).getDefault$S$Z("SHOW_CONSERVATION", true);
this.showQuality=$I$(3).getDefault$S$Z("SHOW_QUALITY", true);
this.showGroupConservation=$I$(3).getDefault$S$Z("SHOW_GROUP_CONSERVATION", false);
}this.showConsensusHistogram=$I$(3).getDefault$S$Z("SHOW_CONSENSUS_HISTOGRAM", true);
this.showSequenceLogo=$I$(3).getDefault$S$Z("SHOW_CONSENSUS_LOGO", false);
this.normaliseSequenceLogo=$I$(3).getDefault$S$Z("NORMALISE_CONSENSUS_LOGO", false);
this.showGroupConsensus=$I$(3).getDefault$S$Z("SHOW_GROUP_CONSENSUS", false);
this.showConsensus=$I$(3).getDefault$S$Z("SHOW_IDENTITY", true);
this.showOccupancy=$I$(3).getDefault$S$Z("SHOW_OCCUPANCY", true);
}this.initAutoAnnotation$();
var colourProperty=this.alignment.isNucleotide$() ? "DEFAULT_COLOUR_NUC" : "DEFAULT_COLOUR_PROT";
var schemeName=$I$(3).getProperty$S(colourProperty);
if (schemeName == null ) {
schemeName=$I$(3).getDefault$S$S("DEFAULT_COLOUR", "None");
}var colourScheme=$I$(6).getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S(this, this.alignment, schemeName);
this.residueShading=Clazz.new_($I$(7,1).c$$jalview_schemes_ColourSchemeI,[colourScheme]);
if (Clazz.instanceOf(colourScheme, "jalview.schemes.UserColourScheme")) {
this.residueShading=Clazz.new_([$I$(8).loadDefaultColours$()],$I$(7,1).c$$jalview_schemes_ColourSchemeI);
this.residueShading.setThreshold$I$Z(0, this.isIgnoreGapsConsensus$());
}if (this.residueShading != null ) {
this.residueShading.setConsensus$jalview_datamodel_ProfilesI(this.hconsensus);
}this.setColourAppliesToAllGroups$Z(true);
});

Clazz.newMeth(C$, 'setFont$java_awt_Font$Z',  function (f, setGrid) {
this.font=f;
var c=Clazz.new_($I$(9,1));
if (setGrid) {
var fm=c.getFontMetrics$java_awt_Font(this.font);
var ww=fm.charWidth$C("M");
this.setCharHeight$I(fm.getHeight$());
this.setCharWidth$I(ww);
}this.viewStyle.setFontName$S(this.font.getName$());
this.viewStyle.setFontStyle$I(this.font.getStyle$());
this.viewStyle.setFontSize$I(this.font.getSize$());
this.validCharWidth=true;
});

Clazz.newMeth(C$, 'setViewStyle$jalview_api_ViewStyleI',  function (settingsForView) {
C$.superclazz.prototype.setViewStyle$jalview_api_ViewStyleI.apply(this, [settingsForView]);
this.setFont$java_awt_Font$Z(Clazz.new_([this.viewStyle.getFontName$(), this.viewStyle.getFontStyle$(), this.viewStyle.getFontSize$()],$I$(5,1).c$$S$I$I), false);
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.font;
});

Clazz.newMeth(C$, 'setAlignment$jalview_datamodel_AlignmentI',  function (align) {
this.replaceMappings$jalview_datamodel_AlignmentI(align);
C$.superclazz.prototype.setAlignment$jalview_datamodel_AlignmentI.apply(this, [align]);
});

Clazz.newMeth(C$, 'replaceMappings$jalview_datamodel_AlignmentI',  function (align) {
this.deregisterMappings$();
if (align != null ) {
var ssm=$I$(10,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(11).instance]);
ssm.registerMappings$java_util_List(align.getCodonFrames$());
}if (this.alignment != null  && align != null  ) {
this.alignment.setCodonFrames$java_util_List(align.getCodonFrames$());
}});

Clazz.newMeth(C$, 'deregisterMappings$',  function () {
var al=this.getAlignment$();
if (al != null ) {
var mappings=al.getCodonFrames$();
if (mappings != null ) {
var ssm=$I$(10,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(11).instance]);
for (var acf, $acf = mappings.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
if (this.noReferencesTo$jalview_datamodel_AlignedCodonFrame(acf)) {
ssm.deregisterMapping$jalview_datamodel_AlignedCodonFrame(acf);
}}
}}});

Clazz.newMeth(C$, 'getGapCharacter$',  function () {
return this.getAlignment$().getGapCharacter$();
});

Clazz.newMeth(C$, 'setGapCharacter$C',  function (gap) {
if (this.getAlignment$() != null ) {
this.getAlignment$().setGapCharacter$C(gap);
}});

Clazz.newMeth(C$, 'getUndoRedoHash$',  function () {
if (this.historyList == null  || this.redoList == null  ) {
return Clazz.array(Long.TYPE, -1, [-1, -1]);
}return Clazz.array(Long.TYPE, -1, [this.historyList.hashCode$(), this.redoList.hashCode$()]);
});

Clazz.newMeth(C$, 'isUndoRedoHashModified$JA',  function (undoredo) {
if (undoredo == null ) {
return true;
}var cstate=this.getUndoRedoHash$();
if (cstate.length != undoredo.length) {
return true;
}for (var i=0; i < cstate.length; i++) {
if (Long.$ne(cstate[i],undoredo[i] )) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getFollowSelection$',  function () {
return this.followSelection;
});

Clazz.newMeth(C$, 'sendSelection$',  function () {
$I$(10,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(11).instance]).sendSelection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource(Clazz.new_([this.getSelectionGroup$()],$I$(12,1).c$$jalview_datamodel_SequenceGroup), Clazz.new_([this.getColumnSelection$()],$I$(13,1).c$$jalview_datamodel_ColumnSelection), Clazz.new_([this.getAlignment$().getHiddenColumns$()],$I$(14,1).c$$jalview_datamodel_HiddenColumns), this);
});

Clazz.newMeth(C$, 'getAlignPanel$',  function () {
var aps=$I$(15,"getAssociatedPanels$S",[this.getSequenceSetId$()]);
for (var p=0; aps != null  && p < aps.length ; p++) {
if (aps[p].av === this ) {
return aps[p];
}}
return null;
});

Clazz.newMeth(C$, 'getSortByTree$',  function () {
return this.sortByTree;
});

Clazz.newMeth(C$, 'setSortByTree$Z',  function (sort) {
this.sortByTree=sort;
});

Clazz.newMeth(C$, 'getStructureSelectionManager$',  function () {
return $I$(10,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(11).instance]);
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

Clazz.newMeth(C$, 'getCalcIdSettingsFor$S',  function (calcId) {
return this.calcIdParams.get$O(calcId);
});

Clazz.newMeth(C$, 'setCalcIdSettingsFor$S$jalview_ws_params_AutoCalcSetting$Z',  function (calcId, settings, needsUpdate) {
this.calcIdParams.put$O$O(calcId, settings);
if (needsUpdate) {
$I$(2).debug$S("trigger update for " + calcId);
}});

Clazz.newMeth(C$, 'mirrorCommand$jalview_commands_CommandI$Z$jalview_structure_StructureSelectionManager$jalview_structure_VamsasSource',  function (command, undo, ssm, source) {
if (Clazz.instanceOf(source, "jalview.api.AlignViewportI") && (source).getCodingComplement$() === this  ) {
} else {
return;
}var mappedCommand=ssm.mapCommand$jalview_commands_CommandI$Z$jalview_datamodel_AlignmentI$C(command, undo, this.getAlignment$(), this.getGapCharacter$());
if (mappedCommand != null ) {
var views=this.getAlignPanel$().alignFrame.getViewAlignments$();
mappedCommand.doCommand$jalview_datamodel_AlignmentIA(views);
this.getAlignPanel$().alignmentChanged$();
}});

Clazz.newMeth(C$, 'addAlignment$jalview_datamodel_AlignmentI$S',  function (toAdd, title) {
toAdd.setDataset$jalview_datamodel_AlignmentI(null);
this.getAlignment$().realiseMappings$java_util_List(toAdd.getSequences$());
if ($I$(3).getDefault$S$Z("ENABLE_SPLIT_FRAME", true)) {
if ($I$(16,"isMappable$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI",[toAdd, this.getAlignment$()])) {
this.openLinkedAlignment$jalview_datamodel_AlignmentI$S(toAdd, title);
return;
}}this.addDataToAlignment$jalview_datamodel_AlignmentI(toAdd);
});

Clazz.newMeth(C$, 'addDataToAlignment$jalview_datamodel_AlignmentI',  function (toAdd) {
var al=this.getAlignment$();
var gap=String.valueOf$C(al.getGapCharacter$());
for (var i=0; i < toAdd.getHeight$(); i++) {
var seq=toAdd.getSequenceAt$I(i);
if (true) {
al.addSequence$jalview_datamodel_SequenceI(seq);
}}
this.ranges.setEndSeq$I(this.getAlignment$().getHeight$() - 1);
this.firePropertyChange$S$O$O("alignment", null, this.getAlignment$().getSequences$());
});

Clazz.newMeth(C$, 'openLinkedAlignment$jalview_datamodel_AlignmentI$S',  function (al, title) {
var options=Clazz.array(String, -1, [$I$(17).getString$S("action.no"), $I$(17).getString$S("label.split_window"), $I$(17).getString$S("label.new_window")]);
var question=$I$(18,"wrapTooltip$Z$S",[true, $I$(17).getString$S("label.open_split_window?")]);
var us=this;
var dialog=$I$(19,"newOptionDialog$java_awt_Component",[$I$(11).desktop]).setResponseHandler$O$Runnable(Integer.valueOf$I(0), ((P$.AlignViewport$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignViewport$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.AlignViewport'].addDataToAlignment$jalview_datamodel_AlignmentI.apply(this.b$['jalview.gui.AlignViewport'], [this.$finals$.al]);
});
})()
), Clazz.new_(P$.AlignViewport$1.$init$,[this, {al:al}]))).setResponseHandler$O$Runnable(Integer.valueOf$I(1), ((P$.AlignViewport$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignViewport$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.us.openLinkedAlignmentAs$jalview_datamodel_AlignmentI$S$Z(this.$finals$.al, this.$finals$.title, true);
});
})()
), Clazz.new_(P$.AlignViewport$2.$init$,[this, {title:title,us:us,al:al}]))).setResponseHandler$O$Runnable(Integer.valueOf$I(2), ((P$.AlignViewport$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignViewport$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.us.openLinkedAlignmentAs$jalview_datamodel_AlignmentI$S$Z(this.$finals$.al, this.$finals$.title, false);
});
})()
), Clazz.new_(P$.AlignViewport$3.$init$,[this, {title:title,us:us,al:al}])));
dialog.showDialog$S$S$I$I$javax_swing_Icon$OA$O(question, $I$(17).getString$S("label.open_split_window"), -1, -1, null, options, options[0]);
});

Clazz.newMeth(C$, 'openLinkedAlignmentAs$jalview_datamodel_AlignmentI$S$Z',  function (al, title, newWindowOrSplitPane) {
var thisAlignment=newWindowOrSplitPane ? Clazz.new_([this.getAlignment$()],$I$(20,1).c$$jalview_datamodel_AlignmentI) : this.getAlignment$();
var protein=al.isNucleotide$() ? thisAlignment : al;
var cdna=al.isNucleotide$() ? al : thisAlignment;
al.setDataset$jalview_datamodel_AlignmentI(null);
$I$(16).mapProteinAlignmentToCdna$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI(protein, cdna);
var newAlignFrame=Clazz.new_($I$(21,1).c$$jalview_datamodel_AlignmentI$I$I,[al, 700, 500]);
newAlignFrame.setTitle$S(title);
newAlignFrame.setStatus$S($I$(17,"formatMessage$S$OA",["label.successfully_loaded_file", Clazz.array(java.lang.Object, -1, [title])]));
if (!newWindowOrSplitPane) {
$I$(11).addInternalFrame$javax_swing_JInternalFrame$S$I$I(newAlignFrame, title, 700, 500);
}try {
newAlignFrame.setMaximum$Z($I$(3).getDefault$S$Z("SHOW_FULLSCREEN", false));
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
if (newWindowOrSplitPane) {
al.alignAs$jalview_datamodel_AlignmentI(thisAlignment);
protein=this.openSplitFrame$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI(newAlignFrame, thisAlignment);
}});

Clazz.newMeth(C$, 'openSplitFrame$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI',  function (newAlignFrame, complement) {
var copyMe=Clazz.new_($I$(21,1).c$$jalview_datamodel_AlignmentI$I$I,[complement, 700, 500]);
copyMe.setTitle$S(this.getAlignPanel$().alignFrame.getTitle$());
var al=newAlignFrame.viewport.getAlignment$();
var proteinFrame=al.isNucleotide$() ? copyMe : newAlignFrame;
var cdnaFrame=al.isNucleotide$() ? newAlignFrame : copyMe;
cdnaFrame.setVisible$Z(true);
proteinFrame.setVisible$Z(true);
var linkedTitle=$I$(17).getString$S("label.linked_view_title");
var splitFrame=Clazz.new_($I$(22,1).c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame,[cdnaFrame, proteinFrame]);
$I$(11).addInternalFrame$javax_swing_JInternalFrame$S$I$I(splitFrame, linkedTitle, -1, -1);
return proteinFrame.viewport.getAlignment$();
});

Clazz.newMeth(C$, 'getAnnotationColumnSelectionState$',  function () {
return this.annotationColumnSelectionState;
});

Clazz.newMeth(C$, 'setAnnotationColumnSelectionState$jalview_gui_AnnotationColumnChooser',  function (currentAnnotationColumnSelectionState) {
this.annotationColumnSelectionState=currentAnnotationColumnSelectionState;
});

Clazz.newMeth(C$, 'setIdWidth$I',  function (i) {
C$.superclazz.prototype.setIdWidth$I.apply(this, [i]);
var ap=this.getAlignPanel$();
if (ap != null ) {
var idw=ap.getIdPanel$().getIdCanvas$().getPreferredSize$();
idw.width=i;
ap.getIdPanel$().getIdCanvas$().setPreferredSize$java_awt_Dimension(idw);
}});

Clazz.newMeth(C$, 'getExplodedGeometry$',  function () {
return this.explodedGeometry;
});

Clazz.newMeth(C$, 'setExplodedGeometry$java_awt_Rectangle',  function (explodedPosition) {
this.explodedGeometry=explodedPosition;
});

Clazz.newMeth(C$, 'isGatherViewsHere$',  function () {
return this.gatherViewsHere;
});

Clazz.newMeth(C$, 'setGatherViewsHere$Z',  function (gatherViewsHere) {
this.gatherViewsHere=gatherViewsHere;
});

Clazz.newMeth(C$, 'scrollComplementaryAlignment$',  function () {
var sr=Clazz.new_($I$(23,1));
var verticalOffset=this.findComplementScrollTarget$jalview_datamodel_SearchResultsI(sr);
if (!sr.isEmpty$()) {
var complementPanel=(this.getCodingComplement$()).getAlignPanel$();
complementPanel.setToScrollComplementPanel$Z(false);
complementPanel.scrollToCentre$jalview_datamodel_SearchResultsI$I(sr, verticalOffset);
complementPanel.setToScrollComplementPanel$Z(true);
}});

Clazz.newMeth(C$, 'noReferencesTo$jalview_datamodel_AlignedCodonFrame',  function (acf) {
var frames=$I$(11).getAlignFrames$();
if (frames == null ) {
return true;
}for (var af, $af = 0, $$af = frames; $af<$$af.length&&((af=($$af[$af])),1);$af++) {
if (!af.isClosed$()) {
for (var ap, $ap = af.getAlignPanels$().iterator$(); $ap.hasNext$()&&((ap=($ap.next$())),1);) {
var al=ap.getAlignment$();
if (al != null  && al.getCodonFrames$().contains$O(acf) ) {
return false;
}}
}}
return true;
});

Clazz.newMeth(C$, 'applyFeaturesStyle$jalview_api_FeatureSettingsModelI',  function (featureSettings) {
p$1.transferFeaturesStyles$jalview_api_FeatureSettingsModelI$Z.apply(this, [featureSettings, false]);
});

Clazz.newMeth(C$, 'mergeFeaturesStyle$jalview_api_FeatureSettingsModelI',  function (featureSettings) {
p$1.transferFeaturesStyles$jalview_api_FeatureSettingsModelI$Z.apply(this, [featureSettings, true]);
});

Clazz.newMeth(C$, 'transferFeaturesStyles$jalview_api_FeatureSettingsModelI$Z',  function (featureSettings, mergeOnly) {
if (featureSettings == null ) {
return;
}var fr=this.getAlignPanel$().getSeqPanel$().seqCanvas.getFeatureRenderer$();
var origRenderOrder=Clazz.new_($I$(24,1));
var origGroups=Clazz.new_($I$(24,1));
origRenderOrder.addAll$java_util_Collection(fr.getRenderOrder$());
origGroups.addAll$java_util_Collection(fr.getFeatureGroups$());
fr.findAllFeatures$Z(true);
var renderOrder=fr.getRenderOrder$();
var displayed=fr.getFeaturesDisplayed$();
if (!mergeOnly) {
}for (var type, $type = renderOrder.iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
var preferredColour=featureSettings.getFeatureColour$S(type);
var origColour=fr.getFeatureStyle$S(type);
if (!mergeOnly || (!origRenderOrder.contains$O(type) || origColour == null   || (!origColour.isGraduatedColour$() && origColour.getColour$() != null   && origColour.getColour$().equals$O($I$(25).createColourFromName$S(type)) ) ) ) {
if (preferredColour != null ) {
fr.setColour$S$jalview_api_FeatureColourI(type, preferredColour);
}if (featureSettings.isFeatureDisplayed$S(type)) {
displayed.setVisible$S(type);
} else if (featureSettings.isFeatureHidden$S(type)) {
displayed.setHidden$S(type);
}}}
for (var group, $group = fr.getFeatureGroups$().iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
if (!mergeOnly || !origGroups.contains$O(group) ) {
fr.setGroupVisibility$S$Z(group, featureSettings.isGroupDisplayed$S(group));
}}
if (featureSettings.optimiseOrder$()) {
} else {
fr.orderFeatures$java_util_Comparator(featureSettings);
}fr.setTransparency$F(featureSettings.getTransparency$());
fr.notifyFeaturesChanged$();
}, p$1);

Clazz.newMeth(C$, 'getViewName$',  function () {
return this.viewName;
});

Clazz.newMeth(C$, 'setViewName$S',  function (viewName) {
this.viewName=viewName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:32 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
