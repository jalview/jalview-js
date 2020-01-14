(function(){var P$=Clazz.newPackage("java.nio"),p$1={};
var C$=Clazz.newClass(P$, "MappedByteBuffer", null, 'java.nio.HeapByteBuffer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fd=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$java_io_FileDescriptor', function (mark, pos, lim, cap, fd) {
C$.superclazz.c$$BA$I$I$I$I$I.apply(this, [null, mark, pos, lim, cap, 0]);
C$.$init$.apply(this);
this.fd=fd;
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$I$I$I$java_io_FileDescriptor', function (hb, mark, pos, lim, cap, off, fd) {
C$.superclazz.c$$BA$I$I$I$I$I.apply(this, [hb, mark, pos, lim, cap, off]);
C$.$init$.apply(this);
this.fd=fd;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (mark, pos, lim, cap) {
C$.superclazz.c$$BA$I$I$I$I$I.apply(this, [null, mark, pos, lim, cap, 0]);
C$.$init$.apply(this);
this.fd=null;
}, 1);

Clazz.newMeth(C$, 'checkMapped', function () {
if (this.fd == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
}, p$1);

Clazz.newMeth(C$, 'mappingOffset', function () {
return 0;
}, p$1);

Clazz.newMeth(C$, 'mappingAddress$J', function (mappingOffset) {
return 0;
}, p$1);

Clazz.newMeth(C$, 'mappingLength$J', function (mappingOffset) {
return this.capacity$() + mappingOffset;
}, p$1);

Clazz.newMeth(C$, 'isLoaded$', function () {
return true;
});

Clazz.newMeth(C$, 'load$', function () {
return this;
});

Clazz.newMeth(C$, 'force$', function () {
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
