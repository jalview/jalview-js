(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.util.Geodesic','javajs.util.BS']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Normix");
C$.normixCount=0;
C$.vertexVectors=null;
C$.inverseNormixes=null;
C$.neighborVertexesArrays=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getNormixCount$', function () {
return (C$.normixCount > 1 ? C$.normixCount : (C$.normixCount=$I$(1).getVertexCount$I(3)));
}, 1);

Clazz.newMeth(C$, 'newVertexBitSet$', function () {
return $I$(2).newN$I(C$.getNormixCount$());
}, 1);

Clazz.newMeth(C$, 'getVertexVectors$', function () {
if (C$.vertexVectors == null ) C$.vertexVectors=$I$(1).getVertexVectors$();
return C$.vertexVectors;
}, 1);

Clazz.newMeth(C$, 'setInverseNormixes$', function () {
if (C$.inverseNormixes != null ) return;
C$.getNormixCount$();
C$.getVertexVectors$();
C$.inverseNormixes=Clazz.array(Short.TYPE, [C$.normixCount]);
var bsTemp=Clazz.new_($I$(2));
for (var n=C$.normixCount; --n >= 0; ) {
var v=C$.vertexVectors[n];
C$.inverseNormixes[n]=C$.getNormix$D$D$D$I$javajs_util_BS(-v.x, -v.y, -v.z, 3, bsTemp);
}
}, 1);

Clazz.newMeth(C$, 'getInverseNormix$H', function (normix) {
return C$.inverseNormixes[normix];
}, 1);

Clazz.newMeth(C$, 'getNeighborVertexArrays$', function () {
if (C$.neighborVertexesArrays == null ) {
C$.neighborVertexesArrays=$I$(1).getNeighborVertexesArrays$();
}return C$.neighborVertexesArrays;
}, 1);

Clazz.newMeth(C$, 'getNormixV$javajs_util_V3$javajs_util_BS', function (v, bsTemp) {
return C$.getNormix$D$D$D$I$javajs_util_BS(v.x, v.y, v.z, 3, bsTemp);
}, 1);

Clazz.newMeth(C$, 'get2SidedNormix$javajs_util_V3$javajs_util_BS', function (v, bsTemp) {
return ($s$[0] = ~C$.getNormixV$javajs_util_V3$javajs_util_BS(v, bsTemp), $s$[0]);
}, 1);

Clazz.newMeth(C$, 'getNormix$D$D$D$I$javajs_util_BS', function (x, y, z, geodesicLevel, bsConsidered) {
var champion;
var t;
if (z >= 0 ) {
champion=($s$[0] = 0, $s$[0]);
t=z - 1;
} else {
champion=($s$[0] = 11, $s$[0]);
t=z - (-1);
}bsConsidered.clearAll$();
bsConsidered.set$I(champion);
C$.getVertexVectors$();
C$.getNeighborVertexArrays$();
var championDist2=x * x + y * y + t * t;
for (var lvl=0; lvl <= geodesicLevel; ++lvl) {
var neighborVertexes=C$.neighborVertexesArrays[lvl];
for (var offsetNeighbors=6 * champion, i=offsetNeighbors + (champion < 12 ? 5 : 6); --i >= offsetNeighbors; ) {
var challenger=neighborVertexes[i];
if (bsConsidered.get$I(challenger)) continue;
bsConsidered.set$I(challenger);
var v=C$.vertexVectors[challenger];
var d;
d=v.x - x;
var d2=d * d;
if (d2 >= championDist2 ) continue;
d=v.y - y;
d2 += d * d;
if (d2 >= championDist2 ) continue;
d=v.z - z;
d2 += d * d;
if (d2 >= championDist2 ) continue;
champion=challenger;
championDist2=d2;
}
}
return champion;
}, 1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
