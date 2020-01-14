(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'java.io.File','StringBuffer','java.io.BufferedReader','java.io.FileReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EbiFileRetrievedProxy", null, 'jalview.ws.seqfetcher.DbSourceProxyImpl');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.file=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.file=null;
}, 1);

Clazz.newMeth(C$, 'getRawRecords$', function () {
if (this.file == null ) {
return null;
}var bf=null;
try {
var f=Clazz.new_($I$(1).c$$S,[this.file]);
if (f.exists$()) {
bf=Clazz.new_($I$(2));
var breader=Clazz.new_($I$(3).c$$java_io_Reader,[Clazz.new_($I$(4).c$$java_io_File,[f])]);
var line=null;
while (breader.ready$() && (line=breader.readLine$()) != null  ){
bf.append$S(line);
}
breader.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Warning: problems reading temp file " + this.file);
return null;
} else {
throw e;
}
}
return bf;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
