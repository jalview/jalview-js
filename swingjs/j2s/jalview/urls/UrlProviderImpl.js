(function(){var P$=Clazz.newPackage("jalview.urls"),I$=[[0,'java.util.regex.Pattern','java.util.ArrayList','jalview.urls.UrlLinkDisplay']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UrlProviderImpl", null, null, 'jalview.urls.api.UrlProviderI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['primaryUrl']]
,['O',['MIRIAM_PATTERN','java.util.regex.Pattern']]]

Clazz.newMeth(C$, 'getPrimaryUrl$S$java_util_HashMap',  function (seqid, urls) {
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

Clazz.newMeth(C$, 'getLinksForTable$',  function () {
return null;
});

Clazz.newMeth(C$, 'getLinksForTable$java_util_HashMap$java_util_ArrayList$Z',  function (urls, selectedUrls, selected) {
var displayLinks=Clazz.new_($I$(2,1));
for (var entry, $entry = urls.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var isPrimary=(key.equals$O(this.primaryUrl));
var isSelected;
if (selectedUrls != null ) {
isSelected=selectedUrls.contains$O(key);
} else {
isSelected=selected;
}displayLinks.add$O(Clazz.new_([key, entry.getValue$(), isSelected, isPrimary],$I$(3,1).c$$S$jalview_util_UrlLink$Z$Z));
}
return displayLinks;
});

Clazz.newMeth(C$, 'isMiriamId$S',  function (id) {
return C$.MIRIAM_PATTERN.matcher$CharSequence(id).matches$();
});

Clazz.newMeth(C$, 'isUserEntry$S',  function (id) {
return !this.isMiriamId$S(id);
});

C$.$static$=function(){C$.$static$=0;
C$.MIRIAM_PATTERN=$I$(1).compile$S("^MIR:\\d{8}$");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
