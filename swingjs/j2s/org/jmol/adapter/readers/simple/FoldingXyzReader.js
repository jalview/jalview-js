(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={},I$=[[0,'javajs.util.PT','java.util.Hashtable','org.jmol.adapter.smarter.Atom']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FoldingXyzReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initializeReader$', function () {
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
if (this.asc.bondCount > 0) this.asc.setNoAutoBond$();
this.isTrajectory=false;
this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'checkLine$', function () {
var next=Clazz.array(Integer.TYPE, -1, [0]);
var token=$I$(1).parseTokenNext$S$IA(this.line, next);
if (token == null ) return true;
var addAtoms=this.doGetModel$I$S(++this.modelNumber, null);
var modelAtomCount=this.parseIntStr$S(token);
if (addAtoms) {
this.asc.newAtomSet$();
var tokens=this.getTokens$();
this.asc.setAtomSetName$S(tokens.length == 2 ? "Protein " + tokens[1] : this.line.substring$I(next[0]).trim$());
}var readLine=this.readAtoms$I$Z(modelAtomCount + 1, addAtoms);
this.continuing=!addAtoms || !this.isLastModel$I(this.modelNumber) ;
return readLine;
});

Clazz.newMeth(C$, 'readAtoms$I$Z', function (ac, addAtoms) {
var htBondCounts=Clazz.new_($I$(2,1));
var bonds=Clazz.array(String, [ac, null]);
var haveAtomTypes=true;
var checking=true;
var lastAtom=null;
var readNextLine=true;
for (var i=0; i < ac; i++) {
this.discardLinesUntilNonBlank$();
if (this.line == null ) break;
var tokens=this.getTokens$();
var sIndex=tokens[0];
if (sIndex.equals$O(lastAtom)) {
readNextLine=false;
break;
}lastAtom=sIndex;
if (!addAtoms) continue;
var atom=Clazz.new_($I$(3,1));
atom.atomName=tokens[1];
atom.elementSymbol=p$1.getElement$S.apply(this, [tokens[1]]);
atom.atomSerial=this.parseIntStr$S(sIndex);
if (!this.filterAtom$org_jmol_adapter_smarter_Atom$I(atom, i)) continue;
this.setAtomCoordTokens$org_jmol_adapter_smarter_Atom$SA$I(atom, tokens, 2);
this.asc.addAtomWithMappedSerialNumber$org_jmol_adapter_smarter_Atom(atom);
var n=tokens.length - 5;
bonds[i]=Clazz.array(String, [n + 1]);
bonds[i][n]=sIndex;
for (var j=0; j < n; j++) {
var t=tokens[j + 5];
var i2=this.parseIntStr$S(t);
bonds[i][j]=t;
if (checking) {
if (n == 0 || t.equals$O(sIndex)  || i2 <= 0  || i2 > ac ) {
haveAtomTypes=(n > 0);
checking=false;
} else {
var count=htBondCounts.get$O(t);
if (count == null ) htBondCounts.put$O$O(t, count=Clazz.array(Integer.TYPE, [1]));
if (++count[0] > 10) haveAtomTypes=!(checking=false);
}}}
}
if (addAtoms) {
p$1.makeBonds$SAA$Z.apply(this, [bonds, !checking && haveAtomTypes ]);
this.applySymmetryAndSetTrajectory$();
}return readNextLine;
});

Clazz.newMeth(C$, 'makeBonds$SAA$Z', function (bonds, haveAtomTypes) {
for (var i=bonds.length; --i >= 0; ) {
var b=bonds[i];
if (b == null ) continue;
var a1=this.asc.getAtomFromName$S(b[b.length - 1]);
var b0=0;
if (haveAtomTypes) a1.atomName += "\u0000" + b[b0++];
for (var j=b.length - 1; --j >= b0; ) {
var a2=this.asc.getAtomFromName$S(b[j]);
if (a1.index < a2.index) this.asc.addNewBondWithOrderA$org_jmol_adapter_smarter_Atom$org_jmol_adapter_smarter_Atom$I(a1, a2, 1);
}
}
}, p$1);

Clazz.newMeth(C$, 'getElement$S', function (name) {
var n=name.length$();
switch (n) {
case 1:
break;
default:
var c1=name.charAt$I(0);
var c2=name.charAt$I(1);
n=($I$(3).isValidSym2$C$C(c1, c2) || c1 == "C" && c2 == "L"   ? 2 : 1);
}
return name.substring$I$I(0, n);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
