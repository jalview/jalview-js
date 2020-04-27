(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "AlignedNode", null, null, 'fr.orsay.lri.varna.models.treealign.GraphvizDrawableNodeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['leftNode','fr.orsay.lri.varna.models.treealign.Tree','+rightNode']]]

Clazz.newMeth(C$, 'getLeftNode$', function () {
return this.leftNode;
});

Clazz.newMeth(C$, 'setLeftNode$fr_orsay_lri_varna_models_treealign_Tree', function (leftNode) {
this.leftNode=leftNode;
});

Clazz.newMeth(C$, 'getRightNode$', function () {
return this.rightNode;
});

Clazz.newMeth(C$, 'setRightNode$fr_orsay_lri_varna_models_treealign_Tree', function (rightNode) {
this.rightNode=rightNode;
});

Clazz.newMeth(C$, 'maybeNodeToGraphvizNodeName$fr_orsay_lri_varna_models_treealign_Tree', function (tree) {
return (tree != null  && tree.getValue$() != null  ) ? tree.getValue$().toGraphvizNodeName$() : "_";
}, p$1);

Clazz.newMeth(C$, 'toGraphvizNodeName$', function () {
return "(" + p$1.maybeNodeToGraphvizNodeName$fr_orsay_lri_varna_models_treealign_Tree.apply(this, [this.leftNode]) + "," + p$1.maybeNodeToGraphvizNodeName$fr_orsay_lri_varna_models_treealign_Tree.apply(this, [this.rightNode]) + ")" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
