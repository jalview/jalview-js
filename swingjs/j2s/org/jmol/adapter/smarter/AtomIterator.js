(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),I$=[[0,'org.jmol.api.JmolAdapter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomIterator", null, null, 'org.jmol.api.JmolAdapterAtomIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['iatom','ac'],'O',['atom','org.jmol.adapter.smarter.Atom','atoms','org.jmol.adapter.smarter.Atom[]','bsAtoms','javajs.util.BS']]]

Clazz.newMeth(C$, 'c$$org_jmol_adapter_smarter_AtomSetCollection', function (asc) {
;C$.$init$.apply(this);
this.ac=asc.ac;
this.atoms=asc.atoms;
this.bsAtoms=asc.bsAtoms;
this.iatom=0;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.iatom == this.ac) return false;
while ((this.atom=this.atoms[this.iatom++]) == null  || (this.bsAtoms != null  && !this.bsAtoms.get$I(this.atom.index) ) )if (this.iatom == this.ac) return false;

this.atoms[this.iatom - 1]=null;
return true;
});

Clazz.newMeth(C$, 'getAtomSetIndex$', function () {
return this.atom.atomSetIndex;
});

Clazz.newMeth(C$, 'getSymmetry$', function () {
return this.atom.bsSymmetry;
});

Clazz.newMeth(C$, 'getAtomSite$', function () {
return this.atom.atomSite + 1;
});

Clazz.newMeth(C$, 'getUniqueID$', function () {
return Integer.valueOf$I(this.atom.index);
});

Clazz.newMeth(C$, 'getElementNumber$', function () {
return (this.atom.elementNumber > 0 ? this.atom.elementNumber : (function(a,f){return f.apply(null,a)})([this.atom.getElementSymbol$()],$I$(1).getElementNumber$S));
});

Clazz.newMeth(C$, 'getAtomName$', function () {
return this.atom.atomName;
});

Clazz.newMeth(C$, 'getFormalCharge$', function () {
return this.atom.formalCharge;
});

Clazz.newMeth(C$, 'getPartialCharge$', function () {
return this.atom.partialCharge;
});

Clazz.newMeth(C$, 'getTensors$', function () {
return this.atom.tensors;
});

Clazz.newMeth(C$, 'getRadius$', function () {
return this.atom.radius;
});

Clazz.newMeth(C$, 'getVib$', function () {
return (this.atom.vib == null  || Float.isNaN$F(this.atom.vib.z)  ? null : this.atom.vib);
});

Clazz.newMeth(C$, 'getSeqID$', function () {
return (this.atom.vib == null  || !Float.isNaN$F(this.atom.vib.y)  || this.atom.vib.z != 1094713365   ? 0 : (this.atom.vib.x|0));
});

Clazz.newMeth(C$, 'getBfactor$', function () {
return this.atom.bfactor;
});

Clazz.newMeth(C$, 'getOccupancy$', function () {
return this.atom.foccupancy * 100;
});

Clazz.newMeth(C$, 'getIsHetero$', function () {
return this.atom.isHetero;
});

Clazz.newMeth(C$, 'getSerial$', function () {
return this.atom.atomSerial;
});

Clazz.newMeth(C$, 'getChainID$', function () {
return this.atom.chainID;
});

Clazz.newMeth(C$, 'getAltLoc$', function () {
return $I$(1).canonizeAlternateLocationID$C(this.atom.altLoc);
});

Clazz.newMeth(C$, 'getGroup3$', function () {
return this.atom.group3;
});

Clazz.newMeth(C$, 'getSequenceNumber$', function () {
return this.atom.sequenceNumber;
});

Clazz.newMeth(C$, 'getInsertionCode$', function () {
return $I$(1).canonizeInsertionCode$C(this.atom.insertionCode);
});

Clazz.newMeth(C$, 'getXYZ$', function () {
return this.atom;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
