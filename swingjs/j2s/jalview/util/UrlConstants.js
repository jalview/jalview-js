(function(){var P$=Clazz.newPackage("jalview.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UrlConstants");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isDefaultString$S', function (link) {
var sublink=link.substring$I(link.indexOf$S(":") + 1);
var subdefault="EMBL-EBI Search|https://www.ebi.ac.uk/ebisearch/search.ebi?db=allebi&query=$SEQUENCE_ID$".substring$I("EMBL-EBI Search|https://www.ebi.ac.uk/ebisearch/search.ebi?db=allebi&query=$SEQUENCE_ID$".indexOf$S(":") + 1);
return sublink.equalsIgnoreCase$S(subdefault);
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
