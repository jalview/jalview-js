(function(){var P$=Clazz.newPackage("jalview.ext.android"),I$=[[0,'jalview.ext.android.ContainerHelpers','StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SparseShortArray", null, null, 'Cloneable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mKeys=null;
this.mValues=null;
this.mSize=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [10]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.$init$.apply(this);
if (initialCapacity == 0) {
this.mKeys=Clazz.array(Short.TYPE, [0]);
this.mValues=Clazz.array(Short.TYPE, [0]);
} else {
initialCapacity=C$.idealShortArraySize$I(initialCapacity);
this.mKeys=Clazz.array(Short.TYPE, [initialCapacity]);
this.mValues=Clazz.array(Short.TYPE, [initialCapacity]);
}this.mSize=0;
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
return this.get$I$I(key, 0);
});

Clazz.newMeth(C$, 'get$I$I', function (key, valueIfKeyNotFound) {
C$.checkOverflow$I(key);
var i=$I$(1).binarySearch$HA$I$H(this.mKeys, this.mSize, ($s$[0] = key, $s$[0]));
if (i < 0) {
return valueIfKeyNotFound;
} else {
return this.mValues[i];
}});

Clazz.newMeth(C$, 'delete$I', function (key) {
C$.checkOverflow$I(key);
var i=$I$(1).binarySearch$HA$I$H(this.mKeys, this.mSize, ($s$[0] = key, $s$[0]));
if (i >= 0) {
this.removeAt$I(i);
}});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
System.arraycopy$O$I$O$I$I(this.mKeys, index + 1, this.mKeys, index, this.mSize - (index + 1));
System.arraycopy$O$I$O$I$I(this.mValues, index + 1, this.mValues, index, this.mSize - (index + 1));
this.mSize--;
});

Clazz.newMeth(C$, 'put$I$I', function (key, value) {
C$.checkOverflow$I(key);
C$.checkOverflow$I(value);
var i=$I$(1).binarySearch$HA$I$H(this.mKeys, this.mSize, ($s$[0] = key, $s$[0]));
if (i >= 0) {
this.mValues[i]=(value|0);
} else {
i=~i;
if (this.mSize >= this.mKeys.length) {
var n=C$.idealShortArraySize$I(this.mSize + 1);
var nkeys=Clazz.array(Short.TYPE, [n]);
var nvalues=Clazz.array(Short.TYPE, [n]);
System.arraycopy$O$I$O$I$I(this.mKeys, 0, nkeys, 0, this.mKeys.length);
System.arraycopy$O$I$O$I$I(this.mValues, 0, nvalues, 0, this.mValues.length);
this.mKeys=nkeys;
this.mValues=nvalues;
}if (this.mSize - i != 0) {
System.arraycopy$O$I$O$I$I(this.mKeys, i, this.mKeys, i + 1, this.mSize - i);
System.arraycopy$O$I$O$I$I(this.mValues, i, this.mValues, i + 1, this.mSize - i);
}this.mKeys[i]=(key|0);
this.mValues[i]=(value|0);
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
C$.checkOverflow$I(key);
return $I$(1).binarySearch$HA$I$H(this.mKeys, this.mSize, ($s$[0] = key, $s$[0]));
});

Clazz.newMeth(C$, 'indexOfValue$I', function (value) {
for (var i=0; i < this.mSize; i++) {
if (this.mValues[i] == value) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'clear$', function () {
this.mSize=0;
});

Clazz.newMeth(C$, 'append$I$I', function (key, value) {
if (this.mSize != 0 && key <= this.mKeys[this.mSize - 1] ) {
this.put$I$I(key, value);
return;
}var pos=this.mSize;
if (pos >= this.mKeys.length) {
var n=C$.idealShortArraySize$I(pos + 1);
var nkeys=Clazz.array(Short.TYPE, [n]);
var nvalues=Clazz.array(Short.TYPE, [n]);
System.arraycopy$O$I$O$I$I(this.mKeys, 0, nkeys, 0, this.mKeys.length);
System.arraycopy$O$I$O$I$I(this.mValues, 0, nvalues, 0, this.mValues.length);
this.mKeys=nkeys;
this.mValues=nvalues;
}C$.checkOverflow$I(key);
C$.checkOverflow$I(value);
this.mKeys[pos]=(key|0);
this.mValues[pos]=(value|0);
this.mSize=pos + 1;
});

Clazz.newMeth(C$, 'checkOverflow$I', function (value) {
if (value > 32767 || value < -32768 ) {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,[String.valueOf$I(value)]);
}}, 1);

Clazz.newMeth(C$, 'idealShortArraySize$I', function (need) {
return (C$.idealByteArraySize$I(need * 2)/2|0);
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
}var buffer=Clazz.new_($I$(2).c$$I,[this.mSize * 28]);
buffer.append$C("{");
for (var i=0; i < this.mSize; i++) {
if (i > 0) {
buffer.append$S(", ");
}var key=this.keyAt$I(i);
buffer.append$I(key);
buffer.append$C("=");
var value=this.valueAt$I(i);
buffer.append$I(value);
}
buffer.append$C("}");
return buffer.toString();
});

Clazz.newMeth(C$, 'add$I$I', function (key, toAdd) {
var newValue=toAdd;
C$.checkOverflow$I(key);
var i=$I$(1).binarySearch$HA$I$H(this.mKeys, this.mSize, ($s$[0] = key, $s$[0]));
if (i >= 0) {
C$.checkOverflow$I(toAdd + this.mValues[i]);
this.mValues[i]+=(toAdd|0);
newValue=this.mValues[i];
} else {
C$.checkOverflow$I(toAdd);
i=~i;
if (this.mSize >= this.mKeys.length) {
var n=C$.idealShortArraySize$I(this.mSize + 1);
var nkeys=Clazz.array(Short.TYPE, [n]);
var nvalues=Clazz.array(Short.TYPE, [n]);
System.arraycopy$O$I$O$I$I(this.mKeys, 0, nkeys, 0, this.mKeys.length);
System.arraycopy$O$I$O$I$I(this.mValues, 0, nvalues, 0, this.mValues.length);
this.mKeys=nkeys;
this.mValues=nvalues;
}if (this.mSize - i != 0) {
System.arraycopy$O$I$O$I$I(this.mKeys, i, this.mKeys, i + 1, this.mSize - i);
System.arraycopy$O$I$O$I$I(this.mValues, i, this.mValues, i + 1, this.mSize - i);
}this.mKeys[i]=(key|0);
this.mValues[i]=(toAdd|0);
this.mSize++;
}return newValue;
});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
