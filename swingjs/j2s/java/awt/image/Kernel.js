(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'InternalError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Kernel", null, null, 'Cloneable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.width=0;
this.height=0;
this.xOrigin=0;
this.yOrigin=0;
this.data=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$FA', function (width, height, data) {
C$.$init$.apply(this);
this.width=width;
this.height=height;
this.xOrigin=(width - 1) >> 1;
this.yOrigin=(height - 1) >> 1;
var len=width * height;
if (data.length < len) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Data array too small (is " + data.length + " and should be " + len ]);
}this.data=Clazz.array(Float.TYPE, [len]);
System.arraycopy$O$I$O$I$I(data, 0, this.data, 0, len);
}, 1);

Clazz.newMeth(C$, 'getXOrigin$', function () {
return this.xOrigin;
});

Clazz.newMeth(C$, 'getYOrigin$', function () {
return this.yOrigin;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getKernelData$FA', function (data) {
if (data == null ) {
data=Clazz.array(Float.TYPE, [this.data.length]);
} else if (data.length < this.data.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Data array too small (should be " + this.data.length + " but is " + data.length + " )" ]);
}System.arraycopy$O$I$O$I$I(this.data, 0, data, 0, this.data.length);
return data;
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
