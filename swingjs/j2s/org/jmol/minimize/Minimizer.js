(function(){var P$=Clazz.newPackage("org.jmol.minimize"),p$1={},I$=[[0,'javajs.util.Lst','java.util.Hashtable','javajs.util.AU','org.jmol.util.Escape','org.jmol.util.Logger','org.jmol.i18n.GT','org.jmol.util.BSUtil','org.jmol.minimize.MinAtom','javajs.util.BS','org.jmol.minimize.MinBond','org.jmol.minimize.MinAngle','org.jmol.minimize.MinTorsion','org.jmol.minimize.forcefield.ForceFieldUFF','org.jmol.minimize.forcefield.ForceFieldMMFF','org.jmol.minimize.MinimizationThread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Minimizer");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.atoms=null;
this.bonds=null;
this.rawBondCount=0;
this.minAtoms=null;
this.minBonds=null;
this.minAngles=null;
this.minTorsions=null;
this.minPositions=null;
this.bsMinFixed=null;
this.ac=0;
this.bondCount=0;
this.atomMap=null;
this.partialCharges=null;
this.steps=0;
this.crit=0;
this.units=null;
this.pFF=null;
this.ff=null;
this.bsTaint=null;
this.bsSelected=null;
this.bsAtoms=null;
this.bsFixedDefault=null;
this.bsFixed=null;
this.constraints=null;
this.isSilent=false;
this.constraintMap=null;
this.elemnoMax=0;
this.minimizationOn=false;
this.minimizationThread=null;
this.coordSaved=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.steps=50;
this.crit=0.001;
this.units="kJ/mol";
this.ff="UFF";
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setProperty$S$O', function (propertyName, value) {
switch (("ff        cancel    clear     constraintfixed     stop      vwr    ").indexOf$S(propertyName)) {
case 0:
if (!this.ff.equals$O(value)) {
this.setProperty$S$O("clear", null);
this.ff=value;
}break;
case 10:
this.stopMinimization$Z(false);
break;
case 20:
if (this.minAtoms != null ) {
this.stopMinimization$Z(false);
p$1.clear.apply(this, []);
}break;
case 30:
p$1.addConstraint$OA.apply(this, [value]);
break;
case 40:
this.bsFixedDefault=value;
break;
case 50:
this.stopMinimization$Z(true);
break;
case 60:
this.vwr=value;
break;
}
return this;
});

Clazz.newMeth(C$, 'getProperty$S$I', function (propertyName, param) {
if (propertyName.equals$O("log")) {
return (this.pFF == null  ? "" : this.pFF.getLogData$());
}return null;
});

Clazz.newMeth(C$, 'addConstraint$OA', function (c) {
if (c == null ) return;
var atoms=c[0];
var nAtoms=atoms[0];
if (nAtoms == 0) {
this.constraints=null;
return;
}if (this.constraints == null ) {
this.constraints=Clazz.new_($I$(1));
this.constraintMap=Clazz.new_($I$(2));
}if (atoms[1] > atoms[nAtoms]) {
$I$(3).swapInt$IA$I$I(atoms, 1, nAtoms);
if (nAtoms == 4) $I$(3).swapInt$IA$I$I(atoms, 2, 3);
}var id=$I$(4).eAI$IA(atoms);
var c1=this.constraintMap.get$O(id);
if (c1 != null ) {
c1[2]=c[2];
return;
}this.constraintMap.put$TK$TV(id, c);
this.constraints.addLast$TV(c);
}, p$1);

Clazz.newMeth(C$, 'clear', function () {
p$1.setMinimizationOn$Z.apply(this, [false]);
this.ac=0;
this.bondCount=0;
this.atoms=null;
this.bonds=null;
this.rawBondCount=0;
this.minAtoms=null;
this.minBonds=null;
this.minAngles=null;
this.minTorsions=null;
this.partialCharges=null;
this.coordSaved=null;
this.atomMap=null;
this.bsTaint=null;
this.bsAtoms=null;
this.bsFixed=null;
this.bsFixedDefault=null;
this.bsMinFixed=null;
this.bsSelected=null;
this.constraints=null;
this.constraintMap=null;
this.pFF=null;
}, p$1);

Clazz.newMeth(C$, 'minimize$I$D$javajs_util_BS$javajs_util_BS$Z$Z$S', function (steps, crit, bsSelected, bsFixed, haveFixed, forceSilent, ff) {
this.isSilent=(forceSilent || this.vwr.getBooleanProperty$S("minimizationSilent") );
var val;
p$1.setEnergyUnits.apply(this, []);
if (steps == 2147483647) {
val=this.vwr.getP$S("minimizationSteps");
if (val != null  && Clazz.instanceOf(val, "java.lang.Integer") ) steps=(val).intValue$();
}this.steps=steps;
if (!haveFixed && this.bsFixedDefault != null  ) bsFixed.and$javajs_util_BS(this.bsFixedDefault);
if (crit <= 0 ) {
val=this.vwr.getP$S("minimizationCriterion");
if (val != null  && Clazz.instanceOf(val, "java.lang.Float") ) crit=(val).floatValue$();
}this.crit=Math.max(crit, 1.0E-4);
if (this.minimizationOn) return false;
var pFF0=this.pFF;
this.getForceField$S(ff);
if (this.pFF == null ) {
$I$(5).error$S($I$(6).o$S$O($I$(6).$$S("Could not get class for force field {0}"), ff));
return false;
}$I$(5).info$S("minimize: initializing " + this.pFF.name + " (steps = " + steps + " criterion = " + new Double(crit).toString() + ") ..." );
if (bsSelected.nextSetBit$I(0) < 0) {
$I$(5).error$S($I$(6).$$S("No atoms selected -- nothing to do!"));
return false;
}this.atoms=this.vwr.ms.at;
this.bsAtoms=$I$(7).copy$javajs_util_BS(bsSelected);
for (var i=this.bsAtoms.nextSetBit$I(0); i >= 0; i=this.bsAtoms.nextSetBit$I(i + 1)) if (this.atoms[i].getElementNumber$() == 0) this.bsAtoms.clear$I(i);

if (bsFixed != null ) this.bsAtoms.or$javajs_util_BS(bsFixed);
this.ac=this.bsAtoms.cardinality$();
var sameAtoms=$I$(7).areEqual$javajs_util_BS$javajs_util_BS(bsSelected, this.bsSelected);
this.bsSelected=bsSelected;
if (pFF0 != null  && this.pFF !== pFF0  ) sameAtoms=false;
if (!sameAtoms) this.pFF.clear$();
if ((!sameAtoms || !$I$(7).areEqual$javajs_util_BS$javajs_util_BS(bsFixed, this.bsFixed) ) && !p$1.setupMinimization.apply(this, []) ) {
p$1.clear.apply(this, []);
return false;
}if (steps > 0) {
this.bsTaint=$I$(7).copy$javajs_util_BS(this.bsAtoms);
$I$(7).andNot$javajs_util_BS$javajs_util_BS(this.bsTaint, bsFixed);
this.vwr.ms.setTaintedAtoms$javajs_util_BS$I(this.bsTaint, 2);
}if (bsFixed != null ) this.bsFixed=bsFixed;
p$1.setAtomPositions.apply(this, []);
if (this.constraints != null ) {
for (var i=this.constraints.size$(); --i >= 0; ) {
var constraint=this.constraints.get$I(i);
var aList=constraint[0];
var minList=constraint[1];
var nAtoms=aList[0]=Math.abs(aList[0]);
for (var j=1; j <= nAtoms; j++) {
if (steps <= 0 || !this.bsAtoms.get$I(aList[j]) ) {
aList[0]=-nAtoms;
break;
}minList[j - 1]=this.atomMap[aList[j]];
}
}
}this.pFF.setConstraints$org_jmol_minimize_Minimizer(this);
if (steps <= 0) p$1.getEnergyOnly.apply(this, []);
 else if (this.isSilent || !this.vwr.useMinimizationThread$() ) p$1.minimizeWithoutThread.apply(this, []);
 else p$1.setMinimizationOn$Z.apply(this, [true]);
return true;
});

Clazz.newMeth(C$, 'setEnergyUnits', function () {
var s=this.vwr.g.energyUnits;
this.units=(s.equalsIgnoreCase$S("kcal") ? "kcal" : "kJ");
}, p$1);

Clazz.newMeth(C$, 'setupMinimization', function () {
this.coordSaved=null;
this.atomMap=Clazz.array(Integer.TYPE, [this.atoms.length]);
this.minAtoms=Clazz.array($I$(8), [this.ac]);
this.elemnoMax=0;
var bsElements=Clazz.new_($I$(9));
for (var i=this.bsAtoms.nextSetBit$I(0), pt=0; i >= 0; i=this.bsAtoms.nextSetBit$I(i + 1), pt++) {
var atom=this.atoms[i];
this.atomMap[i]=pt;
var atomicNo=this.atoms[i].getElementNumber$();
this.elemnoMax=Math.max(this.elemnoMax, atomicNo);
bsElements.set$I(atomicNo);
this.minAtoms[pt]=Clazz.new_($I$(8).c$$I$org_jmol_modelset_Atom$DA$I,[pt, atom, Clazz.array(Double.TYPE, -1, [atom.x, atom.y, atom.z]), this.ac]);
this.minAtoms[pt].sType=atom.getAtomName$();
}
$I$(5).info$S($I$(6).i$S$I($I$(6).$$S("{0} atoms will be minimized."), this.ac));
$I$(5).info$S("minimize: getting bonds...");
this.bonds=this.vwr.ms.bo;
this.rawBondCount=this.vwr.ms.bondCount;
p$1.getBonds.apply(this, []);
$I$(5).info$S("minimize: getting angles...");
this.getAngles$();
$I$(5).info$S("minimize: getting torsions...");
this.getTorsions$();
return p$1.setModel$javajs_util_BS.apply(this, [bsElements]);
}, p$1);

Clazz.newMeth(C$, 'setModel$javajs_util_BS', function (bsElements) {
if (!this.pFF.setModel$javajs_util_BS$I(bsElements, this.elemnoMax)) {
$I$(5).error$S($I$(6).o$S$O($I$(6).$$S("could not setup force field {0}"), this.ff));
if (this.ff.equals$O("MMFF")) {
this.getForceField$S("UFF");
return p$1.setModel$javajs_util_BS.apply(this, [bsElements]);
}return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'setAtomPositions', function () {
for (var i=0; i < this.ac; i++) this.minAtoms[i].set$();

this.bsMinFixed=null;
if (this.bsFixed != null ) {
this.bsMinFixed=Clazz.new_($I$(9));
for (var i=this.bsAtoms.nextSetBit$I(0), pt=0; i >= 0; i=this.bsAtoms.nextSetBit$I(i + 1), pt++) if (this.bsFixed.get$I(i)) this.bsMinFixed.set$I(pt);

}}, p$1);

Clazz.newMeth(C$, 'getBonds', function () {
var bondInfo=Clazz.new_($I$(1));
this.bondCount=0;
var i1;
var i2;
for (var i=0; i < this.rawBondCount; i++) {
var bond=this.bonds[i];
if (!this.bsAtoms.get$I(i1=bond.atom1.i) || !this.bsAtoms.get$I(i2=bond.atom2.i) ) continue;
if (i2 < i1) {
var ii=i1;
i1=i2;
i2=ii;
}var bondOrder=bond.getCovalentOrder$();
switch (bondOrder) {
case 0:
continue;
case 1:
case 2:
case 3:
break;
case 515:
bondOrder=5;
break;
default:
bondOrder=1;
}
bondInfo.addLast$TV(Clazz.new_($I$(10).c$$I$I$I$I$I$I$Integer,[i, this.bondCount++, this.atomMap[i1], this.atomMap[i2], bondOrder, 0, null]));
}
this.minBonds=Clazz.array($I$(10), [this.bondCount]);
for (var i=0; i < this.bondCount; i++) {
var bond=this.minBonds[i]=bondInfo.get$I(i);
var atom1=bond.data[0];
var atom2=bond.data[1];
this.minAtoms[atom1].addBond$org_jmol_minimize_MinBond$I(bond, atom2);
this.minAtoms[atom2].addBond$org_jmol_minimize_MinBond$I(bond, atom1);
}
for (var i=0; i < this.ac; i++) this.minAtoms[i].getBondedAtomIndexes$();

}, p$1);

Clazz.newMeth(C$, 'getAngles$', function () {
var vAngles=Clazz.new_($I$(1));
var atomList;
var ic;
for (var i=0; i < this.bondCount; i++) {
var bond=this.minBonds[i];
var ia=bond.data[0];
var ib=bond.data[1];
if (this.minAtoms[ib].nBonds > 1) {
atomList=this.minAtoms[ib].getBondedAtomIndexes$();
for (var j=atomList.length; --j >= 0; ) if ((ic=atomList[j]) > ia) {
vAngles.addLast$TV(Clazz.new_($I$(11).c$$IA,[Clazz.array(Integer.TYPE, -1, [ia, ib, ic, i, this.minAtoms[ib].getBondIndex$I(j)])]));
this.minAtoms[ia].bsVdw.clear$I(ic);
}
}if (this.minAtoms[ia].nBonds > 1) {
atomList=this.minAtoms[ia].getBondedAtomIndexes$();
for (var j=atomList.length; --j >= 0; ) if ((ic=atomList[j]) < ib && ic > ia ) {
vAngles.addLast$TV(Clazz.new_($I$(11).c$$IA,[Clazz.array(Integer.TYPE, -1, [ic, ia, ib, this.minAtoms[ia].getBondIndex$I(j), i])]));
this.minAtoms[ic].bsVdw.clear$I(ib);
}
}}
this.minAngles=vAngles.toArray$TTA(Clazz.array($I$(11), [vAngles.size$()]));
$I$(5).info$S(this.minAngles.length + " angles");
});

Clazz.newMeth(C$, 'getTorsions$', function () {
var vTorsions=Clazz.new_($I$(1));
var id;
for (var i=this.minAngles.length; --i >= 0; ) {
var angle=this.minAngles[i].data;
var ia=angle[0];
var ib=angle[1];
var ic=angle[2];
var atomList;
if (ic > ib && this.minAtoms[ic].nBonds > 1 ) {
atomList=this.minAtoms[ic].getBondedAtomIndexes$();
for (var j=0; j < atomList.length; j++) {
id=atomList[j];
if (id != ia && id != ib ) {
vTorsions.addLast$TV(Clazz.new_($I$(12).c$$IA,[Clazz.array(Integer.TYPE, -1, [ia, ib, ic, id, angle[3], angle[4], this.minAtoms[ic].getBondIndex$I(j)])]));
this.minAtoms[Math.min(ia, id)].bs14.set$I(Math.max(ia, id));
}}
}if (ia > ib && this.minAtoms[ia].nBonds != 1 ) {
atomList=this.minAtoms[ia].getBondedAtomIndexes$();
for (var j=0; j < atomList.length; j++) {
id=atomList[j];
if (id != ic && id != ib ) {
vTorsions.addLast$TV(Clazz.new_($I$(12).c$$IA,[Clazz.array(Integer.TYPE, -1, [ic, ib, ia, id, angle[4], angle[3], this.minAtoms[ia].getBondIndex$I(j)])]));
this.minAtoms[Math.min(ic, id)].bs14.set$I(Math.max(ic, id));
}}
}}
this.minTorsions=vTorsions.toArray$TTA(Clazz.array($I$(12), [vTorsions.size$()]));
$I$(5).info$S(this.minTorsions.length + " torsions");
});

Clazz.newMeth(C$, 'getForceField$S', function (ff) {
if (ff.startsWith$S("MMFF")) ff="MMFF";
if (this.pFF == null  || !ff.equals$O(this.ff) ) {
if (ff.equals$O("UFF")) {
this.pFF=Clazz.new_($I$(13).c$$org_jmol_minimize_Minimizer,[this]);
} else if (ff.equals$O("MMFF")) {
this.pFF=Clazz.new_($I$(14).c$$org_jmol_minimize_Minimizer,[this]);
} else {
this.pFF=Clazz.new_($I$(13).c$$org_jmol_minimize_Minimizer,[this]);
ff="UFF";
}this.ff=ff;
this.vwr.setStringProperty$S$S("_minimizationForceField", ff);
}return this.pFF;
});

Clazz.newMeth(C$, 'minimizationOn$', function () {
return this.minimizationOn;
});

Clazz.newMeth(C$, 'getThread$', function () {
return this.minimizationThread;
});

Clazz.newMeth(C$, 'setMinimizationOn$Z', function (minimizationOn) {
this.minimizationOn=minimizationOn;
if (!minimizationOn) {
if (this.minimizationThread != null ) {
this.minimizationThread=null;
}return;
}if (this.minimizationThread == null ) {
this.minimizationThread=Clazz.new_($I$(15));
this.minimizationThread.setManager$O$org_jmol_viewer_Viewer$O(this, this.vwr, null);
this.minimizationThread.start$();
}}, p$1);

Clazz.newMeth(C$, 'getEnergyOnly', function () {
if (this.pFF == null  || this.vwr == null  ) return;
this.pFF.steepestDescentInitialize$I$D(this.steps, this.crit);
this.vwr.setFloatProperty$S$F("_minimizationEnergyDiff", 0);
p$1.reportEnergy.apply(this, []);
this.vwr.setStringProperty$S$S("_minimizationStatus", "calculate");
this.vwr.notifyMinimizationStatus$();
}, p$1);

Clazz.newMeth(C$, 'reportEnergy', function () {
this.vwr.setFloatProperty$S$F("_minimizationEnergy", this.pFF.toUserUnits$D(this.pFF.getEnergy$()));
}, p$1);

Clazz.newMeth(C$, 'startMinimization$', function () {
try {
$I$(5).info$S("minimizer: startMinimization");
this.vwr.setIntProperty$S$I("_minimizationStep", 0);
this.vwr.setStringProperty$S$S("_minimizationStatus", "starting");
this.vwr.setFloatProperty$S$F("_minimizationEnergy", 0);
this.vwr.setFloatProperty$S$F("_minimizationEnergyDiff", 0);
this.vwr.notifyMinimizationStatus$();
this.vwr.stm.saveCoordinates$S$javajs_util_BS("minimize", this.bsTaint);
this.pFF.steepestDescentInitialize$I$D(this.steps, this.crit);
p$1.reportEnergy.apply(this, []);
p$1.saveCoordinates.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S("minimization error vwr=" + this.vwr + " pFF = " + this.pFF );
return false;
} else {
throw e;
}
}
this.minimizationOn=true;
return true;
});

Clazz.newMeth(C$, 'stepMinimization$', function () {
if (!this.minimizationOn) return false;
var doRefresh=(!this.isSilent && this.vwr.getBooleanProperty$S("minimizationRefresh") );
this.vwr.setStringProperty$S$S("_minimizationStatus", "running");
var going=this.pFF.steepestDescentTakeNSteps$I(1);
var currentStep=this.pFF.getCurrentStep$();
this.vwr.setIntProperty$S$I("_minimizationStep", currentStep);
p$1.reportEnergy.apply(this, []);
this.vwr.setFloatProperty$S$F("_minimizationEnergyDiff", this.pFF.toUserUnits$D(this.pFF.getEnergyDiff$()));
this.vwr.notifyMinimizationStatus$();
if (doRefresh) {
this.updateAtomXYZ$();
this.vwr.refresh$I$S(3, "minimization step " + currentStep);
}return going;
});

Clazz.newMeth(C$, 'endMinimization$', function () {
this.updateAtomXYZ$();
p$1.setMinimizationOn$Z.apply(this, [false]);
if (this.pFF == null ) {
System.out.println$S("pFF was null");
} else {
var failed=this.pFF.detectExplosion$();
if (failed) p$1.restoreCoordinates.apply(this, []);
this.vwr.setIntProperty$S$I("_minimizationStep", this.pFF.getCurrentStep$());
p$1.reportEnergy.apply(this, []);
this.vwr.setStringProperty$S$S("_minimizationStatus", (failed ? "failed" : "done"));
this.vwr.notifyMinimizationStatus$();
this.vwr.refresh$I$S(3, "Minimizer:done" + (failed ? " EXPLODED" : "OK"));
}$I$(5).info$S("minimizer: endMinimization");
});

Clazz.newMeth(C$, 'saveCoordinates', function () {
if (this.coordSaved == null ) this.coordSaved=Clazz.array(Double.TYPE, [this.ac, 3]);
for (var i=0; i < this.ac; i++) for (var j=0; j < 3; j++) this.coordSaved[i][j]=this.minAtoms[i].coord[j];


}, p$1);

Clazz.newMeth(C$, 'restoreCoordinates', function () {
if (this.coordSaved == null ) return;
for (var i=0; i < this.ac; i++) for (var j=0; j < 3; j++) this.minAtoms[i].coord[j]=this.coordSaved[i][j];


this.updateAtomXYZ$();
}, p$1);

Clazz.newMeth(C$, 'stopMinimization$Z', function (coordAreOK) {
if (!this.minimizationOn) return;
p$1.setMinimizationOn$Z.apply(this, [false]);
if (coordAreOK) this.endMinimization$();
 else p$1.restoreCoordinates.apply(this, []);
});

Clazz.newMeth(C$, 'updateAtomXYZ$', function () {
if (this.steps <= 0) return;
for (var i=0; i < this.ac; i++) {
var minAtom=this.minAtoms[i];
var atom=minAtom.atom;
atom.x=minAtom.coord[0];
atom.y=minAtom.coord[1];
atom.z=minAtom.coord[2];
}
this.vwr.refreshMeasures$Z(false);
});

Clazz.newMeth(C$, 'minimizeWithoutThread', function () {
if (!this.startMinimization$()) return;
while (this.stepMinimization$()){
}
this.endMinimization$();
}, p$1);

Clazz.newMeth(C$, 'report$S$Z', function (msg, isEcho) {
if (this.isSilent) $I$(5).info$S(msg);
 else if (isEcho) this.vwr.showString$S$Z(msg, false);
 else this.vwr.scriptEcho$S(msg);
});

Clazz.newMeth(C$, 'calculatePartialCharges$org_jmol_modelset_ModelSet$javajs_util_BS$javajs_util_BS', function (ms, bsAtoms, bsReport) {
var ff=Clazz.new_($I$(14).c$$org_jmol_minimize_Minimizer,[this]);
ff.setArrays$org_jmol_modelset_AtomA$javajs_util_BS$org_jmol_modelset_BondA$I$Z$Z(ms.at, bsAtoms, ms.bo, ms.bondCount, true, true);
this.vwr.setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA(bsAtoms, 1086326785, 0, 0, null, null, ff.getAtomTypeDescriptions$());
this.vwr.setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA(bsReport == null  ? bsAtoms : bsReport, 1111492619, 0, 0, null, ff.getPartialCharges$(), null);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
