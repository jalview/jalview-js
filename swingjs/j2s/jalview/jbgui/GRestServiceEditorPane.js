(function(){var P$=Clazz.newPackage("jalview.jbgui"),I$=[[0,'javax.swing.JPanel','jalview.util.MessageManager','net.miginfocom.swing.MigLayout','javax.swing.JTabbedPane','javax.swing.JTextArea','jalview.gui.JvSwingUtils','javax.swing.JLabel','javax.swing.JComboBox','javax.swing.JScrollPane','javax.swing.JCheckBox','javax.swing.border.TitledBorder','javax.swing.JList','java.awt.BorderLayout']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['panels','javax.swing.JTabbedPane','details','javax.swing.JPanel','+inputs','+paste','urldesc','javax.swing.JTextArea','+url','+urlsuff','+$name','+descr','+parseRes','action','javax.swing.JComboBox','+gapChar','acttype','javax.swing.JLabel','okButton','javax.swing.JButton','+cancelButton','svcattribs','javax.swing.JPanel','+status','iprms','javax.swing.JList','+rdata','iprmVp','javax.swing.JScrollPane','+rdataVp','+parseResVp','+urlVp','+descrVp','+urldescVp','rdataAdd','javax.swing.JButton','+rdataRem','+rdataNdown','+rdataNup','+iprmsAdd','+iprmsRem','hSeparable','javax.swing.JCheckBox','+vSeparable','parseWarnings','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.jbInit$();
}, 1);

Clazz.newMeth(C$, 'jbInit$', function () {
this.details=Clazz.new_($I$(1,1));
this.details.setName$S($I$(2).getString$S("label.details"));
this.details.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
this.inputs=Clazz.new_($I$(1,1));
this.inputs.setName$S($I$(2).getString$S("label.input_output"));
this.inputs.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$S$S$S,["", "[grow 85,fill][]", ""]));
this.paste=Clazz.new_($I$(1,1));
this.paste.setName$S($I$(2).getString$S("label.cut_paste"));
this.paste.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$S$S$S,["", "[grow 100, fill]", "[][grow 100,fill]"]));
this.panels=Clazz.new_($I$(4,1));
this.panels.addTab$S$java_awt_Component(this.details.getName$(), this.details);
this.panels.addTab$S$java_awt_Component(this.inputs.getName$(), this.inputs);
this.panels.addTab$S$java_awt_Component(this.paste.getName$(), this.paste);
var cpanel;
cpanel=this.details;
this.$name=Clazz.new_($I$(5,1).c$$I$I,[1, 12]);
$I$(6,"mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent$S",[cpanel, $I$(2).getString$S("label.short_descriptive_name_for_service"), Clazz.new_([$I$(2).getString$S("label.name")],$I$(7,1).c$$S), this.$name, "wrap"]);
this.action=Clazz.new_($I$(8,1));
$I$(6,"mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent$S",[cpanel, $I$(2).getString$S("label.function_service_performs"), Clazz.new_([$I$(2).getString$S("label.service_action")],$I$(7,1).c$$S), this.action, "wrap"]);
this.descr=Clazz.new_($I$(5,1).c$$I$I,[4, 60]);
this.descrVp=Clazz.new_($I$(9,1));
this.descrVp.setViewportView$java_awt_Component(this.descr);
$I$(6,"mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent$S",[cpanel, $I$(2).getString$S("label.brief_description_service"), Clazz.new_([$I$(2).getString$S("label.description")],$I$(7,1).c$$S), this.descrVp, "wrap"]);
this.url=Clazz.new_($I$(5,1).c$$I$I,[2, 60]);
this.urlVp=Clazz.new_($I$(9,1));
this.urlVp.setViewportView$java_awt_Component(this.url);
$I$(6,"mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent$S",[cpanel, $I$(2).getString$S("label.url_post_data_service"), Clazz.new_([$I$(2).getString$S("label.post_url")],$I$(7,1).c$$S), this.urlVp, "wrap"]);
this.urlsuff=Clazz.new_($I$(5,1));
this.urlsuff.setColumns$I(60);
$I$(6,"mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent$S",[cpanel, $I$(2).getString$S("label.optional_suffix"), Clazz.new_([$I$(2).getString$S("label.url_suffix")],$I$(7,1).c$$S), this.urlsuff, "wrap"]);
this.hSeparable=Clazz.new_([$I$(2).getString$S("label.per_seq")],$I$(10,1).c$$S);
this.hSeparable.setToolTipText$S($I$(6,"wrapTooltip$Z$S",[true, $I$(2).getString$S("label.job_created_when_checked")]));
this.hSeparable.addActionListener$java_awt_event_ActionListener(((P$.GRestServiceEditorPane$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (arg0) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].hSeparable_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], [arg0]);
});
})()
), Clazz.new_(P$.GRestServiceEditorPane$1.$init$,[this, null])));
this.vSeparable=Clazz.new_([$I$(2).getString$S("label.result_vertically_separable")],$I$(10,1).c$$S);
this.vSeparable.setToolTipText$S($I$(6,"wrapTooltip$Z$S",[true, $I$(2).getString$S("label.when_checked_job_visible_region_and_results")]));
this.vSeparable.addActionListener$java_awt_event_ActionListener(((P$.GRestServiceEditorPane$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (arg0) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].vSeparable_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], [arg0]);
});
})()
), Clazz.new_(P$.GRestServiceEditorPane$2.$init$,[this, null])));
this.gapChar=Clazz.new_($I$(8,1));
$I$(6,"mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent$S",[cpanel, $I$(2).getString$S("label.preferred_gap_character"), Clazz.new_([$I$(2).getString$S("label.gap_character") + ":"],$I$(7,1).c$$S), this.gapChar, "wrap"]);
cpanel.add$java_awt_Component(this.hSeparable);
cpanel.add$java_awt_Component(this.vSeparable);
var iprmsList=Clazz.new_($I$(1,1));
iprmsList.setBorder$javax_swing_border_Border(Clazz.new_([$I$(2).getString$S("label.data_input_parameters")],$I$(11,1).c$$S));
iprmsList.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$S$S,["", "[grow 90, fill][]"]));
this.iprmVp=Clazz.new_($I$(9,1));
this.iprmVp.getViewport$().setView$java_awt_Component(this.iprms=Clazz.new_($I$(12,1)));
iprmsList.add$java_awt_Component(this.iprmVp);
this.iprms.setSelectionMode$I(0);
this.iprms.addMouseListener$java_awt_event_MouseListener(((P$.GRestServiceEditorPane$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
if (e.getClickCount$() > 1) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].iprmListSelection_doubleClicked$.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], []);
}});
})()
), Clazz.new_(P$.GRestServiceEditorPane$3.$init$,[this, null])));
var iprmButs=Clazz.new_($I$(1,1));
iprmButs.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
this.iprmsAdd=$I$(6,"makeButton$S$S$java_awt_event_ActionListener",["+", $I$(2).getString$S("action.add_input_parameter"), ((P$.GRestServiceEditorPane$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].iprmsAdd_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], [e]);
});
})()
), Clazz.new_(P$.GRestServiceEditorPane$4.$init$,[this, null]))]);
this.iprmsRem=$I$(6,"makeButton$S$S$java_awt_event_ActionListener",["-", $I$(2).getString$S("action.remove_input_parameter"), ((P$.GRestServiceEditorPane$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].iprmsRem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], [e]);
});
})()
), Clazz.new_(P$.GRestServiceEditorPane$5.$init$,[this, null]))]);
iprmButs.add$java_awt_Component$O(this.iprmsAdd, "wrap");
iprmButs.add$java_awt_Component$O(this.iprmsRem, "wrap");
iprmsList.add$java_awt_Component$O(iprmButs, "wrap");
this.inputs.add$java_awt_Component$O(iprmsList, "wrap");
this.rdataAdd=$I$(6,"makeButton$S$S$java_awt_event_ActionListener",["+", $I$(2).getString$S("action.add_return_datatype"), ((P$.GRestServiceEditorPane$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].rdataAdd_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], [e]);
});
})()
), Clazz.new_(P$.GRestServiceEditorPane$6.$init$,[this, null]))]);
this.rdataRem=$I$(6,"makeButton$S$S$java_awt_event_ActionListener",["-", $I$(2).getString$S("action.remove_return_datatype"), ((P$.GRestServiceEditorPane$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].rdataRem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], [e]);
});
})()
), Clazz.new_(P$.GRestServiceEditorPane$7.$init$,[this, null]))]);
this.rdataNup=$I$(6,"makeButton$S$S$java_awt_event_ActionListener",[$I$(2).getString$S("action.move_up"), $I$(2).getString$S("label.move_return_type_up_order"), ((P$.GRestServiceEditorPane$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].rdataNup_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], [e]);
});
})()
), Clazz.new_(P$.GRestServiceEditorPane$8.$init$,[this, null]))]);
this.rdataNdown=$I$(6,"makeButton$S$S$java_awt_event_ActionListener",[$I$(2).getString$S("action.move_down"), $I$(2).getString$S("label.move_return_type_down_order"), ((P$.GRestServiceEditorPane$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].rdataNdown_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], [e]);
});
})()
), Clazz.new_(P$.GRestServiceEditorPane$9.$init$,[this, null]))]);
var rparamList=Clazz.new_($I$(1,1));
rparamList.setBorder$javax_swing_border_Border(Clazz.new_([$I$(2).getString$S("label.data_returned_by_service")],$I$(11,1).c$$S));
rparamList.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$S$S,["", "[grow 90, fill][]"]));
this.rdata=Clazz.new_($I$(12,1));
this.rdata.setToolTipText$S($I$(2).getString$S("label.right_click_to_edit_currently_selected_parameter"));
this.rdata.addMouseListener$java_awt_event_MouseListener(((P$.GRestServiceEditorPane$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (arg0) {
if (arg0.getButton$() == 3) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].rdata_rightClicked$java_awt_event_MouseEvent.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], [arg0]);
}});
})()
), Clazz.new_(P$.GRestServiceEditorPane$10.$init$,[this, null])));
this.rdataVp=Clazz.new_($I$(9,1));
this.rdataVp.getViewport$().setView$java_awt_Component(this.rdata);
rparamList.add$java_awt_Component(this.rdataVp);
var rparamButs=Clazz.new_($I$(1,1));
rparamButs.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
rparamButs.add$java_awt_Component$O(this.rdataAdd, "wrap");
rparamButs.add$java_awt_Component$O(this.rdataRem, "wrap");
rparamButs.add$java_awt_Component$O(this.rdataNup, "wrap");
rparamButs.add$java_awt_Component$O(this.rdataNdown, "wrap");
rparamList.add$java_awt_Component$O(rparamButs, "wrap");
this.inputs.add$java_awt_Component$O(rparamList, "wrap");
this.urldesc=Clazz.new_($I$(5,1).c$$I$I,[4, 60]);
this.urldesc.setEditable$Z(true);
this.urldesc.setWrapStyleWord$Z(true);
this.urldescVp=Clazz.new_($I$(9,1));
this.urldescVp.setViewportView$java_awt_Component(this.urldesc);
var urldescPane=Clazz.new_($I$(1,1));
urldescPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$S$S$S,["", "[grow 100, fill]", "[grow 100, fill]"]));
urldescPane.setBorder$javax_swing_border_Border(Clazz.new_([$I$(2).getString$S("label.rsbs_encoded_service")],$I$(11,1).c$$S));
urldescPane.add$java_awt_Component$O(this.urldescVp, "span");
this.paste.add$java_awt_Component$O(urldescPane, "span");
urldescPane.setToolTipText$S($I$(6,"wrapTooltip$Z$S",[true, $I$(2).getString$S("label.flat_file_representation")]));
this.parseRes=Clazz.new_($I$(5,1));
this.parseResVp=Clazz.new_($I$(9,1));
this.parseResVp.setViewportView$java_awt_Component(this.parseRes);
this.parseRes.setWrapStyleWord$Z(true);
this.parseRes.setColumns$I(60);
this.parseWarnings=Clazz.new_([Clazz.new_($I$(3,1).c$$S$S$S,["", "[grow 100, fill]", "[grow 100, fill]"])],$I$(1,1).c$$java_awt_LayoutManager);
this.parseWarnings.setBorder$javax_swing_border_Border(Clazz.new_([$I$(2).getString$S("label.parsing_errors")],$I$(11,1).c$$S));
this.parseWarnings.setToolTipText$S($I$(6,"wrapTooltip$Z$S",[true, $I$(2).getString$S("label.result_of_parsing_rsbs")]));
this.parseWarnings.add$java_awt_Component$O(this.parseResVp, "center");
this.parseRes.setEditable$Z(false);
this.paste.add$java_awt_Component$O(this.parseWarnings, "span");
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
this.add$java_awt_Component$O(this.panels, "Center");
this.okButton=$I$(6,"makeButton$S$S$java_awt_event_ActionListener",[$I$(2).getString$S("action.ok"), "", ((P$.GRestServiceEditorPane$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].ok_actionPerformed$.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], []);
});
})()
), Clazz.new_(P$.GRestServiceEditorPane$11.$init$,[this, null]))]);
this.cancelButton=$I$(6,"makeButton$S$S$java_awt_event_ActionListener",[$I$(2).getString$S("action.cancel"), "", ((P$.GRestServiceEditorPane$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestServiceEditorPane$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GRestServiceEditorPane'].cancel_actionPerformed$.apply(this.b$['jalview.jbgui.GRestServiceEditorPane'], []);
});
})()
), Clazz.new_(P$.GRestServiceEditorPane$12.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'rdata_rightClicked$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'iprmListSelection_doubleClicked$', function () {
});

Clazz.newMeth(C$, 'hSeparable_actionPerformed$java_awt_event_ActionEvent', function (arg0) {
});

Clazz.newMeth(C$, 'vSeparable_actionPerformed$java_awt_event_ActionEvent', function (arg0) {
});

Clazz.newMeth(C$, 'cancel_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'ok_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'iprmsAdd_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'iprmsRem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'rdataAdd_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'rdataRem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'rdataNup_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'rdataNdown_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'ok_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent', function (e) {
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
