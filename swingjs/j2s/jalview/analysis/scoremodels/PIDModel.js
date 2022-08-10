(function(){var P$=Clazz.newPackage("jalview.analysis.scoremodels"),I$=[[0,'jalview.util.Comparison','jalview.math.Matrix']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PIDModel", null, 'jalview.analysis.scoremodels.SimilarityScoreModel', 'jalview.api.analysis.PairwiseScoreModelI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return "PID";
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return null;
});

Clazz.newMeth(C$, 'isDNA$',  function () {
return true;
});

Clazz.newMeth(C$, 'isProtein$',  function () {
return true;
});

Clazz.newMeth(C$, 'getPairwiseScore$C$C',  function (c, d) {
c=C$.toUpper$C(c);
d=C$.toUpper$C(d);
if (c == d && !$I$(1).isGap$C(c) ) {
return 1.0;
}return 0.0;
});

Clazz.newMeth(C$, 'toUpper$C',  function (c) {
if ("a" <= c && c <= "z" ) {
c = String.fromCharCode(c.$c()+ -32);
}return c;
}, 1);

Clazz.newMeth(C$, 'findSimilarities$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI',  function (seqData, options) {
var seqs=seqData.getSequenceStrings$C("-");
var result=this.findSimilarities$SA$jalview_api_analysis_SimilarityParamsI(seqs, options);
result.multiply$D(seqData.getWidth$() / 100.0);
return result;
});

Clazz.newMeth(C$, 'findDistances$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI',  function (seqData, options) {
var result=C$.superclazz.prototype.findDistances$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI.apply(this, [seqData, options]);
if (seqData.getWidth$() != 0) {
result.multiply$D(100.0 / seqData.getWidth$());
}return result;
});

Clazz.newMeth(C$, 'findSimilarities$SA$jalview_api_analysis_SimilarityParamsI',  function (seqs, options) {
var values=Clazz.array(Double.TYPE, [seqs.length, seqs.length]);
for (var row=0; row < seqs.length; row++) {
for (var col=row; col < seqs.length; col++) {
var total=C$.computePID$S$S$jalview_api_analysis_SimilarityParamsI(seqs[row], seqs[col], options);
values[row][col]=total;
values[col][row]=total;
}
}
return Clazz.new_($I$(2,1).c$$DAA,[values]);
});

Clazz.newMeth(C$, 'computePID$S$S$jalview_api_analysis_SimilarityParamsI',  function (seq1, seq2, options) {
var len1=seq1.length$();
var len2=seq2.length$();
var width=Math.max(len1, len2);
var total=0;
var divideBy=0;
for (var i=0; i < width; i++) {
if (i >= len1 || i >= len2 ) {
if (options.denominateByShortestLength$()) {
break;
}if (options.includeGaps$()) {
++divideBy;
}if (options.matchGaps$()) {
++total;
}continue;
}var c1=seq1.charAt$I(i);
var c2=seq2.charAt$I(i);
var gap1=$I$(1).isGap$C(c1);
var gap2=$I$(1).isGap$C(c2);
if (gap1 && gap2 ) {
if (options.includeGappedColumns$()) {
++divideBy;
++total;
}continue;
}if (gap1 || gap2 ) {
if (options.includeGaps$()) {
++divideBy;
}if (options.matchGaps$()) {
++total;
}continue;
}if (C$.toUpper$C(c1) == C$.toUpper$C(c2)) {
++total;
}++divideBy;
}
return divideBy == 0 ? 0.0 : 100.0 * total / divideBy;
}, 1);

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignmentViewPanel',  function (avp) {
return this;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
