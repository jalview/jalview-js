(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'org.jmol.util.ColorEncoder','org.jmol.c.PAL','javajs.util.AU','org.jmol.viewer.JC','org.jmol.util.Elements','org.jmol.util.C','org.jmol.util.Logger']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColorManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.colixRubberband=22;
},1);

C$.$fields$=[['Z',['isDefaultColorRasmol'],'H',['colixRubberband','colixBackgroundContrast'],'O',['ce','org.jmol.util.ColorEncoder','vwr','org.jmol.viewer.Viewer','g3d','org.jmol.util.GData','argbsCpk','int[]','+altArgbsCpk','colorData','float[]']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$org_jmol_util_GData', function (vwr, gdata) {
;C$.$init$.apply(this);
this.vwr=vwr;
this.ce=Clazz.new_($I$(1,1).c$$org_jmol_util_ColorEncoder$org_jmol_viewer_Viewer,[null, vwr]);
this.g3d=gdata;
this.argbsCpk=$I$(2).argbsCpk;
this.altArgbsCpk=$I$(3,"arrayCopyRangeI$IA$I$I",[$I$(4).altArgbsCpk, 0, -1]);
}, 1);

Clazz.newMeth(C$, 'setDefaultColors$Z', function (isRasmol) {
if (isRasmol) {
this.isDefaultColorRasmol=true;
this.argbsCpk=$I$(3,"arrayCopyI$IA$I",[$I$(1).getRasmolScale$(), -1]);
} else {
this.isDefaultColorRasmol=false;
this.argbsCpk=$I$(2).argbsCpk;
}this.altArgbsCpk=$I$(3,"arrayCopyRangeI$IA$I$I",[$I$(4).altArgbsCpk, 0, -1]);
this.ce.createColorScheme$S$Z$Z((isRasmol ? "Rasmol=" : "Jmol="), true, true);
for (var i=$I$(2).argbsCpk.length; --i >= 0; ) this.g3d.changeColixArgb$I$I(i, this.argbsCpk[i]);

for (var i=$I$(4).altArgbsCpk.length; --i >= 0; ) this.g3d.changeColixArgb$I$I($I$(5).elementNumberMax + i, this.altArgbsCpk[i]);

});

Clazz.newMeth(C$, 'setRubberbandArgb$I', function (argb) {
this.colixRubberband=(argb == 0 ? ($s$[0] = 0, $s$[0]) : $I$(6).getColix$I(argb));
});

Clazz.newMeth(C$, 'setColixBackgroundContrast$I', function (argb) {
this.colixBackgroundContrast=$I$(6).getBgContrast$I(argb);
});

Clazz.newMeth(C$, 'getColixBondPalette$org_jmol_modelset_Bond$I', function (bond, pid) {
var argb=0;
switch (pid) {
case 19:
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(bond.getEnergy$(), -2.5, -0.5, 7, false);
}
return (argb == 0 ? 10 : $I$(6).getColix$I(argb));
});

Clazz.newMeth(C$, 'getColixAtomPalette$org_jmol_modelset_Atom$B', function (atom, pid) {
var argb=0;
var index;
var id;
var modelSet=this.vwr.ms;
var modelIndex;
var lo;
var hi;
switch (pid) {
case 84:
return (this.colorData == null  || atom.i >= this.colorData.length  || Float.isNaN$F(this.colorData[atom.i])  ? 12 : this.ce.getColorIndex$F(this.colorData[atom.i]));
case 0:
case 1:
id=atom.getAtomicAndIsotopeNumber$();
if (id < $I$(5).elementNumberMax) return this.g3d.getChangeableColix$I$I(id, this.argbsCpk[id]);
var id0=id;
id=$I$(5).altElementIndexFromNumber$I(id);
if (id > 0) return this.g3d.getChangeableColix$I$I($I$(5).elementNumberMax + id, this.altArgbsCpk[id]);
id=$I$(5).getElementNumber$I(id0);
return this.g3d.getChangeableColix$I$I(id, this.argbsCpk[id]);
case 2:
index=$I$(1,"quantize4$F$F$F$I",[atom.getPartialCharge$(), -1, 1, $I$(4).PARTIAL_CHARGE_RANGE_SIZE]);
return this.g3d.getChangeableColix$I$I($I$(4).PARTIAL_CHARGE_COLIX_RED + index, $I$(4).argbsRwbScale[index]);
case 3:
index=atom.getFormalCharge$() - -4;
return this.g3d.getChangeableColix$I$I($I$(4).FORMAL_CHARGE_COLIX_RED + index, $I$(4).argbsFormalCharge[index]);
case 68:
case 5:
if (pid == 68) {
lo=this.vwr.ms.getBfactor100Lo$();
hi=this.vwr.ms.getBfactor100Hi$();
} else {
lo=0;
hi=10000;
}return this.ce.getColorIndexFromPalette$F$F$F$I$Z(atom.getBfactor100$(), lo, hi, 7, false);
case 86:
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(atom.group.getGroupParameter$I(1111490574), -1, 1, 7, false);
case 70:
hi=this.vwr.ms.getSurfaceDistanceMax$();
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(atom.getSurfaceDistance100$(), 0, hi, 7, false);
case 24:
id=atom.group.groupID;
if (id >= 42) id=24 + "PGCATU".indexOf$I(Character.toUpperCase$C(atom.group.group1)) - 1;
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(id, 0, 0, 17, false);
case 8:
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(atom.group.groupID, 0, 0, 5, false);
case 9:
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(atom.group.groupID, 0, 0, 4, false);
case 75:
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(atom.group.selectedIndex, 0, atom.group.chain.selectedGroupCount - 1, 1, false);
case 87:
var m=this.vwr.ms.am[atom.mi];
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(atom.group.getBioPolymerIndexInModel$(), 0, (m.isBioModel ? (m).getBioPolymerCount$() : 0) - 1, 1, false);
case 76:
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(atom.group.getSelectedMonomerIndex$(), 0, atom.group.getSelectedMonomerCount$() - 1, 1, false);
case 77:
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(modelSet.getMoleculeIndex$I$Z(atom.i, true), 0, modelSet.getMoleculeCountInModel$I(atom.mi) - 1, 0, false);
case 14:
modelIndex=atom.mi;
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(modelSet.getAltLocIndexInModel$I$C(modelIndex, atom.altloc), 0, modelSet.getAltLocCountInModel$I(modelIndex), 0, false);
case 15:
modelIndex=atom.mi;
return this.ce.getColorIndexFromPalette$F$F$F$I$Z(modelSet.getInsertionCodeIndexInModel$I$C(modelIndex, atom.group.getInsertionCode$()), 0, modelSet.getInsertionCountInModel$I(modelIndex), 0, false);
case 16:
id=atom.getAtomicAndIsotopeNumber$();
argb=p$1.getJmolOrRasmolArgb$I$I.apply(this, [id, 1073741991]);
break;
case 17:
id=atom.getAtomicAndIsotopeNumber$();
argb=p$1.getJmolOrRasmolArgb$I$I.apply(this, [id, 1073742116]);
break;
case 7:
argb=atom.group.getProteinStructureSubType$().getColor$();
break;
case 10:
var chain=atom.getChainID$();
if ($I$(1).argbsChainAtom == null ) {
$I$(1).argbsChainAtom=p$1.getArgbs$I.apply(this, [1140850689]);
$I$(1).argbsChainHetero=p$1.getArgbs$I.apply(this, [1612709894]);
}chain=((chain < 0 ? 0 : chain >= 256 ? chain - 256 : chain) & 31) % $I$(1).argbsChainAtom.length;
argb=(atom.isHetero$() ? $I$(1).argbsChainHetero : $I$(1).argbsChainAtom)[chain];
break;
}
return (argb == 0 ? 22 : $I$(6).getColix$I(argb));
});

Clazz.newMeth(C$, 'getArgbs$I', function (tok) {
return this.vwr.getJBR$().getArgbs$I(tok);
}, p$1);

Clazz.newMeth(C$, 'getJmolOrRasmolArgb$I$I', function (id, argb) {
switch (argb) {
case 1073741991:
if (id >= $I$(5).elementNumberMax) break;
return this.ce.getArgbFromPalette$F$F$F$I(id, 0, 0, 2);
case 1073742116:
if (id >= $I$(5).elementNumberMax) break;
return this.ce.getArgbFromPalette$F$F$F$I(id, 0, 0, 3);
default:
return argb;
}
return $I$(4).altArgbsCpk[$I$(5).altElementIndexFromNumber$I(id)];
}, p$1);

Clazz.newMeth(C$, 'setElementArgb$I$I', function (id, argb) {
if (argb == 1073741991 && this.argbsCpk === $I$(2).argbsCpk  ) return $s$[0] = 0, $s$[0];
argb=p$1.getJmolOrRasmolArgb$I$I.apply(this, [id, argb]);
if (this.argbsCpk === $I$(2).argbsCpk ) {
this.argbsCpk=$I$(3,"arrayCopyRangeI$IA$I$I",[$I$(2).argbsCpk, 0, -1]);
this.altArgbsCpk=$I$(3,"arrayCopyRangeI$IA$I$I",[$I$(4).altArgbsCpk, 0, -1]);
}if (id < $I$(5).elementNumberMax) {
if (argb == 2147483647) return $I$(6).getColix$I(this.argbsCpk[id]);
this.argbsCpk[id]=argb;
this.g3d.changeColixArgb$I$I(id, argb);
return $s$[0] = 0, $s$[0];
}id=$I$(5).altElementIndexFromNumber$I(id);
this.altArgbsCpk[id]=argb;
this.g3d.changeColixArgb$I$I($I$(5).elementNumberMax + id, argb);
return $s$[0] = 0, $s$[0];
});

Clazz.newMeth(C$, 'getPropertyColorRange$', function () {
return (this.ce.isReversed ? Clazz.array(Float.TYPE, -1, [this.ce.hi, this.ce.lo]) : Clazz.array(Float.TYPE, -1, [this.ce.lo, this.ce.hi]));
});

Clazz.newMeth(C$, 'setPropertyColorRangeData$FA$javajs_util_BS', function (data, bs) {
this.colorData=data;
this.ce.currentPalette=this.ce.createColorScheme$S$Z$Z(this.vwr.g.propertyColorScheme, true, false);
this.ce.hi=-3.4028235E38;
this.ce.lo=3.4028235E38;
if (data == null ) return;
var isAll=(bs == null );
var d;
var i0=(isAll ? data.length - 1 : bs.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bs.nextSetBit$I(i + 1))) {
if (Float.isNaN$F(d=data[i])) continue;
this.ce.hi=Math.max(this.ce.hi, d);
this.ce.lo=Math.min(this.ce.lo, d);
}
this.setPropertyColorRange$F$F(this.ce.lo, this.ce.hi);
});

Clazz.newMeth(C$, 'setPropertyColorRange$F$F', function (min, max) {
this.ce.setRange$F$F$Z(min, max, min > max );
if ($I$(7).debugging) $I$(7,"debug$S",["ColorManager: color \"" + this.ce.getCurrentColorSchemeName$() + "\" range " + new Float(min).toString() + " " + new Float(max).toString() ]);
});

Clazz.newMeth(C$, 'setPropertyColorScheme$S$Z$Z', function (colorScheme, isTranslucent, isOverloaded) {
var isReset=(colorScheme.length$() == 0);
if (isReset) colorScheme="=";
var range=this.getPropertyColorRange$();
this.ce.currentPalette=this.ce.createColorScheme$S$Z$Z(colorScheme, true, isOverloaded);
if (!isReset) this.setPropertyColorRange$F$F(range[0], range[1]);
this.ce.isTranslucent=isTranslucent;
});

Clazz.newMeth(C$, 'getColorSchemeList$S', function (colorScheme) {
var iPt=(colorScheme == null  || colorScheme.length$() == 0 ) ? this.ce.currentPalette : this.ce.createColorScheme$S$Z$Z(colorScheme, true, false);
return $I$(1,"getColorSchemeList$IA",[this.ce.getColorSchemeArray$I(iPt)]);
});

Clazz.newMeth(C$, 'getColorEncoder$S', function (colorScheme) {
if (colorScheme == null  || colorScheme.length$() == 0 ) return this.ce;
var c=Clazz.new_($I$(1,1).c$$org_jmol_util_ColorEncoder$org_jmol_viewer_Viewer,[this.ce, this.vwr]);
c.currentPalette=c.createColorScheme$S$Z$Z(colorScheme, false, true);
return (c.currentPalette == 2147483647 ? null : c);
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
