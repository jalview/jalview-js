(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,['javax.swing.event.HyperlinkEvent','.EventType'],'jalview.gui.Desktop','javax.swing.SwingUtilities','jalview.util.MessageManager','jalview.io.JalviewFileChooser','jalview.bin.Cache','jalview.io.JalviewFileView','java.io.PrintWriter','java.io.FileWriter','java.awt.Toolkit','java.io.StringWriter','java.awt.datatransfer.StringSelection','javax.swing.JPopupMenu','javax.swing.JMenuItem']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CutAndPasteHtmlTransfer", null, 'jalview.jbgui.GCutAndPasteHtmlTransfer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['viewport','jalview.viewmodel.AlignmentViewport']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.displaySource.setSelected$Z(false);
this.textarea.addKeyListener$java_awt_event_KeyListener(((P$.CutAndPasteHtmlTransfer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CutAndPasteHtmlTransfer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.KeyListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (arg0) {
arg0.consume$();
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (arg0) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (arg0) {
});
})()
), Clazz.new_(P$.CutAndPasteHtmlTransfer$1.$init$,[this, null])));
this.textarea.setEditable$Z(false);
this.textarea.addHyperlinkListener$javax_swing_event_HyperlinkListener(((P$.CutAndPasteHtmlTransfer$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CutAndPasteHtmlTransfer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.HyperlinkListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent', function (e) {
if (e.getEventType$().equals$O($I$(1).ACTIVATED)) {
$I$(2,"showUrl$S",[e.getURL$().toExternalForm$()]);
}});
})()
), Clazz.new_(P$.CutAndPasteHtmlTransfer$2.$init$,[this, null])));
$I$(3,"invokeLater$Runnable",[((P$.CutAndPasteHtmlTransfer$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CutAndPasteHtmlTransfer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.CutAndPasteHtmlTransfer'].textarea.requestFocus$();
});
})()
), Clazz.new_(P$.CutAndPasteHtmlTransfer$3.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'setForInput$jalview_viewmodel_AlignmentViewport', function (viewport) {
this.viewport=viewport;
if (viewport != null ) {
this.ok.setText$S($I$(4).getString$S("action.add"));
}this.getContentPane$().add$java_awt_Component$O(this.inputButtonPanel, "South");
});

Clazz.newMeth(C$, 'getText$', function () {
return this.textarea.getText$();
});

Clazz.newMeth(C$, 'setText$S', function (text) {
this.textarea.setDocument$javax_swing_text_Document(this.textarea.getEditorKit$().createDefaultDocument$());
this.textarea.setText$S(text);
this.textarea.setCaretPosition$I(0);
});

Clazz.newMeth(C$, 'save_actionPerformed$java_awt_event_ActionEvent', function (e) {
var chooser=Clazz.new_([$I$(6).getProperty$S("LAST_DIRECTORY")],$I$(5,1).c$$S);
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(7,1)));
chooser.setDialogTitle$S($I$(4).getString$S("label.save_text_to_file"));
chooser.setToolTipText$S($I$(4).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component(this);
if (value == 0) {
try {
var out=Clazz.new_([Clazz.new_([chooser.getSelectedFile$()],$I$(9,1).c$$java_io_File)],$I$(8,1).c$$java_io_Writer);
out.print$S(this.getText$());
out.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'toggleHtml_actionPerformed$java_awt_event_ActionEvent', function (e) {
var txt=this.textarea.getText$();
this.textarea.setContentType$S(this.displaySource.isSelected$() ? "text/text" : "text/html");
this.textarea.setText$S(txt);
});

Clazz.newMeth(C$, 'copyItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var c=$I$(10).getDefaultToolkit$().getSystemClipboard$();
var sw=Clazz.new_($I$(11,1));
try {
this.textarea.getEditorKit$().write$java_io_Writer$javax_swing_text_Document$I$I(sw, this.textarea.getDocument$(), this.textarea.getSelectionStart$(), this.textarea.getSelectionEnd$() - this.textarea.getSelectionStart$());
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
} else {
throw x;
}
}
;var ssel=Clazz.new_([sw.getBuffer$().toString()],$I$(12,1).c$$S);
c.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(ssel, ssel);
});

Clazz.newMeth(C$, 'cancel_actionPerformed$java_awt_event_ActionEvent', function (e) {
try {
this.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'textarea_mousePressed$java_awt_event_MouseEvent', function (e) {
if (e.isPopupTrigger$()) {
var popup=Clazz.new_([$I$(4).getString$S("action.edit")],$I$(13,1).c$$S);
var item=Clazz.new_([$I$(4).getString$S("action.copy")],$I$(14,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.CutAndPasteHtmlTransfer$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "CutAndPasteHtmlTransfer$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.CutAndPasteHtmlTransfer'].copyItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.CutAndPasteHtmlTransfer'], [e]);
});
})()
), Clazz.new_(P$.CutAndPasteHtmlTransfer$4.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.show$java_awt_Component$I$I(this, e.getX$() + 10, e.getY$() + this.textarea.getY$() + 40 );
}});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
