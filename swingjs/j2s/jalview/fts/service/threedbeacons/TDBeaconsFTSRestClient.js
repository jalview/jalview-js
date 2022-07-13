(function(){var P$=Clazz.newPackage("jalview.fts.service.threedbeacons"),p$1={},I$=[[0,'jalview.util.Platform','jalview.javascript.web.Client','jalview.javascript.web.ClientResponse','java.util.Map','jalview.fts.core.FTSRestClient','jalview.util.MessageManager','jalview.fts.core.FTSRestResponse','jalview.util.JSONUtils','java.util.ArrayList','jalview.fts.service.threedbeacons.TDB_FTSData',['jalview.fts.core.FTSDataColumnPreferences','.PreferenceSource']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TDBeaconsFTSRestClient", null, 'jalview.fts.core.FTSRestClient', 'jalview.fts.api.StructureFTSRestClientI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['allDefaultDisplayedStructureDataColumns','java.util.Collection']]
,['S',['TDB_PROD_API','TDB_DEV_API','DEFAULT_THREEDBEACONS_DOMAIN'],'O',['instance','jalview.fts.api.FTSRestClientI']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'executeRequest$jalview_fts_core_FTSRestRequest',  function (tdbRestRequest) {
try {
var query=tdbRestRequest.getSearchTerm$();
var client;
var clientResponseClass;
if ($I$(1).isJS$()) {
client=Clazz.new_($I$(2,1));
clientResponseClass=Clazz.getClass($I$(3));
} else 
{}
var webResource;
webResource=client.resource$S(C$.DEFAULT_THREEDBEACONS_DOMAIN + query);
var uri=webResource.getURI$();
System.out.println$S(uri.toString());
var clientResponse;
if (this.isMocked$()) {
clientResponse=null;
} else {
clientResponse=webResource.accept$SA(Clazz.array(String, -1, ["application/json"])).get$Class(clientResponseClass);
}var jsonObj=null;
var responseString=null;
var responseStatus=this.isMocked$() ? (this.mockQueries.containsKey$O(query) ? 200 : 404) : clientResponse.getStatus$();
switch (responseStatus) {
case 200:
if ($I$(1).isJS$()) {
jsonObj=clientResponse.getEntity$Class(Clazz.getClass($I$(4),['clear$','compute$O$java_util_function_BiFunction','computeIfAbsent$O$java_util_function_Function','computeIfPresent$O$java_util_function_BiFunction','containsKey$O','containsValue$O','copyOf$java_util_Map','entry$O$O','entrySet$','equals$O','forEach$java_util_function_BiConsumer','get$O','getOrDefault$O$O','hashCode$','isEmpty$','keySet$','merge$O$O$java_util_function_BiFunction','of$','of$O$O','of$O$O$O$O','of$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O','ofEntries$java_util_Map_EntryA','put$O$O','putAll$java_util_Map','putIfAbsent$O$O','remove$O','remove$O$O','replace$O$O','replace$O$O$O','replaceAll$java_util_function_BiFunction','size$','values$']));
} else {
responseString=this.isMocked$() ? this.mockQueries.get$O(query) : clientResponse.getEntity$Class(Clazz.getClass(String));
}break;
case 400:
throw Clazz.new_(Clazz.load('Exception').c$$S,[p$1.parseJsonExceptionString$S.apply(this, [responseString])]);
case 404:
return p$1.emptyTDBeaconsJsonResponse.apply(this, []);
default:
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(5).getMessageByHTTPStatusCode$I$S(responseStatus, "3DBeacons")]);
}
return C$.parseTDBeaconsJsonResponse$S$java_util_Map$jalview_fts_core_FTSRestRequest(responseString, jsonObj, tdbRestRequest);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var exceptionMsg=e.getMessage$();
if (exceptionMsg != null ) {
if (exceptionMsg.contains$CharSequence("SocketException")) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(6).getString$S("exception.unable_to_detect_internet_connection")]);
} else if (exceptionMsg.contains$CharSequence("UnknownHostException")) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(6,"formatMessage$S$OA",["exception.fts_server_unreachable", Clazz.array(java.lang.Object, -1, ["3DB Hub"])])]);
}}throw e;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'emptyTDBeaconsJsonResponse',  function () {
return null;
}, p$1);

Clazz.newMeth(C$, 'setSearchTerm$S',  function (term) {
return term;
});

Clazz.newMeth(C$, 'parseTDBeaconsJsonResponse$S$jalview_fts_core_FTSRestRequest',  function (tdbJsonResponseString, tdbRestRequest) {
return C$.parseTDBeaconsJsonResponse$S$java_util_Map$jalview_fts_core_FTSRestRequest(tdbJsonResponseString, null, tdbRestRequest);
}, 1);

Clazz.newMeth(C$, 'parseTDBeaconsJsonResponse$S$java_util_Map$jalview_fts_core_FTSRestRequest',  function (tdbJsonResponseString, jsonObj, tdbRestRequest) {
var searchResult=Clazz.new_($I$(7,1));
var result=null;
try {
if (jsonObj == null ) {
jsonObj=$I$(8).parse$S(tdbJsonResponseString);
}var uniprot_entry=jsonObj.get$O("uniprot_entry");
var structures=jsonObj.get$O("structures");
result=Clazz.new_($I$(9,1));
var numFound=0;
for (var strucIter=structures.iterator$(); strucIter.hasNext$(); ) {
var structure=strucIter.next$();
result.add$O(C$.getFTSData$java_util_Map$jalview_fts_core_FTSRestRequest(structure, tdbRestRequest));
++numFound;
}
searchResult.setNumberOfItemsFound$I(numFound);
searchResult.setSearchSummary$java_util_Collection(result);
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException")){
e.printStackTrace$();
} else {
throw e;
}
}
return searchResult;
}, 1);

Clazz.newMeth(C$, 'getFTSData$java_util_Map$jalview_fts_core_FTSRestRequest',  function (tdbJsonStructure, tdbRequest) {
var primaryKey=null;
var summaryRowData;
var associatedSequence;
var displayFields=tdbRequest.getWantedFields$();
var associatedSeq=tdbRequest.getAssociatedSequence$();
var colCounter=0;
summaryRowData=Clazz.array(java.lang.Object, [(associatedSeq != null ) ? displayFields.size$() + 1 : displayFields.size$()]);
if (associatedSeq != null ) {
associatedSequence=associatedSeq;
summaryRowData[0]=associatedSequence;
colCounter=1;
}for (var field, $field = displayFields.iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
var fieldData=(tdbJsonStructure.get$O(field.getCode$()) == null ) ? " " : tdbJsonStructure.get$O(field.getCode$()).toString();
if (field.isPrimaryKeyColumn$()) {
primaryKey=fieldData;
summaryRowData[colCounter++]=primaryKey;
} else if (fieldData == null  || fieldData.trim$().isEmpty$() ) {
summaryRowData[colCounter++]=null;
} else {
try {
summaryRowData[colCounter++]=(field.getDataType$().getDataTypeClass$() === Clazz.getClass(Integer) ) ? Integer.valueOf$S(fieldData) : (field.getDataType$().getDataTypeClass$() === Clazz.getClass(Double) ) ? Double.valueOf$S(fieldData) : fieldData;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("offending value:" + fieldData + fieldData );
} else {
throw e;
}
}
}}
var primaryKey1=primaryKey;
var summaryRowData1=summaryRowData;
return Clazz.new_($I$(10,1).c$$S$java_util_Map$OA,[primaryKey, tdbJsonStructure, summaryRowData1]);
}, 1);

Clazz.newMeth(C$, 'parseJsonExceptionString$S',  function (jsonErrorString) {
return null;
}, p$1);

Clazz.newMeth(C$, 'getColumnDataConfigFileName$',  function () {
return "/fts/tdbeacons_data_columns.txt";
});

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'getAllDefaultDisplayedStructureDataColumns$',  function () {
if (this.allDefaultDisplayedStructureDataColumns == null  || this.allDefaultDisplayedStructureDataColumns.isEmpty$() ) {
this.allDefaultDisplayedStructureDataColumns=Clazz.new_($I$(9,1));
this.allDefaultDisplayedStructureDataColumns.addAll$java_util_Collection(C$.superclazz.prototype.getAllDefaultDisplayedFTSDataColumns$.apply(this, []));
}return this.allDefaultDisplayedStructureDataColumns;
});

Clazz.newMeth(C$, 'getPreferencesColumnsFor$jalview_fts_core_FTSDataColumnPreferences_PreferenceSource',  function (source) {
var columnNames=null;
switch (source) {
case $I$(11).SEARCH_SUMMARY:
columnNames=Clazz.array(String, -1, ["", "Display", "Group"]);
break;
case $I$(11).STRUCTURE_CHOOSER:
columnNames=Clazz.array(String, -1, ["", "Display", "Group"]);
break;
case $I$(11).PREFERENCES:
columnNames=Clazz.array(String, -1, ["3DB Beacons Field", "Show in search summary", "Show in structure summary"]);
break;
default:
break;
}
return columnNames;
});

C$.$static$=function(){C$.$static$=0;
C$.TDB_PROD_API="https://www.ebi.ac.uk/pdbe/pdbe-kb/3dbeacons/api/uniprot/summary/";
C$.TDB_DEV_API="https://wwwdev.ebi.ac.uk/pdbe/pdbe-kb/3dbeacons/api/uniprot/summary/";
C$.DEFAULT_THREEDBEACONS_DOMAIN=C$.TDB_PROD_API;
C$.instance=null;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:32 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
