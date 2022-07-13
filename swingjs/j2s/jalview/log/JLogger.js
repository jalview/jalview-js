(function(){var P$=Clazz.newPackage("jalview.log"),p$1={},I$=[[0,'java.util.HashMap',['jalview.log.JLoggerI','.LogLevel'],'jalview.bin.Console','jalview.util.Platform']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JLogger", null, null, 'jalview.log.JLoggerI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.logger=null;
},1);

C$.$fields$=[['S',['name'],'O',['level','jalview.log.JLoggerI.LogLevel','logger','java.lang.Object']]
,['O',['registry','java.util.Map']]]

Clazz.newMeth(C$, 'toLevel$S',  function (levelString) {
try {
return $I$(2).valueOf$S(levelString);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
$I$(3).error$S$Throwable("Could not parse LogLevel '" + levelString + "'" , e);
return $I$(2).INFO;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getLogger$Class',  function (c) {
return C$.getLogger$Class(c);
}, 1);

Clazz.newMeth(C$, 'getLogger$Class$jalview_log_JLoggerI_LogLevel',  function (c, loglevel) {
return C$.getLogger$S$jalview_log_JLoggerI_LogLevel(c.getCanonicalName$(), loglevel);
}, 1);

Clazz.newMeth(C$, 'getLogger$S',  function (name) {
return C$.getLogger$S$jalview_log_JLoggerI_LogLevel(name, $I$(2).INFO);
}, 1);

Clazz.newMeth(C$, 'getLogger$S$jalview_log_JLoggerI_LogLevel',  function (name, loglevel) {
return C$.registry.containsKey$O(name) ? C$.registry.get$O(name) : null;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_log_JLoggerI_LogLevel',  function (name, level) {
;C$.$init$.apply(this);
this.name=name;
this.level=level;
this.loggerSetup$();
this.registryStore$();
}, 1);

Clazz.newMeth(C$, 'registryStore$',  function () {
C$.registry.put$O$O(this.name, this);
});

Clazz.newMeth(C$, 'registryContainsKey$S',  function (name) {
return C$.registry.containsKey$O(name);
}, 1);

Clazz.newMeth(C$, 'registryGet$S',  function (name) {
return C$.registry.get$O(name);
}, 1);

Clazz.newMeth(C$, 'getLevel$',  function () {
return this.level;
});

Clazz.newMeth(C$, 'setLevel$jalview_log_JLoggerI_LogLevel',  function (level) {
this.level=level;
if (this.loggerExists$()) this.loggerSetLevel$jalview_log_JLoggerI_LogLevel(level);
});

Clazz.newMeth(C$, 'println$jalview_log_JLoggerI_LogLevel$S$Throwable',  function (loglevel, message, t) {
if (loglevel.compareTo$Enum(this.level) < 0) {
return false;
}if (!this.loggerExists$() || $I$(4).isJS$() ) {
var logLine=String.format$S$OA("%s: %s", Clazz.array(java.lang.Object, -1, [loglevel.toString(), message]));
System.out.println$S(logLine);
if (t != null ) {
if (loglevel.compareTo$Enum($I$(2).DEBUG) <= 0) t.printStackTrace$java_io_PrintStream(System.err);
 else System.err.println$S(t.getMessage$());
}return false;
} else {
this.loggerLogMessage$jalview_log_JLoggerI_LogLevel$S$Throwable(loglevel, message, t);
return true;
}}, p$1);

Clazz.newMeth(C$, 'trace$S',  function (message) {
this.trace$S$Throwable(message, null);
});

Clazz.newMeth(C$, 'trace$S$Throwable',  function (message, t) {
p$1.println$jalview_log_JLoggerI_LogLevel$S$Throwable.apply(this, [$I$(2).TRACE, message, t]);
});

Clazz.newMeth(C$, 'debug$S',  function (message) {
this.debug$S$Throwable(message, null);
});

Clazz.newMeth(C$, 'debug$S$Throwable',  function (message, t) {
p$1.println$jalview_log_JLoggerI_LogLevel$S$Throwable.apply(this, [$I$(2).DEBUG, message, t]);
});

Clazz.newMeth(C$, 'info$S',  function (message) {
this.info$S$Throwable(message, null);
});

Clazz.newMeth(C$, 'info$S$Throwable',  function (message, t) {
p$1.println$jalview_log_JLoggerI_LogLevel$S$Throwable.apply(this, [$I$(2).INFO, message, t]);
});

Clazz.newMeth(C$, 'warn$S',  function (message) {
this.warn$S$Throwable(message, null);
});

Clazz.newMeth(C$, 'warn$S$Throwable',  function (message, t) {
p$1.println$jalview_log_JLoggerI_LogLevel$S$Throwable.apply(this, [$I$(2).WARN, message, t]);
});

Clazz.newMeth(C$, 'error$S',  function (message) {
this.error$S$Throwable(message, null);
});

Clazz.newMeth(C$, 'error$S$Throwable',  function (message, t) {
p$1.println$jalview_log_JLoggerI_LogLevel$S$Throwable.apply(this, [$I$(2).ERROR, message, t]);
});

Clazz.newMeth(C$, 'fatal$S',  function (message) {
this.fatal$S$Throwable(message, null);
});

Clazz.newMeth(C$, 'fatal$S$Throwable',  function (message, t) {
p$1.println$jalview_log_JLoggerI_LogLevel$S$Throwable.apply(this, [$I$(2).FATAL, message, t]);
});

Clazz.newMeth(C$, 'isDebugEnabled$',  function () {
return this.level.compareTo$Enum($I$(2).DEBUG) <= 0;
});

Clazz.newMeth(C$, 'isTraceEnabled$',  function () {
return this.level.compareTo$Enum($I$(2).TRACE) <= 0;
});

C$.$static$=function(){C$.$static$=0;
C$.registry=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
