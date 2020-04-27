(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[[0,'java.util.Vector','org.openscience.jmol.app.janocchio.NoeMatrix']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DistanceJMolecule", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.viewer=null;
this.distances=null;
this.couples=null;
this.couplesWhole=null;
this.noeMatrix=null;
this.nHAtoms=0;
this.noeM=null;
this.indexAtomInNoeMatrix=null;
this.labelArray=null;
this.CHequation=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.distances=Clazz.new_($I$(1,1));
this.couples=Clazz.new_($I$(1,1));
this.couplesWhole=Clazz.new_($I$(1,1));
this.noeMatrix=Clazz.new_($I$(2,1));
this.CHequation="was";
}, 1);

Clazz.newMeth(C$, 'getDistances$', function () {
return this.distances;
});

Clazz.newMeth(C$, 'getCouples$', function () {
return this.couples;
});

Clazz.newMeth(C$, 'getNoeM$', function () {
return this.noeM;
});

Clazz.newMeth(C$, 'calcNOEs$', function () {
this.indexAtomInNoeMatrix=this.addAtomstoMatrix$();
try {
this.noeM=this.noeMatrix.calcNOEs$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'addCouple$IntegerA$IntegerA$IntegerA$IntegerA', function (numAtom1, numAtom2, numAtom3, numAtom4) {
var dihe=this.getDihedralCouple$I$I$I$I(numAtom1[0].intValue$(), numAtom2[0].intValue$(), numAtom3[0].intValue$(), numAtom4[0].intValue$());
var jvalue=dihe.getJvalue$();
this.couples.add$TE( new Double(jvalue));
this.couplesWhole.add$TE(dihe);
});

Clazz.newMeth(C$, 'addCouple$I$I$I$I', function (a1, a2, a3, a4) {
var dihe=this.getDihedralCouple$I$I$I$I(a1, a2, a3, a4);
var jvalue=dihe.getJvalue$();
this.couples.add$TE( new Double(jvalue));
this.couplesWhole.add$TE(dihe);
});

Clazz.newMeth(C$, 'calcCouple$IntegerA$IntegerA$IntegerA$IntegerA', function (numAtom1, numAtom2, numAtom3, numAtom4) {
var dihe=this.getDihedralCouple$I$I$I$I(numAtom1[0].intValue$(), numAtom2[0].intValue$(), numAtom3[0].intValue$(), numAtom4[0].intValue$());
var dihecouple=Clazz.array(Double, [2]);
dihecouple[0]= new Double(dihe.getTheta$());
dihecouple[1]= new Double(dihe.getJvalue$());
return dihecouple;
});

Clazz.newMeth(C$, 'calcCouple$I$I$I$I', function (a1, a2, a3, a4) {
var dihe=this.getDihedralCouple$I$I$I$I(a1, a2, a3, a4);
var dihecouple=Clazz.array(Double, [2]);
dihecouple[0]= new Double(dihe.getTheta$());
dihecouple[1]= new Double(dihe.getJvalue$());
return dihecouple;
});

Clazz.newMeth(C$, 'setCorrelationTime$D', function (t) {
this.noeMatrix.setCorrelationTime$D(t);
});

Clazz.newMeth(C$, 'setMixingTime$D', function (t) {
this.noeMatrix.setMixingTime$D(t);
});

Clazz.newMeth(C$, 'setNMRfreq$D', function (f) {
this.noeMatrix.setNMRfreq$D(f);
});

Clazz.newMeth(C$, 'setCutoff$D', function (c) {
this.noeMatrix.setCutoff$D(c);
});

Clazz.newMeth(C$, 'setRhoStar$D', function (c) {
this.noeMatrix.setRhoStar$D(c);
});

Clazz.newMeth(C$, 'setNoesy$Z', function (b) {
this.noeMatrix.setNoesy$Z(b);
});

Clazz.newMeth(C$, 'setCHequation$S', function (eq) {
this.CHequation=eq;
});

Clazz.newMeth(C$, 'getNoe$I$I', function (a, b) {
var indexa=this.indexAtomInNoeMatrix[a];
var indexb=this.indexAtomInNoeMatrix[b];
var noe=this.noeM[indexa][indexb];
return noe;
});

Clazz.newMeth(C$, 'getIndexAtomInNoeMatrix$', function () {
return this.indexAtomInNoeMatrix;
});

Clazz.newMeth(C$, 'addDistance$I$I', function (a, b) {
var indexa=this.indexAtomInNoeMatrix[a];
var indexb=this.indexAtomInNoeMatrix[b];
var d=this.noeMatrix.getDistance$I$I(indexa, indexb);
this.distances.add$TE( new Double(d));
});

Clazz.newMeth(C$, 'calcDistance$IntegerA$IntegerA', function (numa, numb) {
var indexa=this.indexAtomInNoeMatrix[numa[0].intValue$()];
var indexb=this.indexAtomInNoeMatrix[numb[0].intValue$()];
var d=this.noeMatrix.getDistance$I$I(indexa, indexb);
return d;
});

Clazz.newMeth(C$, 'calcDistance$I$I', function (a, b) {
var indexa=this.indexAtomInNoeMatrix[a];
var indexb=this.indexAtomInNoeMatrix[b];
var d=this.noeMatrix.getDistance$I$I(indexa, indexb);
return d;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DistanceJMolecule, "DihedralCouple", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.theta=0;
this.jvalue=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getJvalue$', function () {
return this.jvalue;
});

Clazz.newMeth(C$, 'getTheta$', function () {
return this.theta;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v1');//Created 2019-11-23 16:07:44 Java2ScriptVisitor version 3.2.5-v1 net.sf.j2s.core.jar version 3.2.5-v1
