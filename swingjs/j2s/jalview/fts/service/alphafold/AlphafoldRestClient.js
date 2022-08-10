(function(){var P$=Clazz.newPackage("jalview.fts.service.alphafold"),I$=[[0,'java.util.ArrayList','jalview.util.DBRefUtils','jalview.ws.dbsources.EBIAlfaFold','java.net.URL','jalview.util.HttpUtils','jalview.bin.Console','StringBuilder','java.util.Objects']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlphafoldRestClient");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getFTSData$jalview_fts_core_FTSRestRequest',  function (request) {
var records=Clazz.new_($I$(1,1));
var primaryKey=null;
var summaryRowData;
var associatedSequence;
var diplayFields=request.getWantedFields$();
var associatedSeq=request.getAssociatedSequence$();
for (var upref, $upref = $I$(2,"selectRefs$java_util_List$SA",[associatedSeq.getPrimaryDBRefs$(), Clazz.array(String, -1, ["UNIPROT"])]).iterator$(); $upref.hasNext$()&&((upref=($upref.next$())),1);) {
var alphaFoldId="AF-" + upref.getAccessionId$() + "-F1" ;
try {
var urls=$I$(3).getAlphaFoldCifDownloadUrl$S(alphaFoldId);
var url=Clazz.new_($I$(4,1).c$$S,[urls]);
if (!$I$(5).checkUrlAvailable$java_net_URL$I(url, 50)) {
continue;
}} catch (mfe) {
if (Clazz.exceptionOf(mfe,"Exception")){
$I$(6).debug$S$Throwable("Exception accessing urls", mfe);
continue;
} else {
throw mfe;
}
}
var colCounter=0;
summaryRowData=Clazz.array(java.lang.Object, [(associatedSeq != null ) ? diplayFields.size$() + 1 : diplayFields.size$()]);
if (associatedSeq != null ) {
associatedSequence=associatedSeq;
summaryRowData[0]=associatedSequence;
colCounter=1;
}for (var field, $field = diplayFields.iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
var fieldData="alphafold";
if (field.isPrimaryKeyColumn$()) {
primaryKey=alphaFoldId;
summaryRowData[colCounter++]=alphaFoldId;
} else if (fieldData == null  || fieldData.isEmpty$() ) {
summaryRowData[colCounter++]=null;
} else {
try {
summaryRowData[colCounter++]=(field.getDataType$().getDataTypeClass$() === Clazz.getClass(Integer) ) ? Integer.valueOf$I(1) : (field.getDataType$().getDataTypeClass$() === Clazz.getClass(Double) ) ? Double.valueOf$D(1.3131313) : "AlphaFold clarity";
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
records.add$O(((P$.AlphafoldRestClient$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlphafoldRestClient$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.fts.api.FTSData', 1);

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
var summaryFieldValues=Clazz.new_($I$(7,1));
for (var summaryField, $summaryField = 0, $$summaryField = this.$finals$.summaryRowData1; $summaryField<$$summaryField.length&&((summaryField=($$summaryField[$summaryField])),1);$summaryField++) {
summaryFieldValues.append$S(summaryField == null  ? " " : summaryField.toString()).append$S("\t");
}
return summaryFieldValues.toString();
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return $I$(8,"hash$OA",[Clazz.array(java.lang.Object, -1, [this.$finals$.primaryKey1, this.toString()])]);
});

Clazz.newMeth(C$, 'equals$O',  function (that) {
return this.toString().equals$O(that.toString());
});
})()
), Clazz.new_(P$.AlphafoldRestClient$1.$init$,[this, {summaryRowData1:summaryRowData1,primaryKey1:primaryKey1}])));
}
return records;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
