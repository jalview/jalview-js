(function(){var P$=Clazz.newPackage("jalview.ext.jmol"),p$1={},I$=[[0,'java.util.Vector','StringBuffer','StringBuilder','jalview.datamodel.AlignmentI','jalview.datamodel.HiddenColumns','Thread','java.util.BitSet',['jalview.structures.models.AAStructureBindingModel','.SuperposeData'],'jalview.util.MessageManager','jalview.ext.jmol.JmolCommands','java.awt.Color','java.util.ArrayList','java.io.File','java.util.StringTokenizer','org.jmol.c.CBK','java.util.Hashtable','jalview.io.DataSourceType','jalview.schemes.ResidueProperties','org.jmol.api.JmolViewer','org.jmol.adapter.smarter.SmarterJmolAdapter']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewJmolBinding", null, 'jalview.structures.models.AAStructureBindingModel', ['org.jmol.api.JmolStatusListener', 'org.jmol.api.JmolSelectionListener', 'java.awt.event.ComponentListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allChainsSelected=false;
this.associateNewStructs=false;
this.atomsPicked=Clazz.new_($I$(1,1));
this.frameNo=0;
this.resetLastRes=Clazz.new_($I$(2,1));
this.colourby=null;
this.debug=true;
this.loadNotifiesHandled=0;
this.console=null;
},1);

C$.$fields$=[['Z',['allChainsSelected','associateNewStructs','loadedInline','debug'],'I',['frameNo'],'J',['loadNotifiesHandled'],'S',['lastMessage','lastCommand'],'O',['atomsPicked','java.util.Vector','chainNames','java.util.List','chainFile','java.util.Hashtable','resetLastRes','StringBuffer','viewer','org.jmol.viewer.Viewer','colourby','Thread','_modelFileNameMap','int[]','console','org.jmol.api.JmolAppConsoleInterface']]]

Clazz.newMeth(C$, 'c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType', function (ssm, pdbentry, sequenceIs, protocol) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this,[ssm, pdbentry, sequenceIs, protocol]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_structure_StructureSelectionManager$jalview_datamodel_SequenceIAA$org_jmol_viewer_Viewer', function (ssm, seqs, theViewer) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_SequenceIAA.apply(this,[ssm, seqs]);C$.$init$.apply(this);
this.viewer=theViewer;
this.viewer.setJmolStatusListener$org_jmol_api_JmolStatusListener(this);
this.viewer.addSelectionListener$org_jmol_api_JmolSelectionListener(this);
}, 1);

Clazz.newMeth(C$, 'getViewerTitle$', function () {
return this.getViewerTitle$S$Z("Jmol", true);
});

Clazz.newMeth(C$, 'centerViewer$java_util_Vector', function (chainList) {
var cmd=Clazz.new_($I$(3,1).c$$I,[128]);
var mlength;
var p;
for (var lbl, $lbl = chainList.iterator$(); $lbl.hasNext$()&&((lbl=($lbl.next$())),1);) {
mlength=0;
do {
p=mlength;
mlength=lbl.indexOf$S$I(":", p);
} while (p < mlength && mlength < (lbl.length$() - 2) );
cmd.append$S(":" + lbl.substring$I(mlength + 1) + " /" + (1 + p$1.getModelNum$S.apply(this, [this.chainFile.get$O(lbl)])) + " or " );
}
if (cmd.length$() > 0) {
cmd.setLength$I(cmd.length$() - 4);
}this.evalStateCommand$S("select *;restrict " + cmd + ";cartoon;center " + cmd );
});

Clazz.newMeth(C$, 'closeViewer$', function () {
this.getSsm$().removeStructureViewerListener$O$SA(this, this.getStructureFiles$());
if (this.viewer != null ) {
this.viewer.dispose$();
}this.lastCommand=null;
this.viewer=null;
this.releaseUIResources$();
});

Clazz.newMeth(C$, 'colourByChain$', function () {
this.colourBySequence=false;
this.evalStateCommand$S("select *;color chain");
});

Clazz.newMeth(C$, 'colourByCharge$', function () {
this.colourBySequence=false;
this.evalStateCommand$S("select *;color white;select ASP,GLU;color red;select LYS,ARG;color blue;select CYS;color yellow");
});

Clazz.newMeth(C$, 'superposeStructures$jalview_datamodel_AlignmentI', function (alignment) {
this.superposeStructures$jalview_datamodel_AlignmentI$I$jalview_datamodel_HiddenColumns(alignment, -1, null);
});

Clazz.newMeth(C$, 'superposeStructures$jalview_datamodel_AlignmentI$I', function (alignment, refStructure) {
this.superposeStructures$jalview_datamodel_AlignmentI$I$jalview_datamodel_HiddenColumns(alignment, refStructure, null);
});

Clazz.newMeth(C$, 'superposeStructures$jalview_datamodel_AlignmentI$I$jalview_datamodel_HiddenColumns', function (alignment, refStructure, hiddenCols) {
this.superposeStructures$jalview_datamodel_AlignmentIA$IA$jalview_datamodel_HiddenColumnsA(Clazz.array($I$(4), -1, [alignment]), Clazz.array(Integer.TYPE, -1, [refStructure]), Clazz.array($I$(5), -1, [hiddenCols]));
});

Clazz.newMeth(C$, 'superposeStructures$jalview_datamodel_AlignmentIA$IA$jalview_datamodel_HiddenColumnsA', function (_alignment, _refStructure, _hiddenCols) {
while (this.viewer.isScriptExecuting$()){
try {
$I$(6).sleep$J(10);
} catch (i) {
if (Clazz.exceptionOf(i,"InterruptedException")){
} else {
throw i;
}
}
}
var files=this.getStructureFiles$();
if (!this.waitForFileLoad$SA(files)) {
return null;
}var selectioncom=Clazz.new_($I$(3,1).c$$I,[256]);
var nSeconds=" ";
if (files.length > 10) {
nSeconds=" 0.005 ";
} else {
nSeconds=" " + (new Double(2.0 / files.length).toString()) + " " ;
}for (var a=0; a < _alignment.length; a++) {
var refStructure=_refStructure[a];
var alignment=_alignment[a];
var hiddenCols=_hiddenCols[a];
if (a > 0 && selectioncom.length$() > 0  && !selectioncom.substring$I(selectioncom.length$() - 1).equals$O("|") ) {
selectioncom.append$S("|");
}if (refStructure >= files.length) {
System.err.println$S("Invalid reference structure value " + refStructure);
refStructure=-1;
}var matched=Clazz.new_($I$(7,1));
for (var m=0; m < alignment.getWidth$(); m++) {
if (hiddenCols == null  || hiddenCols.isVisible$I(m) ) {
matched.set$I(m);
}}
var structures=Clazz.array($I$(8), [files.length]);
for (var f=0; f < files.length; f++) {
structures[f]=Clazz.new_([this, null, alignment.getWidth$()],$I$(8,1).c$$I);
}
var candidateRefStructure=this.findSuperposableResidues$jalview_datamodel_AlignmentI$java_util_BitSet$jalview_structures_models_AAStructureBindingModel_SuperposeDataA(alignment, matched, structures);
if (refStructure < 0) {
refStructure=candidateRefStructure;
}var selcom=Clazz.array(String, [files.length]);
var nmatched=matched.cardinality$();
if (nmatched < 4) {
return ($I$(9,"formatMessage$S$OA",["label.insufficient_residues", [new Integer(nmatched)]]));
}{
for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
var chainCd=":" + structures[pdbfnum].chain;
var lpos=-1;
var run=false;
var molsel=Clazz.new_($I$(3,1));
molsel.append$S("{");
var nextColumnMatch=matched.nextSetBit$I(0);
while (nextColumnMatch != -1){
var pdbResNo=structures[pdbfnum].pdbResNo[nextColumnMatch];
if (lpos != pdbResNo - 1) {
if (lpos != -1) {
molsel.append$I(lpos);
molsel.append$S(chainCd);
molsel.append$S("|");
}run=false;
} else {
if (!run) {
molsel.append$I(lpos);
molsel.append$S("-");
}run=true;
}lpos=pdbResNo;
nextColumnMatch=matched.nextSetBit$I(nextColumnMatch + 1);
}
if (lpos != -1) {
molsel.append$I(lpos);
molsel.append$S(chainCd);
molsel.append$S("}");
}if (molsel.length$() > 1) {
selcom[pdbfnum]=molsel.toString();
selectioncom.append$S("((");
selectioncom.append$S(selcom[pdbfnum].substring$I$I(1, selcom[pdbfnum].length$() - 1));
selectioncom.append$S(" )& ");
selectioncom.append$I(pdbfnum + 1);
selectioncom.append$S(".1)");
if (pdbfnum < files.length - 1) {
selectioncom.append$S("|");
}} else {
selcom[pdbfnum]=null;
}}
}var command=Clazz.new_($I$(3,1).c$$I,[256]);
for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
if (pdbfnum == refStructure || selcom[pdbfnum] == null   || selcom[refStructure] == null  ) {
continue;
}command.append$S("echo ");
command.append$S("\"Superposing (");
command.append$S(structures[pdbfnum].pdbId);
command.append$S(") against reference (");
command.append$S(structures[refStructure].pdbId);
command.append$S(")\";\ncompare " + nSeconds);
command.append$S("{");
command.append$S(Integer.toString$I(1 + pdbfnum));
command.append$S(".1} {");
command.append$S(Integer.toString$I(1 + refStructure));
command.append$S(".1} SUBSET {(*.CA | *.P) and conformation=1} ATOMS ");
command.append$S(selcom[pdbfnum]);
command.append$S(selcom[refStructure]);
command.append$S(" ROTATE TRANSLATE;\n");
}
if (selectioncom.length$() > 0) {
this.evalStateCommand$S("select *; cartoons off; backbone; select (" + selectioncom.toString() + "); cartoons; " );
var cmdString=command.toString();
this.evalStateCommand$S(cmdString);
}}
if (selectioncom.length$() > 0) {
if (selectioncom.substring$I(selectioncom.length$() - 1).equals$O("|")) {
selectioncom.setLength$I(selectioncom.length$() - 1);
}this.evalStateCommand$S("select *; cartoons off; backbone; select (" + selectioncom.toString() + "); cartoons; " );
}return null;
});

Clazz.newMeth(C$, 'evalStateCommand$S', function (command) {
p$1.jmolHistory$Z.apply(this, [false]);
if (this.lastCommand == null  || !this.lastCommand.equals$O(command) ) {
p$1.jmolScript$S.apply(this, [command + "\n"]);
}p$1.jmolHistory$Z.apply(this, [true]);
this.lastCommand=command;
});

Clazz.newMeth(C$, 'colourBySequence$jalview_structure_StructureMappingcommandSetA', function (colourBySequenceCommands) {
if (this.colourby != null ) {
this.colourby.interrupt$();
this.colourby=null;
}var colourby=Clazz.new_([((P$.JalviewJmolBinding$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewJmolBinding$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
for (var cpdbbyseq, $cpdbbyseq = 0, $$cpdbbyseq = this.$finals$.colourBySequenceCommands; $cpdbbyseq<$$cpdbbyseq.length&&((cpdbbyseq=($$cpdbbyseq[$cpdbbyseq])),1);$cpdbbyseq++) {
for (var cbyseq, $cbyseq = 0, $$cbyseq = cpdbbyseq.commands; $cbyseq<$$cbyseq.length&&((cbyseq=($$cbyseq[$cbyseq])),1);$cbyseq++) {
this.b$['jalview.ext.jmol.JalviewJmolBinding'].executeWhenReady$S.apply(this.b$['jalview.ext.jmol.JalviewJmolBinding'], [cbyseq]);
}
}
});
})()
), Clazz.new_(P$.JalviewJmolBinding$1.$init$,[this, {colourBySequenceCommands:colourBySequenceCommands}]))],$I$(6,1).c$$Runnable);
colourby.start$();
this.colourby=colourby;
});

Clazz.newMeth(C$, 'getColourBySequenceCommands$SA$jalview_api_SequenceRenderer$jalview_api_AlignmentViewPanel', function (files, sr, viewPanel) {
return $I$(10,"getColourBySequenceCommand$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_SequenceRenderer$jalview_api_AlignmentViewPanel",[this.getSsm$(), files, this.getSequence$(), sr, viewPanel]);
});

Clazz.newMeth(C$, 'executeWhenReady$S', function (command) {
this.evalStateCommand$S(command);
});

Clazz.newMeth(C$, 'createImage$S$S$I', function (file, type, quality) {
System.out.println$S("JMOL CREATE IMAGE");
});

Clazz.newMeth(C$, 'createImage$S$S$O$I', function (fileName, type, textOrBytes, quality) {
System.out.println$S("JMOL CREATE IMAGE");
return null;
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

Clazz.newMeth(C$, 'getColour$I$I$S$S', function (atomIndex, pdbResNum, chain, pdbfile) {
if (p$1.getModelNum$S.apply(this, [pdbfile]) < 0) {
return null;
}var colour=this.viewer.ms.at[atomIndex].atomPropertyInt$I(1765808134);
return Clazz.new_($I$(11,1).c$$I,[colour]);
});

Clazz.newMeth(C$, 'getModelNum$S', function (modelFileName) {
var mfn=this.getStructureFiles$();
if (mfn == null ) {
return -1;
}for (var i=0; i < mfn.length; i++) {
if (mfn[i].equalsIgnoreCase$S(modelFileName)) {
return i;
}}
return -1;
}, p$1);

Clazz.newMeth(C$, 'getStructureFiles$', function () {
var mset=Clazz.new_($I$(12,1));
if (this.viewer == null ) {
return Clazz.array(String, [0]);
}if (this.modelFileNames == null ) {
var modelCount=this.viewer.ms.mc;
var filePath=null;
for (var i=0; i < modelCount; ++i) {
filePath=this.viewer.ms.getModelFileName$I(i);
if (!mset.contains$O(filePath)) {
mset.add$O(filePath);
}}
this.modelFileNames=mset.toArray$OA(Clazz.array(String, [mset.size$()]));
}return this.modelFileNames;
});

Clazz.newMeth(C$, 'getRegistryInfo$', function () {
return null;
});

Clazz.newMeth(C$, 'handlePopupMenu$I$I', function (x, y) {
});

Clazz.newMeth(C$, 'highlightAtoms$java_util_List', function (atoms) {
if (atoms != null ) {
if (this.resetLastRes.length$() > 0) {
p$1.jmolScript$S.apply(this, [this.resetLastRes.toString()]);
this.resetLastRes.setLength$I(0);
}for (var atom, $atom = atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
this.highlightAtom$I$I$S$S(atom.getAtomIndex$(), atom.getPdbResNum$(), atom.getChain$(), atom.getPdbFile$());
}
}});

Clazz.newMeth(C$, 'highlightAtom$I$I$S$S', function (atomIndex, pdbResNum, chain, pdbfile) {
if (this.modelFileNames == null ) {
return;
}var mdlNum=0;
while (mdlNum < this.modelFileNames.length && !pdbfile.equals$O(this.modelFileNames[mdlNum]) ){
mdlNum++;
}
if (mdlNum == this.modelFileNames.length) {
return;
}p$1.jmolHistory$Z.apply(this, [false]);
var cmd=Clazz.new_($I$(3,1).c$$I,[64]);
cmd.append$S("select " + pdbResNum);
this.resetLastRes.append$S("select " + pdbResNum);
cmd.append$S(":");
this.resetLastRes.append$S(":");
if (!chain.equals$O(" ")) {
cmd.append$S(chain);
this.resetLastRes.append$S(chain);
}{
cmd.append$S(" /" + (mdlNum + 1));
this.resetLastRes.append$S("/" + (mdlNum + 1));
}cmd.append$S(";wireframe 100;" + cmd.toString() + " and not hetero;" );
this.resetLastRes.append$S(";wireframe 0;" + this.resetLastRes.toString() + " and not hetero; spacefill 0;" );
cmd.append$S("spacefill 200;select none");
p$1.jmolScript$S.apply(this, [cmd.toString()]);
p$1.jmolHistory$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'jmolHistory$Z', function (enable) {
p$1.jmolScript$S.apply(this, ["History " + ((this.debug || enable ) ? "on" : "off")]);
}, p$1);

Clazz.newMeth(C$, 'loadInline$S', function (string) {
this.loadedInline=true;
this.viewer.openStringInline$S(string);
});

Clazz.newMeth(C$, 'mouseOverStructure$I$S', function (atomIndex, strInfo) {
var pdbResNum;
var alocsep=strInfo.indexOf$S("^");
var mdlSep=strInfo.indexOf$S("/");
var chainSeparator=strInfo.indexOf$S(":");
var chainSeparator1=-1;
if (chainSeparator == -1) {
chainSeparator=strInfo.indexOf$S(".");
if (mdlSep > -1 && mdlSep < chainSeparator ) {
chainSeparator1=chainSeparator;
chainSeparator=mdlSep;
}}if (alocsep != -1) {
pdbResNum=Integer.parseInt$S(strInfo.substring$I$I(strInfo.indexOf$S("]") + 1, alocsep));
} else {
pdbResNum=Integer.parseInt$S(strInfo.substring$I$I(strInfo.indexOf$S("]") + 1, chainSeparator));
}var chainId;
if (strInfo.indexOf$S(":") > -1) {
chainId=strInfo.substring$I$I(strInfo.indexOf$S(":") + 1, strInfo.indexOf$S("."));
} else {
chainId=" ";
}var pdbfilename=this.modelFileNames[this.frameNo];
if (mdlSep > -1) {
if (chainSeparator1 == -1) {
chainSeparator1=strInfo.indexOf$S$I(".", mdlSep);
}var mdlId=(chainSeparator1 > -1) ? strInfo.substring$I$I(mdlSep + 1, chainSeparator1) : strInfo.substring$I(mdlSep + 1);
try {
var mnumber=Integer.valueOf$S(mdlId).intValue$() - 1;
if (this._modelFileNameMap != null ) {
var _mp=this._modelFileNameMap.length - 1;
while (mnumber < this._modelFileNameMap[_mp]){
_mp--;
}
pdbfilename=this.modelFileNames[_mp];
} else {
if (mnumber >= 0 && mnumber < this.modelFileNames.length ) {
pdbfilename=this.modelFileNames[mnumber];
}if (pdbfilename == null ) {
pdbfilename=Clazz.new_([this.viewer.ms.getModelFileName$I(mnumber)],$I$(13,1).c$$S).getAbsolutePath$();
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}var label=this.getSsm$().mouseOverStructure$I$S$S(pdbResNum, chainId, pdbfilename);
if (label != null ) {
label=label.replace$C$C(",", "|");
var toks=Clazz.new_($I$(14,1).c$$S$S,[strInfo, " "]);
var sb=Clazz.new_($I$(3,1));
sb.append$S("select ").append$S(String.valueOf$I(pdbResNum)).append$S(":").append$S(chainId).append$S("/1");
sb.append$S(";set hoverLabel \"").append$S(toks.nextToken$()).append$S(" ").append$S(toks.nextToken$());
sb.append$S("|").append$S(label).append$S("\"");
this.evalStateCommand$S(sb.toString());
}});

Clazz.newMeth(C$, 'notifyAtomHovered$I$S$S', function (atomIndex, strInfo, data) {
if (strInfo.equals$O(this.lastMessage)) {
return;
}this.lastMessage=strInfo;
if (data != null ) {
System.err.println$S("Ignoring additional hover info: " + data + " (other info: '" + strInfo + "' pos " + atomIndex + ")" );
}this.mouseOverStructure$I$S(atomIndex, strInfo);
});

Clazz.newMeth(C$, 'notifyAtomPicked$I$S$S', function (atomIndex, strInfo, strData) {
if (strData != null ) {
System.err.println$S("Ignoring additional pick data string " + strData);
}var chainSeparator=strInfo.indexOf$S(":");
var p=0;
if (chainSeparator == -1) {
chainSeparator=strInfo.indexOf$S(".");
}var picked=strInfo.substring$I$I(strInfo.indexOf$S("]") + 1, chainSeparator);
var mdlString="";
if ((p=strInfo.indexOf$S(":")) > -1) {
picked += strInfo.substring$I$I(p, strInfo.indexOf$S("."));
}if ((p=strInfo.indexOf$S("/")) > -1) {
mdlString += strInfo.substring$I$I(p, strInfo.indexOf$S(" #"));
}picked="((" + picked + ".CA" + mdlString + ")|(" + picked + ".P" + mdlString + "))" ;
p$1.jmolHistory$Z.apply(this, [false]);
if (!this.atomsPicked.contains$O(picked)) {
p$1.jmolScript$S.apply(this, ["select " + picked + ";label %n %r:%c" ]);
this.atomsPicked.addElement$O(picked);
} else {
this.viewer.evalString$S("select " + picked + ";label off" );
this.atomsPicked.removeElement$O(picked);
}p$1.jmolHistory$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'notifyCallback$org_jmol_c_CBK$OA', function (type, data) {
try {
switch (type) {
case $I$(15).LOADSTRUCT:
this.notifyFileLoaded$S$S$S$S$I(data[1], data[2], data[3], data[4], (data[5]).intValue$());
break;
case $I$(15).PICK:
this.notifyAtomPicked$I$S$S((data[2]).intValue$(), data[1], data[0]);
case $I$(15).HOVER:
this.notifyAtomHovered$I$S$S((data[2]).intValue$(), data[1], data[0]);
break;
case $I$(15).SCRIPT:
this.notifyScriptTermination$S$I(data[2], (data[3]).intValue$());
break;
case $I$(15).ECHO:
this.sendConsoleEcho$S(data[1]);
break;
case $I$(15).MESSAGE:
this.sendConsoleMessage$S((data == null ) ? (null) : data[1]);
break;
case $I$(15).ERROR:
break;
case $I$(15).SYNC:
case $I$(15).RESIZE:
this.refreshGUI$();
break;
case $I$(15).MEASURE:
case $I$(15).CLICK:
default:
System.err.println$S("Unhandled callback " + type + " " + data[1].toString() );
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Squashed Jmol callback handler error:");
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'notifyEnabled$org_jmol_c_CBK', function (callbackPick) {
switch (callbackPick) {
case $I$(15).ECHO:
case $I$(15).LOADSTRUCT:
case $I$(15).MEASURE:
case $I$(15).MESSAGE:
case $I$(15).PICK:
case $I$(15).SCRIPT:
case $I$(15).HOVER:
case $I$(15).ERROR:
return true;
default:
return false;
}
});

Clazz.newMeth(C$, 'getLoadNotifiesHandled$', function () {
return this.loadNotifiesHandled;
});

Clazz.newMeth(C$, 'notifyFileLoaded$S$S$S$S$I', function (fullPathName, fileName2, modelName, errorMsg, modelParts) {
if (errorMsg != null ) {
this.fileLoadingError=errorMsg;
this.refreshGUI$();
return;
}this.fileLoadingError=null;
var oldmodels=this.modelFileNames;
this.modelFileNames=null;
this.chainNames=Clazz.new_($I$(12,1));
this.chainFile=Clazz.new_($I$(16,1));
var notifyLoaded=false;
var modelfilenames=this.getStructureFiles$();
if (oldmodels != null  && oldmodels.length > 0 ) {
var oldm=0;
for (var i=0; i < oldmodels.length; i++) {
for (var n=0; n < modelfilenames.length; n++) {
if (modelfilenames[n] == oldmodels[i]) {
oldmodels[i]=null;
break;
}}
if (oldmodels[i] != null ) {
oldm++;
}}
if (oldm > 0) {
var oldmfn=Clazz.array(String, [oldm]);
oldm=0;
for (var i=0; i < oldmodels.length; i++) {
if (oldmodels[i] != null ) {
oldmfn[oldm++]=oldmodels[i];
}}
this.getSsm$().removeStructureViewerListener$O$SA(this, oldmfn);
}}this.refreshPdbEntries$();
for (var modelnum=0; modelnum < modelfilenames.length; modelnum++) {
var fileName=modelfilenames[modelnum];
var foundEntry=false;
var pdb=null;
var pdbfile=null;
if (this.loadedInline) {
pdbfile=this.viewer.getData$S$S("" + (1 + this._modelFileNameMap[modelnum]) + ".0" , "PDB");
}for (var pe=0; pe < this.getPdbCount$(); pe++) {
var matches=false;
this.addSequence$I$jalview_datamodel_SequenceIA(pe, this.getSequence$()[pe]);
if (fileName == null ) {
if (false) {
pdb=this.getSsm$().setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(this.getSequence$()[pe], this.getChains$()[pe], pdbfile, $I$(17).PASTE, this.getIProgressIndicator$());
this.getPdbEntry$I(modelnum).setFile$S("INLINE" + pdb.getId$());
matches=true;
foundEntry=true;
}} else {
var fl=Clazz.new_([this.getPdbEntry$I(pe).getFile$()],$I$(13,1).c$$S);
matches=fl.equals$O(Clazz.new_($I$(13,1).c$$S,[fileName]));
if (matches) {
foundEntry=true;
var protocol=$I$(17).URL;
try {
if (fl.exists$()) {
protocol=$I$(17).FILE;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
pdb=this.getSsm$().setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(this.getSequence$()[pe], this.getChains$()[pe], fileName, protocol, this.getIProgressIndicator$());
}}if (matches) {
for (var i=0; i < pdb.getChains$().size$(); i++) {
var chid= String.instantialize(pdb.getId$() + ":" + pdb.getChains$().elementAt$I(i).id );
this.chainFile.put$O$O(chid, fileName);
this.chainNames.add$O(chid);
}
notifyLoaded=true;
}}
if (!foundEntry && this.associateNewStructs ) {
var pdbcontent=this.viewer.getData$S$S("/" + (modelnum + 1) + ".1" , "PDB");
notifyLoaded=true;
}}
if (!this.isLoadingFromArchive$()) {
p$1.jmolScript$S.apply(this, ["model *; select backbone;restrict;cartoon;wireframe off;spacefill off"]);
}this.getSsm$().addStructureViewerListener$O(this);
if (notifyLoaded) {
var fr=this.getFeatureRenderer$jalview_api_AlignmentViewPanel(null);
if (fr != null ) {
fr.featuresAdded$();
}this.refreshGUI$();
this.loadNotifiesHandled++;
}this.setLoadingFromArchive$Z(false);
});

Clazz.newMeth(C$, 'getChainNames$', function () {
return this.chainNames;
});

Clazz.newMeth(C$, 'getIProgressIndicator$', function () {
return null;
});

Clazz.newMeth(C$, 'notifyNewPickingModeMeasurement$I$S', function (iatom, strMeasure) {
this.notifyAtomPicked$I$S$S(iatom, strMeasure, null);
});

Clazz.newMeth(C$, 'setCallbackFunction$S$S', function (callbackType, callbackFunction) {
System.err.println$S("Ignoring set-callback request to associate " + callbackType + " with function " + callbackFunction );
});

Clazz.newMeth(C$, 'setJalviewColourScheme$jalview_schemes_ColourSchemeI', function (cs) {
this.colourBySequence=false;
if (cs == null ) {
return;
}p$1.jmolHistory$Z.apply(this, [false]);
var command=Clazz.new_($I$(3,1).c$$I,[128]);
command.append$S("select *;color white;");
var residueSet=$I$(18,"getResidues$Z$Z",[this.isNucleotide$(), false]);
for (var resName, $resName = residueSet.iterator$(); $resName.hasNext$()&&((resName=($resName.next$())),1);) {
var res=resName.length$() == 3 ? $I$(18).getSingleCharacterCode$S(resName) : resName.charAt$I(0);
var col=cs.findColour$C$I$jalview_datamodel_SequenceI$S$F(res, 0, null, null, 0.0);
command.append$S("select " + resName + ";color[" + col.getRed$() + "," + col.getGreen$() + "," + col.getBlue$() + "];" );
}
this.evalStateCommand$S(command.toString());
p$1.jmolHistory$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'showHelp$', function () {
this.showUrl$S$S("http://wiki.jmol.org", "jmolHelp");
});

Clazz.newMeth(C$, 'getJmolData$jalview_ext_jmol_JmolParser', function (jmolParser) {
return $I$(19).allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener(null, null, null, null, null, "-x -o -n", jmolParser);
}, 1);

Clazz.newMeth(C$, 'allocateViewer$java_awt_Container$Z$S$java_net_URL$java_net_URL$S', function (renderPanel, jmolfileio, htmlName, documentBase, codeBase, commandOptions) {
this.allocateViewer$java_awt_Container$Z$S$java_net_URL$java_net_URL$S$java_awt_Container$S(renderPanel, jmolfileio, htmlName, documentBase, codeBase, commandOptions, null, null);
});

Clazz.newMeth(C$, 'allocateViewer$java_awt_Container$Z$S$java_net_URL$java_net_URL$S$java_awt_Container$S', function (renderPanel, jmolfileio, htmlName, documentBase, codeBase, commandOptions, consolePanel, buttonsToShow) {
System.err.println$S("Allocating Jmol Viewer: " + commandOptions);
if (commandOptions == null ) {
commandOptions="";
}this.viewer=$I$(19,"allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener",[renderPanel, (jmolfileio ? Clazz.new_($I$(20,1)) : null), htmlName + (this).toString(), documentBase, codeBase, commandOptions, this]);
this.viewer.setJmolStatusListener$org_jmol_api_JmolStatusListener(this);
try {
this.console=this.createJmolConsole$java_awt_Container$S(consolePanel, buttonsToShow);
} catch (e) {
System.err.println$S("Could not create Jmol application console. " + e.getMessage$());
e.printStackTrace$();
}
if (consolePanel != null ) {
consolePanel.addComponentListener$java_awt_event_ComponentListener(this);
}});

Clazz.newMeth(C$, 'setBackgroundColour$java_awt_Color', function (col) {
p$1.jmolHistory$Z.apply(this, [false]);
p$1.jmolScript$S.apply(this, ["background [" + col.getRed$() + "," + col.getGreen$() + "," + col.getBlue$() + "];" ]);
p$1.jmolHistory$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'jmolScript$S', function (script) {
System.err.println$S(">>Jmol>> " + script);
var s=this.viewer.scriptWait$S(script);
System.err.println$S("<<Jmol<< " + s);
return s;
}, p$1);

Clazz.newMeth(C$, 'resizeInnerPanel$S', function (data) {
return null;
});

Clazz.newMeth(C$, 'closeConsole$', function () {
if (this.console != null ) {
try {
this.console.setVisible$Z(false);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
}
} else {
throw e$$;
}
}
;this.console=null;
}});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent', function (e) {
this.showConsole$Z(true);
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent', function (e) {
this.showConsole$Z(false);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
