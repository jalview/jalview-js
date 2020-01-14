(function(){var P$=Clazz.newPackage("org.jmol.c"),I$=[];
var C$=Clazz.newClass(P$, "HB", null, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NOT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ACCEPTOR", 1, []);
Clazz.newEnumConst($vals, C$.c$, "DONOR", 2, []);
Clazz.newEnumConst($vals, C$.c$, "UNKNOWN", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getType$org_jmol_modelset_Atom', function (atom) {
var group=atom.group;
var considerHydrogens=!atom.isHetero$();
switch (atom.getElementNumber$()) {
default:
return C$.NOT;
case 1:
if (atom.getCovalentBondCount$() == 0) return C$.DONOR;
var bonds=atom.bonds;
if (bonds == null ) return C$.NOT;
switch (bonds[0].getOtherAtom$org_jmol_modelset_Atom(atom).getElementNumber$()) {
case 7:
case 8:
case 16:
return C$.DONOR;
}
return C$.NOT;
case 7:
if (atom === group.getNitrogenAtom$() ) return C$.DONOR;
if (group.groupID == 9) return C$.UNKNOWN;
if (atom.getCovalentHydrogenCount$() > 0) return C$.DONOR;
if (considerHydrogens) return C$.ACCEPTOR;
switch (group.groupID) {
case 2:
case 3:
case 12:
case 6:
case 19:
return C$.DONOR;
}
return C$.UNKNOWN;
case 8:
if (atom === group.getCarbonylOxygenAtom$()  || atom.getFormalCharge$() == -1 ) return C$.ACCEPTOR;
if (atom.getCovalentBondCount$() == 0 || atom.getCovalentHydrogenCount$() > 0 ) return C$.UNKNOWN;
if (considerHydrogens) return C$.ACCEPTOR;
switch (group.groupID) {
case 4:
case 7:
return C$.ACCEPTOR;
}
return C$.UNKNOWN;
}
}, 1);

Clazz.newMeth(C$, 'isPossibleHBond$org_jmol_c_HB$org_jmol_c_HB', function (typeA, typeB) {
return (typeA === C$.NOT  || typeB === C$.NOT   ? false : typeA === C$.UNKNOWN  || typeA !== typeB  );
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
