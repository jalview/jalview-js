(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),p$1={},I$=[[0,'javajs.util.AU','javajs.util.SB','javajs.util.V3d','org.jmol.minimize.MMConstraint','javajs.util.Lst','org.jmol.minimize.Util','javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Calculations");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.calculations=$I$(1).createArrayOfArrayList$I(7);
this.logData=Clazz.new_($I$(2,1));
this.da=Clazz.new_($I$(3,1));
this.db=Clazz.new_($I$(3,1));
this.dc=Clazz.new_($I$(3,1));
this.dd=Clazz.new_($I$(3,1));
this.v1=Clazz.new_($I$(3,1));
this.v2=Clazz.new_($I$(3,1));
this.v3=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['haveConstraints','isPreliminary','gradients','silent','logging','loggingEnabled'],'I',['ac','bondCount','angleCount','torsionCount','ia','ib','ic','id'],'O',['parA','org.jmol.minimize.forcefield.FFParam','+parB','+parC','ff','org.jmol.minimize.forcefield.ForceField','calculations','javajs.util.Lst[]','ffParams','java.util.Map','minAtoms','org.jmol.minimize.MinAtom[]','minBonds','org.jmol.minimize.MinBond[]','minAngles','org.jmol.minimize.MinAngle[]','minTorsions','org.jmol.minimize.MinTorsion[]','minPositions','org.jmol.minimize.MinPosition[]','constraintsByType','org.jmol.minimize.MMConstraint[][]','logData','javajs.util.SB','da','javajs.util.V3d','+db','+dc','+dd','+v1','+v2','+v3']]]

Clazz.newMeth(C$, 'getParameter$O', function (o) {
return this.ffParams.get$O(o);
});

Clazz.newMeth(C$, 'c$$org_jmol_minimize_forcefield_ForceField$org_jmol_minimize_MinAtomA$org_jmol_minimize_MinBondA$org_jmol_minimize_MinAngleA$org_jmol_minimize_MinTorsionA$org_jmol_minimize_MinPositionA$javajs_util_Lst', function (ff, minAtoms, minBonds, minAngles, minTorsions, minPositions, constraints) {
;C$.$init$.apply(this);
this.ff=ff;
this.minAtoms=minAtoms;
this.minBonds=minBonds;
this.minAngles=minAngles;
this.minTorsions=minTorsions;
this.minPositions=minPositions;
this.ac=minAtoms.length;
this.bondCount=minBonds.length;
this.angleCount=minAngles.length;
this.torsionCount=minTorsions.length;
this.setConstraints$javajs_util_Lst(constraints);
}, 1);

Clazz.newMeth(C$, 'setConstraints$javajs_util_Lst', function (constraints) {
if (constraints == null  || constraints.isEmpty$() ) return;
this.constraintsByType=Clazz.array($I$(4), -2, [null, null, null]);
this.haveConstraints=true;
var lists=Clazz.array($I$(5), [3]);
for (var i=0, n=constraints.size$(); i < n; i++) {
var c=constraints.get$I(i);
if (lists[c.type] == null ) lists[c.type]=Clazz.new_($I$(5,1));
lists[c.type].addLast$O(c);
}
for (var type=0; type <= 2; type++) {
var list=lists[type];
if (list != null ) this.constraintsByType[type]=list.toArray$OA(Clazz.array($I$(4), [list.size$()]));
}
});

Clazz.newMeth(C$, 'addForce$javajs_util_V3d$I$D', function (v, i, dE) {
this.minAtoms[i].force[0] += v.x * dE;
this.minAtoms[i].force[1] += v.y * dE;
this.minAtoms[i].force[2] += v.z * dE;
});

Clazz.newMeth(C$, 'setSilent$Z', function (TF) {
this.silent=TF;
});

Clazz.newMeth(C$, 'getLogData$', function () {
return this.logData.toString();
});

Clazz.newMeth(C$, 'appendLogData$S', function (s) {
this.logData.append$S(s).append$S("\n");
});

Clazz.newMeth(C$, 'setLoggingEnabled$Z', function (TF) {
this.loggingEnabled=TF;
if (this.loggingEnabled) this.logData=Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'setPreliminary$Z', function (TF) {
this.isPreliminary=TF;
});

Clazz.newMeth(C$, 'pairSearch$javajs_util_Lst$org_jmol_minimize_forcefield_Calculation$javajs_util_Lst$org_jmol_minimize_forcefield_Calculation', function (calc1, pc1, calc2, pc2) {
for (var i=0; i < this.ac - 1; i++) {
var bsVdw=this.minAtoms[i].bsVdw;
for (var j=bsVdw.nextSetBit$I(0); j >= 0; j=bsVdw.nextSetBit$I(j + 1)) {
pc1.setData$javajs_util_Lst$I$I$D(calc1, i, j, 0);
if (pc2 != null ) pc2.setData$javajs_util_Lst$I$I$D(calc2, i, j, 0);
}
}
});

Clazz.newMeth(C$, 'calc$I$Z$Z', function (iType, gradients, canConstrain) {
this.logging=this.loggingEnabled && !this.silent ;
this.gradients=gradients;
var calcs=this.calculations[iType];
var nCalc;
var energy=0;
if (calcs == null  || (nCalc=calcs.size$()) == 0 ) return 0;
if (this.logging) this.appendLogData$S(this.getDebugHeader$I(iType));
for (var ii=0; ii < nCalc; ii++) energy += this.compute$I$OA(iType, this.calculations[iType].get$I(ii));

if (this.logging) this.appendLogData$S(this.getDebugFooter$I$D(iType, energy));
if (canConstrain && this.haveConstraints && this.constraintsByType[iType] != null   ) energy += p$1.constraintEnergy$I.apply(this, [iType]);
return energy;
}, p$1);

Clazz.newMeth(C$, 'energyStrBnd$Z', function (gradients) {
return 0.0;
});

Clazz.newMeth(C$, 'energyBond$Z', function (gradients) {
return p$1.calc$I$Z$Z.apply(this, [0, gradients, true]);
});

Clazz.newMeth(C$, 'energyAngle$Z', function (gradients) {
return p$1.calc$I$Z$Z.apply(this, [1, gradients, true]);
});

Clazz.newMeth(C$, 'energyTorsion$Z', function (gradients) {
return p$1.calc$I$Z$Z.apply(this, [2, gradients, true]);
});

Clazz.newMeth(C$, 'energyStretchBend$Z', function (gradients) {
return p$1.calc$I$Z$Z.apply(this, [3, gradients, false]);
});

Clazz.newMeth(C$, 'energyOOP$Z', function (gradients) {
return p$1.calc$I$Z$Z.apply(this, [4, gradients, false]);
});

Clazz.newMeth(C$, 'energyVDW$Z', function (gradients) {
return p$1.calc$I$Z$Z.apply(this, [5, gradients, false]);
});

Clazz.newMeth(C$, 'energyES$Z', function (gradients) {
return p$1.calc$I$Z$Z.apply(this, [6, gradients, false]);
});

Clazz.newMeth(C$, 'constraintEnergy$I', function (iType) {
var constraints=this.constraintsByType[iType];
var value=0;
var k=0;
var energy=0;
for (var i=constraints.length; --i >= 0; ) {
var c=constraints[i];
var minList=c.minList;
var targetValue=c.value;
switch (iType) {
case 2:
this.id=minList[3];
if (this.gradients) this.dd.setA$DA(this.minAtoms[this.id].coord);
case 1:
this.ic=minList[2];
if (this.gradients) this.dc.setA$DA(this.minAtoms[this.ic].coord);
case 0:
this.ib=minList[1];
this.ia=minList[0];
if (this.gradients) {
this.db.setA$DA(this.minAtoms[this.ib].coord);
this.da.setA$DA(this.minAtoms[this.ia].coord);
}break;
}
k=10000.0;
switch (iType) {
case 2:
targetValue *= 0.017453292519943295;
value=(this.gradients ? $I$(6).restorativeForceAndTorsionAngleRadians$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d(this.da, this.db, this.dc, this.dd) : $I$(6).getTorsionAngleRadians$DA$DA$DA$DA$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d(this.minAtoms[this.ia].coord, this.minAtoms[this.ib].coord, this.minAtoms[this.ic].coord, this.minAtoms[this.id].coord, this.v1, this.v2, this.v3));
if (value < 0  && targetValue >= 1.5707963267948966  ) value += 6.283185307179586;
 else if (value > 0  && targetValue <= -1.5707963267948966  ) targetValue += 6.283185307179586;
break;
case 1:
targetValue *= 0.017453292519943295;
value=(this.gradients ? $I$(6).restorativeForceAndAngleRadians$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d(this.da, this.db, this.dc) : $I$(6).getAngleRadiansABC$DA$DA$DA(this.minAtoms[this.ia].coord, this.minAtoms[this.ib].coord, this.minAtoms[this.ic].coord));
break;
case 0:
value=(this.gradients ? $I$(6).restorativeForceAndDistance$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d(this.da, this.db, this.dc) : Math.sqrt($I$(6).distance2$DA$DA(this.minAtoms[this.ia].coord, this.minAtoms[this.ib].coord)));
break;
}
energy += p$1.constrainQuadratic$D$D$D$I.apply(this, [value, targetValue, k, iType]);
}
return energy;
}, p$1);

Clazz.newMeth(C$, 'constrainQuadratic$D$D$D$I', function (value, targetValue, k, iType) {
if (!$I$(6).isFinite$D(value)) return 0;
var delta=value - targetValue;
if (this.gradients) {
var dE=2.0 * k * delta ;
switch (iType) {
case 2:
this.addForce$javajs_util_V3d$I$D(this.dd, this.id, dE);
case 1:
this.addForce$javajs_util_V3d$I$D(this.dc, this.ic, dE);
case 0:
this.addForce$javajs_util_V3d$I$D(this.db, this.ib, dE);
this.addForce$javajs_util_V3d$I$D(this.da, this.ia, dE);
}
}return k * delta * delta ;
}, p$1);

Clazz.newMeth(C$, 'getConstraintList$', function () {
if (this.constraintsByType == null ) return;
this.appendLogData$S("C O N S T R A I N T S\n---------------------");
for (var type=0; type <= 2; type++) {
var constraints=this.constraintsByType[type];
if (constraints == null ) continue;
for (var i=0, n=constraints.length; i < n; i++) {
var c=constraints[i];
var minList=c.minList;
var targetValue=c.value;
switch (c.type) {
case 2:
this.id=minList[3];
case 1:
this.ic=minList[2];
case 0:
this.ib=minList[1];
this.ia=minList[0];
}
switch (c.type) {
case 0:
this.appendLogData$S((function(a,f){return f.apply(null,a)})(["%3d %3d  %-5s %-5s  %12.6f", "ssFI", Clazz.array(java.lang.Object, -1, [this.minAtoms[this.ia].atom.getAtomName$(), this.minAtoms[this.ib].atom.getAtomName$(), Clazz.array(Float.TYPE, -1, [targetValue]), Clazz.array(Integer.TYPE, -1, [this.minAtoms[this.ia].atom.getAtomNumber$(), this.minAtoms[this.ib].atom.getAtomNumber$()])])],$I$(7).sprintf$S$S$OA));
break;
case 1:
this.appendLogData$S((function(a,f){return f.apply(null,a)})(["%3d %3d %3d  %-5s %-5s %-5s  %12.6f", "sssFI", Clazz.array(java.lang.Object, -1, [this.minAtoms[this.ia].atom.getAtomName$(), this.minAtoms[this.ib].atom.getAtomName$(), this.minAtoms[this.ic].atom.getAtomName$(), Clazz.array(Float.TYPE, -1, [targetValue]), Clazz.array(Integer.TYPE, -1, [this.minAtoms[this.ia].atom.getAtomNumber$(), this.minAtoms[this.ib].atom.getAtomNumber$(), this.minAtoms[this.ic].atom.getAtomNumber$()])])],$I$(7).sprintf$S$S$OA));
break;
case 2:
this.appendLogData$S((function(a,f){return f.apply(null,a)})(["%3d %3d %3d %3d  %-5s %-5s %-5s %-5s  %3d %8.3f     %8.3f     %8.3f     %8.3f", "ssssFI", Clazz.array(java.lang.Object, -1, [this.minAtoms[this.ia].atom.getAtomName$(), this.minAtoms[this.ib].atom.getAtomName$(), this.minAtoms[this.ic].atom.getAtomName$(), this.minAtoms[this.id].atom.getAtomName$(), Clazz.array(Float.TYPE, -1, [targetValue]), Clazz.array(Integer.TYPE, -1, [this.minAtoms[this.ia].atom.getAtomNumber$(), this.minAtoms[this.ib].atom.getAtomNumber$(), this.minAtoms[this.ic].atom.getAtomNumber$(), this.minAtoms[this.id].atom.getAtomNumber$()])])],$I$(7).sprintf$S$S$OA));
break;
}
}
}
this.appendLogData$S("---------------------\n");
});

Clazz.newMeth(C$, 'getAtomList$S', function (title) {
var trailer="--------------------------------------------------------------------------------------------------\n";
var sb=Clazz.new_($I$(2,1));
sb.append$S("\n" + title + "\n\n" + " ATOM    X        Y        Z    TYPE       GRADX    GRADY    GRADZ  " + "---------BONDED ATOMS--------\n" + trailer );
for (var i=0; i < this.ac; i++) {
var atom=this.minAtoms[i];
var others=atom.getBondedAtomIndexes$();
var iVal=Clazz.array(Integer.TYPE, [others.length + 2]);
iVal[0]=atom.atom.getAtomNumber$();
iVal[1]=(atom.ffAtomType == null  ? 0 : atom.ffAtomType.mmType);
var s="   ";
for (var j=0; j < others.length; j++) {
s += " %3d";
iVal[j + 2]=this.minAtoms[others[j]].atom.getAtomNumber$();
}
sb.append$S((function(a,f){return f.apply(null,a)})(["%3d %8.3f %8.3f %8.3f %-5s %2d %8.3f %8.3f %8.3f" + s + "\n" , "sFI", Clazz.array(java.lang.Object, -1, [atom.sType, Clazz.array(Float.TYPE, -1, [atom.coord[0], atom.coord[1], atom.coord[2], atom.force[0], atom.force[1], atom.force[2]]), iVal])],$I$(7).sprintf$S$S$OA));
}
sb.append$S(trailer + "\n\n");
return sb.toString();
});

Clazz.newMeth(C$, 'getDebugHeader2$I', function (iType) {
switch (iType) {
case -1:
break;
case 0:
return "\nB O N D   S T R E T C H I N G (" + this.bondCount + " bonds)\n\n" + "  ATOMS  ATOM TYPES   BOND    BOND       IDEAL      FORCE\n" + "  I   J   I     J     TYPE   LENGTH     LENGTH    CONSTANT      DELTA     ENERGY\n" + "--------------------------------------------------------------------------------" ;
case 1:
return "\nA N G L E   B E N D I N G (" + this.minAngles.length + " angles)\n\n" + "    ATOMS      ATOM TYPES        VALENCE    IDEAL        FORCE\n" + "  I   J   K   I     J     K       ANGLE     ANGLE      CONSTANT     ENERGY\n" + "--------------------------------------------------------------------------" ;
case 3:
return "\nS T R E T C H   B E N D I N G (" + (this.minAngles.length * 2) + " angles)\n\n" + "    ATOMS      ATOM TYPES        VALENCE    IDEAL        FORCE\n" + "  I   J   K   I     J     K       ANGLE     ANGLE      CONSTANT     ENERGY\n" + "--------------------------------------------------------------------------" ;
case 2:
return "\nT O R S I O N A L (" + this.minTorsions.length + " torsions)\n\n" + "      ATOMS           ATOM TYPES            n    COS          FORCE      TORSION\n" + "  I   J   K   L   I     J     K     L          (n phi0)      CONSTANT     ANGLE        ENERGY\n" + "---------------------------------------------------------------------------------------------" ;
case 4:
return "\nO U T - O F - P L A N E   B E N D I N G\n\n      ATOMS           ATOM TYPES             OOP        FORCE \n  I   J   K   L   I     J     K     L       ANGLE     CONSTANT      ENERGY\n--------------------------------------------------------------------------";
case 5:
return "\nV A N   D E R   W A A L S  (partial list)\n\n  ATOMS  ATOM TYPES\n  I   J   I     J      Rij       kij     ENERGY\n-----------------------------------------------";
case 6:
return "\nE L E C T R O S T A T I C   I N T E R A C T I O N S  (partial list)\n\n  ATOMS  ATOM TYPES \n  I   J   I     J      Rij      f          Qi          Qj    ENERGY\n-------------------------------------------------------------------";
}
return "";
});

Clazz.newMeth(C$, 'getDebugLine$I$org_jmol_minimize_forcefield_Calculation', function (iType, c) {
return this.getDebugLineC$I$org_jmol_minimize_forcefield_Calculation(iType, c);
});

Clazz.newMeth(C$, 'getDebugLineC$I$org_jmol_minimize_forcefield_Calculation', function (iType, c) {
var energy=this.ff.toUserUnits$D(c.energy);
switch (iType) {
case 0:
return (function(a,f){return f.apply(null,a)})(["%3d %3d  %-5s %-5s  %4.2f%8.3f   %8.3f     %8.3f   %8.3f   %8.3f", "ssFI", Clazz.array(java.lang.Object, -1, [this.minAtoms[c.ia].sType, this.minAtoms[c.ib].sType, Clazz.array(Float.TYPE, -1, [0, c.rab, c.dData[1], c.dData[0], c.delta, energy]), Clazz.array(Integer.TYPE, -1, [this.minAtoms[c.ia].atom.getAtomNumber$(), this.minAtoms[c.ib].atom.getAtomNumber$()])])],$I$(7).sprintf$S$S$OA);
case 1:
case 3:
return (function(a,f){return f.apply(null,a)})(["%3d %3d %3d  %-5s %-5s %-5s  %8.3f  %8.3f     %8.3f   %8.3f", "sssFI", Clazz.array(java.lang.Object, -1, [this.minAtoms[c.ia].sType, this.minAtoms[c.ib].sType, this.minAtoms[c.ic].sType, Clazz.array(Float.TYPE, -1, [(c.theta * 57.29577951308232), c.dData[1], c.dData[0], energy]), Clazz.array(Integer.TYPE, -1, [this.minAtoms[c.ia].atom.getAtomNumber$(), this.minAtoms[c.ib].atom.getAtomNumber$(), this.minAtoms[c.ic].atom.getAtomNumber$()])])],$I$(7).sprintf$S$S$OA);
case 2:
return (function(a,f){return f.apply(null,a)})(["%3d %3d %3d %3d  %-5s %-5s %-5s %-5s  %3d %8.3f     %8.3f     %8.3f     %8.3f", "ssssFI", Clazz.array(java.lang.Object, -1, [this.minAtoms[c.ia].sType, this.minAtoms[c.ib].sType, this.minAtoms[c.ic].sType, this.minAtoms[c.id].sType, Clazz.array(Float.TYPE, -1, [c.dData[1], c.dData[0], (c.theta * 57.29577951308232), energy]), Clazz.array(Integer.TYPE, -1, [this.minAtoms[c.ia].atom.getAtomNumber$(), this.minAtoms[c.ib].atom.getAtomNumber$(), this.minAtoms[c.ic].atom.getAtomNumber$(), this.minAtoms[c.id].atom.getAtomNumber$(), c.iData[4]])])],$I$(7).sprintf$S$S$OA);
case 4:
return (function(a,f){return f.apply(null,a)})(["%3d %3d %3d %3d  %-5s %-5s %-5s %-5s  %8.3f   %8.3f     %8.3f", "ssssFI", Clazz.array(java.lang.Object, -1, [this.minAtoms[c.ia].sType, this.minAtoms[c.ib].sType, this.minAtoms[c.ic].sType, this.minAtoms[c.id].sType, Clazz.array(Float.TYPE, -1, [(c.theta * 57.29577951308232), c.dData[0], energy]), Clazz.array(Integer.TYPE, -1, [this.minAtoms[c.ia].atom.getAtomNumber$(), this.minAtoms[c.ib].atom.getAtomNumber$(), this.minAtoms[c.ic].atom.getAtomNumber$(), this.minAtoms[c.id].atom.getAtomNumber$()])])],$I$(7).sprintf$S$S$OA);
case 5:
return (function(a,f){return f.apply(null,a)})(["%3d %3d  %-5s %-5s %6.3f  %8.3f  %8.3f", "ssFI", Clazz.array(java.lang.Object, -1, [this.minAtoms[c.iData[0]].sType, this.minAtoms[c.iData[1]].sType, Clazz.array(Float.TYPE, -1, [c.rab, c.dData[0], energy]), Clazz.array(Integer.TYPE, -1, [this.minAtoms[c.ia].atom.getAtomNumber$(), this.minAtoms[c.ib].atom.getAtomNumber$()])])],$I$(7).sprintf$S$S$OA);
case 6:
return (function(a,f){return f.apply(null,a)})(["%3d %3d  %-5s %-5s %6.3f  %8.3f  %8.3f  %8.3f  %8.3f", "ssFI", Clazz.array(java.lang.Object, -1, [this.minAtoms[c.iData[0]].sType, this.minAtoms[c.iData[1]].sType, Clazz.array(Float.TYPE, -1, [c.rab, c.dData[0], c.dData[1], c.dData[2], energy]), Clazz.array(Integer.TYPE, -1, [this.minAtoms[c.ia].atom.getAtomNumber$(), this.minAtoms[c.ib].atom.getAtomNumber$()])])],$I$(7).sprintf$S$S$OA);
}
return "";
});

Clazz.newMeth(C$, 'getDebugFooter$I$D', function (iType, energy) {
var s="";
switch (iType) {
case 0:
s="BOND STRETCHING";
break;
case 1:
s="ANGLE BENDING";
break;
case 2:
s="TORSIONAL";
break;
case 4:
s="OUT-OF-PLANE BENDING";
break;
case 3:
s="STRETCH BENDING";
break;
case 5:
s="VAN DER WAALS";
break;
case 6:
s="ELECTROSTATIC ENERGY";
break;
}
return (function(a,f){return f.apply(null,a)})(["\n     TOTAL %s ENERGY = %8.3f %s/mol\n", "sfs", Clazz.array(java.lang.Object, -1, [s, Float.valueOf$F(this.ff.toUserUnits$D(energy)), this.ff.minimizer.units])],$I$(7).sprintf$S$S$OA);
});

Clazz.newMeth(C$, 'setPairVariables$org_jmol_minimize_forcefield_Calculation', function (c) {
if (this.gradients) {
this.setCoords$org_jmol_minimize_forcefield_Calculation$I(c, 2);
c.rab=$I$(6).restorativeForceAndDistance$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d(this.da, this.db, this.dc);
} else {
c.rab=Math.sqrt($I$(6).distance2$DA$DA(this.minAtoms[c.ia].coord, this.minAtoms[c.ib].coord));
}if ($I$(6).isNearZero2$D$D(c.rab, 0.001)) c.rab=0.001;
});

Clazz.newMeth(C$, 'setAngleVariables$org_jmol_minimize_forcefield_Calculation', function (c) {
if (this.gradients) {
this.setCoords$org_jmol_minimize_forcefield_Calculation$I(c, 3);
c.theta=$I$(6).restorativeForceAndAngleRadians$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d(this.da, this.db, this.dc);
} else {
c.theta=$I$(6).getAngleRadiansABC$DA$DA$DA(this.minAtoms[c.ia].coord, this.minAtoms[c.ib].coord, this.minAtoms[c.ic].coord);
}if (!$I$(6).isFinite$D(c.theta)) c.theta=0.0;
});

Clazz.newMeth(C$, 'setOopVariables$org_jmol_minimize_forcefield_Calculation$Z', function (c, fixTheta) {
this.setCoords$org_jmol_minimize_forcefield_Calculation$I(c, 4);
if (this.gradients) {
c.theta=$I$(6).restorativeForceAndOutOfPlaneAngleRadians$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d(this.da, this.db, this.dc, this.dd, this.v1, this.v2, this.v3);
} else {
c.theta=$I$(6).pointPlaneAngleRadians$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$Z(this.da, this.db, this.dc, this.dd, this.v1, this.v2, this.v3, fixTheta);
}if (!$I$(6).isFinite$D(c.theta)) c.theta=0.0;
});

Clazz.newMeth(C$, 'setTorsionVariables$org_jmol_minimize_forcefield_Calculation', function (c) {
if (this.gradients) {
this.setCoords$org_jmol_minimize_forcefield_Calculation$I(c, 4);
c.theta=$I$(6).restorativeForceAndTorsionAngleRadians$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d(this.da, this.db, this.dc, this.dd);
if (!$I$(6).isFinite$D(c.theta)) c.theta=1.7453292519943296E-5;
} else {
c.theta=$I$(6).getTorsionAngleRadians$DA$DA$DA$DA$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d(this.minAtoms[c.ia].coord, this.minAtoms[c.ib].coord, this.minAtoms[c.ic].coord, this.minAtoms[c.id].coord, this.v1, this.v2, this.v3);
}});

Clazz.newMeth(C$, 'setCoords$org_jmol_minimize_forcefield_Calculation$I', function (c, n) {
switch (n) {
case 4:
this.da.setA$DA(this.minAtoms[c.ia].coord);
case 3:
this.db.setA$DA(this.minAtoms[c.ib].coord);
case 2:
this.dc.setA$DA(this.minAtoms[c.ic].coord);
case 1:
this.dd.setA$DA(this.minAtoms[c.id].coord);
}
});

Clazz.newMeth(C$, 'addForces$org_jmol_minimize_forcefield_Calculation$I', function (c, n) {
switch (n) {
case 4:
this.addForce$javajs_util_V3d$I$D(this.dd, c.id, c.dE);
case 3:
this.addForce$javajs_util_V3d$I$D(this.dc, c.ic, c.dE);
case 2:
this.addForce$javajs_util_V3d$I$D(this.db, c.ib, c.dE);
case 1:
this.addForce$javajs_util_V3d$I$D(this.da, c.ia, c.dE);
}
});

Clazz.newMeth(C$, 'isLinear$I', function (i) {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
