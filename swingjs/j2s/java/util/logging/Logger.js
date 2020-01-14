(function(){var P$=Clazz.newPackage("java.util.logging"),I$=[];
var C$=Clazz.newClass(P$, "Logger");
C$.logger=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'addHandler$java_util_logging_Handler', function (handler) {
});

Clazz.newMeth(C$, 'fine$S', function (string) {
});

Clazz.newMeth(C$, 'getLogger$S', function (string) {
return (C$.logger == null  ? (C$.logger=Clazz.new_(C$)) : C$.logger);
}, 1);

Clazz.newMeth(C$, 'isLoggable$java_util_logging_Level', function (fine) {
return false;
});

Clazz.newMeth(C$, 'log$java_util_logging_Level$S$Exception', function (fine, string, ignored) {
});

Clazz.newMeth(C$, 'log$java_util_logging_Level$S$OA', function (fine, string, objects) {
});

Clazz.newMeth(C$, 'log$java_util_logging_Level$S$S', function (fine, string, string2) {
});

Clazz.newMeth(C$, 'log$java_util_logging_Level$S$java_net_URL', function (fine, string, url) {
});

Clazz.newMeth(C$, 'log$java_util_logging_Level$S', function (fine, string) {
});

Clazz.newMeth(C$, 'setUseParentHandlers$Z', function (b) {
});

Clazz.newMeth(C$, 'setLevel$java_util_logging_Level', function (all) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
