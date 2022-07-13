(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'org.apache.logging.log4j.Level',['org.apache.logging.log4j.core.appender.ConsoleAppender','.Target'],'org.apache.logging.log4j.core.config.Configurator','org.apache.logging.log4j.LogManager','org.apache.logging.log4j.core.config.builder.api.ConfigurationBuilderFactory','org.apache.logging.log4j.core.layout.PatternLayout','org.apache.logging.log4j.core.filter.ThresholdFilter',['org.apache.logging.log4j.core.Filter','.Result'],'jalview.util.Platform']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Log4j");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['init']]]

Clazz.newMeth(C$, 'isInit$',  function () {
return C$.init;
}, 1);

Clazz.newMeth(C$, 'log4jLevel$jalview_log_JLoggerI_LogLevel',  function (loglevel) {
return $I$(1,"toLevel$S",[loglevel.toString()]);
}, 1);

Clazz.newMeth(C$, 'init$jalview_log_JLoggerI_LogLevel',  function (myLevel) {
C$.init$org_apache_logging_log4j_Level(C$.log4jLevel$jalview_log_JLoggerI_LogLevel(myLevel));
}, 1);

Clazz.newMeth(C$, 'init$org_apache_logging_log4j_Level',  function (myLevel) {
if (C$.init) return;
try {
var configBuilder=C$.getConfigurationBuilder$();
configBuilder.setStatusLevel$org_apache_logging_log4j_Level($I$(1).WARN);
var consoleLoggerName="STDERR";
var appenderBuilder=configBuilder.newAppender$S$S(consoleLoggerName, "Console");
appenderBuilder.addAttribute$S$Enum("target", $I$(2).SYSTEM_ERR);
appenderBuilder.add$org_apache_logging_log4j_core_config_builder_api_LayoutComponentBuilder(C$.getSimpleLayoutBuilder$());
appenderBuilder.add$org_apache_logging_log4j_core_config_builder_api_FilterComponentBuilder(C$.getThresholdFilterBuilder$());
configBuilder.add$org_apache_logging_log4j_core_config_builder_api_AppenderComponentBuilder(appenderBuilder);
configBuilder.add$org_apache_logging_log4j_core_config_builder_api_RootLoggerComponentBuilder(configBuilder.newRootLogger$org_apache_logging_log4j_Level(myLevel).add$org_apache_logging_log4j_core_config_builder_api_AppenderRefComponentBuilder(configBuilder.newAppenderRef$S(consoleLoggerName)));
$I$(3,"initialize$org_apache_logging_log4j_core_config_Configuration",[configBuilder.build$()]);
C$.init=true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Problems initializing the log4j system\n");
e.printStackTrace$java_io_PrintStream(System.err);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getLogger$S',  function (name) {
return C$.getLogger$S$org_apache_logging_log4j_Level(name, $I$(1).INFO);
}, 1);

Clazz.newMeth(C$, 'getLogger$S$jalview_log_JLoggerI_LogLevel',  function (name, loglevel) {
return C$.getLogger$S$org_apache_logging_log4j_Level(name, C$.log4jLevel$jalview_log_JLoggerI_LogLevel(loglevel));
}, 1);

Clazz.newMeth(C$, 'getLogger$S$org_apache_logging_log4j_Level',  function (name, level) {
var logger=$I$(4).getLogger$S(name);
C$.setLevel$org_apache_logging_log4j_Logger$org_apache_logging_log4j_Level(logger, level);
return logger;
}, 1);

Clazz.newMeth(C$, 'getConfigurationBuilder$',  function () {
return $I$(5).newConfigurationBuilder$();
}, 1);

Clazz.newMeth(C$, 'getSimpleLayout$',  function () {
return $I$(6).newBuilder$().withPattern$S("%level - %m%n").build$();
}, 1);

Clazz.newMeth(C$, 'getSimpleLayoutBuilder$',  function () {
return C$.getConfigurationBuilder$().newLayout$S("PatternLayout").addAttribute$S$S("pattern", "%level - %m%n");
}, 1);

Clazz.newMeth(C$, 'getThresholdFilter$org_apache_logging_log4j_Level',  function (level) {
return $I$(7,"createFilter$org_apache_logging_log4j_Level$org_apache_logging_log4j_core_Filter_Result$org_apache_logging_log4j_core_Filter_Result",[level, $I$(8).ACCEPT, $I$(8).NEUTRAL]);
}, 1);

Clazz.newMeth(C$, 'getThresholdFilterBuilder$',  function () {
return C$.getConfigurationBuilder$().newFilter$S$org_apache_logging_log4j_core_Filter_Result$org_apache_logging_log4j_core_Filter_Result("ThresholdFilter", $I$(8).ACCEPT, $I$(8).NEUTRAL);
}, 1);

Clazz.newMeth(C$, 'setLevel$org_apache_logging_log4j_Logger$jalview_log_JLoggerI_LogLevel',  function (logger, loglevel) {
C$.setLevel$org_apache_logging_log4j_Logger$org_apache_logging_log4j_Level(logger, C$.log4jLevel$jalview_log_JLoggerI_LogLevel(loglevel));
}, 1);

Clazz.newMeth(C$, 'setLevel$org_apache_logging_log4j_Logger$org_apache_logging_log4j_Level',  function (logger, level) {
if (!$I$(9).isJS$()) {
var context=$I$(4).getContext$Z(false);
var config=context.getConfiguration$();
var loggerConfig=config.getLoggerConfig$S(logger.getName$());
loggerConfig.setLevel$org_apache_logging_log4j_Level(level);
var appenders=config.getAppenders$();
var jappender=config.getAppender$S("JalviewAppender");
context.updateLoggers$();
}}, 1);

Clazz.newMeth(C$, 'setRootLevel$jalview_log_JLoggerI_LogLevel',  function (loglevel) {
C$.setRootLevel$org_apache_logging_log4j_Level(C$.log4jLevel$jalview_log_JLoggerI_LogLevel(loglevel));
}, 1);

Clazz.newMeth(C$, 'setRootLevel$org_apache_logging_log4j_Level',  function (level) {
C$.setLevel$org_apache_logging_log4j_Logger$org_apache_logging_log4j_Level($I$(4).getRootLogger$(), level);
}, 1);

Clazz.newMeth(C$, 'getAppender$S',  function (name) {
var context=$I$(4).getContext$Z(false);
var config=context.getConfiguration$();
var appenders=config.getAppenders$();
return appenders.get$O(name);
}, 1);

Clazz.newMeth(C$, 'addAppender$org_apache_logging_log4j_Logger$org_apache_logging_log4j_Logger$S',  function (logger, logger2, name2) {
var context=$I$(4).getContext$Z(false);
var config=context.getConfiguration$();
var logger2Config=config.getLoggerConfig$S(logger2.getName$());
var logger2AppendersMap=logger2Config.getAppenders$();
var appender=logger2AppendersMap.get$O(name2);
C$.addAppender$org_apache_logging_log4j_Logger$org_apache_logging_log4j_core_Appender(logger, appender);
context.updateLoggers$();
}, 1);

Clazz.newMeth(C$, 'addAppender$org_apache_logging_log4j_Logger$org_apache_logging_log4j_core_Appender',  function (logger, appender) {
if (appender == null ) return;
var context=$I$(4).getContext$Z(false);
var config=context.getConfiguration$();
var loggerConfig=config.getLoggerConfig$S(logger.getName$());
if (loggerConfig == null ) return;
var level=loggerConfig.getLevel$();
config.addAppender$org_apache_logging_log4j_core_Appender(appender);
loggerConfig.addAppender$org_apache_logging_log4j_core_Appender$org_apache_logging_log4j_Level$org_apache_logging_log4j_core_Filter(appender, null, null);
context.updateLoggers$();
}, 1);

Clazz.newMeth(C$, 'addAppenderToRootLogger$org_apache_logging_log4j_core_Appender',  function (appender) {
C$.addAppender$org_apache_logging_log4j_Logger$org_apache_logging_log4j_core_Appender($I$(4).getRootLogger$(), appender);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.init=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
