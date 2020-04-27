(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'swingjs.JSUtil']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSTempFile", null, 'java.io.File');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isTempFile$', function () {
return true;
});

Clazz.newMeth(C$, 'c$$java_io_File$S', function (dir, name) {
;C$.superclazz.c$$java_io_File$S.apply(this,[dir, name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'deleteOnExit$', function () {
});

Clazz.newMeth(C$, 'cacheBytes$', function () {
$I$(1).cacheFileData$S$O(this.path, this.秘bytes);
});

Clazz.newMeth(C$, 'setBytes$O', function (isOrBytes) {
var ok=$I$(1).setFileBytesStatic$java_io_File$O(this, isOrBytes);
if (ok) {
var path=this.getAbsolutePath$();
$I$(1).cacheFileData$S$O(path, this.秘bytes);
}return ok;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
