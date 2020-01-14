(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.spartan"),I$=[];
var C$=Clazz.newClass(P$, "OdysseyReader", null, 'org.jmol.adapter.readers.spartan.SpartanInputReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
var title=this.readInputRecords$();
this.asc.setAtomSetName$S(title == null  ? "Odyssey file" : title);
this.continuing=false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
