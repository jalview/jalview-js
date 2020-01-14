(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'swingjs.a2s.A2SEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "A2SListener", null, null, ['java.awt.event.AdjustmentListener', 'java.awt.event.ActionListener', 'java.awt.event.KeyListener', 'java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.TextListener', 'javax.swing.event.ChangeListener', 'java.awt.event.ItemListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, ['adjustmentValueChanged$java_awt_event_AdjustmentEvent','adjustmentValueChanged$'], function (e) {
Clazz.new_($I$(1).c$$java_awt_AWTEvent,[e]).run$();
if (Clazz.instanceOf(e.getSource$(), "swingjs.a2s.Scrollbar")) (e.getSource$()).processAdjustmentEventA2S$java_awt_event_AdjustmentEvent(e);
});

Clazz.newMeth(C$, ['textValueChanged$java_awt_event_TextEvent','textValueChanged$'], function (e) {
System.out.println$S("AHAH! a2sListener textvalue changed " + e);
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
System.out.println$S("Ahah a2slistener state changed " + e.getSource$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
