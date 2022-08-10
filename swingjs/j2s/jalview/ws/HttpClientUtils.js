(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[[0,'org.apache.http.params.BasicHttpParams','org.apache.http.HttpVersion','org.apache.http.params.HttpConnectionParams','org.apache.http.impl.client.DefaultHttpClient','org.apache.http.client.methods.HttpPost','org.apache.http.client.entity.UrlEncodedFormEntity','java.io.BufferedReader','java.io.InputStreamReader','org.apache.http.entity.mime.MultipartEntity','org.apache.http.entity.mime.HttpMultipartMode','org.apache.http.entity.mime.content.StringBody','org.apache.http.entity.mime.content.FileBody','org.apache.http.entity.mime.content.InputStreamBody','org.apache.http.client.methods.HttpGet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HttpClientUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'doHttpUrlPost$S$java_util_List$I$I',  function (postUrl, vals, connectionTimeoutMs, readTimeoutMs) {
var params=Clazz.new_($I$(1,1));
params.setParameter$S$O("http.protocol.version", $I$(2).HTTP_1_1);
if (connectionTimeoutMs > 0) {
$I$(3).setConnectionTimeout$org_apache_http_params_HttpParams$I(params, connectionTimeoutMs);
}if (readTimeoutMs > 0) {
$I$(3).setSoTimeout$org_apache_http_params_HttpParams$I(params, readTimeoutMs);
}var httpclient=Clazz.new_($I$(4,1).c$$org_apache_http_params_HttpParams,[params]);
var httppost=Clazz.new_($I$(5,1).c$$S,[postUrl]);
var ue=Clazz.new_($I$(6,1).c$$java_util_List$S,[vals, "UTF-8"]);
httppost.setEntity$org_apache_http_HttpEntity(ue);
var response=httpclient.execute$org_apache_http_client_methods_HttpUriRequest(httppost);
var resEntity=response.getEntity$();
if (resEntity != null ) {
var r=Clazz.new_([Clazz.new_([resEntity.getContent$()],$I$(8,1).c$$java_io_InputStream)],$I$(7,1).c$$java_io_Reader);
return r;
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'doHttpMpartFilePost$S$java_util_List$S$java_io_File$S',  function (postUrl, vals, fparm, file, mtype) {
var httpclient=Clazz.new_($I$(4,1));
var httppost=Clazz.new_($I$(5,1).c$$S,[postUrl]);
var mpe=Clazz.new_([$I$(10).BROWSER_COMPATIBLE],$I$(9,1).c$$org_apache_http_entity_mime_HttpMultipartMode);
for (var nvp, $nvp = vals.iterator$(); $nvp.hasNext$()&&((nvp=($nvp.next$())),1);) {
mpe.addPart$S$org_apache_http_entity_mime_content_ContentBody(nvp.getName$(), Clazz.new_([nvp.getValue$()],$I$(11,1).c$$S));
}
var fb=Clazz.new_([file, mtype != null  ? mtype : "application/octet-stream"],$I$(12,1).c$$java_io_File$S);
mpe.addPart$S$org_apache_http_entity_mime_content_ContentBody(fparm, fb);
var ue=Clazz.new_($I$(6,1).c$$java_util_List$S,[vals, "UTF-8"]);
httppost.setEntity$org_apache_http_HttpEntity(ue);
var response=httpclient.execute$org_apache_http_client_methods_HttpUriRequest(httppost);
var resEntity=response.getEntity$();
if (resEntity != null ) {
var r=Clazz.new_([Clazz.new_([resEntity.getContent$()],$I$(8,1).c$$java_io_InputStream)],$I$(7,1).c$$java_io_Reader);
return r;
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'doHttpMpartInputstreamPost$S$java_util_List$S$S$java_io_InputStream$S',  function (postUrl, vals, fparm, fname, is, mtype) {
var httpclient=Clazz.new_($I$(4,1));
var httppost=Clazz.new_($I$(5,1).c$$S,[postUrl]);
var mpe=Clazz.new_([$I$(10).STRICT],$I$(9,1).c$$org_apache_http_entity_mime_HttpMultipartMode);
for (var nvp, $nvp = vals.iterator$(); $nvp.hasNext$()&&((nvp=($nvp.next$())),1);) {
mpe.addPart$S$org_apache_http_entity_mime_content_ContentBody(nvp.getName$(), Clazz.new_([nvp.getValue$()],$I$(11,1).c$$S));
}
var fb=(mtype != null ) ? Clazz.new_($I$(13,1).c$$java_io_InputStream$S$S,[is, fname, mtype]) : Clazz.new_($I$(13,1).c$$java_io_InputStream$S,[is, fname]);
mpe.addPart$S$org_apache_http_entity_mime_content_ContentBody(fparm, fb);
var ue=Clazz.new_($I$(6,1).c$$java_util_List$S,[vals, "UTF-8"]);
httppost.setEntity$org_apache_http_HttpEntity(ue);
var response=httpclient.execute$org_apache_http_client_methods_HttpUriRequest(httppost);
var resEntity=response.getEntity$();
if (resEntity != null ) {
var r=Clazz.new_([Clazz.new_([resEntity.getContent$()],$I$(8,1).c$$java_io_InputStream)],$I$(7,1).c$$java_io_Reader);
return r;
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'doHttpGet$S$java_util_List$I$I',  function (url, vals, connectionTimeoutMs, readTimeoutMs) {
var params=Clazz.new_($I$(1,1));
params.setParameter$S$O("http.protocol.version", $I$(2).HTTP_1_1);
if (connectionTimeoutMs > 0) {
$I$(3).setConnectionTimeout$org_apache_http_params_HttpParams$I(params, connectionTimeoutMs);
}if (readTimeoutMs > 0) {
$I$(3).setSoTimeout$org_apache_http_params_HttpParams$I(params, readTimeoutMs);
}var first=true;
for (var param, $param = vals.iterator$(); $param.hasNext$()&&((param=($param.next$())),1);) {
if (first) {
url+="?";
} else {
url+="&";
}url+=param.getName$();
url+="=";
url+=param.getValue$();
}
var httpclient=Clazz.new_($I$(4,1).c$$org_apache_http_params_HttpParams,[params]);
var httpGet=Clazz.new_($I$(14,1).c$$S,[url]);
var response=httpclient.execute$org_apache_http_client_methods_HttpUriRequest(httpGet);
var resEntity=response.getEntity$();
if (resEntity != null ) {
var r=Clazz.new_([Clazz.new_([resEntity.getContent$()],$I$(8,1).c$$java_io_InputStream)],$I$(7,1).c$$java_io_Reader);
return r;
} else {
return null;
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
