(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Ref");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['soft','java.lang.Object']]]

Clazz.newMeth(C$, 'get$',  function () {
var t=this.check$();
if (t == null ) {
t=this.reconstitute$();
this.setThing$O(t);
}return t;
});

Clazz.newMeth(C$, 'flush$',  function () {
});

Clazz.newMeth(C$, 'setThing$O',  function (thing) {
this.flush$();
this.soft=thing;
});

Clazz.newMeth(C$, 'check$',  function () {
return this.soft;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (thing) {
;C$.$init$.apply(this);
this.setThing$O(thing);
}, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:06 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
