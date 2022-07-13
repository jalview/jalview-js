(function(){var P$=Clazz.newPackage("org.jmol.renderspecial"),p$1={},I$=[[0,'javajs.util.V3','org.jmol.viewer.JC','javajs.util.BS','javajs.util.M3','javajs.util.M4','javajs.util.P3','javajs.util.PT','org.jmol.util.C','org.jmol.shapespecial.Ellipsoid','org.jmol.util.Normix']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EllipsoidsRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bGlobals=Clazz.array(Boolean.TYPE, [7]);
this.bOptions=Clazz.array(Boolean.TYPE, [7]);
this.OPTS=Clazz.array(String, -1, ["dots", "arcs", "axes", "fill", "ball", "arrows", "wireframe"]);
this.eigenSignMask=7;
this.iCutout=-1;
this.selectedOctant=-1;
this.bsTemp=Clazz.new_($I$(3,1));
this.mat=Clazz.new_($I$(4,1));
this.mTemp=Clazz.new_($I$(4,1));
this.mDeriv=Clazz.new_($I$(5,1));
this.matScreenToCartesian=Clazz.new_($I$(4,1));
this.matScreenToEllipsoid=Clazz.new_($I$(4,1));
this.matEllipsoidToScreen=Clazz.new_($I$(4,1));
this.coefs=Clazz.array(Double.TYPE, [10]);
this.factoredLengths=Clazz.array(Float.TYPE, [3]);
this.selectedPoints=Clazz.array($I$(6), [3]);
this.v1=Clazz.new_($I$(1,1));
this.v2=Clazz.new_($I$(1,1));
this.v3=Clazz.new_($I$(1,1));
this.pt1=Clazz.new_($I$(6,1));
this.pt2=Clazz.new_($I$(6,1));
this.s0=Clazz.new_($I$(6,1));
this.s1=Clazz.new_($I$(6,1));
this.s2=Clazz.new_($I$(6,1));
this.screens=Clazz.array($I$(6), [38]);
this.points=Clazz.array($I$(6), [6]);
{
for (var i=0; i < this.points.length; i++) this.points[i]=Clazz.new_($I$(6,1));

for (var i=0; i < this.screens.length; i++) this.screens[i]=Clazz.new_($I$(6,1));

}
},1);

C$.$fields$=[['Z',['fillArc','isSet'],'F',['perspectiveFactor'],'I',['diameter','diameter0','dotCount','dotScale','dx','eigenSignMask','iCutout','selectedOctant'],'O',['ellipsoids','org.jmol.shapespecial.Ellipsoids','bGlobals','boolean[]','+bOptions','OPTS','String[]','coords','int[]','axes','javajs.util.V3[]','center','javajs.util.P3','bsTemp','javajs.util.BS','mat','javajs.util.M3','+mTemp','mDeriv','javajs.util.M4','matScreenToCartesian','javajs.util.M3','+matScreenToEllipsoid','+matEllipsoidToScreen','coefs','double[]','factoredLengths','float[]','selectedPoints','javajs.util.P3[]','v1','javajs.util.V3','+v2','+v3','pt1','javajs.util.P3','+pt2','+s0','+s1','+s2','screens','javajs.util.P3[]','+points']]
,['O',['cossin','float[]','unitAxisVectors','javajs.util.V3[]','axisPoints','int[]','+octants']]]

Clazz.newMeth(C$, 'render$', function () {
this.isSet=false;
this.ellipsoids=this.shape;
if (!this.ellipsoids.isActive$()) return false;
var needTranslucent=false;
if (!this.isSet) this.isSet=p$1.setGlobals.apply(this, []);
if (!this.ellipsoids.atomEllipsoids.isEmpty$()) needTranslucent|=p$1.renderEllipsoids$java_util_Map$Z.apply(this, [this.ellipsoids.atomEllipsoids, false]);
if (!this.ellipsoids.simpleEllipsoids.isEmpty$()) {
needTranslucent|=p$1.renderEllipsoids$java_util_Map$Z.apply(this, [this.ellipsoids.simpleEllipsoids, true]);
}this.coords=null;
return needTranslucent;
});

Clazz.newMeth(C$, 'setGlobals', function () {
this.bGlobals[1]=this.vwr.getBooleanProperty$S("ellipsoidArcs");
this.bGlobals[5]=this.vwr.getBooleanProperty$S("ellipsoidArrows");
this.bGlobals[2]=this.vwr.getBooleanProperty$S("ellipsoidAxes");
this.bGlobals[4]=this.vwr.getBooleanProperty$S("ellipsoidBall");
this.bGlobals[0]=this.vwr.getBooleanProperty$S("ellipsoidDots");
this.bGlobals[3]=this.vwr.getBooleanProperty$S("ellipsoidFill");
this.bGlobals[6]=!this.isExport && !this.vwr.checkMotionRendering$I(1112150020) ;
this.diameter0=Math.round((this.vwr.getP$S("ellipsoidAxisDiameter")).floatValue$() * 1000);
var m4=this.tm.matrixTransform;
this.mat.setRow$I$F$F$F(0, m4.m00, m4.m01, m4.m02);
this.mat.setRow$I$F$F$F(1, m4.m10, m4.m11, m4.m12);
this.mat.setRow$I$F$F$F(2, m4.m20, m4.m21, m4.m22);
this.matScreenToCartesian.invertM$javajs_util_M3(this.mat);
p$1.setLogic.apply(this, []);
return true;
}, p$1);

Clazz.newMeth(C$, 'setOptions$S', function (options) {
for (var i=0; i < 7; i++) this.bOptions[i]=this.bGlobals[i];

if (options != null ) {
options=";" + options + ";" ;
for (var i=0; i < 7; i++) {
if ($I$(7).isOneOf$S$S(this.OPTS[i], options)) this.bOptions[i]=true;
 else if ($I$(7).isOneOf$S$S("no" + this.OPTS[i], options)) this.bOptions[i]=false;
}
}p$1.setLogic.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setLogic', function () {
this.bOptions[0]&=!this.bOptions[6];
this.bOptions[4]&=!this.bOptions[6];
this.bOptions[3]&=!this.bOptions[6];
this.fillArc=this.bOptions[3] && !this.bOptions[4] ;
if (this.fillArc) this.g3d.addRenderer$I(1073742182);
if (this.bOptions[4]) this.bOptions[0]=false;
if (!this.bOptions[0] && !this.bOptions[1] && !this.bOptions[4]  ) this.bOptions[2]=true;
if (this.bOptions[0]) {
this.bOptions[1]=false;
this.bOptions[3]=false;
this.dotScale=this.vwr.getInt$I(553648142);
}if (this.bOptions[0]) {
this.dotCount=(this.vwr.getP$S("ellipsoidDotCount")).intValue$();
if (this.coords == null  || this.coords.length != this.dotCount * 3 ) this.coords=Clazz.array(Integer.TYPE, [this.dotCount * 3]);
}}, p$1);

Clazz.newMeth(C$, 'renderEllipsoids$java_util_Map$Z', function (ht, isSimple) {
var needTranslucent=false;
var atom=null;
for (var ellipsoid, $ellipsoid = ht.values$().iterator$(); $ellipsoid.hasNext$()&&((ellipsoid=($ellipsoid.next$())),1);) {
if (!ellipsoid.visible) continue;
if (isSimple) {
this.colix=ellipsoid.colix;
} else {
atom=this.ms.at[ellipsoid.tensor.atomIndex1];
if (atom.sZ <= 1 || !this.isVisibleForMe$org_jmol_modelset_Atom(atom) ) continue;
this.colix=$I$(8).getColixInherited$H$H(ellipsoid.colix, atom.colixAtom);
}if (!this.g3d.setC$H(this.colix)) {
needTranslucent=true;
continue;
}this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(ellipsoid.center, this.s0);
p$1.renderOne$org_jmol_shapespecial_Ellipsoid.apply(this, [ellipsoid]);
}
return needTranslucent;
}, p$1);

Clazz.newMeth(C$, 'renderOne$org_jmol_shapespecial_Ellipsoid', function (e) {
this.center=e.center;
var maxPt=2;
var maxLen=0;
for (var i=3; --i >= 0; ) {
var f=this.factoredLengths[i]=Math.max(e.getLength$I(i), 0.02);
if (f > maxLen ) {
maxLen=f;
maxPt=i;
}}
this.axes=e.tensor.eigenVectors;
p$1.setMatrices.apply(this, []);
p$1.setAxes$I.apply(this, [maxPt]);
if (this.g3d.isClippedXY$I$I$I(this.dx + this.dx, (this.s0.x|0), (this.s0.y|0))) return;
this.eigenSignMask=e.tensor.eigenSignMask;
p$1.setOptions$S.apply(this, [e.options]);
this.diameter=(this.vwr.tm.scaleToScreen$I$I((this.s0.z|0), this.bOptions[6] ? 1 : this.diameter0)|0);
if (e.tensor.isIsotropic) {
p$1.renderBall.apply(this, []);
return;
}if (this.bOptions[4]) {
p$1.renderBall.apply(this, []);
if (this.bOptions[1] || this.bOptions[2] ) {
this.g3d.setC$H(this.vwr.cm.colixBackgroundContrast);
if (this.bOptions[2]) p$1.renderAxes.apply(this, []);
if (this.bOptions[1]) p$1.renderArcs.apply(this, []);
this.g3d.setC$H(this.colix);
}} else {
if (this.bOptions[2]) p$1.renderAxes.apply(this, []);
if (this.bOptions[1]) p$1.renderArcs.apply(this, []);
}if (this.bOptions[0]) p$1.renderDots.apply(this, []);
if (this.bOptions[5]) p$1.renderArrows.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setMatrices', function () {
for (var i=0; i < 3; i++) {
this.v1.setT$javajs_util_T3(this.axes[i]);
this.v1.scale$F(this.factoredLengths[i]);
this.mat.setColumnV$I$javajs_util_T3(i, this.v1);
}
this.mat.invertM$javajs_util_M3(this.mat);
this.matScreenToEllipsoid.mul2$javajs_util_M3$javajs_util_M3(this.mat, this.matScreenToCartesian);
this.matEllipsoidToScreen.invertM$javajs_util_M3(this.matScreenToEllipsoid);
this.perspectiveFactor=this.vwr.tm.scaleToPerspective$I$F((this.s0.z|0), 1.0);
this.matScreenToEllipsoid.scale$F(1.0 / this.perspectiveFactor);
}, p$1);

Clazz.newMeth(C$, 'setAxes$I', function (maxPt) {
for (var i=0; i < 6; i++) {
var iAxis=C$.axisPoints[i];
var i012=Math.abs(iAxis) - 1;
this.points[i].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.factoredLengths[i012] * (iAxis < 0 ? -1 : 1), this.axes[i012], this.center);
this.pt1.setT$javajs_util_T3(C$.unitAxisVectors[i]);
this.matEllipsoidToScreen.rotate$javajs_util_T3(this.pt1);
this.screens[i].set$F$F$F(Math.round(this.s0.x + this.pt1.x * this.perspectiveFactor), Math.round(this.s0.y + this.pt1.y * this.perspectiveFactor), Math.round(this.pt1.z + this.s0.z));
this.screens[i + 32].set$F$F$F(Math.round(this.s0.x + this.pt1.x * this.perspectiveFactor * 1.05 ), Math.round(this.s0.y + this.pt1.y * this.perspectiveFactor * 1.05 ), Math.round(this.pt1.z * 1.05 + this.s0.z));
}
this.dx=2 + (this.vwr.tm.scaleToScreen$I$I((this.s0.z|0), Math.round((Float.isNaN$F(this.factoredLengths[maxPt]) ? 1.0 : this.factoredLengths[maxPt]) * 1000))|0);
}, p$1);

Clazz.newMeth(C$, 'renderBall', function () {
p$1.setSelectedOctant.apply(this, []);
$I$(9).getEquationForQuadricWithCenter$F$F$F$javajs_util_M3$javajs_util_V3$javajs_util_M3$DA$javajs_util_M4(this.s0.x, this.s0.y, this.s0.z, this.matScreenToEllipsoid, this.v1, this.mTemp, this.coefs, this.mDeriv);
this.g3d.fillEllipsoid$javajs_util_P3$javajs_util_P3A$I$I$I$I$javajs_util_M3$DA$javajs_util_M4$I$javajs_util_P3A(this.center, this.points, (this.s0.x|0), (this.s0.y|0), (this.s0.z|0), this.dx + this.dx, this.matScreenToEllipsoid, this.coefs, this.mDeriv, this.selectedOctant, this.selectedOctant >= 0 ? this.selectedPoints : null);
}, p$1);

Clazz.newMeth(C$, 'renderArrows', function () {
for (var i=0; i < 6; i+=2) {
var pt=(i == 0 ? 1 : i);
p$1.fillConeScreen$javajs_util_P3$javajs_util_P3$Z.apply(this, [this.screens[i], this.screens[i + 1], (this.eigenSignMask & pt) != 0]);
}
}, p$1);

Clazz.newMeth(C$, 'fillConeScreen$javajs_util_P3$javajs_util_P3$Z', function (p1, p2, isPositive) {
if (this.diameter == 0) return;
var diam=(this.diameter == 0 ? 1 : this.diameter) * 8;
this.v1.set$F$F$F(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
this.v1.normalize$();
this.v1.scale$F(diam);
this.s1.setT$javajs_util_T3(p1);
this.s2.setT$javajs_util_T3(p1);
if (isPositive) {
this.s2.x -= (this.v1.x|0);
this.s2.y -= (this.v1.y|0);
this.s2.z -= (this.v1.z|0);
} else {
this.s1.x -= (this.v1.x|0);
this.s1.y -= (this.v1.y|0);
this.s1.z -= (this.v1.z|0);
}this.g3d.fillConeScreen3f$B$I$javajs_util_P3$javajs_util_P3$Z(2, (diam|0), this.s1, this.s2, false);
this.s1.setT$javajs_util_T3(p2);
this.s2.setT$javajs_util_T3(p2);
if (isPositive) {
this.s2.x += (this.v1.x|0);
this.s2.y += (this.v1.y|0);
this.s2.z += (this.v1.z|0);
} else {
this.s1.x += (this.v1.x|0);
this.s1.y += (this.v1.y|0);
this.s1.z += (this.v1.z|0);
}this.g3d.fillConeScreen3f$B$I$javajs_util_P3$javajs_util_P3$Z(2, (diam|0), this.s1, this.s2, false);
}, p$1);

Clazz.newMeth(C$, 'renderAxes', function () {
if (this.bOptions[4] && this.bOptions[3] ) {
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.s0, this.selectedPoints[0]);
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.s0, this.selectedPoints[1]);
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.s0, this.selectedPoints[2]);
return;
}if (this.bOptions[4]) {
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.screens[32], this.screens[33]);
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.screens[34], this.screens[35]);
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.screens[36], this.screens[37]);
} else {
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.screens[0], this.screens[1]);
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.screens[2], this.screens[3]);
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.screens[4], this.screens[5]);
}}, p$1);

Clazz.newMeth(C$, 'renderDots', function () {
for (var i=0; i < this.coords.length; ) {
var fx=Math.random();
var fy=Math.random();
fx *= (Math.random() > 0.5  ? -1 : 1);
fy *= (Math.random() > 0.5  ? -1 : 1);
var fz=Math.sqrt(1 - fx * fx - fy * fy);
if (Float.isNaN$F(fz)) continue;
fz=(Math.random() > 0.5  ? -1 : 1) * fz;
this.pt1.scaleAdd2$F$javajs_util_T3$javajs_util_T3(fx * this.factoredLengths[0], this.axes[0], this.center);
this.pt1.scaleAdd2$F$javajs_util_T3$javajs_util_T3(fy * this.factoredLengths[1], this.axes[1], this.pt1);
this.pt1.scaleAdd2$F$javajs_util_T3$javajs_util_T3(fz * this.factoredLengths[2], this.axes[2], this.pt1);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pt1, this.s1);
this.coords[i++]=(this.s1.x|0);
this.coords[i++]=(this.s1.y|0);
this.coords[i++]=(this.s1.z|0);
}
this.g3d.drawPoints$I$IA$I(this.dotCount, this.coords, this.dotScale);
}, p$1);

Clazz.newMeth(C$, 'renderArcs', function () {
if (this.g3d.drawEllipse$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z$Z(this.center, this.points[0], this.points[2], this.fillArc, this.bOptions[6])) {
this.g3d.drawEllipse$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z$Z(this.center, this.points[2], this.points[5], this.fillArc, this.bOptions[6]);
this.g3d.drawEllipse$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z$Z(this.center, this.points[5], this.points[0], this.fillArc, this.bOptions[6]);
return;
}for (var i=1, pt=3; i < 8; i+=2, pt+=6) {
p$1.renderArc$I$I.apply(this, [C$.octants[pt], C$.octants[pt + 1]]);
p$1.renderArc$I$I.apply(this, [C$.octants[pt + 1], C$.octants[pt + 2]]);
p$1.renderArc$I$I.apply(this, [C$.octants[pt + 2], C$.octants[pt]]);
}
}, p$1);

Clazz.newMeth(C$, 'renderArc$I$I', function (ptA, ptB) {
this.v1.sub2$javajs_util_T3$javajs_util_T3(this.points[ptA], this.center);
this.v2.sub2$javajs_util_T3$javajs_util_T3(this.points[ptB], this.center);
var d1=this.v1.length$();
var d2=this.v2.length$();
this.v1.normalize$();
this.v2.normalize$();
this.v3.cross$javajs_util_T3$javajs_util_T3(this.v1, this.v2);
this.pt1.setT$javajs_util_T3(this.points[ptA]);
this.s1.setT$javajs_util_T3(this.screens[ptA]);
var normix=$I$(10).get2SidedNormix$javajs_util_V3$javajs_util_BS(this.v3, this.bsTemp);
if (!this.fillArc && !this.bOptions[6] ) this.screens[6].setT$javajs_util_T3(this.s1);
for (var i=0, pt=0; i < 18; i++, pt+=2) {
this.pt2.scaleAdd2$F$javajs_util_T3$javajs_util_T3(C$.cossin[pt] * d1, this.v1, this.center);
this.pt2.scaleAdd2$F$javajs_util_T3$javajs_util_T3(C$.cossin[pt + 1] * d2, this.v2, this.pt2);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pt2, this.s2);
if (this.fillArc) {
this.g3d.fillTriangle3CNBits$javajs_util_P3$H$H$javajs_util_P3$H$H$javajs_util_P3$H$H$Z(this.s0, this.colix, normix, this.s1, this.colix, normix, this.s2, this.colix, normix, true);
} else if (this.bOptions[6]) this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.s1, this.s2);
 else this.screens[i + 7].setT$javajs_util_T3(this.s2);
this.pt1.setT$javajs_util_T3(this.pt2);
this.s1.setT$javajs_util_T3(this.s2);
}
if (!this.fillArc && !this.bOptions[6] ) {
this.g3d.addRenderer$I(553648145);
for (var i=0; i < 18; i++) {
this.g3d.fillHermite$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3(5, this.diameter, this.diameter, this.diameter, this.screens[i == 0 ? i + 6 : i + 5], this.screens[i + 6], this.screens[i + 7], this.screens[i == 17 ? i + 7 : i + 8]);
}
}}, p$1);

Clazz.newMeth(C$, 'setSelectedOctant', function () {
var zMin=2147483647;
this.selectedOctant=-1;
this.iCutout=-1;
if (this.bOptions[3]) {
for (var i=0; i < 8; i++) {
var ptA=C$.octants[i * 3];
var ptB=C$.octants[i * 3 + 1];
var ptC=C$.octants[i * 3 + 2];
var z=((this.screens[ptA].z + this.screens[ptB].z + this.screens[ptC].z )|0);
if (z < zMin) {
zMin=z;
this.iCutout=i;
}}
this.s1.setT$javajs_util_T3(this.selectedPoints[0]=this.screens[C$.octants[this.iCutout * 3]]);
this.s1.add$javajs_util_T3(this.selectedPoints[1]=this.screens[C$.octants[this.iCutout * 3 + 1]]);
this.s1.add$javajs_util_T3(this.selectedPoints[2]=this.screens[C$.octants[this.iCutout * 3 + 2]]);
this.s1.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-3, this.s0, this.s1);
this.pt1.set$F$F$F(this.s1.x, this.s1.y, this.s1.z);
this.matScreenToEllipsoid.rotate$javajs_util_T3(this.pt1);
var i=0;
if (this.pt1.x < 0 ) i|=1;
if (this.pt1.y < 0 ) i|=2;
if (this.pt1.z < 0 ) i|=4;
this.selectedOctant=i;
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.cossin=Clazz.array(Float.TYPE, [36]);
{
for (var i=5, pt=0; i <= 90; i+=5) {
C$.cossin[pt++]=Math.cos(i * 0.017453292);
C$.cossin[pt++]=Math.sin(i * 0.017453292);
}
};
C$.unitAxisVectors=Clazz.array($I$(1), -1, [$I$(2).axisNX, $I$(2).axisX, $I$(2).axisNY, $I$(2).axisY, $I$(2).axisNZ, $I$(2).axisZ]);
C$.axisPoints=Clazz.array(Integer.TYPE, -1, [-1, 1, -2, 2, -3, 3]);
C$.octants=Clazz.array(Integer.TYPE, -1, [5, 0, 3, 5, 2, 0, 4, 0, 2, 4, 3, 0, 5, 2, 1, 5, 1, 3, 4, 3, 1, 4, 1, 2]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
