(function(){var P$=Clazz.newPackage("jalview.ws.seqfetcher"),I$=[[0,'jalview.io.IdentifyFile','jalview.io.DataSourceType','jalview.io.FormatAdapter']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DbSourceProxyImpl", null, null, 'jalview.ws.seqfetcher.DbSourceProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.queryInProgress=false;
this.results=null;
},1);

C$.$fields$=[['Z',['queryInProgress'],'O',['results','StringBuffer']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getRawRecords$', function () {
return this.results;
});

Clazz.newMeth(C$, 'queryInProgress$', function () {
return this.queryInProgress;
});

Clazz.newMeth(C$, 'startQuery$', function () {
this.queryInProgress=true;
});

Clazz.newMeth(C$, 'stopQuery$', function () {
this.queryInProgress=false;
});

Clazz.newMeth(C$, 'parseResult$S', function (result) {
var sequences=null;
var format=Clazz.new_($I$(1,1)).identify$S$jalview_io_DataSourceType(result, $I$(2).PASTE);
if (format != null ) {
sequences=Clazz.new_($I$(3,1)).readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(result.toString(), $I$(2).PASTE, format);
}return sequences;
});

Clazz.newMeth(C$, 'getAccessionIdFromQuery$S', function (query) {
var sep=this.getAccessionSeparator$();
if (sep == null ) {
return query;
}var sepPos=query.indexOf$S(sep);
return sepPos == -1 ? query : query.substring$I$I(0, sepPos);
});

Clazz.newMeth(C$, 'getMaximumQueryCount$', function () {
return 1;
});

Clazz.newMeth(C$, 'isDnaCoding$', function () {
return false;
});

Clazz.newMeth(C$, 'isAlignmentSource$', function () {
return false;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return "";
});

Clazz.newMeth(C$, 'getFeatureColourScheme$', function () {
return null;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
