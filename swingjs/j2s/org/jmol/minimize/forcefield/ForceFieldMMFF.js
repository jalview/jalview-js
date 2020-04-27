(function(){var P$=Clazz.newPackage("org.jmol.minimize.forcefield"),p$1={},I$=[[0,'org.jmol.minimize.forcefield.CalculationsMMFF','javajs.util.AU','java.util.Hashtable','org.jmol.util.Logger','org.jmol.minimize.MinObject','org.jmol.util.Escape','javajs.util.PT','javajs.util.Lst','org.jmol.minimize.forcefield.AtomType','javajs.util.BS','org.jmol.util.BSUtil','org.jmol.minimize.MinAtom','org.jmol.util.Elements']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ForceFieldMMFF", null, 'org.jmol.minimize.forcefield.ForceField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.typeData=Clazz.array(Integer.TYPE, [4]);
},1);

C$.$fields$=[['S',['line'],'O',['+rawAtomTypes','+rawBondTypes','rawMMFF94Charges','float[]','vRings','javajs.util.Lst[]','typeData','int[]']]
,['O',['atomTypes','javajs.util.Lst','ffParams','java.util.Map','types','int[]','+sbMap','+equivalentTypes']]]

Clazz.newMeth(C$, 'getAtomTypeDescriptions$', function () {
return C$.getAtomTypeDescs$IA(this.rawAtomTypes);
});

Clazz.newMeth(C$, 'getPartialCharges$', function () {
return this.rawMMFF94Charges;
});

Clazz.newMeth(C$, 'c$$org_jmol_minimize_Minimizer', function (m) {
Clazz.super_(C$, this);
this.minimizer=m;
this.name="MMFF";
p$1.getParameters.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
});

Clazz.newMeth(C$, 'setModel$javajs_util_BS$I', function (bsElements, elemnoMax) {
var m=this.minimizer;
if (!this.setArrays$org_jmol_modelset_AtomA$javajs_util_BS$org_jmol_modelset_BondA$I$Z$Z(m.atoms, m.bsAtoms, m.bonds, m.rawBondCount, false, false)) return false;
this.setModelFields$();
if (!p$1.fixTypes.apply(this, [])) return false;
this.calc=Clazz.new_($I$(1,1).c$$org_jmol_minimize_forcefield_ForceField$java_util_Map$org_jmol_minimize_MinAtomA$org_jmol_minimize_MinBondA$org_jmol_minimize_MinAngleA$org_jmol_minimize_MinTorsionA$org_jmol_minimize_MinPositionA$javajs_util_Lst,[this, C$.ffParams, this.minAtoms, this.minBonds, this.minAngles, this.minTorsions, this.minPositions, this.minimizer.constraints]);
this.calc.setLoggingEnabled$Z(true);
return this.calc.setupCalculations$();
});

Clazz.newMeth(C$, 'setArrays$org_jmol_modelset_AtomA$javajs_util_BS$org_jmol_modelset_BondA$I$Z$Z', function (atoms, bsAtoms, bonds, rawBondCount, doRound, allowUnknowns) {
var m=this.minimizer;
this.vRings=$I$(2).createArrayOfArrayList$I(4);
this.rawAtomTypes=C$.setAtomTypes$org_jmol_modelset_AtomA$javajs_util_BS$org_jmol_api_SmilesMatcherInterface$javajs_util_LstA$Z(atoms, bsAtoms, m.vwr.getSmilesMatcher$(), this.vRings, allowUnknowns);
if (this.rawAtomTypes == null ) return false;
this.rawBondTypes=p$1.setBondTypes$org_jmol_modelset_BondA$I$javajs_util_BS.apply(this, [bonds, rawBondCount, bsAtoms]);
this.rawMMFF94Charges=C$.calculatePartialCharges$org_jmol_modelset_BondA$IA$org_jmol_modelset_AtomA$IA$javajs_util_BS$Z(bonds, this.rawBondTypes, atoms, this.rawAtomTypes, bsAtoms, doRound);
return true;
});

Clazz.newMeth(C$, 'getParameters', function () {
if (C$.ffParams != null ) return;
p$1.getAtomTypes.apply(this, []);
var data=Clazz.new_($I$(3,1));
var resourceName="mmff94.par.txt";
if ($I$(4).debugging) $I$(4).debug$S("reading data from " + resourceName);
var br=null;
var line=null;
try {
br=this.getBufferedReader$S(resourceName);
var pt=0;
var dataType=0;
while (true){
while ((pt=(line=br.readLine$()).indexOf$S(".PAR")) < 0){
}
if ((dataType=C$.types[("END.BCI.CHG.ANG.NDK.OND.OOP.TBN.FSB.TOR.VDW.".indexOf$S(line.substring$I$I(pt - 3, pt + 1))/4|0)]) < 1) break;
p$1.readParams$java_io_BufferedReader$I$java_util_Map.apply(this, [br, dataType, data]);
}
br.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"org.jmol.viewer.JmolAsyncException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('org.jmol.viewer.JmolAsyncException').c$$S,[e.getFileName$()]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
System.err.println$S("Exception " + e.toString() + " in getResource " + resourceName + " line=" + line );
}
} else {
throw e$$;
}
} finally {
try {
br.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
C$.ffParams=data;
}, p$1);

Clazz.newMeth(C$, 'readParams$java_io_BufferedReader$I$java_util_Map', function (br, dataType, data) {
var value=null;
var a1=0;
var a2=127;
var a3=127;
var a4=127;
var type=0;
switch (dataType) {
case 3:
case 5:
case 9:
break;
case 34:
a4=124;
break;
case 21:
a4=125;
break;
case 546:
a4=123;
type=0;
break;
case 13:
type=6;
break;
case 1:
type=0;
break;
case 37:
a4=126;
type=0;
break;
case 17:
a4=122;
type=0;
break;
}
while (!br.readLine$().startsWith$S("*")){
}
while ((this.line=br.readLine$()).startsWith$S("*")){
}
do {
switch (dataType) {
case 546:
case 13:
case 1:
case 37:
break;
case 17:
if (this.line.charAt$I(5) != " ") continue;
break;
case 34:
if (this.line.charAt$I(0) == "4") continue;
case 5:
case 3:
case 21:
case 9:
type=(this.line.charCodeAt$I(0)) - 48;
break;
}
switch (dataType) {
case 13:
case 9:
a4=p$1.ival$I$I.apply(this, [18, 20]);
case 5:
case 21:
case 37:
a3=p$1.ival$I$I.apply(this, [13, 15]);
case 546:
case 3:
case 34:
a2=p$1.ival$I$I.apply(this, [8, 10]);
case 1:
case 17:
a1=p$1.ival$I$I.apply(this, [3, 5]);
break;
}
switch (dataType) {
case 546:
value=Clazz.array(Double.TYPE, -1, [p$1.dval$I$I.apply(this, [19, 25]), p$1.dval$I$I.apply(this, [13, 18])]);
break;
case 3:
value=Clazz.array(Double.TYPE, -1, [p$1.dval$I$I.apply(this, [14, 20]), p$1.dval$I$I.apply(this, [25, 31])]);
break;
case 5:
case 21:
value=Clazz.array(Double.TYPE, -1, [p$1.dval$I$I.apply(this, [19, 25]), p$1.dval$I$I.apply(this, [28, 35])]);
break;
case 34:
value=Float.valueOf$F(p$1.fval$I$I.apply(this, [10, 20]));
break;
case 13:
value=Clazz.array(Double.TYPE, -1, [p$1.dval$I$I.apply(this, [24, 30])]);
break;
case 1:
value=Float.valueOf$F(p$1.fval$I$I.apply(this, [5, 15]));
break;
case 37:
var v1=p$1.dval$I$I.apply(this, [19, 25]);
var v2=p$1.dval$I$I.apply(this, [28, 35]);
value=Clazz.array(Double.TYPE, -1, [v1, v2]);
var key=$I$(5).getKey$I$I$I$I$I(type, a1, a2, a3, a4);
data.put$O$O(key, value);
value=Clazz.array(Double.TYPE, -1, [v2, v1]);
var a=a1;
a1=a3;
a3=a;
break;
case 9:
value=Clazz.array(Double.TYPE, -1, [p$1.dval$I$I.apply(this, [22, 28]), p$1.dval$I$I.apply(this, [30, 36]), p$1.dval$I$I.apply(this, [38, 44])]);
break;
case 17:
value=Clazz.array(Double.TYPE, -1, [p$1.dval$I$I.apply(this, [10, 15]), p$1.dval$I$I.apply(this, [20, 25]), p$1.dval$I$I.apply(this, [30, 35]), p$1.dval$I$I.apply(this, [40, 45]), this.line.charAt$I(46)]);
break;
}
var key=$I$(5).getKey$I$I$I$I$I(type, a1, a2, a3, a4);
data.put$O$O(key, value);
if ($I$(4).debugging) (function(a,f){return f.apply(null,a)})([$I$(5).decodeKey$Integer(key) + " " + (Clazz.instanceOf(value, "java.lang.Float") ? value : $I$(6).eAD$DA(value)) ],$I$(4).debug$S);
} while (!(this.line=br.readLine$()).startsWith$S("$"));
}, p$1);

Clazz.newMeth(C$, 'ival$I$I', function (i, j) {
return (function(a,f){return f.apply(null,a)})([this.line.substring$I$I(i, j).trim$()],$I$(7).parseInt$S);
}, p$1);

Clazz.newMeth(C$, 'fval$I$I', function (i, j) {
return Float.valueOf$S(this.line.substring$I$I(i, j).trim$()).floatValue$();
}, p$1);

Clazz.newMeth(C$, 'dval$I$I', function (i, j) {
return Double.valueOf$S(this.line.substring$I$I(i, j).trim$()).doubleValue$();
}, p$1);

Clazz.newMeth(C$, 'getAtomTypes', function () {
var resourceName="MMFF94-smarts.txt";
var types=Clazz.new_($I$(8,1));
try {
var br=this.getBufferedReader$S(resourceName);
var at;
types.addLast$O(Clazz.new_($I$(9,1).c$$I$I$I$F$I$S$S,[0, 0, 0, 0, 1, "H or NOT FOUND", ""]));
while ((this.line=br.readLine$()) != null ){
if (this.line.length$() == 0 || this.line.startsWith$S("#") ) continue;
var elemNo=p$1.ival$I$I.apply(this, [3, 5]);
var mmType=p$1.ival$I$I.apply(this, [6, 8]);
var hType=p$1.ival$I$I.apply(this, [9, 11]);
var formalCharge=p$1.fval$I$I.apply(this, [12, 15]) / 12;
var val=p$1.ival$I$I.apply(this, [16, 18]);
var desc=this.line.substring$I$I(19, 44).trim$();
var smarts=this.line.substring$I(45).trim$();
types.addLast$O(at=Clazz.new_($I$(9,1).c$$I$I$I$F$I$S$S,[elemNo, mmType, hType, formalCharge, val, desc, smarts]));
C$.setFlags$org_jmol_minimize_forcefield_AtomType(at);
}
br.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"org.jmol.viewer.JmolAsyncException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('org.jmol.viewer.JmolAsyncException').c$$S,[e.getFileName$()]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
System.err.println$S("Exception " + e.toString() + " in getResource " + resourceName + " line=" + this.line );
}
} else {
throw e$$;
}
}
(function(a,f){return f.apply(null,a)})([(types.size$() - 1) + " SMARTS-based atom types read"],$I$(4).info$S);
C$.atomTypes=types;
}, p$1);

Clazz.newMeth(C$, 'setFlags$org_jmol_minimize_forcefield_AtomType', function (at) {
switch (at.mmType) {
case 32:
case 35:
case 72:
at.fcadj=0.5;
break;
case 62:
case 76:
at.fcadj=0.25;
break;
}
switch (at.mmType) {
case 37:
case 38:
case 39:
case 44:
case 58:
case 59:
case 63:
case 64:
case 65:
case 66:
case 69:
case 78:
case 79:
case 81:
case 82:
at.arom=true;
}
switch (at.mmType) {
case 2:
case 3:
case 4:
case 9:
case 30:
case 37:
case 39:
case 54:
case 57:
case 58:
case 63:
case 64:
case 67:
case 75:
case 78:
case 80:
case 81:
at.sbmb=true;
}
switch (at.mmType) {
case 6:
case 8:
case 10:
case 11:
case 12:
case 13:
case 14:
case 15:
case 26:
case 32:
case 35:
case 39:
case 40:
case 43:
case 44:
case 59:
case 62:
case 70:
case 72:
case 76:
at.pilp=true;
}
switch (at.mmType) {
case 10:
case 32:
case 35:
case 39:
case 41:
case 44:
case 55:
case 56:
case 58:
case 59:
case 69:
case 72:
case 81:
case 82:
at.mltb=1;
break;
case 2:
case 3:
case 7:
case 9:
case 16:
case 17:
case 30:
case 37:
case 38:
case 45:
case 46:
case 47:
case 51:
case 53:
case 54:
case 57:
case 63:
case 64:
case 65:
case 66:
case 67:
case 74:
case 75:
case 78:
case 79:
case 80:
at.mltb=2;
break;
case 4:
case 42:
case 60:
case 61:
at.mltb=3;
break;
}
}, 1);

Clazz.newMeth(C$, 'calculatePartialCharges$org_jmol_modelset_BondA$IA$org_jmol_modelset_AtomA$IA$javajs_util_BS$Z', function (bonds, bTypes, atoms, aTypes, bsAtoms, doRound) {
var partialCharges=Clazz.array(Float.TYPE, [atoms.length]);
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) partialCharges[i]=C$.atomTypes.get$I(Math.max(0, aTypes[i])).formalCharge;

var a1=null;
for (var i=bTypes.length; --i >= 0; ) {
a1=bonds[i].atom1;
var a2=bonds[i].atom2;
var ok1=bsAtoms.get$I(a1.i);
var ok2=bsAtoms.get$I(a2.i);
if (!ok1 && !ok2 ) continue;
var it=aTypes[a1.i];
var at1=C$.atomTypes.get$I(Math.max(0, it));
var type1=(it < 0 ? -it : at1.mmType);
it=aTypes[a2.i];
var at2=C$.atomTypes.get$I(Math.max(0, it));
var type2=(it < 0 ? -it : at2.mmType);
var dq;
try {
var bondType=bTypes[i];
var bFactor=(type1 < type2 ? -1 : 1);
var key=(function(a,f){return f.apply(null,a)})([bondType, bFactor == 1  ? type2 : type1, bFactor == 1  ? type1 : type2, 127, 124],$I$(5).getKey$I$I$I$I$I);
var bciValue=C$.ffParams.get$O(key);
var bci;
var msg=($I$(4).debugging ? a1 + "/" + a2 + " mmTypes=" + type1 + "/" + type2 + " formalCharges=" + new Float(at1.formalCharge).toString() + "/" + new Float(at2.formalCharge).toString() + " bci = "  : null);
if (bciValue == null ) {
var pa=(C$.ffParams.get$O($I$(5).getKey$I$I$I$I$I(0, type1, 127, 127, 127))).floatValue$();
var pb=(C$.ffParams.get$O($I$(5).getKey$I$I$I$I$I(0, type2, 127, 127, 127))).floatValue$();
bci=pa - pb;
if ($I$(4).debugging) msg += new Float(pa).toString() + " - " + new Float(pb).toString() + " = " ;
} else {
bci=bFactor * bciValue.floatValue$();
}if ($I$(4).debugging) {
msg += new Float(bci).toString();
$I$(4).debug$S(msg);
}dq=at2.fcadj * at2.formalCharge - at1.fcadj * at1.formalCharge + bci;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
dq=NaN;
} else {
throw e;
}
}
if (ok1) partialCharges[a1.i] += dq;
if (ok2) partialCharges[a2.i] -= dq;
}
if (doRound) {
var abscharge=0;
for (var i=partialCharges.length; --i >= 0; ) {
partialCharges[i]=(Math.round(partialCharges[i] * 1000)) / 1000.0;
abscharge += Math.abs(partialCharges[i]);
}
if (abscharge == 0  && a1 != null  ) {
partialCharges[a1.i]=-0.0;
}}return partialCharges;
}, 1);

Clazz.newMeth(C$, 'isBondType1$org_jmol_minimize_forcefield_AtomType$org_jmol_minimize_forcefield_AtomType', function (at1, at2) {
return at1.sbmb && at2.sbmb  || at1.arom && at2.arom  ;
}, 1);

Clazz.newMeth(C$, 'getBondType$org_jmol_modelset_Bond$org_jmol_minimize_forcefield_AtomType$org_jmol_minimize_forcefield_AtomType$I$I', function (bond, at1, at2, index1, index2) {
return (C$.isBondType1$org_jmol_minimize_forcefield_AtomType$org_jmol_minimize_forcefield_AtomType(at1, at2) && bond.getCovalentOrder$() == 1  && !p$1.isAromaticBond$I$I.apply(this, [index1, index2])  ? 1 : 0);
}, p$1);

Clazz.newMeth(C$, 'isAromaticBond$I$I', function (a1, a2) {
if (this.vRings[3] != null ) for (var i=this.vRings[3].size$(); --i >= 0; ) {
var bsRing=this.vRings[3].get$I(i);
if (bsRing.get$I(a1) && bsRing.get$I(a2) ) return true;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'getAtomTypeDescs$IA', function (types) {
var stypes=Clazz.array(String, [types.length]);
for (var i=types.length; --i >= 0; ) {
stypes[i]=String.valueOf$I(types[i] < 0 ? -types[i] : C$.atomTypes.get$I(types[i]).mmType);
}
return stypes;
}, 1);

Clazz.newMeth(C$, 'setAtomTypes$org_jmol_modelset_AtomA$javajs_util_BS$org_jmol_api_SmilesMatcherInterface$javajs_util_LstA$Z', function (atoms, bsAtoms, smartsMatcher, vRings, allowUnknowns) {
var bitSets=Clazz.new_($I$(8,1));
var smarts=Clazz.array(String, [C$.atomTypes.size$()]);
var types=Clazz.array(Integer.TYPE, [atoms.length]);
var bsElements=Clazz.new_($I$(10,1));
var bsHydrogen=Clazz.new_($I$(10,1));
var bsConnected=$I$(11).copy$javajs_util_BS(bsAtoms);
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var a=atoms[i];
var bonds=a.bonds;
if (bonds != null ) for (var j=bonds.length; --j >= 0; ) if (bonds[j].isCovalent$()) bsConnected.set$I(bonds[j].getOtherAtom$org_jmol_modelset_Atom(a).i);

}
for (var i=bsConnected.nextSetBit$I(0); i >= 0; i=bsConnected.nextSetBit$I(i + 1)) {
var n=atoms[i].getElementNumber$();
switch (n) {
case 1:
bsHydrogen.set$I(i);
break;
default:
bsElements.set$I(n);
}
}
var nUsed=0;
for (var i=1; i < C$.atomTypes.size$(); i++) {
var at=C$.atomTypes.get$I(i);
if (!bsElements.get$I(at.elemNo)) continue;
smarts[i]=at.smartsCode;
nUsed++;
}
$I$(4).info$S(nUsed + " SMARTS matches used");
try {
smartsMatcher.getMMFF94AtomTypes$SA$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_Lst$javajs_util_LstA(smarts, atoms, atoms.length, bsConnected, bitSets, vRings);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
(function(a,f){return f.apply(null,a)})([e.toString()],$I$(4).error$S);
} else {
throw e;
}
}
var bsDone=Clazz.new_($I$(10,1));
for (var j=0; j < bitSets.size$(); j++) {
var bs=bitSets.get$I(j);
if (bs == null ) continue;
bs.andNot$javajs_util_BS(bsDone);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) types[i]=j;

bsDone.or$javajs_util_BS(bs);
}
for (var i=bsHydrogen.nextSetBit$I(0); i >= 0; i=bsHydrogen.nextSetBit$I(i + 1)) {
var bonds=atoms[i].bonds;
if (bonds != null ) {
var j=types[bonds[0].getOtherAtom$org_jmol_modelset_Atom(atoms[i]).i];
if (j != 0) bsDone.set$I(i);
types[i]=-C$.atomTypes.get$I(j).hType;
}}
if ($I$(4).debugging) for (var i=bsConnected.nextSetBit$I(0); i >= 0; i=bsConnected.nextSetBit$I(i + 1)) (function(a,f){return f.apply(null,a)})(["atom " + atoms[i] + "\ttype " + (types[i] < 0 ? "" + -types[i] : (C$.atomTypes.get$I(types[i]).mmType + "\t" + C$.atomTypes.get$I(types[i]).smartsCode + "\t" + C$.atomTypes.get$I(types[i]).descr )) ],$I$(4).debug$S);

if (!allowUnknowns && bsDone.cardinality$() != bsConnected.cardinality$() ) return null;
return types;
}, 1);

Clazz.newMeth(C$, 'setBondTypes$org_jmol_modelset_BondA$I$javajs_util_BS', function (bonds, bondCount, bsAtoms) {
var bTypes=Clazz.array(Integer.TYPE, [bondCount]);
for (var i=bondCount; --i >= 0; ) {
var a1=bonds[i].atom1;
var a2=bonds[i].atom2;
var ok1=bsAtoms.get$I(a1.i);
var ok2=bsAtoms.get$I(a2.i);
if (!ok1 && !ok2 ) continue;
var it=this.rawAtomTypes[a1.i];
var at1=C$.atomTypes.get$I(Math.max(0, it));
it=this.rawAtomTypes[a2.i];
var at2=C$.atomTypes.get$I(Math.max(0, it));
bTypes[i]=p$1.getBondType$org_jmol_modelset_Bond$org_jmol_minimize_forcefield_AtomType$org_jmol_minimize_forcefield_AtomType$I$I.apply(this, [bonds[i], at1, at2, a1.i, a2.i]);
}
return bTypes;
}, p$1);

Clazz.newMeth(C$, 'fixTypes', function () {
for (var i=this.minAtomCount; --i >= 0; ) {
var a=this.minAtoms[i];
var rawIndex=a.atom.i;
var it=this.rawAtomTypes[rawIndex];
a.ffAtomType=C$.atomTypes.get$I(Math.max(0, it));
var type=(it < 0 ? -it : C$.atomTypes.get$I(it).mmType);
a.ffType=type;
a.vdwKey=$I$(5).getKey$I$I$I$I$I(0, type, 127, 127, 122);
a.partialCharge=this.rawMMFF94Charges[rawIndex];
}
for (var i=this.minBonds.length; --i >= 0; ) {
var bond=this.minBonds[i];
bond.type=this.rawBondTypes[bond.rawIndex];
bond.key=p$1.getKey$O$I$I.apply(this, [bond, bond.type, 3]);
if (bond.key == null ) return false;
}
for (var i=this.minAngles.length; --i >= 0; ) {
var angle=this.minAngles[i];
angle.key=p$1.getKey$O$I$I.apply(this, [angle, angle.type, 5]);
angle.sbKey=p$1.getKey$O$I$I.apply(this, [angle, angle.sbType, 21]);
}
for (var i=this.minTorsions.length; --i >= 0; ) {
var torsion=this.minTorsions[i];
torsion.key=p$1.getKey$O$I$I.apply(this, [torsion, torsion.type, 9]);
}
return true;
}, p$1);

Clazz.newMeth(C$, 'setAngleType$org_jmol_minimize_MinAngle', function (angle) {
angle.type=this.minBonds[angle.data[3]].type + this.minBonds[angle.data[4]].type;
if (p$1.checkRings$javajs_util_Lst$IA$I.apply(this, [this.vRings[0], angle.data, 3])) {
angle.type+=(angle.type == 0 ? 3 : 4);
} else if (p$1.checkRings$javajs_util_Lst$IA$I.apply(this, [this.vRings[1], angle.data, 3])) {
angle.type+=(angle.type == 0 ? 4 : 6);
}angle.sbType=C$.sbMap[angle.type];
switch (angle.type) {
case 1:
case 5:
case 7:
angle.sbType+=this.minBonds[angle.data[4]].type;
break;
}
return angle.type;
}, p$1);

Clazz.newMeth(C$, 'setTorsionType$org_jmol_minimize_MinTorsion', function (t) {
if (p$1.checkRings$javajs_util_Lst$IA$I.apply(this, [this.vRings[1], t.data, 4])) return (t.type=4);
t.type=(this.minBonds[t.data[5]].type == 1 ? 1 : this.minBonds[t.data[4]].type == 0 && this.minBonds[t.data[6]].type == 0  ? 0 : 2);
if (t.type == 0 && p$1.checkRings$javajs_util_Lst$IA$I.apply(this, [this.vRings[2], t.data, 4]) ) {
t.type=5;
}return t.type;
}, p$1);

Clazz.newMeth(C$, 'typeOf$I', function (iAtom) {
return this.minAtoms[iAtom].ffType;
}, p$1);

Clazz.newMeth(C$, 'checkRings$javajs_util_Lst$IA$I', function (v, minlist, n) {
if (v != null ) for (var i=v.size$(); --i >= 0; ) {
var bs=v.get$I(i);
if (bs.get$I(this.minAtoms[minlist[0]].atom.i) && bs.get$I(this.minAtoms[minlist[1]].atom.i) && (n < 3 || bs.get$I(this.minAtoms[minlist[2]].atom.i) ) && (n < 4 || bs.get$I(this.minAtoms[minlist[3]].atom.i) )  ) return true;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'getKey$O$I$I', function (obj, type, ktype) {
var o=(Clazz.instanceOf(obj, "org.jmol.minimize.MinObject") ? obj : null);
var data=(o == null  ? obj : o.data);
var n=4;
switch (ktype) {
case 3:
p$1.fixOrder$IA$I$I.apply(this, [data, 0, 1]);
n=2;
break;
case 5:
if (p$1.fixOrder$IA$I$I.apply(this, [data, 0, 2]) == -1) C$.swap$IA$I$I(data, 3, 4);
type=p$1.setAngleType$org_jmol_minimize_MinAngle.apply(this, [o]);
n=3;
break;
case 21:
n=3;
break;
case 9:
switch (p$1.fixOrder$IA$I$I.apply(this, [data, 1, 2])) {
case 1:
break;
case -1:
C$.swap$IA$I$I(data, 0, 3);
C$.swap$IA$I$I(data, 4, 6);
break;
case 0:
if (p$1.fixOrder$IA$I$I.apply(this, [data, 0, 3]) == -1) C$.swap$IA$I$I(data, 4, 6);
break;
}
type=p$1.setTorsionType$org_jmol_minimize_MinTorsion.apply(this, [o]);
}
var key=null;
for (var i=0; i < 4; i++) this.typeData[i]=(i < n ? p$1.typeOf$I.apply(this, [data[i]]) : 127);

switch (ktype) {
case 21:
this.typeData[3]=125;
break;
case 13:
C$.sortOop$IA(this.typeData);
break;
}
key=$I$(5).getKey$I$I$I$I$I(type, this.typeData[0], this.typeData[1], this.typeData[2], this.typeData[3]);
var ddata=C$.ffParams.get$O(key);
switch (ktype) {
case 3:
return (ddata != null  && ddata[0] > 0   ? key : p$1.applyEmpiricalRules$org_jmol_minimize_MinObject$DA$I.apply(this, [o, ddata, 3]));
case 5:
if (ddata != null  && ddata[0] != 0  ) return key;
break;
case 9:
if (ddata == null ) {
if (!C$.ffParams.containsKey$O(key=p$1.getTorsionKey$I$I$I.apply(this, [type, 0, 2])) && !C$.ffParams.containsKey$O(key=p$1.getTorsionKey$I$I$I.apply(this, [type, 2, 0])) && !C$.ffParams.containsKey$O(key=p$1.getTorsionKey$I$I$I.apply(this, [type, 2, 2]))  ) key=p$1.getTorsionKey$I$I$I.apply(this, [0, 2, 2]);
ddata=C$.ffParams.get$O(key);
}return (ddata != null  ? key : p$1.applyEmpiricalRules$org_jmol_minimize_MinObject$DA$I.apply(this, [o, ddata, 9]));
case 21:
if (ddata != null ) return key;
var r1=p$1.getRowFor$I.apply(this, [data[0]]);
var r2=p$1.getRowFor$I.apply(this, [data[1]]);
var r3=p$1.getRowFor$I.apply(this, [data[2]]);
return $I$(5).getKey$I$I$I$I$I(0, r1, r2, r3, 126);
case 13:
if (ddata != null ) return key;
}
var isSwapped=false;
var haveKey=false;
for (var i=0; i < 3 && !haveKey ; i++) {
for (var j=0, bit=1; j < n; j++, bit<<=1) if ((ktype & bit) == bit) this.typeData[j]=C$.getEquivalentType$I$I(p$1.typeOf$I.apply(this, [data[j]]), i);

switch (ktype) {
case 3:
isSwapped=(C$.fixTypeOrder$IA$I$I(this.typeData, 0, 1));
break;
case 5:
isSwapped=(C$.fixTypeOrder$IA$I$I(this.typeData, 0, 2));
break;
case 13:
C$.sortOop$IA(this.typeData);
break;
}
key=$I$(5).getKey$I$I$I$I$I(type, this.typeData[0], this.typeData[1], this.typeData[2], this.typeData[3]);
haveKey=C$.ffParams.containsKey$O(key);
}
if (haveKey) {
if (isSwapped) switch (ktype) {
case 5:
C$.swap$IA$I$I(data, 0, 2);
C$.swap$IA$I$I(data, 3, 4);
p$1.setAngleType$org_jmol_minimize_MinAngle.apply(this, [o]);
break;
}
} else if (type != 0 && ktype == 5 ) {
key=Integer.valueOf$I(key.intValue$() ^ 255);
}ddata=C$.ffParams.get$O(key);
switch (ktype) {
case 5:
return (ddata != null  && ddata[0] != 0   ? key : p$1.applyEmpiricalRules$org_jmol_minimize_MinObject$DA$I.apply(this, [o, ddata, 5]));
}
return key;
}, p$1);

Clazz.newMeth(C$, 'getTorsionKey$I$I$I', function (type, i, j) {
return (function(a,f){return f.apply(null,a)})([type, C$.getEquivalentType$I$I(this.typeData[0], i), this.typeData[1], this.typeData[2], C$.getEquivalentType$I$I(this.typeData[3], j)],$I$(5).getKey$I$I$I$I$I);
}, p$1);

Clazz.newMeth(C$, 'applyEmpiricalRules$org_jmol_minimize_MinObject$DA$I', function (o, ddata, ktype) {
var rr;
var rr2;
var beta=0;
var a;
var b;
var c;
switch (ktype) {
case 3:
a=this.minAtoms[o.data[0]];
b=this.minAtoms[o.data[1]];
var elemno1=a.atom.getElementNumber$();
var elemno2=b.atom.getElementNumber$();
var key=(function(a,f){return f.apply(null,a)})([0, Math.min(elemno1, elemno2), Math.max(elemno1, elemno2), 127, 123],$I$(5).getKey$I$I$I$I$I);
ddata=C$.ffParams.get$O(key);
if (ddata == null ) return null;
var kbref=ddata[0];
var r0ref=ddata[1];
var r0=C$.getRuleBondLength$org_jmol_minimize_MinAtom$org_jmol_minimize_MinAtom$I$Z(a, b, (o).order, p$1.isAromaticBond$I$I.apply(this, [o.data[0], o.data[1]]));
if (r0 == 0 ) return null;
rr=r0ref / r0;
rr2=rr * rr;
var rr4=rr2 * rr2;
var rr6=rr4 * rr2;
var kb=kbref * rr6;
o.ddata=Clazz.array(Double.TYPE, -1, [kb, r0]);
return Integer.valueOf$I(-1);
case 5:
var theta0;
if (ddata == null  || (theta0=ddata[1]) == 0  ) {
b=this.minAtoms[o.data[1]];
var atom=b.atom;
var elemno=atom.getElementNumber$();
switch (o.type) {
case 3:
case 5:
case 6:
theta0=60;
beta *= 0.05;
break;
case 4:
case 7:
case 8:
theta0=90;
break;
default:
theta0=120;
var crd=atom.getCovalentBondCount$();
switch (crd) {
case 2:
if ($I$(12).isLinear$org_jmol_minimize_MinAtom(b)) theta0=180;
 else if (elemno == 8) theta0=105;
 else if (elemno > 10) theta0=95.0;
break;
case 3:
if (b.ffAtomType.mltb == 0 && b.ffAtomType.val == 3 ) theta0=(elemno == 7 ? 107 : 92);
break;
case 4:
theta0=109.45;
break;
}
}
}beta=1.75;
switch (o.type) {
case 3:
case 5:
case 6:
beta *= 0.05;
break;
case 4:
case 7:
case 8:
beta *= 0.85;
break;
}
var za=C$.getZParam$I(this.minAtoms[o.data[0]].atom.getElementNumber$());
var cb=C$.getCParam$I(this.minAtoms[o.data[1]].atom.getElementNumber$());
var zc=C$.getZParam$I(this.minAtoms[o.data[2]].atom.getElementNumber$());
var r0ab=C$.getR0$org_jmol_minimize_MinBond(this.minBonds[o.data[3]]);
var r0bc=C$.getR0$org_jmol_minimize_MinBond(this.minBonds[o.data[4]]);
rr=r0ab + r0bc;
rr2=rr * rr;
var D=(r0ab - r0bc) / rr2;
var theta2=theta0 * 0.017453292519943295;
theta2 *= theta2;
var ka=(beta * za * cb * zc * Math.exp(-2 * D) ) / (rr * theta2);
o.ddata=Clazz.array(Double.TYPE, -1, [ka, theta0]);
return Integer.valueOf$I(-1);
case 9:
var ib=o.data[1];
var ic=o.data[2];
b=this.minAtoms[ib];
c=this.minAtoms[ic];
if ($I$(12).isLinear$org_jmol_minimize_MinAtom(b) || $I$(12).isLinear$org_jmol_minimize_MinAtom(c) ) return null;
var bondBC=this.minBonds[o.data[5]];
var elemnoB=b.atom.getElementNumber$();
var elemnoC=c.atom.getElementNumber$();
var ub=C$.getUParam$I(elemnoB);
var uc=C$.getUParam$I(elemnoC);
var vb=C$.getVParam$I(elemnoB);
var vc=C$.getVParam$I(elemnoC);
var v1=0;
var v2=0;
var v3=0;
var pi_bc=-1;
var n_bc=-1;
var wb=-1;
var wc=0;
var valB=b.ffAtomType.val;
var valC=c.ffAtomType.val;
var pilpB=b.ffAtomType.pilp;
var pilpC=c.ffAtomType.pilp;
var mltbB=b.ffAtomType.mltb;
var mltbC=c.ffAtomType.mltb;
 out : while (true){
if (p$1.isAromaticBond$I$I.apply(this, [ib, ic])) {
pi_bc=(pilpB || pilpC  ? 0.3 : 0.5);
beta=(valB + valC == 7 ? 3 : 6);
break out;
}if (bondBC.order == 2) {
beta=6;
pi_bc=(mltbB == 2 && mltbC == 2  ? 1.0 : 0.4);
break out;
}var crdB=b.atom.getCovalentBondCount$();
var crdC=c.atom.getCovalentBondCount$();
if (crdB == 4 && crdC == 4 ) {
vb=C$.getVParam$I(elemnoB);
vc=C$.getVParam$I(elemnoC);
n_bc=9;
break out;
}if (crdB != 4 && (valB > crdB || mltbB > 0 )  || crdC != 4 && (valC > crdC || mltbC > 0 )  ) return null;
var case2=(pilpB && mltbC > 0 );
var case3=(pilpC && mltbB > 0 );
if (bondBC.order == 1 && (mltbB > 0 && mltbC > 0  || case2  || case3 ) ) {
if (pilpB && pilpC ) return null;
beta=6;
if (case2) {
pi_bc=(mltbC == 1 ? 0.5 : elemnoB <= 10 && elemnoC <= 10  ? 0.3 : 0.15);
break out;
}if (case3) {
pi_bc=(mltbB == 1 ? 0.5 : elemnoB <= 10 && elemnoC <= 10  ? 0.3 : 0.15);
break out;
}if ((mltbB == 1 || mltbC == 1 ) && (elemnoB == 6 || elemnoC == 6 ) ) {
pi_bc=0.4;
break out;
}pi_bc=0.15;
break out;
}switch (elemnoB << 8 + elemnoC) {
case 2056:
wb=wc=2;
break out;
case 2064:
wb=2;
wc=8;
break out;
case 4104:
wb=8;
wc=2;
break out;
case 4112:
wb=wc=8;
break out;
}
n_bc=crdB * crdC;
break out;
}
if (pi_bc > 0 ) v2=beta * pi_bc * Math.sqrt(ub * uc) ;
 else if (n_bc > 0 ) v3=Math.sqrt(vb * vc) / n_bc;
 else if (wb != 0 ) v2=-Math.sqrt(wb * wc);
o.ddata=Clazz.array(Double.TYPE, -1, [v1, v2, v3]);
return Integer.valueOf$I(-1);
default:
return null;
}
}, p$1);

Clazz.newMeth(C$, 'getR0$org_jmol_minimize_MinBond', function (b) {
return (b.ddata == null  ? (C$.ffParams.get$O(b.key)) : b.ddata)[1];
}, 1);

Clazz.newMeth(C$, 'getRowFor$I', function (i) {
var elemno=this.minAtoms[i].atom.getElementNumber$();
return (elemno < 3 ? 0 : elemno < 11 ? 1 : elemno < 19 ? 2 : elemno < 37 ? 3 : 4);
}, p$1);

Clazz.newMeth(C$, 'getOutOfPlaneParameter$IA', function (data) {
var ddata=C$.ffParams.get$O(p$1.getKey$O$I$I.apply(this, [data, 6, 13]));
return (ddata == null  ? 0 : ddata[0]);
});

Clazz.newMeth(C$, 'sortOop$IA', function (typeData) {
C$.fixTypeOrder$IA$I$I(typeData, 0, 2);
C$.fixTypeOrder$IA$I$I(typeData, 0, 3);
C$.fixTypeOrder$IA$I$I(typeData, 2, 3);
}, 1);

Clazz.newMeth(C$, 'fixTypeOrder$IA$I$I', function (a, i, j) {
if (a[i] > a[j]) {
C$.swap$IA$I$I(a, i, j);
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'fixOrder$IA$I$I', function (a, i, j) {
var test=p$1.typeOf$I.apply(this, [a[j]]) - p$1.typeOf$I.apply(this, [a[i]]);
if (test < 0) C$.swap$IA$I$I(a, i, j);
return (test < 0 ? -1 : test > 0 ? 1 : 0);
}, p$1);

Clazz.newMeth(C$, 'swap$IA$I$I', function (a, i, j) {
var t=a[i];
a[i]=a[j];
a[j]=t;
}, 1);

Clazz.newMeth(C$, 'getEquivalentType$I$I', function (type, level) {
return (type == 0 ? 0 : type == 70 || type > 82  ? type : level == 2 ? 0 : C$.equivalentTypes[((type - 1) << 1) + level]);
}, 1);

Clazz.newMeth(C$, 'getZParam$I', function (elemno) {
switch (elemno) {
case 1:
return 1.395;
case 6:
return 2.494;
case 7:
return 2.711;
case 8:
return 3.045;
case 9:
return 2.847;
case 14:
return 2.35;
case 15:
return 2.35;
case 16:
return 2.98;
case 17:
return 2.909;
case 35:
return 3.017;
case 53:
return 3.086;
}
return 0.0;
}, 1);

Clazz.newMeth(C$, 'getCParam$I', function (elemno) {
switch (elemno) {
case 5:
return 0.704;
case 6:
return 1.016;
case 7:
return 1.113;
case 8:
return 1.337;
case 14:
return 0.811;
case 15:
return 1.068;
case 16:
return 1.249;
case 17:
return 1.078;
case 33:
return 0.825;
}
return 0.0;
}, 1);

Clazz.newMeth(C$, 'getUParam$I', function (elemno) {
switch (elemno) {
case 6:
case 7:
case 8:
return 2.0;
case 14:
case 15:
case 16:
return 1.25;
}
return 0.0;
}, 1);

Clazz.newMeth(C$, 'getVParam$I', function (elemno) {
switch (elemno) {
case 6:
return 2.12;
case 7:
return 1.5;
case 8:
return 0.2;
case 14:
return 1.22;
case 15:
return 2.4;
case 16:
return 0.49;
}
return 0.0;
}, 1);

Clazz.newMeth(C$, 'getCovalentRadius$I', function (elemno) {
switch (elemno) {
case 1:
return 0.33;
case 5:
return 0.81;
case 6:
return 0.77;
case 7:
return 0.73;
case 8:
return 0.72;
case 9:
return 0.74;
case 13:
return 1.22;
case 14:
return 1.15;
case 15:
return 1.09;
case 16:
return 1.03;
case 17:
return 1.01;
case 31:
return 1.19;
case 32:
return 1.2;
case 33:
return 1.2;
case 34:
return 1.16;
case 35:
return 1.15;
case 44:
return 1.46;
case 50:
return 1.4;
case 51:
return 1.41;
case 52:
return 1.35;
case 53:
return 1.33;
case 81:
return 1.51;
case 82:
return 1.53;
case 83:
return 1.55;
default:
return $I$(13).getBondingRadius$I$I(elemno, 0);
}
}, 1);

Clazz.newMeth(C$, 'getRuleBondLength$org_jmol_minimize_MinAtom$org_jmol_minimize_MinAtom$I$Z', function (a, b, boAB, isAromatic) {
switch (boAB) {
case 1:
case 2:
case 3:
break;
case 5:
break;
default:
return 0;
}
var elemnoA=a.atom.getElementNumber$();
var elemnoB=b.atom.getElementNumber$();
var r0a=C$.getCovalentRadius$I(elemnoA);
var r0b=C$.getCovalentRadius$I(elemnoB);
var Xa=$I$(13).getAllredRochowElectroNeg$I(elemnoA);
var Xb=$I$(13).getAllredRochowElectroNeg$I(elemnoB);
var c=(elemnoA == 1 || elemnoB == 1  ? 0.05 : 0.085);
var n=1.4;
var r=r0a + r0b;
if (isAromatic) boAB=(a.ffAtomType.pilp || b.ffAtomType.pilp  ? 5 : 4);
 else switch (a.ffAtomType.mltb << 4 + b.ffAtomType.mltb) {
case 17:
boAB=4;
break;
case 18:
case 33:
boAB=5;
break;
}
switch (boAB) {
case 1:
switch (a.ffAtomType.mltb) {
case 0:
break;
case 1:
case 2:
break;
case 3:
break;
}
switch (b.ffAtomType.mltb) {
case 0:
break;
case 1:
case 2:
break;
case 3:
break;
}
break;
default:
break;
}
r -= c * Math.pow(Math.abs(Xa - Xb), n);
return r;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.types=Clazz.array(Integer.TYPE, -1, [0, 1, 34, 5, 546, 3, 13, 21, 37, 9, 17]);
C$.sbMap=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 5, 4, 6, 8, 9, 11]);
C$.equivalentTypes=Clazz.array(Integer.TYPE, -1, [1, 1, 2, 1, 3, 1, 4, 1, 5, 5, 6, 6, 7, 6, 8, 8, 9, 8, 10, 8, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 15, 17, 15, 18, 15, 19, 19, 1, 1, 21, 5, 22, 1, 23, 5, 24, 5, 25, 25, 26, 25, 28, 5, 28, 5, 29, 5, 2, 1, 31, 31, 7, 6, 21, 5, 8, 8, 6, 6, 36, 5, 2, 1, 9, 8, 10, 8, 10, 8, 3, 1, 42, 8, 10, 8, 16, 15, 10, 8, 9, 8, 42, 8, 9, 8, 6, 6, 21, 5, 7, 6, 21, 5, 42, 8, 9, 8, 10, 8, 10, 8, 2, 1, 10, 8, 6, 6, 4, 1, 42, 8, 10, 8, 2, 1, 2, 1, 9, 8, 9, 8, 9, 8, 8, 8, 9, 8, 70, 70, 5, 5, 16, 15, 18, 15, 17, 15, 26, 25, 9, 8, 12, 12, 2, 1, 9, 8, 2, 1, 10, 8, 9, 8]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
