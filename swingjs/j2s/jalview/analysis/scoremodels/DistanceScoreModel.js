(function(){var P$=Clazz.newPackage("jalview.analysis.scoremodels"),I$=[];
var C$=Clazz.newClass(P$, "DistanceScoreModel", null, null, 'jalview.api.analysis.ScoreModelI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
