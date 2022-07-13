(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.BS','javajs.util.Lst','org.jmol.api.Interface','org.jmol.util.Elements','org.jmol.c.VDW','org.jmol.atomdata.RadiusData',['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.util.BSUtil','org.jmol.util.Logger','org.jmol.util.Escape','javajs.util.AU','org.jmol.script.T','org.jmol.util.Vibration','org.jmol.c.PAL','org.jmol.util.Parser','javajs.util.PT','javajs.util.P3','javajs.util.M3','javajs.util.A4','javajs.util.Measure','org.jmol.modelset.Atom','java.util.Arrays',['org.jmol.modelset.AtomCollection','.AtomSorter'],'org.jmol.modelset.Group','java.util.Hashtable']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomCollection", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AtomSorter',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxBondingRadius=1.4E-45;
this.maxVanderwaalsRadius=1.4E-45;
this.bspf=null;
this.preserveState=true;
this.canSkipLoad=true;
},1);

C$.$fields$=[['Z',['hasBfactorRange','haveBSVisible','haveBSClickable','haveChirality','preserveState','canSkipLoad','haveStraightness'],'F',['maxBondingRadius','maxVanderwaalsRadius'],'I',['ac','bfactor100Lo','bfactor100Hi','nSurfaceAtoms','surfaceDistanceMax','atomCapacity'],'O',['vwr','org.jmol.viewer.Viewer','g3d','org.jmol.util.GData','bioModelset','org.jmol.modelsetbio.BioModelSet','at','org.jmol.modelset.Atom[]','trajectory','org.jmol.modelset.Trajectory','pointGroup','org.jmol.api.SymmetryInterface','labeler','org.jmol.modelset.LabelToken','bsSurface','javajs.util.BS','bspf','org.jmol.bspt.Bspf','bsHidden','javajs.util.BS','+bsVisible','+bsClickable','+bsModulated','atomTensorList','Object[][]','atomTensors','java.util.Map','surfaceDistance100s','int[]','tainted','javajs.util.BS[]','atomNames','String[]','+atomTypes','atomSerials','int[]','+atomResnos','+atomSeqIDs','dssrData','float[]','vibrations','org.jmol.util.Vibration[]','occupancies','float[]','bfactor100s','short[]','partialCharges','float[]','+bondingRadii','+hydrophobicities','bsPartialCharges','javajs.util.BS','aaRet','int[]']]
,['F',['sqrt3_2'],'O',['vRef','javajs.util.V3','userSettableValues','String[]']]]

Clazz.newMeth(C$, 'getAtom$I', function (iatom) {
return (iatom >= 0 && iatom < this.at.length  ? this.at[iatom] : null);
});

Clazz.newMeth(C$, 'setupAC$', function () {
this.bsHidden=Clazz.new_($I$(2,1));
this.bsVisible=Clazz.new_($I$(2,1));
this.bsClickable=Clazz.new_($I$(2,1));
if (C$.userSettableValues == null ) C$.userSettableValues=("atomName atomType coord element formalCharge hydrophobicity ionic occupancy partialCharge temperature valence vanderWaals vibrationVector atomNo seqID resNo chain").split$S(" ");
});

Clazz.newMeth(C$, 'releaseModelSetAC$', function () {
this.at=null;
this.vwr=null;
this.g3d=null;
this.bspf=null;
this.surfaceDistance100s=null;
this.bsSurface=null;
this.tainted=null;
this.atomNames=null;
this.atomTypes=null;
this.atomResnos=null;
this.dssrData=null;
this.atomSerials=null;
this.atomSeqIDs=null;
this.vibrations=null;
this.occupancies=null;
this.bfactor100s=null;
p$1.resetPartialCharges.apply(this, []);
this.bondingRadii=null;
this.atomTensors=null;
});

Clazz.newMeth(C$, 'mergeAtomArrays$org_jmol_modelset_AtomCollection', function (mergeModelSet) {
this.tainted=mergeModelSet.tainted;
this.atomNames=mergeModelSet.atomNames;
this.atomTypes=mergeModelSet.atomTypes;
this.atomResnos=mergeModelSet.atomResnos;
this.dssrData=mergeModelSet.dssrData;
this.atomSerials=mergeModelSet.atomSerials;
this.atomSeqIDs=mergeModelSet.atomSeqIDs;
this.vibrations=mergeModelSet.vibrations;
this.occupancies=mergeModelSet.occupancies;
this.bfactor100s=mergeModelSet.bfactor100s;
this.bondingRadii=mergeModelSet.bondingRadii;
this.partialCharges=mergeModelSet.partialCharges;
this.bsPartialCharges=mergeModelSet.bsPartialCharges;
this.atomTensors=mergeModelSet.atomTensors;
this.atomTensorList=mergeModelSet.atomTensorList;
this.bsModulated=mergeModelSet.bsModulated;
this.haveStraightness=false;
this.surfaceDistance100s=null;
});

Clazz.newMeth(C$, 'getAtomPointVector$javajs_util_BS', function (bs) {
var v=Clazz.new_($I$(3,1));
var n=this.ac;
if (bs != null ) {
for (var i=bs.nextSetBit$I(0); i >= 0 && i < n ; i=bs.nextSetBit$I(i + 1)) {
v.addLast$O(this.at[i]);
}
}return v;
});

Clazz.newMeth(C$, 'modelSetHasVibrationVectors$', function () {
return (this.vibrations != null );
});

Clazz.newMeth(C$, 'getAtomTypes$', function () {
return this.atomTypes;
});

Clazz.newMeth(C$, 'getPartialCharges$', function () {
return this.partialCharges;
});

Clazz.newMeth(C$, 'getBondingRadii$', function () {
return this.bondingRadii;
});

Clazz.newMeth(C$, 'getBFactors$', function () {
return this.bfactor100s;
});

Clazz.newMeth(C$, 'getHydrophobicity$', function () {
return this.hydrophobicities;
});

Clazz.newMeth(C$, 'setBsHidden$javajs_util_BS', function (bs) {
this.bsHidden=bs;
});

Clazz.newMeth(C$, 'isAtomHidden$I', function (iAtom) {
return this.bsHidden.get$I(iAtom);
});

Clazz.newMeth(C$, 'getLabeler$', function () {
return (this.labeler == null  ? this.labeler=$I$(4).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.modelset.LabelToken", this.vwr, "ms") : this.labeler);
});

Clazz.newMeth(C$, 'getAtomInfo$I$S$javajs_util_P3', function (i, format, ptTemp) {
return (format == null  ? this.at[i].getInfo$() : this.getLabeler$().formatLabel$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$S$javajs_util_P3(this.vwr, this.at[i], format, ptTemp));
});

Clazz.newMeth(C$, 'getElementName$I', function (i) {
return $I$(5,"elementNameFromNumber$I",[this.at[i].getAtomicAndIsotopeNumber$()]);
});

Clazz.newMeth(C$, 'getQuaternion$I$C', function (i, qtype) {
return (i < 0 ? null : this.at[i].group.getQuaternion$C(qtype));
});

Clazz.newMeth(C$, 'getFirstAtomIndexFromAtomNumber$I$javajs_util_BS', function (atomNumber, bsVisibleFrames) {
for (var i=0; i < this.ac; i++) {
var atom=this.at[i];
if (atom.getAtomNumber$() == atomNumber && bsVisibleFrames.get$I(atom.mi) ) return i;
}
return -1;
});

Clazz.newMeth(C$, 'setFormalCharges$javajs_util_BS$I', function (bs, formalCharge) {
if (bs != null ) {
p$1.resetPartialCharges.apply(this, []);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
this.at[i].setFormalCharge$I(formalCharge);
this.taintAtom$I$I(i, 4);
}
}});

Clazz.newMeth(C$, 'getAtomicCharges$', function () {
var charges=Clazz.array(Float.TYPE, [this.ac]);
for (var i=this.ac; --i >= 0; ) charges[i]=this.at[i].getElementNumber$();

return charges;
});

Clazz.newMeth(C$, 'getRadiusVdwJmol$org_jmol_modelset_Atom', function (atom) {
return $I$(5,"getVanderwaalsMar$I$org_jmol_c_VDW",[atom.getElementNumber$(), $I$(6).JMOL]) / 1000.0;
});

Clazz.newMeth(C$, 'getMaxVanderwaalsRadius$', function () {
if (this.maxVanderwaalsRadius == 1.4E-45 ) this.findMaxRadii$();
return this.maxVanderwaalsRadius;
});

Clazz.newMeth(C$, 'findMaxRadii$', function () {
var r;
for (var i=this.ac; --i >= 0; ) {
var atom=this.at[i];
if ((r=atom.getBondingRadius$()) > this.maxBondingRadius ) this.maxBondingRadius=r;
if ((r=atom.getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, $I$(6).AUTO)) > this.maxVanderwaalsRadius ) this.maxVanderwaalsRadius=r;
}
});

Clazz.newMeth(C$, 'clearBfactorRange$', function () {
this.hasBfactorRange=false;
});

Clazz.newMeth(C$, 'calcBfactorRange$javajs_util_BS', function (bs) {
if (this.hasBfactorRange) return;
this.bfactor100Lo=2147483647;
this.bfactor100Hi=-2147483648;
if (bs == null ) {
for (var i=0; i < this.ac; i++) p$1.setBf$I.apply(this, [i]);

} else {
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) p$1.setBf$I.apply(this, [i]);

}this.hasBfactorRange=true;
}, p$1);

Clazz.newMeth(C$, 'setBf$I', function (i) {
var bf=this.at[i].getBfactor100$();
if (bf < this.bfactor100Lo) this.bfactor100Lo=bf;
 else if (bf > this.bfactor100Hi) this.bfactor100Hi=bf;
}, p$1);

Clazz.newMeth(C$, 'getBfactor100Lo$', function () {
if (!this.hasBfactorRange) {
if (this.vwr.g.rangeSelected) {
p$1.calcBfactorRange$javajs_util_BS.apply(this, [this.vwr.bsA$()]);
} else {
p$1.calcBfactorRange$javajs_util_BS.apply(this, [null]);
}}return this.bfactor100Lo;
});

Clazz.newMeth(C$, 'getBfactor100Hi$', function () {
this.getBfactor100Lo$();
return this.bfactor100Hi;
});

Clazz.newMeth(C$, 'getSurfaceDistanceMax$', function () {
if (this.surfaceDistance100s == null ) p$1.calcSurfaceDistances.apply(this, []);
return this.surfaceDistanceMax;
});

Clazz.newMeth(C$, 'calculateVolume$javajs_util_BS$org_jmol_c_VDW', function (bs, vType) {
var volume=0;
if (bs != null ) for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) volume += this.at[i].getVolume$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, vType);

return volume;
});

Clazz.newMeth(C$, 'getSurfaceDistance100$I', function (atomIndex) {
if (this.nSurfaceAtoms == 0) return -1;
if (this.surfaceDistance100s == null ) p$1.calcSurfaceDistances.apply(this, []);
return this.surfaceDistance100s[atomIndex];
});

Clazz.newMeth(C$, 'calcSurfaceDistances', function () {
this.calculateSurface$javajs_util_BS$F(null, -1);
}, p$1);

Clazz.newMeth(C$, 'calculateSurface$javajs_util_BS$F', function (bsSelected, envelopeRadius) {
if (envelopeRadius < 0 ) envelopeRadius=3.0;
var ec=($I$(4).getOption$S$org_jmol_viewer_Viewer$S("geodesic.EnvelopeCalculation", this.vwr, "ms")).set$org_jmol_atomdata_AtomDataServer$I$HA(this.vwr, this.ac, null);
ec.calculate$org_jmol_atomdata_RadiusData$F$javajs_util_BS$javajs_util_BS$Z$Z$Z$Z(Clazz.new_([null, envelopeRadius, $I$(8).ABSOLUTE, null],$I$(7,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW), 3.4028235E38, bsSelected, $I$(9).copyInvert$javajs_util_BS$I(bsSelected, this.ac), false, false, false, true);
var points=ec.getPoints$();
this.surfaceDistanceMax=0;
this.bsSurface=ec.getBsSurfaceClone$();
this.surfaceDistance100s=Clazz.array(Integer.TYPE, [this.ac]);
this.nSurfaceAtoms=$I$(9).cardinalityOf$javajs_util_BS(this.bsSurface);
if (this.nSurfaceAtoms == 0 || points == null   || points.length == 0 ) return points;
var radiusAdjust=(envelopeRadius == 3.4028235E38  ? 0 : envelopeRadius);
for (var i=0; i < this.ac; i++) {
if (this.bsSurface.get$I(i)) {
this.surfaceDistance100s[i]=0;
} else {
var dMin=3.4028235E38;
var atom=this.at[i];
for (var j=points.length; --j >= 0; ) {
var d=Math.abs(points[j].distance$javajs_util_T3(atom) - radiusAdjust);
if (d < 0  && $I$(10).debugging ) $I$(10,"debug$S",["draw d" + j + " " + $I$(11).eP$javajs_util_T3(points[j]) + " \"" + new Float(d).toString() + " ? " + atom.getInfo$() + "\"" ]);
dMin=Math.min(d, dMin);
}
var d=this.surfaceDistance100s[i]=(Math.floor(dMin * 100)|0);
this.surfaceDistanceMax=Math.max(this.surfaceDistanceMax, d);
}}
return points;
});

Clazz.newMeth(C$, 'setAtomCoord2$javajs_util_BS$I$O', function (bs, tokType, xyzValues) {
var xyz=null;
var values=null;
var v=null;
var type=0;
var nValues=1;
if (Clazz.instanceOf(xyzValues, "javajs.util.P3")) {
xyz=xyzValues;
} else if (Clazz.instanceOf(xyzValues, "javajs.util.Lst")) {
v=xyzValues;
if ((nValues=v.size$()) == 0) return;
type=1;
} else if ($I$(12).isAP$O(xyzValues)) {
values=xyzValues;
if ((nValues=values.length) == 0) return;
type=2;
} else {
return;
}var n=0;
if (bs != null ) for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
switch (type) {
case 1:
if (n >= nValues) return;
xyz=v.get$I(n++);
break;
case 2:
if (n >= nValues) return;
xyz=values[n++];
break;
}
if (xyz != null ) switch (tokType) {
case 1145047050:
this.setAtomCoord$I$F$F$F(i, xyz.x, xyz.y, xyz.z);
break;
case 1145047051:
this.at[i].setFractionalCoordTo$javajs_util_P3$Z(xyz, true);
this.taintAtom$I$I(i, 2);
break;
case 1145047053:
this.at[i].setFractionalCoordTo$javajs_util_P3$Z(xyz, false);
this.taintAtom$I$I(i, 2);
break;
case 1145047055:
p$1.setAtomVibrationVector$I$javajs_util_T3.apply(this, [i, xyz]);
break;
}
}
});

Clazz.newMeth(C$, 'setAtomVibrationVector$I$javajs_util_T3', function (atomIndex, vib) {
this.setVibrationVector$I$javajs_util_T3(atomIndex, vib);
this.taintAtom$I$I(atomIndex, 12);
}, p$1);

Clazz.newMeth(C$, 'setAtomCoord$I$F$F$F', function (atomIndex, x, y, z) {
if (atomIndex < 0 || atomIndex >= this.ac ) return;
var a=this.at[atomIndex];
a.set$F$F$F(x, y, z);
p$1.fixTrajectory$org_jmol_modelset_Atom.apply(this, [a]);
this.taintAtom$I$I(atomIndex, 2);
});

Clazz.newMeth(C$, 'fixTrajectory$org_jmol_modelset_Atom', function (a) {
if ((this).isTrajectory$I(a.mi)) this.trajectory.fixAtom$org_jmol_modelset_Atom(a);
}, p$1);

Clazz.newMeth(C$, 'setAtomCoordRelative$I$F$F$F', function (atomIndex, x, y, z) {
if (atomIndex < 0 || atomIndex >= this.ac ) return;
var a=this.at[atomIndex];
a.add3$F$F$F(x, y, z);
p$1.fixTrajectory$org_jmol_modelset_Atom.apply(this, [a]);
this.taintAtom$I$I(atomIndex, 2);
});

Clazz.newMeth(C$, 'setAtomsCoordRelative$javajs_util_BS$F$F$F', function (bs, x, y, z) {
if (bs != null ) for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) this.setAtomCoordRelative$I$F$F$F(i, x, y, z);

});

Clazz.newMeth(C$, 'setAPa$javajs_util_BS$I$I$F$S$FA$SA', function (bs, tok, iValue, fValue, sValue, values, list) {
var n=0;
if (values != null  && values.length == 0  || bs == null  ) return;
var isAll=(values != null  && values.length == this.ac  || list != null  && list.length == this.ac  );
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (isAll) n=i;
if (values != null ) {
if (n >= values.length) return;
fValue=values[n++];
if (Float.isNaN$F(fValue)) continue;
iValue=(fValue|0);
} else if (list != null ) {
if (n >= list.length) return;
sValue=list[n++];
}var atom=this.at[i];
switch (tok) {
case 1086326786:
this.setAtomName$I$S$Z(i, sValue, true);
break;
case 1086326785:
p$1.setAtomType$I$S.apply(this, [i, sValue]);
break;
case 1086326788:
p$1.setChainID$I$S.apply(this, [i, sValue]);
break;
case 1094715393:
this.setAtomNumber$I$I$Z(i, iValue, true);
break;
case 1094713365:
p$1.setAtomSeqID$I$I.apply(this, [i, iValue]);
break;
case 1111492609:
case 1111492629:
this.setAtomCoord$I$F$F$F(i, fValue, atom.y, atom.z);
break;
case 1111492610:
case 1111492630:
this.setAtomCoord$I$F$F$F(i, atom.x, fValue, atom.z);
break;
case 1111492611:
case 1111492631:
this.setAtomCoord$I$F$F$F(i, atom.x, atom.y, fValue);
break;
case 1111492626:
case 1111492627:
case 1111492628:
p$1.setVibrationVector2$I$I$F.apply(this, [i, tok, fValue]);
break;
case 1111492612:
case 1111492613:
case 1111492614:
atom.setFractionalCoord$I$F$Z(tok, fValue, true);
this.taintAtom$I$I(i, 2);
break;
case 1111492615:
case 1111492616:
case 1111492617:
atom.setFractionalCoord$I$F$Z(tok, fValue, false);
this.taintAtom$I$I(i, 2);
break;
case 1094715402:
case 1086326789:
this.setElement$org_jmol_modelset_Atom$I$Z(atom, iValue, true);
break;
case 1631586315:
p$1.resetPartialCharges.apply(this, []);
atom.setFormalCharge$I(iValue);
this.taintAtom$I$I(i, 4);
break;
case 1113589786:
p$1.setHydrophobicity$I$F.apply(this, [i, fValue]);
break;
case 1128269825:
if (fValue < 2  && fValue > 0.01  ) fValue=100 * fValue;
this.setOccupancy$I$F$Z(i, fValue, true);
break;
case 1111492619:
this.setPartialCharge$I$F$Z(i, fValue, true);
break;
case 1111492618:
p$1.setBondingRadius$I$F.apply(this, [i, fValue]);
break;
case 1111492620:
this.setBFactor$I$F$Z(i, fValue, true);
break;
case 1094715412:
p$1.setAtomResno$I$I.apply(this, [i, iValue]);
break;
case 1825200146:
case 1287653388:
this.vwr.shm.setAtomLabel$S$I(sValue, i);
break;
case 1665140738:
case 1112152075:
if (fValue < 0 ) fValue=0;
 else if (fValue > 16 ) fValue=16.1;
atom.madAtom=(($s$[0] = (fValue * 2000), $s$[0]));
break;
case 1113589787:
this.vwr.slm.setSelectedAtom$I$Z(atom.i, (fValue != 0 ));
break;
case 1094715417:
atom.setValence$I(iValue);
this.taintAtom$I$I(i, 10);
break;
case 1648363544:
if (atom.setRadius$F(fValue)) this.taintAtom$I$I(i, 11);
 else p$1.untaint$I$I.apply(this, [i, 11]);
break;
default:
$I$(10,"error$S",["unsettable atom property: " + $I$(13).nameOf$I(tok)]);
return;
}
}
switch (tok) {
case 1113589787:
this.vwr.slm.setSelectedAtom$I$Z(-1, false);
break;
case 1665140738:
case 1112152075:
this.vwr.setShapeSize$I$I$javajs_util_BS(0, 2147483647, bs);
}
});

Clazz.newMeth(C$, 'getVibCoord$I$C', function (atomIndex, c) {
var ms=null;
var v=null;
switch (c.$c()) {
case 120:
case 121:
case 122:
v=this.getVibration$I$Z(atomIndex, false);
break;
default:
ms=this.getModulation$I(atomIndex);
if (ms != null ) {
v=ms.getVibration$Z(false);
if (v == null ) v=ms;
}}
if (v == null  && ms == null  ) return NaN;
switch (c.$c()) {
case 120:
case 88:
return v.x;
case 121:
case 89:
return v.y;
case 122:
case 90:
return v.z;
case 79:
return (ms.getModulation$C$javajs_util_T3("O", null)).floatValue$();
case 49:
case 50:
case 51:
var t=ms.getModulation$C$javajs_util_T3("T", null);
var x=(c == "1" ? t.x : c == "2" ? t.y : t.z);
return (x - Math.floor(x));
default:
return NaN;
}
});

Clazz.newMeth(C$, 'getVibration$I$Z', function (atomIndex, forceNew) {
var v=(this.vibrations == null  ? null : this.vibrations[atomIndex]);
return (Clazz.instanceOf(v, "org.jmol.api.JmolModulationSet") ? (v).getVibration$Z(forceNew) : v == null  && forceNew  ? Clazz.new_($I$(14,1)) : v);
});

Clazz.newMeth(C$, 'getModulation$I', function (iAtom) {
var v=(this.vibrations == null  ? null : this.vibrations[iAtom]);
return (v != null  && v.modDim > 0  ? v : null);
});

Clazz.newMeth(C$, 'setVibrationVector$I$javajs_util_T3', function (atomIndex, vib) {
if (Float.isNaN$F(vib.x) || Float.isNaN$F(vib.y) || Float.isNaN$F(vib.z)  ) return;
if (this.vibrations == null  || this.vibrations.length < atomIndex ) this.vibrations=Clazz.array($I$(14), [this.at.length]);
if (Clazz.instanceOf(vib, "org.jmol.util.Vibration")) {
this.vibrations[atomIndex]=vib;
} else {
if (this.vibrations[atomIndex] == null ) this.vibrations[atomIndex]=Clazz.new_($I$(14,1));
this.vibrations[atomIndex].setXYZ$javajs_util_T3(vib);
}this.at[atomIndex].setVibrationVector$();
});

Clazz.newMeth(C$, 'setVibrationVector2$I$I$F', function (atomIndex, tok, fValue) {
var v=this.getVibration$I$Z(atomIndex, true);
if (v == null ) return;
switch (tok) {
case 1111492626:
v.x=fValue;
break;
case 1111492627:
v.y=fValue;
break;
case 1111492628:
v.z=fValue;
break;
}
p$1.setAtomVibrationVector$I$javajs_util_T3.apply(this, [atomIndex, v]);
}, p$1);

Clazz.newMeth(C$, 'setAtomName$I$S$Z', function (atomIndex, name, doTaint) {
if (doTaint && name.equals$O(this.at[atomIndex].getAtomName$()) ) return;
var id=((this).am[this.at[atomIndex].mi].isBioModel ? this.vwr.getJBR$().lookupSpecialAtomID$S(name) : ($b$[0] = 0, $b$[0]));
this.at[atomIndex].atomID=id;
if (id <= 0) {
if (this.atomNames == null ) this.atomNames=Clazz.array(String, [this.at.length]);
this.atomNames[atomIndex]=name;
}if (doTaint) this.taintAtom$I$I(atomIndex, 0);
});

Clazz.newMeth(C$, 'setAtomType$I$S', function (atomIndex, type) {
if (type.equals$O(this.at[atomIndex].getAtomType$())) return;
if (this.atomTypes == null ) this.atomTypes=Clazz.array(String, [this.at.length]);
this.atomTypes[atomIndex]=type;
return;
}, p$1);

Clazz.newMeth(C$, 'setChainID$I$S', function (atomIndex, id) {
if (id.equals$O(this.at[atomIndex].getChainIDStr$())) return;
var intid=this.at[atomIndex].getChainID$();
var bs=this.getChainBits$I(intid);
var c=this.at[atomIndex].group.chain;
c.chainID=this.vwr.getChainID$S$Z(id, true);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) this.taintAtom$I$I(i, 16);

}, p$1);

Clazz.newMeth(C$, 'setAtomNumber$I$I$Z', function (atomIndex, atomno, doTaint) {
if (doTaint && atomno == this.at[atomIndex].getAtomNumber$() ) return;
if (this.atomSerials == null ) this.atomSerials=Clazz.array(Integer.TYPE, [this.at.length]);
this.atomSerials[atomIndex]=atomno;
if (doTaint) this.taintAtom$I$I(atomIndex, 13);
});

Clazz.newMeth(C$, 'setElement$org_jmol_modelset_Atom$I$Z', function (atom, atomicNumber, doTaint) {
if (doTaint && atom.getElementNumber$() == atomicNumber ) return;
atom.setAtomicAndIsotopeNumber$I(atomicNumber);
atom.paletteID=$I$(15).CPK.id;
atom.colixAtom=this.vwr.cm.getColixAtomPalette$org_jmol_modelset_Atom$B(atom, $I$(15).CPK.id);
p$1.resetPartialCharges.apply(this, []);
if (doTaint) this.taintAtom$I$I(atom.i, 3);
});

Clazz.newMeth(C$, 'resetPartialCharges', function () {
this.partialCharges=null;
this.bsPartialCharges=null;
}, p$1);

Clazz.newMeth(C$, 'setAtomResno$I$I', function (atomIndex, resno) {
if (resno == this.at[atomIndex].getResno$()) return;
this.at[atomIndex].group.setResno$I(resno);
if (this.atomResnos == null ) this.atomResnos=Clazz.array(Integer.TYPE, [this.at.length]);
this.atomResnos[atomIndex]=resno;
this.taintAtom$I$I(atomIndex, 15);
}, p$1);

Clazz.newMeth(C$, 'setAtomSeqID$I$I', function (atomIndex, seqID) {
if (seqID == this.at[atomIndex].getSeqID$()) return;
if (this.atomSeqIDs == null ) this.atomSeqIDs=Clazz.array(Integer.TYPE, [this.at.length]);
this.atomSeqIDs[atomIndex]=seqID;
this.taintAtom$I$I(atomIndex, 14);
}, p$1);

Clazz.newMeth(C$, 'setOccupancy$I$F$Z', function (atomIndex, occupancy, doTaint) {
if (doTaint && occupancy == this.at[atomIndex].getOccupancy100$()  ) return;
if (this.occupancies == null ) {
if (occupancy == 100 ) return;
this.occupancies=Clazz.array(Float.TYPE, [this.at.length]);
for (var i=this.at.length; --i >= 0; ) this.occupancies[i]=100;

}this.occupancies[atomIndex]=occupancy;
if (doTaint) this.taintAtom$I$I(atomIndex, 7);
});

Clazz.newMeth(C$, 'setPartialCharge$I$F$Z', function (atomIndex, partialCharge, doTaint) {
if (Float.isNaN$F(partialCharge)) return;
if (this.partialCharges == null ) {
this.bsPartialCharges=Clazz.new_($I$(2,1));
if (partialCharge == 0 ) return;
this.partialCharges=Clazz.array(Float.TYPE, [this.at.length]);
}this.bsPartialCharges.set$I(atomIndex);
this.partialCharges[atomIndex]=partialCharge;
if (doTaint) this.taintAtom$I$I(atomIndex, 8);
});

Clazz.newMeth(C$, 'setBondingRadius$I$F', function (atomIndex, radius) {
if (Float.isNaN$F(radius) || radius == this.at[atomIndex].getBondingRadius$()  ) return;
if (this.bondingRadii == null ) this.bondingRadii=Clazz.array(Float.TYPE, [this.at.length]);
this.bondingRadii[atomIndex]=radius;
this.taintAtom$I$I(atomIndex, 6);
}, p$1);

Clazz.newMeth(C$, 'setBFactor$I$F$Z', function (atomIndex, bfactor, doTaint) {
if (Float.isNaN$F(bfactor) || doTaint && bfactor == this.at[atomIndex].getBfactor100$()   ) return;
if (this.bfactor100s == null ) {
if (bfactor == 0 ) return;
this.bfactor100s=Clazz.array(Short.TYPE, [this.at.length]);
}this.bfactor100s[atomIndex]=(((bfactor < -327.68  ? -327.68 : bfactor > 327.67  ? 327.67 : bfactor) * 100 + (bfactor < 0  ? -0.5 : 0.5))|0);
if (doTaint) this.taintAtom$I$I(atomIndex, 9);
});

Clazz.newMeth(C$, 'setHydrophobicity$I$F', function (atomIndex, value) {
if (Float.isNaN$F(value) || value == this.at[atomIndex].getHydrophobicity$()  ) return;
if (this.hydrophobicities == null ) {
this.hydrophobicities=Clazz.array(Float.TYPE, [this.at.length]);
for (var i=0; i < this.at.length; i++) this.hydrophobicities[i]=$I$(5).getHydrophobicity$I(this.at[i].group.groupID);

}this.hydrophobicities[atomIndex]=value;
this.taintAtom$I$I(atomIndex, 5);
}, p$1);

Clazz.newMeth(C$, 'setAtomData$I$S$S$Z', function (type, name, dataString, isDefault) {
var fData=null;
var bs=null;
switch (type) {
case 2:
p$1.loadCoordinates$S$Z$Z.apply(this, [dataString, false, !isDefault]);
return;
case 12:
p$1.loadCoordinates$S$Z$Z.apply(this, [dataString, true, true]);
return;
case 17:
fData=Clazz.array(Float.TYPE, [this.ac]);
bs=$I$(2).newN$I(this.ac);
break;
}
var lines=$I$(16).markLines$S$C(dataString, ";");
var n=0;
try {
var nData=$I$(17,"parseInt$S",[dataString.substring$I$I(0, lines[0] - 1)]);
for (var i=1; i <= nData; i++) {
var tokens=$I$(17,"getTokens$S",[$I$(17,"parseTrimmed$S",[dataString.substring$I$I(lines[i], lines[i + 1] - 1)])]);
var atomIndex=$I$(17).parseInt$S(tokens[0]) - 1;
if (atomIndex < 0 || atomIndex >= this.ac ) continue;
var atom=this.at[atomIndex];
n++;
var pt=tokens.length - 1;
var x=$I$(17).parseFloat$S(tokens[pt]);
switch (type) {
case 17:
fData[atomIndex]=x;
bs.set$I(atomIndex);
continue;
case 0:
this.setAtomName$I$S$Z(atomIndex, tokens[pt], true);
break;
case 13:
this.setAtomNumber$I$I$Z(atomIndex, (x|0), true);
break;
case 15:
p$1.setAtomResno$I$I.apply(this, [atomIndex, (x|0)]);
break;
case 14:
p$1.setAtomSeqID$I$I.apply(this, [atomIndex, (x|0)]);
break;
case 1:
p$1.setAtomType$I$S.apply(this, [atomIndex, tokens[pt]]);
break;
case 16:
p$1.setChainID$I$S.apply(this, [atomIndex, tokens[pt]]);
break;
case 3:
atom.setAtomicAndIsotopeNumber$I((x|0));
atom.paletteID=$I$(15).CPK.id;
atom.colixAtom=this.vwr.cm.getColixAtomPalette$org_jmol_modelset_Atom$B(atom, $I$(15).CPK.id);
break;
case 4:
atom.setFormalCharge$I((x|0));
break;
case 5:
p$1.setHydrophobicity$I$F.apply(this, [atomIndex, x]);
break;
case 6:
p$1.setBondingRadius$I$F.apply(this, [atomIndex, x]);
break;
case 8:
this.setPartialCharge$I$F$Z(atomIndex, x, true);
break;
case 9:
this.setBFactor$I$F$Z(atomIndex, x, true);
break;
case 10:
atom.setValence$I((x|0));
break;
case 11:
atom.setRadius$F(x);
break;
}
this.taintAtom$I$I(atomIndex, type);
}
if (type == 17 && n > 0 ) this.vwr.setData$S$OA$I$I$I$I$I(name, Clazz.array(java.lang.Object, -1, [name, fData, bs, Integer.valueOf$I(1)]), 0, 0, 0, 0, 0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(10).error$S("AtomCollection.loadData error: " + e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'loadCoordinates$S$Z$Z', function (data, isVibrationVectors, doTaint) {
var lines=$I$(16).markLines$S$C(data, ";");
var v=(isVibrationVectors ? Clazz.new_($I$(1,1)) : null);
try {
var nData=$I$(17,"parseInt$S",[data.substring$I$I(0, lines[0] - 1)]);
for (var i=1; i <= nData; i++) {
var tokens=$I$(17,"getTokens$S",[$I$(17,"parseTrimmed$S",[data.substring$I$I(lines[i], lines[i + 1])])]);
var atomIndex=$I$(17).parseInt$S(tokens[0]) - 1;
var x=(tokens[3].equalsIgnoreCase$S("1.4E-45") ? 1.4E-45 : $I$(17).parseFloat$S(tokens[3]));
var y=(tokens[4].equalsIgnoreCase$S("1.4E-45") ? 1.4E-45 : $I$(17).parseFloat$S(tokens[4]));
var z=$I$(17).parseFloat$S(tokens[5]);
if (isVibrationVectors) {
v.set$F$F$F(x, y, z);
p$1.setAtomVibrationVector$I$javajs_util_T3.apply(this, [atomIndex, v]);
} else {
this.setAtomCoord$I$F$F$F(atomIndex, x, y, z);
if (!doTaint) p$1.untaint$I$I.apply(this, [atomIndex, 2]);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(10).error$S("Frame.loadCoordinate error: " + e);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'validateBspf$Z', function (isValid) {
if (this.bspf != null ) this.bspf.isValid=isValid;
});

Clazz.newMeth(C$, 'validateBspfForModel$I$Z', function (modelIndex, isValid) {
if (this.bspf != null ) this.bspf.validateModel$I$Z(modelIndex, isValid);
});

Clazz.newMeth(C$, 'setPreserveState$Z', function (TF) {
this.preserveState=TF;
});

Clazz.newMeth(C$, 'getUserSettableType$S', function (dataType) {
var isExplicit=(dataType.indexOf$S("property_") == 0);
var check=(isExplicit ? dataType.substring$I(9) : dataType);
for (var i=0; i < 17; i++) if (C$.userSettableValues[i].equalsIgnoreCase$S(check)) return i;

return (isExplicit ? 17 : -1);
}, 1);

Clazz.newMeth(C$, 'getTaintedAtoms$I', function (type) {
return this.tainted == null  ? null : this.tainted[type];
});

Clazz.newMeth(C$, 'taintAtoms$javajs_util_BS$I', function (bsAtoms, type) {
this.canSkipLoad=false;
if (!this.preserveState) return;
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) this.taintAtom$I$I(i, type);

});

Clazz.newMeth(C$, 'taintAtom$I$I', function (atomIndex, type) {
if (this.preserveState) {
if (this.tainted == null ) this.tainted=Clazz.array($I$(2), [17]);
if (this.tainted[type] == null ) this.tainted[type]=$I$(2).newN$I(this.ac);
this.tainted[type].set$I(atomIndex);
}if (type == 2) p$1.taintModelCoord$I.apply(this, [atomIndex]);
});

Clazz.newMeth(C$, 'taintModelCoord$I', function (atomIndex) {
var m=(this).am[this.at[atomIndex].mi];
this.validateBspfForModel$I$Z(m.trajectoryBaseIndex, false);
if (m.isBioModel) m.resetDSSR$Z(true);
this.pointGroup=null;
}, p$1);

Clazz.newMeth(C$, 'untaint$I$I', function (atomIndex, type) {
if (!this.preserveState) return;
if (this.tainted == null  || this.tainted[type] == null  ) return;
this.tainted[type].clear$I(atomIndex);
}, p$1);

Clazz.newMeth(C$, 'setTaintedAtoms$javajs_util_BS$I', function (bs, type) {
if (this.preserveState) {
if (bs == null ) {
if (this.tainted == null ) return;
this.tainted[type]=null;
return;
}if (this.tainted == null ) this.tainted=Clazz.array($I$(2), [17]);
if (this.tainted[type] == null ) this.tainted[type]=$I$(2).newN$I(this.ac);
$I$(9).copy2$javajs_util_BS$javajs_util_BS(bs, this.tainted[type]);
}if (type == 2) {
var i=bs.nextSetBit$I(0);
if (i >= 0) p$1.taintModelCoord$I.apply(this, [i]);
}});

Clazz.newMeth(C$, 'unTaintAtoms$javajs_util_BS$I', function (bs, type) {
if (this.tainted == null  || this.tainted[type] == null  ) return;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) this.tainted[type].clear$I(i);

if (this.tainted[type].nextSetBit$I(0) < 0) this.tainted[type]=null;
});

Clazz.newMeth(C$, 'findNearest2$I$I$org_jmol_modelset_AtomA$javajs_util_BS$I', function (x, y, closest, bsNot, min) {
var champion=null;
for (var i=this.ac; --i >= 0; ) {
if (bsNot != null  && bsNot.get$I(i) ) continue;
var contender=this.at[i];
if (contender.isClickable$() && this.isCursorOnTopOf$org_jmol_modelset_Atom$I$I$I$org_jmol_modelset_Atom(contender, x, y, min, champion) ) champion=contender;
}
closest[0]=champion;
});

Clazz.newMeth(C$, 'isCursorOnTopOf$org_jmol_modelset_Atom$I$I$I$org_jmol_modelset_Atom', function (contender, x, y, radius, champion) {
return contender.sZ > 1 && !this.g3d.isClippedZ$I(contender.sZ)  && this.g3d.isInDisplayRange$I$I(contender.sX, contender.sY)  && contender.isCursorOnTopOf$I$I$I$org_jmol_modelset_Atom(x, y, radius, champion) ;
});

Clazz.newMeth(C$, 'fillADa$org_jmol_atomdata_AtomData$I', function (atomData, mode) {
atomData.xyz=atomData.atoms=this.at;
atomData.ac=this.ac;
atomData.atomicNumber=Clazz.array(Integer.TYPE, [this.ac]);
var includeRadii=((mode & 2) != 0);
if (includeRadii) atomData.atomRadius=Clazz.array(Float.TYPE, [this.ac]);
var isMultiModel=((mode & 16) != 0);
for (var i=0; i < this.ac; i++) {
var atom=this.at[i];
if (atom.isDeleted$() || !isMultiModel && atomData.modelIndex >= 0  && atom.mi != atomData.firstModelIndex  ) {
if (atomData.bsIgnored == null ) atomData.bsIgnored=Clazz.new_($I$(2,1));
atomData.bsIgnored.set$I(i);
continue;
}atomData.atomicNumber[i]=atom.getElementNumber$();
atomData.lastModelIndex=atom.mi;
if (includeRadii) atomData.atomRadius[i]=p$1.getWorkingRadius$org_jmol_modelset_Atom$org_jmol_atomdata_AtomData.apply(this, [atom, atomData]);
}
});

Clazz.newMeth(C$, 'getWorkingRadius$org_jmol_modelset_Atom$org_jmol_atomdata_AtomData', function (atom, atomData) {
var r=0;
var rd=atomData.radiusData;
switch (rd.factorType) {
case $I$(8).ABSOLUTE:
r=rd.value;
break;
case $I$(8).FACTOR:
case $I$(8).OFFSET:
switch (rd.vdwType) {
case $I$(6).BONDING:
r=atom.getBondingRadius$();
break;
case $I$(6).ADPMAX:
r=atom.getADPMinMax$Z(true);
break;
case $I$(6).ADPMIN:
r=atom.getADPMinMax$Z(false);
break;
default:
r=atom.getVanderwaalsRadiusFloat$org_jmol_viewer_Viewer$org_jmol_c_VDW(this.vwr, atomData.radiusData.vdwType);
}
if (rd.factorType === $I$(8).FACTOR ) r *= rd.value;
 else r += rd.value;
}
return r + rd.valueExtended;
}, p$1);

Clazz.newMeth(C$, 'calculateHydrogens$javajs_util_BS$IA$Z$Z$javajs_util_Lst', function (bs, nTotal, doAll, justCarbon, vConnect) {
var z=Clazz.new_($I$(1,1));
var x=Clazz.new_($I$(1,1));
var hAtoms=Clazz.array($I$(18), [this.ac, null]);
var bsDeleted=this.vwr.slm.bsDeleted;
var pt;
var nH=0;
if (bs != null ) for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (bsDeleted != null  && bsDeleted.get$I(i) ) continue;
var atom=this.at[i];
var atomicNumber=atom.getElementNumber$();
if (justCarbon && atomicNumber != 6 ) continue;
var dHX=(atomicNumber <= 6 ? 1.1 : atomicNumber <= 10 ? 1.0 : 1.3);
switch (atomicNumber) {
case 7:
case 8:
dHX=1.0;
break;
case 6:
}
if (doAll && atom.getCovalentHydrogenCount$() > 0 ) continue;
var n=this.getMissingHydrogenCount$org_jmol_modelset_Atom$Z(atom, false);
if (n == 0) continue;
var targetValence=this.aaRet[0];
var hybridization=this.aaRet[2];
var nBonds=this.aaRet[3];
if (nBonds == 0 && atom.isHetero$() ) continue;
hAtoms[i]=Clazz.array($I$(18), [n]);
var hPt=0;
if (nBonds == 0) {
switch (n) {
case 4:
z.set$F$F$F(0.635, 0.635, 0.635);
pt=$I$(18).newP$javajs_util_T3(z);
pt.add$javajs_util_T3(atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
case 3:
z.set$F$F$F(-0.635, -0.635, 0.635);
pt=$I$(18).newP$javajs_util_T3(z);
pt.add$javajs_util_T3(atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
case 2:
z.set$F$F$F(-0.635, 0.635, -0.635);
pt=$I$(18).newP$javajs_util_T3(z);
pt.add$javajs_util_T3(atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
case 1:
z.set$F$F$F(0.635, -0.635, -0.635);
pt=$I$(18).newP$javajs_util_T3(z);
pt.add$javajs_util_T3(atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
}
} else {
switch (n) {
default:
break;
case 3:
this.getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z(i, atomicNumber, z, x, "sp3b", false, true);
pt=Clazz.new_($I$(18,1));
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(dHX, z, atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
this.getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z(i, atomicNumber, z, x, "sp3c", false, true);
pt=Clazz.new_($I$(18,1));
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(dHX, z, atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
this.getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z(i, atomicNumber, z, x, "sp3d", false, true);
pt=Clazz.new_($I$(18,1));
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(dHX, z, atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
break;
case 2:
var isEne=(hybridization == 2 || atomicNumber == 5  || nBonds == 1 && targetValence == 4   || atomicNumber == 7 && p$1.isAdjacentSp2$org_jmol_modelset_Atom.apply(this, [atom])  );
this.getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z(i, atomicNumber, z, x, (isEne ? "sp2b" : targetValence == 3 ? "sp3c" : "lpa"), false, true);
pt=$I$(18).newP$javajs_util_T3(z);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(dHX, z, atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
this.getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z(i, atomicNumber, z, x, (isEne ? "sp2c" : targetValence == 3 ? "sp3d" : "lpb"), false, true);
pt=$I$(18).newP$javajs_util_T3(z);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(dHX, z, atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
break;
case 1:
switch (targetValence - nBonds) {
case 1:
if (atomicNumber == 8 && atom === atom.group.getCarbonylOxygenAtom$()  ) {
hAtoms[i]=null;
continue;
}if (this.getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z(i, atomicNumber, z, x, (hybridization == 2 || atomicNumber == 5  || atomicNumber == 7 && (atom.group.getNitrogenAtom$() === atom  || p$1.isAdjacentSp2$org_jmol_modelset_Atom.apply(this, [atom]) )   ? "sp2c" : "sp3d"), true, false) != null ) {
pt=$I$(18).newP$javajs_util_T3(z);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(dHX, z, atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
} else {
hAtoms[i]=Clazz.array($I$(18), [0]);
}break;
case 2:
this.getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z(i, atomicNumber, z, x, (targetValence == 4 ? "sp2c" : "sp2b"), false, false);
pt=$I$(18).newP$javajs_util_T3(z);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(dHX, z, atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
break;
case 3:
this.getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z(i, atomicNumber, z, x, "spb", false, true);
pt=$I$(18).newP$javajs_util_T3(z);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(dHX, z, atom);
hAtoms[i][hPt++]=pt;
if (vConnect != null ) vConnect.addLast$O(atom);
break;
}
}
}nH+=hPt;
}
nTotal[0]=nH;
return hAtoms;
});

Clazz.newMeth(C$, 'isAdjacentSp2$org_jmol_modelset_Atom', function (atom) {
var bonds=atom.bonds;
for (var i=0; i < bonds.length; i++) {
var b2=bonds[i].getOtherAtom$org_jmol_modelset_Atom(atom).bonds;
for (var j=0; j < b2.length; j++) switch (b2[j].order) {
case 515:
case 514:
case 2:
case 3:
return true;
}

}
return false;
}, p$1);

Clazz.newMeth(C$, 'getMissingHydrogenCount$org_jmol_modelset_Atom$Z', function (atom, allowNegative) {
var targetCount=atom.getTargetValence$();
if (targetCount < 0) return 0;
var charge=atom.getFormalCharge$();
var valence=atom.getValence$();
var model=(this).am[atom.mi];
var s=(model.isBioModel && !model.isPdbWithMultipleBonds  ? atom.group.getGroup3$() : null);
if (this.aaRet == null ) this.aaRet=Clazz.array(Integer.TYPE, [5]);
this.aaRet[0]=targetCount;
this.aaRet[1]=charge;
this.aaRet[2]=0;
this.aaRet[3]=atom.getCovalentBondCount$();
this.aaRet[4]=(s == null  ? 0 : valence);
if (s != null  && charge == 0 ) {
if (this.bioModelset.getAminoAcidValenceAndCharge$S$S$IA(s, atom.getAtomName$(), this.aaRet)) {
targetCount=this.aaRet[0];
charge=this.aaRet[1];
}}if (charge != 0) {
targetCount+=(targetCount == 4 ? -Math.abs(charge) : charge);
this.aaRet[0]=targetCount;
}var n=targetCount - valence;
return (n < 0 && !allowNegative  ? 0 : n);
});

Clazz.newMeth(C$, 'fixFormalCharges$javajs_util_BS', function (bs) {
var n=0;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var a=this.at[i];
var nH=this.getMissingHydrogenCount$org_jmol_modelset_Atom$Z(a, true);
if (nH != 0) {
var c0=a.getFormalCharge$();
var c=c0 - nH;
a.setFormalCharge$I(c);
this.taintAtom$I$I(i, 4);
if ($I$(10).debugging) $I$(10).debug$S("atom " + a + " formal charge " + c0 + " -> " + c );
n++;
}}
return n;
});

Clazz.newMeth(C$, 'getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z', function (atomIndex, atomicNumber, z, x, lcaoTypeRaw, hybridizationCompatible, doAlignZ) {
var lcaoType=(lcaoTypeRaw.length$() > 0 && lcaoTypeRaw.charAt$I(0) == "-"  ? lcaoTypeRaw.substring$I(1) : lcaoTypeRaw);
if (lcaoTypeRaw.indexOf$S("d") >= 0 && !lcaoTypeRaw.endsWith$S("sp3d") ) return p$1.getHybridizationAndAxesD$I$javajs_util_V3$javajs_util_V3$S.apply(this, [atomIndex, z, x, lcaoType]);
var atom=this.at[atomIndex];
if (atomicNumber == 0) atomicNumber=atom.getElementNumber$();
var attached=p$1.getAttached$org_jmol_modelset_Atom$I$Z.apply(this, [atom, 4, hybridizationCompatible]);
var nAttached=attached.length;
var pt=(lcaoType.charCodeAt$I(lcaoType.length$() - 1)) - 97;
if (pt < 0 || pt > 6 ) pt=0;
z.set$F$F$F(0, 0, 0);
x.set$F$F$F(0, 0, 0);
var v=Clazz.array($I$(1), [4]);
for (var i=0; i < nAttached; i++) {
v[i]=$I$(1).newVsub$javajs_util_T3$javajs_util_T3(atom, attached[i]);
v[i].normalize$();
z.add$javajs_util_T3(v[i]);
}
if (nAttached > 0) x.setT$javajs_util_T3(v[0]);
var isPlanar=false;
var vTemp=Clazz.new_($I$(1,1));
if (nAttached >= 3) {
if (x.angle$javajs_util_V3(v[1]) < 2.984513 ) vTemp.cross$javajs_util_T3$javajs_util_T3(x, v[1]);
 else vTemp.cross$javajs_util_T3$javajs_util_T3(x, v[2]);
vTemp.normalize$();
var vTemp2=Clazz.new_($I$(1,1));
if (v[1].angle$javajs_util_V3(v[2]) < 2.984513 ) vTemp2.cross$javajs_util_T3$javajs_util_T3(v[1], v[2]);
 else vTemp2.cross$javajs_util_T3$javajs_util_T3(x, v[2]);
vTemp2.normalize$();
isPlanar=(Math.abs(vTemp2.dot$javajs_util_T3(vTemp)) >= 0.95 );
}var isSp3=(lcaoType.indexOf$S("sp3") == 0);
var isSp2=(!isSp3 && lcaoType.indexOf$S("sp2") == 0 );
var isSp=(!isSp3 && !isSp2 && lcaoType.indexOf$S("sp") == 0  );
var isP=(lcaoType.indexOf$S("p") == 0);
var isLp=(lcaoType.indexOf$S("lp") == 0);
var hybridization=null;
if (hybridizationCompatible) {
if (nAttached == 0) return null;
if (isSp3) {
if (pt > 3 || nAttached > 4 ) return null;
} else if (isSp2) {
if (pt > 2 || nAttached > 3 ) return null;
} else if (isSp) {
if (pt > 1 || nAttached > 2 ) return null;
}switch (nAttached) {
case 1:
if (atomicNumber == 1 && !isSp3 ) return null;
if (isSp3) {
hybridization="sp3";
break;
}switch (attached[0].getCovalentBondCount$()) {
case 1:
if (attached[0].getValence$() != 2) {
hybridization="sp";
break;
}case 2:
hybridization=(isSp ? "sp" : "sp2");
break;
case 3:
if (!isSp2 && !isP ) return null;
hybridization="sp2";
break;
}
break;
case 2:
if (z.length$() < 0.1 ) {
if (lcaoType.indexOf$S("2") >= 0 || lcaoType.indexOf$S("3") >= 0 ) return null;
hybridization="sp";
break;
}hybridization=(isSp3 ? "sp3" : "sp2");
if (lcaoType.indexOf$S("sp") == 0) {
break;
}if (isLp) {
hybridization="lp";
break;
}hybridization=lcaoType;
break;
default:
if (isPlanar) {
hybridization="sp2";
} else {
if (isLp && nAttached == 3 ) {
hybridization="lp";
break;
}hybridization="sp3";
}}
if (hybridization == null ) return null;
if (lcaoType.indexOf$S("p") == 0) {
if (hybridization === "sp3" ) return null;
} else if (lcaoType.indexOf$S(hybridization) < 0) {
return null;
}}if (pt < nAttached && !lcaoType.startsWith$S("p")  && !lcaoType.startsWith$S("l") ) {
z.sub2$javajs_util_T3$javajs_util_T3(attached[pt], atom);
z.normalize$();
return hybridization;
}switch (nAttached) {
case 0:
if (lcaoType.equals$O("sp3c") || lcaoType.equals$O("sp2d") || lcaoType.equals$O("lpa")  ) {
z.set$F$F$F(-0.5, -0.7, 1);
x.set$F$F$F(1, 0, 0);
} else if (lcaoType.equals$O("sp3b") || lcaoType.equals$O("lpb") ) {
z.set$F$F$F(0.5, -0.7, -1.0);
x.set$F$F$F(1, 0, 0);
} else if (lcaoType.equals$O("sp3a")) {
z.set$F$F$F(0, 1, 0);
x.set$F$F$F(1, 0, 0);
} else {
z.set$F$F$F(0, 0, 1);
x.set$F$F$F(1, 0, 0);
}break;
case 1:
vTemp.setT$javajs_util_T3(C$.vRef);
x.cross$javajs_util_T3$javajs_util_T3(vTemp, z);
if (isSp3) {
for (var i=attached[0].getBondCount$(); --i >= 0; ) {
if (attached[0].bonds[i].isCovalent$() && attached[0].getBondedAtomIndex$I(i) != atom.i ) {
x.sub2$javajs_util_T3$javajs_util_T3(attached[0], attached[0].bonds[i].getOtherAtom$org_jmol_modelset_Atom(attached[0]));
x.cross$javajs_util_T3$javajs_util_T3(z, x);
if (x.length$() == 0 ) continue;
x.cross$javajs_util_T3$javajs_util_T3(x, z);
break;
}}
x.normalize$();
if (Float.isNaN$F(x.x)) {
x.setT$javajs_util_T3(C$.vRef);
x.cross$javajs_util_T3$javajs_util_T3(x, z);
}vTemp.cross$javajs_util_T3$javajs_util_T3(z, x);
vTemp.normalize$();
z.normalize$();
x.scaleAdd2$F$javajs_util_T3$javajs_util_T3(2.828, x, z);
if (pt != 3) {
x.normalize$();
Clazz.new_($I$(19,1)).setAA$javajs_util_A4($I$(20,"new4$F$F$F$F",[z.x, z.y, z.z, (pt == 2 ? 1 : -1) * 2.0943952])).rotate$javajs_util_T3(x);
}z.setT$javajs_util_T3(x);
x.cross$javajs_util_T3$javajs_util_T3(vTemp, z);
break;
}vTemp.cross$javajs_util_T3$javajs_util_T3(x, z);
switch (attached[0].getCovalentBondCount$()) {
case 1:
if (attached[0].getValence$() != 2) {
break;
}case 2:
var isCumulated=false;
var a0=attached[0];
x.setT$javajs_util_T3(z);
vTemp.setT$javajs_util_T3(C$.vRef);
while (a0 != null  && a0.getCovalentBondCount$() == 2 ){
var bonds=a0.bonds;
var a=null;
isCumulated=!isCumulated;
for (var i=0; i < bonds.length; i++) if (bonds[i].isCovalent$()) {
a=bonds[i].getOtherAtom$org_jmol_modelset_Atom(a0);
if (a !== atom ) {
vTemp.sub2$javajs_util_T3$javajs_util_T3(a, a0);
break;
}}
vTemp.cross$javajs_util_T3$javajs_util_T3(vTemp, x);
if (vTemp.length$() > 0.1  || a.getCovalentBondCount$() != 2 ) break;
atom=a0;
a0=a;
}
if (vTemp.length$() > 0.1 ) {
z.cross$javajs_util_T3$javajs_util_T3(vTemp, x);
z.normalize$();
if (pt == 1) z.scale$F(-1);
z.scale$F(C$.sqrt3_2);
z.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.5, x, z);
if (isP) {
vTemp.cross$javajs_util_T3$javajs_util_T3(z, x);
z.setT$javajs_util_T3(vTemp);
vTemp.setT$javajs_util_T3(x);
}x.cross$javajs_util_T3$javajs_util_T3(vTemp, z);
} else {
z.setT$javajs_util_T3(x);
x.cross$javajs_util_T3$javajs_util_T3(C$.vRef, x);
}break;
case 3:
this.getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z(attached[0].i, 0, x, vTemp, "pz", false, doAlignZ);
vTemp.setT$javajs_util_T3(x);
if (isSp2) {
x.cross$javajs_util_T3$javajs_util_T3(x, z);
if (pt == 1) x.scale$F(-1);
x.scale$F(C$.sqrt3_2);
z.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.5, z, x);
} else {
vTemp.setT$javajs_util_T3(z);
z.setT$javajs_util_T3(x);
}x.cross$javajs_util_T3$javajs_util_T3(vTemp, z);
break;
}
break;
case 2:
if (z.length$() < 0.1 ) {
if (!lcaoType.equals$O("pz")) {
var a=attached[0];
var ok=(a.getCovalentBondCount$() == 3);
if (!ok) ok=((a=attached[1]).getCovalentBondCount$() == 3);
if (ok) {
this.getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z(a.i, 0, x, z, "pz", false, doAlignZ);
if (lcaoType.equals$O("px")) x.scale$F(-1);
z.setT$javajs_util_T3(v[0]);
break;
}vTemp.setT$javajs_util_T3(C$.vRef);
z.cross$javajs_util_T3$javajs_util_T3(vTemp, x);
vTemp.cross$javajs_util_T3$javajs_util_T3(z, x);
}z.setT$javajs_util_T3(x);
x.cross$javajs_util_T3$javajs_util_T3(vTemp, z);
break;
}vTemp.cross$javajs_util_T3$javajs_util_T3(z, x);
if (isSp2) {
x.cross$javajs_util_T3$javajs_util_T3(z, vTemp);
break;
}if (isSp3 || isLp ) {
vTemp.normalize$();
z.normalize$();
if (!lcaoType.equals$O("lp")) {
if (pt == 0 || pt == 2 ) z.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-1.2, vTemp, z);
 else z.scaleAdd2$F$javajs_util_T3$javajs_util_T3(1.2, vTemp, z);
}x.cross$javajs_util_T3$javajs_util_T3(z, vTemp);
break;
}x.cross$javajs_util_T3$javajs_util_T3(z, vTemp);
z.setT$javajs_util_T3(vTemp);
if (z.z < 0 ) {
z.scale$F(-1);
x.scale$F(-1);
}break;
default:
if (isSp3) break;
if (!isPlanar) {
x.cross$javajs_util_T3$javajs_util_T3(z, x);
break;
}z.setT$javajs_util_T3(vTemp);
if (z.z < 0  && doAlignZ ) {
z.scale$F(-1);
x.scale$F(-1);
}}
x.normalize$();
z.normalize$();
return hybridization;
});

Clazz.newMeth(C$, 'getHybridizationAndAxesD$I$javajs_util_V3$javajs_util_V3$S', function (atomIndex, z, x, lcaoType) {
if (lcaoType.startsWith$S("sp3d2")) lcaoType="d2sp3" + (lcaoType.length$() == 5 ? "a" : lcaoType.substring$I(5));
if (lcaoType.startsWith$S("sp3d")) lcaoType="dsp3" + (lcaoType.length$() == 4 ? "a" : lcaoType.substring$I(4));
if (lcaoType.equals$O("d2sp3") || lcaoType.equals$O("dsp3") ) lcaoType += "a";
var isTrigonal=lcaoType.startsWith$S("dsp3");
var pt=(lcaoType.charCodeAt$I(lcaoType.length$() - 1)) - 97;
if (z != null  && (!isTrigonal && (pt > 5 || !lcaoType.startsWith$S("d2sp3") )  || isTrigonal && pt > 4  ) ) return null;
var atom=this.at[atomIndex];
var attached=p$1.getAttached$org_jmol_modelset_Atom$I$Z.apply(this, [atom, 6, true]);
if (attached == null ) return (z == null  ? null : "?");
var nAttached=attached.length;
if (nAttached < 3 && z != null  ) return null;
var isLP=(pt >= nAttached);
var nAngles=(nAttached * (nAttached - 1)/2|0);
var angles=$I$(12).newInt2$I(nAngles);
var ntypes=Clazz.array(Integer.TYPE, [3]);
var typePtrs=Clazz.array(Integer.TYPE, [3, nAngles]);
var n=0;
var _90=0;
var _120=1;
var _180=2;
var n120_atom0=0;
for (var i=0; i < nAttached - 1; i++) for (var j=i + 1; j < nAttached; j++) {
var angle=$I$(21).computeAngleABC$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(attached[i], atom, attached[j], true);
var itype=(angle < 105  ? _90 : angle >= 150  ? _180 : _120);
typePtrs[itype][ntypes[itype]]=n;
ntypes[itype]++;
angles[n++]=Clazz.array(Integer.TYPE, -1, [i, j]);
if (i == 0 && itype == _120 ) n120_atom0++;
}

n=ntypes[_90] * 100 + ntypes[_120] * 10 + ntypes[_180];
if (z == null ) {
switch (n) {
default:
return "";
case 0:
return "";
case 1:
return "linear";
case 100:
case 10:
return "bent";
case 111:
case 201:
return "T-shaped";
case 30:
case 120:
case 210:
case 300:
if (Math.abs($I$(21).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(attached[0], atom, attached[1], attached[2], true)) > 162 ) return "trigonal planar";
return "trigonal pyramidal";
case 330:
return (n120_atom0 % 2 == 1 ? "tetrahedral" : "uncapped trigonal pyramid");
case 60:
case 150:
case 240:
return "tetrahedral";
case 402:
return "square planar";
case 411:
case 501:
return "see-saw";
case 631:
return "trigonal bipyramidal";
case 802:
return "uncapped square pyramid";
case 1203:
return "octahedral";
}
}switch (n) {
default:
return null;
case 201:
break;
case 210:
case 330:
case 411:
case 631:
if (!isTrigonal) return null;
break;
case 300:
case 402:
case 501:
case 802:
case 1203:
if (isTrigonal) return null;
break;
}
if (isLP) {
var a;
var bs;
if (isTrigonal) {
switch (ntypes[_120]) {
case 0:
z.sub2$javajs_util_T3$javajs_util_T3(attached[angles[typePtrs[_90][0]][0]], atom);
x.sub2$javajs_util_T3$javajs_util_T3(attached[angles[typePtrs[_90][0]][1]], atom);
z.cross$javajs_util_T3$javajs_util_T3(z, x);
z.normalize$();
if (pt == 4) z.scale$F(-1);
bs=p$1.findNotAttached$I$IAA$IA$I.apply(this, [nAttached, angles, typePtrs[_180], ntypes[_180]]);
var i=bs.nextSetBit$I(0);
x.sub2$javajs_util_T3$javajs_util_T3(attached[i], atom);
x.normalize$();
x.scale$F(0.5);
z.scaleAdd2$F$javajs_util_T3$javajs_util_T3(C$.sqrt3_2, z, x);
pt=-1;
break;
case 1:
if (pt == 4) {
a=angles[typePtrs[_120][0]];
z.add2$javajs_util_T3$javajs_util_T3(attached[a[0]], attached[a[1]]);
z.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-2, atom, z);
pt=-1;
} else {
bs=p$1.findNotAttached$I$IAA$IA$I.apply(this, [nAttached, angles, typePtrs[_120], ntypes[_120]]);
pt=bs.nextSetBit$I(0);
}break;
default:
bs=p$1.findNotAttached$I$IAA$IA$I.apply(this, [nAttached, angles, typePtrs[_120], ntypes[_120]]);
pt=bs.nextSetBit$I(0);
}
} else {
var isPlanar=false;
if (nAttached == 4) {
switch (ntypes[_180]) {
case 1:
bs=p$1.findNotAttached$I$IAA$IA$I.apply(this, [nAttached, angles, typePtrs[_180], ntypes[_180]]);
var i=bs.nextSetBit$I(0);
if (pt == 4) pt=i;
 else pt=bs.nextSetBit$I(i + 1);
break;
default:
isPlanar=true;
}
} else {
bs=p$1.findNotAttached$I$IAA$IA$I.apply(this, [nAttached, angles, typePtrs[_180], ntypes[_180]]);
var i=bs.nextSetBit$I(0);
for (var j=nAttached; j < pt && i >= 0 ; j++) i=bs.nextSetBit$I(i + 1);

if (i == -1) isPlanar=true;
 else pt=i;
}if (isPlanar) {
z.sub2$javajs_util_T3$javajs_util_T3(attached[angles[typePtrs[_90][0]][0]], atom);
x.sub2$javajs_util_T3$javajs_util_T3(attached[angles[typePtrs[_90][0]][1]], atom);
z.cross$javajs_util_T3$javajs_util_T3(z, x);
if (pt == 4) z.scale$F(-1);
pt=-1;
}}}if (pt >= 0) z.sub2$javajs_util_T3$javajs_util_T3(attached[pt], atom);
if (isLP) z.scale$F(-1);
z.normalize$();
return (isTrigonal ? "dsp3" : "d2sp3");
}, p$1);

Clazz.newMeth(C$, 'getAttached$org_jmol_modelset_Atom$I$Z', function (atom, nMax, doSort) {
var nAttached=atom.getCovalentBondCount$();
if (nAttached > nMax) return null;
var attached=Clazz.array($I$(22), [nAttached]);
if (nAttached > 0) {
var bonds=atom.bonds;
var n=0;
for (var i=0; i < bonds.length; i++) if (bonds[i].isCovalent$()) attached[n++]=bonds[i].getOtherAtom$org_jmol_modelset_Atom(atom);

if (doSort) $I$(23,"sort$OA$java_util_Comparator",[attached, Clazz.new_($I$(24,1),[this, null])]);
}return attached;
}, p$1);

Clazz.newMeth(C$, 'findNotAttached$I$IAA$IA$I', function (nAttached, angles, ptrs, nPtrs) {
var bs=$I$(2).newN$I(nAttached);
bs.setBits$I$I(0, nAttached);
for (var i=0; i < nAttached; i++) for (var j=0; j < nPtrs; j++) {
var a=angles[ptrs[j]];
if (a[0] == i || a[1] == i ) bs.clear$I(i);
}

return bs;
}, p$1);

Clazz.newMeth(C$, 'getAtomBitsMDa$I$O$javajs_util_BS', function (tokType, specInfo, bs) {
var iSpec=(Clazz.instanceOf(specInfo, "java.lang.Integer") ? (specInfo).intValue$() : 0);
switch (tokType) {
case 1086326786:
case 1086326785:
var isType=(tokType == 1086326785);
var names="," + specInfo + "," ;
for (var i=this.ac; --i >= 0; ) {
var s=(isType ? this.at[i].getAtomType$() : this.at[i].getAtomName$());
if (names.indexOf$S("," + s + "," ) >= 0) bs.set$I(i);
}
return bs;
case 1094715393:
for (var i=this.ac; --i >= 0; ) if (this.at[i].getAtomNumber$() == iSpec) bs.set$I(i);

return bs;
case 2097155:
for (var i=this.ac; --i >= 0; ) if (this.at[i].getCovalentBondCount$() > 0) bs.set$I(i);

return bs;
case 2097188:
case 2097156:
case 136314895:
case 2097166:
case 2097168:
case 2097170:
case 2097172:
case 2097174:
case 2097184:
return ((this).haveBioModels ? (this).bioModelset.getAtomBitsBS$I$javajs_util_BS$javajs_util_BS(tokType, null, bs) : bs);
case 1612709900:
iSpec=1;
case 1094715402:
for (var i=this.ac; --i >= 0; ) if (this.at[i].getElementNumber$() == iSpec) bs.set$I(i);

return bs;
case 1612709894:
for (var i=this.ac; --i >= 0; ) if (this.at[i].isHetero$()) bs.set$I(i);

return bs;
case 1073741824:
return p$1.getIdentifierOrNull$S.apply(this, [specInfo]);
case 2097165:
for (var i=this.ac; --i >= 0; ) if (this.at[i].isLeadAtom$()) bs.set$I(i);

return bs;
case 1094713362:
case 1639976963:
return ((this).haveBioModels ? (this).bioModelset.getAtomBitsBS$I$javajs_util_BS$javajs_util_BS(tokType, specInfo, bs) : bs);
case 1094715412:
for (var i=this.ac; --i >= 0; ) if (this.at[i].getResno$() == iSpec) bs.set$I(i);

return bs;
case 1612709912:
var hs=Clazz.array(Integer.TYPE, [2]);
var a;
for (var i=this.ac; --i >= 0; ) {
var g=this.at[i].group.groupID;
if (g >= 42 && g < 45 ) {
bs.set$I(i);
} else if ((a=this.at[i]).getElementNumber$() == 8 && a.getCovalentBondCount$() == 2 ) {
var bonds=a.bonds;
var n=0;
var b;
for (var j=bonds.length; --j >= 0 && n < 3 ; ) if (bonds[j].isCovalent$() && (b=bonds[j].getOtherAtom$org_jmol_modelset_Atom(a)).getElementNumber$() == 1 ) hs[n++ % 2]=b.i;

if (n == 2) {
bs.set$I(hs[1]);
bs.set$I(hs[0]);
bs.set$I(i);
}}}
return bs;
case 1073742355:
var spec=specInfo;
for (var i=this.ac; --i >= 0; ) if (p$1.isAltLoc$C$S.apply(this, [this.at[i].altloc, spec])) bs.set$I(i);

return bs;
case 1073742356:
var atomSpec=(specInfo).toUpperCase$();
if (atomSpec.indexOf$S("\\?") >= 0) atomSpec=$I$(17).rep$S$S$S(atomSpec, "\\?", "\u0001");
var allowStar=atomSpec.startsWith$S("?*");
if (allowStar) atomSpec=atomSpec.substring$I(1);
for (var i=this.ac; --i >= 0; ) if (p$1.isAtomNameMatch$org_jmol_modelset_Atom$S$Z$Z.apply(this, [this.at[i], atomSpec, allowStar, allowStar])) bs.set$I(i);

return bs;
case 1073742357:
return $I$(9,"copy$javajs_util_BS",[this.getChainBits$I(iSpec)]);
case 1073742360:
return p$1.getSpecName$S.apply(this, [specInfo]);
case 1073742361:
for (var i=this.ac; --i >= 0; ) if (this.at[i].group.groupID == iSpec) bs.set$I(i);

return bs;
case 1073742362:
return $I$(9,"copy$javajs_util_BS",[this.getSeqcodeBits$I$Z(iSpec, true)]);
case 5:
for (var i=this.ac; --i >= 0; ) if (this.at[i].group.getInsCode$() == iSpec) bs.set$I(i);

return bs;
case 1296041986:
for (var i=this.ac; --i >= 0; ) if (this.at[i].getSymOp$() == iSpec) bs.set$I(i);

return bs;
}
var bsTemp;
var bsInfo=specInfo;
var i0=bsInfo.nextSetBit$I(0);
if (i0 < 0) return bs;
switch (tokType) {
case 1094717454:
bsTemp=$I$(9).copy$javajs_util_BS(bsInfo);
for (var i=i0; i >= 0; i=bsTemp.nextSetBit$I(i + 1)) {
bs.or$javajs_util_BS((this).am[this.at[i].mi].bsAtoms);
bsTemp.andNot$javajs_util_BS(bs);
}
return bs;
case 1086326788:
bsTemp=$I$(9).copy$javajs_util_BS(bsInfo);
for (var i=i0; i >= 0; i=bsTemp.nextSetBit$I(i + 1)) {
this.at[i].group.chain.setAtomBits$javajs_util_BS(bs);
bsTemp.andNot$javajs_util_BS(bs);
}
return bs;
case 1086326789:
bsTemp=Clazz.new_($I$(2,1));
for (var i=i0; i >= 0; i=bsInfo.nextSetBit$I(i + 1)) bsTemp.set$I(this.at[i].getElementNumber$());

for (var i=this.ac; --i >= 0; ) if (bsTemp.get$I(this.at[i].getElementNumber$())) bs.set$I(i);

return bs;
case 1086324742:
bsTemp=$I$(9).copy$javajs_util_BS(bsInfo);
for (var i=i0; i >= 0; i=bsTemp.nextSetBit$I(i + 1)) {
this.at[i].group.setAtomBits$javajs_util_BS(bs);
bsTemp.andNot$javajs_util_BS(bs);
}
return bs;
case 1094713366:
bsTemp=Clazz.new_($I$(2,1));
for (var i=i0; i >= 0; i=bsInfo.nextSetBit$I(i + 1)) bsTemp.set$I(this.at[i].atomSite);

for (var i=this.ac; --i >= 0; ) if (bsTemp.get$I(this.at[i].atomSite)) bs.set$I(i);

return bs;
}
$I$(10,"error$S",["MISSING getAtomBits entry for " + $I$(13).nameOf$I(tokType)]);
return bs;
});

Clazz.newMeth(C$, 'getChainBits$I', function (chainID) {
var caseSensitive=this.vwr.getBoolean$I(603979822);
if (chainID >= 0 && chainID < 300  && !caseSensitive ) chainID=this.chainToUpper$I(chainID);
var bs=Clazz.new_($I$(2,1));
var bsDone=$I$(2).newN$I(this.ac);
var id;
for (var i=bsDone.nextClearBit$I(0); i < this.ac; i=bsDone.nextClearBit$I(i + 1)) {
var chain=this.at[i].group.chain;
if (chainID == (id=chain.chainID) || !caseSensitive && id >= 0  && id < 300  && chainID == this.chainToUpper$I(id)  ) {
chain.setAtomBits$javajs_util_BS(bs);
bsDone.or$javajs_util_BS(bs);
} else {
chain.setAtomBits$javajs_util_BS(bsDone);
}}
return bs;
});

Clazz.newMeth(C$, 'chainToUpper$I', function (chainID) {
return (chainID >= 97 && chainID <= 122  ? chainID - 32 : chainID >= 256 && chainID < 300  ? chainID - 191 : chainID);
});

Clazz.newMeth(C$, 'isAltLoc$C$S', function (altloc, strPattern) {
if (strPattern == null ) return (altloc == "\u0000");
if (strPattern.length$() != 1) return false;
var ch=strPattern.charAt$I(0);
return (ch == "*" || ch == "?" && altloc != "\u0000"   || altloc == ch );
}, p$1);

Clazz.newMeth(C$, 'getSeqcodeBits$I$Z', function (seqcode, returnEmpty) {
var bs=Clazz.new_($I$(2,1));
var seqNum=$I$(25).getSeqNumberFor$I(seqcode);
var haveSeqNumber=(seqNum != 2147483647);
var isEmpty=true;
var insCode=$I$(25).getInsertionCodeChar$I(seqcode);
switch (insCode.$c()) {
case 63:
for (var i=this.ac; --i >= 0; ) {
var atomSeqcode=this.at[i].group.seqcode;
if ((!haveSeqNumber || seqNum == $I$(25).getSeqNumberFor$I(atomSeqcode) ) && $I$(25).getInsertionCodeFor$I(atomSeqcode) != 0 ) {
bs.set$I(i);
isEmpty=false;
}}
break;
default:
for (var i=this.ac; --i >= 0; ) {
var atomSeqcode=this.at[i].group.seqcode;
if (seqcode == atomSeqcode || !haveSeqNumber && seqcode == $I$(25).getInsertionCodeFor$I(atomSeqcode)   || insCode == "*" && seqNum == $I$(25).getSeqNumberFor$I(atomSeqcode)  ) {
bs.set$I(i);
isEmpty=false;
}}
}
return (!isEmpty || returnEmpty  ? bs : null);
});

Clazz.newMeth(C$, 'getIdentifierOrNull$S', function (identifier) {
var bs=this.getSpecNameOrNull$S$Z(identifier, false);
if (identifier.indexOf$S("\\?") >= 0) identifier=$I$(17).rep$S$S$S(identifier, "\\?", "\u0001");
return (bs != null  || identifier.indexOf$S("?") > 0  ? bs : identifier.indexOf$S("*") > 0 ? this.getSpecNameOrNull$S$Z(identifier, true) : (this).haveBioModels ? (this).bioModelset.getIdentifierOrNull$S(identifier) : null);
}, p$1);

Clazz.newMeth(C$, 'getSpecName$S', function (name) {
var bs=this.getSpecNameOrNull$S$Z(name, false);
if (bs != null ) return bs;
if (name.indexOf$S("*") > 0) bs=this.getSpecNameOrNull$S$Z(name, true);
return (bs == null  ? Clazz.new_($I$(2,1)) : bs);
}, p$1);

Clazz.newMeth(C$, 'getSpecNameOrNull$S$Z', function (name, checkStar) {
var bs=null;
name=name.toUpperCase$();
if (name.indexOf$S("\\?") >= 0) name=$I$(17).rep$S$S$S(name, "\\?", "\u0001");
var allowInitialStar=name.startsWith$S("?*");
if (allowInitialStar) name=name.substring$I(1);
for (var i=this.ac; --i >= 0; ) {
var g3=this.at[i].getGroup3$Z(true);
if (g3 != null  && g3.length$() > 0 ) {
if ($I$(17).isMatch$S$S$Z$Z(g3, name, checkStar, true)) {
if (bs == null ) bs=$I$(2).newN$I(i + 1);
bs.set$I(i);
while (--i >= 0 && this.at[i].getGroup3$Z(true).equals$O(g3) )bs.set$I(i);

i++;
}} else if (p$1.isAtomNameMatch$org_jmol_modelset_Atom$S$Z$Z.apply(this, [this.at[i], name, checkStar, allowInitialStar])) {
if (bs == null ) bs=$I$(2).newN$I(i + 1);
bs.set$I(i);
}}
return bs;
});

Clazz.newMeth(C$, 'isAtomNameMatch$org_jmol_modelset_Atom$S$Z$Z', function (atom, strPattern, checkStar, allowInitialStar) {
return $I$(17,"isMatch$S$S$Z$Z",[atom.getAtomName$().toUpperCase$(), strPattern, checkStar, allowInitialStar]);
}, p$1);

Clazz.newMeth(C$, 'getAtomIndices$javajs_util_BS', function (bs) {
var n=0;
var indices=Clazz.array(Integer.TYPE, [this.ac]);
for (var j=bs.nextSetBit$I(0); j >= 0 && j < this.ac ; j=bs.nextSetBit$I(j + 1)) indices[j]=++n;

return indices;
});

Clazz.newMeth(C$, 'getAtomsNearPlane$F$javajs_util_P4', function (distance, plane) {
var bsResult=Clazz.new_($I$(2,1));
for (var i=this.ac; --i >= 0; ) {
var atom=this.at[i];
var d=$I$(21).distanceToPlane$javajs_util_P4$javajs_util_T3(plane, atom);
if (distance > 0  && d >= -0.1   && d <= distance   || distance < 0  && d <= 0.1   && d >= distance    || distance == 0  && Math.abs(d) < 0.01   ) bsResult.set$I(atom.i);
}
return bsResult;
});

Clazz.newMeth(C$, 'clearVisibleSets$', function () {
this.haveBSVisible=false;
this.haveBSClickable=false;
});

Clazz.newMeth(C$, 'getAtomsInFrame$javajs_util_BS', function (bsAtoms) {
this.clearVisibleSets$();
bsAtoms.clearAll$();
for (var i=this.ac; --i >= 0; ) if (this.at[i].isVisible$I(1)) bsAtoms.set$I(i);

});

Clazz.newMeth(C$, 'getVisibleSet$Z', function (forceNew) {
if (forceNew) {
this.vwr.setModelVisibility$();
this.vwr.shm.finalizeAtoms$javajs_util_BS$Z(null, true);
} else if (this.haveBSVisible) {
return this.bsVisible;
}this.bsVisible.clearAll$();
for (var i=this.ac; --i >= 0; ) if (this.at[i].checkVisible$()) this.bsVisible.set$I(i);

if (this.vwr.shm.bsSlabbedInternal != null ) this.bsVisible.andNot$javajs_util_BS(this.vwr.shm.bsSlabbedInternal);
this.haveBSVisible=true;
return this.bsVisible;
});

Clazz.newMeth(C$, 'getClickableSet$Z', function (forceNew) {
if (forceNew) this.vwr.setModelVisibility$();
 else if (this.haveBSClickable) return this.bsClickable;
this.bsClickable.clearAll$();
for (var i=this.ac; --i >= 0; ) if (this.at[i].isClickable$()) this.bsClickable.set$I(i);

this.haveBSClickable=true;
return this.bsClickable;
});

Clazz.newMeth(C$, 'isModulated$I', function (i) {
return this.bsModulated != null  && this.bsModulated.get$I(i) ;
});

Clazz.newMeth(C$, 'deleteModelAtoms$I$I$javajs_util_BS', function (firstAtomIndex, nAtoms, bsAtoms) {
this.at=$I$(12).deleteElements$O$I$I(this.at, firstAtomIndex, nAtoms);
this.ac=this.at.length;
for (var j=firstAtomIndex; j < this.ac; j++) {
this.at[j].i=j;
($s$[0]=this.at[j].mi,this.at[j].mi=(--$s$[0],$s$[0]));
}
if (this.bsModulated != null ) $I$(9).deleteBits$javajs_util_BS$javajs_util_BS(this.bsModulated, bsAtoms);
p$1.deleteAtomTensors$javajs_util_BS.apply(this, [bsAtoms]);
this.atomNames=$I$(12).deleteElements$O$I$I(this.atomNames, firstAtomIndex, nAtoms);
this.atomTypes=$I$(12).deleteElements$O$I$I(this.atomTypes, firstAtomIndex, nAtoms);
this.atomResnos=$I$(12).deleteElements$O$I$I(this.atomResnos, firstAtomIndex, nAtoms);
this.atomSerials=$I$(12).deleteElements$O$I$I(this.atomSerials, firstAtomIndex, nAtoms);
this.atomSeqIDs=$I$(12).deleteElements$O$I$I(this.atomSeqIDs, firstAtomIndex, nAtoms);
this.dssrData=$I$(12).deleteElements$O$I$I(this.dssrData, firstAtomIndex, nAtoms);
this.bfactor100s=$I$(12).deleteElements$O$I$I(this.bfactor100s, firstAtomIndex, nAtoms);
this.hasBfactorRange=false;
this.occupancies=$I$(12).deleteElements$O$I$I(this.occupancies, firstAtomIndex, nAtoms);
p$1.resetPartialCharges.apply(this, []);
this.atomTensorList=$I$(12).deleteElements$O$I$I(this.atomTensorList, firstAtomIndex, nAtoms);
this.vibrations=$I$(12).deleteElements$O$I$I(this.vibrations, firstAtomIndex, nAtoms);
this.nSurfaceAtoms=0;
this.bsSurface=null;
this.surfaceDistance100s=null;
if (this.tainted != null ) for (var i=0; i < 17; i++) $I$(9).deleteBits$javajs_util_BS$javajs_util_BS(this.tainted[i], bsAtoms);

});

Clazz.newMeth(C$, 'getAtomIdentityInfo$I$java_util_Map$javajs_util_P3', function (i, info, ptTemp) {
info.put$O$O("_ipt", Integer.valueOf$I(i));
info.put$O$O("atomIndex", Integer.valueOf$I(i));
info.put$O$O("atomno", Integer.valueOf$I(this.at[i].getAtomNumber$()));
info.put$O$O("info", this.getAtomInfo$I$S$javajs_util_P3(i, null, ptTemp));
info.put$O$O("sym", this.at[i].getElementSymbol$());
});

Clazz.newMeth(C$, 'getAtomTensorList$I', function (i) {
return (i < 0 || this.atomTensorList == null   || i >= this.atomTensorList.length  ? null : this.atomTensorList[i]);
});

Clazz.newMeth(C$, 'deleteAtomTensors$javajs_util_BS', function (bsAtoms) {
if (this.atomTensors == null ) return;
var toDelete=Clazz.new_($I$(3,1));
for (var key, $key = this.atomTensors.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var list=this.atomTensors.get$O(key);
for (var i=list.size$(); --i >= 0; ) {
var t=list.get$I(i);
if (bsAtoms.get$I(t.atomIndex1) || t.atomIndex2 >= 0 && bsAtoms.get$I(t.atomIndex2)  ) list.removeItemAt$I(i);
}
if (list.size$() == 0) toDelete.addLast$O(key);
}
for (var i=toDelete.size$(); --i >= 0; ) this.atomTensors.remove$O(toDelete.get$I(i));

}, p$1);

Clazz.newMeth(C$, 'setCapacity$I', function (nAtoms) {
this.atomCapacity+=nAtoms;
});

Clazz.newMeth(C$, 'setAtomTensors$I$javajs_util_Lst', function (atomIndex, list) {
if (list == null  || list.size$() == 0 ) return;
if (this.atomTensors == null ) this.atomTensors=Clazz.new_($I$(26,1));
if (this.atomTensorList == null ) this.atomTensorList=Clazz.array(java.lang.Object, [this.at.length, null]);
this.atomTensorList=$I$(12).ensureLength$O$I(this.atomTensorList, this.at.length);
this.atomTensorList[atomIndex]=C$.getTensorList$javajs_util_Lst(list);
for (var i=list.size$(); --i >= 0; ) {
var t=list.get$I(i);
t.atomIndex1=atomIndex;
t.atomIndex2=-1;
t.modelIndex=this.at[atomIndex].mi;
this.addTensor$org_jmol_util_Tensor$S(t, t.type);
if (t.altType != null ) this.addTensor$org_jmol_util_Tensor$S(t, t.altType);
}
});

Clazz.newMeth(C$, 'addTensor$org_jmol_util_Tensor$S', function (t, type) {
type=type.toLowerCase$();
var tensors=this.atomTensors.get$O(type);
if (tensors == null ) {
this.atomTensors.put$O$O(type, tensors=Clazz.new_($I$(3,1)));
tensors.ensureCapacity$I(this.atomCapacity);
}tensors.addLast$O(t);
});

Clazz.newMeth(C$, 'getTensorList$javajs_util_Lst', function (list) {
var pt=-1;
var haveTLS=false;
var n=list.size$();
for (var i=n; --i >= 0; ) {
var t=list.get$I(i);
if (t.forThermalEllipsoid) pt=i;
 else if (t.iType == 2) haveTLS=true;
}
var a=Clazz.array(java.lang.Object, [(pt >= 0 || !haveTLS  ? 0 : 1) + n]);
if (pt >= 0) {
a[0]=list.get$I(pt);
if (list.size$() == 1) return a;
}if (haveTLS) {
pt=0;
for (var i=n; --i >= 0; ) {
var t=list.get$I(i);
if (t.forThermalEllipsoid) continue;
a[++pt]=t;
}
} else {
for (var i=0; i < n; i++) a[i]=list.get$I(i);

}return a;
}, 1);

Clazz.newMeth(C$, 'getAtomTensor$I$S', function (i, type) {
var tensors=this.getAtomTensorList$I(i);
if (tensors != null  && type != null  ) {
type=type.toLowerCase$();
for (var j=0; j < tensors.length; j++) {
var t=tensors[j];
if (t != null  && (type.equals$O(t.type) || type.equals$O(t.altType) ) ) return t;
}
}return null;
});

Clazz.newMeth(C$, 'getAllAtomTensors$S', function (type) {
if (this.atomTensors == null ) return null;
if (type != null ) return this.atomTensors.get$O(type.toLowerCase$());
var list=Clazz.new_($I$(3,1));
for (var e, $e = this.atomTensors.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) list.addAll$java_util_Collection(e.getValue$());

return list;
});

Clazz.newMeth(C$, 'scaleVectorsToMax$F', function (max) {
if (this.vibrations == null ) return;
var m=0;
var bsVib=$I$(2).newN$I(this.ac);
for (var i=this.vibrations.length; --i >= 0; ) {
var v=this.getVibration$I$Z(i, false);
if (v != null  && (v.modDim == -1 || v.modDim == -2 ) ) {
m=Math.max(m, v.length$());
bsVib.set$I(i);
}}
if (m == max  || m == 0  ) return;
m=max / m;
var ok=false;
for (var i=bsVib.nextSetBit$I(0); i >= 0; i=bsVib.nextSetBit$I(i + 1)) {
var v=this.getVibration$I$Z(i, false);
var mod=this.getModulation$I(i);
if (mod == null ) {
if (m == 0 ) return;
v.scale$F(m);
} else {
mod.scaleVibration$F(m);
}if (!ok) {
this.taintAtom$I$I(i, 12);
ok=true;
}}
this.tainted[12].or$javajs_util_BS(bsVib);
});

Clazz.newMeth(C$, 'getAtomsFromAtomNumberInFrame$I', function (atomNumber) {
var bs=this.vwr.getFrameAtoms$();
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) if (this.at[i].getAtomNumber$() != atomNumber) bs.clear$I(i);

return bs;
});

Clazz.newMeth(C$, 'generateCrystalClass$I$javajs_util_P3', function (atomIndex, pt) {
var sym=(atomIndex < 0 || atomIndex >= this.ac  ? null : this.at[atomIndex].getUnitCell$());
var isRandom=(pt != null  && Float.isNaN$F(pt.x) );
return (sym == null  ? Clazz.new_($I$(3,1)) : sym.generateCrystalClass$javajs_util_P3(isRandom ? null : pt != null  ? pt : this.at[atomIndex]));
});

C$.$static$=function(){C$.$static$=0;
C$.sqrt3_2=(Math.sqrt(3) / 2);
C$.vRef=$I$(1).new3$F$F$F(3.14159, 2.71828, 1.41421);
};
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AtomCollection, "AtomSorter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$org_jmol_modelset_Atom$org_jmol_modelset_Atom','compare$O$O'], function (a1, a2) {
return (a1.i > a2.i ? 1 : a1.i < a2.i ? -1 : 0);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:38 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
