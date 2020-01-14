(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
var C$=Clazz.newClass(P$, "TableModelEvent", null, 'java.util.EventObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=0;
this.firstRow=0;
this.lastRow=0;
this.column=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableModel', function (source) {
C$.c$$javax_swing_table_TableModel$I$I$I$I.apply(this, [source, 0, 2147483647, -1, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableModel$I', function (source, row) {
C$.c$$javax_swing_table_TableModel$I$I$I$I.apply(this, [source, row, row, -1, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableModel$I$I', function (source, firstRow, lastRow) {
C$.c$$javax_swing_table_TableModel$I$I$I$I.apply(this, [source, firstRow, lastRow, -1, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableModel$I$I$I', function (source, firstRow, lastRow, column) {
C$.c$$javax_swing_table_TableModel$I$I$I$I.apply(this, [source, firstRow, lastRow, column, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableModel$I$I$I$I', function (source, firstRow, lastRow, column, type) {
C$.superclazz.c$$O.apply(this, [source]);
C$.$init$.apply(this);
this.firstRow=firstRow;
this.lastRow=lastRow;
this.column=column;
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getFirstRow$', function () {
return this.firstRow;
});

Clazz.newMeth(C$, 'getLastRow$', function () {
return this.lastRow;
});

Clazz.newMeth(C$, 'getColumn$', function () {
return this.column;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
