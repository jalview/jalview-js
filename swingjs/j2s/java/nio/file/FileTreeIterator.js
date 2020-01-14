(function(){var P$=Clazz.newPackage("java.nio.file"),p$1={},I$=[[0,'java.nio.file.FileTreeWalker','java.util.Arrays',['java.nio.file.FileTreeWalker','.EventType']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileTreeIterator", null, null, ['java.util.Iterator', 'java.io.Closeable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.walker=null;
this.next=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_Path$I$java_nio_file_FileVisitOptionA', function (start, maxDepth, options) {
C$.$init$.apply(this);
this.walker=Clazz.new_($I$(1).c$$java_util_Collection$I,[$I$(2).asList$TTA(options), maxDepth]);
this.next=this.walker.walk$java_nio_file_Path(start);
Clazz.assert(C$, this, function(){return this.next.type$() === $I$(3).ENTRY  || this.next.type$() === $I$(3).START_DIRECTORY  });
var ioe=this.next.ioeException$();
if (ioe != null ) throw ioe;
}, 1);

Clazz.newMeth(C$, 'fetchNextIfNeeded', function () {
if (this.next == null ) {
var ev=this.walker.next$();
while (ev != null ){
var ioe=ev.ioeException$();
if (ioe != null ) throw Clazz.new_(Clazz.load('java.io.UncheckedIOException').c$$java_io_IOException,[ioe]);
if (ev.type$() !== $I$(3).END_DIRECTORY ) {
this.next=ev;
return;
}ev=this.walker.next$();
}
}}, p$1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (!this.walker.isOpen$()) throw Clazz.new_(Clazz.load('IllegalStateException'));
p$1.fetchNextIfNeeded.apply(this, []);
return this.next != null ;
});

Clazz.newMeth(C$, 'next$', function () {
if (!this.walker.isOpen$()) throw Clazz.new_(Clazz.load('IllegalStateException'));
p$1.fetchNextIfNeeded.apply(this, []);
if (this.next == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var result=this.next;
this.next=null;
return result;
});

Clazz.newMeth(C$, 'close$', function () {
this.walker.close$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
