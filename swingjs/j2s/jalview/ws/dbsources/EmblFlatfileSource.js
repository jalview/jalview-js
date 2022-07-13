(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),p$1={},I$=[[0,'com.stevesoft.pat.Regex','jalview.ws.ebi.EBIFetchClient','java.util.Locale','jalview.io.FileParse','jalview.io.DataSourceType','jalview.io.EmblFlatFile','jalview.datamodel.Alignment','jalview.bin.Console']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EmblFlatfileSource", null, 'jalview.ws.dbsources.EbiFileRetrievedProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['ACCESSION_REGEX','com.stevesoft.pat.Regex']]]

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return "0";
});

Clazz.newMeth(C$, 'getAccessionSeparator$',  function () {
return null;
});

Clazz.newMeth(C$, 'getAccessionValidator$',  function () {
return C$.ACCESSION_REGEX;
});

Clazz.newMeth(C$, 'isValidReference$S',  function (accession) {
if (accession == null  || accession.length$() < 2 ) {
return false;
}return this.getAccessionValidator$().search$S(accession);
});

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (queries) {
return null;
});

Clazz.newMeth(C$, 'getTier$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getEmblSequenceRecords$S$S',  function (dbName, query) {
this.startQuery$();
var dbFetch=Clazz.new_($I$(2,1));
var reply;
try {
reply=dbFetch.fetchDataAsFile$S$S$S(dbName.toLowerCase$java_util_Locale($I$(3).ROOT) + ":" + query.trim$() , null, "gz");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.stopQuery$();
throw Clazz.new_(Clazz.load('Exception').c$$S$Throwable,[String.format$S$OA("EBI EMBL retrieval failed for %s:%s", Clazz.array(java.lang.Object, -1, [dbName.toLowerCase$java_util_Locale($I$(3).ROOT), query.trim$()])), e]);
} else {
throw e;
}
}
return p$1.getEmblSequenceRecords$S$S$java_io_File.apply(this, [dbName, query, reply]);
});

Clazz.newMeth(C$, 'getEmblSequenceRecords$S$S$java_io_File',  function (dbName, query, reply) {
var al=null;
if (reply != null  && reply.exists$() ) {
this.file=reply.getAbsolutePath$();
var fp=Clazz.new_([this.file, $I$(5).FILE],$I$(4,1).c$$O$jalview_io_DataSourceType);
var emblParser=Clazz.new_([fp, this.getDbSource$()],$I$(6,1).c$$jalview_io_FileParse$S);
var seqs=emblParser.getSeqsAsArray$();
if (seqs.length > 0) {
al=Clazz.new_($I$(7,1).c$$jalview_datamodel_SequenceIA,[seqs]);
}if (al == null ) {
$I$(8).error$S("No record found for '" + dbName + ":" + query + "'" );
}}this.stopQuery$();
return al;
}, p$1);

Clazz.newMeth(C$, 'isDnaCoding$',  function () {
return true;
});

C$.$static$=function(){C$.$static$=0;
C$.ACCESSION_REGEX=Clazz.new_($I$(1,1).c$$S,["^[A-Z]+[0-9]+"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
