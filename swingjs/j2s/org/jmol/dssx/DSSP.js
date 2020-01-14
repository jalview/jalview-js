(function(){var P$=Clazz.newPackage("org.jmol.dssx"),p$1={},I$=[[0,'javajs.util.BS','javajs.util.SB','org.jmol.viewer.Viewer','org.jmol.i18n.GT','javajs.util.Lst','java.util.Hashtable','javajs.util.AU','org.jmol.util.Logger','org.jmol.dssx.Bridge','Boolean','org.jmol.modelset.HBond','org.jmol.c.STR','javajs.util.PT','org.jmol.util.Escape']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DSSP");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bioPolymers=null;
this.vHBonds=null;
this.done=null;
this.doReport=false;
this.dsspIgnoreHydrogens=false;
this.setStructure=false;
this.labels=null;
this.bsBad=null;
this.bioPolymerCount=0;
this.htBridges=null;
this.htLadders=null;
this.bridgesA=null;
this.bridgesP=null;
this.isDSSP2=false;
this.sheetOffsets=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sheetOffsets=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [0, -1, 1, 0, 1, 0, 0, -1]), Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0, 1, -1, 1, -1])]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'calculateDssp$OA$I$O$Z$Z$Z$I', function (objBioPolymers, bioPolymerCount, objVHBonds, doReport, dsspIgnoreHydrogens, setStructure, version) {
this.bioPolymers=objBioPolymers;
this.bioPolymerCount=bioPolymerCount;
this.vHBonds=objVHBonds;
this.doReport=doReport;
this.dsspIgnoreHydrogens=dsspIgnoreHydrogens;
this.setStructure=setStructure;
this.isDSSP2=(version > 1);
var bsAmino=Clazz.new_($I$(1));
for (var i=0; i < bioPolymerCount; i++) if (Clazz.instanceOf(this.bioPolymers[i], "org.jmol.modelsetbio.AminoPolymer")) bsAmino.set$I(i);

if (bsAmino.isEmpty$()) return "";
var m=this.bioPolymers[0].model;
var sb=Clazz.new_($I$(2));
sb.append$S("Jmol ").append$S($I$(3).getJmolVersion$()).append$S(" DSSP analysis for model ").append$S(m.ms.getModelNumberDotted$I(m.modelIndex)).append$S(" - ").append$S(m.ms.getModelTitle$I(m.modelIndex)).append$S("\n");
if (m.modelIndex == 0) sb.append$S("\nW. Kabsch and C. Sander, Biopolymers, vol 22, 1983, pp 2577-2637\n\nWe thank Wolfgang Kabsch and Chris Sander for writing the DSSP software,\nand we thank the CMBI for maintaining it to the extent that it was easy to\nre-engineer in Java for our purposes. \n\nSecond generation DSSP 2.0 is ").append$S(this.isDSSP2 ? "" : "NOT ").append$S("used in this analysis. See Int. J. Mol. Sci. 2014, 15, 7841-7864; doi:10.3390/ijms15057841.\n");
if (setStructure && m.modelIndex == 0 ) sb.append$S("\nAll bioshapes have been deleted and must be regenerated.\n");
if (m.altLocCount > 0) sb.append$S("\nNote: This model contains alternative locations. Use  \'CONFIGURATION 1\' to be consistent with CMBI DSSP.\n");
this.labels=Clazz.array(Character.TYPE, [bioPolymerCount, null]);
this.done=Clazz.array($I$(1), [bioPolymerCount]);
this.bsBad=Clazz.new_($I$(1));
var haveWarned=false;
for (var i=bsAmino.nextSetBit$I(0); i >= 0; i=bsAmino.nextSetBit$I(i + 1)) {
var ap=this.bioPolymers[i];
if (!haveWarned && (ap.monomers[0]).getExplicitNH$() != null  ) {
if (dsspIgnoreHydrogens) sb.append$S($I$(4).o$S$O($I$(4).$$S("NOTE: Backbone amide hydrogen positions are present and will be ignored. Their positions will be approximated, as in standard DSSP analysis.\nUse {0} to not use this approximation.\n\n"), "SET dsspCalculateHydrogenAlways FALSE"));
 else sb.append$S($I$(4).o$S$O($I$(4).$$S("NOTE: Backbone amide hydrogen positions are present and will be used. Results may differ significantly from standard DSSP analysis.\nUse {0} to ignore these hydrogen positions.\n\n"), "SET dsspCalculateHydrogenAlways TRUE"));
haveWarned=true;
}ap.recalculateLeadMidpointsAndWingVectors$();
var n=ap.monomerCount;
this.labels[i]=Clazz.array(Character.TYPE, [n]);
this.done[i]=Clazz.new_($I$(1));
for (var j=0; j < n; j++) if ((ap.monomers[j]).getCarbonylOxygenAtom$() == null ) this.bsBad.set$I(ap.monomers[j].leadAtomIndex);

}
var min=p$1.getDualHydrogenBondArray.apply(this, []);
this.bridgesA=Clazz.new_($I$(5));
this.bridgesP=Clazz.new_($I$(5));
this.htBridges=Clazz.new_($I$(6));
this.htLadders=Clazz.new_($I$(6));
p$1.getBridges$IAAAA.apply(this, [min]);
p$1.getSheetStructures.apply(this, []);
var reports=Clazz.array(String, [bioPolymerCount]);
for (var i=bsAmino.nextSetBit$I(0); i >= 0; i=bsAmino.nextSetBit$I(i + 1)) if (min[i] != null ) reports[i]=p$1.findHelixes$I$IAAA.apply(this, [i, min[i]]);

if (doReport) {
var sbSummary=Clazz.new_($I$(2));
sb.append$S("\n------------------------------\n");
for (var i=bsAmino.nextSetBit$I(0); i >= 0; i=bsAmino.nextSetBit$I(i + 1)) if (this.labels[i] != null ) {
var ap=this.bioPolymers[i];
sbSummary.append$S(p$1.dumpSummary$org_jmol_modelsetbio_AminoPolymer$CA.apply(this, [ap, this.labels[i]]));
sb.append$S(reports[i]).append$S(p$1.dumpTags$org_jmol_modelsetbio_AminoPolymer$S$javajs_util_BS$I.apply(this, [ap, "$.1: " + String.valueOf$CA(this.labels[i]), this.bsBad, 2]));
}
if (this.bsBad.nextSetBit$I(0) >= 0) sb.append$S("\nNOTE: \'!\' indicates a residue that is missing a backbone carbonyl oxygen atom.\n");
sb.append$S("\n").append$S("SUMMARY:" + sbSummary);
}return sb.toString();
});

Clazz.newMeth(C$, 'getDualHydrogenBondArray', function () {
var min=$I$(7).newInt4$I(this.bioPolymerCount);
for (var i=0; i < this.bioPolymerCount; i++) {
if (!(Clazz.instanceOf(this.bioPolymers[i], "org.jmol.modelsetbio.AminoPolymer"))) continue;
var n=this.bioPolymers[i].monomerCount;
min[i]=Clazz.array(Integer.TYPE, [n, 2, 3]);
for (var j=0; j < n; ++j) {
min[i][j][0][1]=min[i][j][1][1]=-2147483648;
min[i][j][0][2]=min[i][j][1][2]=0;
}
}
for (var i=0; i < this.bioPolymerCount; i++) if (min[i] != null ) for (var j=0; j < this.bioPolymerCount; j++) if (min[j] != null ) this.bioPolymers[i].calcRasmolHydrogenBonds$org_jmol_modelsetbio_BioPolymer$javajs_util_BS$javajs_util_BS$javajs_util_Lst$I$IAAA$Z$Z(this.bioPolymers[j], null, null, null, 2, min[i], false, this.dsspIgnoreHydrogens);


return min;
}, p$1);

Clazz.newMeth(C$, 'getBridges$IAAAA', function (min) {
var atoms=this.bioPolymers[0].model.ms.at;
var bridge=null;
var htTemp=Clazz.new_($I$(6));
for (var p1=0; p1 < min.length; p1++) if (Clazz.instanceOf(this.bioPolymers[p1], "org.jmol.modelsetbio.AminoPolymer")) {
var ap1=(this.bioPolymers[p1]);
var n=min[p1].length - 1;
for (var a=1; a < n; a++) {
var ia=ap1.monomers[a].leadAtomIndex;
if (this.bsBad.get$I(ia)) continue;
for (var p2=p1; p2 < min.length; p2++) if (Clazz.instanceOf(this.bioPolymers[p2], "org.jmol.modelsetbio.AminoPolymer")) for (var b=(p1 == p2 ? a + 3 : 1); b < min[p2].length - 1; b++) {
var ap2=this.bioPolymers[p2];
var ib=ap2.monomers[b].leadAtomIndex;
if (this.bsBad.get$I(ib)) continue;
if ((bridge=p$1.getBridge$IAAAA$I$I$I$I$javajs_util_Lst$org_jmol_modelset_Atom$org_jmol_modelset_Atom$org_jmol_modelsetbio_AminoPolymer$org_jmol_modelsetbio_AminoPolymer$java_util_Map$Z.apply(this, [min, p1, a, p2, b, this.bridgesP, atoms[ia], atoms[ib], ap1, ap2, htTemp, false])) != null ) {
} else if ((bridge=p$1.getBridge$IAAAA$I$I$I$I$javajs_util_Lst$org_jmol_modelset_Atom$org_jmol_modelset_Atom$org_jmol_modelsetbio_AminoPolymer$org_jmol_modelsetbio_AminoPolymer$java_util_Map$Z.apply(this, [min, p1, a, p2, b, this.bridgesA, atoms[ia], atoms[ib], ap1, ap2, htTemp, true])) != null ) {
bridge.isAntiparallel=true;
} else {
continue;
}if ($I$(8).debugging) $I$(8).debug$S("Bridge found " + bridge);
this.done[p1].set$I(a);
this.done[p2].set$I(b);
this.htBridges.put$TK$TV(ia + "-" + ib , bridge);
}

}
}
}, p$1);

Clazz.newMeth(C$, 'getBridge$IAAAA$I$I$I$I$javajs_util_Lst$org_jmol_modelset_Atom$org_jmol_modelset_Atom$org_jmol_modelsetbio_AminoPolymer$org_jmol_modelsetbio_AminoPolymer$java_util_Map$Z', function (min, p1, a, p2, b, bridges, atom1, atom2, ap1, ap2, htTemp, isAntiparallel) {
var b1=null;
var b2=null;
var ipt=0;
var offsets=(isAntiparallel ? this.sheetOffsets[1] : this.sheetOffsets[0]);
if ((b1=p$1.isHbonded$I$I$I$I$IAAAA.apply(this, [a + offsets[0], b + offsets[1], p1, p2, min])) != null  && (b2=p$1.isHbonded$I$I$I$I$IAAAA.apply(this, [b + offsets[2], a + offsets[3], p2, p1, min])) != null   || (b1=p$1.isHbonded$I$I$I$I$IAAAA.apply(this, [a + offsets[ipt=4], b + offsets[5], p1, p2, min])) != null  && (b2=p$1.isHbonded$I$I$I$I$IAAAA.apply(this, [b + offsets[6], a + offsets[7], p2, p1, min])) != null   ) {
var bridge=Clazz.new_($I$(9).c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$java_util_Map,[atom1, atom2, this.htLadders]);
bridges.addLast$TV(bridge);
if (this.vHBonds != null ) {
var type=(isAntiparallel ? 14336 : 6144);
p$1.addHbond$org_jmol_modelsetbio_Monomer$org_jmol_modelsetbio_Monomer$I$I$java_util_Map.apply(this, [ap1.monomers[a + offsets[ipt]], ap2.monomers[b + offsets[++ipt]], b1[2], type, htTemp]);
p$1.addHbond$org_jmol_modelsetbio_Monomer$org_jmol_modelsetbio_Monomer$I$I$java_util_Map.apply(this, [ap2.monomers[b + offsets[++ipt]], ap1.monomers[a + offsets[++ipt]], b2[2], type, htTemp]);
}return bridge;
}return null;
}, p$1);

Clazz.newMeth(C$, 'addHbond$org_jmol_modelsetbio_Monomer$org_jmol_modelsetbio_Monomer$I$I$java_util_Map', function (donor, acceptor, iEnergy, type, htTemp) {
var nitrogen=(donor).getNitrogenAtom$();
var oxygen=(acceptor).getCarbonylOxygenAtom$();
if (htTemp != null ) {
var key=nitrogen.i + " " + oxygen.i ;
if (htTemp.containsKey$O(key)) return;
htTemp.put$TK$TV(key, $I$(10).TRUE);
}this.vHBonds.addLast$TV(Clazz.new_($I$(11).c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$H$F,[nitrogen, oxygen, type, 1, 0, iEnergy / 1000.0]));
}, p$1);

Clazz.newMeth(C$, 'getSheetStructures', function () {
if (this.bridgesA.size$() == 0 && this.bridgesP.size$() == 0 ) return;
p$1.createLadders$javajs_util_Lst$Z.apply(this, [this.bridgesA, true]);
p$1.createLadders$javajs_util_Lst$Z.apply(this, [this.bridgesP, false]);
var bsEEE=Clazz.new_($I$(1));
var bsB=Clazz.new_($I$(1));
for (var ladder, $ladder = this.htLadders.keySet$().iterator$(); $ladder.hasNext$()&&((ladder=($ladder.next$())),1);) {
if (ladder[0][0] == ladder[0][1] && ladder[1][0] == ladder[1][1] ) {
bsB.set$I(ladder[0][0]);
bsB.set$I(ladder[1][0]);
} else {
bsEEE.setBits$I$I(ladder[0][0], ladder[0][1] + 1);
bsEEE.setBits$I$I(ladder[1][0], ladder[1][1] + 1);
}}
var bsSheet=Clazz.new_($I$(1));
var bsBridge=Clazz.new_($I$(1));
for (var i=this.bioPolymers.length; --i >= 0; ) {
if (!(Clazz.instanceOf(this.bioPolymers[i], "org.jmol.modelsetbio.AminoPolymer"))) continue;
bsSheet.clearAll$();
bsBridge.clearAll$();
var ap=this.bioPolymers[i];
for (var iStart=0; iStart < ap.monomerCount; ) {
var index=ap.monomers[iStart].leadAtomIndex;
if (bsEEE.get$I(index)) {
var iEnd=iStart + 1;
while (iEnd < ap.monomerCount && bsEEE.get$I(ap.monomers[iEnd].leadAtomIndex) )iEnd++;

bsSheet.setBits$I$I(iStart, iEnd);
iStart=iEnd;
} else {
if (bsB.get$I(index)) bsBridge.set$I(iStart);
++iStart;
}}
if (this.doReport) {
p$1.setTag$CA$javajs_util_BS$C.apply(this, [this.labels[i], bsBridge, "B"]);
p$1.setTag$CA$javajs_util_BS$C.apply(this, [this.labels[i], bsSheet, "E"]);
}if (this.setStructure) {
ap.setStructureBS$I$I$org_jmol_c_STR$javajs_util_BS$Z(0, 3, $I$(12).SHEET, bsSheet, false);
}this.done[i].or$javajs_util_BS(bsSheet);
this.done[i].or$javajs_util_BS(bsBridge);
}
}, p$1);

Clazz.newMeth(C$, 'createLadders$javajs_util_Lst$Z', function (bridges, isAntiparallel) {
var dir=(isAntiparallel ? -1 : 1);
var n=bridges.size$();
for (var i=0; i < n; i++) p$1.checkBridge$org_jmol_dssx_Bridge$Z$I$I.apply(this, [bridges.get$I(i), isAntiparallel, 1, dir]);

for (var i=0; i < n; i++) p$1.checkBulge$org_jmol_dssx_Bridge$Z$I.apply(this, [bridges.get$I(i), isAntiparallel, 1]);

}, p$1);

Clazz.newMeth(C$, 'checkBridge$org_jmol_dssx_Bridge$Z$I$I', function (bridge, isAntiparallel, n1, n2) {
var b=this.htBridges.get$O(bridge.a.getOffsetResidueAtom$S$I("\u0000", n1) + "-" + bridge.b.getOffsetResidueAtom$S$I("\u0000", n2) );
return (b != null  && bridge.addBridge$org_jmol_dssx_Bridge$java_util_Map(b, this.htLadders) );
}, p$1);

Clazz.newMeth(C$, 'checkBulge$org_jmol_dssx_Bridge$Z$I', function (bridge, isAntiparallel, dir) {
var dir1=(isAntiparallel ? -1 : 1);
for (var i=0; i < 3; i++) for (var j=(i == 0 ? 1 : 0); j < 6; j++) {
p$1.checkBridge$org_jmol_dssx_Bridge$Z$I$I.apply(this, [bridge, isAntiparallel, i * dir, j * dir1]);
if (j > i) p$1.checkBridge$org_jmol_dssx_Bridge$Z$I$I.apply(this, [bridge, isAntiparallel, j * dir, i * dir1]);
}

}, p$1);

Clazz.newMeth(C$, 'dumpSummary$org_jmol_modelsetbio_AminoPolymer$CA', function (ap, labels) {
var a=ap.monomers[0].getLeadAtom$();
var id=a.getChainID$();
var prefix=(id == 0 ? "" : a.getChainIDStr$() + ":");
var sb=Clazz.new_($I$(2));
var lastChar="\u0000";
var insCode1="\u0000";
var insCode2="\u0000";
var firstResno=-1;
var lastResno=-1;
var n=ap.monomerCount;
var m=ap.monomers;
for (var i=0; i <= n; i++) {
if (i == n || labels[i] != lastChar ) {
if (lastChar != "\u0000") sb.appendC$C("\n").appendC$C(lastChar).append$S(" : ").append$S(prefix).appendI$I(firstResno).append$S(insCode1 == "\u0000" ? "" : String.valueOf$C(insCode1)).append$S("_").append$S(prefix).appendI$I(lastResno).append$S(insCode2 == "\u0000" ? "" : String.valueOf$C(insCode2));
if (i == n) break;
lastChar=labels[i];
firstResno=m[i].getResno$();
insCode1=m[i].getInsertionCode$();
}lastResno=m[i].getResno$();
insCode2=m[i].getInsertionCode$();
}
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'dumpTags$org_jmol_modelsetbio_AminoPolymer$S$javajs_util_BS$I', function (ap, lines, bsBad, mode) {
var prefix=ap.monomers[0].getLeadAtom$().getChainID$() + "." + (ap.bioPolymerIndexInModel + 1) ;
lines=$I$(13).rep$S$S$S(lines, "$", prefix);
var iFirst=ap.monomers[0].getResno$();
var pre="\n" + prefix;
var sb=Clazz.new_($I$(2));
var sb0=Clazz.new_($I$(2)).append$S(pre + ".8: ");
var sb1=Clazz.new_($I$(2)).append$S(pre + ".7: ");
var sb2=Clazz.new_($I$(2)).append$S(pre + ".6: ");
var sb3=Clazz.new_($I$(2)).append$S(pre + ".0: ");
var i=iFirst;
var n=ap.monomerCount;
for (var ii=0; ii < n; ii++) {
i=ap.monomers[ii].getResno$();
sb0.append$S(i % 100 == 0 ? "" + (((i/100|0)) % 100) : " ");
sb1.append$S(i % 10 == 0 ? "" + (((i/10|0)) % 10) : " ");
sb2.appendI$I(i % 10);
sb3.appendC$C(bsBad.get$I(ap.monomers[ii].leadAtomIndex) ? "!" : ap.monomers[ii].getGroup1$());
}
if ((mode & 1) == 1) sb.appendSB$javajs_util_SB(sb0).appendSB$javajs_util_SB(sb1).appendSB$javajs_util_SB(sb2);
sb.append$S("\n");
sb.append$S(lines);
if ((mode & 2) == 2) {
sb.appendSB$javajs_util_SB(sb3);
sb.append$S("\n\n");
}return sb.toString().replace$C$C("\u0000", ".");
}, p$1);

Clazz.newMeth(C$, 'isHbonded$I$I$I$I$IAAAA', function (indexDonor, indexAcceptor, pDonor, pAcceptor, min) {
if (indexDonor < 0 || indexAcceptor < 0 ) return null;
var min1=min[pDonor];
var min2=min[pAcceptor];
if (indexDonor >= min1.length || indexAcceptor >= min2.length ) return null;
return (min1[indexDonor][0][0] == pAcceptor && min1[indexDonor][0][1] == indexAcceptor  ? min1[indexDonor][0] : min1[indexDonor][1][0] == pAcceptor && min1[indexDonor][1][1] == indexAcceptor  ? min1[indexDonor][1] : null);
}, p$1);

Clazz.newMeth(C$, 'findHelixes$I$IAAA', function (iPolymer, min) {
var ap=this.bioPolymers[iPolymer];
if ($I$(8).debugging) for (var j=0; j < ap.monomerCount; j++) $I$(8).debug$S(iPolymer + "." + ap.monomers[j].getResno$() + "\t" + $I$(14).e$O(min[j]) );

var bsTurn=Clazz.new_($I$(1));
var line3;
var line4;
var line5;
if (this.isDSSP2) {
line5=p$1.findHelixes2$I$I$I$IAAA$org_jmol_c_STR$I$javajs_util_BS$Z.apply(this, [0, iPolymer, 5, min, $I$(12).HELIXPI, 12288, bsTurn, true]);
line4=p$1.findHelixes2$I$I$I$IAAA$org_jmol_c_STR$I$javajs_util_BS$Z.apply(this, [2, iPolymer, 4, min, $I$(12).HELIXALPHA, 10240, bsTurn, false]);
line3=p$1.findHelixes2$I$I$I$IAAA$org_jmol_c_STR$I$javajs_util_BS$Z.apply(this, [4, iPolymer, 3, min, $I$(12).HELIX310, 8192, bsTurn, false]);
} else {
line4=p$1.findHelixes2$I$I$I$IAAA$org_jmol_c_STR$I$javajs_util_BS$Z.apply(this, [2, iPolymer, 4, min, $I$(12).HELIXALPHA, 10240, bsTurn, true]);
line3=p$1.findHelixes2$I$I$I$IAAA$org_jmol_c_STR$I$javajs_util_BS$Z.apply(this, [4, iPolymer, 3, min, $I$(12).HELIX310, 8192, bsTurn, false]);
line5=p$1.findHelixes2$I$I$I$IAAA$org_jmol_c_STR$I$javajs_util_BS$Z.apply(this, [0, iPolymer, 5, min, $I$(12).HELIXPI, 12288, bsTurn, false]);
}if (this.setStructure) ap.setStructureBS$I$I$org_jmol_c_STR$javajs_util_BS$Z(0, 6, $I$(12).TURN, bsTurn, false);
if (this.doReport) {
p$1.setTag$CA$javajs_util_BS$C.apply(this, [this.labels[iPolymer], bsTurn, "T"]);
return p$1.dumpTags$org_jmol_modelsetbio_AminoPolymer$S$javajs_util_BS$I.apply(this, [ap, "$.5: " + line5 + "\n" + "$.4: " + line4 + "\n" + "$.3: " + line3 , this.bsBad, 1]);
}return "";
}, p$1);

Clazz.newMeth(C$, 'findHelixes2$I$I$I$IAAA$org_jmol_c_STR$I$javajs_util_BS$Z', function (mmtfType, iPolymer, pitch, min, subtype, type, bsTurn, isFirst) {
var ap=this.bioPolymers[iPolymer];
var bsStart=Clazz.new_($I$(1));
var bsNNN=Clazz.new_($I$(1));
var bsX=Clazz.new_($I$(1));
var bsStop=Clazz.new_($I$(1));
var bsHelix=Clazz.new_($I$(1));
var bsDone=this.done[iPolymer];
var warning="";
var n=ap.monomerCount;
for (var i=pitch; i < n; ++i) {
var i0=i - pitch;
var bpt=0;
if (min[i][0][0] == iPolymer && min[i][0][1] == i0  || min[i][bpt=1][0] == iPolymer && min[i][1][1] == i0  ) {
var ia=ap.monomers[i0].leadAtomIndex;
var ipt=this.bsBad.nextSetBit$I(ia);
var m=ap.monomers[i];
if (ipt >= ia && ipt <= m.leadAtomIndex ) continue;
bsStart.set$I(i0);
bsNNN.setBits$I$I(i0 + 1, i);
bsStop.set$I(i);
ipt=bsDone.nextSetBit$I(i0);
var isClear=(ipt < 0 || ipt >= i );
var addH=false;
if (i0 > 0 && bsStart.get$I(i0 - 1)  && (isFirst || isClear ) ) {
bsHelix.setBits$I$I(i0, i);
if (!isClear) warning += "  WARNING! Bridge to helix at " + ap.monomers[ipt];
addH=true;
} else if (isClear || bsDone.nextClearBit$I(ipt) < i ) {
addH=true;
}if (bsStop.get$I(i0)) bsX.set$I(i0);
if (addH && this.vHBonds != null  ) {
p$1.addHbond$org_jmol_modelsetbio_Monomer$org_jmol_modelsetbio_Monomer$I$I$java_util_Map.apply(this, [m, ap.monomers[i0], min[i][bpt][2], type, null]);
}}}
var taglines;
if (this.doReport) {
taglines=Clazz.array(Character.TYPE, [n]);
p$1.setTag$CA$javajs_util_BS$C.apply(this, [taglines, bsNNN, String.fromCharCode((48 + pitch))]);
p$1.setTag$CA$javajs_util_BS$C.apply(this, [taglines, bsStart, ">"]);
p$1.setTag$CA$javajs_util_BS$C.apply(this, [taglines, bsStop, "<"]);
p$1.setTag$CA$javajs_util_BS$C.apply(this, [taglines, bsX, "X"]);
} else {
taglines=null;
}bsDone.or$javajs_util_BS(bsHelix);
bsNNN.andNot$javajs_util_BS(bsDone);
bsTurn.or$javajs_util_BS(bsNNN);
bsTurn.andNot$javajs_util_BS(bsHelix);
if (this.setStructure) ap.setStructureBS$I$I$org_jmol_c_STR$javajs_util_BS$Z(0, mmtfType, subtype, bsHelix, false);
if (this.doReport) {
p$1.setTag$CA$javajs_util_BS$C.apply(this, [this.labels[iPolymer], bsHelix, String.fromCharCode((68 + pitch))]);
return String.valueOf$CA(taglines) + warning;
}return "";
}, p$1);

Clazz.newMeth(C$, 'setTag$CA$javajs_util_BS$C', function (tags, bs, ch) {
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) tags[i]=ch;

}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
