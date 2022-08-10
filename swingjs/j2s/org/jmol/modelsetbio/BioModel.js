(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),p$1={},I$=[[0,'org.jmol.modelsetbio.BioModelSet','javajs.util.AU','org.jmol.api.Interface','org.jmol.modelsetbio.BioPolymer','javajs.util.BS','javajs.util.Lst','java.util.Hashtable','org.jmol.util.Escape','javajs.util.SB']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BioModel", null, 'org.jmol.modelset.Model');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bioPolymerCount=0;
},1);

C$.$fields$=[['Z',['isMutated'],'I',['bioPolymerCount'],'S',['defaultStructure'],'O',['vwr','org.jmol.viewer.Viewer','bioPolymers','org.jmol.modelsetbio.BioPolymer[]']]]

Clazz.newMeth(C$, 'c$$org_jmol_modelset_ModelSet$I$I$S$java_util_Properties$java_util_Map', function (modelSet, modelIndex, trajectoryBaseIndex, jmolData, properties, auxiliaryInfo) {
Clazz.super_(C$, this);
this.vwr=modelSet.vwr;
this.set$org_jmol_modelset_ModelSet$I$I$S$java_util_Properties$java_util_Map(modelSet, modelIndex, trajectoryBaseIndex, jmolData, properties, auxiliaryInfo);
this.isBioModel=true;
if (modelSet.bioModelset == null ) modelSet.bioModelset=Clazz.new_($I$(1,1)).set$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet(this.vwr, this.ms);
this.clearBioPolymers$();
modelSet.am[modelIndex]=this;
this.pdbID=auxiliaryInfo.get$O("name");
}, 1);

Clazz.newMeth(C$, 'addBioPolymer$org_jmol_modelsetbio_BioPolymer', function (polymer) {
if (this.bioPolymers.length == 0) this.clearBioPolymers$();
if (this.bioPolymerCount == this.bioPolymers.length) this.bioPolymers=$I$(2).doubleLength$O(this.bioPolymers);
polymer.bioPolymerIndexInModel=this.bioPolymerCount;
this.bioPolymers[this.bioPolymerCount++]=polymer;
return polymer.monomerCount;
});

Clazz.newMeth(C$, 'addSecondaryStructure$org_jmol_c_STR$S$I$I$I$I$I$I$I$I$javajs_util_BS', function (type, structureID, serialID, strandCount, startChainID, startSeqcode, endChainID, endSeqcode, istart, iend, bsAssigned) {
for (var i=this.bioPolymerCount; --i >= 0; ) if (Clazz.instanceOf(this.bioPolymers[i], "org.jmol.modelsetbio.AlphaPolymer")) (this.bioPolymers[i]).addStructure$org_jmol_c_STR$S$I$I$I$I$I$I$I$I$javajs_util_BS(type, structureID, serialID, strandCount, startChainID, startSeqcode, endChainID, endSeqcode, istart, iend, bsAssigned);

});

Clazz.newMeth(C$, 'addStructureByBS$I$I$org_jmol_c_STR$javajs_util_BS', function (count, dsspType, type, bs) {
for (var i=this.bioPolymerCount; --i >= 0; ) {
var b=this.bioPolymers[i];
if (Clazz.instanceOf(b, "org.jmol.modelsetbio.AlphaPolymer")) count=(this.bioPolymers[i]).setStructureBS$I$I$org_jmol_c_STR$javajs_util_BS$Z(++count, dsspType, type, bs, true);
}
});

Clazz.newMeth(C$, 'calculateDssx$javajs_util_Lst$Z$Z$Z$I', function (vHBonds, doReport, dsspIgnoreHydrogen, setStructure, version) {
var haveProt=false;
var haveNucl=false;
for (var i=0; i < this.bioPolymerCount && !(haveProt && haveNucl ) ; i++) {
if (this.bioPolymers[i].isNucleic$()) haveNucl=true;
 else if (Clazz.instanceOf(this.bioPolymers[i], "org.jmol.modelsetbio.AminoPolymer")) haveProt=true;
}
var s="";
if (haveProt) s += ($I$(3).getOption$S$org_jmol_viewer_Viewer$S("dssx.DSSP", this.vwr, "ms")).calculateDssp$OA$I$O$Z$Z$Z$I(this.bioPolymers, this.bioPolymerCount, vHBonds, doReport, dsspIgnoreHydrogen, setStructure, version);
if (haveNucl && this.auxiliaryInfo.containsKey$O("dssr") && vHBonds != null   ) s += this.vwr.getAnnotationParser$Z(true).getHBonds$org_jmol_modelset_ModelSet$I$javajs_util_Lst$Z(this.ms, this.modelIndex, vHBonds, doReport);
return s;
}, p$1);

Clazz.newMeth(C$, 'calculateStructures$Z$Z$Z$Z$Z$I', function (asDSSP, doReport, dsspIgnoreHydrogen, setStructure, includeAlpha, version) {
if (this.bioPolymerCount == 0 || !setStructure && !asDSSP  ) return "";
this.ms.proteinStructureTainted=this.structureTainted=true;
if (setStructure) for (var i=this.bioPolymerCount; --i >= 0; ) if (!asDSSP || this.bioPolymers[i].monomers[0].getNitrogenAtom$() != null  ) this.bioPolymers[i].clearStructures$();

if (!asDSSP || includeAlpha ) for (var i=this.bioPolymerCount; --i >= 0; ) if (Clazz.instanceOf(this.bioPolymers[i], "org.jmol.modelsetbio.AlphaPolymer")) (this.bioPolymers[i]).calculateStructures$Z(includeAlpha);

return (asDSSP ? p$1.calculateDssx$javajs_util_Lst$Z$Z$Z$I.apply(this, [null, doReport, dsspIgnoreHydrogen, setStructure, version]) : "");
});

Clazz.newMeth(C$, 'clearBioPolymers$', function () {
this.bioPolymers=Clazz.array($I$(4), [8]);
this.bioPolymerCount=0;
});

Clazz.newMeth(C$, 'fixIndices$I$I$javajs_util_BS', function (modelIndex, nAtomsDeleted, bsDeleted) {
this.fixIndicesM$I$I$javajs_util_BS(modelIndex, nAtomsDeleted, bsDeleted);
this.recalculateLeadMidpointsAndWingVectors$();
});

Clazz.newMeth(C$, 'freeze$', function () {
this.freezeM$();
this.bioPolymers=$I$(2).arrayCopyObject$O$I(this.bioPolymers, this.bioPolymerCount);
return true;
});

Clazz.newMeth(C$, 'getBioBranches$javajs_util_Lst', function (biobranches) {
var bsBranch;
for (var j=0; j < this.bioPolymerCount; j++) {
bsBranch=Clazz.new_($I$(5,1));
this.bioPolymers[j].getRange$javajs_util_BS$Z(bsBranch, this.isMutated);
var iAtom=bsBranch.nextSetBit$I(0);
if (iAtom >= 0) {
if (biobranches == null ) biobranches=Clazz.new_($I$(6,1));
biobranches.addLast$O(bsBranch);
}}
return biobranches;
});

Clazz.newMeth(C$, 'getBioPolymerCount$', function () {
return this.bioPolymerCount;
});

Clazz.newMeth(C$, 'getCachedAnnotationMap$S$O', function (key, ann) {
var cache=(this.dssrCache == null  && ann != null   ? this.dssrCache=Clazz.new_($I$(7,1)) : this.dssrCache);
if (cache == null ) return null;
var annotv=cache.get$O(key);
if (annotv == null  && ann != null  ) {
annotv=(Clazz.instanceOf(ann, "org.jmol.script.SV") || Clazz.instanceOf(ann, "java.util.Hashtable")  ? ann : this.vwr.parseJSONMap$S(ann));
cache.put$O$O(key, annotv);
}return (Clazz.instanceOf(annotv, "org.jmol.script.SV") || Clazz.instanceOf(annotv, "java.util.Hashtable")  ? annotv : null);
});

Clazz.newMeth(C$, 'getConformation$I$Z$javajs_util_BS$javajs_util_BS', function (conformationIndex0, doSet, bsAtoms, bsRet) {
if (conformationIndex0 >= 0) {
var nAltLocs=this.altLocCount;
if (nAltLocs > 0) {
var atoms=this.ms.at;
var g=null;
var ch="\u0000";
var conformationIndex=conformationIndex0;
var bsFound=Clazz.new_($I$(5,1));
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var atom=atoms[i];
var altloc=atom.altloc;
if (altloc == "\u0000") continue;
if (atom.group !== g ) {
g=atom.group;
ch="\u0000";
conformationIndex=conformationIndex0;
bsFound.clearAll$();
}if (conformationIndex >= 0 && altloc != ch  && !bsFound.get$I(altloc.$c()) ) {
ch=altloc;
conformationIndex--;
bsFound.set$I(altloc.$c());
}if (conformationIndex >= 0 || altloc != ch ) bsAtoms.clear$I(i);
}
}}if (bsAtoms.nextSetBit$I(0) >= 0) {
bsRet.or$javajs_util_BS(bsAtoms);
if (doSet) for (var j=this.bioPolymerCount; --j >= 0; ) this.bioPolymers[j].setConformation$javajs_util_BS(bsAtoms);

}return true;
});

Clazz.newMeth(C$, 'getDefaultLargePDBRendering$javajs_util_SB$I', function (sb, maxAtoms) {
var bs=Clazz.new_($I$(5,1));
if (this.getBondCount$() == 0) bs=this.bsAtoms;
if (bs !== this.bsAtoms ) for (var i=0; i < this.bioPolymerCount; i++) this.bioPolymers[i].getRange$javajs_util_BS$Z(bs, this.isMutated);

if (bs.nextSetBit$I(0) < 0) return;
var bs2=Clazz.new_($I$(5,1));
if (bs === this.bsAtoms ) {
bs2=bs;
} else {
for (var i=0; i < this.bioPolymerCount; i++) if (this.bioPolymers[i].getType$() == 0) this.bioPolymers[i].getRange$javajs_util_BS$Z(bs2, this.isMutated);

}if (bs2.nextSetBit$I(0) >= 0) sb.append$S("select ").append$S($I$(8).eBS$javajs_util_BS(bs2)).append$S(";backbone only;");
if (this.act <= maxAtoms) return;
sb.append$S("select ").append$S($I$(8).eBS$javajs_util_BS(bs)).append$S(" & connected; wireframe only;");
if (bs !== this.bsAtoms ) {
bs2.clearAll$();
bs2.or$javajs_util_BS(this.bsAtoms);
bs2.andNot$javajs_util_BS(bs);
if (bs2.nextSetBit$I(0) >= 0) sb.append$S("select " + $I$(8).eBS$javajs_util_BS(bs2) + " & !connected;stars 0.5;spacefill off;" );
}});

Clazz.newMeth(C$, 'getFullPDBHeader$', function () {
if (this.modelIndex < 0) return "";
var info=this.auxiliaryInfo.get$O("fileHeader");
if (info != null ) return info;
return this.ms.bioModelset.getBioExt$().getFullPDBHeader$java_util_Map(this.auxiliaryInfo);
});

Clazz.newMeth(C$, 'getPdbData$S$C$Z$javajs_util_BS$javajs_util_OC$org_jmol_modelset_LabelTokenA$javajs_util_SB$javajs_util_BS', function (type, ctype, isDraw, bsSelected, out, tokens, pdbCONECT, bsWritten) {
this.ms.bioModelset.getBioExt$().getPdbDataM$org_jmol_modelsetbio_BioModel$org_jmol_viewer_Viewer$S$C$Z$javajs_util_BS$javajs_util_OC$org_jmol_modelset_LabelTokenA$javajs_util_SB$javajs_util_BS(this, this.vwr, type, ctype, isDraw, bsSelected, out, tokens, pdbCONECT, bsWritten);
});

Clazz.newMeth(C$, 'getRasmolHydrogenBonds$javajs_util_BS$javajs_util_BS$javajs_util_Lst$Z$I$Z$javajs_util_BS$I', function (bsA, bsB, vHBonds, nucleicOnly, nMax, dsspIgnoreHydrogens, bsHBonds, version) {
var doAdd=(vHBonds == null );
if (doAdd) vHBonds=Clazz.new_($I$(6,1));
if (nMax < 0) nMax=2147483647;
var asDSSX=(bsB == null );
var bp;
var bp1;
if (asDSSX && this.bioPolymerCount > 0 ) {
p$1.calculateDssx$javajs_util_Lst$Z$Z$Z$I.apply(this, [vHBonds, false, dsspIgnoreHydrogens, false, version]);
} else {
for (var i=this.bioPolymerCount; --i >= 0; ) {
bp=this.bioPolymers[i];
if (bp.monomerCount == 0) continue;
var type=bp.getType$();
var isRNA=false;
switch (type) {
case 1:
if (nucleicOnly) continue;
bp.calcRasmolHydrogenBonds$org_jmol_modelsetbio_BioPolymer$javajs_util_BS$javajs_util_BS$javajs_util_Lst$I$IAAA$Z$Z(null, bsA, bsB, vHBonds, nMax, null, true, false);
break;
case 2:
isRNA=bp.monomers[0].isRna$();
break;
default:
continue;
}
for (var j=this.bioPolymerCount; --j >= 0; ) {
if ((bp1=this.bioPolymers[j]) != null  && (isRNA || i != j )  && type == bp1.getType$() ) {
bp1.calcRasmolHydrogenBonds$org_jmol_modelsetbio_BioPolymer$javajs_util_BS$javajs_util_BS$javajs_util_Lst$I$IAAA$Z$Z(bp, bsA, bsB, vHBonds, nMax, null, true, false);
}}
}
}if (vHBonds.size$() == 0 || !doAdd ) return;
this.hasRasmolHBonds=true;
for (var i=0; i < vHBonds.size$(); i++) {
var bond=vHBonds.get$I(i);
var atom1=bond.atom1;
var atom2=bond.atom2;
if (atom1.isBonded$org_jmol_modelset_Atom(atom2)) continue;
var index=this.ms.addHBond$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$F(atom1, atom2, bond.order, bond.getEnergy$());
if (bsHBonds != null ) bsHBonds.set$I(index);
}
});

Clazz.newMeth(C$, 'getUnitID$org_jmol_modelset_Atom$I', function (atom, flags) {
var sb=Clazz.new_($I$(9,1));
var m=atom.group;
var noTrim=((flags & 16) != 16);
var ch=((flags & 8) == 8 ? m.getInsertionCode$() : "\u0000");
var isAll=(ch != "\u0000");
if ((flags & 1) == 1 && (this.pdbID != null ) ) sb.append$S(this.pdbID);
sb.append$S("|").appendO$O(this.ms.getInfo$I$S(this.modelIndex, "modelNumber")).append$S("|").append$S(this.vwr.getChainIDStr$I(m.chain.chainID)).append$S("|").append$S(m.getGroup3$()).append$S("|").appendI$I(m.getResno$());
if ((flags & 4) == 4) {
sb.append$S("|").append$S(atom.getAtomName$());
if (atom.altloc != "\u0000") sb.append$S("|").appendC$C(atom.altloc);
 else if (noTrim || isAll ) sb.append$S("|");
} else if (noTrim || isAll ) {
sb.append$S("||");
}if (isAll) sb.append$S("|").appendC$C(ch);
 else if (noTrim) sb.append$S("|");
if (noTrim) sb.append$S("|");
return sb.toString();
});

Clazz.newMeth(C$, 'recalculateLeadMidpointsAndWingVectors$', function () {
for (var ip=0; ip < this.bioPolymerCount; ip++) this.bioPolymers[ip].recalculateLeadMidpointsAndWingVectors$();

});

Clazz.newMeth(C$, 'resetRasmolBonds$javajs_util_BS$I', function (bs, dsspVersion) {
var bsDelete=Clazz.new_($I$(5,1));
this.hasRasmolHBonds=false;
var am=this.ms.am;
var bo=this.ms.bo;
for (var i=this.ms.bondCount; --i >= 0; ) {
var bond=bo[i];
if ((bond.order & 28672) != 0 && am[bond.atom1.mi].trajectoryBaseIndex == this.modelIndex ) bsDelete.set$I(i);
}
if (bsDelete.nextSetBit$I(0) >= 0) this.ms.deleteBonds$javajs_util_BS$Z(bsDelete, false);
this.getRasmolHydrogenBonds$javajs_util_BS$javajs_util_BS$javajs_util_Lst$Z$I$Z$javajs_util_BS$I(bs, bs, null, false, 2147483647, false, null, dsspVersion);
});

Clazz.newMeth(C$, 'getAtomicDSSRData$FA$S', function (dssrData, dataType) {
if (this.auxiliaryInfo.containsKey$O("dssr")) this.vwr.getAnnotationParser$Z(true).getAtomicDSSRData$org_jmol_modelset_ModelSet$I$FA$S(this.ms, this.modelIndex, dssrData, dataType);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
