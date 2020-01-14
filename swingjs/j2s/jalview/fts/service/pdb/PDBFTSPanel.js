(function(){var P$=Clazz.newPackage("jalview.fts.service.pdb"),I$=[[0,'jalview.util.MessageManager','java.util.HashMap','jalview.fts.service.pdb.PDBFTSRestClient','jalview.fts.core.FTSRestRequest','jalview.fts.core.FTSRestResponse','jalview.fts.service.pdb.PDBFTSPanel','jalview.fts.core.GFTSPanel','Thread','StringBuilder','java.util.HashSet','jalview.gui.Help',['jalview.gui.Help','.HelpId']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDBFTSPanel", null, 'jalview.fts.core.GFTSPanel');
C$.defaultFTSFrameTitle=null;
C$.tempUserPrefs=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.defaultFTSFrameTitle=$I$(1).getString$S("label.pdb_sequence_fetcher");
C$.tempUserPrefs=Clazz.new_($I$(2));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_SequenceFetcher', function (fetcher) {
C$.superclazz.c$$jalview_gui_SequenceFetcher.apply(this, [fetcher]);
C$.$init$.apply(this);
this.pageLimit=$I$(3).getInstance$().getDefaultResponsePageSize$();
this.seqFetcher=fetcher;
this.progressIndicator=(fetcher == null ) ? null : fetcher.getProgressIndicator$();
}, 1);

Clazz.newMeth(C$, 'searchAction$Z', function (isFreshSearch) {
this.mainFrame.requestFocusInWindow$();
if (isFreshSearch) {
this.offSet=0;
}((P$.PDBFTSPanel$1||
(function(){var C$=Clazz.newClass(P$, "PDBFTSPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.fts.core.GFTSPanel'].reset$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
var allowEmptySequence=false;
if (this.b$['jalview.fts.core.GFTSPanel'].getTypedText$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).length$() > 0) {
this.b$['jalview.fts.core.GFTSPanel'].setSearchInProgress$Boolean.apply(this.b$['jalview.fts.core.GFTSPanel'], [new Boolean(true)]);
var startTime=System.currentTimeMillis$();
var searchTarget=(this.b$['jalview.fts.service.pdb.PDBFTSPanel'].cmb_searchTarget.getSelectedItem$()).getCode$();
this.b$['jalview.fts.service.pdb.PDBFTSPanel'].wantedFields=$I$(3).getInstance$().getAllDefaultDisplayedFTSDataColumns$();
var searchTerm=P$.PDBFTSPanel.decodeSearchTerm$S$S(this.b$['jalview.fts.core.GFTSPanel'].getTypedText$.apply(this.b$['jalview.fts.core.GFTSPanel'], []), searchTarget);
var request=Clazz.new_($I$(4));
request.setAllowEmptySeq$Z(allowEmptySequence);
request.setResponseSize$I(100);
request.setFieldToSearchBy$S("(" + searchTarget + ":" );
request.setSearchTerm$S(searchTerm + ")");
request.setOffSet$I(this.b$['jalview.fts.service.pdb.PDBFTSPanel'].offSet);
request.setWantedFields$java_util_Collection(this.b$['jalview.fts.service.pdb.PDBFTSPanel'].wantedFields);
var pdbRestClient=$I$(3).getInstance$();
var resultList;
try {
resultList=pdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(request);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.b$['jalview.fts.core.GFTSPanel'].setErrorMessage$S.apply(this.b$['jalview.fts.core.GFTSPanel'], [e.getMessage$()]);
this.b$['jalview.fts.core.GFTSPanel'].checkForErrors$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
this.b$['jalview.fts.core.GFTSPanel'].setSearchInProgress$Boolean.apply(this.b$['jalview.fts.core.GFTSPanel'], [new Boolean(false)]);
return;
} else {
throw e;
}
}
if (resultList.getSearchSummary$() != null  && resultList.getSearchSummary$().size$() > 0 ) {
this.b$['jalview.fts.core.GFTSPanel'].getResultTable$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).setModel$javax_swing_table_TableModel($I$(5).getTableModel$jalview_fts_core_FTSRestRequest$java_util_Collection(request, resultList.getSearchSummary$()));
$I$(5).configureTableColumn$javax_swing_JTable$java_util_Collection$java_util_Map(this.b$['jalview.fts.core.GFTSPanel'].getResultTable$.apply(this.b$['jalview.fts.core.GFTSPanel'], []), this.b$['jalview.fts.service.pdb.PDBFTSPanel'].wantedFields, $I$(6).tempUserPrefs);
this.b$['jalview.fts.core.GFTSPanel'].getResultTable$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).setVisible$Z(true);
}var endTime=System.currentTimeMillis$();
this.b$['jalview.fts.service.pdb.PDBFTSPanel'].totalResultSetCount=resultList.getNumberOfItemsFound$();
this.b$['jalview.fts.service.pdb.PDBFTSPanel'].resultSetCount=resultList.getSearchSummary$() == null  ? 0 : resultList.getSearchSummary$().size$();
var result=(this.b$['jalview.fts.service.pdb.PDBFTSPanel'].resultSetCount > 0) ? $I$(1).getString$S("label.results") : $I$(1).getString$S("label.result");
if (this.b$['jalview.fts.service.pdb.PDBFTSPanel'].isPaginationEnabled$.apply(this.b$['jalview.fts.service.pdb.PDBFTSPanel'], []) && this.b$['jalview.fts.service.pdb.PDBFTSPanel'].resultSetCount > 0 ) {
var f1=$I$(7).totalNumberformatter.format$O(Integer.valueOf$I(this.b$['jalview.fts.service.pdb.PDBFTSPanel'].offSet + 1));
var f2=$I$(7).totalNumberformatter.format$O(Integer.valueOf$I(this.b$['jalview.fts.service.pdb.PDBFTSPanel'].offSet + this.b$['jalview.fts.service.pdb.PDBFTSPanel'].resultSetCount));
var f3=$I$(7).totalNumberformatter.format$O(Integer.valueOf$I(this.b$['jalview.fts.service.pdb.PDBFTSPanel'].totalResultSetCount));
this.b$['jalview.fts.core.GFTSPanel'].updateSearchFrameTitle$S.apply(this.b$['jalview.fts.core.GFTSPanel'], [$I$(6).defaultFTSFrameTitle + " - " + result + " " + f1 + " to " + f2 + " of " + f3 + " " + " (" + (endTime - startTime) + " milli secs)" ]);
} else {
this.b$['jalview.fts.core.GFTSPanel'].updateSearchFrameTitle$S.apply(this.b$['jalview.fts.core.GFTSPanel'], [$I$(6).defaultFTSFrameTitle + " - " + this.b$['jalview.fts.service.pdb.PDBFTSPanel'].resultSetCount + " " + result + " (" + (endTime - startTime) + " milli secs)" ]);
}this.b$['jalview.fts.core.GFTSPanel'].setSearchInProgress$Boolean.apply(this.b$['jalview.fts.core.GFTSPanel'], [new Boolean(false)]);
this.b$['jalview.fts.core.GFTSPanel'].refreshPaginatorState$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
this.b$['jalview.fts.core.GFTSPanel'].updateSummaryTableSelections$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}this.b$['jalview.fts.service.pdb.PDBFTSPanel'].txt_search.updateCache$();
});
})()
), Clazz.new_($I$(8), [this, null],P$.PDBFTSPanel$1)).start$();
});

Clazz.newMeth(C$, 'decodeSearchTerm$S$S', function (enteredText, targetField) {
var foundSearchTerms=enteredText;
var foundSearchTermsBuilder=Clazz.new_($I$(9));
if (enteredText.contains$CharSequence(";")) {
var searchTerms=enteredText.split$S(";");
for (var searchTerm, $searchTerm = 0, $$searchTerm = searchTerms; $searchTerm<$$searchTerm.length&&((searchTerm=($$searchTerm[$searchTerm])),1);$searchTerm++) {
if (searchTerm.contains$CharSequence(":")) {
foundSearchTermsBuilder.append$S(targetField).append$S(":").append$S(searchTerm.split$S(":")[0]).append$S(" OR ");
} else {
foundSearchTermsBuilder.append$S(targetField).append$S(":").append$S(searchTerm).append$S(" OR ");
}}
var endIndex=foundSearchTermsBuilder.lastIndexOf$S(" OR ");
foundSearchTerms=foundSearchTermsBuilder.toString();
if (foundSearchTerms.contains$CharSequence(" OR ")) {
foundSearchTerms=foundSearchTerms.substring$I$I(targetField.length$() + 1, endIndex);
}} else if (enteredText.contains$CharSequence(":")) {
foundSearchTerms=foundSearchTerms.split$S(":")[0];
}return foundSearchTerms;
}, 1);

Clazz.newMeth(C$, 'okAction$', function () {
this.disableActionButtons$();
var selectedIds=Clazz.new_($I$(9));
var selectedIdsSet=Clazz.new_($I$(10));
var primaryKeyColIndex=0;
try {
primaryKeyColIndex=this.getFTSRestClient$().getPrimaryKeyColumIndex$java_util_Collection$Z(this.wantedFields, false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
var selectedRows=this.getResultTable$().getSelectedRows$();
var searchTerm=this.getTypedText$();
for (var summaryRow, $summaryRow = 0, $$summaryRow = selectedRows; $summaryRow<$$summaryRow.length&&((summaryRow=($$summaryRow[$summaryRow])),1);$summaryRow++) {
var idStr=this.getResultTable$().getValueAt$I$I(summaryRow, primaryKeyColIndex).toString();
selectedIdsSet.add$TE(C$.getPDBIdwithSpecifiedChain$S$S(idStr, searchTerm));
}
for (var idStr, $idStr = this.paginatorCart.iterator$(); $idStr.hasNext$()&&((idStr=($idStr.next$())),1);) {
selectedIdsSet.add$TE(C$.getPDBIdwithSpecifiedChain$S$S(idStr, searchTerm));
}
for (var selectedId, $selectedId = selectedIdsSet.iterator$(); $selectedId.hasNext$()&&((selectedId=($selectedId.next$())),1);) {
selectedIds.append$S(selectedId).append$S(";");
}
var ids=selectedIds.toString();
this.seqFetcher.setQuery$S(ids);
var worker=Clazz.new_($I$(8).c$$Runnable,[this.seqFetcher]);
worker.start$();
this.delayAndEnableActionButtons$();
});

Clazz.newMeth(C$, 'getPDBIdwithSpecifiedChain$S$S', function (pdbId, searchTerm) {
var pdbIdWithChainCode="";
if (searchTerm.contains$CharSequence(";")) {
var foundTerms=searchTerm.split$S(";");
for (var foundTerm, $foundTerm = 0, $$foundTerm = foundTerms; $foundTerm<$$foundTerm.length&&((foundTerm=($$foundTerm[$foundTerm])),1);$foundTerm++) {
if (foundTerm.contains$CharSequence(pdbId)) {
pdbIdWithChainCode=foundTerm;
}}
} else if (searchTerm.contains$CharSequence(pdbId)) {
pdbIdWithChainCode=searchTerm;
} else {
pdbIdWithChainCode=pdbId;
}return pdbIdWithChainCode;
}, 1);

Clazz.newMeth(C$, 'getFTSRestClient$', function () {
return $I$(3).getInstance$();
});

Clazz.newMeth(C$, 'getFTSFrameTitle$', function () {
return C$.defaultFTSFrameTitle;
});

Clazz.newMeth(C$, 'isPaginationEnabled$', function () {
return true;
});

Clazz.newMeth(C$, 'getTempUserPrefs$', function () {
return C$.tempUserPrefs;
});

Clazz.newMeth(C$, 'getCacheKey$', function () {
return "CACHE.PDB_FTS";
});

Clazz.newMeth(C$, 'getAutosearchPreference$', function () {
return "FTS.PDB.AUTOSEARCH";
});

Clazz.newMeth(C$, 'showHelp$', function () {
try {
$I$(11).showHelpWindow$jalview_gui_Help_HelpId($I$(12).PdbFts);
} catch (e1) {
if (Clazz.exceptionOf(e1,"javax.help.HelpSetException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
