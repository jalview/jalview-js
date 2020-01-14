(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
var C$=Clazz.newClass(P$, "MMFFSBCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$org_jmol_minimize_MinAngle', function (calc, angle) {
if (this.calcs.isLinear$I(angle.data[1])) return;
var data=this.calcs.getParameter$O(angle.sbKey);
var datakat0=this.calcs.getParameterObj$org_jmol_minimize_MinObject(angle);
var dataij=this.calcs.getParameter$O(this.calcs.minBonds[angle.data[3]]);
var datajk=this.calcs.getParameter$O(this.calcs.minBonds[angle.data[4]]);
if (data == null  || datakat0 == null   || dataij == null   || datajk == null  ) return;
var theta0=datakat0[1];
var r0ij=dataij[1];
var r0jk=datajk[1];
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [angle.data, Clazz.array(Double.TYPE, -1, [data[0], theta0, r0ij]), angle.sbKey]));
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [angle.data[2], angle.data[1], angle.data[0]]), Clazz.array(Double.TYPE, -1, [data[1], theta0, r0jk]), angle.sbKey]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.key=dataIn[2];
this.getPointers$OA(dataIn);
var k=2.5121 * this.dData[0];
var t0=this.dData[1];
var r0_ab=this.dData[2];
this.calcs.setPairVariables$org_jmol_minimize_forcefield_Calculation(this);
this.calcs.setAngleVariables$org_jmol_minimize_forcefield_Calculation(this);
var dr_ab=this.rab - r0_ab;
this.delta=this.theta * 57.29577951308232 - t0;
this.energy=k * dr_ab * this.delta ;
if (this.calcs.logging) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(2, this));
if (this.calcs.gradients) {
this.dE=k * dr_ab;
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 3);
this.calcs.setPairVariables$org_jmol_minimize_forcefield_Calculation(this);
this.dE=k * this.delta;
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 2);
}return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
