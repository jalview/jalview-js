(function(){var P$=Clazz.newPackage("jalview.jbgui"),I$=[];
var C$=Clazz.newClass(P$, "BackupFilesPresetsComboBoxRenderer", null, 'javax.swing.DefaultListCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['getListCellRendererComponent$javax_swing_JList$O$I$Z$Z','getListCellRendererComponent$','getListCellRendererComponent$javax_swing_JList$TE$I$Z$Z'], function (list, value, index, isSelected, cellHasFocus) {
C$.superclazz.prototype.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z.apply(this, [list, value, index, isSelected, cellHasFocus]);
try {
var e=value;
if (e.getKey$() == 0) {
this.setFont$java_awt_Font(this.getFont$().deriveFont$I(1));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return this;
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
