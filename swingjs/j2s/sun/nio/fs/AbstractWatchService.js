(function(){var P$=Clazz.newPackage("sun.nio.fs"),p$1={},I$=[[0,'java.util.concurrent.LinkedBlockingDeque','sun.nio.fs.AbstractWatchKey']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractWatchService", null, null, 'java.nio.file.WatchService');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pendingKeys=null;
this.CLOSE_KEY=null;
this.closed=false;
this.closeLock=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.pendingKeys=Clazz.new_($I$(1));
this.CLOSE_KEY=((P$.AbstractWatchService$1||
(function(){var C$=Clazz.newClass(P$, "AbstractWatchService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('sun.nio.fs.AbstractWatchKey'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isValid$', function () {
return true;
});

Clazz.newMeth(C$, 'cancel$', function () {
});
})()
), Clazz.new_($I$(2).c$$java_nio_file_Path$sun_nio_fs_AbstractWatchService, [this, null, null, null],P$.AbstractWatchService$1));
this.closeLock= Clazz.new_();
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'enqueueKey$java_nio_file_WatchKey', function (key) {
this.pendingKeys.offer$TE(key);
});

Clazz.newMeth(C$, 'checkOpen', function () {
if (this.closed) throw Clazz.new_(Clazz.load('java.nio.file.ClosedWatchServiceException'));
}, p$1);

Clazz.newMeth(C$, 'checkKey$java_nio_file_WatchKey', function (key) {
if (key === this.CLOSE_KEY ) {
this.enqueueKey$java_nio_file_WatchKey(key);
}p$1.checkOpen.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'poll$', function () {
p$1.checkOpen.apply(this, []);
var key=this.pendingKeys.poll$();
p$1.checkKey$java_nio_file_WatchKey.apply(this, [key]);
return key;
});

Clazz.newMeth(C$, 'poll$J$java_util_concurrent_TimeUnit', function (timeout, unit) {
p$1.checkOpen.apply(this, []);
var key=this.pendingKeys.poll$J$java_util_concurrent_TimeUnit(timeout, unit);
p$1.checkKey$java_nio_file_WatchKey.apply(this, [key]);
return key;
});

Clazz.newMeth(C$, 'take$', function () {
p$1.checkOpen.apply(this, []);
var key=this.pendingKeys.take$();
p$1.checkKey$java_nio_file_WatchKey.apply(this, [key]);
return key;
});

Clazz.newMeth(C$, 'isOpen$', function () {
return !this.closed;
});

Clazz.newMeth(C$, 'closeLock$', function () {
return this.closeLock;
});

Clazz.newMeth(C$, 'close$', function () {
{
if (this.closed) return;
this.closed=true;
this.implClose$();
this.pendingKeys.clear$();
this.pendingKeys.offer$TE(this.CLOSE_KEY);
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
