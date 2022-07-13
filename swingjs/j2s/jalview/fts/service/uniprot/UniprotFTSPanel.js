(function(){var P$=Clazz.newPackage("jalview.fts.service.uniprot"),I$=[[0,'jalview.util.MessageManager','java.util.HashMap','jalview.fts.service.uniprot.UniProtFTSRestClient','jalview.fts.core.FTSRestRequest','jalview.fts.core.FTSRestResponse','jalview.fts.service.uniprot.UniprotFTSPanel','jalview.fts.core.GFTSPanel','Thread','StringBuilder','java.util.HashSet','jalview.gui.Help',['jalview.gui.Help','.HelpId']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UniprotFTSPanel", null, 'jalview.fts.core.GFTSPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['defaultFTSFrameTitle'],'O',['tempUserPrefs','java.util.Map']]]

Clazz.newMeth(C$, 'c$$jalview_gui_SequenceFetcher',  function (fetcher) {
;C$.superclazz.c$$jalview_gui_SequenceFetcher.apply(this,[fetcher]);C$.$init$.apply(this);
this.pageLimit=$I$(3).getInstance$().getDefaultResponsePageSize$();
this.seqFetcher=fetcher;
this.progressIndicator=(fetcher == null ) ? null : fetcher.getProgressIndicator$();
}, 1);

Clazz.newMeth(C$, 'searchAction$Z',  function (isFreshSearch) {
this.mainFrame.requestFocusInWindow$();
if (isFreshSearch) {
this.offSet=0;
}((P$.UniprotFTSPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "UniprotFTSPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.fts.core.GFTSPanel'].reset$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
var searchInput=this.b$['jalview.fts.core.GFTSPanel'].getTypedText$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
if (searchInput.length$() > 0) {
this.b$['jalview.fts.core.GFTSPanel'].setSearchInProgress$Boolean.apply(this.b$['jalview.fts.core.GFTSPanel'], [Boolean.valueOf$Z(true)]);
var startTime=System.currentTimeMillis$();
searchInput=this.b$['jalview.fts.core.GFTSPanel'].getTypedText$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
var searchTarget=(this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].cmb_searchTarget.getSelectedItem$()).getAltCode$();
this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].wantedFields=$I$(3).getInstance$().getAllDefaultDisplayedFTSDataColumns$();
var searchTerm=this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].decodeSearchTerm$S$S.apply(this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'], [searchInput, searchTarget]);
var request=Clazz.new_($I$(4,1));
request.setFieldToSearchBy$S(searchTarget);
request.setSearchTerm$S(searchTerm);
request.setOffSet$I(this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].offSet);
request.setWantedFields$java_util_Collection(this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].wantedFields);
var uniProtRestClient=$I$(3).getInstance$();
var resultList;
try {
resultList=uniProtRestClient.executeRequest$jalview_fts_core_FTSRestRequest(request);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.b$['jalview.fts.core.GFTSPanel'].setErrorMessage$S.apply(this.b$['jalview.fts.core.GFTSPanel'], [e.getMessage$()]);
this.b$['jalview.fts.core.GFTSPanel'].checkForErrors$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
this.b$['jalview.fts.core.GFTSPanel'].setSearchInProgress$Boolean.apply(this.b$['jalview.fts.core.GFTSPanel'], [Boolean.valueOf$Z(false)]);
return;
} else {
throw e;
}
}
if (resultList.getSearchSummary$() != null  && resultList.getSearchSummary$().size$() > 0 ) {
this.b$['jalview.fts.core.GFTSPanel'].getResultTable$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).setModel$javax_swing_table_TableModel($I$(5,"getTableModel$jalview_fts_core_FTSRestRequest$java_util_Collection",[request, resultList.getSearchSummary$()]));
$I$(5,"configureTableColumn$javax_swing_JTable$java_util_Collection$java_util_Map",[this.b$['jalview.fts.core.GFTSPanel'].getResultTable$.apply(this.b$['jalview.fts.core.GFTSPanel'], []), this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].wantedFields, $I$(6).tempUserPrefs]);
this.b$['jalview.fts.core.GFTSPanel'].getResultTable$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).setVisible$Z(true);
}var endTime=System.currentTimeMillis$();
this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].totalResultSetCount=resultList.getNumberOfItemsFound$();
this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].resultSetCount=resultList.getSearchSummary$() == null  ? 0 : resultList.getSearchSummary$().size$();
var result=(this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].resultSetCount > 0) ? $I$(1).getString$S("label.results") : $I$(1).getString$S("label.result");
if (this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].isPaginationEnabled$.apply(this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'], []) && this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].resultSetCount > 0 ) {
this.b$['jalview.fts.core.GFTSPanel'].updateSearchFrameTitle$S.apply(this.b$['jalview.fts.core.GFTSPanel'], [$I$(6).defaultFTSFrameTitle + " - " + result + " " + $I$(7).totalNumberformatter.format$O(Integer.valueOf$I(this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].offSet + 1)) + " to " + $I$(7).totalNumberformatter.format$O(Integer.valueOf$I(this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].offSet + this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].resultSetCount)) + " of " + $I$(7).totalNumberformatter.format$O(Integer.valueOf$I(this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].totalResultSetCount)) + " " + " (" + Long.$s((Long.$sub(endTime,startTime))) + " milli secs)" ]);
} else {
this.b$['jalview.fts.core.GFTSPanel'].updateSearchFrameTitle$S.apply(this.b$['jalview.fts.core.GFTSPanel'], [$I$(6).defaultFTSFrameTitle + " - " + this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].resultSetCount + " " + result + " (" + Long.$s((Long.$sub(endTime,startTime))) + " milli secs)" ]);
}this.b$['jalview.fts.core.GFTSPanel'].setSearchInProgress$Boolean.apply(this.b$['jalview.fts.core.GFTSPanel'], [Boolean.valueOf$Z(false)]);
this.b$['jalview.fts.core.GFTSPanel'].refreshPaginatorState$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
this.b$['jalview.fts.core.GFTSPanel'].updateSummaryTableSelections$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}this.b$['jalview.fts.service.uniprot.UniprotFTSPanel'].txt_search.updateCache$();
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.UniprotFTSPanel$1)).start$();
});

Clazz.newMeth(C$, 'decodeSearchTerm$S$S',  function (enteredText, targetField) {
var searchTargetLength=targetField.equalsIgnoreCase$S("Search All") ? 0 : targetField.length$() + 1;
var searchTarget=targetField.equalsIgnoreCase$S("Search All") ? "" : targetField + ":";
var foundSearchTerms=enteredText;
var foundSearchTermsBuilder=Clazz.new_($I$(9,1));
if (enteredText.contains$CharSequence(";")) {
var searchTerms=enteredText.split$S(";");
for (var searchTerm, $searchTerm = 0, $$searchTerm = searchTerms; $searchTerm<$$searchTerm.length&&((searchTerm=($$searchTerm[$searchTerm])),1);$searchTerm++) {
foundSearchTermsBuilder.append$S(searchTarget).append$S(searchTerm).append$S(" OR ");
}
var endIndex=foundSearchTermsBuilder.lastIndexOf$S(" OR ");
foundSearchTerms=foundSearchTermsBuilder.toString();
if (foundSearchTerms.contains$CharSequence(" OR ")) {
foundSearchTerms=foundSearchTerms.substring$I$I(searchTargetLength, endIndex);
}}return foundSearchTerms;
});

Clazz.newMeth(C$, 'isPaginationEnabled$',  function () {
return true;
});

Clazz.newMeth(C$, 'okAction$',  function () {
this.disableActionButtons$();
var selectedIds=Clazz.new_($I$(9,1));
var selectedIdsSet=Clazz.new_($I$(10,1));
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
for (var summaryRow, $summaryRow = 0, $$summaryRow = selectedRows; $summaryRow<$$summaryRow.length&&((summaryRow=($$summaryRow[$summaryRow])),1);$summaryRow++) {
var idStr=this.getResultTable$().getValueAt$I$I(summaryRow, primaryKeyColIndex).toString();
selectedIdsSet.add$O(idStr);
}
selectedIdsSet.addAll$java_util_Collection(this.paginatorCart);
for (var selectedId, $selectedId = selectedIdsSet.iterator$(); $selectedId.hasNext$()&&((selectedId=($selectedId.next$())),1);) {
selectedIds.append$S(selectedId).append$S(";");
}
var ids=selectedIds.toString();
this.seqFetcher.setQuery$S(ids);
var worker=Clazz.new_($I$(8,1).c$$Runnable,[this.seqFetcher]);
worker.start$();
this.delayAndEnableActionButtons$();
});

Clazz.newMeth(C$, 'getFTSRestClient$',  function () {
return $I$(3).getInstance$();
});

Clazz.newMeth(C$, 'getFTSFrameTitle$',  function () {
return C$.defaultFTSFrameTitle;
});

Clazz.newMeth(C$, 'getTempUserPrefs$',  function () {
return C$.tempUserPrefs;
});

Clazz.newMeth(C$, 'getCacheKey$',  function () {
return "CACHE.UNIPROT_FTS";
});

Clazz.newMeth(C$, 'getAutosearchPreference$',  function () {
return "FTS.UNIPROT.AUTOSEARCH";
});

Clazz.newMeth(C$, 'showHelp$',  function () {
try {
$I$(11,"showHelpWindow$jalview_gui_Help_HelpId",[$I$(12).UniprotFts]);
} catch (e1) {
if (Clazz.exceptionOf(e1,"javax.help.HelpSetException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.defaultFTSFrameTitle=$I$(1).getString$S("label.uniprot_sequence_fetcher");
C$.tempUserPrefs=Clazz.new_($I$(2,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:32 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
