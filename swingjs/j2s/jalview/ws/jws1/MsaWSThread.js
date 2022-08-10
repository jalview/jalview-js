(function(){var P$=Clazz.newPackage("jalview.ws.jws1"),p$1={},p$2={},I$=[[0,'vamsas.objects.simple.SequenceSet','java.util.Hashtable','java.util.Vector','vamsas.objects.simple.MsaResult','jalview.util.MessageManager','Error','vamsas.objects.simple.Sequence','jalview.analysis.SeqsetUtils','jalview.analysis.AlignSeq','jalview.util.Comparison','jalview.datamodel.SequenceI','StringBuffer','jalview.datamodel.Sequence','jalview.datamodel.AlignmentOrder','jalview.analysis.AlignmentSorter',['jalview.ws.jws1.MsaWSThread','.MsaWSJob'],'jalview.bin.Console','jalview.ws.JobStateSummary','jalview.datamodel.Alignment','jalview.gui.AlignFrame','jalview.gui.Desktop']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MsaWSThread", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.ws.jws1.JWS1Thread', 'jalview.ws.WSClientI');
C$.$classes$=[['MsaWSJob',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.submitGaps=false;
this.preserveOrder=true;
this.server=null;
},1);

C$.$fields$=[['Z',['submitGaps','preserveOrder'],'S',['alTitle'],'O',['dataset','jalview.datamodel.AlignmentI','server','ext.vamsas.MuscleWS']]]

Clazz.newMeth(C$, 'c$$ext_vamsas_MuscleWS$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$jalview_datamodel_AlignmentView$S$Z$Z',  function (server, wsUrl, wsinfo, alFrame, alview, wsname, subgaps, presorder) {
;C$.superclazz.c$$jalview_gui_AlignFrame$jalview_gui_WebserviceInfo$jalview_datamodel_AlignmentView$S$S.apply(this,[alFrame, wsinfo, alview, wsname, wsUrl]);C$.$init$.apply(this);
this.server=server;
this.submitGaps=subgaps;
this.preserveOrder=presorder;
}, 1);

Clazz.newMeth(C$, 'c$$ext_vamsas_MuscleWS$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$S$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI',  function (server, wsUrl, wsinfo, alFrame, wsname, title, _msa, subgaps, presorder, seqset) {
C$.c$$ext_vamsas_MuscleWS$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$jalview_datamodel_AlignmentView$S$Z$Z.apply(this, [server, wsUrl, wsinfo, alFrame, _msa, wsname, subgaps, presorder]);
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
if (!(Clazz.instanceOf(job, "jalview.ws.jws1.MsaWSThread.MsaWSJob"))) {
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
var jobsubmit=this.server.align$vamsas_objects_simple_SequenceSet(j.seqs);
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
var msa=Clazz.array($I$(13), [seqs.length]);
for (var i=0, j=seqs.length; i < j; i++) {
msa[i]=Clazz.new_([seqs[i].getId$(), seqs[i].getSeq$()],$I$(13,1).c$$S$S);
}
return msa;
}, p$2);

Clazz.newMeth(C$, 'parseResult$',  function () {
var results=0;
var finalState=Clazz.new_($I$(18,1));
try {
for (var j=0; j < this.jobs.length; j++) {
finalState.updateJobPanelState$jalview_gui_WebserviceInfo$S$jalview_ws_AWsJob(this.wsInfo, this.OutputHeader, this.jobs[j]);
if (this.jobs[j].isSubmitted$() && this.jobs[j].isSubjobComplete$() && this.jobs[j].hasResults$()  ) {
++results;
var valign=((this.jobs[j]).result).getMsa$();
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
this.wsInfo.showResultsNewFrame.addActionListener$java_awt_event_ActionListener(((P$.MsaWSThread$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MsaWSThread$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['jalview.ws.jws1.MsaWSThread'].displayResults$Z.apply(this.b$['jalview.ws.jws1.MsaWSThread'], [true]);
});
})()
), Clazz.new_(P$.MsaWSThread$1.$init$,[this, null])));
this.wsInfo.mergeResults.addActionListener$java_awt_event_ActionListener(((P$.MsaWSThread$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MsaWSThread$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['jalview.ws.jws1.MsaWSThread'].displayResults$Z.apply(this.b$['jalview.ws.jws1.MsaWSThread'], [false]);
});
})()
), Clazz.new_(P$.MsaWSThread$2.$init$,[this, null])));
this.wsInfo.setResultsReady$();
} else {
this.wsInfo.setFinishedNoResults$();
}});

Clazz.newMeth(C$, 'displayResults$Z',  function (newFrame) {
var alorders=Clazz.new_($I$(3,1));
var results=Clazz.array($I$(11), [this.jobs.length, null]);
var orders=Clazz.array($I$(14), [this.jobs.length]);
for (var j=0; j < this.jobs.length; j++) {
if (this.jobs[j].hasResults$()) {
var res=(this.jobs[j]).getAlignment$();
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
var al=Clazz.new_($I$(19,1).c$$jalview_datamodel_SequenceIA,[alignment]);
if (this.dataset != null ) {
al.setDataset$jalview_datamodel_AlignmentI(this.dataset);
}this.propagateDatasetMappings$jalview_datamodel_Alignment(al);
if (newFrame) {
var af=Clazz.new_($I$(20,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I,[al, hidden, 700, 500]);
af.getFeatureRenderer$().transferSettings$jalview_viewmodel_seqfeatures_FeatureRendererSettings(this.featureSettings);
if (alorders.size$() > 0) {
if (alorders.size$() == 1) {
af.addSortByOrderMenuItem$S$jalview_datamodel_AlignmentOrder(this.WebServiceName + " Ordering", alorders.get$I(0));
} else {
var names=Clazz.new_($I$(3,1));
for (var i=0, l=alorders.size$(); i < l; i++) {
var orderName= String.instantialize(" Region " + i);
var j=i + 1;
while (j < l){
if ((alorders.get$I(i)).equals$O((alorders.get$I(j)))) {
alorders.remove$I(j);
--l;
orderName+="," + j;
} else {
++j;
}}
if (i == 0 && j == 1 ) {
names.add$O( String.instantialize(""));
} else {
names.add$O(orderName);
}}
for (var i=0, l=alorders.size$(); i < l; i++) {
af.addSortByOrderMenuItem$S$jalview_datamodel_AlignmentOrder(this.WebServiceName + (names.get$I(i)) + " Ordering" , alorders.get$I(i));
}
}}$I$(21).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, this.alTitle, 700, 500);
} else {
System.out.println$S("MERGE WITH OLD FRAME");
}});

Clazz.newMeth(C$, 'canMergeResults$',  function () {
return false;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MsaWSThread, "MsaWSJob", function(){
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
var valid=nseqs > 1;
var seqarray=(valid) ? Clazz.array($I$(7), [nseqs]) : null;
for (var i=0, n=0; i < seqs.length; i++) {
var newname=$I$(8).unique_name$I(i);
this.SeqNames.put$O$O(newname, $I$(8).SeqCharacterHash$jalview_datamodel_SequenceI(seqs[i]));
if (valid && seqs[i].getEnd$() - seqs[i].getStart$() > minlen - 1 ) {
seqarray[n]=Clazz.new_($I$(7,1));
seqarray[n].setId$S(newname);
seqarray[n++].setSeq$S((this.b$['jalview.ws.jws1.MsaWSThread'].submitGaps) ? seqs[i].getSequenceAsString$() : $I$(9,"extractGaps$S$S",[$I$(10).GapChars, seqs[i].getSequenceAsString$()]));
} else {
var empty=null;
if (seqs[i].getEnd$() >= seqs[i].getStart$()) {
empty=(this.b$['jalview.ws.jws1.MsaWSThread'].submitGaps) ? seqs[i].getSequenceAsString$() : $I$(9,"extractGaps$S$S",[$I$(10).GapChars, seqs[i].getSequenceAsString$()]);
}this.emptySeqs.add$O(Clazz.array(String, -1, [newname, empty]));
}}
this.seqs=Clazz.new_($I$(1,1));
this.seqs.setSeqs$vamsas_objects_simple_SequenceA(seqarray);
return valid;
}, p$1);

Clazz.newMeth(C$, 'hasResults$',  function () {
if (this.subjobComplete && this.result != null   && this.result.isFinished$()  && (this.result).getMsa$() != null   && (this.result).getMsa$().getSeqs$() != null  ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getAlignment$',  function () {
if (this.result != null  && this.result.isFinished$() ) {
var alseqs=null;
var alseq_gapchar="-";
var alseq_l=0;
if ((this.result).getMsa$() != null ) {
alseqs=p$2.getVamsasAlignment$vamsas_objects_simple_Alignment.apply(this.b$['jalview.ws.jws1.MsaWSThread'], [(this.result).getMsa$()]);
alseq_gapchar=(this.result).getMsa$().getGapchar$().charAt$I(0);
alseq_l=alseqs.length;
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
var insbuff=Clazz.new_($I$(12,1).c$$I,[w]);
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
t_alseqs[i + alseq_l]=Clazz.new_([es[0], insbuff.toString(), 1, 0],$I$(13,1).c$$S$S$I$I);
} else {
if (es[1].length$() < nw) {
t_alseqs[i + alseq_l]=Clazz.new_([es[0], es[1] + insbuff.substring$I$I(0, nw - es[1].length$()), 1, 1 + es[1].length$()],$I$(13,1).c$$S$S$I$I);
} else {
t_alseqs[i + alseq_l]=Clazz.new_($I$(13,1).c$$S$S,[es[0], es[1]]);
}}}
alseqs=t_alseqs;
}var msaorder=Clazz.new_($I$(14,1).c$$jalview_datamodel_SequenceIA,[alseqs]);
$I$(15).recoverOrder$jalview_datamodel_SequenceIA(alseqs);
$I$(8).deuniquify$java_util_Hashtable$jalview_datamodel_SequenceIA(this.SeqNames, alseqs);
return Clazz.array(java.lang.Object, -1, [alseqs, msaorder]);
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
