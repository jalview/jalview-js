(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'jalview.datamodel.SequenceI','jalview.datamodel.ProfileI','jalview.datamodel.ResidueCount','jalview.util.Comparison','jalview.datamodel.Profile','jalview.datamodel.Profiles','jalview.datamodel.Annotation','jalview.util.ColorUtils','java.awt.Color','StringBuilder','jalview.util.Format','jalview.util.QuickSort','java.util.Arrays','java.util.Hashtable','jalview.util.MappingUtils','jalview.analysis.CodingUtils']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AAFrequency");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['CHARS','String[]']]]

Clazz.newMeth(C$, 'calculate$java_util_List$I$I', function (list, start, end) {
return C$.calculate$java_util_List$I$I$Z(list, start, end, false);
}, 1);

Clazz.newMeth(C$, 'calculate$java_util_List$I$I$Z', function (sequences, start, end, profile) {
var seqs=Clazz.array($I$(1), [sequences.size$()]);
var width=0;
{
for (var i=0; i < sequences.size$(); i++) {
seqs[i]=sequences.get$I(i);
var length=seqs[i].getLength$();
if (length > width) {
width=length;
}}
if (end >= width) {
end=width;
}var reply=C$.calculate$jalview_datamodel_SequenceIA$I$I$I$Z(seqs, width, start, end, profile);
return reply;
}}, 1);

Clazz.newMeth(C$, 'calculate$jalview_datamodel_SequenceIA$I$I$I$Z', function (sequences, width, start, end, saveFullProfile) {
var seqCount=sequences.length;
var nucleotide=false;
var nucleotideCount=0;
var peptideCount=0;
var result=Clazz.array($I$(2), [width]);
for (var column=start; column < end; column++) {
if (nucleotideCount > 100 && column % 10 == 0 ) {
nucleotide=(9 * peptideCount < nucleotideCount);
}var residueCounts=Clazz.new_($I$(3,1).c$$Z,[nucleotide]);
for (var row=0; row < seqCount; row++) {
if (sequences[row] == null ) {
System.err.println$S("WARNING: Consensus skipping null sequence - possible race condition.");
continue;
}if (sequences[row].getLength$() > column) {
var c=sequences[row].getCharAt$I(column);
residueCounts.add$C(c);
if ($I$(4).isNucleotide$C(c)) {
nucleotideCount++;
} else if (!$I$(4).isGap$C(c)) {
peptideCount++;
}} else {
residueCounts.addGap$();
}}
var maxCount=residueCounts.getModalCount$();
var maxResidue=residueCounts.getResiduesForCount$I(maxCount);
var gapCount=residueCounts.getGapCount$();
var profile=Clazz.new_($I$(5,1).c$$I$I$I$S,[seqCount, gapCount, maxCount, maxResidue]);
if (saveFullProfile) {
profile.setCounts$jalview_datamodel_ResidueCount(residueCounts);
}result[column]=profile;
}
return Clazz.new_($I$(6,1).c$$jalview_datamodel_ProfileIA,[result]);
}, 1);

Clazz.newMeth(C$, 'estimateProfileSize$jalview_ext_android_SparseIntArray', function (profileSizes) {
if (profileSizes.size$() == 0) {
return 4;
}return profileSizes.keyAt$I(profileSizes.size$() - 1);
}, 1);

Clazz.newMeth(C$, 'completeConsensus$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_ProfilesI$I$I$Z$Z$J', function (consensus, profiles, startCol, endCol, ignoreGaps, showSequenceLogo, nseq) {
if (consensus == null  || consensus.annotations == null   || consensus.annotations.length < endCol ) {
return;
}for (var i=startCol; i < endCol; i++) {
var profile=profiles.get$I(i);
if (profile == null ) {
consensus.annotations[i]=null;
return;
}var dp=C$.getPercentageDp$J(nseq);
var value=profile.getPercentageIdentity$Z(ignoreGaps);
var description=C$.getTooltip$jalview_datamodel_ProfileI$F$Z$Z$I(profile, value, showSequenceLogo, ignoreGaps, dp);
var modalResidue=profile.getModalResidue$();
if ("".equals$O(modalResidue)) {
modalResidue="-";
} else if (modalResidue.length$() > 1) {
modalResidue="+";
}consensus.annotations[i]=Clazz.new_($I$(7,1).c$$S$S$C$F,[modalResidue, description, " ", value]);
}
}, 1);

Clazz.newMeth(C$, 'completeGapAnnot$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_ProfilesI$I$I$J', function (gaprow, profiles, startCol, endCol, nseq) {
if (gaprow == null  || gaprow.annotations == null   || gaprow.annotations.length < endCol ) {
return;
}gaprow.graphMax=nseq;
gaprow.graphMin=0;
var scale=0.8 / nseq;
for (var i=startCol; i < endCol; i++) {
var profile=profiles.get$I(i);
if (profile == null ) {
gaprow.annotations[i]=null;
return;
}var gapped=profile.getNonGapped$();
var description="" + gapped;
gaprow.annotations[i]=Clazz.new_(["", description, "\u0000", gapped, $I$(8,"bleachColour$java_awt_Color$F",[$I$(9).DARK_GRAY, scale * gapped])],$I$(7,1).c$$S$S$C$F$java_awt_Color);
}
}, 1);

Clazz.newMeth(C$, 'getTooltip$jalview_datamodel_ProfileI$F$Z$Z$I', function (profile, pid, showSequenceLogo, ignoreGaps, dp) {
var counts=profile.getCounts$();
var description=null;
if (counts != null  && showSequenceLogo ) {
var normaliseBy=ignoreGaps ? profile.getNonGapped$() : profile.getHeight$();
description=counts.getTooltip$I$I(normaliseBy, dp);
} else {
var sb=Clazz.new_($I$(10,1).c$$I,[64]);
var maxRes=profile.getModalResidue$();
if (maxRes.length$() > 1) {
sb.append$S("[").append$S(maxRes).append$S("]");
} else {
sb.append$S(maxRes);
}if (maxRes.length$() > 0) {
sb.append$S(" ");
$I$(11).appendPercentage$StringBuilder$F$I(sb, pid, dp);
sb.append$S("%");
}description=sb.toString();
}return description;
}, 1);

Clazz.newMeth(C$, 'extractProfile$jalview_datamodel_ProfileI$Z', function (profile, ignoreGaps) {
var counts=profile.getCounts$();
if (counts == null ) {
return null;
}var symbolCounts=counts.getSymbolCounts$();
var symbols=symbolCounts.symbols;
var values=symbolCounts.values;
$I$(12).sort$IA$CA(values, symbols);
var totalPercentage=0;
var divisor=ignoreGaps ? profile.getNonGapped$() : profile.getHeight$();
var result=Clazz.array(Integer.TYPE, [3 + 2 * symbols.length]);
var nextArrayPos=3;
var nonZeroCount=0;
for (var i=symbols.length - 1; i >= 0; i--) {
var theChar=symbols[i].$c();
var charCount=values[i];
var percentage=((charCount * 100)/divisor|0);
if (percentage == 0) {
break;
}nonZeroCount++;
result[nextArrayPos++]=theChar;
result[nextArrayPos++]=percentage;
totalPercentage+=percentage;
}
if (nonZeroCount < symbols.length) {
var tmp=Clazz.array(Integer.TYPE, [3 + 2 * nonZeroCount]);
System.arraycopy$O$I$O$I$I(result, 0, tmp, 0, tmp.length);
result=tmp;
}result[0]=0;
result[1]=nonZeroCount;
result[2]=totalPercentage;
return result;
}, 1);

Clazz.newMeth(C$, 'extractCdnaProfile$java_util_Hashtable$Z', function (hashtable, ignoreGaps) {
var codonCounts=hashtable.get$O("P");
var sortedCounts=Clazz.array(Integer.TYPE, [codonCounts.length - 2]);
System.arraycopy$O$I$O$I$I(codonCounts, 2, sortedCounts, 0, codonCounts.length - 2);
var result=Clazz.array(Integer.TYPE, [3 + 2 * sortedCounts.length]);
result[0]=2;
var codons=Clazz.array(Character.TYPE, [sortedCounts.length]);
for (var i=0; i < codons.length; i++) {
codons[i]=String.fromCharCode(i);
}
$I$(12).sort$IA$CA(sortedCounts, codons);
var totalPercentage=0;
var distinctValuesCount=0;
var j=3;
var divisor=ignoreGaps ? codonCounts[1] : codonCounts[0];
for (var i=codons.length - 1; i >= 0; i--) {
var codonCount=sortedCounts[i];
if (codonCount == 0) {
break;
}var percentage=(codonCount * 100/divisor|0);
if (percentage == 0) {
break;
}distinctValuesCount++;
result[j++]=codons[i].$c();
result[j++]=percentage;
totalPercentage+=percentage;
}
result[2]=totalPercentage;
result[1]=distinctValuesCount;
return $I$(13).copyOfRange$IA$I$I(result, 0, j);
}, 1);

Clazz.newMeth(C$, 'calculateCdna$jalview_datamodel_AlignmentI$java_util_HashtableA', function (alignment, hconsensus) {
var gapCharacter=alignment.getGapCharacter$();
var mappings=alignment.getCodonFrames$();
if (mappings == null  || mappings.isEmpty$() ) {
return;
}var cols=alignment.getWidth$();
for (var col=0; col < cols; col++) {
var columnHash=Clazz.new_($I$(14,1));
var codonCounts=Clazz.array(Integer.TYPE, [66]);
codonCounts[0]=alignment.getSequences$().size$();
var ungappedCount=0;
for (var seq, $seq = alignment.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
if (seq.getCharAt$I(col) == gapCharacter) {
continue;
}var codons=$I$(15).findCodonsFor$jalview_datamodel_SequenceI$I$java_util_List(seq, col, mappings);
for (var codon, $codon = codons.iterator$(); $codon.hasNext$()&&((codon=($codon.next$())),1);) {
var codonEncoded=$I$(16).encodeCodon$CA(codon);
if (codonEncoded >= 0) {
codonCounts[codonEncoded + 2]++;
ungappedCount++;
break;
}}
}
codonCounts[1]=ungappedCount;
columnHash.put$O$O("P", codonCounts);
hconsensus[col]=columnHash;
}
}, 1);

Clazz.newMeth(C$, 'completeCdnaConsensus$jalview_datamodel_AlignmentAnnotation$java_util_HashtableA$Z$I', function (consensusAnnotation, consensusData, showProfileLogo, nseqs) {
if (consensusAnnotation == null  || consensusAnnotation.annotations == null   || consensusAnnotation.annotations.length < consensusData.length ) {
return;
}consensusAnnotation.scaleColLabel=true;
for (var col=0; col < consensusData.length; col++) {
var hci=consensusData[col];
if (hci == null ) {
continue;
}var codonCounts=hci.get$O("P");
var totalCount=0;
var codons=Clazz.array(Character.TYPE, [codonCounts.length - 2]);
for (var j=2; j < codonCounts.length; j++) {
var codonCount=codonCounts[j];
codons[j - 2]=String.fromCharCode((j - 2));
totalCount+=codonCount;
}
var sortedCodonCounts=Clazz.array(Integer.TYPE, [codonCounts.length - 2]);
System.arraycopy$O$I$O$I$I(codonCounts, 2, sortedCodonCounts, 0, codonCounts.length - 2);
$I$(12).sort$IA$CA(sortedCodonCounts, codons);
var modalCodonEncoded=codons[codons.length - 1].$c();
var modalCodonCount=sortedCodonCounts[codons.length - 1];
var modalCodon=String.valueOf$CA($I$(16).decodeCodon$I(modalCodonEncoded));
if (sortedCodonCounts.length > 1 && sortedCodonCounts[codons.length - 2] == sortedCodonCounts[codons.length - 1] ) {
modalCodon="+";
}var pid=sortedCodonCounts[sortedCodonCounts.length - 1] * 100 / totalCount;
var mouseOver=Clazz.new_($I$(10,1).c$$I,[32]);
var samePercent=Clazz.new_($I$(10,1));
var percent=null;
var lastPercent=null;
var percentDecPl=C$.getPercentageDp$J(nseqs);
for (var j=codons.length - 1; j >= 0; j--) {
var codonCount=sortedCodonCounts[j];
if (codonCount == 0) {
if (samePercent.length$() > 0) {
mouseOver.append$CharSequence(samePercent).append$S(": ").append$S(percent).append$S("% ");
}break;
}var codonEncoded=codons[j].$c();
var pct=(codonCount * 100/totalCount|0);
var codon=String.valueOf$CA($I$(16).decodeCodon$I(codonEncoded));
var sb=Clazz.new_($I$(10,1));
$I$(11).appendPercentage$StringBuilder$F$I(sb, pct, percentDecPl);
percent=sb.toString();
if (showProfileLogo || codonCount == modalCodonCount ) {
if (percent.equals$O(lastPercent) && j > 0 ) {
samePercent.append$S(samePercent.length$() == 0 ? "" : ", ");
samePercent.append$S(codon);
} else {
if (samePercent.length$() > 0) {
mouseOver.append$CharSequence(samePercent).append$S(": ").append$S(lastPercent).append$S("% ");
}samePercent.setLength$I(0);
samePercent.append$S(codon);
}lastPercent=percent;
}}
consensusAnnotation.annotations[col]=Clazz.new_([modalCodon, mouseOver.toString(), " ", pid],$I$(7,1).c$$S$S$C$F);
}
}, 1);

Clazz.newMeth(C$, 'getPercentageDp$J', function (nseq) {
var scale=0;
while (nseq >= 100){
scale++;
nseq=(nseq/(10)|0);
}
return scale;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.CHARS=Clazz.array(String, [26]);
{
for (var c="A"; c <= "Z"; c=String.fromCharCode(c.$c()+1)) {
C$.CHARS[c.$c() - 65]=String.valueOf$C(c);
}
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:41 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
