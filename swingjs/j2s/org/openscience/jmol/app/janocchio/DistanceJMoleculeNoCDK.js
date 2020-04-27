(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[[0,'java.util.Hashtable','javajs.util.Lst','javajs.util.BS','org.jmol.modelset.Atom',['org.openscience.jmol.app.janocchio.DistanceJMoleculeNoCDK','.DihedralCoupleNoCDK']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DistanceJMoleculeNoCDK", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.openscience.jmol.app.janocchio.DistanceJMolecule');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.atomCount=0;
this.bsMol=null;
this.methyls=null;
this.bsH=null;
this.labelMap=null;
this.hAtoms=null;
this.indexAtomInMol=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.labelMap=Clazz.new_($I$(1,1));
this.hAtoms=Clazz.new_($I$(2,1));
this.indexAtomInMol=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$javajs_util_BS$org_openscience_jmol_app_janocchio_NMR_Viewer$SA', function (bsMol, viewer, labelArray) {
Clazz.super_(C$, this);
this.viewer=viewer;
this.labelArray=labelArray;
this.bsMol=bsMol;
this.atomCount=bsMol.cardinality$();
}, 1);

Clazz.newMeth(C$, 'addAtomstoMatrix$', function () {
var labels=Clazz.new_($I$(1,1));
this.labelMap=Clazz.new_($I$(1,1));
this.hAtoms=Clazz.new_($I$(2,1));
this.indexAtomInMol=Clazz.new_($I$(1,1));
try {
this.bsH=(this.bsMol.isEmpty$() ? Clazz.new_($I$(3,1)) : this.viewer.getSmartsMatch$S$javajs_util_BS("[H]", this.bsMol));
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
} else {
throw e1;
}
}
for (var pt=0, i=this.bsMol.nextSetBit$I(0); i >= 0; i=this.bsMol.nextSetBit$I(i + 1), pt++) {
var a=this.viewer.getAtomAt$I(i);
this.indexAtomInMol.put$TK$TV(a, Integer.valueOf$I(pt));
if (this.labelArray != null ) {
var label=this.labelArray[pt];
if (this.labelArray[pt] == null ) {
labels.put$TK$TV(a, "");
} else {
var lst=this.labelMap.get$O(label);
if (lst == null ) {
this.labelMap.put$TK$TV(label, lst=Clazz.new_($I$(2,1)));
} else {
this.bsH.clear$I(i);
}lst.addLast$TV(a);
labels.put$TK$TV(a, label);
}}}
try {
if (!this.bsMol.isEmpty$()) {
this.methyls=null;
;
for (var i=this.methyls.length; --i >= 0; ) {
var tmpa=Clazz.array($I$(4), [3]);
for (var j=0; j < 3; j++) {
var pt=this.methyls[i][j];
tmpa[j]=this.viewer.getAtomAt$I(pt);
this.bsH.clear$I(pt);
}
this.hAtoms.addLast$TV(tmpa);
}
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
for (var i=this.bsH.nextSetBit$I(0); i >= 0; i=this.bsH.nextSetBit$I(i + 1)) {
var a=this.viewer.getAtomAt$I(i);
var label=labels.get$O(a);
var atoms=(label == null  ? null : this.labelMap.get$O(labels.get$O(a)));
if (atoms != null  && atoms.size$() > 1 ) {
this.hAtoms.addLast$TV(atoms);
} else {
this.hAtoms.addLast$TV(a);
}}
this.nHAtoms=this.hAtoms.size$();
this.noeMatrix.makeAtomList$I(this.nHAtoms);
var indexAtomInNoeMatrix=Clazz.array(Integer.TYPE, [this.atomCount]);
for (var i=0; i < this.nHAtoms; i++) {
var aobj=this.hAtoms.get$I(i);
if (Clazz.instanceOf(aobj, "org.jmol.modelset.Atom")) {
var a=this.hAtoms.get$I(i);
indexAtomInNoeMatrix[(this.indexAtomInMol.get$O(a)).intValue$()]=i;
this.noeMatrix.addAtom$D$D$D(a.x, a.y, a.z);
} else if (Clazz.instanceOf(aobj, "javajs.util.Lst")) {
var lst=aobj;
var nEquiv=lst.size$();
for (var j=0; j < nEquiv; j++) {
indexAtomInNoeMatrix[(this.indexAtomInMol.get$O(lst.get$I(j))).intValue$()]=i;
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
this.noeMatrix.addEquiv$DA$DA$DA(xa, ya, za);
} else {
var a=aobj;
indexAtomInNoeMatrix[(this.indexAtomInMol.get$O(a[0])).intValue$()]=i;
indexAtomInNoeMatrix[(this.indexAtomInMol.get$O(a[1])).intValue$()]=i;
indexAtomInNoeMatrix[(this.indexAtomInMol.get$O(a[2])).intValue$()]=i;
this.noeMatrix.addMethyl$D$D$D$D$D$D$D$D$D(a[0].x, a[0].y, a[0].z, a[1].x, a[1].y, a[1].z, a[2].x, a[2].y, a[2].z);
}}
return indexAtomInNoeMatrix;
});

Clazz.newMeth(C$, 'getDihedralCouple$I$I$I$I', function (numAtom1, numAtom2, numAtom3, numAtom4) {
return Clazz.new_($I$(5,1).c$$I$I, [this, null, numAtom1, numAtom4]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DistanceJMoleculeNoCDK, "DihedralCoupleNoCDK", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.jmol.app.janocchio.DistanceJMolecule','.DihedralCouple']);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (numAtom1, numAtom4) {
Clazz.super_(C$, this);
var theta_j;
this.theta=theta_j[0];
this.jvalue=theta_j[1];
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v1');//Created 2019-11-23 16:07:41 Java2ScriptVisitor version 3.2.5-v1 net.sf.j2s.core.jar version 3.2.5-v1
