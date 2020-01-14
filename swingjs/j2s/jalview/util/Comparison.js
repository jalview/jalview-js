(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.datamodel.SequenceI','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Comparison");
C$.GapChars=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.GapChars= String.instantialize(Clazz.array(Character.TYPE, -1, [" ", ".", "-"]));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'compare$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI', function (ii, jj) {
return C$.compare$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$I$I(ii, jj, 0, ii.getLength$() - 1);
}, 1);

Clazz.newMeth(C$, 'compare$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$I$I', function (ii, jj, start, end) {
var si=ii.getSequenceAsString$();
var sj=jj.getSequenceAsString$();
var ilen=si.length$() - 1;
var jlen=sj.length$() - 1;
while (C$.isGap$C(si.charAt$I(start + ilen))){
ilen--;
}
while (C$.isGap$C(sj.charAt$I(start + jlen))){
jlen--;
}
var count=0;
var match=0;
var pid=-1;
if (ilen > jlen) {
for (var j=0; j < jlen; j++) {
if (si.substring$I$I(start + j, start + j + 1 ).equals$O(sj.substring$I$I(start + j, start + j + 1 ))) {
match++;
}count++;
}
pid=match / ilen * 100;
} else {
for (var j=0; j < jlen; j++) {
if (si.substring$I$I(start + j, start + j + 1 ).equals$O(sj.substring$I$I(start + j, start + j + 1 ))) {
match++;
}count++;
}
pid=match / jlen * 100;
}return pid;
}, 1);

Clazz.newMeth(C$, 'PID$S$S', function (seq1, seq2) {
return C$.PID$S$S$I$I(seq1, seq2, 0, seq1.length$());
}, 1);

Clazz.newMeth(C$, 'PID$S$S$I$I', function (seq1, seq2, start, end) {
return C$.PID$S$S$I$I$Z$Z(seq1, seq2, start, end, true, false);
}, 1);

Clazz.newMeth(C$, 'PID$S$S$I$I$Z$Z', function (seq1, seq2, start, end, wcGaps, ungappedOnly) {
var s1len=seq1.length$();
var s2len=seq2.length$();
var len=Math.min(s1len, s2len);
if (end < len) {
len=end;
}if (len < start) {
start=len - 1;
}var elen=len - start;
var bad=0;
var chr1;
var chr2;
var agap;
for (var i=start; i < len; i++) {
chr1=seq1.charAt$I(i);
chr2=seq2.charAt$I(i);
agap=C$.isGap$C(chr1) || C$.isGap$C(chr2) ;
if ("a" <= chr1 && chr1 <= "z" ) {
chr1 = String.fromCharCode(chr1.$c()- 32);
}if ("a" <= chr2 && chr2 <= "z" ) {
chr2 = String.fromCharCode(chr2.$c()- 32);
}if (chr1 != chr2) {
if (agap) {
if (ungappedOnly) {
elen--;
} else if (!wcGaps) {
bad++;
}} else {
bad++;
}}}
if (elen < 1) {
return 0.0;
}return (100.0 * (elen - bad)) / elen;
}, 1);

Clazz.newMeth(C$, 'isGap$C', function (c) {
return (c == "-" || c == "."  || c == " " ) ? true : false;
}, 1);

Clazz.newMeth(C$, 'isNucleotide$jalview_datamodel_SequenceI', function (seq) {
return C$.isNucleotide$jalview_datamodel_SequenceIA(Clazz.array($I$(1), -1, [seq]));
}, 1);

Clazz.newMeth(C$, 'isNucleotide$jalview_datamodel_SequenceIA', function (seqs) {
if (seqs == null ) {
return false;
}var ntCount=0;
var aaCount=0;
for (var seq, $seq = 0, $$seq = seqs; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
if (seq == null ) {
continue;
}var len=seq.getLength$();
for (var i=0; i < len; i++) {
var c=seq.getCharAt$I(i);
if (C$.isNucleotide$C(c)) {
ntCount++;
} else if (!C$.isGap$C(c)) {
aaCount++;
}}
}
if (ntCount * 100 > 85 * (ntCount + aaCount)) {
return true;
} else {
return false;
}}, 1);

Clazz.newMeth(C$, 'isNucleotide$C', function (c) {
if ("a" <= c && c <= "z" ) {
c = String.fromCharCode(c.$c()- 32);
}switch (c.$c()) {
case 65:
case 67:
case 71:
case 84:
case 85:
return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'isNucleotideSequence$S$Z', function (s, allowGaps) {
if (s == null ) {
return false;
}for (var i=0; i < s.length$(); i++) {
var c=s.charAt$I(i);
if (!C$.isNucleotide$C(c)) {
if (!allowGaps || !C$.isGap$C(c) ) {
return false;
}}}
return true;
}, 1);

Clazz.newMeth(C$, 'isNucleotide$jalview_datamodel_SequenceIAA', function (seqs) {
if (seqs == null ) {
return false;
}var flattened=Clazz.new_($I$(2));
for (var ss, $ss = 0, $$ss = seqs; $ss<$$ss.length&&((ss=($$ss[$ss])),1);$ss++) {
for (var s, $s = 0, $$s = ss; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
flattened.add$TE(s);
}
}
var oneDArray=flattened.toArray$TTA(Clazz.array($I$(1), [flattened.size$()]));
return C$.isNucleotide$jalview_datamodel_SequenceIA(oneDArray);
}, 1);

Clazz.newMeth(C$, 'isSameResidue$C$C$Z', function (c1, c2, caseSensitive) {
if (caseSensitive) {
return (c1 == c2);
} else {
return Character.toUpperCase$C(c1) == Character.toUpperCase$C(c2);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
