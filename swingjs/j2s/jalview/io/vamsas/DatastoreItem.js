(function(){var P$=Clazz.newPackage("jalview.io.vamsas"),p$1={},I$=[[0,'jalview.javascript.log4j.Logger','jalview.bin.Cache','jalview.util.MessageManager','Error','java.util.Vector','jalview.datamodel.Provenance','uk.ac.vamsas.objects.core.Entry','java.util.Date','uk.ac.vamsas.objects.core.Provenance']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DatastoreItem");
C$.log=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.log=$I$(1).getLogger$Class(Clazz.getClass(C$));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.provEntry=null;
this.cdoc=null;
this.vobj2jv=null;
this.jv2vobj=null;
this.tojalview=false;
this.addtodoc=false;
this.conflicted=false;
this.updated=false;
this.addfromdoc=false;
this.success=false;
this.updatedtodoc=false;
this.updatedfromdoc=false;
this.datastore=null;
this.vobj=null;
this.jvobj=null;
this.dsReg=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.provEntry=null;
this.tojalview=false;
this.addtodoc=false;
this.conflicted=false;
this.updated=false;
this.addfromdoc=false;
this.success=false;
this.datastore=null;
this.vobj=null;
this.jvobj=null;
}, 1);

Clazz.newMeth(C$, 'getjv2vObj$O', function (jvobj) {
if (this.jv2vobj.containsKey$O(jvobj)) {
return this.cdoc.getObject$uk_ac_vamsas_client_VorbaId(this.jv2vobj.get$O(jvobj));
}if ($I$(2).log.isDebugEnabled$()) {
$I$(2).log.debug$O("Returning null VorbaID binding for jalview object " + jvobj);
}return null;
});

Clazz.newMeth(C$, 'getvObj2jv$uk_ac_vamsas_client_Vobject', function (vobj) {
if (this.vobj2jv == null ) return null;
var id=vobj.getVorbaId$();
if (id == null ) {
id=this.cdoc.registerObject$uk_ac_vamsas_client_Vobject(vobj);
$I$(2).log.debug$O("Registering new object and returning null for getvObj2jv");
return null;
}if (this.vobj2jv.containsKey$O(vobj.getVorbaId$())) {
return this.vobj2jv.get$O(vobj.getVorbaId$());
}return null;
});

Clazz.newMeth(C$, 'bindjvvobj$O$uk_ac_vamsas_client_Vobject', function (jvobj, vobj) {
var id=vobj.getVorbaId$();
if (id == null ) {
id=this.cdoc.registerObject$uk_ac_vamsas_client_Vobject(vobj);
if (id == null  || vobj.getVorbaId$() == null   || this.cdoc.getObject$uk_ac_vamsas_client_VorbaId(id) !== vobj  ) {
$I$(2).log.error$O("Failed to get id for " + (vobj.isRegisterable$() ? "registerable" : "unregisterable") + " object " + vobj );
}}if (this.vobj2jv.containsKey$O(vobj.getVorbaId$()) && !(this.vobj2jv.get$O(vobj.getVorbaId$())).equals$O(jvobj) ) {
$I$(2).log.debug$O$Throwable("Warning? Overwriting existing vamsas id binding for " + vobj.getVorbaId$(), Clazz.new_(Clazz.load('Exception').c$$S,[$I$(3).getString$S("exception.overwriting_vamsas_id_binding")]));
} else if (this.jv2vobj.containsKey$O(jvobj) && !(this.jv2vobj.get$O(jvobj)).equals$O(vobj.getVorbaId$()) ) {
$I$(2).log.debug$O$Throwable("Warning? Overwriting existing jalview object binding for " + jvobj, Clazz.new_(Clazz.load('Exception').c$$S,[$I$(3).getString$S("exception.overwriting_jalview_id_binding")]));
}$I$(2).log.debug$O("Binding " + vobj.getVorbaId$() + " to " + jvobj );
this.vobj2jv.put$TK$TV(vobj.getVorbaId$(), jvobj);
this.jv2vobj.put$TK$TV(jvobj, vobj.getVorbaId$());
if (jvobj === this.jvobj  || vobj === this.vobj  ) {
p$1.updateRegistryEntry$O$uk_ac_vamsas_client_Vobject.apply(this, [jvobj, vobj]);
}});

Clazz.newMeth(C$, 'updateRegistryEntry$O$uk_ac_vamsas_client_Vobject', function (jvobj, vobj) {
if (this.jvobj != null  && this.vobj != null  ) {
$I$(2).log.debug$O("updating dsobj registry. (" + this.getClass$().getName$() + ")" );
}this.jvobj=jvobj;
this.vobj=vobj;
this.dsReg.registerDsObj$jalview_io_vamsas_DatastoreItem(this);
}, p$1);

Clazz.newMeth(C$, 'replaceJvObjMapping$O$O', function (oldjvobject, newjvobject) {
var vobject=this.jv2vobj.remove$O(oldjvobject);
if (vobject == null ) {
throw Clazz.new_($I$(4).c$$S,[$I$(3).formatMessage$S$SA("error.implementation_error_old_jalview_object_not_bound", Clazz.array(String, -1, [oldjvobject.toString()]))]);
}if (newjvobject != null ) {
this.jv2vobj.put$TK$TV(newjvobject, vobject);
this.vobj2jv.put$TK$TV(vobject, newjvobject);
p$1.updateRegistryEntry$O$uk_ac_vamsas_client_Vobject.apply(this, [newjvobject, this.vobj]);
}});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore', function (datastore) {
C$.c$.apply(this, []);
this.initDatastoreItem$jalview_io_VamsasAppDatastore(datastore);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$uk_ac_vamsas_client_Vobject$Class', function (datastore2, vobj2, boundType) {
C$.c$$jalview_io_VamsasAppDatastore.apply(this, [datastore2]);
this.vobj=vobj2;
this.jvobj=this.getvObj2jv$uk_ac_vamsas_client_Vobject(vobj2);
this.tojalview=true;
if (this.jvobj != null  && !(boundType.isAssignableFrom$Class(this.jvobj.getClass$())) ) {
throw Clazz.new_($I$(4).c$$S,[$I$(3).formatMessage$S$SA("error.implementation_error_vamsas_doc_class_should_bind_to_type", Clazz.array(String, -1, [this.vobj.getClass$().toString(), boundType.toString(), this.jvobj.getClass$().toString()]))]);
}this.dsReg.registerDsObj$jalview_io_vamsas_DatastoreItem(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_VamsasAppDatastore$O$Class', function (datastore2, jvobj2, boundToType) {
C$.c$$jalview_io_VamsasAppDatastore.apply(this, [datastore2]);
this.jvobj=jvobj2;
this.tojalview=false;
this.vobj=this.getjv2vObj$O(this.jvobj);
if (this.vobj != null  && !(boundToType.isAssignableFrom$Class(this.vobj.getClass$())) ) {
throw Clazz.new_($I$(4).c$$S,[$I$(3).formatMessage$S$SA("error.implementation_error_vamsas_doc_class_should_bind_to_type", Clazz.array(String, -1, [jvobj2.getClass$().toString(), boundToType.toString(), this.vobj.getClass$().toString()]))]);
}this.dsReg.registerDsObj$jalview_io_vamsas_DatastoreItem(this);
}, 1);

Clazz.newMeth(C$, 'doSync$', function () {
this.dsReg.registerDsObj$jalview_io_vamsas_DatastoreItem(this);
if (this.vobj == null ) {
C$.log.debug$O("adding new vobject to document.");
this.addtodoc=true;
this.addToDocument$();
} else {
if (this.vobj.isUpdated$()) {
C$.log.debug$O("Handling update conflict for existing bound vobject.");
this.conflicted=true;
this.conflict$();
} else {
C$.log.debug$O("updating existing vobject in document.");
this.updatedtodoc=true;
this.updateToDoc$();
}}this.success=true;
});

Clazz.newMeth(C$, 'doJvUpdate$', function () {
this.dsReg.registerDsObj$jalview_io_vamsas_DatastoreItem(this);
if (this.jvobj == null ) {
C$.log.debug$O("adding new vobject to Jalview from Document");
this.addfromdoc=true;
this.addFromDocument$();
} else {
if (this.vobj.isUpdated$()) {
C$.log.debug$O("updating Jalview from existing bound vObject");
this.updatedfromdoc=true;
this.updateFromDoc$();
}}});

Clazz.newMeth(C$, 'initDatastoreItem$jalview_io_VamsasAppDatastore', function (ds) {
this.datastore=ds;
this.dsReg=ds.getDatastoreRegisty$();
p$1.initDatastoreItem$uk_ac_vamsas_objects_core_Entry$uk_ac_vamsas_client_IClientDocument$java_util_Hashtable$java_util_IdentityHashMap.apply(this, [ds.getProvEntry$(), ds.getClientDocument$(), ds.getVamsasObjectBinding$(), ds.getJvObjectBinding$()]);
});

Clazz.newMeth(C$, 'initDatastoreItem$uk_ac_vamsas_objects_core_Entry$uk_ac_vamsas_client_IClientDocument$java_util_Hashtable$java_util_IdentityHashMap', function (provEntry, cdoc, vobj2jv, jv2vobj) {
this.provEntry=provEntry;
this.cdoc=cdoc;
this.vobj2jv=vobj2jv;
this.jv2vobj=jv2vobj;
}, p$1);

Clazz.newMeth(C$, 'isModifiable$S', function (modifiable) {
return modifiable == null ;
});

Clazz.newMeth(C$, 'getjv2vObjs$java_util_Vector', function (alsq) {
var vObjs=Clazz.new_($I$(5));
var elm=alsq.elements$();
while (elm.hasMoreElements$()){
vObjs.addElement$TE(this.getjv2vObj$O(elm.nextElement$()));
}
return vObjs;
});

Clazz.newMeth(C$, 'getSegRange$uk_ac_vamsas_objects_core_Seg$Z', function (visSeg, ensureDirection) {
var incl=visSeg.getInclusive$();
var pol=(visSeg.getStart$() <= visSeg.getEnd$()) ? 1 : -1;
var start=visSeg.getStart$() + (incl ? 0 : pol);
var end=visSeg.getEnd$() + (incl ? 0 : -pol);
if (ensureDirection && pol == -1 ) {
var t=end;
end=start;
start=t;
}return Clazz.array(Integer.TYPE, -1, [start, end, pol < 0 ? 1 : 0]);
});

Clazz.newMeth(C$, 'getJalviewProvenance$uk_ac_vamsas_objects_core_Provenance', function (prov) {
var jprov=Clazz.new_($I$(6));
for (var i=0; i < prov.getEntryCount$(); i++) {
jprov.addEntry$S$S$java_util_Date$S(prov.getEntry$I(i).getUser$(), prov.getEntry$I(i).getAction$(), prov.getEntry$I(i).getDate$(), prov.getEntry$I(i).getId$());
}
return jprov;
});

Clazz.newMeth(C$, 'dummyProvenance$', function () {
return this.dummyProvenance$S(null);
});

Clazz.newMeth(C$, 'dummyPEntry$S', function (action) {
var entry=Clazz.new_($I$(7));
entry.setApp$S(this.provEntry.getApp$());
if (action != null ) {
entry.setAction$S(action);
} else {
entry.setAction$S("created.");
}entry.setDate$java_util_Date(Clazz.new_($I$(8)));
entry.setUser$S(this.provEntry.getUser$());
return entry;
});

Clazz.newMeth(C$, 'dummyProvenance$S', function (action) {
var prov=Clazz.new_($I$(9));
prov.addEntry$uk_ac_vamsas_objects_core_Entry(this.dummyPEntry$S(action));
return prov;
});

Clazz.newMeth(C$, 'addProvenance$uk_ac_vamsas_objects_core_Provenance$S', function (p, action) {
p.addEntry$uk_ac_vamsas_objects_core_Entry(this.dummyPEntry$S(action));
});

Clazz.newMeth(C$, 'isTojalview$', function () {
return this.tojalview;
});

Clazz.newMeth(C$, 'isAddtodoc$', function () {
return this.addtodoc;
});

Clazz.newMeth(C$, 'isConflicted$', function () {
return this.conflicted;
});

Clazz.newMeth(C$, 'isUpdatedFromDoc$', function () {
return this.updatedfromdoc;
});

Clazz.newMeth(C$, 'isUpdatedToDoc$', function () {
return this.updatedtodoc;
});

Clazz.newMeth(C$, 'isAddfromdoc$', function () {
return this.addfromdoc;
});

Clazz.newMeth(C$, 'isSuccess$', function () {
return this.success;
});

Clazz.newMeth(C$, 'getVobj$', function () {
return this.vobj;
});

Clazz.newMeth(C$, 'getJvobj$', function () {
return this.jvobj;
});

Clazz.newMeth(C$, 'docWasUpdated$', function () {
return (this.addtodoc || this.updated ) && this.success ;
});

Clazz.newMeth(C$, 'jvWasUpdated$', function () {
return (this.success);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
