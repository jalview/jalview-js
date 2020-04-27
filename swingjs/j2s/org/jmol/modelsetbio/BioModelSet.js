(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),p$1={},I$=[[0,'org.jmol.api.Interface','org.jmol.util.BSUtil','javajs.util.BS','org.jmol.modelsetbio.BioResolver','javajs.util.SB','java.util.Hashtable','org.jmol.c.STR','org.jmol.util.Logger','org.jmol.script.T','javajs.util.Lst','org.jmol.util.Escape','Boolean','javajs.util.PT','org.jmol.modelset.Group','javajs.util.AU','java.util.Map']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BioModelSet");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['vwr','org.jmol.viewer.Viewer','ms','org.jmol.modelset.ModelSet','ext','org.jmol.modelsetbio.BioExt','unitIdSets','java.util.Map[]']]]

Clazz.newMeth(C$, 'getBioExt$', function () {
return (this.ext == null  ? (this.ext=($I$(1).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.modelsetbio.BioExt", this.vwr, "script"))).set$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet(this.vwr, this.vwr.ms) : this.ext);
});

Clazz.newMeth(C$, 'set$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet', function (vwr, ms) {
this.vwr=vwr;
this.ms=ms;
this.unitIdSets=null;
if (this.ext != null ) this.ext.set$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet(vwr, ms);
return this;
});

Clazz.newMeth(C$, 'calcAllRasmolHydrogenBonds$javajs_util_BS$javajs_util_BS$javajs_util_Lst$Z$I$Z$javajs_util_BS$I', function (bsA, bsB, vHBonds, nucleicOnly, nMax, dsspIgnoreHydrogens, bsHBonds, dsspVersion) {
var am=this.ms.am;
if (vHBonds == null ) {
var bsAtoms=bsA;
if (bsB != null  && !bsA.equals$O(bsB) ) (bsAtoms=$I$(2).copy$javajs_util_BS(bsA)).or$javajs_util_BS(bsB);
var bsDelete=Clazz.new_($I$(3,1));
var bsOK=Clazz.new_($I$(3,1));
var models=this.ms.am;
var bonds=this.ms.bo;
for (var i=this.ms.bondCount; --i >= 0; ) {
var bond=bonds[i];
if ((bond.order & 28672) == 0) continue;
if (bsAtoms.get$I(bond.atom1.i)) bsDelete.set$I(i);
 else bsOK.set$I(models[bond.atom1.mi].trajectoryBaseIndex);
}
for (var i=this.ms.mc; --i >= 0; ) if (models[i].isBioModel) models[i].hasRasmolHBonds=bsOK.get$I(i);

if (bsDelete.nextSetBit$I(0) >= 0) this.ms.deleteBonds$javajs_util_BS$Z(bsDelete, false);
}for (var i=this.ms.mc; --i >= 0; ) if (am[i].isBioModel && !this.ms.isTrajectorySubFrame$I(i) ) (am[i]).getRasmolHydrogenBonds$javajs_util_BS$javajs_util_BS$javajs_util_Lst$Z$I$Z$javajs_util_BS$I(bsA, bsB, vHBonds, nucleicOnly, nMax, dsspIgnoreHydrogens, bsHBonds, dsspVersion);

});

Clazz.newMeth(C$, 'calcSelectedMonomersCount$', function () {
var bsSelected=this.vwr.bsA$();
for (var i=this.ms.mc; --i >= 0; ) if (this.ms.am[i].isBioModel) {
var m=this.ms.am[i];
for (var j=m.bioPolymerCount; --j >= 0; ) m.bioPolymers[j].calcSelectedMonomersCount$javajs_util_BS(bsSelected);

}
});

Clazz.newMeth(C$, 'calculateAllPolymers$org_jmol_modelset_GroupA$I$I$javajs_util_BS', function (groups, groupCount, baseGroupIndex, modelsExcluded) {
var checkConnections=!this.vwr.getBoolean$I(603979896);
if (groupCount < 0) groupCount=groups.length;
if (modelsExcluded != null ) for (var j=0; j < groupCount; ++j) {
var group=groups[j];
if (Clazz.instanceOf(group, "org.jmol.modelsetbio.Monomer")) {
if ((group).bioPolymer != null  && (!modelsExcluded.get$I(group.chain.model.modelIndex)) ) (group).setBioPolymer$org_jmol_modelsetbio_BioPolymer$I(null, -1);
}}
for (var i=0, mc=this.ms.mc; i < mc; i++) if ((modelsExcluded == null  || !modelsExcluded.get$I(i) ) && this.ms.am[i].isBioModel ) {
for (var pt=0, j=baseGroupIndex; j < groupCount; ++j, pt++) {
var g=groups[j];
var model=g.getModel$();
if (!model.isBioModel || !(Clazz.instanceOf(g, "org.jmol.modelsetbio.Monomer")) ) continue;
var doCheck=checkConnections && !this.ms.isJmolDataFrameForModel$I(this.ms.at[g.firstAtomIndex].mi) ;
var bp=((g).bioPolymer == null  ? $I$(4).allocateBioPolymer$org_jmol_modelset_GroupA$I$Z$I(groups, j, doCheck, pt) : null);
if (bp == null  || bp.monomerCount == 0 ) continue;
var n=(model).addBioPolymer$org_jmol_modelsetbio_BioPolymer(bp);
j+=n - 1;
pt+=n - 1;
}
}
});

Clazz.newMeth(C$, 'calculateAllStructuresExcept$javajs_util_BS$Z$Z$Z$Z$Z$I', function (alreadyDefined, asDSSP, doReport, dsspIgnoreHydrogen, setStructure, includeAlpha, version) {
var ret="";
var bsModels=$I$(2).copyInvert$javajs_util_BS$I(alreadyDefined, this.ms.mc);
if (setStructure) p$1.setAllDefaultStructure$javajs_util_BS.apply(this, [bsModels]);
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) if (this.ms.am[i].isBioModel) ret += (this.ms.am[i]).calculateStructures$Z$Z$Z$Z$Z$I(asDSSP, doReport, dsspIgnoreHydrogen, setStructure, includeAlpha, version);

if (setStructure) this.ms.setStructureIndexes$();
return ret;
});

Clazz.newMeth(C$, 'calculateAllStuctures$javajs_util_BS$Z$Z$Z$Z$I', function (bsAtoms, asDSSP, doReport, dsspIgnoreHydrogen, setStructure, version) {
var bsAllAtoms=Clazz.new_($I$(3,1));
var bsModelsExcluded=(function(a,f){return f.apply(null,a)})([p$1.modelsOf$javajs_util_BS$javajs_util_BS.apply(this, [bsAtoms, bsAllAtoms]), this.ms.mc],$I$(2).copyInvert$javajs_util_BS$I);
if (!setStructure) return this.ms.calculateStructuresAllExcept$javajs_util_BS$Z$Z$Z$Z$Z$I(bsModelsExcluded, asDSSP, doReport, dsspIgnoreHydrogen, false, false, version);
this.ms.recalculatePolymers$javajs_util_BS(bsModelsExcluded);
var ret=this.ms.calculateStructuresAllExcept$javajs_util_BS$Z$Z$Z$Z$Z$I(bsModelsExcluded, asDSSP, doReport, dsspIgnoreHydrogen, true, false, version);
this.vwr.shm.resetBioshapes$javajs_util_BS(bsAllAtoms);
this.ms.setStructureIndexes$();
return ret;
});

Clazz.newMeth(C$, 'calculateStraightnessAll$', function () {
this.getBioExt$().calculateStraightnessAll$();
});

Clazz.newMeth(C$, 'calculateStruts$javajs_util_BS$javajs_util_BS', function (bs1, bs2) {
return this.getBioExt$().calculateAllstruts$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet$javajs_util_BS$javajs_util_BS(this.vwr, this.ms, bs1, bs2);
});

Clazz.newMeth(C$, 'getAllDefaultStructures$javajs_util_BS$javajs_util_BS', function (bsAtoms, bsModified) {
var bsModels=p$1.modelsOf$javajs_util_BS$javajs_util_BS.apply(this, [bsAtoms, bsModified]);
var ret=Clazz.new_($I$(5,1));
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) if (this.ms.am[i].isBioModel && (this.ms.am[i]).defaultStructure != null  ) ret.append$S((this.ms.am[i]).defaultStructure);

return ret.toString();
});

Clazz.newMeth(C$, 'getAllHeteroList$I', function (modelIndex) {
var htFull=Clazz.new_($I$(6,1));
var ok=false;
for (var i=this.ms.mc; --i >= 0; ) if (modelIndex < 0 || i == modelIndex ) {
var ht=this.ms.getInfo$I$S(i, "hetNames");
if (ht == null ) continue;
ok=true;
for (var entry, $entry = ht.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
htFull.put$O$O(key, entry.getValue$());
}
}
return (ok ? htFull : null);
});

Clazz.newMeth(C$, 'getAllPolymerInfo$javajs_util_BS$java_util_Map', function (bs, info) {
this.getBioExt$().getAllPolymerInfo$javajs_util_BS$java_util_Map(bs, info);
});

Clazz.newMeth(C$, 'getAllPolymerPointsAndVectors$javajs_util_BS$javajs_util_Lst$Z$F', function (bs, vList, isTraceAlpha, sheetSmoothing) {
for (var i=0; i < this.ms.mc; ++i) if (this.ms.am[i].isBioModel) {
var m=this.ms.am[i];
var last=2147483646;
for (var ip=0; ip < m.bioPolymerCount; ip++) last=m.bioPolymers[ip].getPolymerPointsAndVectors$I$javajs_util_BS$javajs_util_Lst$Z$F(last, bs, vList, isTraceAlpha, sheetSmoothing);

}
});

Clazz.newMeth(C$, 'getAllSequenceBits$S$javajs_util_BS$javajs_util_BS', function (specInfo, bsAtoms, bsResult) {
if (specInfo.length$() > 0) {
if (bsAtoms == null ) bsAtoms=this.vwr.getAllAtoms$();
if (specInfo.indexOf$I("|") < specInfo.lastIndexOf$I("|")) return p$1.getAllUnitIds$S$javajs_util_BS$javajs_util_BS.apply(this, [specInfo, bsAtoms, bsResult]);
var am=this.ms.am;
for (var i=this.ms.mc; --i >= 0; ) if (am[i].isBioModel) {
var m=am[i];
var lenInfo=specInfo.length$();
for (var ip=0; ip < m.bioPolymerCount; ip++) {
var sequence=m.bioPolymers[ip].getSequence$();
var j=-1;
while ((j=sequence.indexOf$S$I(specInfo, ++j)) >= 0)m.bioPolymers[ip].getPolymerSequenceAtoms$I$I$javajs_util_BS$javajs_util_BS(j, lenInfo, bsAtoms, bsResult);

}
}
}return bsResult;
});

Clazz.newMeth(C$, 'getAtomBitsBS$I$javajs_util_BS$javajs_util_BS', function (tokType, bsInfo, bs) {
var at=this.ms.at;
var ac=this.ms.ac;
var i=0;
var g;
switch (tokType) {
case 136314895:
case 2097184:
var type=(tokType == 136314895 ? $I$(7).HELIX : $I$(7).SHEET);
for (i=ac; --i >= 0; ) {
if ((g=at[i].group).isWithinStructure$org_jmol_c_STR(type)) g.setAtomBits$javajs_util_BS(bs);
i=g.firstAtomIndex;
}
break;
case 2097188:
for (i=ac; --i >= 0; ) {
if ((g=at[i].group).isCarbohydrate$()) g.setAtomBits$javajs_util_BS(bs);
i=g.firstAtomIndex;
}
break;
case 2097156:
for (i=ac; --i >= 0; ) {
if ((g=at[i].group).isDna$()) g.setAtomBits$javajs_util_BS(bs);
i=g.firstAtomIndex;
}
break;
case 2097166:
for (i=ac; --i >= 0; ) {
if ((g=at[i].group).isNucleic$()) g.setAtomBits$javajs_util_BS(bs);
i=g.firstAtomIndex;
}
break;
case 2097168:
for (i=ac; --i >= 0; ) {
if ((g=at[i].group).isProtein$()) g.setAtomBits$javajs_util_BS(bs);
i=g.firstAtomIndex;
}
break;
case 2097170:
for (i=ac; --i >= 0; ) {
if ((g=at[i].group).isPurine$()) g.setAtomBits$javajs_util_BS(bs);
i=g.firstAtomIndex;
}
break;
case 2097172:
for (i=ac; --i >= 0; ) {
if ((g=at[i].group).isPyrimidine$()) g.setAtomBits$javajs_util_BS(bs);
i=g.firstAtomIndex;
}
break;
case 2097174:
for (i=ac; --i >= 0; ) {
if ((g=at[i].group).isRna$()) g.setAtomBits$javajs_util_BS(bs);
i=g.firstAtomIndex;
}
break;
}
if (i < 0) return bs;
var i0=bsInfo.nextSetBit$I(0);
if (i0 < 0) return bs;
i=0;
switch (tokType) {
case 1094713362:
for (i=i0; i >= 0; i=bsInfo.nextSetBit$I(i + 1)) {
var iPolymer=at[i].group.getBioPolymerIndexInModel$();
if (iPolymer >= 0) (at[i].group).bioPolymer.setAtomBitsAndClear$javajs_util_BS$javajs_util_BS(bs, bsInfo);
}
break;
case 1639976963:
for (i=i0; i >= 0; i=bsInfo.nextSetBit$I(i + 1)) {
var structure=at[i].group.getStructure$();
if (structure != null ) structure.setAtomBitsAndClear$javajs_util_BS$javajs_util_BS(bs, bsInfo);
}
break;
}
if (i == 0) (function(a,f){return f.apply(null,a)})(["MISSING getAtomBits entry for " + $I$(9).nameOf$I(tokType)],$I$(8).error$S);
return bs;
});

Clazz.newMeth(C$, 'getAtomBitsStr$I$S$javajs_util_BS', function (tokType, specInfo, bs) {
switch (tokType) {
default:
return Clazz.new_($I$(3,1));
case 1073741925:
return p$1.getAnnotationBits$S$I$S.apply(this, ["domains", 1073741925, specInfo]);
case 1073742189:
return p$1.getAnnotationBits$S$I$S.apply(this, ["validation", 1073742189, specInfo]);
case 1073742128:
return p$1.getAnnotationBits$S$I$S.apply(this, ["rna3d", 1073742128, specInfo]);
case 1073741863:
var s=specInfo;
bs=Clazz.new_($I$(3,1));
return (s.length$() % 2 != 0 ? bs : this.ms.getAtomBitsMDa$I$O$javajs_util_BS(1086324742, p$1.getAllBasePairBits$S.apply(this, [s]), bs));
case 1111490587:
return p$1.getAnnotationBits$S$I$S.apply(this, ["dssr", 1111490587, specInfo]);
case 1086324744:
return this.getAllSequenceBits$S$javajs_util_BS$javajs_util_BS(specInfo, null, bs);
}
});

Clazz.newMeth(C$, 'getBioPolymerCountInModel$I', function (modelIndex) {
if (modelIndex < 0) {
var polymerCount=0;
for (var i=this.ms.mc; --i >= 0; ) if (!this.ms.isTrajectorySubFrame$I(i) && this.ms.am[i].isBioModel ) polymerCount+=(this.ms.am[i]).getBioPolymerCount$();

return polymerCount;
}return (this.ms.isTrajectorySubFrame$I(modelIndex) || !this.ms.am[modelIndex].isBioModel  ? 0 : (this.ms.am[modelIndex]).getBioPolymerCount$());
});

Clazz.newMeth(C$, 'getFullProteinStructureState$javajs_util_BS$I', function (bsAtoms, mode) {
var taintedOnly=(mode == 1073742327);
if (taintedOnly && !this.ms.proteinStructureTainted ) return "";
var scriptMode=(mode == 1073742158 || mode == 1073742327 );
var atoms=this.ms.at;
var at0=(bsAtoms == null  ? 0 : bsAtoms.nextSetBit$I(0));
if (at0 < 0) return "";
if (bsAtoms != null  && mode == 4138 ) {
bsAtoms=$I$(2).copy$javajs_util_BS(bsAtoms);
for (var i=this.ms.ac; --i >= 0; ) if (Float.isNaN$F(atoms[i].group.getGroupParameter$I(1111490569)) || Float.isNaN$F(atoms[i].group.getGroupParameter$I(1111490570)) ) bsAtoms.clear$I(i);

}var at1=(bsAtoms == null  ? this.ms.ac : bsAtoms.length$()) - 1;
var im0=atoms[at0].mi;
var im1=atoms[at1].mi;
var lstStr=Clazz.new_($I$(10,1));
var map=Clazz.new_($I$(6,1));
var cmd=Clazz.new_($I$(5,1));
for (var im=im0; im <= im1; im++) {
if (!this.ms.am[im].isBioModel) continue;
var m=this.ms.am[im];
if (taintedOnly && !m.structureTainted ) continue;
var bsA=Clazz.new_($I$(3,1));
bsA.or$javajs_util_BS(m.bsAtoms);
bsA.andNot$javajs_util_BS(m.bsAtomsDeleted);
var i0=bsA.nextSetBit$I(0);
if (i0 < 0) continue;
if (scriptMode) {
cmd.append$S("  structure none ").append$S((function(a,f){return f.apply(null,a)})([this.ms.getModelAtomBitSetIncludingDeleted$I$Z(im, false)],$I$(11).eBS$javajs_util_BS)).append$S("    \t# model=" + this.ms.getModelNumberDotted$I(im)).append$S(";\n");
}var ps;
for (var i=i0; i >= 0; i=bsA.nextSetBit$I(i + 1)) {
var a=atoms[i];
if (!(Clazz.instanceOf(a.group, "org.jmol.modelsetbio.AlphaMonomer")) || (ps=(a.group).proteinStructure) == null   || map.containsKey$O(ps) ) continue;
lstStr.addLast$O(ps);
map.put$O$O(ps, $I$(12).TRUE);
}
}
p$1.getStructureLines$javajs_util_BS$javajs_util_SB$javajs_util_Lst$org_jmol_c_STR$Z$I.apply(this, [bsAtoms, cmd, lstStr, $I$(7).HELIX, scriptMode, mode]);
p$1.getStructureLines$javajs_util_BS$javajs_util_SB$javajs_util_Lst$org_jmol_c_STR$Z$I.apply(this, [bsAtoms, cmd, lstStr, $I$(7).SHEET, scriptMode, mode]);
p$1.getStructureLines$javajs_util_BS$javajs_util_SB$javajs_util_Lst$org_jmol_c_STR$Z$I.apply(this, [bsAtoms, cmd, lstStr, $I$(7).TURN, scriptMode, mode]);
return cmd.toString();
});

Clazz.newMeth(C$, 'getGroupsWithinAll$I$javajs_util_BS', function (nResidues, bs) {
var bsResult=Clazz.new_($I$(3,1));
var bsCheck=this.ms.getIterativeModels$Z(false);
for (var iModel=this.ms.mc; --iModel >= 0; ) if (bsCheck.get$I(iModel) && this.ms.am[iModel].isBioModel ) {
var m=this.ms.am[iModel];
for (var i=m.bioPolymerCount; --i >= 0; ) m.bioPolymers[i].getRangeGroups$I$javajs_util_BS$javajs_util_BS(nResidues, bs, bsResult);

}
return bsResult;
});

Clazz.newMeth(C$, 'getIdentifierOrNull$S', function (identifier) {
var len=identifier.length$();
var pt=0;
while (pt < len && (function(a,f){return f.apply(null,a)})([identifier.charAt$I(pt)],$I$(13).isLetter$C) )++pt;

var bs=this.ms.getSpecNameOrNull$S$Z(identifier.substring$I$I(0, pt), false);
if (pt == len) return bs;
if (bs == null ) bs=Clazz.new_($I$(3,1));
var pt0=pt;
while (pt < len && (function(a,f){return f.apply(null,a)})([identifier.charAt$I(pt)],$I$(13).isDigit$C) )++pt;

var seqNumber=0;
try {
seqNumber=Integer.parseInt$S(identifier.substring$I$I(pt0, pt));
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
return null;
} else {
throw nfe;
}
}
var insertionCode=" ";
if (pt < len && identifier.charAt$I(pt) == "^" ) if (++pt < len) insertionCode=identifier.charAt$I(pt);
var seqcode=$I$(14).getSeqcodeFor$I$C(seqNumber, insertionCode);
var bsInsert=this.ms.getSeqcodeBits$I$Z(seqcode, false);
if (bsInsert == null ) {
if (insertionCode != " ") bsInsert=this.ms.getSeqcodeBits$I$Z(Character.toUpperCase$C(identifier.charAt$I(pt)).$c(), false);
if (bsInsert == null ) return null;
pt++;
}bs.and$javajs_util_BS(bsInsert);
if (pt >= len) return bs;
if (pt != len - 1) return null;
bs.and$javajs_util_BS(this.ms.getChainBits$I(identifier.charAt$I(pt).$c()));
return bs;
});

Clazz.newMeth(C$, 'mutate$javajs_util_BS$S$SA', function (bs, group, sequence) {
return this.getBioExt$().mutate$org_jmol_viewer_Viewer$javajs_util_BS$S$SA(this.vwr, bs, group, sequence);
});

Clazz.newMeth(C$, 'recalculateAllPolymers$javajs_util_BS$org_jmol_modelset_GroupA', function (bsModelsExcluded, groups) {
for (var i=0; i < this.ms.mc; i++) if (this.ms.am[i].isBioModel && !bsModelsExcluded.get$I(i) ) (this.ms.am[i]).clearBioPolymers$();

this.calculateAllPolymers$org_jmol_modelset_GroupA$I$I$javajs_util_BS(groups, -1, 0, bsModelsExcluded);
});

Clazz.newMeth(C$, 'recalculatePoints$I', function (modelIndex) {
if (modelIndex < 0) {
for (var i=this.ms.mc; --i >= 0; ) if (!this.ms.isTrajectorySubFrame$I(i) && this.ms.am[i].isBioModel ) (this.ms.am[i]).recalculateLeadMidpointsAndWingVectors$();

return;
}if (!this.ms.isTrajectorySubFrame$I(modelIndex) && this.ms.am[modelIndex].isBioModel ) (this.ms.am[modelIndex]).recalculateLeadMidpointsAndWingVectors$();
});

Clazz.newMeth(C$, 'setAllConformation$javajs_util_BS', function (bsAtoms) {
var bsModels=this.ms.getModelBS$javajs_util_BS$Z(bsAtoms, false);
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) if (this.ms.am[i].isBioModel) {
var m=this.ms.am[i];
if (m.altLocCount > 0) for (var j=m.bioPolymerCount; --j >= 0; ) m.bioPolymers[j].setConformation$javajs_util_BS(bsAtoms);

}
});

Clazz.newMeth(C$, 'setAllProteinType$javajs_util_BS$org_jmol_c_STR', function (bs, type) {
var monomerIndexCurrent=-1;
var iLast=-1;
var bsModels=this.ms.getModelBS$javajs_util_BS$Z(bs, false);
p$1.setAllDefaultStructure$javajs_util_BS.apply(this, [bsModels]);
var at=this.ms.at;
var am=this.ms.am;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var a=at[i];
var g=a.group;
if (g.isAdded$I(i) || g.getBioPolymerLength$() == 0 ) continue;
monomerIndexCurrent=g.setProteinStructureType$org_jmol_c_STR$I(type, iLast == i - 1 ? monomerIndexCurrent : -1);
var modelIndex=a.mi;
this.ms.proteinStructureTainted=am[modelIndex].structureTainted=true;
iLast=i=g.lastAtomIndex;
}
var lastStrucNo=Clazz.array(Integer.TYPE, [this.ms.mc]);
for (var i=0; i < this.ms.ac; i++) {
var modelIndex=at[i].mi;
if (!bsModels.get$I(modelIndex)) {
i=am[modelIndex].firstAtomIndex + am[modelIndex].act - 1;
continue;
}var g=at[i].group;
if (!g.isAdded$I(i)) {
iLast=g.getStrucNo$();
if (iLast < 1000 && iLast > lastStrucNo[modelIndex] ) lastStrucNo[modelIndex]=iLast;
i=g.lastAtomIndex;
}}
for (var i=0; i < this.ms.ac; i++) {
var modelIndex=at[i].mi;
if (!bsModels.get$I(modelIndex)) {
i=am[modelIndex].firstAtomIndex + am[modelIndex].act - 1;
continue;
}var g=at[i].group;
if (!g.isAdded$I(i)) {
i=g.lastAtomIndex;
if (g.getStrucNo$() > 1000) g.setStrucNo$I(++lastStrucNo[modelIndex]);
}}
});

Clazz.newMeth(C$, 'setAllStructureList$java_util_Map', function (structureList) {
for (var iModel=this.ms.mc; --iModel >= 0; ) if (this.ms.am[iModel].isBioModel) {
var m=this.ms.am[iModel];
m.bioPolymers=$I$(15).arrayCopyObject$O$I(m.bioPolymers, m.bioPolymerCount);
for (var i=m.bioPolymerCount; --i >= 0; ) {
var bp=m.bioPolymers[i];
if (Clazz.instanceOf(bp, "org.jmol.modelsetbio.AminoPolymer")) (bp).setStructureList$java_util_Map(structureList);
}
}
});

Clazz.newMeth(C$, 'getAllBasePairBits$S', function (specInfo) {
var bsA=null;
var bsB=null;
var vHBonds=Clazz.new_($I$(10,1));
if (specInfo.length$() == 0) {
bsA=bsB=this.vwr.getAllAtoms$();
this.calcAllRasmolHydrogenBonds$javajs_util_BS$javajs_util_BS$javajs_util_Lst$Z$I$Z$javajs_util_BS$I(bsA, bsB, vHBonds, true, 1, false, null, 0);
} else {
for (var i=0; i < specInfo.length$(); ) {
bsA=this.ms.getSequenceBits$S$javajs_util_BS$javajs_util_BS(specInfo.substring$I$I(i, ++i), null, Clazz.new_($I$(3,1)));
if (bsA.nextSetBit$I(0) < 0) continue;
bsB=this.ms.getSequenceBits$S$javajs_util_BS$javajs_util_BS(specInfo.substring$I$I(i, ++i), null, Clazz.new_($I$(3,1)));
if (bsB.nextSetBit$I(0) < 0) continue;
this.calcAllRasmolHydrogenBonds$javajs_util_BS$javajs_util_BS$javajs_util_Lst$Z$I$Z$javajs_util_BS$I(bsA, bsB, vHBonds, true, 1, false, null, 0);
}
}var bsAtoms=Clazz.new_($I$(3,1));
for (var i=vHBonds.size$(); --i >= 0; ) {
var b=vHBonds.get$I(i);
bsAtoms.set$I(b.atom1.i);
bsAtoms.set$I(b.atom2.i);
}
return bsAtoms;
}, p$1);

Clazz.newMeth(C$, 'getAllUnitIds$S$javajs_util_BS$javajs_util_BS', function (specInfo, bsSelected, bsResult) {
var maps=this.unitIdSets;
if (maps == null ) {
maps=this.unitIdSets=Clazz.array($I$(16), [7]);
for (var i=0; i < 7; i++) maps[i]=Clazz.new_($I$(6,1));

for (var i=this.ms.mc; --i >= 0; ) {
var m=this.ms.am[i];
if (!m.isBioModel) continue;
if (this.ms.isTrajectory$I(i)) m=this.ms.am[i=m.trajectoryBaseIndex];
var num="|" + this.ms.getInfo$I$S(i, "modelNumber");
p$1.checkMap$java_util_Map$S$javajs_util_BS.apply(this, [maps[0], this.ms.getInfo$I$S(i, "modelName") + num, m.bsAtoms]);
p$1.checkMap$java_util_Map$S$javajs_util_BS.apply(this, [maps[0], num, m.bsAtoms]);
}
}var bsModelChain=null;
var lastModelChain=null;
var bsTemp=Clazz.new_($I$(3,1));
var units=(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([specInfo, ", \t\n[]\"=", " "],$I$(13).replaceAllCharacters$S$S$S)],$I$(13).getTokens$S);
var ptrs=Clazz.array(Integer.TYPE, [8]);
for (var i=units.length; --i >= 0; ) {
var unit=units[i] + "|";
if (unit.length$() < 5) continue;
var bsPtr=0;
for (var j=0, n=0, pt=unit.lastIndexOf$I("|") + 1; j < pt && n < 8 ; j++) {
if (unit.charAt$I(j) == "|") ptrs[n++]=j;
 else bsPtr|=1 << n;
}
if ((bsPtr & 22) != 22) continue;
bsTemp.clearAll$();
bsTemp.or$javajs_util_BS(bsSelected);
var mchain=unit.substring$I$I(0, ptrs[2]);
if (lastModelChain != null  && lastModelChain.equals$O(mchain) ) {
bsTemp.and$javajs_util_BS(bsModelChain);
} else {
if (!p$1.addUnit$I$S$javajs_util_BS$java_util_Map.apply(this, [1094717454, unit.substring$I$I(0, ptrs[1]).toUpperCase$(), bsTemp, maps[0]]) || !p$1.addUnit$I$S$javajs_util_BS$java_util_Map.apply(this, [1073742357, unit.substring$I$I(ptrs[1] + 1, ptrs[2]), bsTemp, maps[1]]) ) continue;
bsModelChain=$I$(2).copy$javajs_util_BS(bsTemp);
lastModelChain=mchain;
}var haveAtom=((bsPtr & (32)) != 0);
var haveAlt=((bsPtr & (64)) != 0);
if (!p$1.addUnit$I$S$javajs_util_BS$java_util_Map.apply(this, [1094715412, unit.substring$I$I(ptrs[3] + 1, ptrs[4]), bsTemp, maps[2]]) || !p$1.addUnit$I$S$javajs_util_BS$java_util_Map.apply(this, [5, ((bsPtr & (128)) == 0 ? "\u0000" : unit.substring$I$I(ptrs[6] + 1, ptrs[7])), bsTemp, maps[3]]) || (haveAtom ? !p$1.addUnit$I$S$javajs_util_BS$java_util_Map.apply(this, [1086326786, unit.substring$I$I(ptrs[4] + 1, ptrs[5]).toUpperCase$(), bsTemp, maps[4]]) || !p$1.addUnit$I$S$javajs_util_BS$java_util_Map.apply(this, [1073742355, unit.substring$I$I(ptrs[5] + 1, ptrs[6]), bsTemp, maps[5]])  : haveAlt && !p$1.addUnit$I$S$javajs_util_BS$java_util_Map.apply(this, [1094717448, unit.substring$I$I(ptrs[5] + 1, ptrs[6]), bsTemp, maps[6]]) )  ) continue;
bsResult.or$javajs_util_BS(bsTemp);
}
return bsResult;
}, p$1);

Clazz.newMeth(C$, 'checkMap$java_util_Map$S$javajs_util_BS', function (map, key, bsAtoms) {
var bs=$I$(2).copy$javajs_util_BS(bsAtoms);
var bs0=map.get$O(key);
if (bs0 == null ) map.put$O$O(key, bs0=bs);
 else bs0.or$javajs_util_BS(bs);
return bs0;
}, p$1);

Clazz.newMeth(C$, 'addUnit$I$S$javajs_util_BS$java_util_Map', function (tok, key, bsTemp, map) {
var bs=map.get$O(key);
if (bs == null ) {
var o;
switch (tok) {
default:
return false;
case 1073742357:
o=Integer.valueOf$I(this.vwr.getChainID$S$Z(key, false));
break;
case 1094715412:
o=Integer.valueOf$I($I$(13).parseInt$S(key));
break;
case 5:
o=Integer.valueOf$I(key.charAt$I(0).$c());
break;
case 1094717448:
bs=this.ms.getAtomBitsMDa$I$O$javajs_util_BS(tok=1073742355, null, Clazz.new_($I$(3,1)));
case 1086326786:
o=key;
break;
case 1073742355:
o=(key.length$() == 0 ? null : key);
break;
}
map.put$O$O(key, bs=this.ms.getAtomBitsMDa$I$O$javajs_util_BS(tok, o, (bs == null  ? Clazz.new_($I$(3,1)) : bs)));
}bsTemp.and$javajs_util_BS(bs);
return (bsTemp.nextSetBit$I(0) >= 0);
}, p$1);

Clazz.newMeth(C$, 'getAnnotationBits$S$I$S', function (name, tok, specInfo) {
var bs=Clazz.new_($I$(3,1));
var pa=this.vwr.getAnnotationParser$Z(name.equals$O("dssr"));
var ann;
for (var i=this.ms.mc; --i >= 0; ) if ((ann=this.ms.getInfo$I$S(i, name)) != null ) bs.or$javajs_util_BS(pa.getAtomBits$org_jmol_viewer_Viewer$S$O$java_util_Map$I$I$javajs_util_BS(this.vwr, specInfo, (this.ms.am[i]).getCachedAnnotationMap$S$O(name + " V ", ann), this.ms.am[i].dssrCache, tok, i, this.ms.am[i].bsAtoms));

return bs;
}, p$1);

Clazz.newMeth(C$, 'getStructureLines$javajs_util_BS$javajs_util_SB$javajs_util_Lst$org_jmol_c_STR$Z$I', function (bsAtoms, cmd, lstStr, type, scriptMode, mode) {
var showMode=(mode == 134222350);
var nHelix=0;
var nSheet=0;
var nTurn=0;
var sid=null;
var bs=Clazz.new_($I$(3,1));
var n=0;
for (var i=0, ns=lstStr.size$(); i < ns; i++) {
var ps=lstStr.get$I(i);
if (ps.type !== type ) continue;
var m1=ps.findMonomer$javajs_util_BS$Z(bsAtoms, true);
var m2=ps.findMonomer$javajs_util_BS$Z(bsAtoms, false);
if (m1 == null  || m2 == null  ) continue;
var iModel=ps.apolymer.model.modelIndex;
var comment=(scriptMode ? "    \t# model=" + this.ms.getModelNumberDotted$I(iModel) : null);
var res1=m1.getResno$();
var res2=m2.getResno$();
var subtype=ps.subtype;
switch (type) {
case $I$(7).HELIX:
case $I$(7).TURN:
case $I$(7).SHEET:
n++;
if (scriptMode) {
bs.clearAll$();
ps.setAtomBits$javajs_util_BS(bs);
var stype=subtype.getBioStructureTypeName$Z(false);
cmd.append$S("  structure ").append$S(stype).append$S(" ").append$S($I$(11).eBS$javajs_util_BS(bs)).append$S(comment).append$S(" & (" + res1 + " - " + res2 + ")" ).append$S(";\n");
} else {
var str;
var nx;
switch (type) {
case $I$(7).HELIX:
nx=++nHelix;
sid=$I$(13).formatStringI$S$S$I("%3N %3N", "N", nx);
str="HELIX  %ID %3GROUPA %1CA %4RESA  %3GROUPB %1CB %4RESB";
var stype=null;
switch (subtype) {
case $I$(7).HELIX:
case $I$(7).HELIXALPHA:
stype="  1";
break;
case $I$(7).HELIX310:
stype="  5";
break;
case $I$(7).HELIXPI:
stype="  3";
break;
}
if (stype != null ) str += stype;
break;
case $I$(7).SHEET:
nx=++nSheet;
sid=$I$(13).formatStringI$S$S$I("%3N %3A 0", "N", nx);
sid=$I$(13).formatStringS$S$S$S(sid, "A", "S" + nx);
str="SHEET  %ID %3GROUPA %1CA%4RESA  %3GROUPB %1CB%4RESB";
break;
case $I$(7).TURN:
default:
nx=++nTurn;
sid=$I$(13).formatStringI$S$S$I("%3N %3N", "N", nx);
str="TURN   %ID %3GROUPA %1CA%4RESA  %3GROUPB %1CB%4RESB";
break;
}
str=$I$(13).formatStringS$S$S$S(str, "ID", sid);
str=(function(a,f){return f.apply(null,a)})([str, "GROUPA", m1.getGroup3$()],$I$(13).formatStringS$S$S$S);
str=(function(a,f){return f.apply(null,a)})([str, "CA", m1.getLeadAtom$().getChainIDStr$()],$I$(13).formatStringS$S$S$S);
str=$I$(13).formatStringI$S$S$I(str, "RESA", res1);
str=(function(a,f){return f.apply(null,a)})([str, "GROUPB", m2.getGroup3$()],$I$(13).formatStringS$S$S$S);
str=(function(a,f){return f.apply(null,a)})([str, "CB", m2.getLeadAtom$().getChainIDStr$()],$I$(13).formatStringS$S$S$S);
str=$I$(13).formatStringI$S$S$I(str, "RESB", res2);
cmd.append$S(str);
if (showMode) cmd.append$S(" strucno= ").appendI$I(ps.strucNo);
cmd.append$S("\n");
}}
}
if (n > 0) cmd.append$S("\n");
return n;
}, p$1);

Clazz.newMeth(C$, 'modelsOf$javajs_util_BS$javajs_util_BS', function (bsAtoms, bsAtomsRet) {
var bsModels=$I$(3).newN$I(this.ms.mc);
var isAll=(bsAtoms == null );
var i0=(isAll ? this.ms.ac - 1 : bsAtoms.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsAtoms.nextSetBit$I(i + 1))) {
var modelIndex=this.ms.am[this.ms.at[i].mi].trajectoryBaseIndex;
if (this.ms.isJmolDataFrameForModel$I(modelIndex)) continue;
bsModels.set$I(modelIndex);
bsAtomsRet.set$I(i);
}
return bsModels;
}, p$1);

Clazz.newMeth(C$, 'setAllDefaultStructure$javajs_util_BS', function (bsModels) {
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) if (this.ms.am[i].isBioModel) {
var m=this.ms.am[i];
if (m.defaultStructure == null ) m.defaultStructure=this.getFullProteinStructureState$javajs_util_BS$I(m.bsAtoms, 1073742158);
}
}, p$1);

Clazz.newMeth(C$, 'getAminoAcidValenceAndCharge$S$S$IA', function (s, atomName, aaRet) {
return this.getBioExt$().getAminoAcidValenceAndCharge$S$S$IA(s, atomName, aaRet);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:13 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
