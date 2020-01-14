(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.ArrayList','jalview.datamodel.SequenceI','jalview.datamodel.PDBEntry','jalview.bin.Jalview','jalview.gui.ProgressBar','jalview.bin.Cache','Thread','jalview.util.MessageManager','jalview.gui.Desktop','jalview.gui.StructureViewer','jalview.fts.service.pdb.PDBFTSRestClient','java.util.LinkedHashSet','java.util.HashSet','jalview.fts.core.FTSRestRequest','jalview.fts.core.FTSRestResponse','StringBuilder','jalview.gui.JvOptionPane',['jalview.gui.StructureChooser','.CachedPDB'],['jalview.gui.StructureChooser','.PDBEntryTableModel'],'java.util.Objects','jalview.jbgui.GStructureChooser','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView',['jalview.jbgui.GStructureChooser','.FilterOption'],'jalview.gui.JvSwingUtils',['jalview.datamodel.PDBEntry','.Type'],'jalview.gui.AssociatePdbFileWithSeq','jalview.io.DataSourceType','javax.swing.SwingUtilities','Boolean','jalview.ws.sifts.SiftsSettings','jalview.ws.DBRefFetcher',['jalview.jbgui.GStructureChooser','.AssociateSeqOptions']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StructureChooser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.jbgui.GStructureChooser', 'jalview.gui.IProgressIndicator');
C$.MAX_QLENGTH=0;
C$.lastTargetedView=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.MAX_QLENGTH=7820;
C$.lastTargetedView=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.selectedSequence=null;
this.selectedSequences=null;
this.progressIndicator=null;
this.discoveredStructuresSet=null;
this.lastPdbRequest=null;
this.pdbRestClient=null;
this.selectedPdbFileName=null;
this.isValidPBDEntry=false;
this.cachedPDBExists=false;
this.sViewer=null;
this.PDB_ID_MIN=0;
this.progressBar=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sViewer=null;
this.PDB_ID_MIN=3;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceI$jalview_gui_AlignmentPanel', function (selectedSeqs, selectedSeq, ap) {
Clazz.super_(C$, this,1);
this.ap=ap;
this.selectedSequence=selectedSeq;
this.selectedSequences=selectedSeqs;
this.progressIndicator=(ap == null ) ? null : ap.alignFrame;
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$', function () {
if (!$I$(4).isHeadlessMode$()) {
this.progressBar=Clazz.new_($I$(5).c$$javax_swing_JPanel$javax_swing_JLabel,[this.statusPanel, this.statusBar]);
}this.chk_superpose.setSelected$Z($I$(6).getDefault$S$Z("AUTOSUPERIMPOSE", true));
this.populateFilterComboBox$Z$Z(true, this.cachedPDBExists);
var discoverPDBStructuresThread=Clazz.new_($I$(7).c$$Runnable,[((P$.StructureChooser$1||
(function(){var C$=Clazz.newClass(P$, "StructureChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var startTime=System.currentTimeMillis$();
this.b$['jalview.gui.StructureChooser'].updateProgressIndicator$S$J.apply(this.b$['jalview.gui.StructureChooser'], [$I$(8).getString$S("status.loading_cached_pdb_entries"), startTime]);
this.b$['jalview.gui.StructureChooser'].loadLocalCachedPDBEntries$.apply(this.b$['jalview.gui.StructureChooser'], []);
this.b$['jalview.gui.StructureChooser'].updateProgressIndicator$S$J.apply(this.b$['jalview.gui.StructureChooser'], [null, startTime]);
this.b$['jalview.gui.StructureChooser'].updateProgressIndicator$S$J.apply(this.b$['jalview.gui.StructureChooser'], [$I$(8).getString$S("status.searching_for_pdb_structures"), startTime]);
this.b$['jalview.gui.StructureChooser'].fetchStructuresMetaData$.apply(this.b$['jalview.gui.StructureChooser'], []);
this.b$['jalview.gui.StructureChooser'].populateFilterComboBox$Z$Z.apply(this.b$['jalview.gui.StructureChooser'], [this.b$['jalview.gui.StructureChooser'].isStructuresDiscovered$.apply(this.b$['jalview.gui.StructureChooser'], []), this.b$['jalview.gui.StructureChooser'].cachedPDBExists]);
p$1.discoverStructureViews.apply(this.b$['jalview.gui.StructureChooser'], []);
this.b$['jalview.gui.StructureChooser'].updateProgressIndicator$S$J.apply(this.b$['jalview.gui.StructureChooser'], [null, startTime]);
this.b$['jalview.gui.StructureChooser'].mainFrame.setVisible$Z(true);
this.b$['jalview.gui.StructureChooser'].updateCurrentView$.apply(this.b$['jalview.gui.StructureChooser'], []);
});
})()
), Clazz.new_(P$.StructureChooser$1.$init$, [this, null]))]);
discoverPDBStructuresThread.start$();
});

Clazz.newMeth(C$, 'discoverStructureViews', function () {
if ($I$(9).instance != null ) {
this.targetView.removeAllItems$();
if (C$.lastTargetedView != null  && !C$.lastTargetedView.isVisible$() ) {
C$.lastTargetedView=null;
}var linkedViewsAt=0;
for (var view, $view = $I$(9).instance.getStructureViewers$jalview_gui_AlignmentPanel$Class(null, null).iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
var viewHandler=(C$.lastTargetedView != null  && C$.lastTargetedView.sview === view  ) ? C$.lastTargetedView : $I$(10).reconfigure$jalview_api_structures_JalviewStructureDisplayI(view);
if (view.isLinkedWith$jalview_gui_AlignmentPanel(this.ap)) {
this.targetView.insertItemAt$TE$I(viewHandler, linkedViewsAt++);
} else {
this.targetView.addItem$TE(viewHandler);
}}
this.targetView.setVisible$Z(false);
if (this.targetView.getItemCount$() > 0) {
this.targetView.setVisible$Z(true);
if (C$.lastTargetedView != null ) {
this.targetView.setSelectedItem$O(C$.lastTargetedView);
} else {
this.targetView.setSelectedIndex$I(0);
}}this.btn_add.setVisible$Z(this.targetView.isVisible$());
}}, p$1);

Clazz.newMeth(C$, 'updateProgressIndicator$S$J', function (message, id) {
if (this.progressIndicator != null ) {
this.progressIndicator.setProgressBar$S$J(message, id);
}});

Clazz.newMeth(C$, 'fetchStructuresMetaData$', function () {
var startTime=System.currentTimeMillis$();
this.pdbRestClient=$I$(11).getInstance$();
var wantedFields=this.pdbDocFieldPrefs.getStructureSummaryFields$();
this.discoveredStructuresSet=Clazz.new_($I$(12));
var errors=Clazz.new_($I$(13));
for (var seq, $seq = 0, $$seq = this.selectedSequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var pdbRequest=Clazz.new_($I$(14));
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(500);
pdbRequest.setFieldToSearchBy$S("(");
var selectedFilterOpt=(this.cmb_filterOption.getSelectedItem$());
pdbRequest.setFieldToSortBy$S$Z(selectedFilterOpt.getValue$(), !this.chk_invertFilter.isSelected$());
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
pdbRequest.setSearchTerm$S(C$.buildQuery$jalview_datamodel_SequenceI(seq) + ")");
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(seq);
var resultList;
try {
resultList=this.pdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
errors.add$TE(e.getMessage$());
continue;
} else {
throw e;
}
}
this.lastPdbRequest=pdbRequest;
if (resultList.getSearchSummary$() != null  && !resultList.getSearchSummary$().isEmpty$() ) {
this.discoveredStructuresSet.addAll$java_util_Collection(resultList.getSearchSummary$());
}}
var noOfStructuresFound=0;
var totalTime=(System.currentTimeMillis$() - startTime) + " milli secs";
if (this.discoveredStructuresSet != null  && !this.discoveredStructuresSet.isEmpty$() ) {
this.getResultTable$().setModel$javax_swing_table_TableModel($I$(15).getTableModel$jalview_fts_core_FTSRestRequest$java_util_Collection(this.lastPdbRequest, this.discoveredStructuresSet));
noOfStructuresFound=this.discoveredStructuresSet.size$();
this.mainFrame.setTitle$S($I$(8).formatMessage$S$OA("label.structure_chooser_no_of_structures", [new Integer(noOfStructuresFound), totalTime]));
} else {
this.mainFrame.setTitle$S($I$(8).getString$S("label.structure_chooser_manual_association"));
if (errors.size$() > 0) {
var errorMsg=Clazz.new_($I$(16));
for (var error, $error = errors.iterator$(); $error.hasNext$()&&((error=($error.next$())),1);) {
errorMsg.append$S(error).append$S("\n");
}
$I$(17).showMessageDialog$java_awt_Component$S$S$I(this, errorMsg.toString(), $I$(8).getString$S("label.pdb_web-service_error"), 0);
}}});

Clazz.newMeth(C$, 'loadLocalCachedPDBEntries$', function () {
var entries=Clazz.new_($I$(1));
for (var seq, $seq = 0, $$seq = this.selectedSequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
if (seq.getDatasetSequence$() != null  && seq.getDatasetSequence$().getAllPDBEntries$() != null  ) {
for (var pdbEntry, $pdbEntry = seq.getDatasetSequence$().getAllPDBEntries$().iterator$(); $pdbEntry.hasNext$()&&((pdbEntry=($pdbEntry.next$())),1);) {
if (pdbEntry.getFile$() != null ) {
entries.add$TE(Clazz.new_($I$(18).c$$jalview_datamodel_SequenceI$jalview_datamodel_PDBEntry, [this, null, seq, pdbEntry]));
}}
}}
this.cachedPDBExists=!entries.isEmpty$();
var tableModelx=Clazz.new_($I$(19).c$$java_util_List, [this, null, entries]);
this.tbl_local_pdb.setModel$javax_swing_table_TableModel(tableModelx);
});

Clazz.newMeth(C$, 'buildQuery$jalview_datamodel_SequenceI', function (seq) {
var isPDBRefsFound=false;
var isUniProtRefsFound=false;
var queryBuilder=Clazz.new_($I$(16));
var seqRefs=Clazz.new_($I$(12));
if (seq.getAllPDBEntries$() != null  && queryBuilder.length$() < C$.MAX_QLENGTH ) {
for (var entry, $entry = seq.getAllPDBEntries$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (C$.isValidSeqName$S(entry.getId$())) {
queryBuilder.append$S("pdb_id:").append$S(entry.getId$().toLowerCase$()).append$S(" OR ");
isPDBRefsFound=true;
}}
}var refs=seq.getDBRefs$();
if (refs != null  && refs.size$() != 0 ) {
for (var ib=0, nb=refs.size$(); ib < nb; ib++) {
var dbRef=refs.get$I(ib);
if (C$.isValidSeqName$S(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef)) && queryBuilder.length$() < C$.MAX_QLENGTH ) {
if (dbRef.getSource$().equalsIgnoreCase$S("UNIPROT")) {
queryBuilder.append$S("uniprot_accession:").append$S(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef)).append$S(" OR ");
queryBuilder.append$S("uniprot_id:").append$S(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef)).append$S(" OR ");
isUniProtRefsFound=true;
} else if (dbRef.getSource$().equalsIgnoreCase$S("PDB")) {
queryBuilder.append$S("pdb_id:").append$S(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef).toLowerCase$()).append$S(" OR ");
isPDBRefsFound=true;
} else {
seqRefs.add$TE(C$.getDBRefId$jalview_datamodel_DBRefEntry(dbRef));
}}}
}if (!isPDBRefsFound && !isUniProtRefsFound ) {
var seqName=seq.getName$();
seqName=C$.sanitizeSeqName$S(seqName);
var names=seqName.toLowerCase$().split$S("\\|");
for (var name, $name = 0, $$name = names; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
name.trim$();
if (C$.isValidSeqName$S(name)) {
seqRefs.add$TE(name);
}}
for (var seqRef, $seqRef = seqRefs.iterator$(); $seqRef.hasNext$()&&((seqRef=($seqRef.next$())),1);) {
queryBuilder.append$S("text:").append$S(seqRef).append$S(" OR ");
}
}var endIndex=queryBuilder.lastIndexOf$S(" OR ");
if (queryBuilder.toString().length$() < 6) {
return null;
}var query=queryBuilder.toString().substring$I$I(0, endIndex);
return query;
}, 1);

Clazz.newMeth(C$, 'sanitizeSeqName$S', function (seqName) {
$I$(20).requireNonNull$TT(seqName);
return seqName.replaceAll$S$S("\\[\\d*\\]", "").replaceAll$S$S("[^\\dA-Za-z|_]", "").replaceAll$S$S("\\s+", "+");
}, 1);

Clazz.newMeth(C$, 'isValidSeqName$S', function (seqName) {
var ignoreList="pdb,uniprot,swiss-prot";
if (seqName.length$() < 3) {
return false;
}if (seqName.contains$CharSequence(":")) {
return false;
}seqName=seqName.toLowerCase$();
for (var ignoredEntry, $ignoredEntry = 0, $$ignoredEntry = ignoreList.split$S(","); $ignoredEntry<$$ignoredEntry.length&&((ignoredEntry=($$ignoredEntry[$ignoredEntry])),1);$ignoredEntry++) {
if (seqName.contains$CharSequence(ignoredEntry)) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'getDBRefId$jalview_datamodel_DBRefEntry', function (dbRef) {
var ref=dbRef.getAccessionId$().replaceAll$S$S("GO:", "");
return ref;
}, 1);

Clazz.newMeth(C$, 'filterResultSet$S', function (fieldToFilterBy) {
var filterThread=Clazz.new_($I$(7).c$$Runnable,[((P$.StructureChooser$2||
(function(){var C$=Clazz.newClass(P$, "StructureChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var startTime=System.currentTimeMillis$();
this.b$['jalview.gui.StructureChooser'].pdbRestClient=$I$(11).getInstance$();
this.b$['jalview.gui.StructureChooser'].lbl_loading.setVisible$Z(true);
var wantedFields=this.b$['jalview.gui.StructureChooser'].pdbDocFieldPrefs.getStructureSummaryFields$();
var filteredResponse=Clazz.new_($I$(13));
var errors=Clazz.new_($I$(13));
for (var seq, $seq = 0, $$seq = this.b$['jalview.gui.StructureChooser'].selectedSequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var pdbRequest=Clazz.new_($I$(14));
if (this.$finals$.fieldToFilterBy.equalsIgnoreCase$S("uniprot_coverage")) {
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(1);
pdbRequest.setFieldToSearchBy$S("(");
pdbRequest.setSearchTerm$S(P$.StructureChooser.buildQuery$jalview_datamodel_SequenceI(seq) + ")");
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(seq);
pdbRequest.setFacet$Z(true);
pdbRequest.setFacetPivot$S(this.$finals$.fieldToFilterBy + ",entry_entity");
pdbRequest.setFacetPivotMinCount$I(1);
} else {
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(1);
pdbRequest.setFieldToSearchBy$S("(");
pdbRequest.setFieldToSortBy$S$Z(this.$finals$.fieldToFilterBy, !this.b$['jalview.gui.StructureChooser'].chk_invertFilter.isSelected$());
pdbRequest.setSearchTerm$S(P$.StructureChooser.buildQuery$jalview_datamodel_SequenceI(seq) + ")");
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(seq);
}var resultList;
try {
resultList=this.b$['jalview.gui.StructureChooser'].pdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
errors.add$TE(e.getMessage$());
continue;
} else {
throw e;
}
}
this.b$['jalview.gui.StructureChooser'].lastPdbRequest=pdbRequest;
if (resultList.getSearchSummary$() != null  && !resultList.getSearchSummary$().isEmpty$() ) {
filteredResponse.addAll$java_util_Collection(resultList.getSearchSummary$());
}}
var totalTime=(System.currentTimeMillis$() - startTime) + " milli secs";
if (!filteredResponse.isEmpty$()) {
var filterResponseCount=filteredResponse.size$();
var reorderedStructuresSet=Clazz.new_($I$(12));
reorderedStructuresSet.addAll$java_util_Collection(filteredResponse);
reorderedStructuresSet.addAll$java_util_Collection(this.b$['jalview.gui.StructureChooser'].discoveredStructuresSet);
this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []).setModel$javax_swing_table_TableModel($I$(15).getTableModel$jalview_fts_core_FTSRestRequest$java_util_Collection(this.b$['jalview.gui.StructureChooser'].lastPdbRequest, reorderedStructuresSet));
$I$(15).configureTableColumn$javax_swing_JTable$java_util_Collection$java_util_Map(this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []), wantedFields, $I$(21).tempUserPrefs);
this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []).getColumn$O("Ref Sequence").setPreferredWidth$I(120);
this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []).getColumn$O("Ref Sequence").setMinWidth$I(100);
this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []).getColumn$O("Ref Sequence").setMaxWidth$I(200);
this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []).addRowSelectionInterval$I$I(0, filterResponseCount - 1);
this.b$['jalview.gui.StructureChooser'].mainFrame.setTitle$S($I$(8).formatMessage$S$OA("label.structure_chooser_filter_time", [totalTime]));
} else {
this.b$['jalview.gui.StructureChooser'].mainFrame.setTitle$S($I$(8).formatMessage$S$OA("label.structure_chooser_filter_time", [totalTime]));
if (errors.size$() > 0) {
var errorMsg=Clazz.new_($I$(16));
for (var error, $error = errors.iterator$(); $error.hasNext$()&&((error=($error.next$())),1);) {
errorMsg.append$S(error).append$S("\n");
}
$I$(17).showMessageDialog$java_awt_Component$S$S$I(null, errorMsg.toString(), $I$(8).getString$S("label.pdb_web-service_error"), 0);
}}this.b$['jalview.gui.StructureChooser'].lbl_loading.setVisible$Z(false);
this.b$['jalview.gui.StructureChooser'].validateSelections$.apply(this.b$['jalview.gui.StructureChooser'], []);
});
})()
), Clazz.new_(P$.StructureChooser$2.$init$, [this, {fieldToFilterBy: fieldToFilterBy}]))]);
filterThread.start$();
});

Clazz.newMeth(C$, 'pdbFromFile_actionPerformed$', function () {
var chooser=Clazz.new_($I$(22).c$$S,[$I$(6).getProperty$S("LAST_DIRECTORY")]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(23)));
chooser.setDialogTitle$S($I$(8).formatMessage$S$OA("label.select_pdb_file_for", [this.selectedSequence.getDisplayId$Z(false)]));
chooser.setToolTipText$S($I$(8).formatMessage$S$OA("label.load_pdb_file_associate_with_sequence", [this.selectedSequence.getDisplayId$Z(false)]));
var value=chooser.showOpenDialog$java_awt_Component(null);
if (value == 0) {
this.selectedPdbFileName=chooser.getSelectedFile$().getPath$();
$I$(6).setProperty$S$S("LAST_DIRECTORY", this.selectedPdbFileName);
this.validateSelections$();
}});

Clazz.newMeth(C$, 'populateFilterComboBox$Z$Z', function (haveData, cachedPDBExist) {
this.cmb_filterOption.removeItemListener$java_awt_event_ItemListener(this);
this.cmb_filterOption.removeAllItems$();
if (haveData) {
this.cmb_filterOption.addItem$TE(Clazz.new_($I$(24).c$$S$S$S$Z, [this, null, $I$(8).getString$S("label.best_quality"), "overall_quality", "VIEWS_FILTER", false]));
this.cmb_filterOption.addItem$TE(Clazz.new_($I$(24).c$$S$S$S$Z, [this, null, $I$(8).getString$S("label.best_resolution"), "resolution", "VIEWS_FILTER", false]));
this.cmb_filterOption.addItem$TE(Clazz.new_($I$(24).c$$S$S$S$Z, [this, null, $I$(8).getString$S("label.most_protein_chain"), "number_of_protein_chains", "VIEWS_FILTER", false]));
this.cmb_filterOption.addItem$TE(Clazz.new_($I$(24).c$$S$S$S$Z, [this, null, $I$(8).getString$S("label.most_bound_molecules"), "number_of_bound_molecules", "VIEWS_FILTER", false]));
this.cmb_filterOption.addItem$TE(Clazz.new_($I$(24).c$$S$S$S$Z, [this, null, $I$(8).getString$S("label.most_polymer_residues"), "number_of_polymer_residues", "VIEWS_FILTER", true]));
}this.cmb_filterOption.addItem$TE(Clazz.new_($I$(24).c$$S$S$S$Z, [this, null, $I$(8).getString$S("label.enter_pdb_id"), "-", "VIEWS_ENTER_ID", false]));
this.cmb_filterOption.addItem$TE(Clazz.new_($I$(24).c$$S$S$S$Z, [this, null, $I$(8).getString$S("label.from_file"), "-", "VIEWS_FROM_FILE", false]));
if (cachedPDBExist) {
var cachedOption=Clazz.new_($I$(24).c$$S$S$S$Z, [this, null, $I$(8).getString$S("label.cached_structures"), "-", "VIEWS_LOCAL_PDB", false]);
this.cmb_filterOption.addItem$TE(cachedOption);
this.cmb_filterOption.setSelectedItem$O(cachedOption);
}this.cmb_filterOption.addItemListener$java_awt_event_ItemListener(this);
});

Clazz.newMeth(C$, 'updateCurrentView$', function () {
var selectedFilterOpt=(this.cmb_filterOption.getSelectedItem$());
this.layout_switchableViews.show$java_awt_Container$S(this.pnl_switchableViews, selectedFilterOpt.getView$());
var filterTitle=this.mainFrame.getTitle$();
this.mainFrame.setTitle$S(this.frameTitle);
this.chk_invertFilter.setVisible$Z(false);
if (selectedFilterOpt.getView$() == "VIEWS_FILTER") {
this.mainFrame.setTitle$S(filterTitle);
this.chk_invertFilter.setVisible$Z(true);
this.filterResultSet$S(selectedFilterOpt.getValue$());
} else if (selectedFilterOpt.getView$() == "VIEWS_ENTER_ID" || selectedFilterOpt.getView$() == "VIEWS_FROM_FILE" ) {
this.mainFrame.setTitle$S($I$(8).getString$S("label.structure_chooser_manual_association"));
this.idInputAssSeqPanel.loadCmbAssSeq$();
this.fileChooserAssSeqPanel.loadCmbAssSeq$();
}this.validateSelections$();
});

Clazz.newMeth(C$, 'validateSelections$', function () {
var selectedFilterOpt=(this.cmb_filterOption.getSelectedItem$());
this.btn_add.setEnabled$Z(false);
var currentView=selectedFilterOpt.getView$();
var selectedCount=0;
if (currentView == "VIEWS_FILTER") {
selectedCount=this.getResultTable$().getSelectedRows$().length;
if (selectedCount > 0) {
this.btn_add.setEnabled$Z(true);
}} else if (currentView == "VIEWS_LOCAL_PDB") {
selectedCount=this.tbl_local_pdb.getSelectedRows$().length;
if (selectedCount > 0) {
this.btn_add.setEnabled$Z(true);
}} else if (currentView == "VIEWS_ENTER_ID") {
this.validateAssociationEnterPdb$();
} else if (currentView == "VIEWS_FROM_FILE") {
this.validateAssociationFromFile$();
}this.btn_newView.setEnabled$Z(this.btn_add.isEnabled$());
this.chk_superpose.setEnabled$Z(selectedCount > 1 || this.targetView.getItemCount$() > 0 );
});

Clazz.newMeth(C$, 'validateAssociationEnterPdb$', function () {
var assSeqOpt=this.idInputAssSeqPanel.getCmb_assSeq$().getSelectedItem$();
this.lbl_pdbManualFetchStatus.setIcon$javax_swing_Icon(this.errorImage);
this.lbl_pdbManualFetchStatus.setToolTipText$S("");
if (this.txt_search.getText$().length$() > 0) {
this.lbl_pdbManualFetchStatus.setToolTipText$S($I$(25).wrapTooltip$Z$S(true, $I$(8).formatMessage$S$OA("info.no_pdb_entry_found_for", [this.txt_search.getText$()])));
}if (this.errorWarning.length$() > 0) {
this.lbl_pdbManualFetchStatus.setIcon$javax_swing_Icon(this.warningImage);
this.lbl_pdbManualFetchStatus.setToolTipText$S($I$(25).wrapTooltip$Z$S(true, this.errorWarning.toString()));
}if (this.selectedSequences.length == 1 || !assSeqOpt.getName$().equalsIgnoreCase$S("-Select Associated Seq-") ) {
this.txt_search.setEnabled$Z(true);
if (this.isValidPBDEntry) {
this.btn_add.setEnabled$Z(true);
this.lbl_pdbManualFetchStatus.setToolTipText$S("");
this.lbl_pdbManualFetchStatus.setIcon$javax_swing_Icon(this.goodImage);
}} else {
this.txt_search.setEnabled$Z(false);
this.lbl_pdbManualFetchStatus.setIcon$javax_swing_Icon(this.errorImage);
}});

Clazz.newMeth(C$, 'validateAssociationFromFile$', function () {
var assSeqOpt=this.fileChooserAssSeqPanel.getCmb_assSeq$().getSelectedItem$();
this.lbl_fromFileStatus.setIcon$javax_swing_Icon(this.errorImage);
if (this.selectedSequences.length == 1 || (assSeqOpt != null  && !assSeqOpt.getName$().equalsIgnoreCase$S("-Select Associated Seq-") ) ) {
this.btn_pdbFromFile.setEnabled$Z(true);
if (this.selectedPdbFileName != null  && this.selectedPdbFileName.length$() > 0 ) {
this.btn_add.setEnabled$Z(true);
this.lbl_fromFileStatus.setIcon$javax_swing_Icon(this.goodImage);
}} else {
this.btn_pdbFromFile.setEnabled$Z(false);
this.lbl_fromFileStatus.setIcon$javax_swing_Icon(this.errorImage);
}});

Clazz.newMeth(C$, 'cmbAssSeqStateChanged$', function () {
this.validateSelections$();
});

Clazz.newMeth(C$, 'stateChanged$java_awt_event_ItemEvent', function (e) {
if (Clazz.instanceOf(e.getSource$(), "javax.swing.JCheckBox")) {
this.updateCurrentView$();
} else {
if (e.getStateChange$() == 1) {
this.updateCurrentView$();
}}});

Clazz.newMeth(C$, 'selectStructure$SA', function (pdbids) {
var found=false;
var selectedFilterOpt=(this.cmb_filterOption.getSelectedItem$());
var currentView=selectedFilterOpt.getView$();
var restable=(currentView == "VIEWS_FILTER") ? this.getResultTable$() : (currentView == "VIEWS_LOCAL_PDB") ? this.tbl_local_pdb : null;
if (restable == null ) {
return false;
}var pdbIdColIndex=restable.getColumn$O("PDB Id").getModelIndex$();
for (var r=0; r < restable.getRowCount$(); r++) {
for (var p=0; p < pdbids.length; p++) {
if (String.valueOf$O(restable.getValueAt$I$I(r, pdbIdColIndex)).equalsIgnoreCase$S(pdbids[p])) {
restable.setRowSelectionInterval$I$I(r, r);
found=true;
}}
}
return found;
});

Clazz.newMeth(C$, 'newView_ActionPerformed$', function () {
this.targetView.setSelectedItem$O(null);
this.showStructures$Z(false);
});

Clazz.newMeth(C$, 'add_ActionPerformed$', function () {
this.showStructures$Z(false);
});

Clazz.newMeth(C$, 'showStructures$Z', function (waitUntilFinished) {
var ssm=this.ap.getStructureSelectionManager$();
var preferredHeight=this.pnl_filter.getHeight$();
var viewStruc=((P$.StructureChooser$3||
(function(){var C$=Clazz.newClass(P$, "StructureChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var selectedFilterOpt=(this.b$['jalview.gui.StructureChooser'].cmb_filterOption.getSelectedItem$());
var currentView=selectedFilterOpt.getView$();
var restable=(currentView == "VIEWS_FILTER") ? this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []) : this.b$['jalview.gui.StructureChooser'].tbl_local_pdb;
if (currentView == "VIEWS_FILTER") {
var pdbIdColIndex=restable.getColumn$O("PDB Id").getModelIndex$();
var refSeqColIndex=restable.getColumn$O("Ref Sequence").getModelIndex$();
var selectedRows=restable.getSelectedRows$();
var pdbEntriesToView=Clazz.array($I$(3), [selectedRows.length]);
var count=0;
var selectedSeqsToView=Clazz.new_($I$(1));
for (var row, $row = 0, $$row = selectedRows; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
var pdbIdStr=restable.getValueAt$I$I(row, pdbIdColIndex).toString();
var selectedSeq=restable.getValueAt$I$I(row, refSeqColIndex);
selectedSeqsToView.add$TE(selectedSeq);
var pdbEntry=selectedSeq.getPDBEntry$S(pdbIdStr);
if (pdbEntry == null ) {
pdbEntry=p$1.getFindEntry$S$java_util_Vector.apply(this.b$['jalview.gui.StructureChooser'], [pdbIdStr, selectedSeq.getAllPDBEntries$()]);
}if (pdbEntry == null ) {
pdbEntry=Clazz.new_($I$(3));
pdbEntry.setId$S(pdbIdStr);
pdbEntry.setType$jalview_datamodel_PDBEntry_Type($I$(26).PDB);
selectedSeq.getDatasetSequence$().addPDBId$jalview_datamodel_PDBEntry(pdbEntry);
}pdbEntriesToView[count++]=pdbEntry;
}
var selectedSeqs=selectedSeqsToView.toArray$TTA(Clazz.array($I$(2), [selectedSeqsToView.size$()]));
this.b$['jalview.gui.StructureChooser'].sViewer=p$1.launchStructureViewer$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceIA.apply(this.b$['jalview.gui.StructureChooser'], [this.$finals$.ssm, pdbEntriesToView, this.b$['jalview.gui.StructureChooser'].ap, selectedSeqs]);
} else if (currentView == "VIEWS_LOCAL_PDB") {
var selectedRows=this.b$['jalview.gui.StructureChooser'].tbl_local_pdb.getSelectedRows$();
var pdbEntriesToView=Clazz.array($I$(3), [selectedRows.length]);
var count=0;
var pdbIdColIndex=this.b$['jalview.gui.StructureChooser'].tbl_local_pdb.getColumn$O("PDB Id").getModelIndex$();
var refSeqColIndex=this.b$['jalview.gui.StructureChooser'].tbl_local_pdb.getColumn$O("Ref Sequence").getModelIndex$();
var selectedSeqsToView=Clazz.new_($I$(1));
for (var row, $row = 0, $$row = selectedRows; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
var pdbEntry=this.b$['jalview.gui.StructureChooser'].tbl_local_pdb.getValueAt$I$I(row, pdbIdColIndex);
pdbEntriesToView[count++]=pdbEntry;
var selectedSeq=this.b$['jalview.gui.StructureChooser'].tbl_local_pdb.getValueAt$I$I(row, refSeqColIndex);
selectedSeqsToView.add$TE(selectedSeq);
}
var selectedSeqs=selectedSeqsToView.toArray$TTA(Clazz.array($I$(2), [selectedSeqsToView.size$()]));
this.b$['jalview.gui.StructureChooser'].sViewer=p$1.launchStructureViewer$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceIA.apply(this.b$['jalview.gui.StructureChooser'], [this.$finals$.ssm, pdbEntriesToView, this.b$['jalview.gui.StructureChooser'].ap, selectedSeqs]);
} else if (currentView == "VIEWS_ENTER_ID") {
var userSelectedSeq=(this.b$['jalview.gui.StructureChooser'].idInputAssSeqPanel.getCmb_assSeq$().getSelectedItem$()).getSequence$();
if (userSelectedSeq != null ) {
this.b$['jalview.gui.StructureChooser'].selectedSequence=userSelectedSeq;
}var pdbIdStr=this.b$['jalview.gui.StructureChooser'].txt_search.getText$();
var pdbEntry=this.b$['jalview.gui.StructureChooser'].selectedSequence.getPDBEntry$S(pdbIdStr);
if (pdbEntry == null ) {
pdbEntry=Clazz.new_($I$(3));
if (pdbIdStr.split$S(":").length > 1) {
pdbEntry.setId$S(pdbIdStr.split$S(":")[0]);
pdbEntry.setChainCode$S(pdbIdStr.split$S(":")[1].toUpperCase$());
} else {
pdbEntry.setId$S(pdbIdStr);
}pdbEntry.setType$jalview_datamodel_PDBEntry_Type($I$(26).PDB);
this.b$['jalview.gui.StructureChooser'].selectedSequence.getDatasetSequence$().addPDBId$jalview_datamodel_PDBEntry(pdbEntry);
}var pdbEntriesToView=Clazz.array($I$(3), -1, [pdbEntry]);
this.b$['jalview.gui.StructureChooser'].sViewer=p$1.launchStructureViewer$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceIA.apply(this.b$['jalview.gui.StructureChooser'], [this.$finals$.ssm, pdbEntriesToView, this.b$['jalview.gui.StructureChooser'].ap, Clazz.array($I$(2), -1, [this.b$['jalview.gui.StructureChooser'].selectedSequence])]);
} else if (currentView == "VIEWS_FROM_FILE") {
var userSelectedSeq=(this.b$['jalview.gui.StructureChooser'].fileChooserAssSeqPanel.getCmb_assSeq$().getSelectedItem$()).getSequence$();
if (userSelectedSeq != null ) {
this.b$['jalview.gui.StructureChooser'].selectedSequence=userSelectedSeq;
}var fileEntry=Clazz.new_($I$(27)).associatePdbWithSeq$S$jalview_io_DataSourceType$jalview_datamodel_SequenceI$Z$jalview_api_StructureSelectionManagerProvider(this.b$['jalview.gui.StructureChooser'].selectedPdbFileName, $I$(28).FILE, this.b$['jalview.gui.StructureChooser'].selectedSequence, true, $I$(9).instance);
this.b$['jalview.gui.StructureChooser'].sViewer=p$1.launchStructureViewer$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceIA.apply(this.b$['jalview.gui.StructureChooser'], [this.$finals$.ssm, Clazz.array($I$(3), -1, [fileEntry]), this.b$['jalview.gui.StructureChooser'].ap, Clazz.array($I$(2), -1, [this.b$['jalview.gui.StructureChooser'].selectedSequence])]);
}$I$(29).invokeLater$Runnable(((P$.StructureChooser$3$1||
(function(){var C$=Clazz.newClass(P$, "StructureChooser$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.jbgui.GStructureChooser'].closeAction$I.apply(this.b$['jalview.jbgui.GStructureChooser'], [this.$finals$.preferredHeight]);
this.b$['jalview.gui.StructureChooser'].mainFrame.dispose$();
});
})()
), Clazz.new_(P$.StructureChooser$3$1.$init$, [this, {preferredHeight: this.$finals$.preferredHeight}])));
});
})()
), Clazz.new_(P$.StructureChooser$3.$init$, [this, {ssm: ssm, preferredHeight: preferredHeight}]));
var runner=Clazz.new_($I$(7).c$$Runnable,[viewStruc]);
runner.start$();
if (waitUntilFinished) {
while (this.sViewer == null  ? runner.isAlive$() : (this.sViewer.sview == null  ? true : !this.sViewer.sview.hasMapping$())){
try {
$I$(7).sleep$J(300);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
} else {
throw ie;
}
}
}
}});

Clazz.newMeth(C$, 'getFindEntry$S$java_util_Vector', function (id, pdbEntries) {
$I$(20).requireNonNull$TT(id);
$I$(20).requireNonNull$TT(pdbEntries);
var foundEntry=null;
for (var entry, $entry = pdbEntries.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (entry.getId$().equalsIgnoreCase$S(id)) {
return entry;
}}
return foundEntry;
}, p$1);

Clazz.newMeth(C$, 'getTargetedStructureViewer$jalview_structure_StructureSelectionManager', function (ssm) {
var sv=this.targetView.getSelectedItem$();
return sv == null  ? Clazz.new_($I$(10).c$$jalview_structure_StructureSelectionManager,[ssm]) : sv;
});

Clazz.newMeth(C$, 'launchStructureViewer$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceIA', function (ssm, pdbEntriesToView, alignPanel, sequences) {
var progressId=sequences.hashCode$();
this.setProgressBar$S$J($I$(8).getString$S("status.launching_3d_structure_viewer"), progressId);
var theViewer=this.getTargetedStructureViewer$jalview_structure_StructureSelectionManager(ssm);
var superimpose=this.chk_superpose.isSelected$();
theViewer.setSuperpose$Z(superimpose);
$I$(6).setProperty$S$S("AUTOSUPERIMPOSE", $I$(30).valueOf$Z(superimpose).toString());
this.setProgressBar$S$J(null, progressId);
if ($I$(31).isMapWithSifts$()) {
var seqsWithoutSourceDBRef=Clazz.new_($I$(1));
var p=0;
for (var seq, $seq = 0, $$seq = sequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var pdbe=pdbEntriesToView[p++];
if (pdbe != null  && pdbe.getFile$() != null  ) {
var smm=ssm.getMapping$S(pdbe.getFile$());
if (smm != null  && smm.length > 0 ) {
for (var sm, $sm = 0, $$sm = smm; $sm<$$sm.length&&((sm=($$sm[$sm])),1);$sm++) {
if (sm.getSequence$() === seq ) {
continue;
}}
}}if (seq.getPrimaryDBRefs$().isEmpty$()) {
seqsWithoutSourceDBRef.add$TE(seq);
continue;
}}
if (!seqsWithoutSourceDBRef.isEmpty$()) {
var y=seqsWithoutSourceDBRef.size$();
this.setProgressBar$S$J($I$(8).formatMessage$S$OA("status.fetching_dbrefs_for_sequences_without_valid_refs", [new Integer(y)]), progressId);
var seqWithoutSrcDBRef=seqsWithoutSourceDBRef.toArray$TTA(Clazz.array($I$(2), [y]));
var dbRefFetcher=Clazz.new_($I$(32).c$$jalview_datamodel_SequenceIA,[seqWithoutSrcDBRef]);
dbRefFetcher.fetchDBRefs$Z(true);
this.setProgressBar$S$J("Fetch complete.", progressId);
}}if (pdbEntriesToView.length > 1) {
this.setProgressBar$S$J($I$(8).getString$S("status.fetching_3d_structures_for_selected_entries"), progressId);
theViewer.viewStructures$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIA$jalview_gui_AlignmentPanel(pdbEntriesToView, sequences, alignPanel);
} else {
this.setProgressBar$S$J($I$(8).formatMessage$S$OA("status.fetching_3d_structures_for", [pdbEntriesToView[0].getId$()]), progressId);
theViewer.viewStructures$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$jalview_gui_AlignmentPanel(pdbEntriesToView[0], sequences, alignPanel);
}this.setProgressBar$S$J(null, progressId);
C$.lastTargetedView=theViewer;
return theViewer;
}, p$1);

Clazz.newMeth(C$, 'populateCmbAssociateSeqOptions$javax_swing_JComboBox$javax_swing_JLabel', function (cmb_assSeq, lbl_associateSeq) {
cmb_assSeq.removeAllItems$();
cmb_assSeq.addItem$TE(Clazz.new_($I$(33).c$$S$jalview_datamodel_SequenceI, [this, null, "-Select Associated Seq-", null]));
lbl_associateSeq.setVisible$Z(false);
if (this.selectedSequences.length > 1) {
for (var seq, $seq = 0, $$seq = this.selectedSequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
cmb_assSeq.addItem$TE(Clazz.new_($I$(33).c$$jalview_datamodel_SequenceI, [this, null, seq]));
}
} else {
var seqName=this.selectedSequence.getDisplayId$Z(false);
seqName=seqName.length$() <= 40 ? seqName : seqName.substring$I$I(0, 39);
lbl_associateSeq.setText$S(seqName);
lbl_associateSeq.setVisible$Z(true);
cmb_assSeq.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'isStructuresDiscovered$', function () {
return this.discoveredStructuresSet != null  && !this.discoveredStructuresSet.isEmpty$() ;
});

Clazz.newMeth(C$, 'txt_search_ActionPerformed$', function () {
var text=this.txt_search.getText$().trim$();
if (text.length$() >= this.PDB_ID_MIN) ((P$.StructureChooser$4||
(function(){var C$=Clazz.newClass(P$, "StructureChooser$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.StructureChooser'].errorWarning.setLength$I(0);
this.b$['jalview.gui.StructureChooser'].isValidPBDEntry=false;
if (this.$finals$.text.length$() > 0) {
var searchTerm=this.$finals$.text.toLowerCase$();
searchTerm=searchTerm.split$S(":")[0];
var wantedFields=Clazz.new_($I$(1));
var pdbRequest=Clazz.new_($I$(14));
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(1);
pdbRequest.setFieldToSearchBy$S("(pdb_id:");
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
pdbRequest.setSearchTerm$S(searchTerm + ")");
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(this.b$['jalview.gui.StructureChooser'].selectedSequence);
this.b$['jalview.gui.StructureChooser'].pdbRestClient=$I$(11).getInstance$();
wantedFields.add$TE(this.b$['jalview.gui.StructureChooser'].pdbRestClient.getPrimaryKeyColumn$());
var resultList;
try {
resultList=this.b$['jalview.gui.StructureChooser'].pdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.b$['jalview.gui.StructureChooser'].errorWarning.append$S(e.getMessage$());
return;
} else {
throw e;
}
} finally {
this.b$['jalview.gui.StructureChooser'].validateSelections$.apply(this.b$['jalview.gui.StructureChooser'], []);
}
if (resultList.getSearchSummary$() != null  && resultList.getSearchSummary$().size$() > 0 ) {
this.b$['jalview.gui.StructureChooser'].isValidPBDEntry=true;
}}this.b$['jalview.gui.StructureChooser'].validateSelections$.apply(this.b$['jalview.gui.StructureChooser'], []);
});
})()
), Clazz.new_($I$(7), [this, {text: text}],P$.StructureChooser$4)).start$();
});

Clazz.newMeth(C$, 'tabRefresh$', function () {
if (this.selectedSequences != null ) {
var refreshThread=Clazz.new_($I$(7).c$$Runnable,[((P$.StructureChooser$5||
(function(){var C$=Clazz.newClass(P$, "StructureChooser$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.StructureChooser'].fetchStructuresMetaData$.apply(this.b$['jalview.gui.StructureChooser'], []);
this.b$['jalview.gui.StructureChooser'].filterResultSet$S.apply(this.b$['jalview.gui.StructureChooser'], [(this.b$['jalview.gui.StructureChooser'].cmb_filterOption.getSelectedItem$()).getValue$()]);
});
})()
), Clazz.new_(P$.StructureChooser$5.$init$, [this, null]))]);
refreshThread.start$();
}});

Clazz.newMeth(C$, 'setProgressBar$S$J', function (message, id) {
this.progressBar.setProgressBar$S$J(message, id);
});

Clazz.newMeth(C$, 'registerHandler$J$jalview_gui_IProgressIndicatorHandler', function (id, handler) {
this.progressBar.registerHandler$J$jalview_gui_IProgressIndicatorHandler(id, handler);
});

Clazz.newMeth(C$, 'operationInProgress$', function () {
return this.progressBar.operationInProgress$();
});

Clazz.newMeth(C$, 'getOpenedStructureViewer$', function () {
return this.sViewer == null  ? null : this.sViewer.sview;
});
;
(function(){var C$=Clazz.newClass(P$.StructureChooser, "PDBEntryTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.columns=null;
this.pdbEntries=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.columns=Clazz.array(String, -1, ["Ref Sequence", "PDB Id", "Chain", "Type", "File"]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (pdbEntries) {
Clazz.super_(C$, this,1);
this.pdbEntries=Clazz.new_($I$(1).c$$java_util_Collection,[pdbEntries]);
}, 1);

Clazz.newMeth(C$, 'getColumnName$I', function (columnIndex) {
return this.columns[columnIndex];
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.pdbEntries.size$();
});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return this.columns.length;
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, column) {
return false;
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (rowIndex, columnIndex) {
var value="??";
var entry=this.pdbEntries.get$I(rowIndex);
switch (columnIndex) {
case 0:
value=entry.getSequence$();
break;
case 1:
value=entry.getPdbEntry$();
break;
case 2:
value=entry.getPdbEntry$().getChainCode$() == null  ? "_" : entry.getPdbEntry$().getChainCode$();
break;
case 3:
value=entry.getPdbEntry$().getType$();
break;
case 4:
value=entry.getPdbEntry$().getFile$();
break;
}
return value;
});

Clazz.newMeth(C$, 'getColumnClass$I', function (columnIndex) {
return columnIndex == 0 ? Clazz.getClass($I$(2),['addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation','addDBRef$jalview_datamodel_DBRefEntry','addPDBId$jalview_datamodel_PDBEntry','addSequenceFeature$jalview_datamodel_SequenceFeature','createDatasetSequence$','deleteChars$I$I','deleteFeature$jalview_datamodel_SequenceFeature','deriveSequence$','findFeatures$I$I$SA','findIndex$I','findPosition$I','findPositionMap$','findPositions$I$I','firstResidueOutsideIterator$java_util_Iterator','gapBitset$','gapMap$','getAlignmentAnnotations$S$S','getAllPDBEntries$','getAnnotation$','getAnnotation$S','getCharAt$I','getDBRefs$','getDatasetSequence$','getDescription$','getDisplayId$Z','getEnd$','getFeatures$','getGeneLoci$','getInsertions$','getInsertionsAsBits$','getLength$','getName$','getPDBEntry$S','getPrimaryDBRefs$','getRNA$','getSequence$','getSequence$I$I','getSequenceAsString$','getSequenceAsString$I$I','getSequenceFeatures$','getSequenceStringFromIterator$java_util_Iterator','getStart$','getSubSequence$I$I','getVamsasId$','hasAnnotation$jalview_datamodel_AlignmentAnnotation','insertCharAt$I$C','insertCharAt$I$I$C','isProtein$','removeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation','replace$C$C','sequenceChanged$','setAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA','setDBRefs$jalview_datamodel_Sequence_DBModList','setDatasetSequence$jalview_datamodel_SequenceI','setDescription$S','setEnd$I','setGeneLoci$S$S$S$jalview_util_MapList','setName$S','setPDBId$java_util_Vector','setRNA$fr_orsay_lri_varna_models_rna_RNA','setSequence$S','setSequenceFeatures$java_util_List','setStart$I','setVamsasId$S','transferAnnotation$jalview_datamodel_SequenceI$jalview_datamodel_Mapping','updatePDBIds$']) : Clazz.getClass($I$(3));
});

Clazz.newMeth(C$, 'getPDBEntryAt$I', function (row) {
return this.pdbEntries.get$I(row);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.StructureChooser, "CachedPDB", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequence=null;
this.pdbEntry=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$jalview_datamodel_PDBEntry', function (sequence, pdbEntry) {
C$.$init$.apply(this);
this.sequence=sequence;
this.pdbEntry=pdbEntry;
}, 1);

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'getPdbEntry$', function () {
return this.pdbEntry;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
