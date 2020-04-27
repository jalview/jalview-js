(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NJTree", null, 'jalview.analysis.TreeBuilder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$jalview_viewmodel_AlignmentViewport$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI', function (av, sm, scoreParameters) {
;C$.superclazz.c$$jalview_viewmodel_AlignmentViewport$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI.apply(this,[av, sm, scoreParameters]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'findMinDistance$', function () {
var min=1.7976931348623157E308;
for (var i=0; i < (this.noseqs - 1); i++) {
for (var j=i + 1; j < this.noseqs; j++) {
if (!this.done.get$I(i) && !this.done.get$I(j) ) {
var tmp=this.distances.getValue$I$I(i, j) - (this.findr$I$I(i, j) + this.findr$I$I(j, i));
if (tmp < min ) {
this.mini=i;
this.minj=j;
min=tmp;
}}}
}
return min;
});

Clazz.newMeth(C$, 'findNewDistances$jalview_datamodel_SequenceNode$jalview_datamodel_SequenceNode$D', function (nodei, nodej, dist) {
nodei.dist=((dist + this.ri) - this.rj) / 2;
nodej.dist=(dist - nodei.dist);
if (nodei.dist < 0 ) {
nodei.dist=0;
}if (nodej.dist < 0 ) {
nodej.dist=0;
}});

Clazz.newMeth(C$, 'findClusterDistance$I$I', function (i, j) {
var newdist=Clazz.array(Double.TYPE, [this.noseqs]);
var ijDistance=this.distances.getValue$I$I(i, j);
for (var l=0; l < this.noseqs; l++) {
if ((l != i) && (l != j) ) {
newdist[l]=(this.distances.getValue$I$I(i, l) + this.distances.getValue$I$I(j, l) - ijDistance) / 2;
} else {
newdist[l]=0;
}}
for (var ii=0; ii < this.noseqs; ii++) {
this.distances.setValue$I$I$D(i, ii, newdist[ii]);
this.distances.setValue$I$I$D(ii, i, newdist[ii]);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
