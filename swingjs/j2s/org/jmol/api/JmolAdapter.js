(function(){var P$=Clazz.newPackage("org.jmol.api"),I$=[[0,'org.jmol.util.Elements','org.jmol.api.JmolViewer','javajs.util.PT']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JmolAdapter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['cellParamNames','String[]']]]

Clazz.newMeth(C$, 'getElementSymbol$I', function (elementNumber) {
return $I$(1).elementSymbolFromNumber$I(elementNumber);
}, 1);

Clazz.newMeth(C$, 'getElementNumber$S', function (elementSymbol) {
return $I$(1).elementNumberFromSymbol$S$Z(elementSymbol, false);
}, 1);

Clazz.newMeth(C$, 'getNaturalIsotope$I', function (elementNumber) {
return $I$(1).getNaturalIsotope$I(elementNumber);
}, 1);

Clazz.newMeth(C$, 'getBondingRadius$I$I', function (atomicNumberWithIsotope, charge) {
return $I$(1).getBondingRadius$I$I(atomicNumberWithIsotope, charge);
}, 1);

Clazz.newMeth(C$, 'getAtomSetCollectionFromReaderType$S$S$O$java_util_Map', function (name, type, bufferedReader, htParams) {
var a=this.getAtomSetCollectionReader$S$S$O$java_util_Map(name, type, bufferedReader, ($I$(2).allocateViewer$O$org_jmol_api_JmolAdapter(null, this)).setLoadParameters$java_util_Map$Z(htParams, false));
if (Clazz.instanceOf(a, "java.lang.String")) return a;
return this.getAtomSetCollection$O(a);
});

Clazz.newMeth(C$, 'openBufferedReader$S$java_io_BufferedReader', function (name, bufferedReader) {
return this.getAtomSetCollectionFromReaderType$S$S$O$java_util_Map(name, null, bufferedReader, null);
});

Clazz.newMeth(C$, 'openBufferedReader$S$java_io_BufferedReader$java_util_Map', function (name, bufferedReader, htParams) {
return this.getAtomSetCollectionFromReaderType$S$S$O$java_util_Map(name, null, bufferedReader, htParams);
});

Clazz.newMeth(C$, 'openBufferedReader$S$S$java_io_BufferedReader', function (name, type, bufferedReader) {
return this.getAtomSetCollectionFromReaderType$S$S$O$java_util_Map(name, type, bufferedReader, null);
});

Clazz.newMeth(C$, 'canonizeAlphaDigit$C', function (ch) {
return ($I$(3).isLetterOrDigit$C(ch) ? ch : "\u0000");
}, 1);

Clazz.newMeth(C$, 'canonizeInsertionCode$C', function (insertionCode) {
return C$.canonizeAlphaDigit$C(insertionCode);
}, 1);

Clazz.newMeth(C$, 'canonizeAlternateLocationID$C', function (altLoc) {
return C$.canonizeAlphaDigit$C(altLoc);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.cellParamNames=Clazz.array(String, -1, ["_cell_length_a", "_cell_length_b", "_cell_length_c", "_cell_angle_alpha", "_cell_angle_beta", "_cell_angle_gamma"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:29 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
