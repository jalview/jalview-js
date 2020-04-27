(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={},I$=[[0,'javajs.util.BS','javajs.util.V3','javajs.util.P3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Trajectory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isFractional=true;
},1);

C$.$fields$=[['Z',['isFractional'],'O',['vwr','org.jmol.viewer.Viewer','ms','org.jmol.modelset.ModelSet','steps','javajs.util.Lst']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_Viewer$org_jmol_modelset_ModelSet$javajs_util_Lst', function (vwr, ms, steps) {
this.vwr=vwr;
this.ms=ms;
this.steps=steps;
return this;
});

Clazz.newMeth(C$, 'setUnitCell$I', function (imodel) {
var c=this.ms.getUnitCell$I(imodel);
if (c != null  && c.getCoordinatesAreFractional$()  && c.isSupercell$() ) {
var list=this.ms.trajectory.steps.get$I(imodel);
for (var i=list.length; --i >= 0; ) if (list[i] != null ) c.toSupercell$javajs_util_P3(list[i]);

}});

Clazz.newMeth(C$, 'setModel$I', function (modelIndex) {
var am=this.ms.am;
var baseModelIndex=am[modelIndex].trajectoryBaseIndex;
am[baseModelIndex].selectedTrajectory=modelIndex;
this.isFractional=!this.ms.getMSInfoB$S("ignoreUnitCell");
p$1.setAtomPositions$I$I$javajs_util_P3A$javajs_util_P3A$F$javajs_util_V3A$Z.apply(this, [baseModelIndex, modelIndex, this.steps.get$I(modelIndex), null, 0, (this.ms.vibrationSteps == null  ? null : this.ms.vibrationSteps.get$I(modelIndex)), this.isFractional]);
var currentModelIndex=this.vwr.am.cmi;
if (currentModelIndex >= 0 && currentModelIndex != modelIndex  && am[currentModelIndex].fileIndex == am[modelIndex].fileIndex ) this.vwr.setCurrentModelIndexClear$I$Z(modelIndex, false);
});

Clazz.newMeth(C$, 'setAtomPositions$I$I$javajs_util_P3A$javajs_util_P3A$F$javajs_util_V3A$Z', function (baseModelIndex, modelIndex, t1, t2, f, vibs, isFractional) {
var bs=Clazz.new_($I$(1,1));
var vib=Clazz.new_($I$(2,1));
var am=this.ms.am;
var at=this.ms.at;
var iFirst=am[baseModelIndex].firstAtomIndex;
var iMax=iFirst + this.ms.getAtomCountInModel$I(baseModelIndex);
if (f == 0 ) {
for (var pt=0, i=iFirst; i < iMax && pt < t1.length ; i++, pt++) {
at[i].mi=($s$[0] = modelIndex, $s$[0]);
if (t1[pt] == null ) continue;
if (isFractional) at[i].setFractionalCoordTo$javajs_util_P3$Z(t1[pt], true);
 else at[i].setT$javajs_util_T3(t1[pt]);
if (this.ms.vibrationSteps != null ) {
if (vibs != null  && vibs[pt] != null  ) vib=vibs[pt];
this.ms.setVibrationVector$I$javajs_util_T3(i, vib);
}bs.set$I(i);
}
} else {
var p=Clazz.new_($I$(3,1));
var n=Math.min(t1.length, t2.length);
for (var pt=0, i=iFirst; i < iMax && pt < n ; i++, pt++) {
at[i].mi=($s$[0] = modelIndex, $s$[0]);
if (t1[pt] == null  || t2[pt] == null  ) continue;
p.sub2$javajs_util_T3$javajs_util_T3(t2[pt], t1[pt]);
p.scaleAdd2$F$javajs_util_T3$javajs_util_T3(f, p, t1[pt]);
if (isFractional) at[i].setFractionalCoordTo$javajs_util_P3$Z(p, true);
 else at[i].setT$javajs_util_T3(p);
bs.set$I(i);
}
}this.ms.initializeBspf$();
this.ms.validateBspfForModel$I$Z(baseModelIndex, false);
this.ms.recalculateLeadMidpointsAndWingVectors$I(baseModelIndex);
this.ms.sm.notifyAtomPositionsChanged$I$javajs_util_BS$javajs_util_M4(baseModelIndex, bs, null);
if (am[baseModelIndex].hasRasmolHBonds) (am[baseModelIndex]).resetRasmolBonds$javajs_util_BS$I(bs, 2);
}, p$1);

Clazz.newMeth(C$, 'getModelsSelected$', function () {
var bsModels=Clazz.new_($I$(1,1));
for (var i=this.ms.mc; --i >= 0; ) {
var t=this.ms.am[i].selectedTrajectory;
if (t >= 0) {
bsModels.set$I(t);
i=this.ms.am[i].trajectoryBaseIndex;
}}
return bsModels;
});

Clazz.newMeth(C$, 'morph$I$I$F', function (m1, m2, f) {
if (f == 0 ) {
this.ms.setTrajectory$I(m1);
return;
}if (f == 1 ) {
this.ms.setTrajectory$I(m2);
return;
}var baseModelIndex=this.ms.am[m1].trajectoryBaseIndex;
this.ms.am[baseModelIndex].selectedTrajectory=m1;
p$1.setAtomPositions$I$I$javajs_util_P3A$javajs_util_P3A$F$javajs_util_V3A$Z.apply(this, [baseModelIndex, m1, this.steps.get$I(m1), this.steps.get$I(m2), f, (this.ms.vibrationSteps == null  ? null : this.ms.vibrationSteps.get$I(m1)), true]);
var m=this.vwr.am.cmi;
if (m >= 0 && m != m1  && this.ms.am[m].fileIndex == this.ms.am[m1].fileIndex ) this.vwr.setCurrentModelIndexClear$I$Z(m1, false);
});

Clazz.newMeth(C$, 'fixAtom$org_jmol_modelset_Atom', function (a) {
var m=a.mi;
var isFrac=(this.ms.unitCells != null  && this.ms.unitCells[m].getCoordinatesAreFractional$() );
var pt=this.steps.get$I(m)[a.i - this.ms.am[m].firstAtomIndex];
pt.set$F$F$F(a.x, a.y, a.z);
if (isFrac) this.ms.unitCells[m].toFractional$javajs_util_T3$Z(pt, true);
});

Clazz.newMeth(C$, 'getFractional$org_jmol_modelset_Atom$javajs_util_P3', function (a, ptTemp) {
a.setFractionalCoordPt$javajs_util_P3$javajs_util_P3$Z(ptTemp, this.steps.get$I(a.mi)[a.i - this.ms.am[a.mi].firstAtomIndex], true);
});

Clazz.newMeth(C$, 'getState$', function () {
var s="";
for (var i=this.ms.mc; --i >= 0; ) {
var t=this.ms.am[i].selectedTrajectory;
if (t >= 0) {
s=" or " + this.ms.getModelNumberDotted$I(t) + s ;
i=this.ms.am[i].trajectoryBaseIndex;
}}
return (s.length$() > 0 ? s="set trajectory {" + s.substring$I(4) + "}"  : "");
});

Clazz.newMeth(C$, 'hasMeasure$IA', function (measure) {
if (measure != null ) {
var atomIndex;
for (var i=1, count=measure[0]; i <= count; i++) if ((atomIndex=measure[i]) >= 0 && this.ms.am[this.ms.at[atomIndex].mi].isTrajectory ) return true;

}return false;
});

Clazz.newMeth(C$, 'selectDisplayed$javajs_util_BS', function (bs) {
for (var i=this.ms.mc; --i >= 0; ) {
if (this.ms.am[i].isTrajectory && this.ms.at[this.ms.am[i].firstAtomIndex].mi != i ) bs.clear$I(i);
}
});

Clazz.newMeth(C$, 'getModelBS$I$javajs_util_BS', function (modelIndex, bs) {
var iBase=this.ms.am[modelIndex].trajectoryBaseIndex;
for (var i=this.ms.mc; --i >= iBase; ) if (this.ms.am[i].trajectoryBaseIndex == iBase) bs.set$I(i);

});

Clazz.newMeth(C$, 'setBaseModels$javajs_util_BS', function (bsModels) {
for (var i=this.ms.mc; --i >= 0; ) if (bsModels.get$I(i) && this.ms.am[i].isTrajectory ) bsModels.set$I(this.ms.am[i].trajectoryBaseIndex);

});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:13 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
