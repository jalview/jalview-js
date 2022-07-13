(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[[0,'org.jmol.minimize.forcefield.MMFFDistanceCalc','org.jmol.minimize.forcefield.MMFFAngleCalc','org.jmol.minimize.forcefield.MMFFSBCalc','org.jmol.minimize.forcefield.MMFFTorsionCalc','org.jmol.minimize.forcefield.MMFFOOPCalc','org.jmol.minimize.forcefield.MMFFVDWCalc','org.jmol.minimize.forcefield.MMFFESCalc','javajs.util.Lst','org.jmol.minimize.MinAtom','javajs.util.PT','org.jmol.minimize.MinObject']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CalculationsMMFF", null, 'org.jmol.minimize.forcefield.Calculations');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['bondCalc','org.jmol.minimize.forcefield.Calculation','+angleCalc','+torsionCalc','+oopCalc','+vdwCalc','+esCalc','+sbCalc','mmff','org.jmol.minimize.forcefield.ForceFieldMMFF']]]

Clazz.newMeth(C$, 'c$$org_jmol_minimize_forcefield_ForceField$java_util_Map$org_jmol_minimize_MinAtomA$org_jmol_minimize_MinBondA$org_jmol_minimize_MinAngleA$org_jmol_minimize_MinTorsionA$org_jmol_minimize_MinPositionA$javajs_util_Lst', function (ff, ffParams, minAtoms, minBonds, minAngles, minTorsions, minPositions, constraints) {
;C$.superclazz.c$$org_jmol_minimize_forcefield_ForceField$org_jmol_minimize_MinAtomA$org_jmol_minimize_MinBondA$org_jmol_minimize_MinAngleA$org_jmol_minimize_MinTorsionA$org_jmol_minimize_MinPositionA$javajs_util_Lst.apply(this,[ff, minAtoms, minBonds, minAngles, minTorsions, minPositions, constraints]);C$.$init$.apply(this);
this.mmff=ff;
this.ffParams=ffParams;
this.bondCalc=Clazz.new_($I$(1,1)).set$org_jmol_minimize_forcefield_Calculations(this);
this.angleCalc=Clazz.new_($I$(2,1)).set$org_jmol_minimize_forcefield_Calculations(this);
this.sbCalc=Clazz.new_($I$(3,1)).set$org_jmol_minimize_forcefield_Calculations(this);
this.torsionCalc=Clazz.new_($I$(4,1)).set$org_jmol_minimize_forcefield_Calculations(this);
this.oopCalc=Clazz.new_($I$(5,1)).set$org_jmol_minimize_forcefield_Calculations(this);
this.vdwCalc=Clazz.new_($I$(6,1)).set$org_jmol_minimize_forcefield_Calculations(this);
this.esCalc=Clazz.new_($I$(7,1)).set$org_jmol_minimize_forcefield_Calculations(this);
}, 1);

Clazz.newMeth(C$, 'getUnits$', function () {
return "kcal";
});

Clazz.newMeth(C$, 'setupCalculations$', function () {
var calc;
var distanceCalc=Clazz.new_($I$(1,1)).set$org_jmol_minimize_forcefield_Calculations(this);
calc=this.calculations[0]=Clazz.new_($I$(8,1));
for (var i=0; i < this.bondCount; i++) distanceCalc.setData$javajs_util_Lst$org_jmol_minimize_MinBond(calc, this.minBonds[i]);

calc=this.calculations[1]=Clazz.new_($I$(8,1));
var angleCalc=Clazz.new_($I$(2,1)).set$org_jmol_minimize_forcefield_Calculations(this);
for (var i=0; i < this.angleCount; i++) angleCalc.setData$javajs_util_Lst$org_jmol_minimize_MinAngle(calc, this.minAngles[i]);

calc=this.calculations[3]=Clazz.new_($I$(8,1));
var sbCalc=Clazz.new_($I$(3,1)).set$org_jmol_minimize_forcefield_Calculations(this);
for (var i=0; i < this.angleCount; i++) sbCalc.setData$javajs_util_Lst$org_jmol_minimize_MinAngle(calc, this.minAngles[i]);

calc=this.calculations[2]=Clazz.new_($I$(8,1));
var torsionCalc=Clazz.new_($I$(4,1)).set$org_jmol_minimize_forcefield_Calculations(this);
for (var i=0; i < this.torsionCount; i++) torsionCalc.setData$javajs_util_Lst$org_jmol_minimize_MinTorsion(calc, this.minTorsions[i]);

calc=this.calculations[4]=Clazz.new_($I$(8,1));
var oopCalc=Clazz.new_($I$(5,1)).set$org_jmol_minimize_forcefield_Calculations(this);
for (var i=0; i < this.ac; i++) if (C$.isInvertible$org_jmol_minimize_MinAtom(this.minAtoms[i])) oopCalc.setData$javajs_util_Lst$I(calc, i);

this.pairSearch$javajs_util_Lst$org_jmol_minimize_forcefield_Calculation$javajs_util_Lst$org_jmol_minimize_forcefield_Calculation(this.calculations[5]=Clazz.new_($I$(8,1)), Clazz.new_($I$(6,1)).set$org_jmol_minimize_forcefield_Calculations(this), this.calculations[6]=Clazz.new_($I$(8,1)), Clazz.new_($I$(7,1)).set$org_jmol_minimize_forcefield_Calculations(this));
return true;
});

Clazz.newMeth(C$, 'isLinear$I', function (i) {
return $I$(9).isLinear$org_jmol_minimize_MinAtom(this.minAtoms[i]);
});

Clazz.newMeth(C$, 'isInvertible$org_jmol_minimize_MinAtom', function (a) {
switch (a.ffType) {
default:
return false;
case 2:
case 3:
case 10:
case 30:
case 37:
case 39:
case 40:
case 41:
case 45:
case 49:
case 54:
case 55:
case 56:
case 57:
case 58:
case 63:
case 64:
case 67:
case 69:
case 78:
case 80:
case 81:
return true;
}
}, 1);

Clazz.newMeth(C$, 'compute$I$OA', function (iType, dataIn) {
switch (iType) {
case 0:
return this.bondCalc.compute$OA(dataIn);
case 1:
return this.angleCalc.compute$OA(dataIn);
case 3:
return this.sbCalc.compute$OA(dataIn);
case 2:
return this.torsionCalc.compute$OA(dataIn);
case 4:
return this.oopCalc.compute$OA(dataIn);
case 5:
return this.vdwCalc.compute$OA(dataIn);
case 6:
return this.esCalc.compute$OA(dataIn);
}
return 0.0;
});

Clazz.newMeth(C$, 'getParameterObj$org_jmol_minimize_MinObject', function (a) {
return (a.key == null  || a.ddata != null   ? a.ddata : this.ffParams.get$O(a.key));
});

Clazz.newMeth(C$, 'getDebugHeader$I', function (iType) {
switch (iType) {
case -1:
return "MMFF94 Force Field -- T. A. Halgren, J. Comp. Chem. 5 & 6 490-519ff (1996).\n";
case 2:
return "\nT O R S I O N A L (" + this.minTorsions.length + " torsions)\n\n" + "      ATOMS           ATOM TYPES          TORSION\n" + "  I   J   K   L   I     J     K     L      ANGLE       V1       V2       V3     ENERGY\n" + "--------------------------------------------------------------------------------------\n" ;
default:
return this.getDebugHeader2$I(iType);
}
});

Clazz.newMeth(C$, 'getDebugLine$I$org_jmol_minimize_forcefield_Calculation', function (iType, c) {
var energy=this.ff.toUserUnits$D(c.energy);
switch (iType) {
case 1:
case 3:
return $I$(10,"sprintf$S$S$OA",["%11s  %-5s %-5s %-5s  %8.3f  %8.3f     %8.3f   %8.3f", "ssssFI", Clazz.array(java.lang.Object, -1, [$I$(11).decodeKey$Integer(c.key), this.minAtoms[c.ia].sType, this.minAtoms[c.ib].sType, this.minAtoms[c.ic].sType, Clazz.array(Float.TYPE, -1, [(c.theta * 57.29577951308232), c.dData[1], c.dData[0], energy]), Clazz.array(Integer.TYPE, -1, [this.minAtoms[c.ia].atom.getAtomNumber$(), this.minAtoms[c.ib].atom.getAtomNumber$(), this.minAtoms[c.ic].atom.getAtomNumber$()])])]);
case 2:
return $I$(10,"sprintf$S$S$OA",["%15s  %-5s %-5s %-5s %-5s  %8.3f %8.3f %8.3f %8.3f %8.3f", "sssssF", Clazz.array(java.lang.Object, -1, [$I$(11).decodeKey$Integer(c.key), this.minAtoms[c.ia].sType, this.minAtoms[c.ib].sType, this.minAtoms[c.ic].sType, this.minAtoms[c.id].sType, Clazz.array(Float.TYPE, -1, [(c.theta * 57.29577951308232), c.dData[0], c.dData[1], c.dData[2], energy])])]);
default:
return this.getDebugLineC$I$org_jmol_minimize_forcefield_Calculation(iType, c);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:37 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
