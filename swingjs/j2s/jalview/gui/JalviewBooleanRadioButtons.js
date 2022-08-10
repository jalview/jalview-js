(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.gui.JvSwingUtils','javax.swing.ButtonGroup','javax.swing.JRadioButton']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewBooleanRadioButtons", null, 'javax.swing.AbstractButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buttonGroup=Clazz.new_($I$(2,1));
this.buttonTrue=Clazz.new_($I$(3,1));
this.buttonFalse=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['buttonGroup','javax.swing.ButtonGroup','buttonTrue','javax.swing.JRadioButton','+buttonFalse']]
,['O',['LABEL_FONT','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$Z$S$S',  function (value, trueLabel, falseLabel) {
Clazz.super_(C$, this);
this.init$();
this.setLabels$S$S(trueLabel, falseLabel);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (value) {
Clazz.super_(C$, this);
this.init$();
this.setSelected$Z(value);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
this.buttonTrue.setFont$java_awt_Font(C$.LABEL_FONT);
this.buttonFalse.setFont$java_awt_Font(C$.LABEL_FONT);
this.buttonGroup.add$javax_swing_AbstractButton(this.buttonTrue);
this.buttonGroup.add$javax_swing_AbstractButton(this.buttonFalse);
});

Clazz.newMeth(C$, 'setLabels$S$S',  function (trueLabel, falseLabel) {
this.buttonTrue.setText$S(trueLabel);
this.buttonFalse.setText$S(falseLabel);
});

Clazz.newMeth(C$, 'setSelected$Z',  function (b) {
this.buttonFalse.setSelected$Z(!b);
this.buttonTrue.setSelected$Z(b);
});

Clazz.newMeth(C$, 'isSelected$',  function () {
return this.buttonTrue.isSelected$() && !this.buttonFalse.isSelected$() ;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
this.buttonTrue.setEnabled$Z(b);
this.buttonFalse.setEnabled$Z(b);
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.buttonTrue.isEnabled$() && this.buttonFalse.isEnabled$() ;
});

Clazz.newMeth(C$, 'getTrueButton$',  function () {
return this.buttonTrue;
});

Clazz.newMeth(C$, 'getFalseButton$',  function () {
return this.buttonFalse;
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (l) {
this.buttonTrue.addActionListener$java_awt_event_ActionListener(l);
this.buttonFalse.addActionListener$java_awt_event_ActionListener(l);
});

Clazz.newMeth(C$, 'addTrueActionListener$java_awt_event_ActionListener',  function (l) {
this.buttonTrue.addActionListener$java_awt_event_ActionListener(l);
});

Clazz.newMeth(C$, 'addFalseActionListener$java_awt_event_ActionListener',  function (l) {
this.buttonFalse.addActionListener$java_awt_event_ActionListener(l);
});

C$.$static$=function(){C$.$static$=0;
C$.LABEL_FONT=$I$(1).getLabelFont$();
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:34 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
