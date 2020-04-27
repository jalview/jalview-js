(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'javajs.util.SB','org.jmol.util.Logger','org.qcschema.QCSchemaUnits','org.jmol.api.JmolAdapter','java.util.Hashtable','javajs.util.Lst','javajs.util.AU','java.util.Arrays',['org.jmol.adapter.readers.quantum.BasisFunctionReader','.MOEnergySorter']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QCJSONReader", null, 'org.jmol.adapter.readers.quantum.MoldenReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$haveEnergy=true;
this.lastBasisID=null;
},1);

C$.$fields$=[['Z',['$haveEnergy'],'I',['jobCount','modelCount'],'S',['lastBasisID'],'O',['job','java.util.Map']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
C$.superclazz.prototype.initializeReader$.apply(this, []);
var sb=Clazz.new_($I$(1,1));
try {
while (this.rd$() != null )sb.append$S(this.line);

var json=this.vwr.parseJSONArray$S(sb.toString());
(function(a,f){return f.apply(null,a)})([json.get$I(0).toString()],$I$(2).info$S);
this.jobCount=json.size$() - 2;
for (var i=0; i < this.jobCount; i++) p$1.processJob$java_util_Map.apply(this, [json.get$I(i + 2)]);

} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
this.continuing=false;
});

Clazz.newMeth(C$, 'processJob$java_util_Map', function (job) {
this.job=job;
p$1.readSteps.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'readSteps', function () {
var steps=$I$(3).getList$O$S(this.job, "steps");
var nSteps=steps.size$();
for (var iStep=0; iStep < nSteps; iStep++) {
if (!this.doGetModel$I$S(++this.modelCount, null)) {
if (!this.checkLastModel$()) return;
continue;
}this.asc.newAtomSet$();
var step=steps.get$I(iStep);
var topology=C$.getMapSafely$java_util_Map$S(step, "topology");
var atoms=C$.getMapSafely$java_util_Map$S(topology, "atoms");
var symbols=$I$(3).getStringArray$O$S(atoms, "symbol");
var atomNumbers=$I$(3).getIntArray$O$S(atoms, "atom_number");
var atom_names=$I$(3).getStringArray$O$S(atoms, "atom_names");
var coords=$I$(3).getDoubleArray$O$S(atoms, "coords");
this.modelAtomCount=(coords.length/3|0);
var f=$I$(3).getConversionFactor$java_util_Map$S$S(atoms, "coords", "angstroms");
var isFractional=(f == 0 );
this.setFractionalCoordinates$Z(isFractional);
if (isFractional) {
f=$I$(3).getConversionFactor$java_util_Map$S$S(atoms, "unit_cell", "angstroms");
var cell=$I$(3).getDoubleArray$O$S(atoms, "unit_cell");
if (cell == null ) {
$I$(2).error$S("topology.unit_cell is missing even though atoms are listed as fractional");
} else {
for (var i=0; i < 6; i++) {
switch (i) {
case 3:
f=1;
default:
this.setUnitCellItem$I$F(i, (cell[i] * f));
break;
}
}
}}for (var i=0, pt=0; i < this.modelAtomCount; i++) {
var atom=this.asc.addNewAtom$();
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, (coords[pt++] * f), (coords[pt++] * f), (coords[pt++] * f));
var sym=(symbols == null  ? $I$(4).getElementSymbol$I(atomNumbers[i]) : symbols[i]);
atom.atomName=(atom_names == null  ? sym : atom_names[i]);
atom.elementNumber=($s$[0] = (atomNumbers == null  ? $I$(4).getElementNumber$S(sym) : atomNumbers[i]), $s$[0]);
}
if (this.doReadMolecularOrbitals) {
p$1.readMolecularOrbitals$java_util_Map.apply(this, [C$.getMapSafely$java_util_Map$S(step, "molecular_orbitals")]);
this.clearOrbitals$();
}this.applySymmetryAndSetTrajectory$();
if (this.loadVibrations) {
p$1.readFreqsAndModes$java_util_ArrayList.apply(this, [$I$(3).getList$O$S(step, "vibrations")]);
}}
}, p$1);

Clazz.newMeth(C$, 'readFreqsAndModes$java_util_ArrayList', function (vibrations) {
if (vibrations != null ) {
var n=vibrations.size$();
for (var i=0; i < n; i++) {
if (!this.doGetVibration$I(++this.vibrationNumber)) continue;
var vib=vibrations.get$I(i);
var freq=$I$(3).getDouble$java_util_Map$S$S(vib, "frequency", "cm-1");
var vectors=$I$(3).getDoubleArray$O$S(vib, "vectors");
if (i > 0) this.asc.cloneLastAtomSet$();
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, null, null, "" + new Double(freq).toString(), "cm-1");
var i0=this.asc.getLastAtomSetAtomIndex$();
for (var j=0, pt=0; j < this.modelAtomCount; j++) {
this.asc.addVibrationVector$I$F$F$F(j + i0, (vectors[pt++] * 0.5291772), (vectors[pt++] * 0.5291772), (vectors[pt++] * 0.5291772));
}
}
}return true;
}, p$1);

Clazz.newMeth(C$, 'readMolecularOrbitals$java_util_Map', function (molecular_orbitals) {
if (molecular_orbitals == null ) return false;
var moBasisID=molecular_orbitals.get$O("basis_id").toString();
if (!p$1.readBasis$S.apply(this, [moBasisID])) return false;
var isNormalized=molecular_orbitals.get$O("__jmol_normalized");
if (isNormalized != null  && isNormalized.booleanValue$() ) this.moData.put$O$O("isNormalized", isNormalized);
this.calculationType=molecular_orbitals.get$O("__jmol_calculation_type");
if (this.calculationType == null ) this.calculationType="?";
this.moData.put$O$O("calculationType", this.calculationType);
var mos=$I$(3).getList$O$S(molecular_orbitals, "orbitals");
var n=mos.size$();
for (var i=0; i < n; i++) {
var thisMO=mos.get$I(i);
var energy=$I$(3).getDouble$java_util_Map$S$S(thisMO, "energy", "ev");
var occupancy=$I$(3).getDouble$java_util_Map$S$S(thisMO, "occupancy", null);
var symmetry=thisMO.get$O("symmetry");
var spin=thisMO.get$O("type");
if (spin != null ) {
if (spin.indexOf$S("beta") >= 0) this.alphaBeta="beta";
 else if (spin.indexOf$S("alpha") >= 0) this.alphaBeta="alpha";
}var coefs=p$1.toFloatArray$DA.apply(this, [$I$(3).getDoubleArray$O$S(thisMO, "coefficients")]);
this.line="" + symmetry;
if (this.filterMO$()) {
var mo=Clazz.new_($I$(5,1));
mo.put$O$O("coefficients", coefs);
if (Double.isNaN$D(energy)) {
this.$haveEnergy=false;
} else {
mo.put$O$O("energy", Float.valueOf$F(energy));
}if (!Double.isNaN$D(occupancy)) mo.put$O$O("occupancy", Float.valueOf$F(occupancy));
if (symmetry != null ) mo.put$O$O("symmetry", symmetry);
if (this.alphaBeta.length$() > 0) mo.put$O$O("type", this.alphaBeta);
this.setMO$java_util_Map(mo);
if (this.debugging) {
(function(a,f){return f.apply(null,a)})([coefs.length + " coefficients in MO " + this.orbitals.size$() ],$I$(2).debug$S);
}}}
if (this.debugging) (function(a,f){return f.apply(null,a)})(["read " + this.orbitals.size$() + " MOs" ],$I$(2).debug$S);
var units=$I$(3).getList$O$S(molecular_orbitals, "orbitals_energy_units");
var sunits=(units == null  ? null : units.get$I(0).toString());
this.setMOs$S(sunits == null  || sunits.equals$O("?")  ? "?" : sunits);
if (this.$haveEnergy && this.doSort ) p$1.sortMOs.apply(this, []);
return false;
}, p$1);

Clazz.newMeth(C$, 'toFloatArray$DA', function (da) {
var fa=Clazz.array(Float.TYPE, [da.length]);
for (var j=da.length; --j >= 0; ) fa[j]=da[j];

return fa;
}, p$1);

Clazz.newMeth(C$, 'readBasis$S', function (moBasisID) {
var moBasisData=C$.getMapSafely$java_util_Map$S(this.job, "mo_bases");
var moBasis=C$.getMapSafely$java_util_Map$S(moBasisData, moBasisID);
if (moBasis == null ) {
$I$(2).error$S("No job.mo_bases entry for " + moBasisID);
return false;
}if (moBasisID == this.lastBasisID) return true;
this.lastBasisID=moBasisID;
var listG=$I$(3).getList$O$S(moBasis, "gaussians");
var listS=$I$(3).getList$O$S(moBasis, "shells");
if (listG == null  && listS == null  ) {
listG=listS=$I$(3).getList$O$S(moBasis, "slaters");
}if ((listG == null ) != (listS == null ) ) {
$I$(2).error$S("gaussians/shells or slaters missing");
return false;
}if (listG === listS ) {
this.readSlaterBasis$java_util_ArrayList(listS);
} else {
p$1.readGaussianBasis$java_util_ArrayList$java_util_ArrayList.apply(this, [listG, listS]);
}return true;
}, p$1);

Clazz.newMeth(C$, 'readSlaterBasis$java_util_ArrayList', function (listS) {
this.nCoef=listS.size$();
for (var i=0; i < this.nCoef; i++) {
var a=(function(a,f){return f.apply(null,a)})([listS.get$I(i), null],$I$(3).getDoubleArray$O$S);
this.addSlater$I$I$I$I$I$D$F((a[0]|0), (a[1]|0), (a[2]|0), (a[3]|0), (a[4]|0), a[5], a[6]);
}
this.setSlaters$Z$Z(false, false);
return true;
});

Clazz.newMeth(C$, 'readGaussianBasis$java_util_ArrayList$java_util_ArrayList', function (listG, listS) {
this.shells=Clazz.new_($I$(6,1));
for (var i=0; i < listS.size$(); i++) this.shells.addLast$O((function(a,f){return f.apply(null,a)})([listS.get$I(i), null],$I$(3).getIntArray$O$S));

var gaussianPtr=listG.size$();
var garray=$I$(7).newFloat2$I(gaussianPtr);
for (var i=0; i < gaussianPtr; i++) garray[i]=p$1.toFloatArray$DA.apply(this, [(function(a,f){return f.apply(null,a)})([listG.get$I(i), null],$I$(3).getDoubleArray$O$S)]);

this.moData.put$O$O("shells", this.shells);
this.moData.put$O$O("gaussians", garray);
(function(a,f){return f.apply(null,a)})([this.shells.size$() + " slater shells read"],$I$(2).info$S);
$I$(2).info$S(garray.length + " gaussian primitives read");
this.asc.setCurrentModelInfo$S$O("moData", this.moData);
return false;
}, p$1);

Clazz.newMeth(C$, 'sortMOs', function () {
var list=this.orbitals.toArray$OA(Clazz.array(java.lang.Object, [this.orbitals.size$()]));
(function(a,f){return f.apply(null,a)})([list, Clazz.new_($I$(9,1),[this, null])],$I$(8).sort$OA$java_util_Comparator);
this.orbitals.clear$();
for (var i=0; i < list.length; i++) this.orbitals.addLast$O(list[i]);

}, p$1);

Clazz.newMeth(C$, 'getMapSafely$java_util_Map$S', function (map, key) {
return (map == null  ? null : map.get$O(key));
}, 1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
