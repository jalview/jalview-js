(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Util");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stripLeadingHyphens$S', function (str) {
if (str == null ) {
return null;
}if (str.startsWith$S("--")) {
return str.substring$I$I(2, str.length$());
} else if (str.startsWith$S("-")) {
return str.substring$I$I(1, str.length$());
}return str;
}, 1);

Clazz.newMeth(C$, 'stripLeadingAndTrailingQuotes$S', function (str) {
var length=str.length$();
if (length > 1 && str.startsWith$S("\"")  && str.endsWith$S("\"")  && str.substring$I$I(1, length - 1).indexOf$I("\"") == -1 ) {
str=str.substring$I$I(1, length - 1);
}return str;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
