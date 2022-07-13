(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'jalview.bin.ScreenInfo','java.util.Locale']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HiDPISetting");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['isLinux','setHiDPI','doneInit','allowScalePropertyArg'],'I',['setHiDPIScale','dpi','mindimension','width','scale'],'O',['screenInfo','jalview.bin.ScreenInfo']]]

Clazz.newMeth(C$, 'init$',  function () {
if (C$.doneInit) {
return;
}var setHiDPIProperty=System.getProperty$S("setHiDPI");
var setHiDPIPropertyBool=Boolean.parseBoolean$S(setHiDPIProperty);
if (setHiDPIProperty != null  && !setHiDPIPropertyBool ) {
C$.clear$();
C$.doneInit=true;
return;
}C$.setHiDPI=setHiDPIProperty != null  && setHiDPIPropertyBool ;
var setHiDPIScaleProperty=System.getProperty$S("setHiDPIScale");
if (setHiDPIScaleProperty != null ) {
try {
C$.setHiDPIScale=Integer.parseInt$S(setHiDPIScaleProperty);
if (setHiDPIProperty == null ) {
C$.setHiDPI=true;
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.err.println$S("setHiDPIScale" + " property give (" + setHiDPIScaleProperty + ") but not parseable as integer" );
} else {
throw e;
}
}
}if (C$.setHiDPI && C$.setHiDPIScale > 0 ) {
C$.setHiDPIScale$I(C$.setHiDPIScale);
return;
}var existingProperty=System.getProperty$S("sun.java2d.uiScale");
if (existingProperty != null ) {
try {
var existingPropertyVal=Integer.parseInt$S(existingProperty);
System.out.println$S("Existing " + "sun.java2d.uiScale" + " is " + existingPropertyVal );
if (existingPropertyVal > 1) {
C$.setHiDPIScale$I(existingPropertyVal);
return;
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.out.println$S("Could not convert property " + "sun.java2d.uiScale" + " vale '" + existingProperty + "' to number" );
} else {
throw e;
}
}
}C$.screenInfo=C$.getScreenInfo$();
try {
C$.dpi=C$.screenInfo.getScreenResolution$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.HeadlessException")){
System.err.println$S("Cannot get screen resolution: " + e.getMessage$());
} else {
throw e;
}
}
try {
var height=C$.screenInfo.getScreenHeight$();
var width=C$.screenInfo.getScreenWidth$();
C$.mindimension=Math.min(height, width);
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.HeadlessException")){
System.err.println$S("Cannot get screen size height and width:" + e.getMessage$());
} else {
throw e;
}
}
var dpiScale=(C$.dpi - 160 > 0) ? 2 + (((C$.dpi - 160)/240|0)) : 1;
var dimensionScale=1 + ((C$.mindimension/1400|0));
if (dpiScale > 8) {
dpiScale=1;
}if (dimensionScale > 8) {
dimensionScale=1;
}var autoScale=Math.max(dpiScale, dimensionScale);
if ((autoScale > 1 && C$.isLinux ) || C$.setHiDPI ) {
C$.setHiDPIScale$I(autoScale);
return;
}C$.doneInit=true;
}, 1);

Clazz.newMeth(C$, 'setHiDPIScale$I',  function (s) {
C$.scale=s;
C$.allowScalePropertyArg=true;
C$.doneInit=true;
}, 1);

Clazz.newMeth(C$, 'getScalePropertyArg$I',  function (s) {
return "-D" + "sun.java2d.uiScale" + "=" + String.valueOf$I(s) ;
}, 1);

Clazz.newMeth(C$, 'getScalePropertyArg$',  function () {
C$.init$();
return C$.allowScalePropertyArg ? C$.getScalePropertyArg$I(C$.scale) : null;
}, 1);

Clazz.newMeth(C$, 'clear$',  function () {
C$.setHiDPI=false;
C$.setHiDPIScale=0;
C$.dpi=0;
C$.mindimension=0;
C$.width=0;
C$.scale=0;
C$.doneInit=false;
C$.allowScalePropertyArg=false;
}, 1);

Clazz.newMeth(C$, 'setScreenInfo$jalview_bin_ScreenInfo',  function (si) {
C$.screenInfo=si;
}, 1);

Clazz.newMeth(C$, 'getScreenInfo$',  function () {
if (C$.screenInfo == null ) {
C$.screenInfo=Clazz.new_($I$(1,1));
}return C$.screenInfo;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.setHiDPI=false;
C$.setHiDPIScale=0;
C$.dpi=0;
C$.mindimension=0;
C$.width=0;
C$.scale=0;
C$.doneInit=false;
C$.allowScalePropertyArg=false;
C$.screenInfo=Clazz.new_($I$(1,1));
{
var system=System.getProperty$S("os.name") == null  ? null : System.getProperty$S("os.name").toLowerCase$java_util_Locale($I$(2).ROOT);
if (system != null ) {
C$.isLinux=system.indexOf$S("linux") > -1;
} else {
C$.isLinux=false;
}};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
