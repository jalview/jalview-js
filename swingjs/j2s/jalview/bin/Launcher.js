(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'java.io.File','java.util.ArrayList','java.lang.management.ManagementFactory','jalview.bin.MemorySetting','ProcessBuilder','Boolean']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Launcher");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var javaBin=System.getProperty$S("java.home") + $I$(1).separator + "bin" + $I$(1).separator + "java" ;
var command=Clazz.new_($I$(2,1));
command.add$O(javaBin);
var memSetting=null;
var isAMac=System.getProperty$S("os.name").indexOf$S("Mac") > -1;
for (var jvmArg, $jvmArg = $I$(3).getRuntimeMXBean$().getInputArguments$().iterator$(); $jvmArg.hasNext$()&&((jvmArg=($jvmArg.next$())),1);) {
command.add$O(jvmArg);
}
command.add$O("-cp");
command.add$O($I$(3).getRuntimeMXBean$().getClassPath$());
var jvmmempc=null;
var jvmmemmax=null;
var $arguments=Clazz.new_($I$(2,1));
for (var arg, $arg = 0, $$arg = args; $arg<$$arg.length&&((arg=($$arg[$arg])),1);$arg++) {
if (arg.startsWith$S("-jvmmempc=")) {
jvmmempc=arg.substring$I("jvmmempc".length$() + 2);
} else if (arg.startsWith$S("-jvmmemmax=")) {
jvmmemmax=arg.substring$I("jvmmemmax".length$() + 2);
} else {
$arguments.add$O(arg);
}}
var memSet=false;
var dockIcon=false;
var dockName=false;
for (var i=0; i < command.size$(); i++) {
var arg=command.get$I(i);
if (arg.startsWith$S("-Xmx")) {
if (jvmmempc == null  && jvmmemmax == null  ) {
memSetting=arg;
memSet=true;
}} else if (arg.startsWith$S("-Xdock:icon")) {
dockIcon=true;
} else if (arg.startsWith$S("-Xdock:name")) {
dockName=true;
}}
if (!memSet) {
var maxMemLong=$I$(4).getMemorySetting$S$S(jvmmemmax, jvmmempc);
if (maxMemLong > 0) {
memSetting="-Xmx" + Long.toString$J(maxMemLong);
memSet=true;
command.add$O(memSetting);
}}if (isAMac) {
if (!dockIcon) {
command.add$O("-Xdock:icon=JalviewLogo_Huge.png");
}if (!dockName) {
command.add$O("-Xdock:name=Jalview");
}}command.add$O("jalview.bin.Jalview");
command.addAll$java_util_Collection($arguments);
var builder=Clazz.new_($I$(5,1).c$$java_util_List,[command]);
System.out.println$S("Running " + "jalview.bin.Jalview" + " with " + (memSetting == null  ? "no memory setting" : memSetting) );
if ($I$(6,"parseBoolean$S",[System.getProperty$S("launcherstop")])) {
System.exit$I(0);
}try {
builder.inheritIO$();
var process=builder.start$();
process.waitFor$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
if (e.getMessage$().toLowerCase$().contains$CharSequence("memory")) {
System.out.println$S("Caught a memory exception: " + e.getMessage$());
var commandNoMem=Clazz.new_($I$(2,1));
for (var i=0; i < command.size$(); i++) {
if (!command.get$I(i).startsWith$S("-Xmx")) {
commandNoMem.add$O(command.get$I(i));
}}
var builderNoMem=Clazz.new_($I$(5,1).c$$java_util_List,[commandNoMem]);
System.out.println$S("Command without memory setting: " + String.join$CharSequence$Iterable(" ", builderNoMem.command$()));
try {
builderNoMem.inheritIO$();
var processNoMem=builderNoMem.start$();
processNoMem.waitFor$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
} else {
e.printStackTrace$();
}}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
