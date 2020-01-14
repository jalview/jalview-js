(function(){var P$=Clazz.newPackage("org.jmol.quantum"),p$1={},I$=[[0,'org.jmol.util.Logger','org.jmol.util.Escape','org.jmol.quantum.QMAtom','javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "QuantumCalculation");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.doDebug=false;
this.bsExcluded=null;
this.integration=0;
this.voxelData=null;
this.voxelDataTemp=null;
this.countsXYZ=null;
this.points=null;
this.xMin=0;
this.xMax=0;
this.yMin=0;
this.yMax=0;
this.zMin=0;
this.zMax=0;
this.qmAtoms=null;
this.atomIndex=0;
this.thisAtom=null;
this.firstAtomOffset=0;
this.xBohr=null;
this.yBohr=null;
this.zBohr=null;
this.originBohr=null;
this.stepBohr=null;
this.nX=0;
this.nY=0;
this.nZ=0;
this.X=null;
this.Y=null;
this.Z=null;
this.X2=null;
this.Y2=null;
this.Z2=null;
this.rangeBohrOrAngstroms=0;
this.unitFactor=0;
this.volume=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.doDebug=false;
this.integration=NaN;
this.originBohr=Clazz.array(Float.TYPE, [3]);
this.stepBohr=Clazz.array(Float.TYPE, [3]);
this.rangeBohrOrAngstroms=10;
this.unitFactor=1.8897161;
this.volume=1;
}, 1);

Clazz.newMeth(C$, 'getIntegration$', function () {
return this.integration;
});

Clazz.newMeth(C$, 'initialize$I$I$I$javajs_util_T3A', function (nX, nY, nZ, points) {
this.initialize0$I$I$I$javajs_util_T3A(nX, nY, nZ, points);
});

Clazz.newMeth(C$, 'initialize0$I$I$I$javajs_util_T3A', function (nX, nY, nZ, points) {
if (points != null ) {
this.points=points;
nX=nY=nZ=points.length;
}this.nX=this.xMax=nX;
this.nY=this.yMax=nY;
this.nZ=this.zMax=nZ;
if (this.xBohr != null  && this.xBohr.length >= nX ) return;
this.xBohr=Clazz.array(Float.TYPE, [nX]);
this.yBohr=Clazz.array(Float.TYPE, [nY]);
this.zBohr=Clazz.array(Float.TYPE, [nZ]);
this.X=Clazz.array(Float.TYPE, [nX]);
this.Y=Clazz.array(Float.TYPE, [nY]);
this.Z=Clazz.array(Float.TYPE, [nZ]);
this.X2=Clazz.array(Float.TYPE, [nX]);
this.Y2=Clazz.array(Float.TYPE, [nY]);
this.Z2=Clazz.array(Float.TYPE, [nZ]);
});

Clazz.newMeth(C$, 'setupCoordinates$FA$FA$javajs_util_BS$javajs_util_T3A$org_jmol_modelset_AtomA$javajs_util_T3A$Z', function (originXYZ, stepsXYZ, bsSelected, xyz, atoms, points, renumber) {
if (atoms == null ) atoms=xyz;
if (points == null ) {
this.volume=1;
for (var i=3; --i >= 0; ) {
this.originBohr[i]=originXYZ[i] * this.unitFactor;
this.stepBohr[i]=stepsXYZ[i] * this.unitFactor;
this.volume *= this.stepBohr[i];
}
$I$(1).info$S("QuantumCalculation:\n origin = " + $I$(2).eAF$FA(originXYZ) + "\n steps = " + $I$(2).eAF$FA(stepsXYZ) + "\n origin(Bohr)= " + $I$(2).eAF$FA(this.originBohr) + "\n steps(Bohr)= " + $I$(2).eAF$FA(this.stepBohr) + "\n counts= " + this.nX + " " + this.nY + " " + this.nZ );
}this.qmAtoms=Clazz.array($I$(3), [renumber ? bsSelected.cardinality$() : xyz.length]);
var isAll=(bsSelected == null );
var i0=(isAll ? this.qmAtoms.length - 1 : bsSelected.nextSetBit$I(0));
for (var i=i0, j=0; i >= 0; i=(isAll ? i - 1 : bsSelected.nextSetBit$I(i + 1))) this.qmAtoms[renumber ? j++ : i]=Clazz.new_($I$(3).c$$I$javajs_util_T3$org_jmol_modelset_Atom$FA$FA$FA$FA$FA$FA$F,[i, xyz[i], atoms[i], this.X, this.Y, this.Z, this.X2, this.Y2, this.Z2, this.unitFactor]);

});

Clazz.newMeth(C$, 'processPt$javajs_util_T3', function (pt) {
this.doDebug=false;
if (this.points == null  || this.nX != 1 ) this.initializeOnePoint$();
this.points[0].setT$javajs_util_T3(pt);
this.voxelData[0][0][0]=this.voxelDataTemp[0][0][0]=0;
this.setXYZBohr$javajs_util_T3A(this.points);
this.processPoints$();
return this.voxelData[0][0][0];
});

Clazz.newMeth(C$, 'processPoints$', function () {
this.process$();
});

Clazz.newMeth(C$, 'initializeOnePoint$', function () {
this.initializeOnePointQC$();
});

Clazz.newMeth(C$, 'initializeOnePointQC$', function () {
this.points=Clazz.array($I$(4), [1]);
this.points[0]=Clazz.new_($I$(4));
if (this.voxelData == null  || this.voxelData === this.voxelDataTemp  ) {
this.voxelData=this.voxelDataTemp=Clazz.array(Float.TYPE, [1, 1, 1]);
} else {
this.voxelData=Clazz.array(Float.TYPE, [1, 1, 1]);
this.voxelDataTemp=Clazz.array(Float.TYPE, [1, 1, 1]);
}this.xMin=this.yMin=this.zMin=0;
this.initialize$I$I$I$javajs_util_T3A(1, 1, 1, this.points);
});

Clazz.newMeth(C$, 'setXYZBohr$javajs_util_T3A', function (points) {
p$1.setXYZBohrI$FA$I$I$javajs_util_T3A.apply(this, [this.xBohr, 0, this.nX, points]);
p$1.setXYZBohrI$FA$I$I$javajs_util_T3A.apply(this, [this.yBohr, 1, this.nY, points]);
p$1.setXYZBohrI$FA$I$I$javajs_util_T3A.apply(this, [this.zBohr, 2, this.nZ, points]);
});

Clazz.newMeth(C$, 'setXYZBohrI$FA$I$I$javajs_util_T3A', function (bohr, i, n, points) {
if (points != null ) {
var x=0;
for (var j=0; j < n; j++) {
switch (i) {
case 0:
x=points[j].x;
break;
case 1:
x=points[j].y;
break;
case 2:
x=points[j].z;
break;
}
bohr[j]=x * this.unitFactor;
}
return;
}bohr[0]=this.originBohr[i];
var inc=this.stepBohr[i];
for (var j=0; ++j < n; ) bohr[j]=bohr[j - 1] + inc;

}, p$1);

Clazz.newMeth(C$, 'setMinMax$I', function (ix) {
this.yMax=this.zMax=(ix < 0 ? this.xMax : ix + 1);
this.yMin=this.zMin=(ix < 0 ? 0 : ix);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
