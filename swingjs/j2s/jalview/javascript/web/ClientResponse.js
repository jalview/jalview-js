(function(){var P$=Clazz.newPackage("jalview.javascript.web"),I$=[[0,'jalview.util.Platform','jalview.javascript.json.JSON','java.util.Map']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ClientResponse");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.responseCode=-1;
},1);

C$.$fields$=[['Z',['isJSON'],'I',['responseCode'],'S',['response'],'O',['jsonData','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$java_net_URL$SA',  function (url, encoding) {
;C$.$init$.apply(this);
this.response=$I$(1,"getFileAsString$S",[url.toString()]);
this.responseCode=(this.response == null  || this.response === ""   ? 404 : 200);
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

Clazz.newMeth(C$, 'getEntity$Class',  function (c) {
if (c === Clazz.getClass($I$(3),['clear$','compute$O$java_util_function_BiFunction','computeIfAbsent$O$java_util_function_Function','computeIfPresent$O$java_util_function_BiFunction','containsKey$O','containsValue$O','copyOf$java_util_Map','entry$O$O','entrySet$','equals$O','forEach$java_util_function_BiConsumer','get$O','getOrDefault$O$O','hashCode$','isEmpty$','keySet$','merge$O$O$java_util_function_BiFunction','of$','of$O$O','of$O$O$O$O','of$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O','of$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O$O','ofEntries$java_util_Map_EntryA','put$O$O','putAll$java_util_Map','putIfAbsent$O$O','remove$O','remove$O$O','replace$O$O','replace$O$O$O','replaceAll$java_util_function_BiFunction','size$','values$']) ) {
return this.jsonData;
}return this.response;
});

Clazz.newMeth(C$, 'getStatus$',  function () {
return this.responseCode;
});

Clazz.newMeth(C$, 'getJSONData$',  function () {
return this.jsonData;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
