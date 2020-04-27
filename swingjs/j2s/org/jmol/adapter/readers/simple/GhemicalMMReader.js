(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),I$=[[0,'javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GhemicalMMReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.startsWith$S("!Header")) {
this.processHeader$();
return true;
}if (this.line.startsWith$S("!Info")) {
this.processInfo$();
return true;
}if (this.line.startsWith$S("!Atoms")) {
this.processAtoms$();
return true;
}if (this.line.startsWith$S("!Bonds")) {
this.processBonds$();
return true;
}if (this.line.startsWith$S("!Coord")) {
this.processCoord$();
return true;
}if (this.line.startsWith$S("!Charges")) {
this.processCharges$();
return true;
}return true;
});

Clazz.newMeth(C$, 'processHeader$', function () {
});

Clazz.newMeth(C$, 'processInfo$', function () {
});

Clazz.newMeth(C$, 'processAtoms$', function () {
var ac=this.parseIntAt$S$I(this.line, 6);
for (var i=0; i < ac; ++i) {
if (this.asc.ac != i) throw Clazz.new_(Clazz.load('Exception').c$$S,["GhemicalMMReader error #1"]);
this.rd$();
var atomIndex=this.parseIntStr$S(this.line);
if (atomIndex != i) throw Clazz.new_(Clazz.load('Exception').c$$S,["bad atom index in !Atomsexpected: " + i + " saw:" + atomIndex ]);
var elementNumber=this.parseInt$();
var atom=this.asc.addNewAtom$();
atom.elementNumber=($s$[0] = elementNumber, $s$[0]);
}
});

Clazz.newMeth(C$, 'processBonds$', function () {
var bondCount=this.parseIntAt$S$I(this.line, 6);
for (var i=0; i < bondCount; ++i) {
this.rd$();
var atomIndex1=this.parseIntStr$S(this.line);
var atomIndex2=this.parseInt$();
var orderCode=this.parseToken$();
var order=0;
switch ((orderCode.charCodeAt$I(0))) {
case 67:
order=515;
break;
case 84:
order=3;
break;
case 68:
order=2;
break;
case 83:
default:
order=1;
}
this.asc.addNewBondWithOrder$I$I$I(atomIndex1, atomIndex2, order);
}
});

Clazz.newMeth(C$, 'processCoord$', function () {
var atoms=this.asc.atoms;
var ac=this.asc.ac;
for (var i=0; i < ac; ++i) this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(atoms[i], (function(a,f){return f.apply(null,a)})([this.rd$()],$I$(1).getTokens$S), 1, 10);

});

Clazz.newMeth(C$, 'processCharges$', function () {
var atoms=this.asc.atoms;
var ac=this.asc.ac;
for (var i=0; i < ac; ++i) {
this.rd$();
var atomIndex=this.parseIntStr$S(this.line);
if (atomIndex != i) throw Clazz.new_(Clazz.load('Exception').c$$S,["bad atom index in !Chargesexpected: " + i + " saw:" + atomIndex ]);
atoms[i].partialCharge=this.parseFloat$();
}
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
