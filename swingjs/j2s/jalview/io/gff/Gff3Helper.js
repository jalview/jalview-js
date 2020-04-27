(function(){var P$=Clazz.newPackage("jalview.io.gff"),I$=[[0,'jalview.io.gff.GffHelperBase','jalview.io.gff.SequenceOntologyFactory','jalview.datamodel.MappingType','jalview.datamodel.SequenceFeature','jalview.util.StringUtils','jalview.util.MapList']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Gff3Helper", null, 'jalview.io.gff.GffHelperBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parseNameValuePairs$S', function (text) {
return $I$(1,"parseNameValuePairs$S$S$C$S",[text, ";", "=", ","]);
}, 1);

Clazz.newMeth(C$, 'processGff$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z', function (seq, gff, align, newseqs, relaxedIdMatching) {
var sf=null;
if (gff.length == 9) {
var soTerm=gff[2];
var atts=gff[8];
var attributes=C$.parseNameValuePairs$S(atts);
var so=$I$(2).getInstance$();
if (so.isA$S$S(soTerm, "protein_match")) {
sf=this.processProteinMatch$java_util_Map$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z(attributes, seq, gff, align, newseqs, relaxedIdMatching);
} else if (so.isA$S$S(soTerm, "nucleotide_match")) {
sf=this.processNucleotideMatch$java_util_Map$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z(attributes, seq, gff, align, newseqs, relaxedIdMatching);
} else {
sf=this.buildSequenceFeature$SA$java_util_Map(gff, attributes);
}} else {
sf=this.buildSequenceFeature$SA$java_util_Map(gff, null);
}return sf;
});

Clazz.newMeth(C$, 'processNucleotideMatch$java_util_Map$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z', function (attributes, seq, gffColumns, align, newseqs, relaxedIdMatching) {
var strand=gffColumns[6];
if ("-".equals$O(strand)) {
System.err.println$S("Skipping mapping from reverse complement as not yet supported");
return null;
}var targets=attributes.get$O("Target");
if (targets == null ) {
System.err.println$S("\'Target\' missing in GFF");
return null;
}for (var target, $target = targets.iterator$(); $target.hasNext$()&&((target=($target.next$())),1);) {
var tokens=target.split$S(" ");
if (tokens.length < 3) {
System.err.println$S("Incomplete Target: " + target);
continue;
}var targetId=this.findTargetId$S$java_util_Map(tokens[0], attributes);
var mappedSequence1=this.findSequence$S$jalview_datamodel_AlignmentI$java_util_List$Z(targetId, align, newseqs, relaxedIdMatching);
var mappedSequence=mappedSequence1;
if (mappedSequence == null ) {
continue;
}var acf=this.getMapping$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(align, seq, mappedSequence);
try {
var toStart=Integer.parseInt$S(tokens[1]);
var toEnd=Integer.parseInt$S(tokens[2]);
if (tokens.length > 3 && "-".equals$O(tokens[3]) ) {
var temp=toStart;
toStart=toEnd;
toEnd=temp;
}var fromStart=Integer.parseInt$S(gffColumns[3]);
var fromEnd=Integer.parseInt$S(gffColumns[4]);
var mapping=this.constructMappingFromAlign$I$I$I$I$jalview_datamodel_MappingType(fromStart, fromEnd, toStart, toEnd, $I$(3).NucleotideToNucleotide);
if (mapping != null ) {
acf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(seq, mappedSequence, mapping);
align.addCodonFrame$jalview_datamodel_AlignedCodonFrame(acf);
}} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
System.err.println$S("Invalid start or end in Target " + target);
} else {
throw nfe;
}
}
}
var sf=this.buildSequenceFeature$SA$java_util_Map(gffColumns, attributes);
return sf;
});

Clazz.newMeth(C$, 'findTargetId$S$java_util_Map', function (target, set) {
return target;
});

Clazz.newMeth(C$, 'processProteinMatch$java_util_Map$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z', function (set, seq, gffColumns, align, newseqs, relaxedIdMatching) {
var sf=this.buildSequenceFeature$SA$java_util_Map(gffColumns, set);
var targets=set.get$O("Target");
if (targets != null ) {
for (var target, $target = targets.iterator$(); $target.hasNext$()&&((target=($target.next$())),1);) {
var mappedSequence1=this.findSequence$S$jalview_datamodel_AlignmentI$java_util_List$Z(this.findTargetId$S$java_util_Map(target, set), align, newseqs, relaxedIdMatching);
var mappedSequence=mappedSequence1;
if (mappedSequence == null ) {
continue;
}var sequenceFeatureLength=1 + sf.getEnd$() - sf.getBegin$();
var sf2=Clazz.new_([sf, 1, sequenceFeatureLength, sf.getFeatureGroup$(), sf.getScore$()],$I$(4,1).c$$jalview_datamodel_SequenceFeature$I$I$S$F);
mappedSequence.addSequenceFeature$jalview_datamodel_SequenceFeature(sf2);
var accessionId=$I$(5,"listToDelimitedString$java_util_List$S",[set.get$O("Name"), ","]);
if (accessionId.length$() > 0) {
var database=sf.getType$();
var qualifiedAccId=database + "|" + accessionId ;
sf2.setValue$S$O("$RENAME_TO$", qualifiedAccId);
}var alco=this.getMapping$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(align, seq, mappedSequence);
var from=Clazz.array(Integer.TYPE, -1, [sf.getBegin$(), sf.getEnd$()]);
var to=Clazz.array(Integer.TYPE, -1, [1, sequenceFeatureLength]);
var mapping=Clazz.new_($I$(6,1).c$$IA$IA$I$I,[from, to, 1, 1]);
alco.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(seq, mappedSequence, mapping);
align.addCodonFrame$jalview_datamodel_AlignedCodonFrame(alco);
}
}return sf;
});

Clazz.newMeth(C$, 'buildSequenceFeature$SA$I$S$java_util_Map', function (gff, typeColumn, group, attributes) {
var sf=C$.superclazz.prototype.buildSequenceFeature$SA$I$S$java_util_Map.apply(this, [gff, typeColumn, group, attributes]);
var desc=this.getDescription$jalview_datamodel_SequenceFeature$java_util_Map(sf, attributes);
if (desc != null ) {
sf.setDescription$S(desc);
}return sf;
});

Clazz.newMeth(C$, 'getDescription$jalview_datamodel_SequenceFeature$java_util_Map', function (sf, attributes) {
var desc=null;
var target=sf.getValue$S("Target");
if (target != null ) {
desc=target.split$S(" ")[0];
}var so=$I$(2).getInstance$();
var type=sf.getType$();
if (so.isA$S$S(type, "sequence_variant")) {
desc=$I$(5,"listToDelimitedString$java_util_List$S",[attributes.get$O("alleles"), ","]);
}if ("NMD_transcript_variant".equals$O(type) || so.isA$S$S(type, "transcript") || so.isA$S$S(type, "exon")  ) {
desc=$I$(5,"listToDelimitedString$java_util_List$S",[attributes.get$O("Name"), ","]);
}if (desc == null ) {
desc=sf.getValue$S("ID");
}desc=$I$(5,"urlDecode$S$S",[desc, ",=;\t%"]);
return desc;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
