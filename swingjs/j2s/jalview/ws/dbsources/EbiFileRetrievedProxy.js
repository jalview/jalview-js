(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'java.io.File','StringBuffer','java.io.BufferedReader','java.io.FileReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EbiFileRetrievedProxy", null, 'jalview.ws.seqfetcher.DbSourceProxyImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.file=null;
},1);

C$.$fields$=[['S',['file']]]

Clazz.newMeth(C$, 'getRawRecords$',  function () {
if (this.file == null ) {
return null;
}var bf=null;
try {
var f=Clazz.new_($I$(1,1).c$$S,[this.file]);
if (f.exists$()) {
bf=Clazz.new_($I$(2,1));
var breader=Clazz.new_([Clazz.new_($I$(4,1).c$$java_io_File,[f])],$I$(3,1).c$$java_io_Reader);
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
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
