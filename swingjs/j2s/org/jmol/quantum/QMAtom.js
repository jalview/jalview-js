(function(){var P$=Clazz.newPackage("org.jmol.quantum"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QMAtom", null, 'javajs.util.P3');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index','znuc','iMolecule'],'O',['myX','float[]','+myY','+myZ','+myX2','+myY2','+myZ2','atom','org.jmol.modelset.Atom']]]

Clazz.newMeth(C$, 'c$$I$javajs_util_T3$org_jmol_modelset_Atom$FA$FA$FA$FA$FA$FA$F', function (i, xyzAng, atom, X, Y, Z, X2, Y2, Z2, unitFactor) {
Clazz.super_(C$, this);
this.index=i;
this.myX=X;
this.myY=Y;
this.myZ=Z;
this.myX2=X2;
this.myY2=Y2;
this.myZ2=Z2;
this.atom=atom;
this.setT$javajs_util_T3(xyzAng);
this.scale$F(unitFactor);
this.znuc=atom.getElementNumber$();
}, 1);

Clazz.newMeth(C$, 'setXYZ$org_jmol_quantum_QuantumCalculation$Z', function (qc, setMinMax) {
var i;
try {
if (setMinMax) {
if (qc.points != null ) {
qc.xMin=qc.yMin=qc.zMin=0;
qc.xMax=qc.yMax=qc.zMax=qc.points.length;
} else {
i=(Math.floor((this.x - qc.xBohr[0] - qc.rangeBohrOrAngstroms ) / qc.stepBohr[0])|0);
qc.xMin=(i < 0 ? 0 : i);
i=(Math.floor(1 + (this.x - qc.xBohr[0] + qc.rangeBohrOrAngstroms) / qc.stepBohr[0])|0);
qc.xMax=(i >= qc.nX ? qc.nX : i + 1);
i=(Math.floor((this.y - qc.yBohr[0] - qc.rangeBohrOrAngstroms ) / qc.stepBohr[1])|0);
qc.yMin=(i < 0 ? 0 : i);
i=(Math.floor(1 + (this.y - qc.yBohr[0] + qc.rangeBohrOrAngstroms) / qc.stepBohr[1])|0);
qc.yMax=(i >= qc.nY ? qc.nY : i + 1);
i=(Math.floor((this.z - qc.zBohr[0] - qc.rangeBohrOrAngstroms ) / qc.stepBohr[2])|0);
qc.zMin=(i < 0 ? 0 : i);
i=(Math.floor(1 + (this.z - qc.zBohr[0] + qc.rangeBohrOrAngstroms) / qc.stepBohr[2])|0);
qc.zMax=(i >= qc.nZ ? qc.nZ : i + 1);
}}for (i=qc.xMax; --i >= qc.xMin; ) {
this.myX2[i]=this.myX[i]=qc.xBohr[i] - this.x;
this.myX2[i] *= this.myX[i];
}
for (i=qc.yMax; --i >= qc.yMin; ) {
this.myY2[i]=this.myY[i]=qc.yBohr[i] - this.y;
this.myY2[i] *= this.myY[i];
}
for (i=qc.zMax; --i >= qc.zMin; ) {
this.myZ2[i]=this.myZ[i]=qc.zBohr[i] - this.z;
this.myZ2[i] *= this.myZ[i];
}
if (qc.points != null ) {
qc.yMax=qc.zMax=1;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(1).error$S("Error in QuantumCalculation setting bounds");
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:15 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
