(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),p$1={},I$=[[0,'compbio.ws.client.Services','java.util.HashSet','compbio.data.msa.Category','compbio.ws.client.Jws2Client','jalview.ws.jws2.jabaws2.Jws2InstanceFactory','jalview.bin.Cache','java.net.URL']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JabaWsServerQuery", null, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jws2Discoverer=null;
this.jwsserver=null;
this.quit=false;
this.running=false;
this.JABAWS1SERVERS=null;
this.JABAWS2SERVERS=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.jws2Discoverer=null;
this.jwsserver=null;
this.quit=false;
this.running=false;
this.JABAWS1SERVERS=Clazz.array($I$(1), -1, [$I$(1).ClustalWS, $I$(1).MuscleWS, $I$(1).MafftWS, $I$(1).ProbconsWS, $I$(1).TcoffeeWS]);
this.JABAWS2SERVERS=Clazz.array($I$(1), -1, [$I$(1).ClustalWS, $I$(1).MuscleWS, $I$(1).MafftWS, $I$(1).ProbconsWS, $I$(1).TcoffeeWS, $I$(1).AAConWS, $I$(1).DisemblWS, $I$(1).GlobPlotWS, $I$(1).IUPredWS, $I$(1).JronnWS, $I$(1).RNAalifoldWS]);
}, 1);

Clazz.newMeth(C$, 'isRunning$', function () {
return this.running;
});

Clazz.newMeth(C$, 'setQuit$Z', function (quit) {
this.quit=quit;
});

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_Jws2Discoverer$S', function (jws2Discoverer, server) {
C$.$init$.apply(this);
this.jws2Discoverer=jws2Discoverer;
this.jwsserver=server;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.running=true;
try {
if (p$1.isValidUrl$S.apply(this, [this.jwsserver])) {
var registry=null;
var svccategories=null;
var noservices=true;
var jabasws2=false;
var srv_set=Clazz.new_($I$(2));
var categories=$I$(3).getCategories$();
var svc_cat;
try {
registry=$I$(4).connectToRegistry$S(this.jwsserver);
if (registry != null ) {
jabasws2=true;
srv_set=registry.getSupportedServices$();
System.out.println$S("registry.getSupportedServices: " + srv_set.toString());
svccategories=registry.getServiceCategories$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Exception whilst trying to get at registry:");
ex.printStackTrace$();
System.err.println$S("JWS2 Discoverer: " + this.jwsserver + " is a JABAWS1 server. Using hardwired list." );
for (var srv, $srv = 0, $$srv = this.JABAWS1SERVERS; $srv<$$srv.length&&((srv=($$srv[$srv])),1);$srv++) {
srv_set.add$TE(srv);
}
} else {
throw ex;
}
}
for (var cat, $cat = categories.iterator$(); $cat.hasNext$()&&((cat=($cat.next$())),1);) {
for (var srv, $srv = cat.getServices$().iterator$(); $srv.hasNext$()&&((srv=($srv.next$())),1);) {
if (this.quit) {
this.running=false;
return;
}if (!srv_set.contains$O(srv)) {
continue;
}var service=null;
try {
service=$I$(4).connect$S$compbio_ws_client_Services(this.jwsserver, srv);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Jws2 Discoverer: Problem on " + this.jwsserver + " with service " + srv + ":\n" + e.getMessage$() );
if (!(Clazz.instanceOf(e, "javax.xml.ws.WebServiceException"))) {
e.printStackTrace$();
}this.jws2Discoverer.addInvalidServiceUrl$S(this.jwsserver);
} else {
throw e;
}
}
;if (service != null  && !$I$(5).ignoreService$S(srv.toString()) ) {
noservices=false;
var svc=null;
if (registry != null ) {
var description=registry.getServiceDescription$compbio_ws_client_Services(srv);
svc=$I$(5).newJws2Instance$S$S$S$S$compbio_data_msa_JABAService(this.jwsserver, srv.toString(), cat.name, description, service);
}if (svc == null ) {
svc=$I$(5).newJws2Instance$S$S$S$S$compbio_data_msa_JABAService(this.jwsserver, srv.toString(), cat.name, "JABAWS 1 Alignment Service", service);
}this.jws2Discoverer.addService$S$jalview_ws_jws2_jabaws2_Jws2Instance(this.jwsserver, svc);
}}
}
if (noservices) {
this.jws2Discoverer.addUrlwithnoservices$S(this.jwsserver);
}} else {
this.jws2Discoverer.addInvalidServiceUrl$S(this.jwsserver);
$I$(6).log.warn$O("Ignoring invalid Jws2 service url " + this.jwsserver);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
e.printStackTrace$();
$I$(6).log.warn$O$Throwable("Exception when discovering Jws2 services.", e);
this.jws2Discoverer.addInvalidServiceUrl$S(this.jwsserver);
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
$I$(6).log.error$O$Throwable("Exception when discovering Jws2 services.", e);
this.jws2Discoverer.addInvalidServiceUrl$S(this.jwsserver);
}
} else {
throw e$$;
}
}
this.running=false;
});

Clazz.newMeth(C$, 'isValidUrl$S', function (server) {
var result=false;
if (server != null ) {
try {
var url=Clazz.new_($I$(7).c$$S,[server]);
url.openStream$().close$();
result=true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
System.err.println$S("Invalid server URL: " + server);
result=false;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
System.err.println$S("Error connecting to server: " + server + ": " + e.toString() );
result=false;
}
} else {
throw e$$;
}
}
}return result;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
