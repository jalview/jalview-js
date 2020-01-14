(function(){var P$=Clazz.newPackage("ext.vamsas"),I$=[[0,'java.net.URL','ext.vamsas.MuscleWSSoapBindingStub','ext.vamsas.MuscleWS','jalview.util.MessageManager','javax.xml.namespace.QName','java.util.HashSet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MuscleWSServiceLocator", null, 'org.apache.axis.client.Service', 'ext.vamsas.MuscleWSService');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.MuscleWS_address=null;
this.MuscleWSWSDDServiceName=null;
this.ports=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.MuscleWS_address="http://anaplog.compbio.dundee.ac.uk:8080/axis/services/MuscleWS";
this.MuscleWSWSDDServiceName="MuscleWS";
this.ports=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_axis_EngineConfiguration', function (config) {
C$.superclazz.c$$org_apache_axis_EngineConfiguration.apply(this, [config]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMuscleWSAddress$', function () {
return this.MuscleWS_address;
});

Clazz.newMeth(C$, 'getMuscleWSWSDDServiceName$', function () {
return this.MuscleWSWSDDServiceName;
});

Clazz.newMeth(C$, 'setMuscleWSWSDDServiceName$S', function (name) {
this.MuscleWSWSDDServiceName=name;
});

Clazz.newMeth(C$, 'getMuscleWS$', function () {
var endpoint;
try {
endpoint=Clazz.new_($I$(1).c$$S,[this.MuscleWS_address]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$Throwable,[e]);
} else {
throw e;
}
}
return this.getMuscleWS$java_net_URL(endpoint);
});

Clazz.newMeth(C$, 'getMuscleWS$java_net_URL', function (portAddress) {
try {
var _stub=Clazz.new_($I$(2).c$$java_net_URL$javax_xml_rpc_Service,[portAddress, this]);
_stub.setPortName$S(this.getMuscleWSWSDDServiceName$());
return _stub;
} catch (e) {
if (Clazz.exceptionOf(e,"org.apache.axis.AxisFault")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setMuscleWSEndpointAddress$S', function (address) {
this.MuscleWS_address=address;
});

Clazz.newMeth(C$, 'getPort$Class', function (serviceEndpointInterface) {
try {
if (Clazz.getClass($I$(3),['align$vamsas_objects_simple_SequenceSet','cancel$S','getResult$S','getalign$S']).isAssignableFrom$Class(serviceEndpointInterface)) {
var _stub=Clazz.new_($I$(2).c$$java_net_URL$javax_xml_rpc_Service,[Clazz.new_($I$(1).c$$S,[this.MuscleWS_address]), this]);
_stub.setPortName$S(this.getMuscleWSWSDDServiceName$());
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
if ("MuscleWS".equals$O(inputPortName)) {
return this.getMuscleWS$();
} else {
var _stub=this.getPort$Class(serviceEndpointInterface);
(_stub).setPortName$javax_xml_namespace_QName(portName);
return _stub;
}});

Clazz.newMeth(C$, 'getServiceName$', function () {
return Clazz.new_($I$(5).c$$S$S,["vamsas", "MuscleWSService"]);
});

Clazz.newMeth(C$, 'getPorts$', function () {
if (this.ports == null ) {
this.ports=Clazz.new_($I$(6));
this.ports.add$TE(Clazz.new_($I$(5).c$$S$S,["vamsas", "MuscleWS"]));
}return this.ports.iterator$();
});

Clazz.newMeth(C$, 'setEndpointAddress$S$S', function (portName, address) {
if ("MuscleWS".equals$O(portName)) {
this.setMuscleWSEndpointAddress$S(address);
} else {
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$S,[$I$(4).formatMessage$S$SA("exception.cannot_set_endpoint_address_unknown_port", Clazz.array(String, -1, [portName]))]);
}});

Clazz.newMeth(C$, 'setEndpointAddress$javax_xml_namespace_QName$S', function (portName, address) {
this.setEndpointAddress$S$S(portName.getLocalPart$(), address);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
