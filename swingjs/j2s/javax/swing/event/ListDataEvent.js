(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ListDataEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['type','index0','index1']]]

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getIndex0$',  function () {
return this.index0;
});

Clazz.newMeth(C$, 'getIndex1$',  function () {
return this.index1;
});

Clazz.newMeth(C$, 'c$$O$I$I$I',  function (source, type, index0, index1) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.type=type;
this.index0=Math.min(index0, index1);
this.index1=Math.max(index0, index1);
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[type=" + this.type + ",index0=" + this.index0 + ",index1=" + this.index1 + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
