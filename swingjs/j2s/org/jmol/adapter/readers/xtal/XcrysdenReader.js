(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.adapter.smarter.AtomSetCollectionReader']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XcrysdenReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.animation=false;
this.unitCellData=Clazz.array(Float.TYPE, [9]);
},1);

C$.$fields$=[['Z',['animation'],'I',['nAtoms','animationStep'],'O',['unitCellData','float[]']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.doApplySymmetry=true;
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.contains$CharSequence("ANIMSTEP")) {
p$1.readNostep.apply(this, []);
} else if (this.line.contains$CharSequence("CRYSTAL")) {
this.setFractionalCoordinates$Z(false);
} else if (this.line.contains$CharSequence("PRIMVEC")) {
p$1.readUnitCell.apply(this, []);
} else if (this.line.contains$CharSequence("PRIMCOORD")) {
p$1.readCoordinates.apply(this, []);
}return true;
});

Clazz.newMeth(C$, 'readNostep', function () {
this.animation=true;
}, p$1);

Clazz.newMeth(C$, 'readUnitCell', function () {
p$1.setSymmetry.apply(this, []);
this.fillFloatArray$S$I$FA(null, 0, this.unitCellData);
p$1.setUnitCell.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setUnitCell', function () {
this.addExplicitLatticeVector$I$FA$I(0, this.unitCellData, 0);
this.addExplicitLatticeVector$I$FA$I(1, this.unitCellData, 3);
this.addExplicitLatticeVector$I$FA$I(2, this.unitCellData, 6);
}, p$1);

Clazz.newMeth(C$, 'setSymmetry', function () {
this.applySymmetryAndSetTrajectory$();
this.asc.newAtomSet$();
this.setSpaceGroupName$S("P1");
this.setFractionalCoordinates$Z(false);
}, p$1);

Clazz.newMeth(C$, 'readCoordinates', function () {
var atomStr=$I$(1,"getTokens$S",[this.rd$()]);
this.nAtoms=Integer.parseInt$S(atomStr[0]);
this.setFractionalCoordinates$Z(false);
var counter=0;
while (counter < this.nAtoms && this.rd$() != null  ){
var tokens=this.getTokens$();
this.addAtomXYZSymName$SA$I$S$S(tokens, 1, null, $I$(2,"getElementSymbol$I",[Integer.parseInt$S(tokens[0])]));
counter++;
}
this.asc.setAtomSetName$S(this.animation ? "Structure " + (this.animationStep++) : "Initial coordinates");
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
