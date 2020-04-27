(function(){var P$=Clazz.newPackage("jalview.io.vamsas"),p$1={},I$=[[0,'uk.ac.vamsas.objects.core.DbRef','jalview.datamodel.DBRefEntry','uk.ac.vamsas.objects.core.Map','jalview.bin.Cache','jalview.io.vamsas.DatastoreItem','jalview.io.vamsas.Datasetsequence','jalview.datamodel.Mapping']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Dbref", null, 'jalview.io.vamsas.Rangetype');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sq=null;
this.sequence=null;
},1);

C$.$fields$=[['O',['sq','jalview.datamodel.SequenceI','sequence','uk.ac.vamsas.objects.core.Sequence','ds','uk.ac.vamsas.objects.core.DataSet']]]

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$jalview_datamodel_DBRefEntry$jalview_datamodel_SequenceI$uk_ac_vamsas_objects_core_Sequence$uk_ac_vamsas_objects_core_DataSet', function (datastore, dbentry, sq2, sequence2, dataset) {
;C$.superclazz.c$$jalview_io_VamsasAppDatastore$O$Class.apply(this,[datastore, dbentry, Clazz.getClass($I$(1))]);C$.$init$.apply(this);
this.sq=sq2;
this.sequence=sequence2;
this.jvobj=dbentry;
this.ds=dataset;
this.doSync$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_objects_core_DbRef$uk_ac_vamsas_objects_core_Sequence$jalview_datamodel_SequenceI', function (datastore, ref, vdseq, dsseq) {
;C$.superclazz.c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_client_Vobject$Class.apply(this,[datastore, ref, Clazz.getClass($I$(2))]);C$.$init$.apply(this);
this.sequence=vdseq;
this.sq=dsseq;
this.ds=vdseq.getV_parent$();
this.doJvUpdate$();
}, 1);

Clazz.newMeth(C$, 'updateToDoc$', function () {
var dbref=this.vobj;
var jvobj=this.jvobj;
dbref.setAccessionId$S(jvobj.getAccessionId$());
dbref.setSource$S(jvobj.getSource$());
dbref.setVersion$S(jvobj.getVersion$());
if (jvobj.getMap$() != null ) {
var mp=jvobj.getMap$();
if (mp.getMap$() != null ) {
var vMap=null;
if (dbref.getMapCount$() == 0) {
vMap=Clazz.new_($I$(3,1));
this.initMapType$uk_ac_vamsas_objects_core_MapType$jalview_util_MapList$Z(vMap, mp.getMap$(), true);
dbref.addMap$uk_ac_vamsas_objects_core_Map(vMap);
} else {
vMap=dbref.getMap$I(0);
this.initMapType$uk_ac_vamsas_objects_core_MapType$jalview_util_MapList$Z(vMap, mp.getMap$(), true);
}p$1.updateMapTo$jalview_datamodel_Mapping.apply(this, [mp]);
}} else {
$I$(4).log.debug$O("Ignoring mapless DbRef.Map " + jvobj.getSrcAccString$());
}});

Clazz.newMeth(C$, 'updateMapTo$jalview_datamodel_Mapping', function (mp) {
$I$(5).log.info$O("Performing updateMapTo remove this message when we know what we\'re doing.");
if (mp != null  && mp.getTo$() != null  ) {
if (mp.getTo$().getDatasetSequence$() == null ) {
var dssync=this.dsReg.getDatastoreItemFor$O(mp.getTo$());
if (dssync == null ) {
dssync=Clazz.new_([this.datastore, mp.getTo$(), (mp.getMappedWidth$() == mp.getWidth$()) ? this.sequence.getDictionary$() : ((mp.getMappedWidth$() == 3) ? "info:iubmb.org/nucleosides" : "info:iubmb.org/aminoacids"), this.ds],$I$(6,1).c$$jalview_io_VamsasAppDatastore$jalview_datamodel_SequenceI$S$uk_ac_vamsas_objects_core_DataSet);
}}} else {
$I$(5).log.debug$O("Ignoring non-dataset sequence mapping.");
}}, p$1);

Clazz.newMeth(C$, 'updateFromDoc$', function () {
var vobj=this.vobj;
var jvobj=this.jvobj;
jvobj.setAccessionId$S(vobj.getAccessionId$());
jvobj.setSource$S(vobj.getSource$());
jvobj.setVersion$S(vobj.getVersion$());
if (vobj.getMapCount$() > 0) {
if (vobj.getMapCount$() > 1) {
$I$(4).log.debug$O("Ignoring additional mappings on DbRef: " + jvobj.getSource$() + ":" + jvobj.getAccessionId$() );
}var mp=Clazz.new_([this.parsemapType$uk_ac_vamsas_objects_core_MapType(vobj.getMap$I(0))],$I$(7,1).c$$jalview_util_MapList);
if (jvobj.getMap$() == null  || !mp.equals$O(jvobj.getMap$()) ) {
jvobj.setMap$jalview_datamodel_Mapping(mp);
}}});

Clazz.newMeth(C$, 'conflict$', function () {
var vobj=this.vobj;
var jvobj=this.jvobj;
$I$(4).log.debug$O("Conflict in dbentry update for " + vobj.getAccessionId$() + vobj.getSource$() + " " + vobj.getVorbaId$() );
});

Clazz.newMeth(C$, 'addFromDocument$', function () {
var vobj=this.vobj;
var jvobj=this.jvobj;
this.sq.addDBRef$jalview_datamodel_DBRefEntry(jvobj=Clazz.new_([vobj.getSource$().toString(), vobj.getVersion$().toString(), vobj.getAccessionId$().toString()],$I$(2,1).c$$S$S$S));
if (vobj.getMapCount$() > 0) {
if (vobj.getMapCount$() > 1) {
$I$(4).log.debug$O("Ignoring additional mappings on DbRef: " + jvobj.getSource$() + ":" + jvobj.getAccessionId$() );
}var mp=Clazz.new_([this.parsemapType$uk_ac_vamsas_objects_core_MapType(vobj.getMap$I(0))],$I$(7,1).c$$jalview_util_MapList);
jvobj.setMap$jalview_datamodel_Mapping(mp);
}this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(jvobj, vobj);
});

Clazz.newMeth(C$, 'addToDocument$', function () {
var jvobj=this.jvobj;
var dbref=Clazz.new_($I$(1,1));
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(jvobj, dbref);
dbref.setAccessionId$S(jvobj.getAccessionId$());
dbref.setSource$S(jvobj.getSource$());
dbref.setVersion$S(jvobj.getVersion$());
this.sequence.addDbRef$uk_ac_vamsas_objects_core_DbRef(dbref);
if (jvobj.getMap$() != null ) {
var mp=jvobj.getMap$();
if (mp.getMap$() != null ) {
var vMap=Clazz.new_($I$(3,1));
this.initMapType$uk_ac_vamsas_objects_core_MapType$jalview_util_MapList$Z(vMap, mp.getMap$(), true);
dbref.addMap$uk_ac_vamsas_objects_core_Map(vMap);
p$1.updateMapTo$jalview_datamodel_Mapping.apply(this, [mp]);
} else {
$I$(4).log.debug$O("Ignoring mapless DbRef.Map " + jvobj.getSrcAccString$());
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
