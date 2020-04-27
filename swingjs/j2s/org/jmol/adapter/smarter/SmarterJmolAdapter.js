(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),I$=[[0,'org.jmol.adapter.smarter.Resolver','org.jmol.util.Logger','org.jmol.script.SV','javajs.util.PT','javajs.util.Rdr','org.jmol.adapter.smarter.AtomSetCollectionReader','org.jmol.adapter.smarter.AtomSetCollection','org.jmol.adapter.smarter.AtomIterator','org.jmol.adapter.smarter.BondIterator','org.jmol.adapter.smarter.StructureIterator']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SmarterJmolAdapter", null, 'org.jmol.api.JmolAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['PATH_SEPARATOR']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getFileTypeName$O', function (ascOrReader) {
if (Clazz.instanceOf(ascOrReader, "org.jmol.adapter.smarter.AtomSetCollection")) return (ascOrReader).fileTypeName;
if (Clazz.instanceOf(ascOrReader, "java.io.BufferedReader")) return $I$(1).getFileType$java_io_BufferedReader(ascOrReader);
if (Clazz.instanceOf(ascOrReader, "java.io.InputStream")) return $I$(1).getBinaryType$java_io_InputStream(ascOrReader);
return null;
});

Clazz.newMeth(C$, 'getAtomSetCollectionReader$S$S$O$java_util_Map', function (name, type, bufferedReader, htParams) {
return C$.staticGetAtomSetCollectionReader$S$S$O$java_util_Map(name, type, bufferedReader, htParams);
});

Clazz.newMeth(C$, 'staticGetAtomSetCollectionReader$S$S$O$java_util_Map', function (name, type, bufferedReader, htParams) {
try {
var ret=$I$(1).getAtomCollectionReader$S$S$O$java_util_Map$I(name, type, bufferedReader, htParams, -1);
if (Clazz.instanceOf(ret, "java.lang.String")) {
try {
C$.close$O(bufferedReader);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
} else {
(ret).setup$S$java_util_Map$O(name, htParams, bufferedReader);
}return ret;
} catch (e) {
try {
C$.close$O(bufferedReader);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
bufferedReader=null;
$I$(2).error$S("" + e);
return "" + e;
}
}, 1);

Clazz.newMeth(C$, 'getAtomSetCollectionFromReader$S$O$java_util_Map', function (fname, readerOrDocument, htParams) {
var ret=$I$(1).getAtomCollectionReader$S$S$O$java_util_Map$I(fname, null, readerOrDocument, htParams, -1);
if (Clazz.instanceOf(ret, "org.jmol.adapter.smarter.AtomSetCollectionReader")) {
(ret).setup$S$java_util_Map$O(fname, htParams, readerOrDocument);
return (ret).readData$();
}return "" + ret;
});

Clazz.newMeth(C$, 'getAtomSetCollection$O', function (ascReader) {
return C$.staticGetAtomSetCollection$org_jmol_adapter_smarter_AtomSetCollectionReader(ascReader);
});

Clazz.newMeth(C$, 'staticGetAtomSetCollection$org_jmol_adapter_smarter_AtomSetCollectionReader', function (a) {
var br=null;
try {
br=a.reader;
var ret=a.readData$();
if (!(Clazz.instanceOf(ret, "org.jmol.adapter.smarter.AtomSetCollection"))) return ret;
var asc=ret;
if (asc.errorMessage != null ) return asc.errorMessage;
return asc;
} catch (e) {
try {
(function(a,f){return f.apply(null,a)})([e.toString()],$I$(2).info$S);
} catch (ee) {
if (Clazz.exceptionOf(ee,"Exception")){
(function(a,f){return f.apply(null,a)})([e.toString()],$I$(2).error$S);
} else {
throw ee;
}
}
try {
br.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
br=null;
$I$(2).error$S("" + e);
return "" + e;
}
}, 1);

Clazz.newMeth(C$, 'getAtomSetCollectionReaders$org_jmol_api_JmolFilesReaderInterface$SA$SA$java_util_Map$Z', function (filesReader, names, types, htParams, getReadersOnly) {
var vwr=htParams.get$O("vwr");
var size=names.length;
var reader=null;
if (htParams.containsKey$O("concatenate")) {
var s="";
for (var i=0; i < size; i++) {
var name=names[i];
var f=vwr.getFileAsString3$S$Z$S(name, false, null);
if (i > 0 && size <= 3  && f.startsWith$S("{") ) {
var type=(f.contains$CharSequence("version\":\"DSSR") ? "dssr" : f.contains$CharSequence("/outliers/") ? "validation" : "domains");
var x=vwr.parseJSONMap$S(f);
if (x != null ) htParams.put$O$O(type, (type.equals$O("dssr") ? x : $I$(3).getVariableMap$java_util_Map(x)));
continue;
}if (name.indexOf$S("|") >= 0) name=$I$(4).rep$S$S$S(name, "_", "/");
if (i == 1) {
if (name.indexOf$S("/rna3dhub/") >= 0) {
s += "\n_rna3d \n;" + f + "\n;\n" ;
continue;
}if (name.indexOf$S("/dssr/") >= 0) {
s += "\n_dssr \n;" + f + "\n;\n" ;
continue;
}}s += f;
if (!s.endsWith$S("\n")) s += "\n";
}
size=1;
reader=$I$(5).getBR$S(s);
}var readers=(getReadersOnly ? Clazz.array($I$(6), [size]) : null);
var atomsets=(getReadersOnly ? null : Clazz.array($I$(7), [size]));
var r=null;
for (var i=0; i < size; i++) {
try {
htParams.put$O$O("vwr", vwr);
if (reader == null ) reader=filesReader.getBufferedReaderOrBinaryDocument$I$Z(i, false);
if (!(Clazz.instanceOf(reader, "java.io.BufferedReader") || Clazz.instanceOf(reader, "javajs.api.GenericBinaryDocument") )) return reader;
var fullPathName=names[i];
htParams.put$O$O("fullPathName", fullPathName);
var ret=(function(a,f){return f.apply(null,a)})([names[i], (types == null  ? null : types[i]), reader, htParams, i],$I$(1).getAtomCollectionReader$S$S$O$java_util_Map$I);
if (!(Clazz.instanceOf(ret, "org.jmol.adapter.smarter.AtomSetCollectionReader"))) return ret;
r=ret;
r.setup$S$java_util_Map$O(null, null, null);
if (r.isBinary) {
r.setup$S$java_util_Map$O(names[i], htParams, filesReader.getBufferedReaderOrBinaryDocument$I$Z(i, true));
} else {
r.setup$S$java_util_Map$O(names[i], htParams, reader);
}reader=null;
if (getReadersOnly) {
readers[i]=r;
} else {
ret=r.readData$();
if (!(Clazz.instanceOf(ret, "org.jmol.adapter.smarter.AtomSetCollection"))) return ret;
atomsets[i]=ret;
if (atomsets[i].errorMessage != null ) return atomsets[i].errorMessage;
}} catch (e) {
$I$(2).error$S("" + e);
e.printStackTrace$();
return "" + e;
}
}
if (getReadersOnly) return readers;
return this.getAtomSetCollectionFromSet$O$O$java_util_Map(readers, atomsets, htParams);
});

Clazz.newMeth(C$, 'getAtomSetCollectionFromSet$O$O$java_util_Map', function (readerSet, atomsets, htParams) {
var readers=readerSet;
var asc=(atomsets == null  ? Clazz.array($I$(7), [readers.length]) : atomsets);
if (atomsets == null ) {
for (var i=0; i < readers.length; i++) {
if (readers[i] != null ) try {
var ret=readers[i].readData$();
if (!(Clazz.instanceOf(ret, "org.jmol.adapter.smarter.AtomSetCollection"))) return ret;
asc[i]=ret;
if (asc[i].errorMessage != null ) return asc[i].errorMessage;
} catch (e) {
$I$(2).error$S("" + e);
return "" + e;
}
}
}var result;
if (htParams.containsKey$O("trajectorySteps")) {
result=asc[0];
try {
if (asc.length > 1) asc[0].setInfo$S$O("ignoreUnitCell", asc[1].atomSetInfo.get$O("ignoreUnitCell"));
result.finalizeTrajectoryAs$javajs_util_Lst$javajs_util_Lst(htParams.get$O("trajectorySteps"), htParams.get$O("vibrationSteps"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (result.errorMessage == null ) result.errorMessage="" + e;
} else {
throw e;
}
}
} else if (asc[0].isTrajectory) {
result=asc[0];
for (var i=1; i < asc.length; i++) asc[0].mergeTrajectories$org_jmol_adapter_smarter_AtomSetCollection(asc[i]);

} else {
result=(asc.length == 1 ? asc[0] : Clazz.new_($I$(7,1).c$$S$org_jmol_adapter_smarter_AtomSetCollectionReader$org_jmol_adapter_smarter_AtomSetCollectionA$javajs_util_Lst,["Array", null, asc, null]));
}return (result.errorMessage == null  ? result : result.errorMessage);
});

Clazz.newMeth(C$, 'getAtomSetCollectionFromDOM$O$java_util_Map', function (DOMNode, htParams) {
try {
var ret=$I$(1).DOMResolve$java_util_Map(htParams);
if (!(Clazz.instanceOf(ret, "org.jmol.adapter.smarter.AtomSetCollectionReader"))) return ret;
var a=ret;
a.setup$S$java_util_Map$O("DOM node", htParams, null);
ret=a.readDataObject$O(DOMNode);
if (!(Clazz.instanceOf(ret, "org.jmol.adapter.smarter.AtomSetCollection"))) return ret;
var asc=ret;
if (asc.errorMessage != null ) return asc.errorMessage;
return asc;
} catch (e) {
$I$(2).error$S("" + e);
return "" + e;
}
});

Clazz.newMeth(C$, 'finish$O', function (asc) {
(asc).finish$();
});

Clazz.newMeth(C$, 'getAtomSetCollectionName$O', function (asc) {
return (asc).collectionName;
});

Clazz.newMeth(C$, 'getAtomSetCollectionAuxiliaryInfo$O', function (asc) {
return (asc).atomSetInfo;
});

Clazz.newMeth(C$, 'getAtomSetCount$O', function (asc) {
return (asc).atomSetCount;
});

Clazz.newMeth(C$, 'getAtomSetNumber$O$I', function (asc, atomSetIndex) {
return (asc).getAtomSetNumber$I(atomSetIndex);
});

Clazz.newMeth(C$, 'getAtomSetName$O$I', function (asc, atomSetIndex) {
return (asc).getAtomSetName$I(atomSetIndex);
});

Clazz.newMeth(C$, 'getAtomSetAuxiliaryInfo$O$I', function (asc, atomSetIndex) {
return (asc).getAtomSetAuxiliaryInfo$I(atomSetIndex);
});

Clazz.newMeth(C$, 'getHydrogenAtomCount$O', function (asc) {
return (asc).getHydrogenAtomCount$();
});

Clazz.newMeth(C$, 'getBondList$O', function (asc) {
return (asc).getBondList$();
});

Clazz.newMeth(C$, 'getAtomCount$O', function (asc) {
var a=asc;
return (a.bsAtoms == null  ? a.ac : a.bsAtoms.cardinality$());
});

Clazz.newMeth(C$, 'coordinatesAreFractional$O', function (asc) {
return (asc).coordinatesAreFractional;
});

Clazz.newMeth(C$, 'getAtomIterator$O', function (asc) {
return Clazz.new_($I$(8,1).c$$org_jmol_adapter_smarter_AtomSetCollection,[asc]);
});

Clazz.newMeth(C$, 'getBondIterator$O', function (asc) {
return Clazz.new_($I$(9,1).c$$org_jmol_adapter_smarter_AtomSetCollection,[asc]);
});

Clazz.newMeth(C$, 'getStructureIterator$O', function (asc) {
return (asc).structureCount == 0 ? null : Clazz.new_($I$(10,1).c$$org_jmol_adapter_smarter_AtomSetCollection,[asc]);
});

Clazz.newMeth(C$, 'close$O', function (bufferedReader) {
if (Clazz.instanceOf(bufferedReader, "java.io.BufferedReader")) (bufferedReader).close$();
 else (bufferedReader).close$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PATH_SEPARATOR=System.getProperty$S$S("path.separator", "/");
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
