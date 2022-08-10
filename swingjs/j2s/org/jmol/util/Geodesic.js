(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.AU','javajs.util.V3','java.util.Hashtable']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Geodesic");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['F',['halfRoot5'],'I',['currentLevel'],'H',['vertexNext'],'O',['faceVertexesIcosahedron','short[]','+neighborVertexesIcosahedron','+vertexCounts','vertexVectors','javajs.util.V3[]','faceVertexesArrays','short[][]','+neighborVertexesArrays','htVertex','java.util.Map']]]

Clazz.newMeth(C$, 'getNeighborVertexesArrays$', function () {
if (C$.vertexCounts == null ) C$.createGeodesic$I(3);
return C$.neighborVertexesArrays;
}, 1);

Clazz.newMeth(C$, 'getVertexCount$I', function (level) {
if (C$.vertexCounts == null ) C$.createGeodesic$I(3);
return C$.vertexCounts[level];
}, 1);

Clazz.newMeth(C$, 'getVertexVectors$', function () {
if (C$.vertexCounts == null ) C$.createGeodesic$I(3);
return C$.vertexVectors;
}, 1);

Clazz.newMeth(C$, 'getVertexVector$I', function (i) {
return C$.vertexVectors[i];
}, 1);

Clazz.newMeth(C$, 'getFaceVertexes$I', function (level) {
return C$.faceVertexesArrays[level];
}, 1);

Clazz.newMeth(C$, 'createGeodesic$I', function (lvl) {
if (lvl < C$.currentLevel) return;
C$.currentLevel=lvl;
var v=Clazz.array(Short.TYPE, [lvl + 1]);
C$.neighborVertexesArrays=$I$(1).newShort2$I(lvl + 1);
C$.faceVertexesArrays=$I$(1).newShort2$I(lvl + 1);
C$.vertexVectors=Clazz.array($I$(2), [12]);
C$.vertexVectors[0]=$I$(2).new3$F$F$F(0, 0, C$.halfRoot5);
for (var i=0; i < 5; ++i) {
C$.vertexVectors[i + 1]=$I$(2,"new3$F$F$F",[Math.cos(i * 1.2566371), Math.sin(i * 1.2566371), 0.5]);
C$.vertexVectors[i + 6]=$I$(2,"new3$F$F$F",[Math.cos(i * 1.2566371 + 0.62831855), Math.sin(i * 1.2566371 + 0.62831855), -0.5]);
}
C$.vertexVectors[11]=$I$(2).new3$F$F$F(0, 0, -C$.halfRoot5);
for (var i=12; --i >= 0; ) C$.vertexVectors[i].normalize$();

C$.faceVertexesArrays[0]=C$.faceVertexesIcosahedron;
C$.neighborVertexesArrays[0]=C$.neighborVertexesIcosahedron;
v[0]=(12|0);
for (var i=0; i < lvl; ++i) C$.quadruple$I$HA(i, v);

C$.vertexCounts=v;
}, 1);

Clazz.newMeth(C$, 'quadruple$I$HA', function (level, counts) {
C$.htVertex=Clazz.new_($I$(3,1));
var oldVertexCount=C$.vertexVectors.length;
var oldFaceVertexes=C$.faceVertexesArrays[level];
var oldFaceVertexesLength=oldFaceVertexes.length;
var oldFaceCount=(oldFaceVertexesLength/3|0);
var oldEdgesCount=oldVertexCount + oldFaceCount - 2;
var newVertexCount=oldVertexCount + oldEdgesCount;
var newFaceCount=4 * oldFaceCount;
C$.vertexVectors=$I$(1).arrayCopyObject$O$I(C$.vertexVectors, newVertexCount);
var newFacesVertexes=Clazz.array(Short.TYPE, [3 * newFaceCount]);
C$.faceVertexesArrays[level + 1]=newFacesVertexes;
var neighborVertexes=Clazz.array(Short.TYPE, [6 * newVertexCount]);
C$.neighborVertexesArrays[level + 1]=neighborVertexes;
for (var i=neighborVertexes.length; --i >= 0; ) neighborVertexes[i]=(-1|0);

counts[level + 1]=(newVertexCount|0);
C$.vertexNext=($s$[0] = oldVertexCount, $s$[0]);
var iFaceNew=0;
for (var i=0; i < oldFaceVertexesLength; ) {
var iA=oldFaceVertexes[i++];
var iB=oldFaceVertexes[i++];
var iC=oldFaceVertexes[i++];
var iAB=C$.getVertex$H$H(iA, iB);
var iBC=C$.getVertex$H$H(iB, iC);
var iCA=C$.getVertex$H$H(iC, iA);
newFacesVertexes[iFaceNew++]=iA;
newFacesVertexes[iFaceNew++]=iAB;
newFacesVertexes[iFaceNew++]=iCA;
newFacesVertexes[iFaceNew++]=iB;
newFacesVertexes[iFaceNew++]=iBC;
newFacesVertexes[iFaceNew++]=iAB;
newFacesVertexes[iFaceNew++]=iC;
newFacesVertexes[iFaceNew++]=iCA;
newFacesVertexes[iFaceNew++]=iBC;
newFacesVertexes[iFaceNew++]=iCA;
newFacesVertexes[iFaceNew++]=iAB;
newFacesVertexes[iFaceNew++]=iBC;
C$.addNeighboringVertexes$HA$H$H(neighborVertexes, iAB, iA);
C$.addNeighboringVertexes$HA$H$H(neighborVertexes, iAB, iCA);
C$.addNeighboringVertexes$HA$H$H(neighborVertexes, iAB, iBC);
C$.addNeighboringVertexes$HA$H$H(neighborVertexes, iAB, iB);
C$.addNeighboringVertexes$HA$H$H(neighborVertexes, iBC, iB);
C$.addNeighboringVertexes$HA$H$H(neighborVertexes, iBC, iCA);
C$.addNeighboringVertexes$HA$H$H(neighborVertexes, iBC, iC);
C$.addNeighboringVertexes$HA$H$H(neighborVertexes, iCA, iC);
C$.addNeighboringVertexes$HA$H$H(neighborVertexes, iCA, iA);
}
if (true) {
var vertexCount=C$.vertexVectors.length;
if (iFaceNew != newFacesVertexes.length) throw Clazz.new_(Clazz.load('NullPointerException'));
if (C$.vertexNext != newVertexCount) throw Clazz.new_(Clazz.load('NullPointerException'));
for (var i=0; i < 12; ++i) {
for (var j=0; j < 5; ++j) {
var neighbor=neighborVertexes[i * 6 + j];
if (neighbor < 0) throw Clazz.new_(Clazz.load('NullPointerException'));
if (neighbor >= vertexCount) throw Clazz.new_(Clazz.load('NullPointerException'));
if (neighborVertexes[i * 6 + 5] != -1) throw Clazz.new_(Clazz.load('NullPointerException'));
}
}
for (var i=72; i < neighborVertexes.length; ++i) {
var neighbor=neighborVertexes[i];
if (neighbor < 0) throw Clazz.new_(Clazz.load('NullPointerException'));
if (neighbor >= vertexCount) throw Clazz.new_(Clazz.load('NullPointerException'));
}
for (var i=0; i < newVertexCount; ++i) {
var neighborCount=0;
for (var j=neighborVertexes.length; --j >= 0; ) if (neighborVertexes[j] == i) ++neighborCount;

if ((i < 12 && neighborCount != 5 ) || (i >= 12 && neighborCount != 6 ) ) throw Clazz.new_(Clazz.load('NullPointerException'));
var faceCount=0;
for (var j=newFacesVertexes.length; --j >= 0; ) if (newFacesVertexes[j] == i) ++faceCount;

if ((i < 12 && faceCount != 5 ) || (i >= 12 && faceCount != 6 ) ) throw Clazz.new_(Clazz.load('NullPointerException'));
}
}C$.htVertex=null;
}, 1);

Clazz.newMeth(C$, 'addNeighboringVertexes$HA$H$H', function (neighborVertexes, v1, v2) {
for (var i=v1 * 6, iMax=i + 6; i < iMax; ++i) {
if (neighborVertexes[i] == v2) return;
if (neighborVertexes[i] < 0) {
neighborVertexes[i]=v2;
for (var j=v2 * 6, jMax=j + 6; j < jMax; ++j) {
if (neighborVertexes[j] == v1) return;
if (neighborVertexes[j] < 0) {
neighborVertexes[j]=v1;
return;
}}
}}
throw Clazz.new_(Clazz.load('NullPointerException'));
}, 1);

Clazz.newMeth(C$, 'getVertex$H$H', function (v1, v2) {
if (v1 > v2) {
var t=v1;
v1=v2;
v2=t;
}var hashKey=Integer.valueOf$I((v1 << 16) + v2);
var iv=C$.htVertex.get$O(hashKey);
if (iv != null ) {
return iv.shortValue$();
}var newVertexVector=C$.vertexVectors[C$.vertexNext]=Clazz.new_($I$(2,1));
newVertexVector.add2$javajs_util_T3$javajs_util_T3(C$.vertexVectors[v1], C$.vertexVectors[v2]);
newVertexVector.normalize$();
C$.htVertex.put$O$O(hashKey, Short.valueOf$H(C$.vertexNext));
return ($s$[0]=C$.vertexNext,C$.vertexNext=(++$s$[0],$s$[0]),--$s$[0],$s$[0]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.halfRoot5=(0.5 * Math.sqrt(5));
C$.faceVertexesIcosahedron=Clazz.array(Short.TYPE, -1, [0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 5, 0, 5, 1, 1, 6, 2, 2, 7, 3, 3, 8, 4, 4, 9, 5, 5, 10, 1, 6, 1, 10, 7, 2, 6, 8, 3, 7, 9, 4, 8, 10, 5, 9, 11, 6, 10, 11, 7, 6, 11, 8, 7, 11, 9, 8, 11, 10, 9]);
C$.neighborVertexesIcosahedron=Clazz.array(Short.TYPE, -1, [1, 2, 3, 4, 5, -1, 0, 5, 10, 6, 2, -1, 0, 1, 6, 7, 3, -1, 0, 2, 7, 8, 4, -1, 0, 3, 8, 9, 5, -1, 0, 4, 9, 10, 1, -1, 1, 10, 11, 7, 2, -1, 2, 6, 11, 8, 3, -1, 3, 7, 11, 9, 4, -1, 4, 8, 11, 10, 5, -1, 5, 9, 11, 6, 1, -1, 6, 7, 8, 9, 10, -1]);
};
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
