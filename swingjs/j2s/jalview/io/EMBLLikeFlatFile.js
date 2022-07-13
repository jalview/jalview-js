(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,'jalview.util.MappingUtils','java.util.Arrays','java.util.ArrayList','java.util.TreeMap','StringBuilder','java.util.Locale','jalview.io.CdsData','jalview.bin.Console','jalview.util.DBRefUtils','jalview.datamodel.DBRefEntry','jalview.datamodel.Sequence','jalview.datamodel.Mapping','java.util.HashMap','jalview.datamodel.SequenceFeature','jalview.datamodel.DBRefSource','jalview.util.MapList','jalview.util.DnaUtils','java.util.Hashtable']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EMBLLikeFlatFile", null, 'jalview.io.AlignFile');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.produceRna=true;
this.length=128;
this.sequenceStringIsRNA=false;
},1);

C$.$fields$=[['Z',['produceRna','sequenceStringIsRNA'],'I',['length'],'S',['sourceDb','accession','version','description','sequenceString'],'O',['dbrefs','java.util.List','cds','java.util.Map']]]

Clazz.newMeth(C$, 'removeQuotes$S',  function (value) {
if (value == null ) {
return null;
}if (value.startsWith$S("\"") && !value.startsWith$S("\"\"") ) {
value=value.substring$I(1);
}if (value.endsWith$S("\"") && !value.endsWith$S("\"\"") ) {
value=value.substring$I$I(0, value.length$() - 1);
}value=value.replace$CharSequence$CharSequence("\"\"", "\"");
return value;
}, 1);

Clazz.newMeth(C$, 'adjustForProteinLength$I$IA',  function (proteinLength, exon) {
if (proteinLength <= 0 || exon == null  ) {
return exon;
}var expectedCdsLength=proteinLength * 3;
var exonLength=$I$(1,"getLength$java_util_List",[$I$(2,"asList$OA",[Clazz.array(Integer.TYPE, -1, [exon])])]);
if (expectedCdsLength >= exonLength) {
return exon;
}var origxon;
var sxpos=-1;
var endxon=0;
origxon=Clazz.array(Integer.TYPE, [exon.length]);
System.arraycopy$O$I$O$I$I(exon, 0, origxon, 0, exon.length);
var cdspos=0;
for (var x=0; x < exon.length; x+=2) {
cdspos+=Math.abs(exon[x + 1] - exon[x]) + 1;
if (expectedCdsLength <= cdspos) {
sxpos=x;
if (expectedCdsLength != cdspos) {
}if (exon[x + 1] >= exon[x]) {
endxon=exon[x + 1] - cdspos + expectedCdsLength;
} else {
endxon=exon[x + 1] + cdspos - expectedCdsLength;
}break;
}}
if (sxpos != -1) {
var nxon=Clazz.array(Integer.TYPE, [sxpos + 2]);
System.arraycopy$O$I$O$I$I(exon, 0, nxon, 0, sxpos + 2);
nxon[sxpos + 1]=endxon;
exon=nxon;
}return exon;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse$S',  function (fp, sourceId) {
;C$.superclazz.c$$Z$jalview_io_FileParse.apply(this,[false, fp]);C$.$init$.apply(this);
this.sourceDb=sourceId;
this.dbrefs=Clazz.new_($I$(3,1));
this.cds=Clazz.new_($I$(4,1).c$$java_util_Comparator,[String.CASE_INSENSITIVE_ORDER]);
this.parse$();
}, 1);

Clazz.newMeth(C$, 'parseSourceQualifiers$SA',  function (tokens) {
if (!"source".equals$O(tokens[0])) {
throw (Clazz.new_(Clazz.load('RuntimeException').c$$S,["Not given a \'source\' qualifier line"]));
}var sb=Clazz.new_($I$(5,1)).append$S(tokens[1]);
var line=this.parseFeatureQualifier$StringBuilder$Z(sb, false);
while (line != null ){
if (!line.startsWith$S("FT    ")) {
return line;
}var p=line.indexOf$S("\\mol_type");
var qs=line.indexOf$S$I("\"", p);
var qe=line.indexOf$S$I("\"", qs + 1);
var qualifier=line.substring$I$I(qs, qe).toLowerCase$java_util_Locale($I$(6).ROOT);
if (qualifier.indexOf$S("rna") > -1) {
this.sequenceStringIsRNA=true;
}if (qualifier.indexOf$S("dna") > -1) {
this.sequenceStringIsRNA=false;
}line=this.parseFeatureQualifier$StringBuilder$Z(sb, false);
}
return line;
}, p$1);

Clazz.newMeth(C$, 'parseCDSFeature$S',  function (location) {
var line;
var data=Clazz.new_($I$(7,1));
var sb=Clazz.new_($I$(5,1)).append$S(location);
line=this.parseFeatureQualifier$StringBuilder$Z(sb, false);
data.cdsLocation=sb.toString();
while (line != null ){
if (!this.isFeatureContinuationLine$S(line)) {
break;
}var slashPos=line.indexOf$I("/");
if (slashPos == -1) {
$I$(8).error$S("Unexpected EMBL line ignored: " + line);
line=this.nextLine$();
continue;
}var eqPos=line.indexOf$I$I("=", slashPos + 1);
if (eqPos == -1) {
line=this.nextLine$();
continue;
}var qualifier=line.substring$I$I(slashPos + 1, eqPos);
var value=line.substring$I(eqPos + 1);
value=C$.removeQuotes$S(value);
sb=Clazz.new_($I$(5,1)).append$S(value);
var asText=!"translation".equals$O(qualifier);
line=this.parseFeatureQualifier$StringBuilder$Z(sb, asText);
var featureValue=sb.toString();
if ("protein_id".equals$O(qualifier)) {
data.proteinId=featureValue;
} else if ("codon_start".equals$O(qualifier)) {
try {
data.codonStart=Integer.parseInt$S(featureValue.trim$());
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
$I$(8,"error$S",["Invalid codon_start in XML for " + this.accession + ": " + e.getMessage$() ]);
} else {
throw e;
}
}
} else if ("db_xref".equals$O(qualifier)) {
var parts=featureValue.split$S(":");
if (parts.length == 2) {
var db=parts[0].trim$();
db=$I$(9).getCanonicalName$S(db);
var dbref=Clazz.new_([db, "0", parts[1].trim$()],$I$(10,1).c$$S$S$S);
data.xrefs.add$O(dbref);
}} else if ("product".equals$O(qualifier)) {
data.proteinName=featureValue;
} else if ("translation".equals$O(qualifier)) {
data.translation=featureValue;
} else if (!"".equals$O(featureValue)) {
data.cdsProps.put$O$O(qualifier, featureValue);
}}
if (data.proteinId != null ) {
this.cds.put$O$O(data.proteinId, data);
} else {
$I$(8).error$S("Ignoring CDS feature with no protein_id for " + this.sourceDb + ":" + this.accession );
}return line;
});

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z',  function (seqs, jvsuffix) {
return null;
});

Clazz.newMeth(C$, 'buildSequence$',  function () {
if (this.accession == null  || this.sequenceString == null  ) {
$I$(8).error$S("Failed to parse data from EMBL");
return;
}var name=this.accession;
if (this.sourceDb != null ) {
name=this.sourceDb + "|" + name ;
}if (this.produceRna && this.sequenceStringIsRNA ) {
this.sequenceString=this.sequenceString.replace$C$C("T", "U").replace$C$C("t", "u");
}var seq=Clazz.new_($I$(11,1).c$$S$S,[name, this.sequenceString]);
seq.setDescription$S(this.description);
var selfRef=Clazz.new_($I$(10,1).c$$S$S$S,[this.sourceDb, this.version, this.accession]);
var startEnd=Clazz.array(Integer.TYPE, -1, [1, seq.getLength$()]);
selfRef.setMap$jalview_datamodel_Mapping(Clazz.new_($I$(12,1).c$$jalview_datamodel_SequenceI$IA$IA$I$I,[null, startEnd, startEnd, 1, 1]));
seq.addDBRef$jalview_datamodel_DBRefEntry(selfRef);
for (var dbref, $dbref = this.dbrefs.iterator$(); $dbref.hasNext$()&&((dbref=($dbref.next$())),1);) {
seq.addDBRef$jalview_datamodel_DBRefEntry(dbref);
}
this.processCDSFeatures$jalview_datamodel_SequenceI(seq);
seq.deriveSequence$();
this.addSequence$jalview_datamodel_SequenceI(seq);
});

Clazz.newMeth(C$, 'processCDSFeatures$jalview_datamodel_SequenceI',  function (seq) {
var proteins=Clazz.new_($I$(13,1));
for (var data, $data = this.cds.values$().iterator$(); $data.hasNext$()&&((data=($data.next$())),1);) {
this.processCDSFeature$jalview_datamodel_SequenceI$jalview_io_CdsData$java_util_Map(seq, data, proteins);
}
});

Clazz.newMeth(C$, 'processCDSFeature$jalview_datamodel_SequenceI$jalview_io_CdsData$java_util_Map',  function (dna, data, proteins) {
var exons=this.getCdsRanges$S$S(this.accession, data.cdsLocation);
var maplist=this.buildMappingToProtein$jalview_datamodel_SequenceI$IA$jalview_io_CdsData(dna, exons, data);
var exonNumber=0;
for (var xint=0; exons != null  && xint < exons.length - 1 ; xint+=2) {
var exonStart=exons[xint];
var exonEnd=exons[xint + 1];
var begin=Math.min(exonStart, exonEnd);
var end=Math.max(exonStart, exonEnd);
++exonNumber;
var desc=String.format$S$OA("Exon %d for protein EMBLCDS:%s", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(exonNumber), data.proteinId]));
var sf=Clazz.new_($I$(14,1).c$$S$S$I$I$S,["CDS", desc, begin, end, this.sourceDb]);
for (var val, $val = data.cdsProps.entrySet$().iterator$(); $val.hasNext$()&&((val=($val.next$())),1);) {
sf.setValue$S$O(val.getKey$(), val.getValue$());
}
sf.setEnaLocation$S(data.cdsLocation);
var forwardStrand=exonStart <= exonEnd;
sf.setStrand$S(forwardStrand ? "+" : "-");
sf.setPhase$S(String.valueOf$I(data.codonStart - 1));
sf.setValue$S$O("exon number", Integer.valueOf$I(exonNumber));
sf.setValue$S$O("product", data.proteinName);
dna.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
}
var hasUniprotDbref=false;
for (var xref, $xref = data.xrefs.iterator$(); $xref.hasNext$()&&((xref=($xref.next$())),1);) {
dna.addDBRef$jalview_datamodel_DBRefEntry(xref);
if (xref.getSource$().equals$O("UNIPROT")) {
var protein=this.buildProteinProduct$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$jalview_io_CdsData$java_util_Map(dna, xref, data, proteins);
var map=Clazz.new_($I$(12,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList,[protein, maplist]);
map.setMappedFromId$S(data.proteinId);
xref.setMap$jalview_datamodel_Mapping(map);
var db1=Clazz.new_($I$(10,1).c$$S$S$S,[this.sourceDb, this.version, this.accession]);
db1.setMap$jalview_datamodel_Mapping(Clazz.new_([dna, maplist.getInverse$()],$I$(12,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList));
protein.addDBRef$jalview_datamodel_DBRefEntry(db1);
hasUniprotDbref=true;
}}
if (!hasUniprotDbref) {
var protein=proteins.get$O(data.proteinId);
if (protein == null ) {
protein=Clazz.new_($I$(11,1).c$$S$S,[data.proteinId, data.translation]);
protein.setDescription$S(data.proteinName);
proteins.put$O$O(data.proteinId, protein);
}var db1=Clazz.new_([$I$(15).EMBLCDSProduct, this.version, data.proteinId],$I$(10,1).c$$S$S$S);
protein.addDBRef$jalview_datamodel_DBRefEntry(db1);
var dnaToEmblProteinRef=Clazz.new_([$I$(15).EMBLCDSProduct, this.version, data.proteinId],$I$(10,1).c$$S$S$S);
var map=Clazz.new_($I$(12,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList,[protein, maplist]);
map.setMappedFromId$S(data.proteinId);
dnaToEmblProteinRef.setMap$jalview_datamodel_Mapping(map);
dna.addDBRef$jalview_datamodel_DBRefEntry(dnaToEmblProteinRef);
}});

Clazz.newMeth(C$, 'buildMappingToProtein$jalview_datamodel_SequenceI$IA$jalview_io_CdsData',  function (dna, exons, data) {
var dnaToProteinMapping=null;
var peptideLength=data.translation.length$();
var proteinRange=Clazz.array(Integer.TYPE, -1, [1, peptideLength]);
if (exons != null  && exons.length > 0 ) {
var cdsRanges=C$.adjustForProteinLength$I$IA(peptideLength, exons);
dnaToProteinMapping=Clazz.new_($I$(16,1).c$$IA$IA$I$I,[cdsRanges, proteinRange, 3, 1]);
} else {
$I$(8,"error$S",[String.format$S$OA("Implementation Notice: EMBLCDS location \'%s\'not properly supported yet - Making up the CDNA region of (%s:%s)... may be incorrect", Clazz.array(java.lang.Object, -1, [data.cdsLocation, this.sourceDb, this.accession]))]);
var completeCodonsLength=1 - data.codonStart + dna.getLength$();
var mappedDnaEnd=dna.getEnd$();
if (peptideLength * 3 == completeCodonsLength) {
$I$(8).warn$S("Assuming no stop codon at end of cDNA fragment");
mappedDnaEnd=dna.getEnd$();
} else if ((peptideLength + 1) * 3 == completeCodonsLength) {
$I$(8).warn$S("Assuming stop codon at end of cDNA fragment");
mappedDnaEnd=dna.getEnd$() - 3;
}if (mappedDnaEnd != -1) {
var cdsRanges=Clazz.array(Integer.TYPE, -1, [dna.getStart$() + (data.codonStart - 1), mappedDnaEnd]);
dnaToProteinMapping=Clazz.new_($I$(16,1).c$$IA$IA$I$I,[cdsRanges, proteinRange, 3, 1]);
}}return dnaToProteinMapping;
});

Clazz.newMeth(C$, 'buildProteinProduct$jalview_datamodel_SequenceI$jalview_datamodel_DBRefEntry$jalview_io_CdsData$java_util_Map',  function (dna, xref, data, proteins) {
if (data.proteinId == null  || data.translation == null  ) {
return null;
}var proteinSeqName=xref.getSource$() + "|" + xref.getAccessionId$() ;
var protein=proteins.get$O(proteinSeqName);
if (protein == null ) {
protein=Clazz.new_([proteinSeqName, data.translation, 1, data.translation.length$()],$I$(11,1).c$$S$S$I$I);
protein.setDescription$S(data.proteinName != null  ? data.proteinName : "Protein Product from " + this.sourceDb);
proteins.put$O$O(proteinSeqName, protein);
}return protein;
});

Clazz.newMeth(C$, 'getCdsRanges$S$S',  function (accession, location) {
if (location == null ) {
return Clazz.array(Integer.TYPE, -1, []);
}try {
var ranges=$I$(17).parseLocation$S(location);
return $I$(1).rangeListToArray$java_util_List(ranges);
} catch (e) {
if (Clazz.exceptionOf(e,"java.text.ParseException")){
$I$(8,"warn$S",[String.format$S$OA("Not parsing inexact CDS location %s in ENA %s", Clazz.array(java.lang.Object, -1, [location, accession]))]);
return Clazz.array(Integer.TYPE, -1, []);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'parseFeatureQualifier$StringBuilder$Z',  function (sb, asText) {
var line;
while ((line=this.nextLine$()) != null ){
if (!this.isFeatureContinuationLine$S(line)) {
break;
}var tokens=line.split$S("\\s+");
if (tokens.length < 2) {
$I$(8).error$S("Ignoring bad EMBL line for " + this.accession + ": " + line );
break;
}if (tokens[1].startsWith$S("/")) {
break;
}if (asText) {
sb.append$S(" ");
}var data=C$.removeQuotes$S(tokens[1]);
sb.append$S(data);
}
return line;
});

Clazz.newMeth(C$, 'parseSequence$',  function () {
var sb=Clazz.new_($I$(5,1).c$$I,[this.length]);
var line=this.nextLine$();
while (line != null  && line.startsWith$S(" ") ){
line=line.trim$();
var blocks=line.split$S("\\s+");
for (var i=0; i < blocks.length; i++) {
try {
Long.parseLong$S(blocks[i]);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
sb.append$S(blocks[i]);
} else {
throw e;
}
}
}
line=this.nextLine$();
}
this.sequenceString=sb.toString();
return line;
});

Clazz.newMeth(C$, 'parseFeature$S',  function (line) {
var tokens=line.trim$().split$S("\\s+");
if (tokens.length < 2 || (!"CDS".equals$O(tokens[0]) && (!"source".equals$O(tokens[0])) ) ) {
return this.nextLine$();
}if (tokens[0].equals$O("source")) {
return p$1.parseSourceQualifiers$SA.apply(this, [tokens]);
}return this.parseCDSFeature$S(tokens[1]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
