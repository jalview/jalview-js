(function(){var P$=Clazz.newPackage("jalview.io.vcf"),p$1={},I$=[[0,'java.util.HashMap','jalview.util.MessageManager','Thread','jalview.bin.Console','java.io.File','jalview.ext.htsjdk.HtsContigDb','java.util.Locale','jalview.bin.Cache','jalview.ext.htsjdk.VCFReader','java.util.ArrayList','jalview.datamodel.features.FeatureSource','htsjdk.variant.vcf.VCFHeaderLineType','jalview.datamodel.features.FeatureAttributeType','jalview.datamodel.features.FeatureSources','java.util.regex.Pattern',['jalview.io.vcf.VCFLoader','.VCFMap'],'jalview.util.MapList','jalview.analysis.Dna','StringBuilder','jalview.datamodel.SequenceFeature','htsjdk.variant.vcf.VCFHeaderLineCount','jalview.util.StringUtils','java.util.HashSet','jalview.ext.ensembl.EnsemblMap','jalview.util.MappingUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VCFLoader", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['VCFMap',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.csqConsequenceFieldIndex=-1;
this.csqAlleleFieldIndex=-1;
this.csqAlleleNumberFieldIndex=-1;
this.csqFeatureFieldIndex=-1;
},1);

C$.$fields$=[['I',['csqConsequenceFieldIndex','csqAlleleFieldIndex','csqAlleleNumberFieldIndex','csqFeatureFieldIndex'],'S',['vcfFilePath','vcfSpecies','vcfAssembly','sourceId'],'O',['assemblyMappings','java.util.Map','reader','jalview.ext.htsjdk.VCFReader','header','htsjdk.variant.vcf.VCFHeader','dictionary','htsjdk.samtools.SAMSequenceDictionary','vcfFieldsOfInterest','java.util.List','vepFieldsOfInterest','java.util.Map','badData','java.util.Set']]]

Clazz.newMeth(C$, 'c$$S',  function (vcfFile) {
;C$.$init$.apply(this);
try {
p$1.initialise$S.apply(this, [vcfFile]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Error opening VCF file: " + e.getMessage$());
} else {
throw e;
}
}
this.assemblyMappings=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'loadVCF$jalview_datamodel_SequenceIA$jalview_api_AlignViewControllerGuiI',  function (seqs, gui) {
if (gui != null ) {
gui.setStatus$S($I$(2).getString$S("label.searching_vcf"));
}((P$.VCFLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VCFLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('Thread'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.io.vcf.VCFLoader'].doLoad$jalview_datamodel_SequenceIA$jalview_api_AlignViewControllerGuiI.apply(this.b$['jalview.io.vcf.VCFLoader'], [this.$finals$.seqs, this.$finals$.gui]);
});
})()
), Clazz.new_($I$(3,1),[this, {gui:gui,seqs:seqs}],P$.VCFLoader$1)).start$();
});

Clazz.newMeth(C$, 'loadVCFContig$S',  function (contig) {
var headerLine=this.header.getOtherHeaderLine$S("reference");
if (headerLine == null ) {
$I$(4).error$S("VCF reference header not found");
return null;
}var ref=headerLine.getValue$();
if (ref.startsWith$S("file://")) {
ref=ref.substring$I(7);
}this.setSpeciesAndAssembly$S(ref);
var seq=null;
var dbFile=Clazz.new_($I$(5,1).c$$S,[ref]);
if (dbFile.exists$()) {
var db=Clazz.new_($I$(6,1).c$$S$java_io_File,["", dbFile]);
seq=db.getSequenceProxy$S(contig);
this.loadSequenceVCF$jalview_datamodel_SequenceI(seq);
db.close$();
} else {
$I$(4).error$S("VCF reference not found: " + ref);
}return seq;
});

Clazz.newMeth(C$, 'doLoad$jalview_datamodel_SequenceIA$jalview_api_AlignViewControllerGuiI',  function (seqs, gui) {
try {
var ref=this.header.getOtherHeaderLine$S("reference");
var reference=ref == null  ? null : ref.getValue$();
this.setSpeciesAndAssembly$S(reference);
var varCount=0;
var seqCount=0;
for (var seq, $seq = 0, $$seq = seqs; $seq<$$seq.length&&((seq=($$seq[$seq])),1);$seq++) {
var added=this.loadSequenceVCF$jalview_datamodel_SequenceI(seq);
if (added > 0) {
++seqCount;
varCount+=added;
this.transferAddedFeatures$jalview_datamodel_SequenceI(seq);
}}
if (gui != null ) {
var msg=$I$(2,"formatMessage$S$OA",["label.added_vcf", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(varCount), Integer.valueOf$I(seqCount)])]);
gui.setStatus$S(msg);
if (gui.getFeatureSettingsUI$() != null ) {
gui.getFeatureSettingsUI$().discoverAllFeatureData$();
}}} catch (e) {
System.err.println$S("Error processing VCF: " + e.getMessage$());
e.printStackTrace$();
if (gui != null ) {
gui.setStatus$S("Error occurred - see console for details");
}} finally {
if (this.reader != null ) {
try {
this.reader.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}this.header=null;
this.dictionary=null;
}
});

Clazz.newMeth(C$, 'setSpeciesAndAssembly$S',  function (reference) {
if (reference == null ) {
$I$(4).error$S("No VCF ##reference found, defaulting to grch37:homo_sapiens");
reference="grch37";
}reference=reference.toLowerCase$java_util_Locale($I$(7).ROOT);
var prop=$I$(8,"getDefault$S$S",["VCF_ASSEMBLY", "assembly19=GRCh37,hs37=GRCh37,grch37=GRCh37,grch38=GRCh38"]);
for (var token, $token = 0, $$token = prop.split$S(","); $token<$$token.length&&((token=($$token[$token])),1);$token++) {
var tokens=token.split$S("=");
if (tokens.length == 2) {
if (reference.contains$CharSequence(tokens[0].trim$().toLowerCase$java_util_Locale($I$(7).ROOT))) {
this.vcfAssembly=tokens[1].trim$();
break;
}}}
this.vcfSpecies="homo_sapiens";
prop=$I$(8).getProperty$S("VCF_SPECIES");
if (prop != null ) {
for (var token, $token = 0, $$token = prop.split$S(","); $token<$$token.length&&((token=($$token[$token])),1);$token++) {
var tokens=token.split$S("=");
if (tokens.length == 2) {
if (reference.contains$CharSequence(tokens[0].trim$().toLowerCase$java_util_Locale($I$(7).ROOT))) {
this.vcfSpecies=tokens[1].trim$();
break;
}}}
}});

Clazz.newMeth(C$, 'initialise$S',  function (filePath) {
this.vcfFilePath=filePath;
this.reader=Clazz.new_($I$(9,1).c$$S,[filePath]);
this.header=this.reader.getFileHeader$();
try {
this.dictionary=this.header.getSequenceDictionary$();
} catch (e) {
if (Clazz.exceptionOf(e,"htsjdk.samtools.SAMException")){
} else {
throw e;
}
}
this.sourceId=filePath;
this.saveMetadata$S(this.sourceId);
this.parseCsqHeader$();
}, p$1);

Clazz.newMeth(C$, 'saveMetadata$S',  function (theSourceId) {
var vcfFieldPatterns=p$1.getFieldMatchers$S$S.apply(this, ["VCF_FIELDS", ".*"]);
this.vcfFieldsOfInterest=Clazz.new_($I$(10,1));
var metadata=Clazz.new_($I$(11,1).c$$S,[theSourceId]);
for (var info, $info = this.header.getInfoHeaderLines$().iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var attributeId=info.getID$();
var desc=info.getDescription$();
var type=info.getType$();
var attType=null;
switch (type) {
case $I$(12).Character:
attType=$I$(13).Character;
break;
case $I$(12).Flag:
attType=$I$(13).Flag;
break;
case $I$(12).Float:
attType=$I$(13).Float;
break;
case $I$(12).Integer:
attType=$I$(13).Integer;
break;
case $I$(12).String:
attType=$I$(13).String;
break;
}
metadata.setAttributeName$S$S(attributeId, desc);
metadata.setAttributeType$S$jalview_datamodel_features_FeatureAttributeType(attributeId, attType);
if (p$1.isFieldWanted$S$java_util_List.apply(this, [attributeId, vcfFieldPatterns])) {
this.vcfFieldsOfInterest.add$O(attributeId);
}}
$I$(14).getInstance$().addSource$S$jalview_datamodel_features_FeatureSource(theSourceId, metadata);
});

Clazz.newMeth(C$, 'isFieldWanted$S$java_util_List',  function (id, filters) {
for (var p, $p = filters.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (p.matcher$CharSequence(id.toUpperCase$java_util_Locale($I$(7).ROOT)).matches$()) {
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'parseCsqHeader$',  function () {
var vepFieldFilters=p$1.getFieldMatchers$S$S.apply(this, ["VEP_FIELDS", ".*"]);
this.vepFieldsOfInterest=Clazz.new_($I$(1,1));
var csqInfo=this.header.getInfoHeaderLine$S("CSQ");
if (csqInfo == null ) {
return;
}var desc=csqInfo.getDescription$();
var spacePos=desc.lastIndexOf$S(" ");
desc=desc.substring$I(spacePos + 1);
if (desc != null ) {
var format=desc.split$S("\\|");
var index=0;
for (var field, $field = 0, $$field = format; $field<$$field.length&&((field=($$field[$field])),1);$field++) {
if ("Consequence".equals$O(field)) {
this.csqConsequenceFieldIndex=index;
}if ("ALLELE_NUM".equals$O(field)) {
this.csqAlleleNumberFieldIndex=index;
}if ("Allele".equals$O(field)) {
this.csqAlleleFieldIndex=index;
}if ("Feature".equals$O(field)) {
this.csqFeatureFieldIndex=index;
}if (p$1.isFieldWanted$S$java_util_List.apply(this, [field, vepFieldFilters])) {
this.vepFieldsOfInterest.put$O$O(Integer.valueOf$I(index), field);
}++index;
}
}});

Clazz.newMeth(C$, 'getFieldMatchers$S$S',  function (key, def) {
var pref=$I$(8).getDefault$S$S(key, def);
var patterns=Clazz.new_($I$(10,1));
var tokens=pref.split$S(",");
for (var token, $token = 0, $$token = tokens; $token<$$token.length&&((token=($$token[$token])),1);$token++) {
try {
patterns.add$O($I$(15,"compile$S",[token.toUpperCase$java_util_Locale($I$(7).ROOT)]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.regex.PatternSyntaxException")){
System.err.println$S("Invalid pattern ignored: " + token);
} else {
throw e;
}
}
}
return patterns;
}, p$1);

Clazz.newMeth(C$, 'transferAddedFeatures$jalview_datamodel_SequenceI',  function (seq) {
var dbrefs=seq.getDBRefs$();
if (dbrefs == null ) {
return;
}for (var dbref, $dbref = dbrefs.iterator$(); $dbref.hasNext$()&&((dbref=($dbref.next$())),1);) {
var mapping=dbref.getMap$();
if (mapping == null  || mapping.getTo$() == null  ) {
continue;
}var mapTo=mapping.getTo$();
var map=mapping.getMap$();
if (map.getFromRatio$() == 3) {
} else {
var features=seq.getFeatures$().getPositionalFeatures$SA(Clazz.array(String, -1, ["sequence_variant"]));
for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if ("VCF".equals$O(sf.getFeatureGroup$())) {
this.transferFeature$jalview_datamodel_SequenceFeature$jalview_datamodel_SequenceI$jalview_util_MapList(sf, mapTo, map);
}}
}}
});

Clazz.newMeth(C$, 'loadSequenceVCF$jalview_datamodel_SequenceI',  function (seq) {
var vcfMap=p$1.getVcfMap$jalview_datamodel_SequenceI.apply(this, [seq]);
if (vcfMap == null ) {
return 0;
}var dss=seq.getDatasetSequence$();
if (dss == null ) {
dss=seq;
}return this.addVcfVariants$jalview_datamodel_SequenceI$jalview_io_vcf_VCFLoader_VCFMap(dss, vcfMap);
});

Clazz.newMeth(C$, 'getVcfMap$jalview_datamodel_SequenceI',  function (seq) {
var vcfMap=null;
if (this.dictionary != null ) {
vcfMap=p$1.getContigMap$jalview_datamodel_SequenceI.apply(this, [seq]);
}if (vcfMap != null ) {
return vcfMap;
}var seqCoords=seq.getGeneLoci$();
if (seqCoords == null ) {
$I$(4,"warn$S",[String.format$S$OA("Can\'t query VCF for %s as chromosome coordinates not known", Clazz.array(java.lang.Object, -1, [seq.getName$()]))]);
return null;
}var species=seqCoords.getSpeciesId$();
var chromosome=seqCoords.getChromosomeId$();
var seqRef=seqCoords.getAssemblyId$();
var map=seqCoords.getMapping$();
if (!this.vcfSpecies.equalsIgnoreCase$S(species)) {
$I$(4,"warn$S",["No VCF loaded to " + seq.getName$() + " as species not matched" ]);
return null;
}if (seqRef.equalsIgnoreCase$S(this.vcfAssembly)) {
return Clazz.new_($I$(16,1).c$$S$jalview_util_MapList,[this, null, chromosome, map]);
}var toVcfRanges=Clazz.new_($I$(10,1));
var fromSequenceRanges=Clazz.new_($I$(10,1));
for (var range, $range = map.getToRanges$().iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var fromRange=map.locateInFrom$I$I(range[0], range[1]);
if (fromRange == null ) {
continue;
}var newRange=this.mapReferenceRange$IA$S$S$S$S(range, chromosome, "human", seqRef, this.vcfAssembly);
if (newRange == null ) {
$I$(4,"error$S",[String.format$S$OA("Failed to map %s:%s:%s:%d:%d to %s", Clazz.array(java.lang.Object, -1, [species, chromosome, seqRef, Integer.valueOf$I(range[0]), Integer.valueOf$I(range[1]), this.vcfAssembly]))]);
continue;
} else {
toVcfRanges.add$O(newRange);
fromSequenceRanges.add$O(fromRange);
}}
return Clazz.new_([this, null, chromosome, Clazz.new_($I$(17,1).c$$java_util_List$java_util_List$I$I,[fromSequenceRanges, toVcfRanges, 1, 1])],$I$(16,1).c$$S$jalview_util_MapList);
}, p$1);

Clazz.newMeth(C$, 'getContigMap$jalview_datamodel_SequenceI',  function (seq) {
var id=seq.getName$();
var contig=this.dictionary.getSequence$S(id);
if (contig != null ) {
var len=seq.getLength$();
if (len == contig.getSequenceLength$()) {
var map=Clazz.new_([Clazz.array(Integer.TYPE, -1, [1, len]), Clazz.array(Integer.TYPE, -1, [1, len]), 1, 1],$I$(17,1).c$$IA$IA$I$I);
return Clazz.new_($I$(16,1).c$$S$jalview_util_MapList,[this, null, id, map]);
}}return null;
}, p$1);

Clazz.newMeth(C$, 'addVcfVariants$jalview_datamodel_SequenceI$jalview_io_vcf_VCFLoader_VCFMap',  function (seq, map) {
var forwardStrand=map.map.isToForwardStrand$();
var count=0;
for (var range, $range = map.map.getToRanges$().iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var vcfStart=Math.min(range[0], range[1]);
var vcfEnd=Math.max(range[0], range[1]);
try {
var variants=this.reader.query$S$I$I(map.chromosome, vcfStart, vcfEnd);
while (variants.hasNext$()){
var variant=variants.next$();
var featureRange=map.map.locateInFrom$I$I(variant.getStart$(), variant.getEnd$());
if (featureRange != null ) {
var featureStart=Math.min(featureRange[0], featureRange[1]);
var featureEnd=Math.max(featureRange[0], featureRange[1]);
if (featureEnd - featureStart == variant.getEnd$() - variant.getStart$()) {
count+=this.addAlleleFeatures$jalview_datamodel_SequenceI$htsjdk_variant_variantcontext_VariantContext$I$I$Z(seq, variant, featureStart, featureEnd, forwardStrand);
}}}
variants.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"htsjdk.tribble.TribbleException")){
var msg=String.format$S$OA("Error reading VCF for %s:%d-%d: %s ", Clazz.array(java.lang.Object, -1, [map.chromosome, Integer.valueOf$I(vcfStart), Integer.valueOf$I(vcfEnd), e.getLocalizedMessage$()]));
$I$(4).error$S(msg);
} else {
throw e;
}
}
}
return count;
});

Clazz.newMeth(C$, 'getAttributeValue$htsjdk_variant_variantcontext_VariantContext$S$I',  function (variant, attributeName, alleleIndex) {
var att=variant.getAttribute$S(attributeName);
if (Clazz.instanceOf(att, "java.lang.String")) {
return att;
} else if (Clazz.instanceOf(att, "java.util.ArrayList")) {
return (att).get$I(alleleIndex);
}return null;
});

Clazz.newMeth(C$, 'addAlleleFeatures$jalview_datamodel_SequenceI$htsjdk_variant_variantcontext_VariantContext$I$I$Z',  function (seq, variant, featureStart, featureEnd, forwardStrand) {
var added=0;
var altAlleleCount=variant.getAlternateAlleles$().size$();
for (var i=0; i < altAlleleCount; i++) {
added+=this.addAlleleFeature$jalview_datamodel_SequenceI$htsjdk_variant_variantcontext_VariantContext$I$I$I$Z(seq, variant, i, featureStart, featureEnd, forwardStrand);
}
return added;
});

Clazz.newMeth(C$, 'addAlleleFeature$jalview_datamodel_SequenceI$htsjdk_variant_variantcontext_VariantContext$I$I$I$Z',  function (seq, variant, altAlleleIndex, featureStart, featureEnd, forwardStrand) {
var reference=variant.getReference$().getBaseString$();
var alt=variant.getAlternateAllele$I(altAlleleIndex);
var allele=alt.getBaseString$();
var referenceLength=reference.length$();
if (!forwardStrand && allele.length$() > referenceLength  && allele.startsWith$S(reference) ) {
featureStart-=referenceLength;
featureEnd=featureStart;
var insertAfter=seq.getCharAt$I(featureStart - seq.getStart$());
reference=$I$(18,"reverseComplement$S",[String.valueOf$C(insertAfter)]);
allele=allele.substring$I(referenceLength) + reference;
}var sb=Clazz.new_($I$(19,1));
sb.append$S(forwardStrand ? reference : $I$(18).reverseComplement$S(reference));
sb.append$S(",");
sb.append$S(forwardStrand ? allele : $I$(18).reverseComplement$S(allele));
var alleles=sb.toString();
var consequence=p$1.getConsequenceForAlleleAndFeature$htsjdk_variant_variantcontext_VariantContext$S$I$I$I$S$I.apply(this, [variant, "CSQ", altAlleleIndex, this.csqAlleleFieldIndex, this.csqAlleleNumberFieldIndex, seq.getName$().toLowerCase$java_util_Locale($I$(7).ROOT), this.csqFeatureFieldIndex]);
var type="sequence_variant";
if (consequence != null ) {
type=this.getOntologyTerm$S(consequence);
}var sf=Clazz.new_($I$(20,1).c$$S$S$I$I$S,[type, alleles, featureStart, featureEnd, "VCF"]);
sf.setSource$S(this.sourceId);
this.addFeatureAttribute$jalview_datamodel_SequenceFeature$S$S(sf, "alleles", alleles);
this.addFeatureAttribute$jalview_datamodel_SequenceFeature$S$S(sf, "POS", String.valueOf$I(variant.getStart$()));
this.addFeatureAttribute$jalview_datamodel_SequenceFeature$S$S(sf, "ID", variant.getID$());
this.addFeatureAttribute$jalview_datamodel_SequenceFeature$S$S(sf, "QUAL", String.valueOf$D(variant.getPhredScaledQual$()));
this.addFeatureAttribute$jalview_datamodel_SequenceFeature$S$S(sf, "FILTER", this.getFilter$htsjdk_variant_variantcontext_VariantContext(variant));
this.addAlleleProperties$htsjdk_variant_variantcontext_VariantContext$jalview_datamodel_SequenceFeature$I$S(variant, sf, altAlleleIndex, consequence);
seq.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
return 1;
});

Clazz.newMeth(C$, 'getFilter$htsjdk_variant_variantcontext_VariantContext',  function (variant) {
var filters=variant.getFilters$();
if (filters.isEmpty$()) {
return ".";
}var iterator=filters.iterator$();
var first=iterator.next$();
if (filters.size$() == 1) {
return first;
}var sb=Clazz.new_($I$(19,1).c$$S,[first]);
while (iterator.hasNext$()){
sb.append$S(";").append$S(iterator.next$());
}
return sb.toString();
});

Clazz.newMeth(C$, 'addFeatureAttribute$jalview_datamodel_SequenceFeature$S$S',  function (sf, key, value) {
if (value != null  && !value.isEmpty$()  && !".".equals$O(value) ) {
sf.setValue$S$O(key, value);
}});

Clazz.newMeth(C$, 'getOntologyTerm$S',  function (consequence) {
var type="sequence_variant";
if (this.csqAlleleFieldIndex == -1) {
return type;
}if (consequence != null ) {
var csqFields=consequence.split$S("\\|");
if (csqFields.length > this.csqConsequenceFieldIndex) {
type=csqFields[this.csqConsequenceFieldIndex];
}} else {
}if (type != null ) {
var pos=type.indexOf$I("&");
if (pos > 0) {
type=type.substring$I$I(0, pos);
}}return type;
});

Clazz.newMeth(C$, 'getConsequenceForAlleleAndFeature$htsjdk_variant_variantcontext_VariantContext$S$I$I$I$S$I',  function (variant, vcfInfoId, altAlleleIndex, alleleFieldIndex, alleleNumberFieldIndex, seqName, featureFieldIndex) {
if (alleleFieldIndex == -1 || featureFieldIndex == -1 ) {
return null;
}var value=variant.getAttribute$S(vcfInfoId);
if (value == null  || !(Clazz.instanceOf(value, "java.util.List")) ) {
return null;
}var consequences=value;
for (var consequence, $consequence = consequences.iterator$(); $consequence.hasNext$()&&((consequence=($consequence.next$())),1);) {
var csqFields=consequence.split$S("\\|");
if (csqFields.length > featureFieldIndex) {
var featureIdentifier=csqFields[featureFieldIndex];
if (featureIdentifier.length$() > 4 && seqName.indexOf$S(featureIdentifier.toLowerCase$java_util_Locale($I$(7).ROOT)) > -1 ) {
if (p$1.matchAllele$htsjdk_variant_variantcontext_VariantContext$I$SA$I$I.apply(this, [variant, altAlleleIndex, csqFields, alleleFieldIndex, alleleNumberFieldIndex])) {
return consequence;
}}}}
return null;
}, p$1);

Clazz.newMeth(C$, 'matchAllele$htsjdk_variant_variantcontext_VariantContext$I$SA$I$I',  function (variant, altAlleleIndex, csqFields, alleleFieldIndex, alleleNumberFieldIndex) {
if (alleleNumberFieldIndex > -1) {
if (csqFields.length <= alleleNumberFieldIndex) {
return false;
}var alleleNum=csqFields[alleleNumberFieldIndex];
return String.valueOf$I(altAlleleIndex + 1).equals$O(alleleNum);
}if (alleleFieldIndex > -1 && csqFields.length > alleleFieldIndex ) {
var csqAllele=csqFields[alleleFieldIndex];
var vcfAllele=variant.getAlternateAllele$I(altAlleleIndex).getBaseString$();
return csqAllele.equals$O(vcfAllele);
}return false;
}, p$1);

Clazz.newMeth(C$, 'addAlleleProperties$htsjdk_variant_variantcontext_VariantContext$jalview_datamodel_SequenceFeature$I$S',  function (variant, sf, altAlelleIndex, consequence) {
var atts=variant.getAttributes$();
for (var att, $att = atts.entrySet$().iterator$(); $att.hasNext$()&&((att=($att.next$())),1);) {
var key=att.getKey$();
if ("CSQ".equals$O(key)) {
this.addConsequences$htsjdk_variant_variantcontext_VariantContext$jalview_datamodel_SequenceFeature$S(variant, sf, consequence);
continue;
}if (!this.vcfFieldsOfInterest.contains$O(key)) {
continue;
}var infoHeader=this.header.getInfoHeaderLine$S(key);
if (infoHeader == null ) {
continue;
}var number=infoHeader.getCountType$();
var index=altAlelleIndex;
if (number === $I$(21).R ) {
++index;
} else if (number !== $I$(21).A ) {
continue;
}var value=this.getAttributeValue$htsjdk_variant_variantcontext_VariantContext$S$I(variant, key, index);
if (value != null  && this.isValid$htsjdk_variant_variantcontext_VariantContext$S$S(variant, key, value) ) {
value=$I$(22,"urlDecode$S$S",[value, ":;=%,"]);
this.addFeatureAttribute$jalview_datamodel_SequenceFeature$S$S(sf, key, value);
}}
});

Clazz.newMeth(C$, 'isValid$htsjdk_variant_variantcontext_VariantContext$S$S',  function (variant, infoId, value) {
if (value == null  || value.isEmpty$()  || ".".equals$O(value) ) {
return true;
}var infoHeader=this.header.getInfoHeaderLine$S(infoId);
if (infoHeader == null ) {
$I$(4).error$S("Field " + infoId + " has no INFO header" );
return false;
}var infoType=infoHeader.getType$();
try {
if (infoType === $I$(12).Integer ) {
Integer.parseInt$S(value);
} else if (infoType === $I$(12).Float ) {
Float.parseFloat$S(value);
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
p$1.logInvalidValue$htsjdk_variant_variantcontext_VariantContext$S$S.apply(this, [variant, infoId, value]);
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'logInvalidValue$htsjdk_variant_variantcontext_VariantContext$S$S',  function (variant, infoId, value) {
if (this.badData == null ) {
this.badData=Clazz.new_($I$(23,1));
}var token=infoId + ":" + value ;
if (!this.badData.contains$O(token)) {
this.badData.add$O(token);
$I$(4,"error$S",[String.format$S$OA("Invalid VCF data at %s:%d %s=%s", Clazz.array(java.lang.Object, -1, [variant.getContig$(), Integer.valueOf$I(variant.getStart$()), infoId, value]))]);
}}, p$1);

Clazz.newMeth(C$, 'addConsequences$htsjdk_variant_variantcontext_VariantContext$jalview_datamodel_SequenceFeature$S',  function (variant, sf, myConsequence) {
var value=variant.getAttribute$S("CSQ");
if (value == null  || !(Clazz.instanceOf(value, "java.util.List")) ) {
return;
}var consequences=value;
var csqValues=Clazz.new_($I$(1,1));
for (var consequence, $consequence = consequences.iterator$(); $consequence.hasNext$()&&((consequence=($consequence.next$())),1);) {
if (myConsequence == null  || myConsequence.equals$O(consequence) ) {
var csqFields=consequence.split$S("\\|");
var i=0;
for (var field, $field = 0, $$field = csqFields; $field<$$field.length&&((field=($$field[$field])),1);$field++) {
if (field != null  && field.length$() > 0 ) {
var id=this.vepFieldsOfInterest.get$O(Integer.valueOf$I(i));
if (id != null ) {
field=$I$(22,"urlDecode$S$S",[field, ":;=%,"]);
csqValues.put$O$O(id, field);
}}++i;
}
}}
if (!csqValues.isEmpty$()) {
sf.setValue$S$O("CSQ", csqValues);
}});

Clazz.newMeth(C$, 'complement$BA',  function (reference) {
return String.valueOf$C($I$(18,"getComplement$C",[String.fromCharCode(reference[0])]));
});

Clazz.newMeth(C$, 'mapReferenceRange$IA$S$S$S$S',  function (queryRange, chromosome, species, fromRef, toRef) {
var mappedRange=this.findSubsumedRangeMapping$IA$S$S$S$S(queryRange, chromosome, species, fromRef, toRef);
if (mappedRange != null ) {
return mappedRange;
}var mapper=Clazz.new_($I$(24,1));
var mapping=mapper.getAssemblyMapping$S$S$S$S$IA(species, chromosome, fromRef, toRef, queryRange);
if (mapping == null ) {
return null;
}var key=C$.makeRangesKey$S$S$S$S(chromosome, species, fromRef, toRef);
if (!this.assemblyMappings.containsKey$O(key)) {
this.assemblyMappings.put$O$O(key, Clazz.new_($I$(1,1)));
}this.assemblyMappings.get$O(key).put$O$O(queryRange, mapping);
return mapping;
});

Clazz.newMeth(C$, 'findSubsumedRangeMapping$IA$S$S$S$S',  function (queryRange, chromosome, species, fromRef, toRef) {
var key=C$.makeRangesKey$S$S$S$S(chromosome, species, fromRef, toRef);
if (this.assemblyMappings.containsKey$O(key)) {
var mappedRanges=this.assemblyMappings.get$O(key);
for (var mappedRange, $mappedRange = mappedRanges.entrySet$().iterator$(); $mappedRange.hasNext$()&&((mappedRange=($mappedRange.next$())),1);) {
var fromRange=mappedRange.getKey$();
var toRange=mappedRange.getValue$();
if (fromRange[1] - fromRange[0] == toRange[1] - toRange[0]) {
if ($I$(25).rangeContains$IA$IA(fromRange, queryRange)) {
var offset=queryRange[0] - fromRange[0];
var mappedRangeFrom=toRange[0] + offset;
var mappedRangeTo=mappedRangeFrom + (queryRange[1] - queryRange[0]);
return Clazz.array(Integer.TYPE, -1, [mappedRangeFrom, mappedRangeTo]);
}}}
}return null;
});

Clazz.newMeth(C$, 'transferFeature$jalview_datamodel_SequenceFeature$jalview_datamodel_SequenceI$jalview_util_MapList',  function (sf, targetSequence, mapping) {
var mappedRange=mapping.locateInTo$I$I(sf.getBegin$(), sf.getEnd$());
if (mappedRange != null ) {
var group=sf.getFeatureGroup$();
var newBegin=Math.min(mappedRange[0], mappedRange[1]);
var newEnd=Math.max(mappedRange[0], mappedRange[1]);
var copy=Clazz.new_([sf, newBegin, newEnd, group, sf.getScore$()],$I$(20,1).c$$jalview_datamodel_SequenceFeature$I$I$S$F);
targetSequence.addSequenceFeature$jalview_datamodel_SequenceFeature(copy);
}});

Clazz.newMeth(C$, 'makeRangesKey$S$S$S$S',  function (chromosome, species, fromRef, toRef) {
return species + "!" + chromosome + "!" + fromRef + "!" + toRef ;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.VCFLoader, "VCFMap", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['chromosome'],'O',['map','jalview.util.MapList']]]

Clazz.newMeth(C$, 'c$$S$jalview_util_MapList',  function (chr, m) {
;C$.$init$.apply(this);
this.chromosome=chr;
this.map=m;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.chromosome + ":" + this.map.toString() ;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
