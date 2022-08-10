(function(){var P$=Clazz.newPackage("jalview.log"),I$=[[0,['jalview.log.JLoggerI','.LogLevel'],'jalview.util.Log4j','org.apache.logging.log4j.Level','org.apache.logging.log4j.core.config.Property','java.nio.charset.StandardCharsets','javax.swing.SwingUtilities','jalview.log.JalviewAppender']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewAppender", null, 'org.apache.logging.log4j.core.appender.AbstractAppender');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['jTextArea','javax.swing.JTextArea']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$jalview_log_JLoggerI_LogLevel.apply(this, [$I$(1).INFO]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_log_JLoggerI_LogLevel',  function (loglevel) {
;C$.superclazz.c$$S$org_apache_logging_log4j_core_Filter$org_apache_logging_log4j_core_Layout$Z$org_apache_logging_log4j_core_config_PropertyA.apply(this,["JalviewAppender", $I$(2,"getThresholdFilter$org_apache_logging_log4j_Level",[loglevel == null  ? $I$(3).INFO : $I$(2).log4jLevel$jalview_log_JLoggerI_LogLevel(loglevel)]), $I$(2).getSimpleLayout$(), false, Clazz.array($I$(4), [0])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$org_apache_logging_log4j_core_Filter$org_apache_logging_log4j_core_Layout$Z$org_apache_logging_log4j_core_config_PropertyA',  function (name, filter, layout, ignoreExceptions, properties) {
;C$.superclazz.c$$S$org_apache_logging_log4j_core_Filter$org_apache_logging_log4j_core_Layout$Z$org_apache_logging_log4j_core_config_PropertyA.apply(this,[name, filter, layout, ignoreExceptions, properties]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setTextArea$javax_swing_JTextArea',  function (jTextArea) {
C$.jTextArea=jTextArea;
}, 1);

Clazz.newMeth(C$, 'append$org_apache_logging_log4j_core_LogEvent',  function (logEvent) {
var message= String.instantialize(this.getLayout$().toByteArray$org_apache_logging_log4j_core_LogEvent(logEvent), $I$(5).UTF_8);
$I$(6,"invokeLater$Runnable",[((P$.JalviewAppender$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewAppender$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if ($I$(7).jTextArea != null ) {
$I$(7).jTextArea.append$S(this.$finals$.message);
}});
})()
), Clazz.new_(P$.JalviewAppender$1.$init$,[this, {message:message}]))]);
});

C$.$static$=function(){C$.$static$=0;
C$.jTextArea=null;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
