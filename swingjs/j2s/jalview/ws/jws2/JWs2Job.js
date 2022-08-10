(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),I$=[[0,'compbio.metadata.JobStatus']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JWs2Job", null, 'jalview.ws.AWsJob');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.status=null;
},1);

C$.$fields$=[['O',['status','compbio.metadata.JobStatus']]]

Clazz.newMeth(C$, 'setjobStatus$compbio_metadata_JobStatus',  function (jobStatus) {
this.status=jobStatus;
});

Clazz.newMeth(C$, 'clearResponse$',  function () {
this.status=null;
});

Clazz.newMeth(C$, 'getState$',  function () {
return this.status == null  ? ("Unknown") : this.status.toString();
});

Clazz.newMeth(C$, 'hasResponse$',  function () {
return this.status != null ;
});

Clazz.newMeth(C$, 'isBroken$',  function () {
return this.status == null  ? false : this.status.equals$O($I$(1).UNDEFINED);
});

Clazz.newMeth(C$, 'isFailed$',  function () {
return this.status == null  ? false : this.status.equals$O($I$(1).FAILED);
});

Clazz.newMeth(C$, 'isFinished$',  function () {
return this.status == null  ? false : this.status.equals$O($I$(1).FINISHED);
});

Clazz.newMeth(C$, 'isQueued$',  function () {
return this.status == null  ? false : this.status.equals$O($I$(1).SUBMITTED) || this.status.equals$O($I$(1).PENDING) ;
});

Clazz.newMeth(C$, 'isRunning$',  function () {
return this.status != null  && (this.status.equals$O($I$(1).RUNNING) || this.status.equals$O($I$(1).STARTED) ) ;
});

Clazz.newMeth(C$, 'isServerError$',  function () {
return this.status == null  ? false : false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
