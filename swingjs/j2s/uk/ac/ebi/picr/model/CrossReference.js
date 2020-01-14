(function(){var P$=Clazz.newPackage("uk.ac.ebi.picr.model"),I$=[[0,'Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CrossReference", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.accession=null;
this.accessionVersion=null;
this.databaseDescription=null;
this.databaseName=null;
this.dateAdded=null;
this.dateDeleted=null;
this.deleted=false;
this.gi=null;
this.taxonId=null;
this.__equalsCalc=null;
this.__hashCodeCalc=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.__equalsCalc=null;
this.__hashCodeCalc=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S$java_util_Calendar$java_util_Calendar$Z$S$S', function (accession, accessionVersion, databaseDescription, databaseName, dateAdded, dateDeleted, deleted, gi, taxonId) {
C$.$init$.apply(this);
this.accession=accession;
this.accessionVersion=accessionVersion;
this.databaseDescription=databaseDescription;
this.databaseName=databaseName;
this.dateAdded=dateAdded;
this.dateDeleted=dateDeleted;
this.deleted=deleted;
this.gi=gi;
this.taxonId=taxonId;
}, 1);

Clazz.newMeth(C$, 'getAccession$', function () {
return this.accession;
});

Clazz.newMeth(C$, 'setAccession$S', function (accession) {
this.accession=accession;
});

Clazz.newMeth(C$, 'getAccessionVersion$', function () {
return this.accessionVersion;
});

Clazz.newMeth(C$, 'setAccessionVersion$S', function (accessionVersion) {
this.accessionVersion=accessionVersion;
});

Clazz.newMeth(C$, 'getDatabaseDescription$', function () {
return this.databaseDescription;
});

Clazz.newMeth(C$, 'setDatabaseDescription$S', function (databaseDescription) {
this.databaseDescription=databaseDescription;
});

Clazz.newMeth(C$, 'getDatabaseName$', function () {
return this.databaseName;
});

Clazz.newMeth(C$, 'setDatabaseName$S', function (databaseName) {
this.databaseName=databaseName;
});

Clazz.newMeth(C$, 'getDateAdded$', function () {
return this.dateAdded;
});

Clazz.newMeth(C$, 'setDateAdded$java_util_Calendar', function (dateAdded) {
this.dateAdded=dateAdded;
});

Clazz.newMeth(C$, 'getDateDeleted$', function () {
return this.dateDeleted;
});

Clazz.newMeth(C$, 'setDateDeleted$java_util_Calendar', function (dateDeleted) {
this.dateDeleted=dateDeleted;
});

Clazz.newMeth(C$, 'isDeleted$', function () {
return this.deleted;
});

Clazz.newMeth(C$, 'setDeleted$Z', function (deleted) {
this.deleted=deleted;
});

Clazz.newMeth(C$, 'getGi$', function () {
return this.gi;
});

Clazz.newMeth(C$, 'setGi$S', function (gi) {
this.gi=gi;
});

Clazz.newMeth(C$, 'getTaxonId$', function () {
return this.taxonId;
});

Clazz.newMeth(C$, 'setTaxonId$S', function (taxonId) {
this.taxonId=taxonId;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "uk.ac.ebi.picr.model.CrossReference"))) {
return false;
}var other=obj;
if (this === obj ) {
return true;
}if (this.__equalsCalc != null ) {
return (this.__equalsCalc === obj );
}this.__equalsCalc=obj;
var _equals;
_equals=true && ((this.accession == null  && other.getAccession$() == null  ) || (this.accession != null  && this.accession.equals$O(other.getAccession$()) ) ) && ((this.accessionVersion == null  && other.getAccessionVersion$() == null  ) || (this.accessionVersion != null  && this.accessionVersion.equals$O(other.getAccessionVersion$()) ) ) && ((this.databaseDescription == null  && other.getDatabaseDescription$() == null  ) || (this.databaseDescription != null  && this.databaseDescription.equals$O(other.getDatabaseDescription$()) ) ) && ((this.databaseName == null  && other.getDatabaseName$() == null  ) || (this.databaseName != null  && this.databaseName.equals$O(other.getDatabaseName$()) ) ) && ((this.dateAdded == null  && other.getDateAdded$() == null  ) || (this.dateAdded != null  && this.dateAdded.equals$O(other.getDateAdded$()) ) ) && ((this.dateDeleted == null  && other.getDateDeleted$() == null  ) || (this.dateDeleted != null  && this.dateDeleted.equals$O(other.getDateDeleted$()) ) ) && this.deleted == other.isDeleted$()    && ((this.gi == null  && other.getGi$() == null  ) || (this.gi != null  && this.gi.equals$O(other.getGi$()) ) )  && ((this.taxonId == null  && other.getTaxonId$() == null  ) || (this.taxonId != null  && this.taxonId.equals$O(other.getTaxonId$()) ) ) ;
this.__equalsCalc=null;
return _equals;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.__hashCodeCalc) {
return 0;
}this.__hashCodeCalc=true;
var _hashCode=1;
if (this.getAccession$() != null ) {
_hashCode+=this.getAccession$().hashCode$();
}if (this.getAccessionVersion$() != null ) {
_hashCode+=this.getAccessionVersion$().hashCode$();
}if (this.getDatabaseDescription$() != null ) {
_hashCode+=this.getDatabaseDescription$().hashCode$();
}if (this.getDatabaseName$() != null ) {
_hashCode+=this.getDatabaseName$().hashCode$();
}if (this.getDateAdded$() != null ) {
_hashCode+=this.getDateAdded$().hashCode$();
}if (this.getDateDeleted$() != null ) {
_hashCode+=this.getDateDeleted$().hashCode$();
}_hashCode+=(this.isDeleted$() ? $I$(1).TRUE : $I$(1).FALSE).hashCode$();
if (this.getGi$() != null ) {
_hashCode+=this.getGi$().hashCode$();
}if (this.getTaxonId$() != null ) {
_hashCode+=this.getTaxonId$().hashCode$();
}this.__hashCodeCalc=false;
return _hashCode;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
