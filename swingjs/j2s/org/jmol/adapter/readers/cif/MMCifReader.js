(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.cif"),p$1={},I$=[[0,'javajs.util.M4','javajs.util.PT','java.util.Hashtable','org.jmol.adapter.smarter.Atom','javajs.util.BS','org.jmol.util.BSUtil','org.jmol.util.Logger','javajs.util.Lst','javajs.util.SB','org.jmol.adapter.smarter.Structure','org.jmol.c.STR','javajs.util.P3']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MMCifReader", null, 'org.jmol.adapter.readers.cif.CifReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.thisChain=-1;
this.modelIndex=0;
this.structConnList="";
this.modelStrings="";
},1);

C$.$fields$=[['Z',['isBiomolecule','byChain','bySymop','isLigandBondBug','requiresSorting','doSetBonds','done'],'I',['thisChain','modelIndex'],'S',['structConnList','modelStrings'],'O',['chainAtomMap','java.util.Map','+chainAtomCounts','vBiomolecules','javajs.util.Lst','htBiomts','java.util.Map','+htSites','+htHetero','+htBondMap','+assemblyIdAtoms','chainSum','javajs.util.P3','chainAtomCount','int[]','mident','javajs.util.M4','structConnMap','javajs.util.Lst']]
,['O',['ncsoperFields','String[]','+operFields','+assemblyFields','+structRefFields','+chemCompFields','+structConfFields','+structSheetRangeFields','+structSiteFields','+structConnFields','+chemCompBondFields']]]

Clazz.newMeth(C$, 'initSubclass$', function () {
this.setIsPDB$();
this.mident=$I$(1).newM4$javajs_util_M4(null);
this.isMMCIF=true;
if (this.isDSSP1) this.asc.setInfo$S$O("isDSSP1", Boolean.TRUE);
if (this.htParams.containsKey$O("isMutate")) this.asc.setInfo$S$O("isMutate", Boolean.TRUE);
this.doSetBonds=this.checkFilterKey$S("ADDBONDS");
this.byChain=this.checkFilterKey$S("BYCHAIN");
if (this.checkFilterKey$S("BIOMOLECULE")) this.filter=$I$(2).rep$S$S$S(this.filter, "BIOMOLECULE", "ASSEMBLY");
this.isBiomolecule=this.checkFilterKey$S("ASSEMBLY");
if (this.isBiomolecule) {
this.filter=this.filter.replace$C$C(":", " ");
this.bySymop=this.checkFilterKey$S("BYSYMOP");
}this.isCourseGrained=this.byChain || this.bySymop ;
if (this.isCourseGrained) {
this.chainAtomMap=Clazz.new_($I$(3,1));
this.chainAtomCounts=Clazz.new_($I$(3,1));
}this.isLigandBondBug=(this.stateScriptVersionInt >= 140204 && this.stateScriptVersionInt <= 140208  || this.stateScriptVersionInt >= 140304 && this.stateScriptVersionInt <= 140308  );
});

Clazz.newMeth(C$, 'processSubclassEntry$', function () {
if (this.key0.startsWith$S("_pdbx_struct_assembly_gen.") || this.key0.startsWith$S("_struct_conn.") || this.key0.startsWith$S("_struct_ref_seq_dif.") || this.key0.startsWith$S("_struct_conf.") || this.key0.startsWith$S("_struct_sheet_range.")  ) this.processSubclassLoopBlock$();
 else if (this.key.equals$O("_rna3d")) {
this.addedData=this.data;
this.addedDataKey=this.key;
} else if (this.key.equals$O("_dssr")) {
this.dssr=this.vwr.parseJSONMap$S(this.reader.readLine$());
this.reader.readLine$();
}});

Clazz.newMeth(C$, 'processSubclassLoopBlock$', function () {
if (this.key0.startsWith$S("_struct_ncs_oper.")) return p$1.processStructOperListBlock$Z.apply(this, [true]);
if (this.key0.startsWith$S("_pdbx_struct_oper_list.")) return p$1.processStructOperListBlock$Z.apply(this, [false]);
if (this.key0.startsWith$S("_pdbx_struct_assembly_gen.")) return p$1.processAssemblyGenBlock.apply(this, []);
if (this.key0.startsWith$S("_struct_ref_seq_dif.")) return p$1.processSequence.apply(this, []);
if (this.isCourseGrained) return false;
if (this.key0.startsWith$S("_struct_site_gen.")) return p$1.processStructSiteBlock.apply(this, []);
if (this.key0.startsWith$S("_chem_comp.")) return p$1.processChemCompLoopBlock.apply(this, []);
if (this.key0.startsWith$S("_struct_conf.")) return p$1.processStructConfLoopBlock.apply(this, []);
if (this.key0.startsWith$S("_struct_sheet_range.")) return p$1.processStructSheetRangeLoopBlock.apply(this, []);
if (this.isLigandBondBug) return false;
if (this.key0.startsWith$S("_chem_comp_bond.")) return p$1.processCompBondLoopBlock.apply(this, []);
if (this.key0.startsWith$S("_struct_conn.")) return p$1.processStructConnLoopBlock.apply(this, []);
return false;
});

Clazz.newMeth(C$, 'sortAssemblyModels$', function () {
var natoms=this.asc.ac;
var lastSet=-1;
var atoms=this.asc.atoms;
var newAtoms=Clazz.array($I$(4), [natoms]);
var ids=$I$(2).split$S$S("," + this.modelStrings + "," , ",,");
var bsAtomsNew=(this.asc.bsAtoms == null  ? null : $I$(5,"newN$I",[this.asc.bsAtoms.size$()]));
for (var im=1, n=0; im < ids.length; im++) {
var sModel=ids[im];
var modelIndex=-1;
for (var is=0; is < this.asc.atomSetCount; is++) {
var ia0=this.asc.getAtomSetAtomIndex$I(is);
var ia1=ia0 + this.asc.getAtomSetAtomCount$I(is);
var am="" + this.modelMap.get$O("_" + is);
if (am.equals$O(sModel)) {
if (modelIndex < 0 && (modelIndex=is) > lastSet ) lastSet=is;
for (var i=ia0; i < ia1; i++) {
if (bsAtomsNew == null  || this.asc.bsAtoms.get$I(i) ) {
if (bsAtomsNew != null ) bsAtomsNew.set$I(n);
atoms[i].atomSetIndex=modelIndex;
newAtoms[n++]=atoms[i];
}}
}}
}
this.asc.atoms=newAtoms;
this.asc.bsAtoms=bsAtomsNew;
if (++lastSet < this.asc.atomSetCount) this.asc.atomSetCount=lastSet;
});

Clazz.newMeth(C$, 'finalizeSubclass$', function () {
if (this.byChain && !this.isBiomolecule ) for (var id, $id = this.chainAtomMap.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) p$1.createParticle$S.apply(this, [id]);

var haveBiomolecule=(this.isBiomolecule && this.vBiomolecules != null   && this.vBiomolecules.size$() > 0 );
if (!this.isCourseGrained && this.asc.ac == this.nAtoms ) {
this.asc.removeCurrentAtomSet$();
} else {
if ((this.dssr != null  || this.validation != null   || this.addedData != null  ) && !this.isCourseGrained && !this.requiresSorting  ) {
var vs=(this.getInterface$S("org.jmol.adapter.readers.cif.MMCifValidationParser")).set$org_jmol_adapter_smarter_AtomSetCollectionReader(this);
var note=null;
if (this.addedData == null ) {
if (this.validation != null  || this.dssr != null  ) note=vs.finalizeValidations$org_jmol_viewer_Viewer$java_util_Map(this.vwr, this.modelMap);
} else if (this.addedDataKey.equals$O("_rna3d")) {
note=vs.finalizeRna3d$java_util_Map(this.modelMap);
}if (note != null ) this.appendLoadNote$S(note);
}p$1.setHetero.apply(this, []);
if (this.doSetBonds) p$1.setBonds.apply(this, []);
}if (this.asc.ac == 0 && !this.isCourseGrained ) return false;
var spaceGroup=this.sgName;
if (this.htSites != null ) this.addSites$java_util_Map(this.htSites);
if (haveBiomolecule) {
this.asc.setCurrentModelInfo$S$O("biomolecules", this.vBiomolecules);
p$1.setBiomolecules.apply(this, []);
if (this.thisBiomolecule != null ) {
if (this.iHaveFractionalCoordinates) this.fractionalizeCoordinates$Z(false);
this.asc.getXSymmetry$().applySymmetryBio$java_util_Map$Z$S(this.thisBiomolecule, this.applySymmetryToBonds, this.filter);
this.asc.xtalSymmetry=null;
}this.doCheckUnitCell&=this.iHaveUnitCell && this.doApplySymmetry ;
if (this.doCheckUnitCell) {
this.ignoreFileSpaceGroupName=true;
this.sgName=spaceGroup;
this.fractionalizeCoordinates$Z(true);
this.asc.setCurrentModelInfo$S$O("biosymmetry", null);
this.asc.setCurrentModelInfo$S$O("biosymmetryCount", null);
this.asc.checkSpecial=false;
if (this.byChain) return true;
}}if (this.latticeCells != null  && this.latticeCells[0] != 0 ) this.addJmolScript$S("unitcell;axes on;axes unitcell;");
if (this.requiresSorting) this.sortAssemblyModels$();
return true;
});

Clazz.newMeth(C$, 'checkSubclassSymmetry$', function () {
this.asc.checkSpecial=false;
var modelIndex=this.asc.iSet;
this.asc.setCurrentModelInfo$S$O("PDB_CONECT_firstAtom_count_max", Clazz.array(Integer.TYPE, -1, [this.asc.getAtomSetAtomIndex$I(modelIndex), this.asc.getAtomSetAtomCount$I(modelIndex), this.maxSerial]));
return false;
});

Clazz.newMeth(C$, 'setBonds', function () {
if (this.htBondMap == null ) return;
var bsAtoms=this.asc.bsAtoms;
if (bsAtoms == null ) bsAtoms=$I$(6).newBitSet2$I$I(0, this.asc.ac);
var atoms=this.asc.atoms;
var seqid=-1;
var comp=null;
var map=null;
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var a=atoms[i];
var pt=(a.vib == null  ? a.sequenceNumber : a.vib.x);
if (pt != seqid ) {
seqid=pt;
if (comp != null ) p$1.processBonds$javajs_util_Lst$java_util_Map$Z.apply(this, [this.htBondMap.get$O(comp), map, false]);
map=Clazz.new_($I$(3,1));
comp=atoms[i].group3;
if (!this.htBondMap.containsKey$O(comp)) {
comp=null;
continue;
}}if (comp == null ) continue;
map.put$O$O(a.atomName, Integer.valueOf$I(a.index));
}
if (comp != null ) p$1.processBonds$javajs_util_Lst$java_util_Map$Z.apply(this, [this.htBondMap.get$O(comp), map, false]);
if (this.structConnMap != null ) {
map=Clazz.new_($I$(3,1));
seqid=-1;
comp=null;
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var a=atoms[i];
var pt=(a.vib == null  ? a.sequenceNumber : a.vib.x);
if (pt != seqid ) {
seqid=pt;
var ckey=a.chainID + a.group3 + new Float(seqid).toString() ;
if (this.structConnList.indexOf$S(ckey) < 0) {
comp=null;
continue;
}comp=ckey;
}if (comp == null ) continue;
map.put$O$O(comp + a.atomName + a.altLoc , Integer.valueOf$I(a.index));
}
p$1.processBonds$javajs_util_Lst$java_util_Map$Z.apply(this, [this.structConnMap, map, true]);
}this.appendLoadNote$S(this.asc.bondCount + " bonds added");
}, p$1);

Clazz.newMeth(C$, 'processBonds$javajs_util_Lst$java_util_Map$Z', function (cmap, map, isStructConn) {
var i1;
var i2;
for (var i=0, n=cmap.size$(); i < n; i++) {
var o=cmap.get$I(i);
if ((i1=map.get$O(o[0])) == null  || (i2=map.get$O(o[1])) == null  ) continue;
if (this.debugging) $I$(7,"debug$S",[(isStructConn ? "_struct_conn" : "_comp_bond") + " adding bond " + i1 + " " + i2 + " order=" + o[2] ]);
this.asc.addNewBondWithOrder$I$I$I(i1.intValue$(), i2.intValue$(), (o[2]).intValue$());
}
}, p$1);

Clazz.newMeth(C$, 'processSequence', function () {
this.parseLoopParameters$SA(C$.structRefFields);
var g1;
var g3;
while (this.parser.getData$()){
if (this.isNull$S(g1=this.getField$B(1).toLowerCase$()) || g1.length$() != 1  || this.isNull$S(g3=this.getField$B(0)) ) continue;
if (this.htGroup1 == null ) this.asc.setInfo$S$O("htGroup1", this.htGroup1=Clazz.new_($I$(3,1)));
this.htGroup1.put$O$O(g3, g1);
}
return true;
}, p$1);

Clazz.newMeth(C$, 'processAssemblyGenBlock', function () {
this.parseLoopParameters$SA(C$.assemblyFields);
while (this.parser.getData$()){
var assem=Clazz.array(String, [3]);
var count=0;
var p;
var n=this.parser.getColumnCount$();
for (var i=0; i < n; ++i) {
switch (p=this.fieldProperty$I(i)) {
case 0:
case 1:
case 2:
count++;
assem[p]=this.field;
break;
}
}
if (count == 3) this.addAssembly$SA(assem);
}
return true;
}, p$1);

Clazz.newMeth(C$, 'addAssembly$SA', function (assem) {
var id=assem[0];
var list=assem[2];
var operators=assem[1];
var name="biomolecule " + id;
$I$(7).info$S(name + " operators " + operators + " ASYM_IDs " + list );
this.appendLoadNote$S("found " + name + ": " + list );
if (this.vBiomolecules == null ) this.vBiomolecules=Clazz.new_($I$(8,1));
var info=null;
for (var i=this.vBiomolecules.size$(); --i >= 0; ) if (this.vBiomolecules.get$I(i).get$O("name").equals$O(name)) {
info=this.vBiomolecules.get$I(i);
break;
}
if (info == null ) {
info=Clazz.new_($I$(3,1));
info.put$O$O("name", name);
var iMolecule=this.parseIntStr$S(id);
info.put$O$O("molecule", iMolecule == -2147483648 ? id : Integer.valueOf$I(iMolecule));
info.put$O$O("biomts", Clazz.new_($I$(8,1)));
info.put$O$O("chains", Clazz.new_($I$(8,1)));
info.put$O$O("assemblies", Clazz.new_($I$(8,1)));
info.put$O$O("operators", Clazz.new_($I$(8,1)));
this.vBiomolecules.addLast$O(info);
}(info.get$O("assemblies")).addLast$O("$" + list.replace$C$C(",", "$"));
(info.get$O("operators")).addLast$O(p$1.decodeAssemblyOperators$S.apply(this, [operators]));
this.checkFilterAssembly$S$java_util_Map(id, info);
});

Clazz.newMeth(C$, 'checkFilterAssembly$S$java_util_Map', function (id, info) {
if (this.checkFilterKey$S("ASSEMBLY " + id + ";" ) || this.checkFilterKey$S("ASSEMBLY=" + id + ";" ) ) this.thisBiomolecule=info;
});

Clazz.newMeth(C$, 'decodeAssemblyOperators$S', function (ops) {
var pt=ops.indexOf$S(")(");
if (pt >= 0) return p$1.crossBinary$S$S.apply(this, [p$1.decodeAssemblyOperators$S.apply(this, [ops.substring$I$I(0, pt + 1)]), p$1.decodeAssemblyOperators$S.apply(this, [ops.substring$I(pt + 1)])]);
if (ops.startsWith$S("(")) {
if (ops.indexOf$S("-") >= 0) ops=$I$(5,"unescape$S",["({" + ops.substring$I$I(1, ops.length$() - 1).replace$C$C("-", ":").replace$C$C(",", " ") + "})" ]).toJSON$();
ops=$I$(2).rep$S$S$S(ops, " ", "");
ops=ops.substring$I$I(1, ops.length$() - 1);
}return ops;
}, p$1);

Clazz.newMeth(C$, 'crossBinary$S$S', function (ops1, ops2) {
var sb=Clazz.new_($I$(9,1));
var opsLeft=$I$(2).split$S$S(ops1, ",");
var opsRight=$I$(2).split$S$S(ops2, ",");
for (var i=0; i < opsLeft.length; i++) for (var j=0; j < opsRight.length; j++) sb.append$S(",").append$S(opsLeft[i]).append$S("|").append$S(opsRight[j]);


return sb.toString().substring$I(1);
}, p$1);

Clazz.newMeth(C$, 'processStructOperListBlock$Z', function (isNCS) {
this.parseLoopParametersFor$S$SA((isNCS ? "_struct_ncs_oper" : "_pdbx_struct_oper_list"), isNCS ? C$.ncsoperFields : C$.operFields);
var m=Clazz.array(Float.TYPE, [16]);
m[15]=1;
while (this.parser.getData$()){
var count=0;
var id=null;
var xyz=null;
var n=this.parser.getColumnCount$();
for (var i=0; i < n; ++i) {
var p=this.fieldProperty$I(i);
switch (p) {
case -1:
break;
case 12:
id=this.field;
break;
case 13:
xyz=this.field;
break;
default:
m[p]=this.parseFloatStr$S(this.field);
++count;
}
}
if (id != null  && (count == 12 || xyz != null  && this.symmetry != null   ) ) {
$I$(7,"info$S",[(isNCS ? "noncrystallographic symmetry operator " : "assembly operator ") + id + " " + xyz ]);
var m4=Clazz.new_($I$(1,1));
if (count != 12) {
this.symmetry.getMatrixFromString$S$FA$Z$I(xyz, m, false, 0);
m[3] *= this.symmetry.getUnitCellInfoType$I(0) / 12;
m[7] *= this.symmetry.getUnitCellInfoType$I(1) / 12;
m[11] *= this.symmetry.getUnitCellInfoType$I(2) / 12;
}m4.setA$FA(m);
this.addMatrix$S$javajs_util_M4$Z(id, m4, isNCS);
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'addMatrix$S$javajs_util_M4$Z', function (id, m4, isNCS) {
if (isNCS) {
if (m4.equals$O(this.mident)) return;
m4.m33=0;
if (this.lstNCS == null ) this.lstNCS=Clazz.new_($I$(8,1));
this.lstNCS.addLast$O(m4);
} else {
if (this.htBiomts == null ) this.htBiomts=Clazz.new_($I$(3,1));
this.htBiomts.put$O$O(id, m4);
}});

Clazz.newMeth(C$, 'processChemCompLoopBlock', function () {
this.parseLoopParameters$SA(C$.chemCompFields);
var groupName;
var hetName;
while (this.parser.getData$())if (!this.isNull$S(groupName=this.getField$B(0)) && !this.isNull$S(hetName=this.getField$B(1)) ) this.addHetero$S$S$Z$Z(groupName, hetName, true, true);

return true;
}, p$1);

Clazz.newMeth(C$, 'addHetero$S$S$Z$Z', function (groupName, hetName, doCheck, addNote) {
if (doCheck && !this.vwr.getJBR$().isHetero$S(groupName) ) return;
if (this.htHetero == null ) this.htHetero=Clazz.new_($I$(3,1));
if (doCheck && this.htHetero.containsKey$O(groupName) ) return;
this.htHetero.put$O$O(groupName, hetName);
if (addNote) this.appendLoadNote$S(groupName + " = " + hetName );
});

Clazz.newMeth(C$, 'processStructConfLoopBlock', function () {
if (this.ignoreStructure) {
this.parser.skipLoop$Z(false);
return false;
}this.parseLoopParametersFor$S$SA("_struct_conf", C$.structConfFields);
if (!this.checkAllFieldsPresent$SA$I$Z(C$.structConfFields, -1, true)) {
this.parser.skipLoop$Z(true);
return false;
}while (this.parser.getData$()){
var structure=Clazz.new_([-1, $I$(11).HELIX, $I$(11).HELIX, null, 0, 0, null],$I$(10,1).c$$I$org_jmol_c_STR$org_jmol_c_STR$S$I$I$javajs_util_BSA);
var type=this.getField$B(0);
if (type.startsWith$S("TURN")) structure.structureType=structure.substructureType=$I$(11).TURN;
 else if (!type.startsWith$S("HELX")) structure.structureType=structure.substructureType=$I$(11).NONE;
 else structure.substructureType=$I$(10,"getHelixType$I",[this.parseIntStr$S(this.getField$B(9))]);
structure.serialID=this.parseIntStr$S(this.getField$B(8));
structure.structureID=this.getField$B(7);
p$1.addStructure$org_jmol_adapter_smarter_Structure.apply(this, [structure]);
}
return true;
}, p$1);

Clazz.newMeth(C$, 'addStructure$org_jmol_adapter_smarter_Structure', function (structure) {
structure.startChainID=this.vwr.getChainID$S$Z(structure.startChainStr=this.getField$B(1), true);
structure.startSequenceNumber=this.parseIntStr$S(this.getField$B(2));
structure.startInsertionCode=this.getField$B(3).charAt$I(0);
structure.endChainID=this.vwr.getChainID$S$Z(structure.endChainStr=this.getField$B(4), true);
structure.endSequenceNumber=this.parseIntStr$S(this.getField$B(5));
structure.endInsertionCode=this.getField$B(6).charAt$I(0);
this.asc.addStructure$org_jmol_adapter_smarter_Structure(structure);
}, p$1);

Clazz.newMeth(C$, 'processStructSheetRangeLoopBlock', function () {
if (this.ignoreStructure) {
this.parser.skipLoop$Z(false);
return false;
}this.parseLoopParametersFor$S$SA("_struct_sheet_range", C$.structSheetRangeFields);
if (!this.checkAllFieldsPresent$SA$I$Z(C$.structSheetRangeFields, -1, true)) {
this.parser.skipLoop$Z(true);
return false;
}while (this.parser.getData$())p$1.addStructure$org_jmol_adapter_smarter_Structure.apply(this, [Clazz.new_([-1, $I$(11).SHEET, $I$(11).SHEET, this.getField$B(0), this.parseIntStr$S(this.getField$B(7)), 1, null],$I$(10,1).c$$I$org_jmol_c_STR$org_jmol_c_STR$S$I$I$javajs_util_BSA)]);

return true;
}, p$1);

Clazz.newMeth(C$, 'processStructSiteBlock', function () {
this.parseLoopParametersFor$S$SA("_struct_site_gen", C$.structSiteFields);
var htSite=null;
this.htSites=Clazz.new_($I$(3,1));
var seqNum;
var resID;
while (this.parser.getData$()){
if (this.isNull$S(seqNum=this.getField$B(3)) || this.isNull$S(resID=this.getField$B(1)) ) continue;
var siteID=this.getField$B(0);
htSite=this.htSites.get$O(siteID);
if (htSite == null ) {
htSite=Clazz.new_($I$(3,1));
htSite.put$O$O("groups", "");
this.htSites.put$O$O(siteID, htSite);
}var insCode=this.getField$B(4);
var chainID=this.getField$B(2);
var group="[" + resID + "]" + seqNum + (this.isNull$S(insCode) ? "" : "^" + insCode) + (this.isNull$S(chainID) ? "" : ":" + chainID) ;
var groups=htSite.get$O("groups");
groups += (groups.length$() == 0 ? "" : ",") + group;
htSite.put$O$O("groups", groups);
}
return true;
}, p$1);

Clazz.newMeth(C$, 'setBiomolecules', function () {
if (this.assemblyIdAtoms == null  && this.chainAtomCounts == null  ) return;
var bsAll=Clazz.new_($I$(5,1));
for (var i=this.vBiomolecules.size$(); --i >= 0; ) {
var biomolecule=this.vBiomolecules.get$I(i);
p$1.setBiomolecule$java_util_Map$javajs_util_BS.apply(this, [biomolecule, (biomolecule === this.thisBiomolecule  ? bsAll : null)]);
}
if (this.isBiomolecule && bsAll.cardinality$() < this.asc.ac ) {
if (this.asc.bsAtoms != null ) this.asc.bsAtoms.and$javajs_util_BS(bsAll);
 else if (!this.isCourseGrained) this.asc.bsAtoms=bsAll;
}}, p$1);

Clazz.newMeth(C$, 'setBiomolecule$java_util_Map$javajs_util_BS', function (biomolecule, bsAll) {
var biomtchains=biomolecule.get$O("chains");
var biomts=biomolecule.get$O("biomts");
var operators=biomolecule.get$O("operators");
var assemblies=biomolecule.get$O("assemblies");
var sum=Clazz.new_($I$(12,1));
var count=0;
var bsAtoms=Clazz.new_($I$(5,1));
var nAtomsTotal=0;
var isBioCourse=(this.isBiomolecule && this.isCourseGrained );
for (var i=operators.size$(); --i >= 0; ) {
var ops=$I$(2,"split$S$S",[operators.get$I(i), ","]);
var ids=$I$(2,"split$S$S",[assemblies.get$I(i), "$"]);
var chainlist="";
var nAtoms=0;
for (var j=1; j < ids.length; j++) {
var id=ids[j];
chainlist += ":" + id + ";" ;
if (this.assemblyIdAtoms != null ) {
biomolecule.put$O$O("asemblyIdAtoms", this.assemblyIdAtoms);
var bs=this.assemblyIdAtoms.get$O(id);
if (bs != null ) {
bsAtoms.or$javajs_util_BS(bs);
if (bsAll != null ) bsAll.or$javajs_util_BS(bs);
nAtoms+=bs.cardinality$();
}} else if (isBioCourse) {
var asum=this.chainAtomMap.get$O(id);
if (asum != null ) {
if (this.bySymop) {
sum.add$javajs_util_T3(asum);
count+=this.chainAtomCounts.get$O(id)[0];
} else {
p$1.createParticle$S.apply(this, [id]);
nAtoms++;
}}}}
if (!this.isBiomolecule) continue;
for (var j=0; j < ops.length; j++) {
var m=p$1.getOpMatrix$S.apply(this, [ops[j]]);
if (m == null ) return 0;
if (m.equals$O(this.mident)) {
biomts.add$I$O(0, this.mident);
biomtchains.add$I$O(0, chainlist);
} else {
biomts.addLast$O(m);
biomtchains.addLast$O(chainlist);
}}
if (this.bySymop && bsAll != null  ) {
nAtoms=1;
var a1=Clazz.new_($I$(4,1));
a1.setT$javajs_util_T3(sum);
a1.scale$F(1.0 / count);
a1.radius=16;
this.asc.addAtom$org_jmol_adapter_smarter_Atom(a1);
}nAtoms*=ops.length;
nAtomsTotal+=nAtoms;
}
biomolecule.put$O$O("atomCount", Integer.valueOf$I(nAtomsTotal));
return nAtomsTotal;
}, p$1);

Clazz.newMeth(C$, 'createParticle$S', function (id) {
var asum=this.chainAtomMap.get$O(id);
var c=this.chainAtomCounts.get$O(id)[0];
var a=Clazz.new_($I$(4,1));
a.setT$javajs_util_T3(asum);
a.scale$F(1.0 / c);
a.elementSymbol="Pt";
this.setChainID$org_jmol_adapter_smarter_Atom$S(a, id);
a.radius=16;
this.asc.addAtom$org_jmol_adapter_smarter_Atom(a);
}, p$1);

Clazz.newMeth(C$, 'getOpMatrix$S', function (ops) {
if (this.htBiomts == null ) return $I$(1).newM4$javajs_util_M4(null);
var pt=ops.indexOf$S("|");
if (pt >= 0) {
var m=$I$(1,"newM4$javajs_util_M4",[this.htBiomts.get$O(ops.substring$I$I(0, pt))]);
m.mul$javajs_util_M4(this.htBiomts.get$O(ops.substring$I(pt + 1)));
return m;
}return this.htBiomts.get$O(ops);
}, p$1);

Clazz.newMeth(C$, 'processStructConnLoopBlock', function () {
this.parseLoopParametersFor$S$SA("_struct_conn", C$.structConnFields);
while (this.parser.getData$()){
var sym1=this.getField$B(5);
var sym2=this.getField$B(11);
if (!sym1.equals$O(sym2) || !this.isNull$S(sym1) && !sym1.equals$O("1_555")  ) continue;
var type=this.getField$B(12);
if (!type.startsWith$S("covale") && !type.equals$O("disulf") && !type.equals$O("metalc")  ) continue;
if (this.htBondMap == null ) this.htBondMap=Clazz.new_($I$(3,1));
var key1=this.vwr.getChainID$S$Z(this.getField$B(0), true) + this.getField$B(2) + new Float(this.parseFloatStr$S(this.getField$B(1))).toString() + this.getField$B(3) + this.getField$B(4) ;
var key2=this.vwr.getChainID$S$Z(this.getField$B(6), true) + this.getField$B(8) + new Float(this.parseFloatStr$S(this.getField$B(7))).toString() + this.getField$B(9) + this.getField$B(10) ;
var order=this.getBondOrder$S(this.getField$B(13));
if (this.structConnMap == null ) this.structConnMap=Clazz.new_($I$(8,1));
this.structConnMap.addLast$O(Clazz.array(java.lang.Object, -1, [key1, key2, Integer.valueOf$I(order)]));
if (this.structConnList.indexOf$S(key1) < 0) this.structConnList += key1;
if (this.structConnList.indexOf$S(key2) < 0) this.structConnList += key2;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'processCompBondLoopBlock', function () {
this.doSetBonds=true;
this.parseLoopParametersFor$S$SA("_chem_comp_bond", C$.chemCompBondFields);
while (this.parser.getData$()){
var comp=this.getField$B(0);
var atom1=this.getField$B(1);
var atom2=this.getField$B(2);
var order=this.getBondOrder$S(this.getField$B(3));
if ((this.getField$B(4).charAt$I(0) == "Y")) switch (order) {
case 1:
order=513;
break;
case 2:
order=514;
break;
}
if (this.isLigand) {
this.asc.addNewBondWithOrderA$org_jmol_adapter_smarter_Atom$org_jmol_adapter_smarter_Atom$I(this.asc.getAtomFromName$S(atom1), this.asc.getAtomFromName$S(atom2), order);
} else if (this.haveHAtoms || this.htHetero != null  && this.htHetero.containsKey$O(comp)  ) {
if (this.htBondMap == null ) this.htBondMap=Clazz.new_($I$(3,1));
var cmap=this.htBondMap.get$O(comp);
if (cmap == null ) this.htBondMap.put$O$O(comp, cmap=Clazz.new_($I$(8,1)));
cmap.addLast$O(Clazz.array(java.lang.Object, -1, [atom1, atom2, Integer.valueOf$I(this.haveHAtoms ? order : 1)]));
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'processSubclassAtom$org_jmol_adapter_smarter_Atom$S$S', function (atom, assemblyId, strChain) {
if (this.isBiomolecule) {
if (this.isCourseGrained) {
var sum=this.chainAtomMap.get$O(assemblyId);
if (sum == null ) {
this.chainAtomMap.put$O$O(assemblyId, sum=Clazz.new_($I$(12,1)));
this.chainAtomCounts.put$O$O(assemblyId, Clazz.array(Integer.TYPE, [1]));
}this.chainAtomCounts.get$O(assemblyId)[0]++;
sum.add$javajs_util_T3(atom);
return false;
}} else if (this.byChain) {
if (this.thisChain != atom.chainID) {
this.thisChain=atom.chainID;
this.chainSum=this.chainAtomMap.get$O(strChain);
if (this.chainSum == null ) {
this.chainAtomMap.put$O$O(strChain, this.chainSum=Clazz.new_($I$(12,1)));
this.chainAtomCounts.put$O$O(strChain, this.chainAtomCount=Clazz.array(Integer.TYPE, [1]));
}}this.chainSum.add$javajs_util_T3(atom);
this.chainAtomCount[0]++;
return false;
}if (assemblyId != null ) {
if (this.assemblyIdAtoms == null ) this.assemblyIdAtoms=Clazz.new_($I$(3,1));
var bs=this.assemblyIdAtoms.get$O(assemblyId);
if (bs == null ) this.assemblyIdAtoms.put$O$O(assemblyId, bs=Clazz.new_($I$(5,1)));
bs.set$I(this.ac);
}return true;
});

Clazz.newMeth(C$, 'checkPDBModelField$I$I', function (modelField, currentModelNo) {
this.fieldProperty$I(modelField);
var modelNo=this.parseIntStr$S(this.field);
return (modelNo == currentModelNo ? modelNo : this.incrementModel$I(modelNo));
});

Clazz.newMeth(C$, 'incrementModel$I', function (modelNo) {
var isAssembly=(this.thisDataSetName != null  && this.thisDataSetName.indexOf$S("-assembly-") >= 0 );
if (isAssembly) {
this.useFileModelNumbers=true;
var key="," + modelNo + "," ;
if (this.modelStrings.indexOf$S(key) >= 0) {
this.requiresSorting=true;
} else {
this.modelStrings += key;
}}if (this.iHaveDesiredModel && this.asc.atomSetCount > 0  && !isAssembly ) {
this.done=true;
if (this.parser != null ) {
this.parser.skipLoop$Z(false);
this.skipping=false;
}this.continuing=true;
return -2147483648;
}var modelNumberToUse=(this.useFileModelNumbers ? modelNo : ++this.modelIndex);
p$1.setHetero.apply(this, []);
this.newModel$I(modelNumberToUse);
if (!this.skipping) {
this.nextAtomSet$();
if (this.modelMap == null  || this.asc.ac == 0 ) this.modelMap=Clazz.new_($I$(3,1));
this.modelMap.put$O$O("" + modelNo, Integer.valueOf$I(Math.max(0, this.asc.iSet)));
this.modelMap.put$O$O("_" + Math.max(0, this.asc.iSet), Integer.valueOf$I(modelNo));
}return modelNo;
});

Clazz.newMeth(C$, 'setHetero', function () {
if (this.htHetero != null ) {
this.asc.setCurrentModelInfo$S$O("hetNames", this.htHetero);
this.asc.setInfo$S$O("hetNames", this.htHetero);
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.ncsoperFields=Clazz.array(String, -1, ["*_matrix[1][1]", "*_matrix[1][2]", "*_matrix[1][3]", "*_vector[1]", "*_matrix[2][1]", "*_matrix[2][2]", "*_matrix[2][3]", "*_vector[2]", "*_matrix[3][1]", "*_matrix[3][2]", "*_matrix[3][3]", "*_vector[3]", "*_id", "*_symmetry_operation"]);
C$.operFields=Clazz.array(String, -1, ["*_matrix[1][1]", "*_matrix[1][2]", "*_matrix[1][3]", "*_vector[1]", "*_matrix[2][1]", "*_matrix[2][2]", "*_matrix[2][3]", "*_vector[2]", "*_matrix[3][1]", "*_matrix[3][2]", "*_matrix[3][3]", "*_vector[3]", "*_id", "*_symmetry_operation"]);
C$.assemblyFields=Clazz.array(String, -1, ["_pdbx_struct_assembly_gen_assembly_id", "_pdbx_struct_assembly_gen_oper_expression", "_pdbx_struct_assembly_gen_asym_id_list"]);
C$.structRefFields=Clazz.array(String, -1, ["_struct_ref_seq_dif_mon_id", "_struct_ref_seq_dif_db_mon_id"]);
C$.chemCompFields=Clazz.array(String, -1, ["_chem_comp_id", "_chem_comp_name"]);
C$.structConfFields=Clazz.array(String, -1, ["*_conf_type_id", "*_beg_auth_asym_id", "*_beg_auth_seq_id", "*_pdbx_beg_pdb_ins_code", "*_end_auth_asym_id", "*_end_auth_seq_id", "*_pdbx_end_pdb_ins_code", "*_id", "*_pdbx_pdb_helix_id", "*_pdbx_pdb_helix_class"]);
C$.structSheetRangeFields=Clazz.array(String, -1, ["*_sheet_id", "*_beg_auth_asym_id", "*_beg_auth_seq_id", "*_pdbx_beg_pdb_ins_code", "*_end_auth_asym_id", "*_end_auth_seq_id", "*_pdbx_end_pdb_ins_code", "*_id"]);
C$.structSiteFields=Clazz.array(String, -1, ["*_site_id", "*_auth_comp_id", "*_auth_asym_id", "*_auth_seq_id", "*_label_alt_id"]);
C$.structConnFields=Clazz.array(String, -1, ["*_ptnr1_auth_asym_id", "*_ptnr1_auth_seq_id", "*_ptnr1_auth_comp_id", "*_ptnr1_label_atom_id", "*_pdbx_ptnr1_label_alt_id", "*_ptnr1_symmetry", "*_ptnr2_auth_asym_id", "*_ptnr2_auth_seq_id", "*_ptnr2_auth_comp_id", "*_ptnr2_label_atom_id", "*_pdbx_ptnr2_label_alt_id", "*_ptnr2_symmetry", "*_conn_type_id", "*_pdbx_value_order"]);
C$.chemCompBondFields=Clazz.array(String, -1, ["*_comp_id", "*_atom_id_1", "*_atom_id_2", "*_value_order", "*_pdbx_aromatic_flag"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
