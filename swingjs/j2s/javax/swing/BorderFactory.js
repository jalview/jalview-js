(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.border.BevelBorder','javax.swing.border.EtchedBorder','javax.swing.border.EmptyBorder','javax.swing.border.LineBorder','javax.swing.border.TitledBorder','javax.swing.border.CompoundBorder','javax.swing.border.MatteBorder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BorderFactory");
C$.sharedRaisedBevel=null;
C$.sharedLoweredBevel=null;
C$.sharedEtchedBorder=null;
C$.sharedRaisedEtchedBorder=null;
C$.emptyBorder=null;
C$.html5Border=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.sharedRaisedBevel=Clazz.new_($I$(1).c$$I,[0]);
C$.sharedLoweredBevel=Clazz.new_($I$(1).c$$I,[1]);
C$.sharedEtchedBorder=Clazz.new_($I$(2));
C$.emptyBorder=Clazz.new_($I$(3).c$$I$I$I$I,[0, 0, 0, 0]);
C$.html5Border=Clazz.new_($I$(3).c$$I$I$I$I,[0, 0, 0, 0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createLineBorder$java_awt_Color', function (color) {
return Clazz.new_($I$(4).c$$java_awt_Color$I,[color, 1]);
}, 1);

Clazz.newMeth(C$, 'createLineBorder$java_awt_Color$I', function (color, thickness) {
return Clazz.new_($I$(4).c$$java_awt_Color$I,[color, thickness]);
}, 1);

Clazz.newMeth(C$, 'createRaisedBevelBorder$', function () {
return C$.createSharedBevel$I(0);
}, 1);

Clazz.newMeth(C$, 'createLoweredBevelBorder$', function () {
return C$.createSharedBevel$I(1);
}, 1);

Clazz.newMeth(C$, 'createBevelBorder$I', function (type) {
return C$.createSharedBevel$I(type);
}, 1);

Clazz.newMeth(C$, 'createBevelBorder$I$java_awt_Color$java_awt_Color', function (type, highlight, shadow) {
return Clazz.new_($I$(1).c$$I$java_awt_Color$java_awt_Color,[type, highlight, shadow]);
}, 1);

Clazz.newMeth(C$, 'createBevelBorder$I$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color', function (type, highlightOuter, highlightInner, shadowOuter, shadowInner) {
return Clazz.new_($I$(1).c$$I$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color,[type, highlightOuter, highlightInner, shadowOuter, shadowInner]);
}, 1);

Clazz.newMeth(C$, 'createSharedBevel$I', function (type) {
if (type == 0) {
return C$.sharedRaisedBevel;
} else if (type == 1) {
return C$.sharedLoweredBevel;
}return null;
}, 1);

Clazz.newMeth(C$, 'createEtchedBorder$', function () {
return C$.sharedEtchedBorder;
}, 1);

Clazz.newMeth(C$, 'createEtchedBorder$java_awt_Color$java_awt_Color', function (highlight, shadow) {
return Clazz.new_($I$(2).c$$java_awt_Color$java_awt_Color,[highlight, shadow]);
}, 1);

Clazz.newMeth(C$, 'createEtchedBorder$I', function (type) {
switch (type) {
case 0:
if (C$.sharedRaisedEtchedBorder == null ) {
C$.sharedRaisedEtchedBorder=Clazz.new_($I$(2).c$$I,[0]);
}return C$.sharedRaisedEtchedBorder;
case 1:
return C$.sharedEtchedBorder;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["type must be one of EtchedBorder.RAISED or EtchedBorder.LOWERED"]);
}
}, 1);

Clazz.newMeth(C$, 'createEtchedBorder$I$java_awt_Color$java_awt_Color', function (type, highlight, shadow) {
return Clazz.new_($I$(2).c$$I$java_awt_Color$java_awt_Color,[type, highlight, shadow]);
}, 1);

Clazz.newMeth(C$, 'createTitledBorder$S', function (title) {
return Clazz.new_($I$(5).c$$S,[title]);
}, 1);

Clazz.newMeth(C$, 'createTitledBorder$javax_swing_border_Border', function (border) {
return Clazz.new_($I$(5).c$$javax_swing_border_Border,[border]);
}, 1);

Clazz.newMeth(C$, 'createTitledBorder$javax_swing_border_Border$S', function (border, title) {
return Clazz.new_($I$(5).c$$javax_swing_border_Border$S,[border, title]);
}, 1);

Clazz.newMeth(C$, 'createTitledBorder$javax_swing_border_Border$S$I$I', function (border, title, titleJustification, titlePosition) {
return Clazz.new_($I$(5).c$$javax_swing_border_Border$S$I$I,[border, title, titleJustification, titlePosition]);
}, 1);

Clazz.newMeth(C$, 'createTitledBorder$javax_swing_border_Border$S$I$I$java_awt_Font', function (border, title, titleJustification, titlePosition, titleFont) {
return Clazz.new_($I$(5).c$$javax_swing_border_Border$S$I$I$java_awt_Font,[border, title, titleJustification, titlePosition, titleFont]);
}, 1);

Clazz.newMeth(C$, 'createTitledBorder$javax_swing_border_Border$S$I$I$java_awt_Font$java_awt_Color', function (border, title, titleJustification, titlePosition, titleFont, titleColor) {
return Clazz.new_($I$(5).c$$javax_swing_border_Border$S$I$I$java_awt_Font$java_awt_Color,[border, title, titleJustification, titlePosition, titleFont, titleColor]);
}, 1);

Clazz.newMeth(C$, 'createEmptyBorder$', function () {
return C$.emptyBorder;
}, 1);

Clazz.newMeth(C$, 'createHTML5Border$', function () {
return C$.html5Border;
}, 1);

Clazz.newMeth(C$, 'createEmptyBorder$I$I$I$I', function (top, left, bottom, right) {
return Clazz.new_($I$(3).c$$I$I$I$I,[top, left, bottom, right]);
}, 1);

Clazz.newMeth(C$, 'createCompoundBorder$', function () {
return Clazz.new_($I$(6));
}, 1);

Clazz.newMeth(C$, 'createCompoundBorder$javax_swing_border_Border$javax_swing_border_Border', function (outsideBorder, insideBorder) {
return Clazz.new_($I$(6).c$$javax_swing_border_Border$javax_swing_border_Border,[outsideBorder, insideBorder]);
}, 1);

Clazz.newMeth(C$, 'createMatteBorder$I$I$I$I$java_awt_Color', function (top, left, bottom, right, color) {
return Clazz.new_($I$(7).c$$I$I$I$I$java_awt_Color,[top, left, bottom, right, color]);
}, 1);

Clazz.newMeth(C$, 'createMatteBorder$I$I$I$I$javax_swing_Icon', function (top, left, bottom, right, tileIcon) {
return Clazz.new_($I$(7).c$$I$I$I$I$javax_swing_Icon,[top, left, bottom, right, tileIcon]);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
