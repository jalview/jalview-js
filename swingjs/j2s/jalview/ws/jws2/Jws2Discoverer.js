(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),p$1={},I$=[[0,'java.beans.PropertyChangeSupport','java.util.HashMap','jalview.bin.Cache','Thread','java.util.HashSet','java.util.Vector','java.util.ArrayList','jalview.ws.jws2.JabaWsServerQuery','jalview.ws.jws2.jabaws2.Jws2Instance','jalview.util.QuickSort','jalview.gui.JvSwingUtils','javax.swing.JMenuItem','java.awt.Color','jalview.gui.Desktop','jalview.util.MessageManager','javax.swing.JMenu','java.util.Hashtable','StringBuilder','java.util.StringTokenizer','java.net.URL','compbio.ws.client.WSTester','StringBuffer','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Jws2Discoverer", null, null, ['Runnable', 'jalview.ws.WSMenuEntryProviderI']);
C$.discoverer=null;
C$.testUrls=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.testUrls=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.preferredUrl=null;
this.changeSupport=null;
this.invalidServiceUrls=null;
this.urlsWithoutServices=null;
this.validServiceUrls=null;
this.running=false;
this.aborted=false;
this.oldthread=null;
this.services=null;
this.preferredServiceMap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.changeSupport=Clazz.new_($I$(1).c$$O,[this]);
this.invalidServiceUrls=null;
this.urlsWithoutServices=null;
this.validServiceUrls=null;
this.running=false;
this.aborted=false;
this.oldthread=null;
this.preferredServiceMap=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'isAborted$', function () {
return this.aborted;
});

Clazz.newMeth(C$, 'setAborted$Z', function (aborted) {
this.aborted=aborted;
});

Clazz.newMeth(C$, 'run$', function () {
if (this.running && this.oldthread != null   && this.oldthread.isAlive$() ) {
if (!this.aborted) {
return;
}while (this.running){
try {
$I$(3).log.debug$O("Waiting around for old discovery thread to finish.");
$I$(4).sleep$J(100);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
this.aborted=false;
$I$(3).log.debug$O("Old discovery thread has finished.");
}this.running=true;
var ignoredServices=Clazz.new_($I$(5));
for (var ignored, $ignored = 0, $$ignored = $I$(3).getDefault$S$S("IGNORED_JABAWS_SERVICETYPES", "").split$S("\\|"); $ignored<$$ignored.length&&((ignored=($$ignored[$ignored])),1);$ignored++) {
ignoredServices.add$TE(ignored);
}
this.changeSupport.firePropertyChange$S$O$O("services", this.services, Clazz.new_($I$(6)));
this.oldthread=$I$(4).currentThread$();
try {
var foo=this.getClass$().getClassLoader$().loadClass$S("compbio.ws.client.Jws2Client");
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
System.err.println$S("Not enabling JABA Webservices : client jar is not available.\nPlease check that your webstart JNLP file is up to date!");
this.running=false;
return;
} else {
throw e;
}
}
if (this.services != null ) {
this.services.removeAllElements$();
}if (this.urlsWithoutServices != null ) {
this.urlsWithoutServices.removeAllElements$();
}if (this.invalidServiceUrls != null ) {
this.invalidServiceUrls.removeAllElements$();
}if (this.validServiceUrls != null ) {
this.validServiceUrls.removeAllElements$();
}var svctypes=Clazz.new_($I$(7));
var qrys=Clazz.new_($I$(7));
for (var jwsserver, $jwsserver = this.getServiceUrls$().iterator$(); $jwsserver.hasNext$()&&((jwsserver=($jwsserver.next$())),1);) {
var squery=Clazz.new_($I$(8).c$$jalview_ws_jws2_Jws2Discoverer$S,[this, jwsserver]);
if (svctypes.size$() == 0) {
for (var sv, $sv = 0, $$sv = squery.JABAWS2SERVERS; $sv<$$sv.length&&((sv=($$sv[$sv])),1);$sv++) {
if (!ignoredServices.contains$O(sv.toString())) {
svctypes.add$TE(sv.toString());
}}
}qrys.add$TE(squery);
Clazz.new_($I$(4).c$$Runnable,[squery]).start$();
}
var finished=true;
do {
finished=true;
try {
$I$(4).sleep$J(100);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
for (var squery, $squery = qrys.iterator$(); $squery.hasNext$()&&((squery=($squery.next$())),1);) {
if (squery.isRunning$()) {
finished=false;
}}
if (this.aborted) {
$I$(3).log.debug$O("Aborting " + qrys.size$() + " JABAWS discovery threads." );
for (var squery, $squery = qrys.iterator$(); $squery.hasNext$()&&((squery=($squery.next$())),1);) {
squery.setQuit$Z(true);
}
}} while (!this.aborted && !finished );
if (!this.aborted) {
if (this.services != null  && this.services.size$() > 0 ) {
var svcs=Clazz.array($I$(9), [this.services.size$()]);
var spos=Clazz.array(Integer.TYPE, [this.services.size$()]);
var ipos=0;
var svcUrls=this.getServiceUrls$();
for (var svc, $svc = this.services.iterator$(); $svc.hasNext$()&&((svc=($svc.next$())),1);) {
svcs[ipos]=svc;
spos[ipos++]=1000 * svcUrls.indexOf$O(svc.getHost$()) + 1 + svctypes.indexOf$O(svc.serviceType);
}
$I$(10).sort$IA$OA(spos, svcs);
this.services=Clazz.new_($I$(6));
for (var svc, $svc = 0, $$svc = svcs; $svc<$$svc.length&&((svc=($$svc[$svc])),1);$svc++) {
if (!ignoredServices.contains$O(svc.serviceType)) {
this.services.add$TE(svc);
}}
}}this.oldthread=null;
this.running=false;
this.changeSupport.firePropertyChange$S$O$O("services", Clazz.new_($I$(6)), this.services);
});

Clazz.newMeth(C$, 'addService$S$jalview_ws_jws2_jabaws2_Jws2Instance', function (jwsservers, service) {
if (this.services == null ) {
this.services=Clazz.new_($I$(6));
}System.out.println$S("Discovered service: " + jwsservers + " " + service.toString() );
this.services.add$TE(service);
var pds=service.getParamStore$();
if (pds != null ) {
pds.getPresets$();
}service.hasParameters$();
if (this.validServiceUrls == null ) {
this.validServiceUrls=Clazz.new_($I$(6));
}this.validServiceUrls.add$TE(jwsservers);
});

Clazz.newMeth(C$, ['attachWSMenuEntry$javax_swing_JMenu$jalview_gui_AlignFrame','attachWSMenuEntry$'], function (wsmenu, alignFrame) {
p$1.populateWSMenuEntry$javax_swing_JMenu$jalview_gui_AlignFrame$S.apply(this, [wsmenu, alignFrame, null]);
});

Clazz.newMeth(C$, 'isRecalculable$S', function (action) {
return (action != null  && action.equalsIgnoreCase$S("conservation") );
}, p$1);

Clazz.newMeth(C$, 'populateWSMenuEntry$javax_swing_JMenu$jalview_gui_AlignFrame$S', function (jws2al, alignFrame, typeFilter) {
if (this.running || this.services == null   || this.services.size$() == 0 ) {
return;
}var atpoint;
var enumerableServices=Clazz.new_($I$(7));
var preferredHosts=Clazz.new_($I$(2));
var alternates=Clazz.new_($I$(2));
for (var service, $service = 0, $$service = this.services.toArray$TTA(Clazz.array($I$(9), [0])); $service<$$service.length&&((service=($$service[$service])),1);$service++) {
if (!p$1.isRecalculable$S.apply(this, [service.action])) {
enumerableServices.add$TE(service);
} else {
if (!preferredHosts.containsKey$O(service.serviceType)) {
var preferredInstance=this.getPreferredServiceFor$jalview_gui_AlignFrame$S(alignFrame, service.serviceType);
if (preferredInstance != null ) {
preferredHosts.put$TK$TV(service.serviceType, preferredInstance);
} else {
preferredHosts.put$TK$TV(service.serviceType, service);
}}var ph=alternates.get$O(service.serviceType);
if (preferredHosts.get$O(service.serviceType) !== service ) {
if (ph == null ) {
ph=Clazz.new_($I$(7));
}ph.add$TE(service);
alternates.put$TK$TV(service.serviceType, ph);
}}}
p$1.addEnumeratedServices$javax_swing_JMenu$jalview_gui_AlignFrame$java_util_List.apply(this, [jws2al, alignFrame, enumerableServices]);
for (var service, $service = preferredHosts.values$().iterator$(); $service.hasNext$()&&((service=($service.next$())),1);) {
atpoint=$I$(11).findOrCreateMenu$javax_swing_JMenu$S(jws2al, service.action);
var hitm;
if (atpoint.getItemCount$() > 1) {
atpoint.addSeparator$();
}atpoint.add$javax_swing_JMenuItem(hitm=Clazz.new_($I$(12).c$$S,[service.getHost$()]));
hitm.setForeground$java_awt_Color($I$(13).blue);
hitm.addActionListener$java_awt_event_ActionListener(((P$.Jws2Discoverer$1||
(function(){var C$=Clazz.newClass(P$, "Jws2Discoverer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
$I$(14).showUrl$S(this.$finals$.service.getHost$());
});
})()
), Clazz.new_(P$.Jws2Discoverer$1.$init$, [this, {service: service}])));
hitm.setToolTipText$S($I$(11).wrapTooltip$Z$S(false, $I$(15).getString$S("label.open_jabaws_web_page")));
service.attachWSMenuEntry$javax_swing_JMenu$jalview_gui_AlignFrame(atpoint, alignFrame);
if (alternates.containsKey$O(service.serviceType)) {
atpoint.add$javax_swing_JMenuItem(hitm=Clazz.new_($I$(16).c$$S,[$I$(15).getString$S("label.switch_server")]));
hitm.setToolTipText$S($I$(11).wrapTooltip$Z$S(false, $I$(15).getString$S("label.choose_jabaws_server")));
for (var sv, $sv = alternates.get$O(service.serviceType).iterator$(); $sv.hasNext$()&&((sv=($sv.next$())),1);) {
var itm;
hitm.add$java_awt_Component(itm=Clazz.new_($I$(12).c$$S,[sv.getHost$()]));
itm.setForeground$java_awt_Color($I$(13).blue);
itm.addActionListener$java_awt_event_ActionListener(((P$.Jws2Discoverer$2||
(function(){var C$=Clazz.newClass(P$, "Jws2Discoverer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
Clazz.new_($I$(4).c$$Runnable,[((P$.Jws2Discoverer$2$1||
(function(){var C$=Clazz.newClass(P$, "Jws2Discoverer$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.ws.jws2.Jws2Discoverer'].setPreferredServiceFor$jalview_gui_AlignFrame$S$S$jalview_ws_jws2_jabaws2_Jws2Instance.apply(this.b$['jalview.ws.jws2.Jws2Discoverer'], [this.$finals$.alignFrame, this.$finals$.sv.serviceType, this.$finals$.sv.action, this.$finals$.sv]);
this.b$['jalview.ws.jws2.Jws2Discoverer'].changeSupport.firePropertyChange$S$O$O("services", Clazz.new_($I$(6)), this.b$['jalview.ws.jws2.Jws2Discoverer'].services);
});
})()
), Clazz.new_(P$.Jws2Discoverer$2$1.$init$, [this, {alignFrame: this.$finals$.alignFrame, sv: this.$finals$.sv}]))]).start$();
});
})()
), Clazz.new_(P$.Jws2Discoverer$2.$init$, [this, {sv: sv, alignFrame: alignFrame}])));
}
}}
}, p$1);

Clazz.newMeth(C$, 'addEnumeratedServices$javax_swing_JMenu$jalview_gui_AlignFrame$java_util_List', function (jws2al, alignFrame, enumerableServices) {
var byhost=$I$(3).getDefault$S$Z("WSMENU_BYHOST", false);
var bytype=$I$(3).getDefault$S$Z("WSMENU_BYTYPE", false);
var atpoint;
var hostLabels=Clazz.new_($I$(7));
var lasthostFor=Clazz.new_($I$(17));
var hosts=Clazz.new_($I$(17));
var hostlist=Clazz.new_($I$(7));
for (var service, $service = enumerableServices.iterator$(); $service.hasNext$()&&((service=($service.next$())),1);) {
var hostservices=hosts.get$O(service.getHost$());
if (hostservices == null ) {
hosts.put$TK$TV(service.getHost$(), hostservices=Clazz.new_($I$(7)));
hostlist.add$TE(service.getHost$());
}hostservices.add$TE(service);
}
for (var host, $host = hostlist.iterator$(); $host.hasNext$()&&((host=($host.next$())),1);) {
var orderedsvcs=hosts.get$O(host).toArray$TTA(Clazz.array($I$(9), [1]));
var sortbytype=Clazz.array(String, [orderedsvcs.length]);
for (var i=0; i < sortbytype.length; i++) {
sortbytype[i]=orderedsvcs[i].serviceType;
}
$I$(10).sort$SA$OA(sortbytype, orderedsvcs);
for (var service, $service = 0, $$service = orderedsvcs; $service<$$service.length&&((service=($$service[$service])),1);$service++) {
atpoint=$I$(11).findOrCreateMenu$javax_swing_JMenu$S(jws2al, service.action);
var type=service.serviceType;
if (byhost) {
atpoint=$I$(11).findOrCreateMenu$javax_swing_JMenu$S(atpoint, host);
if (atpoint.getToolTipText$() == null ) {
atpoint.setToolTipText$S($I$(15).formatMessage$S$SA("label.services_at", Clazz.array(String, -1, [host])));
}}if (bytype) {
atpoint=$I$(11).findOrCreateMenu$javax_swing_JMenu$S(atpoint, type);
if (atpoint.getToolTipText$() == null ) {
atpoint.setToolTipText$S(service.getActionText$());
}}if (!byhost && !hostLabels.contains$O(host + service.serviceType + service.getActionText$() ) ) {
var hitm;
if (hostLabels.contains$O(host)) {
atpoint.addSeparator$();
} else {
hostLabels.add$TE(host);
}if (lasthostFor.get$O(service.action) == null  || !lasthostFor.get$O(service.action).equals$O(host) ) {
atpoint.add$javax_swing_JMenuItem(hitm=Clazz.new_($I$(12).c$$S,[host]));
hitm.setForeground$java_awt_Color($I$(13).blue);
hitm.addActionListener$java_awt_event_ActionListener(((P$.Jws2Discoverer$3||
(function(){var C$=Clazz.newClass(P$, "Jws2Discoverer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
$I$(14).showUrl$S(this.$finals$.service.getHost$());
});
})()
), Clazz.new_(P$.Jws2Discoverer$3.$init$, [this, {service: service}])));
hitm.setToolTipText$S($I$(11).wrapTooltip$Z$S(true, $I$(15).getString$S("label.open_jabaws_web_page")));
lasthostFor.put$TK$TV(service.action, host);
}hostLabels.add$TE(host + service.serviceType + service.getActionText$() );
}service.attachWSMenuEntry$javax_swing_JMenu$jalview_gui_AlignFrame(atpoint, alignFrame);
}
}
}, p$1);

Clazz.newMeth(C$, 'getDiscoverer$', function () {
if (C$.discoverer == null ) {
C$.discoverer=Clazz.new_(C$);
}return C$.discoverer;
}, 1);

Clazz.newMeth(C$, 'hasServices$', function () {
return !this.running && this.services != null   && this.services.size$() > 0 ;
});

Clazz.newMeth(C$, 'isRunning$', function () {
return this.running;
});

Clazz.newMeth(C$, 'setServiceUrls$java_util_List', function (wsUrls) {
if (wsUrls != null  && !wsUrls.isEmpty$() ) {
var urls=Clazz.new_($I$(18).c$$I,[128]);
var sep="";
for (var url, $url = wsUrls.iterator$(); $url.hasNext$()&&((url=($url.next$())),1);) {
urls.append$S(sep);
urls.append$S(url);
sep=",";
}
$I$(3).setProperty$S$S("JWS2HOSTURLS", urls.toString());
} else {
$I$(3).removeProperty$S("JWS2HOSTURLS");
}});

Clazz.newMeth(C$, 'getServiceUrls$', function () {
if (C$.testUrls != null ) {
return C$.testUrls;
}var urls=Clazz.new_($I$(7));
if (this.preferredUrl != null ) {
urls.add$TE(this.preferredUrl);
}var surls=$I$(3).getDefault$S$S("JWS2HOSTURLS", "http://www.compbio.dundee.ac.uk/jabaws");
try {
var st=Clazz.new_($I$(19).c$$S$S,[surls, ","]);
while (st.hasMoreElements$()){
var url=null;
try {
url=st.nextToken$();
Clazz.new_($I$(20).c$$S,[url]);
if (!urls.contains$O(url)) {
urls.add$TE(url);
} else {
$I$(3).log.warn$O("Ignoring duplicate url " + url + " in " + "JWS2HOSTURLS" + " list" );
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.net.MalformedURLException")){
$I$(3).log.warn$O("Problem whilst trying to make a URL from '" + ((url != null ) ? url : "<null>") + "'" );
$I$(3).log.warn$O("This was probably due to a malformed comma separated list in the JWS2HOSTURLS entry of $(HOME)/.jalview_properties)");
$I$(3).log.debug$O$Throwable("Exception was ", ex);
} else {
throw ex;
}
}
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(3).log.warn$O$Throwable("Error parsing comma separated list of urls in JWS2HOSTURLS preference.", ex);
} else {
throw ex;
}
}
return urls;
});

Clazz.newMeth(C$, 'getServices$', function () {
return (this.services == null ) ? Clazz.new_($I$(6)) : Clazz.new_($I$(6).c$$java_util_Collection,[this.services]);
});

Clazz.newMeth(C$, 'testServiceUrl$java_net_URL', function (foo) {
try {
$I$(21).main$SA(Clazz.array(String, -1, ["-h=" + foo.toString()]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
e.printStackTrace$();
return false;
}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var e = e$$;
{
e.printStackTrace$();
return false;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
e.printStackTrace$();
return false;
}
} else {
throw e$$;
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'restart$', function () {
{
if (this.running) {
this.aborted=true;
} else {
this.running=true;
}return this.aborted;
}});

Clazz.newMeth(C$, 'startDiscoverer$java_beans_PropertyChangeListener', function (changeSupport2) {
if (this.isRunning$()) {
this.setAborted$Z(true);
}this.addPropertyChangeListener$java_beans_PropertyChangeListener(changeSupport2);
var thr=Clazz.new_($I$(4).c$$Runnable,[this]);
thr.start$();
return thr;
});

Clazz.newMeth(C$, 'getInvalidServiceUrls$', function () {
return this.invalidServiceUrls;
});

Clazz.newMeth(C$, 'getUrlsWithoutServices$', function () {
return this.urlsWithoutServices;
});

Clazz.newMeth(C$, 'addUrlwithnoservices$S', function (jwsservers) {
if (this.urlsWithoutServices == null ) {
this.urlsWithoutServices=Clazz.new_($I$(6));
}if ((this.invalidServiceUrls == null  || !this.invalidServiceUrls.contains$O(jwsservers) ) && !this.urlsWithoutServices.contains$O(jwsservers) ) {
this.urlsWithoutServices.add$TE(jwsservers);
}});

Clazz.newMeth(C$, 'addInvalidServiceUrl$S', function (jwsservers) {
if (this.invalidServiceUrls == null ) {
this.invalidServiceUrls=Clazz.new_($I$(6));
}if (!this.invalidServiceUrls.contains$O(jwsservers)) {
this.invalidServiceUrls.add$TE(jwsservers);
}});

Clazz.newMeth(C$, 'getErrorMessages$', function () {
if (!this.isRunning$() && !this.isAborted$() ) {
var ermsg=Clazz.new_($I$(22));
var list=false;
if (this.getInvalidServiceUrls$() != null  && this.getInvalidServiceUrls$().size$() > 0 ) {
ermsg.append$S($I$(15).getString$S("warn.urls_not_contacted") + ": \n");
for (var svcurl, $svcurl = this.getInvalidServiceUrls$().iterator$(); $svcurl.hasNext$()&&((svcurl=($svcurl.next$())),1);) {
if (list) {
ermsg.append$S(", ");
}list=true;
ermsg.append$S(svcurl);
}
ermsg.append$S("\n\n");
}list=false;
if (this.getUrlsWithoutServices$() != null  && this.getUrlsWithoutServices$().size$() > 0 ) {
ermsg.append$S($I$(15).getString$S("warn.urls_no_jaba") + ": \n");
for (var svcurl, $svcurl = this.getUrlsWithoutServices$().iterator$(); $svcurl.hasNext$()&&((svcurl=($svcurl.next$())),1);) {
if (list) {
ermsg.append$S(", ");
}list=true;
ermsg.append$S(svcurl);
}
ermsg.append$S("\n");
}if (ermsg.length$() > 1) {
return ermsg.toString();
}}return null;
});

Clazz.newMeth(C$, 'getServerStatusFor$S', function (url) {
if (this.validServiceUrls != null  && this.validServiceUrls.contains$O(url) ) {
return 1;
}if (this.urlsWithoutServices != null  && this.urlsWithoutServices.contains$O(url) ) {
return 0;
}if (this.invalidServiceUrls != null  && this.invalidServiceUrls.contains$O(url) ) {
return -1;
}return -2;
});

Clazz.newMeth(C$, 'getPreferredServiceFor$SA', function (serviceURLs) {
var urls=Clazz.new_($I$(5));
urls.addAll$java_util_Collection($I$(23).asList$TTA(serviceURLs));
var match=null;
if (this.services != null ) {
for (var svc, $svc = this.services.iterator$(); $svc.hasNext$()&&((svc=($svc.next$())),1);) {
if (urls.contains$O(svc.getServiceTypeURI$())) {
if (match == null ) {
match=svc;
}if (urls.contains$O(svc.getUri$())) {
return svc;
}}}
}return match;
});

Clazz.newMeth(C$, 'getPreferredServiceFor$jalview_gui_AlignFrame$S', function (af, serviceType) {
var serviceurl=null;
{
var afid=(af == null ) ? "" : af.getViewport$().getSequenceSetId$();
var prefmap=this.preferredServiceMap.get$O(afid);
if (afid.length$() > 0 && prefmap == null  ) {
prefmap=this.preferredServiceMap.get$O("");
}if (prefmap != null ) {
serviceurl=prefmap.get$O(serviceType);
}}var response=null;
for (var svc, $svc = this.services.iterator$(); $svc.hasNext$()&&((svc=($svc.next$())),1);) {
if (svc.serviceType.equals$O(serviceType)) {
if (serviceurl == null  || serviceurl.equals$O(svc.getHost$()) ) {
response=svc;
break;
}}}
return response;
});

Clazz.newMeth(C$, 'setPreferredServiceFor$jalview_gui_AlignFrame$S$S$jalview_ws_jws2_jabaws2_Jws2Instance', function (af, serviceType, serviceAction, selectedServer) {
var afid=(af == null ) ? "" : af.getViewport$().getSequenceSetId$();
if (this.preferredServiceMap == null ) {
this.preferredServiceMap=Clazz.new_($I$(2));
}var prefmap=this.preferredServiceMap.get$O(afid);
if (prefmap == null ) {
prefmap=Clazz.new_($I$(2));
this.preferredServiceMap.put$TK$TV(afid, prefmap);
}prefmap.put$TK$TV(serviceType, selectedServer.getHost$());
prefmap.put$TK$TV(serviceAction, selectedServer.getHost$());
});

Clazz.newMeth(C$, 'setPreferredServiceFor$S$S$jalview_ws_jws2_jabaws2_Jws2Instance', function (serviceType, serviceAction, selectedServer) {
this.setPreferredServiceFor$jalview_gui_AlignFrame$S$S$jalview_ws_jws2_jabaws2_Jws2Instance(null, serviceType, serviceAction, selectedServer);
});

Clazz.newMeth(C$, 'setPreferredUrl$S', function (value) {
if (value != null  && value.trim$().length$() > 0 ) {
Clazz.new_($I$(20).c$$S,[value]);
this.preferredUrl=value;
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
