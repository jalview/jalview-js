(function(){var P$=Clazz.newPackage("javax.swing.filechooser"),I$=[[0,'java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileNameExtensionFilter", null, 'javax.swing.filechooser.FileFilter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.description=null;
this.extensions=null;
this.lowerCaseExtensions=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$SA', function (description, extensions) {
C$.superclazz.c$$SA.apply(this, [extensions]);
C$.$init$.apply(this);
if (extensions == null  || extensions.length == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Extensions must be non-null and not empty"]);
}this.description=description;
this.extensions=Clazz.array(String, [extensions.length]);
this.lowerCaseExtensions=Clazz.array(String, [extensions.length]);
for (var i=0; i < extensions.length; i++) {
if (extensions[i] == null  || extensions[i].length$() == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Each extension must be non-null and not empty"]);
}this.extensions[i]=extensions[i];
this.lowerCaseExtensions[i]=extensions[i].toLowerCase$();
}
}, 1);

Clazz.newMeth(C$, 'accept$java_io_File', function (f) {
if (f != null ) {
if (f.isDirectory$()) {
return true;
}var fileName=f.getName$();
var i=fileName.lastIndexOf$I(".");
if (i > 0 && i < fileName.length$() - 1 ) {
var desiredExtension=fileName.substring$I(i + 1).toLowerCase$();
for (var extension, $extension = 0, $$extension = this.lowerCaseExtensions; $extension<$$extension.length&&((extension=($$extension[$extension])),1);$extension++) {
if (desiredExtension.equals$O(extension)) {
return true;
}}
}}return false;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'getExtensions$', function () {
var result=Clazz.array(String, [this.extensions.length]);
System.arraycopy$O$I$O$I$I(this.extensions, 0, result, 0, this.extensions.length);
return result;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "[description=" + this.getDescription$() + " extensions=" + $I$(1).asList$TTA(this.getExtensions$()) + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
