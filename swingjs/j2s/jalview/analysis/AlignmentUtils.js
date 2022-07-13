(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'java.util.ArrayList','java.util.Locale','jalview.datamodel.Alignment','jalview.datamodel.SequenceI','java.util.LinkedHashMap','java.util.HashSet','jalview.datamodel.AlignedCodonFrame','jalview.schemes.ResidueProperties','jalview.util.MapList','StringBuilder','jalview.util.MappingUtils','java.util.Arrays','jalview.util.Comparison','java.util.TreeMap','jalview.analysis.CodonComparator','java.util.HashMap','jalview.datamodel.AlignedCodon','jalview.datamodel.AlignmentAnnotation','java.util.Collections','jalview.datamodel.DBRefEntry','jalview.datamodel.Mapping','jalview.analysis.Dna','jalview.datamodel.Sequence','jalview.bin.Console','jalview.util.DBRefUtils','jalview.datamodel.SequenceFeature','jalview.datamodel.features.SequenceFeatures','jalview.util.IntRangeComparator','jalview.analysis.SequenceIdMatcher','jalview.commands.RemoveGapColCommand']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignmentUtils", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['DnaVariant',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'expandContext$jalview_datamodel_AlignmentI$I',  function (core, flankSize) {
var sq=Clazz.new_($I$(1,1));
var maxoffset=0;
for (var s, $s = core.getSequences$().iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
var newSeq=s.deriveSequence$();
var newSeqStart=newSeq.getStart$() - 1;
if (newSeqStart > maxoffset && newSeq.getDatasetSequence$().getStart$() < s.getStart$() ) {
maxoffset=newSeqStart;
}sq.add$O(newSeq);
}
if (flankSize > -1) {
maxoffset=Math.min(maxoffset, flankSize);
}for (var s, $s = sq.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
var ds=s;
while (ds.getDatasetSequence$() != null ){
ds=ds.getDatasetSequence$();
}
var s_end=s.findPosition$I(s.getStart$() + s.getLength$());
var ustream_ds=s.getStart$() - ds.getStart$();
var dstream_ds=ds.getEnd$() - s_end;
var offset=maxoffset - ustream_ds;
if (flankSize >= 0) {
if (flankSize < ustream_ds) {
offset=maxoffset - flankSize;
ustream_ds=flankSize;
}if (flankSize <= dstream_ds) {
dstream_ds=flankSize - 1;
}}var upstream= String.instantialize(ds.getSequence$I$I(s.getStart$() - 1 - ustream_ds , s.getStart$() - 1)).toLowerCase$java_util_Locale($I$(2).ROOT).toCharArray$();
var downstream= String.instantialize(ds.getSequence$I$I(s_end - 1, s_end + dstream_ds)).toLowerCase$java_util_Locale($I$(2).ROOT).toCharArray$();
var coreseq=s.getSequence$();
var nseq=Clazz.array(Character.TYPE, [offset + upstream.length + downstream.length + coreseq.length ]);
var c=core.getGapCharacter$();
var p=0;
for (; p < offset; p++) {
nseq[p]=c;
}
System.arraycopy$O$I$O$I$I(upstream, 0, nseq, p, upstream.length);
System.arraycopy$O$I$O$I$I(coreseq, 0, nseq, p + upstream.length, coreseq.length);
System.arraycopy$O$I$O$I$I(downstream, 0, nseq, p + coreseq.length + upstream.length , downstream.length);
s.setSequence$S( String.instantialize(nseq));
s.setStart$I(s.getStart$() - ustream_ds);
s.setEnd$I(s_end + downstream.length);
}
var newAl=Clazz.new_([sq.toArray$OA(Clazz.array($I$(4), [0]))],$I$(3,1).c$$jalview_datamodel_SequenceIA);
for (var s, $s = sq.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
if (s.getAnnotation$() != null ) {
for (var aa, $aa = 0, $$aa = s.getAnnotation$(); $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
aa.adjustForAlignment$();
newAl.addAnnotation$jalview_datamodel_AlignmentAnnotation(aa);
}
}}
newAl.setDataset$jalview_datamodel_AlignmentI(core.getDataset$());
return newAl;
}, 1);

Clazz.newMeth(C$, 'getSequenceIndex$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI',  function (al, seq) {
var result=-1;
var pos=0;
for (var alSeq, $alSeq = al.getSequences$().iterator$(); $alSeq.hasNext$()&&((alSeq=($alSeq.next$())),1);) {
if (alSeq === seq ) {
result=pos;
break;
}++pos;
}
return result;
}, 1);

Clazz.newMeth(C$, 'getSequencesByName$jalview_datamodel_AlignmentI',  function (al) {
var theMap=Clazz.new_($I$(5,1));
for (var seq, $seq = al.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
var name=seq.getName$();
if (name != null ) {
var seqs=theMap.get$O(name);
if (seqs == null ) {
seqs=Clazz.new_($I$(1,1));
theMap.put$O$O(name, seqs);
}seqs.add$O(seq);
}}
return theMap;
}, 1);

Clazz.newMeth(C$, 'mapProteinAlignmentToCdna$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI',  function (proteinAlignment, cdnaAlignment) {
if (proteinAlignment == null  || cdnaAlignment == null  ) {
return false;
}var mappedDna=Clazz.new_($I$(6,1));
var mappedProtein=Clazz.new_($I$(6,1));
var mappingPerformed=C$.mapProteinToCdna$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI$java_util_Set$java_util_Set$Z(proteinAlignment, cdnaAlignment, mappedDna, mappedProtein, true);
mappingPerformed=!!(mappingPerformed|(C$.mapProteinToCdna$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI$java_util_Set$java_util_Set$Z(proteinAlignment, cdnaAlignment, mappedDna, mappedProtein, false)));
return mappingPerformed;
}, 1);

Clazz.newMeth(C$, 'mapProteinToCdna$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI$java_util_Set$java_util_Set$Z',  function (proteinAlignment, cdnaAlignment, mappedDna, mappedProtein, xrefsOnly) {
var mappingExistsOrAdded=false;
var thisSeqs=proteinAlignment.getSequences$();
for (var aaSeq, $aaSeq = thisSeqs.iterator$(); $aaSeq.hasNext$()&&((aaSeq=($aaSeq.next$())),1);) {
var proteinMapped=false;
var acf=Clazz.new_($I$(7,1));
for (var cdnaSeq, $cdnaSeq = cdnaAlignment.getSequences$().iterator$(); $cdnaSeq.hasNext$()&&((cdnaSeq=($cdnaSeq.next$())),1);) {
if (xrefsOnly && !C$.haveCrossRef$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(aaSeq, cdnaSeq) ) {
continue;
}if (!xrefsOnly && (mappedProtein.contains$O(aaSeq) || mappedDna.contains$O(cdnaSeq) ) ) {
continue;
}if (C$.mappingExists$java_util_List$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(proteinAlignment.getCodonFrames$(), aaSeq.getDatasetSequence$(), cdnaSeq.getDatasetSequence$())) {
mappingExistsOrAdded=true;
} else {
var map=C$.mapCdnaToProtein$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(aaSeq, cdnaSeq);
if (map != null ) {
acf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(cdnaSeq, aaSeq, map);
mappingExistsOrAdded=true;
proteinMapped=true;
mappedDna.add$O(cdnaSeq);
mappedProtein.add$O(aaSeq);
}}}
if (proteinMapped) {
proteinAlignment.addCodonFrame$jalview_datamodel_AlignedCodonFrame(acf);
}}
return mappingExistsOrAdded;
}, 1);

Clazz.newMeth(C$, 'mappingExists$java_util_List$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (mappings, aaSeq, cdnaSeq) {
if (mappings != null ) {
for (var acf, $acf = mappings.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
if (cdnaSeq === acf.getDnaForAaSeq$jalview_datamodel_SequenceI(aaSeq) ) {
return true;
}}
}return false;
}, 1);

Clazz.newMeth(C$, 'mapCdnaToProtein$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (proteinSeq, cdnaSeq) {
var proteinDataset=proteinSeq.getDatasetSequence$();
var aaSeqChars=proteinDataset != null  ? proteinDataset.getSequence$() : proteinSeq.getSequence$();
var cdnaDataset=cdnaSeq.getDatasetSequence$();
var cdnaSeqChars=cdnaDataset != null  ? cdnaDataset.getSequence$() : cdnaSeq.getSequence$();
if (aaSeqChars == null  || cdnaSeqChars == null  ) {
return null;
}var mappedLength=3 * aaSeqChars.length;
var cdnaLength=cdnaSeqChars.length;
var cdnaStart=cdnaSeq.getStart$();
var cdnaEnd=cdnaSeq.getEnd$();
var proteinStart=proteinSeq.getStart$();
var proteinEnd=proteinSeq.getEnd$();
if (cdnaLength != mappedLength && cdnaLength > 2 ) {
var lastCodon=String.valueOf$CA$I$I(cdnaSeqChars, cdnaLength - 3, 3).toUpperCase$java_util_Locale($I$(2).ROOT);
for (var stop, $stop = $I$(8).STOP_CODONS.iterator$(); $stop.hasNext$()&&((stop=($stop.next$())),1);) {
if (lastCodon.equals$O(stop)) {
cdnaEnd-=3;
cdnaLength-=3;
break;
}}
}var startOffset=0;
if (cdnaLength != mappedLength && cdnaLength > 2  && String.valueOf$CA$I$I(cdnaSeqChars, 0, 3).toUpperCase$java_util_Locale($I$(2).ROOT).equals$O($I$(8).START) ) {
startOffset+=3;
cdnaStart+=3;
cdnaLength-=3;
}if (C$.translatesAs$CA$I$CA(cdnaSeqChars, startOffset, aaSeqChars)) {
var map=Clazz.new_([Clazz.array(Integer.TYPE, -1, [cdnaStart, cdnaEnd]), Clazz.array(Integer.TYPE, -1, [proteinStart, proteinEnd]), 3, 1],$I$(9,1).c$$IA$IA$I$I);
return map;
}return C$.mapCdsToProtein$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(cdnaSeq, proteinSeq);
}, 1);

Clazz.newMeth(C$, 'translatesAs$CA$I$CA',  function (cdnaSeqChars, cdnaStart, aaSeqChars) {
if (cdnaSeqChars == null  || aaSeqChars == null  ) {
return false;
}var aaPos=0;
var dnaPos=cdnaStart;
for (; dnaPos < cdnaSeqChars.length - 2 && aaPos < aaSeqChars.length ; dnaPos+=3, aaPos++) {
var codon=String.valueOf$CA$I$I(cdnaSeqChars, dnaPos, 3);
var translated=$I$(8).codonTranslate$S(codon);
var aaRes=aaSeqChars[aaPos];
if ((translated == null  || $I$(8).STOP.equals$O(translated) ) && aaRes == "*" ) {
continue;
}if (translated == null  || !(aaRes == translated.charAt$I(0)) ) {
return false;
}}
if (aaPos != aaSeqChars.length) {
return false;
}if (dnaPos == cdnaSeqChars.length) {
return true;
}if (dnaPos == cdnaSeqChars.length - 3) {
var codon=String.valueOf$CA$I$I(cdnaSeqChars, dnaPos, 3);
if ($I$(8).STOP.equals$O($I$(8).codonTranslate$S(codon))) {
return true;
}}return false;
}, 1);

Clazz.newMeth(C$, 'alignSequenceAs$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentI$S$Z$Z',  function (seq, al, gap, preserveMappedGaps, preserveUnmappedGaps) {
var mappings=al.getCodonFrame$jalview_datamodel_SequenceI(seq);
if (mappings == null  || mappings.isEmpty$() ) {
return false;
}var alignFrom=null;
var mapping=null;
for (var mp, $mp = mappings.iterator$(); $mp.hasNext$()&&((mp=($mp.next$())),1);) {
alignFrom=mp.findAlignedSequence$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentI(seq, al);
if (alignFrom != null ) {
mapping=mp;
break;
}}
if (alignFrom == null ) {
return false;
}C$.alignSequenceAs$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_AlignedCodonFrame$S$C$Z$Z(seq, alignFrom, mapping, gap, al.getGapCharacter$(), preserveMappedGaps, preserveUnmappedGaps);
return true;
}, 1);

Clazz.newMeth(C$, 'alignSequenceAs$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_AlignedCodonFrame$S$C$Z$Z',  function (alignTo, alignFrom, mapping, myGap, sourceGap, preserveMappedGaps, preserveUnmappedGaps) {
var thisSeqPos=0;
var sourceDsPos=0;
var basesWritten=0;
var myGapChar=myGap.charAt$I(0);
var ratio=myGap.length$();
var fromOffset=alignFrom.getStart$() - 1;
var toOffset=alignTo.getStart$() - 1;
var sourceGapMappedLength=0;
var inExon=false;
var toLength=alignTo.getLength$();
var fromLength=alignFrom.getLength$();
var thisAligned=Clazz.new_($I$(10,1).c$$I,[2 * toLength]);
for (var i=0; i < fromLength; i++) {
var sourceChar=alignFrom.getCharAt$I(i);
if (sourceChar == sourceGap) {
sourceGapMappedLength+=ratio;
continue;
}++sourceDsPos;
var mappedPos=mapping.getMappedRegion$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$I(alignTo, alignFrom, sourceDsPos + fromOffset);
if (mappedPos == null ) {
sourceGapMappedLength+=ratio;
continue;
}var mappedCodonStart=mappedPos[0];
var mappedCodonEnd=mappedPos[mappedPos.length - 1];
var trailingCopiedGap=Clazz.new_($I$(10,1));
var intronLength=0;
while (basesWritten + toOffset < mappedCodonEnd && thisSeqPos < toLength ){
var c=alignTo.getCharAt$I(thisSeqPos++);
if (c != myGapChar) {
++basesWritten;
var sourcePosition=basesWritten + toOffset;
if (sourcePosition < mappedCodonStart) {
if (preserveUnmappedGaps && trailingCopiedGap.length$() > 0 ) {
thisAligned.append$S(trailingCopiedGap.toString());
intronLength+=trailingCopiedGap.length$();
trailingCopiedGap=Clazz.new_($I$(10,1));
}++intronLength;
inExon=false;
} else {
var startOfCodon=sourcePosition == mappedCodonStart;
var gapsToAdd=C$.calculateGapsToInsert$Z$Z$I$Z$I$I$Z(preserveMappedGaps, preserveUnmappedGaps, sourceGapMappedLength, inExon, trailingCopiedGap.length$(), intronLength, startOfCodon);
for (var k=0; k < gapsToAdd; k++) {
thisAligned.append$C(myGapChar);
}
sourceGapMappedLength=0;
inExon=true;
}thisAligned.append$C(c);
trailingCopiedGap=Clazz.new_($I$(10,1));
} else {
if (inExon && preserveMappedGaps ) {
trailingCopiedGap.append$C(myGapChar);
} else if (!inExon && preserveUnmappedGaps ) {
trailingCopiedGap.append$C(myGapChar);
}}}
}
while (thisSeqPos < toLength){
var c=alignTo.getCharAt$I(thisSeqPos++);
if (c != myGapChar || preserveUnmappedGaps ) {
thisAligned.append$C(c);
}--sourceGapMappedLength;
}
if (preserveUnmappedGaps) {
while (sourceGapMappedLength > 0){
thisAligned.append$C(myGapChar);
--sourceGapMappedLength;
}
}alignTo.setSequence$S( String.instantialize(thisAligned));
}, 1);

Clazz.newMeth(C$, 'calculateGapsToInsert$Z$Z$I$Z$I$I$Z',  function (preserveMappedGaps, preserveUnmappedGaps, sourceGapMappedLength, inExon, trailingGapLength, intronLength, startOfCodon) {
var gapsToAdd=0;
if (startOfCodon) {
if (inExon && !preserveMappedGaps ) {
trailingGapLength=0;
}if (!inExon && !(preserveMappedGaps && preserveUnmappedGaps ) ) {
trailingGapLength=0;
}if (inExon) {
gapsToAdd=Math.max(sourceGapMappedLength, trailingGapLength);
} else {
if (intronLength + trailingGapLength <= sourceGapMappedLength) {
gapsToAdd=sourceGapMappedLength - intronLength;
} else {
gapsToAdd=Math.min(intronLength + trailingGapLength - sourceGapMappedLength, trailingGapLength);
}}} else {
if (!preserveMappedGaps) {
trailingGapLength=0;
}gapsToAdd=Math.max(sourceGapMappedLength, trailingGapLength);
}return gapsToAdd;
}, 1);

Clazz.newMeth(C$, 'alignProteinAsDna$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI',  function (protein, dna) {
if (protein.isNucleotide$() || !dna.isNucleotide$() ) {
System.err.println$S("Wrong alignment type in alignProteinAsDna");
return 0;
}var unmappedProtein=Clazz.new_($I$(1,1));
var alignedCodons=C$.buildCodonColumnsMap$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI$java_util_List(protein, dna, unmappedProtein);
return C$.alignProteinAs$jalview_datamodel_AlignmentI$java_util_Map$java_util_List(protein, alignedCodons, unmappedProtein);
}, 1);

Clazz.newMeth(C$, 'alignCdsAsProtein$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI',  function (dna, protein) {
if (protein.isNucleotide$() || !dna.isNucleotide$() ) {
System.err.println$S("Wrong alignment type in alignProteinAsDna");
return 0;
}var mappings=protein.getCodonFrames$();
var alignedCount=0;
var width=0;
for (var dnaSeq, $dnaSeq = dna.getSequences$().iterator$(); $dnaSeq.hasNext$()&&((dnaSeq=($dnaSeq.next$())),1);) {
if (C$.alignCdsSequenceAsProtein$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentI$java_util_List$C(dnaSeq, protein, mappings, dna.getGapCharacter$())) {
++alignedCount;
}width=Math.max(dnaSeq.getLength$(), width);
}
var oldwidth;
var diff;
for (var dnaSeq, $dnaSeq = dna.getSequences$().iterator$(); $dnaSeq.hasNext$()&&((dnaSeq=($dnaSeq.next$())),1);) {
oldwidth=dnaSeq.getLength$();
diff=width - oldwidth;
if (diff > 0) {
dnaSeq.insertCharAt$I$I$C(oldwidth, diff, dna.getGapCharacter$());
}}
return alignedCount;
}, 1);

Clazz.newMeth(C$, 'alignCdsSequenceAsProtein$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentI$java_util_List$C',  function (cdsSeq, protein, mappings, gapChar) {
var cdsDss=cdsSeq.getDatasetSequence$();
if (cdsDss == null ) {
System.err.println$S("alignCdsSequenceAsProtein needs aligned sequence!");
return false;
}var dnaMappings=$I$(11).findMappingsForSequence$jalview_datamodel_SequenceI$java_util_List(cdsSeq, mappings);
for (var mapping, $mapping = dnaMappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
var peptide=mapping.findAlignedSequence$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentI(cdsSeq, protein);
if (peptide != null ) {
var peptideLength=peptide.getLength$();
var map=mapping.getMappingBetween$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(cdsSeq, peptide);
if (map != null ) {
var mapList=map.getMap$();
if (map.getTo$() === peptide.getDatasetSequence$() ) {
mapList=mapList.getInverse$();
}var cdsLength=cdsDss.getLength$();
var mappedFromLength=$I$(11,"getLength$java_util_List",[mapList.getFromRanges$()]);
var mappedToLength=$I$(11,"getLength$java_util_List",[mapList.getToRanges$()]);
var addStopCodon=(cdsLength == mappedFromLength * 3 + 3) || (peptide.getDatasetSequence$().getLength$() == mappedFromLength - 1) ;
if (cdsLength != mappedToLength && !addStopCodon ) {
System.err.println$S(String.format$S$OA("Can\'t align cds as protein (length mismatch %d/%d): %s", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(cdsLength), Integer.valueOf$I(mappedToLength), cdsSeq.getName$()])));
}var alignedCds=Clazz.array(Character.TYPE, [peptideLength * 3 + (addStopCodon ? 3 : 0)]);
$I$(12).fill$CA$C(alignedCds, gapChar);
var copiedBases=0;
var cdsStart=cdsDss.getStart$();
var proteinPos=peptide.getStart$() - 1;
var cdsCol=0;
for (var col=0; col < peptideLength; col++) {
var residue=peptide.getCharAt$I(col);
if ($I$(13).isGap$C(residue)) {
cdsCol+=3;
} else {
++proteinPos;
var codon=mapList.locateInTo$I$I(proteinPos, proteinPos);
if (codon == null ) {
cdsCol+=3;
} else {
for (var j=codon[0]; j <= codon[1]; j++) {
var mappedBase=cdsDss.getCharAt$I(j - cdsStart);
alignedCds[cdsCol++]=mappedBase;
++copiedBases;
}
}}}
if (copiedBases == cdsLength - 3) {
for (var i=alignedCds.length - 1; i >= 0; i--) {
if (!$I$(13).isGap$C(alignedCds[i])) {
cdsCol=i + 1;
break;
}}
for (var i=cdsLength - 3; i < cdsLength; i++) {
alignedCds[cdsCol++]=cdsDss.getCharAt$I(i);
}
}cdsSeq.setSequence$S( String.instantialize(alignedCds));
return true;
}}}
return false;
}, 1);

Clazz.newMeth(C$, 'buildCodonColumnsMap$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI$java_util_List',  function (protein, dna, unmappedProtein) {
unmappedProtein.addAll$java_util_Collection(protein.getSequences$());
var mappings=protein.getCodonFrames$();
var alignedCodons=Clazz.new_([Clazz.new_($I$(15,1))],$I$(14,1).c$$java_util_Comparator);
for (var dnaSeq, $dnaSeq = dna.getSequences$().iterator$(); $dnaSeq.hasNext$()&&((dnaSeq=($dnaSeq.next$())),1);) {
for (var mapping, $mapping = mappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
var prot=mapping.findAlignedSequence$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentI(dnaSeq, protein);
if (prot != null ) {
var seqMap=mapping.getMappingForSequence$jalview_datamodel_SequenceI(dnaSeq);
C$.addCodonPositions$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$C$jalview_datamodel_Mapping$java_util_Map(dnaSeq, prot, protein.getGapCharacter$(), seqMap, alignedCodons);
unmappedProtein.remove$O(prot);
}}
}
var mappedSequenceCount=protein.getHeight$() - unmappedProtein.size$();
C$.addUnmappedPeptideStarts$java_util_Map$I(alignedCodons, mappedSequenceCount);
return alignedCodons;
}, 1);

Clazz.newMeth(C$, 'addUnmappedPeptideStarts$java_util_Map$I',  function (alignedCodons, mappedSequenceCount) {
var sequencesChecked=Clazz.new_($I$(1,1));
var lastCodon=null;
var toAdd=Clazz.new_($I$(16,1));
for (var entry, $entry = alignedCodons.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
for (var sequenceCodon, $sequenceCodon = entry.getValue$().entrySet$().iterator$(); $sequenceCodon.hasNext$()&&((sequenceCodon=($sequenceCodon.next$())),1);) {
var seq=sequenceCodon.getKey$();
if (sequencesChecked.contains$O(seq)) {
continue;
}sequencesChecked.add$O(seq);
var codon=sequenceCodon.getValue$();
if (codon.peptideCol > 1) {
System.err.println$S("Problem mapping protein with >1 unmapped start positions: " + seq.getName$());
} else if (codon.peptideCol == 1) {
if (lastCodon != null ) {
var firstPeptide=Clazz.new_([lastCodon.pos1, lastCodon.pos2, lastCodon.pos3, String.valueOf$C(seq.getCharAt$I(0)), 0],$I$(17,1).c$$I$I$I$S$I);
toAdd.put$O$O(seq, firstPeptide);
} else {
var firstPeptide=Clazz.new_([0, 0, 0, String.valueOf$C(seq.getCharAt$I(0)), 0],$I$(17,1).c$$I$I$I$S$I);
toAdd.put$O$O(seq, firstPeptide);
}}if (sequencesChecked.size$() == mappedSequenceCount) {
break;
}}
lastCodon=entry.getKey$();
}
for (var startCodon, $startCodon = toAdd.entrySet$().iterator$(); $startCodon.hasNext$()&&((startCodon=($startCodon.next$())),1);) {
C$.addCodonToMap$java_util_Map$jalview_datamodel_AlignedCodon$jalview_datamodel_SequenceI(alignedCodons, startCodon.getValue$(), startCodon.getKey$());
}
}, 1);

Clazz.newMeth(C$, 'alignProteinAs$jalview_datamodel_AlignmentI$java_util_Map$java_util_List',  function (protein, alignedCodons, unmappedProtein) {
var alignedWidth=alignedCodons.size$();
var gaps=Clazz.array(Character.TYPE, [alignedWidth]);
$I$(12,"fill$CA$C",[gaps, protein.getGapCharacter$()]);
var peptides=Clazz.new_($I$(16,1));
for (var seq, $seq = protein.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
if (!unmappedProtein.contains$O(seq)) {
peptides.put$O$O(seq, $I$(12).copyOf$CA$I(gaps, gaps.length));
}}
var column=0;
for (var codon, $codon = alignedCodons.keySet$().iterator$(); $codon.hasNext$()&&((codon=($codon.next$())),1);) {
var columnResidues=alignedCodons.get$O(codon);
for (var entry, $entry = columnResidues.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var residue=entry.getValue$().product.charAt$I(0);
peptides.get$O(entry.getKey$())[column]=residue;
}
++column;
}
for (var entry, $entry = peptides.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
entry.getKey$().setSequence$S( String.instantialize(entry.getValue$()));
}
return 0;
}, 1);

Clazz.newMeth(C$, 'addCodonPositions$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$C$jalview_datamodel_Mapping$java_util_Map',  function (dna, protein, gapChar, seqMap, alignedCodons) {
var codons=seqMap.getCodonIterator$jalview_datamodel_SequenceI$C(dna, gapChar);
while (codons.hasNext$()){
try {
var codon=codons.next$();
C$.addCodonToMap$java_util_Map$jalview_datamodel_AlignedCodon$jalview_datamodel_SequenceI(alignedCodons, codon, protein);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"jalview.datamodel.IncompleteCodonException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.util.NoSuchElementException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
}
}, 1);

Clazz.newMeth(C$, 'addCodonToMap$java_util_Map$jalview_datamodel_AlignedCodon$jalview_datamodel_SequenceI',  function (alignedCodons, codon, protein) {
var seqProduct=alignedCodons.get$O(codon);
if (seqProduct == null ) {
seqProduct=Clazz.new_($I$(16,1));
alignedCodons.put$O$O(codon, seqProduct);
}seqProduct.put$O$O(protein, codon);
}, 1);

Clazz.newMeth(C$, 'isMappable$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI',  function (al1, al2) {
if (al1 == null  || al2 == null  ) {
return false;
}if (al1.isNucleotide$() == al2.isNucleotide$() ) {
return false;
}var dna=al1.isNucleotide$() ? al1 : al2;
var protein=dna === al1  ? al2 : al1;
var mappings=protein.getCodonFrames$();
for (var dnaSeq, $dnaSeq = dna.getSequences$().iterator$(); $dnaSeq.hasNext$()&&((dnaSeq=($dnaSeq.next$())),1);) {
for (var proteinSeq, $proteinSeq = protein.getSequences$().iterator$(); $proteinSeq.hasNext$()&&((proteinSeq=($proteinSeq.next$())),1);) {
if (C$.isMappable$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$java_util_List(dnaSeq, proteinSeq, mappings)) {
return true;
}}
}
return false;
}, 1);

Clazz.newMeth(C$, 'isMappable$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$java_util_List',  function (dnaSeq, proteinSeq, mappings) {
if (dnaSeq == null  || proteinSeq == null  ) {
return false;
}var dnaDs=dnaSeq.getDatasetSequence$() == null  ? dnaSeq : dnaSeq.getDatasetSequence$();
var proteinDs=proteinSeq.getDatasetSequence$() == null  ? proteinSeq : proteinSeq.getDatasetSequence$();
for (var mapping, $mapping = mappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
if (proteinDs === mapping.getAaForDnaSeq$jalview_datamodel_SequenceI(dnaDs) ) {
return true;
}}
return C$.mapCdnaToProtein$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(proteinDs, dnaDs) != null ;
}, 1);

Clazz.newMeth(C$, 'findAddableReferenceAnnotations$java_util_List$java_util_Map$java_util_Map$jalview_datamodel_AlignmentI',  function (sequenceScope, labelForCalcId, candidates, al) {
if (sequenceScope == null ) {
return;
}for (var seq, $seq = sequenceScope.iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
var dataset=seq.getDatasetSequence$();
if (dataset == null ) {
continue;
}var datasetAnnotations=dataset.getAnnotation$();
if (datasetAnnotations == null ) {
continue;
}var result=Clazz.new_($I$(1,1));
for (var dsann, $dsann = 0, $$dsann = datasetAnnotations; $dsann<$$dsann.length&&((dsann=($$dsann[$dsann])),1);$dsann++) {
var matchedAlignmentAnnotations=al.findAnnotations$jalview_datamodel_SequenceI$S$S(seq, dsann.getCalcId$(), dsann.label);
if (!matchedAlignmentAnnotations.iterator$().hasNext$()) {
result.add$O(dsann);
if (labelForCalcId != null ) {
labelForCalcId.put$O$O(dsann.getCalcId$(), dsann.label);
}}}
if (!result.isEmpty$()) {
candidates.put$O$O(seq, result);
}}
}, 1);

Clazz.newMeth(C$, 'addReferenceAnnotations$java_util_Map$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceGroup',  function (annotations, alignment, selectionGroup) {
for (var seq, $seq = annotations.keySet$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
for (var ann, $ann = annotations.get$O(seq).iterator$(); $ann.hasNext$()&&((ann=($ann.next$())),1);) {
var copyAnn=Clazz.new_($I$(18,1).c$$jalview_datamodel_AlignmentAnnotation,[ann]);
var startRes=0;
var endRes=ann.annotations.length;
if (selectionGroup != null ) {
startRes=selectionGroup.getStartRes$();
endRes=selectionGroup.getEndRes$();
}copyAnn.restrict$I$I(startRes, endRes);
if (!seq.hasAnnotation$jalview_datamodel_AlignmentAnnotation(ann)) {
seq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(copyAnn);
}copyAnn.adjustForAlignment$();
alignment.addAnnotation$jalview_datamodel_AlignmentAnnotation(copyAnn);
copyAnn.visible=true;
}
}
}, 1);

Clazz.newMeth(C$, 'showOrHideSequenceAnnotations$jalview_datamodel_AlignmentI$java_util_Collection$java_util_List$Z$Z',  function (al, types, forSequences, anyType, doShow) {
var anns=al.getAlignmentAnnotation$();
if (anns != null ) {
for (var aa, $aa = 0, $$aa = anns; $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
if (anyType || types.contains$O(aa.label) ) {
if ((aa.sequenceRef != null ) && (forSequences == null  || forSequences.contains$O(aa.sequenceRef) ) ) {
aa.visible=doShow;
}}}
}}, 1);

Clazz.newMeth(C$, 'haveCrossRef$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (seq1, seq2) {
return C$.hasCrossRef$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(seq1, seq2) || C$.hasCrossRef$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(seq2, seq1) ;
}, 1);

Clazz.newMeth(C$, 'hasCrossRef$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (seq1, seq2) {
if (seq1 == null  || seq2 == null  ) {
return false;
}var name=seq2.getName$();
var xrefs=seq1.getDBRefs$();
if (xrefs != null ) {
for (var ix=0, nx=xrefs.size$(); ix < nx; ix++) {
var xref=xrefs.get$I(ix);
var xrefName=xref.getSource$() + "|" + xref.getAccessionId$() ;
if (xrefName.equalsIgnoreCase$S(name)) {
return true;
}}
}return false;
}, 1);

Clazz.newMeth(C$, 'makeCdsAlignment$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA',  function (dna, dataset, products) {
if (dataset == null  || dataset.getDataset$() != null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["IMPLEMENTATION ERROR: dataset.getDataset() must be null!"]);
}var foundSeqs=Clazz.new_($I$(1,1));
var cdsSeqs=Clazz.new_($I$(1,1));
var mappings=dataset.getCodonFrames$();
var productSeqs=null;
if (products != null ) {
productSeqs=Clazz.new_($I$(6,1));
for (var seq, $seq = 0, $$seq = products; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
productSeqs.add$O(seq.getDatasetSequence$() == null  ? seq : seq.getDatasetSequence$());
}
}for (var dnaSeq, $dnaSeq = 0, $$dnaSeq = dna; $dnaSeq<$$dnaSeq.length&&((dnaSeq=($$dnaSeq[$dnaSeq])),1);$dnaSeq++) {
var dnaDss=dnaSeq.getDatasetSequence$() == null  ? dnaSeq : dnaSeq.getDatasetSequence$();
var seqMappings=$I$(11).findMappingsForSequence$jalview_datamodel_SequenceI$java_util_List(dnaSeq, mappings);
for (var mapping, $mapping = seqMappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
var mappingsFromSequence=mapping.getMappingsFromSequence$jalview_datamodel_SequenceI(dnaSeq);
for (var aMapping, $aMapping = mappingsFromSequence.iterator$(); $aMapping.hasNext$()&&((aMapping=($aMapping.next$())),1);) {
var mapList=aMapping.getMap$();
if (mapList.getFromRatio$() == 1) {
continue;
}var proteinProduct=aMapping.getTo$();
if (productSeqs != null  && !productSeqs.contains$O(proteinProduct) ) {
continue;
}var cdsSeq=C$.findCdsForProtein$java_util_List$jalview_datamodel_SequenceI$java_util_List$jalview_datamodel_Mapping(mappings, dnaSeq, seqMappings, aMapping);
if (cdsSeq != null ) {
if (!foundSeqs.contains$O(cdsSeq)) {
foundSeqs.add$O(cdsSeq);
var derivedSequence=cdsSeq.deriveSequence$();
cdsSeqs.add$O(derivedSequence);
if (!dataset.getSequences$().contains$O(cdsSeq)) {
dataset.addSequence$jalview_datamodel_SequenceI(cdsSeq);
}}continue;
}cdsSeq=C$.makeCdsSequence$jalview_datamodel_SequenceI$jalview_datamodel_Mapping$jalview_datamodel_AlignmentI(dnaSeq.getDatasetSequence$(), aMapping, dataset).deriveSequence$();
var cdsSeqDss=cdsSeq.getDatasetSequence$();
cdsSeqs.add$O(cdsSeq);
var cdsRange=$I$(19,"singletonList$O",[Clazz.array(Integer.TYPE, -1, [cdsSeq.getStart$(), cdsSeq.getLength$() + cdsSeq.getStart$() - 1])]);
var cdsToProteinMap=Clazz.new_([cdsRange, mapList.getToRanges$(), mapList.getFromRatio$(), mapList.getToRatio$()],$I$(9,1).c$$java_util_List$java_util_List$I$I);
if (!dataset.getSequences$().contains$O(cdsSeqDss)) {
dataset.addSequence$jalview_datamodel_SequenceI(cdsSeqDss);
var cdsToProteinMapping=Clazz.new_($I$(7,1));
cdsToProteinMapping.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(cdsSeqDss, proteinProduct, cdsToProteinMap);
if (!mappings.contains$O(cdsToProteinMapping)) {
mappings.add$O(cdsToProteinMapping);
}}C$.propagateDBRefsToCDS$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_Mapping(cdsSeqDss, dnaSeq.getDatasetSequence$(), proteinProduct, aMapping);
var dnaToCdsMapping=Clazz.new_($I$(7,1));
var dnaToCdsMap=Clazz.new_([mapList.getFromRanges$(), cdsRange, 1, 1],$I$(9,1).c$$java_util_List$java_util_List$I$I);
dnaToCdsMapping.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(dnaSeq.getDatasetSequence$(), cdsSeqDss, dnaToCdsMap);
if (!mappings.contains$O(dnaToCdsMapping)) {
mappings.add$O(dnaToCdsMapping);
}var cdsToDnaMap=dnaToCdsMap.getInverse$();
C$.transferGeneLoci$jalview_datamodel_SequenceI$jalview_util_MapList$jalview_datamodel_SequenceI(dnaSeq, cdsToDnaMap, cdsSeq);
var primrefs=dnaDss.getPrimaryDBRefs$();
for (var ip=0, np=primrefs.size$(); ip < np; ip++) {
var primRef=primrefs.get$I(ip);
var source=primRef.getSource$();
var version=primRef.getVersion$();
var cdsCrossRef=Clazz.new_([source, source + ":" + version , primRef.getAccessionId$()],$I$(20,1).c$$S$S$S);
cdsCrossRef.setMap$jalview_datamodel_Mapping(Clazz.new_([dnaDss, Clazz.new_($I$(9,1).c$$jalview_util_MapList,[cdsToDnaMap])],$I$(21,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList));
cdsSeqDss.addDBRef$jalview_datamodel_DBRefEntry(cdsCrossRef);
dnaSeq.addDBRef$jalview_datamodel_DBRefEntry(Clazz.new_([source, version, cdsSeq.getName$(), Clazz.new_($I$(21,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList,[cdsSeqDss, dnaToCdsMap])],$I$(20,1).c$$S$S$S$jalview_datamodel_Mapping));
var proteinToCdsRef=Clazz.new_([source, version, cdsSeq.getName$()],$I$(20,1).c$$S$S$S);
proteinToCdsRef.setMap$jalview_datamodel_Mapping(Clazz.new_([cdsSeqDss, cdsToProteinMap.getInverse$()],$I$(21,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList));
proteinProduct.addDBRef$jalview_datamodel_DBRefEntry(proteinToCdsRef);
}
C$.transferFeatures$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList$S$SA(dnaSeq, cdsSeq, dnaToCdsMap, null, Clazz.array(String, -1, ["CDS"]));
}
}
}
var cds=Clazz.new_([cdsSeqs.toArray$OA(Clazz.array($I$(4), [cdsSeqs.size$()]))],$I$(3,1).c$$jalview_datamodel_SequenceIA);
cds.setDataset$jalview_datamodel_AlignmentI(dataset);
return cds;
}, 1);

Clazz.newMeth(C$, 'transferGeneLoci$jalview_datamodel_SequenceI$jalview_util_MapList$jalview_datamodel_SequenceI',  function (fromSeq, targetToFrom, targetSeq) {
if (targetSeq.getGeneLoci$() != null ) {
return;
}var fromLoci=fromSeq.getGeneLoci$();
if (fromLoci == null ) {
return;
}var newMap=targetToFrom.traverse$jalview_util_MapList(fromLoci.getMapping$());
if (newMap != null ) {
targetSeq.setGeneLoci$S$S$S$jalview_util_MapList(fromLoci.getSpeciesId$(), fromLoci.getAssemblyId$(), fromLoci.getChromosomeId$(), newMap);
}}, 1);

Clazz.newMeth(C$, 'findCdsForProtein$java_util_List$jalview_datamodel_SequenceI$java_util_List$jalview_datamodel_Mapping',  function (mappings, dnaSeq, seqMappings, aMapping) {
var seqDss=dnaSeq.getDatasetSequence$() == null  ? dnaSeq : dnaSeq.getDatasetSequence$();
var proteinProduct=aMapping.getTo$();
var mappedFromLength=$I$(11,"getLength$java_util_List",[aMapping.getMap$().getFromRanges$()]);
var dnaLength=seqDss.getLength$();
if (mappedFromLength == dnaLength || mappedFromLength == dnaLength - 3 ) {
if (seqDss.getFeatures$().getFeaturesByOntology$SA(Clazz.array(String, -1, ["CDS"])).isEmpty$()) {
return seqDss;
}}var mappingsToPeptide=$I$(11).findMappingsForSequence$jalview_datamodel_SequenceI$java_util_List(proteinProduct, mappings);
for (var acf, $acf = mappingsToPeptide.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
for (var map, $map = acf.getMappings$().iterator$(); $map.hasNext$()&&((map=($map.next$())),1);) {
var mapping=map.getMapping$();
if (mapping !== aMapping  && mapping.getMap$().getFromRatio$() == 3  && proteinProduct === mapping.getTo$()   && seqDss !== map.getFromSeq$()  ) {
mappedFromLength=$I$(11,"getLength$java_util_List",[mapping.getMap$().getFromRanges$()]);
if (mappedFromLength == map.getFromSeq$().getLength$()) {
var cdsSeq=map.getFromSeq$();
var dnaToCdsMaps=$I$(11).findMappingsForSequence$jalview_datamodel_SequenceI$java_util_List(cdsSeq, seqMappings);
if (!dnaToCdsMaps.isEmpty$()) {
return cdsSeq;
}}}}
}
return null;
}, 1);

Clazz.newMeth(C$, 'makeCdsSequence$jalview_datamodel_SequenceI$jalview_datamodel_Mapping$jalview_datamodel_AlignmentI',  function (seq, mapping, dataset) {
var mapFromId=mapping.getMappedFromId$();
var seqId="CDS|" + (mapFromId != null  ? mapFromId : seq.getName$());
var newSeq=null;
var seqChars=seq.getSequence$();
var fromRanges=mapping.getMap$().getFromRanges$();
var cdsWidth=$I$(11).getLength$java_util_List(fromRanges);
var newSeqChars=Clazz.array(Character.TYPE, [cdsWidth]);
var newPos=0;
for (var range, $range = fromRanges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (range[0] <= range[1]) {
var length=range[1] - range[0] + 1;
System.arraycopy$O$I$O$I$I(seqChars, range[0] - 1, newSeqChars, newPos, length);
newPos+=length;
} else {
for (var i=range[0]; i >= range[1]; i--) {
newSeqChars[newPos++]=$I$(22).getComplement$C(seqChars[i - 1]);
}
}newSeq=Clazz.new_($I$(23,1).c$$S$CA$I$I,[seqId, newSeqChars, 1, newPos]);
}
if (dataset != null ) {
var matches=dataset.findSequenceMatch$S(newSeq.getName$());
if (matches != null ) {
var matched=false;
for (var mtch, $mtch = 0, $$mtch = matches; $mtch<$$mtch.length&&((mtch=($$mtch[$mtch])),1);$mtch++) {
if (mtch.getStart$() != newSeq.getStart$()) {
continue;
}if (mtch.getEnd$() != newSeq.getEnd$()) {
continue;
}if (!$I$(12,"equals$CA$CA",[mtch.getSequence$(), newSeq.getSequence$()])) {
continue;
}if (!matched) {
matched=true;
newSeq=mtch;
} else {
$I$(24,"error$S",["JAL-2154 regression: warning - found (and ignored) a duplicate CDS sequence:" + mtch.toString()]);
}}
}}return newSeq;
}, 1);

Clazz.newMeth(C$, 'propagateDBRefsToCDS$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_Mapping',  function (cdsSeq, contig, proteinProduct, mapping) {
var direct=Clazz.new_($I$(1,1));
var directSources=Clazz.new_($I$(6,1));
var refs=contig.getDBRefs$();
if (refs != null ) {
for (var ib=0, nb=refs.size$(); ib < nb; ib++) {
var dbr=refs.get$I(ib);
var map;
if (dbr.hasMap$() && (map=dbr.getMap$().getMap$()).isTripletMap$() ) {
if (mapping.getMap$().equals$O(map)) {
direct.add$O(dbr);
directSources.add$O(dbr.getSource$());
}}}
}var onSource=$I$(25,"selectRefs$java_util_List$SA",[proteinProduct.getDBRefs$(), directSources.toArray$OA(Clazz.array(String, [0]))]);
var propagated=Clazz.new_($I$(1,1));
for (var ic=0, nc=direct.size$(); ic < nc; ic++) {
var cdsref=direct.get$I(ic);
var m=cdsref.getMap$();
var cdsposmap=Clazz.new_([$I$(12,"asList$OA",[Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [cdsSeq.getStart$(), cdsSeq.getEnd$()])])]), m.getMap$().getToRanges$(), 3, 1],$I$(9,1).c$$java_util_List$java_util_List$I$I);
var cdsmap=Clazz.new_([m.getTo$(), m.getMap$()],$I$(21,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList);
var newref=Clazz.new_([cdsref.getSource$(), cdsref.getVersion$(), cdsref.getAccessionId$(), Clazz.new_([cdsmap.getTo$(), cdsposmap],$I$(21,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList)],$I$(20,1).c$$S$S$S$jalview_datamodel_Mapping);
if (cdsmap.getTo$() == null  && onSource != null  ) {
var sourceRefs=$I$(25,"searchRefs$java_util_List$S",[onSource, cdsref.getAccessionId$()]);
if (sourceRefs != null ) {
for (var srcref, $srcref = sourceRefs.iterator$(); $srcref.hasNext$()&&((srcref=($srcref.next$())),1);) {
if (srcref.getSource$().equalsIgnoreCase$S(cdsref.getSource$())) {
newref.getMap$().setTo$jalview_datamodel_SequenceI(proteinProduct);
}}
}}cdsSeq.addDBRef$jalview_datamodel_DBRefEntry(newref);
propagated.add$O(newref);
}
return propagated;
}, 1);

Clazz.newMeth(C$, 'transferFeatures$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList$S$SA',  function (fromSeq, toSeq, mapping, select, omitting) {
var copyTo=toSeq;
while (copyTo.getDatasetSequence$() != null ){
copyTo=copyTo.getDatasetSequence$();
}
if (fromSeq === copyTo  || fromSeq.getDatasetSequence$() === copyTo  ) {
return 0;
}var sfs=select == null  ? fromSeq.getFeatures$().getPositionalFeatures$SA(Clazz.array(String, -1, [])) : fromSeq.getFeatures$().getFeaturesByOntology$SA(Clazz.array(String, -1, [select]));
var count=0;
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var type=sf.getType$();
var omit=false;
for (var toOmit, $toOmit = 0, $$toOmit = omitting; $toOmit<$$toOmit.length&&((toOmit=($$toOmit[$toOmit])),1);$toOmit++) {
if (type.equals$O(toOmit)) {
omit=true;
}}
if (omit) {
continue;
}var start=sf.getBegin$();
var end=sf.getEnd$();
var mappedTo=mapping.locateInTo$I$I(start, end);
if (mappedTo == null ) {
mappedTo=mapping.locateInTo$I$I(end, end);
if (mappedTo != null ) {
mappedTo[0]=1;
}}if (mappedTo == null ) {
mappedTo=mapping.locateInTo$I$I(start, start);
if (mappedTo != null ) {
mappedTo[1]=toSeq.getLength$();
}}if (mappedTo != null ) {
var newBegin=Math.min(mappedTo[0], mappedTo[1]);
var newEnd=Math.max(mappedTo[0], mappedTo[1]);
var copy=Clazz.new_([sf, newBegin, newEnd, sf.getFeatureGroup$(), sf.getScore$()],$I$(26,1).c$$jalview_datamodel_SequenceFeature$I$I$S$F);
copyTo.addSequenceFeature$jalview_datamodel_SequenceFeature(copy);
++count;
}}
return count;
}, 1);

Clazz.newMeth(C$, 'mapCdsToProtein$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI',  function (dnaSeq, proteinSeq) {
var ranges=C$.findCdsPositions$jalview_datamodel_SequenceI(dnaSeq);
var mappedDnaLength=$I$(11).getLength$java_util_List(ranges);
var codonRemainder=mappedDnaLength % 3;
if (codonRemainder > 0) {
mappedDnaLength-=codonRemainder;
$I$(11).removeEndPositions$I$java_util_List(codonRemainder, ranges);
}var proteinLength=proteinSeq.getLength$();
var proteinStart=proteinSeq.getStart$();
var proteinEnd=proteinSeq.getEnd$();
if (proteinSeq.getCharAt$I(0) == "X") {
++proteinStart;
--proteinLength;
}var proteinRange=Clazz.new_($I$(1,1));
var codesForResidues=(mappedDnaLength/3|0);
if (codesForResidues == (proteinLength + 1)) {
--codesForResidues;
mappedDnaLength-=3;
$I$(11).removeEndPositions$I$java_util_List(3, ranges);
}if (codesForResidues == proteinLength) {
proteinRange.add$O(Clazz.array(Integer.TYPE, -1, [proteinStart, proteinEnd]));
return Clazz.new_($I$(9,1).c$$java_util_List$java_util_List$I$I,[ranges, proteinRange, 3, 1]);
}return null;
}, 1);

Clazz.newMeth(C$, 'findCdsPositions$jalview_datamodel_SequenceI',  function (dnaSeq) {
var result=Clazz.new_($I$(1,1));
var sfs=dnaSeq.getFeatures$().getFeaturesByOntology$SA(Clazz.array(String, -1, ["CDS"]));
if (sfs.isEmpty$()) {
return result;
}$I$(27).sortFeatures$java_util_List$Z(sfs, true);
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var phase=0;
try {
var s=sf.getPhase$();
if (s != null ) {
phase=Integer.parseInt$S(s);
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
var begin=sf.getBegin$();
var end=sf.getEnd$();
if (result.isEmpty$() && phase > 0 ) {
begin+=phase;
if (begin > end) {
System.err.println$S("Error: start phase extends beyond start CDS in " + dnaSeq.getName$());
}}result.add$O(Clazz.array(Integer.TYPE, -1, [begin, end]));
}
$I$(19,"sort$java_util_List$java_util_Comparator",[result, $I$(28).ASCENDING]);
return result;
}, 1);

Clazz.newMeth(C$, 'makeCopyAlignment$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI',  function (seqs, xrefs, dataset) {
var copy=Clazz.new_([Clazz.new_($I$(3,1).c$$jalview_datamodel_SequenceIA,[seqs])],$I$(3,1).c$$jalview_datamodel_AlignmentI);
copy.setDataset$jalview_datamodel_AlignmentI(dataset);
var isProtein=!copy.isNucleotide$();
var matcher=Clazz.new_($I$(29,1).c$$jalview_datamodel_SequenceIA,[seqs]);
if (xrefs != null ) {
for (var ix=0, nx=xrefs.length; ix < nx; ix++) {
var xref=xrefs[ix];
var dbrefs=xref.getDBRefs$();
if (dbrefs != null ) {
for (var ir=0, nir=dbrefs.size$(); ir < nir; ir++) {
var dbref=dbrefs.get$I(ir);
var map=dbref.getMap$();
var mto;
if (map == null  || (mto=map.getTo$()) == null   || mto.isProtein$() != isProtein  ) {
continue;
}var mappedTo=mto;
var match=matcher.findIdMatch$jalview_datamodel_SequenceI(mappedTo);
if (match == null ) {
matcher.add$jalview_datamodel_SequenceI(mappedTo);
copy.addSequence$jalview_datamodel_SequenceI(mappedTo);
}}
}}
}return copy;
}, 1);

Clazz.newMeth(C$, 'alignAs$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI',  function (unaligned, aligned) {
if (C$.alignAsSameSequences$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI(unaligned, aligned)) {
return unaligned.getHeight$();
}var unmapped=Clazz.new_($I$(1,1));
var columnMap=C$.buildMappedColumnsMap$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI$java_util_List(unaligned, aligned, unmapped);
var width=columnMap.size$();
var gap=unaligned.getGapCharacter$();
var realignedCount=0;
for (var seq, $seq = unaligned.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
if (!unmapped.contains$O(seq)) {
var newSeq=Clazz.array(Character.TYPE, [width]);
$I$(12).fill$CA$C(newSeq, gap);
var newCol=0;
var lastCol=0;
for (var column, $column = columnMap.keySet$().iterator$(); $column.hasNext$()&&((column=($column.next$())),1);) {
var c=columnMap.get$O(column).get$O(seq);
if (c != null ) {
newSeq[newCol]=(c).valueOf();
lastCol=newCol;
}++newCol;
}
if (lastCol < width) {
var tmp=Clazz.array(Character.TYPE, [lastCol + 1]);
System.arraycopy$O$I$O$I$I(newSeq, 0, tmp, 0, lastCol + 1);
newSeq=tmp;
}seq.setSequence$S(String.valueOf$CA(newSeq));
++realignedCount;
}}
return realignedCount;
}, 1);

Clazz.newMeth(C$, 'alignAsSameSequences$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI',  function (unaligned, aligned) {
if (aligned.getDataset$() == null  || unaligned.getDataset$() == null  ) {
return false;
}var alignedDatasets=Clazz.new_($I$(16,1));
for (var seq, $seq = aligned.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
var ds=seq.getDatasetSequence$();
if (alignedDatasets.get$O(ds) == null ) {
alignedDatasets.put$O$O(ds, Clazz.new_($I$(1,1)));
}alignedDatasets.get$O(ds).add$O(seq);
}
var leftmost=2147483647;
for (var seq, $seq = unaligned.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
var ds=seq.getDatasetSequence$();
if (!alignedDatasets.containsKey$O(ds)) {
return false;
}var alignedSeq=alignedDatasets.get$O(ds).get$I(0);
var startCol=alignedSeq.findIndex$I(seq.getStart$());
leftmost=Math.min(leftmost, startCol);
}
var gapCharacter=aligned.getGapCharacter$();
for (var seq, $seq = unaligned.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
var alignedSequences=alignedDatasets.get$O(seq.getDatasetSequence$());
if (alignedSequences.isEmpty$()) {
continue;
}var alignedSeq=alignedSequences.get$I(0);
var startCol=alignedSeq.findIndex$I(seq.getStart$());
var endCol=alignedSeq.findIndex$I(seq.getEnd$());
var seqchars=Clazz.array(Character.TYPE, [endCol - leftmost + 1]);
$I$(12).fill$CA$C(seqchars, gapCharacter);
var toCopy=alignedSeq.getSequence$I$I(startCol - 1, endCol);
System.arraycopy$O$I$O$I$I(toCopy, 0, seqchars, startCol - leftmost, toCopy.length);
seq.setSequence$S(String.valueOf$CA(seqchars));
if (alignedSequences.size$() > 0) {
alignedSequences.remove$I(0);
}}
Clazz.new_(["", unaligned.getSequencesArray$(), 0, unaligned.getWidth$() - 1, unaligned],$I$(30,1).c$$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI);
return true;
}, 1);

Clazz.newMeth(C$, 'buildMappedColumnsMap$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI$java_util_List',  function (unaligned, aligned, unmapped) {
var map=Clazz.new_($I$(14,1));
unmapped.addAll$java_util_Collection(unaligned.getSequences$());
var mappings=aligned.getCodonFrames$();
for (var seq, $seq = unaligned.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
for (var mapping, $mapping = mappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
var fromSeq=mapping.findAlignedSequence$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentI(seq, aligned);
if (fromSeq != null ) {
var seqMap=mapping.getMappingBetween$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(fromSeq, seq);
if (C$.addMappedPositions$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_Mapping$java_util_Map(seq, fromSeq, seqMap, map)) {
unmapped.remove$O(seq);
}}}
}
return map;
}, 1);

Clazz.newMeth(C$, 'addMappedPositions$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_datamodel_Mapping$java_util_Map',  function (seq, fromSeq, seqMap, map) {
if (seqMap == null ) {
return false;
}if (seqMap.getTo$() === fromSeq.getDatasetSequence$() ) {
seqMap=Clazz.new_([seq.getDatasetSequence$(), seqMap.getMap$().getInverse$()],$I$(21,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList);
}var toStart=seq.getStart$();
for (var fromRange, $fromRange = seqMap.getMap$().getFromRanges$().iterator$(); $fromRange.hasNext$()&&((fromRange=($fromRange.next$())),1);) {
for (var i=0; i < fromRange.length - 1; i+=2) {
var forward=fromRange[i + 1] >= fromRange[i];
var range=seqMap.locateMappedRange$I$I(fromRange[i], fromRange[i + 1]);
if (range == null ) {
System.err.println$S("Error in mapping " + seqMap + " from " + fromSeq.getName$() );
return false;
}var fromCol=fromSeq.findIndex$I(fromRange[i]);
var mappedCharPos=range[0];
while (mappedCharPos <= range[1] && fromCol <= fromSeq.getLength$()  && fromCol >= 0 ){
if (!$I$(13,"isGap$C",[fromSeq.getCharAt$I(fromCol - 1)])) {
var seqsMap=map.get$O(Integer.valueOf$I(fromCol));
if (seqsMap == null ) {
seqsMap=Clazz.new_($I$(16,1));
map.put$O$O(Integer.valueOf$I(fromCol), seqsMap);
}seqsMap.put$O$O(seq, Character.valueOf$C(seq.getCharAt$I(mappedCharPos - toStart)));
++mappedCharPos;
}fromCol+=(forward ? 1 : -1);
}
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'looksLikeEnsembl$jalview_datamodel_AlignmentI',  function (alignment) {
for (var seq, $seq = alignment.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
var name=seq.getName$();
if (!name.startsWith$S("ENSG") && !name.startsWith$S("ENST") ) {
return false;
}}
return true;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AlignmentUtils, "DnaVariant", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['base'],'O',['variant','jalview.datamodel.SequenceFeature']]]

Clazz.newMeth(C$, 'c$$S',  function (nuc) {
;C$.$init$.apply(this);
this.base=nuc;
this.variant=null;
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceFeature',  function (nuc, $var) {
;C$.$init$.apply(this);
this.base=nuc;
this.variant=$var;
}, 1);

Clazz.newMeth(C$, 'getSource$',  function () {
return this.variant == null  ? null : this.variant.getFeatureGroup$();
});

Clazz.newMeth(C$, 'toString',  function () {
return this.base + ":" + (this.variant == null  ? "" : this.variant.getDescription$()) ;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:25 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
