(function(){var P$=Clazz.newPackage("java.time.format"),I$=[[0,'java.util.concurrent.ConcurrentHashMap','java.util.HashSet','java.util.Collections','java.util.Locale',['java.util.Locale','.Category'],'java.util.Objects','java.text.DecimalFormatSymbols']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DecimalStyle");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['zeroDigit','positiveSign','negativeSign','decimalSeparator']]
,['O',['STANDARD','java.time.format.DecimalStyle','CACHE','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, 'getAvailableLocales$', function () {
var l;
var locales=Clazz.new_($I$(2,1).c$$I,[l.length]);
$I$(3).addAll$java_util_Collection$OA(locales, l);
return locales;
}, 1);

Clazz.newMeth(C$, 'ofDefaultLocale$', function () {
return C$.of$java_util_Locale($I$(4,"getDefault$java_util_Locale_Category",[$I$(5).FORMAT]));
}, 1);

Clazz.newMeth(C$, 'of$java_util_Locale', function (locale) {
$I$(6).requireNonNull$O$S(locale, "locale");
var info=C$.CACHE.get$O(locale);
if (info == null ) {
info=C$.create$java_util_Locale(locale);
C$.CACHE.putIfAbsent$O$O(locale, info);
info=C$.CACHE.get$O(locale);
}return info;
}, 1);

Clazz.newMeth(C$, 'create$java_util_Locale', function (locale) {
var oldSymbols=$I$(7).getInstance$java_util_Locale(locale);
var zeroDigit=oldSymbols.getZeroDigit$();
var positiveSign="+";
var negativeSign=oldSymbols.getMinusSign$();
var decimalSeparator=oldSymbols.getDecimalSeparator$();
if (zeroDigit == "0" && negativeSign == "-"  && decimalSeparator == "." ) {
return C$.STANDARD;
}return Clazz.new_(C$.c$$C$C$C$C,[zeroDigit, positiveSign, negativeSign, decimalSeparator]);
}, 1);

Clazz.newMeth(C$, 'c$$C$C$C$C', function (zeroChar, positiveSignChar, negativeSignChar, decimalPointChar) {
;C$.$init$.apply(this);
this.zeroDigit=zeroChar;
this.positiveSign=positiveSignChar;
this.negativeSign=negativeSignChar;
this.decimalSeparator=decimalPointChar;
}, 1);

Clazz.newMeth(C$, 'getZeroDigit$', function () {
return this.zeroDigit;
});

Clazz.newMeth(C$, 'withZeroDigit$C', function (zeroDigit) {
if (zeroDigit == this.zeroDigit) {
return this;
}return Clazz.new_(C$.c$$C$C$C$C,[zeroDigit, this.positiveSign, this.negativeSign, this.decimalSeparator]);
});

Clazz.newMeth(C$, 'getPositiveSign$', function () {
return this.positiveSign;
});

Clazz.newMeth(C$, 'withPositiveSign$C', function (positiveSign) {
if (positiveSign == this.positiveSign) {
return this;
}return Clazz.new_(C$.c$$C$C$C$C,[this.zeroDigit, positiveSign, this.negativeSign, this.decimalSeparator]);
});

Clazz.newMeth(C$, 'getNegativeSign$', function () {
return this.negativeSign;
});

Clazz.newMeth(C$, 'withNegativeSign$C', function (negativeSign) {
if (negativeSign == this.negativeSign) {
return this;
}return Clazz.new_(C$.c$$C$C$C$C,[this.zeroDigit, this.positiveSign, negativeSign, this.decimalSeparator]);
});

Clazz.newMeth(C$, 'getDecimalSeparator$', function () {
return this.decimalSeparator;
});

Clazz.newMeth(C$, 'withDecimalSeparator$C', function (decimalSeparator) {
if (decimalSeparator == this.decimalSeparator) {
return this;
}return Clazz.new_(C$.c$$C$C$C$C,[this.zeroDigit, this.positiveSign, this.negativeSign, decimalSeparator]);
});

Clazz.newMeth(C$, 'convertToDigit$C', function (ch) {
var val=ch.$c() - this.zeroDigit.$c();
return (val >= 0 && val <= 9 ) ? val : -1;
});

Clazz.newMeth(C$, 'convertNumberToI18N$S', function (numericText) {
if (this.zeroDigit == "0") {
return numericText;
}var diff=this.zeroDigit.$c() - 48;
var array=numericText.toCharArray$();
for (var i=0; i < array.length; i++) {
array[i]=String.fromCharCode(((array[i]).$c() + diff));
}
return  String.instantialize(array);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.format.DecimalStyle")) {
var other=obj;
return (this.zeroDigit == other.zeroDigit && this.positiveSign == other.positiveSign  && this.negativeSign == other.negativeSign  && this.decimalSeparator == other.decimalSeparator );
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.zeroDigit.$c() + this.positiveSign.$c() + this.negativeSign.$c() + this.decimalSeparator.$c() ;
});

Clazz.newMeth(C$, 'toString', function () {
return "DecimalStyle[" + this.zeroDigit + this.positiveSign + this.negativeSign + this.decimalSeparator + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.STANDARD=Clazz.new_(C$.c$$C$C$C$C,["0", "+", "-", "."]);
C$.CACHE=Clazz.new_($I$(1,1).c$$I$F$I,[16, 0.75, 2]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
