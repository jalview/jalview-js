(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},I$=[[0,'org.jmol.symmetry.HallRotationTerm','org.jmol.symmetry.HallTranslation','org.jmol.util.Logger','javajs.util.SB','javajs.util.P3i']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HallInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.latticeCode="\u0000";
this.rotationTerms=Clazz.array($I$(1), [16]);
},1);

C$.$fields$=[['Z',['isCentrosymmetric'],'C',['latticeCode'],'I',['nRotations'],'S',['hallSymbol','primitiveHallSymbol','latticeExtension','vectorCode'],'O',['rotationTerms','org.jmol.symmetry.HallRotationTerm[]','vector12ths','javajs.util.P3i']]]

Clazz.newMeth(C$, 'c$$S', function (hallSymbol) {
;C$.$init$.apply(this);
try {
var str=this.hallSymbol=hallSymbol.trim$();
str=p$1.extractLatticeInfo$S.apply(this, [str]);
if ($I$(2).getLatticeIndex$C(this.latticeCode) == 0) return;
this.latticeExtension=$I$(2).getLatticeExtension$C$Z(this.latticeCode, this.isCentrosymmetric);
str=p$1.extractVectorInfo$S.apply(this, [str]) + this.latticeExtension;
if ($I$(3).debugging) $I$(3).debug$S("Hallinfo: " + hallSymbol + " " + str );
var prevOrder=0;
var prevAxisType="\u0000";
this.primitiveHallSymbol="P";
while (str.length$() > 0 && this.nRotations < 16 ){
str=p$1.extractRotationInfo$S$I$C.apply(this, [str, prevOrder, prevAxisType]);
var r=this.rotationTerms[this.nRotations - 1];
prevOrder=r.order;
prevAxisType=r.axisType;
this.primitiveHallSymbol += " " + r.primitiveCode;
}
this.primitiveHallSymbol += this.vectorCode;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3).error$S("Invalid Hall symbol " + e);
this.nRotations=0;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'dumpInfo$', function () {
var sb=Clazz.new_($I$(4,1));
sb.append$S("\nHall symbol: ").append$S(this.hallSymbol).append$S("\nprimitive Hall symbol: ").append$S(this.primitiveHallSymbol).append$S("\nlattice type: ").append$S(p$1.getLatticeDesignation.apply(this, []));
for (var i=0; i < this.nRotations; i++) {
sb.append$S("\n\nrotation term ").appendI$I(i + 1).append$S(this.rotationTerms[i].dumpInfo$S(this.vectorCode));
}
return sb.toString();
});

Clazz.newMeth(C$, 'getLatticeDesignation', function () {
return $I$(2).getLatticeDesignation2$C$Z(this.latticeCode, this.isCentrosymmetric);
}, p$1);

Clazz.newMeth(C$, 'extractLatticeInfo$S', function (name) {
var i=name.indexOf$S(" ");
if (i < 0) return "";
var term=name.substring$I$I(0, i).toUpperCase$();
this.latticeCode=term.charAt$I(0);
if (this.latticeCode == "-") {
this.isCentrosymmetric=true;
this.latticeCode=term.charAt$I(1);
}return name.substring$I(i + 1).trim$();
}, p$1);

Clazz.newMeth(C$, 'extractVectorInfo$S', function (name) {
this.vector12ths=Clazz.new_($I$(5,1));
this.vectorCode="";
var i=name.indexOf$S("(");
var j=name.indexOf$S$I(")", i);
if (i > 0 && j > i ) {
var term=name.substring$I$I(i + 1, j);
this.vectorCode=" (" + term + ")" ;
name=name.substring$I$I(0, i).trim$();
i=term.indexOf$S(" ");
if (i >= 0) {
this.vector12ths.x=Integer.parseInt$S(term.substring$I$I(0, i));
term=term.substring$I(i + 1).trim$();
i=term.indexOf$S(" ");
if (i >= 0) {
this.vector12ths.y=Integer.parseInt$S(term.substring$I$I(0, i));
term=term.substring$I(i + 1).trim$();
}}this.vector12ths.z=Integer.parseInt$S(term);
}return name;
}, p$1);

Clazz.newMeth(C$, 'extractRotationInfo$S$I$C', function (name, prevOrder, prevAxisType) {
var i=name.indexOf$S(" ");
var code;
if (i >= 0) {
code=name.substring$I$I(0, i);
name=name.substring$I(i + 1).trim$();
} else {
code=name;
name="";
}this.rotationTerms[this.nRotations]=Clazz.new_($I$(1,1).c$$org_jmol_symmetry_HallInfo$S$I$C,[this, code, prevOrder, prevAxisType]);
this.nRotations++;
return name;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
