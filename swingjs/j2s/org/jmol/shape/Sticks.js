(function(){var P$=Clazz.newPackage("org.jmol.shape"),p$1={},I$=[[0,'javajs.util.P3i','org.jmol.util.BSUtil','javajs.util.BS','org.jmol.util.C','org.jmol.c.PAL','org.jmol.util.Edge','org.jmol.util.Escape','javajs.util.P3','java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Sticks", null, 'org.jmol.shape.Shape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.myMask=0;
this.reportAll=false;
this.bsOrderSet=null;
this.selectedBonds=null;
this.ptXY=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.ptXY=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'initShape$', function () {
this.myMask=1023;
this.reportAll=false;
});

Clazz.newMeth(C$, 'setSize$I$javajs_util_BS', function (size, bsSelected) {
if (size == 2147483647) {
this.selectedBonds=$I$(2).copy$javajs_util_BS(bsSelected);
return;
}if (size == -2147483648) {
if (this.bsOrderSet == null ) this.bsOrderSet=Clazz.new_($I$(3));
this.bsOrderSet.or$javajs_util_BS(bsSelected);
return;
}if (this.bsSizeSet == null ) this.bsSizeSet=Clazz.new_($I$(3));
var iter=(this.selectedBonds != null  ? this.ms.getBondIterator$javajs_util_BS(this.selectedBonds) : this.ms.getBondIteratorForType$I$javajs_util_BS(this.myMask, bsSelected));
var mad=($s$[0] = size, $s$[0]);
while (iter.hasNext$()){
this.bsSizeSet.set$I(iter.nextIndex$());
iter.next$().setMad$H(mad);
}
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("type" == propertyName) {
this.myMask=(value).intValue$();
return;
}if ("reportAll" == propertyName) {
this.reportAll=true;
return;
}if ("reset" == propertyName) {
this.bsOrderSet=null;
this.bsSizeSet=null;
this.bsColixSet=null;
this.selectedBonds=null;
return;
}if ("bondOrder" == propertyName) {
if (this.bsOrderSet == null ) this.bsOrderSet=Clazz.new_($I$(3));
var order=(value).intValue$();
var iter=(this.selectedBonds != null  ? this.ms.getBondIterator$javajs_util_BS(this.selectedBonds) : this.ms.getBondIteratorForType$I$javajs_util_BS(65535, bs));
while (iter.hasNext$()){
this.bsOrderSet.set$I(iter.nextIndex$());
iter.next$().setOrder$I(order);
}
return;
}if ("color" == propertyName) {
if (this.bsColixSet == null ) this.bsColixSet=Clazz.new_($I$(3));
var colix=$I$(4).getColixO$O(value);
var pal=(Clazz.instanceOf(value, "org.jmol.c.PAL") ? value : null);
if (pal === $I$(5).TYPE  || pal === $I$(5).ENERGY  ) {
var isEnergy=(pal === $I$(5).ENERGY );
var iter=(this.selectedBonds != null  ? this.ms.getBondIterator$javajs_util_BS(this.selectedBonds) : this.ms.getBondIteratorForType$I$javajs_util_BS(this.myMask, bs));
while (iter.hasNext$()){
this.bsColixSet.set$I(iter.nextIndex$());
var bond=iter.next$();
bond.colix=(isEnergy ? this.getColixB$H$I$org_jmol_modelset_Bond(colix, pal.id, bond) : $I$(4).getColix$I($I$(6).getArgbHbondType$I(bond.order)));
}
return;
}if (colix == 2 && pal !== $I$(5).CPK  ) return;
var iter=(this.selectedBonds != null  ? this.ms.getBondIterator$javajs_util_BS(this.selectedBonds) : this.ms.getBondIteratorForType$I$javajs_util_BS(this.myMask, bs));
while (iter.hasNext$()){
var iBond=iter.nextIndex$();
iter.next$().colix=colix;
this.bsColixSet.setBitTo$I$Z(iBond, (colix != 0 && colix != 2 ));
}
return;
}if ("translucency" == propertyName) {
if (this.bsColixSet == null ) this.bsColixSet=Clazz.new_($I$(3));
var isTranslucent=((value).equals$O("translucent"));
var iter=(this.selectedBonds != null  ? this.ms.getBondIterator$javajs_util_BS(this.selectedBonds) : this.ms.getBondIteratorForType$I$javajs_util_BS(this.myMask, bs));
while (iter.hasNext$()){
this.bsColixSet.set$I(iter.nextIndex$());
iter.next$().setTranslucent$Z$F(isTranslucent, this.translucentLevel);
}
return;
}if ("deleteModelAtoms" == propertyName) {
return;
}this.setPropS$S$O$javajs_util_BS(propertyName, value, bs);
});

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
if (property.equals$O("selectionState")) return (this.selectedBonds != null  ? "select BONDS " + $I$(7).eBS$javajs_util_BS(this.selectedBonds) + "\n"  : "");
if (property.equals$O("sets")) return Clazz.array($I$(3), -1, [this.bsOrderSet, this.bsSizeSet, this.bsColixSet]);
return null;
});

Clazz.newMeth(C$, 'setAtomClickability$', function () {
var bonds=this.ms.bo;
for (var i=this.ms.bondCount; --i >= 0; ) {
var bond=bonds[i];
if ((bond.shapeVisibilityFlags & this.vf) == 0 || this.ms.isAtomHidden$I(bond.atom1.i)  || this.ms.isAtomHidden$I(bond.atom2.i) ) continue;
bond.atom1.setClickable$I(this.vf);
bond.atom2.setClickable$I(this.vf);
}
});

Clazz.newMeth(C$, 'getShapeState$', function () {
return null;
});

Clazz.newMeth(C$, 'checkObjectHovered$I$I$javajs_util_BS', function (x, y, bsVisible) {
var pt=Clazz.new_($I$(8));
var bond=p$1.findPickedBond$I$I$javajs_util_BS$javajs_util_P3.apply(this, [x, y, bsVisible, pt]);
if (bond == null ) return false;
this.vwr.highlightBond$I$Z(bond.index, true);
return true;
});

Clazz.newMeth(C$, 'checkObjectClicked$I$I$I$javajs_util_BS$Z', function (x, y, modifiers, bsVisible, drawPicking) {
var pt=Clazz.new_($I$(8));
var bond=p$1.findPickedBond$I$I$javajs_util_BS$javajs_util_P3.apply(this, [x, y, bsVisible, pt]);
if (bond == null ) return null;
var modelIndex=bond.atom1.mi;
var info=bond.getIdentity$();
var map=Clazz.new_($I$(9));
map.put$TK$TV("pt", pt);
map.put$TK$TV("index", Integer.valueOf$I(bond.index));
map.put$TK$TV("modelIndex", Integer.valueOf$I(modelIndex));
map.put$TK$TV("model", this.vwr.getModelNumberDotted$I(modelIndex));
map.put$TK$TV("type", "bond");
map.put$TK$TV("info", info);
this.vwr.setStatusAtomPicked$I$S$java_util_Map$Z(-3, "[\"bond\",\"" + bond.getIdentity$() + "\"," + new Float(pt.x).toString() + "," + new Float(pt.y).toString() + "," + new Float(pt.z).toString() + "]" , map, false);
return map;
});

Clazz.newMeth(C$, 'findPickedBond$I$I$javajs_util_BS$javajs_util_P3', function (x, y, bsVisible, pt) {
var dmin2=100;
if (this.vwr.gdata.isAntialiased$()) {
x<<=1;
y<<=1;
dmin2<<=1;
}var pickedBond=null;
var v=Clazz.new_($I$(8));
var bonds=this.ms.bo;
for (var i=this.ms.bondCount; --i >= 0; ) {
var bond=bonds[i];
if (bond.shapeVisibilityFlags == 0) continue;
var atom1=bond.atom1;
var atom2=bond.atom2;
if (!atom1.checkVisible$() || !atom2.checkVisible$() ) continue;
v.ave$javajs_util_T3$javajs_util_T3(atom1, atom2);
var d2=this.coordinateInRange$I$I$javajs_util_T3$I$javajs_util_P3i(x, y, v, dmin2, this.ptXY);
if (d2 >= 0) {
var f=1.0 * (this.ptXY.x - atom1.sX) / (atom2.sX - atom1.sX);
if (f < 0.4  || f > 0.6  ) continue;
dmin2=d2;
pickedBond=bond;
pt.setT$javajs_util_T3(v);
}}
return pickedBond;
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
