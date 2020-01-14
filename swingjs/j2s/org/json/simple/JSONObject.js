(function(){var P$=Clazz.newPackage("org.json.simple"),I$=[[0,'org.json.simple.JSONValue','java.io.StringWriter','StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSONObject", null, 'java.util.HashMap', ['java.util.Map', 'org.json.simple.JSONAware', 'org.json.simple.JSONStreamAware']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (map) {
C$.superclazz.c$$java_util_Map.apply(this, [map]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'writeJSONString$java_util_Map$java_io_Writer', function (map, out) {
if (map == null ) {
out.write$S("null");
return;
}var first=true;
var iter=map.entrySet$().iterator$();
out.write$I("{".$c());
while (iter.hasNext$()){
if (first) first=false;
 else out.write$I(",".$c());
var entry=iter.next$();
out.write$I("\"".$c());
out.write$S(C$.escape$S(String.valueOf$O(entry.getKey$())));
out.write$I("\"".$c());
out.write$I(":".$c());
$I$(1).writeJSONString$O$java_io_Writer(entry.getValue$(), out);
}
out.write$I("}".$c());
}, 1);

Clazz.newMeth(C$, ['writeJSONString$java_io_Writer','writeJSONString$'], function (out) {
C$.writeJSONString$java_util_Map$java_io_Writer(this, out);
});

Clazz.newMeth(C$, 'toJSONString$java_util_Map', function (map) {
var writer=Clazz.new_($I$(2));
try {
C$.writeJSONString$java_util_Map$java_io_Writer(map, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'toJSONString$', function () {
return C$.toJSONString$java_util_Map(this);
});

Clazz.newMeth(C$, 'toString', function () {
return this.toJSONString$();
});

Clazz.newMeth(C$, 'toString$S$O', function (key, value) {
var sb=Clazz.new_($I$(3));
sb.append$C("\"");
if (key == null ) sb.append$S("null");
 else $I$(1).escape$S$StringBuffer(key, sb);
sb.append$C("\"").append$C(":");
sb.append$S($I$(1).toJSONString$O(value));
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'escape$S', function (s) {
return $I$(1).escape$S(s);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
