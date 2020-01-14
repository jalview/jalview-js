(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),I$=[[0,'java.util.Hashtable','javajs.util.Lst','org.jmol.quantum.QS','javajs.util.PT','org.jmol.util.Logger','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BasisFunctionReader", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.shells=null;
this.moData=null;
this.orbitals=null;
this.nOrbitals=0;
this.ignoreMOs=false;
this.alphaBeta=null;
this.dfCoefMaps=null;
this.filterTokens=null;
this.filterIsNot=false;
this.spin=null;
this.orbitalMaps=null;
this.highLEnabled=null;
this.nCoef=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.moData=Clazz.new_($I$(1));
this.orbitals=Clazz.new_($I$(2));
this.nOrbitals=0;
this.ignoreMOs=false;
this.alphaBeta="";
this.orbitalMaps=Clazz.new_($I$(1));
this.highLEnabled=Clazz.array(Integer.TYPE, [$I$(3).idSpherical.length]);
}, 1);

Clazz.newMeth(C$, 'filterMO$', function () {
var isHeader=(this.line.indexOf$I("\n") == 0);
if (!isHeader && !this.doReadMolecularOrbitals ) return false;
var isOK=true;
this.line += " " + this.alphaBeta;
var ucline=this.line.toUpperCase$();
if (this.filter != null ) {
var nOK=0;
if (this.filterTokens == null ) {
this.filterIsNot=(this.filter.indexOf$S("!") >= 0);
this.filterTokens=$I$(4).getTokens$S(this.filter.replace$C$C("!", " ").replace$C$C(",", " ").replace$C$C(";", " "));
}for (var i=0; i < this.filterTokens.length; i++) if (ucline.indexOf$S(this.filterTokens[i]) >= 0) {
if (!this.filterIsNot) {
nOK=this.filterTokens.length;
break;
}} else if (this.filterIsNot) {
nOK++;
}
isOK=(nOK == this.filterTokens.length);
if (!isHeader) $I$(5).info$S("filter MOs: " + isOK + " for \"" + this.line + "\"" );
}this.spin=(ucline.indexOf$S("ALPHA") >= 0 ? "alpha" : ucline.indexOf$S("BETA") >= 0 ? "beta" : null);
return isOK;
});

Clazz.newMeth(C$, 'setMO$java_util_Map', function (mo) {
if (this.dfCoefMaps != null ) mo.put$TK$TV("dfCoefMaps", this.dfCoefMaps);
this.orbitals.addLast$TV(mo);
mo.put$TK$TV("index", Integer.valueOf$I(this.orbitals.size$()));
if (this.spin != null ) mo.put$TK$TV("spin", this.spin);
this.moData.put$TK$TV("highLEnabled", this.highLEnabled);
});

Clazz.newMeth(C$, 'getDFMap$S$S$I$S$I', function (shell, fileList, shellType, jmolList, minLength) {
this.orbitalMaps.put$TK$TV(shell, fileList);
this.moData.put$TK$TV("orbitalMaps", this.orbitalMaps);
this.enableShell$I(shellType);
if (fileList.equals$O(jmolList)) return true;
this.getDfCoefMaps$();
var isOK=$I$(3).createDFMap$IA$S$S$I(this.dfCoefMaps[shellType], fileList, jmolList, minLength);
if (!isOK) $I$(5).error$S("Disabling orbitals of type " + shellType + " -- Cannot read orbital order for: " + fileList + "\n expecting: " + jmolList );
return isOK;
});

Clazz.newMeth(C$, 'enableShell$I', function (shellType) {
this.highLEnabled[shellType]=1;
});

Clazz.newMeth(C$, 'getDfCoefMaps$', function () {
return (this.dfCoefMaps == null  ? (this.dfCoefMaps=$I$(3).getNewDfCoefMap$()) : this.dfCoefMaps);
});

Clazz.newMeth(C$, 'canonicalizeQuantumSubshellTag$S', function (tag) {
var firstChar=tag.charAt$I(0);
if (firstChar == "X" || firstChar == "Y"  || firstChar == "Z" ) {
var sorted=tag.toCharArray$();
$I$(6).sort$CA(sorted);
return  String.instantialize(sorted);
}return tag;
}, 1);

Clazz.newMeth(C$, 'fixSlaterTypes$I$I', function (typeOld, typeNew) {
if (this.shells == null ) return 0;
this.nCoef=0;
for (var i=this.shells.size$(); --i >= 0; ) {
var slater=this.shells.get$I(i);
if (slater[1] == typeOld) slater[1]=typeNew;
var m=this.getDfCoefMaps$()[slater[1]].length;
this.nCoef+=m;
}
return this.nCoef;
});

Clazz.newMeth(C$, 'getQuantumShellTagIDSpherical$S', function (tag) {
return $I$(3).getQuantumShellTagIDSpherical$S(tag);
}, 1);

Clazz.newMeth(C$, 'getQuantumShellTagID$S', function (tag) {
return $I$(3).getQuantumShellTagID$S(tag);
}, 1);

Clazz.newMeth(C$, 'getQuantumShellTag$I', function (id) {
return $I$(3).getQuantumShellTag$I(id);
}, 1);

Clazz.newMeth(C$, 'discardPreviousAtoms$', function () {
this.asc.discardPreviousAtoms$();
this.moData.remove$O("mos");
this.orbitals.clear$();
});

Clazz.newMeth(C$, 'clearOrbitals$', function () {
this.orbitals=Clazz.new_($I$(2));
this.moData=Clazz.new_($I$(1));
this.alphaBeta="";
});
;
(function(){var C$=Clazz.newClass(P$.BasisFunctionReader, "MOEnergySorter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Comparator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$O$O','compare$','compare$TT$TT'], function (a, b) {
var ea=((a).get$O("energy")).floatValue$();
var eb=((b).get$O("energy")).floatValue$();
return (ea < eb  ? -1 : ea > eb  ? 1 : 0);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
