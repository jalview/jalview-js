(function(){var P$=Clazz.newPackage("jalview.gui.structurechooser"),p$1={},I$=[[0,'java.util.LinkedHashSet','jalview.fts.service.threedbeacons.TDBeaconsFTSRestClient','jalview.fts.core.FTSDataColumnPreferences',['jalview.fts.core.FTSDataColumnPreferences','.PreferenceSource'],'java.util.Locale','jalview.gui.structurechooser.PDBStructureChooserQuerySource','jalview.fts.core.FTSRestRequest','jalview.jbgui.FilterOption','jalview.gui.structurechooser.TDBResultAnalyser','jalview.fts.core.FTSRestResponse','jalview.datamodel.PDBEntry','java.util.Arrays','jalview.gui.structurechooser.StructureChooserQuerySource',['jalview.datamodel.PDBEntry','.Type'],'jalview.bin.Console','java.util.ArrayList','java.util.HashSet','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ThreeDBStructureChooserQuerySource", null, 'jalview.gui.structurechooser.StructureChooserQuerySource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tdBeaconsFilters=null;
this.defaultFilters=null;
this.pdbQuerySource=null;
},1);

C$.$fields$=[['O',['tdBeaconsFilters','java.util.Set','+defaultFilters','lastTdbRequest','jalview.fts.core.FTSRestRequest','tdbRestClient','jalview.fts.api.FTSRestClientI','lastPdbRequest','jalview.fts.core.FTSRestRequest','pdbQuerySource','jalview.gui.structurechooser.PDBStructureChooserQuerySource']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.defaultFilters=Clazz.new_($I$(1,1));
this.defaultFilters.add$O("3d_beacons_coverage");
this.defaultFilters.add$O("3d_beacons_first_best_coverage");
this.tdbRestClient=$I$(2).getInstance$();
this.docFieldPrefs=Clazz.new_([$I$(4).STRUCTURE_CHOOSER, $I$(2).getInstance$()],$I$(3,1).c$$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource$jalview_fts_api_FTSRestClientI);
}, 1);

Clazz.newMeth(C$, 'buildQuery$jalview_datamodel_SequenceI',  function (seq) {
var refs=seq.getDBRefs$();
var ib=C$.checkUniprotRefs$java_util_List(refs);
if (ib > -1) {
return C$.getDBRefId$jalview_datamodel_DBRefEntry(refs.get$I(ib));
}return null;
});

Clazz.newMeth(C$, 'checkUniprotRefs$java_util_List',  function (refs) {
var hasUniprot=false;
if (refs != null  && refs.size$() != 0 ) {
for (var ib=0, nb=refs.size$(); ib < nb; ib++) {
var dbRef=refs.get$I(ib);
if (dbRef.getSource$().equalsIgnoreCase$S("UNIPROT")) {
hasUniprot=true;
if (dbRef.isCanonical$()) {
return ib;
}}}
}return hasUniprot ? -1 : -2;
}, 1);

Clazz.newMeth(C$, 'isValidSeqName$S',  function (seqName) {
var ignoreList="pdb,uniprot,swiss-prot";
if (seqName.length$() < 3) {
return false;
}if (seqName.contains$CharSequence(":")) {
return false;
}seqName=seqName.toLowerCase$java_util_Locale($I$(5).ROOT);
for (var ignoredEntry, $ignoredEntry = 0, $$ignoredEntry = ignoreList.split$S(","); $ignoredEntry<$$ignoredEntry.length&&((ignoredEntry=($$ignoredEntry[$ignoredEntry])),1);$ignoredEntry++) {
if (seqName.contains$CharSequence(ignoredEntry)) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'getDBRefId$jalview_datamodel_DBRefEntry',  function (dbRef) {
var ref=dbRef.getAccessionId$().replaceAll$S$S("GO:", "");
return ref;
}, 1);

Clazz.newMeth(C$, 'fetchStructuresMetaData$jalview_datamodel_SequenceI$java_util_Collection$jalview_jbgui_FilterOption$Z',  function (seq, wantedFields, selectedFilterOpt, b) {
var resultList;
if (selectedFilterOpt != null  && p$1.tdBeaconsFilter$S.apply(this, [selectedFilterOpt.getValue$()]) ) {
var tdbRequest=p$1.getTDBeaconsRequest$jalview_datamodel_SequenceI$java_util_Collection.apply(this, [seq, wantedFields]);
resultList=this.tdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(tdbRequest);
this.lastTdbRequest=tdbRequest;
if (resultList != null ) {
var pdbResponse=this.fetchStructuresMetaDataFor$jalview_gui_structurechooser_PDBStructureChooserQuerySource$jalview_fts_core_FTSRestResponse(p$1.getPDBQuerySource.apply(this, []), resultList);
resultList=this.joinResponses$jalview_fts_core_FTSRestResponse$java_util_List(resultList, pdbResponse);
}return resultList;
}resultList=p$1.getPDBQuerySource.apply(this, []).fetchStructuresMetaData$jalview_datamodel_SequenceI$java_util_Collection$jalview_jbgui_FilterOption$Z(seq, wantedFields, selectedFilterOpt, b);
this.lastTdbRequest=p$1.getPDBQuerySource.apply(this, []).lastPdbRequest;
this.lastPdbRequest=this.lastTdbRequest;
return resultList;
});

Clazz.newMeth(C$, 'getPDBQuerySource',  function () {
if (this.pdbQuerySource == null ) {
this.pdbQuerySource=Clazz.new_($I$(6,1));
}return this.pdbQuerySource;
}, p$1);

Clazz.newMeth(C$, 'getTDBeaconsRequest$jalview_datamodel_SequenceI$java_util_Collection',  function (seq, wantedFields) {
var pdbRequest=Clazz.new_($I$(7,1));
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(500);
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
var query=this.buildQuery$jalview_datamodel_SequenceI(seq);
if (query == null ) {
return null;
}pdbRequest.setSearchTerm$S(query + ".json");
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(seq);
return pdbRequest;
}, p$1);

Clazz.newMeth(C$, 'getAvailableFilterOptions$S',  function (VIEWS_FILTER) {
var filters=p$1.getPDBQuerySource.apply(this, []).getAvailableFilterOptions$S(VIEWS_FILTER);
this.tdBeaconsFilters=Clazz.new_($I$(1,1));
this.tdBeaconsFilters.addAll$java_util_Collection(this.defaultFilters);
filters.add$I$O(0, Clazz.new_($I$(8,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource,["Best 3D-Beacons Coverage", "3d_beacons_first_best_coverage", VIEWS_FILTER, false, this]));
filters.add$I$O(1, Clazz.new_($I$(8,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource,["Multiple 3D-Beacons Coverage", "3d_beacons_coverage", VIEWS_FILTER, true, this]));
return filters;
});

Clazz.newMeth(C$, 'updateAvailableFilterOptions$S$java_util_List$java_util_Collection',  function (VIEWS_FILTER, xtantOptions, tdbEntries) {
if (tdbEntries != null  && this.lastTdbRequest != null  ) {
var hasPDBe=false;
for (var _row, $_row = tdbEntries.iterator$(); $_row.hasNext$()&&((_row=($_row.next$())),1);) {
var row=_row;
var provider=row.getProvider$();
var providerOpt=Clazz.new_($I$(8,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource,["3DB Provider - " + provider, "only_" + provider, VIEWS_FILTER, false, this]);
if (!xtantOptions.contains$O(providerOpt)) {
xtantOptions.add$I$O(1, providerOpt);
this.tdBeaconsFilters.add$O("only_" + provider);
if ("PDBe".equalsIgnoreCase$S(provider)) {
hasPDBe=true;
}}}
if (!hasPDBe) {
var op=0;
while (op < xtantOptions.size$()){
var filter=xtantOptions.get$I(op);
if (Clazz.instanceOf(filter.getQuerySource$(), "jalview.gui.structurechooser.PDBStructureChooserQuerySource")) {
xtantOptions.remove$I(op);
} else {
++op;
}}
}}});

Clazz.newMeth(C$, 'tdBeaconsFilter$S',  function (fieldToFilterBy) {
return this.tdBeaconsFilters != null  && this.tdBeaconsFilters.contains$O(fieldToFilterBy) ;
}, p$1);

Clazz.newMeth(C$, 'remove_prefix$S',  function (fieldToFilterBy) {
if (this.tdBeaconsFilters != null  && this.tdBeaconsFilters.contains$O(fieldToFilterBy)  && !this.defaultFilters.contains$O(fieldToFilterBy) ) {
return fieldToFilterBy.substring$I("only_".length$());
} else {
return null;
}}, p$1);

Clazz.newMeth(C$, 'needsRefetch$jalview_jbgui_FilterOption',  function (selectedFilterOpt) {
return selectedFilterOpt == null  || !p$1.tdBeaconsFilter$S.apply(this, [selectedFilterOpt.getValue$()]) && this.lastPdbRequest !== this.lastTdbRequest   ;
});

Clazz.newMeth(C$, 'selectFirstRankedQuery$jalview_datamodel_SequenceI$java_util_Collection$java_util_Collection$S$Z',  function (seq, collectedResults, wantedFields, fieldToFilterBy, b) {
if (fieldToFilterBy != null  && p$1.tdBeaconsFilter$S.apply(this, [fieldToFilterBy]) ) {
var analyser=Clazz.new_([seq, collectedResults, this.lastTdbRequest, fieldToFilterBy, p$1.remove_prefix$S.apply(this, [fieldToFilterBy])],$I$(9,1).c$$jalview_datamodel_SequenceI$java_util_Collection$jalview_fts_core_FTSRestRequest$S$S);
var resultList=Clazz.new_($I$(10,1));
var filteredResponse=analyser.getFilteredResponse$();
var selectedStructures=analyser.selectStructures$java_util_List(filteredResponse);
resultList.setNumberOfItemsFound$I(selectedStructures.size$());
resultList.setSearchSummary$java_util_Collection(selectedStructures);
return resultList;
}return p$1.getPDBQuerySource.apply(this, []).selectFirstRankedQuery$jalview_datamodel_SequenceI$java_util_Collection$java_util_Collection$S$Z(seq, collectedResults, wantedFields, fieldToFilterBy, b);
});

Clazz.newMeth(C$, 'collectSelectedRows$javax_swing_JTable$IA$java_util_List',  function (restable, selectedRows, selectedSeqsToView) {
var refSeqColIndex=restable.getColumn$O("Ref Sequence").getModelIndex$();
var pdbEntriesToView=Clazz.array($I$(11), [selectedRows.length]);
var count=0;
var idColumnIndex=restable.getColumn$O("Model id").getModelIndex$();
var urlColumnIndex=restable.getColumn$O("Url").getModelIndex$();
var typeColumnIndex=restable.getColumn$O("Provider").getModelIndex$();
var humanUrl=restable.getColumn$O("Page URL").getModelIndex$();
var modelformat=restable.getColumn$O("Model Format").getModelIndex$();
var up_start_idx=restable.getColumn$O("Uniprot Start").getModelIndex$();
var up_end_idx=restable.getColumn$O("Uniprot End").getModelIndex$();
var i=0;
var sellist=Clazz.array(Integer, [selectedRows.length]);
for (var row, $row = 0, $$row = selectedRows; $row<$$row.length&&((row=new Integer($$row[$row])),1);$row++) {
sellist[i++]=row;
}
$I$(12,"sort$OA$java_util_Comparator",[sellist, ((P$.ThreeDBStructureChooserQuerySource$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ThreeDBStructureChooserQuerySource$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$Integer$Integer','compare$O$O'],  function (o1, o2) {
var o1_xt=(((this.$finals$.restable.getValueAt$I$I((o1).$c(), this.$finals$.up_end_idx)).$c()) - (this.$finals$.restable.getValueAt$I$I((o1).$c(), this.$finals$.up_start_idx)).$c())|0;
var o2_xt=(((this.$finals$.restable.getValueAt$I$I((o2).$c(), this.$finals$.up_end_idx)).$c()) - (this.$finals$.restable.getValueAt$I$I((o2).$c(), this.$finals$.up_start_idx)).$c())|0;
return o2_xt - o1_xt;
});
})()
), Clazz.new_(P$.ThreeDBStructureChooserQuerySource$1.$init$,[this, {up_start_idx:up_start_idx,restable:restable,up_end_idx:up_end_idx}]))]);
for (var row, $row = 0, $$row = sellist; $row<$$row.length&&((row=($$row[$row]).intValue$()),1);$row++) {
var pdbIdStr=restable.getValueAt$I$I(row, idColumnIndex).toString();
var urlStr=restable.getValueAt$I$I(row, urlColumnIndex).toString();
var typeColumn=restable.getValueAt$I$I(row, typeColumnIndex).toString();
var modelPage=humanUrl < 1 ? null : restable.getValueAt$I$I(row, humanUrl);
var strucFormat=restable.getValueAt$I$I(row, modelformat).toString();
var selectedSeq=restable.getValueAt$I$I(row, refSeqColIndex);
selectedSeqsToView.add$O(selectedSeq);
var pdbEntry=selectedSeq.getPDBEntry$S(pdbIdStr);
if (pdbEntry == null ) {
pdbEntry=$I$(13,"getFindEntry$S$java_util_Vector",[pdbIdStr, selectedSeq.getAllPDBEntries$()]);
}if (pdbEntry == null ) {
pdbEntry=Clazz.new_($I$(11,1));
pdbEntry.setId$S(pdbIdStr);
pdbEntry.setAuthoritative$Z(true);
try {
pdbEntry.setType$jalview_datamodel_PDBEntry_Type($I$(14).valueOf$S(strucFormat));
} catch (q) {
if (Clazz.exceptionOf(q,"Exception")){
$I$(15).warn$S("Unknown filetype for 3D Beacons Model from: " + strucFormat + " - " + pdbIdStr + " - " + modelPage );
} else {
throw q;
}
}
if (!"PDBe".equalsIgnoreCase$S(typeColumn)) {
pdbEntry.setRetrievalUrl$S(urlStr);
}pdbEntry.setProvider$S(typeColumn);
pdbEntry.setProviderPage$S(modelPage);
selectedSeq.getDatasetSequence$().addPDBId$jalview_datamodel_PDBEntry(pdbEntry);
}pdbEntriesToView[count++]=pdbEntry;
}
return pdbEntriesToView;
});

Clazz.newMeth(C$, 'getLastFTSRequest$',  function () {
return this.lastTdbRequest;
});

Clazz.newMeth(C$, 'buildPDBFTSQueryFor$jalview_fts_core_FTSRestResponse',  function (upResponse) {
var ftsQueries=Clazz.new_($I$(16,1));
var pdbIds=Clazz.new_($I$(17,1));
var idx_modelId=this.getLastFTSRequest$().getFieldIndex$S("Model id");
var idx_provider=this.getLastFTSRequest$().getFieldIndex$S("Provider");
for (var row, $row = upResponse.getSearchSummary$().iterator$(); $row.hasNext$()&&((row=($row.next$())),1);) {
var id=row.getSummaryData$()[idx_modelId];
var provider=row.getSummaryData$()[idx_provider];
if ("PDBe".equalsIgnoreCase$S(provider)) {
pdbIds.add$O(id);
}}
var sb=Clazz.new_($I$(18,1));
for (var pdbId, $pdbId = pdbIds.iterator$(); $pdbId.hasNext$()&&((pdbId=($pdbId.next$())),1);) {
if (sb.length$() > 2500) {
ftsQueries.add$O(sb.toString());
sb.setLength$I(0);
}if (sb.length$() > 0) {
sb.append$S(" OR ");
}sb.append$S(pdbId);
}
if (sb.length$() > 0) {
ftsQueries.add$O(sb.toString());
}return ftsQueries;
});

Clazz.newMeth(C$, 'fetchStructuresMetaDataFor$jalview_gui_structurechooser_PDBStructureChooserQuerySource$jalview_fts_core_FTSRestResponse',  function (pdbquery, upResponse) {
var pdb_Queries=this.buildPDBFTSQueryFor$jalview_fts_core_FTSRestResponse(upResponse);
if (pdb_Queries.size$() == 0) {
return null;
}var results=Clazz.new_($I$(16,1));
for (var pdb_Query, $pdb_Query = pdb_Queries.iterator$(); $pdb_Query.hasNext$()&&((pdb_Query=($pdb_Query.next$())),1);) {
var resultList;
var pdbRequest=Clazz.new_($I$(7,1));
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(500);
pdbRequest.setFieldToSearchBy$S("(");
pdbRequest.setWantedFields$java_util_Collection(pdbquery.getDocFieldPrefs$().getStructureSummaryFields$());
pdbRequest.setSearchTerm$S(pdb_Query + ")");
try {
resultList=pdbquery.executePDBFTSRestRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
results.add$O(resultList);
this.lastPdbRequest=pdbRequest;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(15).error$S$Throwable("PDBFTSQuery failed", ex);
} else {
throw ex;
}
}
}
return results;
});

Clazz.newMeth(C$, 'joinResponses$jalview_fts_core_FTSRestResponse$java_util_List',  function (upResponse, pdbResponses) {
var hasPdbResp=this.lastPdbRequest != null ;
var idx_provider=this.getLastFTSRequest$().getFieldIndex$S("Provider");
var idx_modelId=this.getLastFTSRequest$().getFieldIndex$S("Model id");
var pdbIdx=hasPdbResp ? this.lastPdbRequest.getFieldIndex$S("PDB Id") : -1;
var pdbTitle_idx=hasPdbResp ? this.lastPdbRequest.getFieldIndex$S("Title") : -1;
var tdbTitle_idx=this.getLastFTSRequest$().getFieldIndex$S("Title");
for (var row, $row = upResponse.getSearchSummary$().iterator$(); $row.hasNext$()&&((row=($row.next$())),1);) {
var id=row.getSummaryData$()[idx_modelId];
var provider=row.getSummaryData$()[idx_provider];
if ("PDBe".equalsIgnoreCase$S(provider)) {
if (!hasPdbResp) {
System.out.println$S("Warning: seems like we couldn\'t get to the PDBe search interface.");
} else {
for (var pdbResponse, $pdbResponse = pdbResponses.iterator$(); $pdbResponse.hasNext$()&&((pdbResponse=($pdbResponse.next$())),1);) {
for (var pdbrow, $pdbrow = pdbResponse.getSearchSummary$().iterator$(); $pdbrow.hasNext$()&&((pdbrow=($pdbrow.next$())),1);) {
var pdbid=pdbrow.getSummaryData$()[pdbIdx];
if (id.equalsIgnoreCase$S(pdbid)) {
row.getSummaryData$()[tdbTitle_idx]=pdbrow.getSummaryData$()[pdbTitle_idx];
}}
}
}} else {
row.getSummaryData$()[tdbTitle_idx]="Model from TDB";
}}
return upResponse;
});

Clazz.newMeth(C$, 'getFTSDataFor$javax_swing_JTable$I$java_util_Collection',  function (restable, selectedRow, discoveredStructuresSet) {
var idColumnIndex=restable.getColumn$O("Model id").getModelIndex$();
var modelId=restable.getValueAt$I$I(selectedRow, idColumnIndex);
for (var row, $row = discoveredStructuresSet.iterator$(); $row.hasNext$()&&((row=($row.next$())),1);) {
if (Clazz.instanceOf(row, "jalview.fts.service.threedbeacons.TDB_FTSData") && (row).getModelId$().equals$O(modelId) ) {
return (row);
}}
return null;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
