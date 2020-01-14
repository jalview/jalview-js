(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Color','java.awt.Insets','swingjs.a2s.A2SEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Button", null, 'javax.swing.JButton');
C$.bgcolor=null;
C$.awtInsets=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.bgcolor=Clazz.new_($I$(1).c$$I$I$I,[238, 238, 238]);
C$.awtInsets=Clazz.new_($I$(2).c$$I$I$I$I,[5, 6, 5, 6]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (text) {
C$.superclazz.c$$S.apply(this, [text]);
C$.$init$.apply(this);
if (!this.isBackgroundSet$()) this.setBackground$java_awt_Color(C$.bgcolor);
}, 1);

Clazz.newMeth(C$, 'getMargin$', function () {
return C$.awtInsets;
});

Clazz.newMeth(C$, 'fireActionPerformed$java_awt_event_ActionEvent', function (event) {
$I$(3).addListener$java_awt_Component(this);
C$.superclazz.prototype.fireActionPerformed$java_awt_event_ActionEvent.apply(this, [event]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:44 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
