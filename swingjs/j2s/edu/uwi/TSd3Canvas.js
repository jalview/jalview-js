(function(){var P$=Clazz.newPackage("edu.uwi"),p$1={},p$2={},I$=[[0,'java.awt.BorderLayout','edu.uwi.TSd3Canvas','edu.uwi.TSd3Controls','javax.swing.JFrame','StringBuffer','java.awt.Font','java.awt.Color','java.awt.Rectangle','java.awt.BasicStroke','java.awt.Point','edu.uwi.TanSugd3S','java.awt.FlowLayout','javax.swing.ButtonGroup','javax.swing.JRadioButton']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TSd3Canvas", null, 'javax.swing.JPanel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$y=0;
this.bottomLeft=null;
this.btmLeft=null;
this.start_x=0;
this.end_x=0;
this.lrange=0;
this.$x=0;
this.hlines=0;
this.vlines=0;
this.gx=0;
this.deltaB=0;
this.xScale=0;
this.yScale=0;
this.mouseOn=false;
this.x1=0;
this.y1=0;
this.y2=0;
this.y3=0;
this.ratio21=0;
this.ratio31=0;
this.ratio32=0;
this.fE=0;
this.fT2=0;
this.fT1=0;
this.fA1=0;
this.fT2b=0;
this.fT2H=0;
this.fT1H=0;
this.fEH=0;
this.fb=null;
this.f=null;
this.dkgreen=null;
this.gold=null;
this.ltgrey=null;
this.teal=null;
this.purple=null;
this.lgreen=null;
this.dgreen=null;
this.copper=null;
this.graphRec=null;
this.outPRec=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.fb=Clazz.new_($I$(6).c$$S$I$I,["Arial", 1, 18]);
this.f=Clazz.new_($I$(6).c$$S$I$I,["Courier", 0, 16]);
this.dkgreen=Clazz.new_($I$(7).c$$I$I$I,[142, 244, 108]);
this.gold=Clazz.new_($I$(7).c$$I$I$I,[191, 139, 32]);
this.ltgrey=Clazz.new_($I$(7).c$$I$I$I,[233, 233, 233]);
this.teal=Clazz.new_($I$(7).c$$I$I$I,[168, 207, 251]);
this.purple=Clazz.new_($I$(7).c$$I$I$I,[192, 12, 255]);
this.lgreen=Clazz.new_($I$(7).c$$I$I$I,[82, 179, 53]);
this.dgreen=Clazz.new_($I$(7).c$$I$I$I,[41, 94, 28]);
this.copper=Clazz.new_($I$(7).c$$I$I$I,[179, 100, 13]);
this.graphRec=Clazz.new_($I$(8).c$$I$I$I$I,[50, 10, 600, 460]);
this.outPRec=Clazz.new_($I$(8).c$$I$I$I$I,[650, 10, 685, 360]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setName$S("TSd3Canvas");
this.setBackground$java_awt_Color($I$(7).blue);
this.start_x=0;
this.end_x=50;
this.hlines=10;
this.vlines=10;
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.mouseOn=false;
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
p$1.drawDiagram$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'redraw$I', function (range) {
this.lrange=range;
switch (range) {
case 0:
this.start_x=0;
this.end_x=50;
break;
case 1:
this.start_x=0;
this.end_x=10;
break;
case 2:
this.start_x=10;
this.end_x=20;
break;
case 3:
this.start_x=20;
this.end_x=30;
break;
case 4:
this.start_x=30;
this.end_x=40;
break;
case 5:
this.start_x=40;
this.end_x=50;
break;
}
this.repaint$();
});

Clazz.newMeth(C$, 'drawDiagram$java_awt_Graphics', function (g) {
p$1.displayGraph$java_awt_Graphics.apply(this, [g]);
}, p$1);

Clazz.newMeth(C$, 'displayGraph$java_awt_Graphics', function (g) {
var g2=g;
g2.setColor$java_awt_Color(this.ltgrey);
g2.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
g2.setBackground$java_awt_Color(g2.getBackground$());
var stroke2=Clazz.new_($I$(9).c$$F,[2]);
var stroke1=Clazz.new_($I$(9).c$$F,[1]);
var stroke_d1=Clazz.new_($I$(9).c$$F$I$I$F$FA$F,[1, 0, 2, 0, Clazz.array(Float.TYPE, -1, [6, 6]), 0]);
var yDivisor;
g2.setColor$java_awt_Color($I$(7).white);
g2.fillRect$I$I$I$I(this.graphRec.x, this.graphRec.y, this.graphRec.width, this.graphRec.height);
g2.setColor$java_awt_Color($I$(7).black);
this.bottomLeft=Clazz.new_($I$(10).c$$I$I,[this.graphRec.x, this.graphRec.y + this.graphRec.height]);
this.btmLeft=Clazz.new_($I$(10).c$$I$I,[this.outPRec.x, this.outPRec.y + this.outPRec.height]);
g2.drawLine$I$I$I$I(this.bottomLeft.x, this.bottomLeft.y, this.bottomLeft.x + this.graphRec.width, this.bottomLeft.y);
g2.drawLine$I$I$I$I(this.bottomLeft.x, this.bottomLeft.y, this.bottomLeft.x, this.graphRec.y);
this.xScale=(this.graphRec.width / (this.end_x - this.start_x));
if (this.end_x < 35) {
yDivisor=$I$(11).CalcD2T2g$D(this.end_x);
} else yDivisor=$I$(11).CalcP4T1g$D(this.end_x);
this.yScale=this.graphRec.height / yDivisor;
var start_x1=Clazz.array(Integer.TYPE, -1, [(this.bottomLeft.x)]);
var start_x2=Clazz.array(Integer.TYPE, -1, [(this.bottomLeft.x)]);
var start_x3=Clazz.array(Integer.TYPE, -1, [(this.bottomLeft.x)]);
var start_x4=Clazz.array(Integer.TYPE, -1, [(this.bottomLeft.x)]);
var start_x5=Clazz.array(Integer.TYPE, -1, [(this.bottomLeft.x)]);
var start_x6=Clazz.array(Integer.TYPE, -1, [(this.bottomLeft.x)]);
var start_x7=Clazz.array(Integer.TYPE, -1, [(this.bottomLeft.x)]);
var start_x8=Clazz.array(Integer.TYPE, -1, [(this.bottomLeft.x)]);
var start_x9=Clazz.array(Integer.TYPE, -1, [(this.bottomLeft.x)]);
var start_x10=Clazz.array(Integer.TYPE, -1, [(this.bottomLeft.x)]);
var start_x11=Clazz.array(Integer.TYPE, -1, [(this.bottomLeft.x)]);
var start_y1=Clazz.array(Integer.TYPE, -1, [((this.bottomLeft.y - (this.start_x * this.yScale))|0)]);
this.$y=$I$(11).CalcF4T1g$D(this.start_x);
var start_y2=Clazz.array(Integer.TYPE, -1, [((this.bottomLeft.y - (this.yScale * this.$y))|0)]);
this.$y=$I$(11).CalcP4T1g$D(this.start_x);
var start_y3=Clazz.array(Integer.TYPE, -1, [((this.bottomLeft.y - (this.yScale * this.$y))|0)]);
this.$y=$I$(11).CalcG2Eg$D(this.start_x);
var start_y4=Clazz.array(Integer.TYPE, -1, [((this.bottomLeft.y - (this.yScale * this.$y))|0)]);
this.$y=$I$(11).CalcG2T1g$D(this.start_x);
var start_y5=Clazz.array(Integer.TYPE, -1, [((this.bottomLeft.y - (this.yScale * this.$y))|0)]);
this.$y=$I$(11).CalcG2T2g$D(this.start_x);
var start_y6=Clazz.array(Integer.TYPE, -1, [((this.bottomLeft.y - (this.yScale * this.$y))|0)]);
this.$y=$I$(11).CalcG2A1g$D(this.start_x);
var start_y7=Clazz.array(Integer.TYPE, -1, [((this.bottomLeft.y - (this.yScale * this.$y))|0)]);
this.$y=$I$(11).CalcD2T2g$D(this.start_x);
var start_y8=Clazz.array(Integer.TYPE, -1, [((this.bottomLeft.y - (this.yScale * this.$y))|0)]);
this.$y=$I$(11).CalcH2T2g$D(this.start_x);
var start_y9=Clazz.array(Integer.TYPE, -1, [((this.bottomLeft.y - (this.yScale * this.$y))|0)]);
this.$y=$I$(11).CalcH2T1g$D(this.start_x);
var start_y10=Clazz.array(Integer.TYPE, -1, [((this.bottomLeft.y - (this.yScale * this.$y))|0)]);
this.$y=$I$(11).CalcH2Eg$D(this.start_x);
var start_y11=Clazz.array(Integer.TYPE, -1, [((this.bottomLeft.y - (this.yScale * this.$y))|0)]);
var hSlines=(this.graphRec.height/this.hlines|0);
var vSlines=(this.graphRec.width/this.vlines|0);
g2.setColor$java_awt_Color(this.ltgrey);
g2.setStroke$java_awt_Stroke(stroke1);
for (var ii=1; ii <= this.hlines; ii++) {
g2.drawLine$I$I$I$I(this.bottomLeft.x, this.bottomLeft.y - (ii * hSlines), this.bottomLeft.x + this.graphRec.width, this.bottomLeft.y - (ii * hSlines));
}
for (var ii=1; ii <= this.vlines; ii++) {
g2.drawLine$I$I$I$I(this.bottomLeft.x + (ii * vSlines), this.bottomLeft.y, this.bottomLeft.x + (ii * vSlines), this.bottomLeft.y - this.graphRec.height);
}
for (this.$x=this.start_x; this.$x <= this.end_x; this.$x++) {
g2.setStroke$java_awt_Stroke(stroke2);
g2.setColor$java_awt_Color($I$(7).red);
this.$y=this.$x;
p$1.drawXtoY$D$D$IA$IA$java_awt_Graphics.apply(this, [this.$x, this.$y, start_x1, start_y1, g]);
g2.setColor$java_awt_Color($I$(7).blue);
this.$y=$I$(11).CalcF4T1g$D(this.$x);
p$1.drawXtoY$D$D$IA$IA$java_awt_Graphics.apply(this, [this.$x, this.$y, start_x2, start_y2, g]);
g2.setColor$java_awt_Color(this.dkgreen);
this.$y=$I$(11).CalcP4T1g$D(this.$x);
p$1.drawXtoY$D$D$IA$IA$java_awt_Graphics.apply(this, [this.$x, this.$y, start_x3, start_y3, g]);
g2.setStroke$java_awt_Stroke(stroke_d1);
g2.setColor$java_awt_Color(this.teal);
this.$y=$I$(11).CalcG2Eg$D(this.$x);
p$1.drawXtoY$D$D$IA$IA$java_awt_Graphics.apply(this, [this.$x, this.$y, start_x4, start_y4, g]);
g2.setColor$java_awt_Color($I$(7).orange);
this.$y=$I$(11).CalcG2T1g$D(this.$x);
p$1.drawXtoY$D$D$IA$IA$java_awt_Graphics.apply(this, [this.$x, this.$y, start_x5, start_y5, g]);
g2.setColor$java_awt_Color(this.gold);
this.$y=$I$(11).CalcG2T2g$D(this.$x);
p$1.drawXtoY$D$D$IA$IA$java_awt_Graphics.apply(this, [this.$x, this.$y, start_x6, start_y6, g]);
g2.setColor$java_awt_Color($I$(7).gray);
this.$y=$I$(11).CalcG2A1g$D(this.$x);
p$1.drawXtoY$D$D$IA$IA$java_awt_Graphics.apply(this, [this.$x, this.$y, start_x7, start_y7, g]);
g2.setColor$java_awt_Color(this.purple);
this.$y=$I$(11).CalcD2T2g$D(this.$x);
p$1.drawXtoY$D$D$IA$IA$java_awt_Graphics.apply(this, [this.$x, this.$y, start_x8, start_y8, g]);
g2.setColor$java_awt_Color(this.lgreen);
this.$y=$I$(11).CalcH2T2g$D(this.$x);
p$1.drawXtoY$D$D$IA$IA$java_awt_Graphics.apply(this, [this.$x, this.$y, start_x9, start_y9, g]);
g2.setColor$java_awt_Color(this.copper);
this.$y=$I$(11).CalcH2Eg$D(this.$x);
p$1.drawXtoY$D$D$IA$IA$java_awt_Graphics.apply(this, [this.$x, this.$y, start_x11, start_y11, g]);
g2.setColor$java_awt_Color(this.dgreen);
this.$y=$I$(11).CalcH2T1g$D(this.$x);
p$1.drawXtoY$D$D$IA$IA$java_awt_Graphics.apply(this, [this.$x, this.$y, start_x10, start_y10, g]);
}
g2.setStroke$java_awt_Stroke(stroke1);
g2.setColor$java_awt_Color($I$(7).black);
g2.setFont$java_awt_Font(this.fb);
var sx=this.bottomLeft.x;
var sy=this.bottomLeft.y;
g2.drawString$S$I$I("" + this.start_x, sx, sy + 15);
g2.drawString$S$I$I("delta/B", sx + 170, sy + 15);
g2.drawString$S$I$I("C/B=4.5", sx + 345, sy + 30);
g2.drawString$S$I$I("" + this.end_x, this.graphRec.width + 35, sy + 15);
g2.drawString$S$I$I("E/B", sx - 35, this.graphRec.y + 100);
if (this.lrange == 0) {
g2.drawString$S$I$I("4F", sx - 25, this.graphRec.y + 465);
g2.drawString$S$I$I("4P", sx - 25, this.graphRec.y + 400);
g2.drawString$S$I$I("2G", sx - 25, this.graphRec.y + 385);
g2.drawString$S$I$I("2H", sx - 25, this.graphRec.y + 370);
g2.drawString$S$I$I("2D", sx - 25, this.graphRec.y + 355);
}if (this.mouseOn) {
g2.setColor$java_awt_Color($I$(7).black);
this.gx=((((this.deltaB - this.start_x) * this.xScale) + this.bottomLeft.x)|0);
g2.drawLine$I$I$I$I(this.gx, this.bottomLeft.y, this.gx, this.graphRec.y);
g2.setFont$java_awt_Font(this.f);
g2.drawString$S$I$I("delta/B'   " + this.toThreePlaces$D(this.deltaB), this.outPRec.x, this.outPRec.y + 15);
g2.setColor$java_awt_Color($I$(7).red);
g2.drawString$S$I$I("v1(T2g)/B' " + this.toThreePlaces$D(this.y1), this.outPRec.x, this.outPRec.y + 28);
g2.setColor$java_awt_Color($I$(7).blue);
g2.drawString$S$I$I("v2(T1g)/B' " + this.toThreePlaces$D(this.y2), this.outPRec.x, this.outPRec.y + 43);
g2.setColor$java_awt_Color(this.dkgreen);
g2.drawString$S$I$I("v3(T1g)/B' " + this.toThreePlaces$D(this.y3), this.outPRec.x, this.outPRec.y + 56);
g2.setColor$java_awt_Color($I$(7).black);
g2.drawString$S$I$I("ratio v2/v1 " + this.toThreePlaces$D(this.ratio21), this.outPRec.x, this.outPRec.y + 70);
g2.setColor$java_awt_Color(this.teal);
g2.drawString$S$I$I("f1 (Eg)/B' " + this.toThreePlaces$D(this.fE), this.outPRec.x, this.outPRec.y + 83);
g2.setColor$java_awt_Color($I$(7).orange);
g2.drawString$S$I$I("f2(T1g)/B' " + this.toThreePlaces$D(this.fT1), this.outPRec.x, this.outPRec.y + 98);
g2.setColor$java_awt_Color(this.gold);
g2.drawString$S$I$I("f3(T2g)/B' " + this.toThreePlaces$D(this.fT2), this.outPRec.x, this.outPRec.y + 113);
g2.setColor$java_awt_Color($I$(7).gray);
g2.drawString$S$I$I("f4(A1g)/B' " + this.toThreePlaces$D(this.fA1), this.outPRec.x, this.outPRec.y + 128);
g2.setColor$java_awt_Color(this.lgreen);
g2.drawString$S$I$I("f5(T2g)/B' " + this.toThreePlaces$D(this.fT2H), this.outPRec.x, this.outPRec.y + 143);
g2.setColor$java_awt_Color(this.copper);
g2.drawString$S$I$I("f6(Eg)/B'  " + this.toThreePlaces$D(this.fEH), this.outPRec.x, this.outPRec.y + 159);
g2.setColor$java_awt_Color(this.dgreen);
g2.drawString$S$I$I("f7(T1g)/B' " + this.toThreePlaces$D(this.fT1H), this.outPRec.x, this.outPRec.y + 173);
g2.setColor$java_awt_Color(this.purple);
g2.drawString$S$I$I("f8(T2g)/B' " + this.toThreePlaces$D(this.fT2b), this.outPRec.x, this.outPRec.y + 189);
this.mouseOn=false;
}}, p$1);

Clazz.newMeth(C$, 'toThreePlaces$D', function ($in) {
var temp=Math.round($in * 1000);
var tmp= String.instantialize("" + temp);
return (tmp.substring$I$I(0, tmp.length$() - 3) + "." + tmp.substring$I$I(tmp.length$() - 3, tmp.length$()) );
});

Clazz.newMeth(C$, 'drawXtoY$D$D$IA$IA$java_awt_Graphics', function (x, y, screen_x, screen_y, g) {
var end_x1;
var end_y1;
end_x1=((((x - this.start_x) * this.xScale) + this.bottomLeft.x)|0);
end_y1=((this.bottomLeft.y - (y * this.yScale))|0);
g.drawLine$I$I$I$I(screen_x[0], screen_y[0], end_x1, end_y1);
screen_x[0]=end_x1;
screen_y[0]=end_y1;
}, p$1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
this.mouseOn=true;
e.consume$();
this.gx=e.getX$();
this.deltaB=((this.gx - this.bottomLeft.x) / this.xScale) + this.start_x;
if ((this.deltaB >= this.start_x ) && (this.deltaB <= this.end_x ) ) {
this.x1=this.deltaB;
this.y1=this.x1;
this.y2=$I$(11).CalcF4T1g$D(this.x1);
this.y3=$I$(11).CalcP4T1g$D(this.x1);
this.fE=$I$(11).CalcG2Eg$D(this.x1);
this.fT1=$I$(11).CalcG2T1g$D(this.x1);
this.fT2=$I$(11).CalcG2T2g$D(this.x1);
this.fA1=$I$(11).CalcG2A1g$D(this.x1);
this.fT2b=$I$(11).CalcD2T2g$D(this.x1);
this.fT2H=$I$(11).CalcH2T2g$D(this.x1);
this.fEH=$I$(11).CalcH2Eg$D(this.x1);
this.fT1H=$I$(11).CalcH2T1g$D(this.x1);
this.ratio21=this.y2 / this.y1;
this.ratio31=this.y3 / this.y1;
this.ratio32=this.y3 / this.y2;
this.repaint$();
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
this.mousePressed$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-05 09:36:50 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
