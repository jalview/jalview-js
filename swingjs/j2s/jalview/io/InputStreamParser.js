(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.io.BufferedReader','java.io.InputStreamReader']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InputStreamParser", null, 'jalview.io.FileParse');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$S', function (is, dataName) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setDataName$S(dataName);
this.dataIn=Clazz.new_([Clazz.new_($I$(2,1).c$$java_io_InputStream,[is])],$I$(1,1).c$$java_io_Reader);
this.error=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader$S', function (isreader, dataName) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setDataName$S(dataName);
this.dataIn=Clazz.new_($I$(1,1).c$$java_io_Reader,[isreader]);
this.error=false;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
