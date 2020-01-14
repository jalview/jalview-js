(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'InternalError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Insets", null, null, ['Cloneable', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.top=0;
this.left=0;
this.bottom=0;
this.right=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (top, left, bottom, right) {
C$.$init$.apply(this);
this.top=top;
this.left=left;
this.bottom=bottom;
this.right=right;
}, 1);

Clazz.newMeth(C$, 'set$I$I$I$I', function (top, left, bottom, right) {
this.top=top;
this.left=left;
this.bottom=bottom;
this.right=right;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "java.awt.Insets")) {
var insets=obj;
return ((this.top == insets.top) && (this.left == insets.left) && (this.bottom == insets.bottom) && (this.right == insets.right)  );
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var sum1=this.left + this.bottom;
var sum2=this.right + this.top;
var val1=(sum1 * (sum1 + 1)/2|0) + this.left;
var val2=(sum2 * (sum2 + 1)/2|0) + this.top;
var sum3=val1 + val2;
return (sum3 * (sum3 + 1)/2|0) + val2;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "[top=" + this.top + ",left=" + this.left + ",bottom=" + this.bottom + ",right=" + this.right + "]" ;
});

Clazz.newMeth(C$, 'clone$', function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:22 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
