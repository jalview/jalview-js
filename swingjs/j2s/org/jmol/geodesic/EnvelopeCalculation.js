(function(){var P$=Clazz.newPackage("org.jmol.geodesic"),p$1={},I$=[[0,'org.jmol.atomdata.AtomData','javajs.util.P3','org.jmol.util.Geodesic','javajs.util.BS','org.jmol.util.BSUtil','javajs.util.V3','org.jmol.util.Normix','org.jmol.atomdata.RadiusData',['org.jmol.atomdata.RadiusData','.EnumType'],'javajs.util.AU']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnvelopeCalculation", null, null, 'org.jmol.api.JmolEnvCalc');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.atomData=Clazz.new_($I$(1,1));
this.maxRadius=0;
this.disregardNeighbors=false;
this.pointT=Clazz.new_($I$(2,1));
this.vertexTest=Clazz.array($I$(2), [12]);
{
for (var i=0; i < 12; i++) this.vertexTest[i]=Clazz.new_($I$(2,1));

}
this.neighborIndices=Clazz.array(Integer.TYPE, [16]);
this.neighborCenters=Clazz.array($I$(2), [16]);
this.neighborPlusProbeRadii2=Clazz.array(Float.TYPE, [16]);
this.neighborRadii2=Clazz.array(Float.TYPE, [16]);
},1);

C$.$fields$=[['Z',['modelZeroBased','disregardNeighbors','onlySelectedDots','isSurface','multiModel'],'F',['maxRadius','radiusP','diameterP','radiusI','radiiIP2'],'I',['ac','dotsConvexMax','geodesicCount','indexI','neighborCount'],'O',['geodesicMap','javajs.util.BS','+mapT','mads','short[]','atomData','org.jmol.atomdata.AtomData','vwr','org.jmol.atomdata.AtomDataServer','bsMySelected','javajs.util.BS','dotsConvexMaps','javajs.util.BS[]','bsSurface','javajs.util.BS','+bsTemp','+bsIgnore','currentPoints','javajs.util.P3[]','centerI','javajs.util.P3','+pointT','+centerT','vertexTest','javajs.util.P3[]','neighborIndices','int[]','neighborCenters','javajs.util.P3[]','neighborPlusProbeRadii2','float[]','+neighborRadii2']]
,['O',['EMPTY_SET','javajs.util.BS','power4','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_atomdata_AtomDataServer$I$HA', function (vwr, ac, mads) {
this.vwr=vwr;
this.ac=ac;
this.mads=mads;
this.geodesicCount=$I$(3).getVertexCount$I(3);
this.geodesicMap=$I$(4).newN$I(this.geodesicCount);
this.mapT=$I$(4).newN$I(this.geodesicCount);
C$.EMPTY_SET=$I$(5).emptySet;
return this;
});

Clazz.newMeth(C$, 'getDotsConvexMaps$', function () {
return this.dotsConvexMaps;
});

Clazz.newMeth(C$, 'getDotsConvexMax$', function () {
return this.dotsConvexMax;
});

Clazz.newMeth(C$, 'allocDotsConvexMaps$I', function (max) {
if (this.dotsConvexMax >= max) return;
this.dotsConvexMax=max;
this.dotsConvexMaps=Clazz.array($I$(4), [max]);
});

Clazz.newMeth(C$, 'getBsSurfaceClone$', function () {
return $I$(5).copy$javajs_util_BS(this.bsSurface);
});

Clazz.newMeth(C$, 'setMads$HA', function (mads) {
this.mads=mads;
});

Clazz.newMeth(C$, 'setFromBits$I$javajs_util_BS', function (index, bs) {
this.geodesicMap.setBits$I$I(0, this.geodesicCount);
for (var iDot=this.geodesicCount; --iDot >= 0; ) if (!bs.get$I(iDot)) this.geodesicMap.clear$I(iDot);

if (this.dotsConvexMaps == null ) this.dotsConvexMaps=Clazz.array($I$(4), [this.ac]);
var map;
if (this.geodesicMap.isEmpty$()) map=C$.EMPTY_SET;
 else map=$I$(5).copy$javajs_util_BS(this.geodesicMap);
if (index >= this.dotsConvexMaps.length) return;
this.dotsConvexMaps[index]=map;
this.dotsConvexMax=Math.max(this.dotsConvexMax, index);
});

Clazz.newMeth(C$, 'newSet$', function () {
this.dotsConvexMax=0;
this.dotsConvexMaps=null;
this.radiusP=this.diameterP=0;
this.mads=null;
});

Clazz.newMeth(C$, 'reCalculate$javajs_util_BS$javajs_util_M3', function (bs, m) {
if (this.atomData.radiusData != null ) {
this.calculate$org_jmol_atomdata_RadiusData$F$javajs_util_BS$javajs_util_BS$Z$Z$Z$Z(null, this.maxRadius, bs, this.bsIgnore, this.disregardNeighbors, this.onlySelectedDots, this.isSurface, this.multiModel);
return;
}if (this.dotsConvexMaps == null  || this.dotsConvexMax == 0 ) return;
var pt=Clazz.new_($I$(6,1));
if (this.bsTemp == null ) this.bsTemp=$I$(7).newVertexBitSet$();
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
if (i >= this.dotsConvexMax) return;
var map=this.dotsConvexMaps[i];
if (map == null  || map.isEmpty$() ) continue;
var bsNew=Clazz.new_($I$(4,1));
for (var j=map.nextSetBit$I(0); j >= 0; j=map.nextSetBit$I(j + 1)) {
pt.setT$javajs_util_T3($I$(3).getVertexVector$I(j));
m.rotate$javajs_util_T3(pt);
bsNew.set$I($I$(7).getNormixV$javajs_util_V3$javajs_util_BS(pt, this.bsTemp));
}
this.dotsConvexMaps[i]=bsNew;
}
});

Clazz.newMeth(C$, 'calculate$org_jmol_atomdata_RadiusData$F$javajs_util_BS$javajs_util_BS$Z$Z$Z$Z', function (rd, maxRadius, bsSelected, bsIgnore, disregardNeighbors, onlySelectedDots, isSurface, multiModel) {
if (rd == null ) {
rd=this.atomData.radiusData;
if (rd == null ) return;
} else {
this.atomData.radiusData=rd;
this.bsIgnore=bsIgnore;
this.onlySelectedDots=onlySelectedDots;
this.multiModel=multiModel;
this.isSurface=isSurface;
}if (rd.value == 3.4028235E38 ) rd.value=3.0;
this.atomData.modelIndex=(multiModel ? -1 : 0);
this.modelZeroBased=!multiModel;
this.vwr.fillAtomData$org_jmol_atomdata_AtomData$I(this.atomData, 1 | (this.mads == null  ? 2 : 0));
this.ac=this.atomData.ac;
if (this.mads != null ) for (var i=0; i < this.ac; i++) this.atomData.atomRadius[i]=this.mads[i] / 1000.0;

this.bsMySelected=(onlySelectedDots && bsSelected != null   ? $I$(5).copy$javajs_util_BS(bsSelected) : bsIgnore != null  ? $I$(5).setAll$I(this.ac) : null);
$I$(5).andNot$javajs_util_BS$javajs_util_BS(this.bsMySelected, bsIgnore);
this.disregardNeighbors=disregardNeighbors;
this.maxRadius=maxRadius;
this.bsSurface=Clazz.new_($I$(4,1));
var isAll=(bsSelected == null );
var iter=this.vwr.getSelectedAtomIterator$javajs_util_BS$Z$Z$Z(this.bsMySelected, false, this.modelZeroBased, false);
p$1.checkNewDotsArray.apply(this, []);
var i0=(isAll ? this.ac - 1 : bsSelected.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsSelected.nextSetBit$I(i + 1))) if (bsIgnore == null  || !bsIgnore.get$I(i) ) {
p$1.setAtomI$I.apply(this, [i]);
p$1.getNeighbors$org_jmol_api_AtomIndexIterator.apply(this, [iter]);
p$1.calcConvexMap$Z.apply(this, [isSurface]);
}
iter.release$();
this.currentPoints=null;
p$1.setDotsConvexMax.apply(this, []);
});

Clazz.newMeth(C$, 'getRadius$I', function (atomIndex) {
return this.atomData.atomRadius[atomIndex];
});

Clazz.newMeth(C$, 'getPoints$', function () {
if (this.dotsConvexMaps == null ) {
this.calculate$org_jmol_atomdata_RadiusData$F$javajs_util_BS$javajs_util_BS$Z$Z$Z$Z(Clazz.new_([null, 3.0, $I$(9).ABSOLUTE, null],$I$(8,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW), 3.4028235E38, this.bsMySelected, null, false, false, false, false);
}if (this.currentPoints != null ) return this.currentPoints;
var nPoints=0;
var dotCount=42;
for (var i=this.dotsConvexMax; --i >= 0; ) if (this.dotsConvexMaps[i] != null ) nPoints+=this.dotsConvexMaps[i].cardinalityN$I(dotCount);

var points=Clazz.array($I$(2), [nPoints]);
if (nPoints == 0) return points;
nPoints=0;
for (var i=this.dotsConvexMax; --i >= 0; ) if (this.dotsConvexMaps[i] != null ) {
var iDot=this.dotsConvexMaps[i].size$();
if (iDot > dotCount) iDot=dotCount;
while (--iDot >= 0)if (this.dotsConvexMaps[i].get$I(iDot)) {
var pt=Clazz.new_($I$(2,1));
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.atomData.atomRadius[i], $I$(3).getVertexVector$I(iDot), this.atomData.xyz[i]);
points[nPoints++]=pt;
}
}
this.currentPoints=points;
return points;
});

Clazz.newMeth(C$, 'setDotsConvexMax', function () {
if (this.dotsConvexMaps == null ) this.dotsConvexMax=0;
 else {
var i;
for (i=this.ac; --i >= 0 && this.dotsConvexMaps[i] == null  ; ) {
}
this.dotsConvexMax=i + 1;
}}, p$1);

Clazz.newMeth(C$, 'getAppropriateRadius$I', function (atomIndex) {
return (this.mads != null  ? (atomIndex >= this.mads.length ? 0 : this.mads[atomIndex] / 1000.0) : this.atomData.atomRadius[atomIndex]);
});

Clazz.newMeth(C$, 'setAtomI$I', function (indexI) {
this.indexI=indexI;
this.centerI=this.atomData.xyz[indexI];
this.radiusI=this.atomData.atomRadius[indexI];
this.radiiIP2=this.radiusI + this.radiusP;
this.radiiIP2 *= this.radiiIP2;
}, p$1);

Clazz.newMeth(C$, 'calcConvexMap$Z', function (isSurface) {
p$1.calcConvexBits.apply(this, []);
var map;
if (this.geodesicMap.isEmpty$()) map=C$.EMPTY_SET;
 else {
this.bsSurface.set$I(this.indexI);
if (isSurface) {
p$1.addIncompleteFaces$javajs_util_BS.apply(this, [this.geodesicMap]);
p$1.addIncompleteFaces$javajs_util_BS.apply(this, [this.geodesicMap]);
}map=$I$(5).copy$javajs_util_BS(this.geodesicMap);
}this.dotsConvexMaps[this.indexI]=map;
}, p$1);

Clazz.newMeth(C$, 'addIncompleteFaces$javajs_util_BS', function (points) {
this.mapT.clearAll$();
var faces=$I$(3).getFaceVertexes$I(3);
var len=faces.length;
var maxPt=-1;
for (var f=0; f < len; ) {
var p1=faces[f++];
var p2=faces[f++];
var p3=faces[f++];
var ok1=points.get$I(p1);
var ok2=points.get$I(p2);
var ok3=points.get$I(p3);
if (!(ok1 || ok2 || ok3  ) || ok1 && ok2 && ok3   ) continue;
if (!ok1) {
this.mapT.set$I(p1);
if (maxPt < p1) maxPt=p1;
}if (!ok2) {
this.mapT.set$I(p2);
if (maxPt < p2) maxPt=p2;
}if (!ok3) {
this.mapT.set$I(p3);
if (maxPt < p3) maxPt=p3;
}}
for (var i=0; i <= maxPt; i++) {
if (this.mapT.get$I(i)) points.set$I(i);
}
}, p$1);

Clazz.newMeth(C$, 'calcConvexBits', function () {
this.geodesicMap.setBits$I$I(0, this.geodesicCount);
var combinedRadii=this.radiusI + this.radiusP;
if (this.neighborCount == 0) return;
var faceTest;
var p1;
var p2;
var p3;
var faces=$I$(3).getFaceVertexes$I(3);
var p4=C$.power4[2];
var ok1;
var ok2;
var ok3;
this.mapT.clearAll$();
for (var i=0; i < 12; i++) {
this.vertexTest[i].scaleAdd2$F$javajs_util_T3$javajs_util_T3(combinedRadii, $I$(3).getVertexVector$I(i), this.centerI);
}
for (var f=0; f < 20; f++) {
faceTest=0;
p1=faces[3 * p4 * (4 * f + 0) ];
p2=faces[3 * p4 * (4 * f + 1) ];
p3=faces[3 * p4 * (4 * f + 2) ];
for (var j=0; j < this.neighborCount; j++) {
var maxDist=this.neighborPlusProbeRadii2[j];
this.centerT=this.neighborCenters[j];
ok1=this.vertexTest[p1].distanceSquared$javajs_util_T3(this.centerT) >= maxDist ;
ok2=this.vertexTest[p2].distanceSquared$javajs_util_T3(this.centerT) >= maxDist ;
ok3=this.vertexTest[p3].distanceSquared$javajs_util_T3(this.centerT) >= maxDist ;
if (!ok1) this.geodesicMap.clear$I(p1);
if (!ok2) this.geodesicMap.clear$I(p2);
if (!ok3) this.geodesicMap.clear$I(p3);
if (!ok1 && !ok2 && !ok3  ) {
faceTest=-1;
break;
}}
var kFirst=f * 12 * p4 ;
var kLast=kFirst + 12 * p4;
for (var k=kFirst; k < kLast; k++) {
var vect=faces[k];
if (this.mapT.get$I(vect) || !this.geodesicMap.get$I(vect) ) continue;
switch (faceTest) {
case -1:
this.geodesicMap.clear$I(vect);
break;
case 0:
for (var j=0; j < this.neighborCount; j++) {
var maxDist=this.neighborPlusProbeRadii2[j];
this.centerT=this.neighborCenters[j];
this.pointT.scaleAdd2$F$javajs_util_T3$javajs_util_T3(combinedRadii, $I$(3).getVertexVector$I(vect), this.centerI);
if (this.pointT.distanceSquared$javajs_util_T3(this.centerT) < maxDist ) this.geodesicMap.clear$I(vect);
}
break;
case 1:
}
this.mapT.set$I(vect);
}
}
}, p$1);

Clazz.newMeth(C$, 'checkNewDotsArray', function () {
if (this.dotsConvexMaps == null ) {
this.dotsConvexMaps=Clazz.array($I$(4), [this.ac]);
} else if (this.dotsConvexMaps.length != this.ac) {
var a=Clazz.array($I$(4), [this.ac]);
for (var i=0; i < this.ac && i < this.dotsConvexMaps.length ; i++) a[i]=this.dotsConvexMaps[i];

this.dotsConvexMaps=a;
}}, p$1);

Clazz.newMeth(C$, 'getNeighbors$org_jmol_api_AtomIndexIterator', function (iter) {
this.neighborCount=0;
if (this.disregardNeighbors) return null;
this.vwr.setIteratorForAtom$org_jmol_api_AtomIndexIterator$I$F(iter, this.indexI, this.radiusI + this.diameterP + this.maxRadius );
while (iter.hasNext$()){
var indexN=iter.next$();
var neighborRadius=this.atomData.atomRadius[indexN];
if (this.centerI.distance$javajs_util_T3(this.atomData.xyz[indexN]) > this.radiusI + this.radiusP + this.radiusP + neighborRadius  ) continue;
if (this.neighborCount == this.neighborIndices.length) {
this.neighborIndices=$I$(10).doubleLengthI$IA(this.neighborIndices);
this.neighborCenters=$I$(10).doubleLength$O(this.neighborCenters);
this.neighborPlusProbeRadii2=$I$(10).doubleLengthF$FA(this.neighborPlusProbeRadii2);
this.neighborRadii2=$I$(10).doubleLengthF$FA(this.neighborRadii2);
}this.neighborCenters[this.neighborCount]=this.atomData.xyz[indexN];
this.neighborIndices[this.neighborCount]=indexN;
var r=neighborRadius + this.radiusP;
this.neighborPlusProbeRadii2[this.neighborCount]=r * r;
this.neighborRadii2[this.neighborCount]=neighborRadius * neighborRadius;
++this.neighborCount;
}
return iter;
}, p$1);

Clazz.newMeth(C$, 'deleteAtoms$I$I', function (firstAtomDeleted, nAtomsDeleted) {
this.dotsConvexMaps=$I$(10).deleteElements$O$I$I(this.dotsConvexMaps, firstAtomDeleted, nAtomsDeleted);
this.dotsConvexMax=this.dotsConvexMaps.length;
if (this.mads != null ) this.mads=$I$(10).deleteElements$O$I$I(this.mads, firstAtomDeleted, nAtomsDeleted);
this.atomData.atomRadius=$I$(10).deleteElements$O$I$I(this.atomData.atomRadius, firstAtomDeleted, nAtomsDeleted);
this.atomData.xyz=$I$(10).deleteElements$O$I$I(this.atomData.xyz, firstAtomDeleted, nAtomsDeleted);
this.atomData.ac-=nAtomsDeleted;
this.ac=this.atomData.ac;
});

C$.$static$=function(){C$.$static$=0;
C$.power4=Clazz.array(Integer.TYPE, -1, [1, 4, 16, 64, 256]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
