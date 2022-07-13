(function(){var P$=Clazz.newPackage("jalview.gui.structurechooser"),I$=[[0,'jalview.fts.service.pdb.PDBFTSRestClient','jalview.fts.core.FTSDataColumnPreferences',['jalview.fts.core.FTSDataColumnPreferences','.PreferenceSource'],'StringBuilder','java.util.LinkedHashSet','java.util.HashSet','java.util.Locale','java.util.Objects','jalview.fts.core.FTSRestRequest','java.util.ArrayList','jalview.jbgui.FilterOption','jalview.util.MessageManager','jalview.datamodel.PDBEntry','jalview.gui.structurechooser.StructureChooserQuerySource',['jalview.datamodel.PDBEntry','.Type']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDBStructureChooserQuerySource", null, 'jalview.gui.structurechooser.StructureChooserQuerySource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lastPdbRequest','jalview.fts.core.FTSRestRequest','pdbRestClient','jalview.fts.api.FTSRestClientI']]
,['I',['$MAX_QLENGTH']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.pdbRestClient=$I$(1).getInstance$();
this.docFieldPrefs=Clazz.new_([$I$(3).STRUCTURE_CHOOSER, $I$(1).getInstance$()],$I$(2,1).c$$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource$jalview_fts_api_FTSRestClientI);
}, 1);

Clazz.newMeth(C$, 'buildQuery$jalview_datamodel_SequenceI',  function (seq) {
var isPDBRefsFound=false;
var isUniProtRefsFound=false;
var queryBuilder=Clazz.new_($I$(4,1));
var seqRefs=Clazz.new_($I$(5,1));
var pdbids=Clazz.new_($I$(6,1));
if (seq.getAllPDBEntries$() != null  && queryBuilder.length$() < C$.$MAX_QLENGTH ) {
for (var entry, $entry = seq.getAllPDBEntries$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (C$.isValidSeqName$S(entry.getId$())) {
var id=entry.getId$().toLowerCase$java_util_Locale($I$(7).ROOT);
queryBuilder.append$S("pdb_id:").append$S(id).append$S(" OR ");
isPDBRefsFound=true;
pdbids.add$O(id);
}}
}var refs=seq.getDBRefs$();
if (refs != null  && refs.size$() != 0 ) {
for (var ib=0, nb=refs.size$(); ib < nb; ib++) {
var dbRef=refs.get$I(ib);
if (C$.isValidSeqName$S(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef)) && queryBuilder.length$() < C$.$MAX_QLENGTH ) {
if (dbRef.getSource$().equalsIgnoreCase$S("UNIPROT")) {
queryBuilder.append$S("uniprot_accession:").append$S(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef)).append$S(" OR ");
queryBuilder.append$S("uniprot_id:").append$S(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef)).append$S(" OR ");
isUniProtRefsFound=true;
} else if (dbRef.getSource$().equalsIgnoreCase$S("PDB")) {
var id=C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef).toLowerCase$java_util_Locale($I$(7).ROOT);
if (!pdbids.contains$O(id)) {
queryBuilder.append$S("pdb_id:").append$S(id).append$S(" OR ");
isPDBRefsFound=true;
pdbids.add$O(id);
}} else {
seqRefs.add$O(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef));
}}}
}if (!isPDBRefsFound && !isUniProtRefsFound ) {
var seqName=seq.getName$();
seqName=C$.sanitizeSeqName$S(seqName);
var names=seqName.toLowerCase$java_util_Locale($I$(7).ROOT).split$S("\\|");
for (var name, $name = 0, $$name = names; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
name.trim$();
if (C$.isValidSeqName$S(name)) {
seqRefs.add$O(name);
}}
for (var seqRef, $seqRef = seqRefs.iterator$(); $seqRef.hasNext$()&&((seqRef=($seqRef.next$())),1);) {
queryBuilder.append$S("text:").append$S(seqRef).append$S(" OR ");
}
}var endIndex=queryBuilder.lastIndexOf$S(" OR ");
if (queryBuilder.toString().length$() < 6) {
return null;
}var query=queryBuilder.toString().substring$I$I(0, endIndex);
return query;
});

Clazz.newMeth(C$, 'sanitizeSeqName$S',  function (seqName) {
$I$(8).requireNonNull$O(seqName);
return seqName.replaceAll$S$S("\\[\\d*\\]", "").replaceAll$S$S("[^\\dA-Za-z|_]", "").replaceAll$S$S("\\s+", "+");
}, 1);

Clazz.newMeth(C$, 'isValidSeqName$S',  function (seqName) {
var ignoreList="pdb,uniprot,swiss-prot";
if (seqName.length$() < 3) {
return false;
}if (seqName.contains$CharSequence(":")) {
return false;
}seqName=seqName.toLowerCase$java_util_Locale($I$(7).ROOT);
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
var pdbRequest=Clazz.new_($I$(9,1));
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(500);
pdbRequest.setFieldToSearchBy$S("(");
pdbRequest.setFieldToSortBy$S$Z(selectedFilterOpt.getValue$(), b);
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
pdbRequest.setSearchTerm$S(this.buildQuery$jalview_datamodel_SequenceI(seq) + ")");
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(seq);
resultList=this.pdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
this.lastPdbRequest=pdbRequest;
return resultList;
});

Clazz.newMeth(C$, 'getAvailableFilterOptions$S',  function (VIEWS_FILTER) {
var filters=Clazz.new_($I$(10,1));
filters.add$O(Clazz.new_(["PDBe " + $I$(12).getString$S("label.best_quality"), "overall_quality", VIEWS_FILTER, false, this],$I$(11,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
filters.add$O(Clazz.new_(["PDBe " + $I$(12).getString$S("label.best_resolution"), "resolution", VIEWS_FILTER, false, this],$I$(11,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
filters.add$O(Clazz.new_(["PDBe " + $I$(12).getString$S("label.most_protein_chain"), "number_of_protein_chains", VIEWS_FILTER, false, this],$I$(11,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
filters.add$O(Clazz.new_(["PDBe " + $I$(12).getString$S("label.most_bound_molecules"), "number_of_bound_molecules", VIEWS_FILTER, false, this],$I$(11,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
filters.add$O(Clazz.new_(["PDBe " + $I$(12).getString$S("label.most_polymer_residues"), "number_of_polymer_residues", VIEWS_FILTER, true, this],$I$(11,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
return filters;
});

Clazz.newMeth(C$, 'needsRefetch$jalview_jbgui_FilterOption',  function (selectedFilterOpt) {
return false;
});

Clazz.newMeth(C$, 'selectFirstRankedQuery$jalview_datamodel_SequenceI$java_util_Collection$java_util_Collection$S$Z',  function (seq, collectedResults, wantedFields, fieldToFilterBy, b) {
var resultList;
var pdbRequest=Clazz.new_($I$(9,1));
if (fieldToFilterBy.equalsIgnoreCase$S("uniprot_coverage")) {
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(1);
pdbRequest.setFieldToSearchBy$S("(");
pdbRequest.setSearchTerm$S(this.buildQuery$jalview_datamodel_SequenceI(seq) + ")");
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(seq);
pdbRequest.setFacet$Z(true);
pdbRequest.setFacetPivot$S(fieldToFilterBy + ",entry_entity");
pdbRequest.setFacetPivotMinCount$I(1);
} else {
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(1);
pdbRequest.setFieldToSearchBy$S("(");
pdbRequest.setFieldToSortBy$S$Z(fieldToFilterBy, b);
pdbRequest.setSearchTerm$S(this.buildQuery$jalview_datamodel_SequenceI(seq) + ")");
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(seq);
}resultList=this.pdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
this.lastPdbRequest=pdbRequest;
return resultList;
});

Clazz.newMeth(C$, 'collectSelectedRows$javax_swing_JTable$IA$java_util_List',  function (restable, selectedRows, selectedSeqsToView) {
var refSeqColIndex=restable.getColumn$O("Ref Sequence").getModelIndex$();
var pdbEntriesToView=Clazz.array($I$(13), [selectedRows.length]);
var count=0;
var idColumnIndex=-1;
var fromTDB=true;
idColumnIndex=restable.getColumn$O("PDB Id").getModelIndex$();
for (var row, $row = 0, $$row = selectedRows; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
var pdbIdStr=restable.getValueAt$I$I(row, idColumnIndex).toString();
var selectedSeq=restable.getValueAt$I$I(row, refSeqColIndex);
selectedSeqsToView.add$O(selectedSeq);
var pdbEntry=selectedSeq.getPDBEntry$S(pdbIdStr);
if (pdbEntry == null ) {
pdbEntry=$I$(14,"getFindEntry$S$java_util_Vector",[pdbIdStr, selectedSeq.getAllPDBEntries$()]);
}if (pdbEntry == null ) {
pdbEntry=Clazz.new_($I$(13,1));
pdbEntry.setId$S(pdbIdStr);
pdbEntry.setType$jalview_datamodel_PDBEntry_Type($I$(15).MMCIF);
selectedSeq.getDatasetSequence$().addPDBId$jalview_datamodel_PDBEntry(pdbEntry);
}pdbEntriesToView[count++]=pdbEntry;
}
return pdbEntriesToView;
});

Clazz.newMeth(C$, 'getLastFTSRequest$',  function () {
return this.lastPdbRequest;
});

Clazz.newMeth(C$, 'executePDBFTSRestRequest$jalview_fts_core_FTSRestRequest',  function (pdbRequest) {
return this.pdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
});

C$.$static$=function(){C$.$static$=0;
C$.$MAX_QLENGTH=7820;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
