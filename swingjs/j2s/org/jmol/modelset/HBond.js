(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HBond", null, 'org.jmol.modelset.Bond');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.energy=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$H$F', function (atom1, atom2, order, mad, colix, energy) {
C$.superclazz.c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$H.apply(this, [atom1, atom2, order, mad, colix]);
C$.$init$.apply(this);
this.energy=energy;
if ($I$(1).debugging) $I$(1).debug$S("HBond energy = " + new Float(energy).toString() + " #" + this.getIdentity$() );
}, 1);

Clazz.newMeth(C$, 'getEnergy$', function () {
return this.energy;
});

Clazz.newMeth(C$, 'getEnergy$D$D$D$D', function (distAH, distCH, distCD, distAD) {
var energy=(Math.round(-27888.0 / distAH - -27888.0 / distAD + -27888.0 / distCD - -27888.0 / distCH)|0);
return energy;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
