(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.util.Locale','StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractFileTypeDetector", null, 'java.nio.file.spi.FileTypeDetector');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'probeContentType$java_nio_file_Path', function (file) {
if (file == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["\'file\' is null"]);
var result=this.implProbeContentType$java_nio_file_Path(file);
return (result == null ) ? null : C$.parse$S(result);
});

Clazz.newMeth(C$, 'parse$S', function (s) {
var slash=s.indexOf$I("/");
var semicolon=s.indexOf$I(";");
if (slash < 0) return null;
var type=s.substring$I$I(0, slash).trim$().toLowerCase$java_util_Locale($I$(1).ENGLISH);
if (!C$.isValidToken$S(type)) return null;
var subtype=(semicolon < 0) ? s.substring$I(slash + 1) : s.substring$I$I(slash + 1, semicolon);
subtype=subtype.trim$().toLowerCase$java_util_Locale($I$(1).ENGLISH);
if (!C$.isValidToken$S(subtype)) return null;
var sb=Clazz.new_($I$(2).c$$I,[type.length$() + subtype.length$() + 1 ]);
sb.append$S(type);
sb.append$C("/");
sb.append$S(subtype);
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'isTokenChar$C', function (c) {
return (c.$c() > 32 ) && (c.$c() < 127 ) && ("()<>@,;:/[]?=\\\"".indexOf$I(c) < 0)  ;
}, 1);

Clazz.newMeth(C$, 'isValidToken$S', function (s) {
var len=s.length$();
if (len == 0) return false;
for (var i=0; i < len; i++) {
if (!C$.isTokenChar$C(s.charAt$I(i))) return false;
}
return true;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
