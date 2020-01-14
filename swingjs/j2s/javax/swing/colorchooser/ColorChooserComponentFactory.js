(function(){var P$=Clazz.newPackage("javax.swing.colorchooser"),I$=[[0,'javax.swing.colorchooser.AbstractColorChooserPanel','javax.swing.colorchooser.DefaultSwatchChooserPanel','javax.swing.colorchooser.DefaultRGBChooserPanel','javax.swing.colorchooser.DefaultPreviewPanel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ColorChooserComponentFactory");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDefaultChooserPanels$', function () {
var choosers=Clazz.array($I$(1), -1, [Clazz.new_($I$(2)), Clazz.new_($I$(3))]);
return choosers;
}, 1);

Clazz.newMeth(C$, 'getPreviewPanel$', function () {
return Clazz.new_($I$(4));
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
