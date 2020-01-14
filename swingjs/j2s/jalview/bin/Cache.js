(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'java.io.File',['jalview.datamodel.PDBEntry','.Type'],['jalview.structure.StructureImportSettings','.StructureParser'],'java.text.DateFormat','java.util.Locale','java.util.Collections','java.util.TreeSet','java.util.Properties','jalview.util.Platform','jalview.javascript.log4j.ConsoleAppender','jalview.javascript.log4j.SimpleLayout','jalview.javascript.log4j.Logger','jalview.javascript.log4j.Level','java.net.URL','java.io.FileInputStream','jalview.bin.BuildDetails','jalview.ws.sifts.SiftsSettings','jalview.urls.IdOrgSettings','jalview.structure.StructureImportSettings','jalview.bin.Cache','java.io.BufferedReader','java.io.InputStreamReader','Thread','jalview.io.PIRFile','Boolean','java.io.FileOutputStream','jalview.jbgui.GDesktop','jalview.util.ColorUtils','jalview.util.Format','StringBuffer','java.util.StringTokenizer','jalview.schemes.ColourSchemeLoader','jalview.schemes.ColourSchemes']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Cache");
C$.DEFAULT_SIFTS_DOWNLOAD_DIR=null;
C$.ID_ORG_FILE=null;
C$.PDB_DOWNLOAD_FORMAT=null;
C$.DEFAULT_PDB_FILE_PARSER=null;
C$.date_format=null;
C$.log=null;
C$.applicationProperties=null;
C$.propertiesFile=null;
C$.propsAreReadOnly=false;
C$.vamsasJarsArePresent=0;
C$.groovyJarsArePresent=0;
C$.tracker=null;
C$.trackerfocus=null;
C$.jgoogleanalyticstracker=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DEFAULT_SIFTS_DOWNLOAD_DIR=System.getProperty$S("user.home") + $I$(1).separatorChar + ".sifts_downloads" + $I$(1).separatorChar ;
C$.ID_ORG_FILE=System.getProperty$S("user.home") + $I$(1).separatorChar + ".identifiers.org.ids.json" ;
C$.PDB_DOWNLOAD_FORMAT=$I$(2).MMCIF.toString();
C$.DEFAULT_PDB_FILE_PARSER=$I$(3).JMOL_PARSER.toString();
C$.date_format=$I$(4).getDateTimeInstance$I$I$java_util_Locale(2, 2, $I$(5).UK);
C$.applicationProperties=((P$.Cache$1||
(function(){var C$=Clazz.newClass(P$, "Cache$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.Properties'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keys$', function () {
return $I$(6).enumeration$java_util_Collection(Clazz.new_($I$(7).c$$java_util_Collection,[C$.superclazz.prototype.keySet$.apply(this, [])]));
});
})()
), Clazz.new_($I$(8), [this, null],P$.Cache$1));
C$.propsAreReadOnly=$I$(9).isJS$();
C$.vamsasJarsArePresent=-1;
C$.groovyJarsArePresent=-1;
C$.tracker=null;
C$.trackerfocus=null;
C$.jgoogleanalyticstracker=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initLogger$', function () {
if (C$.log != null ) {
return;
}try {
var ap=Clazz.new_($I$(10).c$$jalview_javascript_log4j_Layout$S,[Clazz.new_($I$(11)), "System.err"]);
ap.setName$S("JalviewLogger");
$I$(12).getRootLogger$().addAppender$jalview_javascript_log4j_Appender(ap);
var laxis=$I$(12).getLogger$S("org.apache.axis");
var lcastor=$I$(12).getLogger$S("org.exolab.castor");
C$.log=$I$(12).getLogger$S("jalview.bin.Jalview");
laxis.setLevel$jalview_javascript_log4j_Level($I$(13).toLevel$S(C$.getDefault$S$S("logs.Axis.Level", $I$(13).$INFO.toString())));
lcastor.setLevel$jalview_javascript_log4j_Level($I$(13).toLevel$S(C$.getDefault$S$S("logs.Castor.Level", $I$(13).$INFO.toString())));
lcastor=$I$(12).getLogger$S("org.exolab.castor.xml");
lcastor.setLevel$jalview_javascript_log4j_Level($I$(13).toLevel$S(C$.getDefault$S$S("logs.Castor.Level", $I$(13).$INFO.toString())));
C$.log.setLevel$jalview_javascript_log4j_Level($I$(13).toLevel$S(C$.getDefault$S$S("logs.Jalview.level", $I$(13).$INFO.toString())));
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
fis=Clazz.new_($I$(14).c$$S,[C$.propertiesFile]).openStream$();
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
fis=Clazz.new_($I$(15).c$$S,[C$.propertiesFile]);
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
}var authorDetails=C$.resolveResourceURLFor$S("authors.props");
try {
if (authorDetails != null ) {
var localJarFileURL=Clazz.new_($I$(14).c$$S,[authorDetails]);
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
}var buildDetails=C$.resolveResourceURLFor$S("/.build_properties");
if (buildDetails != null ) {
try {
var localJarFileURL=Clazz.new_($I$(14).c$$S,[buildDetails]);
var $in=localJarFileURL.openStream$();
C$.applicationProperties.load$java_io_InputStream($in);
$in.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Error reading build details: " + ex);
buildDetails=null;
} else {
throw ex;
}
}
}if (buildDetails == null ) {
C$.applicationProperties.remove$O("VERSION");
}var jnlpVersion=System.getProperty$S("jalview.version");
var codeVersion=C$.getProperty$S("VERSION");
var codeInstallation=C$.getProperty$S("INSTALLATION");
if (codeVersion == null ) {
codeVersion="Test";
jnlpVersion="Test";
codeInstallation="";
} else {
codeInstallation=" (" + codeInstallation + ")" ;
}Clazz.new_($I$(16).c$$S$S$S,[codeVersion, null, codeInstallation]);
$I$(17).setMapWithSifts$Z(C$.getDefault$S$Z("MAP_WITH_SIFTS", false));
$I$(17).setSiftDownloadDirectory$S(C$.getDefault$S$S("sifts_download_dir", C$.DEFAULT_SIFTS_DOWNLOAD_DIR));
$I$(17).setFailSafePIDThreshold$S(C$.getDefault$S$S("sifts_fail_safe_pid_threshold", "30"));
$I$(17).setCacheThresholdInDays$S(C$.getDefault$S$S("sifts_cache_threshold_in_days", "2"));
$I$(18).setUrl$S(C$.getDefault$S$S("ID_ORG_HOSTURL", "http://www.jalview.org/services/identifiers"));
$I$(18).setDownloadLocation$S(C$.ID_ORG_FILE);
System.out.println$S("Jalview Version: " + codeVersion + codeInstallation );
$I$(19).setDefaultStructureFileFormat$S(C$.getDefault$S$S("PDB_DOWNLOAD_FORMAT", C$.PDB_DOWNLOAD_FORMAT));
$I$(19).setDefaultPDBFileParser$S(C$.DEFAULT_PDB_FILE_PARSER);
if (jnlpVersion == null  && C$.getDefault$S$Z("VERSION_CHECK", true)  && (System.getProperty$S("java.awt.headless") == null  || System.getProperty$S("java.awt.headless").equals$O("false") ) ) {
var vc=Clazz.new_($I$(23), [this, null],P$.Cache$1VersionChecker);
vc.start$();
} else {
if (jnlpVersion != null ) {
C$.setProperty$S$S("LATEST_VERSION", jnlpVersion);
} else {
C$.applicationProperties.remove$O("LATEST_VERSION");
}}C$.setProperty$S$S("VERSION", codeVersion);
C$.initUserColourSchemes$S(C$.getProperty$S("USER_DEFINED_COLOURS"));
$I$(24).useModellerOutput=C$.getDefault$S$Z("PIR_MODELLER", false);
}, 1);

Clazz.newMeth(C$, 'resolveResourceURLFor$S', function (resourcePath) {
var url=null;
if ($I$(9).isJS$() || !Clazz.getClass(C$).getProtectionDomain$().getCodeSource$().getLocation$().toString().endsWith$S(".jar") ) {
try {
url=Clazz.getClass(C$).getResource$S(resourcePath).toString();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
} else {
url="jar:".concat$S(Clazz.getClass(C$).getProtectionDomain$().getCodeSource$().getLocation$().toString().concat$S("!" + resourcePath));
}return url;
}, 1);

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
if (!C$.propsAreReadOnly) {
var out=Clazz.new_($I$(26).c$$S,[C$.propertiesFile]);
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
var out=Clazz.new_($I$(26).c$$S,[C$.propertiesFile]);
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
lvclient.setLevel$jalview_javascript_log4j_Level($I$(13).toLevel$S(C$.getDefault$S$S("logs.Vamsas.Level", $I$(13).$INFO.toString())));
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
lgclient.setLevel$jalview_javascript_log4j_Level($I$(13).toLevel$S(C$.getDefault$S$S("logs.Groovy.Level", $I$(13).$INFO.toString())));
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
}var coloursFound=Clazz.new_($I$(30));
var st=Clazz.new_($I$(31).c$$S$S,[files, "|"]);
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
;
(function(){var C$=Clazz.newClass(P$, "Cache$1VersionChecker", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread', null, 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var orgtimeout=System.getProperty$S("sun.net.client.defaultConnectTimeout");
if (orgtimeout == null ) {
orgtimeout="30";
System.out.println$S("# INFO: Setting default net timeout to " + orgtimeout + " seconds." );
}var remoteVersion=null;
try {
System.setProperty$S$S("sun.net.client.defaultConnectTimeout", "5000");
var url=Clazz.new_($I$(14).c$$S,[$I$(20).getDefault$S$S("www.jalview.org", "http://www.jalview.org") + "/webstart/jalview.jnlp"]);
var $in=Clazz.new_($I$(21).c$$java_io_Reader,[Clazz.new_($I$(22).c$$java_io_InputStream,[url.openStream$()])]);
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
remoteVersion=P$.Cache.getProperty$S("VERSION");
} else {
throw ex;
}
}
System.setProperty$S$S("sun.net.client.defaultConnectTimeout", orgtimeout);
P$.Cache.setProperty$S$S("LATEST_VERSION", remoteVersion);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
