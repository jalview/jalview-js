(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'jalview.bin.Console','jalview.io.FormatAdapter','jalview.io.DataSourceType','jalview.io.FileFormat','jalview.datamodel.DBRefEntry','java.util.Locale']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Xfam", null, 'jalview.ws.seqfetcher.DbSourceProxyImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (queries) {
this.startQuery$();
var xfamUrl=this.getURL$S(queries);
$I$(1).debug$S("XFAM URL for retrieval is: " + xfamUrl);
var rcds=Clazz.new_($I$(2,1)).readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(xfamUrl, $I$(3).URL, $I$(4).Stockholm);
for (var s=0, sNum=rcds.getHeight$(); s < sNum; s++) {
rcds.getSequenceAt$I(s).addDBRef$jalview_datamodel_DBRefEntry(Clazz.new_([this.getXfamSource$(), this.getDbVersion$(), queries.trim$().toUpperCase$java_util_Locale($I$(6).ROOT)],$I$(5,1).c$$S$S$S));
if (!this.getDbSource$().equals$O(this.getXfamSource$())) {
rcds.getSequenceAt$I(s).addDBRef$jalview_datamodel_DBRefEntry(Clazz.new_([this.getDbSource$(), this.getDbVersion$(), queries.trim$().toUpperCase$java_util_Locale($I$(6).ROOT)],$I$(5,1).c$$S$S$S));
}}
this.stopQuery$();
return rcds;
});

Clazz.newMeth(C$, 'getURL$S',  function (queries) {
return this.getURLPrefix$() + "/family/" + queries.trim$().toUpperCase$java_util_Locale($I$(6).ROOT) + this.getURLSuffix$() ;
});

Clazz.newMeth(C$, 'isAlignmentSource$',  function () {
return true;
});

Clazz.newMeth(C$, 'getURLSuffix$',  function () {
return "";
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
