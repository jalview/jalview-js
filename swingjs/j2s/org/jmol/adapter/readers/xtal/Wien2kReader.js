(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'javajs.util.PT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Wien2kReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.latticeCode="\u0000";
this.doSymmetry=true;
this.cxyz=" x y z";
},1);

C$.$fields$=[['Z',['isrhombohedral','doSymmetry'],'C',['latticeCode'],'S',['cxyz']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.doSymmetry=!this.sgName.equals$O("none");
this.setFractionalCoordinates$Z(true);
this.asc.setCollectionName$S(this.rd$());
p$1.readUnitCell.apply(this, []);
p$1.readAtoms.apply(this, []);
p$1.readSymmetry.apply(this, []);
p$1.readEmbeddedScript.apply(this, []);
this.continuing=false;
});

Clazz.newMeth(C$, 'readUnitCell', function () {
this.rd$();
this.isrhombohedral=((this.latticeCode=this.line.charAt$I(0)) == "R");
if (this.line.startsWith$S("CYZ")) this.latticeCode="A";
 else if (this.line.startsWith$S("CXZ")) this.latticeCode="B";
 else if (this.line.startsWith$S("B")) this.latticeCode="I";
if (this.latticeCode != "R" && this.latticeCode != "H" ) this.asc.getXSymmetry$().setLatticeParameter$I(this.latticeCode.$c());
if (this.line.length$() > 32) {
var name=this.line.substring$I(32).trim$();
if (name.indexOf$S(" ") >= 0) name=name.substring$I(name.indexOf$S(" ") + 1);
if (name.indexOf$S("_") >= 0) name=name.substring$I(name.indexOf$S("_") + 1);
this.setSpaceGroupName$S(name);
}var factor=(this.rd$().toLowerCase$().indexOf$S("ang") >= 0 ? 1.0 : 0.5291772);
this.rd$();
var a=this.parseFloatRange$S$I$I(this.line, 0, 10) * factor;
var b=this.parseFloatRange$S$I$I(this.line, 10, 20) * factor;
var c=this.parseFloatRange$S$I$I(this.line, 20, 30) * factor;
var l=this.line.length$();
var alpha=(l >= 40 ? this.parseFloatRange$S$I$I(this.line, 30, 40) : 0);
var beta=(l >= 50 ? this.parseFloatRange$S$I$I(this.line, 40, 50) : 0);
var gamma=(l >= 60 ? this.parseFloatRange$S$I$I(this.line, 50, 60) : 0);
if (this.isrhombohedral) {
var ar=Math.sqrt(a * a / 3 + c * c / 9);
alpha=beta=gamma=(Math.acos((2 * c * c  - 3 * a * a ) / (2 * c * c  + 6 * a * a )) * 180.0 / 3.141592653589793);
a=b=c=ar;
}if (Float.isNaN$F(alpha) || alpha == 0  ) alpha=90;
if (Float.isNaN$F(beta) || beta == 0  ) beta=90;
if (Float.isNaN$F(gamma) || gamma == 0  ) gamma=90;
this.setUnitCell$F$F$F$F$F$F(a, b, c, alpha, beta, gamma);
}, p$1);

Clazz.newMeth(C$, 'readAtoms', function () {
this.rd$();
while (this.line != null  && (this.line.indexOf$S("ATOM") == 0 || !this.doSymmetry && this.line.indexOf$S(":") == 8  ) ){
var thisAtom=this.asc.ac;
p$1.addAtom.apply(this, []);
if (this.rd$().indexOf$S("MULT=") == 10) for (var i=this.parseIntRange$S$I$I(this.line, 15, 18); --i >= 0; ) {
this.rd$();
if (!this.doSymmetry) p$1.addAtom.apply(this, []);
}
var atomName=this.line.substring$I$I(0, 10);
var sym=atomName.substring$I$I(0, 2).trim$();
if (sym.length$() == 2 && $I$(1,"isDigit$C",[sym.charAt$I(1)]) ) sym=sym.substring$I$I(0, 1);
atomName=$I$(1).rep$S$S$S(atomName, " ", "");
var n=0;
for (var i=this.asc.ac; --i >= thisAtom; ) {
var atom=this.asc.atoms[i];
atom.elementSymbol=sym;
atom.atomName=atomName + "_" + (n++) ;
}
while (this.rd$() != null  && this.line.indexOf$S("ATOM") < 0  && this.line.indexOf$S("SYMMETRY") < 0 ){
}
}
}, p$1);

Clazz.newMeth(C$, 'addAtom', function () {
var a=this.parseFloatRange$S$I$I(this.line, 12, 22);
var b=this.parseFloatRange$S$I$I(this.line, 25, 35);
var c=this.parseFloatRange$S$I$I(this.line, 38, 48);
var atom=this.asc.addNewAtom$();
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, a, b, c);
}, p$1);

Clazz.newMeth(C$, 'readSymmetry', function () {
if (this.line.indexOf$S("SYMMETRY") < 0) return;
var n=this.parseIntRange$S$I$I(this.line, 0, 4);
for (var i=n; --i >= 0; ) {
var xyz=p$1.getJones.apply(this, []) + "," + p$1.getJones.apply(this, []) + "," + p$1.getJones.apply(this, []) ;
if (this.doSymmetry) this.setSymmetryOperator$S(xyz);
this.rd$();
}
}, p$1);

Clazz.newMeth(C$, 'getJones', function () {
this.rd$();
var xyz="";
var trans=this.parseFloatStr$S(this.line.substring$I(6));
for (var i=0; i < 6; i++) {
if (this.line.charAt$I(i) == "-") xyz += "-";
if (this.line.charAt$I(++i) == "1") {
xyz += " x y z".charAt$I(i);
if (trans > 0 ) xyz += "+";
if (trans != 0 ) xyz += new Float(trans).toString();
}}
return xyz;
}, p$1);

Clazz.newMeth(C$, 'readEmbeddedScript', function () {
while (this.line != null ){
this.checkCurrentLineForScript$();
this.rd$();
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
