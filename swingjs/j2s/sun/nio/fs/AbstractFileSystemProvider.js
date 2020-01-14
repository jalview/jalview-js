(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[];
var C$=Clazz.newClass(P$, "AbstractFileSystemProvider", null, 'java.nio.file.spi.FileSystemProvider');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'split$S', function (attribute) {
var s=Clazz.array(String, [2]);
var pos=attribute.indexOf$I(":");
if (pos == -1) {
s[0]="basic";
s[1]=attribute;
} else {
s[0]=attribute.substring$I$I(0, pos++);
s[1]=(pos == attribute.length$()) ? "" : attribute.substring$I(pos);
}return s;
}, 1);

Clazz.newMeth(C$, 'setAttribute$java_nio_file_Path$S$O$java_nio_file_LinkOptionA', function (file, attribute, value, options) {
var s=C$.split$S(attribute);
if (s[0].length$() == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[attribute]);
var view=this.getFileAttributeView$java_nio_file_Path$S$java_nio_file_LinkOptionA(file, s[0], options);
if (view == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["View '" + s[0] + "' not available" ]);
view.setAttribute$S$O(s[1], value);
});

Clazz.newMeth(C$, 'readAttributes$java_nio_file_Path$S$java_nio_file_LinkOptionA', function (file, attributes, options) {
var s=C$.split$S(attributes);
if (s[0].length$() == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[attributes]);
var view=this.getFileAttributeView$java_nio_file_Path$S$java_nio_file_LinkOptionA(file, s[0], options);
if (view == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["View '" + s[0] + "' not available" ]);
return view.readAttributes$SA(s[1].split$S(","));
});

Clazz.newMeth(C$, 'delete$java_nio_file_Path', function (file) {
this.implDelete$java_nio_file_Path$Z(file, true);
});

Clazz.newMeth(C$, 'deleteIfExists$java_nio_file_Path', function (file) {
return this.implDelete$java_nio_file_Path$Z(file, false);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
