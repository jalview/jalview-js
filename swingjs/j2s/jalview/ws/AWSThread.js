(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[[0,'jalview.ws.JobStateSummary','jalview.bin.Console','jalview.util.MessageManager','Thread','jalview.gui.OOMWarning','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AWSThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentView=null;
this.featureSettings=null;
this.wsInfo=null;
this.input=null;
this.codonframe=null;
this.jobComplete=false;
this.jobs=null;
this.WebServiceName=null;
this.defGapChar="-";
this.WsUrl=null;
},1);

C$.$fields$=[['Z',['jobComplete'],'C',['defGapChar'],'S',['WebServiceName','OutputHeader','WsUrl'],'O',['currentView','jalview.datamodel.AlignmentI','featureSettings','jalview.viewmodel.seqfeatures.FeatureRendererSettings','wsInfo','jalview.gui.WebserviceInfo','input','jalview.datamodel.AlignmentView','codonframe','java.util.List','jobs','jalview.ws.AWsJob[]','alignFrame','jalview.gui.AlignFrame']]]

Clazz.newMeth(C$, 'run$',  function () {
var jstate=null;
if (this.jobs == null ) {
this.jobComplete=true;
}while (!this.jobComplete){
jstate=Clazz.new_($I$(1,1));
for (var j=0; j < this.jobs.length; j++) {
if (!this.jobs[j].submitted && this.jobs[j].hasValidInput$() ) {
this.StartJob$jalview_ws_AWsJob(this.jobs[j]);
}if (this.jobs[j].submitted && !this.jobs[j].subjobComplete ) {
try {
this.pollJob$jalview_ws_AWsJob(this.jobs[j]);
if (!this.jobs[j].hasResponse$()) {
throw (Clazz.new_(Clazz.load('Exception').c$$S,["Timed out when communicating with server\nTry again later.\n"]));
}$I$(2,"debug$S",["Job " + j + " Result state " + this.jobs[j].getState$() + "(ServerError=" + this.jobs[j].isServerError$() + ")" ]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
this.wsInfo.appendProgressText$I$S(this.jobs[j].jobnum, $I$(3,"formatMessage$S$OA",["info.server_exception", Clazz.array(java.lang.Object, -1, [this.WebServiceName, ex.getMessage$()])]));
$I$(2,"warn$S",[this.WebServiceName + " job(" + this.jobs[j].jobnum + ") Server exception." ]);
ex.printStackTrace$();
if (this.jobs[j].allowedServerExceptions > 0) {
--this.jobs[j].allowedServerExceptions;
$I$(2).debug$S("Sleeping after a server exception.");
try {
$I$(4).sleep$J(5000);
} catch (ex1) {
if (Clazz.exceptionOf(ex1,"InterruptedException")){
} else {
throw ex1;
}
}
} else {
$I$(2).warn$S("Dropping job " + j + " " + this.jobs[j].jobId );
this.jobs[j].subjobComplete=true;
this.wsInfo.setStatus$I$I(this.jobs[j].jobnum, 5);
}}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var er = e$$;
{
this.jobComplete=true;
this.jobs[j].subjobComplete=true;
this.jobs[j].clearResponse$();
this.wsInfo.setStatus$I$I(this.jobs[j].jobnum, 4);
$I$(2).error$S$Throwable("Out of memory when retrieving Job " + j + " id:" + this.WsUrl + "/" + this.jobs[j].jobId , er);
Clazz.new_($I$(5,1).c$$S$OutOfMemoryError,["retrieving result for " + this.WebServiceName, er]);
System.gc$();
}
} else {
throw e$$;
}
}
}jstate.updateJobPanelState$jalview_gui_WebserviceInfo$S$jalview_ws_AWsJob(this.wsInfo, this.OutputHeader, this.jobs[j]);
}
this.updateGlobalStatus$jalview_ws_JobStateSummary(jstate);
if (!this.jobComplete) {
try {
$I$(4).sleep$J(5000);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
$I$(2).debug$S$Throwable("Interrupted sleep waiting for next job poll.", e);
} else {
throw e;
}
}
}}
if (this.jobComplete && this.jobs != null  ) {
this.parseResult$();
} else {
$I$(2).debug$S("WebServiceJob poll loop finished with no jobs created.");
this.wsInfo.setStatus$I(4);
this.wsInfo.appendProgressText$S($I$(3).getString$S("info.no_jobs_ran"));
this.wsInfo.setFinishedNoResults$();
}});

Clazz.newMeth(C$, 'updateGlobalStatus$jalview_ws_JobStateSummary',  function (jstate) {
if (jstate.running > 0) {
this.wsInfo.setStatus$I(1);
} else if (jstate.queuing > 0) {
this.wsInfo.setStatus$I(0);
} else {
this.jobComplete=true;
if (jstate.finished > 0) {
this.wsInfo.setStatus$I(2);
} else if (jstate.error > 0) {
this.wsInfo.setStatus$I(4);
} else if (jstate.serror > 0) {
this.wsInfo.setStatus$I(5);
}}});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Runnable',  function (target) {
;C$.superclazz.c$$Runnable.apply(this,[target]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$ThreadGroup$Runnable',  function (group, target) {
;C$.superclazz.c$$ThreadGroup$Runnable.apply(this,[group, target]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$ThreadGroup$S',  function (group, name) {
;C$.superclazz.c$$ThreadGroup$S.apply(this,[group, name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Runnable$S',  function (target, name) {
;C$.superclazz.c$$Runnable$S.apply(this,[target, name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$ThreadGroup$Runnable$S',  function (group, target, name) {
;C$.superclazz.c$$ThreadGroup$Runnable$S.apply(this,[group, target, name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'propagateDatasetMappings$jalview_datamodel_Alignment',  function (al) {
if (this.codonframe != null ) {
var alignment=al.getSequencesArray$();
for (var sq=0; sq < alignment.length; sq++) {
for (var acf, $acf = this.codonframe.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
var seq=alignment[sq];
if (acf != null  && acf.involvesSequence$jalview_datamodel_SequenceI(seq) ) {
al.addCodonFrame$jalview_datamodel_AlignedCodonFrame(acf);
break;
}}
}
}});

Clazz.newMeth(C$, 'c$$ThreadGroup$Runnable$S$J',  function (group, target, name, stackSize) {
;C$.superclazz.c$$ThreadGroup$Runnable$S$J.apply(this,[group, target, name, stackSize]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getGapChar$',  function () {
return this.defGapChar;
});

Clazz.newMeth(C$, 'c$$jalview_gui_AlignFrame$jalview_gui_WebserviceInfo$jalview_datamodel_AlignmentView$S$S',  function (alignFrame, wsinfo, input, webServiceName, wsUrl) {
C$.c$$jalview_gui_AlignFrame$jalview_gui_WebserviceInfo$jalview_datamodel_AlignmentView$S.apply(this, [alignFrame, wsinfo, input, wsUrl]);
this.WebServiceName=webServiceName;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignFrame$jalview_gui_WebserviceInfo$jalview_datamodel_AlignmentView$S',  function (alframe, wsinfo2, alview, wsurl2) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.alignFrame=alframe;
this.currentView=alframe.getCurrentView$().getAlignment$();
this.featureSettings=alframe.getFeatureRenderer$().getSettings$();
this.defGapChar=alframe.getViewport$().getGapCharacter$();
this.wsInfo=wsinfo2;
this.input=alview;
this.WsUrl=wsurl2;
if (alframe != null ) {
var cf=alframe.getViewport$().getAlignment$().getCodonFrames$();
if (cf != null ) {
this.codonframe=Clazz.new_($I$(6,1));
this.codonframe.addAll$java_util_Collection(cf);
}}}, 1);

Clazz.newMeth(C$, 'getRequestingAlignFrame$',  function () {
return this.alignFrame;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
