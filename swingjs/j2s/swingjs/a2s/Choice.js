(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Color','swingjs.a2s.A2SEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Choice", null, 'javax.swing.JComboBox');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.setBackground$java_awt_Color($I$(1).white);
}, 1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'select$I', function (index) {
this.setSelectedIndex$I(index);
});

Clazz.newMeth(C$, 'select$S', function (key) {
this.setSelectedItem$O(key);
});

Clazz.newMeth(C$, 'add$S', function (label) {
this.addItem$S(label);
});

Clazz.newMeth(C$, 'countItems$', function () {
return this.getItemCount$();
});

Clazz.newMeth(C$, 'addItem$S', function (item) {
C$.superclazz.prototype.addItem$O.apply(this, [item]);
});

Clazz.newMeth(C$, 'insert$S$I', function (item, index) {
C$.superclazz.prototype.insertItemAt$O$I.apply(this, [item, index]);
});

Clazz.newMeth(C$, 'remove$S', function (item) {
this.removeItem$O(item);
});

Clazz.newMeth(C$, 'getItem$I', function (n) {
return this.getItemAt$I(n);
});

Clazz.newMeth(C$, 'removeAll$', function () {
this.removeAllItems$();
});

Clazz.newMeth(C$, 'fireActionEvent$', function () {
$I$(2).addListener$java_awt_Component(this);
C$.superclazz.prototype.fireActionEvent$.apply(this, []);
});

Clazz.newMeth(C$, 'fireItemStateChanged$java_awt_event_ItemEvent', function (event) {
if (!this._trigger) return;
$I$(2).addListener$java_awt_Component(this);
C$.superclazz.prototype.fireItemStateChanged$java_awt_event_ItemEvent.apply(this, [event]);
});

Clazz.newMeth(C$, 'getActionCommand$', function () {
return this.getSelectedItem$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:44 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
