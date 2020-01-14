(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'java.io.File','java.io.BufferedInputStream','java.io.FileInputStream','org.jmol.viewer.Viewer','java.io.OutputStreamWriter','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AwtFile", null, 'java.io.File', 'org.jmol.api.GenericFileInterface');
C$.urlPrefixPairs=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.urlPrefixPairs=Clazz.array(String, -1, ["http:", "http://", "www.", "http://www.", "https:", "https://", "ftp:", "ftp://", "file:", "file:///"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getParentAsFile$', function () {
var f=null;
try {
var file=this.getParentFile$();
f=Clazz.new_(C$.c$$S,[file.getAbsolutePath$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.AccessControlException")){
} else {
throw e;
}
}
return f;
});

Clazz.newMeth(C$, 'getBufferedFileInputStream$S', function (name) {
var file=Clazz.new_($I$(1).c$$S,[name]);
try {
return Clazz.new_($I$(2).c$$java_io_InputStream,[Clazz.new_($I$(3).c$$java_io_File,[file])]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return e.toString();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getURLContents$java_net_URL$BA$S', function (url, outputBytes, post) {
var conn=null;
try {
conn=url.openConnection$();
var type=null;
if (outputBytes != null ) {
type="application/octet-stream;";
} else if (post != null ) {
type="application/x-www-form-urlencoded";
}conn.setRequestProperty$S$S("User-Agent", $I$(4).getJmolVersion$());
if (type != null ) {
conn.setRequestProperty$S$S("Content-Type", type);
conn.setDoOutput$Z(true);
if (outputBytes == null ) {
var wr=Clazz.new_($I$(5).c$$java_io_OutputStream,[conn.getOutputStream$()]);
wr.write$S(post);
wr.flush$();
} else {
conn.getOutputStream$().write$BA(outputBytes);
conn.getOutputStream$().flush$();
}}return Clazz.new_($I$(2).c$$java_io_InputStream,[conn.getInputStream$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return e.toString();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getFullPath$', function () {
try {
return this.getAbsolutePath$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getLocalUrl$org_jmol_api_GenericFileInterface', function (file) {
if (file.getName$().startsWith$S("=")) return file.getName$();
var path=file.getFullPath$();
if (path == null ) return null;
path=path.replace$C$C("\\", "/");
for (var i=0; i < C$.urlPrefixPairs.length; i++) if (path.indexOf$S(C$.urlPrefixPairs[i]) == 0) return null;

for (var i=0; i < C$.urlPrefixPairs.length; i+=2) if (path.indexOf$S(C$.urlPrefixPairs[i]) > 0) return C$.urlPrefixPairs[i + 1] + $I$(6).trim$S$S(path.substring$I(path.indexOf$S(C$.urlPrefixPairs[i]) + C$.urlPrefixPairs[i].length$()), "/");

return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
