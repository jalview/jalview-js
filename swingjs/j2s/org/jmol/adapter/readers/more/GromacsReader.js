(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.more"),p$1={},I$=[[0,'org.jmol.util.Logger','org.jmol.adapter.smarter.Atom','javajs.util.P3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GromacsReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.setIsPDB$();
this.asc.newAtomSet$();
this.setModelPDB$Z(true);
});

Clazz.newMeth(C$, 'checkLine$', function () {
this.checkCurrentLineForScript$();
this.asc.setAtomSetName$S(this.line.trim$());
p$1.readAtoms.apply(this, []);
p$1.readUnitCell.apply(this, []);
this.continuing=false;
return false;
});

Clazz.newMeth(C$, 'readAtoms', function () {
var modelAtomCount=this.parseIntStr$S(this.rd$());
for (var i=0; i < modelAtomCount; ++i) {
this.rd$();
var len=this.line.length$();
if (len != 44 && len != 68 ) {
$I$(1).warn$S("line cannot be read for GROMACS atom data: " + this.line);
continue;
}var atom=Clazz.new_($I$(2,1));
atom.sequenceNumber=this.parseIntRange$S$I$I(this.line, 0, 5);
p$1.setAtomName$org_jmol_adapter_smarter_Atom$S$S.apply(this, [atom, this.parseTokenRange$S$I$I(this.line, 5, 9).trim$(), this.line.substring$I$I(11, 15).trim$()]);
atom.atomSerial=this.parseIntRange$S$I$I(this.line, 15, 20);
atom.x=this.parseFloatRange$S$I$I(this.line, 20, 28) * 10;
atom.y=this.parseFloatRange$S$I$I(this.line, 28, 36) * 10;
atom.z=this.parseFloatRange$S$I$I(this.line, 36, 44) * 10;
if (Float.isNaN$F(atom.x) || Float.isNaN$F(atom.y) || Float.isNaN$F(atom.z)  ) {
$I$(1).warn$S("line cannot be read for GROMACS atom data: " + this.line);
atom.set$F$F$F(0, 0, 0);
}this.setAtomCoord$org_jmol_adapter_smarter_Atom(atom);
atom.elementSymbol=this.deduceElementSymbol$S$S(atom.group3, atom.atomName);
if (!this.filterAtom$org_jmol_adapter_smarter_Atom$I(atom, i)) continue;
atom.isHetero=false;
this.asc.addAtom$org_jmol_adapter_smarter_Atom(atom);
if (len < 69) continue;
var vx=this.parseFloatRange$S$I$I(this.line, 44, 52) * 10;
var vy=this.parseFloatRange$S$I$I(this.line, 52, 60) * 10;
var vz=this.parseFloatRange$S$I$I(this.line, 60, 68) * 10;
if (Float.isNaN$F(vx) || Float.isNaN$F(vy) || Float.isNaN$F(vz)  ) continue;
this.asc.addVibrationVector$I$F$F$F(atom.index, vx, vy, vz);
}
}, p$1);

Clazz.newMeth(C$, 'setAtomName$org_jmol_adapter_smarter_Atom$S$S', function (atom, gname, aname) {
atom.atomName=aname;
if (gname.equals$O("SOL") && aname.length$() == 3  && "OW1;HW2;HW3".indexOf$S(aname) >= 0 ) gname="WAT";
atom.group3=gname;
}, p$1);

Clazz.newMeth(C$, 'deduceElementSymbol$S$S', function (group3, atomName) {
if (atomName.length$() <= 2 && group3.equals$O(atomName) ) return atomName;
var ch1=(atomName.length$() == 4 ? atomName.charAt$I(0) : "\u0000");
var ch2=atomName.charAt$I(atomName.length$() == 4 ? 1 : 0);
var isHetero=this.vwr.getJBR$().isHetero$S(group3);
if ($I$(2).isValidSymNoCase$C$C(ch1, ch2)) return (isHetero || ch1 != "H"  ? "" + ch1 + ch2  : "H");
if ($I$(2).isValidSym1$C(ch2)) return "" + ch2;
if ($I$(2).isValidSym1$C(ch1)) return "" + ch1;
return "Xx";
});

Clazz.newMeth(C$, 'readUnitCell', function () {
if (this.rd$() == null ) return;
var tokens=this.getTokens$();
if (tokens.length < 3 || !this.doApplySymmetry ) return;
var a=10 * this.parseFloatStr$S(tokens[0]);
var b=10 * this.parseFloatStr$S(tokens[1]);
var c=10 * this.parseFloatStr$S(tokens[2]);
this.setUnitCell$F$F$F$F$F$F(a, b, c, 90, 90, 90);
this.setSpaceGroupName$S("P1");
var atoms=this.asc.atoms;
var pt=$I$(3).new3$F$F$F(0.5, 0.5, 0.5);
for (var i=this.asc.ac; --i >= 0; ) {
this.setAtomCoord$org_jmol_adapter_smarter_Atom(atoms[i]);
atoms[i].add$javajs_util_T3(pt);
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
