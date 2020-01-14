(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),I$=[[0,'javax.swing.JButton']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ActionEditor", null, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._btn=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._btn=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_event_ActionListener', function (a) {
Clazz.super_(C$, this,1);
this._btn.addActionListener$java_awt_event_ActionListener(a);
}, 1);

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I', function (table, value, isSelected, rowIndex, vColIndex) {
this._btn.setText$S(value.toString());
this._btn.setActionCommand$S(value.toString() + "-" + rowIndex );
return this._btn;
});

Clazz.newMeth(C$, 'getCellEditorValue$', function () {
return "";
});

Clazz.newMeth(C$, 'shouldSelectCell$java_util_EventObject', function (anEvent) {
return C$.superclazz.prototype.shouldSelectCell$java_util_EventObject.apply(this, [anEvent]);
});

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject', function (anEvent) {
return C$.superclazz.prototype.isCellEditable$java_util_EventObject.apply(this, [anEvent]);
});

Clazz.newMeth(C$, 'stopCellEditing$', function () {
return C$.superclazz.prototype.stopCellEditing$.apply(this, []);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
