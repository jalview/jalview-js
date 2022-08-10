(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),I$=[[0,'org.jmol.minimize.forcefield.UFFDistanceCalc','org.jmol.minimize.forcefield.UFFAngleCalc','org.jmol.minimize.forcefield.UFFTorsionCalc','org.jmol.minimize.forcefield.UFFOOPCalc','org.jmol.minimize.forcefield.UFFVDWCalc','javajs.util.Lst']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CalculationsUFF", null, 'org.jmol.minimize.forcefield.Calculations');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['bondCalc','org.jmol.minimize.forcefield.Calculation','+angleCalc','+torsionCalc','+oopCalc','+vdwCalc']]]

Clazz.newMeth(C$, 'c$$org_jmol_minimize_forcefield_ForceField$java_util_Map$org_jmol_minimize_MinAtomA$org_jmol_minimize_MinBondA$org_jmol_minimize_MinAngleA$org_jmol_minimize_MinTorsionA$org_jmol_minimize_MinPositionA$javajs_util_Lst', function (ff, ffParams, minAtoms, minBonds, minAngles, minTorsions, minPositions, constraints) {
;C$.superclazz.c$$org_jmol_minimize_forcefield_ForceField$org_jmol_minimize_MinAtomA$org_jmol_minimize_MinBondA$org_jmol_minimize_MinAngleA$org_jmol_minimize_MinTorsionA$org_jmol_minimize_MinPositionA$javajs_util_Lst.apply(this,[ff, minAtoms, minBonds, minAngles, minTorsions, minPositions, constraints]);C$.$init$.apply(this);
this.ffParams=ffParams;
this.bondCalc=Clazz.new_($I$(1,1)).set$org_jmol_minimize_forcefield_Calculations(this);
this.angleCalc=Clazz.new_($I$(2,1)).set$org_jmol_minimize_forcefield_Calculations(this);
this.torsionCalc=Clazz.new_($I$(3,1)).set$org_jmol_minimize_forcefield_Calculations(this);
this.oopCalc=Clazz.new_($I$(4,1)).set$org_jmol_minimize_forcefield_Calculations(this);
this.vdwCalc=Clazz.new_($I$(5,1)).set$org_jmol_minimize_forcefield_Calculations(this);
}, 1);

Clazz.newMeth(C$, 'getUnits$', function () {
return "kJ";
});

Clazz.newMeth(C$, 'setupCalculations$', function () {
var calc;
var distanceCalc=Clazz.new_($I$(1,1)).set$org_jmol_minimize_forcefield_Calculations(this);
calc=this.calculations[0]=Clazz.new_($I$(6,1));
for (var i=0; i < this.bondCount; i++) {
var bond=this.minBonds[i];
var bondOrder=bond.order;
if (bond.isAromatic) bondOrder=1.5;
if (bond.isAmide) bondOrder=1.41;
distanceCalc.setData$javajs_util_Lst$I$I$D(calc, bond.data[0], bond.data[1], bondOrder);
}
calc=this.calculations[1]=Clazz.new_($I$(6,1));
var angleCalc=Clazz.new_($I$(2,1)).set$org_jmol_minimize_forcefield_Calculations(this);
for (var i=this.minAngles.length; --i >= 0; ) angleCalc.setData$javajs_util_Lst$IA(calc, this.minAngles[i].data);

calc=this.calculations[2]=Clazz.new_($I$(6,1));
var torsionCalc=Clazz.new_($I$(3,1)).set$org_jmol_minimize_forcefield_Calculations(this);
for (var i=this.minTorsions.length; --i >= 0; ) torsionCalc.setData$javajs_util_Lst$IA(calc, this.minTorsions[i].data);

calc=this.calculations[4]=Clazz.new_($I$(6,1));
var oopCalc=Clazz.new_($I$(4,1)).set$org_jmol_minimize_forcefield_Calculations(this);
var elemNo;
for (var i=0; i < this.ac; i++) {
var a=this.minAtoms[i];
if (a.nBonds == 3 && C$.isInvertible$I(elemNo=a.atom.getElementNumber$()) ) oopCalc.setData$javajs_util_Lst$I$I$D(calc, i, elemNo, 0);
}
this.pairSearch$javajs_util_Lst$org_jmol_minimize_forcefield_Calculation$javajs_util_Lst$org_jmol_minimize_forcefield_Calculation(this.calculations[5]=Clazz.new_($I$(6,1)), Clazz.new_($I$(5,1)).set$org_jmol_minimize_forcefield_Calculations(this), null, null);
return true;
});

Clazz.newMeth(C$, 'isInvertible$I', function (n) {
switch (n) {
case 6:
case 7:
case 8:
case 15:
case 33:
case 51:
case 83:
return true;
default:
return false;
}
}, 1);

Clazz.newMeth(C$, 'calculateR0$D$D$D$D$D', function (ri, rj, chiI, chiJ, bondorder) {
var rbo=-0.1332 * (ri + rj) * Math.log(bondorder) ;
var dchi=Math.sqrt(chiI) - Math.sqrt(chiJ);
var ren=ri * rj * dchi * dchi  / (chiI * ri + chiJ * rj);
return (ri + rj + rbo  - ren);
}, 1);

Clazz.newMeth(C$, 'compute$I$OA', function (iType, dataIn) {
switch (iType) {
case 0:
return this.bondCalc.compute$OA(dataIn);
case 1:
return this.angleCalc.compute$OA(dataIn);
case 2:
return this.torsionCalc.compute$OA(dataIn);
case 4:
return this.oopCalc.compute$OA(dataIn);
case 5:
return this.vdwCalc.compute$OA(dataIn);
}
return 0.0;
});

Clazz.newMeth(C$, 'getDebugHeader$I', function (iType) {
switch (iType) {
case -1:
return "Universal Force Field -- Rappe, A. K., et. al.; J. Am. Chem. Soc. (1992) 114(25) p. 10024-10035\n";
default:
return this.getDebugHeader2$I(iType);
}
});

Clazz.newMeth(C$, 'getParameterObj$org_jmol_minimize_MinObject', function (o) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:37 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
