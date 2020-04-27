(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),I$=[[0,'Error','jalview.util.MessageManager','jalview.ws.jws2.JabaParamStore','jalview.gui.Desktop','jalview.gui.WsJobParameters','jalview.gui.WebserviceInfo','javax.swing.JCheckBoxMenuItem','jalview.gui.JvSwingUtils','jalview.ws.jws2.Jws2Client','javax.swing.JMenuItem','jalview.ws.jws2.SequenceAnnotationWSClient','jalview.bin.Cache','compbio.ws.client.Services','jalview.ws.jws2.Jws2Discoverer','jalview.ws.jws2.dm.AAConSettings']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Jws2Client", null, 'jalview.ws.WSClient');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['alignFrame','jalview.gui.AlignFrame','preset','jalview.ws.params.WsParamSetI','paramset','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List', function (_alignFrame, preset, $arguments) {
Clazz.super_(C$, this);
this.alignFrame=_alignFrame;
this.preset=preset;
if (preset != null ) {
if (!((Clazz.instanceOf(preset, "jalview.ws.jws2.JabaPreset")) || Clazz.instanceOf(preset, "jalview.ws.jws2.dm.JabaWsParamSet") )) {
throw Clazz.new_([$I$(2).getString$S("error.implementation_error_can_only_instantiate_jaba_param_sets")],$I$(1,1).c$$S);
}} else {
this.paramset=$arguments;
}}, 1);

Clazz.newMeth(C$, 'processParams$jalview_ws_jws2_jabaws2_Jws2Instance$Z', function (sh, editParams) {
return this.processParams$jalview_ws_jws2_jabaws2_Jws2Instance$Z$Z(sh, editParams, false);
});

Clazz.newMeth(C$, 'processParams$jalview_ws_jws2_jabaws2_Jws2Instance$Z$Z', function (sh, editParams, adjustingExisting) {
if (editParams) {
if (sh.paramStore == null ) {
sh.paramStore=Clazz.new_([sh, $I$(4).getUserParameterStore$()],$I$(3,1).c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_ParamManager);
}var jobParams=(this.preset == null  && this.paramset != null   && this.paramset.size$() > 0 ) ? Clazz.new_($I$(5,1).c$$javax_swing_JFrame$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List,[null, sh, null, this.paramset]) : Clazz.new_($I$(5,1).c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI,[sh, this.preset]);
if (adjustingExisting) {
jobParams.setName$S($I$(2).getString$S("label.adjusting_parameters_for_calculation"));
}if (!jobParams.showRunDialog$()) {
return false;
}var prset=jobParams.getPreset$();
if (prset == null ) {
this.paramset=jobParams.isServiceDefaults$() ? null : $I$(3,"getJabafromJwsArgs$java_util_List",[jobParams.getJobParams$()]);
this.preset=null;
} else {
this.preset=prset;
this.paramset=null;
}}return true;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setWebService$jalview_ws_jws2_jabaws2_Jws2Instance$Z', function (serv, b) {
var serviceInstance=serv.action;
this.WebServiceName=serv.serviceType;
this.WebServiceJobTitle=serv.getActionText$();
this.WsURL=serv.hosturl;
if (!b) {
return Clazz.new_([this.WebServiceJobTitle, this.WebServiceJobTitle + " using service hosted at " + serv.hosturl + "\n" + (serv.description != null  ? serv.description : "") , false],$I$(6,1).c$$S$S$Z);
}return null;
});

Clazz.newMeth(C$, 'registerAAConWSInstance$javax_swing_JMenu$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame', function (wsmenu, service, alignFrame) {
var aaui=service.getAlignAnalysisUI$();
if (aaui == null ) {
return false;
}var _aaConEnabled=null;
for (var i=0; i < wsmenu.getItemCount$(); i++) {
var item=wsmenu.getItem$I(i);
if (Clazz.instanceOf(item, "javax.swing.JCheckBoxMenuItem") && item.getText$().equals$O(aaui.getAAconToggle$()) ) {
_aaConEnabled=item;
}}
{
var aaconClient=alignFrame.getViewport$().getCalcManager$().getRegisteredWorkersOfClass$Class(aaui.getClient$());
if (aaconClient != null  && aaconClient.size$() > 0 ) {
var worker=aaconClient.get$I(0);
if (!worker.service.hosturl.equals$O(service.hosturl)) {
{
{
C$.removeCurrentAAConWorkerFor$jalview_ws_uimodel_AlignAnalysisUIText$jalview_gui_AlignFrame(aaui, alignFrame);
C$.buildCurrentAAConWorkerFor$jalview_ws_uimodel_AlignAnalysisUIText$jalview_gui_AlignFrame$jalview_ws_jws2_jabaws2_Jws2Instance(aaui, alignFrame, service);
}}}}}if (_aaConEnabled == null ) {
var aaConEnabled=Clazz.new_([aaui.getAAconToggle$()],$I$(7,1).c$$S);
aaConEnabled.setToolTipText$S($I$(8,"wrapTooltip$Z$S",[true, aaui.getAAconToggleTooltip$()]));
aaConEnabled.addActionListener$java_awt_event_ActionListener(((P$.Jws2Client$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jws2Client$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (arg0) {
var aaconClient=this.$finals$.alignFrame.getViewport$().getCalcManager$().getRegisteredWorkersOfClass$Class(this.$finals$.aaui.getClient$());
if (aaconClient != null  && aaconClient.size$() > 0 ) {
$I$(9).removeCurrentAAConWorkerFor$jalview_ws_uimodel_AlignAnalysisUIText$jalview_gui_AlignFrame(this.$finals$.aaui, this.$finals$.alignFrame);
} else {
$I$(9).buildCurrentAAConWorkerFor$jalview_ws_uimodel_AlignAnalysisUIText$jalview_gui_AlignFrame(this.$finals$.aaui, this.$finals$.alignFrame);
}});
})()
), Clazz.new_(P$.Jws2Client$1.$init$,[this, {alignFrame:alignFrame,aaui:aaui}])));
wsmenu.add$javax_swing_JMenuItem(aaConEnabled);
var modifyParams=Clazz.new_([aaui.getAAeditSettings$()],$I$(10,1).c$$S);
modifyParams.setToolTipText$S($I$(8,"wrapTooltip$Z$S",[true, aaui.getAAeditSettingsTooltip$()]));
modifyParams.addActionListener$java_awt_event_ActionListener(((P$.Jws2Client$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jws2Client$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (arg0) {
$I$(9).showAAConAnnotationSettingsFor$jalview_ws_uimodel_AlignAnalysisUIText$jalview_gui_AlignFrame(this.$finals$.aaui, this.$finals$.alignFrame);
});
})()
), Clazz.new_(P$.Jws2Client$2.$init$,[this, {alignFrame:alignFrame,aaui:aaui}])));
wsmenu.add$javax_swing_JMenuItem(modifyParams);
wsmenu.addMenuListener$javax_swing_event_MenuListener(((P$.Jws2Client$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jws2Client$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent', function (arg0) {
if (this.$finals$.alignFrame.getViewport$().getAlignment$().isNucleotide$() ? this.$finals$.aaui.isNa$() : this.$finals$.aaui.isPr$()) {
this.$finals$.aaConEnabled.setEnabled$Z(true);
this.$finals$.modifyParams.setEnabled$Z(true);
} else {
this.$finals$.aaConEnabled.setEnabled$Z(false);
this.$finals$.modifyParams.setEnabled$Z(false);
}var aaconClient=this.$finals$.alignFrame.getViewport$().getCalcManager$().getRegisteredWorkersOfClass$Class(this.$finals$.aaui.getClient$());
if (aaconClient != null  && aaconClient.size$() > 0 ) {
this.$finals$.aaConEnabled.setSelected$Z(true);
} else {
this.$finals$.aaConEnabled.setSelected$Z(false);
}});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent', function (arg0) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent', function (arg0) {
});
})()
), Clazz.new_(P$.Jws2Client$3.$init$,[this, {alignFrame:alignFrame,modifyParams:modifyParams,aaConEnabled:aaConEnabled,aaui:aaui}])));
}return true;
});

Clazz.newMeth(C$, 'showAAConAnnotationSettingsFor$jalview_ws_uimodel_AlignAnalysisUIText$jalview_gui_AlignFrame', function (aaui, alignFrame) {
var fave=alignFrame.getViewport$().getCalcIdSettingsFor$S(aaui.getCalcId$());
if (fave == null ) {
fave=C$.createDefaultAAConSettings$jalview_ws_uimodel_AlignAnalysisUIText(aaui);
}Clazz.new_($I$(11,1).c$$jalview_ws_jws2_dm_AAConSettings$jalview_gui_AlignFrame$Z,[fave, alignFrame, true]);
}, 1);

Clazz.newMeth(C$, 'buildCurrentAAConWorkerFor$jalview_ws_uimodel_AlignAnalysisUIText$jalview_gui_AlignFrame', function (aaui, alignFrame) {
C$.buildCurrentAAConWorkerFor$jalview_ws_uimodel_AlignAnalysisUIText$jalview_gui_AlignFrame$jalview_ws_jws2_jabaws2_Jws2Instance(aaui, alignFrame, null);
}, 1);

Clazz.newMeth(C$, 'buildCurrentAAConWorkerFor$jalview_ws_uimodel_AlignAnalysisUIText$jalview_gui_AlignFrame$jalview_ws_jws2_jabaws2_Jws2Instance', function (aaui, alignFrame, service) {
var fave=alignFrame.getViewport$().getCalcIdSettingsFor$S(aaui.getCalcId$());
if (fave == null ) {
fave=C$.createDefaultAAConSettings$jalview_ws_uimodel_AlignAnalysisUIText$jalview_ws_jws2_jabaws2_Jws2Instance(aaui, service);
} else {
if (service != null  && !fave.getService$().hosturl.equals$O(service.hosturl) ) {
$I$(12).log.debug$O("Changing AACon service to " + service.hosturl + " from " + fave.getService$().hosturl );
fave.setService$jalview_ws_jws2_jabaws2_Jws2Instance(service);
}}Clazz.new_($I$(11,1).c$$jalview_ws_jws2_dm_AAConSettings$jalview_gui_AlignFrame$Z,[fave, alignFrame, false]);
}, 1);

Clazz.newMeth(C$, 'createDefaultAAConSettings$jalview_ws_uimodel_AlignAnalysisUIText', function (aaui) {
return C$.createDefaultAAConSettings$jalview_ws_uimodel_AlignAnalysisUIText$jalview_ws_jws2_jabaws2_Jws2Instance(aaui, null);
}, 1);

Clazz.newMeth(C$, 'createDefaultAAConSettings$jalview_ws_uimodel_AlignAnalysisUIText$jalview_ws_jws2_jabaws2_Jws2Instance', function (aaui, service) {
if (service != null ) {
if (!service.serviceType.toString().equals$O($I$(13).AAConWS.toString())) {
$I$(12).log.warn$O("Ignoring invalid preferred service for AACon calculations (service type was " + service.serviceType + ")" );
service=null;
} else {
if (!$I$(14).getDiscoverer$().getServices$().contains$O(service)) {
service=null;
}}}if (service == null ) {
service=$I$(14).getDiscoverer$().getPreferredServiceFor$jalview_gui_AlignFrame$S(null, aaui.getServiceType$());
}if (service == null ) {
throw Clazz.new_([$I$(2).getString$S("error.no_aacon_service_found")],$I$(1,1).c$$S);
}return Clazz.new_($I$(15,1).c$$Z$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List,[true, service, null, null]);
}, 1);

Clazz.newMeth(C$, 'removeCurrentAAConWorkerFor$jalview_ws_uimodel_AlignAnalysisUIText$jalview_gui_AlignFrame', function (aaui, alignFrame) {
alignFrame.getViewport$().getCalcManager$().removeRegisteredWorkersOfClass$Class(aaui.getClient$());
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
