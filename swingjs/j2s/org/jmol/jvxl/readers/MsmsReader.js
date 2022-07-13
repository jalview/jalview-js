(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.util.Logger','javajs.util.Rdr']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MsmsReader", null, 'org.jmol.jvxl.readers.PmeshReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['fileName']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2PFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.fileName=(sg.getReaderData$())[0];
if (this.fileName == null ) return;
this.type="msms";
this.onePerLine=true;
this.fixedCount=3;
this.vertexBase=1;
this.setHeader$();
});

Clazz.newMeth(C$, 'readVertices$', function () {
p$1.skipHeader.apply(this, []);
return this.readVerticesPM$();
});

Clazz.newMeth(C$, 'readPolygons$', function () {
this.br.close$();
this.fileName=$I$(1).rep$S$S$S(this.fileName, ".vert", ".face");
$I$(2).info$S("reading from file " + this.fileName);
try {
this.br=$I$(3,"getBufferedReader$java_io_BufferedInputStream$S",[this.sg.atomDataServer.getBufferedInputStream$S(this.fileName), null]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2).info$S("Note: file " + this.fileName + " was not found" );
this.br=null;
return true;
} else {
throw e;
}
}
this.sg.addRequiredFile$S(this.fileName);
p$1.skipHeader.apply(this, []);
return this.readPolygonsPM$();
});

Clazz.newMeth(C$, 'skipHeader', function () {
while (this.rd$() != null  && this.line.indexOf$S("#") >= 0 ){
}
this.tokens=this.getTokens$();
this.iToken=0;
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:35 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
