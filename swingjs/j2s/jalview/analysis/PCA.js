(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'jalview.datamodel.Point','StringBuilder','jalview.bin.Console','java.io.PrintStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PCA", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['seqs','jalview.datamodel.AlignmentView','scoreModel','jalview.api.analysis.ScoreModelI','similarityParams','jalview.api.analysis.SimilarityParamsI','pairwiseScores','jalview.math.MatrixI','+tridiagonal','+eigenMatrix']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentView$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI',  function (sequences, sm, options) {
;C$.$init$.apply(this);
this.seqs=sequences;
this.scoreModel=sm;
this.similarityParams=options;
}, 1);

Clazz.newMeth(C$, 'getEigenvalue$I',  function (i) {
return this.eigenMatrix.getD$()[i];
});

Clazz.newMeth(C$, 'getComponents$I$I$I$F',  function (l, n, mm, factor) {
var out=Clazz.array($I$(1), [this.getHeight$()]);
for (var i=0; i < this.getHeight$(); i++) {
var x=this.component$I$I(i, l) * factor;
var y=this.component$I$I(i, n) * factor;
var z=this.component$I$I(i, mm) * factor;
out[i]=Clazz.new_($I$(1,1).c$$F$F$F,[x, y, z]);
}
return out;
});

Clazz.newMeth(C$, 'component$I',  function (n) {
var out=Clazz.array(Double.TYPE, [this.getHeight$()]);
for (var i=0; i < out.length; i++) {
out[i]=this.component$I$I(i, n);
}
return out;
});

Clazz.newMeth(C$, 'component$I$I',  function (row, n) {
var out=0.0;
for (var i=0; i < this.pairwiseScores.width$(); i++) {
out+=(this.pairwiseScores.getValue$I$I(row, i) * this.eigenMatrix.getValue$I$I(i, n));
}
return out / this.eigenMatrix.getD$()[n];
});

Clazz.newMeth(C$, 'getDetails$',  function () {
var sb=Clazz.new_($I$(2,1).c$$I,[1024]);
sb.append$S("PCA calculation using ").append$S(this.scoreModel.getName$()).append$S(" sequence similarity matrix\n========\n\n");
var ps=this.wrapOutputBuffer$StringBuilder(sb);
sb.append$S(" --- OrigT * Orig ---- \n");
this.pairwiseScores.print$java_io_PrintStream$S(ps, "%8.2f");
sb.append$S(" ---Tridiag transform matrix ---\n");
sb.append$S(" --- D vector ---\n");
this.tridiagonal.printD$java_io_PrintStream$S(ps, "%15.4e");
ps.println$();
sb.append$S("--- E vector ---\n");
this.tridiagonal.printE$java_io_PrintStream$S(ps, "%15.4e");
ps.println$();
sb.append$S(" --- New diagonalization matrix ---\n");
this.eigenMatrix.print$java_io_PrintStream$S(ps, "%8.2f");
sb.append$S(" --- Eigenvalues ---\n");
this.eigenMatrix.printD$java_io_PrintStream$S(ps, "%15.4e");
ps.println$();
return sb.toString();
});

Clazz.newMeth(C$, 'run$',  function () {
try {
this.pairwiseScores=this.scoreModel.findSimilarities$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI(this.seqs, this.similarityParams);
this.tridiagonal=this.pairwiseScores.copy$();
this.tridiagonal.tred$();
this.eigenMatrix=this.tridiagonal.copy$();
this.eigenMatrix.tqli$();
} catch (q) {
if (Clazz.exceptionOf(q,"Exception")){
$I$(3,"error$S",["Error computing PCA:  " + q.getMessage$()]);
q.printStackTrace$();
} else {
throw q;
}
}
});

Clazz.newMeth(C$, 'wrapOutputBuffer$StringBuilder',  function (sb) {
var ps=((P$.PCA$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PCA$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.PrintStream'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'print$S',  function (x) {
this.$finals$.sb.append$S(x);
});

Clazz.newMeth(C$, 'println$',  function () {
this.$finals$.sb.append$S("\n");
});
})()
), Clazz.new_($I$(4,1).c$$java_io_OutputStream,[this, {sb:sb}, System.out],P$.PCA$1));
return ps;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.pairwiseScores.height$();
});

Clazz.newMeth(C$, 'getPairwiseScores$',  function () {
return this.pairwiseScores;
});

Clazz.newMeth(C$, 'setPairwiseScores$jalview_math_MatrixI',  function (m) {
this.pairwiseScores=m;
});

Clazz.newMeth(C$, 'getEigenmatrix$',  function () {
return this.eigenMatrix;
});

Clazz.newMeth(C$, 'setEigenmatrix$jalview_math_MatrixI',  function (m) {
this.eigenMatrix=m;
});

Clazz.newMeth(C$, 'getTridiagonal$',  function () {
return this.tridiagonal;
});

Clazz.newMeth(C$, 'setTridiagonal$jalview_math_MatrixI',  function (tridiagonal) {
this.tridiagonal=tridiagonal;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:26 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
