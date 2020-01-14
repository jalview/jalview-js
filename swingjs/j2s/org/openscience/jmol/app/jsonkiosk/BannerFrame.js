(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jsonkiosk"),I$=[[0,'java.awt.Color','javax.swing.JLabel','java.awt.Font']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BannerFrame", null, 'javax.swing.JFrame');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bannerLabel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (width, height) {
Clazz.super_(C$, this,1);
this.setTitle$S("Banner");
this.setUndecorated$Z(true);
this.setBackground$java_awt_Color($I$(1).WHITE);
this.setSize$I$I(width, height);
this.setBounds$I$I$I$I(0, 0, width, height);
this.bannerLabel=Clazz.new_($I$(2).c$$S$I,["<html>type exitJmol[enter] to quit</html>", 0]);
this.bannerLabel.setPreferredSize$java_awt_Dimension(this.getSize$());
this.bannerLabel.setFont$java_awt_Font(Clazz.new_($I$(3).c$$S$I$I,["Helvetica", 1, 30]));
this.getContentPane$().add$java_awt_Component$O(this.bannerLabel, "Center");
this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'setLabel$S', function (label) {
if (label != null ) this.bannerLabel.setText$S(label);
this.setVisible$Z(label != null );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
