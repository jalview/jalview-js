(function(){var P$=Clazz.newPackage("org.jmol.renderbio"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.A4','javajs.util.P3','javajs.util.M3','javajs.util.BS','org.jmol.util.Logger','org.jmol.shape.Mesh','org.jmol.util.GData','org.jmol.util.Normix']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BioMeshRenderer", null, 'org.jmol.render.MeshRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.meshes=null;
this.meshReady=null;
this.bsRenderMesh=null;
this.bsr=null;
this.doCap0=false;
this.doCap1=false;
this.controlHermites=null;
this.wingHermites=null;
this.radiusHermites=null;
this.norm=null;
this.wing=null;
this.wing1=null;
this.wingT=null;
this.aa=null;
this.pt=null;
this.pt1=null;
this.ptPrev=null;
this.ptNext=null;
this.mat=null;
this.bsTemp=null;
this.norml=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.norm=Clazz.new_($I$(1));
this.wing=Clazz.new_($I$(1));
this.wing1=Clazz.new_($I$(1));
this.wingT=Clazz.new_($I$(1));
this.aa=Clazz.new_($I$(2));
this.pt=Clazz.new_($I$(3));
this.pt1=Clazz.new_($I$(3));
this.ptPrev=Clazz.new_($I$(3));
this.ptNext=Clazz.new_($I$(3));
this.mat=Clazz.new_($I$(4));
this.norml=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'render$', function () {
return false;
});

Clazz.newMeth(C$, 'initialize$org_jmol_render_ShapeRenderer$org_jmol_shapebio_BioShape$I', function (bsr, bioShape, monomerCount) {
this.bsr=bsr;
this.bsRenderMesh=$I$(5).newN$I(monomerCount);
this.meshReady=bioShape.meshReady;
this.meshes=bioShape.meshes;
});

Clazz.newMeth(C$, 'renderBioMesh$org_jmol_shape_Mesh', function (mesh) {
if (mesh.normalsTemp != null ) {
mesh.setNormixes$javajs_util_V3A(mesh.normalsTemp);
mesh.normalsTemp=null;
} else if (mesh.normixes == null ) {
mesh.initialize$I$javajs_util_T3A$javajs_util_P4(1073741958, null, null);
}this.renderMesh2$org_jmol_shape_Mesh(mesh);
}, p$1);

Clazz.newMeth(C$, 'setFancyRibbon$I', function (i) {
try {
if ((this.meshes[i] == null  || !this.meshReady[i] ) && !p$1.createMesh$I$I$I$I$F$I.apply(this, [i, this.bsr.madBeg, this.bsr.madMid, this.bsr.madEnd, this.bsr.aspectRatio, this.bsr.isNucleic ? 4 : 7]) ) return;
this.meshes[i].setColix$H(this.bsr.colix);
this.meshes[i].setColixBack$H(this.bsr.colixBack);
this.bsRenderMesh.set$I(i);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.bsRenderMesh.clear$I(i);
this.meshes[i]=null;
$I$(6).error$S("render mesh error hermiteRibbon: " + e.toString());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setFancyConic$I$I', function (i, tension) {
try {
if ((this.meshes[i] == null  || !this.meshReady[i] ) && !p$1.createMesh$I$I$I$I$F$I.apply(this, [i, this.bsr.madBeg, this.bsr.madMid, this.bsr.madEnd, 1, tension]) ) return;
this.meshes[i].setColix$H(this.bsr.colix);
this.bsRenderMesh.set$I(i);
return;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.bsRenderMesh.clear$I(i);
this.meshes[i]=null;
$I$(6).error$S("render mesh error hermiteConic: " + e.toString());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setFancyArrowHead$I', function (i) {
try {
this.doCap0=true;
this.doCap1=false;
if ((this.meshes[i] == null  || !this.meshReady[i] ) && !p$1.createMesh$I$I$I$I$F$I.apply(this, [i, (Math.floor(this.bsr.madBeg * 1.2)|0), (Math.floor(this.bsr.madBeg * 0.6)|0), 0, (this.bsr.aspectRatio == 1  ? this.bsr.aspectRatio : this.bsr.aspectRatio / 2), 7]) ) return;
this.meshes[i].setColix$H(this.bsr.colix);
this.bsRenderMesh.set$I(i);
return;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.bsRenderMesh.clear$I(i);
this.meshes[i]=null;
$I$(6).error$S("render mesh error hermiteArrowHead: " + e.toString());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'createMesh$I$I$I$I$F$I', function (i, madBeg, madMid, madEnd, aspectRatio, tension) {
this.bsr.setNeighbors$I(i);
var cp=this.bsr.controlPoints;
if (cp[i].distanceSquared$javajs_util_T3(cp[this.bsr.iNext]) == 0 ) return false;
var isEccentric=(aspectRatio != 1  && this.bsr.wingVectors != null  );
var isFlatMesh=(aspectRatio == 0 );
var isElliptical=(this.bsr.cartoonsFancy || this.bsr.hermiteLevel >= 6 );
var nHermites=(this.bsr.hermiteLevel + 1) * 2 + 1;
var nPer=(isFlatMesh ? 4 : (this.bsr.hermiteLevel + 1) * 4 - 2);
var angle=((isFlatMesh ? 3.141592653589793 / (nPer - 1) : 6.283185307179586 / nPer));
var mesh=this.meshes[i]=Clazz.new_($I$(7)).mesh1$org_jmol_viewer_Viewer$S$H$I(this.vwr, "mesh_" + this.shapeID + "_" + i , 0, i);
var variableRadius=(madBeg != madMid || madMid != madEnd );
if (this.controlHermites == null  || this.controlHermites.length < nHermites + 1 ) {
this.controlHermites=Clazz.array($I$(3), [nHermites + 1]);
}$I$(8).getHermiteList$I$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3A$I$I$Z(tension, cp[this.bsr.iPrev], cp[i], cp[this.bsr.iNext], cp[this.bsr.iNext2], cp[this.bsr.iNext3], this.controlHermites, 0, nHermites, true);
if (this.wingHermites == null  || this.wingHermites.length < nHermites + 1 ) {
this.wingHermites=Clazz.array($I$(1), [nHermites + 1]);
}this.wing.setT$javajs_util_T3(this.bsr.wingVectors[this.bsr.iPrev]);
if (madEnd == 0) this.wing.scale$F(2.0);
$I$(8).getHermiteList$I$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3A$I$I$Z(tension, this.wing, this.bsr.wingVectors[i], this.bsr.wingVectors[this.bsr.iNext], this.bsr.wingVectors[this.bsr.iNext2], this.bsr.wingVectors[this.bsr.iNext3], this.wingHermites, 0, nHermites, false);
var radius1=madBeg / 2000.0;
var radius2=madMid / 2000.0;
var radius3=madEnd / 2000.0;
if (variableRadius) {
if (this.radiusHermites == null  || this.radiusHermites.length < ((nHermites + 1) >> 1) + 1 ) {
this.radiusHermites=Clazz.array($I$(3), [((nHermites + 1) >> 1) + 1]);
}this.ptPrev.set$F$F$F(radius1, radius1, 0);
this.pt.set$F$F$F(radius1, radius2, 0);
this.pt1.set$F$F$F(radius2, radius3, 0);
this.ptNext.set$F$F$F(radius3, radius3, 0);
$I$(8).getHermiteList$I$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3A$I$I$Z(4, this.ptPrev, this.pt, this.pt1, this.ptNext, this.ptNext, this.radiusHermites, 0, (nHermites + 1) >> 1, true);
}var nPoints=0;
var iMid=nHermites >> 1;
var kpt1=((nPer + 2)/4|0);
var kpt2=((3 * nPer + 2)/4|0);
var mode=(!isEccentric ? 0 : isFlatMesh ? 1 : isElliptical ? 2 : 3);
var useMat=(mode == 0 || mode == 3 );
for (var p=0; p < nHermites; p++) {
this.norm.sub2$javajs_util_T3$javajs_util_T3(this.controlHermites[p + 1], this.controlHermites[p]);
var scale=(!variableRadius ? radius1 : p < iMid ? this.radiusHermites[p].x : this.radiusHermites[p - iMid].y);
this.wing.setT$javajs_util_T3(this.wingHermites[p]);
this.wing1.setT$javajs_util_T3(this.wing);
switch (mode) {
case 1:
break;
case 2:
this.wing1.cross$javajs_util_T3$javajs_util_T3(this.norm, this.wing);
this.wing1.normalize$();
this.wing1.scale$F(this.wing.length$() / aspectRatio);
break;
case 3:
this.wing.scale$F(2 / aspectRatio);
this.wing1.sub$javajs_util_T3(this.wing);
break;
case 0:
this.wing.cross$javajs_util_T3$javajs_util_T3(this.wing, this.norm);
this.wing.normalize$();
break;
}
this.wing.scale$F(scale);
this.wing1.scale$F(scale);
if (useMat) {
this.aa.setVA$javajs_util_V3$F(this.norm, angle);
this.mat.setAA$javajs_util_A4(this.aa);
}this.pt1.setT$javajs_util_T3(this.controlHermites[p]);
var theta=(isFlatMesh ? 0 : angle);
for (var k=0; k < nPer; k++, theta += angle) {
if (useMat && k > 0 ) this.mat.rotate$javajs_util_T3(this.wing);
switch (mode) {
case 1:
this.wingT.setT$javajs_util_T3(this.wing1);
this.wingT.scale$F(Math.cos(theta));
break;
case 2:
this.wingT.setT$javajs_util_T3(this.wing1);
this.wingT.scale$F(Math.sin(theta));
this.wingT.scaleAdd2$F$javajs_util_T3$javajs_util_T3(Math.cos(theta), this.wing, this.wingT);
break;
case 3:
this.wingT.setT$javajs_util_T3(this.wing);
if (k == kpt1 || k == kpt2 ) this.wing1.scale$F(-1);
this.wingT.add$javajs_util_T3(this.wing1);
break;
case 0:
this.wingT.setT$javajs_util_T3(this.wing);
break;
}
this.pt.add2$javajs_util_T3$javajs_util_T3(this.pt1, this.wingT);
mesh.addV$javajs_util_T3$Z(this.pt, true);
}
if (p > 0) {
var nLast=(isFlatMesh ? nPer - 1 : nPer);
for (var k=0; k < nLast; k++) {
var a=nPoints - nPer + k;
var b=nPoints - nPer + ((k + 1) % nPer);
var c=nPoints + ((k + 1) % nPer);
var d=nPoints + k;
if (k < (nLast/2|0)) mesh.addQuad$I$I$I$I(a, b, c, d);
 else mesh.addQuad$I$I$I$I(b, c, d, a);
}
}nPoints+=nPer;
}
if (!isFlatMesh) {
var nPointsPreCap=nPoints;
if (this.doCap0) {
var vs=mesh.getVertices$();
for (var l=0; l < nPer; l++) mesh.addV$javajs_util_T3$Z(vs[l], true);

nPoints+=nPer;
for (var k=this.bsr.hermiteLevel * 2; --k >= 0; ) mesh.addQuad$I$I$I$I(nPoints - nPer + k + 2, nPoints - nPer + k + 1, nPoints - nPer + (nPer - k) % nPer, nPoints - k - 1 );

}if (this.doCap1) {
var vs=mesh.getVertices$();
for (var l=0; l < nPer; l++) mesh.addV$javajs_util_T3$Z(vs[nPointsPreCap - nPer + l], true);

nPoints+=nPer;
for (var k=this.bsr.hermiteLevel * 2; --k >= 0; ) mesh.addQuad$I$I$I$I(nPoints - k - 1 , nPoints - nPer + (nPer - k) % nPer, nPoints - nPer + k + 1, nPoints - nPer + k + 2);

}}this.meshReady[i]=true;
this.adjustCartoonSeamNormals$I$I(i, nPer);
mesh.setVisibilityFlags$I(1);
return true;
}, p$1);

Clazz.newMeth(C$, 'adjustCartoonSeamNormals$I$I', function (i, nPer) {
if (this.bsTemp == null ) this.bsTemp=$I$(9).newVertexBitSet$();
if (i == this.bsr.iNext - 1 && this.bsr.iNext < this.bsr.monomerCount  && this.bsr.monomers[i].getStrucNo$() == this.bsr.monomers[this.bsr.iNext].getStrucNo$()  && this.meshReady[i]  && this.meshReady[this.bsr.iNext] ) {
try {
var normals2=this.meshes[this.bsr.iNext].getNormalsTemp$();
var normals=this.meshes[i].getNormalsTemp$();
var normixCount=normals.length;
if (this.doCap0) normixCount-=nPer;
for (var j=1; j <= nPer; ++j) {
this.norml.add2$javajs_util_T3$javajs_util_T3(normals[normixCount - j], normals2[nPer - j]);
this.norml.normalize$();
normals[normixCount - j].setT$javajs_util_T3(this.norml);
normals2[nPer - j].setT$javajs_util_T3(this.norml);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'renderMeshes$', function () {
if (this.bsRenderMesh.isEmpty$()) return;
this.setColix$H(this.bsr.colix);
for (var i=this.bsRenderMesh.nextSetBit$I(0); i >= 0; i=this.bsRenderMesh.nextSetBit$I(i + 1)) p$1.renderBioMesh$org_jmol_shape_Mesh.apply(this, [this.meshes[i]]);

});

Clazz.newMeth(C$, 'initBS$', function () {
this.bsRenderMesh.clearAll$();
});

Clazz.newMeth(C$, 'check$Z$Z', function (doCap0, doCap1) {
this.doCap0=doCap0;
this.doCap1=doCap1;
return (this.exportType == 1 || p$1.checkDiameter$I.apply(this, [this.bsr.diameterBeg])  || p$1.checkDiameter$I.apply(this, [this.bsr.diameterMid])  || p$1.checkDiameter$I.apply(this, [this.bsr.diameterEnd]) );
});

Clazz.newMeth(C$, 'checkDiameter$I', function (d) {
return (this.bsr.isHighRes && d > 3  || d >= 8 );
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
