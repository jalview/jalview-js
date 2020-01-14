(function(){var P$=Clazz.newPackage("jalview.urls"),p$1={},I$=[[0,'java.util.HashMap','java.util.StringTokenizer','jalview.util.UrlLink','java.util.ArrayList','StringBuffer','jalview.util.MessageManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CustomUrlProvider", null, 'jalview.urls.UrlProviderImpl');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.selectedUrls=null;
this.nonselectedUrls=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (inMenuUrlList, storedUrlList) {
Clazz.super_(C$, this,1);
try {
this.selectedUrls=p$1.parseUrlStrings$S.apply(this, [inMenuUrlList]);
this.nonselectedUrls=p$1.parseUrlStrings$S.apply(this, [storedUrlList]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S(ex.getMessage$() + "\nError parsing sequence links");
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map$java_util_Map', function (inMenuUrlList, storedUrlList) {
Clazz.super_(C$, this,1);
try {
this.selectedUrls=p$1.parseUrlList$java_util_Map.apply(this, [inMenuUrlList]);
this.nonselectedUrls=p$1.parseUrlList$java_util_Map.apply(this, [storedUrlList]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S(ex.getMessage$() + "\nError parsing sequence links");
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'parseUrlStrings$S', function (urlStrings) {
var urls=Clazz.new_($I$(1));
var st=Clazz.new_($I$(2).c$$S$S,[urlStrings, "|"]);
while (st.hasMoreElements$()){
var name=st.nextToken$().trim$();
if (!this.isMiriamId$S(name)) {
var url=st.nextToken$();
var rxstart=url.indexOf$S("$DB_ACCESSION$");
if (rxstart == -1) {
rxstart=url.indexOf$S("$SEQUENCE_ID$");
}while (rxstart == -1 && url.indexOf$S("/=$") == -1  && st.hasMoreTokens$() ){
url=url + "|" + st.nextToken$() ;
}
url=url.trim$();
urls.put$TK$TV(name, Clazz.new_($I$(3).c$$S$S$S,[name, url, name]));
}}
p$1.upgradeOldLinks$java_util_HashMap.apply(this, [urls]);
return urls;
}, p$1);

Clazz.newMeth(C$, 'parseUrlList$java_util_Map', function (urlList) {
var urls=Clazz.new_($I$(1));
if (urlList == null ) {
return urls;
}var it=urlList.entrySet$().iterator$();
while (it.hasNext$()){
var pair=it.next$();
urls.put$TK$TV(pair.getKey$(), Clazz.new_($I$(3).c$$S$S$S,[pair.getKey$(), pair.getValue$(), pair.getKey$()]));
}
p$1.upgradeOldLinks$java_util_HashMap.apply(this, [urls]);
return urls;
}, p$1);

Clazz.newMeth(C$, 'upgradeOldLinks$java_util_HashMap', function (urls) {
var upgrade=false;
if (urls.containsKey$O("SRS")) {
urls.remove$O("SRS");
upgrade=true;
}if (urls.containsKey$O("EMBL-EBI Search")) {
urls.remove$O("EMBL-EBI Search");
upgrade=true;
}if (upgrade) {
var link=Clazz.new_($I$(3).c$$S,["EMBL-EBI Search|https://www.ebi.ac.uk/ebisearch/search.ebi?db=allebi&query=$SEQUENCE_ID$"]);
link.setLabel$S("EMBL-EBI Search");
urls.put$TK$TV("EMBL-EBI Search", link);
}}, p$1);

Clazz.newMeth(C$, 'getLinksForMenu$', function () {
var links=Clazz.new_($I$(4));
var it=this.selectedUrls.entrySet$().iterator$();
while (it.hasNext$()){
var pair=it.next$();
links.add$TE(pair.getValue$().toString());
}
return links;
});

Clazz.newMeth(C$, 'getLinksForTable$', function () {
var displayLinks=Clazz.new_($I$(4));
displayLinks=p$1.getLinksForTable$java_util_HashMap$Z.apply(this, [this.selectedUrls, true]);
displayLinks.addAll$java_util_Collection(p$1.getLinksForTable$java_util_HashMap$Z.apply(this, [this.nonselectedUrls, false]));
return displayLinks;
});

Clazz.newMeth(C$, 'getLinksForTable$java_util_HashMap$Z', function (urlList, selected) {
return C$.superclazz.prototype.getLinksForTable$java_util_HashMap$java_util_ArrayList$Z.apply(this, [urlList, null, selected]);
}, p$1);

Clazz.newMeth(C$, 'setPrimaryUrl$S', function (id) {
if (this.selectedUrls.containsKey$O(id)) {
this.primaryUrl=id;
} else if (this.nonselectedUrls.containsKey$O(id)) {
this.primaryUrl=id;
} else {
this.primaryUrl=null;
}return (this.primaryUrl != null );
});

Clazz.newMeth(C$, 'writeUrlsAsString$Z', function (selected) {
var links=Clazz.new_($I$(5));
var urls;
if (selected) {
urls=this.selectedUrls;
} else {
urls=this.nonselectedUrls;
}if (urls.size$() > 0) {
for (var entry, $entry = urls.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
links.append$S(entry.getValue$().toString());
links.append$S("|");
}
links.setLength$I(links.length$() - 1);
} else {
urls.clear$();
}return links.toString();
});

Clazz.newMeth(C$, 'getPrimaryUrl$S', function (seqid) {
var result=C$.superclazz.prototype.getPrimaryUrl$S$java_util_HashMap.apply(this, [seqid, this.selectedUrls]);
if (result == null ) {
result=C$.superclazz.prototype.getPrimaryUrl$S$java_util_HashMap.apply(this, [seqid, this.nonselectedUrls]);
}return result;
});

Clazz.newMeth(C$, 'getPrimaryUrlId$', function () {
return this.primaryUrl;
});

Clazz.newMeth(C$, 'getPrimaryTarget$S', function (seqid) {
return this.selectedUrls.get$O(this.primaryUrl).getTarget$();
});

Clazz.newMeth(C$, 'setUrlData$java_util_List', function (links) {
var unselurls=Clazz.new_($I$(1));
var selurls=Clazz.new_($I$(1));
var it=links.iterator$();
while (it.hasNext$()){
var link=it.next$();
if (!this.isMiriamId$S(link.getId$())) {
if (unselurls.containsKey$O(link.getId$()) || selurls.containsKey$O(link.getId$()) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).formatMessage$S$OA("exception.url_cannot_have_duplicate_id", [link.getId$()])]);
}if (link.getIsSelected$()) {
selurls.put$TK$TV(link.getId$(), Clazz.new_($I$(3).c$$S$S$S,[link.getDescription$(), link.getUrl$(), link.getDescription$()]));
} else {
unselurls.put$TK$TV(link.getId$(), Clazz.new_($I$(3).c$$S$S$S,[link.getDescription$(), link.getUrl$(), link.getDescription$()]));
}if (link.getIsPrimary$()) {
this.setPrimaryUrl$S(link.getId$());
}}}
this.nonselectedUrls=unselurls;
this.selectedUrls=selurls;
});

Clazz.newMeth(C$, 'choosePrimaryUrl$', function () {
if ((!this.nonselectedUrls.containsKey$O("EMBL-EBI Search")) && (!this.selectedUrls.containsKey$O("EMBL-EBI Search")) ) {
var link=Clazz.new_($I$(3).c$$S,["EMBL-EBI Search|https://www.ebi.ac.uk/ebisearch/search.ebi?db=allebi&query=$SEQUENCE_ID$"]);
link.setLabel$S("EMBL-EBI Search");
this.selectedUrls.put$TK$TV("EMBL-EBI Search", link);
}this.primaryUrl="EMBL-EBI Search";
return "EMBL-EBI Search";
});

Clazz.newMeth(C$, 'contains$S', function (id) {
return (this.selectedUrls.containsKey$O(id) || this.nonselectedUrls.containsKey$O(id) );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
