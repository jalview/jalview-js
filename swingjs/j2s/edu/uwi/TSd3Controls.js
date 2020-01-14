(function(){var P$=Clazz.newPackage("edu.uwi"),p$1={},p$2={},I$=[[0,'java.awt.BorderLayout','edu.uwi.TSd3Canvas','edu.uwi.TSd3Controls','javax.swing.JFrame','StringBuffer','java.awt.Font','java.awt.Color','java.awt.Rectangle','java.awt.BasicStroke','java.awt.Point','edu.uwi.TanSugd3S','java.awt.FlowLayout','javax.swing.ButtonGroup','javax.swing.JRadioButton']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TSd3Controls", null, 'javax.swing.JPanel', 'java.awt.event.ItemListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.s=null;
this.e=null;
this.$canvas=null;
this.range=0;
this.bg0=null;
this.bg5=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$edu_uwi_TSd3Canvas', function (canvas) {
Clazz.super_(C$, this,1);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12)));
this.setName$S("T3d3Controls");
this.$canvas=canvas;
this.range=0;
var bg=Clazz.new_($I$(13));
this.bg0=p$2.addButton$javax_swing_ButtonGroup$S$Z.apply(this, [bg, "0-50", true]);
p$2.addButton$javax_swing_ButtonGroup$S$Z.apply(this, [bg, "0-10", false]);
p$2.addButton$javax_swing_ButtonGroup$S$Z.apply(this, [bg, "10-20", false]);
p$2.addButton$javax_swing_ButtonGroup$S$Z.apply(this, [bg, "20-30", false]);
p$2.addButton$javax_swing_ButtonGroup$S$Z.apply(this, [bg, "30-40", false]);
this.bg5=p$2.addButton$javax_swing_ButtonGroup$S$Z.apply(this, [bg, "40-50", false]);
this.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'addButton$javax_swing_ButtonGroup$S$Z', function (bg, text, b) {
var c;
bg.add$javax_swing_AbstractButton(c=Clazz.new_($I$(14).c$$S$Z,[text, b]));
c.setName$S(text);
this.add$java_awt_Component(c);
c.addItemListener$java_awt_event_ItemListener(this);
c.setFont$java_awt_Font(Clazz.new_($I$(6).c$$S$I$I,["Arial", 0, 10]));
return c;
}, p$2);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
if (Clazz.instanceOf(e.getSource$(), "javax.swing.JRadioButton") && e.getStateChange$() == 1 ) {
var b=(e.getItemSelectable$()).getText$();
if (b == "0-50") {
this.range=0;
} else if (b == "0-10") {
this.range=1;
} else if (b == "10-20") {
this.range=2;
} else if (b == "20-30") {
this.range=3;
} else if (b == "30-40") {
this.range=4;
} else if (b == "40-50") {
this.range=5;
}this.$canvas.redraw$I(this.range);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-05 09:36:50 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
