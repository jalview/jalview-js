(function(){var P$=Clazz.newPackage("java.time.zone"),p$1={},I$=[[0,'java.time.zone.ZoneRules','java.time.zone.ZoneOffsetTransition','java.time.zone.ZoneOffsetTransitionRule','java.time.ZoneOffset']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Ser", null, null, 'java.io.Externalizable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['B',['type'],'O',['object','java.lang.Object']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$B$O', function (type, object) {
;C$.$init$.apply(this);
this.type=type;
this.object=object;
}, 1);

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
C$.writeInternal$B$O$java_io_DataOutput(this.type, this.object, out);
});

Clazz.newMeth(C$, 'write$O$java_io_DataOutput', function (object, out) {
C$.writeInternal$B$O$java_io_DataOutput(1, object, out);
}, 1);

Clazz.newMeth(C$, 'writeInternal$B$O$java_io_DataOutput', function (type, object, out) {
out.writeByte$I(type);
switch (type) {
case 1:
(object).writeExternal$java_io_DataOutput(out);
break;
case 2:
(object).writeExternal$java_io_DataOutput(out);
break;
case 3:
(object).writeExternal$java_io_DataOutput(out);
break;
default:
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,["Unknown serialized type"]);
}
}, 1);

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
this.type=$in.readByte$();
this.object=C$.readInternal$B$java_io_DataInput(this.type, $in);
});

Clazz.newMeth(C$, 'read$java_io_DataInput', function ($in) {
var type=$in.readByte$();
return C$.readInternal$B$java_io_DataInput(type, $in);
}, 1);

Clazz.newMeth(C$, 'readInternal$B$java_io_DataInput', function (type, $in) {
switch (type) {
case 1:
return $I$(1).readExternal$java_io_DataInput($in);
case 2:
return $I$(2).readExternal$java_io_DataInput($in);
case 3:
return $I$(3).readExternal$java_io_DataInput($in);
default:
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["Unknown serialized type"]);
}
}, 1);

Clazz.newMeth(C$, 'readResolve', function () {
return this.object;
}, p$1);

Clazz.newMeth(C$, 'writeOffset$java_time_ZoneOffset$java_io_DataOutput', function (offset, out) {
var offsetSecs=offset.getTotalSeconds$();
var offsetByte=offsetSecs % 900 == 0 ? (offsetSecs/900|0) : 127;
out.writeByte$I(offsetByte);
if (offsetByte == 127) {
out.writeInt$I(offsetSecs);
}}, 1);

Clazz.newMeth(C$, 'readOffset$java_io_DataInput', function ($in) {
var offsetByte=$in.readByte$();
return (offsetByte == 127 ? $I$(4,"ofTotalSeconds$I",[$in.readInt$()]) : $I$(4).ofTotalSeconds$I(offsetByte * 900));
}, 1);

Clazz.newMeth(C$, 'writeEpochSec$J$java_io_DataOutput', function (epochSec, out) {
if (epochSec >= -4575744000 && epochSec < 10413792000  && epochSec % 900 == 0 ) {
var store=((Clazz.toLong((epochSec + 4575744000)/900))|0);
out.writeByte$I((store >>> 16) & 255);
out.writeByte$I((store >>> 8) & 255);
out.writeByte$I(store & 255);
} else {
out.writeByte$I(255);
out.writeLong$J(epochSec);
}}, 1);

Clazz.newMeth(C$, 'readEpochSec$java_io_DataInput', function ($in) {
var hiByte=$in.readByte$() & 255;
if (hiByte == 255) {
return $in.readLong$();
} else {
var midByte=$in.readByte$() & 255;
var loByte=$in.readByte$() & 255;
var tot=((hiByte << 16) + (midByte << 8) + loByte );
return (tot * 900) - 4575744000;
}}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:08 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
