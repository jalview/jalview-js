(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.OC','javajs.util.PT','java.lang.reflect.Array']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSONWriter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.indent=0;
this.writeNullAsString=false;
},1);

C$.$fields$=[['Z',['writeNullAsString'],'I',['indent'],'O',['oc','javajs.util.OC','modifiedKeys','java.util.Map']]]

Clazz.newMeth(C$, 'setModifyKeys$java_util_Map', function (mapNewToOld) {
this.modifiedKeys=mapNewToOld;
});

Clazz.newMeth(C$, 'setWriteNullAsString$Z', function (b) {
this.writeNullAsString=b;
});

Clazz.newMeth(C$, 'append$S', function (s) {
if (s != null ) this.oc.append$S("\t\t\t\t\t\t\t\t\t\t\t\t\t\t".substring$I$I(0, Math.min(this.indent, "\t\t\t\t\t\t\t\t\t\t\t\t\t\t".length$()))).append$S(s);
return this.oc;
});

Clazz.newMeth(C$, 'setStream$java_io_OutputStream', function (os) {
this.oc=Clazz.new_($I$(1,1)).setParams$javajs_api_BytePoster$S$Z$java_io_OutputStream(null, null, true, os);
});

Clazz.newMeth(C$, 'closeStream$', function () {
this.oc.closeChannel$();
return true;
});

Clazz.newMeth(C$, 'writeObject$O', function (o) {
if (o == null ) {
this.writeNull$();
} else if (Clazz.instanceOf(o, "java.util.Map")) {
this.writeMap$java_util_Map(o);
} else if (Clazz.instanceOf(o, "java.util.List")) {
this.writeList$java_util_List(o);
} else if (Clazz.instanceOf(o, "java.lang.String")) {
this.writeString$S(o);
} else if (Clazz.instanceOf(o, "java.lang.Boolean")) {
this.writeBoolean$Boolean(o);
} else if (Clazz.instanceOf(o, "java.lang.Number")) {
this.writeNumber$Number(o);
} else if (o.getClass$().isArray$()) {
this.writeArray$O(o);
} else if (Clazz.instanceOf(o, "org.jmol.script.SV")) {
this.append$S((o).toJSON$());
} else {
this.writeString$S(o.toString());
}});

Clazz.newMeth(C$, 'writeNull$', function () {
this.oc.append$S(this.writeNullAsString ? "\"null\"" : "null");
});

Clazz.newMeth(C$, 'writeNumber$Number', function (o) {
var s=o.toString();
if (s.equals$O("NaN")) {
this.writeString$S(s);
} else {
this.oc.append$S(s);
}});

Clazz.newMeth(C$, 'writeBoolean$Boolean', function (o) {
this.oc.append$S(o.toString());
});

Clazz.newMeth(C$, 'writeString$S', function (str) {
this.oc.append$S($I$(2).esc$S(str));
});

Clazz.newMeth(C$, 'writeString$S$javajs_util_SB', function (str, sbSym) {
sbSym.append$S($I$(2).esc$S(str));
});

Clazz.newMeth(C$, 'writeMap$java_util_Map', function (map) {
if (map.isEmpty$()) {
this.append$S("{}");
return;
}this.mapOpen$();
{
var sep="";
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var value=this.getAndCheckValue$java_util_Map$S(map, key);
if (value == null ) continue;
this.oc.append$S(sep);
this.mapAddKeyValue$S$O$S(key, value, null);
sep=",\n";
}
}this.mapClose$();
});

Clazz.newMeth(C$, 'getAndCheckValue$java_util_Map$S', function (map, key) {
return map.get$O(key);
});

Clazz.newMeth(C$, 'mapOpen$', function () {
this.oc.append$S("{\n");
this.indent++;
});

Clazz.newMeth(C$, 'mapClose$', function () {
this.indent--;
this.oc.append$S("\n");
this.append$S("}");
});

Clazz.newMeth(C$, 'mapAddKey$S', function (key) {
this.append$S("");
if (this.modifiedKeys != null  && this.modifiedKeys.containsKey$O(key) ) key=this.modifiedKeys.get$O(key);
this.writeString$S(key);
this.oc.append$S(":");
});

Clazz.newMeth(C$, 'mapAddKeyValue$S$O$S', function (key, value, terminator) {
this.mapAddKey$S(key);
this.writeObject$O(value);
if (terminator != null ) this.oc.append$S(terminator);
});

Clazz.newMeth(C$, 'mapAddKeyValueRaw$S$O$S', function (key, value, terminator) {
this.mapAddKey$S(key);
this.oc.append$S(value.toString());
if (terminator != null ) this.oc.append$S(terminator);
});

Clazz.newMeth(C$, 'mapAddMapAllExcept$S$java_util_Map$S', function (key, map, except) {
this.mapAddKey$S(key);
this.mapOpen$();
{
var sep="";
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key1=entry.getKey$();
if ($I$(2).isOneOf$S$S(key1, except)) continue;
this.oc.append$S(sep);
this.mapAddKeyValue$S$O$S(key1, entry.getValue$(), null);
sep=",\n";
}
}this.mapClose$();
});

Clazz.newMeth(C$, 'writeList$java_util_List', function (list) {
var n=list.size$();
this.arrayOpen$Z(false);
for (var i=0; i < n; i++) {
if (i > 0) this.oc.append$S(",");
this.arrayAdd$O(list.get$I(i));
}
this.arrayClose$Z(false);
});

Clazz.newMeth(C$, 'writeArray$O', function (o) {
this.arrayOpen$Z(false);
var n=$I$(3).getLength$O(o);
for (var i=0; i < n; i++) {
if (i > 0) this.oc.append$S(",");
this.arrayAdd$O($I$(3).get$O$I(o, i));
}
this.arrayClose$Z(false);
});

Clazz.newMeth(C$, 'arrayOpen$Z', function (andIndent) {
this.oc.append$S("[");
if (andIndent) this.indent++;
});

Clazz.newMeth(C$, 'arrayAdd$O', function (o) {
this.writeObject$O(Clazz.instanceOf(o, "java.lang.Float") && (o).isNaN$()  || Clazz.instanceOf(o, "java.lang.Double") && (o).isNaN$()   ? "NaN" : o);
});

Clazz.newMeth(C$, 'arrayClose$Z', function (andIndent) {
if (andIndent) {
this.indent--;
this.append$S("");
}this.oc.append$S("]");
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
