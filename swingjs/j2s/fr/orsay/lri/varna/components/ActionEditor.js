(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),I$=[[0,'javax.swing.JButton']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ActionEditor", null, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._btn=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['_btn','javax.swing.JButton']]]

Clazz.newMeth(C$, 'c$$java_awt_event_ActionListener', function (a) {
Clazz.super_(C$, this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
