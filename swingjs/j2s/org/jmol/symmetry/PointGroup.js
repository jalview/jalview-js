(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},I$=[[0,'org.jmol.util.Logger','org.jmol.symmetry.PointGroup','javajs.util.Quat',['org.jmol.symmetry.PointGroup','.Operation'],'javajs.util.V3','org.jmol.util.BSUtil','javajs.util.P3','org.jmol.bspt.Bspt','org.jmol.util.Point3fi','java.util.Hashtable','javajs.util.SB','org.jmol.util.Escape','javajs.util.Lst','javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PointGroup", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Operation',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.drawType="";
this.scale=NaN;
this.nAxes=Clazz.array(Integer.TYPE, [C$.maxAxis]);
this.axes=Clazz.array($I$(4), [C$.maxAxis, null]);
this.distanceTolerance=0.25;
this.linearTolerance=8.0;
this.cosTolerance=0.99;
this.name="C_1?";
this.vTemp=Clazz.new_($I$(5,1));
this.centerAtomIndex=-1;
this.maxElement=0;
this.nOps=0;
},1);

C$.$fields$=[['Z',['isAtoms','haveInversionCenter','haveVibration','localEnvOnly'],'F',['scale','radius','distanceTolerance','distanceTolerance2','linearTolerance','cosTolerance'],'I',['drawIndex','nAtoms','centerAtomIndex','maxElement','nOps'],'S',['drawInfo','textInfo','drawType','name'],'O',['info','java.util.Map','iter','org.jmol.bspt.CubeIterator','nAxes','int[]','axes','org.jmol.symmetry.PointGroup.Operation[][]','principalAxis','org.jmol.symmetry.PointGroup.Operation','+principalPlane','vTemp','javajs.util.V3','center','javajs.util.T3','points','javajs.util.T3[]','elements','int[]','+atomMap','bsAtoms','javajs.util.BS','eCounts','int[]']]
,['I',['maxAxis'],'O',['axesMaxN','int[]','+nUnique','typeNames','String[]']]]

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getPointGroup$org_jmol_symmetry_PointGroup$javajs_util_T3$javajs_util_T3A$javajs_util_BS$Z$F$F$Z', function (pgLast, center, atomset, bsAtoms, haveVibration, distanceTolerance, linearTolerance, localEnvOnly) {
var pg=Clazz.new_(C$);
if (distanceTolerance == 0 ) {
distanceTolerance=0.01;
linearTolerance=0.5;
}pg.distanceTolerance=distanceTolerance;
pg.distanceTolerance2=distanceTolerance * distanceTolerance;
pg.linearTolerance=linearTolerance;
pg.isAtoms=(bsAtoms != null );
pg.bsAtoms=(pg.isAtoms ? bsAtoms : $I$(6).newBitSet2$I$I(0, atomset.length));
pg.haveVibration=haveVibration;
pg.center=center;
pg.localEnvOnly=localEnvOnly;
return (p$1.set$org_jmol_symmetry_PointGroup$javajs_util_T3A.apply(pg, [pgLast, atomset]) ? pg : pgLast);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isEqual$org_jmol_symmetry_PointGroup', function (pg) {
if (pg == null ) return false;
if (this.linearTolerance != pg.linearTolerance  || this.distanceTolerance != pg.distanceTolerance   || this.nAtoms != pg.nAtoms  || this.localEnvOnly != pg.localEnvOnly   || this.haveVibration != pg.haveVibration   || this.bsAtoms == null   ? pg.bsAtoms != null  : !this.bsAtoms.equals$O(pg.bsAtoms)) return false;
for (var i=0; i < this.nAtoms; i++) {
if (this.elements[i] != pg.elements[i] || !this.points[i].equals$O(pg.points[i]) ) return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'set$org_jmol_symmetry_PointGroup$javajs_util_T3A', function (pgLast, atomset) {
this.cosTolerance=(Math.cos(this.linearTolerance / 180 * 3.141592653589793));
if (!p$1.getPointsAndElements$javajs_util_T3A.apply(this, [atomset])) {
$I$(1).error$S("Too many atoms for point group calculation");
this.name="point group not determined -- ac > 100 -- select fewer atoms and try again.";
return true;
}p$1.getElementCounts.apply(this, []);
if (this.haveVibration) {
var atomVibs=Clazz.array($I$(7), [this.points.length]);
for (var i=this.points.length; --i >= 0; ) {
atomVibs[i]=$I$(7).newP$javajs_util_T3(this.points[i]);
var v=(this.points[i]).getVibrationVector$();
if (v != null ) atomVibs[i].add$javajs_util_T3(v);
}
this.points=atomVibs;
}if (p$1.isEqual$org_jmol_symmetry_PointGroup.apply(this, [pgLast])) return false;
p$1.findInversionCenter.apply(this, []);
if (p$1.isLinear$javajs_util_T3A.apply(this, [this.points])) {
if (this.haveInversionCenter) {
this.name="D(infinity)h";
} else {
this.name="C(infinity)v";
}this.vTemp.sub2$javajs_util_T3$javajs_util_T3(this.points[1], this.points[0]);
p$1.addAxis$I$javajs_util_V3.apply(this, [16, this.vTemp]);
this.principalAxis=this.axes[16][0];
if (this.haveInversionCenter) {
this.axes[0]=Clazz.array($I$(4), [1]);
this.principalPlane=this.axes[0][this.nAxes[0]++]=Clazz.new_($I$(4,1).c$$javajs_util_V3,[this, null, this.vTemp]);
}return true;
}this.axes[0]=Clazz.array($I$(4), [15]);
var nPlanes=0;
p$1.findCAxes.apply(this, []);
nPlanes=p$1.findPlanes.apply(this, []);
p$1.findAdditionalAxes$I.apply(this, [nPlanes]);
try {
var n=p$1.getHighestOrder.apply(this, []);
if (this.nAxes[17] > 1) {
if (this.nAxes[19] > 1) {
if (this.haveInversionCenter) {
this.name="Ih";
} else {
this.name="I";
}} else if (this.nAxes[18] > 1) {
if (this.haveInversionCenter) {
this.name="Oh";
} else {
this.name="O";
}} else {
if (nPlanes > 0) {
if (this.haveInversionCenter) {
this.name="Th";
} else {
this.name="Td";
}} else {
this.name="T";
}}} else {
if (n < 2) {
if (nPlanes == 1) {
this.name="Cs";
return true;
}if (this.haveInversionCenter) {
this.name="Ci";
return true;
}this.name="C1";
} else if ((n % 2) == 1 && this.nAxes[16] > 0  || (n % 2) == 0 && this.nAxes[16] > 1  ) {
this.principalAxis=p$1.setPrincipalAxis$I$I.apply(this, [n, nPlanes]);
if (nPlanes == 0) {
if (n < 14) {
this.name="S" + n;
} else {
this.name="D" + (n - 14);
}} else {
if (n < 14) n=(n/2|0);
 else n-=14;
if (nPlanes == n) {
this.name="D" + n + "d" ;
} else {
this.name="D" + n + "h" ;
}}} else if (nPlanes == 0) {
this.principalAxis=this.axes[n][0];
if (n < 14) {
this.name="S" + n;
} else {
this.name="C" + (n - 14);
}} else if (nPlanes == n - 14) {
this.principalAxis=this.axes[n][0];
this.name="C" + nPlanes + "v" ;
} else {
this.principalAxis=this.axes[n < 14 ? n + 14 : n][0];
this.principalPlane=this.axes[0][0];
if (n < 14) n=(n/(2)|0);
 else n-=14;
this.name="C" + n + "h" ;
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.name="??";
} else {
throw e;
}
}
$I$(1).info$S("Point group found: " + this.name);
return true;
}, p$1);

Clazz.newMeth(C$, 'setPrincipalAxis$I$I', function (n, nPlanes) {
var principalPlane=p$1.setPrincipalPlane$I$I.apply(this, [n, nPlanes]);
if (nPlanes == 0 && n < 14  || this.nAxes[n] == 1 ) {
if (nPlanes > 0 && n < 14 ) n=14 + (n/2|0);
return this.axes[n][0];
}if (principalPlane == null ) return null;
for (var i=0; i < this.nAxes[16]; i++) if (p$1.isParallel$javajs_util_V3$javajs_util_V3.apply(this, [principalPlane.normalOrAxis, this.axes[16][i].normalOrAxis])) {
if (i != 0) {
var o=this.axes[16][0];
this.axes[16][0]=this.axes[16][i];
this.axes[16][i]=o;
}return this.axes[16][0];
}
return null;
}, p$1);

Clazz.newMeth(C$, 'setPrincipalPlane$I$I', function (n, nPlanes) {
if (nPlanes == 1) return this.principalPlane=this.axes[0][0];
if (nPlanes == 0 || nPlanes == n - 14 ) return null;
for (var i=0; i < nPlanes; i++) for (var j=0, nPerp=0; j < nPlanes; j++) if (p$1.isPerpendicular$javajs_util_V3$javajs_util_V3.apply(this, [this.axes[0][i].normalOrAxis, this.axes[0][j].normalOrAxis]) && ++nPerp > 2 ) {
if (i != 0) {
var o=this.axes[0][0];
this.axes[0][0]=this.axes[0][i];
this.axes[0][i]=o;
}return this.principalPlane=this.axes[0][0];
}

return null;
}, p$1);

Clazz.newMeth(C$, 'getPointsAndElements$javajs_util_T3A', function (atomset) {
var ac=this.bsAtoms.cardinality$();
if (this.isAtoms && ac > 100 ) return false;
this.points=Clazz.array($I$(7), [ac]);
this.elements=Clazz.array(Integer.TYPE, [ac]);
if (ac == 0) return true;
var atomIndexMax=0;
for (var i=this.bsAtoms.nextSetBit$I(0); i >= 0; i=this.bsAtoms.nextSetBit$I(i + 1)) {
var p=atomset[i];
if (Clazz.instanceOf(p, "org.jmol.util.Node")) atomIndexMax=Math.max(atomIndexMax, (p).i);
}
this.atomMap=Clazz.array(Integer.TYPE, [atomIndexMax + 1]);
this.nAtoms=0;
var needCenter=(this.center == null );
if (needCenter) this.center=Clazz.new_($I$(7,1));
var bspt=Clazz.new_($I$(8,1).c$$I$I,[3, 0]);
for (var i=this.bsAtoms.nextSetBit$I(0); i >= 0; i=this.bsAtoms.nextSetBit$I(i + 1), this.nAtoms++) {
var p=this.points[this.nAtoms]=atomset[i];
if (Clazz.instanceOf(p, "org.jmol.util.Node")) {
var bondIndex=(this.localEnvOnly ? 1 : 1 + Math.max(3, (p).getCovalentBondCount$()));
this.elements[this.nAtoms]=(p).getElementNumber$() * bondIndex;
this.atomMap[(p).i]=this.nAtoms + 1;
} else if (Clazz.instanceOf(p, "org.jmol.util.Point3fi")) {
this.elements[this.nAtoms]=Math.max(0, (p).sD);
} else {
var newPt=Clazz.new_($I$(9,1));
newPt.setT$javajs_util_T3(p);
newPt.i=this.nAtoms;
p=newPt;
}bspt.addTuple$javajs_util_T3(p);
if (needCenter) this.center.add$javajs_util_T3(this.points[this.nAtoms]);
}
this.iter=bspt.allocateCubeIterator$();
if (needCenter) this.center.scale$F(1.0 / this.nAtoms);
for (var i=this.nAtoms; --i >= 0; ) {
var r2=this.center.distanceSquared$javajs_util_T3(this.points[i]);
if (this.isAtoms && r2 < this.distanceTolerance2  ) this.centerAtomIndex=i;
this.radius=Math.max(this.radius, r2);
}
this.radius=Math.sqrt(this.radius);
if (this.radius < 1.5  && this.distanceTolerance > 0.15  ) {
this.distanceTolerance=this.radius / 10;
this.distanceTolerance2=this.distanceTolerance * this.distanceTolerance;
System.out.println$S("PointGroup calculation adjusting distanceTolerance to " + new Float(this.distanceTolerance).toString());
}return true;
}, p$1);

Clazz.newMeth(C$, 'findInversionCenter', function () {
this.haveInversionCenter=p$1.checkOperation$javajs_util_Quat$javajs_util_T3$I.apply(this, [null, this.center, -1]);
if (this.haveInversionCenter) {
this.axes[1]=Clazz.array($I$(4), [1]);
this.axes[1][0]=Clazz.new_($I$(4,1),[this, null]);
}}, p$1);

Clazz.newMeth(C$, 'checkOperation$javajs_util_Quat$javajs_util_T3$I', function (q, center, iOrder) {
var pt=Clazz.new_($I$(7,1));
var nFound=0;
var isInversion=(iOrder < 14);
 out : for (var i=this.points.length; --i >= 0 && nFound < this.points.length ; ) {
if (i == this.centerAtomIndex) continue;
var a1=this.points[i];
var e1=this.elements[i];
if (q != null ) {
pt.sub2$javajs_util_T3$javajs_util_T3(a1, center);
q.transform2$javajs_util_T3$javajs_util_T3(pt, pt).add$javajs_util_T3(center);
} else {
pt.setT$javajs_util_T3(a1);
}if (isInversion) {
this.vTemp.sub2$javajs_util_T3$javajs_util_T3(center, pt);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(2, this.vTemp, pt);
}if ((q != null  || isInversion ) && pt.distanceSquared$javajs_util_T3(a1) < this.distanceTolerance2  ) {
nFound++;
continue;
}this.iter.initialize$javajs_util_T3$F$Z(pt, this.distanceTolerance, false);
while (this.iter.hasMoreElements$()){
var a2=this.iter.nextElement$();
if (a2 === a1 ) continue;
var j=p$1.getPointIndex$I.apply(this, [(a2).i]);
if (this.centerAtomIndex >= 0 && j == this.centerAtomIndex  || this.elements[j] != e1 ) continue;
if (pt.distanceSquared$javajs_util_T3(a2) < this.distanceTolerance2 ) {
nFound++;
continue out;
}}
return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'getPointIndex$I', function (j) {
return j < this.atomMap.length && this.atomMap[j] > 0  ? this.atomMap[j] - 1 : j;
}, p$1);

Clazz.newMeth(C$, 'isLinear$javajs_util_T3A', function (atoms) {
var v1=null;
if (atoms.length < 2) return false;
for (var i=atoms.length; --i >= 0; ) {
if (i == this.centerAtomIndex) continue;
if (v1 == null ) {
v1=Clazz.new_($I$(5,1));
v1.sub2$javajs_util_T3$javajs_util_T3(atoms[i], this.center);
v1.normalize$();
this.vTemp.setT$javajs_util_T3(v1);
continue;
}this.vTemp.sub2$javajs_util_T3$javajs_util_T3(atoms[i], this.center);
this.vTemp.normalize$();
if (!p$1.isParallel$javajs_util_V3$javajs_util_V3.apply(this, [v1, this.vTemp])) return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'isParallel$javajs_util_V3$javajs_util_V3', function (v1, v2) {
return (Math.abs(v1.dot$javajs_util_T3(v2)) >= this.cosTolerance );
}, p$1);

Clazz.newMeth(C$, 'isPerpendicular$javajs_util_V3$javajs_util_V3', function (v1, v2) {
return (Math.abs(v1.dot$javajs_util_T3(v2)) <= 1 - this.cosTolerance );
}, p$1);

Clazz.newMeth(C$, 'getElementCounts', function () {
for (var i=this.points.length; --i >= 0; ) {
var e1=this.elements[i];
if (e1 > this.maxElement) this.maxElement=e1;
}
this.eCounts=Clazz.array(Integer.TYPE, [++this.maxElement]);
for (var i=this.points.length; --i >= 0; ) this.eCounts[this.elements[i]]++;

}, p$1);

Clazz.newMeth(C$, 'findCAxes', function () {
var v1=Clazz.new_($I$(5,1));
var v2=Clazz.new_($I$(5,1));
var v3=Clazz.new_($I$(5,1));
for (var i=this.points.length; --i >= 0; ) {
if (i == this.centerAtomIndex) continue;
var a1=this.points[i];
var e1=this.elements[i];
for (var j=this.points.length; --j > i; ) {
var a2=this.points[j];
if (this.elements[j] != e1) continue;
v1.sub2$javajs_util_T3$javajs_util_T3(a1, this.center);
v2.sub2$javajs_util_T3$javajs_util_T3(a2, this.center);
v1.normalize$();
v2.normalize$();
if (p$1.isParallel$javajs_util_V3$javajs_util_V3.apply(this, [v1, v2])) {
p$1.getAllAxes$javajs_util_V3.apply(this, [v1]);
continue;
}if (this.nAxes[16] < C$.axesMaxN[16]) {
v3.ave$javajs_util_T3$javajs_util_T3(a1, a2);
v3.sub$javajs_util_T3(this.center);
p$1.getAllAxes$javajs_util_V3.apply(this, [v3]);
}var order=(6.283185307179586 / v1.angle$javajs_util_V3(v2));
var iOrder=(Math.floor(order + 0.01)|0);
var isIntegerOrder=(order - iOrder <= 0.02 );
if (!isIntegerOrder || (iOrder=iOrder + 14) >= C$.maxAxis ) continue;
if (this.nAxes[iOrder] < C$.axesMaxN[iOrder]) {
v3.cross$javajs_util_T3$javajs_util_T3(v1, v2);
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [iOrder, v3, this.center]);
}}
}
var vs=Clazz.array($I$(5), [this.nAxes[16] * 2]);
for (var i=0; i < vs.length; i++) vs[i]=Clazz.new_($I$(5,1));

var n=0;
for (var i=0; i < this.nAxes[16]; i++) {
vs[n++].setT$javajs_util_T3(this.axes[16][i].normalOrAxis);
vs[n].setT$javajs_util_T3(this.axes[16][i].normalOrAxis);
vs[n++].scale$F(-1);
}
for (var i=vs.length; --i >= 2; ) for (var j=i; --j >= 1; ) for (var k=j; --k >= 0; ) {
v3.add2$javajs_util_T3$javajs_util_T3(vs[i], vs[j]);
v3.add$javajs_util_T3(vs[k]);
if (v3.length$() < 1.0 ) continue;
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [17, v3, this.center]);
}


var nMin=2147483647;
var iMin=-1;
for (var i=0; i < this.maxElement; i++) {
if (this.eCounts[i] < nMin && this.eCounts[i] > 2 ) {
nMin=this.eCounts[i];
iMin=i;
}}
 out : for (var i=0; i < this.points.length - 2; i++) if (this.elements[i] == iMin) for (var j=i + 1; j < this.points.length - 1; j++) if (this.elements[j] == iMin) for (var k=j + 1; k < this.points.length; k++) if (this.elements[k] == iMin) {
v1.sub2$javajs_util_T3$javajs_util_T3(this.points[i], this.points[j]);
v2.sub2$javajs_util_T3$javajs_util_T3(this.points[i], this.points[k]);
v1.normalize$();
v2.normalize$();
v3.cross$javajs_util_T3$javajs_util_T3(v1, v2);
p$1.getAllAxes$javajs_util_V3.apply(this, [v3]);
v1.add2$javajs_util_T3$javajs_util_T3(this.points[i], this.points[j]);
v1.add$javajs_util_T3(this.points[k]);
v1.normalize$();
if (!p$1.isParallel$javajs_util_V3$javajs_util_V3.apply(this, [v1, v3])) p$1.getAllAxes$javajs_util_V3.apply(this, [v1]);
if (this.nAxes[19] == C$.axesMaxN[19]) break out;
}


vs=Clazz.array($I$(5), [this.maxElement]);
for (var i=this.points.length; --i >= 0; ) {
var e1=this.elements[i];
if (vs[e1] == null ) vs[e1]=Clazz.new_($I$(5,1));
 else if (this.haveInversionCenter) continue;
vs[e1].add$javajs_util_T3(this.points[i]);
}
if (!this.haveInversionCenter) for (var i=0; i < this.maxElement; i++) if (vs[i] != null ) vs[i].scale$F(1.0 / this.eCounts[i]);

for (var i=0; i < this.maxElement; i++) if (vs[i] != null ) for (var j=0; j < this.maxElement; j++) {
if (i == j || vs[j] == null  ) continue;
if (this.haveInversionCenter) v1.cross$javajs_util_T3$javajs_util_T3(vs[i], vs[j]);
 else v1.sub2$javajs_util_T3$javajs_util_T3(vs[i], vs[j]);
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [16, v1, this.center]);
}

return p$1.getHighestOrder.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getAllAxes$javajs_util_V3', function (v3) {
for (var o=16; o < C$.maxAxis; o++) if (this.nAxes[o] < C$.axesMaxN[o]) p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [o, v3, this.center]);

}, p$1);

Clazz.newMeth(C$, 'getHighestOrder', function () {
var n=0;
for (n=14; --n > 1 && this.nAxes[n] == 0 ; ) {
}
if (n > 1) return (n + 14 < C$.maxAxis && this.nAxes[n + 14] > 0  ? n + 14 : n);
for (n=C$.maxAxis; --n > 1 && this.nAxes[n] == 0 ; ) {
}
return n;
}, p$1);

Clazz.newMeth(C$, 'checkAxisOrder$I$javajs_util_V3$javajs_util_T3', function (iOrder, v, center) {
switch (iOrder) {
case 22:
if (this.nAxes[17] > 0) return false;
case 20:
case 18:
if (this.nAxes[19] > 0) return false;
break;
case 17:
if (this.nAxes[22] > 0) return false;
break;
case 19:
if (this.nAxes[18] > 0 || this.nAxes[20] > 0  || this.nAxes[22] > 0 ) return false;
break;
}
v.normalize$();
if (p$1.haveAxis$I$javajs_util_V3.apply(this, [iOrder, v])) return false;
var q=(function(a,f){return f.apply(null,a)})([v, (iOrder < 14 ? 180 : 0) + (360/(iOrder % 14)|0)],$I$(3).newVA$javajs_util_T3$F);
if (!p$1.checkOperation$javajs_util_Quat$javajs_util_T3$I.apply(this, [q, center, iOrder])) return false;
p$1.addAxis$I$javajs_util_V3.apply(this, [iOrder, v]);
switch (iOrder) {
case 16:
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [4, v, center]);
break;
case 17:
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [3, v, center]);
if (this.haveInversionCenter) p$1.addAxis$I$javajs_util_V3.apply(this, [6, v]);
break;
case 18:
p$1.addAxis$I$javajs_util_V3.apply(this, [16, v]);
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [4, v, center]);
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [8, v, center]);
break;
case 19:
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [5, v, center]);
if (this.haveInversionCenter) p$1.addAxis$I$javajs_util_V3.apply(this, [10, v]);
break;
case 20:
p$1.addAxis$I$javajs_util_V3.apply(this, [16, v]);
p$1.addAxis$I$javajs_util_V3.apply(this, [17, v]);
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [3, v, center]);
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [6, v, center]);
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [12, v, center]);
break;
case 22:
p$1.addAxis$I$javajs_util_V3.apply(this, [16, v]);
p$1.addAxis$I$javajs_util_V3.apply(this, [18, v]);
break;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'addAxis$I$javajs_util_V3', function (iOrder, v) {
if (p$1.haveAxis$I$javajs_util_V3.apply(this, [iOrder, v])) return;
if (this.axes[iOrder] == null ) this.axes[iOrder]=Clazz.array($I$(4), [C$.axesMaxN[iOrder]]);
this.axes[iOrder][this.nAxes[iOrder]++]=Clazz.new_($I$(4,1).c$$javajs_util_V3$I,[this, null, v, iOrder]);
}, p$1);

Clazz.newMeth(C$, 'haveAxis$I$javajs_util_V3', function (iOrder, v) {
if (this.nAxes[iOrder] == C$.axesMaxN[iOrder]) {
return true;
}if (this.nAxes[iOrder] > 0) for (var i=this.nAxes[iOrder]; --i >= 0; ) {
if (p$1.isParallel$javajs_util_V3$javajs_util_V3.apply(this, [v, this.axes[iOrder][i].normalOrAxis])) return true;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'findPlanes', function () {
var pt=Clazz.new_($I$(7,1));
var v1=Clazz.new_($I$(5,1));
var v2=Clazz.new_($I$(5,1));
var v3=Clazz.new_($I$(5,1));
var nPlanes=0;
var haveAxes=(p$1.getHighestOrder.apply(this, []) > 1);
for (var i=this.points.length; --i >= 0; ) {
if (i == this.centerAtomIndex) continue;
var a1=this.points[i];
var e1=this.elements[i];
for (var j=this.points.length; --j > i; ) {
if (haveAxes && this.elements[j] != e1 ) continue;
var a2=this.points[j];
pt.add2$javajs_util_T3$javajs_util_T3(a1, a2);
pt.scale$F(0.5);
v1.sub2$javajs_util_T3$javajs_util_T3(a1, this.center);
v2.sub2$javajs_util_T3$javajs_util_T3(a2, this.center);
if (!p$1.isParallel$javajs_util_V3$javajs_util_V3.apply(this, [v1, v2])) {
v3.cross$javajs_util_T3$javajs_util_T3(v1, v2);
v3.normalize$();
nPlanes=p$1.getPlane$javajs_util_V3.apply(this, [v3]);
}v3.sub2$javajs_util_T3$javajs_util_T3(a2, a1);
v3.normalize$();
nPlanes=p$1.getPlane$javajs_util_V3.apply(this, [v3]);
if (nPlanes == C$.axesMaxN[0]) return nPlanes;
}
}
if (haveAxes) for (var i=16; i < C$.maxAxis; i++) for (var j=0; j < this.nAxes[i]; j++) nPlanes=p$1.getPlane$javajs_util_V3.apply(this, [this.axes[i][j].normalOrAxis]);


return nPlanes;
}, p$1);

Clazz.newMeth(C$, 'getPlane$javajs_util_V3', function (v3) {
if (!p$1.haveAxis$I$javajs_util_V3.apply(this, [0, v3]) && p$1.checkOperation$javajs_util_Quat$javajs_util_T3$I.apply(this, [$I$(3).newVA$javajs_util_T3$F(v3, 180), this.center, -1]) ) this.axes[0][this.nAxes[0]++]=Clazz.new_($I$(4,1).c$$javajs_util_V3,[this, null, v3]);
return this.nAxes[0];
}, p$1);

Clazz.newMeth(C$, 'findAdditionalAxes$I', function (nPlanes) {
var planes=this.axes[0];
var Cn=0;
if (nPlanes > 1 && ((Cn=nPlanes + 14) < C$.maxAxis)  && this.nAxes[Cn] == 0 ) {
this.vTemp.cross$javajs_util_T3$javajs_util_T3(planes[0].normalOrAxis, planes[1].normalOrAxis);
if (!p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [Cn, this.vTemp, this.center]) && nPlanes > 2 ) {
this.vTemp.cross$javajs_util_T3$javajs_util_T3(planes[1].normalOrAxis, planes[2].normalOrAxis);
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [Cn - 1, this.vTemp, this.center]);
}}if (this.nAxes[16] == 0 && nPlanes > 2 ) {
for (var i=0; i < nPlanes - 1; i++) {
for (var j=i + 1; j < nPlanes; j++) {
this.vTemp.add2$javajs_util_T3$javajs_util_T3(planes[1].normalOrAxis, planes[2].normalOrAxis);
p$1.checkAxisOrder$I$javajs_util_V3$javajs_util_T3.apply(this, [16, this.vTemp, this.center]);
}
}
}}, p$1);

Clazz.newMeth(C$, 'getInfo$I$S$Z$S$I$F', function (modelIndex, drawID, asInfo, type, index, scaleFactor) {
var asDraw=(drawID != null );
this.info=(asInfo ? Clazz.new_($I$(10,1)) : null);
var v=Clazz.new_($I$(5,1));
var op;
if (scaleFactor == 0 ) scaleFactor=1;
this.scale=scaleFactor;
var nType=Clazz.array(Integer.TYPE, [4, 2]);
for (var i=1; i < C$.maxAxis; i++) for (var j=this.nAxes[i]; --j >= 0; ) nType[this.axes[i][j].type][0]++;


var sb=Clazz.new_($I$(11,1)).append$S("# ").appendI$I(this.nAtoms).append$S(" atoms\n");
if (asDraw) {
drawID="draw " + drawID;
var haveType=(type != null  && type.length$() > 0 );
this.drawType=type=(haveType ? type : "");
this.drawIndex=index;
var anyProperAxis=(type.equalsIgnoreCase$S("Cn"));
var anyImproperAxis=(type.equalsIgnoreCase$S("Sn"));
sb.append$S("set perspectivedepth off;\n");
var m="_" + modelIndex + "_" ;
if (!haveType) sb.append$S(drawID + "pg0").append$S(m).append$S("* delete;draw pgva").append$S(m).append$S("* delete;draw pgvp").append$S(m).append$S("* delete;");
if (!haveType || type.equalsIgnoreCase$S("Ci") ) sb.append$S(drawID + "pg0").append$S(m).append$S(this.haveInversionCenter ? "inv " : " ").append$S($I$(12).eP$javajs_util_T3(this.center)).append$S(this.haveInversionCenter ? "\"i\";\n" : ";\n");
var offset=0.1;
for (var i=2; i < C$.maxAxis; i++) {
if (i == 14) offset=0.1;
if (this.nAxes[i] == 0) continue;
var label=this.axes[i][0].getLabel$();
offset += 0.25;
var scale=scaleFactor * this.radius + offset;
if (!haveType || type.equalsIgnoreCase$S(label) || anyProperAxis && i >= 14    || anyImproperAxis && i < 14  ) for (var j=0; j < this.nAxes[i]; j++) {
if (index > 0 && j + 1 != index ) continue;
op=this.axes[i][j];
v.add2$javajs_util_T3$javajs_util_T3(op.normalOrAxis, this.center);
if (op.type == 2) scale=-scale;
sb.append$S(drawID + "pgva").append$S(m).append$S(label).append$S("_").appendI$I(j + 1).append$S(" width 0.05 scale ").appendF$F(scale).append$S(" ").append$S($I$(12).eP$javajs_util_T3(v));
v.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-2, op.normalOrAxis, v);
var isPA=(this.principalAxis != null  && op.index == this.principalAxis.index );
sb.append$S($I$(12).eP$javajs_util_T3(v)).append$S("\"").append$S(label).append$S(isPA ? "*" : "").append$S("\" color ").append$S(isPA ? "red" : op.type == 2 ? "blue" : "orange").append$S(";\n");
}
}
if (!haveType || type.equalsIgnoreCase$S("Cs") ) for (var j=0; j < this.nAxes[0]; j++) {
if (index > 0 && j + 1 != index ) continue;
op=this.axes[0][j];
sb.append$S(drawID + "pgvp").append$S(m).appendI$I(j + 1).append$S("disk scale ").appendF$F(scaleFactor * this.radius * 2 ).append$S(" CIRCLE PLANE ").append$S($I$(12).eP$javajs_util_T3(this.center));
v.add2$javajs_util_T3$javajs_util_T3(op.normalOrAxis, this.center);
sb.append$S($I$(12).eP$javajs_util_T3(v)).append$S(" color translucent yellow;\n");
v.add2$javajs_util_T3$javajs_util_T3(op.normalOrAxis, this.center);
sb.append$S(drawID + "pgvp").append$S(m).appendI$I(j + 1).append$S("ring width 0.05 scale ").appendF$F(scaleFactor * this.radius * 2 ).append$S(" arc ").append$S($I$(12).eP$javajs_util_T3(v));
v.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-2, op.normalOrAxis, v);
sb.append$S($I$(12).eP$javajs_util_T3(v));
v.add3$F$F$F(0.011, 0.012, 0.013);
sb.append$S($I$(12).eP$javajs_util_T3(v)).append$S("{0 360 0.5} color ").append$S(this.principalPlane != null  && op.index == this.principalPlane.index  ? "red" : "blue").append$S(";\n");
}
sb.append$S("# name=").append$S(this.name);
sb.append$S(", nCi=").appendI$I(this.haveInversionCenter ? 1 : 0);
sb.append$S(", nCs=").appendI$I(this.nAxes[0]);
sb.append$S(", nCn=").appendI$I(nType[1][0]);
sb.append$S(", nSn=").appendI$I(nType[2][0]);
sb.append$S(": ");
for (var i=C$.maxAxis; --i >= 2; ) if (this.nAxes[i] > 0) {
sb.append$S(" n").append$S(i < 14 ? "S" : "C").appendI$I(i % 14);
sb.append$S("=").appendI$I(this.nAxes[i]);
}
sb.append$S(";\n");
sb.append$S("print '" + this.name + "';\n" );
this.drawInfo=sb.toString();
if ($I$(1).debugging) $I$(1).info$S(this.drawInfo);
return this.drawInfo;
}var n=0;
var nTotal=1;
var ctype=(this.haveInversionCenter ? "Ci" : "center");
if (this.haveInversionCenter) nTotal++;
if (asInfo) this.info.put$O$O(ctype, this.center);
 else sb.append$S("\n\n").append$S(this.name).append$S("\t").append$S(ctype).append$S("\t").append$S($I$(12).eP$javajs_util_T3(this.center));
for (var i=C$.maxAxis; --i >= 0; ) {
if (this.nAxes[i] > 0) {
n=C$.nUnique[i];
var label=this.axes[i][0].getLabel$();
if (asInfo) this.info.put$O$O("n" + label, Integer.valueOf$I(this.nAxes[i]));
 else sb.append$S("\n\n").append$S(this.name).append$S("\tn").append$S(label).append$S("\t").appendI$I(this.nAxes[i]).append$S("\t").appendI$I(n);
n*=this.nAxes[i];
nTotal+=n;
nType[this.axes[i][0].type][1]+=n;
var vinfo=(asInfo ? Clazz.new_($I$(13,1)) : null);
for (var j=0; j < this.nAxes[i]; j++) {
if (asInfo) vinfo.addLast$O(this.axes[i][j].normalOrAxis);
 else sb.append$S("\n").append$S(this.name).append$S("\t").append$S(label).append$S("_").appendI$I(j + 1).append$S("\t").appendO$O(this.axes[i][j].normalOrAxis);
}
if (asInfo) this.info.put$O$O(label, vinfo);
}}
if (!asInfo) {
sb.append$S("\n");
sb.append$S("\n").append$S(this.name).append$S("\ttype\tnType\tnUnique");
sb.append$S("\n").append$S(this.name).append$S("\tE\t  1\t  1");
n=(this.haveInversionCenter ? 1 : 0);
sb.append$S("\n").append$S(this.name).append$S("\tCi\t  ").appendI$I(n).append$S("\t  ").appendI$I(n);
sb.append$S("\n").append$S(this.name).append$S("\tCs\t");
$I$(14).rightJustify$javajs_util_SB$S$S(sb, "    ", this.nAxes[0] + "\t");
$I$(14).rightJustify$javajs_util_SB$S$S(sb, "    ", this.nAxes[0] + "\n");
sb.append$S(this.name).append$S("\tCn\t");
$I$(14).rightJustify$javajs_util_SB$S$S(sb, "    ", nType[1][0] + "\t");
$I$(14).rightJustify$javajs_util_SB$S$S(sb, "    ", nType[1][1] + "\n");
sb.append$S(this.name).append$S("\tSn\t");
$I$(14).rightJustify$javajs_util_SB$S$S(sb, "    ", nType[2][0] + "\t");
$I$(14).rightJustify$javajs_util_SB$S$S(sb, "    ", nType[2][1] + "\n");
sb.append$S(this.name).append$S("\t\tTOTAL\t");
$I$(14).rightJustify$javajs_util_SB$S$S(sb, "    ", nTotal + "\n");
return (this.textInfo=sb.toString());
}this.info.put$O$O("name", this.name);
this.info.put$O$O("nAtoms", Integer.valueOf$I(this.nAtoms));
this.info.put$O$O("nTotal", Integer.valueOf$I(nTotal));
this.info.put$O$O("nCi", Integer.valueOf$I(this.haveInversionCenter ? 1 : 0));
this.info.put$O$O("nCs", Integer.valueOf$I(this.nAxes[0]));
this.info.put$O$O("nCn", Integer.valueOf$I(nType[1][0]));
this.info.put$O$O("nSn", Integer.valueOf$I(nType[2][0]));
this.info.put$O$O("distanceTolerance", Float.valueOf$F(this.distanceTolerance));
this.info.put$O$O("linearTolerance", Float.valueOf$F(this.linearTolerance));
this.info.put$O$O("points", this.points);
this.info.put$O$O("detail", sb.toString().replace$C$C("\n", ";"));
if (this.principalAxis != null  && this.principalAxis.index > 0 ) this.info.put$O$O("principalAxis", this.principalAxis.normalOrAxis);
if (this.principalPlane != null  && this.principalPlane.index > 0 ) this.info.put$O$O("principalPlane", this.principalPlane.normalOrAxis);
return this.info;
});

Clazz.newMeth(C$, 'isDrawType$S$I$F', function (type, index, scale) {
return (this.drawInfo != null  && this.drawType.equals$O(type == null  ? "" : type)  && this.drawIndex == index  && this.scale == scale  );
});

C$.$static$=function(){C$.$static$=0;
C$.axesMaxN=Clazz.array(Integer.TYPE, -1, [15, 0, 0, 1, 3, 1, 10, 0, 1, 0, 6, 0, 1, 0, 0, 0, 15, 10, 6, 6, 10, 0, 1]);
C$.nUnique=Clazz.array(Integer.TYPE, -1, [1, 0, 0, 2, 2, 4, 2, 0, 4, 0, 4, 0, 4, 0, 0, 0, 1, 2, 2, 4, 2, 0, 4]);
C$.maxAxis=C$.axesMaxN.length;
C$.typeNames=Clazz.array(String, -1, ["plane", "proper axis", "improper axis", "center of inversion"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PointGroup, "Operation", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['type','order','index'],'O',['normalOrAxis','javajs.util.V3']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.index=++this.this$0.nOps;
this.type=3;
this.order=1;
if ($I$(1).debugging) (function(a,f){return f.apply(null,a)})(["new operation -- " + $I$(2).typeNames[this.type]],$I$(1).debug$S);
}, 1);

Clazz.newMeth(C$, 'c$$javajs_util_V3$I', function (v, i) {
;C$.$init$.apply(this);
this.index=++this.this$0.nOps;
this.type=(i < 14 ? 2 : 1);
this.order=i % 14;
this.normalOrAxis=$I$(3).newVA$javajs_util_T3$F(v, 180).getNormal$();
if ($I$(1).debugging) (function(a,f){return f.apply(null,a)})(["new operation -- " + (this.order == i ? "S" : "C") + this.order + " " + this.normalOrAxis ],$I$(1).debug$S);
}, 1);

Clazz.newMeth(C$, 'c$$javajs_util_V3', function (v) {
;C$.$init$.apply(this);
if (v == null ) return;
this.index=++this.this$0.nOps;
this.type=0;
this.normalOrAxis=$I$(3).newVA$javajs_util_T3$F(v, 180).getNormal$();
if ($I$(1).debugging) $I$(1).debug$S("new operation -- plane " + this.normalOrAxis);
}, 1);

Clazz.newMeth(C$, 'getLabel$', function () {
switch (this.type) {
case 0:
return "Cs";
case 2:
return "S" + this.order;
default:
return "C" + this.order;
}
});
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
