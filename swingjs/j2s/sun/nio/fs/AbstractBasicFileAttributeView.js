(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.util.HashSet','java.util.HashMap','java.util.Collections','sun.nio.fs.Util',['sun.nio.fs.AbstractBasicFileAttributeView','.AttributesBuilder']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractBasicFileAttributeView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.nio.file.attribute.BasicFileAttributeView', 'sun.nio.fs.DynamicFileAttributeView']);
C$.basicAttributeNames=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.basicAttributeNames=$I$(4).newSet$TEA(["size", "creationTime", "lastAccessTime", "lastModifiedTime", "fileKey", "isDirectory", "isRegularFile", "isSymbolicLink", "isOther"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'name$', function () {
return "basic";
});

Clazz.newMeth(C$, 'setAttribute$S$O', function (attribute, value) {
if (attribute.equals$O("lastModifiedTime")) {
this.setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime(value, null, null);
return;
}if (attribute.equals$O("lastAccessTime")) {
this.setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime(null, value, null);
return;
}if (attribute.equals$O("creationTime")) {
this.setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime(null, null, value);
return;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["'" + this.name$() + ":" + attribute + "' not recognized" ]);
});

Clazz.newMeth(C$, 'addRequestedBasicAttributes$java_nio_file_attribute_BasicFileAttributes$sun_nio_fs_AbstractBasicFileAttributeView_AttributesBuilder', function (attrs, builder) {
if (builder.match$S("size")) builder.add$S$O("size", new Long(attrs.size$()));
if (builder.match$S("creationTime")) builder.add$S$O("creationTime", attrs.creationTime$());
if (builder.match$S("lastAccessTime")) builder.add$S$O("lastAccessTime", attrs.lastAccessTime$());
if (builder.match$S("lastModifiedTime")) builder.add$S$O("lastModifiedTime", attrs.lastModifiedTime$());
if (builder.match$S("fileKey")) builder.add$S$O("fileKey", attrs.fileKey$());
if (builder.match$S("isDirectory")) builder.add$S$O("isDirectory", new Boolean(attrs.isDirectory$()));
if (builder.match$S("isRegularFile")) builder.add$S$O("isRegularFile", new Boolean(attrs.isRegularFile$()));
if (builder.match$S("isSymbolicLink")) builder.add$S$O("isSymbolicLink", new Boolean(attrs.isSymbolicLink$()));
if (builder.match$S("isOther")) builder.add$S$O("isOther", new Boolean(attrs.isOther$()));
});

Clazz.newMeth(C$, 'readAttributes$SA', function (requested) {
var builder=$I$(5).create$java_util_Set$SA(C$.basicAttributeNames, requested);
this.addRequestedBasicAttributes$java_nio_file_attribute_BasicFileAttributes$sun_nio_fs_AbstractBasicFileAttributeView_AttributesBuilder(this.readAttributes$(), builder);
return builder.unmodifiableMap$();
});
;
(function(){var C$=Clazz.newClass(P$.AbstractBasicFileAttributeView, "AttributesBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.names=null;
this.map=null;
this.copyAll=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.names=Clazz.new_($I$(1));
this.map=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Set$SA', function (allowed, requested) {
C$.$init$.apply(this);
for (var name, $name = 0, $$name = requested; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
if (name.equals$O("*")) {
this.copyAll=true;
} else {
if (!allowed.contains$O(name)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["'" + name + "' not recognized" ]);
this.names.add$TE(name);
}}
}, 1);

Clazz.newMeth(C$, 'create$java_util_Set$SA', function (allowed, requested) {
return Clazz.new_(C$.c$$java_util_Set$SA,[allowed, requested]);
}, 1);

Clazz.newMeth(C$, 'match$S', function (name) {
return this.copyAll || this.names.contains$O(name) ;
});

Clazz.newMeth(C$, 'add$S$O', function (name, value) {
this.map.put$TK$TV(name, value);
});

Clazz.newMeth(C$, 'unmodifiableMap$', function () {
return $I$(3).unmodifiableMap$java_util_Map(this.map);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
