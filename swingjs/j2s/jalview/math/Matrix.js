(function(){var P$=Clazz.newPackage("jalview.math"),I$=[[0,'jalview.util.Format','java.util.Arrays','jalview.util.MessageManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Matrix", null, null, 'jalview.math.MatrixI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['rows','cols'],'O',['value','double[][]','d','double[]','+e']]]

Clazz.newMeth(C$, 'c$$I$I',  function (rowCount, colCount) {
;C$.$init$.apply(this);
this.rows=rowCount;
this.cols=colCount;
}, 1);

Clazz.newMeth(C$, 'c$$DAA',  function (values) {
;C$.$init$.apply(this);
this.rows=values.length;
this.cols=this.rows == 0 ? 0 : values[0].length;
this.value=Clazz.array(Double.TYPE, [this.rows, null]);
var i=0;
for (var row, $row = 0, $$row = values; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
if (row != null ) {
this.value[i]=Clazz.array(Double.TYPE, [row.length]);
System.arraycopy$O$I$O$I$I(row, 0, this.value[i], 0, row.length);
}++i;
}
}, 1);

Clazz.newMeth(C$, 'transpose$',  function () {
var out=Clazz.array(Double.TYPE, [this.cols, this.rows]);
for (var i=0; i < this.cols; i++) {
for (var j=0; j < this.rows; j++) {
out[i][j]=this.value[j][i];
}
}
return Clazz.new_(C$.c$$DAA,[out]);
});

Clazz.newMeth(C$, 'print$java_io_PrintStream$S',  function (ps, format) {
for (var i=0; i < this.rows; i++) {
for (var j=0; j < this.cols; j++) {
$I$(1,"print$java_io_PrintStream$S$D",[ps, format, this.getValue$I$I(i, j)]);
}
ps.println$();
}
});

Clazz.newMeth(C$, 'preMultiply$jalview_math_MatrixI',  function ($in) {
if ($in.width$() != this.rows) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can't pre-multiply " + this.rows + " rows by " + $in.width$() + " columns" ]);
}var tmp=Clazz.array(Double.TYPE, [$in.height$(), this.cols]);
for (var i=0; i < $in.height$(); i++) {
for (var j=0; j < this.cols; j++) {
for (var k=0; k < $in.width$(); k++) {
tmp[i][j]+=($in.getValue$I$I(i, k) * this.value[k][j]);
}
}
}
return Clazz.new_(C$.c$$DAA,[tmp]);
});

Clazz.newMeth(C$, 'vectorPostMultiply$DA',  function ($in) {
var out=Clazz.array(Double.TYPE, [$in.length]);
for (var i=0; i < $in.length; i++) {
out[i]=0.0;
for (var k=0; k < $in.length; k++) {
out[i]+=(this.value[i][k] * $in[k]);
}
}
return out;
});

Clazz.newMeth(C$, 'postMultiply$jalview_math_MatrixI',  function ($in) {
if ($in.height$() != this.cols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can't post-multiply " + this.cols + " columns by " + $in.height$() + " rows" ]);
}return $in.preMultiply$jalview_math_MatrixI(this);
});

Clazz.newMeth(C$, 'copy$',  function () {
var newmat=Clazz.array(Double.TYPE, [this.rows, this.cols]);
for (var i=0; i < this.rows; i++) {
System.arraycopy$O$I$O$I$I(this.value[i], 0, newmat[i], 0, this.value[i].length);
}
var m=Clazz.new_(C$.c$$DAA,[newmat]);
if (this.d != null ) {
m.d=$I$(2).copyOf$DA$I(this.d, this.d.length);
}if (this.e != null ) {
m.e=$I$(2).copyOf$DA$I(this.e, this.e.length);
}return m;
});

Clazz.newMeth(C$, 'tred$',  function () {
var n=this.rows;
var k;
var j;
var i;
var scale;
var hh;
var h;
var g;
var f;
this.d=Clazz.array(Double.TYPE, [this.rows]);
this.e=Clazz.array(Double.TYPE, [this.rows]);
for (i=n; i >= 2; i--) {
var l=i - 1;
h=0.0;
scale=0.0;
if (l > 1) {
for (k=1; k <= l; k++) {
var v=Math.abs(this.getValue$I$I(i - 1, k - 1));
scale+=v;
}
if (scale == 0.0 ) {
this.e[i - 1]=this.getValue$I$I(i - 1, l - 1);
} else {
for (k=1; k <= l; k++) {
var v=this.divideValue$I$I$D(i - 1, k - 1, scale);
h+=v * v;
}
f=this.getValue$I$I(i - 1, l - 1);
if (f > 0 ) {
g=-1.0 * Math.sqrt(h);
} else {
g=Math.sqrt(h);
}this.e[i - 1]=scale * g;
h-=(f * g);
this.setValue$I$I$D(i - 1, l - 1, f - g);
f=0.0;
for (j=1; j <= l; j++) {
var val=this.getValue$I$I(i - 1, j - 1) / h;
this.setValue$I$I$D(j - 1, i - 1, val);
g=0.0;
for (k=1; k <= j; k++) {
g+=(this.getValue$I$I(j - 1, k - 1) * this.getValue$I$I(i - 1, k - 1));
}
for (k=j + 1; k <= l; k++) {
g+=(this.getValue$I$I(k - 1, j - 1) * this.getValue$I$I(i - 1, k - 1));
}
this.e[j - 1]=g / h;
f+=(this.e[j - 1] * this.getValue$I$I(i - 1, j - 1));
}
hh=f / (h + h);
for (j=1; j <= l; j++) {
f=this.getValue$I$I(i - 1, j - 1);
g=this.e[j - 1] - (hh * f);
this.e[j - 1]=g;
for (k=1; k <= j; k++) {
var val=(f * this.e[k - 1]) + (g * this.getValue$I$I(i - 1, k - 1));
this.addValue$I$I$D(j - 1, k - 1, -val);
}
}
}} else {
this.e[i - 1]=this.getValue$I$I(i - 1, l - 1);
}this.d[i - 1]=h;
}
this.d[0]=0.0;
this.e[0]=0.0;
for (i=1; i <= n; i++) {
var l=i - 1;
if (this.d[i - 1] != 0.0 ) {
for (j=1; j <= l; j++) {
g=0.0;
for (k=1; k <= l; k++) {
g+=(this.getValue$I$I(i - 1, k - 1) * this.getValue$I$I(k - 1, j - 1));
}
for (k=1; k <= l; k++) {
this.addValue$I$I$D(k - 1, j - 1, -(g * this.getValue$I$I(k - 1, i - 1)));
}
}
}this.d[i - 1]=this.getValue$I$I(i - 1, i - 1);
this.setValue$I$I$D(i - 1, i - 1, 1.0);
for (j=1; j <= l; j++) {
this.setValue$I$I$D(j - 1, i - 1, 0.0);
this.setValue$I$I$D(i - 1, j - 1, 0.0);
}
}
});

Clazz.newMeth(C$, 'addValue$I$I$D',  function (i, j, f) {
var v=this.value[i][j] + f;
this.value[i][j]=v;
return v;
});

Clazz.newMeth(C$, 'divideValue$I$I$D',  function (i, j, divisor) {
if (divisor == 0.0 ) {
return this.getValue$I$I(i, j);
}var v=this.value[i][j];
v=v / divisor;
this.value[i][j]=v;
return v;
});

Clazz.newMeth(C$, 'tqli$',  function () {
var n=this.rows;
var m;
var l;
var iter;
var i;
var k;
var s;
var r;
var p;
var g;
var f;
var dd;
var c;
var b;
for (i=2; i <= n; i++) {
this.e[i - 2]=this.e[i - 1];
}
this.e[n - 1]=0.0;
for (l=1; l <= n; l++) {
iter=0;
do {
for (m=l; m <= (n - 1); m++) {
dd=Math.abs(this.d[m - 1]) + Math.abs(this.d[m]);
if ((Math.abs(this.e[m - 1]) + dd) == dd ) {
break;
}}
if (m != l) {
++iter;
if (iter == 45) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(3,"formatMessage$S$SA",["exception.matrix_too_many_iteration", Clazz.array(String, -1, ["tqli", Integer.valueOf$I(45).toString()])])]);
} else {
}g=(this.d[l] - this.d[l - 1]) / (2.0 * this.e[l - 1]);
r=Math.sqrt((g * g) + 1.0);
g=this.d[m - 1] - this.d[l - 1] + (this.e[l - 1] / (g + C$.sign$D$D(r, g)));
c=1.0;
s=c;
p=0.0;
for (i=m - 1; i >= l; i--) {
f=s * this.e[i - 1];
b=c * this.e[i - 1];
if (Math.abs(f) >= Math.abs(g) ) {
c=g / f;
r=Math.sqrt((c * c) + 1.0);
this.e[i]=f * r;
s=1.0 / r;
c*=s;
} else {
s=f / g;
r=Math.sqrt((s * s) + 1.0);
this.e[i]=g * r;
c=1.0 / r;
s*=c;
}g=this.d[i] - p;
r=((this.d[i - 1] - g) * s) + (2.0 * c * b );
p=s * r;
this.d[i]=g + p;
g=(c * r) - b;
for (k=1; k <= n; k++) {
f=this.getValue$I$I(k - 1, i);
this.setValue$I$I$D(k - 1, i, (s * this.getValue$I$I(k - 1, i - 1)) + (c * f));
this.setValue$I$I$D(k - 1, i - 1, (c * this.getValue$I$I(k - 1, i - 1)) - (s * f));
}
}
this.d[l - 1]=this.d[l - 1] - p;
this.e[l - 1]=g;
this.e[m - 1]=0.0;
}} while (m != l);
}
});

Clazz.newMeth(C$, 'getValue$I$I',  function (i, j) {
return this.value[i][j];
});

Clazz.newMeth(C$, 'setValue$I$I$D',  function (i, j, val) {
this.value[i][j]=val;
});

Clazz.newMeth(C$, 'tred2$',  function () {
var n=this.rows;
var l;
var k;
var j;
var i;
var scale;
var hh;
var h;
var g;
var f;
this.d=Clazz.array(Double.TYPE, [this.rows]);
this.e=Clazz.array(Double.TYPE, [this.rows]);
for (i=n - 1; i >= 1; i--) {
l=i - 1;
h=0.0;
scale=0.0;
if (l > 0) {
for (k=0; k < l; k++) {
scale+=Math.abs(this.value[i][k]);
}
if (scale == 0.0 ) {
this.e[i]=this.value[i][l];
} else {
for (k=0; k < l; k++) {
this.value[i][k]/=scale;
h+=(this.value[i][k] * this.value[i][k]);
}
f=this.value[i][l];
if (f > 0 ) {
g=-1.0 * Math.sqrt(h);
} else {
g=Math.sqrt(h);
}this.e[i]=scale * g;
h-=(f * g);
this.value[i][l]=f - g;
f=0.0;
for (j=0; j < l; j++) {
this.value[j][i]=this.value[i][j] / h;
g=0.0;
for (k=0; k < j; k++) {
g+=(this.value[j][k] * this.value[i][k]);
}
for (k=j; k < l; k++) {
g+=(this.value[k][j] * this.value[i][k]);
}
this.e[j]=g / h;
f+=(this.e[j] * this.value[i][j]);
}
hh=f / (h + h);
for (j=0; j < l; j++) {
f=this.value[i][j];
g=this.e[j] - (hh * f);
this.e[j]=g;
for (k=0; k < j; k++) {
this.value[j][k]-=((f * this.e[k]) + (g * this.value[i][k]));
}
}
}} else {
this.e[i]=this.value[i][l];
}this.d[i]=h;
}
this.d[0]=0.0;
this.e[0]=0.0;
for (i=0; i < n; i++) {
l=i - 1;
if (this.d[i] != 0.0 ) {
for (j=0; j < l; j++) {
g=0.0;
for (k=0; k < l; k++) {
g+=(this.value[i][k] * this.value[k][j]);
}
for (k=0; k < l; k++) {
this.value[k][j]-=(g * this.value[k][i]);
}
}
}this.d[i]=this.value[i][i];
this.value[i][i]=1.0;
for (j=0; j < l; j++) {
this.value[j][i]=0.0;
this.value[i][j]=0.0;
}
}
});

Clazz.newMeth(C$, 'tqli2$',  function () {
var n=this.rows;
var m;
var l;
var iter;
var i;
var k;
var s;
var r;
var p;
;var g;
var f;
var dd;
var c;
var b;
for (i=2; i <= n; i++) {
this.e[i - 2]=this.e[i - 1];
}
this.e[n - 1]=0.0;
for (l=1; l <= n; l++) {
iter=0;
do {
for (m=l; m <= (n - 1); m++) {
dd=Math.abs(this.d[m - 1]) + Math.abs(this.d[m]);
if ((Math.abs(this.e[m - 1]) + dd) == dd ) {
break;
}}
if (m != l) {
++iter;
if (iter == 45) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(3,"formatMessage$S$SA",["exception.matrix_too_many_iteration", Clazz.array(String, -1, ["tqli2", Integer.valueOf$I(45).toString()])])]);
} else {
}g=(this.d[l] - this.d[l - 1]) / (2.0 * this.e[l - 1]);
r=Math.sqrt((g * g) + 1.0);
g=this.d[m - 1] - this.d[l - 1] + (this.e[l - 1] / (g + C$.sign$D$D(r, g)));
c=1.0;
s=c;
p=0.0;
for (i=m - 1; i >= l; i--) {
f=s * this.e[i - 1];
b=c * this.e[i - 1];
if (Math.abs(f) >= Math.abs(g) ) {
c=g / f;
r=Math.sqrt((c * c) + 1.0);
this.e[i]=f * r;
s=1.0 / r;
c*=s;
} else {
s=f / g;
r=Math.sqrt((s * s) + 1.0);
this.e[i]=g * r;
c=1.0 / r;
s*=c;
}g=this.d[i] - p;
r=((this.d[i - 1] - g) * s) + (2.0 * c * b );
p=s * r;
this.d[i]=g + p;
g=(c * r) - b;
for (k=1; k <= n; k++) {
f=this.value[k - 1][i];
this.value[k - 1][i]=(s * this.value[k - 1][i - 1]) + (c * f);
this.value[k - 1][i - 1]=(c * this.value[k - 1][i - 1]) - (s * f);
}
}
this.d[l - 1]=this.d[l - 1] - p;
this.e[l - 1]=g;
this.e[m - 1]=0.0;
}} while (m != l);
}
});

Clazz.newMeth(C$, 'sign$D$D',  function (a, b) {
if (b < 0 ) {
return -Math.abs(a);
} else {
return Math.abs(a);
}}, 1);

Clazz.newMeth(C$, 'getColumn$I',  function (col) {
var out=Clazz.array(Double.TYPE, [this.rows]);
for (var i=0; i < this.rows; i++) {
out[i]=this.value[i][col];
}
return out;
});

Clazz.newMeth(C$, 'printD$java_io_PrintStream$S',  function (ps, format) {
for (var j=0; j < this.rows; j++) {
$I$(1).print$java_io_PrintStream$S$D(ps, format, this.d[j]);
}
});

Clazz.newMeth(C$, 'printE$java_io_PrintStream$S',  function (ps, format) {
for (var j=0; j < this.rows; j++) {
$I$(1).print$java_io_PrintStream$S$D(ps, format, this.e[j]);
}
});

Clazz.newMeth(C$, 'getD$',  function () {
return this.d;
});

Clazz.newMeth(C$, 'getE$',  function () {
return this.e;
});

Clazz.newMeth(C$, 'height$',  function () {
return this.rows;
});

Clazz.newMeth(C$, 'width$',  function () {
return this.cols;
});

Clazz.newMeth(C$, 'getRow$I',  function (i) {
var row=Clazz.array(Double.TYPE, [this.cols]);
System.arraycopy$O$I$O$I$I(this.value[i], 0, row, 0, this.cols);
return row;
});

Clazz.newMeth(C$, 'findMinMax$',  function () {
if (this.value == null ) {
return null;
}var min=1.7976931348623157E308;
var max=-1.7976931348623157E308;
var empty=true;
for (var row, $row = 0, $$row = this.value; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
if (row != null ) {
for (var x, $x = 0, $$x = row; $x<$$x.length&&((x=($$x[$x])),1);$x++) {
empty=false;
if (x > max ) {
max=x;
}if (x < min ) {
min=x;
}}
}}
return empty ? null : Clazz.array(Double.TYPE, -1, [min, max]);
});

Clazz.newMeth(C$, 'reverseRange$Z',  function (maxToZero) {
if (this.value == null ) {
return;
}var minMax=this.findMinMax$();
if (minMax == null ) {
return;
}var subtractFrom=maxToZero ? minMax[1] : minMax[0] + minMax[1];
for (var row, $row = 0, $$row = this.value; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
if (row != null ) {
var j=0;
for (var x, $x = 0, $$x = row; $x<$$x.length&&((x=($$x[$x])),1);$x++) {
row[j]=subtractFrom - x;
++j;
}
}}
});

Clazz.newMeth(C$, 'multiply$D',  function (by) {
for (var row, $row = 0, $$row = this.value; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
if (row != null ) {
for (var i=0; i < row.length; i++) {
row[i]*=by;
}
}}
});

Clazz.newMeth(C$, 'setD$DA',  function (v) {
this.d=v;
});

Clazz.newMeth(C$, 'setE$DA',  function (v) {
this.e=v;
});

Clazz.newMeth(C$, 'getTotal$',  function () {
var d=0.0;
for (var i=0; i < this.height$(); i++) {
for (var j=0; j < this.width$(); j++) {
d+=this.value[i][j];
}
}
return d;
});

Clazz.newMeth(C$, 'equals$jalview_math_MatrixI$D',  function (m2, delta) {
if (m2 == null  || this.height$() != m2.height$()  || this.width$() != m2.width$() ) {
return false;
}for (var i=0; i < this.height$(); i++) {
for (var j=0; j < this.width$(); j++) {
var diff=this.getValue$I$I(i, j) - m2.getValue$I$I(i, j);
if (Math.abs(diff) > delta ) {
return false;
}}
}
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
