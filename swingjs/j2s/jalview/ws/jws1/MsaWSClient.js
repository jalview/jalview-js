(function(){var P$=Clazz.newPackage("jalview.ws.jws1"),p$1={},I$=[[0,'jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.util.MessageManager','jalview.ws.jws1.MsaWSThread','ext.vamsas.MuscleWSServiceLocator','java.net.URL','javax.swing.JMenuItem','jalview.ws.jws1.MsaWSClient']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MsaWSClient", null, 'jalview.ws.jws1.WS1Client');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['server','ext.vamsas.MuscleWS','alignFrame','jalview.gui.AlignFrame']]]

Clazz.newMeth(C$, 'c$$ext_vamsas_ServiceHandle$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame', function (sh, altitle, msa, submitGaps, preserveOrder, seqdataset, _alignFrame) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.alignFrame=_alignFrame;
if (!sh.getAbstractName$().equals$O("MsaWS")) {
$I$(1,"showMessageDialog$java_awt_Component$S$S$I",[$I$(2).desktop, $I$(3,"formatMessage$S$SA",["label.service_called_is_not_msa_service", Clazz.array(String, -1, [sh.getName$()])]), $I$(3).getString$S("label.internal_jalview_error"), 2]);
return;
}if ((this.wsInfo=this.setWebService$ext_vamsas_ServiceHandle(sh)) == null ) {
$I$(1,"showMessageDialog$java_awt_Component$S$S$I",[$I$(2).desktop, $I$(3,"formatMessage$S$SA",["label.msa_service_is_unknown", Clazz.array(String, -1, [sh.getName$()])]), $I$(3).getString$S("label.internal_jalview_error"), 2]);
return;
}p$1.startMsaWSClient$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI.apply(this, [altitle, msa, submitGaps, preserveOrder, seqdataset]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'startMsaWSClient$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI', function (altitle, msa, submitGaps, preserveOrder, seqdataset) {
if (!p$1.locateWebService.apply(this, [])) {
return;
}this.wsInfo.setProgressText$S(((submitGaps) ? "Re-alignment" : "Alignment") + " of " + altitle + "\nJob details\n" );
var jobtitle=this.WebServiceName.toLowerCase$();
if (jobtitle.endsWith$S("alignment")) {
if (submitGaps && (!jobtitle.endsWith$S("realignment") || jobtitle.indexOf$S("profile") == -1 ) ) {
var pos=jobtitle.indexOf$S("alignment");
jobtitle=this.WebServiceName.substring$I$I(0, pos) + "re-alignment of " + altitle ;
} else {
jobtitle=this.WebServiceName + " of " + altitle ;
}} else {
jobtitle=this.WebServiceName + (submitGaps ? " re" : " ") + "alignment of " + altitle ;
}var msathread=Clazz.new_($I$(4,1).c$$ext_vamsas_MuscleWS$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$S$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI,[this.server, this.WsURL, this.wsInfo, this.alignFrame, this.WebServiceName, jobtitle, msa, submitGaps, preserveOrder, seqdataset]);
this.wsInfo.setthisService$jalview_ws_WSClientI(msathread);
msathread.start$();
}, p$1);

Clazz.newMeth(C$, 'locateWebService', function () {
var loc=Clazz.new_($I$(5,1));
try {
this.server=loc.getMuscleWS$java_net_URL(Clazz.new_($I$(6,1).c$$S,[this.WsURL]));
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
return "MsaWS";
});

Clazz.newMeth(C$, 'getServiceActionDescription$', function () {
return "Multiple Sequence Alignment";
});

Clazz.newMeth(C$, 'canSubmitGaps', function () {
return (this.WebServiceName.indexOf$S("lustal") > -1);
}, p$1);

Clazz.newMeth(C$, 'attachWSMenuEntry$javax_swing_JMenu$ext_vamsas_ServiceHandle$jalview_gui_AlignFrame', function (msawsmenu, serviceHandle, alignFrame) {
this.setWebService$ext_vamsas_ServiceHandle$Z(serviceHandle, true);
var method=Clazz.new_($I$(7,1).c$$S,[this.WebServiceName]);
method.setToolTipText$S(this.WsURL);
method.addActionListener$java_awt_event_ActionListener(((P$.MsaWSClient$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MsaWSClient$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var msa=this.$finals$.alignFrame.gatherSequencesForAlignment$();
Clazz.new_([this.$finals$.serviceHandle, this.$finals$.alignFrame.getTitle$(), msa, false, true, this.$finals$.alignFrame.getViewport$().getAlignment$().getDataset$(), this.$finals$.alignFrame],$I$(8,1).c$$ext_vamsas_ServiceHandle$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame);
});
})()
), Clazz.new_(P$.MsaWSClient$1.$init$,[this, {alignFrame:alignFrame,serviceHandle:serviceHandle}])));
msawsmenu.add$javax_swing_JMenuItem(method);
if (p$1.canSubmitGaps.apply(this, [])) {
var methodR=Clazz.new_([serviceHandle.getName$() + " Realign"],$I$(7,1).c$$S);
methodR.setToolTipText$S(this.WsURL);
methodR.addActionListener$java_awt_event_ActionListener(((P$.MsaWSClient$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MsaWSClient$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var msa=this.$finals$.alignFrame.gatherSequencesForAlignment$();
Clazz.new_([this.$finals$.serviceHandle, this.$finals$.alignFrame.getTitle$(), msa, true, true, this.$finals$.alignFrame.getViewport$().getAlignment$().getDataset$(), this.$finals$.alignFrame],$I$(8,1).c$$ext_vamsas_ServiceHandle$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame);
});
})()
), Clazz.new_(P$.MsaWSClient$2.$init$,[this, {alignFrame:alignFrame,serviceHandle:serviceHandle}])));
msawsmenu.add$javax_swing_JMenuItem(methodR);
}});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
