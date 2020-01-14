(function(){var P$=Clazz.newPackage("edu.uwi"),I$=[[0,'java.awt.Color','java.awt.Point']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EntropyCanvas", null, 'javax.swing.JPanel');
C$.eMax=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.eMax=65000;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.Entropy=null;
this.EntropyCalc=0;
this.entCounter=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color($I$(1).blue);
var dim=this.getSize$();
var xScale=(dim.width/this.EntropyCalc|0);
var yScale=(dim.height - 20) / (C$.eMax + 10);
var start=Clazz.new_($I$(2));
start.x=0;
start.y=dim.height;
for (var i=0; i < this.entCounter; i++) {
var x=(Math.floor(i * xScale)|0);
var y=dim.height - ((Math.floor(this.Entropy[i] * yScale)|0));
g.drawLine$I$I$I$I(start.x, start.y, x, y);
start.x=x;
start.y=y;
}
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-05 09:36:51 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
