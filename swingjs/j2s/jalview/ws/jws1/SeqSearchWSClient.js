(function(){var P$=Clazz.newPackage("jalview.ws.jws1"),p$1={},I$=[[0,'java.util.Hashtable','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.util.MessageManager','jalview.ws.jws1.SeqSearchWSThread','ext.vamsas.SeqSearchServiceLocator','java.net.URL','java.util.StringTokenizer','java.util.Vector','javax.swing.JMenu','jalview.bin.Cache','javax.swing.JMenuItem','jalview.ws.jws1.SeqSearchWSClient']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SeqSearchWSClient", null, 'jalview.ws.jws1.WS1Client');
C$.dbParamsForEndpoint=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
C$.dbParamsForEndpoint=Clazz.new_($I$(1));
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.server=null;
this.alignFrame=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$ext_vamsas_ServiceHandle$S$jalview_datamodel_AlignmentView$S$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame', function (sh, altitle, msa, db, seqdataset, _alignFrame) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.alignFrame=_alignFrame;
if (!sh.getAbstractName$().equals$O(this.getServiceActionKey$())) {
$I$(2).showMessageDialog$java_awt_Component$S$S$I($I$(3).desktop, $I$(4).formatMessage$S$SA("label.service_called_is_not_seq_search_service", Clazz.array(String, -1, [sh.getName$()])), $I$(4).getString$S("label.internal_jalview_error"), 2);
return;
}if ((this.wsInfo=this.setWebService$ext_vamsas_ServiceHandle(sh)) == null ) {
$I$(2).showMessageDialog$java_awt_Component$S$S$I($I$(3).desktop, $I$(4).formatMessage$S$SA("label.seq_search_service_is_unknown", Clazz.array(String, -1, [sh.getName$()])), $I$(4).getString$S("label.internal_jalview_error"), 2);
return;
}p$1.startSeqSearchClient$S$jalview_datamodel_AlignmentView$S$jalview_datamodel_AlignmentI.apply(this, [altitle, msa, db, seqdataset]);
}, 1);

Clazz.newMeth(C$, 'c$$ext_vamsas_ServiceHandle', function (sh) {
Clazz.super_(C$, this,1);
this.setWebService$ext_vamsas_ServiceHandle$Z(sh, true);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'startSeqSearchClient$S$jalview_datamodel_AlignmentView$S$jalview_datamodel_AlignmentI', function (altitle, msa, db, seqdataset) {
if (!p$1.locateWebService.apply(this, [])) {
return;
}var visdb=(db == null  || db == "" ) ? "default" : db;
var profileSearch=msa.getSequences$().length > 2 ? true : false;
this.wsInfo.setProgressText$S("Searching " + visdb + (!profileSearch ? " with sequence " + msa.getSequences$()[0].getRefSeq$().getName$() : " with profile") + " from " + altitle + "\nJob details\n" );
var jobtitle=this.WebServiceName + ((this.WebServiceName.indexOf$S("earch") > -1) ? " " : " search ") + " of " + visdb + (!profileSearch ? " with sequence " + msa.getSequences$()[0].getRefSeq$().getName$() : " with profile") + " from " + altitle ;
var ssthread=Clazz.new_($I$(5).c$$ext_vamsas_SeqSearchI$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$S$S$jalview_datamodel_AlignmentView$S$jalview_datamodel_AlignmentI,[this.server, this.WsURL, this.wsInfo, this.alignFrame, this.WebServiceName, jobtitle, msa, db, seqdataset]);
this.wsInfo.setthisService$jalview_ws_WSClientI(ssthread);
ssthread.start$();
}, p$1);

Clazz.newMeth(C$, 'locateWebService', function () {
var loc=Clazz.new_($I$(6));
try {
this.server=loc.getSeqSearchService$java_net_URL(Clazz.new_($I$(7).c$$S,[this.WsURL]));
(this.server).setTimeout$I(60000);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.wsInfo.setProgressText$S("Serious! " + this.WebServiceName + " Service location failed\nfor URL :" + this.WsURL + "\n" + ex.getMessage$() );
this.wsInfo.setStatus$I(64);
ex.printStackTrace$();
return false;
} else {
throw ex;
}
}
loc.getEngine$().setOption$S$O("axis", "1");
return true;
}, p$1);

Clazz.newMeth(C$, 'getServiceActionKey$', function () {
return "SeqSearch";
});

Clazz.newMeth(C$, 'getServiceActionDescription$', function () {
return "Sequence Database Search";
});

Clazz.newMeth(C$, 'getSupportedDatabases$', function () {
if (C$.dbParamsForEndpoint.containsKey$O(this.WsURL)) {
return C$.dbParamsForEndpoint.get$O(this.WsURL);
}if (!p$1.locateWebService.apply(this, [])) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(4).formatMessage$S$SA("exception.cannot_contact_service_endpoint_at", Clazz.array(String, -1, [this.WsURL]))]);
}var database=this.server.getDatabase$();
if (database == null ) {
C$.dbParamsForEndpoint.put$TK$TV(this.WsURL, Clazz.array(String, -1, []));
return null;
}var en=Clazz.new_($I$(8).c$$S$S,[database.trim$(), ",| "]);
var dbs=Clazz.array(String, [en.countTokens$()]);
for (var i=0; i < dbs.length; i++) {
dbs[i++]=en.nextToken$().trim$();
}
C$.dbParamsForEndpoint.put$TK$TV(this.WsURL, dbs);
return dbs;
});

Clazz.newMeth(C$, 'attachWSMenuEntry$javax_swing_JMenu$ext_vamsas_ServiceHandle$jalview_gui_AlignFrame', function (wsmenu, sh, af) {
var dbsrchs=Clazz.new_($I$(1));
var newdbsrch=Clazz.new_($I$(9));
var entries=wsmenu.getComponents$();
for (var i=0; entries != null  && i < entries.length ; i++) {
if (Clazz.instanceOf(entries[i], "javax.swing.JMenu")) {
dbsrchs.put$TK$TV(entries[i].getName$(), entries[i]);
}}
var defmenu=dbsrchs.get$O("Default Database");
if (defmenu == null ) {
dbsrchs.put$TK$TV("Default Database", defmenu=Clazz.new_($I$(10).c$$S,["Default Database"]));
newdbsrch.addElement$TE(defmenu);
}var dbs=null;
try {
dbs=Clazz.new_(C$.c$$ext_vamsas_ServiceHandle,[sh]).getSupportedDatabases$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(11).log.warn$O$Throwable("Database list request failed, so disabling SeqSearch Service client " + sh.getName$() + " at " + sh.getEndpointURL$() , e);
return;
} else {
throw e;
}
}
var method;
defmenu.add$javax_swing_JMenuItem(method=Clazz.new_($I$(12).c$$S,[sh.getName$()]));
method.setToolTipText$S(sh.getEndpointURL$());
method.addActionListener$java_awt_event_ActionListener(((P$.SeqSearchWSClient$1||
(function(){var C$=Clazz.newClass(P$, "SeqSearchWSClient$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var msa=this.$finals$.af.gatherSeqOrMsaForSecStrPrediction$();
Clazz.new_($I$(13).c$$ext_vamsas_ServiceHandle$S$jalview_datamodel_AlignmentView$S$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame,[this.$finals$.sh, this.$finals$.af.getTitle$(), msa, null, this.$finals$.af.getViewport$().getAlignment$().getDataset$(), this.$finals$.af]);
});
})()
), Clazz.new_(P$.SeqSearchWSClient$1.$init$, [this, {af: af, sh: sh}])));
for (var db=0; dbs != null  && db < dbs.length ; db++) {
var dbmenu=dbsrchs.get$O(dbs[db]);
if (dbmenu == null ) {
dbsrchs.put$TK$TV(dbs[db], dbmenu=Clazz.new_($I$(10).c$$S,[dbs[db]]));
newdbsrch.addElement$TE(dbmenu);
}dbmenu.add$javax_swing_JMenuItem(method=Clazz.new_($I$(12).c$$S,[sh.getName$()]));
method.setToolTipText$S(sh.getEndpointURL$());
var searchdb=dbs[db];
method.addActionListener$java_awt_event_ActionListener(((P$.SeqSearchWSClient$2||
(function(){var C$=Clazz.newClass(P$, "SeqSearchWSClient$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var msa=this.$finals$.af.gatherSeqOrMsaForSecStrPrediction$();
Clazz.new_($I$(13).c$$ext_vamsas_ServiceHandle$S$jalview_datamodel_AlignmentView$S$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame,[this.$finals$.sh, this.$finals$.af.getTitle$(), msa, this.$finals$.searchdb, this.$finals$.af.getViewport$().getAlignment$().getDataset$(), this.$finals$.af]);
});
})()
), Clazz.new_(P$.SeqSearchWSClient$2.$init$, [this, {af: af, sh: sh, searchdb: searchdb}])));
}
var e=newdbsrch.elements$();
while (e.hasMoreElements$()){
var el=e.nextElement$();
if (Clazz.instanceOf(el, "javax.swing.JMenu")) {
wsmenu.add$javax_swing_JMenuItem(el);
} else {
wsmenu.add$javax_swing_JMenuItem(el);
}}
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
