(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'java.io.File']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FontUtilities");
C$.isSolaris=false;
C$.isLinux=false;
C$.isMacOSX=false;
C$.isSolaris8=false;
C$.isSolaris9=false;
C$.isOpenSolaris=false;
C$.useT2K=false;
C$.isWindows=false;
C$.isOpenJDK=false;
C$.debugFonts=false;
C$.logging=false;
C$.nameMap=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.debugFonts=false;
{
var osName=System.getProperty$S$S("os.name", "unknownOS");
C$.isSolaris=osName.startsWith$S("SunOS");
C$.isLinux=osName.startsWith$S("Linux");
C$.isMacOSX=osName.contains$CharSequence("OS X");
C$.isWindows=osName.startsWith$S("Windows");
var jreLibDirName=System.getProperty$S$S("java.home", "") + $I$(1).separator + "lib" ;
var jreFontDirName=jreLibDirName + $I$(1).separator + "fonts" ;
var lucidaFile=Clazz.new_($I$(1).c$$S,[jreFontDirName + $I$(1).separator + "LucidaSansRegular.ttf" ]);
C$.isOpenJDK=!lucidaFile.exists$();
var debugLevel=System.getProperty$S("sun.java2d.debugfonts");
if (debugLevel != null  && !debugLevel.equals$O("false") ) {
C$.debugFonts=true;
}if (C$.debugFonts) {
}};
C$.nameMap=Clazz.array(String, -2, [Clazz.array(String, -1, ["sans", "sansserif"]), Clazz.array(String, -1, ["sans-serif", "sansserif"]), Clazz.array(String, -1, ["serif", "serif"]), Clazz.array(String, -1, ["monospace", "monospaced"])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isComplexCharCode$I', function (code) {
if (code < 768 || code > 8303 ) {
return false;
} else if (code <= 879) {
return true;
} else if (code < 1424) {
return false;
} else if (code <= 1791) {
return true;
} else if (code < 2304) {
return false;
} else if (code <= 3711) {
return true;
} else if (code < 3840) {
return false;
} else if (code <= 4095) {
return true;
} else if (code < 4352) {
return false;
} else if (code < 4607) {
return true;
} else if (code < 6016) {
return false;
} else if (code <= 6143) {
return true;
} else if (code < 8204) {
return false;
} else if (code <= 8205) {
return true;
} else if (code >= 8234 && code <= 8238 ) {
return true;
} else if (code >= 8298 && code <= 8303 ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'isLogging$', function () {
return C$.logging;
}, 1);

Clazz.newMeth(C$, 'debugFonts$', function () {
return C$.debugFonts;
}, 1);

Clazz.newMeth(C$, 'fontSupportsDefaultEncoding$java_awt_Font', function (font) {
return false;
}, 1);

Clazz.newMeth(C$, 'mapFcName$S', function (name) {
for (var i=0; i < C$.nameMap.length; i++) {
if (name.equals$O(C$.nameMap[i][0])) {
return C$.nameMap[i][1];
}}
return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
