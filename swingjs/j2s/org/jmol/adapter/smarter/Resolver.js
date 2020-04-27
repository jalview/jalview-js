(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),I$=[[0,'org.jmol.viewer.FileManager','org.jmol.util.Logger','org.jmol.adapter.smarter.SmarterJmolAdapter','org.jmol.api.Interface','org.jmol.viewer.JC','javajs.util.Rdr','java.io.BufferedInputStream','javajs.util.LimitedLineReader','javajs.util.PT','java.util.StringTokenizer','org.jmol.adapter.smarter.AtomSetCollectionReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Resolver");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['readerSets','String[]','+sptRecords','+m3dStartRecords','+cubeFileStartRecords','+mol2Records','+webmoFileStartRecords','+moldenFileStartRecords','+dcdFileStartRecords','+tlsDataOnlyFileStartRecords','+inputFileStartRecords','+magresFileStartRecords','+pymolStartRecords','+janaStartRecords','+jsonStartRecords','+jcampdxStartRecords','+jmoldataStartRecords','+pqrStartRecords','+p2nStartRecords','+cif2StartRecords','+xmlStartRecords','+cfiStartRecords','fileStartsWithRecords','String[][]','n','int[]','mmcifLineStartRecords','String[]','+cifLineStartRecords','+pdbLineStartRecords','+cgdLineStartRecords','+shelxLineStartRecords','+ghemicalMMLineStartRecords','+jaguarLineStartRecords','+mdlLineStartRecords','+spartanSmolLineStartRecords','+csfLineStartRecords','+mdTopLineStartRecords','+hyperChemLineStartRecords','+vaspOutcarLineStartRecords','lineStartsWithRecords','String[][]','bilbaoContainsRecords','String[]','+xmlContainsRecords','+gaussianContainsRecords','+ampacContainsRecords','+mopacContainsRecords','+qchemContainsRecords','+gamessUKContainsRecords','+gamessUSContainsRecords','+spartanBinaryContainsRecords','+spartanContainsRecords','+adfContainsRecords','+psiContainsRecords','+nwchemContainsRecords','+uicrcifContainsRecords','+dgridContainsRecords','+crystalContainsRecords','+dmolContainsRecords','+gulpContainsRecords','+espressoContainsRecords','+siestaContainsRecords','+xcrysDenContainsRecords','+mopacArchiveContainsRecords','+abinitContainsRecords','+qcJsonContainsRecords','+gaussianFchkContainsRecords','+inputContainsRecords','+aflowContainsRecords','+magCifContainsRecords','headerContainsRecords','String[][]']]]

Clazz.newMeth(C$, 'getReaderClassBase$S', function (type) {
var name=type + "Reader";
if (type.startsWith$S("Xml")) return "org.jmol.adapter.readers." + "xml." + name ;
var key=";" + type + ";" ;
for (var i=1; i < C$.readerSets.length; i+=2) if (C$.readerSets[i].indexOf$S(key) >= 0) return "org.jmol.adapter.readers." + C$.readerSets[i - 1] + name ;

return "org.jmol.adapter.readers." + "???." + name ;
}, 1);

Clazz.newMeth(C$, 'getFileType$java_io_BufferedReader', function (br) {
try {
return C$.determineAtomSetCollectionReader$O$Z(br, false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getAtomCollectionReader$S$S$O$java_util_Map$I', function (fullName, type, readerOrDocument, htParams, ptFile) {
var readerName;
fullName=$I$(1).fixDOSName$S(fullName);
var errMsg=null;
if (type == null ) {
type=htParams.get$O("filter");
var pt=(type == null  ? -1 : type.toLowerCase$().indexOf$S("filetype"));
type=(pt < 0 ? null : type.substring$I$I(pt + 8, (type + ";").indexOf$S$I(";", pt)).replace$C$C("=", " ").trim$());
}if (type != null ) {
readerName=C$.getReaderFromType$S(type);
if (readerName == null ) readerName=C$.getReaderFromType$S("Xml" + type);
if (readerName == null ) errMsg="unrecognized file format type " + type;
 else $I$(2).info$S("The Resolver assumes " + readerName);
} else {
readerName=C$.determineAtomSetCollectionReader$O$Z(readerOrDocument, true);
if (readerName.charAt$I(0) == "\n") {
type=htParams.get$O("defaultType");
if (type != null ) {
type=C$.getReaderFromType$S(type);
if (type != null ) readerName=type;
}}if (readerName.charAt$I(0) == "\n") errMsg="unrecognized file format for file\n" + fullName + "\n" + C$.split$S$I(readerName, 50) ;
 else if (readerName.equals$O("spt")) errMsg="NOTE: file recognized as a script file: " + fullName + "\n" ;
 else if (!fullName.equals$O("ligand")) $I$(2).info$S("The Resolver thinks " + readerName);
}if (errMsg != null ) {
$I$(3).close$O(readerOrDocument);
return errMsg;
}htParams.put$O$O("ptFile", Integer.valueOf$I(ptFile));
if (ptFile <= 0) htParams.put$O$O("readerName", readerName);
if (readerName.indexOf$S("Xml") == 0) readerName="Xml";
return C$.getReader$S$java_util_Map(readerName, htParams);
}, 1);

Clazz.newMeth(C$, 'getReader$S$java_util_Map', function (readerName, htParams) {
var rdr=null;
var className=null;
var err=null;
className=C$.getReaderClassBase$S(readerName);
if ((rdr=(function(a,f){return f.apply(null,a)})([className, htParams.get$O("vwr"), "reader"],$I$(4).getInterface$S$org_jmol_viewer_Viewer$S)) == null ) {
err=$I$(5).READER_NOT_FOUND + className;
$I$(2).error$S(err);
return err;
}return rdr;
}, 1);

Clazz.newMeth(C$, 'getReaderFromType$S', function (type) {
type=";" + type.toLowerCase$() + ";" ;
if (";zmatrix;cfi;c;vfi;v;mnd;jag;adf;gms;g;gau;mp;nw;orc;pqs;qc;".indexOf$S(type) >= 0) return "Input";
var set;
var pt;
for (var i=C$.readerSets.length; --i >= 0; ) if ((pt=(set=C$.readerSets[i--]).toLowerCase$().indexOf$S(type)) >= 0) return set.substring$I$I(pt + 1, set.indexOf$S$I(";", pt + 2));

return null;
}, 1);

Clazz.newMeth(C$, 'split$S$I', function (a, n) {
var s="";
var l=a.length$();
for (var i=0, j=0; i < l; i=j) s += a.substring$I$I(i, (j=Math.min(i + n, l))) + "\n";

return s;
}, 1);

Clazz.newMeth(C$, 'DOMResolve$java_util_Map', function (htParams) {
var rdrName=C$.getXmlType$S(htParams.get$O("nameSpaceInfo"));
if ($I$(2).debugging) {
$I$(2).debug$S("The Resolver thinks " + rdrName);
}htParams.put$O$O("readerName", rdrName);
return C$.getReader$S$java_util_Map("XmlReader", htParams);
}, 1);

Clazz.newMeth(C$, 'determineAtomSetCollectionReader$O$Z', function (readerOrDocument, returnLines) {
var readerName;
if (Clazz.instanceOf(readerOrDocument, "javajs.api.GenericBinaryDocument")) {
var doc=readerOrDocument;
readerName=C$.getBinaryType$java_io_InputStream(doc.getInputStream$());
return (readerName == null  ? "binary file type not recognized" : readerName);
}if (Clazz.instanceOf(readerOrDocument, "java.io.InputStream")) {
readerName=C$.getBinaryType$java_io_InputStream(readerOrDocument);
if (readerName != null ) return readerName;
readerOrDocument=(function(a,f){return f.apply(null,a)})([Clazz.new_($I$(7,1).c$$java_io_InputStream,[readerOrDocument]), null],$I$(6).getBufferedReader$java_io_BufferedInputStream$S);
}var llr=Clazz.new_($I$(8,1).c$$java_io_BufferedReader$I,[readerOrDocument, 16384]);
var leader=llr.getHeader$I(64).trim$();
if (leader.indexOf$S("PNG") == 1 && leader.indexOf$S("PNGJ") >= 0 ) return "pngj";
if (leader.indexOf$S("PNG") == 1 || leader.indexOf$S("JPG") == 1  || leader.indexOf$S("JFIF") == 6 ) return "spt";
if (leader.indexOf$S("\"num_pairs\"") >= 0) return "dssr";
if ((readerName=C$.checkFileStart$S(leader)) != null ) {
return (readerName.equals$O("Xml") ? C$.getXmlType$S(llr.getHeader$I(0)) : readerName);
}var lines=Clazz.array(String, [16]);
var nLines=0;
for (var i=0; i < lines.length; ++i) {
lines[i]=llr.readLineWithNewline$();
if (lines[i].length$() > 0) nLines++;
}
if ((readerName=C$.checkSpecial1$I$SA$S(nLines, lines, leader)) != null ) return readerName;
if ((readerName=C$.checkLineStarts$SA(lines)) != null ) return readerName;
if ((readerName=C$.checkHeaderContains$S(llr.getHeader$I(0))) != null ) return readerName;
if ((readerName=C$.checkSpecial2$SA(lines)) != null ) return readerName;
return (returnLines ? "\n" + lines[0] + "\n" + lines[1] + "\n" + lines[2] + "\n"  : null);
}, 1);

Clazz.newMeth(C$, 'getBinaryType$java_io_InputStream', function (inputStream) {
return ($I$(6).isPickleS$java_io_InputStream(inputStream) ? "PyMOL" : ($I$(6).getMagic$java_io_InputStream$I(inputStream, 1)[0] & 222) == 222 ? "MMTF" : null);
}, 1);

Clazz.newMeth(C$, 'checkFileStart$S', function (leader) {
for (var i=0; i < C$.fileStartsWithRecords.length; ++i) {
var recordTags=C$.fileStartsWithRecords[i];
for (var j=1; j < recordTags.length; ++j) {
var recordTag=recordTags[j];
if (leader.startsWith$S(recordTag)) return recordTags[0];
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'checkSpecial1$I$SA$S', function (nLines, lines, leader) {
if (nLines == 1 && lines[0].length$() > 0  && (function(a,f){return f.apply(null,a)})([lines[0].charAt$I(0)],$I$(9).isDigit$C) ) return "Jme";
if (C$.checkMopacGraphf$SA(lines)) return "MopacGraphf";
if (C$.checkOdyssey$SA(lines)) return "Odyssey";
switch (C$.checkMol$SA(lines)) {
case 1:
case 3:
case 2000:
case 3000:
return "Mol";
}
switch (C$.checkXyz$SA(lines)) {
case 1:
return "Xyz";
case 2:
return "Bilbao";
}
if (C$.checkAlchemy$S(lines[0])) return "Alchemy";
if (C$.checkFoldingXyz$SA(lines)) return "FoldingXyz";
if (C$.checkCube$SA(lines)) return "Cube";
if (C$.checkWien2k$SA(lines)) return "Wien2k";
if (C$.checkAims$SA(lines)) return "Aims";
if (C$.checkGenNBO$SA$S(lines, leader)) return "GenNBO";
return null;
}, 1);

Clazz.newMeth(C$, 'checkAims$SA', function (lines) {
for (var i=0; i < lines.length; i++) {
if (lines[i].startsWith$S("mol 1")) return false;
var tokens=$I$(9).getTokens$S(lines[i]);
if (tokens.length == 0) continue;
if (tokens[0].startsWith$S("atom") && tokens.length > 4  && Float.isNaN$F($I$(9).parseFloat$S(tokens[4]))  || tokens[0].startsWith$S("multipole") && tokens.length >= 6   || tokens[0].startsWith$S("lattice_vector") && tokens.length >= 4  ) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'checkAlchemy$S', function (line) {
var pt;
if ((pt=line.indexOf$S("ATOMS")) >= 0 && line.indexOf$S("BONDS") > pt ) {
var n=(function(a,f){return f.apply(null,a)})([line.substring$I$I(0, pt).trim$()],$I$(9).parseInt$S);
return (n > 0);
}return false;
}, 1);

Clazz.newMeth(C$, 'isInt$S', function (s) {
C$.n[0]=0;
s=s.trim$();
return s.length$() > 0 && $I$(9).parseIntNext$S$IA(s, C$.n) != -2147483648  && C$.n[0] == s.length$() ;
}, 1);

Clazz.newMeth(C$, 'isFloat$S', function (s) {
return !Float.isNaN$F($I$(9).parseFloat$S(s));
}, 1);

Clazz.newMeth(C$, 'checkCube$SA', function (lines) {
for (var j=2; j <= 5; j++) {
var tokens2=Clazz.new_($I$(10,1).c$$S,[lines[j]]);
var n=tokens2.countTokens$();
if (!(n == 4 || j == 2 && n == 5  ) || !C$.isInt$S(tokens2.nextToken$()) ) return false;
for (var i=3; --i >= 0; ) if (!C$.isFloat$S(tokens2.nextToken$())) return false;

if (n == 5 && !C$.isInt$S(tokens2.nextToken$()) ) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'checkFoldingXyz$SA', function (lines) {
var tokens=Clazz.new_([lines[0].trim$(), " \t"],$I$(10,1).c$$S$S);
if (tokens.countTokens$() < 2 || !C$.isInt$S(tokens.nextToken$().trim$()) ) return false;
var secondLine=lines[1].trim$();
if (secondLine.length$() == 0) secondLine=lines[2].trim$();
tokens=Clazz.new_($I$(10,1).c$$S$S,[secondLine, " \t"]);
return (tokens.countTokens$() > 0 && C$.isInt$S(tokens.nextToken$().trim$()) );
}, 1);

Clazz.newMeth(C$, 'checkGenNBO$SA$S', function (lines, leader) {
return (leader.indexOf$S("$GENNBO") >= 0 || lines[1].startsWith$S(" Basis set information needed for plotting orbitals")  || lines[1].indexOf$S("s in the AO basis:") >= 0  || lines[1].indexOf$S("***** NBO ") >= 0  || lines[2].indexOf$S(" N A T U R A L   A T O M I C   O R B I T A L") >= 0 );
}, 1);

Clazz.newMeth(C$, 'checkMol$SA', function (lines) {
var line4trimmed=("X" + lines[3]).trim$().toUpperCase$();
if (line4trimmed.length$() < 7 || line4trimmed.indexOf$S(".") >= 0 ) return 0;
if (line4trimmed.endsWith$S("V2000")) return 2000;
if (line4trimmed.endsWith$S("V3000")) return 3000;
var n1=(function(a,f){return f.apply(null,a)})([lines[3].substring$I$I(0, 3).trim$()],$I$(9).parseInt$S);
var n2=(function(a,f){return f.apply(null,a)})([lines[3].substring$I$I(3, 6).trim$()],$I$(9).parseInt$S);
return (n1 > 0 && n2 >= 0  && lines[0].indexOf$S("@<TRIPOS>") != 0  && lines[1].indexOf$S("@<TRIPOS>") != 0  && lines[2].indexOf$S("@<TRIPOS>") != 0  ? 3 : 0);
}, 1);

Clazz.newMeth(C$, 'checkMopacGraphf$SA', function (lines) {
return (lines[0].indexOf$S("MOPAC-Graphical data") > 2);
}, 1);

Clazz.newMeth(C$, 'checkOdyssey$SA', function (lines) {
var i;
for (i=0; i < lines.length; i++) if (!lines[i].startsWith$S("C ") && lines[i].length$() != 0 ) break;

if (i >= lines.length || lines[i].charAt$I(0) != " "  || (i=i + 2) + 1 >= lines.length ) return false;
var l=lines[i];
if (l.length$() < 3) return false;
var spin=(function(a,f){return f.apply(null,a)})([l.substring$I(2).trim$()],$I$(9).parseInt$S);
var charge=(function(a,f){return f.apply(null,a)})([l.substring$I$I(0, 2).trim$()],$I$(9).parseInt$S);
if ((l=lines[i + 1]).length$() < 2) return false;
var atom1=(function(a,f){return f.apply(null,a)})([l.substring$I$I(0, 2).trim$()],$I$(9).parseInt$S);
if (spin < 0 || spin > 5  || atom1 <= 0  || charge == -2147483648  || charge > 5 ) return false;
var atomline=$I$(11).getTokensFloat$S$FA$I(l, null, 5);
return !Float.isNaN$F(atomline[1]) && !Float.isNaN$F(atomline[2]) && !Float.isNaN$F(atomline[3]) && Float.isNaN$F(atomline[4])  ;
}, 1);

Clazz.newMeth(C$, 'checkWien2k$SA', function (lines) {
return (lines[2].startsWith$S("MODE OF CALC=") || lines[2].startsWith$S("             RELA") || lines[2].startsWith$S("             NREL")  );
}, 1);

Clazz.newMeth(C$, 'checkXyz$SA', function (lines) {
if (C$.isInt$S(lines[0].trim$())) return (C$.isInt$S(lines[2].trim$()) ? 2 : 1);
return (lines[0].indexOf$S("Bilabao Crys") >= 0 ? 2 : 0);
}, 1);

Clazz.newMeth(C$, 'checkLineStarts$SA', function (lines) {
for (var i=0; i < C$.lineStartsWithRecords.length; ++i) {
var recordTags=C$.lineStartsWithRecords[i];
for (var j=1; j < recordTags.length; ++j) {
var recordTag=recordTags[j];
for (var k=0; k < lines.length; k++) {
if (lines[k].startsWith$S(recordTag)) return recordTags[0];
}
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'checkHeaderContains$S', function (header) {
for (var i=0; i < C$.headerContainsRecords.length; ++i) {
var recordTags=C$.headerContainsRecords[i];
for (var j=1; j < recordTags.length; ++j) {
var recordTag=recordTags[j];
if (header.indexOf$S(recordTag) < 0) continue;
var type=recordTags[0];
if (!type.equals$O("Xml")) return type;
if (header.indexOf$S("/AFLOWDATA/") >= 0 || header.indexOf$S("-- Structure PRE --") >= 0 ) return "AFLOW";
return (header.indexOf$S("<!DOCTYPE HTML PUBLIC") < 0 && header.indexOf$S("XHTML") < 0  && (header.indexOf$S("xhtml") < 0 || header.indexOf$S("<cml") >= 0 )  ? C$.getXmlType$S(header) : null);
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getXmlType$S', function (header) {
if (header.indexOf$S("http://www.molpro.net/") >= 0) {
return "XmlMolpro";
}if (header.indexOf$S("odyssey") >= 0) {
return "XmlOdyssey";
}if (header.indexOf$S("C3XML") >= 0) {
return "XmlChem3d";
}if (header.indexOf$S("arguslab") >= 0) {
return "XmlArgus";
}if (header.indexOf$S("jvxl") >= 0 || header.indexOf$S("http://www.xml-cml.org/schema") >= 0  || header.indexOf$S("cml:") >= 0  || header.indexOf$S("<cml>") >= 0 ) {
return "XmlCml";
}if (header.indexOf$S("XSD") >= 0) {
return "XmlXsd";
}if (header.indexOf$S(">vasp") >= 0) {
return "XmlVasp";
}if (header.indexOf$S("<GEOMETRY_INFO>") >= 0) {
return "XmlQE";
}return "XmlCml(unidentified)";
}, 1);

Clazz.newMeth(C$, 'checkSpecial2$SA', function (lines) {
if (C$.checkGromacs$SA(lines)) return "Gromacs";
if (C$.checkCrystal$SA(lines)) return "Crystal";
var s=C$.checkCastepVaspSiesta$SA(lines);
if (s != null ) return s;
return null;
}, 1);

Clazz.newMeth(C$, 'checkCrystal$SA', function (lines) {
var s=lines[1].trim$();
if (s.equals$O("SLAB") || s.equals$O("MOLECULE") || s.equals$O("CRYSTAL") || s.equals$O("POLYMER") || (s=lines[3]).equals$O("SLAB") || s.equals$O("MOLECULE") || s.equals$O("POLYMER")  ) return true;
for (var i=0; i < lines.length; i++) {
if (lines[i].trim$().equals$O("OPTGEOM") || lines[i].trim$().equals$O("FREQCALC") || lines[i].contains$CharSequence("DOVESI") || lines[i].contains$CharSequence("TORINO") || lines[i].contains$CharSequence("http://www.crystal.unito.it") || lines[i].contains$CharSequence("Pcrystal") || lines[i].contains$CharSequence("MPPcrystal") || lines[i].contains$CharSequence("crystal executable")  ) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'checkGromacs$SA', function (lines) {
if ($I$(9).parseInt$S(lines[1]) == -2147483648) return false;
var len=-1;
for (var i=2; i < 16 && len != 0 ; i++) if ((len=lines[i].length$()) != 69 && len != 45  && len != 0 ) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'checkCastepVaspSiesta$SA', function (lines) {
for (var i=0; i < lines.length; i++) {
var line=lines[i].toUpperCase$();
if (line.indexOf$S("FREQUENCIES IN         CM-1") == 1 || line.contains$CharSequence("CASTEP")  || line.startsWith$S("%BLOCK LATTICE_ABC")  || line.startsWith$S("%BLOCK LATTICE_CART")  || line.startsWith$S("%BLOCK POSITIONS_FRAC")  || line.startsWith$S("%BLOCK POSITIONS_ABS")  || line.contains$CharSequence("<-- E") ) return "Castep";
if (line.contains$CharSequence("%BLOCK")) return "Siesta";
if (i >= 6 && i < 10  && (line.startsWith$S("DIRECT") || line.startsWith$S("CARTESIAN") ) ) return "VaspPoscar";
}
return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.readerSets=Clazz.array(String, -1, ["cif.", ";Cif;Cif2;MMCif;MMTF;MagCif", "molxyz.", ";Mol3D;Mol;Xyz;", "more.", ";AFLOW;BinaryDcd;Gromacs;Jcampdx;MdCrd;MdTop;Mol2;TlsDataOnly;", "quantum.", ";Adf;Csf;Dgrid;GamessUK;GamessUS;Gaussian;GaussianFchk;GaussianWfn;Jaguar;Molden;MopacGraphf;GenNBO;NWChem;Psi;Qchem;QCJSON;WebMO;MO;", "pdb.", ";Pdb;Pqr;P2n;JmolData;", "pymol.", ";PyMOL;", "simple.", ";Alchemy;Ampac;Cube;FoldingXyz;GhemicalMM;HyperChem;Jme;JSON;Mopac;MopacArchive;Tinker;Input;", "spartan.", ";Spartan;SpartanSmol;Odyssey;", "xtal.", ";Abinit;Aims;Bilbao;Castep;Cgd;Crystal;Dmol;Espresso;Gulp;Jana;Magres;Shelx;Siesta;VaspOutcar;VaspPoscar;Wien2k;Xcrysden;", "xml.", ";XmlArgus;XmlCml;XmlChem3d;XmlMolpro;XmlOdyssey;XmlXsd;XmlVasp;XmlQE;"]);
C$.sptRecords=Clazz.array(String, -1, ["spt", "# Jmol state", "# Jmol script", "JmolManifest"]);
C$.m3dStartRecords=Clazz.array(String, -1, ["Alchemy", "STRUCTURE  1.00     1"]);
C$.cubeFileStartRecords=Clazz.array(String, -1, ["Cube", "JVXL", "#JVXL"]);
C$.mol2Records=Clazz.array(String, -1, ["Mol2", "mol2", "@<TRIPOS>"]);
C$.webmoFileStartRecords=Clazz.array(String, -1, ["WebMO", "[HEADER]"]);
C$.moldenFileStartRecords=Clazz.array(String, -1, ["Molden", "[Molden", "MOLDEN", "[MOLDEN"]);
C$.dcdFileStartRecords=Clazz.array(String, -1, ["BinaryDcd", "T\u0000\u0000\u0000CORD", "\u0000\u0000\u0000TCORD"]);
C$.tlsDataOnlyFileStartRecords=Clazz.array(String, -1, ["TlsDataOnly", "REFMAC\n\nTL", "REFMAC\r\n\r\n", "REFMAC\r\rTL"]);
C$.inputFileStartRecords=Clazz.array(String, -1, ["Input", "#ZMATRIX", "%mem=", "AM1", "$rungauss"]);
C$.magresFileStartRecords=Clazz.array(String, -1, ["Magres", "#$magres", "# magres"]);
C$.pymolStartRecords=Clazz.array(String, -1, ["PyMOL", "}q"]);
C$.janaStartRecords=Clazz.array(String, -1, ["Jana", "Version Jana"]);
C$.jsonStartRecords=Clazz.array(String, -1, ["JSON", "{\"mol\":"]);
C$.jcampdxStartRecords=Clazz.array(String, -1, ["Jcampdx", "##TITLE"]);
C$.jmoldataStartRecords=Clazz.array(String, -1, ["JmolData", "REMARK   6 Jmol"]);
C$.pqrStartRecords=Clazz.array(String, -1, ["Pqr", "REMARK   1 PQR", "REMARK    The B-factors"]);
C$.p2nStartRecords=Clazz.array(String, -1, ["P2n", "REMARK   1 P2N"]);
C$.cif2StartRecords=Clazz.array(String, -1, ["Cif2", "#\\#CIF_2"]);
C$.xmlStartRecords=Clazz.array(String, -1, ["Xml", "<?xml"]);
C$.cfiStartRecords=Clazz.array(String, -1, ["Input", "$CFI"]);
C$.fileStartsWithRecords=Clazz.array(String, -2, [C$.xmlStartRecords, C$.sptRecords, C$.m3dStartRecords, C$.cubeFileStartRecords, C$.mol2Records, C$.webmoFileStartRecords, C$.moldenFileStartRecords, C$.dcdFileStartRecords, C$.tlsDataOnlyFileStartRecords, C$.inputFileStartRecords, C$.magresFileStartRecords, C$.pymolStartRecords, C$.janaStartRecords, C$.jsonStartRecords, C$.jcampdxStartRecords, C$.jmoldataStartRecords, C$.pqrStartRecords, C$.p2nStartRecords, C$.cif2StartRecords, C$.cfiStartRecords]);
C$.n=Clazz.array(Integer.TYPE, [1]);
C$.mmcifLineStartRecords=Clazz.array(String, -1, ["MMCif", "_entry.id", "_database_PDB_", "_pdbx_", "_chem_comp.pdbx_type", "_audit_author.name", "_atom_site."]);
C$.cifLineStartRecords=Clazz.array(String, -1, ["Cif", "data_", "_publ"]);
C$.pdbLineStartRecords=Clazz.array(String, -1, ["Pdb", "HEADER", "OBSLTE", "TITLE ", "CAVEAT", "COMPND", "SOURCE", "KEYWDS", "EXPDTA", "AUTHOR", "REVDAT", "SPRSDE", "JRNL  ", "REMARK ", "DBREF ", "SEQADV", "SEQRES", "MODRES", "HELIX ", "SHEET ", "TURN  ", "CRYST1", "ORIGX1", "ORIGX2", "ORIGX3", "SCALE1", "SCALE2", "SCALE3", "ATOM  ", "HETATM", "MODEL ", "LINK  ", "USER  MOD "]);
C$.cgdLineStartRecords=Clazz.array(String, -1, ["Cgd", "EDGE ", "edge "]);
C$.shelxLineStartRecords=Clazz.array(String, -1, ["Shelx", "TITL ", "ZERR ", "LATT ", "SYMM ", "CELL "]);
C$.ghemicalMMLineStartRecords=Clazz.array(String, -1, ["GhemicalMM", "!Header mm1gp", "!Header gpr"]);
C$.jaguarLineStartRecords=Clazz.array(String, -1, ["Jaguar", "  |  Jaguar version"]);
C$.mdlLineStartRecords=Clazz.array(String, -1, ["Mol", "$MDL "]);
C$.spartanSmolLineStartRecords=Clazz.array(String, -1, ["SpartanSmol", "INPUT="]);
C$.csfLineStartRecords=Clazz.array(String, -1, ["Csf", "local_transform"]);
C$.mdTopLineStartRecords=Clazz.array(String, -1, ["MdTop", "%FLAG TITLE"]);
C$.hyperChemLineStartRecords=Clazz.array(String, -1, ["HyperChem", "mol 1"]);
C$.vaspOutcarLineStartRecords=Clazz.array(String, -1, ["VaspOutcar", " vasp.", " INCAR:"]);
C$.lineStartsWithRecords=Clazz.array(String, -2, [C$.mmcifLineStartRecords, C$.cifLineStartRecords, C$.pdbLineStartRecords, C$.cgdLineStartRecords, C$.shelxLineStartRecords, C$.ghemicalMMLineStartRecords, C$.jaguarLineStartRecords, C$.mdlLineStartRecords, C$.spartanSmolLineStartRecords, C$.csfLineStartRecords, C$.mol2Records, C$.mdTopLineStartRecords, C$.hyperChemLineStartRecords, C$.vaspOutcarLineStartRecords]);
C$.bilbaoContainsRecords=Clazz.array(String, -1, ["Bilbao", ">Bilbao Crystallographic Server<"]);
C$.xmlContainsRecords=Clazz.array(String, -1, ["Xml", "<?xml", "<atom", "<molecule", "<reaction", "<cml", "<bond", ".dtd\"", "<list>", "<entry", "<identifier", "http://www.xml-cml.org/schema/cml2/core"]);
C$.gaussianContainsRecords=Clazz.array(String, -1, ["Gaussian", "Entering Gaussian System", "Entering Link 1", "1998 Gaussian, Inc."]);
C$.ampacContainsRecords=Clazz.array(String, -1, ["Ampac", "AMPAC Version"]);
C$.mopacContainsRecords=Clazz.array(String, -1, ["Mopac", "MOPAC 93 (c) Fujitsu", "MOPAC FOR LINUX (PUBLIC DOMAIN VERSION)", "MOPAC:  VERSION  6", "MOPAC   7", "MOPAC2", "MOPAC (PUBLIC"]);
C$.qchemContainsRecords=Clazz.array(String, -1, ["Qchem", "Welcome to Q-Chem", "A Quantum Leap Into The Future Of Chemistry"]);
C$.gamessUKContainsRecords=Clazz.array(String, -1, ["GamessUK", "GAMESS-UK", "G A M E S S - U K"]);
C$.gamessUSContainsRecords=Clazz.array(String, -1, ["GamessUS", "GAMESS", "$CONTRL"]);
C$.spartanBinaryContainsRecords=Clazz.array(String, -1, ["SpartanSmol", "|PropertyArchive", "_spartan", "spardir", "BEGIN Directory Entry Molecule"]);
C$.spartanContainsRecords=Clazz.array(String, -1, ["Spartan", "Spartan", "converted archive file"]);
C$.adfContainsRecords=Clazz.array(String, -1, ["Adf", "Amsterdam Density Functional"]);
C$.psiContainsRecords=Clazz.array(String, -1, ["Psi", "    PSI  3", "PSI3:"]);
C$.nwchemContainsRecords=Clazz.array(String, -1, ["NWChem", " argument  1 = "]);
C$.uicrcifContainsRecords=Clazz.array(String, -1, ["Cif", "Crystallographic Information File"]);
C$.dgridContainsRecords=Clazz.array(String, -1, ["Dgrid", "BASISFILE   created by DGrid"]);
C$.crystalContainsRecords=Clazz.array(String, -1, ["Crystal", "*                                CRYSTAL", "TORINO", "DOVESI"]);
C$.dmolContainsRecords=Clazz.array(String, -1, ["Dmol", "DMol^3"]);
C$.gulpContainsRecords=Clazz.array(String, -1, ["Gulp", "GENERAL UTILITY LATTICE PROGRAM"]);
C$.espressoContainsRecords=Clazz.array(String, -1, ["Espresso", "Program PWSCF", "Program PHONON"]);
C$.siestaContainsRecords=Clazz.array(String, -1, ["Siesta", "MD.TypeOfRun", "SolutionMethod", "MeshCutoff", "WELCOME TO SIESTA"]);
C$.xcrysDenContainsRecords=Clazz.array(String, -1, ["Xcrysden", "PRIMVEC", "CONVVEC", "PRIMCOORD", "ANIMSTEP"]);
C$.mopacArchiveContainsRecords=Clazz.array(String, -1, ["MopacArchive", "SUMMARY OF PM"]);
C$.abinitContainsRecords=Clazz.array(String, -1, ["Abinit", "http://www.abinit.org", "Catholique", "Louvain"]);
C$.qcJsonContainsRecords=Clazz.array(String, -1, ["QCJSON", "\"QCJSON"]);
C$.gaussianFchkContainsRecords=Clazz.array(String, -1, ["GaussianFchk", "Number of point charges in /Mol/"]);
C$.inputContainsRecords=Clazz.array(String, -1, ["Input", " ATOMS cartesian", "$molecule", "&zmat", "geometry={", "$DATA", "%coords", "GEOM=PQS", "geometry units angstroms"]);
C$.aflowContainsRecords=Clazz.array(String, -1, ["AFLOW", "/AFLOWDATA/"]);
C$.magCifContainsRecords=Clazz.array(String, -1, ["MagCif", "_space_group_magn"]);
C$.headerContainsRecords=Clazz.array(String, -2, [C$.sptRecords, C$.bilbaoContainsRecords, C$.xmlContainsRecords, C$.gaussianContainsRecords, C$.ampacContainsRecords, C$.mopacContainsRecords, C$.gamessUKContainsRecords, C$.gamessUSContainsRecords, C$.spartanBinaryContainsRecords, C$.spartanContainsRecords, C$.qchemContainsRecords, C$.mol2Records, C$.adfContainsRecords, C$.psiContainsRecords, C$.nwchemContainsRecords, C$.uicrcifContainsRecords, C$.dgridContainsRecords, C$.crystalContainsRecords, C$.dmolContainsRecords, C$.gulpContainsRecords, C$.espressoContainsRecords, C$.siestaContainsRecords, C$.xcrysDenContainsRecords, C$.mopacArchiveContainsRecords, C$.abinitContainsRecords, C$.gaussianFchkContainsRecords, C$.inputContainsRecords, C$.aflowContainsRecords, C$.magCifContainsRecords, C$.qcJsonContainsRecords]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
