(function(){var P$=java.util,I$=[[0,'java.util.Spliterators']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LinkedHashSet", null, 'java.util.HashSet', ['java.util.Set', 'Cloneable', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
C$.superclazz.c$$I$F$Z.apply(this, [initialCapacity, loadFactor, true]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.superclazz.c$$I$F$Z.apply(this, [initialCapacity, 0.75, true]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$I$F$Z.apply(this, [16, 0.75, true]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
C$.superclazz.c$$I$F$Z.apply(this, [Math.max(2 * c.size$(), 11), 0.75, true]);
C$.$init$.apply(this);
this.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(1).spliterator$java_util_Collection$I(this, 17);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
