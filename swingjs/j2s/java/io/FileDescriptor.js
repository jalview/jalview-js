(function(){var P$=java.io,I$=[[0,'java.util.concurrent.atomic.AtomicInteger','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileDescriptor");
C$.$in=null;
C$.out=null;
C$.err=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.$in=Clazz.new_(C$.c$$I,[0]);
C$.out=Clazz.new_(C$.c$$I,[1]);
C$.err=Clazz.new_(C$.c$$I,[2]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._file=null;
this.fd=0;
this.handle=0;
this.useCount=null;
this.parent=null;
this.otherParents=null;
this.closed=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.fd=-1;
this.handle=-1;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.useCount=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$I', function (fd) {
C$.$init$.apply(this);
this.fd=fd;
this.useCount=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'set$java_io_FileDescriptor$I', function (obj, fd) {
obj.fd=fd;
});

Clazz.newMeth(C$, 'get$java_io_FileDescriptor', function (obj) {
return obj.fd;
});

Clazz.newMeth(C$, 'setHandle$java_io_FileDescriptor$J', function (obj, handle) {
obj.handle=handle;
});

Clazz.newMeth(C$, 'getHandle$java_io_FileDescriptor', function (obj) {
return obj.handle;
});

Clazz.newMeth(C$, 'valid$', function () {
return this.fd != -1;
});

Clazz.newMeth(C$, 'sync$', function () {
});

Clazz.newMeth(C$, 'incrementAndGetUseCount$', function () {
return this.useCount.incrementAndGet$();
});

Clazz.newMeth(C$, 'decrementAndGetUseCount$', function () {
return this.useCount.decrementAndGet$();
});

Clazz.newMeth(C$, 'attach$java_io_Closeable', function (c) {
this._file=(c._file ||null);
if (this.parent == null ) {
this.parent=c;
} else if (this.otherParents == null ) {
this.otherParents=Clazz.new_($I$(2));
this.otherParents.add$TE(this.parent);
this.otherParents.add$TE(c);
} else {
this.otherParents.add$TE(c);
}});

Clazz.newMeth(C$, 'closeAll$java_io_Closeable', function (releaser) {
if (!this.closed) {
this.closed=true;
var ioe=null;
try {var c=releaser;
if (this.otherParents != null ) {
for (var referent, $referent = this.otherParents.iterator$(); $referent.hasNext$()&&((referent=($referent.next$())),1);) {
try {
referent.close$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
if (ioe == null ) {
ioe=x;
} else {
}} else {
throw x;
}
}
}
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ioe=ex;
} else {
throw ex;
}
} finally {
if (ioe != null ) throw ioe;
}
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
