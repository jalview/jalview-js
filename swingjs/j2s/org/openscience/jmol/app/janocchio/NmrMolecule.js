(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[[0,'org.jmol.quantum.NMRCalculation','java.util.Vector',['org.jmol.quantum.NMRNoeMatrix','.NOEParams'],['org.openscience.jmol.app.janocchio.NmrMolecule','.DihedralCouple'],'org.jmol.quantum.NMRNoeMatrix','org.jmol.modelset.Atom']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NmrMolecule", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['DihedralCouple',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.distances=Clazz.new_($I$(2,1));
this.couples=Clazz.new_($I$(2,1));
this.couplesWhole=Clazz.new_($I$(2,1));
this.CHequation="was";
this.params=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['S',['CHequation'],'O',['viewer','org.openscience.jmol.app.janocchio.NMR_Viewer','nmrPanel','org.openscience.jmol.app.janocchio.NMR_JmolPanel','bsMol','javajs.util.BS','labelArray','String[]','distances','java.util.Vector','+couples','+couplesWhole','noeMatrix','org.jmol.quantum.NMRNoeMatrix','params','org.jmol.quantum.NMRNoeMatrix.NOEParams']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$javajs_util_BS$SA$Z', function (nmrPanel, bsMol, labelArray, forNOE) {
;C$.$init$.apply(this);
this.nmrPanel=nmrPanel;
this.viewer=nmrPanel.vwr;
this.bsMol=bsMol;
this.labelArray=labelArray;
this.addAtomstoMatrix$();
}, 1);

Clazz.newMeth(C$, 'getDihedralCouple$org_jmol_modelset_AtomA', function (atoms) {
return Clazz.new_($I$(4,1).c$$org_jmol_modelset_AtomA$Z,[this, null, atoms, false]);
});

Clazz.newMeth(C$, 'addAtomstoMatrix$', function () {
this.noeMatrix=$I$(5).createMatrix$org_jmol_viewer_Viewer$javajs_util_BS$SA$org_jmol_quantum_NMRNoeMatrix_NOEParams(this.viewer, this.bsMol, this.labelArray, this.params);
this.viewer.setFrameModelInfo$S$O("noeMatrix", this.noeMatrix);
try {
this.noeMatrix.calcNOEs$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
System.out.println$S("NMRMolecule saved \n" + this.noeMatrix.toString());
});

Clazz.newMeth(C$, 'getDistances$', function () {
return this.distances;
});

Clazz.newMeth(C$, 'getCouples$', function () {
return this.couples;
});

Clazz.newMeth(C$, 'calcNOEs$', function () {
try {
this.noeMatrix.calcNOEs$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'addCouple$org_jmol_modelset_AtomA', function (atoms) {
var dihe=this.getDihedralCouple$org_jmol_modelset_AtomA(atoms);
var jvalue=dihe.getJvalue$();
if (Double.isNaN$D(jvalue)) return;
this.couples.add$O( new Double(jvalue));
this.couplesWhole.add$O(dihe);
});

Clazz.newMeth(C$, 'addJmolCouple$I$I$I$I', function (a1, a2, a3, a4) {
this.addCouple$org_jmol_modelset_AtomA(Clazz.array($I$(6), -1, [this.viewer.getAtomAt$I(a1), this.viewer.getAtomAt$I(a2), this.viewer.getAtomAt$I(a3), this.viewer.getAtomAt$I(a4)]));
});

Clazz.newMeth(C$, 'calcCouple$org_jmol_modelset_AtomA', function (atoms) {
var dc=this.getDihedralCouple$org_jmol_modelset_AtomA(atoms);
var jvalue=dc.getJvalue$();
return (Double.isNaN$D(jvalue) ? null : Clazz.array(Double.TYPE, -1, [dc.getTheta$(), jvalue]));
});

Clazz.newMeth(C$, 'calcJmolCouple$I$I$I$I', function (a1, a2, a3, a4) {
return this.calcCouple$org_jmol_modelset_AtomA(Clazz.array($I$(6), -1, [this.viewer.getAtomAt$I(a1), this.viewer.getAtomAt$I(a2), this.viewer.getAtomAt$I(a3), this.viewer.getAtomAt$I(a4)]));
});

Clazz.newMeth(C$, 'setCorrelationTimeTauPS$D', function (t) {
this.params.setCorrelationTimeTauPS$D(t);
});

Clazz.newMeth(C$, 'setMixingTimeSec$D', function (t) {
this.params.setMixingTimeSec$D(t);
});

Clazz.newMeth(C$, 'setNMRfreqMHz$D', function (f) {
this.params.setNMRfreqMHz$D(f);
});

Clazz.newMeth(C$, 'setCutoffAng$D', function (c) {
this.params.setCutoffAng$D(c);
});

Clazz.newMeth(C$, 'setRhoStar$D', function (c) {
this.params.setRhoStar$D(c);
});

Clazz.newMeth(C$, 'setNoesy$Z', function (b) {
this.params.setNoesy$Z(b);
});

Clazz.newMeth(C$, 'setCHequation$S', function (eq) {
this.CHequation=eq;
});

Clazz.newMeth(C$, 'getJmolNoe$I$I', function (a, b) {
return this.noeMatrix.getJmolNoe$I$I(a, b);
});

Clazz.newMeth(C$, 'addJmolDistance$I$I', function (a, b) {
this.distances.add$O( new Double(this.noeMatrix.getJmolDistance$I$I(a, b)));
});

Clazz.newMeth(C$, 'getJmolDistance$I$I', function (a, b) {
return this.noeMatrix.getJmolDistance$I$I(a, b);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.NmrMolecule, "DihedralCouple", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['data','double[]']]]

Clazz.newMeth(C$, 'c$$org_jmol_modelset_AtomA$Z', function (atoms, forNOE) {
;C$.$init$.apply(this);
var CHEquation=this.b$['org.openscience.jmol.app.janocchio.NmrMolecule'].nmrPanel.coupleTable.CHequation;
this.data=$I$(1).calc2or3JorNOE$org_jmol_viewer_Viewer$org_jmol_modelset_AtomA$S$I(this.b$['org.openscience.jmol.app.janocchio.NmrMolecule'].viewer, atoms, CHEquation, forNOE ? 8 : 7);
}, 1);

Clazz.newMeth(C$, 'getTheta$', function () {
return this.data[0];
});

Clazz.newMeth(C$, 'getJvalue$', function () {
return this.data[1];
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
