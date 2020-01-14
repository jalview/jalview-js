(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JMenuBar','javax.swing.JMenu','jalview.util.MessageManager','javax.swing.JMenuItem',['jalview.util.ImageMaker','.TYPE'],'javax.swing.JPanel','java.awt.GridLayout','javax.swing.JLabel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GStructureViewer", null, 'javax.swing.JInternalFrame', ['jalview.api.structures.JalviewStructureDisplayI', ['jalview.gui.ColourMenuHelper','jalview.gui.ColourMenuHelper.ColourChangeListener']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.savemenu=null;
this.viewMenu=null;
this.colourMenu=null;
this.chainMenu=null;
this.viewerActionMenu=null;
this.alignStructs=null;
this.fitToWindow=null;
this.seqColour=null;
this.chainColour=null;
this.chargeColour=null;
this.viewerColour=null;
this.helpItem=null;
this.statusBar=null;
this.statusPanel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.setName$S("jalview-structureviewer");
var menuBar=Clazz.new_($I$(1));
this.setJMenuBar$javax_swing_JMenuBar(menuBar);
var fileMenu=Clazz.new_($I$(2));
fileMenu.setText$S($I$(3).getString$S("action.file"));
this.savemenu=Clazz.new_($I$(2));
this.savemenu.setActionCommand$S($I$(3).getString$S("action.save_image"));
this.savemenu.setText$S($I$(3).getString$S("action.save_as"));
var pdbFile=Clazz.new_($I$(4));
pdbFile.setText$S($I$(3).getString$S("label.pdb_file"));
pdbFile.addActionListener$java_awt_event_ActionListener(((P$.GStructureViewer$1||
(function(){var C$=Clazz.newClass(P$, "GStructureViewer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.jbgui.GStructureViewer'].pdbFile_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GStructureViewer'], [actionEvent]);
});
})()
), Clazz.new_(P$.GStructureViewer$1.$init$, [this, null])));
var png=Clazz.new_($I$(4));
png.setText$S("PNG");
png.addActionListener$java_awt_event_ActionListener(((P$.GStructureViewer$2||
(function(){var C$=Clazz.newClass(P$, "GStructureViewer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.jbgui.GStructureViewer'].makePDBImage$jalview_util_ImageMaker_TYPE.apply(this.b$['jalview.jbgui.GStructureViewer'], [$I$(5).PNG]);
});
})()
), Clazz.new_(P$.GStructureViewer$2.$init$, [this, null])));
var eps=Clazz.new_($I$(4));
eps.setText$S("EPS");
eps.addActionListener$java_awt_event_ActionListener(((P$.GStructureViewer$3||
(function(){var C$=Clazz.newClass(P$, "GStructureViewer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.jbgui.GStructureViewer'].makePDBImage$jalview_util_ImageMaker_TYPE.apply(this.b$['jalview.jbgui.GStructureViewer'], [$I$(5).EPS]);
});
})()
), Clazz.new_(P$.GStructureViewer$3.$init$, [this, null])));
var viewMapping=Clazz.new_($I$(4));
viewMapping.setText$S($I$(3).getString$S("label.view_mapping"));
viewMapping.addActionListener$java_awt_event_ActionListener(((P$.GStructureViewer$4||
(function(){var C$=Clazz.newClass(P$, "GStructureViewer$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.jbgui.GStructureViewer'].viewMapping_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GStructureViewer'], [actionEvent]);
});
})()
), Clazz.new_(P$.GStructureViewer$4.$init$, [this, null])));
this.viewMenu=Clazz.new_($I$(2));
this.viewMenu.setText$S($I$(3).getString$S("action.view"));
this.chainMenu=Clazz.new_($I$(2));
this.chainMenu.setText$S($I$(3).getString$S("action.show_chain"));
this.fitToWindow=Clazz.new_($I$(4));
this.fitToWindow.setText$S($I$(3).getString$S("label.fit_to_window"));
this.fitToWindow.addActionListener$java_awt_event_ActionListener(((P$.GStructureViewer$5||
(function(){var C$=Clazz.newClass(P$, "GStructureViewer$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.jbgui.GStructureViewer'].fitToWindow_actionPerformed$.apply(this.b$['jalview.jbgui.GStructureViewer'], []);
});
})()
), Clazz.new_(P$.GStructureViewer$5.$init$, [this, null])));
var helpMenu=Clazz.new_($I$(2));
helpMenu.setText$S($I$(3).getString$S("action.help"));
this.helpItem=Clazz.new_($I$(4));
this.helpItem.setText$S($I$(3).getString$S("label.jmol_help"));
this.helpItem.addActionListener$java_awt_event_ActionListener(((P$.GStructureViewer$6||
(function(){var C$=Clazz.newClass(P$, "GStructureViewer$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.jbgui.GStructureViewer'].showHelp_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GStructureViewer'], [actionEvent]);
});
})()
), Clazz.new_(P$.GStructureViewer$6.$init$, [this, null])));
this.alignStructs=Clazz.new_($I$(4));
this.alignStructs.setText$S($I$(3).getString$S("label.superpose_structures"));
this.alignStructs.addActionListener$java_awt_event_ActionListener(((P$.GStructureViewer$7||
(function(){var C$=Clazz.newClass(P$, "GStructureViewer$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.jbgui.GStructureViewer'].alignStructs_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GStructureViewer'], [actionEvent]);
});
})()
), Clazz.new_(P$.GStructureViewer$7.$init$, [this, null])));
this.viewerActionMenu=Clazz.new_($I$(2));
this.viewerActionMenu.setVisible$Z(false);
this.viewerActionMenu.add$javax_swing_JMenuItem(this.alignStructs);
this.colourMenu=Clazz.new_($I$(2));
this.colourMenu.setText$S($I$(3).getString$S("label.colours"));
fileMenu.add$javax_swing_JMenuItem(this.savemenu);
fileMenu.add$javax_swing_JMenuItem(viewMapping);
this.savemenu.add$javax_swing_JMenuItem(pdbFile);
this.savemenu.add$javax_swing_JMenuItem(png);
this.savemenu.add$javax_swing_JMenuItem(eps);
this.viewMenu.add$javax_swing_JMenuItem(this.chainMenu);
helpMenu.add$javax_swing_JMenuItem(this.helpItem);
menuBar.add$javax_swing_JMenu(fileMenu);
menuBar.add$javax_swing_JMenu(this.viewMenu);
menuBar.add$javax_swing_JMenu(this.colourMenu);
menuBar.add$javax_swing_JMenu(this.viewerActionMenu);
menuBar.add$javax_swing_JMenu(helpMenu);
this.statusPanel=Clazz.new_($I$(6));
this.statusPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7)));
this.getContentPane$().add$java_awt_Component$O(this.statusPanel, "South");
this.statusBar=Clazz.new_($I$(8));
this.statusPanel.add$java_awt_Component$O(this.statusBar, null);
}, p$1);

Clazz.newMeth(C$, 'fitToWindow_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'highlightSelection_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'viewerColour_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
});

Clazz.newMeth(C$, 'pdbFile_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
});

Clazz.newMeth(C$, 'makePDBImage$jalview_util_ImageMaker_TYPE', function (imageType) {
});

Clazz.newMeth(C$, 'viewMapping_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
});

Clazz.newMeth(C$, 'seqColour_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
});

Clazz.newMeth(C$, 'chainColour_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
});

Clazz.newMeth(C$, 'chargeColour_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
});

Clazz.newMeth(C$, 'background_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
});

Clazz.newMeth(C$, 'showHelp_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
