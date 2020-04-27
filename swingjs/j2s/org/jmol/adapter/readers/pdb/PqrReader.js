(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pdb"),I$=[[0,'org.jmol.adapter.readers.pdb.PdbReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PqrReader", null, 'org.jmol.adapter.readers.pdb.PdbReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setAdditionalAtomParameters$org_jmol_adapter_smarter_Atom', function (atom) {
if (this.gromacsWideFormat) {
atom.partialCharge=this.parseFloatRange$S$I$I(this.line, 60, 68);
atom.radius=(function(a,f){return f.apply(null,a)})([this.parseFloatRange$S$I$I(this.line, 68, 76)],$I$(1).fixRadius$F);
} else {
var tokens=this.getTokens$();
var pt=tokens.length - 2 - (this.line.length$() > 75 ? 1 : 0) ;
atom.partialCharge=this.parseFloatStr$S(tokens[pt++]);
atom.radius=(function(a,f){return f.apply(null,a)})([this.parseFloatStr$S(tokens[pt])],$I$(1).fixRadius$F);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
