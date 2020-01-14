(function(){var P$=Clazz.newPackage("jalview.analysis.scoremodels"),I$=[[0,'jalview.analysis.AlignSeq','jalview.math.Matrix']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SmithWatermanModel", null, 'jalview.analysis.scoremodels.SimilarityScoreModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.description=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'findSimilarities$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI', function (seqData, options) {
var sequenceString=seqData.getVisibleAlignment$C(" ").getSequencesArray$();
var noseqs=sequenceString.length;
var distances=Clazz.array(Double.TYPE, [noseqs, noseqs]);
var max=-1;
for (var i=0; i < (noseqs - 1); i++) {
for (var j=i; j < noseqs; j++) {
var as=Clazz.new_($I$(1).c$$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$S,[sequenceString[i], sequenceString[j], seqData.isNa$() ? "dna" : "pep"]);
as.calcScoreMatrix$();
as.traceAlignment$();
as.printAlignment$java_io_PrintStream(System.out);
distances[i][j]=as.maxscore;
if (max < distances[i][j] ) {
max=distances[i][j];
}}
}
return Clazz.new_($I$(2).c$$DAA,[distances]);
});

Clazz.newMeth(C$, 'getName$', function () {
return "Smith Waterman Score";
});

Clazz.newMeth(C$, 'isDNA$', function () {
return true;
});

Clazz.newMeth(C$, 'isProtein$', function () {
return true;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignmentViewPanel', function (avp) {
return this;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
