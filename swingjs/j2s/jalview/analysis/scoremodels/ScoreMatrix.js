(function(){var P$=Clazz.newPackage("jalview.analysis.scoremodels"),p$1={},I$=[[0,'java.util.Arrays','StringBuilder','jalview.math.Matrix','jalview.util.Comparison']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScoreMatrix", null, 'jalview.analysis.scoremodels.SimilarityScoreModel', 'jalview.api.analysis.PairwiseScoreModelI');
C$.scoreGapAsAny=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.scoreGapAsAny=false;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.description=null;
this.symbols=null;
this.matrix=null;
this.symbolIndex=null;
this.peptide=false;
this.minValue=0;
this.maxValue=0;
this.symmetric=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$CA$FAA', function (theName, alphabet, values) {
C$.c$$S$S$CA$FAA.apply(this, [theName, null, alphabet, values]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$CA$FAA', function (theName, theDescription, alphabet, values) {
Clazz.super_(C$, this,1);
if (alphabet.length != values.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["score matrix size must match alphabet size"]);
}for (var row, $row = 0, $$row = values; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
if (row.length != alphabet.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["score matrix size must be square"]);
}}
this.matrix=values;
this.name=theName;
this.description=theDescription;
this.symbols=alphabet;
this.symbolIndex=this.buildSymbolIndex$CA(alphabet);
this.findMinMax$();
this.symmetric=p$1.checkSymmetry.apply(this, []);
this.peptide=alphabet.length >= 20;
}, 1);

Clazz.newMeth(C$, 'checkSymmetry', function () {
for (var i=0; i < this.matrix.length; i++) {
for (var j=i; j < this.matrix.length; j++) {
if (this.matrix[i][j] != this.matrix[j][i] ) {
return false;
}}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'findMinMax$', function () {
var min=3.4028235E38;
var max=-3.4028235E38;
if (this.matrix != null ) {
for (var row, $row = 0, $$row = this.matrix; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
if (row != null ) {
for (var f, $f = 0, $$f = row; $f<$$f.length&&((f=($$f[$f])),1);$f++) {
min=Math.min(min, f);
max=Math.max(max, f);
}
}}
}this.minValue=min;
this.maxValue=max;
});

Clazz.newMeth(C$, 'buildSymbolIndex$CA', function (alphabet) {
var index=Clazz.array(Short.TYPE, [128]);
$I$(1).fill$HA$H(index, -1);
var pos=($s$[0] = 0, $s$[0]);
for (var c, $c = 0, $$c = alphabet; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c.$c() <= 127 ) {
index[c.$c()]=pos;
}if (c >= "A" && c <= "Z" ) {
var lowerCase=($s$[0] = (c.$c() + (32)), $s$[0]);
if (index[lowerCase] == -1) {
index[lowerCase]=pos;
}}($s$[0]=pos,pos=(++$s$[0],$s$[0]));
}
return index;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'isDNA$', function () {
return !this.peptide;
});

Clazz.newMeth(C$, 'isProtein$', function () {
return this.peptide;
});

Clazz.newMeth(C$, 'getMatrix$', function () {
var v=Clazz.array(Float.TYPE, [this.matrix.length, this.matrix.length]);
for (var i=0; i < this.matrix.length; i++) {
v[i]=$I$(1).copyOf$FA$I(this.matrix[i], this.matrix[i].length);
}
return v;
});

Clazz.newMeth(C$, 'getMatrixIndex$C', function (c) {
if (c.$c() < this.symbolIndex.length ) {
return this.symbolIndex[c.$c()];
} else {
return -1;
}});

Clazz.newMeth(C$, ['getPairwiseScore$C$C','getPairwiseScore$'], function (c, d) {
if (c.$c() >= this.symbolIndex.length ) {
System.err.println$S(String.format$S$OA("Unexpected character %s in getPairwiseScore", [new Character(c)]));
return 0;
}if (d.$c() >= this.symbolIndex.length ) {
System.err.println$S(String.format$S$OA("Unexpected character %s in getPairwiseScore", [new Character(d)]));
return 0;
}var cIndex=this.symbolIndex[c.$c()];
var dIndex=this.symbolIndex[d.$c()];
if (cIndex != -1 && dIndex != -1 ) {
return this.matrix[cIndex][dIndex];
}return c == d ? 1 : this.getMinimumScore$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.outputMatrix$Z(false);
});

Clazz.newMeth(C$, 'outputMatrix$Z', function (html) {
var sb=Clazz.new_($I$(2).c$$I,[512]);
if (html) {
sb.append$S("<table border=\"1\">");
sb.append$S(html ? "<tr><th></th>" : "");
} else {
sb.append$S("ScoreMatrix ").append$S(this.getName$()).append$S("\n");
}for (var sym, $sym = 0, $$sym = this.symbols; $sym<$$sym.length&&((sym=($$sym[$sym])),1);$sym++) {
if (html) {
sb.append$S("<th>&nbsp;").append$C(sym).append$S("&nbsp;</th>");
} else {
sb.append$S("\t").append$C(sym);
}}
sb.append$S(html ? "</tr>\n" : "\n");
for (var c1, $c1 = 0, $$c1 = this.symbols; $c1<$$c1.length&&((c1=($$c1[$c1])),1);$c1++) {
if (html) {
sb.append$S("<tr><td>");
}sb.append$C(c1).append$S(html ? "</td>" : "");
for (var c2, $c2 = 0, $$c2 = this.symbols; $c2<$$c2.length&&((c2=($$c2[$c2])),1);$c2++) {
sb.append$S(html ? "<td>" : "\t").append$F(this.matrix[this.symbolIndex[c1.$c()]][this.symbolIndex[c2.$c()]]).append$S(html ? "</td>" : "");
}
sb.append$S(html ? "</tr>\n" : "\n");
}
if (html) {
sb.append$S("</table>");
}return sb.toString();
});

Clazz.newMeth(C$, 'getSize$', function () {
return this.symbols.length;
});

Clazz.newMeth(C$, 'findSimilarities$jalview_datamodel_AlignmentView$jalview_api_analysis_SimilarityParamsI', function (seqstrings, options) {
var gapChar=C$.scoreGapAsAny ? (seqstrings.isNa$() ? "N" : "X") : "-";
var seqs=seqstrings.getSequenceStrings$C(gapChar);
return this.findSimilarities$SA$jalview_api_analysis_SimilarityParamsI(seqs, options);
});

Clazz.newMeth(C$, 'findSimilarities$SA$jalview_api_analysis_SimilarityParamsI', function (seqs, params) {
var values=Clazz.array(Double.TYPE, [seqs.length, seqs.length]);
for (var row=0; row < seqs.length; row++) {
for (var col=this.symmetric ? row : 0; col < seqs.length; col++) {
var total=this.computeSimilarity$S$S$jalview_api_analysis_SimilarityParamsI(seqs[row], seqs[col], params);
values[row][col]=total;
if (this.symmetric) {
values[col][row]=total;
}}
}
return Clazz.new_($I$(3).c$$DAA,[values]);
});

Clazz.newMeth(C$, 'computeSimilarity$S$S$jalview_api_analysis_SimilarityParamsI', function (seq1, seq2, params) {
var len1=seq1.length$();
var len2=seq2.length$();
var total=0;
var width=Math.max(len1, len2);
for (var i=0; i < width; i++) {
if (i >= len1 || i >= len2 ) {
if (params.denominateByShortestLength$()) {
break;
}}var c1=i >= len1 ? "-" : seq1.charAt$I(i);
var c2=i >= len2 ? "-" : seq2.charAt$I(i);
var gap1=$I$(4).isGap$C(c1);
var gap2=$I$(4).isGap$C(c2);
if (gap1 && gap2 ) {
if (!params.includeGappedColumns$()) {
continue;
}} else if (gap1 || gap2 ) {
if (!params.includeGaps$()) {
continue;
}}var score=this.getPairwiseScore$C$C(c1, c2);
total += score;
}
return total;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hs=$I$(1).hashCode$CA(this.symbols);
for (var row, $row = 0, $$row = this.matrix; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
hs=hs * 31 + $I$(1).hashCode$FA(row);
}
return hs;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "jalview.analysis.scoremodels.ScoreMatrix"))) {
return false;
}var sm=obj;
if ($I$(1).equals$CA$CA(this.symbols, sm.symbols) && $I$(1).deepEquals$OA$OA(this.matrix, sm.matrix) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getSymbols$', function () {
return  String.instantialize(this.symbols);
});

Clazz.newMeth(C$, 'getMinimumScore$', function () {
return this.minValue;
});

Clazz.newMeth(C$, 'getMaximumScore$', function () {
return this.maxValue;
});

Clazz.newMeth(C$, 'getInstance$jalview_api_AlignmentViewPanel', function (avp) {
return this;
});

Clazz.newMeth(C$, 'isSymmetric$', function () {
return this.symmetric;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
