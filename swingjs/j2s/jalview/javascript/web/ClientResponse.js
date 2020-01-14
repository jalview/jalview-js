(function(){var P$=Clazz.newPackage("jalview.javascript.web"),I$=[[0,'jalview.util.Platform','jalview.javascript.json.JSON','java.util.Map']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ClientResponse");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.response=null;
this.isJSON=false;
this.jsonData=null;
this.responseCode=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.responseCode=-1;
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL$SA', function (url, encoding) {
C$.$init$.apply(this);
this.response=$I$(1).getFileAsString$S(url.toString());
this.responseCode=(this.response == null  || this.response == ""  ? 404 : 200);
this.isJSON=encoding[0].equals$O("application/json");
if (this.isJSON) {
try {
this.jsonData=$I$(2).parse$O(this.response);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.jsonData=null;
} else {
throw e;
}
}
if (this.jsonData == null ) {
this.responseCode=400;
}}}, 1);

Clazz.newMeth(C$, 'getEntity$Class', function (c) {
if (c === Clazz.getClass($I$(3),['clear$','compute$TK$java_util_function_BiFunction','computeIfAbsent$TK$java_util_function_Function','computeIfPresent$TK$java_util_function_BiFunction','containsKey$O','containsValue$O','entrySet$','equals$O','forEach$java_util_function_BiConsumer','get$O','getOrDefault$O$TV','hashCode$','isEmpty$','keySet$','merge$TK$TV$java_util_function_BiFunction','put$TK$TV','putAll$java_util_Map','putIfAbsent$TK$TV','remove$O','remove$O$O','replace$TK$TV','replace$TK$TV$TV','replaceAll$java_util_function_BiFunction','size$','values$']) ) {
return this.jsonData;
}return this.response;
});

Clazz.newMeth(C$, 'getStatus$', function () {
return this.responseCode;
});

Clazz.newMeth(C$, 'getJSONData$', function () {
return this.jsonData;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
