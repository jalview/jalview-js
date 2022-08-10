(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.factories"),I$=[[0,'java.io.BufferedReader','java.io.FileReader','java.net.URL','java.io.InputStreamReader','java.util.LinkedHashMap','fr.orsay.lri.varna.factories.RNAAlignment','StringBuffer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StockholmIO");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'readAlignementFromFile$S', function (path) {
return C$.readAlignement$java_io_BufferedReader(Clazz.new_([Clazz.new_($I$(2,1).c$$S,[path])],$I$(1,1).c$$java_io_Reader));
}, 1);

Clazz.newMeth(C$, 'readAlignementFromURL$S', function (url) {
var urlAb=Clazz.new_($I$(3,1).c$$S,[url]);
var urlConn=urlAb.openConnection$();
urlConn.setUseCaches$Z(false);
var r=Clazz.new_([urlConn.getInputStream$(), "UTF-8"],$I$(4,1).c$$java_io_InputStream$S);
return C$.readAlignement$java_io_BufferedReader(Clazz.new_($I$(1,1).c$$java_io_Reader,[r]));
}, 1);

Clazz.newMeth(C$, 'readAlignement$java_io_BufferedReader', function (r) {
var rawSeqs=Clazz.new_($I$(5,1));
var result=Clazz.new_($I$(6,1));
var line=r.readLine$();
var str="";
while (line != null ){
if (!line.startsWith$S("#")) {
var data=line.split$S("\\s+");
if (data.length > 1) {
var seqName=data[0].trim$();
var seq=data[1].trim$();
if (!rawSeqs.containsKey$O(seqName)) {
rawSeqs.put$O$O(seqName, Clazz.new_($I$(7,1)));
}var val=rawSeqs.get$O(seqName);
val.append$S(seq);
}} else if (line.startsWith$S("#")) {
var data=line.split$S("\\s+");
if (line.startsWith$S("#=GC SS_cons")) {
str += data[2].trim$();
} else if (line.startsWith$S("#=GS")) {
if (data[2].trim$().equals$O("AC")) {
result.setAccession$S$S(data[1].trim$(), data[3].trim$());
}}}line=r.readLine$();
}
result.setSecStr$S(str);
for (var entry, $entry = rawSeqs.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var s=entry.getValue$().toString();
result.addSequence$S$S(entry.getKey$(), s);
}
return result;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
