(function(){var P$=Clazz.newPackage("jalview.io.gff"),p$1={},I$=[[0,'java.util.ArrayList','java.util.HashMap','java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceOntologyLite", null, null, 'jalview.io.gff.SequenceOntologyI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.TERMS=Clazz.array(String, -2, [Clazz.array(String, -1, ["gene", "gene"]), Clazz.array(String, -1, ["ncRNA_gene", "gene"]), Clazz.array(String, -1, ["snRNA_gene", "gene"]), Clazz.array(String, -1, ["miRNA_gene", "gene"]), Clazz.array(String, -1, ["lincRNA_gene", "gene"]), Clazz.array(String, -1, ["rRNA_gene", "gene"]), Clazz.array(String, -1, ["transcript", "transcript"]), Clazz.array(String, -1, ["mature_transcript", "transcript"]), Clazz.array(String, -1, ["processed_transcript", "transcript"]), Clazz.array(String, -1, ["aberrant_processed_transcript", "transcript"]), Clazz.array(String, -1, ["ncRNA", "transcript"]), Clazz.array(String, -1, ["snRNA", "transcript"]), Clazz.array(String, -1, ["miRNA", "transcript"]), Clazz.array(String, -1, ["lincRNA", "transcript"]), Clazz.array(String, -1, ["lnc_RNA", "transcript"]), Clazz.array(String, -1, ["rRNA", "transcript"]), Clazz.array(String, -1, ["mRNA", "transcript"]), Clazz.array(String, -1, ["sequence_variant", "sequence_variant"]), Clazz.array(String, -1, ["structural_variant", "sequence_variant"]), Clazz.array(String, -1, ["feature_variant", "sequence_variant"]), Clazz.array(String, -1, ["gene_variant", "sequence_variant"]), Clazz.array(String, -1, ["transcript_variant", "sequence_variant"]), Clazz.array(String, -1, ["NMD_transcript_variant", "sequence_variant"]), Clazz.array(String, -1, ["missense_variant", "sequence_variant"]), Clazz.array(String, -1, ["synonymous_variant", "sequence_variant"]), Clazz.array(String, -1, ["frameshift_variant", "sequence_variant"]), Clazz.array(String, -1, ["5_prime_UTR_variant", "sequence_variant"]), Clazz.array(String, -1, ["3_prime_UTR_variant", "sequence_variant"]), Clazz.array(String, -1, ["stop_gained", "sequence_variant"]), Clazz.array(String, -1, ["stop_lost", "sequence_variant"]), Clazz.array(String, -1, ["inframe_deletion", "sequence_variant"]), Clazz.array(String, -1, ["inframe_insertion", "sequence_variant"]), Clazz.array(String, -1, ["splice_region_variant", "sequence_variant"]), Clazz.array(String, -1, ["exon", "exon"]), Clazz.array(String, -1, ["coding_exon", "exon"]), Clazz.array(String, -1, ["CDS", "CDS"]), Clazz.array(String, -1, ["CDS_predicted", "CDS"]), Clazz.array(String, -1, ["protein_match", "protein_match"]), Clazz.array(String, -1, ["nucleotide_match", "nucleotide_match"]), Clazz.array(String, -1, ["cDNA_match", "nucleotide_match"]), Clazz.array(String, -1, ["polypeptide", "polypeptide"])]);
},1);

C$.$fields$=[['O',['TERMS','String[][]','parents','java.util.Map','termsFound','java.util.List','+termsNotFound']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.termsFound=Clazz.new_($I$(1,1));
this.termsNotFound=Clazz.new_($I$(1,1));
p$1.loadStaticData.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'loadStaticData',  function () {
this.parents=Clazz.new_($I$(2,1));
for (var pair, $pair = 0, $$pair = this.TERMS; $pair<$$pair.length&&((pair=($$pair[$pair])),1);$pair++) {
var p=this.parents.get$O(pair[0]);
if (p == null ) {
p=Clazz.new_($I$(1,1));
this.parents.put$O$O(pair[0], p);
}p.add$O(pair[1]);
}
}, p$1);

Clazz.newMeth(C$, 'isA$S$S',  function (child, parent) {
if (child == null  || parent == null  ) {
return false;
}if (child.equals$O(parent)) {
p$1.termFound$S.apply(this, [child]);
return true;
}var p=this.parents.get$O(child);
if (p == null ) {
p$1.termNotFound$S.apply(this, [child]);
return false;
}p$1.termFound$S.apply(this, [child]);
if (p.contains$O(parent)) {
return true;
}return false;
});

Clazz.newMeth(C$, 'termFound$S',  function (term) {
if (!this.termsFound.contains$O(term)) {
{
this.termsFound.add$O(term);
}}}, p$1);

Clazz.newMeth(C$, 'termNotFound$S',  function (term) {
{
if (!this.termsNotFound.contains$O(term)) {
this.termsNotFound.add$O(term);
}}}, p$1);

Clazz.newMeth(C$, 'termsFound$',  function () {
{
$I$(3).sort$java_util_List$java_util_Comparator(this.termsFound, String.CASE_INSENSITIVE_ORDER);
return this.termsFound;
}});

Clazz.newMeth(C$, 'termsNotFound$',  function () {
{
$I$(3).sort$java_util_List$java_util_Comparator(this.termsNotFound, String.CASE_INSENSITIVE_ORDER);
return this.termsNotFound;
}});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
