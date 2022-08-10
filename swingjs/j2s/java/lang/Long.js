(function(){var P$=java.lang,I$=[[0,'java.math.BigInteger',['Long','.LongCache']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Long", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Number', 'Comparable');
C$.$classes$=[['LongCache',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['value']]]

Clazz.newMeth(C$, 'toString$J$I', function (i, radix) {
if (radix < 2 || radix > 36 ) radix=10;
if (radix == 10) return C$.toString$J(i);
var buf=Clazz.array(Character.TYPE, [65]);
var charPos=64;
var negative=(Long.$lt(i,0 ));
if (!negative) {
i=(Long.$neg(i));
}while (Long.$le(i,-radix )){
buf[charPos--]=Integer.digits[Long.$ival(((Long.$neg((Long.$mod(i,radix))))))];
i=Long.$div(i,radix);
}
buf[charPos]=Integer.digits[Long.$ival(((Long.$neg(i))))];
if (negative) {
buf[--charPos]="-";
}return  String.instantialize(buf, charPos, (65 - charPos));
}, 1);

Clazz.newMeth(C$, 'toUnsignedString$J$I', function (i, radix) {
if (Long.$ge(i,0 )) return C$.toString$J$I(i, radix);
 else {
switch (radix) {
case 2:
return C$.toBinaryString$J(i);
case 4:
return C$.toUnsignedString0$J$I(i, 2);
case 8:
return C$.toOctalString$J(i);
case 10:
var quot=Long.$div((Long.$usr(i,1)),5);
var rem=Long.$sub(i,Long.$mul(quot,10));
return C$.toString$J(quot) + Long.$s(rem);
case 16:
return C$.toHexString$J(i);
case 32:
return C$.toUnsignedString0$J$I(i, 5);
default:
return C$.toUnsignedBigInteger$J(i).toString$I(radix);
}
}}, 1);

Clazz.newMeth(C$, 'toUnsignedBigInteger$J', function (i) {
if (Long.$ge(i,0 )) return $I$(1).valueOf$J(i);
 else {
var upper=Long.$ival((Long.$usr(i,32)));
var lower=Long.$ival(i);
return ($I$(1,"valueOf$J",[Integer.toUnsignedLong$I(upper)])).shiftLeft$I(32).add$java_math_BigInteger($I$(1,"valueOf$J",[Integer.toUnsignedLong$I(lower)]));
}}, 1);

Clazz.newMeth(C$, 'toHexString$J', function (i) {
return C$.toUnsignedString0$J$I(i, 4);
}, 1);

Clazz.newMeth(C$, 'toOctalString$J', function (i) {
return C$.toUnsignedString0$J$I(i, 3);
}, 1);

Clazz.newMeth(C$, 'toBinaryString$J', function (i) {
return C$.toUnsignedString0$J$I(i, 1);
}, 1);

Clazz.newMeth(C$, 'toUnsignedString0$J$I', function (val, shift) {
var mag=64 - C$.numberOfLeadingZeros$J(val);
var chars=Math.max((((mag + (shift - 1))/shift|0)), 1);
var buf=Clazz.array(Character.TYPE, [chars]);
C$.formatUnsignedLong$J$I$CA$I$I(val, shift, buf, 0, chars);
return  String.instantialize(buf, true);
}, 1);

Clazz.newMeth(C$, 'formatUnsignedLong$J$I$CA$I$I', function (val, shift, buf, offset, len) {
var charPos=len;
var radix=1 << shift;
var mask=radix - 1;
do {
buf[offset + --charPos]=Integer.digits[(Long.$ival(val)) & mask];
(val=Long.$usr(val,(shift)));
} while (Long.$ne(val,0 ) && charPos > 0 );
return charPos;
}, 1);

Clazz.newMeth(C$, 'toString$J', function (i) {
if (Long.$eq(i,[0,549755813888,-1] )) return "-9223372036854775808";
var size=(Long.$lt(i,0 )) ? C$.stringSize$J((Long.$neg(i))) + 1 : C$.stringSize$J(i);
var buf=Clazz.array(Character.TYPE, [size]);
C$.getChars$J$I$CA(i, size, buf);
return  String.instantialize(buf, true);
}, 1);

Clazz.newMeth(C$, 'toUnsignedString$J', function (i) {
return C$.toUnsignedString$J$I(i, 10);
}, 1);

Clazz.newMeth(C$, 'getChars$J$I$CA', function (i, index, buf) {
var q;
var r;
var charPos=index;
var sign=String.fromCharCode(0);
if (Long.$lt(i,0 )) {
sign="-";
i=(Long.$neg(i));
}while (Long.$gt(i,2147483647 )){
q=Long.$div(i,100);
r=Long.$ival((Long.$sub(i,(Long.$add((Long.$sl(q,6)),(Long.$sl(q,5)) , (Long.$sl(q,2)) )))));
i=q;
buf[--charPos]=Integer.DigitOnes[r];
buf[--charPos]=Integer.DigitTens[r];
}
var q2;
var i2=Long.$ival(i);
while (i2 >= 65536){
q2=(i2/100|0);
r=i2 - ((q2 << 6) + (q2 << 5) + (q2 << 2) );
i2=q2;
buf[--charPos]=Integer.DigitOnes[r];
buf[--charPos]=Integer.DigitTens[r];
}
for (; ; ) {
q2=(i2 * 52429) >>> (19);
r=i2 - ((q2 << 3) + (q2 << 1));
buf[--charPos]=Integer.digits[r];
i2=q2;
if (i2 == 0) break;
}
if (sign.$c() != 0 ) {
buf[--charPos]=sign;
}}, 1);

Clazz.newMeth(C$, 'stringSize$J', function (x) {
var p=10;
for (var i=1; i < 19; i++) {
if (Long.$lt(x,p )) return i;
p=Long.$mul(10,p);
}
return 19;
}, 1);

Clazz.newMeth(C$, 'parseLong$S$I', function (s, radix) {
if (s == null ) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["null"]);
}if (radix < 2) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["radix " + radix + " less than Character.MIN_RADIX" ]);
}if (radix > 36) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["radix " + radix + " greater than Character.MAX_RADIX" ]);
}var result=0;
var negative=false;
var i=0;
var len=s.length$();
var limit=(Long.$neg([16777215,549755813887,1]));
var multmin;
var digit;
if (len > 0) {
var firstChar=s.charAt$I(0);
if (firstChar < "0") {
if (firstChar == "-") {
negative=true;
limit=[0,549755813888,-1];
} else if (firstChar != "+") throw Clazz.load('NumberFormatException').forInputString$S(s);
if (len == 1) throw Clazz.load('NumberFormatException').forInputString$S(s);
++i;
}multmin=Long.$div(limit,radix);
while (i < len){
digit=Character.digit$C$I(s.charAt$I(i++), radix);
if (digit < 0) {
throw Clazz.load('NumberFormatException').forInputString$S(s);
}if (Long.$lt(result,multmin )) {
throw Clazz.load('NumberFormatException').forInputString$S(s);
}(result=Long.$mul(result,(radix)));
if (Long.$lt(result,Long.$add(limit,digit) )) {
throw Clazz.load('NumberFormatException').forInputString$S(s);
}(result=Long.$sub(result,(digit)));
}
} else {
throw Clazz.load('NumberFormatException').forInputString$S(s);
}return negative ? result : (Long.$neg(result));
}, 1);

Clazz.newMeth(C$, 'parseLong$S', function (s) {
return C$.parseLong$S$I(s, 10);
}, 1);

Clazz.newMeth(C$, 'parseUnsignedLong$S$I', function (s, radix) {
if (s == null ) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["null"]);
}var len=s.length$();
if (len > 0) {
var firstChar=s.charAt$I(0);
if (firstChar == "-") {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,[String.format$S$OA("Illegal leading minus sign on unsigned string %s.", Clazz.array(java.lang.Object, -1, [s]))]);
} else {
if (len <= 12 || (radix == 10 && len <= 18 ) ) {
return C$.parseLong$S$I(s, radix);
}var first=C$.parseLong$S$I(s.substring$I$I(0, len - 1), radix);
var second=Character.digit$C$I(s.charAt$I(len - 1), radix);
if (second < 0) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Bad digit at end of " + s]);
}var result=Long.$add(Long.$mul(first,radix),second);
if (C$.compareUnsigned$J$J(result, first) < 0) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,[String.format$S$OA("String value %s exceeds range of unsigned long.", Clazz.array(java.lang.Object, -1, [s]))]);
}return result;
}} else {
throw Clazz.load('NumberFormatException').forInputString$S(s);
}}, 1);

Clazz.newMeth(C$, 'parseUnsignedLong$S', function (s) {
return C$.parseUnsignedLong$S$I(s, 10);
}, 1);

Clazz.newMeth(C$, 'valueOf$S$I', function (s, radix) {
return C$.valueOf$J(C$.parseLong$S$I(s, radix));
}, 1);

Clazz.newMeth(C$, 'valueOf$S', function (s) {
return C$.valueOf$J(C$.parseLong$S$I(s, 10));
}, 1);

Clazz.newMeth(C$, 'valueOf$J', function (l) {
var offset=128;
if (Long.$ge(l,-128 ) && Long.$le(l,127 ) ) {
return $I$(2).cache[Long.$ival(l) + 128];
}return  new Long(l);
}, 1);

Clazz.newMeth(C$, 'decode$S', function (nm) {
var radix=10;
var index=0;
var negative=false;
var result;
if (nm.length$() == 0) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Zero length string"]);
var firstChar=nm.charAt$I(0);
if (firstChar == "-") {
negative=true;
++index;
} else if (firstChar == "+") ++index;
if (nm.startsWith$S$I("0x", index) || nm.startsWith$S$I("0X", index) ) {
index+=2;
radix=16;
} else if (nm.startsWith$S$I("#", index)) {
++index;
radix=16;
} else if (nm.startsWith$S$I("0", index) && nm.length$() > 1 + index ) {
++index;
radix=8;
}if (nm.startsWith$S$I("-", index) || nm.startsWith$S$I("+", index) ) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Sign character in wrong position"]);
try {
result=C$.valueOf$S$I(nm.substring$I(index), radix);
result=negative ? C$.valueOf$J((Long.$neg(result.longValue$()))) : result;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
var constant=negative ? ("-" + nm.substring$I(index)) : nm.substring$I(index);
result=C$.valueOf$S$I(constant, radix);
} else {
throw e;
}
}
return result;
}, 1);

Clazz.newMeth(C$, 'c$$J', function (value) {
Clazz.super_(C$, this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
Clazz.super_(C$, this);
this.value=C$.parseLong$S$I(s, 10);
}, 1);

Clazz.newMeth(C$, 'byteValue$', function () {
return ($b$[0] = this.value, $b$[0]);
});

Clazz.newMeth(C$, 'shortValue$', function () {
return ($s$[0] = this.value, $s$[0]);
});

Clazz.newMeth(C$, 'intValue$', function () {
return Long.$ival(this.value);
});

Clazz.newMeth(C$, 'longValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'floatValue$', function () {
return Long.$fval(this.value);
});

Clazz.newMeth(C$, 'doubleValue$', function () {
return Long.$dval(this.value);
});

Clazz.newMeth(C$, 'toString', function () {
return C$.toString$J(this.value);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return C$.hashCode$J(this.value);
});

Clazz.newMeth(C$, 'hashCode$J', function (value) {
return Long.$ival((Long.$xor(value,(Long.$usr(value,32)))));
}, 1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "java.lang.Long")) {
return Long.$eq(this.value,(obj).longValue$() );
}return false;
});

Clazz.newMeth(C$, 'getLong$S', function (nm) {
return C$.getLong$S$Long(nm, null);
}, 1);

Clazz.newMeth(C$, 'getLong$S$J', function (nm, val) {
var result=C$.getLong$S$Long(nm, null);
return (Long.$eq(result,null )) ? C$.valueOf$J(val) : result;
}, 1);

Clazz.newMeth(C$, 'getLong$S$Long', function (nm, val) {
var v=null;
try {
v=System.getProperty$S(nm);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException") || Clazz.exceptionOf(e,"NullPointerException")){
} else {
throw e;
}
}
if (v != null ) {
try {
return C$.decode$S(v);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
}return val;
}, 1);

Clazz.newMeth(C$, ['compareTo$Long','compareTo$O'], function (anotherLong) {
return C$.compare$J$J(this.value, anotherLong.value);
});

Clazz.newMeth(C$, 'compare$J$J', function (x, y) {
return (Long.$lt(x,y )) ? -1 : ((Long.$eq(x,y )) ? 0 : 1);
}, 1);

Clazz.newMeth(C$, 'compareUnsigned$J$J', function (x, y) {
return C$.compare$J$J(Long.$add(x,[0,549755813888,-1]), Long.$add(y,[0,549755813888,-1]));
}, 1);

Clazz.newMeth(C$, 'divideUnsigned$J$J', function (dividend, divisor) {
if (Long.$lt(divisor,0 )) {
return (C$.compareUnsigned$J$J(dividend, divisor)) < 0 ? 0 : 1;
}if (Long.$gt(dividend,0 )) return Long.$div(dividend,divisor);
 else {
return C$.toUnsignedBigInteger$J(dividend).divide$java_math_BigInteger(C$.toUnsignedBigInteger$J(divisor)).longValue$();
}}, 1);

Clazz.newMeth(C$, 'remainderUnsigned$J$J', function (dividend, divisor) {
if (Long.$gt(dividend,0 ) && Long.$gt(divisor,0 ) ) {
return Long.$mod(dividend,divisor);
} else {
if (C$.compareUnsigned$J$J(dividend, divisor) < 0) return dividend;
 else return C$.toUnsignedBigInteger$J(dividend).remainder$java_math_BigInteger(C$.toUnsignedBigInteger$J(divisor)).longValue$();
}}, 1);

Clazz.newMeth(C$, 'highestOneBit$J', function (i) {
(i=Long.$or(i,((Long.$sr(i,1)))));
(i=Long.$or(i,((Long.$sr(i,2)))));
(i=Long.$or(i,((Long.$sr(i,4)))));
(i=Long.$or(i,((Long.$sr(i,8)))));
(i=Long.$or(i,((Long.$sr(i,16)))));
(i=Long.$or(i,((Long.$sr(i,32)))));
return Long.$sub(i,(Long.$usr(i,1)));
}, 1);

Clazz.newMeth(C$, 'lowestOneBit$J', function (i) {
return Long.$and(i,(Long.$neg(i)));
}, 1);

Clazz.newMeth(C$, 'numberOfLeadingZeros$J', function (i) {
if (Long.$eq(i,0 )) return 64;
var n=1;
var x=Long.$ival((Long.$usr(i,32)));
if (x == 0) {
n+=32;
x=Long.$ival(i);
}if (x >>> 16 == 0) {
n+=16;
x<<=16;
}if (x >>> 24 == 0) {
n+=8;
x<<=8;
}if (x >>> 28 == 0) {
n+=4;
x<<=4;
}if (x >>> 30 == 0) {
n+=2;
x<<=2;
}n-=x >>> 31;
return n;
}, 1);

Clazz.newMeth(C$, 'numberOfTrailingZeros$J', function (i) {
var x;
var y;
if (Long.$eq(i,0 )) return 64;
var n=63;
y=Long.$ival(i);
if (y != 0) {
n=n - 32;
x=y;
} else x=Long.$ival((Long.$usr(i,32)));
y=x << 16;
if (y != 0) {
n=n - 16;
x=y;
}y=x << 8;
if (y != 0) {
n=n - 8;
x=y;
}y=x << 4;
if (y != 0) {
n=n - 4;
x=y;
}y=x << 2;
if (y != 0) {
n=n - 2;
x=y;
}return n - ((x << 1) >>> 31);
}, 1);

Clazz.newMeth(C$, 'bitCount$J', function (i) {
i=Long.$sub(i,(Long.$and((Long.$usr(i,1)),[5592405,366503875925,1])));
i=Long.$add((Long.$and(i,[3355443,219902325555,1])),(Long.$and((Long.$usr(i,2)),[3355443,219902325555,1])));
i=Long.$and((Long.$add(i,(Long.$usr(i,4)))),[986895,64677154575,1]);
i=Long.$add(i,(Long.$usr(i,8)));
i=Long.$add(i,(Long.$usr(i,16)));
i=Long.$add(i,(Long.$usr(i,32)));
return Long.$ival(i) & 127;
}, 1);

Clazz.newMeth(C$, 'rotateLeft$J$I', function (i, distance) {
return Long.$or((Long.$sl(i,distance)),(Long.$usr(i,-distance)));
}, 1);

Clazz.newMeth(C$, 'rotateRight$J$I', function (i, distance) {
return Long.$or((Long.$usr(i,distance)),(Long.$sl(i,-distance)));
}, 1);

Clazz.newMeth(C$, 'reverse$J', function (i) {
i=Long.$or(Long.$sl((Long.$and(i,[5592405,366503875925,1])),1),Long.$and((Long.$usr(i,1)),[5592405,366503875925,1]));
i=Long.$or(Long.$sl((Long.$and(i,[3355443,219902325555,1])),2),Long.$and((Long.$usr(i,2)),[3355443,219902325555,1]));
i=Long.$or(Long.$sl((Long.$and(i,[986895,64677154575,1])),4),Long.$and((Long.$usr(i,4)),[986895,64677154575,1]));
i=Long.$or(Long.$sl((Long.$and(i,[16711935,4278255360,1])),8),Long.$and((Long.$usr(i,8)),[16711935,4278255360,1]));
i=Long.$or((Long.$sl(i,48)),(Long.$sl((Long.$and(i,4294901760)),16)) , (Long.$and((Long.$usr(i,16)),4294901760)) , (Long.$usr(i,48)) );
return i;
}, 1);

Clazz.newMeth(C$, 'signum$J', function (i) {
return Long.$ival((Long.$or((Long.$sr(i,63)),(Long.$usr((Long.$neg(i)),63)))));
}, 1);

Clazz.newMeth(C$, 'reverseBytes$J', function (i) {
i=Long.$or(Long.$sl((Long.$and(i,[16711935,4278255360,1])),8),Long.$and((Long.$usr(i,8)),[16711935,4278255360,1]));
return Long.$or((Long.$sl(i,48)),(Long.$sl((Long.$and(i,4294901760)),16)) , (Long.$and((Long.$usr(i,16)),4294901760)) , (Long.$usr(i,48)) );
}, 1);

Clazz.newMeth(C$, 'sum$J$J', function (a, b) {
return Long.$add(a,b);
}, 1);

Clazz.newMeth(C$, 'max$J$J', function (a, b) {
return Math.max(a, b);
}, 1);

Clazz.newMeth(C$, 'min$J$J', function (a, b) {
return Math.min(a, b);
}, 1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
C$.$getAnn$ = function(){ return [
[['MIN_VALUE','long',null,['java.lang.annotation.Native']],['']],
  [['MAX_VALUE','.',null,['java.lang.annotation.Native']],['']],
  [['SIZE','int',null,['java.lang.annotation.Native']],['']],
  [['serialVersionUID','long',null,['java.lang.annotation.Native']],['']],
  [['null','Long.LongCache'],['!XmlInner']],
  [['value','long'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Long, "LongCache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['cache','Long[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.cache=Clazz.array(Long, [256]);
{
for (var i=0; i < C$.cache.length; i++) C$.cache[i]= new Long(i - 128);

};
};
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.10-v1');//Created 2020-12-30 21:58:25 Java2ScriptVisitor version 3.2.10-v1 net.sf.j2s.core.jar version 3.2.10-v1
