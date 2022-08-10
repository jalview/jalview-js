(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jsonkiosk"),I$=[[0,'java.awt.Color','javax.swing.JLabel','java.awt.Font']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BannerFrame", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['bannerLabel','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$$I$I', function (width, height) {
Clazz.super_(C$, this);
this.setTitle$S("Banner");
this.setUndecorated$Z(true);
this.setBackground$java_awt_Color($I$(1).WHITE);
this.setSize$I$I(width, height);
this.setBounds$I$I$I$I(0, 0, width, height);
this.bannerLabel=Clazz.new_($I$(2,1).c$$S$I,["<html>type exitJmol[enter] to quit</html>", 0]);
this.bannerLabel.setPreferredSize$java_awt_Dimension(this.getSize$());
this.bannerLabel.setFont$java_awt_Font(Clazz.new_($I$(3,1).c$$S$I$I,["Helvetica", 1, 30]));
this.getContentPane$().add$java_awt_Component$O(this.bannerLabel, "Center");
this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'setLabel$S', function (label) {
if (label != null ) this.bannerLabel.setText$S(label);
this.setVisible$Z(label != null );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
