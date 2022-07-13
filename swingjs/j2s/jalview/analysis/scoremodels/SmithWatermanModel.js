(function(){var P$=Clazz.newPackage("jalview.analysis.scoremodels"),I$=[[0,'jalview.analysis.AlignSeq','jalview.math.Matrix']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SmithWatermanModel", null, 'jalview.analysis.scoremodels.SimilarityScoreModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['description']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'findSimilarities$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI',  function (seqData, options) {
var sequenceString=seqData.getVisibleAlignment$C(" ").getSequencesArray$();
var noseqs=sequenceString.length;
var distances=Clazz.array(Double.TYPE, [noseqs, noseqs]);
var max=-1;
for (var i=0; i < (noseqs - 1); i++) {
for (var j=i; j < noseqs; j++) {
var as=Clazz.new_([sequenceString[i], sequenceString[j], seqData.isNa$() ? "dna" : "pep"],$I$(1,1).c$$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$S);
as.calcScoreMatrix$();
as.traceAlignment$();
as.printAlignment$java_io_PrintStream(System.out);
distances[i][j]=as.maxscore;
if (max < distances[i][j] ) {
max=distances[i][j];
}}
}
return Clazz.new_($I$(2,1).c$$DAA,[distances]);
});

Clazz.newMeth(C$, 'getName$',  function () {
return "Smith Waterman Score";
});

Clazz.newMeth(C$, 'isDNA$',  function () {
return true;
});

Clazz.newMeth(C$, 'isProtein$',  function () {
return true;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignmentViewPanel',  function (avp) {
return this;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
