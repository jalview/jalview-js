(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.util.Objects','java.time.zone.ZoneRulesProvider','java.time.Ser','java.time.ZoneId']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZoneRegion", null, 'java.time.ZoneId', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['id'],'O',['rules','java.time.zone.ZoneRules']]]

Clazz.newMeth(C$, 'ofId$S$Z', function (zoneId, checkAvailable) {
$I$(1).requireNonNull$O$S(zoneId, "zoneId");
C$.checkName$S(zoneId);
var rules=null;
try {
rules=$I$(2).getRules$S$Z(zoneId, true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.zone.ZoneRulesException")){
if (checkAvailable) {
throw ex;
}} else {
throw ex;
}
}
return Clazz.new_(C$.c$$S$java_time_zone_ZoneRules,[zoneId, rules]);
}, 1);

Clazz.newMeth(C$, 'checkName$S', function (zoneId) {
var n=zoneId.length$();
if (n < 2) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid ID for region-based ZoneId, invalid format: " + zoneId]);
}for (var i=0; i < n; i++) {
var c=zoneId.charAt$I(i);
if (c >= "a" && c <= "z" ) continue;
if (c >= "A" && c <= "Z" ) continue;
if (c == "/" && i != 0 ) continue;
if (c >= "0" && c <= "9"  && i != 0 ) continue;
if (c == "~" && i != 0 ) continue;
if (c == "." && i != 0 ) continue;
if (c == "_" && i != 0 ) continue;
if (c == "+" && i != 0 ) continue;
if (c == "-" && i != 0 ) continue;
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid ID for region-based ZoneId, invalid format: " + zoneId]);
}
}, 1);

Clazz.newMeth(C$, 'c$$S$java_time_zone_ZoneRules', function (id, rules) {
Clazz.super_(C$, this);
this.id=id;
this.rules=rules;
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'getRules$', function () {
return (this.rules != null  ? this.rules : $I$(2).getRules$S$Z(this.id, false));
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(3,1).c$$B$O,[7, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'write$java_io_DataOutput', function (out) {
out.writeByte$I(7);
this.writeExternal$java_io_DataOutput(out);
});

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeUTF$S(this.id);
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var id=$in.readUTF$();
return $I$(4).of$S$Z(id, false);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:53:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
