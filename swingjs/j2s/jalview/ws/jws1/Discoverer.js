(function(){var P$=Clazz.newPackage("jalview.ws.jws1"),p$1={},I$=[[0,'java.beans.PropertyChangeSupport','ext.vamsas.IRegistryServiceLocator','jalview.bin.Cache','java.util.Vector','java.util.StringTokenizer','java.net.URL','java.util.Hashtable','ext.vamsas.ServiceHandle','jalview.util.MessageManager','jalview.gui.Desktop','jalview.gui.JvOptionPane','jalview.ws.jws1.Discoverer','Thread','jalview.ws.jws1.MsaWSClient','jalview.ws.jws1.JPredClient','jalview.ws.jws1.SeqSearchWSClient']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Discoverer", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changeSupport=Clazz.new_($I$(1,1).c$$O,[this]);
},1);

C$.$fields$=[['O',['registry','ext.vamsas.IRegistry','changeSupport','java.beans.PropertyChangeSupport']]
,['Z',['reallyDiscoverServices'],'O',['RootServiceURL','java.net.URL','ServiceURLList','java.util.Vector','services','java.util.Hashtable','serviceList','java.util.Vector','serviceClientBindings','java.util.Hashtable']]]

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O', function (prop, oldvalue, newvalue) {
this.changeSupport.firePropertyChange$S$O$O(prop, oldvalue, newvalue);
});

Clazz.newMeth(C$, 'locateWebService$java_net_URL', function (WsURL) {
var loc=Clazz.new_($I$(2,1));
var server=null;
try {
server=loc.getRegistryService$java_net_URL(WsURL);
(server).setTimeout$I(60000);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(3).log.error$O$Throwable("Serious!  Service location failed\nfor URL :" + WsURL + "\n" , ex);
return null;
} else {
throw ex;
}
}
loc.getEngine$().setOption$S$O("axis", "1");
return server;
}, p$1);

Clazz.newMeth(C$, 'getDiscoveryURLS$', function () {
var urls=Clazz.new_($I$(4,1));
var RootServiceURLs=$I$(3).getDefault$S$S("DISCOVERY_URLS", "http://www.compbio.dundee.ac.uk/JalviewWS/services/ServiceRegistry");
try {
var st=Clazz.new_($I$(5,1).c$$S$S,[RootServiceURLs, ","]);
while (st.hasMoreElements$()){
var url=null;
try {
var u=Clazz.new_([url=st.nextToken$()],$I$(6,1).c$$S);
if (!urls.contains$O(u)) {
urls.add$O(u);
} else {
$I$(3).log.info$O("Ignoring duplicate url in DISCOVERY_URLS list");
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(3).log.warn$O("Problem whilst trying to make a URL from '" + ((url != null ) ? url : "<null>") + "'" );
$I$(3).log.warn$O("This was probably due to a malformed comma separated list in the DISCOVERY_URLS entry of $(HOME)/.jalview_properties)");
$I$(3).log.debug$O$Throwable("Exception was ", ex);
} else {
throw ex;
}
}
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(3).log.warn$O$Throwable("Error parsing comma separated list of urls in DISCOVERY_URLS.", ex);
} else {
throw ex;
}
}
if (urls.size$() > 0) {
return urls;
}return null;
}, 1);

Clazz.newMeth(C$, 'doDiscovery$', function () {
$I$(3).log.debug$O("(Re)-Initialising the discovery URL list.");
try {
C$.reallyDiscoverServices=$I$(3).getDefault$S$Z("DISCOVERY_START", false);
if (C$.reallyDiscoverServices) {
C$.ServiceURLList=C$.getDiscoveryURLS$();
} else {
$I$(3).log.debug$O("Setting default services");
C$.services=Clazz.new_($I$(7,1));
var defServices=Clazz.array($I$(8), -1, [Clazz.new_(["MsaWS", "Edgar, Robert C. (2004), MUSCLE: multiple sequence alignment with high accuracy and high throughput, Nucleic Acids Research 32(5), 1792-97.", "http://www.compbio.dundee.ac.uk/JalviewWS/services/MuscleWS", $I$(9).getString$S("label.muscle_multiple_protein_sequence_alignment")],$I$(8,1).c$$S$S$S$S), Clazz.new_(["MsaWS", "Katoh, K., K. Kuma, K., Toh, H.,  and Miyata, T. (2005) \"MAFFT version 5: improvement in accuracy of multiple sequence alignment.\" Nucleic Acids Research, 33 511-518", "http://www.compbio.dundee.ac.uk/JalviewWS/services/MafftWS", $I$(9).getString$S("label.mafft_multiple_sequence_alignment")],$I$(8,1).c$$S$S$S$S), Clazz.new_(["MsaWS", "Thompson, J.D., Higgins, D.G. and Gibson, T.J. (1994) CLUSTAL W: improving the sensitivity of progressive multiple sequence alignment through sequence weighting, position specific gap penalties and weight matrix choice. Nucleic Acids Research, 22 4673-4680", "http://www.compbio.dundee.ac.uk/JalviewWS/services/ClustalWS", $I$(9).getString$S("label.clustalw_multiple_sequence_alignment")],$I$(8,1).c$$S$S$S$S), Clazz.new_(["SecStrPred", "Drozdetskiy A, Cole C, Procter J & Barton GJ. (2015)\nJPred4: a protein secondary structure prediction server\nNucleic Acids Research, Web Server issue (first published 15th April 2015)\ndoi://10.1093/nar/gkv332", "http://www.compbio.dundee.ac.uk/JalviewWS/services/jpred", "JPred Secondary Structure Prediction"],$I$(8,1).c$$S$S$S$S)]);
C$.services=Clazz.new_($I$(7,1));
C$.serviceList=Clazz.new_($I$(4,1));
C$.buildServiceLists$ext_vamsas_ServiceHandleA$java_util_Vector$java_util_Hashtable(defServices, C$.serviceList, C$.services);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("jalview.rootRegistry is not a proper url!\nWas set to " + C$.RootServiceURL + "\n" + e );
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getServices$java_net_URL', function (location) {
var shs=null;
try {
$I$(3).log.debug$O("Discovering services using " + location);
shs=p$1.locateWebService$java_net_URL.apply(this, [location]).getServices$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"org.apache.axis.AxisFault")){
var f = e$$;
{
if (f.getFaultReason$().indexOf$S("(407)") > -1) {
if ($I$(10).desktop != null ) {
$I$(11,"showMessageDialog$java_awt_Component$S$S$I",[$I$(10).desktop, $I$(9).getString$S("label.set_proxy_settings"), $I$(9).getString$S("label.proxy_authorization_failed"), 2]);
}} else {
$I$(3).log.warn$O("No Discovery service at " + location);
$I$(3).log.debug$O$Throwable("Axis Fault", f);
}}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
$I$(3).log.warn$O("No Discovery service at " + location);
$I$(3).log.debug$O$Throwable("Discovery Service General Exception", e);
}
} else {
throw e$$;
}
}
if ((shs != null ) && shs.getServices$().length > 0 ) {
return shs.getServices$();
}return null;
}, p$1);

Clazz.newMeth(C$, 'buildServiceLists$ext_vamsas_ServiceHandleA$java_util_Vector$java_util_Hashtable', function (sh, cat, sscat) {
var seenNewDiscovery=false;
for (var i=0, j=sh.length; i < j; i++) {
if (!cat.contains$O(sh[i])) {
$I$(3).log.debug$O("A " + sh[i].getAbstractName$() + " service called " + sh[i].getName$() + " exists at " + sh[i].getEndpointURL$() + "\n" );
if (!sscat.containsKey$O(sh[i].getAbstractName$())) {
sscat.put$O$O(sh[i].getAbstractName$(), cat=Clazz.new_($I$(4,1)));
} else {
cat=sscat.get$O(sh[i].getAbstractName$());
}cat.add$O(sh[i]);
if (sh[i].getAbstractName$().equals$O("Registry")) {
for (var s=0, sUrls=C$.ServiceURLList.size$(); s < sUrls; s++) {
var disc_serv=null;
try {
disc_serv=Clazz.new_([sh[i].getEndpointURL$()],$I$(6,1).c$$S);
if (!C$.ServiceURLList.contains$O(disc_serv)) {
$I$(3).log.debug$O("Adding new discovery service at " + disc_serv);
C$.ServiceURLList.add$O(disc_serv);
seenNewDiscovery=true;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3).log.debug$O$Throwable("Ignoring bad discovery service URL " + sh[i].getEndpointURL$(), e);
} else {
throw e;
}
}
}
}}}
return seenNewDiscovery;
}, 1);

Clazz.newMeth(C$, 'discoverServices$', function () {
var sscat=Clazz.new_($I$(7,1));
var cat=Clazz.new_($I$(4,1));
var sh=null;
var s_url=0;
if (C$.ServiceURLList == null ) {
$I$(3).log.debug$O("No service endpoints to use for service discovery.");
return;
}while (s_url < C$.ServiceURLList.size$()){
if ((sh=p$1.getServices$java_net_URL.apply(this, [C$.ServiceURLList.get$I(s_url)])) != null ) {
C$.buildServiceLists$ext_vamsas_ServiceHandleA$java_util_Vector$java_util_Hashtable(sh, cat, sscat);
} else {
$I$(3).log.warn$O("No services at " + (C$.ServiceURLList.get$I(s_url)) + " - check DISCOVERY_URLS property in .jalview_properties" );
}s_url++;
}
var oldServices=C$.services;
C$.services=sscat;
C$.serviceList=cat;
this.changeSupport.firePropertyChange$S$O$O("services", oldServices, C$.services);
});

Clazz.newMeth(C$, 'run$', function () {
var discoverer=this;
var discoverThread=((P$.Discoverer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Discoverer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
$I$(12).doDiscovery$();
this.$finals$.discoverer.discoverServices$();
});
})()
), Clazz.new_($I$(13,1),[this, {discoverer:discoverer}],P$.Discoverer$1));
discoverThread.start$();
});

Clazz.newMeth(C$, 'getServiceClient$ext_vamsas_ServiceHandle', function (sh) {
if (C$.serviceClientBindings == null ) {
C$.serviceClientBindings=Clazz.new_($I$(7,1));
C$.serviceClientBindings.put$O$O("MsaWS", Clazz.new_($I$(14,1)));
C$.serviceClientBindings.put$O$O("SecStrPred", Clazz.new_($I$(15,1)));
C$.serviceClientBindings.put$O$O("SeqSearch", Clazz.new_($I$(16,1)));
}var instance=C$.serviceClientBindings.get$O(sh.getAbstractName$());
if (instance == null ) {
System.err.println$S("WARNING - POSSIBLE IMPLEMENTATION ERROR - cannot find WSClient implementation for " + sh.getAbstractName$());
} else {
instance.serviceHandle=sh;
}return instance;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.RootServiceURL=null;
C$.ServiceURLList=null;
C$.reallyDiscoverServices=true;
C$.services=null;
C$.serviceList=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
