(function(){var P$=Clazz.newPackage("ext.vamsas"),I$=[[0,'org.apache.axis.description.OperationDesc','java.util.Vector','javax.xml.namespace.QName','org.apache.axis.enum.Style','org.apache.axis.enum.Use','vamsas.objects.simple.SeqSearchResult','vamsas.objects.simple.Alignment','vamsas.objects.simple.WsJobId','vamsas.objects.simple.Sequence','org.apache.axis.client.Service','org.apache.axis.encoding.ser.BeanSerializerFactory','org.apache.axis.encoding.ser.BeanDeserializerFactory','org.apache.axis.encoding.ser.EnumSerializerFactory','org.apache.axis.encoding.ser.EnumDeserializerFactory','org.apache.axis.encoding.ser.ArraySerializerFactory','org.apache.axis.encoding.ser.ArrayDeserializerFactory','org.apache.axis.encoding.ser.SimpleSerializerFactory','org.apache.axis.encoding.ser.SimpleDeserializerFactory','org.apache.axis.encoding.ser.SimpleListSerializerFactory','org.apache.axis.encoding.ser.SimpleListDeserializerFactory','vamsas.objects.simple.Result','vamsas.objects.simple.Object','vamsas.objects.simple.SequenceSet','org.apache.axis.soap.SOAPConstants','org.apache.axis.AxisFault','org.apache.axis.utils.JavaUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SeqSearchServiceSoapBindingStub", null, 'org.apache.axis.client.Stub', 'ext.vamsas.SeqSearchI');

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
oper.setName$S("getDatabase");
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
oper.setReturnClass$Class(Clazz.getClass(String));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "getDatabaseReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(4).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(5).ENCODED);
C$._operations[0]=oper;
oper=Clazz.new_($I$(1,1));
oper.setName$S("getResult");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3,1).c$$S$S,["", "job_id"]), Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), 1, false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "SeqSearchResult"]));
oper.setReturnClass$Class(Clazz.getClass($I$(6)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "getResultReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(4).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(5).ENCODED);
C$._operations[1]=oper;
oper=Clazz.new_($I$(1,1));
oper.setName$S("psearch");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3,1).c$$S$S,["", "al"]), Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "Alignment"]), Clazz.getClass($I$(7)), 1, false, false);
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3,1).c$$S$S,["", "database"]), Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), 1, false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "WsJobId"]));
oper.setReturnClass$Class(Clazz.getClass($I$(8)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "psearchReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(4).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(5).ENCODED);
C$._operations[2]=oper;
oper=Clazz.new_($I$(1,1));
oper.setName$S("search");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3,1).c$$S$S,["", "s"]), Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "Sequence"]), Clazz.getClass($I$(9)), 1, false, false);
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3,1).c$$S$S,["", "database"]), Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), 1, false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "WsJobId"]));
oper.setReturnClass$Class(Clazz.getClass($I$(8)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "searchReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(4).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(5).ENCODED);
C$._operations[3]=oper;
oper=Clazz.new_($I$(1,1));
oper.setName$S("cancel");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3,1).c$$S$S,["", "jobId"]), Clazz.new_($I$(3,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), 1, false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "WsJobId"]));
oper.setReturnClass$Class(Clazz.getClass($I$(8)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["", "cancelReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(4).RPC);
oper.setUse$org_apache_axis_enum_Use($I$(5).ENCODED);
C$._operations[4]=oper;
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
var enumsf=Clazz.getClass($I$(13));
var enumdf=Clazz.getClass($I$(14));
var arraysf=Clazz.getClass($I$(15));
var arraydf=Clazz.getClass($I$(16));
var simplesf=Clazz.getClass($I$(17));
var simpledf=Clazz.getClass($I$(18));
var simplelistsf=Clazz.getClass($I$(19));
var simplelistdf=Clazz.getClass($I$(20));
qName=Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "Result"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(21));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "WsJobId"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(8));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(3,1).c$$S$S,["http://simple.objects.vamsas", "Object"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(22));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(3,1).c$$S$S,["vamsas", "ArrayOf_xsd_string"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.array(String, -1);
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(arraysf);
this.cachedDeserFactories.add$O(arraydf);
qName=Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "Alignment"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(7));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "Sequence"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(9));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(3,1).c$$S$S,["vamsas", "ArrayOf_tns1_Sequence"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.array($I$(9), -1);
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(arraysf);
this.cachedDeserFactories.add$O(arraydf);
qName=Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "SeqSearchResult"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(6));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(3,1).c$$S$S,["simple.objects.vamsas", "SequenceSet"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(23));
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
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(24).SOAP11_CONSTANTS);
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
throw Clazz.new_($I$(25,1).c$$S$Throwable,["Failure trying to get the Call object", _t]);
}
});

Clazz.newMeth(C$, 'getDatabase$',  function () {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[0]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(24).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["vamsas", "getDatabase"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, []));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(26,"convert$O$Class",[_resp, Clazz.getClass(String)]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'getResult$S',  function (job_id) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[1]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(24).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["vamsas", "getResult"]));
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
return $I$(26,"convert$O$Class",[_resp, Clazz.getClass($I$(6))]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'psearch$vamsas_objects_simple_Alignment$S',  function (al, database) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[2]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(24).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["vamsas", "psearch"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [al, database]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(26,"convert$O$Class",[_resp, Clazz.getClass($I$(8))]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'search$vamsas_objects_simple_Sequence$S',  function (s, database) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[3]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(24).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["vamsas", "search"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [s, database]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(26,"convert$O$Class",[_resp, Clazz.getClass($I$(8))]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'cancel$S',  function (jobId) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[4]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("");
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(24).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3,1).c$$S$S,["vamsas", "cancel"]));
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
return $I$(26,"convert$O$Class",[_resp, Clazz.getClass($I$(8))]);
} else {
throw _exception;
}
}
}});

C$.$static$=function(){C$.$static$=0;
{
C$._operations=Clazz.array($I$(1), [5]);
C$._initOperationDesc1$();
};
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:25 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
