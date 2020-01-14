(function(){var P$=Clazz.newPackage("jalview.urls"),I$=[[0,'java.util.regex.Pattern','java.util.ArrayList','jalview.urls.UrlLinkDisplay']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UrlProviderImpl", null, null, 'jalview.urls.api.UrlProviderI');
C$.MIRIAM_PATTERN=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.MIRIAM_PATTERN=$I$(1).compile$S("^MIR:\\d{8}$");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.primaryUrl=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPrimaryUrl$S$java_util_HashMap', function (seqid, urls) {
if (seqid.length$() < 4) {
return null;
} else if (this.primaryUrl == null ) {
return null;
} else if (!urls.containsKey$O(this.primaryUrl)) {
return null;
} else {
var url=null;
var urlLink=urls.get$O(this.primaryUrl);
var primaryUrls=urlLink.makeUrls$S$Z(seqid, true);
if (primaryUrls == null  || primaryUrls[0] == null   || primaryUrls[0].length$() < 4 ) {
url=null;
} else {
url=primaryUrls[1];
}return url;
}});

Clazz.newMeth(C$, 'getLinksForTable$', function () {
return null;
});

Clazz.newMeth(C$, 'getLinksForTable$java_util_HashMap$java_util_ArrayList$Z', function (urls, selectedUrls, selected) {
var displayLinks=Clazz.new_($I$(2));
for (var entry, $entry = urls.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var isPrimary=(key.equals$O(this.primaryUrl));
var isSelected;
if (selectedUrls != null ) {
isSelected=selectedUrls.contains$O(key);
} else {
isSelected=selected;
}displayLinks.add$TE(Clazz.new_($I$(3).c$$S$jalview_util_UrlLink$Z$Z,[key, entry.getValue$(), isSelected, isPrimary]));
}
return displayLinks;
});

Clazz.newMeth(C$, 'isMiriamId$S', function (id) {
return C$.MIRIAM_PATTERN.matcher$CharSequence(id).matches$();
});

Clazz.newMeth(C$, 'isUserEntry$S', function (id) {
return !this.isMiriamId$S(id);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
