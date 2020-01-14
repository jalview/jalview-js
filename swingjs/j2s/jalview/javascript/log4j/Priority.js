(function(){var P$=Clazz.newPackage("jalview.javascript.log4j"),I$=[];
var C$=Clazz.newClass(P$, "Priority");
C$.FATAL=null;
C$.ERROR=null;
C$.WARN=null;
C$.INFO=null;
C$.DEBUG=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.FATAL=null;
C$.ERROR=null;
C$.WARN=null;
C$.INFO=null;
C$.DEBUG=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.level=0;
this.levelStr=null;
this.syslogEquivalent=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.level=10000;
this.levelStr="DEBUG";
this.syslogEquivalent=7;
}, 1);

Clazz.newMeth(C$, 'c$$I$S$I', function (level, levelStr, syslogEquivalent) {
C$.$init$.apply(this);
this.level=level;
this.levelStr=levelStr;
this.syslogEquivalent=syslogEquivalent;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (Clazz.instanceOf(o, "jalview.javascript.log4j.Priority")) {
var r=o;
return (this.level == r.level);
} else {
return false;
}});

Clazz.newMeth(C$, 'getSyslogEquivalent$', function () {
return this.syslogEquivalent;
});

Clazz.newMeth(C$, 'isGreaterOrEqual$jalview_javascript_log4j_Priority', function (r) {
return this.level >= r.level;
});

Clazz.newMeth(C$, 'toString', function () {
return this.levelStr;
});

Clazz.newMeth(C$, 'toInt$', function () {
return this.level;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
