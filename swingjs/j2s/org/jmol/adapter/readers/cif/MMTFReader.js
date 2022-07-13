(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.cif"),p$1={},I$=[[0,'javajs.util.MessagePackReader','org.jmol.util.Logger','org.jmol.script.SV','org.jmol.adapter.smarter.Atom','org.jmol.adapter.smarter.Bond','javajs.util.Lst','java.util.Hashtable','javajs.util.SB','javajs.util.M4','javajs.util.PT','javajs.util.BS','org.jmol.adapter.smarter.Structure']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MMTFReader", null, 'org.jmol.adapter.readers.cif.MMCifReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.opCount=0;
},1);

C$.$fields$=[['Z',['haveStructure'],'I',['fileAtomCount','opCount','groupCount','ac0','lastGroup'],'S',['$pdbID'],'O',['map','java.util.Map','groupModels','int[]','+groupMap','+groupDSSP','+atomGroup','labelAsymList','String[]','atomMap','org.jmol.adapter.smarter.Atom[]','entities','Object[]','bsStructures','javajs.util.BS[]']]]

Clazz.newMeth(C$, 'addHeader$', function () {
});

Clazz.newMeth(C$, 'setup$S$java_util_Map$O', function (fullPath, htParams, reader) {
this.isBinary=true;
this.isMMCIF=true;
this.iHaveFractionalCoordinates=false;
this.setupASCR$S$java_util_Map$O(fullPath, htParams, reader);
});

Clazz.newMeth(C$, 'processBinaryDocument$', function () {
var doDoubleBonds=(!this.isCourseGrained && !this.checkFilterKey$S("NODOUBLE") );
this.isDSSP1=!this.checkFilterKey$S("DSSP2");
var mmtfImplementsDSSP2=false;
this.applySymmetryToBonds=true;
this.map=(Clazz.new_($I$(1,1).c$$javajs_api_GenericBinaryDocumentReader$Z,[this.binaryDoc, true])).readMap$();
this.entities=this.map.get$O("entityList");
if ($I$(2).debugging) {
for (var s, $s = this.map.keySet$().iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) $I$(2).info$S(s);

}this.asc.setInfo$S$O("noAutoBond", Boolean.TRUE);
$I$(2,"info$S",["MMTF version " + this.map.get$O("mmtfVersion")]);
$I$(2,"info$S",["MMTF Producer " + this.map.get$O("mmtfProducer")]);
var title=this.map.get$O("title");
if (title != null ) this.appendLoadNote$S(title);
this.$pdbID=this.map.get$O("structureId");
if (this.$pdbID == null ) this.$pdbID=this.map.get$O("pdbId");
this.fileAtomCount=(this.map.get$O("numAtoms")).intValue$();
var nBonds=(this.map.get$O("numBonds")).intValue$();
this.groupCount=(this.map.get$O("numGroups")).intValue$();
this.groupModels=Clazz.array(Integer.TYPE, [this.groupCount]);
this.groupDSSP=Clazz.array(Integer.TYPE, [this.groupCount]);
this.groupMap=Clazz.array(Integer.TYPE, [this.groupCount]);
var modelCount=(this.map.get$O("numModels")).intValue$();
this.appendLoadNote$S("id=" + this.$pdbID + " numAtoms=" + this.fileAtomCount + " numBonds=" + nBonds + " numGroups=" + this.groupCount + " numModels=" + modelCount );
p$1.getMMTFAtoms$Z.apply(this, [doDoubleBonds]);
if (!this.isCourseGrained) {
var bo=p$1.decode$S.apply(this, ["bondOrderList"]);
var bi=p$1.decode$S.apply(this, ["bondAtomList"]);
p$1.addMMTFBonds$IA$IA$I$Z$Z.apply(this, [bo, bi, 0, doDoubleBonds, true]);
if (this.isDSSP1 || mmtfImplementsDSSP2 ) p$1.getStructure.apply(this, []);
}p$1.setMMTFSymmetry.apply(this, []);
p$1.getMMTFBioAssembly.apply(this, []);
this.setModelPDB$Z(true);
if ($I$(2).debuggingHigh) $I$(2,"info$S",[$I$(3).getVariable$O(this.map).asString$()]);
});

Clazz.newMeth(C$, 'applySymmetryAndSetTrajectory$', function () {
this.ac0=this.ac;
C$.superclazz.prototype.applySymmetryAndSetTrajectory$.apply(this, []);
if (this.haveStructure) p$1.addStructureSymmetry.apply(this, []);
});

Clazz.newMeth(C$, 'getMMTFAtoms$Z', function (doMulti) {
var chainsPerModel=this.map.get$O("chainsPerModel");
var groupsPerChain=this.map.get$O("groupsPerChain");
this.labelAsymList=p$1.decode$S.apply(this, ["chainIdList"]);
var authAsymList=p$1.decode$S.apply(this, ["chainNameList"]);
var groupTypeList=p$1.decode$S.apply(this, ["groupTypeList"]);
var groupIdList=p$1.decode$S.apply(this, ["groupIdList"]);
var groupList=this.map.get$O("groupList");
var insCodes=p$1.decode$S.apply(this, ["insCodeList"]);
var atomId=p$1.decode$S.apply(this, ["atomIdList"]);
var haveSerial=(atomId != null );
var altloc=p$1.decode$S.apply(this, ["altLocList"]);
var occ=p$1.decode$S.apply(this, ["occupancyList"]);
var x=p$1.decode$S.apply(this, ["xCoordList"]);
var y=p$1.decode$S.apply(this, ["yCoordList"]);
var z=p$1.decode$S.apply(this, ["zCoordList"]);
var bf=p$1.decode$S.apply(this, ["bFactorList"]);
var nameList=(this.useAuthorChainID ? authAsymList : this.labelAsymList);
var iModel=-1;
var iChain=0;
var nChain=0;
var iGroup=0;
var nGroup=0;
var chainpt=0;
var seqNo=0;
var iatom=0;
var chainID="";
var authAsym="";
var labelAsym="";
var insCode="\u0000";
this.atomMap=Clazz.array($I$(4), [this.fileAtomCount]);
this.atomGroup=Clazz.array(Integer.TYPE, [this.fileAtomCount]);
for (var j=0, thisGroup=-1; j < this.groupCount; j++) {
if (++iGroup >= nGroup) {
chainID=nameList[chainpt];
authAsym=authAsymList[chainpt];
labelAsym=this.labelAsymList[chainpt];
nGroup=groupsPerChain[chainpt++];
iGroup=0;
if (++iChain >= nChain) {
this.groupModels[j]=++iModel;
nChain=chainsPerModel[iModel];
iChain=0;
this.setModelPDB$Z(true);
this.incrementModel$I(iModel + 1);
this.asc.setCurrentModelInfo$S$O("pdbID", this.$pdbID);
this.nAtoms0=this.asc.ac;
if (this.done) return;
}}var g=groupList[groupTypeList[j]];
var atomNameList=g.get$O("atomNameList");
var len=atomNameList.length;
if (this.skipping) {
iatom+=len;
continue;
}var a0=iatom;
if (insCodes != null ) insCode=insCodes[j];
seqNo=groupIdList[j];
var group3=g.get$O("groupName");
var isHetero=this.vwr.getJBR$().isHetero$S(group3);
if (isHetero) {
var hetName="" + g.get$O("chemCompType");
if (this.htHetero == null  || !this.htHetero.containsKey$O(group3) ) {
if (this.entities != null  && hetName.equals$O("NON-POLYMER") )  out : for (var i=this.entities.length; --i >= 0; ) {
var entity=this.entities[i];
var chainList=entity.get$O("chainIndexList");
for (var k=chainList.length; --k >= 0; ) if (chainList[k] == iChain) {
hetName="a component of the entity \"" + entity.get$O("description") + "\"" ;
break out;
}
}
this.addHetero$S$S$Z$Z(group3, hetName, false, true);
}}var elementList=g.get$O("elementList");
var haveAtom=false;
for (var ia=0, pt=0; ia < len; ia++, iatom++) {
var a=Clazz.new_($I$(4,1));
a.isHetero=isHetero;
if (insCode.$c() != 0 ) a.insertionCode=insCode;
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(a, x[iatom], y[iatom], z[iatom]);
a.elementSymbol=elementList[pt];
a.atomName=atomNameList[pt++];
if (seqNo >= 0) this.maxSerial=Math.max(this.maxSerial, a.sequenceNumber=seqNo);
a.group3=group3;
this.setChainID$org_jmol_adapter_smarter_Atom$S(a, chainID);
if (bf != null ) a.bfactor=bf[iatom];
if (altloc != null ) a.altLoc=altloc[iatom];
if (occ != null ) a.foccupancy=occ[iatom];
if (haveSerial) a.atomSerial=atomId[iatom];
if (!this.filterAtom$org_jmol_adapter_smarter_Atom$I(a, -1) || !this.processSubclassAtom$org_jmol_adapter_smarter_Atom$S$S(a, labelAsym, authAsym) ) continue;
if (!haveAtom) {
thisGroup++;
haveAtom=true;
}if (haveSerial) {
this.asc.addAtomWithMappedSerialNumber$org_jmol_adapter_smarter_Atom(a);
} else {
this.asc.addAtom$org_jmol_adapter_smarter_Atom(a);
}this.atomMap[iatom]=a;
this.atomGroup[this.ac]=j;
this.groupMap[j]=this.lastGroup=thisGroup;
this.ac++;
}
if (!this.isCourseGrained) {
var bo=g.get$O("bondOrderList");
var bi=g.get$O("bondAtomList");
p$1.addMMTFBonds$IA$IA$I$Z$Z.apply(this, [bo, bi, a0, doMulti, false]);
}}
this.asc.setCurrentModelInfo$S$O("pdbID", this.$pdbID);
}, p$1);

Clazz.newMeth(C$, 'addMMTFBonds$IA$IA$I$Z$Z', function (bo, bi, a0, doMulti, isInter) {
if (bi == null ) return;
doMulti&=(bo != null );
for (var bj=0, pt=0, nj=(bi.length/2|0); bj < nj; bj++) {
var a1=this.atomMap[bi[pt++] + a0];
var a2=this.atomMap[bi[pt++] + a0];
if (a1 != null  && a2 != null  ) {
var bond=Clazz.new_($I$(5,1).c$$I$I$I,[a1.index, a2.index, doMulti ? bo[bj] : 1]);
this.asc.addBond$org_jmol_adapter_smarter_Bond(bond);
if ($I$(2).debugging && isInter ) {
$I$(2,"info$S",["inter-group (" + (a1.atomSetIndex + 1) + "." + a1.index + "/" + (a2.atomSetIndex + 1) + "." + a2.index + ") bond " + a1.group3 + a1.sequenceNumber + "." + a1.atomName + " - " + a2.group3 + a2.sequenceNumber + "." + a2.atomName + " " + bond.order ]);
}}}
}, p$1);

Clazz.newMeth(C$, 'setMMTFSymmetry', function () {
this.setSpaceGroupName$S(this.map.get$O("spaceGroup"));
var o=this.map.get$O("unitCell");
if (o != null ) for (var i=0; i < 6; i++) this.setUnitCellItem$I$F(i, o[i]);

}, p$1);

Clazz.newMeth(C$, 'getMMTFBioAssembly', function () {
var o=this.map.get$O("bioAssemblyList");
if (o == null ) return;
if (this.vBiomolecules == null ) this.vBiomolecules=Clazz.new_($I$(6,1));
for (var i=o.length; --i >= 0; ) {
var info=Clazz.new_($I$(7,1));
this.vBiomolecules.addLast$O(info);
var iMolecule=i + 1;
this.checkFilterAssembly$S$java_util_Map("" + iMolecule, info);
info.put$O$O("name", "biomolecule " + iMolecule);
info.put$O$O("molecule", Integer.valueOf$I(iMolecule));
var assemb=Clazz.new_($I$(6,1));
var ops=Clazz.new_($I$(6,1));
info.put$O$O("biomts", Clazz.new_($I$(6,1)));
info.put$O$O("chains", Clazz.new_($I$(6,1)));
info.put$O$O("assemblies", assemb);
info.put$O$O("operators", ops);
var m=o[i];
var tlist=m.get$O("transformList");
var chlist=Clazz.new_($I$(8,1));
for (var j=0, n=tlist.length; j < n; j++) {
var t=tlist[j];
chlist.setLength$I(0);
var chainList=t.get$O("chainIndexList");
for (var k=0, kn=chainList.length; k < kn; k++) chlist.append$S("$").append$S(this.labelAsymList[chainList[k]]);

assemb.addLast$O(chlist.append$S("$").toString());
var id="" + (++this.opCount);
this.addMatrix$S$javajs_util_M4$Z(id, $I$(9,"newA16$FA",[t.get$O("matrix")]), false);
ops.addLast$O(id);
}
}
}, p$1);

Clazz.newMeth(C$, 'getStructure', function () {
var a=p$1.decode$S.apply(this, ["secStructList"]);
if ($I$(2).debugging) $I$(2,"info$S",[$I$(10).toJSON$S$O("secStructList", a)]);
this.bsStructures=Clazz.array($I$(11), -1, [Clazz.new_($I$(11,1)), null, Clazz.new_($I$(11,1)), Clazz.new_($I$(11,1)), Clazz.new_($I$(11,1)), null, Clazz.new_($I$(11,1))]);
var lastGroup=-1;
for (var j=0; j < a.length; j++) {
var type=a[j];
switch (type) {
case 0:
case 2:
case 3:
case 4:
case 6:
var igroup=this.groupMap[j];
this.bsStructures[type].set$I(igroup);
this.groupDSSP[igroup]=type + 1;
lastGroup=j;
}
}
var n=(this.isDSSP1 ? this.asc.iSet : this.groupModels[lastGroup]);
if (lastGroup >= 0) {
this.haveStructure=true;
this.asc.addStructure$org_jmol_adapter_smarter_Structure(Clazz.new_($I$(12,1).c$$I$org_jmol_c_STR$org_jmol_c_STR$S$I$I$javajs_util_BSA,[n, null, null, null, 0, 0, this.bsStructures]));
}}, p$1);

Clazz.newMeth(C$, 'addStructureSymmetry', function () {
if (this.asc.ac == 0) return;
var atoms=this.asc.atoms;
var bsAtoms=this.asc.bsAtoms;
var ptGroup=this.lastGroup;
var mygroup=-1;
for (var i=this.ac0, n=this.asc.ac; i < n; i++) {
if (bsAtoms == null  || bsAtoms.get$I(i) ) {
var a=atoms[i];
var igroup=this.atomGroup[a.atomSite];
if (igroup != mygroup) {
mygroup=igroup;
ptGroup++;
}var dssp=this.groupDSSP[igroup];
if (dssp > 0) {
this.bsStructures[dssp - 1].set$I(ptGroup);
}}}
}, p$1);

Clazz.newMeth(C$, 'decode$S', function (key) {
return $I$(1,"decode$BA",[this.map.get$O(key)]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
