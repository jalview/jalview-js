(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),p$1={},I$=[[0,'fr.orsay.lri.varna.models.treealign.Tree',['fr.orsay.lri.varna.models.treealign.TreeAlign','.ConvertTreeToArray'],['fr.orsay.lri.varna.models.treealign.TreeAlign','.TreeData'],'java.util.ArrayList','Error','fr.orsay.lri.varna.models.treealign.AlignedNode','fr.orsay.lri.varna.models.treealign.TreeAlignResult',['fr.orsay.lri.varna.models.treealign.TreeAlign','.Aligner']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TreeAlign", function(){
Clazz.newInstance(this, arguments,0,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.labelDist=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_treealign_TreeAlignLabelDistanceAsymmetric', function (labelDist) {
C$.$init$.apply(this);
this.labelDist=labelDist;
}, 1);

Clazz.newMeth(C$, 'align$fr_orsay_lri_varna_models_treealign_Tree$fr_orsay_lri_varna_models_treealign_Tree', function (T1, T2) {
var result=Clazz.new_($I$(7));
var aligner=Clazz.new_($I$(8).c$$fr_orsay_lri_varna_models_treealign_Tree$fr_orsay_lri_varna_models_treealign_Tree, [this, null, T1, T2]);
result.setDistance$D(aligner.align$());
result.setAlignment$fr_orsay_lri_varna_models_treealign_Tree(aligner.computeAlignment$());
return result;
});

Clazz.newMeth(C$, 'distanceFromAlignment$fr_orsay_lri_varna_models_treealign_Tree', function (alignment) {
var originalT1Node;
var originalT2Node;
originalT1Node=alignment.getValue$().getLeftNode$();
originalT2Node=alignment.getValue$().getRightNode$();
var d=this.labelDist.f$(originalT1Node != null  ? originalT1Node.getValue$() : null, originalT2Node != null  ? originalT2Node.getValue$() : null);
for (var child, $child = alignment.getChildren$().iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
d += this.distanceFromAlignment$fr_orsay_lri_varna_models_treealign_Tree(child);
}
return d;
});
;
(function(){var C$=Clazz.newClass(P$.TreeAlign, "TreeData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tree=null;
this.size=0;
this.degree=0;
this.degrees=null;
this.nodes=null;
this.children=null;
this.values=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.size=-1;
this.degree=-1;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TreeAlign, "ConvertTreeToArray", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nextNodeIndex=0;
this.treeData=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.nextNodeIndex=0;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_treealign_TreeAlign_TreeData', function (treeData) {
C$.$init$.apply(this);
this.treeData=treeData;
}, 1);

Clazz.newMeth(C$, 'convertTreeToArrayAux$fr_orsay_lri_varna_models_treealign_Tree$IA$I', function (subtree, siblingIndexes, siblingNumber) {
var children=subtree.getChildren$();
var numberOfChildren=children.size$();
var childrenIndexes=Clazz.array(Integer.TYPE, [numberOfChildren]);
var myIndex=-1;
{
var i=0;
for (var child, $child = children.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
p$1.convertTreeToArrayAux$fr_orsay_lri_varna_models_treealign_Tree$IA$I.apply(this, [child, childrenIndexes, i]);
i++;
}
}if (numberOfChildren > this.treeData.degree) {
this.treeData.degree=numberOfChildren;
}myIndex=this.nextNodeIndex;
this.nextNodeIndex++;
this.treeData.nodes[myIndex]=subtree;
this.treeData.degrees[myIndex]=numberOfChildren;
var v=subtree.getValue$();
this.treeData.values[myIndex]=v;
siblingIndexes[siblingNumber]=myIndex;
this.treeData.children[myIndex]=childrenIndexes;
}, p$1);

Clazz.newMeth(C$, 'convert$', function () {
this.treeData.degree=0;
this.treeData.size=this.treeData.tree.countNodes$();
this.treeData.nodes=Clazz.array($I$(1), [this.treeData.size]);
this.treeData.children=Clazz.array(Integer.TYPE, [this.treeData.size, null]);
this.treeData.degrees=Clazz.array(Integer.TYPE, [this.treeData.size]);
this.treeData.values=Clazz.array(java.lang.Object, [this.treeData.size]);
var rootIndex=Clazz.array(Integer.TYPE, [1]);
p$1.convertTreeToArrayAux$fr_orsay_lri_varna_models_treealign_Tree$IA$I.apply(this, [this.treeData.tree, rootIndex, 0]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.TreeAlign, "Aligner", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.treeData1=null;
this.treeData2=null;
this.DF1=null;
this.DF2=null;
this.DF1Decisions1=null;
this.DF1Decisions2=null;
this.DF2Decisions1=null;
this.DF2Decisions2=null;
this.DT=null;
this.DTDecisions1=null;
this.DTDecisions2=null;
this.DL=null;
this.DET1=null;
this.DET2=null;
this.DEF1=null;
this.DEF2=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'computeAlignmentP1$I$I$I$I$I$I$I', function (i, s, m_i, j, t, n_j, DFx) {
var DFL;
var DFLDecisions1;
var DFLDecisions2;
DFL=Clazz.array(Float.TYPE, [m_i - s + 2, n_j - t + 2]);
DFL[0][0]=0;
DFLDecisions1=Clazz.array(Byte.TYPE, [m_i - s + 2, n_j - t + 2]);
DFLDecisions2=Clazz.array(Short.TYPE, [m_i - s + 2, n_j - t + 2]);
var i_s=m_i != 0 ? this.treeData1.children[i][s] : -1;
var j_t=n_j != 0 ? this.treeData2.children[j][t] : -1;
for (var p=s; p < m_i; p++) {
DFL[p - s + 1][0]=DFL[p - s][0] + this.DET1[this.treeData1.children[i][p]];
}
for (var q=t; q < n_j; q++) {
DFL[0][q - t + 1]=DFL[0][q - t] + this.DET2[this.treeData2.children[j][q]];
}
for (var p=s; p < m_i; p++) {
var i_p=this.treeData1.children[i][p];
for (var q=t; q < n_j; q++) {
var j_q=this.treeData2.children[j][q];
var min=Infinity;
var decision1=-1;
var decision2=-1;
{
var minCandidate=DFL[p - s][q - t + 1] + this.DET1[i_p];
if (minCandidate < min ) {
min=minCandidate;
decision1=1;
}}{
var minCandidate=DFL[p - s + 1][q - t] + this.DET2[j_q];
if (minCandidate < min ) {
min=minCandidate;
decision1=2;
}}{
var minCandidate=DFL[p - s][q - t] + this.DT[i_p][j_q];
if (minCandidate < min ) {
min=minCandidate;
decision1=3;
}}{
var minCandidate=Infinity;
var best_k=-1;
for (var k=s; k < p; k++) {
var d=DFL[k - s][q - t] + this.DF2[j_q][this.treeData1.children[i][k]][p - k + 1][this.treeData2.degrees[j_q]];
if (d < minCandidate ) {
minCandidate=d;
best_k=k;
}}
minCandidate += this.DL[this.treeData1.size][j_q];
if (minCandidate < min ) {
min=minCandidate;
decision1=4;
decision2=best_k;
}}{
var minCandidate=Infinity;
var best_k=-1;
for (var k=t; k < q; k++) {
var d=DFL[p - s][k - t] + this.DF1[i_p][this.treeData2.children[j][k]][this.treeData1.degrees[i_p]][q - k + 1];
if (d < minCandidate ) {
minCandidate=d;
best_k=k;
}}
minCandidate += this.DL[i_p][this.treeData2.size];
if (minCandidate < min ) {
min=minCandidate;
decision1=5;
decision2=best_k;
}}DFL[p - s + 1][q - t + 1]=min;
DFLDecisions1[p - s + 1][q - t + 1]=((decision1|0)|0);
DFLDecisions2[p - s + 1][q - t + 1]=(decision2|0);
}
}
if (DFx == 2) {
this.DF2[j][i_s]=DFL;
this.DF2Decisions1[j][i_s]=DFLDecisions1;
this.DF2Decisions2[j][i_s]=DFLDecisions2;
} else {
this.DF1[i][j_t]=DFL;
this.DF1Decisions1[i][j_t]=DFLDecisions1;
this.DF1Decisions2[i][j_t]=DFLDecisions2;
}}, p$1);

Clazz.newMeth(C$, 'align$', function () {
(Clazz.new_($I$(2).c$$fr_orsay_lri_varna_models_treealign_TreeAlign_TreeData, [this, null, this.treeData1])).convert$();
(Clazz.new_($I$(2).c$$fr_orsay_lri_varna_models_treealign_TreeAlign_TreeData, [this, null, this.treeData2])).convert$();
this.DT=Clazz.array(Float.TYPE, [this.treeData1.size, this.treeData2.size]);
this.DTDecisions1=Clazz.array(Byte.TYPE, [this.treeData1.size, this.treeData2.size]);
this.DTDecisions2=Clazz.array(Short.TYPE, [this.treeData1.size, this.treeData2.size]);
this.DL=Clazz.array(Float.TYPE, [this.treeData1.size + 1, this.treeData2.size + 1]);
this.DET1=Clazz.array(Float.TYPE, [this.treeData1.size]);
this.DET2=Clazz.array(Float.TYPE, [this.treeData2.size]);
this.DEF1=Clazz.array(Float.TYPE, [this.treeData1.size]);
this.DEF2=Clazz.array(Float.TYPE, [this.treeData2.size]);
this.DF1=Clazz.array(Float.TYPE, [this.treeData1.size, this.treeData2.size, null, null]);
this.DF1Decisions1=Clazz.array(Byte.TYPE, [this.treeData1.size, this.treeData2.size, null, null]);
this.DF1Decisions2=Clazz.array(Short.TYPE, [this.treeData1.size, this.treeData2.size, null, null]);
this.DF2=Clazz.array(Float.TYPE, [this.treeData2.size, this.treeData1.size, null, null]);
this.DF2Decisions1=Clazz.array(Byte.TYPE, [this.treeData2.size, this.treeData1.size, null, null]);
this.DF2Decisions2=Clazz.array(Short.TYPE, [this.treeData2.size, this.treeData1.size, null, null]);
this.DL[this.treeData1.size][this.treeData2.size]=this.this$0.labelDist.f$(null, null);
for (var i=0; i < this.treeData1.size; i++) {
var m_i=this.treeData1.degrees[i];
this.DEF1[i]=0;
for (var k=0; k < m_i; k++) {
this.DEF1[i] += this.DET1[this.treeData1.children[i][k]];
}
this.DL[i][this.treeData2.size]=this.this$0.labelDist.f$(this.treeData1.values[i], null);
this.DET1[i]=this.DEF1[i] + this.DL[i][this.treeData2.size];
}
for (var j=0; j < this.treeData2.size; j++) {
var n_j=this.treeData2.degrees[j];
this.DEF2[j]=0;
for (var k=0; k < n_j; k++) {
this.DEF2[j] += this.DET2[this.treeData2.children[j][k]];
}
this.DL[this.treeData1.size][j]=this.this$0.labelDist.f$(null, this.treeData2.values[j]);
this.DET2[j]=this.DEF2[j] + this.DL[this.treeData1.size][j];
}
for (var i=0; i < this.treeData1.size; i++) {
var m_i=this.treeData1.degrees[i];
for (var j=0; j < this.treeData2.size; j++) {
var n_j=this.treeData2.degrees[j];
this.DL[i][j]=this.this$0.labelDist.f$(this.treeData1.values[i], this.treeData2.values[j]);
for (var s=0; s < m_i; s++) {
p$1.computeAlignmentP1$I$I$I$I$I$I$I.apply(this, [i, s, m_i, j, 0, n_j, 2]);
}
for (var t=0; t < n_j; t++) {
p$1.computeAlignmentP1$I$I$I$I$I$I$I.apply(this, [i, 0, m_i, j, t, n_j, 1]);
}
this.DT[i][j]=Infinity;
{
var minCandidate=Infinity;
var best_r=-1;
for (var r=0; r < n_j; r++) {
var d=this.DT[i][this.treeData2.children[j][r]] - this.DET2[this.treeData2.children[j][r]];
if (d < minCandidate ) {
minCandidate=d;
best_r=r;
}}
minCandidate += this.DET2[j];
if (minCandidate < this.DT[i][j] ) {
this.DT[i][j]=minCandidate;
this.DTDecisions1[i][j]=(1|0);
this.DTDecisions2[i][j]=(best_r|0);
}}{
var minCandidate=Infinity;
var best_r=-1;
for (var r=0; r < m_i; r++) {
var d=this.DT[this.treeData1.children[i][r]][j] - this.DET1[this.treeData1.children[i][r]];
if (d < minCandidate ) {
minCandidate=d;
best_r=r;
}}
minCandidate += this.DET1[i];
if (minCandidate < this.DT[i][j] ) {
this.DT[i][j]=minCandidate;
this.DTDecisions1[i][j]=(2|0);
this.DTDecisions2[i][j]=(best_r|0);
}}{
var minCandidate;
if (n_j != 0) {
minCandidate=this.DF1[i][this.treeData2.children[j][0]][m_i][n_j];
} else {
if (m_i != 0) {
minCandidate=this.DF2[j][this.treeData1.children[i][0]][m_i][n_j];
} else {
minCandidate=0;
}}minCandidate += this.DL[i][j];
if (minCandidate < this.DT[i][j] ) {
this.DT[i][j]=minCandidate;
this.DTDecisions1[i][j]=(3|0);
}}}
}
return this.DT[this.treeData1.size - 1][this.treeData2.size - 1];
});

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_treealign_Tree$fr_orsay_lri_varna_models_treealign_Tree', function (T1, T2) {
C$.$init$.apply(this);
this.treeData1=Clazz.new_($I$(3), [this, null]);
this.treeData1.tree=T1;
this.treeData2=Clazz.new_($I$(3), [this, null]);
this.treeData2.tree=T2;
}, 1);

Clazz.newMeth(C$, 'computeForestAlignment$I$I$I$I$I$I', function (i, s, p, j, t, q) {
if (p == s - 1) {
var result=Clazz.new_($I$(4));
for (var k=t; k <= q; k++) {
result.add$TE(p$1.treeInserted$I.apply(this, [this.treeData2.children[j][k]]));
}
return result;
} else {
if (q == t - 1) {
var result=Clazz.new_($I$(4));
for (var k=s; k <= p; k++) {
result.add$TE(p$1.treeDeleted$I.apply(this, [this.treeData1.children[i][k]]));
}
return result;
} else {
var decision1;
var k;
if (s == 0) {
decision1=this.DF1Decisions1[i][this.treeData2.children[j][t]][p - s + 1][q - t + 1];
k=this.DF1Decisions2[i][this.treeData2.children[j][t]][p - s + 1][q - t + 1];
} else if (t == 0) {
decision1=this.DF2Decisions1[j][this.treeData1.children[i][s]][p - s + 1][q - t + 1];
k=this.DF2Decisions2[j][this.treeData1.children[i][s]][p - s + 1][q - t + 1];
} else {
throw (Clazz.new_($I$(5).c$$S,["TreeAlignSymmetric bug: both s and t are non-zero"]));
}switch (decision1) {
case 1:
{
var result;
result=p$1.computeForestAlignment$I$I$I$I$I$I.apply(this, [i, s, p - 1, j, t, q]);
result.add$TE(p$1.treeDeleted$I.apply(this, [this.treeData1.children[i][p]]));
return result;
}case 2:
{
var result;
result=p$1.computeForestAlignment$I$I$I$I$I$I.apply(this, [i, s, p, j, t, q - 1]);
result.add$TE(p$1.treeInserted$I.apply(this, [this.treeData2.children[j][q]]));
return result;
}case 3:
{
var result;
result=p$1.computeForestAlignment$I$I$I$I$I$I.apply(this, [i, s, p - 1, j, t, q - 1]);
result.add$TE(p$1.computeTreeAlignment$I$I.apply(this, [this.treeData1.children[i][p], this.treeData2.children[j][q]]));
return result;
}case 4:
{
var result;
result=p$1.computeForestAlignment$I$I$I$I$I$I.apply(this, [i, s, k - 1, j, t, q - 1]);
var j_q=this.treeData2.children[j][q];
var insertedNode=Clazz.new_($I$(1));
var insertedNodeValue=Clazz.new_($I$(6));
insertedNodeValue.setLeftNode$fr_orsay_lri_varna_models_treealign_Tree(null);
insertedNodeValue.setRightNode$fr_orsay_lri_varna_models_treealign_Tree(this.treeData2.nodes[j_q]);
insertedNode.setValue$TT(insertedNodeValue);
insertedNode.replaceChildrenListBy$java_util_List(p$1.computeForestAlignment$I$I$I$I$I$I.apply(this, [i, k, p, j_q, 0, this.treeData2.degrees[j_q] - 1]));
result.add$TE(insertedNode);
return result;
}case 5:
{
var result;
result=p$1.computeForestAlignment$I$I$I$I$I$I.apply(this, [i, s, p - 1, j, t, k - 1]);
var i_p=this.treeData1.children[i][p];
var deletedNode=Clazz.new_($I$(1));
var deletedNodeValue=Clazz.new_($I$(6));
deletedNodeValue.setLeftNode$fr_orsay_lri_varna_models_treealign_Tree(this.treeData1.nodes[i_p]);
deletedNodeValue.setRightNode$fr_orsay_lri_varna_models_treealign_Tree(null);
deletedNode.setValue$TT(deletedNodeValue);
deletedNode.replaceChildrenListBy$java_util_List(p$1.computeForestAlignment$I$I$I$I$I$I.apply(this, [i_p, 0, this.treeData1.degrees[i_p] - 1, j, k, q]));
result.add$TE(deletedNode);
return result;
}default:
throw (Clazz.new_($I$(5).c$$S,["TreeAlign: decision1 = " + decision1]));
}
}}}, p$1);

Clazz.newMeth(C$, 'treeDeleted$I', function (i) {
var root=Clazz.new_($I$(1));
var alignedNode=Clazz.new_($I$(6));
alignedNode.setLeftNode$fr_orsay_lri_varna_models_treealign_Tree(this.treeData1.nodes[i]);
alignedNode.setRightNode$fr_orsay_lri_varna_models_treealign_Tree(null);
root.setValue$TT(alignedNode);
for (var r=0; r < this.treeData1.degrees[i]; r++) {
root.getChildren$().add$TE(p$1.treeDeleted$I.apply(this, [this.treeData1.children[i][r]]));
}
return root;
}, p$1);

Clazz.newMeth(C$, 'treeInserted$I', function (j) {
var root=Clazz.new_($I$(1));
var alignedNode=Clazz.new_($I$(6));
alignedNode.setLeftNode$fr_orsay_lri_varna_models_treealign_Tree(null);
alignedNode.setRightNode$fr_orsay_lri_varna_models_treealign_Tree(this.treeData2.nodes[j]);
root.setValue$TT(alignedNode);
for (var r=0; r < this.treeData2.degrees[j]; r++) {
root.getChildren$().add$TE(p$1.treeInserted$I.apply(this, [this.treeData2.children[j][r]]));
}
return root;
}, p$1);

Clazz.newMeth(C$, 'computeTreeAlignment$I$I', function (i, j) {
switch (this.DTDecisions1[i][j]) {
case 1:
{
var root=Clazz.new_($I$(1));
var alignedNode=Clazz.new_($I$(6));
alignedNode.setLeftNode$fr_orsay_lri_varna_models_treealign_Tree(null);
alignedNode.setRightNode$fr_orsay_lri_varna_models_treealign_Tree(this.treeData2.nodes[j]);
root.setValue$TT(alignedNode);
for (var r=0; r < this.treeData2.degrees[j]; r++) {
if (r == this.DTDecisions2[i][j]) {
root.getChildren$().add$TE(p$1.computeTreeAlignment$I$I.apply(this, [i, this.treeData2.children[j][r]]));
} else {
root.getChildren$().add$TE(p$1.treeInserted$I.apply(this, [this.treeData2.children[j][r]]));
}}
return root;
}case 2:
{
var root=Clazz.new_($I$(1));
var alignedNode=Clazz.new_($I$(6));
alignedNode.setLeftNode$fr_orsay_lri_varna_models_treealign_Tree(this.treeData1.nodes[i]);
alignedNode.setRightNode$fr_orsay_lri_varna_models_treealign_Tree(null);
root.setValue$TT(alignedNode);
for (var r=0; r < this.treeData1.degrees[i]; r++) {
if (r == this.DTDecisions2[i][j]) {
root.getChildren$().add$TE(p$1.computeTreeAlignment$I$I.apply(this, [this.treeData1.children[i][r], j]));
} else {
root.getChildren$().add$TE(p$1.treeDeleted$I.apply(this, [this.treeData1.children[i][r]]));
}}
return root;
}case 3:
{
var root=Clazz.new_($I$(1));
var alignedNode=Clazz.new_($I$(6));
alignedNode.setLeftNode$fr_orsay_lri_varna_models_treealign_Tree(this.treeData1.nodes[i]);
alignedNode.setRightNode$fr_orsay_lri_varna_models_treealign_Tree(this.treeData2.nodes[j]);
root.setValue$TT(alignedNode);
var children=p$1.computeForestAlignment$I$I$I$I$I$I.apply(this, [i, 0, this.treeData1.degrees[i] - 1, j, 0, this.treeData2.degrees[j] - 1]);
root.replaceChildrenListBy$java_util_List(children);
return root;
}default:
throw (Clazz.new_($I$(5).c$$S,["TreeAlign: DTDecisions1[i][j] = " + this.DTDecisions1[i][j]]));
}
}, p$1);

Clazz.newMeth(C$, 'computeAlignment$', function () {
return p$1.computeTreeAlignment$I$I.apply(this, [this.treeData1.size - 1, this.treeData2.size - 1]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
