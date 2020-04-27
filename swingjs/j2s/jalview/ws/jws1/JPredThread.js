(function(){var P$=Clazz.newPackage("jalview.ws.jws1"),p$1={},I$=[[0,'jalview.bin.Cache','jalview.io.JPredFile','jalview.io.DataSourceType','jalview.io.IdentifyFile','jalview.datamodel.Alignment','jalview.io.FormatAdapter','jalview.datamodel.SequenceI','jalview.analysis.SeqsetUtils','jalview.util.MessageManager','jalview.io.JnetAnnotationMaker','Error','jalview.commands.RemoveGapsCommand','jalview.datamodel.AlignmentAnnotation','StringBuffer','jalview.analysis.AlignSeq','jalview.util.Comparison','vamsas.objects.simple.Sequence','vamsas.objects.simple.Msfalignment','jalview.io.PileUpfile',['jalview.ws.jws1.JPredThread','.JPredJob'],'jalview.ws.jws1.WSJob','vamsas.objects.simple.JpredResult','jalview.ws.JobStateSummary','jalview.gui.WebserviceInfo','jalview.gui.AlignFrame','jalview.gui.Desktop']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPredThread", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.ws.jws1.JWS1Thread', 'jalview.ws.WSClientI');
C$.$classes$=[['JPredJob',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.altitle="";
},1);

C$.$fields$=[['S',['altitle'],'O',['server','ext.vamsas.Jpred']]]

Clazz.newMeth(C$, 'c$$jalview_gui_WebserviceInfo$S$ext_vamsas_Jpred$S$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame', function (wsinfo, altitle, server, wsurl, alview, alframe) {
;C$.superclazz.c$$jalview_gui_AlignFrame$jalview_gui_WebserviceInfo$jalview_datamodel_AlignmentView$S.apply(this,[alframe, wsinfo, alview, wsurl]);C$.$init$.apply(this);
this.altitle=altitle;
this.server=server;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_WebserviceInfo$S$ext_vamsas_Jpred$S$java_util_Hashtable$jalview_datamodel_SequenceI$IA$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame', function (wsinfo, altitle, server, wsurl, SequenceInfo, seq, delMap, alview, alframe) {
C$.c$$jalview_gui_WebserviceInfo$S$ext_vamsas_Jpred$S$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame.apply(this, [wsinfo, altitle, server, wsurl, alview, alframe]);
var job=Clazz.new_($I$(20,1).c$$java_util_Hashtable$jalview_datamodel_SequenceI$IA,[this, null, SequenceInfo, seq, delMap]);
if (job.hasValidInput$()) {
this.OutputHeader=this.wsInfo.getProgressText$();
this.jobs=Clazz.array($I$(21), -1, [job]);
job.setJobnum$I(0);
} else {
this.wsInfo.appendProgressText$S(job.getValidationMessages$());
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_WebserviceInfo$S$ext_vamsas_Jpred$java_util_Hashtable$jalview_datamodel_SequenceIA$IA$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame$S', function (wsinfo, altitle, server, SequenceInfo, msf, delMap, alview, alframe, wsurl) {
C$.c$$jalview_gui_WebserviceInfo$S$ext_vamsas_Jpred$S$jalview_datamodel_AlignmentView$jalview_gui_AlignFrame.apply(this, [wsinfo, altitle, server, wsurl, alview, alframe]);
var job=Clazz.new_($I$(20,1).c$$java_util_Hashtable$jalview_datamodel_SequenceIA$IA,[this, null, SequenceInfo, msf, delMap]);
if (job.hasValidInput$()) {
this.jobs=Clazz.array($I$(21), -1, [job]);
this.OutputHeader=this.wsInfo.getProgressText$();
job.setJobnum$I(0);
} else {
this.wsInfo.appendProgressText$S(job.getValidationMessages$());
}}, 1);

Clazz.newMeth(C$, 'StartJob$jalview_ws_AWsJob', function (j) {
if (!(Clazz.instanceOf(j, "jalview.ws.jws1.JPredThread.JPredJob"))) {
throw Clazz.new_([$I$(9,"formatMessage$S$SA",["error.implementation_error_startjob_called", Clazz.array(String, -1, [j.getClass$().toString()])])],$I$(11,1).c$$S);
}try {
var job=j;
if (job.msa != null ) {
job.setJobId$S(this.server.predictOnMsa$vamsas_objects_simple_Msfalignment(job.msa));
} else if (job.sequence != null ) {
job.setJobId$S(this.server.predict$vamsas_objects_simple_Sequence(job.sequence));
}if (job.getJobId$() != null ) {
if (job.getJobId$().startsWith$S("Broken")) {
job.result=Clazz.new_($I$(22,1));
job.result.setInvalid$Z(true);
job.result.setStatus$S($I$(9,"formatMessage$S$SA",["label.submission_params", Clazz.array(String, -1, [job.getJobId$().toString()])]));
throw Clazz.new_(Clazz.load('Exception').c$$S,[job.getJobId$()]);
} else {
job.setSubmitted$Z(true);
job.setSubjobComplete$Z(false);
$I$(1).log.info$O(this.WsUrl + " Job Id '" + job.getJobId$() + "'" );
}} else {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(9).getString$S("exception.server_timeout_try_later")]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.wsInfo.setStatus$I(5);
if (e.getMessage$().indexOf$S("Exception") > -1) {
this.wsInfo.setStatus$I$I(j.getJobnum$(), 5);
this.wsInfo.setProgressText$I$S(j.getJobnum$(), "Failed to submit the prediction. (Just close the window)\nIt is most likely that there is a problem with the server.\n");
System.err.println$S("JPredWS Client: Failed to submit the prediction. Quite possibly because of a server error - see below)\n" + e.getMessage$() + "\n" );
$I$(1).log.warn$O$Throwable("Server Exception", e);
} else {
this.wsInfo.setStatus$I$I(j.getJobnum$(), 4);
this.wsInfo.appendProgressText$I$S(j.getJobnum$(), $I$(9,"formatMessage$S$SA",["info.failed_to_submit_prediction", Clazz.array(String, -1, [e.getMessage$(), this.wsInfo.getProgressText$()])]));
$I$(1).log.debug$O$Throwable("Failed Submission of job " + j.getJobnum$(), e);
}j.setAllowedServerExceptions$I(-1);
j.setSubjobComplete$Z(true);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'parseResult$', function () {
var results=0;
var finalState=Clazz.new_($I$(23,1));
try {
for (var j=0; j < this.jobs.length; j++) {
finalState.updateJobPanelState$jalview_gui_WebserviceInfo$S$jalview_ws_AWsJob(this.wsInfo, this.OutputHeader, this.jobs[j]);
if (this.jobs[j].isSubmitted$() && this.jobs[j].isSubjobComplete$() && this.jobs[j].hasResults$()  ) {
results++;
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(1).log.error$O$Throwable("Unexpected exception when processing results for " + this.altitle, ex);
this.wsInfo.setStatus$I(4);
} else {
throw ex;
}
}
if (results > 0) {
this.wsInfo.showResultsNewFrame.addActionListener$java_awt_event_ActionListener(((P$.JPredThread$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JPredThread$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['jalview.ws.jws1.JPredThread'].displayResults$Z.apply(this.b$['jalview.ws.jws1.JPredThread'], [true]);
});
})()
), Clazz.new_(P$.JPredThread$1.$init$,[this, null])));
this.wsInfo.mergeResults.addActionListener$java_awt_event_ActionListener(((P$.JPredThread$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JPredThread$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['jalview.ws.jws1.JPredThread'].displayResults$Z.apply(this.b$['jalview.ws.jws1.JPredThread'], [false]);
});
})()
), Clazz.new_(P$.JPredThread$2.$init$,[this, null])));
this.wsInfo.setResultsReady$();
} else {
this.wsInfo.setStatus$I($I$(24).STATE_STOPPED_ERROR);
this.wsInfo.appendInfoText$S("No jobs ran.");
this.wsInfo.setFinishedNoResults$();
}});

Clazz.newMeth(C$, 'displayResults$Z', function (newWindow) {
if (this.jobs != null ) {
var res=null;
var msa=false;
for (var jn=0; jn < this.jobs.length; jn++) {
var jobres=null;
var j=this.jobs[jn];
if (j.hasResults$()) {
msa=(j.msa != null ) ? true : msa;
try {
$I$(1).log.debug$O("Parsing output of job " + jn);
jobres=j.getResultSet$();
$I$(1).log.debug$O("Finished parsing output.");
if (this.jobs.length == 1) {
res=jobres;
} else {
throw Clazz.new_([$I$(9).getString$S("error.multiple_jnet_subjob_merge_not_implemented")],$I$(11,1).c$$S);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1).log.error$O$Throwable("JNet Client: JPred Annotation Parse Error", e);
this.wsInfo.setStatus$I$I(j.getJobnum$(), 4);
this.wsInfo.appendProgressText$I$S(j.getJobnum$(), $I$(9,"formatMessage$S$SA",["info.invalid_jnet_job_result_data", Clazz.array(String, -1, [this.OutputHeader.toString(), j.result.getStatus$(), e.getMessage$()])]));
j.result.setBroken$Z(true);
} else {
throw e;
}
}
}}
if (res != null ) {
if (newWindow) {
var af;
(res[0]).setSeqrep$jalview_datamodel_SequenceI((res[0]).getSequenceAt$I(0));
if (this.input == null ) {
if (res[1] != null ) {
af=Clazz.new_($I$(25,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I,[res[0], res[1], 700, 500]);
} else {
af=Clazz.new_($I$(25,1).c$$jalview_datamodel_AlignmentI$I$I,[res[0], 700, 500]);
}} else {
af=Clazz.new_($I$(25,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I,[res[0], res[1], 700, 500]);
}$I$(26).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, this.altitle, 700, 500);
} else {
$I$(1).log.info$O("Append results onto existing alignment.");
}}}});

Clazz.newMeth(C$, 'pollJob$jalview_ws_AWsJob', function (job) {
(job).result=this.server.getresult$S(job.getJobId$());
});

Clazz.newMeth(C$, 'isCancellable$', function () {
return false;
});

Clazz.newMeth(C$, 'cancelJob$', function () {
throw Clazz.new_([$I$(9).getString$S("error.implementation_error")],$I$(11,1).c$$S);
});

Clazz.newMeth(C$, 'canMergeResults$', function () {
return false;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPredThread, "JPredJob", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'jalview.ws.jws1.WSJob');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.predMap=null;
this.SequenceInfo=null;
this.msaIndex=0;
this.errorMessage="";
},1);

C$.$fields$=[['I',['msaIndex'],'S',['errorMessage'],'O',['predMap','int[]','sequence','vamsas.objects.simple.Sequence','msa','vamsas.objects.simple.Msfalignment','SequenceInfo','java.util.Hashtable']]]

Clazz.newMeth(C$, 'hasResults$', function () {
if (this.subjobComplete && this.result != null   && this.result.isFinished$()  && (this.result).getPredfile$() != null   && (this.result).getAligfile$() != null  ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'hasValidInput$', function () {
if (this.sequence != null ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getResultSet$', function () {
if (this.result == null  || !this.result.isFinished$() ) {
return null;
}var al=null;
var alhidden=null;
var FirstSeq=-1;
var result=this.result;
$I$(1).log.debug$O("Parsing output from JNet job.");
var prediction=Clazz.new_([result.getPredfile$(), $I$(3).PASTE],$I$(2,1).c$$O$jalview_io_DataSourceType);
var preds=prediction.getSeqsAsArray$();
$I$(1).log.debug$O("Got prediction profile.");
if ((this.msa != null ) && (result.getAligfile$() != null ) ) {
$I$(1).log.debug$O("Getting associated alignment.");
var format=Clazz.new_($I$(4,1)).identify$S$jalview_io_DataSourceType(result.getAligfile$(), $I$(3).PASTE);
if (format != null ) {
var sqs;
if (this.predMap != null ) {
var alandcolsel=this.this$0.input.getAlignmentAndHiddenColumns$C(this.b$['jalview.ws.AWSThread'].getGapChar$.apply(this.b$['jalview.ws.AWSThread'], []));
sqs=alandcolsel[0];
al=Clazz.new_($I$(5,1).c$$jalview_datamodel_SequenceIA,[sqs]);
alhidden=alandcolsel[1];
} else {
al=Clazz.new_($I$(6,1)).readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(result.getAligfile$(), $I$(3).PASTE, format);
sqs=Clazz.array($I$(7), [al.getHeight$()]);
for (var i=0, j=al.getHeight$(); i < j; i++) {
sqs[i]=al.getSequenceAt$I(i);
}
if (!$I$(8).deuniquify$java_util_Hashtable$jalview_datamodel_SequenceIA(this.SequenceInfo, sqs)) {
throw (Clazz.new_(Clazz.load('Exception').c$$S,[$I$(9).getString$S("exception.couldnt_recover_sequence_properties_for_alignment")]));
}}FirstSeq=0;
if (this.this$0.currentView.getDataset$() != null ) {
al.setDataset$jalview_datamodel_AlignmentI(this.this$0.currentView.getDataset$());
} else {
al.setDataset$jalview_datamodel_AlignmentI(null);
}$I$(10).add_annotation$jalview_io_JPredFile$jalview_datamodel_AlignmentI$I$Z$IA(prediction, al, FirstSeq, false, this.predMap);
} else {
throw (Clazz.new_(Clazz.load('Exception').c$$S,[$I$(9,"formatMessage$S$SA",["exception.unknown_format_for_file", Clazz.array(String, -1, ["", result.getAligfile$()])])]));
}} else {
al=Clazz.new_($I$(5,1).c$$jalview_datamodel_SequenceIA,[preds]);
FirstSeq=prediction.getQuerySeqPosition$();
if (this.predMap != null ) {
var gc=this.b$['jalview.ws.AWSThread'].getGapChar$.apply(this.b$['jalview.ws.AWSThread'], []);
var sqs=this.this$0.input.getAlignmentAndHiddenColumns$C(gc)[0];
if (this.msaIndex >= sqs.length) {
throw Clazz.new_([$I$(9).getString$S("error.implementation_error_invalid_msa_index_for_job")],$I$(11,1).c$$S);
}Clazz.new_([$I$(9).getString$S("label.remove_gaps"), Clazz.array($I$(7), -1, [sqs[this.msaIndex]]), this.this$0.currentView],$I$(12,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI);
var profileseq=al.getSequenceAt$I(FirstSeq);
profileseq.setSequence$S(sqs[this.msaIndex].getSequenceAsString$());
}if (!$I$(8,"SeqCharacterUnhash$jalview_datamodel_SequenceI$java_util_Hashtable",[al.getSequenceAt$I(FirstSeq), this.SequenceInfo])) {
throw (Clazz.new_(Clazz.load('Exception').c$$S,[$I$(9).getString$S("exception.couldnt_recover_sequence_props_for_jnet_query")]));
} else {
if (this.this$0.currentView.getDataset$() != null ) {
al.setDataset$jalview_datamodel_AlignmentI(this.this$0.currentView.getDataset$());
} else {
al.setDataset$jalview_datamodel_AlignmentI(null);
}$I$(10).add_annotation$jalview_io_JPredFile$jalview_datamodel_AlignmentI$I$Z$IA(prediction, al, FirstSeq, true, this.predMap);
var profileseq=al.getSequenceAt$I(0);
p$1.alignToProfileSeq$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI.apply(this, [al, profileseq]);
if (this.predMap != null ) {
alhidden=al.propagateInsertions$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentView(profileseq, this.this$0.input);
}}}for (var alant, $alant = 0, $$alant = al.getAlignmentAnnotation$(); $alant<$$alant.length&&((alant=($$alant[$alant])),1);$alant++) {
if (alant.sequenceRef != null ) {
this.replaceAnnotationOnAlignmentWith$jalview_datamodel_AlignmentAnnotation$S$S$jalview_datamodel_SequenceI(alant, alant.label, "jalview.jws1.Jpred" + (this.msa == null  ? "" : "MSA"), alant.sequenceRef);
}}
return Clazz.array(java.lang.Object, -1, [al, alhidden]);
});

Clazz.newMeth(C$, 'replaceAnnotationOnAlignmentWith$jalview_datamodel_AlignmentAnnotation$S$S$jalview_datamodel_SequenceI', function (newAnnot, typeName, calcId, aSeq) {
var dsseq=aSeq.getDatasetSequence$();
while (dsseq.getDatasetSequence$() != null ){
dsseq=dsseq.getDatasetSequence$();
}
var dsan=dsseq.getAlignmentAnnotations$S$S(calcId, typeName);
if (dsan != null  && dsan.size$() > 0 ) {
for (var dssan, $dssan = dsan.iterator$(); $dssan.hasNext$()&&((dssan=($dssan.next$())),1);) {
dsseq.removeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(dssan);
}
}var dssan=Clazz.new_($I$(13,1).c$$jalview_datamodel_AlignmentAnnotation,[newAnnot]);
dsseq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(dssan);
dssan.adjustForAlignment$();
});

Clazz.newMeth(C$, 'alignToProfileSeq$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI', function (al, profileseq) {
var gc=al.getGapCharacter$();
var gapMap=profileseq.gapMap$();
for (var lp=0, r=0; r < gapMap.length; r++) {
if (gapMap[r] - lp > 1) {
var sb=Clazz.new_($I$(14,1));
for (var s=0, ns=gapMap[r] - lp; s < ns; s++) {
sb.append$C(gc);
}
for (var s=1, ns=al.getHeight$(); s < ns; s++) {
var sq=al.getSequenceAt$I(s).getSequenceAsString$();
var diff=gapMap[r] - sq.length$();
if (diff > 0) {
sq=sq + sb;
while ((diff=gapMap[r] - sq.length$()) > 0){
sq=sq + ((diff >= sb.length$()) ? sb.toString() : sb.substring$I$I(0, diff));
}
al.getSequenceAt$I(s).setSequence$S(sq);
} else {
al.getSequenceAt$I(s).setSequence$S(sq.substring$I$I(0, gapMap[r]) + sb.toString() + sq.substring$I(gapMap[r]) );
}}
}lp=gapMap[r];
}
}, p$1);

Clazz.newMeth(C$, 'c$$java_util_Hashtable$jalview_datamodel_SequenceI$IA', function (SequenceInfo, seq, delMap) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.predMap=delMap;
var sq=$I$(15,"extractGaps$S$S",[$I$(16).GapChars, seq.getSequenceAsString$()]);
if (sq.length$() >= 20) {
this.SequenceInfo=SequenceInfo;
this.sequence=Clazz.new_($I$(17,1));
this.sequence.setId$S(seq.getName$());
this.sequence.setSeq$S(sq);
} else {
this.errorMessage="Sequence is too short to predict with JPred - need at least 20 amino acids.";
}}, 1);

Clazz.newMeth(C$, 'c$$java_util_Hashtable$jalview_datamodel_SequenceIA$IA', function (SequenceInfo, msf, delMap) {
C$.c$$java_util_Hashtable$jalview_datamodel_SequenceI$IA.apply(this, [SequenceInfo, msf[0], delMap]);
if (this.sequence != null ) {
if (msf.length > 1) {
this.msa=Clazz.new_($I$(18,1));
var pileup=Clazz.new_($I$(19,1));
this.msa.setMsf$S(pileup.print$jalview_datamodel_SequenceIA$Z(msf, true));
}}}, 1);

Clazz.newMeth(C$, 'getValidationMessages$', function () {
return this.errorMessage + "\n";
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
