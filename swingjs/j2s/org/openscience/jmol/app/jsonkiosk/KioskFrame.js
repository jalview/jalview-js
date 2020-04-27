(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jsonkiosk"),I$=[[0,'java.awt.Color']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "KioskFrame", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$I$I$I$javax_swing_JPanel', function (x, y, width, height, kioskPanel) {
Clazz.super_(C$, this);
this.setTitle$S("KioskFrame");
this.setUndecorated$Z(true);
this.setBackground$java_awt_Color(Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]));
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
