(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),I$=[[0,'java.awt.Dimension','javax.swing.JLabel','java.awt.GridLayout','javax.swing.BorderFactory','java.awt.Font']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StatusBar", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['status','javax.swing.JLabel[]']]]

Clazz.newMeth(C$, 'c$$I', function (startupWidth) {
Clazz.super_(C$, this);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1,1).c$$I$I,[startupWidth, 30]));
this.status=Clazz.array($I$(2), [3]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$I$I,[1, 3]));
this.status[0]=Clazz.new_($I$(2,1));
this.status[0].setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1,1).c$$I$I,[100, 100]));
this.status[0].setBorder$javax_swing_border_Border($I$(4).createBevelBorder$I(1));
this.status[0].setHorizontalAlignment$I(0);
this.status[0].setOpaque$Z(true);
this.status[1]=Clazz.new_($I$(2,1));
this.status[1].setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1,1).c$$I$I,[100, 100]));
this.status[1].setBorder$javax_swing_border_Border($I$(4).createBevelBorder$I(1));
this.status[1].setHorizontalAlignment$I(0);
this.status[1].setOpaque$Z(true);
this.status[2]=Clazz.new_($I$(2,1));
this.status[2].setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1,1).c$$I$I,[100, 100]));
this.status[2].setBorder$javax_swing_border_Border($I$(4).createBevelBorder$I(1));
this.status[2].setFont$java_awt_Font(Clazz.new_($I$(5,1).c$$S$I$I,["Monospaced", 0, 12]));
this.status[2].setHorizontalAlignment$I(0);
this.status[2].setOpaque$Z(true);
this.add$java_awt_Component(this.status[0]);
this.add$java_awt_Component(this.status[1]);
this.add$java_awt_Component(this.status[2]);
}, 1);

Clazz.newMeth(C$, 'setStatus$I$S', function (pos, text) {
this.status[pos - 1].setText$S(text);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
