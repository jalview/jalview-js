(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),I$=[[0,'javax.swing.JButton','fr.orsay.lri.varna.controlers.ControleurBaseSpecialColorEditor','javax.swing.JColorChooser']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BaseSpecialColorEditor", null, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.currentColor=null;
this.button=null;
this.colorChooser=null;
this.dialog=null;
this._vueBases=null;
this._controleurSpecialColorEditor=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_views_VueBases', function (vueBases) {
Clazz.super_(C$, this,1);
this.button=Clazz.new_($I$(1));
this.button.setActionCommand$S("edit");
this._controleurSpecialColorEditor=Clazz.new_($I$(2).c$$fr_orsay_lri_varna_components_BaseSpecialColorEditor,[this]);
this.button.addActionListener$java_awt_event_ActionListener(this._controleurSpecialColorEditor);
this.button.setBorderPainted$Z(false);
this.fireEditingStopped$();
this._vueBases=vueBases;
this.colorChooser=Clazz.new_($I$(3));
this.dialog=$I$(3).createDialog$java_awt_Component$S$Z$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener(this.button, "Pick a Color", true, this.colorChooser, this._controleurSpecialColorEditor, null);
}, 1);

Clazz.newMeth(C$, 'getCellEditorValue$', function () {
return this.currentColor;
});

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I', function (table, value, isSelected, row, column) {
this.currentColor=value;
return this.button;
});

Clazz.newMeth(C$, 'getSerialVersionUID$', function () {
return 1;
}, 1);

Clazz.newMeth(C$, 'getCurrentColor$', function () {
return this.currentColor;
});

Clazz.newMeth(C$, 'getButton$', function () {
return this.button;
});

Clazz.newMeth(C$, 'getColorChooser$', function () {
return this.colorChooser;
});

Clazz.newMeth(C$, 'getDialog$', function () {
return this.dialog;
});

Clazz.newMeth(C$, 'getEDIT$', function () {
return "edit";
}, 1);

Clazz.newMeth(C$, 'get_vueBases$', function () {
return this._vueBases;
});

Clazz.newMeth(C$, 'get_controleurSpecialColorEditor$', function () {
return this._controleurSpecialColorEditor;
});

Clazz.newMeth(C$, 'setCurrentColor$java_awt_Color', function (currentColor) {
this.currentColor=currentColor;
});

Clazz.newMeth(C$, 'callFireEditingStopped$', function () {
this.fireEditingStopped$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
