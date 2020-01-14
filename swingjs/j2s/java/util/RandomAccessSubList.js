(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "RandomAccessSubList", null, 'java.util.SubList', 'java.util.RandomAccess');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_AbstractList$I$I', function (list, fromIndex, toIndex) {
C$.superclazz.c$$java_util_AbstractList$I$I.apply(this, [list, fromIndex, toIndex]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return Clazz.new_(C$.c$$java_util_AbstractList$I$I,[this, fromIndex, toIndex]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
