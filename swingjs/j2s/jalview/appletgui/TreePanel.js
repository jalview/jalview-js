(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'jalview.analysis.TreeModel','jalview.analysis.scoremodels.ScoreModels','jalview.analysis.NJTree','jalview.analysis.scoremodels.SimilarityParams','jalview.analysis.AverageDistanceTree','java.awt.BorderLayout','java.awt.ScrollPane','java.awt.MenuBar','java.awt.Menu','java.awt.MenuItem','java.awt.CheckboxMenuItem','jalview.appletgui.TreeCanvas',['jalview.appletgui.TreePanel','.TreeLoader'],'jalview.datamodel.Alignment','jalview.appletgui.AlignFrame','jalview.io.NewickFile','jalview.appletgui.CutAndPasteTransfer','java.awt.Frame','jalview.bin.JalviewLite','jalview.appletgui.FontChooser','java.awt.Color','java.awt.Font','jalview.util.MessageManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TreePanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.appletgui.EmbmenuFrame', ['java.awt.event.ActionListener', 'java.awt.event.ItemListener', 'AutoCloseable']);
C$.$classes$=[['TreeLoader',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.borderLayout1=Clazz.new_($I$(6,1));
this.scrollPane=Clazz.new_($I$(7,1));
this.jMenuBar1=Clazz.new_($I$(8,1));
this.jMenu2=Clazz.new_($I$(9,1));
this.fontSize=Clazz.new_($I$(10,1));
this.bootstrapMenu=Clazz.new_($I$(11,1));
this.distanceMenu=Clazz.new_($I$(11,1));
this.placeholdersMenu=Clazz.new_($I$(11,1));
this.fitToWindow=Clazz.new_($I$(11,1));
this.fileMenu=Clazz.new_($I$(9,1));
this.newickOutput=Clazz.new_($I$(10,1));
this.inputData=Clazz.new_($I$(10,1));
},1);

C$.$fields$=[['I',['start','end'],'S',['$type','pwtype'],'O',['seq','jalview.datamodel.SequenceI[]','treeCanvas','jalview.appletgui.TreeCanvas','tree','jalview.analysis.TreeModel','ap','jalview.appletgui.AlignmentPanel','av','jalview.appletgui.AlignViewport','borderLayout1','java.awt.BorderLayout','scrollPane','java.awt.ScrollPane','jMenuBar1','java.awt.MenuBar','jMenu2','java.awt.Menu','fontSize','java.awt.MenuItem','bootstrapMenu','java.awt.CheckboxMenuItem','+distanceMenu','+placeholdersMenu','+fitToWindow','fileMenu','java.awt.Menu','newickOutput','java.awt.MenuItem','+inputData']]]

Clazz.newMeth(C$, 'getTree$',  function () {
return this.tree;
});

Clazz.newMeth(C$, 'close$',  function () {
this.ap=null;
this.av=null;
C$.superclazz.prototype.close$.apply(this, []);
});

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel$S$S',  function (alignPanel, type, pwtype) {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
this.setMenuBar$java_awt_MenuBar(this.jMenuBar1);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.initTreePanel$jalview_appletgui_AlignmentPanel$S$S$jalview_io_NewickFile(alignPanel, type, pwtype, null);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel$S$S$jalview_io_NewickFile',  function (ap, type, pwtype, newtree) {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
this.setMenuBar$java_awt_MenuBar(this.jMenuBar1);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
this.initTreePanel$jalview_appletgui_AlignmentPanel$S$S$jalview_io_NewickFile(ap, type, pwtype, newtree);
}, 1);

Clazz.newMeth(C$, 'initTreePanel$jalview_appletgui_AlignmentPanel$S$S$jalview_io_NewickFile',  function (ap, type, pwtype, newTree) {
this.ap=ap;
this.av=ap.av;
this.$type=type;
this.pwtype=pwtype;
this.treeCanvas=Clazz.new_($I$(12,1).c$$jalview_appletgui_AlignmentPanel$java_awt_ScrollPane,[ap, this.scrollPane]);
var tl=Clazz.new_($I$(13,1).c$$jalview_io_NewickFile,[this, null, newTree]);
tl.start$();
this.embedMenuIfNeeded$java_awt_Panel(this.treeCanvas);
this.scrollPane.add$java_awt_Component$O(this.treeCanvas, "Center");
});

Clazz.newMeth(C$, 'showOriginalData$',  function () {
if (this.tree.getOriginalData$() != null ) {
var gc="-";
try {
gc=this.av.getGapCharacter$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var alAndColsel=this.tree.getOriginalData$().getAlignmentAndHiddenColumns$C(gc);
if (alAndColsel != null  && alAndColsel[0] != null  ) {
var al=Clazz.new_($I$(14,1).c$$jalview_datamodel_SequenceIA,[alAndColsel[0]]);
var af=Clazz.new_($I$(15,1).c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z,[al, this.av.applet, "Original Data for Tree", false]);
af.viewport.getAlignment$().setHiddenColumns$jalview_datamodel_HiddenColumns(alAndColsel[1]);
}} else {
System.out.println$S("Original Tree Data not available");
}});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
if (evt.getSource$() === this.newickOutput ) {
this.newickOutput_actionPerformed$();
} else if (evt.getSource$() === this.fontSize ) {
this.fontSize_actionPerformed$();
} else if (evt.getSource$() === this.inputData ) {
this.showOriginalData$();
}});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
if (evt.getSource$() === this.fitToWindow ) {
this.treeCanvas.fitToWindow=this.fitToWindow.getState$();
} else if (evt.getSource$() === this.distanceMenu ) {
this.treeCanvas.setShowDistances$Z(this.distanceMenu.getState$());
} else if (evt.getSource$() === this.bootstrapMenu ) {
this.treeCanvas.setShowBootstrap$Z(this.bootstrapMenu.getState$());
} else if (evt.getSource$() === this.placeholdersMenu ) {
this.treeCanvas.setMarkPlaceholders$Z(this.placeholdersMenu.getState$());
}this.treeCanvas.repaint$();
});

Clazz.newMeth(C$, 'newickOutput_actionPerformed$',  function () {
var fout=Clazz.new_([this.tree.getTopNode$()],$I$(16,1).c$$jalview_datamodel_SequenceNode);
var output=fout.print$Z$Z(false, true);
var cap=Clazz.new_($I$(17,1).c$$Z$jalview_appletgui_AlignFrame,[false, null]);
cap.setText$S(output);
var frame=Clazz.new_($I$(18,1));
frame.add$java_awt_Component(cap);
$I$(19).addFrame$java_awt_Frame$S$I$I(frame, this.$type + " " + this.pwtype , 500, 100);
});

Clazz.newMeth(C$, 'getTreeFont$',  function () {
return this.treeCanvas.$font;
});

Clazz.newMeth(C$, 'setTreeFont$java_awt_Font',  function (font) {
this.treeCanvas.$font=font;
this.treeCanvas.repaint$();
});

Clazz.newMeth(C$, 'fontSize_actionPerformed$',  function () {
if (this.treeCanvas == null ) {
return;
}Clazz.new_($I$(20,1).c$$jalview_appletgui_TreePanel,[this]);
});

Clazz.newMeth(C$, 'jbInit',  function () {
this.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.setBackground$java_awt_Color($I$(21).white);
this.setFont$java_awt_Font(Clazz.new_($I$(22,1).c$$S$I$I,["Verdana", 0, 12]));
this.jMenu2.setLabel$S($I$(23).getString$S("action.view"));
this.fontSize.setLabel$S($I$(23).getString$S("action.font"));
this.fontSize.addActionListener$java_awt_event_ActionListener(this);
this.bootstrapMenu.setLabel$S($I$(23).getString$S("label.show_bootstrap_values"));
this.bootstrapMenu.addItemListener$java_awt_event_ItemListener(this);
this.distanceMenu.setLabel$S($I$(23).getString$S("label.show_distances"));
this.distanceMenu.addItemListener$java_awt_event_ItemListener(this);
this.placeholdersMenu.setLabel$S($I$(23).getString$S("label.mark_unassociated_leaves"));
this.placeholdersMenu.addItemListener$java_awt_event_ItemListener(this);
this.fitToWindow.setState$Z(true);
this.fitToWindow.setLabel$S($I$(23).getString$S("label.fit_to_window"));
this.fitToWindow.addItemListener$java_awt_event_ItemListener(this);
this.fileMenu.setLabel$S($I$(23).getString$S("action.file"));
this.newickOutput.setLabel$S($I$(23).getString$S("label.newick_format"));
this.newickOutput.addActionListener$java_awt_event_ActionListener(this);
this.inputData.setLabel$S($I$(23).getString$S("label.input_data"));
this.add$java_awt_Component$O(this.scrollPane, "Center");
this.jMenuBar1.add$java_awt_Menu(this.fileMenu);
this.jMenuBar1.add$java_awt_Menu(this.jMenu2);
this.jMenu2.add$java_awt_MenuItem(this.fitToWindow);
this.jMenu2.add$java_awt_MenuItem(this.fontSize);
this.jMenu2.add$java_awt_MenuItem(this.distanceMenu);
this.jMenu2.add$java_awt_MenuItem(this.bootstrapMenu);
this.jMenu2.add$java_awt_MenuItem(this.placeholdersMenu);
this.fileMenu.add$java_awt_MenuItem(this.newickOutput);
this.fileMenu.add$java_awt_MenuItem(this.inputData);
this.inputData.addActionListener$java_awt_event_ActionListener(this);
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreePanel, "TreeLoader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.odata=null;
},1);

C$.$fields$=[['O',['newtree','jalview.io.NewickFile','odata','jalview.datamodel.AlignmentView']]]

Clazz.newMeth(C$, 'c$$jalview_io_NewickFile',  function (newtree) {
Clazz.super_(C$, this);
this.newtree=newtree;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.newtree != null ) {
this.b$['jalview.appletgui.TreePanel'].tree=Clazz.new_([this.b$['jalview.appletgui.TreePanel'].av.getAlignment$().getSequencesArray$(), this.odata, this.newtree],$I$(1,1).c$$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentView$jalview_io_NewickFile);
} else {
var sm1=$I$(2).getInstance$().getScoreModel$S$jalview_api_AlignmentViewPanel(this.b$['jalview.appletgui.TreePanel'].pwtype, this.b$['jalview.appletgui.TreePanel'].treeCanvas.ap);
var sm=sm1;
var njtree=this.b$['jalview.appletgui.TreePanel'].$type.equals$O("NJ") ? Clazz.new_([this.b$['jalview.appletgui.TreePanel'].av, sm, $I$(4).Jalview],$I$(3,1).c$$jalview_viewmodel_AlignmentViewport$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI) : Clazz.new_([this.b$['jalview.appletgui.TreePanel'].av, sm, $I$(4).Jalview],$I$(5,1).c$$jalview_viewmodel_AlignmentViewport$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI);
this.b$['jalview.appletgui.TreePanel'].tree=Clazz.new_($I$(1,1).c$$jalview_analysis_TreeBuilder,[njtree]);
}this.b$['jalview.appletgui.TreePanel'].tree.reCount$jalview_datamodel_SequenceNode(this.b$['jalview.appletgui.TreePanel'].tree.getTopNode$());
this.b$['jalview.appletgui.TreePanel'].tree.findHeight$jalview_datamodel_SequenceNode(this.b$['jalview.appletgui.TreePanel'].tree.getTopNode$());
this.b$['jalview.appletgui.TreePanel'].treeCanvas.setTree$jalview_analysis_TreeModel(this.b$['jalview.appletgui.TreePanel'].tree);
if (this.newtree != null ) {
var showDist=this.newtree.HasDistances$() && this.b$['jalview.appletgui.TreePanel'].av.applet.getDefaultParameter$S$Z("showTreeDistances", this.newtree.HasDistances$()) ;
var showBoots=this.newtree.HasBootstrap$() && this.b$['jalview.appletgui.TreePanel'].av.applet.getDefaultParameter$S$Z("showTreeBootstraps", this.newtree.HasBootstrap$()) ;
this.b$['jalview.appletgui.TreePanel'].distanceMenu.setState$Z(showDist);
this.b$['jalview.appletgui.TreePanel'].bootstrapMenu.setState$Z(showBoots);
this.b$['jalview.appletgui.TreePanel'].treeCanvas.setShowBootstrap$Z(showBoots);
this.b$['jalview.appletgui.TreePanel'].treeCanvas.setShowDistances$Z(showDist);
this.b$['jalview.appletgui.TreePanel'].treeCanvas.setMarkPlaceholders$Z(this.b$['jalview.appletgui.TreePanel'].av.applet.getDefaultParameter$S$Z("showUnlinkedTreeNodes", false));
}this.b$['jalview.appletgui.TreePanel'].treeCanvas.repaint$();
this.b$['jalview.appletgui.TreePanel'].av.setCurrentTree$jalview_analysis_TreeModel(this.b$['jalview.appletgui.TreePanel'].tree);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
