(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.analysis.TreeModel','jalview.analysis.scoremodels.ScoreModels','jalview.analysis.NJTree','jalview.analysis.AverageDistanceTree','jalview.gui.TreeCanvas','jalview.gui.PaintRefresher','javax.swing.event.InternalFrameAdapter',['jalview.gui.TreePanel','.TreeLoader'],'javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem','jalview.util.MessageManager','jalview.gui.CutAndPasteTransfer','jalview.io.NewickFile','jalview.gui.Desktop','jalview.gui.OOMWarning','jalview.io.JalviewFileChooser','jalview.bin.Cache','jalview.io.JalviewFileView','java.io.PrintWriter','java.io.FileWriter','jalview.bin.Console','jalview.datamodel.Alignment','jalview.gui.AlignFrame','java.util.ArrayList','jalview.analysis.AlignmentSorter','jalview.commands.OrderCommand','jalview.gui.FontChooser','jalview.gui.ImageExporter','java.util.Locale','jalview.util.DBRefUtils','java.io.FileOutputStream','org.jibble.epsgraphics.EpsGraphics2D']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TreePanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.jbgui.GTreePanel');
C$.$classes$=[['TreeLoader',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['treeType','scoreModelName','treeTitle'],'O',['similarityParams','jalview.api.analysis.SimilarityParamsI','treeCanvas','jalview.gui.TreeCanvas','tree','jalview.analysis.TreeModel','av','jalview.gui.AlignViewport']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$S$S$jalview_api_analysis_SimilarityParamsI',  function (ap, type, modelName, options) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.similarityParams=options;
this.initTreePanel$jalview_gui_AlignmentPanel$S$S$jalview_io_NewickFile$jalview_datamodel_AlignmentView(ap, type, modelName, null, null);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$jalview_io_NewickFile$S$jalview_datamodel_AlignmentView',  function (alignPanel, newtree, theTitle, inputData) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.treeTitle=theTitle;
this.initTreePanel$jalview_gui_AlignmentPanel$S$S$jalview_io_NewickFile$jalview_datamodel_AlignmentView(alignPanel, null, null, newtree, inputData);
}, 1);

Clazz.newMeth(C$, 'getAlignment$',  function () {
return this.getTreeCanvas$().getViewport$().getAlignment$();
});

Clazz.newMeth(C$, 'getViewPort$',  function () {
return this.getTreeCanvas$().getViewport$();
});

Clazz.newMeth(C$, 'initTreePanel$jalview_gui_AlignmentPanel$S$S$jalview_io_NewickFile$jalview_datamodel_AlignmentView',  function (ap, type, modelName, newTree, inputData) {
this.av=ap.av;
this.treeType=type;
this.scoreModelName=modelName;
this.treeCanvas=Clazz.new_($I$(5,1).c$$jalview_gui_TreePanel$jalview_gui_AlignmentPanel$javax_swing_JScrollPane,[this, ap, this.scrollPane]);
this.scrollPane.setViewportView$java_awt_Component(this.treeCanvas);
$I$(6,"Register$java_awt_Component$S",[this, ap.av.getSequenceSetId$()]);
this.buildAssociatedViewMenu$();
var listener=this.addAlignmentListener$();
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.TreePanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TreePanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent',  function (evt) {
if (this.b$['jalview.gui.TreePanel'].av != null ) {
this.b$['jalview.gui.TreePanel'].av.removePropertyChangeListener$java_beans_PropertyChangeListener(this.$finals$.listener);
}this.b$['jalview.gui.TreePanel'].releaseReferences$.apply(this.b$['jalview.gui.TreePanel'], []);
});
})()
), Clazz.new_($I$(7,1),[this, {listener:listener}],P$.TreePanel$1)));
var tl=Clazz.new_($I$(8,1).c$$jalview_io_NewickFile$jalview_datamodel_AlignmentView,[this, null, newTree, inputData]);
tl.start$();
});

Clazz.newMeth(C$, 'releaseReferences$',  function () {
this.tree=null;
this.treeCanvas.tree=null;
this.treeCanvas.nodeHash=null;
this.treeCanvas.nameHash=null;
});

Clazz.newMeth(C$, 'addAlignmentListener$',  function () {
var listener=((P$.TreePanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TreePanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
if (evt.getPropertyName$().equals$O("alignment")) {
if (this.b$['jalview.gui.TreePanel'].tree == null ) {
System.out.println$S("tree is null");
return;
}if (evt.getNewValue$() == null ) {
System.out.println$S("new alignment sequences vector value is null");
}this.b$['jalview.gui.TreePanel'].tree.updatePlaceHolders$java_util_List(evt.getNewValue$());
this.b$['jalview.gui.TreePanel'].treeCanvas.nameHash.clear$();
this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
}});
})()
), Clazz.new_(P$.TreePanel$2.$init$,[this, null]));
this.av.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
return listener;
});

Clazz.newMeth(C$, 'viewMenu_menuSelected$',  function () {
this.buildAssociatedViewMenu$();
});

Clazz.newMeth(C$, 'buildAssociatedViewMenu$',  function () {
var aps=$I$(6,"getAssociatedPanels$S",[this.av.getSequenceSetId$()]);
if (aps.length == 1 && this.getTreeCanvas$().getAssociatedPanel$() === aps[0]  ) {
this.associateLeavesMenu.setVisible$Z(false);
return;
}this.associateLeavesMenu.setVisible$Z(true);
if ((Clazz.instanceOf(this.viewMenu.getItem$I(this.viewMenu.getItemCount$() - 2), "javax.swing.JMenuItem"))) {
this.viewMenu.insertSeparator$I(this.viewMenu.getItemCount$() - 1);
}this.associateLeavesMenu.removeAll$();
var item;
var buttonGroup=Clazz.new_($I$(9,1));
var i;
var iSize=aps.length;
var thisTreePanel=this;
for (i=0; i < iSize; i++) {
var ap=aps[i];
item=Clazz.new_([ap.av.getViewName$(), ap === this.treeCanvas.getAssociatedPanel$() ],$I$(10,1).c$$S$Z);
buttonGroup.add$javax_swing_AbstractButton(item);
item.addActionListener$java_awt_event_ActionListener(((P$.TreePanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TreePanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['jalview.gui.TreePanel'].treeCanvas.applyToAllViews=false;
this.b$['jalview.gui.TreePanel'].treeCanvas.setAssociatedPanel$jalview_gui_AlignmentPanel(this.$finals$.ap);
this.b$['jalview.gui.TreePanel'].treeCanvas.setViewport$jalview_gui_AlignViewport(this.$finals$.ap.av);
$I$(6,"Register$java_awt_Component$S",[this.$finals$.thisTreePanel, this.$finals$.ap.av.getSequenceSetId$()]);
});
})()
), Clazz.new_(P$.TreePanel$3.$init$,[this, {thisTreePanel:thisTreePanel,ap:ap}])));
this.associateLeavesMenu.add$javax_swing_JMenuItem(item);
}
var itemf=Clazz.new_([$I$(11).getString$S("label.all_views")],$I$(10,1).c$$S);
buttonGroup.add$javax_swing_AbstractButton(itemf);
itemf.setSelected$Z(this.treeCanvas.applyToAllViews);
itemf.addActionListener$java_awt_event_ActionListener(((P$.TreePanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TreePanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['jalview.gui.TreePanel'].treeCanvas.applyToAllViews=this.$finals$.itemf.isSelected$();
});
})()
), Clazz.new_(P$.TreePanel$4.$init$,[this, {itemf:itemf}])));
this.associateLeavesMenu.add$javax_swing_JMenuItem(itemf);
});

Clazz.newMeth(C$, 'showDistances$Z',  function (b) {
this.treeCanvas.setShowDistances$Z(b);
this.distanceMenu.setSelected$Z(b);
});

Clazz.newMeth(C$, 'showBootstrap$Z',  function (b) {
this.treeCanvas.setShowBootstrap$Z(b);
this.bootstrapMenu.setSelected$Z(b);
});

Clazz.newMeth(C$, 'showPlaceholders$Z',  function (b) {
this.placeholdersMenu.setState$Z(b);
this.treeCanvas.setMarkPlaceholders$Z(b);
});

Clazz.newMeth(C$, 'getTree$',  function () {
return this.tree;
});

Clazz.newMeth(C$, 'textbox_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var cap=Clazz.new_($I$(12,1));
var newTitle=this.getPanelTitle$();
var fout=Clazz.new_([this.tree.getTopNode$()],$I$(13,1).c$$jalview_datamodel_SequenceNode);
try {
cap.setText$S(fout.print$Z$Z$Z(this.tree.hasBootstrap$(), this.tree.hasDistances$(), this.tree.hasRootDistance$()));
$I$(14).addInternalFrame$javax_swing_JInternalFrame$S$I$I(cap, newTitle, 500, 100);
} catch (oom) {
if (Clazz.exceptionOf(oom,"OutOfMemoryError")){
Clazz.new_($I$(15,1).c$$S$OutOfMemoryError,["generating newick tree file", oom]);
cap.dispose$();
} else {
throw oom;
}
}
});

Clazz.newMeth(C$, 'saveAsNewick_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=Clazz.new_([$I$(17).getProperty$S("LAST_DIRECTORY")],$I$(16,1).c$$S);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(18,1)));
chooser.setDialogTitle$S($I$(11).getString$S("label.save_tree_as_newick"));
chooser.setToolTipText$S($I$(11).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component(null);
if (value == 0) {
var choice=chooser.getSelectedFile$().getPath$();
$I$(17,"setProperty$S$S",["LAST_DIRECTORY", chooser.getSelectedFile$().getParent$()]);
try {
var fout=Clazz.new_([this.tree.getTopNode$()],$I$(13,1).c$$jalview_datamodel_SequenceNode);
var output=fout.print$Z$Z$Z(this.tree.hasBootstrap$(), this.tree.hasDistances$(), this.tree.hasRootDistance$());
var out=Clazz.new_([Clazz.new_($I$(20,1).c$$S,[choice])],$I$(19,1).c$$java_io_Writer);
out.println$S(output);
out.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'printMenu_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.treeCanvas.startPrinting$();
});

Clazz.newMeth(C$, 'originalSeqData_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var originalData=this.tree.getOriginalData$();
if (originalData == null ) {
$I$(21).info$S("Unexpected call to originalSeqData_actionPerformed - should have hidden this menu action.");
return;
}var gc="-";
try {
gc=this.av.getGapCharacter$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var alAndColsel=originalData.getAlignmentAndHiddenColumns$C(gc);
if (alAndColsel != null  && alAndColsel[0] != null  ) {
var al=Clazz.new_($I$(22,1).c$$jalview_datamodel_SequenceIA,[alAndColsel[0]]);
var dataset=(this.av != null  && this.av.getAlignment$() != null  ) ? this.av.getAlignment$().getDataset$() : null;
if (dataset != null ) {
al.setDataset$jalview_datamodel_AlignmentI(dataset);
}if (true) {
var af=Clazz.new_($I$(23,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I,[al, alAndColsel[1], 700, 500]);
$I$(14,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[af, $I$(11,"formatMessage$S$OA",["label.original_data_for_params", Clazz.array(java.lang.Object, -1, [this.title])]), 700, 500]);
}}});

Clazz.newMeth(C$, 'fitToWindow_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.treeCanvas.fitToWindow=this.fitToWindow.isSelected$();
this.repaint$();
});

Clazz.newMeth(C$, 'sortByTree_actionPerformed$',  function () {
if (this.treeCanvas.applyToAllViews) {
var commands=Clazz.new_($I$(24,1));
for (var ap, $ap = 0, $$ap = $I$(6,"getAssociatedPanels$S",[this.av.getSequenceSetId$()]); $ap<$$ap.length&&((ap=($$ap[$ap])),1);$ap++) {
commands.add$O(this.sortAlignmentIn$jalview_gui_AlignmentPanel(ap.av.getAlignPanel$()));
}
this.av.getAlignPanel$().alignFrame.addHistoryItem$jalview_commands_CommandI(((P$.TreePanel$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "TreePanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.commands.CommandI', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'undoCommand$jalview_datamodel_AlignmentIA',  function (views) {
for (var tsort, $tsort = this.$finals$.commands.iterator$(); $tsort.hasNext$()&&((tsort=($tsort.next$())),1);) {
tsort.undoCommand$jalview_datamodel_AlignmentIA(views);
}
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.$finals$.commands.size$();
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return "Tree Sort (many views)";
});

Clazz.newMeth(C$, 'doCommand$jalview_datamodel_AlignmentIA',  function (views) {
for (var tsort, $tsort = this.$finals$.commands.iterator$(); $tsort.hasNext$()&&((tsort=($tsort.next$())),1);) {
tsort.doCommand$jalview_datamodel_AlignmentIA(views);
}
});
})()
), Clazz.new_(P$.TreePanel$5.$init$,[this, {commands:commands}])));
for (var ap, $ap = 0, $$ap = $I$(6,"getAssociatedPanels$S",[this.av.getSequenceSetId$()]); $ap<$$ap.length&&((ap=($$ap[$ap])),1);$ap++) {
ap.alignFrame.updateEditMenuBar$();
}
} else {
this.treeCanvas.getAssociatedPanel$().alignFrame.addHistoryItem$jalview_commands_CommandI(this.sortAlignmentIn$jalview_gui_AlignmentPanel(this.treeCanvas.getAssociatedPanel$()));
}});

Clazz.newMeth(C$, 'sortAlignmentIn$jalview_gui_AlignmentPanel',  function (ap) {
var viewport=ap.av;
var oldOrder=viewport.getAlignment$().getSequencesArray$();
$I$(25,"sortByTree$jalview_datamodel_AlignmentI$jalview_analysis_TreeModel",[viewport.getAlignment$(), this.tree]);
var undo;
undo=Clazz.new_(["Tree Sort", oldOrder, viewport.getAlignment$()],$I$(26,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI);
ap.paintAlignment$Z$Z(true, false);
return undo;
});

Clazz.newMeth(C$, 'font_actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.treeCanvas == null ) {
return;
}Clazz.new_($I$(27,1).c$$jalview_gui_TreePanel,[this]);
});

Clazz.newMeth(C$, 'getTreeFont$',  function () {
return this.treeCanvas.$font;
});

Clazz.newMeth(C$, 'setTreeFont$java_awt_Font',  function (f) {
if (this.treeCanvas != null ) {
this.treeCanvas.setFont$java_awt_Font(f);
}});

Clazz.newMeth(C$, 'distanceMenu_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.treeCanvas.setShowDistances$Z(this.distanceMenu.isSelected$());
});

Clazz.newMeth(C$, 'bootstrapMenu_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.treeCanvas.setShowBootstrap$Z(this.bootstrapMenu.isSelected$());
});

Clazz.newMeth(C$, 'placeholdersMenu_actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.treeCanvas.setMarkPlaceholders$Z(this.placeholdersMenu.isSelected$());
});

Clazz.newMeth(C$, 'writeTreeImage$jalview_util_ImageMaker_TYPE',  function (imageFormat) {
var width=this.treeCanvas.getWidth$();
var height=this.treeCanvas.getHeight$();
var writer=((P$.TreePanel$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "TreePanel$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.ImageExporter','jalview.gui.ImageExporter.ImageWriterI']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'exportImage$java_awt_Graphics',  function (g) {
this.b$['jalview.gui.TreePanel'].treeCanvas.draw$java_awt_Graphics$I$I(g, this.$finals$.width, this.$finals$.height);
});
})()
), Clazz.new_(P$.TreePanel$6.$init$,[this, {height:height,width:width}]));
var tree=$I$(11).getString$S("label.tree");
var exporter=Clazz.new_($I$(28,1).c$$jalview_gui_ImageExporter_ImageWriterI$jalview_gui_IProgressIndicator$jalview_util_ImageMaker_TYPE$S,[writer, null, imageFormat, tree]);
exporter.doExport$java_io_File$java_awt_Component$I$I$S(null, this, width, height, tree.toLowerCase$java_util_Locale($I$(29).ROOT));
});

Clazz.newMeth(C$, 'changeNames$S',  function (labelClass) {
this.tree.applyToNodes$jalview_datamodel_NodeTransformI(((P$.TreePanel$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "TreePanel$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.datamodel.NodeTransformI', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'transform$jalview_datamodel_BinaryNode',  function (node) {
if (Clazz.instanceOf(node, "jalview.datamodel.SequenceNode") && !(node).isPlaceholder$() && !(node).isDummy$()  ) {
var newname=null;
var sq=(node).element$();
if (sq != null ) {
var refs=$I$(30,"selectRefs$java_util_List$SA",[sq.getDBRefs$(), Clazz.array(String, -1, [this.$finals$.labelClass.toUpperCase$java_util_Locale($I$(29).ROOT)])]);
if (refs != null ) {
for (var i=0, ni=refs.size$(); i < ni; i++) {
if (newname == null ) {
newname= String.instantialize(refs.get$I(i).getAccessionId$());
} else {
newname+="; " + refs.get$I(i).getAccessionId$();
}}
}if (newname == null ) {
var features=sq.getFeatures$().getPositionalFeatures$SA(Clazz.array(String, -1, [this.$finals$.labelClass]));
for (var feature, $feature = features.iterator$(); $feature.hasNext$()&&((feature=($feature.next$())),1);) {
if (newname == null ) {
newname=feature.getDescription$();
} else {
newname=newname + "; " + feature.getDescription$() ;
}}
}}if (newname != null ) {
(node).setName$S(newname);
}}});
})()
), Clazz.new_(P$.TreePanel$7.$init$,[this, {labelClass:labelClass}])));
});

Clazz.newMeth(C$, 'getPanelTitle$',  function () {
if (this.treeTitle != null ) {
return this.treeTitle;
}var treecalcnm=$I$(11,"getString$S",["label.tree_calc_" + this.treeType.toLowerCase$java_util_Locale($I$(29).ROOT)]);
var smn=this.scoreModelName;
var ttl=$I$(11,"formatMessage$S$OA",["label.calc_title", Clazz.array(java.lang.Object, -1, [treecalcnm, smn])]);
return ttl;
});

Clazz.newMeth(C$, 'writeEpsFile$java_io_File$Z',  function (outFile, textOption) {
try {
var width=this.treeCanvas.getWidth$();
var height=this.treeCanvas.getHeight$();
var out=Clazz.new_($I$(31,1).c$$java_io_File,[outFile]);
var pg=Clazz.new_($I$(32,1).c$$S$java_io_OutputStream$I$I$I$I,["Tree", out, 0, 0, width, height]);
pg.setAccurateTextMode$Z(!textOption);
this.treeCanvas.draw$java_awt_Graphics$I$I(pg, width, height);
pg.flush$();
pg.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Error writing tree as EPS");
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getViewport$',  function () {
return this.av;
});

Clazz.newMeth(C$, 'setViewport$jalview_gui_AlignViewport',  function (av) {
this.av=av;
});

Clazz.newMeth(C$, 'getTreeCanvas$',  function () {
return this.treeCanvas;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreePanel, "TreeLoader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.odata=null;
},1);

C$.$fields$=[['O',['newtree','jalview.io.NewickFile','odata','jalview.datamodel.AlignmentView']]]

Clazz.newMeth(C$, 'c$$jalview_io_NewickFile$jalview_datamodel_AlignmentView',  function (newickFile, inputData) {
Clazz.super_(C$, this);
this.newtree=newickFile;
this.odata=inputData;
if (newickFile != null ) {
this.b$['jalview.gui.TreePanel'].showBootstrap$Z.apply(this.b$['jalview.gui.TreePanel'], [newickFile.HasBootstrap$()]);
this.b$['jalview.gui.TreePanel'].showDistances$Z.apply(this.b$['jalview.gui.TreePanel'], [newickFile.HasDistances$()]);
}}, 1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.newtree != null ) {
this.b$['jalview.gui.TreePanel'].tree=Clazz.new_([this.b$['jalview.gui.TreePanel'].av.getAlignment$().getSequencesArray$(), this.odata, this.newtree],$I$(1,1).c$$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentView$jalview_io_NewickFile);
if (this.b$['jalview.gui.TreePanel'].tree.getOriginalData$() == null ) {
this.b$['jalview.gui.TreePanel'].originalSeqData.setVisible$Z(false);
}} else {
var sm=$I$(2).getInstance$().getScoreModel$S$jalview_api_AlignmentViewPanel(this.b$['jalview.gui.TreePanel'].scoreModelName, this.b$['jalview.gui.TreePanel'].treeCanvas.getAssociatedPanel$());
var njtree=this.b$['jalview.gui.TreePanel'].treeType.equals$O("NJ") ? Clazz.new_($I$(3,1).c$$jalview_viewmodel_AlignmentViewport$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI,[this.b$['jalview.gui.TreePanel'].av, sm, this.b$['jalview.gui.TreePanel'].similarityParams]) : Clazz.new_($I$(4,1).c$$jalview_viewmodel_AlignmentViewport$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI,[this.b$['jalview.gui.TreePanel'].av, sm, this.b$['jalview.gui.TreePanel'].similarityParams]);
this.b$['jalview.gui.TreePanel'].tree=Clazz.new_($I$(1,1).c$$jalview_analysis_TreeBuilder,[njtree]);
this.b$['jalview.gui.TreePanel'].showDistances$Z.apply(this.b$['jalview.gui.TreePanel'], [true]);
}this.b$['jalview.gui.TreePanel'].tree.reCount$jalview_datamodel_SequenceNode(this.b$['jalview.gui.TreePanel'].tree.getTopNode$());
this.b$['jalview.gui.TreePanel'].tree.findHeight$jalview_datamodel_SequenceNode(this.b$['jalview.gui.TreePanel'].tree.getTopNode$());
this.b$['jalview.gui.TreePanel'].treeCanvas.setTree$jalview_analysis_TreeModel(this.b$['jalview.gui.TreePanel'].tree);
this.b$['jalview.gui.TreePanel'].treeCanvas.repaint$();
this.b$['jalview.gui.TreePanel'].av.setCurrentTree$jalview_analysis_TreeModel(this.b$['jalview.gui.TreePanel'].tree);
if (this.b$['jalview.gui.TreePanel'].av.getSortByTree$()) {
this.b$['jalview.gui.TreePanel'].sortByTree_actionPerformed$.apply(this.b$['jalview.gui.TreePanel'], []);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
