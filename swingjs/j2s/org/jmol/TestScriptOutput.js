(function(){var P$=Clazz.newPackage("org.jmol"),I$=[[0,'org.jmol.api.JmolViewer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TestScriptOutput");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA', function (args) {
Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
var viewer=$I$(1).allocateViewer$O$org_jmol_api_JmolAdapter(null, null);
var jmolScript="print \'hello world: \n\' + getProperty(\'appletInfo\')";
var strOutput=viewer.scriptWaitStatus$S$S(jmolScript, null);
System.out.println$S(strOutput);
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
