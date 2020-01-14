(function(){var P$=Clazz.newPackage("jalview.io.gff"),I$=[[0,'jalview.datamodel.MappingType']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ExonerateHelper", null, 'jalview.io.gff.Gff2Helper');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['processGff$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z','processGff$'], function (seq, gffColumns, align, newseqs, relaxedIdMatching) {
var attr=gffColumns[8];
var set=P$.Gff2Helper.parseNameValuePairs$S(attr);
try {
this.processGffSimilarity$java_util_Map$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z(set, seq, gffColumns, align, newseqs, relaxedIdMatching);
} catch (ivfe) {
if (Clazz.exceptionOf(ivfe,"java.io.IOException")){
System.err.println$O(ivfe);
} else {
throw ivfe;
}
}
return null;
});

Clazz.newMeth(C$, 'processGffSimilarity$java_util_Map$jalview_datamodel_SequenceI$SA$jalview_datamodel_AlignmentI$java_util_List$Z', function (set, seq, gff, align, newseqs, relaxedIdMatching) {
var featureIsOnTarget=true;
var mapTo=set.get$O("Query");
if (mapTo == null ) {
mapTo=set.get$O("Target");
featureIsOnTarget=false;
}var type=C$.getMappingType$S(gff[1]);
if (type == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Sorry, I don't handle " + gff[1]]);
}if (mapTo == null  || mapTo.size$() != 1 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Expecting exactly one sequence in Query or Target field (got " + mapTo + ")" ]);
}var mappedSequence=this.findSequence$S$jalview_datamodel_AlignmentI$java_util_List$Z(mapTo.get$I(0), align, newseqs, relaxedIdMatching);
var mapFromSequence=seq;
var mapToSequence=mappedSequence;
if ((type === $I$(1).NucleotideToPeptide  && featureIsOnTarget ) || (type === $I$(1).PeptideToNucleotide  && !featureIsOnTarget ) ) {
mapFromSequence=mappedSequence;
mapToSequence=seq;
}var acf=this.getMapping$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI(align, mapFromSequence, mapToSequence);
var strand=gff[6];
var forwardStrand=true;
if ("-".equals$O(strand)) {
forwardStrand=false;
} else if (!"+".equals$O(strand)) {
System.err.println$S("Strand must be specified for alignment");
return;
}var alignedRegions=set.get$O("Align");
for (var region, $region = alignedRegions.iterator$(); $region.hasNext$()&&((region=($region.next$())),1);) {
var mapping=this.buildMapping$S$jalview_datamodel_MappingType$Z$Z$SA(region, type, forwardStrand, featureIsOnTarget, gff);
if (mapping == null ) {
continue;
}acf.addMap$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(mapFromSequence, mapToSequence, mapping);
}
align.addCodonFrame$jalview_datamodel_AlignedCodonFrame(acf);
});

Clazz.newMeth(C$, 'buildMapping$S$jalview_datamodel_MappingType$Z$Z$SA', function (region, type, forwardStrand, featureIsOnTarget, gff) {
var tokens=region.split$S(" ");
if (tokens.length != 3) {
System.err.println$S("Malformed Align descriptor: " + region);
return null;
}var alignFromStart;
var alignToStart;
var alignCount;
try {
alignFromStart=Integer.parseInt$S(tokens[0]);
alignToStart=Integer.parseInt$S(tokens[1]);
alignCount=Integer.parseInt$S(tokens[2]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
System.err.println$S(nfe.toString());
return null;
} else {
throw nfe;
}
}
var fromStart;
var fromEnd;
var toStart;
var toEnd;
if (featureIsOnTarget) {
fromStart=alignToStart;
toStart=alignFromStart;
toEnd=forwardStrand ? toStart + alignCount - 1 : toStart - (alignCount - 1);
var toLength=Math.abs(toEnd - toStart) + 1;
var fromLength=(toLength * type.getFromRatio$()/type.getToRatio$()|0);
fromEnd=fromStart + fromLength - 1;
} else {
fromStart=alignFromStart;
fromEnd=alignFromStart + alignCount - 1;
var fromLength=fromEnd - fromStart + 1;
var toLength=(fromLength * type.getToRatio$()/type.getFromRatio$()|0);
toStart=alignToStart;
if (forwardStrand) {
toEnd=toStart + toLength - 1;
} else {
toEnd=toStart - (toLength - 1);
}}var codonmapping=this.constructMappingFromAlign$I$I$I$I$jalview_datamodel_MappingType(fromStart, fromEnd, toStart, toEnd, type);
return codonmapping;
});

Clazz.newMeth(C$, 'getMappingType$S', function (model) {
var result=null;
if (model.contains$CharSequence("protein2dna") || model.contains$CharSequence("protein2genome") ) {
result=$I$(1).PeptideToNucleotide;
} else if (model.contains$CharSequence("coding2coding") || model.contains$CharSequence("coding2genome") || model.contains$CharSequence("cdna2genome") || model.contains$CharSequence("genome2genome")  ) {
result=$I$(1).NucleotideToNucleotide;
}return result;
}, 1);

Clazz.newMeth(C$, 'recognises$SA', function (columns) {
if (!"similarity".equalsIgnoreCase$S(columns[2])) {
return false;
}var model=columns[1];
if (model != null ) {
var mdl=model.toLowerCase$();
if (mdl.contains$CharSequence("protein2dna") || mdl.contains$CharSequence("protein2genome") || mdl.contains$CharSequence("coding2coding") || mdl.contains$CharSequence("coding2genome") || mdl.contains$CharSequence("cdna2genome") || mdl.contains$CharSequence("genome2genome")  ) {
return true;
}}System.err.println$S("Sorry, I don't handle exonerate model " + model);
return false;
}, 1);

Clazz.newMeth(C$, 'buildSequenceFeature$SA$java_util_Map', function (gff, set) {
var sf=C$.superclazz.prototype.buildSequenceFeature$SA$I$S$java_util_Map.apply(this, [gff, 2, "exonerate", set]);
return sf;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
