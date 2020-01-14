(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jsonkiosk"),I$=[[0,'java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "KioskFrame", null, 'javax.swing.JFrame');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$javax_swing_JPanel', function (x, y, width, height, kioskPanel) {
Clazz.super_(C$, this,1);
this.setTitle$S("KioskFrame");
this.setUndecorated$Z(true);
this.setBackground$java_awt_Color(Clazz.new_($I$(1).c$$I$I$I$I,[0, 0, 0, 0]));
this.setPanel$javax_swing_JPanel(kioskPanel);
this.setSize$I$I(width, height);
this.setBounds$I$I$I$I(x, y, width, height);
this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'setPanel$javax_swing_JPanel', function (kioskPanel) {
if (kioskPanel == null ) return;
this.getContentPane$().add$java_awt_Component(kioskPanel);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
