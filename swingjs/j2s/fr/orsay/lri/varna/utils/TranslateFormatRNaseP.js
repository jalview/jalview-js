(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.utils"),I$=[[0,'java.io.File','java.io.BufferedReader','java.io.FileReader','java.util.ArrayList','java.io.BufferedWriter','java.io.FileWriter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TranslateFormatRNaseP");

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var templatesDir=Clazz.new_($I$(1).c$$java_io_File$S,[Clazz.new_($I$(1).c$$S,[System.getProperty$S("user.dir")]), "templates"]);
var infile=Clazz.new_($I$(1).c$$java_io_File$S,[Clazz.new_($I$(1).c$$java_io_File$S,[templatesDir, "RNaseP_bact_a"]), "a_bacterial_rnas.gb"]);
var outfile=Clazz.new_($I$(1).c$$java_io_File$S,[Clazz.new_($I$(1).c$$java_io_File$S,[templatesDir, "RNaseP_bact_a"]), "alignment.fasta"]);
var inbuf=Clazz.new_($I$(2).c$$java_io_Reader,[Clazz.new_($I$(3).c$$java_io_File,[infile])]);
var line=inbuf.readLine$();
var seqname;
var seqnames=Clazz.new_($I$(4));
var sequences=Clazz.new_($I$(4));
while (line != null ){
if (line.length$() != 0) {
if (line.startsWith$S("LOCUS")) {
var parts=line.split$S("\\s+");
seqname=parts[1];
seqnames.add$TE(seqname);
sequences.add$TE("");
}if (line.startsWith$S(" ")) {
var parts=line.split$S("\\s+");
for (var i=2; i < parts.length; i++) {
sequences.set$I$TE(sequences.size$() - 1, sequences.get$I(sequences.size$() - 1) + parts[i]);
}
}}line=inbuf.readLine$();
}
inbuf.close$();
var outbuf=Clazz.new_($I$(5).c$$java_io_Writer,[Clazz.new_($I$(6).c$$java_io_File,[outfile])]);
for (var i=2; i < seqnames.size$(); i++) {
outbuf.write$S(">" + seqnames.get$I(i) + "\n" );
outbuf.write$S(sequences.get$I(i) + "\n");
}
outbuf.close$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
