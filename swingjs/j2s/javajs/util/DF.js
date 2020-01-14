(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'Boolean','javajs.util.PT','javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DF");
C$.formattingStrings=null;
C$.formatAdds=null;
C$.useNumberLocalization=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.formattingStrings=Clazz.array(String, -1, ["0", "0.0", "0.00", "0.000", "0.0000", "0.00000", "0.000000", "0.0000000", "0.00000000", "0.000000000"]);
C$.formatAdds=Clazz.array(Float.TYPE, -1, [0.5, 0.05, 0.005, 5.0E-4, 5.0E-5, 5.0E-6, 5.0E-7, 5.0E-8, 5.0E-9, 5.0E-10]);
C$.useNumberLocalization=Clazz.array($I$(1), -1, [$I$(1).TRUE]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setUseNumberLocalization$Z', function (TF) {
C$.useNumberLocalization[0]=(TF ? $I$(1).TRUE : $I$(1).FALSE);
}, 1);

Clazz.newMeth(C$, 'formatDecimalDbl$D$I', function (value, decimalDigits) {
if (decimalDigits == 2147483647 || value == -Infinity   || value == Infinity   || Double.isNaN$D(value) ) return "" + new Double(value).toString();
return C$.formatDecimal$F$I(value, decimalDigits);
}, 1);

Clazz.newMeth(C$, 'formatDecimal$F$I', function (value, decimalDigits) {
if (decimalDigits == 2147483647 || value == -Infinity   || value == Infinity   || Float.isNaN$F(value) ) return "" + new Float(value).toString();
var n;
if (decimalDigits < 0) {
decimalDigits=-decimalDigits;
if (decimalDigits > C$.formattingStrings.length) decimalDigits=C$.formattingStrings.length;
if (value == 0 ) return C$.formattingStrings[decimalDigits - 1] + "E+0";
n=0;
var d;
if (Math.abs(value) < 1 ) {
n=10;
d=value * 1.0E-10;
} else {
n=-10;
d=value * 1.0E10;
}var s=("" + new Double(d).toString()).toUpperCase$();
var i=s.indexOf$S("E");
n=$I$(2).parseInt$S(s.substring$I(i + 1)) + n;
var sf;
if (i < 0) {
sf="" + new Float(value).toString();
} else {
var f=$I$(2).parseFloat$S(s.substring$I$I(0, i));
if (f == 10  || f == -10  ) {
f /= 10;
n+=(n < 0 ? 1 : -1);
}sf=C$.formatDecimal$F$I(f, decimalDigits - 1);
}return sf + "E" + (n >= 0 ? "+" : "") + n ;
}if (decimalDigits >= C$.formattingStrings.length) decimalDigits=C$.formattingStrings.length - 1;
var s1=("" + new Float(value).toString()).toUpperCase$();
var pt=s1.indexOf$S(".");
if (pt < 0) return s1 + C$.formattingStrings[decimalDigits].substring$I(1);
var isNeg=s1.startsWith$S("-");
if (isNeg) {
s1=s1.substring$I(1);
pt--;
}var pt1=s1.indexOf$S("E-");
if (pt1 > 0) {
n=$I$(2).parseInt$S(s1.substring$I(pt1 + 1));
s1="0." + "0000000000000000000000000000000000000000".substring$I$I(0, -n - 1) + s1.substring$I$I(0, 1) + s1.substring$I$I(2, pt1) ;
pt=1;
}pt1=s1.indexOf$S("E");
if (pt1 > 0) {
n=$I$(2).parseInt$S(s1.substring$I(pt1 + 1));
s1=s1.substring$I$I(0, 1) + s1.substring$I$I(2, pt1) + "0000000000000000000000000000000000000000" ;
s1=s1.substring$I$I(0, n + 1) + "." + s1.substring$I(n + 1) ;
pt=s1.indexOf$S(".");
}var len=s1.length$();
var pt2=decimalDigits + pt + 1 ;
if (pt2 < len && s1.charAt$I(pt2) >= "5" ) {
return C$.formatDecimal$F$I(value + (isNeg ? -1 : 1) * C$.formatAdds[decimalDigits], decimalDigits);
}var sb=$I$(3).newS$S(s1.substring$I$I(0, (decimalDigits == 0 ? pt : ++pt)));
for (var i=0; i < decimalDigits; i++, pt++) {
if (pt < len) sb.appendC$C(s1.charAt$I(pt));
 else sb.appendC$C("0");
}
s1=(isNeg ? "-" : "") + sb;
return ($I$(1).TRUE.equals$O(C$.useNumberLocalization[0]) ? s1 : s1.replace$C$C(",", "."));
}, 1);

Clazz.newMeth(C$, 'formatDecimalTrimmed$D$I', function (x, precision) {
var str=C$.formatDecimalDbl$D$I(x, precision);
var m=str.length$() - 1;
var zero="0";
while (m >= 0 && str.charAt$I(m) == zero )m--;

return str.substring$I$I(0, m + 1);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
