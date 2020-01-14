(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pdb"),I$=[];
var C$=Clazz.newClass(P$, "PqrReader", null, 'org.jmol.adapter.readers.pdb.PdbReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setAdditionalAtomParameters$org_jmol_adapter_smarter_Atom', function (atom) {
if (this.gromacsWideFormat) {
atom.partialCharge=this.parseFloatRange$S$I$I(this.line, 60, 68);
atom.radius=P$.PdbReader.fixRadius$F(this.parseFloatRange$S$I$I(this.line, 68, 76));
} else {
var tokens=this.getTokens$();
var pt=tokens.length - 2 - (this.line.length$() > 75 ? 1 : 0) ;
atom.partialCharge=this.parseFloatStr$S(tokens[pt++]);
atom.radius=P$.PdbReader.fixRadius$F(this.parseFloatStr$S(tokens[pt]));
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
