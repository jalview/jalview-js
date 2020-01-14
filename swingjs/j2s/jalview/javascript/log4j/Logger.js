(function(){var P$=Clazz.newPackage("jalview.javascript.log4j"),p$1={},I$=[[0,'java.util.Hashtable','jalview.javascript.log4j.Level','jalview.javascript.log4j.spi.LoggingEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Logger");
C$.registry=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.level=null;
this.enabled=false;
this.isEnabled=false;
this.appender=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.enabled=true;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'getLogger$S', function (name) {
if (C$.registry == null ) {
C$.registry=Clazz.new_($I$(1));
C$.getLogger$S("root");
}var logger=C$.registry.get$O(name);
if (logger == null ) {
C$.registry.put$TK$TV(name, logger=Clazz.new_(C$.c$$S,[name]));
logger.setLevel$jalview_javascript_log4j_Level($I$(2).$INFO);
}return logger;
}, 1);

Clazz.newMeth(C$, 'getRootLogger$', function () {
return C$.getLogger$S("root");
}, 1);

Clazz.newMeth(C$, 'setLevel$jalview_javascript_log4j_Level', function (l) {
this.level=l;
});

Clazz.newMeth(C$, 'addAppender$jalview_javascript_log4j_Appender', function (appender) {
this.appender=appender;
});

Clazz.newMeth(C$, 'isDebugEnabled$', function () {
return this.isEnabled;
});

Clazz.newMeth(C$, 'debug$O', function (o) {
this.debug$O$Throwable(o, null);
});

Clazz.newMeth(C$, 'debug$O$Throwable', function (o, e) {
switch (this.level.level) {
case 50000:
case 40000:
case 30000:
case 20000:
case 10000:
p$1.log$O$Throwable.apply(this, [o, e]);
break;
}
});

Clazz.newMeth(C$, 'info$O', function (o) {
this.info$O$Throwable(o, null);
});

Clazz.newMeth(C$, 'info$O$Throwable', function (o, e) {
switch (this.level.level) {
case 50000:
case 40000:
case 30000:
case 20000:
p$1.log$O$Throwable.apply(this, [o, e]);
break;
}
});

Clazz.newMeth(C$, 'warn$O', function (o) {
this.warn$O$Throwable(o, null);
});

Clazz.newMeth(C$, 'warn$O$Throwable', function (o, e) {
switch (this.level.level) {
case 50000:
case 40000:
case 30000:
p$1.log$O$Throwable.apply(this, [o, e]);
break;
}
});

Clazz.newMeth(C$, 'error$O', function (o) {
this.error$O$Throwable(o, null);
});

Clazz.newMeth(C$, 'error$O$Throwable', function (o, e) {
switch (this.level.level) {
case 50000:
case 40000:
p$1.log$O$Throwable.apply(this, [o, e]);
break;
}
});

Clazz.newMeth(C$, 'log$O$Throwable', function (s, e) {
switch (this.level.level) {
case 40000:
if (this.appender == null ) {
System.err.println$O(s);
return;
}break;
case 30000:
if (this.appender == null ) {
System.err.println$O(s);
return;
}break;
case 20000:
if (this.appender == null ) {
System.out.println$O(s);
return;
}break;
case 10000:
if (this.appender == null ) {
System.out.println$O(s);
return;
}break;
}
e.printStackTrace$();
this.appender.append$jalview_javascript_log4j_spi_LoggingEvent(Clazz.new_($I$(3).c$$jalview_javascript_log4j_Logger$S$O,[this, s.toString(), this.level]));
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
