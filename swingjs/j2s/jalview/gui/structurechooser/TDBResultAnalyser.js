(function(){var P$=Clazz.newPackage("jalview.gui.structurechooser"),p$1={},I$=[[0,'java.util.Arrays','java.util.Locale','java.util.ArrayList','java.util.Collections','jalview.gui.structurechooser.TDBResultAnalyser','java.util.BitSet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TDBResultAnalyser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.filter=null;
this.sourceFilter=null;
},1);

C$.$fields$=[['I',['idx_ups','idx_upe','idx_mcat','idx_mqual','idx_resol','idx_mprov'],'S',['filter','sourceFilter'],'O',['seq','jalview.datamodel.SequenceI','collectedResults','java.util.Collection','lastTdbRequest','jalview.fts.core.FTSRestRequest']]
,['O',['EXP_CATEGORIES','java.util.List']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$java_util_Collection$jalview_fts_core_FTSRestRequest$S$S',  function (seq, collectedResults, lastTdbRequest, fieldToFilterBy, string) {
;C$.$init$.apply(this);
this.seq=seq;
this.collectedResults=collectedResults;
this.lastTdbRequest=lastTdbRequest;
this.filter=fieldToFilterBy;
this.sourceFilter=string;
this.idx_ups=lastTdbRequest.getFieldIndex$S("Uniprot Start");
this.idx_upe=lastTdbRequest.getFieldIndex$S("Uniprot End");
this.idx_mcat=lastTdbRequest.getFieldIndex$S("Model Category");
this.idx_mprov=lastTdbRequest.getFieldIndex$S("Provider");
this.idx_mqual=lastTdbRequest.getFieldIndex$S("Confidence");
this.idx_resol=lastTdbRequest.getFieldIndex$S("Resolution");
}, 1);

Clazz.newMeth(C$, 'scoreCategory$S',  function (cat) {
if (cat == null ) {
return 0;
}var upper_cat=cat.toUpperCase$java_util_Locale($I$(2).ROOT);
var idx=C$.EXP_CATEGORIES.indexOf$O(upper_cat);
if (idx == -1) {
System.out.println$S("Unknown category: '" + cat + "'" );
C$.EXP_CATEGORIES.add$O(upper_cat);
idx=C$.EXP_CATEGORIES.size$() - 1;
}return -C$.EXP_CATEGORIES.size$() - idx;
});

Clazz.newMeth(C$, 'getFilteredResponse$',  function () {
var filteredResponse=Clazz.new_($I$(3,1));
for (var row, $row = this.collectedResults.iterator$(); $row.hasNext$()&&((row=($row.next$())),1);) {
if (row.getSummaryData$() != null  && row.getSummaryData$()[this.idx_ups] != null  ) {
var up_s=(row.getSummaryData$()[this.idx_ups]).$c();
var up_e=(row.getSummaryData$()[this.idx_upe]).$c();
var provider=row.getSummaryData$()[this.idx_mprov];
var mcat=row.getSummaryData$()[this.idx_mcat];
var scorecat=this.scoreCategory$S(mcat);
if (this.sourceFilter == null  || this.sourceFilter.equals$O(provider) ) {
if (this.seq === row.getSummaryData$()[0]  && up_e > this.seq.getStart$()  && up_s < this.seq.getEnd$() ) {
filteredResponse.add$O(row);
}}}}
$I$(4,"sort$java_util_List$java_util_Comparator",[filteredResponse, ((P$.TDBResultAnalyser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TDBResultAnalyser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$jalview_fts_api_FTSData$jalview_fts_api_FTSData','compare$O$O'],  function (o1, o2) {
var o1data=o1.getSummaryData$();
var o2data=o2.getSummaryData$();
var o1_s=(o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_ups]).$c();
var o1_e=(o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_upe]).$c();
var o1_cat=this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].scoreCategory$S.apply(this.b$['jalview.gui.structurechooser.TDBResultAnalyser'], [o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mcat]]);
var o1_prov=(o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mprov]).toUpperCase$java_util_Locale($I$(2).ROOT);
var o2_s=(o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_ups]).$c();
var o2_e=(o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_upe]).$c();
var o2_cat=this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].scoreCategory$S.apply(this.b$['jalview.gui.structurechooser.TDBResultAnalyser'], [o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mcat]]);
var o2_prov=(o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mprov]).toUpperCase$java_util_Locale($I$(2).ROOT);
if (o1_cat == o2_cat) {
if (o1_s == o2_s) {
var o1_xtent=o1_e - o1_s;
var o2_xtent=o2_e - o2_s;
if (o1_xtent == o2_xtent) {
if (o1_cat == this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].scoreCategory$S.apply(this.b$['jalview.gui.structurechooser.TDBResultAnalyser'], [$I$(5).EXP_CATEGORIES.get$I(0)])) {
if (o1_prov.equals$O(o2_prov)) {
if ("PDBE".equals$O(o1_prov)) {
if (p$1.eitherNull$I$OA$OA.apply(this, [this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_resol, o1data, o2data])) {
return p$1.nonNullFirst$I$OA$OA.apply(this, [this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_resol, o1data, o2data]);
}var o1_res=(o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_resol]).valueOf();
var o2_res=(o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_resol]).valueOf();
return (o2_res < o1_res ) ? 1 : (o2_res == o1_res ) ? 0 : -1;
} else {
return 0;
}} else {
return "PDBE".equals$O(o1_prov) ? -1 : "PDBE".equals$O(o2_prov) ? 1 : 0;
}} else {
if (p$1.eitherNull$I$OA$OA.apply(this, [this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mqual, o1data, o2data])) {
return p$1.nonNullFirst$I$OA$OA.apply(this, [this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mqual, o1data, o2data]);
}var o1_mq=(o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mqual]).valueOf();
var o2_mq=(o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mqual]).valueOf();
return (o2_mq < o1_mq ) ? 1 : (o2_mq == o1_mq ) ? 0 : -1;
}} else {
return o1_xtent - o2_xtent;
}} else {
return o1_s - o2_s;
}} else {
return o2_cat - o1_cat;
}});

Clazz.newMeth(C$, 'nonNullFirst$I$OA$OA',  function (idx_resol, o1data, o2data) {
return o1data[idx_resol] === o2data[idx_resol]  ? 0 : o1data[idx_resol] != null  ? -1 : 1;
}, p$1);

Clazz.newMeth(C$, 'eitherNull$I$OA$OA',  function (idx_resol, o1data, o2data) {
return (o1data[idx_resol] == null  || o2data[idx_resol] == null  );
}, p$1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});
})()
), Clazz.new_(P$.TDBResultAnalyser$1.$init$,[this, null]))]);
return filteredResponse;
});

Clazz.newMeth(C$, 'selectStructures$java_util_List',  function (filteredStructures) {
var selected=Clazz.new_($I$(3,1));
var cover=Clazz.new_($I$(6,1));
cover.set$I$I(this.seq.getStart$(), this.seq.getEnd$());
for (var structure, $structure = filteredStructures.iterator$(); $structure.hasNext$()&&((structure=($structure.next$())),1);) {
var odata=structure.getSummaryData$();
var o1_s=(odata[this.idx_ups]).$c();
var o1_e=(odata[this.idx_upe]).$c();
var o1_cat=this.scoreCategory$S(odata[this.idx_mcat]);
var scover=Clazz.new_($I$(6,1));
scover.set$I$I(o1_s, o1_e);
scover.and$java_util_BitSet(cover);
if (scover.cardinality$() > 4) {
selected.add$O(structure);
cover.andNot$java_util_BitSet(scover);
}}
if (selected.size$() == 0) {
return selected;
}$I$(4,"sort$java_util_List$java_util_Comparator",[selected, ((P$.TDBResultAnalyser$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TDBResultAnalyser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$jalview_fts_api_FTSData$jalview_fts_api_FTSData','compare$O$O'],  function (o1, o2) {
var o1data=o1.getSummaryData$();
var o2data=o2.getSummaryData$();
var o1_xt=(((o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_upe]).$c()) - ((o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_ups]).$c()))|0;
var o1_cat=this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].scoreCategory$S.apply(this.b$['jalview.gui.structurechooser.TDBResultAnalyser'], [o1data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mcat]]);
var o2_xt=(((o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_upe]).$c() - (o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_ups]).$c())|0);
var o2_cat=this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].scoreCategory$S.apply(this.b$['jalview.gui.structurechooser.TDBResultAnalyser'], [o2data[this.b$['jalview.gui.structurechooser.TDBResultAnalyser'].idx_mcat]]);
return o2_xt - o1_xt;
});
})()
), Clazz.new_(P$.TDBResultAnalyser$2.$init$,[this, null]))]);
if (this.filter.equals$O("3d_beacons_first_best_coverage")) {
return selected.subList$I$I(0, 1);
}return selected;
});

C$.$static$=function(){C$.$static$=0;
C$.EXP_CATEGORIES=$I$(1,"asList$OA",[Clazz.array(String, -1, ["EXPERIMENTALLY DETERMINED", "DEEP-LEARNING", "TEMPLATE-BASED", "AB-INITIO", "CONFORMATIONAL ENSEMBLE"])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
