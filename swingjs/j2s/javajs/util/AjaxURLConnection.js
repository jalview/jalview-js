(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'java.util.Hashtable',['javajs.util.AjaxURLConnection','.AjaxHttpsURLConnection'],'java.io.ByteArrayOutputStream','javajs.util.Rdr']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AjaxURLConnection", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.net.HttpURLConnection');
C$.$classes$=[['AjaxHttpsURLConnection',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.postOut="";
},1);

C$.$fields$=[['S',['postOut'],'O',['bytesOut','byte[]','streamOut','java.io.ByteArrayOutputStream','ajax','java.lang.Object','+info']]
,['O',['urlCache','java.util.Map','NETWORK_ERROR','int[]']]]

Clazz.newMeth(C$, 'newConnection$java_net_URL', function (url) {
return (url.getProtocol$() === "https"  ? Clazz.new_($I$(2,1).c$$java_net_URL,[url]) : Clazz.new_(C$.c$$java_net_URL,[url]));
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL', function (url) {
;C$.superclazz.c$$java_net_URL.apply(this,[url]);C$.$init$.apply(this);
this.ajax=url.ajax ||null;
}, 1);

Clazz.newMeth(C$, 'getHeaderField$S', function (name) {
return this.info && this.info.xhr && this.info.xhr.getResponseHeader(name) ||null;
});

Clazz.newMeth(C$, 'doAjax$Z', function (isBinary) {
p$1.getBytesOut.apply(this, []);
var J2S=self.J2S ||null;
var info=null;

info = this.ajax || {};
if (!info.dataType) { info.isBinary = !!isBinary;
}
this.info=info;
var map=this.getRequestProperties$();
var isnocache=false;
var type=null;
if (map != null ) {
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
switch (key.toLowerCase$()) {
case "content-type":
type=e.getValue$().get$I(0);
break;
case "cache-control":
isnocache=e.getValue$().get$I(0).equalsIgnoreCase$S("no-cache");
break;
}
var s="";
var values=e.getValue$();
for (var i=0; i < values.size$(); i++) {
s += (i == 0 ? "" : ", ") + values.get$I(i);
}
if (s.length$() > 0) {

info.headers || (info.headers = {});
//info.headers[key] = s;
}}
}if ("application/json".equals$O(type)) {

info.contentType = false;
}var myURL=this.url.toString();
var result=J2S.doAjax(myURL, this.postOut, this.bytesOut, info);
var isEmpty=false;

isEmpty = (!result || result.length == 2 && result[0] == 13 && result[1] == 10);
if (isEmpty) result = new Int8Array;
this.responseCode=isEmpty ? 404 : info.xhr.status ||0;
return result;
}, p$1);

Clazz.newMeth(C$, 'connect$', function () {
});

Clazz.newMeth(C$, 'outputBytes$BA', function (bytes) {
this.bytesOut=bytes;
});

Clazz.newMeth(C$, 'getBytesOut', function () {
if (this.streamOut != null ) {
this.bytesOut=this.streamOut.toByteArray$();
this.streamOut=null;
}return this.bytesOut;
}, p$1);

Clazz.newMeth(C$, 'outputString$S', function (post) {
this.postOut=post;
});

Clazz.newMeth(C$, 'getOutputStream$', function () {
return this.streamOut=Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getInputStream$', function () {
if (this.is != null ) return this.is;
this.responseCode=-1;
this.is=p$1.getInputStreamAndResponse$Z.apply(this, [false]);
if (this.is == null ) throw Clazz.new_(Clazz.load('java.io.FileNotFoundException').c$$S,["opening " + this.url]);
return this.is;
});

Clazz.newMeth(C$, 'getInputStreamAndResponse$Z', function (allowNWError) {
var is=C$.getAttachedStreamData$java_net_URL$Z(this.url, false);
if (is != null  || p$1.doCache.apply(this, []) && (is=p$1.getCachedStream$Z.apply(this, [allowNWError])) != null   ) {
return is;
}is=C$.attachStreamData$java_net_URL$O(this.url, p$1.doAjax$Z.apply(this, [this.ajax == null ]));
if (p$1.doCache.apply(this, []) && is != null  ) {
p$1.isNetworkError$java_io_BufferedInputStream.apply(this, [is]);
p$1.setCachedStream.apply(this, []);
return is;
}if (!p$1.isNetworkError$java_io_BufferedInputStream.apply(this, [is])) {
}return is;
}, p$1);

Clazz.newMeth(C$, 'doCache', function () {
if (!this.useCaches || !this.getRequestMethod$().equals$O("POST") ) {
return this.useCaches;
}var cc=this.getRequestProperty$S("Cache-Control");
return cc == null  || !cc.equals$O("no-cache") ;
}, p$1);

Clazz.newMeth(C$, 'getCachedStream$Z', function (allowNWError) {
var data=C$.urlCache.get$O(p$1.getCacheKey.apply(this, []));
if (data == null ) return null;
var url=this.url;
var isAjax=url.ajax ||false;
var bis=C$.getBIS$O$Z(data, isAjax);
return (!p$1.isNetworkError$java_io_BufferedInputStream.apply(this, [bis]) || allowNWError  ? bis : null);
}, p$1);

Clazz.newMeth(C$, 'getBIS$O$Z', function (data, isJSON) {
if (data == null ) return null;
var bis=$I$(4).toBIS$O(data);
if (isJSON) {

bis._jsonData = data;
}return bis;
}, 1);

Clazz.newMeth(C$, 'setCachedStream', function () {
var data=this.url._streamData ||null;
if (data != null ) {
var code=this.responseCode;

data._responseCode = code;
C$.urlCache.put$O$O(p$1.getCacheKey.apply(this, []), data);
}}, p$1);

Clazz.newMeth(C$, 'getCacheKey', function () {
var key=this.url.toString();
if (this.getRequestMethod$().equals$O("POST")) {
key += (this.postOut != null  ? this.postOut.hashCode$() : 0) | (p$1.getBytesOut.apply(this, []) != null  ? p$1.getBytesOut.apply(this, []).hashCode$() : 0);
}return key;
}, p$1);

Clazz.newMeth(C$, 'isNetworkError$java_io_BufferedInputStream', function (is) {
if (is != null ) {
this.responseCode=200;
if (is._jsonData ||false) return false;
is.mark$I(15);
var bytes=Clazz.array(Byte.TYPE, [13]);
try {
is.read$BA(bytes);
is.reset$();
for (var i=C$.NETWORK_ERROR.length; --i >= 0; ) if (bytes[i] != C$.NETWORK_ERROR[i]) return false;

} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}this.responseCode=404;
return true;
}, p$1);

Clazz.newMeth(C$, 'getAttachedStreamData$java_net_URL$Z', function (url, andDelete) {
var data=null;
var isJSON=false;

data = url._streamData; if (andDelete) url._streamData = null;
isJSON = (data && url.ajax && url.ajax.dataType == "json")
return C$.getBIS$O$Z(data, isJSON);
}, 1);

Clazz.newMeth(C$, 'attachStreamData$java_net_URL$O', function (url, o) {

url._streamData = o;
return C$.getBIS$O$Z(o, url.ajax ||false);
}, 1);

Clazz.newMeth(C$, 'getContents$', function () {
return p$1.doAjax$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'getResponseCode$', function () {
if (this.responseCode == -1) {
try {
p$1.getInputStreamAndResponse$Z.apply(this, [true]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}return this.responseCode;
});

Clazz.newMeth(C$, 'disconnect$', function () {
});

Clazz.newMeth(C$, 'usingProxy$', function () {
return false;
});

Clazz.newMeth(C$, 'getContentLength$', function () {
try {
var is=this.getInputStream$();
return is.available$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return -1;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString', function () {
return (this.url == null  ? "[AjaxURLConnection]" : this.url.toString());
});

C$.$static$=function(){C$.$static$=0;
C$.urlCache=Clazz.new_($I$(1,1));
C$.NETWORK_ERROR=Clazz.array(Integer.TYPE, -1, [78, 101, 116, 119, 111, 114, 107, 69, 114, 114, 111, 114]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AjaxURLConnection, "AjaxHttpsURLConnection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javajs.util.AjaxURLConnection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_net_URL', function (url) {
;C$.superclazz.c$$java_net_URL.apply(this,[url]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
{

C$.implementz = [Clazz.load("javax.net.ssl.HttpsURLConnection")];
};
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
