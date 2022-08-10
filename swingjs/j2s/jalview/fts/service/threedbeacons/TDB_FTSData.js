(function(){var P$=Clazz.newPackage("jalview.fts.service.threedbeacons"),I$=[[0,'StringBuilder','java.util.Objects']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TDB_FTSData", null, null, 'jalview.fts.api.FTSData');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['primaryKey'],'O',['summaryRowData','Object[]','tdb_entry','java.util.Map']]
,['S',['Uniprot_Id','Uniprot_Start','Uniprot_End','Provider','Model_id','Model_Category','Model_Type','Model_Title','Resolution','Confidence','Confidence_Score_Type','Confidence_Score_Version','Coverage','Sequence_Identity','Created_Date','UniProt_Accession','Url','Page_URL','Ensemble_Sample_Url']]]

Clazz.newMeth(C$, 'c$$S$java_util_Map$OA',  function (primaryKey, tdbJsonStructure, summaryData) {
;C$.$init$.apply(this);
this.primaryKey=primaryKey;
this.tdb_entry=tdbJsonStructure;
this.summaryRowData=summaryData;
}, 1);

Clazz.newMeth(C$, 'getField$S',  function (key) {
return this.tdb_entry.get$O(key);
});

Clazz.newMeth(C$, 'getSummaryData$',  function () {
return this.summaryRowData;
});

Clazz.newMeth(C$, 'getPrimaryKey$',  function () {
return this.primaryKey;
});

Clazz.newMeth(C$, 'toString',  function () {
var summaryFieldValues=Clazz.new_($I$(1,1));
for (var summaryField, $summaryField = 0, $$summaryField = this.summaryRowData; $summaryField<$$summaryField.length&&((summaryField=($$summaryField[$summaryField])),1);$summaryField++) {
summaryFieldValues.append$S(summaryField == null  ? " " : summaryField.toString()).append$S("\t");
}
return summaryFieldValues.toString();
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return $I$(2,"hash$OA",[Clazz.array(java.lang.Object, -1, [this.primaryKey, this.toString()])]);
});

Clazz.newMeth(C$, 'equals$O',  function (that) {
return this.toString().equals$O(that.toString());
});

Clazz.newMeth(C$, 'getProvider$',  function () {
return this.getField$S(C$.Provider);
});

Clazz.newMeth(C$, 'getModelViewUrl$',  function () {
return this.getField$S(C$.Page_URL);
});

Clazz.newMeth(C$, 'getModelId$',  function () {
return this.getField$S(C$.Model_id);
});

C$.$static$=function(){C$.$static$=0;
C$.Uniprot_Id="id";
C$.Uniprot_Start="uniprot_start";
C$.Uniprot_End="uniprot_end";
C$.Provider="provider";
C$.Model_id="model_identifier";
C$.Model_Category="model_category";
C$.Model_Type="model_type";
C$.Model_Title="model_title";
C$.Resolution="resolution";
C$.Confidence="confidence_avg_local_score";
C$.Confidence_Score_Type="confidence_type";
C$.Confidence_Score_Version="confidence_version";
C$.Coverage="coverage";
C$.Sequence_Identity="sequence_identity";
C$.Created_Date="created";
C$.UniProt_Accession="uniprot_accession";
C$.Url="model_url";
C$.Page_URL="model_page_url";
C$.Ensemble_Sample_Url="ensembl_sample_url";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:32 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
