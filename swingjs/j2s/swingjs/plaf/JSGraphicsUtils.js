(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'java.awt.Dimension','javax.swing.SwingUtilities','java.awt.Toolkit']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSGraphicsUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPreferredButtonSize$javax_swing_AbstractButton$I', function (b, textIconGap) {
if (b.getComponentCount$() > 0) {
return null;
}var ui=(b).getUI$();
ui.setTainted$();
var icon=b.getIcon$();
var text=b.getText$();
if (ui.isAWT && text == "" ) text="\u00a0";
var font=ui.getFont$();
if (font == null ) return Clazz.new_($I$(1).c$$I$I,[10, 12]);
var fm=b.getFontMetrics$java_awt_Font(font);
ui.setButtonRectangles$Z(true);
$I$(2).layoutCompoundLabel$javax_swing_JComponent$java_awt_FontMetrics$S$javax_swing_Icon$I$I$I$I$java_awt_Rectangle$java_awt_Rectangle$java_awt_Rectangle$I(b, fm, text, icon, b.getVerticalAlignment$(), b.getHorizontalAlignment$(), b.getVerticalTextPosition$(), b.getHorizontalTextPosition$(), ui.viewR, ui.iconR, ui.textR, textIconGap);
var r=ui.viewR;
var insets=ui.insets;
r.width+=insets.left + insets.right;
r.height+=insets.top + insets.bottom;
return r.getSize$();
}, 1);

Clazz.newMeth(C$, 'isLeftToRight$java_awt_Component', function (c) {
return c.getComponentOrientation$().isLeftToRight$();
}, 1);

Clazz.newMeth(C$, 'isMenuShortcutKeyDown$java_awt_event_InputEvent', function (event) {
return (event.getModifiers$() & $I$(3).getDefaultToolkit$().getMenuShortcutKeyMask$()) != 0;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
