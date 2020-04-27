(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MMFFAngleCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$org_jmol_minimize_MinAngle', function (calc, angle) {
var data=this.calcs.getParameterObj$org_jmol_minimize_MinObject(angle);
if (data == null ) return;
calc.addLast$O(Clazz.array(java.lang.Object, -1, [angle.data, data, angle.key]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.key=dataIn[2];
this.getPointers$OA(dataIn);
var ka=this.dData[0];
var t0=this.dData[1];
this.calcs.setAngleVariables$org_jmol_minimize_forcefield_Calculation(this);
var dt=(this.theta * 57.29577951308232 - t0);
if (t0 == 180 ) {
this.energy=143.9325 * ka * (1 + Math.cos(this.theta)) ;
if (this.calcs.gradients) this.dE=-143.9325 * ka * Math.sin(this.theta) ;
} else {
this.energy=0.021922 * ka * Math.pow(dt, 2) * (1 + -0.006981317007977318 * dt) ;
if (this.calcs.gradients) this.dE=0.021922 * ka * dt * (2 + 3 * -0.006981317007977318 * dt ) ;
}if (this.calcs.gradients) this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 3);
if (this.calcs.logging) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(1, this));
return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
