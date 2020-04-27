(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ConcurrentSkipListMap", null, 'java.util.LinkedHashMap');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Comparator', function (comparator) {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (m) {
;C$.superclazz.c$$java_util_Map.apply(this,[m]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedMap', function (m) {
;C$.superclazz.c$$java_util_Map.apply(this,[m]);C$.$init$.apply(this);
this.putAll$java_util_Map(m);
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
