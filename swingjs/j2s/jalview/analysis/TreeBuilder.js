(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'java.util.Vector','jalview.datamodel.SeqCigar','jalview.datamodel.CigarArray','jalview.datamodel.AlignmentView','java.util.BitSet','jalview.datamodel.SequenceNode']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TreeBuilder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['ri','rj','maxDistValue','maxheight'],'I',['noseqs','noClus','mini','minj','ycount'],'O',['clusters','java.util.Vector','sequences','jalview.datamodel.SequenceI[]','seqData','jalview.datamodel.AlignmentView','done','java.util.BitSet','distances','jalview.math.MatrixI','maxdist','jalview.datamodel.SequenceNode','+top','node','java.util.Vector','seqStrings','jalview.datamodel.AlignmentView']]]

Clazz.newMeth(C$, 'c$$jalview_viewmodel_AlignmentViewport$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI',  function (av, sm, scoreParameters) {
;C$.$init$.apply(this);
var start;
var end;
var selview=av.getSelectionGroup$() != null  && av.getSelectionGroup$().getSize$() > 1 ;
this.seqStrings=av.getAlignmentView$Z(selview);
if (!selview) {
start=0;
end=av.getAlignment$().getWidth$();
this.sequences=av.getAlignment$().getSequencesArray$();
} else {
start=av.getSelectionGroup$().getStartRes$();
end=av.getSelectionGroup$().getEndRes$() + 1;
this.sequences=av.getSelectionGroup$().getSequencesInOrder$jalview_datamodel_AlignmentI(av.getAlignment$());
}this.init$jalview_datamodel_AlignmentView$I$I(this.seqStrings, start, end);
this.computeTree$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI(sm, scoreParameters);
}, 1);

Clazz.newMeth(C$, 'getSequences$',  function () {
return this.sequences;
});

Clazz.newMeth(C$, 'findHeight$jalview_datamodel_SequenceNode',  function (nd) {
if (nd == null ) {
return this.maxheight;
}if ((nd.left$() == null ) && (nd.right$() == null ) ) {
nd.height=(nd.parent$()).height + nd.dist;
if (nd.height > this.maxheight ) {
return nd.height;
} else {
return this.maxheight;
}} else {
if (nd.parent$() != null ) {
nd.height=(nd.parent$()).height + nd.dist;
} else {
this.maxheight=0;
nd.height=0.0;
}this.maxheight=this.findHeight$jalview_datamodel_SequenceNode((nd.left$()));
this.maxheight=this.findHeight$jalview_datamodel_SequenceNode((nd.right$()));
}return this.maxheight;
});

Clazz.newMeth(C$, 'reCount$jalview_datamodel_SequenceNode',  function (nd) {
this.ycount=0;
this._reCount$jalview_datamodel_SequenceNode(nd);
});

Clazz.newMeth(C$, '_reCount$jalview_datamodel_SequenceNode',  function (nd) {
if (nd == null ) {
return;
}if ((nd.left$() != null ) && (nd.right$() != null ) ) {
this._reCount$jalview_datamodel_SequenceNode(nd.left$());
this._reCount$jalview_datamodel_SequenceNode(nd.right$());
var l=nd.left$();
var r=nd.right$();
nd.count=l.count + r.count;
nd.ycount=(l.ycount + r.ycount) / 2;
} else {
nd.count=1;
nd.ycount=this.ycount++;
}});

Clazz.newMeth(C$, 'getTopNode$',  function () {
return this.top;
});

Clazz.newMeth(C$, 'hasDistances$',  function () {
return true;
});

Clazz.newMeth(C$, 'hasBootstrap$',  function () {
return false;
});

Clazz.newMeth(C$, 'hasRootDistance$',  function () {
return true;
});

Clazz.newMeth(C$, 'cluster$',  function () {
while (this.noClus > 2){
this.findMinDistance$();
this.joinClusters$I$I(this.mini, this.minj);
--this.noClus;
}
var rightChild=this.done.nextClearBit$I(0);
var leftChild=this.done.nextClearBit$I(rightChild + 1);
this.joinClusters$I$I(leftChild, rightChild);
this.top=(this.node.elementAt$I(leftChild));
this.reCount$jalview_datamodel_SequenceNode(this.top);
this.findHeight$jalview_datamodel_SequenceNode(this.top);
this.findMaxDist$jalview_datamodel_SequenceNode(this.top);
});

Clazz.newMeth(C$, 'computeTree$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI',  function (sm, scoreOptions) {
this.distances=sm.findDistances$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI(this.seqData, scoreOptions);
this.makeLeaves$();
this.noClus=this.clusters.size$();
this.cluster$();
});

Clazz.newMeth(C$, 'findMaxDist$jalview_datamodel_SequenceNode',  function (nd) {
if (nd == null ) {
return;
}if ((nd.left$() == null ) && (nd.right$() == null ) ) {
var dist=nd.dist;
if (dist > this.maxDistValue ) {
this.maxdist=nd;
this.maxDistValue=dist;
}} else {
this.findMaxDist$jalview_datamodel_SequenceNode(nd.left$());
this.findMaxDist$jalview_datamodel_SequenceNode(nd.right$());
}});

Clazz.newMeth(C$, 'findr$I$I',  function (i, j) {
var tmp=1;
for (var k=0; k < this.noseqs; k++) {
if ((k != i) && (k != j) && (!this.done.get$I(k))  ) {
tmp=tmp + this.distances.getValue$I$I(i, k);
}}
if (this.noClus > 2) {
tmp=tmp / (this.noClus - 2);
}return tmp;
});

Clazz.newMeth(C$, 'init$jalview_datamodel_AlignmentView$I$I',  function (seqView, start, end) {
this.node=Clazz.new_($I$(1,1));
if (seqView != null ) {
this.seqData=seqView;
} else {
var seqs=Clazz.array($I$(2), [this.sequences.length]);
for (var i=0; i < this.sequences.length; i++) {
seqs[i]=Clazz.new_($I$(2,1).c$$jalview_datamodel_SequenceI$I$I,[this.sequences[i], start, end]);
}
var sdata=Clazz.new_($I$(3,1).c$$jalview_datamodel_CigarSimpleA,[seqs]);
sdata.addOperation$C$I("M", end - start + 1);
this.seqData=Clazz.new_($I$(4,1).c$$jalview_datamodel_CigarArray$I,[sdata, start]);
}this.noseqs=0;
this.done=Clazz.new_($I$(5,1));
for (var seq, $seq = 0, $$seq = this.sequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
if (seq != null ) {
++this.noseqs;
}}
});

Clazz.newMeth(C$, 'joinClusters$I$I',  function (i, j) {
var dist=this.distances.getValue$I$I(i, j);
this.ri=this.findr$I$I(i, j);
this.rj=this.findr$I$I(j, i);
this.findClusterDistance$I$I(i, j);
var sn=Clazz.new_($I$(6,1));
sn.setLeft$jalview_datamodel_BinaryNode((this.node.elementAt$I(i)));
sn.setRight$jalview_datamodel_BinaryNode((this.node.elementAt$I(j)));
var tmpi=(this.node.elementAt$I(i));
var tmpj=(this.node.elementAt$I(j));
this.findNewDistances$jalview_datamodel_SequenceNode$jalview_datamodel_SequenceNode$D(tmpi, tmpj, dist);
tmpi.setParent$jalview_datamodel_BinaryNode(sn);
tmpj.setParent$jalview_datamodel_BinaryNode(sn);
this.node.setElementAt$O$I(sn, i);
this.clusters.get$I(i).or$java_util_BitSet(this.clusters.get$I(j));
this.clusters.get$I(j).clear$();
this.done.set$I(j);
});

Clazz.newMeth(C$, 'makeLeaves$',  function () {
this.clusters=Clazz.new_($I$(1,1));
for (var i=0; i < this.noseqs; i++) {
var sn=Clazz.new_($I$(6,1));
sn.setElement$O(this.sequences[i]);
sn.setName$S(this.sequences[i].getName$());
this.node.addElement$O(sn);
var bs=Clazz.new_($I$(5,1));
bs.set$I(i);
this.clusters.addElement$O(bs);
}
});

Clazz.newMeth(C$, 'getOriginalData$',  function () {
return this.seqStrings;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
