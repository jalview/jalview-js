(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.util.ArrayList','java.util.Vector','java.util.Random','jalview.gui.AlignmentPanel','jalview.gui.PaintRefresher','Thread','jalview.datamodel.PDBEntry','jalview.datamodel.SequenceI','jalview.gui.Desktop','jalview.io.DataSourceType','javax.swing.JMenuItem','jalview.util.MessageManager','javax.swing.JCheckBoxMenuItem','jalview.schemes.ColourSchemes','jalview.gui.ColourMenuHelper','javax.swing.JRadioButtonMenuItem',['jalview.gui.StructureViewerBase','.ViewerColour'],'jalview.gui.ViewSelectionMenu','StringBuffer','jalview.bin.Console','jalview.gui.JalviewColourChooser','jalview.io.JalviewFileChooser','jalview.bin.Cache','jalview.io.JalviewFileView','java.io.BufferedReader','java.io.FileReader','java.io.PrintWriter','java.io.FileOutputStream','jalview.gui.CutAndPasteTransfer','jalview.gui.OOMWarning','jalview.ws.dbsources.Pdb','jalview.ws.dbsources.EBIAlfaFold','java.net.URLEncoder','java.io.File',['jalview.datamodel.PDBEntry','.Type'],'jalview.ws.utils.UrlDownloadClient','jalview.gui.JvSwingUtils','jalview.gui.JvOptionPane','jalview.util.BrowserLauncher']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureViewerBase", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.jbgui.GStructureViewer', ['Runnable', ['jalview.gui.ViewSelectionMenu','jalview.gui.ViewSelectionMenu.ViewSetProvider']]);
C$.$classes$=[['ViewerColour',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._aps=Clazz.new_($I$(1,1));
this._alignwith=Clazz.new_($I$(2,1));
this._colourwith=Clazz.new_($I$(2,1));
this.viewId=null;
this.alignAddedStructures=false;
this._started=false;
this.addingStructures=false;
this.worker=null;
this.allChainsSelected=false;
this.seqColoursApplied=false;
this.progressBar=null;
this.random=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['alignAddedStructures','_started','addingStructures','allChainsSelected','seqColoursApplied'],'S',['viewId'],'O',['_aps','java.util.List','_alignwith','java.util.Vector','+_colourwith','ap','jalview.gui.AlignmentPanel','worker','Thread','viewSelectionMenu','javax.swing.JMenu','progressBar','jalview.gui.IProgressIndicator','random','java.util.Random']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isAlignAddedStructures$',  function () {
return this.alignAddedStructures;
});

Clazz.newMeth(C$, 'setAlignAddedStructures$Z',  function (alignAdded) {
this.alignAddedStructures=alignAdded;
});

Clazz.newMeth(C$, 'setAddingStructures$Z',  function (addingStructures) {
this.addingStructures=addingStructures;
});

Clazz.newMeth(C$, 'isLinkedWith$jalview_gui_AlignmentPanel',  function (ap2) {
return this._aps.contains$O(ap2.av.getSequenceSetId$());
});

Clazz.newMeth(C$, 'isUsedforaligment$jalview_api_AlignmentViewPanel',  function (ap2) {
return (this._alignwith != null ) && this._alignwith.contains$O(ap2) ;
});

Clazz.newMeth(C$, 'isUsedForColourBy$jalview_api_AlignmentViewPanel',  function (ap2) {
return (this._colourwith != null ) && this._colourwith.contains$O(ap2) ;
});

Clazz.newMeth(C$, 'isColouredByViewer$',  function () {
return !this.getBinding$().isColourBySequence$();
});

Clazz.newMeth(C$, 'getViewId$',  function () {
if (this.viewId == null ) {
this.viewId=Long.$s(System.currentTimeMillis$()) + "." + this.hashCode$() ;
}return this.viewId;
});

Clazz.newMeth(C$, 'setViewId$S',  function (viewId) {
this.viewId=viewId;
});

Clazz.newMeth(C$, 'buildActionMenu$',  function () {
if (this._alignwith == null ) {
this._alignwith=Clazz.new_($I$(2,1));
}if (this._alignwith.size$() == 0 && this.ap != null  ) {
this._alignwith.add$O(this.ap);
};for (var c, $c = 0, $$c = this.viewerActionMenu.getMenuComponents$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c !== this.alignStructs ) {
this.viewerActionMenu.remove$javax_swing_JMenuItem(c);
}}
});

Clazz.newMeth(C$, 'getAlignmentPanel$',  function () {
return this.ap;
});

Clazz.newMeth(C$, 'setAlignmentPanel$jalview_gui_AlignmentPanel',  function (alp) {
this.ap=alp;
});

Clazz.newMeth(C$, 'getAllAlignmentPanels$',  function () {
var t;
var list=Clazz.array($I$(4), [0]);
for (var setid, $setid = this._aps.iterator$(); $setid.hasNext$()&&((setid=($setid.next$())),1);) {
var panels=$I$(5).getAssociatedPanels$S(setid);
if (panels != null ) {
t=Clazz.array($I$(4), [list.length + panels.length]);
System.arraycopy$O$I$O$I$I(list, 0, t, 0, list.length);
System.arraycopy$O$I$O$I$I(panels, 0, t, list.length, panels.length);
list=t;
}}
return list;
});

Clazz.newMeth(C$, 'addAlignmentPanel$jalview_gui_AlignmentPanel',  function (nap) {
if (this.getAlignmentPanel$() == null ) {
this.setAlignmentPanel$jalview_gui_AlignmentPanel(nap);
}if (!this._aps.contains$O(nap.av.getSequenceSetId$())) {
this._aps.add$O(nap.av.getSequenceSetId$());
}});

Clazz.newMeth(C$, 'removeAlignmentPanel$jalview_api_AlignmentViewPanel',  function (nap) {
try {
this._alignwith.remove$O(nap);
this._colourwith.remove$O(nap);
if (this.getAlignmentPanel$() === nap ) {
this.setAlignmentPanel$jalview_gui_AlignmentPanel(null);
for (var aps, $aps = 0, $$aps = this.getAllAlignmentPanels$(); $aps<$$aps.length&&((aps=($$aps[$aps])),1);$aps++) {
if (aps !== nap ) {
this.setAlignmentPanel$jalview_gui_AlignmentPanel(aps);
break;
}}
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
if (this.getAlignmentPanel$() != null ) {
this.buildActionMenu$();
}});

Clazz.newMeth(C$, 'useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel',  function (nap) {
this.addAlignmentPanel$jalview_gui_AlignmentPanel(nap);
if (!this._alignwith.contains$O(nap)) {
this._alignwith.add$O(nap);
}});

Clazz.newMeth(C$, 'excludeAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel',  function (nap) {
if (this._alignwith.contains$O(nap)) {
this._alignwith.remove$O(nap);
}});

Clazz.newMeth(C$, 'useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel$Z',  function (nap, enableColourBySeq) {
this.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(nap);
this.getBinding$().setColourBySequence$Z(enableColourBySeq);
this.seqColour.setSelected$Z(enableColourBySeq);
this.viewerColour.setSelected$Z(!enableColourBySeq);
});

Clazz.newMeth(C$, 'useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel',  function (nap) {
this.addAlignmentPanel$jalview_gui_AlignmentPanel(nap);
if (!this._colourwith.contains$O(nap)) {
this._colourwith.add$O(nap);
}});

Clazz.newMeth(C$, 'excludeAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel',  function (nap) {
if (this._colourwith.contains$O(nap)) {
this._colourwith.remove$O(nap);
}});

Clazz.newMeth(C$, 'addStructure$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_IProgressIndicator',  function (pdbentry, seqs, chains, alignFrame) {
if (pdbentry.getFile$() == null ) {
if (this.worker != null  && this.worker.isAlive$() ) {
Clazz.new_([((P$.StructureViewerBase$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
while (this.b$['jalview.gui.StructureViewerBase'].worker != null  && this.b$['jalview.gui.StructureViewerBase'].worker.isAlive$()  && this.b$['jalview.gui.StructureViewerBase']._started ){
try {
$I$(6,"sleep$J",[100 + ((Math.random()|0) * 100)]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
this.b$['jalview.gui.StructureViewerBase'].addStructure$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_IProgressIndicator.apply(this.b$['jalview.gui.StructureViewerBase'], [this.$finals$.pdbentry, this.$finals$.seqs, this.$finals$.chains, this.$finals$.alignFrame]);
});
})()
), Clazz.new_(P$.StructureViewerBase$1.$init$,[this, {alignFrame:alignFrame,pdbentry:pdbentry,chains:chains,seqs:seqs}]))],$I$(6,1).c$$Runnable).start$();
return;
}}this.getBinding$().addSequenceAndChain$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$SAA(Clazz.array($I$(7), -1, [pdbentry]), Clazz.array($I$(8), -2, [seqs]), Clazz.array(String, -2, [chains]));
this.addingStructures=true;
this._started=false;
this.worker=Clazz.new_($I$(6,1).c$$Runnable,[this]);
this.worker.start$();
return;
});

Clazz.newMeth(C$, 'hasPdbId$S',  function (pdbId) {
return this.getBinding$().hasPdbId$S(pdbId);
});

Clazz.newMeth(C$, 'getViewersFor$jalview_gui_AlignmentPanel',  function (alp) {
return $I$(9).instance.getStructureViewers$jalview_gui_AlignmentPanel$Class(alp, this.getClass$());
});

Clazz.newMeth(C$, 'addToExistingViewer$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S',  function (pdbentry, seq, chains, apanel, pdbId) {
if (this.hasPdbId$S(pdbId)) {
return;
}var alignPanel=apanel;
this.useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(alignPanel);
this.addStructure$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_IProgressIndicator(pdbentry, seq, chains, alignPanel.alignFrame);
});

Clazz.newMeth(C$, 'addSequenceMappingsToStructure$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S',  function (seq, chains, alpanel, pdbFilename) {
var apanel=alpanel;
apanel.getStructureSelectionManager$().setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(seq, chains, pdbFilename, $I$(10).FILE, this.getProgressIndicator$());
if (apanel.getSeqPanel$().seqCanvas.fr != null ) {
apanel.getSeqPanel$().seqCanvas.fr.featuresAdded$();
apanel.paintAlignment$Z$Z(true, false);
}for (var viewer, $viewer = this.getViewersFor$jalview_gui_AlignmentPanel(null).iterator$(); $viewer.hasNext$()&&((viewer=($viewer.next$())),1);) {
var bindingModel=viewer.getBinding$();
for (var pe=0; pe < bindingModel.getPdbCount$(); pe++) {
if (bindingModel.getPdbEntry$I(pe).getFile$().equals$O(pdbFilename)) {
bindingModel.addSequence$I$jalview_datamodel_SequenceIA(pe, seq);
viewer.addAlignmentPanel$jalview_gui_AlignmentPanel(apanel);
viewer.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(apanel);
viewer.buildActionMenu$();
apanel.getStructureSelectionManager$().sequenceColoursChanged$O(apanel);
break;
}}
}
});

Clazz.newMeth(C$, 'addAlreadyLoadedFile$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S',  function (seq, chains, apanel, pdbId) {
var alreadyMapped=apanel.getStructureSelectionManager$().alreadyMappedToFile$S(pdbId);
if (alreadyMapped == null ) {
return false;
}this.addSequenceMappingsToStructure$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S(seq, chains, apanel, alreadyMapped);
return true;
});

Clazz.newMeth(C$, 'setChainMenuItems$java_util_List',  function (chainNames) {
this.chainMenu.removeAll$();
if (chainNames == null  || chainNames.isEmpty$() ) {
return;
}var menuItem=Clazz.new_([$I$(12).getString$S("label.all")],$I$(11,1).c$$S);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['jalview.gui.StructureViewerBase'].allChainsSelected=true;
for (var i=0; i < this.b$['jalview.gui.StructureViewerBase'].chainMenu.getItemCount$(); i++) {
if (Clazz.instanceOf(this.b$['jalview.gui.StructureViewerBase'].chainMenu.getItem$I(i), "javax.swing.JCheckBoxMenuItem")) {
(this.b$['jalview.gui.StructureViewerBase'].chainMenu.getItem$I(i)).setSelected$Z(true);
}}
this.b$['jalview.gui.StructureViewerBase'].showSelectedChains$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
this.b$['jalview.gui.StructureViewerBase'].allChainsSelected=false;
});
})()
), Clazz.new_(P$.StructureViewerBase$2.$init$,[this, null])));
this.chainMenu.add$javax_swing_JMenuItem(menuItem);
for (var chain, $chain = chainNames.iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
menuItem=Clazz.new_($I$(13,1).c$$S$Z,[chain, true]);
menuItem.addItemListener$java_awt_event_ItemListener(((P$.StructureViewerBase$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
if (!this.b$['jalview.gui.StructureViewerBase'].allChainsSelected) {
this.b$['jalview.gui.StructureViewerBase'].showSelectedChains$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
}});
})()
), Clazz.new_(P$.StructureViewerBase$3.$init$,[this, null])));
this.chainMenu.add$javax_swing_JMenuItem(menuItem);
}
});

Clazz.newMeth(C$, 'changeColour_actionPerformed$S',  function (colourSchemeName) {
var al=this.getAlignmentPanel$().av.getAlignment$();
var cs=$I$(14).getInstance$().getColourScheme$S$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$java_util_Map(colourSchemeName, this.getAlignmentPanel$().av, al, null);
this.getBinding$().colourByJalviewColourScheme$jalview_schemes_ColourSchemeI(cs);
});

Clazz.newMeth(C$, 'buildColourMenu$',  function () {
this.colourMenu.removeAll$();
var al=this.getAlignmentPanel$().av.getAlignment$();
this.colourMenu.add$javax_swing_JMenuItem(this.seqColour);
this.colourMenu.add$javax_swing_JMenuItem(this.chainColour);
this.colourMenu.add$javax_swing_JMenuItem(this.chargeColour);
this.chargeColour.setEnabled$Z(!al.isNucleotide$());
var itemGroup=$I$(15).addMenuItems$javax_swing_JMenu$jalview_gui_ColourMenuHelper_ColourChangeListener$jalview_datamodel_AnnotatedCollectionI$Z(this.colourMenu, this, al, true);
this.viewerColour.setSelected$Z(false);
this.viewerColour.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
this.b$['jalview.gui.StructureViewerBase'].viewerColour_actionPerformed$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
});
})()
), Clazz.new_(P$.StructureViewerBase$4.$init$,[this, null])));
this.colourMenu.add$javax_swing_JMenuItem(this.viewerColour);
var backGround=Clazz.new_($I$(11,1));
backGround.setText$S($I$(12).getString$S("action.background_colour"));
backGround.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
this.b$['jalview.gui.StructureViewerBase'].background_actionPerformed$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
});
})()
), Clazz.new_(P$.StructureViewerBase$5.$init$,[this, null])));
this.colourMenu.add$javax_swing_JMenuItem(backGround);
itemGroup.add$javax_swing_AbstractButton(this.seqColour);
itemGroup.add$javax_swing_AbstractButton(this.chainColour);
itemGroup.add$javax_swing_AbstractButton(this.chargeColour);
itemGroup.add$javax_swing_AbstractButton(this.viewerColour);
});

Clazz.newMeth(C$, 'initMenus$',  function () {
var binding=this.getBinding$();
this.seqColour=Clazz.new_($I$(16,1));
this.seqColour.setText$S($I$(12).getString$S("action.by_sequence"));
this.seqColour.setName$S($I$(17).BySequence.name$());
this.seqColour.setSelected$Z(binding.isColourBySequence$());
this.seqColour.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
this.b$['jalview.gui.StructureViewerBase'].seqColour_actionPerformed$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
});
})()
), Clazz.new_(P$.StructureViewerBase$6.$init$,[this, null])));
this.chainColour=Clazz.new_($I$(16,1));
this.chainColour.setText$S($I$(12).getString$S("action.by_chain"));
this.chainColour.setName$S($I$(17).ByChain.name$());
this.chainColour.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
this.b$['jalview.gui.StructureViewerBase'].chainColour_actionPerformed$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
});
})()
), Clazz.new_(P$.StructureViewerBase$7.$init$,[this, null])));
this.chargeColour=Clazz.new_($I$(16,1));
this.chargeColour.setText$S($I$(12).getString$S("label.charge_cysteine"));
this.chargeColour.setName$S($I$(17).ChargeCysteine.name$());
this.chargeColour.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
this.b$['jalview.gui.StructureViewerBase'].chargeColour_actionPerformed$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
});
})()
), Clazz.new_(P$.StructureViewerBase$8.$init$,[this, null])));
this.viewerColour=Clazz.new_($I$(16,1));
this.viewerColour.setText$S($I$(12).getString$S("label.colour_with_viewer"));
this.viewerColour.setToolTipText$S($I$(12).getString$S("label.let_viewer_manage_structure_colours"));
this.viewerColour.setName$S($I$(17).ByViewer.name$());
this.viewerColour.setSelected$Z(!binding.isColourBySequence$());
if (this._colourwith == null ) {
this._colourwith=Clazz.new_($I$(2,1));
}if (this._alignwith == null ) {
this._alignwith=Clazz.new_($I$(2,1));
}var seqColourBy=Clazz.new_([$I$(12).getString$S("label.colour_by"), this, this._colourwith, ((P$.StructureViewerBase$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (!this.b$['jalview.gui.StructureViewerBase'].seqColour.isSelected$()) {
this.b$['jalview.gui.StructureViewerBase'].seqColour.doClick$();
} else {
this.b$['jalview.gui.StructureViewerBase'].seqColour_actionPerformed$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
}});
})()
), Clazz.new_(P$.StructureViewerBase$9.$init$,[this, null]))],$I$(18,1).c$$S$jalview_gui_ViewSelectionMenu_ViewSetProvider$java_util_List$java_awt_event_ItemListener);
this.viewMenu.add$javax_swing_JMenuItem(seqColourBy);
var handler=((P$.StructureViewerBase$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (this.b$['jalview.gui.StructureViewerBase']._alignwith.isEmpty$()) {
this.b$['jalview.gui.StructureViewerBase'].alignStructs.setEnabled$Z(false);
this.b$['jalview.gui.StructureViewerBase'].alignStructs.setToolTipText$S(null);
} else {
this.b$['jalview.gui.StructureViewerBase'].alignStructs.setEnabled$Z(true);
this.b$['jalview.gui.StructureViewerBase'].alignStructs.setToolTipText$S($I$(12,"formatMessage$S$OA",["label.align_structures_using_linked_alignment_views", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.b$['jalview.gui.StructureViewerBase']._alignwith.size$())])]));
}});
})()
), Clazz.new_(P$.StructureViewerBase$10.$init$,[this, null]));
this.viewSelectionMenu=Clazz.new_([$I$(12).getString$S("label.superpose_with"), this, this._alignwith, handler],$I$(18,1).c$$S$jalview_gui_ViewSelectionMenu_ViewSetProvider$java_util_List$java_awt_event_ItemListener);
handler.itemStateChanged$java_awt_event_ItemEvent(null);
this.viewerActionMenu.add$java_awt_Component$I(this.viewSelectionMenu, 0);
this.viewerActionMenu.addMenuListener$javax_swing_event_MenuListener(((P$.StructureViewerBase$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
this.$finals$.handler.itemStateChanged$java_awt_event_ItemEvent(null);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.StructureViewerBase$11.$init$,[this, {handler:handler}])));
this.viewerActionMenu.setText$S(this.getViewerName$());
this.helpItem.setText$S($I$(12,"formatMessage$S$OA",["label.viewer_help", Clazz.array(java.lang.Object, -1, [this.getViewerName$()])]));
this.buildColourMenu$();
});

Clazz.newMeth(C$, 'alignStructsWithAllAlignPanels$',  function () {
if (this.getAlignmentPanel$() == null ) {
return null;
}if (this._alignwith.size$() == 0) {
this._alignwith.add$O(this.getAlignmentPanel$());
}var reply=null;
try {
reply=this.getBinding$().superposeStructures$java_util_List(this._alignwith);
if (reply != null  && !reply.isEmpty$() ) {
var text=$I$(12,"formatMessage$S$OA",["error.superposition_failed", Clazz.array(java.lang.Object, -1, [reply])]);
this.statusBar.setText$S(text);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var sp=Clazz.new_($I$(19,1));
for (var alignPanel, $alignPanel = this._alignwith.iterator$(); $alignPanel.hasNext$()&&((alignPanel=($alignPanel.next$())),1);) {
sp.append$S("'" + alignPanel.getViewName$() + "' " );
}
$I$(20,"info$S$Throwable",["Couldn't align structures with the " + sp.toString() + "associated alignment panels." , e]);
} else {
throw e;
}
}
return reply;
});

Clazz.newMeth(C$, 'background_actionPerformed$',  function () {
var ttl=$I$(12).getString$S("label.select_background_colour");
var listener=((P$.StructureViewerBase$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureViewerBase$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'colourSelected$java_awt_Color',  function (c) {
this.b$['jalview.api.structures.JalviewStructureDisplayI'].getBinding$.apply(this.b$['jalview.api.structures.JalviewStructureDisplayI'], []).setBackgroundColour$java_awt_Color(c);
});
})()
), Clazz.new_(P$.StructureViewerBase$12.$init$,[this, null]));
$I$(21).showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener(this, ttl, null, listener);
});

Clazz.newMeth(C$, 'viewerColour_actionPerformed$',  function () {
if (this.viewerColour.isSelected$()) {
this.getBinding$().setColourBySequence$Z(false);
}});

Clazz.newMeth(C$, 'chainColour_actionPerformed$',  function () {
this.chainColour.setSelected$Z(true);
this.getBinding$().colourByChain$();
});

Clazz.newMeth(C$, 'chargeColour_actionPerformed$',  function () {
this.chargeColour.setSelected$Z(true);
this.getBinding$().colourByCharge$();
});

Clazz.newMeth(C$, 'seqColour_actionPerformed$',  function () {
var binding=this.getBinding$();
binding.setColourBySequence$Z(this.seqColour.isSelected$());
if (this._colourwith == null ) {
this._colourwith=Clazz.new_($I$(2,1));
}if (binding.isColourBySequence$()) {
if (!binding.isLoadingFromArchive$()) {
if (this._colourwith.size$() == 0 && this.getAlignmentPanel$() != null  ) {
this._colourwith.add$O(this.getAlignmentPanel$().alignFrame.alignPanel);
}}for (var alignPanel, $alignPanel = this._colourwith.iterator$(); $alignPanel.hasNext$()&&((alignPanel=($alignPanel.next$())),1);) {
binding.colourBySequence$jalview_api_AlignmentViewPanel(alignPanel);
}
this.seqColoursApplied=true;
}});

Clazz.newMeth(C$, 'pdbFile_actionPerformed$',  function () {
var chooser=Clazz.new_([$I$(23).getProperty$S("LAST_DIRECTORY")],$I$(22,1).c$$S);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(24,1)));
chooser.setDialogTitle$S($I$(12).getString$S("label.save_pdb_file"));
chooser.setToolTipText$S($I$(12).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component(this);
if (value == 0) {
var $in=null;
try {
$in=Clazz.new_([Clazz.new_([this.getBinding$().getStructureFiles$()[0]],$I$(26,1).c$$S)],$I$(25,1).c$$java_io_Reader);
var outFile=chooser.getSelectedFile$();
var out=Clazz.new_([Clazz.new_($I$(28,1).c$$java_io_File,[outFile])],$I$(27,1).c$$java_io_OutputStream);
var data;
while ((data=$in.readLine$()) != null ){
if (!(data.indexOf$S("<PRE>") > -1 || data.indexOf$S("</PRE>") > -1 )) {
out.println$S(data);
}}
out.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
} finally {
if ($in != null ) {
try {
$in.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
}});

Clazz.newMeth(C$, 'viewMapping_actionPerformed$',  function () {
var cap=Clazz.new_($I$(29,1));
try {
cap.appendText$S(this.getBinding$().printMappings$());
} catch (e) {
if (Clazz.exceptionOf(e,"OutOfMemoryError")){
Clazz.new_($I$(30,1).c$$S$OutOfMemoryError,["composing sequence-structure alignments for display in text box.", e]);
cap.dispose$();
return;
} else {
throw e;
}
}
$I$(9,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[cap, $I$(12).getString$S("label.pdb_sequence_mapping"), 550, 600]);
});

Clazz.newMeth(C$, 'updateTitleAndMenus$',  function () {
var binding=this.getBinding$();
if (binding.hasFileLoadingError$()) {
this.repaint$();
return;
}this.setChainMenuItems$java_util_List(binding.getChainNames$());
this.setTitle$S(binding.getViewerTitle$S$Z(this.getViewerName$(), true));
this.viewSelectionMenu.setEnabled$Z(false);
if (this.getBinding$().getMappedStructureCount$() > 1 && this.getBinding$().getSequence$().length > 1 ) {
this.viewSelectionMenu.setEnabled$Z(true);
}this.viewerActionMenu.setVisible$Z(false);
for (var i=0; i < this.viewerActionMenu.getItemCount$(); i++) {
if (this.viewerActionMenu.getItem$I(i).isEnabled$()) {
this.viewerActionMenu.setVisible$Z(true);
break;
}}
if (!binding.isLoadingFromArchive$()) {
this.seqColour_actionPerformed$();
}});

Clazz.newMeth(C$, 'toString',  function () {
return this.getTitle$();
});

Clazz.newMeth(C$, 'hasMapping$',  function () {
if (this.worker != null  && (this.addingStructures || this._started ) ) {
return false;
}if (this.getBinding$() == null ) {
if (this._aps == null  || this._aps.size$() == 0 ) {
return true;
}return false;
}var pdbids=this.getBinding$().getStructureFiles$();
if (pdbids == null ) {
return false;
}var p=0;
for (var pdbid, $pdbid = 0, $$pdbid = pdbids; $pdbid<$$pdbid.length&&((pdbid=($$pdbid[$pdbid])),1);$pdbid++) {
var sm=this.getBinding$().getSsm$().getMapping$S(pdbid);
if (sm != null  && sm.length > 0  && sm[0] != null  ) {
++p;
}}
if (p == 0 || p != pdbids.length ) {
return false;
}return this.seqColoursApplied;
});

Clazz.newMeth(C$, 'raiseViewer$',  function () {
this.toFront$();
});

Clazz.newMeth(C$, 'startProgressBar$S',  function (msg) {
var tm=this.random.nextLong$();
if (this.progressBar != null ) {
this.progressBar.setProgressBar$S$J(msg, tm);
}return tm;
});

Clazz.newMeth(C$, 'stopProgressBar$S$J',  function (msg, handle) {
if (this.progressBar != null ) {
this.progressBar.setProgressBar$S$J(msg, handle);
}});

Clazz.newMeth(C$, 'getProgressIndicator$',  function () {
return this.progressBar;
});

Clazz.newMeth(C$, 'setProgressIndicator$jalview_gui_IProgressIndicator',  function (pi) {
this.progressBar=pi;
});

Clazz.newMeth(C$, 'setProgressMessage$S$J',  function (message, id) {
if (this.progressBar != null ) {
this.progressBar.setProgressBar$S$J(message, id);
}});

Clazz.newMeth(C$, 'showConsole$Z',  function (show) {
});

Clazz.newMeth(C$, 'showSelectedChains$',  function () {
var toshow=Clazz.new_($I$(1,1));
for (var i=0; i < this.chainMenu.getItemCount$(); i++) {
if (Clazz.instanceOf(this.chainMenu.getItem$I(i), "javax.swing.JCheckBoxMenuItem")) {
var item=this.chainMenu.getItem$I(i);
if (item.isSelected$()) {
toshow.add$O(item.getText$());
}}}
this.getBinding$().showChains$java_util_List(toshow);
});

Clazz.newMeth(C$, 'fetchPdbFile$jalview_datamodel_PDBEntry',  function (processingEntry) {
var filePath=null;
var pdbclient=Clazz.new_($I$(31,1));
var afclient=Clazz.new_($I$(32,1));
var pdbseq=null;
var pdbid=processingEntry.getId$();
var handle=Long.$add(System.currentTimeMillis$(),$I$(6).currentThread$().hashCode$());
var msg=$I$(12,"formatMessage$S$OA",["status.fetching_pdb", Clazz.array(java.lang.Object, -1, [pdbid])]);
this.getAlignmentPanel$().alignFrame.setProgressBar$S$J(msg, handle);
try {
if (afclient.isValidReference$S(pdbid)) {
pdbseq=afclient.getSequenceRecords$S$S(pdbid, processingEntry.getRetrievalUrl$());
} else {
if (processingEntry.hasRetrievalUrl$()) {
var safePDBId=$I$(33).encode$S$S(pdbid, "UTF-8").replace$CharSequence$CharSequence("%", "__");
var tmpFile=$I$(34,"createTempFile$S$S",[safePDBId, "." + ($I$(35).MMCIF.toString().equals$O(processingEntry.getType$().toString()) ? "cif" : "pdb")]);
var fromUrl=processingEntry.getRetrievalUrl$();
$I$(36).download$S$java_io_File(fromUrl, tmpFile);
var file=tmpFile.getAbsolutePath$();
if (file != null ) {
pdbseq=$I$(32).importDownloadedStructureFromUrl$S$java_io_File$S$S$S$S(fromUrl, tmpFile, pdbid, null, null, null);
}} else {
pdbseq=pdbclient.getSequenceRecords$S(pdbid);
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error retrieving PDB id " + pdbid + ": " + e.getMessage$() );
} else {
throw e;
}
} finally {
msg=pdbid + " " + $I$(12).getString$S("label.state_completed") ;
this.getAlignmentPanel$().alignFrame.setProgressBar$S$J(msg, handle);
}
if (pdbseq != null  && pdbseq.getHeight$() > 0 ) {
filePath=Clazz.new_([pdbseq.getSequenceAt$I(0).getAllPDBEntries$().elementAt$I(0).getFile$()],$I$(34,1).c$$S).getAbsolutePath$();
processingEntry.setFile$S(filePath);
}return filePath;
});

Clazz.newMeth(C$, 'saveSession$',  function () {
if (this.getBinding$() == null ) {
return null;
}var session=this.getBinding$().saveSession$();
var l=session.length$();
var wait=50;
do {
try {
$I$(6).sleep$J(5);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
var nextl=session.length$();
if (Long.$ne(nextl,l )) {
wait=50;
l=nextl;
}} while (--wait > 0);
return session;
});

Clazz.newMeth(C$, 'closeViewer$Z',  function (forceClose) {
var binding=this.getBinding$();
if (binding != null  && binding.isViewerRunning$() ) {
if (!forceClose) {
var viewerName=this.getViewerName$();
var prompt=$I$(12,"formatMessage$S$OA",["label.confirm_close_viewer", Clazz.array(java.lang.Object, -1, [binding.getViewerTitle$S$Z(viewerName, false), viewerName])]);
prompt=$I$(37).wrapTooltip$Z$S(true, prompt);
var confirm=$I$(38,"showConfirmDialog$java_awt_Component$O$S$I",[this, prompt, $I$(12).getString$S("label.close_viewer"), 1]);
if (confirm == 2 || confirm == -1 ) {
return;
}forceClose=confirm == 0;
}}if (binding != null ) {
binding.closeViewer$Z(forceClose);
}this.setAlignmentPanel$jalview_gui_AlignmentPanel(null);
this._aps.clear$();
this._alignwith.clear$();
this._colourwith.clear$();
this.dispose$();
});

Clazz.newMeth(C$, 'showHelp_actionPerformed$',  function () {
var url=this.getBinding$().getHelpURL$();
if (url != null ) {
$I$(39).openURL$S(url);
}});

Clazz.newMeth(C$, 'hasViewerActionsMenu$',  function () {
return this.viewerActionMenu != null  && this.viewerActionMenu.isEnabled$()  && this.viewerActionMenu.getItemCount$() > 0  && this.viewerActionMenu.isVisible$() ;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.StructureViewerBase, "ViewerColour", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "BySequence", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ByChain", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ChargeCysteine", 2, []);
Clazz.newEnumConst($vals, C$.c$, "ByViewer", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
