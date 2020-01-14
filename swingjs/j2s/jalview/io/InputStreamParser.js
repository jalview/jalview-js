(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'java.io.BufferedReader','java.io.InputStreamReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "InputStreamParser", null, 'jalview.io.FileParse');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$S', function (is, dataName) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.setDataName$S(dataName);
this.dataIn=Clazz.new_($I$(1).c$$java_io_Reader,[Clazz.new_($I$(2).c$$java_io_InputStream,[is])]);
this.error=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader$S', function (isreader, dataName) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.setDataName$S(dataName);
this.dataIn=Clazz.new_($I$(1).c$$java_io_Reader,[isreader]);
this.error=false;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
