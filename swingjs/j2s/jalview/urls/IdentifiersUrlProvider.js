(function(){var P$=Clazz.newPackage("jalview.urls"),p$1={},I$=[[0,'jalview.urls.IdOrgSettings','java.util.ArrayList','java.util.HashMap','java.io.FileReader','jalview.util.JSONUtils','jalview.util.UrlLink','java.util.StringTokenizer','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IdentifiersUrlProvider", null, 'jalview.urls.UrlProviderImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['urls','java.util.HashMap','selectedUrls','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$S',  function (cachedUrlList) {
Clazz.super_(C$, this);
this.urls=p$1.readIdentifiers$S.apply(this, [$I$(1).getDownloadLocation$()]);
this.selectedUrls=Clazz.new_($I$(2,1));
p$1.checkSelectionMatchesUrls$S.apply(this, [cachedUrlList]);
}, 1);

Clazz.newMeth(C$, 'readIdentifiers$S',  function (idFileName) {
var idData=Clazz.new_($I$(3,1));
var errorMessage=null;
try {
var reader=Clazz.new_($I$(4,1).c$$S,[idFileName]);
var key="";
var obj=$I$(5).parse$java_io_Reader(reader);
if (obj.containsKey$O("identifiers.org")) {
key="identifiers.org";
} else if (obj.containsKey$O("Local")) {
key="Local";
} else {
System.out.println$S("Unexpected key returned from identifiers jalview service");
return idData;
}var jsonarray=obj.get$O(key);
for (var i=0; i < jsonarray.size$(); i++) {
var item=jsonarray.get$I(i);
var url=item.get$O("url") + "/" + "$" + "DB_ACCESSION" + "$" ;
var link=Clazz.new_([item.get$O("name"), url, item.get$O("prefix")],$I$(6,1).c$$S$S$S);
idData.put$O$O(item.get$O("id"), link);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"org.json.simple.parser.ParseException")){
errorMessage=e.toString();
idData.clear$();
} else {
throw e;
}
}
if (errorMessage != null ) {
System.err.println$S("IdentifiersUrlProvider: cannot read " + idFileName + ": " + errorMessage );
}return idData;
}, p$1);

Clazz.newMeth(C$, 'checkSelectionMatchesUrls$S',  function (cachedUrlList) {
var st=Clazz.new_($I$(7,1).c$$S$S,[cachedUrlList, "|"]);
while (st.hasMoreElements$()){
var id=st.nextToken$();
if (this.isMiriamId$S(id)) {
if (this.urls.containsKey$O(id)) {
this.selectedUrls.add$O(id);
}}}
this.setPrimaryUrl$S(this.primaryUrl);
}, p$1);

Clazz.newMeth(C$, 'setPrimaryUrl$S',  function (id) {
if (this.urls.containsKey$O(id)) {
this.primaryUrl=id;
} else {
this.primaryUrl=null;
}return this.urls.containsKey$O(id);
});

Clazz.newMeth(C$, 'writeUrlsAsString$Z',  function (selected) {
if (!selected) {
return "";
}var links=Clazz.new_($I$(8,1));
if (!this.selectedUrls.isEmpty$()) {
for (var k, $k = this.selectedUrls.iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
links.append$S(k);
links.append$S("|");
}
links.setLength$I(links.length$() - 1);
}return links.toString();
});

Clazz.newMeth(C$, 'getLinksForMenu$',  function () {
var links=Clazz.new_($I$(2,1));
for (var key, $key = this.selectedUrls.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
links.add$O(this.urls.get$O(key).toStringWithTarget$());
}
return links;
});

Clazz.newMeth(C$, 'getLinksForTable$',  function () {
return C$.superclazz.prototype.getLinksForTable$java_util_HashMap$java_util_ArrayList$Z.apply(this, [this.urls, this.selectedUrls, false]);
});

Clazz.newMeth(C$, 'setUrlData$java_util_List',  function (links) {
this.selectedUrls=Clazz.new_($I$(2,1));
var it=links.iterator$();
while (it.hasNext$()){
var link=it.next$();
if (this.isMiriamId$S(link.getId$())) {
if (this.urls.containsKey$O(link.getId$())) {
if (link.getIsSelected$()) {
this.selectedUrls.add$O(link.getId$());
}if (link.getIsPrimary$()) {
this.setPrimaryUrl$S(link.getId$());
}}}}
});

Clazz.newMeth(C$, 'getPrimaryUrl$S',  function (seqid) {
return C$.superclazz.prototype.getPrimaryUrl$S$java_util_HashMap.apply(this, [seqid, this.urls]);
});

Clazz.newMeth(C$, 'getPrimaryUrlId$',  function () {
return this.primaryUrl;
});

Clazz.newMeth(C$, 'getPrimaryTarget$S',  function (seqid) {
return null;
});

Clazz.newMeth(C$, 'choosePrimaryUrl$',  function () {
return null;
});

Clazz.newMeth(C$, 'contains$S',  function (id) {
return (this.urls.containsKey$O(id));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
