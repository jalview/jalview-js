(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),p$1={},I$=[[0,'jalview.util.MessageManager','jalview.datamodel.Annotation']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JabawsMsaInterfaceAlignCalcWorker", null, 'jalview.ws.jws2.AbstractJabaCalcWorker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['msaservice','compbio.data.msa.MsaWS','msascoreset','compbio.data.sequence.Alignment']]]

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel', function (alignViewport, alignPanel) {
;C$.superclazz.c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel.apply(this,[alignViewport, alignPanel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List', function (service, alignFrame, preset, paramset) {
C$.c$$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel.apply(this, [alignFrame.getCurrentView$(), alignFrame.alignPanel]);
this.guiProgress=alignFrame;
this.preset=preset;
this.$arguments=paramset;
this.service=service;
this.msaservice=service.service;
}, 1);

Clazz.newMeth(C$, 'pullExecStatistics$S$J', function (rslt, rpos) {
return this.msaservice.pullExecStatistics$S$J(rslt, rpos);
});

Clazz.newMeth(C$, 'collectAnnotationResultsFor$S', function (rslt) {
this.msascoreset=this.msaservice.getResult$S(rslt);
if (this.msascoreset != null ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'cancelJob$S', function (rslt) {
return this.msaservice.cancelJob$S(rslt);
});

Clazz.newMeth(C$, 'getJobStatus$S', function (rslt) {
return this.msaservice.getJobStatus$S(rslt);
});

Clazz.newMeth(C$, 'hasService$', function () {
return this.msaservice != null ;
});

Clazz.newMeth(C$, 'isInteractiveUpdate$', function () {
return false;
});

Clazz.newMeth(C$, 'submitToService$java_util_List', function (seqs) {
var rslt;
if (this.preset == null  && this.$arguments == null  ) {
rslt=this.msaservice.align$java_util_List(seqs);
} else {
try {
rslt=this.msaservice.customAlign$java_util_List$java_util_List(seqs, this.getJabaArguments$());
} catch (x) {
if (Clazz.exceptionOf(x,"compbio.metadata.WrongParameterException")){
throw Clazz.new_(Clazz.load('compbio.metadata.JobSubmissionException').c$$S$Throwable,[$I$(1).getString$S("exception.jobsubmission_invalid_params_set"), x]);
} else {
throw x;
}
}
}return rslt;
});

Clazz.newMeth(C$, 'createAnnotationRowsForScores$java_util_List$S$I$compbio_data_sequence_Score', function (ourAnnot, calcId, alWidth, scr) {
var annotation=this.alignViewport.getAlignment$().findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup(scr.getMethod$(), calcId, true, null, null);
if (alWidth == this.gapMap.length) {
p$1.constructAnnotationFromScore$jalview_datamodel_AlignmentAnnotation$I$I$compbio_data_sequence_Score.apply(this, [annotation, 0, alWidth, scr]);
ourAnnot.add$O(annotation);
}});

Clazz.newMeth(C$, 'createAnnotationRowsForScores$java_util_List$S$S$jalview_datamodel_SequenceI$I$compbio_data_sequence_Score', function (ourAnnot, typeName, calcId, dseq, base, scr) {
System.out.println$S("Creating annotation on dseq:" + dseq.getStart$() + " base is " + base + " and length=" + dseq.getLength$() + " == " + scr.getScores$().size$() );
var annotation=this.alignViewport.getAlignment$().findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup(typeName, calcId, false, dseq, null);
p$1.constructAnnotationFromScore$jalview_datamodel_AlignmentAnnotation$I$I$compbio_data_sequence_Score.apply(this, [annotation, 0, dseq.getLength$(), scr]);
annotation.createSequenceMapping$jalview_datamodel_SequenceI$I$Z(dseq, base, false);
annotation.adjustForAlignment$();
dseq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(annotation);
ourAnnot.add$O(annotation);
return annotation;
});

Clazz.newMeth(C$, 'constructAnnotationFromScore$jalview_datamodel_AlignmentAnnotation$I$I$compbio_data_sequence_Score', function (annotation, base, alWidth, scr) {
var elm=Clazz.array($I$(2), [alWidth]);
var vals=scr.getScores$().iterator$();
var m=0.0;
var x=0.0;
for (var i=0; vals.hasNext$(); i++) {
var val=vals.next$().floatValue$();
if (i == 0) {
m=val;
x=val;
} else {
if (m > val ) {
m=val;
};if (x < val ) {
x=val;
}}if (this.gapMap != null  && this.gapMap.length > 0 ) {
while (!this.gapMap[i]){
elm[i++]=Clazz.new_($I$(2,1).c$$S$S$C$F,["", "", " ", NaN]);
}
}elm[i]=Clazz.new_(["", "" + new Float(val).toString(), " ", val],$I$(2,1).c$$S$S$C$F);
}
annotation.annotations=elm;
annotation.belowAlignment=true;
if (x < 0 ) {
x=0;
}x += (x - m) * 0.1;
annotation.graphMax=x;
annotation.graphMin=m;
annotation.validateRangeAndDisplay$();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
