(function(){var P$=Clazz.newPackage("jalview.ext.pymol"),p$1={},I$=[[0,'java.util.ArrayList','jalview.bin.Cache','java.net.URL','java.io.PrintWriter','jalview.bin.Console','java.io.BufferedReader','java.io.InputStreamReader','StringBuilder','java.nio.file.Paths','java.nio.file.LinkOption','java.io.File','jalview.util.Platform','java.util.Locale','ProcessBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PymolManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pymolXmlRpcPort'],'O',['pymolProcess','Process']]]

Clazz.newMeth(C$, 'getPymolPaths$',  function () {
return C$.getPymolPaths$S(System.getProperty$S("os.name"));
}, 1);

Clazz.newMeth(C$, 'getPymolPaths$S',  function (os) {
var pathList=Clazz.new_($I$(1,1));
var userPath=$I$(2).getDefault$S$S("PYMOL_PATH", null);
if (userPath != null ) {
pathList.add$O(userPath);
}var pymol="PyMOL";
if (os.startsWith$S("Linux")) {
pathList.add$O("/usr/local/pymol/bin/" + pymol);
pathList.add$O("/usr/local/bin/" + pymol);
pathList.add$O("/usr/bin/" + pymol);
pathList.add$O(System.getProperty$S("user.home") + "/opt/bin/" + pymol );
} else if (os.startsWith$S("Windows")) {
for (var root, $root = 0, $$root = Clazz.array(String, -1, [String.format$S$OA("%s\\AppData\\Local", Clazz.array(java.lang.Object, -1, [System.getProperty$S("user.home")])), "\\ProgramData", "C:\\ProgramData", System.getProperty$S("user.home"), "\\Program Files", "C:\\Program Files", "\\Program Files (x86)", "C:\\Program Files (x86)"]); $root<$$root.length&&((root=($$root[$root])),1);$root++) {
for (var path, $path = 0, $$path = Clazz.array(String, -1, ["Schrodinger\\PyMOL2", "PyMOL"]); $path<$$path.length&&((path=($$path[$path])),1);$path++) {
for (var binary, $binary = 0, $$binary = Clazz.array(String, -1, ["PyMOLWinWithConsole.bat", "Scripts\\pymol.exe", "PyMOLWin.exe"]); $binary<$$binary.length&&((binary=($$binary[$binary])),1);$binary++) {
pathList.add$O(String.format$S$OA("%s\\%s\\%s", Clazz.array(java.lang.Object, -1, [root, path, binary])));
}
}
}
} else if (os.startsWith$S("Mac")) {
pathList.add$O("/Applications/PyMOL.app/Contents/MacOS/" + pymol);
}return pathList;
}, 1);

Clazz.newMeth(C$, 'isPymolLaunched$',  function () {
var launched=false;
if (this.pymolProcess != null ) {
try {
this.pymolProcess.exitValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalThreadStateException")){
launched=true;
} else {
throw e;
}
}
}return launched;
});

Clazz.newMeth(C$, 'sendCommand$jalview_structure_StructureCommandI$Z',  function (command, getReply) {
var postBody=C$.getPostRequest$jalview_structure_StructureCommandI(command);
var rpcUrl="http://127.0.0.1:" + this.pymolXmlRpcPort;
var out=null;
var $in=null;
var result=getReply ? Clazz.new_($I$(1,1)) : null;
try {
var realUrl=Clazz.new_($I$(3,1).c$$S,[rpcUrl]);
var conn=realUrl.openConnection$();
conn.setRequestProperty$S$S("accept", "*/*");
conn.setRequestProperty$S$S("content-type", "text/xml");
conn.setDoOutput$Z(true);
conn.setDoInput$Z(true);
out=Clazz.new_([conn.getOutputStream$()],$I$(4,1).c$$java_io_OutputStream);
out.print$S(postBody);
out.flush$();
var rc=conn.getResponseCode$();
if (rc != 200) {
$I$(5,"error$S",[String.format$S$OA("Error status from %s: %d", Clazz.array(java.lang.Object, -1, [rpcUrl, Integer.valueOf$I(rc)]))]);
return result;
}var inputStream=conn.getInputStream$();
if (getReply) {
$in=Clazz.new_([Clazz.new_($I$(7,1).c$$java_io_InputStream,[inputStream])],$I$(6,1).c$$java_io_Reader);
var line;
while ((line=$in.readLine$()) != null ){
result.add$O(line);
}
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.SocketException")){
var e = e$$;
{
$I$(5,"warn$S",[String.format$S$OA("Request to %s returned %s", Clazz.array(java.lang.Object, -1, [rpcUrl, e.toString()]))]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
} finally {
if (out != null ) {
out.close$();
}if ($I$(5).isTraceEnabled$()) {
$I$(5,"trace$S",["Sent: " + command.toString()]);
if (result != null ) {
$I$(5).trace$S("Received: " + result);
}}}
return result;
});

Clazz.newMeth(C$, 'getPostRequest$jalview_structure_StructureCommandI',  function (command) {
var sb=Clazz.new_($I$(8,1).c$$I,[64]);
sb.append$S("<methodCall><methodName>").append$S(command.getCommand$()).append$S("</methodName><params>");
if (command.hasParameters$()) {
for (var p, $p = command.getParameters$().iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
sb.append$S("<parameter><value>").append$S(p).append$S("</value></parameter>");
}
}sb.append$S("</params></methodCall>");
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'launchPymol$',  function () {
if (this.isPymolLaunched$()) {
return this.pymolProcess;
}var error="Error message: ";
for (var pymolPath, $pymolPath = C$.getPymolPaths$().iterator$(); $pymolPath.hasNext$()&&((pymolPath=($pymolPath.next$())),1);) {
try {
pymolPath=$I$(9,"get$S$SA",[pymolPath, Clazz.array(String, -1, [])]).toRealPath$java_nio_file_LinkOptionA(Clazz.array($I$(10), -1, [])).toString();
var path=Clazz.new_($I$(11,1).c$$S,[pymolPath]);
if (!path.canExecute$()) {
error+="File '" + path + "' does not exist.\n" ;
continue;
}var args=Clazz.new_($I$(1,1));
args.add$O(pymolPath);
if ($I$(12).isWin$() && pymolPath.toLowerCase$java_util_Locale($I$(13).ROOT).endsWith$S("\\pymolwin.exe") ) {
args.add$O("+2");
}args.add$O("-R");
var pb=Clazz.new_($I$(14,1).c$$java_util_List,[args]);
$I$(5,"debug$S",["Running PyMOL as " + String.join$CharSequence$Iterable(" ", pb.command$())]);
this.pymolProcess=pb.start$();
error="";
break;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
error+=e.getMessage$();
} else {
throw e;
}
}
}
if (this.pymolProcess != null ) {
this.pymolXmlRpcPort=p$1.getPortNumber.apply(this, []);
if (this.pymolXmlRpcPort > 0) {
$I$(5).info$S("PyMOL XMLRPC started on port " + this.pymolXmlRpcPort);
} else {
error+="Failed to read PyMOL XMLRPC port number";
$I$(5).error$S(error);
this.pymolProcess.destroy$();
this.pymolProcess=null;
}}return this.pymolProcess;
});

Clazz.newMeth(C$, 'getPortNumber',  function () {
var port=0;
var readChan=this.pymolProcess.getInputStream$();
var lineReader=Clazz.new_([Clazz.new_($I$(7,1).c$$java_io_InputStream,[readChan])],$I$(6,1).c$$java_io_Reader);
var responses=Clazz.new_($I$(8,1));
try {
var response=lineReader.readLine$();
while (response != null ){
responses.append$S("\n" + response);
if (response.contains$CharSequence("xml-rpc")) {
var tokens=response.split$S(" ");
for (var i=0; i < tokens.length - 1; i++) {
if ("port".equals$O(tokens[i])) {
port=Integer.parseInt$S(tokens[i + 1]);
break;
}}
}if (port > 0) {
break;
}response=lineReader.readLine$();
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5,"error$S",["Failed to get REST port number from " + responses + ": " + e.getMessage$() ]);
} else {
throw e;
}
} finally {
try {
lineReader.close$();
} catch (e2) {
if (Clazz.exceptionOf(e2,"java.io.IOException")){
} else {
throw e2;
}
}
}
if (port == 0) {
$I$(5).error$S("Failed to start PyMOL with XMLRPC, response was: " + responses);
}$I$(5).info$S("PyMOL started with XMLRPC on port " + port);
return port;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
