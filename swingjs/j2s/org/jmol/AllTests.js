(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'junit.framework.TestSuite','org.jmol.adapter.smarter.TestSmarterJmolAdapter','org.jmol.api.TestScripts','org.jmol.smiles.TestSmilesParser','org.jmol.util.AllTests']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AllTests");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'suite$', function () {
var suite=Clazz.new_($I$(1,1).c$$S,["Test for org.jmol"]);
suite.addTest$junit_framework_Test($I$(2).suite$());
suite.addTest$junit_framework_Test($I$(3).suite$());
suite.addTestSuite$Class(Clazz.getClass($I$(4)));
suite.addTest$junit_framework_Test($I$(5).suite$());
return suite;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
