(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[[0,'fr.orsay.lri.varna.models.VARNAConfig','fr.orsay.lri.varna.factories.RNAFactory','fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax','fr.orsay.lri.varna.models.templates.RNATemplate','fr.orsay.lri.varna.models.templates.DrawRNATemplateMethod','fr.orsay.lri.varna.models.templates.DrawRNATemplateCurveMethod','fr.orsay.lri.varna.models.templates.Benchmark','Error','java.io.BufferedWriter','java.io.FileWriter','java.io.File','java.util.ArrayList','java.io.BufferedReader','java.io.FileReader','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BatchBenchmark");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.conf=null;
this.DEFAULT_STRAIGHT_BULGES=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.conf=Clazz.new_($I$(1));
this.DEFAULT_STRAIGHT_BULGES=false;
}, 1);

Clazz.newMeth(C$, 'loadRNA$java_io_File', function (file) {
var rnas=$I$(2).loadSecStr$S(file.getPath$());
if (rnas.isEmpty$()) {
throw Clazz.new_($I$(3).c$$S,["No RNA could be parsed from that source."]);
}return rnas.iterator$().next$();
}, 1);

Clazz.newMeth(C$, 'benchmarkRNA$java_io_File$java_io_File$java_io_BufferedWriter', function (templatePath, rnaPath, outbuf) {
var template=$I$(4).fromXMLFile$java_io_File(templatePath);
var rna=C$.loadRNA$java_io_File(rnaPath);
for (var algo=0; algo <= 100; algo++) {
var algoname="";
switch (algo) {
case 2:
rna.drawRNARadiate$fr_orsay_lri_varna_models_VARNAConfig(this.conf);
algoname="Radiate";
break;
case 3:
rna.drawRNANAView$fr_orsay_lri_varna_models_VARNAConfig(this.conf);
algoname="NAView";
break;
case 10:
algoname="Template/noadj";
rna.drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z(template, this.conf, $I$(5).NOADJUST, $I$(6).EXACTLY_AS_IN_TEMPLATE, false);
break;
case 11:
algoname="Template/noadj/ellipses";
rna.drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z(template, this.conf, $I$(5).NOADJUST, $I$(6).ALWAYS_REPLACE_BY_ELLIPSES, false);
break;
case 12:
algoname="Template/noadj/smart";
rna.drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z(template, this.conf, $I$(5).NOADJUST, $I$(6).SMART, false);
break;
case 6:
algoname="Template/mininter";
rna.drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z(template, this.conf, $I$(5).NOINTERSECT, $I$(6).EXACTLY_AS_IN_TEMPLATE, false);
break;
case 30:
algoname="Template/translate";
rna.drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z(template, this.conf, $I$(5).HELIXTRANSLATE, $I$(6).EXACTLY_AS_IN_TEMPLATE, false);
break;
case 31:
algoname="Template/translate/ellipses";
rna.drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z(template, this.conf, $I$(5).HELIXTRANSLATE, $I$(6).ALWAYS_REPLACE_BY_ELLIPSES, false);
break;
case 32:
algoname="Template/translate/smart";
rna.drawRNATemplate$fr_orsay_lri_varna_models_templates_RNATemplate$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_templates_DrawRNATemplateMethod$fr_orsay_lri_varna_models_templates_DrawRNATemplateCurveMethod$Z(template, this.conf, $I$(5).HELIXTRANSLATE, $I$(6).SMART, false);
break;
default:
continue;
}
var benchmark=Clazz.new_($I$(7).c$$fr_orsay_lri_varna_models_rna_RNA,[rna]);
outbuf.write$S(C$.removeExt$S(rnaPath.getName$()) + "\t" + algoname + "\t" + benchmark.backboneCrossings + "\t" + new Double((benchmark.averageUnpairedDistance / benchmark.targetConsecutiveBaseDistance * 100)).toString() + "\t" + benchmark.tooNearConsecutiveBases + "\t" + benchmark.tooFarConsecutiveBases + "\n" );
}
});

Clazz.newMeth(C$, 'runBenchmark$java_util_List$java_util_List$java_io_File', function (templates, rnas, outfile) {
if (templates.size$() != rnas.size$()) {
throw Clazz.new_($I$(8).c$$S,["templates and rnas list size differ"]);
}var outbuf=Clazz.new_($I$(9).c$$java_io_Writer,[Clazz.new_($I$(10).c$$java_io_File,[outfile])]);
outbuf.write$S("RNA\tAlgorithm\tBackbone crossings\tAverage unpaired distance %\tToo near\tToo far\n");
for (var i=0; i < templates.size$(); i++) {
System.out.println$S("Benchmarking for RNA " + C$.removeExt$S(rnas.get$I(i).getName$()));
this.benchmarkRNA$java_io_File$java_io_File$java_io_BufferedWriter(templates.get$I(i), rnas.get$I(i), outbuf);
}
outbuf.close$();
System.out.println$S("******* Benchmark finished. *******");
});

Clazz.newMeth(C$, 'runExamples$', function () {
var templatesDir=Clazz.new_($I$(11).c$$S,["templates"]);
var root=Clazz.new_($I$(11).c$$java_io_File$S,[templatesDir, "examples"]);
var outfile=Clazz.new_($I$(11).c$$java_io_File$S,[Clazz.new_($I$(11).c$$java_io_File$S,[templatesDir, "benchmark"]), "benchmark.txt"]);
var seqlist=Clazz.array(String, -1, ["RNase P E Coli.ct", "RNase P Synechocystis-PCC6803.ct", "RNase P M Musculus.ct"]);
var templates=Clazz.new_($I$(12));
var rnas=Clazz.new_($I$(12));
for (var seq, $seq = 0, $$seq = seqlist; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
templates.add$TE(Clazz.new_($I$(11).c$$java_io_File$S,[root, "RNase P E Coli.xml"]));
rnas.add$TE(Clazz.new_($I$(11).c$$java_io_File$S,[root, seq]));
}
this.runBenchmark$java_util_List$java_util_List$java_io_File(templates, rnas, outfile);
});

Clazz.newMeth(C$, 'readFASTA$java_io_File$java_util_List$java_util_List', function (file, seqnames, sequences) {
var buf=Clazz.new_($I$(13).c$$java_io_Reader,[Clazz.new_($I$(14).c$$java_io_File,[file])]);
var line=buf.readLine$();
while (line != null ){
if (line.length$() != 0) {
if (line.charAt$I(0) == ">") {
var id=line.substring$I(1);
seqnames.add$TE(id);
sequences.add$TE("");
} else {
sequences.set$I$TE(sequences.size$() - 1, sequences.get$I(sequences.size$() - 1) + line);
}}line=buf.readLine$();
}
buf.close$();
}, 1);

Clazz.newMeth(C$, 'benchmarkAllDir$java_io_File', function (rootdir) {
var seqdir=Clazz.new_($I$(11).c$$java_io_File$S,[rootdir, "sequences"]);
var templateFile=Clazz.new_($I$(11).c$$java_io_File$S,[rootdir, "template.xml"]);
var sequenceFiles=seqdir.listFiles$();
$I$(15).sort$OA(sequenceFiles);
var templates=Clazz.new_($I$(12));
var rnas=Clazz.new_($I$(12));
for (var seq, $seq = 0, $$seq = sequenceFiles; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
if (!seq.getPath$().endsWith$S(".dbn")) continue;
rnas.add$TE(seq);
templates.add$TE(templateFile);
}
var outfile=Clazz.new_($I$(11).c$$java_io_File$S,[rootdir, "benchmark.txt"]);
this.runBenchmark$java_util_List$java_util_List$java_io_File(templates, rnas, outfile);
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var templatesDir=Clazz.new_($I$(11).c$$S,["templates"]);
if (args.length < 1) {
System.out.println$S("Command-line argument required: RNA");
System.out.println$S("Example: RNaseP_bact_a");
System.exit$I(1);
}for (var arg, $arg = 0, $$arg = args; $arg<$$arg.length&&((arg=($$arg[$arg])),1);$arg++) {
Clazz.new_(C$).benchmarkAllDir$java_io_File(Clazz.new_($I$(11).c$$java_io_File$S,[templatesDir, arg]));
}
}, 1);

Clazz.newMeth(C$, 'removeExt$S', function (path) {
return path.substring$I$I(0, path.lastIndexOf$I("."));
}, 1);

Clazz.newMeth(C$, 'removeExt$java_io_File', function (path) {
return Clazz.new_($I$(11).c$$S,[C$.removeExt$S(path.getPath$())]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
