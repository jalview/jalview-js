(function(){var P$=Clazz.newPackage("javax.swing.border"),I$=[[0,'java.awt.Insets']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SoftBevelBorder", null, 'javax.swing.border.BevelBorder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (bevelType) {
C$.superclazz.c$$I.apply(this, [bevelType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_Color$java_awt_Color', function (bevelType, highlight, shadow) {
C$.superclazz.c$$I$java_awt_Color$java_awt_Color.apply(this, [bevelType, highlight, shadow]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color', function (bevelType, highlightOuterColor, highlightInnerColor, shadowOuterColor, shadowInnerColor) {
C$.superclazz.c$$I$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color.apply(this, [bevelType, highlightOuterColor, highlightInnerColor, shadowOuterColor, shadowInnerColor]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I', function (c, g, x, y, width, height) {
var oldColor=g.getColor$();
g.translate$I$I(x, y);
if (this.bevelType == 0) {
g.setColor$java_awt_Color(this.getHighlightOuterColor$java_awt_Component(c));
g.drawLine$I$I$I$I(0, 0, width - 2, 0);
g.drawLine$I$I$I$I(0, 0, 0, height - 2);
g.drawLine$I$I$I$I(1, 1, 1, 1);
g.setColor$java_awt_Color(this.getHighlightInnerColor$java_awt_Component(c));
g.drawLine$I$I$I$I(2, 1, width - 2, 1);
g.drawLine$I$I$I$I(1, 2, 1, height - 2);
g.drawLine$I$I$I$I(2, 2, 2, 2);
g.drawLine$I$I$I$I(0, height - 1, 0, height - 2);
g.drawLine$I$I$I$I(width - 1, 0, width - 1, 0);
g.setColor$java_awt_Color(this.getShadowOuterColor$java_awt_Component(c));
g.drawLine$I$I$I$I(2, height - 1, width - 1, height - 1);
g.drawLine$I$I$I$I(width - 1, 2, width - 1, height - 1);
g.setColor$java_awt_Color(this.getShadowInnerColor$java_awt_Component(c));
g.drawLine$I$I$I$I(width - 2, height - 2, width - 2, height - 2);
} else if (this.bevelType == 1) {
g.setColor$java_awt_Color(this.getShadowOuterColor$java_awt_Component(c));
g.drawLine$I$I$I$I(0, 0, width - 2, 0);
g.drawLine$I$I$I$I(0, 0, 0, height - 2);
g.drawLine$I$I$I$I(1, 1, 1, 1);
g.setColor$java_awt_Color(this.getShadowInnerColor$java_awt_Component(c));
g.drawLine$I$I$I$I(2, 1, width - 2, 1);
g.drawLine$I$I$I$I(1, 2, 1, height - 2);
g.drawLine$I$I$I$I(2, 2, 2, 2);
g.drawLine$I$I$I$I(0, height - 1, 0, height - 2);
g.drawLine$I$I$I$I(width - 1, 0, width - 1, 0);
g.setColor$java_awt_Color(this.getHighlightOuterColor$java_awt_Component(c));
g.drawLine$I$I$I$I(2, height - 1, width - 1, height - 1);
g.drawLine$I$I$I$I(width - 1, 2, width - 1, height - 1);
g.setColor$java_awt_Color(this.getHighlightInnerColor$java_awt_Component(c));
g.drawLine$I$I$I$I(width - 2, height - 2, width - 2, height - 2);
}g.translate$I$I(-x, -y);
g.setColor$java_awt_Color(oldColor);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component', function (c) {
return this.getBorderInsets$java_awt_Component$java_awt_Insets(c, Clazz.new_($I$(1).c$$I$I$I$I,[0, 0, 0, 0]));
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets', function (c, insets) {
insets.top=insets.left=insets.bottom=insets.right=3;
return insets;
});

Clazz.newMeth(C$, 'isBorderOpaque$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
