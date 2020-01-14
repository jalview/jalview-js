(function(){var P$=Clazz.newPackage("jalview.ws.jws2"),I$=[[0,'jalview.ws.jws2.jabaws2.Jws2Instance','jalview.gui.AlignFrame','jalview.ws.params.WsParamSetI','java.util.List','Error','jalview.util.MessageManager','jalview.ws.jws2.AADisorderClient','javax.swing.JMenuItem','jalview.ws.jws2.SequenceAnnotationWSClient','javax.swing.JMenu','jalview.gui.JvSwingUtils','jalview.gui.Desktop']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceAnnotationWSClient", null, 'jalview.ws.jws2.Jws2Client');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$Z', function (sh, alignFrame, preset, editParams) {
C$.superclazz.c$$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List.apply(this, [alignFrame, preset, null]);
C$.$init$.apply(this);
this.initSequenceAnnotationWSClient$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$Z(sh, alignFrame, preset, editParams);
}, 1);

Clazz.newMeth(C$, 'initSequenceAnnotationWSClient$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$Z', function (sh, alignFrame, preset, editParams) {
var aaui=sh.getAlignAnalysisUI$();
if (aaui != null ) {
var clientClass=aaui.getClient$();
var clnts=alignFrame.getViewport$().getCalcManager$().getRegisteredWorkersOfClass$Class(clientClass);
var worker;
if (clnts == null  || clnts.size$() == 0 ) {
if (!this.processParams$jalview_ws_jws2_jabaws2_Jws2Instance$Z(sh, editParams)) {
return;
}try {
worker=(clientClass.getConstructor$ClassA(Clazz.array(Class, -1, [Clazz.getClass($I$(1)), Clazz.getClass($I$(2)), Clazz.getClass($I$(3),['getApplicableUrls$','getArguments$','getDescription$','getName$','getSourceFile$','isModifiable$','setArguments$java_util_List','setSourceFile$S']), Clazz.getClass($I$(4),['add$TE','add$I$TE','addAll$java_util_Collection','addAll$I$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','get$I','hashCode$','indexOf$O','isEmpty$','iterator$','lastIndexOf$O','listIterator$','listIterator$I','remove$O','remove$I','removeAll$java_util_Collection','replaceAll$java_util_function_UnaryOperator','retainAll$java_util_Collection','set$I$TE','size$','sort$java_util_Comparator','spliterator$','subList$I$I','toArray$','toArray$TTA'])])).newInstance$OA(Clazz.array(java.lang.Object, -1, [sh, alignFrame, this.preset, this.paramset])));
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
x.printStackTrace$();
throw Clazz.new_($I$(5).c$$S$Throwable,[$I$(6).getString$S("error.implementation_error"), x]);
} else {
throw x;
}
}
alignFrame.getViewport$().getCalcManager$().registerWorker$jalview_api_AlignCalcWorkerI(worker);
alignFrame.getViewport$().getCalcManager$().startWorker$jalview_api_AlignCalcWorkerI(worker);
} else {
worker=clnts.get$I(0);
if (editParams) {
this.paramset=worker.getArguments$();
preset=worker.getPreset$();
}if (!this.processParams$jalview_ws_jws2_jabaws2_Jws2Instance$Z$Z(sh, editParams, true)) {
return;
}alignFrame.getViewport$().getCalcManager$().enableWorker$jalview_api_AlignCalcWorkerI(worker);
worker.updateParameters$jalview_ws_params_WsParamSetI$java_util_List(this.preset, this.paramset);
}}if (sh.action.toLowerCase$().contains$CharSequence("disorder")) {
if (!this.processParams$jalview_ws_jws2_jabaws2_Jws2Instance$Z(sh, editParams)) {
return;
}alignFrame.getViewport$().getCalcManager$().startWorker$jalview_api_AlignCalcWorkerI(Clazz.new_($I$(7).c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List,[sh, alignFrame, preset, this.paramset]));
}});

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_dm_AAConSettings$jalview_gui_AlignFrame$Z', function (fave, alignFrame, b) {
C$.superclazz.c$$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$java_util_List.apply(this, [alignFrame, fave.getPreset$(), fave.getJobArgset$()]);
C$.$init$.apply(this);
this.initSequenceAnnotationWSClient$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$Z(fave.getService$(), alignFrame, fave.getPreset$(), b);
}, 1);

Clazz.newMeth(C$, 'attachWSMenuEntry$javax_swing_JMenu$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame', function (wsmenu, service, alignFrame) {
if (this.registerAAConWSInstance$javax_swing_JMenu$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame(wsmenu, service, alignFrame)) {
return;
}var hasparams=service.hasParameters$();
var calcName=service.serviceType.substring$I$I(0, service.serviceType.length$() - 2);
var annotservice=Clazz.new_($I$(8).c$$S,[$I$(6).formatMessage$S$SA("label.calcname_with_default_settings", Clazz.array(String, -1, [calcName]))]);
annotservice.addActionListener$java_awt_event_ActionListener(((P$.SequenceAnnotationWSClient$1||
(function(){var C$=Clazz.newClass(P$, "SequenceAnnotationWSClient$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
Clazz.new_($I$(9).c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$Z,[this.$finals$.service, this.$finals$.alignFrame, null, false]);
});
})()
), Clazz.new_(P$.SequenceAnnotationWSClient$1.$init$, [this, {service: service, alignFrame: alignFrame}])));
wsmenu.add$javax_swing_JMenuItem(annotservice);
if (hasparams) {
annotservice=Clazz.new_($I$(8).c$$S,[$I$(6).getString$S("label.edit_settings_and_run")]);
annotservice.setToolTipText$S($I$(6).getString$S("label.view_and_change_parameters_before_running_calculation"));
annotservice.addActionListener$java_awt_event_ActionListener(((P$.SequenceAnnotationWSClient$2||
(function(){var C$=Clazz.newClass(P$, "SequenceAnnotationWSClient$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
Clazz.new_($I$(9).c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$Z,[this.$finals$.service, this.$finals$.alignFrame, null, true]);
});
})()
), Clazz.new_(P$.SequenceAnnotationWSClient$2.$init$, [this, {service: service, alignFrame: alignFrame}])));
wsmenu.add$javax_swing_JMenuItem(annotservice);
var presets=service.getParamStore$().getPresets$();
if (presets != null  && presets.size$() > 0 ) {
var presetlist=Clazz.new_($I$(10).c$$S,[$I$(6).formatMessage$S$SA("label.run_with_preset", Clazz.array(String, -1, [calcName]))]);
for (var preset, $preset = presets.iterator$(); $preset.hasNext$()&&((preset=($preset.next$())),1);) {
var methodR=Clazz.new_($I$(8).c$$S,[preset.getName$()]);
methodR.setToolTipText$S($I$(11).wrapTooltip$Z$S(true, "<strong>" + (preset.isModifiable$() ? $I$(6).getString$S("label.user_preset") : $I$(6).getString$S("label.service_preset")) + "</strong><br/>" + preset.getDescription$() ));
methodR.addActionListener$java_awt_event_ActionListener(((P$.SequenceAnnotationWSClient$3||
(function(){var C$=Clazz.newClass(P$, "SequenceAnnotationWSClient$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
Clazz.new_($I$(9).c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_gui_AlignFrame$jalview_ws_params_WsParamSetI$Z,[this.$finals$.service, this.$finals$.alignFrame, this.$finals$.preset, false]);
});
})()
), Clazz.new_(P$.SequenceAnnotationWSClient$3.$init$, [this, {service: service, alignFrame: alignFrame, preset: preset}])));
presetlist.add$javax_swing_JMenuItem(methodR);
}
wsmenu.add$javax_swing_JMenuItem(presetlist);
}} else {
annotservice=Clazz.new_($I$(8).c$$S,[$I$(6).getString$S("label.view_documentation")]);
if (service.docUrl != null ) {
annotservice.addActionListener$java_awt_event_ActionListener(((P$.SequenceAnnotationWSClient$4||
(function(){var C$=Clazz.newClass(P$, "SequenceAnnotationWSClient$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
$I$(12).instance.showUrl$S(this.$finals$.service.docUrl);
});
})()
), Clazz.new_(P$.SequenceAnnotationWSClient$4.$init$, [this, {service: service}])));
annotservice.setToolTipText$S($I$(11).wrapTooltip$Z$S(true, $I$(6).formatMessage$S$SA("label.view_service_doc_url", Clazz.array(String, -1, [service.docUrl, service.docUrl]))));
wsmenu.add$javax_swing_JMenuItem(annotservice);
}}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
