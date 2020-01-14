(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ArrayTable", null, null, 'Cloneable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.table=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.table=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'put$O$O', function (key, value) {
if (this.table == null ) {
this.table=Clazz.array(java.lang.Object, -1, [key, value]);
} else {
var size=this.size$();
if (size < 8) {
if (this.containsKey$O(key)) {
var tmp=this.table;
for (var i=0; i < tmp.length - 1; i+=2) {
if (tmp[i].equals$O(key)) {
tmp[i + 1]=value;
break;
}}
} else {
var array=this.table;
var i=array.length;
var tmp=Clazz.array(java.lang.Object, [i + 2]);
System.arraycopy$O$I$O$I$I(array, 0, tmp, 0, i);
tmp[i]=key;
tmp[i + 1]=value;
this.table=tmp;
}} else {
if ((size == 8) && p$1.isArray.apply(this, []) ) {
p$1.grow.apply(this, []);
}(this.table).put$TK$TV(key, value);
}}});

Clazz.newMeth(C$, 'get$O', function (key) {
var value=null;
if (this.table != null ) {
if (p$1.isArray.apply(this, [])) {
var array=this.table;
for (var i=0; i < array.length - 1; i+=2) {
if (array[i].equals$O(key)) {
value=array[i + 1];
break;
}}
} else {
value=(this.table).get$O(key);
}}return value;
});

Clazz.newMeth(C$, 'size$', function () {
var size;
if (this.table == null ) return 0;
if (p$1.isArray.apply(this, [])) {
size=((this.table).length/2|0);
} else {
size=(this.table).size$();
}return size;
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
var contains=false;
if (this.table != null ) {
if (p$1.isArray.apply(this, [])) {
var array=this.table;
for (var i=0; i < array.length - 1; i+=2) {
if (array[i].equals$O(key)) {
contains=true;
break;
}}
} else {
contains=(this.table).containsKey$O(key);
}}return contains;
});

Clazz.newMeth(C$, 'remove$O', function (key) {
var value=null;
if (key == null ) {
return null;
}if (this.table != null ) {
if (p$1.isArray.apply(this, [])) {
var index=-1;
var array=this.table;
for (var i=array.length - 2; i >= 0; i-=2) {
if (array[i].equals$O(key)) {
index=i;
value=array[i + 1];
break;
}}
if (index != -1) {
var tmp=Clazz.array(java.lang.Object, [array.length - 2]);
System.arraycopy$O$I$O$I$I(array, 0, tmp, 0, index);
if (index < tmp.length) System.arraycopy$O$I$O$I$I(array, index + 2, tmp, index, tmp.length - index);
this.table=(tmp.length == 0) ? null : tmp;
}} else {
value=(this.table).remove$O(key);
}if (this.size$() == 7 && !p$1.isArray.apply(this, []) ) {
p$1.shrink.apply(this, []);
}}return value;
});

Clazz.newMeth(C$, 'clear$', function () {
this.table=null;
});

Clazz.newMeth(C$, 'clone$', function () {
var newArrayTable=Clazz.new_(C$);
if (p$1.isArray.apply(this, [])) {
var array=this.table;
for (var i=0; i < array.length - 1; i+=2) {
newArrayTable.put$O$O(array[i], array[i + 1]);
}
} else {
var tmp=this.table;
var keys=tmp.keys$();
while (keys.hasMoreElements$()){
var o=keys.nextElement$();
newArrayTable.put$O$O(o, tmp.get$O(o));
}
}return newArrayTable;
});

Clazz.newMeth(C$, 'getKeys$OA', function (keys) {
if (this.table == null ) {
return null;
}if (p$1.isArray.apply(this, [])) {
var array=this.table;
if (keys == null ) {
keys=Clazz.array(java.lang.Object, [(array.length/2|0)]);
}for (var i=0, index=0; i < array.length - 1; i+=2, index++) {
keys[index]=array[i];
}
} else {
var tmp=this.table;
var enum_=tmp.keys$();
var counter=tmp.size$();
if (keys == null ) {
keys=Clazz.array(java.lang.Object, [counter]);
}while (counter > 0){
keys[--counter]=enum_.nextElement$();
}
}return keys;
});

Clazz.newMeth(C$, 'isArray', function () {
return (Clazz.instanceOf(this.table, Clazz.array(java.lang.Object, -1)));
}, p$1);

Clazz.newMeth(C$, 'grow', function () {
var array=this.table;
var tmp=Clazz.new_($I$(1).c$$I,[(array.length/2|0)]);
for (var i=0; i < array.length; i+=2) {
tmp.put$TK$TV(array[i], array[i + 1]);
}
this.table=tmp;
}, p$1);

Clazz.newMeth(C$, 'shrink', function () {
var tmp=this.table;
var array=Clazz.array(java.lang.Object, [tmp.size$() * 2]);
var keys=tmp.keys$();
var j=0;
while (keys.hasMoreElements$()){
var o=keys.nextElement$();
array[j]=o;
array[j + 1]=tmp.get$O(o);
j+=2;
}
this.table=array;
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
