(function(){var P$=Clazz.newPackage("org.jmol.shapebio"),p$1={},I$=[[0,'javajs.util.BS','org.jmol.shape.Mesh','org.jmol.c.STR','org.jmol.util.Logger','javajs.util.AU','org.jmol.c.PAL','org.jmol.util.C','org.jmol.util.BSUtil','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BioShape", null, 'org.jmol.shape.AtomShape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.modelIndex=0;
this.modelVisibilityFlags=0;
this.shape=null;
this.bioPolymer=null;
this.meshes=null;
this.meshReady=null;
this.colixesBack=null;
this.monomers=null;
this.wingVectors=null;
this.leadAtomIndices=null;
this.hasBfactorRange=false;
this.bfactorMin=0;
this.bfactorMax=0;
this.range=0;
this.floatRange=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.modelVisibilityFlags=0;
this.hasBfactorRange=false;
}, 1);

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bsSelected) {
this.setPropAS$S$O$javajs_util_BS(propertyName, value, bsSelected);
});

Clazz.newMeth(C$, 'c$$org_jmol_shapebio_BioShapeCollection$I$org_jmol_modelsetbio_BioPolymer', function (shape, modelIndex, bioPolymer) {
Clazz.super_(C$, this,1);
this.shape=shape;
this.modelIndex=modelIndex;
this.bioPolymer=bioPolymer;
this.isActive=shape.isActive;
this.bsSizeDefault=Clazz.new_($I$(1));
this.monomerCount=bioPolymer.monomerCount;
if (this.monomerCount > 0) {
this.colixes=Clazz.array(Short.TYPE, [this.monomerCount]);
this.paletteIDs=Clazz.array(Byte.TYPE, [this.monomerCount]);
this.mads=Clazz.array(Short.TYPE, [this.monomerCount + 1]);
this.monomers=bioPolymer.monomers;
this.meshReady=Clazz.array(Boolean.TYPE, [this.monomerCount]);
this.meshes=Clazz.array($I$(2), [this.monomerCount]);
this.wingVectors=bioPolymer.getWingVectors$();
this.leadAtomIndices=bioPolymer.getLeadAtomIndices$();
}}, 1);

Clazz.newMeth(C$, 'calcBfactorRange$', function () {
this.bfactorMin=this.bfactorMax=this.monomers[0].getLeadAtom$().getBfactor100$();
for (var i=this.monomerCount; --i > 0; ) {
var bfactor=this.monomers[i].getLeadAtom$().getBfactor100$();
if (bfactor < this.bfactorMin) this.bfactorMin=bfactor;
 else if (bfactor > this.bfactorMax) this.bfactorMax=bfactor;
}
this.range=this.bfactorMax - this.bfactorMin;
this.floatRange=this.range;
this.hasBfactorRange=true;
});

Clazz.newMeth(C$, 'calcMeanPositionalDisplacement$I', function (bFactor100) {
return ($s$[0] = (Math.sqrt(bFactor100 / 7895.6835208714865) * 1000), $s$[0]);
});

Clazz.newMeth(C$, 'findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$javajs_util_BS', function (xMouse, yMouse, closest, bsNot) {
this.bioPolymer.findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$HA$I$javajs_util_BS(xMouse, yMouse, closest, this.mads, this.shape.vf, bsNot);
});

Clazz.newMeth(C$, 'setMad$H$javajs_util_BS$FA', function (mad, bsSelected, values) {
if (this.monomerCount < 2) return;
this.isActive=true;
if (this.bsSizeSet == null ) this.bsSizeSet=Clazz.new_($I$(1));
var flag=this.shape.vf;
var setRingVis=(flag == 32768 && Clazz.instanceOf(this.bioPolymer, "org.jmol.modelsetbio.NucleicPolymer") );
for (var i=this.monomerCount; --i >= 0; ) {
var leadAtomIndex=this.leadAtomIndices[i];
if (bsSelected.get$I(leadAtomIndex)) {
if (values != null  && leadAtomIndex < values.length ) {
if (Float.isNaN$F(values[leadAtomIndex])) continue;
mad=($s$[0] = (values[leadAtomIndex] * 2000), $s$[0]);
}var isVisible=((this.mads[i]=p$1.getMad$I$H.apply(this, [i, mad])) > 0);
this.bsSizeSet.setBitTo$I$Z(i, isVisible);
this.monomers[i].setShapeVisibility$I$Z(flag, isVisible);
this.shape.atoms[leadAtomIndex].setShapeVisibility$I$Z(flag, isVisible);
if (setRingVis) (this.monomers[i]).setRingsVisible$Z(isVisible);
p$1.falsifyNearbyMesh$I.apply(this, [i]);
}}
if (this.monomerCount > 1) this.mads[this.monomerCount]=this.mads[this.monomerCount - 1];
});

Clazz.newMeth(C$, 'getMad$I$H', function (groupIndex, mad) {
this.bsSizeDefault.setBitTo$I$Z(groupIndex, mad == -1 || mad == -2 );
if (mad >= 0) return mad;
switch (mad) {
case -1:
case -2:
if (mad == -1 && this.shape.madOn >= 0 ) return this.shape.madOn;
switch (this.monomers[groupIndex].getProteinStructureType$()) {
case $I$(3).SHEET:
case $I$(3).HELIX:
return this.shape.madHelixSheet;
case $I$(3).DNA:
case $I$(3).RNA:
return this.shape.madDnaRna;
default:
return this.shape.madTurnRandom;
}
case -3:
{
if (!this.hasBfactorRange) this.calcBfactorRange$();
var atom=this.monomers[groupIndex].getLeadAtom$();
var bfactor100=atom.getBfactor100$();
var scaled=bfactor100 - this.bfactorMin;
if (this.range == 0) return 0;
var percentile=scaled / this.floatRange;
if (percentile < 0  || percentile > 1  ) $I$(4).error$S("Que ha ocurrido? " + new Float(percentile).toString());
return ($s$[0] = ((1750 * percentile) + 250), $s$[0]);
}case -4:
{
var atom=this.monomers[groupIndex].getLeadAtom$();
return ($s$[0] = (2 * this.calcMeanPositionalDisplacement$I(atom.getBfactor100$())), $s$[0]);
}}
$I$(4).error$S("unrecognized setMad(" + mad + ")" );
return $s$[0] = 0, $s$[0];
}, p$1);

Clazz.newMeth(C$, 'falsifyMesh$', function () {
if (this.meshReady == null ) return;
for (var i=0; i < this.monomerCount; i++) this.meshReady[i]=false;

});

Clazz.newMeth(C$, 'falsifyNearbyMesh$I', function (index) {
if (this.meshReady == null ) return;
this.meshReady[index]=false;
if (index > 0) this.meshReady[index - 1]=false;
if (index < this.monomerCount - 1) this.meshReady[index + 1]=false;
}, p$1);

Clazz.newMeth(C$, 'setColixBS$H$B$javajs_util_BS', function (colix, pid, bsSelected) {
this.isActive=true;
if (this.bsColixSet == null ) this.bsColixSet=$I$(1).newN$I(this.monomerCount);
for (var i=this.monomerCount; --i >= 0; ) {
var atomIndex=this.leadAtomIndices[i];
if (bsSelected.get$I(atomIndex)) {
this.colixes[i]=this.shape.getColixI$H$B$I(colix, (pid|0), atomIndex);
if (this.colixesBack != null  && this.colixesBack.length > i ) this.colixesBack[i]=0;
this.paletteIDs[i]=(pid|0);
this.bsColixSet.setBitTo$I$Z(i, this.colixes[i] != 0);
}}
});

Clazz.newMeth(C$, 'setColixBack$H$javajs_util_BS', function (colix, bsSelected) {
if (this.colixesBack == null ) this.colixesBack=Clazz.array(Short.TYPE, [this.colixes.length]);
if (this.colixesBack.length < this.colixes.length) this.colixesBack=$I$(5).ensureLengthShort$HA$I(this.colixesBack, this.colixes.length);
for (var i=this.monomerCount; --i >= 0; ) if (bsSelected.get$I(this.leadAtomIndices[i])) this.colixesBack[i]=colix;

});

Clazz.newMeth(C$, 'setColixes$HA$javajs_util_BS', function (atomColixes, bsSelected) {
this.isActive=true;
if (this.bsColixSet == null ) this.bsColixSet=$I$(1).newN$I(this.monomerCount);
for (var i=this.monomerCount; --i >= 0; ) {
var atomIndex=this.leadAtomIndices[i];
if (bsSelected.get$I(atomIndex) && i < this.colixes.length  && atomIndex < atomColixes.length ) {
this.colixes[i]=this.shape.getColixI$H$B$I(atomColixes[atomIndex], ($I$(6).UNKNOWN.id|0), atomIndex);
if (this.colixesBack != null  && i < this.colixesBack.length ) this.colixesBack[i]=0;
this.paletteIDs[i]=($I$(6).UNKNOWN.id|0);
this.bsColixSet.set$I(i);
}}
});

Clazz.newMeth(C$, 'setParams$OA$IA$javajs_util_BS', function (data, atomMap, bsSelected) {
if (this.monomerCount == 0) return;
var c=data[0];
var atrans=data[1];
this.isActive=true;
if (this.bsColixSet == null ) this.bsColixSet=$I$(1).newN$I(this.monomerCount);
var n=atomMap.length;
for (var i=this.monomerCount; --i >= 0; ) {
var atomIndex=this.leadAtomIndices[i];
if (bsSelected.get$I(atomIndex) && i < this.colixes.length  && atomIndex < n ) {
var pt=atomMap[atomIndex];
var colix=(c == null  ? 0 : c[pt]);
var f=(atrans == null  ? 0 : atrans[pt]);
if (f > 0.01 ) colix=$I$(7).getColixTranslucent3$H$Z$F(colix, true, f);
this.colixes[i]=this.shape.getColixI$H$B$I(colix, ($I$(6).UNKNOWN.id|0), atomIndex);
if (this.colixesBack != null  && i < this.colixesBack.length ) this.colixesBack[i]=(0|0);
this.paletteIDs[i]=($I$(6).UNKNOWN.id|0);
this.bsColixSet.set$I(i);
}}
});

Clazz.newMeth(C$, 'setTranslucent$Z$javajs_util_BS$F', function (isTranslucent, bsSelected, translucentLevel) {
this.isActive=true;
if (this.bsColixSet == null ) this.bsColixSet=$I$(1).newN$I(this.monomerCount);
for (var i=this.monomerCount; --i >= 0; ) if (bsSelected.get$I(this.leadAtomIndices[i])) {
this.colixes[i]=$I$(7).getColixTranslucent3$H$Z$F(this.colixes[i], isTranslucent, translucentLevel);
if (this.colixesBack != null  && this.colixesBack.length > i ) this.colixesBack[i]=$I$(7).getColixTranslucent3$H$Z$F(this.colixesBack[i], isTranslucent, translucentLevel);
this.bsColixSet.setBitTo$I$Z(i, this.colixes[i] != 0);
}
});

Clazz.newMeth(C$, 'setAtomClickability$', function () {
if (!this.isActive || this.wingVectors == null   || this.monomerCount == 0 ) return;
var setRingsClickable=(Clazz.instanceOf(this.bioPolymer, "org.jmol.modelsetbio.NucleicPolymer") && this.shape.shapeID == 11 );
var setAlphaClickable=(Clazz.instanceOf(this.bioPolymer, "org.jmol.modelsetbio.AlphaPolymer") || this.shape.shapeID != 15 );
var ms=this.monomers[0].chain.model.ms;
for (var i=this.monomerCount; --i >= 0; ) {
if (this.mads[i] <= 0) continue;
var iAtom=this.leadAtomIndices[i];
if (ms.isAtomHidden$I(iAtom)) continue;
if (setAlphaClickable) ms.at[iAtom].setClickable$I(1040384);
if (setRingsClickable) (this.monomers[i]).setRingsClickable$();
}
});

Clazz.newMeth(C$, 'getBioShapeState$S$Z$java_util_Map$java_util_Map', function (type, translucentAllowed, temp, temp2) {
if (this.monomerCount > 0) {
if (!this.isActive || this.bsSizeSet == null  && this.bsColixSet == null   ) return;
for (var i=0; i < this.monomerCount; i++) {
var atomIndex1=this.monomers[i].firstAtomIndex;
var atomIndex2=this.monomers[i].lastAtomIndex;
if (this.bsSizeSet != null  && (this.bsSizeSet.get$I(i) || this.bsColixSet != null  && this.bsColixSet.get$I(i)  ) ) {
if (this.bsSizeDefault.get$I(i)) {
$I$(8).setMapBitSet$java_util_Map$I$I$S(temp, atomIndex1, atomIndex2, type + (this.bsSizeSet.get$I(i) ? " on" : " off"));
} else {
$I$(8).setMapBitSet$java_util_Map$I$I$S(temp, atomIndex1, atomIndex2, type + " " + $I$(9).escF$F(this.mads[i] / 2000.0) );
}}if (this.bsColixSet == null  || !this.bsColixSet.get$I(i) ) continue;
var s=org.jmol.shape.Shape.getColorCommand$S$B$H$Z(type, ($b$[0] = this.paletteIDs[i], $b$[0]), this.colixes[i], translucentAllowed);
if (this.colixesBack != null  && this.colixesBack.length > i  && this.colixesBack[i] != 0 ) s += " " + $I$(7).getHexCode$H(this.colixesBack[i]);
$I$(8).setMapBitSet$java_util_Map$I$I$S(temp2, atomIndex1, atomIndex2, s);
}
}});

Clazz.newMeth(C$, 'getShapeState$', function () {
return null;
});
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
