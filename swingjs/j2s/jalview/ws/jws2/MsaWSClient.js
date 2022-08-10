(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),p$1={},I$=[[0,'jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.util.MessageManager','java.util.Locale','jalview.ws.jws2.MsaWSThread','javax.swing.JMenu','javax.swing.JMenuItem','jalview.ws.jws2.MsaWSClient','javax.swing.ToolTipManager','java.awt.event.MouseAdapter','jalview.gui.JvSwingUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MsaWSClient", null, 'jalview.ws.jws2.Jws2Client');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['server','compbio.data.msa.MsaWS']]]

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame',  function (sh, altitle, msa, submitGaps, preserveOrder, seqdataset, _alignFrame) {
C$.c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List$Z$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame.apply(this, [sh, null, null, false, altitle, msa, submitGaps, preserveOrder, seqdataset, _alignFrame]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame',  function (sh, preset, altitle, msa, submitGaps, preserveOrder, seqdataset, _alignFrame) {
C$.c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List$Z$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame.apply(this, [sh, preset, null, false, altitle, msa, submitGaps, preserveOrder, seqdataset, _alignFrame]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List$Z$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame',  function (sh, preset, $arguments, editParams, altitle, msa, submitGaps, preserveOrder, seqdataset, _alignFrame) {
;C$.superclazz.c$$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List.apply(this,[_alignFrame, preset, $arguments]);C$.$init$.apply(this);
if (!this.processParams$jalview_ws_jws2_jabaws2_Jws2Instance$Z(sh, editParams)) {
return;
}if (!(Clazz.instanceOf(sh.service, "compbio.data.msa.MsaWS"))) {
$I$(1,"showMessageDialog$java_awt_Component$S$S$I",[$I$(2).desktop, $I$(3,"formatMessage$S$SA",["label.service_called_is_not_msa_service", Clazz.array(String, -1, [sh.serviceType])]), $I$(3).getString$S("label.internal_jalview_error"), 2]);
return;
}this.server=sh.service;
if ((this.wsInfo=this.setWebService$jalview_ws_jws2_jabaws2_Jws2Instance$Z(sh, false)) == null ) {
$I$(1,"showMessageDialog$java_awt_Component$S$S$I",[$I$(2).desktop, $I$(3,"formatMessage$S$SA",["label.msa_service_is_unknown", Clazz.array(String, -1, [sh.serviceType])]), $I$(3).getString$S("label.internal_jalview_error"), 2]);
return;
}p$1.startMsaWSClient$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI.apply(this, [altitle, msa, submitGaps, preserveOrder, seqdataset]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'startMsaWSClient$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI',  function (altitle, msa, submitGaps, preserveOrder, seqdataset) {
this.wsInfo.setProgressText$S(((submitGaps) ? "Re-alignment" : "Alignment") + " of " + altitle + "\nJob details\n" );
var jobtitle=this.WebServiceName.toLowerCase$java_util_Locale($I$(4).ROOT);
if (jobtitle.endsWith$S("alignment")) {
if (submitGaps && (!jobtitle.endsWith$S("realignment") || jobtitle.indexOf$S("profile") == -1 ) ) {
var pos=jobtitle.indexOf$S("alignment");
jobtitle=this.WebServiceName.substring$I$I(0, pos) + "re-alignment of " + altitle ;
} else {
jobtitle=this.WebServiceName + " of " + altitle ;
}} else {
jobtitle=this.WebServiceName + (submitGaps ? " re" : " ") + "alignment of " + altitle ;
}var msathread=Clazz.new_($I$(5,1).c$$compbio_data_msa_MsaWS$jalview_ws_params_WsParamSetI$java_util_List$S$jalview_gui_WebserviceInfo$jalview_gui_AlignFrame$S$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI,[this.server, this.preset, this.paramset, this.WsURL, this.wsInfo, this.alignFrame, this.WebServiceName, jobtitle, msa, submitGaps, preserveOrder, seqdataset]);
if (msathread.hasValidInput$()) {
this.wsInfo.setthisService$jalview_ws_WSClientI(msathread);
this.wsInfo.setVisible$Z(true);
msathread.start$();
} else {
this.wsInfo.setVisible$Z(false);
$I$(1,"showMessageDialog$java_awt_Component$S$S$I",[this.alignFrame, $I$(3).getString$S("info.invalid_msa_input_mininfo"), $I$(3).getString$S("info.invalid_msa_notenough"), 1]);
}}, p$1);

Clazz.newMeth(C$, 'getServiceActionKey$',  function () {
return "MsaWS";
});

Clazz.newMeth(C$, 'getServiceActionDescription$',  function () {
return "Multiple Sequence Alignment";
});

Clazz.newMeth(C$, 'canSubmitGaps',  function () {
return (this.WebServiceName.indexOf$S("lustal") > -1);
}, p$1);

Clazz.newMeth(C$, 'attachWSMenuEntry$javax_swing_JMenu$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame',  function (rmsawsmenu, service, af) {
if (this.registerAAConWSInstance$javax_swing_JMenu$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame(rmsawsmenu, service, af)) {
return;
}this.setWebService$jalview_ws_jws2_jabaws2_Jws2Instance$Z(service, true);
var finished=true;
var submitGaps=false;
var msawsmenu=rmsawsmenu;
var svcname=this.WebServiceName;
if (svcname.endsWith$S("WS")) {
svcname=svcname.substring$I$I(0, svcname.length$() - 2);
}var calcName=svcname + " ";
if (p$1.canSubmitGaps.apply(this, [])) {
msawsmenu=Clazz.new_($I$(6,1).c$$S,[svcname]);
rmsawsmenu.add$javax_swing_JMenuItem(msawsmenu);
calcName="";
}var hasparams=service.hasParameters$();
do {
var action="Align ";
if (submitGaps == true ) {
action="Realign ";
msawsmenu=Clazz.new_([$I$(3,"formatMessage$S$SA",["label.realign_with_params", Clazz.array(String, -1, [svcname])])],$I$(6,1).c$$S);
msawsmenu.setToolTipText$S($I$(3).getString$S("label.align_sequences_to_existing_alignment"));
rmsawsmenu.add$javax_swing_JMenuItem(msawsmenu);
}var withGaps=submitGaps;
var method=Clazz.new_([$I$(3,"formatMessage$S$SA",["label.calcname_with_default_settings", Clazz.array(String, -1, [calcName])])],$I$(7,1).c$$S);
method.setToolTipText$S($I$(3,"formatMessage$S$SA",["label.action_with_default_settings", Clazz.array(String, -1, [action])]));
method.addActionListener$java_awt_event_ActionListener(((P$.MsaWSClient$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MsaWSClient$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var msa=this.$finals$.af.gatherSequencesForAlignment$();
if (msa != null ) {
Clazz.new_([this.$finals$.service, this.$finals$.af.getTitle$(), msa, this.$finals$.withGaps, true, this.$finals$.af.getViewport$().getAlignment$().getDataset$(), this.$finals$.af],$I$(8,1).c$$jalview_ws_jws2_jabaws2_Jws2Instance$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame);
}});
})()
), Clazz.new_(P$.MsaWSClient$1.$init$,[this, {withGaps:withGaps,service:service,af:af}])));
msawsmenu.add$javax_swing_JMenuItem(method);
if (hasparams) {
method=Clazz.new_([$I$(3).getString$S("label.edit_settings_and_run")],$I$(7,1).c$$S);
method.setToolTipText$S($I$(3).getString$S("label.view_and_change_parameters_before_alignment"));
method.addActionListener$java_awt_event_ActionListener(((P$.MsaWSClient$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MsaWSClient$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var msa=this.$finals$.af.gatherSequencesForAlignment$();
if (msa != null ) {
this.b$['jalview.ws.jws2.MsaWSClient'].startJob$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$Z$jalview_datamodel_AlignmentView.apply(this.b$['jalview.ws.jws2.MsaWSClient'], [this.$finals$.service, this.$finals$.af, this.$finals$.withGaps, msa]);
}});
})()
), Clazz.new_(P$.MsaWSClient$2.$init$,[this, {withGaps:withGaps,service:service,af:af}])));
msawsmenu.add$javax_swing_JMenuItem(method);
var presets=service.getParamStore$().getPresets$();
if (presets != null  && presets.size$() > 0 ) {
var presetlist=Clazz.new_([$I$(3,"formatMessage$S$SA",["label.run_with_preset_params", Clazz.array(String, -1, [calcName])])],$I$(6,1).c$$S);
var showToolTipFor=$I$(9).sharedInstance$().getDismissDelay$();
for (var preSet, $preSet = presets.iterator$(); $preSet.hasNext$()&&((preSet=($preSet.next$())),1);) {
var methodR=Clazz.new_([preSet.getName$()],$I$(7,1).c$$S);
var QUICK_TOOLTIP=1500;
methodR.addMouseListener$java_awt_event_MouseListener(((P$.MsaWSClient$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "MsaWSClient$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
$I$(9).sharedInstance$().setDismissDelay$I(1500);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
$I$(9).sharedInstance$().setDismissDelay$I(this.$finals$.showToolTipFor);
});
})()
), Clazz.new_($I$(10,1),[this, {showToolTipFor:showToolTipFor}],P$.MsaWSClient$3)));
var tooltip=$I$(11,"wrapTooltip$Z$S",[true, "<strong>" + (preSet.isModifiable$() ? $I$(3).getString$S("label.user_preset") : $I$(3).getString$S("label.service_preset")) + "</strong><br/>" + preSet.getDescription$() ]);
methodR.setToolTipText$S(tooltip);
methodR.addActionListener$java_awt_event_ActionListener(((P$.MsaWSClient$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "MsaWSClient$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var msa=this.$finals$.af.gatherSequencesForAlignment$();
if (msa != null ) {
var msac=Clazz.new_([this.$finals$.service, this.$finals$.preSet, this.$finals$.af.getTitle$(), msa, false, true, this.$finals$.af.getViewport$().getAlignment$().getDataset$(), this.$finals$.af],$I$(8,1).c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame);
}});
})()
), Clazz.new_(P$.MsaWSClient$4.$init$,[this, {service:service,af:af,preSet:preSet}])));
presetlist.add$javax_swing_JMenuItem(methodR);
}
msawsmenu.add$javax_swing_JMenuItem(presetlist);
}}if (!submitGaps && p$1.canSubmitGaps.apply(this, []) ) {
submitGaps=true;
finished=false;
} else {
finished=true;
}} while (!finished);
});

Clazz.newMeth(C$, 'startJob$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$Z$jalview_datamodel_AlignmentView',  function (service, af, withGaps, msa) {
try {
Clazz.new_(C$.c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List$Z$S$jalview_datamodel_AlignmentView$Z$Z$jalview_datamodel_AlignmentI$jalview_gui_AlignFrame,[service, null, null, true, af.getTitle$(), msa, withGaps, true, af.getViewport$().getAlignment$().getDataset$(), af]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1,"showMessageDialog$java_awt_Component$S$S$I",[this.alignFrame, e.getMessage$(), $I$(3).getString$S("label.state_job_error"), 2]);
} else {
throw e;
}
}
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
