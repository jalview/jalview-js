(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NMR_Viewer", null, 'org.jmol.viewer.Viewer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (info) {
;C$.superclazz.c$$java_util_Map.apply(this,[info]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDisplayModelIndex$', function () {
return this.am.cmi;
});

Clazz.newMeth(C$, 'getAtomNumber$I', function (atomIndex) {
return this.ms.at[atomIndex].getAtomNumber$();
});

Clazz.newMeth(C$, 'getAtomName$I', function (atomIndex) {
return this.ms.at[atomIndex].getAtomName$();
});

Clazz.newMeth(C$, 'getModelCount$', function () {
return this.ms.mc;
});

Clazz.newMeth(C$, 'getAtomCount$', function () {
return this.ms.ac;
});

Clazz.newMeth(C$, 'getBondCount$', function () {
return this.ms.bondCount;
});

Clazz.newMeth(C$, 'setSelectionHalos$Z', function (b) {
this.setSelectionHalosEnabled$Z(b);
});

Clazz.newMeth(C$, 'getScreenImage$', function () {
return this.getScreenImageBuffer$O$Z(null, true);
});

Clazz.newMeth(C$, 'getAtomAt$I', function (i) {
return this.ms.at[i];
});

Clazz.newMeth(C$, 'getCurrentModelIndex$', function () {
return this.am.cmi;
});

Clazz.newMeth(C$, 'indexInFrame$org_jmol_modelset_Atom', function (atom) {
return atom.i - this.ms.am[atom.mi].firstAtomIndex;
});

Clazz.newMeth(C$, 'setFrameModelInfo$S$O', function (key, value) {
this.ms.getModelAuxiliaryInfo$I(this.getCurrentModelIndex$()).put$O$O(key, value);
});

Clazz.newMeth(C$, 'getFrameModelInfo$S', function (key) {
return this.ms.getModelAuxiliaryInfo$I(this.getCurrentModelIndex$()).get$O(key);
});

Clazz.newMeth(C$, 'getFrameAtomIndex$I', function (i) {
return i - this.getFrameBase$I(i);
});

Clazz.newMeth(C$, 'getFrameBase$I', function (i) {
return this.ms.am[this.ms.at[i].mi].firstAtomIndex;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:29 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
