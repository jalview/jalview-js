(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.util.concurrent.atomic.AtomicReferenceFieldUpdater']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SelectionKey");
C$.attachmentUpdater=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.attachmentUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass(java.lang.Object), "attachment");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.attachment=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.attachment=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isReadable$', function () {
return (this.readyOps$() & 1) != 0;
});

Clazz.newMeth(C$, 'isWritable$', function () {
return (this.readyOps$() & 4) != 0;
});

Clazz.newMeth(C$, 'isConnectable$', function () {
return (this.readyOps$() & 8) != 0;
});

Clazz.newMeth(C$, 'isAcceptable$', function () {
return (this.readyOps$() & 16) != 0;
});

Clazz.newMeth(C$, 'attach$O', function (ob) {
return C$.attachmentUpdater.getAndSet$TT$TV(this, ob);
});

Clazz.newMeth(C$, 'attachment$', function () {
return this.attachment;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
