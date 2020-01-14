(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
var C$=Clazz.newClass(P$, "TableColumnModelEvent", null, 'java.util.EventObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fromIndex=0;
this.toIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableColumnModel$I$I', function (source, from, to) {
C$.superclazz.c$$O.apply(this, [source]);
C$.$init$.apply(this);
this.fromIndex=from;
this.toIndex=to;
}, 1);

Clazz.newMeth(C$, 'getFromIndex$', function () {
return this.fromIndex;
});

Clazz.newMeth(C$, 'getToIndex$', function () {
return this.toIndex;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
