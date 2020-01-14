(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[[0,'java.util.ArrayList','jalview.datamodel.AlignmentAnnotation']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StructureMapping");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mappingDetails=null;
this.sequence=null;
this.pdbfile=null;
this.pdbid=null;
this.pdbchain=null;
this.mapping=null;
this.seqToPdbMapping=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.seqToPdbMapping=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$S$S$S$java_util_HashMap$S', function (seq, pdbfile, pdbid, chain, mapping, mappingDetails) {
C$.$init$.apply(this);
this.sequence=seq;
this.pdbfile=pdbfile;
this.pdbid=pdbid;
this.pdbchain=chain;
this.mapping=mapping;
this.mappingDetails=mappingDetails;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$S$S$S$java_util_HashMap$S$jalview_datamodel_Mapping', function (seq, pdbFile2, pdbId2, chain, mapping2, mappingOutput, seqToPdbMapping) {
C$.c$$jalview_datamodel_SequenceI$S$S$S$java_util_HashMap$S.apply(this, [seq, pdbFile2, pdbId2, chain, mapping2, mappingOutput]);
this.seqToPdbMapping=seqToPdbMapping;
}, 1);

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'getChain$', function () {
return this.pdbchain;
});

Clazz.newMeth(C$, 'getPdbId$', function () {
return this.pdbid;
});

Clazz.newMeth(C$, 'getAtomNum$I', function (seqpos) {
var resNumAtomMap=this.mapping.get$O(new Integer(seqpos));
if (resNumAtomMap != null ) {
return resNumAtomMap[1];
} else {
return -2147483648;
}});

Clazz.newMeth(C$, 'getPDBResNum$I', function (seqpos) {
var resNumAtomMap=this.mapping.get$O(new Integer(seqpos));
if (resNumAtomMap != null ) {
return resNumAtomMap[0];
} else {
return -2147483648;
}});

Clazz.newMeth(C$, 'getPDBResNumRanges$I$I', function (fromSeqPos, toSeqPos) {
var result=Clazz.new_($I$(1));
var startRes=-1;
var endRes=-1;
for (var i=fromSeqPos; i <= toSeqPos; i++) {
var resNo=this.getPDBResNum$I(i);
if (resNo == -2147483648) {
continue;
}if (startRes == -1) {
startRes=resNo;
endRes=resNo;
}if (resNo >= startRes && resNo <= endRes ) {
continue;
}if (resNo == startRes - 1) {
startRes--;
continue;
}if (resNo == endRes + 1) {
endRes++;
continue;
}result.add$TE(Clazz.array(Integer.TYPE, -1, [startRes, endRes]));
startRes=resNo;
endRes=resNo;
}
if (startRes != -1) {
result.add$TE(Clazz.array(Integer.TYPE, -1, [startRes, endRes]));
}return result;
});

Clazz.newMeth(C$, 'getSeqPos$I', function (pdbResNum) {
for (var seqPos, $seqPos = this.mapping.keySet$().iterator$(); $seqPos.hasNext$()&&((seqPos=($seqPos.next$())),1);) {
if (pdbResNum == this.getPDBResNum$I((seqPos).intValue$())) {
return (seqPos).intValue$();
}}
return -2147483648;
});

Clazz.newMeth(C$, 'transfer$jalview_datamodel_AlignmentAnnotation', function (ana) {
var ala_copy=Clazz.new_($I$(2).c$$jalview_datamodel_AlignmentAnnotation,[ana]);
var ds=this.sequence;
while (ds.getDatasetSequence$() != null ){
ds=ds.getDatasetSequence$();
}
ala_copy.remap$jalview_datamodel_SequenceI$java_util_HashMap$I$I$I(ds, this.mapping, -1, -1, 0);
ds.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(ala_copy);
if (ds !== this.sequence ) {
ala_copy=Clazz.new_($I$(2).c$$jalview_datamodel_AlignmentAnnotation,[ala_copy]);
this.sequence.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(ala_copy);
}return ala_copy;
});

Clazz.newMeth(C$, 'getMappingDetailsOutput$', function () {
return this.mappingDetails;
});

Clazz.newMeth(C$, 'getMapping$', function () {
return this.mapping;
});

Clazz.newMeth(C$, 'getSeqToPdbMapping$', function () {
return this.seqToPdbMapping;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var prime=31;
var result=1;
result=31 * result + ((this.mappingDetails == null ) ? 0 : this.mappingDetails.hashCode$());
result=31 * result + ((this.pdbchain == null ) ? 0 : this.pdbchain.hashCode$());
result=31 * result + ((this.pdbfile == null ) ? 0 : this.pdbfile.hashCode$());
result=31 * result + ((this.pdbid == null ) ? 0 : this.pdbid.hashCode$());
result=31 * result + ((this.seqToPdbMapping == null ) ? 0 : this.seqToPdbMapping.hashCode$());
result=31 * result + ((this.sequence == null ) ? 0 : this.sequence.hashCode$());
return result;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (obj == null ) {
return false;
}if (this.getClass$() !== obj.getClass$() ) {
return false;
}var other=obj;
if (this.mappingDetails == null ) {
if (other.mappingDetails != null ) {
return false;
}} else if (!this.mappingDetails.equals$O(other.mappingDetails)) {
return false;
}if (this.pdbchain == null ) {
if (other.pdbchain != null ) {
return false;
}} else if (!this.pdbchain.equals$O(other.pdbchain)) {
return false;
}if (this.pdbfile == null ) {
if (other.pdbfile != null ) {
return false;
}} else if (!this.pdbfile.equals$O(other.pdbfile)) {
return false;
}if (this.pdbid == null ) {
if (other.pdbid != null ) {
return false;
}} else if (!this.pdbid.equals$O(other.pdbid)) {
return false;
}if (this.seqToPdbMapping == null ) {
if (other.seqToPdbMapping != null ) {
return false;
}} else if (!this.seqToPdbMapping.equals$O(other.seqToPdbMapping)) {
return false;
}if (this.sequence !== other.sequence ) {
return false;
}return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
