(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},I$=[[0,'org.jmol.symmetry.PointGroup','org.jmol.symmetry.SpaceGroup','org.jmol.util.Logger','javajs.util.Lst','org.jmol.symmetry.SymmetryOperation','org.jmol.symmetry.SymmetryInfo','org.jmol.symmetry.UnitCell','javajs.util.P3','org.jmol.util.SimpleUnitCell','javajs.util.BS','org.jmol.api.Interface','org.jmol.util.Escape','org.jmol.bspt.Bspt']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Symmetry", null, null, 'org.jmol.api.SymmetryInterface');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pointGroup=null;
this.spaceGroup=null;
this.symmetryInfo=null;
this.unitCell=null;
this.isBio=false;
this.desc=null;
this.cip=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isBio$', function () {
return this.isBio;
});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setPointGroup$org_jmol_api_SymmetryInterface$javajs_util_T3$javajs_util_T3A$javajs_util_BS$Z$F$F$Z', function (siLast, center, atomset, bsAtoms, haveVibration, distanceTolerance, linearTolerance, localEnvOnly) {
this.pointGroup=$I$(1).getPointGroup$org_jmol_symmetry_PointGroup$javajs_util_T3$javajs_util_T3A$javajs_util_BS$Z$F$F$Z(siLast == null  ? null : (siLast).pointGroup, center, atomset, bsAtoms, haveVibration, distanceTolerance, linearTolerance, localEnvOnly);
return this;
});

Clazz.newMeth(C$, 'getPointGroupName$', function () {
return this.pointGroup.getName$();
});

Clazz.newMeth(C$, 'getPointGroupInfo$I$S$Z$S$I$F', function (modelIndex, drawID, asInfo, type, index, scale) {
if (drawID == null  && !asInfo  && this.pointGroup.textInfo != null  ) return this.pointGroup.textInfo;
 else if (drawID == null  && this.pointGroup.isDrawType$S$I$F(type, index, scale) ) return this.pointGroup.drawInfo;
 else if (asInfo && this.pointGroup.info != null  ) return this.pointGroup.info;
return this.pointGroup.getInfo$I$S$Z$S$I$F(modelIndex, drawID, asInfo, type, index, scale);
});

Clazz.newMeth(C$, 'setSpaceGroup$Z', function (doNormalize) {
if (this.spaceGroup == null ) this.spaceGroup=$I$(2).getNull$Z$Z$Z(true, doNormalize, false);
});

Clazz.newMeth(C$, 'addSpaceGroupOperation$S$I', function (xyz, opId) {
return this.spaceGroup.addSymmetry$S$I$Z(xyz, opId, false);
});

Clazz.newMeth(C$, 'addBioMoleculeOperation$javajs_util_M4$Z', function (mat, isReverse) {
this.isBio=this.spaceGroup.isBio=true;
return this.spaceGroup.addSymmetry$S$I$Z((isReverse ? "!" : "") + "[[bio" + mat , 0, false);
});

Clazz.newMeth(C$, 'setLattice$I', function (latt) {
this.spaceGroup.setLatticeParam$I(latt);
});

Clazz.newMeth(C$, 'getSpaceGroup$', function () {
return this.spaceGroup;
});

Clazz.newMeth(C$, 'setSpaceGroupFrom$org_jmol_api_SymmetryInterface', function (symmetry) {
this.spaceGroup=symmetry.getSpaceGroup$();
});

Clazz.newMeth(C$, 'createSpaceGroup$I$S$O$I', function (desiredSpaceGroupIndex, name, data, modDim) {
this.spaceGroup=$I$(2).createSpaceGroup$I$S$O$I(desiredSpaceGroupIndex, name, data, modDim);
if (this.spaceGroup != null  && $I$(3).debugging ) $I$(3).debug$S("using generated space group " + this.spaceGroup.dumpInfo$());
return this.spaceGroup != null ;
});

Clazz.newMeth(C$, 'getSpaceGroupInfoObj$S$org_jmol_api_SymmetryInterface$Z', function (name, cellInfo, isFull) {
return $I$(2).getInfo$org_jmol_symmetry_SpaceGroup$S$org_jmol_api_SymmetryInterface$Z(this.spaceGroup, name, cellInfo, isFull);
});

Clazz.newMeth(C$, 'getLatticeDesignation$', function () {
return this.spaceGroup.getLatticeDesignation$();
});

Clazz.newMeth(C$, 'setFinalOperations$S$javajs_util_P3A$I$I$Z$S', function (name, atoms, iAtomFirst, noSymmetryCount, doNormalize, filterSymop) {
if (name != null  && (name.startsWith$S("bio") || name.indexOf$S(" *(") >= 0 ) ) this.spaceGroup.name=name;
if (filterSymop != null ) {
var lst=Clazz.new_($I$(4));
lst.addLast$TV(this.spaceGroup.operations[0]);
for (var i=1; i < this.spaceGroup.operationCount; i++) if (filterSymop.contains$CharSequence(" " + (i + 1) + " " )) lst.addLast$TV(this.spaceGroup.operations[i]);

this.spaceGroup=$I$(2).createSpaceGroup$I$S$O$I(-1, name + " *(" + filterSymop.trim$() + ")" , lst, -1);
}this.spaceGroup.setFinalOperations$javajs_util_P3A$I$I$Z(atoms, iAtomFirst, noSymmetryCount, doNormalize);
});

Clazz.newMeth(C$, 'getSpaceGroupOperation$I', function (i) {
return (this.spaceGroup == null  || this.spaceGroup.operations == null   || i >= this.spaceGroup.operations.length  ? null : this.spaceGroup.finalOperations == null  ? this.spaceGroup.operations[i] : this.spaceGroup.finalOperations[i]);
});

Clazz.newMeth(C$, 'getSpaceGroupXyz$I$Z', function (i, doNormalize) {
return this.spaceGroup.getXyz$I$Z(i, doNormalize);
});

Clazz.newMeth(C$, 'newSpaceGroupPoint$I$javajs_util_P3$javajs_util_P3$I$I$I$javajs_util_M4', function (i, atom1, atom2, transX, transY, transZ, o) {
if (o == null  && this.spaceGroup.finalOperations == null  ) {
var op=this.spaceGroup.operations[i];
if (!op.isFinalized) op.doFinalize$();
$I$(5).newPoint$javajs_util_M4$javajs_util_P3$javajs_util_P3$I$I$I(op, atom1, atom2, transX, transY, transZ);
return;
}$I$(5).newPoint$javajs_util_M4$javajs_util_P3$javajs_util_P3$I$I$I((o == null  ? this.spaceGroup.finalOperations[i] : o), atom1, atom2, transX, transY, transZ);
});

Clazz.newMeth(C$, 'rotateAxes$I$javajs_util_V3A$javajs_util_P3$javajs_util_M3', function (iop, axes, ptTemp, mTemp) {
return (iop == 0 ? axes : this.spaceGroup.finalOperations[iop].rotateAxes$javajs_util_V3A$org_jmol_symmetry_UnitCell$javajs_util_P3$javajs_util_M3(axes, this.unitCell, ptTemp, mTemp));
});

Clazz.newMeth(C$, 'getSpaceGroupOperationCode$I', function (iOp) {
return this.spaceGroup.operations[iOp].subsystemCode;
});

Clazz.newMeth(C$, 'setTimeReversal$I$I', function (op, val) {
this.spaceGroup.operations[op].setTimeReversal$I(val);
});

Clazz.newMeth(C$, 'getSpinOp$I', function (op) {
return this.spaceGroup.operations[op].getMagneticOp$();
});

Clazz.newMeth(C$, 'addLatticeVectors$javajs_util_Lst', function (lattvecs) {
return this.spaceGroup.addLatticeVectors$javajs_util_Lst(lattvecs);
});

Clazz.newMeth(C$, 'getLatticeOp$', function () {
return this.spaceGroup.latticeOp;
});

Clazz.newMeth(C$, 'getOperationRsVs$I', function (iop) {
return (this.spaceGroup.finalOperations == null  ? this.spaceGroup.operations : this.spaceGroup.finalOperations)[iop].rsvs;
});

Clazz.newMeth(C$, 'getSiteMultiplicity$javajs_util_P3', function (pt) {
return this.spaceGroup.getSiteMultiplicity$javajs_util_P3$org_jmol_symmetry_UnitCell(pt, this.unitCell);
});

Clazz.newMeth(C$, 'addOp$S$javajs_util_Matrix$javajs_util_Matrix$javajs_util_Matrix', function (code, rs, vs, sigma) {
this.spaceGroup.isSSG=true;
var s=$I$(5).getXYZFromRsVs$javajs_util_Matrix$javajs_util_Matrix$Z(rs, vs, false);
var i=this.spaceGroup.addSymmetry$S$I$Z(s, -1, true);
this.spaceGroup.operations[i].setSigma$S$javajs_util_Matrix(code, sigma);
return s;
});

Clazz.newMeth(C$, 'getMatrixFromString$S$FA$Z$I', function (xyz, rotTransMatrix, allowScaling, modDim) {
return $I$(5).getMatrixFromString$org_jmol_symmetry_SymmetryOperation$S$FA$Z(null, xyz, rotTransMatrix, allowScaling);
});

Clazz.newMeth(C$, 'getSpaceGroupName$', function () {
return (this.symmetryInfo != null  ? this.symmetryInfo.sgName : this.spaceGroup != null  ? this.spaceGroup.getName$() : this.unitCell != null  && this.unitCell.name.length$() > 0  ? "cell=" + this.unitCell.name : "");
});

Clazz.newMeth(C$, 'setSpaceGroupName$S', function (name) {
if (this.spaceGroup != null ) this.spaceGroup.setName$S(name);
});

Clazz.newMeth(C$, 'getSpaceGroupOperationCount$', function () {
return (this.symmetryInfo != null  ? this.symmetryInfo.symmetryOperations.length : this.spaceGroup != null  && this.spaceGroup.finalOperations != null   ? this.spaceGroup.finalOperations.length : 0);
});

Clazz.newMeth(C$, 'getLatticeType$', function () {
return (this.symmetryInfo != null  ? this.symmetryInfo.latticeType : this.spaceGroup == null  ? "P" : this.spaceGroup.latticeType);
});

Clazz.newMeth(C$, 'setLatticeType$S', function (type) {
if (this.spaceGroup != null ) this.spaceGroup.latticeType=type;
});

Clazz.newMeth(C$, 'getIntTableNumber$', function () {
return (this.symmetryInfo != null  ? this.symmetryInfo.intlTableNo : this.spaceGroup == null  ? null : this.spaceGroup.intlTableNumber);
});

Clazz.newMeth(C$, 'getCoordinatesAreFractional$', function () {
return this.symmetryInfo == null  || this.symmetryInfo.coordinatesAreFractional ;
});

Clazz.newMeth(C$, 'getCellRange$', function () {
return this.symmetryInfo == null  ? null : this.symmetryInfo.cellRange;
});

Clazz.newMeth(C$, 'getSymmetryInfoStr$', function () {
return (this.symmetryInfo == null  ? "" : this.symmetryInfo.infoStr);
});

Clazz.newMeth(C$, 'getSymmetryOperations$', function () {
if (this.symmetryInfo != null ) return this.symmetryInfo.symmetryOperations;
if (this.spaceGroup == null ) this.spaceGroup=$I$(2).getNull$Z$Z$Z(true, false, true);
return this.spaceGroup.finalOperations;
});

Clazz.newMeth(C$, 'isSimple$', function () {
return (this.symmetryInfo == null  || this.symmetryInfo.symmetryOperations == null  );
});

Clazz.newMeth(C$, 'setSymmetryInfo$I$java_util_Map$FA', function (modelIndex, modelAuxiliaryInfo, unitCellParams) {
this.symmetryInfo=Clazz.new_($I$(6));
var params=this.symmetryInfo.setSymmetryInfo$java_util_Map$FA(modelAuxiliaryInfo, unitCellParams);
if (params != null ) {
this.setUnitCell$FA$Z(params, modelAuxiliaryInfo.containsKey$O("jmolData"));
this.unitCell.moreInfo=modelAuxiliaryInfo.get$O("moreUnitCellInfo");
modelAuxiliaryInfo.put$TK$TV("infoUnitCell", this.getUnitCellAsArray$Z(false));
this.setOffsetPt$javajs_util_T3(modelAuxiliaryInfo.get$O("unitCellOffset"));
var matUnitCellOrientation=modelAuxiliaryInfo.get$O("matUnitCellOrientation");
if (matUnitCellOrientation != null ) this.initializeOrientation$javajs_util_M3(matUnitCellOrientation);
if ($I$(3).debugging) $I$(3).debug$S("symmetryInfos[" + modelIndex + "]:\n" + this.unitCell.dumpInfo$Z(true) );
}return this;
});

Clazz.newMeth(C$, 'haveUnitCell$', function () {
return (this.unitCell != null );
});

Clazz.newMeth(C$, 'checkUnitCell$org_jmol_api_SymmetryInterface$javajs_util_P3$javajs_util_P3$Z', function (uc, cell, ptTemp, isAbsolute) {
uc.toFractional$javajs_util_T3$Z(ptTemp, isAbsolute);
return (ptTemp.x >= cell.x - 1.0 - 0.02   && ptTemp.x <= cell.x + 0.02   && ptTemp.y >= cell.y - 1.0 - 0.02    && ptTemp.y <= cell.y + 0.02   && ptTemp.z >= cell.z - 1.0 - 0.02    && ptTemp.z <= cell.z + 0.02  );
});

Clazz.newMeth(C$, 'setUnitCell$FA$Z', function (unitCellParams, setRelative) {
this.unitCell=$I$(7).fromParams$FA$Z(unitCellParams, setRelative);
});

Clazz.newMeth(C$, 'unitCellEquals$org_jmol_api_SymmetryInterface', function (uc2) {
return ((uc2)).unitCell.isSameAs$org_jmol_symmetry_UnitCell(this.unitCell);
});

Clazz.newMeth(C$, 'getUnitCellState$', function () {
return (this.unitCell == null  ? "" : this.unitCell.getState$());
});

Clazz.newMeth(C$, 'getMoreInfo$', function () {
return this.unitCell.moreInfo;
});

Clazz.newMeth(C$, 'getUnitsymmetryInfo$', function () {
return this.unitCell.dumpInfo$Z(false);
});

Clazz.newMeth(C$, 'initializeOrientation$javajs_util_M3', function (mat) {
this.unitCell.initOrientation$javajs_util_M3(mat);
});

Clazz.newMeth(C$, 'unitize$javajs_util_T3', function (ptFrac) {
this.unitCell.unitize$javajs_util_T3(ptFrac);
});

Clazz.newMeth(C$, 'toUnitCell$javajs_util_T3$javajs_util_T3', function (pt, offset) {
this.unitCell.toUnitCell$javajs_util_T3$javajs_util_T3(pt, offset);
});

Clazz.newMeth(C$, 'toSupercell$javajs_util_P3', function (fpt) {
return this.unitCell.toSupercell$javajs_util_P3(fpt);
});

Clazz.newMeth(C$, 'toFractional$javajs_util_T3$Z', function (pt, ignoreOffset) {
if (!this.isBio) this.unitCell.toFractional$javajs_util_T3$Z(pt, ignoreOffset);
});

Clazz.newMeth(C$, 'toFractionalM$javajs_util_M4', function (m) {
if (!this.isBio) this.unitCell.toFractionalM$javajs_util_M4(m);
});

Clazz.newMeth(C$, 'toCartesian$javajs_util_T3$Z', function (fpt, ignoreOffset) {
if (!this.isBio) this.unitCell.toCartesian$javajs_util_T3$Z(fpt, ignoreOffset);
});

Clazz.newMeth(C$, 'getUnitCellParams$', function () {
return this.unitCell.getUnitCellParams$();
});

Clazz.newMeth(C$, 'getUnitCellAsArray$Z', function (vectorsOnly) {
return this.unitCell.getUnitCellAsArray$Z(vectorsOnly);
});

Clazz.newMeth(C$, 'getTensor$org_jmol_viewer_Viewer$FA', function (vwr, parBorU) {
if (parBorU == null ) return null;
if (this.unitCell == null ) this.unitCell=$I$(7).fromParams$FA$Z(Clazz.array(Float.TYPE, -1, [1, 1, 1, 90, 90, 90]), true);
return this.unitCell.getTensor$org_jmol_viewer_Viewer$FA(vwr, parBorU);
});

Clazz.newMeth(C$, 'getUnitCellVerticesNoOffset$', function () {
return this.unitCell.getVertices$();
});

Clazz.newMeth(C$, 'getCartesianOffset$', function () {
return this.unitCell.getCartesianOffset$();
});

Clazz.newMeth(C$, 'getFractionalOffset$', function () {
return this.unitCell.getFractionalOffset$();
});

Clazz.newMeth(C$, 'setOffsetPt$javajs_util_T3', function (pt) {
this.unitCell.setOffset$javajs_util_T3(pt);
});

Clazz.newMeth(C$, 'setOffset$I', function (nnn) {
var pt=Clazz.new_($I$(8));
$I$(9).ijkToPoint3f$I$javajs_util_P3$I$I(nnn, pt, 0, 0);
this.unitCell.setOffset$javajs_util_T3(pt);
});

Clazz.newMeth(C$, 'getUnitCellMultiplier$', function () {
return this.unitCell.getUnitCellMultiplier$();
});

Clazz.newMeth(C$, 'getCanonicalCopy$F$Z', function (scale, withOffset) {
return this.unitCell.getCanonicalCopy$F$Z(scale, withOffset);
});

Clazz.newMeth(C$, 'getUnitCellInfoType$I', function (infoType) {
return this.unitCell.getInfo$I(infoType);
});

Clazz.newMeth(C$, 'getUnitCellInfo$', function () {
return this.unitCell.dumpInfo$Z(false);
});

Clazz.newMeth(C$, 'isSlab$', function () {
return this.unitCell.isSlab$();
});

Clazz.newMeth(C$, 'isPolymer$', function () {
return this.unitCell.isPolymer$();
});

Clazz.newMeth(C$, 'checkDistance$javajs_util_P3$javajs_util_P3$F$F$I$I$I$javajs_util_P3', function (f1, f2, distance, dx, iRange, jRange, kRange, ptOffset) {
return this.unitCell.checkDistance$javajs_util_P3$javajs_util_P3$F$F$I$I$I$javajs_util_P3(f1, f2, distance, dx, iRange, jRange, kRange, ptOffset);
});

Clazz.newMeth(C$, 'getUnitCellVectors$', function () {
return this.unitCell.getUnitCellVectors$();
});

Clazz.newMeth(C$, 'getUnitCell$javajs_util_T3A$Z$S', function (oabc, setRelative, name) {
if (oabc == null ) return null;
this.unitCell=$I$(7).fromOABC$javajs_util_T3A$Z(oabc, setRelative);
if (name != null ) this.unitCell.name=name;
return this;
});

Clazz.newMeth(C$, 'isSupercell$', function () {
return this.unitCell.isSupercell$();
});

Clazz.newMeth(C$, 'notInCentroid$org_jmol_modelset_ModelSet$javajs_util_BS$IA', function (modelSet, bsAtoms, minmax) {
try {
var bsDelete=Clazz.new_($I$(10));
var iAtom0=bsAtoms.nextSetBit$I(0);
var molecules=modelSet.getMolecules$();
var moleculeCount=molecules.length;
var atoms=modelSet.at;
var isOneMolecule=(molecules[moleculeCount - 1].firstAtomIndex == modelSet.am[atoms[iAtom0].mi].firstAtomIndex);
var center=Clazz.new_($I$(8));
var centroidPacked=(minmax[6] == 1);
 nextMol : for (var i=moleculeCount; --i >= 0 && bsAtoms.get$I(molecules[i].firstAtomIndex) ; ) {
var bs=molecules[i].atomList;
center.set$F$F$F(0, 0, 0);
var n=0;
for (var j=bs.nextSetBit$I(0); j >= 0; j=bs.nextSetBit$I(j + 1)) {
if (isOneMolecule || centroidPacked ) {
center.setT$javajs_util_T3(atoms[j]);
if (p$1.isNotCentroid$javajs_util_P3$I$IA$Z.apply(this, [center, 1, minmax, centroidPacked])) {
if (isOneMolecule) bsDelete.set$I(j);
} else if (!isOneMolecule) {
continue nextMol;
}} else {
center.add$javajs_util_T3(atoms[j]);
n++;
}}
if (centroidPacked || n > 0 && p$1.isNotCentroid$javajs_util_P3$I$IA$Z.apply(this, [center, n, minmax, false])  ) bsDelete.or$javajs_util_BS(bs);
}
return bsDelete;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isNotCentroid$javajs_util_P3$I$IA$Z', function (center, n, minmax, centroidPacked) {
center.scale$F(1.0 / n);
this.toFractional$javajs_util_T3$Z(center, false);
if (centroidPacked) return (center.x + 5.0E-6 <= minmax[0]  || center.x - 5.0E-6 > minmax[3]   || center.y + 5.0E-6 <= minmax[1]   || center.y - 5.0E-6 > minmax[4]   || center.z + 5.0E-6 <= minmax[2]   || center.z - 5.0E-6 > minmax[5]  );
return (center.x + 5.0E-6 <= minmax[0]  || center.x + 5.0E-5 > minmax[3]   || center.y + 5.0E-6 <= minmax[1]   || center.y + 5.0E-5 > minmax[4]   || center.z + 5.0E-6 <= minmax[2]   || center.z + 5.0E-5 > minmax[5]  );
}, p$1);

Clazz.newMeth(C$, 'getDesc$org_jmol_modelset_ModelSet', function (modelSet) {
return (this.desc == null  ? (this.desc=($I$(11).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.symmetry.SymmetryDesc", modelSet.vwr, "eval"))) : this.desc).set$org_jmol_modelset_ModelSet(modelSet);
}, p$1);

Clazz.newMeth(C$, 'getSymmetryInfoAtom$org_jmol_modelset_ModelSet$I$S$I$javajs_util_P3$javajs_util_P3$S$I$F$I', function (modelSet, iatom, xyz, op, pt, pt2, id, type, scaleFactor, nth) {
return p$1.getDesc$org_jmol_modelset_ModelSet.apply(this, [modelSet]).getSymopInfo$I$S$I$javajs_util_P3$javajs_util_P3$S$I$F$I(iatom, xyz, op, pt, pt2, id, type, scaleFactor, nth);
});

Clazz.newMeth(C$, 'getSpaceGroupInfo$org_jmol_modelset_ModelSet$S$I$Z', function (modelSet, sgName, modelIndex, isFull) {
var isForModel=(sgName == null );
if (sgName == null ) {
var info=modelSet.getModelAuxiliaryInfo$I(modelSet.vwr.am.cmi);
if (info != null ) sgName=info.get$O("spaceGroup");
}return p$1.getDesc$org_jmol_modelset_ModelSet.apply(this, [modelSet]).getSpaceGroupInfo$org_jmol_symmetry_Symmetry$I$S$I$javajs_util_P3$javajs_util_P3$S$F$I$Z$Z(this, modelIndex, sgName, 0, null, null, null, 0, -1, isFull, isForModel);
});

Clazz.newMeth(C$, 'fcoord$javajs_util_T3', function (p) {
return $I$(5).fcoord$javajs_util_T3(p);
});

Clazz.newMeth(C$, 'getV0abc$O', function (def) {
return (this.unitCell == null  ? null : this.unitCell.getV0abc$O(def));
});

Clazz.newMeth(C$, 'getQuaternionRotation$S', function (abc) {
return (this.unitCell == null  ? null : this.unitCell.getQuaternionRotation$S(abc));
});

Clazz.newMeth(C$, 'getFractionalOrigin$', function () {
return this.unitCell.getFractionalOrigin$();
});

Clazz.newMeth(C$, 'getState$javajs_util_SB', function (commands) {
var pt=this.getFractionalOffset$();
var loadUC=false;
if (pt != null  && (pt.x != 0  || pt.y != 0   || pt.z != 0  ) ) {
commands.append$S("; set unitcell ").append$S($I$(12).eP$javajs_util_T3(pt));
loadUC=true;
}pt=this.getUnitCellMultiplier$();
if (pt != null ) {
commands.append$S("; set unitcell ").append$S($I$(9).escapeMultiplier$javajs_util_T3(pt));
loadUC=true;
}return loadUC;
});

Clazz.newMeth(C$, 'getIterator$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$org_jmol_modelset_AtomA$javajs_util_BS$F', function (vwr, atom, atoms, bsAtoms, radius) {
return ($I$(11).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.symmetry.UnitCellIterator", vwr, "script")).set$org_jmol_api_SymmetryInterface$org_jmol_modelset_Atom$org_jmol_modelset_AtomA$javajs_util_BS$F(this, atom, atoms, bsAtoms, radius);
});

Clazz.newMeth(C$, 'toFromPrimitive$Z$C$javajs_util_T3A$javajs_util_M3', function (toPrimitive, type, oabc, primitiveToCrystal) {
if (this.unitCell == null ) this.unitCell=$I$(7).fromOABC$javajs_util_T3A$Z(oabc, false);
return this.unitCell.toFromPrimitive$Z$C$javajs_util_T3A$javajs_util_M3(toPrimitive, type, oabc, primitiveToCrystal);
});

Clazz.newMeth(C$, 'generateCrystalClass$javajs_util_P3', function (pt0) {
var ops=this.getSymmetryOperations$();
var lst=Clazz.new_($I$(4));
var isRandom=(pt0 == null );
var rand1=0;
var rand2=0;
var rand3=0;
if (isRandom) {
rand1=2.7182817;
rand2=3.1415927;
rand3=Math.log10(2000);
pt0=$I$(8).new3$F$F$F(rand1 + 1, rand2 + 2, rand3 + 3);
} else {
pt0=$I$(8).newP$javajs_util_T3(pt0);
}if (ops == null  || this.unitCell == null  ) {
lst.addLast$TV(pt0);
} else {
this.unitCell.toFractional$javajs_util_T3$Z(pt0, true);
var pt1=null;
var pt2=null;
var pt3=null;
if (isRandom) {
pt1=$I$(8).new3$F$F$F(rand2 + 4, rand3 + 5, rand1 + 6);
this.unitCell.toFractional$javajs_util_T3$Z(pt1, true);
pt2=$I$(8).new3$F$F$F(rand3 + 7, rand1 + 8, rand2 + 9);
this.unitCell.toFractional$javajs_util_T3$Z(pt2, true);
}var bspt=Clazz.new_($I$(13).c$$I$I,[3, 0]);
var iter=bspt.allocateCubeIterator$();
var pt=Clazz.new_($I$(8));
 out : for (var i=ops.length; --i >= 0; ) {
ops[i].rotate2$javajs_util_T3$javajs_util_T3(pt0, pt);
iter.initialize$javajs_util_T3$F$Z(pt, 0.001, false);
if (iter.hasMoreElements$()) continue out;
var ptNew=$I$(8).newP$javajs_util_T3(pt);
lst.addLast$TV(ptNew);
bspt.addTuple$javajs_util_T3(ptNew);
if (isRandom) {
if (pt2 != null ) {
pt3=Clazz.new_($I$(8));
ops[i].rotate2$javajs_util_T3$javajs_util_T3(pt2, pt3);
lst.addLast$TV(pt3);
}if (pt1 != null ) {
pt3=Clazz.new_($I$(8));
ops[i].rotate2$javajs_util_T3$javajs_util_T3(pt1, pt3);
lst.addLast$TV(pt3);
}}}
for (var j=lst.size$(); --j >= 0; ) this.unitCell.toCartesian$javajs_util_T3$Z(lst.get$I(j), true);

}return lst;
});

Clazz.newMeth(C$, 'calculateCIPChiralityForAtoms$org_jmol_viewer_Viewer$javajs_util_BS', function (vwr, bsAtoms) {
vwr.setCursor$I(3);
var cip=p$1.getCIPChirality$org_jmol_viewer_Viewer.apply(this, [vwr]);
var dataClass=(vwr.getBoolean$I(603979960) ? "CIPData" : "CIPDataTracker");
var data=($I$(11).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.symmetry." + dataClass, vwr, "script")).set$org_jmol_viewer_Viewer$javajs_util_BS(vwr, bsAtoms);
data.setRule6Full$Z(vwr.getBoolean$I(603979823));
cip.getChiralityForAtoms$org_jmol_symmetry_CIPData(data);
vwr.setCursor$I(0);
});

Clazz.newMeth(C$, 'calculateCIPChiralityForSmiles$org_jmol_viewer_Viewer$S', function (vwr, smiles) {
vwr.setCursor$I(3);
var cip=p$1.getCIPChirality$org_jmol_viewer_Viewer.apply(this, [vwr]);
var data=($I$(11).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.symmetry.CIPDataSmiles", vwr, "script")).setAtomsForSmiles$org_jmol_viewer_Viewer$S(vwr, smiles);
cip.getChiralityForAtoms$org_jmol_symmetry_CIPData(data);
vwr.setCursor$I(0);
return data.getSmilesChiralityArray$();
});

Clazz.newMeth(C$, 'getCIPChirality$org_jmol_viewer_Viewer', function (vwr) {
return (this.cip == null  ? (this.cip=($I$(11).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.symmetry.CIPChirality", vwr, "script"))) : this.cip);
}, p$1);

Clazz.newMeth(C$, 'getConventionalUnitCell$S$javajs_util_M3', function (latticeType, primitiveToCrystal) {
return (this.unitCell == null  || latticeType == null   ? null : this.unitCell.getConventionalUnitCell$S$javajs_util_M3(latticeType, primitiveToCrystal));
});

Clazz.newMeth(C$, 'getUnitCellInfoMap$', function () {
return (this.unitCell == null  ? null : this.unitCell.getInfo$());
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
