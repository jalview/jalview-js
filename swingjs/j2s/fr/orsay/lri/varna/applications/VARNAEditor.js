(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),p$1={},I$=[[0,'java.util.ArrayList','fr.orsay.lri.varna.models.FullBackup','fr.orsay.lri.varna.models.rna.RNA','javax.swing.JPanel','javax.swing.JLabel','javax.swing.JTextField','javax.swing.JButton','java.awt.Color','javax.swing.DefaultListModel','javax.swing.DefaultListSelectionModel','fr.orsay.lri.varna.components.ReorderableJList','java.awt.Dimension','fr.orsay.lri.varna.models.rna.Mapping',['fr.orsay.lri.varna.applications.VARNAEditor','.BackupHolder'],'fr.orsay.lri.varna.VARNAPanel','javax.swing.JScrollPane','java.awt.Font','java.awt.BorderLayout','java.awt.GridLayout','javax.swing.JSplitPane','java.awt.dnd.DropTarget',['javax.swing.text.DefaultHighlighter','.DefaultHighlightPainter'],'fr.orsay.lri.varna.factories.RNAFactory','fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax','java.io.File','javax.swing.JOptionPane']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VARNAEditor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame', ['java.awt.dnd.DropTargetListener', 'fr.orsay.lri.varna.interfaces.InterfaceVARNAListener', 'java.awt.event.MouseListener']);
C$.errorOpt=null;
C$._nextID=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.errorOpt="error";
C$._nextID=1;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this._tools=null;
this._input=null;
this._seqPanel=null;
this._strPanel=null;
this._info=null;
this._str=null;
this._hoverHighlightStr=null;
this._selectionHighlightStr=null;
this._seq=null;
this._hoverHighlightSeq=null;
this._selectionHighlightSeq=null;
this._strLabel=null;
this._seqLabel=null;
this._deleteButton=null;
this._duplicateButton=null;
this._listPanel=null;
this._sideList=null;
this._error=false;
this._backgroundColor=null;
this._algoCode=0;
this._rnaList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._tools=Clazz.new_($I$(4));
this._input=Clazz.new_($I$(4));
this._seqPanel=Clazz.new_($I$(4));
this._strPanel=Clazz.new_($I$(4));
this._info=Clazz.new_($I$(5));
this._str=Clazz.new_($I$(6).c$$S,["..(((((...(((((...(((((...(((((.....)))))...))))).....(((((...(((((.....)))))...))))).....)))))...))))).."]);
this._hoverHighlightStr=null;
this._selectionHighlightStr=Clazz.new_($I$(1));
this._seq=Clazz.new_($I$(6).c$$S,["CAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIA"]);
this._hoverHighlightSeq=null;
this._selectionHighlightSeq=Clazz.new_($I$(1));
this._strLabel=Clazz.new_($I$(5).c$$S,[" Str:"]);
this._seqLabel=Clazz.new_($I$(5).c$$S,[" Seq:"]);
this._deleteButton=Clazz.new_($I$(7).c$$S,["Delete"]);
this._duplicateButton=Clazz.new_($I$(7).c$$S,["Duplicate"]);
this._listPanel=Clazz.new_($I$(4));
this._sideList=null;
this._backgroundColor=$I$(8).white;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, ["VARNA Editor"]);
C$.$init$.apply(this);
p$1.RNAPanelDemoInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'RNAPanelDemoInit', function () {
var dlm=Clazz.new_($I$(9));
var marginTools=40;
var m=Clazz.new_($I$(10));
m.setSelectionMode$I(0);
m.setLeadAnchorNotificationEnabled$Z(false);
this._sideList=Clazz.new_($I$(11));
this._sideList.setModel$javax_swing_ListModel(dlm);
this._sideList.addMouseListener$java_awt_event_MouseListener(this);
this._sideList.setSelectionModel$javax_swing_ListSelectionModel(m);
this._sideList.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[100, 0]));
this._sideList.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.VARNAEditor$1||
(function(){var C$=Clazz.newClass(P$, "VARNAEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['valueChanged$javax_swing_event_ListSelectionEvent','valueChanged$'], function (arg0) {
if (!this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._sideList.isSelectionEmpty$() && !arg0.getValueIsAdjusting$() ) {
var sel=this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._sideList.getSelectedValue$();
var map=$I$(13).DefaultOutermostMapping$I$I(this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._vp.getRNA$().getSize$(), sel.rna.getSize$());
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._vp.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping(sel.rna, sel.config, map);
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._seq.setText$S(sel.rna.getSeq$());
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._str.setText$S(sel.rna.getStructDBN$Z(true));
}});
})()
), Clazz.new_(P$.VARNAEditor$1.$init$, [this, null])));
this._rnaList=Clazz.new_($I$(14).c$$javax_swing_DefaultListModel$javax_swing_JList, [this, null, dlm, this._sideList]);
var _RNA1=Clazz.new_($I$(3).c$$S,["User defined 1"]);
var _RNA2=Clazz.new_($I$(3).c$$S,["User defined 2"]);
try {
this._vp=Clazz.new_($I$(15).c$$S$S,["0", "."]);
_RNA1.setRNA$S$S("CAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIA", "..(((((...(((((...(((((...(((((.....)))))...))))).....(((((...(((((.....)))))...))))).....)))))...)))))..");
_RNA1.drawRNARadiate$fr_orsay_lri_varna_models_VARNAConfig(this._vp.getConfig$());
_RNA2.setRNA$S$S("CAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIA", "..(((((...(((((...(((((........(((((...(((((.....)))))...)))))..................))))).....)))))...)))))..");
_RNA2.drawRNARadiate$fr_orsay_lri_varna_models_VARNAConfig(this._vp.getConfig$());
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionNonEqualLength")){
var e = e$$;
{
this._vp.errorDialog$Exception(e);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e2 = e$$;
{
e2.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e3 = e$$;
{
e3.printStackTrace$();
}
} else {
throw e$$;
}
}
this._vp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[400, 400]));
this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S(this._vp.getConfig$().clone$(), _RNA2, C$.generateDefaultName$());
this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(this._vp.getConfig$().clone$(), _RNA1, C$.generateDefaultName$(), true);
var listScroller=Clazz.new_($I$(16).c$$java_awt_Component,[this._sideList]);
listScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[150, 0]));
this.setBackground$java_awt_Color(this._backgroundColor);
this._vp.setBackground$java_awt_Color(this._backgroundColor);
var textFieldsFont=$I$(17).decode$S("MonoSpaced-PLAIN-12");
this._seqLabel.setHorizontalTextPosition$I(2);
this._seqLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[marginTools, 15]));
this._seq.setFont$java_awt_Font(textFieldsFont);
this._seq.setText$S("CAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIA");
this._seq.setEditable$Z(false);
this._seqPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(18)));
this._seqPanel.add$java_awt_Component$O(this._seqLabel, "West");
this._seqPanel.add$java_awt_Component$O(this._seq, "Center");
this._strLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[marginTools, 15]));
this._strLabel.setHorizontalTextPosition$I(2);
this._str.setFont$java_awt_Font(textFieldsFont);
this._str.setEditable$Z(false);
this._strPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(18)));
this._strPanel.add$java_awt_Component$O(this._strLabel, "West");
this._strPanel.add$java_awt_Component$O(this._str, "Center");
this._input.setLayout$java_awt_LayoutManager(Clazz.new_($I$(19).c$$I$I,[2, 0]));
this._input.add$java_awt_Component(this._seqPanel);
this._input.add$java_awt_Component(this._strPanel);
this._tools.setLayout$java_awt_LayoutManager(Clazz.new_($I$(18)));
this._tools.add$java_awt_Component$O(this._input, "Center");
this._tools.add$java_awt_Component$O(this._info, "South");
this._deleteButton.addActionListener$java_awt_event_ActionListener(((P$.VARNAEditor$2||
(function(){var C$=Clazz.newClass(P$, "VARNAEditor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._rnaList.removeSelected$();
});
})()
), Clazz.new_(P$.VARNAEditor$2.$init$, [this, null])));
var ops=Clazz.new_($I$(4));
ops.setLayout$java_awt_LayoutManager(Clazz.new_($I$(19).c$$I$I,[1, 2]));
ops.add$java_awt_Component(this._deleteButton);
ops.add$java_awt_Component(this._duplicateButton);
var j=Clazz.new_($I$(5).c$$S$I,["Structures", 0]);
this._listPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(18)));
this._listPanel.add$java_awt_Component$O(ops, "South");
this._listPanel.add$java_awt_Component$O(j, "North");
this._listPanel.add$java_awt_Component$O(listScroller, "Center");
var split=Clazz.new_($I$(20).c$$I$Z$java_awt_Component$java_awt_Component,[1, true, this._listPanel, this._vp]);
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(18)));
this.getContentPane$().add$java_awt_Component$O(split, "Center");
this.getContentPane$().add$java_awt_Component$O(this._tools, "North");
this.setVisible$Z(true);
var dt=Clazz.new_($I$(21).c$$java_awt_Component$java_awt_dnd_DropTargetListener,[this._vp, this]);
this._vp.addRNAListener$fr_orsay_lri_varna_interfaces_InterfaceVARNARNAListener(((P$.VARNAEditor$3||
(function(){var C$=Clazz.newClass(P$, "VARNAEditor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'fr.orsay.lri.varna.interfaces.InterfaceVARNARNAListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'onSequenceModified$I$S$S', function (index, oldseq, newseq) {
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._seq.setText$S(this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._vp.getRNA$().getSeq$());
});

Clazz.newMeth(C$, 'onStructureModified$java_util_Set$java_util_Set$java_util_Set', function (current, addedBasePairs, removedBasePairs) {
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._str.setText$S(this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._vp.getRNA$().getStructDBN$Z(true));
});

Clazz.newMeth(C$, 'onRNALayoutChanged$java_util_Hashtable', function (previousPositions) {
});
})()
), Clazz.new_(P$.VARNAEditor$3.$init$, [this, null])));
this._vp.addSelectionListener$fr_orsay_lri_varna_interfaces_InterfaceVARNASelectionListener(((P$.VARNAEditor$4||
(function(){var C$=Clazz.newClass(P$, "VARNAEditor$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'fr.orsay.lri.varna.interfaces.InterfaceVARNASelectionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'onHoverChanged$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (oldbase, newBase) {
if (this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._hoverHighlightSeq != null ) {
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._seq.getHighlighter$().removeHighlight$O(this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._hoverHighlightSeq);
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._hoverHighlightSeq=null;
}if (this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._hoverHighlightStr != null ) {
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._str.getHighlighter$().removeHighlight$O(this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._hoverHighlightStr);
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._hoverHighlightStr=null;
}if (newBase != null ) {
try {
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._hoverHighlightSeq=this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._seq.getHighlighter$().addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter(newBase.getIndex$(), newBase.getIndex$() + 1, Clazz.new_($I$(22).c$$java_awt_Color,[$I$(8).green]));
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._hoverHighlightStr=this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._str.getHighlighter$().addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter(newBase.getIndex$(), newBase.getIndex$() + 1, Clazz.new_($I$(22).c$$java_awt_Color,[$I$(8).green]));
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
e.printStackTrace$();
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'onSelectionChanged$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList', function (selection, addedBases, removedBases) {
for (var tag, $tag = this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._selectionHighlightSeq.iterator$(); $tag.hasNext$()&&((tag=($tag.next$())),1);) {
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._seq.getHighlighter$().removeHighlight$O(tag);
}
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._selectionHighlightSeq.clear$();
for (var tag, $tag = this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._selectionHighlightStr.iterator$(); $tag.hasNext$()&&((tag=($tag.next$())),1);) {
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._str.getHighlighter$().removeHighlight$O(tag);
}
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._selectionHighlightStr.clear$();
for (var m, $m = selection.getBases$().iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
try {
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._selectionHighlightSeq.add$TE(this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._seq.getHighlighter$().addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter(m.getIndex$(), m.getIndex$() + 1, Clazz.new_($I$(22).c$$java_awt_Color,[$I$(8).orange])));
this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._selectionHighlightStr.add$TE(this.b$['fr.orsay.lri.varna.applications.VARNAEditor']._str.getHighlighter$().addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter(m.getIndex$(), m.getIndex$() + 1, Clazz.new_($I$(22).c$$java_awt_Color,[$I$(8).orange])));
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
e.printStackTrace$();
} else {
throw e;
}
}
}
});
})()
), Clazz.new_(P$.VARNAEditor$4.$init$, [this, null])));
this._vp.addVARNAListener$fr_orsay_lri_varna_interfaces_InterfaceVARNAListener(this);
}, p$1);

Clazz.newMeth(C$, 'generateDefaultName$', function () {
return "User file #" + C$._nextID++;
}, 1);

Clazz.newMeth(C$, 'getRNA$', function () {
return this._sideList.getSelectedValue$();
});

Clazz.newMeth(C$, 'getParameterInfo$', function () {
var info=Clazz.array(String, -2, [Clazz.array(String, -1, ["sequenceDBN", "String", "A raw RNA sequence"]), Clazz.array(String, -1, ["structureDBN", "String", "An RNA structure in dot bracket notation (DBN)"]), Clazz.array(String, -1, [C$.errorOpt, "boolean", "To show errors"])]);
return info;
});

Clazz.newMeth(C$, 'init$', function () {
this._vp.setBackground$java_awt_Color(this._backgroundColor);
this._error=true;
});

Clazz.newMeth(C$, 'getSafeColor$S$java_awt_Color', function (col, def) {
var result;
try {
result=$I$(8).decode$S(col);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
try {
result=$I$(8).getColor$S$java_awt_Color(col, def);
} catch (e2) {
if (Clazz.exceptionOf(e2,"Exception")){
return def;
} else {
throw e2;
}
}
} else {
throw e;
}
}
return result;
}, p$1);

Clazz.newMeth(C$, 'get_varnaPanel$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'set_varnaPanel$fr_orsay_lri_varna_VARNAPanel', function (surface) {
this._vp=surface;
});

Clazz.newMeth(C$, 'get_seq$', function () {
return this._seq;
});

Clazz.newMeth(C$, 'set_seq$javax_swing_JTextField', function (_seq) {
this._seq=_seq;
});

Clazz.newMeth(C$, 'get_info$', function () {
return this._info;
});

Clazz.newMeth(C$, 'set_info$javax_swing_JLabel', function (_info) {
this._info=_info;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var d=Clazz.new_(C$);
d.setDefaultCloseOperation$I(3);
d.pack$();
d.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent', function (arg0) {
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent', function (dtde) {
try {
var tr=dtde.getTransferable$();
var flavors=tr.getTransferDataFlavors$();
for (var i=0; i < flavors.length; i++) {
if (flavors[i].isFlavorJavaFileListType$()) {
dtde.acceptDrop$I(3);
var ob=tr.getTransferData$java_awt_datatransfer_DataFlavor(flavors[i]);
if (Clazz.instanceOf(ob, "java.util.List")) {
var list=ob;
for (var j=0; j < list.size$(); j++) {
var o=list.get$I(j);
if (Clazz.instanceOf(dtde.getSource$(), "java.awt.dnd.DropTarget")) {
var dt=dtde.getSource$();
var c=dt.getComponent$();
if (Clazz.instanceOf(c, "fr.orsay.lri.varna.VARNAPanel")) {
var path=o.toString();
var vp=c;
try {
var bck=$I$(15).importSession$O(o);
this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(bck.config, bck.rna, bck.name, true);
} catch (e3) {
if (Clazz.exceptionOf(e3,"fr.orsay.lri.varna.exceptions.ExceptionLoadingFailed")){
var rnas=$I$(23).loadSecStr$java_io_File(o);
if (rnas.isEmpty$()) {
throw Clazz.new_($I$(24).c$$S,["No RNA could be parsed from that source."]);
}var id=1;
for (var r, $r = rnas.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
r.drawRNA$fr_orsay_lri_varna_models_VARNAConfig(vp.getConfig$());
var name=r.getName$();
if (name.equals$O("")) {
name=path.substring$I(path.lastIndexOf$I($I$(25).separatorChar) + 1);
}if (rnas.size$() > 1) {
name += " - Molecule# " + id++;
}this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(vp.getConfig$().clone$(), r, name, true);
}
} else {
throw e3;
}
}
}}}
}dtde.dropComplete$Z(true);
return;
}}
dtde.rejectDrop$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
dtde.rejectDrop$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'onStructureRedrawn$', function () {
});

Clazz.newMeth(C$, 'onUINewStructure$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA', function (v, r) {
this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(v, r, "", true);
});

Clazz.newMeth(C$, 'onWarningEmitted$S', function (s) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
if (e.getClickCount$() == 2) {
var index=this._sideList.locationToIndex$java_awt_Point(e.getPoint$());
var dlm=this._sideList.getModel$();
var item=dlm.getElementAt$I(index);
;this._sideList.ensureIndexIsVisible$I(index);
var newName=$I$(26).showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O(this, "Specify a new name for this RNA", "Rename RNA", 3, null, null, item.toString());
if (newName != null ) {
item.name=newName.toString();
this._sideList.repaint$();
}}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'onZoomLevelChanged$', function () {
});

Clazz.newMeth(C$, 'onTranslationChanged$', function () {
});
;
(function(){var C$=Clazz.newClass(P$.VARNAEditor, "BackupHolder", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._rnaList=null;
this._rnas=null;
this._l=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._rnas=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_DefaultListModel$javax_swing_JList', function (rnaList, l) {
C$.$init$.apply(this);
this._rnaList=rnaList;
this._l=l;
}, 1);

Clazz.newMeth(C$, 'add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA', function (c, r) {
this.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(c, r, r.getName$(), false);
});

Clazz.newMeth(C$, 'add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$Z', function (c, r, select) {
this.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(c, r, r.getName$(), select);
});

Clazz.newMeth(C$, 'add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S', function (c, r, name) {
this.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(c, r, name, false);
});

Clazz.newMeth(C$, 'add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z', function (c, r, name, select) {
if (select) {
this._l.removeSelectionInterval$I$I(0, this._rnaList.size$());
}if (name.equals$O("")) {
name=P$.VARNAEditor.generateDefaultName$();
}var bck=Clazz.new_($I$(2).c$$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S,[c, r, name]);
this._rnas.add$I$TE(0, r);
this._rnaList.add$I$TE(0, bck);
if (select) {
this._l.setSelectedIndex$I(0);
}});

Clazz.newMeth(C$, 'remove$I', function (i) {
this._rnas.remove$I(i);
this._rnaList.remove$I(i);
});

Clazz.newMeth(C$, 'getModel$', function () {
return this._rnaList;
});

Clazz.newMeth(C$, 'contains$fr_orsay_lri_varna_models_rna_RNA', function (r) {
return this._rnas.contains$O(r);
});

Clazz.newMeth(C$, 'getElementAt$I', function (i) {
return this._rnaList.getElementAt$I(i);
});

Clazz.newMeth(C$, 'removeSelected$', function () {
var i=this._l.getSelectedIndex$();
if (i != -1) {
if (this._rnaList.getSize$() == 1) {
var r=Clazz.new_($I$(3));
try {
r.setRNA$S$S(" ", ".");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e1 = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e1 = e$$;
{
}
} else {
throw e$$;
}
}
this.this$0._vp.showRNA$fr_orsay_lri_varna_models_rna_RNA(r);
this.this$0._vp.repaint$();
} else {
var newi=i + 1;
if (newi == this._rnaList.getSize$()) {
newi=this._rnaList.getSize$() - 2;
}var bck=this._rnaList.getElementAt$I(newi);
this._l.setSelectedValue$O$Z(bck, true);
}this._rnaList.remove$I(i);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
