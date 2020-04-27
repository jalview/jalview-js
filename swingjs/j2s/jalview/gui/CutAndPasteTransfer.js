(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.SwingUtilities','jalview.util.MessageManager','jalview.io.JalviewFileChooser','jalview.bin.Cache','jalview.io.JalviewFileView','java.io.PrintWriter','java.io.FileWriter','java.awt.Toolkit','java.awt.datatransfer.StringSelection','java.awt.datatransfer.DataFlavor','jalview.io.IdentifyFile','jalview.io.DataSourceType','jalview.bin.Jalview','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.io.AppletFormatAdapter','jalview.io.FormatAdapter','jalview.gui.AlignFrame','jalview.json.binding.biojson.v1.ColourSchemeMapper','javax.swing.JPopupMenu','javax.swing.JMenuItem']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CutAndPasteTransfer", null, 'jalview.jbgui.GCutAndPasteTransfer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.source=null;
},1);

C$.$fields$=[['O',['alignpanel','jalview.api.AlignmentViewPanel','viewport','jalview.api.AlignViewportI','source','jalview.io.AlignmentFileReaderI']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
$I$(1,"invokeLater$Runnable",[((P$.CutAndPasteTransfer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CutAndPasteTransfer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.CutAndPasteTransfer'].textarea.requestFocus$();
});
})()
), Clazz.new_(P$.CutAndPasteTransfer$1.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'setForInput$jalview_api_AlignmentViewPanel', function (viewpanel) {
this.alignpanel=viewpanel;
if (this.alignpanel != null ) {
this.viewport=this.alignpanel.getAlignViewport$();
}if (this.viewport != null ) {
this.ok.setText$S($I$(2).getString$S("action.add"));
}this.getContentPane$().add$java_awt_Component$O(this.inputButtonPanel, "South");
});

Clazz.newMeth(C$, 'getText$', function () {
return this.textarea.getText$();
});

Clazz.newMeth(C$, 'setText$S', function (text) {
this.textarea.setText$S(text);
});

Clazz.newMeth(C$, 'appendText$S', function (text) {
this.textarea.append$S(text);
});

Clazz.newMeth(C$, 'save_actionPerformed$java_awt_event_ActionEvent', function (e) {
var chooser=Clazz.new_([$I$(4).getProperty$S("LAST_DIRECTORY")],$I$(3,1).c$$S);
chooser.setAcceptAllFileFilterUsed$Z(false);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(5,1)));
chooser.setDialogTitle$S($I$(2).getString$S("label.save_text_to_file"));
chooser.setToolTipText$S($I$(2).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component(this);
if (value == 0) {
try {
var out=Clazz.new_([Clazz.new_([chooser.getSelectedFile$()],$I$(7,1).c$$java_io_File)],$I$(6,1).c$$java_io_Writer);
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

Clazz.newMeth(C$, 'copyItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.textarea.getSelectedText$();
var c=$I$(8).getDefaultToolkit$().getSystemClipboard$();
c.setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(Clazz.new_([this.textarea.getSelectedText$()],$I$(9,1).c$$S), null);
});

Clazz.newMeth(C$, 'pasteMenu_actionPerformed$java_awt_event_ActionEvent', function (e) {
var c=$I$(8).getDefaultToolkit$().getSystemClipboard$();
var contents=c.getContents$O(this);
if (contents == null ) {
return;
}try {
this.textarea.append$S(contents.getTransferData$java_awt_datatransfer_DataFlavor($I$(10).stringFlavor));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'ok_actionPerformed$java_awt_event_ActionEvent', function (e) {
var text=this.getText$();
if (text.trim$().length$() < 1) {
return;
}var format=null;
try {
format=Clazz.new_($I$(11,1)).identify$S$jalview_io_DataSourceType(text, $I$(12).PASTE);
} catch (e1) {
if (Clazz.exceptionOf(e1,"jalview.io.FileFormatException")){
} else {
throw e1;
}
}
if (format == null ) {
System.err.println$S($I$(2).getString$S("label.couldnt_read_data"));
if (!$I$(13).isHeadlessMode$()) {
$I$(14,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(15).desktop, $I$(16).getSupportedFormats$(), $I$(2).getString$S("label.couldnt_read_data"), 2]);
}return;
}var al=null;
try {
var fa=Clazz.new_($I$(17,1).c$$jalview_api_AlignmentViewPanel,[this.alignpanel]);
al=fa.readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(this.getText$(), $I$(12).PASTE, format);
this.source=fa.getAlignFile$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
$I$(14,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(15).desktop, $I$(2,"formatMessage$S$SA",["label.couldnt_read_pasted_text", Clazz.array(String, -1, [ex.toString()])]), $I$(2).getString$S("label.error_parsing_text"), 2]);
} else {
throw ex;
}
}
if (al != null  && al.hasValidSequence$() ) {
var title=$I$(2,"formatMessage$S$SA",["label.input_cut_paste_params", Clazz.array(String, -1, [format.getName$()])]);
var proxyColourScheme=this.source.getFeatureColourScheme$();
if (this.viewport != null  && this.viewport.getAlignment$() != null  ) {
if (proxyColourScheme != null ) {
this.viewport.applyFeaturesStyle$jalview_api_FeatureSettingsModelI(proxyColourScheme);
}(this.viewport).addAlignment$jalview_datamodel_AlignmentI$S(al, title);
} else {
var af;
if (Clazz.instanceOf(this.source, "jalview.api.ComplexAlignFile")) {
var hidden=(this.source).getHiddenColumns$();
var hiddenSeqs=(this.source).getHiddenSequences$();
var showSeqFeatures=(this.source).isShowSeqFeatures$();
var colourSchemeName=(this.source).getGlobalColourScheme$();
var fd=(this.source).getDisplayedFeatures$();
af=Clazz.new_($I$(18,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA$jalview_datamodel_HiddenColumns$I$I,[al, hiddenSeqs, hidden, 700, 500]);
af.getViewport$().setShowSequenceFeatures$Z(showSeqFeatures);
af.getViewport$().setFeaturesDisplayed$jalview_api_FeaturesDisplayedI(fd);
af.setMenusForViewport$();
var cs=$I$(19).getJalviewColourScheme$S$jalview_datamodel_AnnotatedCollectionI(colourSchemeName, al);
if (cs != null ) {
af.changeColour$jalview_schemes_ColourSchemeI(cs);
}} else {
af=Clazz.new_($I$(18,1).c$$jalview_datamodel_AlignmentI$I$I,[al, 700, 500]);
if (Clazz.instanceOf(this.source, "jalview.api.FeaturesSourceI")) {
af.getViewport$().setShowSequenceFeatures$Z(true);
}}if (proxyColourScheme != null ) {
af.getViewport$().applyFeaturesStyle$jalview_api_FeatureSettingsModelI(proxyColourScheme);
}af.currentFileFormat=format;
$I$(15).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, title, 700, 500);
af.setStatus$S($I$(2).getString$S("label.successfully_pasted_alignment_file"));
try {
af.setMaximum$Z($I$(4).getDefault$S$Z("SHOW_FULLSCREEN", false));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}} else {
System.err.println$S($I$(2).getString$S("label.couldnt_read_data"));
if (!$I$(13).isHeadlessMode$()) {
$I$(14,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(15).desktop, $I$(16).getSupportedFormats$(), $I$(2).getString$S("label.couldnt_read_data"), 2]);
}}});

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
var popup=Clazz.new_([$I$(2).getString$S("action.edit")],$I$(20,1).c$$S);
var item=Clazz.new_([$I$(2).getString$S("action.copy")],$I$(21,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.CutAndPasteTransfer$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CutAndPasteTransfer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.CutAndPasteTransfer'].copyItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.CutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.CutAndPasteTransfer$2.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
item=Clazz.new_([$I$(2).getString$S("action.paste")],$I$(21,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.CutAndPasteTransfer$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CutAndPasteTransfer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.CutAndPasteTransfer'].pasteMenu_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.CutAndPasteTransfer'], [e]);
});
})()
), Clazz.new_(P$.CutAndPasteTransfer$3.$init$,[this, null])));
popup.add$javax_swing_JMenuItem(item);
popup.show$java_awt_Component$I$I(this, e.getX$() + 10, e.getY$() + this.textarea.getY$() + 40 );
}});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
