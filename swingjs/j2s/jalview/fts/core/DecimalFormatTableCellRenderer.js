(function(){var P$=Clazz.newPackage("jalview.fts.core"),I$=[[0,'StringBuilder','java.text.DecimalFormat']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DecimalFormatTableCellRenderer", null, 'javax.swing.table.DefaultTableCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.formatter=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z$I', function (isFormated, significantFigures) {
Clazz.super_(C$, this,1);
var integerFormater=isFormated ? "###,##0" : "0";
var fractionFormater=isFormated ? "###,##0." : "0.";
if (significantFigures > 0) {
var significantFigureBuilder=Clazz.new_($I$(1));
for (var x=1; x <= significantFigures; ++x) {
significantFigureBuilder.append$S("0");
}
this.formatter=Clazz.new_($I$(2).c$$S,[fractionFormater + significantFigureBuilder.toString()]);
} else {
this.formatter=Clazz.new_($I$(2).c$$S,[integerFormater]);
}C$.superclazz.prototype.setHorizontalAlignment$I.apply(this, [4]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
C$.superclazz.prototype.setHorizontalAlignment$I.apply(this, [4]);
}, 1);

Clazz.newMeth(C$, ['getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I','getTableCellRendererComponent$'], function (table, value, isSelected, hasFocus, row, column) {
if (value == null ) {
return null;
}value=this.formatter.format$O(value);
return C$.superclazz.prototype.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I.apply(this, [table, value, isSelected, hasFocus, row, column]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
