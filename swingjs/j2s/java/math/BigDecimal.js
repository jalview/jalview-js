(function(){var P$=Clazz.newPackage("java.math"),p$1={},I$=[[0,'java.math.BigInteger','StringBuilder','java.math.MathContext','java.math.RoundingMode',['java.math.BigDecimal','.LongOverflow'],['java.math.BigDecimal','.StringBuilderHelper'],'AssertionError','java.util.Arrays','java.math.MutableBigInteger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BigDecimal", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Number', 'Comparable');
C$.INFLATED_BIGINT=null;
C$.myStringBuilder=null;
C$.zeroThroughTen=null;
C$.ZERO_SCALED_BY=null;
C$.ZERO=null;
C$.ONE=null;
C$.TEN=null;
C$.bufd=null;
C$.bufi2=null;
C$.bufb8=null;
C$.double10pow=null;
C$.float10pow=null;
C$.LONG_TEN_POWERS_TABLE=null;
C$.BIG_TEN_POWERS_TABLE=null;
C$.THRESHOLDS_TABLE=null;
C$.BIG_TEN_POWERS_TABLE_INITLEN=0;
C$.BIG_TEN_POWERS_TABLE_MAX=0;
C$.LONGLONG_TEN_POWERS_TABLE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.INFLATED_BIGINT=$I$(1).valueOf$J(-281474976710656);
C$.zeroThroughTen=Clazz.array(C$, -1, [Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ONE, 1, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(2), 2, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(3), 3, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(4), 4, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(5), 5, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(6), 6, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(7), 7, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(8), 8, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(9), 9, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).TEN, 10, 0, 2])]);
C$.ZERO_SCALED_BY=Clazz.array(C$, -1, [C$.zeroThroughTen[0], Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 1, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 2, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 3, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 4, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 5, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 6, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 7, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 8, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 9, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 10, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 11, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 12, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 13, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 14, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 15, 1])]);
C$.ZERO=C$.zeroThroughTen[0];
C$.ONE=C$.zeroThroughTen[1];
C$.TEN=C$.zeroThroughTen[10];
{
var buf8=new ArrayBuffer(8) ||null;
C$.bufd=new Float64Array(buf8) ||null;
C$.bufi2=new Uint32Array(buf8) ||null;
C$.bufb8=new Uint8Array(buf8) ||null;
};
C$.double10pow=Clazz.array(Double.TYPE, -1, [1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10, 1.0E11, 1.0E12, 1.0E13, 1.0E14, 1.0E15, 1.0E16, 1.0E17, 1.0E18, 1.0E19, 1.0E20, 1.0E21, 1.0E22]);
C$.float10pow=Clazz.array(Float.TYPE, -1, [1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
{
C$.LONG_TEN_POWERS_TABLE=1 ? [] :Clazz.array(Long.TYPE, [16]);
C$.BIG_TEN_POWERS_TABLE=Clazz.array($I$(1), [16]);
C$.THRESHOLDS_TABLE=1 ? [] :Clazz.array(Long.TYPE, [16]);
var v=1;
var vm=281474976710656;
var vb=$I$(1).ONE;
for (var i=0; i < 16; i++) {
C$.LONG_TEN_POWERS_TABLE[i]=v;
C$.THRESHOLDS_TABLE[i]=vm;
C$.BIG_TEN_POWERS_TABLE[i]=vb;
v=1 ? v * 10 :0;
vm=1 ? Math.floor(vm / 10) :0;
vb=vb.multiply$java_math_BigInteger($I$(1).TEN);
}
};
C$.BIG_TEN_POWERS_TABLE_INITLEN=C$.BIG_TEN_POWERS_TABLE.length;
C$.BIG_TEN_POWERS_TABLE_MAX=16 * C$.BIG_TEN_POWERS_TABLE_INITLEN;
C$.LONGLONG_TEN_POWERS_TABLE=Clazz.array(Long.TYPE, -2, [Clazz.array(Long.TYPE, -1, [0, 10000000000000000]), Clazz.array(Long.TYPE, -1, [0, 100000000000000000]), Clazz.array(Long.TYPE, -1, [0, 1000000000000000000]), Clazz.array(Long.TYPE, -1, [0, -8446744073709551616]), Clazz.array(Long.TYPE, -1, [5, 7766279631452241920]), Clazz.array(Long.TYPE, -1, [54, 3875820019684212736]), Clazz.array(Long.TYPE, -1, [542, 1864712049423024128]), Clazz.array(Long.TYPE, -1, [5421, 200376420520689664]), Clazz.array(Long.TYPE, -1, [54210, 2003764205206896640]), Clazz.array(Long.TYPE, -1, [542101, 1590897978359414784]), Clazz.array(Long.TYPE, -1, [5421010, -2537764290115403776]), Clazz.array(Long.TYPE, -1, [54210108, -6930898827444486144]), Clazz.array(Long.TYPE, -1, [542101086, 4477988020393345024]), Clazz.array(Long.TYPE, -1, [5421010862, 7886392056514347008]), Clazz.array(Long.TYPE, -1, [54210108624, 5076944270305263616]), Clazz.array(Long.TYPE, -1, [542101086242, -4570789518076018688]), Clazz.array(Long.TYPE, -1, [5421010862427, -8814407033341083648]), Clazz.array(Long.TYPE, -1, [54210108624275, 4089650035136921600]), Clazz.array(Long.TYPE, -1, [542101086242752, 4003012203950112768]), Clazz.array(Long.TYPE, -1, [5421010862427522, 3136633892082024448]), Clazz.array(Long.TYPE, -1, [54210108624275221, -5527149226598858752]), Clazz.array(Long.TYPE, -1, [542101086242752217, 68739955140067328]), Clazz.array(Long.TYPE, -1, [5421010862427522170, 687399551400673280])]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.intVal=null;
this.scale=0;
this.precision=0;
this.stringCache=null;
this.intCompact=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);

this.valueOf = this.toString;
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$J$I$I', function (intVal, val, scale, prec) {
C$.c$.apply(this, []);
this.scale=scale;
this.precision=prec;
this.intCompact=val;
this.intVal=intVal;
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I', function ($in, offset, len) {
C$.c$$CA$I$I$java_math_MathContext.apply(this, [$in, offset, len, $I$(3).UNLIMITED]);
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I$java_math_MathContext', function ($in, offset, len, mc) {
C$.c$.apply(this, []);
if (offset + len > $in.length || offset < 0 ) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Bad offset or len arguments for char[] input."]);
var prec=0;
var scl=0;
var rs=0;
var rb=null;
try {
var isneg=false;
if ($in[offset] == "-") {
isneg=true;
offset++;
len--;
} else if ($in[offset] == "+") {
offset++;
len--;
}var dot=false;
var exp=0;
var c;
var isCompact=(len <= 18);
var idx=0;
if (isCompact) {
for (; len > 0; offset++, len--) {
c=$in[offset];
if ((c == "0")) {
if (prec == 0) prec=1;
 else if (rs != 0) {
rs*=10;
++prec;
}if (dot) ++scl;
} else if ((c >= "1" && c <= "9" )) {
var digit=c.$c() - 48;
if (prec != 1 || rs != 0 ) ++prec;
rs=rs * 10 + digit;
if (dot) ++scl;
} else if (c == ".") {
if (dot) throw Clazz.new_(Clazz.load('NumberFormatException'));
dot=true;
} else if (Character.isDigit$C(c)) {
var digit=Character.digit$C$I(c, 10);
if (digit == 0) {
if (prec == 0) prec=1;
 else if (rs != 0) {
rs*=10;
++prec;
}} else {
if (prec != 1 || rs != 0 ) ++prec;
rs=rs * 10 + digit;
}if (dot) ++scl;
} else if ((c == "e") || (c == "E") ) {
exp=C$.parseExp$CA$I$I($in, offset, len);
if ((exp|0) != exp) throw Clazz.new_(Clazz.load('NumberFormatException'));
break;
} else {
throw Clazz.new_(Clazz.load('NumberFormatException'));
}}
if (prec == 0) throw Clazz.new_(Clazz.load('NumberFormatException'));
if (exp != 0) {
scl=p$1.adjustScale$I$J.apply(this, [scl, exp]);
}rs=isneg ? -rs : rs;
var mcp=mc.precision;
var drop=prec - mcp;
if (mcp > 0 && drop > 0 ) {
while (drop > 0){
scl=C$.checkScaleNonZero$J(scl - drop);
rs=C$.divideAndRound$J$J$I(rs, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(rs);
drop=prec - mcp;
}
}} else {
var coeff=Clazz.array(Character.TYPE, [len]);
for (; len > 0; offset++, len--) {
c=$in[offset];
if ((c >= "0" && c <= "9" ) || Character.isDigit$C(c) ) {
if (c == "0" || Character.digit$C$I(c, 10) == 0 ) {
if (prec == 0) {
coeff[idx]=c;
prec=1;
} else if (idx != 0) {
coeff[idx++]=c;
++prec;
}} else {
if (prec != 1 || idx != 0 ) ++prec;
coeff[idx++]=c;
}if (dot) ++scl;
continue;
}if (c == ".") {
if (dot) throw Clazz.new_(Clazz.load('NumberFormatException'));
dot=true;
continue;
}if ((c != "e") && (c != "E") ) throw Clazz.new_(Clazz.load('NumberFormatException'));
exp=C$.parseExp$CA$I$I($in, offset, len);
if ((exp|0) != exp) throw Clazz.new_(Clazz.load('NumberFormatException'));
break;
}
if (prec == 0) throw Clazz.new_(Clazz.load('NumberFormatException'));
if (exp != 0) {
scl=p$1.adjustScale$I$J.apply(this, [scl, exp]);
}rb=Clazz.new_($I$(1).c$$CA$I$I,[coeff, isneg ? -1 : 1, prec]);
rs=C$.compactValFor$java_math_BigInteger(rb);
var mcp=mc.precision;
if (mcp > 0 && (prec > mcp) ) {
if (rs == -281474976710656) {
var drop=prec - mcp;
while (drop > 0){
scl=C$.checkScaleNonZero$J(scl - drop);
rb=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(rb, drop, mc.roundingMode.oldMode);
rs=C$.compactValFor$java_math_BigInteger(rb);
if (rs != -281474976710656) {
prec=C$.longDigitLength$J(rs);
break;
}prec=C$.bigDigitLength$java_math_BigInteger(rb);
drop=prec - mcp;
}
}if (rs != -281474976710656) {
var drop=prec - mcp;
while (drop > 0){
scl=C$.checkScaleNonZero$J(scl - drop);
rs=C$.divideAndRound$J$J$I(rs, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(rs);
drop=prec - mcp;
}
rb=null;
}}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('NumberFormatException'));
}
} else if (Clazz.exceptionOf(e$$,"NegativeArraySizeException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('NumberFormatException'));
}
} else {
throw e$$;
}
}
this.scale=scl;
this.precision=prec;
this.intCompact=rs;
this.intVal=rb;
}, 1);

Clazz.newMeth(C$, 'adjustScale$I$J', function (scl, exp) {
var adjustedScale=scl - exp;
if (adjustedScale > 2147483647 || adjustedScale < -2147483648 ) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Scale out of range."]);
scl=(adjustedScale|0);
return scl;
}, p$1);

Clazz.newMeth(C$, 'parseExp$CA$I$I', function ($in, offset, len) {
var exp=0;
offset++;
var c=$in[offset];
len--;
var negexp=(c == "-");
if (negexp || c == "+" ) {
offset++;
c=$in[offset];
len--;
}if (len <= 0) throw Clazz.new_(Clazz.load('NumberFormatException'));
while (len > 10 && (c == "0" || (Character.digit$C$I(c, 10) == 0) ) ){
offset++;
c=$in[offset];
len--;
}
if (len > 10) throw Clazz.new_(Clazz.load('NumberFormatException'));
for (; ; len--) {
var v;
if (c >= "0" && c <= "9" ) {
v=c.$c() - 48;
} else {
v=Character.digit$C$I(c, 10);
if (v < 0) throw Clazz.new_(Clazz.load('NumberFormatException'));
}exp=exp * 10 + v;
if (len == 1) break;
offset++;
c=$in[offset];
}
if (negexp) exp=-exp;
return exp;
}, 1);

Clazz.newMeth(C$, 'c$$CA', function ($in) {
C$.c$$CA$I$I.apply(this, [$in, 0, $in.length]);
}, 1);

Clazz.newMeth(C$, 'c$$CA$java_math_MathContext', function ($in, mc) {
C$.c$$CA$I$I$java_math_MathContext.apply(this, [$in, 0, $in.length, mc]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (val) {
C$.c$$CA$I$I.apply(this, [val.toCharArray$(), 0, val.length$()]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_math_MathContext', function (val, mc) {
C$.c$$CA$I$I$java_math_MathContext.apply(this, [val.toCharArray$(), 0, val.length$(), mc]);
}, 1);

Clazz.newMeth(C$, 'c$$D', function (val) {
C$.c$$D$java_math_MathContext.apply(this, [val, $I$(3).UNLIMITED]);
}, 1);

Clazz.newMeth(C$, 'c$$D$java_math_MathContext', function (val, mc) {
C$.c$.apply(this, []);
if (Double.isInfinite$D(val) || Double.isNaN$D(val) ) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Infinite or NaN"]);
var valBits=C$.doubleToInt2$D(val);
var sign=(val < 0  ? -1 : 1);
var exponent=((valBits[1] >> 20) & 2047) - 1075;
var highBits=(exponent == -1075 ? (valBits[1] & (1048575)) << 1 : (valBits[1] & (1048575)) | (1048576));
var significand=$I$(1).longLeftShift$J$I(highBits, 32) + valBits[0];
if (significand == 0) {
this.intVal=$I$(1).ZERO;
this.scale=0;
this.intCompact=0;
this.precision=1;
return;
}while ((significand & 1) == 0){
significand=(1 ? significand / 2 :0);
exponent++;
}
var scale=0;
var intVal=$I$(1).valueOf$J(sign * significand);
intVal.signum=sign;
if (exponent == 0) {
} else {
if (exponent < 0) {
var bn=$I$(1).valueOf$J(5).pow$I(-exponent);
intVal=bn.multiply$java_math_BigInteger(intVal);
scale=-exponent;
} else {
intVal=intVal.multiply$java_math_BigInteger($I$(1).valueOf$J(2).pow$I(exponent));
}}var compactVal=C$.compactValFor$java_math_BigInteger(intVal);
var prec=0;
var mcp=mc.precision;
if (mcp > 0) {
var mode=mc.roundingMode.oldMode;
var drop;
if (compactVal == -281474976710656) {
prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
intVal=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(intVal, drop, mode);
compactVal=C$.compactValFor$java_math_BigInteger(intVal);
if (compactVal != -281474976710656) {
break;
}prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
}
}if (compactVal != -281474976710656) {
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
}
intVal=null;
}}this.intVal=intVal;
this.intCompact=compactVal;
this.scale=scale;
this.precision=prec;
}, 1);

Clazz.newMeth(C$, 'doubleToInt2$D', function (val) {
C$.bufd[0]=val;
return C$.bufi2;
}, 1);

Clazz.newMeth(C$, 'int2ToByte8$I$I', function (high, low) {
C$.bufi2[0]=low;
C$.bufi2[1]=high;
return C$.bufb8;
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger', function (val) {
C$.c$.apply(this, []);
this.scale=0;
this.intVal=val;
this.intCompact=C$.compactValFor$java_math_BigInteger(val);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_MathContext', function (val, mc) {
C$.c$$java_math_BigInteger$I$java_math_MathContext.apply(this, [val, 0, mc]);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$I', function (unscaledVal, scale) {
C$.c$.apply(this, []);
this.intVal=unscaledVal;
this.intCompact=C$.compactValFor$java_math_BigInteger(unscaledVal);
this.scale=scale;
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$I$java_math_MathContext', function (unscaledVal, scale, mc) {
C$.c$.apply(this, []);
var compactVal=C$.compactValFor$java_math_BigInteger(unscaledVal);
var mcp=mc.precision;
var prec=0;
if (mcp > 0) {
var mode=mc.roundingMode.oldMode;
if (compactVal == -281474976710656) {
prec=C$.bigDigitLength$java_math_BigInteger(unscaledVal);
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
unscaledVal=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(unscaledVal, drop, mode);
compactVal=C$.compactValFor$java_math_BigInteger(unscaledVal);
if (compactVal != -281474976710656) {
break;
}prec=C$.bigDigitLength$java_math_BigInteger(unscaledVal);
drop=prec - mcp;
}
}if (compactVal != -281474976710656) {
prec=C$.longDigitLength$J(compactVal);
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mode);
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
}
unscaledVal=null;
}}this.intVal=unscaledVal;
this.intCompact=compactVal;
this.scale=scale;
this.precision=prec;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (val) {
C$.c$.apply(this, []);
this.intCompact=val;
this.scale=0;
this.intVal=null;
}, 1);

Clazz.newMeth(C$, 'c$$I$java_math_MathContext', function (val, mc) {
C$.c$.apply(this, []);
var mcp=mc.precision;
var compactVal=val;
var scale=0;
var prec=0;
if (mcp > 0) {
prec=C$.longDigitLength$J(compactVal);
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
}
}this.intVal=null;
this.intCompact=compactVal;
this.scale=scale;
this.precision=prec;
}, 1);

Clazz.newMeth(C$, 'c$$J', function (val) {
C$.c$.apply(this, []);
this.intCompact=val;
this.intVal=(val == -281474976710656) ? C$.INFLATED_BIGINT : null;
this.scale=0;
}, 1);

Clazz.newMeth(C$, 'c$$J$java_math_MathContext', function (val, mc) {
C$.c$.apply(this, []);
var mcp=mc.precision;
var mode=mc.roundingMode.oldMode;
var prec=0;
var scale=0;
var intVal=(val == -281474976710656) ? C$.INFLATED_BIGINT : null;
if (mcp > 0) {
if (val == -281474976710656) {
prec=19;
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
intVal=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(intVal, drop, mode);
val=C$.compactValFor$java_math_BigInteger(intVal);
if (val != -281474976710656) {
break;
}prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
}
}if (val != -281474976710656) {
prec=C$.longDigitLength$J(val);
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
val=C$.divideAndRound$J$J$I(val, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(val);
drop=prec - mcp;
}
intVal=null;
}}this.intVal=intVal;
this.intCompact=val;
this.scale=scale;
this.precision=prec;
}, 1);

Clazz.newMeth(C$, 'valueOf$J$I', function (unscaledVal, scale) {
if (scale == 0) return C$.valueOf$J(unscaledVal);
 else if (unscaledVal == 0) {
return C$.zeroValueOf$I(scale);
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[unscaledVal == -281474976710656 ? C$.INFLATED_BIGINT : null, unscaledVal, scale, 0]);
}, 1);

Clazz.newMeth(C$, 'valueOf$J', function (val) {
if (val >= 0 && val < C$.zeroThroughTen.length ) return C$.zeroThroughTen[(val|0)];
 else if (val != -281474976710656) return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[null, val, 0, 0]);
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[C$.INFLATED_BIGINT, val, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'valueOf$J$I$I', function (unscaledVal, scale, prec) {
if (scale == 0 && unscaledVal >= 0  && unscaledVal < C$.zeroThroughTen.length ) {
return C$.zeroThroughTen[(unscaledVal|0)];
} else if (unscaledVal == 0) {
return C$.zeroValueOf$I(scale);
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[unscaledVal == -281474976710656 ? C$.INFLATED_BIGINT : null, unscaledVal, scale, prec]);
}, 1);

Clazz.newMeth(C$, 'valueOf$java_math_BigInteger$I$I', function (intVal, scale, prec) {
var val=C$.compactValFor$java_math_BigInteger(intVal);
if (val == 0) {
return C$.zeroValueOf$I(scale);
} else if (scale == 0 && val >= 0  && val < C$.zeroThroughTen.length ) {
return C$.zeroThroughTen[(val|0)];
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[intVal, val, scale, prec]);
}, 1);

Clazz.newMeth(C$, 'zeroValueOf$I', function (scale) {
if (scale >= 0 && scale < C$.ZERO_SCALED_BY.length ) return C$.ZERO_SCALED_BY[scale];
 else return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, scale, 1]);
}, 1);

Clazz.newMeth(C$, 'valueOf$D', function (val) {
return Clazz.new_(C$.c$$S,[Double.toString$D(val)]);
}, 1);

Clazz.newMeth(C$, 'add$java_math_BigDecimal', function (augend) {
if (this.intCompact != -281474976710656) {
if ((augend.intCompact != -281474976710656)) {
return C$.add$J$I$J$I(this.intCompact, this.scale, augend.intCompact, augend.scale);
} else {
return C$.add$J$I$java_math_BigInteger$I(this.intCompact, this.scale, augend.intVal, augend.scale);
}} else {
if ((augend.intCompact != -281474976710656)) {
return C$.add$J$I$java_math_BigInteger$I(augend.intCompact, augend.scale, this.intVal, this.scale);
} else {
return C$.add$java_math_BigInteger$I$java_math_BigInteger$I(this.intVal, this.scale, augend.intVal, augend.scale);
}}});

Clazz.newMeth(C$, 'add$java_math_BigDecimal$java_math_MathContext', function (augend, mc) {
if (mc.precision == 0) return this.add$java_math_BigDecimal(augend);
var lhs=this;
{
var lhsIsZero=lhs.signum$() == 0;
var augendIsZero=augend.signum$() == 0;
if (lhsIsZero || augendIsZero ) {
var preferredScale=Math.max(lhs.scale$(), augend.scale$());
var result;
if (lhsIsZero && augendIsZero ) return C$.zeroValueOf$I(preferredScale);
result=lhsIsZero ? C$.doRound$java_math_BigDecimal$java_math_MathContext(augend, mc) : C$.doRound$java_math_BigDecimal$java_math_MathContext(lhs, mc);
if (result.scale$() == preferredScale) return result;
 else if (result.scale$() > preferredScale) {
return C$.stripZerosToMatchScale$java_math_BigInteger$J$I$I(result.intVal, result.intCompact, result.scale, preferredScale);
} else {
var precisionDiff=mc.precision - result.precision$();
var scaleDiff=preferredScale - result.scale$();
if (precisionDiff >= scaleDiff) return result.setScale$I(preferredScale);
 else return result.setScale$I(result.scale$() + precisionDiff);
}}}var padding=lhs.scale - augend.scale;
if (padding != 0) {
var arg=p$1.preAlign$java_math_BigDecimal$java_math_BigDecimal$J$java_math_MathContext.apply(this, [lhs, augend, padding, mc]);
C$.matchScale$java_math_BigDecimalA(arg);
lhs=arg[0];
augend=arg[1];
}return C$.doRound$java_math_BigInteger$I$java_math_MathContext(p$1.inflated.apply(lhs, []).add$java_math_BigInteger(p$1.inflated.apply(augend, [])), lhs.scale, mc);
});

Clazz.newMeth(C$, 'preAlign$java_math_BigDecimal$java_math_BigDecimal$J$java_math_MathContext', function (lhs, augend, padding, mc) {
Clazz.assert(C$, this, function(){return padding != 0});
var big;
var small;
if (padding < 0) {
big=lhs;
small=augend;
} else {
big=augend;
small=lhs;
}var estResultUlpScale=big.scale - big.precision$() + mc.precision;
var smallHighDigitPos=small.scale - small.precision$() + 1;
if (smallHighDigitPos > big.scale + 2 && smallHighDigitPos > estResultUlpScale + 2 ) {
small=C$.valueOf$J$I(small.signum$(), p$1.checkScale$J.apply(this, [Math.max(big.scale, estResultUlpScale) + 3]));
}var result=Clazz.array(C$, -1, [big, small]);
return result;
}, p$1);

Clazz.newMeth(C$, 'subtract$java_math_BigDecimal', function (subtrahend) {
if (this.intCompact != -281474976710656) {
if ((subtrahend.intCompact != -281474976710656)) {
return C$.add$J$I$J$I(this.intCompact, this.scale, -subtrahend.intCompact, subtrahend.scale);
} else {
return C$.add$J$I$java_math_BigInteger$I(this.intCompact, this.scale, subtrahend.intVal.negate$(), subtrahend.scale);
}} else {
if ((subtrahend.intCompact != -281474976710656)) {
return C$.add$J$I$java_math_BigInteger$I(-subtrahend.intCompact, subtrahend.scale, this.intVal, this.scale);
} else {
return C$.add$java_math_BigInteger$I$java_math_BigInteger$I(this.intVal, this.scale, subtrahend.intVal.negate$(), subtrahend.scale);
}}});

Clazz.newMeth(C$, 'subtract$java_math_BigDecimal$java_math_MathContext', function (subtrahend, mc) {
if (mc.precision == 0) return this.subtract$java_math_BigDecimal(subtrahend);
return this.add$java_math_BigDecimal$java_math_MathContext(subtrahend.negate$(), mc);
});

Clazz.newMeth(C$, 'multiply$java_math_BigDecimal', function (multiplicand) {
var productScale=p$1.checkScale$J.apply(this, [this.scale + multiplicand.scale]);
if (this.intCompact != -281474976710656) {
if ((multiplicand.intCompact != -281474976710656)) {
return C$.multiply$J$J$I(this.intCompact, multiplicand.intCompact, productScale);
} else {
return C$.multiply$J$java_math_BigInteger$I(this.intCompact, multiplicand.intVal, productScale);
}} else {
if ((multiplicand.intCompact != -281474976710656)) {
return C$.multiply$J$java_math_BigInteger$I(multiplicand.intCompact, this.intVal, productScale);
} else {
return C$.multiply$java_math_BigInteger$java_math_BigInteger$I(this.intVal, multiplicand.intVal, productScale);
}}});

Clazz.newMeth(C$, 'multiply$java_math_BigDecimal$java_math_MathContext', function (multiplicand, mc) {
if (mc.precision == 0) return this.multiply$java_math_BigDecimal(multiplicand);
var productScale=p$1.checkScale$J.apply(this, [this.scale + multiplicand.scale]);
if (this.intCompact != -281474976710656) {
if ((multiplicand.intCompact != -281474976710656)) {
return C$.multiplyAndRound$J$J$I$java_math_MathContext(this.intCompact, multiplicand.intCompact, productScale, mc);
} else {
return C$.multiplyAndRound$J$java_math_BigInteger$I$java_math_MathContext(this.intCompact, multiplicand.intVal, productScale, mc);
}} else {
if ((multiplicand.intCompact != -281474976710656)) {
return C$.multiplyAndRound$J$java_math_BigInteger$I$java_math_MathContext(multiplicand.intCompact, this.intVal, productScale, mc);
} else {
return C$.multiplyAndRound$java_math_BigInteger$java_math_BigInteger$I$java_math_MathContext(this.intVal, multiplicand.intVal, productScale, mc);
}}});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal$I$I', function (divisor, scale, roundingMode) {
if (roundingMode < 0 || roundingMode > 7 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid rounding mode"]);
if (this.intCompact != -281474976710656) {
if ((divisor.intCompact != -281474976710656)) {
return C$.divide$J$I$J$I$I$I(this.intCompact, this.scale, divisor.intCompact, divisor.scale, scale, roundingMode);
} else {
return C$.divide$J$I$java_math_BigInteger$I$I$I(this.intCompact, this.scale, divisor.intVal, divisor.scale, scale, roundingMode);
}} else {
if ((divisor.intCompact != -281474976710656)) {
return C$.divide$java_math_BigInteger$I$J$I$I$I(this.intVal, this.scale, divisor.intCompact, divisor.scale, scale, roundingMode);
} else {
return C$.divide$java_math_BigInteger$I$java_math_BigInteger$I$I$I(this.intVal, this.scale, divisor.intVal, divisor.scale, scale, roundingMode);
}}});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal$I$java_math_RoundingMode', function (divisor, scale, roundingMode) {
return this.divide$java_math_BigDecimal$I$I(divisor, scale, roundingMode.oldMode);
});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal$I', function (divisor, roundingMode) {
return this.divide$java_math_BigDecimal$I$I(divisor, this.scale, roundingMode);
});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal$java_math_RoundingMode', function (divisor, roundingMode) {
return this.divide$java_math_BigDecimal$I$I(divisor, this.scale, roundingMode.oldMode);
});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal', function (divisor) {
if (divisor.signum$() == 0) {
if (this.signum$() == 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Division undefined"]);
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Division by zero"]);
}var preferredScale=C$.saturateLong$J(this.scale - divisor.scale);
if (this.signum$() == 0) return C$.zeroValueOf$I(preferredScale);
 else {
var mc=Clazz.new_($I$(3).c$$I$java_math_RoundingMode,[(Math.min(this.precision$() + (Math.ceil(10.0 * divisor.precision$() / 3.0)|0), 2147483647)|0), $I$(4).UNNECESSARY]);
var quotient;
try {
quotient=this.divide$java_math_BigDecimal$java_math_MathContext(divisor, mc);
} catch (e) {
if (Clazz.exceptionOf(e,"ArithmeticException")){
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Non-terminating decimal expansion; no exact representable decimal result."]);
} else {
throw e;
}
}
var quotientScale=quotient.scale$();
if (preferredScale > quotientScale) return quotient.setScale$I$I(preferredScale, 7);
return quotient;
}});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal$java_math_MathContext', function (divisor, mc) {
var mcp=mc.precision;
if (mcp == 0) return this.divide$java_math_BigDecimal(divisor);
var dividend=this;
var preferredScale=dividend.scale - divisor.scale;
if (divisor.signum$() == 0) {
if (dividend.signum$() == 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Division undefined"]);
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Division by zero"]);
}if (dividend.signum$() == 0) return C$.zeroValueOf$I(C$.saturateLong$J(preferredScale));
var xscale=dividend.precision$();
var yscale=divisor.precision$();
if (dividend.intCompact != -281474976710656) {
if (divisor.intCompact != -281474976710656) {
return C$.divide$J$I$J$I$J$java_math_MathContext(dividend.intCompact, xscale, divisor.intCompact, yscale, preferredScale, mc);
} else {
return C$.divide$J$I$java_math_BigInteger$I$J$java_math_MathContext(dividend.intCompact, xscale, divisor.intVal, yscale, preferredScale, mc);
}} else {
if (divisor.intCompact != -281474976710656) {
return C$.divide$java_math_BigInteger$I$J$I$J$java_math_MathContext(dividend.intVal, xscale, divisor.intCompact, yscale, preferredScale, mc);
} else {
return C$.divide$java_math_BigInteger$I$java_math_BigInteger$I$J$java_math_MathContext(dividend.intVal, xscale, divisor.intVal, yscale, preferredScale, mc);
}}});

Clazz.newMeth(C$, 'divideToIntegralValue$java_math_BigDecimal', function (divisor) {
var preferredScale=C$.saturateLong$J(this.scale - divisor.scale);
if (p$1.compareMagnitude$java_math_BigDecimal.apply(this, [divisor]) < 0) {
return C$.zeroValueOf$I(preferredScale);
}if (this.signum$() == 0 && divisor.signum$() != 0 ) return this.setScale$I$I(preferredScale, 7);
var maxDigits=(Math.min(this.precision$() + (Math.ceil(10.0 * divisor.precision$() / 3.0)|0) + Math.abs(this.scale$() - divisor.scale$()) + 2 , 2147483647)|0);
var quotient=this.divide$java_math_BigDecimal$java_math_MathContext(divisor, Clazz.new_($I$(3).c$$I$java_math_RoundingMode,[maxDigits, $I$(4).DOWN]));
if (quotient.scale > 0) {
quotient=quotient.setScale$I$java_math_RoundingMode(0, $I$(4).DOWN);
quotient=C$.stripZerosToMatchScale$java_math_BigInteger$J$I$I(quotient.intVal, quotient.intCompact, quotient.scale, preferredScale);
}if (quotient.scale < preferredScale) {
quotient=quotient.setScale$I$I(preferredScale, 7);
}return quotient;
});

Clazz.newMeth(C$, 'divideToIntegralValue$java_math_BigDecimal$java_math_MathContext', function (divisor, mc) {
if (mc.precision == 0 || (p$1.compareMagnitude$java_math_BigDecimal.apply(this, [divisor]) < 0) ) return this.divideToIntegralValue$java_math_BigDecimal(divisor);
var preferredScale=C$.saturateLong$J(this.scale - divisor.scale);
var result=this.divide$java_math_BigDecimal$java_math_MathContext(divisor, Clazz.new_($I$(3).c$$I$java_math_RoundingMode,[mc.precision, $I$(4).DOWN]));
if (result.scale$() < 0) {
var product=result.multiply$java_math_BigDecimal(divisor);
if (p$1.compareMagnitude$java_math_BigDecimal.apply(this.subtract$java_math_BigDecimal(product), [divisor]) >= 0) {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Division impossible"]);
}} else if (result.scale$() > 0) {
result=result.setScale$I$java_math_RoundingMode(0, $I$(4).DOWN);
}var precisionDiff;
if ((preferredScale > result.scale$()) && (precisionDiff=mc.precision - result.precision$()) > 0 ) {
return result.setScale$I(result.scale$() + Math.min(precisionDiff, preferredScale - result.scale));
} else {
return C$.stripZerosToMatchScale$java_math_BigInteger$J$I$I(result.intVal, result.intCompact, result.scale, preferredScale);
}});

Clazz.newMeth(C$, 'remainder$java_math_BigDecimal', function (divisor) {
var divrem=this.divideAndRemainder$java_math_BigDecimal(divisor);
return divrem[1];
});

Clazz.newMeth(C$, 'remainder$java_math_BigDecimal$java_math_MathContext', function (divisor, mc) {
var divrem=this.divideAndRemainder$java_math_BigDecimal$java_math_MathContext(divisor, mc);
return divrem[1];
});

Clazz.newMeth(C$, 'divideAndRemainder$java_math_BigDecimal', function (divisor) {
var result=Clazz.array(C$, [2]);
result[0]=this.divideToIntegralValue$java_math_BigDecimal(divisor);
result[1]=this.subtract$java_math_BigDecimal(result[0].multiply$java_math_BigDecimal(divisor));
return result;
});

Clazz.newMeth(C$, 'divideAndRemainder$java_math_BigDecimal$java_math_MathContext', function (divisor, mc) {
if (mc.precision == 0) return this.divideAndRemainder$java_math_BigDecimal(divisor);
var result=Clazz.array(C$, [2]);
var lhs=this;
result[0]=lhs.divideToIntegralValue$java_math_BigDecimal$java_math_MathContext(divisor, mc);
result[1]=lhs.subtract$java_math_BigDecimal(result[0].multiply$java_math_BigDecimal(divisor));
return result;
});

Clazz.newMeth(C$, 'pow$I', function (n) {
if (n < 0 || n > 999999999 ) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Invalid operation"]);
var newScale=p$1.checkScale$J.apply(this, [this.scale * n]);
return Clazz.new_(C$.c$$java_math_BigInteger$I,[p$1.inflated.apply(this, []).pow$I(n), newScale]);
});

Clazz.newMeth(C$, 'pow$I$java_math_MathContext', function (n, mc) {
if (mc.precision == 0) return this.pow$I(n);
if (n < -999999999 || n > 999999999 ) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Invalid operation"]);
if (n == 0) return C$.ONE;
var lhs=this;
var workmc=mc;
var mag=Math.abs(n);
if (mc.precision > 0) {
var elength=C$.longDigitLength$J(mag);
if (elength > mc.precision) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Invalid operation"]);
workmc=Clazz.new_($I$(3).c$$I$java_math_RoundingMode,[mc.precision + elength + 1 , mc.roundingMode]);
}var acc=C$.ONE;
var seenbit=false;
for (var i=1; ; i++) {
mag+=mag;
if (mag < 0) {
seenbit=true;
acc=acc.multiply$java_math_BigDecimal$java_math_MathContext(lhs, workmc);
}if (i == 31) break;
if (seenbit) acc=acc.multiply$java_math_BigDecimal$java_math_MathContext(acc, workmc);
}
if (n < 0) acc=C$.ONE.divide$java_math_BigDecimal$java_math_MathContext(acc, workmc);
return C$.doRound$java_math_BigDecimal$java_math_MathContext(acc, mc);
});

Clazz.newMeth(C$, 'abs$', function () {
return (this.signum$() < 0 ? this.negate$() : this);
});

Clazz.newMeth(C$, 'abs$java_math_MathContext', function (mc) {
return (this.signum$() < 0 ? this.negate$java_math_MathContext(mc) : this.plus$java_math_MathContext(mc));
});

Clazz.newMeth(C$, 'negate$', function () {
if (this.intCompact == -281474976710656) {
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[this.intVal.negate$(), -281474976710656, this.scale, this.precision]);
} else {
return C$.valueOf$J$I$I(-this.intCompact, this.scale, this.precision);
}});

Clazz.newMeth(C$, 'negate$java_math_MathContext', function (mc) {
return this.negate$().plus$java_math_MathContext(mc);
});

Clazz.newMeth(C$, 'plus$', function () {
return this;
});

Clazz.newMeth(C$, 'plus$java_math_MathContext', function (mc) {
if (mc.precision == 0) return this;
return C$.doRound$java_math_BigDecimal$java_math_MathContext(this, mc);
});

Clazz.newMeth(C$, 'signum$', function () {
return (this.intCompact != -281474976710656) ? Long.signum$J(this.intCompact) : this.intVal.signum$();
});

Clazz.newMeth(C$, 'scale$', function () {
return this.scale;
});

Clazz.newMeth(C$, 'precision$', function () {
var result=this.precision;
if (result == 0) {
var s=this.intCompact;
if (s != -281474976710656) result=C$.longDigitLength$J(s);
 else result=C$.bigDigitLength$java_math_BigInteger(this.intVal);
this.precision=result;
}return result;
});

Clazz.newMeth(C$, 'unscaledValue$', function () {
return p$1.inflated.apply(this, []);
});

Clazz.newMeth(C$, 'round$java_math_MathContext', function (mc) {
return this.plus$java_math_MathContext(mc);
});

Clazz.newMeth(C$, 'setScale$I$java_math_RoundingMode', function (newScale, roundingMode) {
return this.setScale$I$I(newScale, roundingMode.oldMode);
});

Clazz.newMeth(C$, 'setScale$I$I', function (newScale, roundingMode) {
if (roundingMode < 0 || roundingMode > 7 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid rounding mode"]);
var oldScale=this.scale;
if (newScale == oldScale) return this;
if (this.signum$() == 0) return C$.zeroValueOf$I(newScale);
if (this.intCompact != -281474976710656) {
var rs=this.intCompact;
if (newScale > oldScale) {
var raise=p$1.checkScale$J.apply(this, [newScale - oldScale]);
if ((rs=C$.longMultiplyPowerTen$J$I(rs, raise)) != -281474976710656) {
return C$.valueOf$J$I(rs, newScale);
}var rb=p$1.bigMultiplyPowerTen$I.apply(this, [raise]);
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[rb, -281474976710656, newScale, (this.precision > 0) ? this.precision + raise : 0]);
} else {
var drop=p$1.checkScale$J.apply(this, [oldScale - newScale]);
if (drop < C$.LONG_TEN_POWERS_TABLE.length) {
return C$.divideAndRound$J$J$I$I$I(rs, C$.LONG_TEN_POWERS_TABLE[drop], newScale, roundingMode, newScale);
} else {
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(p$1.inflated.apply(this, []), C$.bigTenToThe$I(drop), newScale, roundingMode, newScale);
}}} else {
if (newScale > oldScale) {
var raise=p$1.checkScale$J.apply(this, [newScale - oldScale]);
var rb=C$.bigMultiplyPowerTen$java_math_BigInteger$I(this.intVal, raise);
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[rb, -281474976710656, newScale, (this.precision > 0) ? this.precision + raise : 0]);
} else {
var drop=p$1.checkScale$J.apply(this, [oldScale - newScale]);
if (drop < C$.LONG_TEN_POWERS_TABLE.length) return C$.divideAndRound$java_math_BigInteger$J$I$I$I(this.intVal, C$.LONG_TEN_POWERS_TABLE[drop], newScale, roundingMode, newScale);
 else return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(this.intVal, C$.bigTenToThe$I(drop), newScale, roundingMode, newScale);
}}});

Clazz.newMeth(C$, 'setScale$I', function (newScale) {
return this.setScale$I$I(newScale, 7);
});

Clazz.newMeth(C$, 'movePointLeft$I', function (n) {
var newScale=p$1.checkScale$J.apply(this, [this.scale + n]);
var num=Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[this.intVal, this.intCompact, newScale, 0]);
return num.scale < 0 ? num.setScale$I$I(0, 7) : num;
});

Clazz.newMeth(C$, 'movePointRight$I', function (n) {
var newScale=p$1.checkScale$J.apply(this, [this.scale - n]);
var num=Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[this.intVal, this.intCompact, newScale, 0]);
return num.scale < 0 ? num.setScale$I$I(0, 7) : num;
});

Clazz.newMeth(C$, 'scaleByPowerOfTen$I', function (n) {
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[this.intVal, this.intCompact, p$1.checkScale$J.apply(this, [this.scale - n]), this.precision]);
});

Clazz.newMeth(C$, 'stripTrailingZeros$', function () {
if (this.intCompact == 0 || (this.intVal != null  && this.intVal.signum$() == 0 ) ) {
return C$.ZERO;
} else if (this.intCompact != -281474976710656) {
return C$.createAndStripZerosToMatchScale$J$I$J(this.intCompact, this.scale, -281474976710656);
} else {
return C$.createAndStripZerosToMatchScale$java_math_BigInteger$I$J(this.intVal, this.scale, -281474976710656);
}});

Clazz.newMeth(C$, ['compareTo$java_math_BigDecimal','compareTo$','compareTo$TT'], function (val) {
if (this.scale == val.scale) {
var xs=this.intCompact;
var ys=val.intCompact;
if (xs != -281474976710656 && ys != -281474976710656 ) return xs != ys ? ((xs > ys) ? 1 : -1) : 0;
}var xsign=this.signum$();
var ysign=val.signum$();
if (xsign != ysign) return (xsign > ysign) ? 1 : -1;
if (xsign == 0) return 0;
var cmp=p$1.compareMagnitude$java_math_BigDecimal.apply(this, [val]);
return (xsign > 0) ? cmp : -cmp;
});

Clazz.newMeth(C$, 'compareMagnitude$java_math_BigDecimal', function (val) {
var ys=val.intCompact;
var xs=this.intCompact;
if (xs == 0) return (ys == 0) ? 0 : -1;
if (ys == 0) return 1;
var sdiff=this.scale - val.scale;
if (sdiff != 0) {
var xae=this.precision$() - this.scale;
var yae=val.precision$() - val.scale;
if (xae < yae) return -1;
if (xae > yae) return 1;
var rb=null;
if (sdiff < 0) {
if (sdiff > -2147483648 && (xs == -281474976710656 || (xs=C$.longMultiplyPowerTen$J$I(xs, (-sdiff|0))) == -281474976710656 )  && ys == -281474976710656 ) {
rb=p$1.bigMultiplyPowerTen$I.apply(this, [(-sdiff|0)]);
return rb.compareMagnitude$java_math_BigInteger(val.intVal);
}} else {
if (sdiff <= 2147483647 && (ys == -281474976710656 || (ys=C$.longMultiplyPowerTen$J$I(ys, (sdiff|0))) == -281474976710656 )  && xs == -281474976710656 ) {
rb=p$1.bigMultiplyPowerTen$I.apply(val, [(sdiff|0)]);
return this.intVal.compareMagnitude$java_math_BigInteger(rb);
}}}if (xs != -281474976710656) return (ys != -281474976710656) ? C$.longCompareMagnitude$J$J(xs, ys) : -1;
 else if (ys != -281474976710656) return 1;
 else return this.intVal.compareMagnitude$java_math_BigInteger(val.intVal);
}, p$1);

Clazz.newMeth(C$, 'equals$O', function (x) {
if (!(Clazz.instanceOf(x, "java.math.BigDecimal"))) return false;
var xDec=x;
if (x === this ) return true;
if (this.scale != xDec.scale) return false;
var s=this.intCompact;
var xs=xDec.intCompact;
if (s != -281474976710656) {
if (xs == -281474976710656) xs=C$.compactValFor$java_math_BigInteger(xDec.intVal);
return xs == s;
} else if (xs != -281474976710656) return xs == C$.compactValFor$java_math_BigInteger(this.intVal);
return p$1.inflated.apply(this, []).equals$O(p$1.inflated.apply(xDec, []));
});

Clazz.newMeth(C$, 'min$java_math_BigDecimal', function (val) {
return (this.compareTo$java_math_BigDecimal(val) <= 0 ? this : val);
});

Clazz.newMeth(C$, 'max$java_math_BigDecimal', function (val) {
return (this.compareTo$java_math_BigDecimal(val) >= 0 ? this : val);
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.intCompact != -281474976710656) {
var val2=(this.intCompact < 0) ? -this.intCompact : this.intCompact;
var temp=(($I$(1).getHighBits$J(val2)) * 31 + $I$(1).getLowBits$J(val2));
return 31 * ((this.intCompact < 0) ? -temp : temp) + this.scale;
} else return 31 * this.intVal.hashCode$() + this.scale;
});

Clazz.newMeth(C$, 'toString', function () {
var sc=this.stringCache;
if (sc == null ) this.stringCache=sc=p$1.layoutChars$Z.apply(this, [true]);
return sc;
});

Clazz.newMeth(C$, 'toEngineeringString$', function () {
return p$1.layoutChars$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'toPlainString$', function () {
if (this.scale == 0) {
if (this.intCompact != -281474976710656) {
return Long.toString$J(this.intCompact);
} else {
return this.intVal.toString();
}}if (this.scale < 0) {
if (this.signum$() == 0) {
return "0";
}var tailingZeros=C$.checkScaleNonZero$J((-this.scale));
var buf;
if (this.intCompact != -281474976710656) {
buf=Clazz.new_($I$(2).c$$I,[20 + tailingZeros]);
buf.append$J(this.intCompact);
} else {
var str=this.intVal.toString();
buf=Clazz.new_($I$(2).c$$I,[str.length$() + tailingZeros]);
buf.append$S(str);
}for (var i=0; i < tailingZeros; i++) buf.append$C("0");

return buf.toString();
}var str;
if (this.intCompact != -281474976710656) {
str=Long.toString$J(Math.abs(this.intCompact));
} else {
str=this.intVal.abs$().toString();
}return p$1.getValueString$I$S$I.apply(this, [this.signum$(), str, this.scale]);
});

Clazz.newMeth(C$, 'getValueString$I$S$I', function (signum, intString, scale) {
var buf;
var insertionPoint=intString.length$() - scale;
if (insertionPoint == 0) {
return (signum < 0 ? "-0." : "0.") + intString;
} else if (insertionPoint > 0) {
buf=Clazz.new_($I$(2).c$$S,[intString]);
buf.insert$I$C(insertionPoint, ".");
if (signum < 0) buf.insert$I$C(0, "-");
} else {
buf=Clazz.new_($I$(2).c$$I,[3 - insertionPoint + intString.length$()]);
buf.append$S(signum < 0 ? "-0." : "0.");
for (var i=0; i < -insertionPoint; i++) buf.append$C("0");

buf.append$S(intString);
}return buf.toString();
}, p$1);

Clazz.newMeth(C$, 'toBigInteger$', function () {
return p$1.inflated.apply(this.setScale$I$I(0, 1), []);
});

Clazz.newMeth(C$, 'toBigIntegerExact$', function () {
return p$1.inflated.apply(this.setScale$I$I(0, 7), []);
});

Clazz.newMeth(C$, 'longValue$', function () {
return (this.intCompact != -281474976710656 && this.scale == 0 ) ? this.intCompact : this.toBigInteger$().longValue$();
});

Clazz.newMeth(C$, 'longValueExact$', function () {
if (this.intCompact != -281474976710656 && this.scale == 0 ) return this.intCompact;
if ((this.precision$() - this.scale) > 19) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Overflow"]);
if (this.signum$() == 0) return 0;
if ((this.precision$() - this.scale) <= 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Rounding necessary"]);
var num=this.setScale$I$I(0, 7);
if (num.precision$() >= 19) $I$(5).check$java_math_BigDecimal(num);
return p$1.inflated.apply(num, []).longValue$();
});

Clazz.newMeth(C$, 'intValue$', function () {
return (this.intCompact != -281474976710656 && this.scale == 0 ) ? (this.intCompact|0) : this.toBigInteger$().intValue$();
});

Clazz.newMeth(C$, 'intValueExact$', function () {
var num;
num=this.longValueExact$();
if ((num|0) != num) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Overflow"]);
return (num|0);
});

Clazz.newMeth(C$, 'shortValueExact$', function () {
var num;
num=this.longValueExact$();
if (($s$[0] = num, $s$[0]) != num) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Overflow"]);
return ($s$[0] = num, $s$[0]);
});

Clazz.newMeth(C$, 'byteValueExact$', function () {
var num;
num=this.longValueExact$();
if (($b$[0] = num, $b$[0]) != num) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Overflow"]);
return $b$[0] = (num|0), $b$[0];
});

Clazz.newMeth(C$, 'floatValue$', function () {
if (this.intCompact != -281474976710656) {
if (this.scale == 0) {
return this.intCompact;
} else {
if (Math.abs(this.intCompact) < 4194304) {
if (this.scale > 0 && this.scale < C$.float10pow.length ) {
return this.intCompact / C$.float10pow[this.scale];
} else if (this.scale < 0 && this.scale > -C$.float10pow.length ) {
return this.intCompact * C$.float10pow[-this.scale];
}}}}return Float.parseFloat$S(this.toString());
});

Clazz.newMeth(C$, 'doubleValue$', function () {
if (this.intCompact != -281474976710656) {
if (this.scale == 0) {
return this.intCompact;
} else {
if (Math.abs(this.intCompact) < 4503599627370496) {
if (this.scale > 0 && this.scale < C$.double10pow.length ) {
return this.intCompact / C$.double10pow[this.scale];
} else if (this.scale < 0 && this.scale > -C$.double10pow.length ) {
return this.intCompact * C$.double10pow[-this.scale];
}}}}return Double.parseDouble$S(this.toString());
});

Clazz.newMeth(C$, 'ulp$', function () {
return C$.valueOf$J$I$I(1, this.scale$(), 1);
});

Clazz.newMeth(C$, 'layoutChars$Z', function (sci) {
if (this.scale == 0) return (this.intCompact != -281474976710656) ? Long.toString$J(this.intCompact) : this.intVal.toString();
if (this.scale == 2 && this.intCompact >= 0  && this.intCompact < 2147483647 ) {
var lowInt=(this.intCompact|0) % 100;
var highInt=((this.intCompact|0)/100|0);
return (Integer.toString$I(highInt) + '.' + $I$(6).DIGIT_TENS[lowInt] + $I$(6).DIGIT_ONES[lowInt] );
}var sbHelper=Clazz.new_($I$(6));
var coeff;
var offset;
if (this.intCompact != -281474976710656) {
offset=sbHelper.putIntCompact$J(Math.abs(this.intCompact));
coeff=sbHelper.getCompactCharArray$();
} else {
offset=0;
coeff=this.intVal.abs$().toString().toCharArray$();
}var buf=sbHelper.getStringBuilder$();
if (this.signum$() < 0) buf.append$C("-");
var coeffLen=coeff.length - offset;
var adjusted=-this.scale + (coeffLen - 1);
if ((this.scale >= 0) && (adjusted >= -6) ) {
var pad=this.scale - coeffLen;
if (pad >= 0) {
buf.append$C("0");
buf.append$C(".");
for (; pad > 0; pad--) {
buf.append$C("0");
}
buf.append$CA$I$I(coeff, offset, coeffLen);
} else {
buf.append$CA$I$I(coeff, offset, -pad);
buf.append$C(".");
buf.append$CA$I$I(coeff, -pad + offset, this.scale);
}} else {
if (sci) {
buf.append$C(coeff[offset]);
if (coeffLen > 1) {
buf.append$C(".");
buf.append$CA$I$I(coeff, offset + 1, coeffLen - 1);
}} else {
var sig=((adjusted % 3)|0);
if (sig < 0) sig+=3;
adjusted-=sig;
sig++;
if (this.signum$() == 0) {
switch (sig) {
case 1:
buf.append$C("0");
break;
case 2:
buf.append$S("0.00");
adjusted+=3;
break;
case 3:
buf.append$S("0.0");
adjusted+=3;
break;
default:
throw Clazz.new_($I$(7).c$$O,["Unexpected sig value " + sig]);
}
} else if (sig >= coeffLen) {
buf.append$CA$I$I(coeff, offset, coeffLen);
for (var i=sig - coeffLen; i > 0; i--) buf.append$C("0");

} else {
buf.append$CA$I$I(coeff, offset, sig);
buf.append$C(".");
buf.append$CA$I$I(coeff, offset + sig, coeffLen - sig);
}}if (adjusted != 0) {
buf.append$C("E");
if (adjusted > 0) buf.append$C("+");
buf.append$J(adjusted);
}}return buf.toString();
}, p$1);

Clazz.newMeth(C$, 'bigTenToThe$I', function (n) {
if (n < 0) return $I$(1).ZERO;
if (n < C$.BIG_TEN_POWERS_TABLE_MAX) {
var pows=C$.BIG_TEN_POWERS_TABLE;
if (n < pows.length) return pows[n];
 else return C$.expandBigIntegerTenPowers$I(n);
}return $I$(1).TEN.pow$I(n);
}, 1);

Clazz.newMeth(C$, 'expandBigIntegerTenPowers$I', function (n) {
{
var pows=C$.BIG_TEN_POWERS_TABLE;
var curLen=pows.length;
if (curLen <= n) {
var newLen=curLen << 1;
while (newLen <= n)newLen<<=1;

pows=$I$(8).copyOf$TTA$I(pows, newLen);
for (var i=curLen; i < newLen; i++) pows[i]=pows[i - 1].multiply$java_math_BigInteger($I$(1).TEN);

C$.BIG_TEN_POWERS_TABLE=pows;
}return pows[n];
}}, 1);

Clazz.newMeth(C$, 'precision$J$J', function (hi, lo) {
if (hi == 0) {
if (lo >= 0) {
return C$.longDigitLength$J(lo);
}return (C$.unsignedLongCompareEq$J$D(lo, C$.LONGLONG_TEN_POWERS_TABLE[0][1])) ? 17 : 16;
}var r=($I$(1).longRightShift$J$I((128 - $I$(1).longNumberOfLeadingZeros$J(hi) + 1) * 1233, 12)|0);
var idx=r - 16;
return (idx >= C$.LONGLONG_TEN_POWERS_TABLE.length || C$.longLongCompareMagnitude$J$J$D$D(hi, lo, C$.LONGLONG_TEN_POWERS_TABLE[idx][0], C$.LONGLONG_TEN_POWERS_TABLE[idx][1]) ) ? r : r + 1;
}, 1);

Clazz.newMeth(C$, 'longMultiplyPowerTen$J$I', function (val, n) {
if (val == 0 || n <= 0 ) return val;
var tab=C$.LONG_TEN_POWERS_TABLE;
var bounds=C$.THRESHOLDS_TABLE;
if (n < tab.length && n < bounds.length ) {
var tenpower=tab[n];
if (val == 1) return tenpower;
if (Math.abs(val) <= bounds[n]) return val * tenpower;
}return -281474976710656;
}, 1);

Clazz.newMeth(C$, 'bigMultiplyPowerTen$I', function (n) {
if (n <= 0) return p$1.inflated.apply(this, []);
if (this.intCompact != -281474976710656) return C$.bigTenToThe$I(n).multiply$J(this.intCompact);
 else return this.intVal.multiply$java_math_BigInteger(C$.bigTenToThe$I(n));
}, p$1);

Clazz.newMeth(C$, 'inflated', function () {
if (this.intVal == null ) {
return $I$(1).valueOf$J(this.intCompact);
}return this.intVal;
}, p$1);

Clazz.newMeth(C$, 'matchScale$java_math_BigDecimalA', function (val) {
if (val[0].scale == val[1].scale) {
return;
} else if (val[0].scale < val[1].scale) {
val[0]=val[0].setScale$I$I(val[1].scale, 7);
} else if (val[1].scale < val[0].scale) {
val[1]=val[1].setScale$I$I(val[0].scale, 7);
}}, 1);

Clazz.newMeth(C$, 'longDigitLength$J', function (x) {
Clazz.assert(C$, this, function(){return x != -281474976710656});
if (x < 0) x=-x;
if (x < 10) return 1;
var r=((64 - $I$(1).longNumberOfLeadingZeros$J(x) + 1) * 1233) >>> 12;
var tab=C$.LONG_TEN_POWERS_TABLE;
return (r >= tab.length || x < tab[r] ) ? r : r + 1;
}, 1);

Clazz.newMeth(C$, 'bigDigitLength$java_math_BigInteger', function (b) {
if (b.signum == 0) return 1;
var r=($I$(1).longRightShift$J$I(((b.bitLength$() + 1) * 646456993), 31)|0);
return b.compareMagnitude$java_math_BigInteger(C$.bigTenToThe$I(r)) < 0 ? r : r + 1;
}, 1);

Clazz.newMeth(C$, 'checkScale$J', function (val) {
var asInt=(val|0);
if (asInt != val) {
asInt=val > 2147483647 ? 2147483647 : -2147483648;
var b;
if (this.intCompact != 0 && ((b=this.intVal) == null  || b.signum$() != 0 ) ) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,[asInt > 0 ? "Underflow" : "Overflow"]);
}return asInt;
}, p$1);

Clazz.newMeth(C$, 'compactValFor$java_math_BigInteger', function (b) {
if (b.isOneInt$()) return b.intValue$();
var m=b.mag;
var len=m.length;
if (len == 0) return 0;
var d=m[0];
if (len > 2) return -281474976710656;
return b.longValue$();
}, 1);

Clazz.newMeth(C$, 'longCompareMagnitude$J$J', function (x, y) {
if (x < 0) x=-x;
if (y < 0) y=-y;
return (x < y) ? -1 : ((x == y) ? 0 : 1);
}, 1);

Clazz.newMeth(C$, 'saturateLong$J', function (s) {
var i=(s|0);
return (s == i) ? i : (s < 0 ? -2147483648 : 2147483647);
}, 1);

Clazz.newMeth(C$, 'checkScaleNonZero$J', function (val) {
var asInt=(val|0);
if (asInt != val) {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,[asInt > 0 ? "Underflow" : "Overflow"]);
}return asInt;
}, 1);

Clazz.newMeth(C$, 'checkScale$J$J', function (intCompact, val) {
var asInt=(val|0);
if (asInt != val) {
asInt=val > 2147483647 ? 2147483647 : -2147483648;
if (intCompact != 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,[asInt > 0 ? "Underflow" : "Overflow"]);
}return asInt;
}, 1);

Clazz.newMeth(C$, 'checkScale$java_math_BigInteger$J', function (intVal, val) {
var asInt=(val|0);
if (asInt != val) {
asInt=val > 2147483647 ? 2147483647 : -2147483648;
if (intVal.signum$() != 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,[asInt > 0 ? "Underflow" : "Overflow"]);
}return asInt;
}, 1);

Clazz.newMeth(C$, 'doRound$java_math_BigDecimal$java_math_MathContext', function (val, mc) {
var mcp=mc.precision;
var wasDivided=false;
if (mcp > 0) {
var intVal=val.intVal;
var compactVal=val.intCompact;
var scale=val.scale;
var prec=val.precision$();
var mode=mc.roundingMode.oldMode;
var drop;
if (compactVal == -281474976710656) {
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
intVal=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(intVal, drop, mode);
wasDivided=true;
compactVal=C$.compactValFor$java_math_BigInteger(intVal);
if (compactVal != -281474976710656) {
prec=C$.longDigitLength$J(compactVal);
break;
}prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
}
}if (compactVal != -281474976710656) {
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
wasDivided=true;
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
intVal=null;
}
}return wasDivided ? Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[intVal, compactVal, scale, prec]) : val;
}return val;
}, 1);

Clazz.newMeth(C$, 'doRound$J$I$java_math_MathContext', function (compactVal, scale, mc) {
var mcp=mc.precision;
if (mcp > 0 && mcp < 19 ) {
var prec=C$.longDigitLength$J(compactVal);
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
}
return C$.valueOf$J$I$I(compactVal, scale, prec);
}return C$.valueOf$J$I(compactVal, scale);
}, 1);

Clazz.newMeth(C$, 'doRound$java_math_BigInteger$I$java_math_MathContext', function (intVal, scale, mc) {
var mcp=mc.precision;
var prec=0;
if (mcp > 0) {
var compactVal=C$.compactValFor$java_math_BigInteger(intVal);
var mode=mc.roundingMode.oldMode;
var drop;
if (compactVal == -281474976710656) {
prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
intVal=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(intVal, drop, mode);
compactVal=C$.compactValFor$java_math_BigInteger(intVal);
if (compactVal != -281474976710656) {
break;
}prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
}
}if (compactVal != -281474976710656) {
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(scale - drop);
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
}
return C$.valueOf$J$I$I(compactVal, scale, prec);
}}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[intVal, -281474976710656, scale, prec]);
}, 1);

Clazz.newMeth(C$, 'divideAndRoundByTenPow$java_math_BigInteger$I$I', function (intVal, tenPow, roundingMode) {
if (tenPow < C$.LONG_TEN_POWERS_TABLE.length) intVal=C$.divideAndRound$java_math_BigInteger$J$I(intVal, C$.LONG_TEN_POWERS_TABLE[tenPow], roundingMode);
 else intVal=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I(intVal, C$.bigTenToThe$I(tenPow), roundingMode);
return intVal;
}, 1);

Clazz.newMeth(C$, 'divideAndRound$J$J$I$I$I', function (ldividend, ldivisor, scale, roundingMode, preferredScale) {
var qsign;
var q=(ldividend/ldivisor|0);
if (roundingMode == 1 && scale == preferredScale ) return C$.valueOf$J$I(q, scale);
var r=ldividend % ldivisor;
qsign=((ldividend < 0) == (ldivisor < 0) ) ? 1 : -1;
if (r != 0) {
var increment=C$.needIncrement$J$I$I$J$J(ldivisor, roundingMode, qsign, q, r);
return C$.valueOf$J$I((increment ? q + qsign : q), scale);
} else {
if (preferredScale != scale) return C$.createAndStripZerosToMatchScale$J$I$J(q, scale, preferredScale);
 else return C$.valueOf$J$I(q, scale);
}}, 1);

Clazz.newMeth(C$, 'divideAndRound$J$J$I', function (ldividend, ldivisor, roundingMode) {
var qsign;
var q=(ldividend/ldivisor|0);
if (roundingMode == 1) return q;
var r=ldividend % ldivisor;
qsign=((ldividend < 0) == (ldivisor < 0) ) ? 1 : -1;
if (r != 0) {
var increment=C$.needIncrement$J$I$I$J$J(ldivisor, roundingMode, qsign, q, r);
return increment ? q + qsign : q;
} else {
return q;
}}, 1);

Clazz.newMeth(C$, 'commonNeedIncrement$I$I$I$Z', function (roundingMode, qsign, cmpFracHalf, oddQuot) {
switch (roundingMode) {
case 7:
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Rounding necessary"]);
case 0:
return true;
case 1:
return false;
case 2:
return qsign > 0;
case 3:
return qsign < 0;
default:
Clazz.assert(C$, this, function(){return roundingMode >= 4 && roundingMode <= 6 }, function(){return "Unexpected rounding mode" + $I$(4).valueOf$I(roundingMode)});
if (cmpFracHalf < 0) return false;
 else if (cmpFracHalf > 0) return true;
 else {
Clazz.assert(C$, this, function(){return cmpFracHalf == 0});
switch (roundingMode) {
case 5:
return false;
case 4:
return true;
case 6:
return oddQuot;
default:
throw Clazz.new_($I$(7).c$$O,["Unexpected rounding mode" + roundingMode]);
}
}}
}, 1);

Clazz.newMeth(C$, 'needIncrement$J$I$I$J$J', function (ldivisor, roundingMode, qsign, q, r) {
Clazz.assert(C$, this, function(){return r != 0});
var cmpFracHalf;
if (r <= -140737488355328 || r > 140737488355328 ) {
cmpFracHalf=1;
} else {
cmpFracHalf=C$.longCompareMagnitude$J$J(2 * r, ldivisor);
}return C$.commonNeedIncrement$I$I$I$Z(roundingMode, qsign, cmpFracHalf, (q & 1) != 0);
}, 1);

Clazz.newMeth(C$, 'divideAndRound$java_math_BigInteger$J$I', function (bdividend, ldivisor, roundingMode) {
var isRemainderZero;
var qsign;
var r=0;
var mq=null;
var mdividend=Clazz.new_($I$(9).c$$IA,[bdividend.mag]);
mq=Clazz.new_($I$(9));
r=mdividend.divide$J$java_math_MutableBigInteger(ldivisor, mq);
isRemainderZero=(r == 0);
qsign=(ldivisor < 0) ? -bdividend.signum : bdividend.signum;
if (!isRemainderZero) {
if (C$.needIncrement$J$I$I$java_math_MutableBigInteger$J(ldivisor, roundingMode, qsign, mq, r)) {
mq.add$java_math_MutableBigInteger($I$(9).ONE);
}}return mq.toBigInteger$I(qsign);
}, 1);

Clazz.newMeth(C$, 'divideAndRound$java_math_BigInteger$J$I$I$I', function (bdividend, ldivisor, scale, roundingMode, preferredScale) {
var isRemainderZero;
var qsign;
var r=0;
var mq=null;
var mdividend=Clazz.new_($I$(9).c$$IA,[bdividend.mag]);
mq=Clazz.new_($I$(9));
r=mdividend.divide$J$java_math_MutableBigInteger(ldivisor, mq);
isRemainderZero=(r == 0);
qsign=(ldivisor < 0) ? -bdividend.signum : bdividend.signum;
if (!isRemainderZero) {
if (C$.needIncrement$J$I$I$java_math_MutableBigInteger$J(ldivisor, roundingMode, qsign, mq, r)) {
mq.add$java_math_MutableBigInteger($I$(9).ONE);
}return mq.toBigDecimal$I$I(qsign, scale);
} else {
if (preferredScale != scale) {
var compactVal=mq.toCompactValue$I(qsign);
if (compactVal != -281474976710656) {
return C$.createAndStripZerosToMatchScale$J$I$J(compactVal, scale, preferredScale);
}var intVal=mq.toBigInteger$I(qsign);
return C$.createAndStripZerosToMatchScale$java_math_BigInteger$I$J(intVal, scale, preferredScale);
} else {
return mq.toBigDecimal$I$I(qsign, scale);
}}}, 1);

Clazz.newMeth(C$, 'needIncrement$J$I$I$java_math_MutableBigInteger$J', function (ldivisor, roundingMode, qsign, mq, r) {
Clazz.assert(C$, this, function(){return r != 0});
var cmpFracHalf;
if (r <= -140737488355328 || r > 140737488355328 ) {
cmpFracHalf=1;
} else {
cmpFracHalf=C$.longCompareMagnitude$J$J(2 * r, ldivisor);
}return C$.commonNeedIncrement$I$I$I$Z(roundingMode, qsign, cmpFracHalf, mq.isOdd$());
}, 1);

Clazz.newMeth(C$, 'divideAndRound$java_math_BigInteger$java_math_BigInteger$I', function (bdividend, bdivisor, roundingMode) {
var isRemainderZero;
var qsign;
var mdividend=Clazz.new_($I$(9).c$$IA,[bdividend.mag]);
var mq=Clazz.new_($I$(9));
var mdivisor=Clazz.new_($I$(9).c$$IA,[bdivisor.mag]);
var mr=mdividend.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(mdivisor, mq);
isRemainderZero=mr.isZero$();
qsign=(bdividend.signum != bdivisor.signum) ? -1 : 1;
if (!isRemainderZero) {
if (C$.needIncrement$java_math_MutableBigInteger$I$I$java_math_MutableBigInteger$java_math_MutableBigInteger(mdivisor, roundingMode, qsign, mq, mr)) {
mq.add$java_math_MutableBigInteger($I$(9).ONE);
}}return mq.toBigInteger$I(qsign);
}, 1);

Clazz.newMeth(C$, 'divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I', function (bdividend, bdivisor, scale, roundingMode, preferredScale) {
var isRemainderZero;
var qsign;
var mdividend=Clazz.new_($I$(9).c$$IA,[bdividend.mag]);
var mq=Clazz.new_($I$(9));
var mdivisor=Clazz.new_($I$(9).c$$IA,[bdivisor.mag]);
var mr=mdividend.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(mdivisor, mq);
isRemainderZero=mr.isZero$();
qsign=(bdividend.signum != bdivisor.signum) ? -1 : 1;
if (!isRemainderZero) {
if (C$.needIncrement$java_math_MutableBigInteger$I$I$java_math_MutableBigInteger$java_math_MutableBigInteger(mdivisor, roundingMode, qsign, mq, mr)) {
mq.add$java_math_MutableBigInteger($I$(9).ONE);
}return mq.toBigDecimal$I$I(qsign, scale);
} else {
if (preferredScale != scale) {
var compactVal=mq.toCompactValue$I(qsign);
if (compactVal != -281474976710656) {
return C$.createAndStripZerosToMatchScale$J$I$J(compactVal, scale, preferredScale);
}var intVal=mq.toBigInteger$I(qsign);
return C$.createAndStripZerosToMatchScale$java_math_BigInteger$I$J(intVal, scale, preferredScale);
} else {
return mq.toBigDecimal$I$I(qsign, scale);
}}}, 1);

Clazz.newMeth(C$, 'needIncrement$java_math_MutableBigInteger$I$I$java_math_MutableBigInteger$java_math_MutableBigInteger', function (mdivisor, roundingMode, qsign, mq, mr) {
Clazz.assert(C$, this, function(){return !mr.isZero$()});
var cmpFracHalf=mr.compareHalf$java_math_MutableBigInteger(mdivisor);
return C$.commonNeedIncrement$I$I$I$Z(roundingMode, qsign, cmpFracHalf, mq.isOdd$());
}, 1);

Clazz.newMeth(C$, 'createAndStripZerosToMatchScale$java_math_BigInteger$I$J', function (intVal, scale, preferredScale) {
var qr;
while (intVal.compareMagnitude$java_math_BigInteger($I$(1).TEN) >= 0 && scale > preferredScale ){
if (intVal.testBit$I(0)) break;
qr=intVal.divideAndRemainder$java_math_BigInteger($I$(1).TEN);
if (qr[1].signum$() != 0) break;
intVal=qr[0];
scale=C$.checkScale$java_math_BigInteger$J(intVal, scale - 1);
}
return C$.valueOf$java_math_BigInteger$I$I(intVal, scale, 0);
}, 1);

Clazz.newMeth(C$, 'createAndStripZerosToMatchScale$J$I$J', function (compactVal, scale, preferredScale) {
while (Math.abs(compactVal) >= 10 && scale > preferredScale ){
if ((compactVal & 1) != 0) break;
var r=compactVal % 10;
if (r != 0) break;
compactVal=(compactVal/(10)|0);
scale=C$.checkScale$J$J(compactVal, scale - 1);
}
return C$.valueOf$J$I(compactVal, scale);
}, 1);

Clazz.newMeth(C$, 'stripZerosToMatchScale$java_math_BigInteger$J$I$I', function (intVal, intCompact, scale, preferredScale) {
if (intCompact != -281474976710656) {
return C$.createAndStripZerosToMatchScale$J$I$J(intCompact, scale, preferredScale);
} else {
return C$.createAndStripZerosToMatchScale$java_math_BigInteger$I$J(intVal == null  ? C$.INFLATED_BIGINT : intVal, scale, preferredScale);
}}, 1);

Clazz.newMeth(C$, 'add$J$J', function (xs, ys) {
var sum=xs + ys;
if ((((sum ^ xs) & (sum ^ ys))) >= 0) {
return sum;
}return -281474976710656;
}, 1);

Clazz.newMeth(C$, 'add$J$J$I', function (xs, ys, scale) {
var sum=C$.add$J$J(xs, ys);
if (sum != -281474976710656) return C$.valueOf$J$I(sum, scale);
return Clazz.new_(C$.c$$java_math_BigInteger$I,[$I$(1).valueOf$J(xs).add$J(ys), scale]);
}, 1);

Clazz.newMeth(C$, 'add$J$I$J$I', function (xs, scale1, ys, scale2) {
var sdiff=scale1 - scale2;
if (sdiff == 0) {
return C$.add$J$J$I(xs, ys, scale1);
} else if (sdiff < 0) {
var raise=C$.checkScale$J$J(xs, -sdiff);
var scaledX=C$.longMultiplyPowerTen$J$I(xs, raise);
if (scaledX != -281474976710656) {
return C$.add$J$J$I(scaledX, ys, scale2);
} else {
var bigsum=C$.bigMultiplyPowerTen$J$I(xs, raise).add$J(ys);
return ((xs ^ ys) >= 0) ? Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[bigsum, -281474976710656, scale2, 0]) : C$.valueOf$java_math_BigInteger$I$I(bigsum, scale2, 0);
}} else {
var raise=C$.checkScale$J$J(ys, sdiff);
var scaledY=C$.longMultiplyPowerTen$J$I(ys, raise);
if (scaledY != -281474976710656) {
return C$.add$J$J$I(xs, scaledY, scale1);
} else {
var bigsum=C$.bigMultiplyPowerTen$J$I(ys, raise).add$J(xs);
return ((xs ^ ys) >= 0) ? Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[bigsum, -281474976710656, scale1, 0]) : C$.valueOf$java_math_BigInteger$I$I(bigsum, scale1, 0);
}}}, 1);

Clazz.newMeth(C$, 'add$J$I$java_math_BigInteger$I', function (xs, scale1, snd, scale2) {
var rscale=scale1;
var sdiff=rscale - scale2;
var sameSigns=(Long.signum$J(xs) == snd.signum);
var sum;
if (sdiff < 0) {
var raise=C$.checkScale$J$J(xs, -sdiff);
rscale=scale2;
var scaledX=C$.longMultiplyPowerTen$J$I(xs, raise);
if (scaledX == -281474976710656) {
sum=snd.add$java_math_BigInteger(C$.bigMultiplyPowerTen$J$I(xs, raise));
} else {
sum=snd.add$J(scaledX);
}} else {
var raise=C$.checkScale$java_math_BigInteger$J(snd, sdiff);
snd=C$.bigMultiplyPowerTen$java_math_BigInteger$I(snd, raise);
sum=snd.add$J(xs);
}return (sameSigns) ? Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[sum, -281474976710656, rscale, 0]) : C$.valueOf$java_math_BigInteger$I$I(sum, rscale, 0);
}, 1);

Clazz.newMeth(C$, 'add$java_math_BigInteger$I$java_math_BigInteger$I', function (fst, scale1, snd, scale2) {
var rscale=scale1;
var sdiff=rscale - scale2;
if (sdiff != 0) {
if (sdiff < 0) {
var raise=C$.checkScale$java_math_BigInteger$J(fst, -sdiff);
rscale=scale2;
fst=C$.bigMultiplyPowerTen$java_math_BigInteger$I(fst, raise);
} else {
var raise=C$.checkScale$java_math_BigInteger$J(snd, sdiff);
snd=C$.bigMultiplyPowerTen$java_math_BigInteger$I(snd, raise);
}}var sum=fst.add$java_math_BigInteger(snd);
return (fst.signum == snd.signum) ? Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[sum, -281474976710656, rscale, 0]) : C$.valueOf$java_math_BigInteger$I$I(sum, rscale, 0);
}, 1);

Clazz.newMeth(C$, 'bigMultiplyPowerTen$J$I', function (value, n) {
if (n <= 0) return $I$(1).valueOf$J(value);
return C$.bigTenToThe$I(n).multiply$J(value);
}, 1);

Clazz.newMeth(C$, 'bigMultiplyPowerTen$java_math_BigInteger$I', function (value, n) {
if (n <= 0) return value;
if (n < C$.LONG_TEN_POWERS_TABLE.length) {
return value.multiply$J(C$.LONG_TEN_POWERS_TABLE[n]);
}return value.multiply$java_math_BigInteger(C$.bigTenToThe$I(n));
}, 1);

Clazz.newMeth(C$, 'divideSmallFastPath$J$I$J$I$J$java_math_MathContext', function (xs, xscale, ys, yscale, preferredScale, mc) {
var mcp=mc.precision;
var roundingMode=mc.roundingMode.oldMode;
Clazz.assert(C$, this, function(){return (xscale <= yscale) && (yscale < 18) && (mcp < 18)  });
var xraise=yscale - xscale;
var scaledX=(xraise == 0) ? xs : C$.longMultiplyPowerTen$J$I(xs, xraise);
var quotient;
var cmp=C$.longCompareMagnitude$J$J(scaledX, ys);
if (cmp > 0) {
yscale-=1;
var scl=C$.checkScaleNonZero$J(preferredScale + yscale - xscale + mcp);
if (C$.checkScaleNonZero$J(mcp + yscale - xscale) > 0) {
var raise=C$.checkScaleNonZero$J(mcp + yscale - xscale);
var scaledXs;
if ((scaledXs=C$.longMultiplyPowerTen$J$I(xs, raise)) == -281474976710656) {
quotient=null;
if ((mcp - 1) >= 0 && (mcp - 1) < C$.LONG_TEN_POWERS_TABLE.length ) {
quotient=C$.multiplyDivideAndRound$J$J$J$I$I$I(C$.LONG_TEN_POWERS_TABLE[mcp - 1], scaledX, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}if (quotient == null ) {
var rb=C$.bigMultiplyPowerTen$J$I(scaledX, mcp - 1);
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}} else {
quotient=C$.divideAndRound$J$J$I$I$I(scaledXs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}} else {
var newScale=C$.checkScaleNonZero$J(xscale - mcp);
if (newScale == yscale) {
quotient=C$.divideAndRound$J$J$I$I$I(xs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var raise=C$.checkScaleNonZero$J(newScale - yscale);
var scaledYs;
if ((scaledYs=C$.longMultiplyPowerTen$J$I(ys, raise)) == -281474976710656) {
var rb=C$.bigMultiplyPowerTen$J$I(ys, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I($I$(1).valueOf$J(xs), rb, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
quotient=C$.divideAndRound$J$J$I$I$I(xs, scaledYs, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}}}} else {
var scl=C$.checkScaleNonZero$J(preferredScale + yscale - xscale + mcp);
if (cmp == 0) {
quotient=C$.roundedTenPower$I$I$I$I(((scaledX < 0) == (ys < 0) ) ? 1 : -1, mcp, scl, C$.checkScaleNonZero$J(preferredScale));
} else {
var scaledXs;
if ((scaledXs=C$.longMultiplyPowerTen$J$I(scaledX, mcp)) == -281474976710656) {
quotient=null;
if (mcp < C$.LONG_TEN_POWERS_TABLE.length) {
quotient=C$.multiplyDivideAndRound$J$J$J$I$I$I(C$.LONG_TEN_POWERS_TABLE[mcp], scaledX, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}if (quotient == null ) {
var rb=C$.bigMultiplyPowerTen$J$I(scaledX, mcp);
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}} else {
quotient=C$.divideAndRound$J$J$I$I$I(scaledXs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}}}return C$.doRound$java_math_BigDecimal$java_math_MathContext(quotient, mc);
}, 1);

Clazz.newMeth(C$, 'divide$J$I$J$I$J$java_math_MathContext', function (xs, xscale, ys, yscale, preferredScale, mc) {
var mcp=mc.precision;
if (xscale <= yscale && yscale < 18  && mcp < 18 ) {
return C$.divideSmallFastPath$J$I$J$I$J$java_math_MathContext(xs, xscale, ys, yscale, preferredScale, mc);
}if (C$.compareMagnitudeNormalized$J$I$J$I(xs, xscale, ys, yscale) > 0) {
yscale-=1;
}var roundingMode=mc.roundingMode.oldMode;
var scl=C$.checkScaleNonZero$J(preferredScale + yscale - xscale + mcp);
var quotient;
if (C$.checkScaleNonZero$J(mcp + yscale - xscale) > 0) {
var raise=C$.checkScaleNonZero$J(mcp + yscale - xscale);
var scaledXs;
if ((scaledXs=C$.longMultiplyPowerTen$J$I(xs, raise)) == -281474976710656) {
var rb=C$.bigMultiplyPowerTen$J$I(xs, raise);
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
quotient=C$.divideAndRound$J$J$I$I$I(scaledXs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}} else {
var newScale=C$.checkScaleNonZero$J(xscale - mcp);
if (newScale == yscale) {
quotient=C$.divideAndRound$J$J$I$I$I(xs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var raise=C$.checkScaleNonZero$J(newScale - yscale);
var scaledYs;
if ((scaledYs=C$.longMultiplyPowerTen$J$I(ys, raise)) == -281474976710656) {
var rb=C$.bigMultiplyPowerTen$J$I(ys, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I($I$(1).valueOf$J(xs), rb, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
quotient=C$.divideAndRound$J$J$I$I$I(xs, scaledYs, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}}}return C$.doRound$java_math_BigDecimal$java_math_MathContext(quotient, mc);
}, 1);

Clazz.newMeth(C$, 'divide$java_math_BigInteger$I$J$I$J$java_math_MathContext', function (xs, xscale, ys, yscale, preferredScale, mc) {
if ((-C$.compareMagnitudeNormalized$J$I$java_math_BigInteger$I(ys, yscale, xs, xscale)) > 0) {
yscale-=1;
}var mcp=mc.precision;
var roundingMode=mc.roundingMode.oldMode;
var quotient;
var scl=C$.checkScaleNonZero$J(preferredScale + yscale - xscale + mcp);
if (C$.checkScaleNonZero$J(mcp + yscale - xscale) > 0) {
var raise=C$.checkScaleNonZero$J(mcp + yscale - xscale);
var rb=C$.bigMultiplyPowerTen$java_math_BigInteger$I(xs, raise);
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var newScale=C$.checkScaleNonZero$J(xscale - mcp);
if (newScale == yscale) {
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(xs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var raise=C$.checkScaleNonZero$J(newScale - yscale);
var scaledYs;
if ((scaledYs=C$.longMultiplyPowerTen$J$I(ys, raise)) == -281474976710656) {
var rb=C$.bigMultiplyPowerTen$J$I(ys, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(xs, rb, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(xs, scaledYs, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}}}return C$.doRound$java_math_BigDecimal$java_math_MathContext(quotient, mc);
}, 1);

Clazz.newMeth(C$, 'divide$J$I$java_math_BigInteger$I$J$java_math_MathContext', function (xs, xscale, ys, yscale, preferredScale, mc) {
if (C$.compareMagnitudeNormalized$J$I$java_math_BigInteger$I(xs, xscale, ys, yscale) > 0) {
yscale-=1;
}var mcp=mc.precision;
var roundingMode=mc.roundingMode.oldMode;
var quotient;
var scl=C$.checkScaleNonZero$J(preferredScale + yscale - xscale + mcp);
if (C$.checkScaleNonZero$J(mcp + yscale - xscale) > 0) {
var raise=C$.checkScaleNonZero$J(mcp + yscale - xscale);
var rb=C$.bigMultiplyPowerTen$J$I(xs, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var newScale=C$.checkScaleNonZero$J(xscale - mcp);
var raise=C$.checkScaleNonZero$J(newScale - yscale);
var rb=C$.bigMultiplyPowerTen$java_math_BigInteger$I(ys, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I($I$(1).valueOf$J(xs), rb, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}return C$.doRound$java_math_BigDecimal$java_math_MathContext(quotient, mc);
}, 1);

Clazz.newMeth(C$, 'divide$java_math_BigInteger$I$java_math_BigInteger$I$J$java_math_MathContext', function (xs, xscale, ys, yscale, preferredScale, mc) {
if (C$.compareMagnitudeNormalized$java_math_BigInteger$I$java_math_BigInteger$I(xs, xscale, ys, yscale) > 0) {
yscale-=1;
}var mcp=mc.precision;
var roundingMode=mc.roundingMode.oldMode;
var quotient;
var scl=C$.checkScaleNonZero$J(preferredScale + yscale - xscale + mcp);
if (C$.checkScaleNonZero$J(mcp + yscale - xscale) > 0) {
var raise=C$.checkScaleNonZero$J(mcp + yscale - xscale);
var rb=C$.bigMultiplyPowerTen$java_math_BigInteger$I(xs, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var newScale=C$.checkScaleNonZero$J(xscale - mcp);
var raise=C$.checkScaleNonZero$J(newScale - yscale);
var rb=C$.bigMultiplyPowerTen$java_math_BigInteger$I(ys, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(xs, rb, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}return C$.doRound$java_math_BigDecimal$java_math_MathContext(quotient, mc);
}, 1);

Clazz.newMeth(C$, 'multiplyDivideAndRound$J$J$J$I$I$I', function (dividend0, dividend1, divisor, scale, roundingMode, preferredScale) {
var qsign=Long.signum$J(dividend0) * Long.signum$J(dividend1) * Long.signum$J(divisor) ;
dividend0=Math.abs(dividend0);
dividend1=Math.abs(dividend1);
divisor=Math.abs(divisor);
var d0_hi=$I$(1).getHighBits$J(dividend0);
var d0_lo=$I$(1).getLowBits$J(dividend0);
var d1_hi=$I$(1).getHighBits$J(dividend1);
var d1_lo=$I$(1).getLowBits$J(dividend1);
var product=d0_lo * d1_lo;
var d0=$I$(1).getLowBits$J(product);
var d1=$I$(1).getHighBits$J(product);
product=d0_hi * d1_lo + d1;
d1=$I$(1).getLowBits$J(product);
var d2=$I$(1).getHighBits$J(product);
product=d0_lo * d1_hi + d1;
d1=$I$(1).getLowBits$J(product);
d2+=$I$(1).getHighBits$J(product);
var d3=$I$(1).getHighBits$J(d2);
d2=$I$(1).getLowBits$J(d2);
product=d0_hi * d1_hi + d2;
d2=$I$(1).getLowBits$J(product);
d3=$I$(1).getLowBits$J(($I$(1).getHighBits$J(product) + d3));
var dividendHi=C$.make64$J$J(d3, d2);
var dividendLo=C$.make64$J$J(d1, d0);
return C$.divideAndRound128$J$J$J$I$I$I$I(dividendHi, dividendLo, divisor, qsign, scale, roundingMode, preferredScale);
}, 1);

Clazz.newMeth(C$, 'divideAndRound128$J$J$J$I$I$I$I', function (dividendHi, dividendLo, divisor, sign, scale, roundingMode, preferredScale) {
if (dividendHi >= divisor) {
return null;
}var shift=Long.numberOfLeadingZeros$J(divisor);
divisor<<=shift;
var v1=$I$(1).getHighBits$J(divisor);
var v0=$I$(1).getLowBits$J(divisor);
var tmp=dividendLo << shift;
var u1=$I$(1).getHighBits$J(tmp);
var u0=$I$(1).getLowBits$J(tmp);
tmp=$I$(1).longLeftShift$J$I(dividendHi, shift) + $I$(1).longRightShift$J$I(dividendLo, 64 - shift);
var u2=$I$(1).getLowBits$J(tmp);
var q1;
var r_tmp;
if (v1 == 1) {
q1=tmp;
r_tmp=0;
} else if (tmp >= 0) {
q1=(tmp/v1|0);
r_tmp=tmp - q1 * v1;
} else {
var rq=C$.divRemNegativeLong$J$J(tmp, v1);
q1=rq[1] ||(rq[1]|0);
r_tmp=rq[0] ||(rq[0]|0);
}while (q1 >= 16777216 || C$.unsignedLongCompare$J$D(q1 * v0, C$.make64$J$J(r_tmp, u1)) ){
q1--;
r_tmp+=v1;
if (r_tmp >= 16777216) break;
}
tmp=C$.mulsub$J$J$J$J$J(u2, u1, v1, v0, q1);
u1=$I$(1).getLowBits$J(tmp);
var q0;
if (v1 == 1) {
q0=tmp;
r_tmp=0;
} else if (tmp >= 0) {
q0=(tmp/v1|0);
r_tmp=tmp - q0 * v1;
} else {
var rq=C$.divRemNegativeLong$J$J(tmp, v1);
q0=rq[1] ||(rq[1]|0);
r_tmp=rq[0] ||(rq[0]|0);
}while (q0 >= 16777216 || C$.unsignedLongCompare$J$D(q0 * v0, C$.make64$J$J(r_tmp, u0)) ){
q0--;
r_tmp+=v1;
if (r_tmp >= 16777216) break;
}
if ((q1|0) < 0) {
var mq=Clazz.new_($I$(9).c$$IA,[Clazz.array(Integer.TYPE, -1, [(q1|0), (q0|0)])]);
if (roundingMode == 1 && scale == preferredScale ) {
return mq.toBigDecimal$I$I(sign, scale);
}var r=$I$(1).longRightShift$J$I(C$.mulsub$J$J$J$J$J(u1, u0, v1, v0, q0), shift);
if (r != 0) {
if (C$.needIncrement$J$I$I$java_math_MutableBigInteger$J($I$(1).longRightShift$J$I(divisor, shift), roundingMode, sign, mq, r)) {
mq.add$java_math_MutableBigInteger($I$(9).ONE);
}return mq.toBigDecimal$I$I(sign, scale);
} else {
if (preferredScale != scale) {
var intVal=mq.toBigInteger$I(sign);
return C$.createAndStripZerosToMatchScale$java_math_BigInteger$I$J(intVal, scale, preferredScale);
} else {
return mq.toBigDecimal$I$I(sign, scale);
}}}var q=C$.make64$J$J(q1, q0);
q*=sign;
if (roundingMode == 1 && scale == preferredScale ) return C$.valueOf$J$I(q, scale);
var r=$I$(1).longRightShift$J$I(C$.mulsub$J$J$J$J$J(u1, u0, v1, v0, q0), shift);
if (r != 0) {
var increment=C$.needIncrement$J$I$I$J$J($I$(1).longRightShift$J$I(divisor, shift), roundingMode, sign, q, r);
return C$.valueOf$J$I((increment ? q + sign : q), scale);
} else {
if (preferredScale != scale) {
return C$.createAndStripZerosToMatchScale$J$I$J(q, scale, preferredScale);
} else {
return C$.valueOf$J$I(q, scale);
}}}, 1);

Clazz.newMeth(C$, 'roundedTenPower$I$I$I$I', function (qsign, raise, scale, preferredScale) {
if (scale > preferredScale) {
var diff=scale - preferredScale;
if (diff < raise) {
return C$.scaledTenPow$I$I$I(raise - diff, qsign, preferredScale);
} else {
return C$.valueOf$J$I(qsign, scale - raise);
}} else {
return C$.scaledTenPow$I$I$I(raise, qsign, scale);
}}, 1);

Clazz.newMeth(C$, 'scaledTenPow$I$I$I', function (n, sign, scale) {
if (n < C$.LONG_TEN_POWERS_TABLE.length) return C$.valueOf$J$I(sign * C$.LONG_TEN_POWERS_TABLE[n], scale);
 else {
var unscaledVal=C$.bigTenToThe$I(n);
if (sign == -1) {
unscaledVal=unscaledVal.negate$();
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[unscaledVal, -281474976710656, scale, n + 1]);
}}, 1);

Clazz.newMeth(C$, 'divRemNegativeLong$J$J', function (n, d) {
Clazz.assert(C$, this, function(){return n < 0}, function(){return "Non-negative numerator " + n});
Clazz.assert(C$, this, function(){return d != 1}, function(){return "Unity denominator"});
var q=((1.0 * (n >>> 1) / (d >>> 1))|0);
var r=n - q * d;
while (r < 0){
r+=d;
q--;
}
while (r >= d){
r-=d;
q++;
}
return Clazz.array(Double.TYPE, -1, [r, q]);
}, 1);

Clazz.newMeth(C$, 'make64$J$J', function (hi, lo) {
return hi << 32 | lo;
}, 1);

Clazz.newMeth(C$, 'mulsub$J$J$J$J$J', function (u1, u0, v1, v0, q0) {
var tmp=u0 - q0 * v0;
return C$.make64$J$J(u1 + $I$(1).getHighBits$J(tmp) - q0 * v1, $I$(1).getLowBits$J(tmp));
}, 1);

Clazz.newMeth(C$, 'unsignedLongCompare$J$D', function (one, two) {
return (one + -281474976710656) > (two + -281474976710656) ;
}, 1);

Clazz.newMeth(C$, 'unsignedLongCompareEq$J$D', function (one, two) {
return (one + -281474976710656) >= (two + -281474976710656) ;
}, 1);

Clazz.newMeth(C$, 'compareMagnitudeNormalized$J$I$J$I', function (xs, xscale, ys, yscale) {
var sdiff=xscale - yscale;
if (sdiff != 0) {
if (sdiff < 0) {
xs=C$.longMultiplyPowerTen$J$I(xs, -sdiff);
} else {
ys=C$.longMultiplyPowerTen$J$I(ys, sdiff);
}}if (xs != -281474976710656) return (ys != -281474976710656) ? C$.longCompareMagnitude$J$J(xs, ys) : -1;
 else return 1;
}, 1);

Clazz.newMeth(C$, 'compareMagnitudeNormalized$J$I$java_math_BigInteger$I', function (xs, xscale, ys, yscale) {
if (xs == 0) return -1;
var sdiff=xscale - yscale;
if (sdiff < 0) {
if (C$.longMultiplyPowerTen$J$I(xs, -sdiff) == -281474976710656) {
return C$.bigMultiplyPowerTen$J$I(xs, -sdiff).compareMagnitude$java_math_BigInteger(ys);
}}return -1;
}, 1);

Clazz.newMeth(C$, 'compareMagnitudeNormalized$java_math_BigInteger$I$java_math_BigInteger$I', function (xs, xscale, ys, yscale) {
var sdiff=xscale - yscale;
if (sdiff < 0) {
return C$.bigMultiplyPowerTen$java_math_BigInteger$I(xs, -sdiff).compareMagnitude$java_math_BigInteger(ys);
} else {
return xs.compareMagnitude$java_math_BigInteger(C$.bigMultiplyPowerTen$java_math_BigInteger$I(ys, sdiff));
}}, 1);

Clazz.newMeth(C$, 'multiply$J$J', function (x, y) {
if (x == 0 || y == 0 ) return 0;
if (x == 1) return y;
if (y == 1) return x;
var product=x * y;
if ((product/y|0) == x) {
return product;
}return -281474976710656;
}, 1);

Clazz.newMeth(C$, 'multiply$J$J$I', function (x, y, scale) {
var product=C$.multiply$J$J(x, y);
if (product != -281474976710656) {
return C$.valueOf$J$I(product, scale);
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(x).multiply$J(y), -281474976710656, scale, 0]);
}, 1);

Clazz.newMeth(C$, 'multiply$J$java_math_BigInteger$I', function (x, y, scale) {
if (x == 0) {
return C$.zeroValueOf$I(scale);
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[y.multiply$J(x), -281474976710656, scale, 0]);
}, 1);

Clazz.newMeth(C$, 'multiply$java_math_BigInteger$java_math_BigInteger$I', function (x, y, scale) {
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[x.multiply$java_math_BigInteger(y), -281474976710656, scale, 0]);
}, 1);

Clazz.newMeth(C$, 'multiplyAndRound$J$J$I$java_math_MathContext', function (x, y, scale, mc) {
var product=C$.multiply$J$J(x, y);
if (product != -281474976710656) {
return C$.doRound$J$I$java_math_MathContext(product, scale, mc);
}var rsign=1;
if (x < 0) {
x=-x;
rsign=-1;
}if (y < 0) {
y=-y;
rsign*=-1;
}var m0_hi=$I$(1).getHighBits$J(x);
var m0_lo=$I$(1).getLowBits$J(x);
var m1_hi=$I$(1).getHighBits$J(y);
var m1_lo=$I$(1).getLowBits$J(y);
product=m0_lo * m1_lo;
var m0=$I$(1).getLowBits$J(product);
var m1=$I$(1).getHighBits$J(product);
product=m0_hi * m1_lo + m1;
m1=$I$(1).getLowBits$J(product);
var m2=$I$(1).getHighBits$J(product);
product=m0_lo * m1_hi + m1;
m1=$I$(1).getLowBits$J(product);
m2+=$I$(1).getHighBits$J(product);
var m3=$I$(1).getHighBits$J(m2);
m2=$I$(1).getLowBits$J(m2);
product=m0_hi * m1_hi + m2;
m2=$I$(1).getLowBits$J(product);
m3=$I$(1).getLowBits$J(($I$(1).getHighBits$J(product) + m3));
var mHi=C$.make64$J$J(m3, m2);
var mLo=C$.make64$J$J(m1, m0);
var res=C$.doRound128$J$J$I$I$java_math_MathContext(mHi, mLo, rsign, scale, mc);
if (res != null ) {
return res;
}res=Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(x).multiply$J(y * rsign), -281474976710656, scale, 0]);
return C$.doRound$java_math_BigDecimal$java_math_MathContext(res, mc);
}, 1);

Clazz.newMeth(C$, 'multiplyAndRound$J$java_math_BigInteger$I$java_math_MathContext', function (x, y, scale, mc) {
if (x == 0) {
return C$.zeroValueOf$I(scale);
}return C$.doRound$java_math_BigInteger$I$java_math_MathContext(y.multiply$J(x), scale, mc);
}, 1);

Clazz.newMeth(C$, 'multiplyAndRound$java_math_BigInteger$java_math_BigInteger$I$java_math_MathContext', function (x, y, scale, mc) {
return C$.doRound$java_math_BigInteger$I$java_math_MathContext(x.multiply$java_math_BigInteger(y), scale, mc);
}, 1);

Clazz.newMeth(C$, 'doRound128$J$J$I$I$java_math_MathContext', function (hi, lo, sign, scale, mc) {
var mcp=mc.precision;
var drop;
var res=null;
if (((drop=C$.precision$J$J(hi, lo) - mcp) > 0) && (drop < C$.LONG_TEN_POWERS_TABLE.length) ) {
scale=C$.checkScaleNonZero$J(scale - drop);
res=C$.divideAndRound128$J$J$J$I$I$I$I(hi, lo, C$.LONG_TEN_POWERS_TABLE[drop], sign, scale, mc.roundingMode.oldMode, scale);
}if (res != null ) {
return C$.doRound$java_math_BigDecimal$java_math_MathContext(res, mc);
}return null;
}, 1);

Clazz.newMeth(C$, 'longLongCompareMagnitude$J$J$D$D', function (hi0, lo0, hi1, lo1) {
if (hi0 != hi1 ) {
return hi0 < hi1 ;
}return (lo0 + -281474976710656) < (lo1 + -281474976710656) ;
}, 1);

Clazz.newMeth(C$, 'divide$J$I$J$I$I$I', function (dividend, dividendScale, divisor, divisorScale, scale, roundingMode) {
if (C$.checkScale$J$J(dividend, scale + divisorScale) > dividendScale) {
var newScale=scale + divisorScale;
var raise=newScale - dividendScale;
if (raise < C$.LONG_TEN_POWERS_TABLE.length) {
var xs=dividend;
if ((xs=C$.longMultiplyPowerTen$J$I(xs, raise)) != -281474976710656) {
return C$.divideAndRound$J$J$I$I$I(xs, divisor, scale, roundingMode, scale);
}var q=C$.multiplyDivideAndRound$J$J$J$I$I$I(C$.LONG_TEN_POWERS_TABLE[raise], dividend, divisor, scale, roundingMode, scale);
if (q != null ) {
return q;
}}var scaledDividend=C$.bigMultiplyPowerTen$J$I(dividend, raise);
return C$.divideAndRound$java_math_BigInteger$J$I$I$I(scaledDividend, divisor, scale, roundingMode, scale);
} else {
var newScale=C$.checkScale$J$J(divisor, dividendScale - scale);
var raise=newScale - divisorScale;
if (raise < C$.LONG_TEN_POWERS_TABLE.length) {
var ys=divisor;
if ((ys=C$.longMultiplyPowerTen$J$I(ys, raise)) != -281474976710656) {
return C$.divideAndRound$J$J$I$I$I(dividend, ys, scale, roundingMode, scale);
}}var scaledDivisor=C$.bigMultiplyPowerTen$J$I(divisor, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I($I$(1).valueOf$J(dividend), scaledDivisor, scale, roundingMode, scale);
}}, 1);

Clazz.newMeth(C$, 'divide$java_math_BigInteger$I$J$I$I$I', function (dividend, dividendScale, divisor, divisorScale, scale, roundingMode) {
if (C$.checkScale$java_math_BigInteger$J(dividend, scale + divisorScale) > dividendScale) {
var newScale=scale + divisorScale;
var raise=newScale - dividendScale;
var scaledDividend=C$.bigMultiplyPowerTen$java_math_BigInteger$I(dividend, raise);
return C$.divideAndRound$java_math_BigInteger$J$I$I$I(scaledDividend, divisor, scale, roundingMode, scale);
} else {
var newScale=C$.checkScale$J$J(divisor, dividendScale - scale);
var raise=newScale - divisorScale;
if (raise < C$.LONG_TEN_POWERS_TABLE.length) {
var ys=divisor;
if ((ys=C$.longMultiplyPowerTen$J$I(ys, raise)) != -281474976710656) {
return C$.divideAndRound$java_math_BigInteger$J$I$I$I(dividend, ys, scale, roundingMode, scale);
}}var scaledDivisor=C$.bigMultiplyPowerTen$J$I(divisor, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(dividend, scaledDivisor, scale, roundingMode, scale);
}}, 1);

Clazz.newMeth(C$, 'divide$J$I$java_math_BigInteger$I$I$I', function (dividend, dividendScale, divisor, divisorScale, scale, roundingMode) {
if (C$.checkScale$J$J(dividend, scale + divisorScale) > dividendScale) {
var newScale=scale + divisorScale;
var raise=newScale - dividendScale;
var scaledDividend=C$.bigMultiplyPowerTen$J$I(dividend, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(scaledDividend, divisor, scale, roundingMode, scale);
} else {
var newScale=C$.checkScale$java_math_BigInteger$J(divisor, dividendScale - scale);
var raise=newScale - divisorScale;
var scaledDivisor=C$.bigMultiplyPowerTen$java_math_BigInteger$I(divisor, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I($I$(1).valueOf$J(dividend), scaledDivisor, scale, roundingMode, scale);
}}, 1);

Clazz.newMeth(C$, 'divide$java_math_BigInteger$I$java_math_BigInteger$I$I$I', function (dividend, dividendScale, divisor, divisorScale, scale, roundingMode) {
if (C$.checkScale$java_math_BigInteger$J(dividend, scale + divisorScale) > dividendScale) {
var newScale=scale + divisorScale;
var raise=newScale - dividendScale;
var scaledDividend=C$.bigMultiplyPowerTen$java_math_BigInteger$I(dividend, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(scaledDividend, divisor, scale, roundingMode, scale);
} else {
var newScale=C$.checkScale$java_math_BigInteger$J(divisor, dividendScale - scale);
var raise=newScale - divisorScale;
var scaledDivisor=C$.bigMultiplyPowerTen$java_math_BigInteger$I(divisor, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(dividend, scaledDivisor, scale, roundingMode, scale);
}}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
;
(function(){var C$=Clazz.newClass(P$.BigDecimal, "LongOverflow", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.LONGMIN=null;
C$.LONGMAX=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.LONGMIN=$I$(1).valueOf$J(-281474976710656);
C$.LONGMAX=$I$(1).valueOf$J(281474976710656);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'check$java_math_BigDecimal', function (num) {
var intVal=p$1.inflated.apply(num, []);
if (intVal.compareTo$java_math_BigInteger(C$.LONGMIN) < 0 || intVal.compareTo$java_math_BigInteger(C$.LONGMAX) > 0 ) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Overflow"]);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.BigDecimal, "StringBuilderHelper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.DIGIT_TENS=null;
C$.DIGIT_ONES=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DIGIT_TENS=Clazz.array(Character.TYPE, -1, ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9"]);
C$.DIGIT_ONES=Clazz.array(Character.TYPE, -1, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sb=null;
this.cmpCharArray=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.sb=Clazz.new_($I$(2));
this.cmpCharArray=Clazz.array(Character.TYPE, [19]);
}, 1);

Clazz.newMeth(C$, 'getStringBuilder$', function () {
this.sb.setLength$I(0);
return this.sb;
});

Clazz.newMeth(C$, 'getCompactCharArray$', function () {
return this.cmpCharArray;
});

Clazz.newMeth(C$, 'putIntCompact$J', function (intCompact) {
Clazz.assert(C$, this, function(){return intCompact >= 0});
var q;
var r;
var charPos=this.cmpCharArray.length;
while (intCompact > 2147483647){
q=Math.floor(intCompact / 100) ||0;
r=((intCompact - q * 100)|0);
intCompact=q;
this.cmpCharArray[--charPos]=C$.DIGIT_ONES[r];
this.cmpCharArray[--charPos]=C$.DIGIT_TENS[r];
}
var q2;
var i2=(intCompact|0);
while (i2 >= 100){
q2=(i2/100|0);
r=i2 - q2 * 100;
i2=q2;
this.cmpCharArray[--charPos]=C$.DIGIT_ONES[r];
this.cmpCharArray[--charPos]=C$.DIGIT_TENS[r];
}
this.cmpCharArray[--charPos]=C$.DIGIT_ONES[i2];
if (i2 >= 10) this.cmpCharArray[--charPos]=C$.DIGIT_TENS[i2];
return charPos;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
