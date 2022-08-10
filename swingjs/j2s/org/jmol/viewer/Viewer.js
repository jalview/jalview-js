(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.util.Logger','org.jmol.viewer.JC','org.jmol.util.CommandHistory','java.awt.Dimension','org.jmol.atomdata.RadiusData','org.jmol.c.VDW','javajs.util.Lst','org.jmol.adapter.smarter.SmarterJmolAdapter','Thread','javajs.util.PT',['org.jmol.viewer.Viewer','.ACCESS'],'org.jmol.api.Interface','org.jmol.util.GData','org.jmol.viewer.StateManager','org.jmol.viewer.ColorManager','org.jmol.viewer.StatusManager','org.jmol.viewer.TransformManager','org.jmol.viewer.SelectionManager','org.jmol.viewer.ActionManager','org.jmol.viewer.ModelManager','org.jmol.viewer.ShapeManager','org.jmol.util.TempArray','org.jmol.viewer.AnimationManager','org.jmol.modelset.ModelSet','org.jmol.viewer.FileManager','org.jmol.util.Escape','org.jmol.i18n.GT','org.jmol.util.Elements','org.jmol.viewer.GlobalSettings','org.jmol.util.BSUtil','javajs.util.Quat','javajs.util.CU','org.jmol.util.C','javajs.util.BS','org.jmol.script.T','javajs.util.SB','javajs.util.AU','javajs.util.Rdr','org.jmol.c.FIL','org.jmol.util.JmolMolecule','org.jmol.c.STER','javajs.util.P3','org.jmol.script.SV','javajs.util.P3i','javax.swing.SwingUtilities','javajs.util.DF',['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.viewer.binding.Binding','org.jmol.util.Parser','org.jmol.thread.TimeoutThread','java.util.Arrays']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Viewer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.api.JmolViewer', ['org.jmol.atomdata.AtomDataServer', 'org.jmol.api.PlatformViewer']);
C$.$classes$=[['ACCESS',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.autoExit=false;
this.haveDisplay=false;
this.queueOnHold=false;
this.fullName="";
this.isSyntaxAndFileCheck=false;
this.isSyntaxCheck=false;
this.listCommands=false;
this.mustRender=false;
this.htmlName="";
this.appletName="";
this.insertedCommand="";
this.syncId="";
this.logFilePath="";
this.isSignedApplet=false;
this.isSignedAppletLocal=false;
this.useCommandThread=false;
this.refreshing=true;
this.axesAreTainted=false;
this.maximumSize=2147483647;
this.imageFontScaling=1;
this.hoverAtomIndex=-1;
this.hoverLabel="%U";
this.hoverEnabled=true;
this.currentCursor=0;
this.prevFrame=-2147483648;
this.selectionHalosEnabled=false;
this.frankOn=true;
this.noFrankEcho=true;
this.isTainted=true;
this.atomHighlighted=-1;
this.currentShapeID=-1;
this.displayLoadErrors=true;
},1);

C$.$fields$=[['Z',['testAsync','autoExit','haveDisplay','isApplet','isJNLP','isSingleThreaded','queueOnHold','isSyntaxAndFileCheck','isSyntaxCheck','listCommands','mustRender','allowScripting','isPrintOnly','isSignedApplet','isSignedAppletLocal','isSilent','multiTouch','noGraphicsAllowed','useCommandThread','allowArrayDotNotation','async','dataOnly','isJSNoAWT','isPreviewOnly','headless','inMotion','refreshing','axesAreTainted','isStereoSlave','antialiased','hoverEnabled','haveJDX','selectionHalosEnabled','frankOn','noFrankEcho','scriptEditorVisible','isTainted','movingSelected','showSelected','creatingImage','isKiosk','displayLoadErrors','isParallel','chainCaseSpecified'],'D',['privateKey'],'F',['imageFontScaling','prevMorphModel'],'I',['tryPt','motionEventNumber','maximumSize','hoverAtomIndex','currentCursor','prevFrame','atomHighlighted','currentShapeID','stateScriptVersionInt'],'S',['fullName','htmlName','appletName','insertedCommand','syncId','logFilePath','commandOptions','errorMessage','errorMessageUntranslated','hoverText','hoverLabel','currentShapeState','logFileName'],'O',['compiler','java.lang.Object','definedAtomSets','java.util.Map','ms','org.jmol.modelset.ModelSet','fm','org.jmol.viewer.FileManager','gdata','org.jmol.util.GData','html5Applet','org.jmol.api.js.JSmolAppletObject','acm','org.jmol.viewer.ActionManager','am','org.jmol.viewer.AnimationManager','cm','org.jmol.viewer.ColorManager','dm','org.jmol.api.JmolDataManager','shm','org.jmol.viewer.ShapeManager','slm','org.jmol.viewer.SelectionManager','rm','org.jmol.api.JmolRepaintManager','g','org.jmol.viewer.GlobalSettings','sm','org.jmol.viewer.StatusManager','tm','org.jmol.viewer.TransformManager','vwrOptions','java.util.Map','display','java.lang.Object','modelAdapter','org.jmol.api.JmolAdapter','access','org.jmol.viewer.Viewer.ACCESS','commandHistory','org.jmol.util.CommandHistory','mm','org.jmol.viewer.ModelManager','stm','org.jmol.viewer.StateManager','scm','org.jmol.api.JmolScriptManager','eval','org.jmol.api.JmolScriptEvaluator','tempArray','org.jmol.util.TempArray','executor','java.lang.Object','dimScreen','java.awt.Dimension','actionStates','javajs.util.Lst','+actionStatesRedo','defaultVdw','org.jmol.c.VDW','rd','org.jmol.atomdata.RadiusData','chainMap','java.util.Map','chainList','javajs.util.Lst','movableBitSet','javajs.util.BS','mouse','org.jmol.api.GenericMouseInterface','ligandModels','java.util.Map','+ligandModelSet','annotationParser','org.jmol.api.JmolAnnotationParser','+dssrParser','minimizer','org.jmol.minimize.Minimizer','smilesMatcher','org.jmol.api.SmilesMatcherInterface','jsc','org.jmol.viewer.JmolStateCreator','lastData','Object[]','gRight','java.lang.Object','captureParams','java.util.Map','+jsParams','ptTemp','javajs.util.P3','jsv','org.jmol.api.JmolJSpecView','appConsole','org.jmol.api.JmolAppConsoleInterface','scriptEditor','org.jmol.api.JmolScriptEditorInterface','jmolpopup','org.jmol.api.GenericMenuInterface','modelkit','org.jmol.modelkit.ModelKitPopup','headlessImageParams','java.util.Map','pm','org.jmol.api.JmolPropertyManager','outputManager','org.jmol.viewer.OutputManager','bsUserVdws','javajs.util.BS','userVdws','float[]','userVdwMars','int[]','localFunctions','java.util.Map','jsExporter3D','org.jmol.api.JmolRendererInterface','timeouts','java.util.Map','nmrCalculation','org.jmol.api.JmolNMRInterface','jbr','org.jmol.modelsetbio.BioResolver','jcm','org.jmol.viewer.JmolChimeMessenger','jsonParser','javajs.util.JSJSONParser','triangulator','org.jmol.util.Triangulator','nboParser','org.jmol.adapter.readers.quantum.NBOParser','macros','java.util.Map']]
,['Z',['isSwingJS','isJS','isWebGL'],'I',['nProcessors'],'S',['appletDocumentBase','appletCodeBase','appletIdiomaBase','jsDocumentBase','strJavaVendor','strOSName','strJavaVersion','version_date'],'O',['jmolObject','org.jmol.api.js.JmolToJSmolInterface','staticFunctions','java.util.Map']]]

Clazz.newMeth(C$, 'finalize$', function () {
if ($I$(2).debugging) $I$(2).debug$S("vwr finalize " + this);
C$.superclazz.prototype.finalize$.apply(this, []);
});

Clazz.newMeth(C$, 'setInsertedCommand$S', function (strScript) {
this.insertedCommand=strScript;
});

Clazz.newMeth(C$, 'getJmolVersion$', function () {
return (C$.version_date == null  ? C$.version_date=($I$(3).version + "  " + $I$(3).date ).trim$() : C$.version_date);
}, 1);

Clazz.newMeth(C$, 'allocateViewer$O$org_jmol_api_JmolAdapter$S$java_net_URL$java_net_URL$S$org_jmol_api_JmolStatusListener$org_jmol_api_GenericPlatform', function (display, modelAdapter, fullName, documentBase, codeBase, commandOptions, statusListener, implementedPlatform) {
var info=Clazz.new_($I$(1,1));
info.put$O$O("display", display);
info.put$O$O("adapter", modelAdapter);
info.put$O$O("statusListener", statusListener);
info.put$O$O("platform", implementedPlatform);
info.put$O$O("options", commandOptions);
info.put$O$O("fullName", fullName);
info.put$O$O("documentBase", documentBase);
info.put$O$O("codeBase", codeBase);
return Clazz.new_(C$.c$$java_util_Map,[info]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (info) {
Clazz.super_(C$, this);
this.commandHistory=Clazz.new_($I$(4,1));
this.dimScreen=Clazz.new_($I$(5,1).c$$I$I,[0, 0]);
this.rd=Clazz.new_($I$(6,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW,[null, 0, null, null]);
this.defaultVdw=$I$(7).JMOL;
this.localFunctions=Clazz.new_($I$(1,1));
this.privateKey=Math.random();
this.actionStates=Clazz.new_($I$(8,1));
this.actionStatesRedo=Clazz.new_($I$(8,1));
this.chainMap=Clazz.new_($I$(1,1));
this.chainList=Clazz.new_($I$(8,1));
info.put$O$O("isJava", Boolean.TRUE);
this.setOptions$java_util_Map(info);
}, 1);

Clazz.newMeth(C$, 'haveAccess$org_jmol_viewer_Viewer_ACCESS', function (a) {
return this.access === a ;
});

Clazz.newMeth(C$, 'getModelAdapter$', function () {
return (this.modelAdapter == null  ? this.modelAdapter=Clazz.new_($I$(9,1)) : this.modelAdapter);
});

Clazz.newMeth(C$, 'getSmartsMatch$S$javajs_util_BS', function (smarts, bsSelected) {
if (bsSelected == null ) bsSelected=this.bsA$();
return this.getSmilesMatcher$().getSubstructureSet$S$org_jmol_util_NodeA$I$javajs_util_BS$I(smarts, this.ms.at, this.ms.ac, bsSelected, 2);
});

Clazz.newMeth(C$, 'getSmartsMatchForNodes$S$org_jmol_util_NodeA', function (smarts, atoms) {
return this.getSmilesMatcher$().getSubstructureSet$S$org_jmol_util_NodeA$I$javajs_util_BS$I(smarts, atoms, atoms.length, null, 2);
});

Clazz.newMeth(C$, 'getSmartsMap$S$javajs_util_BS$I', function (smilesOrSmarts, bsSelected, flags) {
if (bsSelected == null ) bsSelected=this.bsA$();
if (flags == 0) flags=2;
return this.getSmilesMatcher$().getCorrelationMaps$S$org_jmol_util_NodeA$I$javajs_util_BS$I(smilesOrSmarts, this.ms.at, this.ms.ac, bsSelected, flags);
});

Clazz.newMeth(C$, 'setOptions$java_util_Map', function (info) {
this.vwrOptions=info;
var isApp=info.containsKey$O("isApp");
var isJava=info.containsKey$O("isJava");
var group=$I$(10).currentThread$().getThreadGroup$();
var j2s_viewerOptions=(isApp ? null : group.秘html5Applet._viewerOptions ||null);
if (j2s_viewerOptions != null ) {
if (isJava) j2s_viewerOptions.remove$O("display");
this.vwrOptions.putAll$java_util_Map(j2s_viewerOptions);
}isApp|=info.containsKey$O("main");
if ($I$(2).debugging) {
$I$(2).debug$S("Viewer constructor " + this);
}this.display=info.get$O("display");
this.modelAdapter=info.get$O("adapter");
var statusListener=info.get$O("statusListener");
this.fullName=info.get$O("fullName");
if (this.fullName == null ) this.fullName="";
var o=info.get$O("codePath");
if (o == null ) o="../java/";
C$.appletCodeBase=o.toString();
C$.appletIdiomaBase=C$.appletCodeBase.substring$I$I(0, C$.appletCodeBase.lastIndexOf$S$I("/", C$.appletCodeBase.length$() - 2) + 1) + "idioma";
o=info.get$O("documentBase");
C$.appletDocumentBase=(o == null  ? "" : o.toString());
o=info.get$O("options");
this.commandOptions=(o == null  ? "" : o.toString());
if (p$1.checkOption2$S$S.apply(this, ["debug", "-debug"])) $I$(2).setLogLevel$I(5);
this.isJNLP=p$1.checkOption2$S$S.apply(this, ["isJNLP", "-jnlp"]);
if (this.isJNLP) $I$(2).info$S("setting JNLP mode TRUE");
this.isSignedApplet=!isApp && (this.isJNLP || p$1.checkOption2$S$S.apply(this, ["signedApplet", "-signed"]) ) ;
this.isApplet=!isApp && (this.isSignedApplet || p$1.checkOption2$S$S.apply(this, ["applet", "-applet"]) ) ;
if (this.isApplet && info.containsKey$O("maximumSize") ) p$1.setMaximumSize$I.apply(this, [(info.get$O("maximumSize")).intValue$()]);
this.allowScripting=!p$1.checkOption2$S$S.apply(this, ["noscripting", "-noscripting"]);
var i=this.fullName.indexOf$S("__");
this.htmlName=(i < 0 ? this.fullName : this.fullName.substring$I$I(0, i));
this.appletName=$I$(11).split$S$S(this.htmlName + "_", "_")[0];
this.syncId=(i < 0 ? "" : this.fullName.substring$I$I(i + 2, this.fullName.length$() - 2));
this.access=(p$1.checkOption2$S$S.apply(this, ["access:READSPT", "-r"]) ? $I$(12).READSPT : p$1.checkOption2$S$S.apply(this, ["access:NONE", "-R"]) ? $I$(12).NONE : $I$(12).ALL);
this.isPreviewOnly=info.containsKey$O("previewOnly");
if (this.isPreviewOnly) info.remove$O("previewOnly");
this.isPrintOnly=p$1.checkOption2$S$S.apply(this, ["printOnly", "-p"]);
this.dataOnly=p$1.checkOption2$S$S.apply(this, ["isDataOnly", "\u0000"]);
this.autoExit=p$1.checkOption2$S$S.apply(this, ["exit", "-x"]);
o=info.get$O("platform");
var platform="unknown";
if (o == null ) {
o=(this.commandOptions.contains$CharSequence("platform=") ? this.commandOptions.substring$I(this.commandOptions.indexOf$S("platform=") + 9) : "org.jmol.awt.Platform");
}if (Clazz.instanceOf(o, "java.lang.String")) {
platform=o;
if (platform === "" ) platform=("org.jmol.awt.Platform");
C$.isWebGL=(platform.indexOf$S(".awtjs.") >= 0);
C$.isJS=C$.isSwingJS || C$.isWebGL || (platform.indexOf$S(".awtjs2d.") >= 0)  ;
this.async=!this.dataOnly && !this.autoExit && (this.testAsync || C$.isJS && info.containsKey$O("async")  )  ;
var applet=null;
var javaver="?";
var jmol=null;
{
if(self.Jmol) { jmol = Jmol; applet = Jmol._applets[this.htmlName.split("_object")[0]]; javaver = Jmol._version;
}
}
if (javaver != null ) {
C$.jmolObject=jmol;
this.html5Applet=applet;
C$.strJavaVersion=javaver;
C$.strJavaVendor="Java2Script " + (C$.isWebGL ? "(WebGL)" : "(HTML5)");
}o=$I$(13).getInterface$S$org_jmol_viewer_Viewer$S(platform, this, "setOptions");
}this.apiPlatform=o;
this.isSingleThreaded=this.apiPlatform.isSingleThreaded$();
this.noGraphicsAllowed=p$1.checkOption2$S$S.apply(this, ["noDisplay", "-n"]);
this.headless=this.apiPlatform.isHeadless$();
this.haveDisplay=(C$.isWebGL || this.display != null  && !this.noGraphicsAllowed  && !this.headless  && !this.dataOnly  );
this.noGraphicsAllowed&=(this.display == null );
this.headless|=this.noGraphicsAllowed;
this.isJSNoAWT=C$.isJS && this.isApplet && !isJava  ;
if (this.haveDisplay) {
this.mustRender=true;
this.multiTouch=p$1.checkOption2$S$S.apply(this, ["multiTouch", "-multitouch"]);
if (this.isJSNoAWT) {
{
if (!this.isWebGL) this.display = document.getElementById(this.display);
}
}} else {
this.display=null;
}this.apiPlatform.setViewer$org_jmol_api_PlatformViewer$O(this, this.display);
o=info.get$O("graphicsAdapter");
if (o == null  && !C$.isWebGL ) o=$I$(13).getOption$S$org_jmol_viewer_Viewer$S("g3d.Graphics3D", this, "setOptions");
this.gdata=(o == null  && (C$.isWebGL || this.isJSNoAWT || !C$.isJS  )  ? Clazz.new_($I$(14,1)) : o);
this.gdata.initialize$org_jmol_viewer_Viewer$org_jmol_api_GenericPlatform(this, this.apiPlatform);
this.stm=Clazz.new_($I$(15,1).c$$org_jmol_viewer_Viewer,[this]);
this.cm=Clazz.new_($I$(16,1).c$$org_jmol_viewer_Viewer$org_jmol_util_GData,[this, this.gdata]);
this.sm=Clazz.new_($I$(17,1).c$$org_jmol_viewer_Viewer,[this]);
var is4D=info.containsKey$O("4DMouse");
this.tm=$I$(18).getTransformManager$org_jmol_viewer_Viewer$I$I$Z(this, 2147483647, 0, is4D);
this.slm=Clazz.new_($I$(19,1).c$$org_jmol_viewer_Viewer,[this]);
if (this.haveDisplay) {
this.acm=(this.multiTouch ? $I$(13).getOption$S$org_jmol_viewer_Viewer$S("multitouch.ActionManagerMT", null, null) : Clazz.new_($I$(20,1)));
this.acm.setViewer$org_jmol_viewer_Viewer$S(this, this.commandOptions + "-multitouch-" + info.get$O("multiTouch") );
this.mouse=this.apiPlatform.getMouseManager$D$O(this.privateKey, this.display);
if (this.multiTouch && !p$1.checkOption2$S$S.apply(this, ["-simulated", "-simulated"]) ) this.apiPlatform.setTransparentCursor$O(this.display);
}this.mm=Clazz.new_($I$(21,1).c$$org_jmol_viewer_Viewer,[this]);
this.shm=Clazz.new_($I$(22,1).c$$org_jmol_viewer_Viewer,[this]);
this.tempArray=Clazz.new_($I$(23,1));
this.am=Clazz.new_($I$(24,1).c$$org_jmol_viewer_Viewer,[this]);
o=info.get$O("repaintManager");
if (o == null ) o=$I$(13).getOption$S$org_jmol_viewer_Viewer$S("render.RepaintManager", this, "setOptions");
if (C$.isJS || o != null  && !o.equals$O("")  ) (this.rm=o).set$org_jmol_viewer_Viewer$org_jmol_viewer_ShapeManager(this, this.shm);
this.ms=Clazz.new_($I$(25,1).c$$org_jmol_viewer_Viewer$S,[this, null]);
this.initialize$Z$Z(true, false);
this.fm=Clazz.new_($I$(26,1).c$$org_jmol_viewer_Viewer,[this]);
this.definedAtomSets=Clazz.new_($I$(1,1));
this.setJmolStatusListener$org_jmol_api_JmolStatusListener(statusListener);
if (this.isApplet) {
$I$(2,"info$S",["vwrOptions: \n" + $I$(27).escapeMap$java_util_Map(this.vwrOptions)]);
var path=this.vwrOptions.get$O("documentLocation");
if (!C$.isJS && path != null   && path.startsWith$S("file:/") ) {
path=path.substring$I$I(0, path.substring$I$I(0, (path + "?").indexOf$S("?")).lastIndexOf$S("/"));
$I$(2).info$S("setting current directory to " + path);
this.cd$S(path);
}path=C$.appletDocumentBase;
i=path.indexOf$S("#");
if (i >= 0) path=path.substring$I$I(0, i);
i=path.lastIndexOf$S("?");
if (i >= 0) path=path.substring$I$I(0, i);
i=path.lastIndexOf$S("/");
if (i >= 0) path=path.substring$I$I(0, i);
C$.jsDocumentBase=path;
this.fm.setAppletContext$S(C$.appletDocumentBase);
var appletProxy=info.get$O("appletProxy");
if (appletProxy != null ) this.setStringProperty$S$S("appletProxy", appletProxy);
if (this.isSignedApplet) {
this.logFilePath=$I$(11).rep$S$S$S(C$.appletCodeBase, "file://", "");
this.logFilePath=$I$(11).rep$S$S$S(this.logFilePath, "file:/", "");
if (this.logFilePath.indexOf$S("//") >= 0) this.logFilePath=null;
 else this.isSignedAppletLocal=true;
} else if (!C$.isJS) {
this.logFilePath=null;
}Clazz.new_([this, info.get$O("language")],$I$(28,1).c$$org_jmol_viewer_Viewer$S);
if (C$.isJS && this.haveDisplay ) this.acm.createActions$();
} else {
this.gdata.setBackgroundTransparent$Z(p$1.checkOption2$S$S.apply(this, ["backgroundTransparent", "-b"]));
this.isSilent=p$1.checkOption2$S$S.apply(this, ["silent", "-i"]);
if (this.isSilent) $I$(2).setLogLevel$I(3);
if (this.headless && !this.isSilent ) $I$(2,"info$S",["Operating headless display=" + this.display + " nographicsallowed=" + this.noGraphicsAllowed ]);
this.isSyntaxAndFileCheck=p$1.checkOption2$S$S.apply(this, ["checkLoad", "-C"]);
this.isSyntaxCheck=this.isSyntaxAndFileCheck || p$1.checkOption2$S$S.apply(this, ["check", "-c"]) ;
this.listCommands=p$1.checkOption2$S$S.apply(this, ["listCommands", "-l"]);
this.cd$S(".");
if (this.headless) {
this.headlessImageParams=info.get$O("headlessImage");
o=info.get$O("headlistMaxTimeMs");
if (o == null ) o=Integer.valueOf$I(60000);
this.setTimeout$S$I$S("" + new Double(Math.random()).toString(), (o).intValue$(), "exitJmol");
}}this.useCommandThread=!this.headless && p$1.checkOption2$S$S.apply(this, ["useCommandThread", "-threaded"]) ;
p$1.setStartupBooleans.apply(this, []);
this.setIntProperty$S$I("_nProcessors", C$.nProcessors);
if (!this.isSilent) {
$I$(2,"info$S",["(C) 2015 Jmol Development" + "\nJmol Version: " + C$.getJmolVersion$() + "\njava.vendor: " + C$.strJavaVendor + "\njava.version: " + C$.strJavaVersion + "\nos.name: " + C$.strOSName + "\nAccess: " + this.access + "\nmemory: " + this.getP$S("_memory") + "\nprocessors available: " + C$.nProcessors + "\nuseCommandThread: " + this.useCommandThread + (!this.isApplet ? "" : "\nappletId:" + this.htmlName + (this.isSignedApplet ? " (signed)" : "") ) ]);
}this.zap$Z$Z$Z(false, true, false);
this.g.setO$S$O("language", $I$(28).getLanguage$());
this.g.setO$S$O("_hoverLabel", this.hoverLabel);
this.stm.setJmolDefaults$();
$I$(29).covalentVersion=1;
this.allowArrayDotNotation=true;
if (this.allowScripting) p$1.getScriptManager.apply(this, []);
});

Clazz.newMeth(C$, 'setDisplay$O', function (canvas) {
this.display=canvas;
this.apiPlatform.setViewer$org_jmol_api_PlatformViewer$O(this, canvas);
});

Clazz.newMeth(C$, 'newMeasurementData$S$javajs_util_Lst', function (id, points) {
return ($I$(13).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.modelset.MeasurementData", this, "script")).init$S$org_jmol_viewer_Viewer$javajs_util_Lst(id, this, points);
});

Clazz.newMeth(C$, 'getDataManager', function () {
return (this.dm == null  ? (this.dm=($I$(13).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.viewer.DataManager", this, "script")).set$org_jmol_viewer_Viewer(this)) : this.dm);
}, p$1);

Clazz.newMeth(C$, 'getScriptManager', function () {
if (this.allowScripting && this.scm == null  ) {
this.scm=$I$(13).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.script.ScriptManager", this, "setOptions");
if (C$.isJS && this.scm == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.scm == null ) {
this.allowScripting=false;
return null;
}this.eval=this.scm.setViewer$org_jmol_viewer_Viewer(this);
if (this.useCommandThread) this.scm.startCommandWatcher$Z(true);
}return this.scm;
}, p$1);

Clazz.newMeth(C$, 'checkOption2$S$S', function (key1, key2) {
return (this.vwrOptions.containsKey$O(key1) && !this.vwrOptions.get$O(key1).toString().equals$O("false")  || this.commandOptions.indexOf$S(key2) >= 0 );
}, p$1);

Clazz.newMeth(C$, 'setStartupBooleans', function () {
this.setBooleanProperty$S$Z("_applet", this.isApplet);
this.setBooleanProperty$S$Z("_JSpecView".toLowerCase$(), false);
this.setBooleanProperty$S$Z("_signedApplet", this.isSignedApplet);
this.setBooleanProperty$S$Z("_headless", this.headless);
this.setStringProperty$S$S("_restrict", "\"" + this.access + "\"" );
this.setBooleanProperty$S$Z("_useCommandThread", this.useCommandThread);
}, p$1);

Clazz.newMeth(C$, 'getExportDriverList$', function () {
return (this.haveAccess$org_jmol_viewer_Viewer_ACCESS($I$(12).ALL) ? this.g.getParameter$S$Z("exportDrivers", true) : "");
});

Clazz.newMeth(C$, 'dispose$', function () {
this.gRight=null;
if (this.mouse != null ) {
this.acm.dispose$();
this.mouse.dispose$();
this.mouse=null;
}this.clearScriptQueue$();
this.clearThreads$();
this.haltScriptExecution$();
if (this.scm != null ) this.scm.clear$Z(true);
this.gdata.destroy$();
if (this.jmolpopup != null ) this.jmolpopup.jpiDispose$();
if (this.modelkit != null ) this.modelkit.jpiDispose$();
try {
if (this.appConsole != null ) {
this.appConsole.dispose$();
this.appConsole=null;
}if (this.scriptEditor != null ) {
this.scriptEditor.dispose$();
this.scriptEditor=null;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'reset$Z', function (includingSpin) {
this.ms.calcBoundBoxDimensions$javajs_util_BS$F(null, 1);
this.axesAreTainted=true;
this.tm.homePosition$Z(includingSpin);
if (this.ms.setCrystallographicDefaults$()) this.stm.setCrystallographicDefaults$();
 else this.setAxesMode$I(603979809);
this.prevFrame=-2147483648;
if (!this.tm.spinOn) p$1.setSync.apply(this, []);
});

Clazz.newMeth(C$, 'homePosition$', function () {
this.evalString$S("reset spin");
});

Clazz.newMeth(C$, 'initialize$Z$Z', function (clearUserVariables, isPyMOL) {
this.g=Clazz.new_($I$(30,1).c$$org_jmol_viewer_Viewer$org_jmol_viewer_GlobalSettings$Z,[this, this.g, clearUserVariables]);
p$1.setStartupBooleans.apply(this, []);
this.setWidthHeightVar$();
if (this.haveDisplay) {
this.g.setB$S$Z("_is2D", C$.isJS && !C$.isWebGL );
this.g.setB$S$Z("_multiTouchClient", this.acm.isMTClient$());
this.g.setB$S$Z("_multiTouchServer", this.acm.isMTServer$());
}this.cm.setDefaultColors$Z(false);
this.setObjectColor$S$S("background", "black");
this.setObjectColor$S$S("axis1", "red");
this.setObjectColor$S$S("axis2", "green");
this.setObjectColor$S$S("axis3", "blue");
this.am.setAnimationOn$Z(false);
this.am.setAnimationFps$I(this.g.animationFps);
this.sm.playAudio$java_util_Map(null);
this.sm.allowStatusReporting=this.g.statusReporting;
this.setBooleanProperty$S$Z("antialiasDisplay", (isPyMOL ? true : this.g.antialiasDisplay));
this.stm.resetLighting$();
this.tm.setDefaultPerspective$();
});

Clazz.newMeth(C$, 'setWidthHeightVar$', function () {
this.g.setI$S$I("_width", this.dimScreen.width);
this.g.setI$S$I("_height", this.dimScreen.height);
});

Clazz.newMeth(C$, 'saveModelOrientation$', function () {
this.ms.saveModelOrientation$I$org_jmol_modelset_Orientation(this.am.cmi, this.stm.getOrientation$());
});

Clazz.newMeth(C$, 'restoreModelOrientation$I', function (modelIndex) {
var o=this.ms.getModelOrientation$I(modelIndex);
if (o != null ) o.restore$F$Z(-1, true);
});

Clazz.newMeth(C$, 'restoreModelRotation$I', function (modelIndex) {
var o=this.ms.getModelOrientation$I(modelIndex);
if (o != null ) o.restore$F$Z(-1, false);
});

Clazz.newMeth(C$, 'getGLmolView$', function () {
var tm=this.tm;
var center=tm.fixedRotationCenter;
var q=tm.getRotationQ$();
var xtrans=tm.xTranslationFraction;
var ytrans=tm.yTranslationFraction;
var scale=tm.scalePixelsPerAngstrom;
var zoom=tm.zmPctSet;
var cd=tm.cameraDistance;
var pc=tm.screenPixelCount;
var pd=tm.perspectiveDepth;
var width=tm.width;
var height=tm.height;
{
return { center:center, quaternion:q, xtrans:xtrans, ytrans:ytrans, scale:scale, zoom:zoom, cameraDistance:cd, pixelCount:pc, perspective:pd, width:width, height:height };
}
});

Clazz.newMeth(C$, 'setRotationRadius$F$Z', function (angstroms, doAll) {
if (doAll) angstroms=this.tm.setRotationRadius$F$Z(angstroms, false);
if (this.ms.setRotationRadius$I$F(this.am.cmi, angstroms)) this.g.setF$S$F("rotationRadius", angstroms);
});

Clazz.newMeth(C$, 'setCenterBitSet$javajs_util_BS$Z', function (bsCenter, doScale) {
if (this.isJmolDataFrame$()) return;
this.tm.setNewRotationCenter$javajs_util_P3$Z(($I$(31).cardinalityOf$javajs_util_BS(bsCenter) > 0 ? this.ms.getAtomSetCenter$javajs_util_BS(bsCenter) : null), doScale);
});

Clazz.newMeth(C$, 'setNewRotationCenter$javajs_util_P3', function (center) {
if (!this.isJmolDataFrame$()) this.tm.setNewRotationCenter$javajs_util_P3$Z(center, true);
});

Clazz.newMeth(C$, 'navigate$I$I', function (keyWhere, modifiers) {
if (this.isJmolDataFrame$()) return;
this.tm.navigateKey$I$I(keyWhere, modifiers);
if (!this.tm.vibrationOn && keyWhere != 0 ) this.refresh$I$S(1, "Viewer:navigate()");
});

Clazz.newMeth(C$, 'move$org_jmol_api_JmolScriptEvaluator$javajs_util_V3$F$javajs_util_V3$F$F$I', function (eval, dRot, dZoom, dTrans, dSlab, floatSecondsTotal, fps) {
this.tm.move$org_jmol_api_JmolScriptEvaluator$javajs_util_V3$F$javajs_util_V3$F$F$I(eval, dRot, dZoom, dTrans, dSlab, floatSecondsTotal, fps);
this.moveUpdate$F(floatSecondsTotal);
});

Clazz.newMeth(C$, 'moveTo$org_jmol_api_JmolScriptEvaluator$F$javajs_util_P3$javajs_util_V3$F$javajs_util_M3$F$F$F$F$javajs_util_P3$F$F$F$F$F$F', function (eval, floatSecondsTotal, center, rotAxis, degrees, rotationMatrix, zoom, xTrans, yTrans, rotationRadius, navCenter, xNav, yNav, navDepth, cameraDepth, cameraX, cameraY) {
if (!this.haveDisplay) floatSecondsTotal=0;
this.setTainted$Z(true);
this.tm.moveTo$org_jmol_api_JmolScriptEvaluator$F$javajs_util_P3$javajs_util_T3$F$javajs_util_M3$F$F$F$F$javajs_util_P3$F$F$F$F$F$F(eval, floatSecondsTotal, center, rotAxis, degrees, rotationMatrix, zoom, xTrans, yTrans, rotationRadius, navCenter, xNav, yNav, navDepth, cameraDepth, cameraX, cameraY);
});

Clazz.newMeth(C$, 'moveUpdate$F', function (floatSecondsTotal) {
if (floatSecondsTotal > 0 ) this.requestRepaintAndWait$S("moveUpdate");
 else if (floatSecondsTotal == 0 ) p$1.setSync.apply(this, []);
});

Clazz.newMeth(C$, 'navigatePt$javajs_util_P3', function (center) {
this.tm.setNavigatePt$javajs_util_P3(center);
p$1.setSync.apply(this, []);
});

Clazz.newMeth(C$, 'navigateAxis$javajs_util_V3$F', function (rotAxis, degrees) {
this.tm.navigateAxis$javajs_util_V3$F(rotAxis, degrees);
p$1.setSync.apply(this, []);
});

Clazz.newMeth(C$, 'navTranslatePercent$F$F', function (x, y) {
if (this.isJmolDataFrame$()) return;
this.tm.navTranslatePercentOrTo$F$F$F(0, x, y);
p$1.setSync.apply(this, []);
});

Clazz.newMeth(C$, 'zoomBy$I', function (pixels) {
this.tm.zoomBy$I(pixels);
this.refresh$I$S(2, this.sm.syncingMouse ? "Mouse: zoomBy " + pixels : "");
});

Clazz.newMeth(C$, 'zoomByFactor$F$I$I', function (factor, x, y) {
this.tm.zoomByFactor$F$I$I(factor, x, y);
this.refresh$I$S(2, !this.sm.syncingMouse ? "" : "Mouse: zoomByFactor " + new Float(factor).toString() + (x == 2147483647 ? "" : " " + x + " " + y ) );
});

Clazz.newMeth(C$, 'rotateXYBy$F$F', function (degX, degY) {
this.tm.rotateXYBy$F$F$javajs_util_BS(degX, degY, null);
this.refresh$I$S(2, this.sm.syncingMouse ? "Mouse: rotateXYBy " + new Float(degX).toString() + " " + new Float(degY).toString()  : "");
});

Clazz.newMeth(C$, 'spinXYBy$I$I$F', function (xDelta, yDelta, speed) {
this.tm.spinXYBy$I$I$F(xDelta, yDelta, speed);
if (xDelta == 0 && yDelta == 0 ) return;
this.refresh$I$S(2, this.sm.syncingMouse ? "Mouse: spinXYBy " + xDelta + " " + yDelta + " " + new Float(speed).toString()  : "");
});

Clazz.newMeth(C$, 'rotateZBy$I$I$I', function (zDelta, x, y) {
this.tm.rotateZBy$I$I$I(zDelta, x, y);
this.refresh$I$S(2, this.sm.syncingMouse ? "Mouse: rotateZBy " + zDelta + (x == 2147483647 ? "" : " " + x + " " + y )  : "");
});

Clazz.newMeth(C$, 'rotateSelected$F$F$javajs_util_BS', function (deltaX, deltaY, bsSelected) {
if (this.isJmolDataFrame$()) return;
this.tm.rotateXYBy$F$F$javajs_util_BS(deltaX, deltaY, p$1.setMovableBitSet$javajs_util_BS$Z.apply(this, [bsSelected, true]));
this.refreshMeasures$Z(true);
this.refresh$I$S(2, this.sm.syncingMouse ? "Mouse: rotateMolecule " + new Float(deltaX).toString() + " " + new Float(deltaY).toString()  : "");
});

Clazz.newMeth(C$, 'setMovableBitSet$javajs_util_BS$Z', function (bsSelected, checkMolecule) {
if (bsSelected == null ) bsSelected=this.bsA$();
bsSelected=$I$(31).copy$javajs_util_BS(bsSelected);
$I$(31,"andNot$javajs_util_BS$javajs_util_BS",[bsSelected, this.getMotionFixedAtoms$()]);
if (checkMolecule && !this.g.allowMoveAtoms ) bsSelected=this.ms.getMoleculeBitSet$javajs_util_BS(bsSelected);
return this.movableBitSet=bsSelected;
}, p$1);

Clazz.newMeth(C$, 'translateXYBy$I$I', function (xDelta, yDelta) {
this.tm.translateXYBy$I$I(xDelta, yDelta);
this.refresh$I$S(2, this.sm.syncingMouse ? "Mouse: translateXYBy " + xDelta + " " + yDelta  : "");
});

Clazz.newMeth(C$, 'rotateFront$', function () {
this.tm.resetRotation$();
this.refresh$I$S(1, "Viewer:rotateFront()");
});

Clazz.newMeth(C$, 'translate$C$F$C$javajs_util_BS', function (xyz, x, type, bsAtoms) {
var xy=(type == "\u0000" ? (x|0) : type == "%" ? this.tm.percentToPixels$C$F(xyz, x) : this.tm.angstromsToPixels$F(x * (type == "n" ? 10.0 : 1.0)));
if (bsAtoms != null ) {
if (xy == 0) return;
this.tm.setSelectedTranslation$javajs_util_BS$C$I(bsAtoms, xyz, xy);
} else {
switch (xyz.$c()) {
case 88:
case 120:
if (type == "\u0000") this.tm.translateToPercent$C$F("x", x);
 else this.tm.translateXYBy$I$I(xy, 0);
break;
case 89:
case 121:
if (type == "\u0000") this.tm.translateToPercent$C$F("y", x);
 else this.tm.translateXYBy$I$I(0, xy);
break;
case 90:
case 122:
if (type == "\u0000") this.tm.translateToPercent$C$F("z", x);
 else this.tm.translateZBy$I(xy);
break;
}
}this.refresh$I$S(1, "Viewer:translate()");
});

Clazz.newMeth(C$, 'slabByPixels$I', function (pixels) {
this.tm.slabByPercentagePoints$I(pixels);
this.refresh$I$S(3, "slabByPixels");
});

Clazz.newMeth(C$, 'depthByPixels$I', function (pixels) {
this.tm.depthByPercentagePoints$I(pixels);
this.refresh$I$S(3, "depthByPixels");
});

Clazz.newMeth(C$, 'slabDepthByPixels$I', function (pixels) {
this.tm.slabDepthByPercentagePoints$I(pixels);
this.refresh$I$S(3, "slabDepthByPixels");
});

Clazz.newMeth(C$, 'finalizeTransformParameters$', function () {
this.tm.finalizeTransformParameters$();
this.gdata.setSlabAndZShade$I$I$I$I$I(this.tm.slabValue, this.tm.depthValue, (this.tm.zShadeEnabled ? this.tm.zSlabValue : 2147483647), this.tm.zDepthValue, this.g.zShadePower);
});

Clazz.newMeth(C$, 'getScalePixelsPerAngstrom$Z', function (asAntialiased) {
return this.tm.scalePixelsPerAngstrom * (asAntialiased || !this.antialiased  ? 1.0 : 0.5);
});

Clazz.newMeth(C$, 'setSpin$S$I', function (key, value) {
if (!$I$(11).isOneOf$S$S(key, ";x;y;z;fps;X;Y;Z;FPS;")) return;
var i="x;y;z;fps;X;Y;Z;FPS".indexOf$S(key);
switch (i) {
case 0:
this.tm.setSpinXYZ$F$F$F(value, NaN, NaN);
break;
case 2:
this.tm.setSpinXYZ$F$F$F(NaN, value, NaN);
break;
case 4:
this.tm.setSpinXYZ$F$F$F(NaN, NaN, value);
break;
case 6:
default:
this.tm.setSpinFps$I(value);
break;
case 10:
this.tm.setNavXYZ$F$F$F(value, NaN, NaN);
break;
case 12:
this.tm.setNavXYZ$F$F$F(NaN, value, NaN);
break;
case 14:
this.tm.setNavXYZ$F$F$F(NaN, NaN, value);
break;
case 16:
this.tm.setNavFps$I(value);
break;
}
this.g.setI$S$I((i < 10 ? "spin" : "nav") + key, value);
});

Clazz.newMeth(C$, 'getSpinState$', function () {
return this.getStateCreator$().getSpinState$Z(false);
});

Clazz.newMeth(C$, 'getOrientationText$I$S$javajs_util_BS', function (type, name, bs) {
switch (type) {
case 1312817669:
case 1814695966:
case 1073741864:
case 1111492629:
case 1111492630:
case 1111492631:
case 134221850:
if (bs == null ) bs=this.bsA$();
if (bs.isEmpty$()) return (type == 1312817669 ? "0" : type == 1814695966 ? null : Clazz.new_($I$(32,1)));
var q=this.ms.getBoundBoxOrientation$I$javajs_util_BS(type, bs);
return (name === "best"  && type != 1312817669  ? (q).div$javajs_util_Quat(this.tm.getRotationQ$()) : q);
case 1073742034:
return this.stm.getSavedOrientationText$S(name);
default:
return this.tm.getOrientationText$I$Z(type, name === "best" );
}
});

Clazz.newMeth(C$, 'getCurrentColorRange$', function () {
return this.cm.getPropertyColorRange$();
});

Clazz.newMeth(C$, 'setDefaultColors$Z', function (isRasmol) {
this.cm.setDefaultColors$Z(isRasmol);
this.g.setB$S$Z("colorRasmol", isRasmol);
this.g.setO$S$O("defaultColorScheme", (isRasmol ? "rasmol" : "jmol"));
}, p$1);

Clazz.newMeth(C$, 'setElementArgb$I$I', function (elementNumber, argb) {
this.g.setO$S$O("=color " + $I$(29).elementNameFromNumber$I(elementNumber), $I$(27).escapeColor$I(argb));
this.cm.setElementArgb$I$I(elementNumber, argb);
});

Clazz.newMeth(C$, 'setVectorScale$F', function (scale) {
this.g.setF$S$F("vectorScale", scale);
this.g.vectorScale=scale;
});

Clazz.newMeth(C$, 'setVibrationScale$F', function (scale) {
this.tm.setVibrationScale$F(scale);
this.g.vibrationScale=scale;
this.g.setF$S$F("vibrationScale", scale);
});

Clazz.newMeth(C$, 'setVibrationPeriod$F', function (period) {
this.tm.setVibrationPeriod$F(period);
period=Math.abs(period);
this.g.vibrationPeriod=period;
this.g.setF$S$F("vibrationPeriod", period);
});

Clazz.newMeth(C$, 'setObjectColor$S$S', function (name, colorName) {
if (colorName == null  || colorName.length$() == 0 ) return;
this.setObjectArgb$S$I(name, $I$(33).getArgbFromString$S(colorName));
});

Clazz.newMeth(C$, 'setObjectVisibility$S$Z', function (name, b) {
var objId=$I$(15).getObjectIdFromName$S(name);
if (objId >= 0) {
this.setShapeProperty$I$S$O(objId, "display", b ? Boolean.TRUE : Boolean.FALSE);
}});

Clazz.newMeth(C$, 'setObjectArgb$S$I', function (name, argb) {
var objId=$I$(15).getObjectIdFromName$S(name);
if (objId < 0) {
if (name.equalsIgnoreCase$S("axes")) {
this.setObjectArgb$S$I("axis1", argb);
this.setObjectArgb$S$I("axis2", argb);
this.setObjectArgb$S$I("axis3", argb);
}return;
}this.g.objColors[objId]=argb;
switch (objId) {
case 0:
this.gdata.setBackgroundArgb$I(argb);
this.cm.setColixBackgroundContrast$I(argb);
break;
}
this.g.setO$S$O(name + "Color", $I$(27).escapeColor$I(argb));
});

Clazz.newMeth(C$, 'setBackgroundImage$S$O', function (fileName, image) {
this.g.backgroundImageFileName=fileName;
this.gdata.setBackgroundImage$O(image);
});

Clazz.newMeth(C$, 'getObjectColix$I', function (objId) {
var argb=this.g.objColors[objId];
return (argb == 0 ? this.cm.colixBackgroundContrast : $I$(34).getColix$I(argb));
});

Clazz.newMeth(C$, 'setColorBackground$S', function (colorName) {
this.setObjectColor$S$S("background", colorName);
});

Clazz.newMeth(C$, 'getBackgroundArgb$', function () {
return this.g.objColors[(0)];
});

Clazz.newMeth(C$, 'setObjectMad10$I$S$I', function (iShape, name, mad10) {
var objId=$I$(15,"getObjectIdFromName$S",[name.equalsIgnoreCase$S("axes") ? "axis" : name]);
if (objId < 0) return;
if (mad10 == -2 || mad10 == -4 ) {
var m=mad10 + 3;
mad10=this.getObjectMad10$I(objId);
if (mad10 == 0) mad10=m;
}this.g.setB$S$Z("show" + name, mad10 != 0);
this.g.objStateOn[objId]=(mad10 != 0);
if (mad10 == 0) return;
this.g.objMad10[objId]=mad10;
this.setShapeSize$I$I$javajs_util_BS(iShape, mad10, null);
});

Clazz.newMeth(C$, 'getObjectMad10$I', function (objId) {
return (this.g.objStateOn[objId] ? this.g.objMad10[objId] : 0);
});

Clazz.newMeth(C$, 'setPropertyColorScheme$S$Z$Z', function (scheme, isTranslucent, isOverloaded) {
this.g.propertyColorScheme=scheme;
if (scheme.startsWith$S("translucent ")) {
isTranslucent=true;
scheme=scheme.substring$I(12).trim$();
}this.cm.setPropertyColorScheme$S$Z$Z(scheme, isTranslucent, isOverloaded);
});

Clazz.newMeth(C$, 'getLightingState$', function () {
return this.getStateCreator$().getLightingState$Z(true);
});

Clazz.newMeth(C$, 'getColorPointForPropertyValue$F', function (val) {
return $I$(33,"colorPtFromInt$I$javajs_util_P3",[this.gdata.getColorArgbOrGray$H(this.cm.ce.getColorIndex$F(val)), null]);
});

Clazz.newMeth(C$, 'select$javajs_util_BS$Z$I$Z', function (bs, isGroup, addRemove, isQuiet) {
if (isGroup) bs=p$1.getUndeletedGroupAtomBits$javajs_util_BS.apply(this, [bs]);
this.slm.select$javajs_util_BS$I$Z(bs, addRemove, isQuiet);
this.shm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(1, 2147483647, null, null);
});

Clazz.newMeth(C$, 'setSelectionSet$javajs_util_BS', function (set) {
this.select$javajs_util_BS$Z$I$Z(set, false, 0, true);
});

Clazz.newMeth(C$, 'selectBonds$javajs_util_BS', function (bs) {
this.shm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(1, 2147483647, null, bs);
});

Clazz.newMeth(C$, 'displayAtoms$javajs_util_BS$Z$Z$I$Z', function (bs, isDisplay, isGroup, addRemove, isQuiet) {
if (isGroup) bs=p$1.getUndeletedGroupAtomBits$javajs_util_BS.apply(this, [bs]);
if (isDisplay) this.slm.display$org_jmol_modelset_ModelSet$javajs_util_BS$I$Z(this.ms, bs, addRemove, isQuiet);
 else this.slm.hide$org_jmol_modelset_ModelSet$javajs_util_BS$I$Z(this.ms, bs, addRemove, isQuiet);
});

Clazz.newMeth(C$, 'getUndeletedGroupAtomBits$javajs_util_BS', function (bs) {
bs=this.ms.getAtoms$I$O(1086324742, bs);
$I$(31).andNot$javajs_util_BS$javajs_util_BS(bs, this.slm.bsDeleted);
return bs;
}, p$1);

Clazz.newMeth(C$, 'reportSelection$S', function (msg) {
if (this.selectionHalosEnabled) this.setTainted$Z(true);
if (p$1.isScriptQueued.apply(this, []) || this.g.debugScript ) this.scriptStatus$S(msg);
});

Clazz.newMeth(C$, 'clearAtomSets', function () {
this.slm.setSelectionSubset$javajs_util_BS(null);
this.definedAtomSets.clear$();
if (this.haveDisplay) this.acm.exitMeasurementMode$S("clearAtomSets");
}, p$1);

Clazz.newMeth(C$, 'getDefinedAtomSet$S', function (name) {
var o=this.definedAtomSets.get$O(name.toLowerCase$());
return (Clazz.instanceOf(o, "javajs.util.BS") ? o : Clazz.new_($I$(35,1)));
});

Clazz.newMeth(C$, 'selectAll$', function () {
this.slm.selectAll$Z(false);
});

Clazz.newMeth(C$, 'clearSelection$', function () {
this.slm.clearSelection$Z(true);
this.g.setB$S$Z("hideNotSelected", false);
});

Clazz.newMeth(C$, 'bsA$', function () {
return this.slm.getSelectedAtoms$();
});

Clazz.newMeth(C$, 'addSelectionListener$org_jmol_api_JmolSelectionListener', function (listener) {
this.slm.addListener$org_jmol_api_JmolSelectionListener(listener);
});

Clazz.newMeth(C$, 'removeSelectionListener$org_jmol_api_JmolSelectionListener', function (listener) {
this.slm.addListener$org_jmol_api_JmolSelectionListener(listener);
});

Clazz.newMeth(C$, 'getAtomBitSetEval$org_jmol_api_JmolScriptEvaluator$O', function (eval, atomExpression) {
return (this.allowScripting ? p$1.getScriptManager.apply(this, []).getAtomBitSetEval$org_jmol_api_JmolScriptEvaluator$O(eval, atomExpression) : Clazz.new_($I$(35,1)));
});

Clazz.newMeth(C$, 'processTwoPointGesture$FAAA', function (touches) {
this.mouse.processTwoPointGesture$FAAA(touches);
});

Clazz.newMeth(C$, 'processMouseEvent$I$I$I$I$J', function (id, x, y, modifiers, time) {
return this.mouse.processEvent$I$I$I$I$J(id, x, y, modifiers, time);
});

Clazz.newMeth(C$, 'getRubberBandSelection$', function () {
return (this.haveDisplay ? this.acm.getRubberBand$() : null);
});

Clazz.newMeth(C$, 'isBound$I$I', function (mouseAction, jmolAction) {
return (this.haveDisplay && this.acm.bnd$I$IA(mouseAction, [jmolAction]) );
});

Clazz.newMeth(C$, 'getCursorX$', function () {
return (this.haveDisplay ? this.acm.getCurrentX$() : 0);
});

Clazz.newMeth(C$, 'getCursorY$', function () {
return (this.haveDisplay ? this.acm.getCurrentY$() : 0);
});

Clazz.newMeth(C$, 'getDefaultDirectory$', function () {
return this.g.defaultDirectory;
});

Clazz.newMeth(C$, 'getLocalUrl$S', function (fileName) {
return this.apiPlatform.getLocalUrl$S(fileName);
});

Clazz.newMeth(C$, 'getFileAsString$S', function (fileName) {
return this.getAsciiFileOrNull$S(fileName);
});

Clazz.newMeth(C$, 'getBufferedInputStream$S', function (fullPathName) {
return this.fm.getBufferedInputStream$S(fullPathName);
});

Clazz.newMeth(C$, 'setLoadParameters$java_util_Map$Z', function (htParams, isAppend) {
if (htParams == null ) htParams=Clazz.new_($I$(1,1));
htParams.put$O$O("vwr", this);
if (this.g.atomTypes.length$() > 0) htParams.put$O$O("atomTypes", this.g.atomTypes);
if (!htParams.containsKey$O("lattice")) htParams.put$O$O("lattice", this.g.ptDefaultLattice);
if (this.g.applySymmetryToBonds) htParams.put$O$O("applySymmetryToBonds", Boolean.TRUE);
if (this.g.pdbGetHeader) htParams.put$O$O("getHeader", Boolean.TRUE);
if (this.g.pdbSequential) htParams.put$O$O("isSequential", Boolean.TRUE);
if (this.g.legacyJavaFloat) htParams.put$O$O("legacyJavaFloat", Boolean.TRUE);
htParams.put$O$O("stateScriptVersionInt", Integer.valueOf$I(this.stateScriptVersionInt));
if (!htParams.containsKey$O("filter")) {
var filter=this.g.defaultLoadFilter;
if (filter.length$() > 0) htParams.put$O$O("filter", filter);
}var merging=(isAppend && !this.g.appendNew && this.ms.ac > 0  );
htParams.put$O$O("baseAtomIndex", Integer.valueOf$I(isAppend ? this.ms.ac : 0));
htParams.put$O$O("baseModelIndex", Integer.valueOf$I(this.ms.ac == 0 ? 0 : this.ms.mc + (merging ? -1 : 0)));
if (merging) htParams.put$O$O("merging", Boolean.TRUE);
return htParams;
});

Clazz.newMeth(C$, 'openFileAsyncSpecial$S$I', function (fileName, flags) {
p$1.getScriptManager.apply(this, []).openFileAsync$S$I(fileName, flags);
});

Clazz.newMeth(C$, 'openFile$S', function (fileName) {
this.zap$Z$Z$Z(true, true, false);
return p$1.loadModelFromFileRepaint$S$S$SA$O.apply(this, [null, fileName, null, null]);
});

Clazz.newMeth(C$, 'openFiles$SA', function (fileNames) {
this.zap$Z$Z$Z(true, true, false);
return p$1.loadModelFromFileRepaint$S$S$SA$O.apply(this, [null, null, fileNames, null]);
});

Clazz.newMeth(C$, 'openReader$S$S$O', function (fullPathName, fileName, reader) {
this.zap$Z$Z$Z(true, true, false);
return p$1.loadModelFromFileRepaint$S$S$SA$O.apply(this, [fullPathName, fileName, null, reader]);
});

Clazz.newMeth(C$, 'openDOM$O', function (DOMNode) {
this.zap$Z$Z$Z(true, true, false);
return p$1.loadModelFromFileRepaint$S$S$SA$O.apply(this, ["?", "?", null, DOMNode]);
});

Clazz.newMeth(C$, 'loadModelFromFileRepaint$S$S$SA$O', function (fullPathName, fileName, fileNames, reader) {
var ret=this.loadModelFromFile$S$S$SA$O$Z$java_util_Map$javajs_util_SB$javajs_util_SB$I$S(fullPathName, fileName, fileNames, reader, false, null, null, null, 0, " ");
this.refresh$I$S(1, "loadModelFromFileRepaint");
return ret;
}, p$1);

Clazz.newMeth(C$, 'loadModelFromFile$S$S$SA$O$Z$java_util_Map$javajs_util_SB$javajs_util_SB$I$S', function (fullPathName, fileName, fileNames, reader, isAppend, htParams, loadScript, sOptions, tokType, filecat) {
if (htParams == null ) htParams=this.setLoadParameters$java_util_Map$Z(null, isAppend);
if (filecat !== " " ) htParams.put$O$O("concatenate", Boolean.TRUE);
if (tokType != 0) htParams.put$O$O("dataType", $I$(36).nameOf$I(tokType));
var atomSetCollection;
var saveInfo=this.fm.getFileInfo$();
if (fileNames != null ) {
if (loadScript == null ) {
loadScript=Clazz.new_($I$(37,1)).append$S("load files");
for (var i=0; i < fileNames.length; i++) loadScript.append$S(i == 0 || filecat == null   ? " " : filecat).append$S("/*file*/$FILENAME" + (i + 1) + "$" );

if (sOptions.length$() > 0) loadScript.append$S(" /*options*/ ").append$S(sOptions.toString());
}var timeBegin=System.currentTimeMillis$();
atomSetCollection=this.fm.createAtomSetCollectionFromFiles$SA$java_util_Map$Z(fileNames, this.setLoadParameters$java_util_Map$Z(htParams, isAppend), isAppend);
var ms=System.currentTimeMillis$() - timeBegin;
$I$(2,"info$S",["openFiles(" + fileNames.length + ") " + ms + " ms" ]);
fileNames=htParams.get$O("fullPathNames");
var fileTypes=htParams.get$O("fileTypes");
var s=loadScript.toString();
for (var i=0; i < fileNames.length; i++) {
var fname=fileNames[i];
if (fileTypes != null  && fileTypes[i] != null  ) fname=fileTypes[i] + "::" + fname ;
s=$I$(11,"rep$S$S$S",[s, "$FILENAME" + (i + 1) + "$" , $I$(11,"esc$S",[$I$(26).fixDOSName$S(fname)])]);
}
loadScript=Clazz.new_($I$(37,1)).append$S(s);
} else if (reader == null ) {
if (loadScript == null ) loadScript=Clazz.new_($I$(37,1)).append$S("load /*file*/$FILENAME$");
atomSetCollection=p$1.openFileFull$S$Z$java_util_Map$javajs_util_SB.apply(this, [fileName, isAppend, htParams, loadScript]);
} else if (Clazz.instanceOf(reader, "java.io.Reader") || Clazz.instanceOf(reader, "java.io.BufferedInputStream") || $I$(38).isAB$O(reader)  ) {
atomSetCollection=this.fm.createAtomSetCollectionFromReader$S$S$O$java_util_Map(fullPathName, fileName, reader, this.setLoadParameters$java_util_Map$Z(htParams, isAppend));
} else {
atomSetCollection=this.fm.createAtomSetCollectionFromDOM$O$java_util_Map(reader, this.setLoadParameters$java_util_Map$Z(htParams, isAppend));
}if (tokType != 0) {
this.fm.setFileInfo$SA(saveInfo);
return p$1.loadAtomDataAndReturnError$O$I.apply(this, [atomSetCollection, tokType]);
}if (htParams.containsKey$O("isData")) return atomSetCollection;
if (loadScript != null  && !(Clazz.instanceOf(atomSetCollection, "java.lang.String")) ) {
var fname=htParams.get$O("fullPathName");
if (fname == null ) fname="";
if (htParams.containsKey$O("loadScript")) loadScript=htParams.get$O("loadScript");
htParams.put$O$O("loadScript", loadScript=Clazz.new_($I$(37,1)).append$S($I$(11,"rep$S$S$S",[loadScript.toString(), "$FILENAME$", $I$(11,"esc$S",[$I$(26).fixDOSName$S(fname)])])));
}return p$1.createModelSetAndReturnError$O$Z$javajs_util_SB$java_util_Map.apply(this, [atomSetCollection, isAppend, loadScript, htParams]);
});

Clazz.newMeth(C$, 'setLigandModel$S$S', function (key, data) {
if (this.ligandModels == null ) this.ligandModels=Clazz.new_($I$(1,1));
this.ligandModels.put$O$O(key, data);
});

Clazz.newMeth(C$, 'getLigandModel$S$S$S$S', function (id, prefix, suffix, terminator) {
if (id == null ) {
if (this.ligandModelSet != null ) {
var e=this.ligandModels.entrySet$().iterator$();
while (e.hasNext$()){
var entry=e.next$();
if (Clazz.instanceOf(entry.getValue$(), "java.lang.Boolean")) e.remove$();
}
}return null;
}id=id.replace$C$C("\\", "/");
var isLigand=prefix.equals$O("ligand_");
id=(id.indexOf$S("/cif") >= 0 ? id : isLigand ? id.toUpperCase$() : id.substring$I(id.lastIndexOf$S("/") + 1));
if (this.ligandModelSet == null ) this.ligandModelSet=Clazz.new_($I$(1,1));
this.ligandModelSet.put$O$O(id, Boolean.TRUE);
if (this.ligandModels == null ) this.ligandModels=Clazz.new_($I$(1,1));
var pngPt=id.indexOf$S("|");
if (pngPt >= 0) id=id.substring$I(id.indexOf$S("|") + 1);
var model=(terminator == null  ? this.ligandModels.get$O(id) : null);
var data;
var fname=null;
if (Clazz.instanceOf(model, "java.lang.Boolean")) return null;
if (model == null  && (terminator == null  || pngPt >= 0 ) ) model=this.ligandModels.get$O(id + suffix);
var isError=false;
var isNew=(model == null );
if (isNew) {
var s;
if (isLigand) {
fname=this.setLoadFormat$S$C$Z("#" + id, "#", false);
if (fname.length$() == 0) return null;
this.scriptEcho$S("fetching " + fname);
s=this.getFileAsString3$S$Z$S(fname, false, null);
} else {
this.scriptEcho$S("fetching " + prefix);
s=this.getFileAsString3$S$Z$S(prefix, false, null);
var pt=(terminator == null  ? -1 : s.indexOf$S(terminator));
if (pt >= 0) s=s.substring$I$I(0, pt);
}isError=(s.indexOf$S("java.") == 0);
model=s;
if (!isError) this.ligandModels.put$O$O(id + suffix, model);
}if (!isLigand) {
if (!isNew) this.scriptEcho$S(prefix + " loaded from cache");
return model;
}if (!isError && Clazz.instanceOf(model, "java.lang.String") ) {
data=model;
if (data.length$() != 0) {
var htParams=Clazz.new_($I$(1,1));
htParams.put$O$O("modelOnly", Boolean.TRUE);
model=this.getModelAdapter$().getAtomSetCollectionReader$S$S$O$java_util_Map("ligand", null, $I$(39).getBR$S(data), htParams);
isError=(Clazz.instanceOf(model, "java.lang.String"));
if (!isError) {
model=this.getModelAdapter$().getAtomSetCollection$O(model);
isError=(Clazz.instanceOf(model, "java.lang.String"));
if (fname != null  && !isError ) this.scriptEcho$S(this.getModelAdapter$().getAtomSetCollectionAuxiliaryInfo$O(model).get$O("modelLoadNote"));
}}}if (isError) {
this.scriptEcho$S(model.toString());
this.ligandModels.put$O$O(id, Boolean.FALSE);
return null;
}return model;
});

Clazz.newMeth(C$, 'openFileFull$S$Z$java_util_Map$javajs_util_SB', function (fileName, isAppend, htParams, loadScript) {
if (fileName == null ) return null;
if (fileName.equals$O("String[]")) {
return null;
}var atomSetCollection;
var msg="openFile(" + fileName + ")" ;
$I$(2).startTimer$S(msg);
htParams=this.setLoadParameters$java_util_Map$Z(htParams, isAppend);
var isLoadVariable=fileName.startsWith$S("@");
var haveFileData=(htParams.containsKey$O("fileData"));
if (fileName.indexOf$I("$") == 0) htParams.put$O$O("smilesString", fileName.substring$I(1));
var isString=(fileName.equals$O("string") || fileName.equals$O("Jmol Model Kit") );
var strModel=null;
if (haveFileData) {
strModel=htParams.get$O("fileData");
if (htParams.containsKey$O("isData")) {
var o=p$1.loadInlineScript$S$C$Z$java_util_Map.apply(this, [strModel, "\u0000", isAppend, htParams]);
this.lastData=(this.g.preserveState ? p$1.getDataManager.apply(this, []).createFileData$S(strModel) : null);
return o;
}} else if (isString) {
strModel=this.ms.getInlineData$I(-1);
if (strModel == null ) if (this.g.modelKitMode) strModel="5\n\nC 0 0 0\nH .63 .63 .63\nH -.63 -.63 .63\nH -.63 .63 -.63\nH .63 -.63 -.63";
 else return "cannot find string data";
if (loadScript != null ) htParams.put$O$O("loadScript", loadScript=Clazz.new_($I$(37,1)).append$S($I$(11,"rep$S$S$S",[loadScript.toString(), "/*file*/$FILENAME$", "/*data*/data \"model inline\"\n" + strModel + "end \"model inline\"" ])));
}if (strModel != null ) {
if (!isAppend) this.zap$Z$Z$Z(true, false, false);
if (!isLoadVariable && (!haveFileData || isString ) ) this.getStateCreator$().getInlineData$javajs_util_SB$S$Z$S(loadScript, strModel, isAppend, this.g.defaultLoadFilter);
atomSetCollection=this.fm.createAtomSetCollectionFromString$S$java_util_Map$Z(strModel, htParams, isAppend);
} else {
atomSetCollection=this.fm.createAtomSetCollectionFromFile$S$java_util_Map$Z(fileName, htParams, isAppend);
}$I$(2).checkTimer$S$Z(msg, false);
return atomSetCollection;
}, p$1);

Clazz.newMeth(C$, 'openStringInline$S', function (strModel) {
var ret=this.openStringInlineParamsAppend$S$java_util_Map$Z(strModel, null, false);
this.refresh$I$S(1, "openStringInline");
return ret;
});

Clazz.newMeth(C$, 'loadInline$S', function (strModel) {
return p$1.loadInlineScriptRepaint$S$C$Z.apply(this, [strModel, this.g.inlineNewlineChar, false]);
});

Clazz.newMeth(C$, 'loadInline$S$C', function (strModel, newLine) {
return p$1.loadInlineScriptRepaint$S$C$Z.apply(this, [strModel, newLine, false]);
});

Clazz.newMeth(C$, 'loadInlineAppend$S$Z', function (strModel, isAppend) {
return p$1.loadInlineScriptRepaint$S$C$Z.apply(this, [strModel, "\u0000", isAppend]);
});

Clazz.newMeth(C$, 'loadInlineScriptRepaint$S$C$Z', function (strModel, newLine, isAppend) {
var ret=p$1.loadInlineScript$S$C$Z$java_util_Map.apply(this, [strModel, newLine, isAppend, null]);
this.refresh$I$S(1, "loadInlineScript");
return ret;
}, p$1);

Clazz.newMeth(C$, 'loadInline$SA', function (arrayModels) {
return this.loadInline$SA$Z(arrayModels, false);
});

Clazz.newMeth(C$, 'loadInline$SA$Z', function (arrayModels, isAppend) {
if (arrayModels == null  || arrayModels.length == 0 ) return null;
var ret=p$1.openStringsInlineParamsAppend$SA$java_util_Map$Z.apply(this, [arrayModels, Clazz.new_($I$(1,1)), isAppend]);
this.refresh$I$S(1, "loadInline String[]");
return ret;
});

Clazz.newMeth(C$, 'loadInline$java_util_List$Z', function (arrayData, isAppend) {
if (arrayData == null  || arrayData.size$() == 0 ) return null;
if (!isAppend) this.zap$Z$Z$Z(true, false, false);
var list=Clazz.new_($I$(8,1));
for (var i=0; i < arrayData.size$(); i++) list.addLast$O(arrayData.get$I(i));

var atomSetCollection=this.fm.createAtomSeCollectionFromArrayData$javajs_util_Lst$java_util_Map$Z(list, this.setLoadParameters$java_util_Map$Z(null, isAppend), isAppend);
var ret=p$1.createModelSetAndReturnError$O$Z$javajs_util_SB$java_util_Map.apply(this, [atomSetCollection, isAppend, null, Clazz.new_($I$(1,1))]);
this.refresh$I$S(1, "loadInline");
return ret;
});

Clazz.newMeth(C$, 'loadInlineScript$S$C$Z$java_util_Map', function (strModel, newLine, isAppend, htParams) {
if (strModel == null  || strModel.length$() == 0 ) return null;
strModel=C$.fixInlineString$S$C(strModel, newLine);
if (newLine.$c() != 0 ) $I$(2,"info$S",["loading model inline, " + strModel.length$() + " bytes, with newLine character " + newLine.$c() + " isAppend=" + isAppend ]);
if ($I$(2).debugging) $I$(2).debug$S(strModel);
var datasep=this.getDataSeparator$();
var i;
if (datasep != null  && datasep !== ""   && (i=strModel.indexOf$S(datasep)) >= 0  && strModel.indexOf$S("# Jmol state") < 0 ) {
var n=2;
while ((i=strModel.indexOf$S$I(datasep, i + 1)) >= 0)n++;

var strModels=Clazz.array(String, [n]);
var pt=0;
var pt0=0;
for (i=0; i < n; i++) {
pt=strModel.indexOf$S$I(datasep, pt0);
if (pt < 0) pt=strModel.length$();
strModels[i]=strModel.substring$I$I(pt0, pt);
pt0=pt + datasep.length$();
}
return p$1.openStringsInlineParamsAppend$SA$java_util_Map$Z.apply(this, [strModels, htParams, isAppend]);
}return this.openStringInlineParamsAppend$S$java_util_Map$Z(strModel, htParams, isAppend);
}, p$1);

Clazz.newMeth(C$, 'fixInlineString$S$C', function (strModel, newLine) {
var i;
if (strModel.indexOf$S("\\/n") >= 0) {
strModel=$I$(11).rep$S$S$S(strModel, "\n", "");
strModel=$I$(11).rep$S$S$S(strModel, "\\/n", "\n");
newLine=String.fromCharCode(0);
}if (newLine.$c() != 0  && newLine != "\n" ) {
var repEmpty=(strModel.indexOf$I("\n") >= 0);
var len=strModel.length$();
for (i=0; i < len && strModel.charAt$I(i) == " " ; ++i) {
}
if (i < len && strModel.charAt$I(i) == newLine ) strModel=strModel.substring$I(i + 1);
if (repEmpty) strModel=$I$(11).rep$S$S$S(strModel, "" + newLine, "");
 else strModel=strModel.replace$C$C(newLine, "\n");
}return strModel;
}, 1);

Clazz.newMeth(C$, 'openStringInlineParamsAppend$S$java_util_Map$Z', function (strModel, htParams, isAppend) {
var type=this.getModelAdapter$().getFileTypeName$O($I$(39).getBR$S(strModel));
if (type == null ) return "unknown file type";
if (type.equals$O("spt")) {
return "cannot open script inline";
}htParams=this.setLoadParameters$java_util_Map$Z(htParams, isAppend);
var loadScript=htParams.get$O("loadScript");
var isLoadCommand=htParams.containsKey$O("isData");
if (loadScript == null ) loadScript=Clazz.new_($I$(37,1));
if (!isAppend) this.zap$Z$Z$Z(true, false, false);
if (!isLoadCommand) this.getStateCreator$().getInlineData$javajs_util_SB$S$Z$S(loadScript, strModel, isAppend, this.g.defaultLoadFilter);
var atomSetCollection=this.fm.createAtomSetCollectionFromString$S$java_util_Map$Z(strModel, htParams, isAppend);
return p$1.createModelSetAndReturnError$O$Z$javajs_util_SB$java_util_Map.apply(this, [atomSetCollection, isAppend, loadScript, htParams]);
});

Clazz.newMeth(C$, 'openStringsInlineParamsAppend$SA$java_util_Map$Z', function (arrayModels, htParams, isAppend) {
var loadScript=Clazz.new_($I$(37,1));
if (!isAppend) this.zap$Z$Z$Z(true, false, false);
var atomSetCollection=this.fm.createAtomSeCollectionFromStrings$SA$javajs_util_SB$java_util_Map$Z(arrayModels, loadScript, this.setLoadParameters$java_util_Map$Z(htParams, isAppend), isAppend);
return p$1.createModelSetAndReturnError$O$Z$javajs_util_SB$java_util_Map.apply(this, [atomSetCollection, isAppend, loadScript, htParams]);
}, p$1);

Clazz.newMeth(C$, 'getInlineChar$', function () {
return this.g.inlineNewlineChar;
});

Clazz.newMeth(C$, 'getDataSeparator$', function () {
return this.g.getParameter$S$Z("dataseparator", true);
});

Clazz.newMeth(C$, 'createModelSetAndReturnError$O$Z$javajs_util_SB$java_util_Map', function (atomSetCollection, isAppend, loadScript, htParams) {
$I$(2).startTimer$S("creating model");
var fullPathName=this.fm.getFullPathName$Z(false);
var fileName=this.fm.getFileName$();
var errMsg;
if (loadScript == null ) {
this.setBooleanProperty$S$Z("preserveState", false);
loadScript=Clazz.new_($I$(37,1)).append$S("load \"???\"");
}if (Clazz.instanceOf(atomSetCollection, "java.lang.String")) {
errMsg=atomSetCollection;
p$1.setFileLoadStatus$org_jmol_c_FIL$S$S$S$S$Boolean.apply(this, [$I$(40).NOT_LOADED, fullPathName, null, null, errMsg, null]);
if (this.displayLoadErrors && !isAppend && !errMsg.equals$O("#CANCELED#") && !errMsg.startsWith$S($I$(3).READER_NOT_FOUND)  ) p$1.zapMsg$S.apply(this, [errMsg]);
return errMsg;
}if (isAppend) p$1.clearAtomSets.apply(this, []);
 else if (this.g.modelKitMode && !fileName.equals$O("Jmol Model Kit") ) p$1.setModelKitMode$Z.apply(this, [false]);
p$1.setFileLoadStatus$org_jmol_c_FIL$S$S$S$S$Boolean.apply(this, [$I$(40).CREATING_MODELSET, fullPathName, fileName, null, null, null]);
this.pushHoldRepaintWhy$S("createModelSet");
this.setErrorMessage$S$S(null, null);
try {
var bsNew=Clazz.new_($I$(35,1));
this.mm.createModelSet$S$S$javajs_util_SB$O$javajs_util_BS$Z(fullPathName, fileName, loadScript, atomSetCollection, bsNew, isAppend);
if (bsNew.cardinality$() > 0) {
var jmolScript=this.ms.getInfoM$S("jmolscript");
if (this.ms.getMSInfoB$S("doMinimize")) try {
var eval=htParams.get$O("eval");
this.minimize$org_jmol_api_JmolScriptEvaluator$I$F$javajs_util_BS$javajs_util_BS$F$Z$Z$Z$Z(eval, 2147483647, 0, bsNew, null, 0, true, true, true, true);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
 else this.addHydrogens$javajs_util_BS$Z$Z(bsNew, false, true);
if (jmolScript != null ) this.ms.msInfo.put$O$O("jmolscript", jmolScript);
}p$1.initializeModel$Z.apply(this, [isAppend]);
} catch (er) {
if (Clazz.exceptionOf(er,"Error")){
this.handleError$Error$Z(er, true);
errMsg=this.getShapeErrorState$();
errMsg=("ERROR creating model: " + er + (errMsg.length$() == 0 ? "" : "|" + errMsg) );
p$1.zapMsg$S.apply(this, [errMsg]);
this.setErrorMessage$S$S(errMsg, null);
} else {
throw er;
}
}
this.popHoldRepaint$S("createModelSet \u0001## REPAINT_IGNORE ##");
errMsg=this.getErrorMessage$();
p$1.setFileLoadStatus$org_jmol_c_FIL$S$S$S$S$Boolean.apply(this, [$I$(40).CREATED, fullPathName, fileName, this.ms.modelSetName, errMsg, htParams.get$O("async")]);
if (isAppend) {
this.selectAll$();
this.setTainted$Z(true);
this.axesAreTainted=true;
}atomSetCollection=null;
$I$(2).checkTimer$S$Z("creating model", false);
System.gc$();
return errMsg;
}, p$1);

Clazz.newMeth(C$, 'loadAtomDataAndReturnError$O$I', function (atomSetCollection, tokType) {
if (Clazz.instanceOf(atomSetCollection, "java.lang.String")) return atomSetCollection;
this.setErrorMessage$S$S(null, null);
try {
var script=this.mm.createAtomDataSet$O$I(atomSetCollection, tokType);
switch (tokType) {
case 1145047050:
if (script != null ) this.runScriptCautiously$S(script);
break;
case 4166:
this.setStatusFrameChanged$Z$Z(true, false);
break;
case 1648363544:
this.shm.deleteVdwDependentShapes$javajs_util_BS(null);
break;
}
} catch (er) {
if (Clazz.exceptionOf(er,"Error")){
this.handleError$Error$Z(er, true);
var errMsg=this.getShapeErrorState$();
errMsg=("ERROR adding atom data: " + er + (errMsg.length$() == 0 ? "" : "|" + errMsg) );
p$1.zapMsg$S.apply(this, [errMsg]);
this.setErrorMessage$S$S(errMsg, null);
this.setParallel$Z(false);
} else {
throw er;
}
}
return this.getErrorMessage$();
}, p$1);

Clazz.newMeth(C$, 'getCurrentFileAsString$S', function (state) {
var filename=this.fm.getFullPathName$Z(false);
if (filename.equals$O("string") || filename.equals$O("Jmol Model Kit") ) return this.ms.getInlineData$I(this.am.cmi);
if (filename.equals$O("String[]")) return filename;
if (filename === "JSNode" ) return "<DOM NODE>";
return this.getFileAsString4$S$I$Z$Z$Z$S(filename, -1, true, false, false, state);
});

Clazz.newMeth(C$, 'getFullPathNameOrError$S', function (filename) {
var data=Clazz.array(String, [2]);
this.fm.getFullPathNameOrError$S$Z$SA(filename, false, data);
return data;
});

Clazz.newMeth(C$, 'getFileAsString3$S$Z$S', function (name, checkProtected, state) {
return this.getFileAsString4$S$I$Z$Z$Z$S(name, -1, false, false, checkProtected, state);
});

Clazz.newMeth(C$, 'getFileAsString4$S$I$Z$Z$Z$S', function (name, nBytesMax, doSpecialLoad, allowBinary, checkProtected, state) {
if (name == null ) return this.getCurrentFileAsString$S(state);
var data=Clazz.array(String, -1, [name, null]);
this.fm.getFileDataAsString$SA$I$Z$Z$Z(data, nBytesMax, doSpecialLoad, allowBinary, checkProtected);
return data[1];
});

Clazz.newMeth(C$, 'getAsciiFileOrNull$S', function (name) {
var data=Clazz.array(String, -1, [name, null]);
return (this.fm.getFileDataAsString$SA$I$Z$Z$Z(data, -1, false, false, false) ? data[1] : null);
});

Clazz.newMeth(C$, 'autoCalculate$I$S', function (tokProperty, dataType) {
switch (tokProperty) {
case 1111490575:
this.ms.getSurfaceDistanceMax$();
break;
case 1111490574:
this.ms.calculateStraightnessAll$();
break;
case 1111490587:
this.ms.calculateDssrProperty$S(dataType);
}
});

Clazz.newMeth(C$, 'calculateStraightness$', function () {
this.ms.haveStraightness=false;
this.ms.calculateStraightnessAll$();
});

Clazz.newMeth(C$, 'calculateSurface$javajs_util_BS$F', function (bsSelected, envelopeRadius) {
if (bsSelected == null ) bsSelected=this.bsA$();
if (envelopeRadius == 3.4028235E38  || envelopeRadius == -1  ) this.ms.addStateScript$S$javajs_util_BS$javajs_util_BS$javajs_util_BS$S$Z$Z("calculate surfaceDistance " + (envelopeRadius == 3.4028235E38  ? "FROM" : "WITHIN"), null, bsSelected, null, "", false, true);
return this.ms.calculateSurface$javajs_util_BS$F(bsSelected, envelopeRadius);
});

Clazz.newMeth(C$, 'getStructureList$', function () {
return this.g.getStructureList$();
});

Clazz.newMeth(C$, 'setStructureList$FA$org_jmol_c_STR', function (list, type) {
this.g.setStructureList$FA$org_jmol_c_STR(list, type);
this.ms.setStructureList$java_util_Map(this.getStructureList$());
});

Clazz.newMeth(C$, 'calculateStructures$javajs_util_BS$Z$Z$I', function (bsAtoms, asDSSP, setStructure, version) {
if (bsAtoms == null ) bsAtoms=this.bsA$();
return this.ms.calculateStructures$javajs_util_BS$Z$Z$Z$Z$I(bsAtoms, asDSSP, !this.am.animationOn, this.g.dsspCalcHydrogen, setStructure, version);
});

Clazz.newMeth(C$, 'getAnnotationParser$Z', function (isDSSR) {
return (isDSSR ? (this.dssrParser == null  ? (this.dssrParser=$I$(13).getOption$S$org_jmol_viewer_Viewer$S("dssx.DSSR1", this, "script")) : this.dssrParser) : (this.annotationParser == null  ? (this.annotationParser=$I$(13).getOption$S$org_jmol_viewer_Viewer$S("dssx.AnnotationParser", this, "script")) : this.annotationParser));
});

Clazz.newMeth(C$, 'getSelectedAtomIterator$javajs_util_BS$Z$Z$Z', function (bsSelected, isGreaterOnly, modelZeroBased, isMultiModel) {
return this.ms.getSelectedAtomIterator$javajs_util_BS$Z$Z$Z$Z(bsSelected, isGreaterOnly, modelZeroBased, false, isMultiModel);
});

Clazz.newMeth(C$, 'setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$F', function (iterator, atomIndex, distance) {
this.ms.setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$I$F$org_jmol_atomdata_RadiusData(iterator, -1, atomIndex, distance, null);
});

Clazz.newMeth(C$, 'setIteratorForPoint$org_jmol_api_AtomIndexIterator$I$javajs_util_T3$F', function (iterator, modelIndex, pt, distance) {
this.ms.setIteratorForPoint$org_jmol_api_AtomIndexIterator$I$javajs_util_T3$F(iterator, modelIndex, pt, distance);
});

Clazz.newMeth(C$, 'fillAtomData$org_jmol_atomdata_AtomData$I', function (atomData, mode) {
atomData.programInfo="Jmol Version " + C$.getJmolVersion$();
atomData.fileName=this.fm.getFileName$();
this.ms.fillAtomData$org_jmol_atomdata_AtomData$I(atomData, mode);
});

Clazz.newMeth(C$, 'addStateScript$S$Z$Z', function (script, addFrameNumber, postDefinitions) {
return this.ms.addStateScript$S$javajs_util_BS$javajs_util_BS$javajs_util_BS$S$Z$Z(script, null, null, null, null, addFrameNumber, postDefinitions);
});

Clazz.newMeth(C$, 'getMinimizer$Z', function (createNew) {
return (this.minimizer == null  && createNew  ? (this.minimizer=$I$(13).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.minimize.Minimizer", this, "script")).setProperty$S$O("vwr", this) : this.minimizer);
});

Clazz.newMeth(C$, 'getSmilesMatcher$', function () {
return (this.smilesMatcher == null  ? (this.smilesMatcher=$I$(13).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.smiles.SmilesMatcher", this, "script")) : this.smilesMatcher);
});

Clazz.newMeth(C$, 'clearModelDependentObjects$', function () {
this.setFrameOffsets$javajs_util_BS$Z(null, false);
this.stopMinimization$();
this.minimizer=null;
this.smilesMatcher=null;
});

Clazz.newMeth(C$, 'zap$Z$Z$Z', function (notify, resetUndo, zapModelKit) {
this.clearThreads$();
if (this.mm.modelSet == null ) {
this.mm.zap$();
} else {
this.ligandModelSet=null;
this.clearModelDependentObjects$();
this.fm.clear$();
p$1.clearRepaintManager$I.apply(this, [-1]);
this.am.clear$();
this.tm.clear$();
this.slm.clear$();
this.clearAllMeasurements$();
this.clearMinimization$();
this.gdata.clear$();
this.mm.zap$();
if (this.scm != null ) this.scm.clear$Z(false);
if (this.nmrCalculation != null ) this.getNMRCalculation$().setChemicalShiftReference$S$F(null, 0);
if (this.haveDisplay) {
this.mouse.clear$();
this.clearTimeouts$();
this.acm.clear$();
}this.stm.clear$org_jmol_viewer_GlobalSettings(this.g);
this.tempArray.clear$();
this.chainMap.clear$();
this.chainList.clear$();
this.chainCaseSpecified=false;
this.definedAtomSets.clear$();
this.lastData=null;
if (this.dm != null ) this.dm.clear$();
this.setBooleanProperty$S$Z("legacyjavafloat", false);
if (resetUndo) {
if (zapModelKit) this.g.removeParam$S("_pngjFile");
if (zapModelKit && this.g.modelKitMode ) {
this.openStringInlineParamsAppend$S$java_util_Map$Z("5\n\nC 0 0 0\nH .63 .63 .63\nH -.63 -.63 .63\nH -.63 .63 -.63\nH .63 -.63 -.63", null, true);
this.setRotationRadius$F$Z(5.0, true);
this.setStringProperty$S$S("picking", "assignAtom_C");
this.setStringProperty$S$S("picking", "assignBond_p");
}this.undoClear$();
}System.gc$();
}p$1.initializeModel$Z.apply(this, [false]);
if (notify) {
p$1.setFileLoadStatus$org_jmol_c_FIL$S$S$S$S$Boolean.apply(this, [$I$(40).ZAPPED, null, (resetUndo ? "resetUndo" : this.getZapName$()), null, null, null]);
}if ($I$(2).debugging) $I$(2).checkMemory$();
});

Clazz.newMeth(C$, 'zapMsg$S', function (msg) {
this.zap$Z$Z$Z(true, true, false);
this.echoMessage$S(msg);
}, p$1);

Clazz.newMeth(C$, 'echoMessage$S', function (msg) {
var iShape=31;
this.shm.loadShape$I(iShape);
this.setShapeProperty$I$S$O(iShape, "font", this.getFont3D$S$S$F("SansSerif", "Plain", 20));
this.setShapeProperty$I$S$O(iShape, "target", "error");
this.setShapeProperty$I$S$O(iShape, "text", msg);
});

Clazz.newMeth(C$, 'initializeModel$Z', function (isAppend) {
this.clearThreads$();
if (isAppend) {
this.am.initializePointers$I(1);
return;
}this.reset$Z(true);
this.selectAll$();
if (this.modelkit != null ) this.modelkit.initializeForModel$();
this.movingSelected=false;
this.slm.noneSelected=Boolean.FALSE;
p$1.setHoverEnabled$Z.apply(this, [true]);
this.setSelectionHalosEnabled$Z(false);
this.tm.setCenter$();
this.am.initializePointers$I(1);
this.setBooleanProperty$S$Z("multipleBondBananas", false);
if (!this.ms.getMSInfoB$S("isPyMOL")) {
p$1.clearAtomSets.apply(this, []);
this.setCurrentModelIndex$I(0);
}this.setBackgroundModelIndex$I(-1);
this.setFrankOn$Z(this.getShowFrank$());
this.startHoverWatcher$Z(true);
this.setTainted$Z(true);
this.finalizeTransformParameters$();
}, p$1);

Clazz.newMeth(C$, 'startHoverWatcher$Z', function (tf) {
if (tf && this.inMotion  || !this.haveDisplay  || tf && (!this.hoverEnabled && !this.sm.haveHoverCallback$()  || this.am.animationOn )  ) return;
this.acm.startHoverWatcher$Z(tf);
});

Clazz.newMeth(C$, 'getModelSetPathName$', function () {
return this.mm.modelSetPathName;
});

Clazz.newMeth(C$, 'getModelSetFileName$', function () {
return (this.mm.fileName == null  ? this.getZapName$() : this.mm.fileName);
});

Clazz.newMeth(C$, 'getUnitCellInfoText$', function () {
var c=this.getCurrentUnitCell$();
return (c == null  ? "not applicable" : c.getUnitCellInfo$());
});

Clazz.newMeth(C$, 'getUnitCellInfo$I', function (infoType) {
var symmetry=this.getCurrentUnitCell$();
return (symmetry == null  ? NaN : symmetry.getUnitCellInfoType$I(infoType));
});

Clazz.newMeth(C$, 'getV0abc$O', function (def) {
var uc=this.getCurrentUnitCell$();
return (uc == null  ? null : uc.getV0abc$O(def));
});

Clazz.newMeth(C$, 'getPolymerPointsAndVectors$javajs_util_BS$javajs_util_Lst', function (bs, vList) {
this.ms.getPolymerPointsAndVectors$javajs_util_BS$javajs_util_Lst$Z$F(bs, vList, this.g.traceAlpha, this.g.sheetSmoothing);
});

Clazz.newMeth(C$, 'getHybridizationAndAxes$I$javajs_util_V3$javajs_util_V3$S', function (atomIndex, z, x, lcaoType) {
return this.ms.getHybridizationAndAxes$I$I$javajs_util_V3$javajs_util_V3$S$Z$Z(atomIndex, 0, z, x, lcaoType, true, true);
});

Clazz.newMeth(C$, 'getAllAtoms$', function () {
return this.getModelUndeletedAtomsBitSet$I(-1);
});

Clazz.newMeth(C$, 'getModelUndeletedAtomsBitSet$I', function (modelIndex) {
return this.slm.excludeAtoms$javajs_util_BS$Z(this.ms.getModelAtomBitSetIncludingDeleted$I$Z(modelIndex, true), false);
});

Clazz.newMeth(C$, 'getModelUndeletedAtomsBitSetBs$javajs_util_BS', function (bsModels) {
return this.slm.excludeAtoms$javajs_util_BS$Z(this.ms.getModelAtomBitSetIncludingDeletedBs$javajs_util_BS(bsModels), false);
});

Clazz.newMeth(C$, 'getBoundBoxCenter$', function () {
return this.ms.getBoundBoxCenter$I(this.am.cmi);
});

Clazz.newMeth(C$, 'calcBoundBoxDimensions$javajs_util_BS$F', function (bs, scale) {
this.ms.calcBoundBoxDimensions$javajs_util_BS$F(bs, scale);
this.axesAreTainted=true;
});

Clazz.newMeth(C$, 'getBoundBoxCornerVector$', function () {
return this.ms.getBoundBoxCornerVector$();
});

Clazz.newMeth(C$, 'getBoundBoxCenterX$', function () {
return (this.dimScreen.width/2|0);
});

Clazz.newMeth(C$, 'getBoundBoxCenterY$', function () {
return (this.dimScreen.height/2|0);
});

Clazz.newMeth(C$, 'getModelSetProperties$', function () {
return this.ms.modelSetProperties;
});

Clazz.newMeth(C$, 'getModelProperties$I', function (modelIndex) {
return this.ms.am[modelIndex].properties;
});

Clazz.newMeth(C$, 'getModelForAtomIndex$I', function (iatom) {
return this.ms.am[this.ms.at[iatom].mi];
});

Clazz.newMeth(C$, 'getModelSetAuxiliaryInfo$', function () {
return this.ms.getAuxiliaryInfo$javajs_util_BS(null);
});

Clazz.newMeth(C$, 'getModelNumber$I', function (modelIndex) {
return (modelIndex < 0 ? modelIndex : this.ms.getModelNumber$I(modelIndex));
});

Clazz.newMeth(C$, 'getModelFileNumber$I', function (modelIndex) {
return (modelIndex < 0 ? 0 : this.ms.modelFileNumbers[modelIndex]);
});

Clazz.newMeth(C$, 'getModelNumberDotted$I', function (modelIndex) {
return modelIndex < 0 ? "0" : this.ms.getModelNumberDotted$I(modelIndex);
});

Clazz.newMeth(C$, 'getModelName$I', function (modelIndex) {
return this.ms.getModelName$I(modelIndex);
});

Clazz.newMeth(C$, 'modelHasVibrationVectors$I', function (modelIndex) {
return (this.ms.getLastVibrationVector$I$I(modelIndex, 4166) >= 0);
});

Clazz.newMeth(C$, 'getBondsForSelectedAtoms$javajs_util_BS', function (bsAtoms) {
return this.ms.getBondsForSelectedAtoms$javajs_util_BS$Z(bsAtoms, this.g.bondModeOr || $I$(31).cardinalityOf$javajs_util_BS(bsAtoms) == 1 );
});

Clazz.newMeth(C$, 'frankClicked$I$I', function (x, y) {
return !this.g.disablePopupMenu && this.getShowFrank$() && this.shm.checkFrankclicked$I$I(x, y)  ;
});

Clazz.newMeth(C$, 'frankClickedModelKit$I$I', function (x, y) {
return !this.g.disablePopupMenu && this.g.modelKitMode && x >= 0   && y >= 0  && x < 40  && y < 80 ;
});

Clazz.newMeth(C$, 'findNearestAtomIndex$I$I', function (x, y) {
return this.findNearestAtomIndexMovable$I$I$Z(x, y, false);
});

Clazz.newMeth(C$, 'findNearestAtomIndexMovable$I$I$Z', function (x, y, mustBeMovable) {
return (!this.g.atomPicking ? -1 : this.ms.findNearestAtomIndex$I$I$javajs_util_BS$I(x, y, mustBeMovable ? this.slm.getMotionFixedAtoms$() : null, this.g.minPixelSelRadius));
});

Clazz.newMeth(C$, 'toCartesian$javajs_util_T3$Z', function (pt, ignoreOffset) {
var unitCell=this.getCurrentUnitCell$();
if (unitCell != null ) {
unitCell.toCartesian$javajs_util_T3$Z(pt, ignoreOffset);
if (!this.g.legacyJavaFloat) $I$(11).fixPtFloats$javajs_util_T3$F(pt, 10000.0);
}});

Clazz.newMeth(C$, 'toFractional$javajs_util_T3$Z', function (pt, ignoreOffset) {
var unitCell=this.getCurrentUnitCell$();
if (unitCell != null ) {
unitCell.toFractional$javajs_util_T3$Z(pt, ignoreOffset);
if (!this.g.legacyJavaFloat) $I$(11).fixPtFloats$javajs_util_T3$F(pt, 100000.0);
}});

Clazz.newMeth(C$, 'toUnitCell$javajs_util_P3$javajs_util_P3', function (pt, offset) {
var unitCell=this.getCurrentUnitCell$();
if (unitCell != null ) unitCell.toUnitCell$javajs_util_T3$javajs_util_T3(pt, offset);
});

Clazz.newMeth(C$, 'setCurrentCage$S', function (isosurfaceId) {
var data=Clazz.array(java.lang.Object, -1, [isosurfaceId, null]);
this.shm.getShapePropertyData$I$S$OA(24, "unitCell", data);
this.ms.setModelCage$I$org_jmol_api_SymmetryInterface(this.am.cmi, data[1]);
});

Clazz.newMeth(C$, 'addUnitCellOffset$javajs_util_P3', function (pt) {
var unitCell=this.getCurrentUnitCell$();
if (unitCell == null ) return;
pt.add$javajs_util_T3(unitCell.getCartesianOffset$());
});

Clazz.newMeth(C$, 'setAtomData$I$S$S$Z', function (type, name, coordinateData, isDefault) {
this.ms.setAtomData$I$S$S$Z(type, name, coordinateData, isDefault);
if (type == 2) this.checkCoordinatesChanged$();
this.refreshMeasures$Z(true);
});

Clazz.newMeth(C$, 'setCenterSelected$', function () {
this.setCenterBitSet$javajs_util_BS$Z(this.bsA$(), true);
});

Clazz.newMeth(C$, 'setApplySymmetryToBonds$Z', function (TF) {
this.g.applySymmetryToBonds=TF;
});

Clazz.newMeth(C$, 'setBondTolerance$F', function (bondTolerance) {
this.g.setF$S$F("bondTolerance", bondTolerance);
this.g.bondTolerance=bondTolerance;
});

Clazz.newMeth(C$, 'setMinBondDistance$F', function (minBondDistance) {
this.g.setF$S$F("minBondDistance", minBondDistance);
this.g.minBondDistance=minBondDistance;
});

Clazz.newMeth(C$, 'getAtomsNearPt$F$javajs_util_P3', function (distance, coord) {
var bs=Clazz.new_($I$(35,1));
this.ms.getAtomsWithin$F$javajs_util_T3$javajs_util_BS$I(distance, coord, bs, -1);
return bs;
});

Clazz.newMeth(C$, 'getBranchBitSet$I$I$Z', function (atomIndex, atomIndexNot, allowCyclic) {
if (atomIndex < 0 || atomIndex >= this.ms.ac ) return Clazz.new_($I$(35,1));
return $I$(41,"getBranchBitSet$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_Lst$I$Z$Z",[this.ms.at, atomIndex, this.getModelUndeletedAtomsBitSet$I(this.ms.at[atomIndex].mi), null, atomIndexNot, allowCyclic, true]);
});

Clazz.newMeth(C$, 'getElementsPresentBitSet$I', function (modelIndex) {
return this.ms.getElementsPresentBitSet$I(modelIndex);
});

Clazz.newMeth(C$, 'getFileHeader$', function () {
return this.ms.getFileHeader$I(this.am.cmi);
});

Clazz.newMeth(C$, 'getFileData$', function () {
return this.ms.getFileData$I(this.am.cmi);
});

Clazz.newMeth(C$, 'getCifData$I', function (modelIndex) {
return this.readCifData$S$S(this.ms.getModelFileName$I(modelIndex), this.ms.getModelFileType$I(modelIndex).toUpperCase$());
});

Clazz.newMeth(C$, 'readCifData$S$S', function (fileName, type) {
var fname=(fileName == null  ? this.ms.getModelFileName$I(this.am.cmi) : fileName);
if (type == null  && fname != null   && fname.toUpperCase$().indexOf$S("BCIF") >= 0 ) {
var is=this.fm.getBufferedInputStream$S(fname);
try {
return ($I$(13).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.MessagePackReader", this, "script")).getMapForStream$java_io_BufferedInputStream(is);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
return Clazz.new_($I$(1,1));
} else {
throw e;
}
}
}var data=(fileName == null  || fileName.length$() == 0  ? this.getCurrentFileAsString$S("script") : this.getFileAsString3$S$Z$S(fileName, false, null));
if (data == null  || data.length$() < 2 ) return null;
var rdr=$I$(39).getBR$S(data);
if (type == null ) type=this.getModelAdapter$().getFileTypeName$O(rdr);
return (type == null  ? null : this.readCifData$S$O$S(null, rdr, type));
});

Clazz.newMeth(C$, 'readCifData$S$O$S', function (fileName, rdrOrStringData, type) {
if (rdrOrStringData == null ) rdrOrStringData=this.getFileAsString$S(fileName);
var rdr=(Clazz.instanceOf(rdrOrStringData, "java.io.BufferedReader") ? rdrOrStringData : $I$(39).getBR$S(rdrOrStringData));
return $I$(39,"readCifData$javajs_api_GenericCifDataParser$java_io_BufferedReader",[$I$(13,"getInterface$S$org_jmol_viewer_Viewer$S",[("Cif2".equals$O(type) ? "org.jmol.adapter.readers.cif.Cif2DataParser" : "javajs.util.CifDataParser"), this, "script"]), rdr]);
});

Clazz.newMeth(C$, 'getStateCreator$', function () {
if (this.jsc == null ) (this.jsc=$I$(13).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.viewer.StateCreator", this, "script")).setViewer$org_jmol_viewer_Viewer(this);
return this.jsc;
});

Clazz.newMeth(C$, 'getWrappedStateScript$', function () {
return p$1.getOutputManager.apply(this, []).getWrappedState$S$SA$O$javajs_util_OC(null, null, null, null);
});

Clazz.newMeth(C$, 'getStateInfo$', function () {
return this.getStateInfo3$S$I$I(null, 0, 0);
});

Clazz.newMeth(C$, 'getStateInfo3$S$I$I', function (type, width, height) {
return (this.g.preserveState ? this.getStateCreator$().getStateScript$S$I$I(type, width, height) : "");
});

Clazz.newMeth(C$, 'getStructureState$', function () {
return this.getStateCreator$().getModelState$javajs_util_SB$Z$Z(null, false, true);
});

Clazz.newMeth(C$, 'getCoordinateState$javajs_util_BS', function (bsSelected) {
return this.getStateCreator$().getAtomicPropertyState$I$javajs_util_BS(2, bsSelected);
});

Clazz.newMeth(C$, 'setCurrentColorRange$S', function (label) {
var data=this.getDataObj$S$javajs_util_BS$I(label, null, 1);
var bs=(data == null  ? null : (this.getDataObj$S$javajs_util_BS$I(label, null, -1))[2]);
if (bs != null  && this.g.rangeSelected ) bs.and$javajs_util_BS(this.bsA$());
this.cm.setPropertyColorRangeData$FA$javajs_util_BS(data, bs);
});

Clazz.newMeth(C$, 'setData$S$OA$I$I$I$I$I', function (key, data, dataType, matchField, matchFieldColumnCount, dataField, dataFieldColumnCount) {
p$1.getDataManager.apply(this, []).setData$S$OA$I$I$I$I$I$I(key, this.lastData=data, dataType, this.ms.ac, matchField, matchFieldColumnCount, dataField, dataFieldColumnCount);
});

Clazz.newMeth(C$, 'getDataObj$S$javajs_util_BS$I', function (key, bsSelected, dataType) {
return (key == null  && dataType == -2  ? this.lastData : p$1.getDataManager.apply(this, []).getData$S$javajs_util_BS$I(key, bsSelected, dataType));
});

Clazz.newMeth(C$, 'autoHbond$javajs_util_BS$javajs_util_BS$Z', function (bsFrom, bsTo, onlyIfHaveCalculated) {
if (bsFrom == null ) bsFrom=bsTo=this.bsA$();
return this.ms.autoHbond$javajs_util_BS$javajs_util_BS$Z(bsFrom, bsTo, onlyIfHaveCalculated);
});

Clazz.newMeth(C$, 'getCurrentUnitCell$', function () {
if (this.am.cai >= 0) return this.ms.getUnitCellForAtom$I(this.am.cai);
var m=this.am.cmi;
if (m >= 0) return this.ms.getUnitCell$I(m);
var models=this.getVisibleFramesBitSet$();
var ucLast=null;
for (var i=models.nextSetBit$I(0); i >= 0; i=models.nextSetBit$I(i + 1)) {
var uc=this.ms.getUnitCell$I(i);
if (uc == null ) continue;
if (ucLast == null ) {
ucLast=uc;
continue;
}if (!ucLast.unitCellEquals$org_jmol_api_SymmetryInterface(uc)) return null;
}
return ucLast;
});

Clazz.newMeth(C$, 'getDefaultMeasurementLabel$I', function (nPoints) {
switch (nPoints) {
case 2:
return this.g.defaultDistanceLabel;
case 3:
return this.g.defaultAngleLabel;
default:
return this.g.defaultTorsionLabel;
}
});

Clazz.newMeth(C$, 'getMeasurementCount$', function () {
var count=p$1.getShapePropertyAsInt$I$S.apply(this, [6, "count"]);
return count <= 0 ? 0 : count;
});

Clazz.newMeth(C$, 'getMeasurementStringValue$I', function (i) {
return "" + this.shm.getShapePropertyIndex$I$S$I(6, "stringValue", i);
});

Clazz.newMeth(C$, 'getMeasurementInfoAsString$', function () {
return this.getShapeProperty$I$S(6, "infostring");
});

Clazz.newMeth(C$, 'getMeasurementCountPlusIndices$I', function (i) {
return this.shm.getShapePropertyIndex$I$S$I(6, "countPlusIndices", i);
});

Clazz.newMeth(C$, 'setPendingMeasurement$org_jmol_modelset_MeasurementPending', function (mp) {
this.shm.loadShape$I(6);
this.setShapeProperty$I$S$O(6, "pending", mp);
});

Clazz.newMeth(C$, 'getPendingMeasurement$', function () {
return this.getShapeProperty$I$S(6, "pending");
});

Clazz.newMeth(C$, 'clearAllMeasurements$', function () {
this.setShapeProperty$I$S$O(6, "clear", null);
});

Clazz.newMeth(C$, 'clearMeasurements$', function () {
this.evalString$S("measures delete");
});

Clazz.newMeth(C$, 'setAnimation$I', function (tok) {
switch (tok) {
case 1073742098:
this.am.reverseAnimation$();
case 1073742096:
case 4143:
if (!this.am.animationOn) this.am.resumeAnimation$();
return;
case 20487:
if (this.am.animationOn && !this.am.animationPaused ) this.am.pauseAnimation$();
return;
case 1073742037:
this.am.setAnimationNext$();
return;
case 1073742108:
this.am.setAnimationPrevious$();
return;
case 1073741942:
case 1073742125:
this.am.rewindAnimation$();
return;
case 1073741993:
this.am.setAnimationLast$();
return;
}
});

Clazz.newMeth(C$, 'setAnimationFps$I', function (fps) {
this.am.setAnimationFps$I(fps);
});

Clazz.newMeth(C$, 'setAnimationMode$S', function (mode) {
if (mode.equalsIgnoreCase$S("once")) {
this.am.setAnimationReplayMode$I$F$F(1073742070, 0, 0);
} else if (mode.equalsIgnoreCase$S("loop")) {
this.am.setAnimationReplayMode$I$F$F(528411, 1, 1);
} else if (mode.startsWith$S("pal")) {
this.am.setAnimationReplayMode$I$F$F(1073742082, 1, 1);
}}, p$1);

Clazz.newMeth(C$, 'setAnimationOn$Z', function (animationOn) {
var wasAnimating=this.am.animationOn;
if (animationOn == wasAnimating ) return;
this.am.setAnimationOn$Z(animationOn);
});

Clazz.newMeth(C$, 'setAnimationRange$I$I', function (modelIndex1, modelIndex2) {
this.am.setAnimationRange$I$I(modelIndex1, modelIndex2);
});

Clazz.newMeth(C$, 'getVisibleFramesBitSet$', function () {
var bs=$I$(31).copy$javajs_util_BS(this.am.bsVisibleModels);
if (this.ms.trajectory != null ) this.ms.trajectory.selectDisplayed$javajs_util_BS(bs);
return bs;
});

Clazz.newMeth(C$, 'getFrameAtoms$', function () {
return this.getModelUndeletedAtomsBitSetBs$javajs_util_BS(this.getVisibleFramesBitSet$());
});

Clazz.newMeth(C$, 'defineAtomSets$java_util_Map', function (info) {
this.definedAtomSets.putAll$java_util_Map(info);
});

Clazz.newMeth(C$, 'setAnimDisplay$javajs_util_BS', function (bs) {
this.am.setDisplay$javajs_util_BS(bs);
if (!this.am.animationOn) this.am.morph$F(this.am.currentMorphModel + 1);
});

Clazz.newMeth(C$, 'setCurrentModelIndex$I', function (modelIndex) {
if (modelIndex == -2147483648) {
this.prevFrame=-2147483648;
this.setCurrentModelIndexClear$I$Z(this.am.cmi, true);
return;
}this.am.setModel$I$Z(modelIndex, true);
});

Clazz.newMeth(C$, 'getTrajectoryState$', function () {
return (this.ms.trajectory == null  ? "" : this.ms.trajectory.getState$());
});

Clazz.newMeth(C$, 'setFrameOffsets$javajs_util_BS$Z', function (bsAtoms, isFull) {
this.tm.bsFrameOffsets=null;
if (isFull) this.clearModelDependentObjects$();
 else this.tm.bsFrameOffsets=bsAtoms;
this.tm.frameOffsets=this.ms.getFrameOffsets$javajs_util_BS$Z(bsAtoms, isFull);
});

Clazz.newMeth(C$, 'setCurrentModelIndexClear$I$Z', function (modelIndex, clearBackground) {
this.am.setModel$I$Z(modelIndex, clearBackground);
});

Clazz.newMeth(C$, 'haveFileSet$', function () {
return (this.ms.mc > 1 && this.getModelNumber$I(2147483647) > 2000000 );
});

Clazz.newMeth(C$, 'setBackgroundModelIndex$I', function (modelIndex) {
this.am.setBackgroundModelIndex$I(modelIndex);
this.g.setO$S$O("backgroundModel", this.ms.getModelNumberDotted$I(modelIndex));
});

Clazz.newMeth(C$, 'setFrameVariables$', function () {
this.g.setO$S$O("animationMode", $I$(36).nameOf$I(this.am.animationReplayMode));
this.g.setI$S$I("animationFps", this.am.animationFps);
this.g.setO$S$O("_firstFrame", this.am.getModelSpecial$I(-1));
this.g.setO$S$O("_lastFrame", this.am.getModelSpecial$I(1));
this.g.setF$S$F("_animTimeSec", this.am.getAnimRunTimeSeconds$());
this.g.setB$S$Z("_animMovie", this.am.isMovie);
});

Clazz.newMeth(C$, 'getInMotion$Z', function (includeAnim) {
return (this.inMotion || includeAnim && this.am.animationOn  );
});

Clazz.newMeth(C$, 'getMotionEventNumber$', function () {
return this.motionEventNumber;
});

Clazz.newMeth(C$, 'setInMotion$Z', function (inMotion) {
if (!!(this.inMotion ^ inMotion)) {
this.inMotion=inMotion;
this.resizeImage$I$I$Z$Z$Z(0, 0, false, false, true);
if (inMotion) {
this.startHoverWatcher$Z(false);
++this.motionEventNumber;
} else {
this.startHoverWatcher$Z(true);
this.refresh$I$S(3, "vwr setInMotion " + inMotion);
}}});

Clazz.newMeth(C$, 'setRefreshing$Z', function (TF) {
this.refreshing=TF;
}, p$1);

Clazz.newMeth(C$, 'getRefreshing$', function () {
return this.refreshing;
});

Clazz.newMeth(C$, 'pushHoldRepaint$', function () {
this.pushHoldRepaintWhy$S(null);
});

Clazz.newMeth(C$, 'pushHoldRepaintWhy$S', function (why) {
if (this.rm != null ) this.rm.pushHoldRepaint$S(why);
});

Clazz.newMeth(C$, 'popHoldRepaint$S', function (why) {
if (this.rm != null ) {
this.rm.popHoldRepaint$Z$S(why.indexOf$S("\u0001## REPAINT_IGNORE ##") < 0, why);
}});

Clazz.newMeth(C$, 'refresh$I$S', function (mode, strWhy) {
if (this.rm == null  || !this.refreshing  || mode == 6 && this.getInMotion$Z(true)   || !C$.isWebGL && mode == 7  ) return;
if (C$.isWebGL) {
switch (mode) {
case 1:
case 2:
case 7:
this.tm.finalizeTransformParameters$();
if (this.html5Applet == null ) return;
this.html5Applet._refresh();
if (mode == 7) return;
break;
}
} else {
this.rm.repaintIfReady$S("refresh " + mode + " " + strWhy );
}if (this.sm.doSync$()) this.sm.setSync$S(mode == 2 ? strWhy : null);
});

Clazz.newMeth(C$, 'requestRepaintAndWait$S', function (why) {
if (this.rm == null ) return;
if (!this.haveDisplay) {
this.setModelVisibility$();
this.shm.finalizeAtoms$javajs_util_BS$Z(null, true);
return;
}this.rm.requestRepaintAndWait$S(why);
p$1.setSync.apply(this, []);
});

Clazz.newMeth(C$, 'clearShapeRenderers$', function () {
p$1.clearRepaintManager$I.apply(this, [-1]);
});

Clazz.newMeth(C$, 'isRepaintPending$', function () {
return (this.rm == null  ? false : this.rm.isRepaintPending$());
});

Clazz.newMeth(C$, 'notifyViewerRepaintDone$', function () {
if (this.rm != null ) this.rm.repaintDone$();
this.am.repaintDone$();
});

Clazz.newMeth(C$, 'areAxesTainted$', function () {
var TF=this.axesAreTainted;
this.axesAreTainted=false;
return TF;
});

Clazz.newMeth(C$, 'setMaximumSize$I', function (x) {
this.maximumSize=Math.max(x, 100);
}, p$1);

Clazz.newMeth(C$, 'setScreenDimension$I$I', function (width, height) {
height=Math.min(height, this.maximumSize);
width=Math.min(width, this.maximumSize);
if (this.tm.stereoDoubleFull) width=((width + 1)/2|0);
if (this.dimScreen.width == width && this.dimScreen.height == height ) return;
this.resizeImage$I$I$Z$Z$Z(width, height, false, false, true);
});

Clazz.newMeth(C$, 'setStereo$Z$O', function (isStereoSlave, gRight) {
this.isStereoSlave=isStereoSlave;
this.gRight=gRight;
});

Clazz.newMeth(C$, 'resizeImage$I$I$Z$Z$Z', function (width, height, isImageWrite, isExport, isReset) {
if (!isImageWrite && this.creatingImage ) return;
var wasAntialiased=this.antialiased;
this.antialiased=(isReset ? this.g.antialiasDisplay && this.checkMotionRendering$I(603979786)  : isImageWrite && !isExport  ? this.g.antialiasImages : false);
if (!isExport && !isImageWrite && (width > 0 || wasAntialiased != this.antialiased  )  ) this.setShapeProperty$I$S$O(5, "clearBoxes", null);
this.imageFontScaling=(this.antialiased ? 2.0 : 1.0) * (isReset || this.tm.scale3D || width <= 0   ? 1 : (this.g.zoomLarge == (height > width)  ? height : width) * 1.0 / this.getScreenDim$());
if (width > 0) {
this.dimScreen.width=width;
this.dimScreen.height=height;
if (!isImageWrite) {
this.g.setI$S$I("_width", width);
this.g.setI$S$I("_height", height);
}} else {
width=(this.dimScreen.width == 0 ? this.dimScreen.width=500 : this.dimScreen.width);
height=(this.dimScreen.height == 0 ? this.dimScreen.height=500 : this.dimScreen.height);
}this.tm.setScreenParameters$I$I$Z$Z$Z$Z(width, height, isImageWrite || isReset  ? this.g.zoomLarge : false, this.antialiased, false, false);
this.gdata.setWindowParameters$I$I$Z(width, height, this.antialiased);
if (width > 0 && !isImageWrite ) this.setStatusResized$I$I(width, height);
});

Clazz.newMeth(C$, 'getScreenWidth$', function () {
return this.dimScreen.width;
});

Clazz.newMeth(C$, 'getScreenHeight$', function () {
return this.dimScreen.height;
});

Clazz.newMeth(C$, 'getScreenDim$', function () {
return (this.g.zoomLarge == (this.dimScreen.height > this.dimScreen.width)  ? this.dimScreen.height : this.dimScreen.width);
});

Clazz.newMeth(C$, 'generateOutputForExport$java_util_Map', function (params) {
return (this.noGraphicsAllowed || this.rm == null   ? null : p$1.getOutputManager.apply(this, []).getOutputFromExport$java_util_Map(params));
});

Clazz.newMeth(C$, 'clearRepaintManager$I', function (iShape) {
if (this.rm != null ) this.rm.clear$I(iShape);
}, p$1);

Clazz.newMeth(C$, 'renderScreenImage$O$I$I', function (g, width, height) {
this.renderScreenImageStereo$O$Z$I$I(g, false, width, height);
});

Clazz.newMeth(C$, 'renderScreenImageStereo$O$Z$I$I', function (gLeft, checkStereoSlave, width, height) {
if (p$1.updateWindow$I$I.apply(this, [width, height])) {
if (!checkStereoSlave || this.gRight == null  ) {
this.getScreenImageBuffer$O$Z(gLeft, false);
} else {
p$1.drawImage$O$O$I$I$Z.apply(this, [this.gRight, p$1.getImage$Z$Z$Z.apply(this, [true, false, false]), 0, 0, this.tm.stereoDoubleDTI]);
p$1.drawImage$O$O$I$I$Z.apply(this, [gLeft, p$1.getImage$Z$Z$Z.apply(this, [false, false, false]), 0, 0, this.tm.stereoDoubleDTI]);
}}if (this.captureParams != null  && Boolean.FALSE !== this.captureParams.get$O("captureEnabled")  ) {
var t=(this.captureParams.get$O("endTime")).longValue$();
if (t > 0 && System.currentTimeMillis$() + 50 > t ) this.captureParams.put$O$O("captureMode", "end");
this.processWriteOrCapture$java_util_Map(this.captureParams);
}this.notifyViewerRepaintDone$();
});

Clazz.newMeth(C$, 'updateJS$', function () {
if (C$.isWebGL) {
if (this.jsParams == null ) {
this.jsParams=Clazz.new_($I$(1,1));
this.jsParams.put$O$O("type", "JS");
}if (p$1.updateWindow$I$I.apply(this, [0, 0])) p$1.render.apply(this, []);
this.notifyViewerRepaintDone$();
} else {
if (this.isStereoSlave) return;
this.renderScreenImageStereo$O$Z$I$I(this.apiPlatform.getGraphics$O(null), true, 0, 0);
}});

Clazz.newMeth(C$, 'updateJSView$I$I', function (imodel, iatom) {
if (this.html5Applet == null ) return;
var doViewPick=true;
{
doViewPick = (this.html5Applet != null && this.html5Applet._viewSet != null);
}
if (doViewPick) this.html5Applet._atomPickedCallback(imodel, iatom);
}, p$1);

Clazz.newMeth(C$, 'updateWindow$I$I', function (width, height) {
if (!this.refreshing || this.creatingImage ) return (this.refreshing ? false : !this.isJSNoAWT);
if (this.isTainted || this.tm.slabEnabled ) this.setModelVisibility$();
this.isTainted=false;
if (this.rm != null ) {
if (width != 0) this.setScreenDimension$I$I(width, height);
}return true;
}, p$1);

Clazz.newMeth(C$, 'getImage$Z$Z$Z', function (isDouble, isImageWrite, andReturnImage) {
var image=null;
try {
p$1.beginRendering$Z$Z.apply(this, [isDouble, isImageWrite]);
p$1.render.apply(this, []);
this.gdata.endRendering$();
if (!andReturnImage) image=this.gdata.getScreenImage$Z(isImageWrite);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
this.gdata.getScreenImage$Z(isImageWrite);
this.handleError$Error$Z(er, false);
this.setErrorMessage$S$S("Error during rendering: " + er, null);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
System.out.println$S("render error" + e);
e.printStackTrace$();
}
} else {
throw e$$;
}
}
return image;
}, p$1);

Clazz.newMeth(C$, 'beginRendering$Z$Z', function (isDouble, isImageWrite) {
this.gdata.beginRendering$javajs_util_M3$Z$Z$Z(this.tm.getStereoRotationMatrix$Z(isDouble), this.g.translucent, isImageWrite, !this.checkMotionRendering$I(603979967));
}, p$1);

Clazz.newMeth(C$, 'render', function () {
if (this.mm.modelSet == null  || !this.mustRender  || !this.refreshing && !this.creatingImage   || this.rm == null  ) return;
var antialias2=this.antialiased && this.g.antialiasTranslucent ;
var navMinMax=this.shm.finalizeAtoms$javajs_util_BS$Z(this.tm.bsSelectedAtoms, true);
if (C$.isWebGL) {
this.rm.renderExport$org_jmol_util_GData$org_jmol_modelset_ModelSet$java_util_Map(this.gdata, this.ms, this.jsParams);
this.notifyViewerRepaintDone$();
return;
}this.rm.render$org_jmol_util_GData$org_jmol_modelset_ModelSet$Z$IA(this.gdata, this.ms, true, navMinMax);
if (this.gdata.setPass2$Z(antialias2)) {
this.tm.setAntialias$Z(antialias2);
this.rm.render$org_jmol_util_GData$org_jmol_modelset_ModelSet$Z$IA(this.gdata, this.ms, false, null);
this.tm.setAntialias$Z(this.antialiased);
}}, p$1);

Clazz.newMeth(C$, 'drawImage$O$O$I$I$Z', function (graphic, img, x, y, isDTI) {
this.apiPlatform.drawImage$O$O$I$I$I$I$Z(graphic, img, x, y, this.dimScreen.width, this.dimScreen.height, isDTI);
this.gdata.releaseScreenImage$();
}, p$1);

Clazz.newMeth(C$, 'getScreenImage$', function () {
return this.getScreenImageBuffer$O$Z(null, true);
});

Clazz.newMeth(C$, 'getScreenImageBuffer$O$Z', function (g, isImageWrite) {
if (C$.isWebGL) return (isImageWrite ? this.apiPlatform.allocateRgbImage$I$I$IA$I$Z$Z(0, 0, null, 0, false, true) : null);
var isDouble=this.tm.stereoDoubleFull || this.tm.stereoDoubleDTI ;
var isBiColor=this.tm.stereoMode.isBiColor$();
var mergeImages=(g == null  && isDouble );
var imageBuffer=null;
if (isBiColor) {
p$1.beginRendering$Z$Z.apply(this, [true, isImageWrite]);
p$1.render.apply(this, []);
this.gdata.endRendering$();
this.gdata.snapshotAnaglyphChannelBytes$();
p$1.beginRendering$Z$Z.apply(this, [false, isImageWrite]);
p$1.render.apply(this, []);
this.gdata.endRendering$();
this.gdata.applyAnaglygh$org_jmol_c_STER$IA(this.tm.stereoMode, this.tm.stereoColors);
imageBuffer=this.gdata.getScreenImage$Z(isImageWrite);
} else {
imageBuffer=p$1.getImage$Z$Z$Z.apply(this, [isDouble, isImageWrite, false]);
}var imageBuffer2=null;
if (mergeImages) {
imageBuffer2=this.apiPlatform.newBufferedImage$O$I$I(imageBuffer, (this.tm.stereoDoubleDTI ? this.dimScreen.width : this.dimScreen.width << 1), this.dimScreen.height);
g=this.apiPlatform.getGraphics$O(imageBuffer2);
}if (g == null ) return imageBuffer;
if (isDouble) {
if (this.tm.stereoMode === $I$(42).DTI ) {
p$1.drawImage$O$O$I$I$Z.apply(this, [g, imageBuffer, this.dimScreen.width >> 1, 0, true]);
imageBuffer=p$1.getImage$Z$Z$Z.apply(this, [false, false, false]);
p$1.drawImage$O$O$I$I$Z.apply(this, [g, imageBuffer, 0, 0, true]);
g=null;
} else {
p$1.drawImage$O$O$I$I$Z.apply(this, [g, imageBuffer, this.dimScreen.width, 0, false]);
imageBuffer=p$1.getImage$Z$Z$Z.apply(this, [false, false, false]);
}}if (g != null ) p$1.drawImage$O$O$I$I$Z.apply(this, [g, imageBuffer, 0, 0, false]);
if (mergeImages) imageBuffer=imageBuffer2;
return imageBuffer;
});

Clazz.newMeth(C$, 'getImageAsBytes$S$I$I$I$SA', function (type, width, height, quality, errMsg) {
return p$1.getOutputManager.apply(this, []).getImageAsBytes$S$I$I$I$SA(type, width, height, quality, errMsg);
});

Clazz.newMeth(C$, 'releaseScreenImage$', function () {
this.gdata.releaseScreenImage$();
});

Clazz.newMeth(C$, 'evalFile$S', function (strFilename) {
return (this.allowScripting && p$1.getScriptManager.apply(this, []) != null   ? this.scm.evalFile$S(strFilename) : null);
});

Clazz.newMeth(C$, 'getInsertedCommand$', function () {
var s=this.insertedCommand;
this.insertedCommand="";
if ($I$(2).debugging && s !== ""  ) $I$(2).debug$S("inserting: " + s);
return s;
});

Clazz.newMeth(C$, 'script$S', function (strScript) {
return this.evalStringQuietSync$S$Z$Z(strScript, false, true);
});

Clazz.newMeth(C$, 'evalString$S', function (strScript) {
return this.evalStringQuietSync$S$Z$Z(strScript, false, true);
});

Clazz.newMeth(C$, 'evalStringQuiet$S', function (strScript) {
return this.evalStringQuietSync$S$Z$Z(strScript, true, true);
});

Clazz.newMeth(C$, 'evalStringQuietSync$S$Z$Z', function (strScript, isQuiet, allowSyncScript) {
return (p$1.getScriptManager.apply(this, []) == null  ? null : this.scm.evalStringQuietSync$S$Z$Z(strScript, isQuiet, allowSyncScript));
});

Clazz.newMeth(C$, 'clearScriptQueue$', function () {
if (this.scm != null ) this.scm.clearQueue$();
});

Clazz.newMeth(C$, 'setScriptQueue$Z', function (TF) {
this.g.useScriptQueue=TF;
if (!TF) this.clearScriptQueue$();
}, p$1);

Clazz.newMeth(C$, 'checkHalt$S$Z', function (str, isInsert) {
return (this.scm != null  && this.scm.checkHalt$S$Z(str, isInsert) );
});

Clazz.newMeth(C$, 'scriptWait$S', function (strScript) {
return p$1.evalWait$S$S$S.apply(this, ["JSON", strScript, "+scriptStarted,+scriptStatus,+scriptEcho,+scriptTerminated"]);
});

Clazz.newMeth(C$, 'scriptWaitStatus$S$S', function (strScript, statusList) {
return p$1.evalWait$S$S$S.apply(this, ["object", strScript, statusList]);
});

Clazz.newMeth(C$, 'evalWait$S$S$S', function (returnType, strScript, statusList) {
if (p$1.getScriptManager.apply(this, []) == null ) return null;
this.scm.waitForQueue$();
var doTranslateTemp=$I$(28).setDoTranslate$Z(false);
var ret=this.evalStringWaitStatusQueued$S$S$S$Z$Z(returnType, strScript, statusList, false, false);
$I$(28).setDoTranslate$Z(doTranslateTemp);
return ret;
}, p$1);

Clazz.newMeth(C$, 'evalStringWaitStatusQueued$S$S$S$Z$Z', function (returnType, strScript, statusList, isQuiet, isQueued) {
if (C$.isJS && this.isApplet ) {
if (strScript.indexOf$S("JSCONSOLE") == 0) {
C$.jmolObject.showInfo(this.html5Applet, strScript.indexOf$S("CLOSE") < 0);
if (strScript.indexOf$S("CLEAR") >= 0) C$.jmolObject.clearConsole(this.html5Applet);
return null;
}}return (p$1.getScriptManager.apply(this, []) == null  ? null : this.scm.evalStringWaitStatusQueued$S$S$S$Z$Z(returnType, strScript, statusList, isQuiet, isQueued));
});

Clazz.newMeth(C$, 'exitJmol$', function () {
if (this.isApplet && !this.isJNLP ) return;
if (this.headlessImageParams != null ) {
try {
if (this.headless) this.outputToFile$java_util_Map(this.headlessImageParams);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}if ($I$(2).debugging) $I$(2).debug$S("exitJmol -- exiting");
System.out.flush$();
System.exit$I(0);
});

Clazz.newMeth(C$, 'scriptCheckRet$S$Z', function (strScript, returnContext) {
return (p$1.getScriptManager.apply(this, []) == null  ? null : this.scm.scriptCheckRet$S$Z(strScript, returnContext));
}, p$1);

Clazz.newMeth(C$, 'scriptCheck$S', function (strScript) {
return (p$1.getScriptManager.apply(this, []) == null  ? null : p$1.scriptCheckRet$S$Z.apply(this, [strScript, false]));
});

Clazz.newMeth(C$, 'isScriptExecuting$', function () {
return (this.eval != null  && this.eval.isExecuting$() );
});

Clazz.newMeth(C$, 'haltScriptExecution$', function () {
if (this.eval != null ) {
this.eval.haltExecution$();
this.eval.stopScriptThreads$();
}p$1.setStringPropertyTok$S$I$S.apply(this, ["pathForAllFiles", 545259572, ""]);
this.clearTimeouts$();
});

Clazz.newMeth(C$, 'pauseScriptExecution$', function () {
if (this.eval != null ) this.eval.pauseExecution$Z(true);
});

Clazz.newMeth(C$, 'resolveDatabaseFormat$S', function (fileName) {
if (C$.hasDatabasePrefix$S(fileName)) fileName=this.setLoadFormat$S$C$Z(fileName, fileName.charAt$I(0), false);
return fileName;
});

Clazz.newMeth(C$, 'hasDatabasePrefix$S', function (fileName) {
return (fileName.length$() != 0 && C$.isDatabaseCode$C(fileName.charAt$I(0)) );
}, 1);

Clazz.newMeth(C$, 'isDatabaseCode$C', function (ch) {
return (ch == "*" || ch == "$"  || ch == "="  || ch == ":" );
}, 1);

Clazz.newMeth(C$, 'setLoadFormat$S$C$Z', function (name, type, withPrefix) {
var format=null;
var id=name.substring$I(1);
switch (type.$c()) {
case 61:
if (name.startsWith$S("==")) {
id=id.substring$I(1);
type="#";
} else if (id.indexOf$S("/") > 0) {
try {
var pt=id.indexOf$S("/");
var database=id.substring$I$I(0, pt);
id=$I$(3,"resolveDataBase$S$S$S",[database, id.substring$I(pt + 1), null]);
if (id != null  && id.startsWith$S("\'") ) id=this.evaluateExpression$O(id).toString();
return (id == null  || id.length$() == 0  ? name : id);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return name;
} else {
throw e;
}
}
} else {
if (id.endsWith$S(".mmtf")) {
id=id.substring$I$I(0, id.indexOf$S(".mmtf"));
return $I$(3,"resolveDataBase$S$S$S",["mmtf", id.toUpperCase$(), null]);
}format=this.g.loadFormat;
}case 35:
if (format == null ) format=this.g.pdbLoadLigandFormat;
return $I$(3).resolveDataBase$S$S$S(null, id, format);
case 42:
var pt=name.lastIndexOf$S("/");
if (name.startsWith$S("*dom/")) {
id=name.substring$I(pt + 1);
format=(pt > 4 ? name.substring$I(5) : "mappings");
return $I$(11,"rep$S$S$S",[$I$(3).resolveDataBase$S$S$S("map", id, null), "%TYPE", format]);
} else if (name.startsWith$S("*val/")) {
id=name.substring$I(pt + 1);
format=(pt > 4 ? name.substring$I(5) : "validation/outliers/all");
return $I$(11,"rep$S$S$S",[$I$(3).resolveDataBase$S$S$S("map", id, null), "%TYPE", format]);
} else if (name.startsWith$S("*rna3d/")) {
id=name.substring$I(pt + 1);
format=(pt > 6 ? name.substring$I(6) : "loops");
return $I$(11,"rep$S$S$S",[$I$(3).resolveDataBase$S$S$S("rna3d", id, null), "%TYPE", format]);
} else if (name.startsWith$S("*dssr--")) {
id=name.substring$I(pt + 1);
id=$I$(3).resolveDataBase$S$S$S("dssr", id, null);
return id + "%20" + $I$(11,"rep$S$S$S",[name.substring$I$I(5, pt), " ", "%20"]) ;
} else if (name.startsWith$S("*dssr/")) {
id=name.substring$I(pt + 1);
return $I$(3).resolveDataBase$S$S$S("dssr", id, null);
} else if (name.startsWith$S("*dssr1/")) {
id=name.substring$I(pt + 1);
return $I$(3).resolveDataBase$S$S$S("dssr1", id, null);
}var pdbe="pdbe";
if (id.length$() == 5 && id.charAt$I(4) == "*" ) {
pdbe="pdbe2";
id=id.substring$I$I(0, 4);
}return $I$(3).resolveDataBase$S$S$S(pdbe, id, null);
case 58:
format=this.g.pubChemFormat;
if (id.equals$O("")) {
try {
id="smiles:" + this.getOpenSmiles$javajs_util_BS(this.bsA$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}var fl=id.toLowerCase$();
var fi=-2147483648;
try {
fi=Integer.parseInt$S(id);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (fi != -2147483648) {
id="cid/" + fi;
} else {
if (fl.startsWith$S("smiles:")) {
format += "?POST?smiles=" + id.substring$I(7);
id="smiles";
} else if (id.startsWith$S("cid:") || id.startsWith$S("inchikey:") || id.startsWith$S("cas:")  ) {
id=id.replace$C$C(":", "/");
} else {
if (fl.startsWith$S("name:")) id=id.substring$I(5);
id="name/" + $I$(11).escapeUrl$S(id);
}}return $I$(11).formatStringS$S$S$S(format, "FILE", id);
case 36:
if (name.startsWith$S("$$")) {
id=id.substring$I(1);
format=$I$(11,"rep$S$S$S",[this.g.smilesUrlFormat, "&get3d=True", ""]);
return $I$(11,"formatStringS$S$S$S",[format, "FILE", $I$(11).escapeUrl$S(id)]);
}if (name.equals$O("$")) try {
id=this.getOpenSmiles$javajs_util_BS(this.bsA$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
case 77:
case 78:
case 50:
case 73:
case 75:
case 83:
case 84:
case 47:
id=$I$(11).escapeUrl$S(id);
switch (type.$c()) {
case 77:
case 78:
format=this.g.nihResolverFormat + "/names";
break;
case 50:
format=this.g.nihResolverFormat + "/image";
break;
case 73:
case 84:
format=this.g.nihResolverFormat + "/stdinchi";
break;
case 75:
format=this.g.nihResolverFormat + "/inchikey";
break;
case 83:
format=this.g.nihResolverFormat + "/stdinchikey";
break;
case 47:
format=this.g.nihResolverFormat + "/";
break;
default:
format=this.g.smilesUrlFormat;
break;
}
return (withPrefix ? "MOL3D::" : "") + $I$(11).formatStringS$S$S$S(format, "FILE", id);
case 45:
case 95:
var isDiff=id.startsWith$S("*") || id.startsWith$S("=") ;
if (isDiff) id=id.substring$I(1);
var ciftype=null;
pt=id.indexOf$S(".");
if (pt >= 0) {
ciftype=id.substring$I(pt + 1);
id=id.substring$I$I(0, pt);
}id=$I$(3,"resolveDataBase$S$S$S",[(isDiff ? "pdbemapdiff" : "pdbemap") + (type == "-" ? "server" : ""), id, null]);
if ("cif".equals$O(ciftype)) {
id=id.replace$CharSequence$CharSequence("bcif", "cif");
}break;
}
return id;
});

Clazz.newMeth(C$, 'getStandardLabelFormat$I', function (type) {
switch (type) {
default:
case 0:
return "%[identify]";
case 1:
return this.g.defaultLabelXYZ;
case 2:
return this.g.defaultLabelPDB;
}
});

Clazz.newMeth(C$, 'getAdditionalHydrogens$javajs_util_BS$Z$Z$javajs_util_Lst', function (bsAtoms, doAll, justCarbon, vConnections) {
if (bsAtoms == null ) bsAtoms=this.bsA$();
var nTotal=Clazz.array(Integer.TYPE, [1]);
var pts=this.ms.calculateHydrogens$javajs_util_BS$IA$Z$Z$javajs_util_Lst(bsAtoms, nTotal, doAll, justCarbon, vConnections);
var points=Clazz.array($I$(43), [nTotal[0]]);
for (var i=0, pt=0; i < pts.length; i++) if (pts[i] != null ) for (var j=0; j < pts[i].length; j++) points[pt++]=pts[i][j];


return points;
});

Clazz.newMeth(C$, 'setMarBond$H', function (marBond) {
this.g.bondRadiusMilliAngstroms=marBond;
this.g.setI$S$I("bondRadiusMilliAngstroms", marBond);
this.setShapeSize$I$I$javajs_util_BS(1, marBond * 2, $I$(31).setAll$I(this.ms.ac));
});

Clazz.newMeth(C$, 'setHoverLabel$S', function (strLabel) {
this.shm.loadShape$I(35);
this.setShapeProperty$I$S$O(35, "label", strLabel);
p$1.setHoverEnabled$Z.apply(this, [strLabel != null ]);
this.g.setO$S$O("_hoverLabel", this.hoverLabel=strLabel);
if (!this.hoverEnabled && !this.sm.haveHoverCallback$() ) this.startHoverWatcher$Z(false);
});

Clazz.newMeth(C$, 'setHoverEnabled$Z', function (tf) {
this.hoverEnabled=tf;
this.g.setB$S$Z("_hoverEnabled", tf);
}, p$1);

Clazz.newMeth(C$, 'hoverOn$I$Z', function (atomIndex, isLabel) {
this.g.removeParam$S("_objecthovered");
this.g.setI$S$I("_atomhovered", atomIndex);
this.g.setO$S$O("_hoverLabel", this.hoverLabel);
this.g.setUserVariable$S$org_jmol_script_SV("hovered", $I$(44,"getVariable$O",[$I$(31).newAndSetBit$I(atomIndex)]));
if (this.sm.haveHoverCallback$()) this.sm.setStatusAtomHovered$I$S(atomIndex, p$1.getAtomInfoXYZ$I$Z.apply(this, [atomIndex, false]));
if (!this.hoverEnabled || this.eval != null  && this.isScriptExecuting$()   || atomIndex == this.hoverAtomIndex  || this.g.hoverDelayMs == 0  || !this.slm.isInSelectionSubset$I(atomIndex) ) return;
var label=(isLabel ? $I$(28).$$S("Drag to move label") : this.g.modelKitMode && this.modelkit != null   ? this.modelkit.setProperty$S$O("hoverLabel", Integer.valueOf$I(atomIndex)) : null);
this.shm.loadShape$I(35);
if (label != null  && (!isLabel || this.ms.at[atomIndex].isVisible$I(512) ) ) {
this.setShapeProperty$I$S$O(35, "specialLabel", label);
}this.setShapeProperty$I$S$O(35, "text", this.hoverText=null);
this.setShapeProperty$I$S$O(35, "target", Integer.valueOf$I(this.hoverAtomIndex=atomIndex));
this.refresh$I$S(3, "hover on atom");
});

Clazz.newMeth(C$, 'hoverOnPt$I$I$S$S$javajs_util_T3', function (x, y, text, id, pt) {
if (this.eval != null  && this.isScriptExecuting$() ) return;
this.g.setO$S$O("_hoverLabel", text);
if (id != null  && pt != null  ) {
this.g.setO$S$O("_objecthovered", id);
this.g.setI$S$I("_atomhovered", -1);
this.g.setUserVariable$S$org_jmol_script_SV("hovered", $I$(44).getVariable$O(pt));
if (this.sm.haveHoverCallback$()) this.sm.setStatusObjectHovered$S$S$javajs_util_T3(id, text, pt);
}if (!this.hoverEnabled) return;
this.shm.loadShape$I(35);
this.setShapeProperty$I$S$O(35, "xy", $I$(45).new3$I$I$I(x, y, 0));
this.setShapeProperty$I$S$O(35, "target", null);
this.setShapeProperty$I$S$O(35, "specialLabel", null);
this.setShapeProperty$I$S$O(35, "text", text);
this.hoverAtomIndex=-1;
this.hoverText=text;
this.refresh$I$S(3, "hover on point");
});

Clazz.newMeth(C$, 'hoverOff$', function () {
try {
if (this.g.modelKitMode && this.acm.getBondPickingMode$() != 34 ) this.highlight$javajs_util_BS(null);
if (!this.hoverEnabled) return;
var isHover=(this.hoverText != null  || this.hoverAtomIndex >= 0 );
if (this.hoverAtomIndex >= 0) {
this.setShapeProperty$I$S$O(35, "target", null);
this.hoverAtomIndex=-1;
}if (this.hoverText != null ) {
this.setShapeProperty$I$S$O(35, "text", null);
this.hoverText=null;
}this.setShapeProperty$I$S$O(35, "specialLabel", null);
if (isHover) this.refresh$I$S(3, "hover off");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setDebugScript$Z', function (debugScript) {
this.g.debugScript=debugScript;
this.g.setB$S$Z("debugScript", debugScript);
if (this.eval != null ) this.eval.setDebugging$();
});

Clazz.newMeth(C$, 'clearClickCount$', function () {
this.setTainted$Z(true);
});

Clazz.newMeth(C$, 'setCursor$I', function (cursor) {
if (this.isKiosk || this.currentCursor == cursor  || this.multiTouch  || !this.haveDisplay ) return;
this.apiPlatform.setCursor$I$O(this.currentCursor=cursor, this.display);
});

Clazz.newMeth(C$, 'setPickingMode$S$I', function (strMode, pickingMode) {
if (!this.haveDisplay) return;
this.showSelected=false;
var option=null;
if (strMode != null ) {
var pt=strMode.indexOf$S("_");
if (pt >= 0) {
option=strMode.substring$I(pt + 1);
strMode=strMode.substring$I$I(0, pt);
}pickingMode=$I$(20).getPickingMode$S(strMode);
}if (pickingMode < 0) pickingMode=1;
this.acm.setPickingMode$I(pickingMode);
this.g.setO$S$O("picking", $I$(20,"getPickingModeName$I",[this.acm.getAtomPickingMode$()]));
if (option == null  || option.length$() == 0 ) return;
option=Character.toUpperCase$C(option.charAt$I(0)) + (option.length$() == 1 ? "" : option.substring$I$I(1, 2));
switch (pickingMode) {
case 32:
this.getModelkit$Z(false).setProperty$S$O("atomType", option);
break;
case 33:
this.getModelkit$Z(false).setProperty$S$O("bondType", option);
break;
default:
$I$(2).error$S("Bad picking mode: " + strMode + "_" + option );
}
});

Clazz.newMeth(C$, 'getPickingMode$', function () {
return (this.haveDisplay ? this.acm.getAtomPickingMode$() : 0);
});

Clazz.newMeth(C$, 'setPickingStyle$S$I', function (style, pickingStyle) {
if (!this.haveDisplay) return;
if (style != null ) pickingStyle=$I$(20).getPickingStyleIndex$S(style);
if (pickingStyle < 0) pickingStyle=0;
this.acm.setPickingStyle$I(pickingStyle);
this.g.setO$S$O("pickingStyle", $I$(20,"getPickingStyleName$I",[this.acm.getPickingStyle$()]));
});

Clazz.newMeth(C$, 'getDrawHover$', function () {
return this.haveDisplay && this.g.drawHover ;
});

Clazz.newMeth(C$, 'getAtomInfo$I', function (atomOrPointIndex) {
if (this.ptTemp == null ) this.ptTemp=Clazz.new_($I$(43,1));
return (atomOrPointIndex >= 0 ? this.ms.getAtomInfo$I$S$javajs_util_P3(atomOrPointIndex, null, this.ptTemp) : this.shm.getShapePropertyIndex$I$S$I(6, "pointInfo", -atomOrPointIndex));
});

Clazz.newMeth(C$, 'getAtomInfoXYZ$I$Z', function (atomIndex, useChimeFormat) {
var atom=this.ms.at[atomIndex];
if (useChimeFormat) return this.getChimeMessenger$().getInfoXYZ$org_jmol_modelset_Atom(atom);
if (this.ptTemp == null ) this.ptTemp=Clazz.new_($I$(43,1));
return atom.getIdentityXYZ$Z$javajs_util_P3(true, this.ptTemp);
}, p$1);

Clazz.newMeth(C$, 'setSync', function () {
if (this.sm.doSync$()) this.sm.setSync$S(null);
}, p$1);

Clazz.newMeth(C$, 'setJmolCallbackListener$org_jmol_api_JmolCallbackListener', function (listener) {
this.sm.cbl=listener;
});

Clazz.newMeth(C$, 'setJmolStatusListener$org_jmol_api_JmolStatusListener', function (listener) {
this.sm.cbl=this.sm.jsl=listener;
});

Clazz.newMeth(C$, 'getStatusChanged$S', function (statusNameList) {
return (statusNameList == null  ? null : this.sm.getStatusChanged$S(statusNameList));
});

Clazz.newMeth(C$, 'menuEnabled$', function () {
return (!this.g.disablePopupMenu && this.getPopupMenu$() != null  );
});

Clazz.newMeth(C$, 'popupMenu$I$I$C', function (x, y, type) {
if (!this.haveDisplay || !this.refreshing || this.isPreviewOnly || this.g.disablePopupMenu  ) return;
switch (type.$c()) {
case 106:
try {
this.setCursor$I(3);
$I$(46,"invokeLater$Runnable",[((P$.Viewer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Viewer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['org.jmol.viewer.Viewer'].getPopupMenu$.apply(this.b$['org.jmol.viewer.Viewer'], []);
this.b$['org.jmol.viewer.Viewer'].jmolpopup.jpiShow$I$I(this.$finals$.x, this.$finals$.y);
this.b$['org.jmol.viewer.Viewer'].setCursor$I.apply(this.b$['org.jmol.viewer.Viewer'], [0]);
});
})()
), Clazz.new_(P$.Viewer$1.$init$,[this, {y:y,x:x}]))]);
} catch (e) {
$I$(2,"info$S",[e.toString()]);
this.g.disablePopupMenu=true;
}
break;
case 97:
case 98:
case 109:
if (this.getModelkit$Z(true) == null ) {
return;
}this.modelkit.jpiShow$I$I(x, y);
break;
}
});

Clazz.newMeth(C$, 'getModelkit$Z', function (andShow) {
if (this.modelkit == null ) {
this.modelkit=this.apiPlatform.getMenuPopup$S$C(null, "m");
} else if (andShow) {
this.modelkit.jpiUpdateComputedMenus$();
}return this.modelkit;
});

Clazz.newMeth(C$, 'getMenu$S', function (type) {
this.getPopupMenu$();
if (type.equals$O("\u0000")) {
this.popupMenu$I$I$C(this.dimScreen.width - 120, 0, "j");
return "OK";
}return (this.jmolpopup == null  ? "" : this.jmolpopup.jpiGetMenuAsString$S("Jmol version " + C$.getJmolVersion$() + "|_GET_MENU|" + type ));
});

Clazz.newMeth(C$, 'getPopupMenu$', function () {
if (this.g.disablePopupMenu) return null;
if (this.jmolpopup == null ) {
this.jmolpopup=(this.allowScripting ? this.apiPlatform.getMenuPopup$S$C(this.menuStructure, "j") : null);
if (this.jmolpopup == null  && !this.async ) {
this.g.disablePopupMenu=true;
return null;
}}return this.jmolpopup.jpiGetMenuAsObject$();
});

Clazz.newMeth(C$, 'setMenu$S$Z', function (fileOrText, isFile) {
if (isFile) $I$(2,"info$S",["Setting menu " + (fileOrText.length$() == 0 ? "to Jmol defaults" : "from file " + fileOrText)]);
if (fileOrText.length$() == 0) fileOrText=null;
 else if (isFile) fileOrText=this.getFileAsString3$S$Z$S(fileOrText, false, null);
this.getProperty$S$S$O("DATA_API", "setMenu", fileOrText);
this.sm.setCallbackFunction$S$S("menu", fileOrText);
});

Clazz.newMeth(C$, 'setStatusFrameChanged$Z$Z', function (isVib, doNotify) {
if (isVib) {
this.prevFrame=-2147483648;
}this.tm.setVibrationPeriod$F(NaN);
var firstIndex=this.am.firstFrameIndex;
var lastIndex=this.am.lastFrameIndex;
var isMovie=this.am.isMovie;
var modelIndex=this.am.cmi;
if (firstIndex == lastIndex && !isMovie ) modelIndex=firstIndex;
var frameID=this.getModelFileNumber$I(modelIndex);
var currentFrame=this.am.cmi;
var fileNo=frameID;
var modelNo=frameID % 1000000;
var firstNo=(isMovie ? firstIndex : this.getModelFileNumber$I(firstIndex));
var lastNo=(isMovie ? lastIndex : this.getModelFileNumber$I(lastIndex));
var strModelNo;
if (isMovie) {
strModelNo="" + (currentFrame + 1);
} else if (fileNo == 0) {
strModelNo=this.getModelNumberDotted$I(firstIndex);
if (firstIndex != lastIndex) strModelNo += " - " + this.getModelNumberDotted$I(lastIndex);
if ((firstNo/1000000|0) == (lastNo/1000000|0)) fileNo=firstNo;
} else {
strModelNo=this.getModelNumberDotted$I(modelIndex);
}if (fileNo != 0) fileNo=(fileNo < 1000000 ? 1 : (fileNo/1000000|0));
if (!isMovie) {
this.g.setI$S$I("_currentFileNumber", fileNo);
this.g.setI$S$I("_currentModelNumberInFile", modelNo);
}var currentMorphModel=this.am.currentMorphModel;
this.g.setI$S$I("_currentFrame", currentFrame);
this.g.setI$S$I("_morphCount", this.am.morphCount);
this.g.setF$S$F("_currentMorphFrame", currentMorphModel);
this.g.setI$S$I("_frameID", frameID);
this.g.setI$S$I("_modelIndex", modelIndex);
this.g.setO$S$O("_modelNumber", strModelNo);
this.g.setO$S$O("_modelName", (modelIndex < 0 ? "" : this.getModelName$I(modelIndex)));
var title=(modelIndex < 0 ? "" : this.ms.getModelTitle$I(modelIndex));
this.g.setO$S$O("_modelTitle", title == null  ? "" : title);
this.g.setO$S$O("_modelFile", (modelIndex < 0 ? "" : this.ms.getModelFileName$I(modelIndex)));
this.g.setO$S$O("_modelType", (modelIndex < 0 ? "" : this.ms.getModelFileType$I(modelIndex)));
if (currentFrame == this.prevFrame && currentMorphModel == this.prevMorphModel  ) return;
this.prevFrame=currentFrame;
this.prevMorphModel=currentMorphModel;
var entryName=this.getModelName$I(currentFrame);
if (isMovie) {
entryName="" + (entryName === ""  ? currentFrame + 1 : this.am.caf + 1) + ": " + entryName ;
} else {
var script="" + this.getModelNumberDotted$I(currentFrame);
if (!entryName.equals$O(script)) entryName=script + ": " + entryName ;
}this.sm.setStatusFrameChanged$I$I$I$I$I$F$S(fileNo, modelNo, (this.am.animationDirection < 0 ? -firstNo : firstNo), (this.am.currentDirection < 0 ? -lastNo : lastNo), currentFrame, currentMorphModel, entryName);
if (p$1.doHaveJDX.apply(this, [])) this.getJSV$().setModel$I(modelIndex);
if (C$.isJS && this.isApplet ) p$1.updateJSView$I$I.apply(this, [modelIndex, -1]);
});

Clazz.newMeth(C$, 'doHaveJDX', function () {
return (this.haveJDX || (this.haveJDX=this.getBooleanProperty$S("_JSpecView".toLowerCase$())) );
}, p$1);

Clazz.newMeth(C$, 'getJSV$', function () {
if (this.jsv == null ) {
this.jsv=$I$(13).getOption$S$org_jmol_viewer_Viewer$S("jsv.JSpecView", this, "script");
this.jsv.setViewer$org_jmol_viewer_Viewer(this);
}return this.jsv;
});

Clazz.newMeth(C$, 'getJDXBaseModelIndex$I', function (modelIndex) {
if (!p$1.doHaveJDX.apply(this, [])) return modelIndex;
return this.getJSV$().getBaseModelIndex$I(modelIndex);
});

Clazz.newMeth(C$, 'getJspecViewProperties$O', function (myParam) {
var o=this.sm.getJspecViewProperties$S("" + myParam);
if (o != null ) this.haveJDX=true;
return o;
});

Clazz.newMeth(C$, 'scriptEcho$S', function (strEcho) {
if (!$I$(2).isActiveLevel$I(4)) return;
if (C$.isJS) System.out.println$S(strEcho);
this.sm.setScriptEcho$S$Z(strEcho, p$1.isScriptQueued.apply(this, []));
if (this.listCommands && strEcho != null   && strEcho.indexOf$S("$[") == 0 ) $I$(2).info$S(strEcho);
});

Clazz.newMeth(C$, 'isScriptQueued', function () {
return this.scm != null  && this.scm.isScriptQueued$() ;
}, p$1);

Clazz.newMeth(C$, 'notifyError$S$S$S', function (errType, errMsg, errMsgUntranslated) {
this.g.setO$S$O("_errormessage", errMsgUntranslated);
this.sm.notifyError$S$S$S(errType, errMsg, errMsgUntranslated);
});

Clazz.newMeth(C$, 'jsEval$S', function (strEval) {
return "" + this.sm.jsEval$S(strEval);
});

Clazz.newMeth(C$, 'jsEvalSV$S', function (strEval) {
return $I$(44,"getVariable$O",[C$.isJS ? this.sm.jsEval$S(strEval) : this.jsEval$S(strEval)]);
});

Clazz.newMeth(C$, 'setFileLoadStatus$org_jmol_c_FIL$S$S$S$S$Boolean', function (ptLoad, fullPathName, fileName, modelName, strError, isAsync) {
this.setErrorMessage$S$S(strError, null);
this.g.setI$S$I("_loadPoint", ptLoad.getCode$());
var doCallback=(ptLoad !== $I$(40).CREATING_MODELSET );
if (doCallback) this.setStatusFrameChanged$Z$Z(false, false);
this.sm.setFileLoadStatus$S$S$S$S$I$Z$Boolean(fullPathName, fileName, modelName, strError, ptLoad.getCode$(), doCallback, isAsync);
if (doCallback) {
if (p$1.doHaveJDX.apply(this, [])) this.getJSV$().setModel$I(this.am.cmi);
if (C$.isJS && this.isApplet ) p$1.updateJSView$I$I.apply(this, [this.am.cmi, -2]);
}}, p$1);

Clazz.newMeth(C$, 'getZapName$', function () {
return (this.g.modelKitMode ? "Jmol Model Kit" : "zapped");
});

Clazz.newMeth(C$, 'setStatusMeasuring$S$I$S$F', function (status, intInfo, strMeasure, value) {
this.sm.setStatusMeasuring$S$I$S$F(status, intInfo, strMeasure, value);
});

Clazz.newMeth(C$, 'notifyMinimizationStatus$', function () {
var step=this.getP$S("_minimizationStep");
var ff=this.getP$S("_minimizationForceField");
this.sm.notifyMinimizationStatus$S$Integer$Float$Float$S(this.getP$S("_minimizationStatus"), Clazz.instanceOf(step, "java.lang.String") ? Integer.valueOf$I(0) : step, this.getP$S("_minimizationEnergy"), (step.toString().equals$O("0") ? Float.valueOf$F(0) : this.getP$S("_minimizationEnergyDiff")), ff);
});

Clazz.newMeth(C$, 'setStatusAtomPicked$I$S$java_util_Map$Z', function (atomIndex, info, map, andSelect) {
if (andSelect) this.setSelectionSet$javajs_util_BS($I$(31).newAndSetBit$I(atomIndex));
if (info == null ) {
info=this.g.pickLabel;
info=(info.length$() == 0 ? p$1.getAtomInfoXYZ$I$Z.apply(this, [atomIndex, this.g.messageStyleChime]) : this.ms.getAtomInfo$I$S$javajs_util_P3(atomIndex, info, this.ptTemp));
}this.setPicked$I$Z(atomIndex, false);
if (atomIndex < 0) {
var m=this.getPendingMeasurement$();
if (m != null ) info=info.substring$I$I(0, info.length$() - 1) + ",\"" + m.getString$() + "\"]" ;
}this.g.setO$S$O("_pickinfo", info);
this.sm.setStatusAtomPicked$I$S$java_util_Map(atomIndex, info, map);
if (atomIndex < 0) return;
var syncMode=this.sm.getSyncMode$();
if (syncMode == 1 && p$1.doHaveJDX.apply(this, []) ) this.getJSV$().atomPicked$I(atomIndex);
if (C$.isJS && this.isApplet ) p$1.updateJSView$I$I.apply(this, [this.ms.at[atomIndex].mi, atomIndex]);
});

Clazz.newMeth(C$, 'setStatusDragDropped$I$I$I$S', function (mode, x, y, fileName) {
if (mode == 0) {
this.g.setO$S$O("_fileDropped", fileName);
this.g.setUserVariable$S$org_jmol_script_SV("doDrop", $I$(44).vT);
}var handled=this.sm.setStatusDragDropped$I$I$I$S(mode, x, y, fileName);
return (!handled || this.getP$S("doDrop").toString().equals$O("true") );
});

Clazz.newMeth(C$, 'setStatusResized$I$I', function (width, height) {
this.sm.setStatusResized$I$I(width, height);
});

Clazz.newMeth(C$, 'scriptStatus$S', function (strStatus) {
this.setScriptStatus$S$S$I$S(strStatus, "", 0, null);
});

Clazz.newMeth(C$, 'scriptStatusMsg$S$S', function (strStatus, statusMessage) {
this.setScriptStatus$S$S$I$S(strStatus, statusMessage, 0, null);
});

Clazz.newMeth(C$, 'setScriptStatus$S$S$I$S', function (strStatus, statusMessage, msWalltime, strErrorMessageUntranslated) {
this.sm.setScriptStatus$S$S$I$S(strStatus, statusMessage, msWalltime, strErrorMessageUntranslated);
});

Clazz.newMeth(C$, 'showUrl$S', function (urlString) {
if (urlString == null ) return;
if (urlString.indexOf$S(":") < 0) {
var base=this.fm.getAppletDocumentBase$();
if (base === "" ) base=this.fm.getFullPathName$Z(false);
if (base.indexOf$S("/") >= 0) {
base=base.substring$I$I(0, base.lastIndexOf$S("/") + 1);
} else if (base.indexOf$S("\\") >= 0) {
base=base.substring$I$I(0, base.lastIndexOf$S("\\") + 1);
}urlString=base + urlString;
}$I$(2).info$S("showUrl:" + urlString);
this.sm.showUrl$S(urlString);
});

Clazz.newMeth(C$, 'setMeshCreator$O', function (meshCreator) {
this.shm.loadShape$I(24);
this.setShapeProperty$I$S$O(24, "meshCreator", meshCreator);
});

Clazz.newMeth(C$, 'showConsole$Z', function (showConsole) {
if (!this.haveDisplay) return;
try {
if (this.appConsole == null  && showConsole ) this.getConsole$();
this.appConsole.setVisible$Z(true);
} catch (e) {
}
});

Clazz.newMeth(C$, 'getConsole$', function () {
this.getProperty$S$S$O("DATA_API", "getAppConsole", Boolean.TRUE);
return this.appConsole;
});

Clazz.newMeth(C$, 'getParameter$S', function (key) {
return this.getP$S(key);
});

Clazz.newMeth(C$, 'getP$S', function (key) {
return this.g.getParameter$S$Z(key, true);
});

Clazz.newMeth(C$, 'getPOrNull$S', function (key) {
return this.g.getParameter$S$Z(key, false);
});

Clazz.newMeth(C$, 'unsetProperty$S', function (key) {
key=key.toLowerCase$();
if (key.equals$O("all") || key.equals$O("variables") ) this.fm.setPathForAllFiles$S("");
this.g.unsetUserVariable$S(key);
});

Clazz.newMeth(C$, 'notifyStatusReady$Z', function (isReady) {
System.out.println$S("Jmol applet " + this.fullName + (isReady ? " ready" : " destroyed") );
if (!isReady) this.dispose$();
this.sm.setStatusAppletReady$S$Z(this.fullName, isReady);
});

Clazz.newMeth(C$, 'getBooleanProperty$S', function (key) {
key=key.toLowerCase$();
if (this.g.htBooleanParameterFlags.containsKey$O(key)) return this.g.htBooleanParameterFlags.get$O(key).booleanValue$();
if (key.endsWith$S("p!")) {
if (this.acm == null ) return false;
var s=this.acm.getPickingState$().toLowerCase$();
key=key.substring$I$I(0, key.length$() - 2) + ";";
return (s.indexOf$S(key) >= 0);
}if (key.equalsIgnoreCase$S("executionPaused")) return (this.eval != null  && this.eval.isPaused$() );
if (key.equalsIgnoreCase$S("executionStepping")) return (this.eval != null  && this.eval.isStepping$() );
if (key.equalsIgnoreCase$S("haveBFactors")) return (this.ms.getBFactors$() != null );
if (key.equalsIgnoreCase$S("colorRasmol")) return this.cm.isDefaultColorRasmol;
if (key.equalsIgnoreCase$S("frank")) return this.getShowFrank$();
if (key.equalsIgnoreCase$S("spinOn")) return this.tm.spinOn;
if (key.equalsIgnoreCase$S("isNavigating")) return this.tm.isNavigating$();
if (key.equalsIgnoreCase$S("showSelections")) return this.selectionHalosEnabled;
if (this.g.htUserVariables.containsKey$O(key)) {
var t=this.g.getUserVariable$S(key);
if (t.tok == 1073742335) return true;
if (t.tok == 1073742334) return false;
}$I$(2,"error$S",["vwr.getBooleanProperty(" + key + ") - unrecognized" ]);
return false;
});

Clazz.newMeth(C$, 'getInt$I', function (tok) {
switch (tok) {
case 553648132:
return this.am.animationFps;
case 553648141:
return this.g.dotDensity;
case 553648142:
return this.g.dotScale;
case 553648144:
return this.g.helixStep;
case 553648147:
return this.g.infoFontSize;
case 553648150:
return this.g.meshScale;
case 553648153:
return this.g.minPixelSelRadius;
case 553648154:
return this.g.percentVdwAtom;
case 553648157:
return this.g.pickingSpinRate;
case 553648166:
return this.g.ribbonAspectRatio;
case 536870922:
return this.g.scriptDelay;
case 553648152:
return this.g.minimizationMaxAtoms;
case 553648170:
return this.g.smallMoleculeMaxAtoms;
case 553648184:
return this.g.strutSpacing;
case 553648185:
return this.g.vectorTrail;
}
$I$(2,"error$S",["viewer.getInt(" + $I$(36).nameOf$I(tok) + ") - not listed" ]);
return 0;
});

Clazz.newMeth(C$, 'getDelayMaximumMs$', function () {
return (this.haveDisplay ? this.g.delayMaximumMs : 1);
});

Clazz.newMeth(C$, 'getHermiteLevel$', function () {
return (this.tm.spinOn && this.g.hermiteLevel > 0  ? 0 : this.g.hermiteLevel);
});

Clazz.newMeth(C$, 'getHoverDelay$', function () {
return (this.g.modelKitMode ? 20 : this.g.hoverDelayMs);
});

Clazz.newMeth(C$, 'getBoolean$I', function (tok) {
switch (tok) {
case 603979891:
return this.g.nboCharges;
case 603979856:
return this.g.hiddenLinesDashed;
case 1073742086:
return this.ms.getMSInfoB$S("isPDB");
case 603979802:
return this.g.autoplayMovie;
case 603979797:
return !this.headless && this.g.allowAudio ;
case 603979780:
return this.g.allowGestures;
case 603979784:
return this.g.allowMultiTouch;
case 603979785:
return this.g.allowRotateSelected;
case 603979792:
return this.g.appendNew;
case 603979794:
return this.g.applySymmetryToBonds;
case 603979796:
return this.g.atomPicking;
case 603979798:
return this.g.autoBond;
case 603979800:
return this.g.autoFps;
case 603979806:
return this.g.axesOrientationRasmol;
case 603979811:
return this.g.cartoonSteps;
case 603979810:
return this.g.cartoonBlocks;
case 603979812:
return this.g.bondModeOr;
case 603979816:
return this.g.cartoonBaseEdges;
case 603979817:
return this.g.cartoonFancy;
case 603979818:
return this.g.cartoonLadders;
case 603979819:
return this.g.cartoonRibose;
case 603979820:
return this.g.cartoonRockets;
case 603979822:
return this.g.chainCaseSensitive || this.chainCaseSpecified ;
case 603979823:
return this.g.cipRule6Full;
case 603979825:
return this.g.debugScript;
case 603979826:
return this.g.defaultStructureDSSP;
case 603979827:
return this.g.disablePopupMenu;
case 603979828:
return this.g.displayCellParameters;
case 603979830:
return this.g.dotSurface;
case 603979829:
return this.g.dotsSelectedOnly;
case 603979833:
return this.g.drawPicking;
case 603979844:
return this.g.fontCaching;
case 603979845:
return this.g.fontScaling;
case 603979846:
return this.g.forceAutoBond;
case 603979848:
return false;
case 603979850:
return this.g.greyscaleRendering;
case 603979852:
return this.g.hbondsBackbone;
case 603979853:
return this.g.hbondsRasmol;
case 603979854:
return this.g.hbondsSolid;
case 1612709894:
return this.g.rasmolHeteroSetting;
case 603979858:
return this.g.hideNameInPopup;
case 603979864:
return this.g.highResolutionFlag;
case 1612709900:
return this.g.rasmolHydrogenSetting;
case 603979867:
return this.g.isosurfaceKey;
case 603979869:
return this.g.jmolInJSpecView;
case 603979870:
return this.g.justifyMeasurements;
case 603979872:
return this.g.legacyAutoBonding;
case 603979873:
return this.g.legacyHAddition;
case 603979874:
return this.g.legacyJavaFloat;
case 603979876:
return this.g.logGestures;
case 603979877:
return this.g.measureAllModels;
case 603979878:
return this.g.measurementLabels;
case 603979879:
return this.g.messageStyleChime;
case 603983903:
return this.g.modelKitMode;
case 603979886:
return this.g.multipleBondBananas;
case 603979889:
return this.g.navigationMode;
case 603979890:
return this.g.navigationPeriodic;
case 603979893:
return this.g.partialDots;
case 603979896:
return this.g.pdbSequential;
case 603979898:
return this.g.preserveState;
case 603979900:
return this.refreshing;
case 603979901:
return this.g.ribbonBorder;
case 603979902:
return this.g.rocketBarrels;
case 603979892:
return this.g.noDelay;
case 603979906:
return this.g.selectAllModels;
case 603979920:
return this.g.showHiddenSelectionHalos;
case 603979922:
return this.g.showHydrogens;
case 603979926:
return this.g.showMeasurements;
case 603979927:
return this.g.showModVecs;
case 603979928:
return this.g.showMultipleBonds;
case 603979934:
return this.g.showTiming;
case 603979937:
return this.g.showUnitCellDetails;
case 603979939:
return this.g.slabByAtom;
case 603979940:
return this.g.slabByMolecule;
case 603979944:
return this.g.smartAromatic;
case 1612709912:
return this.g.solventOn;
case 603979952:
return this.g.ssbondsBackbone;
case 603979955:
return this.g.strutsMultiple;
case 603979960:
return this.g.testFlag1;
case 603979962:
return this.g.testFlag2;
case 603979964:
return this.g.testFlag3;
case 603979965:
return this.g.testFlag4;
case 603979966:
return this.g.traceAlpha;
case 603979967:
return this.g.translucent;
case 603979968:
return this.g.twistedSheets;
case 603979972:
return this.g.vectorsCentered;
case 603979973:
return this.g.vectorSymmetry;
case 603979975:
return this.g.waitForMoveTo;
case 603979978:
return this.g.zeroBasedXyzRasmol;
}
$I$(2,"error$S",["viewer.getBoolean(" + $I$(36).nameOf$I(tok) + ") - not listed" ]);
return false;
});

Clazz.newMeth(C$, 'allowEmbeddedScripts$', function () {
return (this.g.allowEmbeddedScripts && !this.isPreviewOnly );
});

Clazz.newMeth(C$, 'getDragSelected$', function () {
return (this.g.dragSelected && !this.g.modelKitMode );
});

Clazz.newMeth(C$, 'getBondsPickable$', function () {
return (this.g.bondPicking || this.g.modelKitMode && this.getModelkitProperty$O("isMolecular") === Boolean.TRUE   );
});

Clazz.newMeth(C$, 'useMinimizationThread$', function () {
return (this.g.useMinimizationThread && !this.autoExit );
});

Clazz.newMeth(C$, 'getFloat$I', function (tok) {
switch (tok) {
case 1140850689:
return this.g.particleRadius;
case 570425345:
return this.g.axesOffset;
case 570425346:
return this.g.axesScale;
case 570425348:
return this.g.bondTolerance;
case 570425354:
return this.g.defaultTranslucent;
case 570425352:
return this.g.defaultDrawArrowScale;
case 570425355:
return this.g.dipoleScale;
case 570425356:
return this.g.drawFontSize;
case 570425358:
return this.g.exportScale;
case 570425360:
return this.g.hbondsAngleMinimum;
case 570425361:
return this.g.hbondsDistanceMaximum;
case 570425363:
return this.g.loadAtomDataTolerance;
case 570425364:
return this.g.minBondDistance;
case 1275072532:
return this.g.modulationScale;
case 570425370:
return this.g.multipleBondSpacing;
case 570425369:
return this.g.multipleBondRadiusFactor;
case 570425374:
return this.g.navigationSpeed;
case 570425382:
return this.g.pointGroupDistanceTolerance;
case 570425384:
return this.g.pointGroupLinearTolerance;
case 570425388:
return this.tm.modelRadius;
case 570425392:
return this.g.sheetSmoothing;
case 570425394:
return this.g.solventProbeRadius;
case 570425403:
return this.g.starWidth;
case 570425406:
return this.g.strutDefaultRadius;
case 570425408:
return this.g.strutLengthMaximum;
case 1648361473:
return this.g.vectorScale;
case 570425412:
return this.g.vibrationPeriod;
case 570425347:
return this.g.cartoonBlockHeight;
}
$I$(2,"error$S",["viewer.getFloat(" + $I$(36).nameOf$I(tok) + ") - not listed" ]);
return 0;
});

Clazz.newMeth(C$, 'setStringProperty$S$S', function (key, value) {
if (value == null  || key == null   || key.length$() == 0 ) return;
if (key.charAt$I(0) == "_") {
this.g.setO$S$O(key, value);
return;
}var tok=$I$(36).getTokFromName$S(key);
switch ($I$(36).getParamType$I(tok)) {
case 603979776:
p$1.setBooleanPropertyTok$S$I$Z.apply(this, [key, tok, $I$(44).newV$I$O(4, value).asBoolean$()]);
break;
case 553648128:
p$1.setIntPropertyTok$S$I$I.apply(this, [key, tok, $I$(44).newV$I$O(4, value).asInt$()]);
break;
case 570425344:
p$1.setFloatPropertyTok$S$I$F.apply(this, [key, tok, $I$(11).parseFloat$S(value)]);
break;
default:
p$1.setStringPropertyTok$S$I$S.apply(this, [key, tok, value]);
}
});

Clazz.newMeth(C$, 'setStringPropertyTok$S$I$S', function (key, tok, value) {
switch (tok) {
case 545259567:
this.g.macroDirectory=value=(value == null  || value.length$() == 0  ? "https://chemapps.stolaf.edu/jmol/macros" : value);
this.macros=null;
break;
case 545259570:
this.g.nihResolverFormat=value;
break;
case 545259521:
p$1.setAnimationMode$S.apply(this, [value]);
return;
case 545259569:
this.g.nmrPredictFormat=value;
break;
case 545259548:
this.g.defaultDropScript=value;
break;
case 545259572:
value=this.fm.setPathForAllFiles$S(value);
break;
case 545259558:
this.setUnits$S$Z(value, false);
return;
case 545259560:
this.g.forceField=value=("UFF".equalsIgnoreCase$S(value) ? "UFF" : "MMFF");
this.minimizer=null;
break;
case 545259571:
this.g.nmrUrlFormat=value;
break;
case 545259568:
this.setUnits$S$Z(value, true);
return;
case 545259565:
this.g.pdbLoadLigandFormat=value;
break;
case 545259543:
this.g.defaultLabelPDB=value;
break;
case 545259544:
this.g.defaultLabelXYZ=value;
break;
case 545259549:
this.g.defaultLoadFilter=value;
break;
case 545259566:
value=p$1.getOutputManager.apply(this, []).setLogFile$S(value);
if (value == null ) return;
break;
case 545259559:
break;
case 545259524:
this.g.atomTypes=value;
break;
case 545259538:
break;
case 545259576:
this.g.pickLabel=value;
break;
case 545259580:
if (value.length$() == 2 && value.startsWith$S("R") ) this.g.quaternionFrame=value.substring$I$I(0, 2);
 else this.g.quaternionFrame="" + (value.toLowerCase$() + "p").charAt$I(0);
if (!$I$(11).isOneOf$S$S(this.g.quaternionFrame, "RC;RP;a;b;c;n;p;q;x;")) this.g.quaternionFrame="p";
this.ms.haveStraightness=false;
break;
case 545259555:
this.setVdwStr$S(value);
return;
case 545259563:
Clazz.new_($I$(28,1).c$$org_jmol_viewer_Viewer$S,[this, value]);
var language=$I$(28).getLanguage$();
this.modelkit=null;
if (this.jmolpopup != null ) {
this.jmolpopup.jpiDispose$();
this.jmolpopup=null;
this.getPopupMenu$();
}this.sm.setCallbackFunction$S$S("language", language);
value=$I$(28).getLanguage$();
break;
case 545259564:
this.g.loadFormat=value;
break;
case 545259534:
this.setObjectColor$S$S("background", value);
return;
case 545259528:
this.setObjectColor$S$S("axis1", value);
return;
case 545259530:
this.setObjectColor$S$S("axis2", value);
return;
case 545259532:
this.setObjectColor$S$S("axis3", value);
return;
case 545259536:
this.setObjectColor$S$S("boundbox", value);
return;
case 545259586:
this.setObjectColor$S$S("unitcell", value);
return;
case 545259578:
this.setPropertyColorScheme$S$Z$Z(value, false, false);
break;
case 545259562:
this.shm.loadShape$I(35);
this.setShapeProperty$I$S$O(35, "atomLabel", value);
break;
case 545259547:
this.g.defaultDistanceLabel=value;
break;
case 545259542:
this.g.defaultAngleLabel=value;
break;
case 545259554:
this.g.defaultTorsionLabel=value;
break;
case 545259550:
this.g.defaultLoadScript=value;
break;
case 545259522:
this.fm.setAppletProxy$S(value);
break;
case 545259546:
if (value == null ) value="";
value=value.replace$C$C("\\", "/");
this.g.defaultDirectory=value;
break;
case 545259561:
this.g.helpPath=value;
break;
case 545259552:
if (!value.equalsIgnoreCase$S("RasMol") && !value.equalsIgnoreCase$S("PyMOL") ) value="Jmol";
p$1.setDefaultsType$S.apply(this, [value]);
break;
case 545259545:
p$1.setDefaultColors$Z.apply(this, [value.equalsIgnoreCase$S("rasmol")]);
return;
case 545259573:
this.setPickingMode$S$I(value, 0);
return;
case 545259574:
this.setPickingStyle$S$I(value, 0);
return;
case 545259540:
break;
default:
if (key.toLowerCase$().endsWith$S("callback")) {
this.sm.setCallbackFunction$S$S(key, (value.length$() == 0 || value.equalsIgnoreCase$S("none")  ? null : value));
break;
}if (!this.g.htNonbooleanParameterValues.containsKey$O(key.toLowerCase$())) {
this.g.setUserVariable$S$org_jmol_script_SV(key, $I$(44).newV$I$O(4, value));
return;
}break;
}
this.g.setO$S$O(key, value);
}, p$1);

Clazz.newMeth(C$, 'setFloatProperty$S$F', function (key, value) {
if (Float.isNaN$F(value) || key == null   || key.length$() == 0 ) return;
if (key.charAt$I(0) == "_") {
this.g.setF$S$F(key, value);
return;
}var tok=$I$(36).getTokFromName$S(key);
switch ($I$(36).getParamType$I(tok)) {
case 545259520:
p$1.setStringPropertyTok$S$I$S.apply(this, [key, tok, "" + new Float(value).toString()]);
break;
case 603979776:
p$1.setBooleanPropertyTok$S$I$Z.apply(this, [key, tok, value != 0 ]);
break;
case 553648128:
p$1.setIntPropertyTok$S$I$I.apply(this, [key, tok, (value|0)]);
break;
default:
p$1.setFloatPropertyTok$S$I$F.apply(this, [key, tok, value]);
}
});

Clazz.newMeth(C$, 'setFloatPropertyTok$S$I$F', function (key, tok, value) {
switch (tok) {
case 570425347:
this.g.cartoonBlockHeight=value;
break;
case 570425366:
this.ms.setModulation$javajs_util_BS$Z$javajs_util_P3$Z(null, false, null, false);
this.g.modulationScale=value=Math.max(0.1, value);
this.ms.setModulation$javajs_util_BS$Z$javajs_util_P3$Z(null, true, null, false);
break;
case 570425381:
this.g.particleRadius=Math.abs(value);
break;
case 570425356:
this.g.drawFontSize=value;
break;
case 570425358:
this.g.exportScale=value;
break;
case 570425403:
this.g.starWidth=value;
break;
case 570425369:
this.g.multipleBondRadiusFactor=value;
break;
case 570425370:
this.g.multipleBondSpacing=value;
break;
case 570425393:
this.tm.setSlabRange$F(value);
break;
case 570425365:
this.g.minimizationCriterion=value;
break;
case 570425359:
if (this.haveDisplay) this.acm.setGestureSwipeFactor$F(value);
break;
case 570425367:
if (this.haveDisplay) this.acm.setMouseDragFactor$F(value);
break;
case 570425368:
if (this.haveDisplay) this.acm.setMouseWheelFactor$F(value);
break;
case 570425408:
this.g.strutLengthMaximum=value;
break;
case 570425406:
this.g.strutDefaultRadius=value;
break;
case 570425376:
this.setSpin$S$I("X", (value|0));
break;
case 570425378:
this.setSpin$S$I("Y", (value|0));
break;
case 570425380:
this.setSpin$S$I("Z", (value|0));
break;
case 570425371:
if (Float.isNaN$F(value)) return;
this.setSpin$S$I("FPS", (value|0));
break;
case 570425363:
this.g.loadAtomDataTolerance=value;
break;
case 570425360:
this.g.hbondsAngleMinimum=value;
break;
case 570425361:
this.g.hbondsDistanceMaximum=value;
break;
case 570425382:
this.g.pointGroupDistanceTolerance=value;
break;
case 570425384:
this.g.pointGroupLinearTolerance=value;
break;
case 570425357:
this.g.ellipsoidAxisDiameter=value;
break;
case 570425398:
this.setSpin$S$I("x", (value|0));
break;
case 570425400:
this.setSpin$S$I("y", (value|0));
break;
case 570425402:
this.setSpin$S$I("z", (value|0));
break;
case 570425396:
this.setSpin$S$I("fps", (value|0));
break;
case 570425352:
this.g.defaultDrawArrowScale=value;
break;
case 570425354:
this.g.defaultTranslucent=value;
break;
case 570425345:
p$1.setAxesScale$I$F.apply(this, [tok, value]);
break;
case 570425346:
p$1.setAxesScale$I$F.apply(this, [tok, value]);
break;
case 570425416:
this.tm.visualRangeAngstroms=value;
this.refresh$I$S(1, "set visualRange");
break;
case 570425372:
this.setNavigationDepthPercent$F(value);
break;
case 570425374:
this.g.navigationSpeed=value;
break;
case 570425373:
this.tm.setNavigationSlabOffsetPercent$F(value);
break;
case 570425350:
this.tm.setCameraDepthPercent$F$Z(value, false);
this.refresh$I$S(1, "set cameraDepth");
return;
case 570425388:
this.setRotationRadius$F$Z(value, true);
return;
case 570425362:
this.g.hoverDelayMs=((value * 1000)|0);
break;
case 570425392:
this.g.sheetSmoothing=value;
break;
case 570425355:
value=C$.checkFloatRange$F$F$F(value, -10, 10);
this.g.dipoleScale=value;
break;
case 570425404:
this.tm.setStereoDegrees$F(value);
break;
case 1648361473:
this.setVectorScale$F(value);
return;
case 570425412:
this.setVibrationPeriod$F(value);
return;
case 570425414:
this.setVibrationScale$F(value);
return;
case 570425348:
this.setBondTolerance$F(value);
return;
case 570425364:
this.setMinBondDistance$F(value);
return;
case 570425390:
this.tm.setScaleAngstromsPerInch$F(value);
break;
case 570425394:
value=C$.checkFloatRange$F$F$F(value, 0, 10);
this.g.solventProbeRadius=value;
break;
default:
if (!this.g.htNonbooleanParameterValues.containsKey$O(key.toLowerCase$())) {
this.g.setUserVariable$S$org_jmol_script_SV(key, $I$(44).newF$F(value));
return;
}}
this.g.setF$S$F(key, value);
}, p$1);

Clazz.newMeth(C$, 'setIntProperty$S$I', function (key, value) {
if (value == -2147483648 || key == null   || key.length$() == 0 ) return;
if (key.charAt$I(0) == "_") {
this.g.setI$S$I(key, value);
return;
}var tok=$I$(36).getTokFromName$S(key);
switch ($I$(36).getParamType$I(tok)) {
case 545259520:
p$1.setStringPropertyTok$S$I$S.apply(this, [key, tok, "" + value]);
break;
case 603979776:
p$1.setBooleanPropertyTok$S$I$Z.apply(this, [key, tok, value != 0]);
break;
case 570425344:
p$1.setFloatPropertyTok$S$I$F.apply(this, [key, tok, value]);
break;
default:
p$1.setIntPropertyTok$S$I$I.apply(this, [key, tok, value]);
}
});

Clazz.newMeth(C$, 'setIntPropertyTok$S$I$I', function (key, tok, value) {
switch (tok) {
case 553648152:
this.g.minimizationMaxAtoms=value;
break;
case 553648147:
this.g.infoFontSize=Math.max(0, value);
break;
case 553648167:
case 553648146:
case 553648168:
value=this.eval.setStatic$I$I(tok, value);
break;
case 553648185:
this.g.vectorTrail=value;
break;
case 553648138:
value=(value == 0 ? 0 : 1);
this.g.bondingVersion=$I$(29).bondingVersion=value;
break;
case 553648137:
this.gdata.setCelPower$I(value);
break;
case 553648129:
this.gdata.setAmbientOcclusion$I(value);
break;
case 553648158:
this.g.platformSpeed=Math.min(Math.max(value, 0), 10);
break;
case 553648150:
this.g.meshScale=value;
break;
case 553648153:
this.g.minPixelSelRadius=value;
break;
case 553648148:
this.g.isosurfacePropertySmoothingPower=value;
break;
case 553648165:
this.g.repaintWaitMs=value;
break;
case 553648170:
this.g.smallMoleculeMaxAtoms=value;
break;
case 553648151:
this.g.minimizationSteps=value;
break;
case 553648184:
this.g.strutSpacing=value;
break;
case 553648156:
value=C$.checkIntRange$I$I$I(value, 0, 1000);
this.gdata.setPhongExponent$I(value);
break;
case 553648144:
this.g.helixStep=value;
this.ms.haveStraightness=false;
break;
case 553648142:
this.g.dotScale=value;
break;
case 553648141:
this.g.dotDensity=value;
break;
case 553648139:
this.g.delayMaximumMs=value;
break;
case 553648149:
$I$(2).setLogLevel$I(value);
$I$(2).info$S("logging level set to " + value);
this.g.setI$S$I("logLevel", value);
if (this.eval != null ) this.eval.setDebugging$();
return;
case 553648134:
this.setAxesMode$I(value == 2 ? 603979808 : value == 1 ? 603979804 : 603979809);
return;
case 553648178:
p$1.setStrandCount$I$I.apply(this, [0, value]);
return;
case 553648182:
p$1.setStrandCount$I$I.apply(this, [12, value]);
return;
case 553648180:
p$1.setStrandCount$I$I.apply(this, [13, value]);
return;
case 553648155:
return;
case 536870922:
this.g.scriptDelay=value;
break;
case 553648176:
if (value < 0) value=C$.checkIntRange$I$I$I(value, -10, -1);
 else value=C$.checkIntRange$I$I$I(value, 0, 100);
this.gdata.setSpecularPower$I(value);
break;
case 553648172:
value=C$.checkIntRange$I$I$I(-value, -10, -1);
this.gdata.setSpecularPower$I(value);
break;
case 553648136:
this.setMarBond$H(($s$[0] = value, $s$[0]));
return;
case 536870924:
p$1.setBooleanPropertyTok$S$I$Z.apply(this, [key, tok, value == 1]);
return;
case 553648174:
value=C$.checkIntRange$I$I$I(value, 0, 100);
this.gdata.setSpecularPercent$I(value);
break;
case 553648140:
value=C$.checkIntRange$I$I$I(value, 0, 100);
this.gdata.setDiffusePercent$I(value);
break;
case 553648130:
value=C$.checkIntRange$I$I$I(value, 0, 100);
this.gdata.setAmbientPercent$I(value);
break;
case 553648186:
this.tm.zDepthToPercent$I(value);
break;
case 553648188:
this.tm.zSlabToPercent$I(value);
break;
case 554176526:
this.tm.depthToPercent$I(value);
break;
case 554176565:
this.tm.slabToPercent$I(value);
break;
case 553648190:
this.g.zShadePower=value=Math.max(value, 0);
break;
case 553648166:
this.g.ribbonAspectRatio=value;
break;
case 553648157:
this.g.pickingSpinRate=(value < 1 ? 1 : value);
break;
case 553648132:
this.setAnimationFps$I(value);
return;
case 553648154:
this.setPercentVdwAtom$I(value);
break;
case 553648145:
this.g.hermiteLevel=value;
break;
case 553648143:
case 553648160:
case 553648159:
case 553648162:
case 553648164:
break;
default:
if (!this.g.htNonbooleanParameterValues.containsKey$O(key)) {
this.g.setUserVariable$S$org_jmol_script_SV(key, $I$(44).newI$I(value));
return;
}}
this.g.setI$S$I(key, value);
}, p$1);

Clazz.newMeth(C$, 'checkIntRange$I$I$I', function (value, min, max) {
return (value < min ? min : value > max ? max : value);
}, 1);

Clazz.newMeth(C$, 'checkFloatRange$F$F$F', function (value, min, max) {
return (value < min  ? min : value > max  ? max : value);
}, 1);

Clazz.newMeth(C$, 'setBooleanProperty$S$Z', function (key, value) {
if (key == null  || key.length$() == 0 ) return;
if (key.charAt$I(0) == "_") {
this.g.setB$S$Z(key, value);
return;
}var tok=$I$(36).getTokFromName$S(key);
switch ($I$(36).getParamType$I(tok)) {
case 545259520:
p$1.setStringPropertyTok$S$I$S.apply(this, [key, tok, ""]);
break;
case 553648128:
p$1.setIntPropertyTok$S$I$I.apply(this, [key, tok, value ? 1 : 0]);
break;
case 570425344:
p$1.setFloatPropertyTok$S$I$F.apply(this, [key, tok, value ? 1 : 0]);
break;
default:
p$1.setBooleanPropertyTok$S$I$Z.apply(this, [key, tok, value]);
}
});

Clazz.newMeth(C$, 'setBooleanPropertyTok$S$I$Z', function (key, tok, value) {
var doRepaint=true;
switch (tok) {
case 603979823:
this.g.cipRule6Full=value;
break;
case 603979802:
this.g.autoplayMovie=value;
break;
case 603979797:
value=false;
this.g.allowAudio=value;
break;
case 603979892:
this.g.noDelay=value;
break;
case 603979891:
this.g.nboCharges=value;
break;
case 603979856:
this.g.hiddenLinesDashed=value;
break;
case 603979886:
this.g.multipleBondBananas=value;
break;
case 603979884:
this.g.modulateOccupancy=value;
break;
case 603979874:
this.g.legacyJavaFloat=value;
break;
case 603979927:
this.g.showModVecs=value;
break;
case 603979937:
this.g.showUnitCellDetails=value;
break;
case 603979848:
doRepaint=false;
break;
case 603979972:
this.g.vectorsCentered=value;
break;
case 603979810:
this.g.cartoonBlocks=value;
break;
case 603979811:
this.g.cartoonSteps=value;
break;
case 603979819:
this.g.cartoonRibose=value;
break;
case 603979837:
this.g.ellipsoidArrows=value;
break;
case 603979967:
this.g.translucent=value;
break;
case 603979818:
this.g.cartoonLadders=value;
break;
case 603979968:
var b=this.g.twistedSheets;
this.g.twistedSheets=value;
if (b != value ) this.checkCoordinatesChanged$();
break;
case 603979821:
this.gdata.setCel$Z(value);
break;
case 603979817:
this.g.cartoonFancy=value;
break;
case 603979934:
this.g.showTiming=value;
break;
case 603979973:
this.g.vectorSymmetry=value;
break;
case 603979867:
this.g.isosurfaceKey=value;
break;
case 603979893:
this.g.partialDots=value;
break;
case 603979872:
this.g.legacyAutoBonding=value;
break;
case 603979826:
this.g.defaultStructureDSSP=value;
break;
case 603979834:
this.g.dsspCalcHydrogen=value;
break;
case 603979782:
this.g.allowModelkit=value;
if (!value) p$1.setModelKitMode$Z.apply(this, [false]);
break;
case 603983903:
p$1.setModelKitMode$Z.apply(this, [value]);
break;
case 603979887:
this.g.multiProcessor=value && (C$.nProcessors > 1) ;
break;
case 603979885:
this.g.monitorEnergy=value;
break;
case 603979853:
this.g.hbondsRasmol=value;
break;
case 603979880:
this.g.minimizationRefresh=value;
break;
case 603979881:
this.g.minimizationSilent=value;
break;
case 603979866:
if (value) {
this.isKiosk=true;
this.g.disablePopupMenu=true;
if (this.display != null ) this.apiPlatform.setTransparentCursor$O(this.display);
}break;
case 603979975:
this.g.waitForMoveTo=value;
break;
case 603979875:
this.g.logCommands=true;
break;
case 603979876:
this.g.logGestures=true;
break;
case 603979784:
this.g.allowMultiTouch=value;
break;
case 603979898:
this.g.preserveState=value;
this.ms.setPreserveState$Z(value);
this.undoClear$();
break;
case 603979955:
this.g.strutsMultiple=value;
break;
case 603979842:
break;
case 603979939:
this.g.slabByAtom=value;
break;
case 603979940:
this.g.slabByMolecule=value;
break;
case 603979903:
this.g.saveProteinStructureState=value;
break;
case 603979780:
this.g.allowGestures=value;
break;
case 603979865:
this.g.imageState=value;
break;
case 603979970:
this.g.useMinimizationThread=value;
break;
case 603979781:
this.g.allowKeyStrokes=value;
break;
case 603979831:
this.g.dragSelected=value;
this.showSelected=false;
break;
case 603979924:
this.g.showKeyStrokes=value;
break;
case 603979844:
this.g.fontCaching=value;
break;
case 603979796:
this.g.atomPicking=value;
break;
case 603979814:
this.highlight$javajs_util_BS(null);
this.g.bondPicking=value;
break;
case 603979906:
this.g.selectAllModels=value;
if (value) this.slm.setSelectionSubset$javajs_util_BS(null);
 else this.am.setSelectAllSubset$Z(false);
break;
case 603979879:
this.g.messageStyleChime=value;
break;
case 603979896:
this.g.pdbSequential=value;
break;
case 603979894:
this.g.pdbAddHydrogens=value;
break;
case 603979895:
this.g.pdbGetHeader=value;
break;
case 603979838:
this.g.ellipsoidAxes=value;
break;
case 603979836:
this.g.ellipsoidArcs=value;
break;
case 603979839:
this.g.ellipsoidBall=value;
break;
case 603979840:
this.g.ellipsoidDots=value;
break;
case 603979841:
this.g.ellipsoidFill=value;
break;
case 603979845:
this.g.fontScaling=value;
break;
case 603979956:
p$1.setSyncTarget$I$Z.apply(this, [0, value]);
break;
case 603979958:
p$1.setSyncTarget$I$Z.apply(this, [1, value]);
break;
case 603979977:
this.g.wireframeRotation=value;
break;
case 603979868:
this.g.isosurfacePropertySmoothing=value;
break;
case 603979833:
this.g.drawPicking=value;
break;
case 603979786:
case 603979790:
case 603979788:
p$1.setAntialias$I$Z.apply(this, [tok, value]);
break;
case 603979944:
this.g.smartAromatic=value;
break;
case 603979794:
this.setApplySymmetryToBonds$Z(value);
break;
case 603979792:
this.g.appendNew=value;
break;
case 603979800:
this.g.autoFps=value;
break;
case 603979971:
$I$(47,"setUseNumberLocalization$Z",[this.g.useNumberLocalization=value]);
break;
case 603979918:
case 1611272202:
key="showFrank";
this.setFrankOn$Z(value);
break;
case 1612709912:
key="solventProbe";
this.g.solventOn=value;
break;
case 603979948:
this.g.solventOn=value;
break;
case 603979785:
this.g.allowRotateSelected=value;
break;
case 603979783:
this.g.allowMoveAtoms=value;
this.showSelected=false;
break;
case 536870922:
p$1.setIntPropertyTok$S$I$I.apply(this, ["showScript", tok, value ? 1 : 0]);
return;
case 603979778:
this.g.allowEmbeddedScripts=value;
break;
case 603979890:
this.g.navigationPeriodic=value;
break;
case 603979984:
this.tm.setZShadeEnabled$Z(value);
return;
case 603979832:
if (this.haveDisplay) this.g.drawHover=value;
break;
case 603979889:
this.setNavigationMode$Z(value);
break;
case 603979888:
return;
case 603979860:
this.g.hideNavigationPoint=value;
break;
case 603979930:
this.g.showNavigationPointAlways=value;
break;
case 603979900:
p$1.setRefreshing$Z.apply(this, [value]);
break;
case 603979869:
this.g.jmolInJSpecView=value;
break;
case 603979870:
this.g.justifyMeasurements=value;
break;
case 603979952:
this.g.ssbondsBackbone=value;
break;
case 603979852:
this.g.hbondsBackbone=value;
break;
case 603979854:
this.g.hbondsSolid=value;
break;
case 536870924:
this.gdata.setSpecular$Z(value);
break;
case 603979942:
this.tm.setSlabEnabled$Z(value);
return;
case 603979980:
this.tm.setZoomEnabled$Z(value);
return;
case 603979864:
this.g.highResolutionFlag=value;
break;
case 603979966:
this.g.traceAlpha=value;
break;
case 603979983:
this.g.zoomLarge=value;
this.tm.setZoomHeight$Z$Z(this.g.zoomHeight, value);
break;
case 603979982:
this.g.zoomHeight=value;
this.tm.setZoomHeight$Z$Z(value, this.g.zoomLarge);
break;
case 603979871:
$I$(28).setDoTranslate$Z(value);
break;
case 603979862:
this.slm.setHideNotSelected$Z(value);
break;
case 603979904:
p$1.setScriptQueue$Z.apply(this, [value]);
break;
case 603979830:
this.g.dotSurface=value;
break;
case 603979829:
this.g.dotsSelectedOnly=value;
break;
case 1611141171:
this.setSelectionHalosEnabled$Z(value);
break;
case 603979910:
this.g.rasmolHydrogenSetting=value;
break;
case 603979908:
this.g.rasmolHeteroSetting=value;
break;
case 603979928:
this.g.showMultipleBonds=value;
break;
case 603979920:
this.g.showHiddenSelectionHalos=value;
break;
case 603979976:
this.tm.setWindowCentered$Z(value);
break;
case 603979828:
this.g.displayCellParameters=value;
break;
case 603979960:
this.g.testFlag1=value;
break;
case 603979962:
this.g.testFlag2=value;
break;
case 603979964:
this.g.testFlag3=value;
break;
case 603979965:
p$1.jmolTest.apply(this, []);
this.g.testFlag4=value;
break;
case 603979901:
this.g.ribbonBorder=value;
break;
case 603979816:
this.g.cartoonBaseEdges=value;
break;
case 603979820:
this.g.cartoonRockets=value;
break;
case 603979902:
this.g.rocketBarrels=value;
break;
case 603979850:
this.gdata.setGreyscaleMode$Z(this.g.greyscaleRendering=value);
break;
case 603979878:
this.g.measurementLabels=value;
break;
case 603979809:
case 603979804:
case 603979808:
this.setAxesMode$I(tok);
return;
case 603979806:
this.setAxesOrientationRasmol$Z(value);
return;
case 603979824:
p$1.setStringPropertyTok$S$I$S.apply(this, ["defaultcolorscheme", 545259545, value ? "rasmol" : "jmol"]);
return;
case 603979825:
this.setDebugScript$Z(value);
return;
case 603979897:
this.setPerspectiveDepth$Z(value);
return;
case 603979798:
this.setAutoBond$Z(value);
return;
case 603979914:
this.setShowAxes$Z(value);
return;
case 603979916:
this.setShowBbcage$Z(value);
return;
case 603979922:
this.setShowHydrogens$Z(value);
return;
case 603979926:
this.setShowMeasurements$Z(value);
return;
case 603979936:
this.setShowUnitCell$Z(value);
return;
case 603979812:
doRepaint=false;
this.g.bondModeOr=value;
break;
case 603979978:
doRepaint=false;
this.g.zeroBasedXyzRasmol=value;
this.reset$Z(true);
break;
case 603979899:
doRepaint=false;
this.g.rangeSelected=value;
break;
case 603979877:
doRepaint=false;
this.g.measureAllModels=value;
break;
case 603979954:
doRepaint=false;
this.sm.allowStatusReporting=value;
break;
case 603979822:
doRepaint=false;
this.g.chainCaseSensitive=value;
break;
case 603979858:
doRepaint=false;
this.g.hideNameInPopup=value;
break;
case 603979827:
doRepaint=false;
this.g.disablePopupMenu=value;
break;
case 603979846:
doRepaint=false;
this.g.forceAutoBond=value;
break;
default:
if (!this.g.htBooleanParameterFlags.containsKey$O(key.toLowerCase$())) {
this.g.setUserVariable$S$org_jmol_script_SV(key, $I$(44).getBoolean$Z(value));
return;
}}
this.g.setB$S$Z(key, value);
if (doRepaint) this.setTainted$Z(true);
}, p$1);

Clazz.newMeth(C$, 'setModelKitMode$Z', function (value) {
if (this.acm == null  || !this.allowScripting ) return;
if (value || this.g.modelKitMode ) {
this.setPickingMode$S$I(null, value ? 33 : 1);
this.setPickingMode$S$I(null, value ? 32 : 1);
}var isChange=(this.g.modelKitMode != value );
this.g.modelKitMode=value;
this.highlight$javajs_util_BS(null);
if (value) {
this.setNavigationMode$Z(false);
this.selectAll$();
this.setModelkitProperty$S$O("atomType", "C");
this.setModelkitProperty$S$O("bondType", "p");
if (!this.isApplet) this.popupMenu$I$I$C(10, 0, "m");
if (isChange) this.sm.setCallbackFunction$S$S("modelkit", "ON");
this.g.modelKitMode=true;
if (this.ms.ac == 0) this.zap$Z$Z$Z(false, true, true);
} else {
this.acm.setPickingMode$I(-1);
if (isChange) this.sm.setCallbackFunction$S$S("modelkit", "OFF");
}}, p$1);

Clazz.newMeth(C$, 'setSmilesString$S', function (s) {
if (s == null ) this.g.removeParam$S("_smilesString");
 else this.g.setO$S$O("_smilesString", s);
});

Clazz.newMeth(C$, 'removeUserVariable$S', function (key) {
this.g.removeUserVariable$S(key);
if (key.endsWith$S("callback")) this.sm.setCallbackFunction$S$S(key, null);
});

Clazz.newMeth(C$, 'jmolTest', function () {
}, p$1);

Clazz.newMeth(C$, 'showParameter$S$Z$I', function (key, ifNotSet, nMax) {
var sv="" + this.g.getParameterEscaped$S$I(key, nMax);
if (ifNotSet || sv.indexOf$S("<not defined>") < 0 ) this.showString$S$Z(key + " = " + sv , false);
});

Clazz.newMeth(C$, 'showString$S$Z', function (str, isPrint) {
if (!C$.isJS && p$1.isScriptQueued.apply(this, []) && (!this.isSilent || isPrint ) && !"\u0000".equals$O(str)  ) {
$I$(2).warn$S(str);
}this.scriptEcho$S(str);
});

Clazz.newMeth(C$, 'getAllSettings$S', function (prefix) {
return this.getStateCreator$().getAllSettings$S(prefix);
});

Clazz.newMeth(C$, 'getBindingInfo$S', function (qualifiers) {
return (this.haveDisplay ? this.acm.getBindingInfo$S(qualifiers) : "");
});

Clazz.newMeth(C$, 'getIsosurfacePropertySmoothing$Z', function (asPower) {
return (asPower ? this.g.isosurfacePropertySmoothingPower : this.g.isosurfacePropertySmoothing ? 1 : 0);
});

Clazz.newMeth(C$, 'setNavigationDepthPercent$F', function (percent) {
this.tm.setNavigationDepthPercent$F(percent);
this.refresh$I$S(1, "set navigationDepth");
});

Clazz.newMeth(C$, 'getShowNavigationPoint$', function () {
if (!this.g.navigationMode) return false;
return (this.tm.isNavigating$() && !this.g.hideNavigationPoint  || this.g.showNavigationPointAlways  || this.getInMotion$Z(true) );
});

Clazz.newMeth(C$, 'getCurrentSolventProbeRadius$', function () {
return this.g.solventOn ? this.g.solventProbeRadius : 0;
});

Clazz.newMeth(C$, 'setPerspectiveDepth$Z', function (perspectiveDepth) {
this.tm.setPerspectiveDepth$Z(perspectiveDepth);
});

Clazz.newMeth(C$, 'setAxesOrientationRasmol$Z', function (TF) {
this.g.setB$S$Z("axesOrientationRasmol", TF);
this.g.axesOrientationRasmol=TF;
this.reset$Z(true);
});

Clazz.newMeth(C$, 'setAxesScale$I$F', function (tok, val) {
val=C$.checkFloatRange$F$F$F(val, -100, 100);
if (tok == 570425345) this.g.axesOffset=val;
 else this.g.axesScale=val;
this.axesAreTainted=true;
}, p$1);

Clazz.newMeth(C$, 'setAxesMode$I', function (mode) {
this.g.axesMode=mode;
this.axesAreTainted=true;
switch (mode) {
case 603979808:
this.g.removeParam$S("axesmolecular");
this.g.removeParam$S("axeswindow");
this.g.setB$S$Z("axesUnitcell", true);
mode=2;
break;
case 603979804:
this.g.removeParam$S("axesunitcell");
this.g.removeParam$S("axeswindow");
this.g.setB$S$Z("axesMolecular", true);
mode=1;
break;
case 603979809:
this.g.removeParam$S("axesunitcell");
this.g.removeParam$S("axesmolecular");
this.g.setB$S$Z("axesWindow", true);
mode=0;
}
this.g.setI$S$I("axesMode", mode);
});

Clazz.newMeth(C$, 'getSelectionHalosEnabled$', function () {
return this.selectionHalosEnabled;
});

Clazz.newMeth(C$, 'setSelectionHalosEnabled$Z', function (TF) {
if (this.selectionHalosEnabled == TF ) return;
this.g.setB$S$Z("selectionHalos", TF);
this.shm.loadShape$I(8);
this.selectionHalosEnabled=TF;
});

Clazz.newMeth(C$, 'getShowSelectedOnce$', function () {
var flag=this.showSelected;
this.showSelected=false;
return flag;
});

Clazz.newMeth(C$, 'setStrandCount$I$I', function (type, value) {
value=C$.checkIntRange$I$I$I(value, 0, 20);
switch (type) {
case 12:
this.g.strandCountForStrands=value;
break;
case 13:
this.g.strandCountForMeshRibbon=value;
break;
default:
this.g.strandCountForStrands=value;
this.g.strandCountForMeshRibbon=value;
break;
}
this.g.setI$S$I("strandCount", value);
this.g.setI$S$I("strandCountForStrands", this.g.strandCountForStrands);
this.g.setI$S$I("strandCountForMeshRibbon", this.g.strandCountForMeshRibbon);
}, p$1);

Clazz.newMeth(C$, 'getStrandCount$I', function (type) {
return (type == 12 ? this.g.strandCountForStrands : this.g.strandCountForMeshRibbon);
});

Clazz.newMeth(C$, 'setNavigationMode$Z', function (TF) {
this.g.navigationMode=TF;
this.tm.setNavigationMode$Z(TF);
});

Clazz.newMeth(C$, 'setAutoBond$Z', function (TF) {
this.g.setB$S$Z("autobond", TF);
this.g.autoBond=TF;
});

Clazz.newMeth(C$, 'makeConnections$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F', function (minDistance, maxDistance, order, connectOperation, bsA, bsB, bsBonds, isBonds, addGroup, energy) {
this.clearModelDependentObjects$();
this.clearMinimization$();
return this.ms.makeConnections$F$F$I$I$javajs_util_BS$javajs_util_BS$javajs_util_BS$Z$Z$F(minDistance, maxDistance, order, connectOperation, bsA, bsB, bsBonds, isBonds, addGroup, energy);
});

Clazz.newMeth(C$, 'rebond$', function () {
this.rebondState$Z(false);
});

Clazz.newMeth(C$, 'rebondState$Z', function (isStateScript) {
this.clearModelDependentObjects$();
this.ms.deleteAllBonds$();
var isLegacy=isStateScript && this.g.legacyAutoBonding ;
this.ms.autoBondBs4$javajs_util_BS$javajs_util_BS$javajs_util_BS$javajs_util_BS$H$Z(null, null, null, null, this.getMadBond$(), isLegacy);
this.addStateScript$S$Z$Z((isLegacy ? "set legacyAutoBonding TRUE;connect;set legacyAutoBonding FALSE;" : "connect;"), false, true);
});

Clazz.newMeth(C$, 'setPercentVdwAtom$I', function (value) {
this.g.setI$S$I("percentVdwAtom", value);
this.g.percentVdwAtom=value;
this.rd.value=value / 100.0;
this.rd.factorType=$I$(48).FACTOR;
this.rd.vdwType=$I$(7).AUTO;
this.shm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(0, 0, this.rd, null);
});

Clazz.newMeth(C$, 'getMadBond$', function () {
return ($s$[0] = (this.g.bondRadiusMilliAngstroms * 2), $s$[0]);
});

Clazz.newMeth(C$, 'setShowHydrogens$Z', function (TF) {
this.g.setB$S$Z("showHydrogens", TF);
this.g.showHydrogens=TF;
});

Clazz.newMeth(C$, 'setShowBbcage$Z', function (value) {
this.setObjectMad10$I$S$I(32, "boundbox", ($s$[0] = (value ? -4 : 0), $s$[0]));
this.g.setB$S$Z("showBoundBox", value);
});

Clazz.newMeth(C$, 'getShowBbcage$', function () {
return this.getObjectMad10$I(4) != 0;
});

Clazz.newMeth(C$, 'setShowUnitCell$Z', function (value) {
this.setObjectMad10$I$S$I(33, "unitcell", ($s$[0] = (value ? -2 : 0), $s$[0]));
this.g.setB$S$Z("showUnitCell", value);
});

Clazz.newMeth(C$, 'getShowUnitCell$', function () {
return this.getObjectMad10$I(5) != 0;
});

Clazz.newMeth(C$, 'setShowAxes$Z', function (value) {
this.setObjectMad10$I$S$I(34, "axes", ($s$[0] = (value ? -2 : 0), $s$[0]));
this.g.setB$S$Z("showAxes", value);
});

Clazz.newMeth(C$, 'getShowAxes$', function () {
return this.getObjectMad10$I(1) != 0;
});

Clazz.newMeth(C$, 'setFrankOn$Z', function (TF) {
if (this.isPreviewOnly) TF=false;
this.frankOn=TF;
this.setObjectMad10$I$S$I(36, "frank", ($s$[0] = (TF ? 1 : 0), $s$[0]));
});

Clazz.newMeth(C$, 'getShowFrank$', function () {
if (this.isPreviewOnly || this.isApplet && this.creatingImage  ) return false;
return (this.isSignedApplet && !this.isSignedAppletLocal && !C$.isJS   || this.frankOn );
});

Clazz.newMeth(C$, 'setShowMeasurements$Z', function (TF) {
this.g.setB$S$Z("showMeasurements", TF);
this.g.showMeasurements=TF;
});

Clazz.newMeth(C$, 'setUnits$S$Z', function (units, isDistance) {
this.g.setUnits$S(units);
if (isDistance) {
this.g.setUnits$S(units);
this.setShapeProperty$I$S$O(6, "reformatDistances", null);
} else {
}});

Clazz.newMeth(C$, 'setRasmolDefaults$', function () {
p$1.setDefaultsType$S.apply(this, ["RasMol"]);
});

Clazz.newMeth(C$, 'setJmolDefaults$', function () {
p$1.setDefaultsType$S.apply(this, ["Jmol"]);
});

Clazz.newMeth(C$, 'setDefaultsType$S', function (type) {
if (type.equalsIgnoreCase$S("RasMol")) {
this.stm.setRasMolDefaults$();
return;
}if (type.equalsIgnoreCase$S("PyMOL")) {
this.stm.setPyMOLDefaults$();
return;
}this.stm.setJmolDefaults$();
this.setIntProperty$S$I("bondingVersion", 0);
this.shm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(0, 0, this.rd, this.getAllAtoms$());
}, p$1);

Clazz.newMeth(C$, 'setAntialias$I$Z', function (tok, TF) {
var isChanged=false;
switch (tok) {
case 603979786:
isChanged=(this.g.antialiasDisplay != TF );
this.g.antialiasDisplay=TF;
break;
case 603979790:
isChanged=(this.g.antialiasTranslucent != TF );
this.g.antialiasTranslucent=TF;
break;
case 603979788:
this.g.antialiasImages=TF;
return;
}
if (isChanged) {
this.resizeImage$I$I$Z$Z$Z(0, 0, false, false, true);
this.refresh$I$S(3, "Viewer:setAntialias()");
}}, p$1);

Clazz.newMeth(C$, 'allocTempPoints$I', function (size) {
return this.tempArray.allocTempPoints$I(size);
});

Clazz.newMeth(C$, 'freeTempPoints$javajs_util_P3A', function (tempPoints) {
this.tempArray.freeTempPoints$javajs_util_P3A(tempPoints);
});

Clazz.newMeth(C$, 'allocTempScreens$I', function (size) {
return this.tempArray.allocTempScreens$I(size);
});

Clazz.newMeth(C$, 'freeTempScreens$javajs_util_P3iA', function (tempScreens) {
this.tempArray.freeTempScreens$javajs_util_P3iA(tempScreens);
});

Clazz.newMeth(C$, 'allocTempEnum$I', function (size) {
return this.tempArray.allocTempEnum$I(size);
});

Clazz.newMeth(C$, 'freeTempEnum$org_jmol_c_STRA', function (temp) {
this.tempArray.freeTempEnum$org_jmol_c_STRA(temp);
});

Clazz.newMeth(C$, 'getFont3D$S$S$F', function (fontFace, fontStyle, fontSize) {
return this.gdata.getFont3DFSS$S$S$F(fontFace, fontStyle, fontSize);
});

Clazz.newMeth(C$, 'getAtomGroupQuaternions$javajs_util_BS$I', function (bsAtoms, nMax) {
return this.ms.getAtomGroupQuaternions$javajs_util_BS$I$C(bsAtoms, nMax, this.getQuaternionFrame$());
});

Clazz.newMeth(C$, 'setStereoMode$IA$org_jmol_c_STER$F', function (twoColors, stereoMode, degrees) {
this.setFloatProperty$S$F("stereoDegrees", degrees);
this.setBooleanProperty$S$Z("greyscaleRendering", stereoMode.isBiColor$());
if (twoColors != null ) this.tm.setStereoMode2$IA(twoColors);
 else this.tm.setStereoMode$org_jmol_c_STER(stereoMode);
});

Clazz.newMeth(C$, 'getChimeInfo$I', function (tok) {
return p$1.getPropertyManager.apply(this, []).getChimeInfo$I$javajs_util_BS(tok, this.bsA$());
});

Clazz.newMeth(C$, 'getModelFileInfo$', function () {
return p$1.getPropertyManager.apply(this, []).getModelFileInfo$javajs_util_BS(this.getVisibleFramesBitSet$());
});

Clazz.newMeth(C$, 'getModelFileInfoAll$', function () {
return p$1.getPropertyManager.apply(this, []).getModelFileInfo$javajs_util_BS(null);
});

Clazz.newMeth(C$, 'getProperty$S$S$O', function (returnType, infoType, paramInfo) {
if (!"DATA_API".equals$O(returnType)) return p$1.getPropertyManager.apply(this, []).getProperty$S$S$O(returnType, infoType, paramInfo);
switch (("scriptCheck.........consoleText.........scriptEditor........scriptEditorState...getAppConsole.......getScriptEditor.....setMenu.............spaceGroupInfo......disablePopupMenu....defaultDirectory....getPopupMenu........shapeManager........getPreference.......").indexOf$S(infoType)) {
case 0:
return p$1.scriptCheckRet$S$Z.apply(this, [paramInfo, true]);
case 20:
return (this.appConsole == null  ? "" : this.appConsole.getText$());
case 40:
this.showEditor$SA(paramInfo);
return null;
case 60:
this.scriptEditorVisible=(paramInfo).booleanValue$();
return null;
case 80:
if (this.isKiosk) {
this.appConsole=null;
} else if (Clazz.instanceOf(paramInfo, "org.jmol.api.JmolAppConsoleInterface")) {
this.appConsole=paramInfo;
} else if (paramInfo != null  && !(paramInfo).booleanValue$() ) {
this.appConsole=null;
} else if (this.appConsole == null  && paramInfo != null   && (paramInfo).booleanValue$() ) {
if (this.isJSNoAWT) {
this.appConsole=$I$(13).getOption$S$org_jmol_viewer_Viewer$S("consolejs.AppletConsole", this, "script");
} else {
for (var i=0, n=C$.isSwingJS ? 1 : 4; i < n && this.appConsole == null  ; i++) {
this.appConsole=(this.isApplet ? $I$(13).getOption$S$org_jmol_viewer_Viewer$S("console.AppletConsole", null, null) : $I$(13).getInterface$S$org_jmol_viewer_Viewer$S("org.openscience.jmol.app.jmolpanel.console.AppConsole", null, null));
if (this.appConsole == null ) try {
System.out.println$S("Viewer can\'t start appConsole");

break;
$I$(10).currentThread$().wait$J(100);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
}if (this.appConsole != null ) this.appConsole.start$org_jmol_viewer_Viewer(this);
}this.scriptEditor=(C$.isJS || this.appConsole == null   ? null : this.appConsole.getScriptEditor$());
return this.appConsole;
case 100:
if (this.appConsole == null  && paramInfo != null   && (paramInfo).booleanValue$() ) {
this.getProperty$S$S$O("DATA_API", "getAppConsole", Boolean.TRUE);
this.scriptEditor=(this.appConsole == null  ? null : this.appConsole.getScriptEditor$());
}return this.scriptEditor;
case 120:
if (this.jmolpopup != null ) this.jmolpopup.jpiDispose$();
this.jmolpopup=null;
return this.menuStructure=paramInfo;
case 140:
return this.getSymTemp$().getSpaceGroupInfo$org_jmol_modelset_ModelSet$S$I$Z$FA(this.ms, null, -1, false, null);
case 160:
this.g.disablePopupMenu=true;
return null;
case 180:
return this.g.defaultDirectory;
case 200:
if (Clazz.instanceOf(paramInfo, "java.lang.String")) return this.getMenu$S(paramInfo);
return this.getPopupMenu$();
case 220:
return this.shm.getProperty$O(paramInfo);
case 240:
return this.sm.syncSend$S$O$I("getPreference", paramInfo, 1);
}
$I$(2).error$S("ERROR in getProperty DATA_API: " + infoType);
return null;
});

Clazz.newMeth(C$, 'showEditor$SA', function (file_text) {
var scriptEditor=this.getProperty$S$S$O("DATA_API", "getScriptEditor", Boolean.TRUE);
if (scriptEditor == null ) return;
scriptEditor.show$SA(file_text);
});

Clazz.newMeth(C$, 'getPropertyManager', function () {
if (this.pm == null ) (this.pm=$I$(13).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.viewer.PropertyManager", this, "prop")).setViewer$org_jmol_viewer_Viewer(this);
return this.pm;
}, p$1);

Clazz.newMeth(C$, 'setTainted$Z', function (TF) {
this.isTainted=this.axesAreTainted=(TF && (this.refreshing || this.creatingImage ) );
});

Clazz.newMeth(C$, 'notifyMouseClicked$I$I$I$I', function (x, y, action, mode) {
var modifiers=$I$(49).getButtonMods$I(action);
var clickCount=$I$(49).getClickCount$I(action);
this.g.setI$S$I("_mouseX", x);
this.g.setI$S$I("_mouseY", this.dimScreen.height - y);
this.g.setI$S$I("_mouseAction", action);
this.g.setI$S$I("_mouseModifiers", modifiers);
this.g.setI$S$I("_clickCount", clickCount);
return this.sm.setStatusClicked$I$I$I$I$I(x, this.dimScreen.height - y, action, clickCount, mode);
});

Clazz.newMeth(C$, 'checkObjectClicked$I$I$I', function (x, y, modifiers) {
return this.shm.checkObjectClicked$I$I$I$javajs_util_BS$Z(x, y, modifiers, this.getVisibleFramesBitSet$(), this.g.drawPicking);
});

Clazz.newMeth(C$, 'checkObjectHovered$I$I', function (x, y) {
return (x >= 0 && this.shm != null   && this.shm.checkObjectHovered$I$I$javajs_util_BS$Z(x, y, this.getVisibleFramesBitSet$(), this.getBondsPickable$()) );
});

Clazz.newMeth(C$, 'checkObjectDragged$I$I$I$I$I', function (prevX, prevY, x, y, action) {
var iShape=0;
switch (this.getPickingMode$()) {
case 2:
iShape=5;
break;
case 4:
iShape=22;
break;
}
if (this.shm.checkObjectDragged$I$I$I$I$I$javajs_util_BS$I(prevX, prevY, x, y, action, this.getVisibleFramesBitSet$(), iShape)) {
this.refresh$I$S(1, "checkObjectDragged");
if (iShape == 22) this.scriptEcho$S(this.getShapeProperty$I$S(22, "command"));
return true;
}return false;
});

Clazz.newMeth(C$, 'rotateAxisAngleAtCenter$org_jmol_api_JmolScriptEvaluator$javajs_util_P3$javajs_util_V3$F$F$Z$javajs_util_BS', function (eval, rotCenter, rotAxis, degreesPerSecond, endDegrees, isSpin, bsSelected) {
var isOK=this.tm.rotateAxisAngleAtCenter$org_jmol_api_JmolScriptEvaluator$javajs_util_P3$javajs_util_V3$F$F$Z$javajs_util_BS(eval, rotCenter, rotAxis, degreesPerSecond, endDegrees, isSpin, bsSelected);
if (isOK) p$1.setSync.apply(this, []);
return isOK;
});

Clazz.newMeth(C$, 'rotateAboutPointsInternal$org_jmol_api_JmolScriptEvaluator$javajs_util_P3$javajs_util_P3$F$F$Z$javajs_util_BS$javajs_util_V3$javajs_util_Lst$FA$javajs_util_M4', function (eval, point1, point2, degreesPerSecond, endDegrees, isSpin, bsSelected, translation, finalPoints, dihedralList, m4) {
if (this.headless) {
if (isSpin && endDegrees == 3.4028235E38  ) return false;
isSpin=false;
}if (eval == null ) eval=this.eval;
var isOK=this.tm.rotateAboutPointsInternal$org_jmol_api_JmolScriptEvaluator$javajs_util_T3$javajs_util_T3$F$F$Z$Z$javajs_util_BS$Z$javajs_util_V3$javajs_util_Lst$FA$javajs_util_M4(eval, point1, point2, degreesPerSecond, endDegrees, false, isSpin, bsSelected, false, translation, finalPoints, dihedralList, m4);
if (isOK) p$1.setSync.apply(this, []);
return isOK;
});

Clazz.newMeth(C$, 'startSpinningAxis$javajs_util_T3$javajs_util_T3$Z', function (pt1, pt2, isClockwise) {
if (this.tm.spinOn || this.tm.navOn ) {
this.tm.setSpinOff$();
this.tm.setNavOn$Z(false);
return;
}this.tm.rotateAboutPointsInternal$org_jmol_api_JmolScriptEvaluator$javajs_util_T3$javajs_util_T3$F$F$Z$Z$javajs_util_BS$Z$javajs_util_V3$javajs_util_Lst$FA$javajs_util_M4(null, pt1, pt2, this.g.pickingSpinRate, 3.4028235E38, isClockwise, true, null, false, null, null, null, null);
});

Clazz.newMeth(C$, 'getModelDipole$', function () {
return this.ms.getModelDipole$I(this.am.cmi);
});

Clazz.newMeth(C$, 'calculateMolecularDipole$javajs_util_BS', function (bsAtoms) {
try {
return this.ms.calculateMolecularDipole$I$javajs_util_BS(this.am.cmi, bsAtoms);
} catch (e) {
if (Clazz.exceptionOf(e,"org.jmol.viewer.JmolAsyncException")){
if (this.eval != null ) this.eval.loadFileResourceAsync$S(e.getFileName$());
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setDefaultLattice$javajs_util_P3', function (p) {
if (!Float.isNaN$F(p.x + p.y + p.z )) this.g.ptDefaultLattice.setT$javajs_util_T3(p);
this.g.setO$S$O("defaultLattice", $I$(27).eP$javajs_util_T3(p));
});

Clazz.newMeth(C$, 'getDefaultLattice$', function () {
return this.g.ptDefaultLattice;
});

Clazz.newMeth(C$, 'getModelExtract$O$Z$Z$S', function (atomExpression, doTransform, isModelKit, type) {
return p$1.getPropertyManager.apply(this, []).getModelExtract$javajs_util_BS$Z$Z$S$Z(this.getAtomBitSet$O(atomExpression), doTransform, isModelKit, type, false);
});

Clazz.newMeth(C$, 'getData$S$S', function (atomExpression, type) {
return this.getModelFileData$S$S$Z(atomExpression, type, true);
});

Clazz.newMeth(C$, 'getModelFileData$S$S$Z', function (atomExpression, type, allTrajectories) {
return p$1.getPropertyManager.apply(this, []).getAtomData$S$S$Z(atomExpression, type, allTrajectories);
});

Clazz.newMeth(C$, 'getModelCml$javajs_util_BS$I$Z$Z', function (bs, nAtomsMax, addBonds, doTransform) {
return p$1.getPropertyManager.apply(this, []).getModelCml$javajs_util_BS$I$Z$Z$Z(bs, nAtomsMax, addBonds, doTransform, false);
});

Clazz.newMeth(C$, 'getPdbAtomData$javajs_util_BS$javajs_util_OC$Z$Z', function (bs, out, asPQR, doTransform) {
return p$1.getPropertyManager.apply(this, []).getPdbAtomData$javajs_util_BS$javajs_util_OC$Z$Z$Z(bs == null  ? this.bsA$() : bs, out, asPQR, doTransform, false);
});

Clazz.newMeth(C$, 'isJmolDataFrame$', function () {
return this.ms.isJmolDataFrameForModel$I(this.am.cmi);
});

Clazz.newMeth(C$, 'setFrameTitle$I$S', function (modelIndex, title) {
this.ms.setFrameTitle$javajs_util_BS$O($I$(31).newAndSetBit$I(modelIndex), title);
});

Clazz.newMeth(C$, 'setFrameTitleObj$O', function (title) {
this.shm.loadShape$I(31);
this.ms.setFrameTitle$javajs_util_BS$O(this.getVisibleFramesBitSet$(), title);
});

Clazz.newMeth(C$, 'getFrameTitle$', function () {
return this.ms.getFrameTitle$I(this.am.cmi);
});

Clazz.newMeth(C$, 'setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA', function (bs, tok, iValue, fValue, sValue, values, list) {
if (tok == 1648363544) this.shm.deleteVdwDependentShapes$javajs_util_BS(bs);
this.clearMinimization$();
this.ms.setAtomProperty$javajs_util_BS$I$I$F$S$FA$SA(bs, tok, iValue, fValue, sValue, values, list);
switch (tok) {
case 1111492609:
case 1111492610:
case 1111492611:
case 1111492612:
case 1111492613:
case 1111492614:
case 1111490577:
case 1111490578:
case 1111490579:
case 1086326789:
this.refreshMeasures$Z(true);
}
});

Clazz.newMeth(C$, 'checkCoordinatesChanged$', function () {
this.ms.recalculatePositionDependentQuantities$javajs_util_BS$javajs_util_M4(null, null);
this.refreshMeasures$Z(true);
});

Clazz.newMeth(C$, 'setAtomCoords$javajs_util_BS$I$O', function (bs, tokType, xyzValues) {
if (bs.isEmpty$()) return;
this.ms.setAtomCoords$javajs_util_BS$I$O(bs, tokType, xyzValues);
p$1.checkMinimization.apply(this, []);
this.sm.setStatusAtomMoved$javajs_util_BS(bs);
});

Clazz.newMeth(C$, 'setAtomCoordsRelative$javajs_util_T3$javajs_util_BS', function (offset, bs) {
if (bs == null ) bs=this.bsA$();
if (bs.isEmpty$()) return;
this.ms.setAtomCoordsRelative$javajs_util_T3$javajs_util_BS(offset, bs);
p$1.checkMinimization.apply(this, []);
this.sm.setStatusAtomMoved$javajs_util_BS(bs);
});

Clazz.newMeth(C$, 'invertAtomCoordPt$javajs_util_P3$javajs_util_BS', function (pt, bs) {
this.ms.invertSelected$javajs_util_P3$javajs_util_P4$I$javajs_util_BS(pt, null, -1, bs);
p$1.checkMinimization.apply(this, []);
this.sm.setStatusAtomMoved$javajs_util_BS(bs);
});

Clazz.newMeth(C$, 'invertAtomCoordPlane$javajs_util_P4$javajs_util_BS', function (plane, bs) {
this.ms.invertSelected$javajs_util_P3$javajs_util_P4$I$javajs_util_BS(null, plane, -1, bs);
p$1.checkMinimization.apply(this, []);
this.sm.setStatusAtomMoved$javajs_util_BS(bs);
});

Clazz.newMeth(C$, 'invertRingAt$I$Z', function (atomIndex, isClick) {
var bs=this.getAtomBitSet$O("connected(atomIndex=" + atomIndex + ") and !within(SMARTS,'[r50,R]')" );
var nb=bs.cardinality$();
switch (nb) {
case 0:
case 1:
return;
case 2:
break;
case 3:
case 4:
var lengths=Clazz.array(Integer.TYPE, [nb]);
var points=Clazz.array(Integer.TYPE, [nb]);
var ni=0;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1), ni++) {
lengths[ni]=this.getBranchBitSet$I$I$Z(i, atomIndex, true).cardinality$();
points[ni]=i;
}
for (var j=0; j < nb - 2; j++) {
var max=-2147483648;
var imax=0;
for (var i=0; i < nb; i++) if (lengths[i] >= max && bs.get$I(points[i]) ) {
imax=points[i];
max=lengths[i];
}
bs.clear$I(imax);
}
}
if (isClick) this.undoMoveActionClear$I$I$Z(atomIndex, 2, true);
this.invertSelected$javajs_util_P3$javajs_util_P4$I$javajs_util_BS(null, null, atomIndex, bs);
if (isClick) this.setStatusAtomPicked$I$S$java_util_Map$Z(atomIndex, "inverted: " + $I$(27).eBS$javajs_util_BS(bs), null, true);
});

Clazz.newMeth(C$, 'invertSelected$javajs_util_P3$javajs_util_P4$I$javajs_util_BS', function (pt, plane, iAtom, bsAtoms) {
if (bsAtoms == null ) bsAtoms=this.bsA$();
if (bsAtoms.cardinality$() == 0) return;
this.ms.invertSelected$javajs_util_P3$javajs_util_P4$I$javajs_util_BS(pt, plane, iAtom, bsAtoms);
p$1.checkMinimization.apply(this, []);
this.sm.setStatusAtomMoved$javajs_util_BS(bsAtoms);
});

Clazz.newMeth(C$, 'moveAtoms$javajs_util_M4$javajs_util_M3$javajs_util_M3$javajs_util_V3$javajs_util_P3$Z$javajs_util_BS$Z', function (m4, mNew, rotation, translation, center, isInternal, bsAtoms, translationOnly) {
if (bsAtoms.isEmpty$()) return;
this.ms.moveAtoms$javajs_util_M4$javajs_util_M3$javajs_util_M3$javajs_util_V3$javajs_util_BS$javajs_util_P3$Z$Z(m4, mNew, rotation, translation, bsAtoms, center, isInternal, translationOnly);
p$1.checkMinimization.apply(this, []);
this.sm.setStatusAtomMoved$javajs_util_BS(bsAtoms);
});

Clazz.newMeth(C$, 'moveSelected$I$I$I$I$I$javajs_util_BS$Z$Z$I', function (deltaX, deltaY, deltaZ, x, y, bsSelected, isTranslation, asAtoms, modifiers) {
if (deltaZ == 0) return;
if (x == -2147483648) this.setModelKitRotateBondIndex$I(-2147483648);
if (this.isJmolDataFrame$()) return;
if (deltaX == -2147483648) {
this.showSelected=true;
this.movableBitSet=p$1.setMovableBitSet$javajs_util_BS$Z.apply(this, [null, !asAtoms]);
this.shm.loadShape$I(8);
this.refresh$I$S(6, "moveSelected");
return;
}if (deltaX == 2147483647) {
if (!this.showSelected) return;
this.showSelected=false;
this.movableBitSet=null;
this.refresh$I$S(6, "moveSelected");
return;
}if (this.movingSelected) return;
this.movingSelected=true;
this.stopMinimization$();
if (x != -2147483648 && this.modelkit != null   && this.modelkit.getProperty$O("rotateBondIndex") != null  ) {
this.modelkit.actionRotateBond$I$I$I$I$Z(deltaX, deltaY, x, y, (modifiers & 16) != 0);
} else {
bsSelected=p$1.setMovableBitSet$javajs_util_BS$Z.apply(this, [bsSelected, !asAtoms]);
if (!bsSelected.isEmpty$()) {
if (isTranslation) {
var ptCenter=this.ms.getAtomSetCenter$javajs_util_BS(bsSelected);
this.tm.finalizeTransformParameters$();
var f=(this.g.antialiasDisplay ? 2 : 1);
var ptScreen=this.tm.transformPt$javajs_util_T3(ptCenter);
var ptScreenNew;
if (deltaZ != -2147483648) ptScreenNew=$I$(43).new3$F$F$F(ptScreen.x, ptScreen.y, ptScreen.z + deltaZ + 0.5 );
 else ptScreenNew=$I$(43).new3$F$F$F(ptScreen.x + deltaX * f + 0.5, ptScreen.y + deltaY * f + 0.5, ptScreen.z);
var ptNew=Clazz.new_($I$(43,1));
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(ptScreenNew, ptNew);
ptNew.sub$javajs_util_T3(ptCenter);
this.setAtomCoordsRelative$javajs_util_T3$javajs_util_BS(ptNew, bsSelected);
} else {
this.tm.rotateXYBy$F$F$javajs_util_BS(deltaX, deltaY, bsSelected);
}}}this.refresh$I$S(2, "");
this.movingSelected=false;
});

Clazz.newMeth(C$, 'highlightBond$I$I$I$I', function (index, closestAtomIndex, x, y) {
if (!this.hoverEnabled) return;
var bs=null;
if (index >= 0) {
var b=this.ms.bo[index];
var i=b.atom2.i;
if (!this.ms.isAtomInLastModel$I(i)) return;
bs=$I$(31).newAndSetBit$I(i);
bs.set$I(b.atom1.i);
}this.highlight$javajs_util_BS(bs);
this.setModelkitProperty$S$O("bondIndex", Integer.valueOf$I(index));
this.setModelkitProperty$S$O("screenXY", Clazz.array(Integer.TYPE, -1, [x, y]));
var text=this.setModelkitProperty$S$O("hoverLabel", Integer.valueOf$I(-2 - index));
if (text != null ) this.hoverOnPt$I$I$S$S$javajs_util_T3(x, y, text, null, null);
this.refresh$I$S(3, "highlightBond");
});

Clazz.newMeth(C$, 'highlight$javajs_util_BS', function (bs) {
this.atomHighlighted=(bs != null  && bs.cardinality$() == 1  ? bs.nextSetBit$I(0) : -1);
if (bs == null ) {
this.setCursor$I(0);
} else {
this.shm.loadShape$I(8);
this.setCursor$I(12);
}this.setModelkitProperty$S$O("highlight", bs);
this.setShapeProperty$I$S$O(8, "highlight", bs);
});

Clazz.newMeth(C$, 'refreshMeasures$Z', function (andStopMinimization) {
this.setShapeProperty$I$S$O(6, "refresh", null);
if (andStopMinimization) this.stopMinimization$();
});

Clazz.newMeth(C$, 'functionXY$S$I$I', function (functionName, nX, nY) {
var data=null;
if (functionName.indexOf$S("file:") == 0) data=this.getFileAsString3$S$Z$S(functionName.substring$I(5), false, null);
 else if (functionName.indexOf$S("data2d_") != 0) return this.sm.functionXY$S$I$I(functionName, nX, nY);
nX=Math.abs(nX);
nY=Math.abs(nY);
var fdata;
if (data == null ) {
fdata=this.getDataObj$S$javajs_util_BS$I(functionName, null, 2);
if (fdata != null ) return fdata;
data="";
}fdata=Clazz.array(Float.TYPE, [nX, nY]);
var f=Clazz.array(Float.TYPE, [nX * nY]);
$I$(50).parseStringInfestedFloatArray$S$javajs_util_BS$FA(data, null, f);
for (var i=0, n=0; i < nX; i++) for (var j=0; j < nY; j++) fdata[i][j]=f[n++];


return fdata;
});

Clazz.newMeth(C$, 'functionXYZ$S$I$I$I', function (functionName, nX, nY, nZ) {
var data=null;
if (functionName.indexOf$S("file:") == 0) data=this.getFileAsString3$S$Z$S(functionName.substring$I(5), false, null);
 else if (functionName.indexOf$S("data3d_") != 0) return this.sm.functionXYZ$S$I$I$I(functionName, nX, nY, nZ);
nX=Math.abs(nX);
nY=Math.abs(nY);
nZ=Math.abs(nZ);
var xyzdata;
if (data == null ) {
xyzdata=this.getDataObj$S$javajs_util_BS$I(functionName, null, 2);
if (xyzdata != null ) return xyzdata;
data="";
}xyzdata=Clazz.array(Float.TYPE, [nX, nY, nZ]);
var f=Clazz.array(Float.TYPE, [nX * nY * nZ ]);
$I$(50).parseStringInfestedFloatArray$S$javajs_util_BS$FA(data, null, f);
for (var i=0, n=0; i < nX; i++) for (var j=0; j < nY; j++) for (var k=0; k < nZ; k++) xyzdata[i][j][k]=f[n++];



return xyzdata;
});

Clazz.newMeth(C$, 'extractMolData$S', function (what) {
if (what == null ) {
var i=this.am.cmi;
if (i < 0 || this.ms.ac == 0 ) return null;
what=this.getModelNumberDotted$I(i);
}return this.getModelExtract$O$Z$Z$S(what, true, false, "V2000");
});

Clazz.newMeth(C$, 'getNMRPredict$S', function (type) {
type=type.toUpperCase$();
if (type.equals$O("H") || type.equals$O("1H") || type.equals$O("")  ) type="H1";
 else if (type.equals$O("C") || type.equals$O("13C") ) type="C13";
if (!type.equals$O("NONE")) {
if (!type.equals$O("C13") && !type.equals$O("H1") ) return "Type must be H1 or C13";
var molFile=this.getModelExtract$O$Z$Z$S("selected", true, false, "V2000");
var pt=molFile.indexOf$S("\n");
if (pt < 0) return null;
molFile="Jmol " + C$.version_date + molFile.substring$I(pt) ;
if (this.isApplet) {
this.showUrl$S(this.g.nmrUrlFormat + molFile);
return "opening " + this.g.nmrUrlFormat;
}}this.syncScript$S$S$I("true", "*", 0);
this.syncScript$S$S$I(type + "Simulate:", ".", 0);
return "sending request to JSpecView";
});

Clazz.newMeth(C$, 'getHelp$S', function (what) {
if (this.g.helpPath.indexOf$S("?") < 0) {
if (what.length$() > 0 && what.indexOf$S("?") != 0 ) what="?search=" + $I$(11).rep$S$S$S(what, " ", "%20");
what += (what.length$() == 0 ? "?ver=" : "&ver=") + $I$(3).majorVersion;
} else {
what="&" + what;
}this.showUrl$S(this.g.helpPath + what);
});

Clazz.newMeth(C$, 'getChemicalInfo$S$S$javajs_util_BS', function (smiles, info, bsAtoms) {
info=info.toLowerCase$();
var type="/";
switch (";inchi;inchikey;stdinchi;stdinchikey;name;image;drawing;names;".indexOf$S(";" + info + ";" )) {
case 0:
type="I";
break;
case 6:
type="K";
break;
case 15:
type="T";
break;
case 24:
type="S";
break;
case 36:
type="M";
break;
case 41:
case 47:
type="2";
break;
case 55:
type="N";
break;
}
var s=this.setLoadFormat$S$C$Z("_" + smiles, type, false);
if (type == "2") {
this.fm.loadImage$O$S$Z(s, "\u0001" + smiles, false);
return s;
}if (type == "/") {
if ($I$(11).isOneOf$S$S(info, ";alc;cdxml;cerius;charmm;cif;cml;ctx;gjf;gromacs;hyperchem;jme;maestro;mol;mol2;sybyl2;mrv;pdb;sdf;sdf3000;sln;smiles;xyz")) s += "file?format=" + info;
 else s += $I$(11).rep$S$S$S(info, " ", "%20");
}s=this.getFileAsString4$S$I$Z$Z$Z$S(s, -1, false, false, false, "file");
if (type == "M" && s.indexOf$S("\n") > 0 ) s=s.substring$I$I(0, s.indexOf$S("\n"));
 else if (info.equals$O("jme")) s=p$1.getPropertyManager.apply(this, []).fixJMEFormalCharges$javajs_util_BS$S(bsAtoms, s);
return s;
});

Clazz.newMeth(C$, 'addCommand$S', function (command) {
if (this.autoExit || !this.haveDisplay || !this.getPreserveState$()  ) return;
this.commandHistory.addCommand$S($I$(11).replaceAllCharacters$S$S$S(command, "\r\n\t", " "));
});

Clazz.newMeth(C$, 'pushState$', function () {
if (this.autoExit || !this.haveDisplay || !this.getPreserveState$()  ) return;
this.commandHistory.pushState$S(this.getStateInfo$());
});

Clazz.newMeth(C$, 'popState$', function () {
if (this.autoExit || !this.haveDisplay || !this.getPreserveState$()  ) return;
var state=this.commandHistory.popState$();
if (state != null ) this.evalStringQuiet$S(state);
});

Clazz.newMeth(C$, 'removeCommand$', function () {
return this.commandHistory.removeCommand$();
});

Clazz.newMeth(C$, 'getSetHistory$I', function (howFarBack) {
return this.commandHistory.getSetHistory$I(howFarBack);
});

Clazz.newMeth(C$, 'historyFind$S$I', function (cmd, dir) {
return this.commandHistory.find$S$I(cmd, dir);
});

Clazz.newMeth(C$, 'setHistory$S', function (fileName) {
this.commandHistory.getSetHistory$I(-2147483648);
this.commandHistory.addCommand$S(this.getFileAsString4$S$I$Z$Z$Z$S(fileName, -1, false, false, true, null));
});

Clazz.newMeth(C$, 'getOutputChannel$S$SA', function (localName, fullPath) {
return p$1.getOutputManager.apply(this, []).getOutputChannel$S$SA(localName, fullPath);
});

Clazz.newMeth(C$, 'writeTextFile$S$S', function (fileName, data) {
var params=Clazz.new_($I$(1,1));
params.put$O$O("fileName", fileName);
params.put$O$O("type", "txt");
params.put$O$O("text", data);
return this.outputToFile$java_util_Map(params);
});

Clazz.newMeth(C$, 'clipImageOrPasteText$S', function (text) {
if (!this.haveAccess$org_jmol_viewer_Viewer_ACCESS($I$(12).ALL)) return "no";
return p$1.getOutputManager.apply(this, []).clipImageOrPasteText$S(text);
});

Clazz.newMeth(C$, 'getClipboardText$', function () {
if (!this.haveAccess$org_jmol_viewer_Viewer_ACCESS($I$(12).ALL)) return "no";
try {
return p$1.getOutputManager.apply(this, []).getClipboardText$();
} catch (er) {
if (Clazz.exceptionOf(er,"Error")){
return $I$(28).$$S("clipboard is not accessible -- use signed applet");
} else {
throw er;
}
}
});

Clazz.newMeth(C$, 'processWriteOrCapture$java_util_Map', function (params) {
return p$1.getOutputManager.apply(this, []).processWriteOrCapture$java_util_Map(params);
});

Clazz.newMeth(C$, 'createZip$S$S$java_util_Map', function (fileName, type, params) {
var state=this.getStateInfo$();
var data=params.get$O("data");
if (fileName != null ) params.put$O$O("fileName", fileName);
params.put$O$O("type", type);
params.put$O$O("text", state);
if (Clazz.instanceOf(data, Clazz.array(String, -1))) params.put$O$O("scripts", data);
 else if (Clazz.instanceOf(data, "javajs.util.Lst")) params.put$O$O("imageData", data);
return p$1.getOutputManager.apply(this, []).outputToFile$java_util_Map(params);
});

Clazz.newMeth(C$, 'outputToFile$java_util_Map', function (params) {
return p$1.getOutputManager.apply(this, []).outputToFile$java_util_Map(params);
});

Clazz.newMeth(C$, 'getOutputManager', function () {
if (this.outputManager != null ) return this.outputManager;
return (this.outputManager=$I$(13,"getInterface$S$org_jmol_viewer_Viewer$S",["org.jmol.viewer.OutputManager" + (C$.isJS ? "JS" : "Awt"), this, "file"])).setViewer$org_jmol_viewer_Viewer$D(this, this.privateKey);
}, p$1);

Clazz.newMeth(C$, 'setSyncTarget$I$Z', function (mode, TF) {
switch (mode) {
case 0:
this.sm.syncingMouse=TF;
break;
case 1:
this.sm.syncingScripts=TF;
break;
case 2:
this.sm.syncSend$S$O$I(TF ? "GET_GRAPHICS" : "SET_GRAPHICS_OFF", "*", 0);
if (Float.isNaN$F(this.tm.stereoDegrees)) this.setFloatProperty$S$F("stereoDegrees", -5);
if (TF) {
this.setBooleanProperty$S$Z("_syncMouse", false);
this.setBooleanProperty$S$Z("_syncScript", false);
}return;
}
if (!this.sm.syncingScripts && !this.sm.syncingMouse ) p$1.setSync.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'syncScript$S$S$I', function (script, applet, port) {
this.sm.syncScript$S$S$I(script, applet, port);
});

Clazz.newMeth(C$, 'getModelIndexFromId$S', function (id) {
return this.ms.getModelIndexFromId$S(id);
});

Clazz.newMeth(C$, 'setSyncDriver$I', function (mode) {
this.sm.setSyncDriver$I(mode);
});

Clazz.newMeth(C$, 'setProteinType$org_jmol_c_STR$javajs_util_BS', function (type, bs) {
this.ms.setProteinType$javajs_util_BS$org_jmol_c_STR(bs == null  ? this.bsA$() : bs, type);
});

Clazz.newMeth(C$, 'getVanderwaalsMar$I', function (i) {
return (this.defaultVdw === $I$(7).USER  ? this.userVdwMars[i] : $I$(29).getVanderwaalsMar$I$org_jmol_c_VDW(i, this.defaultVdw));
});

Clazz.newMeth(C$, 'getVanderwaalsMarType$I$org_jmol_c_VDW', function (atomicAndIsotopeNumber, type) {
if (type == null ) type=this.defaultVdw;
 else switch (type) {
case $I$(7).AUTO:
case $I$(7).AUTO_BABEL:
case $I$(7).AUTO_JMOL:
case $I$(7).AUTO_RASMOL:
if (this.defaultVdw !== $I$(7).AUTO ) type=this.defaultVdw;
break;
default:
break;
}
if (type === $I$(7).USER  && this.bsUserVdws == null  ) type=$I$(7).JMOL;
return (type === $I$(7).USER  ? this.userVdwMars[atomicAndIsotopeNumber & 127] : $I$(29).getVanderwaalsMar$I$org_jmol_c_VDW(atomicAndIsotopeNumber, type));
});

Clazz.newMeth(C$, 'setVdwStr$S', function (name) {
var type=$I$(7).getVdwType$S(name);
if (type == null ) type=$I$(7).AUTO;
switch (type) {
case $I$(7).JMOL:
case $I$(7).BABEL:
case $I$(7).RASMOL:
case $I$(7).AUTO:
case $I$(7).USER:
break;
default:
type=$I$(7).JMOL;
}
if (type !== this.defaultVdw  && type === $I$(7).USER   && this.bsUserVdws == null  ) this.setUserVdw$org_jmol_c_VDW(this.defaultVdw);
this.defaultVdw=type;
this.g.setO$S$O("defaultVDW", type.getVdwLabel$());
});

Clazz.newMeth(C$, 'setUserVdw$org_jmol_c_VDW', function (mode) {
this.userVdwMars=Clazz.array(Integer.TYPE, [$I$(29).elementNumberMax]);
this.userVdws=Clazz.array(Float.TYPE, [$I$(29).elementNumberMax]);
this.bsUserVdws=Clazz.new_($I$(35,1));
if (mode === $I$(7).USER ) mode=$I$(7).JMOL;
for (var i=1; i < $I$(29).elementNumberMax; i++) {
this.userVdwMars[i]=$I$(29).getVanderwaalsMar$I$org_jmol_c_VDW(i, mode);
this.userVdws[i]=this.userVdwMars[i] / 1000.0;
}
});

Clazz.newMeth(C$, 'getDefaultVdwNameOrData$I$org_jmol_c_VDW$javajs_util_BS', function (mode, type, bs) {
switch (mode) {
case -2147483648:
return this.defaultVdw.getVdwLabel$();
case 2147483647:
if ((bs=this.bsUserVdws) == null ) return "";
type=$I$(7).USER;
break;
}
if (type == null  || type === $I$(7).AUTO  ) type=this.defaultVdw;
if (type === $I$(7).USER  && this.bsUserVdws == null  ) this.setUserVdw$org_jmol_c_VDW(this.defaultVdw);
return p$1.getDataManager.apply(this, []).getDefaultVdwNameOrData$org_jmol_c_VDW$javajs_util_BS(type, bs);
});

Clazz.newMeth(C$, 'deleteAtoms$javajs_util_BS$Z', function (bsAtoms, fullModels) {
var atomIndex=(bsAtoms == null  ? -1 : bsAtoms.nextSetBit$I(0));
if (atomIndex < 0) return 0;
this.clearModelDependentObjects$();
if (!fullModels) {
this.sm.modifySend$I$I$I$S(atomIndex, this.ms.at[atomIndex].mi, 4, "deleting atom " + this.ms.at[atomIndex].getAtomName$());
this.ms.deleteAtoms$javajs_util_BS(bsAtoms);
var n=this.slm.deleteAtoms$javajs_util_BS(bsAtoms);
this.setTainted$Z(true);
this.sm.modifySend$I$I$I$S(atomIndex, this.ms.at[atomIndex].mi, -4, "OK");
return n;
}return this.deleteModels$I$javajs_util_BS(this.ms.at[atomIndex].mi, bsAtoms);
});

Clazz.newMeth(C$, 'deleteModels$I$javajs_util_BS', function (modelIndex, bsAtoms) {
this.clearModelDependentObjects$();
this.sm.modifySend$I$I$I$S(-1, modelIndex, 5, "deleting model " + this.getModelNumberDotted$I(modelIndex));
this.setCurrentModelIndexClear$I$Z(0, false);
this.am.setAnimationOn$Z(false);
var bsD0=$I$(31).copy$javajs_util_BS(this.slm.bsDeleted);
var bsModels=(bsAtoms == null  ? $I$(31).newAndSetBit$I(modelIndex) : this.ms.getModelBS$javajs_util_BS$Z(bsAtoms, false));
var bsDeleted=this.ms.deleteModels$javajs_util_BS(bsModels);
this.slm.processDeletedModelAtoms$javajs_util_BS(bsDeleted);
if (this.eval != null ) this.eval.deleteAtomsInVariables$javajs_util_BS(bsDeleted);
this.setAnimationRange$I$I(0, 0);
p$1.clearRepaintManager$I.apply(this, [-1]);
this.am.clear$();
this.am.initializePointers$I(1);
this.setCurrentModelIndexClear$I$Z(this.ms.mc > 1 ? -1 : 0, this.ms.mc > 1);
this.hoverAtomIndex=-1;
p$1.setFileLoadStatus$org_jmol_c_FIL$S$S$S$S$Boolean.apply(this, [$I$(40).DELETED, null, null, null, null, null]);
this.refreshMeasures$Z(true);
if (bsD0 != null ) bsDeleted.andNot$javajs_util_BS(bsD0);
this.sm.modifySend$I$I$I$S(-1, modelIndex, -5, "OK");
return $I$(31).cardinalityOf$javajs_util_BS(bsDeleted);
});

Clazz.newMeth(C$, 'deleteBonds$javajs_util_BS', function (bsDeleted) {
var modelIndex=this.ms.bo[bsDeleted.nextSetBit$I(0)].atom1.mi;
this.sm.modifySend$I$I$I$S(-1, modelIndex, 2, "delete bonds " + $I$(27).eBond$javajs_util_BS(bsDeleted));
this.ms.deleteBonds$javajs_util_BS$Z(bsDeleted, false);
this.sm.modifySend$I$I$I$S(-1, modelIndex, -2, "OK");
});

Clazz.newMeth(C$, 'deleteModelAtoms$I$I$I$javajs_util_BS', function (modelIndex, firstAtomIndex, nAtoms, bsModelAtoms) {
this.sm.modifySend$I$I$I$S(-1, modelIndex, 1, "delete atoms " + $I$(27).eBS$javajs_util_BS(bsModelAtoms));
$I$(31).deleteBits$javajs_util_BS$javajs_util_BS(this.tm.bsFrameOffsets, bsModelAtoms);
p$1.getDataManager.apply(this, []).deleteModelAtoms$I$I$javajs_util_BS(firstAtomIndex, nAtoms, bsModelAtoms);
this.sm.modifySend$I$I$I$S(-1, modelIndex, -1, "OK");
});

Clazz.newMeth(C$, 'getQuaternionFrame$', function () {
return this.g.quaternionFrame.charAt$I(this.g.quaternionFrame.length$() == 2 ? 1 : 0);
});

Clazz.newMeth(C$, 'loadImageData$O$S$S$O', function (image, nameOrError, echoName, sco) {
var sc=sco;
if (image == null  && nameOrError != null  ) this.scriptEcho$S(nameOrError);
if (echoName == null ) {
this.setBackgroundImage$S$O((image == null  ? null : nameOrError), image);
} else if (echoName.startsWith$S("\u0001")) {
this.sm.showImage$S$O(echoName, image);
} else if (echoName.startsWith$S("\u0000")) {
if (image != null ) {
this.setWindowDimensions$FA(Clazz.array(Float.TYPE, -1, [this.apiPlatform.getImageWidth$O(image), this.apiPlatform.getImageHeight$O(image)]));
}} else {
this.shm.loadShape$I(31);
this.setShapeProperty$I$S$O(31, "text", nameOrError);
if (image != null ) this.setShapeProperty$I$S$O(31, "image", image);
}if (C$.isJS && sc != null  ) {
sc.mustResumeEval=true;
this.eval.resumeEval$O(sc);
}return false;
});

Clazz.newMeth(C$, 'cd$S', function (dir) {
if (dir == null ) {
dir=".";
} else if (dir.length$() == 0) {
this.setStringProperty$S$S("defaultDirectory", "");
dir=".";
}dir=this.fm.getDefaultDirectory$S(dir + (dir.equals$O("=") ? "" : dir.endsWith$S("/") ? "X.spt" : "/X.spt"));
if (dir.length$() > 0) this.setStringProperty$S$S("defaultDirectory", dir);
var path=this.fm.getFilePath$S$Z$Z(dir + "/", true, false);
if (path.startsWith$S("file:/")) $I$(26).setLocalPath$org_jmol_viewer_Viewer$S$Z(this, dir, false);
return dir;
});

Clazz.newMeth(C$, 'setErrorMessage$S$S', function (errMsg, errMsgUntranslated) {
this.errorMessageUntranslated=errMsgUntranslated;
if (errMsg != null ) this.eval.stopScriptThreads$();
return (this.errorMessage=errMsg);
});

Clazz.newMeth(C$, 'getErrorMessage$', function () {
return this.errorMessage;
});

Clazz.newMeth(C$, 'getErrorMessageUn$', function () {
return this.errorMessageUntranslated == null  ? this.errorMessage : this.errorMessageUntranslated;
});

Clazz.newMeth(C$, 'setShapeErrorState$I$S', function (shapeID, state) {
this.currentShapeID=shapeID;
this.currentShapeState=state;
});

Clazz.newMeth(C$, 'getShapeErrorState$', function () {
if (this.currentShapeID < 0) return "";
this.shm.releaseShape$I(this.currentShapeID);
p$1.clearRepaintManager$I.apply(this, [this.currentShapeID]);
return $I$(3).getShapeClassName$I$Z(this.currentShapeID, false) + " " + this.currentShapeState ;
});

Clazz.newMeth(C$, 'handleError$Error$Z', function (er, doClear) {
try {
if (doClear) p$1.zapMsg$S.apply(this, ["" + er]);
this.undoClear$();
if ($I$(2).getLogLevel$() == 0) $I$(2).setLogLevel$I(4);
this.setCursor$I(0);
this.setBooleanProperty$S$Z("refreshing", true);
this.fm.setPathForAllFiles$S("");
$I$(2).error$S("vwr handling error condition: " + er + "  " );
er.printStackTrace$();
this.notifyError$S$S$S("Error", "doClear=" + doClear + "; " + er , "" + er);
} catch (e1) {
try {
$I$(2).error$S("Could not notify error " + er + ": due to " + e1 );
} catch (er2) {
}
}
});

Clazz.newMeth(C$, 'getFunctions$Z', function (isStatic) {
return (isStatic ? C$.staticFunctions : this.localFunctions);
});

Clazz.newMeth(C$, 'removeFunction$S', function (name) {
name=name.toLowerCase$();
var $function=this.getFunction$S(name);
if ($function == null ) return;
C$.staticFunctions.remove$O(name);
this.localFunctions.remove$O(name);
});

Clazz.newMeth(C$, 'getFunction$S', function (name) {
if (name == null ) return null;
var $function=(C$.isStaticFunction$S(name) ? C$.staticFunctions : this.localFunctions).get$O(name);
return ($function == null  || $function.geTokens$() == null   ? null : $function);
});

Clazz.newMeth(C$, 'isStaticFunction$S', function (name) {
return name.startsWith$S("static_");
}, 1);

Clazz.newMeth(C$, 'isFunction$S', function (name) {
return (C$.isStaticFunction$S(name) ? C$.staticFunctions : this.localFunctions).containsKey$O(name);
});

Clazz.newMeth(C$, 'clearFunctions$', function () {
C$.staticFunctions.clear$();
this.localFunctions.clear$();
});

Clazz.newMeth(C$, 'addFunction$org_jmol_api_JmolScriptFunction', function ($function) {
var name=$function.getName$();
(C$.isStaticFunction$S(name) ? C$.staticFunctions : this.localFunctions).put$O$O(name, $function);
});

Clazz.newMeth(C$, 'getFunctionCalls$S', function (selectedFunction) {
return this.getStateCreator$().getFunctionCalls$S(selectedFunction);
});

Clazz.newMeth(C$, 'checkPrivateKey$D', function (privateKey) {
return privateKey == this.privateKey ;
});

Clazz.newMeth(C$, 'bindAction$S$S', function (desc, name) {
if (this.haveDisplay) this.acm.bind$S$S(desc, name);
});

Clazz.newMeth(C$, 'unBindAction$S$S', function (desc, name) {
if (this.haveDisplay) this.acm.unbindAction$S$S(desc, name);
});

Clazz.newMeth(C$, 'calculateStruts$javajs_util_BS$javajs_util_BS', function (bs1, bs2) {
return this.ms.calculateStruts$javajs_util_BS$javajs_util_BS(bs1 == null  ? this.bsA$() : bs1, bs2 == null  ? this.bsA$() : bs2);
});

Clazz.newMeth(C$, 'getPreserveState$', function () {
return (this.g.preserveState && this.scm != null  );
});

Clazz.newMeth(C$, 'isKiosk$', function () {
return this.isKiosk;
});

Clazz.newMeth(C$, 'hasFocus$', function () {
return (this.haveDisplay && (this.isKiosk || this.apiPlatform.hasFocus$O(this.display) ) );
});

Clazz.newMeth(C$, 'setFocus$', function () {
if (this.haveDisplay && !this.apiPlatform.hasFocus$O(this.display) ) this.apiPlatform.requestFocusInWindow$O(this.display);
});

Clazz.newMeth(C$, 'stopMinimization$', function () {
if (this.minimizer != null ) {
this.minimizer.setProperty$S$O("stop", null);
}});

Clazz.newMeth(C$, 'clearMinimization$', function () {
if (this.minimizer != null ) this.minimizer.setProperty$S$O("clear", null);
});

Clazz.newMeth(C$, 'getMinimizationInfo$', function () {
return (this.minimizer == null  ? "" : this.minimizer.getProperty$S$I("log", 0));
});

Clazz.newMeth(C$, 'checkMinimization', function () {
this.refreshMeasures$Z(true);
if (!this.g.monitorEnergy) return;
try {
this.minimize$org_jmol_api_JmolScriptEvaluator$I$F$javajs_util_BS$javajs_util_BS$F$Z$Z$Z$Z(null, 0, 0, this.getAllAtoms$(), null, 0, false, false, true, false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.echoMessage$S(this.getP$S("_minimizationForceField") + " Energy = " + this.getP$S("_minimizationEnergy") );
}, p$1);

Clazz.newMeth(C$, 'minimize$org_jmol_api_JmolScriptEvaluator$I$F$javajs_util_BS$javajs_util_BS$F$Z$Z$Z$Z', function (eval, steps, crit, bsSelected, bsFixed, rangeFixed, addHydrogen, isOnly, isSilent, isLoad2D) {
var ff=this.g.forceField;
var bsInFrame=this.getFrameAtoms$();
if (bsSelected == null ) bsSelected=this.getModelUndeletedAtomsBitSet$I(this.getVisibleFramesBitSet$().length$() - 1);
 else bsSelected.and$javajs_util_BS(bsInFrame);
if (rangeFixed <= 0 ) rangeFixed=5.0;
var bsMotionFixed=$I$(31,"copy$javajs_util_BS",[bsFixed == null  ? this.slm.getMotionFixedAtoms$() : bsFixed]);
var haveFixed=(bsMotionFixed.cardinality$() > 0);
if (haveFixed) bsSelected.andNot$javajs_util_BS(bsMotionFixed);
var bsNearby=(isOnly ? Clazz.new_($I$(35,1)) : this.ms.getAtomsWithinRadius$F$javajs_util_BS$Z$org_jmol_atomdata_RadiusData(rangeFixed, bsSelected, true, null));
bsNearby.andNot$javajs_util_BS(bsSelected);
if (haveFixed) {
bsMotionFixed.and$javajs_util_BS(bsNearby);
} else {
bsMotionFixed=bsNearby;
}bsMotionFixed.and$javajs_util_BS(bsInFrame);
if (addHydrogen) bsSelected.or$javajs_util_BS(this.addHydrogens$javajs_util_BS$Z$Z(bsSelected, isLoad2D, isSilent));
var n=bsSelected.cardinality$();
if (ff.equals$O("MMFF") && n > this.g.minimizationMaxAtoms ) {
this.scriptStatusMsg$S$S("Too many atoms for minimization (" + n + ">" + this.g.minimizationMaxAtoms + "); use 'set minimizationMaxAtoms' to increase this limit" , "minimization: too many atoms");
return;
}try {
if (!isSilent) $I$(2,"info$S",["Minimizing " + bsSelected.cardinality$() + " atoms" ]);
this.getMinimizer$Z(true).minimize$I$D$javajs_util_BS$javajs_util_BS$Z$Z$S(steps, crit, bsSelected, bsMotionFixed, haveFixed, isSilent, ff);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"org.jmol.viewer.JmolAsyncException")){
var e = e$$;
{
if (eval != null ) eval.loadFileResourceAsync$S(e.getFileName$());
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
$I$(2,"error$S",["Minimization error: " + e.toString()]);
e.printStackTrace$();
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'setMotionFixedAtoms$javajs_util_BS', function (bs) {
this.slm.setMotionFixedAtoms$javajs_util_BS(bs);
});

Clazz.newMeth(C$, 'getMotionFixedAtoms$', function () {
return this.slm.getMotionFixedAtoms$();
});

Clazz.newMeth(C$, 'getAtomicPropertyState$javajs_util_SB$B$javajs_util_BS$S$FA', function (commands, type, bs, name, data) {
this.getStateCreator$().getAtomicPropertyStateBuffer$javajs_util_SB$I$javajs_util_BS$S$FA(commands, type, bs, name, data);
});

Clazz.newMeth(C$, 'getCenterAndPoints$javajs_util_Lst$Z', function (atomSets, addCenter) {
return this.ms.getCenterAndPoints$javajs_util_Lst$Z(atomSets, addCenter);
});

Clazz.newMeth(C$, 'writeFileData$S$S$I$OA', function (fileName, type, modelIndex, parameters) {
return p$1.getOutputManager.apply(this, []).writeFileData$S$S$I$OA(fileName, type, modelIndex, parameters);
});

Clazz.newMeth(C$, 'getPdbData$I$S$javajs_util_BS$OA$javajs_util_OC$Z', function (modelIndex, type, bsAtoms, parameters, oc, getStructure) {
return p$1.getPropertyManager.apply(this, []).getPdbData$I$S$javajs_util_BS$OA$javajs_util_OC$Z(modelIndex, type, bsAtoms == null  ? this.bsA$() : bsAtoms, parameters, oc, getStructure);
});

Clazz.newMeth(C$, 'getGroupsWithin$I$javajs_util_BS', function (nResidues, bs) {
return this.ms.getGroupsWithin$I$javajs_util_BS(nResidues, bs);
});

Clazz.newMeth(C$, 'setShapeSize$I$I$javajs_util_BS', function (shapeID, madOrMad10, bsSelected) {
if (bsSelected == null ) bsSelected=this.bsA$();
this.shm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(shapeID, madOrMad10, null, bsSelected);
});

Clazz.newMeth(C$, 'setShapeProperty$I$S$O', function (shapeID, propertyName, value) {
if (shapeID >= 0) this.shm.setShapePropertyBs$I$S$O$javajs_util_BS(shapeID, propertyName, value, null);
});

Clazz.newMeth(C$, 'getShapeProperty$I$S', function (shapeType, propertyName) {
return this.shm.getShapePropertyIndex$I$S$I(shapeType, propertyName, -2147483648);
});

Clazz.newMeth(C$, 'getShapePropertyAsInt$I$S', function (shapeID, propertyName) {
var value=this.getShapeProperty$I$S(shapeID, propertyName);
return value == null  || !(Clazz.instanceOf(value, "java.lang.Integer"))  ? -2147483648 : (value).intValue$();
}, p$1);

Clazz.newMeth(C$, 'setModelVisibility$', function () {
if (this.shm != null ) this.shm.setModelVisibility$();
});

Clazz.newMeth(C$, 'resetShapes$Z', function (andCreateNew) {
this.shm.resetShapes$();
if (andCreateNew) {
this.shm.loadDefaultShapes$org_jmol_modelset_ModelSet(this.ms);
p$1.clearRepaintManager$I.apply(this, [-1]);
}});

Clazz.newMeth(C$, 'setParallel$Z', function (TF) {
return (this.isParallel=this.g.multiProcessor && TF );
});

Clazz.newMeth(C$, 'isParallel$', function () {
return this.g.multiProcessor && this.isParallel ;
});

Clazz.newMeth(C$, 'undoClear$', function () {
this.actionStates.clear$();
this.actionStatesRedo.clear$();
});

Clazz.newMeth(C$, 'undoMoveAction$I$I', function (action, n) {
this.getStateCreator$().undoMoveAction$I$I(action, n);
});

Clazz.newMeth(C$, 'undoMoveActionClear$I$I$Z', function (taintedAtom, type, clearRedo) {
if (this.g.preserveState) this.getStateCreator$().undoMoveActionClear$I$I$Z(taintedAtom, type, clearRedo);
});

Clazz.newMeth(C$, 'moveAtomWithHydrogens$I$I$I$I$javajs_util_BS', function (atomIndex, deltaX, deltaY, deltaZ, bsAtoms) {
this.stopMinimization$();
if (bsAtoms == null ) {
var atom=this.ms.at[atomIndex];
bsAtoms=$I$(31).newAndSetBit$I(atomIndex);
var bonds=atom.bonds;
if (bonds != null ) for (var i=0; i < bonds.length; i++) {
var atom2=bonds[i].getOtherAtom$org_jmol_modelset_Atom(atom);
if (atom2.getElementNumber$() == 1) bsAtoms.set$I(atom2.i);
}
}this.moveSelected$I$I$I$I$I$javajs_util_BS$Z$Z$I(deltaX, deltaY, deltaZ, -2147483648, -2147483648, bsAtoms, true, true, 0);
});

Clazz.newMeth(C$, 'isModelPDB$I', function (i) {
return this.ms.am[i].isBioModel;
});

Clazz.newMeth(C$, 'deleteMeasurement$I', function (i) {
this.setShapeProperty$I$S$O(6, "delete", Integer.valueOf$I(i));
});

Clazz.newMeth(C$, 'getSmiles$javajs_util_BS', function (bs) {
var is2D=("2D".equals$O(this.ms.getInfoM$S("dimension")));
return this.getSmilesOpt$javajs_util_BS$I$I$I$S(bs, -1, -1, (bs == null  && $I$(2).debugging  ? 131072 : 0) | (is2D ? 32 : 0), null);
});

Clazz.newMeth(C$, 'getOpenSmiles$javajs_util_BS', function (bs) {
return this.getSmilesOpt$javajs_util_BS$I$I$I$S(bs, -1, -1, 5 | (bs == null  && $I$(2).debugging  ? 131072 : 0), "/openstrict///");
});

Clazz.newMeth(C$, 'getBioSmiles$javajs_util_BS', function (bs) {
return this.getSmilesOpt$javajs_util_BS$I$I$I$S(bs, -1, -1, 3145728 | 5242880 | 17825792 | ($I$(2).debugging ? 131072 : 0) , null);
});

Clazz.newMeth(C$, 'getSmilesOpt$javajs_util_BS$I$I$I$S', function (bsSelected, index1, index2, flags, options) {
var bioComment=((flags & 17825792) == 17825792 ? C$.getJmolVersion$() + " " + this.getModelName$I(this.am.cmi)  : options);
var atoms=this.ms.at;
if (bsSelected == null ) {
if (index1 < 0 || index2 < 0 ) {
bsSelected=this.bsA$();
} else {
if ((flags & 1048576) == 1048576) {
if (index1 > index2) {
var i=index1;
index1=index2;
index2=i;
}index1=atoms[index1].group.firstAtomIndex;
index2=atoms[index2].group.lastAtomIndex;
}bsSelected=Clazz.new_($I$(35,1));
bsSelected.setBits$I$I(index1, index2 + 1);
}}var sm=this.getSmilesMatcher$();
if ($I$(3).isSmilesCanonical$S(options)) {
var smiles=sm.getSmiles$org_jmol_util_NodeA$I$javajs_util_BS$S$I(atoms, this.ms.ac, bsSelected, "/noAromatic/", flags);
return this.getChemicalInfo$S$S$javajs_util_BS(smiles, "smiles", null).trim$();
}return sm.getSmiles$org_jmol_util_NodeA$I$javajs_util_BS$S$I(atoms, this.ms.ac, bsSelected, bioComment, flags);
});

Clazz.newMeth(C$, 'alert$S', function (msg) {
this.prompt$S$S$SA$Z(msg, null, null, true);
});

Clazz.newMeth(C$, 'prompt$S$S$SA$Z', function (label, data, list, asButtons) {
return (this.isKiosk ? "null" : this.apiPlatform.prompt$S$S$SA$Z(label, data, list, asButtons));
});

Clazz.newMeth(C$, 'dialogAsk$S$S$java_util_Map', function (type, fileName, params) {
{
return prompt(type, fileName);
}
});

Clazz.newMeth(C$, 'initializeExporter$java_util_Map', function (params) {
var isJS=params.get$O("type").equals$O("JS");
if (isJS) {
if (this.jsExporter3D != null ) {
this.jsExporter3D.initializeOutput$org_jmol_viewer_Viewer$D$java_util_Map(this, this.privateKey, params);
return this.jsExporter3D;
}} else {
var fileName=params.get$O("fileName");
var fullPath=params.get$O("fullPath");
var out=this.getOutputChannel$S$SA(fileName, fullPath);
if (out == null ) return null;
params.put$O$O("outputChannel", out);
}var export3D=$I$(13).getOption$S$org_jmol_viewer_Viewer$S("export.Export3D", this, "export");
if (export3D == null ) return null;
var exporter=export3D.initializeExporter$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map(this, this.privateKey, this.gdata, params);
if (isJS && exporter != null  ) this.jsExporter3D=export3D;
return (exporter == null  ? null : export3D);
});

Clazz.newMeth(C$, 'getMouseEnabled$', function () {
return this.refreshing && !this.creatingImage ;
});

Clazz.newMeth(C$, 'calcAtomsMinMax$javajs_util_BS$org_jmol_util_BoxInfo', function (bs, boxInfo) {
this.ms.calcAtomsMinMax$javajs_util_BS$org_jmol_util_BoxInfo(bs, boxInfo);
});

Clazz.newMeth(C$, 'getObjectMap$java_util_Map$C', function (map, c) {
switch (c.$c()) {
case 123:
if (p$1.getScriptManager.apply(this, []) != null ) {
var m=map;
if (this.definedAtomSets != null ) m.putAll$java_util_Map(this.definedAtomSets);
$I$(36).getTokensType$java_util_Map$I(m, 2097152);
}return;
case 36:
case 48:
this.shm.getObjectMap$java_util_Map$Z(map, c == "$");
return;
}
});

Clazz.newMeth(C$, 'setPicked$I$Z', function (atomIndex, andReset) {
var pickedSet=null;
var pickedList=null;
if (atomIndex >= 0) {
if (andReset) this.setPicked$I$Z(-1, false);
this.g.setI$S$I("_atompicked", atomIndex);
pickedSet=this.g.getParam$S$Z("picked", true);
pickedList=this.g.getParam$S$Z("pickedList", true);
}if (pickedSet == null  || pickedSet.tok != 10 ) {
pickedSet=$I$(44,"newV$I$O",[10, Clazz.new_($I$(35,1))]);
pickedList=$I$(44,"getVariableList$javajs_util_Lst",[Clazz.new_($I$(8,1))]);
this.g.setUserVariable$S$org_jmol_script_SV("picked", pickedSet);
this.g.setUserVariable$S$org_jmol_script_SV("pickedList", pickedList);
}if (atomIndex < 0) return;
$I$(44).getBitSet$org_jmol_script_SV$Z(pickedSet, false).set$I(atomIndex);
var p=pickedList.pushPop$org_jmol_script_SV$org_jmol_script_SV(null, null);
if (p.tok == 10) pickedList.pushPop$org_jmol_script_SV$org_jmol_script_SV(null, p);
if (p.tok != 10 || !(p.value).get$I(atomIndex) ) pickedList.pushPop$org_jmol_script_SV$org_jmol_script_SV(null, $I$(44,"newV$I$O",[10, $I$(31).newAndSetBit$I(atomIndex)]));
});

Clazz.newMeth(C$, 'runScript$S', function (script) {
return "" + this.evaluateExpression$O(Clazz.array($I$(36), -2, [Clazz.array($I$(36), -1, [$I$(36).tokenScript, $I$(36).tokenLeftParen, $I$(44).newS$S(script), $I$(36).tokenRightParen])]));
});

Clazz.newMeth(C$, 'runScriptCautiously$S', function (script) {
var outputBuffer=Clazz.new_($I$(37,1));
try {
if (p$1.getScriptManager.apply(this, []) == null ) return null;
this.eval.runScriptBuffer$S$javajs_util_SB$Z(script, outputBuffer, false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return this.eval.getErrorMessage$();
} else {
throw e;
}
}
return outputBuffer.toString();
});

Clazz.newMeth(C$, 'setFrameDelayMs$J', function (millis) {
this.ms.setFrameDelayMs$J$javajs_util_BS(millis, this.getVisibleFramesBitSet$());
});

Clazz.newMeth(C$, 'getBaseModelBitSet$', function () {
return this.ms.getModelAtomBitSetIncludingDeleted$I$Z(this.getJDXBaseModelIndex$I(this.am.cmi), true);
});

Clazz.newMeth(C$, 'clearTimeouts$', function () {
if (this.timeouts != null ) $I$(51).clear$java_util_Map(this.timeouts);
});

Clazz.newMeth(C$, 'setTimeout$S$I$S', function (name, mSec, script) {
if (!this.haveDisplay || this.headless || this.autoExit  ) return;
if (name == null ) {
this.clearTimeouts$();
return;
}if (this.timeouts == null ) {
this.timeouts=Clazz.new_($I$(1,1));
}$I$(51).setTimeout$org_jmol_viewer_Viewer$java_util_Map$S$I$S(this, this.timeouts, name, mSec, script);
});

Clazz.newMeth(C$, 'triggerTimeout$S', function (name) {
if (!this.haveDisplay || this.timeouts == null  ) return;
$I$(51).trigger$java_util_Map$S(this.timeouts, name);
});

Clazz.newMeth(C$, 'clearTimeout$S', function (name) {
this.setTimeout$S$I$S(name, 0, null);
});

Clazz.newMeth(C$, 'showTimeout$S', function (name) {
return (this.haveDisplay ? $I$(51).showTimeout$java_util_Map$S(this.timeouts, name) : "");
});

Clazz.newMeth(C$, 'getOrCalcPartialCharges$javajs_util_BS$javajs_util_BS', function (bsSelected, bsIgnore) {
if (bsSelected == null ) bsSelected=this.bsA$();
bsSelected=$I$(31).copy$javajs_util_BS(bsSelected);
$I$(31).andNot$javajs_util_BS$javajs_util_BS(bsSelected, bsIgnore);
$I$(31).andNot$javajs_util_BS$javajs_util_BS(bsSelected, this.ms.bsPartialCharges);
if (!bsSelected.isEmpty$()) this.calculatePartialCharges$javajs_util_BS(bsSelected);
return this.ms.getPartialCharges$();
});

Clazz.newMeth(C$, 'calculatePartialCharges$javajs_util_BS', function (bsSelected) {
if (bsSelected == null  || bsSelected.isEmpty$() ) bsSelected=this.getModelUndeletedAtomsBitSetBs$javajs_util_BS(this.getVisibleFramesBitSet$());
if (bsSelected.isEmpty$()) return;
$I$(2,"info$S",["Calculating MMFF94 partial charges for " + bsSelected.cardinality$() + " atoms" ]);
this.getMinimizer$Z(true).calculatePartialCharges$org_jmol_modelset_ModelSet$javajs_util_BS$javajs_util_BS(this.ms, bsSelected, null);
});

Clazz.newMeth(C$, 'setCurrentModelID$S', function (id) {
var modelIndex=this.am.cmi;
if (modelIndex >= 0) this.ms.setInfo$I$O$O(modelIndex, "modelID", id);
});

Clazz.newMeth(C$, 'cacheClear$', function () {
this.fm.cacheClear$();
this.ligandModelSet=null;
this.ligandModels=null;
this.ms.clearCache$();
});

Clazz.newMeth(C$, 'cachePut$S$O', function (key, data) {
$I$(2).info$S("Viewer cachePut " + key);
this.fm.cachePut$S$O(key, data);
});

Clazz.newMeth(C$, 'cacheFileByName$S$Z', function (fileName, isAdd) {
if (fileName == null ) {
this.cacheClear$();
return -1;
}return this.fm.cacheFileByNameAdd$S$Z(fileName, isAdd);
});

Clazz.newMeth(C$, 'clearThreads$', function () {
if (this.eval != null ) this.eval.stopScriptThreads$();
this.stopMinimization$();
this.tm.clearThreads$();
this.setAnimationOn$Z(false);
});

Clazz.newMeth(C$, 'getEvalContextAndHoldQueue$org_jmol_api_JmolScriptEvaluator', function (eval) {
if (eval == null  || !(C$.isJS || this.testAsync ) ) return null;
eval.pushContextDown$S("getEvalContextAndHoldQueue");
var sc=eval.getThisContext$();
sc.setMustResume$();
sc.isJSThread=true;
this.queueOnHold=true;
return sc;
});

Clazz.newMeth(C$, 'resizeInnerPanel$I$I', function (width, height) {
if (!this.autoExit && this.haveDisplay ) return this.sm.resizeInnerPanel$I$I(width, height);
this.setScreenDimension$I$I(width, height);
return Clazz.array(Integer.TYPE, -1, [this.dimScreen.width, this.dimScreen.height]);
});

Clazz.newMeth(C$, 'getDefaultPropertyParam$I', function (propertyID) {
return p$1.getPropertyManager.apply(this, []).getDefaultPropertyParam$I(propertyID);
});

Clazz.newMeth(C$, 'getPropertyNumber$S', function (name) {
return p$1.getPropertyManager.apply(this, []).getPropertyNumber$S(name);
});

Clazz.newMeth(C$, 'checkPropertyParameter$S', function (name) {
return p$1.getPropertyManager.apply(this, []).checkPropertyParameter$S(name);
});

Clazz.newMeth(C$, 'extractProperty$O$O$I', function (property, args, pt) {
return p$1.getPropertyManager.apply(this, []).extractProperty$O$O$I$javajs_util_Lst$Z(property, args, pt, null, false);
});

Clazz.newMeth(C$, 'addHydrogens$javajs_util_BS$Z$Z', function (bsAtoms, is2DLoad, isSilent) {
var doAll=(bsAtoms == null );
if (bsAtoms == null ) bsAtoms=this.getModelUndeletedAtomsBitSet$I(this.getVisibleFramesBitSet$().length$() - 1);
var bsB=Clazz.new_($I$(35,1));
if (bsAtoms.isEmpty$()) return bsB;
var modelIndex=this.ms.at[bsAtoms.nextSetBit$I(0)].mi;
if (modelIndex != this.ms.mc - 1) return bsB;
var vConnections=Clazz.new_($I$(8,1));
var pts=this.getAdditionalHydrogens$javajs_util_BS$Z$Z$javajs_util_Lst(bsAtoms, doAll, false, vConnections);
var wasAppendNew=false;
wasAppendNew=this.g.appendNew;
if (pts.length > 0) {
this.clearModelDependentObjects$();
try {
bsB=(is2DLoad ? this.ms.addHydrogens$javajs_util_Lst$javajs_util_P3A(vConnections, pts) : this.addHydrogensInline$javajs_util_BS$javajs_util_Lst$javajs_util_P3A(bsAtoms, vConnections, pts));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
if (wasAppendNew) this.g.appendNew=true;
}if (!isSilent) this.scriptStatus$S($I$(28,"i$S$I",[$I$(28).$$S("{0} hydrogens added"), pts.length]));
return bsB;
});

Clazz.newMeth(C$, 'addHydrogensInline$javajs_util_BS$javajs_util_Lst$javajs_util_P3A', function (bsAtoms, vConnections, pts) {
if (p$1.getScriptManager.apply(this, []) == null ) return null;
return this.scm.addHydrogensInline$javajs_util_BS$javajs_util_Lst$javajs_util_P3A(bsAtoms, vConnections, pts);
});

Clazz.newMeth(C$, 'evalFunctionFloat$O$O$FA', function (func, params, values) {
return (p$1.getScriptManager.apply(this, []) == null  ? 0 : this.eval.evalFunctionFloat$O$O$FA(func, params, values));
});

Clazz.newMeth(C$, 'evalParallel$org_jmol_script_ScriptContext$org_jmol_viewer_ShapeManager', function (context, shapeManager) {
this.displayLoadErrors=false;
var isOK=p$1.getScriptManager.apply(this, []) != null  && this.eval.evalParallel$org_jmol_script_ScriptContext$org_jmol_viewer_ShapeManager(context, (shapeManager == null  ? this.shm : shapeManager)) ;
this.displayLoadErrors=true;
return isOK;
});

Clazz.newMeth(C$, 'evaluateExpression$O', function (stringOrTokens) {
return (p$1.getScriptManager.apply(this, []) == null  ? null : this.eval.evaluateExpression$O$Z$Z(stringOrTokens, false, false));
});

Clazz.newMeth(C$, 'evaluateExpressionAsVariable$O', function (stringOrTokens) {
return (p$1.getScriptManager.apply(this, []) == null  ? null : this.eval.evaluateExpression$O$Z$Z(stringOrTokens, true, false));
});

Clazz.newMeth(C$, 'getAtomBitSet$O', function (atomExpression) {
if (Clazz.instanceOf(atomExpression, "javajs.util.BS")) return this.slm.excludeAtoms$javajs_util_BS$Z(atomExpression, false);
p$1.getScriptManager.apply(this, []);
return this.getAtomBitSetEval$org_jmol_api_JmolScriptEvaluator$O(this.eval, atomExpression);
});

Clazz.newMeth(C$, 'getScriptContext$S', function (why) {
return (p$1.getScriptManager.apply(this, []) == null  ? null : this.eval.getScriptContext$S(why));
});

Clazz.newMeth(C$, 'getAtomDefs$java_util_Map', function (names) {
var keys=Clazz.new_($I$(8,1));
for (var e, $e = names.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (Clazz.instanceOf(e.getValue$(), "javajs.util.BS")) keys.addLast$O("{" + e.getKey$() + "} <" + (e.getValue$()).cardinality$() + " atoms>\n" );

var n=keys.size$();
var k=Clazz.array(String, [n]);
keys.toArray$OA(k);
$I$(52).sort$OA(k);
var sb=Clazz.new_($I$(37,1));
for (var i=0; i < n; i++) sb.append$S(k[i]);

return sb.append$S("\n").toString();
});

Clazz.newMeth(C$, 'setCGO$javajs_util_Lst', function (info) {
this.shm.loadShape$I(23);
this.shm.setShapePropertyBs$I$S$O$javajs_util_BS(23, "setCGO", info, null);
});

Clazz.newMeth(C$, 'setModelSet$org_jmol_modelset_ModelSet', function (modelSet) {
this.ms=this.mm.modelSet=modelSet;
});

Clazz.newMeth(C$, 'setObjectProp$S$I', function (id, tokCommand) {
p$1.getScriptManager.apply(this, []);
if (id == null ) id="*";
return (this.eval == null  ? null : this.eval.setObjectPropSafe$S$I(id, tokCommand));
});

Clazz.newMeth(C$, 'setDihedrals$FA$javajs_util_BSA$F', function (dihedralList, bsBranches, rate) {
if (bsBranches == null ) bsBranches=this.ms.getBsBranches$FA(dihedralList);
this.ms.setDihedrals$FA$javajs_util_BSA$F(dihedralList, bsBranches, rate);
});

Clazz.newMeth(C$, 'getChainID$S$Z', function (id, isAssign) {
var iboxed=this.chainMap.get$O(id);
if (iboxed != null ) return iboxed.intValue$();
var i=id.charAt$I(0).$c();
if (id.length$() > 1) {
i=300 + this.chainList.size$();
} else if (isAssign && 97 <= i  && i <= 122 ) {
i+=159;
}if (i >= 256) {
this.chainCaseSpecified|=isAssign;
this.chainList.addLast$O(id);
}iboxed=Integer.valueOf$I(i);
this.chainMap.put$O$O(iboxed, id);
this.chainMap.put$O$O(id, iboxed);
return i;
});

Clazz.newMeth(C$, 'getChainIDStr$I', function (id) {
return this.chainMap.get$O(Integer.valueOf$I(id));
});

Clazz.newMeth(C$, 'getScriptQueueInfo$', function () {
return (this.scm != null  && this.scm.isQueueProcessing$()  ? Boolean.TRUE : Boolean.FALSE);
});

Clazz.newMeth(C$, 'getNMRCalculation$', function () {
return (this.nmrCalculation == null  ? (this.nmrCalculation=$I$(13).getOption$S$org_jmol_viewer_Viewer$S("quantum.NMRCalculation", this, "script")).setViewer$org_jmol_viewer_Viewer(this) : this.nmrCalculation);
});

Clazz.newMeth(C$, 'getDistanceUnits$S', function (s) {
if (s == null ) s=this.getDefaultMeasurementLabel$I(2);
var pt=s.indexOf$S("//");
return (pt < 0 ? this.g.measureDistanceUnits : s.substring$I(pt + 2));
});

Clazz.newMeth(C$, 'calculateFormalCharges$javajs_util_BS', function (bs) {
return this.ms.fixFormalCharges$javajs_util_BS(bs == null  ? this.bsA$() : bs);
});

Clazz.newMeth(C$, 'setModulation$javajs_util_BS$Z$javajs_util_P3$Z', function (bs, isOn, t1, isQ) {
if (isQ) this.g.setO$S$O("_modt", $I$(27).eP$javajs_util_T3(t1));
this.ms.setModulation$javajs_util_BS$Z$javajs_util_P3$Z(bs == null  ? this.getAllAtoms$() : bs, isOn, t1, isQ);
this.refreshMeasures$Z(true);
});

Clazz.newMeth(C$, 'checkInMotion$I', function (state) {
switch (state) {
case 0:
this.setTimeout$S$I$S("_SET_IN_MOTION_", 0, null);
break;
case 1:
if (!this.inMotion) this.setTimeout$S$I$S("_SET_IN_MOTION_", this.g.hoverDelayMs * 2, "!setInMotion");
break;
case 2:
this.setInMotion$Z(true);
this.refresh$I$S(3, "timeoutThread set in motion");
break;
}
});

Clazz.newMeth(C$, 'checkMotionRendering$I', function (tok) {
if (!this.getInMotion$Z(true) && !this.tm.spinOn && !this.tm.vibrationOn && !this.am.animationOn  ) return true;
if (this.g.wireframeRotation) return false;
var n=0;
switch (tok) {
case 1677721602:
case 1140850689:
n=2;
break;
case 1112150020:
n=3;
break;
case 1112150021:
n=4;
break;
case 1112152066:
n=5;
break;
case 1073742018:
n=6;
break;
case 603979967:
n=7;
break;
case 603979786:
n=8;
break;
}
return this.g.platformSpeed >= n;
});

Clazz.newMeth(C$, 'openExportChannel$D$S$Z', function (privateKey, fileName, asWriter) {
return p$1.getOutputManager.apply(this, []).openOutputChannel$D$S$Z$Z(privateKey, fileName, asWriter, false);
});

Clazz.newMeth(C$, 'log$S', function (data) {
if (data != null ) p$1.getOutputManager.apply(this, []).logToFile$S(data);
});

Clazz.newMeth(C$, 'getLogFileName$', function () {
return (this.logFileName == null  ? "" : this.logFileName);
});

Clazz.newMeth(C$, 'getCommands$java_util_Map$java_util_Map$S', function (htDefine, htMore, select) {
return this.getStateCreator$().getCommands$java_util_Map$java_util_Map$S(htDefine, htMore, select);
});

Clazz.newMeth(C$, 'allowCapture$', function () {
return !this.isApplet || this.isSignedApplet ;
});

Clazz.newMeth(C$, 'compileExpr$S', function (expr) {
var o=(p$1.getScriptManager.apply(this, []) == null  ? null : this.eval.evaluateExpression$O$Z$Z(expr, false, true));
return (Clazz.instanceOf(o, Clazz.array($I$(36), -1)) ? o : Clazz.array($I$(36), -1, [$I$(36).o$I$O(4, expr)]));
});

Clazz.newMeth(C$, 'checkSelect$java_util_Map$org_jmol_script_TA', function (h, value) {
return p$1.getScriptManager.apply(this, []) != null  && this.eval.checkSelect$java_util_Map$org_jmol_script_TA(h, value) ;
});

Clazz.newMeth(C$, 'getAnnotationInfo$org_jmol_script_SV$S$I', function (d, match, type) {
return this.getAnnotationParser$Z(type == 1111490587).getAnnotationInfo$org_jmol_viewer_Viewer$org_jmol_script_SV$S$I$I(this, d, match, type, this.am.cmi);
});

Clazz.newMeth(C$, 'getAtomValidation$S$org_jmol_modelset_Atom', function (type, atom) {
return this.getAnnotationParser$Z(false).getAtomValidation$org_jmol_viewer_Viewer$S$org_jmol_modelset_Atom(this, type, atom);
});

Clazz.newMeth(C$, 'dragMinimizeAtom$I', function (iAtom) {
this.stopMinimization$();
var bs=(this.getMotionFixedAtoms$().isEmpty$() ? this.ms.getAtoms$I$O((this.ms.isAtomPDB$I(iAtom) ? 1086324742 : 1094713360), $I$(31).newAndSetBit$I(iAtom)) : $I$(31).setAll$I(this.ms.ac));
try {
this.minimize$org_jmol_api_JmolScriptEvaluator$I$F$javajs_util_BS$javajs_util_BS$F$Z$Z$Z$Z(null, 2147483647, 0, bs, null, 0, false, false, false, false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (!this.async) return;
{
var me = this; setTimeout(function() {me.dragMinimizeAtom$I(iAtom)}, 100);
}
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getJBR$', function () {
return (this.jbr == null  ? this.jbr=($I$(13).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.modelsetbio.BioResolver", this, "file")).setViewer$org_jmol_viewer_Viewer(this) : this.jbr);
});

Clazz.newMeth(C$, 'checkMenuUpdate$', function () {
if (this.jmolpopup != null ) this.jmolpopup.jpiUpdateComputedMenus$();
});

Clazz.newMeth(C$, 'getChimeMessenger$', function () {
return (this.jcm == null  ? this.jcm=($I$(13).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.viewer.ChimeMessenger", this, "script")).set$org_jmol_viewer_Viewer(this) : this.jcm);
});

Clazz.newMeth(C$, 'getAuxiliaryInfoForAtoms$O', function (atomExpression) {
return this.ms.getAuxiliaryInfo$javajs_util_BS(this.ms.getModelBS$javajs_util_BS$Z(this.getAtomBitSet$O(atomExpression), false));
});

Clazz.newMeth(C$, 'getJSJSONParser', function () {
return (this.jsonParser == null  ? this.jsonParser=$I$(13).getInterface$S$org_jmol_viewer_Viewer$S("javajs.util.JSJSONParser", this, "script") : this.jsonParser);
}, p$1);

Clazz.newMeth(C$, 'parseJSON$S', function (str) {
return (str == null  ? null : str.startsWith$S("{") ? this.parseJSONMap$S(str) : this.parseJSONArray$S(str));
});

Clazz.newMeth(C$, 'parseJSONMap$S', function (jsonMap) {
return p$1.getJSJSONParser.apply(this, []).parseMap$S$Z(jsonMap, true);
});

Clazz.newMeth(C$, 'parseJSONArray$S', function (jsonArray) {
return p$1.getJSJSONParser.apply(this, []).parse$S$Z(jsonArray, true);
});

Clazz.newMeth(C$, 'getSymTemp$', function () {
return $I$(13).getSymmetry$org_jmol_viewer_Viewer$S(this, "ms");
});

Clazz.newMeth(C$, 'setWindowDimensions$FA', function (dims) {
this.resizeInnerPanel$I$I((dims[0]|0), (dims[1]|0));
});

Clazz.newMeth(C$, 'getTriangulator$', function () {
return (this.triangulator == null  ? (this.triangulator=$I$(13).getUtil$S$org_jmol_viewer_Viewer$S("Triangulator", this, "script")) : this.triangulator);
});

Clazz.newMeth(C$, 'getCurrentModelAuxInfo$', function () {
return (this.am.cmi >= 0 ? this.ms.getModelAuxiliaryInfo$I(this.am.cmi) : null);
});

Clazz.newMeth(C$, 'startNBO$S', function (options) {
var htParams=Clazz.new_($I$(1,1));
htParams.put$O$O("service", "nbo");
htParams.put$O$O("action", "showPanel");
htParams.put$O$O("options", options);
this.sm.processService$java_util_Map(htParams);
});

Clazz.newMeth(C$, 'startPlugin$S', function (plugin) {
if ("nbo".equalsIgnoreCase$S(plugin)) this.startNBO$S("all");
});

Clazz.newMeth(C$, 'connectNBO$S', function (type) {
if (this.am.cmi < 0) return;
p$1.getNBOParser.apply(this, []).connectNBO$I$S(this.am.cmi, type);
});

Clazz.newMeth(C$, 'getNBOParser', function () {
return (this.nboParser == null  ? this.nboParser=($I$(13).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.adapter.readers.quantum.NBOParser", this, "script")).set$org_jmol_viewer_Viewer(this) : this.nboParser);
}, p$1);

Clazz.newMeth(C$, 'getNBOAtomLabel$org_jmol_modelset_Atom', function (atom) {
return p$1.getNBOParser.apply(this, []).getNBOAtomLabel$org_jmol_modelset_Atom(atom);
});

Clazz.newMeth(C$, 'calculateChirality$javajs_util_BS', function (bsAtoms) {
if (bsAtoms == null ) bsAtoms=this.bsA$();
return this.ms.calculateChiralityForAtoms$javajs_util_BS$Z(bsAtoms, true);
});

Clazz.newMeth(C$, 'getSubstructureSetArray$S$javajs_util_BS$I', function (pattern, bsSelected, flags) {
return this.getSmilesMatcher$().getSubstructureSetArray$S$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_BS$I(pattern, this.ms.at, this.ms.ac, bsSelected, null, flags);
});

Clazz.newMeth(C$, 'getSubstructureSetArrayForNodes$S$org_jmol_util_NodeA$I', function (pattern, nodes, flags) {
return this.getSmilesMatcher$().getSubstructureSetArray$S$org_jmol_util_NodeA$I$javajs_util_BS$javajs_util_BS$I(pattern, nodes, nodes.length, null, null, flags);
});

Clazz.newMeth(C$, 'getSmilesAtoms$S', function (smiles) {
return this.getSmilesMatcher$().getAtoms$S(smiles);
});

Clazz.newMeth(C$, 'calculateChiralityForSmiles$S', function (smiles) {
try {
return $I$(13).getSymmetry$org_jmol_viewer_Viewer$S(this, "ms").calculateCIPChiralityForSmiles$org_jmol_viewer_Viewer$S(this, smiles);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getPdbID$', function () {
return (this.ms.getInfo$I$S(this.am.cmi, "isPDB") === Boolean.TRUE  ? this.ms.getInfo$I$S(this.am.cmi, "pdbID") : null);
});

Clazz.newMeth(C$, 'getModelInfo$S', function (key) {
return this.ms.getInfo$I$S(this.am.cmi, key);
});

Clazz.newMeth(C$, 'assignAtom$I$S$javajs_util_P3', function (atomIndex, element, ptNew) {
if (atomIndex < 0) atomIndex=this.atomHighlighted;
if (this.ms.isAtomInLastModel$I(atomIndex)) {
this.script$S("assign atom ({" + atomIndex + "}) \"" + element + "\" " + (ptNew == null  ? "" : $I$(27).eP$javajs_util_T3(ptNew)) );
}});

Clazz.newMeth(C$, 'notifyScriptEditor$I$OA', function (msWalltime, data) {
if (this.scriptEditor != null ) {
this.scriptEditor.notify$I$OA(msWalltime, data);
}});

Clazz.newMeth(C$, 'sendConsoleMessage$S', function (msg) {
if (this.appConsole != null ) this.appConsole.sendConsoleMessage$S(msg);
});

Clazz.newMeth(C$, 'getModelkitProperty$O', function (nameOrData) {
return (this.modelkit == null  ? null : this.modelkit.getProperty$O(nameOrData));
});

Clazz.newMeth(C$, 'setModelkitProperty$S$O', function (key, value) {
return (this.modelkit == null  ? null : this.modelkit.setProperty$S$O(key, value));
});

Clazz.newMeth(C$, 'getSymmetryInfo$I$S$I$javajs_util_P3$javajs_util_P3$I$S$F$I$I', function (iatom, xyz, iOp, pt1, pt2, type, desc, scaleFactor, nth, options) {
try {
return this.getSymTemp$().getSymmetryInfoAtom$org_jmol_modelset_ModelSet$I$S$I$javajs_util_P3$javajs_util_P3$S$I$F$I$I(this.ms, iatom, xyz, iOp, pt1, pt2, desc, type, scaleFactor, nth, options);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Exception in Viewer.getSymmetryInfo: " + e);
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setModelKitRotateBondIndex$I', function (i) {
if (this.modelkit != null ) {
this.modelkit.setProperty$S$O("rotateBondIndex", Integer.valueOf$I(i));
}});

Clazz.newMeth(C$, 'getMacro$S', function (key) {
if (this.macros == null  || this.macros.isEmpty$() ) {
try {
var s=this.getAsciiFileOrNull$S(this.g.macroDirectory + "/macros.json");
this.macros=this.parseJSON$S(s);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.macros=Clazz.new_($I$(1,1));
} else {
throw e;
}
}
}if (key == null ) {
var s=Clazz.new_($I$(37,1));
for (var k, $k = this.macros.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
var a=this.macros.get$O(k);
s.append$S(k).append$S("\t").appendO$O(a).append$S("\n");
}
return s.toString();
}key=key.toLowerCase$();
return this.macros.containsKey$O(key) ? (this.macros.get$O(key)).get$O("path").toString() : null;
});

C$.$static$=function(){C$.$static$=0;
C$.isSwingJS=true||false;
C$.appletDocumentBase="";
C$.appletCodeBase="";
C$.jsDocumentBase="";
C$.strJavaVendor="Java: " + System.getProperty$S$S("java.vendor", "j2s");
C$.strOSName=System.getProperty$S$S("os.name", "");
C$.strJavaVersion="Java " + System.getProperty$S$S("java.version", "");
C$.staticFunctions=Clazz.new_($I$(1,1));
C$.nProcessors=1;
{

{}
};
};
var $s$ = new Int16Array(1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.Viewer, "ACCESS", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NONE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "READSPT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ALL", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
