(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),I$=[[0,'javax.swing.JLabel','java.awt.GridLayout','java.awt.Dimension','javax.swing.BorderFactory','java.awt.Font']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StatusBar", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.status=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.status=Clazz.array($I$(1), [3]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2).c$$I$I,[1, 3]));
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[640, 30]));
this.status[0]=Clazz.new_($I$(1));
this.status[0].setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[100, 100]));
this.status[0].setBorder$javax_swing_border_Border($I$(4).createBevelBorder$I(1));
this.status[0].setHorizontalAlignment$I(0);
this.status[1]=Clazz.new_($I$(1));
this.status[1].setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[100, 100]));
this.status[1].setBorder$javax_swing_border_Border($I$(4).createBevelBorder$I(1));
this.status[1].setHorizontalAlignment$I(0);
this.status[2]=Clazz.new_($I$(1));
this.status[2].setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[100, 100]));
this.status[2].setBorder$javax_swing_border_Border($I$(4).createBevelBorder$I(1));
this.status[2].setFont$java_awt_Font(Clazz.new_($I$(5).c$$S$I$I,["Monospaced", 0, 12]));
this.status[2].setHorizontalAlignment$I(0);
this.add$java_awt_Component(this.status[0]);
this.add$java_awt_Component(this.status[1]);
this.add$java_awt_Component(this.status[2]);
}, 1);

Clazz.newMeth(C$, 'setStatus$I$S', function (label, text) {
this.status[label - 1].setText$S(text);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
