(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),p$1={},I$=[[0,'jalview.bin.Cache','com.stevesoft.pat.Regex','java.net.URL','java.util.ArrayList','jalview.datamodel.Alignment','jalview.datamodel.SequenceI','jalview.datamodel.Sequence','jalview.datamodel.DBRefEntry','java.util.Vector','jalview.datamodel.PDBEntry','jalview.datamodel.SequenceFeature','StringBuilder','jalview.schemes.ResidueProperties','jalview.util.StringUtils','javax.xml.bind.JAXBContext','javax.xml.stream.XMLInputFactory','jalview.xml.binding.uniprot.Uniprot']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Uniprot", null, 'jalview.ws.seqfetcher.DbSourceProxyImpl');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDomain', function () {
return $I$(1).getDefault$S$S("UNIPROT_DOMAIN", "https://www.uniprot.org");
}, p$1);

Clazz.newMeth(C$, 'getAccessionSeparator$', function () {
return null;
});

Clazz.newMeth(C$, 'getAccessionValidator$', function () {
return Clazz.new_($I$(2).c$$S,["([A-Z]+[0-9]+[A-Z0-9]+|[A-Z0-9]+_[A-Z0-9]+)"]);
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return "UNIPROT";
});

Clazz.newMeth(C$, 'getDbVersion$', function () {
return "0";
});

Clazz.newMeth(C$, 'getSequenceRecords$S', function (queries) {
this.startQuery$();
try {
queries=queries.toUpperCase$().replaceAll$S$S("(UNIPROT\\|?|UNIPROT_|UNIREF\\d+_|UNIREF\\d+\\|?)", "");
var al=null;
var downloadstring=p$1.getDomain.apply(this, []) + "/uniprot/" + queries + ".xml" ;
var url=Clazz.new_($I$(3).c$$S,[downloadstring]);
var urlconn=url.openConnection$();
var istr=urlconn.getInputStream$();
var entries=this.getUniprotEntries$java_io_InputStream(istr);
if (entries != null ) {
var seqs=Clazz.new_($I$(4));
for (var entry, $entry = entries.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
seqs.add$TE(this.uniprotEntryToSequence$jalview_xml_binding_uniprot_Entry(entry));
}
al=Clazz.new_($I$(5).c$$jalview_datamodel_SequenceIA,[seqs.toArray$TTA(Clazz.array($I$(6), [seqs.size$()]))]);
}this.stopQuery$();
return al;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw (e);
} else {
throw e;
}
} finally {
this.stopQuery$();
}
});

Clazz.newMeth(C$, 'uniprotEntryToSequence$jalview_xml_binding_uniprot_Entry', function (entry) {
var id=C$.getUniprotEntryId$jalview_xml_binding_uniprot_Entry(entry);
var seqString=entry.getSequence$().getValue$().replaceAll$S$S("\\s*", "");
var sequence=Clazz.new_($I$(7).c$$S$S,[id, seqString]);
sequence.setDescription$S(C$.getUniprotEntryDescription$jalview_xml_binding_uniprot_Entry(entry));
var dbVersion=this.getDbVersion$();
var dbRefs=Clazz.new_($I$(4));
for (var accessionId, $accessionId = entry.getAccession$().iterator$(); $accessionId.hasNext$()&&((accessionId=($accessionId.next$())),1);) {
var dbRef=Clazz.new_($I$(8).c$$S$S$S,["UNIPROT", dbVersion, accessionId]);
dbRefs.add$TE(dbRef);
}
var pdbRefs=Clazz.new_($I$(9));
for (var dbref, $dbref = entry.getDbReference$().iterator$(); $dbref.hasNext$()&&((dbref=($dbref.next$())),1);) {
var type=dbref.getType$();
var dbr=Clazz.new_($I$(8).c$$S$S$S,[type, "UNIPROT" + ":" + dbVersion , dbref.getId$()]);
dbRefs.add$TE(dbr);
if ("PDB".equals$O(type)) {
pdbRefs.add$TE(Clazz.new_($I$(10).c$$jalview_datamodel_DBRefEntry,[dbr]));
}if ("EMBL".equals$O(type)) {
var cdsId=C$.getProperty$java_util_List$S(dbref.getProperty$(), "protein sequence ID");
if (cdsId != null  && cdsId.trim$().length$() > 0 ) {
var vrs=cdsId.split$S("\\.");
var version=vrs.length > 1 ? vrs[1] : "UNIPROT" + ":" + dbVersion ;
dbr=Clazz.new_($I$(8).c$$S$S$S,["EMBLCDS", version, vrs[0]]);
dbRefs.add$TE(dbr);
}}if ("Ensembl".equals$O(type)) {
var cdsId=C$.getProperty$java_util_List$S(dbref.getProperty$(), "protein sequence ID");
if (cdsId != null  && cdsId.trim$().length$() > 0 ) {
dbr=Clazz.new_($I$(8).c$$S$S$S,["ENSEMBL", "UNIPROT" + ":" + dbVersion , cdsId.trim$()]);
dbRefs.add$TE(dbr);
}}}
sequence.setPDBId$java_util_Vector(pdbRefs);
if (entry.getFeature$() != null ) {
for (var uf, $uf = entry.getFeature$().iterator$(); $uf.hasNext$()&&((uf=($uf.next$())),1);) {
var location=uf.getLocation$();
var start=0;
var end=0;
if (location.getPosition$() != null ) {
start=location.getPosition$().getPosition$().intValue$();
end=start;
} else {
start=location.getBegin$().getPosition$().intValue$();
end=location.getEnd$().getPosition$().intValue$();
}var sf=Clazz.new_($I$(11).c$$S$S$I$I$S,[uf.getType$(), C$.getDescription$jalview_xml_binding_uniprot_FeatureType(uf), start, end, "Uniprot"]);
sf.setStatus$S(uf.getStatus$());
sequence.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
}
}for (var dbr, $dbr = dbRefs.iterator$(); $dbr.hasNext$()&&((dbr=($dbr.next$())),1);) {
sequence.addDBRef$jalview_datamodel_DBRefEntry(dbr);
}
return sequence;
});

Clazz.newMeth(C$, 'getDescription$jalview_xml_binding_uniprot_FeatureType', function (feature) {
var orig=feature.getOriginal$();
var variants=feature.getVariation$();
var sb=Clazz.new_($I$(12));
var asHtml=false;
if (orig != null  && !orig.isEmpty$()  && variants != null   && !variants.isEmpty$() ) {
var p=0;
for (var $var, $$var = variants.iterator$(); $$var.hasNext$()&&(($var=($$var.next$())),1);) {
sb.append$S("p.");
if (orig.length$() < 4) {
for (var c=0, clen=orig.length$(); c < clen; c++) {
var origchar=orig.charAt$I(c);
var orig3=$I$(13).aa2Triplet.get$O("" + origchar);
sb.append$O(orig3 == null  ? new Character(origchar) : $I$(14).toSentenceCase$S(orig3));
}
} else {
sb.append$S(orig);
}var location=feature.getLocation$();
var start=location.getPosition$() == null  ? location.getBegin$() : location.getPosition$();
sb.append$S(Integer.toString$I(start.getPosition$().intValue$()));
if ($var.length$() < 4) {
for (var c=0, clen=$var.length$(); c < clen; c++) {
var varchar=$var.charAt$I(c);
var var3=$I$(13).aa2Triplet.get$O("" + varchar);
sb.append$S(var3 != null  ? $I$(14).toSentenceCase$S(var3) : "" + varchar);
}
} else {
sb.append$S($var);
}if (++p != variants.size$()) {
sb.append$S("<br/>&nbsp;&nbsp;");
asHtml=true;
} else {
sb.append$S(" ");
}}
}var description=feature.getDescription$();
if (description != null ) {
sb.append$S(description);
}if (asHtml) {
sb.insert$I$S(0, "<html>");
sb.append$S("</html>");
}return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getProperty$java_util_List$S', function (properties, key) {
var value=null;
if (properties != null ) {
for (var prop, $prop = properties.iterator$(); $prop.hasNext$()&&((prop=($prop.next$())),1);) {
if (key.equals$O(prop.getType$())) {
value=prop.getValue$();
break;
}}
}return value;
}, 1);

Clazz.newMeth(C$, 'getUniprotEntryDescription$jalview_xml_binding_uniprot_Entry', function (entry) {
var desc="";
if (entry.getProtein$() != null  && entry.getProtein$().getRecommendedName$() != null  ) {
desc=entry.getProtein$().getRecommendedName$().getFullName$().getValue$();
}return desc;
}, 1);

Clazz.newMeth(C$, 'getUniprotEntryId$jalview_xml_binding_uniprot_Entry', function (entry) {
var name=Clazz.new_($I$(12).c$$I,[32]);
for (var n, $n = entry.getName$().iterator$(); $n.hasNext$()&&((n=($n.next$())),1);) {
if (name.length$() > 0) {
name.append$S("|");
}name.append$S(n);
}
return name.toString();
}, 1);

Clazz.newMeth(C$, 'isValidReference$S', function (accession) {
return (accession == null  || accession.length$() < 2 ) ? false : this.getAccessionValidator$().search$S(accession);
});

Clazz.newMeth(C$, 'getTestQuery$', function () {
return "P00340";
});

Clazz.newMeth(C$, 'getDbName$', function () {
return "Uniprot";
});

Clazz.newMeth(C$, 'getTier$', function () {
return 0;
});

Clazz.newMeth(C$, 'getUniprotEntries$java_io_InputStream', function (is) {
var entries=null;
try {
var jc=$I$(15).newInstance$S("jalview.xml.binding.uniprot");
var streamReader=$I$(16).newInstance$().createXMLStreamReader$java_io_InputStream(is);
var um=jc.createUnmarshaller$();
var uniprotElement=um.unmarshal$javax_xml_stream_XMLStreamReader$Class(streamReader, Clazz.getClass($I$(17)));
var uniprot=uniprotElement.getValue$();
if (uniprot != null  && !uniprot.getEntry$().isEmpty$() ) {
entries=uniprot.getEntry$();
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.bind.JAXBException") || Clazz.exceptionOf(e,"javax.xml.stream.XMLStreamException") || Clazz.exceptionOf(e,"javax.xml.stream.FactoryConfigurationError")){
e.printStackTrace$();
} else {
throw e;
}
}
return entries;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
