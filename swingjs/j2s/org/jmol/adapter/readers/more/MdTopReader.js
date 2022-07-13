(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.more"),p$1={},I$=[[0,'org.jmol.adapter.readers.more.ForceFieldReader','org.jmol.adapter.smarter.Atom','org.jmol.util.Logger','javajs.util.Lst','org.jmol.adapter.smarter.AtomSetCollectionReader']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MdTopReader", null, 'org.jmol.adapter.readers.more.ForceFieldReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nAtoms=0;
this.ac=0;
},1);

C$.$fields$=[['I',['nAtoms','ac'],'O',['$atomTypes','String[]','+group3s']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.setIsPDB$();
this.setUserAtomTypes$();
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.indexOf$S("%FLAG ") != 0) return true;
this.line=this.line.substring$I(6).trim$();
if (this.line.equals$O("POINTERS")) p$1.getPointers.apply(this, []);
 else if (this.line.equals$O("ATOM_NAME")) p$1.getAtomNames.apply(this, []);
 else if (this.line.equals$O("CHARGE")) p$1.getCharges.apply(this, []);
 else if (this.line.equals$O("RESIDUE_LABEL")) p$1.getResidueLabels.apply(this, []);
 else if (this.line.equals$O("RESIDUE_POINTER")) p$1.getResiduePointers.apply(this, []);
 else if (this.line.equals$O("AMBER_ATOM_TYPE")) p$1.getAtomTypes.apply(this, []);
 else if (this.line.equals$O("MASS")) p$1.getMasses.apply(this, []);
return false;
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.finalizeReaderASCR$();
var atoms=this.asc.atoms;
var atom;
for (var i=0; i < this.ac; i++) {
atom=atoms[i];
atom.isHetero=this.vwr.getJBR$().isHetero$S(atom.group3);
var atomType=this.$atomTypes[i];
if (!this.getElementSymbol$org_jmol_adapter_smarter_Atom$S(atom, atomType)) atom.elementSymbol=$I$(1).deducePdbElementSymbol$Z$S$S(atom.isHetero, atom.atomName, atom.group3);
}
var atoms2=null;
if (this.filter == null ) {
this.nAtoms=this.ac;
} else {
atoms2=Clazz.array($I$(2), [atoms.length]);
this.nAtoms=0;
for (var i=0; i < this.ac; i++) if (this.filterAtom$org_jmol_adapter_smarter_Atom$I(atoms[i], i)) atoms2[this.nAtoms++]=atoms[i];

}for (var i=0, j=0, k=0; i < this.ac; i++) {
if (this.filter == null  || this.bsFilter.get$I(i) ) {
if (k % 100 == 0) j++;
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atoms[i], (i % 100) * 2, j * 2, 0);
}}
if (atoms2 != null ) {
this.discardPreviousAtoms$();
for (var i=0; i < this.nAtoms; i++) this.asc.addAtom$org_jmol_adapter_smarter_Atom(atoms2[i]);

}$I$(3,"info$S",["Total number of atoms used=" + this.nAtoms]);
this.setModelPDB$Z(true);
this.htParams.put$O$O("defaultType", "mdcrd");
});

Clazz.newMeth(C$, 'getDataBlock', function () {
var vdata=Clazz.new_($I$(4,1));
this.discardLinesUntilContains$S("FORMAT");
var n=$I$(5,"getFortranFormatLengths$S",[this.line.substring$I(this.line.indexOf$S("("))]).get$I(0).intValue$();
var i=0;
var len=0;
while (true){
if (i >= len) {
if (this.rd$() == null ) break;
i=0;
len=this.line.length$();
if (len == 0 || this.line.indexOf$S("FLAG") >= 0 ) break;
}vdata.addLast$O(this.line.substring$I$I(i, i + n).trim$());
i+=n;
}
return vdata.toArray$OA(Clazz.array(String, [vdata.size$()]));
}, p$1);

Clazz.newMeth(C$, 'getPointers', function () {
var tokens=p$1.getDataBlock.apply(this, []);
this.ac=this.parseIntStr$S(tokens[0]);
var isPeriodic=(tokens[27].charAt$I(0) != "0");
if (isPeriodic) {
$I$(3).info$S("Periodic type: " + tokens[27]);
this.htParams.put$O$O("isPeriodic", Boolean.TRUE);
}$I$(3,"info$S",["Total number of atoms read=" + this.ac]);
this.htParams.put$O$O("templateAtomCount", Integer.valueOf$I(this.ac));
for (var i=0; i < this.ac; i++) this.asc.addAtom$org_jmol_adapter_smarter_Atom(Clazz.new_($I$(2,1)));

}, p$1);

Clazz.newMeth(C$, 'getAtomTypes', function () {
this.$atomTypes=p$1.getDataBlock.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getCharges', function () {
var data=p$1.getDataBlock.apply(this, []);
if (data.length != this.ac) return;
var atoms=this.asc.atoms;
for (var i=this.ac; --i >= 0; ) atoms[i].partialCharge=this.parseFloatStr$S(data[i]);

}, p$1);

Clazz.newMeth(C$, 'getResiduePointers', function () {
var resPtrs=p$1.getDataBlock.apply(this, []);
$I$(3,"info$S",["Total number of residues=" + resPtrs.length]);
var pt1=this.ac;
var pt2;
var atoms=this.asc.atoms;
for (var i=resPtrs.length; --i >= 0; ) {
var ptr=pt2=this.parseIntStr$S(resPtrs[i]) - 1;
while (ptr < pt1){
if (this.group3s != null ) atoms[ptr].group3=this.group3s[i];
atoms[ptr++].sequenceNumber=i + 1;
}
pt1=pt2;
}
}, p$1);

Clazz.newMeth(C$, 'getResidueLabels', function () {
this.group3s=p$1.getDataBlock.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getAtomNames', function () {
var names=p$1.getDataBlock.apply(this, []);
var atoms=this.asc.atoms;
for (var i=0; i < this.ac; i++) atoms[i].atomName=names[i];

}, p$1);

Clazz.newMeth(C$, 'getMasses', function () {
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
