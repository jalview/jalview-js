(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'jalview.analysis.Rna','jalview.util.Comparison','java.util.Hashtable','jalview.util.Format','jalview.util.QuickSort','jalview.datamodel.Annotation']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StructureFrequency");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'findPair$jalview_datamodel_SequenceFeatureA$I', function (pairs, indice) {
for (var i=0; i < pairs.length; i++) {
if (pairs[i].getBegin$() == indice) {
return pairs[i].getEnd$();
}}
return -1;
}, 1);

Clazz.newMeth(C$, 'calculate$jalview_datamodel_SequenceIA$I$I$java_util_HashtableA$Z$jalview_datamodel_AlignmentAnnotation', function (sequences, start, end, result, profile, rnaStruc) {
var residueHash;
var maxResidue;
var struc=rnaStruc.getRNAStruc$().toCharArray$();
var rna=rnaStruc._rnasecstr;
var c;
var s;
var cEnd;
var bpEnd=-1;
var jSize=sequences.length;
var values;
var pairs;
var percentage;
for (var i=start; i < end; i++) {
var canonicalOrWobblePairCount=0;
var canonical=0;
var otherPairCount=0;
var nongap=0;
maxResidue="-";
values=Clazz.array(Integer.TYPE, [255]);
pairs=Clazz.array(Integer.TYPE, [255, 255]);
bpEnd=-1;
if (i < struc.length) {
s=struc[i];
} else {
s="-";
}if (s == "." || s == " " ) {
s="-";
}if (!$I$(1).isOpeningParenthesis$C(s)) {
if (s == "-") {
values[45]++;
}} else {
bpEnd=C$.findPair$jalview_datamodel_SequenceFeatureA$I(rna, i);
if (bpEnd > -1) {
for (var j=0; j < jSize; j++) {
if (sequences[j] == null ) {
System.err.println$S("WARNING: Consensus skipping null sequence - possible race condition.");
continue;
}c=sequences[j].getCharAt$I(i);
cEnd=sequences[j].getCharAt$I(bpEnd);
if ($I$(2).isGap$C(c) || $I$(2).isGap$C(cEnd) ) {
values[45]++;
continue;
}nongap++;
if ("a" <= c && "z" >= c ) {
c = String.fromCharCode(c.$c()+ -32);
}if ("a" <= cEnd && "z" >= cEnd ) {
cEnd = String.fromCharCode(cEnd.$c()+ -32);
}if ($I$(1).isCanonicalOrWobblePair$C$C(c, cEnd)) {
canonicalOrWobblePairCount++;
if ($I$(1).isCanonicalPair$C$C(c, cEnd)) {
canonical++;
}} else {
otherPairCount++;
}pairs[c.$c()][cEnd.$c()]++;
}
}}residueHash=Clazz.new_($I$(3));
if (profile) {
residueHash.put$TK$TV("P", Clazz.array(Integer.TYPE, -2, [values, Clazz.array(Integer.TYPE, -1, [jSize, (jSize - values[45])])]));
residueHash.put$TK$TV("B", pairs);
}values[40]=canonicalOrWobblePairCount;
values[91]=canonical;
values[123]=otherPairCount;
var count=canonicalOrWobblePairCount;
if (canonicalOrWobblePairCount > 0 || otherPairCount > 0 ) {
if (canonicalOrWobblePairCount >= otherPairCount) {
maxResidue=(canonicalOrWobblePairCount - canonical) < canonical ? "(" : "[";
} else {
maxResidue="{";
}}residueHash.put$TK$TV("C",  new Integer(count));
residueHash.put$TK$TV("R", maxResidue);
percentage=(count * 100) / jSize;
residueHash.put$TK$TV("G",  new Float(percentage));
percentage=(count * 100) / nongap;
residueHash.put$TK$TV("N",  new Float(percentage));
if (result[i] == null ) {
result[i]=residueHash;
}if (bpEnd > 0) {
values[41]=values[40];
values[93]=values[91];
values[125]=values[123];
values[40]=0;
values[91]=0;
values[123]=0;
maxResidue=maxResidue.equals$O("(") ? ")" : maxResidue.equals$O("[") ? "]" : "}";
residueHash=Clazz.new_($I$(3));
if (profile) {
residueHash.put$TK$TV("P", Clazz.array(Integer.TYPE, -2, [values, Clazz.array(Integer.TYPE, -1, [jSize, (jSize - values[45])])]));
residueHash.put$TK$TV("B", pairs);
}residueHash.put$TK$TV("C",  new Integer(count));
residueHash.put$TK$TV("R", maxResidue);
percentage=(count * 100) / jSize;
residueHash.put$TK$TV("G",  new Float(percentage));
percentage=(count * 100) / nongap;
residueHash.put$TK$TV("N",  new Float(percentage));
result[bpEnd]=residueHash;
}}
}, 1);

Clazz.newMeth(C$, 'completeConsensus$jalview_datamodel_AlignmentAnnotation$java_util_HashtableA$I$I$Z$Z$J', function (consensus, hconsensus, iStart, width, ignoreGapsInConsensusCalculation, includeAllConsSymbols, nseq) {
var tval;
var value;
if (consensus == null  || consensus.annotations == null   || consensus.annotations.length < width ) {
return;
}var fmtstr="%3.1f";
var precision=2;
while (nseq > 100){
precision++;
nseq=(nseq/(10)|0);
}
if (precision > 2) {
fmtstr="%" + (2 + precision) + "." + precision + "f" ;
}var fmt=Clazz.new_($I$(4).c$$S,[fmtstr]);
for (var i=iStart; i < width; i++) {
var hci;
if (i >= hconsensus.length || ((hci=hconsensus[i]) == null ) ) {
consensus.annotations[i]=null;
continue;
}value=0;
var fv;
if (ignoreGapsInConsensusCalculation) {
fv=hci.get$O("N");
} else {
fv=hci.get$O("G");
}if (fv == null ) {
consensus.annotations[i]=null;
continue;
}value=fv.floatValue$();
var maxRes=hci.get$O("R").toString();
var mouseOver=hci.get$O("R") + " ";
if (maxRes.length$() > 1) {
mouseOver="[" + maxRes + "] " ;
maxRes="+";
}var profile=hci.get$O("P");
var pairs=hci.get$O("B");
if (pairs != null  && includeAllConsSymbols ) {
mouseOver="";
var ca=Clazz.array(Integer.TYPE, [625, null]);
var vl=Clazz.array(Float.TYPE, [625]);
var x=0;
for (var c=65; c < 90; c++) {
for (var d=65; d < 90; d++) {
ca[x]=Clazz.array(Integer.TYPE, -1, [c, d]);
vl[x]=pairs[c][d];
x++;
}
}
$I$(5).sort$FA$OA(vl, ca);
var p=0;
var divisor=profile[1][ignoreGapsInConsensusCalculation ? 1 : 0];
for (var c=624; c > 0; c--) {
if (vl[c] > 0 ) {
tval=(vl[c] * 100.0 / divisor);
mouseOver += ((p == 0) ? "" : "; ") + String.fromCharCode(ca[c][0]) + String.fromCharCode(ca[c][1]) + " " + fmt.form$D(tval) + "%" ;
p++;
}}
} else {
mouseOver += (fmt.form$D(value) + "%");
}consensus.annotations[i]=Clazz.new_($I$(6).c$$S$S$C$F,[maxRes, mouseOver, " ", value]);
}
}, 1);

Clazz.newMeth(C$, 'extractProfile$java_util_Hashtable$Z', function (hconsensus, ignoreGapsInConsensusCalculation) {
var rtnval=Clazz.array(Integer.TYPE, [74]);
var profile=hconsensus.get$O("P");
var pairs=hconsensus.get$O("B");
if (profile == null ) {
return null;
}var ca=Clazz.array(Integer.TYPE, [625, null]);
var vl=Clazz.array(Float.TYPE, [625]);
var x=0;
for (var c=65; c < 90; c++) {
for (var d=65; d < 90; d++) {
ca[x]=Clazz.array(Integer.TYPE, -1, [c, d]);
vl[x]=pairs[c][d];
x++;
}
}
$I$(5).sort$FA$OA(vl, ca);
var valuesCount=0;
rtnval[1]=0;
var offset=2;
var divisor=profile[1][ignoreGapsInConsensusCalculation ? 1 : 0];
for (var c=624; c > 0; c--) {
if (vl[c] > 0 ) {
rtnval[offset++]=ca[c][0];
rtnval[offset++]=ca[c][1];
rtnval[offset]=((vl[c] * 100.0 / divisor)|0);
rtnval[1]+=rtnval[offset++];
valuesCount++;
}}
rtnval[0]=valuesCount;
var result=Clazz.array(Integer.TYPE, [rtnval.length + 1]);
result[0]=1;
System.arraycopy$O$I$O$I$I(rtnval, 0, result, 1, rtnval.length);
return result;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
