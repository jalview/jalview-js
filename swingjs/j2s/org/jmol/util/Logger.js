(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.util.DefaultLogger','java.util.Hashtable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Logger");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['_logLevel','debugging','debuggingHigh'],'O',['_logger','org.jmol.util.LoggerInterface','_activeLevels','boolean[]','htTiming','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getProperty$S$Z', function (level, defaultValue) {
try {
var property=System.getProperty$S$S("jmol.logger." + level, null);
if (property != null ) {
return (property.equalsIgnoreCase$S("true"));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return defaultValue;
}, 1);

Clazz.newMeth(C$, 'setLogger$org_jmol_util_LoggerInterface', function (logger) {
C$._logger=logger;
C$.debugging=C$.isActiveLevel$I(5) || C$.isActiveLevel$I(6) ;
C$.debuggingHigh=(C$.debugging && C$._activeLevels[6] );
}, 1);

Clazz.newMeth(C$, 'isActiveLevel$I', function (level) {
return C$._logger != null  && level >= 0  && level < 7  && C$._activeLevels[level] ;
}, 1);

Clazz.newMeth(C$, 'setActiveLevel$I$Z', function (level, active) {
if (level < 0) level=0;
if (level >= 7) level=6;
C$._activeLevels[level]=active;
C$.debugging=C$.isActiveLevel$I(5) || C$.isActiveLevel$I(6) ;
C$.debuggingHigh=(C$.debugging && C$._activeLevels[6] );
}, 1);

Clazz.newMeth(C$, 'setLogLevel$I', function (level) {
for (var i=7; --i >= 0; ) C$.setActiveLevel$I$Z(i, i <= level);

}, 1);

Clazz.newMeth(C$, 'getLevel$I', function (level) {
switch (level) {
case 6:
return "DEBUGHIGH";
case 5:
return "DEBUG";
case 4:
return "INFO";
case 3:
return "WARN";
case 2:
return "ERROR";
case 1:
return "FATAL";
}
return "????";
}, 1);

Clazz.newMeth(C$, 'logLevel$', function () {
return C$._logLevel;
}, 1);

Clazz.newMeth(C$, 'doLogLevel$Z', function (log) {
C$._logLevel=log;
}, 1);

Clazz.newMeth(C$, 'debug$S', function (txt) {
if (!C$.debugging) return;
try {
C$._logger.debug$S(txt);
} catch (t) {
}
}, 1);

Clazz.newMeth(C$, 'info$S', function (txt) {
try {
if (C$.isActiveLevel$I(4)) {
C$._logger.info$S(txt);
}} catch (t) {
}
}, 1);

Clazz.newMeth(C$, 'warn$S', function (txt) {
try {
if (C$.isActiveLevel$I(3)) {
C$._logger.warn$S(txt);
}} catch (t) {
}
}, 1);

Clazz.newMeth(C$, 'warnEx$S$Throwable', function (txt, e) {
try {
if (C$.isActiveLevel$I(3)) {
C$._logger.warnEx$S$Throwable(txt, e);
}} catch (t) {
}
}, 1);

Clazz.newMeth(C$, 'error$S', function (txt) {
try {
if (C$.isActiveLevel$I(2)) {
C$._logger.error$S(txt);
}} catch (t) {
}
}, 1);

Clazz.newMeth(C$, 'errorEx$S$Throwable', function (txt, e) {
try {
if (C$.isActiveLevel$I(2)) {
C$._logger.errorEx$S$Throwable(txt, e);
}} catch (t) {
}
}, 1);

Clazz.newMeth(C$, 'getLogLevel$', function () {
for (var i=7; --i >= 0; ) if (C$.isActiveLevel$I(i)) return i;

return 0;
}, 1);

Clazz.newMeth(C$, 'fatal$S', function (txt) {
try {
if (C$.isActiveLevel$I(1)) {
C$._logger.fatal$S(txt);
}} catch (t) {
}
}, 1);

Clazz.newMeth(C$, 'fatalEx$S$Throwable', function (txt, e) {
try {
if (C$.isActiveLevel$I(1)) {
C$._logger.fatalEx$S$Throwable(txt, e);
}} catch (t) {
}
}, 1);

Clazz.newMeth(C$, 'startTimer$S', function (msg) {
if (msg != null ) C$.htTiming.put$O$O(msg, Long.valueOf$J(System.currentTimeMillis$()));
}, 1);

Clazz.newMeth(C$, 'getTimerMsg$S$I', function (msg, time) {
if (time == 0) time=C$.getTimeFrom$S(msg);
return "Time for " + msg + ": " + (time) + " ms" ;
}, 1);

Clazz.newMeth(C$, 'getTimeFrom$S', function (msg) {
var t;
return ((msg == null  || (t=C$.htTiming.get$O(msg)) == null   ? -1 : System.currentTimeMillis$() - t.longValue$())|0);
}, 1);

Clazz.newMeth(C$, 'checkTimer$S$Z', function (msg, andReset) {
var time=C$.getTimeFrom$S(msg);
if (time >= 0 && !msg.startsWith$S("(") ) C$.info$S(C$.getTimerMsg$S$I(msg, time));
if (andReset) C$.startTimer$S(msg);
return time;
}, 1);

Clazz.newMeth(C$, 'checkMemory$', function () {
var bTotal=0;
var bFree=0;
var bMax=0;

{}
C$.info$S("Memory: Total-Free=" + (bTotal - bFree) + "; Total=" + bTotal + "; Free=" + bFree + "; Max=" + bMax );
}, 1);

C$.$static$=function(){C$.$static$=0;
C$._logger=Clazz.new_($I$(1,1));
C$._activeLevels=Clazz.array(Boolean.TYPE, [7]);
C$._logLevel=false;
{
C$._activeLevels[6]=C$.getProperty$S$Z("debugHigh", false);
C$._activeLevels[5]=C$.getProperty$S$Z("debug", false);
C$._activeLevels[4]=C$.getProperty$S$Z("info", true);
C$._activeLevels[3]=C$.getProperty$S$Z("warn", true);
C$._activeLevels[2]=C$.getProperty$S$Z("error", true);
C$._activeLevels[1]=C$.getProperty$S$Z("fatal", true);
C$._logLevel=C$.getProperty$S$Z("logLevel", false);
C$.debugging=(C$._logger != null  && (C$._activeLevels[5] || C$._activeLevels[6] ) );
C$.debuggingHigh=(C$.debugging && C$._activeLevels[6] );
};
C$.htTiming=Clazz.new_($I$(2,1));
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
