(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pdb"),I$=[[0,'javajs.util.Lst']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "P2nReader", null, 'org.jmol.adapter.readers.pdb.PdbReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.altNames=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['altNames','javajs.util.Lst']]]

Clazz.newMeth(C$, 'setAdditionalAtomParameters$org_jmol_adapter_smarter_Atom', function (atom) {
var altName=this.line.substring$I$I(69, 72).trim$();
if (altName.length$() == 0) altName=atom.atomName;
if (this.useAltNames) atom.atomName=altName;
 else this.altNames.addLast$O(altName);
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.finalizeReaderPDB$();
if (!this.useAltNames) this.asc.setCurrentModelInfo$S$O("altName", this.altNames.toArray$OA(Clazz.array(String, [this.altNames.size$()])));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
