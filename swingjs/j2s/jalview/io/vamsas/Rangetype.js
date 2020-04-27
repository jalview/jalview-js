(function(){var P$=Clazz.newPackage("jalview.io.vamsas"),I$=[[0,'Error','jalview.util.MessageManager','java.util.Vector','uk.ac.vamsas.objects.core.Seg','jalview.util.MapList','jalview.bin.Cache','uk.ac.vamsas.objects.core.Local','uk.ac.vamsas.objects.core.Mapped']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Rangetype", null, 'jalview.io.vamsas.DatastoreItem');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore', function (datastore) {
;C$.superclazz.c$$jalview_io_VamsasAppDatastore.apply(this,[datastore]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_client_Vobject$Class', function (datastore, vobj, jvClass) {
;C$.superclazz.c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_client_Vobject$Class.apply(this,[datastore, vobj, jvClass]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$O$Class', function (datastore, jvobj, vClass) {
;C$.superclazz.c$$jalview_io_VamsasAppDatastore$O$Class.apply(this,[datastore, jvobj, vClass]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getBounds$uk_ac_vamsas_objects_core_RangeType', function (dseta) {
if (dseta != null ) {
var se=null;
if (dseta.getSegCount$() > 0 && dseta.getPosCount$() > 0 ) {
throw Clazz.new_([$I$(2).getString$S("error.invalid_vamsas_rangetype_cannot_resolve_lists")],$I$(1,1).c$$S);
}if (dseta.getSegCount$() > 0) {
se=this.getSegRange$uk_ac_vamsas_objects_core_Seg$Z(dseta.getSeg$I(0), true);
for (var s=1, sSize=dseta.getSegCount$(); s < sSize; s++) {
var nse=this.getSegRange$uk_ac_vamsas_objects_core_Seg$Z(dseta.getSeg$I(s), true);
if (se[0] > nse[0]) {
se[0]=nse[0];
}if (se[1] < nse[1]) {
se[1]=nse[1];
}}
}if (dseta.getPosCount$() > 0) {
var pos=dseta.getPos$I(0).getI$();
se=Clazz.array(Integer.TYPE, -1, [pos, pos]);
for (var p=0, pSize=dseta.getPosCount$(); p < pSize; p++) {
pos=dseta.getPos$I(p).getI$();
if (se[0] > pos) {
se[0]=pos;
}if (se[1] < pos) {
se[1]=pos;
}}
}return se;
}return null;
});

Clazz.newMeth(C$, 'getMapping$uk_ac_vamsas_objects_core_RangeType', function (dseta) {
var posList=Clazz.new_($I$(3,1));
if (dseta != null ) {
var se=null;
if (dseta.getSegCount$() > 0 && dseta.getPosCount$() > 0 ) {
throw Clazz.new_([$I$(2).getString$S("error.invalid_vamsas_rangetype_cannot_resolve_lists")],$I$(1,1).c$$S);
}if (dseta.getSegCount$() > 0) {
for (var s=0, sSize=dseta.getSegCount$(); s < sSize; s++) {
se=this.getSegRange$uk_ac_vamsas_objects_core_Seg$Z(dseta.getSeg$I(s), false);
var se_end=se[1 - se[2]] + (se[2] == 0 ? 1 : -1);
for (var p=se[se[2]]; p != se_end; p+=se[2] == 0 ? 1 : -1) {
posList.add$O(Integer.valueOf$I(p));
}
}
} else if (dseta.getPosCount$() > 0) {
var pos=dseta.getPos$I(0).getI$();
for (var p=0, pSize=dseta.getPosCount$(); p < pSize; p++) {
pos=dseta.getPos$I(p).getI$();
posList.add$O(Integer.valueOf$I(pos));
}
}}if (posList != null  && posList.size$() > 0 ) {
var range=Clazz.array(Integer.TYPE, [posList.size$()]);
for (var i=0; i < range.length; i++) {
range[i]=(posList.elementAt$I(i)).intValue$();
}
posList.clear$();
return range;
}return null;
});

Clazz.newMeth(C$, 'getIntervals$uk_ac_vamsas_objects_core_RangeType', function (range) {
var intervals=null;
var posList=Clazz.new_($I$(3,1));
if (range != null ) {
var se=null;
if (range.getSegCount$() > 0 && range.getPosCount$() > 0 ) {
throw Clazz.new_([$I$(2).getString$S("error.invalid_vamsas_rangetype_cannot_resolve_lists")],$I$(1,1).c$$S);
}if (range.getSegCount$() > 0) {
for (var s=0, sSize=range.getSegCount$(); s < sSize; s++) {
se=this.getSegRange$uk_ac_vamsas_objects_core_Seg$Z(range.getSeg$I(s), false);
posList.addElement$O(Integer.valueOf$I(se[0]));
posList.addElement$O(Integer.valueOf$I(se[1]));
}
} else if (range.getPosCount$() > 0) {
var pos=range.getPos$I(0).getI$();
for (var p=0, pSize=range.getPosCount$(); p < pSize; p++) {
pos=range.getPos$I(p).getI$();
posList.add$O(Integer.valueOf$I(pos));
posList.add$O(Integer.valueOf$I(pos));
}
}}if (posList != null  && posList.size$() > 0 ) {
intervals=Clazz.array(Integer.TYPE, [posList.size$()]);
var e=posList.elements$();
var i=0;
while (e.hasMoreElements$()){
intervals[i++]=(e.nextElement$()).intValue$();
}
}return intervals;
});

Clazz.newMeth(C$, 'initRangeType$uk_ac_vamsas_objects_core_RangeType$java_util_List', function (mrt, ranges) {
for (var range, $range = ranges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var vSeg=Clazz.new_($I$(4,1));
vSeg.setStart$I(range[0]);
vSeg.setEnd$I(range[1]);
vSeg.setInclusive$Z(true);
mrt.addSeg$uk_ac_vamsas_objects_core_Seg(vSeg);
}
});

Clazz.newMeth(C$, 'parsemapType$uk_ac_vamsas_objects_core_MapType$I$I', function (maprange, localu, mappedu) {
var ml=null;
var localRange=this.getIntervals$uk_ac_vamsas_objects_core_RangeType(maprange.getLocal$());
var mappedRange=this.getIntervals$uk_ac_vamsas_objects_core_RangeType(maprange.getMapped$());
var lu=maprange.getLocal$().hasUnit$() ? maprange.getLocal$().getUnit$() : localu;
var mu=maprange.getMapped$().hasUnit$() ? maprange.getMapped$().getUnit$() : mappedu;
ml=Clazz.new_([localRange, mappedRange, (lu|0), (mu|0)],$I$(5,1).c$$IA$IA$I$I);
return ml;
});

Clazz.newMeth(C$, 'parsemapType$uk_ac_vamsas_objects_core_MapType', function (map) {
if (!map.getLocal$().hasUnit$() || map.getMapped$().hasUnit$() ) {
$I$(6).log.warn$O("using default mapping length of 1:1 for map " + (map.isRegistered$() ? map.getVorbaId$().toString() : ("<no Id registered> " + map.toString())));
}return this.parsemapType$uk_ac_vamsas_objects_core_MapType$I$I(map, 1, 1);
});

Clazz.newMeth(C$, 'initMapType$uk_ac_vamsas_objects_core_MapType$jalview_util_MapList$Z', function (maprange, ml, setUnits) {
this.initMapType$uk_ac_vamsas_objects_core_MapType$jalview_util_MapList$Z$Z(maprange, ml, setUnits, false);
});

Clazz.newMeth(C$, 'initMapType$uk_ac_vamsas_objects_core_MapType$jalview_util_MapList$Z$Z', function (maprange, ml, setUnits, reverse) {
if (ml == null ) {
throw Clazz.new_([$I$(2).getString$S("error.implementation_error_maplist_is_null")],$I$(1,1).c$$S);
}maprange.setLocal$uk_ac_vamsas_objects_core_Local(Clazz.new_($I$(7,1)));
maprange.setMapped$uk_ac_vamsas_objects_core_Mapped(Clazz.new_($I$(8,1)));
if (!reverse) {
this.initRangeType$uk_ac_vamsas_objects_core_RangeType$java_util_List(maprange.getLocal$(), ml.getFromRanges$());
this.initRangeType$uk_ac_vamsas_objects_core_RangeType$java_util_List(maprange.getMapped$(), ml.getToRanges$());
} else {
this.initRangeType$uk_ac_vamsas_objects_core_RangeType$java_util_List(maprange.getLocal$(), ml.getToRanges$());
this.initRangeType$uk_ac_vamsas_objects_core_RangeType$java_util_List(maprange.getMapped$(), ml.getFromRanges$());
}if (setUnits) {
if (!reverse) {
maprange.getLocal$().setUnit$J(ml.getFromRatio$());
maprange.getMapped$().setUnit$J(ml.getToRatio$());
} else {
maprange.getLocal$().setUnit$J(ml.getToRatio$());
maprange.getMapped$().setUnit$J(ml.getFromRatio$());
}}});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
