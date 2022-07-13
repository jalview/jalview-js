(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'org.jmol.api.JmolSelectionListener','javajs.util.BS','org.jmol.util.BSUtil','org.jmol.i18n.GT','javajs.util.AU']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SelectionManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.listeners=Clazz.array($I$(1), [0]);
this.bsHidden=Clazz.new_($I$(2,1));
this.bsSelection=Clazz.new_($I$(2,1));
this.bsFixed=Clazz.new_($I$(2,1));
this.empty=1;
this.bsTemp=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['hideNotSelected'],'I',['empty'],'O',['vwr','org.jmol.viewer.Viewer','listeners','org.jmol.api.JmolSelectionListener[]','bsHidden','javajs.util.BS','+bsSelection','+bsFixed','+bsSubset','+bsDeleted','noneSelected','Boolean','bsTemp','javajs.util.BS']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer', function (vwr) {
;C$.$init$.apply(this);
this.vwr=vwr;
}, 1);

Clazz.newMeth(C$, 'processDeletedModelAtoms$javajs_util_BS', function (bsAtoms) {
$I$(3).deleteBits$javajs_util_BS$javajs_util_BS(this.bsDeleted, bsAtoms);
$I$(3).deleteBits$javajs_util_BS$javajs_util_BS(this.bsSubset, bsAtoms);
$I$(3).deleteBits$javajs_util_BS$javajs_util_BS(this.bsFixed, bsAtoms);
$I$(3).deleteBits$javajs_util_BS$javajs_util_BS(this.bsHidden, bsAtoms);
var bs=$I$(3).copy$javajs_util_BS(this.bsSelection);
$I$(3).deleteBits$javajs_util_BS$javajs_util_BS(bs, bsAtoms);
this.setSelectionSet$javajs_util_BS$I(bs, 0);
p$1.selectionChanged$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'clear$', function () {
this.clearSelection$Z(true);
this.setSelectionSubset$javajs_util_BS(null);
this.hide$org_jmol_modelset_ModelSet$javajs_util_BS$I$Z(null, null, 0, true);
this.bsDeleted=null;
this.setMotionFixedAtoms$javajs_util_BS(null);
});

Clazz.newMeth(C$, 'display$org_jmol_modelset_ModelSet$javajs_util_BS$I$Z', function (modelSet, bs, addRemove, isQuiet) {
switch (addRemove) {
default:
var bsNotSubset=(this.bsSubset == null  ? null : $I$(3,"andNot$javajs_util_BS$javajs_util_BS",[$I$(3).copy$javajs_util_BS(this.bsHidden), this.bsSubset]));
var bsAll=modelSet.getModelAtomBitSetIncludingDeleted$I$Z(-1, false);
this.bsHidden.or$javajs_util_BS(bsAll);
if (bsNotSubset != null ) {
this.bsHidden.and$javajs_util_BS(this.bsSubset);
this.bsHidden.or$javajs_util_BS(bsNotSubset);
}case 1275069441:
if (bs != null ) this.bsHidden.andNot$javajs_util_BS(bs);
break;
case 1073742119:
if (bs != null ) this.bsHidden.or$javajs_util_BS(bs);
break;
}
$I$(3).andNot$javajs_util_BS$javajs_util_BS(this.bsHidden, this.bsDeleted);
modelSet.setBsHidden$javajs_util_BS(this.bsHidden);
if (!isQuiet) this.vwr.reportSelection$S($I$(4,"i$S$I",[$I$(4).$$S("{0} atoms hidden"), this.bsHidden.cardinality$()]));
});

Clazz.newMeth(C$, 'hide$org_jmol_modelset_ModelSet$javajs_util_BS$I$Z', function (modelSet, bs, addRemove, isQuiet) {
var bsNotSubset=(addRemove == 0 || this.bsSubset == null   ? null : $I$(3,"andNot$javajs_util_BS$javajs_util_BS",[$I$(3).copy$javajs_util_BS(this.bsHidden), this.bsSubset]));
C$.setBitSet$javajs_util_BS$javajs_util_BS$I(this.bsHidden, bs, addRemove);
if (bsNotSubset != null ) this.bsHidden.or$javajs_util_BS(bsNotSubset);
if (modelSet != null ) modelSet.setBsHidden$javajs_util_BS(this.bsHidden);
if (!isQuiet) this.vwr.reportSelection$S($I$(4,"i$S$I",[$I$(4).$$S("{0} atoms hidden"), this.bsHidden.cardinality$()]));
});

Clazz.newMeth(C$, 'setSelectionSet$javajs_util_BS$I', function (set, addRemove) {
C$.setBitSet$javajs_util_BS$javajs_util_BS$I(this.bsSelection, set, addRemove);
this.empty=-1;
});

Clazz.newMeth(C$, 'setBitSet$javajs_util_BS$javajs_util_BS$I', function (bsWhat, bs, addRemove) {
switch (addRemove) {
default:
bsWhat.clearAll$();
case 1275069441:
if (bs != null ) bsWhat.or$javajs_util_BS(bs);
break;
case 1073742119:
if (bs != null ) bsWhat.andNot$javajs_util_BS(bs);
break;
}
}, 1);

Clazz.newMeth(C$, 'getHiddenSet$', function () {
return this.bsHidden;
});

Clazz.newMeth(C$, 'getHideNotSelected$', function () {
return this.hideNotSelected;
});

Clazz.newMeth(C$, 'setHideNotSelected$Z', function (TF) {
this.hideNotSelected=TF;
if (TF) p$1.selectionChanged$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'isSelected$I', function (atomIndex) {
return (atomIndex >= 0 && this.bsSelection.get$I(atomIndex) );
});

Clazz.newMeth(C$, 'select$javajs_util_BS$I$Z', function (bs, addRemove, isQuiet) {
if (bs == null ) {
this.selectAll$Z(true);
if (!this.vwr.getBoolean$I(1612709900)) p$1.excludeSelectionSet$javajs_util_BS.apply(this, [this.vwr.ms.getAtoms$I$O(1612709900, null)]);
if (!this.vwr.getBoolean$I(1612709894)) p$1.excludeSelectionSet$javajs_util_BS.apply(this, [this.vwr.ms.getAtoms$I$O(1612709894, null)]);
} else {
this.setSelectionSet$javajs_util_BS$I(bs, addRemove);
if (!this.vwr.getBoolean$I(1612709900)) p$1.excludeSelectionSet$javajs_util_BS.apply(this, [this.vwr.ms.getAtoms$I$O(1612709900, null)]);
if (!this.vwr.getBoolean$I(1612709894)) p$1.excludeSelectionSet$javajs_util_BS.apply(this, [this.vwr.ms.getAtoms$I$O(1612709894, null)]);
}p$1.selectionChanged$Z.apply(this, [false]);
var reportChime=this.vwr.getBoolean$I(603979879);
if (!reportChime && isQuiet ) return;
var n=this.getSelectionCount$();
if (reportChime) this.vwr.getChimeMessenger$().reportSelection$I(n);
 else if (!isQuiet) this.vwr.reportSelection$S($I$(4,"i$S$I",[$I$(4).$$S("{0} atoms selected"), n]));
});

Clazz.newMeth(C$, 'selectAll$Z', function (isQuiet) {
var count=this.vwr.ms.ac;
this.empty=(count == 0) ? 1 : 0;
for (var i=count; --i >= 0; ) this.bsSelection.set$I(i);

$I$(3).andNot$javajs_util_BS$javajs_util_BS(this.bsSelection, this.bsDeleted);
p$1.selectionChanged$Z.apply(this, [isQuiet]);
});

Clazz.newMeth(C$, 'clearSelection$Z', function (isQuiet) {
this.setHideNotSelected$Z(false);
this.bsSelection.clearAll$();
this.empty=1;
p$1.selectionChanged$Z.apply(this, [isQuiet]);
});

Clazz.newMeth(C$, 'isAtomSelected$I', function (atomIndex) {
return ((this.bsSubset == null  || this.bsSubset.get$I(atomIndex) ) && this.bsDeleted == null   || !this.bsDeleted.get$I(atomIndex) ) && this.bsSelection.get$I(atomIndex) ;
});

Clazz.newMeth(C$, 'setSelectedAtom$I$Z', function (atomIndex, TF) {
if (atomIndex < 0) {
p$1.selectionChanged$Z.apply(this, [true]);
return;
}if (this.bsSubset != null  && !this.bsSubset.get$I(atomIndex)  || this.bsDeleted != null  && this.bsDeleted.get$I(atomIndex)  ) return;
this.bsSelection.setBitTo$I$Z(atomIndex, TF);
if (TF) this.empty=0;
 else this.empty=-1;
});

Clazz.newMeth(C$, 'setSelectionSubset$javajs_util_BS', function (bs) {
this.bsSubset=bs;
});

Clazz.newMeth(C$, 'isInSelectionSubset$I', function (atomIndex) {
return (atomIndex < 0 || this.bsSubset == null   || this.bsSubset.get$I(atomIndex) );
});

Clazz.newMeth(C$, 'invertSelection$', function () {
$I$(3).invertInPlace$javajs_util_BS$I(this.bsSelection, this.vwr.ms.ac);
this.empty=(this.bsSelection.length$() > 0 ? 0 : 1);
p$1.selectionChanged$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'excludeSelectionSet$javajs_util_BS', function (setExclude) {
if (setExclude == null  || this.empty == 1 ) return;
this.bsSelection.andNot$javajs_util_BS(setExclude);
this.empty=-1;
}, p$1);

Clazz.newMeth(C$, 'getSelectionCount$', function () {
if (this.empty == 1) return 0;
this.empty=1;
var bs;
if (this.bsSubset == null ) {
bs=this.bsSelection;
} else {
this.bsTemp.clearAll$();
this.bsTemp.or$javajs_util_BS(this.bsSubset);
this.bsTemp.and$javajs_util_BS(this.bsSelection);
bs=this.bsTemp;
}var count=bs.cardinality$();
if (count > 0) this.empty=0;
return count;
});

Clazz.newMeth(C$, 'addListener$org_jmol_api_JmolSelectionListener', function (listener) {
for (var i=this.listeners.length; --i >= 0; ) if (this.listeners[i] === listener ) {
this.listeners[i]=null;
break;
}
var len=this.listeners.length;
for (var i=len; --i >= 0; ) if (this.listeners[i] == null ) {
this.listeners[i]=listener;
return;
}
if (this.listeners.length == 0) this.listeners=Clazz.array($I$(1), [1]);
 else this.listeners=$I$(5).doubleLength$O(this.listeners);
this.listeners[len]=listener;
});

Clazz.newMeth(C$, 'selectionChanged$Z', function (isQuiet) {
if (this.hideNotSelected) this.hide$org_jmol_modelset_ModelSet$javajs_util_BS$I$Z(this.vwr.ms, $I$(3).copyInvert$javajs_util_BS$I(this.bsSelection, this.vwr.ms.ac), 0, isQuiet);
if (isQuiet || this.listeners.length == 0 ) return;
for (var i=this.listeners.length; --i >= 0; ) if (this.listeners[i] != null ) this.listeners[i].selectionChanged$javajs_util_BS(this.bsSelection);

}, p$1);

Clazz.newMeth(C$, 'deleteAtoms$javajs_util_BS', function (bs) {
var bsNew=$I$(3).copy$javajs_util_BS(bs);
if (this.bsDeleted == null ) {
this.bsDeleted=bsNew;
} else {
bsNew.andNot$javajs_util_BS(this.bsDeleted);
this.bsDeleted.or$javajs_util_BS(bs);
}this.bsHidden.andNot$javajs_util_BS(this.bsDeleted);
this.bsSelection.andNot$javajs_util_BS(this.bsDeleted);
return bsNew.cardinality$();
});

Clazz.newMeth(C$, 'getSelectedAtoms$', function () {
if (this.bsSubset == null ) return this.bsSelection;
var bs=$I$(3).copy$javajs_util_BS(this.bsSelection);
bs.and$javajs_util_BS(this.bsSubset);
return bs;
});

Clazz.newMeth(C$, 'getSelectedAtomsNoSubset$', function () {
return $I$(3).copy$javajs_util_BS(this.bsSelection);
});

Clazz.newMeth(C$, 'excludeAtoms$javajs_util_BS$Z', function (bs, ignoreSubset) {
if (this.bsDeleted != null ) bs.andNot$javajs_util_BS(this.bsDeleted);
if (!ignoreSubset && this.bsSubset != null  ) (bs=$I$(3).copy$javajs_util_BS(bs)).and$javajs_util_BS(this.bsSubset);
return bs;
});

Clazz.newMeth(C$, 'setMotionFixedAtoms$javajs_util_BS', function (bs) {
this.bsFixed.clearAll$();
if (bs != null ) this.bsFixed.or$javajs_util_BS(bs);
});

Clazz.newMeth(C$, 'getMotionFixedAtoms$', function () {
return this.bsFixed;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
