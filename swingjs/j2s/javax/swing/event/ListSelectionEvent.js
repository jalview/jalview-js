(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
var C$=Clazz.newClass(P$, "ListSelectionEvent", null, 'java.util.EventObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.firstIndex=0;
this.lastIndex=0;
this.isAdjusting=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$I$I$Z', function (source, firstIndex, lastIndex, isAdjusting) {
C$.superclazz.c$$O.apply(this, [source]);
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
