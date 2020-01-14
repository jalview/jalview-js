(function(){var P$=Clazz.newPackage("jalview.io.vamsas"),p$1={},I$=[[0,'uk.ac.vamsas.objects.core.DataSetAnnotations','jalview.datamodel.SequenceFeature','uk.ac.vamsas.objects.core.Provenance','jalview.bin.Cache','jalview.io.vamsas.DatastoreItem','uk.ac.vamsas.objects.core.Seg','jalview.util.UrlLink','uk.ac.vamsas.objects.core.Link','uk.ac.vamsas.objects.core.Score','uk.ac.vamsas.objects.core.Property','uk.ac.vamsas.objects.utils.Properties']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Sequencefeature", null, 'jalview.io.vamsas.Rangetype');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dataset=null;
this.sequence=null;
this.dsSeq=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$jalview_datamodel_SequenceFeature$uk_ac_vamsas_objects_core_DataSet$uk_ac_vamsas_objects_core_Sequence', function (vamsasAppDatastore, sequenceFeature, dataset, sequence) {
C$.superclazz.c$$jalview_io_VamsasAppDatastore$O$Class.apply(this, [vamsasAppDatastore, sequenceFeature, Clazz.getClass($I$(1))]);
C$.$init$.apply(this);
this.dataset=dataset;
this.sequence=sequence;
this.doSync$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_objects_core_DataSetAnnotations$jalview_datamodel_SequenceI', function (vamsasAppDatastore, dseta, dsSeq) {
C$.superclazz.c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_client_Vobject$Class.apply(this, [vamsasAppDatastore, dseta, Clazz.getClass($I$(2))]);
C$.$init$.apply(this);
this.dsSeq=dsSeq;
this.doJvUpdate$();
}, 1);

Clazz.newMeth(C$, 'addToDocument$', function () {
var dsa=this.vobj;
var feature=this.jvobj;
dsa=p$1.getDSAnnotationFromJalview$uk_ac_vamsas_objects_core_RangeAnnotation$jalview_datamodel_SequenceFeature.apply(this, [Clazz.new_($I$(1)), feature]);
if (dsa.getProvenance$() == null ) {
dsa.setProvenance$uk_ac_vamsas_objects_core_Provenance(Clazz.new_($I$(3)));
}this.addProvenance$uk_ac_vamsas_objects_core_Provenance$S(dsa.getProvenance$(), "created");
dsa.addSeqRef$O(this.sequence);
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(feature, dsa);
this.dataset.addDataSetAnnotations$uk_ac_vamsas_objects_core_DataSetAnnotations(dsa);
});

Clazz.newMeth(C$, 'addFromDocument$', function () {
var dsa=this.vobj;
if (dsa.getSeqRefCount$() != 1) {
$I$(4).log.warn$O("Not binding " + dsa.getVorbaId$() + " to Sequence Feature - has multiple dataset sequence references." );
return;
}var sf=this.jvobj;
this.dsSeq.addSequenceFeature$jalview_datamodel_SequenceFeature(sf=p$1.getJalviewSeqFeature$uk_ac_vamsas_objects_core_RangeAnnotation.apply(this, [dsa]));
this.jvobj=sf;
this.bindjvvobj$O$uk_ac_vamsas_client_Vobject(sf, dsa);
});

Clazz.newMeth(C$, 'conflict$', function () {
$I$(5).log.warn$O("Untested sequencefeature conflict code");
var dsa=this.vobj;
var feature=this.jvobj;
var sf=p$1.getJalviewSeqFeature$uk_ac_vamsas_objects_core_RangeAnnotation.apply(this, [dsa]);
this.replaceJvObjMapping$O$O(feature, sf);
this.dsSeq.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
this.addToDocument$();
});

Clazz.newMeth(C$, 'updateToDoc$', function () {
var dsa=this.vobj;
var feature=this.jvobj;
if (dsa.getSeqRefCount$() != 1) {
this.replaceJvObjMapping$O$O(feature, null);
$I$(4).log.warn$O("Binding of annotation to jalview feature has changed. Removing binding and recreating.");
this.doSync$();
} else {
var oldref=dsa.get__last_hash$();
p$1.getDSAnnotationFromJalview$uk_ac_vamsas_objects_core_RangeAnnotation$jalview_datamodel_SequenceFeature.apply(this, [dsa, feature]);
if (oldref != dsa.hashCode$()) {
$I$(4).log.debug$O("Updated dataset sequence annotation from feature.");
this.addProvenance$uk_ac_vamsas_objects_core_Provenance$S(dsa.getProvenance$(), "modified");
}}});

Clazz.newMeth(C$, 'updateFromDoc$', function () {
var dsa=this.vobj;
var feature=this.jvobj;
if (dsa.getSeqRefCount$() != 1) {
this.replaceJvObjMapping$O$O(feature, null);
$I$(4).log.warn$O("annotation (" + dsa.getVorbaId$() + " bound to jalview feature cannot be mapped. Removing binding, deleting feature, and deleting feature." );
this.dsSeq.deleteFeature$jalview_datamodel_SequenceFeature(feature);
} else {
var newsf=p$1.getJalviewSeqFeature$uk_ac_vamsas_objects_core_RangeAnnotation.apply(this, [dsa]);
this.dsSeq.deleteFeature$jalview_datamodel_SequenceFeature(feature);
this.replaceJvObjMapping$O$O(feature, newsf);
this.dsSeq.addSequenceFeature$jalview_datamodel_SequenceFeature(newsf);
if (feature.otherDetails != null ) {
feature.otherDetails.clear$();
}}});

Clazz.newMeth(C$, 'getDSAnnotationFromJalview$uk_ac_vamsas_objects_core_RangeAnnotation$jalview_datamodel_SequenceFeature', function (dsa, feature) {
dsa.setType$S(feature.getType$());
var vSeg=Clazz.new_($I$(6));
vSeg.setStart$I(feature.getBegin$());
vSeg.setEnd$I(feature.getEnd$());
vSeg.setInclusive$Z(true);
if (dsa.getSegCount$() > 1) {
$I$(4).log.debug$O("About to destroy complex annotation in vamsas document mapped to sequence feature (" + dsa.getVorbaId$() + ")" );
}dsa.setSeg$uk_ac_vamsas_objects_core_SegA(Clazz.array($I$(6), -1, [vSeg]));
dsa.setDescription$S(feature.getDescription$());
dsa.setStatus$S(feature.getStatus$());
if (feature.links != null  && feature.links.size$() > 0 ) {
for (var i=0, iSize=feature.links.size$(); i < iSize; i++) {
var link=feature.links.elementAt$I(i);
var ulink=Clazz.new_($I$(7).c$$S,[link]);
if (ulink.isValid$()) {
var vLink=Clazz.new_($I$(8));
vLink.setContent$S(ulink.getLabel$());
vLink.setHref$S(ulink.getTarget$());
dsa.addLink$uk_ac_vamsas_objects_core_Link(vLink);
}}
}dsa.setGroup$S(feature.getFeatureGroup$());
if (!Float.isNaN$F(feature.getScore$())) {
var fscore=Clazz.new_($I$(9));
dsa.setScore$uk_ac_vamsas_objects_core_ScoreA(Clazz.array($I$(9), -1, [fscore]));
fscore.setContent$F(feature.getScore$());
fscore.setName$S(feature.getType$());
}if (feature.otherDetails != null ) {
var iter=feature.otherDetails.keySet$().iterator$();
var props=dsa.getPropertyAsReference$();
while (iter.hasNext$()){
var key=iter.next$();
if (!key.equalsIgnoreCase$S("score") && !key.equalsIgnoreCase$S("status") ) {
var nprop=Clazz.new_($I$(10));
nprop.setName$S(key);
var vlu=feature.getValue$S(key);
nprop.setContent$S(feature.getValue$S(key).toString());
var valid=false;
if (Clazz.instanceOf(vlu, "java.lang.String")) {
nprop.setType$S("string");
valid=true;
} else if (Clazz.instanceOf(vlu, "java.lang.Integer")) {
valid=true;
nprop.setType$S("integer");
} else if (Clazz.instanceOf(vlu, "java.lang.Float")) {
nprop.setType$S("float");
valid=true;
}if (valid) {
if (props != null ) {
$I$(11).addOrReplace$java_util_Vector$uk_ac_vamsas_objects_core_Property(props, nprop);
} else {
dsa.addProperty$uk_ac_vamsas_objects_core_Property(nprop);
}}}}
}return dsa;
}, p$1);

Clazz.newMeth(C$, 'getJalviewSeqFeature$uk_ac_vamsas_objects_core_RangeAnnotation', function (dseta) {
var se=this.getBounds$uk_ac_vamsas_objects_core_RangeType(dseta);
var scoreFound=false;
var theScore=0.0;
var featureType=dseta.getType$();
if (dseta.getScoreCount$() > 0) {
var scr=dseta.enumerateScore$();
while (scr.hasMoreElements$()){
var score=scr.nextElement$();
if (score.getName$().equals$O(featureType)) {
theScore=score.getContent$();
scoreFound=true;
}}
}var sf=null;
if (scoreFound) {
sf=Clazz.new_($I$(2).c$$S$S$I$I$F$S,[featureType, dseta.getDescription$(), se[0], se[1], theScore, dseta.getGroup$()]);
} else {
sf=Clazz.new_($I$(2).c$$S$S$I$I$S,[featureType, dseta.getDescription$(), se[0], se[1], dseta.getGroup$()]);
}sf.setStatus$S(dseta.getStatus$());
if (dseta.getLinkCount$() > 0) {
var links=dseta.getLink$();
for (var i=0; i < links.length; i++) {
sf.addLink$S(links[i].getContent$() + "|" + links[i].getHref$() );
}
}if (dseta.getScoreCount$() > 0) {
var scr=dseta.enumerateScore$();
while (scr.hasMoreElements$()){
var score=scr.nextElement$();
if (!score.getName$().equals$O(sf.getType$())) {
sf.setValue$S$O(score.getName$(), "" + new Float(score.getContent$()).toString());
}}
}var props=dseta.enumerateProperty$();
while (props.hasMoreElements$()){
var p=props.nextElement$();
var val=null;
if ($I$(11).isValid$uk_ac_vamsas_objects_core_Property(p)) {
if ($I$(11).isString$uk_ac_vamsas_objects_core_Property(p)) {
val=p.getContent$();
}if ($I$(11).isBoolean$uk_ac_vamsas_objects_core_Property(p)) {
try {
val= Boolean.from(p.getContent$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}if ($I$(11).isFloat$uk_ac_vamsas_objects_core_Property(p)) {
try {
val= new Float(p.getContent$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}if ($I$(11).isInteger$uk_ac_vamsas_objects_core_Property(p)) {
try {
val= new Integer(p.getContent$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}if (val != null ) {
sf.setValue$S$O(p.getName$(), val);
}}}
return sf;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
