(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.ArrayList','jalview.datamodel.Mapping',['jalview.datamodel.AlignedCodonFrame','.SequenceToSequenceMapping'],'jalview.datamodel.SequenceI','jalview.util.MapList','jalview.util.MappingUtils']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignedCodonFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SequenceToSequenceMapping',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['mappings','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.mappings=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList', function (dnaseq, aaseq, map) {
this.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList$S(dnaseq, aaseq, map, null);
});

Clazz.newMeth(C$, 'addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList$S', function (dnaseq, aaseq, map, mapFromId) {
var fromSeq=(dnaseq.getDatasetSequence$() == null ) ? dnaseq : dnaseq.getDatasetSequence$();
var toSeq=(aaseq.getDatasetSequence$() == null ) ? aaseq : aaseq.getDatasetSequence$();
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === fromSeq  && ssm.mapping.to === toSeq  ) {
ssm.mapping.map.addMapList$jalview_util_MapList(map);
return;
}}
var mp=Clazz.new_($I$(2,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList,[toSeq, map]);
mp.setMappedFromId$S(mapFromId);
this.mappings.add$O(Clazz.new_($I$(3,1).c$$jalview_datamodel_SequenceI$jalview_datamodel_Mapping,[this, null, fromSeq, mp]));
});

Clazz.newMeth(C$, 'getdnaSeqs$', function () {
var seqs=Clazz.new_($I$(1,1));
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
seqs.add$O(ssm.fromSeq);
}
return seqs.toArray$OA(Clazz.array($I$(4), [seqs.size$()]));
});

Clazz.newMeth(C$, 'getAaSeqs$', function () {
var seqs=Clazz.new_($I$(1,1));
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
seqs.add$O(ssm.mapping.to);
}
return seqs.toArray$OA(Clazz.array($I$(4), [seqs.size$()]));
});

Clazz.newMeth(C$, 'getdnaToProt$', function () {
var maps=Clazz.new_($I$(1,1));
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
maps.add$O(ssm.mapping.map);
}
return maps.toArray$OA(Clazz.array($I$(5), [maps.size$()]));
});

Clazz.newMeth(C$, 'getProtMappings$', function () {
var maps=Clazz.new_($I$(1,1));
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
maps.add$O(ssm.mapping);
}
return maps.toArray$OA(Clazz.array($I$(2), [maps.size$()]));
});

Clazz.newMeth(C$, 'getMappingForSequence$jalview_datamodel_SequenceI', function (seq) {
var seqDs=seq.getDatasetSequence$();
seqDs=seqDs != null  ? seqDs : seq;
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === seqDs  || ssm.mapping.to === seqDs  ) {
return ssm.mapping;
}}
return null;
});

Clazz.newMeth(C$, 'getAaForDnaSeq$jalview_datamodel_SequenceI', function (dnaSeqRef) {
var dnads=dnaSeqRef.getDatasetSequence$();
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === dnaSeqRef  || ssm.fromSeq === dnads  ) {
return ssm.mapping.to;
}}
return null;
});

Clazz.newMeth(C$, 'getDnaForAaSeq$jalview_datamodel_SequenceI', function (aaSeqRef) {
var aads=aaSeqRef.getDatasetSequence$();
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.mapping.to === aaSeqRef  || ssm.mapping.to === aads  ) {
return ssm.fromSeq;
}}
return null;
});

Clazz.newMeth(C$, 'involvesSequence$jalview_datamodel_SequenceI', function (seq) {
return this.getAaForDnaSeq$jalview_datamodel_SequenceI(seq) != null  || this.getDnaForAaSeq$jalview_datamodel_SequenceI(seq) != null  ;
});

Clazz.newMeth(C$, 'markMappedRegion$jalview_datamodel_SequenceI$I$jalview_datamodel_SearchResultsI', function (seq, index, results) {
var codon;
var ds=seq.getDatasetSequence$();
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === seq  || ssm.fromSeq === ds  ) {
codon=ssm.mapping.map.locateInTo$I$I(index, index);
if (codon != null ) {
for (var i=0; i < codon.length; i+=2) {
results.addResult$jalview_datamodel_SequenceI$I$I(ssm.mapping.to, codon[i], codon[i + 1]);
}
}} else if (ssm.mapping.to === seq  || ssm.mapping.to === ds  ) {
{
codon=ssm.mapping.map.locateInFrom$I$I(index, index);
if (codon != null ) {
for (var i=0; i < codon.length; i+=2) {
results.addResult$jalview_datamodel_SequenceI$I$I(ssm.fromSeq, codon[i], codon[i + 1]);
}
}}}}
});

Clazz.newMeth(C$, 'getDnaPosition$jalview_datamodel_SequenceI$I', function (seq, aaPos) {
var ml=null;
var i=0;
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === seq ) {
ml=this.getdnaToProt$()[i];
break;
}i++;
}
return ml == null  ? null : ml.locateInFrom$I$I(aaPos, aaPos);
});

Clazz.newMeth(C$, 'findAlignedSequence$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentI', function (seq, al) {
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === seq  || ssm.fromSeq === seq.getDatasetSequence$()  ) {
for (var sourceAligned, $sourceAligned = al.getSequences$().iterator$(); $sourceAligned.hasNext$()&&((sourceAligned=($sourceAligned.next$())),1);) {
if (ssm.mapping.to === sourceAligned.getDatasetSequence$()  || ssm.mapping.to === sourceAligned  ) {
return sourceAligned;
}}
}}
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.mapping.to === seq  || ssm.mapping.to === seq.getDatasetSequence$()  ) {
for (var sourceAligned, $sourceAligned = al.getSequences$().iterator$(); $sourceAligned.hasNext$()&&((sourceAligned=($sourceAligned.next$())),1);) {
if (ssm.fromSeq === sourceAligned.getDatasetSequence$() ) {
return sourceAligned;
}}
}}
return null;
});

Clazz.newMeth(C$, 'getMappedRegion$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$I', function (target, query, queryPos) {
var targetDs=target.getDatasetSequence$() == null  ? target : target.getDatasetSequence$();
var queryDs=query.getDatasetSequence$() == null  ? query : query.getDatasetSequence$();
if (targetDs == null  || queryDs == null  ) {
return null;
}for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === targetDs  && ssm.mapping.to === queryDs  ) {
var codon=ssm.mapping.map.locateInFrom$I$I(queryPos, queryPos);
if (codon != null ) {
return codon;
}} else if (ssm.fromSeq === queryDs  && ssm.mapping.to === targetDs  ) {
var codon=ssm.mapping.map.locateInTo$I$I(queryPos, queryPos);
if (codon != null ) {
return codon;
}}}
return null;
});

Clazz.newMeth(C$, 'getMappedCodons$jalview_datamodel_SequenceI$I', function (protein, aaPos) {
var ml=null;
var dnaSeq=null;
var result=Clazz.new_($I$(1,1));
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.mapping.to === protein  && ssm.mapping.getMap$().getFromRatio$() == 3 ) {
ml=ssm.mapping.map;
dnaSeq=ssm.fromSeq;
var codonPos=ml.locateInFrom$I$I(aaPos, aaPos);
if (codonPos == null ) {
return null;
}codonPos=$I$(6).flattenRanges$IA(codonPos);
var start=dnaSeq.getStart$();
var c1=dnaSeq.getCharAt$I(codonPos[0] - start);
var c2=dnaSeq.getCharAt$I(codonPos[1] - start);
var c3=dnaSeq.getCharAt$I(codonPos[2] - start);
result.add$O(Clazz.array(Character.TYPE, -1, [c1, c2, c3]));
}}
return result.isEmpty$() ? null : result;
});

Clazz.newMeth(C$, 'getMappingsFromSequence$jalview_datamodel_SequenceI', function (seq) {
var result=Clazz.new_($I$(1,1));
var related=Clazz.new_($I$(1,1));
var seqDs=seq.getDatasetSequence$();
seqDs=seqDs != null  ? seqDs : seq;
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
var mapping=ssm.mapping;
if (ssm.fromSeq === seqDs ) {
if (!related.contains$O(mapping.to)) {
result.add$O(mapping);
related.add$O(mapping.to);
}}}
return result;
});

Clazz.newMeth(C$, 'isRealisableWith$jalview_datamodel_SequenceI', function (seq) {
return this.realiseWith$jalview_datamodel_SequenceI$Z(seq, false) > 0;
});

Clazz.newMeth(C$, 'realiseWith$jalview_datamodel_SequenceI', function (seq) {
return this.realiseWith$jalview_datamodel_SequenceI$Z(seq, true);
});

Clazz.newMeth(C$, 'realiseWith$jalview_datamodel_SequenceI$Z', function (seq, doUpdate) {
var ds=seq.getDatasetSequence$() != null  ? seq.getDatasetSequence$() : seq;
var count=0;
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
var dna=ssm.fromSeq;
if (Clazz.instanceOf(dna, "jalview.datamodel.SequenceDummy") && dna.getName$().equals$O(ds.getName$()) ) {
var mapping=ssm.mapping;
var mapStart=mapping.getMap$().getFromLowest$();
var mapEnd=mapping.getMap$().getFromHighest$();
var mappable=C$.couldRealiseSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$I$I(dna, ds, mapStart, mapEnd);
if (mappable) {
count++;
if (doUpdate) {
ds.setSequenceFeatures$java_util_List(dna.getSequenceFeatures$());
ssm.fromSeq=ds;
System.out.println$S("Realised mapped sequence " + ds.getName$());
}}}var mapping=ssm.mapping;
var prot=mapping.getTo$();
var mapStart=mapping.getMap$().getToLowest$();
var mapEnd=mapping.getMap$().getToHighest$();
var mappable=C$.couldRealiseSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$I$I(prot, ds, mapStart, mapEnd);
if (mappable) {
count++;
if (doUpdate) {
ds.setSequenceFeatures$java_util_List(dna.getSequenceFeatures$());
ssm.mapping.setTo$jalview_datamodel_SequenceI(ds);
}}}
return count;
});

Clazz.newMeth(C$, 'couldRealiseSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$I$I', function (existing, replacement, mapStart, mapEnd) {
if (Clazz.instanceOf(existing, "jalview.datamodel.SequenceDummy") && !(Clazz.instanceOf(replacement, "jalview.datamodel.SequenceDummy")) && existing.getName$().equals$O(replacement.getName$())  ) {
var start=replacement.getStart$();
var end=replacement.getEnd$();
var mappingOverlapsSequence=(mapStart >= start && mapStart <= end ) || (mapEnd >= start && mapEnd <= end ) ;
if (mappingOverlapsSequence) {
return true;
}}return false;
}, 1);

Clazz.newMeth(C$, 'updateToDataset$jalview_datamodel_SequenceI', function (seq) {
if (seq == null  || seq.getDatasetSequence$() == null  ) {
return;
}var ds=seq.getDatasetSequence$();
for (var ssm, $ssm = this.mappings.iterator$(); $ssm.hasNext$()&&((ssm=($ssm.next$())),1);) {
if (ssm.fromSeq === seq ) {
ssm.fromSeq=ds;
}if (ssm.mapping.to === seq ) {
ssm.mapping.to=ds;
}}
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.mappings.isEmpty$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.mappings == null  ? "null" : this.mappings.toString();
});

Clazz.newMeth(C$, 'getMappingBetween$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI', function (fromSeq, toSeq) {
var dssFrom=fromSeq.getDatasetSequence$() == null  ? fromSeq : fromSeq.getDatasetSequence$();
var dssTo=toSeq.getDatasetSequence$() == null  ? toSeq : toSeq.getDatasetSequence$();
for (var mapping, $mapping = this.mappings.iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
var from=mapping.fromSeq;
var to=mapping.mapping.to;
if ((from === dssFrom  && to === dssTo  ) || (from === dssTo  && to === dssFrom  ) ) {
return mapping.mapping;
}}
return null;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.mappings.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "jalview.datamodel.AlignedCodonFrame"))) {
return false;
}return this.mappings.equals$O((obj).mappings);
});

Clazz.newMeth(C$, 'getMappings$', function () {
return this.mappings;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AlignedCodonFrame, "SequenceToSequenceMapping", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fromSeq','jalview.datamodel.SequenceI','mapping','jalview.datamodel.Mapping']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$jalview_datamodel_Mapping', function (from, map) {
;C$.$init$.apply(this);
this.fromSeq=from;
this.mapping=map;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return String.format$S$OA("From %s %s", [this.fromSeq.getName$(), this.mapping.toString()]);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.fromSeq == null  ? 0 : this.fromSeq.hashCode$() * 31) + this.mapping.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "jalview.datamodel.AlignedCodonFrame.SequenceToSequenceMapping"))) {
return false;
}var that=obj;
if (this.mapping == null ) {
return that.mapping == null ;
}return (this.fromSeq === that.fromSeq  || (this.fromSeq != null  && that.fromSeq != null   && this.fromSeq.getDatasetSequence$() != null   && this.fromSeq.getDatasetSequence$() === that.fromSeq.getDatasetSequence$()  ) ) && this.mapping.equals$O(that.mapping) ;
});

Clazz.newMeth(C$, 'getFromSeq$', function () {
return this.fromSeq;
});

Clazz.newMeth(C$, 'getMapping$', function () {
return this.mapping;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
