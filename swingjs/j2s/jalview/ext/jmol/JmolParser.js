(function(){var P$=Clazz.newPackage("jalview.ext.jmol"),p$1={},I$=[[0,'java.util.Vector',['jalview.datamodel.PDBEntry','.Type'],'jalview.ext.jmol.JalviewJmolBinding','Error','jalview.util.MessageManager','org.jmol.api.JmolViewer','java.util.ArrayList','mc_view.PDBChain','java.util.HashMap','mc_view.Atom','jalview.util.Format','jalview.datamodel.Annotation','jalview.datamodel.AlignmentAnnotation','Thread','org.jmol.c.STR','jalview.schemes.ResidueProperties','org.jmol.c.CBK']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolParser", null, 'jalview.io.StructureFile', 'org.jmol.api.JmolStatusListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.viewer=null;
this.lastConsoleEcho=null;
this.lastConsoleMessage=null;
this.lastScriptTermination=0;
this.lastScriptMessage=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.viewer=null;
this.lastConsoleEcho="";
this.lastConsoleMessage="";
this.lastScriptTermination=-1;
this.lastScriptMessage="";
}, 1);

Clazz.newMeth(C$, 'c$$Z$O$jalview_io_DataSourceType', function (immediate, inFile, sourceType) {
C$.superclazz.c$$Z$O$jalview_io_DataSourceType.apply(this, [immediate, inFile, sourceType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$O$jalview_io_DataSourceType', function (inFile, sourceType) {
C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this, [inFile, sourceType]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse', function (fp) {
C$.superclazz.c$$jalview_io_FileParse.apply(this, [fp]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'parse$', function () {
this.setChains$java_util_Vector(Clazz.new_($I$(1)));
var jmolModel=p$1.getJmolData.apply(this, []);
jmolModel.openReader$S$S$O(this.getDataName$(), this.getDataName$(), this.getReader$());
p$1.waitForScript$org_jmol_viewer_Viewer.apply(this, [jmolModel]);
if (jmolModel.ms.mc > 0) {
this.setStructureFileType$S(this.getDataName$().toLowerCase$().endsWith$S(".cif") ? $I$(2).MMCIF.toString() : "PDB");
this.transformJmolModelToJalview$org_jmol_modelset_ModelSet(jmolModel.ms);
}});

Clazz.newMeth(C$, 'getJmolData', function () {
if (this.viewer == null ) {
try {
this.viewer=$I$(3).getJmolData$jalview_ext_jmol_JmolParser(this);
this.viewer.setBooleanProperty$S$Z("defaultStructureDSSP", true);
} catch (x) {
if (Clazz.exceptionOf(x,"ClassCastException")){
throw Clazz.new_($I$(4).c$$S$Throwable,[$I$(5).formatMessage$S$SA("error.jmol_version_not_compatible_with_jalview_version", Clazz.array(String, -1, [$I$(6).getJmolVersion$()])), x]);
} else {
throw x;
}
}
}return this.viewer;
}, p$1);

Clazz.newMeth(C$, 'transformJmolModelToJalview$org_jmol_modelset_ModelSet', function (ms) {
try {
var lastID="";
var rna=Clazz.new_($I$(7));
var prot=Clazz.new_($I$(7));
var tmpchain;
var pdbId=ms.getInfo$I$S(0, "title");
if (pdbId == null ) {
this.setId$S(this.safeName$S(this.getDataName$()));
this.setPDBIdAvailable$Z(false);
} else {
this.setId$S(pdbId);
this.setPDBIdAvailable$Z(true);
}var significantAtoms=p$1.convertSignificantAtoms$org_jmol_modelset_ModelSet.apply(this, [ms]);
for (var tmpatom, $tmpatom = significantAtoms.iterator$(); $tmpatom.hasNext$()&&((tmpatom=($tmpatom.next$())),1);) {
if (tmpatom.resNumIns.trim$().equals$O(lastID)) {
continue;
}tmpchain=this.findChain$S(tmpatom.chain);
if (tmpchain != null ) {
tmpchain.atoms.addElement$TE(tmpatom);
} else {
tmpchain=Clazz.new_($I$(8).c$$S$S,[this.getId$(), tmpatom.chain]);
this.getChains$().add$TE(tmpchain);
tmpchain.atoms.addElement$TE(tmpatom);
}lastID=tmpatom.resNumIns.trim$();
}
if (this.isParseImmediately$()) {
this.xferSettings$();
}this.makeResidueList$();
this.makeCaBondList$();
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
var chainseq=this.postProcessChain$mc_view_PDBChain(chain);
if (jalview.io.StructureFile.isRNA$jalview_datamodel_SequenceI(chainseq)) {
rna.add$TE(chainseq);
} else {
prot.add$TE(chainseq);
}if (this.predictSecondaryStructure) {
p$1.createAnnotation$jalview_datamodel_SequenceI$mc_view_PDBChain$org_jmol_modelset_AtomA.apply(this, [chainseq, chain, ms.at]);
}}
} catch (er) {
if (Clazz.exceptionOf(er,"OutOfMemoryError")){
System.out.println$S("OUT OF MEMORY LOADING TRANSFORMING JMOL MODEL TO JALVIEW MODEL");
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[$I$(5).getString$S("exception.outofmemory_loading_mmcif_file")]);
} else {
throw er;
}
}
});

Clazz.newMeth(C$, 'convertSignificantAtoms$org_jmol_modelset_ModelSet', function (ms) {
var significantAtoms=Clazz.new_($I$(7));
var chainTerMap=Clazz.new_($I$(9));
var prevAtom=null;
for (var atom, $atom = 0, $$atom = ms.at; $atom<$$atom.length&&((atom=($$atom[$atom])),1);$atom++) {
if (atom.getAtomName$().equalsIgnoreCase$S("CA") || atom.getAtomName$().equalsIgnoreCase$S("P") ) {
if (!p$1.atomValidated$org_jmol_modelset_Atom$org_jmol_modelset_Atom$java_util_HashMap.apply(this, [atom, prevAtom, chainTerMap])) {
continue;
}var curAtom=Clazz.new_($I$(10).c$$F$F$F,[atom.x, atom.y, atom.z]);
curAtom.atomIndex=atom.getIndex$();
curAtom.chain=atom.getChainIDStr$();
curAtom.insCode=atom.group.getInsertionCode$() == "\u0000" ? " " : atom.group.getInsertionCode$();
curAtom.name=atom.getAtomName$();
curAtom.number=atom.getAtomNumber$();
curAtom.resName=atom.getGroup3$Z(true);
curAtom.resNumber=atom.getResno$();
curAtom.occupancy=ms.occupancies != null  ? ms.occupancies[atom.getIndex$()] : (Float.valueOf$F(atom.getOccupancy100$())).floatValue$();
var fmt=Clazz.new_($I$(11).c$$S,["%4i"]).form$J(curAtom.resNumber);
curAtom.resNumIns=(fmt + curAtom.insCode);
curAtom.tfactor=atom.getBfactor100$() / 100.0;
curAtom.type=0;
if (!significantAtoms.contains$O(curAtom)) {
significantAtoms.add$TE(curAtom);
}prevAtom=atom;
}}
return significantAtoms;
}, p$1);

Clazz.newMeth(C$, 'atomValidated$org_jmol_modelset_Atom$org_jmol_modelset_Atom$java_util_HashMap', function (curAtom, prevAtom, chainTerMap) {
if (chainTerMap == null  || prevAtom == null  ) {
return true;
}var curAtomChId=curAtom.getChainIDStr$();
var prevAtomChId=prevAtom.getChainIDStr$();
if (!prevAtomChId.equals$O(curAtomChId)) {
if (!chainTerMap.containsKey$O(prevAtomChId)) {
chainTerMap.put$TK$TV(prevAtomChId, prevAtom);
}if (chainTerMap.containsKey$O(curAtomChId)) {
if (curAtom.getResno$() < chainTerMap.get$O(curAtomChId).getResno$()) {
return false;
}if ((curAtom.getResno$() - chainTerMap.get$O(curAtomChId).getResno$()) < 5) {
chainTerMap.put$TK$TV(curAtomChId, curAtom);
return true;
}return false;
}} else if (chainTerMap.containsKey$O(curAtomChId)) {
if (curAtom.getResno$() < chainTerMap.get$O(curAtomChId).getResno$()) {
return false;
}if ((curAtom.getResno$() - chainTerMap.get$O(curAtomChId).getResno$()) < 5) {
chainTerMap.put$TK$TV(curAtomChId, curAtom);
return true;
}return false;
}return !(curAtom.isHetero$() && ((curAtom.getResno$() - prevAtom.getResno$()) > 2) );
}, p$1);

Clazz.newMeth(C$, 'createAnnotation$jalview_datamodel_SequenceI$mc_view_PDBChain$org_jmol_modelset_AtomA', function (sequence, chain, jmolAtoms) {
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

Clazz.newMeth(C$, 'addSecondaryStructureAnnotation$S$jalview_datamodel_SequenceI$CA$CA$S$I', function (modelTitle, sq, secstr, secstrcode, chainId, firstResNum) {
var length=sq.getLength$();
var ssFound=false;
var asecstr=Clazz.array($I$(12), [length + firstResNum - 1]);
for (var p=0; p < length; p++) {
if (secstr[p] >= "A" && secstr[p] <= "z" ) {
try {
asecstr[p]=Clazz.new_($I$(12).c$$S$S$C$F,[String.valueOf$C(secstr[p]), null, secstrcode[p], NaN]);
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
mt += chainId;
var ann=Clazz.new_($I$(13).c$$S$S$jalview_datamodel_AnnotationA,["Secondary Structure", "Secondary Structure for " + mt, asecstr]);
ann.belowAlignment=true;
ann.visible=true;
ann.autoCalculated=false;
ann.setCalcId$S(this.getClass$().getName$());
ann.adjustForAlignment$();
ann.validateRangeAndDisplay$();
this.annotations.add$TE(ann);
sq.addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(ann);
}});

Clazz.newMeth(C$, 'waitForScript$org_jmol_viewer_Viewer', function (jmd) {
while (jmd.isScriptExecuting$()){
try {
$I$(14).sleep$J(50);
} catch (x) {
if (Clazz.exceptionOf(x,"InterruptedException")){
} else {
throw x;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'setSecondaryStructure$org_jmol_c_STR$I$CA$CA', function (proteinStructureSubType, pos, secstr, secstrcode) {
switch (proteinStructureSubType) {
case $I$(15).HELIX310:
secstr[pos]="3";
break;
case $I$(15).HELIX:
case $I$(15).HELIXALPHA:
secstr[pos]="H";
break;
case $I$(15).HELIXPI:
secstr[pos]="P";
break;
case $I$(15).SHEET:
secstr[pos]="E";
break;
default:
secstr[pos]=String.fromCharCode(0);
}
switch (proteinStructureSubType) {
case $I$(15).HELIX310:
case $I$(15).HELIXALPHA:
case $I$(15).HELIXPI:
case $I$(15).HELIX:
secstrcode[pos]="H";
break;
case $I$(15).SHEET:
secstrcode[pos]="E";
break;
default:
secstrcode[pos]=String.fromCharCode(0);
}
});

Clazz.newMeth(C$, 'replaceNonCanonicalResidue$S$CA$I', function (threeLetterCode, seq, pos) {
var canonical=$I$(16).getCanonicalAminoAcid$S(threeLetterCode);
if (canonical != null  && !canonical.equalsIgnoreCase$S(threeLetterCode) ) {
seq[pos]=$I$(16).getSingleCharacterCode$S(canonical);
}});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z', function (seqs, jvSuffix) {
return null;
});

Clazz.newMeth(C$, 'setCallbackFunction$S$S', function (callbackType, callbackFunction) {
});

Clazz.newMeth(C$, 'notifyCallback$org_jmol_c_CBK$OA', function (cbType, data) {
var strInfo=(data == null  || data[1] == null   ? null : data[1].toString());
switch (cbType) {
case $I$(17).ECHO:
p$1.sendConsoleEcho$S.apply(this, [strInfo]);
break;
case $I$(17).SCRIPT:
p$1.notifyScriptTermination$S$I.apply(this, [data[2], (data[3]).intValue$()]);
break;
case $I$(17).MEASURE:
var mystatus=data[3];
if (mystatus.indexOf$S("Picked") >= 0 || mystatus.indexOf$S("Sequence") >= 0 ) {
p$1.sendConsoleMessage$S.apply(this, [strInfo]);
} else if (mystatus.indexOf$S("Completed") >= 0) {
p$1.sendConsoleEcho$S.apply(this, [strInfo.substring$I$I(strInfo.lastIndexOf$S(",") + 2, strInfo.length$() - 1)]);
}break;
case $I$(17).MESSAGE:
p$1.sendConsoleMessage$S.apply(this, [data == null  ? null : strInfo]);
break;
case $I$(17).PICK:
p$1.sendConsoleMessage$S.apply(this, [strInfo]);
break;
default:
break;
}
});

Clazz.newMeth(C$, 'sendConsoleEcho$S', function (string) {
this.lastConsoleEcho += string;
this.lastConsoleEcho += "\n";
}, p$1);

Clazz.newMeth(C$, 'sendConsoleMessage$S', function (string) {
this.lastConsoleMessage += string;
this.lastConsoleMessage += "\n";
}, p$1);

Clazz.newMeth(C$, 'notifyScriptTermination$S$I', function (string, intValue) {
this.lastScriptMessage += string;
this.lastScriptMessage += "\n";
this.lastScriptTermination=intValue;
}, p$1);

Clazz.newMeth(C$, 'notifyEnabled$org_jmol_c_CBK', function (callbackPick) {
switch (callbackPick) {
case $I$(17).MESSAGE:
case $I$(17).SCRIPT:
case $I$(17).ECHO:
case $I$(17).LOADSTRUCT:
case $I$(17).ERROR:
return true;
default:
return false;
}
});

Clazz.newMeth(C$, 'eval$S', function (strEval) {
return null;
});

Clazz.newMeth(C$, 'functionXY$S$I$I', function (functionName, x, y) {
return null;
});

Clazz.newMeth(C$, 'functionXYZ$S$I$I$I', function (functionName, nx, ny, nz) {
return null;
});

Clazz.newMeth(C$, 'createImage$S$S$O$I', function (fileName, imageType, text_or_bytes, quality) {
return null;
});

Clazz.newMeth(C$, 'getRegistryInfo$', function () {
return null;
});

Clazz.newMeth(C$, 'showUrl$S', function (url) {
});

Clazz.newMeth(C$, 'resizeInnerPanel$S', function (data) {
return null;
});

Clazz.newMeth(C$, 'getJSpecViewProperty$S', function (arg0) {
return null;
});

Clazz.newMeth(C$, 'isPredictSecondaryStructure$', function () {
return this.predictSecondaryStructure;
});

Clazz.newMeth(C$, 'setPredictSecondaryStructure$Z', function (predictSecondaryStructure) {
this.predictSecondaryStructure=predictSecondaryStructure;
});

Clazz.newMeth(C$, 'isVisibleChainAnnotation$', function () {
return this.visibleChainAnnotation;
});

Clazz.newMeth(C$, 'setVisibleChainAnnotation$Z', function (visibleChainAnnotation) {
this.visibleChainAnnotation=visibleChainAnnotation;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
