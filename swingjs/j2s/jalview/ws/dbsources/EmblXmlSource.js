(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'jalview.ws.ebi.EBIFetchClient','jalview.util.MessageManager','java.io.FileInputStream','java.util.ArrayList','jalview.datamodel.Alignment','jalview.datamodel.SequenceI','javax.xml.bind.JAXBContext','javax.xml.stream.XMLInputFactory','jalview.xml.binding.embl.ROOT','jalview.datamodel.Sequence','jalview.datamodel.DBRefEntry','jalview.datamodel.Mapping','jalview.util.DBRefUtils','jalview.analysis.SequenceIdMatcher','jalview.datamodel.FeatureProperties','java.util.Hashtable','jalview.util.MappingUtils','jalview.util.MapList','jalview.datamodel.DBRefSource','jalview.util.DnaUtils','jalview.bin.Cache','jalview.datamodel.SequenceFeature','java.util.Arrays']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EmblXmlSource", null, 'jalview.ws.dbsources.EbiFileRetrievedProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEmblSequenceRecords$S$S', function (emprefx, query) {
this.startQuery$();
var dbFetch=Clazz.new_($I$(1,1));
var reply;
try {
reply=dbFetch.fetchDataAsFile$S$S$S(emprefx.toLowerCase$() + ":" + query.trim$() , "display=xml", "xml");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.stopQuery$();
throw Clazz.new_(Clazz.load('Exception').c$$S$Throwable,[$I$(2,"formatMessage$S$SA",["exception.ebiembl_retrieval_failed_on", Clazz.array(String, -1, [emprefx.toLowerCase$(), query.trim$()])]), e]);
} else {
throw e;
}
}
return this.getEmblSequenceRecords$S$S$java_io_File(emprefx, query, reply);
});

Clazz.newMeth(C$, 'getEmblSequenceRecords$S$S$java_io_File', function (emprefx, query, reply) {
var entries=null;
if (reply != null  && reply.exists$() ) {
this.file=reply.getAbsolutePath$();
if (reply.length$() > "ERROR 12 No entries found.".length$()) {
var is=Clazz.new_($I$(3,1).c$$java_io_File,[reply]);
entries=this.getEmblEntries$java_io_InputStream(is);
}}var al=null;
var seqs=Clazz.new_($I$(4,1));
var peptides=Clazz.new_($I$(4,1));
if (entries != null ) {
for (var entry, $entry = entries.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var seq=this.getSequence$S$jalview_xml_binding_embl_EntryType$java_util_List(emprefx, entry, peptides);
if (seq != null ) {
seqs.add$O(seq.deriveSequence$());
}}
if (!seqs.isEmpty$()) {
al=Clazz.new_([seqs.toArray$OA(Clazz.array($I$(6), [seqs.size$()]))],$I$(5,1).c$$jalview_datamodel_SequenceIA);
} else {
System.out.println$S("No record found for '" + emprefx + ":" + query + "'" );
}}this.stopQuery$();
return al;
});

Clazz.newMeth(C$, 'getEmblEntries$java_io_InputStream', function (is) {
var entries=Clazz.new_($I$(4,1));
try {
var jc=$I$(7).newInstance$S("jalview.xml.binding.embl");
var streamReader=$I$(8).newInstance$().createXMLStreamReader$java_io_InputStream(is);
var um=jc.createUnmarshaller$();
var rootElement=um.unmarshal$javax_xml_stream_XMLStreamReader$Class(streamReader, Clazz.getClass($I$(9)));
var root=rootElement.getValue$();
if (root == null ) {
return entries;
}if (root.getEntrySet$() != null ) {
entries=root.getEntrySet$().getEntry$();
} else if (root.getEntry$() != null ) {
entries.add$O(root.getEntry$());
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.bind.JAXBException") || Clazz.exceptionOf(e,"javax.xml.stream.XMLStreamException") || Clazz.exceptionOf(e,"javax.xml.stream.FactoryConfigurationError")){
e.printStackTrace$();
} else {
throw e;
}
}
return entries;
});

Clazz.newMeth(C$, 'getSequence$S$jalview_xml_binding_embl_EntryType$java_util_List', function (sourceDb, entry, peptides) {
var seqString=entry.getSequence$();
if (seqString == null ) {
return null;
}seqString=seqString.replace$CharSequence$CharSequence(" ", "").replace$CharSequence$CharSequence("\n", "").replace$CharSequence$CharSequence("\t", "");
var accession=entry.getAccession$();
var dna=Clazz.new_($I$(10,1).c$$S$S,[sourceDb + "|" + accession , seqString]);
dna.setDescription$S(entry.getDescription$());
var sequenceVersion=String.valueOf$I(entry.getVersion$().intValue$());
var selfRref=Clazz.new_($I$(11,1).c$$S$S$S,[sourceDb, sequenceVersion, accession]);
dna.addDBRef$jalview_datamodel_DBRefEntry(selfRref);
selfRref.setMap$jalview_datamodel_Mapping(Clazz.new_([null, Clazz.array(Integer.TYPE, -1, [1, dna.getLength$()]), Clazz.array(Integer.TYPE, -1, [1, dna.getLength$()]), 1, 1],$I$(12,1).c$$jalview_datamodel_SequenceI$IA$IA$I$I));
var xrefs=entry.getXref$();
if (xrefs != null ) {
for (var xref, $xref = xrefs.iterator$(); $xref.hasNext$()&&((xref=($xref.next$())),1);) {
var acc=xref.getId$();
var source=$I$(13,"getCanonicalName$S",[xref.getDb$()]);
var version=xref.getSecondaryId$();
if (version == null  || "".equals$O(version) ) {
version="0";
}dna.addDBRef$jalview_datamodel_DBRefEntry(Clazz.new_($I$(11,1).c$$S$S$S,[source, version, acc]));
}
}var matcher=Clazz.new_($I$(14,1).c$$java_util_List,[peptides]);
try {
var features=entry.getFeature$();
if (features != null ) {
for (var feature, $feature = features.iterator$(); $feature.hasNext$()&&((feature=($feature.next$())),1);) {
if ($I$(15,"isCodingFeature$S$S",[sourceDb, feature.getName$()])) {
this.parseCodingFeature$jalview_xml_binding_embl_EntryType$jalview_xml_binding_embl_EntryType_Feature$S$jalview_datamodel_SequenceI$java_util_List$jalview_analysis_SequenceIdMatcher(entry, feature, sourceDb, dna, peptides, matcher);
}}
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("EMBL Record Features parsing error!");
System.err.println$S("Please report the following to help@jalview.org :");
System.err.println$S("EMBL Record " + accession);
System.err.println$S("Resulted in exception: " + e.getMessage$());
e.printStackTrace$java_io_PrintStream(System.err);
} else {
throw e;
}
}
return dna;
});

Clazz.newMeth(C$, 'parseCodingFeature$jalview_xml_binding_embl_EntryType$jalview_xml_binding_embl_EntryType_Feature$S$jalview_datamodel_SequenceI$java_util_List$jalview_analysis_SequenceIdMatcher', function (entry, feature, sourceDb, dna, peptides, matcher) {
var isEmblCdna=sourceDb.equals$O("EMBLCDS");
var accession=entry.getAccession$();
var sequenceVersion=entry.getVersion$().toString();
var exons=this.getCdsRanges$S$jalview_xml_binding_embl_EntryType_Feature(entry.getAccession$(), feature);
var translation=null;
var proteinName="";
var proteinId=null;
var vals=Clazz.new_($I$(16,1));
var codonStart=1;
if (feature.getQualifier$() != null ) {
for (var q, $q = feature.getQualifier$().iterator$(); $q.hasNext$()&&((q=($q.next$())),1);) {
var qname=q.getName$();
var value=q.getValue$();
value=value == null  ? "" : value.trim$().replace$CharSequence$CharSequence(" ", "").replace$CharSequence$CharSequence("\n", "").replace$CharSequence$CharSequence("\t", "");
if (qname.equals$O("translation")) {
translation=value;
} else if (qname.equals$O("protein_id")) {
proteinId=value;
} else if (qname.equals$O("codon_start")) {
try {
codonStart=Integer.parseInt$S(value.trim$());
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.err.println$S("Invalid codon_start in XML for " + entry.getAccession$() + ": " + e.getMessage$() );
} else {
throw e;
}
}
} else if (qname.equals$O("product")) {
proteinName=value;
} else {
if (!"".equals$O(value)) {
vals.put$O$O(qname, value);
}}}
}var proteinToEmblProteinRef=null;
exons=$I$(17).removeStartPositions$I$IA(codonStart - 1, exons);
var product=null;
var dnaToProteinMapping=null;
if (translation != null  && proteinName != null   && proteinId != null  ) {
var translationLength=translation.length$();
product=matcher.findIdMatch$S(proteinId);
if (product == null ) {
product=Clazz.new_($I$(10,1).c$$S$S$I$I,[proteinId, translation, 1, translationLength]);
product.setDescription$S(((proteinName.length$() == 0) ? "Protein Product from " + sourceDb : proteinName));
peptides.add$O(product);
matcher.add$jalview_datamodel_SequenceI(product);
}if (exons == null  || exons.length == 0 ) {
System.err.println$S("Implementation Notice: EMBLCDS records not properly supported yet - Making up the CDNA region of this sequence... may be incorrect (" + sourceDb + ":" + entry.getAccession$() + ")" );
var dnaLength=dna.getLength$();
if (translationLength * 3 == (1 - codonStart + dnaLength)) {
System.err.println$S("Not allowing for additional stop codon at end of cDNA fragment... !");
exons=Clazz.array(Integer.TYPE, -1, [dna.getStart$() + (codonStart - 1), dna.getEnd$()]);
dnaToProteinMapping=Clazz.new_([product, exons, Clazz.array(Integer.TYPE, -1, [1, translationLength]), 3, 1],$I$(12,1).c$$jalview_datamodel_SequenceI$IA$IA$I$I);
}if ((translationLength + 1) * 3 == (1 - codonStart + dnaLength)) {
System.err.println$S("Allowing for additional stop codon at end of cDNA fragment... will probably cause an error in VAMSAs!");
exons=Clazz.array(Integer.TYPE, -1, [dna.getStart$() + (codonStart - 1), dna.getEnd$() - 3]);
dnaToProteinMapping=Clazz.new_([product, exons, Clazz.array(Integer.TYPE, -1, [1, translationLength]), 3, 1],$I$(12,1).c$$jalview_datamodel_SequenceI$IA$IA$I$I);
}} else {
if (isEmblCdna) {
} else {
var cdsRanges=C$.adjustForProteinLength$I$IA(translationLength, exons);
dnaToProteinMapping=Clazz.new_([product, cdsRanges, Clazz.array(Integer.TYPE, -1, [1, translationLength]), 3, 1],$I$(12,1).c$$jalview_datamodel_SequenceI$IA$IA$I$I);
if (product != null ) {
var proteinToEmblRef=Clazz.new_(["EMBL", sequenceVersion, proteinId, Clazz.new_([dnaToProteinMapping.getMap$().getInverse$()],$I$(12,1).c$$jalview_util_MapList)],$I$(11,1).c$$S$S$S$jalview_datamodel_Mapping);
product.addDBRef$jalview_datamodel_DBRefEntry(proteinToEmblRef);
var proteinToCdsMapList=Clazz.new_([Clazz.array(Integer.TYPE, -1, [1, translationLength]), Clazz.array(Integer.TYPE, -1, [1 + (codonStart - 1), (codonStart - 1) + 3 * translationLength]), 1, 3],$I$(18,1).c$$IA$IA$I$I);
var proteinToEmblCdsRef=Clazz.new_(["EMBLCDS", sequenceVersion, proteinId, Clazz.new_($I$(12,1).c$$jalview_util_MapList,[proteinToCdsMapList])],$I$(11,1).c$$S$S$S$jalview_datamodel_Mapping);
product.addDBRef$jalview_datamodel_DBRefEntry(proteinToEmblCdsRef);
proteinToEmblProteinRef=Clazz.new_($I$(11,1).c$$jalview_api_DBRefEntryI,[proteinToEmblCdsRef]);
proteinToEmblProteinRef.setSource$S($I$(19).EMBLCDSProduct);
proteinToEmblProteinRef.setMap$jalview_datamodel_Mapping(null);
product.addDBRef$jalview_datamodel_DBRefEntry(proteinToEmblProteinRef);
}}}var cds=feature.getName$();
for (var xint=0; exons != null  && xint < exons.length - 1 ; xint+=2) {
var exonStart=exons[xint];
var exonEnd=exons[xint + 1];
var begin=Math.min(exonStart, exonEnd);
var end=Math.max(exonStart, exonEnd);
var exonNumber=(xint/2|0) + 1;
var desc=String.format$S$OA("Exon %d for protein \'%s\' EMBLCDS:%s", [new Integer(exonNumber), proteinName, proteinId]);
var sf=this.makeCdsFeature$S$S$I$I$S$java_util_Map(cds, desc, begin, end, sourceDb, vals);
sf.setEnaLocation$S(feature.getLocation$());
var forwardStrand=exonStart <= exonEnd;
sf.setStrand$S(forwardStrand ? "+" : "-");
sf.setPhase$S(String.valueOf$I(codonStart - 1));
sf.setValue$S$O("exon number", new Integer(exonNumber));
sf.setValue$S$O("product", proteinName);
dna.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
}
}var hasUniprotDbref=false;
var xrefs=feature.getXref$();
if (xrefs != null ) {
var mappingUsed=false;
for (var xref, $xref = xrefs.iterator$(); $xref.hasNext$()&&((xref=($xref.next$())),1);) {
var source=$I$(13,"getCanonicalName$S",[xref.getDb$()]);
var version=xref.getSecondaryId$();
if (version == null  || "".equals$O(version) ) {
version="0";
}var dbref=Clazz.new_([source, version, xref.getId$()],$I$(11,1).c$$S$S$S);
var proteinDbRef=Clazz.new_([source, version, dbref.getAccessionId$()],$I$(11,1).c$$S$S$S);
if (source.equals$O("UNIPROT")) {
var proteinSeqName="UNIPROT" + "|" + dbref.getAccessionId$() ;
if (dnaToProteinMapping != null  && dnaToProteinMapping.getTo$() != null  ) {
if (mappingUsed) {
dnaToProteinMapping=Clazz.new_($I$(12,1).c$$jalview_datamodel_Mapping,[dnaToProteinMapping]);
}mappingUsed=true;
var proteinSeq=matcher.findIdMatch$S(proteinSeqName);
if (proteinSeq == null ) {
proteinSeq=Clazz.new_([proteinSeqName, product.getSequenceAsString$()],$I$(10,1).c$$S$S);
matcher.add$jalview_datamodel_SequenceI(proteinSeq);
peptides.add$O(proteinSeq);
}dnaToProteinMapping.setTo$jalview_datamodel_SequenceI(proteinSeq);
dnaToProteinMapping.setMappedFromId$S(proteinId);
proteinSeq.addDBRef$jalview_datamodel_DBRefEntry(proteinDbRef);
dbref.setMap$jalview_datamodel_Mapping(dnaToProteinMapping);
}hasUniprotDbref=true;
}if (product != null ) {
var pref=proteinDbRef;
pref.setMap$jalview_datamodel_Mapping(null);
product.addDBRef$jalview_datamodel_DBRefEntry(pref);
if (dnaToProteinMapping != null ) {
var pmap=Clazz.new_([dna, dnaToProteinMapping.getMap$().getInverse$()],$I$(12,1).c$$jalview_datamodel_SequenceI$jalview_util_MapList);
pref=Clazz.new_($I$(11,1).c$$S$S$S,[sourceDb, sequenceVersion, accession]);
pref.setMap$jalview_datamodel_Mapping(pmap);
if (dnaToProteinMapping.getTo$() != null ) {
dnaToProteinMapping.getTo$().addDBRef$jalview_datamodel_DBRefEntry(pref);
}}}dna.addDBRef$jalview_datamodel_DBRefEntry(dbref);
}
}if (!hasUniprotDbref && product != null  ) {
if (proteinToEmblProteinRef == null ) {
proteinToEmblProteinRef=Clazz.new_([$I$(19).EMBLCDSProduct, sequenceVersion, proteinId],$I$(11,1).c$$S$S$S);
}product.addDBRef$jalview_datamodel_DBRefEntry(proteinToEmblProteinRef);
if (dnaToProteinMapping != null  && dnaToProteinMapping.getTo$() != null  ) {
var dnaToEmblProteinRef=Clazz.new_([$I$(19).EMBLCDSProduct, sequenceVersion, proteinId],$I$(11,1).c$$S$S$S);
dnaToEmblProteinRef.setMap$jalview_datamodel_Mapping(dnaToProteinMapping);
dnaToProteinMapping.setMappedFromId$S(proteinId);
dna.addDBRef$jalview_datamodel_DBRefEntry(dnaToEmblProteinRef);
}}});

Clazz.newMeth(C$, 'isDnaCoding$', function () {
return true;
});

Clazz.newMeth(C$, 'getCdsRanges$S$jalview_xml_binding_embl_EntryType_Feature', function (accession, feature) {
var location=feature.getLocation$();
if (location == null ) {
return Clazz.array(Integer.TYPE, -1, []);
}try {
var ranges=$I$(20).parseLocation$S(location);
return this.listToArray$java_util_List(ranges);
} catch (e) {
if (Clazz.exceptionOf(e,"java.text.ParseException")){
$I$(21).log.warn$O(String.format$S$OA("Not parsing inexact CDS location %s in ENA %s", [location, accession]));
return Clazz.array(Integer.TYPE, -1, []);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'listToArray$java_util_List', function (ranges) {
var result=Clazz.array(Integer.TYPE, [ranges.size$() * 2]);
var i=0;
for (var range, $range = ranges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
result[i++]=range[0];
result[i++]=range[1];
}
return result;
});

Clazz.newMeth(C$, 'makeCdsFeature$S$S$I$I$S$java_util_Map', function (type, desc, begin, end, group, vals) {
var sf=Clazz.new_($I$(22,1).c$$S$S$I$I$S,[type, desc, begin, end, group]);
if (!vals.isEmpty$()) {
for (var val, $val = vals.entrySet$().iterator$(); $val.hasNext$()&&((val=($val.next$())),1);) {
sf.setValue$S$O(val.getKey$(), val.getValue$());
}
}return sf;
});

Clazz.newMeth(C$, 'adjustForProteinLength$I$IA', function (proteinLength, exon) {
if (proteinLength <= 0 || exon == null  ) {
return exon;
}var expectedCdsLength=proteinLength * 3;
var exonLength=$I$(17,"getLength$java_util_List",[$I$(23).asList$OA([exon])]);
if (expectedCdsLength >= exonLength || expectedCdsLength == exonLength - 3 ) {
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
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
