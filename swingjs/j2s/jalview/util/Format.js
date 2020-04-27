(function(){var P$=Clazz.newPackage("jalview.util"),p$1={},I$=[[0,'java.util.Arrays']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Format");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['leading_zeroes','show_plus','alternate','show_space','left_align'],'C',['fmt'],'I',['width','precision'],'S',['pre','post','formatString']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.$init$.apply(this);
this.formatString=s;
this.width=0;
this.precision=-1;
this.pre="";
this.post="";
this.leading_zeroes=false;
this.show_plus=false;
this.alternate=false;
this.show_space=false;
this.left_align=false;
this.fmt=" ";
var length=s.length$();
var parse_state=0;
var i=0;
while (parse_state == 0){
if (i >= length) {
parse_state=5;
} else if (s.charAt$I(i) == "%") {
if (i < (length - 1)) {
if (s.charAt$I(i + 1) == "%") {
this.pre=this.pre + '%';
i++;
} else {
parse_state=1;
}} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}} else {
this.pre=this.pre + s.charAt$I(i);
}i++;
}
while (parse_state == 1){
if (i >= length) {
parse_state=5;
} else if (s.charAt$I(i) == " ") {
this.show_space=true;
} else if (s.charAt$I(i) == "-") {
this.left_align=true;
} else if (s.charAt$I(i) == "+") {
this.show_plus=true;
} else if (s.charAt$I(i) == "0") {
this.leading_zeroes=true;
} else if (s.charAt$I(i) == "#") {
this.alternate=true;
} else {
parse_state=2;
i--;
}i++;
}
while (parse_state == 2){
if (i >= length) {
parse_state=5;
} else if (("0" <= s.charAt$I(i)) && (s.charAt$I(i) <= "9") ) {
this.width=((this.width * 10) + (s.charCodeAt$I(i))) - 48;
i++;
} else if (s.charAt$I(i) == ".") {
parse_state=3;
this.precision=0;
i++;
} else {
parse_state=4;
}}
while (parse_state == 3){
if (i >= length) {
parse_state=5;
} else if (("0" <= s.charAt$I(i)) && (s.charAt$I(i) <= "9") ) {
this.precision=((this.precision * 10) + (s.charCodeAt$I(i))) - 48;
i++;
} else {
parse_state=4;
}}
if (parse_state == 4) {
if (i >= length) {
parse_state=5;
} else {
this.fmt=s.charAt$I(i);
}i++;
}if (i < length) {
this.post=s.substring$I$I(i, length);
}}, 1);

Clazz.newMeth(C$, 'getHexString$java_awt_Color', function (color) {
var r;
var g;
var b;
r=Integer.toHexString$I(color.getRed$());
if (r.length$() < 2) {
r="0" + r;
}g=Integer.toHexString$I(color.getGreen$());
if (g.length$() < 2) {
g="0" + g;
}b=Integer.toHexString$I(color.getBlue$());
if (b.length$() < 2) {
b="0" + b;
}return r + g + b ;
}, 1);

Clazz.newMeth(C$, 'print$java_io_PrintStream$S$D', function (s, fmt, x) {
s.print$S(Clazz.new_(C$.c$$S,[fmt]).form$D(x));
}, 1);

Clazz.newMeth(C$, 'print$java_io_PrintStream$S$J', function (s, fmt, x) {
s.print$S(Clazz.new_(C$.c$$S,[fmt]).form$J(x));
}, 1);

Clazz.newMeth(C$, 'print$java_io_PrintStream$S$C', function (s, fmt, x) {
s.print$S(Clazz.new_(C$.c$$S,[fmt]).form$C(x));
}, 1);

Clazz.newMeth(C$, 'print$java_io_PrintStream$S$S', function (s, fmt, x) {
s.print$S(Clazz.new_(C$.c$$S,[fmt]).form$S(x));
}, 1);

Clazz.newMeth(C$, 'atoi$S', function (s) {
return (C$.atol$S(s)|0);
}, 1);

Clazz.newMeth(C$, 'atol$S', function (s) {
var i=0;
while ((i < s.length$()) && Character.isWhitespace$C(s.charAt$I(i)) ){
i++;
}
if ((i < s.length$()) && (s.charAt$I(i) == "0") ) {
if (((i + 1) < s.length$()) && ((s.charAt$I(i + 1) == "x") || (s.charAt$I(i + 1) == "X") ) ) {
return C$.parseLong$S$I(s.substring$I(i + 2), 16);
} else {
return C$.parseLong$S$I(s, 8);
}} else {
return C$.parseLong$S$I(s, 10);
}}, 1);

Clazz.newMeth(C$, 'parseLong$S$I', function (s, base) {
var i=0;
var sign=1;
var r=0;
while ((i < s.length$()) && Character.isWhitespace$C(s.charAt$I(i)) ){
i++;
}
if ((i < s.length$()) && (s.charAt$I(i) == "-") ) {
sign=-1;
i++;
} else if ((i < s.length$()) && (s.charAt$I(i) == "+") ) {
i++;
}while (i < s.length$()){
var ch=s.charAt$I(i);
if (("0" <= ch) && (ch.$c() < (48 + base) ) ) {
r=((r * base) + ch.$c()) - 48;
} else if (("A" <= ch) && (ch.$c() < ((65 + base) - 10) ) ) {
r=((r * base) + ch.$c()) - 65 + 10;
} else if (("a" <= ch) && (ch.$c() < ((97 + base) - 10) ) ) {
r=((r * base) + ch.$c()) - 97 + 10;
} else {
return r * sign;
}i++;
}
return r * sign;
}, 1);

Clazz.newMeth(C$, 'atof$S', function (s) {
var i=0;
var sign=1;
var r=0;
var p=1;
var state=0;
while ((i < s.length$()) && Character.isWhitespace$C(s.charAt$I(i)) ){
i++;
}
if ((i < s.length$()) && (s.charAt$I(i) == "-") ) {
sign=-1;
i++;
} else if ((i < s.length$()) && (s.charAt$I(i) == "+") ) {
i++;
}while (i < s.length$()){
var ch=s.charAt$I(i);
if (("0" <= ch) && (ch <= "9") ) {
if (state == 0) {
r=((r * 10) + ch.$c()) - 48;
} else if (state == 1) {
p=p / 10;
r=r + (p * (ch.$c() - 48));
}} else if (ch == ".") {
if (state == 0) {
state=1;
} else {
return sign * r;
}} else if ((ch == "e") || (ch == "E") ) {
var e=(C$.parseLong$S$I(s.substring$I(i + 1), 10)|0);
return sign * r * Math.pow(10, e) ;
} else {
return sign * r;
}i++;
}
return sign * r;
}, 1);

Clazz.newMeth(C$, 'form$D', function (x) {
var r;
if (this.precision < 0) {
this.precision=6;
}var s=1;
if (x < 0 ) {
x=-x;
s=-1;
}if (this.fmt == "f") {
r=p$1.fixed_format$D.apply(this, [x]);
} else if ((this.fmt == "e") || (this.fmt == "E") || (this.fmt == "g") || (this.fmt == "G")  ) {
r=p$1.exp_format$D.apply(this, [x]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return p$1.pad$S.apply(this, [p$1.sign$I$S.apply(this, [s, r])]);
});

Clazz.newMeth(C$, 'form$J', function (x) {
var r;
var s=0;
if ((this.fmt == "d") || (this.fmt == "i") ) {
if (x < 0) {
r=("" + x).substring$I(1);
s=-1;
} else {
r="" + x;
s=1;
}} else if (this.fmt == "o") {
r=C$.convert$J$I$I$S(x, 3, 7, "01234567");
} else if (this.fmt == "x") {
r=C$.convert$J$I$I$S(x, 4, 15, "0123456789abcdef");
} else if (this.fmt == "X") {
r=C$.convert$J$I$I$S(x, 4, 15, "0123456789ABCDEF");
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return p$1.pad$S.apply(this, [p$1.sign$I$S.apply(this, [s, r])]);
});

Clazz.newMeth(C$, 'form$C', function (c) {
if (this.fmt != "c") {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}var r="" + c;
return p$1.pad$S.apply(this, [r]);
});

Clazz.newMeth(C$, 'form$S', function (s) {
if (this.fmt != "s") {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (this.precision >= 0) {
s=s.substring$I$I(0, this.precision);
}return p$1.pad$S.apply(this, [s]);
});

Clazz.newMeth(C$, 'repeat$C$I', function (c, n) {
if (n <= 0) {
return "";
}var chars=Clazz.array(Character.TYPE, [n]);
$I$(1).fill$CA$C(chars, c);
return  String.instantialize(chars);
}, 1);

Clazz.newMeth(C$, 'convert$J$I$I$S', function (x, n, m, d) {
if (x == 0) {
return "0";
}var r="";
while (x != 0){
r=d.charAt$I(((x & m)|0)) + r;
x=x >>> n;
}
return r;
}, 1);

Clazz.newMeth(C$, 'pad$S', function (r) {
var p=C$.repeat$C$I(" ", this.width - r.length$());
if (this.left_align) {
return this.pre + r + p + this.post ;
} else {
return this.pre + p + r + this.post ;
}}, p$1);

Clazz.newMeth(C$, 'sign$I$S', function (s, r) {
var p="";
if (s < 0) {
p="-";
} else if (s > 0) {
if (this.show_plus) {
p="+";
} else if (this.show_space) {
p=" ";
}} else {
if ((this.fmt == "o") && this.alternate && (r.length$() > 0) && (r.charAt$I(0) != "0")  ) {
p="0";
} else if ((this.fmt == "x") && this.alternate ) {
p="0x";
} else if ((this.fmt == "X") && this.alternate ) {
p="0X";
}}var w=0;
if (this.leading_zeroes) {
w=this.width;
} else if (((this.fmt == "d") || (this.fmt == "i") || (this.fmt == "x") || (this.fmt == "X") || (this.fmt == "o")  ) && (this.precision > 0) ) {
w=this.precision;
}return p + C$.repeat$C$I("0", w - p.length$() - r.length$() ) + r ;
}, p$1);

Clazz.newMeth(C$, 'fixed_format$D', function (d) {
var removeTrailing=((this.fmt == "G") || (this.fmt == "g") ) && !this.alternate ;
if (d > 9223372036854775807 ) {
return p$1.exp_format$D.apply(this, [d]);
}if (this.precision == 0) {
return ((d + 0.5)|0) + (removeTrailing ? "" : ".");
}var whole=(d|0);
var fr=d - whole;
if ((fr >= 1 ) || (fr < 0 ) ) {
return p$1.exp_format$D.apply(this, [d]);
}var factor=1;
var leading_zeroes="";
for (var i=1; (i <= this.precision) && (factor <= 9223372036854775807 ) ; i++) {
factor *= 10;
leading_zeroes=leading_zeroes + "0";
}
var l=(((factor * fr) + 0.5)|0);
if (l >= factor ) {
l=0;
whole++;
}var z=leading_zeroes + l;
z="." + z.substring$I$I(z.length$() - this.precision, z.length$());
if (removeTrailing) {
var t=z.length$() - 1;
while ((t >= 0) && (z.charAt$I(t) == "0") ){
t--;
}
if ((t >= 0) && (z.charAt$I(t) == ".") ) {
t--;
}z=z.substring$I$I(0, t + 1);
}return whole + z;
}, p$1);

Clazz.newMeth(C$, 'exp_format$D', function (d) {
var f="";
var e=0;
var dd=d;
if (d != 0 ) {
while (dd > 10 ){
e++;
dd=dd / 10;
}
while (dd < 1 ){
e--;
dd=dd * 10;
}
}if (((this.fmt == "g") || (this.fmt == "G") ) && (e >= -4) && (e < this.precision)  ) {
return p$1.fixed_format$D.apply(this, [d]);
}f=f + p$1.fixed_format$D.apply(this, [dd]);
if ((this.fmt == "e") || (this.fmt == "g") ) {
f=f + "e";
} else {
f=f + "E";
}var p="000";
if (e >= 0) {
f=f + "+";
p=p + e;
} else {
f=f + "-";
p=p + (-e);
}return f + p.substring$I$I(p.length$() - 3, p.length$());
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.formatString;
});

Clazz.newMeth(C$, 'appendPercentage$StringBuilder$F$I', function (sb, value, dp) {
var d=value;
var factor=1;
for (var i=0; i < dp; i++) {
factor*=10;
}
d *= factor;
d += 0.5;
value=(d / factor);
sb.append$J((value|0));
if (dp > 0) {
sb.append$S(".");
while (dp > 0){
value=value - (value|0);
value *= 10;
sb.append$I((value|0));
dp--;
}
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
