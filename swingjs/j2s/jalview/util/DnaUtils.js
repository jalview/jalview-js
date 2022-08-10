(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.Collections','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DnaUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parseLocation$S',  function (location) {
location=location.trim$();
if (location.startsWith$S("join(")) {
return C$.parseJoin$S(location);
} else if (location.startsWith$S("complement(")) {
return C$.parseComplement$S(location);
}if (location.startsWith$S("order(")) {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,[location, 0]);
}var range=location.split$S("\\.\\.");
if (range.length == 1 || range.length == 2 ) {
try {
var start=(Integer.valueOf$S(range[0])).$c();
var end=range.length == 1 ? start : (Integer.valueOf$S(range[1])).$c();
return $I$(1,"singletonList$O",[Clazz.array(Integer.TYPE, -1, [start, end])]);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,[location, 0]);
} else {
throw e;
}
}
} else {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,[location, 0]);
}}, 1);

Clazz.newMeth(C$, 'parseComplement$S',  function (location) {
if (!location.endsWith$S(")")) {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,[location, 0]);
}var toComplement=location.substring$I$I("complement(".length$(), location.length$() - 1);
var ranges=C$.parseLocation$S(toComplement);
$I$(1).reverse$java_util_List(ranges);
for (var range, $range = ranges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var temp=range[0];
range[0]=range[1];
range[1]=temp;
}
return ranges;
}, 1);

Clazz.newMeth(C$, 'parseJoin$S',  function (location) {
var ranges=Clazz.new_($I$(2,1));
if (!location.endsWith$S(")")) {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,[location, 0]);
}var joinedLocs=location.substring$I$I("join(".length$(), location.length$() - 1);
var locations=joinedLocs.split$S(",");
for (var loc, $loc = 0, $$loc = locations; $loc<$$loc.length&&((loc=($$loc[$loc])),1);$loc++) {
var range=C$.parseLocation$S(loc);
ranges.addAll$java_util_Collection(range);
}
return ranges;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
