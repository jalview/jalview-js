(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JList','javax.swing.border.TitledBorder','jalview.util.MessageManager','javax.swing.JButton','javax.swing.JTable','javax.swing.JCheckBox','javax.swing.JProgressBar','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridBagLayout','java.awt.Font','java.awt.Dimension','javax.swing.BorderFactory','java.awt.FlowLayout','java.awt.GridLayout','jalview.bin.Cache','javax.swing.JTabbedPane']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GWsPreferences", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sbrsList=null;
this.sbrsListTitleBorder=null;
this.newSbrsUrl=null;
this.editSbrsUrl=null;
this.deleteSbrsUrl=null;
this.wsList=null;
this.wsListTitleBorder=null;
this.newWsUrl=null;
this.editWsUrl=null;
this.deleteWsUrl=null;
this.moveWsUrlUp=null;
this.moveWsUrlDown=null;
this.indexByHost=null;
this.indexByType=null;
this.enableJws2Services=null;
this.enableEnfinServices=null;
this.displayWsWarning=null;
this.refreshWs=null;
this.resetWs=null;
this.progressBar=null;
this.wsListPane=null;
this.wsListUrlPanel=null;
this.wsListPanel=null;
this.wsListButtons=null;
this.wsListNavButs=null;
this.srbsListPane=null;
this.srbsListUrlPanel=null;
this.srbsListPanel=null;
this.srbsListButtons=null;
this.srbsListNavButs=null;
this.myBorderlayout=null;
this.wsListBorderlayout=null;
this.srbsListBorderlayout=null;
this.wsPrefLayout=null;
this.wsListLayout=null;
this.srbsListLayout=null;
this.wsMenuLayout=null;
this.wsMenuButtons=null;
this.wsMenuRefreshButs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sbrsList=Clazz.new_($I$(1));
this.sbrsListTitleBorder=Clazz.new_($I$(2).c$$S,[$I$(3).getString$S("label.simple_bioinformatics_rest_services")]);
this.newSbrsUrl=Clazz.new_($I$(4));
this.editSbrsUrl=Clazz.new_($I$(4));
this.deleteSbrsUrl=Clazz.new_($I$(4));
this.wsList=Clazz.new_($I$(5));
this.wsListTitleBorder=Clazz.new_($I$(2).c$$S,[$I$(3).getString$S("label.web_service_discovery_urls")]);
this.newWsUrl=Clazz.new_($I$(4));
this.editWsUrl=Clazz.new_($I$(4));
this.deleteWsUrl=Clazz.new_($I$(4));
this.moveWsUrlUp=Clazz.new_($I$(4));
this.moveWsUrlDown=Clazz.new_($I$(4));
this.indexByHost=Clazz.new_($I$(6));
this.indexByType=Clazz.new_($I$(6));
this.enableJws2Services=Clazz.new_($I$(6));
this.enableEnfinServices=Clazz.new_($I$(6));
this.displayWsWarning=Clazz.new_($I$(6));
this.refreshWs=Clazz.new_($I$(4));
this.resetWs=Clazz.new_($I$(4));
this.progressBar=Clazz.new_($I$(7));
this.wsListPane=Clazz.new_($I$(8));
this.wsListUrlPanel=Clazz.new_($I$(9));
this.wsListPanel=Clazz.new_($I$(9));
this.wsListButtons=Clazz.new_($I$(9));
this.wsListNavButs=Clazz.new_($I$(9));
this.srbsListPane=Clazz.new_($I$(8));
this.srbsListUrlPanel=Clazz.new_($I$(9));
this.srbsListPanel=Clazz.new_($I$(9));
this.srbsListButtons=Clazz.new_($I$(9));
this.srbsListNavButs=Clazz.new_($I$(9));
this.myBorderlayout=Clazz.new_($I$(10));
this.wsListBorderlayout=Clazz.new_($I$(10));
this.srbsListBorderlayout=Clazz.new_($I$(10));
this.wsPrefLayout=Clazz.new_($I$(11));
this.wsListLayout=Clazz.new_($I$(11));
this.srbsListLayout=Clazz.new_($I$(11));
this.wsMenuLayout=Clazz.new_($I$(11));
this.wsMenuButtons=Clazz.new_($I$(9));
this.wsMenuRefreshButs=Clazz.new_($I$(9));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
p$1.jbInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.refreshWs.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.refreshWs.setText$S($I$(3).getString$S("action.refresh_services"));
this.refreshWs.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$1||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].refreshWs_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$1.$init$, [this, null])));
this.resetWs.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.resetWs.setText$S($I$(3).getString$S("action.reset_services"));
this.resetWs.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$2||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].resetWs_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$2.$init$, [this, null])));
this.indexByHost.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.indexByHost.setText$S($I$(3).getString$S("label.index_by_host"));
this.indexByHost.setToolTipText$S($I$(3).getString$S("label.index_web_services_menu_by_host_site"));
this.indexByHost.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$3||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].indexByHost_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$3.$init$, [this, null])));
this.indexByType.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.indexByType.setText$S($I$(3).getString$S("label.index_by_type"));
this.indexByType.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$4||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].indexByType_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$4.$init$, [this, null])));
this.enableJws2Services.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.enableJws2Services.setText$S($I$(3).getString$S("label.enable_jabaws_services"));
this.enableJws2Services.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$5||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].enableJws2Services_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$5.$init$, [this, null])));
this.displayWsWarning.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.displayWsWarning.setText$S($I$(3).getString$S("label.display_warnings"));
this.displayWsWarning.setToolTipText$S("<html>" + $I$(3).getString$S("label.option_want_informed_web_service_URL_cannot_be_accessed_jalview_when_starts_up"));
this.displayWsWarning.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$6||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].displayWsWarning_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$6.$init$, [this, null])));
this.newWsUrl.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.newWsUrl.setText$S($I$(3).getString$S("label.new_service_url"));
this.newWsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$7||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].newWsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$7.$init$, [this, null])));
this.editWsUrl.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.editWsUrl.setText$S($I$(3).getString$S("label.edit_service_url"));
this.editWsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$8||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].editWsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$8.$init$, [this, null])));
this.deleteWsUrl.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.deleteWsUrl.setText$S($I$(3).getString$S("label.delete_service_url"));
this.deleteWsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$9||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].deleteWsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$9.$init$, [this, null])));
this.moveWsUrlUp.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.moveWsUrlUp.setText$S($I$(3).getString$S("action.move_up"));
this.moveWsUrlUp.setToolTipText$S($I$(3).getString$S("label.move_url_up"));
this.moveWsUrlUp.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$10||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].moveWsUrlUp_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$10.$init$, [this, null])));
this.moveWsUrlDown.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.moveWsUrlDown.setText$S($I$(3).getString$S("action.move_down"));
this.moveWsUrlDown.setToolTipText$S($I$(3).getString$S("label.move_url_down"));
this.moveWsUrlDown.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$11||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].moveWsUrlDown_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$11.$init$, [this, null])));
this.newSbrsUrl.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.newSbrsUrl.setText$S($I$(3).getString$S("label.add_sbrs_definition"));
this.newSbrsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$12||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].newSbrsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$12.$init$, [this, null])));
this.editSbrsUrl.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.editSbrsUrl.setText$S($I$(3).getString$S("label.edit_sbrs_definition"));
this.editSbrsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$13||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].editSbrsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$13.$init$, [this, null])));
this.deleteSbrsUrl.setFont$java_awt_Font(Clazz.new_($I$(12).c$$S$I$I,["Verdana", 0, 10]));
this.deleteSbrsUrl.setText$S($I$(3).getString$S("label.delete_sbrs_definition"));
this.deleteSbrsUrl.addActionListener$java_awt_event_ActionListener(((P$.GWsPreferences$14||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GWsPreferences'].deleteSbrsUrl_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GWsPreferences'], [e]);
});
})()
), Clazz.new_(P$.GWsPreferences$14.$init$, [this, null])));
this.setLayout$java_awt_LayoutManager(this.myBorderlayout);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[500, 400]));
this.progressBar.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[450, 20]));
this.progressBar.setString$S("");
this.wsListUrlPanel.setBorder$javax_swing_border_Border($I$(14).createEtchedBorder$());
this.wsListUrlPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10)));
this.wsListPane.setBorder$javax_swing_border_Border($I$(14).createEtchedBorder$());
this.wsList.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[482, 202]));
this.wsList.getTableHeader$().setReorderingAllowed$Z(false);
this.wsListPane.getViewport$().add$java_awt_Component(this.wsList);
this.wsListPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[380, 80]));
this.wsList.setSelectionMode$I(0);
this.wsList.setColumnSelectionAllowed$Z(false);
this.wsList.addMouseListener$java_awt_event_MouseListener(((P$.GWsPreferences$15||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
), Clazz.new_(P$.GWsPreferences$15.$init$, [this, null])));
this.wsListButtons.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15)));
this.wsListButtons.add$java_awt_Component(this.newWsUrl);
this.wsListButtons.add$java_awt_Component(this.editWsUrl);
this.wsListButtons.add$java_awt_Component(this.deleteWsUrl);
this.wsListButtons.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[350, 80]));
this.wsListNavButs.setSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[80, 80]));
this.wsListNavButs.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[80, 80]));
this.wsListNavButs.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15)));
this.wsListNavButs.add$java_awt_Component(this.moveWsUrlUp);
this.wsListNavButs.add$java_awt_Component(this.moveWsUrlDown);
this.wsListUrlPanel.add$java_awt_Component$O(this.wsListPane, "Center");
this.wsListUrlPanel.add$java_awt_Component$O(this.wsListNavButs, "West");
this.wsListPanel.setBorder$javax_swing_border_Border(this.wsListTitleBorder);
this.wsListPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10)));
this.wsListPanel.add$java_awt_Component$O(this.wsListUrlPanel, "North");
this.wsListPanel.add$java_awt_Component$O(this.wsListButtons, "South");
this.srbsListUrlPanel.setBorder$javax_swing_border_Border($I$(14).createEtchedBorder$());
this.srbsListUrlPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10)));
this.srbsListPane.setBorder$javax_swing_border_Border($I$(14).createEtchedBorder$());
this.srbsListPane.getViewport$().add$java_awt_Component(this.sbrsList);
this.sbrsList.setSelectionMode$I(0);
this.sbrsList.addMouseListener$java_awt_event_MouseListener(((P$.GWsPreferences$16||
(function(){var C$=Clazz.newClass(P$, "GWsPreferences$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
), Clazz.new_(P$.GWsPreferences$16.$init$, [this, null])));
this.srbsListButtons.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15)));
this.srbsListButtons.add$java_awt_Component(this.newSbrsUrl);
this.srbsListButtons.add$java_awt_Component(this.editSbrsUrl);
this.srbsListButtons.add$java_awt_Component(this.deleteSbrsUrl);
this.srbsListUrlPanel.add$java_awt_Component$O(this.srbsListPane, "Center");
this.srbsListPanel.setBorder$javax_swing_border_Border(this.sbrsListTitleBorder);
this.srbsListPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10)));
this.srbsListPanel.add$java_awt_Component$O(this.srbsListUrlPanel, "North");
this.srbsListPanel.add$java_awt_Component$O(this.srbsListButtons, "Center");
this.wsMenuButtons.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16).c$$I$I,[2, 3]));
this.wsMenuButtons.add$java_awt_Component(this.indexByHost);
this.wsMenuButtons.add$java_awt_Component(this.indexByType);
this.wsMenuButtons.add$java_awt_Component(this.enableJws2Services);
this.wsMenuButtons.add$java_awt_Component(this.displayWsWarning);
this.wsMenuRefreshButs.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15)));
this.wsMenuRefreshButs.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[480, 30]));
this.wsMenuRefreshButs.setSize$java_awt_Dimension(Clazz.new_($I$(13).c$$I$I,[480, 30]));
this.wsMenuRefreshButs.add$java_awt_Component$O(this.refreshWs, null);
this.wsMenuRefreshButs.add$java_awt_Component$O(this.resetWs, null);
this.wsMenuRefreshButs.add$java_awt_Component$O(this.progressBar, null);
this.myBorderlayout.setHgap$I(3);
if ($I$(17).getDefault$S$Z("ENABLE_RSBS_EDITOR", false)) {
var listPanels=Clazz.new_($I$(18));
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
