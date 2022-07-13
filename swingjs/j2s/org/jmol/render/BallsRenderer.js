(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'org.jmol.shape.Shape']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BallsRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
