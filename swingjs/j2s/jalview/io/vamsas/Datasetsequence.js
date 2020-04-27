(function(){var P$=Clazz.newPackage("jalview.io.vamsas"),p$1={},I$=[[0,'uk.ac.vamsas.objects.core.Sequence','jalview.datamodel.SequenceI','jalview.datamodel.Sequence','jalview.io.vamsas.DatastoreItem','jalview.io.vamsas.Sequencefeature','jalview.io.vamsas.Dbref']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Datasetsequence", null, 'jalview.io.vamsas.DatastoreItem');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modified=false;
},1);

C$.$fields$=[['Z',['modified'],'S',['dict'],'O',['dataset','uk.ac.vamsas.objects.core.DataSet']]]

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$jalview_datamodel_SequenceI$S$uk_ac_vamsas_objects_core_DataSet', function (vamsasAppDatastore, sq, theDict, theDataset) {
;C$.superclazz.c$$jalview_io_VamsasAppDatastore$O$Class.apply(this,[vamsasAppDatastore, sq, Clazz.getClass($I$(1))]);C$.$init$.apply(this);
this.dataset=theDataset;
this.dict=theDict;
this.doSync$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_objects_core_Sequence', function (vamsasAppDatastore, vdseq) {
;C$.superclazz.c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_client_Vobject$Class.apply(this,[vamsasAppDatastore, vdseq, Clazz.getClass($I$(2),['addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation','addDBRef$jalview_datamodel_DBRefEntry','addPDBId$jalview_datamodel_PDBEntry','addSequenceFeature$jalview_datamodel_SequenceFeature','createDatasetSequence$','deleteChars$I$I','deleteFeature$jalview_datamodel_SequenceFeature','deriveSequence$','findFeatures$I$I$SA','findIndex$I','findPosition$I','findPositionMap$','findPositions$I$I','firstResidueOutsideIterator$java_util_Iterator','gapBitset$','gapMap$','getAlignmentAnnotations$S$S','getAllPDBEntries$','getAnnotation$','getAnnotation$S','getCharAt$I','getDBRefs$','getDatasetSequence$','getDescription$','getDisplayId$Z','getEnd$','getFeatures$','getGeneLoci$','getInsertions$','getInsertionsAsBits$','getLength$','getName$','getPDBEntry$S','getPrimaryDBRefs$','getRNA$','getSequence$','getSequence$I$I','getSequenceAsString$','getSequenceAsString$I$I','getSequenceFeatures$','getSequenceStringFromIterator$java_util_Iterator','getStart$','getSubSequence$I$I','getVamsasId$','hasAnnotation$jalview_datamodel_AlignmentAnnotation','insertCharAt$I$C','insertCharAt$I$I$C','isProtein$','removeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation','replace$C$C','sequenceChanged$','setAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA','setDBRefs$jalview_datamodel_Sequence_DBModList','setDatasetSequence$jalview_datamodel_SequenceI','setDescription$S','setEnd$I','setGeneLoci$S$S$S$jalview_util_MapList','setName$S','setPDBId$java_util_Vector','setRNA$fr_orsay_lri_varna_models_rna_RNA','setSequence$S','setSequenceFeatures$java_util_List','setStart$I','setVamsasId$S','transferAnnotation$jalview_datamodel_SequenceI$jalview_datamodel_Mapping','updatePDBIds$'])]);C$.$init$.apply(this);
this.doJvUpdate$();
}, 1);

Clazz.newMeth(C$, 'addFromDocument$', function () {
var vseq=this.vobj;
var dsseq=Clazz.new_([vseq.getName$(), vseq.getSequence$(), (vseq.getStart$()|0), (vseq.getEnd$()|0)],$I$(3,1).c$$S$S$I$I);
dsseq.setDescription$S(vseq.getDescription$());
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(dsseq, vseq);
dsseq.setVamsasId$S(vseq.getVorbaId$().getId$());
this.jvobj=dsseq;
this.modified=true;
});

Clazz.newMeth(C$, 'updateFromDoc$', function () {
var sq=this.vobj;
var sequence=this.jvobj;
if (!sequence.getSequenceAsString$().equals$O(sq.getSequence$())) {
$I$(4).log.warn$O("Potential Client Error ! - mismatch of dataset sequence: and jalview internal dataset sequence.");
} else {
if (sequence.getDescription$() != null  && (sequence.getDescription$() == null  || !sequence.getDescription$().equals$O(sq.getDescription$()) ) ) {
sequence.setDescription$S(sq.getDescription$());
this.modified=true;
}if (sequence.getSequence$() == null  || !sequence.getSequenceAsString$().equals$O(sq.getSequence$()) ) {
if (sequence.getStart$() != sq.getStart$() || sequence.getEnd$() != sq.getEnd$() ) {
sequence.setSequence$S(sq.getSequence$());
sequence.setStart$I((sq.getStart$()|0));
sequence.setEnd$I((sq.getEnd$()|0));
this.modified=true;
}}if (!sequence.getName$().equals$O(sq.getName$())) {
sequence.setName$S(sq.getName$());
this.modified=true;
}this.modified|=p$1.updateJvDbRefs.apply(this, []);
}});

Clazz.newMeth(C$, 'updateSqFeatures', function () {
var changed=false;
var sq=this.jvobj;
var sfs=sq.getSequenceFeatures$();
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
changed|=Clazz.new_($I$(5,1).c$$jalview_io_VamsasAppDatastore$jalview_datamodel_SequenceFeature$uk_ac_vamsas_objects_core_DataSet$uk_ac_vamsas_objects_core_Sequence,[this.datastore, sf, this.dataset, this.vobj]).docWasUpdated$();
}
return changed;
}, p$1);

Clazz.newMeth(C$, 'addToDocument$', function () {
var sq=this.jvobj;
var sequence=Clazz.new_($I$(1,1));
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(sq, sequence);
sq.setVamsasId$S(sequence.getVorbaId$().getId$());
sequence.setSequence$S(sq.getSequenceAsString$());
sequence.setDictionary$S(this.dict);
sequence.setName$S(sq.getName$());
sequence.setStart$J(sq.getStart$());
sequence.setEnd$J(sq.getEnd$());
sequence.setDescription$S(sq.getDescription$());
this.dataset.addSequence$uk_ac_vamsas_objects_core_Sequence(sequence);
this.vobj=sequence;
p$1.updateSqFeatures.apply(this, []);
p$1.updateDbRefs.apply(this, []);
});

Clazz.newMeth(C$, 'updateDbRefs', function () {
var modifiedthedoc=false;
var sq=this.jvobj;
if (sq.getDatasetSequence$() == null  && sq.getDBRefs$() != null  ) {
var entries=sq.getDBRefs$();
for (var db=0, dn=entries.size$(); db < dn; db++) {
modifiedthedoc|=Clazz.new_([this.datastore, entries.get$I(db), sq, this.vobj, this.dataset],$I$(6,1).c$$jalview_io_VamsasAppDatastore$jalview_datamodel_DBRefEntry$jalview_datamodel_SequenceI$uk_ac_vamsas_objects_core_Sequence$uk_ac_vamsas_objects_core_DataSet).docWasUpdated$();
}
}return modifiedthedoc;
}, p$1);

Clazz.newMeth(C$, 'updateJvDbRefs', function () {
var modifiedtheseq=false;
var sq=this.jvobj;
var vsq=this.vobj;
if (vsq.getDbRefCount$() > 0) {
var entries=vsq.getDbRef$();
for (var db=0; db < entries.length; db++) {
modifiedtheseq|=Clazz.new_($I$(6,1).c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_objects_core_DbRef$uk_ac_vamsas_objects_core_Sequence$jalview_datamodel_SequenceI,[this.datastore, entries[db], vsq, sq]).jvWasUpdated$();
}
}return modifiedtheseq;
}, p$1);

Clazz.newMeth(C$, 'conflict$', function () {
$I$(4).log.warn$O("Conflict in dataset sequence update to document. Overwriting document");
this.updateToDoc$();
});

Clazz.newMeth(C$, 'updateToDoc$', function () {
var sq=this.jvobj;
var sequence=this.vobj;
if (sequence.getDescription$() != null  && (sequence.getDescription$() == null  || !sequence.getDescription$().equals$O(sq.getDescription$()) ) ) {
sequence.setDescription$S(sq.getDescription$());
this.modified=true;
}if (sequence.getSequence$() == null  || !sequence.getSequence$().equals$O(sq.getSequenceAsString$()) ) {
if (sequence.getStart$() != sq.getStart$() || sequence.getEnd$() != sq.getEnd$() ) {
sequence.setSequence$S(sq.getSequenceAsString$());
sequence.setStart$J(sq.getStart$());
sequence.setEnd$J(sq.getEnd$());
this.modified=true;
}}if (!this.dict.equals$O(sequence.getDictionary$())) {
sequence.setDictionary$S(this.dict);
this.modified=true;
}if (!sequence.getName$().equals$O(sq.getName$())) {
sequence.setName$S(sq.getName$());
this.modified=true;
}this.modified|=p$1.updateDbRefs.apply(this, []);
this.modified|=p$1.updateSqFeatures.apply(this, []);
});

Clazz.newMeth(C$, 'getModified$', function () {
return this.modified;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
