(function(){var P$=Clazz.newPackage("org.jmol.render"),p$1={},I$=[[0,'org.jmol.shape.Shape']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StarsRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mar=0;
this.width=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'render$', function () {
var stars=this.shape;
if (stars.mads == null ) return false;
var needTranslucent=false;
this.mar=((this.vwr.getFloat$I(570425403) * 1000)|0);
if (this.mar == 0 && (this.g3d.isAntialiased$() || this.isExport ) ) this.mar=50;
var atoms=this.ms.at;
for (var i=this.ms.ac; --i >= 0; ) {
var atom=atoms[i];
if (!this.isVisibleForMe$org_jmol_modelset_Atom(atom)) continue;
this.colix=$I$(1).getColix$HA$I$org_jmol_modelset_Atom(stars.colixes, i, atom);
if (this.g3d.setC$H(this.colix)) p$1.render1$org_jmol_modelset_Atom$H.apply(this, [atom, stars.mads[i]]);
 else needTranslucent=true;
}
return needTranslucent;
});

Clazz.newMeth(C$, 'render1$org_jmol_modelset_Atom$H', function (atom, mad) {
var x=atom.sX;
var y=atom.sY;
var z=atom.sZ;
var d=(this.vwr.tm.scaleToScreen$I$I(z, mad)|0);
d-=(d & 1) ^ 1;
var r=(d/2|0);
if (r < 1) r=1;
if (this.mar > 0) {
this.width=(this.vwr.tm.scaleToScreen$I$I(z, this.mar)|0);
if (this.width == 0) this.width=1;
if (this.width == 1 && this.g3d.isAntialiased$() ) this.width=2;
} else {
p$1.drawLine$I$I$I$I$I$I.apply(this, [x - r - 1 , y + 1, z, x - r - 1  + d, y + 1, z]);
p$1.drawLine$I$I$I$I$I$I.apply(this, [x + 1, y + 1 - r, z, x + 1, y + 1 - r + d, z]);
}p$1.drawLine$I$I$I$I$I$I.apply(this, [x - r, y, z, x - r + d, y, z]);
p$1.drawLine$I$I$I$I$I$I.apply(this, [x, y - r, z, x, y - r + d, z]);
p$1.drawLine$I$I$I$I$I$I.apply(this, [x, y, z - r, x, y, z - r + d]);
}, p$1);

Clazz.newMeth(C$, 'drawLine$I$I$I$I$I$I', function (xA, yA, zA, xB, yB, zB) {
if (this.mar > 0) this.g3d.fillCylinderXYZ$H$H$B$I$I$I$I$I$I$I(this.colix, this.colix, ($b$[0] = 2, $b$[0]), this.width, xA, yA, zA, xB, yB, zB);
 else this.g3d.drawLineXYZ$I$I$I$I$I$I(xA, yA, zA, xB, yB, zB);
}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
