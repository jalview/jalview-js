(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.adapter.smarter.Bond']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JmeReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.asc.setCollectionName$S("JME");
this.asc.newAtomSet$();
this.line=this.rd$().replace$C$C("\t", " ");
this.checkCurrentLineForScript$();
this.addJmolScript$S("jmeString='" + this.line + "'" );
var ac=this.parseInt$();
var bondCount=this.parseInt$();
p$1.readAtoms$I.apply(this, [ac]);
p$1.readBonds$I.apply(this, [bondCount]);
this.set2D$();
this.continuing=false;
});

Clazz.newMeth(C$, 'readAtoms$I', function (ac) {
for (var i=0; i < ac; ++i) {
var strAtom=this.parseToken$();
var atom=this.asc.addNewAtom$();
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, this.parseFloat$(), this.parseFloat$(), 0);
var indexColon=strAtom.indexOf$I(":");
var elementSymbol=(indexColon > 0 ? strAtom.substring$I$I(0, indexColon) : strAtom);
if (elementSymbol.indexOf$S("+") >= 0) {
elementSymbol=$I$(1).trim$S$S(elementSymbol, "+");
atom.formalCharge=1;
} else if (elementSymbol.indexOf$S("-") >= 0) {
elementSymbol=$I$(1).trim$S$S(elementSymbol, "-");
atom.formalCharge=-1;
}atom.elementSymbol=elementSymbol;
}
}, p$1);

Clazz.newMeth(C$, 'readBonds$I', function (bondCount) {
for (var i=0; i < bondCount; ++i) {
var atomIndex1=this.parseInt$() - 1;
var atomIndex2=this.parseInt$() - 1;
var order=this.parseInt$();
switch (order) {
default:
continue;
case 1:
case 2:
case 3:
break;
case -1:
order=1025;
break;
case -2:
order=1041;
break;
}
this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(2).c$$I$I$I,[atomIndex1, atomIndex2, order]));
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
