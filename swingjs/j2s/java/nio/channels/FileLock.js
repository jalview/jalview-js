(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FileLock", null, null, 'AutoCloseable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['shared'],'J',['position','size'],'O',['channel','java.nio.channels.Channel']]]

Clazz.newMeth(C$, 'c$$java_nio_channels_FileChannel$J$J$Z', function (channel, position, size, shared) {
;C$.$init$.apply(this);
if (position < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative position"]);
if (size < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative size"]);
if (position + size < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative position + size"]);
this.channel=channel;
this.position=position;
this.size=size;
this.shared=shared;
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_AsynchronousFileChannel$J$J$Z', function (channel, position, size, shared) {
;C$.$init$.apply(this);
if (position < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative position"]);
if (size < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative size"]);
if (position + size < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative position + size"]);
this.channel=channel;
this.position=position;
this.size=size;
this.shared=shared;
}, 1);

Clazz.newMeth(C$, 'channel$', function () {
return (Clazz.instanceOf(this.channel, "java.nio.channels.FileChannel")) ? this.channel : null;
});

Clazz.newMeth(C$, 'acquiredBy$', function () {
return this.channel;
});

Clazz.newMeth(C$, 'position$', function () {
return this.position;
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'isShared$', function () {
return this.shared;
});

Clazz.newMeth(C$, 'overlaps$J$J', function (position, size) {
if (position + size <= this.position) return false;
if (this.position + this.size <= position) return false;
return true;
});

Clazz.newMeth(C$, 'close$', function () {
this.release$();
});

Clazz.newMeth(C$, 'toString', function () {
return (this.getClass$().getName$() + "[" + this.position + ":" + this.size + " " + (this.shared ? "shared" : "exclusive") + " " + (this.isValid$() ? "valid" : "invalid") + "]" );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:27 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
