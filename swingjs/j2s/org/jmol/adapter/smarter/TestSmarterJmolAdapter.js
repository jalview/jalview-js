(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),p$1={},I$=[[0,'java.io.File','javajs.util.PT','org.jmol.util.Logger','org.jmol.adapter.smarter.TestSmarterJmolAdapterImpl','org.jmol.util.JUnitLogger','java.io.FileInputStream','java.util.zip.GZIPInputStream','java.io.BufferedInputStream','org.jmol.adapter.smarter.SmarterJmolAdapter','javajs.util.Rdr','javajs.util.BinaryDocument','junit.framework.Assert','java.util.Hashtable']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TestSmarterJmolAdapter", null, 'junit.framework.TestSuite');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.datafileDirectory="../Jmol-datafiles";
},1);

C$.$fields$=[['S',['datafileDirectory']]
,['S',['testOne']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Class$S', function (theClass, name) {
;C$.superclazz.c$$Class$S.apply(this,[theClass, name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Class', function (theClass) {
;C$.superclazz.c$$Class.apply(this,[theClass]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'suite$', function () {
var result=Clazz.new_(C$.c$$S,["Test for org.jmol.adapter.smarter.SmarterJmolAdapter"]);
result.datafileDirectory=System.getProperty$S$S("test.datafile.directory", result.datafileDirectory);
p$1.addDirectory$S$S$S.apply(result, ["adf", "adf;out", "Adf"]);
p$1.addDirectory$S$S$S.apply(result, ["aims", "in", "Aims"]);
p$1.addDirectory$S$S$S.apply(result, ["aminoacids", "mol", "Mol"]);
p$1.addDirectory$S$S$S.apply(result, ["aminoacids", "pdb", "Pdb"]);
p$1.addDirectory$S$S$S.apply(result, ["animations", "cml", "XmlCml"]);
p$1.addDirectory$S$S$S.apply(result, ["animations", "pdb;pdb.gz", "Pdb"]);
p$1.addDirectory$S$S$S.apply(result, ["animations", "xyz", "Xyz"]);
p$1.addDirectory$S$S$S.apply(result, ["castep", "cell;phonon", "Castep"]);
p$1.addDirectory$S$S$S.apply(result, ["cif", "mmcif", "MMCif"]);
p$1.addDirectory$S$S$S.apply(result, ["cif", "cif", "Cif"]);
p$1.addDirectory$S$S$S.apply(result, ["cif", "mmtf", "MMTF"]);
p$1.addDirectory$S$S$S.apply(result, ["c3xml", "c3xml", "XmlChem3d"]);
p$1.addDirectory$S$S$S.apply(result, ["cml", "cml", "XmlCml"]);
p$1.addDirectory$S$S$S.apply(result, ["crystal", "out;outp", "Crystal"]);
p$1.addDirectory$S$S$S.apply(result, ["crystals", "mol", "Mol"]);
p$1.addDirectory$S$S$S.apply(result, ["crystals", "pdb", "Pdb"]);
p$1.addDirectory$S$S$S.apply(result, ["csf", "csf", "Csf"]);
p$1.addDirectory$S$S$S.apply(result, ["cube", "cub.gz;cube.gz", "Cube"]);
p$1.addDirectory$S$S$S.apply(result, ["dgrid", "adf", "Dgrid"]);
p$1.addDirectory$S$S$S.apply(result, ["dmol", "outmol", "Dmol"]);
p$1.addDirectory$S$S$S.apply(result, ["folding", "xyz;xyz.gz", "FoldingXyz"]);
p$1.addDirectory$S$S$S.apply(result, ["../Jmol-FAH/projects", "xyz;xyz.gz", "FoldingXyz"]);
p$1.addDirectory$S$S$S.apply(result, ["gamess", "log;out", ";Gamess;GamessUS;GamessUK;"]);
p$1.addDirectory$S$S$S.apply(result, ["gaussian", "log;out", "Gaussian"]);
p$1.addDirectory$S$S$S.apply(result, ["gennbo", "out;36;37", "GenNBO"]);
p$1.addDirectory$S$S$S.apply(result, ["ghemical", "gpr", "GhemicalMM"]);
p$1.addDirectory$S$S$S.apply(result, ["gromacs", "gro", "Gromacs"]);
p$1.addDirectory$S$S$S.apply(result, ["gulp", "gout;got", "Gulp"]);
p$1.addDirectory$S$S$S.apply(result, ["hyperchem", "hin", "HyperChem"]);
p$1.addDirectory$S$S$S.apply(result, ["hyperchem", "hpr", "HyperChem"]);
p$1.addDirectory$S$S$S.apply(result, ["jaguar", "out", "Jaguar"]);
p$1.addDirectory$S$S$S.apply(result, ["modifiedGroups", "cif", "MMCif"]);
p$1.addDirectory$S$S$S.apply(result, ["modifiedGroups", "pdb", "Pdb"]);
p$1.addDirectory$S$S$S.apply(result, ["mol", "v3000;mol;sdf", "Mol"]);
p$1.addDirectory$S$S$S.apply(result, ["mol2", "mol2", "Mol2"]);
p$1.addDirectory$S$S$S.apply(result, ["molpro", "xml", "XmlMolpro"]);
p$1.addDirectory$S$S$S.apply(result, ["mopac", "arc;archive", "MopacArchive"]);
p$1.addDirectory$S$S$S.apply(result, ["mopac", "out", "Mopac"]);
p$1.addDirectory$S$S$S.apply(result, ["mopac", "gpt2", "MopacGraphf"]);
p$1.addDirectory$S$S$S.apply(result, ["mopac", "mgf", "MopacGraphf"]);
p$1.addDirectory$S$S$S.apply(result, ["odyssey", "odydata", "Odyssey"]);
p$1.addDirectory$S$S$S.apply(result, ["odyssey", "xodydata", "XmlOdyssey"]);
p$1.addDirectory$S$S$S.apply(result, ["nwchem", "nwo", "NWChem"]);
p$1.addDirectory$S$S$S.apply(result, ["pdb", "pdb;pdb.gz", "Pdb"]);
p$1.addDirectory$S$S$S.apply(result, ["pymol", "pse", "PyMOL"]);
p$1.addDirectory$S$S$S.apply(result, ["quantumEspresso", "out", "Espresso"]);
p$1.addDirectory$S$S$S.apply(result, ["psi3", "out", "Psi"]);
p$1.addDirectory$S$S$S.apply(result, ["qchem", "out", "Qchem"]);
p$1.addDirectory$S$S$S.apply(result, ["shelx", "res", "Shelx"]);
p$1.addDirectory$S$S$S.apply(result, ["siesta", "fdf;out", "Siesta"]);
p$1.addDirectory$S$S$S.apply(result, ["spartan", "smol", "SpartanSmol"]);
p$1.addDirectory$S$S$S.apply(result, ["spartan", "txt;sp4", "Spartan"]);
p$1.addDirectory$S$S$S.apply(result, ["sparchive", "sparchive;spartan", "Spartan"]);
p$1.addDirectory$S$S$S.apply(result, ["vasp", "xml", "XmlVasp"]);
p$1.addDirectory$S$S$S.apply(result, ["vasp", "dat", "VaspOutcar"]);
p$1.addDirectory$S$S$S.apply(result, ["vasp", "poscar", "VaspPoscar"]);
p$1.addDirectory$S$S$S.apply(result, ["wien2k", "struct", "Wien2k"]);
p$1.addDirectory$S$S$S.apply(result, ["webmo", "mo", "WebMO"]);
p$1.addDirectory$S$S$S.apply(result, ["xsd", "xsd", "XmlXsd"]);
p$1.addDirectory$S$S$S.apply(result, ["xyz", "xyz", "Xyz"]);
p$1.addDirectory$S$S$S.apply(result, ["zmatrix", "txt;zmat", "Input"]);
p$1.addDirectory$S$S$S.apply(result, ["zmatrix", "inp", "=Input"]);
return result;
}, 1);

Clazz.newMeth(C$, 'addDirectory$S$S$S', function (directory, ext, typeAllowed) {
if (C$.testOne != null  && !directory.equals$O(C$.testOne) ) return;
var dir=Clazz.new_($I$(1,1).c$$S$S,[this.datafileDirectory, directory]);
var exts=$I$(2).split$S$S(ext, ";");
for (var ie=0; ie < exts.length; ie++) {
var e=exts[ie];
var files=dir.list$java_io_FilenameFilter(((P$.TestSmarterJmolAdapter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TestSmarterJmolAdapter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.FilenameFilter', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File$S', function (dir, name) {
return name.endsWith$S("." + this.$finals$.e);
});
})()
), Clazz.new_(P$.TestSmarterJmolAdapter$1.$init$,[this, {e:e}])));
if (files == null ) {
$I$(3).warn$S("No files in directory [" + directory + "] for extension [" + e + "]" );
} else {
for (var i=0; i < files.length; i++) p$1.addFile$Z$S$S$S.apply(this, [e.endsWith$S(".gz"), directory, files[i], typeAllowed]);

}}
}, p$1);

Clazz.newMeth(C$, 'addFile$Z$S$S$S', function (gzipped, directory, filename, typeAllowed) {
var file=Clazz.new_([Clazz.new_($I$(1,1).c$$S$S,[this.datafileDirectory, directory]), filename],$I$(1,1).c$$java_io_File$S);
var test=Clazz.new_($I$(4,1).c$$java_io_File$Z$S,[file, gzipped, typeAllowed]);
this.addTest$junit_framework_Test(test);
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
