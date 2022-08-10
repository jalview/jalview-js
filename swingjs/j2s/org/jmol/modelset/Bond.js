(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[[0,'org.jmol.viewer.JC','org.jmol.util.Edge','org.jmol.util.C']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Bond", null, 'org.jmol.util.Edge');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['shapeVisibilityFlags'],'H',['mad','colix'],'O',['atom1','org.jmol.modelset.Atom','+atom2']]
,['I',['myVisibilityFlag']]]

Clazz.newMeth(C$, 'c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$H', function (atom1, atom2, order, mad, colix) {
Clazz.super_(C$, this);
this.atom1=atom1;
this.atom2=atom2;
this.colix=colix;
this.setOrder$I(order);
this.setMad$H(mad);
}, 1);

Clazz.newMeth(C$, 'setMad$H', function (mad) {
this.mad=mad;
this.setShapeVisibility$Z(mad != 0);
});

Clazz.newMeth(C$, 'setShapeVisibility$Z', function (isVisible) {
var wasVisible=((this.shapeVisibilityFlags & C$.myVisibilityFlag) != 0);
if (wasVisible == isVisible ) return;
this.atom1.addDisplayedBond$I$Z(C$.myVisibilityFlag, isVisible);
this.atom2.addDisplayedBond$I$Z(C$.myVisibilityFlag, isVisible);
if (isVisible) this.shapeVisibilityFlags|=C$.myVisibilityFlag;
 else this.shapeVisibilityFlags&=~C$.myVisibilityFlag;
});

Clazz.newMeth(C$, 'getIdentity$', function () {
return (this.index + 1) + " " + $I$(2).getBondOrderNumberFromOrder$I(this.order) + " " + this.atom1.getInfo$() + " -- " + this.atom2.getInfo$() + " " + new Float(this.atom1.distance$javajs_util_T3(this.atom2)).toString() ;
});

Clazz.newMeth(C$, 'isCovalent$', function () {
return (this.order & 1023) != 0;
});

Clazz.newMeth(C$, 'isHydrogen$', function () {
return $I$(2).isOrderH$I(this.order);
});

Clazz.newMeth(C$, 'isStereo$', function () {
return (this.order & 1024) != 0;
});

Clazz.newMeth(C$, 'isPartial$', function () {
return (this.order & 224) != 0;
});

Clazz.newMeth(C$, 'isAromatic$', function () {
return (this.order & 512) != 0;
});

Clazz.newMeth(C$, 'getEnergy$', function () {
return 0;
});

Clazz.newMeth(C$, 'getValence$', function () {
return (!this.isCovalent$() ? 0 : this.isPartial$() || this.is$I(515)  ? 1 : this.order & 7);
});

Clazz.newMeth(C$, 'deleteAtomReferences$', function () {
if (this.atom1 != null ) this.atom1.deleteBond$org_jmol_modelset_Bond(this);
if (this.atom2 != null ) this.atom2.deleteBond$org_jmol_modelset_Bond(this);
this.atom1=this.atom2=null;
});

Clazz.newMeth(C$, 'setTranslucent$Z$F', function (isTranslucent, translucentLevel) {
this.colix=$I$(3).getColixTranslucent3$H$Z$F(this.colix, isTranslucent, translucentLevel);
});

Clazz.newMeth(C$, 'setOrder$I', function (order) {
if (this.atom1.getElementNumber$() == 16 && this.atom2.getElementNumber$() == 16 ) order|=256;
if (order == 512) order=515;
this.order=order | (this.order & 131072);
});

Clazz.newMeth(C$, 'getAtomIndex1$', function () {
return this.atom1.i;
});

Clazz.newMeth(C$, 'getAtomIndex2$', function () {
return this.atom2.i;
});

Clazz.newMeth(C$, 'getCovalentOrder$', function () {
return $I$(2).getCovalentBondOrder$I(this.order);
});

Clazz.newMeth(C$, 'getOtherAtom$org_jmol_modelset_Atom', function (thisAtom) {
return (this.atom1 === thisAtom  ? this.atom2 : this.atom2 === thisAtom  ? this.atom1 : null);
});

Clazz.newMeth(C$, 'is$I', function (bondType) {
return (this.order & ~131072) == bondType;
});

Clazz.newMeth(C$, 'getOtherNode$org_jmol_util_SimpleNode', function (thisAtom) {
return (this.atom1 === thisAtom  ? this.atom2 : this.atom2 === thisAtom  || thisAtom == null   ? this.atom1 : null);
});

Clazz.newMeth(C$, 'setAtropisomerOptions$javajs_util_BS$javajs_util_BS', function (bsA, bsB) {
var isBA=bsB.get$I(this.atom1.i);
var bs1=(isBA ? bsB : bsA);
var bs2=(isBA ? bsA : bsB);
var i1;
var i2=2147483647;
var bonds=this.atom1.bonds;
for (i1=0; i1 < bonds.length; i1++) {
var a=bonds[i1].getOtherAtom$org_jmol_modelset_Atom(this.atom1);
if (bs1.get$I(a.i) && a !== this.atom2  ) break;
}
if (i1 < bonds.length) {
bonds=this.atom2.bonds;
for (i2=0; i2 < bonds.length; i2++) {
var a=bonds[i2].getOtherAtom$org_jmol_modelset_Atom(this.atom2);
if (bs2.get$I(a.i) && a !== this.atom1  ) break;
}
}this.order=(i1 > 2 || i2 >= bonds.length  || i2 > 2  ? 1 : $I$(2).getAtropismOrder$I$I(i1 + 1, i2 + 1));
});

Clazz.newMeth(C$, 'getCIPChirality$Z', function (doCalculate) {
return "";
});

Clazz.newMeth(C$, 'setCIPChirality$I', function (c) {
});

Clazz.newMeth(C$, 'toString', function () {
return this.atom1 + " - " + this.atom2 ;
});

C$.$static$=function(){C$.$static$=0;
C$.myVisibilityFlag=$I$(1).getShapeVisibilityFlag$I(1);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:38 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
