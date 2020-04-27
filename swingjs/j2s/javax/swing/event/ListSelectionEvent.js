(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ListSelectionEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isAdjusting'],'I',['firstIndex','lastIndex']]]

Clazz.newMeth(C$, 'c$$O$I$I$Z', function (source, firstIndex, lastIndex, isAdjusting) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.firstIndex=firstIndex;
this.lastIndex=lastIndex;
this.isAdjusting=isAdjusting;
}, 1);

Clazz.newMeth(C$, 'getFirstIndex$', function () {
return this.firstIndex;
});

Clazz.newMeth(C$, 'getLastIndex$', function () {
return this.lastIndex;
});

Clazz.newMeth(C$, 'getValueIsAdjusting$', function () {
return this.isAdjusting;
});

Clazz.newMeth(C$, 'toString', function () {
var properties=" source=" + this.getSource$() + " firstIndex= " + this.firstIndex + " lastIndex= " + this.lastIndex + " isAdjusting= " + this.isAdjusting + " " ;
return this.getClass$().getName$() + "[" + properties + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
