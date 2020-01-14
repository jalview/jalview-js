(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'javax.swing.JPanel','javax.swing.JButton','javax.swing.ButtonGroup','javax.swing.JRadioButton','javax.swing.JLabel','java.awt.FlowLayout','javax.swing.JInternalFrame','javax.swing.JLayeredPane','jalview.gui.Desktop','jalview.util.MessageManager','jalview.datamodel.AlignmentAnnotation','jalview.io.JalviewFileChooser','jalview.bin.Cache','jalview.io.JalviewFileView','java.io.PrintWriter','java.io.FileWriter','jalview.io.AnnotationFile','jalview.io.FeaturesFile','jalview.gui.CutAndPasteTransfer','jalview.gui.OOMWarning','java.awt.BorderLayout','java.awt.Color','javax.swing.BorderFactory']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AnnotationExporter", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.frame=null;
this.ap=null;
this.exportFeatures=false;
this.annotations=null;
this.wholeView=false;
this.jPanel1=null;
this.toFile=null;
this.toTextbox=null;
this.close=null;
this.buttonGroup=null;
this.jalviewFormat=null;
this.GFFFormat=null;
this.CSVFormat=null;
this.jLabel1=null;
this.jPanel3=null;
this.flowLayout1=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.exportFeatures=true;
this.jPanel1=Clazz.new_($I$(1));
this.toFile=Clazz.new_($I$(2));
this.toTextbox=Clazz.new_($I$(2));
this.close=Clazz.new_($I$(2));
this.buttonGroup=Clazz.new_($I$(3));
this.jalviewFormat=Clazz.new_($I$(4));
this.GFFFormat=Clazz.new_($I$(4));
this.CSVFormat=Clazz.new_($I$(4));
this.jLabel1=Clazz.new_($I$(5));
this.jPanel3=Clazz.new_($I$(1));
this.flowLayout1=Clazz.new_($I$(6));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (panel) {
Clazz.super_(C$, this,1);
this.ap=panel;
try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.frame=Clazz.new_($I$(7));
this.frame.setContentPane$java_awt_Container(this);
this.frame.setLayer$Integer($I$(8).PALETTE_LAYER);
$I$(9).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this.frame, "", this.frame.getPreferredSize$().width, this.frame.getPreferredSize$().height);
}, 1);

Clazz.newMeth(C$, 'exportFeatures$', function () {
this.exportFeatures=true;
this.CSVFormat.setVisible$Z(false);
this.frame.setTitle$S($I$(10).getString$S("label.export_features"));
});

Clazz.newMeth(C$, 'exportAnnotations$', function () {
var showAnnotation=this.ap.av.isShowAnnotation$();
p$1.exportAnnotation$jalview_datamodel_AlignmentAnnotationA$Z.apply(this, [showAnnotation ? null : this.ap.av.getAlignment$().getAlignmentAnnotation$(), true]);
});

Clazz.newMeth(C$, 'exportAnnotation$jalview_datamodel_AlignmentAnnotation', function (toExport) {
p$1.exportAnnotation$jalview_datamodel_AlignmentAnnotationA$Z.apply(this, [Clazz.array($I$(11), -1, [toExport]), false]);
});

Clazz.newMeth(C$, 'exportAnnotation$jalview_datamodel_AlignmentAnnotationA$Z', function (toExport, forWholeView) {
this.wholeView=forWholeView;
this.annotations=toExport;
this.exportFeatures=false;
this.GFFFormat.setVisible$Z(false);
this.CSVFormat.setVisible$Z(true);
this.frame.setTitle$S($I$(10).getString$S("label.export_annotations"));
}, p$1);

Clazz.newMeth(C$, 'toFile_actionPerformed', function () {
var chooser=Clazz.new_($I$(12).c$$S,[$I$(13).getProperty$S("LAST_DIRECTORY")]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(14)));
chooser.setDialogTitle$S(this.exportFeatures ? $I$(10).getString$S("label.save_features_to_file") : $I$(10).getString$S("label.save_annotation_to_file"));
chooser.setToolTipText$S($I$(10).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component(this);
if (value == 0) {
var text=p$1.getText.apply(this, []);
try {
var out=Clazz.new_($I$(15).c$$java_io_Writer,[Clazz.new_($I$(16).c$$java_io_File,[chooser.getSelectedFile$()])]);
out.print$S(text);
out.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}p$1.close_actionPerformed.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getText', function () {
return this.exportFeatures ? p$1.getFeaturesText.apply(this, []) : p$1.getAnnotationsText.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getAnnotationsText', function () {
var text;
if (this.CSVFormat.isSelected$()) {
text=Clazz.new_($I$(17)).printCSVAnnotations$jalview_datamodel_AlignmentAnnotationA(this.annotations);
} else {
if (this.wholeView) {
text=Clazz.new_($I$(17)).printAnnotationsForView$jalview_api_AlignViewportI(this.ap.av);
} else {
text=Clazz.new_($I$(17)).printAnnotations$jalview_datamodel_AlignmentAnnotationA$java_util_List$java_util_Hashtable(this.annotations, null, null);
}}return text;
}, p$1);

Clazz.newMeth(C$, 'getFeaturesText', function () {
var text;
var sequences=this.ap.av.getAlignment$().getSequencesArray$();
var includeNonPositional=this.ap.av.isShowNPFeats$();
var formatter=Clazz.new_($I$(18));
var fr=this.ap.getFeatureRenderer$();
if (this.GFFFormat.isSelected$()) {
text=formatter.printGffFormat$jalview_datamodel_SequenceIA$jalview_api_FeatureRenderer$Z(sequences, fr, includeNonPositional);
} else {
text=formatter.printJalviewFormat$jalview_datamodel_SequenceIA$jalview_api_FeatureRenderer$Z(sequences, fr, includeNonPositional);
}return text;
}, p$1);

Clazz.newMeth(C$, 'toTextbox_actionPerformed', function () {
var cap=Clazz.new_($I$(19));
try {
var text=p$1.getText.apply(this, []);
cap.setText$S(text);
$I$(9).addInternalFrame$javax_swing_JInternalFrame$S$I$I(cap, (this.exportFeatures ? $I$(10).formatMessage$S$SA("label.features_for_params", Clazz.array(String, -1, [this.ap.alignFrame.getTitle$()])) : $I$(10).formatMessage$S$SA("label.annotations_for_params", Clazz.array(String, -1, [this.ap.alignFrame.getTitle$()]))), 600, 500);
} catch (oom) {
if (Clazz.exceptionOf(oom,"OutOfMemoryError")){
Clazz.new_($I$(20).c$$S$OutOfMemoryError,[(this.exportFeatures ? $I$(10).formatMessage$S$SA("label.generating_features_for_params", Clazz.array(String, -1, [this.ap.alignFrame.getTitle$()])) : $I$(10).formatMessage$S$SA("label.generating_annotations_for_params", Clazz.array(String, -1, [this.ap.alignFrame.getTitle$()]))), oom]);
cap.dispose$();
} else {
throw oom;
}
}
p$1.close_actionPerformed.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'close_actionPerformed', function () {
try {
this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(21)));
this.toFile.setText$S($I$(10).getString$S("label.to_file"));
this.toFile.addActionListener$java_awt_event_ActionListener(((P$.AnnotationExporter$1||
(function(){var C$=Clazz.newClass(P$, "AnnotationExporter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
p$1.toFile_actionPerformed.apply(this.b$['jalview.gui.AnnotationExporter'], []);
});
})()
), Clazz.new_(P$.AnnotationExporter$1.$init$, [this, null])));
this.toTextbox.setText$S($I$(10).getString$S("label.to_textbox"));
this.toTextbox.addActionListener$java_awt_event_ActionListener(((P$.AnnotationExporter$2||
(function(){var C$=Clazz.newClass(P$, "AnnotationExporter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
p$1.toTextbox_actionPerformed.apply(this.b$['jalview.gui.AnnotationExporter'], []);
});
})()
), Clazz.new_(P$.AnnotationExporter$2.$init$, [this, null])));
this.close.setText$S($I$(10).getString$S("action.close"));
this.close.addActionListener$java_awt_event_ActionListener(((P$.AnnotationExporter$3||
(function(){var C$=Clazz.newClass(P$, "AnnotationExporter$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
p$1.close_actionPerformed.apply(this.b$['jalview.gui.AnnotationExporter'], []);
});
})()
), Clazz.new_(P$.AnnotationExporter$3.$init$, [this, null])));
this.jalviewFormat.setOpaque$Z(false);
this.jalviewFormat.setSelected$Z(true);
this.jalviewFormat.setText$S("Jalview");
this.GFFFormat.setOpaque$Z(false);
this.GFFFormat.setText$S("GFF");
this.CSVFormat.setOpaque$Z(false);
this.CSVFormat.setText$S($I$(10).getString$S("label.csv_spreadsheet"));
this.jLabel1.setHorizontalAlignment$I(11);
this.jLabel1.setText$S($I$(10).getString$S("action.format") + " ");
this.setBackground$java_awt_Color($I$(22).white);
this.jPanel3.setBorder$javax_swing_border_Border($I$(23).createEtchedBorder$());
this.jPanel3.setOpaque$Z(false);
this.jPanel1.setOpaque$Z(false);
this.jPanel1.add$java_awt_Component(this.toFile);
this.jPanel1.add$java_awt_Component(this.toTextbox);
this.jPanel1.add$java_awt_Component(this.close);
this.jPanel3.add$java_awt_Component(this.jLabel1);
this.jPanel3.add$java_awt_Component(this.jalviewFormat);
this.jPanel3.add$java_awt_Component(this.GFFFormat);
this.jPanel3.add$java_awt_Component(this.CSVFormat);
this.buttonGroup.add$javax_swing_AbstractButton(this.jalviewFormat);
this.buttonGroup.add$javax_swing_AbstractButton(this.GFFFormat);
this.buttonGroup.add$javax_swing_AbstractButton(this.CSVFormat);
this.add$java_awt_Component$O(this.jPanel3, "Center");
this.add$java_awt_Component$O(this.jPanel1, "South");
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
