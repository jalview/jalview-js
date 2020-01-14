(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.gui.OptsAndParamsPage','javax.swing.JPanel','javax.swing.JSplitPane','javax.swing.JScrollPane','javax.swing.JButton','javax.swing.JComboBox','javax.swing.JTextArea','java.util.Hashtable','javax.swing.JDialog','jalview.gui.Desktop','jalview.util.MessageManager','java.awt.Rectangle','javax.swing.SwingUtilities','jalview.gui.JvSwingUtils','javax.swing.border.TitledBorder','java.awt.BorderLayout','java.awt.FlowLayout','java.awt.GridBagLayout','javax.swing.JLabel','java.awt.Font','java.awt.Dimension','java.awt.GridLayout','java.awt.GridBagConstraints','jalview.ws.jws2.JabaParamStore','net.miginfocom.swing.MigLayout','java.util.Vector','java.awt.event.ItemEvent','jalview.gui.JvOptionPane']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "WsJobParameters", null, 'javax.swing.JPanel', ['java.awt.event.ItemListener', 'java.awt.event.ActionListener', 'javax.swing.event.DocumentListener', 'jalview.gui.OptsParametersContainerI']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.linkImageURL=null;
this.opanp=null;
this.jobOptions=null;
this.paramList=null;
this.SetNamePanel=null;
this.setDetails=null;
this.settingsPanel=null;
this.jobPanel=null;
this.jobOptionsPane=null;
this.createpref=null;
this.deletepref=null;
this.revertpref=null;
this.updatepref=null;
this.startjob=null;
this.canceljob=null;
this.setName=null;
this.setDescr=null;
this.paramPane=null;
this.optsAndparams=null;
this.serviceOptions=null;
this.paramStore=null;
this.MAX_OPTWIDTH=0;
this.response=0;
this.frame=null;
this.service=null;
this.servicePresets=null;
this.settingDialog=false;
this.modifiedElements=null;
this.lastParmSet=null;
this.isUserPreset=false;
this.curSetName=null;
this.lastSetName=null;
this.lastDescrText=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.linkImageURL=this.getClass$().getResource$S("/images/link.gif");
this.opanp=Clazz.new_($I$(1).c$$jalview_gui_OptsParametersContainerI,[this]);
this.jobOptions=Clazz.new_($I$(2));
this.paramList=Clazz.new_($I$(2));
this.SetNamePanel=Clazz.new_($I$(2));
this.setDetails=Clazz.new_($I$(2));
this.settingsPanel=Clazz.new_($I$(3));
this.jobPanel=Clazz.new_($I$(2));
this.jobOptionsPane=Clazz.new_($I$(4));
this.createpref=Clazz.new_($I$(5));
this.deletepref=Clazz.new_($I$(5));
this.revertpref=Clazz.new_($I$(5));
this.updatepref=Clazz.new_($I$(5));
this.startjob=Clazz.new_($I$(5));
this.canceljob=Clazz.new_($I$(5));
this.setName=Clazz.new_($I$(6));
this.setDescr=Clazz.new_($I$(7));
this.paramPane=Clazz.new_($I$(4));
this.optsAndparams=Clazz.new_($I$(2));
this.MAX_OPTWIDTH=200;
this.response=-1;
this.frame=null;
this.servicePresets=null;
this.settingDialog=false;
this.modifiedElements=Clazz.new_($I$(8));
this.lastParmSet=null;
this.isUserPreset=false;
this.curSetName=null;
this.lastSetName=null;
this.lastDescrText=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance', function (service) {
C$.c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI.apply(this, [service, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI', function (service, preset) {
C$.c$$javax_swing_JFrame$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List.apply(this, [null, service, preset, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JFrame$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List', function (parent, service, preset, jobArgset) {
C$.c$$javax_swing_JFrame$jalview_ws_params_ParamDatastoreI$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List.apply(this, [parent, null, service, preset, jobArgset]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JFrame$jalview_ws_params_ParamDatastoreI$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List', function (parent, paramStorei, service, preset, jobArgset) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
p$1.jbInit.apply(this, []);
this.paramStore=paramStorei;
if (this.paramStore == null ) {
this.paramStore=service.getParamStore$();
}this.service=service;
this.initForService$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List(service, preset, jobArgset);
this.validate$();
}, 1);

Clazz.newMeth(C$, 'showRunDialog$', function () {
this.frame=Clazz.new_($I$(9).c$$java_awt_Frame$Z,[$I$(10).instance, true]);
this.frame.setTitle$S($I$(11).formatMessage$S$SA("label.edit_params_for", Clazz.array(String, -1, [this.service.getActionText$()])));
var deskr=$I$(10).instance.getBounds$();
var pref=this.getPreferredSize$();
this.frame.setBounds$java_awt_Rectangle(Clazz.new_($I$(12).c$$I$I$I$I,[((deskr.getCenterX$() - (pref.width/2|0))|0), ((deskr.getCenterY$() - (pref.height/2|0))|0), pref.width, pref.height]));
this.frame.setContentPane$java_awt_Container(this);
this.frame.validate$();
$I$(13).invokeLater$Runnable(((P$.WsJobParameters$1||
(function(){var C$=Clazz.newClass(P$, "WsJobParameters$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
});
})()
), Clazz.new_(P$.WsJobParameters$1.$init$, [this, null])));
this.frame.setVisible$Z(true);
if (this.response > 0) {
return true;
}return false;
});

Clazz.newMeth(C$, 'jbInit', function () {
this.addHierarchyBoundsListener$java_awt_event_HierarchyBoundsListener(((P$.WsJobParameters$2||
(function(){var C$=Clazz.newClass(P$, "WsJobParameters$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.HierarchyBoundsListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'ancestorResized$java_awt_event_HierarchyEvent', function (arg0) {
this.b$['jalview.gui.WsJobParameters'].refreshParamLayout$.apply(this.b$['jalview.gui.WsJobParameters'], []);
});

Clazz.newMeth(C$, 'ancestorMoved$java_awt_event_HierarchyEvent', function (arg0) {
});
})()
), Clazz.new_(P$.WsJobParameters$2.$init$, [this, null])));
this.updatepref=$I$(14).makeButton$S$S$java_awt_event_ActionListener($I$(11).getString$S("action.update"), $I$(11).getString$S("label.update_user_parameter_set"), ((P$.WsJobParameters$3||
(function(){var C$=Clazz.newClass(P$, "WsJobParameters$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.WsJobParameters'].update_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.WsJobParameters'], [e]);
});
})()
), Clazz.new_(P$.WsJobParameters$3.$init$, [this, null])));
this.deletepref=$I$(14).makeButton$S$S$java_awt_event_ActionListener($I$(11).getString$S("action.delete"), $I$(11).getString$S("label.delete_user_parameter_set"), ((P$.WsJobParameters$4||
(function(){var C$=Clazz.newClass(P$, "WsJobParameters$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.WsJobParameters'].delete_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.WsJobParameters'], [e]);
});
})()
), Clazz.new_(P$.WsJobParameters$4.$init$, [this, null])));
this.createpref=$I$(14).makeButton$S$S$java_awt_event_ActionListener($I$(11).getString$S("action.create"), $I$(11).getString$S("label.create_user_parameter_set"), ((P$.WsJobParameters$5||
(function(){var C$=Clazz.newClass(P$, "WsJobParameters$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.WsJobParameters'].create_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.WsJobParameters'], [e]);
});
})()
), Clazz.new_(P$.WsJobParameters$5.$init$, [this, null])));
this.revertpref=$I$(14).makeButton$S$S$java_awt_event_ActionListener($I$(11).getString$S("action.revert"), $I$(11).getString$S("label.revert_changes_user_parameter_set"), ((P$.WsJobParameters$6||
(function(){var C$=Clazz.newClass(P$, "WsJobParameters$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.WsJobParameters'].revert_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.WsJobParameters'], [e]);
});
})()
), Clazz.new_(P$.WsJobParameters$6.$init$, [this, null])));
this.startjob=$I$(14).makeButton$S$S$java_awt_event_ActionListener($I$(11).getString$S("action.start_job"), $I$(11).getString$S("label.start_job_current_settings"), ((P$.WsJobParameters$7||
(function(){var C$=Clazz.newClass(P$, "WsJobParameters$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.WsJobParameters'].startjob_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.WsJobParameters'], [e]);
});
})()
), Clazz.new_(P$.WsJobParameters$7.$init$, [this, null])));
this.canceljob=$I$(14).makeButton$S$S$java_awt_event_ActionListener($I$(11).getString$S("action.cancel_job"), $I$(11).getString$S("label.cancel_job_close_dialog"), ((P$.WsJobParameters$8||
(function(){var C$=Clazz.newClass(P$, "WsJobParameters$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.WsJobParameters'].canceljob_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.WsJobParameters'], [e]);
});
})()
), Clazz.new_(P$.WsJobParameters$8.$init$, [this, null])));
this.setDetails.setBorder$javax_swing_border_Border(Clazz.new_($I$(15).c$$S,[$I$(11).getString$S("label.details")]));
this.setDetails.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16)));
this.setDescr.setColumns$I(40);
this.setDescr.setWrapStyleWord$Z(true);
this.setDescr.setLineWrap$Z(true);
this.setDescr.setBackground$java_awt_Color(this.getBackground$());
this.setDescr.setEditable$Z(true);
this.setDescr.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(this);
this.setDescr.setToolTipText$S($I$(11).getString$S("label.edit_notes_parameter_set"));
var setDescrView=Clazz.new_($I$(4));
setDescrView.getViewport$().setView$java_awt_Component(this.setDescr);
this.setName.setEditable$Z(true);
this.setName.addItemListener$java_awt_event_ItemListener(this);
this.setName.getEditor$().addActionListener$java_awt_event_ActionListener(this);
var setNameInfo=Clazz.new_($I$(2).c$$java_awt_LayoutManager,[Clazz.new_($I$(17).c$$I,[0])]);
var gbl=Clazz.new_($I$(18));
this.SetNamePanel.setLayout$java_awt_LayoutManager(gbl);
var setNameLabel=Clazz.new_($I$(19).c$$S,[$I$(11).getString$S("label.current_parameter_set_name")]);
setNameLabel.setFont$java_awt_Font(Clazz.new_($I$(20).c$$S$I$I,["Verdana", 0, 10]));
setNameInfo.add$java_awt_Component(setNameLabel);
setNameInfo.add$java_awt_Component(this.setName);
this.updatepref.setVisible$Z(false);
this.deletepref.setVisible$Z(false);
this.revertpref.setVisible$Z(false);
this.createpref.setVisible$Z(false);
var setsavebuts=Clazz.new_($I$(2));
setsavebuts.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17).c$$I,[0]));
(setsavebuts.getLayout$()).setHgap$I(10);
(setsavebuts.getLayout$()).setVgap$I(0);
var spacer=Clazz.new_($I$(2));
spacer.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(21).c$$I$I,[2, 30]));
setsavebuts.add$java_awt_Component(spacer);
setsavebuts.add$java_awt_Component(this.deletepref);
setsavebuts.add$java_awt_Component(this.revertpref);
setsavebuts.add$java_awt_Component(this.createpref);
setsavebuts.add$java_awt_Component(this.updatepref);
var buttonArea=Clazz.new_($I$(2).c$$java_awt_LayoutManager,[Clazz.new_($I$(22).c$$I$I,[1, 1])]);
buttonArea.add$java_awt_Component(setsavebuts);
this.SetNamePanel.add$java_awt_Component(setNameInfo);
var gbc=Clazz.new_($I$(23));
gbc.gridheight=2;
gbl.setConstraints$java_awt_Component$java_awt_GridBagConstraints(setNameInfo, gbc);
this.SetNamePanel.add$java_awt_Component(buttonArea);
gbc=Clazz.new_($I$(23));
gbc.gridx=0;
gbc.gridy=2;
gbc.gridheight=1;
gbl.setConstraints$java_awt_Component$java_awt_GridBagConstraints(buttonArea, gbc);
this.setDetails.add$java_awt_Component$O(setDescrView, "Center");
this.jobOptions.setBorder$javax_swing_border_Border(Clazz.new_($I$(15).c$$S,[$I$(11).getString$S("label.options")]));
this.jobOptions.setOpaque$Z(true);
this.paramList.setBorder$javax_swing_border_Border(Clazz.new_($I$(15).c$$S,[$I$(11).getString$S("label.parameters")]));
this.paramList.setOpaque$Z(true);
var bjo=Clazz.new_($I$(2).c$$java_awt_LayoutManager,[Clazz.new_($I$(16))]);
var bjp=Clazz.new_($I$(2).c$$java_awt_LayoutManager,[Clazz.new_($I$(16))]);
bjo.add$java_awt_Component$O(this.jobOptions, "Center");
bjp.add$java_awt_Component$O(this.paramList, "Center");
bjp.setOpaque$Z(true);
bjo.setOpaque$Z(true);
this.optsAndparams.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16)));
this.optsAndparams.add$java_awt_Component$O(this.jobOptions, "North");
this.optsAndparams.add$java_awt_Component$O(this.paramList, "Center");
var jp=Clazz.new_($I$(2).c$$java_awt_LayoutManager,[Clazz.new_($I$(16))]);
jp.add$java_awt_Component$O(this.optsAndparams, "Center");
this.paramPane.getViewport$().setView$java_awt_Component(jp);
this.paramPane.setBorder$javax_swing_border_Border(null);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16)));
this.jobPanel.setPreferredSize$java_awt_Dimension(null);
this.jobPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16)));
this.jobPanel.add$java_awt_Component$O(this.setDetails, "North");
this.jobPanel.add$java_awt_Component$O(this.paramPane, "Center");
this.add$java_awt_Component$O(this.SetNamePanel, "North");
this.add$java_awt_Component$O(this.jobPanel, "Center");
var dialogpanel=Clazz.new_($I$(2));
dialogpanel.add$java_awt_Component(this.startjob);
dialogpanel.add$java_awt_Component(this.canceljob);
var windowHeight=$I$(10).instance == null  ? 540 : $I$(10).instance.getHeight$();
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(21).c$$I$I,[540, windowHeight]));
this.add$java_awt_Component$O(dialogpanel, "South");
this.validate$();
}, p$1);

Clazz.newMeth(C$, 'revert_actionPerformed$java_awt_event_ActionEvent', function (e) {
p$1.reInitDialog$S.apply(this, [this.lastParmSet]);
this.updateWebServiceMenus$();
});

Clazz.newMeth(C$, 'update_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.isUserPreset) {
var curname=(this.setName.getSelectedItem$()).trim$();
p$1._updatePreset$S$S.apply(this, [this.lastParmSet, curname]);
this.lastParmSet=curname;
this.isUserPreset=true;
p$1.initArgSetModified.apply(this, []);
p$1.syncSetNamesWithStore.apply(this, []);
}});

Clazz.newMeth(C$, '_deleteUserPreset$S', function (lastParmSet2) {
this.paramStore.deletePreset$S(lastParmSet2);
}, p$1);

Clazz.newMeth(C$, 'delete_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.isUserPreset) {
p$1._deleteUserPreset$S.apply(this, [this.lastParmSet]);
}p$1.reInitDialog$S.apply(this, [null]);
this.updateWebServiceMenus$();
});

Clazz.newMeth(C$, 'create_actionPerformed$java_awt_event_ActionEvent', function (e) {
var curname=(this.setName.getSelectedItem$()).trim$();
if (curname.length$() > 0) {
p$1._storeCurrentPreset$S.apply(this, [curname]);
this.lastParmSet=curname;
this.isUserPreset=true;
p$1.reInitDialog$S.apply(this, [curname]);
p$1.initArgSetModified.apply(this, []);
this.updateWebServiceMenus$();
} else {
System.err.println$S("Invalid name. Not saved.");
}});

Clazz.newMeth(C$, 'canceljob_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.response=0;
if (this.frame != null ) {
this.frame.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'startjob_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.response=1;
if (this.frame != null ) {
this.frame.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'initForService$jalview_ws_jws2_jabaws2_Jws2Instance$jalview_ws_params_WsParamSetI$java_util_List', function (service, jabap, jabajobArgset) {
var p=null;
var jobArgset=null;
this.settingDialog=true;
{
jobArgset=jabajobArgset == null  ? null : $I$(24).getJwsArgsfromJaba$java_util_List(jabajobArgset);
p=jabap;
}var exnames=Clazz.new_($I$(8));
for (var i=0, iSize=this.setName.getItemCount$(); i < iSize; i++) {
exnames.put$TK$TV(this.setName.getItemAt$I(i), this.setName.getItemAt$I(i));
}
this.servicePresets=Clazz.new_($I$(8));
if (!exnames.contains$O("Defaults")) {
this.setName.addItem$TE("Defaults");
exnames.put$TK$TV("Defaults", "Defaults");
this.servicePresets.put$TK$TV("Defaults", "Defaults");
}var curname=(p == null  ? "" : p.getName$());
for (var pr, $pr = this.paramStore.getPresets$().iterator$(); $pr.hasNext$()&&((pr=($pr.next$())),1);) {
if (!pr.isModifiable$()) {
this.servicePresets.put$TK$TV(pr.getName$(), "preset");
} else {
}if (!exnames.contains$O(pr.getName$())) {
this.setName.addItem$TE(pr.getName$());
}}
if (p != null ) {
p$1.reInitDialog$S.apply(this, [p.getName$()]);
p$1.initArgSetModified.apply(this, []);
} else {
if (jobArgset != null  && jobArgset.size$() > 0 ) {
this.curSetName="Supplied Settings";
this.isUserPreset=false;
p$1.updateTable$jalview_ws_params_WsParamSetI$java_util_List.apply(this, [p, jobArgset]);
this.setName.setSelectedItem$O(this.curSetName);
p$1.updateButtonDisplay.apply(this, []);
} else {
this.curSetName=null;
p$1.reInitDialog$S.apply(this, [null]);
}}this.settingDialog=false;
});

Clazz.newMeth(C$, 'updateTable$jalview_ws_params_WsParamSetI$java_util_List', function (p, jobArgset) {
var setDefaultParams=false;
if (this.lastParmSet == null ) {
this.isUserPreset=false;
this.setName.setSelectedItem$O(this.lastSetName="Defaults");
}if (p == null  && "Defaults".equals$O("" + this.setName.getSelectedItem$()) ) {
setDefaultParams=true;
}var args=this.paramStore.getServiceParameters$();
{
var cw=0;
var optset=false;
for (var myarg, $myarg = args.iterator$(); $myarg.hasNext$()&&((myarg=($myarg.next$())),1);) {
if (Clazz.instanceOf(myarg, "jalview.ws.params.ParameterI")) {
var parm=myarg;
this.opanp.addParameter$jalview_ws_params_ParameterI(parm).validate$();
} else {
if (Clazz.instanceOf(myarg, "jalview.ws.params.OptionI")) {
var opt=myarg;
var ob=this.opanp.addOption$jalview_ws_params_OptionI(opt);
ob.resetToDefault$Z(setDefaultParams);
if (this.MAX_OPTWIDTH < ob.getPreferredSize$().width) {
this.MAX_OPTWIDTH=ob.getPreferredSize$().width;
}ob.validate$();
cw+=ob.getPreferredSize$().width + 5;
} else {
System.err.println$S("Ignoring unknown service argument type " + myarg.getClass$().getName$());
}}}
args=null;
}if (p != null ) {
this.isUserPreset=false;
this.setName.setSelectedItem$O(this.lastSetName=p.getName$());
this.setDescr.setText$S(this.lastDescrText=p.getDescription$());
try {
args=p.getArguments$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}if (jobArgset != null ) {
this.argSetModified$O$Z(jobArgset, true);
args=jobArgset;
}if (args != null ) {
for (var arg, $arg = args.iterator$(); $arg.hasNext$()&&((arg=($arg.next$())),1);) {
if (Clazz.instanceOf(arg, "jalview.ws.params.ParameterI")) {
this.opanp.setParameter$jalview_ws_params_ParameterI(arg);
} else {
if (Clazz.instanceOf(arg, "jalview.ws.params.OptionI")) {
this.opanp.selectOption$jalview_ws_params_OptionI$S(arg, arg.getValue$());
}}}
}this.refreshParamLayout$();
this.revalidate$();
}, p$1);

Clazz.newMeth(C$, 'isModified', function () {
return this.modifiedElements.size$() > 0;
}, p$1);

Clazz.newMeth(C$, 'initArgSetModified', function () {
this.curSetName=null;
this.modifiedElements.clear$();
p$1.updateButtonDisplay.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'updateButtonDisplay', function () {
var _update=false;
var _create=false;
var _delete=false;
var _revert=false;
if (this.modifiedElements.size$() > 0) {
_revert=true;
_update=this.isUserPreset;
if (!this.isUserPreset || this.modifiedElements.containsKey$O(this.setName) ) {
_create=true;
}} else {
}_delete=this.isUserPreset;
this.createpref.setVisible$Z(_create);
this.updatepref.setVisible$Z(_update);
this.deletepref.setVisible$Z(_delete);
this.revertpref.setVisible$Z(_revert);
this.validate$();
}, p$1);

Clazz.newMeth(C$, 'argSetModified$O$Z', function (modifiedElement, b) {
if (this.settingDialog) {
return;
}if (!b) {
this.modifiedElements.remove$O(modifiedElement);
} else {
if (b && modifiedElement === this.setName   && this.modifiedElements.contains$O(modifiedElement) ) {
b=false;
}this.modifiedElements.put$TK$TV(modifiedElement, modifiedElement);
}if (b && this.modifiedElements.size$() > 0 ) {
p$1.makeSetNameValid$Z.apply(this, [!this.isUserPreset]);
this.SetNamePanel.revalidate$();
}p$1.updateButtonDisplay.apply(this, []);
});

Clazz.newMeth(C$, 'isServicePreset$S', function (selectedItem) {
return selectedItem.equals$O("Defaults") || this.servicePresets.containsKey$O(selectedItem) ;
}, p$1);

Clazz.newMeth(C$, 'makeSetNameValid$Z', function (newuserset) {
var stn=this.settingDialog;
var renamed=false;
this.settingDialog=true;
var nm=(this.curSetName != null  ? this.curSetName : this.setName.getSelectedItem$());
if (p$1.isServicePreset$S.apply(this, [nm])) {
nm="User " + nm;
renamed=true;
}var tnm=nm;
if (newuserset) {
var i=0;
while (this.paramStore.getPreset$S(tnm) != null ){
tnm=nm + " (" + (++i) + ")" ;
renamed=true;
}
if (i > 0) {
nm=tnm;
}}var makeupdate=false;
for (var i=0, iS=this.setName.getItemCount$(); i < iS; i++) {
var snm=this.setName.getItemAt$I(i);
if (snm.equals$O(nm)) {
makeupdate=true;
}}
if (!makeupdate) {
this.setName.addItem$TE(this.curSetName=nm);
this.setName.setSelectedItem$O(this.curSetName);
}if (renamed) {
this.settingDialog=false;
this.argSetModified$O$Z(this.setName, renamed);
}this.settingDialog=stn;
}, p$1);

Clazz.newMeth(C$, 'refreshParamLayout$', function () {
var fl=Clazz.new_($I$(17).c$$I,[0]);
var sep=fl.getVgap$();
var fh=true;
var os=0;
var s=this.jobOptions.getBorder$().getBorderInsets$java_awt_Component(this.jobOptions).bottom + this.jobOptions.getBorder$().getBorderInsets$java_awt_Component(this.jobOptions).top + 2 * sep ;
var finalh=s;
var panewidth=this.paramPane.getViewport$().getSize$().width - 120 - this.jobOptions.getBorder$().getBorderInsets$java_awt_Component(this.jobOptions).left  + this.jobOptions.getBorder$().getBorderInsets$java_awt_Component(this.jobOptions).right;
var w=2 * fl.getHgap$() + (this.MAX_OPTWIDTH > 340 ? this.MAX_OPTWIDTH : 340);
var hgap=fl.getHgap$();
var cw=hgap;
if (this.opanp.getOptSet$().size$() > 0) {
this.jobOptions.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25).c$$S$S$S,["", "", ""]));
this.jobOptions.removeAll$();
for (var pbox, $pbox = this.opanp.getOptSet$().values$().iterator$(); $pbox.hasNext$()&&((pbox=($pbox.next$())),1);) {
pbox.validate$();
cw+=pbox.getSize$().width + hgap;
if (cw + 120 > panewidth) {
this.jobOptions.add$java_awt_Component$O(pbox, "wrap");
cw=hgap + pbox.getSize$().width;
fh=true;
} else {
this.jobOptions.add$java_awt_Component(pbox);
}if (fh) {
finalh+=pbox.getSize$().height + fl.getVgap$();
fh=false;
}}
this.jobOptions.revalidate$();
} else {
this.jobOptions.setVisible$Z(false);
}fl=Clazz.new_($I$(17).c$$I,[0]);
fl.setAlignOnBaseline$Z(true);
if (this.opanp.getParamSet$().size$() > 0) {
this.paramList.removeAll$();
this.paramList.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25).c$$S$S$S,["", "", ""]));
fh=true;
for (var pbox, $pbox = this.opanp.getParamSet$().values$().iterator$(); $pbox.hasNext$()&&((pbox=($pbox.next$())),1);) {
pbox.validate$();
cw+=pbox.getSize$().width + hgap;
if (cw + 160 > panewidth) {
this.paramList.add$java_awt_Component$O(pbox, "wrap");
cw=pbox.getSize$().width + hgap;
fh=true;
} else {
this.paramList.add$java_awt_Component(pbox);
}if (fh) {
finalh+=pbox.getSize$().height + fl.getVgap$();
fh=false;
}}
this.paramList.revalidate$();
} else {
this.paramList.setVisible$Z(false);
}this.paramPane.getViewport$().setAutoscrolls$Z(true);
this.paramPane.revalidate$();
this.revalidate$();
});

Clazz.newMeth(C$, 'isServiceDefaults$', function () {
return (!p$1.isModified.apply(this, []) && (this.lastParmSet != null  && this.lastParmSet.equals$O("Defaults") ) );
});

Clazz.newMeth(C$, 'getJobParams$', function () {
return this.opanp.getCurrentSettings$();
});

Clazz.newMeth(C$, 'syncSetNamesWithStore', function () {
var n=0;
var items=Clazz.new_($I$(26));
while (n < this.setName.getItemCount$()){
var item=this.setName.getItemAt$I(n);
if (!item.equals$O("Defaults") && !this.paramStore.presetExists$S(item) ) {
this.setName.removeItemAt$I(n);
} else {
items.addElement$TE(item);
n++;
}}
if (!items.contains$O("Defaults")) {
this.setName.addItem$TE("Defaults");
}for (var upn, $upn = this.paramStore.getPresets$().iterator$(); $upn.hasNext$()&&((upn=($upn.next$())),1);) {
if (!items.contains$O(upn.getName$())) {
this.setName.addItem$TE(upn.getName$());
}}
}, p$1);

Clazz.newMeth(C$, 'reInitDialog$S', function (nextPreset) {
this.settingDialog=true;
var pset=null;
if (nextPreset != null  && nextPreset.length$() > 0 ) {
pset=this.paramStore.getPreset$S(nextPreset);
}if (pset != null ) {
if (pset.isModifiable$()) {
this.isUserPreset=true;
this.setDescr.setText$S(pset.getDescription$());
p$1.updateTable$jalview_ws_params_WsParamSetI$java_util_List.apply(this, [null, pset.getArguments$()]);
this.lastParmSet=nextPreset;
} else {
this.isUserPreset=false;
this.setDescr.setText$S("");
p$1.updateTable$jalview_ws_params_WsParamSetI$java_util_List.apply(this, [pset, null]);
this.lastParmSet=nextPreset;
}} else {
this.isUserPreset=false;
this.setDescr.setText$S("");
p$1.updateTable$jalview_ws_params_WsParamSetI$java_util_List.apply(this, [null, null]);
this.lastParmSet="Defaults";
}p$1.initArgSetModified.apply(this, []);
p$1.syncSetNamesWithStore.apply(this, []);
this.setName.setSelectedItem$O(this.lastParmSet);
this.SetNamePanel.validate$();
this.validate$();
this.settingDialog=false;
}, p$1);

Clazz.newMeth(C$, 'updateWebServiceMenus$', function () {
for (var alignFrame, $alignFrame = 0, $$alignFrame = $I$(10).getAlignFrames$(); $alignFrame<$$alignFrame.length&&((alignFrame=($$alignFrame[$alignFrame])),1);$alignFrame++) {
alignFrame.BuildWebServiceMenu$();
}
});

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
if (e.getSource$() === this.setName  && e.getStateChange$() == $I$(27).SELECTED ) {
var setname=this.setName.getSelectedItem$();
System.out.println$S("Item state changed for " + setname + " (handling ? " + !this.settingDialog + ")" );
if (this.settingDialog) {
return;
}if (setname == null ) {
return;
}$I$(13).invokeLater$Runnable(((P$.WsJobParameters$10||
(function(){var C$=Clazz.newClass(P$, "WsJobParameters$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
p$1.doPreferenceComboStateChange$S.apply(this.b$['jalview.gui.WsJobParameters'], [this.$finals$.setname]);
});
})()
), Clazz.new_(P$.WsJobParameters$10.$init$, [this, {setname: setname}])));
}});

Clazz.newMeth(C$, 'doPreferenceComboStateChange$S', function (setname) {
if (p$1.isModified.apply(this, [])) {
var lsetname=(this.curSetName != null ) ? this.curSetName : this.lastParmSet;
if (lsetname.equals$O(setname)) {
return;
}this.settingDialog=true;
System.out.println$S("Prompting to save " + lsetname);
if ($I$(28).showConfirmDialog$java_awt_Component$O$S$I(this, "Parameter set '" + lsetname + "' is modifed, and your changes will be lost.\nReally change preset ?" , "Warning: Unsaved Changes", 2) != 0) {
this.settingDialog=true;
this.setName.setSelectedItem$O(lsetname);
this.settingDialog=false;
return;
}}this.settingDialog=true;
p$1.reInitDialog$S.apply(this, [setname]);
this.settingDialog=false;
}, p$1);

Clazz.newMeth(C$, '_renameExistingPreset$S$S', function (oldName, curSetName2) {
this.paramStore.updatePreset$S$S$S$java_util_List(oldName, curSetName2, this.setDescr.getText$(), this.getJobParams$());
}, p$1);

Clazz.newMeth(C$, '_storeCurrentPreset$S', function (curSetName2) {
this.paramStore.storePreset$S$S$java_util_List(curSetName2, this.setDescr.getText$(), this.getJobParams$());
}, p$1);

Clazz.newMeth(C$, '_updatePreset$S$S', function (lastParmSet2, curname) {
this.paramStore.updatePreset$S$S$S$java_util_List(lastParmSet2, curname, this.setDescr.getText$(), this.getJobParams$());
}, p$1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (Clazz.instanceOf(e.getSource$(), "java.awt.Component")) {
var src=e.getSource$();
if (src.getParent$() === this.setName ) {
var newname=e.getActionCommand$().trim$();
var msg=null;
if (p$1.isServicePreset$S.apply(this, [newname])) {
var oldname=this.curSetName != null  ? this.curSetName : this.lastParmSet;
var ourframe=this;
this.settingDialog=true;
this.setName.getEditor$().setItem$O(oldname);
this.settingDialog=false;
$I$(13).invokeLater$Runnable(((P$.WsJobParameters$11||
(function(){var C$=Clazz.newClass(P$, "WsJobParameters$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(28).showMessageDialog$java_awt_Component$S$S$I(this.$finals$.ourframe, $I$(11).getString$S("label.invalid_name_preset_exists"), $I$(11).getString$S("label.invalid_name"), 2);
});
})()
), Clazz.new_(P$.WsJobParameters$11.$init$, [this, {ourframe: ourframe}])));
return;
}this.curSetName=newname;
System.err.println$S("New name for user setting " + this.curSetName + " (was " + this.setName.getSelectedItem$() + ")" );
if (this.curSetName.equals$O(this.setName.getSelectedItem$())) {
this.curSetName=null;
}if (this.curSetName != null ) {
this.argSetModified$O$Z(this.setName, true);
return;
}}}});

Clazz.newMeth(C$, 'checkDescrModified', function () {
if (!this.settingDialog) {
this.argSetModified$O$Z(this.setDescr, (this.lastDescrText == null  ? this.setDescr.getText$().trim$().length$() > 0 : !this.setDescr.getText$().equals$O(this.lastDescrText)));
}}, p$1);

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent', function (e) {
p$1.checkDescrModified.apply(this, []);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent', function (e) {
p$1.checkDescrModified.apply(this, []);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent', function (e) {
p$1.checkDescrModified.apply(this, []);
});

Clazz.newMeth(C$, 'getPreset$', function () {
if (this.isUserPreset || p$1.isModified.apply(this, []) || (this.lastParmSet != null  && this.lastParmSet.equals$O("Defaults") )  ) {
return null;
} else {
return this.paramStore.getPreset$S(this.lastParmSet);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
