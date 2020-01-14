(function(){var P$=Clazz.newPackage("ext.vamsas"),I$=[[0,'org.apache.axis.description.OperationDesc','java.util.Vector','org.apache.axis.client.Service','org.apache.axis.encoding.ser.BeanSerializerFactory','org.apache.axis.encoding.ser.BeanDeserializerFactory','org.apache.axis.encoding.ser.ArraySerializerFactory','org.apache.axis.encoding.ser.ArrayDeserializerFactory','javax.xml.namespace.QName','vamsas.objects.simple.Sequence','vamsas.objects.simple.MsaResult','vamsas.objects.simple.SequenceSet','vamsas.objects.simple.Object','vamsas.objects.simple.Alignment','vamsas.objects.simple.WsJobId','vamsas.objects.simple.Result','org.apache.axis.enum.Style','org.apache.axis.enum.Use','org.apache.axis.soap.SOAPConstants','org.apache.axis.AxisFault','org.apache.axis.utils.JavaUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MuscleWSSoapBindingStub", null, 'org.apache.axis.client.Stub', 'ext.vamsas.MuscleWS');
C$._operations=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
C$._operations=Clazz.array($I$(1), [4]);
C$._initOperationDesc1$();
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cachedSerClasses=null;
this.cachedSerQNames=null;
this.cachedSerFactories=null;
this.cachedDeserFactories=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cachedSerClasses=Clazz.new_($I$(2));
this.cachedSerQNames=Clazz.new_($I$(2));
this.cachedSerFactories=Clazz.new_($I$(2));
this.cachedDeserFactories=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$javax_xml_rpc_Service.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL$javax_xml_rpc_Service', function (endpointURL, service) {
C$.c$$javax_xml_rpc_Service.apply(this, [service]);
this.cachedEndpoint=endpointURL;
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_rpc_Service', function (service) {
Clazz.super_(C$, this,1);
if (service == null ) {
this.service=Clazz.new_($I$(3));
} else {
this.service=service;
}var cls;
var qName;
var beansf=Clazz.getClass($I$(4));
var beandf=Clazz.getClass($I$(5));
var arraysf=Clazz.getClass($I$(6));
var arraydf=Clazz.getClass($I$(7));
qName=Clazz.new_($I$(8).c$$S$S,["simple.objects.vamsas", "Sequence"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.getClass($I$(9));
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(beansf);
this.cachedDeserFactories.add$TE(beandf);
qName=Clazz.new_($I$(8).c$$S$S,["vamsas", "ArrayOf_tns1_Sequence"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.array($I$(9), -1);
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(arraysf);
this.cachedDeserFactories.add$TE(arraydf);
qName=Clazz.new_($I$(8).c$$S$S,["simple.objects.vamsas", "MsaResult"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.getClass($I$(10));
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(beansf);
this.cachedDeserFactories.add$TE(beandf);
qName=Clazz.new_($I$(8).c$$S$S,["simple.objects.vamsas", "SequenceSet"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.getClass($I$(11));
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(beansf);
this.cachedDeserFactories.add$TE(beandf);
qName=Clazz.new_($I$(8).c$$S$S,["http://simple.objects.vamsas", "Object"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.getClass($I$(12));
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(beansf);
this.cachedDeserFactories.add$TE(beandf);
qName=Clazz.new_($I$(8).c$$S$S,["simple.objects.vamsas", "Alignment"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.getClass($I$(13));
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(beansf);
this.cachedDeserFactories.add$TE(beandf);
qName=Clazz.new_($I$(8).c$$S$S,["simple.objects.vamsas", "WsJobId"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.getClass($I$(14));
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(beansf);
this.cachedDeserFactories.add$TE(beandf);
qName=Clazz.new_($I$(8).c$$S$S,["vamsas", "ArrayOf_xsd_string"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.array(String, -1);
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(arraysf);
this.cachedDeserFactories.add$TE(arraydf);
qName=Clazz.new_($I$(8).c$$S$S,["simple.objects.vamsas", "Result"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.getClass($I$(15));
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(beansf);
this.cachedDeserFactories.add$TE(beandf);
}, 1);

Clazz.newMeth(C$, '_initOperationDesc1$', function () {
var oper;
oper=Clazz.new_($I$(1));
oper.setName$S("align");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(8).c$$S$S,["", "seqSet"]), Clazz.new_($I$(8).c$$S$S,["simple.objects.vamsas", "SequenceSet"]), Clazz.getClass($I$(11)), ($b$[0] = 1, $b$[0]), false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["simple.objects.vamsas", "WsJobId"]));
oper.setReturnClass$Class(Clazz.getClass($I$(14)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["", "alignReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(16).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(17).ENCODED);
C$._operations[0]=oper;
oper=Clazz.new_($I$(1));
oper.setName$S("getalign");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(8).c$$S$S,["", "job_id"]), Clazz.new_($I$(8).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), ($b$[0] = 1, $b$[0]), false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["simple.objects.vamsas", "Alignment"]));
oper.setReturnClass$Class(Clazz.getClass($I$(13)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["", "getalignReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(16).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(17).ENCODED);
C$._operations[1]=oper;
oper=Clazz.new_($I$(1));
oper.setName$S("getResult");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(8).c$$S$S,["", "job_id"]), Clazz.new_($I$(8).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), ($b$[0] = 1, $b$[0]), false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["simple.objects.vamsas", "MsaResult"]));
oper.setReturnClass$Class(Clazz.getClass($I$(10)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["", "getResultReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(16).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(17).ENCODED);
C$._operations[2]=oper;
oper=Clazz.new_($I$(1));
oper.setName$S("cancel");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(8).c$$S$S,["", "jobId"]), Clazz.new_($I$(8).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), ($b$[0] = 1, $b$[0]), false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["simple.objects.vamsas", "WsJobId"]));
oper.setReturnClass$Class(Clazz.getClass($I$(14)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["", "cancelReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(16).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(17).ENCODED);
C$._operations[3]=oper;
}, 1);

Clazz.newMeth(C$, 'createCall$', function () {
try {
var _call=this.service.createCall$();
if (this.maintainSessionSet) {
_call.setMaintainSession$Z(this.maintainSession);
}if (this.cachedUsername != null ) {
_call.setUsername$S(this.cachedUsername);
}if (this.cachedPassword != null ) {
_call.setPassword$S(this.cachedPassword);
}if (this.cachedEndpoint != null ) {
_call.setTargetEndpointAddress$java_net_URL(this.cachedEndpoint);
}if (this.cachedTimeout != null ) {
_call.setTimeout$Integer(this.cachedTimeout);
}if (this.cachedPortName != null ) {
_call.setPortName$javax_xml_namespace_QName(this.cachedPortName);
}var keys=this.cachedProperties.keys$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
_call.setProperty$S$O(key, this.cachedProperties.get$O(key));
}
{
if (this.firstCall$()) {
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(18).SOAP11_CONSTANTS);
_call.setEncodingStyle$S("http://schemas.xmlsoap.org/soap/encoding/");
for (var i=0; i < this.cachedSerFactories.size$(); ++i) {
var cls=this.cachedSerClasses.get$I(i);
var qName=this.cachedSerQNames.get$I(i);
var sf=this.cachedSerFactories.get$I(i);
var df=this.cachedDeserFactories.get$I(i);
_call.registerTypeMapping$Class$javax_xml_namespace_QName$Class$Class$Z(cls, qName, sf, df, false);
}
}}return _call;
} catch (_t) {
throw Clazz.new_($I$(19).c$$S$Throwable,["Failure trying to get the Call object", _t]);
}
});

Clazz.newMeth(C$, 'align$vamsas_objects_simple_SequenceSet', function (seqSet) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[0]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(18).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["vamsas", "align"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [seqSet]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(20).convert$O$Class(_resp, Clazz.getClass($I$(14)));
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'getalign$S', function (job_id) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[1]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(18).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["vamsas", "getalign"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [job_id]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(20).convert$O$Class(_resp, Clazz.getClass($I$(13)));
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'getResult$S', function (job_id) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[2]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(18).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["vamsas", "getResult"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [job_id]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(20).convert$O$Class(_resp, Clazz.getClass($I$(10)));
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'cancel$S', function (jobId) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[3]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(18).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(8).c$$S$S,["vamsas", "cancel"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [jobId]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(20).convert$O$Class(_resp, Clazz.getClass($I$(14)));
} else {
throw _exception;
}
}
}});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
