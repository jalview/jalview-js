(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
var C$=Clazz.newClass(P$, "MMFFESCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$I$I$D', function (calc, ia, ib, d) {
if (this.calcs.minAtoms[ia].partialCharge == 0  || this.calcs.minAtoms[ib].partialCharge == 0  ) return;
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [ia, ib]), Clazz.array(Double.TYPE, -1, [this.calcs.minAtoms[ia].partialCharge, this.calcs.minAtoms[ib].partialCharge, (this.calcs.minAtoms[ia].bs14.get$I(ib) ? 249.0537 : 332.0716)])]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.getPointers$OA(dataIn);
var f=this.dData[0] * this.dData[1] * this.dData[2] ;
this.calcs.setPairVariables$org_jmol_minimize_forcefield_Calculation(this);
var d=this.rab + 0.05;
this.energy=f / d;
if (this.calcs.gradients) {
this.dE=-this.energy / d;
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 2);
}if (this.calcs.logging && Math.abs(this.energy) > 20  ) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(6, this));
return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
