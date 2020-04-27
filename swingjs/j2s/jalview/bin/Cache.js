(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'java.io.File',['jalview.datamodel.PDBEntry','.Type'],['jalview.structure.StructureImportSettings','.StructureParser'],'java.text.DateFormat','java.util.Locale','java.util.Collections','java.util.TreeSet','java.util.Properties','jalview.util.Platform','jalview.javascript.log4j.ConsoleAppender','jalview.javascript.log4j.SimpleLayout','jalview.javascript.log4j.Logger','jalview.javascript.log4j.Level','java.net.URL','java.io.FileInputStream','jalview.ws.sifts.SiftsSettings','jalview.urls.IdOrgSettings','jalview.structure.StructureImportSettings','jalview.bin.Cache','java.io.BufferedReader','java.io.InputStreamReader','Thread','jalview.io.PIRFile','jalview.bin.BuildDetails','Boolean','java.io.FileOutputStream','jalview.jbgui.GDesktop','jalview.util.ColorUtils','jalview.util.Format','StringBuffer','java.util.StringTokenizer','jalview.schemes.ColourSchemeLoader','jalview.schemes.ColourSchemes','StringBuilder']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Cache");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['propsAreReadOnly'],'I',['vamsasJarsArePresent','groovyJarsArePresent'],'S',['DEFAULT_SIFTS_DOWNLOAD_DIR','ID_ORG_FILE','PDB_DOWNLOAD_FORMAT','DEFAULT_PDB_FILE_PARSER','propertiesFile'],'O',['date_format','java.text.DateFormat','log','jalview.javascript.log4j.Logger','applicationProperties','java.util.Properties','tracker','java.lang.Object','trackerfocus','Class','+jgoogleanalyticstracker']]]

Clazz.newMeth(C$, 'initLogger$', function () {
if (C$.log != null ) {
return;
}try {
var ap=Clazz.new_([Clazz.new_($I$(11,1)), "System.err"],$I$(10,1).c$$jalview_javascript_log4j_Layout$S);
ap.setName$S("JalviewLogger");
$I$(12).getRootLogger$().addAppender$jalview_javascript_log4j_Appender(ap);
var laxis=$I$(12).getLogger$S("org.apache.axis");
var lcastor=$I$(12).getLogger$S("org.exolab.castor");
C$.log=$I$(12).getLogger$S("jalview.bin.Jalview");
laxis.setLevel$jalview_javascript_log4j_Level($I$(13,"toLevel$S",[C$.getDefault$S$S("logs.Axis.Level", $I$(13).$INFO.toString())]));
lcastor.setLevel$jalview_javascript_log4j_Level($I$(13,"toLevel$S",[C$.getDefault$S$S("logs.Castor.Level", $I$(13).$INFO.toString())]));
lcastor=$I$(12).getLogger$S("org.exolab.castor.xml");
lcastor.setLevel$jalview_javascript_log4j_Level($I$(13,"toLevel$S",[C$.getDefault$S$S("logs.Castor.Level", $I$(13).$INFO.toString())]));
C$.log.setLevel$jalview_javascript_log4j_Level($I$(13,"toLevel$S",[C$.getDefault$S$S("logs.Jalview.level", $I$(13).$INFO.toString())]));
C$.log.debug$O("Jalview Debugging Output Follows.");
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Problems initializing the log4j system\n");
ex.printStackTrace$java_io_PrintStream(System.err);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'loadProperties$S', function (propsFile) {
C$.propertiesFile=propsFile;
if (propsFile == null  && !C$.propsAreReadOnly ) {
C$.propertiesFile=System.getProperty$S("user.home") + $I$(1).separatorChar + ".jalview_properties" ;
} else {
C$.propsAreReadOnly=true;
}if (C$.propertiesFile == null ) {
$I$(9).readInfoProperties$S$java_util_Properties("jalview_", C$.applicationProperties);
} else {
try {
var fis;
try {
fis=Clazz.new_($I$(14,1).c$$S,[C$.propertiesFile]).openStream$();
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
fis=Clazz.new_($I$(15,1).c$$S,[C$.propertiesFile]);
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
}if (C$.getDefault$S$Z("USE_PROXY", false)) {
var proxyServer=C$.getDefault$S$S("PROXY_SERVER", "");
var proxyPort=C$.getDefault$S$S("PROXY_PORT", "8080");
System.out.println$S("Using proxyServer: " + proxyServer + " proxyPort: " + proxyPort );
System.setProperty$S$S("http.proxyHost", proxyServer);
System.setProperty$S$S("http.proxyPort", proxyPort);
}var authorDetails=C$.resolveResourceURLFor$S("/authors.props");
try {
if (authorDetails != null ) {
var localJarFileURL=Clazz.new_($I$(14,1).c$$S,[authorDetails]);
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
$I$(16,"setMapWithSifts$Z",[C$.getDefault$S$Z("MAP_WITH_SIFTS", false)]);
$I$(16,"setSiftDownloadDirectory$S",[C$.getDefault$S$S("sifts_download_dir", C$.DEFAULT_SIFTS_DOWNLOAD_DIR)]);
$I$(16,"setFailSafePIDThreshold$S",[C$.getDefault$S$S("sifts_fail_safe_pid_threshold", "30")]);
$I$(16,"setCacheThresholdInDays$S",[C$.getDefault$S$S("sifts_cache_threshold_in_days", "2")]);
$I$(17,"setUrl$S",[C$.getDefault$S$S("ID_ORG_HOSTURL", "http://www.jalview.org/services/identifiers")]);
$I$(17).setDownloadLocation$S(C$.ID_ORG_FILE);
$I$(18,"setDefaultStructureFileFormat$S",[C$.getDefault$S$S("PDB_DOWNLOAD_FORMAT", C$.PDB_DOWNLOAD_FORMAT)]);
$I$(18).setDefaultPDBFileParser$S(C$.DEFAULT_PDB_FILE_PARSER);
var jnlpVersion=System.getProperty$S("jalview.version");
if (jnlpVersion == null  && C$.getDefault$S$Z("VERSION_CHECK", true)  && (System.getProperty$S("java.awt.headless") == null  || System.getProperty$S("java.awt.headless").equals$O("false") ) ) {
((P$.Cache$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cache$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var orgtimeout=System.getProperty$S("sun.net.client.defaultConnectTimeout");
if (orgtimeout == null ) {
orgtimeout="30";
System.out.println$S("# INFO: Setting default net timeout to " + orgtimeout + " seconds." );
}var remoteVersion=null;
try {
System.setProperty$S$S("sun.net.client.defaultConnectTimeout", "5000");
var url=Clazz.new_([$I$(19).getDefault$S$S("www.jalview.org", "http://www.jalview.org") + "/webstart/jalview.jnlp"],$I$(14,1).c$$S);
var $in=Clazz.new_([Clazz.new_([url.openStream$()],$I$(21,1).c$$java_io_InputStream)],$I$(20,1).c$$java_io_Reader);
var line=null;
while ((line=$in.readLine$()) != null ){
if (line.indexOf$S("jalview.version") == -1) {
continue;
}line=line.substring$I(line.indexOf$S("value=") + 7);
line=line.substring$I$I(0, line.lastIndexOf$S("\""));
remoteVersion=line;
break;
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Non-fatal exception when checking version at www.jalview.org :");
System.out.println$O(ex);
remoteVersion=$I$(19).getProperty$S("VERSION");
} else {
throw ex;
}
}
System.setProperty$S$S("sun.net.client.defaultConnectTimeout", orgtimeout);
$I$(19).setProperty$S$S("LATEST_VERSION", remoteVersion);
});
})()
), Clazz.new_($I$(22,1),[this, null],P$.Cache$2)).start$();
} else {
if (jnlpVersion != null ) {
C$.setProperty$S$S("LATEST_VERSION", jnlpVersion);
} else {
C$.applicationProperties.remove$O("LATEST_VERSION");
}}C$.initUserColourSchemes$S(C$.getProperty$S("USER_DEFINED_COLOURS"));
$I$(23).useModellerOutput=C$.getDefault$S$Z("PIR_MODELLER", false);
}, 1);

Clazz.newMeth(C$, 'resolveResourceURLFor$S', function (resourcePath) {
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

Clazz.newMeth(C$, 'loadBuildProperties$Z', function (reportVersion) {
var codeInstallation=C$.getProperty$S("INSTALLATION");
var printVersion=codeInstallation == null ;
try {
var buildDetails=C$.resolveResourceURLFor$S("/.build_properties");
var localJarFileURL=Clazz.new_($I$(14,1).c$$S,[buildDetails]);
var $in=localJarFileURL.openStream$();
C$.applicationProperties.load$java_io_InputStream($in);
$in.close$();
} catch (ex) {
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
Clazz.new_($I$(24,1).c$$S$S$S,[codeVersion, null, codeInstallation]);
if (printVersion && reportVersion ) {
System.out.println$S("Jalview Version: " + codeVersion + codeInstallation );
}}, 1);

Clazz.newMeth(C$, 'deleteBuildProperties$', function () {
C$.applicationProperties.remove$O("LATEST_VERSION");
C$.applicationProperties.remove$O("VERSION");
C$.applicationProperties.remove$O("AUTHORS");
C$.applicationProperties.remove$O("AUTHORFNAMES");
C$.applicationProperties.remove$O("YEAR");
C$.applicationProperties.remove$O("BUILD_DATE");
C$.applicationProperties.remove$O("INSTALLATION");
}, 1);

Clazz.newMeth(C$, 'getProperty$S', function (key) {
var prop=C$.applicationProperties.getProperty$S(key);
if (prop == null  && $I$(9).isJS$() ) {
prop=C$.applicationProperties.getProperty$S($I$(9).getUniqueAppletID$() + "_" + "jalview_" + key );
}return prop;
}, 1);

Clazz.newMeth(C$, 'getDefault$S$Z', function (property, def) {
var string=C$.getProperty$S(property);
if (string != null ) {
def=$I$(25).valueOf$S(string).booleanValue$();
}return def;
}, 1);

Clazz.newMeth(C$, 'getDefault$S$I', function (property, def) {
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

Clazz.newMeth(C$, 'getDefault$S$S', function (property, def) {
var value=C$.getProperty$S(property);
return value == null  ? def : value;
}, 1);

Clazz.newMeth(C$, 'setProperty$S$S', function (key, obj) {
var oldValue=null;
try {
oldValue=C$.applicationProperties.setProperty$S$S(key, obj);
if (C$.propertiesFile != null  && !C$.propsAreReadOnly ) {
var out=Clazz.new_($I$(26,1).c$$S,[C$.propertiesFile]);
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

Clazz.newMeth(C$, 'removeProperty$S', function (string) {
C$.applicationProperties.remove$O(string);
C$.saveProperties$();
}, 1);

Clazz.newMeth(C$, 'saveProperties$', function () {
if (!C$.propsAreReadOnly) {
try {
var out=Clazz.new_($I$(26,1).c$$S,[C$.propertiesFile]);
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

Clazz.newMeth(C$, 'vamsasJarsPresent$', function () {
if (C$.vamsasJarsArePresent == -1) {
try {
if (Clazz.getClass($I$(27)).getClassLoader$().loadClass$S("uk.ac.vamsas.client.VorbaId") != null ) {
C$.log.debug$O("Found Vamsas Classes (uk.ac..vamsas.client.VorbaId can be loaded)");
C$.vamsasJarsArePresent=1;
var lvclient=$I$(12).getLogger$S("uk.ac.vamsas");
lvclient.setLevel$jalview_javascript_log4j_Level($I$(13,"toLevel$S",[C$.getDefault$S$S("logs.Vamsas.Level", $I$(13).$INFO.toString())]));
lvclient.addAppender$jalview_javascript_log4j_Appender(C$.log.getAppender$S("JalviewLogger"));
lvclient.debug$O("Jalview Vamsas Client Debugging Output Follows.");
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.vamsasJarsArePresent=0;
C$.log.debug$O("Vamsas Classes are not present");
} else {
throw e;
}
}
}return (C$.vamsasJarsArePresent > 0);
}, 1);

Clazz.newMeth(C$, 'groovyJarsPresent$', function () {
if (C$.groovyJarsArePresent == -1) {
try {
if (Clazz.getClass(C$).getClassLoader$().loadClass$S("groovy.lang.GroovyObject") != null ) {
C$.log.debug$O("Found Groovy (groovy.lang.GroovyObject can be loaded)");
C$.groovyJarsArePresent=1;
var lgclient=$I$(12).getLogger$S("groovy");
lgclient.setLevel$jalview_javascript_log4j_Level($I$(13,"toLevel$S",[C$.getDefault$S$S("logs.Groovy.Level", $I$(13).$INFO.toString())]));
lgclient.addAppender$jalview_javascript_log4j_Appender(C$.log.getAppender$S("JalviewLogger"));
lgclient.debug$O("Jalview Groovy Client Debugging Output Follows.");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
C$.groovyJarsArePresent=0;
C$.log.debug$O$Throwable("Groovy Classes are not present", e);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
C$.groovyJarsArePresent=0;
C$.log.debug$O("Groovy Classes are not present");
}
} else {
throw e$$;
}
}
}return (C$.groovyJarsArePresent > 0);
}, 1);

Clazz.newMeth(C$, 'initGoogleTracker$', function () {
if (C$.tracker == null ) {
if (C$.jgoogleanalyticstracker == null ) {
try {
C$.jgoogleanalyticstracker=Clazz.getClass(C$).getClassLoader$().loadClass$S("com.boxysystems.jgoogleanalytics.JGoogleAnalyticsTracker");
C$.trackerfocus=Clazz.getClass(C$).getClassLoader$().loadClass$S("com.boxysystems.jgoogleanalytics.FocusPoint");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.log.debug$O("com.boxysystems.jgoogleanalytics package is not present - tracking not enabled.");
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
C$.tracker=C$.jgoogleanalyticstracker.getConstructor$ClassA(Clazz.array(Class, -1, [Clazz.getClass(String), Clazz.getClass(String), Clazz.getClass(String)])).newInstance$OA(Clazz.array(java.lang.Object, -1, ["Jalview Desktop", (vrs=C$.getProperty$S("VERSION") + "_" + C$.getDefault$S$S("BUILD_DATE", "unknown") ), "UA-9060947-1"]));
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
if (C$.log != null ) {
if (re != null ) {
C$.log.debug$O$Throwable("Caught runtime exception in googletracker init:", re);
}if (ex != null ) {
C$.log.warn$O$Throwable("Failed to initialise GoogleTracker for Jalview Desktop with version " + vrs, ex);
}if (err != null ) {
C$.log.error$O$Throwable("Whilst initing GoogleTracker for Jalview Desktop version " + vrs, err);
}} else {
if (re != null ) {
System.err.println$S("Debug: Caught runtime exception in googletracker init:" + vrs);
re.printStackTrace$();
}if (ex != null ) {
System.err.println$S("Warning:  Failed to initialise GoogleTracker for Jalview Desktop with version " + vrs);
ex.printStackTrace$();
}if (err != null ) {
System.err.println$S("ERROR: Whilst initing GoogleTracker for Jalview Desktop version " + vrs);
err.printStackTrace$();
}}} else {
C$.log.debug$O("Successfully initialised tracker.");
}}}, 1);

Clazz.newMeth(C$, 'getDefaultColour$S$java_awt_Color', function (property, defcolour) {
var colprop=C$.getProperty$S(property);
if (colprop == null ) {
return defcolour;
}var col=$I$(28).parseColourString$S(colprop);
if (col == null ) {
C$.log.warn$O("Couldn't parse '" + colprop + "' as a colour for " + property );
}return (col == null ) ? defcolour : col;
}, 1);

Clazz.newMeth(C$, 'setColourProperty$S$java_awt_Color', function (property, colour) {
C$.setProperty$S$S(property, $I$(29).getHexString$java_awt_Color(colour));
}, 1);

Clazz.newMeth(C$, 'setDateProperty$S$java_util_Date', function (propertyName, date) {
var formatted=C$.date_format.format$java_util_Date(date);
C$.setProperty$S$S(propertyName, formatted);
return formatted;
}, 1);

Clazz.newMeth(C$, 'getDateProperty$S', function (propertyName) {
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

Clazz.newMeth(C$, 'getIntegerProperty$S', function (property) {
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

Clazz.newMeth(C$, 'setOrRemove$S$S', function (propName, value) {
if (propName == null ) {
return;
}if (value == null  || value.trim$().length$() < 1 ) {
C$.applicationProperties.remove$O(propName);
} else {
C$.applicationProperties.setProperty$S$S(propName, value);
}}, 1);

Clazz.newMeth(C$, 'initUserColourSchemes$S', function (files) {
if (files == null  || files.length$() == 0 ) {
return;
}var coloursFound=Clazz.new_($I$(30,1));
var st=Clazz.new_($I$(31,1).c$$S$S,[files, "|"]);
while (st.hasMoreElements$()){
var file=st.nextToken$();
try {
var ucs=$I$(32).loadColourScheme$S(file);
if (ucs != null ) {
if (coloursFound.length$() > 0) {
coloursFound.append$S("|");
}coloursFound.append$S(file);
$I$(33).getInstance$().registerColourScheme$jalview_schemes_ColourSchemeI(ucs);
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

Clazz.newMeth(C$, 'appendIfNotNull$StringBuilder$S$S$S$S', function (sb, prefix, value, suffix, defaultValue) {
if (value == null  && defaultValue == null  ) {
return;
}var line=prefix + (value != null  ? value : defaultValue) + suffix ;
sb.append$S(line);
}, 1);

Clazz.newMeth(C$, 'getVersionDetailsForConsole$', function () {
var sb=Clazz.new_($I$(34,1));
sb.append$S("Jalview Version: " + C$.getDefault$S$S("VERSION", "TEST"));
sb.append$S("\n");
sb.append$S("Jalview Installation: " + C$.getDefault$S$S("INSTALLATION", "unknown"));
sb.append$S("\n");
sb.append$S("Build Date: " + C$.getDefault$S$S("BUILD_DATE", "unknown"));
sb.append$S("\n");
sb.append$S("Java version: " + System.getProperty$S("java.version"));
sb.append$S("\n");
sb.append$S(System.getProperty$S("os.arch") + " " + System.getProperty$S("os.name") + " " + System.getProperty$S("os.version") );
sb.append$S("\n");
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Install4j version: ", System.getProperty$S("sys.install4jVersion"), "\n", null);
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Install4j template version: ", System.getProperty$S("installer_template_version"), "\n", null);
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Launcher version: ", System.getProperty$S("launcher_version"), "\n", null);
if (C$.getDefault$S$S("VERSION", "TEST").equals$O("DEVELOPMENT")) {
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Getdown appdir: ", System.getProperty$S("getdownappdir"), "\n", null);
C$.appendIfNotNull$StringBuilder$S$S$S$S(sb, "Java home: ", System.getProperty$S("java.home"), "\n", "unknown");
}return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getBuildDetailsForSplash$', function () {
return C$.getDefault$S$S("INSTALLATION", "unknown");
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_SIFTS_DOWNLOAD_DIR=System.getProperty$S("user.home") + $I$(1).separatorChar + ".sifts_downloads" + $I$(1).separatorChar ;
C$.ID_ORG_FILE=System.getProperty$S("user.home") + $I$(1).separatorChar + ".identifiers.org.ids.json" ;
C$.PDB_DOWNLOAD_FORMAT=$I$(2).MMCIF.toString();
C$.DEFAULT_PDB_FILE_PARSER=$I$(3).JMOL_PARSER.toString();
C$.date_format=$I$(4,"getDateTimeInstance$I$I$java_util_Locale",[2, 2, $I$(5).UK]);
C$.applicationProperties=((P$.Cache$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cache$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.Properties'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'keys$', function () {
return $I$(6,"enumeration$java_util_Collection",[Clazz.new_([C$.superclazz.prototype.keySet$.apply(this, [])],$I$(7,1).c$$java_util_Collection)]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.Cache$1));
C$.propsAreReadOnly=$I$(9).isJS$();
C$.vamsasJarsArePresent=-1;
C$.groovyJarsArePresent=-1;
C$.tracker=null;
C$.trackerfocus=null;
C$.jgoogleanalyticstracker=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:46 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
