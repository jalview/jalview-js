(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.util.Platform','jalview.bin.Cache','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BrowserLauncher");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['preferredBrowser'],'O',['INSTANCE','jalview.util.BrowserLauncher']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.INSTANCE != null ) {
return C$.INSTANCE;
}C$.INSTANCE=Clazz.new_(C$);
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'openURL$S',  function (url) {
if ($I$(1).isJS$()) {
$I$(1).openURL$S(url);
return;
} else 
{}
}, 1);

Clazz.newMeth(C$, 'resetBrowser$',  function () {
C$.resetBrowser$Z(false);
}, 1);

Clazz.newMeth(C$, 'resetBrowser$Z',  function (removeIfNull) {
var defaultBrowser=$I$(2).getProperty$S("DEFAULT_BROWSER");
C$.preferredBrowser=defaultBrowser;
if (defaultBrowser == null  && removeIfNull ) {
}}, 1);

Clazz.newMeth(C$, 'getBrowserList$',  function () {
return Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'getBrowserSystemProperty$',  function () {
return "jalview.default.browser";
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.INSTANCE=null;
C$.preferredBrowser=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
