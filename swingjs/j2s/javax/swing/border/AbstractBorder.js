(function(){var P$=Clazz.newPackage("javax.swing.border"),I$=[[0,'java.awt.Insets','java.awt.Rectangle',['java.awt.Component','.BaselineResizeBehavior']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractBorder", null, null, 'javax.swing.border.Border');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I', function (c, g, x, y, width, height) {
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component', function (c) {
return Clazz.new_($I$(1).c$$I$I$I$I,[0, 0, 0, 0]);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets', function (c, insets) {
insets.left=insets.top=insets.right=insets.bottom=0;
return insets;
});

Clazz.newMeth(C$, 'isBorderOpaque$', function () {
return false;
});

Clazz.newMeth(C$, 'getInteriorRectangle$java_awt_Component$I$I$I$I', function (c, x, y, width, height) {
return C$.getInteriorRectangle$java_awt_Component$javax_swing_border_Border$I$I$I$I(c, this, x, y, width, height);
});

Clazz.newMeth(C$, 'getInteriorRectangle$java_awt_Component$javax_swing_border_Border$I$I$I$I', function (c, b, x, y, width, height) {
var insets;
if (b != null ) insets=b.getBorderInsets$java_awt_Component(c);
 else insets=Clazz.new_($I$(1).c$$I$I$I$I,[0, 0, 0, 0]);
return Clazz.new_($I$(2).c$$I$I$I$I,[x + insets.left, y + insets.top, width - insets.right - insets.left , height - insets.top - insets.bottom ]);
}, 1);

Clazz.newMeth(C$, 'getBaseline$java_awt_Component$I$I', function (c, width, height) {
if (width < 0 || height < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width and height must be >= 0"]);
}return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$java_awt_Component', function (c) {
if (c == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Component must be non-null"]);
}return $I$(3).OTHER;
});

Clazz.newMeth(C$, 'isLeftToRight$java_awt_Component', function (c) {
return c.getComponentOrientation$().isLeftToRight$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
