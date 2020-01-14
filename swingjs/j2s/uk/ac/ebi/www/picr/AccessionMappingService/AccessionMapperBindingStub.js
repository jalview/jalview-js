(function(){var P$=Clazz.newPackage("uk.ac.ebi.www.picr.AccessionMappingService"),I$=[[0,'org.apache.axis.description.OperationDesc','java.util.Vector','javax.xml.namespace.QName','uk.ac.ebi.picr.model.UPEntry','org.apache.axis.enum.Style','org.apache.axis.enum.Use','org.apache.axis.client.Service','org.apache.axis.encoding.ser.BeanSerializerFactory','org.apache.axis.encoding.ser.BeanDeserializerFactory','org.apache.axis.encoding.ser.EnumSerializerFactory','org.apache.axis.encoding.ser.EnumDeserializerFactory','org.apache.axis.encoding.ser.ArraySerializerFactory','org.apache.axis.encoding.ser.ArrayDeserializerFactory','org.apache.axis.encoding.ser.SimpleSerializerFactory','org.apache.axis.encoding.ser.SimpleDeserializerFactory','org.apache.axis.encoding.ser.SimpleListSerializerFactory','org.apache.axis.encoding.ser.SimpleListDeserializerFactory','uk.ac.ebi.picr.model.CrossReference','org.apache.axis.AxisFault','Boolean','org.apache.axis.soap.SOAPConstants','org.apache.axis.utils.JavaUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AccessionMapperBindingStub", null, 'org.apache.axis.client.Stub', 'uk.ac.ebi.www.picr.AccessionMappingService.AccessionMapperInterface');
C$._operations=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
C$._operations=Clazz.array($I$(1), [3]);
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

Clazz.newMeth(C$, '_initOperationDesc1$', function () {
var oper;
oper=Clazz.new_($I$(1));
oper.setName$S("getUPIForSequence");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "sequence"]), Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), ($b$[0] = 1, $b$[0]), false, false);
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "searchDatabases"]), Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.array(String, -1), ($b$[0] = 1, $b$[0]), false, false);
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "taxonId"]), Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), ($b$[0] = 1, $b$[0]), false, false);
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "onlyActive"]), Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]), Boolean.TYPE, ($b$[0] = 1, $b$[0]), false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "UPEntry"]));
oper.setReturnClass$Class(Clazz.getClass($I$(4)));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "getUPIForSequenceReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(5).WRAPPED);
oper.setUse$org_apache_axis_enum_Use($I$(6).LITERAL);
C$._operations[0]=oper;
oper=Clazz.new_($I$(1));
oper.setName$S("getUPIForAccession");
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "accession"]), Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), ($b$[0] = 1, $b$[0]), false, false);
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "ac_version"]), Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), ($b$[0] = 1, $b$[0]), false, false);
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "searchDatabases"]), Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.array(String, -1), ($b$[0] = 1, $b$[0]), false, false);
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "taxonId"]), Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]), Clazz.getClass(String), ($b$[0] = 1, $b$[0]), false, false);
oper.addParameter$javax_xml_namespace_QName$javax_xml_namespace_QName$Class$B$Z$Z(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "onlyActive"]), Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "boolean"]), Boolean.TYPE, ($b$[0] = 1, $b$[0]), false, false);
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "UPEntry"]));
oper.setReturnClass$Class(Clazz.array($I$(4), -1));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "getUPIForAccessionReturn"]));
oper.setStyle$org_apache_axis_enum_Style($I$(5).WRAPPED);
oper.setUse$org_apache_axis_enum_Use($I$(6).LITERAL);
C$._operations[1]=oper;
oper=Clazz.new_($I$(1));
oper.setName$S("getMappedDatabaseNames");
oper.setReturnType$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.w3.org/2001/XMLSchema", "string"]));
oper.setReturnClass$Class(Clazz.array(String, -1));
oper.setReturnQName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "mappedDatabases"]));
oper.setStyle$org_apache_axis_enum_Style($I$(5).WRAPPED);
oper.setUse$org_apache_axis_enum_Use($I$(6).LITERAL);
C$._operations[2]=oper;
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
this.service=Clazz.new_($I$(7));
} else {
this.service=service;
}var cls;
var qName;
var beansf=Clazz.getClass($I$(8));
var beandf=Clazz.getClass($I$(9));
var enumsf=Clazz.getClass($I$(10));
var enumdf=Clazz.getClass($I$(11));
var arraysf=Clazz.getClass($I$(12));
var arraydf=Clazz.getClass($I$(13));
var simplesf=Clazz.getClass($I$(14));
var simpledf=Clazz.getClass($I$(15));
var simplelistsf=Clazz.getClass($I$(16));
var simplelistdf=Clazz.getClass($I$(17));
qName=Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "UPEntry"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.getClass($I$(4));
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(beansf);
this.cachedDeserFactories.add$TE(beandf);
qName=Clazz.new_($I$(3).c$$S$S,["http://model.picr.ebi.ac.uk", "CrossReference"]);
this.cachedSerQNames.add$TE(qName);
cls=Clazz.getClass($I$(18));
this.cachedSerClasses.add$TE(cls);
this.cachedSerFactories.add$TE(beansf);
this.cachedDeserFactories.add$TE(beandf);
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
_call.setEncodingStyle$S(null);
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

Clazz.newMeth(C$, 'getUPIForSequence$S$SA$S$Z', function (sequence, searchDatabases, taxonId, onlyActive) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[0]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("getUPIForSequence");
_call.setEncodingStyle$S(null);
_call.setProperty$S$O("sendXsiTypes", $I$(20).FALSE);
_call.setProperty$S$O("sendMultiRefs", $I$(20).FALSE);
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(21).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "getUPIForSequence"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [sequence, searchDatabases, taxonId,  Boolean.from(onlyActive)]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(22).convert$O$Class(_resp, Clazz.getClass($I$(4)));
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'getUPIForAccession$S$S$SA$S$Z', function (accession, ac_version, searchDatabases, taxonId, onlyActive) {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[1]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("getUPIForAccession");
_call.setEncodingStyle$S(null);
_call.setProperty$S$O("sendXsiTypes", $I$(20).FALSE);
_call.setProperty$S$O("sendMultiRefs", $I$(20).FALSE);
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(21).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "getUPIForAccession"]));
this.setRequestHeaders$org_apache_axis_client_Call(_call);
this.setAttachments$org_apache_axis_client_Call(_call);
var _resp=_call.invoke$OA(Clazz.array(java.lang.Object, -1, [accession, ac_version, searchDatabases, taxonId,  Boolean.from(onlyActive)]));
if (Clazz.instanceOf(_resp, "java.rmi.RemoteException")) {
throw _resp;
} else {
this.extractAttachments$org_apache_axis_client_Call(_call);
try {
return _resp;
} catch (_exception) {
if (Clazz.exceptionOf(_exception,"Exception")){
return $I$(22).convert$O$Class(_resp, Clazz.array($I$(4), -1));
} else {
throw _exception;
}
}
}});

Clazz.newMeth(C$, 'getMappedDatabaseNames$', function () {
if (this.cachedEndpoint == null ) {
throw Clazz.new_(Clazz.load('org.apache.axis.NoEndPointException'));
}var _call=this.createCall$();
_call.setOperation$org_apache_axis_description_OperationDesc(C$._operations[2]);
_call.setUseSOAPAction$Z(true);
_call.setSOAPActionURI$S("getMappedDatabaseNames");
_call.setEncodingStyle$S(null);
_call.setProperty$S$O("sendXsiTypes", $I$(20).FALSE);
_call.setProperty$S$O("sendMultiRefs", $I$(20).FALSE);
_call.setSOAPVersion$org_apache_axis_soap_SOAPConstants($I$(21).SOAP11_CONSTANTS);
_call.setOperationName$javax_xml_namespace_QName(Clazz.new_($I$(3).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "getMappedDatabaseNames"]));
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
return $I$(22).convert$O$Class(_resp, Clazz.array(String, -1));
} else {
throw _exception;
}
}
}});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
