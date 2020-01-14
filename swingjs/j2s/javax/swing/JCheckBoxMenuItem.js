(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,['javax.swing.JToggleButton','.ToggleButtonModel']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JCheckBoxMenuItem", null, 'javax.swing.JMenuItem', 'javax.swing.SwingConstants');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$javax_swing_Icon$Z.apply(this, [null, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon', function (icon) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [null, icon, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (text) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [text, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Action', function (a) {
C$.c$.apply(this, []);
this.setAction$javax_swing_Action(a);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon', function (text, icon) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [text, icon, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z', function (text, b) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [text, null, b]);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon$Z', function (text, icon, b) {
C$.superclazz.c$$S$javax_swing_Icon.apply(this, [text, icon]);
C$.$init$.apply(this);
this.setSelected$Z(b);
this.setFocusable$Z(false);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$', function () {
return "CheckBoxMenuItemUI";
});

Clazz.newMeth(C$, 'setModel$', function () {
this.setModel$javax_swing_ButtonModel(Clazz.new_($I$(1)));
});

Clazz.newMeth(C$, 'getState$', function () {
return this.isSelected$();
});

Clazz.newMeth(C$, 'setState$Z', function (b) {
this.setSelected$Z(b);
});

Clazz.newMeth(C$, 'getSelectedObjects$', function () {
if (this.isSelected$() == false ) return null;
var selectedObjects=Clazz.array(java.lang.Object, [1]);
selectedObjects[0]=this.getText$();
return selectedObjects;
});

Clazz.newMeth(C$, 'paramString$', function () {
return C$.superclazz.prototype.paramString$.apply(this, []);
});

Clazz.newMeth(C$, 'shouldUpdateSelectedStateFromAction$', function () {
return true;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
