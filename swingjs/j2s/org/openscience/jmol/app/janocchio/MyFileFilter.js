(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MyFileFilter", null, 'javax.swing.filechooser.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['label'],'O',['extensions','String[]']]]

Clazz.newMeth(C$, 'c$$SA$S', function (extensions, label) {
Clazz.super_(C$, this);
this.extensions=extensions;
this.label=label;
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (extension, label) {
Clazz.super_(C$, this);
var s=Clazz.array(String, [1]);
s[0]=extension;
this.extensions=s;
this.label=label;
}, 1);

Clazz.newMeth(C$, 'accept$java_io_File', function (f) {
if (f.isDirectory$()) {
return true;
}return this.checkExtension$java_io_File(f);
});

Clazz.newMeth(C$, 'getDescription$', function () {
var ext= String.instantialize();
for (var j=0; j < this.extensions.length; j++) {
ext=ext + "." + this.extensions[j] + " " ;
}
return this.label + " ( " + ext + ")" ;
});

Clazz.newMeth(C$, 'checkExtension$java_io_File', function (f) {
var ext=null;
var s=f.getName$();
var i=s.lastIndexOf$I(".");
if (i > 0 && i < s.length$() - 1 ) {
ext=s.substring$I(i + 1).toLowerCase$();
}if (ext != null ) {
for (var j=0; j < this.extensions.length; j++) {
if (ext.equals$O(this.extensions[j])) {
return true;
}}
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
