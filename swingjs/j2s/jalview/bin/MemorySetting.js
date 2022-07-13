(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'java.util.Locale','jalview.bin.GetMemory']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MemorySetting");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['logToClassChecked'],'S',['MEMORY_JVMMEMPC','MEMORY_JVMMEMMAX','memorySuffixes','ADJUSTMENT_MESSAGE']]]

Clazz.newMeth(C$, 'getMemorySetting$',  function () {
return C$.getMemorySetting$S$S(null, null);
}, 1);

Clazz.newMeth(C$, 'getMemorySetting$S$S',  function (jvmmemmaxarg, jvmmempcarg) {
return C$.getMemorySetting$S$S$Z$Z(jvmmemmaxarg, jvmmempcarg, true, false);
}, 1);

Clazz.newMeth(C$, 'getMemorySetting$S$S$Z$Z',  function (jvmmemmaxarg, jvmmempcarg, useProps, quiet) {
var maxMemLong=-1;
C$.clearAdjustmentMessage$();
var memmax=34359738368;
if (jvmmemmaxarg == null  && useProps ) {
jvmmemmaxarg=System.getProperty$S("jvmmemmax");
}var jvmmemmax=jvmmemmaxarg;
if (jvmmemmax != null  && jvmmemmax.length$() > 0 ) {
try {
memmax=C$.memoryStringToLong$S(jvmmemmax);
if (Long.$eq(memmax,0 )) {
throw (Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Not allowing 0"]));
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
memmax=34359738368;
C$.setAdjustmentMessage$S$Z("MemorySetting Property '" + "jvmmemmax" + "' (" + jvmmemmaxarg + "') badly formatted or 0, using default (" + Long.$s(32) + "g)." , quiet);
} else {
throw e;
}
}
if (Long.$lt(memmax,536870912 )) {
memmax=536870912;
C$.setAdjustmentMessage$S$Z("MemorySetting Property '" + "jvmmemmax" + "' (" + jvmmemmaxarg + ") too small, using minimum (" + Long.$s(536870912) + ")." , quiet);
}} else {
}var percent=90;
if (jvmmempcarg == null  && useProps ) {
jvmmempcarg=System.getProperty$S("jvmmempc");
}var jvmmempc=jvmmempcarg;
var mempc=-1;
try {
if (jvmmempc != null ) {
var trypercent=Integer.parseInt$S(jvmmempc);
if (0 <= trypercent && trypercent <= 100 ) {
percent=trypercent;
} else {
C$.setAdjustmentMessage$S$Z("MemorySetting Property '" + "jvmmempc" + "' should be in range 0..100. Using default " + new Float(percent).toString() + "%" , quiet);
}}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
C$.setAdjustmentMessage$S$Z("MemorySetting property '" + "jvmmempc" + "' (" + jvmmempcarg + ") badly formatted" , quiet);
} else {
throw e;
}
}
var memoryPercentError=false;
try {
var physicalMem=$I$(2).getPhysicalMemory$();
if (Long.$gt(physicalMem,536870912 )) {
mempc=Clazz.toLong(((physicalMem / 100.0) * percent));
var reducedmempc=false;
if (Long.$lt(Long.$sub(physicalMem,mempc),536870912 )) {
mempc=Long.$sub(physicalMem,536870912);
reducedmempc=true;
C$.setAdjustmentMessage$S$Z("MemorySetting Property '" + "jvmmempc" + "' (" + jvmmempcarg + ") too large. Leaving free space for OS and reducing to (" + Long.$s(mempc) + ")." , quiet);
}if (Long.$lt(mempc,536870912 )) {
if (reducedmempc) {
C$.setAdjustmentMessage$S$Z("Reduced MemorySetting (" + Long.$s(mempc) + ") too small. Increasing to application minimum (" + Long.$s(536870912) + ")." , quiet);
} else {
C$.setAdjustmentMessage$S$Z("MemorySetting Property '" + "jvmmempc" + "' (" + jvmmempcarg + ") too small. Using minimum (" + Long.$s(536870912) + ")." , quiet);
}mempc=536870912;
}} else {
mempc=physicalMem;
C$.setAdjustmentMessage$S$Z("Not enough physical memory for application. Ignoring MemorySetting Property '" + "jvmmempc" + "' (" + jvmmempcarg + "). Using maximum memory available (" + Long.$s(physicalMem) + ")." , quiet);
}} catch (t) {
memoryPercentError=true;
C$.setAdjustmentMessage$S$Z("Problem calling GetMemory.getPhysicalMemory(). Likely to be problem with com.sun.management.OperatingSystemMXBean", quiet);
t.printStackTrace$();
}
if (memoryPercentError && Long.$eq(mempc,-1 )  && !(jvmmempcarg == null  && jvmmemmaxarg != null  )  && Long.$gt(memmax,8589934592 ) ) {
C$.setAdjustmentMessage$S$Z("Capping maximum memory to 8g due to failure to read physical memory size.", quiet);
memmax=8589934592;
}if (Long.$eq(mempc,-1 )) {
maxMemLong=memmax;
} else {
maxMemLong=Math.min$J$J(mempc, memmax);
}return maxMemLong;
}, 1);

Clazz.newMeth(C$, 'isValidMemoryString$S',  function (text) {
if (text.length$() > 0) {
var lastChar=text.charAt$I(text.length$() - 1);
var otherChars=text.substring$I$I(0, text.length$() - 1).toCharArray$();
for (var c, $c = 0, $$c = otherChars; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c < "0" || c > "9" ) {
return false;
}}
if ((lastChar < "0" || lastChar > "9" ) && C$.memorySuffixes.indexOf$I(Character.toLowerCase$C(lastChar)) == -1 ) {
return false;
}}return true;
}, 1);

Clazz.newMeth(C$, 'memoryStringToLong$S',  function (memString) {
if (!C$.isValidMemoryString$S(memString)) {
throw (Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Not a valid memory string"]));
}var suffix=Character.toLowerCase$C(memString.charAt$I(memString.length$() - 1));
if ("0" <= suffix && suffix <= "9" ) {
return (Long.valueOf$S(memString)).valueOf();
}if (C$.memorySuffixes.indexOf$I(suffix) == -1) {
return -1;
}var multiplier=Clazz.toLong(Math.pow(2, C$.memorySuffixes.indexOf$I(suffix) * 10));
var mem=Long.parseLong$S(memString.substring$I$I(0, memString.length$() - 1));
if (Long.$eq(mem,0 )) {
return 0;
}if (Long.$gt(Long.$div([16777215,549755813887,1],mem),multiplier )) {
return Long.$mul(multiplier,mem);
} else {
System.out.println$S("Memory parsing of '" + memString + "' produces number too big.  Limiting to Long.MAX_VALUE=" + Long.$s([16777215,549755813887,1]) );
return [16777215,549755813887,1];
}}, 1);

Clazz.newMeth(C$, 'memoryLongToString$J',  function (mem) {
return C$.memoryLongToString$J$S(mem, "%.3f");
}, 1);

Clazz.newMeth(C$, 'memoryLongToString$J$S',  function (mem, format) {
var exponent=0;
var num=Long.$fval(mem);
var suffix="b";
for (var i=0; i < C$.memorySuffixes.length$(); i++) {
var s=Character.toUpperCase$C(C$.memorySuffixes.charAt$I(i));
if (Long.$lt(mem,Clazz.toLong(Math.pow(2, exponent + 10)) ) || i == C$.memorySuffixes.length$() - 1 ) {
suffix=s;
num=(mem / Math.pow(2, exponent));
break;
}exponent+=10;
}
return String.format$S$OA(format, Clazz.array(java.lang.Object, -1, [Float.valueOf$F(num)])) + suffix;
}, 1);

Clazz.newMeth(C$, 'setAdjustmentMessage$S$Z',  function (reason, quiet) {
C$.ADJUSTMENT_MESSAGE=reason;
if (!quiet) {
System.out.println$S(reason);
}}, 1);

Clazz.newMeth(C$, 'clearAdjustmentMessage$',  function () {
C$.ADJUSTMENT_MESSAGE=null;
}, 1);

Clazz.newMeth(C$, 'getAdjustmentMessage$',  function () {
return C$.ADJUSTMENT_MESSAGE;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MEMORY_JVMMEMPC="MEMORY" + "_" + "jvmmempc".toUpperCase$java_util_Locale($I$(1).ROOT) ;
C$.MEMORY_JVMMEMMAX="MEMORY" + "_" + "jvmmemmax".toUpperCase$java_util_Locale($I$(1).ROOT) ;
C$.logToClassChecked=false;
C$.memorySuffixes="bkmgt";
C$.ADJUSTMENT_MESSAGE=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
