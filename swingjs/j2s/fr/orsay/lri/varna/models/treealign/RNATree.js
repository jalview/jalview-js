(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),p$1={},I$=[[0,'fr.orsay.lri.varna.models.treealign.Tree','fr.orsay.lri.varna.models.treealign.RNANodeValue',['fr.orsay.lri.varna.models.treealign.RNANodeValue','.Origin'],'fr.orsay.lri.varna.models.rna.Mapping',['fr.orsay.lri.varna.models.treealign.RNATree','.ConvertToTree'],['fr.orsay.lri.varna.models.treealign.RNATree','.ConvertToMapping']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RNATree", function(){
Clazz.newInstance(this, arguments,0,C$);
});

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'RNATreeFromRNA$fr_orsay_lri_varna_models_rna_RNA', function (rna) {
var converter=Clazz.new_($I$(5).c$$fr_orsay_lri_varna_models_rna_RNA,[rna]);
return converter.toTreeAux$I(0);
}, 1);

Clazz.newMeth(C$, 'mappingFromAlignment$fr_orsay_lri_varna_models_treealign_Tree', function (alignment) {
var converter=Clazz.new_($I$(6));
return converter.convert$fr_orsay_lri_varna_models_treealign_Tree(alignment);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.RNATree, "ConvertToTree", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rna=null;
this.i=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
}, 1);

Clazz.newMeth(C$, 'toTreeAux$I', function (depth) {
var tree=Clazz.new_($I$(1));
var children=tree.getChildren$();
tree.setValue$TT(null);
var length=this.rna.getSize$();
while (this.i < length){
var base=this.rna.getBaseAt$I(this.i);
var indexOfAssociatedBase=base.getElementStructure$();
if (indexOfAssociatedBase >= 0) {
if (indexOfAssociatedBase > this.i) {
var childValue=Clazz.new_($I$(2));
childValue.setLeftBasePosition$I(this.i);
childValue.setRightBasePosition$I(indexOfAssociatedBase);
childValue.setOrigin$fr_orsay_lri_varna_models_treealign_RNANodeValue_Origin($I$(3).BASE_PAIR_FROM_HELIX);
if (Clazz.instanceOf(base, "fr.orsay.lri.varna.models.rna.ModeleBaseNucleotide")) {
childValue.setLeftNucleotide$S((base).getBase$());
childValue.setRightNucleotide$S((this.rna.getBaseAt$I(indexOfAssociatedBase)).getBase$());
}this.i++;
var child=this.toTreeAux$I(depth + 1);
child.setValue$TT(childValue);
children.add$TE(child);
} else {
this.i++;
break;
}} else {
var child=Clazz.new_($I$(1));
var childValue=Clazz.new_($I$(2));
childValue.setLeftBasePosition$I(this.i);
if (Clazz.instanceOf(base, "fr.orsay.lri.varna.models.rna.ModeleBaseNucleotide")) {
childValue.setLeftNucleotide$S((base).getBase$());
}childValue.setOrigin$fr_orsay_lri_varna_models_treealign_RNANodeValue_Origin($I$(3).BASE_FROM_UNPAIRED_REGION);
var auxBasePairs=this.rna.getAuxBPs$I(this.i);
for (var auxBasePair, $auxBasePair = auxBasePairs.iterator$(); $auxBasePair.hasNext$()&&((auxBasePair=($auxBasePair.next$())),1);) {
if (auxBasePair.isCanonical$()) {
var partner5=(auxBasePair.getPartner5$()).getIndex$();
var partner3=(auxBasePair.getPartner3$()).getIndex$();
if (this.i == partner5) {
childValue.setOrigin$fr_orsay_lri_varna_models_treealign_RNANodeValue_Origin($I$(3).BASE_FROM_HELIX_STRAND5);
} else if (this.i == partner3) {
childValue.setOrigin$fr_orsay_lri_varna_models_treealign_RNANodeValue_Origin($I$(3).BASE_FROM_HELIX_STRAND3);
} else {
System.err.println$S("Warning: Base index is " + this.i + " but neither endpoint matches it (edge endpoints are " + partner5 + " and " + partner3 + ")." );
}}}
child.setValue$TT(childValue);
children.add$TE(child);
this.i++;
}}
return tree;
});

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA', function (rna) {
C$.$init$.apply(this);
this.rna=rna;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.RNATree, "ConvertToMapping", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.m=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$fr_orsay_lri_varna_models_treealign_Tree', function (tree) {
this.m=Clazz.new_($I$(4));
p$1.convertSubTree$fr_orsay_lri_varna_models_treealign_Tree.apply(this, [tree]);
return this.m;
});

Clazz.newMeth(C$, 'convertSubTree$fr_orsay_lri_varna_models_treealign_Tree', function (tree) {
var alignedNode=tree.getValue$();
var leftNode=alignedNode.getLeftNode$();
var rightNode=alignedNode.getRightNode$();
if (leftNode != null  && rightNode != null  ) {
var v1=leftNode.getValue$();
var v2=rightNode.getValue$();
var l1=v1.getLeftBasePosition$();
var r1=v1.getRightBasePosition$();
var l2=v2.getLeftBasePosition$();
var r2=v2.getRightBasePosition$();
if (l1 >= 0 && l2 >= 0 ) {
this.m.addCouple$I$I(l1, l2);
}if (r1 >= 0 && r2 >= 0 ) {
this.m.addCouple$I$I(r1, r2);
}}for (var child, $child = tree.getChildren$().iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
p$1.convertSubTree$fr_orsay_lri_varna_models_treealign_Tree.apply(this, [child]);
}
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
