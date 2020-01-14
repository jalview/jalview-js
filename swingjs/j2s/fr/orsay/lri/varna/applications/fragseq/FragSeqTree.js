(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),I$=[[0,'fr.orsay.lri.varna.applications.fragseq.Watcher','javax.swing.tree.TreePath']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FragSeqTree", null, 'javax.swing.JTree', 'java.awt.event.MouseListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._w=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel', function (m) {
C$.superclazz.c$$javax_swing_tree_TreeModel.apply(this, [m]);
C$.$init$.apply(this);
this._w=Clazz.new_($I$(1).c$$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel,[m]);
this._w.start$();
}, 1);

Clazz.newMeth(C$, 'getSelectedNode$', function () {
var t=this.getSelectionPath$();
if (t != null ) {
return t.getLastPathComponent$();
}return null;
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
var x=e.getX$();
var y=e.getY$();
var tp=this.getPathForLocation$I$I(x, y);
if (tp != null ) {
var n=tp.getLastPathComponent$();
}});

Clazz.newMeth(C$, 'switchToPath$', function () {
var m=this.getModel$();
this.cancelEditing$();
m.setRoot$javax_swing_tree_TreeNode(m.getPathViewRoot$());
var en=m.getRoot$().depthFirstEnumeration$();
while (en.hasMoreElements$()){
var n=en.nextElement$();
if (m.isExpanded$fr_orsay_lri_varna_applications_fragseq_FragSeqNode(n)) {
this.expandPath$javax_swing_tree_TreePath(Clazz.new_($I$(2).c$$OA,[n.getPath$()]));
}}
});

Clazz.newMeth(C$, 'switchToID$', function () {
var m=this.getModel$();
this.cancelEditing$();
m.setRoot$javax_swing_tree_TreeNode(m.getIDViewRoot$());
var en=m.getRoot$().depthFirstEnumeration$();
while (en.hasMoreElements$()){
var n=en.nextElement$();
if (m.isExpanded$fr_orsay_lri_varna_applications_fragseq_FragSeqNode(n)) {
this.expandPath$javax_swing_tree_TreePath(Clazz.new_($I$(2).c$$OA,[n.getPath$()]));
}}
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
