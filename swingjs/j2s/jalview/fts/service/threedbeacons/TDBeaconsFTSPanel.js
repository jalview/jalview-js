(function(){var P$=Clazz.newPackage("jalview.fts.service.threedbeacons"),I$=[[0,'jalview.util.MessageManager','java.util.HashMap','jalview.fts.service.threedbeacons.TDBeaconsFTSRestClient','jalview.fts.core.FTSRestRequest','jalview.fts.core.FTSRestResponse','jalview.fts.service.threedbeacons.TDBeaconsFTSPanel','jalview.fts.core.GFTSPanel','Thread','StringBuilder','java.util.HashSet','javax.swing.SwingUtilities','jalview.io.FormatAdapter','jalview.io.DataSourceType','jalview.io.FileFormat','jalview.bin.Console']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TDBeaconsFTSPanel", null, 'jalview.fts.core.GFTSPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['defaultFTSFrameTitle'],'O',['tempUserPrefs','java.util.Map','connection','java.net.HttpURLConnection']]]

Clazz.newMeth(C$, 'c$$jalview_gui_SequenceFetcher',  function (fetcher) {
;C$.superclazz.c$$jalview_gui_SequenceFetcher.apply(this,[null]);C$.$init$.apply(this);
this.pageLimit=$I$(3).getInstance$().getDefaultResponsePageSize$();
this.seqFetcher=fetcher;
this.progressIndicator=(fetcher == null ) ? null : fetcher.getProgressIndicator$();
}, 1);

Clazz.newMeth(C$, 'searchAction$Z',  function (isFreshSearch) {
this.mainFrame.requestFocusInWindow$();
if (isFreshSearch) {
this.offSet=0;
}((P$.TDBeaconsFTSPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TDBeaconsFTSPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.fts.core.GFTSPanel'].reset$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
var allowEmptySequence=false;
if (this.b$['jalview.fts.core.GFTSPanel'].getTypedText$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).length$() > 0) {
this.b$['jalview.fts.core.GFTSPanel'].setSearchInProgress$Boolean.apply(this.b$['jalview.fts.core.GFTSPanel'], [Boolean.valueOf$Z(true)]);
var startTime=System.currentTimeMillis$();
var searchTarget=(this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].cmb_searchTarget.getSelectedItem$()).getCode$();
this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].wantedFields=$I$(3).getInstance$().getAllDefaultDisplayedFTSDataColumns$();
var searchTerm=this.b$['jalview.fts.core.GFTSPanel'].getTypedText$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
var request=Clazz.new_($I$(4,1));
request.setAllowEmptySeq$Z(allowEmptySequence);
request.setResponseSize$I(100);
request.setSearchTerm$S(searchTerm + ".json");
request.setOffSet$I(this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].offSet);
request.setWantedFields$java_util_Collection(this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].wantedFields);
var tdbRestClient=$I$(3).getInstance$();
var resultList;
try {
resultList=tdbRestClient.executeRequest$jalview_fts_core_FTSRestRequest(request);
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
$I$(5,"configureTableColumn$javax_swing_JTable$java_util_Collection$java_util_Map",[this.b$['jalview.fts.core.GFTSPanel'].getResultTable$.apply(this.b$['jalview.fts.core.GFTSPanel'], []), this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].wantedFields, $I$(6).tempUserPrefs]);
this.b$['jalview.fts.core.GFTSPanel'].getResultTable$.apply(this.b$['jalview.fts.core.GFTSPanel'], []).setVisible$Z(true);
}var endTime=System.currentTimeMillis$();
this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].totalResultSetCount=resultList.getNumberOfItemsFound$();
this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].resultSetCount=resultList.getSearchSummary$() == null  ? 0 : resultList.getSearchSummary$().size$();
var result=(this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].resultSetCount > 0) ? $I$(1).getString$S("label.results") : $I$(1).getString$S("label.result");
if (this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].isPaginationEnabled$.apply(this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'], []) && this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].resultSetCount > 0 ) {
var f1=$I$(7).totalNumberformatter.format$O(Integer.valueOf$I(this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].offSet + 1));
var f2=$I$(7).totalNumberformatter.format$O(Integer.valueOf$I(this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].offSet + this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].resultSetCount));
var f3=$I$(7).totalNumberformatter.format$O(Integer.valueOf$I(this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].totalResultSetCount));
this.b$['jalview.fts.core.GFTSPanel'].updateSearchFrameTitle$S.apply(this.b$['jalview.fts.core.GFTSPanel'], [$I$(6).defaultFTSFrameTitle + " - " + result + " " + f1 + " to " + f2 + " of " + f3 + " " + " (" + Long.$s((Long.$sub(endTime,startTime))) + " milli secs)" ]);
} else {
this.b$['jalview.fts.core.GFTSPanel'].updateSearchFrameTitle$S.apply(this.b$['jalview.fts.core.GFTSPanel'], [$I$(6).defaultFTSFrameTitle + " - " + this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].resultSetCount + " " + result + " (" + Long.$s((Long.$sub(endTime,startTime))) + " milli secs)" ]);
}this.b$['jalview.fts.core.GFTSPanel'].setSearchInProgress$Boolean.apply(this.b$['jalview.fts.core.GFTSPanel'], [Boolean.valueOf$Z(false)]);
this.b$['jalview.fts.core.GFTSPanel'].refreshPaginatorState$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
this.b$['jalview.fts.core.GFTSPanel'].updateSummaryTableSelections$.apply(this.b$['jalview.fts.core.GFTSPanel'], []);
}this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].txt_search.updateCache$();
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.TDBeaconsFTSPanel$1)).start$();
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
var searchTerm=this.getTypedText$();
for (var summaryRow, $summaryRow = 0, $$summaryRow = selectedRows; $summaryRow<$$summaryRow.length&&((summaryRow=($$summaryRow[$summaryRow])),1);$summaryRow++) {
var idStr=this.getResultTable$().getValueAt$I$I(summaryRow, primaryKeyColIndex).toString();
selectedIdsSet.add$O(idStr);
}
for (var idStr, $idStr = this.paginatorCart.iterator$(); $idStr.hasNext$()&&((idStr=($idStr.next$())),1);) {
selectedIdsSet.add$O(idStr);
}
for (var selectedId, $selectedId = selectedIdsSet.iterator$(); $selectedId.hasNext$()&&((selectedId=($selectedId.next$())),1);) {
selectedIds.append$S(selectedId).append$S(";");
}
$I$(11,"invokeLater$Runnable",[((P$.TDBeaconsFTSPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TDBeaconsFTSPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var allSeqs=null;
var fl=Clazz.new_($I$(12,1));
for (var tdbURL, $tdbURL = this.$finals$.selectedIdsSet.iterator$(); $tdbURL.hasNext$()&&((tdbURL=($tdbURL.next$())),1);) {
try {
var tdbAl=fl.readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(tdbURL, $I$(13).URL, $I$(14).MMCif);
if (tdbAl != null ) {
if (allSeqs != null ) {
allSeqs.append$jalview_datamodel_AlignmentI(tdbAl);
} else {
allSeqs=tdbAl;
}}} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
$I$(15).warn$S$Throwable("Couldn't retrieve 3d-beacons model for uniprot id" + this.$finals$.searchTerm + " : " + tdbURL , x);
} else {
throw x;
}
}
}
this.b$['jalview.fts.service.threedbeacons.TDBeaconsFTSPanel'].seqFetcher.parseResult$jalview_datamodel_AlignmentI$S$jalview_io_FileFormatI$jalview_api_FeatureSettingsModelI(allSeqs, "3D-Beacons models for " + this.$finals$.searchTerm, $I$(14).MMCif, null);
});
})()
), Clazz.new_(P$.TDBeaconsFTSPanel$2.$init$,[this, {selectedIdsSet:selectedIdsSet,searchTerm:searchTerm}]))]);
this.delayAndEnableActionButtons$();
});

Clazz.newMeth(C$, 'getFTSRestClient$',  function () {
return $I$(3).getInstance$();
});

Clazz.newMeth(C$, 'getFTSFrameTitle$',  function () {
return C$.defaultFTSFrameTitle;
});

Clazz.newMeth(C$, 'isPaginationEnabled$',  function () {
return true;
});

Clazz.newMeth(C$, 'getTempUserPrefs$',  function () {
return C$.tempUserPrefs;
});

Clazz.newMeth(C$, 'getCacheKey$',  function () {
return "CACHE.THREEDB_FTS";
});

Clazz.newMeth(C$, 'getAutosearchPreference$',  function () {
return "FTS.THREEDB.AUTOSEARCH";
});

Clazz.newMeth(C$, 'showHelp$',  function () {
System.out.println$S("No help implemented yet.");
});

Clazz.newMeth(C$, 'decodeSearchTerm$S',  function (enteredText) {
return enteredText;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.defaultFTSFrameTitle=$I$(1).getString$S("label.pdb_sequence_fetcher");
C$.tempUserPrefs=Clazz.new_($I$(2,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:32 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
