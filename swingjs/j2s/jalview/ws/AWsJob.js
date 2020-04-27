(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AWsJob");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.jobnum=0;
this.cancelled=false;
this.allowedServerExceptions=3;
this.submitted=false;
this.subjobComplete=false;
},1);

C$.$fields$=[['Z',['cancelled','submitted','subjobComplete'],'I',['jobnum','allowedServerExceptions'],'S',['jobId']]]

Clazz.newMeth(C$, 'setJobId$S', function (jobId) {
this.jobId=jobId;
});

Clazz.newMeth(C$, 'setAllowedServerExceptions$I', function (allowedServerExceptions) {
this.allowedServerExceptions=allowedServerExceptions;
});

Clazz.newMeth(C$, 'setJobnum$I', function (jobnum) {
this.jobnum=jobnum;
});

Clazz.newMeth(C$, 'setSubmitted$Z', function (submitted) {
this.submitted=submitted;
});

Clazz.newMeth(C$, 'setSubjobComplete$Z', function (subjobComplete) {
this.subjobComplete=subjobComplete;
});

Clazz.newMeth(C$, 'getJobnum$', function () {
return this.jobnum;
});

Clazz.newMeth(C$, 'getJobId$', function () {
return this.jobId;
});

Clazz.newMeth(C$, 'isCancelled$', function () {
return this.cancelled;
});

Clazz.newMeth(C$, 'getAllowedServerExceptions$', function () {
return this.allowedServerExceptions;
});

Clazz.newMeth(C$, 'isSubmitted$', function () {
return this.submitted;
});

Clazz.newMeth(C$, 'isSubjobComplete$', function () {
return this.subjobComplete;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, '_defaultState$', function () {
var state="";
return state;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
