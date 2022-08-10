(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.ArrayList','jalview.datamodel.SequenceI','jalview.datamodel.PDBEntry','jalview.gui.structurechooser.StructureChooserQuerySource','jalview.gui.structurechooser.ThreeDBStructureChooserQuerySource','jalview.bin.Jalview','jalview.gui.ProgressBar','jalview.bin.Cache','java.util.concurrent.Executors','jalview.util.MessageManager','jalview.ws.DBRefFetcher','jalview.ws.seqfetcher.DbSourceProxy','jalview.ws.dbsources.Uniprot','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.gui.StructureViewer','java.util.LinkedHashSet','java.util.HashSet','StringBuilder',['jalview.gui.StructureChooser','.CachedPDB'],['jalview.gui.StructureChooser','.PDBEntryTableModel'],'Thread','jalview.fts.core.FTSRestResponse','jalview.jbgui.GStructureChooser','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','jalview.jbgui.FilterOption','javax.swing.JPopupMenu','javax.swing.JMenuItem','javax.swing.SwingUtilities','jalview.gui.JvSwingUtils','java.util.Locale',['jalview.datamodel.PDBEntry','.Type'],'jalview.gui.AssociatePdbFileWithSeq','jalview.io.DataSourceType','jalview.ws.sifts.SiftsSettings',['jalview.jbgui.GStructureChooser','.AssociateSeqOptions'],'jalview.fts.core.FTSRestRequest','jalview.fts.service.pdb.PDBFTSRestClient']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureChooser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.jbgui.GStructureChooser', 'jalview.gui.IProgressIndicator');
C$.$classes$=[['PDBEntryTableModel',1],['CachedPDB',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.canQueryTDB=false;
this.notQueriedTDBYet=true;
this.seqsWithoutSourceDBRef=null;
this.lastSelected=null;
this.sViewer=null;
this.PDB_ID_MIN=3;
},1);

C$.$fields$=[['Z',['isValidPBDEntry','cachedPDBExists','canQueryTDB','notQueriedTDBYet'],'I',['PDB_ID_MIN'],'S',['selectedPdbFileName'],'O',['selectedSequence','jalview.datamodel.SequenceI','selectedSequences','jalview.datamodel.SequenceI[]','progressIndicator','jalview.gui.IProgressIndicator','discoveredStructuresSet','java.util.Collection','data','jalview.gui.structurechooser.StructureChooserQuerySource','lastDiscoveredStructuresSet','java.util.Collection','seqsWithoutSourceDBRef','java.util.List','lastSelected','jalview.jbgui.FilterOption','sViewer','jalview.gui.StructureViewer','progressBar','jalview.gui.IProgressIndicator']]
,['O',['lastTargetedView','jalview.gui.StructureViewer']]]

Clazz.newMeth(C$, 'getFTSDocFieldPrefs$',  function () {
return this.data.getDocFieldPrefs$();
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceI$jalview_gui_AlignmentPanel',  function (selectedSeqs, selectedSeq, ap) {
Clazz.super_(C$, this);
this.data=$I$(4).getQuerySourceFor$jalview_datamodel_SequenceIA(selectedSeqs);
this.initDialog$();
this.ap=ap;
this.selectedSequence=selectedSeq;
this.selectedSequences=selectedSeqs;
this.progressIndicator=(ap == null ) ? null : ap.alignFrame;
this.init$();
}, 1);

Clazz.newMeth(C$, 'populateSeqsWithoutSourceDBRef',  function () {
this.seqsWithoutSourceDBRef=Clazz.new_($I$(1,1));
var needCanonical=false;
for (var seq, $seq = 0, $$seq = this.selectedSequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
if (seq.isProtein$()) {
var dbRef=$I$(5,"checkUniprotRefs$java_util_List",[seq.getDBRefs$()]);
if (dbRef < 0) {
if (dbRef == -1) {
needCanonical=true;
this.seqsWithoutSourceDBRef.add$O(seq);
} else {
if (seq.getAllPDBEntries$() == null  || seq.getAllPDBEntries$().size$() == 0 ) {
this.seqsWithoutSourceDBRef.add$O(seq);
}}}}}
if (!this.seqsWithoutSourceDBRef.isEmpty$()) {
this.canQueryTDB=true;
if (needCanonical) {
this.notQueriedTDBYet=true;
}}}, p$1);

Clazz.newMeth(C$, 'init$',  function () {
if (!$I$(6).isHeadlessMode$()) {
this.progressBar=Clazz.new_($I$(7,1).c$$javax_swing_JPanel$javax_swing_JLabel,[this.statusPanel, this.statusBar]);
}this.chk_superpose.setSelected$Z($I$(8).getDefault$S$Z("AUTOSUPERIMPOSE", true));
this.btn_queryTDB.addActionListener$java_awt_event_ActionListener(((P$.StructureChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.StructureChooser'].promptForTDBFetch$Z.apply(this.b$['jalview.gui.StructureChooser'], [false]);
});
})()
), Clazz.new_(P$.StructureChooser$1.$init$,[this, null])));
$I$(9).defaultThreadFactory$().newThread$Runnable(((P$.StructureChooser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
p$1.populateSeqsWithoutSourceDBRef.apply(this.b$['jalview.gui.StructureChooser'], []);
p$1.initialStructureDiscovery.apply(this.b$['jalview.gui.StructureChooser'], []);
});
})()
), Clazz.new_(P$.StructureChooser$2.$init$,[this, null]))).start$();
});

Clazz.newMeth(C$, 'initialStructureDiscovery',  function () {
this.data=$I$(4).getQuerySourceFor$jalview_datamodel_SequenceIA(this.selectedSequences);
this.populateFilterComboBox$Z$Z(true, this.cachedPDBExists);
var startTime=System.currentTimeMillis$();
this.updateProgressIndicator$S$J($I$(10).getString$S("status.loading_cached_pdb_entries"), startTime);
this.loadLocalCachedPDBEntries$();
this.updateProgressIndicator$S$J(null, startTime);
this.updateProgressIndicator$S$J($I$(10).getString$S("status.searching_for_pdb_structures"), startTime);
this.fetchStructuresMetaData$();
this.populateFilterComboBox$Z$Z(this.isStructuresDiscovered$(), this.cachedPDBExists);
p$1.discoverStructureViews.apply(this, []);
this.updateProgressIndicator$S$J(null, startTime);
this.mainFrame.setVisible$Z(true);
this.updateCurrentView$();
}, p$1);

Clazz.newMeth(C$, 'promptForTDBFetch$Z',  function (ignoreGui) {
var progressId=System.currentTimeMillis$();
var strucDiscovery=((P$.StructureChooser$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.StructureChooser'].mainFrame.setEnabled$Z(false);
this.b$['jalview.gui.StructureChooser'].cmb_filterOption.setEnabled$Z(false);
this.b$['jalview.gui.StructureChooser'].progressBar.setProgressBar$S$J($I$(10).getString$S("status.searching_3d_beacons"), this.$finals$.progressId);
p$1.populateSeqsWithoutSourceDBRef.apply(this.b$['jalview.gui.StructureChooser'], []);
this.b$['jalview.gui.StructureChooser'].previousWantedFields=null;
this.b$['jalview.gui.StructureChooser'].lastSelected=this.b$['jalview.gui.StructureChooser'].cmb_filterOption.getSelectedItem$();
this.b$['jalview.gui.StructureChooser'].cmb_filterOption.setSelectedItem$O(null);
this.b$['jalview.gui.StructureChooser'].cachedPDBExists=false;
p$1.initialStructureDiscovery.apply(this.b$['jalview.gui.StructureChooser'], []);
if (!this.b$['jalview.gui.StructureChooser'].isStructuresDiscovered$.apply(this.b$['jalview.gui.StructureChooser'], [])) {
this.b$['jalview.gui.StructureChooser'].progressBar.setProgressBar$S$J($I$(10).getString$S("status.no_structures_discovered_from_3d_beacons"), this.$finals$.progressId);
this.b$['jalview.gui.StructureChooser'].btn_queryTDB.setToolTipText$S($I$(10).getString$S("status.no_structures_discovered_from_3d_beacons"));
this.b$['jalview.gui.StructureChooser'].btn_queryTDB.setEnabled$Z(false);
} else {
this.b$['jalview.gui.StructureChooser'].cmb_filterOption.setSelectedIndex$I(0);
this.b$['jalview.gui.StructureChooser'].btn_queryTDB.setVisible$Z(false);
this.b$['jalview.gui.StructureChooser'].progressBar.setProgressBar$S$J(null, this.$finals$.progressId);
}this.b$['jalview.gui.StructureChooser'].mainFrame.setEnabled$Z(true);
this.b$['jalview.gui.StructureChooser'].cmb_filterOption.setEnabled$Z(true);
});
})()
), Clazz.new_(P$.StructureChooser$3.$init$,[this, {progressId:progressId}]));
var afterDbRefFetch=((P$.StructureChooser$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.ws.DBRefFetcher','jalview.ws.DBRefFetcher.FetchFinishedListenerI']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'finished$',  function () {
this.b$['jalview.gui.StructureChooser'].notQueriedTDBYet=false;
$I$(9).defaultThreadFactory$().newThread$Runnable(this.$finals$.strucDiscovery).start$();
});
})()
), Clazz.new_(P$.StructureChooser$4.$init$,[this, {strucDiscovery:strucDiscovery}]));
var discoverCanonicalDBrefs=((P$.StructureChooser$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
p$1.populateSeqsWithoutSourceDBRef.apply(this.b$['jalview.gui.StructureChooser'], []);
var y=this.b$['jalview.gui.StructureChooser'].seqsWithoutSourceDBRef.size$();
if (y > 0) {
var seqWithoutSrcDBRef=this.b$['jalview.gui.StructureChooser'].seqsWithoutSourceDBRef.toArray$OA(Clazz.array($I$(2), [y]));
var dbRefFetcher=Clazz.new_([seqWithoutSrcDBRef, this.b$['jalview.gui.StructureChooser'].progressBar, Clazz.array($I$(12), -1, [Clazz.new_($I$(13,1))]), null, false],$I$(11,1).c$$jalview_datamodel_SequenceIA$jalview_gui_IProgressIndicator$jalview_ws_seqfetcher_DbSourceProxyA$jalview_gui_FeatureSettings$Z);
dbRefFetcher.addListener$jalview_ws_DBRefFetcher_FetchFinishedListenerI(this.$finals$.afterDbRefFetch);
dbRefFetcher.fetchDBRefs$Z(true);
} else {
this.$finals$.afterDbRefFetch.finished$();
}});
})()
), Clazz.new_(P$.StructureChooser$5.$init$,[this, {afterDbRefFetch:afterDbRefFetch}]));
var revertview=((P$.StructureChooser$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.b$['jalview.gui.StructureChooser'].lastSelected != null ) {
this.b$['jalview.gui.StructureChooser'].cmb_filterOption.setSelectedItem$O(this.b$['jalview.gui.StructureChooser'].lastSelected);
}});
})()
), Clazz.new_(P$.StructureChooser$6.$init$,[this, null]));
if (ignoreGui) {
$I$(9).defaultThreadFactory$().newThread$Runnable(discoverCanonicalDBrefs).start$();
return;
}$I$(14).newOptionDialog$java_awt_Component(this).setResponseHandler$O$Runnable(Integer.valueOf$I(0), discoverCanonicalDBrefs).setResponseHandler$O$Runnable(Integer.valueOf$I(2), revertview).setResponseHandler$O$Runnable(Integer.valueOf$I(1), revertview).showDialog$S$S$I$I$javax_swing_Icon$OA$O($I$(10,"formatMessage$S$OA",["label.fetch_references_for_3dbeacons", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.seqsWithoutSourceDBRef.size$())])]), $I$(10).getString$S("label.3dbeacons"), 0, -1, null, Clazz.array(java.lang.Object, -1, [$I$(10).getString$S("action.ok"), $I$(10).getString$S("action.cancel")]), $I$(10).getString$S("action.ok"));
});

Clazz.newMeth(C$, 'discoverStructureViews',  function () {
if ($I$(15).instance != null ) {
this.targetView.removeAllItems$();
if (C$.lastTargetedView != null  && !C$.lastTargetedView.isVisible$() ) {
C$.lastTargetedView=null;
}var linkedViewsAt=0;
for (var view, $view = $I$(15).instance.getStructureViewers$jalview_gui_AlignmentPanel$Class(null, null).iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
var viewHandler=(C$.lastTargetedView != null  && C$.lastTargetedView.sview === view  ) ? C$.lastTargetedView : $I$(16).reconfigure$jalview_api_structures_JalviewStructureDisplayI(view);
if (view.isLinkedWith$jalview_gui_AlignmentPanel(this.ap)) {
this.targetView.insertItemAt$O$I(viewHandler, linkedViewsAt++);
} else {
this.targetView.addItem$O(viewHandler);
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

Clazz.newMeth(C$, 'updateProgressIndicator$S$J',  function (message, id) {
if (this.progressIndicator != null ) {
this.progressIndicator.setProgressBar$S$J(message, id);
}});

Clazz.newMeth(C$, 'fetchStructuresMetaData$',  function () {
var startTime=System.currentTimeMillis$();
var wantedFields=this.data.getDocFieldPrefs$().getStructureSummaryFields$();
this.discoveredStructuresSet=Clazz.new_($I$(17,1));
var errors=Clazz.new_($I$(18,1));
var selectedFilterOpt=(this.cmb_filterOption.getSelectedItem$());
for (var seq, $seq = 0, $$seq = this.selectedSequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var resultList;
try {
resultList=this.data.fetchStructuresMetaData$jalview_datamodel_SequenceI$java_util_Collection$jalview_jbgui_FilterOption$Z(seq, wantedFields, selectedFilterOpt, !this.chk_invertFilter.isSelected$());
if (resultList == null ) {
continue;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
errors.add$O(e.getMessage$());
continue;
} else {
throw e;
}
}
if (resultList.getSearchSummary$() != null  && !resultList.getSearchSummary$().isEmpty$() ) {
this.discoveredStructuresSet.addAll$java_util_Collection(resultList.getSearchSummary$());
}}
var noOfStructuresFound=0;
var totalTime=(Long.$s(Long.$sub(System.currentTimeMillis$(),startTime))) + " milli secs";
if (this.discoveredStructuresSet != null  && !this.discoveredStructuresSet.isEmpty$() ) {
this.getResultTable$().setModel$javax_swing_table_TableModel(this.data.getTableModel$java_util_Collection(this.discoveredStructuresSet));
noOfStructuresFound=this.discoveredStructuresSet.size$();
this.lastDiscoveredStructuresSet=this.discoveredStructuresSet;
this.mainFrame.setTitle$S($I$(10,"formatMessage$S$OA",["label.structure_chooser_no_of_structures", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(noOfStructuresFound), totalTime])]));
} else {
this.mainFrame.setTitle$S($I$(10).getString$S("label.structure_chooser_manual_association"));
if (errors.size$() > 0) {
var errorMsg=Clazz.new_($I$(19,1));
for (var error, $error = errors.iterator$(); $error.hasNext$()&&((error=($error.next$())),1);) {
errorMsg.append$S(error).append$S("\n");
}
$I$(14,"showMessageDialog$java_awt_Component$S$S$I",[this, errorMsg.toString(), $I$(10).getString$S("label.pdb_web-service_error"), 0]);
}}});

Clazz.newMeth(C$, 'loadLocalCachedPDBEntries$',  function () {
var entries=Clazz.new_($I$(1,1));
for (var seq, $seq = 0, $$seq = this.selectedSequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
if (seq.getDatasetSequence$() != null  && seq.getDatasetSequence$().getAllPDBEntries$() != null  ) {
for (var pdbEntry, $pdbEntry = seq.getDatasetSequence$().getAllPDBEntries$().iterator$(); $pdbEntry.hasNext$()&&((pdbEntry=($pdbEntry.next$())),1);) {
if (pdbEntry.getFile$() != null ) {
entries.add$O(Clazz.new_($I$(20,1).c$$jalview_datamodel_SequenceI$jalview_datamodel_PDBEntry,[this, null, seq, pdbEntry]));
}}
}}
this.cachedPDBExists=!entries.isEmpty$();
var tableModelx=Clazz.new_($I$(21,1).c$$java_util_List,[this, null, entries]);
this.tbl_local_pdb.setModel$javax_swing_table_TableModel(tableModelx);
});

Clazz.newMeth(C$, 'filterResultSet$S',  function (fieldToFilterBy) {
var filterThread=Clazz.new_([((P$.StructureChooser$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var startTime=System.currentTimeMillis$();
this.b$['jalview.gui.StructureChooser'].lbl_loading.setVisible$Z(true);
var wantedFields=this.b$['jalview.gui.StructureChooser'].data.getDocFieldPrefs$().getStructureSummaryFields$();
var filteredResponse=Clazz.new_($I$(18,1));
var errors=Clazz.new_($I$(18,1));
for (var seq, $seq = 0, $$seq = this.b$['jalview.gui.StructureChooser'].selectedSequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var resultList;
try {
resultList=this.b$['jalview.gui.StructureChooser'].data.selectFirstRankedQuery$jalview_datamodel_SequenceI$java_util_Collection$java_util_Collection$S$Z(seq, this.b$['jalview.gui.StructureChooser'].discoveredStructuresSet, wantedFields, this.$finals$.fieldToFilterBy, !this.b$['jalview.gui.StructureChooser'].chk_invertFilter.isSelected$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
errors.add$O(e.getMessage$());
continue;
} else {
throw e;
}
}
if (resultList.getSearchSummary$() != null  && !resultList.getSearchSummary$().isEmpty$() ) {
filteredResponse.addAll$java_util_Collection(resultList.getSearchSummary$());
}}
var totalTime=(Long.$s(Long.$sub(System.currentTimeMillis$(),startTime))) + " milli secs";
if (!filteredResponse.isEmpty$()) {
var filterResponseCount=filteredResponse.size$();
var reorderedStructuresSet=Clazz.new_($I$(17,1));
reorderedStructuresSet.addAll$java_util_Collection(filteredResponse);
reorderedStructuresSet.addAll$java_util_Collection(this.b$['jalview.gui.StructureChooser'].discoveredStructuresSet);
this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []).setModel$javax_swing_table_TableModel(this.b$['jalview.gui.StructureChooser'].data.getTableModel$java_util_Collection(reorderedStructuresSet));
$I$(23,"configureTableColumn$javax_swing_JTable$java_util_Collection$java_util_Map",[this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []), wantedFields, $I$(24).tempUserPrefs]);
this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []).getColumn$O("Ref Sequence").setPreferredWidth$I(120);
this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []).getColumn$O("Ref Sequence").setMinWidth$I(100);
this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []).getColumn$O("Ref Sequence").setMaxWidth$I(200);
this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []).addRowSelectionInterval$I$I(0, filterResponseCount - 1);
this.b$['jalview.gui.StructureChooser'].mainFrame.setTitle$S($I$(10,"formatMessage$S$OA",["label.structure_chooser_filter_time", Clazz.array(java.lang.Object, -1, [totalTime])]));
} else {
this.b$['jalview.gui.StructureChooser'].mainFrame.setTitle$S($I$(10,"formatMessage$S$OA",["label.structure_chooser_filter_time", Clazz.array(java.lang.Object, -1, [totalTime])]));
if (errors.size$() > 0) {
var errorMsg=Clazz.new_($I$(19,1));
for (var error, $error = errors.iterator$(); $error.hasNext$()&&((error=($error.next$())),1);) {
errorMsg.append$S(error).append$S("\n");
}
$I$(14,"showMessageDialog$java_awt_Component$S$S$I",[null, errorMsg.toString(), $I$(10).getString$S("label.pdb_web-service_error"), 0]);
}}this.b$['jalview.gui.StructureChooser'].lbl_loading.setVisible$Z(false);
this.b$['jalview.gui.StructureChooser'].validateSelections$.apply(this.b$['jalview.gui.StructureChooser'], []);
});
})()
), Clazz.new_(P$.StructureChooser$7.$init$,[this, {fieldToFilterBy:fieldToFilterBy}]))],$I$(22,1).c$$Runnable);
filterThread.start$();
});

Clazz.newMeth(C$, 'pdbFromFile_actionPerformed$',  function () {
var chooser=Clazz.new_([$I$(8).getProperty$S("LAST_DIRECTORY")],$I$(25,1).c$$S);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(26,1)));
chooser.setDialogTitle$S($I$(10,"formatMessage$S$OA",["label.select_pdb_file_for", Clazz.array(java.lang.Object, -1, [this.selectedSequence.getDisplayId$Z(false)])]));
chooser.setToolTipText$S($I$(10,"formatMessage$S$OA",["label.load_pdb_file_associate_with_sequence", Clazz.array(java.lang.Object, -1, [this.selectedSequence.getDisplayId$Z(false)])]));
var value=chooser.showOpenDialog$java_awt_Component(null);
if (value == 0) {
this.selectedPdbFileName=chooser.getSelectedFile$().getPath$();
$I$(8).setProperty$S$S("LAST_DIRECTORY", this.selectedPdbFileName);
this.validateSelections$();
}});

Clazz.newMeth(C$, 'populateFilterComboBox$Z$Z',  function (haveData, cachedPDBExist) {
this.populateFilterComboBox$Z$Z$jalview_jbgui_FilterOption(haveData, cachedPDBExist, null);
});

Clazz.newMeth(C$, 'populateFilterComboBox$Z$Z$jalview_jbgui_FilterOption',  function (haveData, cachedPDBExist, lastSel) {
this.cmb_filterOption.removeItemListener$java_awt_event_ItemListener(this);
var selSet=-1;
this.cmb_filterOption.removeAllItems$();
if (haveData) {
var filters=this.data.getAvailableFilterOptions$S("VIEWS_FILTER");
this.data.updateAvailableFilterOptions$S$java_util_List$java_util_Collection("VIEWS_FILTER", filters, this.lastDiscoveredStructuresSet);
var p=0;
for (var filter, $filter = filters.iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
if (lastSel != null  && filter.equals$O(lastSel) ) {
selSet=p;
}++p;
this.cmb_filterOption.addItem$O(filter);
}
}this.cmb_filterOption.addItem$O(Clazz.new_([$I$(10).getString$S("label.enter_pdb_id"), "-", "VIEWS_ENTER_ID", false, null],$I$(27,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
this.cmb_filterOption.addItem$O(Clazz.new_([$I$(10).getString$S("label.from_file"), "-", "VIEWS_FROM_FILE", false, null],$I$(27,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource));
if (this.canQueryTDB && this.notQueriedTDBYet ) {
this.btn_queryTDB.setVisible$Z(true);
}if (cachedPDBExist) {
var cachedOption=Clazz.new_([$I$(10).getString$S("label.cached_structures"), "-", "VIEWS_LOCAL_PDB", false, null],$I$(27,1).c$$S$S$S$Z$jalview_gui_structurechooser_StructureChooserQuerySource);
this.cmb_filterOption.addItem$O(cachedOption);
if (selSet == -1) {
this.cmb_filterOption.setSelectedItem$O(cachedOption);
}}if (selSet > -1) {
this.cmb_filterOption.setSelectedIndex$I(selSet);
}this.cmb_filterOption.addItemListener$java_awt_event_ItemListener(this);
});

Clazz.newMeth(C$, 'updateCurrentView$',  function () {
var selectedFilterOpt=(this.cmb_filterOption.getSelectedItem$());
if (this.lastSelected === selectedFilterOpt ) {
return;
}this.lastSelected=selectedFilterOpt;
this.layout_switchableViews.show$java_awt_Container$S(this.pnl_switchableViews, selectedFilterOpt.getView$());
var filterTitle=this.mainFrame.getTitle$();
this.mainFrame.setTitle$S(this.frameTitle);
this.chk_invertFilter.setVisible$Z(false);
if (selectedFilterOpt.getView$() == "VIEWS_FILTER") {
this.mainFrame.setTitle$S(filterTitle);
this.chk_invertFilter.setVisible$Z(Clazz.instanceOf(selectedFilterOpt.getQuerySource$(), "jalview.gui.structurechooser.PDBStructureChooserQuerySource"));
if (this.data !== selectedFilterOpt.getQuerySource$()  || this.data.needsRefetch$jalview_jbgui_FilterOption(selectedFilterOpt) ) {
this.data=selectedFilterOpt.getQuerySource$();
this.tabRefresh$();
return;
} else {
this.filterResultSet$S(selectedFilterOpt.getValue$());
}} else if (selectedFilterOpt.getView$() == "VIEWS_ENTER_ID" || selectedFilterOpt.getView$() == "VIEWS_FROM_FILE" ) {
this.mainFrame.setTitle$S($I$(10).getString$S("label.structure_chooser_manual_association"));
this.idInputAssSeqPanel.loadCmbAssSeq$();
this.fileChooserAssSeqPanel.loadCmbAssSeq$();
}this.validateSelections$();
});

Clazz.newMeth(C$, 'validateSelections$',  function () {
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

Clazz.newMeth(C$, 'showPopupFor$I$I$I',  function (selectedRow, x, y) {
var selectedFilterOpt=(this.cmb_filterOption.getSelectedItem$());
var currentView=selectedFilterOpt.getView$();
if (currentView == "VIEWS_FILTER" && Clazz.instanceOf(this.data, "jalview.gui.structurechooser.ThreeDBStructureChooserQuerySource") ) {
var row=(this.data).getFTSDataFor$javax_swing_JTable$I$java_util_Collection(this.getResultTable$(), selectedRow, this.discoveredStructuresSet);
var pageUrl=row.getModelViewUrl$();
var popup=Clazz.new_($I$(28,1).c$$S,["3D Beacons"]);
var viewUrl=Clazz.new_($I$(29,1).c$$S,["View model web page"]);
viewUrl.addActionListener$java_awt_event_ActionListener(((P$.StructureChooser$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(15).showUrl$S(this.$finals$.pageUrl);
});
})()
), Clazz.new_(P$.StructureChooser$8.$init$,[this, {pageUrl:pageUrl}])));
popup.add$javax_swing_JMenuItem(viewUrl);
$I$(30,"invokeLater$Runnable",[((P$.StructureChooser$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.popup.show$java_awt_Component$I$I(this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []), this.$finals$.x, this.$finals$.y);
});
})()
), Clazz.new_(P$.StructureChooser$9.$init$,[this, {popup:popup,x:x,y:y}]))]);
return true;
}return false;
});

Clazz.newMeth(C$, 'validateAssociationEnterPdb$',  function () {
var assSeqOpt=this.idInputAssSeqPanel.getCmb_assSeq$().getSelectedItem$();
this.lbl_pdbManualFetchStatus.setIcon$javax_swing_Icon(this.errorImage);
this.lbl_pdbManualFetchStatus.setToolTipText$S("");
if (this.txt_search.getText$().length$() > 0) {
this.lbl_pdbManualFetchStatus.setToolTipText$S($I$(31,"wrapTooltip$Z$S",[true, $I$(10,"formatMessage$S$OA",["info.no_pdb_entry_found_for", Clazz.array(java.lang.Object, -1, [this.txt_search.getText$()])])]));
}if (this.errorWarning.length$() > 0) {
this.lbl_pdbManualFetchStatus.setIcon$javax_swing_Icon(this.warningImage);
this.lbl_pdbManualFetchStatus.setToolTipText$S($I$(31,"wrapTooltip$Z$S",[true, this.errorWarning.toString()]));
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

Clazz.newMeth(C$, 'validateAssociationFromFile$',  function () {
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

Clazz.newMeth(C$, 'cmbAssSeqStateChanged$',  function () {
this.validateSelections$();
});

Clazz.newMeth(C$, 'stateChanged$java_awt_event_ItemEvent',  function (e) {
if (Clazz.instanceOf(e.getSource$(), "javax.swing.JCheckBox")) {
this.updateCurrentView$();
} else {
if (e.getStateChange$() == 1) {
this.updateCurrentView$();
}}});

Clazz.newMeth(C$, 'selectStructure$SA',  function (pdbids) {
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

Clazz.newMeth(C$, 'newView_ActionPerformed$',  function () {
this.targetView.setSelectedItem$O(null);
this.showStructures$Z(false);
});

Clazz.newMeth(C$, 'add_ActionPerformed$',  function () {
this.showStructures$Z(false);
});

Clazz.newMeth(C$, 'showStructures$Z',  function (waitUntilFinished) {
var ssm=this.ap.getStructureSelectionManager$();
var preferredHeight=this.pnl_filter.getHeight$();
var viewStruc=((P$.StructureChooser$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var selectedFilterOpt=(this.b$['jalview.gui.StructureChooser'].cmb_filterOption.getSelectedItem$());
var currentView=selectedFilterOpt.getView$();
var restable=(currentView == "VIEWS_FILTER") ? this.b$['jalview.jbgui.GStructureChooser'].getResultTable$.apply(this.b$['jalview.jbgui.GStructureChooser'], []) : this.b$['jalview.gui.StructureChooser'].tbl_local_pdb;
if (currentView == "VIEWS_FILTER") {
var selectedRows=restable.getSelectedRows$();
var pdbEntriesToView=Clazz.array($I$(3), [selectedRows.length]);
var selectedSeqsToView=Clazz.new_($I$(1,1));
pdbEntriesToView=this.b$['jalview.gui.StructureChooser'].data.collectSelectedRows$javax_swing_JTable$IA$java_util_List(restable, selectedRows, selectedSeqsToView);
var selectedSeqs=selectedSeqsToView.toArray$OA(Clazz.array($I$(2), [selectedSeqsToView.size$()]));
this.b$['jalview.gui.StructureChooser'].sViewer=p$1.launchStructureViewer$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceIA.apply(this.b$['jalview.gui.StructureChooser'], [this.$finals$.ssm, pdbEntriesToView, this.b$['jalview.gui.StructureChooser'].ap, selectedSeqs]);
} else if (currentView == "VIEWS_LOCAL_PDB") {
var selectedRows=this.b$['jalview.gui.StructureChooser'].tbl_local_pdb.getSelectedRows$();
var pdbEntriesToView=Clazz.array($I$(3), [selectedRows.length]);
var count=0;
var pdbIdColIndex=this.b$['jalview.gui.StructureChooser'].tbl_local_pdb.getColumn$O("PDB Id").getModelIndex$();
var refSeqColIndex=this.b$['jalview.gui.StructureChooser'].tbl_local_pdb.getColumn$O("Ref Sequence").getModelIndex$();
var selectedSeqsToView=Clazz.new_($I$(1,1));
for (var row, $row = 0, $$row = selectedRows; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
var pdbEntry=(this.b$['jalview.gui.StructureChooser'].tbl_local_pdb.getModel$()).getPDBEntryAt$I(row).getPdbEntry$();
pdbEntriesToView[count++]=pdbEntry;
var selectedSeq=this.b$['jalview.gui.StructureChooser'].tbl_local_pdb.getValueAt$I$I(row, refSeqColIndex);
selectedSeqsToView.add$O(selectedSeq);
}
var selectedSeqs=selectedSeqsToView.toArray$OA(Clazz.array($I$(2), [selectedSeqsToView.size$()]));
this.b$['jalview.gui.StructureChooser'].sViewer=p$1.launchStructureViewer$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceIA.apply(this.b$['jalview.gui.StructureChooser'], [this.$finals$.ssm, pdbEntriesToView, this.b$['jalview.gui.StructureChooser'].ap, selectedSeqs]);
} else if (currentView == "VIEWS_ENTER_ID") {
var userSelectedSeq=(this.b$['jalview.gui.StructureChooser'].idInputAssSeqPanel.getCmb_assSeq$().getSelectedItem$()).getSequence$();
if (userSelectedSeq != null ) {
this.b$['jalview.gui.StructureChooser'].selectedSequence=userSelectedSeq;
}var pdbIdStr=this.b$['jalview.gui.StructureChooser'].txt_search.getText$();
var pdbEntry=this.b$['jalview.gui.StructureChooser'].selectedSequence.getPDBEntry$S(pdbIdStr);
if (pdbEntry == null ) {
pdbEntry=Clazz.new_($I$(3,1));
if (pdbIdStr.split$S(":").length > 1) {
pdbEntry.setId$S(pdbIdStr.split$S(":")[0]);
pdbEntry.setChainCode$S(pdbIdStr.split$S(":")[1].toUpperCase$java_util_Locale($I$(32).ROOT));
} else {
pdbEntry.setId$S(pdbIdStr);
}pdbEntry.setType$jalview_datamodel_PDBEntry_Type($I$(33).PDB);
this.b$['jalview.gui.StructureChooser'].selectedSequence.getDatasetSequence$().addPDBId$jalview_datamodel_PDBEntry(pdbEntry);
}var pdbEntriesToView=Clazz.array($I$(3), -1, [pdbEntry]);
this.b$['jalview.gui.StructureChooser'].sViewer=p$1.launchStructureViewer$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceIA.apply(this.b$['jalview.gui.StructureChooser'], [this.$finals$.ssm, pdbEntriesToView, this.b$['jalview.gui.StructureChooser'].ap, Clazz.array($I$(2), -1, [this.b$['jalview.gui.StructureChooser'].selectedSequence])]);
} else if (currentView == "VIEWS_FROM_FILE") {
var userSelectedSeq=(this.b$['jalview.gui.StructureChooser'].fileChooserAssSeqPanel.getCmb_assSeq$().getSelectedItem$()).getSequence$();
if (userSelectedSeq != null ) {
this.b$['jalview.gui.StructureChooser'].selectedSequence=userSelectedSeq;
}var fileEntry=Clazz.new_($I$(34,1)).associatePdbWithSeq$S$jalview_io_DataSourceType$jalview_datamodel_SequenceI$Z$jalview_api_StructureSelectionManagerProvider(this.b$['jalview.gui.StructureChooser'].selectedPdbFileName, $I$(35).FILE, this.b$['jalview.gui.StructureChooser'].selectedSequence, true, $I$(15).instance);
this.b$['jalview.gui.StructureChooser'].sViewer=p$1.launchStructureViewer$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceIA.apply(this.b$['jalview.gui.StructureChooser'], [this.$finals$.ssm, Clazz.array($I$(3), -1, [fileEntry]), this.b$['jalview.gui.StructureChooser'].ap, Clazz.array($I$(2), -1, [this.b$['jalview.gui.StructureChooser'].selectedSequence])]);
}$I$(30,"invokeLater$Runnable",[((P$.StructureChooser$10$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$10$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.jbgui.GStructureChooser'].closeAction$I.apply(this.b$['jalview.jbgui.GStructureChooser'], [this.$finals$.preferredHeight]);
this.b$['jalview.gui.StructureChooser'].mainFrame.dispose$();
});
})()
), Clazz.new_(P$.StructureChooser$10$1.$init$,[this, {preferredHeight:this.$finals$.preferredHeight}]))]);
});
})()
), Clazz.new_(P$.StructureChooser$10.$init$,[this, {ssm:ssm,preferredHeight:preferredHeight}]));
var runner=Clazz.new_($I$(22,1).c$$Runnable,[viewStruc]);
runner.start$();
if (waitUntilFinished) {
while (this.sViewer == null  ? runner.isAlive$() : (this.sViewer.sview == null  ? true : !this.sViewer.sview.hasMapping$())){
try {
$I$(22).sleep$J(300);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
} else {
throw ie;
}
}
}
}});

Clazz.newMeth(C$, 'getTargetedStructureViewer$jalview_structure_StructureSelectionManager',  function (ssm) {
var sv=this.targetView.getSelectedItem$();
return sv == null  ? Clazz.new_($I$(16,1).c$$jalview_structure_StructureSelectionManager,[ssm]) : sv;
});

Clazz.newMeth(C$, 'launchStructureViewer$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceIA',  function (ssm, pdbEntriesToView, alignPanel, sequences) {
var progressId=sequences.hashCode$();
this.setProgressBar$S$J($I$(10).getString$S("status.launching_3d_structure_viewer"), progressId);
var theViewer=this.getTargetedStructureViewer$jalview_structure_StructureSelectionManager(ssm);
var superimpose=this.chk_superpose.isSelected$();
theViewer.setSuperpose$Z(superimpose);
$I$(8,"setProperty$S$S",["AUTOSUPERIMPOSE", Boolean.valueOf$Z(superimpose).toString()]);
this.setProgressBar$S$J(null, progressId);
if ($I$(36).isMapWithSifts$()) {
var seqsWithoutSourceDBRef=Clazz.new_($I$(1,1));
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
seqsWithoutSourceDBRef.add$O(seq);
continue;
}}
if (!seqsWithoutSourceDBRef.isEmpty$()) {
var y=seqsWithoutSourceDBRef.size$();
this.setProgressBar$S$J($I$(10,"formatMessage$S$OA",["status.fetching_dbrefs_for_sequences_without_valid_refs", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(y)])]), progressId);
var seqWithoutSrcDBRef=seqsWithoutSourceDBRef.toArray$OA(Clazz.array($I$(2), [y]));
var dbRefFetcher=Clazz.new_($I$(11,1).c$$jalview_datamodel_SequenceIA,[seqWithoutSrcDBRef]);
dbRefFetcher.fetchDBRefs$Z(true);
this.setProgressBar$S$J("Fetch complete.", progressId);
}}if (pdbEntriesToView.length > 1) {
this.setProgressBar$S$J($I$(10).getString$S("status.fetching_3d_structures_for_selected_entries"), progressId);
theViewer.viewStructures$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIA$jalview_gui_AlignmentPanel(pdbEntriesToView, sequences, alignPanel);
} else {
this.setProgressBar$S$J($I$(10,"formatMessage$S$OA",["status.fetching_3d_structures_for", Clazz.array(java.lang.Object, -1, [pdbEntriesToView[0].getId$()])]), progressId);
theViewer.viewStructures$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$jalview_gui_AlignmentPanel(pdbEntriesToView[0], sequences, alignPanel);
}this.setProgressBar$S$J(null, progressId);
C$.lastTargetedView=theViewer;
return theViewer;
}, p$1);

Clazz.newMeth(C$, 'populateCmbAssociateSeqOptions$javax_swing_JComboBox$javax_swing_JLabel',  function (cmb_assSeq, lbl_associateSeq) {
cmb_assSeq.removeAllItems$();
cmb_assSeq.addItem$O(Clazz.new_($I$(37,1).c$$S$jalview_datamodel_SequenceI,[this, null, "-Select Associated Seq-", null]));
lbl_associateSeq.setVisible$Z(false);
if (this.selectedSequences.length > 1) {
for (var seq, $seq = 0, $$seq = this.selectedSequences; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
cmb_assSeq.addItem$O(Clazz.new_($I$(37,1).c$$jalview_datamodel_SequenceI,[this, null, seq]));
}
} else {
var seqName=this.selectedSequence.getDisplayId$Z(false);
seqName=seqName.length$() <= 40 ? seqName : seqName.substring$I$I(0, 39);
lbl_associateSeq.setText$S(seqName);
lbl_associateSeq.setVisible$Z(true);
cmb_assSeq.setVisible$Z(false);
}});

Clazz.newMeth(C$, 'isStructuresDiscovered$',  function () {
return this.discoveredStructuresSet != null  && !this.discoveredStructuresSet.isEmpty$() ;
});

Clazz.newMeth(C$, 'txt_search_ActionPerformed$',  function () {
var text=this.txt_search.getText$().trim$();
if (text.length$() >= this.PDB_ID_MIN) ((P$.StructureChooser$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.StructureChooser'].errorWarning.setLength$I(0);
this.b$['jalview.gui.StructureChooser'].isValidPBDEntry=false;
if (this.$finals$.text.length$() > 0) {
var searchTerm=this.$finals$.text.toLowerCase$java_util_Locale($I$(32).ROOT);
searchTerm=searchTerm.split$S(":")[0];
var wantedFields=Clazz.new_($I$(1,1));
var pdbRequest=Clazz.new_($I$(38,1));
pdbRequest.setAllowEmptySeq$Z(false);
pdbRequest.setResponseSize$I(1);
pdbRequest.setFieldToSearchBy$S("(pdb_id:");
pdbRequest.setWantedFields$java_util_Collection(wantedFields);
pdbRequest.setSearchTerm$S(searchTerm + ")");
pdbRequest.setAssociatedSequence$jalview_datamodel_SequenceI(this.b$['jalview.gui.StructureChooser'].selectedSequence);
var pdbRestClient=$I$(39).getInstance$();
wantedFields.add$O(pdbRestClient.getPrimaryKeyColumn$());
var resultList;
try {
resultList=pdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(pdbRequest);
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
), Clazz.new_($I$(22,1),[this, {text:text}],P$.StructureChooser$11)).start$();
});

Clazz.newMeth(C$, 'tabRefresh$',  function () {
if (this.selectedSequences != null ) {
var refreshThread=Clazz.new_([((P$.StructureChooser$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureChooser$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.StructureChooser'].fetchStructuresMetaData$.apply(this.b$['jalview.gui.StructureChooser'], []);
this.b$['jalview.gui.StructureChooser'].filterResultSet$S.apply(this.b$['jalview.gui.StructureChooser'], [(this.b$['jalview.gui.StructureChooser'].cmb_filterOption.getSelectedItem$()).getValue$()]);
});
})()
), Clazz.new_(P$.StructureChooser$12.$init$,[this, null]))],$I$(22,1).c$$Runnable);
refreshThread.start$();
}});

Clazz.newMeth(C$, 'setProgressBar$S$J',  function (message, id) {
this.progressBar.setProgressBar$S$J(message, id);
});

Clazz.newMeth(C$, 'registerHandler$J$jalview_gui_IProgressIndicatorHandler',  function (id, handler) {
this.progressBar.registerHandler$J$jalview_gui_IProgressIndicatorHandler(id, handler);
});

Clazz.newMeth(C$, 'operationInProgress$',  function () {
return this.progressBar.operationInProgress$();
});

Clazz.newMeth(C$, 'getOpenedStructureViewer$',  function () {
return this.sViewer == null  ? null : this.sViewer.sview;
});

Clazz.newMeth(C$, 'setFTSDocFieldPrefs$jalview_fts_core_FTSDataColumnPreferences',  function (newPrefs) {
this.data.setDocFieldPrefs$jalview_fts_core_FTSDataColumnPreferences(newPrefs);
});

Clazz.newMeth(C$, 'isDialogVisible$',  function () {
return this.mainFrame != null  && this.data != null   && this.cmb_filterOption != null   && this.mainFrame.isVisible$()  && this.cmb_filterOption.getSelectedItem$() != null  ;
});

Clazz.newMeth(C$, 'isCanQueryTDB$',  function () {
return this.canQueryTDB;
});

Clazz.newMeth(C$, 'isNotQueriedTDBYet$',  function () {
return this.notQueriedTDBYet;
});

C$.$static$=function(){C$.$static$=0;
C$.lastTargetedView=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.StructureChooser, "PDBEntryTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.columns=Clazz.array(String, -1, ["Ref Sequence", "PDB Id", "Chain", "Type", "File"]);
},1);

C$.$fields$=[['O',['columns','String[]','pdbEntries','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_util_List',  function (pdbEntries) {
Clazz.super_(C$, this);
this.pdbEntries=Clazz.new_($I$(1,1).c$$java_util_Collection,[pdbEntries]);
}, 1);

Clazz.newMeth(C$, 'getColumnName$I',  function (columnIndex) {
return this.columns[columnIndex];
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.pdbEntries.size$();
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.columns.length;
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, column) {
return false;
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (rowIndex, columnIndex) {
var value="??";
var entry=this.pdbEntries.get$I(rowIndex);
switch (columnIndex) {
case 0:
value=entry.getSequence$();
break;
case 1:
value=entry.getQualifiedId$();
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

Clazz.newMeth(C$, 'getColumnClass$I',  function (columnIndex) {
return columnIndex == 0 ? Clazz.getClass($I$(2),['addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation','addDBRef$jalview_datamodel_DBRefEntry','addPDBId$jalview_datamodel_PDBEntry','addSequenceFeature$jalview_datamodel_SequenceFeature','createDatasetSequence$','deleteChars$I$I','deleteFeature$jalview_datamodel_SequenceFeature','deriveSequence$','findFeatures$I$I$SA','findIndex$I','findPosition$I','findPositionMap$','findPositions$I$I','firstResidueOutsideIterator$java_util_Iterator','gapBitset$','gapMap$','getAlignmentAnnotations$S$S','getAlignmentAnnotations$S$S$S','getAllPDBEntries$','getAnnotation$','getAnnotation$S','getCharAt$I','getDBRefs$','getDatasetSequence$','getDescription$','getDisplayId$Z','getEnd$','getFeatures$','getGeneLoci$','getInsertions$','getInsertionsAsBits$','getLength$','getName$','getPDBEntry$S','getPrimaryDBRefs$','getRNA$','getSequence$','getSequence$I$I','getSequenceAsString$','getSequenceAsString$I$I','getSequenceFeatures$','getSequenceStringFromIterator$java_util_Iterator','getStart$','getSubSequence$I$I','getVamsasId$','hasAnnotation$jalview_datamodel_AlignmentAnnotation','insertCharAt$I$C','insertCharAt$I$I$C','isProtein$','removeAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation','replace$C$C','sequenceChanged$','setAlignmentAnnotation$jalview_datamodel_AlignmentAnnotationA','setDBRefs$jalview_datamodel_Sequence_DBModList','setDatasetSequence$jalview_datamodel_SequenceI','setDescription$S','setEnd$I','setGeneLoci$S$S$S$jalview_util_MapList','setName$S','setPDBId$java_util_Vector','setRNA$fr_orsay_lri_varna_models_rna_RNA','setSequence$S','setSequenceFeatures$java_util_List','setStart$I','setVamsasId$S','transferAnnotation$jalview_datamodel_SequenceI$jalview_datamodel_Mapping','updatePDBIds$']) : Clazz.getClass($I$(3));
});

Clazz.newMeth(C$, 'getPDBEntryAt$I',  function (row) {
return this.pdbEntries.get$I(row);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StructureChooser, "CachedPDB", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sequence','jalview.datamodel.SequenceI','pdbEntry','jalview.datamodel.PDBEntry']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$jalview_datamodel_PDBEntry',  function (sequence, pdbEntry) {
;C$.$init$.apply(this);
this.sequence=sequence;
this.pdbEntry=pdbEntry;
}, 1);

Clazz.newMeth(C$, 'getQualifiedId$',  function () {
if (this.pdbEntry.hasProvider$()) {
return this.pdbEntry.getProvider$() + ":" + this.pdbEntry.getId$() ;
}return this.pdbEntry.toString();
});

Clazz.newMeth(C$, 'getSequence$',  function () {
return this.sequence;
});

Clazz.newMeth(C$, 'getPdbEntry$',  function () {
return this.pdbEntry;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
