(function(){var P$=Clazz.newPackage("vamsas.objects.simple"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "WsJobId", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
},1);

C$.$fields$=[['Z',['__hashCodeCalc'],'I',['status'],'S',['jobId'],'O',['__equalsCalc','java.lang.Object']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (jobId, status) {
;C$.$init$.apply(this);
this.jobId=jobId;
this.status=status;
}, 1);

Clazz.newMeth(C$, 'getJobId$', function () {
return this.jobId;
});

Clazz.newMeth(C$, 'setJobId$S', function (jobId) {
this.jobId=jobId;
});

Clazz.newMeth(C$, 'getStatus$', function () {
return this.status;
});

Clazz.newMeth(C$, 'setStatus$I', function (status) {
this.status=status;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "vamsas.objects.simple.WsJobId"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.jobId == null  && other.getJobId$() == null  ) || (this.jobId != null  && this.jobId.equals$O(other.getJobId$()) ) ) && this.status == other.getStatus$()  ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getJobId$() != null ) {
_hashCode+=this.getJobId$().hashCode$();
}_hashCode+=this.getStatus$();
this.__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
