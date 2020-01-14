(function(){var P$=Clazz.newPackage("org.jmol.shapesurface"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.V3','javajs.util.Measure','javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Pmesh", null, 'org.jmol.shapesurface.Isosurface');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initShape$', function () {
C$.superclazz.prototype.initShape$.apply(this, []);
this.myType="pmesh";
});

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
if (property == "face") {
var m=this.currentMesh;
if (index >= 0 && (index >= this.meshCount || (m=this.meshes[index]) == null  ) ) return null;
return m == null  ? null : p$1.getFace$org_jmol_shape_Mesh.apply(this, [m]);
}return this.getPropI$S$I(property, index);
});

Clazz.newMeth(C$, 'getFace$org_jmol_shape_Mesh', function (m) {
if (m.haveQuads) return null;
var vs=m.vs;
var htEdges=Clazz.new_($I$(1));
var v1=0;
var v0;
var v01;
var n=0;
var edge0=null;
for (var i=m.pc; --i >= 0; ) {
if (m.bsSlabDisplay != null  && !m.bsSlabDisplay.get$I(i) ) continue;
var triangle=m.pis[i];
var mask=triangle[3];
for (var j=0; j < 3; j++) if ((mask & (1 << j)) != 0) {
v1=triangle[j];
var v2=triangle[(j + 1) % 3];
var key=v2 + "_" + v1 ;
if (htEdges.containsKey$O(key)) {
htEdges.remove$O(key);
n--;
} else {
n++;
edge0=Clazz.array(Integer.TYPE, -1, [v1, v2]);
htEdges.put$TK$TV(v1 + "_" + v2 , edge0);
htEdges.put$TK$TV("" + v1, edge0);
}}
}
if (n == 0) return null;
var a=Clazz.array(Integer.TYPE, [n, 2]);
a[0]=edge0;
var vectorBA=Clazz.new_($I$(2));
var vectorBC=Clazz.new_($I$(2));
v01=v0=a[0][0];
v1=a[0][1];
var pt=0;
var min=1.0E-4;
while (v1 != v0){
var edge=htEdges.get$O("" + v1);
if (edge == null ) break;
var angle=$I$(3).computeAngle$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$Z(vs[v01], vs[v1], vs[edge[1]], vectorBA, vectorBC, true);
var d2=vs[v1].distanceSquared$javajs_util_T3(vs[edge[1]]);
v1=edge[1];
if (angle < 179  && d2 > min  ) {
a[++pt]=edge;
v01=edge[0];
} else {
a[pt][1]=v1;
}}
if ($I$(3).computeAngle$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$Z(vs[v01], vs[v1], vs[a[0][1]], vectorBA, vectorBC, true) >= 179  || vs[v1].distanceSquared$javajs_util_T3(vs[a[0][1]]) <= min  ) {
a[0][0]=a[pt--][0];
}n=(pt < 0 ? 1 : ++pt);
var pts=Clazz.array($I$(4), [n]);
for (var i=0; i < n; i++) pts[i]=$I$(4).newP$javajs_util_T3(vs[a[i][0]]);

return pts;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
