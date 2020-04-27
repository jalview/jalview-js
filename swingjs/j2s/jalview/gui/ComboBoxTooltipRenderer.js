(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ComboBoxTooltipRenderer", null, 'javax.swing.DefaultListCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tooltips','java.util.List']]]

Clazz.newMeth(C$, 'getListCellRendererComponent$javax_swing_JList$O$I$Z$Z', function (list, value, index, isSelected, cellHasFocus) {
var comp=C$.superclazz.prototype.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z.apply(this, [list, value, index, isSelected, cellHasFocus]);
if (-1 < index && null != value   && null != this.tooltips  ) {
list.setToolTipText$S(this.tooltips.get$I(index));
}return comp;
});

Clazz.newMeth(C$, 'setTooltips$java_util_List', function (tips) {
this.tooltips=tips;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
