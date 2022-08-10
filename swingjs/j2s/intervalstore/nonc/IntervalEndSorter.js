(function(){var P$=Clazz.newPackage("intervalstore.nonc"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "IntervalEndSorter");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.intervals=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'val$I', function (i) {
return this.intervals[i].getEnd$();
}, p$1);

Clazz.newMeth(C$, 'sort$IA$intervalstore_api_IntervalIA$I', function (a, intervals, len) {
this.intervals=intervals;
var left=0;
var right=len - 1;
if (right - left < 286) {
p$1.sort$IA$I$I$Z.apply(this, [a, left, right, true]);
return;
}var run=Clazz.array(Integer.TYPE, [68]);
var count=0;
run[0]=left;
for (var k=left; k < right; run[count]=k) {
switch (Integer.signum$I(p$1.val$I.apply(this, [a[k + 1]]) - p$1.val$I.apply(this, [a[k]]))) {
case 1:
while (++k <= right && p$1.val$I.apply(this, [a[k - 1]]) <= p$1.val$I.apply(this, [a[k]]) );
break;
case -1:
while (++k <= right && p$1.val$I.apply(this, [a[k - 1]]) >= p$1.val$I.apply(this, [a[k]]) );
for (var lo=run[count] - 1, hi=k; ++lo < --hi; ) {
var t=a[lo];
a[lo]=a[hi];
a[hi]=t;
}
break;
default:
for (var m=33; ++k <= right && p$1.val$I.apply(this, [a[k - 1]]) == p$1.val$I.apply(this, [a[k]]) ; ) {
if (--m == 0) {
p$1.sort$IA$I$I$Z.apply(this, [a, left, right, true]);
return;
}}
}
if (++count == 67) {
p$1.sort$IA$I$I$Z.apply(this, [a, left, right, true]);
return;
}}
if (run[count] == right++) {
run[++count]=right;
} else if (count == 1) {
return;
}var odd=($b$[0] = 0, $b$[0]);
for (var n=1; (n<<=1) < count; odd=($b$[0] = odd^(1), $b$[0])) ;
var b;
var ao;
var bo;
var blen=right - left;
var work=Clazz.array(Integer.TYPE, [blen]);
var workBase=0;
if (odd == 0) {
System.arraycopy$O$I$O$I$I(a, left, work, workBase, blen);
b=a;
bo=0;
a=work;
ao=workBase - left;
} else {
b=work;
ao=0;
bo=workBase - left;
}for (var last; count > 1; count=last) {
for (var k=(last=0) + 2; k <= count; k+=2) {
var hi=run[k];
var mi=run[k - 1];
for (var i=run[k - 2], p=i, q=mi; i < hi; ++i) {
if (q >= hi || p < mi && p$1.val$I.apply(this, [a[p + ao]]) <= p$1.val$I.apply(this, [a[q + ao]])  ) {
b[i + bo]=a[p++ + ao];
} else {
b[i + bo]=a[q++ + ao];
}}
run[++last]=hi;
}
if ((count & 1) != 0) {
for (var i=right, lo=run[count - 1]; --i >= lo; b[i + bo]=a[i + ao]) ;
run[++last]=right;
}var t=a;
a=b;
b=t;
var o=ao;
ao=bo;
bo=o;
}
});

Clazz.newMeth(C$, 'sort$IA$I$I$Z', function (a, left, right, leftmost) {
var length=right - left + 1;
if (length < 47) {
if (leftmost) {
for (var i=left, j=i; i < right; j=++i) {
var ai=a[i + 1];
while (p$1.val$I.apply(this, [ai]) < p$1.val$I.apply(this, [a[j]])){
a[j + 1]=a[j];
if (j-- == left) {
break;
}}
a[j + 1]=ai;
}
} else {
do {
if (left >= right) {
return;
}} while (p$1.val$I.apply(this, [a[++left]]) >= p$1.val$I.apply(this, [a[left - 1]]));
for (var k=left; ++left <= right; k=++left) {
var a1=a[k];
var a2=a[left];
if (p$1.val$I.apply(this, [a1]) < p$1.val$I.apply(this, [a2])) {
a2=a1;
a1=a[left];
}while (p$1.val$I.apply(this, [a1]) < p$1.val$I.apply(this, [a[--k]])){
a[k + 2]=a[k];
}
a[++k + 1]=a1;
while (p$1.val$I.apply(this, [a2]) < p$1.val$I.apply(this, [a[--k]])){
a[k + 1]=a[k];
}
a[k + 1]=a2;
}
var last=a[right];
while (p$1.val$I.apply(this, [last]) < p$1.val$I.apply(this, [a[--right]])){
a[right + 1]=a[right];
}
a[right + 1]=last;
}return;
}var seventh=(length >> 3) + (length >> 6) + 1 ;
var e3=(left + right) >>> 1;
var e2=e3 - seventh;
var e1=e2 - seventh;
var e4=e3 + seventh;
var e5=e4 + seventh;
if (p$1.val$I.apply(this, [a[e2]]) < p$1.val$I.apply(this, [a[e1]])) {
var t=a[e2];
a[e2]=a[e1];
a[e1]=t;
}if (p$1.val$I.apply(this, [a[e3]]) < p$1.val$I.apply(this, [a[e2]])) {
var t=a[e3];
a[e3]=a[e2];
a[e2]=t;
if (p$1.val$I.apply(this, [t]) < p$1.val$I.apply(this, [a[e1]])) {
a[e2]=a[e1];
a[e1]=t;
}}if (p$1.val$I.apply(this, [a[e4]]) < p$1.val$I.apply(this, [a[e3]])) {
var t=a[e4];
a[e4]=a[e3];
a[e3]=t;
var vt=p$1.val$I.apply(this, [t]);
if (vt < p$1.val$I.apply(this, [a[e2]])) {
a[e3]=a[e2];
a[e2]=t;
if (vt < p$1.val$I.apply(this, [a[e1]])) {
a[e2]=a[e1];
a[e1]=t;
}}}if (p$1.val$I.apply(this, [a[e5]]) < p$1.val$I.apply(this, [a[e4]])) {
var t=a[e5];
a[e5]=a[e4];
a[e4]=t;
var vt=p$1.val$I.apply(this, [t]);
if (vt < p$1.val$I.apply(this, [a[e3]])) {
a[e4]=a[e3];
a[e3]=t;
if (vt < p$1.val$I.apply(this, [a[e2]])) {
a[e3]=a[e2];
a[e2]=t;
if (vt < p$1.val$I.apply(this, [a[e1]])) {
a[e2]=a[e1];
a[e1]=t;
}}}}var less=left;
var great=right;
if (p$1.val$I.apply(this, [a[e1]]) != p$1.val$I.apply(this, [a[e2]]) && p$1.val$I.apply(this, [a[e2]]) != p$1.val$I.apply(this, [a[e3]])  && p$1.val$I.apply(this, [a[e3]]) != p$1.val$I.apply(this, [a[e4]])  && p$1.val$I.apply(this, [a[e4]]) != p$1.val$I.apply(this, [a[e5]]) ) {
var pivot1=p$1.val$I.apply(this, [a[e2]]);
var pivot2=p$1.val$I.apply(this, [a[e4]]);
var pivot1k=a[e2];
var pivot2k=a[e4];
a[e2]=a[left];
a[e4]=a[right];
while (p$1.val$I.apply(this, [a[++less]]) < pivot1);
while (p$1.val$I.apply(this, [a[--great]]) > pivot2);
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (p$1.val$I.apply(this, [ak]) < pivot1) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (p$1.val$I.apply(this, [ak]) > pivot2) {
while (p$1.val$I.apply(this, [a[great]]) > pivot2){
if (great-- == k) {
break outer;
}}
if (p$1.val$I.apply(this, [a[great]]) < pivot1) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
a[left]=a[less - 1];
a[less - 1]=pivot1k;
a[right]=a[great + 1];
a[great + 1]=pivot2k;
p$1.sort$IA$I$I$Z.apply(this, [a, left, less - 2, leftmost]);
p$1.sort$IA$I$I$Z.apply(this, [a, great + 2, right, false]);
if (less < e1 && e5 < great ) {
while (p$1.val$I.apply(this, [a[less]]) == pivot1){
++less;
}
while (p$1.val$I.apply(this, [a[great]]) == pivot2){
--great;
}
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (p$1.val$I.apply(this, [ak]) == pivot1) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (p$1.val$I.apply(this, [ak]) == pivot2) {
while (p$1.val$I.apply(this, [a[great]]) == pivot2){
if (great-- == k) {
break outer;
}}
if (p$1.val$I.apply(this, [a[great]]) == pivot1) {
a[k]=a[less];
a[less]=pivot1k;
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
}p$1.sort$IA$I$I$Z.apply(this, [a, less, great, false]);
} else {
var pivot=p$1.val$I.apply(this, [a[e3]]);
for (var k=less; k <= great; ++k) {
if (p$1.val$I.apply(this, [a[k]]) == pivot) {
continue;
}var ak=a[k];
if (p$1.val$I.apply(this, [ak]) < pivot) {
a[k]=a[less];
a[less]=ak;
++less;
} else {
while (p$1.val$I.apply(this, [a[great]]) > pivot){
--great;
}
if (p$1.val$I.apply(this, [a[great]]) < pivot) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
p$1.sort$IA$I$I$Z.apply(this, [a, left, less - 1, leftmost]);
p$1.sort$IA$I$I$Z.apply(this, [a, great + 1, right, false]);
}}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v1');//Created 2019-11-26 23:33:42 Java2ScriptVisitor version 3.2.5-v1 net.sf.j2s.core.jar version 3.2.5-v1
