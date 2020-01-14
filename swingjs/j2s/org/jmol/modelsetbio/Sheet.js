(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),p$1={},I$=[[0,'org.jmol.c.STR','javajs.util.P3','javajs.util.V3','javajs.util.Measure']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Sheet", null, 'org.jmol.modelsetbio.ProteinStructure');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.widthUnitVector=null;
this.heightUnitVector=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_modelsetbio_AlphaPolymer$I$I$org_jmol_c_STR', function (apolymer, monomerIndex, monomerCount, subtype) {
Clazz.super_(C$, this,1);
this.setupPS$org_jmol_modelsetbio_AlphaPolymer$org_jmol_c_STR$I$I(apolymer, $I$(1).SHEET, monomerIndex, monomerCount);
this.subtype=subtype;
}, 1);

Clazz.newMeth(C$, 'calcAxis$', function () {
if (this.axisA != null ) return;
if (this.nRes == 2) {
this.axisA=this.apolymer.getLeadPoint$I(this.monomerIndexFirst);
this.axisB=this.apolymer.getLeadPoint$I(this.monomerIndexFirst + 1);
} else {
this.axisA=Clazz.new_($I$(2));
this.apolymer.getLeadMidPoint$I$javajs_util_P3(this.monomerIndexFirst + 1, this.axisA);
this.axisB=Clazz.new_($I$(2));
this.apolymer.getLeadMidPoint$I$javajs_util_P3(this.monomerIndexFirst + this.nRes - 1, this.axisB);
}this.axisUnitVector=Clazz.new_($I$(3));
this.axisUnitVector.sub2$javajs_util_T3$javajs_util_T3(this.axisB, this.axisA);
this.axisUnitVector.normalize$();
var tempA=Clazz.new_($I$(2));
this.apolymer.getLeadMidPoint$I$javajs_util_P3(this.monomerIndexFirst, tempA);
if (p$1.notHelixOrSheet$I.apply(this, [this.monomerIndexFirst - 1])) $I$(4).projectOntoAxis$javajs_util_P3$javajs_util_P3$javajs_util_V3$javajs_util_V3(tempA, this.axisA, this.axisUnitVector, this.vectorProjection);
var tempB=Clazz.new_($I$(2));
this.apolymer.getLeadMidPoint$I$javajs_util_P3(this.monomerIndexFirst + this.nRes, tempB);
if (p$1.notHelixOrSheet$I.apply(this, [this.monomerIndexFirst + this.nRes])) $I$(4).projectOntoAxis$javajs_util_P3$javajs_util_P3$javajs_util_V3$javajs_util_V3(tempB, this.axisA, this.axisUnitVector, this.vectorProjection);
this.axisA=tempA;
this.axisB=tempB;
});

Clazz.newMeth(C$, 'notHelixOrSheet$I', function (i) {
return (i < 0 || i >= this.apolymer.monomerCount  || !this.apolymer.monomers[i].isHelix$() && !this.apolymer.monomers[i].isSheet$()  );
}, p$1);

Clazz.newMeth(C$, 'calcSheetUnitVectors$', function () {
if (!(Clazz.instanceOf(this.apolymer, "org.jmol.modelsetbio.AminoPolymer"))) return;
if (this.widthUnitVector == null ) {
var vectorCO=Clazz.new_($I$(3));
var vectorCOSum=Clazz.new_($I$(3));
var amino=this.apolymer.monomers[this.monomerIndexFirst];
vectorCOSum.sub2$javajs_util_T3$javajs_util_T3(amino.getCarbonylOxygenAtom$(), amino.getCarbonylCarbonAtom$());
for (var i=this.nRes; --i > this.monomerIndexFirst; ) {
amino=this.apolymer.monomers[i];
vectorCO.sub2$javajs_util_T3$javajs_util_T3(amino.getCarbonylOxygenAtom$(), amino.getCarbonylCarbonAtom$());
if (vectorCOSum.angle$javajs_util_V3(vectorCO) < 1.5707964 ) vectorCOSum.add$javajs_util_T3(vectorCO);
 else vectorCOSum.sub$javajs_util_T3(vectorCO);
}
this.heightUnitVector=vectorCO;
this.heightUnitVector.cross$javajs_util_T3$javajs_util_T3(this.axisUnitVector, vectorCOSum);
this.heightUnitVector.normalize$();
this.widthUnitVector=vectorCOSum;
this.widthUnitVector.cross$javajs_util_T3$javajs_util_T3(this.axisUnitVector, this.heightUnitVector);
}});

Clazz.newMeth(C$, 'setBox$F$F$javajs_util_P3$javajs_util_V3$javajs_util_V3$javajs_util_P3$F', function (w, h, pt, vW, vH, ptC, scale) {
if (this.heightUnitVector == null ) this.calcSheetUnitVectors$();
vW.setT$javajs_util_T3(this.widthUnitVector);
vW.scale$F(scale * w);
vH.setT$javajs_util_T3(this.heightUnitVector);
vH.scale$F(scale * h);
ptC.ave$javajs_util_T3$javajs_util_T3(vW, vH);
ptC.sub2$javajs_util_T3$javajs_util_T3(pt, ptC);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
