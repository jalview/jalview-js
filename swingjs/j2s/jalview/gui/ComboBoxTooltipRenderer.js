(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[];
var C$=Clazz.newClass(P$, "ComboBoxTooltipRenderer", null, 'javax.swing.DefaultListCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tooltips=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['getListCellRendererComponent$javax_swing_JList$O$I$Z$Z','getListCellRendererComponent$','getListCellRendererComponent$javax_swing_JList$TE$I$Z$Z'], function (list, value, index, isSelected, cellHasFocus) {
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
