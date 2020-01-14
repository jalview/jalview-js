(function(){var P$=Clazz.newPackage("org.openscience.jmol.app"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.i18n.GT','org.apache.commons.cli.PosixParser','org.apache.commons.cli.Options','org.apache.commons.cli.OptionBuilder','org.apache.commons.cli.HelpFormatter',['org.openscience.jmol.app.JmolApp','.OptSort'],'javajs.util.PT','org.jmol.util.Logger','Boolean','java.awt.Point','java.awt.GraphicsEnvironment','java.util.Scanner','StringBuilder','org.openscience.jmol.app.InputScannerThread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmolApp", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.jmol.api.JmolAppAPI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.port=0;
this.startupWidth=0;
this.startupHeight=0;
this.border=null;
this.haveBorder=false;
this.userPropsFile=null;
this.historyFile=null;
this.pluginFile=null;
this.haveConsole=false;
this.haveDisplay=false;
this.splashEnabled=false;
this.isDataOnly=false;
this.isKiosk=false;
this.isPrintOnly=false;
this.isSilent=false;
this.info=null;
this.jmolPosition=null;
this.autoAnimationDelay=0;
this.modelFilename=null;
this.scriptFilename=null;
this.script1=null;
this.script2=null;
this.scanInput=false;
this.menuFile=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.haveConsole=true;
this.haveDisplay=true;
this.splashEnabled=false &&true;
this.info=Clazz.new_($I$(1));
this.autoAnimationDelay=0.2;
this.script1="";
this.script2="";
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$SA', function (args) {
C$.$init$.apply(this);
if (System.getProperty$S("javawebstart.version") != null ) {
System.setSecurityManager$SecurityManager(null);
}if (System.getProperty$S("user.home") == null ) {
System.err.println$S($I$(2).$$S("Error starting Jmol: the property \'user.home\' is not defined."));
System.exit$I(1);
}{

}
this.parseCommandLine$SA(args);
}, 1);

Clazz.newMeth(C$, 'parseCommandLine$SA', function (args) {
var options=p$1.getOptions.apply(this, []);
var line=null;
try {
var parser=Clazz.new_($I$(3));
line=parser.parse$org_apache_commons_cli_Options$SA(options, args);
} catch (exception) {
if (Clazz.exceptionOf(exception,"org.apache.commons.cli.ParseException")){
System.err.println$S("Unexpected exception: " + exception.toString());
} else {
throw exception;
}
}
args=line.getArgs$();
if (args.length > 0) {
this.modelFilename=args[0];
}p$1.checkOptions$org_apache_commons_cli_CommandLine$org_apache_commons_cli_Options.apply(this, [line, options]);
});

Clazz.newMeth(C$, 'getOptions', function () {
var options=Clazz.new_($I$(4));
options.addOption$S$S$Z$S("a", "autoanimationdelay", true, $I$(2).$$S("delay time in seconds for press-and-hold operation of toolbar animation buttons (default 0.2; numbers > 10 assumed to be milliseconds; set to 0 to disable)"));
options.addOption$S$S$Z$S("b", "backgroundtransparent", false, $I$(2).$$S("transparent background"));
options.addOption$S$S$Z$S("C", "checkload", false, $I$(2).$$S("check script syntax only - with file loading"));
options.addOption$S$S$Z$S("c", "check", false, $I$(2).$$S("check script syntax only - no file loading"));
$I$(5).withValueSeparator$();
options.addOption$S$S$Z$S("D", "property=value", true, $I$(2).$$S("supported options are given below"));
options.addOption$S$S$Z$S("d", "debug", false, $I$(2).$$S("debug"));
options.addOption$S$S$Z$S("g", "geometry", true, $I$(2).o$S$O($I$(2).$$S("window width x height, e.g. {0}"), "-g500x500"));
options.addOption$S$S$Z$S("h", "help", false, $I$(2).$$S("give this help page"));
options.addOption$S$S$Z$S("I", "input", false, $I$(2).$$S("allow piping of input from System.Input"));
options.addOption$S$S$Z$S("i", "silent", false, $I$(2).$$S("silent startup operation"));
options.addOption$S$S$Z$S("J", "jmolscript1", true, $I$(2).$$S("Jmol script to execute BEFORE -s option"));
options.addOption$S$S$Z$S("j", "jmolscript2", true, $I$(2).$$S("Jmol script to execute AFTER -s option"));
options.addOption$S$S$Z$S("k", "kiosk", false, $I$(2).$$S("kiosk mode -- no frame"));
options.addOption$S$S$Z$S("L", "nosplash", false, $I$(2).$$S("start with no splash screen"));
options.addOption$S$S$Z$S("l", "list", false, $I$(2).$$S("list commands during script execution"));
options.addOption$S$S$Z$S("M", "multitouch", true, $I$(2).$$S("use multitouch interface (requires \"sparshui\" parameter"));
options.addOption$S$S$Z$S("m", "menu", true, $I$(2).$$S("menu file to use"));
options.addOption$S$S$Z$S("n", "nodisplay", false, $I$(2).$$S("no display (and also exit when done)"));
options.addOption$S$S$Z$S("o", "noconsole", false, $I$(2).$$S("no console -- all output to sysout"));
options.addOption$S$S$Z$S("P", "port", true, $I$(2).$$S("port for JSON/MolecularPlayground-style communication"));
options.addOption$S$S$Z$S("p", "printOnly", false, $I$(2).$$S("send only output from print messages to console (implies -i)"));
options.addOption$S$S$Z$S("q", "quality", true, $I$(2).$$S("JPG image quality (1-100; default 75) or PNG image compression (0-9; default 2, maximum compression 9)"));
options.addOption$S$S$Z$S("R", "restricted", false, $I$(2).$$S("restrict local file access"));
options.addOption$S$S$Z$S("r", "restrictSpt", false, $I$(2).$$S("restrict local file access (allow reading of SPT files)"));
options.addOption$S$S$Z$S("s", "script", true, $I$(2).$$S("script file to execute or \'-\' for System.in"));
options.addOption$S$S$Z$S("T", "headlessmaxtime", true, $I$(2).$$S("headless max time (sec)"));
options.addOption$S$S$Z$S("t", "threaded", false, $I$(2).$$S("independent command thread"));
options.addOption$S$S$Z$S("U", "plugin", true, $I$(2).$$S("plugin to start initially"));
options.addOption$S$S$Z$S("w", "write", true, $I$(2).o$S$O($I$(2).$$S("{0} or {1}:filename"), Clazz.array(java.lang.Object, -1, ["CLIP", "GIF|JPG|JPG64|PNG|PPM"])));
options.addOption$S$S$Z$S("x", "exit", false, $I$(2).$$S("exit after script (implicit with -n)"));
return options;
}, p$1);

Clazz.newMeth(C$, 'checkOptions$org_apache_commons_cli_CommandLine$org_apache_commons_cli_Options', function (line, options) {
if (line.hasOption$S("h")) {
var formatter=Clazz.new_($I$(6));
formatter.setOptionComparator$java_util_Comparator(Clazz.new_($I$(7), [this, null]));
formatter.printHelp$S$org_apache_commons_cli_Options("Jmol", options);
System.out.println$();
System.out.println$S($I$(2).$$S("For example:"));
System.out.println$();
System.out.println$S("Jmol -ions myscript.spt -w JPEG:myfile.jpg > output.txt");
System.out.println$();
System.out.println$S($I$(2).$$S("The -D options are as follows (defaults in parenthesis) and must be called preceding \'-jar Jmol.jar\':"));
System.out.println$();
System.out.println$S("  cdk.debugging=[true|false] (false)");
System.out.println$S("  cdk.debug.stdout=[true|false] (false)");
System.out.println$S("  display.speed=[fps|ms] (ms)");
System.out.println$S("  logger.debug=[true|false] (false)");
System.out.println$S("  logger.error=[true|false] (true)");
System.out.println$S("  logger.fatal=[true|false] (true)");
System.out.println$S("  logger.info=[true|false] (true)");
System.out.println$S("  logger.logLevel=[true|false] (false)");
System.out.println$S("  logger.warn=[true|false] (true)");
System.out.println$S("  plugin.dir (unset)");
System.out.println$S("  user.language=[ca|cs|de|en_GB|en_US|es|fr|hu|it|ko|nl|pt_BR|tr|zh_TW] (en_US)");
System.exit$I(0);
}if (line.hasOption$S("a")) {
this.autoAnimationDelay=$I$(8).parseFloat$S(line.getOptionValue$S("a"));
if (this.autoAnimationDelay > 10 ) this.autoAnimationDelay /= 1000;
$I$(9).info$S("setting autoAnimationDelay to " + new Float(this.autoAnimationDelay).toString() + " seconds" );
}if (line.hasOption$S("d")) {
$I$(9).setLogLevel$I(5);
}this.info.put$TK$TV(this.isDataOnly ? "JmolData" : "Jmol", $I$(10).TRUE);
if (line.hasOption$S("k")) this.info.put$TK$TV("isKiosk", $I$(10).valueOf$Z(this.isKiosk=true));
if (line.hasOption$S("P")) this.port=$I$(8).parseInt$S(line.getOptionValue$S("P"));
if (this.port > 0) this.info.put$TK$TV("port", Integer.valueOf$I(this.port));
if (line.hasOption$S("p")) this.isPrintOnly=true;
if (this.isPrintOnly) {
this.info.put$TK$TV("printOnly", $I$(10).TRUE);
this.isSilent=true;
}if (line.hasOption$S("i")) this.isSilent=true;
if (this.isSilent) this.info.put$TK$TV("silent", $I$(10).TRUE);
if (line.hasOption$S("o")) this.haveConsole=false;
if (!this.haveConsole) this.info.put$TK$TV("noConsole", $I$(10).TRUE);
if (line.hasOption$S("b")) this.info.put$TK$TV("transparentBackground", $I$(10).TRUE);
if (line.hasOption$S("R")) this.info.put$TK$TV("access:NONE", $I$(10).TRUE);
if (line.hasOption$S("r")) this.info.put$TK$TV("access:READSPT", $I$(10).TRUE);
if (line.hasOption$S("t")) this.info.put$TK$TV("useCommandThread", $I$(10).TRUE);
if (line.hasOption$S("l")) this.info.put$TK$TV("listCommands", $I$(10).TRUE);
if (line.hasOption$S("L")) this.splashEnabled=false;
if (line.hasOption$S("c")) this.info.put$TK$TV("check", $I$(10).TRUE);
if (line.hasOption$S("C")) this.info.put$TK$TV("checkLoad", $I$(10).TRUE);
if (line.hasOption$S("m")) this.menuFile=line.getOptionValue$S("m");
if (line.hasOption$S("J")) this.script1=line.getOptionValue$S("J");
if (line.hasOption$S("M")) this.info.put$TK$TV("multitouch", line.getOptionValue$S("M"));
if (line.hasOption$S("s")) {
this.scriptFilename=line.getOptionValue$S("s");
}if (line.hasOption$S("U")) this.info.put$TK$TV("plugin", line.getOptionValue$S("U"));
if (line.hasOption$S("j")) {
this.script2=line.getOptionValue$S("j");
}if (this.haveDisplay && this.historyFile != null  ) {
var size;
var vers=System.getProperty$S("java.version");
if (vers.compareTo$S("1.1.2") < 0) {
System.out.println$S("!!!WARNING: Swing components require a 1.1.2 or higher version VM!!!");
}if (!this.isKiosk) {
size=this.historyFile.getWindowSize$S("Jmol");
if (size != null ) {
this.startupWidth=size.width;
this.startupHeight=size.height;
}this.historyFile.getWindowBorder$S("Jmol");
this.border=Clazz.new_($I$(11).c$$I$I,[12, 116]);
}}var width=(this.isKiosk ? 0 : 500);
var height=500;
if (line.hasOption$S("g")) {
var geometry=line.getOptionValue$S("g");
var indexX=geometry.indexOf$I("x");
if (indexX > 0) {
width=$I$(8).parseInt$S(geometry.substring$I$I(0, indexX));
height=$I$(8).parseInt$S(geometry.substring$I(indexX + 1));
} else {
width=height=$I$(8).parseInt$S(geometry);
}this.startupWidth=-1;
}if (this.startupWidth <= 0 || this.startupHeight <= 0 ) {
if (this.haveDisplay && !this.isKiosk && this.border != null   ) {
this.startupWidth=width + this.border.x;
this.startupHeight=height + this.border.y;
} else {
this.startupWidth=width;
this.startupHeight=height;
}}if (line.hasOption$S("w")) {
var quality=-1;
if (line.hasOption$S("q")) quality=$I$(8).parseInt$S(line.getOptionValue$S("q"));
var type_name=line.getOptionValue$S("w");
if (type_name != null ) {
if (type_name.length$() == 0) type_name="JPG:jpg";
if (type_name.indexOf$S(":") < 0) type_name += ":jpg";
var i=type_name.indexOf$S(":");
var type=type_name.substring$I$I(0, i).toUpperCase$();
type_name=type_name.substring$I(i + 1).trim$();
if (type.indexOf$S(" ") >= 0) {
quality=$I$(8).parseInt$S(type.substring$I(type.indexOf$S(" ")).trim$());
type.substring$I$I(0, type.indexOf$S(" "));
}if ($I$(12).isHeadless$()) {
var data=Clazz.new_($I$(1));
data.put$TK$TV("fileName", type_name);
data.put$TK$TV("type", type);
data.put$TK$TV("quality", Integer.valueOf$I(quality));
data.put$TK$TV("width", Integer.valueOf$I(width));
data.put$TK$TV("height", Integer.valueOf$I(height));
this.info.put$TK$TV("headlessImage", data);
} else this.script2 += ";write image " + (width > 0 && height > 0  ? width + " " + height  : "") + " " + type + " " + quality + " " + $I$(8).esc$S(type_name) ;
}}if ($I$(12).isHeadless$()) this.info.put$TK$TV("headlistMaxTimeMs", Integer.valueOf$I(1000 * (line.hasOption$S("T") ? $I$(8).parseInt$S(line.getOptionValue$S("T")) : 60)));
if (line.hasOption$S("I")) this.scanInput=true;
var exitUponCompletion=false;
if (line.hasOption$S("n")) {
this.haveDisplay=false;
exitUponCompletion=!this.scanInput;
}if (line.hasOption$S("x")) exitUponCompletion=true;
if (!this.haveDisplay) this.info.put$TK$TV("noDisplay", $I$(10).TRUE);
if (exitUponCompletion) {
this.info.put$TK$TV("exit", $I$(10).TRUE);
this.script2 += ";exitJmol;";
}}, p$1);

Clazz.newMeth(C$, 'startViewer$org_jmol_api_JmolViewer$org_openscience_jmol_app_SplashInterface$Z', function (vwr, splash, isJmolData) {
try {
} catch (t) {
System.out.println$S("uncaught exception: " + t);
t.printStackTrace$();
}
if (this.menuFile != null ) vwr.setMenu$S$Z(this.menuFile, true);
if (this.modelFilename != null ) {
if (this.script1 == null ) this.script1="";
this.script1=(this.modelFilename.endsWith$S(".spt") ? "script " : "load ") + $I$(8).esc$S(this.modelFilename) + ";" + this.script1 ;
}if (this.script1 != null  && this.script1.length$() > 0 ) {
if (!this.isSilent) $I$(9).info$S("Executing script: " + this.script1);
if (splash != null ) splash.showStatus$($I$(2).$$S("Executing script 1..."));
p$1.runScript$S$Z$org_jmol_api_JmolViewer.apply(this, [this.script1, isJmolData, vwr]);
}if (this.scriptFilename != null ) {
if (!this.isSilent) $I$(9).info$S("Executing script from file: " + this.scriptFilename);
if (splash != null ) splash.showStatus$($I$(2).$$S("Executing script file..."));
if (this.scriptFilename.equals$O("-")) {
var scan=Clazz.new_($I$(13).c$$java_io_InputStream,[System.$in]);
var linein="";
var script=Clazz.new_($I$(14));
while (scan.hasNextLine$() && (linein=scan.nextLine$()) != null   && !linein.equals$O("!quit") )script.append$S(linein).append$S("\n");

scan.close$();
p$1.runScript$S$Z$org_jmol_api_JmolViewer.apply(this, [script.toString(), isJmolData, vwr]);
} else {
vwr.evalFile$S(this.scriptFilename);
}}if (this.script2 != null  && this.script2.length$() > 0 ) {
if (!this.isSilent) $I$(9).info$S("Executing script: " + this.script2);
if (splash != null ) splash.showStatus$($I$(2).$$S("Executing script 2..."));
p$1.runScript$S$Z$org_jmol_api_JmolViewer.apply(this, [this.script2, isJmolData, vwr]);
}var plugin=this.info.get$O("plugin");
if (plugin != null ) (vwr).startPlugin$S(plugin);
if (this.scanInput) {
Clazz.new_($I$(15).c$$org_jmol_api_JmolViewer$Z,[vwr, this.isSilent]);
}});

Clazz.newMeth(C$, 'runScript$S$Z$org_jmol_api_JmolViewer', function (script, outputResults, vwr) {
if (outputResults) System.out.print$O(vwr.scriptWaitStatus$S$S(script, null));
 else vwr.script$S(script);
}, p$1);

Clazz.newMeth(C$, 'addHistoryWindowInfo$S$java_awt_Component$java_awt_Point', function (name, window, border) {
this.historyFile.addWindowInfo$S$java_awt_Component$java_awt_Point(name, window, border);
});

Clazz.newMeth(C$, 'getHistoryWindowPosition$S', function (name) {
return this.historyFile.getWindowPosition$S(name);
});

Clazz.newMeth(C$, 'getHistoryWindowSize$S', function (name) {
return this.historyFile.getWindowSize$S(name);
});
;
(function(){var C$=Clazz.newClass(P$.JmolApp, "OptSort", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$org_apache_commons_cli_Option$org_apache_commons_cli_Option','compare$','compare$TT$TT'], function (o1, o2) {
var c1=o1.getOpt$().charAt$I(0);
var c2=o2.getOpt$().charAt$I(0);
var uc1=Character.toUpperCase$C(c1);
var uc2=Character.toUpperCase$C(c2);
return (uc1 == uc2 ? (c1 < c2 ? -1 : 1) : Character.compare$C$C(uc1, uc2));
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:26 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
