(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'javax.swing.JRadioButton','javax.swing.JInternalFrame','javax.swing.JLayeredPane','jalview.gui.Desktop','jalview.util.MessageManager','jalview.datamodel.AlignmentAnnotation','jalview.io.JalviewFileChooser','jalview.bin.Cache','jalview.io.JalviewFileView','java.io.PrintWriter','java.io.FileWriter','jalview.io.AnnotationFile','jalview.io.FeaturesFile','jalview.gui.CutAndPasteTransfer','jalview.gui.OOMWarning','javax.swing.BoxLayout','java.awt.Color','javax.swing.JPanel','java.util.Locale','javax.swing.JLabel','jalview.gui.JvSwingUtils','javax.swing.JCheckBox','javax.swing.JButton','javax.swing.ButtonGroup']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationExporter", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.exportFeatures=true;
this.GFFFormat=Clazz.new_($I$(1,1));
this.CSVFormat=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['exportFeatures','wholeView'],'O',['frame','javax.swing.JInternalFrame','ap','jalview.gui.AlignmentPanel','annotations','jalview.datamodel.AlignmentAnnotation[]','includeLinkedFeatures','javax.swing.JCheckBox','GFFFormat','javax.swing.JRadioButton','+CSVFormat','linkedFeaturesPanel','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel',  function (panel) {
Clazz.super_(C$, this);
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
this.frame=Clazz.new_($I$(2,1));
this.frame.setContentPane$java_awt_Container(this);
this.frame.setLayer$Integer($I$(3).PALETTE_LAYER);
var preferredSize=this.frame.getPreferredSize$();
$I$(4).addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I$Z$Z(this.frame, "", true, preferredSize.width, preferredSize.height, true, true);
}, 1);

Clazz.newMeth(C$, 'exportFeatures$',  function () {
this.exportFeatures=true;
this.CSVFormat.setVisible$Z(false);
if (this.ap.av.isShowComplementFeatures$()) {
this.linkedFeaturesPanel.setVisible$Z(true);
this.frame.pack$();
}this.frame.setTitle$S($I$(5).getString$S("label.export_features"));
});

Clazz.newMeth(C$, 'exportAnnotations$',  function () {
var showAnnotation=this.ap.av.isShowAnnotation$();
p$1.exportAnnotation$jalview_datamodel_AlignmentAnnotationA$Z.apply(this, [showAnnotation ? null : this.ap.av.getAlignment$().getAlignmentAnnotation$(), true]);
});

Clazz.newMeth(C$, 'exportAnnotation$jalview_datamodel_AlignmentAnnotation',  function (toExport) {
p$1.exportAnnotation$jalview_datamodel_AlignmentAnnotationA$Z.apply(this, [Clazz.array($I$(6), -1, [toExport]), false]);
});

Clazz.newMeth(C$, 'exportAnnotation$jalview_datamodel_AlignmentAnnotationA$Z',  function (toExport, forWholeView) {
this.wholeView=forWholeView;
this.annotations=toExport;
this.exportFeatures=false;
this.GFFFormat.setVisible$Z(false);
this.CSVFormat.setVisible$Z(true);
this.frame.setTitle$S($I$(5).getString$S("label.export_annotations"));
}, p$1);

Clazz.newMeth(C$, 'toFile_actionPerformed',  function () {
var chooser=Clazz.new_([$I$(8).getProperty$S("LAST_DIRECTORY")],$I$(7,1).c$$S);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(9,1)));
chooser.setDialogTitle$S(this.exportFeatures ? $I$(5).getString$S("label.save_features_to_file") : $I$(5).getString$S("label.save_annotation_to_file"));
chooser.setToolTipText$S($I$(5).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component(this);
if (value == 0) {
var text=p$1.getText.apply(this, []);
try {
var out=Clazz.new_([Clazz.new_([chooser.getSelectedFile$()],$I$(11,1).c$$java_io_File)],$I$(10,1).c$$java_io_Writer);
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

Clazz.newMeth(C$, 'getText',  function () {
return this.exportFeatures ? p$1.getFeaturesText.apply(this, []) : p$1.getAnnotationsText.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getAnnotationsText',  function () {
var text;
if (this.CSVFormat.isSelected$()) {
text=Clazz.new_($I$(12,1)).printCSVAnnotations$jalview_datamodel_AlignmentAnnotationA(this.annotations);
} else {
if (this.wholeView) {
text=Clazz.new_($I$(12,1)).printAnnotationsForView$jalview_api_AlignViewportI(this.ap.av);
} else {
text=Clazz.new_($I$(12,1)).printAnnotations$jalview_datamodel_AlignmentAnnotationA$java_util_List$java_util_Hashtable(this.annotations, null, null);
}}return text;
}, p$1);

Clazz.newMeth(C$, 'getFeaturesText',  function () {
var text;
var sequences=this.ap.av.getAlignment$().getSequencesArray$();
var includeNonPositional=this.ap.av.isShowNPFeats$();
var formatter=Clazz.new_($I$(13,1));
var fr=this.ap.getFeatureRenderer$();
var includeComplement=this.includeLinkedFeatures.isSelected$();
if (this.GFFFormat.isSelected$()) {
text=formatter.printGffFormat$jalview_datamodel_SequenceIA$jalview_api_FeatureRenderer$Z$Z(sequences, fr, includeNonPositional, includeComplement);
} else {
text=formatter.printJalviewFormat$jalview_datamodel_SequenceIA$jalview_api_FeatureRenderer$Z$Z(sequences, fr, includeNonPositional, includeComplement);
}return text;
}, p$1);

Clazz.newMeth(C$, 'toTextbox_actionPerformed',  function () {
var cap=Clazz.new_($I$(14,1));
try {
var text=p$1.getText.apply(this, []);
cap.setText$S(text);
$I$(4,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[cap, (this.exportFeatures ? $I$(5,"formatMessage$S$SA",["label.features_for_params", Clazz.array(String, -1, [this.ap.alignFrame.getTitle$()])]) : $I$(5,"formatMessage$S$SA",["label.annotations_for_params", Clazz.array(String, -1, [this.ap.alignFrame.getTitle$()])])), 600, 500]);
} catch (oom) {
if (Clazz.exceptionOf(oom,"OutOfMemoryError")){
Clazz.new_([(this.exportFeatures ? $I$(5,"formatMessage$S$SA",["label.generating_features_for_params", Clazz.array(String, -1, [this.ap.alignFrame.getTitle$()])]) : $I$(5,"formatMessage$S$SA",["label.generating_annotations_for_params", Clazz.array(String, -1, [this.ap.alignFrame.getTitle$()])])), oom],$I$(15,1).c$$S$OutOfMemoryError);
cap.dispose$();
} else {
throw oom;
}
}
p$1.close_actionPerformed.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'close_actionPerformed',  function () {
try {
this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'jbInit',  function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16,1).c$$java_awt_Container$I,[this, 1]));
this.setBackground$java_awt_Color($I$(17).white);
var formatPanel=this.buildFormatOptionsPanel$();
var linkedFeatures=p$1.buildLinkedFeaturesPanel.apply(this, []);
var actionsPanel=this.buildActionsPanel$();
this.add$java_awt_Component(formatPanel);
this.add$java_awt_Component(linkedFeatures);
this.add$java_awt_Component(actionsPanel);
}, p$1);

Clazz.newMeth(C$, 'buildLinkedFeaturesPanel',  function () {
this.linkedFeaturesPanel=Clazz.new_($I$(18,1));
this.linkedFeaturesPanel.setOpaque$Z(false);
var nucleotide=this.ap.av.isNucleotide$();
var complement=nucleotide ? $I$(5).getString$S("label.protein").toLowerCase$java_util_Locale($I$(19).ROOT) : "CDS";
var label=Clazz.new_([$I$(5,"formatMessage$S$OA",["label.include_linked_features", Clazz.array(java.lang.Object, -1, [complement])])],$I$(20,1).c$$S);
label.setHorizontalAlignment$I(11);
var tooltip=$I$(5,"formatMessage$S$OA",["label.include_linked_tooltip", Clazz.array(java.lang.Object, -1, [complement])]);
label.setToolTipText$S($I$(21).wrapTooltip$Z$S(true, tooltip));
this.includeLinkedFeatures=Clazz.new_($I$(22,1));
this.linkedFeaturesPanel.add$java_awt_Component(label);
this.linkedFeaturesPanel.add$java_awt_Component(this.includeLinkedFeatures);
this.linkedFeaturesPanel.setVisible$Z(false);
return this.linkedFeaturesPanel;
}, p$1);

Clazz.newMeth(C$, 'buildActionsPanel$',  function () {
var actionsPanel=Clazz.new_($I$(18,1));
actionsPanel.setOpaque$Z(false);
var toFile=Clazz.new_([$I$(5).getString$S("label.to_file")],$I$(23,1).c$$S);
toFile.addActionListener$java_awt_event_ActionListener(((P$.AnnotationExporter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationExporter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.toFile_actionPerformed.apply(this.b$['jalview.gui.AnnotationExporter'], []);
});
})()
), Clazz.new_(P$.AnnotationExporter$1.$init$,[this, null])));
var toTextbox=Clazz.new_([$I$(5).getString$S("label.to_textbox")],$I$(23,1).c$$S);
toTextbox.addActionListener$java_awt_event_ActionListener(((P$.AnnotationExporter$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationExporter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.toTextbox_actionPerformed.apply(this.b$['jalview.gui.AnnotationExporter'], []);
});
})()
), Clazz.new_(P$.AnnotationExporter$2.$init$,[this, null])));
var close=Clazz.new_([$I$(5).getString$S("action.close")],$I$(23,1).c$$S);
close.addActionListener$java_awt_event_ActionListener(((P$.AnnotationExporter$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationExporter$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.close_actionPerformed.apply(this.b$['jalview.gui.AnnotationExporter'], []);
});
})()
), Clazz.new_(P$.AnnotationExporter$3.$init$,[this, null])));
actionsPanel.add$java_awt_Component(toFile);
actionsPanel.add$java_awt_Component(toTextbox);
actionsPanel.add$java_awt_Component(close);
return actionsPanel;
});

Clazz.newMeth(C$, 'buildFormatOptionsPanel$',  function () {
var formatPanel=Clazz.new_($I$(18,1));
formatPanel.setOpaque$Z(false);
var jalviewFormat=Clazz.new_($I$(1,1).c$$S,["Jalview"]);
jalviewFormat.setOpaque$Z(false);
jalviewFormat.setSelected$Z(true);
this.GFFFormat.setOpaque$Z(false);
this.GFFFormat.setText$S("GFF");
this.CSVFormat.setOpaque$Z(false);
this.CSVFormat.setText$S($I$(5).getString$S("label.csv_spreadsheet"));
var buttonGroup=Clazz.new_($I$(24,1));
buttonGroup.add$javax_swing_AbstractButton(jalviewFormat);
buttonGroup.add$javax_swing_AbstractButton(this.GFFFormat);
buttonGroup.add$javax_swing_AbstractButton(this.CSVFormat);
var format=Clazz.new_([$I$(5).getString$S("action.format") + " "],$I$(20,1).c$$S);
format.setHorizontalAlignment$I(11);
formatPanel.add$java_awt_Component(format);
formatPanel.add$java_awt_Component(jalviewFormat);
formatPanel.add$java_awt_Component(this.GFFFormat);
formatPanel.add$java_awt_Component(this.CSVFormat);
return formatPanel;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:32 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
