(function(){var P$=Clazz.newPackage("jalview.fts.service.uniprot"),I$=[[0,'jalview.util.Platform','jalview.bin.Cache','jalview.javascript.web.Client','jalview.javascript.web.ClientResponse','jalview.bin.Console','jalview.fts.core.FTSRestClient','jalview.util.MessageManager','jalview.fts.core.FTSRestResponse','java.util.ArrayList','StringBuilder','java.util.Objects']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UniProtFTSRestClient", null, 'jalview.fts.core.FTSRestClient');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['uniprotSearchEndpoint']]
,['O',['instance','jalview.fts.api.FTSRestClientI']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.uniprotSearchEndpoint=$I$(2).getDefault$S$S("UNIPROT_DOMAIN", "https://legacy.uniprot.org") + "/uniprot/";
}, 1);

Clazz.newMeth(C$, 'executeRequest$jalview_fts_core_FTSRestRequest',  function (uniprotRestRequest) {
try {
var wantedFields=this.getDataColumnsFieldsAsCommaDelimitedString$java_util_Collection(uniprotRestRequest.getWantedFields$());
var responseSize=(uniprotRestRequest.getResponseSize$() == 0) ? this.getDefaultResponsePageSize$() : uniprotRestRequest.getResponseSize$();
var offSet=uniprotRestRequest.getOffSet$();
var query;
if (this.isAdvancedQuery$S(uniprotRestRequest.getSearchTerm$())) {
query=uniprotRestRequest.getSearchTerm$();
} else {
query=uniprotRestRequest.getFieldToSearchBy$().equalsIgnoreCase$S("Search All") ? uniprotRestRequest.getSearchTerm$() + " or mnemonic:" + uniprotRestRequest.getSearchTerm$()  : uniprotRestRequest.getFieldToSearchBy$() + ":" + uniprotRestRequest.getSearchTerm$() ;
}var client;
var clientResponseClass;
if ($I$(1).isJS$()) {
client=Clazz.new_($I$(3,1));
clientResponseClass=Clazz.getClass($I$(4));
} else 
{}
var webResource=null;
webResource=client.resource$S(this.uniprotSearchEndpoint).queryParam$S$S("format", "tab").queryParam$S$S("columns", wantedFields).queryParam$S$S("limit", String.valueOf$I(responseSize)).queryParam$S$S("offset", String.valueOf$I(offSet)).queryParam$S$S("sort", "score").queryParam$S$S("query", query);
if ($I$(5).isDebugEnabled$()) {
$I$(5,"debug$S",["Uniprot FTS Request: " + webResource.toString()]);
}var clientResponse=webResource.accept$SA(Clazz.array(String, -1, ["text/plain"])).get$Class(clientResponseClass);
var uniProtTabDelimittedResponseString=clientResponse.getEntity$Class(Clazz.getClass(String));
if (clientResponse.getStatus$() != 200) {
var errorMessage=$I$(6,"getMessageByHTTPStatusCode$I$S",[clientResponse.getStatus$(), "Uniprot"]);
throw Clazz.new_(Clazz.load('Exception').c$$S,[errorMessage]);
}var xTotalResults=$I$(1).isJS$() ? 1 : (Integer.valueOf$S(clientResponse.getHeaders$().get$O("X-Total-Results").get$I(0))).$c();
clientResponse=null;
client=null;
return this.parseUniprotResponse$S$jalview_fts_core_FTSRestRequest$I(uniProtTabDelimittedResponseString, uniprotRestRequest, xTotalResults);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var exceptionMsg=e.getMessage$();
if (exceptionMsg.contains$CharSequence("SocketException")) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(7).getString$S("exception.unable_to_detect_internet_connection")]);
} else if (exceptionMsg.contains$CharSequence("UnknownHostException")) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(7,"formatMessage$S$OA",["exception.fts_server_unreachable", Clazz.array(java.lang.Object, -1, ["Uniprot"])])]);
} else {
throw e;
}} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isAdvancedQuery$S',  function (query) {
if (query.contains$CharSequence(" AND ") || query.contains$CharSequence(" OR ") || query.contains$CharSequence(" NOT ") || query.contains$CharSequence(" ! ") || query.contains$CharSequence(" || ") || query.contains$CharSequence(" && ") || query.contains$CharSequence(":") || query.contains$CharSequence("-")  ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'parseUniprotResponse$S$jalview_fts_core_FTSRestRequest$I',  function (uniProtTabDelimittedResponseString, uniprotRestRequest, xTotalResults) {
var searchResult=Clazz.new_($I$(8,1));
var result=null;
if (uniProtTabDelimittedResponseString == null  || uniProtTabDelimittedResponseString.trim$().isEmpty$() ) {
searchResult.setNumberOfItemsFound$I(0);
return searchResult;
}var foundDataRow=uniProtTabDelimittedResponseString.split$S("\n");
if (foundDataRow != null  && foundDataRow.length > 0 ) {
result=Clazz.new_($I$(9,1));
var firstRow=true;
for (var dataRow, $dataRow = 0, $$dataRow = foundDataRow; $dataRow<$$dataRow.length&&((dataRow=($$dataRow[$dataRow])),1);$dataRow++) {
if (firstRow) {
firstRow=false;
continue;
}result.add$O(C$.getFTSData$S$jalview_fts_core_FTSRestRequest(dataRow, uniprotRestRequest));
}
searchResult.setNumberOfItemsFound$I(xTotalResults);
searchResult.setSearchSummary$java_util_Collection(result);
}return searchResult;
});

Clazz.newMeth(C$, 'getFTSData$S$jalview_fts_core_FTSRestRequest',  function (tabDelimittedDataStr, request) {
var primaryKey=null;
var summaryRowData;
var diplayFields=request.getWantedFields$();
var colCounter=0;
summaryRowData=Clazz.array(java.lang.Object, [diplayFields.size$()]);
var columns=tabDelimittedDataStr.split$S("\t");
for (var field, $field = diplayFields.iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
try {
var fieldData=columns[colCounter];
if (field.isPrimaryKeyColumn$()) {
primaryKey=fieldData;
summaryRowData[colCounter++]=primaryKey;
} else if (fieldData == null  || fieldData.isEmpty$() ) {
summaryRowData[colCounter++]=null;
} else {
try {
summaryRowData[colCounter++]=(field.getDataType$().getDataTypeClass$() === Clazz.getClass(Integer) ) ? Integer.valueOf$S(fieldData.replace$CharSequence$CharSequence(",", "")) : (field.getDataType$().getDataTypeClass$() === Clazz.getClass(Double) ) ? Double.valueOf$S(fieldData) : fieldData;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.out.println$S("offending value:" + fieldData);
} else {
throw e;
}
}
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
var primaryKey1=primaryKey;
var summaryRowData1=summaryRowData;
return ((P$.UniProtFTSRestClient$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "UniProtFTSRestClient$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.fts.api.FTSData', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getSummaryData$',  function () {
return this.$finals$.summaryRowData1;
});

Clazz.newMeth(C$, 'getPrimaryKey$',  function () {
return this.$finals$.primaryKey1;
});

Clazz.newMeth(C$, 'toString',  function () {
var summaryFieldValues=Clazz.new_($I$(10,1));
for (var summaryField, $summaryField = 0, $$summaryField = this.$finals$.summaryRowData1; $summaryField<$$summaryField.length&&((summaryField=($$summaryField[$summaryField])),1);$summaryField++) {
summaryFieldValues.append$S(summaryField == null  ? " " : summaryField.toString()).append$S("\t");
}
return summaryFieldValues.toString();
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return $I$(11,"hash$OA",[Clazz.array(java.lang.Object, -1, [this.$finals$.primaryKey1, this.toString()])]);
});

Clazz.newMeth(C$, 'equals$O',  function (that) {
return this.toString().equals$O(that.toString());
});
})()
), Clazz.new_(P$.UniProtFTSRestClient$1.$init$,[this, {primaryKey1:primaryKey1,summaryRowData1:summaryRowData1}]));
}, 1);

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'getColumnDataConfigFileName$',  function () {
return "/fts/uniprot_data_columns.txt";
});

C$.$static$=function(){C$.$static$=0;
{
$I$(1).addJ2SDirectDatabaseCall$S("https://legacy.uniprot.org");
};
C$.instance=null;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:32 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
