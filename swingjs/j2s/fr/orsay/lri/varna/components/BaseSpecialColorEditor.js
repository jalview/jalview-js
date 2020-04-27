(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),I$=[[0,'javax.swing.JButton','fr.orsay.lri.varna.controlers.ControleurBaseSpecialColorEditor','javax.swing.JColorChooser']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BaseSpecialColorEditor", null, 'javax.swing.AbstractCellEditor', 'javax.swing.table.TableCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['currentColor','java.awt.Color','button','javax.swing.JButton','colorChooser','javax.swing.JColorChooser','dialog','javax.swing.JDialog','_vueBases','fr.orsay.lri.varna.views.VueBases','_controleurSpecialColorEditor','fr.orsay.lri.varna.controlers.ControleurBaseSpecialColorEditor']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_views_VueBases', function (vueBases) {
Clazz.super_(C$, this);
this.button=Clazz.new_($I$(1,1));
this.button.setActionCommand$S("edit");
this._controleurSpecialColorEditor=Clazz.new_($I$(2,1).c$$fr_orsay_lri_varna_components_BaseSpecialColorEditor,[this]);
this.button.addActionListener$java_awt_event_ActionListener(this._controleurSpecialColorEditor);
this.button.setBorderPainted$Z(false);
this.fireEditingStopped$();
this._vueBases=vueBases;
this.colorChooser=Clazz.new_($I$(3,1));
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
