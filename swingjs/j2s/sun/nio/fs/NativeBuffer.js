(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'sun.nio.fs.NativeBuffer','sun.misc.Unsafe','sun.misc.Cleaner',['sun.nio.fs.NativeBuffer','.Deallocator'],'sun.nio.fs.NativeBuffers']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NativeBuffer", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.unsafe=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.unsafe=$I$(2).getUnsafe$();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.address=0;
this.size=0;
this.cleaner=null;
this.owner=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
C$.$init$.apply(this);
this.address=C$.unsafe.allocateMemory$J(size);
this.size=size;
this.cleaner=$I$(3).create$O$Runnable(this, Clazz.new_($I$(4).c$$J,[this.address]));
}, 1);

Clazz.newMeth(C$, 'release$', function () {
$I$(5).releaseNativeBuffer$sun_nio_fs_NativeBuffer(this);
});

Clazz.newMeth(C$, 'address$', function () {
return this.address;
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'cleaner$', function () {
return this.cleaner;
});

Clazz.newMeth(C$, 'setOwner$O', function (owner) {
this.owner=owner;
});

Clazz.newMeth(C$, 'owner$', function () {
return this.owner;
});
;
(function(){var C$=Clazz.newClass(P$.NativeBuffer, "Deallocator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.address=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J', function (address) {
C$.$init$.apply(this);
this.address=address;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
$I$(1).unsafe.freeMemory$J(this.address);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
