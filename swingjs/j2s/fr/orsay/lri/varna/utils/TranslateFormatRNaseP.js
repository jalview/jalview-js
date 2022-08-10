(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.utils"),I$=[[0,'java.io.File','java.io.BufferedReader','java.io.FileReader','java.util.ArrayList','java.io.BufferedWriter','java.io.FileWriter']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TranslateFormatRNaseP");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var templatesDir=Clazz.new_([Clazz.new_([System.getProperty$S("user.dir")],$I$(1,1).c$$S), "templates"],$I$(1,1).c$$java_io_File$S);
var infile=Clazz.new_([Clazz.new_($I$(1,1).c$$java_io_File$S,[templatesDir, "RNaseP_bact_a"]), "a_bacterial_rnas.gb"],$I$(1,1).c$$java_io_File$S);
var outfile=Clazz.new_([Clazz.new_($I$(1,1).c$$java_io_File$S,[templatesDir, "RNaseP_bact_a"]), "alignment.fasta"],$I$(1,1).c$$java_io_File$S);
var inbuf=Clazz.new_([Clazz.new_($I$(3,1).c$$java_io_File,[infile])],$I$(2,1).c$$java_io_Reader);
var line=inbuf.readLine$();
var seqname;
var seqnames=Clazz.new_($I$(4,1));
var sequences=Clazz.new_($I$(4,1));
while (line != null ){
if (line.length$() != 0) {
if (line.startsWith$S("LOCUS")) {
var parts=line.split$S("\\s+");
seqname=parts[1];
seqnames.add$O(seqname);
sequences.add$O("");
}if (line.startsWith$S(" ")) {
var parts=line.split$S("\\s+");
for (var i=2; i < parts.length; i++) {
sequences.set$I$O(sequences.size$() - 1, sequences.get$I(sequences.size$() - 1) + parts[i]);
}
}}line=inbuf.readLine$();
}
inbuf.close$();
var outbuf=Clazz.new_([Clazz.new_($I$(6,1).c$$java_io_File,[outfile])],$I$(5,1).c$$java_io_Writer);
for (var i=2; i < seqnames.size$(); i++) {
outbuf.write$S(">" + seqnames.get$I(i) + "\n" );
outbuf.write$S(sequences.get$I(i) + "\n");
}
outbuf.close$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
