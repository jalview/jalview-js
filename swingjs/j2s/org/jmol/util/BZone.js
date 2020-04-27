(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.Lst','javajs.util.P4','javajs.util.V3','javajs.util.Measure','java.util.Hashtable','Boolean','org.jmol.bspt.PointIterator']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BZone");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bzDrawPointsAndEdges=false;
this.bzSavePmeshes=false;
this.bzones=null;
this.bzGamma=Clazz.new_($I$(1,1));
this.bzFaceCenters=null;
this.bzLatticePts=null;
this.bzLatticePtsAll=null;
this.bzPlanePts=null;
this.subzones=null;
this.volume=0;
this.ret=Clazz.array(java.lang.Object, [1]);
},1);

C$.$fields$=[['Z',['bzDrawPointsAndEdges','bzSavePmeshes','isWignerSeitz'],'D',['totalArea'],'F',['volume'],'I',['index','zoneIndex'],'S',['id','color','polyid'],'O',['bzones','javajs.util.Lst','bzGamma','javajs.util.P3','bzFaceCenters','javajs.util.Lst','+bzLatticePts','bzLatticePtsAll','javajs.util.P3[]','bzPlanePts','javajs.util.Lst','+subzones','vwr','org.jmol.viewer.Viewer','eval','org.jmol.api.JmolScriptEvaluator','latticePts','javajs.util.Lst','+newLatticePts','+newPlanePts','+planes','+newPlanes','offset','javajs.util.P3','+center','planesUnused','javajs.util.Lst','+ptsUnused','+pmeshes','+areas','+faces','+faceIndices','+faceCenters','ret','Object[]','pts','javajs.util.P3[]']]
,['O',['bzColors','String[]','ptInner','javajs.util.P3']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
this.eval=vwr.eval;
return this;
});

Clazz.newMeth(C$, 'createBZ$I$OA$Z$S$F', function (zone, array, isK, id, scale) {
if (this.vwr == null ) return;
if (array != null ) p$1.demoBZ$OA$Z.apply(this, [array, isK]);
 else p$1.createAllBZs$I$Z$S$F.apply(this, [zone, true, id, scale]);
});

Clazz.newMeth(C$, 'createWS$S', function (id) {
if (this.vwr == null ) return;
p$1.createAllBZs$I$Z$S$F.apply(this, [-1, false, id, 1]);
});

Clazz.newMeth(C$, 'createAllBZs$I$Z$S$F', function (n, discardPrev, id, scale) {
p$1.cmd$S.apply(this, ["unitcell reset"]);
p$1.cmd$S.apply(this, ["unitcell primitive"]);
if (n < 0) {
n=-n;
this.isWignerSeitz=true;
} else {
if (n == 0) n=1;
if (Float.isNaN$F(scale)) scale=2;
p$1.cmd$S.apply(this, ["unitcell 'reciprocal' " + new Float(scale).toString()]);
}p$1.cmd$S.apply(this, ["polyhedra pbz* delete"]);
p$1.cmd$S.apply(this, ["pmesh fbz* delete"]);
if (!this.isWignerSeitz) {
p$1.cmd$S.apply(this, ["axes unitcell; axes on; axes scale 2.0;axes 0.01;axes labels \"b1\" \"b2\" \"b3\" \"\""]);
}this.bzones=Clazz.new_($I$(2,1));
this.bzLatticePts=Clazz.new_($I$(2,1));
this.bzPlanePts=Clazz.new_($I$(2,1));
this.bzFaceCenters=Clazz.new_($I$(2,1));
var wasPrecise=this.vwr.getBoolean$I(603979874);
this.vwr.setBooleanProperty$S$Z("legacyJavaFloat", true);
p$1.getLatticePoints$I.apply(this, [n]);
this.bzones.addLast$O(null);
for (var i=1; i <= n; i++) {
this.bzones.add$I$O(i, p$1.newBZ$I.apply(this, [i]));
p$1.createNextBZ$org_jmol_util_BZone$org_jmol_util_BZone$S.apply(this, [this.bzones.get$I(i), this.bzones.get$I(i - 1), id]);
if (discardPrev && i > 1 ) p$1.cmd$S.apply(this, ["polyhedra id \"pbz" + (i - 1) + "_*\" delete" ]);
}
this.vwr.setBooleanProperty$S$Z("legacyJavaFloat", wasPrecise);
if (this.bzSavePmeshes) {
p$1.cmd$S.apply(this, ["polyhedra * off;pmesh * on;"]);
}}, p$1);

Clazz.newMeth(C$, 'createNextBZ$org_jmol_util_BZone$org_jmol_util_BZone$S', function (zone, zonePrev, id) {
p$1.getNewLatticePoints$org_jmol_util_BZone.apply(this, [zone]);
if (this.bzDrawPointsAndEdges) p$1.drawZoneCenters$org_jmol_util_BZone.apply(this, [zone]);
p$1.getSubzones$org_jmol_util_BZone$org_jmol_util_BZone.apply(this, [zone, zonePrev]);
for (var i=0; i < zone.subzones.size$(); i++) {
var subzone=zone.subzones.get$I(i);
if (!p$1.getSubzonePmeshes$org_jmol_util_BZone.apply(this, [subzone])) continue;
if (this.bzDrawPointsAndEdges) p$1.drawSubzonePolygons$org_jmol_util_BZone.apply(this, [subzone]);
p$1.createSubzonePolyhedron$org_jmol_util_BZone$S.apply(this, [subzone, id]);
}
p$1.finalizeZone$org_jmol_util_BZone.apply(this, [zone]);
}, p$1);

Clazz.newMeth(C$, 'newSubZone$org_jmol_util_BZone$S$I', function (zone, id, index) {
var subzone=Clazz.new_(C$);
subzone.index=index;
subzone.id=zone.id + id + index + "_" ;
subzone.zoneIndex=zone.index;
subzone.newLatticePts=zone.newLatticePts;
subzone.planes=Clazz.new_($I$(2,1));
subzone.latticePts=Clazz.new_($I$(2,1));
subzone.planesUnused=Clazz.new_($I$(2,1));
subzone.ptsUnused=Clazz.new_($I$(2,1));
subzone.pmeshes=Clazz.new_($I$(2,1));
subzone.areas=Clazz.new_($I$(2,1));
subzone.faces=Clazz.new_($I$(2,1));
subzone.faceIndices=Clazz.new_($I$(2,1));
subzone.faceCenters=Clazz.new_($I$(2,1));
subzone.volume=0;
subzone.color=zone.color;
subzone.offset=Clazz.new_($I$(1,1));
subzone.center=Clazz.new_($I$(1,1));
zone.subzones.addLast$O(subzone);
return subzone;
}, p$1);

Clazz.newMeth(C$, 'getSubzones$org_jmol_util_BZone$org_jmol_util_BZone', function (zone, zonePrev) {
if (zone.index == 1) {
var subzone=p$1.newSubZone$org_jmol_util_BZone$S$I.apply(this, [zone, "", 1]);
subzone.latticePts=zone.newLatticePts;
subzone.planes=zone.newPlanes;
return;
}for (var i=0; i < zonePrev.subzones.size$(); i++) {
var planesNew=zone.newPlanes;
var ptsNew=zone.newLatticePts;
var prev=zonePrev.subzones.get$I(i);
var planesPrev=prev.planes;
var ptsPrev=prev.latticePts;
var planesUnusedPrev=prev.planesUnused;
var ptsUnusedPrev=prev.ptsUnused;
var centersPrev=prev.faceCenters;
var id=prev.id.substring$I(4);
for (var j0=(zonePrev.index == 1 ? 0 : 1), j=j0; j < planesPrev.size$(); j++) {
if (j0 == 1 && p$1.within$F$javajs_util_P3$javajs_util_Lst.apply(this, [0.01, centersPrev.get$I(j), this.bzFaceCenters]).size$() > 1 ) continue;
var subzone=p$1.newSubZone$org_jmol_util_BZone$S$I.apply(this, [zone, id, j + 1]);
p$1.addBZ$javajs_util_Lst$javajs_util_Lst$javajs_util_Lst$javajs_util_Lst$I.apply(this, [subzone.planes, subzone.latticePts, planesPrev, ptsPrev, j]);
p$1.addBZ$javajs_util_Lst$javajs_util_Lst$javajs_util_Lst$javajs_util_Lst$I.apply(this, [subzone.planes, subzone.latticePts, planesUnusedPrev, ptsUnusedPrev, -1]);
p$1.addBZ$javajs_util_Lst$javajs_util_Lst$javajs_util_Lst$javajs_util_Lst$I.apply(this, [subzone.planes, subzone.latticePts, planesNew, ptsNew, -1]);
}
}
}, p$1);

Clazz.newMeth(C$, 'addBZ$javajs_util_Lst$javajs_util_Lst$javajs_util_Lst$javajs_util_Lst$I', function (planes, pts, planes0, pts0, j) {
if (j >= 0) {
var pt4=(function(a,f){return f.apply(null,a)})([planes0.get$I(j)],$I$(3).newPt$javajs_util_P4);
pt4.scale4$F(-1.0);
planes.addLast$O(pt4);
pts.addLast$O(pts0.get$I(j));
}var n=planes0.size$();
for (var k=0; k < n; k++) {
if (k != j) {
planes.addLast$O(planes0.get$I(k));
pts.addLast$O(pts0.get$I(k));
}}
}, p$1);

Clazz.newMeth(C$, 'getNewLatticePoints$org_jmol_util_BZone', function (zone) {
var unusedPts=Clazz.new_($I$(2,1));
var unusedLatticePts=Clazz.new_($I$(2,1));
var centers=zone.newPlanePts;
var zoneLPs=zone.newLatticePts;
var planes=zone.newPlanes;
var ap;
var al;
for (var i=0; i < this.bzPlanePts.size$(); i++) {
var p=this.bzPlanePts.get$I(i);
var center=$I$(1).newP$javajs_util_T3(p);
center.scale$F(0.5);
var radius=0.501 * p.length$();
var inSphere=p$1.within$F$javajs_util_P3$javajs_util_Lst.apply(this, [radius, center, this.bzPlanePts]);
if (inSphere.size$() == 1) {
ap=centers;
al=zoneLPs;
planes.addLast$O(p$1.plane$javajs_util_P3$javajs_util_P3$F.apply(this, [this.bzGamma, p, 1]));
} else {
ap=unusedPts;
al=unusedLatticePts;
}ap.addLast$O(p);
al.addLast$O(this.bzLatticePts.get$I(i));
}
this.bzPlanePts=unusedPts;
this.bzLatticePts=unusedLatticePts;
}, p$1);

Clazz.newMeth(C$, 'plane$javajs_util_P3$javajs_util_P3$F', function (pt1, pt2, f) {
var norm=$I$(4).newVsub$javajs_util_T3$javajs_util_T3(pt2, pt1);
var pt3=Clazz.new_($I$(1,1));
pt3.scaleAdd2$F$javajs_util_T3$javajs_util_T3(f, norm, pt1);
var plane=Clazz.new_($I$(3,1));
$I$(5).getPlaneThroughPoint$javajs_util_T3$javajs_util_V3$javajs_util_P4(pt3, norm, plane);
return plane;
}, p$1);

Clazz.newMeth(C$, 'within$F$javajs_util_P3$javajs_util_Lst', function (radius, center, pts) {
var ret=Clazz.new_($I$(2,1));
var r2=radius * radius;
for (var i=0, n=pts.size$(); i < n; i++) {
var pt=pts.get$I(i);
if (center.distanceSquared$javajs_util_T3(pt) < r2 ) ret.addLast$O(pt);
}
return ret;
}, p$1);

Clazz.newMeth(C$, 'newBZ$I', function (i) {
var bzone=Clazz.new_(C$);
bzone.id="bz" + i + "_" ;
bzone.index=i;
bzone.color=p$1.bzColor$I.apply(this, [i]);
bzone.subzones=Clazz.new_($I$(2,1));
bzone.newLatticePts=Clazz.new_($I$(2,1));
bzone.newPlanePts=Clazz.new_($I$(2,1));
bzone.newPlanes=Clazz.new_($I$(2,1));
bzone.volume=0;
return bzone;
}, p$1);

Clazz.newMeth(C$, 'bzColor$I', function (i) {
return C$.bzColors[(i - 1) % C$.bzColors.length];
}, p$1);

Clazz.newMeth(C$, 'getLatticePoints$I', function (n) {
var minmax=Clazz.array(Integer.TYPE, [3, 3]);
var pt=Clazz.new_($I$(1,1));
var abc=Clazz.array(Float.TYPE, -1, [p$1.newPoint$I$I$I$javajs_util_P3.apply(this, [1, 0, 0, pt]).length$(), p$1.newPoint$I$I$I$javajs_util_P3.apply(this, [0, 1, 0, pt]).length$(), p$1.newPoint$I$I$I$javajs_util_P3.apply(this, [0, 0, 1, pt]).length$()]);
var abcmax=Math.max(abc[0], Math.max(abc[1], abc[2]));
for (var i=0; i < 3; i++) {
var m=((n * abcmax / abc[i])|0);
minmax[i]=Clazz.array(Integer.TYPE, -1, [-m, m]);
}
var pts=Clazz.new_($I$(2,1));
for (var i=minmax[0][0]; i <= minmax[0][1]; i++) {
for (var j=minmax[1][0]; j <= minmax[1][1]; j++) {
for (var k=minmax[2][0]; k <= minmax[2][1]; k++) {
if (i != 0 || j != 0  || k != 0 ) {
var lppt=p$1.newPoint$I$I$I$javajs_util_P3.apply(this, [i, j, k, Clazz.new_($I$(1,1))]);
pts.addLast$O($I$(1).newP$javajs_util_T3(lppt));
this.bzLatticePts.addLast$O(lppt);
var ppt=$I$(1).newP$javajs_util_T3(lppt);
ppt.scale$F(0.5);
this.bzPlanePts.addLast$O(ppt);
System.out.println$S("draw ID 'pt" + i + j + k + "' " + lppt );
}}
}
}
this.bzLatticePtsAll=pts.toArray$OA(Clazz.array($I$(1), [pts.size$()]));
}, p$1);

Clazz.newMeth(C$, 'newPoint$I$I$I$javajs_util_P3', function (i, j, k, pt) {
pt.x=i;
pt.y=j;
pt.z=k;
this.vwr.toCartesian$javajs_util_T3$Z(pt, false);
return pt;
}, p$1);

Clazz.newMeth(C$, 'cmd$S', function (cmd) {
System.out.println$S(cmd);
try {
this.eval.runScript$S(cmd);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'demoBZ$OA$Z', function (array, isK) {
}, p$1);

Clazz.newMeth(C$, 'getSubzonePmeshes$org_jmol_util_BZone', function (subzone) {
this.planes=subzone.planes;
this.latticePts=subzone.latticePts;
this.planesUnused=subzone.planesUnused;
this.ptsUnused=subzone.ptsUnused;
this.faces=subzone.faces;
this.faceCenters=subzone.faceCenters;
var nPlanes=this.planes.size$();
var planesUsed=Clazz.new_($I$(2,1));
var ptsUsed=Clazz.new_($I$(2,1));
var totalArea=0;
for (var i=0; i < nPlanes; i++) {
var pid="f" + subzone.id + i ;
p$1.cmd$S.apply(this, ["pmesh ID " + pid + " silent resolution 0.001 boundingbox {-2/1 -2/1 -2/1} {2/1 2/1 2/1} plane   " + p$1.toScript$javajs_util_P4.apply(this, [this.planes.get$I(i)]) + " off" ]);
var area=0;
for (var j=0; j < nPlanes; j++) {
if (j == i) continue;
p$1.cmd$S.apply(this, ["pmesh slab plane " + p$1.toScript$javajs_util_P4.apply(this, [this.planes.get$I(j)])]);
var a=p$1.getProperty$S$S.apply(this, [pid, "area"]);
area=(a == null  ? 0 : a[0]);
if (area == 0 ) {
break;
}totalArea += area;
}
var a=null;
var face=null;
if (area > 0 ) {
face=p$1.getProperty$S$S.apply(this, [pid, "face"]);
a=p$1.average$javajs_util_P3A.apply(this, [face]);
if (i == 0 && p$1.within$F$javajs_util_P3$javajs_util_Lst.apply(this, [0.01, a, this.bzFaceCenters]).size$() >= 2 ) {
area=0;
totalArea=0;
i=nPlanes;
}}if (area > 0 ) {
this.faces.addLast$O(p$1.cleanFace$javajs_util_P3A.apply(this, [face]));
this.faceCenters.addLast$O(a);
this.bzFaceCenters.addLast$O(a);
if (this.bzSavePmeshes) {
subzone.pmeshes.addLast$O(pid);
} else {
p$1.cmd$S.apply(this, ["pmesh ID " + pid + " delete" ]);
}planesUsed.addLast$O(this.planes.get$I(i));
ptsUsed.addLast$O(this.latticePts.get$I(i));
subzone.areas.addLast$O(Double.valueOf$D(area));
} else {
p$1.cmd$S.apply(this, ["pmesh ID " + pid + " delete" ]);
this.planesUnused.addLast$O(this.planes.get$I(i));
this.ptsUnused.addLast$O(this.latticePts.get$I(i));
}subzone.planes=planesUsed;
subzone.latticePts=ptsUsed;
}
subzone.totalArea=totalArea;
return (totalArea > 0 );
}, p$1);

Clazz.newMeth(C$, 'toScript$javajs_util_P4', function (p4) {
return "{" + new Float(p4.x).toString() + " " + new Float(p4.y).toString() + " " + new Float(p4.z).toString() + " " + new Float(p4.w).toString() + "}" ;
}, p$1);

Clazz.newMeth(C$, 'getProperty$S$S', function (name, key) {
var data=Clazz.array(java.lang.Object, [3]);
var shapeID;
shapeID=this.vwr.shm.getShapeIdFromObjectName$S(name);
if (shapeID >= 0) {
data[0]=name;
this.vwr.shm.getShapePropertyData$I$S$OA(shapeID, "index", data);
if (data[1] != null  && !key.equals$O("index") ) {
var index=(data[1]).intValue$();
data[1]=this.vwr.shm.getShapePropertyIndex$I$S$I(shapeID, key.intern$(), index);
}}return data[1];
}, p$1);

Clazz.newMeth(C$, 'createSubzonePolyhedron$org_jmol_util_BZone$S', function (subzone, id) {
if (id == null ) id="p" + subzone.id;
subzone.polyid=id;
var apts=p$1.join$javajs_util_Lst.apply(this, [subzone.faces]);
var pts=p$1.cleanFace$javajs_util_P3A.apply(this, [apts]);
subzone.pts=pts;
subzone.center=p$1.average$javajs_util_P3A.apply(this, [pts]);
subzone.offset=p$1.closest$javajs_util_P3$javajs_util_P3A.apply(this, [subzone.center, this.bzLatticePtsAll]);
subzone.faceIndices=Clazz.new_($I$(2,1));
var ifaces=subzone.faceIndices;
var faces=subzone.faces;
for (var i=0, n=faces.size$(); i < n; i++) {
ifaces.addLast$O(p$1.faceIndices$javajs_util_P3A$javajs_util_P3A.apply(this, [faces.get$I(i), pts]));
}
for (var i=ifaces.size$(); --i >= 0; ) {
if (ifaces.get$I(i).length < 3) {
subzone.faces.removeItemAt$I(i);
subzone.faceIndices.removeItemAt$I(i);
subzone.faceCenters.removeItemAt$I(i);
subzone.planes.removeItemAt$I(i);
}}
var p=Clazz.new_($I$(6,1));
p.put$O$O("id", id);
p.put$O$O("center", subzone.center);
var lst=Clazz.new_($I$(2,1));
for (var i=0, n=pts.length; i < n; i++) lst.addLast$O(pts[i]);

p.put$O$O("vertices", lst);
p.put$O$O("faces", ifaces);
p.put$O$O("color", subzone.color);
this.vwr.setShapeProperty$I$S$O(21, "init", $I$(7).TRUE);
this.vwr.setShapeProperty$I$S$O(21, "info", p);
this.vwr.setShapeProperty$I$S$O(21, "generate", null);
this.vwr.setShapeProperty$I$S$O(21, "init", $I$(7).FALSE);
if (this.bzDrawPointsAndEdges) {
p$1.cmd$S.apply(this, ["color $" + id + " translucent" ]);
p$1.cmd$S.apply(this, ["draw pts points " + pts + " dots nofill nomesh" ]);
}}, p$1);

Clazz.newMeth(C$, 'faceIndices$javajs_util_P3A$javajs_util_P3A', function (p3s, pts) {
$I$(8).withinDistPoints$F$javajs_util_P3$javajs_util_P3A$javajs_util_P3A$OA(0, null, pts, p3s, this.ret);
return this.ret[0];
}, p$1);

Clazz.newMeth(C$, 'closest$javajs_util_P3$javajs_util_P3A', function (center, ap3) {
$I$(8).withinDistPoints$F$javajs_util_P3$javajs_util_P3A$javajs_util_P3A$OA(0, center, ap3, null, this.ret);
return this.ret[0];
}, p$1);

Clazz.newMeth(C$, 'cleanFace$javajs_util_P3A', function (face) {
$I$(8).withinDistPoints$F$javajs_util_P3$javajs_util_P3A$javajs_util_P3A$OA(0.01, C$.ptInner, face, null, this.ret);
var l=this.ret[0];
return l.toArray$OA(Clazz.array($I$(1), [l.size$()]));
}, p$1);

Clazz.newMeth(C$, 'average$javajs_util_P3A', function (face) {
var a=Clazz.new_($I$(1,1));
for (var i=face.length; --i >= 0; ) a.add$javajs_util_T3(face[i]);

a.scale$F(1.0 / face.length);
return a;
}, p$1);

Clazz.newMeth(C$, 'join$javajs_util_Lst', function (faces) {
var n=0;
for (var i=faces.size$(); --i >= 0; ) n+=faces.get$I(i).length;

var pts=Clazz.array($I$(1), [n]);
n=0;
for (var i=faces.size$(); --i >= 0; ) {
var face=faces.get$I(i);
for (var j=face.length; --j >= 0; ) pts[n++]=face[j];

}
return pts;
}, p$1);

Clazz.newMeth(C$, 'drawZoneCenters$org_jmol_util_BZone', function (zone) {
}, p$1);

Clazz.newMeth(C$, 'drawSubzonePolygons$org_jmol_util_BZone', function (subzone) {
}, p$1);

Clazz.newMeth(C$, 'finalizeZone$org_jmol_util_BZone', function (zone) {
for (var i=zone.subzones.size$(); --i >= 0; ) if (zone.subzones.get$I(i).totalArea == 0 ) zone.subzones.removeItemAt$I(i);

}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.bzColors=Clazz.array(String, -1, ["red", "green", "skyblue", "orange", "yellow", "indigo", "violet"]);
C$.ptInner=$I$(1).new3$F$F$F(NaN, 0, 0);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
