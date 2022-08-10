(function(){var P$=Clazz.newPackage("uk.ac.ebi.www.picr.AccessionMappingService"),I$=[[0,'java.net.URL','uk.ac.ebi.www.picr.AccessionMappingService.AccessionMapperBindingStub','uk.ac.ebi.www.picr.AccessionMappingService.AccessionMapperInterface','jalview.util.MessageManager','javax.xml.namespace.QName','java.util.HashSet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AccessionMapperServiceLocator", null, 'org.apache.axis.client.Service', 'uk.ac.ebi.www.picr.AccessionMappingService.AccessionMapperService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.AccessionMapperPort_address="http://www.ebi.ac.uk:80/Tools/picr/service";
this.AccessionMapperPortWSDDServiceName="AccessionMapperPort";
this.ports=null;
},1);

C$.$fields$=[['S',['AccessionMapperPort_address','AccessionMapperPortWSDDServiceName'],'O',['ports','java.util.HashSet']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_axis_EngineConfiguration',  function (config) {
;C$.superclazz.c$$org_apache_axis_EngineConfiguration.apply(this,[config]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessionMapperPortAddress$',  function () {
return this.AccessionMapperPort_address;
});

Clazz.newMeth(C$, 'getAccessionMapperPortWSDDServiceName$',  function () {
return this.AccessionMapperPortWSDDServiceName;
});

Clazz.newMeth(C$, 'setAccessionMapperPortWSDDServiceName$S',  function (name) {
this.AccessionMapperPortWSDDServiceName=name;
});

Clazz.newMeth(C$, 'getAccessionMapperPort$',  function () {
var endpoint;
try {
endpoint=Clazz.new_($I$(1,1).c$$S,[this.AccessionMapperPort_address]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$Throwable,[e]);
} else {
throw e;
}
}
return this.getAccessionMapperPort$java_net_URL(endpoint);
});

Clazz.newMeth(C$, 'getAccessionMapperPort$java_net_URL',  function (portAddress) {
try {
var _stub=Clazz.new_($I$(2,1).c$$java_net_URL$javax_xml_rpc_Service,[portAddress, this]);
_stub.setPortName$S(this.getAccessionMapperPortWSDDServiceName$());
return _stub;
} catch (e) {
if (Clazz.exceptionOf(e,"org.apache.axis.AxisFault")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setAccessionMapperPortEndpointAddress$S',  function (address) {
this.AccessionMapperPort_address=address;
});

Clazz.newMeth(C$, 'getPort$Class',  function (serviceEndpointInterface) {
try {
if (Clazz.getClass($I$(3),['getMappedDatabaseNames$','getUPIForAccession$S$S$SA$S$Z','getUPIForSequence$S$SA$S$Z']).isAssignableFrom$Class(serviceEndpointInterface)) {
var _stub=Clazz.new_([Clazz.new_($I$(1,1).c$$S,[this.AccessionMapperPort_address]), this],$I$(2,1).c$$java_net_URL$javax_xml_rpc_Service);
_stub.setPortName$S(this.getAccessionMapperPortWSDDServiceName$());
return _stub;
}} catch (t) {
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$Throwable,[t]);
}
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$S,[$I$(4,"formatMessage$S$SA",["exception.no_stub_implementation_for_interface", Clazz.array(String, -1, [(serviceEndpointInterface == null  ? "null" : serviceEndpointInterface.getName$())])])]);
});

Clazz.newMeth(C$, 'getPort$javax_xml_namespace_QName$Class',  function (portName, serviceEndpointInterface) {
if (portName == null ) {
return this.getPort$Class(serviceEndpointInterface);
}var inputPortName=portName.getLocalPart$();
if ("AccessionMapperPort".equals$O(inputPortName)) {
return this.getAccessionMapperPort$();
} else {
var _stub=this.getPort$Class(serviceEndpointInterface);
(_stub).setPortName$javax_xml_namespace_QName(portName);
return _stub;
}});

Clazz.newMeth(C$, 'getServiceName$',  function () {
return Clazz.new_($I$(5,1).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "AccessionMapperService"]);
});

Clazz.newMeth(C$, 'getPorts$',  function () {
if (this.ports == null ) {
this.ports=Clazz.new_($I$(6,1));
this.ports.add$O(Clazz.new_($I$(5,1).c$$S$S,["http://www.ebi.ac.uk/picr/AccessionMappingService", "AccessionMapperPort"]));
}return this.ports.iterator$();
});

Clazz.newMeth(C$, 'setEndpointAddress$S$S',  function (portName, address) {
if ("AccessionMapperPort".equals$O(portName)) {
this.setAccessionMapperPortEndpointAddress$S(address);
} else {
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$S,[$I$(4,"formatMessage$S$SA",["exception.cannot_set_endpoint_address_unknown_port", Clazz.array(String, -1, [portName])])]);
}});

Clazz.newMeth(C$, 'setEndpointAddress$javax_xml_namespace_QName$S',  function (portName, address) {
this.setEndpointAddress$S$S(portName.getLocalPart$(), address);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:45 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
