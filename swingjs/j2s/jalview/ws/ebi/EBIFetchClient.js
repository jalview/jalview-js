(function(){var P$=Clazz.newPackage("jalview.ws.ebi"),I$=[[0,'jalview.util.Platform','Error','jalview.util.MessageManager','java.io.File','StringBuilder','java.util.StringTokenizer','java.net.URL','java.io.BufferedReader','java.io.InputStreamReader','java.util.ArrayList','java.util.Locale']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EBIFetchClient");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSupportedDBs$',  function () {
throw Clazz.new_([$I$(3).getString$S("error.not_yet_implemented")],$I$(2,1).c$$S);
});

Clazz.newMeth(C$, 'getSupportedFormats$',  function () {
throw Clazz.new_([$I$(3).getString$S("error.not_yet_implemented")],$I$(2,1).c$$S);
});

Clazz.newMeth(C$, 'getSupportedStyles$',  function () {
throw Clazz.new_([$I$(3).getString$S("error.not_yet_implemented")],$I$(2,1).c$$S);
});

Clazz.newMeth(C$, 'fetchDataAsFile$S$S$S',  function (ids, format, ext) {
var outFile=null;
try {
outFile=$I$(4).createTempFile$S$S("jalview", "." + ext);
outFile.deleteOnExit$();
this.fetchData$S$S$java_io_File(ids, format, outFile);
if (Long.$eq(outFile.length$(),0 )) {
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

Clazz.newMeth(C$, 'fetchData$S$S$java_io_File',  function (ids, format, outFile) {
var querystring=Clazz.new_([ids.length$()],$I$(5,1).c$$I);
var database=C$.parseIds$S$StringBuilder(ids, querystring);
if (database == null ) {
System.err.println$S("Invalid Query string : '" + ids + "'" );
System.err.println$S("Should be of form \'dbname:q1;q2;q3;q4\'");
return null;
}var rslt=this.fetchBatch$S$S$S$java_io_File(querystring.toString(), database, format, outFile);
return (rslt != null  && rslt.length > 0  ? rslt : null);
});

Clazz.newMeth(C$, 'parseIds$S$StringBuilder',  function (ids, queryString) {
var database=null;
var queries=Clazz.new_($I$(6,1).c$$S$S,[ids, ";"]);
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

Clazz.newMeth(C$, 'fetchBatch$S$S$S$java_io_File',  function (ids, database, format, outFile) {
var url=C$.buildUrl$S$S$S(ids, database, format);
var is=null;
var br=null;
try {
var rcall=Clazz.new_($I$(7,1).c$$S,[url]);
var conn=rcall.openConnection$();
var responseCode=conn.getResponseCode$();
if (responseCode == 200) {
is=conn.getInputStream$();
if (outFile != null ) {
$I$(1).streamToFile$java_io_InputStream$java_io_File(is, outFile);
return null;
}br=Clazz.new_([Clazz.new_($I$(9,1).c$$java_io_InputStream,[is])],$I$(8,1).c$$java_io_Reader);
var rtn;
var arl=Clazz.new_($I$(10,1));
while ((rtn=br.readLine$()) != null ){
arl.add$O(rtn);
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
}if (br != null ) {
try {
br.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
return null;
});

Clazz.newMeth(C$, 'buildUrl$S$S$S',  function (ids, database, format) {
var url;
if (database.equalsIgnoreCase$S("EMBL") || database.equalsIgnoreCase$S("EMBLCDS") ) {
url="https://www.ebi.ac.uk/ena/browser/api/embl/" + ids.toLowerCase$java_util_Locale($I$(11).ROOT) + "?download=true&gzip=true" ;
} else {
url="https://www.ebi.ac.uk/Tools/dbfetch/dbfetch/" + database.toLowerCase$java_util_Locale($I$(11).ROOT) + "/" + ids.toLowerCase$java_util_Locale($I$(11).ROOT) + (format != null  ? "/" + format : "") ;
}return url;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
$I$(1).addJ2SDirectDatabaseCall$S("https://www.ebi.ac.uk/");
};
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
