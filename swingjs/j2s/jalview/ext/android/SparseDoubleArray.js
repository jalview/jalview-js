(function(){var P$=Clazz.newPackage("jalview.ext.android"),I$=[[0,'jalview.ext.android.ContainerHelpers','StringBuilder']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SparseDoubleArray", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['mSize'],'O',['mKeys','int[]','mValues','double[]']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [10]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.$init$.apply(this);
if (initialCapacity == 0) {
this.mKeys=$I$(1).EMPTY_INTS;
this.mValues=$I$(1).EMPTY_DOUBLES;
} else {
initialCapacity=C$.idealDoubleArraySize$I(initialCapacity);
this.mKeys=Clazz.array(Integer.TYPE, [initialCapacity]);
this.mValues=Clazz.array(Double.TYPE, [initialCapacity]);
}this.mSize=0;
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (row) {
C$.c$.apply(this, []);
for (var i=0; i < row.length; i++) {
if (row[i] != 0.0 ) {
this.put$I$D(i, row[i]);
}}
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
var clone=null;
try {
clone=Clazz.clone(this);
clone.mKeys=this.mKeys.clone$();
clone.mValues=this.mValues.clone$();
} catch (cnse) {
if (Clazz.exceptionOf(cnse,"CloneNotSupportedException")){
} else {
throw cnse;
}
}
return clone;
});

Clazz.newMeth(C$, 'get$I', function (key) {
return this.get$I$D(key, 0.0);
});

Clazz.newMeth(C$, 'get$I$D', function (key, valueIfKeyNotFound) {
var i=$I$(1).binarySearch$IA$I$I(this.mKeys, this.mSize, key);
if (i < 0) {
return valueIfKeyNotFound;
} else {
return this.mValues[i];
}});

Clazz.newMeth(C$, 'delete$I', function (key) {
var i=$I$(1).binarySearch$IA$I$I(this.mKeys, this.mSize, key);
if (i >= 0) {
this.removeAt$I(i);
}});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
System.arraycopy$O$I$O$I$I(this.mKeys, index + 1, this.mKeys, index, this.mSize - (index + 1));
System.arraycopy$O$I$O$I$I(this.mValues, index + 1, this.mValues, index, this.mSize - (index + 1));
this.mSize--;
});

Clazz.newMeth(C$, 'put$I$D', function (key, value) {
var i=$I$(1).binarySearch$IA$I$I(this.mKeys, this.mSize, key);
if (i >= 0) {
this.mValues[i]=value;
} else {
i=~i;
if (this.mSize >= this.mKeys.length) {
var n=C$.idealDoubleArraySize$I(this.mSize + 1);
var nkeys=Clazz.array(Integer.TYPE, [n]);
var nvalues=Clazz.array(Double.TYPE, [n]);
System.arraycopy$O$I$O$I$I(this.mKeys, 0, nkeys, 0, this.mKeys.length);
System.arraycopy$O$I$O$I$I(this.mValues, 0, nvalues, 0, this.mValues.length);
this.mKeys=nkeys;
this.mValues=nvalues;
}if (this.mSize - i != 0) {
System.arraycopy$O$I$O$I$I(this.mKeys, i, this.mKeys, i + 1, this.mSize - i);
System.arraycopy$O$I$O$I$I(this.mValues, i, this.mValues, i + 1, this.mSize - i);
}this.mKeys[i]=key;
this.mValues[i]=value;
this.mSize++;
}});

Clazz.newMeth(C$, 'size$', function () {
return this.mSize;
});

Clazz.newMeth(C$, 'keyAt$I', function (index) {
return this.mKeys[index];
});

Clazz.newMeth(C$, 'valueAt$I', function (index) {
return this.mValues[index];
});

Clazz.newMeth(C$, 'indexOfKey$I', function (key) {
return $I$(1).binarySearch$IA$I$I(this.mKeys, this.mSize, key);
});

Clazz.newMeth(C$, 'indexOfValue$D', function (value) {
for (var i=0; i < this.mSize; i++) {
if (this.mValues[i] == value ) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'clear$', function () {
this.mSize=0;
});

Clazz.newMeth(C$, 'append$I$D', function (key, value) {
if (this.mSize != 0 && key <= this.mKeys[this.mSize - 1] ) {
this.put$I$D(key, value);
return;
}var pos=this.mSize;
if (pos >= this.mKeys.length) {
var n=C$.idealDoubleArraySize$I(pos + 1);
var nkeys=Clazz.array(Integer.TYPE, [n]);
var nvalues=Clazz.array(Double.TYPE, [n]);
System.arraycopy$O$I$O$I$I(this.mKeys, 0, nkeys, 0, this.mKeys.length);
System.arraycopy$O$I$O$I$I(this.mValues, 0, nvalues, 0, this.mValues.length);
this.mKeys=nkeys;
this.mValues=nvalues;
}this.mKeys[pos]=key;
this.mValues[pos]=value;
this.mSize=pos + 1;
});

Clazz.newMeth(C$, 'idealDoubleArraySize$I', function (need) {
return (C$.idealByteArraySize$I(need * 8)/8|0);
}, 1);

Clazz.newMeth(C$, 'idealByteArraySize$I', function (need) {
for (var i=4; i < 32; i++) {
if (need <= (1 << i) - 12) {
return (1 << i) - 12;
}}
return need;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
if (this.size$() <= 0) {
return "{}";
}var buffer=Clazz.new_($I$(2,1).c$$I,[this.mSize * 28]);
buffer.append$C("{");
for (var i=0; i < this.mSize; i++) {
if (i > 0) {
buffer.append$S(", ");
}var key=this.keyAt$I(i);
buffer.append$I(key);
buffer.append$C("=");
var value=this.valueAt$I(i);
buffer.append$D(value);
}
buffer.append$C("}");
return buffer.toString();
});

Clazz.newMeth(C$, 'add$I$D', function (key, toAdd) {
var newValue=toAdd;
var i=$I$(1).binarySearch$IA$I$I(this.mKeys, this.mSize, key);
if (i >= 0) {
this.mValues[i] += toAdd;
newValue=this.mValues[i];
} else {
i=~i;
if (this.mSize >= this.mKeys.length) {
var n=C$.idealDoubleArraySize$I(this.mSize + 1);
var nkeys=Clazz.array(Integer.TYPE, [n]);
var nvalues=Clazz.array(Double.TYPE, [n]);
System.arraycopy$O$I$O$I$I(this.mKeys, 0, nkeys, 0, this.mKeys.length);
System.arraycopy$O$I$O$I$I(this.mValues, 0, nvalues, 0, this.mValues.length);
this.mKeys=nkeys;
this.mValues=nvalues;
}if (this.mSize - i != 0) {
System.arraycopy$O$I$O$I$I(this.mKeys, i, this.mKeys, i + 1, this.mSize - i);
System.arraycopy$O$I$O$I$I(this.mValues, i, this.mValues, i + 1, this.mSize - i);
}this.mKeys[i]=key;
this.mValues[i]=toAdd;
this.mSize++;
}return newValue;
});

Clazz.newMeth(C$, 'divide$I$D', function (key, divisor) {
var newValue=0.0;
if (divisor == 0.0 ) {
return newValue;
}var i=$I$(1).binarySearch$IA$I$I(this.mKeys, this.mSize, key);
if (i >= 0) {
this.mValues[i] /= divisor;
newValue=this.mValues[i];
}return newValue;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
