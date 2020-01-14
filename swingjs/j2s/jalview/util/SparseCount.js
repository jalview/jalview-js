(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.ext.android.SparseShortArray','jalview.ext.android.SparseIntArray']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SparseCount");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.shortProfile=null;
this.intProfile=null;
this.useInts=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (profileSize) {
C$.$init$.apply(this);
this.shortProfile=Clazz.new_($I$(1).c$$I,[profileSize]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [2]);
}, 1);

Clazz.newMeth(C$, 'add$I$I', function (key, value) {
var newValue=0;
if (this.useInts) {
newValue=this.intProfile.add$I$I(key, value);
} else {
try {
newValue=this.shortProfile.add$I$I(key, value);
} catch (e) {
if (Clazz.exceptionOf(e,"ArithmeticException")){
this.handleOverflow$();
newValue=this.intProfile.add$I$I(key, value);
} else {
throw e;
}
}
}return newValue;
});

Clazz.newMeth(C$, 'handleOverflow$', function () {
var size=this.shortProfile.size$();
this.intProfile=Clazz.new_($I$(2).c$$I,[size]);
for (var i=0; i < size; i++) {
var key=this.shortProfile.keyAt$I(i);
var value=this.shortProfile.valueAt$I(i);
this.intProfile.put$I$I(key, value);
}
this.shortProfile=null;
this.useInts=true;
});

Clazz.newMeth(C$, 'size$', function () {
return this.useInts ? this.intProfile.size$() : this.shortProfile.size$();
});

Clazz.newMeth(C$, 'get$I', function (key) {
return this.useInts ? this.intProfile.get$I(key) : this.shortProfile.get$I(key);
});

Clazz.newMeth(C$, 'put$I$I', function (key, value) {
if (this.useInts) {
this.intProfile.put$I$I(key, value);
} else {
this.shortProfile.put$I$I(key, value);
}});

Clazz.newMeth(C$, 'keyAt$I', function (k) {
return this.useInts ? this.intProfile.keyAt$I(k) : this.shortProfile.keyAt$I(k);
});

Clazz.newMeth(C$, 'valueAt$I', function (k) {
return this.useInts ? this.intProfile.valueAt$I(k) : this.shortProfile.valueAt$I(k);
});

Clazz.newMeth(C$, 'isUsingInt$', function () {
return this.useInts;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
