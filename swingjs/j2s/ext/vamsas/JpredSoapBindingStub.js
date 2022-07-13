(function(){var P$=Clazz.newPackage("ext.vamsas"),I$=[[0,'org.apache.axis.description.OperationDesc','java.util.Vector','javax.xml.namespace.QName','vamsas.objects.simple.Sequence','org.apache.axis.enum.Style','org.apache.axis.enum.Use','vamsas.objects.simple.Msfalignment','vamsas.objects.simple.Secstructpred','vamsas.objects.simple.JpredResult','org.apache.axis.client.Service','org.apache.axis.encoding.ser.BeanSerializerFactory','org.apache.axis.encoding.ser.BeanDeserializerFactory','vamsas.objects.simple.Result','org.apache.axis.soap.SOAPConstants','org.apache.axis.AxisFault','org.apache.axis.utils.JavaUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JpredSoapBindingStub", null, 'org.apache.axis.client.Stub', 'ext.vamsas.Jpred');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cachedSerClasses=Clazz.new_($I$(2,1));
this.cachedSerQNames=Clazz.new_($I$(2,1));
this.cachedSerFactories=Clazz.new_($I$(2,1));
this.cachedDeserFactories=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['cachedSerClasses','java.util.Vector','+cachedSerQNames','+cachedSerFactories','+cachedDeserFactories']]
,['O',['_operations','org.apache.axis.description.OperationDesc[]']]]

Clazz.newMeth(C$, '_initOperationDesc1$',  function () {
var oper;
oper=Clazz.new_($I$(1,1));
oper.setName$S("predict");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3,1).c$$S$S,["", "seq"]), Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "Sequence"]), Clazz.getClass($I$(4)), 1, false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
oper.setReturnClass$Class(Clazz.getClass(String));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "predictReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(5).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(6).ENCODED);
C$._operations[0]=oper;
oper=Clazz.new_($I$(1,1));
oper.setName$S("predictOnMsa");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3,1).c$$S$S,["", "msf"]), Clazz.new_($I$(3,1).c$$S$S,["http://simple.objects.vamsas", "Msfalignment"]), Clazz.getClass($I$(7)), 1, false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
oper.setReturnClass$Class(Clazz.getClass(String));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "predictOnMsaReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(5).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(6).ENCODED);
C$._operations[1]=oper;
oper=Clazz.new_($I$(1,1));
oper.setName$S("getpredict");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3,1).c$$S$S,["", "job_id"]), Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), 1, false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://simple.objects.vamsas", "Secstructpred"]));
oper.setReturnClass$Class(Clazz.getClass($I$(8)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "getpredictReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(5).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(6).ENCODED);
C$._operations[2]=oper;
oper=Clazz.new_($I$(1,1));
oper.setName$S("getresult");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3,1).c$$S$S,["", "job_id"]), Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), 1, false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://simple.objects.vamsas", "JpredResult"]));
oper.setReturnClass$Class(Clazz.getClass($I$(9)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "getresultReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(5).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(6).ENCODED);
C$._operations[3]=oper;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$javax_xml_rpc_Service.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL$javax_xml_rpc_Service',  function (endpointURL, service) {
C$.c$$javax_xml_rpc_Service.apply(this, [service]);
this.cachedEndpoint=endpointURL;
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_rpc_Service',  function (service) {
Clazz.super_(C$, this);
if (service == null ) {
this.service=Clazz.new_($I$(10,1));
} else {
this.service=service;
}var cls;
var qName;
var beansf=Clazz.getClass($I$(11));
var beandf=Clazz.getClass($I$(12));
qName=Clazz.new_($I$(3,1).c$$S$S,["http://simple.objects.vamsas", "JpredResult"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(9));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "Result"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(13));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(3,1).c$$S$S,["http://simple.objects.vamsas", "Secstructpred"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(8));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(3,1).c$$S$S,["http://simple.objects.vamsas", "Msfalignment"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(7));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "Sequence"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(4));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
}, 1);

Clazz.newMeth(C$, 'createCall$',  function () {
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
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(14).SOAP11_CONSTANTS);
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
throw Clazz.new_($I$(15,1).c$$S$Throwable,["Failure trying to get the Call object", _t]);
}
});

Clazz.newMeth(C$, 'predict$vamsas_objects_simple_Sequence',  function (seq) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[0]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(14).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["vamsas", "predict"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [seq]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(16,"convert$O$Class",[_resp, Clazz.getClass(String)]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'predictOnMsa$vamsas_objects_simple_Msfalignment',  function (msf) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[1]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(14).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["vamsas", "predictOnMsa"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [msf]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(16,"convert$O$Class",[_resp, Clazz.getClass(String)]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'getpredict$S',  function (job_id) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[2]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(14).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["vamsas", "getpredict"]));
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
return $I$(16,"convert$O$Class",[_resp, Clazz.getClass($I$(8))]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'getresult$S',  function (job_id) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[3]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(14).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["vamsas", "getresult"]));
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
return $I$(16,"convert$O$Class",[_resp, Clazz.getClass($I$(9))]);
} else {
throw _exception;
}
}
}});

C$.$static$=function(){C$.$static$=0;
{
C$._operations=Clazz.array($I$(1), [4]);
C$._initOperationDesc1$();
};
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:25 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
