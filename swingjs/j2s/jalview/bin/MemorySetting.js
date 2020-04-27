(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'jalview.bin.GetMemory']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MemorySetting");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['logToClassChecked']]]

Clazz.newMeth(C$, 'getMemorySetting$', function () {
return C$.getMemorySetting$S$S(null, null);
}, 1);

Clazz.newMeth(C$, 'getMemorySetting$S$S', function (jvmmemmaxarg, jvmmempcarg) {
var maxMemLong=-1;
var memmax=34359738368;
if (jvmmemmaxarg == null ) {
jvmmemmaxarg=System.getProperty$S("jvmmemmax");
}var jvmmemmax=jvmmemmaxarg;
if (jvmmemmax != null  && jvmmemmax.length$() > 0 ) {
var multiplier=1;
switch (jvmmemmax.toLowerCase$().substring$I(jvmmemmax.length$() - 1)) {
case "t":
multiplier=1099511627776;
jvmmemmax=jvmmemmax.substring$I$I(0, jvmmemmax.length$() - 1);
break;
case "g":
multiplier=1073741824;
jvmmemmax=jvmmemmax.substring$I$I(0, jvmmemmax.length$() - 1);
break;
case "m":
multiplier=1048576;
jvmmemmax=jvmmemmax.substring$I$I(0, jvmmemmax.length$() - 1);
break;
case "k":
multiplier=1024;
jvmmemmax=jvmmemmax.substring$I$I(0, jvmmemmax.length$() - 1);
break;
case "b":
multiplier=1;
jvmmemmax=jvmmemmax.substring$I$I(0, jvmmemmax.length$() - 1);
break;
default:
break;
}
try {
memmax=Long.parseLong$S(jvmmemmax);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
memmax=34359738368;
System.out.println$S("MemorySetting Property '" + "jvmmemmax" + "' (" + jvmmemmaxarg + "') badly formatted, using default (" + 32 + "g)." );
} else {
throw e;
}
}
if ((9223372036854775807/memmax|0) < multiplier) {
memmax=34359738368;
System.out.println$S("MemorySetting Property '" + "jvmmemmax" + "' (" + jvmmemmaxarg + ") too big, using default (" + 32 + "g)." );
} else {
memmax=multiplier * memmax;
}if (memmax < 536870912) {
memmax=536870912;
System.out.println$S("MemorySetting Property '" + "jvmmemmax" + "' (" + jvmmemmaxarg + ") too small, using minimum (" + 536870912 + ")." );
}} else {
}var percent=90;
if (jvmmempcarg == null ) {
jvmmempcarg=System.getProperty$S("jvmmempc");
}var jvmmempc=jvmmempcarg;
var mempc=-1;
try {
if (jvmmempc != null ) {
var trypercent=Float.parseFloat$S(jvmmempc);
if (0 < trypercent  && trypercent <= 100.0  ) {
percent=trypercent;
} else {
System.out.println$S("MemorySetting Property '" + "jvmmempc" + "' should be in range 1..100. Using default " + new Float(percent).toString() + "%" );
}}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.out.println$S("MemorySetting property '" + "jvmmempc" + "' (" + jvmmempcarg + ") badly formatted" );
} else {
throw e;
}
}
var memoryPercentError=false;
try {
var physicalMem=$I$(1).getPhysicalMemory$();
if (physicalMem > 536870912) {
mempc=(((physicalMem / 100.0) * percent)|0);
var reducedmempc=false;
if (physicalMem - mempc < 536870912) {
mempc=physicalMem - 536870912;
reducedmempc=true;
System.out.println$S("MemorySetting Property '" + "jvmmempc" + "' (" + jvmmempcarg + ") too large. Leaving free space for OS and reducing to (" + mempc + ")." );
}if (mempc < 536870912) {
if (reducedmempc) {
System.out.println$S("Reduced MemorySetting (" + mempc + ") too small. Increasing to application minimum (" + 536870912 + ")." );
} else {
System.out.println$S("MemorySetting Property '" + "jvmmempc" + "' (" + jvmmempcarg + ") too small. Using minimum (" + 536870912 + ")." );
}mempc=536870912;
}} else {
mempc=physicalMem;
System.out.println$S("Not enough physical memory for application. Ignoring MemorySetting Property '" + "jvmmempc" + "' (" + jvmmempcarg + "). Using maximum memory available (" + physicalMem + ")." );
}} catch (t) {
memoryPercentError=true;
System.out.println$S("Problem calling GetMemory.getPhysicalMemory(). Likely to be problem with com.sun.management.OperatingSystemMXBean");
t.printStackTrace$();
}
if (memoryPercentError && mempc == -1  && !(jvmmempcarg == null  && jvmmemmaxarg != null  )  && memmax > 8589934592 ) {
System.out.println$S("Capping maximum memory to 8g due to failure to read physical memory size.");
memmax=8589934592;
}if (mempc == -1) {
maxMemLong=memmax;
} else {
maxMemLong=Math.min(mempc, memmax);
}return maxMemLong;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.logToClassChecked=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
