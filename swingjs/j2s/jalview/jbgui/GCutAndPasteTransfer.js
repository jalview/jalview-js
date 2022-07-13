(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JTextArea','javax.swing.JScrollPane','java.awt.BorderLayout','javax.swing.JMenuBar','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.JPanel','javax.swing.JButton','jalview.gui.JvSwingUtils','jalview.util.MessageManager','javax.swing.KeyStroke','jalview.util.ShortcutKeyMaskExWrapper','java.awt.Font','java.awt.event.MouseAdapter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer", null, 'javax.swing.JInternalFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.textarea=Clazz.new_($I$(1,1));
this.scrollPane=Clazz.new_($I$(2,1));
this.borderLayout1=Clazz.new_($I$(3,1));
this.editMenubar=Clazz.new_($I$(4,1));
this.editMenu=Clazz.new_($I$(5,1));
this.copyItem=Clazz.new_($I$(6,1));
this.pasteMenu=Clazz.new_($I$(6,1));
this.borderLayout2=Clazz.new_($I$(3,1));
this.inputButtonPanel=Clazz.new_($I$(7,1));
this.ok=Clazz.new_($I$(8,1));
this.cancel=Clazz.new_($I$(8,1));
this.selectAll=Clazz.new_($I$(6,1));
this.jMenu1=Clazz.new_($I$(5,1));
this.save=Clazz.new_($I$(6,1));
},1);

C$.$fields$=[['O',['textarea','javax.swing.JTextArea','scrollPane','javax.swing.JScrollPane','borderLayout1','java.awt.BorderLayout','editMenubar','javax.swing.JMenuBar','editMenu','javax.swing.JMenu','copyItem','javax.swing.JMenuItem','+pasteMenu','borderLayout2','java.awt.BorderLayout','inputButtonPanel','javax.swing.JPanel','ok','javax.swing.JButton','+cancel','selectAll','javax.swing.JMenuItem','jMenu1','javax.swing.JMenu','save','javax.swing.JMenuItem']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
try {
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

Clazz.newMeth(C$, 'jbInit',  function () {
this.scrollPane.setBorder$javax_swing_border_Border(null);
this.ok.setFont$java_awt_Font($I$(9).getLabelFont$());
this.ok.setText$S($I$(10).getString$S("label.new_window"));
this.ok.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].ok_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$1.$init$,[this, null])));
this.cancel.setText$S($I$(10).getString$S("action.close"));
this.cancel.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].cancel_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$2.$init$,[this, null])));
this.textarea.setBorder$javax_swing_border_Border(null);
this.selectAll.setText$S($I$(10).getString$S("action.select_all"));
this.selectAll.setAccelerator$javax_swing_KeyStroke($I$(11,"getKeyStroke$I$I$Z",[65, $I$(12).getMenuShortcutKeyMaskEx$(), false]));
this.selectAll.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].selectAll_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$3.$init$,[this, null])));
this.jMenu1.setText$S($I$(10).getString$S("action.file"));
this.save.setText$S($I$(10).getString$S("action.save"));
this.save.setAccelerator$javax_swing_KeyStroke($I$(11,"getKeyStroke$I$I$Z",[83, $I$(12).getMenuShortcutKeyMaskEx$(), false]));
this.save.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].save_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$4.$init$,[this, null])));
this.copyItem.setAccelerator$javax_swing_KeyStroke($I$(11,"getKeyStroke$I$I$Z",[67, $I$(12).getMenuShortcutKeyMaskEx$(), false]));
this.pasteMenu.setAccelerator$javax_swing_KeyStroke($I$(11,"getKeyStroke$I$I$Z",[86, $I$(12).getMenuShortcutKeyMaskEx$(), false]));
this.editMenubar.add$javax_swing_JMenu(this.jMenu1);
this.editMenubar.add$javax_swing_JMenu(this.editMenu);
this.textarea.setFont$java_awt_Font(Clazz.new_($I$(13,1).c$$S$I$I,["Monospaced", 0, 12]));
this.textarea.addMouseListener$java_awt_event_MouseListener(((P$.GCutAndPasteTransfer$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].textarea_mousePressed$java_awt_event_MouseEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].textarea_mousePressed$java_awt_event_MouseEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.GCutAndPasteTransfer$5)));
this.editMenu.setText$S($I$(10).getString$S("action.edit"));
this.pasteMenu.setText$S($I$(10).getString$S("action.paste"));
this.pasteMenu.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].pasteMenu_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$6.$init$,[this, null])));
this.copyItem.setText$S($I$(10).getString$S("action.copy"));
this.copyItem.addActionListener$java_awt_event_ActionListener(((P$.GCutAndPasteTransfer$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "GCutAndPasteTransfer$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.jbgui.GCutAndPasteTransfer'].copyItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.jbgui.GCutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.GCutAndPasteTransfer$7.$init$,[this, null])));
this.getContentPane$().setLayout$java_awt_LayoutManager(this.borderLayout2);
this.scrollPane.setBorder$javax_swing_border_Border(null);
this.scrollPane.getViewport$().add$java_awt_Component$O(this.textarea, null);
this.editMenu.add$javax_swing_JMenuItem(this.selectAll);
this.editMenu.add$javax_swing_JMenuItem(this.copyItem);
this.editMenu.add$javax_swing_JMenuItem(this.pasteMenu);
this.getContentPane$().add$java_awt_Component$O(this.scrollPane, "Center");
this.inputButtonPanel.add$java_awt_Component(this.ok);
this.inputButtonPanel.add$java_awt_Component(this.cancel);
this.jMenu1.add$javax_swing_JMenuItem(this.save);
}, p$1);

Clazz.newMeth(C$, 'textarea_mousePressed$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'copyItem_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'pasteMenu_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'ok_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});

Clazz.newMeth(C$, 'selectAll_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.textarea.selectAll$();
});

Clazz.newMeth(C$, 'save_actionPerformed$java_awt_event_ActionEvent',  function (e) {
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
