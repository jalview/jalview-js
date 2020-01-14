(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),p$1={},I$=[[0,'jalview.ws.uimodel.AlignAnalysisUIText','compbio.ws.client.Services','jalview.util.MessageManager','java.util.ArrayList',['compbio.data.sequence.RNAStructReader','.AlifoldResult'],'compbio.data.sequence.RNAStructReader','jalview.datamodel.Annotation','java.util.LinkedHashMap','java.text.MessageFormat','java.util.regex.Pattern']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RNAalifoldClient", null, 'jalview.ws.jws2.JabawsCalcWorker');
C$.CALC_ID=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.CALC_ID="jalview.ws.jws2.RNAalifoldClient";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.methodName=null;
this.af=null;
this.bpScores=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List', function (sh, alignFrame, preset, paramset) {
C$.superclazz.c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List.apply(this, [sh, alignFrame, preset, paramset]);
C$.$init$.apply(this);
this.af=alignFrame;
this.methodName=sh.serviceType;
this.alignedSeqs=true;
this.submitGaps=true;
this.nucleotidesAllowed=true;
this.proteinAllowed=false;
this.initViewportParams$();
}, 1);

Clazz.newMeth(C$, 'getCalcId$', function () {
return C$.CALC_ID;
});

Clazz.newMeth(C$, 'getAlignAnalysisUITest$', function () {
return Clazz.new_($I$(1).c$$S$Class$S$Z$Z$Z$S$S$S$S,[$I$(2).RNAalifoldWS.toString(), Clazz.getClass(C$), C$.CALC_ID, true, false, true, $I$(3).getString$S("label.rnalifold_calculations"), $I$(3).getString$S("tooltip.rnalifold_calculations"), $I$(3).getString$S("label.rnalifold_settings"), $I$(3).getString$S("tooltip.rnalifold_settings")]);
}, 1);

Clazz.newMeth(C$, 'getServiceActionText$', function () {
return "Submitting RNA alignment for Secondary Structure prediction using RNAalifold Service";
});

Clazz.newMeth(C$, 'checkValidInputSeqs$Z$java_util_List', function (dynamic, seqs) {
return (seqs.size$() > 1);
});

Clazz.newMeth(C$, 'updateResultAnnotation$Z', function (immediate) {
if (immediate || !this.calcMan.isWorking$jalview_api_AlignCalcWorkerI(this) && this.scoremanager != null   ) {
var ourAnnot=Clazz.new_($I$(4));
var structs=(this.scoremanager).getStructs$();
var data=(this.scoremanager).getData$();
var fscore=data.get$I(0).first$();
this.bpScores=(fscore.getMethod$().equals$O($I$(5).contactProbabilities.toString()));
this.createAnnotationRowforScoreHolder$java_util_List$S$S$java_util_TreeSet$java_util_TreeSet(ourAnnot, this.getCalcId$(), structs.get$I(0), null, null);
this.createAnnotationRowforScoreHolder$java_util_List$S$S$java_util_TreeSet$java_util_TreeSet(ourAnnot, this.getCalcId$(), structs.get$I(1), data.get$I(1), null);
var count=2;
if (this.bpScores) {
this.createAnnotationRowforScoreHolder$java_util_List$S$S$java_util_TreeSet$java_util_TreeSet(ourAnnot, this.getCalcId$(), structs.get$I(2), data.get$I(0), data.get$I(2));
count++;
}for (var i=count; i < structs.size$(); i++) {
if (!data.get$I(i).first$().getMethod$().equals$O($I$(5).ensembleValues.toString())) {
this.createAnnotationRowforScoreHolder$java_util_List$S$S$java_util_TreeSet$java_util_TreeSet(ourAnnot, this.getCalcId$(), structs.get$I(i), data.get$I(i), null);
}}
if (ourAnnot.size$() > 0) {
this.updateOurAnnots$java_util_List(ourAnnot);
this.ap.adjustAnnotationHeight$();
}}});

Clazz.newMeth(C$, 'createAnnotationRowforScoreHolder$java_util_List$S$S$java_util_TreeSet$java_util_TreeSet', function (ourAnnot, calcId, struct, data, descriptionData) {
if (data == null ) {
data=$I$(6).newEmptyScore$Enum($I$(5).consensusAlignment);
}if (descriptionData == null ) {
descriptionData=data;
}var typenameAndDescription=p$1.constructTypenameAndDescription$compbio_data_sequence_Score.apply(this, [descriptionData.first$()]);
var typename=typenameAndDescription[0];
var description=typenameAndDescription[1];
var annotation=this.alignViewport.getAlignment$().findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup(typename, calcId, false, null, null);
p$1.constructAnnotationFromScoreHolder$jalview_datamodel_AlignmentAnnotation$S$java_util_TreeSet.apply(this, [annotation, struct, data]);
annotation.description=description;
annotation.belowAlignment=false;
this.alignViewport.getAlignment$().validateAnnotation$jalview_datamodel_AlignmentAnnotation(annotation);
this.af.setMenusForViewport$();
ourAnnot.add$TE(annotation);
});

Clazz.newMeth(C$, 'constructAnnotationFromScoreHolder$jalview_datamodel_AlignmentAnnotation$S$java_util_TreeSet', function (annotation, struct, data) {
var anns=Clazz.array($I$(7), [this.gapMap != null  ? this.gapMap.length + 1 : struct.length$()]);
if (data != null  && data.size$() > 1  && data.first$().getMethod$().equals$O($I$(5).contactProbabilities.toString()) ) {
var basePairs=Clazz.new_($I$(8));
for (var score, $score = data.iterator$(); $score.hasNext$()&&((score=($score.next$())),1);) {
basePairs.put$TK$TV(score.getRanges$().first$(),  new Float((score.getScores$().get$I(0)).floatValue$()));
}
for (var i=0, ri=0, iEnd=struct.length$(); i < iEnd; i++, ri++) {
if (this.gapMap != null ) {
while (!this.gapMap[ri]){
ri++;
}
}var contacts=p$1.isContact$java_util_LinkedHashMap$I.apply(this, [basePairs, i + 1]);
var description="";
var prob=0.0;
if (contacts.size$() == 0) {
description="No Data";
} else {
for (var contact, $contact = contacts.keySet$().iterator$(); $contact.hasNext$()&&((contact=($contact.next$())),1);) {
var t=(contacts.get$O(contact)).floatValue$();
if (t > prob ) {
prob=t;
}description += Integer.toString$I(contact.from) + "->" + Integer.toString$I(contact.to) + ": " + Float.toString$F(t) + "%  |  " ;
}
}anns[ri]=Clazz.new_($I$(7).c$$S$S$C$F,[struct.substring$I$I(i, i + 1), description, p$1.isSS$C.apply(this, [struct.charAt$I(i)]), prob]);
}
} else if (data == null  || data.size$() == 1 ) {
for (var i=0, ri=0, iEnd=struct.length$(); i < iEnd; i++, ri++) {
if (this.gapMap != null ) {
while (!this.gapMap[ri] && ri < this.gapMap.length ){
ri++;
}
if (ri == this.gapMap.length) {
break;
}}anns[ri]=Clazz.new_($I$(7).c$$S$S$C$F,[struct.substring$I$I(i, i + 1), "", p$1.isSS$C.apply(this, [struct.charAt$I(i)]), NaN]);
}
annotation.graph=0;
}annotation.annotations=anns;
return annotation;
}, p$1);

Clazz.newMeth(C$, 'constructTypenameAndDescription$compbio_data_sequence_Score', function (score) {
var description="";
var typename="";
var datatype=score.getMethod$();
if (datatype.equals$O($I$(5).mfeStructure.toString())) {
description=$I$(9).format$S$OA("Minimum Free Energy Structure. Energy: {0} = {1} + {2}", [score.getScores$().get$I(0), score.getScores$().get$I(1), score.getScores$().get$I(2)]);
typename="MFE Structure";
} else if (datatype.equals$O($I$(5).contactProbabilityStructure.toString())) {
description=$I$(9).format$S$OA("Base Pair Contact Probabilities. Energy of Ensemble: {0}  Frequency of Ensemble: {1}", [score.getScores$().get$I(0), score.getScores$().get$I(1)]);
typename="Contact Probabilities";
} else if (datatype.equals$O($I$(5).centroidStructure.toString())) {
description=$I$(9).format$S$OA("Centroid Structure. Energy: {0} = {1} + {2}", [score.getScores$().get$I(0), score.getScores$().get$I(1), score.getScores$().get$I(2)]);
typename="Centroid Structure";
} else if (datatype.equals$O($I$(5).stochBTStructure.toString())) {
if (score.getScores$().size$() > 0) {
description=$I$(9).format$S$OA("Probability: {0}  Energy: {1}", [score.getScores$().get$I(0), score.getScores$().get$I(1)]);
} else {
description="Stochastic Backtrack Structure";
}} else if (datatype.equals$O($I$(5).MEAStucture.toString())) {
description=$I$(9).format$S$OA("Maximum Expected Accuracy Values: \'{\' {0} MEA={1} \'}", [score.getScores$().get$I(0), score.getScores$().get$I(1)]);
typename="MEA Structure";
} else if (datatype.equals$O($I$(5).consensusAlignment.toString())) {
typename="RNAalifold Consensus";
description="Consensus Alignment Produced by RNAalifold";
} else {
typename=datatype;
description=typename;
}return Clazz.array(String, -1, [typename, description]);
}, p$1);

Clazz.newMeth(C$, 'isContact$java_util_LinkedHashMap$I', function (basePairs, i) {
var contacts=Clazz.new_($I$(8));
for (var contact, $contact = basePairs.keySet$().iterator$(); $contact.hasNext$()&&((contact=($contact.next$())),1);) {
if (contact.from == i || contact.to == i ) {
contacts.put$TK$TV(contact, basePairs.get$O(contact));
}}
return contacts;
}, p$1);

Clazz.newMeth(C$, 'isSS$C', function (chr) {
var regex="\\(|\\)|\\{|\\}|\\[|\\]";
var ss=($I$(10).matches$S$CharSequence(regex, Character.toString$C(chr))) ? "S" : " ";
return ss;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
