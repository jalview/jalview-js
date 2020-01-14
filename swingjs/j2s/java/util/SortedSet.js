(function(){var P$=java.util,I$=[[0,['java.util.Spliterators','.IteratorSpliterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "SortedSet", null, null, 'java.util.Set');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'spliterator$', function () {
return ((P$.SortedSet$1||
(function(){var C$=Clazz.newClass(P$, "SortedSet$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.Spliterators','.IteratorSpliterator']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getComparator$', function () {
return this.b$['java.util.SortedSet'].comparator$.apply(this.b$['java.util.SortedSet'], []);
});
})()
), Clazz.new_($I$(1).c$$java_util_Collection$I, [this, null, this, 21],P$.SortedSet$1));
});
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
