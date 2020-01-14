(function(){var P$=Clazz.newPackage("jalview.analysis.scoremodels"),I$=[];
var C$=Clazz.newClass(P$, "SimilarityScoreModel", null, null, 'jalview.api.analysis.ScoreModelI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'findDistances$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI', function (seqData, options) {
var similarities=this.findSimilarities$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI(seqData, options);
var distances=C$.similarityToDistance$jalview_math_MatrixI(similarities);
return distances;
});

Clazz.newMeth(C$, 'similarityToDistance$jalview_math_MatrixI', function (similarities) {
var distances=similarities.copy$();
distances.reverseRange$Z(true);
return distances;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
