(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[[0,'java.awt.Color','javax.swing.UIManager','javax.swing.table.DefaultTableCellRenderer','java.text.DecimalFormat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "cfRenderer", null, 'javax.swing.table.DefaultTableCellRenderer');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.red=null;
this.yellow=null;
this.green=null;
this.white=null;
this.redLevel=0;
this.yellowLevel=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this, []);C$.$init$.apply(this);
this.red=Clazz.new_($I$(1,1).c$$I$I$I,[255, 200, 200]);
this.yellow=Clazz.new_($I$(1,1).c$$I$I$I,[255, 255, 200]);
this.green=Clazz.new_($I$(1,1).c$$I$I$I,[200, 255, 200]);
this.white=Clazz.new_($I$(1,1).c$$I$I$I,[255, 255, 255]);
}, 1);

Clazz.newMeth(C$, 'setRedLevel$D', function (d) {
this.redLevel=d;
});

Clazz.newMeth(C$, 'setYellowLevel$D', function (d) {
this.yellowLevel=d;
});

Clazz.newMeth(C$, ['getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I','getTableCellRendererComponent$'], function (table, value, isSelected, hasFocus, row, column) {
if (isSelected) {
this.setForeground$java_awt_Color(table.getSelectionForeground$());
this.setBackground$java_awt_Color(table.getSelectionBackground$());
} else {
this.setBackground$java_awt_Color(this.white);
if (value != null  && (value).getExpValue$() != null  ) {
try {
var myValue=(value).getDiff$();
if (myValue >= this.redLevel ) {
this.setBackground$java_awt_Color(this.red);
} else if (myValue >= this.yellowLevel  && myValue < this.redLevel  ) {
this.setBackground$java_awt_Color(this.yellow);
} else {
this.setBackground$java_awt_Color(this.green);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.setBackground$java_awt_Color(this.white);
} else {
throw e;
}
}
}}this.setFont$java_awt_Font(table.getFont$());
if (hasFocus) {
this.setBorder$javax_swing_border_Border($I$(2).getBorder$O("Table.focusCellHighlightBorder"));
if (table.isCellEditable$I$I(row, column)) {
C$.superclazz.prototype.setForeground$java_awt_Color.apply(this, [$I$(2).getColor$O("Table.focusCellForeground")]);
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [$I$(2).getColor$O("Table.focusCellBackground")]);
}} else {
this.setBorder$javax_swing_border_Border($I$(3).noFocusBorder);
}var df=Clazz.new_($I$(4,1).c$$S,["0.0000"]);
var text=df.format$D(value == null  ? 0 : (value).getCalcValue$().doubleValue$());
this.setText$S(text);
return this;
});
})();
;Clazz.setTVer('3.2.5-v1');//Created 2019-11-23 16:07:45 Java2ScriptVisitor version 3.2.5-v1 net.sf.j2s.core.jar version 3.2.5-v1
