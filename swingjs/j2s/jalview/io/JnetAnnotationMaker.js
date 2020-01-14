(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.util.MessageManager','jalview.datamodel.Annotation','jalview.datamodel.AlignmentAnnotation']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JnetAnnotationMaker");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'add_annotation$jalview_io_JPredFile$jalview_datamodel_AlignmentI$I$Z', function (prediction, al, firstSeq, noMsa) {
C$.add_annotation$jalview_io_JPredFile$jalview_datamodel_AlignmentI$I$Z$IA(prediction, al, firstSeq, noMsa, null);
}, 1);

Clazz.newMeth(C$, 'add_annotation$jalview_io_JPredFile$jalview_datamodel_AlignmentI$I$Z$IA', function (prediction, al, firstSeq, noMsa, delMap) {
var i=0;
var preds=prediction.getSeqsAsArray$();
var seqRef=al.getSequenceAt$I(firstSeq);
var width=preds[0].getLength$();
var gapmap=al.getSequenceAt$I(firstSeq).gapMap$();
if ((delMap != null  && delMap.length > width ) || (delMap == null  && gapmap.length != width ) ) {
throw (Clazz.new_(Clazz.load('Exception').c$$S,[$I$(1).formatMessage$S$SA("exception.number_of_residues_in_query_sequence_differ_from_prediction", Clazz.array(String, -1, [(delMap == null  ? "" : $I$(1).getString$S("label.mapped")), al.getSequenceAt$I(firstSeq).getName$(), al.getSequenceAt$I(firstSeq).getSequenceAsString$(), Integer.valueOf$I(width).toString()]))]));
}var annot;
var annotations=null;
var existingAnnotations=0;
if (al.getAlignmentAnnotation$() != null ) {
existingAnnotations=al.getAlignmentAnnotation$().length;
}var sol=Clazz.array($I$(2), [al.getWidth$()]);
var firstsol=true;
while (i < preds.length){
var id=preds[i].getName$().toUpperCase$();
if (id.startsWith$S("LUPAS") || id.startsWith$S("JNET") || id.startsWith$S("JPRED")  ) {
if (id.startsWith$S("JNETSOL")) {
var amnt=(id.endsWith$S("25") ? 3.0 : id.endsWith$S("5") ? 6.0 : 9.0);
for (var spos=0; spos < width; spos++) {
var sposw=(delMap == null ) ? gapmap[spos] : gapmap[delMap[spos]];
if (firstsol) {
sol[sposw]=Clazz.new_($I$(2).c$$F,[0.0]);
}if (preds[i].getCharAt$I(spos) == "B" && (sol[sposw].value == 0.0  || sol[sposw].value < amnt  ) ) {
sol[sposw].value=amnt;
}}
firstsol=false;
} else {
annotations=Clazz.array($I$(2), [al.getWidth$()]);
if (id.equals$O("JNETPRED") || id.equals$O("JNETPSSM") || id.equals$O("JNETFREQ") || id.equals$O("JNETHMM") || id.equals$O("JNETALIGN") || id.equals$O("JPRED")  ) {
if (delMap == null ) {
for (var j=0; j < width; j++) {
annotations[gapmap[j]]=Clazz.new_($I$(2).c$$S$S$C$F,["", "", preds[i].getCharAt$I(j), 0]);
}
} else {
for (var j=0; j < width; j++) {
annotations[gapmap[delMap[j]]]=Clazz.new_($I$(2).c$$S$S$C$F,["", "", preds[i].getCharAt$I(j), 0]);
}
}} else if (id.equals$O("JNETCONF")) {
if (delMap == null ) {
for (var j=0; j < width; j++) {
var value= new Float(preds[i].getCharAt$I(j) + "").floatValue$();
annotations[gapmap[j]]=Clazz.new_($I$(2).c$$S$S$C$F,[preds[i].getCharAt$I(j) + "", "", preds[i].getCharAt$I(j), value]);
}
} else {
for (var j=0; j < width; j++) {
var value= new Float(preds[i].getCharAt$I(j) + "").floatValue$();
annotations[gapmap[delMap[j]]]=Clazz.new_($I$(2).c$$S$S$C$F,[preds[i].getCharAt$I(j) + "", "", preds[i].getCharAt$I(j), value]);
}
}} else {
if (delMap == null ) {
for (var j=0; j < width; j++) {
annotations[gapmap[j]]=Clazz.new_($I$(2).c$$S$S$C$F,[preds[i].getCharAt$I(j) + "", "", " ", 0]);
}
} else {
for (var j=0; j < width; j++) {
annotations[gapmap[delMap[j]]]=Clazz.new_($I$(2).c$$S$S$C$F,[preds[i].getCharAt$I(j) + "", "", " ", 0]);
}
}}if (id.equals$O("JNETCONF")) {
annot=Clazz.new_($I$(3).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,[preds[i].getName$(), "JPred Output", annotations, 0.0, 10.0, 1]);
} else {
annot=Clazz.new_($I$(3).c$$S$S$jalview_datamodel_AnnotationA,[preds[i].getName$(), "JPred Output", annotations]);
}if (seqRef != null ) {
annot.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(seqRef, 1, true);
seqRef.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(annot);
}al.addAnnotation$jalview_datamodel_AlignmentAnnotation(annot);
al.setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I(annot, al.getAlignmentAnnotation$().length - existingAnnotations - 1 );
}if (noMsa) {
al.deleteSequence$jalview_datamodel_SequenceI(preds[i]);
}}i++;
}
if (!firstsol) {
annot=Clazz.new_($I$(3).c$$S$S$jalview_datamodel_AnnotationA$F$F$I,["Jnet Burial", "<html>Prediction of Solvent Accessibility<br/>levels are<ul><li>0 - Exposed</li><li>3 - 25% or more S.A. accessible</li><li>6 - 5% or more S.A. accessible</li><li>9 - Buried (<5% exposed)</li></ul>", sol, 0.0, 9.0, 1]);
annot.validateRangeAndDisplay$();
if (seqRef != null ) {
annot.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(seqRef, 1, true);
seqRef.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(annot);
}al.addAnnotation$jalview_datamodel_AlignmentAnnotation(annot);
al.setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I(annot, al.getAlignmentAnnotation$().length - existingAnnotations - 1 );
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
