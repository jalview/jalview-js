(function(){var P$=Clazz.newPackage("org.jmol.scriptext"),I$=[[0,'javajs.util.Lst','javajs.util.M4','javajs.util.P3','org.jmol.util.Logger','org.jmol.api.Interface','javajs.util.Measure','javajs.util.BS','javajs.util.AU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SmilesExt");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.e=null;
this.sm=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'init$O', function (se) {
this.e=se;
this.sm=this.e.vwr.getSmilesMatcher$();
return this;
});

Clazz.newMeth(C$, 'getSmilesCorrelation$javajs_util_BS$javajs_util_BS$S$javajs_util_Lst$javajs_util_Lst$javajs_util_M4$javajs_util_Lst$Z$IAA$javajs_util_P3$Z$I', function (bsA, bsB, smiles, ptsA, ptsB, m4, vReturn, asMap, mapSet, center, bestMap, flags) {
var tolerance=(mapSet == null  ? 0.1 : 3.4028235E38);
try {
if (ptsA == null ) {
ptsA=Clazz.new_($I$(1));
ptsB=Clazz.new_($I$(1));
}var m=Clazz.new_($I$(2));
var c=Clazz.new_($I$(3));
var atoms=this.e.vwr.ms.at;
var ac=this.e.vwr.ms.ac;
var maps=this.sm.getCorrelationMaps$S$org_jmol_util_NodeA$I$javajs_util_BS$I(smiles, atoms, ac, bsA, flags | 8);
if (maps == null ) this.e.evalError$S$S(this.sm.getLastException$(), null);
if (maps.length == 0) return NaN;
var mapFirst=maps[0];
for (var i=0; i < mapFirst.length; i++) ptsA.addLast$TV(atoms[mapFirst[i]]);

maps=this.sm.getCorrelationMaps$S$org_jmol_util_NodeA$I$javajs_util_BS$I(smiles, atoms, ac, bsB, flags);
if (maps == null ) this.e.evalError$S$S(this.sm.getLastException$(), null);
if (maps.length == 0) return NaN;
$I$(4).info$S(maps.length + " mappings found");
if (bestMap || !asMap ) {
var lowestStdDev=3.4028235E38;
var mapBest=null;
for (var i=0; i < maps.length; i++) {
ptsB.clear$();
for (var j=0; j < maps[i].length; j++) ptsB.addLast$TV(atoms[maps[i][j]]);

$I$(5).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.Eigen", this.e.vwr, "script");
var stddev=(ptsB.size$() == 1 ? 0 : $I$(6).getTransformMatrix4$javajs_util_Lst$javajs_util_Lst$javajs_util_M4$javajs_util_P3(ptsA, ptsB, m, null));
$I$(4).info$S("getSmilesCorrelation stddev=" + new Float(stddev).toString());
if (vReturn != null ) {
if (stddev < tolerance ) {
var bs=Clazz.new_($I$(7));
for (var j=0; j < maps[i].length; j++) bs.set$I(maps[i][j]);

vReturn.addLast$TV(bs);
}}if (stddev < lowestStdDev ) {
mapBest=maps[i];
if (m4 != null ) m4.setM4$javajs_util_M4(m);
if (center != null ) center.setT$javajs_util_T3(c);
lowestStdDev=stddev;
}}
if (mapSet != null ) {
mapSet[0]=mapFirst;
mapSet[1]=mapBest;
}ptsB.clear$();
for (var i=0; i < mapBest.length; i++) ptsB.addLast$TV(atoms[mapBest[i]]);

return lowestStdDev;
}for (var i=0; i < maps.length; i++) for (var j=0; j < maps[i].length; j++) ptsB.addLast$TV(atoms[maps[i][j]]);


} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.e.evalError$S$S(ex.getMessage$(), null);
} else {
throw ex;
}
}
return 0;
});

Clazz.newMeth(C$, 'getSmilesMatches$S$S$javajs_util_BS$javajs_util_BS$I$Z$Z', function (pattern, smiles, bsSelected, bsMatch3D, flags, asOneBitset, firstMatchOnly) {
if (pattern.length$() == 0 || pattern.endsWith$S("///")  || pattern.equals$O("H")  || pattern.equals$O("top")  || pattern.equalsIgnoreCase$S("NOAROMATIC") ) {
try {
return this.e.vwr.getSmilesOpt$javajs_util_BS$I$I$I$S(bsSelected, 0, 0, flags | (pattern.equals$O("H") ? 4096 : 0) | (pattern.equals$O("top") ? 8192 : 0) | (pattern.equalsIgnoreCase$S("NOAROMATIC") ? 16 : 0) , (pattern.endsWith$S("///") ? pattern : null));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.e.evalError$S$S(ex.getMessage$(), null);
} else {
throw ex;
}
}
}var b;
if (bsMatch3D == null ) {
var isSmarts=((flags & 2) == 2);
var isOK=true;
try {
if (smiles == null ) {
b=this.e.vwr.getSubstructureSetArray$S$javajs_util_BS$I(pattern, bsSelected, flags);
} else if (pattern.equals$O("chirality")) {
return this.e.vwr.calculateChiralityForSmiles$S(smiles);
} else {
var map=this.sm.find$S$S$I(pattern, smiles, (isSmarts ? 2 : 1) | (firstMatchOnly ? 8 : 0));
if (!asOneBitset) return (!firstMatchOnly ? map : map.length == 0 ? Clazz.array(Integer.TYPE, [0]) : map[0]);
var bs=Clazz.new_($I$(7));
for (var j=0; j < map.length; j++) {
var a=map[j];
for (var k=a.length; --k >= 0; ) if (a[k] >= 0) bs.set$I(a[k]);

}
if (!isSmarts) return Clazz.array(Integer.TYPE, [bs.cardinality$()]);
var iarray=Clazz.array(Integer.TYPE, [bs.cardinality$()]);
var pt=0;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) iarray[pt++]=i;

return iarray;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.e.evalError$S$S(ex.getMessage$(), null);
return null;
} else {
throw ex;
}
}
} else {
var vReturn=Clazz.new_($I$(1));
var stddev=this.getSmilesCorrelation$javajs_util_BS$javajs_util_BS$S$javajs_util_Lst$javajs_util_Lst$javajs_util_M4$javajs_util_Lst$Z$IAA$javajs_util_P3$Z$I(bsMatch3D, bsSelected, pattern, null, null, null, vReturn, false, null, null, false, flags);
if (Float.isNaN$F(stddev)) return (asOneBitset ? Clazz.new_($I$(7)) : Clazz.array(String, -1, []));
this.e.showString$S("RMSD " + new Float(stddev).toString() + " Angstroms" );
b=vReturn.toArray$TTA(Clazz.array($I$(7), [vReturn.size$()]));
}if (asOneBitset) {
var bs=Clazz.new_($I$(7));
for (var j=0; j < b.length; j++) bs.or$javajs_util_BS(b[j]);

return bs;
}var list=Clazz.new_($I$(1));
for (var j=0; j < b.length; j++) list.addLast$TV(b[j]);

return list;
});

Clazz.newMeth(C$, 'getFlexFitList$javajs_util_BS$javajs_util_BS$S$Z', function (bs1, bs2, smiles1, isSmarts) {
var mapSet=$I$(8).newInt2$I(2);
this.getSmilesCorrelation$javajs_util_BS$javajs_util_BS$S$javajs_util_Lst$javajs_util_Lst$javajs_util_M4$javajs_util_Lst$Z$IAA$javajs_util_P3$Z$I(bs1, bs2, smiles1, null, null, null, null, false, mapSet, null, false, isSmarts ? 2 : 1);
if (mapSet[0] == null ) return null;
var bondMap1=this.e.vwr.ms.getDihedralMap$IA(mapSet[0]);
var bondMap2=(bondMap1 == null  ? null : this.e.vwr.ms.getDihedralMap$IA(mapSet[1]));
if (bondMap2 == null  || bondMap2.length != bondMap1.length ) return null;
var angles=Clazz.array(Float.TYPE, [bondMap1.length, 3]);
var atoms=this.e.vwr.ms.at;
C$.getTorsions$org_jmol_modelset_AtomA$IAA$FAA$I(atoms, bondMap2, angles, 0);
C$.getTorsions$org_jmol_modelset_AtomA$IAA$FAA$I(atoms, bondMap1, angles, 1);
var data=Clazz.array(Float.TYPE, [bondMap1.length * 6]);
for (var i=0, pt=0; i < bondMap1.length; i++) {
var map=bondMap1[i];
data[pt++]=map[0];
data[pt++]=map[1];
data[pt++]=map[2];
data[pt++]=map[3];
data[pt++]=angles[i][0];
data[pt++]=angles[i][1];
}
return data;
});

Clazz.newMeth(C$, 'getTorsions$org_jmol_modelset_AtomA$IAA$FAA$I', function (atoms, bondMap, diff, pt) {
for (var i=bondMap.length; --i >= 0; ) {
var map=bondMap[i];
var v=$I$(6).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(atoms[map[0]], atoms[map[1]], atoms[map[2]], atoms[map[3]], true);
if (pt == 1) {
if (v - diff[i][0] > 180 ) v -= 360;
 else if (v - diff[i][0] <= -180 ) v += 360;
}diff[i][pt]=v;
}
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:18:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
