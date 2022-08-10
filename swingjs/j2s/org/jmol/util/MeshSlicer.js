(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'javajs.util.SB','org.jmol.util.BSUtil','javajs.util.BS','org.jmol.util.C','org.jmol.util.Escape','javajs.util.P4','javajs.util.V3','javajs.util.P3','org.jmol.util.BoxInfo','javajs.util.Measure','org.jmol.api.Interface','java.util.Hashtable','javajs.util.AU','org.jmol.util.MeshSurface']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MeshSlicer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['doCap','doClear','doGhost'],'F',['dPlane','wPlane'],'I',['iD','iE'],'O',['m','org.jmol.util.MeshSurface','sources','int[]','pts','javajs.util.P3[]','norm','javajs.util.V3','values','float[]','+fracs','capper','org.jmol.util.MeshCapper']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_util_MeshSurface', function (meshSurface) {
this.m=meshSurface;
this.values=Clazz.array(Float.TYPE, [2]);
this.fracs=Clazz.array(Float.TYPE, [2]);
this.sources=Clazz.array(Integer.TYPE, [3]);
return this;
});

Clazz.newMeth(C$, 'slabPolygons$OA$Z', function (slabObject, allowCap) {
if (this.m.polygonCount0 < 0) return false;
var m=this.m;
var slabType=(slabObject[0]).intValue$();
if (slabType == 1073742333 || slabType == 1073741872 ) {
if (m.bsSlabDisplay != null  && (m.polygonCount0 != 0 || m.vertexCount0 != 0 ) ) {
m.pc=m.polygonCount0;
m.vc=m.vertexCount0;
m.polygonCount0=m.vertexCount0=0;
m.normixCount=(m.isDrawPolygon ? m.pc : m.vc);
m.bsSlabDisplay.setBits$I$I(0, (m.pc == 0 ? m.vc : m.pc));
m.slabOptions=Clazz.new_($I$(1,1)).append$S(m.meshType + " slab none");
m.bsSlabGhost=null;
m.slabMeshType=1073742333;
}if (slabType == 1073742333) {
return false;
}}var slabbingObject=slabObject[1];
var andCap=(slabObject[2]).booleanValue$() && !(slabType == 1073741872) ;
if (andCap && !allowCap ) return false;
var colorData=slabObject[3];
var isGhost=(colorData != null );
if (m.bsSlabDisplay == null  || m.polygonCount0 == 0 && m.vertexCount0 == 0  ) {
m.polygonCount0=m.pc;
m.vertexCount0=m.vc;
m.bsSlabDisplay=$I$(2,"setAll$I",[m.pc == 0 ? m.vc : m.pc]);
m.bsSlabGhost=null;
if (m.pc == 0 && m.vc == 0 ) return false;
} else if (m.isMerged) {
if (m.pc == 0) m.bsSlabDisplay.setBits$I$I(m.mergeVertexCount0, m.vc);
 else m.bsSlabDisplay.setBits$I$I(m.mergePolygonCount0, m.pc);
}if (isGhost) {
if (m.bsSlabGhost == null ) m.bsSlabGhost=Clazz.new_($I$(3,1));
m.slabMeshType=(colorData[0]).intValue$();
m.slabColix=(colorData[1]).shortValue$();
andCap=false;
m.colix=$I$(4).getColixTranslucent3$H$Z$F(m.colix, false, 0);
}var sb=Clazz.new_($I$(1,1));
sb.append$S(andCap ? " cap " : " slab ");
if (isGhost) {
sb.append$S($I$(4).getColixTranslucencyLabel$H(m.slabColix)).append$S(" ");
var s=$I$(4).getHexCode$H(m.slabColix);
if (s != null ) sb.append$S(s).append$S(" ");
if (m.slabMeshType == 1073742018) sb.append$S("mesh ");
}switch (slabType) {
case 1073741872:
sb.append$S("brillouin");
this.slabBrillouin$javajs_util_P3A(slabbingObject);
break;
case 3:
this.getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z(0, null, null, null, null, slabbingObject, null, andCap, false, 3, isGhost);
break;
case 134217750:
var plane=slabbingObject;
sb.append$S($I$(5).eP4$javajs_util_P4(plane));
this.getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z(0, plane, null, null, null, null, null, andCap, false, 134217750, isGhost);
break;
case 1814695966:
case 1678381065:
var box=slabbingObject;
sb.append$S("within ").append$S($I$(5).eAP$javajs_util_T3A(box));
var faces=p$1.getBoxFacesFromOABC$javajs_util_P3A.apply(this, [box]);
for (var i=0; i < faces.length; i++) {
this.getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z(0, faces[i], null, null, null, null, null, andCap, false, 134217750, isGhost);
}
break;
case 134221834:
this.getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z(0, null, null, null, slabbingObject, null, null, false, false, 32, isGhost);
break;
case 134217759:
case 1073742114:
case 1073742018:
var o=slabbingObject;
var distance=(o[0]).floatValue$();
switch (slabType) {
case 134217759:
var points=o[1];
var bs=o[2];
sb.append$S("within ").appendF$F(distance).append$S(bs == null  ? $I$(5).e$O(points) : $I$(5).e$O(bs));
this.getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z(distance, null, points, null, null, null, null, andCap, false, 1275069443, isGhost);
break;
case 1073742114:
if (m.vvs == null ) return false;
var distanceMax=(o[1]).floatValue$();
sb.append$S("within range ").appendF$F(distance).append$S(" ").appendF$F(distanceMax);
bs=(distanceMax < distance  ? $I$(2).copy$javajs_util_BS(m.bsSlabDisplay) : null);
this.getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z(distance, null, null, null, null, null, null, andCap, false, 32, isGhost);
var bsA=(bs == null  ? null : $I$(2).copy$javajs_util_BS(m.bsSlabDisplay));
$I$(2).copy2$javajs_util_BS$javajs_util_BS(bs, m.bsSlabDisplay);
this.getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z(distanceMax, null, null, null, null, null, null, andCap, false, 64, isGhost);
if (bsA != null ) m.bsSlabDisplay.or$javajs_util_BS(bsA);
break;
case 1073742018:
var mesh=o[1];
this.getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z(0, null, null, null, null, null, mesh, andCap, false, distance < 0  ? 32 : 64, isGhost);
break;
}
break;
}
var newOptions=sb.toString();
if (m.slabOptions == null ) m.slabOptions=Clazz.new_($I$(1,1));
if (m.slabOptions.indexOf$S(newOptions) < 0) m.slabOptions.append$S(m.slabOptions.length$() > 0 ? "; " : "").append$S(m.meshType).append$S(newOptions);
return true;
});

Clazz.newMeth(C$, 'getBoxFacesFromOABC$javajs_util_P3A', function (oabc) {
var faces=Clazz.array($I$(6), [6]);
var vNorm=Clazz.new_($I$(7,1));
var vAB=Clazz.new_($I$(7,1));
var pta=Clazz.new_($I$(8,1));
var ptb=Clazz.new_($I$(8,1));
var ptc=Clazz.new_($I$(8,1));
var vertices=$I$(9).getVerticesFromOABC$javajs_util_P3A(oabc);
for (var i=0; i < 6; i++) {
pta.setT$javajs_util_T3(vertices[$I$(9).facePoints[i][0]]);
ptb.setT$javajs_util_T3(vertices[$I$(9).facePoints[i][1]]);
ptc.setT$javajs_util_T3(vertices[$I$(9).facePoints[i][2]]);
faces[i]=$I$(10,"getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4",[pta, ptb, ptc, vNorm, vAB, Clazz.new_($I$(6,1))]);
}
return faces;
}, p$1);

Clazz.newMeth(C$, 'getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z', function (distance, plane, ptCenters, vData, fData, bsSource, meshSurface, andCap, doClean, tokType, isGhost) {
var m=this.m;
var isSlab=(vData == null );
var p=null;
this.pts=ptCenters;
if (plane != null ) {
this.norm=$I$(7).newV$javajs_util_T3(plane);
this.dPlane=Math.sqrt(this.norm.dot$javajs_util_T3(this.norm));
this.wPlane=plane.w;
if (this.dPlane == 0 ) {
this.norm.z=this.dPlane=1;
this.wPlane=0;
}}if (fData == null ) {
if (tokType == 3 && bsSource != null  ) {
if (m.vertexSource == null ) return;
fData=Clazz.array(Float.TYPE, [m.vc]);
for (var i=0; i < m.vc; i++) {
fData[i]=m.vertexSource[i];
if (fData[i] == -1 ) System.out.println$S("meshsurface hmm");
}
} else {
fData=m.vvs;
}}if (m.pc == 0) {
for (var i=m.mergeVertexCount0; i < m.vc; i++) {
if (Float.isNaN$F(fData[i]) || p$1.checkSlab$I$javajs_util_T3$F$F$javajs_util_BS.apply(this, [tokType, m.vs[i], fData[i], distance, bsSource]) > 0  ) m.bsSlabDisplay.clear$I(i);
}
return;
}if (ptCenters != null  || isGhost ) andCap=false;
if (andCap && this.capper == null  ) this.capper=($I$(11).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.util.MeshCapper", m.vwr, "script")).set$org_jmol_util_MeshSlicer(this);
if (this.capper != null ) this.capper.clear$();
var absD=Math.abs(distance);
var mapEdge=Clazz.new_($I$(12,1));
var bsD=$I$(3).newN$I(m.vc);
var d=Clazz.array(Float.TYPE, [m.vc]);
var d1=0;
var d2=0;
var d3=0;
var valA;
var valB;
var valC;
for (var i=m.mergePolygonCount0, iLast=m.pc; i < iLast; i++) {
var face=m.setABC$I(i);
if (face == null ) continue;
var bsSlab=(m.bsSlabGhost != null  && m.bsSlabGhost.get$I(i)  ? m.bsSlabGhost : m.bsSlabDisplay);
var check1=face[3];
var iContour=(m.dataOnly ? 0 : face[4]);
var ia=m.iA;
var ib=m.iB;
var ic=m.iC;
var vA=m.vs[ia];
var vB=m.vs[ib];
var vC=m.vs[ic];
valA=fData[ia];
valB=fData[ib];
valC=fData[ic];
if (m.vertexSource != null ) {
this.sources[0]=m.vertexSource[ia];
this.sources[1]=m.vertexSource[ib];
this.sources[2]=m.vertexSource[ic];
}if (!bsD.get$I(ia)) {
bsD.set$I(ia);
d[ia]=p$1.checkSlab$I$javajs_util_T3$F$F$javajs_util_BS.apply(this, [tokType, vA, valA, (bsSource == null  ? distance : this.sources[0]), bsSource]);
}if (!bsD.get$I(ib)) {
bsD.set$I(ib);
d[ib]=p$1.checkSlab$I$javajs_util_T3$F$F$javajs_util_BS.apply(this, [tokType, vB, valB, (bsSource == null  ? distance : this.sources[1]), bsSource]);
}if (!bsD.get$I(ic)) {
bsD.set$I(ic);
d[ic]=p$1.checkSlab$I$javajs_util_T3$F$F$javajs_util_BS.apply(this, [tokType, vC, valC, (bsSource == null  ? distance : this.sources[2]), bsSource]);
}d1=d[ia];
d2=d[ib];
d3=d[ic];
var test1=(d1 != 0  && d1 < 0   ? 1 : 0) + (d2 != 0  && d2 < 0   ? 2 : 0) + (d3 != 0  && d3 < 0   ? 4 : 0) ;
var thisSet=(m.vertexSets == null  ? 0 : m.vertexSets[ia]);
switch (test1) {
default:
case 7:
case 0:
break;
case 1:
case 6:
if (ptCenters == null ) p=Clazz.array($I$(8), -1, [p$1.interpolatePoint$javajs_util_T3$javajs_util_T3$F$F$F$F$I.apply(this, [vA, vB, -d1, d2, valA, valB, 0]), p$1.interpolatePoint$javajs_util_T3$javajs_util_T3$F$F$F$F$I.apply(this, [vA, vC, -d1, d3, valA, valC, 1])]);
 else p=Clazz.array($I$(8), -1, [p$1.interpolateSphere$javajs_util_T3$javajs_util_T3$F$F$D$F$F$I.apply(this, [vA, vB, -d1, -d2, absD, valA, valB, 0]), p$1.interpolateSphere$javajs_util_T3$javajs_util_T3$F$F$D$F$F$I.apply(this, [vA, vC, -d1, -d3, absD, valA, valC, 1])]);
break;
case 2:
case 5:
if (ptCenters == null ) p=Clazz.array($I$(8), -1, [p$1.interpolatePoint$javajs_util_T3$javajs_util_T3$F$F$F$F$I.apply(this, [vB, vA, -d2, d1, valB, valA, 1]), p$1.interpolatePoint$javajs_util_T3$javajs_util_T3$F$F$F$F$I.apply(this, [vB, vC, -d2, d3, valB, valC, 0])]);
 else p=Clazz.array($I$(8), -1, [p$1.interpolateSphere$javajs_util_T3$javajs_util_T3$F$F$D$F$F$I.apply(this, [vB, vA, -d2, -d1, absD, valB, valA, 1]), p$1.interpolateSphere$javajs_util_T3$javajs_util_T3$F$F$D$F$F$I.apply(this, [vB, vC, -d2, -d3, absD, valB, valC, 0])]);
break;
case 3:
case 4:
if (ptCenters == null ) p=Clazz.array($I$(8), -1, [p$1.interpolatePoint$javajs_util_T3$javajs_util_T3$F$F$F$F$I.apply(this, [vC, vA, -d3, d1, valC, valA, 0]), p$1.interpolatePoint$javajs_util_T3$javajs_util_T3$F$F$F$F$I.apply(this, [vC, vB, -d3, d2, valC, valB, 1])]);
 else p=Clazz.array($I$(8), -1, [p$1.interpolateSphere$javajs_util_T3$javajs_util_T3$F$F$D$F$F$I.apply(this, [vC, vA, -d3, -d1, absD, valC, valA, 0]), p$1.interpolateSphere$javajs_util_T3$javajs_util_T3$F$F$D$F$F$I.apply(this, [vC, vB, -d3, -d2, absD, valC, valB, 1])]);
break;
}
this.doClear=true;
this.doGhost=isGhost;
this.doCap=andCap;
var bs;
if (isSlab) {
switch (test1) {
case 0:
this.doCap=false;
break;
case 7:
continue;
case 1:
case 6:
var tossBC=(test1 == 1);
if (tossBC || isGhost ) {
if (!p$1.getDE$FA$I$I$I$I$Z.apply(this, [this.fracs, 0, ia, ib, ic, tossBC])) break;
if (this.iD < 0) this.iD=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[0], this.values[0], this.sources[0], thisSet, mapEdge, ia, ib);
if (this.iE < 0) this.iE=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[1], this.values[1], this.sources[0], thisSet, mapEdge, ia, ic);
bs=(tossBC ? bsSlab : m.bsSlabGhost);
m.addPolygonV3$I$I$I$I$I$I$javajs_util_BS(ia, this.iD, this.iE, check1 & 5 | 2, iContour, 0, bs);
if (!isGhost) break;
}if (!p$1.getDE$FA$I$I$I$I$Z.apply(this, [this.fracs, 1, ia, ic, ib, tossBC])) break;
bs=(tossBC ? m.bsSlabGhost : bsSlab);
if (this.iE < 0) {
this.iE=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[0], this.values[0], this.sources[1], thisSet, mapEdge, ia, ib);
m.addPolygonV3$I$I$I$I$I$I$javajs_util_BS(this.iE, ib, ic, check1 & 3, iContour, 0, bs);
}if (this.iD < 0) {
this.iD=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[1], this.values[1], this.sources[2], thisSet, mapEdge, ia, ic);
m.addPolygonV3$I$I$I$I$I$I$javajs_util_BS(this.iD, this.iE, ic, check1 & 4 | 1, iContour, 0, bs);
}break;
case 5:
case 2:
var tossAC=(test1 == 2);
if (tossAC || isGhost ) {
if (!p$1.getDE$FA$I$I$I$I$Z.apply(this, [this.fracs, 0, ib, ic, ia, tossAC])) break;
bs=(tossAC ? bsSlab : m.bsSlabGhost);
if (this.iE < 0) this.iE=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[0], this.values[0], this.sources[1], thisSet, mapEdge, ib, ia);
if (this.iD < 0) this.iD=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[1], this.values[1], this.sources[1], thisSet, mapEdge, ib, ic);
m.addPolygonV3$I$I$I$I$I$I$javajs_util_BS(this.iE, ib, this.iD, check1 & 3 | 4, iContour, 0, bs);
if (!isGhost) break;
}if (!p$1.getDE$FA$I$I$I$I$Z.apply(this, [this.fracs, 1, ib, ia, ic, tossAC])) break;
bs=(tossAC ? m.bsSlabGhost : bsSlab);
if (this.iD < 0) {
this.iD=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[0], this.values[0], this.sources[0], thisSet, mapEdge, ib, ia);
m.addPolygonV3$I$I$I$I$I$I$javajs_util_BS(ia, this.iD, ic, check1 & 5, iContour, 0, bs);
}if (this.iE < 0) {
this.iE=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[1], this.values[1], this.sources[2], thisSet, mapEdge, ib, ic);
m.addPolygonV3$I$I$I$I$I$I$javajs_util_BS(this.iD, this.iE, ic, check1 & 2 | 1, iContour, 0, bs);
}break;
case 4:
case 3:
var tossAB=(test1 == 4);
if (tossAB || isGhost ) {
if (!p$1.getDE$FA$I$I$I$I$Z.apply(this, [this.fracs, 0, ic, ia, ib, tossAB])) break;
if (this.iD < 0) this.iD=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[0], this.values[0], this.sources[2], thisSet, mapEdge, ia, ic);
if (this.iE < 0) this.iE=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[1], this.values[1], this.sources[2], thisSet, mapEdge, ib, ic);
bs=(tossAB ? bsSlab : m.bsSlabGhost);
m.addPolygonV3$I$I$I$I$I$I$javajs_util_BS(this.iD, this.iE, ic, check1 & 6 | 1, iContour, 0, bs);
if (!isGhost) break;
}if (!p$1.getDE$FA$I$I$I$I$Z.apply(this, [this.fracs, 1, ic, ib, ia, tossAB])) break;
bs=(tossAB ? m.bsSlabGhost : bsSlab);
if (this.iE < 0) {
this.iE=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[0], this.values[0], this.sources[0], thisSet, mapEdge, ia, ic);
m.addPolygonV3$I$I$I$I$I$I$javajs_util_BS(ia, ib, this.iE, check1 & 5, iContour, 0, bs);
}if (this.iD < 0) {
this.iD=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(p[1], this.values[1], this.sources[1], thisSet, mapEdge, ib, ic);
m.addPolygonV3$I$I$I$I$I$I$javajs_util_BS(this.iE, ib, this.iD, check1 & 2 | 4, iContour, 0, bs);
}break;
}
if (this.doClear) {
bsSlab.clear$I(i);
if (this.doGhost) m.bsSlabGhost.set$I(i);
}if (this.doCap) this.capper.addEdge$I$I$I(this.iE, this.iD, thisSet);
} else if (p != null ) {
vData.addLast$O(p);
}}
if (andCap) this.capper.createCap$javajs_util_V3(this.norm);
if (!doClean) return;
var bsv=Clazz.new_($I$(3,1));
var bsp=Clazz.new_($I$(3,1));
for (var i=0; i < m.pc; i++) {
if (m.pis[i] == null ) continue;
bsp.set$I(i);
for (var j=0; j < 3; j++) bsv.set$I(m.pis[i][j]);

}
var n=0;
var nPoly=bsp.cardinality$();
if (nPoly != m.pc) {
var map=Clazz.array(Integer.TYPE, [m.vc]);
for (var i=0; i < m.vc; i++) if (bsv.get$I(i)) map[i]=n++;

var vTemp=Clazz.array($I$(8), [n]);
n=0;
for (var i=0; i < m.vc; i++) if (bsv.get$I(i)) vTemp[n++]=m.vs[i];

var pTemp=$I$(13).newInt2$I(nPoly);
nPoly=0;
for (var i=0; i < m.pc; i++) if (m.pis[i] != null ) {
for (var j=0; j < 3; j++) m.pis[i][j]=map[m.pis[i][j]];

pTemp[nPoly++]=m.pis[i];
}
m.vs=vTemp;
m.vc=n;
m.pis=pTemp;
m.pc=nPoly;
}});

Clazz.newMeth(C$, 'getDE$FA$I$I$I$I$Z', function (fracs, fD, i1, i2, i3, toss23) {
this.iD=C$.setPoint$FA$I$I$I(fracs, fD, i1, i2);
this.iE=C$.setPoint$FA$I$I$I(fracs, 1 - fD, i1, i3);
if (this.iD == i1 && this.iE == i1 ) {
this.doClear=toss23;
this.doCap=false;
return false;
}if (this.iD == i2 && this.iE == i3 ) {
this.doClear=!toss23;
return !this.doClear;
}if (this.iD == i1 || this.iE == i1 ) {
this.doClear=toss23;
if (this.iD < 0) {
this.iD=(toss23 ? i2 : i3);
} else if (this.iE < 0) {
this.iE=(toss23 ? i3 : i2);
}return this.doCap;
}this.doGhost=false;
return true;
}, p$1);

Clazz.newMeth(C$, 'setPoint$FA$I$I$I', function (fracs, i, i0, i1) {
return (fracs[i] == 0  ? i0 : fracs[i] == 1  ? i1 : -1);
}, 1);

Clazz.newMeth(C$, 'checkSlab$I$javajs_util_T3$F$F$javajs_util_BS', function (tokType, v, val, distance, bs) {
var d;
switch (tokType) {
case 3:
return (val >= 0  && bs.get$I((val|0))  ? 1 : -1);
case 32:
d=distance - val;
break;
case 64:
d=val - distance;
break;
case 134217750:
d=(v.dot$javajs_util_T3(this.norm) + this.wPlane) / this.dPlane;
break;
default:
var dmin=2147483647;
for (var i=this.pts.length; --i >= 0; ) {
d=this.pts[i].distance$javajs_util_T3(v);
if (d < dmin ) dmin=d;
}
d=(distance > 0  ? dmin - distance : -distance - dmin);
break;
}
return (Math.abs(d) < 1.0E-4  ? 0 : d);
}, p$1);

Clazz.newMeth(C$, 'interpolateSphere$javajs_util_T3$javajs_util_T3$F$F$D$F$F$I', function (v1, v2, d1, d2, absD, val1, val2, i) {
return p$1.interpolateFraction$javajs_util_T3$javajs_util_T3$F$F$F$I.apply(this, [v1, v2, $I$(14,"getSphericalInterpolationFraction$D$D$D$D",[absD, d1, d2, v1.distance$javajs_util_T3(v2)]), val1, val2, i]);
}, p$1);

Clazz.newMeth(C$, 'interpolatePoint$javajs_util_T3$javajs_util_T3$F$F$F$F$I', function (v1, v2, d1, d2, val1, val2, i) {
return p$1.interpolateFraction$javajs_util_T3$javajs_util_T3$F$F$F$I.apply(this, [v1, v2, d1 / (d1 + d2), val1, val2, i]);
}, p$1);

Clazz.newMeth(C$, 'interpolateFraction$javajs_util_T3$javajs_util_T3$F$F$F$I', function (v1, v2, f, val1, val2, i) {
if (f < 1.0E-4 ) f=0;
 else if (f > 0.9999 ) f=1;
this.fracs[i]=f;
this.values[i]=(val2 - val1) * f + val1;
return $I$(8,"new3$F$F$F",[v1.x + (v2.x - v1.x) * f, v1.y + (v2.y - v1.y) * f, v1.z + (v2.z - v1.z) * f]);
}, p$1);

Clazz.newMeth(C$, 'slabBrillouin$javajs_util_P3A', function (unitCellPoints) {
var m=this.m;
var vectors=(unitCellPoints == null  ? m.oabc : unitCellPoints);
if (vectors == null ) return;
var pts=Clazz.array($I$(8), [27]);
pts[0]=$I$(8).newP$javajs_util_T3(vectors[0]);
var pt=0;
for (var i=-1; i <= 1; i++) for (var j=-1; j <= 1; j++) for (var k=-1; k <= 1; k++) if (i != 0 || j != 0  || k != 0 ) {
pts[++pt]=$I$(8).newP$javajs_util_T3(pts[0]);
pts[pt].scaleAdd2$F$javajs_util_T3$javajs_util_T3(i, vectors[1], pts[pt]);
pts[pt].scaleAdd2$F$javajs_util_T3$javajs_util_T3(j, vectors[2], pts[pt]);
pts[pt].scaleAdd2$F$javajs_util_T3$javajs_util_T3(k, vectors[3], pts[pt]);
}


var ptTemp=Clazz.new_($I$(8,1));
var planeGammaK=Clazz.new_($I$(6,1));
var vGammaToKPoint=Clazz.new_($I$(7,1));
var vTemp=Clazz.new_($I$(7,1));
var bsMoved=Clazz.new_($I$(3,1));
var mapEdge=Clazz.new_($I$(12,1));
m.bsSlabGhost=Clazz.new_($I$(3,1));
for (var i=1; i < 27; i++) {
vGammaToKPoint.setT$javajs_util_T3(pts[i]);
$I$(10).getBisectingPlane$javajs_util_P3$javajs_util_V3$javajs_util_T3$javajs_util_V3$javajs_util_P4(pts[0], vGammaToKPoint, ptTemp, vTemp, planeGammaK);
this.getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z(1, planeGammaK, null, null, null, null, null, false, false, 134217750, true);
bsMoved.clearAll$();
mapEdge.clear$();
for (var j=m.bsSlabGhost.nextSetBit$I(0); j >= 0; j=m.bsSlabGhost.nextSetBit$I(j + 1)) {
if (m.setABC$I(j) == null ) continue;
var p=$I$(13).arrayCopyRangeI$IA$I$I(m.pis[j], 0, -1);
for (var k=0; k < 3; k++) {
var pk=p[k];
p[k]=this.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(m.vs[pk], m.vvs[pk], m.vertexSource == null  ? 0 : m.vertexSource[pk], m.vertexSets == null  ? 0 : m.vertexSets[pk], mapEdge, 0, pk);
if (pk != p[k] && bsMoved.get$I(pk) ) bsMoved.set$I(p[k]);
}
m.addPolygon$IA$javajs_util_BS(p, m.bsSlabDisplay);
for (var k=0; k < 3; k++) if (!bsMoved.get$I(p[k])) {
bsMoved.set$I(p[k]);
m.vs[p[k]].sub$javajs_util_T3(vGammaToKPoint);
}
}
if (m.bsSlabGhost.nextSetBit$I(0) >= 0) {
m.bsSlabGhost.clearAll$();
i=0;
}}
m.bsSlabGhost=null;
var bi=Clazz.new_($I$(9,1));
if (m.pc == 0) {
for (var i=m.vc; --i >= 0; ) bi.addBoundBoxPoint$javajs_util_T3(m.vs[i]);

} else {
var bsDone=Clazz.new_($I$(3,1));
for (var i=m.pc; --i >= 0; ) {
var f=m.setABC$I(i);
if (f != null ) for (var j=3; --j >= 0; ) if (!bsDone.get$I(f[j])) {
bi.addBoundBoxPoint$javajs_util_T3(m.vs[f[j]]);
bsDone.set$I(f[j]);
}
}
}m.setBoundingBox$javajs_util_P3A(bi.getBoundBoxPoints$Z(false));
});

Clazz.newMeth(C$, 'addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I', function (vertex, value, source, set, mapEdge, i1, i2) {
var key=this.getKey$I$I(i1, i2);
if (key.length$() > 0) {
var v=mapEdge.get$O(key);
if (v != null ) return v.intValue$();
}if (this.m.vertexSource != null ) {
if (this.m.vc >= this.m.vertexSource.length) this.m.vertexSource=$I$(13).doubleLengthI$IA(this.m.vertexSource);
this.m.vertexSource[this.m.vc]=source;
}if (this.m.vertexSets != null ) {
if (this.m.vc >= this.m.vertexSets.length) this.m.vertexSets=$I$(13).doubleLengthI$IA(this.m.vertexSets);
this.m.vertexSets[this.m.vc]=set;
}var i=this.m.addVCVal$javajs_util_T3$F$Z(vertex, value, true);
if (key.length$() > 0) mapEdge.put$O$O(key, Integer.valueOf$I(i));
return i;
});

Clazz.newMeth(C$, 'getKey$I$I', function (i1, i2) {
return (i1 < 0 ? "" : i1 > i2 ? i2 + "_" + i1  : i1 + "_" + i2 );
});

Clazz.newMeth(C$, 'addTriangle$I$I$I', function (ipt1, ipt2, ipt3) {
this.m.addPolygonV3$I$I$I$I$I$I$javajs_util_BS(ipt1, ipt2, ipt3, 0, 0, 0, this.m.bsSlabDisplay);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
