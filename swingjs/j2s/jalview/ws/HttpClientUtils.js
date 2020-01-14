(function(){var P$=Clazz.newPackage("jalview.ws"),I$=[[0,'org.apache.http.params.BasicHttpParams','org.apache.http.HttpVersion','org.apache.http.params.HttpConnectionParams','org.apache.http.impl.client.DefaultHttpClient','org.apache.http.client.methods.HttpPost','org.apache.http.client.entity.UrlEncodedFormEntity','java.io.BufferedReader','java.io.InputStreamReader','org.apache.http.entity.mime.MultipartEntity','org.apache.http.entity.mime.HttpMultipartMode','org.apache.http.entity.mime.content.StringBody','org.apache.http.entity.mime.content.FileBody','org.apache.http.entity.mime.content.InputStreamBody']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HttpClientUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'doHttpUrlPost$S$java_util_List$I$I', function (postUrl, vals, connectionTimeoutMs, readTimeoutMs) {
var params=Clazz.new_($I$(1));
params.setParameter$S$O("http.protocol.version", $I$(2).HTTP_1_1);
if (connectionTimeoutMs > 0) {
$I$(3).setConnectionTimeout$org_apache_http_params_HttpParams$I(params, connectionTimeoutMs);
}if (readTimeoutMs > 0) {
$I$(3).setSoTimeout$org_apache_http_params_HttpParams$I(params, readTimeoutMs);
}var httpclient=Clazz.new_($I$(4).c$$org_apache_http_params_HttpParams,[params]);
var httppost=Clazz.new_($I$(5).c$$S,[postUrl]);
var ue=Clazz.new_($I$(6).c$$java_util_List$S,[vals, "UTF-8"]);
httppost.setEntity$org_apache_http_HttpEntity(ue);
var response=httpclient.execute$org_apache_http_client_methods_HttpUriRequest(httppost);
var resEntity=response.getEntity$();
if (resEntity != null ) {
var r=Clazz.new_($I$(7).c$$java_io_Reader,[Clazz.new_($I$(8).c$$java_io_InputStream,[resEntity.getContent$()])]);
return r;
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'doHttpMpartFilePost$S$java_util_List$S$java_io_File$S', function (postUrl, vals, fparm, file, mtype) {
var httpclient=Clazz.new_($I$(4));
var httppost=Clazz.new_($I$(5).c$$S,[postUrl]);
var mpe=Clazz.new_($I$(9).c$$org_apache_http_entity_mime_HttpMultipartMode,[$I$(10).BROWSER_COMPATIBLE]);
for (var nvp, $nvp = vals.iterator$(); $nvp.hasNext$()&&((nvp=($nvp.next$())),1);) {
mpe.addPart$S$org_apache_http_entity_mime_content_ContentBody(nvp.getName$(), Clazz.new_($I$(11).c$$S,[nvp.getValue$()]));
}
var fb=Clazz.new_($I$(12).c$$java_io_File$S,[file, mtype != null  ? mtype : "application/octet-stream"]);
mpe.addPart$S$org_apache_http_entity_mime_content_ContentBody(fparm, fb);
var ue=Clazz.new_($I$(6).c$$java_util_List$S,[vals, "UTF-8"]);
httppost.setEntity$org_apache_http_HttpEntity(ue);
var response=httpclient.execute$org_apache_http_client_methods_HttpUriRequest(httppost);
var resEntity=response.getEntity$();
if (resEntity != null ) {
var r=Clazz.new_($I$(7).c$$java_io_Reader,[Clazz.new_($I$(8).c$$java_io_InputStream,[resEntity.getContent$()])]);
return r;
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'doHttpMpartInputstreamPost$S$java_util_List$S$S$java_io_InputStream$S', function (postUrl, vals, fparm, fname, is, mtype) {
var httpclient=Clazz.new_($I$(4));
var httppost=Clazz.new_($I$(5).c$$S,[postUrl]);
var mpe=Clazz.new_($I$(9).c$$org_apache_http_entity_mime_HttpMultipartMode,[$I$(10).STRICT]);
for (var nvp, $nvp = vals.iterator$(); $nvp.hasNext$()&&((nvp=($nvp.next$())),1);) {
mpe.addPart$S$org_apache_http_entity_mime_content_ContentBody(nvp.getName$(), Clazz.new_($I$(11).c$$S,[nvp.getValue$()]));
}
var fb=(mtype != null ) ? Clazz.new_($I$(13).c$$java_io_InputStream$S$S,[is, fname, mtype]) : Clazz.new_($I$(13).c$$java_io_InputStream$S,[is, fname]);
mpe.addPart$S$org_apache_http_entity_mime_content_ContentBody(fparm, fb);
var ue=Clazz.new_($I$(6).c$$java_util_List$S,[vals, "UTF-8"]);
httppost.setEntity$org_apache_http_HttpEntity(ue);
var response=httpclient.execute$org_apache_http_client_methods_HttpUriRequest(httppost);
var resEntity=response.getEntity$();
if (resEntity != null ) {
var r=Clazz.new_($I$(7).c$$java_io_Reader,[Clazz.new_($I$(8).c$$java_io_InputStream,[resEntity.getContent$()])]);
return r;
} else {
return null;
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
