(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CopyOnWriteArrayList", null, 'java.util.ArrayList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
;C$.superclazz.c$$java_util_Collection.apply(this,[c]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$OA', function (toCopyIn) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
for (var i=0, n=toCopyIn.length; i < n; i++) this.add$O(toCopyIn[i]);

}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
