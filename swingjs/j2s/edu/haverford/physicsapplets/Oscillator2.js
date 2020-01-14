(function(){var P$=Clazz.newPackage("edu.haverford.physicsapplets"),p$1={},p$2={},I$=[[0,['edu.haverford.physicsapplets.Oscillator2','.vector2d'],'java.awt.Color','java.awt.BasicStroke','javax.swing.Timer',['edu.haverford.physicsapplets.Oscillator2','.GraphPanel'],['edu.haverford.physicsapplets.Oscillator2','.AniPanel2'],['edu.haverford.physicsapplets.Oscillator2','.AniPanel'],'Thread','javax.swing.JPanel','javax.swing.JCheckBox','javax.swing.JLabel','javax.swing.JSlider','javax.swing.BoxLayout','javax.swing.border.EtchedBorder','java.awt.event.MouseAdapter','java.awt.event.MouseMotionAdapter','java.awt.Dimension']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Oscillator2", function(){
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
this.jLabel1=null;
this.jPanel1=null;
this.jPanel2=null;
this.jSlider1=null;
this.kText=null;
this.leftPanel=null;
this.middlePanel=null;
this.rightPanel=null;
this.showVectorsBox=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.g=9.8;
this.k=0.5;
this.m=10;
this.Plength=80;
this.showVectors=true;
}, 1);

Clazz.newMeth(C$, ['updateMath$','updateMath'], function () {
this.Ws=Math.sqrt(this.g / this.Plength);
this.Wb=Math.sqrt(2 * this.k / this.m + this.g / this.Plength);
this.Wav=(this.Ws + this.Wb) / 2.0;
this.d=(this.Ws - this.Wb) / 2.0;
});

Clazz.newMeth(C$, ['init$','init'], function () {
this.updateMath$();
p$2.initComponents.apply(this, []);
this.graph=Clazz.new_($I$(5), [this, null]);
this.beats=Clazz.new_($I$(6), [this, null]);
this.disp=Clazz.new_($I$(7), [this, null]);
this.leftPanel.add$java_awt_Component(this.graph);
this.rightPanel.add$java_awt_Component(this.disp);
this.middlePanel.add$java_awt_Component(this.beats);
this.disp.running=true;
this.disp.myThread=Clazz.new_($I$(8).c$$Runnable,[this.disp]);
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
this.jPanel1=Clazz.new_($I$(9));
this.leftPanel=Clazz.new_($I$(9));
this.rightPanel=Clazz.new_($I$(9));
this.middlePanel=Clazz.new_($I$(9));
this.jPanel2=Clazz.new_($I$(9));
this.showVectorsBox=Clazz.new_($I$(10));
this.jLabel1=Clazz.new_($I$(11));
this.jSlider1=Clazz.new_($I$(12));
this.kText=Clazz.new_($I$(11));
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this.getContentPane$(), 1]));
this.jPanel1.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this.jPanel1, 0]));
this.jPanel1.addHierarchyBoundsListener$java_awt_event_HierarchyBoundsListener(((P$.Oscillator2$1||
(function(){var C$=Clazz.newClass(P$, "Oscillator2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.HierarchyBoundsListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['ancestorMoved$java_awt_event_HierarchyEvent','ancestorMoved'], function (evt) {
});

Clazz.newMeth(C$, ['ancestorResized$java_awt_event_HierarchyEvent','ancestorResized'], function (evt) {
p$2.jPanel1AncestorResized$java_awt_event_HierarchyEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator2'], [evt]);
});
})()
), Clazz.new_(P$.Oscillator2$1.$init$, [this, null])));
this.leftPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this.leftPanel, 0]));
this.leftPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(14)));
this.leftPanel.addMouseListener$java_awt_event_MouseListener(((P$.Oscillator2$2||
(function(){var C$=Clazz.newClass(P$, "Oscillator2$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['mouseClicked$java_awt_event_MouseEvent','mouseClicked'], function (evt) {
p$2.leftPanelMouseClicked$java_awt_event_MouseEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator2'], [evt]);
});
})()
), Clazz.new_($I$(15), [this, null],P$.Oscillator2$2)));
this.leftPanel.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.Oscillator2$3||
(function(){var C$=Clazz.newClass(P$, "Oscillator2$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseMotionAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['mouseDragged$java_awt_event_MouseEvent','mouseDragged'], function (evt) {
p$2.leftPanelMouseDragged$java_awt_event_MouseEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator2'], [evt]);
});
})()
), Clazz.new_($I$(16), [this, null],P$.Oscillator2$3)));
this.jPanel1.add$java_awt_Component(this.leftPanel);
this.rightPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this.rightPanel, 0]));
this.rightPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(14)));
this.jPanel1.add$java_awt_Component(this.rightPanel);
this.getContentPane$().add$java_awt_Component(this.jPanel1);
this.middlePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13).c$$java_awt_Container$I,[this.middlePanel, 1]));
this.middlePanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(14)));
this.middlePanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(17).c$$I$I,[3000, 100]));
this.middlePanel.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(17).c$$I$I,[300, 100]));
this.middlePanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17).c$$I$I,[300, 100]));
this.getContentPane$().add$java_awt_Component(this.middlePanel);
this.jPanel2.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, 255, 255]));
this.jPanel2.setBorder$javax_swing_border_Border(Clazz.new_($I$(14)));
this.jPanel2.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(17).c$$I$I,[10000000, 34]));
this.showVectorsBox.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, 255, 255]));
this.showVectorsBox.setSelected$Z(true);
this.showVectorsBox.setText$S("Show Vectors");
this.showVectorsBox.addActionListener$java_awt_event_ActionListener(((P$.Oscillator2$4||
(function(){var C$=Clazz.newClass(P$, "Oscillator2$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed','actionPerformed$'], function (evt) {
p$2.showVectorsBoxActionPerformed$java_awt_event_ActionEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator2'], [evt]);
});
})()
), Clazz.new_(P$.Oscillator2$4.$init$, [this, null])));
this.jPanel2.add$java_awt_Component(this.showVectorsBox);
this.jLabel1.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, 255, 255]));
this.jLabel1.setText$S("    Set k:");
this.jPanel2.add$java_awt_Component(this.jLabel1);
this.jSlider1.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, 255, 255]));
this.jSlider1.setMajorTickSpacing$I(20);
this.jSlider1.setMaximum$I(200);
this.jSlider1.setMinorTickSpacing$I(5);
this.jSlider1.addChangeListener$javax_swing_event_ChangeListener(((P$.Oscillator2$5||
(function(){var C$=Clazz.newClass(P$, "Oscillator2$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged','stateChanged$'], function (evt) {
p$2.jSlider1StateChanged$javax_swing_event_ChangeEvent.apply(this.b$['edu.haverford.physicsapplets.Oscillator2'], [evt]);
});
})()
), Clazz.new_(P$.Oscillator2$5.$init$, [this, null])));
this.jPanel2.add$java_awt_Component(this.jSlider1);
this.kText.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, 255, 255]));
this.kText.setText$S("  k:");
this.jPanel2.add$java_awt_Component(this.kText);
this.getContentPane$().add$java_awt_Component(this.jPanel2);
}, p$2);

Clazz.newMeth(C$, 'showVectorsBoxActionPerformed$java_awt_event_ActionEvent', function (evt) {
this.showVectors=!this.showVectors;
this.repaint$();
}, p$2);

Clazz.newMeth(C$, 'jPanel1AncestorResized$java_awt_event_HierarchyEvent', function (evt) {
this.disp.firsttime=true;
this.graph.firsttime=true;
this.beats.firsttime=true;
this.repaint$();
}, p$2);

Clazz.newMeth(C$, 'leftPanelMouseDragged$java_awt_event_MouseEvent', function (evt) {
this.graph.mouseDragged$java_awt_event_MouseEvent(evt);
}, p$2);

Clazz.newMeth(C$, 'jSlider1StateChanged$javax_swing_event_ChangeEvent', function (evt) {
this.kText.setText$S("  k: " + String.valueOf$D(Math.round(this.jSlider1.getValue$() * 10000.0 / 50.0) / 10000.0));
this.k=(this.jSlider1.getValue$() / 50.0) + 1.0E-5;
this.updateMath$();
this.disp.time=0;
this.beats.time=0;
}, p$2);

Clazz.newMeth(C$, 'leftPanelMouseClicked$java_awt_event_MouseEvent', function (evt) {
this.graph.mouseClicked$java_awt_event_MouseEvent(evt);
}, p$2);
;
(function(){var C$=Clazz.newClass(P$.Oscillator2, "GraphPanel", function(){
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
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.firsttime=true;
this.xAxis=12;
this.yAxis=12;
this.thePoint=Clazz.new_($I$(1).c$$D$D, [this, null, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.firsttime) {
this.bi=this.createImage$I$I(this.getSize$().width, this.getSize$().height);
this.biG=this.bi.createGraphics$();
this.firsttime=false;
}this.biG.setColor$java_awt_Color($I$(2).white);
this.biG.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
p$1.drawGrid$java_awt_Graphics2D$I$I.apply(this, [this.biG, this.xAxis, this.yAxis]);
p$1.drawAxis$java_awt_Graphics2D.apply(this, [this.biG]);
p$1.labelAxis$java_awt_Graphics2D$S$S.apply(this, [this.biG, "A_breathing", "A_swinging"]);
if (this.this$0.showVectors) {
p$1.drawVectors$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator2_vector2d$I$I.apply(this, [this.biG, this.thePoint, this.xAxis, this.yAxis]);
} else {
p$1.drawGraphPoint$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator2_vector2d$I$I.apply(this, [this.biG, this.thePoint, this.xAxis, this.yAxis]);
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bi, 0, 0, this);
});

Clazz.newMeth(C$, 'drawVectors$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator2_vector2d$I$I', function (g, p, xlines, ylines) {
g.setStroke$java_awt_Stroke(Clazz.new_($I$(3).c$$F,[2.0]));
g.setColor$java_awt_Color($I$(2).blue);
var sl=p$1.screenLocation$edu_haverford_physicsapplets_Oscillator2_vector2d.apply(this, [Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width / (xlines)) * p.x, (this.getSize$().height / (ylines)) * p.y])]);
p$1.drawArrow$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator2_vector2d$edu_haverford_physicsapplets_Oscillator2_vector2d.apply(this, [g, Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width/2|0), (this.getSize$().height/2|0)]), sl]);
p$1.drawArrow$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator2_vector2d$edu_haverford_physicsapplets_Oscillator2_vector2d.apply(this, [g, Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width/2|0), (this.getSize$().height/2|0)]), Clazz.new_($I$(1).c$$D$D, [this, null, sl.x, (this.getSize$().height/2|0)])]);
p$1.drawArrow$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator2_vector2d$edu_haverford_physicsapplets_Oscillator2_vector2d.apply(this, [g, Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width/2|0), (this.getSize$().height/2|0)]), Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width/2|0), sl.y])]);
}, p$1);

Clazz.newMeth(C$, 'drawArrow$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator2_vector2d$edu_haverford_physicsapplets_Oscillator2_vector2d', function (g, start, end) {
var t=end.minus$edu_haverford_physicsapplets_Oscillator2_vector2d(start);
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

Clazz.newMeth(C$, 'drawGraphPoint$java_awt_Graphics2D$edu_haverford_physicsapplets_Oscillator2_vector2d$I$I', function (g, v, xlines, ylines) {
var sl=p$1.screenLocation$edu_haverford_physicsapplets_Oscillator2_vector2d.apply(this, [Clazz.new_($I$(1).c$$D$D, [this, null, (this.getSize$().width / (xlines)) * v.x, (this.getSize$().height / (ylines)) * v.y])]);
this.biG.setColor$java_awt_Color($I$(2).blue);
g.fillOval$I$I$I$I(((sl.x - 4)|0), ((sl.y - 4)|0), 8, 8);
}, p$1);

Clazz.newMeth(C$, 'labelAxis$java_awt_Graphics2D$S$S', function (g, x, y) {
g.drawString$S$I$I(y, (this.getSize$().width/2|0) + 5, g.getFontMetrics$().getHeight$());
g.drawString$S$I$I(x, this.getSize$().width - g.getFontMetrics$().stringWidth$S(x), (this.getSize$().height/2|0) + g.getFontMetrics$().getHeight$());
}, p$1);

Clazz.newMeth(C$, 'drawAxis$java_awt_Graphics2D', function (g) {
g.setStroke$java_awt_Stroke(Clazz.new_($I$(3).c$$F,[2.0]));
g.setColor$java_awt_Color($I$(2).black);
g.drawLine$I$I$I$I((this.getSize$().width/2|0), 0, (this.getSize$().width/2|0), this.getSize$().height);
g.drawLine$I$I$I$I(0, (this.getSize$().height/2|0), this.getSize$().width, (this.getSize$().height/2|0));
}, p$1);

Clazz.newMeth(C$, 'drawGrid$java_awt_Graphics2D$I$I', function (g, xlines, ylines) {
g.setStroke$java_awt_Stroke(Clazz.new_($I$(3).c$$F,[1.0]));
g.setColor$java_awt_Color($I$(2).yellow);
for (var i=0; i <= xlines; i++) {
g.drawLine$I$I$I$I(((i * (this.getSize$().width / (xlines)))|0), 0, ((i * (this.getSize$().width / (xlines)))|0), this.getSize$().height);
}
for (var i=0; i <= ylines; i++) {
g.drawLine$I$I$I$I(0, ((i * (this.getSize$().height / (ylines)))|0), this.getSize$().width, ((i * (this.getSize$().height / (ylines)))|0));
}
}, p$1);

Clazz.newMeth(C$, 'worldLocation$edu_haverford_physicsapplets_Oscillator2_vector2d', function (screenLocation) {
return Clazz.new_($I$(1).c$$D$D, [this, null, screenLocation.x - (this.getSize$().width/2|0), -1 * (screenLocation.y - (this.getSize$().height/2|0))]);
}, p$1);

Clazz.newMeth(C$, 'screenLocation$edu_haverford_physicsapplets_Oscillator2_vector2d', function (world) {
return Clazz.new_($I$(1).c$$D$D, [this, null, world.x + (this.getSize$().width/2|0), -1 * world.y + (this.getSize$().height/2|0)]);
}, p$1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
var l=p$1.worldLocation$edu_haverford_physicsapplets_Oscillator2_vector2d.apply(this, [Clazz.new_($I$(1).c$$D$D, [this, null, evt.getX$(), evt.getY$()])]);
var xLoc=(l.x / (this.getSize$().width / this.xAxis));
var yLoc=(l.y / (this.getSize$().height / this.yAxis));
this.thePoint=Clazz.new_($I$(1).c$$D$D, [this, null, xLoc, yLoc]);
this.repaint$();
this.this$0.disp.time=0;
this.this$0.beats.time=0;
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
var l=p$1.worldLocation$edu_haverford_physicsapplets_Oscillator2_vector2d.apply(this, [Clazz.new_($I$(1).c$$D$D, [this, null, evt.getX$(), evt.getY$()])]);
var xLoc=(l.x / (this.getSize$().width / this.xAxis));
var yLoc=(l.y / (this.getSize$().height / this.yAxis));
this.thePoint=Clazz.new_($I$(1).c$$D$D, [this, null, xLoc, yLoc]);
this.repaint$();
this.this$0.disp.time=0;
this.this$0.beats.time=0;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Oscillator2, "vector2d", function(){
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

Clazz.newMeth(C$, 'minus$edu_haverford_physicsapplets_Oscillator2_vector2d', function ($in) {
return Clazz.new_(C$.c$$D$D, [this, null, this.x - $in.x, this.y - $in.y]);
});

Clazz.newMeth(C$, 'plus$edu_haverford_physicsapplets_Oscillator2_vector2d', function ($in) {
return Clazz.new_(C$.c$$D$D, [this, null, this.x + $in.x, this.y + $in.y]);
});

Clazz.newMeth(C$, 'normalize$', function () {
var d=Math.sqrt(this.x * this.x + this.y * this.y);
if (d == 0 ) {
return Clazz.new_(C$.c$$D$D, [this, null, 0, 0]);
} else {
return Clazz.new_(C$.c$$D$D, [this, null, this.x / d, this.y / d]);
}});
})()
;
(function(){var C$=Clazz.newClass(P$.Oscillator2, "AniPanel", function(){
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
}this.biG.setColor$java_awt_Color($I$(2).white);
this.biG.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
this.biG.setColor$java_awt_Color($I$(2).red);
this.biG.drawLine$I$I$I$I(((this.getSize$().width/2|0) + 30), 60, (((this.getSize$().width/2|0) + this.body2.x)|0), ((60 + this.body2.y)|0));
this.biG.drawLine$I$I$I$I(((this.getSize$().width/2|0) - 30), 60, (((this.getSize$().width/2|0) + this.body1.x)|0), ((60 + this.body1.y)|0));
this.biG.fillRect$I$I$I$I(((this.getSize$().width/2|0) - 40), 55, 80, 5);
this.biG.setColor$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[255, ((255 - 50 * this.this$0.k)|0), 0]));
this.biG.drawLine$I$I$I$I((((this.getSize$().width/2|0) + this.body1.x)|0), ((60 + this.body1.y)|0), (((this.getSize$().width/2|0) + this.body2.x)|0), ((60 + this.body2.y)|0));
this.biG.setColor$java_awt_Color($I$(2).black);
this.biG.fillOval$I$I$I$I((((this.getSize$().width/2|0) + this.body1.x - 4)|0), ((60 + this.body1.y - 4)|0), 8, 8);
this.biG.setColor$java_awt_Color($I$(2).red);
this.biG.fillOval$I$I$I$I((((this.getSize$().width/2|0) + this.body2.x - 4)|0), ((60 + this.body2.y - 4)|0), 8, 8);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bi, 0, 0, this);
});

Clazz.newMeth(C$, 'run$', function () {
this.timer=Clazz.new_($I$(4).c$$I$java_awt_event_ActionListener,[1 ||10, ((P$.Oscillator2$AniPanel$1||
(function(){var C$=Clazz.newClass(P$, "Oscillator2$AniPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (!this.b$['edu.haverford.physicsapplets.Oscillator2.AniPanel'].running) {
this.b$['edu.haverford.physicsapplets.Oscillator2.AniPanel'].timer.stop$();
return;
}this.b$['edu.haverford.physicsapplets.Oscillator2.AniPanel'].doStep$.apply(this.b$['edu.haverford.physicsapplets.Oscillator2.AniPanel'], []);
});
})()
), Clazz.new_(P$.Oscillator2$AniPanel$1.$init$, [this, null]))]);
this.timer.setDelay$I(1);
this.timer.setRepeats$Z(true);
this.timer.start$();
});

Clazz.newMeth(C$, 'doStep$', function () {
this.body1.x=-30 + -1 * this.this$0.graph.thePoint.x * 2 * Math.cos(this.this$0.Wb * this.time)  + this.this$0.graph.thePoint.y * 2 * Math.cos(this.this$0.Ws * this.time) ;
this.body2.x=30 + this.this$0.graph.thePoint.x * 2 * Math.cos(this.this$0.Wb * this.time)  + this.this$0.graph.thePoint.y * 2 * Math.cos(this.this$0.Ws * this.time) ;
this.body1.y=Math.sqrt(this.this$0.Plength * this.this$0.Plength - Math.pow(this.body1.x + 30, 2)) + this.this$0.Plength;
this.body2.y=Math.sqrt(this.this$0.Plength * this.this$0.Plength - Math.pow(this.body2.x - 30, 2)) + this.this$0.Plength;
this.time += 0.6 ||0.1;
this.this$0.beats.time += 0.6 ||0.1;
this.this$0.beats.repaint$();
this.repaint$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Oscillator2, "AniPanel2", function(){
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
}this.biG.setColor$java_awt_Color($I$(2).white);
this.biG.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
this.biG.setColor$java_awt_Color($I$(2).black);
var spacing=(0.75 * this.getSize$().width) / (this.steps);
var yspacing=(this.getSize$().height/4|0);
var Tint=31.416 / this.this$0.Ws;
this.last=Clazz.new_($I$(1).c$$D$D, [this, null, spacing, yspacing - this.this$0.graph.thePoint.x * 2 * Math.cos(this.this$0.Wb * ((Tint / this.steps) + this.time - Tint)) ]);
for (var i=1; i < this.steps + 1; i++) {
this.biG.drawLine$I$I$I$I(((i * spacing)|0), ((yspacing - this.this$0.graph.thePoint.x * 2 * Math.cos(this.this$0.Wb * ((i * Tint / this.steps) + this.time - Tint)) )|0), (this.last.x|0), (this.last.y|0));
this.last.x=i * spacing;
this.last.y=yspacing - this.this$0.graph.thePoint.x * 2 * Math.cos(this.this$0.Wb * ((i * Tint / this.steps) + this.time - Tint)) ;
}
this.biG.drawString$S$I$I("Breathing", ((0.75 * this.getSize$().width + 7)|0), (yspacing + 5));
this.biG.setColor$java_awt_Color($I$(2).blue);
this.last=Clazz.new_($I$(1).c$$D$D, [this, null, spacing, 2 * yspacing - this.this$0.graph.thePoint.y * 2 * Math.cos(this.this$0.Ws * ((Tint / this.steps) + this.time - Tint)) ]);
for (var i=1; i < this.steps + 1; i++) {
this.biG.drawLine$I$I$I$I(((i * spacing)|0), ((2 * yspacing - this.this$0.graph.thePoint.y * 2 * Math.cos(this.this$0.Ws * ((i * Tint / this.steps) + this.time - Tint)) )|0), (this.last.x|0), (this.last.y|0));
this.last.x=i * spacing;
this.last.y=2 * yspacing - this.this$0.graph.thePoint.y * 2 * Math.cos(this.this$0.Ws * ((i * Tint / this.steps) + this.time - Tint)) ;
}
this.biG.drawString$S$I$I("Swinging", ((0.75 * this.getSize$().width + 7)|0), (2 * yspacing + 5));
this.biG.setColor$java_awt_Color($I$(2).black);
this.biG.drawLine$I$I$I$I(((0.75 * this.getSize$().width)|0), 0, ((0.75 * this.getSize$().width)|0), this.getSize$().height);
this.biG.setColor$java_awt_Color($I$(2).red);
this.last=Clazz.new_($I$(1).c$$D$D, [this, null, spacing, 3 * yspacing - this.this$0.graph.thePoint.y * 2 * Math.cos(this.this$0.Ws * ((Tint / this.steps) + this.time - Tint))  - this.this$0.graph.thePoint.x * 2 * Math.cos(this.this$0.Wb * ((Tint / this.steps) + this.time - Tint)) ]);
for (var i=1; i < this.steps + 1; i++) {
this.biG.drawLine$I$I$I$I(((i * spacing)|0), ((3 * yspacing - this.this$0.graph.thePoint.y * 2 * Math.cos(this.this$0.Ws * ((i * Tint / this.steps) + this.time - Tint))  - this.this$0.graph.thePoint.x * 2 * Math.cos(this.this$0.Wb * ((i * Tint / this.steps) + this.time - Tint)) )|0), (this.last.x|0), (this.last.y|0));
this.last.x=i * spacing;
this.last.y=3 * yspacing - this.this$0.graph.thePoint.y * 2 * Math.cos(this.this$0.Ws * ((i * Tint / this.steps) + this.time - Tint))  - this.this$0.graph.thePoint.x * 2 * Math.cos(this.this$0.Wb * ((i * Tint / this.steps) + this.time - Tint)) ;
}
this.biG.fillOval$I$I$I$I(((this.last.x)|0) - 4, ((this.last.y)|0) - 4, 8, 8);
this.biG.drawString$S$I$I("Right Mass Position", ((0.75 * this.getSize$().width + 7)|0), (3 * yspacing + 5));
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bi, 0, 0, this);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-05 09:37:04 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
