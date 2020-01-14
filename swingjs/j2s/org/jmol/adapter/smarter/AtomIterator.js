(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),I$=[[0,'org.jmol.api.JmolAdapter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AtomIterator", null, null, 'org.jmol.api.JmolAdapterAtomIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.iatom=0;
this.atom=null;
this.ac=0;
this.atoms=null;
this.bsAtoms=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_adapter_smarter_AtomSetCollection', function (asc) {
C$.$init$.apply(this);
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
return (this.atom.elementNumber > 0 ? this.atom.elementNumber : $I$(1).getElementNumber$S(this.atom.getElementSymbol$()));
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
