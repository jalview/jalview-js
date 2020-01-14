(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.util.Platform']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BrowserLauncher");
C$.jvm=0;
C$.browser=null;
C$.loadedWithoutErrors=false;
C$.mrjFileUtilsClass=null;
C$.mrjOSTypeClass=null;
C$.aeDescClass=null;
C$.aeTargetConstructor=null;
C$.appleEventConstructor=null;
C$.aeDescConstructor=null;
C$.findFolder=null;
C$.getFileCreator=null;
C$.getFileType=null;
C$.openURL=null;
C$.makeOSType=null;
C$.putParameter=null;
C$.sendNoReply=null;
C$.kSystemFolderType=null;
C$.keyDirectObject=null;
C$.kAutoGenerateReturnID=null;
C$.kAnyTransactionID=null;
C$.linkage=null;
C$.errorMessage=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
C$.loadedWithoutErrors=true;
if (!$I$(1).isJS$()) 
{}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'loadClasses$', function () {
if (!$I$(1).isJS$()) 
{}
return true;
}, 1);

Clazz.newMeth(C$, 'locateBrowser$', function () {
if (!$I$(1).isJS$()) 
{}
return C$.browser;
}, 1);

Clazz.newMeth(C$, 'resetBrowser$', function () {
C$.browser=null;
}, 1);

Clazz.newMeth(C$, 'openURL$S', function (url) {
if ($I$(1).isJS$()) {
$I$(1).openURL$S(url);
return;
} else 
{}
}, 1);

Clazz.newMeth(C$, 'ICStart$IA$I', function (instance, signature) {
alert('native method must be replaced! Ljalview/util/BrowserLauncher;.ICStart([II)I');
}
, 2);

Clazz.newMeth(C$, 'ICStop$IA', function (instance) {
alert('native method must be replaced! Ljalview/util/BrowserLauncher;.ICStop([I)I');
}
, 2);

Clazz.newMeth(C$, 'ICLaunchURL$I$BA$BA$I$IA$IA', function (instance, hint, data, len, selectionStart, selectionEnd) {
alert('native method must be replaced! Ljalview/util/BrowserLauncher;.ICLaunchURL(I[B[BI[I[I)I');
}
, 2);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
