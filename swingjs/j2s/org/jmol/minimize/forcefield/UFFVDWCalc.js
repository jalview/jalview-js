(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[];
var C$=Clazz.newClass(P$, "UFFVDWCalc", null, 'org.jmol.minimize.forcefield.Calculation');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setData$javajs_util_Lst$I$I$D', function (calc, ia, ib, dd) {
this.a=this.calcs.minAtoms[ia];
this.b=this.calcs.minAtoms[ib];
var parA=this.calcs.getParameter$O(this.a.sType);
var parB=this.calcs.getParameter$O(this.b.sType);
var Xa=parA.dVal[2];
var Da=parA.dVal[3];
if (parB == null  || parB.dVal == null  ) System.out.println$S("OHOH");
var Xb=parB.dVal[2];
var Db=parB.dVal[3];
var Dab=4.1868 * Math.sqrt(Da * Db);
var Xab=Math.sqrt(Xa * Xb);
calc.addLast$TV(Clazz.array(java.lang.Object, -1, [Clazz.array(Integer.TYPE, -1, [ia, ib]), Clazz.array(Double.TYPE, -1, [Xab, Dab])]));
});

Clazz.newMeth(C$, 'compute$OA', function (dataIn) {
this.getPointers$OA(dataIn);
var Xab=this.dData[0];
var Dab=this.dData[1];
this.calcs.setPairVariables$org_jmol_minimize_forcefield_Calculation(this);
var term=Xab / this.rab;
var term6=term * term * term ;
term6 *= term6;
this.energy=Dab * term6 * (term6 - 2.0) ;
if (this.calcs.gradients) {
this.dE=Dab * 12.0 * (1.0 - term6) * term6 * term  / Xab;
this.calcs.addForces$org_jmol_minimize_forcefield_Calculation$I(this, 2);
}if (this.calcs.logging) this.calcs.appendLogData$S(this.calcs.getDebugLine$I$org_jmol_minimize_forcefield_Calculation(5, this));
return this.energy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
