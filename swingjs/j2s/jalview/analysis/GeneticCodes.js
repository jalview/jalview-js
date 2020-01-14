(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'java.util.HashMap','java.util.LinkedHashMap','java.io.BufferedReader','java.io.InputStreamReader','jalview.bin.Cache','java.util.StringTokenizer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GeneticCodes");
C$.NUCS_COUNT=0;
C$.NUCS_COUNT_SQUARED=0;
C$.NUCS_COUNT_CUBED=0;
C$.instance=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NUCS_COUNT="TCAG".length$();
C$.NUCS_COUNT_SQUARED=C$.NUCS_COUNT * C$.NUCS_COUNT;
C$.NUCS_COUNT_CUBED=C$.NUCS_COUNT * C$.NUCS_COUNT * C$.NUCS_COUNT ;
C$.instance=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ambiguityCodes=null;
this.codeTables=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
if (C$.instance == null ) {
this.ambiguityCodes=Clazz.new_($I$(1));
this.codeTables=Clazz.new_($I$(2));
this.loadAmbiguityCodes$S("/AmbiguityCodes.dat");
this.loadCodes$S("/GeneticCodes.dat");
}}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'getCodeTables$', function () {
return this.codeTables.values$();
});

Clazz.newMeth(C$, 'getCodeTable$S', function (id) {
return this.codeTables.get$O(id);
});

Clazz.newMeth(C$, 'getStandardCodeTable$', function () {
return this.codeTables.values$().iterator$().next$();
});

Clazz.newMeth(C$, 'loadCodes$S', function (fileName) {
try {
var is=this.getClass$().getResourceAsStream$S(fileName);
if (is == null ) {
System.err.println$S("Resource file not found: " + fileName);
return;
}var dataIn=Clazz.new_($I$(3).c$$java_io_Reader,[Clazz.new_($I$(4).c$$java_io_InputStream,[is])]);
var line="";
while (line != null  && !line.startsWith$S("Genetic-code-table") ){
line=this.readLine$java_io_BufferedReader(dataIn);
}
line=this.readLine$java_io_BufferedReader(dataIn);
while (line.startsWith$S("{")){
line=this.loadOneTable$java_io_BufferedReader(dataIn);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"NullPointerException")){
$I$(5).log.error$O("Error reading genetic codes data file " + fileName + ": " + e.getMessage$() );
} else {
throw e;
}
}
if (this.codeTables.isEmpty$()) {
System.err.println$S("No genetic code tables loaded, check format of file " + fileName);
}});

Clazz.newMeth(C$, 'loadAmbiguityCodes$S', function (fileName) {
try {
var is=this.getClass$().getResourceAsStream$S(fileName);
if (is == null ) {
System.err.println$S("Resource file not found: " + fileName);
return;
}var dataIn=Clazz.new_($I$(3).c$$java_io_Reader,[Clazz.new_($I$(4).c$$java_io_InputStream,[is])]);
var line="";
while (line != null ){
line=this.readLine$java_io_BufferedReader(dataIn);
if (line != null  && !"DNA".equals$O(line.toUpperCase$()) ) {
var tokens=line.split$S("\\t");
if (tokens.length == 2) {
this.ambiguityCodes.put$TK$TV(tokens[0].toUpperCase$(), tokens[1].toUpperCase$());
} else {
System.err.println$S("Unexpected data in " + fileName + ": " + line );
}}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(5).log.error$O("Error reading nucleotide ambiguity codes data file: " + e.getMessage$());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'readLine$java_io_BufferedReader', function (dataIn) {
var line=dataIn.readLine$();
while (line != null  && line.startsWith$S("#") ){
line=this.readLine$java_io_BufferedReader(dataIn);
}
return line == null  ? null : line.trim$();
});

Clazz.newMeth(C$, 'loadOneTable$java_io_BufferedReader', function (dataIn) {
var name=null;
var id=null;
var codons=Clazz.new_($I$(1));
var line=this.readLine$java_io_BufferedReader(dataIn);
while (line != null  && !line.startsWith$S("}") ){
if (line.startsWith$S("name") && name == null  ) {
name=line.substring$I$I(line.indexOf$S("\"") + 1, line.lastIndexOf$S("\""));
} else if (line.startsWith$S("id")) {
id=Clazz.new_($I$(6).c$$S,[line.substring$I(2)]).nextToken$();
} else if (line.startsWith$S("ncbieaa")) {
var aminos=line.substring$I$I(line.indexOf$S("\"") + 1, line.lastIndexOf$S("\""));
if (aminos.length$() != C$.NUCS_COUNT_CUBED) {
$I$(5).log.error$O("wrong data length in code table: " + line);
} else {
for (var i=0; i < aminos.length$(); i++) {
var peptide=String.valueOf$C(aminos.charAt$I(i));
var codon1="TCAG".charAt$I((i/C$.NUCS_COUNT_SQUARED|0));
var codon2="TCAG".charAt$I(((i % C$.NUCS_COUNT_SQUARED)/C$.NUCS_COUNT|0));
var codon3="TCAG".charAt$I(i % C$.NUCS_COUNT);
var codon= String.instantialize(Clazz.array(Character.TYPE, -1, [codon1, codon2, codon3]));
codons.put$TK$TV(codon, peptide);
}
}}line=this.readLine$java_io_BufferedReader(dataIn);
}
this.registerCodeTable$S$S$java_util_Map(id, name, codons);
return this.readLine$java_io_BufferedReader(dataIn);
});

Clazz.newMeth(C$, 'registerCodeTable$S$S$java_util_Map', function (id, name, codons) {
this.codeTables.put$TK$TV(id, ((P$.GeneticCodes$1||
(function(){var C$=Clazz.newClass(P$, "GeneticCodes$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.analysis.GeneticCodeI', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ambiguous=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.ambiguous=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'translateCanonical$S', function (codon) {
return this.$finals$.codons.get$O(codon.toUpperCase$());
});

Clazz.newMeth(C$, 'translate$S', function (codon) {
var upper=codon.toUpperCase$();
var peptide=this.translateCanonical$S(upper);
if (peptide == null ) {
peptide=this.b$['jalview.analysis.GeneticCodes'].getAmbiguousTranslation$S$java_util_Map$jalview_analysis_GeneticCodeI.apply(this.b$['jalview.analysis.GeneticCodes'], [upper, this.ambiguous, this]);
}return peptide;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.$finals$.id;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.$finals$.name;
});
})()
), Clazz.new_(P$.GeneticCodes$1.$init$, [this, {codons: codons, id: id, name: name}])));
});

Clazz.newMeth(C$, 'getAmbiguousTranslation$S$java_util_Map$jalview_analysis_GeneticCodeI', function (codon, ambiguous, codeTable) {
if (codon.length$() != 3) {
return null;
}var isAmbiguous=false;
var expanded=Clazz.array(Character.TYPE, [3, null]);
for (var i=0; i < 3; i++) {
var base=String.valueOf$C(codon.charAt$I(i));
if (this.ambiguityCodes.containsKey$O(base)) {
isAmbiguous=true;
base=this.ambiguityCodes.get$O(base);
}expanded[i]=base.toCharArray$();
}
if (!isAmbiguous) {
return null;
}var peptide=null;
for (var c1, $c1 = 0, $$c1 = expanded[0]; $c1<$$c1.length&&((c1=($$c1[$c1])),1);$c1++) {
for (var c2, $c2 = 0, $$c2 = expanded[1]; $c2<$$c2.length&&((c2=($$c2[$c2])),1);$c2++) {
for (var c3, $c3 = 0, $$c3 = expanded[2]; $c3<$$c3.length&&((c3=($$c3[$c3])),1);$c3++) {
var cdn=Clazz.array(Character.TYPE, -1, [c1, c2, c3]);
var possibleCodon=String.valueOf$CA(cdn);
var pep=codeTable.translate$S(possibleCodon);
if (pep == null  || (peptide != null  && !pep.equals$O(peptide) ) ) {
ambiguous.put$TK$TV(codon, null);
return null;
}peptide=pep;
}
}
}
ambiguous.put$TK$TV(codon, peptide);
return peptide;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
