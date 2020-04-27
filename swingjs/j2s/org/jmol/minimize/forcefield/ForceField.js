(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),p$1={},I$=[[0,'org.jmol.util.Logger','org.jmol.viewer.Viewer','javajs.util.PT','org.jmol.minimize.Util','org.jmol.viewer.FileManager']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ForceField");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['criterion','e0','dE'],'I',['currentStep','stepMax','minAtomCount','minBondCount'],'S',['name'],'O',['calc','org.jmol.minimize.forcefield.Calculations','coordSaved','double[][]','minAtoms','org.jmol.minimize.MinAtom[]','minBonds','org.jmol.minimize.MinBond[]','minAngles','org.jmol.minimize.MinAngle[]','minTorsions','org.jmol.minimize.MinTorsion[]','minPositions','org.jmol.minimize.MinPosition[]','bsFixed','javajs.util.BS','minimizer','org.jmol.minimize.Minimizer']]]

Clazz.newMeth(C$, 'setModelFields$', function () {
this.minAtoms=this.minimizer.minAtoms;
this.minBonds=this.minimizer.minBonds;
this.minAngles=this.minimizer.minAngles;
this.minTorsions=this.minimizer.minTorsions;
this.bsFixed=this.minimizer.bsMinFixed;
this.minAtomCount=this.minAtoms.length;
this.minBondCount=this.minBonds.length;
});

Clazz.newMeth(C$, 'setConstraints$org_jmol_minimize_Minimizer', function (m) {
this.bsFixed=m.bsMinFixed;
this.calc.setConstraints$javajs_util_Lst(m.constraints);
this.coordSaved=null;
});

Clazz.newMeth(C$, 'steepestDescentInitialize$I$D', function (stepMax, criterion) {
this.stepMax=stepMax;
this.criterion=criterion / this.toUserUnits$D(1);
this.currentStep=0;
p$1.clearForces.apply(this, []);
this.calc.setLoggingEnabled$Z(true);
this.calc.setLoggingEnabled$Z(stepMax == 0 || $I$(1).isActiveLevel$I(6) );
var s=this.name + " " + this.calc.getDebugHeader$I(-1) + "Jmol Minimization Version " + $I$(2).getJmolVersion$() + "\n" ;
this.calc.appendLogData$S(s);
$I$(1).info$S(s);
this.calc.getConstraintList$();
if (this.calc.loggingEnabled) this.calc.appendLogData$S(this.calc.getAtomList$S("S T E E P E S T   D E S C E N T"));
this.dE=0;
this.calc.setPreliminary$Z(stepMax > 0);
this.e0=this.energyFull$Z$Z(false, false);
s=(function(a,f){return f.apply(null,a)})([" Initial " + this.name + " E = %10.3f " + this.minimizer.units + " criterion = %8.6f max steps = " + stepMax , "ff", Clazz.array(java.lang.Object, -1, [Float.valueOf$F(this.toUserUnits$D(this.e0)), Float.valueOf$F(this.toUserUnits$D(criterion))])],$I$(3).sprintf$S$S$OA);
this.minimizer.report$S$Z(s, false);
this.calc.appendLogData$S(s);
});

Clazz.newMeth(C$, 'clearForces', function () {
for (var i=0; i < this.minAtomCount; i++) this.minAtoms[i].force[0]=this.minAtoms[i].force[1]=this.minAtoms[i].force[2]=0;

}, p$1);

Clazz.newMeth(C$, 'steepestDescentTakeNSteps$I', function (n) {
if (this.stepMax == 0) return false;
var isPreliminary=true;
for (var iStep=1; iStep <= n; iStep++) {
this.currentStep++;
this.calc.setSilent$Z(true);
for (var i=0; i < this.minAtomCount; i++) if (this.bsFixed == null  || !this.bsFixed.get$I(i) ) p$1.setForcesUsingNumericalDerivative$org_jmol_minimize_MinAtom$I.apply(this, [this.minAtoms[i], 1]);

p$1.linearSearch.apply(this, []);
this.calc.setSilent$Z(false);
if (this.calc.loggingEnabled) this.calc.appendLogData$S(this.calc.getAtomList$S("S T E P    " + this.currentStep));
var e1=this.energyFull$Z$Z(false, false);
this.dE=e1 - this.e0;
var done=$I$(4).isNear3$D$D$D(e1, this.e0, this.criterion);
if (done || this.currentStep % 10 == 0  || this.stepMax <= this.currentStep ) {
var s=(function(a,f){return f.apply(null,a)})([this.name + " Step %-4d E = %10.6f    dE = %8.6f ", "Fi", Clazz.array(java.lang.Object, -1, [Clazz.array(Float.TYPE, -1, [e1, (this.dE), this.criterion]), Integer.valueOf$I(this.currentStep)])],$I$(3).sprintf$S$S$OA);
this.minimizer.report$S$Z(s, false);
this.calc.appendLogData$S(s);
}this.e0=e1;
if (done || this.stepMax <= this.currentStep ) {
if (this.calc.loggingEnabled) this.calc.appendLogData$S(this.calc.getAtomList$S("F I N A L  G E O M E T R Y"));
if (done) {
var s=(function(a,f){return f.apply(null,a)})(["\n    " + this.name + " STEEPEST DESCENT HAS CONVERGED: E = %8.5f " + this.minimizer.units + " after " + this.currentStep + " steps" , "f", this.toUserUnits$D(e1)],$I$(3).formatStringF$S$S$F);
this.calc.appendLogData$S(s);
this.minimizer.report$S$Z(s, true);
$I$(1).info$S(s);
}return false;
}if (isPreliminary && this.getNormalizedDE$() >= 2  ) {
this.calc.setPreliminary$Z(isPreliminary=false);
this.e0=this.energyFull$Z$Z(false, false);
}}
return true;
});

Clazz.newMeth(C$, 'getEnergies$I$Z', function (terms, gradients) {
if ((terms & 1) != 0) return this.energyFull$Z$Z(gradients, true);
var e=0.0;
if ((terms & 2) != 0) e += this.energyBond$Z(gradients);
if ((terms & 4) != 0) e += this.energyAngle$Z(gradients);
if ((terms & 8) != 0) e += this.energyStretchBend$Z(gradients);
if ((terms & 32) != 0) e += this.energyOOP$Z(gradients);
if ((terms & 16) != 0) e += this.energyTorsion$Z(gradients);
if ((terms & 64) != 0) e += this.energyVDW$Z(gradients);
if ((terms & 128) != 0) e += this.energyES$Z(gradients);
return e;
}, p$1);

Clazz.newMeth(C$, 'setForcesUsingNumericalDerivative$org_jmol_minimize_MinAtom$I', function (atom, terms) {
var delta=1.0E-5;
atom.force[0]=-p$1.getDE$org_jmol_minimize_MinAtom$I$I$D.apply(this, [atom, terms, 0, delta]);
atom.force[1]=-p$1.getDE$org_jmol_minimize_MinAtom$I$I$D.apply(this, [atom, terms, 1, delta]);
atom.force[2]=-p$1.getDE$org_jmol_minimize_MinAtom$I$I$D.apply(this, [atom, terms, 2, delta]);
return;
}, p$1);

Clazz.newMeth(C$, 'getDE$org_jmol_minimize_MinAtom$I$I$D', function (atom, terms, i, delta) {
atom.coord[i] += delta;
var e=p$1.getEnergies$I$Z.apply(this, [terms, false]);
atom.coord[i] -= delta;
return (e - this.e0) / delta;
}, p$1);

Clazz.newMeth(C$, 'energyFull$Z$Z', function (gradients, isSilent) {
var energy;
if (gradients) p$1.clearForces.apply(this, []);
energy=this.energyBond$Z(gradients) + this.energyAngle$Z(gradients) + this.energyTorsion$Z(gradients) + this.energyStretchBend$Z(gradients) + this.energyOOP$Z(gradients) + this.energyVDW$Z(gradients) + this.energyES$Z(gradients) ;
if (!isSilent && this.calc.loggingEnabled ) this.calc.appendLogData$S((function(a,f){return f.apply(null,a)})(["\nTOTAL %s ENERGY = %8.3f %s/mol\n", "sfs", Clazz.array(java.lang.Object, -1, [this.name, Float.valueOf$F(this.toUserUnits$D(energy)), this.minimizer.units])],$I$(3).sprintf$S$S$OA));
return energy;
});

Clazz.newMeth(C$, 'energyStretchBend$Z', function (gradients) {
return this.calc.energyStretchBend$Z(gradients);
});

Clazz.newMeth(C$, 'energyBond$Z', function (gradients) {
return this.calc.energyBond$Z(gradients);
});

Clazz.newMeth(C$, 'energyAngle$Z', function (gradients) {
return this.calc.energyAngle$Z(gradients);
});

Clazz.newMeth(C$, 'energyTorsion$Z', function (gradients) {
return this.calc.energyTorsion$Z(gradients);
});

Clazz.newMeth(C$, 'energyOOP$Z', function (gradients) {
return this.calc.energyOOP$Z(gradients);
});

Clazz.newMeth(C$, 'energyVDW$Z', function (gradients) {
return this.calc.energyVDW$Z(gradients);
});

Clazz.newMeth(C$, 'energyES$Z', function (gradients) {
return this.calc.energyES$Z(gradients);
});

Clazz.newMeth(C$, 'linearSearch', function () {
var step=0.23;
var trustRadius=0.3;
var trustRadius2=trustRadius * trustRadius;
var e1=this.energyFull$Z$Z(false, true);
for (var iStep=0; iStep < 10; iStep++) {
p$1.saveCoordinates.apply(this, []);
for (var i=0; i < this.minAtomCount; ++i) if (this.bsFixed == null  || !this.bsFixed.get$I(i) ) {
var force=this.minAtoms[i].force;
var coord=this.minAtoms[i].coord;
var f2=(force[0] * force[0] + force[1] * force[1] + force[2] * force[2]);
if (f2 > trustRadius2 / step / step  ) {
f2=trustRadius / Math.sqrt(f2) / step ;
force[0] *= f2;
force[1] *= f2;
force[2] *= f2;
}for (var j=0; j < 3; ++j) {
if ($I$(4).isFinite$D(force[j])) {
var tempStep=force[j] * step;
if (tempStep > trustRadius ) coord[j] += trustRadius;
 else if (tempStep < -trustRadius ) coord[j] -= trustRadius;
 else coord[j] += tempStep;
}}
}
var e2=this.energyFull$Z$Z(false, true);
if ($I$(4).isNear3$D$D$D(e2, e1, 0.001)) break;
if (e2 > e1 ) {
step *= 0.1;
p$1.restoreCoordinates.apply(this, []);
} else if (e2 < e1 ) {
e1=e2;
step *= 2.15;
if (step > 1.0 ) step=1.0;
}}
}, p$1);

Clazz.newMeth(C$, 'saveCoordinates', function () {
if (this.coordSaved == null ) this.coordSaved=Clazz.array(Double.TYPE, [this.minAtomCount, 3]);
for (var i=0; i < this.minAtomCount; i++) for (var j=0; j < 3; j++) this.coordSaved[i][j]=this.minAtoms[i].coord[j];


}, p$1);

Clazz.newMeth(C$, 'restoreCoordinates', function () {
for (var i=0; i < this.minAtomCount; i++) for (var j=0; j < 3; j++) this.minAtoms[i].coord[j]=this.coordSaved[i][j];


}, p$1);

Clazz.newMeth(C$, 'detectExplosion$', function () {
for (var i=0; i < this.minAtomCount; i++) {
var atom=this.minAtoms[i];
for (var j=0; j < 3; j++) if (!$I$(4).isFinite$D(atom.coord[j])) return true;

}
for (var i=0; i < this.minBondCount; i++) {
var bond=this.minBonds[i];
if ($I$(4).distance2$DA$DA(this.minAtoms[bond.data[0]].coord, this.minAtoms[bond.data[1]].coord) > 900.0 ) return true;
}
return false;
});

Clazz.newMeth(C$, 'getCurrentStep$', function () {
return this.currentStep;
});

Clazz.newMeth(C$, 'getEnergy$', function () {
return this.e0;
});

Clazz.newMeth(C$, 'getAtomList$S', function (title) {
return this.calc.getAtomList$S(title);
});

Clazz.newMeth(C$, 'getEnergyDiff$', function () {
return this.dE;
});

Clazz.newMeth(C$, 'getLogData$', function () {
return this.calc.getLogData$();
});

Clazz.newMeth(C$, 'getNormalizedDE$', function () {
return Math.abs(this.dE / this.criterion);
});

Clazz.newMeth(C$, 'toUserUnits$D', function (energy) {
return p$1.toUnits$D$S.apply(this, [energy, this.calc.getUnits$()]);
});

Clazz.newMeth(C$, 'toUnits$D$S', function (energy, units) {
return (units.equalsIgnoreCase$S(this.minimizer.units) ? energy : energy * (this.minimizer.units.equals$O("kJ") ? 4.1868 : 0.23884589662749595));
}, p$1);

Clazz.newMeth(C$, 'log$S', function (s) {
this.calc.appendLogData$S(s);
});

Clazz.newMeth(C$, 'getBufferedReader$S', function (resourceName) {
return $I$(5).getBufferedReaderForResource$org_jmol_viewer_Viewer$O$S$S(this.minimizer.vwr, this, "org/jmol/minimize/forcefield/", "data/" + resourceName);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
