(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JMenuBar','javax.swing.JMenuItem','javax.swing.JMenu','javax.swing.JCheckBoxMenuItem','javax.swing.JLabel','javax.swing.JPanel','javax.swing.JTabbedPane','java.util.HashMap','jalview.io.FileFormats','jalview.util.Platform','jalview.util.MessageManager','javax.swing.KeyStroke','java.awt.Toolkit','java.awt.BorderLayout','java.awt.Font','java.awt.Color','javax.swing.BorderFactory','jalview.bin.Cache',['jalview.analysis.AnnotationSorter','.SequenceAnnotationOrder'],'jalview.gui.JvSwingUtils','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','jalview.analysis.GeneticCodes','java.awt.GridLayout','java.awt.event.MouseAdapter','java.awt.event.FocusAdapter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GAlignFrame", null, 'javax.swing.JInternalFrame');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.alignFrameMenuBar=null;
this.closeMenuItem=null;
this.webService=null;
this.webServiceNoServices=null;
this.viewBoxesMenuItem=null;
this.viewTextMenuItem=null;
this.sortByAnnotScore=null;
this.statusBar=null;
this.outputTextboxMenu=null;
this.annotationPanelMenuItem=null;
this.colourTextMenuItem=null;
this.showNonconservedMenuItem=null;
this.undoMenuItem=null;
this.redoMenuItem=null;
this.wrapMenuItem=null;
this.renderGapsMenuItem=null;
this.showSeqFeatures=null;
this.copy=null;
this.cut=null;
this.pasteMenu=null;
this.seqLimits=null;
this.scaleAbove=null;
this.scaleLeft=null;
this.scaleRight=null;
this.applyToAllGroups=null;
this.colourMenu=null;
this.textColour=null;
this.conservationMenuItem=null;
this.modifyConservation=null;
this.abovePIDThreshold=null;
this.modifyPID=null;
this.annotationColour=null;
this.sortByTreeMenu=null;
this.sort=null;
this.calculateTree=null;
this.padGapsMenuitem=null;
this.showNpFeatsMenuitem=null;
this.showDbRefsMenuitem=null;
this.showTranslation=null;
this.showReverse=null;
this.showReverseComplement=null;
this.showProducts=null;
this.runGroovy=null;
this.loadVcf=null;
this.autoCalculate=null;
this.sortByTree=null;
this.listenToViewSelections=null;
this.statusPanel=null;
this.showAllSeqAnnotations=null;
this.hideAllSeqAnnotations=null;
this.showAllAlAnnotations=null;
this.hideAllAlAnnotations=null;
this.showComplementMenuItem=null;
this.hiddenMarkers=null;
this.tabbedPane=null;
this.reload=null;
this.formatMenu=null;
this.idRightAlign=null;
this.centreColumnLabelsMenuItem=null;
this.followHighlightMenuItem=null;
this.gatherViews=null;
this.expandViews=null;
this.showGroupConsensus=null;
this.showGroupConservation=null;
this.showConsensusHistogram=null;
this.showSequenceLogo=null;
this.normaliseSequenceLogo=null;
this.applyAutoAnnotationSettings=null;
this.openFeatureSettings=null;
this.annotationSortOrder=null;
this.showAutoCalculatedAbove=false;
this.accelerators=null;
this.splitFrame=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.alignFrameMenuBar=Clazz.new_($I$(1));
this.closeMenuItem=Clazz.new_($I$(2));
this.webService=Clazz.new_($I$(3));
this.viewBoxesMenuItem=Clazz.new_($I$(4));
this.viewTextMenuItem=Clazz.new_($I$(4));
this.sortByAnnotScore=Clazz.new_($I$(3));
this.statusBar=Clazz.new_($I$(5));
this.outputTextboxMenu=Clazz.new_($I$(3));
this.annotationPanelMenuItem=Clazz.new_($I$(4));
this.colourTextMenuItem=Clazz.new_($I$(4));
this.showNonconservedMenuItem=Clazz.new_($I$(4));
this.undoMenuItem=Clazz.new_($I$(2));
this.redoMenuItem=Clazz.new_($I$(2));
this.wrapMenuItem=Clazz.new_($I$(4));
this.renderGapsMenuItem=Clazz.new_($I$(4));
this.showSeqFeatures=Clazz.new_($I$(4));
this.copy=Clazz.new_($I$(2));
this.cut=Clazz.new_($I$(2));
this.pasteMenu=Clazz.new_($I$(3));
this.seqLimits=Clazz.new_($I$(4));
this.scaleAbove=Clazz.new_($I$(4));
this.scaleLeft=Clazz.new_($I$(4));
this.scaleRight=Clazz.new_($I$(4));
this.colourMenu=Clazz.new_($I$(3));
this.sortByTreeMenu=Clazz.new_($I$(3));
this.sort=Clazz.new_($I$(3));
this.calculateTree=Clazz.new_($I$(2));
this.padGapsMenuitem=Clazz.new_($I$(4));
this.showNpFeatsMenuitem=Clazz.new_($I$(4));
this.showDbRefsMenuitem=Clazz.new_($I$(4));
this.showTranslation=Clazz.new_($I$(3));
this.showReverse=Clazz.new_($I$(2));
this.showReverseComplement=Clazz.new_($I$(2));
this.showProducts=Clazz.new_($I$(3));
this.runGroovy=Clazz.new_($I$(2));
this.autoCalculate=Clazz.new_($I$(4));
this.sortByTree=Clazz.new_($I$(4));
this.listenToViewSelections=Clazz.new_($I$(4));
this.statusPanel=Clazz.new_($I$(6));
this.showAllSeqAnnotations=Clazz.new_($I$(2));
this.hideAllSeqAnnotations=Clazz.new_($I$(2));
this.showAllAlAnnotations=Clazz.new_($I$(2));
this.hideAllAlAnnotations=Clazz.new_($I$(2));
this.showComplementMenuItem=Clazz.new_($I$(4));
this.hiddenMarkers=Clazz.new_($I$(4));
this.tabbedPane=Clazz.new_($I$(7));
this.reload=Clazz.new_($I$(2));
this.formatMenu=Clazz.new_($I$(3));
this.idRightAlign=Clazz.new_($I$(4));
this.centreColumnLabelsMenuItem=Clazz.new_($I$(4));
this.followHighlightMenuItem=Clazz.new_($I$(4));
this.gatherViews=Clazz.new_($I$(2));
this.expandViews=Clazz.new_($I$(2));
this.showGroupConsensus=Clazz.new_($I$(4));
this.showGroupConservation=Clazz.new_($I$(4));
this.showConsensusHistogram=Clazz.new_($I$(4));
this.showSequenceLogo=Clazz.new_($I$(4));
this.normaliseSequenceLogo=Clazz.new_($I$(4));
this.applyAutoAnnotationSettings=Clazz.new_($I$(4));
this.showAutoCalculatedAbove=false;
this.accelerators=Clazz.new_($I$(8));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
try {
this.setName$S("jalview-alignment");
p$1.jbInit.apply(this, []);
this.setJMenuBar$javax_swing_JMenuBar(this.alignFrameMenuBar);
for (var ff, $ff = $I$(9).getInstance$().getWritableFormats$Z(true).iterator$(); $ff.hasNext$()&&((ff=($ff.next$())),1);) {
var item=Clazz.new_($I$(2).c$$S,[ff]);
item.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$1||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].outputText_actionPerformed$S.apply(this.b$['jalview.jbgui.GAlignFrame'], [e.getActionCommand$()]);
});
})()
), Clazz.new_(P$.GAlignFrame$1.$init$, [this, null])));
this.outputTextboxMenu.add$javax_swing_JMenuItem(item);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S(e.toString());
} else {
throw e;
}
}
if ($I$(10).allowMnemonics$()) {
this.closeMenuItem.setMnemonic$C("C");
this.outputTextboxMenu.setMnemonic$C("T");
this.undoMenuItem.setMnemonic$C("Z");
this.redoMenuItem.setMnemonic$C("0");
this.copy.setMnemonic$C("C");
this.cut.setMnemonic$C("U");
this.pasteMenu.setMnemonic$C("P");
this.reload.setMnemonic$C("R");
}}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.initColourMenu$();
var saveAs=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.save_as")]);
var al=((P$.GAlignFrame$2||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].saveAs_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$2.$init$, [this, null]));
var keyStroke=$I$(12).getKeyStroke$I$I$Z(83, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$() | 1, false);
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, saveAs, al);
this.closeMenuItem.setText$S($I$(11).getString$S("action.close"));
keyStroke=$I$(12).getKeyStroke$I$I$Z(87, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$3||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].closeMenuItem_actionPerformed$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [false]);
});
})()
), Clazz.new_(P$.GAlignFrame$3.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, this.closeMenuItem, al);
var editMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("action.edit")]);
var viewMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("action.view")]);
var annotationsMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("action.annotations")]);
var showMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("action.show")]);
this.colourMenu.setText$S($I$(11).getString$S("action.colour"));
var calculateMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("action.calculate")]);
this.webService.setText$S($I$(11).getString$S("action.web_service"));
var selectAllSequenceMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.select_all")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(65, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$4||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].selectAllSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$4.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, selectAllSequenceMenuItem, al);
var deselectAllSequenceMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.deselect_all")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(27, 0, false);
al=((P$.GAlignFrame$5||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].deselectAllSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$5.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, deselectAllSequenceMenuItem, al);
var invertSequenceMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.invert_sequence_selection")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(73, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$6||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].invertSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$6.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, invertSequenceMenuItem, al);
var grpsFromSelection=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.make_groups_selection")]);
grpsFromSelection.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$7||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].makeGrpsFromSelection_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$7.$init$, [this, null])));
var expandAlignment=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.view_flanking_regions")]);
expandAlignment.setToolTipText$S($I$(11).getString$S("label.view_flanking_regions"));
expandAlignment.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$8||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].expand_newalign$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$8.$init$, [this, null])));
var remove2LeftMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.remove_left")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(76, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$9||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].remove2LeftMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$9.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, remove2LeftMenuItem, al);
var remove2RightMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.remove_right")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(82, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$10||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].remove2RightMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$10.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, remove2RightMenuItem, al);
var removeGappedColumnMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.remove_empty_columns")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(69, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$11||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].removeGappedColumnMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$11.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, removeGappedColumnMenuItem, al);
var removeAllGapsMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.remove_all_gaps")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(69, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$() | 1, false);
al=((P$.GAlignFrame$12||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].removeAllGapsMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$12.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, removeAllGapsMenuItem, al);
var justifyLeftMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.left_justify_alignment")]);
justifyLeftMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$13||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].justifyLeftMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$13.$init$, [this, null])));
var justifyRightMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.right_justify_alignment")]);
justifyRightMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$14||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].justifyRightMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$14.$init$, [this, null])));
this.viewBoxesMenuItem.setText$S($I$(11).getString$S("action.boxes"));
this.viewBoxesMenuItem.setState$Z(true);
this.viewBoxesMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$15||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].viewBoxesMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$15.$init$, [this, null])));
this.viewTextMenuItem.setText$S($I$(11).getString$S("action.text"));
this.viewTextMenuItem.setState$Z(true);
this.viewTextMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$16||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].viewTextMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$16.$init$, [this, null])));
this.showNonconservedMenuItem.setText$S($I$(11).getString$S("label.show_non_conserved"));
this.showNonconservedMenuItem.setState$Z(false);
this.showNonconservedMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$17||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showUnconservedMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$17.$init$, [this, null])));
var sortPairwiseMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.by_pairwise_id")]);
sortPairwiseMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$18||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].sortPairwiseMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$18.$init$, [this, null])));
var sortIDMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.by_id")]);
sortIDMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$19||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].sortIDMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$19.$init$, [this, null])));
var sortLengthMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.by_length")]);
sortLengthMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$20||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].sortLengthMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$20.$init$, [this, null])));
var sortGroupMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.by_group")]);
sortGroupMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$21||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].sortGroupMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$21.$init$, [this, null])));
var removeRedundancyMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.remove_redundancy")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(68, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$22||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].removeRedundancyMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$22.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, removeRedundancyMenuItem, al);
var pairwiseAlignmentMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.pairwise_alignment")]);
pairwiseAlignmentMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$23||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].pairwiseAlignmentMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$23.$init$, [this, null])));
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(14)));
this.alignFrameMenuBar.setFont$java_awt_Font(Clazz.new_($I$(15).c$$S$I$I,["Verdana", 0, 11]));
this.statusBar.setBackground$java_awt_Color($I$(16).white);
this.statusBar.setFont$java_awt_Font(Clazz.new_($I$(15).c$$S$I$I,["Verdana", 0, 11]));
this.statusBar.setBorder$javax_swing_border_Border($I$(17).createLineBorder$java_awt_Color($I$(16).black));
this.statusBar.setText$S($I$(11).getString$S("label.status_bar"));
this.outputTextboxMenu.setText$S($I$(11).getString$S("label.out_to_textbox"));
this.annotationPanelMenuItem.setActionCommand$S("");
this.annotationPanelMenuItem.setText$S($I$(11).getString$S("label.show_annotations"));
this.annotationPanelMenuItem.setState$Z($I$(18).getDefault$S$Z("SHOW_ANNOTATIONS", true));
this.annotationPanelMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$24||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].annotationPanelMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$24.$init$, [this, null])));
this.showAllAlAnnotations.setText$S($I$(11).getString$S("label.show_all_al_annotations"));
var isAnnotationPanelShown=this.annotationPanelMenuItem.getState$();
this.showAllAlAnnotations.setEnabled$Z(isAnnotationPanelShown);
this.showAllAlAnnotations.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$25||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showAllAnnotations_actionPerformed$Z$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [false, true]);
});
})()
), Clazz.new_(P$.GAlignFrame$25.$init$, [this, null])));
this.hideAllAlAnnotations.setText$S($I$(11).getString$S("label.hide_all_al_annotations"));
this.hideAllAlAnnotations.setEnabled$Z(isAnnotationPanelShown);
this.hideAllAlAnnotations.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$26||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].hideAllAnnotations_actionPerformed$Z$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [false, true]);
});
})()
), Clazz.new_(P$.GAlignFrame$26.$init$, [this, null])));
this.showAllSeqAnnotations.setText$S($I$(11).getString$S("label.show_all_seq_annotations"));
this.showAllSeqAnnotations.setEnabled$Z(isAnnotationPanelShown);
this.showAllSeqAnnotations.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$27||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showAllAnnotations_actionPerformed$Z$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [true, false]);
});
})()
), Clazz.new_(P$.GAlignFrame$27.$init$, [this, null])));
this.hideAllSeqAnnotations.setText$S($I$(11).getString$S("label.hide_all_seq_annotations"));
this.hideAllSeqAnnotations.setEnabled$Z(isAnnotationPanelShown);
this.hideAllSeqAnnotations.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$28||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].hideAllAnnotations_actionPerformed$Z$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [true, false]);
});
})()
), Clazz.new_(P$.GAlignFrame$28.$init$, [this, null])));
var sortAnnotationsBy=$I$(19).valueOf$S($I$(18).getDefault$S$S("SORT_ANNOTATIONS", $I$(19).NONE.name$()));
var sortAnnBySequence=Clazz.new_($I$(4).c$$S,[$I$(11).getString$S("label.sort_annotations_by_sequence")]);
var sortAnnByLabel=Clazz.new_($I$(4).c$$S,[$I$(11).getString$S("label.sort_annotations_by_label")]);
sortAnnBySequence.setSelected$Z(sortAnnotationsBy === $I$(19).SEQUENCE_AND_LABEL );
sortAnnBySequence.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$29||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var newState=this.$finals$.sortAnnBySequence.getState$();
this.$finals$.sortAnnByLabel.setSelected$Z(false);
this.b$['jalview.jbgui.GAlignFrame'].setAnnotationSortOrder$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder.apply(this.b$['jalview.jbgui.GAlignFrame'], [newState ? $I$(19).SEQUENCE_AND_LABEL : $I$(19).NONE]);
this.b$['jalview.jbgui.GAlignFrame'].sortAnnotations_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$29.$init$, [this, {sortAnnBySequence: sortAnnBySequence, sortAnnByLabel: sortAnnByLabel}])));
sortAnnByLabel.setSelected$Z(sortAnnotationsBy === $I$(19).LABEL_AND_SEQUENCE );
sortAnnByLabel.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$30||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var newState=this.$finals$.sortAnnByLabel.getState$();
this.$finals$.sortAnnBySequence.setSelected$Z(false);
this.b$['jalview.jbgui.GAlignFrame'].setAnnotationSortOrder$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder.apply(this.b$['jalview.jbgui.GAlignFrame'], [newState ? $I$(19).LABEL_AND_SEQUENCE : $I$(19).NONE]);
this.b$['jalview.jbgui.GAlignFrame'].sortAnnotations_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$30.$init$, [this, {sortAnnByLabel: sortAnnByLabel, sortAnnBySequence: sortAnnBySequence}])));
this.colourTextMenuItem=Clazz.new_($I$(4).c$$S,[$I$(11).getString$S("label.colour_text")]);
this.colourTextMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$31||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].colourTextMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$31.$init$, [this, null])));
var htmlMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.html")]);
htmlMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$32||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].htmlMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$32.$init$, [this, null])));
var createBioJS=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.biojs_html_export")]);
createBioJS.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$33||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].bioJSMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$33.$init$, [this, null])));
var overviewMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.overview_window")]);
overviewMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$34||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].overviewMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$34.$init$, [this, null])));
this.undoMenuItem.setEnabled$Z(false);
this.undoMenuItem.setText$S($I$(11).getString$S("action.undo"));
keyStroke=$I$(12).getKeyStroke$I$I$Z(90, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$35||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].undoMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$35.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, this.undoMenuItem, al);
this.redoMenuItem.setEnabled$Z(false);
this.redoMenuItem.setText$S($I$(11).getString$S("action.redo"));
keyStroke=$I$(12).getKeyStroke$I$I$Z(89, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$36||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].redoMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$36.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, this.redoMenuItem, al);
this.wrapMenuItem.setText$S($I$(11).getString$S("label.wrap"));
this.wrapMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$37||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].wrapMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$37.$init$, [this, null])));
var printMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.print")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(80, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$38||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].printMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$38.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, printMenuItem, al);
this.renderGapsMenuItem.setText$S($I$(11).getString$S("action.show_gaps"));
this.renderGapsMenuItem.setState$Z(true);
this.renderGapsMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$39||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].renderGapsMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$39.$init$, [this, null])));
var findMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.find")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(70, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
findMenuItem.setToolTipText$S($I$(20).wrapTooltip$Z$S(true, $I$(11).getString$S("label.find_tip")));
al=((P$.GAlignFrame$40||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].findMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$40.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, findMenuItem, al);
this.showSeqFeatures.setText$S($I$(11).getString$S("label.show_sequence_features"));
this.showSeqFeatures.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$41||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.jbgui.GAlignFrame'].showSeqFeatures_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [actionEvent]);
});
})()
), Clazz.new_(P$.GAlignFrame$41.$init$, [this, null])));
this.showDbRefsMenuitem.setText$S($I$(11).getString$S("label.show_database_refs"));
this.showDbRefsMenuitem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$42||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showDbRefs_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$42.$init$, [this, null])));
this.showNpFeatsMenuitem.setText$S($I$(11).getString$S("label.show_non_positional_features"));
this.showNpFeatsMenuitem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$43||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showNpFeats_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$43.$init$, [this, null])));
this.showGroupConservation.setText$S($I$(11).getString$S("label.group_conservation"));
this.showGroupConservation.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$44||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showGroupConservation_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$44.$init$, [this, null])));
this.showGroupConsensus.setText$S($I$(11).getString$S("label.group_consensus"));
this.showGroupConsensus.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$45||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showGroupConsensus_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$45.$init$, [this, null])));
this.showConsensusHistogram.setText$S($I$(11).getString$S("label.show_consensus_histogram"));
this.showConsensusHistogram.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$46||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showConsensusHistogram_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$46.$init$, [this, null])));
this.showSequenceLogo.setText$S($I$(11).getString$S("label.show_consensus_logo"));
this.showSequenceLogo.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$47||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showSequenceLogo_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$47.$init$, [this, null])));
this.normaliseSequenceLogo.setText$S($I$(11).getString$S("label.norm_consensus_logo"));
this.normaliseSequenceLogo.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$48||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].normaliseSequenceLogo_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$48.$init$, [this, null])));
this.applyAutoAnnotationSettings.setText$S($I$(11).getString$S("label.apply_all_groups"));
this.applyAutoAnnotationSettings.setState$Z(false);
this.applyAutoAnnotationSettings.setVisible$Z(true);
this.applyAutoAnnotationSettings.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$49||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].applyAutoAnnotationSettings_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$49.$init$, [this, null])));
var buttonGroup=Clazz.new_($I$(21));
var showAutoFirst=Clazz.new_($I$(22).c$$S,[$I$(11).getString$S("label.show_first")]);
var showAutoLast=Clazz.new_($I$(22).c$$S,[$I$(11).getString$S("label.show_last")]);
buttonGroup.add$javax_swing_AbstractButton(showAutoFirst);
buttonGroup.add$javax_swing_AbstractButton(showAutoLast);
var autoFirst=$I$(18).getDefault$S$Z("SHOW_AUTOCALC_ABOVE", false);
showAutoFirst.setSelected$Z(autoFirst);
this.setShowAutoCalculatedAbove$Z(autoFirst);
showAutoFirst.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$50||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].setShowAutoCalculatedAbove$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [this.$finals$.showAutoFirst.isSelected$()]);
this.b$['jalview.jbgui.GAlignFrame'].sortAnnotations_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$50.$init$, [this, {showAutoFirst: showAutoFirst}])));
showAutoLast.setSelected$Z(!showAutoFirst.isSelected$());
showAutoLast.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$51||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].setShowAutoCalculatedAbove$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [!this.$finals$.showAutoLast.isSelected$()]);
this.b$['jalview.jbgui.GAlignFrame'].sortAnnotations_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$51.$init$, [this, {showAutoLast: showAutoLast}])));
var deleteGroups=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.undefine_groups")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(85, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$52||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].deleteGroups_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$52.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, deleteGroups, al);
var annotationColumn=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.select_by_annotation")]);
annotationColumn.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$53||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].annotationColumn_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$53.$init$, [this, null])));
var createGroup=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.create_group")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(71, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$54||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].createGroup_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$54.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, createGroup, al);
var unGroup=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.remove_group")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(71, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$() | 1, false);
al=((P$.GAlignFrame$55||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].unGroup_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$55.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, unGroup, al);
this.copy.setText$S($I$(11).getString$S("action.copy"));
keyStroke=$I$(12).getKeyStroke$I$I$Z(67, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$56||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].copy_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$56.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, this.copy, al);
this.cut.setText$S($I$(11).getString$S("action.cut"));
keyStroke=$I$(12).getKeyStroke$I$I$Z(88, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$57||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$57", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].cut_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$57.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, this.cut, al);
var $delete=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.delete")]);
$delete.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$58||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$58", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].delete_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$58.$init$, [this, null])));
this.pasteMenu.setText$S($I$(11).getString$S("action.paste"));
var pasteNew=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.to_new_alignment")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(86, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$() | 1, false);
al=((P$.GAlignFrame$59||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$59", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].pasteNew_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$59.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, pasteNew, al);
var pasteThis=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.to_this_alignment")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(86, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$60||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$60", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].pasteThis_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$60.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, pasteThis, al);
var createPNG=Clazz.new_($I$(2).c$$S,["PNG"]);
createPNG.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$61||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$61", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].createPNG$java_io_File.apply(this.b$['jalview.jbgui.GAlignFrame'], [null]);
});
})()
), Clazz.new_(P$.GAlignFrame$61.$init$, [this, null])));
createPNG.setActionCommand$S($I$(11).getString$S("label.save_png_image"));
var font=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.font")]);
font.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$62||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$62", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].font_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$62.$init$, [this, null])));
this.seqLimits.setText$S($I$(11).getString$S("label.show_sequence_limits"));
this.seqLimits.setState$Z($I$(18).getDefault$S$Z("SHOW_JVSUFFIX", true));
this.seqLimits.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$63||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$63", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].seqLimit_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$63.$init$, [this, null])));
var epsFile=Clazz.new_($I$(2).c$$S,["EPS"]);
epsFile.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$64||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$64", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].createEPS$java_io_File.apply(this.b$['jalview.jbgui.GAlignFrame'], [null]);
});
})()
), Clazz.new_(P$.GAlignFrame$64.$init$, [this, null])));
var createSVG=Clazz.new_($I$(2).c$$S,["SVG"]);
createSVG.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$65||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$65", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].createSVG$java_io_File.apply(this.b$['jalview.jbgui.GAlignFrame'], [null]);
});
})()
), Clazz.new_(P$.GAlignFrame$65.$init$, [this, null])));
var loadTreeMenuItem=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.load_associated_tree")]);
loadTreeMenuItem.setActionCommand$S($I$(11).getString$S("label.load_tree_for_sequence_set"));
loadTreeMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$66||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$66", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].loadTreeMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$66.$init$, [this, null])));
this.scaleAbove.setVisible$Z(false);
this.scaleAbove.setText$S($I$(11).getString$S("action.scale_above"));
this.scaleAbove.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$67||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$67", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].scaleAbove_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$67.$init$, [this, null])));
this.scaleLeft.setVisible$Z(false);
this.scaleLeft.setSelected$Z(true);
this.scaleLeft.setText$S($I$(11).getString$S("action.scale_left"));
this.scaleLeft.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$68||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$68", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].scaleLeft_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$68.$init$, [this, null])));
this.scaleRight.setVisible$Z(false);
this.scaleRight.setSelected$Z(true);
this.scaleRight.setText$S($I$(11).getString$S("action.scale_right"));
this.scaleRight.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$69||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$69", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].scaleRight_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$69.$init$, [this, null])));
this.centreColumnLabelsMenuItem.setVisible$Z(true);
this.centreColumnLabelsMenuItem.setState$Z(false);
this.centreColumnLabelsMenuItem.setText$S($I$(11).getString$S("label.centre_column_labels"));
this.centreColumnLabelsMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$70||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$70", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].centreColumnLabels_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$70.$init$, [this, null])));
this.followHighlightMenuItem.setVisible$Z(true);
this.followHighlightMenuItem.setState$Z(true);
this.followHighlightMenuItem.setText$S($I$(11).getString$S("label.automatic_scrolling"));
this.followHighlightMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$71||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$71", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].followHighlight_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$71.$init$, [this, null])));
this.sortByTreeMenu.setText$S($I$(11).getString$S("action.by_tree_order"));
this.sort.setText$S($I$(11).getString$S("action.sort"));
this.sort.addMenuListener$javax_swing_event_MenuListener(((P$.GAlignFrame$72||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$72", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent', function (e) {
this.b$['jalview.jbgui.GAlignFrame'].buildTreeSortMenu$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent', function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent', function (e) {
});
})()
), Clazz.new_(P$.GAlignFrame$72.$init$, [this, null])));
this.sortByAnnotScore.setText$S($I$(11).getString$S("label.sort_by_score"));
this.sort.add$javax_swing_JMenuItem(this.sortByAnnotScore);
this.sort.addMenuListener$javax_swing_event_MenuListener(((P$.GAlignFrame$73||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$73", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent', function (e) {
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent', function (e) {
});

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent', function (e) {
this.b$['jalview.jbgui.GAlignFrame'].buildSortByAnnotationScoresMenu$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$73.$init$, [this, null])));
this.sortByAnnotScore.setVisible$Z(false);
this.calculateTree.setText$S($I$(11).getString$S("action.calculate_tree_pca"));
this.padGapsMenuitem.setText$S($I$(11).getString$S("label.pad_gaps"));
this.padGapsMenuitem.setState$Z($I$(18).getDefault$S$Z("PAD_GAPS", false));
this.padGapsMenuitem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$74||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$74", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].padGapsMenuitem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$74.$init$, [this, null])));
var vamsasStore=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.vamsas_store")]);
vamsasStore.setVisible$Z(false);
vamsasStore.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$75||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$75", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].vamsasStore_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$75.$init$, [this, null])));
this.showTranslation.setText$S($I$(11).getString$S("label.translate_cDNA"));
var first=true;
for (var table, $table = $I$(23).getInstance$().getCodeTables$().iterator$(); $table.hasNext$()&&((table=($table.next$())),1);) {
var item=Clazz.new_($I$(2).c$$S,[table.getId$() + " " + table.getName$() ]);
this.showTranslation.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$76||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$76", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showTranslation_actionPerformed$jalview_analysis_GeneticCodeI.apply(this.b$['jalview.jbgui.GAlignFrame'], [this.$finals$.table]);
});
})()
), Clazz.new_(P$.GAlignFrame$76.$init$, [this, {table: table}])));
if (first) {
this.showTranslation.addSeparator$();
}first=false;
}
this.showReverse.setText$S($I$(11).getString$S("label.reverse"));
this.showReverse.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$77||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$77", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showReverse_actionPerformed$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [false]);
});
})()
), Clazz.new_(P$.GAlignFrame$77.$init$, [this, null])));
this.showReverseComplement.setText$S($I$(11).getString$S("label.reverse_complement"));
this.showReverseComplement.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$78||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$78", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showReverse_actionPerformed$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [true]);
});
})()
), Clazz.new_(P$.GAlignFrame$78.$init$, [this, null])));
var extractScores=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.extract_scores")]);
extractScores.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$79||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$79", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].extractScores_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$79.$init$, [this, null])));
extractScores.setVisible$Z(true);
this.showProducts.setText$S($I$(11).getString$S("label.get_cross_refs"));
this.runGroovy.setText$S($I$(11).getString$S("label.run_groovy"));
this.runGroovy.setToolTipText$S($I$(11).getString$S("label.run_groovy_tip"));
this.runGroovy.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$80||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$80", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].runGroovy_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$80.$init$, [this, null])));
this.openFeatureSettings=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.feature_settings")]);
this.openFeatureSettings.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$81||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$81", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].featureSettings_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$81.$init$, [this, null])));
var fetchSequence=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.fetch_sequences")]);
fetchSequence.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$82||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$82", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].fetchSequence_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$82.$init$, [this, null])));
var associatedData=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.load_features_annotations")]);
associatedData.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$83||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$83", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].associatedData_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$83.$init$, [this, null])));
this.loadVcf=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.load_vcf_file")]);
this.loadVcf.setToolTipText$S($I$(11).getString$S("label.load_vcf"));
this.loadVcf.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$84||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$84", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].loadVcf_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$84.$init$, [this, null])));
this.autoCalculate.setText$S($I$(11).getString$S("label.autocalculate_consensus"));
this.autoCalculate.setState$Z($I$(18).getDefault$S$Z("AUTO_CALC_CONSENSUS", true));
this.autoCalculate.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$85||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$85", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].autoCalculate_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$85.$init$, [this, null])));
this.sortByTree.setText$S($I$(11).getString$S("label.sort_alignment_new_tree"));
this.sortByTree.setToolTipText$S("<html>" + $I$(11).getString$S("label.enable_automatically_sort_alignment_when_open_new_tree"));
this.sortByTree.setState$Z($I$(18).getDefault$S$Z("SORT_BY_TREE", false));
this.sortByTree.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$86||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$86", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].sortByTreeOption_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$86.$init$, [this, null])));
this.listenToViewSelections.setText$S($I$(11).getString$S("label.listen_for_selections"));
this.listenToViewSelections.setToolTipText$S("<html>" + $I$(11).getString$S("label.selections_mirror_selections_made_same_sequences_other_views"));
this.listenToViewSelections.setState$Z(false);
this.listenToViewSelections.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$87||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$87", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].listenToViewSelections_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$87.$init$, [this, null])));
var addSequenceMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("label.add_sequences")]);
var addFromFile=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.from_file")]);
addFromFile.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$88||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$88", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].addFromFile_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$88.$init$, [this, null])));
var addFromText=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.from_textbox")]);
addFromText.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$89||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$89", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].addFromText_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$89.$init$, [this, null])));
var addFromURL=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.from_url")]);
addFromURL.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$90||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$90", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].addFromURL_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$90.$init$, [this, null])));
var exportFeatures=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.export_features")]);
exportFeatures.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$91||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$91", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].exportFeatures_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$91.$init$, [this, null])));
var exportAnnotations=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.export_annotations")]);
exportAnnotations.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$92||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$92", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].exportAnnotations_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$92.$init$, [this, null])));
this.statusPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(24)));
var showAllSeqs=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.all_sequences")]);
showAllSeqs.setToolTipText$S($I$(11).getString$S("label.toggle_sequence_visibility"));
showAllSeqs.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$93||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$93", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showAllSeqs_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$93.$init$, [this, null])));
var showAllColumns=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.all_columns")]);
showAllColumns.setToolTipText$S($I$(11).getString$S("label.toggle_columns_visibility"));
showAllColumns.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$94||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$94", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showAllColumns_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$94.$init$, [this, null])));
var hideMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("action.hide")]);
var hideSelSequences=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.selected_sequences")]);
hideSelSequences.setToolTipText$S($I$(11).getString$S("label.toggle_sequence_visibility"));
hideSelSequences.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$95||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$95", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].hideSelSequences_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$95.$init$, [this, null])));
var hideSelColumns=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.selected_columns")]);
hideSelColumns.setToolTipText$S($I$(11).getString$S("label.toggle_columns_visibility"));
hideSelColumns.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$96||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$96", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].hideSelColumns_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$96.$init$, [this, null])));
var hideAllSelection=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.selected_region")]);
hideAllSelection.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$97||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$97", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].hideAllSelection_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$97.$init$, [this, null])));
var hideAllButSelection=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.all_but_selected_region")]);
hideAllButSelection.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$98||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$98", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].hideAllButSelection_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$98.$init$, [this, null])));
var showAllhidden=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.all_sequences_columns")]);
showAllhidden.setToolTipText$S($I$(11).getString$S("label.toggles_visibility_hidden_selected_regions"));
showAllhidden.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$99||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$99", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showAllhidden_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$99.$init$, [this, null])));
this.hiddenMarkers.setText$S($I$(11).getString$S("action.show_hidden_markers"));
this.hiddenMarkers.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$100||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$100", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].hiddenMarkers_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$100.$init$, [this, null])));
var invertColSel=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.invert_column_selection")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(73, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$() | 8, false);
al=((P$.GAlignFrame$101||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$101", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].invertColSel_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$101.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, invertColSel, al);
this.showComplementMenuItem.setVisible$Z(false);
this.showComplementMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$102||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$102", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].showComplement_actionPerformed$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [this.b$['jalview.jbgui.GAlignFrame'].showComplementMenuItem.getState$()]);
});
})()
), Clazz.new_(P$.GAlignFrame$102.$init$, [this, null])));
this.tabbedPane.addChangeListener$javax_swing_event_ChangeListener(((P$.GAlignFrame$103||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$103", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (evt) {
var pane=evt.getSource$();
var sel=pane.getSelectedIndex$();
this.b$['jalview.jbgui.GAlignFrame'].tabSelectionChanged$I.apply(this.b$['jalview.jbgui.GAlignFrame'], [sel]);
});
})()
), Clazz.new_(P$.GAlignFrame$103.$init$, [this, null])));
this.tabbedPane.addMouseListener$java_awt_event_MouseListener(((P$.GAlignFrame$104||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$104", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if (e.isPopupTrigger$()) {
this.b$['jalview.jbgui.GAlignFrame'].tabbedPane_mousePressed$java_awt_event_MouseEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
if (e.isPopupTrigger$()) {
this.b$['jalview.jbgui.GAlignFrame'].tabbedPane_mousePressed$java_awt_event_MouseEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
}});
})()
), Clazz.new_($I$(25), [this, null],P$.GAlignFrame$104)));
this.tabbedPane.addFocusListener$java_awt_event_FocusListener(((P$.GAlignFrame$105||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$105", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
this.b$['jalview.jbgui.GAlignFrame'].tabbedPane_focusGained$java_awt_event_FocusEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_($I$(26), [this, null],P$.GAlignFrame$105)));
var save=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.save")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(83, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$106||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$106", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].save_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$106.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, save, al);
this.reload.setEnabled$Z(false);
this.reload.setText$S($I$(11).getString$S("action.reload"));
this.reload.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$107||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$107", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].reload_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$107.$init$, [this, null])));
var newView=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.new_view")]);
keyStroke=$I$(12).getKeyStroke$I$I$Z(84, $I$(13).getDefaultToolkit$().getMenuShortcutKeyMask$(), false);
al=((P$.GAlignFrame$108||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$108", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].newView_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$108.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, newView, al);
this.tabbedPane.setToolTipText$S("<html><i>" + $I$(11).getString$S("label.rename_tab_eXpand_reGroup") + "</i></html>" );
this.formatMenu.setText$S($I$(11).getString$S("action.format"));
var selectMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("action.select")]);
this.idRightAlign.setText$S($I$(11).getString$S("label.right_align_sequence_id"));
this.idRightAlign.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$109||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$109", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].idRightAlign_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$109.$init$, [this, null])));
this.gatherViews.setEnabled$Z(false);
this.gatherViews.setText$S($I$(11).getString$S("action.gather_views"));
keyStroke=$I$(12).getKeyStroke$I$I$Z(71, 0, false);
al=((P$.GAlignFrame$110||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$110", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].gatherViews_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$110.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, this.gatherViews, al);
this.expandViews.setEnabled$Z(false);
this.expandViews.setText$S($I$(11).getString$S("action.expand_views"));
keyStroke=$I$(12).getKeyStroke$I$I$Z(88, 0, false);
al=((P$.GAlignFrame$111||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$111", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].expandViews_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$111.$init$, [this, null]));
this.addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener(keyStroke, this.expandViews, al);
var pageSetup=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.page_setup")]);
pageSetup.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$112||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$112", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].pageSetup_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [e]);
});
})()
), Clazz.new_(P$.GAlignFrame$112.$init$, [this, null])));
var alignmentProperties=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.alignment_props")]);
alignmentProperties.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$113||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$113", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.jbgui.GAlignFrame'].alignmentProperties$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$113.$init$, [this, null])));
var selectHighlighted=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("action.select_highlighted_columns")]);
selectHighlighted.setToolTipText$S($I$(11).getString$S("tooltip.select_highlighted_columns"));
al=((P$.GAlignFrame$114||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$114", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.jbgui.GAlignFrame'].selectHighlightedColumns_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GAlignFrame'], [actionEvent]);
});
})()
), Clazz.new_(P$.GAlignFrame$114.$init$, [this, null]));
selectHighlighted.addActionListener$java_awt_event_ActionListener(al);
var tooltipSettingsMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("label.sequence_id_tooltip")]);
var autoAnnMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("label.autocalculated_annotation")]);
var exportImageMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("label.export_image")]);
var fileMenu=Clazz.new_($I$(3).c$$S,[$I$(11).getString$S("action.file")]);
this.alignFrameMenuBar.add$javax_swing_JMenu(fileMenu);
this.alignFrameMenuBar.add$javax_swing_JMenu(editMenu);
this.alignFrameMenuBar.add$javax_swing_JMenu(selectMenu);
this.alignFrameMenuBar.add$javax_swing_JMenu(viewMenu);
this.alignFrameMenuBar.add$javax_swing_JMenu(annotationsMenu);
this.alignFrameMenuBar.add$javax_swing_JMenu(this.formatMenu);
this.alignFrameMenuBar.add$javax_swing_JMenu(this.colourMenu);
this.alignFrameMenuBar.add$javax_swing_JMenu(calculateMenu);
if (!$I$(10).isJS$()) {
this.alignFrameMenuBar.add$javax_swing_JMenu(this.webService);
}fileMenu.add$javax_swing_JMenuItem(fetchSequence);
fileMenu.add$javax_swing_JMenuItem(addSequenceMenu);
fileMenu.add$javax_swing_JMenuItem(this.reload);
fileMenu.addSeparator$();
fileMenu.add$javax_swing_JMenuItem(vamsasStore);
fileMenu.add$javax_swing_JMenuItem(save);
fileMenu.add$javax_swing_JMenuItem(saveAs);
fileMenu.add$javax_swing_JMenuItem(this.outputTextboxMenu);
fileMenu.add$javax_swing_JMenuItem(pageSetup);
fileMenu.add$javax_swing_JMenuItem(printMenuItem);
fileMenu.addSeparator$();
fileMenu.add$javax_swing_JMenuItem(exportImageMenu);
fileMenu.add$javax_swing_JMenuItem(exportFeatures);
fileMenu.add$javax_swing_JMenuItem(exportAnnotations);
fileMenu.add$javax_swing_JMenuItem(loadTreeMenuItem);
fileMenu.add$javax_swing_JMenuItem(associatedData);
if (!$I$(10).isJS$()) {
fileMenu.add$javax_swing_JMenuItem(this.loadVcf);
}fileMenu.addSeparator$();
fileMenu.add$javax_swing_JMenuItem(this.closeMenuItem);
this.pasteMenu.add$javax_swing_JMenuItem(pasteNew);
this.pasteMenu.add$javax_swing_JMenuItem(pasteThis);
editMenu.add$javax_swing_JMenuItem(this.undoMenuItem);
editMenu.add$javax_swing_JMenuItem(this.redoMenuItem);
editMenu.add$javax_swing_JMenuItem(this.cut);
editMenu.add$javax_swing_JMenuItem(this.copy);
editMenu.add$javax_swing_JMenuItem(this.pasteMenu);
editMenu.add$javax_swing_JMenuItem($delete);
editMenu.addSeparator$();
editMenu.add$javax_swing_JMenuItem(remove2LeftMenuItem);
editMenu.add$javax_swing_JMenuItem(remove2RightMenuItem);
editMenu.add$javax_swing_JMenuItem(removeGappedColumnMenuItem);
editMenu.add$javax_swing_JMenuItem(removeAllGapsMenuItem);
editMenu.add$javax_swing_JMenuItem(removeRedundancyMenuItem);
editMenu.addSeparator$();
editMenu.add$javax_swing_JMenuItem(this.padGapsMenuitem);
showMenu.add$javax_swing_JMenuItem(showAllColumns);
showMenu.add$javax_swing_JMenuItem(showAllSeqs);
showMenu.add$javax_swing_JMenuItem(showAllhidden);
hideMenu.add$javax_swing_JMenuItem(hideSelColumns);
hideMenu.add$javax_swing_JMenuItem(hideSelSequences);
hideMenu.add$javax_swing_JMenuItem(hideAllSelection);
hideMenu.add$javax_swing_JMenuItem(hideAllButSelection);
viewMenu.add$javax_swing_JMenuItem(newView);
viewMenu.add$javax_swing_JMenuItem(this.expandViews);
viewMenu.add$javax_swing_JMenuItem(this.gatherViews);
viewMenu.addSeparator$();
viewMenu.add$javax_swing_JMenuItem(showMenu);
viewMenu.add$javax_swing_JMenuItem(hideMenu);
viewMenu.add$javax_swing_JMenuItem(this.showComplementMenuItem);
viewMenu.addSeparator$();
viewMenu.add$javax_swing_JMenuItem(this.followHighlightMenuItem);
viewMenu.addSeparator$();
viewMenu.add$javax_swing_JMenuItem(this.showSeqFeatures);
viewMenu.add$javax_swing_JMenuItem(this.openFeatureSettings);
tooltipSettingsMenu.add$javax_swing_JMenuItem(this.showDbRefsMenuitem);
tooltipSettingsMenu.add$javax_swing_JMenuItem(this.showNpFeatsMenuitem);
viewMenu.add$javax_swing_JMenuItem(tooltipSettingsMenu);
viewMenu.addSeparator$();
viewMenu.add$javax_swing_JMenuItem(alignmentProperties);
viewMenu.addSeparator$();
viewMenu.add$javax_swing_JMenuItem(overviewMenuItem);
annotationsMenu.add$javax_swing_JMenuItem(this.annotationPanelMenuItem);
annotationsMenu.addSeparator$();
annotationsMenu.add$javax_swing_JMenuItem(this.showAllAlAnnotations);
annotationsMenu.add$javax_swing_JMenuItem(this.hideAllAlAnnotations);
annotationsMenu.addSeparator$();
annotationsMenu.add$javax_swing_JMenuItem(this.showAllSeqAnnotations);
annotationsMenu.add$javax_swing_JMenuItem(this.hideAllSeqAnnotations);
annotationsMenu.add$javax_swing_JMenuItem(sortAnnBySequence);
annotationsMenu.add$javax_swing_JMenuItem(sortAnnByLabel);
annotationsMenu.addSeparator$();
autoAnnMenu.add$javax_swing_JMenuItem(showAutoFirst);
autoAnnMenu.add$javax_swing_JMenuItem(showAutoLast);
autoAnnMenu.addSeparator$();
autoAnnMenu.add$javax_swing_JMenuItem(this.applyAutoAnnotationSettings);
autoAnnMenu.add$javax_swing_JMenuItem(this.showConsensusHistogram);
autoAnnMenu.add$javax_swing_JMenuItem(this.showSequenceLogo);
autoAnnMenu.add$javax_swing_JMenuItem(this.normaliseSequenceLogo);
autoAnnMenu.addSeparator$();
autoAnnMenu.add$javax_swing_JMenuItem(this.showGroupConservation);
autoAnnMenu.add$javax_swing_JMenuItem(this.showGroupConsensus);
annotationsMenu.add$javax_swing_JMenuItem(autoAnnMenu);
this.sort.add$javax_swing_JMenuItem(sortIDMenuItem);
this.sort.add$javax_swing_JMenuItem(sortLengthMenuItem);
this.sort.add$javax_swing_JMenuItem(sortGroupMenuItem);
this.sort.add$javax_swing_JMenuItem(sortPairwiseMenuItem);
this.sort.add$javax_swing_JMenuItem(this.sortByTreeMenu);
calculateMenu.add$javax_swing_JMenuItem(this.sort);
calculateMenu.add$javax_swing_JMenuItem(this.calculateTree);
calculateMenu.addSeparator$();
calculateMenu.add$javax_swing_JMenuItem(pairwiseAlignmentMenuItem);
calculateMenu.addSeparator$();
calculateMenu.add$javax_swing_JMenuItem(this.showTranslation);
calculateMenu.add$javax_swing_JMenuItem(this.showReverse);
calculateMenu.add$javax_swing_JMenuItem(this.showReverseComplement);
calculateMenu.add$javax_swing_JMenuItem(this.showProducts);
calculateMenu.add$javax_swing_JMenuItem(this.autoCalculate);
calculateMenu.add$javax_swing_JMenuItem(this.sortByTree);
calculateMenu.addSeparator$();
calculateMenu.add$javax_swing_JMenuItem(expandAlignment);
calculateMenu.add$javax_swing_JMenuItem(extractScores);
if (!$I$(10).isJS$()) {
calculateMenu.addSeparator$();
calculateMenu.add$javax_swing_JMenuItem(this.runGroovy);
}this.webServiceNoServices=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.no_services")]);
this.webService.add$javax_swing_JMenuItem(this.webServiceNoServices);
if (!$I$(10).isJS$()) {
exportImageMenu.add$javax_swing_JMenuItem(htmlMenuItem);
}exportImageMenu.add$javax_swing_JMenuItem(epsFile);
exportImageMenu.add$javax_swing_JMenuItem(createPNG);
if (!$I$(10).isJS$()) {
exportImageMenu.add$javax_swing_JMenuItem(createBioJS);
exportImageMenu.add$javax_swing_JMenuItem(createSVG);
}addSequenceMenu.add$javax_swing_JMenuItem(addFromFile);
addSequenceMenu.add$javax_swing_JMenuItem(addFromText);
addSequenceMenu.add$javax_swing_JMenuItem(addFromURL);
this.getContentPane$().add$java_awt_Component$O(this.statusPanel, "South");
this.statusPanel.add$java_awt_Component$O(this.statusBar, null);
this.getContentPane$().add$java_awt_Component$O(this.tabbedPane, "Center");
this.formatMenu.add$javax_swing_JMenuItem(font);
this.formatMenu.addSeparator$();
this.formatMenu.add$javax_swing_JMenuItem(this.wrapMenuItem);
this.formatMenu.add$javax_swing_JMenuItem(this.scaleAbove);
this.formatMenu.add$javax_swing_JMenuItem(this.scaleLeft);
this.formatMenu.add$javax_swing_JMenuItem(this.scaleRight);
this.formatMenu.add$javax_swing_JMenuItem(this.seqLimits);
this.formatMenu.add$javax_swing_JMenuItem(this.idRightAlign);
this.formatMenu.add$javax_swing_JMenuItem(this.hiddenMarkers);
this.formatMenu.add$javax_swing_JMenuItem(this.viewBoxesMenuItem);
this.formatMenu.add$javax_swing_JMenuItem(this.viewTextMenuItem);
this.formatMenu.add$javax_swing_JMenuItem(this.colourTextMenuItem);
this.formatMenu.add$javax_swing_JMenuItem(this.renderGapsMenuItem);
this.formatMenu.add$javax_swing_JMenuItem(this.centreColumnLabelsMenuItem);
this.formatMenu.add$javax_swing_JMenuItem(this.showNonconservedMenuItem);
selectMenu.add$javax_swing_JMenuItem(findMenuItem);
selectMenu.addSeparator$();
selectMenu.add$javax_swing_JMenuItem(selectAllSequenceMenuItem);
selectMenu.add$javax_swing_JMenuItem(deselectAllSequenceMenuItem);
selectMenu.add$javax_swing_JMenuItem(invertSequenceMenuItem);
selectMenu.add$javax_swing_JMenuItem(invertColSel);
selectMenu.add$javax_swing_JMenuItem(createGroup);
selectMenu.add$javax_swing_JMenuItem(unGroup);
selectMenu.add$javax_swing_JMenuItem(grpsFromSelection);
selectMenu.add$javax_swing_JMenuItem(deleteGroups);
selectMenu.add$javax_swing_JMenuItem(annotationColumn);
selectMenu.add$javax_swing_JMenuItem(selectHighlighted);
}, p$1);

Clazz.newMeth(C$, 'loadVcf_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'initColourMenu$', function () {
this.applyToAllGroups=Clazz.new_($I$(4).c$$S,[$I$(11).getString$S("label.apply_colour_to_all_groups")]);
this.applyToAllGroups.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$115||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$115", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].applyToAllGroups_actionPerformed$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [this.b$['jalview.jbgui.GAlignFrame'].applyToAllGroups.isSelected$()]);
});
})()
), Clazz.new_(P$.GAlignFrame$115.$init$, [this, null])));
this.textColour=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.text_colour")]);
this.textColour.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$116||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$116", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].textColour_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$116.$init$, [this, null])));
this.conservationMenuItem=Clazz.new_($I$(4).c$$S,[$I$(11).getString$S("action.by_conservation")]);
this.conservationMenuItem.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$117||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$117", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].conservationMenuItem_actionPerformed$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [this.b$['jalview.jbgui.GAlignFrame'].conservationMenuItem.isSelected$()]);
});
})()
), Clazz.new_(P$.GAlignFrame$117.$init$, [this, null])));
this.abovePIDThreshold=Clazz.new_($I$(4).c$$S,[$I$(11).getString$S("label.above_identity_threshold")]);
this.abovePIDThreshold.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$118||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$118", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].abovePIDThreshold_actionPerformed$Z.apply(this.b$['jalview.jbgui.GAlignFrame'], [this.b$['jalview.jbgui.GAlignFrame'].abovePIDThreshold.isSelected$()]);
});
})()
), Clazz.new_(P$.GAlignFrame$118.$init$, [this, null])));
this.modifyPID=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.modify_identity_threshold")]);
this.modifyPID.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$119||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$119", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].modifyPID_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$119.$init$, [this, null])));
this.modifyConservation=Clazz.new_($I$(2).c$$S,[$I$(11).getString$S("label.modify_conservation_threshold")]);
this.modifyConservation.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$120||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$120", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].modifyConservation_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$120.$init$, [this, null])));
this.annotationColour=Clazz.new_($I$(22).c$$S,[$I$(11).getString$S("action.by_annotation")]);
this.annotationColour.setName$S("Annotation");
this.annotationColour.addActionListener$java_awt_event_ActionListener(((P$.GAlignFrame$121||
(function(){var C$=Clazz.newClass(P$, "GAlignFrame$121", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GAlignFrame'].annotationColour_actionPerformed$.apply(this.b$['jalview.jbgui.GAlignFrame'], []);
});
})()
), Clazz.new_(P$.GAlignFrame$121.$init$, [this, null])));
});

Clazz.newMeth(C$, 'selectHighlightedColumns_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
});

Clazz.newMeth(C$, 'showReverse_actionPerformed$Z', function (complement) {
});

Clazz.newMeth(C$, 'runGroovy_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'addMenuActionAndAccelerator$javax_swing_KeyStroke$javax_swing_JMenuItem$java_awt_event_ActionListener', function (keyStroke, menuItem, actionListener) {
menuItem.setAccelerator$javax_swing_KeyStroke(keyStroke);
this.accelerators.put$TK$TV(keyStroke, menuItem);
menuItem.addActionListener$java_awt_event_ActionListener(actionListener);
});

Clazz.newMeth(C$, 'sortAnnotations_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'showAllAnnotations_actionPerformed$Z$Z', function (forSequences, forAlignment) {
this.setAnnotationsVisibility$Z$Z$Z(true, forSequences, forAlignment);
});

Clazz.newMeth(C$, 'hideAllAnnotations_actionPerformed$Z$Z', function (forSequences, forAlignment) {
this.setAnnotationsVisibility$Z$Z$Z(false, forSequences, forAlignment);
});

Clazz.newMeth(C$, 'setAnnotationsVisibility$Z$Z$Z', function (visible, forSequences, forAlignment) {
});

Clazz.newMeth(C$, 'normaliseSequenceLogo_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'listenToViewSelections_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showAllhidden_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'hideAllButSelection_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'hideAllSelection_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'applyAutoAnnotationSettings_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showConsensusHistogram_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showSequenceLogo_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'makeGrpsFromSelection_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showGroupConsensus_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showGroupConservation_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showUnconservedMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'justifyRightMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'justifyLeftMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'followHighlight_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'showNpFeats_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showDbRefs_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'centreColumnLabels_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'buildSortByAnnotationScoresMenu$', function () {
});

Clazz.newMeth(C$, 'extractScores_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'outputText_actionPerformed$S', function (formatName) {
});

Clazz.newMeth(C$, 'addFromFile_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'addFromText_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'addFromURL_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'exportFeatures_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'exportAnnotations_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'htmlMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'bioJSMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'closeMenuItem_actionPerformed$Z', function (b) {
});

Clazz.newMeth(C$, 'redoMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'undoMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'selectAllSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'deselectAllSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'invertSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'remove2LeftMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'remove2RightMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'removeGappedColumnMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'removeAllGapsMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'wrapMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'viewBoxesMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'viewTextMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'colourTextMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'annotationPanelMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'overviewMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'sortPairwiseMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'sortIDMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'sortLengthMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'sortGroupMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'removeRedundancyMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'pairwiseAlignmentMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'neighbourTreeMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'conservationMenuItem_actionPerformed$Z', function (selected) {
});

Clazz.newMeth(C$, 'printMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'renderGapsMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'findMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'abovePIDThreshold_actionPerformed$Z', function (selected) {
});

Clazz.newMeth(C$, 'showSeqFeatures_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
});

Clazz.newMeth(C$, 'deleteGroups_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'createGroup_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'unGroup_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'copy_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'cut_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'delete_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'pasteNew_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'pasteThis_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'applyToAllGroups_actionPerformed$Z', function (selected) {
});

Clazz.newMeth(C$, 'createPNG$java_io_File', function (f) {
});

Clazz.newMeth(C$, 'font_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'seqLimit_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'seqDBRef_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'createEPS$java_io_File', function (f) {
});

Clazz.newMeth(C$, 'createSVG$java_io_File', function (f) {
});

Clazz.newMeth(C$, 'loadTreeMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'loadScores_actionPerformed$java_awt_event_ActionEvent', function (event) {
});

Clazz.newMeth(C$, 'jpred_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'scaleAbove_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'scaleLeft_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'scaleRight_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'modifyPID_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'modifyConservation_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'saveAs_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'padGapsMenuitem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'vamsasStore_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'vamsasLoad_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showTranslation_actionPerformed$jalview_analysis_GeneticCodeI', function (codeTable) {
});

Clazz.newMeth(C$, 'featureSettings_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'fetchSequence_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'smoothFont_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'annotationColour_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'annotationColumn_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'associatedData_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'autoCalculate_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'sortByTreeOption_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showAllSeqs_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'showAllColumns_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'hideSelSequences_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'hideSelColumns_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'hiddenMarkers_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'findPdbId_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'enterPdbId_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'pdbFile_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'invertColSel_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'tabSelectionChanged$I', function (sel) {
});

Clazz.newMeth(C$, 'tabbedPane_mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'tabbedPane_focusGained$java_awt_event_FocusEvent', function (e) {
this.requestFocus$();
});

Clazz.newMeth(C$, 'save_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'reload_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'newView_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'textColour_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'idRightAlign_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'expandViews_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'gatherViews_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'buildTreeSortMenu$', function () {
});

Clazz.newMeth(C$, 'pageSetup_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'alignmentProperties$', function () {
});

Clazz.newMeth(C$, 'expand_newalign$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'isShowAutoCalculatedAbove$', function () {
return this.showAutoCalculatedAbove;
});

Clazz.newMeth(C$, 'setShowAutoCalculatedAbove$Z', function (showAutoCalculatedAbove) {
this.showAutoCalculatedAbove=showAutoCalculatedAbove;
});

Clazz.newMeth(C$, 'getAnnotationSortOrder$', function () {
return this.annotationSortOrder;
});

Clazz.newMeth(C$, 'setAnnotationSortOrder$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder', function (annotationSortOrder) {
this.annotationSortOrder=annotationSortOrder;
});

Clazz.newMeth(C$, 'getAccelerators$', function () {
return this.accelerators;
});

Clazz.newMeth(C$, 'getTabIndex$', function () {
return this.tabbedPane.getSelectedIndex$();
});

Clazz.newMeth(C$, 'getStatusPanel$', function () {
return this.statusPanel;
});

Clazz.newMeth(C$, 'setSplitFrame$jalview_api_SplitContainerI', function (sf) {
this.splitFrame=sf;
if (sf != null ) {
this.showComplementMenuItem.setVisible$Z(true);
this.showComplementMenuItem.setState$Z(true);
}});

Clazz.newMeth(C$, 'getSplitViewContainer$', function () {
return this.splitFrame;
});

Clazz.newMeth(C$, 'showComplement_actionPerformed$Z', function (complement) {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
