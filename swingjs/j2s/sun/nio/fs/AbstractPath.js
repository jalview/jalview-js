(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.io.File',['java.nio.file.WatchEvent','.Modifier']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractPath", null, null, 'java.nio.file.Path');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'startsWith$S', function (other) {
return this.startsWith$java_nio_file_Path(this.getFileSystem$().getPath$S$SA(other, []));
});

Clazz.newMeth(C$, 'endsWith$S', function (other) {
return this.endsWith$java_nio_file_Path(this.getFileSystem$().getPath$S$SA(other, []));
});

Clazz.newMeth(C$, 'resolve$S', function (other) {
return this.resolve$java_nio_file_Path(this.getFileSystem$().getPath$S$SA(other, []));
});

Clazz.newMeth(C$, 'resolveSibling$java_nio_file_Path', function (other) {
if (other == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var parent=this.getParent$();
return (parent == null ) ? other : parent.resolve$java_nio_file_Path(other);
});

Clazz.newMeth(C$, 'resolveSibling$S', function (other) {
return this.resolveSibling$java_nio_file_Path(this.getFileSystem$().getPath$S$SA(other, []));
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.AbstractPath$1||
(function(){var C$=Clazz.newClass(P$, "AbstractPath$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.i=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return (this.i < this.b$['java.nio.file.Path'].getNameCount$.apply(this.b$['java.nio.file.Path'], []));
});

Clazz.newMeth(C$, 'next$', function () {
if (this.i < this.b$['java.nio.file.Path'].getNameCount$.apply(this.b$['java.nio.file.Path'], [])) {
var result=this.b$['java.nio.file.Path'].getName$I.apply(this.b$['java.nio.file.Path'], [this.i]);
this.i++;
return result;
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.AbstractPath$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'toFile$', function () {
return Clazz.new_($I$(1).c$$S,[this.toString()]);
});

Clazz.newMeth(C$, 'register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA', function (watcher, events) {
return this.register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA(watcher, events, Clazz.array($I$(2), [0]));
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
