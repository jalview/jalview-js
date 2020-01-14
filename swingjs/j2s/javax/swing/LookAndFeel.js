(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.UIManager','swingjs.JSUtil','javax.swing.plaf.InputMapUIResource','javax.swing.plaf.ComponentInputMapUIResource','javax.swing.KeyStroke','sun.swing.DefaultLayoutStyle']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LookAndFeel");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'installColors$javax_swing_JComponent$S$S', function (c, defaultBgName, defaultFgName) {
var bg=c.getBackground$();
if (bg == null  || Clazz.instanceOf(bg, "javax.swing.plaf.UIResource") ) c.setBackground$java_awt_Color($I$(1).getColor$O(defaultBgName));
var fg=c.getForeground$();
if (fg == null  || Clazz.instanceOf(fg, "javax.swing.plaf.UIResource") ) c.setForeground$java_awt_Color($I$(1).getColor$O(defaultFgName));
}, 1);

Clazz.newMeth(C$, 'installColorsAndFont$javax_swing_JComponent$S$S$S', function (c, defaultBgName, defaultFgName, defaultFontName) {
if (c.isAWT || c.isAWT$ ||false) return;
var f=c.getFont$();
if (f == null  || Clazz.instanceOf(f, "javax.swing.plaf.UIResource") ) {
c.setFont$java_awt_Font($I$(1).getFont$O(defaultFontName));
}if (defaultBgName != null ) C$.installColors$javax_swing_JComponent$S$S(c, defaultBgName, defaultFgName);
}, 1);

Clazz.newMeth(C$, 'installBorder$javax_swing_JComponent$S', function (c, defaultBorderName) {
var b=c.getBorder$();
if (b == null  || Clazz.instanceOf(b, "javax.swing.plaf.UIResource") ) {
c.setBorder$javax_swing_border_Border($I$(1).getBorder$O(defaultBorderName));
}}, 1);

Clazz.newMeth(C$, 'uninstallBorder$javax_swing_JComponent', function (c) {
if (Clazz.instanceOf(c.getBorder$(), "javax.swing.plaf.UIResource")) {
c.setBorder$javax_swing_border_Border(null);
}}, 1);

Clazz.newMeth(C$, 'installProperty$javax_swing_JComponent$S$O', function (c, propertyName, propertyValue) {
if (Clazz.instanceOf(c, "javax.swing.JPasswordField")) {
if (!(c).customSetUIProperty$S$O(propertyName, propertyValue)) {
c.setUIProperty$S$O(propertyName, propertyValue);
}} else {
c.setUIProperty$S$O(propertyName, propertyValue);
}}, 1);

Clazz.newMeth(C$, 'makeKeyBindings$OA', function (keyBindingList) {
$I$(2).notImplemented$S(null);
return null;
}, 1);

Clazz.newMeth(C$, 'makeInputMap$OA', function (keys) {
var retMap=Clazz.new_($I$(3));
C$.loadKeyBindings$javax_swing_InputMap$OA(retMap, keys);
return retMap;
}, 1);

Clazz.newMeth(C$, 'makeComponentInputMap$javax_swing_JComponent$OA', function (c, keys) {
var retMap=Clazz.new_($I$(4).c$$javax_swing_JComponent,[c]);
C$.loadKeyBindings$javax_swing_InputMap$OA(retMap, keys);
return retMap;
}, 1);

Clazz.newMeth(C$, 'loadKeyBindings$javax_swing_InputMap$OA', function (retMap, keys) {
if (keys != null ) {
for (var counter=0, maxCounter=keys.length; counter < maxCounter; counter++) {
var keyStrokeO=keys[counter++];
var ks=(Clazz.instanceOf(keyStrokeO, "javax.swing.KeyStroke")) ? keyStrokeO : $I$(5).getKeyStroke$S(keyStrokeO);
retMap.put$javax_swing_KeyStroke$O(ks, keys[counter]);
}
}}, 1);

Clazz.newMeth(C$, 'makeIcon$Class$S', function (baseClass, gifFile) {
$I$(2).notImplemented$S(null);
return null;
}, 1);

Clazz.newMeth(C$, 'getLayoutStyle$', function () {
return $I$(6).getInstance$();
});

Clazz.newMeth(C$, 'provideErrorFeedback$java_awt_Component', function (component) {
$I$(2).notImplemented$S(null);
});

Clazz.newMeth(C$, 'getDesktopPropertyValue$S$O', function (systemPropertyName, fallbackValue) {
$I$(2).notImplemented$S(null);
return fallbackValue;
}, 1);

Clazz.newMeth(C$, 'getDisabledIcon$javax_swing_JComponent$javax_swing_Icon', function (component, icon) {
$I$(2).notImplemented$S(null);
return null;
});

Clazz.newMeth(C$, 'getDisabledSelectedIcon$javax_swing_JComponent$javax_swing_Icon', function (component, icon) {
return this.getDisabledIcon$javax_swing_JComponent$javax_swing_Icon(component, icon);
});

Clazz.newMeth(C$, 'getSupportsWindowDecorations$', function () {
return false;
});

Clazz.newMeth(C$, 'initialize$', function () {
});

Clazz.newMeth(C$, 'uninitialize$', function () {
});

Clazz.newMeth(C$, 'getDefaults$', function () {
return null;
});

Clazz.newMeth(C$, 'toString', function () {
return "[" + this.getDescription$() + " - " + this.getClass$().getName$() + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
