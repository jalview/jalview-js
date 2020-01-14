(function(){var P$=Clazz.newPackage("edu.haverford.physicsapplets"),p$1={},p$2={},p$3={},I$=[[0,['edu.haverford.physicsapplets.Oscillator3','.vector2d'],'java.awt.RenderingHints','java.awt.Color','java.awt.BasicStroke','javax.swing.Timer',['edu.haverford.physicsapplets.Oscillator3','.GraphPanel'],['edu.haverford.physicsapplets.Oscillator3','.AniPanel2'],['edu.haverford.physicsapplets.Oscillator3','.AniPanel'],'Thread','javax.swing.JPanel','javax.swing.JButton','javax.swing.JCheckBox','javax.swing.JLabel','javax.swing.JSlider','javax.swing.BoxLayout','javax.swing.border.EtchedBorder','java.awt.event.MouseAdapter','java.awt.event.MouseMotionAdapter','java.awt.Dimension']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Oscillator3", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JApplet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.disp=null;
this.beats=null;
this.graph=null;
this.g=0;
this.k=0;
this.m=0;
this.Plength=0;
this.Ws=0;
this.Wb=0;
this.Wav=0;
this.d=0;
this.showVectors=false;
this.doAnimate=false;
this.dropLines=false;
this.bobDist=0;
this.dashedStroke=null;
this.goButton=null;
this.jLabel1=null;
this.jPanel1=null;
this.jPanel2=null;
this.jSlider1=null;
this.kText=null;
this.leftPanel=null;
this.middlePanel=null;
this.rightPanel=null;
this.showDropLines=null;
this.showVectorsBox=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.g=9.8;
this.k=0.5;
this.m=10;
this.Plength=80;
this.showVectors=true;
this.doAnimate=false;
this.dropLines=false;
this.bobDist=50;
this.dashedStroke=Clazz.new_($I$(4).c$$F$I$I$F$FA$F,[1, 0, 1, 0, Clazz.array(Float.TYPE, -1, [9]), 0]);
}, 1);

Clazz.newMeth(C$, ['updateMath$','updateMath'], function () {
this.Ws=Math.sqrt(this.g / this.Plength);
this.Wb=Math.sqrt(2 * this.k / this.m + this.g / this.Plength);
this.Wav=(this.Ws + this.Wb) / 2.0;
this.d=(this.Ws - this.Wb) / 2.0;
});

Clazz.newMeth(C$, ['init$','init'], function () {
this.updateMath$();
p$3.initComponents.apply(this, []);
this.graph=Clazz.new_($I$(6), [this, null]);
this.beats=Clazz.new_($I$(7), [this, null]);
this.disp=Clazz.new_($I$(8), [this, null]);
this.leftPanel.add$java_awt_Component(this.graph);
this.rightPanel.add$java_awt_Component(this.disp);
this.middlePanel.add$java_awt_Component(this.beats);
this.disp.running=true;
this.disp.myThread=Clazz.new_($I$(9).c$$Runnable,[this.disp]);
this.disp.myThread.start$();
this.jSlider1.setValue$I(((this.k * 50)|0));
this.kText.setText$S("  k: " + String.valueOf$D(Math.round(this.jSlider1.getValue$() * 10000.0 / 50.0) / 10000.0));
});

Clazz.newMeth(C$, ['start$','start'], function () {
});

Clazz.newMeth(C$, ['stop$','stop'], function () {
this.disp.running=false;
this.disp.myThread=null;
});

Clazz.newMeth(C$, ['destroy$','destroy'], function () {
this.disp.running=false;
this.disp.myThread=null;
});

Clazz.newMeth(C$, 'initComponents', function () {
this.jPanel1=Clazz.new_($I$(10));
this.leftPanel=Clazz.new_($I$(10));
this.rightPanel=Clazz.new_($I$(10));
this.middlePanel=Clazz.new_($I$(10));
this.jPanel2=Clazz.new_($I$(10));
this.goButton=Clazz.new_($I$(11));
this.showVectorsBox=Clazz.new_($I$(12));
this.showDropLines=Clazz.new_($I$(12));
this.jLabel1=Clazz.new_($I$(13));
this.jSlider1=Clazz.new_($I$(14));
this.kText=Clazz.new_($I$(13));
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(15).c$$java_awt_Container$I,[this.getContentPane$(), 1]));
this.jPanel1.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15).c$$java_awt_Container$I,[this.jPanel1, 0]));
this.jPanel1.addHierarchyBoundsListener$java_awt_event_HierarchyBoundsListener(((P$.Oscillator3$1||
(function(){var C$=Clazz.newClass(P$, "Oscillator3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.HierarchyBoundsListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['ancestorMoved$java_awt_event_HierarchyEvent','ancestorMoved'], function (evt) {
});

Clazz.newMeth(C$, ['ancestorResized$java_awt_event_HierarchyEvent','ancestorResized'], function (evt) {
p$3.jPanel1AncestorResized$java_awt_event_HierarchyEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator3'], [evt]);
});
})()
), Clazz.new_(P$.Oscillator3$1.$init$, [this, null])));
this.leftPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15).c$$java_awt_Container$I,[this.leftPanel, 0]));
this.leftPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(16)));
this.leftPanel.addMouseListener$java_awt_event_MouseListener(((P$.Oscillator3$2||
(function(){var C$=Clazz.newClass(P$, "Oscillator3$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['mouseClicked$java_awt_event_MouseEvent','mouseClicked'], function (evt) {
p$3.leftPanelMouseClicked$java_awt_event_MouseEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator3'], [evt]);
});
})()
), Clazz.new_($I$(17), [this, null],P$.Oscillator3$2)));
this.leftPanel.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.Oscillator3$3||
(function(){var C$=Clazz.newClass(P$, "Oscillator3$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseMotionAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['mouseDragged$java_awt_event_MouseEvent','mouseDragged'], function (evt) {
p$3.leftPanelMouseDragged$java_awt_event_MouseEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator3'], [evt]);
});
})()
), Clazz.new_($I$(18), [this, null],P$.Oscillator3$3)));
this.jPanel1.add$java_awt_Component(this.leftPanel);
this.rightPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15).c$$java_awt_Container$I,[this.rightPanel, 0]));
this.rightPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(16)));
this.jPanel1.add$java_awt_Component(this.rightPanel);
this.getContentPane$().add$java_awt_Component(this.jPanel1);
this.middlePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(15).c$$java_awt_Container$I,[this.middlePanel, 1]));
this.middlePanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(16)));
this.middlePanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(19).c$$I$I,[3000, 100]));
this.middlePanel.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(19).c$$I$I,[300, 100]));
this.middlePanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(19).c$$I$I,[300, 100]));
this.getContentPane$().add$java_awt_Component(this.middlePanel);
this.jPanel2.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.jPanel2.setBorder$javax_swing_border_Border(Clazz.new_($I$(16)));
this.jPanel2.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(19).c$$I$I,[10000000, 34]));
this.goButton.setText$S("Go!");
this.goButton.addActionListener$java_awt_event_ActionListener(((P$.Oscillator3$4||
(function(){var C$=Clazz.newClass(P$, "Oscillator3$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed','actionPerformed$'], function (evt) {
p$3.goButtonActionPerformed$java_awt_event_ActionEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator3'], [evt]);
});
})()
), Clazz.new_(P$.Oscillator3$4.$init$, [this, null])));
this.jPanel2.add$java_awt_Component(this.goButton);
this.showVectorsBox.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.showVectorsBox.setSelected$Z(true);
this.showVectorsBox.setText$S("Show Vectors");
this.showVectorsBox.addActionListener$java_awt_event_ActionListener(((P$.Oscillator3$5||
(function(){var C$=Clazz.newClass(P$, "Oscillator3$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed','actionPerformed$'], function (evt) {
p$3.showVectorsBoxActionPerformed$java_awt_event_ActionEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator3'], [evt]);
});
})()
), Clazz.new_(P$.Oscillator3$5.$init$, [this, null])));
this.jPanel2.add$java_awt_Component(this.showVectorsBox);
this.showDropLines.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.showDropLines.setText$S("Drop Lines");
this.showDropLines.addActionListener$java_awt_event_ActionListener(((P$.Oscillator3$6||
(function(){var C$=Clazz.newClass(P$, "Oscillator3$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed','actionPerformed$'], function (evt) {
p$3.showDropLinesActionPerformed$java_awt_event_ActionEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator3'], [evt]);
});
})()
), Clazz.new_(P$.Oscillator3$6.$init$, [this, null])));
this.jPanel2.add$java_awt_Component(this.showDropLines);
this.jLabel1.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.jLabel1.setText$S("    Set k:");
this.jPanel2.add$java_awt_Component(this.jLabel1);
this.jSlider1.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.jSlider1.setMajorTickSpacing$I(20);
this.jSlider1.setMaximum$I(200);
this.jSlider1.setMinorTickSpacing$I(5);
this.jSlider1.addChangeListener$javax_swing_event_ChangeListener(((P$.Oscillator3$7||
(function(){var C$=Clazz.newClass(P$, "Oscillator3$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged','stateChanged$'], function (evt) {
p$3.jSlider1StateChanged$javax_swing_event_ChangeEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator3'], [evt]);
});
})()
), Clazz.new_(P$.Oscillator3$7.$init$, [this, null])));
this.jPanel2.add$java_awt_Component(this.jSlider1);
this.kText.setBackground$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[255, 255, 255]));
this.kText.setText$S("  k:");
this.jPanel2.add$java_awt_Component(this.kText);
this.getContentPane$().add$java_awt_Component(this.jPanel2);
}, p$3);

Clazz.newMeth(C$, 'showDropLinesActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.dropLines=!this.dropLines;
this.repaint$();
}, p$3);

Clazz.newMeth(C$, 'goButtonActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.doAnimate=true;
this.goButton.setEnabled$Z(false);
}, p$3);

Clazz.newMeth(C$, 'showVectorsBoxActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.showVectors=!this.showVectors;
this.repaint$();
}, p$3);

Clazz.newMeth(C$, 'jPanel1AncestorResized$java_awt_event_HierarchyEvent', function (evt) {
this.disp.firsttime=true;
this.graph.firsttime=true;
this.beats.firsttime=true;
this.repaint$();
}, p$3);

Clazz.newMeth(C$, 'leftPanelMouseDragged$java_awt_event_MouseEvent', function (evt) {
this.graph.mouseDragged$java_awt_event_MouseEvent(evt);
}, p$3);

Clazz.newMeth(C$, 'jSlider1StateChanged$javax_swing_event_ChangeEvent', function (evt) {
this.kText.setText$S("  k: " + String.valueOf$D(Math.round(this.jSlider1.getValue$() * 10000.0 / 50.0) / 10000.0));
this.k=(this.jSlider1.getValue$() / 50.0) + 1.0E-5;
this.updateMath$();
this.disp.time=0;
this.beats.time=0;
}, p$3);

Clazz.newMeth(C$, 'leftPanelMouseClicked$java_awt_event_MouseEvent', function (evt) {
this.graph.mouseClicked$java_awt_event_MouseEvent(evt);
}, p$3);
;
(function(){var C$=Clazz.newClass(P$.Oscillator3, "GraphPanel", function(){
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
this.thePoint=null;
this.theNewPoint=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.firsttime=true;
this.xAxis=12;
this.yAxis=12;
this.thePoint=Clazz.new_($I$(1).c$$D$D, [this, null, 0, 0]);
this.theNewPoint=Clazz.new_($I$(1).c$$D$D, [this, null, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.firsttime) {
this.bi=this.createImage$I$I(this.getSize$().width, this.getSize$().height);
this.biG=this.bi.createGraphics$();
this.firsttime=false;
}this.biG.setRenderingHint$java_awt_RenderingHints_Key$O($I$(2).KEY_ANTIALIASING, $I$(2).VALUE_ANTIALIAS_ON);
this.biG.setColor$java_awt_Color($I$(3).white);
this.biG.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
p$1.drawGrid$java_awt_Graphics2D$I$I.apply(this, [this.biG, this.xAxis, this.yAxis]);
p$1.drawAxis$java_awt_Graphics2D.apply(this, [this.biG]);
this.biG.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F,[1.5]));
this.biG.setColor$java_awt_Color($I$(3).red);
this.biG.drawLine$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
this.biG.drawLine$I$I$I$I(this.getSize$().width, 0, 0, this.getSize$().height);
this.biG.drawString$S$I$I("A_breathing", 30, this.biG.getFontMetrics$().getHeight$());
this.biG.drawString$S$I$I("A_pendulum", this.getSize$().width - 30 - this.biG.getFontMetrics$().stringWidth$S("A_pendulum") , this.biG.getFontMetrics$().getHeight$());
p$1.labelAxis$java_awt_Graphics2D$S$S.apply(this, [this.biG, "X10", "X20"]);
if (this.this$0.showVectors) {
p$1.drawVectors$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator3_vector2d$I$I.apply(this, [this.biG, this.thePoint, this.xAxis, this.yAxis]);
} else {
p$1.drawGraphPoint$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator3_vector2d$I$I.apply(this, [this.biG, this.thePoint, this.xAxis, this.yAxis]);
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bi, 0, 0, this);
});

Clazz.newMeth(C$, 'drawVectors$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator3_vector2d$I$I', function (g, p, xlines, ylines) {
g.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F,[3.0]));
var xspace=this.getSize$().width / (xlines);
var yspace=this.getSize$().height / (ylines);
var slThePoint=p$1.screenLocation$edu_haverford_physicsapplets_Oscillator3_vector2d.apply(this, [Clazz.new_($I$(1).c$$D$D, [this, null, xspace * p.x, yspace * p.y])]);
var pt=Clazz.new_($I$(1).c$$D$D, [this, null, xspace * p.x, yspace * p.y]);
var c=pt.dot$edu_haverford_physicsapplets_Oscillator3_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, xspace, yspace])) / ((xspace * xspace + yspace * yspace));
var sl=p$1.screenLocation$edu_haverford_physicsapplets_Oscillator3_vector2d.apply(this, [Clazz.new_($I$(1).c$$D$D, [this, null, c * xspace, c * yspace])]);
g.setColor$java_awt_Color($I$(3).blue);
p$1.drawArrow$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator3_vector2d$edu_haverford_physicsapplets_Oscillator3_vector2d.apply(this, [g, Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width/2|0), (this.getSize$().height/2|0)]), sl]);
if (this.this$0.dropLines) {
g.setStroke$java_awt_Stroke(this.this$0.dashedStroke);
g.drawLine$I$I$I$I((slThePoint.x|0), (slThePoint.y|0), (sl.x|0), (sl.y|0));
g.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F,[3.0]));
}g.setColor$java_awt_Color($I$(3).black);
c=pt.dot$edu_haverford_physicsapplets_Oscillator3_vector2d(Clazz.new_($I$(1).c$$D$D, [this, null, -xspace, yspace])) / ((xspace * xspace + yspace * yspace));
sl=p$1.screenLocation$edu_haverford_physicsapplets_Oscillator3_vector2d.apply(this, [Clazz.new_($I$(1).c$$D$D, [this, null, -c * xspace, c * yspace])]);
p$1.drawArrow$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator3_vector2d$edu_haverford_physicsapplets_Oscillator3_vector2d.apply(this, [g, Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width/2|0), (this.getSize$().height/2|0)]), sl]);
if (this.this$0.dropLines) {
g.setStroke$java_awt_Stroke(this.this$0.dashedStroke);
g.drawLine$I$I$I$I((slThePoint.x|0), (slThePoint.y|0), (sl.x|0), (sl.y|0));
g.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F,[3.0]));
}g.setColor$java_awt_Color($I$(3).green);
p$1.drawArrow$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator3_vector2d$edu_haverford_physicsapplets_Oscillator3_vector2d.apply(this, [g, Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width/2|0), (this.getSize$().height/2|0)]), slThePoint]);
g.setColor$java_awt_Color($I$(3).red);
p$1.drawArrow$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator3_vector2d$edu_haverford_physicsapplets_Oscillator3_vector2d.apply(this, [g, Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width/2|0), (this.getSize$().height/2|0)]), Clazz.new_($I$(1).c$$D$D, [this, null, slThePoint.x, (this.getSize$().height/2|0)])]);
g.setColor$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[186, 85, 211]));
p$1.drawArrow$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator3_vector2d$edu_haverford_physicsapplets_Oscillator3_vector2d.apply(this, [g, Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width/2|0), (this.getSize$().height/2|0)]), Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width/2|0), slThePoint.y])]);
if (this.this$0.dropLines) {
g.setStroke$java_awt_Stroke(this.this$0.dashedStroke);
g.setColor$java_awt_Color($I$(3).red);
g.drawLine$I$I$I$I((slThePoint.x|0), (slThePoint.y|0), (slThePoint.x|0), (this.getSize$().height/2|0));
g.setColor$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[186, 85, 211]));
g.drawLine$I$I$I$I((slThePoint.x|0), (slThePoint.y|0), (this.getSize$().width/2|0), (slThePoint.y|0));
g.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F,[3.0]));
}}, p$1);

Clazz.newMeth(C$, 'drawArrow$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator3_vector2d$edu_haverford_physicsapplets_Oscillator3_vector2d', function (g, start, end) {
var t=end.minus$edu_haverford_physicsapplets_Oscillator3_vector2d(start);
var angle=0.5235833333333334;
var rotated=Clazz.new_($I$(1).c$$D$D, [this, null, t.x * Math.cos(angle) + t.y * Math.sin(angle), t.y * Math.cos(angle) - t.x * Math.sin(angle)]);
rotated=rotated.normalize$();
g.drawLine$I$I$I$I((start.x|0), (start.y|0), (end.x|0), (end.y|0));
g.drawLine$I$I$I$I((end.x|0), (end.y|0), ((end.x + -10 * rotated.x)|0), ((end.y + -10 * rotated.y)|0));
angle=-0.5235833333333334;
rotated=Clazz.new_($I$(1).c$$D$D, [this, null, t.x * Math.cos(angle) + t.y * Math.sin(angle), t.y * Math.cos(angle) - t.x * Math.sin(angle)]);
rotated=rotated.normalize$();
g.drawLine$I$I$I$I((end.x|0), (end.y|0), ((end.x + -10 * rotated.x)|0), ((end.y + -10 * rotated.y)|0));
}, p$1);

Clazz.newMeth(C$, 'drawGraphPoint$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator3_vector2d$I$I', function (g, v, xlines, ylines) {
var sl=p$1.screenLocation$edu_haverford_physicsapplets_Oscillator3_vector2d.apply(this, [Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width / (xlines)) * v.x, (this.getSize$().height / (ylines)) * v.y])]);
this.biG.setColor$java_awt_Color($I$(3).blue);
g.fillOval$I$I$I$I(((sl.x - 4)|0), ((sl.y - 4)|0), 8, 8);
}, p$1);

Clazz.newMeth(C$, 'labelAxis$java_awt_Graphics2D$S$S', function (g, x, y) {
g.drawString$S$I$I(y, (this.getSize$().width/2|0) + 5, g.getFontMetrics$().getHeight$());
g.drawString$S$I$I(x, this.getSize$().width - g.getFontMetrics$().stringWidth$S(x), (this.getSize$().height/2|0) + g.getFontMetrics$().getHeight$());
}, p$1);

Clazz.newMeth(C$, 'drawAxis$java_awt_Graphics2D', function (g) {
g.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F,[2.0]));
g.setColor$java_awt_Color($I$(3).black);
g.drawLine$I$I$I$I((this.getSize$().width/2|0), 0, (this.getSize$().width/2|0), this.getSize$().height);
g.drawLine$I$I$I$I(0, (this.getSize$().height/2|0), this.getSize$().width, (this.getSize$().height/2|0));
}, p$1);

Clazz.newMeth(C$, 'drawGrid$java_awt_Graphics2D$I$I', function (g, xlines, ylines) {
g.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F,[1.0]));
g.setColor$java_awt_Color($I$(3).yellow);
for (var i=0; i <= xlines; i++) {
g.drawLine$I$I$I$I(((i * (this.getSize$().width / (xlines)))|0), 0, ((i * (this.getSize$().width / (xlines)))|0), this.getSize$().height);
}
for (var i=0; i <= ylines; i++) {
g.drawLine$I$I$I$I(0, ((i * (this.getSize$().height / (ylines)))|0), this.getSize$().width, ((i * (this.getSize$().height / (ylines)))|0));
}
}, p$1);

Clazz.newMeth(C$, 'worldLocation$edu_haverford_physicsapplets_Oscillator3_vector2d', function (screenLocation) {
return Clazz.new_($I$(1).c$$D$D, [this, null, screenLocation.x - (this.getSize$().width/2|0), -1 * (screenLocation.y - (this.getSize$().height/2|0))]);
}, p$1);

Clazz.newMeth(C$, 'screenLocation$edu_haverford_physicsapplets_Oscillator3_vector2d', function (world) {
return Clazz.new_($I$(1).c$$D$D, [this, null, world.x + (this.getSize$().width/2|0), -1 * world.y + (this.getSize$().height/2|0)]);
}, p$1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
var l=p$1.worldLocation$edu_haverford_physicsapplets_Oscillator3_vector2d.apply(this, [Clazz.new_($I$(1).c$$D$D, [this, null, evt.getX$(), evt.getY$()])]);
var xLoc=(l.x / (this.getSize$().width / this.xAxis));
var yLoc=(l.y / (this.getSize$().height / this.yAxis));
this.thePoint=Clazz.new_($I$(1).c$$D$D, [this, null, xLoc, yLoc]);
this.theNewPoint=Clazz.new_($I$(1).c$$D$D, [this, null, (xLoc - yLoc) / 2, (xLoc + yLoc) / 2]);
this.repaint$();
this.this$0.disp.time=0;
this.this$0.beats.time=0;
this.this$0.doAnimate=false;
this.this$0.goButton.setEnabled$Z(true);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
var l=p$1.worldLocation$edu_haverford_physicsapplets_Oscillator3_vector2d.apply(this, [Clazz.new_($I$(1).c$$D$D, [this, null, evt.getX$(), evt.getY$()])]);
var xLoc=(l.x / (this.getSize$().width / this.xAxis));
var yLoc=(l.y / (this.getSize$().height / this.yAxis));
this.thePoint=Clazz.new_($I$(1).c$$D$D, [this, null, xLoc, yLoc]);
this.theNewPoint=Clazz.new_($I$(1).c$$D$D, [this, null, (xLoc - yLoc) / 2, (xLoc + yLoc) / 2]);
this.repaint$();
this.this$0.disp.time=0;
this.this$0.beats.time=0;
this.this$0.doAnimate=false;
this.this$0.goButton.setEnabled$Z(true);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Oscillator3, "vector2d", function(){
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

Clazz.newMeth(C$, 'minus$edu_haverford_physicsapplets_Oscillator3_vector2d', function ($in) {
return Clazz.new_(C$.c$$D$D, [this, null, this.x - $in.x, this.y - $in.y]);
});

Clazz.newMeth(C$, 'plus$edu_haverford_physicsapplets_Oscillator3_vector2d', function ($in) {
return Clazz.new_(C$.c$$D$D, [this, null, this.x + $in.x, this.y + $in.y]);
});

Clazz.newMeth(C$, 'normalize$', function () {
var d=Math.sqrt(this.x * this.x + this.y * this.y);
if (d == 0 ) {
return Clazz.new_(C$.c$$D$D, [this, null, 0, 0]);
} else {
return Clazz.new_(C$.c$$D$D, [this, null, this.x / d, this.y / d]);
}});

Clazz.newMeth(C$, 'dot$edu_haverford_physicsapplets_Oscillator3_vector2d', function ($in) {
return $in.x * this.x + $in.y * this.y;
});
})()
;
(function(){var C$=Clazz.newClass(P$.Oscillator3, "AniPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel', 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.running=false;
this.myThread=null;
this.mode=0;
this.firsttime=false;
this.bi=null;
this.biG=null;
this.body1=null;
this.body2=null;
this.time=0;
this.halfWidth=0;
this.halfHeight=0;
this.timer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.running=false;
this.mode=1;
this.firsttime=true;
this.body1=Clazz.new_($I$(1).c$$D$D, [this, null, 0, 0]);
this.body2=Clazz.new_($I$(1).c$$D$D, [this, null, 0, 0]);
this.time=0;
this.halfWidth=(this.getSize$().width/2|0);
this.halfHeight=(this.getSize$().height/2|0);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.firsttime) {
this.bi=this.createImage$I$I(this.getSize$().width, this.getSize$().height);
this.biG=this.bi.createGraphics$();
this.firsttime=false;
}this.biG.setRenderingHint$java_awt_RenderingHints_Key$O($I$(2).KEY_ANTIALIASING, $I$(2).VALUE_ANTIALIAS_ON);
this.biG.setColor$java_awt_Color($I$(3).white);
this.biG.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
this.biG.setColor$java_awt_Color($I$(3).red);
this.biG.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F,[2.0]));
this.biG.drawLine$I$I$I$I(((this.getSize$().width/2|0) + this.this$0.bobDist), 60, (((this.getSize$().width/2|0) + this.body2.x)|0), ((60 + this.body2.y)|0));
this.biG.setColor$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[186, 85, 211]));
this.biG.drawLine$I$I$I$I(((this.getSize$().width/2|0) - this.this$0.bobDist), 60, (((this.getSize$().width/2|0) + this.body1.x)|0), ((60 + this.body1.y)|0));
this.biG.setColor$java_awt_Color($I$(3).red);
this.biG.fillRect$I$I$I$I(((this.getSize$().width/2|0) - this.this$0.bobDist - 10), 55, 2 * (this.this$0.bobDist + 10), 5);
this.biG.setColor$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[0, ((55 * this.this$0.k)|0), ((255 - 55 * this.this$0.k)|0)]));
this.biG.drawLine$I$I$I$I((((this.getSize$().width/2|0) + this.body1.x)|0), ((60 + this.body1.y)|0), (((this.getSize$().width/2|0) + this.body2.x)|0), ((60 + this.body2.y)|0));
this.biG.setColor$java_awt_Color(Clazz.new_($I$(3).c$$I$I$I,[186, 85, 211]));
this.biG.fillOval$I$I$I$I((((this.getSize$().width/2|0) + this.body1.x - 4)|0), ((60 + this.body1.y - 4)|0), 8, 8);
this.biG.setColor$java_awt_Color($I$(3).red);
this.biG.fillOval$I$I$I$I((((this.getSize$().width/2|0) + this.body2.x - 4)|0), ((60 + this.body2.y - 4)|0), 8, 8);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bi, 0, 0, this);
});

Clazz.newMeth(C$, 'run$', function () {
this.timer=Clazz.new_($I$(5).c$$I$java_awt_event_ActionListener,[1 ||10, ((P$.Oscillator3$AniPanel$1||
(function(){var C$=Clazz.newClass(P$, "Oscillator3$AniPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (!this.b$['edu.haverford.physicsapplets.Oscillator3.AniPanel'].running) {
this.b$['edu.haverford.physicsapplets.Oscillator3.AniPanel'].timer.stop$();
return;
}p$2.doStep.apply(this.b$['edu.haverford.physicsapplets.Oscillator3.AniPanel'], []);
});
})()
), Clazz.new_(P$.Oscillator3$AniPanel$1.$init$, [this, null]))]);
this.timer.setDelay$I(1);
this.timer.setRepeats$Z(true);
this.timer.start$();
});

Clazz.newMeth(C$, 'doStep', function () {
this.body1.x=-this.this$0.bobDist + this.this$0.graph.theNewPoint.x * 3 * Math.cos(this.this$0.Wb * this.time)  + this.this$0.graph.theNewPoint.y * 3 * Math.cos(this.this$0.Ws * this.time) ;
this.body2.x=this.this$0.bobDist + -1 * this.this$0.graph.theNewPoint.x * 3 * Math.cos(this.this$0.Wb * this.time)  + this.this$0.graph.theNewPoint.y * 3 * Math.cos(this.this$0.Ws * this.time) ;
this.body1.y=Math.sqrt(this.this$0.Plength * this.this$0.Plength - Math.pow(this.body1.x + this.this$0.bobDist, 2)) + this.this$0.Plength;
this.body2.y=Math.sqrt(this.this$0.Plength * this.this$0.Plength - Math.pow(this.body2.x - this.this$0.bobDist, 2)) + this.this$0.Plength;
if (this.this$0.doAnimate) {
this.time += 0.6 ||0.1;
this.this$0.beats.time += 0.6 ||0.1;
}this.this$0.beats.repaint$();
this.repaint$();
}, p$2);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Oscillator3, "AniPanel2", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.firsttime=false;
this.bi=null;
this.biG=null;
this.time=0;
this.halfWidth=0;
this.halfHeight=0;
this.last=null;
this.steps=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.firsttime=true;
this.time=0;
this.halfWidth=(this.getSize$().width/2|0);
this.halfHeight=(this.getSize$().height/2|0);
this.steps=70;
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.firsttime) {
this.bi=this.createImage$I$I(this.getSize$().width, this.getSize$().height);
this.biG=this.bi.createGraphics$();
this.firsttime=false;
}this.biG.setRenderingHint$java_awt_RenderingHints_Key$O($I$(2).KEY_ANTIALIASING, $I$(2).VALUE_ANTIALIAS_ON);
this.biG.setColor$java_awt_Color($I$(3).white);
this.biG.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
this.biG.setColor$java_awt_Color($I$(3).black);
var spacing=(0.75 * this.getSize$().width) / (this.steps);
var yspacing=(this.getSize$().height/4|0);
var Tint=31.416 / this.this$0.Ws;
this.last=Clazz.new_($I$(1).c$$D$D, [this, null, spacing, yspacing - this.this$0.graph.theNewPoint.x * 2 * Math.cos(this.this$0.Wb * ((Tint / this.steps) + this.time - Tint)) ]);
for (var i=1; i < this.steps + 1; i++) {
this.biG.drawLine$I$I$I$I(((i * spacing)|0), ((yspacing - this.this$0.graph.theNewPoint.x * 2 * Math.cos(this.this$0.Wb * ((i * Tint / this.steps) + this.time - Tint)) )|0), (this.last.x|0), (this.last.y|0));
this.last.x=i * spacing;
this.last.y=yspacing - this.this$0.graph.theNewPoint.x * 2 * Math.cos(this.this$0.Wb * ((i * Tint / this.steps) + this.time - Tint)) ;
}
this.biG.drawString$S$I$I("Breathing", ((0.75 * this.getSize$().width + 7)|0), (yspacing + 5));
this.biG.setColor$java_awt_Color($I$(3).blue);
this.last=Clazz.new_($I$(1).c$$D$D, [this, null, spacing, 2 * yspacing - this.this$0.graph.theNewPoint.y * 2 * Math.cos(this.this$0.Ws * ((Tint / this.steps) + this.time - Tint)) ]);
for (var i=1; i < this.steps + 1; i++) {
this.biG.drawLine$I$I$I$I(((i * spacing)|0), ((2 * yspacing - this.this$0.graph.theNewPoint.y * 2 * Math.cos(this.this$0.Ws * ((i * Tint / this.steps) + this.time - Tint)) )|0), (this.last.x|0), (this.last.y|0));
this.last.x=i * spacing;
this.last.y=2 * yspacing - this.this$0.graph.theNewPoint.y * 2 * Math.cos(this.this$0.Ws * ((i * Tint / this.steps) + this.time - Tint)) ;
}
this.biG.drawString$S$I$I("Pendulum", ((0.75 * this.getSize$().width + 7)|0), (2 * yspacing + 5));
this.biG.setColor$java_awt_Color($I$(3).black);
this.biG.drawLine$I$I$I$I(((0.75 * this.getSize$().width)|0), 0, ((0.75 * this.getSize$().width)|0), this.getSize$().height);
this.biG.setColor$java_awt_Color($I$(3).red);
this.last=Clazz.new_($I$(1).c$$D$D, [this, null, spacing, 3 * yspacing - this.this$0.graph.theNewPoint.y * 2 * Math.cos(this.this$0.Ws * ((Tint / this.steps) + this.time - Tint))  - this.this$0.graph.theNewPoint.x * 2 * Math.cos(this.this$0.Wb * ((Tint / this.steps) + this.time - Tint)) ]);
for (var i=1; i < this.steps + 1; i++) {
this.biG.drawLine$I$I$I$I(((i * spacing)|0), ((3 * yspacing - this.this$0.graph.theNewPoint.y * 2 * Math.cos(this.this$0.Ws * ((i * Tint / this.steps) + this.time - Tint))  - this.this$0.graph.theNewPoint.x * 2 * Math.cos(this.this$0.Wb * ((i * Tint / this.steps) + this.time - Tint)) )|0), (this.last.x|0), (this.last.y|0));
this.last.x=i * spacing;
this.last.y=3 * yspacing - this.this$0.graph.theNewPoint.y * 2 * Math.cos(this.this$0.Ws * ((i * Tint / this.steps) + this.time - Tint))  - this.this$0.graph.theNewPoint.x * 2 * Math.cos(this.this$0.Wb * ((i * Tint / this.steps) + this.time - Tint)) ;
}
this.biG.fillOval$I$I$I$I(((this.last.x)|0) - 4, ((this.last.y)|0) - 4, 8, 8);
this.biG.drawString$S$I$I("Right Mass Position", ((0.75 * this.getSize$().width + 7)|0), (3 * yspacing + 5));
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bi, 0, 0, this);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-05 09:37:06 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
