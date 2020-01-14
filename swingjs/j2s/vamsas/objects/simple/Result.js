(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[[0,'Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Result", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.broken=false;
this.failed=false;
this.finished=false;
this.invalid=false;
this.jobFailed=false;
this.queued=false;
this.running=false;
this.serverError=false;
this.state=0;
this.status=null;
this.suspended=false;
this.__equalsCalc=null;
this.__hashCodeCalc=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z$Z$Z$Z$Z$Z$Z$I$S$Z', function (broken, failed, finished, invalid, jobFailed, queued, running, serverError, state, status, suspended) {
C$.$init$.apply(this);
this.broken=broken;
this.failed=failed;
this.finished=finished;
this.invalid=invalid;
this.jobFailed=jobFailed;
this.queued=queued;
this.running=running;
this.serverError=serverError;
this.state=state;
this.status=status;
this.suspended=suspended;
}, 1);

Clazz.newMeth(C$, 'isBroken$', function () {
return this.broken;
});

Clazz.newMeth(C$, 'setBroken$Z', function (broken) {
this.broken=broken;
});

Clazz.newMeth(C$, 'isFailed$', function () {
return this.failed;
});

Clazz.newMeth(C$, 'setFailed$Z', function (failed) {
this.failed=failed;
});

Clazz.newMeth(C$, 'isFinished$', function () {
return this.finished;
});

Clazz.newMeth(C$, 'setFinished$Z', function (finished) {
this.finished=finished;
});

Clazz.newMeth(C$, 'isInvalid$', function () {
return this.invalid;
});

Clazz.newMeth(C$, 'setInvalid$Z', function (invalid) {
this.invalid=invalid;
});

Clazz.newMeth(C$, 'isJobFailed$', function () {
return this.jobFailed;
});

Clazz.newMeth(C$, 'setJobFailed$Z', function (jobFailed) {
this.jobFailed=jobFailed;
});

Clazz.newMeth(C$, 'isQueued$', function () {
return this.queued;
});

Clazz.newMeth(C$, 'setQueued$Z', function (queued) {
this.queued=queued;
});

Clazz.newMeth(C$, 'isRunning$', function () {
return this.running;
});

Clazz.newMeth(C$, 'setRunning$Z', function (running) {
this.running=running;
});

Clazz.newMeth(C$, 'isServerError$', function () {
return this.serverError;
});

Clazz.newMeth(C$, 'setServerError$Z', function (serverError) {
this.serverError=serverError;
});

Clazz.newMeth(C$, 'getState$', function () {
return this.state;
});

Clazz.newMeth(C$, 'setState$I', function (state) {
this.state=state;
});

Clazz.newMeth(C$, 'getStatus$', function () {
return this.status;
});

Clazz.newMeth(C$, 'setStatus$S', function (status) {
this.status=status;
});

Clazz.newMeth(C$, 'isSuspended$', function () {
return this.suspended;
});

Clazz.newMeth(C$, 'setSuspended$Z', function (suspended) {
this.suspended=suspended;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "vamsas.objects.simple.Result"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && this.broken == other.isBroken$()   && this.failed == other.isFailed$()   && this.finished == other.isFinished$()   && this.invalid == other.isInvalid$()   && this.jobFailed == other.isJobFailed$()   && this.queued == other.isQueued$()   && this.running == other.isRunning$()   && this.serverError == other.isServerError$()   && this.state == other.getState$()  && ((this.status == null  && other.getStatus$() == null  ) || (this.status != null  && this.status.equals$O(other.getStatus$()) ) )  && this.suspended == other.isSuspended$()  ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
_hashCode+=(this.isBroken$() ? $I$(1).TRUE : $I$(1).FALSE).hashCode$();
_hashCode+=(this.isFailed$() ? $I$(1).TRUE : $I$(1).FALSE).hashCode$();
_hashCode+=(this.isFinished$() ? $I$(1).TRUE : $I$(1).FALSE).hashCode$();
_hashCode+=(this.isInvalid$() ? $I$(1).TRUE : $I$(1).FALSE).hashCode$();
_hashCode+=(this.isJobFailed$() ? $I$(1).TRUE : $I$(1).FALSE).hashCode$();
_hashCode+=(this.isQueued$() ? $I$(1).TRUE : $I$(1).FALSE).hashCode$();
_hashCode+=(this.isRunning$() ? $I$(1).TRUE : $I$(1).FALSE).hashCode$();
_hashCode+=(this.isServerError$() ? $I$(1).TRUE : $I$(1).FALSE).hashCode$();
_hashCode+=this.getState$();
if (this.getStatus$() != null ) {
_hashCode+=this.getStatus$().hashCode$();
}_hashCode+=(this.isSuspended$() ? $I$(1).TRUE : $I$(1).FALSE).hashCode$();
this.__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
