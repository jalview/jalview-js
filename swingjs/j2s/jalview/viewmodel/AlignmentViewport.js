(function(){var P$=Clazz.newPackage("jalview.viewmodel"),p$1={},I$=[[0,'jalview.viewmodel.styles.ViewStyle','java.util.ArrayDeque','jalview.datamodel.ColumnSelection','jalview.renderer.ResidueShader','jalview.workers.AlignCalcManager','java.beans.PropertyChangeSupport','java.util.HashMap','jalview.viewmodel.ViewportRanges','jalview.workers.ConservationThread','jalview.workers.ConsensusThread','jalview.workers.ComplementConsensusThread','jalview.workers.StrucConsensusThread','jalview.datamodel.SequenceGroup','jalview.datamodel.SequenceI','java.util.Hashtable','jalview.datamodel.Sequence','jalview.datamodel.AlignmentView','java.util.ArrayList','jalview.datamodel.AlignmentAnnotation','jalview.analysis.Conservation','jalview.util.MessageManager','jalview.datamodel.Annotation','java.util.BitSet','java.awt.Color','jalview.util.Comparison','jalview.util.MappingUtils','StringBuffer','jalview.datamodel.AlignmentExportData']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlignmentViewport", null, null, ['jalview.api.AlignViewportI', 'jalview.structure.CommandListener', 'jalview.structure.VamsasSource']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ranges=null;
this.viewStyle=null;
this.codingComplement=null;
this.featuresDisplayed=null;
this.historyList=null;
this.redoList=null;
this.alignment=null;
this.sequenceSetID=null;
this.isDataset=false;
this.hiddenRepSequences=null;
this.colSel=null;
this.autoCalculateConsensus=false;
this.autoCalculateStrucConsensus=false;
this.ignoreGapsInConsensusCalculation=false;
this.residueShading=null;
this.consensus=null;
this.complementConsensus=null;
this.gapcounts=null;
this.strucConsensus=null;
this.conservation=null;
this.quality=null;
this.groupConsensus=null;
this.groupConservation=null;
this.hconsensus=null;
this.hcomplementConsensus=null;
this.hStrucConsensus=null;
this.hconservation=null;
this.ConsPercGaps=0;
this.calculator=null;
this.showGroupConservation=false;
this.showGroupConsensus=false;
this.showSequenceLogo=false;
this.normaliseSequenceLogo=false;
this.showConsensusHistogram=false;
this.padGaps=false;
this.sortByTree=false;
this.selectionGroup=null;
this.viewId=null;
this.sgrouphash=0;
this.colselhash=0;
this.changeSupport=null;
this.showConservation=false;
this.showQuality=false;
this.showConsensus=false;
this.showOccupancy=false;
this.sequenceColours=null;
this.sortAnnotationsBy=null;
this.showAutocalculatedAbove=false;
this.followHighlight=false;
this.selectionIsDefinedGroup=false;
this.searchResults=null;
this.currentTree=null;
this.needToUpdateStructureViews=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.viewStyle=Clazz.new_($I$(1));
this.codingComplement=null;
this.featuresDisplayed=null;
this.historyList=Clazz.new_($I$(2));
this.redoList=Clazz.new_($I$(2));
this.isDataset=false;
this.colSel=Clazz.new_($I$(3));
this.autoCalculateConsensus=true;
this.autoCalculateStrucConsensus=true;
this.ignoreGapsInConsensusCalculation=false;
this.residueShading=Clazz.new_($I$(4));
this.hconsensus=null;
this.hcomplementConsensus=null;
this.hStrucConsensus=null;
this.hconservation=null;
this.ConsPercGaps=25;
this.calculator=Clazz.new_($I$(5));
this.showGroupConservation=false;
this.showGroupConsensus=false;
this.showSequenceLogo=false;
this.normaliseSequenceLogo=false;
this.showConsensusHistogram=true;
this.padGaps=false;
this.sortByTree=false;
this.viewId=null;
this.sgrouphash=-1;
this.colselhash=-1;
this.changeSupport=Clazz.new_($I$(6).c$$O,[this]);
this.showConservation=true;
this.showQuality=true;
this.showConsensus=true;
this.showOccupancy=true;
this.sequenceColours=Clazz.new_($I$(7));
this.sortAnnotationsBy=null;
this.followHighlight=true;
this.selectionIsDefinedGroup=false;
this.searchResults=null;
this.currentTree=null;
this.needToUpdateStructureViews=false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI', function (al) {
C$.$init$.apply(this);
this.setAlignment$jalview_datamodel_AlignmentI(al);
this.ranges=Clazz.new_($I$(8).c$$jalview_datamodel_AlignmentI,[al]);
}, 1);

Clazz.newMeth(C$, 'setFontName$S', function (name) {
this.viewStyle.setFontName$S(name);
});

Clazz.newMeth(C$, 'setFontStyle$I', function (style) {
this.viewStyle.setFontStyle$I(style);
});

Clazz.newMeth(C$, 'setFontSize$I', function (size) {
this.viewStyle.setFontSize$I(size);
});

Clazz.newMeth(C$, 'getFontStyle$', function () {
return this.viewStyle.getFontStyle$();
});

Clazz.newMeth(C$, 'getFontName$', function () {
return this.viewStyle.getFontName$();
});

Clazz.newMeth(C$, 'getFontSize$', function () {
return this.viewStyle.getFontSize$();
});

Clazz.newMeth(C$, 'setUpperCasebold$Z', function (upperCasebold) {
this.viewStyle.setUpperCasebold$Z(upperCasebold);
});

Clazz.newMeth(C$, 'isUpperCasebold$', function () {
return this.viewStyle.isUpperCasebold$();
});

Clazz.newMeth(C$, 'isSeqNameItalics$', function () {
return this.viewStyle.isSeqNameItalics$();
});

Clazz.newMeth(C$, 'setColourByReferenceSeq$Z', function (colourByReferenceSeq) {
this.viewStyle.setColourByReferenceSeq$Z(colourByReferenceSeq);
});

Clazz.newMeth(C$, 'setColourAppliesToAllGroups$Z', function (b) {
this.viewStyle.setColourAppliesToAllGroups$Z(b);
});

Clazz.newMeth(C$, 'getColourAppliesToAllGroups$', function () {
return this.viewStyle.getColourAppliesToAllGroups$();
});

Clazz.newMeth(C$, 'getAbovePIDThreshold$', function () {
return this.viewStyle.getAbovePIDThreshold$();
});

Clazz.newMeth(C$, 'setIncrement$I', function (inc) {
this.viewStyle.setIncrement$I(inc);
});

Clazz.newMeth(C$, 'getIncrement$', function () {
return this.viewStyle.getIncrement$();
});

Clazz.newMeth(C$, 'setConservationSelected$Z', function (b) {
this.viewStyle.setConservationSelected$Z(b);
});

Clazz.newMeth(C$, 'setShowHiddenMarkers$Z', function (show) {
this.viewStyle.setShowHiddenMarkers$Z(show);
});

Clazz.newMeth(C$, 'getShowHiddenMarkers$', function () {
return this.viewStyle.getShowHiddenMarkers$();
});

Clazz.newMeth(C$, 'setScaleRightWrapped$Z', function (b) {
this.viewStyle.setScaleRightWrapped$Z(b);
});

Clazz.newMeth(C$, 'setScaleLeftWrapped$Z', function (b) {
this.viewStyle.setScaleLeftWrapped$Z(b);
});

Clazz.newMeth(C$, 'setScaleAboveWrapped$Z', function (b) {
this.viewStyle.setScaleAboveWrapped$Z(b);
});

Clazz.newMeth(C$, 'getScaleLeftWrapped$', function () {
return this.viewStyle.getScaleLeftWrapped$();
});

Clazz.newMeth(C$, 'getScaleAboveWrapped$', function () {
return this.viewStyle.getScaleAboveWrapped$();
});

Clazz.newMeth(C$, 'getScaleRightWrapped$', function () {
return this.viewStyle.getScaleRightWrapped$();
});

Clazz.newMeth(C$, 'setAbovePIDThreshold$Z', function (b) {
this.viewStyle.setAbovePIDThreshold$Z(b);
});

Clazz.newMeth(C$, 'setThreshold$I', function (thresh) {
this.viewStyle.setThreshold$I(thresh);
});

Clazz.newMeth(C$, 'getThreshold$', function () {
return this.viewStyle.getThreshold$();
});

Clazz.newMeth(C$, 'getShowJVSuffix$', function () {
return this.viewStyle.getShowJVSuffix$();
});

Clazz.newMeth(C$, 'setShowJVSuffix$Z', function (b) {
this.viewStyle.setShowJVSuffix$Z(b);
});

Clazz.newMeth(C$, 'setWrapAlignment$Z', function (state) {
this.viewStyle.setWrapAlignment$Z(state);
this.ranges.setWrappedMode$Z(state);
});

Clazz.newMeth(C$, 'setShowText$Z', function (state) {
this.viewStyle.setShowText$Z(state);
});

Clazz.newMeth(C$, 'setRenderGaps$Z', function (state) {
this.viewStyle.setRenderGaps$Z(state);
});

Clazz.newMeth(C$, 'getColourText$', function () {
return this.viewStyle.getColourText$();
});

Clazz.newMeth(C$, 'setColourText$Z', function (state) {
this.viewStyle.setColourText$Z(state);
});

Clazz.newMeth(C$, 'getWrapAlignment$', function () {
return this.viewStyle.getWrapAlignment$();
});

Clazz.newMeth(C$, 'getShowText$', function () {
return this.viewStyle.getShowText$();
});

Clazz.newMeth(C$, 'getWrappedWidth$', function () {
return this.viewStyle.getWrappedWidth$();
});

Clazz.newMeth(C$, 'setWrappedWidth$I', function (w) {
this.viewStyle.setWrappedWidth$I(w);
});

Clazz.newMeth(C$, 'getCharHeight$', function () {
return this.viewStyle.getCharHeight$();
});

Clazz.newMeth(C$, 'setCharHeight$I', function (h) {
this.viewStyle.setCharHeight$I(h);
});

Clazz.newMeth(C$, 'getCharWidth$', function () {
return this.viewStyle.getCharWidth$();
});

Clazz.newMeth(C$, 'setCharWidth$I', function (w) {
this.viewStyle.setCharWidth$I(w);
});

Clazz.newMeth(C$, 'getShowBoxes$', function () {
return this.viewStyle.getShowBoxes$();
});

Clazz.newMeth(C$, 'getShowUnconserved$', function () {
return this.viewStyle.getShowUnconserved$();
});

Clazz.newMeth(C$, 'setShowUnconserved$Z', function (showunconserved) {
this.viewStyle.setShowUnconserved$Z(showunconserved);
});

Clazz.newMeth(C$, 'setSeqNameItalics$Z', function (default1) {
this.viewStyle.setSeqNameItalics$Z(default1);
});

Clazz.newMeth(C$, 'getAlignment$', function () {
return this.alignment;
});

Clazz.newMeth(C$, 'getGapCharacter$', function () {
return this.alignment.getGapCharacter$();
});

Clazz.newMeth(C$, 'setDataset$Z', function (b) {
this.isDataset=b;
});

Clazz.newMeth(C$, 'isDataset$', function () {
return this.isDataset;
});

Clazz.newMeth(C$, 'setGlobalColourScheme$jalview_schemes_ColourSchemeI', function (cs) {
if (this.residueShading == null ) {
this.residueShading=Clazz.new_($I$(4).c$$jalview_api_ViewStyleI,[this.viewStyle]);
}this.residueShading.setColourScheme$jalview_schemes_ColourSchemeI(cs);
if (cs != null ) {
if (this.getConservationSelected$()) {
this.residueShading.setConservation$jalview_analysis_Conservation(this.hconservation);
}this.residueShading.setConservationApplied$Z(this.getConservationSelected$());
this.residueShading.alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map(this.alignment, this.hiddenRepSequences);
}if (this.getColourAppliesToAllGroups$()) {
for (var sg, $sg = this.getAlignment$().getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
sg.setColourScheme$jalview_schemes_ColourSchemeI(cs == null  ? null : cs.getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI(this, sg));
if (cs != null ) {
sg.getGroupColourScheme$().alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map(sg, this.hiddenRepSequences);
}}
}});

Clazz.newMeth(C$, 'getGlobalColourScheme$', function () {
return this.residueShading == null  ? null : this.residueShading.getColourScheme$();
});

Clazz.newMeth(C$, 'getResidueShading$', function () {
return this.residueShading;
});

Clazz.newMeth(C$, 'setConservation$jalview_analysis_Conservation', function (cons) {
this.hconservation=cons;
});

Clazz.newMeth(C$, 'getConsPercGaps$', function () {
return this.ConsPercGaps;
});

Clazz.newMeth(C$, 'setSequenceConsensusHash$jalview_datamodel_ProfilesI', function (hconsensus) {
this.hconsensus=hconsensus;
});

Clazz.newMeth(C$, 'setComplementConsensusHash$java_util_HashtableA', function (hconsensus) {
this.hcomplementConsensus=hconsensus;
});

Clazz.newMeth(C$, 'getSequenceConsensusHash$', function () {
return this.hconsensus;
});

Clazz.newMeth(C$, 'getComplementConsensusHash$', function () {
return this.hcomplementConsensus;
});

Clazz.newMeth(C$, 'getRnaStructureConsensusHash$', function () {
return this.hStrucConsensus;
});

Clazz.newMeth(C$, 'setRnaStructureConsensusHash$java_util_HashtableA', function (hStrucConsensus) {
this.hStrucConsensus=hStrucConsensus;
});

Clazz.newMeth(C$, 'getAlignmentQualityAnnot$', function () {
return this.quality;
});

Clazz.newMeth(C$, 'getAlignmentConservationAnnotation$', function () {
return this.conservation;
});

Clazz.newMeth(C$, 'getAlignmentConsensusAnnotation$', function () {
return this.consensus;
});

Clazz.newMeth(C$, 'getAlignmentGapAnnotation$', function () {
return this.gapcounts;
});

Clazz.newMeth(C$, 'getComplementConsensusAnnotation$', function () {
return this.complementConsensus;
});

Clazz.newMeth(C$, 'getAlignmentStrucConsensusAnnotation$', function () {
return this.strucConsensus;
});

Clazz.newMeth(C$, 'updateConservation$jalview_api_AlignmentViewPanel', function (ap) {
if (this.alignment.isNucleotide$() || (this.conservation == null  && this.quality == null  ) || !this.autoCalculateConsensus  ) {
return;
}if (this.calculator.getRegisteredWorkersOfClass$Class(Clazz.getClass($I$(9))) == null ) {
this.calculator.registerWorker$jalview_api_AlignCalcWorkerI(Clazz.new_($I$(9).c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel,[this, ap]));
}});

Clazz.newMeth(C$, 'updateConsensus$jalview_api_AlignmentViewPanel', function (ap) {
if (this.consensus == null  || !this.autoCalculateConsensus ) {
return;
}if (this.calculator.getRegisteredWorkersOfClass$Class(Clazz.getClass($I$(10))) == null ) {
this.calculator.registerWorker$jalview_api_AlignCalcWorkerI(Clazz.new_($I$(10).c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel,[this, ap]));
}var al=this.getAlignment$();
if (!al.isNucleotide$() && al.getCodonFrames$() != null   && !al.getCodonFrames$().isEmpty$() ) {
var doConsensus=false;
for (var mapping, $mapping = al.getCodonFrames$().iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
var mapLists=mapping.getdnaToProt$();
if (mapLists.length > 0 && mapLists[0].getFromRatio$() == 3 ) {
doConsensus=true;
break;
}}
if (doConsensus) {
if (this.calculator.getRegisteredWorkersOfClass$Class(Clazz.getClass($I$(11))) == null ) {
this.calculator.registerWorker$jalview_api_AlignCalcWorkerI(Clazz.new_($I$(11).c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel,[this, ap]));
}}}});

Clazz.newMeth(C$, 'updateStrucConsensus$jalview_api_AlignmentViewPanel', function (ap) {
if (this.autoCalculateStrucConsensus && this.strucConsensus == null   && this.alignment.isNucleotide$()  && this.alignment.hasRNAStructure$() ) {
p$1.initRNAStructure.apply(this, []);
}if (this.strucConsensus == null  || !this.autoCalculateStrucConsensus ) {
return;
}if (this.calculator.getRegisteredWorkersOfClass$Class(Clazz.getClass($I$(12))) == null ) {
this.calculator.registerWorker$jalview_api_AlignCalcWorkerI(Clazz.new_($I$(12).c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel,[this, ap]));
}});

Clazz.newMeth(C$, 'isCalcInProgress$', function () {
return this.calculator.isWorking$();
});

Clazz.newMeth(C$, 'isCalculationInProgress$jalview_datamodel_AlignmentAnnotation', function (alignmentAnnotation) {
if (!alignmentAnnotation.autoCalculated) {
return false;
}if (this.calculator.workingInvolvedWith$jalview_datamodel_AlignmentAnnotation(alignmentAnnotation)) {
return true;
}return false;
});

Clazz.newMeth(C$, 'setAlignment$jalview_datamodel_AlignmentI', function (align) {
this.alignment=align;
});

Clazz.newMeth(C$, 'dispose$', function () {
this.consensus=null;
this.complementConsensus=null;
this.strucConsensus=null;
this.conservation=null;
this.quality=null;
this.groupConsensus=null;
this.groupConservation=null;
this.hconsensus=null;
this.hconservation=null;
this.hcomplementConsensus=null;
this.gapcounts=null;
this.calculator=null;
this.residueShading=null;
this.changeSupport=null;
this.ranges=null;
this.currentTree=null;
this.selectionGroup=null;
this.setAlignment$jalview_datamodel_AlignmentI(null);
});

Clazz.newMeth(C$, 'isClosed$', function () {
return this.alignment == null ;
});

Clazz.newMeth(C$, 'getCalcManager$', function () {
return this.calculator;
});

Clazz.newMeth(C$, 'isShowSequenceLogo$', function () {
return this.showSequenceLogo;
});

Clazz.newMeth(C$, 'setShowSequenceLogo$Z', function (showSequenceLogo) {
if (showSequenceLogo != this.showSequenceLogo ) {
this.showSequenceLogo=showSequenceLogo;
this.calculator.updateAnnotationFor$Class(Clazz.getClass($I$(10)));
this.calculator.updateAnnotationFor$Class(Clazz.getClass($I$(11)));
this.calculator.updateAnnotationFor$Class(Clazz.getClass($I$(12)));
}this.showSequenceLogo=showSequenceLogo;
});

Clazz.newMeth(C$, 'setShowConsensusHistogram$Z', function (showConsensusHistogram) {
this.showConsensusHistogram=showConsensusHistogram;
});

Clazz.newMeth(C$, 'isShowGroupConservation$', function () {
return this.showGroupConservation;
});

Clazz.newMeth(C$, 'setShowGroupConservation$Z', function (showGroupConservation) {
this.showGroupConservation=showGroupConservation;
});

Clazz.newMeth(C$, 'isShowGroupConsensus$', function () {
return this.showGroupConsensus;
});

Clazz.newMeth(C$, 'setShowGroupConsensus$Z', function (showGroupConsensus) {
this.showGroupConsensus=showGroupConsensus;
});

Clazz.newMeth(C$, 'isShowConsensusHistogram$', function () {
return this.showConsensusHistogram;
});

Clazz.newMeth(C$, 'getSelectionGroup$', function () {
return this.selectionGroup;
});

Clazz.newMeth(C$, 'setSelectionGroup$jalview_datamodel_SequenceGroup', function (sg) {
this.selectionGroup=sg;
if (sg != null  && sg.getContext$() == null  ) {
sg.setContext$jalview_datamodel_AnnotatedCollectionI(this.alignment);
}});

Clazz.newMeth(C$, 'setHiddenColumns$jalview_datamodel_HiddenColumns', function (hidden) {
this.alignment.setHiddenColumns$jalview_datamodel_HiddenColumns(hidden);
});

Clazz.newMeth(C$, 'getColumnSelection$', function () {
return this.colSel;
});

Clazz.newMeth(C$, 'setColumnSelection$jalview_datamodel_ColumnSelection', function (colSel) {
this.colSel=colSel;
if (colSel != null ) {
this.updateHiddenColumns$();
}this.isColSelChanged$Z(true);
});

Clazz.newMeth(C$, 'getHiddenRepSequences$', function () {
return this.hiddenRepSequences;
});

Clazz.newMeth(C$, 'setHiddenRepSequences$java_util_Map', function (hiddenRepSequences) {
this.hiddenRepSequences=hiddenRepSequences;
});

Clazz.newMeth(C$, 'hasSelectedColumns$', function () {
var columnSelection=this.getColumnSelection$();
return columnSelection != null  && columnSelection.hasSelectedColumns$() ;
});

Clazz.newMeth(C$, 'hasHiddenColumns$', function () {
return this.alignment.getHiddenColumns$() != null  && this.alignment.getHiddenColumns$().hasHiddenColumns$() ;
});

Clazz.newMeth(C$, 'updateHiddenColumns$', function () {
});

Clazz.newMeth(C$, 'hasHiddenRows$', function () {
return this.alignment.getHiddenSequences$().getSize$() > 0;
});

Clazz.newMeth(C$, 'setSequenceSetId$S', function (newid) {
if (this.sequenceSetID != null ) {
System.err.println$S("Warning - overwriting a sequenceSetId for a viewport!");
}this.sequenceSetID= String.instantialize(newid);
});

Clazz.newMeth(C$, 'getSequenceSetId$', function () {
if (this.sequenceSetID == null ) {
this.sequenceSetID=this.alignment.hashCode$() + "";
}return this.sequenceSetID;
});

Clazz.newMeth(C$, 'getViewId$', function () {
if (this.viewId == null ) {
this.viewId=this.getSequenceSetId$() + "." + this.hashCode$() + "" ;
}return this.viewId;
});

Clazz.newMeth(C$, 'setIgnoreGapsConsensus$Z$jalview_api_AlignmentViewPanel', function (b, ap) {
this.ignoreGapsInConsensusCalculation=b;
if (ap != null ) {
this.updateConsensus$jalview_api_AlignmentViewPanel(ap);
if (this.residueShading != null ) {
this.residueShading.setThreshold$I$Z(this.residueShading.getThreshold$(), this.ignoreGapsInConsensusCalculation);
}}});

Clazz.newMeth(C$, 'isSelectionGroupChanged$Z', function (b) {
var hc=(this.selectionGroup == null  || this.selectionGroup.getSize$() == 0 ) ? -1 : this.selectionGroup.hashCode$();
if (hc != -1 && hc != this.sgrouphash ) {
if (b) {
this.sgrouphash=hc;
}return true;
}return false;
});

Clazz.newMeth(C$, 'isColSelChanged$Z', function (b) {
var hc=(this.colSel == null  || this.colSel.isEmpty$() ) ? -1 : this.colSel.hashCode$();
if (hc != -1 && hc != this.colselhash ) {
if (b) {
this.colselhash=hc;
}return true;
}return false;
});

Clazz.newMeth(C$, 'isIgnoreGapsConsensus$', function () {
return this.ignoreGapsInConsensusCalculation;
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
if (this.changeSupport != null ) {
this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
}});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O', function (prop, oldvalue, newvalue) {
this.changeSupport.firePropertyChange$S$O$O(prop, oldvalue, newvalue);
});

Clazz.newMeth(C$, 'hideSelectedColumns$', function () {
if (this.colSel.isEmpty$()) {
return;
}this.colSel.hideSelectedColumns$jalview_datamodel_AlignmentI(this.alignment);
this.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.isColSelChanged$Z(true);
});

Clazz.newMeth(C$, 'hideColumns$I$I', function (start, end) {
if (start == end) {
this.colSel.hideSelectedColumns$I$jalview_datamodel_HiddenColumns(start, this.alignment.getHiddenColumns$());
} else {
this.alignment.getHiddenColumns$().hideColumns$I$I(start, end);
}this.isColSelChanged$Z(true);
});

Clazz.newMeth(C$, 'showColumn$I', function (col) {
this.alignment.getHiddenColumns$().revealHiddenColumns$I$jalview_datamodel_ColumnSelection(col, this.colSel);
this.isColSelChanged$Z(true);
});

Clazz.newMeth(C$, 'showAllHiddenColumns$', function () {
this.alignment.getHiddenColumns$().revealAllHiddenColumns$jalview_datamodel_ColumnSelection(this.colSel);
this.isColSelChanged$Z(true);
});

Clazz.newMeth(C$, 'showAllHiddenSeqs$', function () {
var startSeq=this.ranges.getStartSeq$();
var endSeq=this.ranges.getEndSeq$();
if (this.alignment.getHiddenSequences$().getSize$() > 0) {
if (this.selectionGroup == null ) {
this.selectionGroup=Clazz.new_($I$(13));
this.selectionGroup.setEndRes$I(this.alignment.getWidth$() - 1);
}var tmp=this.alignment.getHiddenSequences$().showAll$java_util_Map(this.hiddenRepSequences);
for (var seq, $seq = tmp.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
this.selectionGroup.addSequence$jalview_datamodel_SequenceI$Z(seq, false);
this.setSequenceAnnotationsVisible$jalview_datamodel_SequenceI$Z(seq, true);
}
this.hiddenRepSequences=null;
this.ranges.setStartEndSeq$I$I(startSeq, endSeq + tmp.size$());
this.firePropertyChange$S$O$O("alignment", null, this.alignment.getSequences$());
this.sendSelection$();
}});

Clazz.newMeth(C$, 'showSequence$I', function (index) {
var startSeq=this.ranges.getStartSeq$();
var endSeq=this.ranges.getEndSeq$();
var tmp=this.alignment.getHiddenSequences$().showSequence$I$java_util_Map(index, this.hiddenRepSequences);
if (tmp.size$() > 0) {
if (this.selectionGroup == null ) {
this.selectionGroup=Clazz.new_($I$(13));
this.selectionGroup.setEndRes$I(this.alignment.getWidth$() - 1);
}for (var seq, $seq = tmp.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
this.selectionGroup.addSequence$jalview_datamodel_SequenceI$Z(seq, false);
this.setSequenceAnnotationsVisible$jalview_datamodel_SequenceI$Z(seq, true);
}
this.ranges.setStartEndSeq$I$I(startSeq, endSeq + tmp.size$());
this.firePropertyChange$S$O$O("alignment", null, this.alignment.getSequences$());
this.sendSelection$();
}});

Clazz.newMeth(C$, 'hideAllSelectedSeqs$', function () {
if (this.selectionGroup == null  || this.selectionGroup.getSize$() < 1 ) {
return;
}var seqs=this.selectionGroup.getSequencesInOrder$jalview_datamodel_AlignmentI(this.alignment);
this.hideSequence$jalview_datamodel_SequenceIA(seqs);
this.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
});

Clazz.newMeth(C$, 'hideSequence$jalview_datamodel_SequenceIA', function (seq) {
var startSeq=this.ranges.getStartSeq$();
if (seq != null ) {
for (var i=0; i < seq.length; i++) {
this.alignment.getHiddenSequences$().hideSequence$jalview_datamodel_SequenceI(seq[i]);
this.setSequenceAnnotationsVisible$jalview_datamodel_SequenceI$Z(seq[i], false);
}
this.ranges.setStartSeq$I(startSeq);
this.firePropertyChange$S$O$O("alignment", null, this.alignment.getSequences$());
}});

Clazz.newMeth(C$, 'hideSequences$jalview_datamodel_SequenceI$Z', function (sequence, representGroup) {
if (this.selectionGroup == null  || this.selectionGroup.getSize$() < 1 ) {
this.hideSequence$jalview_datamodel_SequenceIA(Clazz.array($I$(14), -1, [sequence]));
return;
}if (representGroup) {
this.hideRepSequences$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup(sequence, this.selectionGroup);
this.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
return;
}var gsize=this.selectionGroup.getSize$();
var hseqs=this.selectionGroup.getSequences$().toArray$TTA(Clazz.array($I$(14), [gsize]));
this.hideSequence$jalview_datamodel_SequenceIA(hseqs);
this.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.sendSelection$();
});

Clazz.newMeth(C$, 'setSequenceAnnotationsVisible$jalview_datamodel_SequenceI$Z', function (sequenceI, visible) {
var anns=this.alignment.getAlignmentAnnotation$();
if (anns != null ) {
for (var ann, $ann = 0, $$ann = anns; $ann<$$ann.length&&((ann=($$ann[$ann])),1);$ann++) {
if (ann.sequenceRef === sequenceI ) {
ann.visible=visible;
}}
}});

Clazz.newMeth(C$, 'hideRepSequences$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup', function (repSequence, sg) {
var sSize=sg.getSize$();
if (sSize < 2) {
return;
}if (this.hiddenRepSequences == null ) {
this.hiddenRepSequences=Clazz.new_($I$(15));
}this.hiddenRepSequences.put$TK$TV(repSequence, sg);
var seqs=Clazz.array($I$(14), [sSize - 1]);
var index=0;
for (var i=0; i < sSize; i++) {
if (sg.getSequenceAt$I(i) !== repSequence ) {
if (index == sSize - 1) {
return;
}seqs[index++]=sg.getSequenceAt$I(i);
}}
sg.setSeqrep$jalview_datamodel_SequenceI(repSequence);
sg.setHidereps$Z(true);
this.hideSequence$jalview_datamodel_SequenceIA(seqs);
});

Clazz.newMeth(C$, 'getReferenceSeq$', function () {
return this.alignment.getSeqrep$();
});

Clazz.newMeth(C$, 'isReferenceSeq$jalview_datamodel_SequenceI', function (seq) {
return this.alignment.getSeqrep$() === seq ;
});

Clazz.newMeth(C$, 'isHiddenRepSequence$jalview_datamodel_SequenceI', function (seq) {
return (this.hiddenRepSequences != null  && this.hiddenRepSequences.containsKey$O(seq) );
});

Clazz.newMeth(C$, 'getRepresentedSequences$jalview_datamodel_SequenceI', function (seq) {
return (this.hiddenRepSequences == null  ? null : this.hiddenRepSequences.get$O(seq));
});

Clazz.newMeth(C$, 'adjustForHiddenSeqs$I', function (alignmentIndex) {
return this.alignment.getHiddenSequences$().adjustForHiddenSeqs$I(alignmentIndex);
});

Clazz.newMeth(C$, 'invertColumnSelection$', function () {
this.colSel.invertColumnSelection$I$I$jalview_datamodel_AlignmentI(0, this.alignment.getWidth$(), this.alignment);
this.isColSelChanged$Z(true);
});

Clazz.newMeth(C$, 'getSelectionAsNewSequence$', function () {
var sequences;
if (this.selectionGroup == null  || this.selectionGroup.getSize$() == 0 ) {
sequences=this.alignment.getSequencesArray$();
var annots=this.alignment.getAlignmentAnnotation$();
for (var i=0; i < sequences.length; i++) {
sequences[i]=Clazz.new_($I$(16).c$$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotationA,[sequences[i], annots]);
}
} else {
sequences=this.selectionGroup.getSelectionAsNewSequences$jalview_datamodel_AlignmentI(this.alignment);
}return sequences;
});

Clazz.newMeth(C$, 'getSequenceSelection$', function () {
var sequences=null;
if (this.selectionGroup != null ) {
sequences=this.selectionGroup.getSequencesInOrder$jalview_datamodel_AlignmentI(this.alignment);
}if (sequences == null ) {
sequences=this.alignment.getSequencesArray$();
}return sequences;
});

Clazz.newMeth(C$, 'getAlignmentView$Z', function (selectedOnly) {
return this.getAlignmentView$Z$Z(selectedOnly, false);
});

Clazz.newMeth(C$, 'getAlignmentView$Z$Z', function (selectedOnly, markGroups) {
return Clazz.new_($I$(17).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$jalview_datamodel_SequenceGroup$Z$Z$Z,[this.alignment, this.alignment.getHiddenColumns$(), this.selectionGroup, this.alignment.getHiddenColumns$() != null  && this.alignment.getHiddenColumns$().hasHiddenColumns$() , selectedOnly, markGroups]);
});

Clazz.newMeth(C$, 'getViewAsString$Z', function (selectedRegionOnly) {
return this.getViewAsString$Z$Z(selectedRegionOnly, true);
});

Clazz.newMeth(C$, 'getViewAsString$Z$Z', function (selectedRegionOnly, exportHiddenSeqs) {
var selection=null;
var seqs=null;
var i;
var iSize;
var start=0;
var end=0;
if (selectedRegionOnly && this.selectionGroup != null  ) {
iSize=this.selectionGroup.getSize$();
seqs=this.selectionGroup.getSequencesInOrder$jalview_datamodel_AlignmentI(this.alignment);
start=this.selectionGroup.getStartRes$();
end=this.selectionGroup.getEndRes$() + 1;
} else {
if (this.hasHiddenRows$() && exportHiddenSeqs ) {
var fullAlignment=this.alignment.getHiddenSequences$().getFullAlignment$();
iSize=fullAlignment.getHeight$();
seqs=fullAlignment.getSequencesArray$();
end=fullAlignment.getWidth$();
} else {
iSize=this.alignment.getHeight$();
seqs=this.alignment.getSequencesArray$();
end=this.alignment.getWidth$();
}}selection=Clazz.array(String, [iSize]);
if (this.alignment.getHiddenColumns$() != null  && this.alignment.getHiddenColumns$().hasHiddenColumns$() ) {
for (i=0; i < iSize; i++) {
var blocks=this.alignment.getHiddenColumns$().getVisContigsIterator$I$I$Z(start, end + 1, false);
selection[i]=seqs[i].getSequenceStringFromIterator$java_util_Iterator(blocks);
}
} else {
for (i=0; i < iSize; i++) {
selection[i]=seqs[i].getSequenceAsString$I$I(start, end);
}
}return selection;
});

Clazz.newMeth(C$, 'getVisibleRegionBoundaries$I$I', function (min, max) {
var regions=Clazz.new_($I$(18));
var start=min;
var end=max;
do {
var hidden=this.alignment.getHiddenColumns$();
if (hidden != null  && hidden.hasHiddenColumns$() ) {
if (start == 0) {
start=hidden.visibleToAbsoluteColumn$I(start);
}end=hidden.getNextHiddenBoundary$Z$I(false, start);
if (start == end) {
end=max;
}if (end > max) {
end=max;
}}regions.add$TE(Clazz.array(Integer.TYPE, -1, [start, end]));
if (hidden != null  && hidden.hasHiddenColumns$() ) {
start=hidden.visibleToAbsoluteColumn$I(end);
start=hidden.getNextHiddenBoundary$Z$I(true, start) + 1;
}} while (end < max);
return regions;
});

Clazz.newMeth(C$, 'getVisibleAlignmentAnnotation$Z', function (selectedOnly) {
var ala=Clazz.new_($I$(18));
var aa;
if ((aa=this.alignment.getAlignmentAnnotation$()) != null ) {
for (var annot, $annot = 0, $$annot = aa; $annot<$$annot.length&&((annot=($$annot[$annot])),1);$annot++) {
var clone=Clazz.new_($I$(19).c$$jalview_datamodel_AlignmentAnnotation,[annot]);
if (selectedOnly && this.selectionGroup != null  ) {
clone.makeVisibleAnnotation$I$I$jalview_datamodel_HiddenColumns(this.selectionGroup.getStartRes$(), this.selectionGroup.getEndRes$(), this.alignment.getHiddenColumns$());
} else {
clone.makeVisibleAnnotation$jalview_datamodel_HiddenColumns(this.alignment.getHiddenColumns$());
}ala.add$TE(clone);
}
}return ala;
});

Clazz.newMeth(C$, 'isPadGaps$', function () {
return this.padGaps;
});

Clazz.newMeth(C$, 'setPadGaps$Z', function (padGaps) {
this.padGaps=padGaps;
});

Clazz.newMeth(C$, 'alignmentChanged$jalview_api_AlignmentViewPanel', function (ap) {
if (this.isPadGaps$()) {
this.alignment.padGaps$();
}if (this.autoCalculateConsensus) {
this.updateConsensus$jalview_api_AlignmentViewPanel(ap);
}if (this.hconsensus != null  && this.autoCalculateConsensus ) {
this.updateConservation$jalview_api_AlignmentViewPanel(ap);
}if (this.autoCalculateStrucConsensus) {
this.updateStrucConsensus$jalview_api_AlignmentViewPanel(ap);
}var alWidth=this.alignment.getWidth$();
var groups=this.alignment.getGroups$();
if (groups != null ) {
for (var sg, $sg = groups.iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (sg.getEndRes$() > alWidth) {
sg.setEndRes$I(alWidth - 1);
}}
}if (this.selectionGroup != null  && this.selectionGroup.getEndRes$() > alWidth ) {
this.selectionGroup.setEndRes$I(alWidth - 1);
}this.updateAllColourSchemes$();
this.calculator.restartWorkers$();
});

Clazz.newMeth(C$, 'updateAllColourSchemes$', function () {
var rs=this.residueShading;
if (rs != null ) {
rs.alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map(this.alignment, this.hiddenRepSequences);
rs.setConsensus$jalview_datamodel_ProfilesI(this.hconsensus);
if (rs.conservationApplied$()) {
rs.setConservation$jalview_analysis_Conservation($I$(20).calculateConservation$S$java_util_List$I$I$Z$I$Z("All", this.alignment.getSequences$(), 0, this.alignment.getWidth$(), false, this.getConsPercGaps$(), false));
}}for (var sg, $sg = this.alignment.getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (sg.cs != null ) {
sg.cs.alignmentChanged$jalview_datamodel_AnnotatedCollectionI$java_util_Map(sg, this.hiddenRepSequences);
}sg.recalcConservation$();
}
});

Clazz.newMeth(C$, 'initAutoAnnotation$', function () {
if (this.hconsensus == null  && !this.isDataset ) {
if (!this.alignment.isNucleotide$()) {
p$1.initConservation.apply(this, []);
p$1.initQuality.apply(this, []);
} else {
p$1.initRNAStructure.apply(this, []);
}this.consensus=Clazz.new_($I$(19).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,["Consensus", $I$(21).getString$S("label.consensus_descr"), Clazz.array($I$(22), [1]), 0.0, 100.0, 1]);
p$1.initConsensus$jalview_datamodel_AlignmentAnnotation.apply(this, [this.consensus]);
p$1.initGapCounts.apply(this, []);
this.initComplementConsensus$();
}});

Clazz.newMeth(C$, 'initComplementConsensus$', function () {
if (!this.alignment.isNucleotide$()) {
var codonMappings=this.alignment.getCodonFrames$();
if (codonMappings != null  && !codonMappings.isEmpty$() ) {
var doConsensus=false;
for (var mapping, $mapping = codonMappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
var mapLists=mapping.getdnaToProt$();
if (mapLists.length > 0 && mapLists[0].getFromRatio$() == 3 ) {
doConsensus=true;
break;
}}
if (doConsensus) {
this.complementConsensus=Clazz.new_($I$(19).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,["cDNA Consensus", $I$(21).getString$S("label.complement_consensus_descr"), Clazz.array($I$(22), [1]), 0.0, 100.0, 1]);
p$1.initConsensus$jalview_datamodel_AlignmentAnnotation.apply(this, [this.complementConsensus]);
return true;
}}}return false;
});

Clazz.newMeth(C$, 'initConsensus$jalview_datamodel_AlignmentAnnotation', function (aa) {
aa.hasText=true;
aa.autoCalculated=true;
if (this.showConsensus) {
this.alignment.addAnnotation$jalview_datamodel_AlignmentAnnotation(aa);
}}, p$1);

Clazz.newMeth(C$, 'initGapCounts', function () {
if (this.showOccupancy) {
this.gapcounts=Clazz.new_($I$(19).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,["Occupancy", $I$(21).getString$S("label.occupancy_descr"), Clazz.array($I$(22), [1]), 0.0, this.alignment.getHeight$(), 1]);
this.gapcounts.hasText=true;
this.gapcounts.autoCalculated=true;
this.gapcounts.scaleColLabel=true;
this.gapcounts.graph=1;
this.alignment.addAnnotation$jalview_datamodel_AlignmentAnnotation(this.gapcounts);
}}, p$1);

Clazz.newMeth(C$, 'initConservation', function () {
if (this.showConservation) {
if (this.conservation == null ) {
this.conservation=Clazz.new_($I$(19).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,["Conservation", $I$(21).formatMessage$S$OA("label.conservation_descr", [new Integer(this.getConsPercGaps$())]), Clazz.array($I$(22), [1]), 0.0, 11.0, 1]);
this.conservation.hasText=true;
this.conservation.autoCalculated=true;
this.alignment.addAnnotation$jalview_datamodel_AlignmentAnnotation(this.conservation);
}}}, p$1);

Clazz.newMeth(C$, 'initQuality', function () {
if (this.showQuality) {
if (this.quality == null ) {
this.quality=Clazz.new_($I$(19).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,["Quality", $I$(21).getString$S("label.quality_descr"), Clazz.array($I$(22), [1]), 0.0, 11.0, 1]);
this.quality.hasText=true;
this.quality.autoCalculated=true;
this.alignment.addAnnotation$jalview_datamodel_AlignmentAnnotation(this.quality);
}}}, p$1);

Clazz.newMeth(C$, 'initRNAStructure', function () {
if (this.alignment.hasRNAStructure$() && this.strucConsensus == null  ) {
this.strucConsensus=Clazz.new_($I$(19).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,["StrucConsensus", $I$(21).getString$S("label.strucconsensus_descr"), Clazz.array($I$(22), [1]), 0.0, 100.0, 1]);
this.strucConsensus.hasText=true;
this.strucConsensus.autoCalculated=true;
if (this.showConsensus) {
this.alignment.addAnnotation$jalview_datamodel_AlignmentAnnotation(this.strucConsensus);
}}}, p$1);

Clazz.newMeth(C$, 'calcPanelHeight$', function () {
var anns=this.getAlignment$().getAlignmentAnnotation$();
var height=0;
var charHeight=this.getCharHeight$();
if (anns != null ) {
var graphgrp=Clazz.new_($I$(23));
for (var aa, $aa = 0, $$aa = anns; $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
if (aa == null ) {
System.err.println$S("Null annotation row: ignoring.");
continue;
}if (!aa.visible) {
continue;
}if (aa.graphGroup > -1) {
if (graphgrp.get$I(aa.graphGroup)) {
continue;
} else {
graphgrp.set$I(aa.graphGroup);
}}aa.height=0;
if (aa.hasText) {
aa.height+=charHeight;
}if (aa.hasIcons) {
aa.height+=16;
}if (aa.graph > 0) {
aa.height+=aa.graphHeight;
}if (aa.height == 0) {
aa.height=20;
}height+=aa.height;
}
}if (height == 0) {
height=20;
}return height;
});

Clazz.newMeth(C$, 'updateGroupAnnotationSettings$Z$Z', function (applyGlobalSettings, preserveNewGroupSettings) {
var updateCalcs=false;
var conv=this.isShowGroupConservation$();
var cons=this.isShowGroupConsensus$();
var showprf=this.isShowSequenceLogo$();
var showConsHist=this.isShowConsensusHistogram$();
var normLogo=this.isNormaliseSequenceLogo$();
var aan=this.alignment.getAlignmentAnnotation$();
var oldrfs=Clazz.new_($I$(18));
if (aan != null ) {
for (var an=0; an < aan.length; an++) {
if (aan[an].autoCalculated && aan[an].groupRef != null  ) {
oldrfs.add$TE(aan[an].groupRef);
this.alignment.deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z(aan[an], false);
}}
}if (this.alignment.getGroups$() != null ) {
for (var sg, $sg = this.alignment.getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
updateCalcs=false;
if (applyGlobalSettings || (!preserveNewGroupSettings && !oldrfs.contains$O(sg) ) ) {
sg.setshowSequenceLogo$Z(showprf);
sg.setShowConsensusHistogram$Z(showConsHist);
sg.setNormaliseSequenceLogo$Z(normLogo);
}if (conv) {
updateCalcs=true;
this.alignment.addAnnotation$jalview_datamodel_AlignmentAnnotation$I(sg.getConservationRow$(), 0);
}if (cons) {
updateCalcs=true;
this.alignment.addAnnotation$jalview_datamodel_AlignmentAnnotation$I(sg.getConsensus$(), 0);
}if (updateCalcs) {
sg.recalcConservation$();
}}
}oldrfs.clear$();
});

Clazz.newMeth(C$, 'isDisplayReferenceSeq$', function () {
return this.alignment.hasSeqrep$() && this.viewStyle.isDisplayReferenceSeq$() ;
});

Clazz.newMeth(C$, 'setDisplayReferenceSeq$Z', function (displayReferenceSeq) {
this.viewStyle.setDisplayReferenceSeq$Z(displayReferenceSeq);
});

Clazz.newMeth(C$, 'isColourByReferenceSeq$', function () {
return this.alignment.hasSeqrep$() && this.viewStyle.isColourByReferenceSeq$() ;
});

Clazz.newMeth(C$, 'getSequenceColour$jalview_datamodel_SequenceI', function (seq) {
var sqc=this.sequenceColours.get$O(seq);
return (sqc == null  ? $I$(24).white : sqc);
});

Clazz.newMeth(C$, 'setSequenceColour$jalview_datamodel_SequenceI$java_awt_Color', function (seq, col) {
if (col == null ) {
this.sequenceColours.remove$O(seq);
} else {
this.sequenceColours.put$TK$TV(seq, col);
}});

Clazz.newMeth(C$, 'updateSequenceIdColours$', function () {
for (var sg, $sg = this.alignment.getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (sg.idColour != null ) {
for (var s, $s = sg.getSequences$java_util_Map(this.getHiddenRepSequences$()).iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
this.sequenceColours.put$TK$TV(s, sg.idColour);
}
}}
});

Clazz.newMeth(C$, 'clearSequenceColours$', function () {
this.sequenceColours.clear$();
});

Clazz.newMeth(C$, 'getCodingComplement$', function () {
return this.codingComplement;
});

Clazz.newMeth(C$, 'setCodingComplement$jalview_api_AlignViewportI', function (av) {
if (this === av ) {
System.err.println$S("Ignoring recursive setCodingComplement request");
} else {
this.codingComplement=av;
if (av.getCodingComplement$() !== this ) {
av.setCodingComplement$jalview_api_AlignViewportI(this);
}}});

Clazz.newMeth(C$, 'isNucleotide$', function () {
return this.getAlignment$() == null  ? false : this.getAlignment$().isNucleotide$();
});

Clazz.newMeth(C$, 'getFeaturesDisplayed$', function () {
return this.featuresDisplayed;
});

Clazz.newMeth(C$, 'setFeaturesDisplayed$jalview_api_FeaturesDisplayedI', function (featuresDisplayedI) {
this.featuresDisplayed=featuresDisplayedI;
});

Clazz.newMeth(C$, 'areFeaturesDisplayed$', function () {
return this.featuresDisplayed != null  && this.featuresDisplayed.getRegisteredFeaturesCount$() > 0 ;
});

Clazz.newMeth(C$, 'setShowSequenceFeatures$Z', function (b) {
this.viewStyle.setShowSequenceFeatures$Z(b);
});

Clazz.newMeth(C$, 'isShowSequenceFeatures$', function () {
return this.viewStyle.isShowSequenceFeatures$();
});

Clazz.newMeth(C$, 'setShowSequenceFeaturesHeight$Z', function (selected) {
this.viewStyle.setShowSequenceFeaturesHeight$Z(selected);
});

Clazz.newMeth(C$, 'isShowSequenceFeaturesHeight$', function () {
return this.viewStyle.isShowSequenceFeaturesHeight$();
});

Clazz.newMeth(C$, 'setShowAnnotation$Z', function (b) {
this.viewStyle.setShowAnnotation$Z(b);
});

Clazz.newMeth(C$, 'isShowAnnotation$', function () {
return this.viewStyle.isShowAnnotation$();
});

Clazz.newMeth(C$, 'isRightAlignIds$', function () {
return this.viewStyle.isRightAlignIds$();
});

Clazz.newMeth(C$, 'setRightAlignIds$Z', function (rightAlignIds) {
this.viewStyle.setRightAlignIds$Z(rightAlignIds);
});

Clazz.newMeth(C$, 'getConservationSelected$', function () {
return this.viewStyle.getConservationSelected$();
});

Clazz.newMeth(C$, 'setShowBoxes$Z', function (state) {
this.viewStyle.setShowBoxes$Z(state);
});

Clazz.newMeth(C$, 'getTextColour$', function () {
return this.viewStyle.getTextColour$();
});

Clazz.newMeth(C$, 'getTextColour2$', function () {
return this.viewStyle.getTextColour2$();
});

Clazz.newMeth(C$, 'getThresholdTextColour$', function () {
return this.viewStyle.getThresholdTextColour$();
});

Clazz.newMeth(C$, 'isConservationColourSelected$', function () {
return this.viewStyle.isConservationColourSelected$();
});

Clazz.newMeth(C$, 'isRenderGaps$', function () {
return this.viewStyle.isRenderGaps$();
});

Clazz.newMeth(C$, 'isShowColourText$', function () {
return this.viewStyle.isShowColourText$();
});

Clazz.newMeth(C$, 'setConservationColourSelected$Z', function (conservationColourSelected) {
this.viewStyle.setConservationColourSelected$Z(conservationColourSelected);
});

Clazz.newMeth(C$, 'setShowColourText$Z', function (showColourText) {
this.viewStyle.setShowColourText$Z(showColourText);
});

Clazz.newMeth(C$, 'setTextColour$java_awt_Color', function (textColour) {
this.viewStyle.setTextColour$java_awt_Color(textColour);
});

Clazz.newMeth(C$, 'setThresholdTextColour$I', function (thresholdTextColour) {
this.viewStyle.setThresholdTextColour$I(thresholdTextColour);
});

Clazz.newMeth(C$, 'setTextColour2$java_awt_Color', function (textColour2) {
this.viewStyle.setTextColour2$java_awt_Color(textColour2);
});

Clazz.newMeth(C$, 'getViewStyle$', function () {
return Clazz.new_($I$(1).c$$jalview_api_ViewStyleI,[this.viewStyle]);
});

Clazz.newMeth(C$, 'setViewStyle$jalview_api_ViewStyleI', function (settingsForView) {
this.viewStyle=Clazz.new_($I$(1).c$$jalview_api_ViewStyleI,[settingsForView]);
if (this.residueShading != null ) {
this.residueShading.setConservationApplied$Z(settingsForView.isConservationColourSelected$());
}});

Clazz.newMeth(C$, 'sameStyle$jalview_api_ViewStyleI', function (them) {
return this.viewStyle.sameStyle$jalview_api_ViewStyleI(them);
});

Clazz.newMeth(C$, 'getIdWidth$', function () {
return this.viewStyle.getIdWidth$();
});

Clazz.newMeth(C$, 'setIdWidth$I', function (i) {
this.viewStyle.setIdWidth$I(i);
});

Clazz.newMeth(C$, 'isCentreColumnLabels$', function () {
return this.viewStyle.isCentreColumnLabels$();
});

Clazz.newMeth(C$, 'setCentreColumnLabels$Z', function (centreColumnLabels) {
this.viewStyle.setCentreColumnLabels$Z(centreColumnLabels);
});

Clazz.newMeth(C$, 'setShowDBRefs$Z', function (showdbrefs) {
this.viewStyle.setShowDBRefs$Z(showdbrefs);
});

Clazz.newMeth(C$, 'isShowDBRefs$', function () {
return this.viewStyle.isShowDBRefs$();
});

Clazz.newMeth(C$, 'isShowNPFeats$', function () {
return this.viewStyle.isShowNPFeats$();
});

Clazz.newMeth(C$, 'setShowNPFeats$Z', function (shownpfeats) {
this.viewStyle.setShowNPFeats$Z(shownpfeats);
});

Clazz.newMeth(C$, 'addToHistoryList$jalview_commands_CommandI', function (command) {
if (this.historyList != null ) {
this.historyList.push$TE(command);
this.broadcastCommand$jalview_commands_CommandI$Z(command, false);
}});

Clazz.newMeth(C$, 'broadcastCommand$jalview_commands_CommandI$Z', function (command, undo) {
this.getStructureSelectionManager$().commandPerformed$jalview_commands_CommandI$Z$jalview_structure_VamsasSource(command, undo, this.getVamsasSource$());
});

Clazz.newMeth(C$, 'addToRedoList$jalview_commands_CommandI', function (command) {
if (this.redoList != null ) {
this.redoList.push$TE(command);
}this.broadcastCommand$jalview_commands_CommandI$Z(command, true);
});

Clazz.newMeth(C$, 'clearRedoList$', function () {
if (this.redoList != null ) {
this.redoList.clear$();
}});

Clazz.newMeth(C$, 'setHistoryList$java_util_Deque', function (list) {
this.historyList=list;
});

Clazz.newMeth(C$, 'getHistoryList$', function () {
return this.historyList;
});

Clazz.newMeth(C$, 'setRedoList$java_util_Deque', function (list) {
this.redoList=list;
});

Clazz.newMeth(C$, 'getRedoList$', function () {
return this.redoList;
});

Clazz.newMeth(C$, 'getVamsasSource$', function () {
return this;
});

Clazz.newMeth(C$, 'getSortAnnotationsBy$', function () {
return this.sortAnnotationsBy;
});

Clazz.newMeth(C$, 'setSortAnnotationsBy$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder', function (sortAnnotationsBy) {
this.sortAnnotationsBy=sortAnnotationsBy;
});

Clazz.newMeth(C$, 'isShowAutocalculatedAbove$', function () {
return this.showAutocalculatedAbove;
});

Clazz.newMeth(C$, 'setShowAutocalculatedAbove$Z', function (showAutocalculatedAbove) {
this.showAutocalculatedAbove=showAutocalculatedAbove;
});

Clazz.newMeth(C$, 'isScaleProteinAsCdna$', function () {
return this.viewStyle.isScaleProteinAsCdna$();
});

Clazz.newMeth(C$, 'setScaleProteinAsCdna$Z', function (b) {
this.viewStyle.setScaleProteinAsCdna$Z(b);
});

Clazz.newMeth(C$, 'isProteinFontAsCdna$', function () {
return this.viewStyle.isProteinFontAsCdna$();
});

Clazz.newMeth(C$, 'setProteinFontAsCdna$Z', function (b) {
this.viewStyle.setProteinFontAsCdna$Z(b);
});

Clazz.newMeth(C$, 'isFollowHighlight$', function () {
return this.followHighlight;
});

Clazz.newMeth(C$, 'setFollowHighlight$Z', function (b) {
this.followHighlight=b;
});

Clazz.newMeth(C$, 'getRanges$', function () {
return this.ranges;
});

Clazz.newMeth(C$, 'findComplementScrollTarget$jalview_datamodel_SearchResultsI', function (sr) {
var complement=this.getCodingComplement$();
if (complement == null  || !complement.isFollowHighlight$() ) {
return 0;
}var iAmProtein=!this.getAlignment$().isNucleotide$();
var proteinAlignment=iAmProtein ? this.getAlignment$() : complement.getAlignment$();
if (proteinAlignment == null ) {
return 0;
}var mappings=proteinAlignment.getCodonFrames$();
var seqOffset=0;
var sequence=null;
var middleColumn=this.ranges.getStartRes$() + ((this.ranges.getEndRes$() - this.ranges.getStartRes$())/2|0);
var hiddenSequences=this.getAlignment$().getHiddenSequences$();
var lastSeq=this.alignment.getHeight$() - 1;
var seqMappings=null;
for (var seqNo=this.ranges.getStartSeq$(); seqNo <= lastSeq; seqNo++, seqOffset++) {
sequence=this.getAlignment$().getSequenceAt$I(seqNo);
if (hiddenSequences != null  && hiddenSequences.isHidden$jalview_datamodel_SequenceI(sequence) ) {
continue;
}if ($I$(25).isGap$C(sequence.getCharAt$I(middleColumn))) {
continue;
}seqMappings=$I$(26).findMappingsForSequenceAndOthers$jalview_datamodel_SequenceI$java_util_List$java_util_List(sequence, mappings, this.getCodingComplement$().getAlignment$().getSequences$());
if (!seqMappings.isEmpty$()) {
break;
}}
if (sequence == null  || seqMappings == null   || seqMappings.isEmpty$() ) {
return 0;
}$I$(26).addSearchResults$jalview_datamodel_SearchResultsI$jalview_datamodel_SequenceI$I$java_util_List(sr, sequence, sequence.findPosition$I(middleColumn), seqMappings);
return seqOffset;
});

Clazz.newMeth(C$, 'expandColSelection$jalview_datamodel_SequenceGroup$Z', function (sg, wholewidth) {
var sgs;
var sge;
if (sg != null  && (sgs=sg.getStartRes$()) >= 0  && sg.getStartRes$() <= (sge=sg.getEndRes$())  && !this.hasSelectedColumns$() ) {
if (!wholewidth && this.alignment.getWidth$() == (1 + sge - sgs) ) {
return;
}if (this.colSel == null ) {
this.colSel=Clazz.new_($I$(3));
}for (var cspos=sg.getStartRes$(); cspos <= sg.getEndRes$(); cspos++) {
this.colSel.addElement$I(cspos);
}
}});

Clazz.newMeth(C$, 'isSelectionDefinedGroup$', function () {
if (this.selectionGroup == null ) {
return false;
}if (this.isSelectionGroupChanged$Z(true)) {
this.selectionIsDefinedGroup=false;
var gps=this.alignment.getGroups$();
if (gps == null  || gps.size$() == 0 ) {
this.selectionIsDefinedGroup=false;
} else {
this.selectionIsDefinedGroup=gps.contains$O(this.selectionGroup);
}}return this.selectionGroup.isDefined$() || this.selectionIsDefinedGroup ;
});

Clazz.newMeth(C$, 'hasSearchResults$', function () {
return this.searchResults != null ;
});

Clazz.newMeth(C$, 'setSearchResults$jalview_datamodel_SearchResultsI', function (results) {
this.searchResults=results;
});

Clazz.newMeth(C$, 'getSearchResults$', function () {
return this.searchResults;
});

Clazz.newMeth(C$, 'getConsensusSeq$', function () {
if (this.consensus == null ) {
this.updateConsensus$jalview_api_AlignmentViewPanel(null);
}if (this.consensus == null ) {
return null;
}var seqs=Clazz.new_($I$(27));
for (var i=0; i < this.consensus.annotations.length; i++) {
var annotation=this.consensus.annotations[i];
if (annotation != null ) {
var description=annotation.description;
if (description != null  && description.startsWith$S("[") ) {
seqs.append$C(description.charAt$I(1));
} else {
seqs.append$S(annotation.displayCharacter);
}}}
var sq=Clazz.new_($I$(16).c$$S$S,["Consensus", seqs.toString()]);
sq.setDescription$S("Percentage Identity Consensus " + ((this.ignoreGapsInConsensusCalculation) ? " without gaps" : ""));
return sq;
});

Clazz.newMeth(C$, 'setCurrentTree$jalview_analysis_TreeModel', function (tree) {
this.currentTree=tree;
});

Clazz.newMeth(C$, 'getCurrentTree$', function () {
return this.currentTree;
});

Clazz.newMeth(C$, 'getAlignExportData$jalview_api_AlignExportSettingsI', function (options) {
var alignmentToExport=null;
var omitHidden=null;
alignmentToExport=null;
if (this.hasHiddenColumns$() && !options.isExportHiddenColumns$() ) {
omitHidden=this.getViewAsString$Z$Z(false, options.isExportHiddenSequences$());
}var alignmentStartEnd=Clazz.array(Integer.TYPE, [2]);
if (this.hasHiddenRows$() && options.isExportHiddenSequences$() ) {
alignmentToExport=this.getAlignment$().getHiddenSequences$().getFullAlignment$();
} else {
alignmentToExport=this.getAlignment$();
}alignmentStartEnd=this.getAlignment$().getHiddenColumns$().getVisibleStartAndEndIndex$I(alignmentToExport.getWidth$());
var ed=Clazz.new_($I$(28).c$$jalview_datamodel_AlignmentI$SA$IA,[alignmentToExport, omitHidden, alignmentStartEnd]);
return ed;
});

Clazz.newMeth(C$, 'isUpdateStructures$', function () {
return this.needToUpdateStructureViews;
});

Clazz.newMeth(C$, 'setUpdateStructures$Z', function (update) {
this.needToUpdateStructureViews=update;
});

Clazz.newMeth(C$, 'needToUpdateStructureViews$', function () {
var update=this.needToUpdateStructureViews;
this.needToUpdateStructureViews=false;
return update;
});

Clazz.newMeth(C$, 'addSequenceGroup$jalview_datamodel_SequenceGroup', function (sequenceGroup) {
this.alignment.addGroup$jalview_datamodel_SequenceGroup(sequenceGroup);
var col=sequenceGroup.idColour;
if (col != null ) {
col=col.brighter$();
for (var sq, $sq = sequenceGroup.getSequences$().iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
this.setSequenceColour$jalview_datamodel_SequenceI$java_awt_Color(sq, col);
}
}if (this.codingComplement != null ) {
var mappedGroup=$I$(26).mapSequenceGroup$jalview_datamodel_SequenceGroup$jalview_api_AlignViewportI$jalview_api_AlignViewportI(sequenceGroup, this, this.codingComplement);
if (mappedGroup.getSequences$().size$() > 0) {
this.codingComplement.getAlignment$().addGroup$jalview_datamodel_SequenceGroup(mappedGroup);
if (col != null ) {
for (var seq, $seq = mappedGroup.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
this.codingComplement.setSequenceColour$jalview_datamodel_SequenceI$java_awt_Color(seq, col);
}
}}this.codingComplement.setUpdateStructures$Z(this.needToUpdateStructureViews);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
