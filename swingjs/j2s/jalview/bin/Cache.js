(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'java.io.File',['jalview.datamodel.PDBEntry','.Type'],['jalview.structure.StructureImportSettings','.StructureParser'],'java.text.DateFormat','java.util.Locale','java.util.Collections','java.util.TreeSet','java.util.Properties','jalview.util.Platform','jalview.util.ChannelProperties','java.net.URL','java.io.FileInputStream','jalview.bin.Console','jalview.ws.sifts.SiftsSettings','jalview.urls.IdOrgSettings','jalview.structure.StructureImportSettings','jalview.bin.Cache','java.io.BufferedReader','java.io.InputStreamReader','Thread','jalview.io.PIRFile','jalview.bin.BuildDetails','java.io.FileOutputStream','jalview.jbgui.GDesktop','jalview.log.JLoggerLog4j','jalview.util.ColorUtils','jalview.util.Format','StringBuffer','java.util.StringTokenizer','jalview.schemes.ColourSchemeLoader','jalview.schemes.ColourSchemes','StringBuilder','javax.swing.UIManager','java.io.StringWriter','java.io.PrintWriter','java.util.Arrays','java.net.Authenticator',['java.net.Authenticator','.RequestorType'],'jalview.util.MessageManager','jalview.gui.Preferences',['jalview.jbgui.GPreferences','.TabRef'],'java.net.PasswordAuthentication']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Cache");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['propsAreReadOnly'],'I',['vamsasJarsArePresent','groovyJarsArePresent'],'S',['DEFAULT_SIFTS_DOWNLOAD_DIR','ID_ORG_FILE','PDB_DOWNLOAD_FORMAT','DEFAULT_PDB_FILE_PARSER','propertiesFile','releaseAppbase','getdownAppbase','getdownDistDir'],'O',['date_format','java.text.DateFormat','startupProxyProperties','String[]','proxyAuthPassword','char[]','applicationProperties','java.util.Properties','+buildProperties','tracker','java.lang.Object','trackerfocus','Class','+jgoogleanalyticstracker']]]

Clazz.newMeth(C$, 'loadProperties$S',  function (propsFile) {
C$.propertiesFile=propsFile;
var releasePropertiesFile=null;
var defaultProperties=false;
if (propsFile == null  && !C$.propsAreReadOnly ) {
var channelPrefsFilename=$I$(10).getProperty$S("preferences.filename");
var releasePrefsFilename=".jalview_properties";
C$.propertiesFile=System.getProperty$S("user.home") + $I$(1).separatorChar + channelPrefsFilename ;
releasePropertiesFile=System.getProperty$S("user.home") + $I$(1).separatorChar + releasePrefsFilename ;
defaultProperties=true;
} else {
C$.propsAreReadOnly=true;
}if (C$.propertiesFile == null ) {
$I$(9).readInfoProperties$S$java_util_Properties("jalview_", C$.applicationProperties);
} else {
try {
var fis;
try {
fis=Clazz.new_($I$(11,1).c$$S,[C$.propertiesFile]).openStream$();
System.out.println$S("Loading jalview properties from : " + C$.propertiesFile);
System.out.println$S("Disabling Jalview writing to user\'s local properties file.");
C$.propsAreReadOnly=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
fis=null;
} else {
throw ex;
}
}
if (fis == null ) {
var readPropertiesFile=C$.propertiesFile;
if (defaultProperties && (!Clazz.new_($I$(1,1).c$$S,[C$.propertiesFile]).exists$()) && (Clazz.new_($I$(1,1).c$$S,[releasePropertiesFile]).exists$())  ) {
readPropertiesFile=releasePropertiesFile;
}fis=Clazz.new_($I$(12,1).c$$S,[readPropertiesFile]);
}C$.applicationProperties.clear$();
C$.applicationProperties.load$java_io_InputStream(fis);
C$.deleteBuildProperties$();
fis.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Error reading properties file: " + ex);
} else {
throw ex;
}
}
}var proxyType=C$.getDefault$S$S("USE_PROXY", "false");
switch (proxyType) {
case "none":
C$.clearProxyProperties$();
break;
case "false":
C$.resetProxyProperties$();
break;
case "true":
var httpHost=C$.getDefault$S$S("PROXY_SERVER", "");
var httpPort=C$.getDefault$S$S("PROXY_PORT", "8080");
var httpsHost=C$.getDefault$S$S("PROXY_SERVER_HTTPS", httpHost);
var httpsPort=C$.getDefault$S$S("PROXY_PORT_HTTPS", httpPort);
var httpUser=C$.getDefault$S$S("PROXY_AUTH_USER", null);
var httpsUser=C$.getDefault$S$S("PROXY_AUTH_USER_HTTPS", httpUser);
C$.setProxyProperties$S$S$S$S$S$CA$S$CA$S(httpHost, httpPort, httpsHost, httpsPort, httpUser, C$.proxyAuthPassword, httpsUser, C$.proxyAuthPassword, "localhost");
break;
default:
var message="Incorrect PROXY_TYPE - should be 'none' (clear proxy properties), 'false' (system settings), 'true' (custom settings): " + proxyType;
$I$(13).warn$S(message);
}
var authorDetails=C$.resolveResourceURLFor$S("/authors.props");
try {
if (authorDetails != null ) {
var localJarFileURL=Clazz.new_($I$(11,1).c$$S,[authorDetails]);
var $in=localJarFileURL.openStream$();
C$.applicationProperties.load$java_io_InputStream($in);
$in.close$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Error reading author details: " + ex);
authorDetails=null;
} else {
throw ex;
}
}
if (authorDetails == null ) {
C$.applicationProperties.remove$O("AUTHORS");
C$.applicationProperties.remove$O("AUTHORFNAMES");
C$.applicationProperties.remove$O("YEAR");
}C$.loadBuildProperties$Z(false);
$I$(14,"setMapWithSifts$Z",[C$.getDefault$S$Z("MAP_WITH_SIFTS", false)]);
$I$(14,"setSiftDownloadDirectory$S",[C$.getDefault$S$S("sifts_download_dir", C$.DEFAULT_SIFTS_DOWNLOAD_DIR)]);
$I$(14,"setFailSafePIDThreshold$S",[C$.getDefault$S$S("sifts_fail_safe_pid_threshold", "30")]);
$I$(14,"setCacheThresholdInDays$S",[C$.getDefault$S$S("sifts_cache_threshold_in_days", "2")]);
$I$(15,"setUrl$S",[C$.getDefault$S$S("ID_ORG_HOSTURL", "https://www.jalview.org/services/identifiers")]);
$I$(15).setDownloadLocation$S(C$.ID_ORG_FILE);
$I$(16,"setDefaultStructureFileFormat$S",[C$.getDefault$S$S("PDB_DOWNLOAD_FORMAT", C$.PDB_DOWNLOAD_FORMAT)]);
$I$(16).setDefaultPDBFileParser$S(C$.DEFAULT_PDB_FILE_PARSER);
var jnlpVersion=System.getProperty$S("jalview.version");
if (jnlpVersion == null  && C$.getDefault$S$Z("VERSION_CHECK", true)  && (System.getProperty$S("java.awt.headless") == null  || System.getProperty$S("java.awt.headless").equals$O("false") ) ) {
var vc=Clazz.new_($I$(20,1),[this, null],P$.Cache$1VersionChecker);
vc.start$();
} else {
if (jnlpVersion != null ) {
C$.setProperty$S$S("LATEST_VERSION", jnlpVersion);
} else {
C$.applicationProperties.remove$O("LATEST_VERSION");
}}C$.initUserColourSchemes$S(C$.getProperty$S("USER_DEFINED_COLOURS"));
$I$(21).useModellerOutput=C$.getDefault$S$Z("PIR_MODELLER", false);
}, 1);

Clazz.newMeth(C$, 'resolveResourceURLFor$S',  function (resourcePath) {
var url=null;
if ($I$(9).isJS$() || !Clazz.getClass(C$).getProtectionDomain$().getCodeSource$().getLocation$().toString().endsWith$S(".jar") ) {
try {
url=Clazz.getClass(C$).getResource$S(resourcePath).toString();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Failed to resolve resource " + resourcePath + ": " + ex.getMessage$() );
} else {
throw ex;
}
}
} else {
url="jar:".concat$S(Clazz.getClass(C$).getProtectionDomain$().getCodeSource$().getLocation$().toString().concat$S("!" + resourcePath));
}return url;
}, 1);

Clazz.newMeth(C$, 'loadBuildProperties$Z',  function (reportVersion) {
var codeInstallation=C$.getProperty$S("INSTALLATION");
var printVersion=codeInstallation == null ;
try {
var buildDetails=C$.resolveResourceURLFor$S("/.build_properties");
var localJarFileURL=Clazz.new_($I$(11,1).c$$S,[buildDetails]);
var $in=localJarFileURL.openStream$();
C$.buildProperties.load$java_io_InputStream($in);
$in.close$();
if (C$.buildProperties.getProperty$S$S("BUILD_DATE", null) != null ) {
C$.applicationProperties.put$O$O("BUILD_DATE", C$.buildProperties.getProperty$S("BUILD_DATE"));
}if (C$.buildProperties.getProperty$S$S("INSTALLATION", null) != null ) {
C$.applicationProperties.put$O$O("INSTALLATION", C$.buildProperties.getProperty$S("INSTALLATION"));
}if (C$.buildProperties.getProperty$S$S("VERSION", null) != null ) {
C$.applicationProperties.put$O$O("VERSION", C$.buildProperties.getProperty$S("VERSION"));
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Error reading build details: " + ex);
C$.applicationProperties.remove$O("VERSION");
} else {
throw ex;
}
}
var codeVersion=C$.getProperty$S("VERSION");
codeInstallation=C$.getProperty$S("INSTALLATION");
if (codeVersion == null ) {
codeVersion="Test";
codeInstallation="";
} else {
codeInstallation=" (" + codeInstallation + ")" ;
}C$.setProperty$S$S("VERSION", codeVersion);
Clazz.new_($I$(22,1).c$$S$S$S,[codeVersion, null, codeInstallation]);
if (printVersion && reportVersion ) {
System.out.println$S($I$(10).getProperty$S("app_name") + " Version: " + codeVersion + codeInstallation );
}}, 1);

Clazz.newMeth(C$, 'deleteBuildProperties$',  function () {
C$.applicationProperties.remove$O("LATEST_VERSION");
C$.applicationProperties.remove$O("VERSION");
C$.applicationProperties.remove$O("AUTHORS");
C$.applicationProperties.remove$O("AUTHORFNAMES");
C$.applicationProperties.remove$O("YEAR");
C$.applicationProperties.remove$O("BUILD_DATE");
C$.applicationProperties.remove$O("INSTALLATION");
}, 1);

Clazz.newMeth(C$, 'getProperty$S',  function (key) {
var prop=C$.applicationProperties.getProperty$S(key);
if (prop == null  && $I$(9).isJS$() ) {
prop=C$.applicationProperties.getProperty$S($I$(9).getUniqueAppletID$() + "_" + "jalview_" + key );
}return prop;
}, 1);

Clazz.newMeth(C$, 'getDefault$S$Z',  function (property, def) {
var string=C$.getProperty$S(property);
if (string != null ) {
def=Boolean.valueOf$S(string).booleanValue$();
}return def;
}, 1);

Clazz.newMeth(C$, 'getDefault$S$I',  function (property, def) {
var string=C$.getProperty$S(property);
if (string != null ) {
try {
def=Integer.parseInt$S(string);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.out.println$S("Error parsing int property '" + property + "' with value '" + string + "'" );
} else {
throw e;
}
}
}return def;
}, 1);

Clazz.newMeth(C$, 'getDefault$S$S',  function (property, def) {
var value=C$.getProperty$S(property);
return value == null  ? def : value;
}, 1);

Clazz.newMeth(C$, 'setProperty$S$S',  function (key, obj) {
var oldValue=null;
try {
oldValue=C$.applicationProperties.setProperty$S$S(key, obj);
if (C$.propertiesFile != null  && !C$.propsAreReadOnly ) {
var out=Clazz.new_($I$(23,1).c$$S,[C$.propertiesFile]);
C$.applicationProperties.store$java_io_OutputStream$S(out, "---JalviewX Properties File---");
out.close$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Error setting property: " + key + " " + obj + "\n" + ex );
} else {
throw ex;
}
}
return oldValue;
}, 1);

Clazz.newMeth(C$, 'removeProperty$S',  function (string) {
C$.applicationProperties.remove$O(string);
C$.saveProperties$();
}, 1);

Clazz.newMeth(C$, 'saveProperties$',  function () {
if (!C$.propsAreReadOnly) {
try {
var out=Clazz.new_($I$(23,1).c$$S,[C$.propertiesFile]);
C$.applicationProperties.store$java_io_OutputStream$S(out, "---JalviewX Properties File---");
out.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Error saving properties: " + ex);
} else {
throw ex;
}
}
}}, 1);

Clazz.newMeth(C$, 'vamsasJarsPresent$',  function () {
if (C$.vamsasJarsArePresent == -1) {
try {
if (Clazz.getClass($I$(24)).getClassLoader$().loadClass$S("uk.ac.vamsas.client.VorbaId") != null ) {
$I$(13,"debug$S",["Found Vamsas Classes (uk.ac..vamsas.client.VorbaId can be loaded)"]);
C$.vamsasJarsArePresent=1;
var lvclient=$I$(25,"getLogger$S$jalview_log_JLoggerI_LogLevel",["uk.ac.vamsas", $I$(13).getCachedLogLevel$S("logs.Vamsas.Level")]);
$I$(25,"addAppender$jalview_log_JLoggerLog4j$jalview_log_JLoggerLog4j$S",[lvclient, $I$(13).log, "JalviewLogger"]);
lvclient.debug$S($I$(10).getProperty$S("app_name") + " Vamsas Client Debugging Output Follows.");
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.vamsasJarsArePresent=0;
$I$(13).debug$S("Vamsas Classes are not present");
} else {
throw e;
}
}
}return (C$.vamsasJarsArePresent > 0);
}, 1);

Clazz.newMeth(C$, 'groovyJarsPresent$',  function () {
if (C$.groovyJarsArePresent == -1) {
try {
if (Clazz.getClass(C$).getClassLoader$().loadClass$S("groovy.lang.GroovyObject") != null ) {
$I$(13,"debug$S",["Found Groovy (groovy.lang.GroovyObject can be loaded)"]);
C$.groovyJarsArePresent=1;
var lgclient=$I$(25,"getLogger$S$jalview_log_JLoggerI_LogLevel",["groovy", $I$(13).getCachedLogLevel$S("logs.Groovy.Level")]);
$I$(25,"addAppender$jalview_log_JLoggerLog4j$jalview_log_JLoggerLog4j$S",[lgclient, $I$(13).log, "JalviewLogger"]);
lgclient.debug$S($I$(10).getProperty$S("app_name") + " Groovy Client Debugging Output Follows.");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
C$.groovyJarsArePresent=0;
$I$(13).debug$S$Throwable("Groovy Classes are not present", e);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
C$.groovyJarsArePresent=0;
$I$(13).debug$S("Groovy Classes are not present");
}
} else {
throw e$$;
}
}
}return (C$.groovyJarsArePresent > 0);
}, 1);

Clazz.newMeth(C$, 'initGoogleTracker$',  function () {
if (C$.tracker == null ) {
if (C$.jgoogleanalyticstracker == null ) {
try {
C$.jgoogleanalyticstracker=Clazz.getClass(C$).getClassLoader$().loadClass$S("com.boxysystems.jgoogleanalytics.JGoogleAnalyticsTracker");
C$.trackerfocus=Clazz.getClass(C$).getClassLoader$().loadClass$S("com.boxysystems.jgoogleanalytics.FocusPoint");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(13).debug$S("com.boxysystems.jgoogleanalytics package is not present - tracking not enabled.");
C$.tracker=null;
C$.jgoogleanalyticstracker=null;
C$.trackerfocus=null;
return;
} else {
throw e;
}
}
}var re=null;
var ex=null;
var err=null;
var vrs="No Version Accessible";
try {
C$.tracker=C$.jgoogleanalyticstracker.getConstructor$ClassA(Clazz.array(Class, -1, [Clazz.getClass(String), Clazz.getClass(String), Clazz.getClass(String)])).newInstance$OA(Clazz.array(java.lang.Object, -1, [$I$(10).getProperty$S("app_name") + " Desktop", (vrs=C$.getProperty$S("VERSION") + "_" + C$.getDefault$S$S("BUILD_DATE", "unknown") ), "UA-9060947-1"]));
C$.jgoogleanalyticstracker.getMethod$S$ClassA("trackAsynchronously", Clazz.array(Class, -1, [C$.trackerfocus])).invoke$O$OA(C$.tracker, Clazz.array(java.lang.Object, -1, [C$.trackerfocus.getConstructor$ClassA(Clazz.array(Class, -1, [Clazz.getClass(String)])).newInstance$OA(Clazz.array(java.lang.Object, -1, ["Application Started."]))]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"RuntimeException")){
var e = e$$;
{
re=e;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
ex=e;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
err=e;
}
} else {
throw e$$;
}
}
if (re != null  || ex != null   || err != null  ) {
if (re != null ) {
$I$(13).debug$S$Throwable("Caught runtime exception in googletracker init:", re);
}if (ex != null ) {
$I$(13).warn$S$Throwable("Failed to initialise GoogleTracker for Jalview Desktop with version " + vrs, ex);
}if (err != null ) {
$I$(13).error$S$Throwable("Whilst initing GoogleTracker for Jalview Desktop version " + vrs, err);
}} else {
$I$(13).debug$S("Successfully initialised tracker.");
}}}, 1);

Clazz.newMeth(C$, 'getDefaultColour$S$java_awt_Color',  function (property, defcolour) {
var colprop=C$.getProperty$S(property);
if (colprop == null ) {
return defcolour;
}var col=$I$(26).parseColourString$S(colprop);
if (col == null ) {
$I$(13).warn$S("Couldn't parse '" + colprop + "' as a colour for " + property );
}return (col == null ) ? defcolour : col;
}, 1);

Clazz.newMeth(C$, 'setColourProperty$S$java_awt_Color',  function (property, colour) {
C$.setProperty$S$S(property, $I$(27).getHexString$java_awt_Color(colour));
}, 1);

Clazz.newMeth(C$, 'setDateProperty$S$java_util_Date',  function (propertyName, date) {
var formatted=C$.date_format.format$java_util_Date(date);
C$.setProperty$S$S(propertyName, formatted);
return formatted;
}, 1);

Clazz.newMeth(C$, 'getDateProperty$S',  function (propertyName) {
var val=C$.getProperty$S(propertyName);
if (val != null ) {
try {
return C$.date_format.parse$S(val);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Invalid or corrupt date in property '" + propertyName + "' : value was '" + val + "'" );
} else {
throw ex;
}
}
}return null;
}, 1);

Clazz.newMeth(C$, 'getIntegerProperty$S',  function (property) {
var val=C$.getProperty$S(property);
if (val != null  && (val=val.trim$()).length$() > 0 ) {
try {
return Integer.valueOf$S(val);
} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
System.err.println$S("Invalid integer in property '" + property + "' (value was '" + val + "')" );
} else {
throw x;
}
}
}return null;
}, 1);

Clazz.newMeth(C$, 'setOrRemove$S$S',  function (propName, value) {
if (propName == null ) {
return;
}if (value == null  || value.trim$().length$() < 1 ) {
C$.applicationProperties.remove$O(propName);
} else {
C$.applicationProperties.setProperty$S$S(propName, value);
}}, 1);

Clazz.newMeth(C$, 'initUserColourSchemes$S',  function (files) {
if (files == null  || files.length$() == 0 ) {
return;
}var coloursFound=Clazz.new_($I$(28,1));
var st=Clazz.new_($I$(29,1).c$$S$S,[files, "|"]);
while (st.hasMoreElements$()){
var file=st.nextToken$();
try {
var ucs=$I$(30).loadColourScheme$S(file);
if (ucs != null ) {
if (coloursFound.length$() > 0) {
coloursFound.append$S("|");
}coloursFound.append$S(file);
$I$(31).getInstance$().registerColourScheme$jalview_schemes_ColourSchemeI(ucs);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Error loading User ColourFile\n" + ex);
} else {
throw ex;
}
}
}
if (!files.equals$O(coloursFound.toString())) {
if (coloursFound.toString().length$() > 1) {
C$.setProperty$S$S("USER_DEFINED_COLOURS", coloursFound.toString());
} else {
C$.applicationProperties.remove$O("USER_DEFINED_COLOURS");
}}}, 1);

Clazz.newMeth(C$, 'appendIfNotNull$StringBuilder$S$S$S$S',  function (sb, prefix, value, suffix, defaultValue) {
if (value == null  && defaultValue == null  ) {
return;
}if (prefix != null ) sb.append$S(prefix);
sb.append$S(value == null  ? defaultValue : value);
if (suffix != null ) sb.append$S(suffix);
}, 1);

Clazz.newMeth(C$, 'getVersionDetailsForConsole$',  function () {
var sb=Clazz.new_($I$(32,1));
sb.append$S($I$(10).getProperty$S("app_name")).append$S(" Version: ");
sb.append$S(C$.getDefault$S$S("VERSION", "TEST"));
sb.append$S("\n");
sb.append$S($I$(10).getProperty$S("app_name")).append$S(" Installation: ");
sb.append$S(C$.getDefault$S$S("INSTALLATION", "unknown"));
sb.append$S("\n");
sb.append$S("Build Date: ");
sb.append$S(C$.getDefault$S$S("BUILD_DATE", "unknown"));
sb.append$S("\n");
sb.append$S("Java version: ");
sb.append$S(System.getProperty$S("java.version"));
sb.append$S("\n");
sb.append$S(System.getProperty$S("os.arch"));
sb.append$S(" ");
sb.append$S(System.getProperty$S("os.name"));
sb.append$S(" ");
sb.append$S(System.getProperty$S("os.version"));
sb.append$S("\n");
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Install4j version: ", System.getProperty$S("sys.install4jVersion"), "\n", null);
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Install4j template version: ", System.getProperty$S("installer_template_version"), "\n", null);
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Launcher version: ", System.getProperty$S("launcher_version"), "\n", null);
var laf=$I$(33).getLookAndFeel$();
var lafName=laf == null  ? "Not obtained" : laf.getName$();
var lafClass=laf == null  ? "unknown" : laf.getClass$().getName$();
sb.append$S("LookAndFeel: ");
sb.append$S(lafName);
sb.append$S(" (");
sb.append$S(lafClass);
sb.append$S(")\n");
if ($I$(13).isDebugEnabled$() || !"release".equals$O($I$(10).getProperty$S("channel")) ) {
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Channel: ", $I$(10).getProperty$S("channel"), "\n", null);
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Getdown appdir: ", System.getProperty$S("getdowninstanceappdir"), "\n", null);
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Getdown appbase: ", System.getProperty$S("getdowninstanceappbase"), "\n", null);
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Java home: ", System.getProperty$S("java.home"), "\n", "unknown");
}return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getBuildDetailsForSplash$',  function () {
return C$.getDefault$S$S("INSTALLATION", "unknown");
}, 1);

Clazz.newMeth(C$, 'getStackTraceString$Throwable',  function (t) {
var sw=Clazz.new_($I$(34,1));
var pw=Clazz.new_($I$(35,1).c$$java_io_Writer,[sw]);
t.printStackTrace$java_io_PrintWriter(pw);
return sw.toString();
}, 1);

Clazz.newMeth(C$, 'clearProxyProperties$',  function () {
C$.setProxyProperties$S$S$S$S$S$CA$S$CA$S(null, null, null, null, null, null, null, null, null);
}, 1);

Clazz.newMeth(C$, 'resetProxyProperties$',  function () {
C$.setProxyProperties$S$S$S$S$S$CA$S$CA$S(C$.startupProxyProperties[0], C$.startupProxyProperties[1], C$.startupProxyProperties[2], C$.startupProxyProperties[3], C$.startupProxyProperties[4], C$.startupProxyProperties[5] == null  ? null : C$.startupProxyProperties[5].toCharArray$(), C$.startupProxyProperties[6], C$.startupProxyProperties[7] == null  ? null : C$.startupProxyProperties[7].toCharArray$(), C$.startupProxyProperties[8]);
var sb=Clazz.new_($I$(32,1));
sb.append$S("Setting proxy properties to: http.proxyHost=").append$S(C$.startupProxyProperties[0]).append$S(", http.proxyPort=").append$S(C$.startupProxyProperties[1]).append$S(C$.startupProxyProperties[4] != null  && !C$.startupProxyProperties[4].isEmpty$()  ? " [" + C$.startupProxyProperties[4] + "]"  : "").append$S(", https.proxyHost=").append$S(C$.startupProxyProperties[2]).append$S(", https.proxyPort=").append$S(C$.startupProxyProperties[3]).append$S(C$.startupProxyProperties[6] != null  && !C$.startupProxyProperties[6].isEmpty$()  ? " [" + C$.startupProxyProperties[6] + "]"  : "");
$I$(13,"debug$S",[sb.toString()]);
}, 1);

Clazz.newMeth(C$, 'setProxyPropertiesFromPreferences$',  function () {
C$.setProxyPropertiesFromPreferences$S("false");
}, 1);

Clazz.newMeth(C$, 'setProxyPropertiesFromPreferences$S',  function (previousProxyType) {
var proxyType=C$.getDefault$S$S("USE_PROXY", "false");
if (previousProxyType != null  && !proxyType.equals$O("true")  && proxyType.equals$O(previousProxyType) ) {
return;
}switch (proxyType) {
case "none":
if (!previousProxyType.equals$O(proxyType)) {
$I$(13).info$S("Setting no proxy settings");
C$.setProxyProperties$S$S$S$S$S$CA$S$CA$S(null, null, null, null, null, null, null, null, null);
}break;
case "true":
$I$(13).info$S("Setting custom proxy settings");
var proxyAuthSet=C$.getDefault$S$Z("PROXY_AUTH", false);
C$.setProxyProperties$S$S$S$S$S$CA$S$CA$S(C$.getDefault$S$S("PROXY_SERVER", null), C$.getDefault$S$S("PROXY_PORT", null), C$.getDefault$S$S("PROXY_SERVER_HTTPS", null), C$.getDefault$S$S("PROXY_PORT_HTTPS", null), proxyAuthSet ? C$.getDefault$S$S("PROXY_AUTH_USERNAME", "") : null, proxyAuthSet ? C$.proxyAuthPassword : null, proxyAuthSet ? C$.getDefault$S$S("PROXY_AUTH_USERNAME", "") : null, proxyAuthSet ? C$.proxyAuthPassword : null, "localhost");
break;
default:
$I$(13).info$S("Setting system proxy settings");
C$.resetProxyProperties$();
}
}, 1);

Clazz.newMeth(C$, 'setProxyProperties$S$S$S$S$S$CA$S$CA$S',  function (httpHost, httpPort, httpsHost, httpsPort, httpUser, httpPassword, httpsUser, httpsPassword, nonProxyHosts) {
C$.setOrClearSystemProperty$S$S("http.proxyHost", httpHost);
C$.setOrClearSystemProperty$S$S("http.proxyPort", httpPort);
C$.setOrClearSystemProperty$S$S("https.proxyHost", httpsHost);
C$.setOrClearSystemProperty$S$S("https.proxyPort", httpsPort);
C$.setOrClearSystemProperty$S$S("http.proxyUser", httpUser);
C$.setOrClearSystemProperty$S$S("https.proxyUser", httpsUser);
var customProxySet=C$.getDefault$S$S("USE_PROXY", "false").equals$O("true");
if (httpUser != null  || httpsUser != null  ) {
try {
var displayHttpPw=Clazz.array(Character.TYPE, [httpPassword == null  ? 0 : httpPassword.length]);
$I$(36).fill$CA$C(displayHttpPw, "*");
$I$(13,"debug$S",["CACHE Proxy: setting new Authenticator with httpUser='" + httpUser + "' httpPassword='" + displayHttpPw + "'" ]);
if (!$I$(9).isJS$()) {
$I$(37,"setDefault$java_net_Authenticator",[((P$.Cache$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cache$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.net.Authenticator'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPasswordAuthentication$',  function () {
if (this.getRequestorType$() === $I$(38).PROXY ) {
var protocol=this.getRequestingProtocol$();
var needProxyPasswordSet=false;
if (this.$finals$.customProxySet && (protocol.equalsIgnoreCase$S("http") && (this.$finals$.httpUser != null  && this.$finals$.httpUser.length$() > 0  && (this.$finals$.httpPassword == null  || this.$finals$.httpPassword.length == 0 ) ) )  || (protocol.equalsIgnoreCase$S("https") && (this.$finals$.httpsUser != null  && this.$finals$.httpsUser.length$() > 0  && (this.$finals$.httpsPassword == null  || this.$finals$.httpsPassword.length == 0 ) ) ) ) {
var message=$I$(39).getString$S("label.proxy_password_required");
$I$(40,"openPreferences$jalview_jbgui_GPreferences_TabRef$S",[$I$(41).CONNECTIONS_TAB, message]);
$I$(40).getInstance$().proxyAuthPasswordCheckHighlight$Z$Z(true, true);
} else {
try {
if (protocol.equalsIgnoreCase$S("http") && this.getRequestingHost$().equalsIgnoreCase$S(this.$finals$.httpHost) && this.getRequestingPort$() == (Integer.valueOf$S(this.$finals$.httpPort)).$c()   ) {
$I$(13,"debug$S",["AUTHENTICATOR returning PasswordAuthentication(\"" + this.$finals$.httpUser + "\", '" +  String.instantialize(this.$finals$.displayHttpPw) + "')" ]);
return Clazz.new_($I$(42,1).c$$S$CA,[this.$finals$.httpUser, this.$finals$.httpPassword]);
}if (protocol.equalsIgnoreCase$S("https") && this.getRequestingHost$().equalsIgnoreCase$S(this.$finals$.httpsHost) && this.getRequestingPort$() == (Integer.valueOf$S(this.$finals$.httpsPort)).$c()   ) {
var displayHttpsPw=Clazz.array(Character.TYPE, [this.$finals$.httpPassword.length]);
$I$(36).fill$CA$C(displayHttpsPw, "*");
$I$(13,"debug$S",["AUTHENTICATOR returning PasswordAuthentication(\"" + this.$finals$.httpsUser + "\", '" + displayHttpsPw + "'" ]);
return Clazz.new_($I$(42,1).c$$S$CA,[this.$finals$.httpsUser, this.$finals$.httpsPassword]);
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
$I$(13).error$S("Problem with proxy port values [http:" + this.$finals$.httpPort + ", https:" + this.$finals$.httpsPort + "]" );
} else {
throw e;
}
}
$I$(13).debug$S("AUTHENTICATOR after trying to get PasswordAuthentication");
}}$I$(13).debug$S("AUTHENTICATOR returning null");
return null;
});
})()
), Clazz.new_($I$(37,1),[this, {httpsPort:httpsPort,httpPassword:httpPassword,customProxySet:customProxySet,httpHost:httpHost,displayHttpPw:displayHttpPw,httpPort:httpPort,httpsUser:httpsUser,httpsPassword:httpsPassword,httpsHost:httpsHost,httpUser:httpUser}],P$.Cache$2))]);
}$I$(13).debug$S("AUTHENTICATOR setting property \'jdk.http.auth.tunneling.disabledSchemes\' to \"\"");
System.setProperty$S$S("jdk.http.auth.tunneling.disabledSchemes", "");
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
$I$(13).error$S("Could not set default Authenticator");
$I$(13,"debug$S",[C$.getStackTraceString$Throwable(e)]);
} else {
throw e;
}
}
} else {
if (!$I$(9).isJS$()) {
$I$(13).debug$S("AUTHENTICATOR setting default Authenticator to null");
$I$(37).setDefault$java_net_Authenticator(null);
}}$I$(13).debug$S("AUTHENTICATOR setting property 'http.nonProxyHosts' to \"" + nonProxyHosts + "\"" );
C$.setOrClearSystemProperty$S$S("http.nonProxyHosts", nonProxyHosts);
}, 1);

Clazz.newMeth(C$, 'setOrClearSystemProperty$S$CA',  function (key, value) {
C$.setOrClearSystemProperty$S$S(key, (value == null ) ? null :  String.instantialize(value));
}, 1);

Clazz.newMeth(C$, 'setOrClearSystemProperty$S$S',  function (key, value) {
if (key == null ) {
return;
}if (value == null ) {
System.clearProperty$S(key);
} else {
System.setProperty$S$S(key, value);
}}, 1);

Clazz.newMeth(C$, 'setGetdownAppbase$',  function () {
if (C$.getdownAppbase != null ) {
return;
}var appbase=System.getProperty$S("getdownappbase");
var distDir=System.getProperty$S("getdowndistdir");
if (appbase == null ) {
appbase=C$.buildProperties.getProperty$S("GETDOWNAPPBASE");
distDir=C$.buildProperties.getProperty$S("GETDOWNAPPDISTDIR");
}if (appbase == null ) {
appbase=C$.releaseAppbase;
distDir="release";
}if (appbase.endsWith$S("/")) {
appbase=appbase.substring$I$I(0, appbase.length$() - 1);
}if (distDir == null ) {
distDir=appbase.equals$O(C$.releaseAppbase) ? "release" : "alt";
}C$.getdownAppbase=appbase;
C$.getdownDistDir=distDir;
}, 1);

Clazz.newMeth(C$, 'getGetdownAppbase$',  function () {
C$.setGetdownAppbase$();
return C$.getdownAppbase;
}, 1);

Clazz.newMeth(C$, 'getAppbaseBuildProperties$',  function () {
var appbase=C$.getGetdownAppbase$();
return appbase + "/" + C$.getdownDistDir + "/build_properties" ;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_SIFTS_DOWNLOAD_DIR=System.getProperty$S("user.home") + $I$(1).separatorChar + ".sifts_downloads" + $I$(1).separatorChar ;
C$.ID_ORG_FILE=System.getProperty$S("user.home") + $I$(1).separatorChar + ".identifiers.org.ids.json" ;
C$.PDB_DOWNLOAD_FORMAT=$I$(2).MMCIF.toString();
C$.DEFAULT_PDB_FILE_PARSER=$I$(3).JMOL_PARSER.toString();
C$.date_format=$I$(4,"getDateTimeInstance$I$I$java_util_Locale",[2, 2, $I$(5).UK]);
C$.startupProxyProperties=Clazz.array(String, -1, [System.getProperty$S("http.proxyHost"), System.getProperty$S("http.proxyPort"), System.getProperty$S("https.proxyHost"), System.getProperty$S("https.proxyPort"), System.getProperty$S("http.proxyUser"), System.getProperty$S("http.proxyPassword"), System.getProperty$S("https.proxyUser"), System.getProperty$S("https.proxyPassword"), System.getProperty$S("http.nonProxyHosts")]);
C$.proxyAuthPassword=null;
C$.applicationProperties=((P$.Cache$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cache$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.Properties'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'keys$',  function () {
return $I$(6,"enumeration$java_util_Collection",[Clazz.new_([C$.superclazz.prototype.keySet$.apply(this, [])],$I$(7,1).c$$java_util_Collection)]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.Cache$1));
C$.buildProperties=Clazz.new_($I$(8,1));
C$.propsAreReadOnly=$I$(9).isJS$();
C$.vamsasJarsArePresent=-1;
C$.groovyJarsArePresent=-1;
C$.tracker=null;
C$.trackerfocus=null;
C$.jgoogleanalyticstracker=null;
{
if (!$I$(9).isJS$()) {
var specversion=Float.valueOf$F(Float.parseFloat$S(System.getProperty$S("java.specification.version")));
C$.releaseAppbase=((specversion).$c() < 9 ) ? "https://www.jalview.org/getdown/release/1.8" : "https://www.jalview.org/getdown/release/11";
} else {
C$.releaseAppbase="https://www.jalview.org/jalview-js";
C$.getdownAppbase=C$.releaseAppbase;
C$.getdownDistDir="/swingjs/j2s";
}};
};
;
(function(){/*l*/var C$=Clazz.newClass(P$, "Cache$1VersionChecker", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread', null, 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var remoteBuildPropertiesUrl=$I$(17).getAppbaseBuildProperties$();
var orgtimeout=System.getProperty$S("sun.net.client.defaultConnectTimeout");
if (orgtimeout == null ) {
orgtimeout="30";
System.out.println$S("# INFO: Setting default net timeout to " + orgtimeout + " seconds." );
}var remoteVersion=null;
if (remoteBuildPropertiesUrl.startsWith$S("http")) {
try {
System.setProperty$S$S("sun.net.client.defaultConnectTimeout", "5000");
var url=Clazz.new_($I$(11,1).c$$S,[remoteBuildPropertiesUrl]);
var $in=Clazz.new_([Clazz.new_([url.openStream$()],$I$(19,1).c$$java_io_InputStream)],$I$(18,1).c$$java_io_Reader);
var remoteBuildProperties=Clazz.new_($I$(8,1));
remoteBuildProperties.load$java_io_Reader($in);
remoteVersion=remoteBuildProperties.getProperty$S("VERSION");
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Non-fatal exception when checking version at " + remoteBuildPropertiesUrl + ":" );
System.out.println$O(ex);
remoteVersion=$I$(17).getProperty$S("VERSION");
} else {
throw ex;
}
}
}System.setProperty$S$S("sun.net.client.defaultConnectTimeout", orgtimeout);
$I$(17).setProperty$S$S("LATEST_VERSION", remoteVersion);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
