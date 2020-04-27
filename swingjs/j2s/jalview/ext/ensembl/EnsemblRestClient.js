(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),p$1={},I$=[[0,'jalview.util.Platform','java.util.HashMap','jalview.ext.ensembl.EnsemblData','java.net.URL','Thread','StringBuilder','java.io.DataOutputStream','jalview.util.StringUtils']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblRestClient", null, 'jalview.ext.ensembl.EnsemblSequenceFetcher');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inProgress=false;
},1);

C$.$fields$=[['Z',['inProgress']]
,['O',['domainData','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
if (!C$.domainData.containsKey$O(this.ensemblDomain)) {
C$.domainData.put$O$O(this.ensemblDomain, Clazz.new_($I$(3,1).c$$S$S,[this.ensemblDomain, "10.0"]));
}if (!C$.domainData.containsKey$O(this.ensemblGenomesDomain)) {
C$.domainData.put$O$O(this.ensemblGenomesDomain, Clazz.new_($I$(3,1).c$$S$S,[this.ensemblGenomesDomain, "10.0"]));
}}, 1);

Clazz.newMeth(C$, 'c$$S', function (d) {
Clazz.super_(C$, this);
this.setDomain$S(d);
}, 1);

Clazz.newMeth(C$, 'queryInProgress$', function () {
return this.inProgress;
});

Clazz.newMeth(C$, 'getRawRecords$', function () {
return null;
});

Clazz.newMeth(C$, 'getRequestMimeType$', function () {
return "application/json";
});

Clazz.newMeth(C$, 'getResponseMimeType$', function () {
return "application/json";
});

Clazz.newMeth(C$, 'checkEnsembl$', function () {
var br=null;
var pingUrl=this.getDomain$() + "/info/ping" + "?content-type=application/json" ;
try {
var val=this.getJSON$java_net_URL$java_util_List$I$I$S(Clazz.new_($I$(4,1).c$$S,[pingUrl]), null, 2000, 1, null);
if (val == null ) {
return false;
}var pingString=val.get$O("ping").toString();
return pingString != null ;
} catch (t) {
System.err.println$S("Error connecting to " + pingUrl + ": " + t.getMessage$() );
} finally {
if (br != null ) {
try {
br.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
return false;
});

Clazz.newMeth(C$, 'getJSON$java_net_URL$java_util_List$I', function (url, ids, readTimeout) {
if (readTimeout < 0) {
readTimeout=300000;
}var retriesLeft=3;
var connection=null;
var responseCode=0;
$I$(1).setAjaxJSON$java_net_URL(url);
while (retriesLeft > 0){
connection=this.tryConnection$java_net_URL$java_util_List$I(url, ids, readTimeout);
responseCode=connection.getResponseCode$();
if (responseCode == 429) {
retriesLeft--;
this.checkRetryAfter$java_net_HttpURLConnection(connection);
} else {
retriesLeft=0;
}}
if (responseCode != 200) {
System.err.println$S("Response code " + responseCode);
return null;
}var response=connection.getInputStream$();
var ret=$I$(1).parseJSON$java_io_InputStream(response);
return ret;
}, p$1);

Clazz.newMeth(C$, 'tryConnection$java_net_URL$java_util_List$I', function (url, ids, readTimeout) {
var connection=url.openConnection$();
var multipleIds=ids != null  && ids.size$() > 1 ;
connection.setRequestMethod$S(multipleIds ? "POST" : "GET");
connection.setRequestProperty$S$S("Content-Type", this.getRequestMimeType$());
connection.setRequestProperty$S$S("Accept", this.getResponseMimeType$());
connection.setDoInput$Z(true);
connection.setDoOutput$Z(multipleIds);
connection.setUseCaches$Z(false);
connection.setConnectTimeout$I(10000);
connection.setReadTimeout$I(readTimeout);
if (multipleIds) {
this.writePostBody$java_net_HttpURLConnection$java_util_List(connection, ids);
}return connection;
});

Clazz.newMeth(C$, 'checkRetryAfter$java_net_HttpURLConnection', function (connection) {
var retryDelay=connection.getHeaderField$S("Retry-After");
if (retryDelay != null ) {
try {
var retrySecs=(Integer.valueOf$S(retryDelay)).valueOf();
if (retrySecs > 0 && retrySecs < 10 ) {
System.err.println$S("Ensembl REST service rate limit exceeded, waiting " + retryDelay + " seconds before retrying" );
$I$(5).sleep$J(1000 * retrySecs);
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException") || Clazz.exceptionOf(e,"InterruptedException")){
System.err.println$S("Error handling Retry-After: " + e.getMessage$());
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'isEnsemblAvailable$', function () {
var info=C$.domainData.get$O(this.getDomain$());
var now=System.currentTimeMillis$();
var retestAvailability=(now - info.lastAvailableCheckTime) > 10000;
if (!info.restAvailable || retestAvailability ) {
info.restAvailable=this.checkEnsembl$();
info.lastAvailableCheckTime=now;
}var refetchVersion=(now - info.lastVersionCheckTime) > 3600000;
if (refetchVersion) {
p$1.checkEnsemblRestVersion.apply(this, []);
p$1.checkEnsemblDataVersion.apply(this, []);
info.lastVersionCheckTime=now;
}return info.restAvailable;
});

Clazz.newMeth(C$, 'writePostBody$java_net_HttpURLConnection$java_util_List', function (connection, ids) {
var first;
var postBody=Clazz.new_($I$(6,1).c$$I,[64]);
postBody.append$S("{\"ids\":[");
first=true;
for (var i=0, n=ids.size$(); i < n; i++) {
var id=ids.get$I(i);
if (!first) {
postBody.append$S(",");
}first=false;
postBody.append$S("\"");
postBody.append$S(id.trim$());
postBody.append$S("\"");
}
postBody.append$S("]}");
var thepostbody=postBody.toString().getBytes$();
connection.setRequestProperty$S$S("Content-Length", Integer.toString$I(thepostbody.length));
var wr=Clazz.new_([connection.getOutputStream$()],$I$(7,1).c$$java_io_OutputStream);
wr.write$BA(thepostbody);
wr.flush$();
wr.close$();
});

Clazz.newMeth(C$, 'getJSON$java_net_URL$java_util_List$I$I$S', function (url, ids, msDelay, mode, mapKey) {
if (url == null ) {
url=this.getUrl$java_util_List(ids);
}var json=(url == null  ? null : p$1.getJSON$java_net_URL$java_util_List$I.apply(this, [url, ids, msDelay]));
if (json != null  && mapKey != null  ) {
json=(json).get$O(mapKey);
}if (json == null ) {
return null;
}switch (mode) {
case 0:
case 1:
break;
case 2:
json=(json).iterator$();
break;
}
return json;
});

Clazz.newMeth(C$, 'checkEnsemblRestVersion', function () {
var info=C$.domainData.get$O(this.getDomain$());
try {
var val=this.getJSON$java_net_URL$java_util_List$I$I$S(Clazz.new_([this.getDomain$() + "/info/rest" + "?content-type=application/json" ],$I$(4,1).c$$S), null, -1, 1, null);
if (val == null ) {
return;
}var version=val.get$O("release").toString();
var majorVersion=version.substring$I$I(0, version.indexOf$S("."));
var expected=info.expectedRestVersion;
var expectedMajorVersion=expected.substring$I$I(0, expected.indexOf$S("."));
info.restMajorVersionMismatch=false;
try {
if ((Float.valueOf$S(majorVersion)).valueOf() > (Float.valueOf$S(expectedMajorVersion)).valueOf() ) {
info.restMajorVersionMismatch=true;
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.err.println$S("Error in REST version: " + e.toString());
} else {
throw e;
}
}
var laterVersion=$I$(8).compareVersions$S$S(version, expected) == 1;
if (laterVersion) {
System.err.println$S(String.format$S$OA("EnsemblRestClient expected %s REST version %s but found %s, see %s", [this.getDbSource$(), expected, version, "https://github.com/Ensembl/ensembl-rest/wiki/Change-log"]));
}info.restVersion=version;
} catch (t) {
System.err.println$S("Error checking Ensembl REST version: " + t.getMessage$());
}
}, p$1);

Clazz.newMeth(C$, 'isRestMajorVersionMismatch$', function () {
return C$.domainData.get$O(this.getDomain$()).restMajorVersionMismatch;
});

Clazz.newMeth(C$, 'checkEnsemblDataVersion', function () {
var val;
try {
val=this.getJSON$java_net_URL$java_util_List$I$I$S(Clazz.new_([this.getDomain$() + "/info/data" + "?content-type=application/json" ],$I$(4,1).c$$S), null, -1, 1, null);
if (val == null ) {
return;
}var versions=val.get$O("releases");
C$.domainData.get$O(this.getDomain$()).dataVersion=versions.get$I(0).toString();
} catch (e) {
System.err.println$S("Error checking Ensembl data version: " + e.getMessage$());
}
}, p$1);

Clazz.newMeth(C$, 'getEnsemblDataVersion$', function () {
return C$.domainData.get$O(this.getDomain$()).dataVersion;
});

Clazz.newMeth(C$, 'getDbVersion$', function () {
return this.getEnsemblDataVersion$();
});

C$.$static$=function(){C$.$static$=0;
{
$I$(1).addJ2SDirectDatabaseCall$S("http://rest.ensembl");
$I$(1).addJ2SDirectDatabaseCall$S("https://rest.ensembl");
};
{
C$.domainData=Clazz.new_($I$(2,1));
C$.domainData.put$O$O("https://rest.ensembl.org", Clazz.new_($I$(3,1).c$$S$S,["https://rest.ensembl.org", "10.0"]));
C$.domainData.put$O$O("https://rest.ensembl.org", Clazz.new_($I$(3,1).c$$S$S,["https://rest.ensembl.org", "10.0"]));
};
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
