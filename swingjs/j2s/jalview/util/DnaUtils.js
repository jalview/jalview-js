(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.Collections','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DnaUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'parseLocation$S', function (location) {
if (location.startsWith$S("join(")) {
return C$.parseJoin$S(location);
} else if (location.startsWith$S("complement(")) {
return C$.parseComplement$S(location);
}if (location.startsWith$S("order(")) {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,[location, 0]);
}var range=location.split$S("\\.\\.");
if (range.length == 1 || range.length == 2 ) {
try {
var start=(Integer.valueOf$S(range[0])).intValue$();
var end=range.length == 1 ? start : (Integer.valueOf$S(range[1])).intValue$();
return $I$(1).singletonList$TT(Clazz.array(Integer.TYPE, -1, [start, end]));
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

Clazz.newMeth(C$, 'parseComplement$S', function (location) {
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

Clazz.newMeth(C$, 'parseJoin$S', function (location) {
var ranges=Clazz.new_($I$(2));
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
