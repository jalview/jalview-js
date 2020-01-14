(function(){var P$=Clazz.newPackage("org.jmol.dialog"),I$=[];
var C$=Clazz.newClass(P$, "FileChooser", null, 'javax.swing.JFileChooser');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dialogLocation=null;
this.dialogSize=null;
this.$dialog=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.dialogLocation=null;
this.dialogSize=null;
this.$dialog=null;
}, 1);

Clazz.newMeth(C$, 'createDialog$java_awt_Component', function (parent) {
this.$dialog=C$.superclazz.prototype.createDialog$java_awt_Component.apply(this, [parent]);
if (this.$dialog != null ) {
if (this.dialogLocation != null ) {
this.$dialog.setLocation$java_awt_Point(this.dialogLocation);
}if (this.dialogSize != null ) {
this.$dialog.setSize$java_awt_Dimension(this.dialogSize);
}}return this.$dialog;
});

Clazz.newMeth(C$, 'setDialogLocation$java_awt_Point', function (p) {
this.dialogLocation=p;
});

Clazz.newMeth(C$, 'setDialogSize$java_awt_Dimension', function (d) {
this.dialogSize=d;
});

Clazz.newMeth(C$, 'getDialog$', function () {
return this.$dialog;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
