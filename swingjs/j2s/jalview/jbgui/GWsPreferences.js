(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JList','javax.swing.border.TitledBorder','jalview.util.MessageManager','javax.swing.JButton','javax.swing.JTable','javax.swing.JCheckBox','javax.swing.JProgressBar','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridBagLayout','java.awt.Font','java.awt.Dimension','javax.swing.BorderFactory','java.awt.FlowLayout','java.awt.GridLayout','jalview.bin.Cache','javax.swing.JTabbedPane']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GWsPreferences", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sbrsList=Clazz.new_($I$(1,1));
this.sbrsListTitleBorder=Clazz.new_([$I$(3).getString$S("label.simple_bioinformatics_rest_services")],$I$(2,1).c$$S);
this.newSbrsUrl=Clazz.new_($I$(4,1));
this.editSbrsUrl=Clazz.new_($I$(4,1));
this.deleteSbrsUrl=Clazz.new_($I$(4,1));
this.wsList=Clazz.new_($I$(5,1));
this.wsListTitleBorder=Clazz.new_([$I$(3).getString$S("label.web_service_discovery_urls")],$I$(2,1).c$$S);
this.newWsUrl=Clazz.new_($I$(4,1));
this.editWsUrl=Clazz.new_($I$(4,1));
this.deleteWsUrl=Clazz.new_($I$(4,1));
this.moveWsUrlUp=Clazz.new_($I$(4,1));
this.moveWsUrlDown=Clazz.new_($I$(4,1));
this.indexByHost=Clazz.new_($I$(6,1));
this.indexByType=Clazz.new_($I$(6,1));
this.enableJws2Services=Clazz.new_($I$(6,1));
this.enableEnfinServices=Clazz.new_($I$(6,1));
this.displayWsWarning=Clazz.new_($I$(6,1));
this.refreshWs=Clazz.new_($I$(4,1));
this.resetWs=Clazz.new_($I$(4,1));
this.progressBar=Clazz.new_($I$(7,1));
this.wsListPane=Clazz.new_($I$(8,1));
this.wsListUrlPanel=Clazz.new_($I$(9,1));
this.wsListPanel=Clazz.new_($I$(9,1));
this.wsListButtons=Clazz.new_($I$(9,1));
this.wsListNavButs=Clazz.new_($I$(9,1));
this.srbsListPane=Clazz.new_($I$(8,1));
this.srbsListUrlPanel=Clazz.new_($I$(9,1));
this.srbsListPanel=Clazz.new_($I$(9,1));
this.srbsListButtons=Clazz.new_($I$(9,1));
this.srbsListNavButs=Clazz.new_($I$(9,1));
this.myBorderlayout=Clazz.new_($I$(10,1));
this.wsListBorderlayout=Clazz.new_($I$(10,1));
this.srbsListBorderlayout=Clazz.new_($I$(10,1));
this.wsPrefLayout=Clazz.new_($I$(11,1));
this.wsListLayout=Clazz.new_($I$(11,1));
this.srbsListLayout=Clazz.new_($I$(11,1));
this.wsMenuLayout=Clazz.new_($I$(11,1));
this.wsMenuButtons=Clazz.new_($I$(9,1));
this.wsMenuRefreshButs=Clazz.new_($I$(9,1));
},1);

C$.$fields$=[['O',['sbrsList','javax.swing.JList','sbrsListTitleBorder','javax.swing.border.TitledBorder','newSbrsUrl','javax.swing.JButton','+editSbrsUrl','+deleteSbrsUrl','wsList','javax.swing.JTable','wsListTitleBorder','javax.swing.border.TitledBorder','newWsUrl','javax.swing.JButton','+editWsUrl','+deleteWsUrl','+moveWsUrlUp','+moveWsUrlDown','indexByHost','javax.swing.JCheckBox','+indexByType','+enableJws2Services','+enableEnfinServices','+displayWsWarning','refreshWs','javax.swing.JButton','+resetWs','progressBar','javax.swing.JProgressBar','wsListPane','javax.swing.JScrollPane','wsListUrlPanel','javax.swing.JPanel','+wsListPanel','+wsListButtons','+wsListNavButs','srbsListPane','javax.swing.JScrollPane','srbsListUrlPanel','javax.swing.JPanel','+srbsListPanel','+srbsListButtons','+srbsListNavButs','myBorderlayout','java.awt.BorderLayout','+wsListBorderlayout','+srbsListBorderlayout','wsPrefLayout','java.awt.GridBagLayout','+wsListLayout','+srbsListLayout','+wsMenuLayout','wsMenuButtons','javax.swing.JPanel','+wsMenuRefreshButs']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
p$1.jbInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.refreshWs.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.refreshWs.setText$S($I$(3).getString$S("action.refresh_services"));
this.refreshWs.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].refreshWs_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$1.$init$,[this, null])));
this.resetWs.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.resetWs.setText$S($I$(3).getString$S("action.reset_services"));
this.resetWs.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].resetWs_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$2.$init$,[this, null])));
this.indexByHost.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.indexByHost.setText$S($I$(3).getString$S("label.index_by_host"));
this.indexByHost.setToolTipText$S($I$(3).getString$S("label.index_web_services_menu_by_host_site"));
this.indexByHost.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].indexByHost_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$3.$init$,[this, null])));
this.indexByType.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.indexByType.setText$S($I$(3).getString$S("label.index_by_type"));
this.indexByType.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].indexByType_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$4.$init$,[this, null])));
this.enableJws2Services.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.enableJws2Services.setText$S($I$(3).getString$S("label.enable_jabaws_services"));
this.enableJws2Services.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].enableJws2Services_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$5.$init$,[this, null])));
this.displayWsWarning.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.displayWsWarning.setText$S($I$(3).getString$S("label.display_warnings"));
this.displayWsWarning.setToolTipText$S("<html>" + $I$(3).getString$S("label.option_want_informed_web_service_URL_cannot_be_accessed_jalview_when_starts_up"));
this.displayWsWarning.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].displayWsWarning_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$6.$init$,[this, null])));
this.newWsUrl.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.newWsUrl.setText$S($I$(3).getString$S("label.new_service_url"));
this.newWsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].newWsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$7.$init$,[this, null])));
this.editWsUrl.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.editWsUrl.setText$S($I$(3).getString$S("label.edit_service_url"));
this.editWsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].editWsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$8.$init$,[this, null])));
this.deleteWsUrl.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.deleteWsUrl.setText$S($I$(3).getString$S("label.delete_service_url"));
this.deleteWsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].deleteWsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$9.$init$,[this, null])));
this.moveWsUrlUp.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.moveWsUrlUp.setText$S($I$(3).getString$S("action.move_up"));
this.moveWsUrlUp.setToolTipText$S($I$(3).getString$S("label.move_url_up"));
this.moveWsUrlUp.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].moveWsUrlUp_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$10.$init$,[this, null])));
this.moveWsUrlDown.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.moveWsUrlDown.setText$S($I$(3).getString$S("action.move_down"));
this.moveWsUrlDown.setToolTipText$S($I$(3).getString$S("label.move_url_down"));
this.moveWsUrlDown.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].moveWsUrlDown_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$11.$init$,[this, null])));
this.newSbrsUrl.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.newSbrsUrl.setText$S($I$(3).getString$S("label.add_sbrs_definition"));
this.newSbrsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].newSbrsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$12.$init$,[this, null])));
this.editSbrsUrl.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.editSbrsUrl.setText$S($I$(3).getString$S("label.edit_sbrs_definition"));
this.editSbrsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].editSbrsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$13.$init$,[this, null])));
this.deleteSbrsUrl.setFont$java_awt_Font(Clazz.new_($I$(12,1).c$$S$I$I,["Verdana", 0, 10]));
this.deleteSbrsUrl.setText$S($I$(3).getString$S("label.delete_sbrs_definition"));
this.deleteSbrsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.jbgui.GWsPreferences'].deleteSbrsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$14.$init$,[this, null])));
this.setLayout$java_awt_LayoutManager(this.myBorderlayout);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[500, 400]));
this.progressBar.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[450, 20]));
this.progressBar.setString$S("");
this.wsListUrlPanel.setBorder$javax_swing_border_Border($I$(14).createEtchedBorder$());
this.wsListUrlPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
this.wsListPane.setBorder$javax_swing_border_Border($I$(14).createEtchedBorder$());
this.wsList.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[482, 202]));
this.wsList.getTableHeader$().setReorderingAllowed$Z(false);
this.wsListPane.getViewport$().add$java_awt_Component(this.wsList);
this.wsListPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[380, 80]));
this.wsList.setSelectionMode$I(0);
this.wsList.setColumnSelectionAllowed$Z(false);
this.wsList.addMouseListener$java_awt_event_MouseListener(((P$.GWsPreferences$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
if (e.getClickCount$() > 1) {
this.b$['jalview.jbgui.GWsPreferences'].editWsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [null]);
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
});
})()
), Clazz.new_(P$.GWsPreferences$15.$init$,[this, null])));
this.wsListButtons.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15,1)));
this.wsListButtons.add$java_awt_Component(this.newWsUrl);
this.wsListButtons.add$java_awt_Component(this.editWsUrl);
this.wsListButtons.add$java_awt_Component(this.deleteWsUrl);
this.wsListButtons.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[350, 80]));
this.wsListNavButs.setSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[80, 80]));
this.wsListNavButs.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[80, 80]));
this.wsListNavButs.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15,1)));
this.wsListNavButs.add$java_awt_Component(this.moveWsUrlUp);
this.wsListNavButs.add$java_awt_Component(this.moveWsUrlDown);
this.wsListUrlPanel.add$java_awt_Component$O(this.wsListPane, "Center");
this.wsListUrlPanel.add$java_awt_Component$O(this.wsListNavButs, "West");
this.wsListPanel.setBorder$javax_swing_border_Border(this.wsListTitleBorder);
this.wsListPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
this.wsListPanel.add$java_awt_Component$O(this.wsListUrlPanel, "North");
this.wsListPanel.add$java_awt_Component$O(this.wsListButtons, "South");
this.srbsListUrlPanel.setBorder$javax_swing_border_Border($I$(14).createEtchedBorder$());
this.srbsListUrlPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
this.srbsListPane.setBorder$javax_swing_border_Border($I$(14).createEtchedBorder$());
this.srbsListPane.getViewport$().add$java_awt_Component(this.sbrsList);
this.sbrsList.setSelectionMode$I(0);
this.sbrsList.addMouseListener$java_awt_event_MouseListener(((P$.GWsPreferences$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "GWsPreferences$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
if (e.getClickCount$() > 1) {
this.b$['jalview.jbgui.GWsPreferences'].editSbrsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [null]);
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
});
})()
), Clazz.new_(P$.GWsPreferences$16.$init$,[this, null])));
this.srbsListButtons.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15,1)));
this.srbsListButtons.add$java_awt_Component(this.newSbrsUrl);
this.srbsListButtons.add$java_awt_Component(this.editSbrsUrl);
this.srbsListButtons.add$java_awt_Component(this.deleteSbrsUrl);
this.srbsListUrlPanel.add$java_awt_Component$O(this.srbsListPane, "Center");
this.srbsListPanel.setBorder$javax_swing_border_Border(this.sbrsListTitleBorder);
this.srbsListPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
this.srbsListPanel.add$java_awt_Component$O(this.srbsListUrlPanel, "North");
this.srbsListPanel.add$java_awt_Component$O(this.srbsListButtons, "Center");
this.wsMenuButtons.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16,1).c$$I$I,[2, 3]));
this.wsMenuButtons.add$java_awt_Component(this.indexByHost);
this.wsMenuButtons.add$java_awt_Component(this.indexByType);
this.wsMenuButtons.add$java_awt_Component(this.enableJws2Services);
this.wsMenuButtons.add$java_awt_Component(this.displayWsWarning);
this.wsMenuRefreshButs.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15,1)));
this.wsMenuRefreshButs.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[480, 30]));
this.wsMenuRefreshButs.setSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[480, 30]));
this.wsMenuRefreshButs.add$java_awt_Component$O(this.refreshWs, null);
this.wsMenuRefreshButs.add$java_awt_Component$O(this.resetWs, null);
this.wsMenuRefreshButs.add$java_awt_Component$O(this.progressBar, null);
this.myBorderlayout.setHgap$I(3);
if ($I$(17).getDefault$S$Z("ENABLE_RSBS_EDITOR", false)) {
var listPanels=Clazz.new_($I$(18,1));
listPanels.addTab$S$java_awt_Component("JABAWS Servers", this.wsListPanel);
listPanels.addTab$S$java_awt_Component("RSB Services", this.srbsListPanel);
this.add$java_awt_Component$O(listPanels, "North");
} else {
this.add$java_awt_Component$O(this.wsListPanel, "North");
}this.add$java_awt_Component$O(this.wsMenuButtons, "Center");
this.add$java_awt_Component$O(this.wsMenuRefreshButs, "South");
}, p$1);

Clazz.newMeth(C$, 'deleteSbrsUrl_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'editSbrsUrl_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'newSbrsUrl_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'displayWsWarning_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'resetWs_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'indexByType_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'indexByHost_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'newWsUrl_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'editWsUrl_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'deleteWsUrl_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'moveWsUrlUp_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'moveWsUrlDown_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'enableEnfinServices_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'enableJws2Services_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'refreshWs_actionPerformed$java_awt_event_ActionEvent', function (e) {
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
