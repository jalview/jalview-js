(function(){var P$=Clazz.newPackage("jalview.io.vamsas"),p$1={},I$=[[0,'jalview.bin.Cache','jalview.util.MapList','uk.ac.vamsas.objects.core.SequenceMapping','jalview.datamodel.AlignedCodonFrame','jalview.structure.StructureSelectionManager','jalview.gui.Desktop','java.util.ArrayList','java.util.Vector']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Sequencemapping", null, 'jalview.io.vamsas.Rangetype');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
{
$I$(1).log.error$O("Not implemented: Jalview Update Alcodon Mapping:TODO!");
}
},1);

C$.$fields$=[['O',['from','uk.ac.vamsas.objects.core.SequenceType','ds','uk.ac.vamsas.objects.core.DataSet','mjvmapping','jalview.datamodel.Mapping']]]

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_objects_core_SequenceMapping', function (datastore, sequenceMapping) {
;C$.superclazz.c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_client_Vobject$Class.apply(this,[datastore, sequenceMapping, Clazz.getClass($I$(2))]);C$.$init$.apply(this);
this.doJvUpdate$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$jalview_datamodel_Mapping$uk_ac_vamsas_objects_core_SequenceType$uk_ac_vamsas_objects_core_DataSet', function (datastore, mjvmapping, from, ds) {
;C$.superclazz.c$$jalview_io_VamsasAppDatastore$O$Class.apply(this,[datastore, mjvmapping.getMap$(), Clazz.getClass($I$(3))]);C$.$init$.apply(this);
this.from=from;
this.ds=ds;
this.mjvmapping=mjvmapping;
this.validate$();
this.doSync$();
}, 1);

Clazz.newMeth(C$, 'validate$', function () {
var sequenceMapping=this.vobj;
if (sequenceMapping == null ) {
return;
}if (this.from != null  && sequenceMapping.getLoc$() !== this.from  ) {
$I$(1).log.warn$O("Probable IMPLEMENTATION ERROR: " + this.from + " doesn't match the local mapping sequence." );
}if (this.ds != null  && sequenceMapping.is__stored_in_document$()  && sequenceMapping.getV_parent$() !== this.ds  ) {
$I$(1).log.warn$O("Probable IMPLEMENTATION ERROR: " + this.ds + " doesn't match the parent of the bound sequence mapping object." );
}});

Clazz.newMeth(C$, 'addToDocument$', function () {
p$1.add$jalview_datamodel_Mapping$uk_ac_vamsas_objects_core_SequenceType$uk_ac_vamsas_objects_core_DataSet.apply(this, [this.mjvmapping, this.from, this.ds]);
});

Clazz.newMeth(C$, 'addFromDocument$', function () {
p$1.add$uk_ac_vamsas_objects_core_SequenceMapping.apply(this, [this.vobj]);
});

Clazz.newMeth(C$, 'conflict$', function () {
p$1.conflict$jalview_datamodel_Mapping$uk_ac_vamsas_objects_core_SequenceMapping.apply(this, [this.mjvmapping, this.vobj]);
});

Clazz.newMeth(C$, 'updateToDoc$', function () {
p$1.update$jalview_datamodel_Mapping$uk_ac_vamsas_objects_core_SequenceMapping.apply(this, [this.mjvmapping, this.vobj]);
});

Clazz.newMeth(C$, 'updateFromDoc$', function () {
p$1.update$uk_ac_vamsas_objects_core_SequenceMapping$jalview_datamodel_Mapping.apply(this, [this.vobj, this.jvobj]);
});

Clazz.newMeth(C$, 'conflict$jalview_datamodel_Mapping$uk_ac_vamsas_objects_core_SequenceMapping', function (mjvmapping, sequenceMapping) {
System.err.println$S("Conflict in update of sequenceMapping " + sequenceMapping.getVorbaId$());
}, p$1);

Clazz.newMeth(C$, 'add$jalview_datamodel_Mapping$uk_ac_vamsas_objects_core_SequenceType$uk_ac_vamsas_objects_core_DataSet', function (mjvmapping, from, ds) {
var jvto=mjvmapping.getTo$();
while (jvto.getDatasetSequence$() != null ){
jvto=jvto.getDatasetSequence$();
}
var to=this.getjv2vObj$O(jvto);
if (to == null ) {
$I$(1).log.warn$O("FIXME NONFATAL - do a second update: Ignoring Forward Reference to seuqence not yet bound to vamsas seuqence object");
return;
}var sequenceMapping=Clazz.new_($I$(3,1));
sequenceMapping.setLoc$O(from);
sequenceMapping.setMap$O(to);
var dnaToProt=false;
var sense=false;
if ((sequenceMapping.getLoc$()).getDictionary$().equals$O("info:iubmb.org/nucleosides")) {
if ((sequenceMapping.getMap$()).getDictionary$().equals$O("info:iubmb.org/aminoacids")) {
dnaToProt=true;
sense=true;
}} else {
if ((sequenceMapping.getMap$()).getDictionary$().equals$O("info:iubmb.org/nucleosides")) {
dnaToProt=true;
sense=false;
}}if (!dnaToProt) {
$I$(1).log.warn$O("Ignoring Mapping - don\'t support protein to protein mapping in vamsas document yet.");
return;
}if (ds == null ) {
if (sense) {
ds=(sequenceMapping.getLoc$()).getV_parent$();
} else {
ds=(sequenceMapping.getMap$()).getV_parent$();
}}if (sense) {
this.initMapType$uk_ac_vamsas_objects_core_MapType$jalview_util_MapList$Z(sequenceMapping, mjvmapping.getMap$(), true);
} else {
this.initMapType$uk_ac_vamsas_objects_core_MapType$jalview_util_MapList$Z(sequenceMapping, mjvmapping.getMap$().getInverse$(), true);
}ds.addSequenceMapping$uk_ac_vamsas_objects_core_SequenceMapping(sequenceMapping);
sequenceMapping.setProvenance$uk_ac_vamsas_objects_core_Provenance(this.dummyProvenance$S("user defined coding region translation"));
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(mjvmapping.getMap$(), sequenceMapping);
$I$(1).log.debug$O("Successfully created mapping " + sequenceMapping.getVorbaId$());
}, p$1);

Clazz.newMeth(C$, 'update$uk_ac_vamsas_objects_core_SequenceMapping$jalview_datamodel_Mapping', function (sequenceMapping, mjvmapping) {
$I$(1).log.error$O("Not implemented: Update DBRef Mapping from Jalview");
}, p$1);

Clazz.newMeth(C$, 'update$jalview_datamodel_Mapping$uk_ac_vamsas_objects_core_SequenceMapping', function (mjvmapping, sequenceMapping) {
$I$(1).log.error$O("Not implemented: Jalview Update Sequence DBRef Mapping");
}, p$1);

Clazz.newMeth(C$, 'add$uk_ac_vamsas_objects_core_SequenceMapping', function (sequenceMapping) {
var mobj;
var from=null;
var to=null;
var dnaToProt=false;
var sense=false;
var sdloc=null;
var sdmap=null;
if (Clazz.instanceOf(sequenceMapping.getLoc$(), "uk.ac.vamsas.objects.core.AlignmentSequence")) {
sdloc=(sequenceMapping.getLoc$()).getRefid$();
} else {
sdloc=(sequenceMapping.getLoc$());
}if (Clazz.instanceOf(sequenceMapping.getMap$(), "uk.ac.vamsas.objects.core.AlignmentSequence")) {
sdmap=(sequenceMapping.getMap$()).getRefid$();
} else {
sdmap=(sequenceMapping.getMap$());
}if (sdloc == null  || sdmap == null  ) {
$I$(1).log.info$O("Ignoring non sequence-sequence mapping");
return;
}mobj=this.getvObj2jv$uk_ac_vamsas_client_Vobject(sdloc);
if (Clazz.instanceOf(mobj, "jalview.datamodel.SequenceI")) {
from=mobj;
}mobj=this.getvObj2jv$uk_ac_vamsas_client_Vobject(sdmap);
if (Clazz.instanceOf(mobj, "jalview.datamodel.SequenceI")) {
to=mobj;
}if (from == null  || to == null  ) {
$I$(1).log.error$O("Probable Vamsas implementation error : unbound dataset sequences involved in a mapping are being parsed!");
return;
}if (sdloc.getDictionary$().equals$O("info:iubmb.org/nucleosides")) {
if (sdmap.getDictionary$().equals$O("info:iubmb.org/aminoacids")) {
dnaToProt=true;
sense=true;
}} else {
if (sdmap.getDictionary$().equals$O("info:iubmb.org/nucleosides")) {
dnaToProt=true;
sense=false;
}}var dsLoc=this.getvObj2jv$uk_ac_vamsas_client_Vobject(sdloc.getV_parent$());
var dsMap=this.getvObj2jv$uk_ac_vamsas_client_Vobject(sdmap.getV_parent$());
var acf=Clazz.new_($I$(4,1));
if (dsLoc != null  && dsLoc !== dsMap  ) {
dsLoc.addCodonFrame$jalview_datamodel_AlignedCodonFrame(acf);
}if (dsMap != null ) {
dsMap.addCodonFrame$jalview_datamodel_AlignedCodonFrame(acf);
}var mapping=null;
if (dnaToProt) {
if (!sense) {
mapping=this.parsemapType$uk_ac_vamsas_objects_core_MapType$I$I(sequenceMapping, 1, 3);
mapping=Clazz.new_([mapping.getToRanges$(), mapping.getFromRanges$(), mapping.getToRatio$(), mapping.getFromRatio$()],$I$(2,1).c$$java_util_List$java_util_List$I$I);
acf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(to, from, mapping);
} else {
mapping=this.parsemapType$uk_ac_vamsas_objects_core_MapType$I$I(sequenceMapping, 3, 1);
acf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(from, to, mapping);
}} else {
mapping=this.parsemapType$uk_ac_vamsas_objects_core_MapType$I$I(sequenceMapping, 1, 1);
acf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(from, to, mapping);
}this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(mapping, sequenceMapping);
$I$(5,"getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider",[$I$(6).instance]).registerMapping$jalview_datamodel_AlignedCodonFrame(acf);
}, p$1);

Clazz.newMeth(C$, 'matchConjugateDBRefs$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList', function (from, to, smap) {
if (from.getDBRefs$() == null  && to.getDBRefs$() == null  ) {
if ($I$(1).log.isDebugEnabled$()) {
$I$(1).log.debug$O("Not matching conjugate refs for " + from.getName$() + " and " + to.getName$() );
}return;
}if ($I$(1).log.isDebugEnabled$()) {
$I$(1).log.debug$O("Matching conjugate refs for " + from.getName$() + " and " + to.getName$() );
}var fdb=from.getDBRefs$();
var tdb=Clazz.new_([to.getDBRefs$()],$I$(7,1).c$$java_util_Collection);
var tdblen=to.getDBRefs$().size$();
var matched=Clazz.new_($I$(8,1));
var smapI=smap.getInverse$();
for (var f=0, fn=fdb.size$(); f < fn; f++) {
var fe=fdb.get$I(f);
var fmp=fe.getMap$();
var fmpnnl=(fmp != null );
var smapfromlocal2fe=(fmpnnl) ? smap.equals$O(fmp.getMap$()) : false;
var smapfromfemap2local=(fmpnnl) ? smapI.equals$O(fmp.getMap$()) : false;
for (var t=0; t < tdblen; t++) {
var te=tdb.get$I(t);
if (te != null ) {
if (fe.getSource$().equals$O(te.getSource$()) && fe.getAccessionId$().equals$O(te.getAccessionId$()) ) {
var tmp=te.getMap$();
var tmpnnl=tmp != null ;
if (tmpnnl && tmp.getTo$() != null  ) {
}var smaptolocal2tm=(tmpnnl) ? smap.equals$O(tmp.getMap$()) : false;
var smaptotemap2local=(tmpnnl) ? smapI.equals$O(fmp.getMap$()) : false;
if (smapfromlocal2fe && smaptotemap2local ) {
fmp.setTo$jalview_datamodel_SequenceI(to);
tmp.setTo$jalview_datamodel_SequenceI(from);
} else if (smapfromfemap2local && smaptolocal2tm ) {
fmp.setTo$jalview_datamodel_SequenceI(to);
}}}}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
