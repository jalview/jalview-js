(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AverageDistanceTree", null, 'jalview.analysis.TreeBuilder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$jalview_viewmodel_AlignmentViewport$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI',  function (av, sm, scoreParameters) {
;C$.superclazz.c$$jalview_viewmodel_AlignmentViewport$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI.apply(this,[av, sm, scoreParameters]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'findClusterDistance$I$I',  function (i, j) {
var noi=this.clusters.elementAt$I(i).cardinality$();
var noj=this.clusters.elementAt$I(j).cardinality$();
var newdist=Clazz.array(Double.TYPE, [this.noseqs]);
for (var l=0; l < this.noseqs; l++) {
if ((l != i) && (l != j) ) {
newdist[l]=((this.distances.getValue$I$I(i, l) * noi) + (this.distances.getValue$I$I(j, l) * noj)) / (noi + noj);
} else {
newdist[l]=0;
}}
for (var ii=0; ii < this.noseqs; ii++) {
this.distances.setValue$I$I$D(i, ii, newdist[ii]);
this.distances.setValue$I$I$D(ii, i, newdist[ii]);
}
});

Clazz.newMeth(C$, 'findMinDistance$',  function () {
var min=1.7976931348623157E308;
for (var i=0; i < (this.noseqs - 1); i++) {
for (var j=i + 1; j < this.noseqs; j++) {
if (!this.done.get$I(i) && !this.done.get$I(j) ) {
if (this.distances.getValue$I$I(i, j) < min ) {
this.mini=i;
this.minj=j;
min=this.distances.getValue$I$I(i, j);
}}}
}
return min;
});

Clazz.newMeth(C$, 'findNewDistances$jalview_datamodel_SequenceNode$jalview_datamodel_SequenceNode$D',  function (nodei, nodej, dist) {
var ih=0;
var jh=0;
var sni=nodei;
var snj=nodej;
while (sni != null ){
ih=ih + sni.dist;
sni=sni.left$();
}
while (snj != null ){
jh=jh + snj.dist;
snj=snj.left$();
}
nodei.dist=((dist / 2) - ih);
nodej.dist=((dist / 2) - jh);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:25 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
