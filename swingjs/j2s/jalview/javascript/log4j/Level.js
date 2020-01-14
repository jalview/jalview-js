(function(){var P$=Clazz.newPackage("jalview.javascript.log4j"),p$1={};
var C$=Clazz.newClass(P$, "Level", null, 'jalview.javascript.log4j.Priority', 'java.io.Serializable');
C$.OFF=null;
C$.$FATAL=null;
C$.$ERROR=null;
C$.$WARN=null;
C$.$INFO=null;
C$.$DEBUG=null;
C$.TRACE=null;
C$.ALL=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.OFF=Clazz.new_(C$.c$$I$S$I,[2147483647, "OFF", 0]);
C$.$FATAL=Clazz.new_(C$.c$$I$S$I,[50000, "FATAL", 0]);
C$.$ERROR=Clazz.new_(C$.c$$I$S$I,[40000, "ERROR", 3]);
C$.$WARN=Clazz.new_(C$.c$$I$S$I,[30000, "WARN", 4]);
C$.$INFO=Clazz.new_(C$.c$$I$S$I,[20000, "INFO", 6]);
C$.$DEBUG=Clazz.new_(C$.c$$I$S$I,[10000, "DEBUG", 7]);
C$.TRACE=Clazz.new_(C$.c$$I$S$I,[5000, "TRACE", 7]);
C$.ALL=Clazz.new_(C$.c$$I$S$I,[-2147483648, "ALL", 7]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$S$I', function (level, levelStr, syslogEquivalent) {
C$.superclazz.c$$I$S$I.apply(this, [level, levelStr, syslogEquivalent]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toLevel$S', function (sArg) {
return C$.toLevel$S$jalview_javascript_log4j_Level(sArg, C$.$DEBUG);
}, 1);

Clazz.newMeth(C$, 'toLevel$I', function (val) {
return C$.toLevel$I$jalview_javascript_log4j_Level(val, C$.$DEBUG);
}, 1);

Clazz.newMeth(C$, 'toLevel$I$jalview_javascript_log4j_Level', function (val, defaultLevel) {
switch (val) {
case -2147483648:
return C$.ALL;
case 10000:
return C$.$DEBUG;
case 20000:
return C$.$INFO;
case 30000:
return C$.$WARN;
case 40000:
return C$.$ERROR;
case 50000:
return C$.$FATAL;
case 2147483647:
return C$.OFF;
case 5000:
return C$.TRACE;
default:
return defaultLevel;
}
}, 1);

Clazz.newMeth(C$, 'toLevel$S$jalview_javascript_log4j_Level', function (sArg, defaultLevel) {
if (sArg == null ) {
return defaultLevel;
}var s=sArg.toUpperCase$();
if (s.equals$O("ALL")) {
return C$.ALL;
}if (s.equals$O("DEBUG")) {
return C$.$DEBUG;
}if (s.equals$O("INFO")) {
return C$.$INFO;
}if (s.equals$O("WARN")) {
return C$.$WARN;
}if (s.equals$O("ERROR")) {
return C$.$ERROR;
}if (s.equals$O("FATAL")) {
return C$.$FATAL;
}if (s.equals$O("OFF")) {
return C$.OFF;
}if (s.equals$O("TRACE")) {
return C$.TRACE;
}if (s.equals$O("\u0130NFO")) {
return C$.$INFO;
}return defaultLevel;
}, 1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
this.level=s.readInt$();
this.syslogEquivalent=s.readInt$();
this.levelStr=s.readUTF$();
if (this.levelStr == null ) {
this.levelStr="";
}}, p$1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
s.defaultWriteObject$();
s.writeInt$I(this.level);
s.writeInt$I(this.syslogEquivalent);
s.writeUTF$S(this.levelStr);
}, p$1);

Clazz.newMeth(C$, 'readResolve', function () {
if (this.getClass$() === Clazz.getClass(C$) ) {
return C$.toLevel$I(this.level);
}return this;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
