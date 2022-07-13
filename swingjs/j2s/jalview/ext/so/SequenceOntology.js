(function(){var P$=Clazz.newPackage("jalview.ext.so"),p$1={},I$=[[0,'java.util.ArrayList','java.util.HashMap','java.util.zip.ZipInputStream','java.io.BufferedInputStream','jalview.bin.Console','java.io.BufferedReader','java.io.InputStreamReader','org.biojava.nbio.ontology.io.OboParser','java.util.Collections']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceOntology", null, null, 'jalview.io.gff.SequenceOntologyI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ontology','org.biojava.nbio.ontology.Ontology','isA','org.biojava.nbio.ontology.Term','termsByDescription','java.util.Map','+termIsA','termsFound','java.util.List','+termsNotFound']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.termsFound=Clazz.new_($I$(1,1));
this.termsNotFound=Clazz.new_($I$(1,1));
this.termsByDescription=Clazz.new_($I$(2,1));
this.termIsA=Clazz.new_($I$(2,1));
this.loadOntologyZipFile$S("so-xp-simple.obo");
}, 1);

Clazz.newMeth(C$, 'loadOntologyZipFile$S',  function (ontologyFile) {
var now=System.currentTimeMillis$();
var zipStream=null;
try {
var zipFile=ontologyFile + ".zip";
var inStream=this.getClass$().getResourceAsStream$S("/" + zipFile);
zipStream=Clazz.new_([Clazz.new_($I$(4,1).c$$java_io_InputStream,[inStream])],$I$(3,1).c$$java_io_InputStream);
var entry;
while ((entry=zipStream.getNextEntry$()) != null ){
if (entry.getName$().equals$O(ontologyFile)) {
this.loadOboFile$java_io_InputStream(zipStream);
}}
var elapsed=Long.$sub(System.currentTimeMillis$(),now);
$I$(5,"info$S",["Loaded Sequence Ontology from " + zipFile + " (" + Long.$s(elapsed) + "ms)" ]);
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

Clazz.newMeth(C$, 'closeStream$java_io_InputStream',  function (is) {
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

Clazz.newMeth(C$, 'loadOboFile$java_io_InputStream',  function (is) {
var oboFile=Clazz.new_([Clazz.new_($I$(7,1).c$$java_io_InputStream,[is])],$I$(6,1).c$$java_io_Reader);
var parser=Clazz.new_($I$(8,1));
this.ontology=parser.parseOBO$java_io_BufferedReader$S$S(oboFile, "SO", "the SO ontology");
this.isA=this.ontology.getTerm$S("is_a");
this.storeTermNames$();
});

Clazz.newMeth(C$, 'storeTermNames$',  function () {
for (var term, $term = this.ontology.getTerms$().iterator$(); $term.hasNext$()&&((term=($term.next$())),1);) {
if (Clazz.instanceOf(term, "org.biojava.nbio.ontology.Term.Impl")) {
var description=term.getDescription$();
if (description != null ) {
var replaced=this.termsByDescription.get$O(description);
if (replaced != null ) {
var newTermIsObsolete=C$.isObsolete$org_biojava_nbio_ontology_Term(term);
var oldTermIsObsolete=C$.isObsolete$org_biojava_nbio_ontology_Term(replaced);
if (newTermIsObsolete && !oldTermIsObsolete ) {
$I$(5,"debug$S",["Ignoring " + term.getName$() + " as obsolete and duplicated by " + replaced.getName$() ]);
term=replaced;
} else if (!newTermIsObsolete && oldTermIsObsolete ) {
$I$(5,"debug$S",["Ignoring " + replaced.getName$() + " as obsolete and duplicated by " + term.getName$() ]);
} else {
$I$(5,"debug$S",["Warning: " + term.getName$() + " has replaced " + replaced.getName$() + " for lookup of '" + description + "'" ]);
}}this.termsByDescription.put$O$O(description, term);
}}}
});

Clazz.newMeth(C$, 'isObsolete$org_biojava_nbio_ontology_Term',  function (term) {
var ann=term.getAnnotation$();
if (ann != null ) {
try {
if (Boolean.TRUE.equals$O(ann.getProperty$O("is_obsolete"))) {
return true;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.util.NoSuchElementException")){
} else {
throw e;
}
}
}return false;
}, 1);

Clazz.newMeth(C$, 'isNucleotideMatch$S',  function (soTerm) {
return this.isA$S$S(soTerm, "nucleotide_match");
});

Clazz.newMeth(C$, 'isProteinMatch$S',  function (soTerm) {
return this.isA$S$S(soTerm, "protein_match");
});

Clazz.newMeth(C$, 'isPolypeptide$S',  function (soTerm) {
return this.isA$S$S(soTerm, "polypeptide");
});

Clazz.newMeth(C$, 'isA$S$S',  function (child, parent) {
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

Clazz.newMeth(C$, 'termFound$S',  function (term) {
{
if (!this.termsFound.contains$O(term)) {
this.termsFound.add$O(term);
}}}, p$1);

Clazz.newMeth(C$, 'termNotFound$S',  function (term) {
{
if (!this.termsNotFound.contains$O(term)) {
$I$(5).error$S("SO term " + term + " invalid" );
this.termsNotFound.add$O(term);
}}}, p$1);

Clazz.newMeth(C$, 'termIsA$org_biojava_nbio_ontology_Term$org_biojava_nbio_ontology_Term',  function (childTerm, parentTerm) {
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
parents.add$O(parentTerm);
}return true;
}}
return false;
});

Clazz.newMeth(C$, 'findParents$org_biojava_nbio_ontology_Term',  function (childTerm) {
var result=Clazz.new_($I$(1,1));
for (var triple, $triple = this.ontology.getTriples$org_biojava_nbio_ontology_Term$org_biojava_nbio_ontology_Term$org_biojava_nbio_ontology_Term(childTerm, null, this.isA).iterator$(); $triple.hasNext$()&&((triple=($triple.next$())),1);) {
var parent=triple.getObject$();
result.add$O(parent);
this.findParents$org_biojava_nbio_ontology_Term(parent);
}
this.termIsA.put$O$O(childTerm, result);
});

Clazz.newMeth(C$, 'getTerm$S',  function (nameOrDescription) {
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

Clazz.newMeth(C$, 'isSequenceVariant$S',  function (soTerm) {
return this.isA$S$S(soTerm, "sequence_variant");
});

Clazz.newMeth(C$, 'termsFound$',  function () {
{
$I$(9).sort$java_util_List$java_util_Comparator(this.termsFound, String.CASE_INSENSITIVE_ORDER);
return this.termsFound;
}});

Clazz.newMeth(C$, 'termsNotFound$',  function () {
{
$I$(9).sort$java_util_List$java_util_Comparator(this.termsNotFound, String.CASE_INSENSITIVE_ORDER);
return this.termsNotFound;
}});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
