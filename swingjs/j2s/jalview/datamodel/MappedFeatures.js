(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.util.MappingUtils','jalview.util.StringUtils','jalview.schemes.ResidueProperties','java.util.HashSet','StringBuilder']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MappedFeatures");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['toResidue'],'I',['toPosition'],'O',['mapping','jalview.datamodel.Mapping','fromSeq','jalview.datamodel.SequenceI','features','java.util.List','codonPos','int[]','baseCodon','char[]']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_Mapping$jalview_datamodel_SequenceI$I$C$java_util_List', function (theMapping, from, pos, res, theFeatures) {
;C$.$init$.apply(this);
this.mapping=theMapping;
this.fromSeq=from;
this.toPosition=pos;
this.toResidue=res;
this.features=theFeatures;
var codonIntervals=this.mapping.getMap$().locateInFrom$I$I(this.toPosition, this.toPosition);
var codonPositions=codonIntervals == null  ? null : $I$(1).flattenRanges$IA(codonIntervals);
if (codonPositions != null  && codonPositions.length == 3 ) {
this.codonPos=codonPositions;
this.baseCodon=Clazz.array(Character.TYPE, [3]);
var cdsStart=this.fromSeq.getStart$();
this.baseCodon[0]=Character.toUpperCase$C(this.fromSeq.getCharAt$I(this.codonPos[0] - cdsStart));
this.baseCodon[1]=Character.toUpperCase$C(this.fromSeq.getCharAt$I(this.codonPos[1] - cdsStart));
this.baseCodon[2]=Character.toUpperCase$C(this.fromSeq.getCharAt$I(this.codonPos[2] - cdsStart));
} else {
this.codonPos=null;
this.baseCodon=null;
}}, 1);

Clazz.newMeth(C$, 'findProteinVariants$jalview_datamodel_SequenceFeature', function (sf) {
if (!this.features.contains$O(sf) || this.baseCodon == null  ) {
return "";
}var hgvsp=sf.getValueAsString$SA(["CSQ", "HGVSp"]);
if (hgvsp != null ) {
var colonPos=hgvsp.lastIndexOf$I(":");
if (colonPos >= 0) {
var $var=hgvsp.substring$I(colonPos + 1);
if ($var.contains$CharSequence("p.")) {
return $var;
}}}var cdsPos=sf.getBegin$();
if (cdsPos != sf.getEnd$()) {
return "";
}if (cdsPos != this.codonPos[0] && cdsPos != this.codonPos[1]  && cdsPos != this.codonPos[2] ) {
return "";
}var alls=sf.getValue$S("alleles");
if (alls == null ) {
return "";
}var from3=$I$(2,"toSentenceCase$S",[$I$(3).aa2Triplet.get$O(String.valueOf$C(this.toResidue))]);
var variantPeptides=Clazz.new_($I$(4,1));
var alleles=alls.toUpperCase$().split$S(",");
var vars=Clazz.new_($I$(5,1));
for (var allele, $allele = 0, $$allele = alleles; $allele<$$allele.length&&((allele=($$allele[$allele])),1);$allele++) {
allele=allele.trim$().toUpperCase$();
if (allele.length$() > 1 || "-".equals$O(allele) ) {
continue;
}var variantCodon=Clazz.array(Character.TYPE, [3]);
variantCodon[0]=this.baseCodon[0];
variantCodon[1]=this.baseCodon[1];
variantCodon[2]=this.baseCodon[2];
var i=cdsPos == this.codonPos[0] ? 0 : (cdsPos == this.codonPos[1] ? 1 : 2);
variantCodon[i]=allele.toUpperCase$().charAt$I(0);
if (variantCodon[i] == this.baseCodon[i]) {
continue;
}var codon= String.instantialize(variantCodon);
var peptide=$I$(3).codonTranslate$S(codon);
var synonymous=this.toResidue == peptide.charAt$I(0);
var $var=Clazz.new_($I$(5,1));
if (synonymous) {
$var.append$S("c.").append$S(String.valueOf$I(cdsPos)).append$S(String.valueOf$C(this.baseCodon[i])).append$S(">").append$S(String.valueOf$C(variantCodon[i])).append$S("(p.=)");
} else {
var to3=$I$(3).STOP.equals$O(peptide) ? "Ter" : $I$(2,"toSentenceCase$S",[$I$(3).aa2Triplet.get$O(peptide)]);
$var.append$S("p.").append$S(from3).append$S(String.valueOf$I(this.toPosition)).append$S(to3);
}if (!variantPeptides.contains$O(peptide)) {
variantPeptides.add$O(peptide);
if (vars.length$() > 0) {
vars.append$S(",");
}vars.append$CharSequence($var);
}}
return vars.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
