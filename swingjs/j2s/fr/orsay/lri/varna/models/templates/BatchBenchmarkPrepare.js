(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[[0,'java.io.File','java.util.ArrayList','fr.orsay.lri.varna.models.templates.BatchBenchmark','java.io.BufferedWriter','java.io.FileWriter','fr.orsay.lri.varna.factories.RNAFactory','Error']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BatchBenchmarkPrepare");

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'benchmarkAllDir$java_io_File', function (rootdir) {
var seqdir=Clazz.new_($I$(1).c$$java_io_File$S,[rootdir, "sequences"]);
if (!seqdir.exists$()) {
seqdir.mkdir$();
}var templateFile=Clazz.new_($I$(1).c$$java_io_File$S,[rootdir, "template.xml"]);
var seqnames=Clazz.new_($I$(2));
var sequences=Clazz.new_($I$(2));
$I$(3).readFASTA$java_io_File$java_util_List$java_util_List(Clazz.new_($I$(1).c$$java_io_File$S,[rootdir, "alignment.fasta"]), seqnames, sequences);
var outbufASS=Clazz.new_($I$(4).c$$java_io_Writer,[Clazz.new_($I$(5).c$$java_io_File,[Clazz.new_($I$(1).c$$java_io_File$S,[rootdir, "all_secondary_structures.fasta"])])]);
var consensusSecStr=sequences.get$I(0);
var consensusSecStrInt=$I$(6).parseSecStr$S(consensusSecStr);
var templates=Clazz.new_($I$(2));
for (var i=1; i < seqnames.size$(); i++) {
var seqname=seqnames.get$I(i);
var sequence=sequences.get$I(i);
var sequenceUngapped=sequence.replaceAll$S$S("[\\.-]", "");
System.out.println$S(seqname);
var ss="";
var nt="";
for (var j=0; j < sequence.length$(); j++) {
if (sequence.charAt$I(j) != "." && sequence.charAt$I(j) != "-" ) {
if (consensusSecStr.charAt$I(j) == "-" || consensusSecStr.charAt$I(j) == "." ) {
nt += sequence.charAt$I(j);
ss += ".";
} else {
var k=consensusSecStrInt[j];
if (sequence.charAt$I(k) != "." && sequence.charAt$I(k) != "-" ) {
nt += sequence.charAt$I(j);
ss += consensusSecStr.charAt$I(j);
} else {
nt += sequence.charAt$I(j);
ss += ".";
}}}}
if (!sequenceUngapped.equals$O(nt)) {
System.out.println$S(sequenceUngapped);
System.out.println$S(nt);
throw Clazz.new_($I$(7).c$$S,["bug"]);
}var outfile=Clazz.new_($I$(1).c$$java_io_File$S,[seqdir, seqname + ".dbn"]);
var outbuf=Clazz.new_($I$(4).c$$java_io_Writer,[Clazz.new_($I$(5).c$$java_io_File,[outfile])]);
outbuf.write$S(">" + seqname + "\n" );
outbuf.write$S(nt + "\n");
outbuf.write$S(ss + "\n");
outbuf.close$();
outbufASS.write$S(">" + seqname + "\n" );
outbufASS.write$S(ss + "\n");
templates.add$TE(templateFile);
}
outbufASS.close$();
});

Clazz.newMeth(C$, 'main$SA', function (args) {
Clazz.new_(C$).benchmarkAllDir$java_io_File(Clazz.new_($I$(1).c$$java_io_File$S,[Clazz.new_($I$(1).c$$S,["templates"]), "RNaseP_bact_a"]));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
