(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'org.openscience.jmol.app.janocchio.Atoms','java.io.BufferedReader','java.io.FileReader','java.io.File','java.text.NumberFormat','StringBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NoeMatrix");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.eigenValues=null;
this.eigenVectors=null;
this.relaxMatrix=null;
this.noeMatrix=null;
this.distanceMatrix=null;
this.atoms=null;
this.nAtoms=0;
this.atomCounter=0;
this.i=0;
this.j=0;
this.k=0;
this.m=0;
this.n=0;
this.p=0;
this.q=0;
this.tau=0;
this.freq=0;
this.tMix=0;
this.cutoff=0;
this.rhoStar=0;
this.noesychanged=false;
this.tauchanged=false;
this.mixchanged=false;
this.freqchanged=false;
this.cutoffchanged=false;
this.rhoStarchanged=false;
this.noesy=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.noesychanged=true;
this.tauchanged=true;
this.mixchanged=true;
this.freqchanged=true;
this.cutoffchanged=true;
this.rhoStarchanged=true;
this.noesy=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.freq=2.5132741228718348E9;
this.tau=8.0E-11;
this.tMix=0.5;
this.cutoff=10;
this.rhoStar=0.1;
}, 1);

Clazz.newMeth(C$, 'setCorrelationTime$D', function (t) {
this.tau=t * 1.0E-12;
this.tauchanged=true;
});

Clazz.newMeth(C$, 'setMixingTime$D', function (t) {
this.tMix=t;
this.mixchanged=true;
});

Clazz.newMeth(C$, 'setNMRfreq$D', function (f) {
this.freq=f * 2 * 3.141592653589793 * 1000000.0 ;
this.freqchanged=true;
});

Clazz.newMeth(C$, 'setCutoff$D', function (c) {
this.cutoff=c;
this.cutoffchanged=true;
});

Clazz.newMeth(C$, 'setRhoStar$D', function (c) {
this.rhoStar=c;
this.rhoStarchanged=true;
});

Clazz.newMeth(C$, 'setNoesy$Z', function (b) {
this.noesy=b;
this.noesychanged=true;
});

Clazz.newMeth(C$, 'getCorrelationTime$', function () {
return this.tau;
});

Clazz.newMeth(C$, 'getMixingTime$', function () {
return this.tMix;
});

Clazz.newMeth(C$, 'getNoesy$', function () {
return this.noesy;
});

Clazz.newMeth(C$, 'getNMRfreq$', function () {
return this.freq / 2 / 3.141592653589793 / 1000000.0 ;
});

Clazz.newMeth(C$, 'getCutoff$', function () {
return this.cutoff;
});

Clazz.newMeth(C$, 'doItAll', function () {
this.setNMRfreq$D(500);
this.setCorrelationTime$D(80.0);
this.setMixingTime$D(0.5);
this.setCutoff$D(10.0);
this.setRhoStar$D(0.1);
this.setNoesy$Z(true);
System.out.println$S("starting");
p$1.readAtomsFromFile.apply(this, []);
this.relaxMatrix=Clazz.array(Double.TYPE, [this.nAtoms, this.nAtoms]);
this.eigenValues=Clazz.array(Double.TYPE, [this.nAtoms, this.nAtoms]);
this.eigenVectors=Clazz.array(Double.TYPE, [this.nAtoms, this.nAtoms]);
this.noeMatrix=Clazz.array(Double.TYPE, [this.nAtoms, this.nAtoms]);
System.out.println$S("read atoms: " + Integer.toString$I(this.nAtoms));
p$1.calcRelaxMatrix.apply(this, []);
System.out.println$S("built matrix");
System.out.println$S("total iterations = " + Integer.toString$I(p$1.Diagonalise.apply(this, [])));
System.out.println$S("diagonalised matrix");
p$1.calcNoeMatrix.apply(this, []);
System.out.println$S("calculated NOE matrix");
System.out.println$S(this.toString());
System.out.println$S("");
System.out.println$S(this.toStringNormRow$());
try {
this.calcNOEs$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
System.out.println$D(this.getNMRfreq$());
System.out.println$D(this.getCorrelationTime$());
}, p$1);

Clazz.newMeth(C$, 'calcNOEs$', function () {
if (this.nAtoms == 0 || this.atoms == null  ) {
return Clazz.array(Double.TYPE, [0, 0]);
}if (this.nAtoms != this.atomCounter) {
throw Clazz.new_(Clazz.load('Exception').c$$S,["Not all atoms have been read in yet!"]);
}if (this.tauchanged || this.freqchanged || this.cutoffchanged || this.noesychanged || this.rhoStarchanged  ) {
p$1.calcRelaxMatrix.apply(this, []);
p$1.Diagonalise.apply(this, []);
}if (this.noesychanged || this.tauchanged || this.freqchanged || this.cutoffchanged || this.mixchanged || this.rhoStarchanged  ) {
p$1.calcNoeMatrix.apply(this, []);
}this.mixchanged=false;
this.tauchanged=false;
this.freqchanged=false;
this.cutoffchanged=false;
this.noesychanged=false;
this.rhoStarchanged=false;
return this.noeMatrix;
});

Clazz.newMeth(C$, 'makeAtomList$I', function (n) {
this.nAtoms=n;
this.atoms=Clazz.array($I$(1), [this.nAtoms]);
this.atomCounter=0;
this.relaxMatrix=Clazz.array(Double.TYPE, [this.nAtoms, this.nAtoms]);
this.eigenValues=Clazz.array(Double.TYPE, [this.nAtoms, this.nAtoms]);
this.eigenVectors=Clazz.array(Double.TYPE, [this.nAtoms, this.nAtoms]);
this.noeMatrix=Clazz.array(Double.TYPE, [this.nAtoms, this.nAtoms]);
this.distanceMatrix=Clazz.array(Double.TYPE, [this.nAtoms, this.nAtoms]);
});

Clazz.newMeth(C$, 'addAtom$D$D$D', function (x, y, z) {
this.atoms[this.atomCounter]=Clazz.new_($I$(1,1));
this.atoms[this.atomCounter].x=x;
this.atoms[this.atomCounter].y=y;
this.atoms[this.atomCounter].z=z;
this.atoms[this.atomCounter].methyl=false;
this.atomCounter++;
});

Clazz.newMeth(C$, 'addMethyl$D$D$D$D$D$D$D$D$D', function (x, y, z, x1, y1, z1, x2, y2, z2) {
this.atoms[this.atomCounter]=Clazz.new_($I$(1,1));
this.atoms[this.atomCounter].x=x;
this.atoms[this.atomCounter].y=y;
this.atoms[this.atomCounter].z=z;
this.atoms[this.atomCounter].x1=x1;
this.atoms[this.atomCounter].y1=y1;
this.atoms[this.atomCounter].z1=z1;
this.atoms[this.atomCounter].x2=x2;
this.atoms[this.atomCounter].y2=y2;
this.atoms[this.atomCounter].z2=z2;
this.atoms[this.atomCounter].methyl=true;
this.atomCounter++;
});

Clazz.newMeth(C$, 'addEquiv$DA$DA$DA', function (xa, ya, za) {
this.atoms[this.atomCounter]=Clazz.new_($I$(1,1));
this.atoms[this.atomCounter].xa=xa;
this.atoms[this.atomCounter].ya=ya;
this.atoms[this.atomCounter].za=za;
this.atoms[this.atomCounter].equiv=true;
this.atomCounter++;
});

Clazz.newMeth(C$, 'calcRelaxMatrix', function () {
var alpha=5.6965E10;
var rho;
var JValSigma;
var JValRho;
if (this.noesy) {
JValSigma=6.0 * p$1.J$D.apply(this, [2 * this.freq]) - p$1.J$D.apply(this, [0]);
JValRho=6.0 * p$1.J$D.apply(this, [2 * this.freq]) + 3.0 * p$1.J$D.apply(this, [this.freq]) + p$1.J$D.apply(this, [0]);
} else {
JValSigma=3.0 * p$1.J$D.apply(this, [this.freq]) + 2.0 * p$1.J$D.apply(this, [0]);
JValRho=3.0 * p$1.J$D.apply(this, [2 * this.freq]) + 4.5 * p$1.J$D.apply(this, [this.freq]) + 2.5 * p$1.J$D.apply(this, [0]);
}for (this.i=0; this.i < this.nAtoms; this.i++) {
rho=0.0;
for (this.j=0; this.j < this.nAtoms; this.j++) {
var distSqrd=p$1.distanceSqrd$org_openscience_jmol_app_janocchio_Atoms$org_openscience_jmol_app_janocchio_Atoms.apply(this, [this.atoms[this.i], this.atoms[this.j]]);
this.distanceMatrix[this.i][this.j]=Math.sqrt(distSqrd);
var aOverR6;
if (distSqrd < this.cutoff * this.cutoff ) {
aOverR6=alpha / (distSqrd * distSqrd * distSqrd );
} else {
aOverR6=0;
}if (this.i < this.j) {
this.relaxMatrix[this.i][this.j]=aOverR6 * JValSigma;
this.relaxMatrix[this.j][this.i]=this.relaxMatrix[this.i][this.j];
}if (this.i != this.j) {
rho=rho + aOverR6 * JValRho;
}}
this.relaxMatrix[this.i][this.i]=rho + this.rhoStar;
}
}, p$1);

Clazz.newMeth(C$, 'J$D', function (w) {
var J=this.tau / (1 + (w * w * this.tau * this.tau ));
return J;
}, p$1);

Clazz.newMeth(C$, 'readAtomsFromFile', function () {
this.atoms=Clazz.array($I$(1), [200]);
this.nAtoms=0;
var br=null;
try {
br=Clazz.new_($I$(2,1).c$$java_io_Reader,[Clazz.new_($I$(3,1).c$$java_io_File,[Clazz.new_($I$(4,1).c$$S,["/home/u6x8497/pyrrolidine_trial/pyrr_3d.dat"])])]);
br.readLine$();
System.out.println$S("found file");
while (true){
var linetokens=br.readLine$().split$S("\\s+");
if (linetokens[1].matches$S("41") || linetokens[1].matches$S("44") ) {
this.atoms[this.nAtoms]=Clazz.new_($I$(1,1));
this.atoms[this.nAtoms].x=Double.valueOf$S(linetokens[14]).doubleValue$();
this.atoms[this.nAtoms].y=Double.valueOf$S(linetokens[15]).doubleValue$();
this.atoms[this.nAtoms].z=Double.valueOf$S(linetokens[16]).doubleValue$();
this.atoms[this.nAtoms].methyl=false;
this.nAtoms++;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
} finally {
if (br != null ) try {
br.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'sign$D', function (x) {
if (x < 0 ) {
return -1;
}return 1;
}, p$1);

Clazz.newMeth(C$, 'calcNoeMatrix', function () {
var tempEVs=Clazz.array(Double.TYPE, [this.nAtoms]);
for (this.i=0; this.i < this.nAtoms; this.i++) {
tempEVs[this.i]=Math.exp(-this.eigenValues[this.i][this.i] * this.tMix);
}
for (this.i=0; this.i < this.nAtoms; this.i++) {
for (this.j=0; this.j <= this.i; this.j++) {
var sum=0;
for (this.k=0; this.k < this.nAtoms; this.k++) {
sum += this.eigenVectors[this.i][this.k] * this.eigenVectors[this.j][this.k] * tempEVs[this.k] ;
}
this.noeMatrix[this.i][this.j]=sum;
this.noeMatrix[this.j][this.i]=sum;
}
}
}, p$1);

Clazz.newMeth(C$, 'Diagonalise', function () {
var iter=0;
for (var i=0; i < this.nAtoms; i++) {
for (var z=0; z < this.nAtoms; z++) {
this.eigenVectors[i][z]=0.0;
this.eigenValues[i][z]=this.relaxMatrix[i][z];
}
}
for (var i=0; i < this.nAtoms; i++) {
this.eigenVectors[i][i]=1.0;
}
var state="ITERATING";
var maxIter=100000;
while (state == "ITERATING"){
var max=p$1.maxOffDiag.apply(this, []);
if (max > 0.0 ) {
p$1.rotate.apply(this, []);
iter++;
if (iter >= maxIter) {
state="STOP";
System.out.println$S("maximum iteration reached");
}} else {
state="SUCCESS";
}}
return iter;
}, p$1);

Clazz.newMeth(C$, 'maxOffDiag', function () {
var max=0.0;
for (var i=0; i < this.nAtoms - 1; i++) {
for (var j=i + 1; j < this.nAtoms; j++) {
var aij=Math.abs(this.eigenValues[i][j]);
if (aij > max ) {
max=aij;
this.p=i;
this.q=j;
}}
}
return max;
}, p$1);

Clazz.newMeth(C$, 'rotate', function () {
var d=(this.eigenValues[this.p][this.p] - this.eigenValues[this.q][this.q]) / (2.0 * this.eigenValues[this.p][this.q]);
var t=p$1.sign$D.apply(this, [d]) / (Math.abs(d) + Math.sqrt(d * d + 1));
var c=1.0 / Math.sqrt(t * t + 1);
var s=t * c;
this.eigenValues[this.p][this.p] += t * this.eigenValues[this.p][this.q];
this.eigenValues[this.q][this.q] -= t * this.eigenValues[this.p][this.q];
this.eigenValues[this.p][this.q]=this.eigenValues[this.q][this.p]=0.0;
for (var k=0; k < this.nAtoms; k++) {
if (k != this.p && k != this.q ) {
var akp=c * this.eigenValues[k][this.p] + s * this.eigenValues[k][this.q];
var akq=-s * this.eigenValues[k][this.p] + c * this.eigenValues[k][this.q];
this.eigenValues[k][this.p]=this.eigenValues[this.p][k]=akp;
this.eigenValues[k][this.q]=this.eigenValues[this.q][k]=akq;
}}
for (var k=0; k < this.nAtoms; k++) {
var rkp=c * this.eigenVectors[k][this.p] + s * this.eigenVectors[k][this.q];
var rkq=-s * this.eigenVectors[k][this.p] + c * this.eigenVectors[k][this.q];
this.eigenVectors[k][this.p]=rkp;
this.eigenVectors[k][this.q]=rkq;
}
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
var sb;
var nf=$I$(5).getInstance$();
nf.setMinimumFractionDigits$I(4);
nf.setMaximumFractionDigits$I(4);
sb=Clazz.new_($I$(6,1));
for (this.i=0; this.i < this.nAtoms; this.i++) {
for (this.j=0; this.j < this.nAtoms; this.j++) {
sb.append$S(nf.format$D(this.noeMatrix[this.i][this.j]) + "\t");
}
sb.append$S("\n");
}
return sb.toString();
});

Clazz.newMeth(C$, 'toStringNormRow$', function () {
var sb;
var nf=$I$(5).getInstance$();
nf.setMinimumFractionDigits$I(4);
nf.setMaximumFractionDigits$I(4);
sb=Clazz.new_($I$(6,1));
for (this.i=0; this.i < this.nAtoms; this.i++) {
for (this.j=0; this.j < this.nAtoms; this.j++) {
var val=this.noeMatrix[this.i][this.j] / this.noeMatrix[this.i][this.i];
sb.append$S(nf.format$D(val) + "\t");
}
sb.append$S("\n");
}
return sb.toString();
});

Clazz.newMeth(C$, 'distanceSqrd$org_openscience_jmol_app_janocchio_Atoms$org_openscience_jmol_app_janocchio_Atoms', function (a, b) {
var atom1;
var atom2;
var d;
var d1;
var d2;
var d3;
var prod11;
var prod22;
var prod12;
var prod13;
var prod23;
var prod33;
var d15;
var d25;
var d35;
if (b.methyl && !a.methyl ) {
atom1=b;
atom2=a;
} else if (b.equiv && !a.equiv ) {
atom1=b;
atom2=a;
} else {
atom1=a;
atom2=b;
}if (atom1.methyl) {
var a2x;
var a2y;
var a2z;
if (atom2.methyl) {
a2x=(atom2.x + atom2.x1 + atom2.x2 ) / 3.0;
a2y=(atom2.y + atom2.y1 + atom2.y2 ) / 3.0;
a2z=(atom2.z + atom2.z1 + atom2.z2 ) / 3.0;
} else if (atom2.equiv) {
a2x=0.0;
a2y=0.0;
a2z=0.0;
for (var j=0; j < atom2.xa.length; j++) {
a2x += atom2.xa[j] / atom2.xa.length;
a2y += atom2.ya[j] / atom2.xa.length;
a2z += atom2.za[j] / atom2.xa.length;
}
} else {
a2x=atom2.x;
a2y=atom2.y;
a2z=atom2.z;
}var x1=atom1.x - a2x;
var y1=atom1.y - a2y;
var z1=atom1.z - a2z;
var x2=atom1.x1 - a2x;
var y2=atom1.y1 - a2y;
var z2=atom1.z1 - a2z;
var x3=atom1.x2 - a2x;
var y3=atom1.y2 - a2y;
var z3=atom1.z2 - a2z;
d1=(x1 * x1) + (y1 * y1) + (z1 * z1) ;
d2=(x2 * x2) + (y2 * y2) + (z2 * z2) ;
d3=(x3 * x3) + (y3 * y3) + (z3 * z3) ;
d15=d1 * d1 * Math.sqrt(d1) ;
d25=d2 * d2 * Math.sqrt(d2) ;
d35=d3 * d3 * Math.sqrt(d3) ;
prod11=x1 * x1 + y1 * y1 + z1 * z1;
prod12=x1 * x2 + y1 * y2 + z1 * z2;
prod13=x1 * x3 + y1 * y3 + z1 * z3;
prod22=x2 * x2 + y2 * y2 + z2 * z2;
prod23=x2 * x3 + y2 * y3 + z2 * z3;
prod33=x3 * x3 + y3 * y3 + z3 * z3;
d=((3 * (prod11 * prod11)) - (d1 * d1)) / (d15 * d15);
d += ((3 * (prod12 * prod12)) - (d1 * d2)) / (d15 * d25);
d += ((3 * (prod13 * prod13)) - (d1 * d3)) / (d15 * d35);
d += ((3 * (prod12 * prod12)) - (d2 * d1)) / (d25 * d15);
d += ((3 * (prod22 * prod22)) - (d2 * d2)) / (d25 * d25);
d += ((3 * (prod23 * prod23)) - (d2 * d3)) / (d25 * d35);
d += ((3 * (prod13 * prod13)) - (d3 * d1)) / (d35 * d15);
d += ((3 * (prod23 * prod23)) - (d3 * d2)) / (d35 * d25);
d += ((3 * (prod33 * prod33)) - (d3 * d3)) / (d35 * d35);
return (Math.pow(d / 18.0, -0.3333333333333333));
} else if (atom1.equiv) {
if (atom2.equiv) {
var dd=0.0;
for (var i=0; i < atom1.xa.length; i++) {
for (var j=0; j < atom2.xa.length; j++) {
var x1=atom1.xa[i] - atom2.xa[j];
var y1=atom1.ya[i] - atom2.ya[j];
var z1=atom1.za[i] - atom2.za[j];
dd += Math.pow((x1 * x1) + (y1 * y1) + (z1 * z1) , -3.0);
}
}
return Math.pow(dd / (atom1.xa.length * atom2.xa.length), -0.3333333333333333);
}var dd=0.0;
for (var i=0; i < atom1.xa.length; i++) {
var x1=atom1.xa[i] - atom2.x;
var y1=atom1.ya[i] - atom2.y;
var z1=atom1.za[i] - atom2.z;
dd += Math.pow((x1 * x1) + (y1 * y1) + (z1 * z1) , -3.0);
}
return Math.pow(dd / atom1.xa.length, -0.3333333333333333);
} else {
var x1=atom1.x - atom2.x;
var y1=atom1.y - atom2.y;
var z1=atom1.z - atom2.z;
return (x1 * x1) + (y1 * y1) + (z1 * z1) ;
}}, p$1);

Clazz.newMeth(C$, 'getDistance$I$I', function (i, j) {
return this.distanceMatrix[i][j];
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var nm=Clazz.new_(C$);
p$1.doItAll.apply(nm, []);
}, 1);
})();
;Clazz.setTVer('3.2.5-v1');//Created 2019-11-23 16:07:42 Java2ScriptVisitor version 3.2.5-v1 net.sf.j2s.core.jar version 3.2.5-v1
