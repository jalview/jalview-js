(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.gui.JvSwingUtils','javax.swing.ButtonGroup','javax.swing.JRadioButton']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JalviewBooleanRadioButtons", null, 'javax.swing.AbstractButton');
C$.LABEL_FONT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.LABEL_FONT=$I$(1).getLabelFont$();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.buttonGroup=null;
this.buttonTrue=null;
this.buttonFalse=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.buttonGroup=Clazz.new_($I$(2));
this.buttonTrue=Clazz.new_($I$(3));
this.buttonFalse=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'c$$Z$S$S', function (value, trueLabel, falseLabel) {
Clazz.super_(C$, this,1);
this.init$();
this.setLabels$S$S(trueLabel, falseLabel);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (value) {
Clazz.super_(C$, this,1);
this.init$();
this.setSelected$Z(value);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$', function () {
this.buttonTrue.setFont$java_awt_Font(C$.LABEL_FONT);
this.buttonFalse.setFont$java_awt_Font(C$.LABEL_FONT);
this.buttonGroup.add$javax_swing_AbstractButton(this.buttonTrue);
this.buttonGroup.add$javax_swing_AbstractButton(this.buttonFalse);
});

Clazz.newMeth(C$, 'setLabels$S$S', function (trueLabel, falseLabel) {
this.buttonTrue.setText$S(trueLabel);
this.buttonFalse.setText$S(falseLabel);
});

Clazz.newMeth(C$, 'setSelected$Z', function (b) {
this.buttonFalse.setSelected$Z(!b);
this.buttonTrue.setSelected$Z(b);
});

Clazz.newMeth(C$, 'isSelected$', function () {
return this.buttonTrue.isSelected$() && !this.buttonFalse.isSelected$() ;
});

Clazz.newMeth(C$, 'setEnabled$Z', function (b) {
this.buttonTrue.setEnabled$Z(b);
this.buttonFalse.setEnabled$Z(b);
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.buttonTrue.isEnabled$() && this.buttonFalse.isEnabled$() ;
});

Clazz.newMeth(C$, 'getTrueButton$', function () {
return this.buttonTrue;
});

Clazz.newMeth(C$, 'getFalseButton$', function () {
return this.buttonFalse;
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener', function (l) {
this.buttonTrue.addActionListener$java_awt_event_ActionListener(l);
this.buttonFalse.addActionListener$java_awt_event_ActionListener(l);
});

Clazz.newMeth(C$, 'addTrueActionListener$java_awt_event_ActionListener', function (l) {
this.buttonTrue.addActionListener$java_awt_event_ActionListener(l);
});

Clazz.newMeth(C$, 'addFalseActionListener$java_awt_event_ActionListener', function (l) {
this.buttonFalse.addActionListener$java_awt_event_ActionListener(l);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
