(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'jalview.util.ChannelProperties','java.io.File','java.util.ArrayList','java.lang.management.ManagementFactory','jalview.util.LaunchUtils','jalview.bin.MemorySetting','jalview.bin.HiDPISetting','ProcessBuilder','java.util.Locale']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Launcher");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['dockIconPath']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
var javaBin=System.getProperty$S("java.home") + $I$(2).separator + "bin" + $I$(2).separator + "java" ;
var command=Clazz.new_($I$(3,1));
command.add$O(javaBin);
var memSetting=null;
var isAMac=System.getProperty$S("os.name").indexOf$S("Mac") > -1;
for (var jvmArg, $jvmArg = $I$(4).getRuntimeMXBean$().getInputArguments$().iterator$(); $jvmArg.hasNext$()&&((jvmArg=($jvmArg.next$())),1);) {
command.add$O(jvmArg);
}
command.add$O("-cp");
command.add$O($I$(4).getRuntimeMXBean$().getClassPath$());
var jvmmempc=null;
var jvmmemmax=null;
var $arguments=Clazz.new_($I$(3,1));
for (var arg, $arg = 0, $$arg = args; $arg<$$arg.length&&((arg=($$arg[$arg])),1);$arg++) {
if (arg.startsWith$S("-jvmmempc=")) {
jvmmempc=arg.substring$I("jvmmempc".length$() + 2);
} else if (arg.startsWith$S("-jvmmemmax=")) {
jvmmemmax=arg.substring$I("jvmmemmax".length$() + 2);
} else {
$arguments.add$O(arg);
}}
var useCustomisedSettings=$I$(5).getBooleanUserPreference$S("MEMORY_CUSTOMISED_SETTINGS");
if (useCustomisedSettings) {
if (jvmmempc == null ) {
jvmmempc=$I$(5,"getUserPreference$S",[$I$(6).MEMORY_JVMMEMPC]);
}if (jvmmemmax == null ) {
jvmmemmax=$I$(5,"getUserPreference$S",[$I$(6).MEMORY_JVMMEMMAX]);
}}var memSet=false;
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
var maxMemLong=$I$(6).getMemorySetting$S$S(jvmmemmax, jvmmempc);
if (Long.$gt(maxMemLong,0 )) {
memSetting="-Xmx" + Long.toString$J(maxMemLong);
memSet=true;
command.add$O(memSetting);
}}if (isAMac) {
if (!dockIcon) {
command.add$O("-Xdock:icon=" + C$.dockIconPath);
}if (!dockName) {
command.add$O("-Xdock:name=" + $I$(1).getProperty$S("app_name"));
}}var scalePropertyArg=$I$(7).getScalePropertyArg$();
if (scalePropertyArg != null ) {
System.out.println$S("Running " + "jalview.bin.Jalview" + " with scale setting " + scalePropertyArg );
command.add$O(scalePropertyArg);
}command.add$O("jalview.bin.Jalview");
command.addAll$java_util_Collection($arguments);
var builder=Clazz.new_($I$(8,1).c$$java_util_List,[command]);
if (Boolean.parseBoolean$S(System.getProperty$S$S("launcherprint", "false"))) {
System.out.println$S("LAUNCHER COMMAND: " + String.join$CharSequence$Iterable(" ", builder.command$()));
}System.out.println$S("Running " + "jalview.bin.Jalview" + " with " + (memSetting == null  ? "no memory setting" : ("memory setting " + memSetting)) );
if (Boolean.parseBoolean$S(System.getProperty$S$S("launcherstop", "false"))) {
System.exit$I(0);
}try {
builder.inheritIO$();
var process=builder.start$();
process.waitFor$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
if (e.getMessage$().toLowerCase$java_util_Locale($I$(9).ROOT).contains$CharSequence("memory")) {
System.out.println$S("Caught a memory exception: " + e.getMessage$());
var commandNoMem=Clazz.new_($I$(3,1));
for (var i=0; i < command.size$(); i++) {
if (!command.get$I(i).startsWith$S("-Xmx")) {
commandNoMem.add$O(command.get$I(i));
}}
var builderNoMem=Clazz.new_($I$(8,1).c$$java_util_List,[commandNoMem]);
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

C$.$static$=function(){C$.$static$=0;
C$.dockIconPath=$I$(1).getProperty$S("logo.512");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
