(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),I$=[[0,'javajs.util.P3i']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HallTranslation");
C$.latticeTranslationData=null;
C$.nLatticeTypes=0;
C$.hallTranslationTerms=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.latticeTranslationData=Clazz.array(String, -1, ["\u0000", "unknown", "", "P", "primitive", "", "I", "body-centered", " 1n", "R", "rhombohedral", " 1r 1r", "F", "face-centered", " 1ab 1bc 1ac", "A", "A-centered", " 1bc", "B", "B-centered", " 1ac", "C", "C-centered", " 1ab", "S", "rhombohedral(S)", " 1s 1s", "T", "rhombohedral(T)", " 1t 1t"]);
C$.nLatticeTypes=(C$.latticeTranslationData.length/3|0) - 1;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.translationCode='\0';
this.rotationOrder=0;
this.rotationShift12ths=0;
this.vectorShift12ths=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.translationCode="\u0000";
}, 1);

Clazz.newMeth(C$, 'c$$C$javajs_util_P3i', function (translationCode, params) {
C$.$init$.apply(this);
this.translationCode=translationCode;
if (params != null ) {
if (params.z >= 0) {
this.vectorShift12ths=params;
return;
}this.rotationOrder=params.x;
this.rotationShift12ths=params.y;
}this.vectorShift12ths=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getHallLatticeEquivalent$I', function (latticeParameter) {
var latticeCode=C$.getLatticeCode$I(latticeParameter);
var isCentrosymmetric=(latticeParameter > 0);
return (isCentrosymmetric ? "-" : "") + latticeCode + " 1" ;
}, 1);

Clazz.newMeth(C$, 'getLatticeIndex$C', function (latt) {
for (var i=1, ipt=3; i <= C$.nLatticeTypes; i++, ipt+=3) if (C$.latticeTranslationData[ipt].charAt$I(0) == latt) return i;

return 0;
}, 1);

Clazz.newMeth(C$, 'getLatticeCode$I', function (latt) {
if (latt < 0) latt=-latt;
return (latt == 0 ? "\u0000" : latt > C$.nLatticeTypes ? C$.getLatticeCode$I(C$.getLatticeIndex$C(String.fromCharCode(latt))) : C$.latticeTranslationData[latt * 3].charAt$I(0));
}, 1);

Clazz.newMeth(C$, 'getLatticeDesignation$I', function (latt) {
var isCentrosymmetric=(latt > 0);
var str=(isCentrosymmetric ? "-" : "");
if (latt < 0) latt=-latt;
if (latt == 0 || latt > C$.nLatticeTypes ) return "";
return str + C$.getLatticeCode$I(latt) + ": " + (isCentrosymmetric ? "centrosymmetric " : "") + C$.latticeTranslationData[latt * 3 + 1] ;
}, 1);

Clazz.newMeth(C$, 'getLatticeDesignation2$C$Z', function (latticeCode, isCentrosymmetric) {
var latt=C$.getLatticeIndex$C(latticeCode);
if (!isCentrosymmetric) latt=-latt;
return C$.getLatticeDesignation$I(latt);
}, 1);

Clazz.newMeth(C$, 'getLatticeExtension$C$Z', function (latt, isCentrosymmetric) {
for (var i=1, ipt=3; i <= C$.nLatticeTypes; i++, ipt+=3) if (C$.latticeTranslationData[ipt].charAt$I(0) == latt) return C$.latticeTranslationData[ipt + 2] + (isCentrosymmetric ? " -1" : "");

return "";
}, 1);

Clazz.newMeth(C$, 'getHallTerms$', function () {
return (C$.hallTranslationTerms == null  ? C$.hallTranslationTerms=Clazz.array(C$, -1, [Clazz.new_(C$.c$$C$javajs_util_P3i,["a", $I$(1).new3$I$I$I(6, 0, 0)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["b", $I$(1).new3$I$I$I(0, 6, 0)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["c", $I$(1).new3$I$I$I(0, 0, 6)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["n", $I$(1).new3$I$I$I(6, 6, 6)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["u", $I$(1).new3$I$I$I(3, 0, 0)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["v", $I$(1).new3$I$I$I(0, 3, 0)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["w", $I$(1).new3$I$I$I(0, 0, 3)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["d", $I$(1).new3$I$I$I(3, 3, 3)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["1", $I$(1).new3$I$I$I(2, 6, -1)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["1", $I$(1).new3$I$I$I(3, 4, -1)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["2", $I$(1).new3$I$I$I(3, 8, -1)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["1", $I$(1).new3$I$I$I(4, 3, -1)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["3", $I$(1).new3$I$I$I(4, 9, -1)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["1", $I$(1).new3$I$I$I(6, 2, -1)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["2", $I$(1).new3$I$I$I(6, 4, -1)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["4", $I$(1).new3$I$I$I(6, 8, -1)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["5", $I$(1).new3$I$I$I(6, 10, -1)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["r", $I$(1).new3$I$I$I(4, 8, 8)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["s", $I$(1).new3$I$I$I(8, 8, 4)]), Clazz.new_(C$.c$$C$javajs_util_P3i,["t", $I$(1).new3$I$I$I(8, 4, 8)])]) : C$.hallTranslationTerms);
}, 1);

Clazz.newMeth(C$, 'getHallTranslation$C$I', function (translationCode, order) {
var ht=null;
for (var i=C$.getHallTerms$().length; --i >= 0; ) {
var h=C$.hallTranslationTerms[i];
if (h.translationCode == translationCode) {
if (h.rotationOrder == 0 || h.rotationOrder == order ) {
ht=Clazz.new_(C$.c$$C$javajs_util_P3i,[translationCode, null]);
ht.translationCode=translationCode;
ht.rotationShift12ths=h.rotationShift12ths;
ht.vectorShift12ths=h.vectorShift12ths;
return ht;
}}}
return ht;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
