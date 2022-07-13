(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScreenInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getScreenResolution$',  function () {
return $I$(1).getDefaultToolkit$().getScreenResolution$();
});

Clazz.newMeth(C$, 'getScreenHeight$',  function () {
return ($I$(1).getDefaultToolkit$().getScreenSize$().getHeight$()|0);
});

Clazz.newMeth(C$, 'getScreenWidth$',  function () {
return ($I$(1).getDefaultToolkit$().getScreenSize$().getWidth$()|0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
