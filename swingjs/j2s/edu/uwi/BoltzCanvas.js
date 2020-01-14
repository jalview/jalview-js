(function(){var P$=Clazz.newPackage("edu.uwi"),I$=[[0,'java.awt.Color','java.awt.Rectangle','java.awt.Point']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BoltzCanvas", null, 'javax.swing.JPanel');
C$.nPaint=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.maxEnergy=0;
this.energyLevels=null;
this.xFactor=0;
this.boltzmann=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$edu_uwi_Boltzmann', function (boltzmann) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.boltzmann=boltzmann;
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color(this.getForeground$());
g.setPaintMode$();
this.displayBoltz$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'displayBoltz$java_awt_Graphics', function (g) {
var i;
C$.nPaint++;
var r=this.getBounds$();
g.setColor$java_awt_Color($I$(1).black);
g.drawString$S$I$I("A Boltzmann Simulation (" + (this.boltzmann.ShowText.levelInfo.length$() == 0 ? (this.boltzmann.maxCollisions - this.boltzmann.numOfCollisions) : this.boltzmann.maxCollisions) + ")" , r.x + 110, r.y + 10);
g.drawString$S$I$I("E", r.x + 5, r.y + 145);
g.drawString$S$I$I("No. of Particles", r.x + 110, r.y + 286);
var graphRec=Clazz.new_($I$(2).c$$I$I$I$I,[r.x + 20, r.y + 20, r.width - 40, r.height - 40]);
g.clearRect$I$I$I$I(graphRec.x - 1, graphRec.y - 1, graphRec.width + 3, graphRec.height + 2);
g.drawRect$I$I$I$I(graphRec.x - 2, graphRec.y - 2, graphRec.width + 4, graphRec.height + 3);
var bottomRight=Clazz.new_($I$(3).c$$I$I,[graphRec.x + graphRec.width, graphRec.y + graphRec.height]);
for (i=this.maxEnergy; i > 0; i--) {
if (this.energyLevels[i] >= 1) break;
this.maxEnergy--;
}
this.xFactor=0;
for (i=1; i <= (this.maxEnergy); i++) {
if (this.energyLevels[i] > this.xFactor) {
this.xFactor=this.energyLevels[i];
if (i == this.maxEnergy) this.maxEnergy=2 * this.maxEnergy;
}}
var xScale=(graphRec.width) / this.xFactor;
var yScale=(graphRec.height) / (this.maxEnergy + 1);
g.setColor$java_awt_Color($I$(1).red);
var curY=0;
for (i=0; i <= this.maxEnergy; i++) {
curY=(bottomRight.y - 1) - (((yScale * (i + 1))|0));
if (this.energyLevels[i] > 0) {
var isMax=(this.energyLevels[i] == this.xFactor);
if (isMax) g.setColor$java_awt_Color($I$(1).BLUE);
g.drawLine$I$I$I$I(graphRec.x, curY, graphRec.x + (((xScale * this.energyLevels[i])|0)), curY);
if (isMax) g.setColor$java_awt_Color($I$(1).RED);
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-05 09:36:55 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
