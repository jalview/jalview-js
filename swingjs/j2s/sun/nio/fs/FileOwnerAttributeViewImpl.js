(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.util.HashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileOwnerAttributeViewImpl", null, null, ['java.nio.file.attribute.FileOwnerAttributeView', 'sun.nio.fs.DynamicFileAttributeView']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.view=null;
this.isPosixView=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_attribute_PosixFileAttributeView', function (view) {
C$.$init$.apply(this);
this.view=view;
this.isPosixView=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_attribute_AclFileAttributeView', function (view) {
C$.$init$.apply(this);
this.view=view;
this.isPosixView=false;
}, 1);

Clazz.newMeth(C$, 'name$', function () {
return "owner";
});

Clazz.newMeth(C$, 'setAttribute$S$O', function (attribute, value) {
if (attribute.equals$O("owner")) {
this.setOwner$java_nio_file_attribute_UserPrincipal(value);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["'" + this.name$() + ":" + attribute + "' not recognized" ]);
}});

Clazz.newMeth(C$, 'readAttributes$SA', function (attributes) {
var result=Clazz.new_($I$(1));
for (var attribute, $attribute = 0, $$attribute = attributes; $attribute<$$attribute.length&&((attribute=($$attribute[$attribute])),1);$attribute++) {
if (attribute.equals$O("*") || attribute.equals$O("owner") ) {
result.put$TK$TV("owner", this.getOwner$());
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["'" + this.name$() + ":" + attribute + "' not recognized" ]);
}}
return result;
});

Clazz.newMeth(C$, 'getOwner$', function () {
if (this.isPosixView) {
return (this.view).readAttributes$().owner$();
} else {
return (this.view).getOwner$();
}});

Clazz.newMeth(C$, 'setOwner$java_nio_file_attribute_UserPrincipal', function (owner) {
if (this.isPosixView) {
(this.view).setOwner$java_nio_file_attribute_UserPrincipal(owner);
} else {
(this.view).setOwner$java_nio_file_attribute_UserPrincipal(owner);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
