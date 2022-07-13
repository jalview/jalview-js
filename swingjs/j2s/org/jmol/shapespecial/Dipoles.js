(function(){var P$=Clazz.newPackage("org.jmol.shapespecial"),p$1={},I$=[[0,'org.jmol.shapespecial.Dipole','javajs.util.P3','org.jmol.util.Logger','javajs.util.PT','javajs.util.Lst','org.jmol.util.C','javajs.util.AU','javajs.util.V3','org.jmol.script.T','java.util.Hashtable','javajs.util.SB','org.jmol.shape.Shape']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Dipoles", null, 'org.jmol.shape.Shape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dipoleCount=0;
this.dipoles=Clazz.array($I$(1), [4]);
this.startCoord=Clazz.new_($I$(2,1));
this.endCoord=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['isUserValue','isBond','iHaveTwoEnds'],'F',['dipoleValue'],'I',['dipoleCount','atomIndex1','atomIndex2'],'H',['colix','mad'],'S',['wildID'],'O',['dipoles','org.jmol.shapespecial.Dipole[]','currentDipole','org.jmol.shapespecial.Dipole','+tempDipole','startCoord','javajs.util.P3','+endCoord','calculatedDipole','javajs.util.V3']]]

Clazz.newMeth(C$, 'initShape$', function () {
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("init" === propertyName ) {
this.tempDipole=Clazz.new_($I$(1,1));
this.tempDipole.dipoleValue=1;
this.tempDipole.mad=10;
this.atomIndex1=-1;
this.tempDipole.modelIndex=-1;
this.dipoleValue=0;
this.calculatedDipole=null;
this.mad=($s$[0] = -1, $s$[0]);
this.isUserValue=this.isBond=this.iHaveTwoEnds=false;
return;
}if ("calculate" === propertyName ) {
try {
this.calculatedDipole=this.vwr.calculateMolecularDipole$javajs_util_BS(value);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
$I$(3,"info$S",["calculated molecular dipole = " + this.calculatedDipole + " " + (this.calculatedDipole == null  ? "" : "" + new Float(this.calculatedDipole.length$()).toString()) ]);
return;
}if ("thisID" === propertyName ) {
this.wildID=null;
var thisID=value;
if (thisID == null  || $I$(4).isWild$S(thisID) ) {
this.currentDipole=null;
if (thisID != null ) this.wildID=thisID.toUpperCase$();
return;
}this.currentDipole=p$1.findDipole$S.apply(this, [thisID]);
if (this.currentDipole == null ) this.currentDipole=p$1.allocDipole$S$S.apply(this, [thisID, ""]);
this.tempDipole=this.currentDipole;
if (thisID.equals$O("molecular")) p$1.getMolecular$javajs_util_BS.apply(this, [null]);
return;
}if ("bonds" === propertyName ) {
this.isBond=true;
this.currentDipole=null;
for (var i=this.dipoleCount; --i >= 0; ) if (p$1.isBondDipole$I.apply(this, [i])) return;

p$1.getBondDipoles.apply(this, []);
return;
}if ("all" === propertyName ) {
this.tempDipole.lstDipoles=Clazz.new_($I$(5,1));
return;
}if ("on" === propertyName ) {
p$1.setPropertyTok$I$Z$I$F.apply(this, [1073742335, this.isBond, 0, 0]);
return;
}if ("off" === propertyName ) {
p$1.setPropertyTok$I$Z$I$F.apply(this, [1073742334, this.isBond, 0, 0]);
return;
}if ("delete" === propertyName ) {
if (this.wildID == null  && this.currentDipole == null  ) {
p$1.clear$Z.apply(this, [false]);
return;
}p$1.setPropertyTok$I$Z$I$F.apply(this, [12291, this.isBond, 0, 0]);
return;
}if ("width" === propertyName ) {
this.mad=this.tempDipole.mad=($s$[0] = ((value).floatValue$() * 1000), $s$[0]);
if (this.currentDipole == null ) p$1.setPropertyTok$I$Z$I$F.apply(this, [659488, this.isBond, this.mad, 0]);
return;
}if ("offset" === propertyName ) {
var offset=this.tempDipole.offsetAngstroms=(value).floatValue$();
if (this.currentDipole == null ) p$1.setPropertyTok$I$Z$I$F.apply(this, [1611272194, this.isBond, 0, offset]);
return;
}if ("offsetPt" === propertyName ) {
this.tempDipole.offsetPt=value;
if (this.currentDipole != null ) {
this.currentDipole.setOffsetPt$javajs_util_P3(this.tempDipole.offsetPt);
}return;
}if ("offsetPercent" === propertyName ) {
var offsetPercent=this.tempDipole.offsetPercent=(value).intValue$();
if (this.tempDipole.dipoleValue != 0 ) this.tempDipole.offsetAngstroms=offsetPercent / 100.0 * this.tempDipole.dipoleValue;
if (this.currentDipole == null ) p$1.setPropertyTok$I$Z$I$F.apply(this, [268435634, this.isBond, 0, offsetPercent / 100.0]);
return;
}if ("offsetSide" === propertyName ) {
var offsetSide=(value).floatValue$();
p$1.setPropertyTok$I$Z$I$F.apply(this, [2097178, this.isBond, 0, offsetSide]);
return;
}if ("cross" === propertyName ) {
p$1.setPropertyTok$I$Z$I$F.apply(this, [1275069442, this.isBond, ((value).booleanValue$() ? 1 : 0), 0]);
return;
}if ("color" === propertyName ) {
this.colix=$I$(6).getColixO$O(value);
if (this.isBond) {
p$1.setColixDipole$H$I$javajs_util_BS.apply(this, [this.colix, 1023, bs]);
} else if (value != null ) {
p$1.setPropertyTok$I$Z$I$F.apply(this, [1765808134, false, 0, 0]);
}return;
}if ("translucency" === propertyName ) {
p$1.setPropertyTok$I$Z$I$F.apply(this, [603979967, this.isBond, (value.equals$O("translucent") ? 1 : 0), 0]);
return;
}if ("clear" === propertyName ) {
this.currentDipole=null;
p$1.clear$Z.apply(this, [false]);
}if ("clearBonds" === propertyName ) {
p$1.clear$Z.apply(this, [true]);
}if ("startSet" === propertyName ) {
var bsAtoms=value;
this.endCoord=null;
this.startCoord=this.ms.getAtomSetCenter$javajs_util_BS(bsAtoms);
this.tempDipole.set2Value$javajs_util_P3$javajs_util_P3$F(this.startCoord, $I$(2).new3$F$F$F(0, 0, 0), this.dipoleValue);
if (bsAtoms.cardinality$() == 1) this.atomIndex1=bsAtoms.nextSetBit$I(0);
return;
}if ("atomBitset" === propertyName ) {
var atomset=value;
switch (atomset.cardinality$()) {
case 0:
return;
case 1:
break;
case 2:
this.atomIndex1=atomset.nextSetBit$I(0);
this.startCoord=this.ms.at[this.atomIndex1];
atomset.clear$I(this.atomIndex1);
break;
default:
p$1.getMolecular$javajs_util_BS.apply(this, [atomset]);
return;
}
propertyName="endSet";
}if ("endSet" === propertyName ) {
this.iHaveTwoEnds=true;
var atomset=value;
if (this.atomIndex1 >= 0 && atomset.cardinality$() == 1 ) {
this.atomIndex2=atomset.nextSetBit$I(0);
this.tempDipole.set2AtomValue$org_jmol_modelset_Atom$org_jmol_modelset_Atom$F(this.ms.at[this.atomIndex1], this.ms.at[this.atomIndex2], 1);
this.currentDipole=p$1.findDipoleFor$S$S.apply(this, [this.tempDipole.thisID, this.tempDipole.dipoleInfo]);
this.tempDipole.thisID=this.currentDipole.thisID;
if (p$1.isSameAtoms$org_jmol_shapespecial_Dipole$S.apply(this, [this.currentDipole, this.tempDipole.dipoleInfo])) {
this.tempDipole=this.currentDipole;
if (this.dipoleValue > 0 ) this.tempDipole.dipoleValue=this.dipoleValue;
if (this.mad > 0) this.tempDipole.mad=this.mad;
}} else {
this.tempDipole.set2Value$javajs_util_P3$javajs_util_P3$F(this.startCoord, this.ms.getAtomSetCenter$javajs_util_BS(atomset), this.dipoleValue);
}return;
}if ("startCoord" === propertyName ) {
this.startCoord.setT$javajs_util_T3(value);
this.tempDipole.set2Value$javajs_util_P3$javajs_util_P3$F(this.startCoord, $I$(2).new3$F$F$F(0, 0, 0), this.dipoleValue);
return;
}if ("endCoord" === propertyName ) {
this.iHaveTwoEnds=true;
this.endCoord.setT$javajs_util_T3(value);
this.tempDipole.set2Value$javajs_util_P3$javajs_util_P3$F(this.startCoord, this.endCoord, this.dipoleValue);
p$1.dumpDipoles$S.apply(this, ["endCoord"]);
return;
}if ("value" === propertyName ) {
this.dipoleValue=(value).floatValue$();
this.isUserValue=true;
this.tempDipole.setValue$F(this.dipoleValue);
if (this.tempDipole.offsetPercent != 0) this.tempDipole.offsetAngstroms=this.tempDipole.offsetPercent / 100.0 * this.tempDipole.dipoleValue;
return;
}if ("set" === propertyName ) {
if (this.isBond || !this.iHaveTwoEnds && this.tempDipole.bsMolecule == null   ) return;
p$1.setDipole.apply(this, []);
p$1.setModelIndex.apply(this, []);
return;
}if (propertyName === "deleteModelAtoms" ) {
var modelIndex=((value)[2])[0];
for (var i=this.dipoleCount; --i >= 0; ) if (this.dipoles[i].modelIndex > modelIndex) {
this.dipoles[i].modelIndex--;
} else if (this.dipoles[i].modelIndex == modelIndex) {
if (this.dipoles[i] === this.currentDipole ) this.currentDipole=null;
this.dipoles=$I$(7).deleteElements$O$I$I(this.dipoles, i, 1);
this.dipoleCount--;
}
this.currentDipole=null;
return;
}});

Clazz.newMeth(C$, 'getMolecular$javajs_util_BS', function (bsMolecule) {
var v=(bsMolecule == null  ? this.calculatedDipole : null);
if (v == null  && bsMolecule == null  ) {
v=this.vwr.getModelDipole$();
$I$(3,"info$S",["file molecular dipole = " + v + " " + (v != null  ? "" + new Float(v.length$()).toString() : "") ]);
}if (v == null ) try {
this.calculatedDipole=v=this.vwr.calculateMolecularDipole$javajs_util_BS(bsMolecule);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (v == null ) {
$I$(3).warn$S("No molecular dipole found for this model; setting to {0 0 0}");
v=Clazz.new_($I$(8,1));
}this.tempDipole.bsMolecule=bsMolecule;
this.tempDipole.setPtVector$javajs_util_P3$javajs_util_V3($I$(2).new3$F$F$F(0, 0, 0), $I$(8).new3$F$F$F(-v.x, -v.y, -v.z));
if (this.tempDipole.lstDipoles != null ) {
p$1.getAllMolecularDipoles$javajs_util_BS.apply(this, [bsMolecule]);
}this.tempDipole.type=4;
if (this.currentDipole == null  || this.currentDipole.thisID == null   || bsMolecule == null  ) this.tempDipole.thisID="molecular";
p$1.setDipole.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getAllMolecularDipoles$javajs_util_BS', function (bsAtoms) {
var mols=this.ms.getMolecules$();
for (var i=mols.length; --i >= 0; ) {
var m=mols[i];
if (m.atomList.intersects$javajs_util_BS(bsAtoms)) {
var v=null;
try {
v=this.vwr.calculateMolecularDipole$javajs_util_BS(m.atomList);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (v == null ) continue;
var center=this.ms.getAtomSetCenter$javajs_util_BS(m.atomList);
this.tempDipole.lstDipoles.addLast$O(Clazz.array(java.lang.Object, -1, [v, center, m.atomList]));
}}
}, p$1);

Clazz.newMeth(C$, 'setPropertyTok$I$Z$I$F', function (tok, bondOnly, iValue, fValue) {
if (this.currentDipole != null ) p$1.setPropertyFor$I$org_jmol_shapespecial_Dipole$I$F.apply(this, [tok, this.currentDipole, iValue, fValue]);
 else {
for (var i=this.dipoleCount; --i >= 0; ) if (!bondOnly || p$1.isBondDipole$I.apply(this, [i]) ) if (this.wildID == null  || $I$(4,"isMatch$S$S$Z$Z",[this.dipoles[i].thisID.toUpperCase$(), this.wildID, true, true]) ) p$1.setPropertyFor$I$org_jmol_shapespecial_Dipole$I$F.apply(this, [tok, this.dipoles[i], iValue, fValue]);

}}, p$1);

Clazz.newMeth(C$, 'setPropertyFor$I$org_jmol_shapespecial_Dipole$I$F', function (tok, dipole, iValue, fValue) {
switch (tok) {
case 1073742335:
dipole.visible=true;
return;
case 1073742334:
dipole.visible=false;
return;
case 12291:
p$1.deleteDipole$org_jmol_shapespecial_Dipole.apply(this, [dipole]);
return;
case 659488:
dipole.mad=this.tempDipole.mad=($s$[0] = iValue, $s$[0]);
return;
case 1611272194:
dipole.offsetAngstroms=fValue;
return;
case 268435634:
dipole.offsetAngstroms=fValue * dipole.dipoleValue;
return;
case 2097178:
dipole.offsetSide=fValue;
return;
case 1275069442:
dipole.noCross=(iValue == 0);
return;
case 1765808134:
dipole.colix=this.colix;
return;
case 603979967:
dipole.setTranslucent$Z$F(iValue == 1, this.translucentLevel);
return;
}
$I$(3,"error$S",["Unkown dipole property! " + $I$(9).nameOf$I(tok)]);
}, p$1);

Clazz.newMeth(C$, 'getPropertyData$S$OA', function (property, data) {
if (property === "getNames" ) {
}if (property === "checkID" ) {
var key=(data[0]).toUpperCase$();
var isWild=$I$(4).isWild$S(key);
for (var i=this.dipoleCount; --i >= 0; ) {
var id=this.dipoles[i].thisID;
if (id.equalsIgnoreCase$S(key) || isWild && $I$(4,"isMatch$S$S$Z$Z",[id.toUpperCase$(), key, true, true])  ) {
data[1]=id;
return true;
}}
return false;
}return this.getPropShape$S$OA(property, data);
});

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
if (property.equals$O("list")) {
return this.getShapeState$();
}return null;
});

Clazz.newMeth(C$, 'getBondDipoles', function () {
var partialCharges=this.ms.getPartialCharges$();
if (partialCharges == null ) return;
p$1.clear$Z.apply(this, [true]);
var bonds=this.ms.bo;
for (var i=this.ms.bondCount; --i >= 0; ) {
var bond=bonds[i];
if (!bond.isCovalent$()) continue;
var c1=partialCharges[bond.atom1.i];
var c2=partialCharges[bond.atom2.i];
if (c1 != c2 ) p$1.setDipoleAtoms$org_jmol_modelset_Atom$org_jmol_modelset_Atom$F$F.apply(this, [bond.atom1, bond.atom2, c1, c2]);
}
}, p$1);

Clazz.newMeth(C$, 'isBondDipole$I', function (i) {
if (i >= this.dipoles.length || this.dipoles[i] == null  ) return false;
return (this.dipoles[i].isBondType$());
}, p$1);

Clazz.newMeth(C$, 'setColixDipole$H$I$javajs_util_BS', function (colix, bondTypeMask, bs) {
if (colix == 2) return;
var iter=this.ms.getBondIteratorForType$I$javajs_util_BS(bondTypeMask, bs);
while (iter.hasNext$()){
var d=p$1.findBondDipole$org_jmol_modelset_Bond.apply(this, [iter.next$()]);
if (d != null ) d.colix=colix;
}
}, p$1);

Clazz.newMeth(C$, 'setDipole', function () {
if (this.currentDipole == null ) this.currentDipole=p$1.allocDipole$S$S.apply(this, ["", ""]);
this.currentDipole.set$org_jmol_shapespecial_Dipole(this.tempDipole);
this.currentDipole.isUserValue=this.isUserValue;
this.currentDipole.modelIndex=this.vwr.am.cmi;
}, p$1);

Clazz.newMeth(C$, 'setDipoleAtoms$org_jmol_modelset_Atom$org_jmol_modelset_Atom$F$F', function (atom1, atom2, c1, c2) {
var dipole=p$1.findAtomDipole$org_jmol_modelset_Atom$org_jmol_modelset_Atom$Z.apply(this, [atom1, atom2, true]);
var value=(c1 - c2) / 2.0 * atom1.distance$javajs_util_T3(atom2) / 0.208194;
if (value < 0 ) {
dipole.set2AtomValue$org_jmol_modelset_Atom$org_jmol_modelset_Atom$F(atom2, atom1, -value);
} else {
dipole.set2AtomValue$org_jmol_modelset_Atom$org_jmol_modelset_Atom$F(atom1, atom2, value);
}dipole.type=3;
dipole.modelIndex=atom1.mi;
}, p$1);

Clazz.newMeth(C$, 'getDipoleIndexFor$S$S', function (dipoleInfo, thisID) {
if (dipoleInfo != null  && dipoleInfo.length$() > 0 ) for (var i=this.dipoleCount; --i >= 0; ) if (p$1.isSameAtoms$org_jmol_shapespecial_Dipole$S.apply(this, [this.dipoles[i], dipoleInfo])) return i;

return this.getIndexFromName$S(thisID);
}, p$1);

Clazz.newMeth(C$, 'isSameAtoms$org_jmol_shapespecial_Dipole$S', function (dipole, dipoleInfo) {
return (dipole != null  && dipole.isBondType$()  && (dipole.dipoleInfo + dipole.dipoleInfo).indexOf$S(dipoleInfo) >= 0 );
}, p$1);

Clazz.newMeth(C$, 'getDipoleIndex$I$I', function (atomIndex1, atomIndex2) {
for (var i=this.dipoleCount; --i >= 0; ) {
if (this.dipoles[i] != null  && this.dipoles[i].atoms[0] != null   && this.dipoles[i].atoms[1] != null   && (this.dipoles[i].atoms[0].i == atomIndex1 && this.dipoles[i].atoms[1].i == atomIndex2  || this.dipoles[i].atoms[1].i == atomIndex1 && this.dipoles[i].atoms[0].i == atomIndex2  ) ) return i;
}
return -1;
}, p$1);

Clazz.newMeth(C$, 'deleteDipole$org_jmol_shapespecial_Dipole', function (dipole) {
if (dipole == null ) return;
if (this.currentDipole === dipole ) this.currentDipole=null;
var i;
for (i=this.dipoleCount; this.dipoles[--i] !== dipole ; ) {
}
if (i < 0) return;
for (var j=i + 1; j < this.dipoleCount; ++j) this.dipoles[j - 1]=this.dipoles[j];

this.dipoles[--this.dipoleCount]=null;
}, p$1);

Clazz.newMeth(C$, 'findDipole$S', function (thisID) {
var dipoleIndex=this.getIndexFromName$S(thisID);
if (dipoleIndex >= 0) {
return this.dipoles[dipoleIndex];
}return null;
}, p$1);

Clazz.newMeth(C$, 'findAtomDipole$org_jmol_modelset_Atom$org_jmol_modelset_Atom$Z', function (atom1, atom2, doAllocate) {
var dipoleIndex=p$1.getDipoleIndex$I$I.apply(this, [atom1.i, atom2.i]);
if (dipoleIndex >= 0) {
return this.dipoles[dipoleIndex];
}return (doAllocate ? p$1.allocDipole$S$S.apply(this, ["", ""]) : null);
}, p$1);

Clazz.newMeth(C$, 'findBondDipole$org_jmol_modelset_Bond', function (bond) {
var d=p$1.findAtomDipole$org_jmol_modelset_Atom$org_jmol_modelset_Atom$Z.apply(this, [bond.atom1, bond.atom2, false]);
return (d == null  || d.atoms[0] == null   ? null : d);
}, p$1);

Clazz.newMeth(C$, 'findDipoleFor$S$S', function (thisID, dipoleInfo) {
var dipoleIndex=p$1.getDipoleIndexFor$S$S.apply(this, [dipoleInfo, thisID]);
if (dipoleIndex >= 0) {
if (thisID.length$() > 0) this.dipoles[dipoleIndex].thisID=thisID;
return this.dipoles[dipoleIndex];
}return p$1.allocDipole$S$S.apply(this, [thisID, dipoleInfo]);
}, p$1);

Clazz.newMeth(C$, 'allocDipole$S$S', function (thisID, dipoleInfo) {
this.dipoles=$I$(7).ensureLength$O$I(this.dipoles, this.dipoleCount + 1);
if (thisID == null  || thisID.length$() == 0 ) thisID="dipole" + (this.dipoleCount + 1);
var d=this.dipoles[this.dipoleCount++]=Clazz.new_($I$(1,1)).init$I$S$S$H$H$Z(this.vwr.am.cmi, thisID, dipoleInfo, this.colix, 10, true);
return d;
}, p$1);

Clazz.newMeth(C$, 'dumpDipoles$S', function (msg) {
for (var i=this.dipoleCount; --i >= 0; ) {
var dipole=this.dipoles[i];
$I$(3,"info$S",["\n\n" + msg + " dump dipole " + i + " " + dipole + " " + dipole.thisID + " " + dipole.dipoleInfo + " " + dipole.visibilityFlags + " mad=" + dipole.mad + " vis=" + dipole.visible + "\n orig" + dipole.origin + " " + " vect" + dipole.vector + " val=" + new Float(dipole.dipoleValue).toString() ]);
}
if (this.currentDipole != null ) $I$(3,"info$S",[" current = " + this.currentDipole + this.currentDipole.origin ]);
if (this.tempDipole != null ) $I$(3,"info$S",[" temp = " + this.tempDipole + " " + this.tempDipole.origin ]);
}, p$1);

Clazz.newMeth(C$, 'clear$Z', function (clearBondDipolesOnly) {
if (clearBondDipolesOnly) {
for (var i=this.dipoleCount; --i >= 0; ) if (p$1.isBondDipole$I.apply(this, [i])) p$1.deleteDipole$org_jmol_shapespecial_Dipole.apply(this, [this.dipoles[i]]);

return;
}for (var i=this.dipoleCount; --i >= 0; ) if (!this.isBond || p$1.isBondDipole$I.apply(this, [i]) ) p$1.deleteDipole$org_jmol_shapespecial_Dipole.apply(this, [this.dipoles[i]]);

}, p$1);

Clazz.newMeth(C$, 'getIndexFromName$S', function (thisID) {
if (thisID == null ) return -1;
for (var i=this.dipoleCount; --i >= 0; ) {
if (this.dipoles[i] != null  && thisID.equals$O(this.dipoles[i].thisID) ) return i;
}
return -1;
});

Clazz.newMeth(C$, 'getShapeDetail$', function () {
var V=Clazz.new_($I$(5,1));
var atomInfo;
var ptTemp=Clazz.new_($I$(2,1));
for (var i=0; i < this.dipoleCount; i++) {
var info=Clazz.new_($I$(10,1));
var dipole=this.dipoles[i];
info.put$O$O("ID", dipole.thisID);
info.put$O$O("vector", dipole.vector);
info.put$O$O("origin", dipole.origin);
if (dipole.bsMolecule != null ) {
info.put$O$O("bsMolecule", dipole.bsMolecule);
} else if (dipole.atoms[0] != null ) {
atomInfo=Clazz.new_($I$(10,1));
this.ms.getAtomIdentityInfo$I$java_util_Map$javajs_util_P3(dipole.atoms[0].i, atomInfo, ptTemp);
var atoms=Clazz.new_($I$(5,1));
atoms.addLast$O(atomInfo);
atomInfo=Clazz.new_($I$(10,1));
this.ms.getAtomIdentityInfo$I$java_util_Map$javajs_util_P3(dipole.atoms[1].i, atomInfo, ptTemp);
atoms.addLast$O(atomInfo);
info.put$O$O("atoms", atoms);
info.put$O$O("magnitude", Float.valueOf$F(dipole.vector.length$()));
}V.addLast$O(info);
}
return V;
});

Clazz.newMeth(C$, 'setModelIndex', function () {
if (this.currentDipole == null ) return;
this.currentDipole.visible=true;
this.currentDipole.modelIndex=this.vwr.am.cmi;
}, p$1);

Clazz.newMeth(C$, 'setModelVisibilityFlags$javajs_util_BS', function (bsModels) {
for (var i=this.dipoleCount; --i >= 0; ) {
var dipole=this.dipoles[i];
dipole.visibilityFlags=((dipole.modelIndex < 0 || bsModels.get$I(dipole.modelIndex) ) && dipole.mad != 0  && dipole.visible  && dipole.origin != null   && dipole.vector != null   && dipole.vector.length$() != 0   && dipole.dipoleValue != 0   ? this.vf : 0);
}
});

Clazz.newMeth(C$, 'getShapeState$', function () {
if (this.dipoleCount == 0) return "";
var s=Clazz.new_($I$(11,1));
var thisModel=-1;
var modelCount=this.vwr.ms.mc;
for (var i=0; i < this.dipoleCount; i++) {
var dipole=this.dipoles[i];
if (dipole.isValid) {
if (modelCount > 1 && dipole.modelIndex != thisModel ) $I$(12,"appendCmd$javajs_util_SB$S",[s, "frame " + this.vwr.getModelNumberDotted$I(thisModel=dipole.modelIndex)]);
s.append$S(dipole.getShapeState$());
$I$(12,"appendCmd$javajs_util_SB$S",[s, $I$(12).getColorCommandUnk$S$H$Z("dipole", dipole.colix, this.translucentAllowed)]);
}}
return s.toString();
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
