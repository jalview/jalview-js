(function(){var P$=Clazz.newPackage("org.jmol.rendercgo"),p$1={},I$=[[0,'javajs.util.P3','org.jmol.shapecgo.CGOMesh','org.jmol.util.Logger','org.jmol.util.C']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CGORenderer", null, 'org.jmol.renderspecial.DrawRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pt3=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['doColor','is2D','is2DPercent','isMapped','isPS'],'F',['x0','y0','dx','dy','scaleX','scaleY'],'I',['ptNormal','ptColor','screenZ'],'H',['colix0','colix1','colix2','normix0','normix1','normix2','normix'],'O',['cgoMesh','org.jmol.shapecgo.CGOMesh','cmds','javajs.util.Lst','pt3','javajs.util.P3','+map0','+vX','+vY']]]

Clazz.newMeth(C$, 'render$', function () {
this.needTranslucent=false;
this.imageFontScaling=this.vwr.imageFontScaling;
var cgo=this.shape;
for (var i=cgo.meshCount; --i >= 0; ) p$1.render2$org_jmol_shape_Mesh.apply(this, [this.mesh=this.cgoMesh=cgo.meshes[i]]);

return this.needTranslucent;
});

Clazz.newMeth(C$, 'render2$org_jmol_shape_Mesh', function (mesh) {
this.diameter=this.cgoMesh.diameter;
this.width=this.cgoMesh.width;
this.cmds=this.cgoMesh.cmds;
if (this.cmds == null  || !this.cgoMesh.visible  || this.cgoMesh.visibilityFlags == 0 ) return;
if (!this.g3d.setC$H(this.cgoMesh.colix)) {
this.needTranslucent=true;
return;
}var n=this.cmds.size$();
var glMode=-1;
var nPts=0;
this.ptNormal=0;
this.ptColor=0;
this.width=0;
this.screenZ=2147483647;
this.doColor=!mesh.useColix;
var pt;
var spt;
this.g3d.addRenderer$I(1073742182);
this.is2D=this.isMapped=false;
this.scaleX=this.scaleY=1;
for (var j=0; j < n; j++) {
var type=this.cgoMesh.getInt$I(j);
if (type == 0) break;
var len=$I$(2).getSize$I$Z(type, this.is2D);
if (len < 0) {
$I$(3).error$S("CGO unknown type: " + type);
return;
}switch (type) {
default:
System.out.println$S("CGO ? " + type);
break;
case -111:
break;
case -107:
this.diameter=this.cgoMesh.getInt$I(j + 1);
break;
case -100:
this.width=this.cgoMesh.getFloat$I(j + 1);
break;
case -101:
this.isMapped=false;
var f=this.cgoMesh.getFloat$I(j + 1);
if (f == 0 ) {
this.is2D=false;
} else {
this.is2DPercent=(f > 0 );
this.screenZ=(this.is2DPercent ? this.tm.zValueFromPercent$I((f|0)) : -(f|0));
this.is2D=true;
}break;
case -103:
this.isPS=true;
case -102:
this.is2D=this.isMapped=true;
this.map0=Clazz.new_($I$(1,1));
this.vX=Clazz.new_($I$(1,1));
this.vY=Clazz.new_($I$(1,1));
this.cgoMesh.getPoint$I$javajs_util_T3(j + 1, this.map0);
this.cgoMesh.getPoint$I$javajs_util_T3(j + 4, this.vX);
this.vX.sub$javajs_util_T3(this.map0);
this.cgoMesh.getPoint$I$javajs_util_T3(j + 7, this.vY);
this.vY.sub$javajs_util_T3(this.map0);
this.x0=this.cgoMesh.getFloat$I(j + 10);
this.y0=this.cgoMesh.getFloat$I(j + 11);
this.dx=this.cgoMesh.getFloat$I(j + 12) - this.x0;
this.dy=this.cgoMesh.getFloat$I(j + 13) - this.y0;
if (this.isPS) break;
case -108:
this.scaleX=this.cgoMesh.getFloat$I(this.isPS ? j + 1 : j + 14);
this.scaleY=this.cgoMesh.getFloat$I(this.isPS ? j + 2 : j + 15);
break;
case 28:
break;
case 1:
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j + 2, this.pt0, this.pt0i);
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j + (this.is2D ? 4 : 5), this.pt1, this.pt1i);
this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(1, 2, false, this.pt0, this.pt1, this.pt0i, this.pt1i);
break;
case 2:
glMode=this.cgoMesh.getInt$I(j + 1);
case -104:
nPts=0;
break;
case -105:
glMode=-105;
break;
case -106:
if (glMode != -105) break;
glMode=2;
case 3:
if (glMode == 2 && nPts >= 3 ) this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(1, 2, true, this.pt0, this.pt3, this.pt0i, this.pt3i);
nPts=0;
break;
case 6:
p$1.getColix$Z.apply(this, [true]);
break;
case 5:
this.normix=p$1.getNormix.apply(this, []);
break;
case -109:
nPts=0;
case -110:
glMode=2;
case 4:
if (nPts++ == 0) this.getPoint$I$javajs_util_P3$javajs_util_P3i(j, this.pt0, this.pt0i);
switch (glMode) {
case -1:
break;
case 0:
this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(1, 1, false, this.pt0, this.pt0, this.pt0i, this.pt0i);
break;
case 1:
if (nPts == 2) {
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j, this.pt1, this.pt1i);
this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(1, 2, false, this.pt0, this.pt1, this.pt0i, this.pt1i);
nPts=0;
}break;
case 2:
case 3:
if (nPts == 1) {
if (glMode == 2) {
this.pt3.setT$javajs_util_T3(this.pt0);
this.pt3i.setT$javajs_util_T3i(this.pt0i);
}break;
}this.getPoint$I$javajs_util_P3$javajs_util_P3i(j, this.pt1, this.pt1i);
pt=this.pt0;
this.pt0=this.pt1;
this.pt1=pt;
spt=this.pt0i;
this.pt0i=this.pt1i;
this.pt1i=spt;
this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(1, 2, true, this.pt0, this.pt1, this.pt0i, this.pt1i);
break;
case 4:
switch (nPts) {
case 1:
this.normix1=this.normix2=this.normix0=this.normix;
this.colix1=this.colix2=this.colix0=this.colix;
break;
case 2:
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j, this.pt1, this.pt1i);
break;
case 3:
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j, this.pt2, this.pt2i);
p$1.fillTriangle.apply(this, []);
nPts=0;
break;
}
break;
case 5:
switch (nPts) {
case 1:
this.normix1=this.normix2=this.normix0=this.normix;
this.colix1=this.colix2=this.colix0=this.colix;
break;
case 2:
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j, this.pt2, this.pt2i);
break;
default:
if (nPts % 2 == 0) {
pt=this.pt0;
this.pt0=this.pt2;
spt=this.pt0i;
this.pt0i=this.pt2i;
} else {
pt=this.pt1;
this.pt1=this.pt2;
spt=this.pt1i;
this.pt1i=this.pt2i;
}this.pt2=pt;
this.pt2i=spt;
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j, this.pt2, this.pt2i);
p$1.fillTriangle.apply(this, []);
break;
}
break;
case 6:
switch (nPts) {
case 1:
this.normix1=this.normix2=this.normix0=this.normix;
this.colix1=this.colix2=this.colix0=this.colix;
this.pt1.setT$javajs_util_T3(this.pt0);
this.pt1i.setT$javajs_util_T3i(this.pt0i);
break;
case 2:
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j, this.pt0, this.pt0i);
break;
default:
this.pt2.setT$javajs_util_T3(this.pt0);
this.pt2i.setT$javajs_util_T3i(this.pt0i);
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j, this.pt0, this.pt0i);
p$1.fillTriangle.apply(this, []);
break;
}
break;
}
break;
case 14:
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j, this.pt0, this.pt0i);
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j + (this.is2D ? 2 : 3), this.pt1, this.pt1i);
this.width=this.cgoMesh.getFloat$I(j + 7);
p$1.getColix$Z.apply(this, [true]);
p$1.getColix$Z.apply(this, [false]);
this.drawEdge$I$I$Z$javajs_util_T3$javajs_util_T3$javajs_util_P3i$javajs_util_P3i(1, 2, false, this.pt0, this.pt1, this.pt0i, this.pt1i);
this.width=0;
break;
case 8:
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j, this.pt0, this.pt0i);
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j + (this.is2D ? 2 : 3), this.pt1, this.pt1i);
this.getPoint$I$javajs_util_P3$javajs_util_P3i(j + (this.is2D ? 4 : 6), this.pt2, this.pt2i);
this.normix0=p$1.getNormix.apply(this, []);
this.normix1=p$1.getNormix.apply(this, []);
this.normix2=p$1.getNormix.apply(this, []);
this.colix0=p$1.getColix$Z.apply(this, [false]);
this.colix1=p$1.getColix$Z.apply(this, [false]);
this.colix2=p$1.getColix$Z.apply(this, [false]);
p$1.fillTriangle.apply(this, []);
break;
}
j+=len;
}
}, p$1);

Clazz.newMeth(C$, 'getNormix', function () {
return this.cgoMesh.nList.get$I(this.ptNormal++).shortValue$();
}, p$1);

Clazz.newMeth(C$, 'getColix$Z', function (doSet) {
if (this.doColor) {
this.colix=(function(a,f){return f.apply(null,a)})([this.cgoMesh.colix, this.cgoMesh.cList.get$I(this.ptColor++).shortValue$()],$I$(4).copyColixTranslucency$H$H);
if (doSet) this.g3d.setC$H(this.colix);
}return this.colix;
}, p$1);

Clazz.newMeth(C$, 'getPoint$I$javajs_util_P3$javajs_util_P3i', function (i, pt, pti) {
this.cgoMesh.getPoint$I$javajs_util_T3(i + 1, pt);
if (this.isMapped) {
var fx=(pt.x * this.scaleX - this.x0) / this.dx;
var fy=(pt.y * this.scaleY - this.y0) / this.dy;
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(fx, this.vX, this.map0);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(fy, this.vY, pt);
} else if (this.is2D) {
pti.x=(this.is2DPercent ? this.tm.percentToPixels$C$F("x", pt.x) : (pt.x|0));
pti.y=(this.is2DPercent ? this.tm.percentToPixels$C$F("y", pt.y) : (pt.y|0));
pti.z=this.screenZ;
this.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(pt, pt);
return;
}this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(pt, pti);
});

Clazz.newMeth(C$, 'fillTriangle', function () {
this.g3d.fillTriangle3CNBits$javajs_util_P3$H$H$javajs_util_P3$H$H$javajs_util_P3$H$H$Z(this.pt0, this.colix0, this.normix0, this.pt1, this.colix1, this.normix1, this.pt2, this.colix2, this.normix2, true);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:16 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
