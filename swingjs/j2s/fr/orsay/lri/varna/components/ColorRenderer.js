(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),I$=[[0,'javax.swing.BorderFactory']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ColorRenderer", null, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.unselectedBorder=null;
this.selectedBorder=null;
this.isBordered=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.unselectedBorder=null;
this.selectedBorder=null;
this.isBordered=true;
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (isBordered) {
Clazz.super_(C$, this,1);
this.isBordered=isBordered;
this.setOpaque$Z(true);
}, 1);

Clazz.newMeth(C$, ['getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I','getTableCellRendererComponent$'], function (table, color, isSelected, hasFocus, row, column) {
var newColor=color;
this.setBackground$java_awt_Color(newColor);
if (this.isBordered) {
if (isSelected) {
if (this.selectedBorder == null ) {
this.selectedBorder=$I$(1).createMatteBorder$I$I$I$I$java_awt_Color(2, 5, 2, 5, table.getSelectionBackground$());
}this.setBorder$javax_swing_border_Border(this.selectedBorder);
} else {
if (this.unselectedBorder == null ) {
this.unselectedBorder=$I$(1).createMatteBorder$I$I$I$I$java_awt_Color(2, 5, 2, 5, table.getBackground$());
}this.setBorder$javax_swing_border_Border(this.unselectedBorder);
}}this.setToolTipText$S("RGB value: " + newColor.getRed$() + ", " + newColor.getGreen$() + ", " + newColor.getBlue$() );
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
