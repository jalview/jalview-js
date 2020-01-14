(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'java.awt.BorderLayout','javax.swing.JScrollPane','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.JCheckBoxMenuItem','java.awt.Color','java.awt.Font','jalview.util.MessageManager',['jalview.util.ImageMaker','.TYPE']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GTreePanel", null, 'javax.swing.JInternalFrame');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.borderLayout1=null;
this.scrollPane=null;
this.jMenuBar1=null;
this.fileMenu=null;
this.saveAsNewick=null;
this.printMenu=null;
this.viewMenu=null;
this.$font=null;
this.sortAssocViews=null;
this.bootstrapMenu=null;
this.distanceMenu=null;
this.fitToWindow=null;
this.placeholdersMenu=null;
this.pngTree=null;
this.epsTree=null;
this.saveAsMenu=null;
this.textbox=null;
this.originalSeqData=null;
this.associateLeavesMenu=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.borderLayout1=Clazz.new_($I$(1));
this.scrollPane=Clazz.new_($I$(2));
this.jMenuBar1=Clazz.new_($I$(3));
this.fileMenu=Clazz.new_($I$(4));
this.saveAsNewick=Clazz.new_($I$(5));
this.printMenu=Clazz.new_($I$(5));
this.viewMenu=Clazz.new_($I$(4));
this.$font=Clazz.new_($I$(5));
this.sortAssocViews=Clazz.new_($I$(5));
this.bootstrapMenu=Clazz.new_($I$(6));
this.distanceMenu=Clazz.new_($I$(6));
this.fitToWindow=Clazz.new_($I$(6));
this.placeholdersMenu=Clazz.new_($I$(6));
this.pngTree=Clazz.new_($I$(5));
this.epsTree=Clazz.new_($I$(5));
this.saveAsMenu=Clazz.new_($I$(4));
this.textbox=Clazz.new_($I$(5));
this.originalSeqData=Clazz.new_($I$(5));
this.associateLeavesMenu=Clazz.new_($I$(4));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
try {
p$1.jbInit.apply(this, []);
this.setJMenuBar$javax_swing_JMenuBar(this.jMenuBar1);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.setName$S("jalview-tree");
this.getContentPane$().setLayout$java_awt_LayoutManager(this.borderLayout1);
this.setBackground$java_awt_Color($I$(7).white);
this.setFont$java_awt_Font(Clazz.new_($I$(8).c$$S$I$I,["Verdana", 0, 12]));
this.scrollPane.setOpaque$Z(false);
this.fileMenu.setText$S($I$(9).getString$S("action.file"));
this.saveAsNewick.setText$S($I$(9).getString$S("label.newick_format"));
this.saveAsNewick.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$1||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].saveAsNewick_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GTreePanel'], [e]);
});
})()
), Clazz.new_(P$.GTreePanel$1.$init$, [this, null])));
this.printMenu.setText$S($I$(9).getString$S("action.print"));
this.printMenu.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$2||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].printMenu_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GTreePanel'], [e]);
});
})()
), Clazz.new_(P$.GTreePanel$2.$init$, [this, null])));
this.viewMenu.setText$S($I$(9).getString$S("action.view"));
this.viewMenu.addMenuListener$javax_swing_event_MenuListener(((P$.GTreePanel$3||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent', function (e) {
this.b$['jalview.jbgui.GTreePanel'].viewMenu_menuSelected$.apply(this.b$['jalview.jbgui.GTreePanel'], []);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent', function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent', function (e) {
});
})()
), Clazz.new_(P$.GTreePanel$3.$init$, [this, null])));
this.sortAssocViews.setText$S($I$(9).getString$S("label.sort_alignment_by_tree"));
this.sortAssocViews.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$4||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].sortByTree_actionPerformed$.apply(this.b$['jalview.jbgui.GTreePanel'], []);
});
})()
), Clazz.new_(P$.GTreePanel$4.$init$, [this, null])));
this.$font.setText$S($I$(9).getString$S("action.font"));
this.$font.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$5||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].font_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GTreePanel'], [e]);
});
})()
), Clazz.new_(P$.GTreePanel$5.$init$, [this, null])));
this.bootstrapMenu.setText$S($I$(9).getString$S("label.show_bootstrap_values"));
this.bootstrapMenu.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$6||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].bootstrapMenu_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GTreePanel'], [e]);
});
})()
), Clazz.new_(P$.GTreePanel$6.$init$, [this, null])));
this.distanceMenu.setText$S($I$(9).getString$S("label.show_distances"));
this.distanceMenu.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$7||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].distanceMenu_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GTreePanel'], [e]);
});
})()
), Clazz.new_(P$.GTreePanel$7.$init$, [this, null])));
this.fitToWindow.setSelected$Z(true);
this.fitToWindow.setText$S($I$(9).getString$S("label.fit_to_window"));
this.fitToWindow.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$8||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].fitToWindow_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GTreePanel'], [e]);
});
})()
), Clazz.new_(P$.GTreePanel$8.$init$, [this, null])));
this.epsTree.setText$S("EPS");
this.epsTree.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$9||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].writeTreeImage$jalview_util_ImageMaker_TYPE.apply(this.b$['jalview.jbgui.GTreePanel'], [$I$(10).EPS]);
});
})()
), Clazz.new_(P$.GTreePanel$9.$init$, [this, null])));
this.pngTree.setText$S("PNG");
this.pngTree.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$10||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].writeTreeImage$jalview_util_ImageMaker_TYPE.apply(this.b$['jalview.jbgui.GTreePanel'], [$I$(10).PNG]);
});
})()
), Clazz.new_(P$.GTreePanel$10.$init$, [this, null])));
this.saveAsMenu.setText$S($I$(9).getString$S("action.save_as"));
this.placeholdersMenu.setToolTipText$S($I$(9).getString$S("label.marks_leaves_tree_not_associated_with_sequence"));
this.placeholdersMenu.setText$S($I$(9).getString$S("label.mark_unlinked_leaves"));
this.placeholdersMenu.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$11||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].placeholdersMenu_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GTreePanel'], [e]);
});
})()
), Clazz.new_(P$.GTreePanel$11.$init$, [this, null])));
this.textbox.setText$S($I$(9).getString$S("label.out_to_textbox"));
this.textbox.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$12||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].textbox_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GTreePanel'], [e]);
});
})()
), Clazz.new_(P$.GTreePanel$12.$init$, [this, null])));
this.originalSeqData.setText$S($I$(9).getString$S("label.input_data"));
this.originalSeqData.addActionListener$java_awt_event_ActionListener(((P$.GTreePanel$13||
(function(){var C$=Clazz.newClass(P$, "GTreePanel$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GTreePanel'].originalSeqData_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GTreePanel'], [e]);
});
})()
), Clazz.new_(P$.GTreePanel$13.$init$, [this, null])));
this.associateLeavesMenu.setText$S($I$(9).getString$S("label.associate_leaves_with"));
this.getContentPane$().add$java_awt_Component$O(this.scrollPane, "Center");
this.jMenuBar1.add$javax_swing_JMenu(this.fileMenu);
this.jMenuBar1.add$javax_swing_JMenu(this.viewMenu);
this.fileMenu.add$javax_swing_JMenuItem(this.saveAsMenu);
this.fileMenu.add$javax_swing_JMenuItem(this.textbox);
this.fileMenu.add$javax_swing_JMenuItem(this.printMenu);
this.fileMenu.add$javax_swing_JMenuItem(this.originalSeqData);
this.viewMenu.add$javax_swing_JMenuItem(this.fitToWindow);
this.viewMenu.add$javax_swing_JMenuItem(this.$font);
this.viewMenu.add$javax_swing_JMenuItem(this.distanceMenu);
this.viewMenu.add$javax_swing_JMenuItem(this.bootstrapMenu);
this.viewMenu.add$javax_swing_JMenuItem(this.placeholdersMenu);
this.viewMenu.add$javax_swing_JMenuItem(this.sortAssocViews);
this.viewMenu.add$javax_swing_JMenuItem(this.associateLeavesMenu);
this.saveAsMenu.add$javax_swing_JMenuItem(this.saveAsNewick);
this.saveAsMenu.add$javax_swing_JMenuItem(this.epsTree);
this.saveAsMenu.add$javax_swing_JMenuItem(this.pngTree);
}, p$1);

Clazz.newMeth(C$, 'printMenu_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'font_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'distanceMenu_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'bootstrapMenu_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'fitToWindow_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'writeTreeImage$jalview_util_ImageMaker_TYPE', function (imageType) {
});

Clazz.newMeth(C$, 'saveAsNewick_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'placeholdersMenu_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'textbox_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'fullid_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'originalSeqData_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'viewMenu_menuSelected$', function () {
});

Clazz.newMeth(C$, 'sortByTree_actionPerformed$', function () {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
