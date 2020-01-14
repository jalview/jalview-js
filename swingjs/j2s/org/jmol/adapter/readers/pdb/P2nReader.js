(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pdb"),I$=[[0,'javajs.util.Lst']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "P2nReader", null, 'org.jmol.adapter.readers.pdb.PdbReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.altNames=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.altNames=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'setAdditionalAtomParameters$org_jmol_adapter_smarter_Atom', function (atom) {
var altName=this.line.substring$I$I(69, 72).trim$();
if (altName.length$() == 0) altName=atom.atomName;
if (this.useAltNames) atom.atomName=altName;
 else this.altNames.addLast$TV(altName);
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.finalizeReaderPDB$();
if (!this.useAltNames) this.asc.setCurrentModelInfo$S$O("altName", this.altNames.toArray$TTA(Clazz.array(String, [this.altNames.size$()])));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
