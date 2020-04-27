(function(){var P$=Clazz.newPackage("jalview.javascript.log4j"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Priority");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['level','syslogEquivalent'],'S',['levelStr']]
,['O',['FATAL','jalview.javascript.log4j.Priority','+ERROR','+WARN','+INFO','+DEBUG']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.level=10000;
this.levelStr="DEBUG";
this.syslogEquivalent=7;
}, 1);

Clazz.newMeth(C$, 'c$$I$S$I', function (level, levelStr, syslogEquivalent) {
;C$.$init$.apply(this);
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

C$.$static$=function(){C$.$static$=0;
C$.FATAL=null;
C$.ERROR=null;
C$.WARN=null;
C$.INFO=null;
C$.DEBUG=null;
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
