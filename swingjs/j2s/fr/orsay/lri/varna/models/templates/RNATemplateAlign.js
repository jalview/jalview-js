(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[[0,'fr.orsay.lri.varna.models.templates.RNATemplateMapping','java.util.LinkedList','java.util.ArrayList','java.util.HashSet','fr.orsay.lri.varna.models.treealign.RNATree2','fr.orsay.lri.varna.models.treealign.TreeAlign','fr.orsay.lri.varna.models.templates.RNANodeValue2TemplateDistance']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RNATemplateAlign");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'canBePartOfAnHelix$fr_orsay_lri_varna_models_treealign_RNANodeValue2', function (leftNodeValue) {
return (leftNodeValue != null ) && leftNodeValue.isSingleNode$() && leftNodeValue.getNode$().getRightBasePosition$() > 0  ;
}, 1);

Clazz.newMeth(C$, 'canBePartOfASequence$fr_orsay_lri_varna_models_treealign_RNANodeValue2', function (leftNodeValue) {
return (leftNodeValue != null ) && !leftNodeValue.isSingleNode$() ;
}, 1);

Clazz.newMeth(C$, 'canBePartOfABrokenHelix$fr_orsay_lri_varna_models_treealign_RNANodeValue2', function (leftNodeValue) {
return (leftNodeValue != null ) && leftNodeValue.isSingleNode$() && leftNodeValue.getNode$().getRightBasePosition$() < 0  ;
}, 1);

Clazz.newMeth(C$, 'makeTemplateMapping$fr_orsay_lri_varna_models_treealign_TreeAlignResult$fr_orsay_lri_varna_models_rna_RNA', function (alignResult, rna) {
var mapping=Clazz.new_($I$(1,1));
var alignment=alignResult.getAlignment$();
mapping.setDistance$D(alignResult.getDistance$());
{
var currentHelix=null;
var remainingNodes=Clazz.new_($I$(2,1));
var nodesInSameHelix=Clazz.new_($I$(2,1));
remainingNodes.add$O(alignment);
while (!remainingNodes.isEmpty$()){
var node=remainingNodes.getLast$();
remainingNodes.removeLast$();
var leftNode=node.getValue$().getLeftNode$();
var rightNode=node.getValue$().getRightNode$();
if (leftNode != null  && leftNode.getValue$() != null  ) {
var leftNodeValue=leftNode.getValue$();
if (rightNode != null  && rightNode.getValue$() != null  ) {
var rightNodeValue=rightNode.getValue$();
if (Clazz.instanceOf(rightNodeValue, "fr.orsay.lri.varna.models.templates.RNANodeValueTemplateBasePair") && C$.canBePartOfAnHelix$fr_orsay_lri_varna_models_treealign_RNANodeValue2(leftNodeValue) ) {
var helix=(rightNodeValue).getHelix$();
currentHelix=helix;
var i=leftNodeValue.getNode$().getLeftBasePosition$();
var j=leftNodeValue.getNode$().getRightBasePosition$();
mapping.addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(i, helix);
mapping.addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(j, helix);
if (nodesInSameHelix.size$() > 0) {
for (var v, $v = nodesInSameHelix.iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
var k=v.getNode$().getLeftBasePosition$();
var l=v.getNode$().getRightBasePosition$();
var validExtension=(k < i) && (j < l) ;
if (validExtension) {
mapping.addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(v.getNode$().getLeftBasePosition$(), helix);
mapping.addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(v.getNode$().getRightBasePosition$(), helix);
}}
}nodesInSameHelix.clear$();
} else if (Clazz.instanceOf(rightNodeValue, "fr.orsay.lri.varna.models.templates.RNANodeValueTemplateSequence") && C$.canBePartOfASequence$fr_orsay_lri_varna_models_treealign_RNANodeValue2(leftNodeValue) ) {
currentHelix=null;
nodesInSameHelix.clear$();
var sequence=(rightNodeValue).getSequence$();
for (var nodeValue, $nodeValue = leftNode.getValue$().getNodes$().iterator$(); $nodeValue.hasNext$()&&((nodeValue=($nodeValue.next$())),1);) {
mapping.addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(nodeValue.getLeftBasePosition$(), sequence);
}
} else {
currentHelix=null;
nodesInSameHelix.clear$();
}} else {
if (C$.canBePartOfAnHelix$fr_orsay_lri_varna_models_treealign_RNANodeValue2(leftNodeValue)) {
if (currentHelix != null ) {
var i=leftNodeValue.getNode$().getLeftBasePosition$();
var j=leftNodeValue.getNode$().getRightBasePosition$();
var k=2147483647;
var l=-2147483648;
for (var b, $b = mapping.getAncestor$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(currentHelix).iterator$(); $b.hasNext$()&&((b=($b.next$()).intValue$()),1);) {
k=Math.min(k, b);
l=Math.max(l, b);
}
var validExtension=(k < i) && (j < l) ;
if (validExtension) {
mapping.addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(i, currentHelix);
mapping.addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(j, currentHelix);
}} else {
nodesInSameHelix.add$O(leftNodeValue);
}}}}var children=node.getChildren$();
var n=children.size$();
if (n > 0) {
var helixChildren=0;
var addToStack1=Clazz.new_($I$(3,1));
var addToStack2=Clazz.new_($I$(3,1));
for (var i=0; i < n; i++) {
var child=children.get$I(i);
var RNAchild=child.getValue$().getLeftNode$();
if (RNAchild != null  && RNAchild.getValue$() != null   && (C$.canBePartOfAnHelix$fr_orsay_lri_varna_models_treealign_RNANodeValue2(RNAchild.getValue$()) || C$.canBePartOfABrokenHelix$fr_orsay_lri_varna_models_treealign_RNANodeValue2(RNAchild.getValue$()) ) ) {
helixChildren++;
addToStack2.add$O(child);
} else {
addToStack1.add$O(child);
}}
for (var i=addToStack2.size$() - 1; i >= 0; i--) {
remainingNodes.add$O(addToStack2.get$I(i));
}
for (var i=addToStack1.size$() - 1; i >= 0; i--) {
remainingNodes.add$O(addToStack1.get$I(i));
}
if (helixChildren >= 2) {
currentHelix=null;
}}}
}{
var remainingNodes=Clazz.new_($I$(2,1));
remainingNodes.add$O(alignment);
var tempPKMapping=Clazz.new_($I$(1,1));
while (!remainingNodes.isEmpty$()){
var node=remainingNodes.getLast$();
remainingNodes.removeLast$();
var children=node.getChildren$();
var n=children.size$();
if (n > 0) {
for (var i=n - 1; i >= 0; i--) {
remainingNodes.add$O(children.get$I(i));
}
var nodesInSameHelix=Clazz.new_($I$(2,1));
var currentHelix=null;
for (var child, $child = node.getChildren$().iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
var leftNode=child.getValue$().getLeftNode$();
var rightNode=child.getValue$().getRightNode$();
if (leftNode != null  && leftNode.getValue$() != null  ) {
var leftNodeValue=leftNode.getValue$();
if (rightNode != null  && rightNode.getValue$() != null  ) {
var rightNodeValue=rightNode.getValue$();
if (Clazz.instanceOf(rightNodeValue, "fr.orsay.lri.varna.models.templates.RNANodeValueTemplateBrokenBasePair") && C$.canBePartOfABrokenHelix$fr_orsay_lri_varna_models_treealign_RNANodeValue2(leftNodeValue) ) {
var helix=(rightNodeValue).getHelix$();
currentHelix=helix;
tempPKMapping.addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(leftNodeValue.getNode$().getLeftBasePosition$(), helix);
for (var v, $v = nodesInSameHelix.iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
tempPKMapping.addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(v.getNode$().getLeftBasePosition$(), helix);
}
nodesInSameHelix.clear$();
} else {
currentHelix=null;
nodesInSameHelix.clear$();
}} else {
if (C$.canBePartOfABrokenHelix$fr_orsay_lri_varna_models_treealign_RNANodeValue2(leftNodeValue)) {
if (currentHelix != null ) {
tempPKMapping.addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(leftNodeValue.getNode$().getLeftBasePosition$(), currentHelix);
} else {
nodesInSameHelix.add$O(leftNodeValue);
}} else {
currentHelix=null;
nodesInSameHelix.clear$();
}}} else {
currentHelix=null;
nodesInSameHelix.clear$();
}}
}}
for (var element, $element = tempPKMapping.getTargetElemsAsSet$().iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
var helix=element;
var basesInHelix=Clazz.new_([tempPKMapping.getAncestor$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(helix)],$I$(4,1).c$$java_util_Collection);
for (var baseIndex, $baseIndex = basesInHelix.iterator$(); $baseIndex.hasNext$()&&((baseIndex=($baseIndex.next$()).intValue$()),1);) {
System.out.println$S("PK: " + helix + " aligned with " + baseIndex );
var baseOK=false;
var auxBasePairs=rna.getAuxBPs$I(baseIndex);
for (var auxBasePair, $auxBasePair = auxBasePairs.iterator$(); $auxBasePair.hasNext$()&&((auxBasePair=($auxBasePair.next$())),1);) {
var partner5=(auxBasePair.getPartner5$()).getIndex$();
var partner3=(auxBasePair.getPartner3$()).getIndex$();
if (baseIndex == partner5) {
if (basesInHelix.contains$O(new Integer(partner3))) {
baseOK=true;
break;
}} else if (baseIndex == partner3) {
if (basesInHelix.contains$O(new Integer(partner5))) {
baseOK=true;
break;
}}}
if (baseOK) {
mapping.addCouple$I$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(baseIndex, helix);
}}
}
}return mapping;
}, 1);

Clazz.newMeth(C$, 'printMapping$fr_orsay_lri_varna_models_templates_RNATemplateMapping$fr_orsay_lri_varna_models_templates_RNATemplate$S', function (mapping, template, sequence) {
var iter=template.rnaIterator$();
while (iter.hasNext$()){
var element=iter.next$();
System.out.println$S(element.toString());
var A=mapping.getAncestor$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(element);
if (A != null ) {
C$.printIntArrayList$java_util_ArrayList(A);
for (var n=A.size$(), i=0; i < n; i++) {
System.out.print$S("\t" + sequence.charAt$I((A.get$I(i)).valueOf()));
}
System.out.println$S("");
} else {
System.out.println$S("\tno match");
}}
}, 1);

Clazz.newMeth(C$, 'alignRNAWithTemplate$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_templates_RNATemplate', function (rna, template) {
try {
var rnaAsTree=$I$(5).RNATree2FromRNA$fr_orsay_lri_varna_models_rna_RNA(rna);
var templateAsTree=template.toTree$();
var treeAlign=Clazz.new_([Clazz.new_($I$(7,1))],$I$(6,1).c$$fr_orsay_lri_varna_models_treealign_TreeAlignLabelDistanceAsymmetric);
var result=treeAlign.align$fr_orsay_lri_varna_models_treealign_Tree$fr_orsay_lri_varna_models_treealign_Tree(rnaAsTree, templateAsTree);
return result;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.models.treealign.RNATree2Exception")){
var e = e$$;
{
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.templates.RNATemplateDrawingAlgorithmException').c$$S,["RNATree2Exception: " + e.getMessage$()]));
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionInvalidRNATemplate")){
var e = e$$;
{
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.templates.RNATemplateDrawingAlgorithmException').c$$S,["ExceptionInvalidRNATemplate: " + e.getMessage$()]));
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.models.treealign.TreeAlignException")){
var e = e$$;
{
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.templates.RNATemplateDrawingAlgorithmException').c$$S,["TreeAlignException: " + e.getMessage$()]));
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'mapRNAWithTemplate$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_templates_RNATemplate', function (rna, template) {
try {
var alignResult=C$.alignRNAWithTemplate$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_templates_RNATemplate(rna, template);
var mapping=C$.makeTemplateMapping$fr_orsay_lri_varna_models_treealign_TreeAlignResult$fr_orsay_lri_varna_models_rna_RNA(alignResult, rna);
return mapping;
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.models.templates.RNATemplateMappingException")){
e.printStackTrace$();
throw (Clazz.new_(Clazz.load('fr.orsay.lri.varna.models.templates.RNATemplateDrawingAlgorithmException').c$$S,["RNATemplateMappingException: " + e.getMessage$()]));
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'printIntArray$IA', function (A) {
for (var i=0; i < A.length; i++) {
System.out.print$S("\t" + A[i]);
}
System.out.println$S("");
}, 1);

Clazz.newMeth(C$, 'printIntArrayList$java_util_ArrayList', function (A) {
for (var i=0; i < A.size$(); i++) {
System.out.print$S("\t" + A.get$I(i));
}
System.out.println$S("");
}, 1);

Clazz.newMeth(C$, 'printShortMatrix$HAA', function (M) {
System.out.println$S("Begin matrix");
for (var i=0; i < M.length; i++) {
for (var j=0; j < M[i].length; j++) {
System.out.print$S("\t" + M[i][j]);
}
System.out.println$S("");
}
System.out.println$S("End matrix");
}, 1);

Clazz.newMeth(C$, 'intArrayFromList$java_util_List', function (l) {
if (l != null ) {
var n=l.size$();
var result=Clazz.array(Integer.TYPE, [n]);
for (var i=0; i < n; i++) {
result[i]=(l.get$I(i)).valueOf();
}
return result;
} else {
return null;
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
