(function(){var P$=Clazz.newPackage("jalview.ext.jmol"),p$1={},I$=[[0,'java.util.Vector','java.util.Locale',['jalview.datamodel.PDBEntry','.Type'],'jalview.ext.jmol.JalviewJmolBinding','Error','jalview.util.MessageManager','org.jmol.api.JmolViewer','com.stevesoft.pat.Regex','java.util.ArrayList','mc_view.PDBChain','jalview.io.StructureFile','java.util.HashMap','mc_view.Atom','jalview.util.Format','jalview.datamodel.Annotation','jalview.datamodel.AlignmentAnnotation','Thread','org.jmol.c.STR','jalview.schemes.ResidueProperties','org.jmol.c.CBK']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JmolParser", null, 'jalview.io.StructureFile', 'org.jmol.api.JmolStatusListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.viewer=null;
this.jmolFiletype=null;
this.lastConsoleEcho="";
this.lastConsoleMessage="";
this.lastScriptTermination=-1;
this.lastScriptMessage="";
},1);

C$.$fields$=[['Z',['alphaFoldModel'],'I',['lastScriptTermination'],'S',['lastConsoleEcho','lastConsoleMessage','lastScriptMessage'],'O',['viewer','org.jmol.viewer.Viewer','jmolFiletype','jalview.datamodel.PDBEntry.Type']]]

Clazz.newMeth(C$, 'c$$Z$O$jalview_io_DataSourceType',  function (immediate, inFile, sourceType) {
;C$.superclazz.c$$Z$O$jalview_io_DataSourceType.apply(this,[immediate, inFile, sourceType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_io_DataSourceType',  function (inFile, sourceType) {
;C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this,[inFile, sourceType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse',  function (fp) {
;C$.superclazz.c$$jalview_io_FileParse.apply(this,[fp]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'parse$',  function () {
this.setChains$java_util_Vector(Clazz.new_($I$(1,1)));
var jmolModel=p$1.getJmolData.apply(this, []);
jmolModel.openReader$S$S$O(this.getDataName$(), this.getDataName$(), this.getReader$());
p$1.waitForScript$org_jmol_viewer_Viewer.apply(this, [jmolModel]);
if (jmolModel.ms.mc > 0) {
this.setStructureFileType$S(this.getDataName$().toLowerCase$java_util_Locale($I$(2).ROOT).endsWith$S(".cif") ? $I$(3).MMCIF.toString() : "PDB");
this.transformJmolModelToJalview$org_jmol_modelset_ModelSet(jmolModel.ms);
}});

Clazz.newMeth(C$, 'getJmolData',  function () {
if (this.viewer == null ) {
try {
this.viewer=$I$(4).getJmolData$jalview_ext_jmol_JmolParser(this);
this.viewer.setBooleanProperty$S$Z("defaultStructureDSSP", true);
} catch (x) {
if (Clazz.exceptionOf(x,"ClassCastException")){
throw Clazz.new_([$I$(6,"formatMessage$S$SA",["error.jmol_version_not_compatible_with_jalview_version", Clazz.array(String, -1, [$I$(7).getJmolVersion$()])]), x],$I$(5,1).c$$S$Throwable);
} else {
throw x;
}
}
}return this.viewer;
}, p$1);

Clazz.newMeth(C$, 'getNewAlphafoldValidator$',  function () {
var validator=Clazz.new_(["(AF-[A-Z]+[0-9]+[A-Z0-9]+-F1)"],$I$(8,1).c$$S);
validator.setIgnoreCase$Z(true);
return validator;
}, 1);

Clazz.newMeth(C$, 'updateFileType$S',  function (jmolIdentifiedFileType) {
if (jmolIdentifiedFileType == null  || jmolIdentifiedFileType.trim$().equals$O("") ) {
return false;
}if ("mmcif".equalsIgnoreCase$S(jmolIdentifiedFileType)) {
this.jmolFiletype=$I$(3).MMCIF;
return true;
}if ("pdb".equalsIgnoreCase$S(jmolIdentifiedFileType)) {
this.jmolFiletype=$I$(3).PDB;
return true;
}return false;
});

Clazz.newMeth(C$, 'transformJmolModelToJalview$org_jmol_modelset_ModelSet',  function (ms) {
try {
var alphaFold=C$.getNewAlphafoldValidator$();
var lastID="";
var rna=Clazz.new_($I$(9,1));
var prot=Clazz.new_($I$(9,1));
var tmpchain;
var pdbId=ms.getInfo$I$S(0, "title");
var isMMCIF=false;
var jmolFileType_String=ms.getInfo$I$S(0, "fileType");
if (this.updateFileType$S(jmolFileType_String)) {
this.setStructureFileType$S(this.jmolFiletype.toString());
}isMMCIF=$I$(3).MMCIF.equals$O(this.jmolFiletype);
if (pdbId == null ) {
this.setId$S(this.safeName$S(this.getDataName$()));
this.setPDBIdAvailable$Z(false);
} else {
this.setId$S(pdbId);
this.setPDBIdAvailable$Z(true);
this.alphaFoldModel=alphaFold.search$S(pdbId) && isMMCIF ;
}var significantAtoms=p$1.convertSignificantAtoms$org_jmol_modelset_ModelSet.apply(this, [ms]);
for (var tmpatom, $tmpatom = significantAtoms.iterator$(); $tmpatom.hasNext$()&&((tmpatom=($tmpatom.next$())),1);) {
if (tmpatom.resNumIns.trim$().equals$O(lastID)) {
continue;
}tmpchain=this.findChain$S(tmpatom.chain);
if (tmpchain != null ) {
tmpchain.atoms.addElement$O(tmpatom);
} else {
var tempFString=null;
if (p$1.isAlphafoldModel.apply(this, [])) {
tempFString="Alphafold Reliability";
}tmpchain=Clazz.new_([this.getId$(), tmpatom.chain, tempFString],$I$(10,1).c$$S$S$S);
this.getChains$().add$O(tmpchain);
tmpchain.atoms.addElement$O(tmpatom);
}lastID=tmpatom.resNumIns.trim$();
}
if (this.isParseImmediately$()) {
this.xferSettings$();
}this.makeResidueList$();
this.makeCaBondList$();
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
var chainseq=this.postProcessChain$mc_view_PDBChain(chain);
if ($I$(11).isRNA$jalview_datamodel_SequenceI(chainseq)) {
rna.add$O(chainseq);
} else {
prot.add$O(chainseq);
}if (this.predictSecondaryStructure) {
p$1.createAnnotation$jalview_datamodel_SequenceI$mc_view_PDBChain$org_jmol_modelset_AtomA.apply(this, [chainseq, chain, ms.at]);
}}
} catch (er) {
if (Clazz.exceptionOf(er,"OutOfMemoryError")){
System.out.println$S("OUT OF MEMORY LOADING TRANSFORMING JMOL MODEL TO JALVIEW MODEL");
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(6).getString$S("exception.outofmemory_loading_mmcif_file")]);
} else {
throw er;
}
}
});

Clazz.newMeth(C$, 'isAlphafoldModel',  function () {
return this.alphaFoldModel;
}, p$1);

Clazz.newMeth(C$, 'convertSignificantAtoms$org_jmol_modelset_ModelSet',  function (ms) {
var significantAtoms=Clazz.new_($I$(9,1));
var chainTerMap=Clazz.new_($I$(12,1));
var prevAtom=null;
for (var atom, $atom = 0, $$atom = ms.at; $atom<$$atom.length&&((atom=($$atom[$atom])),1);$atom++) {
if (atom.getAtomName$().equalsIgnoreCase$S("CA") || atom.getAtomName$().equalsIgnoreCase$S("P") ) {
if (!p$1.atomValidated$org_jmol_modelset_Atom$org_jmol_modelset_Atom$java_util_HashMap.apply(this, [atom, prevAtom, chainTerMap])) {
continue;
}var curAtom=Clazz.new_($I$(13,1).c$$F$F$F,[atom.x, atom.y, atom.z]);
curAtom.atomIndex=atom.getIndex$();
curAtom.chain=atom.getChainIDStr$();
curAtom.insCode=atom.group.getInsertionCode$() == "\u0000" ? " " : atom.group.getInsertionCode$();
curAtom.name=atom.getAtomName$();
curAtom.number=atom.getAtomNumber$();
curAtom.resName=atom.getGroup3$Z(true);
curAtom.resNumber=atom.getResno$();
curAtom.occupancy=ms.occupancies != null  ? ms.occupancies[atom.getIndex$()] : (Float.valueOf$F(atom.getOccupancy100$())).valueOf();
var fmt=Clazz.new_($I$(14,1).c$$S,["%4i"]).form$J(curAtom.resNumber);
curAtom.resNumIns=(fmt + curAtom.insCode);
curAtom.tfactor=atom.getBfactor100$() / 100.0;
curAtom.type=0;
if (!significantAtoms.contains$O(curAtom)) {
significantAtoms.add$O(curAtom);
}prevAtom=atom;
}}
return significantAtoms;
}, p$1);

Clazz.newMeth(C$, 'atomValidated$org_jmol_modelset_Atom$org_jmol_modelset_Atom$java_util_HashMap',  function (curAtom, prevAtom, chainTerMap) {
if (chainTerMap == null  || prevAtom == null  ) {
return true;
}var curAtomChId=curAtom.getChainIDStr$();
var prevAtomChId=prevAtom.getChainIDStr$();
if (!prevAtomChId.equals$O(curAtomChId)) {
if (!chainTerMap.containsKey$O(prevAtomChId)) {
chainTerMap.put$O$O(prevAtomChId, prevAtom);
}if (chainTerMap.containsKey$O(curAtomChId)) {
if (curAtom.getResno$() < chainTerMap.get$O(curAtomChId).getResno$()) {
return false;
}if ((curAtom.getResno$() - chainTerMap.get$O(curAtomChId).getResno$()) < 5) {
chainTerMap.put$O$O(curAtomChId, curAtom);
return true;
}return false;
}} else if (chainTerMap.containsKey$O(curAtomChId)) {
if (curAtom.getResno$() < chainTerMap.get$O(curAtomChId).getResno$()) {
return false;
}if ((curAtom.getResno$() - chainTerMap.get$O(curAtomChId).getResno$()) < 5) {
chainTerMap.put$O$O(curAtomChId, curAtom);
return true;
}return false;
}return !(curAtom.isHetero$() && ((curAtom.getResno$() - prevAtom.getResno$()) > 2) );
}, p$1);

Clazz.newMeth(C$, 'createAnnotation$jalview_datamodel_SequenceI$mc_view_PDBChain$org_jmol_modelset_AtomA',  function (sequence, chain, jmolAtoms) {
var secstr=Clazz.array(Character.TYPE, [sequence.getLength$()]);
var secstrcode=Clazz.array(Character.TYPE, [sequence.getLength$()]);
if (chain.residues.size$() != sequence.getLength$()) {
return;
}var annotIndex=0;
for (var residue, $residue = chain.residues.iterator$(); $residue.hasNext$()&&((residue=($residue.next$())),1);) {
var repAtom=residue.getAtoms$().get$I(0);
var proteinStructureSubType=jmolAtoms[repAtom.atomIndex].group.getProteinStructureSubType$();
this.setSecondaryStructure$org_jmol_c_STR$I$CA$CA(proteinStructureSubType, annotIndex, secstr, secstrcode);
++annotIndex;
}
this.addSecondaryStructureAnnotation$S$jalview_datamodel_SequenceI$CA$CA$S$I(chain.pdbid, sequence, secstr, secstrcode, chain.id, sequence.getStart$());
}, p$1);

Clazz.newMeth(C$, 'addSecondaryStructureAnnotation$S$jalview_datamodel_SequenceI$CA$CA$S$I',  function (modelTitle, sq, secstr, secstrcode, chainId, firstResNum) {
var length=sq.getLength$();
var ssFound=false;
var asecstr=Clazz.array($I$(15), [length + firstResNum - 1]);
for (var p=0; p < length; p++) {
if (secstr[p] >= "A" && secstr[p] <= "z" ) {
try {
asecstr[p]=Clazz.new_([String.valueOf$C(secstr[p]), null, secstrcode[p], NaN],$I$(15,1).c$$S$S$C$F);
ssFound=true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}}
if (ssFound) {
var mt=modelTitle == null  ? this.getDataName$() : modelTitle;
mt+=chainId;
var ann=Clazz.new_($I$(16,1).c$$S$S$jalview_datamodel_AnnotationA,["Secondary Structure", "Secondary Structure for " + mt, asecstr]);
ann.belowAlignment=true;
ann.visible=true;
ann.autoCalculated=false;
ann.setCalcId$S(this.getClass$().getName$());
ann.adjustForAlignment$();
ann.validateRangeAndDisplay$();
this.annotations.add$O(ann);
sq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(ann);
}});

Clazz.newMeth(C$, 'waitForScript$org_jmol_viewer_Viewer',  function (jmd) {
while (jmd.isScriptExecuting$()){
try {
$I$(17).sleep$J(50);
} catch (x) {
if (Clazz.exceptionOf(x,"InterruptedException")){
} else {
throw x;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'setSecondaryStructure$org_jmol_c_STR$I$CA$CA',  function (proteinStructureSubType, pos, secstr, secstrcode) {
switch (proteinStructureSubType) {
case $I$(18).HELIX310:
secstr[pos]="3";
break;
case $I$(18).HELIX:
case $I$(18).HELIXALPHA:
secstr[pos]="H";
break;
case $I$(18).HELIXPI:
secstr[pos]="P";
break;
case $I$(18).SHEET:
secstr[pos]="E";
break;
default:
secstr[pos]=String.fromCharCode(0);
}
switch (proteinStructureSubType) {
case $I$(18).HELIX310:
case $I$(18).HELIXALPHA:
case $I$(18).HELIXPI:
case $I$(18).HELIX:
secstrcode[pos]="H";
break;
case $I$(18).SHEET:
secstrcode[pos]="E";
break;
default:
secstrcode[pos]=String.fromCharCode(0);
}
});

Clazz.newMeth(C$, 'replaceNonCanonicalResidue$S$CA$I',  function (threeLetterCode, seq, pos) {
var canonical=$I$(19).getCanonicalAminoAcid$S(threeLetterCode);
if (canonical != null  && !canonical.equalsIgnoreCase$S(threeLetterCode) ) {
seq[pos]=$I$(19).getSingleCharacterCode$S(canonical);
}});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z',  function (seqs, jvSuffix) {
return null;
});

Clazz.newMeth(C$, 'setCallbackFunction$S$S',  function (callbackType, callbackFunction) {
});

Clazz.newMeth(C$, 'notifyCallback$org_jmol_c_CBK$OA',  function (cbType, data) {
var strInfo=(data == null  || data[1] == null   ? null : data[1].toString());
switch (cbType) {
case $I$(20).ECHO:
p$1.sendConsoleEcho$S.apply(this, [strInfo]);
break;
case $I$(20).SCRIPT:
p$1.notifyScriptTermination$S$I.apply(this, [data[2], (data[3]).intValue$()]);
break;
case $I$(20).MEASURE:
var mystatus=data[3];
if (mystatus.indexOf$S("Picked") >= 0 || mystatus.indexOf$S("Sequence") >= 0 ) {
p$1.sendConsoleMessage$S.apply(this, [strInfo]);
} else if (mystatus.indexOf$S("Completed") >= 0) {
p$1.sendConsoleEcho$S.apply(this, [strInfo.substring$I$I(strInfo.lastIndexOf$S(",") + 2, strInfo.length$() - 1)]);
}break;
case $I$(20).MESSAGE:
p$1.sendConsoleMessage$S.apply(this, [data == null  ? null : strInfo]);
break;
case $I$(20).PICK:
p$1.sendConsoleMessage$S.apply(this, [strInfo]);
break;
default:
break;
}
});

Clazz.newMeth(C$, 'sendConsoleEcho$S',  function (string) {
this.lastConsoleEcho+=string;
this.lastConsoleEcho+="\n";
}, p$1);

Clazz.newMeth(C$, 'sendConsoleMessage$S',  function (string) {
this.lastConsoleMessage+=string;
this.lastConsoleMessage+="\n";
}, p$1);

Clazz.newMeth(C$, 'notifyScriptTermination$S$I',  function (string, intValue) {
this.lastScriptMessage+=string;
this.lastScriptMessage+="\n";
this.lastScriptTermination=intValue;
}, p$1);

Clazz.newMeth(C$, 'notifyEnabled$org_jmol_c_CBK',  function (callbackPick) {
switch (callbackPick) {
case $I$(20).MESSAGE:
case $I$(20).SCRIPT:
case $I$(20).ECHO:
case $I$(20).LOADSTRUCT:
case $I$(20).ERROR:
return true;
default:
return false;
}
});

Clazz.newMeth(C$, 'eval$S',  function (strEval) {
return null;
});

Clazz.newMeth(C$, 'functionXY$S$I$I',  function (functionName, x, y) {
return null;
});

Clazz.newMeth(C$, 'functionXYZ$S$I$I$I',  function (functionName, nx, ny, nz) {
return null;
});

Clazz.newMeth(C$, 'createImage$S$S$O$I',  function (fileName, imageType, text_or_bytes, quality) {
return null;
});

Clazz.newMeth(C$, 'getRegistryInfo$',  function () {
return null;
});

Clazz.newMeth(C$, 'showUrl$S',  function (url) {
});

Clazz.newMeth(C$, 'resizeInnerPanel$S',  function (data) {
return null;
});

Clazz.newMeth(C$, 'getJSpecViewProperty$S',  function (arg0) {
return null;
});

Clazz.newMeth(C$, 'isPredictSecondaryStructure$',  function () {
return this.predictSecondaryStructure;
});

Clazz.newMeth(C$, 'setPredictSecondaryStructure$Z',  function (predictSecondaryStructure) {
this.predictSecondaryStructure=predictSecondaryStructure;
});

Clazz.newMeth(C$, 'isVisibleChainAnnotation$',  function () {
return this.visibleChainAnnotation;
});

Clazz.newMeth(C$, 'setVisibleChainAnnotation$Z',  function (visibleChainAnnotation) {
this.visibleChainAnnotation=visibleChainAnnotation;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
