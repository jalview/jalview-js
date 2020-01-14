(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JEditorPane','javax.swing.JScrollPane','java.awt.BorderLayout','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.JCheckBoxMenuItem','javax.swing.JPanel','javax.swing.JButton','javax.swing.text.html.HTMLEditorKit','jalview.gui.JvSwingUtils','jalview.util.MessageManager','javax.swing.KeyStroke','java.awt.Toolkit','java.awt.Font','java.awt.event.MouseAdapter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GCutAndPasteHtmlTransfer", null, 'javax.swing.JInternalFrame');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.textarea=null;
this.scrollPane=null;
this.borderLayout1=null;
this.editMenubar=null;
this.editMenu=null;
this.copyItem=null;
this.displaySource=null;
this.borderLayout2=null;
this.inputButtonPanel=null;
this.ok=null;
this.cancel=null;
this.close=null;
this.selectAll=null;
this.jMenu1=null;
this.save=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.textarea=Clazz.new_($I$(1).c$$S$S,["text/html", ""]);
this.scrollPane=Clazz.new_($I$(2));
this.borderLayout1=Clazz.new_($I$(3));
this.editMenubar=Clazz.new_($I$(4));
this.editMenu=Clazz.new_($I$(5));
this.copyItem=Clazz.new_($I$(6));
this.displaySource=Clazz.new_($I$(7));
this.borderLayout2=Clazz.new_($I$(3));
this.inputButtonPanel=Clazz.new_($I$(8));
this.ok=Clazz.new_($I$(9));
this.cancel=Clazz.new_($I$(9));
this.close=Clazz.new_($I$(6));
this.selectAll=Clazz.new_($I$(6));
this.jMenu1=Clazz.new_($I$(5));
this.save=Clazz.new_($I$(6));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
try {
this.textarea.setEditorKit$javax_swing_text_EditorKit(Clazz.new_($I$(10)));
this.setJMenuBar$javax_swing_JMenuBar(this.editMenubar);
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.scrollPane.setBorder$javax_swing_border_Border(null);
this.ok.setFont$java_awt_Font($I$(11).getLabelFont$());
this.ok.setText$S($I$(12).getString$S("label.new_window"));
this.ok.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteHtmlTransfer$1||
(function(){var C$=Clazz.newClass(P$, "GCutAndPasteHtmlTransfer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'].ok_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteHtmlTransfer$1.$init$, [this, null])));
this.cancel.setText$S($I$(12).getString$S("action.close"));
this.cancel.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteHtmlTransfer$2||
(function(){var C$=Clazz.newClass(P$, "GCutAndPasteHtmlTransfer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'].cancel_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteHtmlTransfer$2.$init$, [this, null])));
this.textarea.setBorder$javax_swing_border_Border(null);
this.close.setText$S($I$(12).getString$S("action.close"));
this.close.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteHtmlTransfer$3||
(function(){var C$=Clazz.newClass(P$, "GCutAndPasteHtmlTransfer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'].cancel_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteHtmlTransfer$3.$init$, [this, null])));
this.close.setAccelerator$javax_swing_KeyStroke($I$(13).getKeyStroke$I$I$Z(87, $I$(14).getDefaultToolkit$().getMenuShortcutKeyMask$(), false));
this.selectAll.setText$S($I$(12).getString$S("action.select_all"));
this.selectAll.setAccelerator$javax_swing_KeyStroke($I$(13).getKeyStroke$I$I$Z(65, $I$(14).getDefaultToolkit$().getMenuShortcutKeyMask$(), false));
this.selectAll.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteHtmlTransfer$4||
(function(){var C$=Clazz.newClass(P$, "GCutAndPasteHtmlTransfer$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'].selectAll_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteHtmlTransfer$4.$init$, [this, null])));
this.jMenu1.setText$S($I$(12).getString$S("action.file"));
this.save.setText$S($I$(12).getString$S("action.save"));
this.save.setAccelerator$javax_swing_KeyStroke($I$(13).getKeyStroke$I$I$Z(83, $I$(14).getDefaultToolkit$().getMenuShortcutKeyMask$(), false));
this.save.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteHtmlTransfer$5||
(function(){var C$=Clazz.newClass(P$, "GCutAndPasteHtmlTransfer$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'].save_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteHtmlTransfer$5.$init$, [this, null])));
this.copyItem.setAccelerator$javax_swing_KeyStroke($I$(13).getKeyStroke$I$I$Z(67, $I$(14).getDefaultToolkit$().getMenuShortcutKeyMask$(), false));
this.editMenubar.add$javax_swing_JMenu(this.jMenu1);
this.editMenubar.add$javax_swing_JMenu(this.editMenu);
this.textarea.setFont$java_awt_Font(Clazz.new_($I$(15).c$$S$I$I,["Monospaced", 0, 12]));
this.textarea.addMouseListener$java_awt_event_MouseListener(((P$.GCutAndPasteHtmlTransfer$6||
(function(){var C$=Clazz.newClass(P$, "GCutAndPasteHtmlTransfer$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'].textarea_mousePressed$java_awt_event_MouseEvent.apply(this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'], [e]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'].textarea_mousePressed$java_awt_event_MouseEvent.apply(this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'], [e]);
});
})()
), Clazz.new_($I$(16), [this, null],P$.GCutAndPasteHtmlTransfer$6)));
this.editMenu.setText$S($I$(12).getString$S("action.edit"));
this.copyItem.setText$S($I$(12).getString$S("action.copy"));
this.copyItem.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteHtmlTransfer$7||
(function(){var C$=Clazz.newClass(P$, "GCutAndPasteHtmlTransfer$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'].copyItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteHtmlTransfer$7.$init$, [this, null])));
this.displaySource.setText$S($I$(12).getString$S("action.show_html_source"));
this.displaySource.setToolTipText$S($I$(12).getString$S("label.select_copy_raw_html"));
this.displaySource.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteHtmlTransfer$8||
(function(){var C$=Clazz.newClass(P$, "GCutAndPasteHtmlTransfer$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'].toggleHtml_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteHtmlTransfer'], [arg0]);
});
})()
), Clazz.new_(P$.GCutAndPasteHtmlTransfer$8.$init$, [this, null])));
this.editMenu.add$javax_swing_JMenuItem(this.displaySource);
this.getContentPane$().setLayout$java_awt_LayoutManager(this.borderLayout2);
this.scrollPane.setBorder$javax_swing_border_Border(null);
this.scrollPane.getViewport$().add$java_awt_Component$O(this.textarea, null);
this.editMenu.add$javax_swing_JMenuItem(this.selectAll);
this.editMenu.add$javax_swing_JMenuItem(this.copyItem);
this.getContentPane$().add$java_awt_Component$O(this.scrollPane, "Center");
this.inputButtonPanel.add$java_awt_Component(this.ok);
this.inputButtonPanel.add$java_awt_Component(this.cancel);
this.jMenu1.add$javax_swing_JMenuItem(this.save);
this.jMenu1.add$javax_swing_JMenuItem(this.close);
}, p$1);

Clazz.newMeth(C$, 'toggleHtml_actionPerformed$java_awt_event_ActionEvent', function (arg0) {
});

Clazz.newMeth(C$, 'textarea_mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'copyItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'ok_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'selectAll_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.textarea.selectAll$();
});

Clazz.newMeth(C$, 'save_actionPerformed$java_awt_event_ActionEvent', function (e) {
});

Clazz.newMeth(C$, 'addStylesheetRule$S', function (rule) {
var editorKit=this.textarea.getEditorKit$();
if (editorKit != null ) {
(editorKit).getStyleSheet$().addRule$S(rule);
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
