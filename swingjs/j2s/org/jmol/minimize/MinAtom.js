(function(){var P$=Clazz.newPackage("org.jmol.minimize"),I$=[[0,'javajs.util.Lst','javajs.util.BS']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MinAtom");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.coord=Clazz.array(Double.TYPE, [3]);
this.force=Clazz.array(Double.TYPE, [3]);
this.bonds=Clazz.new_($I$(1,1));
this.bsVdw=Clazz.new_($I$(2,1));
this.bs14=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['D',['partialCharge'],'I',['index','ffType','nBonds','hCount'],'S',['sType'],'O',['atom','org.jmol.modelset.Atom','ffAtomType','org.jmol.minimize.forcefield.AtomType','vdwKey','Integer','coord','double[]','+force','bonds','javajs.util.Lst','bsVdw','javajs.util.BS','+bs14','bondedAtoms','int[]']]]

Clazz.newMeth(C$, 'toString', function () {
return "#" + this.index + " " + this.sType ;
});

Clazz.newMeth(C$, 'c$$I$org_jmol_modelset_Atom$DA$I', function (index, atom, coord, ac) {
;C$.$init$.apply(this);
this.index=index;
this.atom=atom;
this.coord=coord;
this.bsVdw.setBits$I$I(index + 1, ac);
this.bsVdw.clear$I(index);
this.hCount=atom.getCovalentHydrogenCount$();
}, 1);

Clazz.newMeth(C$, 'set$', function () {
this.coord[0]=this.atom.x;
this.coord[1]=this.atom.y;
this.coord[2]=this.atom.z;
});

Clazz.newMeth(C$, 'getBondTo$I', function (iAtom) {
this.getBondedAtomIndexes$();
for (var i=0; i < this.nBonds; i++) if (this.bondedAtoms[i] == iAtom) return this.bonds.get$I(i);

return null;
});

Clazz.newMeth(C$, 'getBondedAtomIndexes$', function () {
if (this.bondedAtoms == null ) {
this.bondedAtoms=Clazz.array(Integer.TYPE, [this.nBonds]);
for (var i=this.nBonds; --i >= 0; ) this.bondedAtoms[i]=this.bonds.get$I(i).getOtherAtom$I(this.index);

}return this.bondedAtoms;
});

Clazz.newMeth(C$, 'getIdentity$', function () {
return this.atom.getInfo$();
});

Clazz.newMeth(C$, 'addBond$org_jmol_minimize_MinBond$I', function (bond, i) {
this.bonds.addLast$O(bond);
this.nBonds++;
this.bsVdw.clear$I(i);
});

Clazz.newMeth(C$, 'getBondIndex$I', function (j) {
return this.bonds.get$I(j).index;
});

Clazz.newMeth(C$, 'isLinear$org_jmol_minimize_MinAtom', function (minAtom) {
switch (minAtom.ffType) {
case 4:
case 53:
case 61:
return true;
}
return false;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
