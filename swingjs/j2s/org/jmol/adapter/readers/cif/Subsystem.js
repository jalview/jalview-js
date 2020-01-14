(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.cif"),p$1={},I$=[[0,'org.jmol.util.Logger','org.jmol.util.SimpleUnitCell','javajs.util.Matrix','javajs.util.T3','javajs.util.V3','javajs.util.Lst']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Subsystem");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.msRdr=null;
this.code=null;
this.d=0;
this.w=null;
this.symmetry=null;
this.modMatrices=null;
this.isFinalized=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_adapter_readers_cif_MSRdr$S$javajs_util_Matrix', function (msRdr, code, w) {
C$.$init$.apply(this);
this.msRdr=msRdr;
this.code=code;
this.w=w;
this.d=w.getArray$().length - 3;
}, 1);

Clazz.newMeth(C$, 'getSymmetry$', function () {
if (!this.isFinalized) p$1.setSymmetry$Z.apply(this, [true]);
return this.symmetry;
});

Clazz.newMeth(C$, 'getModMatrices$', function () {
if (!this.isFinalized) p$1.setSymmetry$Z.apply(this, [true]);
return this.modMatrices;
});

Clazz.newMeth(C$, 'setSymmetry$Z', function (setOperators) {
var a;
$I$(1).info$S("[subsystem " + this.code + "]" );
var winv=this.w.inverse$();
$I$(1).info$S("w=" + this.w);
$I$(1).info$S("w_inv=" + winv);
var w33=this.w.getSubmatrix$I$I$I$I(0, 0, 3, 3);
var wd3=this.w.getSubmatrix$I$I$I$I(3, 0, this.d, 3);
var w3d=this.w.getSubmatrix$I$I$I$I(0, 3, 3, this.d);
var wdd=this.w.getSubmatrix$I$I$I$I(3, 3, this.d, this.d);
var sigma=this.msRdr.getSigma$();
var sigma_nu=wdd.mul$javajs_util_Matrix(sigma).add$javajs_util_Matrix(wd3).mul$javajs_util_Matrix(w3d.mul$javajs_util_Matrix(sigma).add$javajs_util_Matrix(w33).inverse$());
var tFactor=wdd.sub$javajs_util_Matrix(sigma_nu.mul$javajs_util_Matrix(w3d));
$I$(1).info$S("sigma_nu = " + sigma_nu);
var s0=this.msRdr.cr.asc.getSymmetry$();
var vu43=s0.getUnitCellVectors$();
var vr43=$I$(2).getReciprocal$javajs_util_T3A$javajs_util_T3A$F(vu43, null, 1);
var mard3=Clazz.new_($I$(3).c$$DAA$I$I,[null, 3 + this.d, 3]);
var mar3=Clazz.new_($I$(3).c$$DAA$I$I,[null, 3, 3]);
var mard3a=mard3.getArray$();
var mar3a=mar3.getArray$();
for (var i=0; i < 3; i++) mard3a[i]=mar3a[i]=Clazz.array(Double.TYPE, -1, [vr43[i + 1].x, vr43[i + 1].y, vr43[i + 1].z]);

var sx=sigma.mul$javajs_util_Matrix(mar3);
a=sx.getArray$();
for (var i=0; i < this.d; i++) mard3a[i + 3]=a[i];

a=this.w.mul$javajs_util_Matrix(mard3).getArray$();
var uc_nu=Clazz.array($I$(4), [4]);
uc_nu[0]=vu43[0];
for (var i=0; i < 3; i++) uc_nu[i + 1]=$I$(5).new3$F$F$F(a[i][0], a[i][1], a[i][2]);

uc_nu=$I$(2).getReciprocal$javajs_util_T3A$javajs_util_T3A$F(uc_nu, null, 1);
this.symmetry=(this.msRdr.cr.getInterface$S("org.jmol.symmetry.Symmetry")).getUnitCell$javajs_util_T3A$Z$S(uc_nu, false, null);
this.modMatrices=Clazz.array($I$(3), -1, [sigma_nu, tFactor]);
if (!setOperators) return;
this.isFinalized=true;
$I$(1).info$S("unit cell parameters: " + this.symmetry.getUnitCellInfo$());
this.symmetry.createSpaceGroup$I$S$O$I(-1, "[subsystem " + this.code + "]" , Clazz.new_($I$(6)), this.d);
var nOps=s0.getSpaceGroupOperationCount$();
for (var iop=0; iop < nOps; iop++) {
var rv=s0.getOperationRsVs$I(iop);
var r0=rv.getRotation$();
var v0=rv.getTranslation$();
var r=this.w.mul$javajs_util_Matrix(r0).mul$javajs_util_Matrix(winv);
var v=this.w.mul$javajs_util_Matrix(v0);
var code=this.code;
if (p$1.isMixed$javajs_util_Matrix.apply(this, [r])) {
for (var e, $e = this.msRdr.htSubsystems.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var ss=e.getValue$();
if (ss === this ) continue;
var rj=ss.w.mul$javajs_util_Matrix(r0).mul$javajs_util_Matrix(winv);
if (!p$1.isMixed$javajs_util_Matrix.apply(this, [rj])) {
r=rj;
v=ss.w.mul$javajs_util_Matrix(v0);
code=ss.code;
break;
}}
}var jf=this.symmetry.addOp$S$javajs_util_Matrix$javajs_util_Matrix$javajs_util_Matrix(code, r, v, sigma_nu);
$I$(1).info$S(this.code + "." + (iop + 1) + (this.code.equals$O(code) ? "   " : ">" + code + " " ) + jf );
}
}, p$1);

Clazz.newMeth(C$, 'isMixed$javajs_util_Matrix', function (r) {
var a=r.getArray$();
for (var i=3; --i >= 0; ) for (var j=3 + this.d; --j >= 3; ) if (a[i][j] != 0 ) return true;


return false;
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return "Subsystem " + this.code + "\n" + this.w ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
