(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'org.jmol.api.JmolViewer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TestScriptOutput");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
var viewer=$I$(1).allocateViewer$O$org_jmol_api_JmolAdapter(null, null);
var jmolScript="print \'hello world: \n\' + getProperty(\'appletInfo\')";
var strOutput=viewer.scriptWaitStatus$S$S(jmolScript, null);
System.out.println$S(strOutput);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
