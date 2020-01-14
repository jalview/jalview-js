(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.util.ArrayList','java.util.Vector','jalview.gui.AlignmentPanel','jalview.gui.PaintRefresher','Thread','jalview.datamodel.PDBEntry','jalview.datamodel.SequenceI','jalview.gui.Desktop','jalview.io.DataSourceType','javax.swing.JMenuItem','jalview.util.MessageManager','javax.swing.JCheckBoxMenuItem','jalview.schemes.ColourSchemes','jalview.gui.ColourMenuHelper','javax.swing.JRadioButtonMenuItem',['jalview.gui.StructureViewerBase','.ViewerColour'],'jalview.gui.ViewSelectionMenu','jalview.datamodel.Alignment','jalview.datamodel.HiddenColumns','StringBuffer','jalview.bin.Cache','jalview.gui.JalviewColourChooser','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','java.io.BufferedReader','java.io.FileReader','java.io.PrintWriter','java.io.FileOutputStream','jalview.gui.CutAndPasteTransfer','jalview.gui.OOMWarning']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StructureViewerBase", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.jbgui.GStructureViewer', ['Runnable', ['jalview.gui.ViewSelectionMenu','jalview.gui.ViewSelectionMenu.ViewSetProvider']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._aps=null;
this._alignwith=null;
this._colourwith=null;
this.viewId=null;
this.ap=null;
this.alignAddedStructures=false;
this._started=false;
this.addingStructures=false;
this.worker=null;
this.allChainsSelected=false;
this.viewSelectionMenu=null;
this.seqColoursApplied=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._aps=Clazz.new_($I$(1));
this._alignwith=Clazz.new_($I$(2));
this._colourwith=Clazz.new_($I$(2));
this.viewId=null;
this.alignAddedStructures=false;
this._started=false;
this.addingStructures=false;
this.worker=null;
this.allChainsSelected=false;
this.seqColoursApplied=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isAlignAddedStructures$', function () {
return this.alignAddedStructures;
});

Clazz.newMeth(C$, 'setAlignAddedStructures$Z', function (alignAdded) {
this.alignAddedStructures=alignAdded;
});

Clazz.newMeth(C$, 'isLinkedWith$jalview_gui_AlignmentPanel', function (ap2) {
return this._aps.contains$O(ap2.av.getSequenceSetId$());
});

Clazz.newMeth(C$, 'isUsedforaligment$jalview_gui_AlignmentPanel', function (ap2) {
return (this._alignwith != null ) && this._alignwith.contains$O(ap2) ;
});

Clazz.newMeth(C$, 'isUsedforcolourby$jalview_gui_AlignmentPanel', function (ap2) {
return (this._colourwith != null ) && this._colourwith.contains$O(ap2) ;
});

Clazz.newMeth(C$, 'isColouredByViewer$', function () {
return !this.getBinding$().isColourBySequence$();
});

Clazz.newMeth(C$, 'getViewId$', function () {
if (this.viewId == null ) {
this.viewId=System.currentTimeMillis$() + "." + this.hashCode$() ;
}return this.viewId;
});

Clazz.newMeth(C$, 'setViewId$S', function (viewId) {
this.viewId=viewId;
});

Clazz.newMeth(C$, 'buildActionMenu$', function () {
if (this._alignwith == null ) {
this._alignwith=Clazz.new_($I$(2));
}if (this._alignwith.size$() == 0 && this.ap != null  ) {
this._alignwith.add$TE(this.ap);
};for (var c, $c = 0, $$c = this.viewerActionMenu.getMenuComponents$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c !== this.alignStructs ) {
this.viewerActionMenu.remove$javax_swing_JMenuItem(c);
}}
});

Clazz.newMeth(C$, 'getAlignmentPanel$', function () {
return this.ap;
});

Clazz.newMeth(C$, 'setAlignmentPanel$jalview_gui_AlignmentPanel', function (alp) {
this.ap=alp;
});

Clazz.newMeth(C$, 'getAllAlignmentPanels$', function () {
var t;
var list=Clazz.array($I$(3), [0]);
for (var setid, $setid = this._aps.iterator$(); $setid.hasNext$()&&((setid=($setid.next$())),1);) {
var panels=$I$(4).getAssociatedPanels$S(setid);
if (panels != null ) {
t=Clazz.array($I$(3), [list.length + panels.length]);
System.arraycopy$O$I$O$I$I(list, 0, t, 0, list.length);
System.arraycopy$O$I$O$I$I(panels, 0, t, list.length, panels.length);
list=t;
}}
return list;
});

Clazz.newMeth(C$, 'addAlignmentPanel$jalview_gui_AlignmentPanel', function (nap) {
if (this.getAlignmentPanel$() == null ) {
this.setAlignmentPanel$jalview_gui_AlignmentPanel(nap);
}if (!this._aps.contains$O(nap.av.getSequenceSetId$())) {
this._aps.add$TE(nap.av.getSequenceSetId$());
}});

Clazz.newMeth(C$, 'removeAlignmentPanel$jalview_gui_AlignmentPanel', function (nap) {
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

Clazz.newMeth(C$, 'useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel', function (nap) {
this.addAlignmentPanel$jalview_gui_AlignmentPanel(nap);
if (!this._alignwith.contains$O(nap)) {
this._alignwith.add$TE(nap);
}});

Clazz.newMeth(C$, 'excludeAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel', function (nap) {
if (this._alignwith.contains$O(nap)) {
this._alignwith.remove$O(nap);
}});

Clazz.newMeth(C$, 'useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel$Z', function (nap, enableColourBySeq) {
this.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(nap);
this.getBinding$().setColourBySequence$Z(enableColourBySeq);
this.seqColour.setSelected$Z(enableColourBySeq);
this.viewerColour.setSelected$Z(!enableColourBySeq);
});

Clazz.newMeth(C$, 'useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel', function (nap) {
this.addAlignmentPanel$jalview_gui_AlignmentPanel(nap);
if (!this._colourwith.contains$O(nap)) {
this._colourwith.add$TE(nap);
}});

Clazz.newMeth(C$, 'excludeAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel', function (nap) {
if (this._colourwith.contains$O(nap)) {
this._colourwith.remove$O(nap);
}});

Clazz.newMeth(C$, 'addStructure$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_IProgressIndicator', function (pdbentry, seqs, chains, alignFrame) {
if (pdbentry.getFile$() == null ) {
if (this.worker != null  && this.worker.isAlive$() ) {
Clazz.new_($I$(5).c$$Runnable,[((P$.StructureViewerBase$1||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
while (this.b$['jalview.gui.StructureViewerBase'].worker != null  && this.b$['jalview.gui.StructureViewerBase'].worker.isAlive$()  && this.b$['jalview.gui.StructureViewerBase']._started ){
try {
$I$(5).sleep$J(100 + ((Math.random()|0) * 100));
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
), Clazz.new_(P$.StructureViewerBase$1.$init$, [this, {pdbentry: pdbentry, seqs: seqs, chains: chains, alignFrame: alignFrame}]))]).start$();
return;
}}this.getBinding$().addSequenceAndChain$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$SAA(Clazz.array($I$(6), -1, [pdbentry]), Clazz.array($I$(7), -2, [seqs]), Clazz.array(String, -2, [chains]));
this.addingStructures=true;
this._started=false;
this.worker=Clazz.new_($I$(5).c$$Runnable,[this]);
this.worker.start$();
return;
});

Clazz.newMeth(C$, 'hasPdbId$S', function (pdbId) {
return this.getBinding$().hasPdbId$S(pdbId);
});

Clazz.newMeth(C$, 'getViewersFor$jalview_gui_AlignmentPanel', function (alp) {
return $I$(8).instance.getStructureViewers$jalview_gui_AlignmentPanel$Class(alp, this.getClass$());
});

Clazz.newMeth(C$, 'addToExistingViewer$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S', function (pdbentry, seq, chains, apanel, pdbId) {
if (this.hasPdbId$S(pdbId)) {
return;
}var alignPanel=apanel;
this.useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(alignPanel);
this.addStructure$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_IProgressIndicator(pdbentry, seq, chains, alignPanel.alignFrame);
});

Clazz.newMeth(C$, 'addSequenceMappingsToStructure$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S', function (seq, chains, alpanel, pdbFilename) {
var apanel=alpanel;
apanel.getStructureSelectionManager$().setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(seq, chains, pdbFilename, $I$(9).FILE, this.getIProgressIndicator$());
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

Clazz.newMeth(C$, 'addAlreadyLoadedFile$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S', function (seq, chains, apanel, pdbId) {
var alreadyMapped=apanel.getStructureSelectionManager$().alreadyMappedToFile$S(pdbId);
if (alreadyMapped == null ) {
return false;
}this.addSequenceMappingsToStructure$jalview_datamodel_SequenceIA$SA$jalview_api_AlignmentViewPanel$S(seq, chains, apanel, alreadyMapped);
return true;
});

Clazz.newMeth(C$, 'setChainMenuItems$java_util_List', function (chainNames) {
this.chainMenu.removeAll$();
if (chainNames == null  || chainNames.isEmpty$() ) {
return;
}var menuItem=Clazz.new_($I$(10).c$$S,[$I$(11).getString$S("label.all")]);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$2||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
this.b$['jalview.gui.StructureViewerBase'].allChainsSelected=true;
for (var i=0; i < this.b$['jalview.gui.StructureViewerBase'].chainMenu.getItemCount$(); i++) {
if (Clazz.instanceOf(this.b$['jalview.gui.StructureViewerBase'].chainMenu.getItem$I(i), "javax.swing.JCheckBoxMenuItem")) {
(this.b$['jalview.gui.StructureViewerBase'].chainMenu.getItem$I(i)).setSelected$Z(true);
}}
this.b$['jalview.gui.StructureViewerBase'].showSelectedChains$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
this.b$['jalview.gui.StructureViewerBase'].allChainsSelected=false;
});
})()
), Clazz.new_(P$.StructureViewerBase$2.$init$, [this, null])));
this.chainMenu.add$javax_swing_JMenuItem(menuItem);
for (var chain, $chain = chainNames.iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
menuItem=Clazz.new_($I$(12).c$$S$Z,[chain, true]);
menuItem.addItemListener$java_awt_event_ItemListener(((P$.StructureViewerBase$3||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (evt) {
if (!this.b$['jalview.gui.StructureViewerBase'].allChainsSelected) {
this.b$['jalview.gui.StructureViewerBase'].showSelectedChains$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
}});
})()
), Clazz.new_(P$.StructureViewerBase$3.$init$, [this, null])));
this.chainMenu.add$javax_swing_JMenuItem(menuItem);
}
});

Clazz.newMeth(C$, ['changeColour_actionPerformed$S','changeColour_actionPerformed$'], function (colourSchemeName) {
var al=this.getAlignmentPanel$().av.getAlignment$();
var cs=$I$(13).getInstance$().getColourScheme$S$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$java_util_Map(colourSchemeName, this.getAlignmentPanel$().av, al, null);
this.getBinding$().setJalviewColourScheme$jalview_schemes_ColourSchemeI(cs);
});

Clazz.newMeth(C$, 'buildColourMenu$', function () {
this.colourMenu.removeAll$();
var al=this.getAlignmentPanel$().av.getAlignment$();
this.colourMenu.add$javax_swing_JMenuItem(this.seqColour);
this.colourMenu.add$javax_swing_JMenuItem(this.chainColour);
this.colourMenu.add$javax_swing_JMenuItem(this.chargeColour);
this.chargeColour.setEnabled$Z(!al.isNucleotide$());
var itemGroup=$I$(14).addMenuItems$javax_swing_JMenu$jalview_gui_ColourMenuHelper_ColourChangeListener$jalview_datamodel_AnnotatedCollectionI$Z(this.colourMenu, this, al, true);
this.viewerColour.setSelected$Z(false);
this.viewerColour.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$4||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.gui.StructureViewerBase'].viewerColour_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.StructureViewerBase'], [actionEvent]);
});
})()
), Clazz.new_(P$.StructureViewerBase$4.$init$, [this, null])));
this.colourMenu.add$javax_swing_JMenuItem(this.viewerColour);
var backGround=Clazz.new_($I$(10));
backGround.setText$S($I$(11).getString$S("action.background_colour"));
backGround.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$5||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.gui.StructureViewerBase'].background_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.StructureViewerBase'], [actionEvent]);
});
})()
), Clazz.new_(P$.StructureViewerBase$5.$init$, [this, null])));
this.colourMenu.add$javax_swing_JMenuItem(backGround);
itemGroup.add$javax_swing_AbstractButton(this.seqColour);
itemGroup.add$javax_swing_AbstractButton(this.chainColour);
itemGroup.add$javax_swing_AbstractButton(this.chargeColour);
itemGroup.add$javax_swing_AbstractButton(this.viewerColour);
});

Clazz.newMeth(C$, 'initMenus$', function () {
var binding=this.getBinding$();
this.seqColour=Clazz.new_($I$(15));
this.seqColour.setText$S($I$(11).getString$S("action.by_sequence"));
this.seqColour.setName$S($I$(16).BySequence.name$());
this.seqColour.setSelected$Z(binding.isColourBySequence$());
this.seqColour.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$6||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.gui.StructureViewerBase'].seqColour_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.StructureViewerBase'], [actionEvent]);
});
})()
), Clazz.new_(P$.StructureViewerBase$6.$init$, [this, null])));
this.chainColour=Clazz.new_($I$(15));
this.chainColour.setText$S($I$(11).getString$S("action.by_chain"));
this.chainColour.setName$S($I$(16).ByChain.name$());
this.chainColour.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$7||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.gui.StructureViewerBase'].chainColour_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.StructureViewerBase'], [actionEvent]);
});
})()
), Clazz.new_(P$.StructureViewerBase$7.$init$, [this, null])));
this.chargeColour=Clazz.new_($I$(15));
this.chargeColour.setText$S($I$(11).getString$S("label.charge_cysteine"));
this.chargeColour.setName$S($I$(16).ChargeCysteine.name$());
this.chargeColour.addActionListener$java_awt_event_ActionListener(((P$.StructureViewerBase$8||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.gui.StructureViewerBase'].chargeColour_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.StructureViewerBase'], [actionEvent]);
});
})()
), Clazz.new_(P$.StructureViewerBase$8.$init$, [this, null])));
this.viewerColour=Clazz.new_($I$(15));
this.viewerColour.setName$S($I$(16).ByViewer.name$());
this.viewerColour.setSelected$Z(!binding.isColourBySequence$());
if (this._colourwith == null ) {
this._colourwith=Clazz.new_($I$(2));
}if (this._alignwith == null ) {
this._alignwith=Clazz.new_($I$(2));
}var seqColourBy=Clazz.new_($I$(17).c$$S$jalview_gui_ViewSelectionMenu_ViewSetProvider$java_util_List$java_awt_event_ItemListener,[$I$(11).getString$S("label.colour_by"), this, this._colourwith, ((P$.StructureViewerBase$9||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
if (!this.b$['jalview.gui.StructureViewerBase'].seqColour.isSelected$()) {
this.b$['jalview.gui.StructureViewerBase'].seqColour.doClick$();
} else {
this.b$['jalview.gui.StructureViewerBase'].seqColour_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.StructureViewerBase'], [null]);
}});
})()
), Clazz.new_(P$.StructureViewerBase$9.$init$, [this, null]))]);
this.viewMenu.add$javax_swing_JMenuItem(seqColourBy);
var handler=((P$.StructureViewerBase$10||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.b$['jalview.gui.StructureViewerBase'].alignStructs.setEnabled$Z(!this.b$['jalview.gui.StructureViewerBase']._alignwith.isEmpty$());
this.b$['jalview.gui.StructureViewerBase'].alignStructs.setToolTipText$S($I$(11).formatMessage$S$OA("label.align_structures_using_linked_alignment_views", [new Integer(this.b$['jalview.gui.StructureViewerBase']._alignwith.size$())]));
});
})()
), Clazz.new_(P$.StructureViewerBase$10.$init$, [this, null]));
this.viewSelectionMenu=Clazz.new_($I$(17).c$$S$jalview_gui_ViewSelectionMenu_ViewSetProvider$java_util_List$java_awt_event_ItemListener,[$I$(11).getString$S("label.superpose_with"), this, this._alignwith, handler]);
handler.itemStateChanged$(null);
this.viewerActionMenu.add$java_awt_Component$I(this.viewSelectionMenu, 0);
this.viewerActionMenu.addMenuListener$javax_swing_event_MenuListener(((P$.StructureViewerBase$11||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent', function (e) {
this.$finals$.handler.itemStateChanged$(null);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent', function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent', function (e) {
});
})()
), Clazz.new_(P$.StructureViewerBase$11.$init$, [this, {handler: handler}])));
this.buildColourMenu$();
});

Clazz.newMeth(C$, 'setJalviewColourScheme$jalview_schemes_ColourSchemeI', function (cs) {
this.getBinding$().setJalviewColourScheme$jalview_schemes_ColourSchemeI(cs);
});

Clazz.newMeth(C$, 'alignStructs_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
return this.alignStructs_withAllAlignPanels$();
});

Clazz.newMeth(C$, 'alignStructs_withAllAlignPanels$', function () {
if (this.getAlignmentPanel$() == null ) {
return null;
}if (this._alignwith.size$() == 0) {
this._alignwith.add$TE(this.getAlignmentPanel$());
}var reply=null;
try {
var als=Clazz.array($I$(18), [this._alignwith.size$()]);
var alc=Clazz.array($I$(19), [this._alignwith.size$()]);
var alm=Clazz.array(Integer.TYPE, [this._alignwith.size$()]);
var a=0;
for (var alignPanel, $alignPanel = this._alignwith.iterator$(); $alignPanel.hasNext$()&&((alignPanel=($alignPanel.next$())),1);) {
als[a]=alignPanel.av.getAlignment$();
alm[a]=-1;
alc[a++]=alignPanel.av.getAlignment$().getHiddenColumns$();
}
reply=this.getBinding$().superposeStructures$jalview_datamodel_AlignmentIA$IA$jalview_datamodel_HiddenColumnsA(als, alm, alc);
if (reply != null ) {
var text=$I$(11).formatMessage$S$OA("error.superposition_failed", [reply]);
this.statusBar.setText$S(text);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var sp=Clazz.new_($I$(20));
for (var alignPanel, $alignPanel = this._alignwith.iterator$(); $alignPanel.hasNext$()&&((alignPanel=($alignPanel.next$())),1);) {
sp.append$S("'" + alignPanel.alignFrame.getTitle$() + "' " );
}
$I$(21).log.info$O$Throwable("Couldn't align structures with the " + sp.toString() + "associated alignment panels." , e);
} else {
throw e;
}
}
return reply;
});

Clazz.newMeth(C$, 'background_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
var ttl=$I$(11).getString$S("label.select_background_colour");
var listener=((P$.StructureViewerBase$12||
(function(){var C$=Clazz.newClass(P$, "StructureViewerBase$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['colourSelected$java_awt_Color','colourSelected$'], function (c) {
this.b$['jalview.api.structures.JalviewStructureDisplayI'].getBinding$.apply(this.b$['jalview.api.structures.JalviewStructureDisplayI'], []).setBackgroundColour$java_awt_Color(c);
});
})()
), Clazz.new_(P$.StructureViewerBase$12.$init$, [this, null]));
$I$(22).showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener(this, ttl, null, listener);
});

Clazz.newMeth(C$, 'viewerColour_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
if (this.viewerColour.isSelected$()) {
this.getBinding$().setColourBySequence$Z(false);
}});

Clazz.newMeth(C$, 'chainColour_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
this.chainColour.setSelected$Z(true);
this.getBinding$().colourByChain$();
});

Clazz.newMeth(C$, 'chargeColour_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
this.chargeColour.setSelected$Z(true);
this.getBinding$().colourByCharge$();
});

Clazz.newMeth(C$, 'seqColour_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
var binding=this.getBinding$();
binding.setColourBySequence$Z(this.seqColour.isSelected$());
if (this._colourwith == null ) {
this._colourwith=Clazz.new_($I$(2));
}if (binding.isColourBySequence$()) {
if (!binding.isLoadingFromArchive$()) {
if (this._colourwith.size$() == 0 && this.getAlignmentPanel$() != null  ) {
this._colourwith.add$TE(this.getAlignmentPanel$().alignFrame.alignPanel);
}}for (var alignPanel, $alignPanel = this._colourwith.iterator$(); $alignPanel.hasNext$()&&((alignPanel=($alignPanel.next$())),1);) {
binding.colourBySequence$jalview_api_AlignmentViewPanel(alignPanel);
}
this.seqColoursApplied=true;
}});

Clazz.newMeth(C$, 'pdbFile_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
var chooser=Clazz.new_($I$(23).c$$S,[$I$(21).getProperty$S("LAST_DIRECTORY")]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(24)));
chooser.setDialogTitle$S($I$(11).getString$S("label.save_pdb_file"));
chooser.setToolTipText$S($I$(11).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component(this);
if (value == 0) {
var $in=null;
try {
$in=Clazz.new_($I$(25).c$$java_io_Reader,[Clazz.new_($I$(26).c$$S,[this.getBinding$().getStructureFiles$()[0]])]);
var outFile=chooser.getSelectedFile$();
var out=Clazz.new_($I$(27).c$$java_io_OutputStream,[Clazz.new_($I$(28).c$$java_io_File,[outFile])]);
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

Clazz.newMeth(C$, 'viewMapping_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
var cap=Clazz.new_($I$(29));
try {
cap.appendText$S(this.getBinding$().printMappings$());
} catch (e) {
if (Clazz.exceptionOf(e,"OutOfMemoryError")){
Clazz.new_($I$(30).c$$S$OutOfMemoryError,["composing sequence-structure alignments for display in text box.", e]);
cap.dispose$();
return;
} else {
throw e;
}
}
$I$(8).addInternalFrame$javax_swing_JInternalFrame$S$I$I(cap, $I$(11).getString$S("label.pdb_sequence_mapping"), 550, 600);
});

Clazz.newMeth(C$, 'updateTitleAndMenus$', function () {
var binding=this.getBinding$();
if (binding.hasFileLoadingError$()) {
this.repaint$();
return;
}this.setChainMenuItems$java_util_List(binding.getChainNames$());
this.setTitle$S(binding.getViewerTitle$S$Z(this.getViewerName$(), true));
this.viewSelectionMenu.setEnabled$Z(false);
if (this.getBinding$().getStructureFiles$().length > 1 && this.getBinding$().getSequence$().length > 1 ) {
this.viewSelectionMenu.setEnabled$Z(true);
}this.viewerActionMenu.setVisible$Z(false);
for (var i=0; i < this.viewerActionMenu.getItemCount$(); i++) {
if (this.viewerActionMenu.getItem$I(i).isEnabled$()) {
this.viewerActionMenu.setVisible$Z(true);
break;
}}
if (!binding.isLoadingFromArchive$()) {
this.seqColour_actionPerformed$java_awt_event_ActionEvent(null);
}});

Clazz.newMeth(C$, 'toString', function () {
return this.getTitle$();
});

Clazz.newMeth(C$, 'hasMapping$', function () {
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
p++;
}}
if (p == 0 || p != pdbids.length ) {
return false;
}return this.seqColoursApplied;
});

Clazz.newMeth(C$, 'raiseViewer$', function () {
this.toFront$();
});
;
(function(){var C$=Clazz.newClass(P$.StructureViewerBase, "ViewerColour", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "BySequence", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ByChain", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ChargeCysteine", 2, []);
Clazz.newEnumConst($vals, C$.c$, "ByViewer", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
