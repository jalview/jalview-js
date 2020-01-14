(function(){var P$=Clazz.newPackage("jalview.urls"),p$1={},I$=[[0,'java.util.Vector','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UrlProvider", null, null, 'jalview.urls.api.UrlProviderI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.providers=null;
this.customProvider=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_List', function (defaultUrlString, allProviders) {
C$.$init$.apply(this);
this.providers=allProviders;
this.customProvider=p$1.findCustomProvider.apply(this, []);
if (!this.contains$S(defaultUrlString)) {
this.choosePrimaryUrl$();
} else {
this.setPrimaryUrl$S(defaultUrlString);
}}, 1);

Clazz.newMeth(C$, 'findCustomProvider', function () {
for (var p, $p = this.providers.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (Clazz.instanceOf(p, "jalview.urls.CustomUrlProvider")) {
return p;
}}
System.out.println$S("Error initialising UrlProvider - no custom url provider");
return null;
}, p$1);

Clazz.newMeth(C$, 'setPrimaryUrl$S', function (id) {
var outcome=false;
for (var p, $p = this.providers.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (p.setPrimaryUrl$S(id)) {
outcome=true;
}}
if (!outcome) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return outcome;
});

Clazz.newMeth(C$, 'contains$S', function (id) {
var outcome=false;
for (var p, $p = this.providers.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (p.contains$S(id)) {
outcome=true;
}}
return outcome;
});

Clazz.newMeth(C$, 'writeUrlsAsString$Z', function (selected) {
var result="";
for (var p, $p = this.providers.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
var next=p.writeUrlsAsString$Z(selected);
if (!next.isEmpty$()) {
result += next;
result += "|";
}}
if (!result.isEmpty$()) {
result=result.substring$I$I(0, result.length$() - 1);
}return result;
});

Clazz.newMeth(C$, 'getLinksForMenu$', function () {
var fullLinks=Clazz.new_($I$(1));
for (var p, $p = this.providers.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
var links=p.getLinksForMenu$();
if (links != null ) {
fullLinks.addAll$java_util_Collection(links);
}}
return fullLinks;
});

Clazz.newMeth(C$, 'getLinksForTable$', function () {
var displayLinks=Clazz.new_($I$(2));
for (var p, $p = this.providers.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
displayLinks.addAll$java_util_Collection(p.getLinksForTable$());
}
return displayLinks;
});

Clazz.newMeth(C$, 'setUrlData$java_util_List', function (links) {
for (var p, $p = this.providers.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
p.setUrlData$java_util_List(links);
}
});

Clazz.newMeth(C$, 'getPrimaryUrl$S', function (seqid) {
var link=null;
for (var p, $p = this.providers.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (p.getPrimaryUrl$S(seqid) == null ) {
continue;
} else {
link=p.getPrimaryUrl$S(seqid);
break;
}}
return link;
});

Clazz.newMeth(C$, 'getPrimaryUrlId$', function () {
var id=null;
for (var p, $p = this.providers.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (p.getPrimaryUrlId$() == null ) {
continue;
} else {
id=p.getPrimaryUrlId$();
break;
}}
return id;
});

Clazz.newMeth(C$, 'getPrimaryTarget$S', function (seqid) {
var target=null;
for (var p, $p = this.providers.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (p.getPrimaryTarget$S(seqid) == null ) {
continue;
} else {
target=p.getPrimaryTarget$S(seqid);
break;
}}
return target;
});

Clazz.newMeth(C$, 'choosePrimaryUrl$', function () {
return this.customProvider.choosePrimaryUrl$();
});

Clazz.newMeth(C$, 'isUserEntry$S', function (id) {
return this.customProvider.isUserEntry$S(id);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
