(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JMenu','javax.swing.JMenuBar','javax.swing.JMenuItem','java.awt.FlowLayout','javax.swing.JCheckBoxMenuItem','jalview.util.Platform','jalview.util.MessageManager','javax.swing.KeyStroke','java.awt.Toolkit']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GDesktop", null, 'javax.swing.JFrame');
C$.windowMenu=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.windowMenu=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.desktopMenubar=null;
this.FileMenu=null;
this.HelpMenu=null;
this.VamsasMenu=null;
this.VamsasStMenu=null;
this.inputLocalFileMenuItem=null;
this.inputURLMenuItem=null;
this.inputTextboxMenuItem=null;
this.quit=null;
this.aboutMenuItem=null;
this.documentationMenuItem=null;
this.flowLayout1=null;
this.toolsMenu=null;
this.preferences=null;
this.saveState=null;
this.saveAsState=null;
this.loadState=null;
this.inputMenu=null;
this.vamsasStart=null;
this.vamsasImport=null;
this.vamsasSave=null;
this.inputSequence=null;
this.vamsasStop=null;
this.closeAll=null;
this.raiseRelated=null;
this.minimizeAssociated=null;
this.showMemusage=null;
this.garbageCollect=null;
this.groovyShell=null;
this.experimentalFeatures=null;
this.showConsole=null;
this.showNews=null;
this.snapShotWindow=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.desktopMenubar=Clazz.new_($I$(2));
this.FileMenu=Clazz.new_($I$(1));
this.HelpMenu=Clazz.new_($I$(1));
this.VamsasMenu=Clazz.new_($I$(1));
this.VamsasStMenu=Clazz.new_($I$(1));
this.inputLocalFileMenuItem=Clazz.new_($I$(3));
this.inputURLMenuItem=Clazz.new_($I$(3));
this.inputTextboxMenuItem=Clazz.new_($I$(3));
this.quit=Clazz.new_($I$(3));
this.aboutMenuItem=Clazz.new_($I$(3));
this.documentationMenuItem=Clazz.new_($I$(3));
this.flowLayout1=Clazz.new_($I$(4));
this.toolsMenu=Clazz.new_($I$(1));
this.preferences=Clazz.new_($I$(3));
this.saveState=Clazz.new_($I$(3));
this.saveAsState=Clazz.new_($I$(3));
this.loadState=Clazz.new_($I$(3));
this.inputMenu=Clazz.new_($I$(1));
this.vamsasStart=Clazz.new_($I$(3));
this.vamsasImport=Clazz.new_($I$(3));
this.vamsasSave=Clazz.new_($I$(3));
this.inputSequence=Clazz.new_($I$(3));
this.vamsasStop=Clazz.new_($I$(3));
this.closeAll=Clazz.new_($I$(3));
this.raiseRelated=Clazz.new_($I$(3));
this.minimizeAssociated=Clazz.new_($I$(3));
this.showMemusage=Clazz.new_($I$(5));
this.garbageCollect=Clazz.new_($I$(3));
this.showConsole=Clazz.new_($I$(5));
this.showNews=Clazz.new_($I$(5));
this.snapShotWindow=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
try {
p$1.jbInit.apply(this, []);
this.setJMenuBar$javax_swing_JMenuBar(this.desktopMenubar);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
if ($I$(6).allowMnemonics$()) {
this.FileMenu.setMnemonic$C("F");
this.inputLocalFileMenuItem.setMnemonic$C("L");
this.VamsasMenu.setMnemonic$C("V");
this.inputURLMenuItem.setMnemonic$C("U");
this.inputTextboxMenuItem.setMnemonic$C("C");
this.quit.setMnemonic$C("Q");
this.saveState.setMnemonic$C("S");
this.loadState.setMnemonic$C("L");
this.inputMenu.setMnemonic$C("I");
}}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.setName$S("jalview-desktop");
this.FileMenu.setText$S($I$(7).getString$S("action.file"));
this.HelpMenu.setText$S($I$(7).getString$S("action.help"));
this.VamsasMenu.setText$S("Vamsas");
this.VamsasMenu.setToolTipText$S($I$(7).getString$S("label.share_data_vamsas_applications"));
this.VamsasStMenu.setText$S($I$(7).getString$S("label.connect_to"));
this.VamsasStMenu.setToolTipText$S($I$(7).getString$S("label.join_existing_vamsas_session"));
this.inputLocalFileMenuItem.setText$S($I$(7).getString$S("label.load_tree_from_file"));
this.inputLocalFileMenuItem.setAccelerator$javax_swing_KeyStroke($I$(8).getKeyStroke$I$I$Z(79, $I$(9).getDefaultToolkit$().getMenuShortcutKeyMask$(), false));
this.inputLocalFileMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$1||
(function(){var C$=Clazz.newClass(P$, "GDesktop$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].inputLocalFileMenuItem_actionPerformed$jalview_gui_AlignViewport.apply(this.b$['jalview.jbgui.GDesktop'], [null]);
});
})()
), Clazz.new_(P$.GDesktop$1.$init$, [this, null])));
this.inputURLMenuItem.setText$S($I$(7).getString$S("label.from_url"));
this.inputURLMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$2||
(function(){var C$=Clazz.newClass(P$, "GDesktop$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
try {
this.b$['jalview.jbgui.GDesktop'].inputURLMenuItem_actionPerformed$jalview_gui_AlignViewport.apply(this.b$['jalview.jbgui.GDesktop'], [null]);
} catch (e1) {
if (Clazz.exceptionOf(e1,"jalview.io.FileFormatException")){
System.err.println$S("Error loading from URL: " + e1.getMessage$());
} else {
throw e1;
}
}
});
})()
), Clazz.new_(P$.GDesktop$2.$init$, [this, null])));
this.inputTextboxMenuItem.setText$S($I$(7).getString$S("label.from_textbox"));
this.inputTextboxMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$3||
(function(){var C$=Clazz.newClass(P$, "GDesktop$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].inputTextboxMenuItem_actionPerformed$jalview_api_AlignmentViewPanel.apply(this.b$['jalview.jbgui.GDesktop'], [null]);
});
})()
), Clazz.new_(P$.GDesktop$3.$init$, [this, null])));
this.quit.setText$S($I$(7).getString$S("action.quit"));
this.quit.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$4||
(function(){var C$=Clazz.newClass(P$, "GDesktop$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].quit$.apply(this.b$['jalview.jbgui.GDesktop'], []);
});
})()
), Clazz.new_(P$.GDesktop$4.$init$, [this, null])));
this.aboutMenuItem.setText$S($I$(7).getString$S("label.about"));
this.aboutMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$5||
(function(){var C$=Clazz.newClass(P$, "GDesktop$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].aboutMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$5.$init$, [this, null])));
this.documentationMenuItem.setText$S($I$(7).getString$S("label.documentation"));
this.documentationMenuItem.setAccelerator$javax_swing_KeyStroke($I$(8).getKeyStroke$I$I$Z(112, 0, false));
this.documentationMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$6||
(function(){var C$=Clazz.newClass(P$, "GDesktop$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].documentationMenuItem_actionPerformed$.apply(this.b$['jalview.jbgui.GDesktop'], []);
});
})()
), Clazz.new_(P$.GDesktop$6.$init$, [this, null])));
this.getContentPane$().setLayout$java_awt_LayoutManager(this.flowLayout1);
C$.windowMenu.setText$S($I$(7).getString$S("label.window"));
this.preferences.setText$S($I$(7).getString$S("label.preferences"));
this.preferences.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$7||
(function(){var C$=Clazz.newClass(P$, "GDesktop$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].preferences_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$7.$init$, [this, null])));
this.toolsMenu.setText$S($I$(7).getString$S("label.tools"));
this.saveState.setText$S($I$(7).getString$S("action.save_project"));
this.saveState.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$8||
(function(){var C$=Clazz.newClass(P$, "GDesktop$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].saveState_actionPerformed$.apply(this.b$['jalview.jbgui.GDesktop'], []);
});
})()
), Clazz.new_(P$.GDesktop$8.$init$, [this, null])));
this.saveAsState.setText$S($I$(7).getString$S("action.save_project_as"));
this.saveAsState.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$9||
(function(){var C$=Clazz.newClass(P$, "GDesktop$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].saveAsState_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$9.$init$, [this, null])));
this.loadState.setText$S($I$(7).getString$S("action.load_project"));
this.loadState.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$10||
(function(){var C$=Clazz.newClass(P$, "GDesktop$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].loadState_actionPerformed$.apply(this.b$['jalview.jbgui.GDesktop'], []);
});
})()
), Clazz.new_(P$.GDesktop$10.$init$, [this, null])));
this.inputMenu.setText$S($I$(7).getString$S("label.input_alignment"));
this.vamsasStart.setText$S($I$(7).getString$S("label.new_vamsas_session"));
this.vamsasStart.setVisible$Z(false);
this.vamsasStart.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$11||
(function(){var C$=Clazz.newClass(P$, "GDesktop$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].vamsasStart_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$11.$init$, [this, null])));
this.vamsasImport.setText$S($I$(7).getString$S("action.load_vamsas_session"));
this.vamsasImport.setVisible$Z(false);
this.vamsasImport.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$12||
(function(){var C$=Clazz.newClass(P$, "GDesktop$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].vamsasImport_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$12.$init$, [this, null])));
this.vamsasSave.setText$S($I$(7).getString$S("action.save_vamsas_session"));
this.vamsasSave.setVisible$Z(false);
this.vamsasSave.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$13||
(function(){var C$=Clazz.newClass(P$, "GDesktop$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].vamsasSave_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$13.$init$, [this, null])));
this.inputSequence.setText$S($I$(7).getString$S("action.fetch_sequences"));
this.inputSequence.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$14||
(function(){var C$=Clazz.newClass(P$, "GDesktop$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].inputSequence_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$14.$init$, [this, null])));
this.vamsasStop.setText$S($I$(7).getString$S("label.stop_vamsas_session"));
this.vamsasStop.setVisible$Z(false);
this.vamsasStop.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$15||
(function(){var C$=Clazz.newClass(P$, "GDesktop$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].vamsasStop_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$15.$init$, [this, null])));
this.closeAll.setText$S($I$(7).getString$S("action.close_all"));
this.closeAll.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$16||
(function(){var C$=Clazz.newClass(P$, "GDesktop$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].closeAll_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$16.$init$, [this, null])));
this.raiseRelated.setText$S($I$(7).getString$S("action.raise_associated_windows"));
this.raiseRelated.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$17||
(function(){var C$=Clazz.newClass(P$, "GDesktop$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].raiseRelated_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$17.$init$, [this, null])));
this.minimizeAssociated.setText$S($I$(7).getString$S("action.minimize_associated_windows"));
this.minimizeAssociated.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$18||
(function(){var C$=Clazz.newClass(P$, "GDesktop$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].minimizeAssociated_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$18.$init$, [this, null])));
this.garbageCollect.setText$S($I$(7).getString$S("label.collect_garbage"));
this.garbageCollect.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$19||
(function(){var C$=Clazz.newClass(P$, "GDesktop$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].garbageCollect_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$19.$init$, [this, null])));
this.showMemusage.setText$S($I$(7).getString$S("label.show_memory_usage"));
this.showMemusage.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$20||
(function(){var C$=Clazz.newClass(P$, "GDesktop$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].showMemusage_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$20.$init$, [this, null])));
this.showConsole.setText$S($I$(7).getString$S("label.show_java_console"));
this.showConsole.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$21||
(function(){var C$=Clazz.newClass(P$, "GDesktop$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].showConsole_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$21.$init$, [this, null])));
this.showNews.setText$S($I$(7).getString$S("label.show_jalview_news"));
this.showNews.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$22||
(function(){var C$=Clazz.newClass(P$, "GDesktop$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].showNews_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$22.$init$, [this, null])));
this.groovyShell=Clazz.new_($I$(3));
this.groovyShell.setText$S($I$(7).getString$S("label.groovy_console"));
this.groovyShell.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$23||
(function(){var C$=Clazz.newClass(P$, "GDesktop$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].groovyShell_actionPerformed$.apply(this.b$['jalview.jbgui.GDesktop'], []);
});
})()
), Clazz.new_(P$.GDesktop$23.$init$, [this, null])));
this.experimentalFeatures=Clazz.new_($I$(5));
this.experimentalFeatures.setText$S($I$(7).getString$S("label.show_experimental"));
this.experimentalFeatures.setToolTipText$S($I$(7).getString$S("label.show_experimental_tip"));
this.experimentalFeatures.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$24||
(function(){var C$=Clazz.newClass(P$, "GDesktop$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].showExperimental_actionPerformed$Z.apply(this.b$['jalview.jbgui.GDesktop'], [this.b$['jalview.jbgui.GDesktop'].experimentalFeatures.isSelected$()]);
});
})()
), Clazz.new_(P$.GDesktop$24.$init$, [this, null])));
this.snapShotWindow.setText$S($I$(7).getString$S("label.take_snapshot"));
this.snapShotWindow.addActionListener$java_awt_event_ActionListener(((P$.GDesktop$25||
(function(){var C$=Clazz.newClass(P$, "GDesktop$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GDesktop'].snapShotWindow_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GDesktop'], [e]);
});
})()
), Clazz.new_(P$.GDesktop$25.$init$, [this, null])));
this.desktopMenubar.add$javax_swing_JMenu(this.FileMenu);
this.desktopMenubar.add$javax_swing_JMenu(this.toolsMenu);
this.VamsasMenu.setVisible$Z(false);
this.desktopMenubar.add$javax_swing_JMenu(this.VamsasMenu);
this.desktopMenubar.add$javax_swing_JMenu(this.HelpMenu);
this.desktopMenubar.add$javax_swing_JMenu(C$.windowMenu);
this.FileMenu.add$javax_swing_JMenuItem(this.inputMenu);
this.FileMenu.add$javax_swing_JMenuItem(this.inputSequence);
this.FileMenu.addSeparator$();
this.FileMenu.add$javax_swing_JMenuItem(this.saveState);
this.FileMenu.add$javax_swing_JMenuItem(this.saveAsState);
this.FileMenu.add$javax_swing_JMenuItem(this.loadState);
this.FileMenu.addSeparator$();
this.FileMenu.add$javax_swing_JMenuItem(this.quit);
this.HelpMenu.add$javax_swing_JMenuItem(this.aboutMenuItem);
this.HelpMenu.add$javax_swing_JMenuItem(this.documentationMenuItem);
this.VamsasMenu.add$javax_swing_JMenuItem(this.VamsasStMenu);
this.VamsasStMenu.setVisible$Z(false);
this.VamsasMenu.add$javax_swing_JMenuItem(this.vamsasStart);
this.VamsasMenu.add$javax_swing_JMenuItem(this.vamsasImport);
this.VamsasMenu.add$javax_swing_JMenuItem(this.vamsasSave);
this.VamsasMenu.add$javax_swing_JMenuItem(this.vamsasStop);
this.toolsMenu.add$javax_swing_JMenuItem(this.preferences);
if (!$I$(6).isJS$()) {
this.toolsMenu.add$javax_swing_JMenuItem(this.showMemusage);
this.toolsMenu.add$javax_swing_JMenuItem(this.showConsole);
}if (!$I$(6).isJS$()) {
this.toolsMenu.add$javax_swing_JMenuItem(this.showNews);
this.toolsMenu.add$javax_swing_JMenuItem(this.garbageCollect);
this.toolsMenu.add$javax_swing_JMenuItem(this.groovyShell);
}this.toolsMenu.add$javax_swing_JMenuItem(this.experimentalFeatures);
this.inputMenu.add$javax_swing_JMenuItem(this.inputLocalFileMenuItem);
this.inputMenu.add$javax_swing_JMenuItem(this.inputURLMenuItem);
this.inputMenu.add$javax_swing_JMenuItem(this.inputTextboxMenuItem);
C$.windowMenu.add$javax_swing_JMenuItem(this.closeAll);
C$.windowMenu.add$javax_swing_JMenuItem(this.raiseRelated);
C$.windowMenu.add$javax_swing_JMenuItem(this.minimizeAssociated);
C$.windowMenu.addSeparator$();
}, p$1);

Clazz.newMeth(C$, 'showExperimental_actionPerformed$Z', function (selected) {
});

Clazz.newMeth(C$, 'groovyShell_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'snapShotWindow_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showConsole_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showNews_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showMemusage_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'garbageCollect_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'vamsasStMenu_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'vamsasSave_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'inputLocalFileMenuItem_actionPerformed$jalview_gui_AlignViewport', function (av) {
});

Clazz.newMeth(C$, 'inputURLMenuItem_actionPerformed$jalview_gui_AlignViewport', function (av) {
});

Clazz.newMeth(C$, 'inputTextboxMenuItem_actionPerformed$jalview_api_AlignmentViewPanel', function (avp) {
});

Clazz.newMeth(C$, 'quit$', function () {
});

Clazz.newMeth(C$, 'aboutMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'documentationMenuItem_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'preferences_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'saveState_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'saveAsState_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'loadState_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'loadJalviewAlign_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'vamsasStart_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'inputSequence_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'vamsasStop_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'closeAll_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'raiseRelated_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'minimizeAssociated_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'vamsasImport_actionPerformed$java_awt_event_ActionEvent', function (e) {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
