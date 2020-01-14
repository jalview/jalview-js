(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[[0,'org.jmol.minimize.Util']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UFFTorsionCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$IA', function (calc, t) {
var cosNPhi0=-1;
var n=0;
var V=0;
this.a=this.calcs.minAtoms[this.ia=t[0]];
this.b=this.calcs.minAtoms[this.ib=t[1]];
this.c=this.calcs.minAtoms[this.ic=t[2]];
this.d=this.calcs.minAtoms[this.id=t[3]];
var bc=this.c.getBondTo$I(this.ib);
var bondOrder=bc.order;
if (bc.isAromatic) bondOrder=1.5;
if (bc.isAmide) bondOrder=1.41;
this.calcs.parB=this.calcs.getParameter$O(this.b.sType);
this.calcs.parC=this.calcs.getParameter$O(this.c.sType);
switch (this.calcs.parB.iVal[0] * this.calcs.parC.iVal[0]) {
case 9:
n=3;
var vi=this.calcs.parB.dVal[6];
var vj=this.calcs.parC.dVal[6];
var viNew=0;
switch (this.b.atom.getElementNumber$()) {
case 8:
viNew=2.0;
break;
case 16:
case 34:
case 52:
case 84:
viNew=6.8;
}
if (viNew != 0 ) switch (this.c.atom.getElementNumber$()) {
case 8:
vi=viNew;
vj=2.0;
n=2;
break;
case 16:
case 34:
case 52:
case 84:
vi=viNew;
vj=6.8;
n=2;
}
V=0.5 * 4.1868 * Math.sqrt(vi * vj) ;
break;
case 4:
cosNPhi0=1;
n=2;
V=0.5 * 4.1868 * 5.0 * Math.sqrt(this.calcs.parB.dVal[7] * this.calcs.parC.dVal[7]) * (1.0 + 4.18 * Math.log(bondOrder)) ;
break;
case 6:
cosNPhi0=1;
n=6;
var sp3C=(this.calcs.parC.iVal[0] == 3);
switch ((sp3C ? this.c : this.b).atom.getElementNumber$()) {
case 8:
case 16:
case 34:
case 52:
case 84:
switch ((sp3C ? this.b : this.c).atom.getElementNumber$()) {
case 8:
case 16:
case 34:
case 52:
case 84:
break;
default:
n=2;
cosNPhi0=-1;
}
break;
}
V=2.0934;
}
if ($I$(1).isNearZero$D(V)) return;
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [this.ia, this.ib, this.ic, this.id, n]), Clazz.array(Double.TYPE, -1, [V, cosNPhi0])]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.getPointers$OA(dataIn);
var n=this.iData[4];
var V=this.dData[0];
var cosNPhi0=this.dData[1];
this.calcs.setTorsionVariables$org_jmol_minimize_forcefield_Calculation(this);
this.energy=V * (1.0 - cosNPhi0 * Math.cos(this.theta * n));
if (this.calcs.gradients) {
this.dE=V * n * cosNPhi0 * Math.sin(n * this.theta) ;
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 4);
}if (this.calcs.logging) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(3, this));
return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
