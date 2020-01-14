(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.util.Vector','jalview.analysis.AlignSeq','jalview.datamodel.SequenceI','jalview.gui.AlignFrame','jalview.datamodel.Alignment','jalview.gui.Desktop','jalview.util.MessageManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PairwiseAlignPanel", null, 'jalview.jbgui.GPairwiseAlignPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.av=null;
this.sequences=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_viewmodel_AlignmentViewport', function (viewport) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.av=viewport;
this.sequences=Clazz.new_($I$(1));
var selectionGroup=viewport.getSelectionGroup$();
var isSelection=selectionGroup != null  && selectionGroup.getSize$() > 0 ;
var view=viewport.getAlignmentView$Z(isSelection);
var seqStrings=view.getSequenceStrings$C(viewport.getGapCharacter$());
var seqs;
if (isSelection) {
seqs=view.getAlignmentAndHiddenColumns$C(viewport.getGapCharacter$())[0];
} else {
seqs=this.av.getAlignment$().getSequencesArray$();
}var type=(viewport.getAlignment$().isNucleotide$()) ? "dna" : "pep";
var scores=Clazz.array(Float.TYPE, [seqs.length, seqs.length]);
var totscore=0.0;
var count=seqs.length;
var first=true;
for (var i=1; i < count; i++) {
for (var j=0; j < i; j++) {
var as=Clazz.new_($I$(2).c$$jalview_datamodel_SequenceI$S$jalview_datamodel_SequenceI$S$S,[seqs[i], seqStrings[i], seqs[j], seqStrings[j], type]);
if (as.s1str.length$() == 0 || as.s2str.length$() == 0 ) {
continue;
}as.calcScoreMatrix$();
as.traceAlignment$();
if (!first) {
System.out.println$S("---------------------\n");
this.textarea.append$S("---------------------\n");
}first=false;
as.printAlignment$java_io_PrintStream(System.out);
scores[i][j]=as.getMaxScore$() / as.getASeq1$().length;
totscore=totscore + scores[i][j];
this.textarea.append$S(as.getOutput$());
this.sequences.add$TE(as.getAlignedSeq1$());
this.sequences.add$TE(as.getAlignedSeq2$());
}
}
if (count > 2) {
this.printScoreMatrix$jalview_datamodel_SequenceIA$FAA$D(seqs, scores, totscore);
}}, 1);

Clazz.newMeth(C$, 'printScoreMatrix$jalview_datamodel_SequenceIA$FAA$D', function (seqs, scores, totscore) {
System.out.println$S("Pairwise alignment scaled similarity score matrix\n");
for (var i=0; i < seqs.length; i++) {
System.out.println$S(String.format$S$OA("%3d %s", [new Integer(i + 1), seqs[i].getDisplayId$Z(true)]));
}
System.out.print$S("\n ");
for (var i=0; i < seqs.length; i++) {
System.out.print$S(String.format$S$OA("%7d", [new Integer(i + 1)]));
}
System.out.println$();
for (var i=0; i < seqs.length; i++) {
System.out.print$S(String.format$S$OA("%3d", [new Integer(i + 1)]));
for (var j=0; j < i; j++) {
System.out.print$S(String.format$S$OA("%7.3f", [new Double(scores[i][j] / totscore)]));
}
System.out.println$();
}
System.out.println$S("\n");
});

Clazz.newMeth(C$, 'viewInEditorButton_actionPerformed$java_awt_event_ActionEvent', function (e) {
var seq=Clazz.array($I$(3), [this.sequences.size$()]);
for (var i=0; i < this.sequences.size$(); i++) {
seq[i]=this.sequences.elementAt$I(i);
}
var af=Clazz.new_($I$(4).c$$jalview_datamodel_AlignmentI$I$I,[Clazz.new_($I$(5).c$$jalview_datamodel_SequenceIA,[seq]), 700, 500]);
$I$(6).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, $I$(7).getString$S("label.pairwise_aligned_sequences"), 700, 500);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
