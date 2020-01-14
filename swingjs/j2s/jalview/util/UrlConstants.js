(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
var C$=Clazz.newClass(P$, "UrlConstants");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isDefaultString$S', function (link) {
var sublink=link.substring$I(link.indexOf$S(":") + 1);
var subdefault="EMBL-EBI Search|https://www.ebi.ac.uk/ebisearch/search.ebi?db=allebi&query=$SEQUENCE_ID$".substring$I("EMBL-EBI Search|https://www.ebi.ac.uk/ebisearch/search.ebi?db=allebi&query=$SEQUENCE_ID$".indexOf$S(":") + 1);
return sublink.equalsIgnoreCase$S(subdefault);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
