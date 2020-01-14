(function(){var P$=Clazz.newPackage("org.jmol.shape"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.V3','org.jmol.util.Normix','org.jmol.util.C','javajs.util.Measure','javajs.util.SB','javajs.util.PT','org.jmol.util.Escape','org.jmol.script.T','javajs.util.M3','org.jmol.util.BSUtil','javajs.util.BS','java.util.Hashtable','Boolean','javajs.util.AU','javajs.util.M4']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Mesh", null, 'org.jmol.util.MeshSurface');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.title=null;
this.meshColix=0;
this.normixes=null;
this.lineData=null;
this.thisID=null;
this.isValid=false;
this.scriptCommand=null;
this.colorCommand=null;
this.lattice=null;
this.symops=null;
this.symopNormixes=null;
this.visible=false;
this.lighting=0;
this.colorType=0;
this.haveXyPoints=false;
this.diameter=0;
this.width=0;
this.ptCenter=null;
this.linkedMesh=null;
this.vertexColorMap=null;
this.vAB=null;
this.vTemp=null;
this.color=0;
this.useColix=false;
this.unitCell=null;
this.scale3d=0;
this.index=0;
this.atomIndex=0;
this.modelIndex=0;
this.visibilityFlags=0;
this.insideOut=false;
this.checkByteCount=0;
this.normalsInverted=false;
this.showContourLines=false;
this.showPoints=false;
this.drawTriangles=false;
this.fillTriangles=false;
this.showTriangles=false;
this.frontOnly=false;
this.isShell=false;
this.isTwoSided=false;
this.havePlanarContours=false;
this.bsTemp=null;
this.colorDensity=false;
this.cappingObject=null;
this.slabbingObject=null;
this.volumeRenderPointSize=0;
this.connectedAtoms=null;
this.isModelConnected=false;
this.recalcAltVertices=false;
this.symopColixes=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isValid=true;
this.visible=true;
this.lighting=1073741958;
this.useColix=true;
this.scale3d=0;
this.atomIndex=-1;
this.modelIndex=-1;
this.showContourLines=false;
this.showPoints=false;
this.drawTriangles=false;
this.fillTriangles=true;
this.showTriangles=false;
this.frontOnly=false;
this.isShell=false;
this.isTwoSided=true;
this.havePlanarContours=false;
this.volumeRenderPointSize=0.15;
}, 1);

Clazz.newMeth(C$, 'setVisibilityFlags$I', function (n) {
this.visibilityFlags=n;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'mesh1$org_jmol_viewer_Viewer$S$H$I', function (vwr, thisID, colix, index) {
if ("+PREVIOUS_MESH+".equals$O(thisID)) thisID=null;
this.vwr=vwr;
this.thisID=thisID;
this.colix=colix;
this.index=index;
this.ptCenter=Clazz.new_($I$(1));
this.vAB=Clazz.new_($I$(2));
this.vTemp=Clazz.new_($I$(2));
return this;
});

Clazz.newMeth(C$, 'clear$S', function (meshType) {
this.clearMesh$S(meshType);
});

Clazz.newMeth(C$, 'clearMesh$S', function (meshType) {
this.altVertices=null;
this.bsDisplay=null;
this.bsSlabDisplay=null;
this.bsSlabGhost=null;
this.symops=null;
this.symopColixes=null;
this.cappingObject=null;
this.colix=23;
this.colorDensity=false;
this.connectedAtoms=null;
this.diameter=0;
this.drawTriangles=false;
this.fillTriangles=true;
this.frontOnly=false;
this.isShell=false;
this.havePlanarContours=false;
this.haveXyPoints=false;
this.isModelConnected=false;
this.isDrawPolygon=false;
this.isTwoSided=false;
this.lattice=null;
this.mat4=null;
this.normixes=null;
this.pis=null;
this.scale3d=0;
this.showContourLines=false;
this.showPoints=false;
this.showTriangles=false;
this.slabbingObject=null;
this.slabOptions=null;
this.oabc=null;
this.symopNormixes=null;
this.title=null;
this.unitCell=null;
this.useColix=true;
this.vertexCount0=this.polygonCount0=this.vc=this.pc=0;
this.vs=null;
this.vertexSource=null;
this.volumeRenderPointSize=0.15;
this.meshType=meshType;
});

Clazz.newMeth(C$, 'initialize$I$javajs_util_T3A$javajs_util_P4', function (lighting, vertices, plane) {
if (vertices == null ) vertices=this.vs;
var normals=this.getNormals$javajs_util_T3A$javajs_util_P4(vertices, plane);
this.setNormixes$javajs_util_V3A(normals);
this.lighting=1073741958;
if (this.insideOut) p$1.invertNormixes.apply(this, []);
if (this.isShell && !this.isTwoSided ) p$1.invertNormixes.apply(this, []);
this.setLighting$I(lighting);
});

Clazz.newMeth(C$, 'setNormixes$javajs_util_V3A', function (normals) {
if (normals == null ) return (this.normixes=null);
this.normixes=Clazz.array(Short.TYPE, [this.normixCount]);
if (this.bsTemp == null ) this.bsTemp=$I$(3).newVertexBitSet$();
if (this.haveXyPoints) for (var i=this.normixCount; --i >= 0; ) this.normixes[i]=9999;

 else for (var i=this.normixCount; --i >= 0; ) this.normixes[i]=$I$(3).getNormixV$javajs_util_V3$javajs_util_BS(normals[i], this.bsTemp);

return this.normixes;
});

Clazz.newMeth(C$, 'getNormals$javajs_util_T3A$javajs_util_P4', function (vertices, plane) {
this.normixCount=(this.isDrawPolygon ? this.pc : this.vc);
if (this.normixCount < 0) return null;
var normals=Clazz.array($I$(2), [this.normixCount]);
for (var i=this.normixCount; --i >= 0; ) normals[i]=Clazz.new_($I$(2));

if (plane == null ) {
this.sumVertexNormals$javajs_util_T3A$javajs_util_V3A(vertices, normals);
} else {
var normal=$I$(2).new3$F$F$F(plane.x, plane.y, plane.z);
for (var i=this.normixCount; --i >= 0; ) normals[i]=normal;

}if (!this.isDrawPolygon) for (var i=this.normixCount; --i >= 0; ) {
normals[i].normalize$();
}
return normals;
});

Clazz.newMeth(C$, 'setLighting$I', function (lighting) {
this.isTwoSided=(lighting == 1073741964);
if (lighting == this.lighting) return;
p$1.flipLighting$I.apply(this, [this.lighting]);
p$1.flipLighting$I.apply(this, [this.lighting=lighting]);
});

Clazz.newMeth(C$, 'flipLighting$I', function (lighting) {
if (lighting == 1073741964) for (var i=this.normixCount; --i >= 0; ) this.normixes[i]=(~this.normixes[i]|0);

 else if ((lighting == 1073741958) == this.insideOut ) p$1.invertNormixes.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'invertNormixes', function () {
$I$(3).setInverseNormixes$();
this.normalsInverted=!this.normalsInverted;
for (var i=this.normixCount; --i >= 0; ) this.normixes[i]=$I$(3).getInverseNormix$H(this.normixes[i]);

}, p$1);

Clazz.newMeth(C$, 'setTranslucent$Z$F', function (isTranslucent, iLevel) {
this.colix=$I$(4).getColixTranslucent3$H$Z$F(this.colix, isTranslucent, iLevel);
});

Clazz.newMeth(C$, 'sumVertexNormals$javajs_util_T3A$javajs_util_V3A', function (vertices, normals) {
C$.sumVertexNormals2$org_jmol_shape_Mesh$javajs_util_T3A$javajs_util_V3A(this, vertices, normals);
});

Clazz.newMeth(C$, 'sumVertexNormals2$org_jmol_shape_Mesh$javajs_util_T3A$javajs_util_V3A', function (m, vertices, normals) {
var adjustment=m.checkByteCount;
var min=m.getMinDistance2ForVertexGrouping$();
for (var i=m.pc; --i >= 0; ) {
try {
var face=m.setABC$I(i);
if (face == null ) continue;
var vA=vertices[face[0]];
var vB=vertices[face[1]];
var vC=vertices[face[2]];
if (vA.distanceSquared$javajs_util_T3(vB) < min  || vB.distanceSquared$javajs_util_T3(vC) < min   || vA.distanceSquared$javajs_util_T3(vC) < min  ) continue;
$I$(5).calcNormalizedNormal$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(vA, vB, vC, m.vTemp, m.vAB);
if (m.isDrawPolygon) {
normals[i].setT$javajs_util_T3(m.vTemp);
} else {
var l=m.vTemp.length$();
if (l > 0.9  && l < 1.1  ) for (var j=face.length - adjustment; --j >= 0; ) {
var k=face[j];
normals[k].add$javajs_util_T3(m.vTemp);
}
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$O(e);
} else {
throw e;
}
}
}
}, 1);

Clazz.newMeth(C$, 'getMinDistance2ForVertexGrouping$', function () {
return 1.0E-8;
});

Clazz.newMeth(C$, 'getState$S', function (type) {
var s=Clazz.new_($I$(6));
if (this.isValid) {
s.append$S(type);
if (!type.equals$O("mo") && !type.equals$O("nbo") ) s.append$S(" ID ").append$S($I$(7).esc$S(this.thisID));
if (this.lattice != null ) s.append$S(" lattice ").append$S($I$(8).eP$javajs_util_T3(this.lattice));
if (this.meshColix != 0) s.append$S(" color mesh ").append$S($I$(4).getHexCode$H(this.meshColix));
s.append$S(this.getRendering$());
if (!this.visible) s.append$S(" hidden");
if (this.bsDisplay != null ) {
s.append$S(";\n  ").append$S(type);
if (!type.equals$O("mo") && !type.equals$O("nbo") ) s.append$S(" ID ").append$S($I$(7).esc$S(this.thisID));
s.append$S(" display " + $I$(8).eBS$javajs_util_BS(this.bsDisplay));
}}return s.toString();
});

Clazz.newMeth(C$, 'getRendering$', function () {
var s=Clazz.new_($I$(6));
s.append$S(this.fillTriangles ? " fill" : " noFill");
s.append$S(this.drawTriangles ? " mesh" : " noMesh");
s.append$S(this.showPoints ? " dots" : " noDots");
s.append$S(this.frontOnly ? " frontOnly" : " notFrontOnly");
if (this.showContourLines) s.append$S(" contourlines");
if (this.showTriangles) s.append$S(" triangles");
s.append$S(" ").append$S($I$(9).nameOf$I(this.lighting));
if (this.isShell && !this.isTwoSided ) s.append$S(" backshell");
return s.toString();
});

Clazz.newMeth(C$, 'getOffsetVertices$javajs_util_P4', function (thePlane) {
if (this.altVertices != null  && !this.recalcAltVertices ) return this.altVertices;
this.altVertices=Clazz.array($I$(1), [this.vc]);
for (var i=0; i < this.vc; i++) this.altVertices[i]=$I$(1).newP$javajs_util_T3(this.vs[i]);

var normal=null;
var val=0;
if (this.scale3d != 0  && this.vvs != null   && thePlane != null  ) {
normal=$I$(2).new3$F$F$F(thePlane.x, thePlane.y, thePlane.z);
normal.normalize$();
normal.scale$F(this.scale3d);
if (this.mat4 != null ) {
var m3=Clazz.new_($I$(10));
this.mat4.getRotationScale$javajs_util_M3(m3);
m3.rotate$javajs_util_T3(normal);
}}for (var i=0; i < this.vc; i++) {
if (this.vvs != null  && Float.isNaN$F(val=this.vvs[i]) ) continue;
var pt=this.altVertices[i];
if (this.mat4 != null ) this.mat4.rotTrans$javajs_util_T3(pt);
if (normal != null  && val != 0  ) pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(val, normal, pt);
}
this.initialize$I$javajs_util_T3A$javajs_util_P4(this.lighting, this.altVertices, null);
this.recalcAltVertices=false;
return this.altVertices;
});

Clazz.newMeth(C$, 'setShowWithin$javajs_util_Lst$F$Z', function (showWithinPoints, showWithinDistance2, isWithinNot) {
if (showWithinPoints.size$() == 0) {
this.bsDisplay=(isWithinNot ? $I$(11).newBitSet2$I$I(0, this.vc) : null);
return;
}this.bsDisplay=Clazz.new_($I$(12));
for (var i=0; i < this.vc; i++) if (C$.checkWithin$javajs_util_T3$javajs_util_Lst$F$Z(this.vs[i], showWithinPoints, showWithinDistance2, isWithinNot)) this.bsDisplay.set$I(i);

});

Clazz.newMeth(C$, 'checkWithin$javajs_util_T3$javajs_util_Lst$F$Z', function (pti, withinPoints, withinDistance2, isWithinNot) {
if (withinPoints.size$() != 0) for (var i=withinPoints.size$(); --i >= 0; ) if (pti.distanceSquared$javajs_util_T3(withinPoints.get$I(i)) <= withinDistance2 ) return !isWithinNot;

return isWithinNot;
}, 1);

Clazz.newMeth(C$, 'getVertexIndexFromNumber$I', function (vertexIndex) {
if (--vertexIndex < 0) vertexIndex=this.vc + vertexIndex;
return (this.vc <= vertexIndex ? this.vc - 1 : vertexIndex < 0 ? 0 : vertexIndex);
});

Clazz.newMeth(C$, 'getVisibleVertexBitSet$', function () {
return this.getVisibleVBS$();
});

Clazz.newMeth(C$, 'getVisibleVBS$', function () {
var bs=Clazz.new_($I$(12));
if (this.pc == 0 && this.bsSlabDisplay != null  ) $I$(11).copy2$javajs_util_BS$javajs_util_BS(this.bsSlabDisplay, bs);
 else for (var i=this.pc; --i >= 0; ) if (this.bsSlabDisplay == null  || this.bsSlabDisplay.get$I(i) ) {
var vertexIndexes=this.pis[i];
if (vertexIndexes == null ) continue;
bs.set$I(vertexIndexes[0]);
bs.set$I(vertexIndexes[1]);
bs.set$I(vertexIndexes[2]);
}
return bs;
});

Clazz.newMeth(C$, 'setTokenProperty$I$Z', function (tokProp, bProp) {
switch (tokProp) {
case 1073742058:
case 1073741960:
this.frontOnly=(tokProp == 1073741960 ? bProp : !bProp);
return;
case 1073742057:
case 1073741862:
if (!this.isTwoSided && this.isShell != (tokProp == 1073741862 ? bProp : !bProp)  ) {
this.isShell=!this.isShell;
p$1.invertNormixes.apply(this, []);
}return;
case 1073741958:
case 1073741861:
case 1073741964:
this.setLighting$I(tokProp);
return;
case 1073742042:
case 1112150019:
this.showPoints=(tokProp == 1112150019 ? bProp : !bProp);
return;
case 1073742052:
case 1073742018:
this.drawTriangles=(tokProp == 1073742018 ? bProp : !bProp);
return;
case 1073742046:
case 1073741938:
this.fillTriangles=(tokProp == 1073741938 ? bProp : !bProp);
return;
case 1073742060:
case 1073742182:
this.showTriangles=(tokProp == 1073742182 ? bProp : !bProp);
return;
case 1073742039:
case 1073741898:
this.showContourLines=(tokProp == 1073741898 ? bProp : !bProp);
return;
}
});

Clazz.newMeth(C$, 'getInfo$Z', function (isAll) {
var info=Clazz.new_($I$(13));
info.put$TK$TV("id", this.thisID);
info.put$TK$TV("vertexCount", Integer.valueOf$I(this.vc));
info.put$TK$TV("polygonCount", Integer.valueOf$I(this.pc));
info.put$TK$TV("haveQuads", $I$(14).valueOf$Z(this.haveQuads));
info.put$TK$TV("haveValues", $I$(14).valueOf$Z(this.vvs != null ));
if (isAll) {
if (this.vc > 0) {
info.put$TK$TV("vertices", $I$(15).arrayCopyPt$javajs_util_T3A$I(this.vs, this.vc));
if (this.bsSlabDisplay != null ) info.put$TK$TV("bsVertices", this.getVisibleVBS$());
}if (this.vvs != null ) info.put$TK$TV("vertexValues", $I$(15).arrayCopyF$FA$I(this.vvs, this.vc));
if (this.pc > 0) {
info.put$TK$TV("polygons", $I$(15).arrayCopyII$IAA$I(this.pis, this.pc));
if (this.bsSlabDisplay != null ) info.put$TK$TV("bsPolygons", this.bsSlabDisplay);
}}return info;
});

Clazz.newMeth(C$, 'getBoundingBox$', function () {
return null;
});

Clazz.newMeth(C$, 'getUnitCell$', function () {
return null;
});

Clazz.newMeth(C$, 'rotateTranslate$javajs_util_Quat$javajs_util_T3$Z', function (q, offset, isAbsolute) {
if (q == null  && offset == null  ) {
this.mat4=null;
return;
}var m3=Clazz.new_($I$(10));
var v=Clazz.new_($I$(2));
if (this.mat4 == null ) this.mat4=$I$(16).newM4$javajs_util_M4(null);
this.mat4.getRotationScale$javajs_util_M3(m3);
this.mat4.getTranslation$javajs_util_T3(v);
if (q == null ) {
if (isAbsolute) v.setT$javajs_util_T3(offset);
 else v.add$javajs_util_T3(offset);
} else {
m3.mul$javajs_util_M3(q.getMatrix$());
}this.mat4=$I$(16).newMV$javajs_util_M3$javajs_util_T3(m3, v);
this.recalcAltVertices=true;
});

Clazz.newMeth(C$, 'getNormalsTemp$', function () {
return (this.normalsTemp == null  ? (this.normalsTemp=this.getNormals$javajs_util_T3A$javajs_util_P4(this.vs, null)) : this.normalsTemp);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
