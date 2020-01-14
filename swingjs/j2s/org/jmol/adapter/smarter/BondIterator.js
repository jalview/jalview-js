(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),I$=[];
var C$=Clazz.newClass(P$, "BondIterator", null, 'org.jmol.api.JmolAdapterBondIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bsAtoms=null;
this.bonds=null;
this.ibond=0;
this.bond=null;
this.bondCount=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_adapter_smarter_AtomSetCollection', function (asc) {
Clazz.super_(C$, this,1);
this.bsAtoms=asc.bsAtoms;
this.bonds=asc.bonds;
this.bondCount=asc.bondCount;
this.ibond=0;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.ibond == this.bondCount) return false;
while ((this.bond=this.bonds[this.ibond++]) == null  || (this.bsAtoms != null  && (!this.bsAtoms.get$I(this.bond.atomIndex1) || !this.bsAtoms.get$I(this.bond.atomIndex2) ) ) )if (this.ibond == this.bondCount) return false;

return true;
});

Clazz.newMeth(C$, 'getAtomUniqueID1$', function () {
return Integer.valueOf$I(this.bond.atomIndex1);
});

Clazz.newMeth(C$, 'getAtomUniqueID2$', function () {
return Integer.valueOf$I(this.bond.atomIndex2);
});

Clazz.newMeth(C$, 'getEncodedOrder$', function () {
return this.bond.order;
});

Clazz.newMeth(C$, 'getRadius$', function () {
return this.bond.radius;
});

Clazz.newMeth(C$, 'getColix$', function () {
return this.bond.colix;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
