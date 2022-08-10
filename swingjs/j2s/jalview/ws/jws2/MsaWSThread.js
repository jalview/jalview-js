(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Hashtable','java.util.Vector','StringBuffer','Error','jalview.util.MessageManager','jalview.analysis.SeqsetUtils','compbio.data.sequence.FastaSequence','jalview.analysis.AlignSeq','jalview.util.Comparison','jalview.datamodel.SequenceI','jalview.datamodel.Sequence','jalview.datamodel.AlignmentOrder','jalview.analysis.AlignmentSorter',['jalview.ws.jws2.MsaWSThread','.MsaWSJob'],'jalview.bin.Console','Thread','compbio.metadata.JobStatus','jalview.ws.JobStateSummary','jalview.datamodel.Alignment','jalview.gui.AlignFrame','jalview.gui.SplitFrame','jalview.gui.Desktop']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MsaWSThread", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.ws.jws2.AWS2Thread', 'jalview.ws.WSClientI');
C$.$classes$=[['MsaWSJob',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.submitGaps=false;
this.preserveOrder=true;
this.server=null;
this.validInput=false;
},1);

C$.$fields$=[['Z',['submitGaps','preserveOrder','validInput'],'S',['alTitle'],'O',['dataset','jalview.datamodel.AlignmentI','server','compbio.data.msa.MsaWS']]]

Clazz.newMeth(C$, 'c$$compbio_data_msa_MsaWS$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$jalview_datamodel_AlignmentView$S$Z$Z',  function (server, wsUrl, wsinfo, alFrame, alview, wsname, subgaps, presorder) {
;C$.superclazz.c$$jalview_gui_AlignFrame$jalview_gui_WebserviceInfo$jalview_datamodel_AlignmentView$S$S.apply(this,[alFrame, wsinfo, alview, wsname, wsUrl]);C$.$init$.apply(this);
this.server=server;
this.submitGaps=subgaps;
this.preserveOrder=presorder;
}, 1);

Clazz.newMeth(C$, 'c$$compbio_data_msa_MsaWS$jalview_ws_params_WsParamSetI$java_util_List$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$S$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI',  function (server2, preset, paramset, wsUrl, wsinfo, alFrame, wsname, title, _msa, subgaps, presorder, seqset) {
C$.c$$compbio_data_msa_MsaWS$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$jalview_datamodel_AlignmentView$S$Z$Z.apply(this, [server2, wsUrl, wsinfo, alFrame, _msa, wsname, subgaps, presorder]);
this.OutputHeader=this.wsInfo.getProgressText$();
this.alTitle=title;
this.dataset=seqset;
var conmsa=_msa.getVisibleContigs$C("-");
if (conmsa != null ) {
var nvalid=0;
var njobs=conmsa.length;
this.jobs=Clazz.array($I$(15), [njobs]);
for (var j=0; j < njobs; j++) {
if (j != 0) {
this.jobs[j]=Clazz.new_([this, null, wsinfo.addJobPane$(), conmsa[j]],$I$(15,1).c$$I$jalview_datamodel_SequenceIA);
} else {
this.jobs[j]=Clazz.new_($I$(15,1).c$$I$jalview_datamodel_SequenceIA,[this, null, 0, conmsa[j]]);
}if ((this.jobs[j]).hasValidInput$()) {
++nvalid;
}(this.jobs[j]).preset=preset;
(this.jobs[j]).$arguments=paramset;
(this.jobs[j]).alignmentProgram=wsname;
if (njobs > 0) {
wsinfo.setProgressName$S$I("region " + this.jobs[j].getJobnum$(), this.jobs[j].getJobnum$());
}wsinfo.setProgressText$I$S(this.jobs[j].getJobnum$(), this.OutputHeader);
}
this.validInput=nvalid > 0;
}}, 1);

Clazz.newMeth(C$, 'hasValidInput$',  function () {
return this.validInput;
});

Clazz.newMeth(C$, 'isCancellable$',  function () {
return true;
});

Clazz.newMeth(C$, 'cancelJob$',  function () {
if (!this.jobComplete && this.jobs != null  ) {
var cancelled=true;
for (var job=0; job < this.jobs.length; job++) {
if (this.jobs[job].isSubmitted$() && !this.jobs[job].isSubjobComplete$() ) {
var cancelledMessage="";
try {
var cancelledJob=this.server.cancelJob$S(this.jobs[job].getJobId$());
if (true) {
cancelledMessage="Job cancelled.";
(this.jobs[job]).cancel$();
this.wsInfo.setStatus$I$I(this.jobs[job].getJobnum$(), 3);
} else {
cancelledMessage+="Server cannot cancel this job. just close the window.\n";
cancelled=false;
}} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
cancelledMessage+=("\nProblems cancelling the job : Exception received...\n" + exc + "\n" );
$I$(16,"warn$S$Throwable",["Exception whilst cancelling " + this.jobs[job].getJobId$(), exc]);
} else {
throw exc;
}
}
this.wsInfo.setProgressText$I$S(this.jobs[job].getJobnum$(), this.OutputHeader + cancelledMessage + "\n" );
} else {
this.jobs[job].setSubjobComplete$Z(true);
this.wsInfo.setStatus$I$I(this.jobs[job].getJobnum$(), 3);
}}
if (cancelled) {
this.wsInfo.setStatus$I(3);
this.jobComplete=true;
}this.interrupt$();
} else {
if (!this.jobComplete) {
this.wsInfo.setProgressText$S(this.OutputHeader + "Server cannot cancel this job because it has not been submitted properly. just close the window.\n");
}}});

Clazz.newMeth(C$, 'pollJob$jalview_ws_AWsJob',  function (job) {
var j=(job);
j.setjobStatus$compbio_metadata_JobStatus(this.server.getJobStatus$S(job.getJobId$()));
this.updateJobProgress$jalview_ws_jws2_MsaWSThread_MsaWSJob(j);
});

Clazz.newMeth(C$, 'updateJobProgress$jalview_ws_jws2_MsaWSThread_MsaWSJob',  function (j) {
var response=j.jobProgress;
var lastchunk=j.getLastChunk$();
var changed=false;
do {
j.setLastChunk$J(lastchunk);
var chunk=this.server.pullExecStatistics$S$J(j.getJobId$(), lastchunk);
if (chunk != null ) {
changed=!!(changed|(chunk.getChunk$().length$() > 0));
response.append$S(chunk.getChunk$());
lastchunk=chunk.getNextPosition$();
try {
$I$(17).sleep$J(50);
} catch (x) {
if (Clazz.exceptionOf(x,"InterruptedException")){
} else {
throw x;
}
}
;};} while (Long.$ge(lastchunk,0 ) && Long.$ne(j.getLastChunk$(),lastchunk ) );
return changed;
});

Clazz.newMeth(C$, 'StartJob$jalview_ws_AWsJob',  function (job) {
var lex=null;
if (!(Clazz.instanceOf(job, "jalview.ws.jws2.MsaWSThread.MsaWSJob"))) {
throw Clazz.new_([$I$(6,"formatMessage$S$SA",["error.implementation_error_msawbjob_called", Clazz.array(String, -1, [job.getClass$().toString()])])],$I$(5,1).c$$S);
}var j=job;
if (j.isSubmitted$()) {
if ($I$(16).isDebugEnabled$()) {
$I$(16,"debug$S",["Tried to submit an already submitted job " + j.getJobId$()]);
}return;
}if (j.seqs == null  || j.seqs.size$() == 0 ) {
j.setjobStatus$compbio_metadata_JobStatus($I$(18).FINISHED);
j.setStatus$S($I$(6).getString$S("label.empty_alignment_job"));
}try {
j.addInitialStatus$();
if (j.isPresetJob$()) {
j.setJobId$S(this.server.presetAlign$java_util_List$compbio_metadata_Preset(j.seqs, j.getServerPreset$()));
} else if (j.hasArguments$()) {
j.setJobId$S(this.server.customAlign$java_util_List$java_util_List(j.seqs, j.getJabaArguments$()));
} else {
j.setJobId$S(this.server.align$java_util_List(j.seqs));
}if (j.getJobId$() != null ) {
j.setSubmitted$Z(true);
j.setSubjobComplete$Z(false);
return;
} else {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(6,"formatMessage$S$SA",["exception.web_service_returned_null_try_later", Clazz.array(String, -1, [this.WsUrl])])]);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"compbio.metadata.UnsupportedRuntimeException")){
var _lex = e$$;
{
lex=_lex;
this.wsInfo.appendProgressText$S($I$(6,"formatMessage$S$SA",["info.job_couldnt_be_run_server_doesnt_support_program", Clazz.array(String, -1, [_lex.getMessage$()])]));
this.wsInfo.warnUser$S$S(_lex.getMessage$(), $I$(6).getString$S("warn.service_not_supported"));
this.wsInfo.setStatus$I(5);
this.wsInfo.setStatus$I$I(j.getJobnum$(), 5);
}
} else if (Clazz.exceptionOf(e$$,"compbio.metadata.LimitExceededException")){
var _lex = e$$;
{
lex=_lex;
this.wsInfo.appendProgressText$S($I$(6,"formatMessage$S$SA",["info.job_couldnt_be_run_exceeded_hard_limit", Clazz.array(String, -1, [_lex.getMessage$()])]));
this.wsInfo.warnUser$S$S(_lex.getMessage$(), $I$(6).getString$S("warn.input_is_too_big"));
this.wsInfo.setStatus$I(4);
this.wsInfo.setStatus$I$I(j.getJobnum$(), 4);
}
} else if (Clazz.exceptionOf(e$$,"compbio.metadata.WrongParameterException")){
var _lex = e$$;
{
lex=_lex;
this.wsInfo.warnUser$S$S(_lex.getMessage$(), $I$(6).getString$S("warn.invalid_job_param_set"));
this.wsInfo.appendProgressText$S($I$(6,"formatMessage$S$SA",["info.job_couldnt_be_run_incorrect_param_setting", Clazz.array(String, -1, [_lex.getMessage$()])]));
this.wsInfo.setStatus$I(4);
this.wsInfo.setStatus$I$I(j.getJobnum$(), 4);
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
System.err.println$S(this.WebServiceName + "Client: Failed to submit the sequences for alignment (probably a server side problem)\n" + "When contacting Server:" + this.WsUrl + "\n" );
e.printStackTrace$java_io_PrintStream(System.err);
this.wsInfo.setStatus$I(5);
this.wsInfo.setStatus$I$I(j.getJobnum$(), 5);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
System.err.println$S(this.WebServiceName + "Client: Failed to submit the sequences for alignment (probably a server side problem)\n" + "When contacting Server:" + this.WsUrl + "\n" );
e.printStackTrace$java_io_PrintStream(System.err);
this.wsInfo.setStatus$I(5);
this.wsInfo.setStatus$I$I(j.getJobnum$(), 5);
}
} else {
throw e$$;
}
} finally {
if (!j.isSubmitted$()) {
j.setAllowedServerExceptions$I(0);
this.wsInfo.appendProgressText$I$S(j.getJobnum$(), $I$(6).getString$S("info.failed_to_submit_sequences_for_alignment"));
}}
});

Clazz.newMeth(C$, 'parseResult$',  function () {
var progbar=System.currentTimeMillis$();
this.wsInfo.setProgressBar$S$J($I$(6).getString$S("status.collecting_job_results"), progbar);
var results=0;
var finalState=Clazz.new_($I$(19,1));
try {
for (var j=0; j < this.jobs.length; j++) {
var msjob=(this.jobs[j]);
if (this.jobs[j].isFinished$() && msjob.alignment == null  ) {
var nunchanged=3;
var nexcept=3;
var jpchanged=false;
var jpex=false;
do {
try {
jpchanged=this.updateJobProgress$jalview_ws_jws2_MsaWSThread_MsaWSJob(msjob);
jpex=false;
if (jpchanged) {
nexcept=3;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(16,"warn$S",["Exception when retrieving remaining Job progress data for job " + msjob.getJobId$() + " on server " + this.WsUrl ]);
e.printStackTrace$();
--nexcept;
nunchanged=3;
jpex=true;
jpchanged=false;
} else {
throw e;
}
}
if (!jpchanged) {
try {
$I$(17).sleep$J(jpex ? 2400 : 1200);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
;--nunchanged;
}} while (nunchanged > 0 && nexcept > 0 );
if ($I$(16).isDebugEnabled$()) {
System.out.println$S("Job Execution file for job: " + msjob.getJobId$() + " on server " + this.WsUrl );
System.out.println$S(msjob.getStatus$());
System.out.println$S("*** End of status");
}try {
msjob.alignment=this.server.getResult$S(msjob.getJobId$());
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"compbio.metadata.ResultNotAvailableException")){
var e = e$$;
{
$I$(16).debug$S$Throwable("Results not available for finished job - marking as broken job.", e);
msjob.jobProgress.append$S("\nResult not available. Probably due to invalid input or parameter settings. Server error message below:\n\n" + e.getLocalizedMessage$());
msjob.setjobStatus$compbio_metadata_JobStatus($I$(18).FAILED);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
$I$(16).error$S$Throwable("Couldn\'t get Alignment for job.", e);
msjob.setjobStatus$compbio_metadata_JobStatus($I$(18).UNDEFINED);
}
} else {
throw e$$;
}
}
}finalState.updateJobPanelState$jalview_gui_WebserviceInfo$S$jalview_ws_AWsJob(this.wsInfo, this.OutputHeader, this.jobs[j]);
if (this.jobs[j].isSubmitted$() && this.jobs[j].isSubjobComplete$() && this.jobs[j].hasResults$()  ) {
++results;
var alignment=(this.jobs[j]).alignment;
if (alignment != null ) {
}}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(16).error$S$Throwable("Unexpected exception when processing results for " + this.alTitle, ex);
this.wsInfo.setStatus$I(4);
} else {
throw ex;
}
}
if (results > 0) {
this.wsInfo.showResultsNewFrame.addActionListener$java_awt_event_ActionListener(((P$.MsaWSThread$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MsaWSThread$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['jalview.ws.jws2.MsaWSThread'].displayResults$Z.apply(this.b$['jalview.ws.jws2.MsaWSThread'], [true]);
});
})()
), Clazz.new_(P$.MsaWSThread$1.$init$,[this, null])));
this.wsInfo.mergeResults.addActionListener$java_awt_event_ActionListener(((P$.MsaWSThread$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MsaWSThread$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['jalview.ws.jws2.MsaWSThread'].displayResults$Z.apply(this.b$['jalview.ws.jws2.MsaWSThread'], [false]);
});
})()
), Clazz.new_(P$.MsaWSThread$2.$init$,[this, null])));
this.wsInfo.setResultsReady$();
} else {
this.wsInfo.setFinishedNoResults$();
}this.updateGlobalStatus$jalview_ws_JobStateSummary(finalState);
this.wsInfo.setProgressBar$S$J(null, progbar);
});

Clazz.newMeth(C$, 'displayResults$Z',  function (newFrame) {
var alorders=Clazz.new_($I$(1,1));
var results=Clazz.array($I$(11), [this.jobs.length, null]);
var orders=Clazz.array($I$(13), [this.jobs.length]);
var lastProgram=null;
var msjob;
for (var j=0; j < this.jobs.length; j++) {
if (this.jobs[j].hasResults$()) {
msjob=this.jobs[j];
var res=msjob.getAlignment$();
lastProgram=msjob.getAlignmentProgram$();
alorders.add$O(res[1]);
results[j]=res[0];
orders[j]=res[1];
} else {
results[j]=null;
}}
var newview=this.input.getUpdatedView$jalview_datamodel_SequenceIAA$jalview_datamodel_AlignmentOrderA$C(results, orders, this.getGapChar$());
for (var j=0; j < this.jobs.length; j++) {
results[j]=null;
orders[j]=null;
}
var alignment=newview[0];
var hidden=newview[1];
var al=Clazz.new_($I$(20,1).c$$jalview_datamodel_SequenceIA,[alignment]);
if (lastProgram != null ) {
al.setProperty$O$O("Alignment Program", lastProgram);
}if (this.dataset != null ) {
al.setDataset$jalview_datamodel_AlignmentI(this.dataset);
}this.propagateDatasetMappings$jalview_datamodel_Alignment(al);
if (newFrame) {
this.displayInNewFrame$jalview_datamodel_AlignmentI$java_util_List$jalview_datamodel_HiddenColumns(al, alorders, hidden);
} else {
System.out.println$S("MERGE WITH OLD FRAME");
}});

Clazz.newMeth(C$, 'displayInNewFrame$jalview_datamodel_AlignmentI$java_util_List$jalview_datamodel_HiddenColumns',  function (al, alorders, hidden) {
var af=Clazz.new_($I$(21,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I,[al, hidden, 700, 500]);
af.getFeatureRenderer$().transferSettings$jalview_viewmodel_seqfeatures_FeatureRendererSettings(this.featureSettings);
if (alorders.size$() > 0) {
this.addSortByMenuItems$jalview_gui_AlignFrame$java_util_List(af, alorders);
}var requestedBy=this.getRequestingAlignFrame$();
if (requestedBy != null  && requestedBy.getSplitViewContainer$() != null   && requestedBy.getSplitViewContainer$().getComplement$O(requestedBy) != null  ) {
var complement=requestedBy.getSplitViewContainer$().getComplement$O(requestedBy);
var complementTitle=requestedBy.getSplitViewContainer$().getComplementTitle$O(requestedBy);
var copyComplement=Clazz.new_($I$(20,1).c$$jalview_datamodel_AlignmentI,[complement]);
copyComplement.setGapCharacter$C(complement.getGapCharacter$());
copyComplement.setDataset$jalview_datamodel_AlignmentI(complement.getDataset$());
copyComplement.alignAs$jalview_datamodel_AlignmentI(al);
if (copyComplement.getHeight$() > 0) {
af.setTitle$S(this.alTitle);
var af2=Clazz.new_($I$(21,1).c$$jalview_datamodel_AlignmentI$I$I,[copyComplement, 700, 500]);
af2.setTitle$S(complementTitle);
var linkedTitle=$I$(6).getString$S("label.linked_view_title");
var splitFrame=Clazz.new_([al.isNucleotide$() ? af : af2, al.isNucleotide$() ? af2 : af],$I$(22,1).c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame);
$I$(23).addInternalFrame$javax_swing_JInternalFrame$S$I$I(splitFrame, linkedTitle, -1, -1);
return;
}}$I$(23).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, this.alTitle, 700, 500);
});

Clazz.newMeth(C$, 'addSortByMenuItems$jalview_gui_AlignFrame$java_util_List',  function (af, alorders) {
if (alorders.size$() == 1) {
af.addSortByOrderMenuItem$S$jalview_datamodel_AlignmentOrder(this.WebServiceName + " Ordering", alorders.get$I(0));
} else {
var names=Clazz.new_($I$(1,1));
for (var i=0, l=alorders.size$(); i < l; i++) {
var orderName=" Region " + i;
var j=i + 1;
while (j < l){
if (alorders.get$I(i).equals$O(alorders.get$I(j))) {
alorders.remove$I(j);
--l;
orderName+="," + j;
} else {
++j;
}}
if (i == 0 && j == 1 ) {
names.add$O("");
} else {
names.add$O(orderName);
}}
for (var i=0, l=alorders.size$(); i < l; i++) {
af.addSortByOrderMenuItem$S$jalview_datamodel_AlignmentOrder(this.WebServiceName + (names.get$I(i)) + " Ordering" , alorders.get$I(i));
}
}});

Clazz.newMeth(C$, 'canMergeResults$',  function () {
return false;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MsaWSThread, "MsaWSJob", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'jalview.ws.jws2.JWs2Job');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastChunk=0;
this.preset=null;
this.$arguments=null;
this.seqs=Clazz.new_($I$(1,1));
this.returnInput=false;
this.SeqNames=Clazz.new_($I$(2,1));
this.emptySeqs=Clazz.new_($I$(3,1));
this.jobProgress=Clazz.new_($I$(4,1));
this.alignmentProgram=null;
},1);

C$.$fields$=[['Z',['returnInput'],'J',['lastChunk'],'S',['alignmentProgram'],'O',['preset','jalview.ws.params.WsParamSetI','$arguments','java.util.List','seqs','java.util.ArrayList','alignment','compbio.data.sequence.Alignment','SeqNames','java.util.Hashtable','emptySeqs','java.util.Vector','jobProgress','StringBuffer']]]

Clazz.newMeth(C$, 'c$$I$jalview_datamodel_SequenceIA',  function (jobNum, inSeqs) {
Clazz.super_(C$, this);
this.jobnum=jobNum;
if (!p$1.prepareInput$jalview_datamodel_SequenceIA$I.apply(this, [inSeqs, 2])) {
this.submitted=true;
this.subjobComplete=true;
this.returnInput=true;
}}, 1);

Clazz.newMeth(C$, 'prepareInput$jalview_datamodel_SequenceIA$I',  function (seqs, minlen) {
var nseqs=0;
if (minlen < 0) {
throw Clazz.new_([$I$(6).getString$S("error.implementation_error_minlen_must_be_greater_zero")],$I$(5,1).c$$S);
}for (var i=0; i < seqs.length; i++) {
if (seqs[i].getEnd$() - seqs[i].getStart$() > minlen - 1) {
++nseqs;
}}
var valid=nseqs > 1;
var seq;
for (var i=0, n=0; i < seqs.length; i++) {
var newname=$I$(7).unique_name$I(i);
this.SeqNames.put$O$O(newname, $I$(7).SeqCharacterHash$jalview_datamodel_SequenceI(seqs[i]));
if (valid && seqs[i].getEnd$() - seqs[i].getStart$() > minlen - 1 ) {
seq=Clazz.new_([newname, (this.b$['jalview.ws.jws2.MsaWSThread'].submitGaps) ? seqs[i].getSequenceAsString$() : $I$(9,"extractGaps$S$S",[$I$(10).GapChars, seqs[i].getSequenceAsString$()])],$I$(8,1).c$$S$S);
this.seqs.add$O(seq);
} else {
var empty=null;
if (seqs[i].getEnd$() >= seqs[i].getStart$()) {
empty=(this.b$['jalview.ws.jws2.MsaWSThread'].submitGaps) ? seqs[i].getSequenceAsString$() : $I$(9,"extractGaps$S$S",[$I$(10).GapChars, seqs[i].getSequenceAsString$()]);
}this.emptySeqs.add$O(Clazz.array(String, -1, [newname, empty]));
}}
return valid;
}, p$1);

Clazz.newMeth(C$, 'hasResults$',  function () {
if (this.subjobComplete && this.isFinished$() && (this.alignment != null  || (this.emptySeqs != null  && this.emptySeqs.size$() > 0 ) )  ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getAlignment$',  function () {
if (this.hasResults$()) {
var alseqs=null;
var alseq_gapchar="-";
var alseq_l=0;
if (this.alignment.getSequences$().size$() > 0) {
alseqs=Clazz.array($I$(11), [this.alignment.getSequences$().size$()]);
for (var seq, $seq = this.alignment.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
alseqs[alseq_l++]=Clazz.new_([seq.getId$(), seq.getSequence$()],$I$(12,1).c$$S$S);
}
alseq_gapchar=this.alignment.getMetadata$().getGapchar$();
}if (this.emptySeqs.size$() > 0) {
var t_alseqs=Clazz.array($I$(11), [alseq_l + this.emptySeqs.size$()]);
var i;
var w=0;
if (alseq_l > 0) {
for (i=0, w=alseqs[0].getLength$(); i < alseq_l; i++) {
if (w < alseqs[i].getLength$()) {
w=alseqs[i].getLength$();
}t_alseqs[i]=alseqs[i];
alseqs[i]=null;
}
}var ow=w;
var nw=w;
for (i=0, w=this.emptySeqs.size$(); i < w; i++) {
var es=this.emptySeqs.get$I(i);
if (es != null  && es[1] != null  ) {
var sw=es[1].length$();
if (nw < sw) {
nw=sw;
}}}
var insbuff=Clazz.new_($I$(4,1).c$$I,[w]);
for (i=0; i < nw; i++) {
insbuff.append$C(alseq_gapchar);
}
if (ow < nw) {
for (i=0; i < alseq_l; i++) {
var sw=t_alseqs[i].getLength$();
if (nw > sw) {
alseqs[i].setSequence$S(t_alseqs[i].getSequenceAsString$() + insbuff.substring$I$I(0, sw - nw));
}}
}for (i=0, w=this.emptySeqs.size$(); i < w; i++) {
var es=this.emptySeqs.get$I(i);
if (es[1] == null ) {
t_alseqs[i + alseq_l]=Clazz.new_([es[0], insbuff.toString(), 1, 0],$I$(12,1).c$$S$S$I$I);
} else {
if (es[1].length$() < nw) {
t_alseqs[i + alseq_l]=Clazz.new_([es[0], es[1] + insbuff.substring$I$I(0, nw - es[1].length$()), 1, 1 + es[1].length$()],$I$(12,1).c$$S$S$I$I);
} else {
t_alseqs[i + alseq_l]=Clazz.new_($I$(12,1).c$$S$S,[es[0], es[1]]);
}}}
alseqs=t_alseqs;
}var msaorder=Clazz.new_($I$(13,1).c$$jalview_datamodel_SequenceIA,[alseqs]);
$I$(14).recoverOrder$jalview_datamodel_SequenceIA(alseqs);
$I$(7).deuniquify$java_util_Hashtable$jalview_datamodel_SequenceIA(this.SeqNames, alseqs);
return Clazz.array(java.lang.Object, -1, [alseqs, msaorder]);
}return null;
});

Clazz.newMeth(C$, 'cancel$',  function () {
this.cancelled=true;
this.subjobComplete=true;
this.alignment=null;
});

Clazz.newMeth(C$, 'hasValidInput$',  function () {
if (this.seqs != null  && this.seqs.size$() >= 2 ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'setStatus$S',  function (string) {
this.jobProgress.setLength$I(0);
this.jobProgress.append$S(string);
});

Clazz.newMeth(C$, 'getStatus$',  function () {
return this.jobProgress.toString();
});

Clazz.newMeth(C$, 'hasStatus$',  function () {
return this.jobProgress != null ;
});

Clazz.newMeth(C$, 'getLastChunk$',  function () {
return this.lastChunk;
});

Clazz.newMeth(C$, 'setLastChunk$J',  function (lastChunk) {
this.lastChunk=lastChunk;
});

Clazz.newMeth(C$, 'getAlignmentProgram$',  function () {
return this.alignmentProgram;
});

Clazz.newMeth(C$, 'hasArguments$',  function () {
return (this.$arguments != null  && this.$arguments.size$() > 0 ) || (this.preset != null  && Clazz.instanceOf(this.preset, "jalview.ws.jws2.dm.JabaWsParamSet") ) ;
});

Clazz.newMeth(C$, 'getJabaArguments$',  function () {
var newargs=Clazz.new_($I$(1,1));
if (this.preset != null  && Clazz.instanceOf(this.preset, "jalview.ws.jws2.dm.JabaWsParamSet") ) {
newargs.addAll$java_util_Collection((this.preset).getjabaArguments$());
}if (this.$arguments != null  && this.$arguments.size$() > 0 ) {
newargs.addAll$java_util_Collection(this.$arguments);
}return newargs;
});

Clazz.newMeth(C$, 'addInitialStatus$',  function () {
if (this.preset != null ) {
this.jobProgress.append$S("Using " + (Clazz.instanceOf(this.preset, "jalview.ws.jws2.JabaPreset") ? "Server" : "User") + "Preset: " + this.preset.getName$() );
if (Clazz.instanceOf(this.preset, "jalview.ws.jws2.dm.JabaWsParamSet")) {
for (var opt, $opt = (this.preset).getjabaArguments$().iterator$(); $opt.hasNext$()&&((opt=($opt.next$())),1);) {
this.jobProgress.append$S(opt.getName$() + " " + opt.getDefaultValue$() + "\n" );
}
}}if (this.$arguments != null  && this.$arguments.size$() > 0 ) {
this.jobProgress.append$S("With custom parameters : \n");
for (var opt, $opt = this.$arguments.iterator$(); $opt.hasNext$()&&((opt=($opt.next$())),1);) {
this.jobProgress.append$S(opt.getName$() + " " + opt.getDefaultValue$() + "\n" );
}
}this.jobProgress.append$S("\nJob Output:\n");
});

Clazz.newMeth(C$, 'isPresetJob$',  function () {
return this.preset != null  && Clazz.instanceOf(this.preset, "jalview.ws.jws2.JabaPreset") ;
});

Clazz.newMeth(C$, 'getServerPreset$',  function () {
return (this.isPresetJob$()) ? (this.preset).p : null;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
