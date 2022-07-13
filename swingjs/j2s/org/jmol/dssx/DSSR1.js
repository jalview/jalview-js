(function(){var P$=Clazz.newPackage("org.jmol.dssx"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.util.Logger','org.jmol.util.Escape','javajs.util.Lst','javajs.util.BS','org.jmol.modelsetbio.BasePair','org.jmol.modelset.HBond','javajs.util.P3']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DSSR1", null, 'org.jmol.dssx.AnnotationParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'calculateDSSRStructure$org_jmol_viewer_Viewer$javajs_util_BS', function (vwr, bsAtoms) {
var bs=vwr.ms.getModelBS$javajs_util_BS$Z(bsAtoms == null  ? vwr.bsA$() : bsAtoms, true);
var s="";
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) s += p$1.getDSSRForModel$org_jmol_viewer_Viewer$I.apply(this, [vwr, i]) + "\n";

return s;
});

Clazz.newMeth(C$, 'getDSSRForModel$org_jmol_viewer_Viewer$I', function (vwr, modelIndex) {
var info=null;
var out=null;
while (true){
if (!vwr.ms.am[modelIndex].isBioModel) break;
info=vwr.ms.getModelAuxiliaryInfo$I(modelIndex);
if (info.containsKey$O("dssr")) break;
var bs=vwr.getModelUndeletedAtomsBitSet$I(modelIndex);
bs.and$javajs_util_BS(vwr.ms.getAtoms$I$O(2097166, null));
if (bs.nextClearBit$I(0) < 0) {
info=null;
break;
}try {
var name=vwr.setLoadFormat$S$C$Z("=dssrModel/", "=", false);
name=$I$(1).rep$S$S$S(name, "%20", " ");
$I$(2).info$S("fetching " + name + "[pdb data]" );
var data=vwr.getPdbAtomData$javajs_util_BS$javajs_util_OC$Z$Z(bs, null, false, false);
var modelNumber=vwr.getModelNumber$I(vwr.ms.getModelBS$javajs_util_BS$Z(bs, false).nextSetBit$I(0));
var s="          " + modelNumber;
data="MODEL" + s.substring$I(s.length$() - 9) + "\n" + data + "ENDMDL\n" ;
data=vwr.getFileAsString3$S$Z$S(name + data, false, null);
var x=vwr.parseJSONMap$S(data);
if (x != null ) {
info.put$O$O("dssr", x);
this.setGroup1$org_jmol_modelset_ModelSet$I(vwr.ms, modelIndex);
this.fixDSSRJSONMap$java_util_Map(x);
p$1.setBioPolymers$org_jmol_modelsetbio_BioModel$Z.apply(this, [vwr.ms.am[modelIndex], false]);
}} catch (e) {
info=null;
out="" + e;
}
break;
}
return (info != null  ? $I$(1,"rep$S$S$S",[$I$(3,"escapeMap$java_util_Map",[(info.get$O("dssr")).get$O("counts")]), ",", ",\n"]) : out == null  ? "model has no nucleotides" : out);
}, p$1);

Clazz.newMeth(C$, 'fixDSSRJSONMap$java_util_Map', function (map) {
var s="";
try {
p$1.fixIndices$java_util_Map$S$S.apply(this, [map, "kissingLoops", "hairpin"]);
p$1.fixIndices$java_util_Map$S$S.apply(this, [map, "coaxStacks", "stem"]);
if (map.containsKey$O("counts")) s += "_M.dssr.counts = " + map.get$O("counts").toString() + "\n" ;
if (map.containsKey$O("dbn")) s += "_M.dssr.dbn = " + map.get$O("dbn").toString();
} catch (e) {
}
return s;
});

Clazz.newMeth(C$, 'fixIndices$java_util_Map$S$S', function (map, key, root) {
var indices=root + "_indices";
var original=root + "s";
var lst=map.get$O(key);
if (lst != null ) {
var hpins=map.get$O(original);
for (var i=lst.size$(); --i >= 0; ) {
var kmap=lst.get$I(i);
var khlist=kmap.get$O(indices);
var n=khlist.size$();
if (n > 0) {
var khpins=Clazz.new_($I$(4,1));
kmap.put$O$O(original, khpins);
for (var j=n; --j >= 0; ) khpins.addLast$O(hpins.get$I((khlist.get$I(j)).intValue$() - 1));

}}
}}, p$1);

Clazz.newMeth(C$, 'getBasePairs$org_jmol_viewer_Viewer$I', function (vwr, modelIndex) {
var ms=vwr.ms;
var info=ms.getInfo$I$S(modelIndex, "dssr");
var pairs=(info == null  ? null : info.get$O("pairs"));
var singles=(info == null  ? null : info.get$O("ssSegments"));
if (pairs == null  && singles == null  ) {
p$1.setBioPolymers$org_jmol_modelsetbio_BioModel$Z.apply(this, [vwr.ms.am[modelIndex], true]);
return;
}var bsAtoms=ms.am[modelIndex].bsAtoms;
try {
var bs=Clazz.new_($I$(5,1));
var atoms=ms.at;
if (pairs != null ) for (var i=pairs.size$(); --i >= 0; ) {
var map=pairs.get$I(i);
var unit1=map.get$O("nt1");
var unit2=map.get$O("nt2");
var a1=ms.getSequenceBits$S$javajs_util_BS$javajs_util_BS(unit1, bsAtoms, bs).nextSetBit$I(0);
bs.clearAll$();
var a2=ms.getSequenceBits$S$javajs_util_BS$javajs_util_BS(unit2, bsAtoms, bs).nextSetBit$I(0);
bs.clearAll$();
$I$(6,"add$java_util_Map$org_jmol_modelsetbio_NucleicMonomer$org_jmol_modelsetbio_NucleicMonomer",[map, p$1.setRes$org_jmol_modelset_Atom.apply(this, [atoms[a1]]), p$1.setRes$org_jmol_modelset_Atom.apply(this, [atoms[a2]])]);
}
if (singles != null ) for (var i=singles.size$(); --i >= 0; ) {
var map=singles.get$I(i);
var units=map.get$O("nts_long");
ms.getSequenceBits$S$javajs_util_BS$javajs_util_BS(units, bsAtoms, bs);
for (var j=bs.nextSetBit$I(0); j >= 0; j=bs.nextSetBit$I(j + 1)) p$1.setRes$org_jmol_modelset_Atom.apply(this, [atoms[j]]);

}
} catch (e) {
$I$(2).error$S("Exception " + e + " in DSSRParser.getBasePairs" );
}
});

Clazz.newMeth(C$, 'setBioPolymers$org_jmol_modelsetbio_BioModel$Z', function (m, b) {
var n=m.getBioPolymerCount$();
for (var i=n; --i >= 0; ) {
var bp=m.bioPolymers[i];
if (bp.isNucleic$()) (bp).isDssrSet=b;
}
}, p$1);

Clazz.newMeth(C$, 'setRes$org_jmol_modelset_Atom', function (atom) {
if (atom.group.getBioPolymerLength$() == 0) return null;
var m=atom.group;
(m.bioPolymer).isDssrSet=true;
return m;
}, p$1);

Clazz.newMeth(C$, 'getAtomBits$org_jmol_viewer_Viewer$S$O$java_util_Map$I$I$javajs_util_BS', function (vwr, key, dbObj, annotationCache, type, modelIndex, bsModel) {
if (dbObj == null ) return Clazz.new_($I$(5,1));
var doCache=!key.contains$CharSequence("NOCACHE");
if (!doCache) {
key=$I$(1).rep$S$S$S(key, "NOCACHE", "").trim$();
}var bs=null;
bs=Clazz.new_($I$(5,1));
if (doCache) annotationCache.put$O$O(key, bs);
try {
key=$I$(1).rep$S$S$S(key, "[where", "[select * where");
key=$I$(1).rep$S$S$S(key, "[WHERE", "[select * where");
var ext="";
var n=-2147483648;
var pt=key.toLowerCase$().indexOf$S("[select");
if (pt >= 0) {
ext=key.substring$I(pt);
key=key.substring$I$I(0, pt);
pt=ext.lastIndexOf$S("]..");
if (pt >= 0 && (n=$I$(1,"parseInt$S",[ext.substring$I(pt + 3)])) != -2147483648 ) ext=ext.substring$I$I(0, pt + 1);
}pt=key.toLowerCase$().indexOf$S(" where ");
if (pt < 0) {
key=key.toLowerCase$();
pt=(n == -2147483648 ? key.lastIndexOf$I(".") : -1);
var haveIndex=false;
if (pt >= 0 && (haveIndex=(n=$I$(1,"parseInt$S",[key.substring$I(pt + 1)])) != -2147483648) ) key=key.substring$I$I(0, pt);
pt="..bulges.nts_long..coaxstacks.stems.pairs.nt*..hairpins.nts_long..hbonds.atom1_id;atom2_id..helices.pairs.nt*..iloops.nts_long..isocanonpairs.nt*..junctions.nts_long..kissingloops.hairpins.nts_long..multiplets.nts_long..nonstack.nts_long..nts.nt_id..pairs.nt*..sssegments.nts_long..stacks.nts_long..stems.pairs.nt*..".indexOf$S(".." + key) + 2;
var len=key.length$();
if (pt < 2) return bs;
var ptLast=(haveIndex ? pt + len : 2147483647);
while (pt >= 2 && pt < ptLast  && len > 0 ){
if (key.indexOf$S(".") < 0 && "..bulges.nts_long..coaxstacks.stems.pairs.nt*..hairpins.nts_long..hbonds.atom1_id;atom2_id..helices.pairs.nt*..iloops.nts_long..isocanonpairs.nt*..junctions.nts_long..kissingloops.hairpins.nts_long..multiplets.nts_long..nonstack.nts_long..nts.nt_id..pairs.nt*..sssegments.nts_long..stacks.nts_long..stems.pairs.nt*..".substring$I$I(pt + len, pt + len + 2 ).equals$O("..") ) {
key="[select (" + key + ")]" ;
}dbObj=vwr.extractProperty$O$O$I(dbObj, key, -1);
pt+=len + 1;
if (ext.length$() > 0) {
dbObj=vwr.extractProperty$O$O$I(dbObj, ext, -1);
ext="";
}var pt1="..bulges.nts_long..coaxstacks.stems.pairs.nt*..hairpins.nts_long..hbonds.atom1_id;atom2_id..helices.pairs.nt*..iloops.nts_long..isocanonpairs.nt*..junctions.nts_long..kissingloops.hairpins.nts_long..multiplets.nts_long..nonstack.nts_long..nts.nt_id..pairs.nt*..sssegments.nts_long..stacks.nts_long..stems.pairs.nt*..".indexOf$S$I(".", pt);
key="..bulges.nts_long..coaxstacks.stems.pairs.nt*..hairpins.nts_long..hbonds.atom1_id;atom2_id..helices.pairs.nt*..iloops.nts_long..isocanonpairs.nt*..junctions.nts_long..kissingloops.hairpins.nts_long..multiplets.nts_long..nonstack.nts_long..nts.nt_id..pairs.nt*..sssegments.nts_long..stacks.nts_long..stems.pairs.nt*..".substring$I$I(pt, pt1);
len=key.length$();
}
} else {
key=key.substring$I$I(0, pt).trim$() + "[select * " + key.substring$I(pt + 1) + "]" + ext ;
dbObj=vwr.extractProperty$O$O$I(dbObj, key, -1);
}if (n != -2147483648 && Clazz.instanceOf(dbObj, "javajs.util.Lst") ) {
if (n <= 0) n+=(dbObj).size$();
dbObj=(dbObj).get$I(n - 1);
}bs.or$javajs_util_BS(vwr.ms.getAtoms$I$O(1086324744, dbObj.toString()));
bs.and$javajs_util_BS(bsModel);
} catch (e) {
System.out.println$S(e.toString() + " in AnnotationParser");
bs.clearAll$();
}
return bs;
});

Clazz.newMeth(C$, 'getHBonds$org_jmol_modelset_ModelSet$I$javajs_util_Lst$Z', function (ms, modelIndex, vHBonds, doReport) {
var info=ms.getInfo$I$S(modelIndex, "dssr");
var list;
if (info == null  || (list=info.get$O("hbonds")) == null  ) return "no DSSR hydrogen-bond data";
var bsAtoms=ms.am[modelIndex].bsAtoms;
var unit1=null;
var unit2=null;
var a1=0;
var a2=0;
try {
var bs=Clazz.new_($I$(5,1));
for (var i=list.size$(); --i >= 0; ) {
var map=list.get$I(i);
unit1=map.get$O("atom1_id");
a1=ms.getSequenceBits$S$javajs_util_BS$javajs_util_BS(unit1, bsAtoms, bs).nextSetBit$I(0);
if (a1 < 0) {
$I$(2).error$S("Atom " + unit1 + " was not found" );
continue;
}unit2=map.get$O("atom2_id");
bs.clearAll$();
a2=ms.getSequenceBits$S$javajs_util_BS$javajs_util_BS(unit2, bsAtoms, bs).nextSetBit$I(0);
if (a2 < 0) {
$I$(2).error$S("Atom " + unit2 + " was not found" );
continue;
}bs.clearAll$();
var energy=0;
vHBonds.addLast$O(Clazz.new_($I$(7,1).c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$H$F,[ms.at[a1], ms.at[a2], 2048, 1, 0, energy]));
}
} catch (e) {
}
return "DSSR reports " + list.size$() + " hydrogen bonds" ;
});

Clazz.newMeth(C$, 'setGroup1$org_jmol_modelset_ModelSet$I', function (ms, modelIndex) {
var info=ms.getInfo$I$S(modelIndex, "dssr");
var list;
if (info == null  || (list=info.get$O("nts")) == null  ) return;
var m=ms.am[modelIndex];
var bsAtoms=m.bsAtoms;
var atoms=ms.at;
var bs=Clazz.new_($I$(5,1));
for (var i=list.size$(); --i >= 0; ) {
var map=list.get$I(i);
var ch=(map.get$O("nt_code")).charAt$I(0);
var unit1=map.get$O("nt_id");
ms.bioModelset.getAllSequenceBits$S$javajs_util_BS$javajs_util_BS(unit1, bsAtoms, bs);
var pt=bs.nextSetBit$I(0);
if (pt < 0) continue;
if ("ACGTU".indexOf$I(ch) < 0) atoms[pt].group.group1=ch;
atoms[pt].group.dssrNT=map;
bs.clearAll$();
}
});

Clazz.newMeth(C$, 'getAtomicDSSRData$org_jmol_modelset_ModelSet$I$FA$S', function (ms, modelIndex, dssrData, dataType) {
var info=ms.getInfo$I$S(modelIndex, "dssr");
var list;
if (info == null  || (list=info.get$O(dataType)) == null  ) return;
var bsAtoms=ms.am[modelIndex].bsAtoms;
try {
var bs=Clazz.new_($I$(5,1));
for (var i=list.size$(); --i >= 0; ) {
var map=list.get$I(i);
bs.clearAll$();
ms.getSequenceBits$S$javajs_util_BS$javajs_util_BS(map.toString(), bsAtoms, bs);
for (var j=bs.nextSetBit$I(0); j >= 0; j=bs.nextSetBit$I(j + 1)) dssrData[j]=i;

}
} catch (e) {
}
});

Clazz.newMeth(C$, 'getDSSRFrame$java_util_Map', function (nt) {
var frame=nt.get$O("frame");
if (frame == null ) return null;
var oxyz=Clazz.array($I$(8), [4]);
for (var i=4; --i >= 0; ) oxyz[i]=Clazz.new_($I$(8,1));

p$1.getPoint$java_util_Map$S$javajs_util_P3.apply(this, [frame, "origin", oxyz[0]]);
p$1.getPoint$java_util_Map$S$javajs_util_P3.apply(this, [frame, "x_axis", oxyz[1]]);
p$1.getPoint$java_util_Map$S$javajs_util_P3.apply(this, [frame, "y_axis", oxyz[2]]);
p$1.getPoint$java_util_Map$S$javajs_util_P3.apply(this, [frame, "z_axis", oxyz[3]]);
return oxyz;
});

Clazz.newMeth(C$, 'getPoint$java_util_Map$S$javajs_util_P3', function (frame, item, pt) {
var xyz=frame.get$O(item);
pt.x=xyz.get$I(0).floatValue$();
pt.y=xyz.get$I(1).floatValue$();
pt.z=xyz.get$I(2).floatValue$();
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:33 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
