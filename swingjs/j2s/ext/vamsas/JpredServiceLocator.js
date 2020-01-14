(function(){var P$=Clazz.newPackage("ext.vamsas"),I$=[[0,'java.net.URL','ext.vamsas.JpredSoapBindingStub','ext.vamsas.Jpred','jalview.util.MessageManager','javax.xml.namespace.QName','java.util.HashSet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JpredServiceLocator", null, 'org.apache.axis.client.Service', 'ext.vamsas.JpredService');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jpred_address=null;
this.jpredWSDDServiceName=null;
this.ports=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.jpred_address="http://www.compbio.dundee.ac.uk/JalviewWS/services/jpred";
this.jpredWSDDServiceName="jpred";
this.ports=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_axis_EngineConfiguration', function (config) {
C$.superclazz.c$$org_apache_axis_EngineConfiguration.apply(this, [config]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getjpredAddress$', function () {
return this.jpred_address;
});

Clazz.newMeth(C$, 'getjpredWSDDServiceName$', function () {
return this.jpredWSDDServiceName;
});

Clazz.newMeth(C$, 'setjpredWSDDServiceName$S', function (name) {
this.jpredWSDDServiceName=name;
});

Clazz.newMeth(C$, 'getjpred$', function () {
var endpoint;
try {
endpoint=Clazz.new_($I$(1).c$$S,[this.jpred_address]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$Throwable,[e]);
} else {
throw e;
}
}
return this.getjpred$java_net_URL(endpoint);
});

Clazz.newMeth(C$, 'getjpred$java_net_URL', function (portAddress) {
try {
var _stub=Clazz.new_($I$(2).c$$java_net_URL$javax_xml_rpc_Service,[portAddress, this]);
_stub.setPortName$S(this.getjpredWSDDServiceName$());
return _stub;
} catch (e) {
if (Clazz.exceptionOf(e,"org.apache.axis.AxisFault")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setjpredEndpointAddress$S', function (address) {
this.jpred_address=address;
});

Clazz.newMeth(C$, 'getPort$Class', function (serviceEndpointInterface) {
try {
if (Clazz.getClass($I$(3),['getpredict$S','getresult$S','predict$vamsas_objects_simple_Sequence','predictOnMsa$vamsas_objects_simple_Msfalignment']).isAssignableFrom$Class(serviceEndpointInterface)) {
var _stub=Clazz.new_($I$(2).c$$java_net_URL$javax_xml_rpc_Service,[Clazz.new_($I$(1).c$$S,[this.jpred_address]), this]);
_stub.setPortName$S(this.getjpredWSDDServiceName$());
return _stub;
}} catch (t) {
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$Throwable,[t]);
}
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$S,[$I$(4).formatMessage$S$SA("exception.no_stub_implementation_for_interface", Clazz.array(String, -1, [(serviceEndpointInterface == null  ? "null" : serviceEndpointInterface.getName$())]))]);
});

Clazz.newMeth(C$, 'getPort$javax_xml_namespace_QName$Class', function (portName, serviceEndpointInterface) {
if (portName == null ) {
return this.getPort$Class(serviceEndpointInterface);
}var inputPortName=portName.getLocalPart$();
if ("jpred".equals$O(inputPortName)) {
return this.getjpred$();
} else {
var _stub=this.getPort$Class(serviceEndpointInterface);
(_stub).setPortName$javax_xml_namespace_QName(portName);
return _stub;
}});

Clazz.newMeth(C$, 'getServiceName$', function () {
return Clazz.new_($I$(5).c$$S$S,["vamsas", "jpredService"]);
});

Clazz.newMeth(C$, 'getPorts$', function () {
if (this.ports == null ) {
this.ports=Clazz.new_($I$(6));
this.ports.add$TE(Clazz.new_($I$(5).c$$S$S,["vamsas", "jpred"]));
}return this.ports.iterator$();
});

Clazz.newMeth(C$, 'setEndpointAddress$S$S', function (portName, address) {
if ("jpred".equals$O(portName)) {
this.setjpredEndpointAddress$S(address);
} else {
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$S,[$I$(4).formatMessage$S$SA("exception.cannot_set_endpoint_address_unknown_port", Clazz.array(String, -1, [portName]))]);
}});

Clazz.newMeth(C$, 'setEndpointAddress$javax_xml_namespace_QName$S', function (portName, address) {
this.setEndpointAddress$S$S(portName.getLocalPart$(), address);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
