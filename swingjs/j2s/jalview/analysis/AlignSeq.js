(function(){var P$=Clazz.newPackage("jalview.analysis"),p$1={},I$=[[0,'StringBuffer','java.util.Locale','jalview.datamodel.Sequence','jalview.util.Comparison','Error','jalview.util.MessageManager','jalview.analysis.scoremodels.ScoreModels','StringBuilder','jalview.util.Format','java.util.StringTokenizer','java.awt.Color','java.util.ArrayList','jalview.util.MapList','jalview.datamodel.Mapping','java.util.Arrays','java.util.List','jalview.analysis.scoremodels.SimilarityParams','jalview.analysis.scoremodels.PIDModel']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignSeq");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.astr1="";
this.astr2="";
this.prev=0;
this.output=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['F',['maxscore'],'I',['maxi','maxj','seq1start','seq1end','seq2start','seq2end','count','prev'],'S',['s1str','s2str','astr1','astr2','type'],'O',['score','float[][]','+E','+F','traceback','int[][]','seq1','int[]','+seq2','s1','jalview.datamodel.SequenceI','+s2','aseq1','int[]','+aseq2','output','StringBuffer','scoreMatrix','jalview.analysis.scoremodels.ScoreMatrix']]
,['S',['NEWLINE']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$S',  function (s1, s2, type) {
;C$.$init$.apply(this);
this.seqInit$jalview_datamodel_SequenceI$S$jalview_datamodel_SequenceI$S$S(s1, s1.getSequenceAsString$(), s2, s2.getSequenceAsString$(), type);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$S$jalview_datamodel_SequenceI$S$S',  function (s1, string1, s2, string2, type) {
;C$.$init$.apply(this);
this.seqInit$jalview_datamodel_SequenceI$S$jalview_datamodel_SequenceI$S$S(s1, string1.toUpperCase$java_util_Locale($I$(2).ROOT), s2, string2.toUpperCase$java_util_Locale($I$(2).ROOT), type);
}, 1);

Clazz.newMeth(C$, 'getMaxScore$',  function () {
return this.maxscore;
});

Clazz.newMeth(C$, 'getSeq2Start$',  function () {
return this.seq2start;
});

Clazz.newMeth(C$, 'getSeq2End$',  function () {
return this.seq2end;
});

Clazz.newMeth(C$, 'getSeq1Start$',  function () {
return this.seq1start;
});

Clazz.newMeth(C$, 'getSeq1End$',  function () {
return this.seq1end;
});

Clazz.newMeth(C$, 'getOutput$',  function () {
return this.output.toString();
});

Clazz.newMeth(C$, 'getAStr1$',  function () {
return this.astr1;
});

Clazz.newMeth(C$, 'getAStr2$',  function () {
return this.astr2;
});

Clazz.newMeth(C$, 'getASeq1$',  function () {
return this.aseq1;
});

Clazz.newMeth(C$, 'getASeq2$',  function () {
return this.aseq2;
});

Clazz.newMeth(C$, 'getAlignedSeq1$',  function () {
var alSeq1=Clazz.new_([this.s1.getName$(), this.getAStr1$()],$I$(3,1).c$$S$S);
alSeq1.setStart$I(this.s1.getStart$() + this.getSeq1Start$() - 1);
alSeq1.setEnd$I(this.s1.getStart$() + this.getSeq1End$() - 1);
alSeq1.setDatasetSequence$jalview_datamodel_SequenceI(this.s1.getDatasetSequence$() == null  ? this.s1 : this.s1.getDatasetSequence$());
return alSeq1;
});

Clazz.newMeth(C$, 'getAlignedSeq2$',  function () {
var alSeq2=Clazz.new_([this.s2.getName$(), this.getAStr2$()],$I$(3,1).c$$S$S);
alSeq2.setStart$I(this.s2.getStart$() + this.getSeq2Start$() - 1);
alSeq2.setEnd$I(this.s2.getStart$() + this.getSeq2End$() - 1);
alSeq2.setDatasetSequence$jalview_datamodel_SequenceI(this.s2.getDatasetSequence$() == null  ? this.s2 : this.s2.getDatasetSequence$());
return alSeq2;
});

Clazz.newMeth(C$, 'seqInit$jalview_datamodel_SequenceI$S$jalview_datamodel_SequenceI$S$S',  function (s1, string1, s2, string2, type) {
this.s1=s1;
this.s2=s2;
p$1.setDefaultParams$S.apply(this, [type]);
p$1.seqInit$S$S.apply(this, [string1, string2]);
});

Clazz.newMeth(C$, 'seqInit$S$S',  function (string1, string2) {
this.s1str=C$.extractGaps$S$S($I$(4).GapChars, string1);
this.s2str=C$.extractGaps$S$S($I$(4).GapChars, string2);
if (this.s1str.length$() == 0 || this.s2str.length$() == 0 ) {
this.output.append$S("ALL GAPS: " + (this.s1str.length$() == 0 ? this.s1.getName$() : " ") + (this.s2str.length$() == 0 ? this.s2.getName$() : "") );
return;
}this.score=Clazz.array(Float.TYPE, [this.s1str.length$(), this.s2str.length$()]);
this.E=Clazz.array(Float.TYPE, [this.s1str.length$(), this.s2str.length$()]);
this.F=Clazz.array(Float.TYPE, [this.s1str.length$(), this.s2str.length$()]);
this.traceback=Clazz.array(Integer.TYPE, [this.s1str.length$(), this.s2str.length$()]);
this.seq1=this.indexEncode$S(this.s1str);
this.seq2=this.indexEncode$S(this.s2str);
}, p$1);

Clazz.newMeth(C$, 'setDefaultParams$S',  function (moleculeType) {
if (!"pep".equals$O(moleculeType) && !"dna".equals$O(moleculeType) ) {
this.output.append$S("Wrong type = dna or pep only");
throw Clazz.new_([$I$(6,"formatMessage$S$SA",["error.unknown_type_dna_or_pep", Clazz.array(String, -1, [moleculeType])])],$I$(5,1).c$$S);
}this.type=moleculeType;
this.scoreMatrix=$I$(7).getInstance$().getDefaultModel$Z("pep".equals$O(this.type));
}, p$1);

Clazz.newMeth(C$, 'traceAlignment$',  function () {
var max=-3.4028235E38;
for (var i=0; i < this.seq1.length; i++) {
if (this.score[i][this.seq2.length - 1] > max ) {
max=this.score[i][this.seq2.length - 1];
this.maxi=i;
this.maxj=this.seq2.length - 1;
}}
for (var j=0; j < this.seq2.length; j++) {
if (this.score[this.seq1.length - 1][j] > max ) {
max=this.score[this.seq1.length - 1][j];
this.maxi=this.seq1.length - 1;
this.maxj=j;
}}
var i=this.maxi;
var j=this.maxj;
var trace;
this.maxscore=this.score[i][j] / 10.0;
this.seq1end=this.maxi + 1;
this.seq2end=this.maxj + 1;
this.aseq1=Clazz.array(Integer.TYPE, [this.seq1.length + this.seq2.length]);
this.aseq2=Clazz.array(Integer.TYPE, [this.seq1.length + this.seq2.length]);
var sb1=Clazz.new_($I$(8,1).c$$I,[this.aseq1.length]);
var sb2=Clazz.new_($I$(8,1).c$$I,[this.aseq2.length]);
this.count=(this.seq1.length + this.seq2.length) - 1;
while (i > 0 && j > 0 ){
this.aseq1[this.count]=this.seq1[i];
sb1.append$C(this.s1str.charAt$I(i));
this.aseq2[this.count]=this.seq2[j];
sb2.append$C(this.s2str.charAt$I(j));
trace=this.findTrace$I$I(i, j);
if (trace == 0) {
--i;
--j;
} else if (trace == 1) {
--j;
this.aseq1[this.count]=-1;
sb1.replace$I$I$S(sb1.length$() - 1, sb1.length$(), "-");
} else if (trace == -1) {
--i;
this.aseq2[this.count]=-1;
sb2.replace$I$I$S(sb2.length$() - 1, sb2.length$(), "-");
}--this.count;
}
this.seq1start=i + 1;
this.seq2start=j + 1;
if (this.aseq1[this.count] != -1) {
this.aseq1[this.count]=this.seq1[i];
sb1.append$C(this.s1str.charAt$I(i));
}if (this.aseq2[this.count] != -1) {
this.aseq2[this.count]=this.seq2[j];
sb2.append$C(this.s2str.charAt$I(j));
}this.astr1=sb1.reverse$().toString();
this.astr2=sb2.reverse$().toString();
});

Clazz.newMeth(C$, 'printAlignment$java_io_PrintStream',  function (os) {
var s1id=this.getAlignedSeq1$().getDisplayId$Z(true);
var s2id=this.getAlignedSeq2$().getDisplayId$Z(true);
var nameLength=Math.max(s1id.length$(), s2id.length$());
if (nameLength > 30) {
var truncateBy=nameLength - 30;
nameLength=30;
if (s1id.length$() > nameLength) {
var slashPos=s1id.lastIndexOf$I("/");
s1id=s1id.substring$I$I(0, slashPos - truncateBy) + s1id.substring$I(slashPos);
}if (s2id.length$() > nameLength) {
var slashPos=s2id.lastIndexOf$I("/");
s2id=s2id.substring$I$I(0, slashPos - truncateBy) + s2id.substring$I(slashPos);
}}var len=72 - nameLength - 1 ;
var nochunks=(((this.aseq1.length - this.count)/len|0)) + ((this.aseq1.length - this.count) % len > 0 ? 1 : 0);
var pid=0.0;
this.output.append$S("Score = ").append$F(this.score[this.maxi][this.maxj]).append$S(C$.NEWLINE);
this.output.append$S("Length of alignment = ").append$S(String.valueOf$I(this.aseq1.length - this.count)).append$S(C$.NEWLINE);
this.output.append$S("Sequence ");
var nameFormat=Clazz.new_($I$(9,1).c$$S,["%" + nameLength + "s" ]);
this.output.append$S(nameFormat.form$S(s1id));
this.output.append$S(" (Sequence length = ").append$S(String.valueOf$I(this.s1str.length$())).append$S(")").append$S(C$.NEWLINE);
this.output.append$S("Sequence ");
this.output.append$S(nameFormat.form$S(s2id));
this.output.append$S(" (Sequence length = ").append$S(String.valueOf$I(this.s2str.length$())).append$S(")").append$S(C$.NEWLINE).append$S(C$.NEWLINE);
var pam250=$I$(7).getInstance$().getPam250$();
for (var j=0; j < nochunks; j++) {
this.output.append$S(nameFormat.form$S(s1id)).append$S(" ");
for (var i=0; i < len; i++) {
if ((i + (j * len)) < this.astr1.length$()) {
this.output.append$C(this.astr1.charAt$I(i + (j * len)));
}}
this.output.append$S(C$.NEWLINE);
this.output.append$S(nameFormat.form$S(" ")).append$S(" ");
for (var i=0; i < len; i++) {
if ((i + (j * len)) < this.astr1.length$()) {
var c1=this.astr1.charAt$I(i + (j * len));
var c2=this.astr2.charAt$I(i + (j * len));
var sameChar=$I$(4).isSameResidue$C$C$Z(c1, c2, false);
if (sameChar && !$I$(4).isGap$C(c1) ) {
++pid;
this.output.append$S("|");
} else if ("pep".equals$O(this.type)) {
if (pam250.getPairwiseScore$C$C(c1, c2) > 0 ) {
this.output.append$S(".");
} else {
this.output.append$S(" ");
}} else {
this.output.append$S(" ");
}}}
this.output=this.output.append$S(C$.NEWLINE);
this.output=this.output.append$S(nameFormat.form$S(s2id)).append$S(" ");
for (var i=0; i < len; i++) {
if ((i + (j * len)) < this.astr2.length$()) {
this.output.append$C(this.astr2.charAt$I(i + (j * len)));
}}
this.output.append$S(C$.NEWLINE).append$S(C$.NEWLINE);
}
pid=pid / (this.aseq1.length - this.count) * 100;
this.output.append$S(Clazz.new_(["Percentage ID = %3.2f\n"],$I$(9,1).c$$S).form$D(pid));
this.output.append$S(C$.NEWLINE);
try {
os.print$S(this.output.toString());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'findTrace$I$I',  function (i, j) {
var t=0;
var pairwiseScore=this.scoreMatrix.getPairwiseScore$C$C(this.s1str.charAt$I(i), this.s2str.charAt$I(j));
var max=this.score[i - 1][j - 1] + (pairwiseScore * 10);
if (this.F[i][j] > max ) {
max=this.F[i][j];
t=-1;
} else if (this.F[i][j] == max ) {
if (this.prev == -1) {
max=this.F[i][j];
t=-1;
}}if (this.E[i][j] >= max ) {
max=this.E[i][j];
t=1;
} else if (this.E[i][j] == max ) {
if (this.prev == 1) {
max=this.E[i][j];
t=1;
}}this.prev=t;
return t;
});

Clazz.newMeth(C$, 'calcScoreMatrix$',  function () {
var n=this.seq1.length;
var m=this.seq2.length;
this.score[0][0]=this.scoreMatrix.getPairwiseScore$C$C(this.s1str.charAt$I(0), this.s2str.charAt$I(0)) * 10;
this.E[0][0]=-20;
this.F[0][0]=0;
for (var j=1; j < m; j++) {
this.E[0][j]=C$.max$F$F(this.score[0][j - 1] - 120, this.E[0][j - 1] - 20);
this.F[0][j]=-20;
var pairwiseScore=this.scoreMatrix.getPairwiseScore$C$C(this.s1str.charAt$I(0), this.s2str.charAt$I(j));
this.score[0][j]=C$.max$F$F$F(pairwiseScore * 10, -120, -20);
this.traceback[0][j]=1;
}
for (var i=1; i < n; i++) {
this.E[i][0]=-120;
this.F[i][0]=C$.max$F$F(this.score[i - 1][0] - 120, this.F[i - 1][0] - 20);
var pairwiseScore=this.scoreMatrix.getPairwiseScore$C$C(this.s1str.charAt$I(i), this.s2str.charAt$I(0));
this.score[i][0]=C$.max$F$F$F(pairwiseScore * 10, this.E[i][0], this.F[i][0]);
this.traceback[i][0]=-1;
}
for (var i=1; i < n; i++) {
for (var j=1; j < m; j++) {
this.E[i][j]=C$.max$F$F(this.score[i][j - 1] - 120, this.E[i][j - 1] - 20);
this.F[i][j]=C$.max$F$F(this.score[i - 1][j] - 120, this.F[i - 1][j] - 20);
var pairwiseScore=this.scoreMatrix.getPairwiseScore$C$C(this.s1str.charAt$I(i), this.s2str.charAt$I(j));
this.score[i][j]=C$.max$F$F$F(this.score[i - 1][j - 1] + (pairwiseScore * 10), this.E[i][j], this.F[i][j]);
this.traceback[i][j]=this.findTrace$I$I(i, j);
}
}
});

Clazz.newMeth(C$, 'extractGaps$S$S',  function (gapChars, seq) {
if (gapChars == null  || seq == null  ) {
return null;
}var str=Clazz.new_($I$(10,1).c$$S$S,[seq, gapChars]);
var newString=Clazz.new_([seq.length$()],$I$(8,1).c$$I);
while (str.hasMoreTokens$()){
newString.append$S(str.nextToken$());
}
return newString.toString();
}, 1);

Clazz.newMeth(C$, 'max$F$F$F',  function (f1, f2, f3) {
var max=f1;
if (f2 > f1 ) {
max=f2;
}if (f3 > max ) {
max=f3;
}return max;
}, 1);

Clazz.newMeth(C$, 'max$F$F',  function (f1, f2) {
var max=f1;
if (f2 > f1 ) {
max=f2;
}return max;
}, 1);

Clazz.newMeth(C$, 'indexEncode$S',  function (s) {
var encoded=Clazz.array(Integer.TYPE, [s.length$()]);
for (var i=0; i < s.length$(); i++) {
var c=s.charAt$I(i);
encoded[i]=this.scoreMatrix.getMatrixIndex$C(c);
}
return encoded;
});

Clazz.newMeth(C$, 'displayMatrix$java_awt_Graphics$IAA$I$I$I',  function (g, mat, n, m, psize) {
var max=-1000;
var min=1000;
for (var i=0; i < n; i++) {
for (var j=0; j < m; j++) {
if (mat[i][j] >= max) {
max=mat[i][j];
}if (mat[i][j] <= min) {
min=mat[i][j];
}}
}
System.out.println$S(max + " " + min );
for (var i=0; i < n; i++) {
for (var j=0; j < m; j++) {
var x=psize * i;
var y=psize * j;
var score=(mat[i][j] - min) / (max - min);
g.setColor$java_awt_Color(Clazz.new_($I$(11,1).c$$F$F$F,[score, 0, 0]));
g.fillRect$I$I$I$I(x, y, psize, psize);
}
}
}, 1);

Clazz.newMeth(C$, 'doGlobalNWAlignment$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$S',  function (s1, s2, type) {
var as=Clazz.new_(C$.c$$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$S,[s1, s2, type]);
as.calcScoreMatrix$();
as.traceAlignment$();
return as;
}, 1);

Clazz.newMeth(C$, 'getMappingFromS1$Z',  function (allowmismatch) {
var as1=Clazz.new_($I$(12,1));
var as2=Clazz.new_($I$(12,1));
var pdbpos=this.s2.getStart$() + this.getSeq2Start$() - 2;
var alignpos=this.s1.getStart$() + this.getSeq1Start$() - 2;
var lp2=pdbpos - 3;
var lp1=alignpos - 3;
var lastmatch=false;
for (var i=0; i < this.astr1.length$(); i++) {
var c1=this.astr1.charAt$I(i);
var c2=this.astr2.charAt$I(i);
if (c1 != "-") {
++alignpos;
}if (c2 != "-") {
++pdbpos;
}if (allowmismatch || c1 == c2 ) {
if (lp1 + 1 != alignpos || lp2 + 1 != pdbpos ) {
as1.add$O(Integer.valueOf$I(alignpos));
as2.add$O(Integer.valueOf$I(pdbpos));
}lastmatch=true;
lp1=alignpos;
lp2=pdbpos;
} else {
if (lastmatch) {
as1.add$O(Integer.valueOf$I(lp1));
as2.add$O(Integer.valueOf$I(lp2));
}lastmatch=false;
}}
var mapseq1=Clazz.array(Integer.TYPE, [as1.size$() + (lastmatch ? 1 : 0)]);
var mapseq2=Clazz.array(Integer.TYPE, [as2.size$() + (lastmatch ? 1 : 0)]);
var i=0;
for (var ip, $ip = as1.iterator$(); $ip.hasNext$()&&((ip=($ip.next$())),1);) {
mapseq1[i++]=(ip).$c();
}
;i=0;
for (var ip, $ip = as2.iterator$(); $ip.hasNext$()&&((ip=($ip.next$())),1);) {
mapseq2[i++]=(ip).$c();
}
;if (lastmatch) {
mapseq1[mapseq1.length - 1]=alignpos;
mapseq2[mapseq2.length - 1]=pdbpos;
}var map=Clazz.new_($I$(13,1).c$$IA$IA$I$I,[mapseq1, mapseq2, 1, 1]);
var mapping=Clazz.new_($I$(14,1).c$$jalview_util_MapList,[map]);
mapping.setTo$jalview_datamodel_SequenceI(this.s2);
return mapping;
});

Clazz.newMeth(C$, 'replaceMatchingSeqsWith$java_util_List$java_util_List$java_util_List$jalview_datamodel_AlignmentI$S$Z',  function (seqs, annotations, ochains, al, dnaOrProtein, removeOldAnnots) {
var orig=Clazz.new_($I$(12,1));
var repl=Clazz.new_($I$(12,1));
var aligs=Clazz.new_($I$(12,1));
if (al != null  && al.getHeight$() > 0 ) {
var matches=Clazz.new_($I$(12,1));
var aligns=Clazz.new_($I$(12,1));
for (var sq, $sq = ochains.iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
var bestm=null;
var bestaseq=null;
var bestscore=0;
for (var msq, $msq = al.getSequences$().iterator$(); $msq.hasNext$()&&((msq=($msq.next$())),1);) {
var aseq=C$.doGlobalNWAlignment$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$S(msq, sq, dnaOrProtein);
if (bestm == null  || aseq.getMaxScore$() > bestscore  ) {
bestscore=aseq.getMaxScore$();
bestaseq=aseq;
bestm=msq;
}}
matches.add$O(bestm);
aligns.add$O(bestaseq);
al.deleteSequence$jalview_datamodel_SequenceI(bestm);
}
for (var p=0, pSize=seqs.size$(); p < pSize; p++) {
var sq;
var sp=seqs.get$I(p);
var q;
if ((q=ochains.indexOf$O(sp)) > -1) {
seqs.set$I$O(p, sq=matches.get$I(q));
orig.add$O(sp);
repl.add$O(sq);
sq.setName$S(sp.getName$());
sq.setDescription$S(sp.getDescription$());
var sp2sq;
sq.transferAnnotation$jalview_datamodel_SequenceI$jalview_datamodel_Mapping(sp, sp2sq=aligns.get$I(q).getMappingFromS1$Z(false));
aligs.add$O(aligns.get$I(q));
var inspos=-1;
for (var ap=0; ap < annotations.size$(); ) {
if (annotations.get$I(ap).sequenceRef === sp ) {
if (inspos == -1) {
inspos=ap;
}if (removeOldAnnots) {
annotations.remove$I(ap);
} else {
var alan=annotations.remove$I(ap);
alan.liftOver$jalview_datamodel_SequenceI$jalview_datamodel_Mapping(sq, sp2sq);
alan.setSequenceRef$jalview_datamodel_SequenceI(sq);
sq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(alan);
}} else {
++ap;
}}
if (sq.getAnnotation$() != null  && sq.getAnnotation$().length > 0 ) {
annotations.addAll$I$java_util_Collection(inspos == -1 ? annotations.size$() : inspos, $I$(15,"asList$OA",[sq.getAnnotation$()]));
}}}
}return $I$(15,"asList$OA",[Clazz.array($I$(16), -1, [orig, repl, aligs])]);
}, 1);

Clazz.newMeth(C$, 'computeRedundancyMatrix$jalview_datamodel_SequenceIA$SA$I$I$Z',  function (originalSequences, omitHidden, start, end, ungapped) {
var height=originalSequences.length;
var redundancy=Clazz.array(Float.TYPE, [height]);
var lngth=Clazz.array(Integer.TYPE, [height]);
for (var i=0; i < height; i++) {
redundancy[i]=0.0;
lngth[i]=-1;
}
var pidParams=Clazz.new_($I$(17,1).c$$Z$Z$Z$Z,[true, true, true, true]);
var pid;
var seqi;
var seqj;
for (var i=0; i < height; i++) {
for (var j=0; j < i; j++) {
if (i == j) {
continue;
}if (omitHidden == null ) {
seqi=originalSequences[i].getSequenceAsString$I$I(start, end);
seqj=originalSequences[j].getSequenceAsString$I$I(start, end);
} else {
seqi=omitHidden[i];
seqj=omitHidden[j];
}if (lngth[i] == -1) {
var ug=C$.extractGaps$S$S($I$(4).GapChars, seqi);
lngth[i]=ug.length$();
if (ungapped) {
seqi=ug;
}}if (lngth[j] == -1) {
var ug=C$.extractGaps$S$S($I$(4).GapChars, seqj);
lngth[j]=ug.length$();
if (ungapped) {
seqj=ug;
}}pid=$I$(18).computePID$S$S$jalview_api_analysis_SimilarityParamsI(seqi, seqj, pidParams);
if (lngth[j] < lngth[i]) {
redundancy[j]=Math.max(pid, redundancy[j]);
} else {
redundancy[i]=Math.max(pid, redundancy[i]);
}}
}
return redundancy;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NEWLINE=System.lineSeparator$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:25 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
