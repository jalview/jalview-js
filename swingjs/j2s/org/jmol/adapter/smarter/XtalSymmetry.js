(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.Lst','javajs.util.P3i','org.jmol.symmetry.Symmetry','javajs.util.PT','org.jmol.util.SimpleUnitCell','org.jmol.util.BSUtil','javajs.util.BS','javajs.util.V3','javajs.util.M4','org.jmol.symmetry.SymmetryOperation','javajs.util.SB','java.util.Hashtable','org.jmol.adapter.smarter.Atom','javajs.util.M3']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XtalSymmetry");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.unitCellParams=Clazz.array(Float.TYPE, [6]);
this.applySymmetryToBonds=false;
this.doNormalize=true;
this.doPackUnitCell=false;
this.ptOffset=Clazz.new_($I$(1,1));
this.dtype=3;
},1);

C$.$fields$=[['Z',['doCentroidUnitCell','centroidPacked','applySymmetryToBonds','doNormalize','doPackUnitCell','checkAll','latticeOnly'],'F',['symmetryRange','packingError','rminx','rminy','rminz','rmaxx','rmaxy','rmaxz'],'I',['bondCount0','dtype','latticeOp','noSymmetryCount','firstAtom','nVib'],'S',['filterSymop'],'O',['asc','org.jmol.adapter.smarter.AtomSetCollection','acr','org.jmol.adapter.smarter.AtomSetCollectionReader','symmetry','org.jmol.api.SymmetryInterface','unitCellParams','float[]','+baseUnitCell','latticeCells','int[]','trajectoryUnitCells','javajs.util.Lst','baseSymmetry','org.jmol.api.SymmetryInterface','+sym2','ptOffset','javajs.util.P3','minXYZ','javajs.util.P3i','+maxXYZ','minXYZ0','javajs.util.P3','+maxXYZ0','unitCellTranslations','javajs.util.V3[]','ptTemp','javajs.util.P3','mTemp','javajs.util.M3']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_adapter_smarter_AtomSetCollectionReader', function (reader) {
this.acr=reader;
this.asc=reader.asc;
this.getSymmetry$();
return this;
});

Clazz.newMeth(C$, 'getSymmetry$', function () {
return (this.symmetry == null  ? (this.symmetry=this.acr.getInterface$S("org.jmol.symmetry.Symmetry")) : this.symmetry);
});

Clazz.newMeth(C$, 'setSymmetry$org_jmol_api_SymmetryInterface', function (symmetry) {
return (this.symmetry=symmetry);
});

Clazz.newMeth(C$, 'setSymmetryRange$F', function (factor) {
this.symmetryRange=factor;
this.asc.setInfo$S$O("symmetryRange", Float.valueOf$F(factor));
}, p$1);

Clazz.newMeth(C$, 'setLatticeCells', function () {
this.latticeCells=this.acr.latticeCells;
var isLatticeRange=(this.latticeCells[0] <= 555 && this.latticeCells[1] >= 555  && (this.latticeCells[2] == 0 || this.latticeCells[2] == 1  || this.latticeCells[2] == -1 ) );
this.doNormalize=this.latticeCells[0] != 0 && (!isLatticeRange || this.latticeCells[2] == 1 ) ;
this.applySymmetryToBonds=this.acr.applySymmetryToBonds;
this.doPackUnitCell=this.acr.doPackUnitCell;
this.doCentroidUnitCell=this.acr.doCentroidUnitCell;
this.centroidPacked=this.acr.centroidPacked;
this.filterSymop=this.acr.filterSymop;
}, p$1);

Clazz.newMeth(C$, 'setUnitCell$FA$javajs_util_M3$javajs_util_P3', function (info, matUnitCellOrientation, unitCellOffset) {
this.unitCellParams=Clazz.array(Float.TYPE, [info.length]);
for (var i=0; i < info.length; i++) this.unitCellParams[i]=info[i];

this.asc.haveUnitCell=true;
this.asc.setCurrentModelInfo$S$O("unitCellParams", this.unitCellParams);
if (this.asc.isTrajectory) {
if (this.trajectoryUnitCells == null ) {
this.trajectoryUnitCells=Clazz.new_($I$(2,1));
this.asc.setInfo$S$O("unitCells", this.trajectoryUnitCells);
}this.trajectoryUnitCells.addLast$O(this.unitCellParams);
}this.asc.setGlobalBoolean$I(2);
this.getSymmetry$().setUnitCell$FA$Z(this.unitCellParams, false);
if (unitCellOffset != null ) {
this.symmetry.setOffsetPt$javajs_util_T3(unitCellOffset);
this.asc.setCurrentModelInfo$S$O("unitCellOffset", unitCellOffset);
}if (matUnitCellOrientation != null ) {
this.symmetry.initializeOrientation$javajs_util_M3(matUnitCellOrientation);
this.asc.setCurrentModelInfo$S$O("matUnitCellOrientation", matUnitCellOrientation);
}}, p$1);

Clazz.newMeth(C$, 'addSpaceGroupOperation$S$Z', function (xyz, andSetLattice) {
if (andSetLattice) p$1.setLatticeCells.apply(this, []);
this.symmetry.setSpaceGroup$Z(this.doNormalize);
return this.symmetry.addSpaceGroupOperation$S$I(xyz, 0);
});

Clazz.newMeth(C$, 'setLatticeParameter$I', function (latt) {
this.symmetry.setSpaceGroup$Z(this.doNormalize);
this.symmetry.setLattice$I(latt);
});

Clazz.newMeth(C$, 'applySymmetryFromReader$org_jmol_api_SymmetryInterface', function (readerSymmetry) {
this.asc.setCoordinatesAreFractional$Z(this.acr.iHaveFractionalCoordinates);
p$1.setUnitCell$FA$javajs_util_M3$javajs_util_P3.apply(this, [this.acr.unitCellParams, this.acr.matUnitCellOrientation, this.acr.unitCellOffset]);
p$1.setAtomSetSpaceGroupName$S.apply(this, [this.acr.sgName]);
p$1.setSymmetryRange$F.apply(this, [this.acr.symmetryRange]);
if (this.acr.doConvertToFractional || this.acr.fileCoordinatesAreFractional ) {
p$1.setLatticeCells.apply(this, []);
var doApplySymmetry=true;
if (this.acr.ignoreFileSpaceGroupName || !this.acr.iHaveSymmetryOperators ) {
if (!this.acr.merging || readerSymmetry == null  ) readerSymmetry=this.acr.getNewSymmetry$();
doApplySymmetry=readerSymmetry.createSpaceGroup$I$S$O$I(this.acr.desiredSpaceGroupIndex, (this.acr.sgName.indexOf$S("!") >= 0 ? "P1" : this.acr.sgName), this.acr.unitCellParams, this.acr.modDim);
} else {
this.acr.doPreSymmetry$();
readerSymmetry=null;
}this.packingError=this.acr.packingError;
if (doApplySymmetry) {
if (readerSymmetry != null ) this.setSpaceGroupFrom$org_jmol_api_SymmetryInterface(readerSymmetry);
p$1.applySymmetryLattice.apply(this, []);
if (readerSymmetry != null  && this.filterSymop == null  ) p$1.setAtomSetSpaceGroupName$S.apply(this, [readerSymmetry.getSpaceGroupName$()]);
}}if (this.acr.iHaveFractionalCoordinates && this.acr.merging && readerSymmetry != null   ) {
var atoms=this.asc.atoms;
for (var i=this.asc.getLastAtomSetAtomIndex$(), n=this.asc.ac; i < n; i++) readerSymmetry.toCartesian$javajs_util_T3$Z(atoms[i], true);

this.asc.setCoordinatesAreFractional$Z(false);
this.acr.addVibrations=false;
}return this.symmetry;
});

Clazz.newMeth(C$, 'setSpaceGroupFrom$org_jmol_api_SymmetryInterface', function (readerSymmetry) {
this.getSymmetry$().setSpaceGroupFrom$org_jmol_api_SymmetryInterface(readerSymmetry);
});

Clazz.newMeth(C$, 'setAtomSetSpaceGroupName$S', function (spaceGroupName) {
this.symmetry.setSpaceGroupName$S(spaceGroupName);
this.asc.setCurrentModelInfo$S$O("spaceGroup", spaceGroupName + "");
}, p$1);

Clazz.newMeth(C$, 'applySymmetryLattice', function () {
if (!this.asc.coordinatesAreFractional || this.symmetry.getSpaceGroup$() == null  ) return;
this.sym2=null;
var maxX=this.latticeCells[0];
var maxY=this.latticeCells[1];
var maxZ=Math.abs(this.latticeCells[2]);
var kcode=this.latticeCells[3];
var dim=(this.symmetry.getUnitCellInfoType$I(6)|0);
this.firstAtom=this.asc.getLastAtomSetAtomIndex$();
var bsAtoms=this.asc.bsAtoms;
if (bsAtoms != null ) {
p$1.updateBSAtoms.apply(this, []);
this.firstAtom=bsAtoms.nextSetBit$I(this.firstAtom);
}this.rminx=this.rminy=this.rminz=3.4028235E38;
this.rmaxx=this.rmaxy=this.rmaxz=-3.4028235E38;
var pt0=null;
if (this.acr.latticeType == null ) this.acr.latticeType=this.symmetry.getLatticeType$();
if (this.acr.isPrimitive) {
this.asc.setCurrentModelInfo$S$O("isprimitive", Boolean.TRUE);
if (!"P".equals$O(this.acr.latticeType) || this.acr.primitiveToCrystal != null  ) {
this.asc.setCurrentModelInfo$S$O("unitcell_conventional", this.symmetry.getConventionalUnitCell$S$javajs_util_M3(this.acr.latticeType, this.acr.primitiveToCrystal));
}}if (this.acr.latticeType != null ) {
this.asc.setCurrentModelInfo$S$O("latticeType", this.acr.latticeType);
if (Clazz.instanceOf(this.acr.fillRange, "java.lang.String")) {
var type=this.acr.fillRange;
if (type.equals$O("conventional")) {
this.acr.fillRange=this.symmetry.getConventionalUnitCell$S$javajs_util_M3(this.acr.latticeType, this.acr.primitiveToCrystal);
} else if (type.equals$O("primitive")) {
this.acr.fillRange=this.symmetry.getUnitCellVectors$();
this.symmetry.toFromPrimitive$Z$C$javajs_util_T3A$javajs_util_M3(true, this.acr.latticeType.charAt$I(0), this.acr.fillRange, this.acr.primitiveToCrystal);
} else {
this.acr.fillRange=null;
}if (this.acr.fillRange != null ) this.acr.addJmolScript$S("unitcell " + type);
}}if (this.acr.fillRange != null ) {
bsAtoms=p$1.updateBSAtoms.apply(this, []);
this.acr.forcePacked=true;
this.doPackUnitCell=false;
this.minXYZ=Clazz.new_($I$(3,1));
this.maxXYZ=$I$(3).new3$I$I$I(1, 1, 1);
var oabc=Clazz.array($I$(1), [4]);
for (var i=0; i < 4; i++) oabc[i]=$I$(1,"newP$javajs_util_T3",[(this.acr.fillRange)[i]]);

p$1.adjustRangeMinMax$javajs_util_T3A.apply(this, [oabc]);
if (this.sym2 == null ) {
this.sym2=Clazz.new_($I$(4,1));
this.sym2.getUnitCell$javajs_util_T3A$Z$S(this.acr.fillRange, false, null);
}p$1.applyAllSymmetry$org_jmol_adapter_smarter_MSInterface$javajs_util_BS.apply(this, [this.acr.ms, bsAtoms]);
pt0=Clazz.new_($I$(1,1));
var atoms=this.asc.atoms;
for (var i=this.asc.ac; --i >= this.firstAtom; ) {
pt0.setT$javajs_util_T3(atoms[i]);
this.symmetry.toCartesian$javajs_util_T3$Z(pt0, false);
this.sym2.toFractional$javajs_util_T3$Z(pt0, false);
if (this.acr.fixJavaFloat) $I$(5).fixPtFloats$javajs_util_T3$F(pt0, 100000.0);
if (!this.isWithinCell$I$javajs_util_P3$F$F$F$F$F$F$F(this.dtype, pt0, 0, 1, 0, 1, 0, 1, this.packingError)) bsAtoms.clear$I(i);
}
return;
}var offset=null;
this.nVib=0;
var va=null;
var vb=null;
var vc=null;
this.baseSymmetry=this.symmetry;
var supercell=this.acr.strSupercell;
var oabc=null;
var isSuper=(supercell != null  && supercell.indexOf$S(",") >= 0 );
if (isSuper) {
oabc=this.symmetry.getV0abc$O(supercell);
if (oabc != null ) {
this.minXYZ=Clazz.new_($I$(3,1));
this.maxXYZ=$I$(3).new3$I$I$I(maxX, maxY, maxZ);
$I$(6).setMinMaxLatticeParameters$I$javajs_util_P3i$javajs_util_P3i$I(dim, this.minXYZ, this.maxXYZ, kcode);
pt0=$I$(1).newP$javajs_util_T3(oabc[0]);
va=$I$(1).newP$javajs_util_T3(oabc[1]);
vb=$I$(1).newP$javajs_util_T3(oabc[2]);
vc=$I$(1).newP$javajs_util_T3(oabc[3]);
p$1.adjustRangeMinMax$javajs_util_T3A.apply(this, [oabc]);
}}var iAtomFirst=this.asc.getLastAtomSetAtomIndex$();
if (bsAtoms != null ) iAtomFirst=bsAtoms.nextSetBit$I(iAtomFirst);
if (this.rminx == 3.4028235E38 ) {
supercell=null;
oabc=null;
} else {
var doPack0=this.doPackUnitCell;
this.doPackUnitCell=doPack0;
bsAtoms=p$1.updateBSAtoms.apply(this, []);
p$1.applyAllSymmetry$org_jmol_adapter_smarter_MSInterface$javajs_util_BS.apply(this, [this.acr.ms, null]);
this.doPackUnitCell=doPack0;
var atoms=this.asc.atoms;
var atomCount=this.asc.ac;
for (var i=iAtomFirst; i < atomCount; i++) {
this.symmetry.toCartesian$javajs_util_T3$Z(atoms[i], true);
bsAtoms.set$I(i);
}
this.symmetry=null;
this.symmetry=this.getSymmetry$();
p$1.setUnitCell$FA$javajs_util_M3$javajs_util_P3.apply(this, [Clazz.array(Float.TYPE, -1, [0, 0, 0, 0, 0, 0, va.x, va.y, va.z, vb.x, vb.y, vb.z, vc.x, vc.y, vc.z]), null, offset]);
p$1.setAtomSetSpaceGroupName$S.apply(this, [oabc == null  || supercell == null   ? "P1" : "cell=" + supercell]);
this.symmetry.setSpaceGroup$Z(this.doNormalize);
this.symmetry.addSpaceGroupOperation$S$I("x,y,z", 0);
if (pt0 != null ) this.symmetry.toFractional$javajs_util_T3$Z(pt0, true);
for (var i=iAtomFirst; i < atomCount; i++) {
this.symmetry.toFractional$javajs_util_T3$Z(atoms[i], true);
if (pt0 != null ) atoms[i].sub$javajs_util_T3(pt0);
}
this.asc.haveAnisou=false;
this.asc.setCurrentModelInfo$S$O("matUnitCellOrientation", null);
}this.minXYZ=Clazz.new_($I$(3,1));
this.maxXYZ=$I$(3).new3$I$I$I(maxX, maxY, maxZ);
$I$(6).setMinMaxLatticeParameters$I$javajs_util_P3i$javajs_util_P3i$I(dim, this.minXYZ, this.maxXYZ, kcode);
if (oabc == null ) {
p$1.applyAllSymmetry$org_jmol_adapter_smarter_MSInterface$javajs_util_BS.apply(this, [this.acr.ms, bsAtoms]);
return;
}if (this.acr.forcePacked || this.doPackUnitCell ) {
var atoms=this.asc.atoms;
var bs=p$1.updateBSAtoms.apply(this, []);
for (var i=bs.nextSetBit$I(iAtomFirst); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (!this.isWithinCell$I$javajs_util_P3$F$F$F$F$F$F$F(this.dtype, atoms[i], this.minXYZ.x, this.maxXYZ.x, this.minXYZ.y, this.maxXYZ.y, this.minXYZ.z, this.maxXYZ.z, this.packingError)) bs.clear$I(i);
}
}}, p$1);

Clazz.newMeth(C$, 'updateBSAtoms', function () {
var bs=this.asc.bsAtoms;
if (bs == null ) bs=this.asc.bsAtoms=$I$(7).newBitSet2$I$I(0, this.asc.ac);
if (bs.nextSetBit$I(this.firstAtom) < 0) bs.setBits$I$I(this.firstAtom, this.asc.ac);
return bs;
}, p$1);

Clazz.newMeth(C$, 'adjustRangeMinMax$javajs_util_T3A', function (oabc) {
var pa=Clazz.new_($I$(1,1));
var pb=Clazz.new_($I$(1,1));
var pc=Clazz.new_($I$(1,1));
if (this.acr.forcePacked) {
pa.setT$javajs_util_T3(oabc[1]);
pb.setT$javajs_util_T3(oabc[2]);
pc.setT$javajs_util_T3(oabc[3]);
pa.scale$F(this.packingError);
pb.scale$F(this.packingError);
pc.scale$F(this.packingError);
}oabc[0].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.minXYZ.x, oabc[1], oabc[0]);
oabc[0].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.minXYZ.y, oabc[2], oabc[0]);
oabc[0].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.minXYZ.z, oabc[3], oabc[0]);
oabc[0].sub$javajs_util_T3(pa);
oabc[0].sub$javajs_util_T3(pb);
oabc[0].sub$javajs_util_T3(pc);
var pt=$I$(1).newP$javajs_util_T3(oabc[0]);
this.symmetry.toFractional$javajs_util_T3$Z(pt, true);
p$1.setSymmetryMinMax$javajs_util_P3.apply(this, [pt]);
oabc[1].scale$F(this.maxXYZ.x - this.minXYZ.x);
oabc[2].scale$F(this.maxXYZ.y - this.minXYZ.y);
oabc[3].scale$F(this.maxXYZ.z - this.minXYZ.z);
oabc[1].scaleAdd2$F$javajs_util_T3$javajs_util_T3(2, pa, oabc[1]);
oabc[2].scaleAdd2$F$javajs_util_T3$javajs_util_T3(2, pb, oabc[2]);
oabc[3].scaleAdd2$F$javajs_util_T3$javajs_util_T3(2, pc, oabc[3]);
for (var i=0; i < 3; i++) {
for (var j=i + 1; j < 4; j++) {
pt.add2$javajs_util_T3$javajs_util_T3(oabc[i], oabc[j]);
if (i != 0) pt.add$javajs_util_T3(oabc[0]);
this.symmetry.toFractional$javajs_util_T3$Z(pt, false);
p$1.setSymmetryMinMax$javajs_util_P3.apply(this, [pt]);
}
}
this.symmetry.toCartesian$javajs_util_T3$Z(pt, false);
pt.add$javajs_util_T3(oabc[1]);
this.symmetry.toFractional$javajs_util_T3$Z(pt, false);
p$1.setSymmetryMinMax$javajs_util_P3.apply(this, [pt]);
this.minXYZ=$I$(3,"new3$I$I$I",[(Math.min(0, Math.floor(this.rminx + 0.001))|0), (Math.min(0, Math.floor(this.rminy + 0.001))|0), (Math.min(0, Math.floor(this.rminz + 0.001))|0)]);
this.maxXYZ=$I$(3,"new3$I$I$I",[(Math.max(1, Math.ceil(this.rmaxx - 0.001))|0), (Math.max(1, Math.ceil(this.rmaxy - 0.001))|0), (Math.max(1, Math.ceil(this.rmaxz - 0.001))|0)]);
}, p$1);

Clazz.newMeth(C$, 'setSymmetryMinMax$javajs_util_P3', function (c) {
if (this.rminx > c.x ) this.rminx=c.x;
if (this.rminy > c.y ) this.rminy=c.y;
if (this.rminz > c.z ) this.rminz=c.z;
if (this.rmaxx < c.x ) this.rmaxx=c.x;
if (this.rmaxy < c.y ) this.rmaxy=c.y;
if (this.rmaxz < c.z ) this.rmaxz=c.z;
}, p$1);

Clazz.newMeth(C$, 'isWithinCell$I$javajs_util_P3$F$F$F$F$F$F$F', function (dtype, pt, minX, maxX, minY, maxY, minZ, maxZ, slop) {
return (pt.x > minX - slop  && pt.x < maxX + slop   && (dtype < 2 || pt.y > minY - slop  && pt.y < maxY + slop   )  && (dtype < 3 || pt.z > minZ - slop  && pt.z < maxZ + slop   ) );
});

Clazz.newMeth(C$, 'applyAllSymmetry$org_jmol_adapter_smarter_MSInterface$javajs_util_BS', function (ms, bsAtoms) {
if (this.asc.ac == 0 || bsAtoms != null  && bsAtoms.isEmpty$()  ) return;
var n=this.noSymmetryCount=this.asc.baseSymmetryAtomCount > 0 ? this.asc.baseSymmetryAtomCount : bsAtoms == null  ? this.asc.getLastAtomSetAtomCount$() : this.asc.ac - bsAtoms.nextSetBit$I(this.asc.getLastAtomSetAtomIndex$());
this.asc.setTensors$();
this.bondCount0=this.asc.bondCount;
p$1.finalizeSymmetry$org_jmol_api_SymmetryInterface.apply(this, [this.symmetry]);
var operationCount=this.symmetry.getSpaceGroupOperationCount$();
var excludedOps=(this.acr.thisBiomolecule == null  ? null : Clazz.new_($I$(8,1)));
if (excludedOps != null ) this.asc.checkSpecial=true;
this.dtype=(this.symmetry.getUnitCellInfoType$I(6)|0);
$I$(6).setMinMaxLatticeParameters$I$javajs_util_P3i$javajs_util_P3i$I(this.dtype, this.minXYZ, this.maxXYZ, 0);
this.latticeOp=this.symmetry.getLatticeOp$();
this.latticeOnly=(this.asc.checkLatticeOnly && this.latticeOp >= 0 );
if (this.doCentroidUnitCell) this.asc.setInfo$S$O("centroidMinMax", Clazz.array(Integer.TYPE, -1, [this.minXYZ.x, this.minXYZ.y, this.minXYZ.z, this.maxXYZ.x, this.maxXYZ.y, this.maxXYZ.z, (this.centroidPacked ? 1 : 0)]));
if (this.doCentroidUnitCell || this.doPackUnitCell || this.symmetryRange != 0  && this.maxXYZ.x - this.minXYZ.x == 1  && this.maxXYZ.y - this.minXYZ.y == 1  && this.maxXYZ.z - this.minXYZ.z == 1   ) {
this.minXYZ0=$I$(1).new3$F$F$F(this.minXYZ.x, this.minXYZ.y, this.minXYZ.z);
this.maxXYZ0=$I$(1).new3$F$F$F(this.maxXYZ.x, this.maxXYZ.y, this.maxXYZ.z);
if (ms != null ) {
ms.setMinMax0$javajs_util_P3$javajs_util_P3(this.minXYZ0, this.maxXYZ0);
this.minXYZ.set$I$I$I((this.minXYZ0.x|0), (this.minXYZ0.y|0), (this.minXYZ0.z|0));
this.maxXYZ.set$I$I$I((this.maxXYZ0.x|0), (this.maxXYZ0.y|0), (this.maxXYZ0.z|0));
}switch (this.dtype) {
case 3:
this.minXYZ.z--;
this.maxXYZ.z++;
case 2:
this.minXYZ.y--;
this.maxXYZ.y++;
case 1:
this.minXYZ.x--;
this.maxXYZ.x++;
}
}var nCells=(this.maxXYZ.x - this.minXYZ.x) * (this.maxXYZ.y - this.minXYZ.y) * (this.maxXYZ.z - this.minXYZ.z) ;
var nsym=n * (this.latticeOnly ? 4 : operationCount);
var cartesianCount=(this.asc.checkSpecial || this.acr.thisBiomolecule != null   ? nsym * nCells : this.symmetryRange > 0  ? nsym : 1);
var cartesians=Clazz.array($I$(1), [cartesianCount]);
var atoms=this.asc.atoms;
for (var i=0; i < n; i++) atoms[this.firstAtom + i].bsSymmetry=$I$(8,"newN$I",[operationCount * (nCells + 1)]);

var pt=0;
var unitCells=Clazz.array(Integer.TYPE, [nCells]);
this.unitCellTranslations=Clazz.array($I$(9), [nCells]);
var iCell=0;
var cell555Count=0;
var absRange=Math.abs(this.symmetryRange);
var checkCartesianRange=(this.symmetryRange != 0 );
var checkRangeNoSymmetry=(this.symmetryRange < 0 );
var checkRange111=(this.symmetryRange > 0 );
if (checkCartesianRange) {
this.rminx=this.rminy=this.rminz=3.4028235E38;
this.rmaxx=this.rmaxy=this.rmaxz=-3.4028235E38;
}var thisSymmetry=this.symmetry;
var lastSymmetry=thisSymmetry;
this.checkAll=(this.latticeOnly || this.asc.atomSetCount == 1 && this.asc.checkSpecial  && this.latticeOp >= 0  );
var pttemp=null;
var op=thisSymmetry.getSpaceGroupOperation$I(0);
if (this.doPackUnitCell) {
pttemp=Clazz.new_($I$(1,1));
this.ptOffset.set$F$F$F(0, 0, 0);
}var atomMap=(this.bondCount0 > this.asc.bondIndex0 && this.applySymmetryToBonds  ? Clazz.array(Integer.TYPE, [n]) : null);
var lstNCS=this.acr.lstNCS;
if (lstNCS != null  && lstNCS.get$I(0).m33 == 0  ) {
var nOp=thisSymmetry.getSpaceGroupOperationCount$();
var nn=lstNCS.size$();
for (var i=nn; --i >= 0; ) {
var m=lstNCS.get$I(i);
m.m33=1;
thisSymmetry.toFractionalM$javajs_util_M4(m);
}
for (var i=1; i < nOp; i++) {
var m1=thisSymmetry.getSpaceGroupOperation$I(i);
for (var j=0; j < nn; j++) {
var m=$I$(10,"newM4$javajs_util_M4",[lstNCS.get$I(j)]);
m.mul2$javajs_util_M4$javajs_util_M4(m1, m);
if (this.doNormalize) $I$(11).setOffset$javajs_util_M4$javajs_util_P3A$I$I(m, atoms, this.firstAtom, this.noSymmetryCount);
lstNCS.addLast$O(m);
}
}
}for (var tx=this.minXYZ.x; tx < this.maxXYZ.x; tx++) for (var ty=this.minXYZ.y; ty < this.maxXYZ.y; ty++) for (var tz=this.minXYZ.z; tz < this.maxXYZ.z; tz++) {
this.unitCellTranslations[iCell]=$I$(9).new3$F$F$F(tx, ty, tz);
unitCells[iCell++]=555 + tx * 100 + ty * 10 + tz;
if (tx != 0 || ty != 0  || tz != 0  || cartesians.length == 0 ) continue;
for (pt=0; pt < n; pt++) {
var atom=atoms[this.firstAtom + pt];
if (ms != null ) {
thisSymmetry=ms.getAtomSymmetry$org_jmol_adapter_smarter_Atom$org_jmol_api_SymmetryInterface(atom, this.symmetry);
if (thisSymmetry !== lastSymmetry ) {
if (thisSymmetry.getSpaceGroupOperationCount$() == 0) p$1.finalizeSymmetry$org_jmol_api_SymmetryInterface.apply(this, [lastSymmetry=thisSymmetry]);
op=thisSymmetry.getSpaceGroupOperation$I(0);
}}var c=$I$(1).newP$javajs_util_T3(atom);
op.rotTrans$javajs_util_T3(c);
thisSymmetry.toCartesian$javajs_util_T3$Z(c, false);
if (this.doPackUnitCell) {
thisSymmetry.toUnitCell$javajs_util_T3$javajs_util_T3(c, this.ptOffset);
pttemp.setT$javajs_util_T3(c);
thisSymmetry.toFractional$javajs_util_T3$Z(pttemp, false);
if (this.acr.fixJavaFloat) $I$(5).fixPtFloats$javajs_util_T3$F(pttemp, 100000.0);
if (bsAtoms == null ) atom.setT$javajs_util_T3(pttemp);
 else if (atom.distance$javajs_util_T3(pttemp) < 1.0E-4 ) bsAtoms.set$I(atom.index);
 else {
bsAtoms.clear$I(atom.index);
continue;
}}if (bsAtoms != null ) atom.bsSymmetry.clearAll$();
atom.bsSymmetry.set$I(iCell * operationCount);
atom.bsSymmetry.set$I(0);
if (checkCartesianRange) p$1.setSymmetryMinMax$javajs_util_P3.apply(this, [c]);
if (pt < cartesianCount) cartesians[pt]=c;
}
if (checkRangeNoSymmetry) {
this.rminx -= absRange;
this.rminy -= absRange;
this.rminz -= absRange;
this.rmaxx += absRange;
this.rmaxy += absRange;
this.rmaxz += absRange;
}cell555Count=pt=p$1.symmetryAddAtoms$I$I$I$I$I$I$javajs_util_P3A$org_jmol_adapter_smarter_MSInterface$javajs_util_BS$IA.apply(this, [0, 0, 0, 0, pt, iCell * operationCount, cartesians, ms, excludedOps, atomMap]);
}


if (checkRange111) {
this.rminx -= absRange;
this.rminy -= absRange;
this.rminz -= absRange;
this.rmaxx += absRange;
this.rmaxy += absRange;
this.rmaxz += absRange;
}iCell=0;
for (var tx=this.minXYZ.x; tx < this.maxXYZ.x; tx++) for (var ty=this.minXYZ.y; ty < this.maxXYZ.y; ty++) for (var tz=this.minXYZ.z; tz < this.maxXYZ.z; tz++) {
iCell++;
if (tx != 0 || ty != 0  || tz != 0 ) pt=p$1.symmetryAddAtoms$I$I$I$I$I$I$javajs_util_P3A$org_jmol_adapter_smarter_MSInterface$javajs_util_BS$IA.apply(this, [tx, ty, tz, cell555Count, pt, iCell * operationCount, cartesians, ms, excludedOps, atomMap]);
}


if (iCell * n == this.asc.ac - this.firstAtom) p$1.duplicateAtomProperties$I.apply(this, [iCell]);
p$1.setSymmetryOps.apply(this, []);
this.asc.setCurrentModelInfo$S$O("presymmetryAtomIndex", Integer.valueOf$I(this.firstAtom));
this.asc.setCurrentModelInfo$S$O("presymmetryAtomCount", Integer.valueOf$I(n));
this.asc.setCurrentModelInfo$S$O("latticeDesignation", thisSymmetry.getLatticeDesignation$());
this.asc.setCurrentModelInfo$S$O("unitCellRange", unitCells);
this.asc.setCurrentModelInfo$S$O("unitCellTranslations", this.unitCellTranslations);
this.baseUnitCell=this.unitCellParams;
this.unitCellParams=Clazz.array(Float.TYPE, [6]);
p$1.reset.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'symmetryAddAtoms$I$I$I$I$I$I$javajs_util_P3A$org_jmol_adapter_smarter_MSInterface$javajs_util_BS$IA', function (transX, transY, transZ, baseCount, pt, iCellOpPt, cartesians, ms, excludedOps, atomMap) {
var isBaseCell=(baseCount == 0);
var addBonds=(atomMap != null );
if (this.doPackUnitCell) this.ptOffset.set$F$F$F(transX, transY, transZ);
var range2=this.symmetryRange * this.symmetryRange;
var checkRangeNoSymmetry=(this.symmetryRange < 0 );
var checkRange111=(this.symmetryRange > 0 );
var checkSymmetryMinMax=(isBaseCell && checkRange111 );
checkRange111&=!isBaseCell;
var nOp=this.symmetry.getSpaceGroupOperationCount$();
var lstNCS=this.acr.lstNCS;
var nNCS=(lstNCS == null  ? 0 : lstNCS.size$());
var nOperations=nOp + nNCS;
nNCS=(nNCS/nOp|0);
var checkSpecial=(nOperations == 1 && !this.doPackUnitCell  ? false : this.asc.checkSpecial);
var checkSymmetryRange=(checkRangeNoSymmetry || checkRange111 );
var checkDistances=(checkSpecial || checkSymmetryRange );
var checkOps=(excludedOps != null );
var addCartesian=(checkSpecial || checkSymmetryMinMax );
var bsAtoms=(this.acr.isMolecular ? null : this.asc.bsAtoms);
var symmetry=this.symmetry;
if (checkRangeNoSymmetry) baseCount=this.noSymmetryCount;
var atomMax=this.firstAtom + this.noSymmetryCount;
var ptAtom=Clazz.new_($I$(1,1));
var code=null;
var d0=(checkOps ? 0.01 : 1.0E-4);
var subSystemId="\u0000";
var j00=(bsAtoms == null  ? this.firstAtom : bsAtoms.nextSetBit$I(this.firstAtom));
 out : for (var iSym=0; iSym < nOperations; iSym++) {
if (isBaseCell && iSym == 0  || this.latticeOnly && iSym > 0  && (iSym % this.latticeOp) != 0   || excludedOps != null  && excludedOps.get$I(iSym)  ) continue;
var pt0=this.firstAtom + (checkSpecial || excludedOps != null   ? pt : checkRange111 ? baseCount : 0);
var spinOp=(iSym >= nOp ? 0 : this.asc.vibScale == 0 ? symmetry.getSpinOp$I(iSym) : this.asc.vibScale);
var i0=Math.max(this.firstAtom, (bsAtoms == null  ? 0 : bsAtoms.nextSetBit$I(0)));
var checkDistance=checkDistances;
var spt=(iSym >= nOp ? ((iSym - nOp)/nNCS|0) : iSym);
var cpt=spt + iCellOpPt;
for (var i=i0; i < atomMax; i++) {
var a=this.asc.atoms[i];
if (a.ignoreSymmetry || bsAtoms != null  && !bsAtoms.get$I(i)  ) continue;
if (ms == null ) {
symmetry.newSpaceGroupPoint$I$javajs_util_P3$javajs_util_P3$I$I$I$javajs_util_M4(iSym, a, ptAtom, transX, transY, transZ, (iSym >= nOp ? lstNCS.get$I(iSym - nOp) : null));
} else {
symmetry=ms.getAtomSymmetry$org_jmol_adapter_smarter_Atom$org_jmol_api_SymmetryInterface(a, this.symmetry);
symmetry.newSpaceGroupPoint$I$javajs_util_P3$javajs_util_P3$I$I$I$javajs_util_M4(iSym, a, ptAtom, transX, transY, transZ, null);
code=symmetry.getSpaceGroupOperationCode$I(iSym);
if (code != null ) {
subSystemId=code.charAt$I(0);
symmetry=ms.getSymmetryFromCode$S(code);
if (symmetry.getSpaceGroupOperationCount$() == 0) p$1.finalizeSymmetry$org_jmol_api_SymmetryInterface.apply(this, [symmetry]);
}}if (this.acr.fixJavaFloat) $I$(5).fixPtFloats$javajs_util_T3$F(ptAtom, 100000.0);
var c=$I$(1).newP$javajs_util_T3(ptAtom);
symmetry.toCartesian$javajs_util_T3$Z(c, false);
if (this.doPackUnitCell) {
symmetry.toUnitCell$javajs_util_T3$javajs_util_T3(c, this.ptOffset);
ptAtom.setT$javajs_util_T3(c);
symmetry.toFractional$javajs_util_T3$Z(ptAtom, false);
if (this.acr.fixJavaFloat) $I$(5).fixPtFloats$javajs_util_T3$F(ptAtom, 100000.0);
if (!this.isWithinCell$I$javajs_util_P3$F$F$F$F$F$F$F(this.dtype, ptAtom, this.minXYZ0.x, this.maxXYZ0.x, this.minXYZ0.y, this.maxXYZ0.y, this.minXYZ0.z, this.maxXYZ0.z, this.packingError)) continue;
}if (checkSymmetryMinMax) p$1.setSymmetryMinMax$javajs_util_P3.apply(this, [c]);
var special=null;
if (checkDistance) {
if (checkSymmetryRange && (c.x < this.rminx  || c.y < this.rminy   || c.z < this.rminz   || c.x > this.rmaxx   || c.y > this.rmaxy   || c.z > this.rmaxz  ) ) continue;
var minDist2=3.4028235E38;
var j0=(this.checkAll ? this.asc.ac : pt0);
var name=a.atomName;
var id=(code == null  ? a.altLoc : subSystemId);
for (var j=j00; j < j0; j++) {
if (bsAtoms != null  && !bsAtoms.get$I(j) ) continue;
var pc=cartesians[j - this.firstAtom];
if (pc == null ) continue;
var d2=c.distanceSquared$javajs_util_T3(pc);
if (checkSpecial && d2 < d0  ) {
if (checkOps) {
excludedOps.set$I(iSym);
continue out;
}special=this.asc.atoms[j];
if ((special.atomName == null  || special.atomName.equals$O(name) ) && special.altLoc == id ) break;
special=null;
}if (checkRange111 && j < baseCount  && d2 < minDist2  ) minDist2=d2;
}
if (checkRange111 && minDist2 > range2  ) continue;
}if (checkOps) {
checkDistance=false;
}var atomSite=a.atomSite;
if (special != null ) {
if (addBonds) atomMap[atomSite]=special.index;
special.bsSymmetry.set$I(cpt);
special.bsSymmetry.set$I(spt);
} else {
if (addBonds) atomMap[atomSite]=this.asc.ac;
var atom1=this.asc.newCloneAtom$org_jmol_adapter_smarter_Atom(a);
atom1.setT$javajs_util_T3(ptAtom);
if (this.asc.bsAtoms != null ) this.asc.bsAtoms.set$I(atom1.index);
if (spinOp != 0  && atom1.vib != null  ) {
symmetry.getSpaceGroupOperation$I(iSym).rotate$javajs_util_T3(atom1.vib);
atom1.vib.scale$F(spinOp);
}atom1.atomSite=atomSite;
if (code != null ) atom1.altLoc=subSystemId;
atom1.bsSymmetry=$I$(7).newAndSetBit$I(cpt);
atom1.bsSymmetry.set$I(spt);
if (addCartesian) cartesians[pt++]=c;
var tensors=a.tensors;
if (tensors != null ) {
atom1.tensors=null;
for (var j=tensors.size$(); --j >= 0; ) {
var t=tensors.get$I(j);
if (t == null ) continue;
if (nOp == 1) atom1.addTensor$org_jmol_util_Tensor$S$Z(t.copyTensor$(), null, false);
 else this.addRotatedTensor$org_jmol_adapter_smarter_Atom$org_jmol_util_Tensor$I$Z$org_jmol_api_SymmetryInterface(atom1, t, iSym, false, symmetry);
}
}}}
if (addBonds) {
var bonds=this.asc.bonds;
var atoms=this.asc.atoms;
for (var bondNum=this.asc.bondIndex0; bondNum < this.bondCount0; bondNum++) {
var bond=bonds[bondNum];
var atom1=atoms[bond.atomIndex1];
var atom2=atoms[bond.atomIndex2];
if (atom1 == null  || atom2 == null  ) continue;
var iAtom1=atomMap[atom1.atomSite];
var iAtom2=atomMap[atom2.atomSite];
if (iAtom1 >= atomMax || iAtom2 >= atomMax ) this.asc.addNewBondWithOrder$I$I$I(iAtom1, iAtom2, bond.order);
}
}}
return pt;
}, p$1);

Clazz.newMeth(C$, 'duplicateAtomProperties$I', function (nTimes) {
var p=this.asc.getAtomSetAuxiliaryInfoValue$I$S(-1, "atomProperties");
if (p != null ) for (var entry, $entry = p.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
var val=entry.getValue$();
if (Clazz.instanceOf(val, "java.lang.String")) {
var data=val;
var s=Clazz.new_($I$(12,1));
for (var i=nTimes; --i >= 0; ) s.append$S(data);

p.put$O$O(key, s.toString());
} else {
var f=val;
var fnew=Clazz.array(Float.TYPE, [f.length * nTimes]);
for (var i=nTimes; --i >= 0; ) System.arraycopy$O$I$O$I$I(f, 0, fnew, i * f.length, f.length);

}}
}, p$1);

Clazz.newMeth(C$, 'finalizeSymmetry$org_jmol_api_SymmetryInterface', function (symmetry) {
var name=this.asc.getAtomSetAuxiliaryInfoValue$I$S(-1, "spaceGroup");
symmetry.setFinalOperations$S$javajs_util_P3A$I$I$Z$S(name, this.asc.atoms, this.firstAtom, this.noSymmetryCount, this.doNormalize, this.filterSymop);
if (this.filterSymop != null  || name == null   || name.equals$O("unspecified!") ) p$1.setAtomSetSpaceGroupName$S.apply(this, [symmetry.getSpaceGroupName$()]);
}, p$1);

Clazz.newMeth(C$, 'setSymmetryOps', function () {
var operationCount=this.symmetry.getSpaceGroupOperationCount$();
if (operationCount > 0) {
var symmetryList=Clazz.array(String, [operationCount]);
for (var i=0; i < operationCount; i++) symmetryList[i]="" + this.symmetry.getSpaceGroupXyz$I$Z(i, this.doNormalize);

this.asc.setCurrentModelInfo$S$O("symmetryOperations", symmetryList);
this.asc.setCurrentModelInfo$S$O("symmetryOps", this.symmetry.getSymmetryOperations$());
}this.asc.setCurrentModelInfo$S$O("symmetryCount", Integer.valueOf$I(operationCount));
this.asc.setCurrentModelInfo$S$O("latticeType", this.acr.latticeType == null  ? "P" : this.acr.latticeType);
this.asc.setCurrentModelInfo$S$O("intlTableNo", this.symmetry.getIntTableNumber$());
if (this.acr.sgName == null  || this.acr.sgName.indexOf$S("?") >= 0  || this.acr.sgName.indexOf$S("!") >= 0 ) p$1.setAtomSetSpaceGroupName$S.apply(this, [this.acr.sgName=this.symmetry.getSpaceGroupName$()]);
}, p$1);

Clazz.newMeth(C$, 'getOverallSpan$', function () {
return (this.maxXYZ0 == null  ? $I$(9).new3$F$F$F(this.maxXYZ.x - this.minXYZ.x, this.maxXYZ.y - this.minXYZ.y, this.maxXYZ.z - this.minXYZ.z) : $I$(9).newVsub$javajs_util_T3$javajs_util_T3(this.maxXYZ0, this.minXYZ0));
});

Clazz.newMeth(C$, 'applySymmetryBio$java_util_Map$Z$S', function (thisBiomolecule, applySymmetryToBonds, filter) {
var biomts=thisBiomolecule.get$O("biomts");
if (biomts.size$() < 2) return;
this.acr.lstNCS=null;
p$1.setLatticeCells.apply(this, []);
var lc=(this.latticeCells != null  && this.latticeCells[0] != 0  ? Clazz.array(Integer.TYPE, [3]) : null);
if (lc != null ) for (var i=0; i < 3; i++) lc[i]=this.latticeCells[i];

this.latticeCells=null;
var particleMode=(filter.indexOf$S("BYCHAIN") >= 0 ? 1 : filter.indexOf$S("BYSYMOP") >= 0 ? 2 : 0);
this.doNormalize=false;
var biomtchains=thisBiomolecule.get$O("chains");
if (biomtchains.get$I(0).equals$O(biomtchains.get$I(1))) biomtchains=null;
this.symmetry=null;
this.getSymmetry$().setSpaceGroup$Z(this.doNormalize);
this.addSpaceGroupOperation$S$Z("x,y,z", false);
var name=thisBiomolecule.get$O("name");
p$1.setAtomSetSpaceGroupName$S.apply(this, [this.acr.sgName=name]);
var len=biomts.size$();
this.applySymmetryToBonds=applySymmetryToBonds;
this.bondCount0=this.asc.bondCount;
this.firstAtom=this.asc.getLastAtomSetAtomIndex$();
var atomMax=this.asc.ac;
var ht=Clazz.new_($I$(13,1));
var nChain=0;
var atoms=this.asc.atoms;
var addBonds=(this.bondCount0 > this.asc.bondIndex0 && applySymmetryToBonds );
switch (particleMode) {
case 1:
for (var i=atomMax; --i >= this.firstAtom; ) {
var id=Integer.valueOf$I(atoms[i].chainID);
var bs=ht.get$O(id);
if (bs == null ) {
nChain++;
ht.put$O$O(id, bs=Clazz.new_($I$(8,1)));
}bs.set$I(i);
}
this.asc.bsAtoms=Clazz.new_($I$(8,1));
for (var i=0; i < nChain; i++) {
this.asc.bsAtoms.set$I(atomMax + i);
var a=Clazz.new_($I$(14,1));
a.set$F$F$F(0, 0, 0);
a.radius=16;
this.asc.addAtom$org_jmol_adapter_smarter_Atom(a);
}
var ichain=0;
for (var e, $e = ht.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var a=atoms[atomMax + ichain++];
var bs=e.getValue$();
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) a.add$javajs_util_T3(atoms[i]);

a.scale$F(1.0 / bs.cardinality$());
a.atomName="Pt" + ichain;
a.chainID=e.getKey$().intValue$();
}
this.firstAtom=atomMax;
atomMax+=nChain;
addBonds=false;
break;
case 2:
this.asc.bsAtoms=Clazz.new_($I$(8,1));
this.asc.bsAtoms.set$I(atomMax);
var a=atoms[atomMax]=Clazz.new_($I$(14,1));
a.set$F$F$F(0, 0, 0);
for (var i=atomMax; --i >= this.firstAtom; ) a.add$javajs_util_T3(atoms[i]);

a.scale$F(1.0 / (atomMax - this.firstAtom));
a.atomName="Pt";
a.radius=16;
this.asc.addAtom$org_jmol_adapter_smarter_Atom(a);
this.firstAtom=atomMax++;
addBonds=false;
break;
}
var assemblyIdAtoms=thisBiomolecule.get$O("asemblyIdAtoms");
if (filter.indexOf$S("#<") >= 0) {
len=Math.min(len, $I$(5,"parseInt$S",[filter.substring$I(filter.indexOf$S("#<") + 2)]) - 1);
filter=$I$(5).rep$S$S$S(filter, "#<", "_<");
}for (var iAtom=this.firstAtom; iAtom < atomMax; iAtom++) atoms[iAtom].bsSymmetry=$I$(7).newAndSetBit$I(0);

var bsAtoms=this.asc.bsAtoms;
var atomMap=(addBonds ? Clazz.array(Integer.TYPE, [this.asc.ac]) : null);
for (var i=(biomtchains == null  ? 1 : 0); i < len; i++) {
if (filter.indexOf$S("!#") >= 0) {
if (filter.indexOf$S("!#" + (i + 1) + ";" ) >= 0) continue;
} else if (filter.indexOf$S("#") >= 0 && filter.indexOf$S("#" + (i + 1) + ";" ) < 0 ) {
continue;
}var mat=biomts.get$I(i);
var chains=(biomtchains == null  ? null : biomtchains.get$I(i));
if (chains != null  && assemblyIdAtoms != null  ) {
bsAtoms=Clazz.new_($I$(8,1));
for (var e, $e = assemblyIdAtoms.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (chains.indexOf$S(":" + e.getKey$() + ";" ) >= 0) bsAtoms.or$javajs_util_BS(e.getValue$());

if (this.asc.bsAtoms != null ) bsAtoms.and$javajs_util_BS(this.asc.bsAtoms);
chains=null;
}for (var iAtom=this.firstAtom; iAtom < atomMax; iAtom++) {
if (bsAtoms != null  && !bsAtoms.get$I(iAtom)  || chains != null  && chains.indexOf$S(":" + this.acr.vwr.getChainIDStr$I(atoms[iAtom].chainID) + ";" ) < 0  ) continue;
try {
var atomSite=atoms[iAtom].atomSite;
var atom1;
if (addBonds) atomMap[atomSite]=this.asc.ac;
atom1=this.asc.newCloneAtom$org_jmol_adapter_smarter_Atom(atoms[iAtom]);
if (this.asc.bsAtoms != null ) this.asc.bsAtoms.set$I(atom1.index);
atom1.atomSite=atomSite;
mat.rotTrans$javajs_util_T3(atom1);
atom1.bsSymmetry=$I$(7).newAndSetBit$I(i);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.asc.errorMessage="appendAtomCollection error: " + e;
} else {
throw e;
}
}
}
if (i > 0) {
this.symmetry.addBioMoleculeOperation$javajs_util_M4$Z(mat, false);
if (addBonds) {
for (var bondNum=this.asc.bondIndex0; bondNum < this.bondCount0; bondNum++) {
var bond=this.asc.bonds[bondNum];
var iAtom1=atomMap[atoms[bond.atomIndex1].atomSite];
var iAtom2=atomMap[atoms[bond.atomIndex2].atomSite];
this.asc.addNewBondWithOrder$I$I$I(iAtom1, iAtom2, bond.order);
}
}}}
if (biomtchains != null ) {
if (this.asc.bsAtoms == null ) this.asc.bsAtoms=$I$(7).newBitSet2$I$I(0, this.asc.ac);
this.asc.bsAtoms.clearBits$I$I(this.firstAtom, atomMax);
}this.noSymmetryCount=atomMax - this.firstAtom;
this.asc.setCurrentModelInfo$S$O("presymmetryAtomIndex", Integer.valueOf$I(this.firstAtom));
this.asc.setCurrentModelInfo$S$O("presymmetryAtomCount", Integer.valueOf$I(this.noSymmetryCount));
this.asc.setCurrentModelInfo$S$O("biosymmetryCount", Integer.valueOf$I(len));
this.asc.setCurrentModelInfo$S$O("biosymmetry", this.symmetry);
p$1.finalizeSymmetry$org_jmol_api_SymmetryInterface.apply(this, [this.symmetry]);
p$1.setSymmetryOps.apply(this, []);
p$1.reset.apply(this, []);
});

Clazz.newMeth(C$, 'reset', function () {
this.asc.coordinatesAreFractional=false;
this.asc.setCurrentModelInfo$S$O("hasSymmetry", Boolean.TRUE);
this.asc.setGlobalBoolean$I(1);
}, p$1);

Clazz.newMeth(C$, 'addRotatedTensor$org_jmol_adapter_smarter_Atom$org_jmol_util_Tensor$I$Z$org_jmol_api_SymmetryInterface', function (a, t, iSym, reset, symmetry) {
if (this.ptTemp == null ) {
this.ptTemp=Clazz.new_($I$(1,1));
this.mTemp=Clazz.new_($I$(15,1));
}return a.addTensor$org_jmol_util_Tensor$S$Z((this.acr.getInterface$S("org.jmol.util.Tensor")).setFromEigenVectors$javajs_util_T3A$FA$S$S$org_jmol_util_Tensor(symmetry.rotateAxes$I$javajs_util_V3A$javajs_util_P3$javajs_util_M3(iSym, t.eigenVectors, this.ptTemp, this.mTemp), t.eigenValues, t.isIsotropic ? "iso" : t.type, t.id, t), null, reset);
});

Clazz.newMeth(C$, 'setTensors$', function () {
var n=this.asc.ac;
for (var i=this.asc.getLastAtomSetAtomIndex$(); i < n; i++) {
var a=this.asc.atoms[i];
if (a.anisoBorU == null ) continue;
a.addTensor$org_jmol_util_Tensor$S$Z(this.symmetry.getTensor$org_jmol_viewer_Viewer$FA(this.acr.vwr, a.anisoBorU), null, false);
if (Float.isNaN$F(a.bfactor)) a.bfactor=a.anisoBorU[7] * 100.0;
a.anisoBorU=null;
}
});

Clazz.newMeth(C$, 'setTimeReversal$I$I', function (op, timeRev) {
this.symmetry.setTimeReversal$I$I(op, timeRev);
});

Clazz.newMeth(C$, 'setSpinVectors$', function () {
if (this.nVib > 0 || this.asc.iSet < 0  || !this.acr.vibsFractional ) return this.nVib;
var i0=this.asc.getAtomSetAtomIndex$I(this.asc.iSet);
var sym=this.getBaseSymmetry$();
for (var i=this.asc.ac; --i >= i0; ) {
var v=this.asc.atoms[i].vib;
if (v != null ) {
if (v.modDim > 0) {
(v).setMoment$();
} else {
v=v.clone$();
sym.toCartesian$javajs_util_T3$Z(v, true);
this.asc.atoms[i].vib=v;
}this.nVib++;
}}
return this.nVib;
});

Clazz.newMeth(C$, 'scaleFractionalVibs$', function () {
var params=this.getBaseSymmetry$().getUnitCellParams$();
var ptScale=$I$(1).new3$F$F$F(1 / params[0], 1 / params[1], 1 / params[2]);
var i0=this.asc.getAtomSetAtomIndex$I(this.asc.iSet);
for (var i=this.asc.ac; --i >= i0; ) {
var v=this.asc.atoms[i].vib;
if (v != null ) {
v.scaleT$javajs_util_T3(ptScale);
}}
});

Clazz.newMeth(C$, 'getBaseSymmetry$', function () {
return (this.baseSymmetry == null  ? this.symmetry : this.baseSymmetry);
});

Clazz.newMeth(C$, 'finalizeUnitCell$javajs_util_P3', function (ptSupercell) {
if (ptSupercell != null  && this.baseUnitCell != null  ) {
this.baseUnitCell[22]=Math.max(1, (ptSupercell.x|0));
this.baseUnitCell[23]=Math.max(1, (ptSupercell.y|0));
this.baseUnitCell[24]=Math.max(1, (ptSupercell.z|0));
}});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:29 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
