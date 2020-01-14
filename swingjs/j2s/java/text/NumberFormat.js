(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'java.util.HashMap','java.util.Hashtable','StringBuffer','java.text.DontCareFieldPosition','java.text.ParsePosition','java.util.Locale','sun.util.resources.LocaleData','java.text.DecimalFormatSymbols','java.text.DecimalFormat']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NumberFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.text.Format');
C$.cachedLocaleData=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.cachedLocaleData=Clazz.new_($I$(2).c$$I,[3]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.groupingUsed=false;
this.maxFractionDigits=0;
this.parseIntegerOnly=false;
this.maximumIntegerDigits=0;
this.minimumIntegerDigits=0;
this.maximumFractionDigits=0;
this.minimumFractionDigits=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.groupingUsed=true;
this.maxFractionDigits=($b$[0] = 3, $b$[0]);
this.parseIntegerOnly=false;
this.maximumIntegerDigits=40;
this.minimumIntegerDigits=1;
this.maximumFractionDigits=3;
this.minimumFractionDigits=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'format$O$StringBuffer$java_text_FieldPosition', function (number, toAppendTo, pos) {
if (Clazz.instanceOf(number, "java.lang.Long") || Clazz.instanceOf(number, "java.lang.Integer") || Clazz.instanceOf(number, "java.lang.Short") || Clazz.instanceOf(number, "java.lang.Byte")  ) {
return this.format$J$StringBuffer$java_text_FieldPosition((number).longValue$(), toAppendTo, pos);
} else if (Clazz.instanceOf(number, "java.lang.Number")) {
return this.format$D$StringBuffer$java_text_FieldPosition((number).doubleValue$(), toAppendTo, pos);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot format given Object as a Number"]);
}});

Clazz.newMeth(C$, 'parseObject$S$java_text_ParsePosition', function (source, pos) {
return this.parse$S$java_text_ParsePosition(source, pos);
});

Clazz.newMeth(C$, 'format$D', function (number) {
return this.format$D$StringBuffer$java_text_FieldPosition(number, Clazz.new_($I$(3)), $I$(4).INSTANCE).toString();
});

Clazz.newMeth(C$, 'format$J', function (number) {
return this.format$J$StringBuffer$java_text_FieldPosition(number, Clazz.new_($I$(3)), $I$(4).INSTANCE).toString();
});

Clazz.newMeth(C$, 'parse$S', function (source) {
var parsePosition=Clazz.new_($I$(5).c$$I,[0]);
var result=this.parse$S$java_text_ParsePosition(source, parsePosition);
if (parsePosition.index == 0) {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["Unparseable number: \"" + source + "\"" , parsePosition.errorIndex]);
}return result;
});

Clazz.newMeth(C$, 'isParseIntegerOnly$', function () {
return this.parseIntegerOnly;
});

Clazz.newMeth(C$, 'setParseIntegerOnly$Z', function (value) {
this.parseIntegerOnly=value;
});

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.getInstance$java_util_Locale$I($I$(6).getDefault$(), 0);
}, 1);

Clazz.newMeth(C$, 'getInstance$java_util_Locale', function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 0);
}, 1);

Clazz.newMeth(C$, 'getNumberInstance$', function () {
return C$.getInstance$java_util_Locale$I($I$(6).getDefault$(), 0);
}, 1);

Clazz.newMeth(C$, 'getNumberInstance$java_util_Locale', function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 0);
}, 1);

Clazz.newMeth(C$, 'getIntegerInstance$', function () {
return C$.getInstance$java_util_Locale$I($I$(6).getDefault$(), 4);
}, 1);

Clazz.newMeth(C$, 'getIntegerInstance$java_util_Locale', function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 4);
}, 1);

Clazz.newMeth(C$, 'getCurrencyInstance$', function () {
return C$.getInstance$java_util_Locale$I($I$(6).getDefault$(), 1);
}, 1);

Clazz.newMeth(C$, 'getCurrencyInstance$java_util_Locale', function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 1);
}, 1);

Clazz.newMeth(C$, 'getPercentInstance$', function () {
return C$.getInstance$java_util_Locale$I($I$(6).getDefault$(), 2);
}, 1);

Clazz.newMeth(C$, 'getPercentInstance$java_util_Locale', function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 2);
}, 1);

Clazz.newMeth(C$, 'getScientificInstance$', function () {
return C$.getInstance$java_util_Locale$I($I$(6).getDefault$(), 3);
}, 1);

Clazz.newMeth(C$, 'getScientificInstance$java_util_Locale', function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 3);
}, 1);

Clazz.newMeth(C$, 'hashCode$', function () {
return this.maximumIntegerDigits * 37 + this.maxFractionDigits;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) {
return false;
}if (this === obj ) {
return true;
}if (this.getClass$() !== obj.getClass$() ) {
return false;
}var other=obj;
return (this.maximumIntegerDigits == other.maximumIntegerDigits && this.minimumIntegerDigits == other.minimumIntegerDigits  && this.maximumFractionDigits == other.maximumFractionDigits  && this.minimumFractionDigits == other.minimumFractionDigits  && this.groupingUsed == other.groupingUsed   && this.parseIntegerOnly == other.parseIntegerOnly  );
});

Clazz.newMeth(C$, 'clone$', function () {
var other=C$.superclazz.prototype.clone$.apply(this, []);
return other;
});

Clazz.newMeth(C$, 'isGroupingUsed$', function () {
return this.groupingUsed;
});

Clazz.newMeth(C$, 'setGroupingUsed$Z', function (newValue) {
this.groupingUsed=newValue;
});

Clazz.newMeth(C$, 'getMaximumIntegerDigits$', function () {
return this.maximumIntegerDigits;
});

Clazz.newMeth(C$, 'setMaximumIntegerDigits$I', function (newValue) {
this.maximumIntegerDigits=Math.max(0, newValue);
if (this.minimumIntegerDigits > this.maximumIntegerDigits) {
this.minimumIntegerDigits=this.maximumIntegerDigits;
}});

Clazz.newMeth(C$, 'getMinimumIntegerDigits$', function () {
return this.minimumIntegerDigits;
});

Clazz.newMeth(C$, 'setMinimumIntegerDigits$I', function (newValue) {
this.minimumIntegerDigits=Math.max(0, newValue);
if (this.minimumIntegerDigits > this.maximumIntegerDigits) {
this.maximumIntegerDigits=this.minimumIntegerDigits;
}});

Clazz.newMeth(C$, 'getMaximumFractionDigits$', function () {
return this.maximumFractionDigits;
});

Clazz.newMeth(C$, 'setMaximumFractionDigits$I', function (newValue) {
this.maximumFractionDigits=Math.max(0, newValue);
if (this.maximumFractionDigits < this.minimumFractionDigits) {
this.minimumFractionDigits=this.maximumFractionDigits;
}});

Clazz.newMeth(C$, 'getMinimumFractionDigits$', function () {
return this.minimumFractionDigits;
});

Clazz.newMeth(C$, 'setMinimumFractionDigits$I', function (newValue) {
this.minimumFractionDigits=Math.max(0, newValue);
if (this.maximumFractionDigits < this.minimumFractionDigits) {
this.maximumFractionDigits=this.minimumFractionDigits;
}});

Clazz.newMeth(C$, 'getRoundingMode$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setRoundingMode$java_math_RoundingMode', function (roundingMode) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getInstance$java_util_Locale$I', function (desiredLocale, choice) {
var numberPatterns=C$.cachedLocaleData.get$O(desiredLocale);
if (numberPatterns == null ) {
var resource=$I$(7).getNumberFormatData$java_util_Locale(desiredLocale);
numberPatterns=resource.getStringArray$S("NumberPatterns");
C$.cachedLocaleData.put$TK$TV(desiredLocale, numberPatterns);
}var symbols=$I$(8).getInstance$java_util_Locale(desiredLocale);
var entry=(choice == 4) ? 0 : choice;
var format=Clazz.new_($I$(9).c$$S$java_text_DecimalFormatSymbols,[numberPatterns[entry], symbols]);
if (choice == 4) {
format.setMaximumFractionDigits$I(0);
format.setDecimalSeparatorAlwaysShown$Z(false);
format.setParseIntegerOnly$Z(true);
} else if (choice == 1) {
format.adjustForCurrencyDefaultFractionDigits$();
}return format;
}, 1);
var $b$ = new Int8Array(1);
;
(function(){var C$=Clazz.newClass(P$.NumberFormat, "Field", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.text.Format','.Field']);
C$.$instanceMap=null;
C$.INTEGER=null;
C$.FRACTION=null;
C$.EXPONENT=null;
C$.DECIMAL_SEPARATOR=null;
C$.SIGN=null;
C$.GROUPING_SEPARATOR=null;
C$.EXPONENT_SYMBOL=null;
C$.PERCENT=null;
C$.PERMILLE=null;
C$.CURRENCY=null;
C$.EXPONENT_SIGN=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.$instanceMap=Clazz.new_($I$(1).c$$I,[11]);
C$.INTEGER=Clazz.new_(C$.c$$S,["integer"]);
C$.FRACTION=Clazz.new_(C$.c$$S,["fraction"]);
C$.EXPONENT=Clazz.new_(C$.c$$S,["exponent"]);
C$.DECIMAL_SEPARATOR=Clazz.new_(C$.c$$S,["decimal separator"]);
C$.SIGN=Clazz.new_(C$.c$$S,["sign"]);
C$.GROUPING_SEPARATOR=Clazz.new_(C$.c$$S,["grouping separator"]);
C$.EXPONENT_SYMBOL=Clazz.new_(C$.c$$S,["exponent symbol"]);
C$.PERCENT=Clazz.new_(C$.c$$S,["percent"]);
C$.PERMILLE=Clazz.new_(C$.c$$S,["per mille"]);
C$.CURRENCY=Clazz.new_(C$.c$$S,["currency"]);
C$.EXPONENT_SIGN=Clazz.new_(C$.c$$S,["exponent sign"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
if (this.getClass$() === Clazz.getClass(C$) ) {
C$.$instanceMap.put$TK$TV(name, this);
}}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
