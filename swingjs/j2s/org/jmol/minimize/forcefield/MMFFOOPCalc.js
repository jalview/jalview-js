(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
var C$=Clazz.newClass(P$, "MMFFOOPCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.list=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.list=Clazz.array(Integer.TYPE, [4]);
}, 1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$I', function (calc, i) {
if (this.calcs.minAtoms[i].nBonds != 3) return;
var indices=this.calcs.minAtoms[i].getBondedAtomIndexes$();
this.list[0]=indices[2];
this.list[1]=i;
this.list[2]=indices[1];
this.list[3]=indices[0];
var koop=(this.calcs).mmff.getOutOfPlaneParameter$IA(this.list);
if (koop == 0 ) return;
var dk=Clazz.array(Double.TYPE, -1, [koop]);
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [indices[0], i, indices[1], indices[2]]), dk]));
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [indices[1], i, indices[2], indices[0]]), dk]));
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [indices[2], i, indices[0], indices[1]]), dk]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.getPointers$OA(dataIn);
this.calcs.setOopVariables$org_jmol_minimize_forcefield_Calculation$Z(this, false);
var koop=this.dData[0];
this.energy=71.96568080495746 * koop * this.theta * this.theta ;
if (this.calcs.gradients) {
this.dE=2.5120761569715815 * koop * this.theta ;
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 4);
}if (this.calcs.logging) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(4, this));
return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
