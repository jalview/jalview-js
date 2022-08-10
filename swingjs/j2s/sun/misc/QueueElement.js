(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "QueueElement");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.next=null;
this.prev=null;
this.obj=null;
},1);

C$.$fields$=[['O',['next','sun.misc.QueueElement','+prev','obj','<T>']]]

Clazz.newMeth(C$, 'c$$O',  function (obj) {
;C$.$init$.apply(this);
this.obj=obj;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "QueueElement[obj=" + this.obj + (this.prev == null  ? " null" : " prev") + (this.next == null  ? " null" : " next") + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:06 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
