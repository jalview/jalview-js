(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),I$=[[0,'javax.swing.BorderFactory']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColorRenderer", null, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.unselectedBorder=null;
this.selectedBorder=null;
this.isBordered=true;
},1);

C$.$fields$=[['Z',['isBordered'],'O',['unselectedBorder','javax.swing.border.Border','+selectedBorder']]]

Clazz.newMeth(C$, 'c$$Z', function (isBordered) {
Clazz.super_(C$, this);
this.isBordered=isBordered;
this.setOpaque$Z(true);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I', function (table, color, isSelected, hasFocus, row, column) {
var newColor=color;
this.setBackground$java_awt_Color(newColor);
if (this.isBordered) {
if (isSelected) {
if (this.selectedBorder == null ) {
this.selectedBorder=$I$(1,"createMatteBorder$I$I$I$I$java_awt_Color",[2, 5, 2, 5, table.getSelectionBackground$()]);
}this.setBorder$javax_swing_border_Border(this.selectedBorder);
} else {
if (this.unselectedBorder == null ) {
this.unselectedBorder=$I$(1,"createMatteBorder$I$I$I$I$java_awt_Color",[2, 5, 2, 5, table.getBackground$()]);
}this.setBorder$javax_swing_border_Border(this.unselectedBorder);
}}this.setToolTipText$S("RGB value: " + newColor.getRed$() + ", " + newColor.getGreen$() + ", " + newColor.getBlue$() );
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
