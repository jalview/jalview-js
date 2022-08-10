(function(){var P$=Clazz.newPackage("org.jmol.renderspecial"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.P3','org.jmol.util.C']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DipolesRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offset=Clazz.new_($I$(1,1));
this.screens3f=Clazz.array($I$(2), [6]);
this.points=Clazz.array($I$(2), [6]);
{
for (var i=0; i < 6; i++) {
this.screens3f[i]=Clazz.new_($I$(2,1));
this.points[i]=Clazz.new_($I$(2,1));
}
}
this.cross0=Clazz.new_($I$(2,1));
this.cross1=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['noCross'],'F',['dipoleVectorScale','offsetSide'],'I',['diameter','headWidthPixels','crossWidthPixels'],'H',['colixA','colixB'],'O',['offset','javajs.util.V3','screens3f','javajs.util.P3[]','+points','cross0','javajs.util.P3','+cross1']]]

Clazz.newMeth(C$, 'render$', function () {
var dipoles=this.shape;
this.dipoleVectorScale=this.vwr.getFloat$I(570425355);
var needTranslucent=false;
var vis=this.vwr.ms.getVisibleSet$Z(false);
for (var i=dipoles.dipoleCount; --i >= 0; ) {
var dipole=dipoles.dipoles[i];
if (dipole.visibilityFlags != 0 && (dipole.atoms[0] == null  || !this.ms.isAtomHidden$I(dipole.atoms[0].i) )  && (dipole.bsMolecule == null  || dipole.bsMolecule.intersects$javajs_util_BS(vis) )  && p$1.renderDipoleVector$org_jmol_shapespecial_Dipole$javajs_util_BS.apply(this, [dipole, vis]) ) needTranslucent=true;
}
return needTranslucent;
});

Clazz.newMeth(C$, 'renderDipoleVector$org_jmol_shapespecial_Dipole$javajs_util_BS', function (dipole, vis) {
this.mad=dipole.mad;
this.offsetSide=dipole.offsetSide;
this.noCross=dipole.noCross;
this.colixA=(dipole.bond == null  ? dipole.colix : $I$(3).getColixInherited$H$H(dipole.colix, dipole.bond.colix));
this.colixB=this.colixA;
if (dipole.atoms[0] != null ) {
this.colixA=$I$(3).getColixInherited$H$H(this.colixA, dipole.atoms[0].colixAtom);
this.colixB=$I$(3).getColixInherited$H$H(this.colixB, dipole.atoms[1].colixAtom);
}if (this.colixA == 0) this.colixA=5;
if (this.colixB == 0) this.colixB=5;
if (this.dipoleVectorScale < 0 ) {
var c=this.colixA;
this.colixA=this.colixB;
this.colixB=c;
}var factor=dipole.offsetAngstroms / dipole.dipoleValue;
if (dipole.lstDipoles == null ) return p$1.renderVector$javajs_util_V3$javajs_util_P3$javajs_util_P3$F$Z.apply(this, [dipole.vector, dipole.origin, dipole.center, factor, false]);
var needTranslucent=false;
for (var i=dipole.lstDipoles.size$(); --i >= 0; ) {
var o=dipole.lstDipoles.get$I(i);
var v=o[0];
var origin=o[1];
var bsAtoms=o[2];
if (bsAtoms.intersects$javajs_util_BS(vis)) needTranslucent=p$1.renderVector$javajs_util_V3$javajs_util_P3$javajs_util_P3$F$Z.apply(this, [v, origin, null, dipole.offsetAngstroms, true]);
}
return needTranslucent;
}, p$1);

Clazz.newMeth(C$, 'renderVector$javajs_util_V3$javajs_util_P3$javajs_util_P3$F$Z', function (vector, origin, dcenter, factor, isGroup) {
this.offset.setT$javajs_util_T3(vector);
if (dcenter == null ) {
if (isGroup) {
this.offset.normalize$();
this.offset.scale$F(factor);
} else {
this.offset.scale$F(factor);
if (this.dipoleVectorScale < 0 ) this.offset.add$javajs_util_T3(vector);
}this.points[0].add2$javajs_util_T3$javajs_util_T3(origin, this.offset);
} else {
this.offset.scale$F(-0.5 * this.dipoleVectorScale);
this.points[0].add2$javajs_util_T3$javajs_util_T3(dcenter, this.offset);
if (factor != 0 ) {
this.offset.setT$javajs_util_T3(vector);
this.offset.scale$F(factor);
this.points[0].add$javajs_util_T3(this.offset);
}}this.points[1].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.dipoleVectorScale * 0.1, vector, this.points[0]);
this.points[2].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.dipoleVectorScale * (0.14), vector, this.points[0]);
this.points[3].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.dipoleVectorScale / 2, vector, this.points[0]);
this.points[4].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.dipoleVectorScale * 0.9, vector, this.points[0]);
this.points[5].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.dipoleVectorScale, vector, this.points[0]);
this.offset.setT$javajs_util_T3(this.points[3]);
this.offset.cross$javajs_util_T3$javajs_util_T3(this.offset, vector);
if (this.offset.length$() == 0 ) {
this.offset.set$F$F$F(this.points[3].x + 0.2345, this.points[3].y + 0.1234, this.points[3].z + 0.4321);
this.offset.cross$javajs_util_T3$javajs_util_T3(this.offset, vector);
}this.offset.scale$F(this.offsetSide / this.offset.length$());
for (var i=0; i < 6; i++) this.points[i].add$javajs_util_T3(this.offset);

for (var i=0; i < 6; i++) this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.points[i], this.screens3f[i]);

this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.points[1], this.cross0);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.points[2], this.cross1);
var d=this.vwr.tm.scaleToScreen$I$I((this.screens3f[3].z|0), this.mad);
this.diameter=(d|0);
this.headWidthPixels=(Math.floor(d * 2.0)|0);
if (this.headWidthPixels < this.diameter + 5) this.headWidthPixels=this.diameter + 5;
this.crossWidthPixels=this.headWidthPixels;
this.colix=this.colixA;
if (this.colix == this.colixB) {
if (!this.g3d.setC$H(this.colix)) return true;
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.screens3f[0], this.screens3f[4]);
if (!this.noCross) this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.crossWidthPixels, this.cross0, this.cross1);
this.g3d.fillConeScreen3f$B$I$javajs_util_P3$javajs_util_P3$Z(2, this.headWidthPixels, this.screens3f[4], this.screens3f[5], false);
return false;
}var needTranslucent=false;
if (this.g3d.setC$H(this.colix)) {
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.screens3f[0], this.screens3f[3]);
if (!this.noCross) this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.crossWidthPixels, this.cross0, this.cross1);
} else {
needTranslucent=true;
}this.colix=this.colixB;
if (this.g3d.setC$H(this.colix)) {
this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, this.diameter, this.screens3f[3], this.screens3f[4]);
this.g3d.fillConeScreen3f$B$I$javajs_util_P3$javajs_util_P3$Z(2, this.headWidthPixels, this.screens3f[4], this.screens3f[5], false);
} else {
needTranslucent=true;
}return needTranslucent;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
