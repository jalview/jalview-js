(function(){var P$=Clazz.newPackage("javax.swing.colorchooser"),p$1={},p$2={},I$=[[0,'java.awt.GridBagLayout','java.awt.GridBagConstraints','javax.swing.JPanel','javax.swing.colorchooser.MainSwatchPanel','javax.swing.colorchooser.RecentSwatchPanel',['javax.swing.colorchooser.DefaultSwatchChooserPanel','.MainSwatchListener'],['javax.swing.colorchooser.DefaultSwatchChooserPanel','.RecentSwatchListener'],'java.awt.BorderLayout','javax.swing.border.CompoundBorder','javax.swing.border.LineBorder','java.awt.Color','java.awt.Insets','javax.swing.JLabel','java.awt.Dimension','javax.swing.UIManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DefaultSwatchChooserPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.colorchooser.AbstractColorChooserPanel');
C$.recentStr=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.recentStr="Recent";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.swatchPanel=null;
this.recentSwatchPanel=null;
this.mainSwatchListener=null;
this.recentSwatchListener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.setInheritsPopupMenu$Z(true);
}, 1);

Clazz.newMeth(C$, 'getDisplayName$', function () {
return "Swatches";
});

Clazz.newMeth(C$, 'getMnemonic$', function () {
return P$.AbstractColorChooserPanel.getInt$O$I("ColorChooser.swatchesMnemonic", -1);
});

Clazz.newMeth(C$, 'getDisplayedMnemonicIndex$', function () {
return P$.AbstractColorChooserPanel.getInt$O$I("ColorChooser.swatchesDisplayedMnemonicIndex", -1);
});

Clazz.newMeth(C$, 'getSmallDisplayIcon$', function () {
return null;
});

Clazz.newMeth(C$, 'getLargeDisplayIcon$', function () {
return null;
});

Clazz.newMeth(C$, 'installChooserPanel$javax_swing_JColorChooser', function (enclosingChooser) {
C$.superclazz.prototype.installChooserPanel$javax_swing_JColorChooser.apply(this, [enclosingChooser]);
});

Clazz.newMeth(C$, 'buildChooser$', function () {
var gb=Clazz.new_($I$(1));
var gbc=Clazz.new_($I$(2));
var superHolder=Clazz.new_($I$(3).c$$java_awt_LayoutManager,[gb]);
this.swatchPanel=Clazz.new_($I$(4));
this.swatchPanel.putClientProperty$O$O("AccessibleName", this.getDisplayName$());
this.swatchPanel.setInheritsPopupMenu$Z(true);
this.recentSwatchPanel=Clazz.new_($I$(5));
this.recentSwatchPanel.putClientProperty$O$O("AccessibleName", C$.recentStr);
this.mainSwatchListener=Clazz.new_($I$(6), [this, null]);
this.swatchPanel.addMouseListener$java_awt_event_MouseListener(this.mainSwatchListener);
this.recentSwatchListener=Clazz.new_($I$(7), [this, null]);
this.recentSwatchPanel.addMouseListener$java_awt_event_MouseListener(this.recentSwatchListener);
var mainHolder=Clazz.new_($I$(3).c$$java_awt_LayoutManager,[Clazz.new_($I$(8))]);
var border=Clazz.new_($I$(9).c$$javax_swing_border_Border$javax_swing_border_Border,[Clazz.new_($I$(10).c$$java_awt_Color,[$I$(11).black]), Clazz.new_($I$(10).c$$java_awt_Color,[$I$(11).white])]);
mainHolder.setBorder$javax_swing_border_Border(border);
mainHolder.add$java_awt_Component$O(this.swatchPanel, "Center");
gbc.anchor=25;
gbc.gridwidth=1;
gbc.gridheight=2;
var oldInsets=gbc.insets;
gbc.insets=Clazz.new_($I$(12).c$$I$I$I$I,[0, 0, 0, 10]);
superHolder.add$java_awt_Component$O(mainHolder, gbc);
gbc.insets=oldInsets;
this.recentSwatchPanel.addMouseListener$java_awt_event_MouseListener(this.recentSwatchListener);
this.recentSwatchPanel.setInheritsPopupMenu$Z(true);
var recentHolder=Clazz.new_($I$(3).c$$java_awt_LayoutManager,[Clazz.new_($I$(8))]);
recentHolder.setBorder$javax_swing_border_Border(border);
recentHolder.setInheritsPopupMenu$Z(true);
recentHolder.add$java_awt_Component$O(this.recentSwatchPanel, "Center");
var l=Clazz.new_($I$(13).c$$S,[C$.recentStr]);
l.setLabelFor$java_awt_Component(this.recentSwatchPanel);
gbc.gridwidth=0;
gbc.gridheight=1;
gbc.weighty=1.0;
superHolder.add$java_awt_Component$O(l, gbc);
gbc.weighty=0;
gbc.gridheight=0;
gbc.insets=Clazz.new_($I$(12).c$$I$I$I$I,[0, 0, 0, 2]);
superHolder.add$java_awt_Component$O(recentHolder, gbc);
superHolder.setInheritsPopupMenu$Z(true);
this.add$java_awt_Component(superHolder);
});

Clazz.newMeth(C$, 'uninstallChooserPanel$javax_swing_JColorChooser', function (enclosingChooser) {
C$.superclazz.prototype.uninstallChooserPanel$javax_swing_JColorChooser.apply(this, [enclosingChooser]);
this.swatchPanel.removeMouseListener$java_awt_event_MouseListener(this.mainSwatchListener);
this.recentSwatchPanel.removeMouseListener$java_awt_event_MouseListener(this.recentSwatchListener);
this.swatchPanel=null;
this.recentSwatchPanel=null;
this.mainSwatchListener=null;
this.recentSwatchListener=null;
this.removeAll$();
});

Clazz.newMeth(C$, 'updateChooser$', function () {
});
;
(function(){var C$=Clazz.newClass(P$.DefaultSwatchChooserPanel, "RecentSwatchListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
var color=this.this$0.recentSwatchPanel.getColorForLocation$I$I(e.getX$(), e.getY$());
this.b$['javax.swing.colorchooser.AbstractColorChooserPanel'].getColorSelectionModel$.apply(this.b$['javax.swing.colorchooser.AbstractColorChooserPanel'], []).setSelectedColor$java_awt_Color(color);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.DefaultSwatchChooserPanel, "MainSwatchListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
var color=this.this$0.swatchPanel.getColorForLocation$I$I(e.getX$(), e.getY$());
this.b$['javax.swing.colorchooser.AbstractColorChooserPanel'].getColorSelectionModel$.apply(this.b$['javax.swing.colorchooser.AbstractColorChooserPanel'], []).setSelectedColor$java_awt_Color(color);
this.this$0.recentSwatchPanel.setMostRecentColor$java_awt_Color(color);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
