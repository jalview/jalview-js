(function(){var P$=Clazz.newPackage("jalview.javascript.log4j.spi"),I$=[];
var C$=Clazz.newClass(P$, "LoggingEvent");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.level=null;
this.msg=null;
this.logger=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_javascript_log4j_Logger$S$O', function (logger, level, message) {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
