(function(){var P$=Clazz.newPackage("jalview.analysis.scoremodels"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DistanceScoreModel", null, null, 'jalview.api.analysis.ScoreModelI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'findSimilarities$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI', function (seqData, options) {
var distances=this.findDistances$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI(seqData, options);
var similarities=C$.distanceToSimilarity$jalview_math_MatrixI(distances);
return similarities;
});

Clazz.newMeth(C$, 'distanceToSimilarity$jalview_math_MatrixI', function (distances) {
var similarities=distances.copy$();
similarities.reverseRange$Z(false);
return similarities;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
