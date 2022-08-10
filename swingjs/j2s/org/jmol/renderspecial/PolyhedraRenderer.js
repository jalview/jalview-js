(function(){var P$=Clazz.newPackage("org.jmol.renderspecial"),p$1={},I$=[[0,'org.jmol.util.C','javajs.util.T3','javajs.util.V3','javajs.util.P3','org.jmol.util.MeshSurface']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PolyhedraRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isAll','frontOnly','edgesOnly','vibs','showNumbers'],'I',['drawEdges'],'O',['screens3f','javajs.util.P3[]','scrVib','javajs.util.P3i','bsSelected','javajs.util.BS','meshSurface','org.jmol.util.MeshSurface']]]

Clazz.newMeth(C$, 'render$', function () {
var polyhedra=this.shape;
var polyhedrons=polyhedra.polyhedrons;
this.drawEdges=polyhedra.drawEdges;
this.bsSelected=(this.vwr.getSelectionHalosEnabled$() ? this.vwr.bsA$() : null);
this.g3d.addRenderer$I(1073742182);
this.vibs=(this.ms.vibrations != null  && this.tm.vibrationOn );
this.showNumbers=this.vwr.getBoolean$I(603979964);
var needTranslucent=false;
for (var i=polyhedra.polyhedronCount; --i >= 0; ) if (polyhedrons[i].isValid && p$1.render1$org_jmol_shapespecial_Polyhedron.apply(this, [polyhedrons[i]]) ) needTranslucent=true;

return needTranslucent;
});

Clazz.newMeth(C$, 'render1$org_jmol_shapespecial_Polyhedron', function (p) {
if (p.visibilityFlags == 0) return false;
var colixes=(this.shape).colixes;
var iAtom=-1;
var colix;
var scale=1;
if (p.id == null ) {
iAtom=p.centralAtom.i;
colix=(colixes == null  || iAtom >= colixes.length  ? 0 : colixes[iAtom]);
colix=$I$(1).getColixInherited$H$H(colix, p.centralAtom.colixAtom);
} else {
colix=p.colix;
scale=p.scale;
}var needTranslucent=false;
if ($I$(1).renderPass2$H(colix)) {
needTranslucent=true;
} else if (!this.g3d.setC$H(colix)) {
return false;
}var vertices=p.vertices;
if (scale != 1 ) {
var v=Clazz.array($I$(2), [vertices.length]);
if (scale < 0 ) {
var a=$I$(3).newV$javajs_util_T3(p.center);
a.scale$F(-scale - 1);
for (var i=v.length; --i >= 0; ) {
var b=$I$(3).newV$javajs_util_T3(vertices[i]);
b.add$javajs_util_T3(a);
v[i]=b;
}
} else {
for (var i=v.length; --i >= 0; ) {
var a=$I$(3).newVsub$javajs_util_T3$javajs_util_T3(vertices[i], p.center);
a.scaleAdd2$F$javajs_util_T3$javajs_util_T3(scale, a, p.center);
v[i]=a;
}
}vertices=v;
}if (this.screens3f == null  || this.screens3f.length < vertices.length ) {
this.screens3f=Clazz.array($I$(4), [vertices.length]);
for (var i=vertices.length; --i >= 0; ) this.screens3f[i]=Clazz.new_($I$(4,1));

}var sc=this.screens3f;
var planes=p.triangles;
var elemNos=(p.pointScale > 0  ? p.getElemNos$() : null);
for (var i=vertices.length; --i >= 0; ) {
var atom=(Clazz.instanceOf(vertices[i], "org.jmol.modelset.Atom") ? vertices[i] : null);
var v=sc[i];
if (atom == null ) {
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(vertices[i], v);
} else if (this.vibs && atom.hasVibration$() ) {
this.scrVib=this.tm.transformPtVib$javajs_util_P3$org_jmol_util_Vibration(atom, this.ms.vibrations[atom.i]);
v.set$F$F$F(this.scrVib.x, this.scrVib.y, this.scrVib.z);
} else {
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(atom, v);
}if (elemNos != null  && i < elemNos.length  && this.g3d.setC$H(elemNos[i] < 0 ? colix : this.vwr.cm.setElementArgb$I$I(elemNos[i], 2147483647)) ) {
this.g3d.fillSphereBits$I$javajs_util_P3((this.tm.scaleToScreen$I$I((v.z|0), ((p.pointScale * 1000)|0))|0), v);
this.g3d.setC$H(colix);
}if (this.showNumbers) {
if (this.g3d.setC$H(4)) {
this.g3d.drawStringNoSlab$S$org_jmol_util_Font$I$I$I$H("" + i, null, (v.x|0), (v.y|0), (v.z|0) - 30, 0);
this.g3d.setC$H(colix);
}}}
var isSelected=(iAtom >= 0 && this.bsSelected != null   && this.bsSelected.get$I(iAtom) );
this.isAll=(this.drawEdges == 1 || isSelected );
this.frontOnly=(this.drawEdges == 2);
this.edgesOnly=(this.drawEdges == 3);
var normixes=p.getNormixes$();
if ((!needTranslucent || this.g3d.setC$H(colix) ) && !this.edgesOnly ) {
if (this.exportType == 1 && !p.collapsed ) {
if (this.meshSurface == null ) this.meshSurface=Clazz.new_($I$(5,1));
this.meshSurface.vs=vertices;
this.meshSurface.pis=planes;
this.meshSurface.pc=planes.length;
this.meshSurface.vc=vertices.length;
this.g3d.drawSurface$org_jmol_util_MeshSurface$H(this.meshSurface, colix);
} else {
for (var i=planes.length; --i >= 0; ) {
var pl=planes[i];
try {
if (!this.showNumbers || this.g3d.setC$H(($s$[0] = (Math.round(Math.random() * 10) + 5), $s$[0])) ) this.g3d.fillTriangleTwoSided$H$javajs_util_P3$javajs_util_P3$javajs_util_P3(normixes[i], sc[pl[0]], sc[pl[1]], sc[pl[2]]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("PolyhedraRendererError");
} else {
throw e;
}
}
}
}}if (this.isAll || this.frontOnly || this.edgesOnly  ) {
if (isSelected) colix=23;
 else if (p.colixEdge != 0) colix=p.colixEdge;
if (this.g3d.setC$H($I$(1).getColixTranslucent3$H$Z$F(colix, false, 0))) for (var i=planes.length; --i >= 0; ) {
var pl=planes[i];
p$1.drawEdges$H$javajs_util_P3$javajs_util_P3$javajs_util_P3$I.apply(this, [normixes[i], sc[pl[0]], sc[pl[1]], sc[pl[2]], -pl[3]]);
}
}return needTranslucent;
}, p$1);

Clazz.newMeth(C$, 'drawEdges$H$javajs_util_P3$javajs_util_P3$javajs_util_P3$I', function (normix, a, b, c, edgeMask) {
if (this.isAll || this.edgesOnly || this.frontOnly && this.vwr.gdata.isDirectedTowardsCamera$H(normix)   ) {
var d=(this.g3d.isAntialiased$() ? 6 : 3);
if ((edgeMask & 1) == 1) this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(3, d, a, b);
if ((edgeMask & 2) == 2) this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(3, d, b, c);
if ((edgeMask & 4) == 4) this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(3, d, a, c);
}}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
