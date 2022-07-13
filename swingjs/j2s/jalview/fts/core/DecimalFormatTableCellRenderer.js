(function(){var P$=Clazz.newPackage("jalview.fts.core"),I$=[[0,'StringBuilder','java.text.DecimalFormat']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DecimalFormatTableCellRenderer", null, 'javax.swing.table.DefaultTableCellRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['formatter','java.text.DecimalFormat']]]

Clazz.newMeth(C$, 'c$$Z$I',  function (isFormated, significantFigures) {
Clazz.super_(C$, this);
var integerFormater=isFormated ? "###,##0" : "0";
var fractionFormater=isFormated ? "###,##0." : "0.";
if (significantFigures > 0) {
var significantFigureBuilder=Clazz.new_($I$(1,1));
for (var x=1; x <= significantFigures; ++x) {
significantFigureBuilder.append$S("0");
}
this.formatter=Clazz.new_([fractionFormater + significantFigureBuilder.toString()],$I$(2,1).c$$S);
} else {
this.formatter=Clazz.new_($I$(2,1).c$$S,[integerFormater]);
}C$.superclazz.prototype.setHorizontalAlignment$I.apply(this, [4]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
C$.superclazz.prototype.setHorizontalAlignment$I.apply(this, [4]);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
value=value == null  ? "" : this.formatter.format$O(value);
return C$.superclazz.prototype.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I.apply(this, [table, value, isSelected, hasFocus, row, column]);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
