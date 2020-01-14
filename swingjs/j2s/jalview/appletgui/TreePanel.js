(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'jalview.analysis.TreeModel','jalview.analysis.scoremodels.ScoreModels','jalview.analysis.NJTree','jalview.analysis.scoremodels.SimilarityParams','jalview.analysis.AverageDistanceTree','java.awt.BorderLayout','java.awt.ScrollPane','java.awt.MenuBar','java.awt.Menu','java.awt.MenuItem','java.awt.CheckboxMenuItem','jalview.appletgui.TreeCanvas',['jalview.appletgui.TreePanel','.TreeLoader'],'jalview.datamodel.Alignment','jalview.appletgui.AlignFrame','jalview.io.NewickFile','jalview.appletgui.CutAndPasteTransfer','java.awt.Frame','jalview.bin.JalviewLite','jalview.appletgui.FontChooser','java.awt.Color','java.awt.Font','jalview.util.MessageManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TreePanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.appletgui.EmbmenuFrame', ['java.awt.event.ActionListener', 'java.awt.event.ItemListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.seq=null;
this.$type=null;
this.pwtype=null;
this.start=0;
this.end=0;
this.treeCanvas=null;
this.tree=null;
this.ap=null;
this.av=null;
this.borderLayout1=null;
this.scrollPane=null;
this.jMenuBar1=null;
this.jMenu2=null;
this.fontSize=null;
this.bootstrapMenu=null;
this.distanceMenu=null;
this.placeholdersMenu=null;
this.fitToWindow=null;
this.fileMenu=null;
this.newickOutput=null;
this.inputData=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.borderLayout1=Clazz.new_($I$(6));
this.scrollPane=Clazz.new_($I$(7));
this.jMenuBar1=Clazz.new_($I$(8));
this.jMenu2=Clazz.new_($I$(9));
this.fontSize=Clazz.new_($I$(10));
this.bootstrapMenu=Clazz.new_($I$(11));
this.distanceMenu=Clazz.new_($I$(11));
this.placeholdersMenu=Clazz.new_($I$(11));
this.fitToWindow=Clazz.new_($I$(11));
this.fileMenu=Clazz.new_($I$(9));
this.newickOutput=Clazz.new_($I$(10));
this.inputData=Clazz.new_($I$(10));
}, 1);

Clazz.newMeth(C$, 'getTree$', function () {
return this.tree;
});

Clazz.newMeth(C$, 'finalize$', function () {
this.ap=null;
this.av=null;
C$.superclazz.prototype.finalize$.apply(this, []);
});

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel$S$S', function (alignPanel, type, pwtype) {
Clazz.super_(C$, this,1);
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

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel$S$S$jalview_io_NewickFile', function (ap, type, pwtype, newtree) {
Clazz.super_(C$, this,1);
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

Clazz.newMeth(C$, 'initTreePanel$jalview_appletgui_AlignmentPanel$S$S$jalview_io_NewickFile', function (ap, type, pwtype, newTree) {
this.ap=ap;
this.av=ap.av;
this.$type=type;
this.pwtype=pwtype;
this.treeCanvas=Clazz.new_($I$(12).c$$jalview_appletgui_AlignmentPanel$java_awt_ScrollPane,[ap, this.scrollPane]);
var tl=Clazz.new_($I$(13).c$$jalview_io_NewickFile, [this, null, newTree]);
tl.start$();
this.embedMenuIfNeeded$java_awt_Panel(this.treeCanvas);
this.scrollPane.add$java_awt_Component$O(this.treeCanvas, "Center");
});

Clazz.newMeth(C$, 'showOriginalData$', function () {
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
var al=Clazz.new_($I$(14).c$$jalview_datamodel_SequenceIA,[alAndColsel[0]]);
var af=Clazz.new_($I$(15).c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z,[al, this.av.applet, "Original Data for Tree", false]);
af.viewport.getAlignment$().setHiddenColumns$jalview_datamodel_HiddenColumns(alAndColsel[1]);
}} else {
System.out.println$S("Original Tree Data not available");
}});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
if (evt.getSource$() === this.newickOutput ) {
this.newickOutput_actionPerformed$();
} else if (evt.getSource$() === this.fontSize ) {
this.fontSize_actionPerformed$();
} else if (evt.getSource$() === this.inputData ) {
this.showOriginalData$();
}});

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (evt) {
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

Clazz.newMeth(C$, 'newickOutput_actionPerformed$', function () {
var fout=Clazz.new_($I$(16).c$$jalview_datamodel_SequenceNode,[this.tree.getTopNode$()]);
var output=fout.print$Z$Z(false, true);
var cap=Clazz.new_($I$(17).c$$Z$jalview_appletgui_AlignFrame,[false, null]);
cap.setText$S(output);
var frame=Clazz.new_($I$(18));
frame.add$java_awt_Component(cap);
$I$(19).addFrame$java_awt_Frame$S$I$I(frame, this.$type + " " + this.pwtype , 500, 100);
});

Clazz.newMeth(C$, 'getTreeFont$', function () {
return this.treeCanvas.$font;
});

Clazz.newMeth(C$, 'setTreeFont$java_awt_Font', function (font) {
this.treeCanvas.$font=font;
this.treeCanvas.repaint$();
});

Clazz.newMeth(C$, 'fontSize_actionPerformed$', function () {
if (this.treeCanvas == null ) {
return;
}Clazz.new_($I$(20).c$$jalview_appletgui_TreePanel,[this]);
});

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.setBackground$java_awt_Color($I$(21).white);
this.setFont$java_awt_Font(Clazz.new_($I$(22).c$$S$I$I,["Verdana", 0, 12]));
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
(function(){var C$=Clazz.newClass(P$.TreePanel, "TreeLoader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.newtree=null;
this.odata=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.odata=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_NewickFile', function (newtree) {
Clazz.super_(C$, this,1);
this.newtree=newtree;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (this.newtree != null ) {
this.this$0.tree=Clazz.new_($I$(1).c$$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentView$jalview_io_NewickFile,[this.this$0.av.getAlignment$().getSequencesArray$(), this.odata, this.newtree]);
} else {
var sm1=$I$(2).getInstance$().getScoreModel$S$jalview_api_AlignmentViewPanel(this.this$0.pwtype, this.this$0.treeCanvas.ap);
var sm=sm1;
var njtree=this.this$0.$type.equals$O("NJ") ? Clazz.new_($I$(3).c$$jalview_viewmodel_AlignmentViewport$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI,[this.this$0.av, sm, $I$(4).Jalview]) : Clazz.new_($I$(5).c$$jalview_viewmodel_AlignmentViewport$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI,[this.this$0.av, sm, $I$(4).Jalview]);
this.this$0.tree=Clazz.new_($I$(1).c$$jalview_analysis_TreeBuilder,[njtree]);
}this.this$0.tree.reCount$jalview_datamodel_SequenceNode(this.this$0.tree.getTopNode$());
this.this$0.tree.findHeight$jalview_datamodel_SequenceNode(this.this$0.tree.getTopNode$());
this.this$0.treeCanvas.setTree$jalview_analysis_TreeModel(this.this$0.tree);
if (this.newtree != null ) {
var showDist=this.newtree.HasDistances$() && this.this$0.av.applet.getDefaultParameter$S$Z("showTreeDistances", this.newtree.HasDistances$()) ;
var showBoots=this.newtree.HasBootstrap$() && this.this$0.av.applet.getDefaultParameter$S$Z("showTreeBootstraps", this.newtree.HasBootstrap$()) ;
this.this$0.distanceMenu.setState$Z(showDist);
this.this$0.bootstrapMenu.setState$Z(showBoots);
this.this$0.treeCanvas.setShowBootstrap$Z(showBoots);
this.this$0.treeCanvas.setShowDistances$Z(showDist);
this.this$0.treeCanvas.setMarkPlaceholders$Z(this.this$0.av.applet.getDefaultParameter$S$Z("showUnlinkedTreeNodes", false));
}this.this$0.treeCanvas.repaint$();
this.this$0.av.setCurrentTree$jalview_analysis_TreeModel(this.this$0.tree);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
