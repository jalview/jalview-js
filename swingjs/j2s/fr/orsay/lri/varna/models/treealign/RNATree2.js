(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),p$1={},I$=[[0,'fr.orsay.lri.varna.models.treealign.ExampleDistance3','fr.orsay.lri.varna.models.rna.Mapping','fr.orsay.lri.varna.models.treealign.RNATree','fr.orsay.lri.varna.models.treealign.Tree','fr.orsay.lri.varna.models.treealign.RNANodeValue2','java.util.ArrayList','java.util.LinkedList',['fr.orsay.lri.varna.models.treealign.RNANodeValue','.Origin'],['fr.orsay.lri.varna.models.treealign.RNATree2','.ConvertToMapping']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RNATree2", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ConvertToMapping',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'RNATree2FromRNA$fr_orsay_lri_varna_models_rna_RNA', function (rna) {
var fullTree=$I$(3).RNATreeFromRNA$fr_orsay_lri_varna_models_rna_RNA(rna);
return C$.RNATree2FromRNATree$fr_orsay_lri_varna_models_treealign_Tree(fullTree);
}, 1);

Clazz.newMeth(C$, 'RNATree2FromRNATree$fr_orsay_lri_varna_models_treealign_Tree', function (originalTree) {
var newTree=Clazz.new_($I$(4,1));
newTree.setValue$O(null);
newTree.replaceChildrenListBy$java_util_List(C$.RNAForest2FromRNAForest$java_util_List(originalTree.getChildren$()));
return newTree;
}, 1);

Clazz.newMeth(C$, 'RNAForest2FromRNAForestCommitNonPaired$java_util_List$java_util_List', function (forest, consecutiveNonPairedBases) {
if (consecutiveNonPairedBases.size$() > 0) {
var groupOfConsecutiveBases=Clazz.new_($I$(5,1).c$$Z,[false]);
groupOfConsecutiveBases.getNodes$().addAll$java_util_Collection(consecutiveNonPairedBases);
var groupOfConsecutiveBasesNode=Clazz.new_($I$(4,1));
groupOfConsecutiveBasesNode.setValue$O(groupOfConsecutiveBases);
forest.add$O(groupOfConsecutiveBasesNode);
consecutiveNonPairedBases.clear$();
}}, 1);

Clazz.newMeth(C$, 'RNAForest2FromRNAForest$java_util_List', function (originalForest) {
var forest=Clazz.new_($I$(6,1));
var consecutiveNonPairedBases=Clazz.new_($I$(7,1));
for (var originalTree, $originalTree = originalForest.iterator$(); $originalTree.hasNext$()&&((originalTree=($originalTree.next$())),1);) {
if (originalTree.getValue$().getRightBasePosition$() == -1) {
if (originalTree.getChildren$().size$() > 0) {
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.treealign.RNATree2Exception').c$$S,["Non-paired base cannot have children."]));
}switch (originalTree.getValue$().getOrigin$()) {
case $I$(8).BASE_FROM_HELIX_STRAND5:
case $I$(8).BASE_FROM_HELIX_STRAND3:
C$.RNAForest2FromRNAForestCommitNonPaired$java_util_List$java_util_List(forest, consecutiveNonPairedBases);
var pairedBase=Clazz.new_($I$(5,1).c$$Z,[true]);
pairedBase.setNode$fr_orsay_lri_varna_models_treealign_RNANodeValue(originalTree.getValue$());
var pairedBaseNode=Clazz.new_($I$(4,1));
pairedBaseNode.setValue$O(pairedBase);
forest.add$O(pairedBaseNode);
break;
case $I$(8).BASE_FROM_UNPAIRED_REGION:
consecutiveNonPairedBases.add$O(originalTree.getValue$());
break;
case $I$(8).BASE_PAIR_FROM_HELIX:
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.treealign.RNATree2Exception').c$$S,["Origin is BASE_PAIR_FROM_HELIX but this is not a pair."]));
}
} else {
C$.RNAForest2FromRNAForestCommitNonPaired$java_util_List$java_util_List(forest, consecutiveNonPairedBases);
var pairedBase=Clazz.new_($I$(5,1).c$$Z,[true]);
pairedBase.setNode$fr_orsay_lri_varna_models_treealign_RNANodeValue(originalTree.getValue$());
var pairedBaseNode=Clazz.new_($I$(4,1));
pairedBaseNode.setValue$O(pairedBase);
pairedBaseNode.replaceChildrenListBy$java_util_List(C$.RNAForest2FromRNAForest$java_util_List(originalTree.getChildren$()));
forest.add$O(pairedBaseNode);
}}
C$.RNAForest2FromRNAForestCommitNonPaired$java_util_List$java_util_List(forest, consecutiveNonPairedBases);
return forest;
}, 1);

Clazz.newMeth(C$, 'mappingFromAlignment$fr_orsay_lri_varna_models_treealign_Tree', function (alignment) {
var converter=Clazz.new_($I$(9,1));
return converter.convert$fr_orsay_lri_varna_models_treealign_Tree(alignment);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATree2, "ConvertToMapping", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sequenceAligner=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['m','fr.orsay.lri.varna.models.rna.Mapping','sequenceAligner','fr.orsay.lri.varna.models.treealign.ExampleDistance3']]]

Clazz.newMeth(C$, 'convert$fr_orsay_lri_varna_models_treealign_Tree', function (tree) {
this.m=Clazz.new_($I$(2,1));
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
if (v1.isSingleNode$() && v2.isSingleNode$() ) {
var vsn1=v1.getNode$();
var vsn2=v2.getNode$();
var l1=vsn1.getLeftBasePosition$();
var r1=vsn1.getRightBasePosition$();
var l2=vsn2.getLeftBasePosition$();
var r2=vsn2.getRightBasePosition$();
if (l1 >= 0 && l2 >= 0 ) {
this.m.addCouple$I$I(l1, l2);
}if (r1 >= 0 && r2 >= 0 ) {
this.m.addCouple$I$I(r1, r2);
}} else if (!v1.isSingleNode$() && !v2.isSingleNode$() ) {
var sequenceAlignment=this.sequenceAligner.alignSequenceNodes$fr_orsay_lri_varna_models_treealign_RNANodeValue2$fr_orsay_lri_varna_models_treealign_RNANodeValue2(v1, v2).getAlignment$();
var l=sequenceAlignment[0].length;
for (var i=0; i < l; i++) {
var b1=sequenceAlignment[0][i];
var b2=sequenceAlignment[1][i];
if (b1 != -1 && b2 != -1 ) {
var l1=v1.getNodes$().get$I(b1).getLeftBasePosition$();
var l2=v2.getNodes$().get$I(b2).getLeftBasePosition$();
this.m.addCouple$I$I(l1, l2);
}}
}}for (var child, $child = tree.getChildren$().iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
p$1.convertSubTree$fr_orsay_lri_varna_models_treealign_Tree.apply(this, [child]);
}
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
