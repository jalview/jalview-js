(function(){var P$=Clazz.newPackage("jalview.fts.service.pdb"),I$=[[0,'jalview.util.Platform','jalview.javascript.web.Client','jalview.javascript.web.ClientResponse','java.util.Map','jalview.util.MessageManager','StringBuilder','jalview.util.JSONUtils','jalview.fts.core.FTSRestResponse','java.util.ArrayList','java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDBFTSRestClient", null, 'jalview.fts.core.FTSRestClient');
C$.instance=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.instance=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.allDefaultDisplayedStructureDataColumns=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'executeRequest$jalview_fts_core_FTSRestRequest', function (pdbRestRequest) {
try {
var wantedFields=this.getDataColumnsFieldsAsCommaDelimitedString$java_util_Collection(pdbRestRequest.getWantedFields$());
var responseSize=(pdbRestRequest.getResponseSize$() == 0) ? this.getDefaultResponsePageSize$() : pdbRestRequest.getResponseSize$();
var offSet=pdbRestRequest.getOffSet$();
var sortParam=null;
if (pdbRestRequest.getFieldToSortBy$() == null  || pdbRestRequest.getFieldToSortBy$().trim$().isEmpty$() ) {
sortParam="";
} else {
if (pdbRestRequest.getFieldToSortBy$().equalsIgnoreCase$S("Resolution")) {
sortParam=pdbRestRequest.getFieldToSortBy$() + (pdbRestRequest.isAscending$() ? " asc" : " desc");
} else {
sortParam=pdbRestRequest.getFieldToSortBy$() + (pdbRestRequest.isAscending$() ? " desc" : " asc");
}}var facetPivot=(pdbRestRequest.getFacetPivot$() == null  || pdbRestRequest.getFacetPivot$().isEmpty$() ) ? "" : pdbRestRequest.getFacetPivot$();
var facetPivotMinCount=String.valueOf$I(pdbRestRequest.getFacetPivotMinCount$());
var query=pdbRestRequest.getFieldToSearchBy$() + pdbRestRequest.getSearchTerm$() + (pdbRestRequest.isAllowEmptySeq$() ? "" : " AND molecule_sequence:[\'\' TO *]") + (pdbRestRequest.isAllowUnpublishedEntries$() ? "" : " AND status:REL") ;
var client;
var clientResponseClass;
if ($I$(1).isJS$()) {
client=Clazz.new_($I$(2));
clientResponseClass=Clazz.getClass($I$(3));
} else 
{}
var webResource;
if (pdbRestRequest.isFacet$()) {
webResource=client.resource$S("https://www.ebi.ac.uk/pdbe/search/pdb/select?").queryParam$S$S("wt", "json").queryParam$S$S("fl", wantedFields).queryParam$S$S("rows", String.valueOf$I(responseSize)).queryParam$S$S("q", query).queryParam$S$S("start", String.valueOf$I(offSet)).queryParam$S$S("sort", sortParam).queryParam$S$S("facet", "true").queryParam$S$S("facet.pivot", facetPivot).queryParam$S$S("facet.pivot.mincount", facetPivotMinCount);
} else {
webResource=client.resource$S("https://www.ebi.ac.uk/pdbe/search/pdb/select?").queryParam$S$S("wt", "json").queryParam$S$S("fl", wantedFields).queryParam$S$S("rows", String.valueOf$I(responseSize)).queryParam$S$S("start", String.valueOf$I(offSet)).queryParam$S$S("q", query).queryParam$S$S("sort", sortParam);
}var uri=webResource.getURI$();
System.out.println$O(uri);
var clientResponse=webResource.accept$SA(["application/json"]).get$Class(clientResponseClass);
var status=clientResponse.getStatus$();
var jsonObj=($I$(1).isJS$() && status == 200  ? clientResponse.getEntity$Class(Clazz.getClass($I$(4),['clear$','compute$TK$java_util_function_BiFunction','computeIfAbsent$TK$java_util_function_Function','computeIfPresent$TK$java_util_function_BiFunction','containsKey$O','containsValue$O','entrySet$','equals$O','forEach$java_util_function_BiConsumer','get$O','getOrDefault$O$TV','hashCode$','isEmpty$','keySet$','merge$TK$TV$java_util_function_BiFunction','put$TK$TV','putAll$java_util_Map','putIfAbsent$TK$TV','remove$O','remove$O$O','replace$TK$TV','replace$TK$TV$TV','replaceAll$java_util_function_BiFunction','size$','values$'])) : null);
var responseString=(jsonObj == null  ? clientResponse.getEntity$Class(Clazz.getClass(String)) : null);
switch (status) {
case 200:
break;
case 400:
throw Clazz.new_(Clazz.load('Exception').c$$S,[C$.parseJsonExceptionString$S(responseString)]);
default:
throw Clazz.new_(Clazz.load('Exception').c$$S,[this.getMessageByHTTPStatusCode$I$S(status, "PDB")]);
}
clientResponse=null;
client=null;
return C$.parsePDBJsonResponse$S$java_util_Map$jalview_fts_core_FTSRestRequest(responseString, jsonObj, pdbRestRequest);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var exceptionMsg=e.getMessage$();
if (exceptionMsg.contains$CharSequence("SocketException")) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(5).getString$S("exception.unable_to_detect_internet_connection")]);
} else if (exceptionMsg.contains$CharSequence("UnknownHostException")) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(5).formatMessage$S$OA("exception.fts_server_unreachable", ["PDB Solr"])]);
} else {
throw e;
}} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'parseJsonExceptionString$S', function (jsonErrorResponse) {
var errorMessage=Clazz.new_($I$(6).c$$S,["\n============= PDB Rest Client RunTime error =============\n"]);
try {
var jsonObj=$I$(7).parse$S(jsonErrorResponse);
var errorResponse=jsonObj.get$O("error");
var responseHeader=jsonObj.get$O("responseHeader");
var paramsObj=responseHeader.get$O("params");
var status=responseHeader.get$O("status").toString();
var message=errorResponse.get$O("msg").toString();
var query=paramsObj.get$O("q").toString();
var fl=paramsObj.get$O("fl").toString();
errorMessage.append$S("Status: ").append$S(status).append$S("\n");
errorMessage.append$S("Message: ").append$S(message).append$S("\n");
errorMessage.append$S("query: ").append$S(query).append$S("\n");
errorMessage.append$S("fl: ").append$S(fl).append$S("\n");
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException")){
e.printStackTrace$();
} else {
throw e;
}
}
return errorMessage.toString();
}, 1);

Clazz.newMeth(C$, 'parsePDBJsonResponse$S$jalview_fts_core_FTSRestRequest', function (pdbJsonResponseString, pdbRestRequest) {
return C$.parsePDBJsonResponse$S$java_util_Map$jalview_fts_core_FTSRestRequest(pdbJsonResponseString, null, pdbRestRequest);
}, 1);

Clazz.newMeth(C$, 'parsePDBJsonResponse$S$java_util_Map$jalview_fts_core_FTSRestRequest', function (pdbJsonResponseString, jsonObj, pdbRestRequest) {
var searchResult=Clazz.new_($I$(8));
var result=null;
try {
if (jsonObj == null ) {
jsonObj=$I$(7).parse$S(pdbJsonResponseString);
}var pdbResponse=jsonObj.get$O("response");
var queryTime=(jsonObj.get$O("responseHeader")).get$O("QTime").toString();
var numFound=(Integer.valueOf$S(pdbResponse.get$O("numFound").toString())).intValue$();
if (numFound > 0) {
result=Clazz.new_($I$(9));
var docs=pdbResponse.get$O("docs");
for (var docIter=docs.iterator$(); docIter.hasNext$(); ) {
var doc=docIter.next$();
result.add$TE(C$.getFTSData$java_util_Map$jalview_fts_core_FTSRestRequest(doc, pdbRestRequest));
}
searchResult.setNumberOfItemsFound$I(numFound);
searchResult.setResponseTime$S(queryTime);
searchResult.setSearchSummary$java_util_Collection(result);
}} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException")){
e.printStackTrace$();
} else {
throw e;
}
}
return searchResult;
}, 1);

Clazz.newMeth(C$, 'getFTSData$java_util_Map$jalview_fts_core_FTSRestRequest', function (pdbJsonDoc, request) {
var primaryKey=null;
var summaryRowData;
var associatedSequence;
var diplayFields=request.getWantedFields$();
var associatedSeq=request.getAssociatedSequence$();
var colCounter=0;
summaryRowData=Clazz.array(java.lang.Object, [(associatedSeq != null ) ? diplayFields.size$() + 1 : diplayFields.size$()]);
if (associatedSeq != null ) {
associatedSequence=associatedSeq;
summaryRowData[0]=associatedSequence;
colCounter=1;
}for (var field, $field = diplayFields.iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
var fieldData=(pdbJsonDoc.get$O(field.getCode$()) == null ) ? "" : pdbJsonDoc.get$O(field.getCode$()).toString();
if (field.isPrimaryKeyColumn$()) {
primaryKey=fieldData;
summaryRowData[colCounter++]=primaryKey;
} else if (fieldData == null  || fieldData.isEmpty$() ) {
summaryRowData[colCounter++]=null;
} else {
try {
summaryRowData[colCounter++]=(field.getDataType$().getDataTypeClass$() === Clazz.getClass(Integer) ) ? Integer.valueOf$S(fieldData) : (field.getDataType$().getDataTypeClass$() === Clazz.getClass(Double) ) ? Double.valueOf$S(fieldData) : C$.sanitiseData$S(fieldData);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.out.println$S("offending value:" + fieldData);
} else {
throw e;
}
}
}}
var primaryKey1=primaryKey;
var summaryRowData1=summaryRowData;
return ((P$.PDBFTSRestClient$1||
(function(){var C$=Clazz.newClass(P$, "PDBFTSRestClient$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.fts.api.FTSData', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSummaryData$', function () {
return this.$finals$.summaryRowData1;
});

Clazz.newMeth(C$, 'getPrimaryKey$', function () {
return this.$finals$.primaryKey1;
});

Clazz.newMeth(C$, 'toString', function () {
var summaryFieldValues=Clazz.new_($I$(6));
for (var summaryField, $summaryField = 0, $$summaryField = this.$finals$.summaryRowData1; $summaryField<$$summaryField.length&&((summaryField=($$summaryField[$summaryField])),1);$summaryField++) {
summaryFieldValues.append$S(summaryField == null  ? " " : summaryField.toString()).append$S("\t");
}
return summaryFieldValues.toString();
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(10).hash$OA([this.$finals$.primaryKey1, this.toString()]);
});

Clazz.newMeth(C$, 'equals$O', function (that) {
return this.toString().equals$O(that.toString());
});
})()
), Clazz.new_(P$.PDBFTSRestClient$1.$init$, [this, {summaryRowData1: summaryRowData1, primaryKey1: primaryKey1}]));
}, 1);

Clazz.newMeth(C$, 'sanitiseData$S', function (data) {
var cleanData=data.replaceAll$S$S("\\[\"", "").replaceAll$S$S("\\]\"", "").replaceAll$S$S("\\[", "").replaceAll$S$S("\\]", "").replaceAll$S$S("\",\"", ", ").replaceAll$S$S("\"", "");
return cleanData;
}, 1);

Clazz.newMeth(C$, 'getColumnDataConfigFileName$', function () {
return "/fts/pdb_data_columns.txt";
});

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'getAllDefaultDisplayedStructureDataColumns$', function () {
if (this.allDefaultDisplayedStructureDataColumns == null  || this.allDefaultDisplayedStructureDataColumns.isEmpty$() ) {
this.allDefaultDisplayedStructureDataColumns=Clazz.new_($I$(9));
this.allDefaultDisplayedStructureDataColumns.addAll$java_util_Collection(C$.superclazz.prototype.getAllDefaultDisplayedFTSDataColumns$.apply(this, []));
}return this.allDefaultDisplayedStructureDataColumns;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
