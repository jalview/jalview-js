(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'jalview.log.JLogger','jalview.bin.Cache','jalview.util.Platform','jalview.util.Log4j','jalview.log.JLoggerLog4j','jalview.util.ChannelProperties']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Console");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['log','jalview.log.JLoggerLog4j']]]

Clazz.newMeth(C$, 'debug$S$Throwable',  function (message, t) {
if (C$.initLogger$()) {
C$.log.debug$S$Throwable(message, t);
} else {
System.out.println$S(message);
t.printStackTrace$();
}}, 1);

Clazz.newMeth(C$, 'info$S',  function (message) {
if (C$.initLogger$()) {
C$.log.info$S$Throwable(message, null);
} else {
System.out.println$S(message);
}}, 1);

Clazz.newMeth(C$, 'trace$S$Throwable',  function (message, t) {
if (C$.initLogger$()) {
C$.log.trace$S$Throwable(message, t);
} else {
System.out.println$S(message);
t.printStackTrace$();
}}, 1);

Clazz.newMeth(C$, 'debug$S',  function (message) {
if (C$.initLogger$()) {
C$.log.debug$S$Throwable(message, null);
} else {
System.out.println$S(message);
}}, 1);

Clazz.newMeth(C$, 'info$S$Throwable',  function (message, t) {
if (C$.initLogger$()) {
C$.log.info$S$Throwable(message, t);
} else {
System.out.println$S(message);
t.printStackTrace$();
}}, 1);

Clazz.newMeth(C$, 'warn$S',  function (message) {
if (C$.initLogger$()) {
C$.log.warn$S$Throwable(message, null);
} else {
System.out.println$S(message);
}}, 1);

Clazz.newMeth(C$, 'trace$S',  function (message) {
if (C$.initLogger$()) {
C$.log.trace$S$Throwable(message, null);
} else {
System.out.println$S(message);
}}, 1);

Clazz.newMeth(C$, 'warn$S$Throwable',  function (message, t) {
if (C$.initLogger$()) {
C$.log.warn$S$Throwable(message, t);
} else {
System.out.println$S(message);
t.printStackTrace$();
}}, 1);

Clazz.newMeth(C$, 'error$S',  function (message) {
if (C$.initLogger$()) {
C$.log.error$S$Throwable(message, null);
} else {
System.err.println$S(message);
}}, 1);

Clazz.newMeth(C$, 'error$S$Throwable',  function (message, t) {
if (C$.initLogger$()) {
C$.log.error$S$Throwable(message, t);
} else {
System.err.println$S(message);
t.printStackTrace$java_io_PrintStream(System.err);
}}, 1);

Clazz.newMeth(C$, 'fatal$S',  function (message) {
if (C$.initLogger$()) {
C$.log.fatal$S$Throwable(message, null);
} else {
System.err.println$S(message);
}}, 1);

Clazz.newMeth(C$, 'fatal$S$Throwable',  function (message, t) {
if (C$.initLogger$()) {
C$.log.fatal$S$Throwable(message, t);
} else {
System.err.println$S(message);
t.printStackTrace$java_io_PrintStream(System.err);
}}, 1);

Clazz.newMeth(C$, 'isDebugEnabled$',  function () {
return C$.log == null  ? false : C$.log.isDebugEnabled$();
}, 1);

Clazz.newMeth(C$, 'isTraceEnabled$',  function () {
return C$.log == null  ? false : C$.log.isTraceEnabled$();
}, 1);

Clazz.newMeth(C$, 'getCachedLogLevel$',  function () {
return C$.getCachedLogLevel$S("logs.Jalview.level");
}, 1);

Clazz.newMeth(C$, 'getCachedLogLevel$S',  function (key) {
return $I$(1,"toLevel$S",[$I$(2).getDefault$S$S(key, "INFO")]);
}, 1);

Clazz.newMeth(C$, 'initLogger$',  function () {
if (C$.log != null ) {
return true;
}try {
var cachedLevel=C$.getCachedLogLevel$();
if (!$I$(3).isJS$()) {
$I$(4).init$jalview_log_JLoggerI_LogLevel(cachedLevel);
}$I$(5).getLogger$S$jalview_log_JLoggerI_LogLevel("org.apache.axis", cachedLevel);
C$.log=$I$(5).getLogger$S$jalview_log_JLoggerI_LogLevel("JalviewLogger", cachedLevel);
} catch (e) {
if (Clazz.exceptionOf(e,"NoClassDefFoundError")){
System.err.println$S("Could not initialise the logger framework");
e.printStackTrace$();
} else {
throw e;
}
}
if (C$.log != null ) {
if (C$.log.loggerExists$()) C$.log.debug$S("Logging to STDERR");
C$.debug$S($I$(6).getProperty$S("app_name") + " Debugging Output Follows.");
return true;
} else {
return false;
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
