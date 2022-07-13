(function(){var P$=Clazz.newPackage("jalview.log"),p$1={},I$=[[0,['jalview.log.JLoggerI','.LogLevel'],'jalview.log.JLogger','jalview.util.Platform','jalview.util.Log4j']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JLoggerLog4j", null, 'jalview.log.JLogger', 'jalview.log.JLoggerI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$logger=null;
},1);

C$.$fields$=[['O',['$logger','org.apache.logging.log4j.Logger']]]

Clazz.newMeth(C$, 'getLogger$Class',  function (c) {
return C$.getLogger$Class(c);
}, 1);

Clazz.newMeth(C$, 'getLogger$Class$jalview_log_JLoggerI_LogLevel',  function (c, loglevel) {
return C$.getLogger$S$jalview_log_JLoggerI_LogLevel(c.getCanonicalName$(), loglevel);
}, 1);

Clazz.newMeth(C$, 'getLogger$S',  function (name) {
return C$.getLogger$S$jalview_log_JLoggerI_LogLevel(name, $I$(1).INFO);
}, 1);

Clazz.newMeth(C$, 'getLogger$S$jalview_log_JLoggerI_LogLevel',  function (name, loglevel) {
return $I$(2).registryContainsKey$S(name) ? $I$(2).registryGet$S(name) : Clazz.new_(C$.c$$S$jalview_log_JLoggerI_LogLevel,[name, loglevel]);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_log_JLoggerI_LogLevel',  function (name, level) {
Clazz.super_(C$, this);
this.name=name;
this.level=level;
this.loggerSetup$();
this.registryStore$();
}, 1);

Clazz.newMeth(C$, 'loggerSetup$',  function () {
if (!$I$(3).isJS$()) this.$logger=$I$(4).isInit$() ? $I$(4).getLogger$S$jalview_log_JLoggerI_LogLevel(this.name, this.level) : null;
});

Clazz.newMeth(C$, 'loggerExists$',  function () {
return this.$logger != null ;
});

Clazz.newMeth(C$, 'loggerSetLevel$jalview_log_JLoggerI_LogLevel',  function (level) {
if (this.loggerExists$()) {
$I$(4).setLevel$org_apache_logging_log4j_Logger$jalview_log_JLoggerI_LogLevel(this.$logger, level);
}});

Clazz.newMeth(C$, 'loggerLogMessage$jalview_log_JLoggerI_LogLevel$S$Throwable',  function (level, message, t) {
if (!this.loggerExists$()) return;
if (t != null ) {
switch (level) {
case $I$(1).FATAL:
this.$logger.fatal$S$Throwable(message, t);
break;
case $I$(1).ERROR:
this.$logger.error$S$Throwable(message, t);
break;
case $I$(1).WARN:
this.$logger.warn$S$Throwable(message, t);
break;
case $I$(1).INFO:
this.$logger.info$S$Throwable(message, t);
break;
case $I$(1).DEBUG:
this.$logger.debug$S$Throwable(message, t);
break;
case $I$(1).TRACE:
this.$logger.trace$S$Throwable(message, t);
break;
case $I$(1).ALL:
this.$logger.trace$S$Throwable(message, t);
break;
}
} else {
switch (level) {
case $I$(1).FATAL:
this.$logger.fatal$S(message);
break;
case $I$(1).ERROR:
this.$logger.error$S(message);
break;
case $I$(1).WARN:
this.$logger.warn$S(message);
break;
case $I$(1).INFO:
this.$logger.info$S(message);
break;
case $I$(1).DEBUG:
this.$logger.debug$S(message);
break;
case $I$(1).TRACE:
this.$logger.trace$S(message);
break;
case $I$(1).ALL:
this.$logger.trace$S(message);
break;
}
}});

Clazz.newMeth(C$, 'getLoggerObject',  function () {
return this.$logger;
}, p$1);

Clazz.newMeth(C$, 'addAppender$jalview_log_JLoggerLog4j$org_apache_logging_log4j_core_Appender',  function (level, appender) {
if (!$I$(3).isJS$()) $I$(4,"addAppender$org_apache_logging_log4j_Logger$org_apache_logging_log4j_core_Appender",[p$1.getLoggerObject.apply(level, []), appender]);
}, 1);

Clazz.newMeth(C$, 'addAppender$jalview_log_JLoggerLog4j$jalview_log_JLoggerLog4j$S',  function (l1, l2, name) {
if (!$I$(3).isJS$()) $I$(4,"addAppender$org_apache_logging_log4j_Logger$org_apache_logging_log4j_Logger$S",[p$1.getLoggerObject.apply(l1, []), p$1.getLoggerObject.apply(l2, []), name]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
