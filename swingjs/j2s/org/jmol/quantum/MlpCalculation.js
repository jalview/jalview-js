(function(){var P$=Clazz.newPackage("org.jmol.quantum"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MlpCalculation", null, 'org.jmol.quantum.MepCalculation');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.distanceMode=3;
}, 1);

Clazz.newMeth(C$, 'assignPotentials$org_jmol_modelset_AtomA$FA$javajs_util_BS$javajs_util_BS$javajs_util_BS$S', function (atoms, potentials, bsAromatic, bsCarbonyl, bsIgnore, data) {
this.getAtomicPotentials$S$S(data, "atomicLipophilicity.txt");
for (var i=0; i < atoms.length; i++) {
var f=Math.abs(atoms[i].getFormalCharge$());
if (f == 0 ) {
if (bsIgnore != null  && bsIgnore.get$I(i) ) {
f=NaN;
} else {
f=this.getTabulatedPotential$org_jmol_modelset_Atom(atoms[i]);
if (Float.isNaN$F(f)) switch (atoms[i].getElementNumber$()) {
case 6:
f=(bsAromatic.get$I(i) ? 0.31 : bsCarbonyl.get$I(i) ? -0.54 : 0.45);
break;
case 7:
f=(bsAromatic.get$I(i) ? -0.6 : bsCarbonyl.get$I(i) ? -0.44 : -1.0);
break;
case 8:
f=(bsCarbonyl.get$I(i) ? -0.9 : -0.17);
break;
default:
f=NaN;
}
}}if ($I$(1).debugging) $I$(1).debug$S(atoms[i].getInfo$() + " " + new Float(f).toString() );
potentials[i]=f;
}
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:06 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
