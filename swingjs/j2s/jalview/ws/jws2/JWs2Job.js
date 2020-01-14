(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),I$=[[0,'compbio.metadata.JobStatus']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JWs2Job", null, 'jalview.ws.AWsJob');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.status=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.status=null;
}, 1);

Clazz.newMeth(C$, 'setjobStatus$compbio_metadata_JobStatus', function (jobStatus) {
this.status=jobStatus;
});

Clazz.newMeth(C$, 'clearResponse$', function () {
this.status=null;
});

Clazz.newMeth(C$, 'getState$', function () {
return this.status == null  ? ("Unknown") : this.status.toString();
});

Clazz.newMeth(C$, 'hasResponse$', function () {
return this.status != null ;
});

Clazz.newMeth(C$, 'isBroken$', function () {
return this.status == null  ? false : this.status.equals$O($I$(1).UNDEFINED);
});

Clazz.newMeth(C$, 'isFailed$', function () {
return this.status == null  ? false : this.status.equals$O($I$(1).FAILED);
});

Clazz.newMeth(C$, 'isFinished$', function () {
return this.status == null  ? false : this.status.equals$O($I$(1).FINISHED);
});

Clazz.newMeth(C$, 'isQueued$', function () {
return this.status == null  ? false : this.status.equals$O($I$(1).SUBMITTED) || this.status.equals$O($I$(1).PENDING) ;
});

Clazz.newMeth(C$, 'isRunning$', function () {
return this.status != null  && (this.status.equals$O($I$(1).RUNNING) || this.status.equals$O($I$(1).STARTED) ) ;
});

Clazz.newMeth(C$, 'isServerError$', function () {
return this.status == null  ? false : false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
