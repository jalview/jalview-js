(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'org.jmol.util.C']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HalosRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isAntialiased']]]

Clazz.newMeth(C$, 'render$', function () {
var halos=this.shape;
var showOnce=this.vwr.getShowSelectedOnce$();
var selectDisplayTrue=(this.vwr.getSelectionHalosEnabled$() || showOnce );
var showHiddenSelections=(selectDisplayTrue && this.vwr.getBoolean$I(603979920) );
if (halos.mads == null  && halos.bsHighlight == null   && !selectDisplayTrue ) return false;
this.isAntialiased=this.g3d.isAntialiased$();
var atoms=this.ms.at;
var bsSelected=(showOnce && this.vwr.movableBitSet != null   ? this.vwr.movableBitSet : selectDisplayTrue ? this.vwr.bsA$() : null);
var needTranslucent=false;
this.g3d.addRenderer$I(1073741880);
for (var i=this.ms.ac; --i >= 0; ) {
var atom=atoms[i];
if ((atom.shapeVisibilityFlags & 1) == 0) continue;
var isHidden=this.ms.isAtomHidden$I(i);
this.mad=(halos.mads == null  ? ($s$[0] = 0, $s$[0]) : halos.mads[i]);
this.colix=(halos.colixes == null  || i >= halos.colixes.length  ? 0 : halos.colixes[i]);
if (selectDisplayTrue && bsSelected.get$I(i) ) {
if (isHidden && !showHiddenSelections ) continue;
if (this.mad == 0) this.mad=($s$[0] = -1, $s$[0]);
if (this.colix == 0) {
if (this.exportType == 1 && !this.g3d.isWebGL$() ) continue;
this.colix=halos.colixSelection;
}if (this.colix == 2) this.colix=23;
 else if (this.colix == 0) this.colix=$I$(1).getColixInherited$H$H(this.colix, atom.colixAtom);
} else if (isHidden) {
continue;
} else {
this.colix=$I$(1).getColixInherited$H$H(this.colix, atom.colixAtom);
}if (this.mad != 0) {
if (this.render1$org_jmol_modelset_Atom(atom)) needTranslucent=true;
}if (!isHidden && halos.bsHighlight != null   && halos.bsHighlight.get$I(i) ) {
this.mad=($s$[0] = -2, $s$[0]);
this.colix=halos.colixHighlight;
if (this.render1$org_jmol_modelset_Atom(atom)) needTranslucent=true;
}}
return needTranslucent;
});

Clazz.newMeth(C$, 'render1$org_jmol_modelset_Atom', function (atom) {
var colixFill=(this.mad == -2 ? ($s$[0] = 0, $s$[0]) : $I$(1).getColixTranslucent3$H$Z$F(this.colix, true, 0.5));
var needTranslucent=(this.mad != -2);
if (!this.g3d.setC$H(this.colix)) {
needTranslucent=true;
this.colix=($s$[0] = 0, $s$[0]);
if (colixFill == 0 || !this.g3d.setC$H(colixFill) ) return needTranslucent;
}var z=atom.sZ;
var d=this.mad;
if (d < 0 ) {
d=atom.sD;
if (d == 0 ) {
var ellipsemax=(atom.isVisible$I(20) ? atom.getADPMinMax$Z(true) : 0);
if (ellipsemax > 0 ) d=this.vwr.tm.scaleToScreen$I$I(z, (Math.floor(ellipsemax * 2000)|0));
if (d == 0 ) {
d=(this.vwr.tm.scaleToScreen$I$I(z, this.mad == -2 ? 250 : 500)|0);
}}} else {
d=this.vwr.tm.scaleToScreen$I$I(z, this.mad);
}if (this.isAntialiased) d /= 2;
var more=(d / 2);
if (this.mad == -2) more /= 2;
if (more < 8 ) more=8;
if (more > 20 ) more=20;
d += more;
if (this.isAntialiased) d *= 2;
if (d < 1 ) return false;
this.g3d.drawFilledCircle$H$H$I$I$I$I(this.colix, colixFill, (Math.floor(d)|0), atom.sX, atom.sY, atom.sZ);
return needTranslucent;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:15 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
