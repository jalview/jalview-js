(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'fr.orsay.lri.varna.models.annotations.HighlightRegionAnnotation','java.util.LinkedHashMap','java.util.Hashtable',['jalview.gui.AppVarna','.VarnaHighlighter'],'jalview.util.MessageManager','jalview.ext.varna.RnaModel','jalview.gui.AppVarnaBinding','javax.swing.event.InternalFrameAdapter','java.awt.Color','javax.swing.JSplitPane','java.awt.BorderLayout','jalview.gui.Desktop','jalview.util.ShiftList','fr.orsay.lri.varna.models.rna.RNA','StringBuilder','jalview.util.Comparison','jalview.analysis.AlignSeq']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AppVarna", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JInternalFrame', ['jalview.structure.SelectionListener', 'jalview.structure.SecondaryStructureListener', 'fr.orsay.lri.varna.interfaces.InterfaceVARNASelectionListener', 'jalview.structure.VamsasSource']);
C$.PAIRS=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.PAIRS=Clazz.array(Byte.TYPE, -1, ["(", ")", "[", "]", "{", "}", "<", ">"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vab=null;
this.ap=null;
this.viewId=null;
this.ssm=null;
this.models=null;
this.offsets=null;
this.offsetsInv=null;
this.split=null;
this.mouseOverHighlighter=null;
this.selectionHighlighter=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.models=Clazz.new_($I$(2));
this.offsets=Clazz.new_($I$(3));
this.offsetsInv=Clazz.new_($I$(3));
this.mouseOverHighlighter=Clazz.new_($I$(4), [this, null]);
this.selectionHighlighter=Clazz.new_($I$(4), [this, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotation$jalview_gui_AlignmentPanel', function (seq, aa, ap) {
C$.c$$jalview_gui_AlignmentPanel.apply(this, [ap]);
var sname=aa.sequenceRef == null  ? "secondary structure (alignment)" : seq.getName$() + " structure";
var theTitle=sname + (aa.sequenceRef == null  ? " trimmed to " + seq.getName$() : "");
theTitle=$I$(5).formatMessage$S$SA("label.varna_params", Clazz.array(String, -1, [theTitle]));
this.setTitle$S(theTitle);
var gappedTitle=sname + " (with gaps)";
var gappedModel=Clazz.new_($I$(6).c$$S$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_SequenceI$fr_orsay_lri_varna_models_rna_RNA$Z,[gappedTitle, aa, seq, null, true]);
this.addModel$jalview_ext_varna_RnaModel$S(gappedModel, gappedTitle);
var trimmedTitle="trimmed " + sname;
var trimmedModel=Clazz.new_($I$(6).c$$S$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_SequenceI$fr_orsay_lri_varna_models_rna_RNA$Z,[trimmedTitle, aa, seq, null, false]);
this.addModel$jalview_ext_varna_RnaModel$S(trimmedModel, trimmedTitle);
this.vab.setSelectedIndex$I(0);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this,1);
this.ap=ap;
this.viewId=System.currentTimeMillis$() + "." + this.hashCode$() ;
this.vab=Clazz.new_($I$(7));
this.initVarna$();
this.ssm=ap.getStructureSelectionManager$();
this.ssm.addStructureViewerListener$O(this);
this.ssm.addSelectionListener$jalview_structure_SelectionListener(this);
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.AppVarna$1||
(function(){var C$=Clazz.newClass(P$, "AppVarna$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (evt) {
this.b$['jalview.gui.AppVarna'].close$.apply(this.b$['jalview.gui.AppVarna'], []);
});
})()
), Clazz.new_($I$(8), [this, null],P$.AppVarna$1)));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_RnaViewerModel$jalview_gui_AlignmentPanel', function (model, ap) {
C$.c$$jalview_gui_AlignmentPanel.apply(this, [ap]);
this.setTitle$S(model.title);
this.viewId=model.viewId;
this.setBounds$I$I$I$I(model.x, model.y, model.width, model.height);
this.split.setDividerLocation$I(model.dividerLocation);
}, 1);

Clazz.newMeth(C$, 'initVarna$', function () {
var varnaPanel=this.vab.get_varnaPanel$();
this.setBackground$java_awt_Color($I$(9).white);
this.split=Clazz.new_($I$(10).c$$I$Z$java_awt_Component$java_awt_Component,[1, true, this.vab.getListPanel$(), varnaPanel]);
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(11)));
this.getContentPane$().add$java_awt_Component$O(this.split, "Center");
varnaPanel.addSelectionListener$fr_orsay_lri_varna_interfaces_InterfaceVARNASelectionListener(this);
$I$(12).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this, "", this.getBounds$().width, this.getBounds$().height);
this.pack$();
this.showPanel$Z(true);
});

Clazz.newMeth(C$, 'trimRNA$fr_orsay_lri_varna_models_rna_RNA$S', function (rna, name) {
var offset=Clazz.new_($I$(13));
var rnaTrim=Clazz.new_($I$(14).c$$S,[name]);
try {
var structDBN=rna.getStructDBN$Z(true);
rnaTrim.setRNA$S$S(rna.getSeq$(), C$.replaceOddGaps$S(structDBN));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e2 = e$$;
{
e2.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e3 = e$$;
{
e3.printStackTrace$();
}
} else {
throw e$$;
}
}
var seq=rnaTrim.getSeq$();
var struc=Clazz.new_($I$(15).c$$I,[256]);
struc.append$S(rnaTrim.getStructDBN$Z(true));
var ofstart=-1;
var sleng=seq.length$();
for (var i=0; i < sleng; i++) {
if ($I$(16).isGap$C(seq.charAt$I(i))) {
if (ofstart == -1) {
ofstart=i;
}if (!rnaTrim.findPair$I(i).isEmpty$()) {
var m=(rnaTrim.findPair$I(i).get$I(1)).intValue$();
var l=(rnaTrim.findPair$I(i).get$I(0)).intValue$();
struc.replace$I$I$S(m, m + 1, "*");
struc.replace$I$I$S(l, l + 1, "*");
} else {
struc.replace$I$I$S(i, i + 1, "*");
}} else {
if (ofstart > -1) {
offset.addShift$I$I(offset.shift$I(ofstart), ofstart - i);
ofstart=-1;
}}}
if (ofstart > -1) {
offset.addShift$I$I(offset.shift$I(ofstart), ofstart - sleng);
ofstart=-1;
}var newStruc=struc.toString().replace$CharSequence$CharSequence("*", "");
var newSeq=$I$(17).extractGaps$S$S($I$(16).GapChars, seq);
try {
rnaTrim.setRNA$S$S(newSeq, newStruc);
p$1.registerOffset$fr_orsay_lri_varna_models_rna_RNA$jalview_util_ShiftList.apply(this, [rnaTrim, offset]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
return rnaTrim;
});

Clazz.newMeth(C$, 'registerOffset$fr_orsay_lri_varna_models_rna_RNA$jalview_util_ShiftList', function (rnaTrim, offset) {
this.offsets.put$TK$TV(rnaTrim, offset);
this.offsetsInv.put$TK$TV(rnaTrim, offset.getInverse$());
}, p$1);

Clazz.newMeth(C$, 'showPanel$Z', function (show) {
this.setVisible$Z(show);
});

Clazz.newMeth(C$, ['mouseOverSequence$jalview_datamodel_SequenceI$I$I','mouseOverSequence$'], function (sequence, index, position) {
var rna=this.vab.getSelectedRNA$();
if (rna == null ) {
return;
}var rnaModel=this.models.get$O(rna);
if (rnaModel.seq === sequence ) {
var highlightPos=rnaModel.gapped ? index : position - sequence.getStart$();
this.mouseOverHighlighter.highlightRegion$fr_orsay_lri_varna_models_rna_RNA$I$I(rna, highlightPos, highlightPos);
this.vab.updateSelectedRNA$fr_orsay_lri_varna_models_rna_RNA(rna);
}});

Clazz.newMeth(C$, ['selection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource','selection$'], function (seqsel, colsel, hidden, source) {
if (source !== this.ap.av ) {
return;
}var rna=this.vab.getSelectedRNA$();
if (rna == null ) {
return;
}var rnaModel=this.models.get$O(rna);
if (seqsel != null  && seqsel.getSize$() > 0  && seqsel.contains$jalview_datamodel_SequenceI(rnaModel.seq) ) {
var start=seqsel.getStartRes$();
var end=seqsel.getEndRes$();
if (rnaModel.gapped) {
var shift=this.offsets.get$O(rna);
if (shift != null ) {
start=shift.shift$I(start);
end=shift.shift$I(end);
}} else {
start=rnaModel.seq.findPosition$I(start) - rnaModel.seq.getStart$();
end=rnaModel.seq.findPosition$I(end) - rnaModel.seq.getStart$();
}this.selectionHighlighter.highlightRegion$fr_orsay_lri_varna_models_rna_RNA$I$I(rna, start, end);
this.selectionHighlighter.getLastHighlight$().setOutlineColor$java_awt_Color(seqsel.getOutlineColour$());
this.vab.updateSelectedRNA$fr_orsay_lri_varna_models_rna_RNA(rna);
} else {
this.selectionHighlighter.clearSelection$();
}});

Clazz.newMeth(C$, 'onHoverChanged$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (previousBase, newBase) {
var rna=this.vab.getSelectedRNA$();
var shift=this.offsetsInv.get$O(rna);
var seq=this.models.get$O(rna).seq;
if (newBase != null  && seq != null  ) {
if (shift != null ) {
var i=shift.shift$I(newBase.getIndex$());
this.ssm.mouseOverVamsasSequence$jalview_datamodel_SequenceI$I$jalview_structure_VamsasSource(seq, i, this);
} else {
this.ssm.mouseOverVamsasSequence$jalview_datamodel_SequenceI$I$jalview_structure_VamsasSource(seq, newBase.getIndex$(), this);
}}});

Clazz.newMeth(C$, 'onSelectionChanged$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList', function (arg0, arg1, arg2) {
});

Clazz.newMeth(C$, 'getStateInfo$fr_orsay_lri_varna_models_rna_RNA', function (rna) {
return this.vab.getStateInfo$fr_orsay_lri_varna_models_rna_RNA(rna);
});

Clazz.newMeth(C$, 'getAlignmentPanel$', function () {
return this.ap;
});

Clazz.newMeth(C$, 'getViewId$', function () {
return this.viewId;
});

Clazz.newMeth(C$, 'isListeningFor$jalview_datamodel_SequenceI', function (seq) {
for (var model, $model = this.models.values$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (model.seq === seq ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getDividerLocation$', function () {
return this.split == null  ? 0 : this.split.getDividerLocation$();
});

Clazz.newMeth(C$, 'close$', function () {
if (this.ssm != null ) {
this.ssm.removeStructureViewerListener$O$SA(this, null);
this.ssm.removeSelectionListener$jalview_structure_SelectionListener(this);
}});

Clazz.newMeth(C$, 'getAnnotation$jalview_datamodel_SequenceI', function (seq) {
for (var model, $model = this.models.values$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
if (model.seq === seq ) {
return model.ann;
}}
return null;
});

Clazz.newMeth(C$, 'getSelectedIndex$', function () {
return this.vab.getSelectedIndex$();
});

Clazz.newMeth(C$, 'getModels$', function () {
return this.models.values$();
});

Clazz.newMeth(C$, 'addModel$jalview_ext_varna_RnaModel$S', function (model, modelName) {
if (!model.ann.isValidStruc$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid RNA structure annotation"]);
}var rna=Clazz.new_($I$(14).c$$S,[modelName]);
var struc=model.ann.getRNAStruc$();
struc=C$.replaceOddGaps$S(struc);
var strucseq=model.seq.getSequenceAsString$();
try {
rna.setRNA$S$S(strucseq, struc);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e2 = e$$;
{
e2.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e3 = e$$;
{
e3.printStackTrace$();
}
} else {
throw e$$;
}
}
if (!model.gapped) {
rna=this.trimRNA$fr_orsay_lri_varna_models_rna_RNA$S(rna, modelName);
}this.models.put$TK$TV(rna, Clazz.new_($I$(6).c$$S$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_SequenceI$fr_orsay_lri_varna_models_rna_RNA$Z,[modelName, model.ann, model.seq, rna, model.gapped]));
this.vab.addStructure$fr_orsay_lri_varna_models_rna_RNA(rna);
return rna;
});

Clazz.newMeth(C$, 'buildOffset$jalview_datamodel_SequenceI', function (seq) {
var offset=Clazz.new_($I$(13));
var ofstart=-1;
var sleng=seq.getLength$();
for (var i=0; i < sleng; i++) {
if ($I$(16).isGap$C(seq.getCharAt$I(i))) {
if (ofstart == -1) {
ofstart=i;
}} else {
if (ofstart > -1) {
offset.addShift$I$I(offset.shift$I(ofstart), ofstart - i);
ofstart=-1;
}}}
if (ofstart > -1) {
offset.addShift$I$I(offset.shift$I(ofstart), ofstart - sleng);
ofstart=-1;
}return offset;
});

Clazz.newMeth(C$, 'setInitialSelection$I', function (selectedIndex) {
{
try {
this.wait$J(1000);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}this.vab.setSelectedIndex$I(selectedIndex);
});

Clazz.newMeth(C$, 'addModelSession$jalview_ext_varna_RnaModel$S$S', function (model, modelName, sessionFile) {
if (!model.ann.isValidStruc$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid RNA structure annotation"]);
}try {
var fromSession=this.vab.vp.loadSession$S(sessionFile);
this.vab.addStructure$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig(fromSession.rna, fromSession.config);
var rna=fromSession.rna;
var newModel=Clazz.new_($I$(6).c$$S$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_SequenceI$fr_orsay_lri_varna_models_rna_RNA$Z,[model.title, model.ann, model.seq, rna, model.gapped]);
if (!model.gapped) {
p$1.registerOffset$fr_orsay_lri_varna_models_rna_RNA$jalview_util_ShiftList.apply(this, [rna, this.buildOffset$jalview_datamodel_SequenceI(model.seq)]);
}this.models.put$TK$TV(rna, newModel);
this.selectionHighlighter=Clazz.new_($I$(4).c$$fr_orsay_lri_varna_models_rna_RNA, [this, null, rna]);
return fromSession.rna;
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed")){
System.err.println$S("Error restoring Varna session: " + e.getMessage$());
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'replaceOddGaps$S', function (s) {
if (s == null ) {
return null;
}var changed=false;
var bytes=s.getBytes$();
for (var i=0; i < bytes.length; i++) {
var ok=false;
for (var j=0; !ok && (j < C$.PAIRS.length) ; j++) {
if (bytes[i] == C$.PAIRS[j]) {
ok=true;
}}
if (!ok) {
bytes[i]=(".".$c()|0);
changed=true;
}}
return changed ?  String.instantialize(bytes) : s;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.AppVarna, "VarnaHighlighter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._lastHighlight=null;
this._lastRNAhighlighted=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._lastRNAhighlighted=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA', function (rna) {
C$.$init$.apply(this);
this._lastRNAhighlighted=rna;
var highlights=rna.getHighlightRegion$();
if (highlights != null  && !highlights.isEmpty$() ) {
this._lastHighlight=highlights.get$I(0);
}}, 1);

Clazz.newMeth(C$, 'highlightRegion$fr_orsay_lri_varna_models_rna_RNA$I$I', function (rna, start, end) {
this.clearLastSelection$();
var highlight=Clazz.new_($I$(1).c$$java_util_ArrayList,[rna.getBasesBetween$I$I(start, end)]);
rna.addHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation(highlight);
this._lastHighlight=highlight;
this._lastRNAhighlighted=rna;
});

Clazz.newMeth(C$, 'getLastHighlight$', function () {
return this._lastHighlight;
});

Clazz.newMeth(C$, 'clearSelection$', function () {
if (this._lastRNAhighlighted != null ) {
this._lastRNAhighlighted.getHighlightRegion$().clear$();
this.this$0.vab.updateSelectedRNA$fr_orsay_lri_varna_models_rna_RNA(this._lastRNAhighlighted);
this._lastRNAhighlighted=null;
this._lastHighlight=null;
}});

Clazz.newMeth(C$, 'clearLastSelection$', function () {
if (this._lastRNAhighlighted != null ) {
this._lastRNAhighlighted.removeHighlightRegion$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation(this._lastHighlight);
this._lastRNAhighlighted=null;
this._lastHighlight=null;
}});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
