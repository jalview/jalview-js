(function(){var P$=Clazz.newPackage("edu.haverford.physicsapplets"),p$1={},I$=[[0,['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator','.vector2d'],'java.awt.Color','java.awt.BasicStroke','javax.swing.Timer','java.awt.Dimension',['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator','.GraphPanel'],['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator','.AniPanel'],'Thread','javax.swing.JPanel','javax.swing.JCheckBox','javax.swing.JLabel','javax.swing.JSlider','javax.swing.BoxLayout','java.awt.event.ComponentAdapter','javax.swing.BorderFactory','java.awt.event.MouseAdapter','java.awt.event.MouseMotionAdapter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JApplet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
{

thisApplet.__Info.width=520; thisApplet.__Info.height=550;
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.disp=null;
this.phase=null;
this.amp=null;
this.g=0;
this.k=0;
this.A=0;
this.Fo=0;
this.m=0;
this.Wo=0;
this.W=0;
this.delta=0;
this.Q=0;
this.shift=0;
this.Wold=0;
this.QText=null;
this.ampPanel=null;
this.jCheckBox1=null;
this.jCheckBox2=null;
this.jLabel1=null;
this.jPanel1=null;
this.jPanel2=null;
this.jSlider1=null;
this.leftPanel=null;
this.phasePanel=null;
this.rightPanel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.g=9.8;
this.k=10;
this.Fo=25;
this.m=0.1;
this.Wo=10;
this.W=2;
this.Q=10;
this.shift=0;
this.Wold=0;
}, 1);

Clazz.newMeth(C$, ['updateMath$','updateMath'], function () {
if (Math.abs(this.W - this.Wo) < 0.1 ) this.W=this.Wo;
this.shift += (this.W - this.Wold) * this.disp.time;
this.A=(this.Fo / this.m) / (Math.sqrt(Math.pow(this.Wo * this.Wo - this.W * this.W, 2) + Math.pow((this.Wo / this.Q) * this.W, 2)));
this.delta=Math.atan2((this.Wo / this.Q) * this.W, this.Wo * this.Wo - this.W * this.W);
if (this.delta < 0 ) {
this.delta=3.1415 + this.delta;
}this.amp.updatePoint$D$D(this.W, 0);
this.phase.updatePoint$D$D(this.W, 0);
this.phase.repaint$();
this.amp.repaint$();
this.Wold=this.W;
});

Clazz.newMeth(C$, ['init$','init'], function () {
p$1.initComponents.apply(this, []);
this.phase=((P$.DampedDrivenHarmonicOscillator$1||
(function(){var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator','.GraphPanel']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['equation$D','equation'], function (x) {
var d=Math.atan2((this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Wo / this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Q) * x, this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Wo * this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Wo - x * x);
if (d < 0 ) {
d=3.1415 + d;
}if (x < 0 ) return 0;
return d;
});

Clazz.newMeth(C$, ['labelShit$java_awt_Graphics2D','labelShit'], function (g) {
this.labelAxisPoint$java_awt_Graphics2D$I$D$S(g, 0, this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Wo, "\u03c9o");
this.labelAxisPoint$java_awt_Graphics2D$I$D$S(g, 1, 3.1415, "\u03c0");
this.labelAxisPoint$java_awt_Graphics2D$I$D$S(g, 1, 1.57075, "\u03c0/2");
this.displayString$java_awt_Graphics2D$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d$S(g, Clazz.new_($I$(1).c$$D$D, [this, null, 14, 3.4]), "Phase angle: " + String.valueOf$J(Math.round(this.equation$D(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].W) * (57.29746936176985))) + " degrees" );
});
})()
), Clazz.new_($I$(6), [this, null],P$.DampedDrivenHarmonicOscillator$1));
this.phase.yAxis=4;
this.phase.xAxis=25;
this.phase.xLabel="Drive Freq.";
this.phase.yLabel="Phase";
this.amp=((P$.DampedDrivenHarmonicOscillator$2||
(function(){var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator','.GraphPanel']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['equation$D','equation'], function (x) {
var a=(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Fo / this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].m) / (Math.sqrt(Math.pow(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Wo * this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Wo - x * x, 2) + Math.pow((this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Wo / this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Q) * x, 2)));
if (x < 0 ) {
return 0;
} else {
return a;
}});

Clazz.newMeth(C$, ['labelShit$java_awt_Graphics2D','labelShit'], function (g) {
this.labelAxisPoint$java_awt_Graphics2D$I$D$S(g, 0, this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Wo, "\u03c9o");
this.displayString$java_awt_Graphics2D$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d$S(g, Clazz.new_($I$(1).c$$D$D, [this, null, 14, 85]), "Amplitude: " + String.valueOf$D(Math.round((this.equation$D(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].W) / (this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].Fo / this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'].k)) * 100.0) / 100.0) + " A*k/Fo" );
});
})()
), Clazz.new_($I$(6), [this, null],P$.DampedDrivenHarmonicOscillator$2));
this.amp.xAxis=25;
this.amp.yAxis=100;
this.amp.xLabel="Drive Freq.";
this.amp.yLabel="Amplitude";
this.disp=Clazz.new_($I$(7), [this, null]);
this.phasePanel.add$java_awt_Component(this.phase);
this.ampPanel.add$java_awt_Component(this.amp);
this.rightPanel.add$java_awt_Component(this.disp);
this.QText.setText$S("  Q: " + String.valueOf$I(this.jSlider1.getValue$()));
this.Q=this.jSlider1.getValue$() + 1.0E-5;
this.updateMath$();
this.disp.running=true;
this.disp.myThread=Clazz.new_($I$(8).c$$Runnable,[this.disp]);
this.disp.myThread.start$();
});

Clazz.newMeth(C$, ['destroy$','destroy'], function () {
this.disp.running=false;
this.disp.myThread=null;
});

Clazz.newMeth(C$, 'initComponents', function () {
this.jPanel1=Clazz.new_($I$(9));
this.leftPanel=Clazz.new_($I$(9));
this.phasePanel=Clazz.new_($I$(9));
this.ampPanel=Clazz.new_($I$(9));
this.rightPanel=Clazz.new_($I$(9));
this.jPanel2=Clazz.new_($I$(9));
this.jCheckBox2=Clazz.new_($I$(10));
this.jCheckBox1=Clazz.new_($I$(10));
this.jLabel1=Clazz.new_($I$(11));
this.jSlider1=Clazz.new_($I$(12));
this.QText=Clazz.new_($I$(11));
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this.getContentPane$(), 1]));
this.addComponentListener$java_awt_event_ComponentListener(((P$.DampedDrivenHarmonicOscillator$3||
(function(){var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['componentResized$java_awt_event_ComponentEvent','componentResized'], function (evt) {
p$1.formComponentResized$java_awt_event_ComponentEvent.apply(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'], [evt]);
});
})()
), Clazz.new_($I$(14), [this, null],P$.DampedDrivenHarmonicOscillator$3)));
this.jPanel1.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this.jPanel1, 0]));
this.leftPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this.leftPanel, 1]));
this.phasePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this.phasePanel, 0]));
this.phasePanel.setBorder$javax_swing_border_Border($I$(15).createEtchedBorder$());
this.phasePanel.addMouseListener$java_awt_event_MouseListener(((P$.DampedDrivenHarmonicOscillator$4||
(function(){var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['mouseClicked$java_awt_event_MouseEvent','mouseClicked'], function (evt) {
p$1.phasePanelMouseClicked$java_awt_event_MouseEvent.apply(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'], [evt]);
});
})()
), Clazz.new_($I$(16), [this, null],P$.DampedDrivenHarmonicOscillator$4)));
this.phasePanel.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.DampedDrivenHarmonicOscillator$5||
(function(){var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseMotionAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['mouseDragged$java_awt_event_MouseEvent','mouseDragged'], function (evt) {
p$1.phasePanelMouseDragged$java_awt_event_MouseEvent.apply(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'], [evt]);
});
})()
), Clazz.new_($I$(17), [this, null],P$.DampedDrivenHarmonicOscillator$5)));
this.leftPanel.add$java_awt_Component(this.phasePanel);
this.ampPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this.ampPanel, 0]));
this.ampPanel.setBorder$javax_swing_border_Border($I$(15).createEtchedBorder$());
this.ampPanel.addMouseListener$java_awt_event_MouseListener(((P$.DampedDrivenHarmonicOscillator$6||
(function(){var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['mouseClicked$java_awt_event_MouseEvent','mouseClicked'], function (evt) {
p$1.ampPanelMouseClicked$java_awt_event_MouseEvent.apply(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'], [evt]);
});
})()
), Clazz.new_($I$(16), [this, null],P$.DampedDrivenHarmonicOscillator$6)));
this.ampPanel.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.DampedDrivenHarmonicOscillator$7||
(function(){var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseMotionAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['mouseDragged$java_awt_event_MouseEvent','mouseDragged'], function (evt) {
p$1.ampPanelMouseDragged$java_awt_event_MouseEvent.apply(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'], [evt]);
});
})()
), Clazz.new_($I$(17), [this, null],P$.DampedDrivenHarmonicOscillator$7)));
this.leftPanel.add$java_awt_Component(this.ampPanel);
this.jPanel1.add$java_awt_Component(this.leftPanel);
this.rightPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this.rightPanel, 0]));
this.rightPanel.setBorder$javax_swing_border_Border($I$(15).createEtchedBorder$());
this.rightPanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[100, 700]));
this.jPanel1.add$java_awt_Component(this.rightPanel);
this.getContentPane$().add$java_awt_Component(this.jPanel1);
this.jPanel2.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, 255, 255]));
this.jPanel2.setBorder$javax_swing_border_Border($I$(15).createEtchedBorder$());
this.jPanel2.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[32767, 34]));
this.jCheckBox2.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, 255, 255]));
this.jCheckBox2.setText$S("Slow");
this.jCheckBox2.addActionListener$java_awt_event_ActionListener(((P$.DampedDrivenHarmonicOscillator$8||
(function(){var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed','actionPerformed$'], function (evt) {
p$1.jCheckBox2ActionPerformed$java_awt_event_ActionEvent.apply(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'], [evt]);
});
})()
), Clazz.new_(P$.DampedDrivenHarmonicOscillator$8.$init$, [this, null])));
this.jPanel2.add$java_awt_Component(this.jCheckBox2);
this.jCheckBox1.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, 255, 255]));
this.jCheckBox1.setText$S("Show Velocity");
this.jCheckBox1.addChangeListener$javax_swing_event_ChangeListener(((P$.DampedDrivenHarmonicOscillator$9||
(function(){var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged','stateChanged$'], function (evt) {
p$1.jCheckBox1StateChanged$javax_swing_event_ChangeEvent.apply(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'], [evt]);
});
})()
), Clazz.new_(P$.DampedDrivenHarmonicOscillator$9.$init$, [this, null])));
this.jPanel2.add$java_awt_Component(this.jCheckBox1);
this.jLabel1.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, 255, 255]));
this.jLabel1.setText$S("    Quality factor (Q): ");
this.jPanel2.add$java_awt_Component(this.jLabel1);
this.jSlider1.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, 255, 255]));
this.jSlider1.setMaximum$I(80);
this.jSlider1.setMinimum$I(1);
this.jSlider1.setValue$I(10);
this.jSlider1.addChangeListener$javax_swing_event_ChangeListener(((P$.DampedDrivenHarmonicOscillator$10||
(function(){var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged','stateChanged$'], function (evt) {
p$1.jSlider1StateChanged$javax_swing_event_ChangeEvent.apply(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator'], [evt]);
});
})()
), Clazz.new_(P$.DampedDrivenHarmonicOscillator$10.$init$, [this, null])));
this.jPanel2.add$java_awt_Component(this.jSlider1);
this.QText.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, 255, 255]));
this.jPanel2.add$java_awt_Component(this.QText);
this.getContentPane$().add$java_awt_Component(this.jPanel2);
}, p$1);

Clazz.newMeth(C$, 'formComponentResized$java_awt_event_ComponentEvent', function (evt) {
if (this.disp != null ) {
this.disp.firsttime=true;
}if (this.phase != null ) {
this.phase.firsttime=true;
}if (this.amp != null ) {
this.amp.firsttime=true;
}this.repaint$();
}, p$1);

Clazz.newMeth(C$, 'jCheckBox2ActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.disp.slow=!this.disp.slow;
}, p$1);

Clazz.newMeth(C$, 'jCheckBox1StateChanged$javax_swing_event_ChangeEvent', function (evt) {
this.disp.vel=!this.disp.vel;
}, p$1);

Clazz.newMeth(C$, 'jSlider1StateChanged$javax_swing_event_ChangeEvent', function (evt) {
this.QText.setText$S("  Q: " + String.valueOf$I(this.jSlider1.getValue$()));
this.Q=this.jSlider1.getValue$() + 1.0E-5;
this.updateMath$();
}, p$1);

Clazz.newMeth(C$, 'ampPanelMouseDragged$java_awt_event_MouseEvent', function (evt) {
this.amp.mouseDragged$java_awt_event_MouseEvent(evt);
}, p$1);

Clazz.newMeth(C$, 'phasePanelMouseDragged$java_awt_event_MouseEvent', function (evt) {
this.phase.mouseDragged$java_awt_event_MouseEvent(evt);
}, p$1);

Clazz.newMeth(C$, 'ampPanelMouseClicked$java_awt_event_MouseEvent', function (evt) {
this.amp.mouseClicked$java_awt_event_MouseEvent(evt);
}, p$1);

Clazz.newMeth(C$, 'phasePanelMouseClicked$java_awt_event_MouseEvent', function (evt) {
this.phase.mouseClicked$java_awt_event_MouseEvent(evt);
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.DampedDrivenHarmonicOscillator, "GraphPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.firsttime=false;
this.bi=null;
this.biG=null;
this.xAxis=0;
this.yAxis=0;
this.followEquation=false;
this.shiftOrigin=null;
this.drawSteps=0;
this.xLabel=null;
this.yLabel=null;
this.thePoint=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.firsttime=true;
this.xAxis=50;
this.yAxis=50;
this.followEquation=true;
this.drawSteps=200.0;
this.xLabel="x-axis";
this.yLabel="y-axis";
this.thePoint=Clazz.new_($I$(1).c$$D$D, [this, null, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.firsttime) {
this.shiftOrigin=Clazz.new_($I$(1).c$$D$D, [this, null, -((this.getSize$().width/2|0) - 20), (this.getSize$().height/2|0) - 20]);
this.bi=this.createImage$I$I(this.getSize$().width, this.getSize$().height);
this.biG=this.bi.createGraphics$();
this.firsttime=false;
}this.biG.setColor$java_awt_Color($I$(2).white);
this.biG.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
this.drawEquation$java_awt_Graphics2D(this.biG);
this.drawAxis$java_awt_Graphics2D(this.biG);
this.labelAxis$java_awt_Graphics2D$S$S(this.biG, this.xLabel, this.yLabel);
this.drawGraphPoint$java_awt_Graphics2D$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d(this.biG, this.thePoint);
this.labelShit$java_awt_Graphics2D(this.biG);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bi, 0, 0, this);
});

Clazz.newMeth(C$, 'labelShit$java_awt_Graphics2D', function (g) {
});

Clazz.newMeth(C$, 'equation$D', function (x) {
return x;
});

Clazz.newMeth(C$, 'drawEquation$java_awt_Graphics2D', function (g) {
var x=0;
var y=0;
var now;
var last;
last=this.getPoint$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, 0, 0]));
g.setStroke$java_awt_Stroke(Clazz.new_($I$(3).c$$F,[1.0]));
g.setColor$java_awt_Color($I$(2).black);
for (var i=0; i < this.xAxis ; i += this.xAxis / this.drawSteps) {
x=i;
y=this.equation$D(x);
now=this.getPoint$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, x, y]));
g.drawLine$I$I$I$I((last.x|0), (last.y|0), (now.x|0), (now.y|0));
last=now;
}
});

Clazz.newMeth(C$, 'displayString$java_awt_Graphics2D$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d$S', function (g, v, s) {
var p=this.getPoint$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d(v);
this.biG.setColor$java_awt_Color($I$(2).red);
g.drawString$S$I$I(s, (p.x|0), (p.y|0));
});

Clazz.newMeth(C$, 'drawGraphPoint$java_awt_Graphics2D$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d', function (g, v) {
var sl=this.getPoint$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d(v);
this.biG.setColor$java_awt_Color($I$(2).blue);
g.fillOval$I$I$I$I(((sl.x - 4)|0), ((sl.y - 4)|0), 8, 8);
});

Clazz.newMeth(C$, 'getPoint$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d', function (point) {
return this.screenLocation$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width / (this.xAxis)) * point.x, (this.getSize$().height / (this.yAxis)) * point.y]));
});

Clazz.newMeth(C$, 'labelAxis$java_awt_Graphics2D$S$S', function (g, x, y) {
g.drawString$S$I$I(y, (this.getSize$().width/2|0) + (this.shiftOrigin.x|0) + 5, g.getFontMetrics$().getHeight$());
g.drawString$S$I$I(x, this.getSize$().width - g.getFontMetrics$().stringWidth$S(x), (this.getSize$().height/2|0) + (this.shiftOrigin.y|0) + g.getFontMetrics$().getHeight$());
});

Clazz.newMeth(C$, 'labelAxisPoint$java_awt_Graphics2D$I$D$S', function (g, axis, value, label) {
this.biG.setColor$java_awt_Color($I$(2).black);
if (axis == 0) {
var p=this.getPoint$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, value, 0]));
g.drawLine$I$I$I$I((p.x|0), (p.y|0) - 5, (p.x|0), (p.y|0) + 5);
this.biG.setColor$java_awt_Color($I$(2).red);
g.drawString$S$I$I(label, (p.x|0) + 5, (p.y|0) + g.getFontMetrics$().getHeight$());
} else {
var p=this.getPoint$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, 0, value]));
g.drawLine$I$I$I$I((p.x|0) - 5, (p.y|0), (p.x|0) + 5, (p.y|0));
this.biG.setColor$java_awt_Color($I$(2).red);
g.drawString$S$I$I(label, (p.x|0) + 10, (p.y|0) + 2);
}});

Clazz.newMeth(C$, 'drawAxis$java_awt_Graphics2D', function (g) {
g.setStroke$java_awt_Stroke(Clazz.new_($I$(3).c$$F,[2.0]));
g.setColor$java_awt_Color($I$(2).black);
g.drawLine$I$I$I$I((this.getSize$().width/2|0) + (this.shiftOrigin.x|0), 0, (this.getSize$().width/2|0) + (this.shiftOrigin.x|0), this.getSize$().height);
g.drawLine$I$I$I$I(0, (this.getSize$().height/2|0) + (this.shiftOrigin.y|0), this.getSize$().width, (this.getSize$().height/2|0) + (this.shiftOrigin.y|0));
});

Clazz.newMeth(C$, 'drawGrid$java_awt_Graphics2D$I$I', function (g, xlines, ylines) {
g.setStroke$java_awt_Stroke(Clazz.new_($I$(3).c$$F,[1.0]));
g.setColor$java_awt_Color($I$(2).yellow);
for (var i=0; i <= xlines; i++) {
g.drawLine$I$I$I$I(((i * (this.getSize$().width / (xlines)) + this.shiftOrigin.x)|0), 0, ((i * (this.getSize$().width / (xlines)) + this.shiftOrigin.x)|0), this.getSize$().height);
}
for (var i=0; i <= ylines; i++) {
g.drawLine$I$I$I$I(0, ((i * (this.getSize$().height / (ylines)) + this.shiftOrigin.y)|0), this.getSize$().width, ((i * (this.getSize$().height / (ylines)) + this.shiftOrigin.y)|0));
}
});

Clazz.newMeth(C$, 'worldLocation$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d', function (screenLocation) {
return Clazz.new_($I$(1).c$$D$D, [this, null, screenLocation.x - ((this.getSize$().width/2|0) + this.shiftOrigin.x), -1 * (screenLocation.y - ((this.getSize$().height/2|0) + this.shiftOrigin.y))]);
});

Clazz.newMeth(C$, 'screenLocation$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d', function (world) {
return Clazz.new_($I$(1).c$$D$D, [this, null, world.x + (this.getSize$().width/2|0) + this.shiftOrigin.x, -1 * world.y + (this.getSize$().height/2|0) + this.shiftOrigin.y]);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
var l=this.worldLocation$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, evt.getX$(), evt.getY$()]));
var xLoc=(l.x / (this.getSize$().width / this.xAxis));
var yLoc=(l.y / (this.getSize$().height / this.yAxis));
this.this$0.W=xLoc;
this.this$0.updateMath$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'updatePoint$D$D', function (xLoc, yLoc) {
if (this.followEquation) {
this.thePoint=Clazz.new_($I$(1).c$$D$D, [this, null, xLoc, this.equation$D(xLoc)]);
} else {
this.thePoint=Clazz.new_($I$(1).c$$D$D, [this, null, xLoc, yLoc]);
}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
var l=this.worldLocation$edu_haverford_physicsapplets_DampedDrivenHarmonicOscillator_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, evt.getX$(), evt.getY$()]));
var xLoc=(l.x / (this.getSize$().width / this.xAxis));
var yLoc=(l.y / (this.getSize$().height / this.yAxis));
this.this$0.W=xLoc;
this.this$0.updateMath$.apply(this.this$0, []);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.DampedDrivenHarmonicOscillator, "vector2d", function(){
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
(function(){var C$=Clazz.newClass(P$.DampedDrivenHarmonicOscillator, "AniPanel", function(){
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
this.drive=null;
this.body=null;
this.slow=false;
this.vel=false;
this.velocity=0;
this.time=0;
this.timer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.running=false;
this.firsttime=true;
this.drive=Clazz.new_($I$(1).c$$D$D, [this, null, 0, 0]);
this.body=Clazz.new_($I$(1).c$$D$D, [this, null, 0, 0]);
this.slow=false;
this.vel=false;
this.velocity=0;
this.time=0;
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.firsttime) {
this.bi=this.createImage$I$I(this.getSize$().width, this.getSize$().height);
this.biG=this.bi.createGraphics$();
this.firsttime=false;
}this.biG.setColor$java_awt_Color($I$(2).white);
this.biG.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
this.biG.setColor$java_awt_Color($I$(2).blue);
this.biG.fillRect$I$I$I$I(((this.getSize$().width/2|0) - 40), ((55 + this.drive.y)|0), 80, 5);
this.biG.setColor$java_awt_Color($I$(2).blue);
this.biG.drawLine$I$I$I$I(((this.getSize$().width/2|0)), ((60 + this.drive.y)|0), ((this.getSize$().width/2|0)), (((this.getSize$().height/2|0) + this.body.y)|0));
this.biG.setColor$java_awt_Color($I$(2).black);
this.biG.fillOval$I$I$I$I(((this.getSize$().width/2|0) - 4), (((this.getSize$().height/2|0) + this.body.y - 4)|0), 8, 8);
if (this.vel) {
this.biG.setColor$java_awt_Color($I$(2).red);
this.biG.drawLine$I$I$I$I(((this.getSize$().width/2|0) + 40), ((this.getSize$().height/2|0)), ((this.getSize$().width/2|0) + 40), (((this.getSize$().height/2|0) + this.velocity)|0));
if (this.velocity < 0 ) {
this.biG.drawLine$I$I$I$I(((this.getSize$().width/2|0) + 40), (((this.getSize$().height/2|0) + this.velocity)|0), ((this.getSize$().width/2|0) + 40) + 5, (((this.getSize$().height/2|0) + this.velocity + 5)|0));
this.biG.drawLine$I$I$I$I(((this.getSize$().width/2|0) + 40), (((this.getSize$().height/2|0) + this.velocity)|0), ((this.getSize$().width/2|0) + 40) - 5, (((this.getSize$().height/2|0) + this.velocity + 5)|0));
} else if (this.velocity > 0 ) {
this.biG.drawLine$I$I$I$I(((this.getSize$().width/2|0) + 40), (((this.getSize$().height/2|0) + this.velocity)|0), ((this.getSize$().width/2|0) + 40) + 5, (((this.getSize$().height/2|0) + this.velocity - 5)|0));
this.biG.drawLine$I$I$I$I(((this.getSize$().width/2|0) + 40), (((this.getSize$().height/2|0) + this.velocity)|0), ((this.getSize$().width/2|0) + 40) - 5, (((this.getSize$().height/2|0) + this.velocity - 5)|0));
}}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bi, 0, 0, this);
});

Clazz.newMeth(C$, 'doStep$', function () {
this.drive.y=this.this$0.Fo * Math.cos(this.this$0.W * this.time - this.this$0.shift);
this.body.y=this.this$0.A * Math.cos(this.this$0.W * this.time - this.this$0.delta - this.this$0.shift);
this.velocity=-1 * this.this$0.A * 2 * Math.sin(this.this$0.W * this.time - this.this$0.delta - this.this$0.shift) ;
if (this.slow) this.time += 0.006||0.001;
 else this.time += 0.06||0.01;
this.repaint$();
});

Clazz.newMeth(C$, 'run$', function () {
this.timer=Clazz.new_($I$(4).c$$I$java_awt_event_ActionListener,[1 ||10, ((P$.DampedDrivenHarmonicOscillator$AniPanel$1||
(function(){var C$=Clazz.newClass(P$, "DampedDrivenHarmonicOscillator$AniPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (!this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator.AniPanel'].running) {
this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator.AniPanel'].timer.stop$();
return;
}this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator.AniPanel'].doStep$.apply(this.b$['edu.haverford.physicsapplets.DampedDrivenHarmonicOscillator.AniPanel'], []);
});
})()
), Clazz.new_(P$.DampedDrivenHarmonicOscillator$AniPanel$1.$init$, [this, null]))]);
this.timer.setDelay$I(1);
this.timer.setRepeats$Z(true);
this.timer.start$();
});

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return Clazz.new_($I$(5).c$$I$I,[100, 500]);
});

Clazz.newMeth(C$, 'getMinimumSize$', function () {
return Clazz.new_($I$(5).c$$I$I,[100, 500]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-05 09:36:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
