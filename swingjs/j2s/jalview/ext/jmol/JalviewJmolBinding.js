(function(){var P$=Clazz.newPackage("jalview.ext.jmol"),p$1={},I$=[[0,'java.util.Vector','StringBuffer','jalview.ext.jmol.JmolCommands','jalview.bin.Console','java.util.ArrayList','StringBuilder','java.io.File','java.util.StringTokenizer','jalview.structure.StructureCommand','javax.swing.SwingUtilities','org.jmol.c.CBK','jalview.io.DataSourceType','jalview.ws.dbsources.Pdb','org.jmol.api.JmolViewer','org.jmol.adapter.smarter.SmarterJmolAdapter',['jalview.gui.StructureViewer','.ViewerType'],'jalview.gui.SequenceRenderer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewJmolBinding", null, 'jalview.structures.models.AAStructureBindingModel', ['org.jmol.api.JmolStatusListener', 'org.jmol.api.JmolSelectionListener', 'java.awt.event.ComponentListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.associateNewStructs=false;
this.atomsPicked=Clazz.new_($I$(1,1));
this.resetLastRes=Clazz.new_($I$(2,1));
this.debug=true;
this.loadNotifiesHandled=0;
this.console=null;
},1);

C$.$fields$=[['Z',['associateNewStructs','loadedInline','debug'],'J',['loadNotifiesHandled'],'S',['lastMessage','lastCommand'],'O',['atomsPicked','java.util.Vector','resetLastRes','StringBuffer','jmolViewer','org.jmol.viewer.Viewer','_modelFileNameMap','int[]','console','org.jmol.api.JmolAppConsoleInterface']]]

Clazz.newMeth(C$, 'c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType',  function (ssm, pdbentry, sequenceIs, protocol) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this,[ssm, pdbentry, sequenceIs, protocol]);C$.$init$.apply(this);
this.setStructureCommands$jalview_structure_StructureCommandsI(Clazz.new_($I$(3,1)));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_structure_StructureSelectionManager$jalview_datamodel_SequenceIAA$org_jmol_viewer_Viewer',  function (ssm, seqs, theViewer) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_SequenceIAA.apply(this,[ssm, seqs]);C$.$init$.apply(this);
this.jmolViewer=theViewer;
this.jmolViewer.setJmolStatusListener$org_jmol_api_JmolStatusListener(this);
this.jmolViewer.addSelectionListener$org_jmol_api_JmolSelectionListener(this);
this.setStructureCommands$jalview_structure_StructureCommandsI(Clazz.new_($I$(3,1)));
}, 1);

Clazz.newMeth(C$, 'getViewerTitle$',  function () {
return this.getViewerTitle$S$Z("Jmol", true);
});

Clazz.newMeth(C$, 'jmolScript$S',  function (script) {
$I$(4).debug$S(">>Jmol>> " + script);
var s=this.jmolViewer.evalStringQuiet$S(script);
$I$(4).debug$S("<<Jmol<< " + s);
return s;
}, p$1);

Clazz.newMeth(C$, 'executeCommand$jalview_structure_StructureCommandI$Z',  function (command, getReply) {
if (command == null ) {
return null;
}var cmd=command.getCommand$();
p$1.jmolHistory$Z.apply(this, [false]);
if (this.lastCommand == null  || !this.lastCommand.equals$O(cmd) ) {
p$1.jmolScript$S.apply(this, [cmd + "\n"]);
}p$1.jmolHistory$Z.apply(this, [true]);
this.lastCommand=cmd;
return null;
});

Clazz.newMeth(C$, 'createImage$S$S$I',  function (file, type, quality) {
System.out.println$S("JMOL CREATE IMAGE");
});

Clazz.newMeth(C$, 'createImage$S$S$O$I',  function (fileName, type, textOrBytes, quality) {
System.out.println$S("JMOL CREATE IMAGE");
return null;
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

Clazz.newMeth(C$, 'getStructureFiles$',  function () {
if (this.jmolViewer == null ) {
return Clazz.array(String, [0]);
}if (this.modelFileNames == null ) {
var modelCount=this.jmolViewer.ms.mc;
var filePath=null;
var mset=Clazz.new_($I$(5,1));
for (var i=0; i < modelCount; ++i) {
filePath=this.jmolViewer.ms.getModelFileName$I(i);
if (filePath != null  && !mset.contains$O(filePath) ) {
mset.add$O(filePath);
}}
if (!mset.isEmpty$()) {
this.modelFileNames=mset.toArray$OA(Clazz.array(String, [mset.size$()]));
}}return this.modelFileNames;
});

Clazz.newMeth(C$, 'getRegistryInfo$',  function () {
return null;
});

Clazz.newMeth(C$, 'handlePopupMenu$I$I',  function (x, y) {
});

Clazz.newMeth(C$, 'highlightAtoms$java_util_List',  function (atoms) {
if (atoms != null ) {
if (this.resetLastRes.length$() > 0) {
p$1.jmolScript$S.apply(this, [this.resetLastRes.toString()]);
this.resetLastRes.setLength$I(0);
}for (var atom, $atom = atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
this.highlightAtom$I$I$S$S(atom.getAtomIndex$(), atom.getPdbResNum$(), atom.getChain$(), atom.getPdbFile$());
}
}});

Clazz.newMeth(C$, 'highlightAtom$I$I$S$S',  function (atomIndex, pdbResNum, chain, pdbfile) {
var modelId=this.getModelIdForFile$S(pdbfile);
if (modelId.isEmpty$()) {
return;
}p$1.jmolHistory$Z.apply(this, [false]);
var selection=Clazz.new_($I$(6,1).c$$I,[32]);
var cmd=Clazz.new_($I$(6,1).c$$I,[64]);
selection.append$S("select ").append$S(String.valueOf$I(pdbResNum));
selection.append$S(":");
if (!chain.equals$O(" ")) {
selection.append$S(chain);
}selection.append$S(" /").append$S(modelId);
cmd.append$CharSequence(selection).append$S(";wireframe 100;").append$CharSequence(selection).append$S(" and not hetero;").append$S("spacefill 200;select none");
this.resetLastRes.append$CharSequence(selection).append$S(";wireframe 0;").append$CharSequence(selection).append$S(" and not hetero; spacefill 0;");
p$1.jmolScript$S.apply(this, [cmd.toString()]);
p$1.jmolHistory$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'jmolHistory$Z',  function (enable) {
p$1.jmolScript$S.apply(this, ["History " + ((this.debug || enable ) ? "on" : "off")]);
}, p$1);

Clazz.newMeth(C$, 'loadInline$S',  function (string) {
this.loadedInline=true;
this.jmolViewer.openStringInline$S(string);
});

Clazz.newMeth(C$, 'mouseOverStructure$I$S',  function (atomIndex, strInfo) {
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
}var pdbfilename=this.modelFileNames[0];
if (mdlSep > -1) {
if (chainSeparator1 == -1) {
chainSeparator1=strInfo.indexOf$S$I(".", mdlSep);
}var mdlId=(chainSeparator1 > -1) ? strInfo.substring$I$I(mdlSep + 1, chainSeparator1) : strInfo.substring$I(mdlSep + 1);
try {
var mnumber=Integer.valueOf$S(mdlId).intValue$() - 1;
if (this._modelFileNameMap != null ) {
var _mp=this._modelFileNameMap.length - 1;
while (mnumber < this._modelFileNameMap[_mp]){
--_mp;
}
pdbfilename=this.modelFileNames[_mp];
} else {
if (mnumber >= 0 && mnumber < this.modelFileNames.length ) {
pdbfilename=this.modelFileNames[mnumber];
}if (pdbfilename == null ) {
pdbfilename=Clazz.new_([this.jmolViewer.ms.getModelFileName$I(mnumber)],$I$(7,1).c$$S).getAbsolutePath$();
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}var label=this.getSsm$().mouseOverStructure$I$S$S(pdbResNum, chainId, pdbfilename);
if (label != null ) {
label=label.replace$C$C(",", "|");
var toks=Clazz.new_($I$(8,1).c$$S$S,[strInfo, " "]);
var sb=Clazz.new_($I$(6,1));
sb.append$S("select ").append$S(String.valueOf$I(pdbResNum)).append$S(":").append$S(chainId).append$S("/1");
sb.append$S(";set hoverLabel \"").append$S(toks.nextToken$()).append$S(" ").append$S(toks.nextToken$());
sb.append$S("|").append$S(label).append$S("\"");
this.executeCommand$jalview_structure_StructureCommandI$Z(Clazz.new_([sb.toString(), Clazz.array(String, -1, [])],$I$(9,1).c$$S$SA), false);
}});

Clazz.newMeth(C$, 'notifyAtomHovered$I$S$S',  function (atomIndex, strInfo, data) {
if (strInfo.equals$O(this.lastMessage)) {
return;
}this.lastMessage=strInfo;
if (data != null ) {
System.err.println$S("Ignoring additional hover info: " + data + " (other info: '" + strInfo + "' pos " + atomIndex + ")" );
}this.mouseOverStructure$I$S(atomIndex, strInfo);
});

Clazz.newMeth(C$, 'notifyAtomPicked$I$S$S',  function (atomIndex, strInfo, strData) {
if (strData != null ) {
System.err.println$S("Ignoring additional pick data string " + strData);
}var chainSeparator=strInfo.indexOf$S(":");
var p=0;
if (chainSeparator == -1) {
chainSeparator=strInfo.indexOf$S(".");
}var picked=strInfo.substring$I$I(strInfo.indexOf$S("]") + 1, chainSeparator);
var mdlString="";
if ((p=strInfo.indexOf$S(":")) > -1) {
picked+=strInfo.substring$I$I(p, strInfo.indexOf$S("."));
}if ((p=strInfo.indexOf$S("/")) > -1) {
mdlString+=strInfo.substring$I$I(p, strInfo.indexOf$S(" #"));
}picked="((" + picked + ".CA" + mdlString + ")|(" + picked + ".P" + mdlString + "))" ;
p$1.jmolHistory$Z.apply(this, [false]);
if (!this.atomsPicked.contains$O(picked)) {
p$1.jmolScript$S.apply(this, ["select " + picked + ";label %n %r:%c" ]);
this.atomsPicked.addElement$O(picked);
} else {
this.jmolViewer.evalString$S("select " + picked + ";label off" );
this.atomsPicked.removeElement$O(picked);
}p$1.jmolHistory$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'notifyCallback$org_jmol_c_CBK$OA',  function (type, data) {
$I$(10,"invokeLater$Runnable",[((P$.JalviewJmolBinding$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewJmolBinding$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.ext.jmol.JalviewJmolBinding'].processCallback$org_jmol_c_CBK$OA.apply(this.b$['jalview.ext.jmol.JalviewJmolBinding'], [this.$finals$.type, this.$finals$.data]);
});
})()
), Clazz.new_(P$.JalviewJmolBinding$1.$init$,[this, {type:type,data:data}]))]);
});

Clazz.newMeth(C$, 'processCallback$org_jmol_c_CBK$OA',  function (type, data) {
try {
switch (type) {
case $I$(11).LOADSTRUCT:
this.notifyFileLoaded$S$S$S$S$I(data[1], data[2], data[3], data[4], (data[5]).intValue$());
break;
case $I$(11).PICK:
this.notifyAtomPicked$I$S$S((data[2]).intValue$(), data[1], data[0]);
case $I$(11).HOVER:
this.notifyAtomHovered$I$S$S((data[2]).intValue$(), data[1], data[0]);
break;
case $I$(11).SCRIPT:
this.notifyScriptTermination$S$I(data[2], (data[3]).intValue$());
break;
case $I$(11).ECHO:
this.sendConsoleEcho$S(data[1]);
break;
case $I$(11).MESSAGE:
this.sendConsoleMessage$S((data == null ) ? (null) : data[1]);
break;
case $I$(11).ERROR:
break;
case $I$(11).SYNC:
case $I$(11).RESIZE:
this.refreshGUI$();
break;
case $I$(11).MEASURE:
case $I$(11).CLICK:
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

Clazz.newMeth(C$, 'notifyEnabled$org_jmol_c_CBK',  function (callbackPick) {
switch (callbackPick) {
case $I$(11).ECHO:
case $I$(11).LOADSTRUCT:
case $I$(11).MEASURE:
case $I$(11).MESSAGE:
case $I$(11).PICK:
case $I$(11).SCRIPT:
case $I$(11).HOVER:
case $I$(11).ERROR:
return true;
default:
return false;
}
});

Clazz.newMeth(C$, 'getLoadNotifiesHandled$',  function () {
return this.loadNotifiesHandled;
});

Clazz.newMeth(C$, 'notifyFileLoaded$S$S$S$S$I',  function (fullPathName, fileName2, modelName, errorMsg, modelParts) {
if (errorMsg != null ) {
this.fileLoadingError=errorMsg;
this.refreshGUI$();
return;
}this.fileLoadingError=null;
var oldmodels=this.modelFileNames;
this.modelFileNames=null;
var notifyLoaded=false;
var modelfilenames=this.getStructureFiles$();
if (modelfilenames == null ) {
return;
}if (oldmodels != null  && oldmodels.length > 0 ) {
var oldm=0;
for (var i=0; i < oldmodels.length; i++) {
for (var n=0; n < modelfilenames.length; n++) {
if (modelfilenames[n] == oldmodels[i]) {
oldmodels[i]=null;
break;
}}
if (oldmodels[i] != null ) {
++oldm;
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
pdbfile=this.jmolViewer.getData$S$S("" + (1 + this._modelFileNameMap[modelnum]) + ".0" , "PDB");
}for (var pe=0; pe < this.getPdbCount$(); pe++) {
var matches=false;
this.addSequence$I$jalview_datamodel_SequenceIA(pe, this.getSequence$()[pe]);
if (fileName == null ) {
if (false) {
pdb=this.getSsm$().setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(this.getSequence$()[pe], this.getChains$()[pe], pdbfile, $I$(12).PASTE, this.getIProgressIndicator$());
this.getPdbEntry$I(modelnum).setFile$S("INLINE" + pdb.getId$());
matches=true;
foundEntry=true;
}} else {
var fl=Clazz.new_([this.getPdbEntry$I(pe).getFile$()],$I$(7,1).c$$S);
matches=fl.equals$O(Clazz.new_($I$(7,1).c$$S,[fileName]));
if (matches) {
foundEntry=true;
var protocol=$I$(12).URL;
try {
if (fl.exists$()) {
protocol=$I$(12).FILE;
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
this.stashFoundChains$jalview_io_StructureFile$S(pdb, fileName);
notifyLoaded=true;
}}
if (!foundEntry && this.associateNewStructs ) {
var pdbcontent=this.jmolViewer.getData$S$S("/" + (modelnum + 1) + ".1" , "PDB");
notifyLoaded=true;
}}
if (!this.isLoadingFromArchive$()) {
p$1.jmolScript$S.apply(this, ["model *; select backbone;restrict;cartoon;wireframe off;spacefill off"]);
}this.getSsm$().addStructureViewerListener$O(this);
if (notifyLoaded) {
var fr=this.getFeatureRenderer$jalview_api_AlignmentViewPanel(null);
if (fr != null ) {
var colours=Clazz.new_($I$(13,1)).getFeatureColourScheme$();
(this.getViewer$()).getAlignmentPanel$().av.applyFeaturesStyle$jalview_api_FeatureSettingsModelI(colours);
}this.refreshGUI$();
(this.loadNotifiesHandled=Long.$inc(this.loadNotifiesHandled,1));
}this.setLoadingFromArchive$Z(false);
});

Clazz.newMeth(C$, 'getIProgressIndicator$',  function () {
return null;
});

Clazz.newMeth(C$, 'notifyNewPickingModeMeasurement$I$S',  function (iatom, strMeasure) {
this.notifyAtomPicked$I$S$S(iatom, strMeasure, null);
});

Clazz.newMeth(C$, 'setCallbackFunction$S$S',  function (callbackType, callbackFunction) {
System.err.println$S("Ignoring set-callback request to associate " + callbackType + " with function " + callbackFunction );
});

Clazz.newMeth(C$, 'showHelp$',  function () {
this.showUrl$S$S("http://wiki.jmol.org", "jmolHelp");
});

Clazz.newMeth(C$, 'getJmolData$jalview_ext_jmol_JmolParser',  function (jmolParser) {
return $I$(14).allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener(null, null, null, null, null, "-x -o -n", jmolParser);
}, 1);

Clazz.newMeth(C$, 'allocateViewer$java_awt_Container$Z$S$java_net_URL$java_net_URL$S',  function (renderPanel, jmolfileio, htmlName, documentBase, codeBase, commandOptions) {
this.allocateViewer$java_awt_Container$Z$S$java_net_URL$java_net_URL$S$java_awt_Container$S(renderPanel, jmolfileio, htmlName, documentBase, codeBase, commandOptions, null, null);
});

Clazz.newMeth(C$, 'allocateViewer$java_awt_Container$Z$S$java_net_URL$java_net_URL$S$java_awt_Container$S',  function (renderPanel, jmolfileio, htmlName, documentBase, codeBase, commandOptions, consolePanel, buttonsToShow) {
System.err.println$S("Allocating Jmol Viewer: " + commandOptions);
if (commandOptions == null ) {
commandOptions="";
}this.jmolViewer=$I$(14,"allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener",[renderPanel, (jmolfileio ? Clazz.new_($I$(15,1)) : null), htmlName + (this).toString(), documentBase, codeBase, commandOptions, this]);
this.jmolViewer.setJmolStatusListener$org_jmol_api_JmolStatusListener(this);
try {
this.console=this.createJmolConsole$java_awt_Container$S(consolePanel, buttonsToShow);
} catch (e) {
System.err.println$S("Could not create Jmol application console. " + e.getMessage$());
e.printStackTrace$();
}
if (consolePanel != null ) {
consolePanel.addComponentListener$java_awt_event_ComponentListener(this);
}});

Clazz.newMeth(C$, 'resizeInnerPanel$S',  function (data) {
return null;
});

Clazz.newMeth(C$, 'closeConsole$',  function () {
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

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent',  function (e) {
this.showConsole$Z(true);
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent',  function (e) {
this.showConsole$Z(false);
});

Clazz.newMeth(C$, 'getModelIdForFile$S',  function (pdbFile) {
if (this.modelFileNames == null ) {
return "";
}for (var i=0; i < this.modelFileNames.length; i++) {
if (this.modelFileNames[i].equalsIgnoreCase$S(pdbFile)) {
return String.valueOf$I(i + 1);
}}
return "";
});

Clazz.newMeth(C$, 'getViewerType$',  function () {
return $I$(16).JMOL;
});

Clazz.newMeth(C$, 'getModelId$I$S',  function (pdbfnum, file) {
return String.valueOf$I(pdbfnum + 1);
});

Clazz.newMeth(C$, 'getSessionFileExtension$',  function () {
return ".spt";
});

Clazz.newMeth(C$, 'selectionChanged$javajs_util_BS',  function (arg0) {
});

Clazz.newMeth(C$, 'getSequenceRenderer$jalview_api_AlignmentViewPanel',  function (avp) {
return Clazz.new_([avp.getAlignViewport$()],$I$(17,1).c$$jalview_api_AlignViewportI);
});

Clazz.newMeth(C$, 'getHelpURL$',  function () {
return "http://wiki.jmol.org";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
