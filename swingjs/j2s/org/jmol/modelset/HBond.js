(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HBond", null, 'org.jmol.modelset.Bond');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['energy']]]

Clazz.newMeth(C$, 'c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$H$F', function (atom1, atom2, order, mad, colix, energy) {
;C$.superclazz.c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$H.apply(this,[atom1, atom2, order, mad, colix]);C$.$init$.apply(this);
this.energy=energy;
if ($I$(1).debugging) (function(a,f){return f.apply(null,a)})(["HBond energy = " + new Float(energy).toString() + " #" + this.getIdentity$() ],$I$(1).debug$S);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:12 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
