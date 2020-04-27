(function(){var P$=Clazz.newPackage("uk.ac.ebi.www"),p$1={},I$=[[0,'java.util.Vector','org.apache.axis.client.Service','org.apache.axis.encoding.ser.BeanSerializerFactory','org.apache.axis.encoding.ser.BeanDeserializerFactory','org.apache.axis.encoding.ser.EnumSerializerFactory','org.apache.axis.encoding.ser.EnumDeserializerFactory','org.apache.axis.encoding.ser.ArraySerializerFactory','org.apache.axis.encoding.ser.ArrayDeserializerFactory','org.apache.axis.encoding.ser.SimpleSerializerFactory','org.apache.axis.encoding.ser.SimpleDeserializerFactory','javax.xml.namespace.QName','uk.ac.ebi.www.InputParams','uk.ac.ebi.www.WSFile','uk.ac.ebi.www.Data','org.apache.axis.AxisFault','javax.xml.rpc.ParameterMode','org.apache.axis.utils.JavaUtils']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WSWUBlastSoapBindingStub", null, 'org.apache.axis.client.Stub', 'uk.ac.ebi.www.WSWUBlast');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cachedSerClasses=Clazz.new_($I$(1,1));
this.cachedSerQNames=Clazz.new_($I$(1,1));
this.cachedSerFactories=Clazz.new_($I$(1,1));
this.cachedDeserFactories=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['cachedSerClasses','java.util.Vector','+cachedSerQNames','+cachedSerFactories','+cachedDeserFactories']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$javax_xml_rpc_Service.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL$javax_xml_rpc_Service', function (endpointURL, service) {
C$.c$$javax_xml_rpc_Service.apply(this, [service]);
this.cachedEndpoint=endpointURL;
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_rpc_Service', function (service) {
Clazz.super_(C$, this);
if (service == null ) {
this.service=Clazz.new_($I$(2,1));
} else {
this.service=service;
}var cls;
var qName;
var beansf=Clazz.getClass($I$(3));
var beandf=Clazz.getClass($I$(4));
var enumsf=Clazz.getClass($I$(5));
var enumdf=Clazz.getClass($I$(6));
var arraysf=Clazz.getClass($I$(7));
var arraydf=Clazz.getClass($I$(8));
var simplesf=Clazz.getClass($I$(9));
var simpledf=Clazz.getClass($I$(10));
qName=Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "inputParams"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(12));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "WSArrayofFile"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.array($I$(13), -1);
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(arraysf);
this.cachedDeserFactories.add$O(arraydf);
qName=Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "WSArrayofData"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.array($I$(14), -1);
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(arraysf);
this.cachedDeserFactories.add$O(arraydf);
qName=Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "data"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(14));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
qName=Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "WSFile"]);
this.cachedSerQNames.add$O(qName);
cls=Clazz.getClass($I$(13));
this.cachedSerClasses.add$O(cls);
this.cachedSerFactories.add$O(beansf);
this.cachedDeserFactories.add$O(beandf);
}, 1);

Clazz.newMeth(C$, 'createCall', function () {
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
if (_call.isPropertySupported$S(key)) {
_call.setProperty$S$O(key, this.cachedProperties.get$O(key));
}}
{
if (this.firstCall$()) {
_call.setEncodingStyle$S("http://schemas.xmlsoap.org/soap/encoding/");
for (var i=0; i < this.cachedSerFactories.size$(); ++i) {
var cls=this.cachedSerClasses.get$I(i);
var qName=this.cachedSerQNames.get$I(i);
var sf=this.cachedSerFactories.get$I(i);
var df=this.cachedDeserFactories.get$I(i);
_call.registerTypeMapping$Class$javax_xml_namespace_QName$Class$Class$Z(cls, qName, sf, df, false);
}
}}return _call;
} catch (t) {
throw Clazz.new_($I$(15,1).c$$S$Throwable,["Failure trying to get the Call object", t]);
}
}, p$1);

Clazz.newMeth(C$, 'poll$S$S', function (jobid, type) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=p$1.createCall.apply(this, []);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "jobid"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), $I$(16).IN);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "type"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), $I$(16).IN);
_call.setReturnType$javax_xml_namespace_QName$Class(Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "base64Binary"]), Clazz.array(Byte.TYPE, -1));
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("http://www.ebi.ac.uk/WSWUBlast#poll");
_call.setOperationStyle$S("rpc");
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "poll"]));
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [jobid, type]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(17,"convert$O$Class",[_resp, Clazz.array(Byte.TYPE, -1)]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'runWUBlast$uk_ac_ebi_www_InputParams$uk_ac_ebi_www_DataA', function (params, content) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=p$1.createCall.apply(this, []);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "params"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "inputParams"]), Clazz.getClass($I$(12)), $I$(16).IN);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "content"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "WSArrayofData"]), Clazz.array($I$(14), -1), $I$(16).IN);
_call.setReturnType$javax_xml_namespace_QName$Class(Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String));
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("http://www.ebi.ac.uk/WSWUBlast#runWUBlast");
_call.setOperationStyle$S("rpc");
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "runWUBlast"]));
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [params, content]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(17,"convert$O$Class",[_resp, Clazz.getClass(String)]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'test$S$S', function (jobid, type) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=p$1.createCall.apply(this, []);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "jobid"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), $I$(16).IN);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "type"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), $I$(16).IN);
_call.setReturnType$javax_xml_namespace_QName$Class(Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "base64Binary"]), Clazz.array(Byte.TYPE, -1));
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("http://www.ebi.ac.uk/WSWUBlast#test");
_call.setOperationStyle$S("rpc");
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "test"]));
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [jobid, type]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(17,"convert$O$Class",[_resp, Clazz.array(Byte.TYPE, -1)]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'checkStatus$S', function (jobid) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=p$1.createCall.apply(this, []);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "jobid"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), $I$(16).IN);
_call.setReturnType$javax_xml_namespace_QName$Class(Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String));
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("http://www.ebi.ac.uk/WSWUBlast#checkStatus");
_call.setOperationStyle$S("rpc");
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "checkStatus"]));
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [jobid]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(17,"convert$O$Class",[_resp, Clazz.getClass(String)]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'getResults$S', function (jobid) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=p$1.createCall.apply(this, []);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "jobid"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), $I$(16).IN);
_call.setReturnType$javax_xml_namespace_QName$Class(Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "WSArrayofFile"]), Clazz.array($I$(13), -1));
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("http://www.ebi.ac.uk/WSWUBlast#getResults");
_call.setOperationStyle$S("rpc");
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "getResults"]));
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [jobid]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(17,"convert$O$Class",[_resp, Clazz.array($I$(13), -1)]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'polljob$S$S', function (jobid, outformat) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=p$1.createCall.apply(this, []);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "jobid"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), $I$(16).IN);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "outformat"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), $I$(16).IN);
_call.setReturnType$javax_xml_namespace_QName$Class(Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "base64Binary"]), Clazz.array(Byte.TYPE, -1));
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("http://www.ebi.ac.uk/WSWUBlast#polljob");
_call.setOperationStyle$S("rpc");
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "polljob"]));
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [jobid, outformat]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(17,"convert$O$Class",[_resp, Clazz.array(Byte.TYPE, -1)]);
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'doWUBlast$uk_ac_ebi_www_InputParams$BA', function (params, content) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=p$1.createCall.apply(this, []);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "params"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "inputParams"]), Clazz.getClass($I$(12)), $I$(16).IN);
_call.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$javax_xml_rpc_ParameterMode(Clazz.new_($I$(11,1).c$$S$S,["", "content"]), Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "base64Binary"]), Clazz.array(Byte.TYPE, -1), $I$(16).IN);
_call.setReturnType$javax_xml_namespace_QName$Class(Clazz.new_($I$(11,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "base64Binary"]), Clazz.array(Byte.TYPE, -1));
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("http://www.ebi.ac.uk/WSWUBlast#doWUBlast");
_call.setOperationStyle$S("rpc");
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(11,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "doWUBlast"]));
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [params, content]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(17,"convert$O$Class",[_resp, Clazz.array(Byte.TYPE, -1)]);
} else {
throw _exception;
}
}
}});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
