(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
var C$=Clazz.newClass(P$, "UFFOOPCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$I$I$D', function (calc, ib, elemNo, dd) {
this.b=this.calcs.minAtoms[ib];
var atomList=this.b.getBondedAtomIndexes$();
this.a=this.calcs.minAtoms[this.ia=atomList[0]];
this.c=this.calcs.minAtoms[this.ic=atomList[1]];
this.d=this.calcs.minAtoms[this.id=atomList[2]];
var a0=1.0;
var a1=-1.0;
var a2=0.0;
var koop=25.1208;
switch (elemNo) {
case 6:
if (this.b.sType == "C_2" && this.b.hCount > 1  || this.b.sType == "C_2+"  || this.a.sType == "O_2"  || this.c.sType == "O_2"  || this.d.sType == "O_2" ) {
koop += 184.2192;
break;
}break;
case 7:
case 8:
break;
default:
koop=92.1096;
var phi=0.017453292519943295;
switch (elemNo) {
case 15:
phi *= 84.4339;
break;
case 33:
phi *= 86.9735;
break;
case 51:
phi *= 87.7047;
break;
case 83:
phi *= 90.0;
break;
}
var cosPhi=Math.cos(phi);
a0=cosPhi * cosPhi;
a1=-2.0 * cosPhi;
a2=1.0;
}
koop /= 3.0;
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [this.ia, ib, this.ic, this.id]), Clazz.array(Double.TYPE, -1, [koop, a0, a1, a2, koop * 10])]));
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [this.ic, ib, this.id, this.ia]), Clazz.array(Double.TYPE, -1, [koop, a0, a1, a2, koop * 10])]));
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [this.id, ib, this.ia, this.ic]), Clazz.array(Double.TYPE, -1, [koop, a0, a1, a2, koop * 10])]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.getPointers$OA(dataIn);
var koop=(this.calcs.isPreliminary ? this.dData[4] : this.dData[0]);
var a0=this.dData[1];
var a1=this.dData[2];
var a2=this.dData[3];
this.calcs.setOopVariables$org_jmol_minimize_forcefield_Calculation$Z(this, true);
var cosTheta=Math.cos(this.theta);
this.energy=koop * (a0 + a1 * cosTheta + a2 * cosTheta * cosTheta );
if (this.calcs.gradients) {
this.dE=koop * (a1 * Math.sin(this.theta) + a2 * 2.0 * Math.sin(this.theta) * cosTheta );
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 4);
}if (this.calcs.logging) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(4, this));
return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
