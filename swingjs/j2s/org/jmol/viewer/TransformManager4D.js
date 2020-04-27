(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},I$=[[0,'javajs.util.M4','javajs.util.V3','javajs.util.P4']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TransformManager4D", null, 'org.jmol.viewer.TransformManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.is4D=false;
this.mouseMode=3;
this.m3_toScreen=Clazz.new_($I$(1,1));
this.v1=Clazz.new_($I$(2,1));
this.m4=Clazz.new_($I$(1,1));
this.p4=Clazz.new_($I$(3,1));
this.zero=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['is4D'],'F',['zOffset'],'I',['mouseMode'],'O',['m2_rotate','javajs.util.M4','+m3_toScreen','v1','javajs.util.T3','m4','javajs.util.M4','p4','javajs.util.T4','zero','javajs.util.V3']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'resetRotation$', function () {
if (this.m2_rotate != null ) this.m2_rotate.setIdentity$();
this.matrixRotate.setScale$F(1);
});

Clazz.newMeth(C$, 'rotateXYBy$F$F$javajs_util_BS', function (xDelta, yDelta, bsAtoms) {
this.rotate3DBall$F$F$javajs_util_BS(xDelta, yDelta, bsAtoms);
switch (this.is4D && bsAtoms == null   ? this.mouseMode : 0) {
case 0:
this.m2_rotate=null;
break;
case 1:
p$1.checkM2.apply(this, []);
this.rotate4DBall$F$F$F(0, xDelta, yDelta);
break;
case 2:
p$1.checkM2.apply(this, []);
this.rotate4DBall$F$F$F(xDelta, 0, yDelta);
break;
case 3:
p$1.checkM2.apply(this, []);
this.rotate4DBall$F$F$F(xDelta, yDelta, 0);
break;
}
});

Clazz.newMeth(C$, 'rotate4DBall$F$F$F', function (xDelta, yDelta, zDelta) {
var scale=50.0;
this.setAsBallRotation$javajs_util_M4$F$F$F$F(this.m4, scale, xDelta, yDelta, zDelta);
this.m2_rotate.mul2$javajs_util_M4$javajs_util_M4(this.m4, this.m2_rotate);
});

Clazz.newMeth(C$, 'setAsBallRotation$javajs_util_M4$F$F$F$F', function (m, scale, dx, dy, dz) {
var dxyz2=dx * dx + dy * dy + dz * dz;
var sxyz=Math.sqrt(dxyz2);
var th=sxyz / scale;
var c=Math.cos(th);
var s=Math.sin(th);
var nx=dx / sxyz;
var ny=dy / sxyz;
var nz=dz / sxyz;
var c1=c - 1;
m.m00=1 + c1 * nx * nx ;
m.m11=1 + c1 * ny * ny ;
m.m22=1 + c1 * nz * nz ;
m.m33=c;
m.m01=m.m10=c1 * nx * ny ;
m.m02=m.m20=c1 * nx * nz ;
m.m12=m.m21=c1 * ny * nz ;
m.m30=-(m.m03=s * nx);
m.m31=-(m.m13=s * ny);
m.m32=-(m.m23=s * nz);
});

Clazz.newMeth(C$, 'checkM2', function () {
if (this.m2_rotate == null ) this.m2_rotate=$I$(1).newMV$javajs_util_M3$javajs_util_T3(this.matrixRotate, this.zero);
}, p$1);

Clazz.newMeth(C$, 'calcTransformMatrix$', function () {
C$.superclazz.prototype.calcTransformMatrix$.apply(this, []);
this.doTransform4D=(this.is4D && !this.stereoFrame && this.mode != 1  );
if (!this.doTransform4D) return;
this.v1.sub2$javajs_util_T3$javajs_util_T3(this.frameOffset, this.fixedRotationCenter);
p$1.checkM2.apply(this, []);
this.m3_toScreen.setIdentity$();
this.m3_toScreen.m00=this.m3_toScreen.m11=this.m3_toScreen.m22=this.scalePixelsPerAngstrom;
this.m3_toScreen.m11=this.m3_toScreen.m22=-this.scalePixelsPerAngstrom;
System.out.println$O(this.m2_rotate);
this.zOffset=this.modelCenterOffset;
});

Clazz.newMeth(C$, 'getScreenTemp$javajs_util_T3', function (ptXYZ) {
if (this.doTransform4D && Clazz.instanceOf(ptXYZ, "javajs.util.T4") ) {
this.p4.add2$javajs_util_T3$javajs_util_T3(ptXYZ, this.v1);
this.m2_rotate.rotate$javajs_util_T3(this.p4);
this.fScrPt.setT$javajs_util_T3(this.p4);
this.m3_toScreen.rotTrans$javajs_util_T3(this.fScrPt);
this.fScrPt.z += this.zOffset;
} else {
this.matrixTransform.rotTrans2$javajs_util_T3$javajs_util_T3(ptXYZ, this.fScrPt);
}});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:27 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
