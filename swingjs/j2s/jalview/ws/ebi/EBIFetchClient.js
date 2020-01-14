(function(){var P$=Clazz.newPackage("jalview.ws.ebi"),I$=[[0,'Error','jalview.util.MessageManager','java.io.File','StringBuilder','java.util.StringTokenizer','java.net.URL','jalview.util.Platform','java.io.BufferedReader','java.io.InputStreamReader','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EBIFetchClient");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSupportedDBs$', function () {
throw Clazz.new_($I$(1).c$$S,[$I$(2).getString$S("error.not_yet_implemented")]);
});

Clazz.newMeth(C$, 'getSupportedFormats$', function () {
throw Clazz.new_($I$(1).c$$S,[$I$(2).getString$S("error.not_yet_implemented")]);
});

Clazz.newMeth(C$, 'getSupportedStyles$', function () {
throw Clazz.new_($I$(1).c$$S,[$I$(2).getString$S("error.not_yet_implemented")]);
});

Clazz.newMeth(C$, 'fetchDataAsFile$S$S$S', function (ids, format, ext) {
var outFile=null;
try {
outFile=$I$(3).createTempFile$S$S("jalview", "." + ext);
outFile.deleteOnExit$();
this.fetchData$S$S$java_io_File(ids, format, outFile);
if (outFile.length$() == 0) {
outFile.delete$();
return null;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
return outFile;
});

Clazz.newMeth(C$, 'fetchData$S$S$java_io_File', function (ids, format, outFile) {
var querystring=Clazz.new_($I$(4).c$$I,[ids.length$()]);
var database=C$.parseIds$S$StringBuilder(ids, querystring);
if (database == null ) {
System.err.println$S("Invalid Query string : '" + ids + "'" );
System.err.println$S("Should be of form \'dbname:q1;q2;q3;q4\'");
return null;
}var rslt=this.fetchBatch$S$S$S$java_io_File(querystring.toString(), database, format, outFile);
return (rslt != null  && rslt.length > 0  ? rslt : null);
});

Clazz.newMeth(C$, 'parseIds$S$StringBuilder', function (ids, queryString) {
var database=null;
var queries=Clazz.new_($I$(5).c$$S$S,[ids, ";"]);
var appending=queryString.length$() > 0;
while (queries.hasMoreTokens$()){
var query=queries.nextToken$();
var p=query.indexOf$I(":");
if (p > -1) {
var db=query.substring$I$I(0, p);
if (database != null  && !db.equalsIgnoreCase$S(database) ) {
return null;
}database=db;
query=query.substring$I(p + 1);
}queryString.append$S(appending ? "," : "");
queryString.append$S(query);
appending=true;
}
return database;
}, 1);

Clazz.newMeth(C$, 'fetchBatch$S$S$S$java_io_File', function (ids, database, format, outFile) {
var url=C$.buildUrl$S$S$S(ids, database, format);
var is=null;
try {
var rcall=Clazz.new_($I$(6).c$$S,[url]);
var conn=rcall.openConnection$();
var responseCode=conn.getResponseCode$();
if (responseCode == 200) {
is=conn.getInputStream$();
if (outFile != null ) {
$I$(7).streamToFile$java_io_InputStream$java_io_File(is, outFile);
return null;
}var br=Clazz.new_($I$(8).c$$java_io_Reader,[Clazz.new_($I$(9).c$$java_io_InputStream,[is])]);
var rtn;
var arl=Clazz.new_($I$(10));
while ((rtn=br.readLine$()) != null ){
arl.add$TE(rtn);
}
return arl.toArray$();
}System.err.println$S("Warning: response code " + responseCode + " for " + url );
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var er = e$$;
{
System.out.println$S("OUT OF MEMORY DOWNLOADING QUERY FROM " + database + ":\n" + ids );
throw er;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
if (!ex.getMessage$().startsWith$S("uk.ac.ebi.jdbfetch.exceptions.DbfNoEntryFoundException")) {
System.err.println$S("Unexpected exception when retrieving from " + database + "\nQuery was : '" + ids + "'" );
ex.printStackTrace$java_io_PrintStream(System.err);
}}
} else {
throw e$$;
}
} finally {
if (is != null ) {
try {
is.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
return null;
});

Clazz.newMeth(C$, 'buildUrl$S$S$S', function (ids, database, format) {
var url;
if (database.equalsIgnoreCase$S("EMBL") || database.equalsIgnoreCase$S("EMBLCDS") ) {
url="https://www.ebi.ac.uk/ena/data/view/" + ids.toLowerCase$() + (format != null  ? "&" + format : "") ;
} else {
url="https://www.ebi.ac.uk/Tools/dbfetch/dbfetch/" + database.toLowerCase$() + "/" + ids.toLowerCase$() + (format != null  ? "/" + format : "") ;
}return url;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
