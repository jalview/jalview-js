(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},p$2={},I$=[[0,'javax.swing.ToolTipManager','javax.swing.JLabel','jalview.gui.JvSwingUtils','javax.swing.JPanel','java.awt.BorderLayout','java.util.Vector','javax.swing.JButton','jalview.util.MessageManager','javax.swing.tree.DefaultMutableTreeNode','java.util.Hashtable','javax.swing.JTree','javax.swing.tree.DefaultTreeModel',['jalview.gui.JDatabaseTree','.DbTreeRenderer'],'javax.swing.JScrollPane','java.awt.Dimension','java.awt.event.MouseAdapter','java.awt.FlowLayout','java.awt.GridLayout','Error','jalview.util.QuickSort','java.util.ArrayList','StringBuffer','java.util.HashSet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JDatabaseTree", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.gui.JalviewDialog', 'java.awt.event.KeyListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.allowMultiSelections=false;
this.action=0;
this.svp=null;
this.dbviews=null;
this.sfetcher=null;
this.dbstatus=null;
this.dbstatex=null;
this.mainPanel=null;
this.oldselection=null;
this.selection=null;
this.tsel=null;
this.oldtsel=null;
this.handleSelections=false;
this.lstners=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.allowMultiSelections=false;
this.mainPanel=Clazz.new_($I$(4).c$$java_awt_LayoutManager,[Clazz.new_($I$(5))]);
this.selection=null;
this.tsel=null;
this.oldtsel=null;
this.handleSelections=true;
this.lstners=Clazz.new_($I$(6));
}, 1);

Clazz.newMeth(C$, 'getDatabaseSelectorButton$', function () {
var viewdbs=Clazz.new_($I$(7).c$$S,[$I$(8).getString$S("action.select_ddbb")]);
viewdbs.addActionListener$java_awt_event_ActionListener(((P$.JDatabaseTree$1||
(function(){var C$=Clazz.newClass(P$, "JDatabaseTree$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
this.b$['jalview.gui.JDatabaseTree'].showDialog$.apply(this.b$['jalview.gui.JDatabaseTree'], []);
});
})()
), Clazz.new_(P$.JDatabaseTree$1.$init$, [this, null])));
return viewdbs;
});

Clazz.newMeth(C$, 'c$$jalview_ws_SequenceFetcher', function (sfetch) {
Clazz.super_(C$, this,1);
this.mainPanel.add$java_awt_Component(this);
this.initDialogFrame$java_awt_Container$Z$Z$S$I$I(this.mainPanel, true, false, $I$(8).getString$S("label.select_database_retrieval_source"), 650, 490);
var tn=null;
var root=Clazz.new_($I$(9));
var source=Clazz.new_($I$(10));
this.sfetcher=sfetch;
var dbs=sfetch.getSupportedDb$();
var ht=Clazz.new_($I$(10));
for (var i=0; i < dbs.length; i++) {
tn=source.get$O(dbs[i]);
var srcs=sfetch.getSourceProxy$S(dbs[i]);
if (tn == null ) {
source.put$TK$TV(dbs[i], tn=Clazz.new_($I$(9).c$$O$Z,[dbs[i], true]));
}for (var dbp, $dbp = srcs.iterator$(); $dbp.hasNext$()&&((dbp=($dbp.next$())),1);) {
if (ht.get$O(dbp.getDbName$()) == null ) {
tn.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(9).c$$O$Z,[dbp, false]));
ht.put$TK$TV(dbp.getDbName$(), dbp.getDbName$());
} else {
System.err.println$S("dupe ig for : " + dbs[i] + " \t" + dbp.getDbName$() + " (" + dbp.getDbSource$() + ")" );
source.remove$O(tn);
}}
}
for (var i=0; i < dbs.length; i++) {
tn=source.get$O(dbs[i]);
if (tn == null ) {
continue;
}if (tn.getChildCount$() == 1) {
var ttn=tn.getChildAt$I(0);
tn.setUserObject$O(ttn.getUserObject$());
tn.removeAllChildren$();
source.put$TK$TV(dbs[i], tn);
tn.setAllowsChildren$Z(false);
}root.add$javax_swing_tree_MutableTreeNode(tn);
}
p$2.sortTreeNodes$javax_swing_tree_DefaultMutableTreeNode.apply(this, [root]);
this.dbviews=Clazz.new_($I$(11).c$$javax_swing_tree_TreeModel,[Clazz.new_($I$(12).c$$javax_swing_tree_TreeNode$Z,[root, false])]);
this.dbviews.setCellRenderer$javax_swing_tree_TreeCellRenderer(Clazz.new_($I$(13).c$$jalview_gui_JDatabaseTree, [this, null, this]));
this.dbviews.getSelectionModel$().setSelectionMode$I(1);
this.svp=Clazz.new_($I$(14).c$$java_awt_Component,[this.dbviews]);
this.svp.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(15).c$$I$I,[100, 200]));
this.svp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(15).c$$I$I,[200, 400]));
this.svp.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(15).c$$I$I,[300, 600]));
var panel=Clazz.new_($I$(4).c$$java_awt_LayoutManager,[Clazz.new_($I$(5))]);
panel.setSize$java_awt_Dimension(Clazz.new_($I$(15).c$$I$I,[350, 220]));
panel.add$java_awt_Component(this.svp);
this.dbviews.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(((P$.JDatabaseTree$2||
(function(){var C$=Clazz.newClass(P$, "JDatabaseTree$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.TreeSelectionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['valueChanged$javax_swing_event_TreeSelectionEvent','valueChanged$'], function (arg0) {
p$2._setSelectionState.apply(this.b$['jalview.gui.JDatabaseTree'], []);
});
})()
), Clazz.new_(P$.JDatabaseTree$2.$init$, [this, null])));
this.dbviews.addMouseListener$java_awt_event_MouseListener(((P$.JDatabaseTree$3||
(function(){var C$=Clazz.newClass(P$, "JDatabaseTree$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if (e.getClickCount$() == 2) {
this.b$['jalview.gui.JDatabaseTree'].okPressed$.apply(this.b$['jalview.gui.JDatabaseTree'], []);
this.b$['jalview.gui.JalviewDialog'].closeDialog$.apply(this.b$['jalview.gui.JalviewDialog'], []);
}});
})()
), Clazz.new_($I$(16), [this, null],P$.JDatabaseTree$3)));
var jc=Clazz.new_($I$(4).c$$java_awt_LayoutManager,[Clazz.new_($I$(5))]);
var j=Clazz.new_($I$(4).c$$java_awt_LayoutManager,[Clazz.new_($I$(17))]);
jc.add$java_awt_Component$O(this.svp, "Center");
var f;
var dbstat=Clazz.new_($I$(4).c$$java_awt_LayoutManager,[Clazz.new_($I$(18).c$$I$I,[2, 1])]);
this.dbstatus=Clazz.new_($I$(2).c$$S,[" "]);
this.dbstatus.setFont$java_awt_Font(f=$I$(3).getLabelFont$Z$Z(false, true));
this.dbstatus.setSize$java_awt_Dimension(Clazz.new_($I$(15).c$$I$I,[290, 50]));
this.dbstatex=Clazz.new_($I$(2).c$$S,[" "]);
this.dbstatex.setFont$java_awt_Font(f);
this.dbstatex.setSize$java_awt_Dimension(Clazz.new_($I$(15).c$$I$I,[290, 50]));
dbstat.add$java_awt_Component(this.dbstatus);
dbstat.add$java_awt_Component(this.dbstatex);
jc.add$java_awt_Component$O(dbstat, "South");
jc.validate$();
this.add$java_awt_Component$O(jc, "Center");
this.ok.setEnabled$Z(false);
j.add$java_awt_Component(this.ok);
j.add$java_awt_Component(this.cancel);
this.add$java_awt_Component$O(j, "South");
this.dbviews.addKeyListener$java_awt_event_KeyListener(this);
this.validate$();
}, 1);

Clazz.newMeth(C$, 'sortTreeNodes$javax_swing_tree_DefaultMutableTreeNode', function (root) {
if (root.getChildCount$() == 0) {
return;
}var count=root.getChildCount$();
var names=Clazz.array(String, [count]);
var nodes=Clazz.array($I$(9), [count]);
for (var i=0; i < count; i++) {
var node=root.getChildAt$I(i);
if (Clazz.instanceOf(node, "javax.swing.tree.DefaultMutableTreeNode")) {
var child=node;
nodes[i]=child;
if (Clazz.instanceOf(child.getUserObject$(), "jalview.ws.seqfetcher.DbSourceProxy")) {
names[i]=(child.getUserObject$()).getDbName$().toLowerCase$();
} else {
names[i]=(child.getUserObject$()).toLowerCase$();
p$2.sortTreeNodes$javax_swing_tree_DefaultMutableTreeNode.apply(this, [child]);
}} else {
throw Clazz.new_($I$(19).c$$S,[$I$(8).getString$S("error.implementation_error_cant_reorder_tree")]);
}}
$I$(20).sort$SA$OA(names, nodes);
root.removeAllChildren$();
for (var i=count - 1; i >= 0; i--) {
root.add$javax_swing_tree_MutableTreeNode(nodes[i]);
}
}, p$2);

Clazz.newMeth(C$, 'raiseClosed$', function () {
for (var al, $al = this.lstners.iterator$(); $al.hasNext$()&&((al=($al.next$())),1);) {
al.actionPerformed$(null);
}
});

Clazz.newMeth(C$, 'okPressed$', function () {
p$2._setSelectionState.apply(this, []);
});

Clazz.newMeth(C$, 'cancelPressed$', function () {
this.selection=this.oldselection;
this.tsel=this.oldtsel;
p$2._revertSelectionState.apply(this, []);
this.closeDialog$();
});

Clazz.newMeth(C$, 'showDialog$', function () {
this.oldselection=this.selection;
this.oldtsel=this.tsel;
this.validate$();
this.waitForInput$();
});

Clazz.newMeth(C$, 'hasSelection$', function () {
return this.selection == null  ? false : this.selection.size$() == 0 ? false : true;
});

Clazz.newMeth(C$, 'getSelectedSources$', function () {
return this.selection;
});

Clazz.newMeth(C$, '_setSelectionState', function () {
if (!this.handleSelections) {
return;
}this.ok.setEnabled$Z(false);
if (this.dbviews.getSelectionCount$() == 0) {
this.selection=null;
}this.tsel=this.dbviews.getSelectionPaths$();
var forcedFirstChild=false;
var srcs=Clazz.new_($I$(21));
if (this.tsel != null ) {
for (var tp, $tp = 0, $$tp = this.tsel; $tp<$$tp.length&&((tp=($$tp[$tp])),1);$tp++) {
var admt;
var dmt=tp.getLastPathComponent$();
if (dmt.getUserObject$() != null ) {
this.ok.setEnabled$Z(true);
if (Clazz.instanceOf(dmt.getUserObject$(), "jalview.ws.seqfetcher.DbSourceProxy")) {
srcs.add$TE(dmt.getUserObject$());
} else {
if (this.allowMultiSelections) {
srcs.addAll$java_util_Collection(this.sfetcher.getSourceProxy$S(dmt.getUserObject$()));
} else {
srcs.add$TE(this.sfetcher.getSourceProxy$S(dmt.getUserObject$()).get$I(0));
forcedFirstChild=true;
}}}}
}p$2.updateDbStatus$java_util_List$Z.apply(this, [srcs, forcedFirstChild]);
this.selection=srcs;
}, p$2);

Clazz.newMeth(C$, '_revertSelectionState', function () {
this.handleSelections=false;
if (this.selection == null  || this.selection.size$() == 0 ) {
this.dbviews.clearSelection$();
} else {
this.dbviews.setSelectionPaths$javax_swing_tree_TreePathA(this.tsel);
}this.handleSelections=true;
}, p$2);

Clazz.newMeth(C$, 'updateDbStatus$java_util_List$Z', function (srcs, forcedFirstChild) {
var x=0;
var nm="";
var qr="";
for (var dbs, $dbs = srcs.iterator$(); $dbs.hasNext$()&&((dbs=($dbs.next$())),1);) {
var tq=dbs.getTestQuery$();
nm=dbs.getDbName$();
if (tq != null  && tq.trim$().length$() > 0  && dbs.isValidReference$S(tq) ) {
qr=tq;
x++;
}}
this.dbstatex.setText$S(" ");
if (this.allowMultiSelections) {
this.dbstatus.setText$S($I$(8).formatMessage$S$SA("label.selected_database_to_fetch_from", Clazz.array(String, -1, [Integer.valueOf$I(srcs.size$()).toString(), (srcs.size$() == 1 ? "" : "s"), (srcs.size$() > 0 ? " with " + x + " test quer" + (x == 1 ? "y" : "ies")  : ".")])));
} else {
if (nm.length$() > 0) {
this.dbstatus.setText$S($I$(8).formatMessage$S$SA("label.database_param", Clazz.array(String, -1, [nm])));
if (qr.length$() > 0) {
this.dbstatex.setText$S($I$(8).formatMessage$S$SA("label.example_param", Clazz.array(String, -1, [qr])));
}} else {
this.dbstatus.setText$S(" ");
}}this.dbstatus.invalidate$();
this.dbstatex.invalidate$();
}, p$2);

Clazz.newMeth(C$, 'getSelectedItem$', function () {
if (this.hasSelection$()) {
return this.getSelectedSources$().get$I(0).getDbName$();
}return null;
});

Clazz.newMeth(C$, 'getExampleQueries$', function () {
if (!this.hasSelection$()) {
return null;
}var sb=Clazz.new_($I$(22));
var hs=Clazz.new_($I$(23));
for (var dbs, $dbs = this.getSelectedSources$().iterator$(); $dbs.hasNext$()&&((dbs=($dbs.next$())),1);) {
var tq=dbs.getTestQuery$();
;if (hs.add$TE(tq)) {
if (sb.length$() > 0) {
sb.append$S(";");
}sb.append$S(tq);
}}
return sb.toString();
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener', function (actionListener) {
this.lstners.add$TE(actionListener);
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener', function (actionListener) {
this.lstners.remove$O(actionListener);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (arg0) {
if (!arg0.isConsumed$() && arg0.getKeyCode$() == 10 ) {
this.action=arg0.getKeyCode$();
this.okPressed$();
this.closeDialog$();
}if (!arg0.isConsumed$() && (arg0.getKeyChar$()).$c() == 27  ) {
this.action=arg0.getKeyCode$();
this.cancelPressed$();
}});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (arg0) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (arg0) {
});

Clazz.newMeth(C$, 'setVisible$Z', function (arg0) {
System.out.println$S("setVisible: " + arg0);
C$.superclazz.prototype.setVisible$Z.apply(this, [arg0]);
});
;
(function(){var C$=Clazz.newClass(P$.JDatabaseTree, "DbTreeRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.tree.DefaultTreeCellRenderer', 'javax.swing.tree.TreeCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.us=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_JDatabaseTree', function (me) {
Clazz.super_(C$, this,1);
this.us=me;
$I$(1).sharedInstance$().registerComponent$javax_swing_JComponent(this.this$0.dbviews);
}, 1);

Clazz.newMeth(C$, 'returnLabel$S', function (txt) {
var jl=Clazz.new_($I$(2).c$$S,[txt]);
jl.setFont$java_awt_Font($I$(3).getLabelFont$());
return jl;
}, p$1);

Clazz.newMeth(C$, ['getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z','getTreeCellRendererComponent$'], function (tree, value, selected, expanded, leaf, row, hasFocus) {
var val="";
if (value != null  && Clazz.instanceOf(value, "javax.swing.tree.DefaultMutableTreeNode") ) {
var vl=value;
value=vl.getUserObject$();
if (Clazz.instanceOf(value, "jalview.ws.seqfetcher.DbSourceProxy")) {
val=(value).getDbName$();
if ((value).getDescription$() != null ) {
this.setToolTipText$S((value).getDescription$());
}} else {
if (Clazz.instanceOf(value, "java.lang.String")) {
val=value;
}}}if (value == null ) {
val="";
}return C$.superclazz.prototype.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z.apply(this, [tree, val, selected, expanded, leaf, row, hasFocus]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
