(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'swingjs.a2s.A2SEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Scrollbar", null, 'javax.swing.JScrollBar');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fromUI=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [1]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (direction) {
C$.c$$I$I$I$I$I.apply(this, [direction, 0, 10, 0, 100]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I', function (orientation, value, extent, min, max) {
C$.superclazz.c$$I$I$I$I$I.apply(this, [orientation, Math.max(Math.min(value, max), min), extent, min, max]);
C$.$init$.apply(this);
this.setOpaque$Z(true);
this.setBlockIncrement$I(10);
}, 1);

Clazz.newMeth(C$, 'fireAdjustmentValueChanged$I$I$I$Z', function (id, type, value, adjusting) {
$I$(1).addListener$java_awt_Component(this);
if (!this.fromUI) return;
C$.superclazz.prototype.fireAdjustmentValueChanged$I$I$I$Z.apply(this, [id, type, value, adjusting]);
});

Clazz.newMeth(C$, 'setValueFromUI$I', function (val) {
this.fromUI=true;
this.setValue$I(val);
this.fromUI=false;
});

Clazz.newMeth(C$, 'processAdjustmentEventA2S$java_awt_event_AdjustmentEvent', function (e) {
if (this.fromUI) this.processAdjustmentEvent$java_awt_event_AdjustmentEvent(e);
});

Clazz.newMeth(C$, 'processAdjustmentEvent$java_awt_event_AdjustmentEvent', function (e) {
});

Clazz.newMeth(C$, 'setValueIsAdjustingFromUI$Z', function (b) {
this.fromUI=true;
this.setValueIsAdjusting$Z(b);
this.fromUI=false;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
