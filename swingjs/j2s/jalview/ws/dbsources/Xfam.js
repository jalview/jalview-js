(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'jalview.bin.Cache','jalview.io.FormatAdapter','jalview.io.DataSourceType','jalview.io.FileFormat','jalview.datamodel.DBRefEntry']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Xfam", null, 'jalview.ws.seqfetcher.DbSourceProxyImpl');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSequenceRecords$S', function (queries) {
this.startQuery$();
var xfamUrl=this.getURL$S(queries);
if ($I$(1).log != null ) {
$I$(1).log.debug$O("XFAM URL for retrieval is: " + xfamUrl);
}var rcds=Clazz.new_($I$(2)).readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(xfamUrl, $I$(3).URL, $I$(4).Stockholm);
for (var s=0, sNum=rcds.getHeight$(); s < sNum; s++) {
rcds.getSequenceAt$I(s).addDBRef$jalview_datamodel_DBRefEntry(Clazz.new_($I$(5).c$$S$S$S,[this.getXfamSource$(), this.getDbVersion$(), queries.trim$().toUpperCase$()]));
if (!this.getDbSource$().equals$O(this.getXfamSource$())) {
rcds.getSequenceAt$I(s).addDBRef$jalview_datamodel_DBRefEntry(Clazz.new_($I$(5).c$$S$S$S,[this.getDbSource$(), this.getDbVersion$(), queries.trim$().toUpperCase$()]));
}}
this.stopQuery$();
return rcds;
});

Clazz.newMeth(C$, 'getURL$S', function (queries) {
return this.getURLPrefix$() + "/family/" + queries.trim$().toUpperCase$() + this.getURLSuffix$() ;
});

Clazz.newMeth(C$, 'isAlignmentSource$', function () {
return true;
});

Clazz.newMeth(C$, 'getURLSuffix$', function () {
return "";
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
