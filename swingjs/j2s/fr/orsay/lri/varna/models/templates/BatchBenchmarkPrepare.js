(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[[0,'java.io.File','java.util.ArrayList','fr.orsay.lri.varna.models.templates.BatchBenchmark','java.io.BufferedWriter','java.io.FileWriter','fr.orsay.lri.varna.factories.RNAFactory','Error']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BatchBenchmarkPrepare");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'benchmarkAllDir$java_io_File', function (rootdir) {
var seqdir=Clazz.new_($I$(1,1).c$$java_io_File$S,[rootdir, "sequences"]);
if (!seqdir.exists$()) {
seqdir.mkdir$();
}var templateFile=Clazz.new_($I$(1,1).c$$java_io_File$S,[rootdir, "template.xml"]);
var seqnames=Clazz.new_($I$(2,1));
var sequences=Clazz.new_($I$(2,1));
$I$(3,"readFASTA$java_io_File$java_util_List$java_util_List",[Clazz.new_($I$(1,1).c$$java_io_File$S,[rootdir, "alignment.fasta"]), seqnames, sequences]);
var outbufASS=Clazz.new_([Clazz.new_([Clazz.new_($I$(1,1).c$$java_io_File$S,[rootdir, "all_secondary_structures.fasta"])],$I$(5,1).c$$java_io_File)],$I$(4,1).c$$java_io_Writer);
var consensusSecStr=sequences.get$I(0);
var consensusSecStrInt=$I$(6).parseSecStr$S(consensusSecStr);
var templates=Clazz.new_($I$(2,1));
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
throw Clazz.new_($I$(7,1).c$$S,["bug"]);
}var outfile=Clazz.new_($I$(1,1).c$$java_io_File$S,[seqdir, seqname + ".dbn"]);
var outbuf=Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_File,[outfile])],$I$(4,1).c$$java_io_Writer);
outbuf.write$S(">" + seqname + "\n" );
outbuf.write$S(nt + "\n");
outbuf.write$S(ss + "\n");
outbuf.close$();
outbufASS.write$S(">" + seqname + "\n" );
outbufASS.write$S(ss + "\n");
templates.add$O(templateFile);
}
outbufASS.close$();
});

Clazz.newMeth(C$, 'main$SA', function (args) {
Clazz.new_(C$).benchmarkAllDir$java_io_File(Clazz.new_([Clazz.new_($I$(1,1).c$$S,["templates"]), "RNaseP_bact_a"],$I$(1,1).c$$java_io_File$S));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
