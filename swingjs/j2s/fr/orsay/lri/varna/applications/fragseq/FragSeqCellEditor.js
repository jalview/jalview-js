(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),I$=[[0,'fr.orsay.lri.varna.applications.fragseq.FragSeqCellRenderer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FragSeqCellEditor", null, 'javax.swing.tree.DefaultTreeCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_m','fr.orsay.lri.varna.applications.fragseq.FragSeqTreeModel','_base','fr.orsay.lri.varna.applications.fragseq.FragSeqCellRenderer']]]

Clazz.newMeth(C$, 'c$$javax_swing_JTree$javax_swing_tree_DefaultTreeCellRenderer$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel', function (tree, renderer, m) {
;C$.superclazz.c$$javax_swing_JTree$javax_swing_tree_DefaultTreeCellRenderer.apply(this,[tree, renderer]);C$.$init$.apply(this);
this._base=Clazz.new_($I$(1,1).c$$javax_swing_JTree$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel,[tree, m]);
this._m=m;
}, 1);

Clazz.newMeth(C$, 'getTreeCellEditorComponent$javax_swing_JTree$O$Z$Z$Z$I', function (tree, value, sel, expanded, leaf, row) {
var renderer=this._base.baseElements$javax_swing_JTree$fr_orsay_lri_varna_applications_fragseq_FragSeqTreeModel$O$Z$Z$Z$I$Z(tree, this._m, value, sel, expanded, leaf, row, true);
return renderer;
});

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject', function (evt) {
if (Clazz.instanceOf(evt, "java.awt.event.MouseEvent")) {
var clickCount;
clickCount=1;
return (evt).getClickCount$() >= clickCount;
}return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:18 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
