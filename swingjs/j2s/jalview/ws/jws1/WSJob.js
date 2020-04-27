(function(){var P$=Clazz.newPackage("jalview.ws.jws1"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "WSJob", null, 'jalview.ws.AWsJob');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['result','vamsas.objects.simple.Result']]]

Clazz.newMeth(C$, 'clearResponse$', function () {
this.result=null;
});

Clazz.newMeth(C$, 'hasResponse$', function () {
return this.result != null ;
});

Clazz.newMeth(C$, 'hasStatus$', function () {
return this.result != null  && this.result.getStatus$() != null  ;
});

Clazz.newMeth(C$, 'getStatus$', function () {
return this.result == null  ? null : this.result.getStatus$();
});

Clazz.newMeth(C$, 'getState$', function () {
return this.result == null  ? "NULL result" : "" + this.result.getState$();
});

Clazz.newMeth(C$, 'isBroken$', function () {
return this.result != null  && this.result.isBroken$() ;
});

Clazz.newMeth(C$, 'isFailed$', function () {
return this.result != null  && this.result.isFailed$() ;
});

Clazz.newMeth(C$, 'isFinished$', function () {
return this.result != null  && this.result.isFinished$() ;
});

Clazz.newMeth(C$, 'isInvalid$', function () {
return this.result != null  && this.result.isInvalid$() ;
});

Clazz.newMeth(C$, 'isJobFailed$', function () {
return this.result != null  && this.result.isJobFailed$() ;
});

Clazz.newMeth(C$, 'isQueued$', function () {
return this.result != null  && this.result.isQueued$() ;
});

Clazz.newMeth(C$, 'isRunning$', function () {
return this.result != null  && this.result.isRunning$() ;
});

Clazz.newMeth(C$, 'isServerError$', function () {
return this.result != null  && this.result.isServerError$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
