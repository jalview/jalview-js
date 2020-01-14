(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'junit.framework.TestSuite','org.jmol.adapter.smarter.TestSmarterJmolAdapter','org.jmol.api.TestScripts','org.jmol.smiles.TestSmilesParser','org.jmol.util.AllTests']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AllTests");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suite$', function () {
var suite=Clazz.new_($I$(1).c$$S,["Test for org.jmol"]);
suite.addTest$junit_framework_Test($I$(2).suite$());
suite.addTest$junit_framework_Test($I$(3).suite$());
suite.addTestSuite$Class(Clazz.getClass($I$(4)));
suite.addTest$junit_framework_Test($I$(5).suite$());
return suite;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:06 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
