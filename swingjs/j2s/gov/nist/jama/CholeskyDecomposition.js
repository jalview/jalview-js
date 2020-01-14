(function(){var P$=Clazz.newPackage("gov.nist.jama"),I$=[[0,'gov.nist.jama.Matrix']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CholeskyDecomposition", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.L=null;
this.n=0;
this.isspd=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gov_nist_jama_Matrix', function (Arg) {
C$.$init$.apply(this);
var A=Arg.getArray$();
this.n=Arg.getRowDimension$();
this.L=Clazz.array(Double.TYPE, [this.n, this.n]);
this.isspd=(Arg.getColumnDimension$() == this.n);
for (var j=0; j < this.n; j++) {
var Lrowj=this.L[j];
var d=0.0;
for (var k=0; k < j; k++) {
var Lrowk=this.L[k];
var s=0.0;
for (var i=0; i < k; i++) {
s += Lrowk[i] * Lrowj[i];
}
Lrowj[k]=s=(A[j][k] - s) / this.L[k][k];
d=d + s * s;
this.isspd=!!(this.isspd & (A[k][j] == A[j][k] ));
}
d=A[j][j] - d;
this.isspd=!!(this.isspd & (d > 0.0 ));
this.L[j][j]=Math.sqrt(Math.max(d, 0.0));
for (var k=j + 1; k < this.n; k++) {
this.L[j][k]=0.0;
}
}
}, 1);

Clazz.newMeth(C$, 'isSPD$', function () {
return this.isspd;
});

Clazz.newMeth(C$, 'getL$', function () {
return Clazz.new_($I$(1).c$$DAA$I$I,[this.L, this.n, this.n]);
});

Clazz.newMeth(C$, 'solve$gov_nist_jama_Matrix', function (B) {
if (B.getRowDimension$() != this.n) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix row dimensions must agree."]);
}if (!this.isspd) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Matrix is not symmetric positive definite."]);
}var X=B.getArrayCopy$();
var nx=B.getColumnDimension$();
for (var k=0; k < this.n; k++) {
for (var j=0; j < nx; j++) {
for (var i=0; i < k; i++) {
X[k][j] -= X[i][j] * this.L[k][i];
}
X[k][j] /= this.L[k][k];
}
}
for (var k=this.n - 1; k >= 0; k--) {
for (var j=0; j < nx; j++) {
for (var i=k + 1; i < this.n; i++) {
X[k][j] -= X[i][j] * this.L[i][k];
}
X[k][j] /= this.L[k][k];
}
}
return Clazz.new_($I$(1).c$$DAA$I$I,[X, this.n, nx]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
