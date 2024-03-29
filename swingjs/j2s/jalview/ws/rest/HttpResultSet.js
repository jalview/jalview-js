(function(){var P$=Clazz.newPackage("jalview.ws.rest"),p$1={},I$=[[0,'java.util.ArrayList','jalview.io.packed.SimpleDataProvider','Error','jalview.util.MessageManager','jalview.ws.io.mime.JalviewMimeContentHandler','org.apache.james.mime4j.parser.MimeStreamParser','jalview.bin.Cache','jalview.io.packed.ParsePackedSet','java.io.InputStreamReader','java.io.BufferedReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HttpResultSet", null, 'jalview.io.FileParse');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cachedRequest=null;
this.repeatable=false;
this.en=null;
this.restJob=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.repeatable=false;
this.en=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_ws_rest_RestJob$org_apache_http_HttpResponse$org_apache_http_client_methods_HttpRequestBase', function (rj, con, req) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.setDataName$S(rj.getJobId$() + " Part " + rj.getJobnum$() );
this.restJob=rj;
this.cachedRequest=req;
p$1.initDataSource$org_apache_http_HttpResponse.apply(this, [con]);
}, 1);

Clazz.newMeth(C$, 'createResultDataProviders$', function () {
var dp=Clazz.new_($I$(1));
for (var type, $type = this.restJob.rsd.getResultDataTypes$().iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
dp.add$TE(Clazz.new_($I$(2).c$$jalview_io_packed_DataProvider_JvDataType$jalview_io_FileParse$O,[type, this, null]));
}
return dp;
});

Clazz.newMeth(C$, 'parseResultSet$', function () {
var dp=Clazz.new_($I$(1));
var results=null;
if (this.en == null ) {
throw Clazz.new_($I$(3).c$$S,[$I$(4).getString$S("error.implementation_error_need_to_have_httpresponse")]);
}var ds=this.restJob.newJalviewDataset$();
if (Clazz.instanceOf(this.en, "org.apache.http.entity.mime.MultipartEntity")) {
var mpe=this.en;
var handler=Clazz.new_($I$(5).c$$jalview_io_packed_JalviewDataset,[ds]);
var parser=Clazz.new_($I$(6));
parser.setContentHandler$org_apache_james_mime4j_parser_ContentHandler(handler);
try {
parser.parse$java_io_InputStream(mpe.getContent$());
} catch (me) {
if (Clazz.exceptionOf(me,"org.apache.james.mime4j.MimeException")){
this.error=true;
this.errormessage="Couldn\'t parse message from web service.";
$I$(7).log.warn$O$Throwable("Failed to parse MIME multipart content", me);
this.en.consumeContent$();
} else {
throw me;
}
}
return Clazz.new_($I$(8)).getAlignment$jalview_io_packed_JalviewDataset$Iterable(ds, handler.getJalviewDataProviders$());
} else {
dp=this.createResultDataProviders$();
var pps=Clazz.new_($I$(8));
return pps.getAlignment$jalview_io_packed_JalviewDataset$Iterable(ds, dp);
}});

Clazz.newMeth(C$, 'initDataSource$org_apache_http_HttpResponse', function (con) {
this.en=con.getEntity$();
this.repeatable=this.en.isRepeatable$();
if (!(Clazz.instanceOf(this.en, "org.apache.http.entity.mime.MultipartEntity"))) {
var enc=(this.en.getContentEncoding$() == null ) ? null : this.en.getContentEncoding$().getValue$();
if (this.en.getContentType$() != null ) {
$I$(7).log.debug$O("Result Type: " + this.en.getContentType$().toString());
} else {
$I$(7).log.debug$O("No Result Type Specified.");
}if (enc == null  || enc.length$() < 1 ) {
$I$(7).log.debug$O("Assuming \'Default\' Result Encoding.");
} else {
$I$(7).log.debug$O("Result Encoded as : " + enc);
}var br=null;
try {
br=(enc != null ) ? Clazz.new_($I$(9).c$$java_io_InputStream$S,[this.en.getContent$(), enc]) : Clazz.new_($I$(9).c$$java_io_InputStream,[this.en.getContent$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
$I$(7).log.error$O$Throwable("Can't handle encoding '" + enc + "' for response from webservice." , e);
this.en.consumeContent$();
this.error=true;
this.errormessage="Can\'t handle encoding for response from webservice";
return;
} else {
throw e;
}
}
if (br != null ) {
this.dataIn=Clazz.new_($I$(10).c$$java_io_Reader,[br]);
this.error=false;
}}}, p$1);

Clazz.newMeth(C$, 'finalize$', function () {
this.dataIn=null;
this.cachedRequest=null;
try {
if (this.en != null ) {
this.en.consumeContent$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var ex = e$$;
{
}
} else {
throw e$$;
}
}
C$.superclazz.prototype.finalize$.apply(this, []);
});

Clazz.newMeth(C$, 'getUrl$', function () {
try {
return this.cachedRequest.getURI$().toURL$().toString();
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
x.printStackTrace$();
return null;
} else {
throw x;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
