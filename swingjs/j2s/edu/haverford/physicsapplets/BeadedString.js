(function(){var P$=Clazz.newPackage("edu.haverford.physicsapplets"),p$1={},I$=[[0,'java.awt.Color',['edu.haverford.physicsapplets.BeadedString','.vector2d'],'javax.swing.Timer',['edu.haverford.physicsapplets.BeadedString','.AniPanel'],'Thread','javax.swing.JPanel','javax.swing.JCheckBox','javax.swing.JSlider','javax.swing.JLabel','javax.swing.BoxLayout','javax.swing.border.EtchedBorder','java.awt.Dimension']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BeadedString", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JApplet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
{

thisApplet.__Info.width=750; thisApplet.__Info.height=250;
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.disp=null;
this.nMasses=0;
this.T=0;
this.m=0;
this.L=0;
this.a=0;
this.Wa=0;
this.mode=0;
this.showSprings=false;
this.bottomPanel=null;
this.jCheckBox1=null;
this.jPanel1=null;
this.jPanel2=null;
this.massSlider=null;
this.massText=null;
this.modeSlider=null;
this.modeText=null;
this.topPanel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.nMasses=4;
this.T=100;
this.m=1;
this.L=0;
this.a=0;
this.Wa=0;
this.mode=1;
this.showSprings=false;
}, 1);

Clazz.newMeth(C$, ['updateMath$','updateMath'], function () {
this.L=this.getSize$().width;
this.a=this.L / (this.nMasses + 1);
this.Wa=(2 * this.T) / (this.a * this.m);
});

Clazz.newMeth(C$, ['init$','init'], function () {
p$1.initComponents.apply(this, []);
this.disp=Clazz.new_($I$(4), [this, null]);
this.topPanel.add$java_awt_Component(this.disp);
this.modeText.setText$S("Mode: " + String.valueOf$I(this.mode));
this.massText.setText$S("Masses: " + String.valueOf$I(this.nMasses));
this.modeSlider.setValue$I(this.mode);
this.massSlider.setValue$I(this.nMasses);
this.disp.running=true;
this.disp.myThread=Clazz.new_($I$(5).c$$Runnable,[this.disp]);
this.disp.myThread.start$();
});

Clazz.newMeth(C$, ['destroy$','destroy'], function () {
this.disp.running=false;
this.disp.myThread=null;
});

Clazz.newMeth(C$, 'initComponents', function () {
this.topPanel=Clazz.new_($I$(6));
this.bottomPanel=Clazz.new_($I$(6));
this.jCheckBox1=Clazz.new_($I$(7));
this.jPanel2=Clazz.new_($I$(6));
this.modeSlider=Clazz.new_($I$(8));
this.modeText=Clazz.new_($I$(9));
this.jPanel1=Clazz.new_($I$(6));
this.massSlider=Clazz.new_($I$(8));
this.massText=Clazz.new_($I$(9));
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(10).c$$java_awt_Container$I,[this.getContentPane$(), 1]));
this.setBackground$java_awt_Color(Clazz.new_($I$(1).c$$I$I$I,[204, 204, 255]));
this.topPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10).c$$java_awt_Container$I,[this.topPanel, 0]));
this.topPanel.setBackground$java_awt_Color(Clazz.new_($I$(1).c$$I$I$I,[255, 255, 255]));
this.topPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(11)));
this.topPanel.addHierarchyBoundsListener$java_awt_event_HierarchyBoundsListener(((P$.BeadedString$1||
(function(){var C$=Clazz.newClass(P$, "BeadedString$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.HierarchyBoundsListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['ancestorMoved$java_awt_event_HierarchyEvent','ancestorMoved'], function (evt) {
});

Clazz.newMeth(C$, ['ancestorResized$java_awt_event_HierarchyEvent','ancestorResized'], function (evt) {
p$1.topPanelAncestorResized$java_awt_event_HierarchyEvent.apply(this.b$['edu.haverford.physicsapplets.BeadedString'], [evt]);
});
})()
), Clazz.new_(P$.BeadedString$1.$init$, [this, null])));
this.getContentPane$().add$java_awt_Component(this.topPanel);
this.bottomPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10).c$$java_awt_Container$I,[this.bottomPanel, 0]));
this.bottomPanel.setBackground$java_awt_Color(Clazz.new_($I$(1).c$$I$I$I,[255, 255, 255]));
this.bottomPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(11)));
this.bottomPanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(12).c$$I$I,[32767, 34]));
this.jCheckBox1.setBackground$java_awt_Color(Clazz.new_($I$(1).c$$I$I$I,[255, 255, 255]));
this.jCheckBox1.setText$S("Slow");
this.jCheckBox1.addActionListener$java_awt_event_ActionListener(((P$.BeadedString$2||
(function(){var C$=Clazz.newClass(P$, "BeadedString$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed','actionPerformed$'], function (evt) {
p$1.jCheckBox1ActionPerformed$java_awt_event_ActionEvent.apply(this.b$['edu.haverford.physicsapplets.BeadedString'], [evt]);
});
})()
), Clazz.new_(P$.BeadedString$2.$init$, [this, null])));
this.bottomPanel.add$java_awt_Component(this.jCheckBox1);
this.jPanel2.setBackground$java_awt_Color(Clazz.new_($I$(1).c$$I$I$I,[255, 255, 255]));
this.jPanel2.setBorder$javax_swing_border_Border(Clazz.new_($I$(11)));
this.modeSlider.setBackground$java_awt_Color(Clazz.new_($I$(1).c$$I$I$I,[255, 255, 255]));
this.modeSlider.setMaximum$I(50);
this.modeSlider.setMinimum$I(1);
this.modeSlider.setValue$I(1);
this.modeSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.BeadedString$3||
(function(){var C$=Clazz.newClass(P$, "BeadedString$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged','stateChanged$'], function (evt) {
p$1.modeSliderStateChanged$javax_swing_event_ChangeEvent.apply(this.b$['edu.haverford.physicsapplets.BeadedString'], [evt]);
});
})()
), Clazz.new_(P$.BeadedString$3.$init$, [this, null])));
this.jPanel2.add$java_awt_Component(this.modeSlider);
this.modeText.setBackground$java_awt_Color(Clazz.new_($I$(1).c$$I$I$I,[255, 255, 255]));
this.modeText.setText$S("Mode");
this.jPanel2.add$java_awt_Component(this.modeText);
this.bottomPanel.add$java_awt_Component(this.jPanel2);
this.jPanel1.setBackground$java_awt_Color(Clazz.new_($I$(1).c$$I$I$I,[255, 255, 255]));
this.jPanel1.setBorder$javax_swing_border_Border(Clazz.new_($I$(11)));
this.massSlider.setBackground$java_awt_Color(Clazz.new_($I$(1).c$$I$I$I,[255, 255, 255]));
this.massSlider.setMaximum$I(24);
this.massSlider.setMinimum$I(1);
this.massSlider.setValue$I(4);
this.massSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.BeadedString$4||
(function(){var C$=Clazz.newClass(P$, "BeadedString$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged','stateChanged$'], function (evt) {
p$1.massSliderStateChanged$javax_swing_event_ChangeEvent.apply(this.b$['edu.haverford.physicsapplets.BeadedString'], [evt]);
});
})()
), Clazz.new_(P$.BeadedString$4.$init$, [this, null])));
this.jPanel1.add$java_awt_Component(this.massSlider);
this.massText.setBackground$java_awt_Color(Clazz.new_($I$(1).c$$I$I$I,[255, 255, 255]));
this.massText.setText$S("jLabel1");
this.jPanel1.add$java_awt_Component(this.massText);
this.bottomPanel.add$java_awt_Component(this.jPanel1);
this.getContentPane$().add$java_awt_Component(this.bottomPanel);
}, p$1);

Clazz.newMeth(C$, 'jCheckBox1ActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.disp.slow=!this.disp.slow;
}, p$1);

Clazz.newMeth(C$, 'topPanelAncestorResized$java_awt_event_HierarchyEvent', function (evt) {
this.updateMath$();
this.disp.firsttime=true;
}, p$1);

Clazz.newMeth(C$, 'massSliderStateChanged$javax_swing_event_ChangeEvent', function (evt) {
this.nMasses=this.massSlider.getValue$();
this.massText.setText$S("Masses: " + String.valueOf$I(this.nMasses));
this.updateMath$();
}, p$1);

Clazz.newMeth(C$, 'modeSliderStateChanged$javax_swing_event_ChangeEvent', function (evt) {
this.mode=this.modeSlider.getValue$();
this.modeText.setText$S("Mode: " + String.valueOf$I(this.mode));
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.BeadedString, "vector2d", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.x=0;
this.y=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.x=0;
this.y=0;
}, 1);

Clazz.newMeth(C$, 'c$$D$D', function (inx, iny) {
C$.$init$.apply(this);
this.x=inx;
this.y=iny;
}, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.BeadedString, "AniPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel', 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.running=false;
this.myThread=null;
this.firsttime=false;
this.bi=null;
this.biG=null;
this.slow=false;
this.time=0;
this.timer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.running=false;
this.firsttime=true;
this.slow=false;
this.time=0;
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.firsttime) {
this.bi=this.createImage$I$I(this.getSize$().width, this.getSize$().height);
this.this$0.updateMath$.apply(this.this$0, []);
this.biG=this.bi.createGraphics$();
this.firsttime=false;
}this.biG.setColor$java_awt_Color($I$(1).white);
this.biG.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
var ypos;
var sq2=Math.sqrt(2);
var ln;
var place;
var nmode;
var nln;
var old=Clazz.new_($I$(2).c$$D$D, [this, null, 0, (this.getSize$().height/2|0)]);
place=this.this$0.L / 150.0;
nmode=this.this$0.mode % (2 * (this.this$0.nMasses + 1));
nmode=((this.this$0.nMasses + 1) - Math.abs(nmode - this.this$0.nMasses - 1 )) % (this.this$0.nMasses + 1);
ln=(2 * this.this$0.L) / this.this$0.mode;
nln=(2 * this.this$0.L) / nmode;
if (!this.this$0.showSprings) {
this.biG.setColor$java_awt_Color($I$(1).blue);
for (var i=1; i < 150; i++) {
ypos=10 * Math.sin((2 * 3.1415 * i * place ) / ln) * Math.cos(sq2 * this.this$0.Wa * Math.sin(3.1415 / nln) * this.this$0.a * this.time ) ;
this.biG.drawLine$I$I$I$I(((i * place)|0), ((this.getSize$().height/2|0)) - (ypos|0), (old.x|0), (old.y|0));
old.x=i * place;
old.y=((this.getSize$().height/2|0)) - ypos;
}
}var s;
if (nmode != this.this$0.mode) {
old=Clazz.new_($I$(2).c$$D$D, [this, null, 0, (this.getSize$().height/2|0)]);
this.biG.setColor$java_awt_Color($I$(1).red);
place=this.this$0.L / 150.0;
nmode=this.this$0.mode % (2 * (this.this$0.nMasses + 1));
nmode=((this.this$0.nMasses + 1) - Math.abs(nmode - this.this$0.nMasses - 1 )) % (this.this$0.nMasses + 1);
ln=(2 * this.this$0.L) / this.this$0.mode;
nln=(2 * this.this$0.L) / nmode;
var shift=((this.this$0.mode/(this.this$0.nMasses + 1)|0)) % 2;
for (var i=1; i < 150; i++) {
ypos=10 * Math.sin(3.1415 * shift + (2 * 3.1415 * i * place ) / nln) * Math.cos(sq2 * this.this$0.Wa * Math.sin(3.1415 / nln) * this.this$0.a * this.time ) ;
this.biG.drawLine$I$I$I$I(((i * place)|0), ((this.getSize$().height/2|0)) - (ypos|0), (old.x|0), (old.y|0));
old.x=i * place;
old.y=((this.getSize$().height/2|0)) - ypos;
}
s="Mode " + String.valueOf$I(this.this$0.mode) + " is the same as fundamental mode " + String.valueOf$I(nmode) + "." ;
} else {
s="Displaying fundamental mode " + String.valueOf$I(this.this$0.mode) + "." ;
}this.biG.setColor$java_awt_Color($I$(1).black);
this.biG.drawString$S$I$I(s, this.getSize$().width - 10 - this.biG.getFontMetrics$().stringWidth$S(s) , this.getSize$().height - 5 - this.biG.getFontMetrics$().getHeight$() );
nmode=this.this$0.mode % (2 * (this.this$0.nMasses + 1));
nmode=((this.this$0.nMasses + 1) - Math.abs(nmode - this.this$0.nMasses - 1 )) % (this.this$0.nMasses + 1);
ln=(2 * this.this$0.L) / this.this$0.mode;
nln=(2 * this.this$0.L) / nmode;
if (!this.this$0.showSprings) {
this.biG.setColor$java_awt_Color($I$(1).black);
for (var i=1; i < this.this$0.nMasses + 1; i++) {
ypos=10 * Math.sin((2 * 3.1415 * i * this.this$0.a ) / ln) * Math.cos(sq2 * this.this$0.Wa * Math.sin(3.1415 / nln) * this.this$0.a * this.time ) ;
this.biG.fillOval$I$I$I$I((((i * this.this$0.a) - 4)|0), (((this.getSize$().height/2|0)) - ((ypos|0))) - 4, 8, 8);
}
} else {
old=Clazz.new_($I$(2).c$$D$D, [this, null, 0, (this.getSize$().height/2|0)]);
for (var i=1; i < this.this$0.nMasses + 1; i++) {
ypos=10 * Math.sin((2 * 3.1415 * i * this.this$0.a ) / ln) * Math.cos(sq2 * this.this$0.Wa * Math.sin(3.1415 / nln) * this.this$0.a * this.time ) ;
this.biG.setColor$java_awt_Color($I$(1).black);
this.biG.fillOval$I$I$I$I((((i * this.this$0.a) - 4)|0), (((this.getSize$().height/2|0)) - ((ypos|0))) - 4, 8, 8);
this.biG.setColor$java_awt_Color($I$(1).blue);
this.biG.drawLine$I$I$I$I((old.x|0), (old.y|0), ((i * this.this$0.a)|0), (((this.getSize$().height/2|0)) - (ypos|0)));
old.x=i * this.this$0.a;
old.y=((this.getSize$().height/2|0)) - (ypos|0);
}
this.biG.drawLine$I$I$I$I((old.x|0), (old.y|0), this.getSize$().width, (this.getSize$().height/2|0));
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bi, 0, 0, this);
});

Clazz.newMeth(C$, 'run$', function () {
this.timer=Clazz.new_($I$(3).c$$I$java_awt_event_ActionListener,[1 ||10, ((P$.BeadedString$AniPanel$1||
(function(){var C$=Clazz.newClass(P$, "BeadedString$AniPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (!this.b$['edu.haverford.physicsapplets.BeadedString.AniPanel'].running) {
this.b$['edu.haverford.physicsapplets.BeadedString.AniPanel'].timer.stop$();
return;
}this.b$['edu.haverford.physicsapplets.BeadedString.AniPanel'].doStep$.apply(this.b$['edu.haverford.physicsapplets.BeadedString.AniPanel'], []);
});
})()
), Clazz.new_(P$.BeadedString$AniPanel$1.$init$, [this, null]))]);
this.timer.setDelay$I(1);
this.timer.setRepeats$Z(true);
this.timer.start$();
});

Clazz.newMeth(C$, 'doStep$', function () {
if (this.slow) this.time += 0.06||0.01;
 else this.time += 0.6||0.1;
this.repaint$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-05 09:36:54 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
