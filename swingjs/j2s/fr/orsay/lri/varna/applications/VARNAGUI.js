(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),p$1={},I$=[[0,'java.util.ArrayList','fr.orsay.lri.varna.applications.VARNAGUI','fr.orsay.lri.varna.models.FullBackup','fr.orsay.lri.varna.models.rna.RNA','javax.swing.JPanel','javax.swing.JLabel','javax.swing.JTextField','javax.swing.JButton','java.awt.Color','javax.swing.JScrollBar','javax.swing.DefaultListModel','javax.swing.DefaultListSelectionModel','fr.orsay.lri.varna.components.ReorderableJList',['fr.orsay.lri.varna.applications.VARNAGUI','.BackupHolder'],'fr.orsay.lri.varna.VARNAPanel','fr.orsay.lri.varna.components.ZoomWindow','java.awt.Dimension','javax.swing.JScrollPane','java.awt.Font','fr.orsay.lri.varna.models.VARNAConfig','javax.swing.JOptionPane','java.awt.BorderLayout','java.awt.GridLayout','java.text.DateFormat','java.util.Date','javax.swing.JSplitPane','java.awt.dnd.DropTarget',['javax.swing.text.DefaultHighlighter','.DefaultHighlightPainter'],'Thread','java.awt.Toolkit','fr.orsay.lri.varna.factories.RNAFactory','fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax','java.awt.Point']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VARNAGUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame', ['java.awt.dnd.DropTargetListener', 'fr.orsay.lri.varna.interfaces.InterfaceVARNAListener', 'java.awt.event.MouseListener', 'java.awt.event.AdjustmentListener']);
C$.$classes$=[['BackupHolder',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._tools=Clazz.new_($I$(5,1));
this._input=Clazz.new_($I$(5,1));
this._seqPanel=Clazz.new_($I$(5,1));
this._strPanel=Clazz.new_($I$(5,1));
this._info=Clazz.new_($I$(6,1));
this._str=Clazz.new_(["..(((((...(((((...(((((...(((((.....)))))...))))).....(((((...(((((.....)))))...))))).....)))))...))))).."],$I$(7,1).c$$S);
this._hoverHighlightStr=null;
this._selectionHighlightStr=Clazz.new_($I$(1,1));
this._seq=Clazz.new_($I$(7,1).c$$S,["CAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIA"]);
this._hoverHighlightSeq=null;
this._selectionHighlightSeq=Clazz.new_($I$(1,1));
this._strLabel=Clazz.new_($I$(6,1).c$$S,[" Str:"]);
this._seqLabel=Clazz.new_($I$(6,1).c$$S,[" Seq:"]);
this._createButton=Clazz.new_($I$(8,1).c$$S,["Create"]);
this._deleteButton=Clazz.new_($I$(8,1).c$$S,["Delete"]);
this._duplicateButton=Clazz.new_($I$(8,1).c$$S,["Snapshot"]);
this._listPanel=Clazz.new_($I$(5,1));
this._sideList=null;
this._backgroundColor=$I$(9).white;
this._vert=Clazz.new_($I$(10,1).c$$I,[1]);
this._horiz=Clazz.new_($I$(10,1).c$$I,[0]);
},1);

C$.$fields$=[['Z',['_error'],'I',['_algoCode'],'O',['_vp','fr.orsay.lri.varna.VARNAPanel','_tools','javax.swing.JPanel','+_input','+_seqPanel','+_strPanel','_info','javax.swing.JLabel','_str','javax.swing.JTextField','_hoverHighlightStr','java.lang.Object','_selectionHighlightStr','java.util.ArrayList','_seq','javax.swing.JTextField','_hoverHighlightSeq','java.lang.Object','_selectionHighlightSeq','java.util.ArrayList','_zoomWindow','fr.orsay.lri.varna.components.ZoomWindow','_strLabel','javax.swing.JLabel','+_seqLabel','_createButton','javax.swing.JButton','+_deleteButton','+_duplicateButton','_listPanel','javax.swing.JPanel','_sideList','fr.orsay.lri.varna.components.ReorderableJList','_backgroundColor','java.awt.Color','_vert','javax.swing.JScrollBar','+_horiz','_rnaList','fr.orsay.lri.varna.applications.VARNAGUI.BackupHolder']]
,['I',['_nextID'],'S',['errorOpt']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["VARNA GUI"]);C$.$init$.apply(this);
p$1.RNAPanelDemoInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'RNAPanelDemoInit', function () {
var dlm=Clazz.new_($I$(11,1));
var marginTools=40;
var m=Clazz.new_($I$(12,1));
m.setSelectionMode$I(0);
m.setLeadAnchorNotificationEnabled$Z(false);
this._sideList=Clazz.new_($I$(13,1));
this._sideList.setModel$javax_swing_ListModel(dlm);
this._sideList.addMouseListener$java_awt_event_MouseListener(this);
this._sideList.setSelectionModel$javax_swing_ListSelectionModel(m);
this._sideList.setPreferredSize$java_awt_Dimension(null);
this._sideList.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.VARNAGUI$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VARNAGUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent', function (arg0) {
if (!this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._sideList.isSelectionEmpty$() && !arg0.getValueIsAdjusting$() ) {
var sel=this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._sideList.getSelectedValue$();
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._vp.setConfig$fr_orsay_lri_varna_models_VARNAConfig(sel.config);
this.b$['fr.orsay.lri.varna.applications.VARNAGUI'].showRNA$fr_orsay_lri_varna_models_rna_RNA.apply(this.b$['fr.orsay.lri.varna.applications.VARNAGUI'], [sel.rna]);
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._seq.setText$S(sel.rna.getSeq$());
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._str.setText$S(sel.rna.getStructDBN$Z(true));
}});
})()
), Clazz.new_(P$.VARNAGUI$1.$init$,[this, null])));
this._rnaList=Clazz.new_($I$(14,1).c$$javax_swing_DefaultListModel$javax_swing_JList,[this, null, dlm, this._sideList]);
var _RNA1=Clazz.new_($I$(4,1).c$$S,["User defined 1"]);
var _RNA2=Clazz.new_($I$(4,1).c$$S,["User defined 2"]);
try {
this._vp=Clazz.new_($I$(15,1).c$$S$S,["0", "."]);
this._zoomWindow=Clazz.new_($I$(16,1).c$$fr_orsay_lri_varna_VARNAPanel,[this._vp]);
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
this._vp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[400, 400]));
this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S(this._vp.getConfig$().clone$(), _RNA2, C$.generateDefaultName$());
this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(this._vp.getConfig$().clone$(), _RNA1, C$.generateDefaultName$(), true);
var listScroller=Clazz.new_($I$(18,1).c$$java_awt_Component,[this._sideList]);
listScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[150, 0]));
this.setBackground$java_awt_Color(this._backgroundColor);
this._vp.setBackground$java_awt_Color(this._backgroundColor);
var textFieldsFont=$I$(19).decode$S("MonoSpaced-PLAIN-12");
this._seqLabel.setHorizontalTextPosition$I(2);
this._seqLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[marginTools, 15]));
this._seq.setFont$java_awt_Font(textFieldsFont);
this._seq.setText$S("CAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIACAGCACGACACUAGCAGUCAGUGUCAGACUGCAIA");
this._createButton.addActionListener$java_awt_event_ActionListener(((P$.VARNAGUI$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "VARNAGUI$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
try {
var nRNA=Clazz.new_([$I$(2).generateDefaultName$()],$I$(4,1).c$$S);
nRNA.setRNA$S$S(this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._seq.getText$(), this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._str.getText$());
nRNA.drawRNARadiate$fr_orsay_lri_varna_models_VARNAConfig(this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._vp.getConfig$());
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$Z(Clazz.new_($I$(20,1)), nRNA, true);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionUnmatchedClosingParentheses")){
var e1 = e$$;
{
$I$(21,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._vp, e1.getMessage$(), "Error", 0]);
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
var e1 = e$$;
{
$I$(21,"showMessageDialog$java_awt_Component$O$S$I",[this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._vp, e1.getMessage$(), "Error", 0]);
}
} else {
throw e$$;
}
}
});
})()
), Clazz.new_(P$.VARNAGUI$2.$init$,[this, null])));
this._seqPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(22,1)));
this._seqPanel.add$java_awt_Component$O(this._seqLabel, "West");
this._seqPanel.add$java_awt_Component$O(this._seq, "Center");
this._strLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[marginTools, 15]));
this._strLabel.setHorizontalTextPosition$I(2);
this._str.setFont$java_awt_Font(textFieldsFont);
this._strPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(22,1)));
this._strPanel.add$java_awt_Component$O(this._strLabel, "West");
this._strPanel.add$java_awt_Component$O(this._str, "Center");
this._input.setLayout$java_awt_LayoutManager(Clazz.new_($I$(23,1).c$$I$I,[2, 0]));
this._input.add$java_awt_Component(this._seqPanel);
this._input.add$java_awt_Component(this._strPanel);
var goPanel=Clazz.new_($I$(5,1));
goPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(22,1)));
this._tools.setLayout$java_awt_LayoutManager(Clazz.new_($I$(22,1)));
this._tools.add$java_awt_Component$O(this._input, "Center");
this._tools.add$java_awt_Component$O(this._info, "South");
this._tools.add$java_awt_Component$O(goPanel, "East");
this._deleteButton.addActionListener$java_awt_event_ActionListener(((P$.VARNAGUI$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "VARNAGUI$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._rnaList.removeSelected$();
});
})()
), Clazz.new_(P$.VARNAGUI$3.$init$,[this, null])));
if (false &&true) this._duplicateButton.addActionListener$java_awt_event_ActionListener(((P$.VARNAGUI$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "VARNAGUI$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._vp.getConfig$().clone$(), this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._vp.getRNA$().clone$(), this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._vp.getRNA$().getName$() + "-" + $I$(24).getTimeInstance$I(1).format$java_util_Date(Clazz.new_($I$(25,1))) , true);
});
})()
), Clazz.new_(P$.VARNAGUI$4.$init$,[this, null])));
var ops=Clazz.new_($I$(5,1));
ops.setLayout$java_awt_LayoutManager(Clazz.new_($I$(23,1).c$$I$I,[1, 2]));
ops.add$java_awt_Component(this._deleteButton);
if (false &&true) ops.add$java_awt_Component(this._duplicateButton);
var opspanel=Clazz.new_([Clazz.new_($I$(22,1))],$I$(5,1).c$$java_awt_LayoutManager);
opspanel.add$java_awt_Component$O(ops, "North");
opspanel.add$java_awt_Component$O(this._zoomWindow, "South");
this._zoomWindow.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[-1, 200]));
var j=Clazz.new_($I$(6,1).c$$S$I,["Structure Manager", 0]);
this._listPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(22,1)));
this._listPanel.add$java_awt_Component$O(opspanel, "South");
this._listPanel.add$java_awt_Component$O(j, "North");
this._listPanel.add$java_awt_Component$O(listScroller, "Center");
goPanel.add$java_awt_Component$O(this._createButton, "Center");
var vpScroll=Clazz.new_($I$(5,1));
vpScroll.setLayout$java_awt_LayoutManager(Clazz.new_($I$(22,1)));
this._horiz.setVisible$Z(false);
this._horiz.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this._vert.setVisible$Z(false);
this._vert.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
vpScroll.add$java_awt_Component$O(this._horiz, "South");
vpScroll.add$java_awt_Component$O(this._vert, "East");
vpScroll.add$java_awt_Component$O(this._vp, "Center");
var split=Clazz.new_($I$(26,1).c$$I$Z$java_awt_Component$java_awt_Component,[1, true, this._listPanel, vpScroll]);
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(22,1)));
this.getContentPane$().add$java_awt_Component$O(split, "Center");
this.getContentPane$().add$java_awt_Component$O(this._tools, "North");
this.setVisible$Z(true);
var dt=Clazz.new_($I$(27,1).c$$java_awt_Component$java_awt_dnd_DropTargetListener,[this._vp, this]);
this._vp.addRNAListener$fr_orsay_lri_varna_interfaces_InterfaceVARNARNAListener(((P$.VARNAGUI$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "VARNAGUI$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'fr.orsay.lri.varna.interfaces.InterfaceVARNARNAListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'onSequenceModified$I$S$S', function (index, oldseq, newseq) {
});

Clazz.newMeth(C$, 'onStructureModified$java_util_Set$java_util_Set$java_util_Set', function (current, addedBasePairs, removedBasePairs) {
var result="";
for (var s, $s = addedBasePairs.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
result += s;
}
result="";
for (var s, $s = removedBasePairs.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
result += s;
}
});

Clazz.newMeth(C$, 'onRNALayoutChanged$java_util_Hashtable', function (previousPositions) {
var result="";
for (var s, $s = previousPositions.keySet$().iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
result += s + " ";
}
});
})()
), Clazz.new_(P$.VARNAGUI$5.$init$,[this, null])));
this._vp.addSelectionListener$fr_orsay_lri_varna_interfaces_InterfaceVARNASelectionListener(((P$.VARNAGUI$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "VARNAGUI$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'fr.orsay.lri.varna.interfaces.InterfaceVARNASelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'onHoverChanged$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (oldbase, newBase) {
if (this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._hoverHighlightSeq != null ) {
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._seq.getHighlighter$().removeHighlight$O(this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._hoverHighlightSeq);
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._hoverHighlightSeq=null;
}if (this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._hoverHighlightStr != null ) {
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._str.getHighlighter$().removeHighlight$O(this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._hoverHighlightStr);
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._hoverHighlightStr=null;
}if (newBase != null ) {
try {
var i=newBase.getIndex$();
var shifts=this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._vp.getRNA$().getStrandShifts$();
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._hoverHighlightSeq=this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._seq.getHighlighter$().addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter(i + shifts[i], i + shifts[i] + 1 , Clazz.new_([$I$(9).green],$I$(28,1).c$$java_awt_Color));
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._hoverHighlightStr=this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._str.getHighlighter$().addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter(i + shifts[i], i + shifts[i] + 1 , Clazz.new_([$I$(9).green],$I$(28,1).c$$java_awt_Color));
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
e.printStackTrace$();
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'onSelectionChanged$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList$fr_orsay_lri_varna_models_BaseList', function (selection, addedBases, removedBases) {
for (var tag, $tag = this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._selectionHighlightSeq.iterator$(); $tag.hasNext$()&&((tag=($tag.next$())),1);) {
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._seq.getHighlighter$().removeHighlight$O(tag);
}
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._selectionHighlightSeq.clear$();
for (var tag, $tag = this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._selectionHighlightStr.iterator$(); $tag.hasNext$()&&((tag=($tag.next$())),1);) {
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._str.getHighlighter$().removeHighlight$O(tag);
}
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._selectionHighlightStr.clear$();
var shifts=this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._vp.getRNA$().getStrandShifts$();
for (var m, $m = selection.getBases$().iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
try {
var i=m.getIndex$();
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._selectionHighlightSeq.add$O(this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._seq.getHighlighter$().addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter(i + shifts[i], i + shifts[i] + 1 , Clazz.new_([$I$(9).orange],$I$(28,1).c$$java_awt_Color)));
this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._selectionHighlightStr.add$O(this.b$['fr.orsay.lri.varna.applications.VARNAGUI']._str.getHighlighter$().addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter(i + shifts[i], i + shifts[i] + 1 , Clazz.new_([$I$(9).orange],$I$(28,1).c$$java_awt_Color)));
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
), Clazz.new_(P$.VARNAGUI$6.$init$,[this, null])));
this._vp.addVARNAListener$fr_orsay_lri_varna_interfaces_InterfaceVARNAListener(this);
Clazz.new_($I$(29,1).c$$Runnable,[this._zoomWindow]).start$();
}, p$1);

Clazz.newMeth(C$, 'showRNA$fr_orsay_lri_varna_models_rna_RNA', function (rna) {
this._vp.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA(rna);
this._zoomWindow.repaint$();
});

Clazz.newMeth(C$, 'addRNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig', function (r, cfg) {
this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA(cfg, r);
});

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
result=$I$(9).decode$S(col);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
try {
result=$I$(9).getColor$S$java_awt_Color(col, def);
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
var icons=Clazz.new_($I$(1,1));
icons.add$O($I$(30).getDefaultToolkit$().getImage$S("./VARNA16x16.png"));
icons.add$O($I$(30).getDefaultToolkit$().getImage$S("./VARNA32x32.png"));
icons.add$O($I$(30).getDefaultToolkit$().getImage$S("./VARNA64x64.png"));
var d=Clazz.new_(C$);
d.setDefaultCloseOperation$I(3);
d.pack$();
d.setIconImages$java_util_List(icons);
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
var rnas=$I$(31).loadSecStr$java_io_File(o);
if (rnas.isEmpty$()) {
throw Clazz.new_($I$(32,1).c$$S,["No RNA could be parsed from that source."]);
}dtde.dropComplete$Z(true);
this._vp.getVARNAUI$().UIChooseRNAs$java_util_ArrayList(rnas);
return;
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
this._rnaList.add$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S$Z(v, r, r.getName$(), true);
this.onZoomLevelChanged$();
});

Clazz.newMeth(C$, 'onWarningEmitted$S', function (s) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
if (e.getClickCount$() == 2) {
var index=this._sideList.locationToIndex$java_awt_Point(e.getPoint$());
var dlm=this._sideList.getModel$();
var item=dlm.getElementAt$I(index);
;this._sideList.ensureIndexIsVisible$I(index);
var newName=$I$(21,"showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O",[this, "Specify a new name for this RNA", "Rename RNA", 3, null, null, item.toString()]);
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
if (this._vp.getZoom$() > 1.02 ) {
var r=this._vp.getZoomedInTranslationBox$();
this._horiz.setMinimum$I(r.x);
this._horiz.setMaximum$I(r.x + r.width + this._vp.getWidth$() );
this._horiz.getModel$().setExtent$I(this._vp.getWidth$());
this._horiz.getModel$().setValue$I(this._vp.getTranslation$().x);
this._horiz.doLayout$();
this._horiz.setVisible$Z(true);
this._vert.setMinimum$I(r.y);
this._vert.setMaximum$I(r.y + r.height + this._vp.getHeight$() );
this._vert.getModel$().setExtent$I(this._vp.getHeight$());
this._vert.getModel$().setValue$I(this._vp.getTranslation$().y);
this._vert.doLayout$();
this._vert.setVisible$Z(true);
} else {
this._horiz.setVisible$Z(false);
this._vert.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'onTranslationChanged$', function () {
if (this._vp.getZoom$() > 1.02 ) {
var nx=this._horiz.getMaximum$() - (this._vp.getTranslation$().x - this._horiz.getMinimum$()) - this._vp.getWidth$() ;
var ny=this._vert.getMaximum$() - (this._vp.getTranslation$().y - this._vert.getMinimum$()) - this._vp.getHeight$() ;
this._horiz.getModel$().setValue$I(nx);
this._horiz.doLayout$();
this._vert.getModel$().setValue$I(ny);
this._vert.doLayout$();
}});

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent', function (arg0) {
if (arg0.getSource$() === this._horiz ) {
this._vp.setTranslation$java_awt_Point(Clazz.new_([this._horiz.getMaximum$() - (arg0.getValue$() - this._horiz.getMinimum$()) - this._vp.getWidth$() , this._vp.getTranslation$().y],$I$(33,1).c$$I$I));
this._vp.repaint$();
} else if (arg0.getSource$() === this._vert ) {
this._vp.setTranslation$java_awt_Point(Clazz.new_([this._vp.getTranslation$().x, this._vert.getMaximum$() - (arg0.getValue$() - this._vert.getMinimum$()) - this._vp.getHeight$() ],$I$(33,1).c$$I$I));
this._vp.repaint$();
}});

C$.$static$=function(){C$.$static$=0;
C$.errorOpt="error";
C$._nextID=1;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.VARNAGUI, "BackupHolder", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._rnas=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['_rnaList','javax.swing.DefaultListModel','_rnas','java.util.ArrayList','_l','javax.swing.JList']]]

Clazz.newMeth(C$, 'c$$javax_swing_DefaultListModel$javax_swing_JList', function (rnaList, l) {
;C$.$init$.apply(this);
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
if (!this._rnas.contains$O(r)) {
if (select) {
this._l.removeSelectionInterval$I$I(0, this._rnaList.size$());
}if (name.equals$O("")) {
name=$I$(2).generateDefaultName$();
}var bck=Clazz.new_($I$(3,1).c$$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S,[c, r, name]);
this._rnas.add$I$O(0, r);
this._rnaList.add$I$O(0, bck);
this._l.doLayout$();
if (select) {
this._l.setSelectedIndex$I(0);
}}});

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
var r=Clazz.new_($I$(4,1));
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
this.this$0.showRNA$fr_orsay_lri_varna_models_rna_RNA.apply(this.this$0, [r]);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:17 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
