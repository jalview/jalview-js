(function(){var P$=Clazz.newPackage("org.jmol.quantum"),p$1={},I$=[[0,'java.text.NumberFormat',['org.jmol.quantum.NMRNoeMatrix','.NOEParams'],'javajs.util.BS','java.util.Hashtable',['org.jmol.quantum.NMRNoeMatrix','.NOEAtom'],'StringBuffer','java.io.BufferedReader','java.io.FileReader','java.io.File','javajs.util.Lst','org.jmol.modelset.Atom']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NMRNoeMatrix", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['NOEParams',9],['NOEAtom',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.baseIndex=0;
},1);

C$.$fields$=[['I',['nHAtoms','atomCounter','i','j','k','m','n','p','q','baseIndex'],'O',['eigenValues','double[][]','+eigenVectors','+relaxMatrix','+noeM','+distanceMatrix','atoms','org.jmol.quantum.NMRNoeMatrix.NOEAtom[]','atomMap','int[]','params','org.jmol.quantum.NMRNoeMatrix.NOEParams']]
,['I',['id'],'O',['nf','java.text.NumberFormat']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.params=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'createMatrix$org_jmol_viewer_Viewer$javajs_util_BS$SA$org_jmol_quantum_NMRNoeMatrix_NOEParams', function (viewer, bsMol, labelArray, params) {
var bsH=null;
try {
bsH=(bsMol.cardinality$() == 0 ? Clazz.new_($I$(3,1)) : viewer.getSmartsMatch$S$javajs_util_BS("[H]", bsMol));
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
} else {
throw e1;
}
}
var labels=Clazz.new_($I$(4,1));
var indexAtomInMol=Clazz.new_($I$(4,1));
var labelMap=C$.createLabelMapAndIndex$org_jmol_viewer_Viewer$javajs_util_BS$SA$javajs_util_BS$java_util_Map$java_util_Map(viewer, bsMol, labelArray, bsH, labels, indexAtomInMol);
var hAtoms=C$.createHAtomList$org_jmol_viewer_Viewer$javajs_util_BS$javajs_util_BS$java_util_Map$java_util_Map(viewer, bsMol, bsH, labels, labelMap);
var noeMatrix=C$.createNOEMatrix$javajs_util_Lst$java_util_Map$I$I$org_jmol_quantum_NMRNoeMatrix_NOEParams(hAtoms, indexAtomInMol, bsMol.cardinality$(), bsMol.nextSetBit$I(0), (params == null  ? Clazz.new_($I$(2,1)) : params));
if (!bsMol.isEmpty$()) {
viewer.getCurrentModelAuxInfo$().put$O$O("noeMatrix", noeMatrix);
}return noeMatrix;
}, 1);

Clazz.newMeth(C$, 'getParams$', function () {
return this.params;
});

Clazz.newMeth(C$, 'createNOEMatrix$javajs_util_Lst$java_util_Map$I$I$org_jmol_quantum_NMRNoeMatrix_NOEParams', function (hAtoms, indexAtomInMol, atomCount, baseIndex, params) {
var map=Clazz.array(Integer.TYPE, [atomCount]);
var nHAtoms=hAtoms.size$();
var noeMatrix=Clazz.new_(C$.c$$org_jmol_quantum_NMRNoeMatrix_NOEParams,[params]);
noeMatrix.baseIndex=baseIndex;
noeMatrix.initArrays$I(nHAtoms);
for (var i=0; i < nHAtoms; i++) {
var aobj=hAtoms.get$I(i);
if (Clazz.instanceOf(aobj, "org.jmol.modelset.Atom")) {
var a=hAtoms.get$I(i);
map[(indexAtomInMol.get$O(a)).intValue$()]=i;
noeMatrix.addAtom$D$D$D(a.x, a.y, a.z);
} else if (Clazz.instanceOf(aobj, "javajs.util.Lst")) {
var lst=aobj;
var nEquiv=lst.size$();
for (var j=0; j < nEquiv; j++) {
map[(indexAtomInMol.get$O(lst.get$I(j))).intValue$()]=i;
}
var xa=Clazz.array(Double.TYPE, [nEquiv]);
var ya=Clazz.array(Double.TYPE, [nEquiv]);
var za=Clazz.array(Double.TYPE, [nEquiv]);
for (var j=0; j < nEquiv; j++) {
var a=lst.get$I(j);
xa[j]=a.x;
ya[j]=a.y;
za[j]=a.z;
}
noeMatrix.addEquiv$DA$DA$DA(xa, ya, za);
} else {
var a=aobj;
map[(indexAtomInMol.get$O(a[0])).intValue$()]=i;
map[(indexAtomInMol.get$O(a[1])).intValue$()]=i;
map[(indexAtomInMol.get$O(a[2])).intValue$()]=i;
noeMatrix.addMethyl$D$D$D$D$D$D$D$D$D(a[0].x, a[0].y, a[0].z, a[1].x, a[1].y, a[1].z, a[2].x, a[2].y, a[2].z);
}}
noeMatrix.atomMap=map;
return noeMatrix;
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_quantum_NMRNoeMatrix_NOEParams', function (params) {
;C$.$init$.apply(this);
this.params=params;
params.id=++C$.id;
}, 1);

Clazz.newMeth(C$, 'calcNOEs$', function () {
if (this.nHAtoms == 0 || this.atoms == null  ) {
this.noeM=Clazz.array(Double.TYPE, [0, 0]);
return;
}if (this.nHAtoms != this.atomCounter) {
throw Clazz.new_(Clazz.load('Exception').c$$S,["Not all atoms have been read in yet!"]);
}var isNew=false;
if (this.params.tainted) {
p$1.calcRelaxMatrix.apply(this, []);
p$1.Diagonalise.apply(this, []);
isNew=true;
}if (this.params.tainted || this.params.mixingChanged ) {
p$1.calcNoeMatrix.apply(this, []);
this.params.mixingChanged=false;
isNew=true;
}this.params.tainted=false;
});

Clazz.newMeth(C$, 'initArrays$I', function (n) {
this.nHAtoms=n;
this.atoms=Clazz.array($I$(5), [this.nHAtoms]);
this.atomCounter=0;
this.relaxMatrix=Clazz.array(Double.TYPE, [this.nHAtoms, this.nHAtoms]);
this.eigenValues=Clazz.array(Double.TYPE, [this.nHAtoms, this.nHAtoms]);
this.eigenVectors=Clazz.array(Double.TYPE, [this.nHAtoms, this.nHAtoms]);
this.noeM=Clazz.array(Double.TYPE, [this.nHAtoms, this.nHAtoms]);
this.distanceMatrix=Clazz.array(Double.TYPE, [this.nHAtoms, this.nHAtoms]);
});

Clazz.newMeth(C$, 'addAtom$D$D$D', function (x, y, z) {
this.atoms[this.atomCounter]=Clazz.new_($I$(5,1));
this.atoms[this.atomCounter].x=x;
this.atoms[this.atomCounter].y=y;
this.atoms[this.atomCounter].z=z;
this.atoms[this.atomCounter].methyl=false;
this.atomCounter++;
this.params.tainted=true;
});

Clazz.newMeth(C$, 'addMethyl$D$D$D$D$D$D$D$D$D', function (x, y, z, x1, y1, z1, x2, y2, z2) {
this.atoms[this.atomCounter]=Clazz.new_($I$(5,1));
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
this.params.tainted=true;
});

Clazz.newMeth(C$, 'addEquiv$DA$DA$DA', function (xa, ya, za) {
this.atoms[this.atomCounter]=Clazz.new_($I$(5,1));
this.atoms[this.atomCounter].xa=xa;
this.atoms[this.atomCounter].ya=ya;
this.atoms[this.atomCounter].za=za;
this.atoms[this.atomCounter].equiv=true;
this.atomCounter++;
this.params.tainted=true;
});

Clazz.newMeth(C$, 'calcRelaxMatrix', function () {
var alpha=5.6965E10;
var rho;
var JValSigma;
var JValRho;
var rhoStar=this.params.rhoStar;
var freq=this.params.freq;
var cutoff2=this.params.cutoff * this.params.cutoff;
var tau=this.params.tau;
if (this.params.noesy) {
JValSigma=6.0 * C$.J$D$D(2 * freq, tau) - C$.J$D$D(0, tau);
JValRho=6.0 * C$.J$D$D(2 * freq, tau) + 3.0 * C$.J$D$D(freq, tau) + C$.J$D$D(0, tau);
} else {
JValSigma=3.0 * C$.J$D$D(freq, tau) + 2.0 * C$.J$D$D(0, tau);
JValRho=3.0 * C$.J$D$D(2 * freq, tau) + 4.5 * C$.J$D$D(freq, tau) + 2.5 * C$.J$D$D(0, tau);
}for (this.i=0; this.i < this.nHAtoms; this.i++) {
rho=0.0;
for (this.j=0; this.j < this.nHAtoms; this.j++) {
var distSqrd=p$1.distanceSqrd$org_jmol_quantum_NMRNoeMatrix_NOEAtom$org_jmol_quantum_NMRNoeMatrix_NOEAtom.apply(this, [this.atoms[this.i], this.atoms[this.j]]);
this.distanceMatrix[this.i][this.j]=Math.sqrt(distSqrd);
var aOverR6;
if (distSqrd < cutoff2 ) {
aOverR6=alpha / (distSqrd * distSqrd * distSqrd );
} else {
aOverR6=0;
}if (this.i < this.j) {
this.relaxMatrix[this.i][this.j]=aOverR6 * JValSigma;
this.relaxMatrix[this.j][this.i]=this.relaxMatrix[this.i][this.j];
}if (this.i != this.j) {
rho=rho + aOverR6 * JValRho;
}}
this.relaxMatrix[this.i][this.i]=rho + rhoStar;
}
}, p$1);

Clazz.newMeth(C$, 'J$D$D', function (w, tau) {
return tau / (1 + (w * w * tau * tau ));
}, 1);

Clazz.newMeth(C$, 'sign$D', function (x) {
if (x < 0 ) {
return -1;
}return 1;
}, p$1);

Clazz.newMeth(C$, 'calcNoeMatrix', function () {
var tempEVs=Clazz.array(Double.TYPE, [this.nHAtoms]);
var tMix=this.params.tMix;
for (this.i=0; this.i < this.nHAtoms; this.i++) {
tempEVs[this.i]=Math.exp(-this.eigenValues[this.i][this.i] * tMix);
}
for (this.i=0; this.i < this.nHAtoms; this.i++) {
for (this.j=0; this.j <= this.i; this.j++) {
var sum=0;
for (this.k=0; this.k < this.nHAtoms; this.k++) {
sum += this.eigenVectors[this.i][this.k] * this.eigenVectors[this.j][this.k] * tempEVs[this.k] ;
}
this.noeM[this.i][this.j]=sum;
this.noeM[this.j][this.i]=sum;
}
}
}, p$1);

Clazz.newMeth(C$, 'Diagonalise', function () {
var iter=0;
for (var i=0; i < this.nHAtoms; i++) {
for (var z=0; z < this.nHAtoms; z++) {
this.eigenVectors[i][z]=0.0;
this.eigenValues[i][z]=this.relaxMatrix[i][z];
}
}
for (var i=0; i < this.nHAtoms; i++) {
this.eigenVectors[i][i]=1.0;
}
var state="ITERATING";
var maxIter=100000;
while (state === "ITERATING" ){
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
for (var i=0; i < this.nHAtoms - 1; i++) {
for (var j=i + 1; j < this.nHAtoms; j++) {
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
for (var k=0; k < this.nHAtoms; k++) {
if (k != this.p && k != this.q ) {
var akp=c * this.eigenValues[k][this.p] + s * this.eigenValues[k][this.q];
var akq=-s * this.eigenValues[k][this.p] + c * this.eigenValues[k][this.q];
this.eigenValues[k][this.p]=this.eigenValues[this.p][k]=akp;
this.eigenValues[k][this.q]=this.eigenValues[this.q][k]=akq;
}}
for (var k=0; k < this.nHAtoms; k++) {
var rkp=c * this.eigenVectors[k][this.p] + s * this.eigenVectors[k][this.q];
var rkq=-s * this.eigenVectors[k][this.p] + c * this.eigenVectors[k][this.q];
this.eigenVectors[k][this.p]=rkp;
this.eigenVectors[k][this.q]=rkq;
}
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
var sb;
sb=Clazz.new_($I$(6,1));
for (this.i=0; this.i < this.nHAtoms; this.i++) {
for (this.j=0; this.j < this.nHAtoms; this.j++) {
sb.append$S(C$.nf.format$D(this.noeM[this.i][this.j]) + "\t");
}
sb.append$S("\n");
}
sb.append$S(this.params.toString());
return sb.toString();
});

Clazz.newMeth(C$, 'toStringNormRow$', function () {
var sb;
var nf=$I$(1).getInstance$();
nf.setMinimumFractionDigits$I(4);
nf.setMaximumFractionDigits$I(4);
sb=Clazz.new_($I$(6,1));
for (this.i=0; this.i < this.nHAtoms; this.i++) {
for (this.j=0; this.j < this.nHAtoms; this.j++) {
var val=this.noeM[this.i][this.j] / this.noeM[this.i][this.i];
sb.append$S(nf.format$D(val) + "\t");
}
sb.append$S("\n");
}
return sb.toString();
});

Clazz.newMeth(C$, 'distanceSqrd$org_jmol_quantum_NMRNoeMatrix_NOEAtom$org_jmol_quantum_NMRNoeMatrix_NOEAtom', function (a, b) {
var atom1;
var atom2;
var d;
var d1;
var d2;
var d3;
var prod12;
var prod13;
var prod23;
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
prod12=x1 * x2 + y1 * y2 + z1 * z2;
prod13=x1 * x3 + y1 * y3 + z1 * z3;
prod23=x2 * x3 + y2 * y3 + z2 * z3;
d=(2 * d1 * d1 ) / (d15 * d15);
d += ((3 * (prod12 * prod12)) - (d1 * d2)) / (d15 * d25);
d += ((3 * (prod13 * prod13)) - (d1 * d3)) / (d15 * d35);
d += ((3 * (prod12 * prod12)) - (d2 * d1)) / (d25 * d15);
d += (2 * d2 * d2 ) / (d25 * d25);
d += ((3 * (prod23 * prod23)) - (d2 * d3)) / (d25 * d35);
d += ((3 * (prod13 * prod13)) - (d3 * d1)) / (d35 * d15);
d += ((3 * (prod23 * prod23)) - (d3 * d2)) / (d35 * d25);
d += (2 * d3 * d3 ) / (d35 * d35);
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

Clazz.newMeth(C$, 'doItAll$java_io_File', function (file) {
System.out.println$S("starting");
p$1.readAtomsFromFile$java_io_File.apply(this, [file]);
this.relaxMatrix=Clazz.array(Double.TYPE, [this.nHAtoms, this.nHAtoms]);
this.eigenValues=Clazz.array(Double.TYPE, [this.nHAtoms, this.nHAtoms]);
this.eigenVectors=Clazz.array(Double.TYPE, [this.nHAtoms, this.nHAtoms]);
this.noeM=Clazz.array(Double.TYPE, [this.nHAtoms, this.nHAtoms]);
System.out.println$S("read atoms: " + Integer.toString$I(this.nHAtoms));
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
}, p$1);

Clazz.newMeth(C$, 'readAtomsFromFile$java_io_File', function (file) {
this.atoms=Clazz.array($I$(5), [200]);
this.nHAtoms=0;
var br=null;
try {
br=Clazz.new_([Clazz.new_($I$(8,1).c$$java_io_File,[file])],$I$(7,1).c$$java_io_Reader);
br.readLine$();
System.out.println$S("found file");
while (true){
var linetokens=br.readLine$().split$S("\\s+");
if (linetokens[1].matches$S("41") || linetokens[1].matches$S("44") ) {
this.atoms[this.nHAtoms]=Clazz.new_($I$(5,1));
this.atoms[this.nHAtoms].x=Double.valueOf$S(linetokens[14]).doubleValue$();
this.atoms[this.nHAtoms].y=Double.valueOf$S(linetokens[15]).doubleValue$();
this.atoms[this.nHAtoms].z=Double.valueOf$S(linetokens[16]).doubleValue$();
this.atoms[this.nHAtoms].methyl=false;
this.nHAtoms++;
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

Clazz.newMeth(C$, 'main$SA', function (args) {
var params=Clazz.new_($I$(2,1));
params.setNMRfreqMHz$D(500);
params.setCorrelationTimeTauPS$D(80.0);
params.setMixingTimeSec$D(0.5);
params.setCutoffAng$D(10.0);
params.setRhoStar$D(0.1);
params.setNoesy$Z(true);
p$1.doItAll$java_io_File.apply(Clazz.new_(C$.c$$org_jmol_quantum_NMRNoeMatrix_NOEParams,[params]), [Clazz.new_($I$(9,1).c$$S,[args[0]])]);
}, 1);

Clazz.newMeth(C$, 'createLabelMapAndIndex$org_jmol_viewer_Viewer$javajs_util_BS$SA$javajs_util_BS$java_util_Map$java_util_Map', function (viewer, bsMol, labelArray, bsH, labels, indexAtomInMol) {
var labelMap=Clazz.new_($I$(4,1));
for (var pt=0, i=bsMol.nextSetBit$I(0); i >= 0; i=bsMol.nextSetBit$I(i + 1), pt++) {
var a=viewer.ms.at[i];
indexAtomInMol.put$O$O(a, Integer.valueOf$I(pt));
if (labelArray != null ) {
var label=labelArray[pt];
if (labelArray[pt] == null ) {
labels.put$O$O(a, "");
} else {
var lst=labelMap.get$O(label);
if (lst == null ) {
labelMap.put$O$O(label, lst=Clazz.new_($I$(10,1)));
} else {
bsH.clear$I(i);
}lst.addLast$O(a);
labels.put$O$O(a, label);
}}}
return labelMap;
}, 1);

Clazz.newMeth(C$, 'createHAtomList$org_jmol_viewer_Viewer$javajs_util_BS$javajs_util_BS$java_util_Map$java_util_Map', function (viewer, bsMol, bsH, labels, labelMap) {
var hAtoms=Clazz.new_($I$(10,1));
try {
if (!bsMol.isEmpty$()) {
var methyls=viewer.getSmartsMap$S$javajs_util_BS$I("C({[H]})({[H]}){[H]}", bsMol, 130);
for (var i=methyls.length; --i >= 0; ) {
var methyl=Clazz.array($I$(11), [3]);
for (var j=0; j < 3; j++) {
var pt=methyls[i][j];
methyl[j]=viewer.ms.at[pt];
bsH.clear$I(pt);
}
hAtoms.addLast$O(methyl);
}
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
for (var i=bsH.nextSetBit$I(0); i >= 0; i=bsH.nextSetBit$I(i + 1)) {
var a=viewer.ms.at[i];
var label=labels.get$O(a);
var atoms=(label == null  ? null : labelMap.get$O(labels.get$O(a)));
if (atoms != null  && atoms.size$() > 1 ) {
hAtoms.addLast$O(atoms);
} else {
hAtoms.addLast$O(a);
}}
return hAtoms;
}, 1);

Clazz.newMeth(C$, 'getJmolDistance$I$I', function (a, b) {
return p$1.getDistance$I$I.apply(this, [this.atomMap[a - this.baseIndex], this.atomMap[b - this.baseIndex]]);
});

Clazz.newMeth(C$, 'getDistance$I$I', function (i, j) {
return (i < 0 || j < 0  || i >= this.nHAtoms  ? NaN : this.distanceMatrix[i][j]);
}, p$1);

Clazz.newMeth(C$, 'getJmolNoe$I$I', function (a, b) {
return p$1.getNoe$I$I.apply(this, [this.atomMap[a - this.baseIndex], this.atomMap[b - this.baseIndex]]);
});

Clazz.newMeth(C$, 'getNoe$I$I', function (i, j) {
return (i < 0 || j < 0  || i >= this.nHAtoms  ? NaN : this.noeM[i][j]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.id=0;
C$.nf=$I$(1).getInstance$();
{
C$.nf.setMinimumFractionDigits$I(4);
C$.nf.setMaximumFractionDigits$I(4);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMRNoeMatrix, "NOEParams", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
{
this.freq=2.5132741228718348E9;
this.tau=8.0E-11;
this.tMix=0.5;
this.cutoff=10;
this.rhoStar=0.1;
this.noesy=true;
}
this.tainted=true;
this.mixingChanged=true;
},1);

C$.$fields$=[['Z',['noesy','tainted','mixingChanged'],'D',['tau','freq','tMix','cutoff','rhoStar'],'I',['id']]]

Clazz.newMeth(C$, 'toString', function () {
return "[id=" + this.id + " freq=" + new Double(this.getNMRfreqMHz$()).toString() + " tau=" + new Double(this.tau).toString() + " tMix=" + new Double(this.tMix).toString() + " cutoff=" + new Double(this.cutoff).toString() + " rhoStar=" + new Double(this.rhoStar).toString() + " noesy=" + this.noesy + "]" ;
});

Clazz.newMeth(C$, 'setCorrelationTimeTauPS$D', function (t) {
this.tau=t * 1.0E-12;
this.tainted=true;
});

Clazz.newMeth(C$, 'setMixingTimeSec$D', function (t) {
this.tMix=t;
this.mixingChanged=true;
});

Clazz.newMeth(C$, 'setNMRfreqMHz$D', function (f) {
this.freq=f * 2 * 3.141592653589793 * 1000000.0 ;
this.tainted=true;
});

Clazz.newMeth(C$, 'setCutoffAng$D', function (c) {
this.cutoff=c;
this.tainted=true;
});

Clazz.newMeth(C$, 'setRhoStar$D', function (c) {
this.rhoStar=c;
this.tainted=true;
});

Clazz.newMeth(C$, 'setNoesy$Z', function (b) {
this.noesy=b;
this.tainted=true;
});

Clazz.newMeth(C$, 'getCorrelationTimeTauPS$', function () {
return this.tau;
});

Clazz.newMeth(C$, 'getMixingTimeSec$', function () {
return this.tMix;
});

Clazz.newMeth(C$, 'getNoesy$', function () {
return this.noesy;
});

Clazz.newMeth(C$, 'getNMRfreqMHz$', function () {
return this.freq / 2 / 3.141592653589793 / 1000000.0 ;
});

Clazz.newMeth(C$, 'getCutoffAng$', function () {
return this.cutoff;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMRNoeMatrix, "NOEAtom", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['methyl','equiv'],'D',['x','y','z','x1','y1','z1','x2','y2','z2'],'O',['xa','double[]','+ya','+za']]]

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
