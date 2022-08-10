(function(){var P$=Clazz.newPackage("jalview.bin"),p$1={},I$=[[0,'Thread','jalview.util.MessageManager','jalview.util.Platform','java.util.logging.ConsoleHandler','java.util.logging.Level','java.util.logging.Logger','jalview.bin.Cache','jalview.bin.ArgsParser','jalview.bin.Console','jalview.io.gff.SequenceOntologyFactory','jalview.ext.so.SequenceOntology','jalview.gui.Desktop','jalview.bin.JalviewTaskbar','java.io.File','com.threerings.getdown.util.LaunchUtil','jalview.io.FileLoader','jalview.io.AppletFormatAdapter','jalview.io.IdentifyFile','jalview.schemes.ColourSchemeProperty','jalview.io.NewickFile','jalview.io.HtmlSvgOutput','jalview.io.BioJsHTMLOutput','jalview.io.FileFormats','javax.swing.UIManager','java.util.Locale','jalview.util.ChannelProperties','com.formdev.flatlaf.util.SystemInfo','javax.swing.SwingUtilities','com.formdev.flatlaf.FlatLightLaf','java.awt.Color','ch.randelshofer.quaqua.QuaquaManager','jalview.gui.PromptUserConfig','java.io.PrintWriter','java.io.OutputStreamWriter','java.io.FileOutputStream','java.io.BufferedReader','java.io.InputStreamReader','java.net.URI','java.util.HashMap','groovy.lang.Binding','groovy.util.GroovyScriptEngine','java.net.URL','jalview.gui.AlignFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Jalview", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['FeatureFetcher',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['desktop','jalview.gui.Desktop']]
,['O',['instance','jalview.bin.Jalview','currentAlignFrame','jalview.gui.AlignFrame']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
C$.instance=Clazz.new_(C$);
C$.instance.doMain$SA(args);
}, 1);

Clazz.newMeth(C$, 'logClass$S',  function (name) {
var consoleHandler=Clazz.new_($I$(4,1));
consoleHandler.setLevel$java_util_logging_Level($I$(5).ALL);
var logger=$I$(6).getLogger$S(name);
logger.setLevel$java_util_logging_Level($I$(5).ALL);
logger.addHandler$java_util_logging_Handler(consoleHandler);
}, 1);

Clazz.newMeth(C$, 'setLogging$',  function () {

{}
if (!$I$(3).isJS$()) 
{}
}, 1);

Clazz.newMeth(C$, 'doMain$SA',  function (args) {
if (!$I$(3).isJS$()) {
System.setSecurityManager$SecurityManager(null);
}System.out.println$S("Java version: " + System.getProperty$S("java.version"));
System.out.println$S("Java Home: " + System.getProperty$S("java.home"));
System.out.println$S(System.getProperty$S("os.arch") + " " + System.getProperty$S("os.name") + " " + System.getProperty$S("os.version") );
var val=System.getProperty$S("sys.install4jVersion");
if (val != null ) {
System.out.println$S("Install4j version: " + val);
}val=System.getProperty$S("installer_template_version");
if (val != null ) {
System.out.println$S("Install4j template version: " + val);
}val=System.getProperty$S("launcher_version");
if (val != null ) {
System.out.println$S("Launcher version: " + val);
}$I$(7).loadBuildProperties$Z(true);
var aparser=Clazz.new_($I$(8,1).c$$SA,[args]);
var headless=false;
var usrPropsFile=aparser.getValue$S("props");
$I$(7).loadProperties$S(usrPropsFile);
if (usrPropsFile != null ) {
System.out.println$S("CMD [-props " + usrPropsFile + "] executed successfully!" );
}if (!$I$(3).isJS$()) 
{}
var defs=aparser.getValue$S("setprop");
while (defs != null ){
var p=defs.indexOf$I("=");
if (p == -1) {
System.err.println$S("Ignoring invalid setprop argument : " + defs);
} else {
System.out.println$S("Executing setprop argument: " + defs);
if ($I$(3).isJS$()) {
$I$(7,"setProperty$S$S",[defs.substring$I$I(0, p), defs.substring$I(p + 1)]);
}}defs=aparser.getValue$S("setprop");
}
if (System.getProperty$S("java.awt.headless") != null  && System.getProperty$S("java.awt.headless").equals$O("true") ) {
headless=true;
}System.setProperty$S$S("http.agent", "Jalview Desktop/" + $I$(7).getDefault$S$S("VERSION", "Unknown"));
try {
$I$(9).initLogger$();
} catch (error) {
if (Clazz.exceptionOf(error,"NoClassDefFoundError")){
error.printStackTrace$();
System.out.println$S("\nEssential logging libraries not found.\nUse: java -classpath \"$PATH_TO_LIB$/*:$PATH_TO_CLASSES$\" jalview.bin.Jalview");
System.exit$I(0);
} else {
throw error;
}
}
this.desktop=null;
C$.setLookAndFeel$();
var soDefault=!$I$(3).isJS$();
if ($I$(7).getDefault$S$Z("USE_FULL_SO", soDefault)) {
$I$(10,"setInstance$jalview_io_gff_SequenceOntologyI",[Clazz.new_($I$(11,1))]);
}if (!headless) {
$I$(12).nosplash=aparser.contains$S("nosplash");
this.desktop=Clazz.new_($I$(12,1));
this.desktop.setInBatchMode$Z(true);
try {
$I$(13).setTaskbar$jalview_bin_Jalview(this);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
$I$(9).info$S("Cannot set Taskbar");
$I$(9,"error$S",[e.getMessage$()]);
}
} else {
var t = e$$;
{
$I$(9).info$S("Cannot set Taskbar");
$I$(9,"error$S",[t.getMessage$()]);
}
}
}
$I$(7).setProxyPropertiesFromPreferences$();
this.desktop.setVisible$Z(true);
if (!$I$(3).isJS$()) 
{}
}var appdirString=System.getProperty$S("getdownappdir");
if (appdirString != null  && appdirString.length$() > 0 ) {
var appdir=Clazz.new_($I$(14,1).c$$S,[appdirString]);
((P$.Jalview$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jalview$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(15,"upgradeGetdown$java_io_File$java_io_File$java_io_File",[Clazz.new_($I$(14,1).c$$java_io_File$S,[this.$finals$.appdir, "getdown-launcher-old.jar"]), Clazz.new_($I$(14,1).c$$java_io_File$S,[this.$finals$.appdir, "getdown-launcher.jar"]), Clazz.new_($I$(14,1).c$$java_io_File$S,[this.$finals$.appdir, "getdown-launcher-new.jar"])]);
});
})()
), Clazz.new_($I$(1,1),[this, {appdir:appdir}],P$.Jalview$2)).start$();
}var file=null;
var data=null;
var format=null;
var protocol=null;
var fileLoader=Clazz.new_($I$(16,1).c$$Z,[!headless]);
var groovyscript=null;
groovyscript=aparser.getValue$S$Z("groovy", true);
file=aparser.getValue$S$Z("open", true);
if (file == null  && this.desktop == null  ) {
System.out.println$S("No files to open!");
System.exit$I(1);
}var progress=-1;
if (file != null ) {
if (!headless) {
this.desktop.setProgressBar$S$J($I$(2).getString$S("status.processing_commandline_args"), progress=System.currentTimeMillis$());
}System.out.println$S("CMD [-open " + file + "] executed successfully!" );
if (!$I$(3).isJS$()) 
{}
protocol=$I$(17).checkProtocol$O(file);
try {
format=Clazz.new_($I$(18,1)).identify$S$jalview_io_DataSourceType(file, protocol);
} catch (e1) {
if (Clazz.exceptionOf(e1,"jalview.io.FileFormatException")){
} else {
throw e1;
}
}
var af=fileLoader.LoadFileWaitTillLoaded$S$jalview_io_DataSourceType$jalview_io_FileFormatI(file, protocol, format);
if (af == null ) {
System.out.println$S("error");
} else {
C$.setCurrentAlignFrame$jalview_gui_AlignFrame(af);
data=aparser.getValue$S$Z("colour", true);
if (data != null ) {
data.replaceAll$S$S("%20", " ");
var cs=$I$(19,"getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S",[af.getViewport$(), af.getViewport$().getAlignment$(), data]);
if (cs != null ) {
System.out.println$S("CMD [-color " + data + "] executed successfully!" );
}af.changeColour$jalview_schemes_ColourSchemeI(cs);
}data=aparser.getValue$S$Z("groups", true);
if (data != null ) {
af.parseFeaturesFile$O$jalview_io_DataSourceType(data, $I$(17).checkProtocol$O(data));
System.out.println$S("CMD groups[-" + data + "]  executed successfully!" );
}data=aparser.getValue$S$Z("features", true);
if (data != null ) {
af.parseFeaturesFile$O$jalview_io_DataSourceType(data, $I$(17).checkProtocol$O(data));
System.out.println$S("CMD [-features " + data + "]  executed successfully!" );
}data=aparser.getValue$S$Z("annotations", true);
if (data != null ) {
af.loadJalviewDataFile$O$jalview_io_DataSourceType$jalview_io_FileFormatI$jalview_datamodel_SequenceI(data, null, null, null);
System.out.println$S("CMD [-annotations " + data + "] executed successfully!" );
}if (aparser.contains$S("sortbytree")) {
af.getViewport$().setSortByTree$Z(true);
if (af.getViewport$().getSortByTree$()) {
System.out.println$S("CMD [-sortbytree] executed successfully!");
}}if (aparser.contains$S("no-annotation")) {
af.getViewport$().setShowAnnotation$Z(false);
if (!af.getViewport$().isShowAnnotation$()) {
System.out.println$S("CMD no-annotation executed successfully!");
}}if (aparser.contains$S("nosortbytree")) {
af.getViewport$().setSortByTree$Z(false);
if (!af.getViewport$().getSortByTree$()) {
System.out.println$S("CMD [-nosortbytree] executed successfully!");
}}data=aparser.getValue$S$Z("tree", true);
if (data != null ) {
try {
System.out.println$S("CMD [-tree " + data + "] executed successfully!" );
var nf=Clazz.new_([data, $I$(17).checkProtocol$O(data)],$I$(20,1).c$$S$jalview_io_DataSourceType);
af.getViewport$().setCurrentTree$jalview_analysis_TreeModel(af.showNewickTree$jalview_io_NewickFile$S(nf, data).getTree$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.err.println$S("Couldn't add tree " + data);
ex.printStackTrace$java_io_PrintStream(System.err);
} else {
throw ex;
}
}
}if (groovyscript != null ) {
System.out.println$S("Executing script " + groovyscript);
p$1.executeGroovyScript$S$jalview_gui_AlignFrame.apply(this, [groovyscript, af]);
System.out.println$S("CMD groovy[" + groovyscript + "] executed successfully!" );
groovyscript=null;
}var imageName="unnamed.png";
while (aparser.getSize$() > 1){
var outputFormat=aparser.nextValue$();
file=aparser.nextValue$();
if (outputFormat.equalsIgnoreCase$S("png")) {
af.createPNG$java_io_File(Clazz.new_($I$(14,1).c$$S,[file]));
imageName=(Clazz.new_($I$(14,1).c$$S,[file])).getName$();
System.out.println$S("Creating PNG image: " + file);
continue;
} else if (outputFormat.equalsIgnoreCase$S("svg")) {
var imageFile=Clazz.new_($I$(14,1).c$$S,[file]);
imageName=imageFile.getName$();
af.createSVG$java_io_File(imageFile);
System.out.println$S("Creating SVG image: " + file);
continue;
} else if (outputFormat.equalsIgnoreCase$S("html")) {
var imageFile=Clazz.new_($I$(14,1).c$$S,[file]);
imageName=imageFile.getName$();
var htmlSVG=Clazz.new_($I$(21,1).c$$jalview_gui_AlignmentPanel,[af.alignPanel]);
htmlSVG.exportHTML$S(file);
System.out.println$S("Creating HTML image: " + file);
continue;
} else if (outputFormat.equalsIgnoreCase$S("biojsmsa")) {
if (file == null ) {
System.err.println$S("The output html file must not be null");
return;
}try {
$I$(22,"refreshVersionInfo$S",[$I$(22).BJS_TEMPLATES_LOCAL_DIRECTORY]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
e.printStackTrace$();
} else {
throw e;
}
}
var bjs=Clazz.new_($I$(22,1).c$$jalview_gui_AlignmentPanel,[af.alignPanel]);
bjs.exportHTML$S(file);
System.out.println$S("Creating BioJS MSA Viwer HTML file: " + file);
continue;
} else if (outputFormat.equalsIgnoreCase$S("imgMap")) {
af.createImageMap$java_io_File$S(Clazz.new_($I$(14,1).c$$S,[file]), imageName);
System.out.println$S("Creating image map: " + file);
continue;
} else if (outputFormat.equalsIgnoreCase$S("eps")) {
var outputFile=Clazz.new_($I$(14,1).c$$S,[file]);
System.out.println$S("Creating EPS file: " + outputFile.getAbsolutePath$());
af.createEPS$java_io_File(outputFile);
continue;
}var outFormat=null;
try {
outFormat=$I$(23).getInstance$().forName$S(outputFormat);
} catch (formatP) {
if (Clazz.exceptionOf(formatP,"Exception")){
System.out.println$S("Couldn't parse " + outFormat + " as a valid Jalview format string." );
} else {
throw formatP;
}
}
if (outFormat != null ) {
if (!outFormat.isWritable$()) {
System.out.println$S("This version of Jalview does not support alignment export as " + outputFormat);
} else {
af.saveAlignment$S$jalview_io_FileFormatI(file, outFormat);
if (af.isSaveAlignmentSuccessful$()) {
System.out.println$S("Written alignment in " + outFormat.getName$() + " format to " + file );
} else {
System.out.println$S("Error writing file " + file + " in " + outFormat.getName$() + " format!!" );
}}}}
while (aparser.getSize$() > 0){
System.out.println$S("Unknown arg: " + aparser.nextValue$());
}
}}var startUpAlframe=null;
if (!$I$(3).isJS$() && !headless && file == null    && $I$(7).getDefault$S$Z("SHOW_STARTUP_FILE", true) ) 
{}
if (groovyscript != null ) {
if ($I$(7).groovyJarsPresent$()) {
System.out.println$S("Executing script " + groovyscript);
p$1.executeGroovyScript$S$jalview_gui_AlignFrame.apply(this, [groovyscript, startUpAlframe]);
} else {
System.err.println$S("Sorry. Groovy Support is not available, so ignoring the provided groovy script " + groovyscript);
}}if (this.desktop != null ) {
if (Long.$ne(progress,-1 )) {
this.desktop.setProgressBar$S$J(null, progress);
}this.desktop.setInBatchMode$Z(false);
}});

Clazz.newMeth(C$, 'setLookAndFeel$',  function () {
var lafProp=System.getProperty$S("laf");
var lafSetting=$I$(7).getDefault$S$S("PREFERRED_LAF", null);
var laf="none";
if (lafProp != null ) {
laf=lafProp;
} else if (lafSetting != null ) {
laf=lafSetting;
}var lafSet=false;
switch (laf) {
case "crossplatform":
lafSet=C$.setCrossPlatformLookAndFeel$();
if (!lafSet) {
$I$(9,"error$S",["Could not set requested laf=" + laf]);
}break;
case "system":
lafSet=C$.setSystemLookAndFeel$();
if (!lafSet) {
$I$(9,"error$S",["Could not set requested laf=" + laf]);
}break;
case "gtk":
lafSet=C$.setGtkLookAndFeel$();
if (!lafSet) {
$I$(9,"error$S",["Could not set requested laf=" + laf]);
}break;
case "metal":
lafSet=C$.setMetalLookAndFeel$();
if (!lafSet) {
$I$(9,"error$S",["Could not set requested laf=" + laf]);
}break;
case "nimbus":
lafSet=C$.setNimbusLookAndFeel$();
if (!lafSet) {
$I$(9,"error$S",["Could not set requested laf=" + laf]);
}break;
case "flat":
lafSet=C$.setFlatLookAndFeel$();
if (!lafSet) {
$I$(9,"error$S",["Could not set requested laf=" + laf]);
}break;
case "quaqua":
lafSet=C$.setQuaquaLookAndFeel$();
if (!lafSet) {
$I$(9,"error$S",["Could not set requested laf=" + laf]);
}break;
case "vaqua":
lafSet=C$.setVaquaLookAndFeel$();
if (!lafSet) {
$I$(9,"error$S",["Could not set requested laf=" + laf]);
}break;
case "mac":
lafSet=C$.setMacLookAndFeel$();
if (!lafSet) {
$I$(9,"error$S",["Could not set requested laf=" + laf]);
}break;
case "none":
break;
default:
$I$(9,"error$S",["Requested laf=" + laf + " not implemented" ]);
}
if (!lafSet) {
C$.setSystemLookAndFeel$();
if ($I$(3).isLinux$()) {
C$.setMetalLookAndFeel$();
}if ($I$(3).isMac$()) {
C$.setMacLookAndFeel$();
}}}, 1);

Clazz.newMeth(C$, 'setCrossPlatformLookAndFeel$',  function () {
var set=false;
try {
$I$(24,"setLookAndFeel$S",[$I$(24).getCrossPlatformLookAndFeelClassName$()]);
set=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(9).error$S("Unexpected Look and Feel Exception");
$I$(9,"error$S",[ex.getMessage$()]);
$I$(9,"debug$S",[$I$(7).getStackTraceString$Throwable(ex)]);
} else {
throw ex;
}
}
return set;
}, 1);

Clazz.newMeth(C$, 'setSystemLookAndFeel$',  function () {
var set=false;
try {
$I$(24,"setLookAndFeel$S",[$I$(24).getSystemLookAndFeelClassName$()]);
set=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(9).error$S("Unexpected Look and Feel Exception");
$I$(9,"error$S",[ex.getMessage$()]);
$I$(9,"debug$S",[$I$(7).getStackTraceString$Throwable(ex)]);
} else {
throw ex;
}
}
return set;
}, 1);

Clazz.newMeth(C$, 'setSpecificLookAndFeel$S$S$Z',  function (name, className, nameStartsWith) {
var set=false;
try {
for (var info, $info = 0, $$info = $I$(24).getInstalledLookAndFeels$(); $info<$$info.length&&((info=($$info[$info])),1);$info++) {
if (info.getName$() != null  && nameStartsWith  ? info.getName$().toLowerCase$java_util_Locale($I$(25).ROOT).startsWith$S(name.toLowerCase$java_util_Locale($I$(25).ROOT)) : info.getName$().toLowerCase$java_util_Locale($I$(25).ROOT).equals$O(name.toLowerCase$java_util_Locale($I$(25).ROOT))) {
className=info.getClassName$();
break;
}}
$I$(24).setLookAndFeel$S(className);
set=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(9).error$S("Unexpected Look and Feel Exception");
$I$(9,"error$S",[ex.getMessage$()]);
$I$(9,"debug$S",[$I$(7).getStackTraceString$Throwable(ex)]);
} else {
throw ex;
}
}
return set;
}, 1);

Clazz.newMeth(C$, 'setGtkLookAndFeel$',  function () {
return C$.setSpecificLookAndFeel$S$S$Z("gtk", "com.sun.java.swing.plaf.gtk.GTKLookAndFeel", true);
}, 1);

Clazz.newMeth(C$, 'setMetalLookAndFeel$',  function () {
return C$.setSpecificLookAndFeel$S$S$Z("metal", "javax.swing.plaf.metal.MetalLookAndFeel", false);
}, 1);

Clazz.newMeth(C$, 'setNimbusLookAndFeel$',  function () {
return C$.setSpecificLookAndFeel$S$S$Z("nimbus", "javax.swing.plaf.nimbus.NimbusLookAndFeel", false);
}, 1);

Clazz.newMeth(C$, 'setFlatLookAndFeel$',  function () {
var set=C$.setSpecificLookAndFeel$S$S$Z("flatlaf light", "com.formdev.flatlaf.FlatLightLaf", false);
if (set) {
if ($I$(3).isMac$()) {
System.setProperty$S$S("apple.laf.useScreenMenuBar", "true");
System.setProperty$S$S("apple.awt.application.name", $I$(26).getProperty$S("app_name"));
System.setProperty$S$S("apple.awt.application.appearance", "system");
if ($I$(27).isMacFullWindowContentSupported && $I$(12).desktop != null  ) {
$I$(12).desktop.getRootPane$().putClientProperty$O$O("apple.awt.fullWindowContent", Boolean.valueOf$Z(true));
$I$(12).desktop.getRootPane$().putClientProperty$O$O("apple.awt.transparentTitleBar", Boolean.valueOf$Z(true));
}$I$(28,"invokeLater$Runnable",[(P$.Jalview$lambda1$||(P$.Jalview$lambda1$=(((P$.Jalview$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Jalview$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
$I$(29).setup$();
});
})()
), Clazz.new_(P$.Jalview$lambda1.$init$,[this, null])))))]);
}$I$(24,"put$O$O",["TabbedPane.showTabSeparators", Boolean.valueOf$Z(true)]);
$I$(24,"put$O$O",["TabbedPane.tabSeparatorsFullHeight", Boolean.valueOf$Z(true)]);
$I$(24,"put$O$O",["TabbedPane.tabsOverlapBorder", Boolean.valueOf$Z(true)]);
$I$(24).put$O$O("TabbedPane.tabLayoutPolicy", "scroll");
$I$(24).put$O$O("TabbedPane.scrollButtonsPolicy", "asNeeded");
$I$(24,"put$O$O",["TabbedPane.smoothScrolling", Boolean.valueOf$Z(true)]);
$I$(24).put$O$O("TabbedPane.tabWidthMode", "compact");
$I$(24,"put$O$O",["TabbedPane.selectedBackground", $I$(30).white]);
}return set;
}, 1);

Clazz.newMeth(C$, 'setQuaquaLookAndFeel$',  function () {
return C$.setSpecificLookAndFeel$S$S$Z("quaqua", $I$(31).getLookAndFeel$().getClass$().getName$(), false);
}, 1);

Clazz.newMeth(C$, 'setVaquaLookAndFeel$',  function () {
return C$.setSpecificLookAndFeel$S$S$Z("vaqua", "org.violetlib.aqua.AquaLookAndFeel", false);
}, 1);

Clazz.newMeth(C$, 'setMacLookAndFeel$',  function () {
var set=false;
System.setProperty$S$S("com.apple.mrj.application.apple.menu.about.name", $I$(26).getProperty$S("app_name"));
System.setProperty$S$S("apple.laf.useScreenMenuBar", "true");
set=C$.setQuaquaLookAndFeel$();
if ((!set) || !$I$(24).getLookAndFeel$().getClass$().toString().toLowerCase$java_util_Locale($I$(25).ROOT).contains$CharSequence("quaqua") ) {
set=C$.setVaquaLookAndFeel$();
}return set;
}, 1);

Clazz.newMeth(C$, 'showUsage$',  function () {
System.out.println$S("Usage: jalview -open [FILE] [OUTPUT_FORMAT] [OUTPUT_FILE]\n\n-nodisplay\tRun Jalview without User Interface.\n-props FILE\tUse the given Jalview properties file instead of users default.\n-colour COLOURSCHEME\tThe colourscheme to be applied to the alignment\n-annotations FILE\tAdd precalculated annotations to the alignment.\n-tree FILE\tLoad the given newick format tree file onto the alignment\n-features FILE\tUse the given file to mark features on the alignment.\n-fasta FILE\tCreate alignment file FILE in Fasta format.\n-clustal FILE\tCreate alignment file FILE in Clustal format.\n-pfam FILE\tCreate alignment file FILE in PFAM format.\n-msf FILE\tCreate alignment file FILE in MSF format.\n-pileup FILE\tCreate alignment file FILE in Pileup format\n-pir FILE\tCreate alignment file FILE in PIR format.\n-blc FILE\tCreate alignment file FILE in BLC format.\n-json FILE\tCreate alignment file FILE in JSON format.\n-jalview FILE\tCreate alignment file FILE in Jalview format.\n-png FILE\tCreate PNG image FILE from alignment.\n-svg FILE\tCreate SVG image FILE from alignment.\n-html FILE\tCreate HTML file from alignment.\n-biojsMSA FILE\tCreate BioJS MSA Viewer HTML file from alignment.\n-imgMap FILE\tCreate HTML file FILE with image map of PNG image.\n-eps FILE\tCreate EPS file FILE from alignment.\n-questionnaire URL\tQueries the given URL for information about any Jalview user questionnaires.\n-noquestionnaire\tTurn off questionnaire check.\n-nonews\tTurn off check for Jalview news.\n-nousagestats\tTurn off google analytics tracking for this session.\n-sortbytree OR -nosortbytree\tEnable or disable sorting of the given alignment by the given tree\n-jabaws URL\tSpecify URL for Jabaws services (e.g. for a local installation).\n-fetchfrom nickname\tQuery nickname for features for the alignments and display them.\n-groovy FILE\tExecute groovy script in FILE, after all other arguments have been processed (if FILE is the text \'STDIN\' then the file will be read from STDIN)\n-jvmmempc=PERCENT\tOnly available with standalone executable jar or jalview.bin.Launcher. Limit maximum heap size (memory) to PERCENT% of total physical memory detected. This defaults to 90 if total physical memory can be detected. See https://www.jalview.org/help/html/memory.html for more details.\n-jvmmemmax=MAXMEMORY\tOnly available with standalone executable jar or jalview.bin.Launcher. Limit maximum heap size (memory) to MAXMEMORY. MAXMEMORY can be specified in bytes, kilobytes(k), megabytes(m), gigabytes(g) or if you\'re lucky enough, terabytes(t). This defaults to 32g if total physical memory can be detected, or to 8g if total physical memory cannot be detected. See https://www.jalview.org/help/html/memory.html for more details.\n\n~Read documentation in Application or visit https://www.jalview.org for description of Features and Annotations file~\n\n");
}, 1);

Clazz.newMeth(C$, 'startUsageStats$jalview_gui_Desktop',  function (desktop) {
var prompter=Clazz.new_([$I$(12).desktop, "USAGESTATS", "Jalview Usage Statistics", "Do you want to help make Jalview better by enabling the collection of usage statistics with Google Analytics ?\n\n(you can enable or disable usage tracking in the preferences)", ((P$.Jalview$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jalview$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(9).debug$S("Initialising googletracker for usage stats.");
$I$(7).initGoogleTracker$();
$I$(9).debug$S("Tracking enabled.");
});
})()
), Clazz.new_(P$.Jalview$3.$init$,[this, null])), ((P$.Jalview$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jalview$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(9).debug$S("Not enabling Google Tracking.");
});
})()
), Clazz.new_(P$.Jalview$4.$init$,[this, null])), null, true],$I$(32,1).c$$java_awt_Component$S$S$S$Runnable$Runnable$Runnable$Z);
desktop.addDialogThread$Runnable(prompter);
}, 1);

Clazz.newMeth(C$, 'executeGroovyScript$S$jalview_gui_AlignFrame',  function (groovyscript, af) {
var tfile=null;
var sfile=null;
if (groovyscript.trim$().equals$O("STDIN")) {
try {
tfile=$I$(14).createTempFile$S$S("jalview", "groovy");
var outfile=Clazz.new_([Clazz.new_([Clazz.new_($I$(35,1).c$$java_io_File,[tfile])],$I$(34,1).c$$java_io_OutputStream)],$I$(33,1).c$$java_io_Writer);
var br=Clazz.new_([Clazz.new_($I$(37,1).c$$java_io_InputStream,[System.$in])],$I$(36,1).c$$java_io_Reader);
var line=null;
while ((line=br.readLine$()) != null ){
outfile.write$S(line + "\n");
}
br.close$();
outfile.flush$();
outfile.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Failed to read from STDIN into tempfile " + ((tfile == null ) ? "(tempfile wasn\'t created)" : tfile.toString()));
ex.printStackTrace$();
return;
} else {
throw ex;
}
}
try {
sfile=tfile.toURI$().toURL$();
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
System.err.println$S("Unexpected Malformed URL Exception for temporary file created from STDIN: " + tfile.toURI$());
x.printStackTrace$();
return;
} else {
throw x;
}
}
} else {
try {
sfile=Clazz.new_($I$(38,1).c$$S,[groovyscript]).toURL$();
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
tfile=Clazz.new_($I$(14,1).c$$S,[groovyscript]);
if (!tfile.exists$()) {
System.err.println$S("File '" + groovyscript + "' does not exist." );
return;
}if (!tfile.canRead$()) {
System.err.println$S("File '" + groovyscript + "' cannot be read." );
return;
}if (Long.$lt(tfile.length$(),1 )) {
System.err.println$S("File '" + groovyscript + "' is empty." );
return;
}try {
sfile=tfile.getAbsoluteFile$().toURI$().toURL$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Failed to create a file URL for " + tfile.getAbsoluteFile$());
return;
} else {
throw ex;
}
}
} else {
throw x;
}
}
}try {
var vbinding=Clazz.new_($I$(39,1));
vbinding.put$O$O("Jalview", this);
if (af != null ) {
vbinding.put$O$O("currentAlFrame", af);
}var gbinding=Clazz.new_($I$(40,1).c$$java_util_Map,[vbinding]);
var gse=Clazz.new_([Clazz.array($I$(42), -1, [sfile])],$I$(41,1).c$$java_net_URLA);
gse.run$S$groovy_lang_Binding(sfile.toString(), gbinding);
if ("STDIN".equals$O(groovyscript)) {
tfile.delete$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Exception Whilst trying to execute file " + sfile + " as a groovy script." );
e.printStackTrace$java_io_PrintStream(System.err);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'isHeadlessMode$',  function () {
var isheadless=System.getProperty$S("java.awt.headless");
if (isheadless != null  && isheadless.equalsIgnoreCase$S("true") ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'getAlignFrames$',  function () {
return this.desktop == null  ? Clazz.array($I$(43), -1, [C$.getCurrentAlignFrame$()]) : $I$(12).getAlignFrames$();
});

Clazz.newMeth(C$, 'quit$',  function () {
if (this.desktop != null ) {
this.desktop.quit$();
} else {
System.exit$I(0);
}});

Clazz.newMeth(C$, 'getCurrentAlignFrame$',  function () {
return C$.currentAlignFrame;
}, 1);

Clazz.newMeth(C$, 'setCurrentAlignFrame$jalview_gui_AlignFrame',  function (currentAlignFrame) {
C$.currentAlignFrame=currentAlignFrame;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
$I$(3).getURLCommandArguments$();
$I$(3).addJ2SDirectDatabaseCall$S("https://www.jalview.org");
$I$(3).addJ2SDirectDatabaseCall$S("http://www.jalview.org");
$I$(3).addJ2SDirectDatabaseCall$S("http://www.compbio.dundee.ac.uk");
$I$(3).addJ2SDirectDatabaseCall$S("https://www.compbio.dundee.ac.uk");
};
{
if (!$I$(3).isJS$()) 
{}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Jalview, "FeatureFetcher", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.queued=0;
this.running=0;
},1);

C$.$fields$=[['I',['queued','running']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addFetcher$jalview_gui_AlignFrame$java_util_Vector',  function (af, dasSources) {
var id=System.currentTimeMillis$();
++this.queued;
var us=this;
Clazz.new_([((P$.Jalview$FeatureFetcher$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Jalview$FeatureFetcher$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
{
--this.b$['jalview.bin.Jalview.FeatureFetcher'].queued;
++this.b$['jalview.bin.Jalview.FeatureFetcher'].running;
}this.$finals$.af.setProgressBar$S$J($I$(2).getString$S("status.das_features_being_retrived"), this.$finals$.id);
this.$finals$.af.featureSettings_actionPerformed$java_awt_event_ActionEvent(null);
this.$finals$.af.setProgressBar$S$J(null, this.$finals$.id);
{
--this.b$['jalview.bin.Jalview.FeatureFetcher'].running;
}});
})()
), Clazz.new_(P$.Jalview$FeatureFetcher$1.$init$,[this, {id:id,af:af}]))],$I$(1,1).c$$Runnable).start$();
});

Clazz.newMeth(C$, 'allFinished$',  function () {
return this.queued == 0 && this.running == 0 ;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
