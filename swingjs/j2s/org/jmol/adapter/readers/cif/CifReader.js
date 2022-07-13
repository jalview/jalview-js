(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.cif"),p$1={},I$=[[0,'javajs.util.Lst','javajs.util.P3','javajs.util.Rdr','javajs.util.CifDataParser','org.jmol.util.Logger','javajs.util.PT','java.util.Hashtable','org.jmol.adapter.smarter.Atom','org.jmol.api.JmolAdapter','org.jmol.util.Vibration','javajs.util.V3','javajs.util.BS']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CifReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allowRotations=true;
this.readIdeal=true;
this.configurationPtr=-2147483648;
this.useAuthorChainID=true;
this.thisDataSetName="";
this.chemicalName="";
this.thisStructuralFormula="";
this.thisFormula="";
this.molecularType="GEOM_BOND default";
this.lastAltLoc="\u0000";
this.nMolecular=0;
this.$latticeType=null;
this.titleAtomSet=1;
this.col2key=Clazz.array(Integer.TYPE, [100]);
this.key2col=Clazz.array(Integer.TYPE, [100]);
this.firstChar="\u0000";
this.bondTypes=Clazz.new_($I$(1,1));
this.disorderAssembly=".";
this.ptOffset=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['isAFLOW','filterAssembly','allowRotations','readIdeal','useAuthorChainID','iHaveDesiredModel','isMMCIF','isLigand','isMagCIF','haveHAtoms','haveAromatic','skipping','modulated','isCourseGrained','haveCellWaveVector','isLoop'],'C',['lastAltLoc','firstChar'],'I',['configurationPtr','conformationIndex','nMolecular','nAtoms','ac','nAtoms0','titleAtomSet','intTableNo','maxSerial','firstAtom'],'S',['thisDataSetName','lastDataSetName','chemicalName','thisStructuralFormula','thisFormula','molecularType','appendedData','auditBlockCode','lastSpaceGroupName','$latticeType','pdbID','key','key0','data','field','disorderAssembly','lastDisorderAssembly'],'O',['modr','org.jmol.adapter.readers.cif.MSCifParser','parser','javajs.api.GenericCifDataParser','htGroup1','java.util.Map','+htCellTypes','+modelMap','htAudit','java.util.Hashtable','symops','javajs.util.Lst','col2key','int[]','+key2col','htOxStates','java.util.Map','bondTypes','javajs.util.Lst','+lattvecs','+magCenterings','atomRadius','float[]','bsConnected','javajs.util.BS[]','+bsSets','ptOffset','javajs.util.P3','bsMolecule','javajs.util.BS','+bsExclude','atoms','org.jmol.adapter.smarter.Atom[]','bsBondDuplicates','javajs.util.BS']]
,['S',['singleAtomID'],'O',['TransformFields','String[]','+atomTypeFields','+atomFields','+citationFields','+symmetryOperationsFields','+geomBondFields']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.initSubclass$();
this.allowPDBFilter=true;
this.appendedData=this.htParams.get$O("appendedData");
var conf=this.getFilter$S("CONF ");
if (conf != null ) this.configurationPtr=this.parseIntStr$S(conf);
this.isMolecular=this.checkFilterKey$S("MOLECUL") && !this.checkFilterKey$S("BIOMOLECULE") ;
this.isPrimitive=this.checkFilterKey$S("PRIMITIVE");
this.readIdeal=!this.checkFilterKey$S("NOIDEAL");
this.filterAssembly=this.checkFilterKey$S("$");
this.useAuthorChainID=!this.checkFilterKey$S("NOAUTHORCHAINS");
if (this.isMolecular) {
this.forceSymmetry$Z(false);
this.molecularType="filter \"MOLECULAR\"";
}this.asc.checkSpecial=!this.checkFilterKey$S("NOSPECIAL");
this.allowRotations=!this.checkFilterKey$S("NOSYM");
if (this.strSupercell != null  && this.strSupercell.indexOf$S(",") >= 0 ) p$1.addCellType$S$S$Z.apply(this, ["conventional", this.strSupercell, true]);
if (this.binaryDoc != null ) return;
p$1.readCifData.apply(this, []);
this.continuing=false;
});

Clazz.newMeth(C$, 'initSubclass$', function () {
});

Clazz.newMeth(C$, 'readCifData', function () {
this.parser=this.getCifDataParser$();
this.line="";
while (p$1.continueWith$S.apply(this, [this.key=this.parser.peekToken$()]))if (!p$1.readAllData.apply(this, [])) break;

if (this.appendedData != null ) {
this.parser=(this.getInterface$S("javajs.util.CifDataParser")).set$javajs_api_GenericLineReader$java_io_BufferedReader$Z(null, $I$(3).getBR$S(this.appendedData), this.debugging);
while ((this.key=this.parser.peekToken$()) != null )if (!p$1.readAllData.apply(this, [])) break;

}}, p$1);

Clazz.newMeth(C$, 'continueWith$S', function (key) {
var ret=(key != null  && !key.equals$O("_shelx_hkl_file") );
return ret;
}, p$1);

Clazz.newMeth(C$, 'getCifDataParser$', function () {
return Clazz.new_($I$(4,1)).set$javajs_api_GenericLineReader$java_io_BufferedReader$Z(this, null, this.debugging);
});

Clazz.newMeth(C$, 'readAllData', function () {
if (this.key.startsWith$S("data_")) {
this.isLigand=false;
if (this.asc.atomSetCount == 0) this.iHaveDesiredModel=false;
if (this.iHaveDesiredModel) return false;
if (this.desiredModelNumber != -2147483648) this.appendLoadNote$S(null);
this.newModel$I(++this.modelNumber);
this.haveCellWaveVector=false;
if (this.auditBlockCode == null ) this.modulated=false;
if (!this.skipping) {
this.nAtoms0=this.asc.ac;
p$1.processDataParameter.apply(this, []);
this.nAtoms=this.asc.ac;
}return true;
}if (this.skipping && this.key.equals$O("_audit_block_code") ) {
this.iHaveDesiredModel=false;
this.skipping=false;
}this.isLoop=this.key.startsWith$S("loop_");
if (this.isLoop) {
if (this.skipping && !this.isMMCIF ) {
this.parser.getTokenPeeked$();
this.parser.skipLoop$Z(false);
} else {
this.processLoopBlock$();
}return true;
}if (this.key.indexOf$S("_") != 0) {
$I$(5,"warn$S",[this.key.startsWith$S("save_") ? "CIF reader ignoring save_" : "CIF ERROR ? should be an underscore: " + this.key]);
this.parser.getTokenPeeked$();
} else if (!p$1.getData.apply(this, [])) {
return true;
}if (!this.skipping) {
this.key=this.parser.fixKey$S(this.key0=this.key);
if (this.key.startsWith$S("_chemical_name") || this.key.equals$O("_chem_comp_name") ) {
p$1.processChemicalInfo$S.apply(this, ["name"]);
} else if (this.key.startsWith$S("_chemical_formula_structural")) {
p$1.processChemicalInfo$S.apply(this, ["structuralFormula"]);
} else if (this.key.startsWith$S("_chemical_formula_sum") || this.key.equals$O("_chem_comp_formula") ) {
p$1.processChemicalInfo$S.apply(this, ["formula"]);
} else if (this.key.equals$O("_cell_modulation_dimension")) {
this.modDim=this.parseIntStr$S(this.data);
} else if (this.key.startsWith$S("_cell_") && this.key.indexOf$S("_commen_") < 0 ) {
p$1.processCellParameter.apply(this, []);
} else if (this.key.startsWith$S("_atom_sites_fract_tran")) {
p$1.processUnitCellTransformMatrix.apply(this, []);
} else if (this.key.startsWith$S("_audit")) {
if (this.key.equals$O("_audit_block_code")) {
this.auditBlockCode=this.parser.fullTrim$S(this.data).toUpperCase$();
this.appendLoadNote$S(this.auditBlockCode);
if (this.htAudit != null  && this.auditBlockCode.contains$CharSequence("_MOD_") ) {
var key=$I$(6).rep$S$S$S(this.auditBlockCode, "_MOD_", "_REFRNCE_");
if (this.asc.setSymmetry$org_jmol_api_SymmetryInterface(this.htAudit.get$O(key)) != null ) {
this.unitCellParams=this.asc.getSymmetry$().getUnitCellParams$();
this.iHaveUnitCell=true;
}} else if (this.htAudit != null ) {
if (this.symops != null ) for (var i=0; i < this.symops.size$(); i++) this.setSymmetryOperator$S(this.symops.get$I(i));

}if (this.lastSpaceGroupName != null ) this.setSpaceGroupName$S(this.lastSpaceGroupName);
} else if (this.key.equals$O("_audit_creation_date")) {
this.symmetry=null;
}} else if (this.key.equals$O(C$.singleAtomID)) {
p$1.readSingleAtom.apply(this, []);
} else if (this.key.startsWith$S("_symmetry_space_group_name_h-m") || this.key.startsWith$S("_symmetry_space_group_name_hall") || this.key.startsWith$S("_space_group_name") || this.key.contains$CharSequence("_ssg_name") || this.key.contains$CharSequence("_magn_name") || this.key.contains$CharSequence("_bns_name")  ) {
p$1.processSymmetrySpaceGroupName.apply(this, []);
} else if (this.key.startsWith$S("_space_group_transform") || this.key.startsWith$S("_parent_space_group") || this.key.startsWith$S("_space_group_magn_transform")  ) {
p$1.processUnitCellTransform.apply(this, []);
} else if (this.key.contains$CharSequence("_database_code")) {
p$1.addModelTitle$S.apply(this, ["ID"]);
} else if ("__citation_title__publ_section_title__active_magnetic_irreps_details__".contains$CharSequence("_" + this.key + "__" )) {
p$1.addModelTitle$S.apply(this, ["TITLE"]);
} else if (this.key.startsWith$S("_aflow_")) {
this.isAFLOW=true;
} else if (this.key.equals$O("_symmetry_int_tables_number")) {
this.intTableNo=this.parseIntStr$S(this.data);
this.rotateHexCell=(this.isAFLOW && (this.intTableNo >= 143 && this.intTableNo <= 194 ) );
} else if (this.key.equals$O("_entry_id")) {
this.pdbID=this.data;
} else {
this.processSubclassEntry$();
}}return true;
}, p$1);

Clazz.newMeth(C$, 'addModelTitle$S', function (key) {
if (this.asc.atomSetCount > this.titleAtomSet) this.appendLoadNote$S("\nMODEL: " + (this.titleAtomSet=this.asc.atomSetCount));
this.appendLoadNote$S(key + ": " + this.parser.fullTrim$S(this.data) );
}, p$1);

Clazz.newMeth(C$, 'processSubclassEntry$', function () {
if (this.modDim > 0) p$1.getModulationReader.apply(this, []).processEntry$();
});

Clazz.newMeth(C$, 'processUnitCellTransform', function () {
this.data=$I$(6).replaceAllCharacters$S$S$S(this.data, " ", "");
if (this.key.contains$CharSequence("_from_parent") || this.key.contains$CharSequence("child_transform") ) p$1.addCellType$S$S$Z.apply(this, ["parent", this.data, true]);
 else if (this.key.contains$CharSequence("_to_standard") || this.key.contains$CharSequence("transform_bns_pp_abc") ) p$1.addCellType$S$S$Z.apply(this, ["standard", this.data, false]);
this.appendLoadNote$S(this.key + ": " + this.data );
}, p$1);

Clazz.newMeth(C$, 'addCellType$S$S$Z', function (type, data, isFrom) {
if (this.htCellTypes == null ) this.htCellTypes=Clazz.new_($I$(7,1));
if (data.startsWith$S("!")) {
data=data.substring$I(1);
isFrom=!isFrom;
}var cell=(isFrom ? "!" : "") + data;
this.htCellTypes.put$O$O(type, cell);
if (type.equalsIgnoreCase$S(this.strSupercell)) {
this.strSupercell=cell;
this.htCellTypes.put$O$O("conventional", (isFrom ? "" : "!") + data);
}}, p$1);

Clazz.newMeth(C$, 'readSingleAtom', function () {
var atom=Clazz.new_($I$(8,1));
atom.set$F$F$F(0, 0, 0);
atom.atomName=this.parser.fullTrim$S(this.data);
atom.getElementSymbol$();
this.asc.addAtom$org_jmol_adapter_smarter_Atom(atom);
}, p$1);

Clazz.newMeth(C$, 'getModulationReader', function () {
return (this.modr == null  ? p$1.initializeMSCIF.apply(this, []) : this.modr);
}, p$1);

Clazz.newMeth(C$, 'initializeMSCIF', function () {
if (this.modr == null ) this.ms=this.modr=this.getInterface$S("org.jmol.adapter.readers.cif.MSCifParser");
this.modulated=(this.modr.initialize$org_jmol_adapter_smarter_AtomSetCollectionReader$I(this, this.modDim) > 0);
return this.modr;
}, p$1);

Clazz.newMeth(C$, 'newModel$I', function (modelNo) {
this.skipping=!this.doGetModel$I$S(this.modelNumber=modelNo, null);
if (this.skipping) {
if (!this.isMMCIF) this.parser.getTokenPeeked$();
return;
}this.chemicalName="";
this.thisStructuralFormula="";
this.thisFormula="";
this.iHaveDesiredModel=this.isLastModel$I(this.modelNumber);
if (this.isCourseGrained) this.asc.setCurrentModelInfo$S$O("courseGrained", Boolean.TRUE);
if (this.nAtoms0 == this.asc.ac) {
this.modelNumber--;
this.haveModel=false;
this.asc.removeCurrentAtomSet$();
} else {
this.applySymmetryAndSetTrajectory$();
}});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
if (this.asc.iSet > 0 && this.asc.getAtomSetAtomCount$I(this.asc.iSet) == 0 ) this.asc.atomSetCount--;
 else if (!this.isMMCIF || !this.finalizeSubclass$() ) this.applySymmetryAndSetTrajectory$();
var n=this.asc.atomSetCount;
if (n > 1) this.asc.setCollectionName$S("<collection of " + n + " models>" );
if (this.pdbID != null ) this.asc.setCurrentModelInfo$S$O("pdbID", this.pdbID);
this.finalizeReaderASCR$();
this.addHeader$();
if (this.haveAromatic) this.addJmolScript$S("calculate aromatic");
});

Clazz.newMeth(C$, 'addHeader$', function () {
var header=this.parser.getFileHeader$();
if (header.length$() > 0) {
var s=this.setLoadNote$();
this.appendLoadNote$S(null);
this.appendLoadNote$S(header);
this.appendLoadNote$S(s);
this.setLoadNote$();
this.asc.setInfo$S$O("fileHeader", header);
}});

Clazz.newMeth(C$, 'finalizeSubclass$', function () {
return false;
});

Clazz.newMeth(C$, 'doPreSymmetry$', function () {
if (this.magCenterings != null ) p$1.addLatticeVectors.apply(this, []);
if (this.modDim > 0) p$1.getModulationReader.apply(this, []).setModulation$Z$org_jmol_api_SymmetryInterface(false, null);
if (this.isMagCIF) {
this.asc.getXSymmetry$().scaleFractionalVibs$();
this.vibsFractional=true;
}});

Clazz.newMeth(C$, 'applySymmetryAndSetTrajectory$', function () {
if (this.isMMCIF) this.asc.checkSpecial=false;
var doCheckBonding=this.doCheckUnitCell && !this.isMMCIF ;
if (this.isMMCIF) {
var modelIndex=this.asc.iSet;
this.asc.setCurrentModelInfo$S$O("PDB_CONECT_firstAtom_count_max", Clazz.array(Integer.TYPE, -1, [this.asc.getAtomSetAtomIndex$I(modelIndex), this.asc.getAtomSetAtomCount$I(modelIndex), this.maxSerial]));
}if (this.htCellTypes != null ) {
for (var e, $e = this.htCellTypes.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.asc.setCurrentModelInfo$S$O("unitcell_" + e.getKey$(), e.getValue$());

this.htCellTypes=null;
}if (!this.haveCellWaveVector) this.modDim=0;
if (this.doApplySymmetry && !this.iHaveFractionalCoordinates ) this.fractionalizeCoordinates$Z(true);
this.applySymTrajASCR$();
if (doCheckBonding && (this.bondTypes.size$() > 0 || this.isMolecular ) ) p$1.setBondingAndMolecules.apply(this, []);
this.asc.setCurrentModelInfo$S$O("fileHasUnitCell", Boolean.TRUE);
this.asc.xtalSymmetry=null;
});

Clazz.newMeth(C$, 'finalizeSubclassSymmetry$Z', function (haveSymmetry) {
var sym=(haveSymmetry ? this.asc.getXSymmetry$().getBaseSymmetry$() : null);
if (sym != null  && sym.getSpaceGroup$() == null  ) {
this.appendLoadNote$S("Invalid or missing space group operations!");
sym=null;
}if (this.modDim > 0 && sym != null  ) {
p$1.addLatticeVectors.apply(this, []);
this.asc.setTensors$();
p$1.getModulationReader.apply(this, []).setModulation$Z$org_jmol_api_SymmetryInterface(true, sym);
this.modr.finalizeModulation$();
}if (this.isMagCIF) {
this.asc.setNoAutoBond$();
if (sym != null ) {
this.addJmolScript$S("vectors on;vectors 0.15;");
var n=this.asc.getXSymmetry$().setSpinVectors$();
this.appendLoadNote$S(n + " magnetic moments - use VECTORS ON/OFF or VECTOR MAX x.x or SELECT VXYZ>0");
}}if (sym != null  && this.auditBlockCode != null   && this.auditBlockCode.contains$CharSequence("REFRNCE") ) {
if (this.htAudit == null ) this.htAudit=Clazz.new_($I$(7,1));
this.htAudit.put$O$O(this.auditBlockCode, sym);
}});

Clazz.newMeth(C$, 'processDataParameter', function () {
this.bondTypes.clear$();
this.parser.getTokenPeeked$();
this.thisDataSetName=(this.key.length$() < 6 ? "" : this.key.substring$I(5));
if (this.thisDataSetName.length$() > 0) this.nextAtomSet$();
if (this.debugging) $I$(5).debug$S(this.key);
}, p$1);

Clazz.newMeth(C$, 'nextAtomSet$', function () {
this.asc.setCurrentModelInfo$S$O("isCIF", Boolean.TRUE);
if (this.asc.iSet >= 0) {
if (this.isMMCIF) {
this.setModelPDB$Z(true);
if (this.pdbID != null ) this.asc.setCurrentModelInfo$S$O("pdbID", this.pdbID);
}this.asc.newAtomSet$();
if (this.isMMCIF) {
this.setModelPDB$Z(true);
if (this.pdbID != null ) this.asc.setCurrentModelInfo$S$O("pdbID", this.pdbID);
}} else {
this.asc.setCollectionName$S(this.thisDataSetName);
}});

Clazz.newMeth(C$, 'processChemicalInfo$S', function (type) {
if (type.equals$O("name")) {
this.chemicalName=this.data=this.parser.fullTrim$S(this.data);
this.appendLoadNote$S(this.chemicalName);
if (!this.data.equals$O("?")) this.asc.setInfo$S$O("modelLoadNote", this.data);
} else if (type.equals$O("structuralFormula")) {
this.thisStructuralFormula=this.data=this.parser.fullTrim$S(this.data);
} else if (type.equals$O("formula")) {
this.thisFormula=this.data=this.parser.fullTrim$S(this.data);
if (this.thisFormula.length$() > 1) this.appendLoadNote$S(this.thisFormula);
}if (this.debugging) {
$I$(5,"debug$S",[type + " = " + this.data ]);
}return this.data;
}, p$1);

Clazz.newMeth(C$, 'processSymmetrySpaceGroupName', function () {
if (this.key.indexOf$S("_ssg_name") >= 0) {
this.modulated=true;
this.$latticeType=this.data.substring$I$I(0, 1);
} else if (this.modulated) {
return;
}this.data=this.parser.toUnicode$S(this.data);
this.setSpaceGroupName$S(this.lastSpaceGroupName=(this.key.indexOf$S("h-m") > 0 ? "HM:" : this.modulated ? "SSG:" : this.key.indexOf$S("bns") >= 0 ? "BNS:" : this.key.indexOf$S("hall") >= 0 ? "Hall:" : "") + this.data);
}, p$1);

Clazz.newMeth(C$, 'addLatticeVectors', function () {
this.lattvecs=null;
if (this.magCenterings != null ) {
this.$latticeType="Magnetic";
this.lattvecs=Clazz.new_($I$(1,1));
for (var i=0; i < this.magCenterings.size$(); i++) {
var s=this.magCenterings.get$I(i);
var f=Clazz.array(Float.TYPE, [this.modDim + 4]);
if (s.indexOf$S("x1") >= 0) for (var j=1; j <= this.modDim + 3; j++) s=$I$(6).rep$S$S$S(s, "x" + j, "");

var tokens=$I$(6,"split$S$S",[$I$(6).replaceAllCharacters$S$S$S(s, "xyz+", ""), ","]);
var n=0;
for (var j=0; j < tokens.length; j++) {
s=tokens[j].trim$();
if (s.length$() == 0) continue;
if ((f[j]=$I$(6).parseFloatFraction$S(s)) != 0 ) n++;
}
if (n >= 2) this.lattvecs.addLast$O(f);
}
this.magCenterings=null;
} else if (this.$latticeType != null  && "ABCFI".indexOf$S(this.$latticeType) >= 0 ) {
this.lattvecs=Clazz.new_($I$(1,1));
try {
this.ms.addLatticeVector$javajs_util_Lst$S(this.lattvecs, this.$latticeType);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}if (this.lattvecs != null  && this.lattvecs.size$() > 0  && this.asc.getSymmetry$().addLatticeVectors$javajs_util_Lst(this.lattvecs) ) {
this.appendLoadNote$S("Note! " + this.lattvecs.size$() + " symmetry operators added for lattice centering " + this.$latticeType );
for (var i=0; i < this.lattvecs.size$(); i++) this.appendLoadNote$S($I$(6,"toJSON$S$O",[null, this.lattvecs.get$I(i)]));

}this.$latticeType=null;
}, p$1);

Clazz.newMeth(C$, 'processCellParameter', function () {
for (var i=$I$(9).cellParamNames.length; --i >= 0; ) if (this.key.equals$O($I$(9).cellParamNames[i])) {
var p=this.parseFloatStr$S(this.data);
if (this.rotateHexCell && i == 5  && p == 120  ) p=-1;
this.setUnitCellItem$I$F(i, p);
return;
}
}, p$1);

Clazz.newMeth(C$, 'processUnitCellTransformMatrix', function () {
var v=this.parseFloatStr$S(this.data);
if (Float.isNaN$F(v)) return;
for (var i=0; i < C$.TransformFields.length; i++) {
if (this.key.indexOf$S(C$.TransformFields[i]) >= 0) {
this.setUnitCellItem$I$F(6 + i, v);
return;
}}
}, p$1);

Clazz.newMeth(C$, 'getData', function () {
this.key=this.parser.getTokenPeeked$();
if (!p$1.continueWith$S.apply(this, [this.key])) return false;
this.data=this.parser.getNextToken$();
if (this.debugging && this.data != null   && this.data.length$() > 0  && this.data.charAt$I(0) != "\u0000" ) $I$(5).debug$S(">> " + this.key + " " + this.data );
if (this.data == null ) {
$I$(5).warn$S("CIF ERROR ? end of file; data missing: " + this.key);
return false;
}return (this.data.length$() == 0 || this.data.charAt$I(0) != "\u0000" );
}, p$1);

Clazz.newMeth(C$, 'processLoopBlock$', function () {
this.parser.getTokenPeeked$();
this.key=this.parser.peekToken$();
if (this.key == null ) return;
this.key=this.parser.fixKey$S(this.key0=this.key);
if (this.modDim > 0) switch (p$1.getModulationReader.apply(this, []).processLoopBlock$()) {
case 0:
break;
case -1:
this.parser.skipLoop$Z(false);
case 1:
return;
}
var isLigand=false;
if (this.key.startsWith$S("_atom_site") || (isLigand=this.key.equals$O("_chem_comp_atom_comp_id")) ) {
if (!this.processAtomSiteLoopBlock$Z(isLigand)) return;
if (this.thisDataSetName.equals$O("global")) this.asc.setCollectionName$S(this.thisDataSetName=this.chemicalName);
if (!this.thisDataSetName.equals$O(this.lastDataSetName)) {
this.asc.setAtomSetName$S(this.thisDataSetName);
this.lastDataSetName=this.thisDataSetName;
}this.asc.setCurrentModelInfo$S$O("chemicalName", this.chemicalName);
this.asc.setCurrentModelInfo$S$O("structuralFormula", this.thisStructuralFormula);
this.asc.setCurrentModelInfo$S$O("formula", this.thisFormula);
return;
}if (this.key.startsWith$S("_space_group_symop") || this.key.startsWith$S("_symmetry_equiv_pos") || this.key.startsWith$S("_symmetry_ssg_equiv")  ) {
if (this.ignoreFileSymmetryOperators) {
$I$(5).warn$S("ignoring file-based symmetry operators");
this.parser.skipLoop$Z(false);
} else {
p$1.processSymmetryOperationsLoopBlock.apply(this, []);
}return;
}if (this.key.startsWith$S("_citation")) {
p$1.processCitationListBlock.apply(this, []);
return;
}if (this.key.startsWith$S("_atom_type")) {
p$1.processAtomTypeLoopBlock.apply(this, []);
return;
}if ((this.isMolecular || !this.doApplySymmetry ) && this.key.startsWith$S("_geom_bond") ) {
p$1.processGeomBondLoopBlock.apply(this, []);
return;
}if (this.processSubclassLoopBlock$()) return;
if (this.key.equals$O("_propagation_vector_seq_id")) {
p$1.addMore.apply(this, []);
return;
}this.parser.skipLoop$Z(false);
});

Clazz.newMeth(C$, 'processSubclassLoopBlock$', function () {
return false;
});

Clazz.newMeth(C$, 'addMore', function () {
var str;
var n=0;
try {
while ((str=this.parser.peekToken$()) != null  && str.charAt$I(0) == "_" ){
this.parser.getTokenPeeked$();
n++;
}
var m=0;
var s="";
while ((str=this.parser.getNextDataToken$()) != null ){
s += str + (m % n == 0 ? "=" : " ");
if (++m % n == 0) {
this.appendUunitCellInfo$S(s.trim$());
s="";
}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'fieldProperty$I', function (i) {
return (i >= 0 && (this.field=this.parser.getColumnData$I(i)).length$() > 0  && (this.firstChar=this.field.charAt$I(0)) != "\u0000"  ? this.col2key[i] : -1);
});

Clazz.newMeth(C$, 'parseLoopParameters$SA', function (fields) {
this.parser.parseDataBlockParameters$SA$S$S$IA$IA(fields, this.isLoop ? null : this.key0, this.data, this.key2col, this.col2key);
});

Clazz.newMeth(C$, 'parseLoopParametersFor$S$SA', function (key, fields) {
if (fields[0].charAt$I(0) == "*") for (var i=fields.length; --i >= 0; ) if (fields[i].charAt$I(0) == "*") fields[i]=key + fields[i].substring$I(1);

this.parseLoopParameters$SA(fields);
});

Clazz.newMeth(C$, 'disableField$I', function (fieldIndex) {
var i=this.key2col[fieldIndex];
if (i != -1) this.col2key[i]=-1;
}, p$1);

Clazz.newMeth(C$, 'processAtomTypeLoopBlock', function () {
this.parseLoopParameters$SA(C$.atomTypeFields);
if (!this.checkAllFieldsPresent$SA$I$Z(C$.atomTypeFields, -1, false)) {
this.parser.skipLoop$Z(false);
return;
}var atomTypeSymbol;
var oxidationNumber=0;
while (this.parser.getData$()){
if (this.isNull$S(atomTypeSymbol=this.getField$B(0)) || Float.isNaN$F(oxidationNumber=this.parseFloatStr$S(this.getField$B(1))) ) continue;
if (this.htOxStates == null ) this.htOxStates=Clazz.new_($I$(7,1));
this.htOxStates.put$O$O(atomTypeSymbol, Float.valueOf$F(oxidationNumber));
}
}, p$1);

Clazz.newMeth(C$, 'processAtomSiteLoopBlock$Z', function (isLigand) {
this.isLigand=isLigand;
var pdbModelNo=-1;
var haveCoord=true;
this.parseLoopParametersFor$S$SA("_atom_site", C$.atomFields);
if (this.key2col[55] != -1) {
this.setFractionalCoordinates$Z(false);
} else if (this.key2col[6] != -1 || this.key2col[52] != -1 ) {
this.setFractionalCoordinates$Z(false);
p$1.disableField$I.apply(this, [3]);
p$1.disableField$I.apply(this, [4]);
p$1.disableField$I.apply(this, [5]);
if (this.key2col[16] != -1 && !this.isMMCIF ) {
this.setIsPDB$();
this.isMMCIF=true;
}} else if (this.key2col[3] != -1) {
this.setFractionalCoordinates$Z(true);
p$1.disableField$I.apply(this, [6]);
p$1.disableField$I.apply(this, [7]);
p$1.disableField$I.apply(this, [8]);
} else if (this.key2col[20] != -1 || this.key2col[21] != -1  || this.key2col[63] != -1 ) {
haveCoord=false;
} else {
this.parser.skipLoop$Z(false);
return false;
}var modelField=this.key2col[17];
var siteMult=0;
while (this.parser.getData$()){
if (modelField >= 0) {
pdbModelNo=this.checkPDBModelField$I$I(modelField, pdbModelNo);
if (pdbModelNo < 0) break;
if (this.skipping) continue;
}var atom=null;
if (haveCoord) {
atom=Clazz.new_($I$(8,1));
} else {
if (this.fieldProperty$I(this.key2col[20]) != -1 || this.fieldProperty$I(this.key2col[21]) != -1  || this.fieldProperty$I(this.key2col[63]) != -1 ) {
if ((atom=this.asc.getAtomFromName$S(this.field)) == null ) continue;
} else {
continue;
}}var componentId=null;
var strChain=null;
var id=null;
var seqID=0;
var n=this.parser.getColumnCount$();
for (var i=0; i < n; ++i) {
var tok=this.fieldProperty$I(i);
switch (tok) {
case -1:
break;
case 71:
seqID=this.parseIntStr$S(this.field);
break;
case 70:
id=this.field;
break;
case 50:
case 0:
var elementSymbol;
if (this.field.length$() < 2) {
elementSymbol=this.field;
} else {
var ch1=Character.toLowerCase$C(this.field.charAt$I(1));
if ($I$(8).isValidSym2$C$C(this.firstChar, ch1)) {
elementSymbol="" + this.firstChar + ch1 ;
} else {
elementSymbol="" + this.firstChar;
if (!this.haveHAtoms && this.firstChar == "H" ) this.haveHAtoms=true;
}}atom.elementSymbol=elementSymbol;
if (this.htOxStates != null  && this.htOxStates.containsKey$O(this.field) ) {
var charge=this.htOxStates.get$O(this.field).floatValue$();
atom.formalCharge=Math.round(charge);
if (Math.abs(atom.formalCharge - charge) > 0.1 ) if (this.debugging) {
$I$(5,"debug$S",["CIF charge on " + this.field + " was " + new Float(charge).toString() + "; rounded to " + atom.formalCharge ]);
}}break;
case 49:
case 1:
case 2:
atom.atomName=this.field;
break;
case 55:
var x=this.parseFloatStr$S(this.field);
if (this.readIdeal && !Float.isNaN$F(x) ) atom.x=x;
break;
case 56:
var y=this.parseFloatStr$S(this.field);
if (this.readIdeal && !Float.isNaN$F(y) ) atom.y=y;
break;
case 57:
var z=this.parseFloatStr$S(this.field);
if (this.readIdeal && !Float.isNaN$F(z) ) atom.z=z;
break;
case 52:
case 6:
case 3:
atom.x=this.parseFloatStr$S(this.field);
break;
case 53:
case 7:
case 4:
atom.y=this.parseFloatStr$S(this.field);
break;
case 54:
case 8:
case 5:
atom.z=this.parseFloatStr$S(this.field);
break;
case 51:
atom.formalCharge=this.parseIntStr$S(this.field);
break;
case 9:
var floatOccupancy=this.parseFloatStr$S(this.field);
if (!Float.isNaN$F(floatOccupancy)) atom.foccupancy=floatOccupancy;
break;
case 10:
atom.bfactor=this.parseFloatStr$S(this.field) * (this.isMMCIF ? 1 : 100.0);
break;
case 48:
case 11:
atom.group3=this.field;
break;
case 59:
componentId=this.field;
if (!this.useAuthorChainID) this.setChainID$org_jmol_adapter_smarter_Atom$S(atom, strChain=this.field);
break;
case 12:
if (this.useAuthorChainID) this.setChainID$org_jmol_adapter_smarter_Atom$S(atom, strChain=this.field);
break;
case 13:
this.maxSerial=Math.max(this.maxSerial, atom.sequenceNumber=this.parseIntStr$S(this.field));
break;
case 14:
atom.insertionCode=this.firstChar;
break;
case 15:
case 60:
atom.altLoc=this.firstChar;
break;
case 58:
this.disorderAssembly=this.field;
break;
case 19:
if (this.firstChar == "-" && this.field.length$() > 1 ) {
atom.altLoc=this.field.charAt$I(1);
atom.ignoreSymmetry=true;
} else {
atom.altLoc=this.firstChar;
}break;
case 16:
if ("HETATM".equals$O(this.field)) atom.isHetero=true;
break;
case 18:
if ("dum".equals$O(this.field)) {
atom.x=NaN;
continue;
}break;
case 61:
if (this.modulated) siteMult=this.parseIntStr$S(this.field);
break;
case 62:
case 47:
if (this.field.equalsIgnoreCase$S("Uiso")) {
var j=this.key2col[34];
if (j != -1) this.asc.setU$org_jmol_adapter_smarter_Atom$I$F(atom, 7, this.parseFloatStr$S(this.parser.getColumnData$I(j)));
}break;
case 22:
case 23:
case 24:
case 25:
case 26:
case 27:
case 28:
case 29:
case 30:
case 31:
case 32:
case 33:
this.asc.setU$org_jmol_adapter_smarter_Atom$I$F(atom, (this.col2key[i] - 22) % 6, this.parseFloatStr$S(this.field));
break;
case 35:
case 36:
case 37:
case 38:
case 39:
case 40:
this.asc.setU$org_jmol_adapter_smarter_Atom$I$F(atom, 6, 4);
this.asc.setU$org_jmol_adapter_smarter_Atom$I$F(atom, (this.col2key[i] - 35) % 6, this.parseFloatStr$S(this.field));
break;
case 41:
case 42:
case 43:
case 44:
case 45:
case 46:
this.asc.setU$org_jmol_adapter_smarter_Atom$I$F(atom, 6, 0);
this.asc.setU$org_jmol_adapter_smarter_Atom$I$F(atom, (this.col2key[i] - 41) % 6, this.parseFloatStr$S(this.field));
break;
case 64:
case 65:
case 66:
case 67:
case 68:
case 69:
this.isMagCIF=true;
var pt=atom.vib;
if (pt == null ) atom.vib=pt=Clazz.new_($I$(10,1)).setType$I(-2);
var v=this.parseFloatStr$S(this.field);
switch (tok) {
case 64:
case 67:
pt.x=v;
this.appendLoadNote$S("magnetic moment: " + this.line);
break;
case 65:
case 68:
pt.y=v;
break;
case 66:
case 69:
pt.z=v;
break;
}
break;
}
}
if (!haveCoord) continue;
if (Float.isNaN$F(atom.x) || Float.isNaN$F(atom.y) || Float.isNaN$F(atom.z)  ) {
$I$(5).warn$S("atom " + atom.atomName + " has invalid/unknown coordinates" );
continue;
}if (atom.elementSymbol == null  && atom.atomName != null  ) atom.getElementSymbol$();
if (!this.filterCIFAtom$org_jmol_adapter_smarter_Atom$S(atom, componentId)) continue;
this.setAtomCoord$org_jmol_adapter_smarter_Atom(atom);
if (this.isMMCIF && !this.processSubclassAtom$org_jmol_adapter_smarter_Atom$S$S(atom, componentId, strChain) ) continue;
if (this.asc.iSet < 0) this.nextAtomSet$();
this.asc.addAtomWithMappedName$org_jmol_adapter_smarter_Atom(atom);
if (id != null ) {
this.asc.atomSymbolicMap.put$O$O(id, atom);
if (seqID > 0) {
var pt=atom.vib;
if (pt == null ) pt=this.asc.addVibrationVector$I$F$F$F(atom.index, 0, NaN, 1094713365);
pt.x=seqID;
}}this.ac++;
if (this.modDim > 0 && siteMult != 0 ) atom.vib=$I$(11).new3$F$F$F(siteMult, 0, NaN);
}
this.asc.setCurrentModelInfo$S$O("isCIF", Boolean.TRUE);
if (this.isMMCIF) this.setModelPDB$Z(true);
if (this.isMMCIF && this.skipping ) this.skipping=false;
return true;
});

Clazz.newMeth(C$, 'checkPDBModelField$I$I', function (modelField, currentModelNo) {
return 0;
});

Clazz.newMeth(C$, 'processSubclassAtom$org_jmol_adapter_smarter_Atom$S$S', function (atom, assemblyId, strChain) {
return true;
});

Clazz.newMeth(C$, 'filterCIFAtom$org_jmol_adapter_smarter_Atom$S', function (atom, componentId) {
if (!this.filterAtom$org_jmol_adapter_smarter_Atom$I(atom, -1)) return false;
if (this.filterAssembly && this.filterReject$S$S$S(this.filter, "$", componentId) ) return false;
if (this.configurationPtr > 0) {
if (!this.disorderAssembly.equals$O(this.lastDisorderAssembly)) {
this.lastDisorderAssembly=this.disorderAssembly;
this.lastAltLoc="\u0000";
this.conformationIndex=this.configurationPtr;
}if (atom.altLoc != "\u0000") {
if (this.conformationIndex >= 0 && atom.altLoc != this.lastAltLoc ) {
this.lastAltLoc=atom.altLoc;
this.conformationIndex--;
}if (this.conformationIndex != 0) {
$I$(5).info$S("ignoring " + atom.atomName);
return false;
}}}return true;
});

Clazz.newMeth(C$, 'processCitationListBlock', function () {
this.parseLoopParameters$SA(C$.citationFields);
while (this.parser.getData$()){
var title=this.getField$B(0);
if (!this.isNull$S(title)) this.appendLoadNote$S("TITLE: " + this.parser.toUnicode$S(title));
}
}, p$1);

Clazz.newMeth(C$, 'processSymmetryOperationsLoopBlock', function () {
this.parseLoopParametersFor$S$SA("_space_group_symop", C$.symmetryOperationsFields);
var n;
this.symops=Clazz.new_($I$(1,1));
for (n=C$.symmetryOperationsFields.length; --n >= 0; ) if (this.key2col[n] != -1) break;

if (n < 0) {
$I$(5).warn$S("required _space_group_symop key not found");
this.parser.skipLoop$Z(false);
return;
}n=0;
var isMag=false;
while (this.parser.getData$()){
var ssgop=false;
var nn=this.parser.getColumnCount$();
var timeRev=(this.fieldProperty$I(this.key2col[7]) == -1 && this.fieldProperty$I(this.key2col[8]) == -1  && this.fieldProperty$I(this.key2col[6]) == -1  ? 0 : this.field.equals$O("-1") ? -1 : 1);
for (var i=0, tok; i < nn; ++i) {
switch (tok=this.fieldProperty$I(i)) {
case 5:
if (this.field.indexOf$I("~") >= 0) this.field=$I$(6).rep$S$S$S(this.field, "~", "");
case 2:
case 3:
this.modulated=true;
ssgop=true;
case 0:
case 4:
case 1:
if (this.allowRotations || timeRev != 0  || ++n == 1 ) if (!this.modulated || ssgop ) {
if (tok == 1 || tok == 3 ) {
isMag=true;
timeRev=(this.field.endsWith$S(",+1") || this.field.endsWith$S(",1")  ? 1 : this.field.endsWith$S(",-1") ? -1 : 0);
if (timeRev != 0) this.field=this.field.substring$I$I(0, this.field.lastIndexOf$I(","));
}if (timeRev != 0) this.field += "," + (timeRev == 1 ? "m" : "-m");
this.field=this.field.replace$C$C(";", " ");
this.symops.addLast$O(this.field);
this.setSymmetryOperator$S(this.field);
}break;
case 9:
case 10:
case 11:
isMag=true;
if (this.magCenterings == null ) this.magCenterings=Clazz.new_($I$(1,1));
this.magCenterings.addLast$O(this.field);
break;
}
}
}
if (this.ms != null  && !isMag ) p$1.addLatticeVectors.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getBondOrder$S', function (field) {
switch ((field.toUpperCase$().charCodeAt$I(0))) {
default:
$I$(5).warn$S("unknown CIF bond order: " + field);
case 0:
case 83:
return 1;
case 68:
return 2;
case 84:
return 3;
case 81:
return 4;
case 65:
this.haveAromatic=true;
return 515;
}
});

Clazz.newMeth(C$, 'processGeomBondLoopBlock', function () {
var bondLoopBug=(this.stateScriptVersionInt >= 130304 && this.stateScriptVersionInt < 140403  || this.stateScriptVersionInt >= 150000 && this.stateScriptVersionInt < 150403  );
this.parseLoopParameters$SA(C$.geomBondFields);
if (bondLoopBug || !this.checkAllFieldsPresent$SA$I$Z(C$.geomBondFields, 2, true) ) {
this.parser.skipLoop$Z(false);
return;
}var bondCount=0;
var name1;
var name2=null;
while (this.parser.getData$()){
name2=null;
if (this.asc.getAtomIndex$S(name1=this.getField$B(0)) < 0 || this.asc.getAtomIndex$S(name2=this.getField$B(1)) < 0 ) {
if (name2 == null  && this.asc.getAtomIndex$S(name1=name1.toUpperCase$()) < 0  || this.asc.getAtomIndex$S(name2=name2.toUpperCase$()) < 0 ) continue;
}var order=this.getBondOrder$S(this.getField$B(3));
var sdist=this.getField$B(2);
var distance=this.parseFloatStr$S(sdist);
if (distance == 0  || Float.isNaN$F(distance) ) {
if (!this.iHaveFractionalCoordinates) {
var a=this.asc.getAtomFromName$S(name1);
var b=this.asc.getAtomFromName$S(name2);
if (a != null  && b != null  ) this.asc.addNewBondWithOrder$I$I$I(a.index, b.index, order);
}continue;
}var dx=0;
var pt=sdist.indexOf$I("(");
if (pt >= 0) {
var data=sdist.toCharArray$();
var sdx=sdist.substring$I$I(pt + 1, sdist.length$() - 1);
var n=sdx.length$();
for (var j=pt; --j >= 0; ) {
if (data[j] == "." && --j < 0 ) break;
data[j]=(--n < 0 ? "0" : sdx.charAt$I(n));
}
dx=this.parseFloatStr$S(String.valueOf$CA(data));
if (Float.isNaN$F(dx)) {
$I$(5).info$S("error reading uncertainty for " + this.line);
dx=0.015;
}} else {
dx=0.015;
}bondCount++;
this.bondTypes.addLast$O(Clazz.array(java.lang.Object, -1, [name1, name2, Float.valueOf$F(distance), Float.valueOf$F(dx), Integer.valueOf$I(order)]));
}
if (bondCount > 0) {
$I$(5).info$S(bondCount + " bonds read");
if (!this.doApplySymmetry) {
this.isMolecular=true;
this.forceSymmetry$Z(false);
}}}, p$1);

Clazz.newMeth(C$, 'setBondingAndMolecules', function () {
this.atoms=this.asc.atoms;
this.firstAtom=this.asc.getLastAtomSetAtomIndex$();
var nat=this.asc.getLastAtomSetAtomCount$();
this.ac=this.firstAtom + nat;
$I$(5,"info$S",["CIF creating molecule for " + nat + " atoms " + (this.bondTypes.size$() > 0 ? " using GEOM_BOND records" : "") ]);
this.bsSets=Clazz.array($I$(12), [nat]);
this.symmetry=this.asc.getSymmetry$();
for (var i=this.firstAtom; i < this.ac; i++) {
var ipt=this.asc.getAtomFromName$S(this.atoms[i].atomName).index - this.firstAtom;
if (this.bsSets[ipt] == null ) this.bsSets[ipt]=Clazz.new_($I$(12,1));
this.bsSets[ipt].set$I(i - this.firstAtom);
}
if (this.isMolecular) {
this.atomRadius=Clazz.array(Float.TYPE, [this.ac]);
for (var i=this.firstAtom; i < this.ac; i++) {
var elemnoWithIsotope=$I$(9,"getElementNumber$S",[this.atoms[i].getElementSymbol$()]);
this.atoms[i].elementNumber=($s$[0] = elemnoWithIsotope, $s$[0]);
var charge=(this.atoms[i].formalCharge == -2147483648 ? 0 : this.atoms[i].formalCharge);
if (elemnoWithIsotope > 0) this.atomRadius[i]=$I$(9).getBondingRadius$I$I(elemnoWithIsotope, charge);
}
this.bsConnected=Clazz.array($I$(12), [this.ac]);
for (var i=this.firstAtom; i < this.ac; i++) this.bsConnected[i]=Clazz.new_($I$(12,1));

this.bsMolecule=Clazz.new_($I$(12,1));
this.bsExclude=Clazz.new_($I$(12,1));
}var isFirst=true;
this.bsBondDuplicates=Clazz.new_($I$(12,1));
while (p$1.createBonds$Z.apply(this, [isFirst])){
isFirst=false;
}
if (this.isMolecular && this.iHaveFractionalCoordinates && !this.bsMolecule.isEmpty$()  ) {
if (this.asc.bsAtoms == null ) this.asc.bsAtoms=Clazz.new_($I$(12,1));
this.asc.bsAtoms.clearBits$I$I(this.firstAtom, this.ac);
this.asc.bsAtoms.or$javajs_util_BS(this.bsMolecule);
this.asc.bsAtoms.andNot$javajs_util_BS(this.bsExclude);
for (var i=this.firstAtom; i < this.ac; i++) {
if (this.asc.bsAtoms.get$I(i)) this.symmetry.toCartesian$javajs_util_T3$Z(this.atoms[i], true);
 else if (this.debugging) $I$(5).debug$S(this.molecularType + " removing " + i + " " + this.atoms[i].atomName + " " + this.atoms[i] );
}
this.asc.setCurrentModelInfo$S$O("unitCellParams", null);
if (this.nMolecular++ == this.asc.iSet) {
this.asc.clearGlobalBoolean$I(0);
this.asc.clearGlobalBoolean$I(1);
this.asc.clearGlobalBoolean$I(2);
}}if (this.bondTypes.size$() > 0) this.asc.setCurrentModelInfo$S$O("hasBonds", Boolean.TRUE);
this.bondTypes.clear$();
this.atomRadius=null;
this.bsSets=null;
this.bsConnected=null;
this.bsMolecule=null;
this.bsExclude=null;
}, p$1);

Clazz.newMeth(C$, 'fixAtomForBonding$javajs_util_P3$I', function (pt, i) {
pt.setT$javajs_util_T3(this.atoms[i]);
if (this.iHaveFractionalCoordinates) this.symmetry.toCartesian$javajs_util_T3$Z(pt, true);
}, p$1);

Clazz.newMeth(C$, 'createBonds$Z', function (doInit) {
var list="";
var haveH=false;
for (var i=this.bondTypes.size$(); --i >= 0; ) {
if (this.bsBondDuplicates.get$I(i)) continue;
var o=this.bondTypes.get$I(i);
var distance=(o[2]).floatValue$();
var dx=(o[3]).floatValue$();
var order=(o[4]).intValue$();
var iatom1=this.asc.getAtomIndex$S(o[0]);
var iatom2=this.asc.getAtomIndex$S(o[1]);
if (doInit) {
var key=";" + iatom1 + ";" + iatom2 + ";" + new Float(distance).toString() ;
if (list.indexOf$S(key) >= 0) {
this.bsBondDuplicates.set$I(i);
continue;
}list += key;
}var bs1=this.bsSets[iatom1 - this.firstAtom];
var bs2=this.bsSets[iatom2 - this.firstAtom];
if (bs1 == null  || bs2 == null  ) continue;
if (this.atoms[iatom1].elementNumber == 1 || this.atoms[iatom2].elementNumber == 1 ) haveH=true;
for (var j=bs1.nextSetBit$I(0); j >= 0; j=bs1.nextSetBit$I(j + 1)) {
for (var k=bs2.nextSetBit$I(0); k >= 0; k=bs2.nextSetBit$I(k + 1)) {
if ((!this.isMolecular || !this.bsConnected[j + this.firstAtom].get$I(k) ) && p$1.checkBondDistance$org_jmol_adapter_smarter_Atom$org_jmol_adapter_smarter_Atom$F$F.apply(this, [this.atoms[j + this.firstAtom], this.atoms[k + this.firstAtom], distance, dx]) ) p$1.addNewBond$I$I$I.apply(this, [j + this.firstAtom, k + this.firstAtom, order]);
}
}
}
if (!this.iHaveFractionalCoordinates) return false;
if (this.bondTypes.size$() > 0 && !haveH ) for (var i=this.firstAtom; i < this.ac; i++) if (this.atoms[i].elementNumber == 1) {
var checkAltLoc=(this.atoms[i].altLoc != "\u0000");
for (var k=this.firstAtom; k < this.ac; k++) if (k != i && this.atoms[k].elementNumber != 1  && (!checkAltLoc || this.atoms[k].altLoc == "\u0000"  || this.atoms[k].altLoc == this.atoms[i].altLoc ) ) {
if (!this.bsConnected[i].get$I(k) && p$1.checkBondDistance$org_jmol_adapter_smarter_Atom$org_jmol_adapter_smarter_Atom$F$F.apply(this, [this.atoms[i], this.atoms[k], 1.1, 0]) ) p$1.addNewBond$I$I$I.apply(this, [i, k, 1]);
}
}
if (!this.isMolecular) return false;
if (doInit) for (var i=this.firstAtom; i < this.ac; i++) if (this.atoms[i].atomSite + this.firstAtom == i && !this.bsMolecule.get$I(i) ) p$1.setBs$org_jmol_adapter_smarter_AtomA$I$javajs_util_BSA$javajs_util_BS.apply(this, [this.atoms, i, this.bsConnected, this.bsMolecule]);

var bondTolerance=this.vwr.getFloat$I(570425348);
var bsBranch=Clazz.new_($I$(12,1));
var cart1=Clazz.new_($I$(2,1));
var cart2=Clazz.new_($I$(2,1));
var nFactor=2;
for (var i=this.firstAtom; i < this.ac; i++) if (!this.bsMolecule.get$I(i) && !this.bsExclude.get$I(i) ) for (var j=this.bsMolecule.nextSetBit$I(0); j >= 0; j=this.bsMolecule.nextSetBit$I(j + 1)) if (this.symmetry.checkDistance$javajs_util_P3$javajs_util_P3$F$F$I$I$I$javajs_util_P3(this.atoms[j], this.atoms[i], this.atomRadius[i] + this.atomRadius[j] + bondTolerance , 0, nFactor, nFactor, nFactor, this.ptOffset)) {
p$1.setBs$org_jmol_adapter_smarter_AtomA$I$javajs_util_BSA$javajs_util_BS.apply(this, [this.atoms, i, this.bsConnected, bsBranch]);
for (var k=bsBranch.nextSetBit$I(0); k >= 0; k=bsBranch.nextSetBit$I(k + 1)) {
this.atoms[k].add$javajs_util_T3(this.ptOffset);
p$1.fixAtomForBonding$javajs_util_P3$I.apply(this, [cart1, k]);
var bs=this.bsSets[this.asc.getAtomIndex$S(this.atoms[k].atomName) - this.firstAtom];
if (bs != null ) for (var ii=bs.nextSetBit$I(0); ii >= 0; ii=bs.nextSetBit$I(ii + 1)) {
if (ii + this.firstAtom == k) continue;
p$1.fixAtomForBonding$javajs_util_P3$I.apply(this, [cart2, ii + this.firstAtom]);
if (cart2.distance$javajs_util_T3(cart1) < 0.1 ) {
this.bsExclude.set$I(k);
break;
}}
this.bsMolecule.set$I(k);
}
return true;
}

return false;
}, p$1);

Clazz.newMeth(C$, 'checkBondDistance$org_jmol_adapter_smarter_Atom$org_jmol_adapter_smarter_Atom$F$F', function (a, b, distance, dx) {
if (this.iHaveFractionalCoordinates) return this.symmetry.checkDistance$javajs_util_P3$javajs_util_P3$F$F$I$I$I$javajs_util_P3(a, b, distance, dx, 0, 0, 0, this.ptOffset);
var d=a.distance$javajs_util_T3(b);
return (dx > 0  ? Math.abs(d - distance) <= dx  : d <= distance  && d > 0.1  );
}, p$1);

Clazz.newMeth(C$, 'addNewBond$I$I$I', function (i, j, order) {
this.asc.addNewBondWithOrder$I$I$I(i, j, order);
if (!this.isMolecular) return;
this.bsConnected[i].set$I(j);
this.bsConnected[j].set$I(i);
}, p$1);

Clazz.newMeth(C$, 'setBs$org_jmol_adapter_smarter_AtomA$I$javajs_util_BSA$javajs_util_BS', function (atoms, iatom, bsBonds, bs) {
var bsBond=bsBonds[iatom];
bs.set$I(iatom);
for (var i=bsBond.nextSetBit$I(0); i >= 0; i=bsBond.nextSetBit$I(i + 1)) {
if (!bs.get$I(i)) p$1.setBs$org_jmol_adapter_smarter_AtomA$I$javajs_util_BSA$javajs_util_BS.apply(this, [atoms, i, bsBonds, bs]);
}
}, p$1);

Clazz.newMeth(C$, 'checkSubclassSymmetry$', function () {
return this.doCheckUnitCell;
});

Clazz.newMeth(C$, 'checkAllFieldsPresent$SA$I$Z', function (keys, lastKey, critical) {
for (var i=(lastKey < 0 ? keys.length : lastKey); --i >= 0; ) if (this.key2col[i] == -1) {
if (critical) $I$(5).warn$S("CIF reader missing property: " + keys[i]);
return false;
}
return true;
});

Clazz.newMeth(C$, 'getField$B', function (type) {
var i=this.key2col[type];
return (i == -1 ? "\u0000" : this.parser.getColumnData$I(i));
});

Clazz.newMeth(C$, 'isNull$S', function (key) {
return key.equals$O("\u0000");
});

C$.$static$=function(){C$.$static$=0;
C$.TransformFields=Clazz.array(String, -1, ["x[1][1]", "x[1][2]", "x[1][3]", "r[1]", "x[2][1]", "x[2][2]", "x[2][3]", "r[2]", "x[3][1]", "x[3][2]", "x[3][3]", "r[3]"]);
C$.atomTypeFields=Clazz.array(String, -1, ["_atom_type_symbol", "_atom_type_oxidation_number"]);
C$.atomFields=Clazz.array(String, -1, ["*_type_symbol", "*_label", "*_auth_atom_id", "*_fract_x", "*_fract_y", "*_fract_z", "*_cartn_x", "*_cartn_y", "*_cartn_z", "*_occupancy", "*_b_iso_or_equiv", "*_auth_comp_id", "*_auth_asym_id", "*_auth_seq_id", "*_pdbx_pdb_ins_code", "*_label_alt_id", "*_group_pdb", "*_pdbx_pdb_model_num", "*_calc_flag", "*_disorder_group", "*_aniso_label", "*_anisotrop_id", "*_aniso_u_11", "*_aniso_u_22", "*_aniso_u_33", "*_aniso_u_12", "*_aniso_u_13", "*_aniso_u_23", "*_anisotrop_u[1][1]", "*_anisotrop_u[2][2]", "*_anisotrop_u[3][3]", "*_anisotrop_u[1][2]", "*_anisotrop_u[1][3]", "*_anisotrop_u[2][3]", "*_u_iso_or_equiv", "*_aniso_b_11", "*_aniso_b_22", "*_aniso_b_33", "*_aniso_b_12", "*_aniso_b_13", "*_aniso_b_23", "*_aniso_beta_11", "*_aniso_beta_22", "*_aniso_beta_33", "*_aniso_beta_12", "*_aniso_beta_13", "*_aniso_beta_23", "*_adp_type", "_chem_comp_atom_comp_id", "_chem_comp_atom_atom_id", "_chem_comp_atom_type_symbol", "_chem_comp_atom_charge", "_chem_comp_atom_model_cartn_x", "_chem_comp_atom_model_cartn_y", "_chem_comp_atom_model_cartn_z", "_chem_comp_atom_pdbx_model_cartn_x_ideal", "_chem_comp_atom_pdbx_model_cartn_y_ideal", "_chem_comp_atom_pdbx_model_cartn_z_ideal", "*_disorder_assembly", "*_label_asym_id", "*_subsystem_code", "*_symmetry_multiplicity", "*_thermal_displace_type", "*_moment_label", "*_moment_crystalaxis_mx", "*_moment_crystalaxis_my", "*_moment_crystalaxis_mz", "*_moment_crystalaxis_x", "*_moment_crystalaxis_y", "*_moment_crystalaxis_z", "*_id", "*_label_seq_id"]);
C$.singleAtomID=C$.atomFields[48];
C$.citationFields=Clazz.array(String, -1, ["_citation_title"]);
C$.symmetryOperationsFields=Clazz.array(String, -1, ["*_operation_xyz", "*_magn_operation_xyz", "*_ssg_operation_algebraic", "*_magn_ssg_operation_algebraic", "_symmetry_equiv_pos_as_xyz", "_symmetry_ssg_equiv_pos_as_xyz", "*_magn_operation_timereversal", "*_magn_ssg_operation_timereversal", "*_operation_timereversal", "*_magn_centering_xyz", "*_magn_ssg_centering_algebraic", "*_magn_ssg_centering_xyz"]);
C$.geomBondFields=Clazz.array(String, -1, ["_geom_bond_atom_site_label_1", "_geom_bond_atom_site_label_2", "_geom_bond_distance", "_ccdc_geom_bond_type"]);
};
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
