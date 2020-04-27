(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.spartan"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OdysseyReader", null, 'org.jmol.adapter.readers.spartan.SpartanInputReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initializeReader$', function () {
var title=this.readInputRecords$();
this.asc.setAtomSetName$S(title == null  ? "Odyssey file" : title);
this.continuing=false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
