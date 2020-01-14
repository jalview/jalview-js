(function(){var P$=Clazz.newPackage("jalview.ext.so"),p$1={},I$=[[0,'java.util.ArrayList','java.util.HashMap','java.util.zip.ZipInputStream','java.io.BufferedInputStream','java.io.BufferedReader','java.io.InputStreamReader','org.biojava.nbio.ontology.io.OboParser','Boolean','java.util.Collections']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceOntology", null, null, 'jalview.io.gff.SequenceOntologyI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ontology=null;
this.isA=null;
this.termsByDescription=null;
this.termIsA=null;
this.termsFound=null;
this.termsNotFound=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.termsFound=Clazz.new_($I$(1));
this.termsNotFound=Clazz.new_($I$(1));
this.termsByDescription=Clazz.new_($I$(2));
this.termIsA=Clazz.new_($I$(2));
this.loadOntologyZipFile$S("so-xp-simple.obo");
}, 1);

Clazz.newMeth(C$, 'loadOntologyZipFile$S', function (ontologyFile) {
var now=System.currentTimeMillis$();
var zipStream=null;
try {
var zipFile=ontologyFile + ".zip";
var inStream=this.getClass$().getResourceAsStream$S("/" + zipFile);
zipStream=Clazz.new_($I$(3).c$$java_io_InputStream,[Clazz.new_($I$(4).c$$java_io_InputStream,[inStream])]);
var entry;
while ((entry=zipStream.getNextEntry$()) != null ){
if (entry.getName$().equals$O(ontologyFile)) {
this.loadOboFile$java_io_InputStream(zipStream);
}}
var elapsed=System.currentTimeMillis$() - now;
System.out.println$S("Loaded Sequence Ontology from " + zipFile + " (" + elapsed + "ms)" );
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
} finally {
this.closeStream$java_io_InputStream(zipStream);
}
});

Clazz.newMeth(C$, 'closeStream$java_io_InputStream', function (is) {
if (is != null ) {
try {
is.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'loadOboFile$java_io_InputStream', function (is) {
var oboFile=Clazz.new_($I$(5).c$$java_io_Reader,[Clazz.new_($I$(6).c$$java_io_InputStream,[is])]);
var parser=Clazz.new_($I$(7));
this.ontology=parser.parseOBO$java_io_BufferedReader$S$S(oboFile, "SO", "the SO ontology");
this.isA=this.ontology.getTerm$S("is_a");
this.storeTermNames$();
});

Clazz.newMeth(C$, 'storeTermNames$', function () {
for (var term, $term = this.ontology.getTerms$().iterator$(); $term.hasNext$()&&((term=($term.next$())),1);) {
if (Clazz.instanceOf(term, "org.biojava.nbio.ontology.Term.Impl")) {
var description=term.getDescription$();
if (description != null ) {
var replaced=this.termsByDescription.get$O(description);
if (replaced != null ) {
var newTermIsObsolete=C$.isObsolete$org_biojava_nbio_ontology_Term(term);
var oldTermIsObsolete=C$.isObsolete$org_biojava_nbio_ontology_Term(replaced);
if (newTermIsObsolete && !oldTermIsObsolete ) {
System.err.println$S("Ignoring " + term.getName$() + " as obsolete and duplicated by " + replaced.getName$() );
term=replaced;
} else if (!newTermIsObsolete && oldTermIsObsolete ) {
System.err.println$S("Ignoring " + replaced.getName$() + " as obsolete and duplicated by " + term.getName$() );
} else {
System.err.println$S("Warning: " + term.getName$() + " has replaced " + replaced.getName$() + " for lookup of '" + description + "'" );
}}this.termsByDescription.put$TK$TV(description, term);
}}}
});

Clazz.newMeth(C$, 'isObsolete$org_biojava_nbio_ontology_Term', function (term) {
var ann=term.getAnnotation$();
if (ann != null ) {
try {
if ($I$(8).TRUE.equals$O(ann.getProperty$O("is_obsolete"))) {
return true;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.util.NoSuchElementException")){
} else {
throw e;
}
}
}return false;
}, 1);

Clazz.newMeth(C$, 'isNucleotideMatch$S', function (soTerm) {
return this.isA$S$S(soTerm, "nucleotide_match");
});

Clazz.newMeth(C$, 'isProteinMatch$S', function (soTerm) {
return this.isA$S$S(soTerm, "protein_match");
});

Clazz.newMeth(C$, 'isPolypeptide$S', function (soTerm) {
return this.isA$S$S(soTerm, "polypeptide");
});

Clazz.newMeth(C$, 'isA$S$S', function (child, parent) {
if (child == null  || parent == null  ) {
return false;
}if (child.equals$O(parent)) {
p$1.termFound$S.apply(this, [child]);
return true;
}var childTerm=this.getTerm$S(child);
if (childTerm != null ) {
p$1.termFound$S.apply(this, [child]);
} else {
p$1.termNotFound$S.apply(this, [child]);
}var parentTerm=this.getTerm$S(parent);
return this.termIsA$org_biojava_nbio_ontology_Term$org_biojava_nbio_ontology_Term(childTerm, parentTerm);
});

Clazz.newMeth(C$, 'termFound$S', function (term) {
{
if (!this.termsFound.contains$O(term)) {
this.termsFound.add$TE(term);
}}}, p$1);

Clazz.newMeth(C$, 'termNotFound$S', function (term) {
{
if (!this.termsNotFound.contains$O(term)) {
System.err.println$S("SO term " + term + " invalid" );
this.termsNotFound.add$TE(term);
}}}, p$1);

Clazz.newMeth(C$, 'termIsA$org_biojava_nbio_ontology_Term$org_biojava_nbio_ontology_Term', function (childTerm, parentTerm) {
if (childTerm == null  || parentTerm == null  ) {
return false;
}if (childTerm === parentTerm ) {
return true;
}if (!this.termIsA.containsKey$O(childTerm)) {
this.findParents$org_biojava_nbio_ontology_Term(childTerm);
}var parents=this.termIsA.get$O(childTerm);
for (var parent, $parent = parents.iterator$(); $parent.hasNext$()&&((parent=($parent.next$())),1);) {
if (this.termIsA$org_biojava_nbio_ontology_Term$org_biojava_nbio_ontology_Term(parent, parentTerm)) {
if (!parents.contains$O(parentTerm)) {
parents.add$TE(parentTerm);
}return true;
}}
return false;
});

Clazz.newMeth(C$, 'findParents$org_biojava_nbio_ontology_Term', function (childTerm) {
var result=Clazz.new_($I$(1));
for (var triple, $triple = this.ontology.getTriples$org_biojava_nbio_ontology_Term$org_biojava_nbio_ontology_Term$org_biojava_nbio_ontology_Term(childTerm, null, this.isA).iterator$(); $triple.hasNext$()&&((triple=($triple.next$())),1);) {
var parent=triple.getObject$();
result.add$TE(parent);
this.findParents$org_biojava_nbio_ontology_Term(parent);
}
this.termIsA.put$TK$TV(childTerm, result);
});

Clazz.newMeth(C$, 'getTerm$S', function (nameOrDescription) {
var t=this.termsByDescription.get$O(nameOrDescription);
if (t == null ) {
try {
t=this.ontology.getTerm$S(nameOrDescription);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.NoSuchElementException")){
} else {
throw e;
}
}
}return t;
});

Clazz.newMeth(C$, 'isSequenceVariant$S', function (soTerm) {
return this.isA$S$S(soTerm, "sequence_variant");
});

Clazz.newMeth(C$, 'termsFound$', function () {
{
$I$(9).sort$java_util_List$java_util_Comparator(this.termsFound, String.CASE_INSENSITIVE_ORDER);
return this.termsFound;
}});

Clazz.newMeth(C$, 'termsNotFound$', function () {
{
$I$(9).sort$java_util_List$java_util_Comparator(this.termsNotFound, String.CASE_INSENSITIVE_ORDER);
return this.termsNotFound;
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
