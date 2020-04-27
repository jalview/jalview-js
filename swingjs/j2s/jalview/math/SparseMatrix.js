(function(){var P$=Clazz.newPackage("jalview.math"),I$=[[0,'jalview.ext.android.SparseDoubleArray','jalview.math.Matrix']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SparseMatrix", null, 'jalview.math.Matrix');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sparseColumns','jalview.ext.android.SparseDoubleArray[]']]]

Clazz.newMeth(C$, 'c$$DAA', function (v) {
;C$.superclazz.c$$I$I.apply(this,[v.length, v.length > 0 ? v[0].length : 0]);C$.$init$.apply(this);
this.sparseColumns=Clazz.array($I$(1), [this.cols]);
for (var col=0; col < this.cols; col++) {
var sparseColumn=Clazz.new_($I$(1,1));
this.sparseColumns[col]=sparseColumn;
for (var row=0; row < this.rows; row++) {
var value=v[row][col];
if (value != 0.0 ) {
sparseColumn.put$I$D(row, value);
}}
}
}, 1);

Clazz.newMeth(C$, 'getValue$I$I', function (i, j) {
return this.sparseColumns[j].get$I(i);
});

Clazz.newMeth(C$, 'setValue$I$I$D', function (i, j, val) {
if (val == 0.0 ) {
this.sparseColumns[j].delete$I(i);
} else {
this.sparseColumns[j].put$I$D(i, val);
}});

Clazz.newMeth(C$, 'getColumn$I', function (i) {
var col=Clazz.array(Double.TYPE, [this.height$()]);
var vals=this.sparseColumns[i];
for (var nonZero=0; nonZero < vals.size$(); nonZero++) {
col[vals.keyAt$I(nonZero)]=vals.valueAt$I(nonZero);
}
return col;
});

Clazz.newMeth(C$, 'copy$', function () {
var vals=Clazz.array(Double.TYPE, [this.height$(), this.width$()]);
for (var i=0; i < this.height$(); i++) {
vals[i]=this.getRow$I(i);
}
return Clazz.new_(C$.c$$DAA,[vals]);
});

Clazz.newMeth(C$, 'transpose$', function () {
var out=Clazz.array(Double.TYPE, [this.cols, this.rows]);
for (var i=0; i < this.cols; i++) {
var vals=this.sparseColumns[i];
for (var nonZero=0; nonZero < vals.size$(); nonZero++) {
out[i][vals.keyAt$I(nonZero)]=vals.valueAt$I(nonZero);
}
}
return Clazz.new_(C$.c$$DAA,[out]);
});

Clazz.newMeth(C$, 'preMultiply$jalview_math_MatrixI', function ($in) {
if ($in.width$() != this.rows) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can't pre-multiply " + this.rows + " rows by " + $in.width$() + " columns" ]);
}var tmp=Clazz.array(Double.TYPE, [$in.height$(), this.cols]);
var count=0;
for (var i=0; i < $in.height$(); i++) {
for (var j=0; j < this.cols; j++) {
var vals=this.sparseColumns[j];
var added=false;
for (var nonZero=0; nonZero < vals.size$(); nonZero++) {
var myRow=vals.keyAt$I(nonZero);
var myValue=vals.valueAt$I(nonZero);
tmp[i][j] += ($in.getValue$I$I(i, myRow) * myValue);
added=true;
}
if (added && tmp[i][j] != 0.0  ) {
count++;
}}
}
if (count * 5 < $in.height$() * this.cols) {
return Clazz.new_(C$.c$$DAA,[tmp]);
} else {
return Clazz.new_($I$(2,1).c$$DAA,[tmp]);
}});

Clazz.newMeth(C$, 'divideValue$I$I$D', function (i, j, divisor) {
if (divisor == 0.0 ) {
return this.getValue$I$I(i, j);
}var v=this.sparseColumns[j].divide$I$D(i, divisor);
return v;
});

Clazz.newMeth(C$, 'addValue$I$I$D', function (i, j, addend) {
var v=this.sparseColumns[j].add$I$D(i, addend);
return v;
});

Clazz.newMeth(C$, 'getFillRatio$', function () {
var count=0;
for (var col, $col = 0, $$col = this.sparseColumns; $col<$$col.length&&((col=($$col[$col])),1);$col++) {
count+=col.size$();
}
return count / (this.height$() * this.width$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
