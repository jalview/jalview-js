(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},I$=[[0,'javajs.util.V3','org.jmol.viewer.JC','javajs.util.P3','javajs.util.T3','javajs.util.M4','javajs.util.P4','java.util.Hashtable','org.jmol.util.Escape','org.jmol.api.Interface','org.jmol.util.SimpleUnitCell','org.jmol.util.BoxInfo','javajs.util.Quat','javajs.util.M3','org.jmol.symmetry.Symmetry','javajs.util.PT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnitCell", null, 'org.jmol.util.SimpleUnitCell', 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cartesianOffset=Clazz.new_($I$(3,1));
this.name="";
},1);

C$.$fields$=[['Z',['allFractionalRelative'],'S',['name'],'O',['vertices','javajs.util.P3[]','fractionalOffset','javajs.util.P3','+cartesianOffset','unitCellMultiplier','javajs.util.T3','moreInfo','javajs.util.Lst']]
,['O',['unitVectors','javajs.util.V3[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fromOABC$javajs_util_T3A$Z', function (oabc, setRelative) {
var c=Clazz.new_(C$);
if (oabc.length == 3) oabc=Clazz.array($I$(4), -1, [Clazz.new_($I$(3,1)), oabc[0], oabc[1], oabc[2]]);
var parameters=Clazz.array(Float.TYPE, -1, [-1, 0, 0, 0, 0, 0, oabc[1].x, oabc[1].y, oabc[1].z, oabc[2].x, oabc[2].y, oabc[2].z, oabc[3].x, oabc[3].y, oabc[3].z]);
c.init$FA(parameters);
c.allFractionalRelative=setRelative;
p$1.initUnitcellVertices.apply(c, []);
p$1.setCartesianOffset$javajs_util_T3.apply(c, [oabc[0]]);
return c;
}, 1);

Clazz.newMeth(C$, 'fromParams$FA$Z', function (params, setRelative) {
var c=Clazz.new_(C$);
c.init$FA(params);
p$1.initUnitcellVertices.apply(c, []);
c.allFractionalRelative=setRelative;
return c;
}, 1);

Clazz.newMeth(C$, 'initOrientation$javajs_util_M3', function (mat) {
if (mat == null ) return;
var m=Clazz.new_($I$(5,1));
m.setToM3$javajs_util_M34(mat);
this.matrixFractionalToCartesian.mul2$javajs_util_M4$javajs_util_M4(m, this.matrixFractionalToCartesian);
this.matrixCartesianToFractional.setM4$javajs_util_M4(this.matrixFractionalToCartesian).invert$();
p$1.initUnitcellVertices.apply(this, []);
});

Clazz.newMeth(C$, 'toUnitCell$javajs_util_T3$javajs_util_T3', function (pt, offset) {
if (this.matrixCartesianToFractional == null ) return;
if (offset == null ) {
this.matrixCartesianToFractional.rotTrans$javajs_util_T3(pt);
this.unitize$javajs_util_T3(pt);
this.matrixFractionalToCartesian.rotTrans$javajs_util_T3(pt);
} else {
this.matrixCtoFNoOffset.rotTrans$javajs_util_T3(pt);
this.unitize$javajs_util_T3(pt);
pt.add$javajs_util_T3(offset);
this.matrixFtoCNoOffset.rotTrans$javajs_util_T3(pt);
}});

Clazz.newMeth(C$, 'unitize$javajs_util_T3', function (pt) {
switch (this.dimension) {
case 3:
pt.z=C$.toFractionalX$F(pt.z);
case 2:
pt.y=C$.toFractionalX$F(pt.y);
case 1:
pt.x=C$.toFractionalX$F(pt.x);
}
});

Clazz.newMeth(C$, 'reset$', function () {
this.unitCellMultiplier=null;
this.setOffset$javajs_util_T3($I$(3).new3$F$F$F(0, 0, 0));
});

Clazz.newMeth(C$, 'setOffset$javajs_util_T3', function (pt) {
if (pt == null ) return;
var pt4=(Clazz.instanceOf(pt, "javajs.util.T4") ? pt : null);
var isCell555P4=(pt4 != null  && pt4.w > 999999  );
if (pt4 != null  ? pt4.w <= 0  || isCell555P4  : pt.x >= 100  || pt.y >= 100  ) {
this.unitCellMultiplier=(pt.z == 0  && pt.x == pt.y   && !isCell555P4  ? null : isCell555P4 ? $I$(6).newPt$javajs_util_P4(pt4) : $I$(3).newP$javajs_util_T3(pt));
if (pt4 == null  || pt4.w == 0   || isCell555P4 ) return;
}if (this.hasOffset$() || pt.lengthSquared$() > 0  ) {
this.fractionalOffset=Clazz.new_($I$(3,1));
this.fractionalOffset.setT$javajs_util_T3(pt);
}this.matrixCartesianToFractional.m03=-pt.x;
this.matrixCartesianToFractional.m13=-pt.y;
this.matrixCartesianToFractional.m23=-pt.z;
this.cartesianOffset.setT$javajs_util_T3(pt);
this.matrixFractionalToCartesian.m03=0;
this.matrixFractionalToCartesian.m13=0;
this.matrixFractionalToCartesian.m23=0;
this.matrixFractionalToCartesian.rotTrans$javajs_util_T3(this.cartesianOffset);
this.matrixFractionalToCartesian.m03=this.cartesianOffset.x;
this.matrixFractionalToCartesian.m13=this.cartesianOffset.y;
this.matrixFractionalToCartesian.m23=this.cartesianOffset.z;
if (this.allFractionalRelative) {
this.matrixCtoFNoOffset.setM4$javajs_util_M4(this.matrixCartesianToFractional);
this.matrixFtoCNoOffset.setM4$javajs_util_M4(this.matrixFractionalToCartesian);
}});

Clazz.newMeth(C$, 'setCartesianOffset$javajs_util_T3', function (origin) {
this.cartesianOffset.setT$javajs_util_T3(origin);
this.matrixFractionalToCartesian.m03=this.cartesianOffset.x;
this.matrixFractionalToCartesian.m13=this.cartesianOffset.y;
this.matrixFractionalToCartesian.m23=this.cartesianOffset.z;
var wasOffset=this.hasOffset$();
this.fractionalOffset=Clazz.new_($I$(3,1));
this.fractionalOffset.setT$javajs_util_T3(this.cartesianOffset);
this.matrixCartesianToFractional.m03=0;
this.matrixCartesianToFractional.m13=0;
this.matrixCartesianToFractional.m23=0;
this.matrixCartesianToFractional.rotTrans$javajs_util_T3(this.fractionalOffset);
this.matrixCartesianToFractional.m03=-this.fractionalOffset.x;
this.matrixCartesianToFractional.m13=-this.fractionalOffset.y;
this.matrixCartesianToFractional.m23=-this.fractionalOffset.z;
if (this.allFractionalRelative) {
this.matrixCtoFNoOffset.setM4$javajs_util_M4(this.matrixCartesianToFractional);
this.matrixFtoCNoOffset.setM4$javajs_util_M4(this.matrixFractionalToCartesian);
}if (!wasOffset && this.fractionalOffset.lengthSquared$() == 0  ) this.fractionalOffset=null;
}, p$1);

Clazz.newMeth(C$, 'getInfo$', function () {
var info=Clazz.new_($I$(7,1));
info.put$O$O("params", this.unitCellParams);
info.put$O$O("vectors", this.getUnitCellVectors$());
info.put$O$O("volume", Double.valueOf$D(this.volume));
info.put$O$O("matFtoC", this.matrixFractionalToCartesian);
info.put$O$O("matCtoF", this.matrixCartesianToFractional);
return info;
});

Clazz.newMeth(C$, 'dumpInfo$Z', function (isFull) {
return "a=" + new Float(this.a).toString() + ", b=" + new Float(this.b).toString() + ", c=" + new Float(this.c).toString() + ", alpha=" + new Float(this.alpha).toString() + ", beta=" + new Float(this.beta).toString() + ", gamma=" + new Float(this.gamma).toString() + "\n" + $I$(8,"eAP$javajs_util_T3A",[this.getUnitCellVectors$()]) + "\nvolume=" + new Double(this.volume).toString() + (isFull ? "\nfractional to cartesian: " + this.matrixFractionalToCartesian + "\ncartesian to fractional: " + this.matrixCartesianToFractional  : "") ;
});

Clazz.newMeth(C$, 'getVertices$', function () {
return this.vertices;
});

Clazz.newMeth(C$, 'getCartesianOffset$', function () {
return this.cartesianOffset;
});

Clazz.newMeth(C$, 'getFractionalOffset$', function () {
return this.fractionalOffset;
});

Clazz.newMeth(C$, 'getTensor$org_jmol_viewer_Viewer$FA', function (vwr, parBorU) {
var t=($I$(9).getUtil$S$org_jmol_viewer_Viewer$S("Tensor", vwr, "file"));
if (parBorU[0] == 0  && parBorU[1] == 0   && parBorU[2] == 0  ) {
var f=parBorU[7];
var eigenValues=Clazz.array(Float.TYPE, -1, [f, f, f]);
return t.setFromEigenVectors$javajs_util_T3A$FA$S$S$org_jmol_util_Tensor(C$.unitVectors, eigenValues, "iso", "Uiso=" + new Float(f).toString(), null);
}t.parBorU=parBorU;
var Bcart=Clazz.array(Double.TYPE, [6]);
var ortepType=(parBorU[6]|0);
if (ortepType == 12) {
Bcart[0]=parBorU[0] * 19.739208802178716;
Bcart[1]=parBorU[1] * 19.739208802178716;
Bcart[2]=parBorU[2] * 19.739208802178716;
Bcart[3]=parBorU[3] * 19.739208802178716 * 2 ;
Bcart[4]=parBorU[4] * 19.739208802178716 * 2 ;
Bcart[5]=parBorU[5] * 19.739208802178716 * 2 ;
parBorU[7]=(parBorU[0] + parBorU[1] + parBorU[3] ) / 3;
} else {
var isFractional=(ortepType == 4 || ortepType == 5  || ortepType == 8  || ortepType == 9 );
var cc=2 - (ortepType % 2);
var dd=(ortepType == 8 || ortepType == 9  || ortepType == 10  ? 19.739208802178716 : ortepType == 4 || ortepType == 5  ? 0.25 : ortepType == 2 || ortepType == 3  ? Math.log(2) : 1);
var B11=parBorU[0] * dd * (isFractional ? this.a_ * this.a_ : 1) ;
var B22=parBorU[1] * dd * (isFractional ? this.b_ * this.b_ : 1) ;
var B33=parBorU[2] * dd * (isFractional ? this.c_ * this.c_ : 1) ;
var B12=parBorU[3] * dd * (isFractional ? this.a_ * this.b_ : 1) * cc ;
var B13=parBorU[4] * dd * (isFractional ? this.a_ * this.c_ : 1) * cc ;
var B23=parBorU[5] * dd * (isFractional ? this.b_ * this.c_ : 1) * cc ;
parBorU[7]=Math.pow(B11 / 19.739208802178716 / this.a_ / this.a_  * B22 / 19.739208802178716 / this.b_ / this.b_ * B33 / 19.739208802178716 / this.c_ / this.c_, 0.3333);
Bcart[0]=this.a * this.a * B11  + this.b * this.b * this.cosGamma * this.cosGamma * B22  + this.c * this.c * this.cosBeta * this.cosBeta * B33  + this.a * this.b * this.cosGamma * B12  + this.b * this.c * this.cosGamma * this.cosBeta * B23  + this.a * this.c * this.cosBeta * B13 ;
Bcart[1]=this.b * this.b * this.sinGamma * this.sinGamma * B22  + this.c * this.c * this.cA_ * this.cA_ * B33  + this.b * this.c * this.cA_ * this.sinGamma * B23 ;
Bcart[2]=this.c * this.c * this.cB_ * this.cB_ * B33 ;
Bcart[3]=2 * this.b * this.b * this.cosGamma * this.sinGamma * B22  + 2 * this.c * this.c * this.cA_ * this.cosBeta * B33  + this.a * this.b * this.sinGamma * B12  + this.b * this.c * (this.cA_ * this.cosGamma + this.sinGamma * this.cosBeta) * B23  + this.a * this.c * this.cA_ * B13 ;
Bcart[4]=2 * this.c * this.c * this.cB_ * this.cosBeta * B33  + this.b * this.c * this.cosGamma * B23  + this.a * this.c * this.cB_ * B13 ;
Bcart[5]=2 * this.c * this.c * this.cA_ * this.cB_ * B33  + this.b * this.c * this.cB_ * this.sinGamma * B23 ;
}return t.setFromThermalEquation$DA$S(Bcart, $I$(8).eAF$FA(parBorU));
});

Clazz.newMeth(C$, 'getCanonicalCopy$F$Z', function (scale, withOffset) {
var pts=Clazz.array($I$(3), [8]);
var cell0=null;
var cell1=null;
if (withOffset && this.unitCellMultiplier != null  ) {
cell0=Clazz.new_($I$(3,1));
cell1=Clazz.new_($I$(3,1));
$I$(10,"ijkToPoint3f$I$javajs_util_P3$I$I",[(this.unitCellMultiplier.x|0), cell0, 0, 0]);
$I$(10,"ijkToPoint3f$I$javajs_util_P3$I$I",[(this.unitCellMultiplier.y|0), cell1, 0, 0]);
cell1.sub$javajs_util_T3(cell0);
}for (var i=0; i < 8; i++) {
var pt=pts[i]=$I$(3,"newP$javajs_util_T3",[$I$(11).unitCubePoints[i]]);
if (cell0 != null ) {
scale *= (this.unitCellMultiplier.z == 0  ? 1 : this.unitCellMultiplier.z);
pts[i].add3$F$F$F(cell0.x + cell1.x * pt.x, cell0.y + cell1.y * pt.y, cell0.z + cell1.z * pt.z);
}this.matrixFractionalToCartesian.rotTrans$javajs_util_T3(pt);
if (!withOffset) pt.sub$javajs_util_T3(this.cartesianOffset);
}
return $I$(11).getCanonicalCopy$javajs_util_P3A$F(pts, scale);
});

Clazz.newMeth(C$, 'toFractionalX$F', function (x) {
x=(x - Math.floor(x));
if (x > 0.9999  || x < 1.0E-4  ) x=0;
return x;
}, 1);

Clazz.newMeth(C$, 'initUnitcellVertices', function () {
if (this.matrixFractionalToCartesian == null ) return;
this.matrixCtoFNoOffset=$I$(5).newM4$javajs_util_M4(this.matrixCartesianToFractional);
this.matrixFtoCNoOffset=$I$(5).newM4$javajs_util_M4(this.matrixFractionalToCartesian);
this.vertices=Clazz.array($I$(3), [8]);
for (var i=8; --i >= 0; ) this.vertices[i]=this.matrixFractionalToCartesian.rotTrans2$javajs_util_T3$javajs_util_T3($I$(11).unitCubePoints[i], Clazz.new_($I$(3,1)));

}, p$1);

Clazz.newMeth(C$, 'checkDistance$javajs_util_P3$javajs_util_P3$F$F$I$I$I$javajs_util_P3', function (f1, f2, distance, dx, iRange, jRange, kRange, ptOffset) {
var p1=$I$(3).newP$javajs_util_T3(f1);
this.toCartesian$javajs_util_T3$Z(p1, true);
for (var i=-iRange; i <= iRange; i++) for (var j=-jRange; j <= jRange; j++) for (var k=-kRange; k <= kRange; k++) {
ptOffset.set$F$F$F(f2.x + i, f2.y + j, f2.z + k);
this.toCartesian$javajs_util_T3$Z(ptOffset, true);
var d=p1.distance$javajs_util_T3(ptOffset);
if (dx > 0  ? Math.abs(d - distance) <= dx  : d <= distance  && d > 0.1  ) {
ptOffset.set$F$F$F(i, j, k);
return true;
}}


return false;
});

Clazz.newMeth(C$, 'getUnitCellMultiplier$', function () {
return this.unitCellMultiplier;
});

Clazz.newMeth(C$, 'getUnitCellVectors$', function () {
var m=this.matrixFractionalToCartesian;
return Clazz.array($I$(3), -1, [$I$(3).newP$javajs_util_T3(this.cartesianOffset), $I$(3,"new3$F$F$F",[p$1.fix$F.apply(this, [m.m00]), p$1.fix$F.apply(this, [m.m10]), p$1.fix$F.apply(this, [m.m20])]), $I$(3,"new3$F$F$F",[p$1.fix$F.apply(this, [m.m01]), p$1.fix$F.apply(this, [m.m11]), p$1.fix$F.apply(this, [m.m21])]), $I$(3,"new3$F$F$F",[p$1.fix$F.apply(this, [m.m02]), p$1.fix$F.apply(this, [m.m12]), p$1.fix$F.apply(this, [m.m22])])]);
});

Clazz.newMeth(C$, 'fix$F', function (x) {
return (Math.abs(x) < 0.001  ? 0 : x);
}, p$1);

Clazz.newMeth(C$, 'isSameAs$org_jmol_symmetry_UnitCell', function (uc) {
if (uc.unitCellParams.length != this.unitCellParams.length) return false;
for (var i=this.unitCellParams.length; --i >= 0; ) if (this.unitCellParams[i] != uc.unitCellParams[i]  && !(Float.isNaN$F(this.unitCellParams[i]) && Float.isNaN$F(uc.unitCellParams[i]) ) ) return false;

return (this.fractionalOffset == null  ? !uc.hasOffset$() : uc.fractionalOffset == null  ? !this.hasOffset$() : this.fractionalOffset.distanceSquared$javajs_util_T3(uc.fractionalOffset) == 0 );
});

Clazz.newMeth(C$, 'hasOffset$', function () {
return (this.fractionalOffset != null  && this.fractionalOffset.lengthSquared$() != 0  );
});

Clazz.newMeth(C$, 'getState$', function () {
var s="";
if (this.fractionalOffset != null  && this.fractionalOffset.lengthSquared$() != 0  ) s += "  unitcell offset " + $I$(8).eP$javajs_util_T3(this.fractionalOffset) + ";\n" ;
if (this.unitCellMultiplier != null ) s += "  unitcell range " + $I$(10).escapeMultiplier$javajs_util_T3(this.unitCellMultiplier) + ";\n" ;
return s;
});

Clazz.newMeth(C$, 'getQuaternionRotation$S', function (abc) {
var a=$I$(1).newVsub$javajs_util_T3$javajs_util_T3(this.vertices[4], this.vertices[0]);
var b=$I$(1).newVsub$javajs_util_T3$javajs_util_T3(this.vertices[2], this.vertices[0]);
var c=$I$(1).newVsub$javajs_util_T3$javajs_util_T3(this.vertices[1], this.vertices[0]);
var x=Clazz.new_($I$(1,1));
var v=Clazz.new_($I$(1,1));
var mul=(abc.charAt$I(0) == "-" ? -1 : 1);
if (mul < 0) abc=abc.substring$I(1);
var quadrant=0;
if (abc.length$() == 2) {
quadrant=(abc.charCodeAt$I(1)) - 48;
abc=abc.substring$I$I(0, 1);
}var isEven=(quadrant % 2 == 0);
var axis="abc".indexOf$S(abc);
var v1;
var v2;
switch (axis) {
case 0:
default:
v1=a;
v2=c;
if (quadrant > 0) {
if (mul > 0 == isEven ) {
v2=b;
v1.scale$F(-1);
}}break;
case 1:
v1=b;
v2=a;
if (quadrant > 0) {
if (mul > 0 == isEven ) {
v2=c;
v1.scale$F(-1);
}}break;
case 2:
v1=c;
v2=a;
if (quadrant > 0) {
quadrant=5 - quadrant;
if (mul > 0 != isEven ) {
v2=b;
v1.scale$F(-1);
}}break;
}
switch (quadrant) {
case 0:
default:
case 1:
break;
case 2:
v1.scale$F(-1);
v2.scale$F(-1);
break;
case 3:
v2.scale$F(-1);
break;
case 4:
v1.scale$F(-1);
break;
}
x.cross$javajs_util_T3$javajs_util_T3(v1, v2);
v.cross$javajs_util_T3$javajs_util_T3(x, v1);
return $I$(12).getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3(null, v, x).inv$();
});

Clazz.newMeth(C$, 'getV0abc$O', function (def) {
if (Clazz.instanceOf(def, Clazz.array($I$(4), -1))) return def;
var m;
var isRev=false;
var pts=Clazz.array($I$(1), [4]);
var pt=pts[0]=$I$(1).new3$F$F$F(0, 0, 0);
pts[1]=$I$(1).new3$F$F$F(1, 0, 0);
pts[2]=$I$(1).new3$F$F$F(0, 1, 0);
pts[3]=$I$(1).new3$F$F$F(0, 0, 1);
var m3=Clazz.new_($I$(13,1));
if (Clazz.instanceOf(def, "java.lang.String")) {
var sdef=def;
var strans="0,0,0";
if (sdef.indexOf$S("a=") == 0) return $I$(10).setOabc$S$FA$javajs_util_T3A(sdef, null, pts);
var ptc=sdef.indexOf$S(";");
if (ptc >= 0) {
strans=sdef.substring$I(ptc + 1);
sdef=sdef.substring$I$I(0, ptc);
}sdef += ";0,0,0";
isRev=sdef.startsWith$S("!");
if (isRev) sdef=sdef.substring$I(1);
var symTemp=Clazz.new_($I$(14,1));
symTemp.setSpaceGroup$Z(false);
var i=symTemp.addSpaceGroupOperation$S$I("=" + sdef, 0);
if (i < 0) return null;
m=symTemp.getSpaceGroupOperation$I(i);
(m).doFinalize$();
if (strans != null ) {
var atrans=$I$(15).split$S$S(strans, ",");
var ftrans=Clazz.array(Float.TYPE, [3]);
if (atrans.length == 3) for (var j=0; j < 3; j++) {
var s=atrans[j];
var sfpt=s.indexOf$S("/");
if (sfpt >= 0) {
ftrans[j]=$I$(15,"parseFloat$S",[s.substring$I$I(0, sfpt)]) / $I$(15,"parseFloat$S",[s.substring$I(sfpt + 1)]);
} else {
ftrans[j]=$I$(15).parseFloat$S(s);
}}
var ptrans=$I$(3).new3$F$F$F(ftrans[0], ftrans[1], ftrans[2]);
m.setTranslation$javajs_util_T3(ptrans);
}} else if (Clazz.instanceOf(def, "javajs.util.M3")) {
m=$I$(5,"newMV$javajs_util_M3$javajs_util_T3",[def, Clazz.new_($I$(3,1))]);
} else if (Clazz.instanceOf(def, "javajs.util.M4")) {
m=def;
} else {
m=(def)[0];
m.getRotationScale$javajs_util_M3(m3);
this.toCartesian$javajs_util_T3$Z(pt, false);
m.rotTrans$javajs_util_T3(pt);
for (var i=1; i < 4; i++) {
this.toCartesian$javajs_util_T3$Z(pts[i], true);
m3.rotate$javajs_util_T3(pts[i]);
}
return pts;
}m.getRotationScale$javajs_util_M3(m3);
m.getTranslation$javajs_util_T3(pt);
if (isRev) {
m3.invert$();
m3.transpose$();
m3.rotate$javajs_util_T3(pt);
pt.scale$F(-1);
} else {
m3.transpose$();
}this.toCartesian$javajs_util_T3$Z(pt, false);
for (var i=1; i < 4; i++) {
m3.rotate$javajs_util_T3(pts[i]);
this.toCartesian$javajs_util_T3$Z(pts[i], true);
}
return pts;
});

Clazz.newMeth(C$, 'toFromPrimitive$Z$C$javajs_util_T3A$javajs_util_M3', function (toPrimitive, type, uc, primitiveToCrystal) {
var offset=uc.length - 3;
var mf=null;
if (type == "r" || primitiveToCrystal == null  ) {
switch (type.$c()) {
default:
return false;
case 114:
$I$(10).getReciprocal$javajs_util_T3A$javajs_util_T3A$F(uc, uc, 1);
return true;
case 80:
toPrimitive=true;
mf=$I$(13,"newA9$FA",[Clazz.array(Float.TYPE, -1, [1, 0, 0, 0, 1, 0, 0, 0, 1])]);
break;
case 65:
mf=$I$(13,"newA9$FA",[Clazz.array(Float.TYPE, -1, [1, 0, 0, 0, 0.5, 0.5, 0, -0.5, 0.5])]);
break;
case 66:
mf=$I$(13,"newA9$FA",[Clazz.array(Float.TYPE, -1, [0.5, 0, 0.5, 0, 1, 0, -0.5, 0, 0.5])]);
break;
case 67:
mf=$I$(13,"newA9$FA",[Clazz.array(Float.TYPE, -1, [0.5, 0.5, 0, -0.5, 0.5, 0, 0, 0, 1])]);
break;
case 82:
mf=$I$(13,"newA9$FA",[Clazz.array(Float.TYPE, -1, [0.6666667, -0.33333334, -0.33333334, 0.33333334, 0.33333334, -0.6666667, 0.33333334, 0.33333334, 0.33333334])]);
break;
case 73:
mf=$I$(13,"newA9$FA",[Clazz.array(Float.TYPE, -1, [-0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5])]);
break;
case 70:
mf=$I$(13,"newA9$FA",[Clazz.array(Float.TYPE, -1, [0, 0.5, 0.5, 0.5, 0, 0.5, 0.5, 0.5, 0])]);
break;
}
if (!toPrimitive) mf.invert$();
} else {
mf=$I$(13).newM3$javajs_util_M3(primitiveToCrystal);
if (toPrimitive) mf.invert$();
}for (var i=uc.length; --i >= offset; ) {
var p=uc[i];
this.toFractional$javajs_util_T3$Z(p, false);
mf.rotate$javajs_util_T3(p);
this.toCartesian$javajs_util_T3$Z(p, false);
}
return true;
});

Clazz.newMeth(C$, 'getConventionalUnitCell$S$javajs_util_M3', function (latticeType, primitiveToCrystal) {
var oabc=this.getUnitCellVectors$();
if (!latticeType.equals$O("P") || primitiveToCrystal != null  ) this.toFromPrimitive$Z$C$javajs_util_T3A$javajs_util_M3(false, latticeType.charAt$I(0), oabc, primitiveToCrystal);
return oabc;
});

Clazz.newMeth(C$, 'cloneUnitCell$org_jmol_symmetry_UnitCell', function (uc) {
var ucnew=null;
try {
ucnew=uc.clone$();
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
} else {
throw e;
}
}
return ucnew;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.unitVectors=Clazz.array($I$(1), -1, [$I$(2).axisX, $I$(2).axisY, $I$(2).axisZ]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
