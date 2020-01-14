(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),p$1={};
var C$=Clazz.newClass(P$, "AlignedNode", null, null, 'fr.orsay.lri.varna.models.treealign.GraphvizDrawableNodeValue');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.leftNode=null;
this.rightNode=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
