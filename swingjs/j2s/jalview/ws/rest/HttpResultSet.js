(function(){var P$=Clazz.newPackage("jalview.ws.rest"),p$1={},I$=[[0,'java.util.ArrayList','jalview.io.packed.SimpleDataProvider','Error','jalview.util.MessageManager','jalview.ws.io.mime.JalviewMimeContentHandler','org.apache.james.mime4j.parser.MimeStreamParser','jalview.bin.Console','jalview.io.packed.ParsePackedSet','java.io.InputStreamReader','java.io.BufferedReader']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HttpResultSet", null, 'jalview.io.FileParse', 'AutoCloseable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.repeatable=false;
this.en=null;
},1);

C$.$fields$=[['Z',['repeatable'],'O',['cachedRequest','org.apache.http.client.methods.HttpRequestBase','en','org.apache.http.HttpEntity','restJob','jalview.ws.rest.RestJob']]]

Clazz.newMeth(C$, 'c$$jalview_ws_rest_RestJob$org_apache_http_HttpResponse$org_apache_http_client_methods_HttpRequestBase',  function (rj, con, req) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setDataName$S(rj.getJobId$() + " Part " + rj.getJobnum$() );
this.restJob=rj;
this.cachedRequest=req;
p$1.initDataSource$org_apache_http_HttpResponse.apply(this, [con]);
}, 1);

Clazz.newMeth(C$, 'createResultDataProviders$',  function () {
var dp=Clazz.new_($I$(1,1));
for (var type, $type = this.restJob.rsd.getResultDataTypes$().iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
dp.add$O(Clazz.new_($I$(2,1).c$$jalview_io_packed_DataProvider_JvDataType$jalview_io_FileParse$O,[type, this, null]));
}
return dp;
});

Clazz.newMeth(C$, 'parseResultSet$',  function () {
var dp=Clazz.new_($I$(1,1));
var results=null;
if (this.en == null ) {
throw Clazz.new_([$I$(4).getString$S("error.implementation_error_need_to_have_httpresponse")],$I$(3,1).c$$S);
}var ds=this.restJob.newJalviewDataset$();
if (Clazz.instanceOf(this.en, "org.apache.http.entity.mime.MultipartEntity")) {
var mpe=this.en;
var handler=Clazz.new_($I$(5,1).c$$jalview_io_packed_JalviewDataset,[ds]);
var parser=Clazz.new_($I$(6,1));
parser.setContentHandler$org_apache_james_mime4j_parser_ContentHandler(handler);
try {
parser.parse$java_io_InputStream(mpe.getContent$());
} catch (me) {
if (Clazz.exceptionOf(me,"org.apache.james.mime4j.MimeException")){
this.error=true;
this.errormessage="Couldn\'t parse message from web service.";
$I$(7).warn$S$Throwable("Failed to parse MIME multipart content", me);
this.en.consumeContent$();
} else {
throw me;
}
}
return Clazz.new_($I$(8,1)).getAlignment$jalview_io_packed_JalviewDataset$Iterable(ds, handler.getJalviewDataProviders$());
} else {
dp=this.createResultDataProviders$();
var pps=Clazz.new_($I$(8,1));
return pps.getAlignment$jalview_io_packed_JalviewDataset$Iterable(ds, dp);
}});

Clazz.newMeth(C$, 'initDataSource$org_apache_http_HttpResponse',  function (con) {
this.en=con.getEntity$();
this.repeatable=this.en.isRepeatable$();
if (!(Clazz.instanceOf(this.en, "org.apache.http.entity.mime.MultipartEntity"))) {
var enc=(this.en.getContentEncoding$() == null ) ? null : this.en.getContentEncoding$().getValue$();
if (this.en.getContentType$() != null ) {
$I$(7,"debug$S",["Result Type: " + this.en.getContentType$().toString()]);
} else {
$I$(7).debug$S("No Result Type Specified.");
}if (enc == null  || enc.length$() < 1 ) {
$I$(7).debug$S("Assuming \'Default\' Result Encoding.");
} else {
$I$(7).debug$S("Result Encoded as : " + enc);
}var br=null;
try {
br=(enc != null ) ? Clazz.new_([this.en.getContent$(), enc],$I$(9,1).c$$java_io_InputStream$S) : Clazz.new_([this.en.getContent$()],$I$(9,1).c$$java_io_InputStream);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
$I$(7).error$S$Throwable("Can't handle encoding '" + enc + "' for response from webservice." , e);
this.en.consumeContent$();
this.error=true;
this.errormessage="Can\'t handle encoding for response from webservice";
return;
} else {
throw e;
}
}
if (br != null ) {
this.dataIn=Clazz.new_($I$(10,1).c$$java_io_Reader,[br]);
this.error=false;
}}}, p$1);

Clazz.newMeth(C$, 'close$',  function () {
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
});

Clazz.newMeth(C$, 'getUrl$',  function () {
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
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
