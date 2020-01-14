(function(){var P$=Clazz.newPackage("org.jmol.jvxl.data"),p$1={},I$=[[0,'javajs.util.BS',['org.jmol.jvxl.data.MeshData','.SSet'],'java.util.Arrays',['org.jmol.jvxl.data.MeshData','.SortSet'],'javajs.util.AU','javajs.util.V3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MeshData", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.util.MeshSurface');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.setsSuccessful=false;
this.vertexIncrement=0;
this.polygonColorData=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.vertexIncrement=1;
}, 1);

Clazz.newMeth(C$, 'addVertexCopy$javajs_util_T3$F$I$Z', function (vertex, value, assocVertex, asCopy) {
if (assocVertex < 0) this.vertexIncrement=-assocVertex;
return this.addVCVal$javajs_util_T3$F$Z(vertex, value, asCopy);
});

Clazz.newMeth(C$, 'getSurfaceSet$', function () {
return (this.surfaceSet == null  ? p$1.getSurfaceSetForLevel$I.apply(this, [0]) : this.surfaceSet);
});

Clazz.newMeth(C$, 'getSurfaceSetForLevel$I', function (level) {
if (level == 0) {
this.surfaceSet=Clazz.array($I$(1), [100]);
this.nSets=0;
}this.setsSuccessful=true;
for (var i=0; i < this.pc; i++) if (this.pis[i] != null ) {
if (this.bsSlabDisplay != null  && !this.bsSlabDisplay.get$I(i) ) continue;
var p=this.pis[i];
var pt0=p$1.findSet$I.apply(this, [p[0]]);
var pt1=p$1.findSet$I.apply(this, [p[1]]);
var pt2=p$1.findSet$I.apply(this, [p[2]]);
if (pt0 < 0 && pt1 < 0  && pt2 < 0 ) {
p$1.createSet$I$I$I.apply(this, [p[0], p[1], p[2]]);
continue;
}if (pt0 == pt1 && pt1 == pt2 ) continue;
if (pt0 >= 0) {
this.surfaceSet[pt0].set$I(p[1]);
this.surfaceSet[pt0].set$I(p[2]);
if (pt1 >= 0 && pt1 != pt0 ) p$1.mergeSets$I$I.apply(this, [pt0, pt1]);
if (pt2 >= 0 && pt2 != pt0  && pt2 != pt1 ) p$1.mergeSets$I$I.apply(this, [pt0, pt2]);
continue;
}if (pt1 >= 0) {
this.surfaceSet[pt1].set$I(p[0]);
this.surfaceSet[pt1].set$I(p[2]);
if (pt2 >= 0 && pt2 != pt1 ) p$1.mergeSets$I$I.apply(this, [pt1, pt2]);
continue;
}this.surfaceSet[pt2].set$I(p[0]);
this.surfaceSet[pt2].set$I(p[1]);
}
var n=0;
for (var i=0; i < this.nSets; i++) if (this.surfaceSet[i] != null ) n++;

var temp=Clazz.array($I$(1), [this.surfaceSet.length]);
n=0;
for (var i=0; i < this.nSets; i++) if (this.surfaceSet[i] != null ) temp[n++]=this.surfaceSet[i];

this.nSets=n;
this.surfaceSet=temp;
if (!this.setsSuccessful && level < 2 ) p$1.getSurfaceSetForLevel$I.apply(this, [level + 1]);
if (level == 0) {
var sets=Clazz.array($I$(2), [this.nSets]);
for (var i=0; i < this.nSets; i++) sets[i]=Clazz.new_($I$(2).c$$javajs_util_BS, [this, null, this.surfaceSet[i]]);

$I$(3).sort$TTA$java_util_Comparator(sets, Clazz.new_($I$(4), [this, null]));
for (var i=0; i < this.nSets; i++) this.surfaceSet[i]=sets[i].bs;

this.setVertexSets$Z(false);
}return this.surfaceSet;
}, p$1);

Clazz.newMeth(C$, 'setVertexSets$Z', function (onlyIfNull) {
if (this.surfaceSet == null ) return;
var nNull=0;
for (var i=0; i < this.nSets; i++) {
if (this.surfaceSet[i] != null  && this.surfaceSet[i].nextSetBit$I(0) < 0 ) this.surfaceSet[i]=null;
if (this.surfaceSet[i] == null ) nNull++;
}
if (nNull > 0) {
var bsNew=Clazz.array($I$(1), [this.nSets - nNull]);
for (var i=0, n=0; i < this.nSets; i++) if (this.surfaceSet[i] != null ) bsNew[n++]=this.surfaceSet[i];

this.surfaceSet=bsNew;
this.nSets-=nNull;
} else if (onlyIfNull) {
return;
}this.vertexSets=Clazz.array(Integer.TYPE, [this.vc]);
for (var i=0; i < this.nSets; i++) for (var j=this.surfaceSet[i].nextSetBit$I(0); j >= 0; j=this.surfaceSet[i].nextSetBit$I(j + 1)) this.vertexSets[j]=i;


});

Clazz.newMeth(C$, 'findSet$I', function (vertex) {
for (var i=0; i < this.nSets; i++) if (this.surfaceSet[i] != null  && this.surfaceSet[i].get$I(vertex) ) return i;

return -1;
}, p$1);

Clazz.newMeth(C$, 'createSet$I$I$I', function (v1, v2, v3) {
var i;
for (i=0; i < this.nSets; i++) if (this.surfaceSet[i] == null ) break;

if (i == this.surfaceSet.length) this.surfaceSet=$I$(5).ensureLength$O$I(this.surfaceSet, this.surfaceSet.length + 100);
this.surfaceSet[i]=Clazz.new_($I$(1));
this.surfaceSet[i].set$I(v1);
this.surfaceSet[i].set$I(v2);
this.surfaceSet[i].set$I(v3);
if (i == this.nSets) this.nSets++;
}, p$1);

Clazz.newMeth(C$, 'mergeSets$I$I', function (a, b) {
this.surfaceSet[a].or$javajs_util_BS(this.surfaceSet[b]);
this.surfaceSet[b]=null;
}, p$1);

Clazz.newMeth(C$, 'invalidateSurfaceSet$I', function (i) {
for (var j=this.surfaceSet[i].nextSetBit$I(0); j >= 0; j=this.surfaceSet[i].nextSetBit$I(j + 1)) this.vvs[j]=NaN;

this.surfaceSet[i]=null;
});

Clazz.newMeth(C$, 'checkCutoff$I$I$I$FA', function (iA, iB, iC, vertexValues) {
if (iA < 0 || iB < 0  || iC < 0 ) return false;
var val1=vertexValues[iA];
var val2=vertexValues[iB];
var val3=vertexValues[iC];
return (val1 >= 0  && val2 >= 0   && val3 >= 0   || val1 <= 0  && val2 <= 0   && val3 <= 0   );
}, 1);

Clazz.newMeth(C$, 'calculateVolumeOrArea$org_jmol_jvxl_data_MeshData$I$Z$Z', function (m, thisSet, isArea, getSets) {
if (getSets || m.nSets <= 0 ) m.getSurfaceSet$();
var justOne=(thisSet >= -1);
var n=(justOne || m.nSets <= 0  ? 1 : m.nSets);
var v=Clazz.array(Double.TYPE, [n]);
var vAB=Clazz.new_($I$(6));
var vAC=Clazz.new_($I$(6));
var vTemp=Clazz.new_($I$(6));
for (var i=m.pc; --i >= 0; ) {
if (m.setABC$I(i) == null ) continue;
var iSet=(m.nSets <= 0 ? 0 : m.vertexSets[m.iA]);
if (thisSet >= 0 && iSet != thisSet ) continue;
if (isArea) {
vAB.sub2$javajs_util_T3$javajs_util_T3(m.vs[m.iB], m.vs[m.iA]);
vAC.sub2$javajs_util_T3$javajs_util_T3(m.vs[m.iC], m.vs[m.iA]);
vTemp.cross$javajs_util_T3$javajs_util_T3(vAB, vAC);
v[justOne ? 0 : iSet] += vTemp.length$();
} else {
vAB.setT$javajs_util_T3(m.vs[m.iB]);
vAC.setT$javajs_util_T3(m.vs[m.iC]);
vTemp.cross$javajs_util_T3$javajs_util_T3(vAB, vAC);
vAC.setT$javajs_util_T3(m.vs[m.iA]);
v[justOne ? 0 : iSet] += vAC.dot$javajs_util_T3(vTemp);
}}
var factor=(isArea ? 2 : 6);
for (var i=0; i < n; i++) v[i] /= factor;

if (justOne) return Float.valueOf$F(v[0]);
return v;
}, 1);

Clazz.newMeth(C$, 'updateInvalidatedVertices$javajs_util_BS', function (bs) {
bs.clearAll$();
for (var i=0; i < this.vc; i+=this.vertexIncrement) if (Float.isNaN$F(this.vvs[i])) bs.set$I(i);

});

Clazz.newMeth(C$, 'invalidateVertices$javajs_util_BS', function (bsInvalid) {
for (var i=bsInvalid.nextSetBit$I(0); i >= 0; i=bsInvalid.nextSetBit$I(i + 1)) this.vvs[i]=NaN;

});
;
(function(){var C$=Clazz.newClass(P$.MeshData, "SSet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bs=null;
this.n=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javajs_util_BS', function (bs) {
C$.$init$.apply(this);
this.bs=bs;
this.n=bs.cardinality$();
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.MeshData, "SortSet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$org_jmol_jvxl_data_MeshData_SSet$org_jmol_jvxl_data_MeshData_SSet','compare$','compare$TT$TT'], function (o1, o2) {
return (o1.n > o2.n ? -1 : o1.n < o2.n ? 1 : 0);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
