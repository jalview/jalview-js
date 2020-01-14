(function(){var P$=Clazz.newPackage("jalview.fts.core"),I$=[[0,'jalview.bin.Cache']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FTSRestRequest");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fieldToSearchBy=null;
this.searchTerm=null;
this.fieldToSortBy=null;
this.associatedSequence=null;
this.allowEmptySequence=false;
this.allowUnpublishedEntries=false;
this.facet=false;
this.facetPivot=null;
this.facetPivotMinCount=0;
this.responseSize=0;
this.offSet=0;
this.isSortAscending=false;
this.wantedFields=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.allowUnpublishedEntries=$I$(1).getDefault$S$Z("ALLOW_UNPUBLISHED_PDB_QUERYING", false);
}, 1);

Clazz.newMeth(C$, 'getFieldToSearchBy$', function () {
return this.fieldToSearchBy;
});

Clazz.newMeth(C$, 'setFieldToSearchBy$S', function (fieldToSearchBy) {
this.fieldToSearchBy=fieldToSearchBy;
});

Clazz.newMeth(C$, 'getSearchTerm$', function () {
return this.searchTerm;
});

Clazz.newMeth(C$, 'setSearchTerm$S', function (searchTerm) {
this.searchTerm=searchTerm;
});

Clazz.newMeth(C$, 'isAllowEmptySeq$', function () {
return this.allowEmptySequence;
});

Clazz.newMeth(C$, 'setAllowEmptySeq$Z', function (allowEmptySeq) {
this.allowEmptySequence=allowEmptySeq;
});

Clazz.newMeth(C$, 'getResponseSize$', function () {
return this.responseSize;
});

Clazz.newMeth(C$, 'setResponseSize$I', function (responseSize) {
this.responseSize=responseSize;
});

Clazz.newMeth(C$, 'getWantedFields$', function () {
return this.wantedFields;
});

Clazz.newMeth(C$, 'setWantedFields$java_util_Collection', function (wantedFields) {
this.wantedFields=wantedFields;
});

Clazz.newMeth(C$, 'getFieldToSortBy$', function () {
return this.fieldToSortBy;
});

Clazz.newMeth(C$, 'setFieldToSortBy$S$Z', function (fieldToSortBy, isSortAscending) {
this.fieldToSortBy=fieldToSortBy;
this.isSortAscending=isSortAscending;
});

Clazz.newMeth(C$, 'isAscending$', function () {
return this.isSortAscending;
});

Clazz.newMeth(C$, 'getAssociatedSequence$', function () {
return this.associatedSequence;
});

Clazz.newMeth(C$, 'setAssociatedSequence$jalview_datamodel_SequenceI', function (associatedSequence) {
this.associatedSequence=associatedSequence;
});

Clazz.newMeth(C$, 'isAllowUnpublishedEntries$', function () {
return this.allowUnpublishedEntries;
});

Clazz.newMeth(C$, 'setAllowUnpublishedEntries$Z', function (allowUnpublishedEntries) {
this.allowUnpublishedEntries=allowUnpublishedEntries;
});

Clazz.newMeth(C$, 'isFacet$', function () {
return this.facet;
});

Clazz.newMeth(C$, 'setFacet$Z', function (facet) {
this.facet=facet;
});

Clazz.newMeth(C$, 'getFacetPivot$', function () {
return this.facetPivot;
});

Clazz.newMeth(C$, 'setFacetPivot$S', function (facetPivot) {
this.facetPivot=facetPivot;
});

Clazz.newMeth(C$, 'getFacetPivotMinCount$', function () {
return this.facetPivotMinCount;
});

Clazz.newMeth(C$, 'setFacetPivotMinCount$I', function (facetPivotMinCount) {
this.facetPivotMinCount=facetPivotMinCount;
});

Clazz.newMeth(C$, 'getOffSet$', function () {
return this.offSet;
});

Clazz.newMeth(C$, 'setOffSet$I', function (offSet) {
this.offSet=offSet;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
