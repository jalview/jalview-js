(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MMFFTorsionCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$org_jmol_minimize_MinTorsion', function (calc, t) {
if (this.calcs.isLinear$I(t.data[1]) || this.calcs.isLinear$I(t.data[2]) ) return;
var data=this.calcs.getParameterObj$org_jmol_minimize_MinObject(t);
if (data == null ) return;
calc.addLast$O(Clazz.array(java.lang.Object, -1, [t.data, data, t.key]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.key=dataIn[2];
this.getPointers$OA(dataIn);
var v1=this.dData[0];
var v2=this.dData[1];
var v3=this.dData[2];
this.calcs.setTorsionVariables$org_jmol_minimize_forcefield_Calculation(this);
var cosTheta=Math.cos(this.theta);
var cosTheta2=cosTheta * cosTheta;
this.energy=0.5 * (v1 * (1 + cosTheta) + v2 * (2 - 2 * cosTheta2) + v3 * (1 + cosTheta * (4 * cosTheta2 - 3)));
if (this.calcs.gradients) {
var sinTheta=Math.sin(this.theta);
this.dE=0.5 * (-v1 * sinTheta + 4 * v2 * sinTheta * cosTheta  + 3 * v3 * sinTheta * (1 - 4 * cosTheta2) );
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 4);
}if (this.calcs.logging) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(2, this));
return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:37 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
