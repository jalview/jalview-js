(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'javajs.util.BS','org.jmol.viewer.JC','org.jmol.api.Interface','org.jmol.shape.Shape','org.jmol.c.VDW','org.jmol.c.PAL','javajs.util.P3','org.jmol.modelset.Atom','org.jmol.util.BSUtil']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShapeManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.navMinMax=Clazz.array(Integer.TYPE, [4]);
},1);

C$.$fields$=[['O',['ms','org.jmol.modelset.ModelSet','shapes','org.jmol.shape.Shape[]','vwr','org.jmol.viewer.Viewer','bsRenderableAtoms','javajs.util.BS','+bsSlabbedInternal','navMinMax','int[]']]
,['I',['clickableMax'],'O',['hoverable','int[]']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer', function (vwr) {
;C$.$init$.apply(this);
this.vwr=vwr;
this.bsRenderableAtoms=Clazz.new_($I$(1,1));
this.bsSlabbedInternal=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'findNearestShapeAtomIndex$I$I$org_jmol_modelset_AtomA$javajs_util_BS', function (x, y, closest, bsNot) {
if (this.shapes != null ) for (var i=0; i < this.shapes.length && closest[0] == null  ; ++i) if (this.shapes[i] != null ) this.shapes[i].findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$javajs_util_BS(x, y, closest, bsNot);

});

Clazz.newMeth(C$, 'getShapePropertyIndex$I$S$I', function (shapeID, propertyName, index) {
if (this.shapes == null  || this.shapes[shapeID] == null  ) return null;
this.vwr.setShapeErrorState$I$S(shapeID, "get " + propertyName);
var result=this.shapes[shapeID].getProperty$S$I(propertyName, index);
this.vwr.setShapeErrorState$I$S(-1, null);
return result;
});

Clazz.newMeth(C$, 'getShapePropertyData$I$S$OA', function (shapeID, propertyName, data) {
if (this.shapes == null  || this.shapes[shapeID] == null  ) return false;
this.vwr.setShapeErrorState$I$S(shapeID, "get " + propertyName);
var result=this.shapes[shapeID].getPropertyData$S$OA(propertyName, data);
this.vwr.setShapeErrorState$I$S(-1, null);
return result;
});

Clazz.newMeth(C$, 'getShapeIdFromObjectName$S', function (objectName) {
if (this.shapes != null ) for (var i=16; i < 30; ++i) if (this.shapes[i] != null  && this.shapes[i].getIndexFromName$S(objectName) >= 0 ) return i;

return -1;
});

Clazz.newMeth(C$, 'loadDefaultShapes$org_jmol_modelset_ModelSet', function (newModelSet) {
this.ms=newModelSet;
if (this.shapes != null ) for (var i=0; i < this.shapes.length; ++i) if (this.shapes[i] != null ) this.shapes[i].setModelSet$org_jmol_modelset_ModelSet(newModelSet);

this.loadShape$I(0);
this.loadShape$I(1);
});

Clazz.newMeth(C$, 'loadShape$I', function (shapeID) {
if (this.shapes == null ) return null;
if (this.shapes[shapeID] != null ) return this.shapes[shapeID];
if (shapeID == 2 || shapeID == 3  || shapeID == 4 ) return null;
var className=$I$(2).getShapeClassName$I$Z(shapeID, false);
var shape;
if ((shape=$I$(3).getInterface$S$org_jmol_viewer_Viewer$S(className, this.vwr, "shape")) == null ) return null;
this.vwr.setShapeErrorState$I$S(shapeID, "allocate");
shape.initializeShape$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet$I(this.vwr, this.ms, shapeID);
this.vwr.setShapeErrorState$I$S(-1, null);
return this.shapes[shapeID]=shape;
});

Clazz.newMeth(C$, 'notifyAtomPositionsChanged$I$javajs_util_BS$javajs_util_M4', function (baseModel, bs, mat) {
var Imodel=Integer.valueOf$I(baseModel);
var bsModelAtoms=this.vwr.getModelUndeletedAtomsBitSet$I(baseModel);
for (var i=0; i < 37; i++) if (this.shapes[i] != null ) this.setShapePropertyBs$I$S$O$javajs_util_BS(i, "refreshTrajectories", Clazz.array(java.lang.Object, -1, [Imodel, bs, mat]), bsModelAtoms);

});

Clazz.newMeth(C$, 'releaseShape$I', function (shapeID) {
if (this.shapes != null ) this.shapes[shapeID]=null;
});

Clazz.newMeth(C$, 'resetShapes$', function () {
this.shapes=Clazz.array($I$(4), [37]);
});

Clazz.newMeth(C$, 'setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS', function (shapeID, size, rd, bsSelected) {
if (this.shapes == null ) return;
if (bsSelected == null  && (shapeID != 1 || size != 2147483647 ) ) bsSelected=this.vwr.bsA$();
if (rd != null  && rd.value != 0   && rd.vdwType === $I$(5).TEMP  ) this.ms.getBfactor100Lo$();
this.vwr.setShapeErrorState$I$S(shapeID, "set size");
if (rd == null  ? size != 0 : rd.value != 0 ) this.loadShape$I(shapeID);
if (this.shapes[shapeID] != null ) {
this.shapes[shapeID].setShapeSizeRD$I$org_jmol_atomdata_RadiusData$javajs_util_BS(size, rd, bsSelected);
}this.vwr.setShapeErrorState$I$S(-1, null);
});

Clazz.newMeth(C$, 'setLabel$O$javajs_util_BS', function (strLabel, bsSelection) {
if (strLabel == null ) {
if (this.shapes[5] == null ) return;
} else {
this.loadShape$I(5);
this.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(5, 0, null, bsSelection);
}this.setShapePropertyBs$I$S$O$javajs_util_BS(5, "label", strLabel, bsSelection);
});

Clazz.newMeth(C$, 'setShapePropertyBs$I$S$O$javajs_util_BS', function (shapeID, propertyName, value, bsSelected) {
if (this.shapes == null  || this.shapes[shapeID] == null  ) return;
if (bsSelected == null ) bsSelected=this.vwr.bsA$();
this.vwr.setShapeErrorState$I$S(shapeID, "set " + propertyName);
this.shapes[shapeID].setProperty$S$O$javajs_util_BS(propertyName.intern$(), value, bsSelected);
this.vwr.setShapeErrorState$I$S(-1, null);
});

Clazz.newMeth(C$, 'checkFrankclicked$I$I', function (x, y) {
var frankShape=this.shapes[36];
return (frankShape != null  && frankShape.wasClicked$I$I(x, y) );
});

Clazz.newMeth(C$, 'checkObjectClicked$I$I$I$javajs_util_BS$Z', function (x, y, modifiers, bsVisible, drawPicking) {
var shape;
var map=null;
if (this.vwr.getPickingMode$() == 2) {
return this.shapes[5].checkObjectClicked$I$I$I$javajs_util_BS$Z(x, y, modifiers, bsVisible, false);
}if (modifiers != 0 && this.vwr.getBondsPickable$()  && (map=this.shapes[1].checkObjectClicked$I$I$I$javajs_util_BS$Z(x, y, modifiers, bsVisible, false)) != null  ) return map;
for (var i=0; i < C$.clickableMax; i++) if ((shape=this.shapes[C$.hoverable[i]]) != null  && (map=shape.checkObjectClicked$I$I$I$javajs_util_BS$Z(x, y, modifiers, bsVisible, drawPicking)) != null  ) return map;

return null;
});

Clazz.newMeth(C$, 'checkObjectDragged$I$I$I$I$I$javajs_util_BS$I', function (prevX, prevY, x, y, modifiers, bsVisible, iShape) {
var found=false;
var n=(iShape > 0 ? iShape + 1 : 37);
for (var i=iShape; !found && i < n ; ++i) if (this.shapes[i] != null ) found=this.shapes[i].checkObjectDragged$I$I$I$I$I$javajs_util_BS(prevX, prevY, x, y, modifiers, bsVisible);

return found;
});

Clazz.newMeth(C$, 'checkObjectHovered$I$I$javajs_util_BS$Z', function (x, y, bsVisible, checkBonds) {
var shape=this.shapes[1];
if (checkBonds && shape != null   && shape.checkObjectHovered$I$I$javajs_util_BS(x, y, bsVisible) ) return true;
for (var i=0; i < C$.hoverable.length; i++) {
shape=this.shapes[C$.hoverable[i]];
if (shape != null  && shape.checkObjectHovered$I$I$javajs_util_BS(x, y, bsVisible) ) return true;
}
return false;
});

Clazz.newMeth(C$, 'deleteShapeAtoms$OA$javajs_util_BS', function (value, bs) {
if (this.shapes != null ) for (var j=0; j < 37; j++) if (this.shapes[j] != null ) this.setShapePropertyBs$I$S$O$javajs_util_BS(j, "deleteModelAtoms", value, bs);

});

Clazz.newMeth(C$, 'deleteVdwDependentShapes$javajs_util_BS', function (bs) {
if (bs == null ) bs=this.vwr.bsA$();
if (this.shapes[24] != null ) this.shapes[24].setProperty$S$O$javajs_util_BS("deleteVdw", null, bs);
if (this.shapes[25] != null ) this.shapes[25].setProperty$S$O$javajs_util_BS("deleteVdw", null, bs);
});

Clazz.newMeth(C$, 'getAtomShapeValue$I$org_jmol_modelset_Group$I', function (tok, group, atomIndex) {
var iShape=$I$(2).shapeTokenIndex$I(tok);
if (iShape < 0 || this.shapes[iShape] == null  ) return 0;
var mad=this.shapes[iShape].getSize$I(atomIndex);
if (mad == 0) {
if ((group.shapeVisibilityFlags & this.shapes[iShape].vf) == 0) return 0;
mad=this.shapes[iShape].getSizeG$org_jmol_modelset_Group(group);
}return mad / 2000.0;
});

Clazz.newMeth(C$, 'replaceGroup$org_jmol_modelset_Group$org_jmol_modelset_Group', function (g0, g1) {
if (this.shapes == null ) return;
for (var i=9; i < 16; i++) if (this.shapes[i] != null ) this.shapes[i].replaceGroup$org_jmol_modelset_Group$org_jmol_modelset_Group(g0, g1);

});

Clazz.newMeth(C$, 'getObjectMap$java_util_Map$Z', function (map, withDollar) {
if (this.shapes == null ) return;
var bDollar=Boolean.valueOf$Z(withDollar);
for (var i=16; i < 30; ++i) this.getShapePropertyData$I$S$OA(i, "getNames", Clazz.array(java.lang.Object, -1, [map, bDollar]));

});

Clazz.newMeth(C$, 'getProperty$O', function (paramInfo) {
if (paramInfo.equals$O("getShapes")) return this.shapes;
return null;
});

Clazz.newMeth(C$, 'getShape$I', function (i) {
return (this.shapes == null  ? null : this.shapes[i]);
});

Clazz.newMeth(C$, 'resetBioshapes$javajs_util_BS', function (bsAllAtoms) {
if (this.shapes == null ) return;
for (var i=0; i < this.shapes.length; ++i) if (this.shapes[i] != null  && this.shapes[i].isBioShape ) {
this.shapes[i].setModelSet$org_jmol_modelset_ModelSet(this.ms);
this.shapes[i].setShapeSizeRD$I$org_jmol_atomdata_RadiusData$javajs_util_BS(0, null, bsAllAtoms);
this.shapes[i].setProperty$S$O$javajs_util_BS("color", $I$(6).NONE, bsAllAtoms);
}
});

Clazz.newMeth(C$, 'setAtomLabel$S$I', function (strLabel, i) {
if (this.shapes != null ) this.shapes[5].setProperty$S$O$javajs_util_BS("label:" + strLabel, Integer.valueOf$I(i), null);
});

Clazz.newMeth(C$, 'setModelVisibility$', function () {
var shapes=this.shapes;
if (shapes == null  || shapes[0] == null  ) return;
var bs=this.vwr.getVisibleFramesBitSet$();
for (var i=8; i < 33; i++) if (shapes[i] != null ) shapes[i].setModelVisibilityFlags$javajs_util_BS(bs);

var showHydrogens=this.vwr.getBoolean$I(603979922);
var bsDeleted=this.vwr.slm.bsDeleted;
var atoms=this.ms.at;
this.ms.clearVisibleSets$();
if (atoms.length > 0) {
for (var i=this.ms.ac; --i >= 0; ) {
var atom=atoms[i];
atom.shapeVisibilityFlags&=-64;
if (bsDeleted != null  && bsDeleted.get$I(i) ) continue;
if (bs.get$I(atom.mi)) {
var f=1;
if (!this.ms.isAtomHidden$I(i) && (showHydrogens || atom.getElementNumber$() != 1 ) ) {
f|=8;
if (atom.madAtom != 0) f|=16;
atom.setShapeVisibility$I$Z(f, true);
}}}
}p$1.setShapeVis.apply(this, []);
});

Clazz.newMeth(C$, 'setShapeVis', function () {
for (var i=0; i < 37; ++i) {
var shape=this.shapes[i];
if (shape != null ) shape.setAtomClickability$();
}
}, p$1);

Clazz.newMeth(C$, 'finalizeAtoms$javajs_util_BS$Z', function (bsTranslateSelected, finalizeParams) {
var vwr=this.vwr;
var tm=vwr.tm;
if (finalizeParams) vwr.finalizeTransformParameters$();
if (bsTranslateSelected != null ) {
var ptCenter=this.ms.getAtomSetCenter$javajs_util_BS(bsTranslateSelected);
var pt=Clazz.new_($I$(7,1));
tm.transformPt3f$javajs_util_T3$javajs_util_P3(ptCenter, pt);
pt.add$javajs_util_T3(tm.ptOffset);
tm.unTransformPoint$javajs_util_T3$javajs_util_T3(pt, pt);
pt.sub$javajs_util_T3(ptCenter);
vwr.setAtomCoordsRelative$javajs_util_T3$javajs_util_BS(pt, bsTranslateSelected);
tm.ptOffset.set$F$F$F(0, 0, 0);
tm.bsSelectedAtoms=null;
}var bsOK=this.bsRenderableAtoms;
this.ms.getAtomsInFrame$javajs_util_BS(bsOK);
var vibrationVectors=this.ms.vibrations;
var vibs=(vibrationVectors != null  && tm.vibrationOn );
var checkOccupancy=(this.ms.bsModulated != null  && this.ms.occupancies != null  );
var atoms=this.ms.at;
var occ;
var haveMods=false;
var bsSlabbed=this.bsSlabbedInternal;
bsSlabbed.clearAll$();
for (var i=bsOK.nextSetBit$I(0); i >= 0; i=bsOK.nextSetBit$I(i + 1)) {
var atom=atoms[i];
var screen=(vibs && atom.hasVibration$()  ? tm.transformPtVib$javajs_util_P3$org_jmol_util_Vibration(atom, vibrationVectors[i]) : tm.transformPt$javajs_util_T3(atom));
if (screen.z == 1 && tm.internalSlab  && tm.xyzIsSlabbedInternal$javajs_util_T3(atom) ) {
bsSlabbed.set$I(i);
}atom.sX=screen.x;
atom.sY=screen.y;
atom.sZ=screen.z;
var d=Math.abs(atom.madAtom);
if (d == $I$(8).MAD_GLOBAL) d=((vwr.getFloat$I(1140850689) * 2000)|0);
atom.sD=($s$[0] = vwr.tm.scaleToScreen$I$I(screen.z, d), $s$[0]);
if (checkOccupancy && vibrationVectors[i] != null   && (occ=vibrationVectors[i].getOccupancy100$Z(vibs)) != -2147483648 ) {
haveMods=true;
atom.setShapeVisibility$I$Z(2, false);
if (occ >= 0 && occ < 50 ) atom.setShapeVisibility$I$Z(24, false);
 else atom.setShapeVisibility$I$Z(8 | (atom.madAtom > 0 ? 16 : 0), true);
this.ms.occupancies[atom.i]=Math.abs(occ);
}}
if (haveMods) p$1.setShapeVis.apply(this, []);
var gdata=vwr.gdata;
if (tm.slabEnabled) {
var slabByMolecule=vwr.getBoolean$I(603979940);
var slabByAtom=vwr.getBoolean$I(603979939);
var minZ=gdata.slab;
var maxZ=gdata.depth;
if (slabByMolecule) {
var molecules=this.ms.getMolecules$();
var moleculeCount=this.ms.getMoleculeCountInModel$I(-1);
for (var i=0; i < moleculeCount; i++) {
var m=molecules[i];
var j=0;
var pt=m.firstAtomIndex;
if (!bsOK.get$I(pt)) continue;
for (; j < m.ac; j++, pt++) if (gdata.isClippedZ$I(atoms[pt].sZ - (atoms[pt].sD >> 1))) break;

if (j != m.ac) {
pt=m.firstAtomIndex;
for (var k=0; k < m.ac; k++) {
bsOK.clear$I(pt);
atoms[pt++].sZ=0;
}
}}
}for (var i=bsOK.nextSetBit$I(0); i >= 0; i=bsOK.nextSetBit$I(i + 1)) {
var atom=atoms[i];
if (gdata.isClippedZ$I(atom.sZ - (slabByAtom ? atoms[i].sD >> 1 : 0))) {
atom.setClickable$I(0);
var r=((slabByAtom ? -1 : 1) * atom.sD/2|0);
if (atom.sZ + r < minZ || atom.sZ - r > maxZ  || !gdata.isInDisplayRange$I$I(atom.sX, atom.sY) ) {
bsOK.clear$I(i);
}}}
}if (this.ms.ac == 0 || !vwr.getShowNavigationPoint$() ) return null;
var minX=2147483647;
var maxX=-2147483648;
var minY=2147483647;
var maxY=-2147483648;
for (var i=bsOK.nextSetBit$I(0); i >= 0; i=bsOK.nextSetBit$I(i + 1)) {
var atom=atoms[i];
if (atom.sX < minX) minX=atom.sX;
if (atom.sX > maxX) maxX=atom.sX;
if (atom.sY < minY) minY=atom.sY;
if (atom.sY > maxY) maxY=atom.sY;
}
this.navMinMax[0]=minX;
this.navMinMax[1]=maxX;
this.navMinMax[2]=minY;
this.navMinMax[3]=maxY;
return this.navMinMax;
});

Clazz.newMeth(C$, 'setModelSet$org_jmol_modelset_ModelSet', function (modelSet) {
this.ms=this.vwr.ms=modelSet;
});

Clazz.newMeth(C$, 'checkInheritedShapes$', function () {
if (this.shapes[24] == null ) return;
this.setShapePropertyBs$I$S$O$javajs_util_BS(24, "remapInherited", null, null);
});

Clazz.newMeth(C$, 'restrictSelected$Z$Z', function (isBond, doInvert) {
var bsSelected=this.vwr.slm.getSelectedAtomsNoSubset$();
if (doInvert) {
this.vwr.slm.invertSelection$();
var bsSubset=this.vwr.slm.bsSubset;
if (bsSubset != null ) {
bsSelected=this.vwr.slm.getSelectedAtomsNoSubset$();
bsSelected.and$javajs_util_BS(bsSubset);
this.vwr.select$javajs_util_BS$Z$I$Z(bsSelected, false, 0, true);
$I$(9).invertInPlace$javajs_util_BS$I(bsSelected, this.vwr.ms.ac);
bsSelected.and$javajs_util_BS(bsSubset);
}}$I$(9).andNot$javajs_util_BS$javajs_util_BS(bsSelected, this.vwr.slm.bsDeleted);
var bondmode=this.vwr.getBoolean$I(603979812);
if (!isBond) this.vwr.setBooleanProperty$S$Z("bondModeOr", true);
this.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(1, 0, null, null);
this.setShapePropertyBs$I$S$O$javajs_util_BS(1, "type", Integer.valueOf$I(32768), null);
this.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(1, 0, null, null);
this.setShapePropertyBs$I$S$O$javajs_util_BS(1, "type", Integer.valueOf$I(1023), null);
var bs=this.vwr.bsA$();
for (var iShape=21; --iShape >= 0; ) if (iShape != 6 && this.getShape$I(iShape) != null  ) this.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(iShape, 0, null, bs);

if (this.getShape$I(21) != null ) this.setShapePropertyBs$I$S$O$javajs_util_BS(21, "off", bs, null);
this.setLabel$O$javajs_util_BS(null, bs);
if (!isBond) this.vwr.setBooleanProperty$S$Z("bondModeOr", bondmode);
this.vwr.select$javajs_util_BS$Z$I$Z(bsSelected, false, 0, true);
});

C$.$static$=function(){C$.$static$=0;
C$.hoverable=Clazz.array(Integer.TYPE, -1, [31, 20, 25, 24, 22, 36]);
C$.clickableMax=C$.hoverable.length - 1;
};
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
