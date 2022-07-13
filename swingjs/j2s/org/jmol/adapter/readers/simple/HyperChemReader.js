(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "HyperChemReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['atomIndex']]]

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.length$() == 0 || this.line.charAt$I(0) == ";" ) return true;
if (this.line.startsWith$S("mol ")) {
if (!this.doGetModel$I$S(++this.modelNumber, null)) return this.checkLastModel$();
p$1.processMol.apply(this, []);
return true;
}if (!this.doProcessLines) return true;
if (this.line.startsWith$S("atom ")) {
p$1.processAtom.apply(this, []);
return true;
}if (this.line.startsWith$S("endmol ")) {
this.applySymmetryAndSetTrajectory$();
return true;
}return true;
});

Clazz.newMeth(C$, 'processMol', function () {
this.asc.newAtomSet$();
var molName=p$1.getMolName.apply(this, []);
this.asc.setAtomSetName$S(molName);
this.atomIndex=0;
this.baseAtomIndex=this.asc.ac;
}, p$1);

Clazz.newMeth(C$, 'getMolName', function () {
this.parseTokenStr$S(this.line);
this.parseToken$();
return this.parseToken$();
}, p$1);

Clazz.newMeth(C$, 'processAtom', function () {
var fileAtomNumber=this.parseIntAt$S$I(this.line, 5);
if (fileAtomNumber - 1 != this.atomIndex) {
throw Clazz.new_(Clazz.load('Exception').c$$S,["bad atom number sequence ... expected:" + (this.atomIndex + 1) + " found:" + fileAtomNumber ]);
}var atom=this.asc.addNewAtom$();
this.parseToken$();
atom.elementSymbol=this.parseToken$();
this.parseToken$();
this.parseToken$();
atom.partialCharge=this.parseFloat$();
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, this.parseFloat$(), this.parseFloat$(), this.parseFloat$());
var bondCount=this.parseInt$();
for (var i=0; i < bondCount; ++i) {
var otherAtomNumber=this.parseInt$();
var bondTypeToken=this.parseToken$();
if (otherAtomNumber > this.atomIndex) continue;
var bondOrder;
switch ((bondTypeToken.charCodeAt$I(0))) {
case 115:
bondOrder=1;
break;
case 100:
bondOrder=2;
break;
case 116:
bondOrder=3;
break;
case 97:
bondOrder=515;
break;
default:
throw Clazz.new_(Clazz.load('Exception').c$$S,["unrecognized bond type:" + bondTypeToken + " atom #" + fileAtomNumber ]);
}
this.asc.addNewBondWithOrder$I$I$I(this.baseAtomIndex + this.atomIndex, this.baseAtomIndex + otherAtomNumber - 1, bondOrder);
}
++this.atomIndex;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
