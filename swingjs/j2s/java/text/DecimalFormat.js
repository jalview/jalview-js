(function(){var P$=Clazz.newPackage("java.text"),p$1={},I$=[[0,'java.text.FieldPosition','java.util.Hashtable','java.text.DigitList','java.util.Locale','sun.util.resources.LocaleData','java.text.DecimalFormatSymbols',['java.text.NumberFormat','.Field'],'java.text.CharacterIteratorFieldDelegate','StringBuffer','java.text.ParsePosition','InternalError','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DecimalFormat", null, 'java.text.NumberFormat');
C$.EmptyFieldPositionArray=null;
C$.$cachedLocaleData=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EmptyFieldPositionArray=Clazz.array($I$(1), [0]);
C$.$cachedLocaleData=Clazz.new_($I$(2).c$$I,[3]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.digitList=null;
this.positivePrefix=null;
this.positiveSuffix=null;
this.negativePrefix=null;
this.negativeSuffix=null;
this.posPrefixPattern=null;
this.posSuffixPattern=null;
this.negPrefixPattern=null;
this.negSuffixPattern=null;
this.multiplier=0;
this.groupingSize=0;
this.decimalSeparatorAlwaysShown=false;
this.parseBigDecimal=false;
this.isCurrencyFormat=false;
this.symbols=null;
this.useExponentialNotation=false;
this.positivePrefixFieldPositions=null;
this.positiveSuffixFieldPositions=null;
this.negativePrefixFieldPositions=null;
this.negativeSuffixFieldPositions=null;
this.minExponentDigits=0;
this.$maximumIntegerDigits=0;
this.$minimumIntegerDigits=0;
this.$maximumFractionDigits=0;
this.$minimumFractionDigits=0;
this.roundingMode=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.digitList=Clazz.new_($I$(3));
this.positivePrefix="";
this.positiveSuffix="";
this.negativePrefix="-";
this.negativeSuffix="";
this.multiplier=1;
this.groupingSize=($b$[0] = 3, $b$[0]);
this.decimalSeparatorAlwaysShown=false;
this.parseBigDecimal=false;
this.isCurrencyFormat=false;
this.symbols=null;
this.$maximumIntegerDigits=C$.superclazz.prototype.getMaximumIntegerDigits$.apply(this, []);
this.$minimumIntegerDigits=C$.superclazz.prototype.getMinimumIntegerDigits$.apply(this, []);
this.$maximumFractionDigits=C$.superclazz.prototype.getMaximumFractionDigits$.apply(this, []);
this.$minimumFractionDigits=C$.superclazz.prototype.getMinimumFractionDigits$.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
var def=$I$(4).getDefault$();
var pattern=C$.$cachedLocaleData.get$O(def);
if (pattern == null ) {
var rb=$I$(5).getNumberFormatData$java_util_Locale(def);
var all=rb.getStringArray$S("NumberPatterns");
pattern=all[0];
C$.$cachedLocaleData.put$TK$TV(def, pattern);
}this.symbols=Clazz.new_($I$(6).c$$java_util_Locale,[def]);
p$1.applyPattern$S$Z.apply(this, [pattern, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (pattern) {
Clazz.super_(C$, this,1);
this.symbols=Clazz.new_($I$(6).c$$java_util_Locale,[$I$(4).getDefault$()]);
p$1.applyPattern$S$Z.apply(this, [pattern, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_text_DecimalFormatSymbols', function (pattern, symbols) {
Clazz.super_(C$, this,1);
this.symbols=symbols.clone$();
p$1.applyPattern$S$Z.apply(this, [pattern, false]);
}, 1);

Clazz.newMeth(C$, 'format$O$StringBuffer$java_text_FieldPosition', function (number, toAppendTo, pos) {
if (Clazz.instanceOf(number, "java.lang.Long") || Clazz.instanceOf(number, "java.lang.Integer") || Clazz.instanceOf(number, "java.lang.Short") || Clazz.instanceOf(number, "java.lang.Byte")  ) {
return this.format$J$StringBuffer$java_text_FieldPosition((number).longValue$(), toAppendTo, pos);
} else if (Clazz.instanceOf(number, "java.lang.Number")) {
return this.format$D$StringBuffer$java_text_FieldPosition((number).doubleValue$(), toAppendTo, pos);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot format given Object as a Number"]);
}});

Clazz.newMeth(C$, 'format$D$StringBuffer$java_text_FieldPosition', function (number, result, fieldPosition) {
fieldPosition.setBeginIndex$I(0);
fieldPosition.setEndIndex$I(0);
var isInt=(number == (number|0)  && Math.abs(number) < 2147483647  );
if (isInt) return p$1.formatLong$J$StringBuffer$java_text_Format_FieldDelegate.apply(this, [(number|0), result, fieldPosition.getFieldDelegate$()]);
 else return p$1.formatDouble$D$StringBuffer$java_text_Format_FieldDelegate.apply(this, [number, result, fieldPosition.getFieldDelegate$()]);
});

Clazz.newMeth(C$, 'formatDouble$D$StringBuffer$java_text_Format_FieldDelegate', function (number, result, delegate) {
if (Double.isNaN$D(number) || (Double.isInfinite$D(number) && this.multiplier == 0 ) ) {
var iFieldStart=result.length$();
result.append$S(this.symbols.getNaN$());
delegate.formatted$I$java_text_Format_Field$O$I$I$StringBuffer(0, $I$(7).INTEGER, $I$(7).INTEGER, iFieldStart, result.length$(), result);
return result;
}var isNegative=!!(((number < 0.0 ) || (number == 0.0  && 1 / number < 0.0  ) ) ^ (this.multiplier < 0));
if (this.multiplier != 1) {
number *= this.multiplier;
}if (Double.isInfinite$D(number)) {
if (isNegative) {
p$1.append$StringBuffer$S$java_text_Format_FieldDelegate$java_text_FieldPositionA$java_text_Format_Field.apply(this, [result, this.negativePrefix, delegate, p$1.getNegativePrefixFieldPositions.apply(this, []), $I$(7).SIGN]);
} else {
p$1.append$StringBuffer$S$java_text_Format_FieldDelegate$java_text_FieldPositionA$java_text_Format_Field.apply(this, [result, this.positivePrefix, delegate, p$1.getPositivePrefixFieldPositions.apply(this, []), $I$(7).SIGN]);
}var iFieldStart=result.length$();
result.append$S(this.symbols.getInfinity$());
delegate.formatted$I$java_text_Format_Field$O$I$I$StringBuffer(0, $I$(7).INTEGER, $I$(7).INTEGER, iFieldStart, result.length$(), result);
if (isNegative) {
p$1.append$StringBuffer$S$java_text_Format_FieldDelegate$java_text_FieldPositionA$java_text_Format_Field.apply(this, [result, this.negativeSuffix, delegate, p$1.getNegativeSuffixFieldPositions.apply(this, []), $I$(7).SIGN]);
} else {
p$1.append$StringBuffer$S$java_text_Format_FieldDelegate$java_text_FieldPositionA$java_text_Format_Field.apply(this, [result, this.positiveSuffix, delegate, p$1.getPositiveSuffixFieldPositions.apply(this, []), $I$(7).SIGN]);
}return result;
}if (isNegative) {
number=-number;
}Clazz.assert(C$, this, function(){return (number >= 0  && !Double.isInfinite$D(number) )});
{
var maxIntDigits=C$.superclazz.prototype.getMaximumIntegerDigits$.apply(this, []);
var minIntDigits=C$.superclazz.prototype.getMinimumIntegerDigits$.apply(this, []);
var maxFraDigits=C$.superclazz.prototype.getMaximumFractionDigits$.apply(this, []);
var minFraDigits=C$.superclazz.prototype.getMinimumFractionDigits$.apply(this, []);
this.digitList.set$Z$D$I$Z(isNegative, number, this.useExponentialNotation ? maxIntDigits + maxFraDigits : maxFraDigits, !this.useExponentialNotation);
return p$1.subformat$StringBuffer$java_text_Format_FieldDelegate$Z$Z$I$I$I$I.apply(this, [result, delegate, isNegative, false, maxIntDigits, minIntDigits, maxFraDigits, minFraDigits]);
}}, p$1);

Clazz.newMeth(C$, 'format$J$StringBuffer$java_text_FieldPosition', function (number, result, fieldPosition) {
fieldPosition.setBeginIndex$I(0);
fieldPosition.setEndIndex$I(0);
return p$1.formatLong$J$StringBuffer$java_text_Format_FieldDelegate.apply(this, [number, result, fieldPosition.getFieldDelegate$()]);
});

Clazz.newMeth(C$, 'formatLong$J$StringBuffer$java_text_Format_FieldDelegate', function (number, result, delegate) {
var isNegative=(number < 0);
if (isNegative) {
number=-number;
}if (number < 0) {
} else if (this.multiplier != 1 && this.multiplier != 0 ) {
var cutoff=(9223372036854775807/this.multiplier|0);
if (cutoff < 0) {
cutoff=-cutoff;
}}number*=this.multiplier;
if (number == 0) {
isNegative=false;
} else {
if (this.multiplier < 0) {
number=-number;
isNegative=!isNegative;
}}{
var maxIntDigits=C$.superclazz.prototype.getMaximumIntegerDigits$.apply(this, []);
var minIntDigits=C$.superclazz.prototype.getMinimumIntegerDigits$.apply(this, []);
var maxFraDigits=C$.superclazz.prototype.getMaximumFractionDigits$.apply(this, []);
var minFraDigits=C$.superclazz.prototype.getMinimumFractionDigits$.apply(this, []);
this.digitList.setLong$Z$J$I(isNegative, number, this.useExponentialNotation ? maxIntDigits + maxFraDigits : 0);
return p$1.subformat$StringBuffer$java_text_Format_FieldDelegate$Z$Z$I$I$I$I.apply(this, [result, delegate, isNegative, true, maxIntDigits, minIntDigits, maxFraDigits, minFraDigits]);
}}, p$1);

Clazz.newMeth(C$, 'formatToCharacterIterator$O', function (obj) {
var delegate=Clazz.new_($I$(8));
var sb=Clazz.new_($I$(9));
if (Clazz.instanceOf(obj, "java.lang.Double") || Clazz.instanceOf(obj, "java.lang.Float") ) {
p$1.formatDouble$D$StringBuffer$java_text_Format_FieldDelegate.apply(this, [(obj).doubleValue$(), sb, delegate]);
} else if (Clazz.instanceOf(obj, "java.lang.Long") || Clazz.instanceOf(obj, "java.lang.Integer") || Clazz.instanceOf(obj, "java.lang.Short") || Clazz.instanceOf(obj, "java.lang.Byte")  ) {
p$1.formatLong$J$StringBuffer$java_text_Format_FieldDelegate.apply(this, [(obj).longValue$(), sb, delegate]);
} else if (obj == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["formatToCharacterIterator must be passed non-null object"]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot format given Object as a Number"]);
}return delegate.getIterator$S(sb.toString());
});

Clazz.newMeth(C$, 'subformat$StringBuffer$java_text_Format_FieldDelegate$Z$Z$I$I$I$I', function (result, delegate, isNegative, isInteger, maxIntDigits, minIntDigits, maxFraDigits, minFraDigits) {
var zero=this.symbols.getZeroDigit$();
var zeroDelta=zero.$c() - 48;
var grouping=this.symbols.getGroupingSeparator$();
var decimal=this.isCurrencyFormat ? this.symbols.getMonetaryDecimalSeparator$() : this.symbols.getDecimalSeparator$();
if (this.digitList.isZero$()) {
this.digitList.decimalAt=0;
}if (isNegative) {
p$1.append$StringBuffer$S$java_text_Format_FieldDelegate$java_text_FieldPositionA$java_text_Format_Field.apply(this, [result, this.negativePrefix, delegate, p$1.getNegativePrefixFieldPositions.apply(this, []), $I$(7).SIGN]);
} else {
p$1.append$StringBuffer$S$java_text_Format_FieldDelegate$java_text_FieldPositionA$java_text_Format_Field.apply(this, [result, this.positivePrefix, delegate, p$1.getPositivePrefixFieldPositions.apply(this, []), $I$(7).SIGN]);
}if (this.useExponentialNotation) {
var iFieldStart=result.length$();
var iFieldEnd=-1;
var fFieldStart=-1;
var exponent=this.digitList.decimalAt;
var repeat=maxIntDigits;
var minimumIntegerDigits=minIntDigits;
if (repeat > 1 && repeat > minIntDigits ) {
if (exponent >= 1) {
exponent=(((exponent - 1)/repeat|0)) * repeat;
} else {
exponent=(((exponent - repeat)/repeat|0)) * repeat;
}minimumIntegerDigits=1;
} else {
exponent-=minimumIntegerDigits;
}var minimumDigits=minIntDigits + minFraDigits;
if (minimumDigits < 0) {
minimumDigits=2147483647;
}var integerDigits=this.digitList.isZero$() ? minimumIntegerDigits : this.digitList.decimalAt - exponent;
if (minimumDigits < integerDigits) {
minimumDigits=integerDigits;
}var totalDigits=this.digitList.count;
if (minimumDigits > totalDigits) {
totalDigits=minimumDigits;
}var addedDecimalSeparator=false;
for (var i=0; i < totalDigits; ++i) {
if (i == integerDigits) {
iFieldEnd=result.length$();
result.append$C(decimal);
addedDecimalSeparator=true;
fFieldStart=result.length$();
}result.append$C((i < this.digitList.count) ? String.fromCharCode(((this.digitList.digits[i]).$c() + zeroDelta)) : zero);
}
if (this.decimalSeparatorAlwaysShown && totalDigits == integerDigits ) {
iFieldEnd=result.length$();
result.append$C(decimal);
addedDecimalSeparator=true;
fFieldStart=result.length$();
}if (iFieldEnd == -1) {
iFieldEnd=result.length$();
}delegate.formatted$I$java_text_Format_Field$O$I$I$StringBuffer(0, $I$(7).INTEGER, $I$(7).INTEGER, iFieldStart, iFieldEnd, result);
if (addedDecimalSeparator) {
delegate.formatted$java_text_Format_Field$O$I$I$StringBuffer($I$(7).DECIMAL_SEPARATOR, $I$(7).DECIMAL_SEPARATOR, iFieldEnd, fFieldStart, result);
}if (fFieldStart == -1) {
fFieldStart=result.length$();
}delegate.formatted$I$java_text_Format_Field$O$I$I$StringBuffer(1, $I$(7).FRACTION, $I$(7).FRACTION, fFieldStart, result.length$(), result);
var fieldStart=result.length$();
result.append$S(this.symbols.getExponentSeparator$());
delegate.formatted$java_text_Format_Field$O$I$I$StringBuffer($I$(7).EXPONENT_SYMBOL, $I$(7).EXPONENT_SYMBOL, fieldStart, result.length$(), result);
if (this.digitList.isZero$()) {
exponent=0;
}var negativeExponent=exponent < 0;
if (negativeExponent) {
exponent=-exponent;
fieldStart=result.length$();
result.append$C(this.symbols.getMinusSign$());
delegate.formatted$java_text_Format_Field$O$I$I$StringBuffer($I$(7).EXPONENT_SIGN, $I$(7).EXPONENT_SIGN, fieldStart, result.length$(), result);
}this.digitList.setExp$Z$J(negativeExponent, exponent);
var eFieldStart=result.length$();
for (var i=this.digitList.decimalAt; i < this.minExponentDigits; ++i) {
result.append$C(zero);
}
for (var i=0; i < this.digitList.decimalAt; ++i) {
result.append$C((i < this.digitList.count) ? String.fromCharCode(((this.digitList.digits[i]).$c() + zeroDelta)) : zero);
}
delegate.formatted$java_text_Format_Field$O$I$I$StringBuffer($I$(7).EXPONENT, $I$(7).EXPONENT, eFieldStart, result.length$(), result);
} else {
var iFieldStart=result.length$();
var count=minIntDigits;
var digitIndex=0;
if (this.digitList.decimalAt > 0 && count < this.digitList.decimalAt ) {
count=this.digitList.decimalAt;
}if (count > maxIntDigits) {
count=maxIntDigits;
digitIndex=this.digitList.decimalAt - count;
}var sizeBeforeIntegerPart=result.length$();
for (var i=count - 1; i >= 0; --i) {
if (i < this.digitList.decimalAt && digitIndex < this.digitList.count ) {
result.append$C(String.fromCharCode(((this.digitList.digits[digitIndex++]).$c() + zeroDelta)));
} else {
result.append$C(zero);
}if (this.isGroupingUsed$() && i > 0  && (this.groupingSize != 0)  && (i % this.groupingSize == 0) ) {
var gStart=result.length$();
result.append$C(grouping);
delegate.formatted$java_text_Format_Field$O$I$I$StringBuffer($I$(7).GROUPING_SEPARATOR, $I$(7).GROUPING_SEPARATOR, gStart, result.length$(), result);
}}
var fractionPresent=(minFraDigits > 0) || (!isInteger && digitIndex < this.digitList.count ) ;
if (!fractionPresent && result.length$() == sizeBeforeIntegerPart ) {
result.append$C(zero);
}delegate.formatted$I$java_text_Format_Field$O$I$I$StringBuffer(0, $I$(7).INTEGER, $I$(7).INTEGER, iFieldStart, result.length$(), result);
var sStart=result.length$();
if (this.decimalSeparatorAlwaysShown || fractionPresent ) {
result.append$C(decimal);
}if (sStart != result.length$()) {
delegate.formatted$java_text_Format_Field$O$I$I$StringBuffer($I$(7).DECIMAL_SEPARATOR, $I$(7).DECIMAL_SEPARATOR, sStart, result.length$(), result);
}var fFieldStart=result.length$();
for (var i=0; i < maxFraDigits; ++i) {
if (i >= minFraDigits && (isInteger || digitIndex >= this.digitList.count ) ) {
break;
}if (-1 - i > (this.digitList.decimalAt - 1)) {
result.append$C(zero);
continue;
}if (!isInteger && digitIndex < this.digitList.count ) {
result.append$C(String.fromCharCode(((this.digitList.digits[digitIndex++]).$c() + zeroDelta)));
} else {
result.append$C(zero);
}}
delegate.formatted$I$java_text_Format_Field$O$I$I$StringBuffer(1, $I$(7).FRACTION, $I$(7).FRACTION, fFieldStart, result.length$(), result);
}if (isNegative) {
p$1.append$StringBuffer$S$java_text_Format_FieldDelegate$java_text_FieldPositionA$java_text_Format_Field.apply(this, [result, this.negativeSuffix, delegate, p$1.getNegativeSuffixFieldPositions.apply(this, []), $I$(7).SIGN]);
} else {
p$1.append$StringBuffer$S$java_text_Format_FieldDelegate$java_text_FieldPositionA$java_text_Format_Field.apply(this, [result, this.positiveSuffix, delegate, p$1.getPositiveSuffixFieldPositions.apply(this, []), $I$(7).SIGN]);
}return result;
}, p$1);

Clazz.newMeth(C$, 'append$StringBuffer$S$java_text_Format_FieldDelegate$java_text_FieldPositionA$java_text_Format_Field', function (result, string, delegate, positions, signAttribute) {
var start=result.length$();
if (string.length$() > 0) {
result.append$S(string);
for (var counter=0, max=positions.length; counter < max; counter++) {
var fp=positions[counter];
var attribute=fp.getFieldAttribute$();
if (attribute === $I$(7).SIGN ) {
attribute=signAttribute;
}delegate.formatted$java_text_Format_Field$O$I$I$StringBuffer(attribute, attribute, start + fp.getBeginIndex$(), start + fp.getEndIndex$(), result);
}
}}, p$1);

Clazz.newMeth(C$, 'parse$S$java_text_ParsePosition', function (text, pos) {
if (text.regionMatches$I$S$I$I(pos.index, this.symbols.getNaN$(), 0, this.symbols.getNaN$().length$())) {
pos.index=pos.index + this.symbols.getNaN$().length$();
return  new Double(NaN);
}var status=Clazz.array(Boolean.TYPE, [2]);
if (!p$1.subparse$S$java_text_ParsePosition$S$S$java_text_DigitList$Z$ZA.apply(this, [text, pos, this.positivePrefix, this.negativePrefix, this.digitList, false, status])) {
return null;
}if (status[0]) {
if (status[1] == (this.multiplier >= 0) ) {
return  new Double(Infinity);
} else {
return  new Double(-Infinity);
}}if (this.multiplier == 0) {
if (this.digitList.isZero$()) {
return  new Double(NaN);
} else if (status[1]) {
return  new Double(Infinity);
} else {
return  new Double(-Infinity);
}}var gotDouble=true;
var gotLongMinimum=false;
var doubleResult=0.0;
var longResult=0;
if (this.digitList.fitsIntoLong$Z$Z(status[1], this.isParseIntegerOnly$())) {
gotDouble=false;
longResult=this.digitList.getLong$();
if (longResult < 0) {
gotLongMinimum=true;
}} else {
doubleResult=this.digitList.getDouble$();
}if (this.multiplier != 1) {
if (gotDouble) {
doubleResult /= this.multiplier;
} else {
if (longResult % this.multiplier == 0) {
longResult=(longResult/this.multiplier|0);
} else {
doubleResult=(longResult) / this.multiplier;
gotDouble=true;
}}}if (!status[1] && !gotLongMinimum ) {
doubleResult=-doubleResult;
longResult=-longResult;
}if (this.multiplier != 1 && gotDouble ) {
longResult=(doubleResult|0);
gotDouble=((doubleResult != longResult ) || (doubleResult == 0.0  && 1 / doubleResult < 0.0  ) ) && !this.isParseIntegerOnly$() ;
}return gotDouble ?  new Double(doubleResult) :  new Long(longResult);
});

Clazz.newMeth(C$, 'subparse$S$java_text_ParsePosition$S$S$java_text_DigitList$Z$ZA', function (text, parsePosition, positivePrefix, negativePrefix, digits, isExponent, status) {
var position=parsePosition.index;
var oldStart=parsePosition.index;
var backup;
var gotPositive;
var gotNegative;
gotPositive=text.regionMatches$I$S$I$I(position, positivePrefix, 0, positivePrefix.length$());
gotNegative=text.regionMatches$I$S$I$I(position, negativePrefix, 0, negativePrefix.length$());
if (gotPositive && gotNegative ) {
if (positivePrefix.length$() > negativePrefix.length$()) {
gotNegative=false;
} else if (positivePrefix.length$() < negativePrefix.length$()) {
gotPositive=false;
}}if (gotPositive) {
position+=positivePrefix.length$();
} else if (gotNegative) {
position+=negativePrefix.length$();
} else {
parsePosition.errorIndex=position;
return false;
}status[0]=false;
if (!isExponent && text.regionMatches$I$S$I$I(position, this.symbols.getInfinity$(), 0, this.symbols.getInfinity$().length$()) ) {
position+=this.symbols.getInfinity$().length$();
status[0]=true;
} else {
digits.decimalAt=digits.count=0;
var zero=this.symbols.getZeroDigit$();
var decimal=this.isCurrencyFormat ? this.symbols.getMonetaryDecimalSeparator$() : this.symbols.getDecimalSeparator$();
var grouping=this.symbols.getGroupingSeparator$();
var exponentString=this.symbols.getExponentSeparator$();
var sawDecimal=false;
var sawExponent=false;
var sawDigit=false;
var exponent=0;
var digitCount=0;
backup=-1;
for (; position < text.length$(); ++position) {
var ch=text.charAt$I(position);
var digit=ch.$c() - zero.$c();
if (digit < 0 || digit > 9 ) {
digit=Character.digit$C$I(ch, 10);
}if (digit == 0) {
backup=-1;
sawDigit=true;
if (digits.count == 0) {
if (!sawDecimal) {
continue;
}--digits.decimalAt;
} else {
++digitCount;
digits.append$C(String.fromCharCode((digit + 48)));
}} else if (digit > 0 && digit <= 9 ) {
sawDigit=true;
++digitCount;
digits.append$C(String.fromCharCode((digit + 48)));
backup=-1;
} else if (!isExponent && ch == decimal ) {
if (this.isParseIntegerOnly$() || sawDecimal ) {
break;
}digits.decimalAt=digitCount;
sawDecimal=true;
} else if (!isExponent && ch == grouping  && this.isGroupingUsed$() ) {
if (sawDecimal) {
break;
}backup=position;
} else if (!isExponent && text.regionMatches$I$S$I$I(position, exponentString, 0, exponentString.length$()) && !sawExponent  ) {
var pos=Clazz.new_($I$(10).c$$I,[position + exponentString.length$()]);
var stat=Clazz.array(Boolean.TYPE, [2]);
var exponentDigits=Clazz.new_($I$(3));
if (p$1.subparse$S$java_text_ParsePosition$S$S$java_text_DigitList$Z$ZA.apply(this, [text, pos, "", Character.toString$C(this.symbols.getMinusSign$()), exponentDigits, true, stat]) && exponentDigits.fitsIntoLong$Z$Z(stat[1], true) ) {
position=pos.index;
exponent=(exponentDigits.getLong$()|0);
if (!stat[1]) {
exponent=-exponent;
}sawExponent=true;
}break;
} else {
break;
}}
if (backup != -1) {
position=backup;
}if (!sawDecimal) {
digits.decimalAt=digitCount;
}digits.decimalAt+=exponent;
if (!sawDigit && digitCount == 0 ) {
parsePosition.index=oldStart;
parsePosition.errorIndex=oldStart;
return false;
}}if (!isExponent) {
if (gotPositive) {
gotPositive=text.regionMatches$I$S$I$I(position, this.positiveSuffix, 0, this.positiveSuffix.length$());
}if (gotNegative) {
gotNegative=text.regionMatches$I$S$I$I(position, this.negativeSuffix, 0, this.negativeSuffix.length$());
}if (gotPositive && gotNegative ) {
if (this.positiveSuffix.length$() > this.negativeSuffix.length$()) {
gotNegative=false;
} else if (this.positiveSuffix.length$() < this.negativeSuffix.length$()) {
gotPositive=false;
}}if (gotPositive == gotNegative ) {
parsePosition.errorIndex=position;
return false;
}parsePosition.index=position + (gotPositive ? this.positiveSuffix.length$() : this.negativeSuffix.length$());
} else {
parsePosition.index=position;
}status[1]=gotPositive;
if (parsePosition.index == oldStart) {
parsePosition.errorIndex=position;
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'getDecimalFormatSymbols$', function () {
try {
return this.symbols.clone$();
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
return null;
} else {
throw foo;
}
}
});

Clazz.newMeth(C$, 'setDecimalFormatSymbols$java_text_DecimalFormatSymbols', function (newSymbols) {
try {
this.symbols=newSymbols.clone$();
p$1.expandAffixes.apply(this, []);
} catch (foo) {
if (Clazz.exceptionOf(foo,"Exception")){
} else {
throw foo;
}
}
});

Clazz.newMeth(C$, 'getPositivePrefix$', function () {
return this.positivePrefix;
});

Clazz.newMeth(C$, 'setPositivePrefix$S', function (newValue) {
this.positivePrefix=newValue;
this.posPrefixPattern=null;
this.positivePrefixFieldPositions=null;
});

Clazz.newMeth(C$, 'getPositivePrefixFieldPositions', function () {
if (this.positivePrefixFieldPositions == null ) {
if (this.posPrefixPattern != null ) {
this.positivePrefixFieldPositions=p$1.expandAffix$S.apply(this, [this.posPrefixPattern]);
} else {
this.positivePrefixFieldPositions=C$.EmptyFieldPositionArray;
}}return this.positivePrefixFieldPositions;
}, p$1);

Clazz.newMeth(C$, 'getNegativePrefix$', function () {
return this.negativePrefix;
});

Clazz.newMeth(C$, 'setNegativePrefix$S', function (newValue) {
this.negativePrefix=newValue;
this.negPrefixPattern=null;
});

Clazz.newMeth(C$, 'getNegativePrefixFieldPositions', function () {
if (this.negativePrefixFieldPositions == null ) {
if (this.negPrefixPattern != null ) {
this.negativePrefixFieldPositions=p$1.expandAffix$S.apply(this, [this.negPrefixPattern]);
} else {
this.negativePrefixFieldPositions=C$.EmptyFieldPositionArray;
}}return this.negativePrefixFieldPositions;
}, p$1);

Clazz.newMeth(C$, 'getPositiveSuffix$', function () {
return this.positiveSuffix;
});

Clazz.newMeth(C$, 'setPositiveSuffix$S', function (newValue) {
this.positiveSuffix=newValue;
this.posSuffixPattern=null;
});

Clazz.newMeth(C$, 'getPositiveSuffixFieldPositions', function () {
if (this.positiveSuffixFieldPositions == null ) {
if (this.posSuffixPattern != null ) {
this.positiveSuffixFieldPositions=p$1.expandAffix$S.apply(this, [this.posSuffixPattern]);
} else {
this.positiveSuffixFieldPositions=C$.EmptyFieldPositionArray;
}}return this.positiveSuffixFieldPositions;
}, p$1);

Clazz.newMeth(C$, 'getNegativeSuffix$', function () {
return this.negativeSuffix;
});

Clazz.newMeth(C$, 'setNegativeSuffix$S', function (newValue) {
this.negativeSuffix=newValue;
this.negSuffixPattern=null;
});

Clazz.newMeth(C$, 'getNegativeSuffixFieldPositions', function () {
if (this.negativeSuffixFieldPositions == null ) {
if (this.negSuffixPattern != null ) {
this.negativeSuffixFieldPositions=p$1.expandAffix$S.apply(this, [this.negSuffixPattern]);
} else {
this.negativeSuffixFieldPositions=C$.EmptyFieldPositionArray;
}}return this.negativeSuffixFieldPositions;
}, p$1);

Clazz.newMeth(C$, 'getMultiplier$', function () {
return this.multiplier;
});

Clazz.newMeth(C$, 'setMultiplier$I', function (newValue) {
this.multiplier=newValue;
});

Clazz.newMeth(C$, 'getGroupingSize$', function () {
return this.groupingSize;
});

Clazz.newMeth(C$, 'setGroupingSize$I', function (newValue) {
this.groupingSize=($b$[0] = (newValue|0), $b$[0]);
});

Clazz.newMeth(C$, 'isDecimalSeparatorAlwaysShown$', function () {
return this.decimalSeparatorAlwaysShown;
});

Clazz.newMeth(C$, 'setDecimalSeparatorAlwaysShown$Z', function (newValue) {
this.decimalSeparatorAlwaysShown=newValue;
});

Clazz.newMeth(C$, 'isParseBigDecimal$', function () {
return this.parseBigDecimal;
});

Clazz.newMeth(C$, 'setParseBigDecimal$Z', function (newValue) {
this.parseBigDecimal=newValue;
});

Clazz.newMeth(C$, 'clone$', function () {
try {
var other=C$.superclazz.prototype.clone$.apply(this, []);
other.symbols=this.symbols.clone$();
other.digitList=this.digitList.clone$();
return other;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(11));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null ) return false;
if (!C$.superclazz.prototype.equals$O.apply(this, [obj])) return false;
var other=obj;
return ((this.posPrefixPattern == other.posPrefixPattern && this.positivePrefix.equals$O(other.positivePrefix) ) || (this.posPrefixPattern != null  && this.posPrefixPattern.equals$O(other.posPrefixPattern) ) ) && ((this.posSuffixPattern == other.posSuffixPattern && this.positiveSuffix.equals$O(other.positiveSuffix) ) || (this.posSuffixPattern != null  && this.posSuffixPattern.equals$O(other.posSuffixPattern) ) ) && ((this.negPrefixPattern == other.negPrefixPattern && this.negativePrefix.equals$O(other.negativePrefix) ) || (this.negPrefixPattern != null  && this.negPrefixPattern.equals$O(other.negPrefixPattern) ) ) && ((this.negSuffixPattern == other.negSuffixPattern && this.negativeSuffix.equals$O(other.negativeSuffix) ) || (this.negSuffixPattern != null  && this.negSuffixPattern.equals$O(other.negSuffixPattern) ) ) && this.multiplier == other.multiplier   && this.groupingSize == other.groupingSize  && this.decimalSeparatorAlwaysShown == other.decimalSeparatorAlwaysShown   && this.parseBigDecimal == other.parseBigDecimal   && this.useExponentialNotation == other.useExponentialNotation   && (!this.useExponentialNotation || this.minExponentDigits == other.minExponentDigits )  && this.$maximumIntegerDigits == other.$maximumIntegerDigits  && this.$minimumIntegerDigits == other.$minimumIntegerDigits  && this.$maximumFractionDigits == other.$maximumFractionDigits  && this.$minimumFractionDigits == other.$minimumFractionDigits  && this.roundingMode === other.roundingMode   && this.symbols.equals$O(other.symbols) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return C$.superclazz.prototype.hashCode$.apply(this, []) * 37 + this.positivePrefix.hashCode$();
});

Clazz.newMeth(C$, 'toPattern$', function () {
return p$1.toPattern$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'toLocalizedPattern$', function () {
return p$1.toPattern$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'expandAffixes', function () {
var buffer=Clazz.new_($I$(9));
if (this.posPrefixPattern != null ) {
this.positivePrefix=p$1.expandAffix$S$StringBuffer.apply(this, [this.posPrefixPattern, buffer]);
this.positivePrefixFieldPositions=null;
}if (this.posSuffixPattern != null ) {
this.positiveSuffix=p$1.expandAffix$S$StringBuffer.apply(this, [this.posSuffixPattern, buffer]);
this.positiveSuffixFieldPositions=null;
}if (this.negPrefixPattern != null ) {
this.negativePrefix=p$1.expandAffix$S$StringBuffer.apply(this, [this.negPrefixPattern, buffer]);
this.negativePrefixFieldPositions=null;
}if (this.negSuffixPattern != null ) {
this.negativeSuffix=p$1.expandAffix$S$StringBuffer.apply(this, [this.negSuffixPattern, buffer]);
this.negativeSuffixFieldPositions=null;
}}, p$1);

Clazz.newMeth(C$, 'expandAffix$S$StringBuffer', function (pattern, buffer) {
buffer.setLength$I(0);
for (var i=0; i < pattern.length$(); ) {
var c=pattern.charAt$I(i++);
if (c == "\'") {
c=pattern.charAt$I(i++);
switch (c.$c()) {
case 164:
if (i < pattern.length$() && pattern.charAt$I(i) == "\u00a4" ) {
++i;
buffer.append$S(this.symbols.getInternationalCurrencySymbol$());
} else {
buffer.append$S(this.symbols.getCurrencySymbol$());
}continue;
case 37:
c=this.symbols.getPercent$();
break;
case 8240:
c=this.symbols.getPerMill$();
break;
case 45:
c=this.symbols.getMinusSign$();
break;
}
}buffer.append$C(c);
}
return buffer.toString();
}, p$1);

Clazz.newMeth(C$, 'expandAffix$S', function (pattern) {
var positions=null;
var stringIndex=0;
for (var i=0; i < pattern.length$(); ) {
var c=pattern.charAt$I(i++);
if (c == "\'") {
var field=-1;
var fieldID=null;
c=pattern.charAt$I(i++);
switch (c.$c()) {
case 164:
var string;
if (i < pattern.length$() && pattern.charAt$I(i) == "\u00a4" ) {
++i;
string=this.symbols.getInternationalCurrencySymbol$();
} else {
string=this.symbols.getCurrencySymbol$();
}if (string.length$() > 0) {
if (positions == null ) {
positions=Clazz.new_($I$(12).c$$I,[2]);
}var fp=Clazz.new_($I$(1).c$$java_text_Format_Field,[$I$(7).CURRENCY]);
fp.setBeginIndex$I(stringIndex);
fp.setEndIndex$I(stringIndex + string.length$());
positions.add$TE(fp);
stringIndex+=string.length$();
}continue;
case 37:
c=this.symbols.getPercent$();
field=-1;
fieldID=$I$(7).PERCENT;
break;
case 8240:
c=this.symbols.getPerMill$();
field=-1;
fieldID=$I$(7).PERMILLE;
break;
case 45:
c=this.symbols.getMinusSign$();
field=-1;
fieldID=$I$(7).SIGN;
break;
}
if (fieldID != null ) {
if (positions == null ) {
positions=Clazz.new_($I$(12).c$$I,[2]);
}var fp=Clazz.new_($I$(1).c$$java_text_Format_Field$I,[fieldID, field]);
fp.setBeginIndex$I(stringIndex);
fp.setEndIndex$I(stringIndex + 1);
positions.add$TE(fp);
}}stringIndex++;
}
if (positions != null ) {
return positions.toArray$TTA(C$.EmptyFieldPositionArray);
}return C$.EmptyFieldPositionArray;
}, p$1);

Clazz.newMeth(C$, 'appendAffix$StringBuffer$S$S$Z', function (buffer, affixPattern, expAffix, localized) {
if (affixPattern == null ) {
p$1.appendAffix$StringBuffer$S$Z.apply(this, [buffer, expAffix, localized]);
} else {
var i;
for (var pos=0; pos < affixPattern.length$(); pos=i) {
i=affixPattern.indexOf$I$I("\'", pos);
if (i < 0) {
p$1.appendAffix$StringBuffer$S$Z.apply(this, [buffer, affixPattern.substring$I(pos), localized]);
break;
}if (i > pos) {
p$1.appendAffix$StringBuffer$S$Z.apply(this, [buffer, affixPattern.substring$I$I(pos, i), localized]);
}var c=affixPattern.charAt$I(++i);
++i;
if (c == "\'") {
buffer.append$C(c);
} else if (c == "\u00a4" && i < affixPattern.length$()  && affixPattern.charAt$I(i) == "\u00a4" ) {
++i;
buffer.append$C(c);
} else if (localized) {
switch (c.$c()) {
case 37:
c=this.symbols.getPercent$();
break;
case 8240:
c=this.symbols.getPerMill$();
break;
case 45:
c=this.symbols.getMinusSign$();
break;
}
}buffer.append$C(c);
}
}}, p$1);

Clazz.newMeth(C$, 'appendAffix$StringBuffer$S$Z', function (buffer, affix, localized) {
var needQuote;
if (localized) {
needQuote=affix.indexOf$I(this.symbols.getZeroDigit$()) >= 0 || affix.indexOf$I(this.symbols.getGroupingSeparator$()) >= 0  || affix.indexOf$I(this.symbols.getDecimalSeparator$()) >= 0  || affix.indexOf$I(this.symbols.getPercent$()) >= 0  || affix.indexOf$I(this.symbols.getPerMill$()) >= 0  || affix.indexOf$I(this.symbols.getDigit$()) >= 0  || affix.indexOf$I(this.symbols.getPatternSeparator$()) >= 0  || affix.indexOf$I(this.symbols.getMinusSign$()) >= 0  || affix.indexOf$I("\u00a4") >= 0 ;
} else {
needQuote=affix.indexOf$I("0") >= 0 || affix.indexOf$I(",") >= 0  || affix.indexOf$I(".") >= 0  || affix.indexOf$I("%") >= 0  || affix.indexOf$I("\u2030") >= 0  || affix.indexOf$I("#") >= 0  || affix.indexOf$I(";") >= 0  || affix.indexOf$I("-") >= 0  || affix.indexOf$I("\u00a4") >= 0 ;
}if (needQuote) buffer.append$C("\'");
if (affix.indexOf$I("\'") < 0) buffer.append$S(affix);
 else {
for (var j=0; j < affix.length$(); ++j) {
var c=affix.charAt$I(j);
buffer.append$C(c);
if (c == "\'") buffer.append$C(c);
}
}if (needQuote) buffer.append$C("\'");
}, p$1);

Clazz.newMeth(C$, 'toPattern$Z', function (localized) {
var result=Clazz.new_($I$(9));
for (var j=1; j >= 0; --j) {
if (j == 1) p$1.appendAffix$StringBuffer$S$S$Z.apply(this, [result, this.posPrefixPattern, this.positivePrefix, localized]);
 else p$1.appendAffix$StringBuffer$S$S$Z.apply(this, [result, this.negPrefixPattern, this.negativePrefix, localized]);
var i;
var digitCount=this.useExponentialNotation ? this.getMaximumIntegerDigits$() : Math.max(this.groupingSize, this.getMinimumIntegerDigits$()) + 1;
for (i=digitCount; i > 0; --i) {
if (i != digitCount && this.isGroupingUsed$()  && this.groupingSize != 0  && i % this.groupingSize == 0 ) {
result.append$C(localized ? this.symbols.getGroupingSeparator$() : ",");
}result.append$C(i <= this.getMinimumIntegerDigits$() ? (localized ? this.symbols.getZeroDigit$() : "0") : (localized ? this.symbols.getDigit$() : "#"));
}
if (this.getMaximumFractionDigits$() > 0 || this.decimalSeparatorAlwaysShown ) result.append$C(localized ? this.symbols.getDecimalSeparator$() : ".");
for (i=0; i < this.getMaximumFractionDigits$(); ++i) {
if (i < this.getMinimumFractionDigits$()) {
result.append$C(localized ? this.symbols.getZeroDigit$() : "0");
} else {
result.append$C(localized ? this.symbols.getDigit$() : "#");
}}
if (this.useExponentialNotation) {
result.append$S(localized ? this.symbols.getExponentSeparator$() : "E");
for (i=0; i < this.minExponentDigits; ++i) result.append$C(localized ? this.symbols.getZeroDigit$() : "0");

}if (j == 1) {
p$1.appendAffix$StringBuffer$S$S$Z.apply(this, [result, this.posSuffixPattern, this.positiveSuffix, localized]);
if ((this.negSuffixPattern == this.posSuffixPattern && this.negativeSuffix.equals$O(this.positiveSuffix) ) || (this.negSuffixPattern != null  && this.negSuffixPattern.equals$O(this.posSuffixPattern) ) ) {
if ((this.negPrefixPattern != null  && this.posPrefixPattern != null   && this.negPrefixPattern.equals$O("'-" + this.posPrefixPattern) ) || (this.negPrefixPattern == this.posPrefixPattern && this.negativePrefix.equals$O(this.symbols.getMinusSign$() + this.positivePrefix) ) ) break;
}result.append$C(localized ? this.symbols.getPatternSeparator$() : ";");
} else p$1.appendAffix$StringBuffer$S$S$Z.apply(this, [result, this.negSuffixPattern, this.negativeSuffix, localized]);
}
return result.toString();
}, p$1);

Clazz.newMeth(C$, 'applyPattern$S', function (pattern) {
p$1.applyPattern$S$Z.apply(this, [pattern, false]);
});

Clazz.newMeth(C$, 'applyLocalizedPattern$S', function (pattern) {
p$1.applyPattern$S$Z.apply(this, [pattern, true]);
});

Clazz.newMeth(C$, 'applyPattern$S$Z', function (pattern, localized) {
var zeroDigit="0";
var groupingSeparator=",";
var decimalSeparator=".";
var percent="%";
var perMill="\u2030";
var digit="#";
var separator=";";
var exponent="E";
var minus="-";
if (localized) {
zeroDigit=this.symbols.getZeroDigit$();
groupingSeparator=this.symbols.getGroupingSeparator$();
decimalSeparator=this.symbols.getDecimalSeparator$();
percent=this.symbols.getPercent$();
perMill=this.symbols.getPerMill$();
digit=this.symbols.getDigit$();
separator=this.symbols.getPatternSeparator$();
exponent=this.symbols.getExponentSeparator$();
minus=this.symbols.getMinusSign$();
}var gotNegative=false;
this.decimalSeparatorAlwaysShown=false;
this.isCurrencyFormat=false;
this.useExponentialNotation=false;
var phaseOneLength=0;
var start=0;
for (var j=1; j >= 0 && start < pattern.length$() ; --j) {
var inQuote=false;
var prefix=Clazz.new_($I$(9));
var suffix=Clazz.new_($I$(9));
var decimalPos=-1;
var multiplier=1;
var digitLeftCount=0;
var zeroDigitCount=0;
var digitRightCount=0;
var groupingCount=($b$[0] = -1, $b$[0]);
var phase=0;
var affix=prefix;
for (var pos=start; pos < pattern.length$(); ++pos) {
var ch=pattern.charAt$I(pos);
switch (phase) {
case 0:
case 2:
if (inQuote) {
if (ch == "\'") {
if ((pos + 1) < pattern.length$() && pattern.charAt$I(pos + 1) == "\'" ) {
++pos;
affix.append$S("\'\'");
} else {
inQuote=false;
}continue;
}} else {
if (ch == digit || ch == zeroDigit  || ch == groupingSeparator  || ch == decimalSeparator ) {
phase=1;
--pos;
continue;
} else if (ch == "\u00a4") {
var doubled=(pos + 1) < pattern.length$() && pattern.charAt$I(pos + 1) == "\u00a4" ;
if (doubled) {
++pos;
}this.isCurrencyFormat=true;
affix.append$S(doubled ? "\'\u00a4\u00a4" : "\'\u00a4");
continue;
} else if (ch == "\'") {
if (ch == "\'") {
if ((pos + 1) < pattern.length$() && pattern.charAt$I(pos + 1) == "\'" ) {
++pos;
affix.append$S("\'\'");
} else {
inQuote=true;
}continue;
}} else if (ch == separator) {
if (phase == 0 || j == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unquoted special character '" + ch + "' in pattern \"" + pattern + '"' ]);
}start=pos + 1;
pos=pattern.length$();
continue;
} else if (ch == percent) {
if (multiplier != 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many percent/per mille characters in pattern \"" + pattern + '"' ]);
}multiplier=100;
affix.append$S("\'%");
continue;
} else if (ch == perMill) {
if (multiplier != 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many percent/per mille characters in pattern \"" + pattern + '"' ]);
}multiplier=1000;
affix.append$S("\'\u2030");
continue;
} else if (ch == minus) {
affix.append$S("\'-");
continue;
}}affix.append$C(ch);
break;
case 1:
if (j == 1) {
++phaseOneLength;
} else {
if (--phaseOneLength == 0) {
phase=2;
affix=suffix;
}continue;
}if (ch == digit) {
if (zeroDigitCount > 0) {
++digitRightCount;
} else {
++digitLeftCount;
}if (groupingCount >= 0 && decimalPos < 0 ) {
(($b$[0]=++groupingCount,groupingCount=$b$[0],$b$[0]));
}} else if (ch == zeroDigit) {
if (digitRightCount > 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected '0' in pattern \"" + pattern + '"' ]);
}++zeroDigitCount;
if (groupingCount >= 0 && decimalPos < 0 ) {
(($b$[0]=++groupingCount,groupingCount=$b$[0],$b$[0]));
}} else if (ch == groupingSeparator) {
groupingCount=($b$[0] = 0, $b$[0]);
} else if (ch == decimalSeparator) {
if (decimalPos >= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Multiple decimal separators in pattern \"" + pattern + '"' ]);
}decimalPos=digitLeftCount + zeroDigitCount + digitRightCount ;
} else if (pattern.regionMatches$I$S$I$I(pos, exponent, 0, exponent.length$())) {
if (this.useExponentialNotation) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Multiple exponential symbols in pattern \"" + pattern + '"' ]);
}this.useExponentialNotation=true;
this.minExponentDigits=($b$[0] = 0, $b$[0]);
pos=pos + exponent.length$();
while (pos < pattern.length$() && pattern.charAt$I(pos) == zeroDigit ){
(($b$[0]=++this.minExponentDigits,this.minExponentDigits=$b$[0],$b$[0]));
++phaseOneLength;
++pos;
}
if ((digitLeftCount + zeroDigitCount) < 1 || this.minExponentDigits < 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Malformed exponential pattern \"" + pattern + '"' ]);
}phase=2;
affix=suffix;
--pos;
continue;
} else {
phase=2;
affix=suffix;
--pos;
--phaseOneLength;
continue;
}break;
}
}
if (zeroDigitCount == 0 && digitLeftCount > 0  && decimalPos >= 0 ) {
var n=decimalPos;
if (n == 0) {
++n;
}digitRightCount=digitLeftCount - n;
digitLeftCount=n - 1;
zeroDigitCount=1;
}if ((decimalPos < 0 && digitRightCount > 0 ) || (decimalPos >= 0 && (decimalPos < digitLeftCount || decimalPos > (digitLeftCount + zeroDigitCount) ) ) || groupingCount == 0   || inQuote ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Malformed pattern \"" + pattern + '"' ]);
}if (j == 1) {
this.posPrefixPattern=prefix.toString();
this.posSuffixPattern=suffix.toString();
this.negPrefixPattern=this.posPrefixPattern;
this.negSuffixPattern=this.posSuffixPattern;
var digitTotalCount=digitLeftCount + zeroDigitCount + digitRightCount ;
var effectiveDecimalPos=decimalPos >= 0 ? decimalPos : digitTotalCount;
this.setMinimumIntegerDigits$I(effectiveDecimalPos - digitLeftCount);
this.setMaximumIntegerDigits$I(this.useExponentialNotation ? digitLeftCount + this.getMinimumIntegerDigits$() : 2147483647);
this.setMaximumFractionDigits$I(decimalPos >= 0 ? (digitTotalCount - decimalPos) : 0);
this.setMinimumFractionDigits$I(decimalPos >= 0 ? (digitLeftCount + zeroDigitCount - decimalPos) : 0);
this.setGroupingUsed$Z(groupingCount > 0);
this.groupingSize=($b$[0] = (groupingCount > 0) ? (groupingCount|0) : (0|0), $b$[0]);
this.multiplier=multiplier;
this.setDecimalSeparatorAlwaysShown$Z(decimalPos == 0 || decimalPos == digitTotalCount );
} else {
this.negPrefixPattern=prefix.toString();
this.negSuffixPattern=suffix.toString();
gotNegative=true;
}}
if (pattern.length$() == 0) {
this.posPrefixPattern=this.posSuffixPattern="";
this.setMinimumIntegerDigits$I(0);
this.setMaximumIntegerDigits$I(2147483647);
this.setMinimumFractionDigits$I(0);
this.setMaximumFractionDigits$I(2147483647);
}if (!gotNegative || (this.negPrefixPattern.equals$O(this.posPrefixPattern) && this.negSuffixPattern.equals$O(this.posSuffixPattern) ) ) {
this.negSuffixPattern=this.posSuffixPattern;
this.negPrefixPattern="'-" + this.posPrefixPattern;
}p$1.expandAffixes.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setMaximumIntegerDigits$I', function (newValue) {
this.$maximumIntegerDigits=Math.min(Math.max(0, newValue), 2147483647);
C$.superclazz.prototype.setMaximumIntegerDigits$I.apply(this, [(this.$maximumIntegerDigits > 309) ? 309 : this.$maximumIntegerDigits]);
if (this.$minimumIntegerDigits > this.$maximumIntegerDigits) {
this.$minimumIntegerDigits=this.$maximumIntegerDigits;
C$.superclazz.prototype.setMinimumIntegerDigits$I.apply(this, [(this.$minimumIntegerDigits > 309) ? 309 : this.$minimumIntegerDigits]);
}});

Clazz.newMeth(C$, 'setMinimumIntegerDigits$I', function (newValue) {
this.$minimumIntegerDigits=Math.min(Math.max(0, newValue), 2147483647);
C$.superclazz.prototype.setMinimumIntegerDigits$I.apply(this, [(this.$minimumIntegerDigits > 309) ? 309 : this.$minimumIntegerDigits]);
if (this.$minimumIntegerDigits > this.$maximumIntegerDigits) {
this.$maximumIntegerDigits=this.$minimumIntegerDigits;
C$.superclazz.prototype.setMaximumIntegerDigits$I.apply(this, [(this.$maximumIntegerDigits > 309) ? 309 : this.$maximumIntegerDigits]);
}});

Clazz.newMeth(C$, 'setMaximumFractionDigits$I', function (newValue) {
this.$maximumFractionDigits=Math.min(Math.max(0, newValue), 2147483647);
C$.superclazz.prototype.setMaximumFractionDigits$I.apply(this, [(this.$maximumFractionDigits > 340) ? 340 : this.$maximumFractionDigits]);
if (this.$minimumFractionDigits > this.$maximumFractionDigits) {
this.$minimumFractionDigits=this.$maximumFractionDigits;
C$.superclazz.prototype.setMinimumFractionDigits$I.apply(this, [(this.$minimumFractionDigits > 340) ? 340 : this.$minimumFractionDigits]);
}});

Clazz.newMeth(C$, 'setMinimumFractionDigits$I', function (newValue) {
this.$minimumFractionDigits=Math.min(Math.max(0, newValue), 2147483647);
C$.superclazz.prototype.setMinimumFractionDigits$I.apply(this, [(this.$minimumFractionDigits > 340) ? 340 : this.$minimumFractionDigits]);
if (this.$minimumFractionDigits > this.$maximumFractionDigits) {
this.$maximumFractionDigits=this.$minimumFractionDigits;
C$.superclazz.prototype.setMaximumFractionDigits$I.apply(this, [(this.$maximumFractionDigits > 340) ? 340 : this.$maximumFractionDigits]);
}});

Clazz.newMeth(C$, 'getMaximumIntegerDigits$', function () {
return this.$maximumIntegerDigits;
});

Clazz.newMeth(C$, 'getMinimumIntegerDigits$', function () {
return this.$minimumIntegerDigits;
});

Clazz.newMeth(C$, 'getMaximumFractionDigits$', function () {
return this.$maximumFractionDigits;
});

Clazz.newMeth(C$, 'getMinimumFractionDigits$', function () {
return this.$minimumFractionDigits;
});

Clazz.newMeth(C$, 'getRoundingMode$', function () {
return this.roundingMode;
});

Clazz.newMeth(C$, 'setRoundingMode$java_math_RoundingMode', function (roundingMode) {
if (roundingMode == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.roundingMode=roundingMode;
this.digitList.setRoundingMode$java_math_RoundingMode(roundingMode);
});

Clazz.newMeth(C$, 'adjustForCurrencyDefaultFractionDigits$', function () {
var digits=2;
var oldMinDigits=this.getMinimumFractionDigits$();
if (oldMinDigits == this.getMaximumFractionDigits$()) {
this.setMinimumFractionDigits$I(digits);
this.setMaximumFractionDigits$I(digits);
} else {
this.setMinimumFractionDigits$I(Math.min(digits, oldMinDigits));
this.setMaximumFractionDigits$I(digits);
}});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
