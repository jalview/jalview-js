(function(){var P$=Clazz.newPackage("jalview.ws.jws1"),p$1={},p$2={},I$=[[0,'vamsas.objects.simple.SequenceSet','java.util.Hashtable','java.util.Vector','vamsas.objects.simple.MsaResult','jalview.util.MessageManager','Error','vamsas.objects.simple.Sequence','jalview.analysis.SeqsetUtils','jalview.analysis.AlignSeq','jalview.util.Comparison','jalview.datamodel.Alignment','jalview.io.AnnotationFile','jalview.io.DataSourceType','jalview.io.FeaturesFile','jalview.io.NewickFile',['jalview.ws.jws1.SeqSearchWSThread','.SeqSearchWSJob'],'jalview.bin.Console','jalview.datamodel.Sequence','jalview.ws.JobStateSummary','java.util.HashMap','jalview.gui.AlignFrame','jalview.gui.Desktop']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SeqSearchWSThread", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.ws.jws1.JWS1Thread', 'jalview.ws.WSClientI');
C$.$classes$=[['SeqSearchWSJob',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dbs=null;
this.profile=false;
this.server=null;
},1);

C$.$fields$=[['Z',['profile'],'S',['dbs','alTitle','dbArg'],'O',['dataset','jalview.datamodel.AlignmentI','server','ext.vamsas.SeqSearchI']]]

Clazz.newMeth(C$, 'c$$ext_vamsas_SeqSearchI$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$jalview_datamodel_AlignmentView$S$S',  function (server, wsUrl, wsinfo, alFrame, alview, wsname, db) {
;C$.superclazz.c$$jalview_gui_AlignFrame$jalview_gui_WebserviceInfo$jalview_datamodel_AlignmentView$S$S.apply(this,[alFrame, wsinfo, alview, wsname, wsUrl]);C$.$init$.apply(this);
this.server=server;
this.dbArg=db;
}, 1);

Clazz.newMeth(C$, 'c$$ext_vamsas_SeqSearchI$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$S$S$jalview_datamodel_AlignmentView$S$jalview_datamodel_AlignmentI',  function (server, wsUrl, wsinfo, alFrame, wsname, title, _msa, db, seqset) {
C$.c$$ext_vamsas_SeqSearchI$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$jalview_datamodel_AlignmentView$S$S.apply(this, [server, wsUrl, wsinfo, alFrame, _msa, wsname, db]);
this.OutputHeader=this.wsInfo.getProgressText$();
this.alTitle=title;
this.dataset=seqset;
var conmsa=_msa.getVisibleContigs$C("-");
if (conmsa != null ) {
var njobs=conmsa.length;
this.jobs=Clazz.array($I$(16), [njobs]);
for (var j=0; j < njobs; j++) {
if (j != 0) {
this.jobs[j]=Clazz.new_([this, null, wsinfo.addJobPane$(), conmsa[j]],$I$(16,1).c$$I$jalview_datamodel_SequenceIA);
} else {
this.jobs[j]=Clazz.new_($I$(16,1).c$$I$jalview_datamodel_SequenceIA,[this, null, 0, conmsa[j]]);
}if (njobs > 0) {
wsinfo.setProgressName$S$I("region " + this.jobs[j].getJobnum$(), this.jobs[j].getJobnum$());
}wsinfo.setProgressText$I$S(this.jobs[j].getJobnum$(), this.OutputHeader);
}
}}, 1);

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
var cancelledJob=this.server.cancel$S(this.jobs[job].getJobId$());
if (cancelledJob.getStatus$() == 2) {
cancelledMessage="Job cancelled.";
(this.jobs[job]).cancel$();
this.wsInfo.setStatus$I$I(this.jobs[job].getJobnum$(), 3);
} else if (cancelledJob.getStatus$() == 3) {
cancelledMessage+="Server cannot cancel this job. just close the window.\n";
cancelled=false;
}if (cancelledJob.getJobId$() != null ) {
cancelledMessage+=("[" + cancelledJob.getJobId$() + "]" );
}cancelledMessage+="\n";
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
cancelledMessage+=("\nProblems cancelling the job : Exception received...\n" + exc + "\n" );
$I$(17,"warn$S$Throwable",["Exception whilst cancelling " + this.jobs[job].getJobId$(), exc]);
} else {
throw exc;
}
}
this.wsInfo.setProgressText$I$S(this.jobs[job].getJobnum$(), this.OutputHeader + cancelledMessage + "\n" );
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
(job).result=this.server.getResult$S((job).getJobId$());
});

Clazz.newMeth(C$, 'StartJob$jalview_ws_AWsJob',  function (job) {
if (!(Clazz.instanceOf(job, "jalview.ws.jws1.SeqSearchWSThread.SeqSearchWSJob"))) {
throw Clazz.new_([$I$(5,"formatMessage$S$SA",["error.implementation_error_msawbjob_called", Clazz.array(String, -1, [job.getClass$().toString()])])],$I$(6,1).c$$S);
}var j=job;
if (j.isSubmitted$()) {
if ($I$(17).isDebugEnabled$()) {
$I$(17,"debug$S",["Tried to submit an already submitted job " + j.getJobId$()]);
}return;
}if (j.seqs.getSeqs$() == null ) {
j.setSubmitted$Z(true);
j.result=Clazz.new_($I$(4,1));
j.result.setFinished$Z(true);
j.result.setStatus$S($I$(5).getString$S("label.empty_alignment_job"));
(j.result).setMsa$vamsas_objects_simple_Alignment(null);
}try {
var jobsubmit=this.server.search$vamsas_objects_simple_Sequence$S(j.seqs.getSeqs$()[0], this.dbArg);
if ((jobsubmit != null ) && (jobsubmit.getStatus$() == 1) ) {
j.setJobId$S(jobsubmit.getJobId$());
j.setSubmitted$Z(true);
j.setSubjobComplete$Z(false);
} else {
if (jobsubmit == null ) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(5,"formatMessage$S$SA",["exception.web_service_returned_null_try_later", Clazz.array(String, -1, [this.WsUrl])])]);
}throw Clazz.new_(Clazz.load('Exception').c$$S,[jobsubmit.getJobId$()]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S(this.WebServiceName + "Client: Failed to submit the sequences for alignment (probably a server side problem)\n" + "When contacting Server:" + this.WsUrl + "\n" + e.toString() + "\n" );
j.setAllowedServerExceptions$I(0);
this.wsInfo.setStatus$I(5);
this.wsInfo.setStatus$I$I(j.getJobnum$(), 5);
this.wsInfo.appendProgressText$I$S(j.getJobnum$(), $I$(5).getString$S("info.failed_to_submit_sequences_for_alignment"));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getVamsasAlignment$vamsas_objects_simple_Alignment',  function (valign) {
var seqs=valign.getSeqs$().getSeqs$();
var msa=Clazz.array($I$(18), [seqs.length]);
for (var i=0, j=seqs.length; i < j; i++) {
msa[i]=Clazz.new_([seqs[i].getId$(), seqs[i].getSeq$()],$I$(18,1).c$$S$S);
}
return msa;
}, p$2);

Clazz.newMeth(C$, 'parseResult$',  function () {
var results=0;
var finalState=Clazz.new_($I$(19,1));
try {
for (var j=0; j < this.jobs.length; j++) {
finalState.updateJobPanelState$jalview_gui_WebserviceInfo$S$jalview_ws_AWsJob(this.wsInfo, this.OutputHeader, this.jobs[j]);
if (this.jobs[j].isSubmitted$() && this.jobs[j].isSubjobComplete$() && this.jobs[j].hasResults$()  ) {
++results;
var valign=((this.jobs[j]).result).getAlignment$();
if (valign != null ) {
this.wsInfo.appendProgressText$I$S(this.jobs[j].getJobnum$(), $I$(5).getString$S("info.alignment_object_method_notes"));
var lines=valign.getMethod$();
for (var line=0; line < lines.length; line++) {
this.wsInfo.appendProgressText$I$S(this.jobs[j].getJobnum$(), lines[line] + "\n");
}
}}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(17).error$S$Throwable("Unexpected exception when processing results for " + this.alTitle, ex);
this.wsInfo.setStatus$I(4);
} else {
throw ex;
}
}
if (results > 0) {
this.wsInfo.showResultsNewFrame.addActionListener$java_awt_event_ActionListener(((P$.SeqSearchWSThread$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SeqSearchWSThread$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['jalview.ws.jws1.SeqSearchWSThread'].displayResults$Z.apply(this.b$['jalview.ws.jws1.SeqSearchWSThread'], [true]);
});
})()
), Clazz.new_(P$.SeqSearchWSThread$1.$init$,[this, null])));
this.wsInfo.mergeResults.addActionListener$java_awt_event_ActionListener(((P$.SeqSearchWSThread$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SeqSearchWSThread$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['jalview.ws.jws1.SeqSearchWSThread'].displayResults$Z.apply(this.b$['jalview.ws.jws1.SeqSearchWSThread'], [false]);
});
})()
), Clazz.new_(P$.SeqSearchWSThread$2.$init$,[this, null])));
this.wsInfo.setResultsReady$();
} else {
this.wsInfo.setFinishedNoResults$();
}});

Clazz.newMeth(C$, 'displayResults$Z',  function (newFrame) {
if (!newFrame) {
System.err.println$S("MERGE WITH OLD FRAME NOT IMPLEMENTED");
return;
}for (var j=0; j < this.jobs.length; j++) {
var featureColours=Clazz.new_($I$(20,1));
var al=null;
var nf=null;
if (this.jobs[j].hasResults$()) {
var res=(this.jobs[j]).getAlignment$jalview_datamodel_AlignmentI$java_util_Map(this.dataset, featureColours);
if (res == null ) {
continue;
};al=res[0];
nf=res[1];
} else {
al=null;
nf=null;
continue;
}var af=Clazz.new_($I$(21,1).c$$jalview_datamodel_AlignmentI$I$I,[al, 700, 500]);
if (nf != null ) {
af.showNewickTree$jalview_io_NewickFile$S(nf, $I$(5,"formatMessage$S$SA",["label.tree_from", Clazz.array(String, -1, [this.alTitle])]));
}af.getFeatureRenderer$().transferSettings$jalview_viewmodel_seqfeatures_FeatureRendererSettings(this.featureSettings);
$I$(22).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, this.alTitle, 700, 500);
}
});

Clazz.newMeth(C$, 'canMergeResults$',  function () {
return false;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SeqSearchWSThread, "SeqSearchWSJob", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'jalview.ws.jws1.WSJob');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.seqs=Clazz.new_($I$(1,1));
this.SeqNames=Clazz.new_($I$(2,1));
this.emptySeqs=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['seqs','vamsas.objects.simple.SequenceSet','SeqNames','java.util.Hashtable','emptySeqs','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$I$jalview_datamodel_SequenceIA',  function (jobNum, inSeqs) {
Clazz.super_(C$, this);
this.jobnum=jobNum;
if (!p$1.prepareInput$jalview_datamodel_SequenceIA$I.apply(this, [inSeqs, 2])) {
this.submitted=true;
this.subjobComplete=true;
this.result=Clazz.new_($I$(4,1));
this.result.setFinished$Z(true);
this.result.setStatus$S($I$(5).getString$S("label.job_never_ran"));
}}, 1);

Clazz.newMeth(C$, 'prepareInput$jalview_datamodel_SequenceIA$I',  function (seqs, minlen) {
var nseqs=0;
if (minlen < 0) {
throw Clazz.new_([$I$(5).getString$S("error.implementation_error_minlen_must_be_greater_zero")],$I$(6,1).c$$S);
}for (var i=0; i < seqs.length; i++) {
if (seqs[i].getEnd$() - seqs[i].getStart$() > minlen - 1) {
++nseqs;
}}
var valid=nseqs >= 1;
var seqarray=(valid) ? Clazz.array($I$(7), [nseqs]) : null;
var submitGaps=(nseqs == 1) ? false : true;
for (var i=0, n=0; i < seqs.length; i++) {
var newname=$I$(8).unique_name$I(i);
this.SeqNames.put$O$O(newname, $I$(8).SeqCharacterHash$jalview_datamodel_SequenceI(seqs[i]));
if (valid && seqs[i].getEnd$() - seqs[i].getStart$() > minlen - 1 ) {
seqarray[n]=Clazz.new_($I$(7,1));
seqarray[n].setId$S(newname);
seqarray[n++].setSeq$S((submitGaps) ? seqs[i].getSequenceAsString$() : $I$(9,"extractGaps$S$S",[$I$(10).GapChars, seqs[i].getSequenceAsString$()]));
} else {
var empty=null;
if (seqs[i].getEnd$() >= seqs[i].getStart$()) {
empty=(submitGaps) ? seqs[i].getSequenceAsString$() : $I$(9,"extractGaps$S$S",[$I$(10).GapChars, seqs[i].getSequenceAsString$()]);
}this.emptySeqs.add$O(Clazz.array(String, -1, [newname, empty]));
}}
if (submitGaps) {
}this.seqs=Clazz.new_($I$(1,1));
this.seqs.setSeqs$vamsas_objects_simple_SequenceA(seqarray);
return valid;
}, p$1);

Clazz.newMeth(C$, 'hasResults$',  function () {
if (this.subjobComplete && this.result != null   && this.result.isFinished$()  && (this.result).getAlignment$() != null   && (this.result).getAlignment$().getSeqs$() != null  ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getAlignment$jalview_datamodel_AlignmentI$java_util_Map',  function (dataset, featureColours) {
if (this.result != null  && this.result.isFinished$() ) {
var alseqs=null;
if ((this.result).getAlignment$() != null ) {
alseqs=p$2.getVamsasAlignment$vamsas_objects_simple_Alignment.apply(this.b$['jalview.ws.jws1.SeqSearchWSThread'], [(this.result).getAlignment$()]);
}var al=Clazz.new_($I$(11,1).c$$jalview_datamodel_SequenceIA,[alseqs]);
var inFile=null;
try {
inFile=(this.result).getAnnotation$();
if (inFile != null  && inFile.length$() > 0 ) {
Clazz.new_($I$(12,1)).readAnnotationFile$jalview_datamodel_AlignmentI$S$jalview_io_DataSourceType(al, inFile, $I$(13).PASTE);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Failed to parse the annotation file associated with the alignment.");
System.err.println$S(">>>EOF" + inFile + "\n<<<EOF\n" );
e.printStackTrace$java_io_PrintStream(System.err);
} else {
throw e;
}
}
try {
inFile=(this.result).getFeatures$();
if (inFile != null  && inFile.length$() > 0 ) {
var ff=Clazz.new_([inFile, $I$(13).PASTE],$I$(14,1).c$$O$jalview_io_DataSourceType);
ff.parse$jalview_datamodel_AlignmentI$java_util_Map$Z(al, featureColours, false);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Failed to parse the Features file associated with the alignment.");
System.err.println$S(">>>EOF" + inFile + "\n<<<EOF\n" );
e.printStackTrace$java_io_PrintStream(System.err);
} else {
throw e;
}
}
var nf=null;
try {
inFile=(this.result).getNewickTree$();
if (inFile != null  && inFile.length$() > 0 ) {
nf=Clazz.new_([inFile, $I$(13).PASTE],$I$(15,1).c$$S$jalview_io_DataSourceType);
if (!nf.isValid$()) {
nf.close$();
nf=null;
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Failed to parse the treeFile associated with the alignment.");
System.err.println$S(">>>EOF" + inFile + "\n<<<EOF\n" );
e.printStackTrace$java_io_PrintStream(System.err);
} else {
throw e;
}
}
return Clazz.array(java.lang.Object, -1, [al, nf]);
}return null;
});

Clazz.newMeth(C$, 'cancel$',  function () {
this.cancelled=true;
this.subjobComplete=true;
this.result=null;
});

Clazz.newMeth(C$, 'hasValidInput$',  function () {
if (this.seqs.getSeqs$() != null ) {
return true;
}return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
