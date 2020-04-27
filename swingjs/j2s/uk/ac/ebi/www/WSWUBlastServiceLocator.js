(function(){var P$=Clazz.newPackage("uk.ac.ebi.www"),I$=[[0,'java.net.URL','uk.ac.ebi.www.WSWUBlastSoapBindingStub','uk.ac.ebi.www.WSWUBlast','jalview.util.MessageManager','javax.xml.namespace.QName','java.util.HashSet']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WSWUBlastServiceLocator", null, 'org.apache.axis.client.Service', 'uk.ac.ebi.www.WSWUBlastService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.WSWUBlast_address="http://www.ebi.ac.uk/~alabarga/cgi-bin/webservices/WSWUBlast";
this.WSWUBlastWSDDServiceName="WSWUBlast";
this.ports=null;
},1);

C$.$fields$=[['S',['WSWUBlast_address','WSWUBlastWSDDServiceName'],'O',['ports','java.util.HashSet']]]

Clazz.newMeth(C$, 'getWSWUBlastAddress$', function () {
return "http://www.ebi.ac.uk/~alabarga/cgi-bin/webservices/WSWUBlast";
});

Clazz.newMeth(C$, 'getWSWUBlastWSDDServiceName$', function () {
return this.WSWUBlastWSDDServiceName;
});

Clazz.newMeth(C$, 'setWSWUBlastWSDDServiceName$S', function (name) {
this.WSWUBlastWSDDServiceName=name;
});

Clazz.newMeth(C$, 'getWSWUBlast$', function () {
var endpoint;
try {
endpoint=Clazz.new_($I$(1,1).c$$S,["http://www.ebi.ac.uk/~alabarga/cgi-bin/webservices/WSWUBlast"]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
return this.getWSWUBlast$java_net_URL(endpoint);
});

Clazz.newMeth(C$, 'getWSWUBlast$java_net_URL', function (portAddress) {
try {
var _stub=Clazz.new_($I$(2,1).c$$java_net_URL$javax_xml_rpc_Service,[portAddress, this]);
_stub.setPortName$S(this.getWSWUBlastWSDDServiceName$());
return _stub;
} catch (e) {
if (Clazz.exceptionOf(e,"org.apache.axis.AxisFault")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getPort$Class', function (serviceEndpointInterface) {
try {
if (Clazz.getClass($I$(3),['checkStatus$S','doWUBlast$uk_ac_ebi_www_InputParams$BA','getResults$S','poll$S$S','polljob$S$S','runWUBlast$uk_ac_ebi_www_InputParams$uk_ac_ebi_www_DataA','test$S$S']).isAssignableFrom$Class(serviceEndpointInterface)) {
var _stub=Clazz.new_([Clazz.new_($I$(1,1).c$$S,["http://www.ebi.ac.uk/~alabarga/cgi-bin/webservices/WSWUBlast"]), this],$I$(2,1).c$$java_net_URL$javax_xml_rpc_Service);
_stub.setPortName$S(this.getWSWUBlastWSDDServiceName$());
return _stub;
}} catch (t) {
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$Throwable,[t]);
}
throw Clazz.new_(Clazz.load('javax.xml.rpc.ServiceException').c$$S,[$I$(4,"formatMessage$S$SA",["exception.no_stub_implementation_for_interface", Clazz.array(String, -1, [(serviceEndpointInterface == null  ? "null" : serviceEndpointInterface.getName$())])])]);
});

Clazz.newMeth(C$, 'getPort$javax_xml_namespace_QName$Class', function (portName, serviceEndpointInterface) {
var _stub=this.getPort$Class(serviceEndpointInterface);
(_stub).setPortName$javax_xml_namespace_QName(portName);
return _stub;
});

Clazz.newMeth(C$, 'getServiceName$', function () {
return Clazz.new_($I$(5,1).c$$S$S,["http://www.ebi.ac.uk/WSWUBlast", "WSWUBlastService"]);
});

Clazz.newMeth(C$, 'getPorts$', function () {
if (this.ports == null ) {
this.ports=Clazz.new_($I$(6,1));
this.ports.add$O(Clazz.new_($I$(5,1).c$$S,["WSWUBlast"]));
}return this.ports.iterator$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
