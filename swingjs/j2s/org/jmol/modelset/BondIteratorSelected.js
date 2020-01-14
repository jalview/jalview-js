(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[];
var C$=Clazz.newClass(P$, "BondIteratorSelected", null, null, 'org.jmol.modelset.BondIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bonds=null;
this.bondCount=0;
this.bondType=0;
this.iBond=0;
this.bsSelected=null;
this.bondSelectionModeOr=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_modelset_BondA$I$I$javajs_util_BS$Z', function (bonds, bondCount, bondType, bsSelected, bondSelectionModeOr) {
C$.$init$.apply(this);
this.bonds=bonds;
this.bondCount=bondCount;
this.bondType=bondType;
this.bsSelected=bsSelected;
this.bondSelectionModeOr=bondSelectionModeOr;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.bondType == 131071) {
this.iBond=this.bsSelected.nextSetBit$I(this.iBond);
return (this.iBond >= 0 && this.iBond < this.bondCount );
}for (; this.iBond < this.bondCount; ++this.iBond) {
var bond=this.bonds[this.iBond];
if (this.bondType != 65535 && (bond.order & this.bondType) == 0 ) {
continue;
} else if (this.bondType == 65535 && bond.order == 32768 ) continue;
var isSelected1=this.bsSelected.get$I(bond.atom1.i);
var isSelected2=this.bsSelected.get$I(bond.atom2.i);
if ((!this.bondSelectionModeOr && isSelected1 && isSelected2  ) || (this.bondSelectionModeOr && (isSelected1 || isSelected2 ) ) ) return true;
}
return false;
});

Clazz.newMeth(C$, 'nextIndex$', function () {
return this.iBond;
});

Clazz.newMeth(C$, 'next$', function () {
return this.bonds[this.iBond++];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
