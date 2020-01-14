(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Bits']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Prop");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isDecimalDigit$C', function (c) {
if ($I$(1).decimal_digit == null ) {
$I$(1).decimal_digit_f$();
}return $I$(1).decimal_digit.get$I(c.$c());
}, 1);

Clazz.newMeth(C$, 'isAlphabetic$C', function (c) {
if ($I$(1).letter == null ) {
$I$(1).letter_f$();
}return $I$(1).letter.get$I(c.$c());
}, 1);

Clazz.newMeth(C$, 'isMath$C', function (c) {
if ($I$(1).math == null ) {
$I$(1).math_f$();
}return $I$(1).math.get$I(c.$c());
}, 1);

Clazz.newMeth(C$, 'isCurrency$C', function (c) {
if ($I$(1).currency == null ) {
$I$(1).currency_f$();
}return $I$(1).currency.get$I(c.$c());
}, 1);

Clazz.newMeth(C$, 'isWhite$C', function (c) {
if ($I$(1).white == null ) {
$I$(1).white_f$();
}return $I$(1).white.get$I(c.$c());
}, 1);

Clazz.newMeth(C$, 'isPunct$C', function (c) {
if ($I$(1).punct == null ) {
$I$(1).punct_f$();
}return $I$(1).punct.get$I(c.$c());
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
