(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MMFFVDWCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$I$I$D', function (calc, ia, ib, dd) {
this.a=this.calcs.minAtoms[ia];
this.b=this.calcs.minAtoms[ib];
var dataA=this.calcs.getParameter$O(this.a.vdwKey);
var dataB=this.calcs.getParameter$O(this.b.vdwKey);
if (dataA == null  || dataB == null  ) return;
var alpha_a=dataA[0];
var N_a=dataA[1];
var A_a=dataA[2];
var G_a=dataA[3];
var DA_a=(dataA[4]|0);
var alpha_b=dataB[0];
var N_b=dataB[1];
var A_b=dataB[2];
var G_b=dataB[3];
var DA_b=(dataB[4]|0);
var rs_aa=A_a * Math.pow(alpha_a, 0.25);
var rs_bb=A_b * Math.pow(alpha_b, 0.25);
var gamma=(rs_aa - rs_bb) / (rs_aa + rs_bb);
var rs=0.5 * (rs_aa + rs_bb);
if (DA_a != 68 && DA_b != 68 ) rs *= (1.0 + 0.2 * (1.0 - Math.exp(-12.0 * gamma * gamma )));
var eps=((181.16 * G_a * G_b * alpha_a * alpha_b ) / (Math.sqrt(alpha_a / N_a) + Math.sqrt(alpha_b / N_b))) * Math.pow(rs, -6.0);
if (DA_a + DA_b == 133) {
rs *= 0.8;
eps *= 0.5;
}calc.addLast$O(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [ia, ib]), Clazz.array(Double.TYPE, -1, [rs, eps])]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.getPointers$OA(dataIn);
this.calcs.setPairVariables$org_jmol_minimize_forcefield_Calculation(this);
var rs=this.dData[0];
var eps=this.dData[1];
var r_rs=this.rab / rs;
var f1=1.07 / (r_rs + 0.07);
var f2=1.12 / (Math.pow(r_rs, 7) + 0.12);
this.energy=eps * Math.pow(f1, 7) * (f2 - 2) ;
if (this.calcs.gradients) {
this.dE=-7 * eps * Math.pow(f1, 7)  / rs * (f1 / 1.07 * (f2 - 2) + f2 * f2 * Math.pow(r_rs, 6) );
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 2);
}if (this.calcs.logging && Math.abs(this.energy) > 0.1  ) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(5, this));
return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
