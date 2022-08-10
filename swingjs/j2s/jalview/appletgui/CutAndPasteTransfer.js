(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.TextArea','java.awt.Button','java.awt.Panel','java.awt.BorderLayout','jalview.util.MessageManager','jalview.io.NewickFile','jalview.io.DataSourceType','jalview.io.IdentifyFile','jalview.io.AppletFormatAdapter','jalview.appletgui.AlignFrame','jalview.json.binding.biojson.v1.ColourSchemeMapper','jalview.analysis.AlignmentUtils','jalview.appletgui.JVDialog','java.awt.Label','jalview.appletgui.SplitFrame','jalview.io.TCoffeeScoreFile','jalview.schemes.TCoffeeColourScheme','jalview.io.AnnotationFile','jalview.datamodel.PDBEntry','jalview.appletgui.AppletJmol','jalview.datamodel.SequenceI','mc_view.AppletPDBViewer','java.awt.Font']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CutAndPasteTransfer", null, 'java.awt.Panel', ['java.awt.event.ActionListener', 'java.awt.event.MouseListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pdbImport=false;
this.treeImport=false;
this.annotationImport=false;
this.source=null;
this.textarea=Clazz.new_($I$(1,1));
this.accept=Clazz.new_($I$(2,1).c$$S,["New Window"]);
this.addSequences=Clazz.new_($I$(2,1).c$$S,["Add to Current Alignment"]);
this.cancel=Clazz.new_($I$(2,1).c$$S,["Close"]);
this.buttonPanel=Clazz.new_($I$(3,1));
this.borderLayout1=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['Z',['pdbImport','treeImport','annotationImport'],'O',['seq','jalview.datamodel.SequenceI','alignFrame','jalview.appletgui.AlignFrame','source','jalview.io.AlignmentFileReaderI','textarea','java.awt.TextArea','accept','java.awt.Button','+addSequences','+cancel','buttonPanel','java.awt.Panel','borderLayout1','java.awt.BorderLayout']]]

Clazz.newMeth(C$, 'c$$Z$jalview_appletgui_AlignFrame',  function (forImport, alignFrame) {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
this.alignFrame=alignFrame;
if (!forImport) {
this.buttonPanel.setVisible$Z(false);
}}, 1);

Clazz.newMeth(C$, 'getText$',  function () {
return this.textarea.getText$();
});

Clazz.newMeth(C$, 'setText$S',  function (text) {
this.textarea.setText$S(text);
});

Clazz.newMeth(C$, 'setPDBImport$jalview_datamodel_SequenceI',  function (seq) {
this.seq=seq;
this.accept.setLabel$S($I$(5).getString$S("action.accept"));
this.addSequences.setVisible$Z(false);
this.pdbImport=true;
});

Clazz.newMeth(C$, 'setTreeImport$',  function () {
this.treeImport=true;
this.accept.setLabel$S($I$(5).getString$S("action.accept"));
this.addSequences.setVisible$Z(false);
});

Clazz.newMeth(C$, 'setAnnotationImport$',  function () {
this.annotationImport=true;
this.accept.setLabel$S($I$(5).getString$S("action.accept"));
this.addSequences.setVisible$Z(false);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
if (evt.getSource$() === this.accept ) {
this.ok$Z(true);
} else if (evt.getSource$() === this.addSequences ) {
this.ok$Z(false);
} else if (evt.getSource$() === this.cancel ) {
this.cancel$();
}});

Clazz.newMeth(C$, 'ok$Z',  function (newWindow) {
var text=this.getText$();
var length=text.length$();
this.textarea.append$S("\n");
if (this.textarea.getText$().length$() == length) {
var warning="\n\n#################################################\nWARNING!! THIS IS THE MAXIMUM SIZE OF TEXTAREA!!\n\nCAN\'T INPUT FULL ALIGNMENT\n\nYOU MUST DELETE THIS WARNING TO CONTINUE\n\nMAKE SURE LAST SEQUENCE PASTED IS COMPLETE\n#################################################\n";
this.textarea.setText$S(text.substring$I$I(0, text.length$() - warning.length$()) + warning);
this.textarea.setCaretPosition$I(text.length$());
}if (this.pdbImport) {
this.openPdbViewer$S(text);
} else if (this.treeImport) {
if (!this.loadTree$()) {
return;
}} else if (this.annotationImport) {
this.loadAnnotations$();
} else if (this.alignFrame != null ) {
this.loadAlignment$S$Z$jalview_appletgui_AlignViewport(text, newWindow, this.alignFrame.getAlignViewport$());
}if (Clazz.instanceOf(this.getParent$(), "java.awt.Frame")) {
(this.getParent$()).setVisible$Z(false);
} else {
(this.getParent$()).setVisible$Z(false);
}});

Clazz.newMeth(C$, 'loadTree$',  function () {
try {
var fin=Clazz.new_([this.textarea.getText$(), $I$(7).PASTE],$I$(6,1).c$$S$jalview_io_DataSourceType);
fin.parse$();
if (fin.getTree$() != null ) {
this.alignFrame.loadTree$jalview_io_NewickFile$S(fin, "Pasted tree file");
return true;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.textarea.setText$S($I$(5,"formatMessage$S$OA",["label.could_not_parse_newick_file", Clazz.array(java.lang.Object, -1, [ex.getMessage$()])]));
return false;
} else {
throw ex;
}
}
return false;
});

Clazz.newMeth(C$, 'loadAlignment$S$Z$jalview_appletgui_AlignViewport',  function (text, newWindow, viewport) {
var al=null;
try {
var format=Clazz.new_($I$(8,1)).identify$S$jalview_io_DataSourceType(text, $I$(7).PASTE);
var afa=Clazz.new_($I$(9,1).c$$jalview_api_AlignmentViewPanel,[this.alignFrame.alignPanel]);
al=afa.readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(text, $I$(7).PASTE, format);
this.source=afa.getAlignFile$();
if (al != null ) {
al.setDataset$jalview_datamodel_AlignmentI(null);
var allowSplitFrame=this.alignFrame.viewport.applet.getDefaultParameter$S$Z("enableSplitFrame", false);
if (allowSplitFrame && this.openSplitFrame$jalview_datamodel_AlignmentI$jalview_io_FileFormatI(al, format) ) {
return;
}if (newWindow) {
var af;
if (Clazz.instanceOf(this.source, "jalview.api.ComplexAlignFile")) {
var colSel=(this.source).getHiddenColumns$();
var hiddenSeqs=(this.source).getHiddenSequences$();
var showSeqFeatures=(this.source).isShowSeqFeatures$();
var colourSchemeName=(this.source).getGlobalColourScheme$();
af=Clazz.new_($I$(10,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA$jalview_datamodel_HiddenColumns$jalview_bin_JalviewLite$S$Z,[al, hiddenSeqs, colSel, this.alignFrame.viewport.applet, "Cut & Paste input - " + format, false]);
af.getAlignViewport$().setShowSequenceFeatures$Z(showSeqFeatures);
var cs=$I$(11).getJalviewColourScheme$S$jalview_datamodel_AnnotatedCollectionI(colourSchemeName, al);
if (cs != null ) {
af.changeColour$jalview_schemes_ColourSchemeI(cs);
}} else {
af=Clazz.new_($I$(10,1).c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z,[al, this.alignFrame.viewport.applet, "Cut & Paste input - " + format, false]);
if (Clazz.instanceOf(this.source, "jalview.api.FeaturesSourceI")) {
af.getAlignViewport$().setShowSequenceFeatures$Z(true);
}}af.statusBar.setText$S($I$(5).getString$S("label.successfully_pasted_annotation_to_alignment"));
} else {
this.alignFrame.addSequences$jalview_datamodel_SequenceIA(al.getSequencesArray$());
this.alignFrame.statusBar.setText$S($I$(5).getString$S("label.successfully_pasted_alignment_file"));
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'openSplitFrame$jalview_datamodel_AlignmentI$jalview_io_FileFormatI',  function (al, format) {
var thisAlignment=this.alignFrame.getAlignViewport$().getAlignment$();
if (thisAlignment.isNucleotide$() == al.isNucleotide$() ) {
return false;
}var protein=thisAlignment.isNucleotide$() ? al : thisAlignment;
var dna=thisAlignment.isNucleotide$() ? thisAlignment : al;
var mapped=$I$(12).mapProteinAlignmentToCdna$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI(protein, dna);
if (!mapped) {
return false;
}var title=$I$(5).getString$S("label.open_split_window");
var dialog=Clazz.new_([this.getParent$(), title, true, 100, 400],$I$(13,1).c$$java_awt_Frame$S$Z$I$I);
dialog.ok.setLabel$S($I$(5).getString$S("action.yes"));
dialog.cancel.setLabel$S($I$(5).getString$S("action.no"));
var question=Clazz.new_([Clazz.new_($I$(4,1))],$I$(3,1).c$$java_awt_LayoutManager);
var text=$I$(5).getString$S("label.open_split_window?");
question.add$java_awt_Component$O(Clazz.new_($I$(14,1).c$$S$I,[text, 1]), "Center");
dialog.setMainPanel$java_awt_Panel(question);
dialog.setVisible$Z(true);
dialog.toFront$();
if (!dialog.accept) {
return false;
}al.alignAs$jalview_datamodel_AlignmentI(thisAlignment);
var applet=this.alignFrame.viewport.applet;
var copyFrame=Clazz.new_([this.alignFrame.viewport.getAlignment$(), applet, this.alignFrame.getTitle$(), false, false],$I$(10,1).c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z$Z);
var newFrame=Clazz.new_($I$(10,1).c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z$Z,[al, this.alignFrame.viewport.applet, "Cut & Paste input - " + format, false, false]);
var dnaFrame=al.isNucleotide$() ? newFrame : copyFrame;
var proteinFrame=al.isNucleotide$() ? copyFrame : newFrame;
var sf=Clazz.new_($I$(15,1).c$$jalview_appletgui_AlignFrame$jalview_appletgui_AlignFrame,[dnaFrame, proteinFrame]);
sf.addToDisplay$Z$jalview_bin_JalviewLite(false, applet);
return true;
});

Clazz.newMeth(C$, 'loadAnnotations$',  function () {
var tcf=null;
try {
tcf=Clazz.new_([this.textarea.getText$(), $I$(7).PASTE],$I$(16,1).c$$O$jalview_io_DataSourceType);
if (tcf.isValid$()) {
if (tcf.annotateAlignment$jalview_datamodel_AlignmentI$Z(this.alignFrame.viewport.getAlignment$(), true)) {
this.alignFrame.tcoffeeColour.setEnabled$Z(true);
this.alignFrame.alignPanel.fontChanged$();
this.alignFrame.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_([this.alignFrame.viewport.getAlignment$()],$I$(17,1).c$$jalview_datamodel_AnnotatedCollectionI));
this.alignFrame.statusBar.setText$S($I$(5).getString$S("label.successfully_pasted_tcoffee_scores_to_alignment"));
} else {
this.alignFrame.statusBar.setText$S($I$(5,"formatMessage$S$OA",["label.failed_add_tcoffee_scores", Clazz.array(java.lang.Object, -1, [(tcf.getWarningMessage$() != null  ? tcf.getWarningMessage$() : "")])]));
}} else {
tcf=null;
}} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
tcf=null;
} else {
throw x;
}
}
if (tcf == null ) {
if (Clazz.new_($I$(18,1)).annotateAlignmentView$jalview_api_AlignViewportI$O$jalview_io_DataSourceType(this.alignFrame.viewport, this.textarea.getText$(), $I$(7).PASTE)) {
this.alignFrame.alignPanel.fontChanged$();
this.alignFrame.alignPanel.setScrollValues$I$I(0, 0);
this.alignFrame.statusBar.setText$S($I$(5).getString$S("label.successfully_pasted_annotation_to_alignment"));
} else {
if (!this.alignFrame.parseFeaturesFile$S$jalview_io_DataSourceType(this.textarea.getText$(), $I$(7).PASTE)) {
this.alignFrame.statusBar.setText$S($I$(5).getString$S("label.couldnt_parse_pasted_text_as_valid_annotation_feature_GFF_tcoffee_file"));
}}}});

Clazz.newMeth(C$, 'openPdbViewer$S',  function (text) {
var pdb=Clazz.new_($I$(19,1));
pdb.setFile$S(text);
if (this.alignFrame.alignPanel.av.applet.jmolAvailable) {
Clazz.new_([pdb, Clazz.array($I$(21), -1, [this.seq]), null, this.alignFrame.alignPanel, $I$(7).PASTE],$I$(20,1).c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_appletgui_AlignmentPanel$jalview_io_DataSourceType);
} else {
Clazz.new_([pdb, Clazz.array($I$(21), -1, [this.seq]), null, this.alignFrame.alignPanel, $I$(7).PASTE],$I$(22,1).c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_appletgui_AlignmentPanel$jalview_io_DataSourceType);
}});

Clazz.newMeth(C$, 'cancel$',  function () {
this.textarea.setText$S("");
if (Clazz.instanceOf(this.getParent$(), "java.awt.Frame")) {
(this.getParent$()).setVisible$Z(false);
} else {
(this.getParent$()).setVisible$Z(false);
}});

Clazz.newMeth(C$, 'jbInit',  function () {
this.textarea.setFont$java_awt_Font(Clazz.new_($I$(23,1).c$$S$I$I,["Monospaced", 0, 10]));
this.textarea.setText$S($I$(5).getString$S("label.paste_your_alignment_file"));
this.textarea.addMouseListener$java_awt_event_MouseListener(this);
this.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.accept.addActionListener$java_awt_event_ActionListener(this);
this.addSequences.addActionListener$java_awt_event_ActionListener(this);
this.cancel.addActionListener$java_awt_event_ActionListener(this);
this.add$java_awt_Component$O(this.buttonPanel, "South");
this.buttonPanel.add$java_awt_Component$O(this.accept, null);
this.buttonPanel.add$java_awt_Component(this.addSequences);
this.buttonPanel.add$java_awt_Component$O(this.cancel, null);
this.add$java_awt_Component$O(this.textarea, "Center");
}, p$1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
if (this.textarea.getText$().startsWith$S($I$(5).getString$S("label.paste_your"))) {
this.textarea.setText$S("");
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:27 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
