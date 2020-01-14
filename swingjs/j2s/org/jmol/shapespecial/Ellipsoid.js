(function(){var P$=Clazz.newPackage("org.jmol.shapespecial"),p$1={},I$=[[0,'javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Ellipsoid");
C$.crtval=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.crtval=Clazz.array(Float.TYPE, -1, [0.3389, 0.4299, 0.4951, 0.5479, 0.5932, 0.6334, 0.6699, 0.7035, 0.7349, 0.7644, 0.7924, 0.8192, 0.8447, 0.8694, 0.8932, 0.9162, 0.9386, 0.9605, 0.9818, 1.0026, 1.023, 1.043, 1.0627, 1.0821, 1.1012, 1.12, 1.1386, 1.157, 1.1751, 1.1932, 1.211, 1.2288, 1.2464, 1.2638, 1.2812, 1.2985, 1.3158, 1.333, 1.3501, 1.3672, 1.3842, 1.4013, 1.4183, 1.4354, 1.4524, 1.4695, 1.4866, 1.5037, 1.5209, 1.5382, 1.5555, 1.5729, 1.5904, 1.608, 1.6257, 1.6436, 1.6616, 1.6797, 1.698, 1.7164, 1.7351, 1.754, 1.773, 1.7924, 1.8119, 1.8318, 1.8519, 1.8724, 1.8932, 1.9144, 1.936, 1.958, 1.9804, 2.0034, 2.0269, 2.051, 2.0757, 2.1012, 2.1274, 2.1544, 2.1824, 2.2114, 2.2416, 2.273, 2.3059, 2.3404, 2.3767, 2.4153, 2.4563, 2.5003, 2.5478, 2.5997, 2.6571, 2.7216, 2.7955, 2.8829, 2.9912, 3.1365, 3.3682]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.colix=0;
this.visible=false;
this.isValid=false;
this.center=null;
this.tensor=null;
this.options=null;
this.isOn=false;
this.id=null;
this.modelIndex=0;
this.pid=0;
this.lengths=null;
this.scale=0;
this.percent=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.colix=23;
this.center=$I$(1).new3$F$F$F(0, 0, 0);
this.isOn=true;
this.scale=1;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEmptyEllipsoid$S$I', function (id, modelIndex) {
var e=Clazz.new_(C$);
e.id=id;
e.modelIndex=modelIndex;
return e;
}, 1);

Clazz.newMeth(C$, 'getEllipsoidForAtomTensor$org_jmol_util_Tensor$org_jmol_modelset_Atom', function (t, center) {
var e=Clazz.new_(C$);
e.tensor=t;
e.modelIndex=t.modelIndex;
e.colix=0;
e.center=center;
return e;
}, 1);

Clazz.newMeth(C$, 'setCenter$javajs_util_P3', function (center) {
this.center=center;
p$1.validate$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'getLength$I', function (i) {
if (this.lengths == null ) this.setLengths$();
return (this.lengths == null  ? NaN : this.lengths[i]);
});

Clazz.newMeth(C$, 'setLengths$', function () {
if (this.tensor == null ) return;
if (this.lengths == null ) this.lengths=Clazz.array(Float.TYPE, [3]);
for (var i=0; i < this.lengths.length; i++) this.lengths[i]=this.tensor.getFactoredValue$I(i) * this.scale;

});

Clazz.newMeth(C$, 'setScale$F$Z', function (scale, isPercent) {
if (scale <= 0 ) {
this.isValid=false;
return;
}if (isPercent) {
if (scale == 2147483647 ) scale=(this.tensor.forThermalEllipsoid ? 50 : 100);
this.percent=(scale|0);
scale=(this.tensor.forThermalEllipsoid ? C$.getThermalRadius$I(this.percent) : this.percent < 1 ? 0 : this.percent / 100.0);
}this.scale=scale;
p$1.validate$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'getThermalRadius$I', function (prob) {
return C$.crtval[prob < 1 ? 0 : prob > 99 ? 98 : prob - 1];
}, 1);

Clazz.newMeth(C$, 'setTensor$org_jmol_util_Tensor', function (tensor) {
this.isValid=false;
this.tensor=tensor;
p$1.validate$Z.apply(this, [tensor != null ]);
});

Clazz.newMeth(C$, 'validate$Z', function (andSetLengths) {
if (this.tensor == null ) return;
if (andSetLengths) this.setLengths$();
this.isValid=true;
}, p$1);

Clazz.newMeth(C$, 'getEquationForQuadricWithCenter$F$F$F$javajs_util_M3$javajs_util_V3$javajs_util_M3$DA$javajs_util_M4', function (x, y, z, mToElliptical, vTemp, mTemp, coef, mDeriv) {
vTemp.set$F$F$F(x, y, z);
mToElliptical.rotate$javajs_util_T3(vTemp);
var f=1 - vTemp.dot$javajs_util_T3(vTemp);
mTemp.transposeM$javajs_util_M3(mToElliptical);
mTemp.rotate$javajs_util_T3(vTemp);
mTemp.mul$javajs_util_M3(mToElliptical);
coef[0]=mTemp.m00 / f;
coef[1]=mTemp.m11 / f;
coef[2]=mTemp.m22 / f;
coef[3]=mTemp.m01 * 2 / f;
coef[4]=mTemp.m02 * 2 / f;
coef[5]=mTemp.m12 * 2 / f;
coef[6]=-2 * vTemp.x / f;
coef[7]=-2 * vTemp.y / f;
coef[8]=-2 * vTemp.z / f;
coef[9]=-1;
if (mDeriv == null ) return;
mDeriv.setIdentity$();
mDeriv.m00=(2 * coef[0]);
mDeriv.m11=(2 * coef[1]);
mDeriv.m22=(2 * coef[2]);
mDeriv.m01=mDeriv.m10=coef[3];
mDeriv.m02=mDeriv.m20=coef[4];
mDeriv.m12=mDeriv.m21=coef[5];
mDeriv.m03=coef[6];
mDeriv.m13=coef[7];
mDeriv.m23=coef[8];
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
