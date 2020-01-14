(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
var C$=Clazz.newClass(P$, "QueueElement");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.next=null;
this.prev=null;
this.obj=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.next=null;
this.prev=null;
this.obj=null;
}, 1);

Clazz.newMeth(C$, 'c$$O', function (obj) {
C$.$init$.apply(this);
this.obj=obj;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "QueueElement[obj=" + this.obj + (this.prev == null  ? " null" : " prev") + (this.next == null  ? " null" : " next") + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
