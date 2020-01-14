(function(){var P$=Clazz.newPackage("ext.edu.ucsf.rbvi.strucviz2"),p$1={},I$=[[0,'javax.swing.tree.DefaultMutableTreeNode','javax.swing.tree.TreePath','java.util.ArrayList','java.util.Collections']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ChimeraTreeModel", null, 'javax.swing.tree.DefaultTreeModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.chimeraManager=null;
this.navigationTree=null;
this.residueDisplay=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.residueDisplay=1;
}, 1);

Clazz.newMeth(C$, 'c$$ext_edu_ucsf_rbvi_strucviz2_ChimeraManager$javax_swing_JTree', function (chimeraManager, tree) {
C$.superclazz.c$$javax_swing_tree_TreeNode.apply(this, [Clazz.new_($I$(1))]);
C$.$init$.apply(this);
this.chimeraManager=chimeraManager;
this.navigationTree=tree;
var rootNode=p$1.buildTree.apply(this, []);
this.setRoot$javax_swing_tree_TreeNode(rootNode);
}, 1);

Clazz.newMeth(C$, 'setResidueDisplay$I', function (newDisplay) {
this.residueDisplay=newDisplay;
});

Clazz.newMeth(C$, 'reload$', function () {
var rootNode=p$1.buildTree.apply(this, []);
this.setRoot$javax_swing_tree_TreeNode(rootNode);
C$.superclazz.prototype.reload$.apply(this, []);
});

Clazz.newMeth(C$, 'rebuildTree$', function () {
var rootNode=p$1.buildTree.apply(this, []);
var model=this.navigationTree.getModel$();
model.setRoot$javax_swing_tree_TreeNode(rootNode);
model.reload$();
});

Clazz.newMeth(C$, 'buildTree', function () {
var modelCount=this.chimeraManager.getChimeraModelsCount$Z(true);
var rootNode=Clazz.new_($I$(1).c$$O,[modelCount + " Open Chimera Models"]);
var rootPath=Clazz.new_($I$(2).c$$O,[rootNode]);
var path=null;
var model=null;
for (var chimeraModel, $chimeraModel = this.chimeraManager.getChimeraModels$().iterator$(); $chimeraModel.hasNext$()&&((chimeraModel=($chimeraModel.next$())),1);) {
model=Clazz.new_($I$(1).c$$O,[chimeraModel]);
path=rootPath.pathByAddingChild$O(model);
chimeraModel.setUserData$O(path);
p$1.addChainNodes$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel$javax_swing_tree_DefaultMutableTreeNode$javax_swing_tree_TreePath.apply(this, [chimeraModel, model, path]);
rootNode.add$javax_swing_tree_MutableTreeNode(model);
}
return rootNode;
}, p$1);

Clazz.newMeth(C$, 'addChainNodes$ext_edu_ucsf_rbvi_strucviz2_ChimeraModel$javax_swing_tree_DefaultMutableTreeNode$javax_swing_tree_TreePath', function (chimeraModel, treeModel, treePath) {
var chain=null;
var chainPath=null;
var chainList=chimeraModel.getChains$();
if (chainList.size$() == 0) {
p$1.addResidues$java_util_Collection$javax_swing_tree_DefaultMutableTreeNode$javax_swing_tree_TreePath.apply(this, [chimeraModel.getResidues$(), treeModel, treePath]);
return;
}for (var chimeraChain, $chimeraChain = chainList.iterator$(); $chimeraChain.hasNext$()&&((chimeraChain=($chimeraChain.next$())),1);) {
chain=Clazz.new_($I$(1).c$$O,[chimeraChain]);
chainPath=treePath.pathByAddingChild$O(chain);
chimeraChain.setUserData$O(chainPath);
p$1.addResidues$java_util_Collection$javax_swing_tree_DefaultMutableTreeNode$javax_swing_tree_TreePath.apply(this, [chimeraChain.getResidues$(), chain, chainPath]);
treeModel.add$javax_swing_tree_MutableTreeNode(chain);
}
}, p$1);

Clazz.newMeth(C$, 'addResidues$java_util_Collection$javax_swing_tree_DefaultMutableTreeNode$javax_swing_tree_TreePath', function (residues, treeModel, treePath) {
var residue=null;
var residuePath=null;
var sortedResidues=Clazz.new_($I$(3).c$$java_util_Collection,[residues]);
$I$(4).sort$java_util_List(sortedResidues);
for (var res, $res = sortedResidues.iterator$(); $res.hasNext$()&&((res=($res.next$())),1);) {
res.setDisplayType$I(this.residueDisplay);
residue=Clazz.new_($I$(1).c$$O,[res]);
residuePath=treePath.pathByAddingChild$O(residue);
res.setUserData$O(residuePath);
treeModel.add$javax_swing_tree_MutableTreeNode(residue);
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
