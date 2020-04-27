(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.util.Platform']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BrowserLauncher");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['loadedWithoutErrors'],'I',['jvm'],'S',['errorMessage'],'O',['browser','java.lang.Object','mrjFileUtilsClass','Class','+mrjOSTypeClass','+aeDescClass','aeTargetConstructor','java.lang.reflect.Constructor','+appleEventConstructor','+aeDescConstructor','findFolder','java.lang.reflect.Method','+getFileCreator','+getFileType','+openURL','+makeOSType','+putParameter','+sendNoReply','kSystemFolderType','java.lang.Object','keyDirectObject','Integer','+kAutoGenerateReturnID','+kAnyTransactionID','linkage','java.lang.Object']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
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
alert('native method must be replaced! ICStart');
}
, 2);

Clazz.newMeth(C$, 'ICStop$IA', function (instance) {
alert('native method must be replaced! ICStop');
}
, 2);

Clazz.newMeth(C$, 'ICLaunchURL$I$BA$BA$I$IA$IA', function (instance, hint, data, len, selectionStart, selectionEnd) {
alert('native method must be replaced! ICLaunchURL');
}
, 2);

C$.$static$=function(){C$.$static$=0;
{
C$.loadedWithoutErrors=true;
if (!$I$(1).isJS$()) 
{}
};
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
