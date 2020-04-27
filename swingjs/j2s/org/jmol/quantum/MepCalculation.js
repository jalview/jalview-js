(function(){var P$=Clazz.newPackage("org.jmol.quantum"),I$=[[0,'org.jmol.util.Logger','java.util.Hashtable','org.jmol.viewer.FileManager','javajs.util.Rdr','javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MepCalculation", null, 'org.jmol.quantum.QuantumCalculation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.distanceMode=0;
},1);

C$.$fields$=[['I',['distanceMode'],'S',['resourceName'],'O',['potentials','float[]','atomCoordAngstroms','javajs.util.P3[]','bsSelected','javajs.util.BS','vwr','org.jmol.viewer.Viewer','htAtomicPotentials','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.rangeBohrOrAngstroms=8;
this.distanceMode=0;
this.unitFactor=1;
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
});

Clazz.newMeth(C$, 'assignPotentials$org_jmol_modelset_AtomA$FA$javajs_util_BS$javajs_util_BS$javajs_util_BS$S', function (atoms, potentials, bsAromatic, bsCarbonyl, bsIgnore, data) {
this.getAtomicPotentials$S$S(data, null);
for (var i=0; i < atoms.length; i++) {
var f;
if (bsIgnore != null  && bsIgnore.get$I(i) ) {
f=NaN;
} else {
f=this.getTabulatedPotential$org_jmol_modelset_Atom(atoms[i]);
if (Float.isNaN$F(f)) f=0;
}if ($I$(1).debugging) (function(a,f){return f.apply(null,a)})([atoms[i].getInfo$() + " " + new Float(f).toString() ],$I$(1).debug$S);
potentials[i]=f;
}
});

Clazz.newMeth(C$, 'setup$I$FA$javajs_util_P3A$javajs_util_BS', function (calcType, potentials, atomCoordAngstroms, bsSelected) {
if (calcType >= 0) this.distanceMode=calcType;
this.potentials=potentials;
this.atomCoordAngstroms=atomCoordAngstroms;
this.bsSelected=bsSelected;
});

Clazz.newMeth(C$, 'calculate$org_jmol_jvxl_data_VolumeData$javajs_util_BS$javajs_util_P3A$org_jmol_modelset_AtomA$FA$I', function (volumeData, bsSelected, xyz, atoms, potentials, calcType) {
this.setup$I$FA$javajs_util_P3A$javajs_util_BS(calcType, potentials, atoms, bsSelected);
this.voxelData=volumeData.getVoxelData$();
this.countsXYZ=volumeData.getVoxelCounts$();
this.initialize$I$I$I$javajs_util_T3A(this.countsXYZ[0], this.countsXYZ[1], this.countsXYZ[2], null);
this.setupCoordinates$FA$FA$javajs_util_BS$javajs_util_T3A$org_jmol_modelset_AtomA$javajs_util_T3A$Z(volumeData.getOriginFloat$(), volumeData.getVolumetricVectorLengths$(), bsSelected, xyz, atoms, null, false);
this.setXYZBohr$javajs_util_T3A(this.points);
this.process$();
});

Clazz.newMeth(C$, 'getValueAtPoint$javajs_util_P3', function (pt) {
var value=0;
for (var i=this.bsSelected.nextSetBit$I(0); i >= 0; i=this.bsSelected.nextSetBit$I(i + 1)) {
var x=this.potentials[i];
var d2=pt.distanceSquared$javajs_util_T3(this.atomCoordAngstroms[i]);
value += this.valueFor$F$F$I(x, d2, this.distanceMode);
}
return value;
});

Clazz.newMeth(C$, 'process$', function () {
for (var atomIndex=this.qmAtoms.length; --atomIndex >= 0; ) {
if ((this.thisAtom=this.qmAtoms[atomIndex]) == null ) continue;
var x0=this.potentials[atomIndex];
if ($I$(1).debugging) (function(a,f){return f.apply(null,a)})(["process map for atom " + atomIndex + this.thisAtom + "  charge=" + new Float(x0).toString() ],$I$(1).debug$S);
this.thisAtom.setXYZ$org_jmol_quantum_QuantumCalculation$Z(this, true);
for (var ix=this.xMax; --ix >= this.xMin; ) {
var dX=this.X2[ix];
for (var iy=this.yMax; --iy >= this.yMin; ) {
var dXY=dX + this.Y2[iy];
for (var iz=this.zMax; --iz >= this.zMin; ) {
this.voxelData[ix][iy][iz] += this.valueFor$F$F$I(x0, dXY + this.Z2[iz], this.distanceMode);
}
}
}
}
});

Clazz.newMeth(C$, 'valueFor$F$F$I', function (x0, d2, distanceMode) {
switch (distanceMode) {
case 0:
return (d2 == 0  ? x0 * Infinity : x0 / Math.sqrt(d2));
case 2:
return x0 / (1 + Math.sqrt(d2));
case 1:
return x0 * Math.exp(-Math.sqrt(d2) / 2);
case 3:
return x0 * Math.exp(-Math.sqrt(d2));
}
return x0;
});

Clazz.newMeth(C$, 'getTabulatedPotential$org_jmol_modelset_Atom', function (atom) {
var name=atom.getAtomType$();
var g1=atom.getGroup1$C("\u0000");
var type=atom.getBioStructureTypeName$();
if (g1.length$() == 0) {
g1=atom.getGroup3$Z(true);
if (g1 == null ) g1="";
}var key=g1 + name;
var o=this.htAtomicPotentials.get$O(key);
if (o == null  && type.length$() > 0 ) o=this.htAtomicPotentials.get$O("_" + type.charAt$I(0) + name );
return (Clazz.instanceOf(o, "java.lang.Float") ? (o).floatValue$() : NaN);
});

Clazz.newMeth(C$, 'getAtomicPotentials$S$S', function (data, resourceName) {
var br=null;
this.htAtomicPotentials=Clazz.new_($I$(2,1));
try {
br=(data == null  ? $I$(3).getBufferedReaderForResource$org_jmol_viewer_Viewer$O$S$S(this.vwr, this, "org/jmol/quantum/", resourceName) : $I$(4).getBR$S(data));
var line;
while ((line=br.readLine$()) != null ){
if (line.startsWith$S("#")) continue;
var vs=$I$(5).getTokens$S(line);
if (vs.length < 2) continue;
if ($I$(1).debugging) $I$(1).debug$S(line);
this.htAtomicPotentials.put$O$O(vs[0], Float.valueOf$F($I$(5).parseFloat$S(vs[1])));
}
br.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
(function(a,f){return f.apply(null,a)})(["Exception " + e.toString() + " in getResource " + resourceName ],$I$(1).error$S);
try {
br.close$();
} catch (ee) {
if (Clazz.exceptionOf(ee,"Exception")){
} else {
throw ee;
}
}
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'createCube$', function () {
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:15 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
