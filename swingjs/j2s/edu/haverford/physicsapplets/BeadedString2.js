(function(){var P$=Clazz.newPackage("edu.haverford.physicsapplets"),p$1={},I$=[[0,['edu.haverford.physicsapplets.BeadedString2','.vector2d'],'java.awt.RenderingHints','java.awt.Color','java.awt.BasicStroke','java.awt.Dimension','javax.swing.Timer',['edu.haverford.physicsapplets.BeadedString2','.AniPanel'],['edu.haverford.physicsapplets.BeadedString2','.GraphPanel'],'Thread','javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JLabel','javax.swing.JSlider','javax.swing.JCheckBox','javax.swing.BoxLayout','javax.swing.border.EtchedBorder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BeadedString2", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JApplet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
{

thisApplet.__Info.width=750;
thisApplet.__Info.height=250;
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.disp=null;
this.graph=null;
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
this.jLabel1=null;
this.jLabel2=null;
this.jPanel1=null;
this.jPanel2=null;
this.jPanel3=null;
this.jPanel4=null;
this.massSlider=null;
this.massText=null;
this.modeSlider=null;
this.modeText=null;
this.smallPanel=null;
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
this.graph.repaint$();
});

Clazz.newMeth(C$, ['init$','init'], function () {
p$1.initComponents.apply(this, []);
this.disp=Clazz.new_($I$(7), [this, null]);
this.graph=Clazz.new_($I$(8), [this, null]);
this.smallPanel.add$java_awt_Component(this.graph);
this.topPanel.add$java_awt_Component(this.disp);
this.modeText.setText$S("Mode: " + String.valueOf$I(this.mode));
this.massText.setText$S("Masses: " + String.valueOf$I(this.nMasses));
this.modeSlider.setValue$I(this.mode);
this.massSlider.setValue$I(this.nMasses);
this.disp.running=true;
this.disp.myThread=Clazz.new_($I$(9).c$$Runnable,[this.disp]);
this.disp.myThread.start$();
this.updateMath$();
});

Clazz.newMeth(C$, ['destroy$','destroy'], function () {
this.disp.running=false;
this.disp.myThread=null;
});

Clazz.newMeth(C$, 'initComponents', function () {
this.topPanel=Clazz.new_($I$(10));
this.bottomPanel=Clazz.new_($I$(10));
this.smallPanel=Clazz.new_($I$(10));
this.jPanel4=Clazz.new_($I$(10));
this.jPanel2=Clazz.new_($I$(10));
this.jPanel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11)));
this.jLabel1=Clazz.new_($I$(12));
this.modeSlider=Clazz.new_($I$(13));
this.modeText=Clazz.new_($I$(12));
this.jPanel1=Clazz.new_($I$(10));
this.jLabel2=Clazz.new_($I$(12));
this.massSlider=Clazz.new_($I$(13));
this.massText=Clazz.new_($I$(12));
this.jPanel3=Clazz.new_($I$(10));
this.jCheckBox1=Clazz.new_($I$(14));
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(15).c$$java_awt_Container$I,[this.getContentPane$(), 1]));
this.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[204, 204, 255]));
this.topPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15).c$$java_awt_Container$I,[this.topPanel, 0]));
this.topPanel.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.topPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(16)));
this.topPanel.addHierarchyBoundsListener$java_awt_event_HierarchyBoundsListener(((P$.BeadedString2$1||
(function(){var C$=Clazz.newClass(P$, "BeadedString2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.HierarchyBoundsListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['ancestorMoved$java_awt_event_HierarchyEvent','ancestorMoved'], function (evt) {
});

Clazz.newMeth(C$, ['ancestorResized$java_awt_event_HierarchyEvent','ancestorResized'], function (evt) {
p$1.topPanelAncestorResized$java_awt_event_HierarchyEvent.apply(this.b$['edu.haverford.physicsapplets.BeadedString2'], [evt]);
});
})()
), Clazz.new_(P$.BeadedString2$1.$init$, [this, null])));
this.getContentPane$().add$java_awt_Component(this.topPanel);
this.bottomPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15).c$$java_awt_Container$I,[this.bottomPanel, 0]));
this.bottomPanel.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.bottomPanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[32767, 34]));
this.smallPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15).c$$java_awt_Container$I,[this.smallPanel, 0]));
this.smallPanel.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.smallPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(16)));
this.bottomPanel.add$java_awt_Component(this.smallPanel);
this.jPanel4.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15).c$$java_awt_Container$I,[this.jPanel4, 1]));
this.jPanel4.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.jPanel2.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.jPanel2.setBorder$javax_swing_border_Border(Clazz.new_($I$(16)));
this.jLabel1.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.jLabel1.setText$S("Select mode (n):");
this.jPanel2.add$java_awt_Component(this.jLabel1);
this.modeSlider.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.modeSlider.setMaximum$I(50);
this.modeSlider.setMinimum$I(1);
this.modeSlider.setValue$I(1);
this.modeSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.BeadedString2$2||
(function(){var C$=Clazz.newClass(P$, "BeadedString2$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged','stateChanged$'], function (evt) {
p$1.modeSliderStateChanged$javax_swing_event_ChangeEvent.apply(this.b$['edu.haverford.physicsapplets.BeadedString2'], [evt]);
});
})()
), Clazz.new_(P$.BeadedString2$2.$init$, [this, null])));
this.jPanel2.add$java_awt_Component(this.modeSlider);
this.modeText.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.modeText.setText$S("Mode");
this.jPanel2.add$java_awt_Component(this.modeText);
this.jPanel4.add$java_awt_Component(this.jPanel2);
this.jPanel1.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.jPanel1.setBorder$javax_swing_border_Border(Clazz.new_($I$(16)));
this.jPanel1.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[320, 38]));
this.jLabel2.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.jLabel2.setText$S("Number of masses (N):");
this.jPanel1.add$java_awt_Component(this.jLabel2);
this.massSlider.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.massSlider.setMaximum$I(24);
this.massSlider.setMinimum$I(1);
this.massSlider.setValue$I(4);
this.massSlider.addChangeListener$javax_swing_event_ChangeListener(((P$.BeadedString2$3||
(function(){var C$=Clazz.newClass(P$, "BeadedString2$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged','stateChanged$'], function (evt) {
p$1.massSliderStateChanged$javax_swing_event_ChangeEvent.apply(this.b$['edu.haverford.physicsapplets.BeadedString2'], [evt]);
});
})()
), Clazz.new_(P$.BeadedString2$3.$init$, [this, null])));
this.jPanel1.add$java_awt_Component(this.massSlider);
this.jPanel1.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11)));
this.massText.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.massText.setText$S("jLabel1");
this.jPanel1.add$java_awt_Component(this.massText);
this.jPanel4.add$java_awt_Component(this.jPanel1);
this.jPanel3.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.jPanel3.setBorder$javax_swing_border_Border(Clazz.new_($I$(16)));
this.jCheckBox1.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.jCheckBox1.setText$S("Slow Animation");
this.jCheckBox1.addActionListener$java_awt_event_ActionListener(((P$.BeadedString2$4||
(function(){var C$=Clazz.newClass(P$, "BeadedString2$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed','actionPerformed$'], function (evt) {
p$1.jCheckBox1ActionPerformed$java_awt_event_ActionEvent.apply(this.b$['edu.haverford.physicsapplets.BeadedString2'], [evt]);
});
})()
), Clazz.new_(P$.BeadedString2$4.$init$, [this, null])));
this.jPanel3.add$java_awt_Component(this.jCheckBox1);
this.jPanel4.add$java_awt_Component(this.jPanel3);
this.bottomPanel.add$java_awt_Component(this.jPanel4);
this.getContentPane$().add$java_awt_Component(this.bottomPanel);
}, p$1);

Clazz.newMeth(C$, 'jCheckBox1ActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.disp.slow=!this.disp.slow;
}, p$1);

Clazz.newMeth(C$, 'topPanelAncestorResized$java_awt_event_HierarchyEvent', function (evt) {
this.updateMath$();
this.disp.firsttime=true;
this.graph.firsttime=true;
}, p$1);

Clazz.newMeth(C$, 'massSliderStateChanged$javax_swing_event_ChangeEvent', function (evt) {
this.nMasses=this.massSlider.getValue$();
this.modeSlider.setMaximum$I(this.massSlider.getValue$() * 3);
this.massText.setText$S("Masses: " + String.valueOf$I(this.nMasses));
this.updateMath$();
}, p$1);

Clazz.newMeth(C$, 'modeSliderStateChanged$javax_swing_event_ChangeEvent', function (evt) {
this.modeSlider.setMaximum$I(this.massSlider.getValue$() * 3);
this.mode=this.modeSlider.getValue$();
this.modeText.setText$S("Mode: " + String.valueOf$I(this.mode));
this.updateMath$();
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.BeadedString2, "vector2d", function(){
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
(function(){var C$=Clazz.newClass(P$.BeadedString2, "GraphPanel", function(){
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
this.xAxis=3.18;
this.yAxis=2;
this.followEquation=true;
this.drawSteps=200.0;
this.xLabel="n ";
this.yLabel="\u03c9n";
this.thePoint=Clazz.new_($I$(1).c$$D$D, [this, null, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.firsttime) {
this.shiftOrigin=Clazz.new_($I$(1).c$$D$D, [this, null, -((this.getSize$().width/2|0) - 5), (this.getSize$().height/2|0) - 20]);
this.bi=this.createImage$I$I(this.getSize$().width, this.getSize$().height);
this.biG=this.bi.createGraphics$();
this.firsttime=false;
}this.biG.setRenderingHint$java_awt_RenderingHints_Key$O($I$(2).KEY_ANTIALIASING, $I$(2).VALUE_ANTIALIAS_ON);
this.biG.setColor$java_awt_Color($I$(3).white);
this.biG.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
this.drawEquation$java_awt_Graphics2D(this.biG);
this.drawAxis$java_awt_Graphics2D(this.biG);
this.labelAxis$java_awt_Graphics2D$S$S(this.biG, this.xLabel, this.yLabel);
var nmode=this.this$0.mode % (2 * (this.this$0.nMasses + 1));
var loopNum=(this.this$0.mode/(2 * (this.this$0.nMasses + 1))|0);
var xpos=(nmode / ((this.this$0.nMasses + 1) * 2)) * 3.1415;
var ypos=this.equation$D(xpos);
this.thePoint=Clazz.new_($I$(1).c$$D$D, [this, null, xpos, ypos]);
var funmode=((this.this$0.nMasses + 1) - Math.abs(nmode - this.this$0.nMasses - 1 )) % (this.this$0.nMasses + 1);
if (loopNum < 1) {
this.labelAxisPoint$java_awt_Graphics2D$I$D$S(this.biG, 0, (1.57075), "N+1=" + String.valueOf$I(this.this$0.nMasses + 1));
this.biG.setColor$java_awt_Color($I$(3).blue);
} else {
this.labelAxisPoint$java_awt_Graphics2D$I$D$S(this.biG, 0, (1.57075), "");
this.labelAxisPoint$java_awt_Graphics2D$I$D$S(this.biG, 0, 0, "n=" + String.valueOf$I(loopNum * (2 * (this.this$0.nMasses + 1))));
this.biG.setColor$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[160, 32, 240]));
}this.drawGraphPoint$java_awt_Graphics2D$edu_haverford_physicsapplets_BeadedString2_vector2d(this.biG, this.thePoint);
if (funmode != nmode && funmode > 0 ) {
var funxpos=(funmode / ((this.this$0.nMasses + 1) * 2)) * 3.1415;
this.biG.setColor$java_awt_Color($I$(3).red);
this.drawGraphPoint$java_awt_Graphics2D$edu_haverford_physicsapplets_BeadedString2_vector2d(this.biG, Clazz.new_($I$(1).c$$D$D, [this, null, funxpos, this.equation$D(funxpos)]));
}this.biG.setColor$java_awt_Color($I$(3).black);
var s="n=" + String.valueOf$I(this.this$0.mode);
this.biG.drawString$S$I$I(s, this.getSize$().width - 10 - this.biG.getFontMetrics$().stringWidth$S(s) , 5 + this.biG.getFontMetrics$().getHeight$());
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bi, 0, 0, this);
});

Clazz.newMeth(C$, 'equation$D', function (x) {
return Math.sin(x);
});

Clazz.newMeth(C$, 'drawEquation$java_awt_Graphics2D', function (g) {
var x=0;
var y=0;
var toggle=0;
var now;
var last;
last=this.getPoint$edu_haverford_physicsapplets_BeadedString2_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, 0, 0]));
g.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F,[1.0]));
g.setColor$java_awt_Color($I$(3).black);
for (var i=0; i < this.xAxis ; i += this.xAxis / this.drawSteps) {
x=i;
y=this.equation$D(x);
now=this.getPoint$edu_haverford_physicsapplets_BeadedString2_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, x, y]));
if (x > 1.57075 ) {
if (toggle > 4) {
g.drawLine$I$I$I$I((last.x|0), (last.y|0), (now.x|0), (now.y|0));
toggle=0;
}} else {
g.drawLine$I$I$I$I((last.x|0), (last.y|0), (now.x|0), (now.y|0));
}toggle+=1;
last=now;
}
});

Clazz.newMeth(C$, 'displayString$java_awt_Graphics2D$edu_haverford_physicsapplets_BeadedString2_vector2d$S', function (g, v, s) {
var p=this.getPoint$edu_haverford_physicsapplets_BeadedString2_vector2d(v);
this.biG.setColor$java_awt_Color($I$(3).red);
g.drawString$S$I$I(s, (p.x|0), (p.y|0));
});

Clazz.newMeth(C$, 'drawGraphPoint$java_awt_Graphics2D$edu_haverford_physicsapplets_BeadedString2_vector2d', function (g, v) {
var sl=this.getPoint$edu_haverford_physicsapplets_BeadedString2_vector2d(v);
g.fillOval$I$I$I$I(((sl.x - 4)|0), ((sl.y - 4)|0), 8, 8);
});

Clazz.newMeth(C$, 'getPoint$edu_haverford_physicsapplets_BeadedString2_vector2d', function (point) {
return this.screenLocation$edu_haverford_physicsapplets_BeadedString2_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width / (this.xAxis)) * point.x, (this.getSize$().height / (this.yAxis)) * point.y]));
});

Clazz.newMeth(C$, 'labelAxis$java_awt_Graphics2D$S$S', function (g, x, y) {
g.drawString$S$I$I(y, (this.getSize$().width/2|0) + (this.shiftOrigin.x|0) + 5, g.getFontMetrics$().getHeight$());
g.drawString$S$I$I(x, this.getSize$().width - g.getFontMetrics$().stringWidth$S(x), (this.getSize$().height/2|0) + (this.shiftOrigin.y|0) + g.getFontMetrics$().getHeight$());
});

Clazz.newMeth(C$, 'labelAxisPoint$java_awt_Graphics2D$I$D$S', function (g, axis, value, label) {
this.biG.setColor$java_awt_Color($I$(3).black);
if (axis == 0) {
var p=this.getPoint$edu_haverford_physicsapplets_BeadedString2_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, value, 0]));
g.drawLine$I$I$I$I((p.x|0), (p.y|0) - 5, (p.x|0), (p.y|0) + 5);
this.biG.setColor$java_awt_Color($I$(3).red);
g.drawString$S$I$I(label, (p.x|0) + 5, (p.y|0) + g.getFontMetrics$().getHeight$());
} else {
var p=this.getPoint$edu_haverford_physicsapplets_BeadedString2_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, 0, value]));
g.drawLine$I$I$I$I((p.x|0) - 5, (p.y|0), (p.x|0) + 5, (p.y|0));
this.biG.setColor$java_awt_Color($I$(3).red);
g.drawString$S$I$I(label, (p.x|0) + 10, (p.y|0) + 2);
}});

Clazz.newMeth(C$, 'drawAxis$java_awt_Graphics2D', function (g) {
g.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F,[2.0]));
g.setColor$java_awt_Color($I$(3).black);
g.drawLine$I$I$I$I((this.getSize$().width/2|0) + (this.shiftOrigin.x|0), 0, (this.getSize$().width/2|0) + (this.shiftOrigin.x|0), this.getSize$().height);
g.drawLine$I$I$I$I(0, (this.getSize$().height/2|0) + (this.shiftOrigin.y|0), this.getSize$().width, (this.getSize$().height/2|0) + (this.shiftOrigin.y|0));
});

Clazz.newMeth(C$, 'drawGrid$java_awt_Graphics2D$I$I', function (g, xlines, ylines) {
g.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F,[1.0]));
g.setColor$java_awt_Color($I$(3).yellow);
for (var i=0; i <= xlines; i++) {
g.drawLine$I$I$I$I(((i * (this.getSize$().width / (xlines)) + this.shiftOrigin.x)|0), 0, ((i * (this.getSize$().width / (xlines)) + this.shiftOrigin.x)|0), this.getSize$().height);
}
for (var i=0; i <= ylines; i++) {
g.drawLine$I$I$I$I(0, ((i * (this.getSize$().height / (ylines)) + this.shiftOrigin.y)|0), this.getSize$().width, ((i * (this.getSize$().height / (ylines)) + this.shiftOrigin.y)|0));
}
});

Clazz.newMeth(C$, 'worldLocation$edu_haverford_physicsapplets_BeadedString2_vector2d', function (screenLocation) {
return Clazz.new_($I$(1).c$$D$D, [this, null, screenLocation.x - ((this.getSize$().width/2|0) + this.shiftOrigin.x), -1 * (screenLocation.y - ((this.getSize$().height/2|0) + this.shiftOrigin.y))]);
});

Clazz.newMeth(C$, 'screenLocation$edu_haverford_physicsapplets_BeadedString2_vector2d', function (world) {
return Clazz.new_($I$(1).c$$D$D, [this, null, world.x + (this.getSize$().width/2|0) + this.shiftOrigin.x, -1 * world.y + (this.getSize$().height/2|0) + this.shiftOrigin.y]);
});

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return Clazz.new_($I$(5).c$$I$I,[100, 100]);
});

Clazz.newMeth(C$, 'getMinimumSize$', function () {
return Clazz.new_($I$(5).c$$I$I,[100, 100]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.BeadedString2, "AniPanel", function(){
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
}this.biG.setRenderingHint$java_awt_RenderingHints_Key$O($I$(2).KEY_ANTIALIASING, $I$(2).VALUE_ANTIALIAS_ON);
this.biG.setColor$java_awt_Color($I$(3).white);
this.biG.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
var ypos;
var sq2=Math.sqrt(2);
var ln;
var place;
var nmode;
var nln;
var old=Clazz.new_($I$(1).c$$D$D, [this, null, 0, (this.getSize$().height/2|0)]);
place=this.this$0.L / 150.0;
nmode=this.this$0.mode % (2 * (this.this$0.nMasses + 1));
nmode=((this.this$0.nMasses + 1) - Math.abs(nmode - this.this$0.nMasses - 1 )) % (this.this$0.nMasses + 1);
ln=(2 * this.this$0.L) / this.this$0.mode;
nln=(2 * this.this$0.L) / nmode;
if (nmode == 0) {
nln=ln;
}if (!this.this$0.showSprings) {
this.biG.setColor$java_awt_Color($I$(3).blue);
for (var i=1; i < 150; i++) {
ypos=15 * Math.sin((2 * 3.1415 * i * place ) / ln) * Math.cos(sq2 * this.this$0.Wa * Math.sin(3.1415 / nln) * this.this$0.a * this.time ) ;
this.biG.drawLine$I$I$I$I(((i * place)|0), ((this.getSize$().height/2|0)) - (ypos|0), (old.x|0), (old.y|0));
old.x=i * place;
old.y=((this.getSize$().height/2|0)) - ypos;
}
}var s;
if (nmode != this.this$0.mode) {
old=Clazz.new_($I$(1).c$$D$D, [this, null, 0, (this.getSize$().height/2|0)]);
this.biG.setColor$java_awt_Color($I$(3).red);
place=this.this$0.L / 150.0;
nmode=this.this$0.mode % (2 * (this.this$0.nMasses + 1));
nmode=((this.this$0.nMasses + 1) - Math.abs(nmode - this.this$0.nMasses - 1 )) % (this.this$0.nMasses + 1);
ln=(2 * this.this$0.L) / this.this$0.mode;
nln=(2 * this.this$0.L) / nmode;
var shift=((this.this$0.mode/(this.this$0.nMasses + 1)|0)) % 2;
for (var i=1; i < 150; i++) {
ypos=15 * Math.sin(3.1415 * shift + (2 * 3.1415 * i * place ) / nln) * Math.cos(sq2 * this.this$0.Wa * Math.sin(3.1415 / nln) * this.this$0.a * this.time ) ;
this.biG.drawLine$I$I$I$I(((i * place)|0), ((this.getSize$().height/2|0)) - (ypos|0), (old.x|0), (old.y|0));
old.x=i * place;
old.y=((this.getSize$().height/2|0)) - ypos;
}
if (nmode == 0) {
s="Mode " + String.valueOf$I(this.this$0.mode) + " is the same as no motion." ;
} else {
s="Mode " + String.valueOf$I(this.this$0.mode) + " is the same as fundamental mode " + String.valueOf$I(nmode) + "." ;
}} else {
s="Displaying fundamental mode " + String.valueOf$I(this.this$0.mode) + "." ;
}this.biG.setColor$java_awt_Color($I$(3).black);
this.biG.drawString$S$I$I(s, this.getSize$().width - 10 - this.biG.getFontMetrics$().stringWidth$S(s) , this.getSize$().height - 5 - this.biG.getFontMetrics$().getHeight$() );
nmode=this.this$0.mode % (2 * (this.this$0.nMasses + 1));
nmode=((this.this$0.nMasses + 1) - Math.abs(nmode - this.this$0.nMasses - 1 )) % (this.this$0.nMasses + 1);
ln=(2 * this.this$0.L) / this.this$0.mode;
nln=(2 * this.this$0.L) / nmode;
if (!this.this$0.showSprings) {
this.biG.setColor$java_awt_Color($I$(3).black);
for (var i=1; i < this.this$0.nMasses + 1; i++) {
ypos=15 * Math.sin((2 * 3.1415 * i * this.this$0.a ) / ln) * Math.cos(sq2 * this.this$0.Wa * Math.sin(3.1415 / nln) * this.this$0.a * this.time ) ;
this.biG.fillOval$I$I$I$I((((i * this.this$0.a) - 4)|0), (((this.getSize$().height/2|0)) - ((ypos|0))) - 4, 8, 8);
}
} else {
old=Clazz.new_($I$(1).c$$D$D, [this, null, 0, (this.getSize$().height/2|0)]);
for (var i=1; i < this.this$0.nMasses + 1; i++) {
ypos=15 * Math.sin((2 * 3.1415 * i * this.this$0.a ) / ln) * Math.cos(sq2 * this.this$0.Wa * Math.sin(3.1415 / nln) * this.this$0.a * this.time ) ;
this.biG.setColor$java_awt_Color($I$(3).black);
this.biG.fillOval$I$I$I$I((((i * this.this$0.a) - 4)|0), (((this.getSize$().height/2|0)) - ((ypos|0))) - 4, 8, 8);
this.biG.setColor$java_awt_Color($I$(3).blue);
this.biG.drawLine$I$I$I$I((old.x|0), (old.y|0), ((i * this.this$0.a)|0), (((this.getSize$().height/2|0)) - (ypos|0)));
old.x=i * this.this$0.a;
old.y=((this.getSize$().height/2|0)) - (ypos|0);
}
this.biG.drawLine$I$I$I$I((old.x|0), (old.y|0), this.getSize$().width, (this.getSize$().height/2|0));
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bi, 0, 0, this);
});

Clazz.newMeth(C$, 'run$', function () {
this.timer=Clazz.new_($I$(6).c$$I$java_awt_event_ActionListener,[1 ||10, ((P$.BeadedString2$AniPanel$1||
(function(){var C$=Clazz.newClass(P$, "BeadedString2$AniPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (!this.b$['edu.haverford.physicsapplets.BeadedString2.AniPanel'].running) {
this.b$['edu.haverford.physicsapplets.BeadedString2.AniPanel'].timer.stop$();
return;
}this.b$['edu.haverford.physicsapplets.BeadedString2.AniPanel'].doStep$.apply(this.b$['edu.haverford.physicsapplets.BeadedString2.AniPanel'], []);
});
})()
), Clazz.new_(P$.BeadedString2$AniPanel$1.$init$, [this, null]))]);
this.timer.setDelay$I(1);
this.timer.setRepeats$Z(true);
this.timer.start$();
});

Clazz.newMeth(C$, 'doStep$', function () {
if (this.slow) this.time += 0.06 ||0.01;
 else this.time += 0.6 ||0.1;
this.repaint$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-05 09:36:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
