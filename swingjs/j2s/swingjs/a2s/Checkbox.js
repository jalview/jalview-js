(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'javax.swing.JRadioButton','swingjs.a2s.A2SEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Checkbox", null, 'javax.swing.JCheckBox');
C$.isRadioTemp=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isRadio=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'newRadioButton$S$javax_swing_ButtonGroup$Z', function (string, bg, b) {
var rb=Clazz.new_($I$(1).c$$S$Z,[string, b]);
bg.add$javax_swing_AbstractButton(rb);
return rb;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (string) {
C$.superclazz.c$$S$Z.apply(this, [string, false]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z', function (string, b) {
C$.superclazz.c$$S$Z.apply(this, [string, b]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$java_awt_CheckboxGroup', function (label, state, group) {
C$.superclazz.c$$S$javax_swing_Icon$Z.apply(this, [label, C$.setIsRadio$(), false]);
C$.$init$.apply(this);
this.setState$Z(state);
if (group != null ) group.add$javax_swing_AbstractButton(this);
if (state && (group != null ) ) {
this.setSelected$Z(state);
}}, 1);

Clazz.newMeth(C$, 'setIsRadio$', function () {
C$.isRadioTemp=new Boolean(true);
return null;
}, 1);

Clazz.newMeth(C$, 'isRadio$', function () {
var b=(C$.isRadioTemp == null  ? this.isRadio : (C$.isRadioTemp).booleanValue$());
this.isRadio=b;
C$.isRadioTemp=null;
return b;
});

Clazz.newMeth(C$, 'c$$S$java_awt_CheckboxGroup$Z', function (label, group, state) {
C$.c$$S$Z$java_awt_CheckboxGroup.apply(this, [label, state, group]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getState$', function () {
return this.isSelected$();
});

Clazz.newMeth(C$, 'setState$Z', function (b) {
if ((this.model).setStateNoFire$Z(b)) (this.getUI$()).updateDOMNode$();
});

Clazz.newMeth(C$, 'setCheckboxGroup$java_awt_CheckboxGroup', function (group) {
if (group != null ) group.add$javax_swing_AbstractButton(this);
});

Clazz.newMeth(C$, 'fireActionPerformed$java_awt_event_ActionEvent', function (event) {
$I$(2).addListener$java_awt_Component(this);
C$.superclazz.prototype.fireActionPerformed$java_awt_event_ActionEvent.apply(this, [event]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:44 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
