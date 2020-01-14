(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.nio.charset.Charset','java.security.AccessController','sun.security.action.GetPropertyAction','java.util.HashSet','java.nio.file.LinkOption','AssertionError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Util");
C$.jnuEncoding=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.jnuEncoding=$I$(1).forName$S($I$(2).doPrivileged$java_security_PrivilegedAction(Clazz.new_($I$(3).c$$S,["sun.jnu.encoding"])));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'jnuEncoding$', function () {
return C$.jnuEncoding;
}, 1);

Clazz.newMeth(C$, 'toBytes$S', function (s) {
return s.getBytes$java_nio_charset_Charset(C$.jnuEncoding);
}, 1);

Clazz.newMeth(C$, 'toString$BA', function (bytes) {
return  String.instantialize(bytes, C$.jnuEncoding);
}, 1);

Clazz.newMeth(C$, 'split$S$C', function (s, c) {
var count=0;
for (var i=0; i < s.length$(); i++) {
if (s.charAt$I(i) == c) count++;
}
var result=Clazz.array(String, [count + 1]);
var n=0;
var last=0;
for (var i=0; i < s.length$(); i++) {
if (s.charAt$I(i) == c) {
result[n++]=s.substring$I$I(last, i);
last=i + 1;
}}
result[n]=s.substring$I$I(last, s.length$());
return result;
}, 1);

Clazz.newMeth(C$, 'newSet$TEA', function (elements) {
var set=Clazz.new_($I$(4));
for (var e, $e = 0, $$e = elements; $e<$$e.length&&((e=($$e[$e])),1);$e++) {
set.add$TE(e);
}
return set;
}, 1);

Clazz.newMeth(C$, 'newSet$java_util_Set$TEA', function (other, elements) {
var set=Clazz.new_($I$(4).c$$java_util_Collection,[other]);
for (var e, $e = 0, $$e = elements; $e<$$e.length&&((e=($$e[$e])),1);$e++) {
set.add$TE(e);
}
return set;
}, 1);

Clazz.newMeth(C$, 'followLinks$java_nio_file_LinkOptionA', function (options) {
var followLinks=true;
for (var option, $option = 0, $$option = options; $option<$$option.length&&((option=($$option[$option])),1);$option++) {
if (option === $I$(5).NOFOLLOW_LINKS ) {
followLinks=false;
} else if (option == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
} else {
throw Clazz.new_($I$(6).c$$O,["Should not get here"]);
}}
return followLinks;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
