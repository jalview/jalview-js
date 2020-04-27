(function(){var P$=Clazz.newPackage("jalview.javascript.log4j.spi"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LoggingEvent");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['msg'],'O',['level','java.lang.Object','logger','jalview.javascript.log4j.Logger']]]

Clazz.newMeth(C$, 'c$$jalview_javascript_log4j_Logger$S$O', function (logger, level, message) {
;C$.$init$.apply(this);
this.logger=logger;
this.level=level;
this.msg=message.toString();
}, 1);

Clazz.newMeth(C$, 'getLevel$', function () {
return this.level;
});

Clazz.newMeth(C$, 'getRenderedMessage$', function () {
return this.msg;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
