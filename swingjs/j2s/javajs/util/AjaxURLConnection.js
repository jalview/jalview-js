(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'java.util.Hashtable',['javajs.util.AjaxURLConnection','.AjaxHttpsURLConnection'],'javajs.util.Rdr']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AjaxURLConnection", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.net.HttpURLConnection');
C$.urlCache=null;
C$.NETWORK_ERROR=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.urlCache=Clazz.new_($I$(1));
C$.NETWORK_ERROR=Clazz.array(Integer.TYPE, -1, [78, 101, 116, 119, 111, 114, 107, 69, 114, 114, 111, 114]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bytesOut=null;
this.postOut=null;
this.ajax=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.postOut="";
}, 1);

Clazz.newMeth(C$, 'newConnection$java_net_URL', function (url) {
return (url.getProtocol$() == "https" ? Clazz.new_($I$(2).c$$java_net_URL,[url]) : Clazz.new_(C$.c$$java_net_URL,[url]));
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL', function (url) {
C$.superclazz.c$$java_net_URL.apply(this, [url]);
C$.$init$.apply(this);
this.ajax=url.ajax ||null;
}, 1);

Clazz.newMeth(C$, 'doAjax$Z', function (isBinary) {
var J2S=self.J2S ||null;
var info=null;

info = this.ajax || {};
if (!info.dataType) { info.isBinary = !!isBinary;
}
var result=J2S.doAjax(this.url.toString(), this.postOut, this.bytesOut, info);
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

Clazz.newMeth(C$, 'outputString$S', function (post) {
this.postOut=post;
});

Clazz.newMeth(C$, 'getInputStream$', function () {
this.responseCode=-1;
var is=p$1.getInputStreamAndResponse$java_net_URL$Z.apply(this, [this.url, false]);
if (is == null ) throw Clazz.new_(Clazz.load('java.io.FileNotFoundException').c$$S,["opening " + this.url]);
return is;
});

Clazz.newMeth(C$, 'getInputStreamAndResponse$java_net_URL$Z', function (url, allowNWError) {
var is=C$.getAttachedStreamData$java_net_URL$Z(url, false);
if (is != null  || this.getUseCaches$() && (is=p$1.getCachedStream$java_net_URL$Z.apply(this, [url, allowNWError])) != null   ) {
return is;
}is=C$.attachStreamData$java_net_URL$O(url, p$1.doAjax$Z.apply(this, [this.ajax == null ]));
if (this.getUseCaches$() && is != null  ) {
p$1.isNetworkError$java_io_BufferedInputStream.apply(this, [is]);
p$1.setCachedStream$java_net_URL.apply(this, [url]);
return is;
}p$1.isNetworkError$java_io_BufferedInputStream.apply(this, [is]);
return is;
}, p$1);

Clazz.newMeth(C$, 'getCachedStream$java_net_URL$Z', function (url, allowNWError) {
var data=C$.urlCache.get$O(url.toString());
if (data == null ) return null;
var isAjax=url.ajax ||false;
var bis=C$.getBIS$O$Z(data, isAjax);
return (!p$1.isNetworkError$java_io_BufferedInputStream.apply(this, [bis]) || allowNWError  ? bis : null);
}, p$1);

Clazz.newMeth(C$, 'getBIS$O$Z', function (data, isJSON) {
if (data == null ) return null;
if (!isJSON) return $I$(3).toBIS$O(data);
var bis=$I$(3).toBIS$O("");

bis._jsonData = data;
return bis;
}, 1);

Clazz.newMeth(C$, 'setCachedStream$java_net_URL', function (url) {
var data=url._streamData ||null;
if (data != null ) {
var code=this.responseCode;

data._responseCode = code;
C$.urlCache.put$TK$TV(url.toString(), data);
}}, p$1);

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

data = url._streamData;
if (andDelete) url._streamData = null;
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
p$1.getInputStreamAndResponse$java_net_URL$Z.apply(this, [this.url, true]);
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
;
(function(){var C$=Clazz.newClass(P$.AjaxURLConnection, "AjaxHttpsURLConnection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javajs.util.AjaxURLConnection');

C$.$clinit$ = function() {Clazz.load(C$, 1);
{

C$.implementz = [Clazz.load("javax.net.ssl.HttpsURLConnection")];
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL', function (url) {
C$.superclazz.c$$java_net_URL.apply(this, [url]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
