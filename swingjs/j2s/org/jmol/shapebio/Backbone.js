(function(){var P$=Clazz.newPackage("org.jmol.shapebio"),I$=[[0,'javajs.util.BS']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Backbone", null, 'org.jmol.shapebio.BioShapeCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['bsSelected','javajs.util.BS']]]

Clazz.newMeth(C$, 'initShape$', function () {
this.madOn=($s$[0] = 1, $s$[0]);
this.madHelixSheet=($s$[0] = 1500, $s$[0]);
this.madTurnRandom=($s$[0] = 500, $s$[0]);
this.madDnaRna=($s$[0] = 2000, $s$[0]);
this.isActive=true;
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bsSelected) {
if ("bitset" === propertyName ) {
this.bsSelected=value;
return;
}this.setPropBSC$S$O$javajs_util_BS(propertyName, value, bsSelected);
});

Clazz.newMeth(C$, 'setShapeSizeRD$I$org_jmol_atomdata_RadiusData$javajs_util_BS', function (size, rd, bsSelected) {
var mad=($s$[0] = size, $s$[0]);
this.initialize$();
var useThisBsSelected=(this.bsSelected != null );
if (useThisBsSelected) bsSelected=this.bsSelected;
for (var iShape=this.bioShapes.length; --iShape >= 0; ) {
var bioShape=this.bioShapes[iShape];
if (bioShape.monomerCount == 0) continue;
var bondSelectionModeOr=this.vwr.getBoolean$I(603979812);
var atomIndices=bioShape.bioPolymer.getLeadAtomIndices$();
var isVisible=(mad != 0);
if (bioShape.bsSizeSet == null ) bioShape.bsSizeSet=Clazz.new_($I$(1,1));
bioShape.isActive=true;
var n=bioShape.monomerCount;
for (var i=n - (bioShape.bioPolymer.isCyclic$() ? 0 : 1); --i >= 0; ) {
var index1=atomIndices[i];
var index2=atomIndices[(i + 1) % n];
var isAtom1=bsSelected.get$I(index1);
var isAtom2=bsSelected.get$I(index2);
if (isAtom1 && isAtom2  || useThisBsSelected && isAtom1   || bondSelectionModeOr && (isAtom1 || isAtom2 )  ) {
bioShape.monomers[i].setShapeVisibility$I$Z(this.vf, isVisible);
var atomA=this.ms.at[index1];
if (rd != null ) {
if (Float.isNaN$F(rd.values[index1]) || Float.isNaN$F(rd.values[index2]) ) continue;
mad=($s$[0] = ((rd.values[index1] + rd.values[index2]) * 1000), $s$[0]);
isVisible=(mad != 0);
}var atomB=this.ms.at[index2];
var wasVisible=(bioShape.mads[i] != 0);
if (wasVisible != isVisible ) {
this.addDisplayedBackbone$org_jmol_modelset_Atom$Z(atomA, isVisible);
this.addDisplayedBackbone$org_jmol_modelset_Atom$Z(atomB, isVisible);
}bioShape.mads[i]=mad;
bioShape.bsSizeSet.setBitTo$I$Z(i, isVisible);
bioShape.bsSizeDefault.setBitTo$I$Z(i, mad == -1);
}}
}
if (useThisBsSelected) this.bsSelected=null;
});

Clazz.newMeth(C$, 'addDisplayedBackbone$org_jmol_modelset_Atom$Z', function (a, isVisible) {
a.nBackbonesDisplayed+=(isVisible ? 1 : -1);
a.setShapeVisibility$I$Z(this.vf, isVisible);
});

Clazz.newMeth(C$, 'setAtomClickability$', function () {
if (this.bioShapes == null ) return;
for (var iShape=this.bioShapes.length; --iShape >= 0; ) {
var bioShape=this.bioShapes[iShape];
var atomIndices=bioShape.bioPolymer.getLeadAtomIndices$();
for (var i=bioShape.monomerCount; --i >= 0; ) {
var atom=this.ms.at[atomIndices[i]];
if (atom.nBackbonesDisplayed > 0 && !this.ms.isAtomHidden$I(atom.i) ) atom.setClickable$I(this.vf);
}
}
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
