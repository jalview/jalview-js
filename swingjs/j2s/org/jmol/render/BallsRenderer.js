(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'org.jmol.shape.Shape']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BallsRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'render$', function () {
var needTranslucent=false;
if (this.isExport || this.vwr.checkMotionRendering$I(1140850689) ) {
var atoms=this.ms.at;
var colixes=(this.shape).colixes;
var bsOK=this.vwr.shm.bsRenderableAtoms;
for (var i=bsOK.nextSetBit$I(0); i >= 0; i=bsOK.nextSetBit$I(i + 1)) {
var atom=atoms[i];
if (atom.sD > 0 && (atom.shapeVisibilityFlags & this.myVisibilityFlag) != 0 ) {
if (this.g3d.setC$H(colixes == null  ? atom.colixAtom : $I$(1).getColix$HA$I$org_jmol_modelset_Atom(colixes, i, atom))) {
this.g3d.drawAtom$org_jmol_modelset_Atom$F(atom, 0);
} else {
needTranslucent=true;
}}}
}return needTranslucent;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
