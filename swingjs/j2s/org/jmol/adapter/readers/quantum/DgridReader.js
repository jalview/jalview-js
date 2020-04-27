(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.SB','javajs.util.PT','org.jmol.util.Logger','org.jmol.quantum.SlaterData']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DgridReader", null, 'org.jmol.adapter.readers.quantum.SlaterReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.htExponents=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['S',['title'],'O',['htExponents','java.util.Map','+htFuncMap']]]

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.indexOf$S(":title") == 0) {
this.title=this.rd$().substring$I(2);
return true;
}if (this.line.indexOf$S("basis:  CARTESIAN  STO") >= 0) {
p$1.readSlaterBasis.apply(this, []);
return true;
}if (this.line.indexOf$S(":atom") == 0) {
p$1.readCoordinates.apply(this, []);
return true;
}if (this.line.indexOf$S(" MO  DATA ") >= 0) {
if (this.doReadMolecularOrbitals) p$1.readMolecularOrbitals.apply(this, []);
return true;
}return true;
});

Clazz.newMeth(C$, 'readCoordinates', function () {
this.asc.newAtomSet$();
this.asc.setAtomSetName$S(this.title);
this.discardLinesUntilContains$S("----");
while (this.rd$() != null  && !this.line.startsWith$S(":-----") ){
var tokens=this.getTokens$();
if (tokens.length < 5) break;
this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, tokens, 2, 0.5291772).elementSymbol=tokens[0];
}
}, p$1);

Clazz.newMeth(C$, 'readSlaterBasis', function () {
this.discardLinesUntilContains$S(":-");
var ch="a";
while (this.rd$() != null  && this.line.indexOf$S(":-") < 0 ){
var atomSymbol=this.line.substring$I$I(3, 6).trim$();
var xyz=this.line.substring$I$I(19, 21);
var code=atomSymbol + xyz;
if (this.htExponents.get$O(code) == null ) {
ch="a";
} else {
code += "_" + ($p$=ch,ch=String.fromCharCode(ch.$c()+1),$p$);
}var exp=this.line.substring$I(34);
this.htExponents.put$O$O(code, Float.valueOf$F(this.parseFloatStr$S(exp)));
}
}, p$1);

Clazz.newMeth(C$, 'readMolecularOrbitals', function () {
this.htFuncMap=Clazz.new_($I$(1,1));
this.readLines$I(3);
while (this.line != null  && this.line.indexOf$S(":") != 0 ){
this.discardLinesUntilContains$S("sym: ");
var symmetry=this.line.substring$I$I(4, 10).trim$();
if (symmetry.indexOf$S("_FC") >= 0) break;
var data=Clazz.new_($I$(2,1));
data.append$S(this.line.substring$I(15));
while (this.rd$() != null  && this.line.length$() >= 15 )data.append$S(this.line);

var tokens=(function(a,f){return f.apply(null,a)})([data.toString()],$I$(3).getTokens$S);
var nFuncs=(tokens.length/2|0);
var ptSlater=Clazz.array(Integer.TYPE, [nFuncs]);
var atoms=this.asc.atoms;
for (var i=0, pt=0; i < tokens.length; ) {
var iAtom=this.parseIntStr$S(tokens[i++]) - 1;
var code=tokens[i++];
var key=iAtom + "_" + code ;
if (this.htFuncMap.containsKey$O(key)) {
ptSlater[pt++]=this.htFuncMap.get$O(key).intValue$();
} else {
var n=this.slaters.size$();
ptSlater[pt++]=n;
this.htFuncMap.put$O$O(key, Integer.valueOf$I(n));
this.addSlater$org_jmol_quantum_SlaterData$I(p$1.createSlaterData$I$S$S.apply(this, [iAtom + 1, atoms[iAtom].elementSymbol, code]), n);
}}
this.discardLinesUntilContains$S(":-");
this.rd$();
while (this.line != null  && this.line.length$() >= 20 ){
var iOrb=this.parseIntRange$S$I$I(this.line, 0, 10);
var energy=this.parseFloatRange$S$I$I(this.line, 10, 20);
var cData=Clazz.new_($I$(2,1));
cData.append$S(this.line.substring$I(20));
while (this.rd$() != null  && this.line.length$() >= 10 ){
if (this.line.charAt$I(3) != " ") break;
cData.append$S(this.line);
}
var list=Clazz.array(Float.TYPE, [this.slaters.size$()]);
tokens=(function(a,f){return f.apply(null,a)})([cData.toString()],$I$(3).getTokens$S);
if (tokens.length != nFuncs) (function(a,f){return f.apply(null,a)})(["DgridReader: number of coefficients (" + tokens.length + ") does not equal number of functions (" + nFuncs + ")" ],$I$(4).error$S);
for (var i=0; i < tokens.length; i++) {
var pt=ptSlater[i];
list[pt]=this.parseFloatStr$S(tokens[i]);
}
var mo=Clazz.new_($I$(1,1));
mo.put$O$O("energy", Float.valueOf$F(energy));
mo.put$O$O("coefficients", list);
mo.put$O$O("symmetry", symmetry + "_" + iOrb );
this.setMO$java_util_Map(mo);
}
}
this.discardLinesUntilContains$S(":  #  symmetry");
this.rd$();
for (var i=0; i < this.orbitals.size$(); i++) {
this.rd$();
var occupancy=this.parseFloatRange$S$I$I(this.line, 31, 45) + this.parseFloatRange$S$I$I(this.line, 47, 61);
this.orbitals.get$I(i).put$O$O("occupancy", Float.valueOf$F(occupancy));
}
this.sortOrbitals$();
this.setSlaters$Z$Z(true, true);
this.setMOs$S("eV");
}, p$1);

Clazz.newMeth(C$, 'createSlaterData$I$S$S', function (iAtom, atomSymbol, xyz) {
var ch;
var abc=" ";
var type=" ";
var exp=1;
var el=0;
var x=0;
var y=0;
var z=0;
for (var i=xyz.length$(); --i >= 0; ) {
switch ((ch=xyz.charAt$I(i)).$c()) {
case 95:
type=abc;
break;
case 49:
case 50:
case 51:
case 52:
exp=ch.$c() - 48;
break;
case 120:
x=exp;
el+=exp;
exp=1;
break;
case 121:
y=exp;
el+=exp;
exp=1;
break;
case 122:
z=exp;
el+=exp;
exp=1;
break;
case 115:
case 112:
case 100:
case 102:
default:
abc=ch;
}
}
var r=(exp - el - 1 );
var code=atomSymbol + xyz.substring$I$I(0, 2);
if (type != " ") code += "_" + type;
var f=this.htExponents.get$O(code);
var zeta=0;
if (f == null ) $I$(4).error$S("Exponent for " + code + " not found" );
 else zeta=f.floatValue$();
return Clazz.new_($I$(5,1).c$$I$I$I$I$I$D$D,[iAtom, x, y, z, r, zeta, 1]);
}, p$1);
var $p$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
