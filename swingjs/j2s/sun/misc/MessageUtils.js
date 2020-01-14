(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'StringBuffer','Throwable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MessageUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'subst$S$S', function (patt, arg) {
var args=Clazz.array(String, -1, [arg]);
return C$.subst$S$SA(patt, args);
}, 1);

Clazz.newMeth(C$, 'subst$S$S$S', function (patt, arg1, arg2) {
var args=Clazz.array(String, -1, [arg1, arg2]);
return C$.subst$S$SA(patt, args);
}, 1);

Clazz.newMeth(C$, 'subst$S$S$S$S', function (patt, arg1, arg2, arg3) {
var args=Clazz.array(String, -1, [arg1, arg2, arg3]);
return C$.subst$S$SA(patt, args);
}, 1);

Clazz.newMeth(C$, 'subst$S$SA', function (patt, args) {
var result=Clazz.new_($I$(1));
var len=patt.length$();
for (var i=0; i >= 0 && i < len ; i++) {
var ch=patt.charAt$I(i);
if (ch == "%") {
if (i != len) {
var index=Character.digit$C$I(patt.charAt$I(i + 1), 10);
if (index == -1) {
result.append$C(patt.charAt$I(i + 1));
i++;
} else if (index < args.length) {
result.append$S(args[index]);
i++;
}}} else {
result.append$C(ch);
}}
return result.toString();
}, 1);

Clazz.newMeth(C$, 'substProp$S$S', function (propName, arg) {
return C$.subst$S$S(System.getProperty$S(propName), arg);
}, 1);

Clazz.newMeth(C$, 'substProp$S$S$S', function (propName, arg1, arg2) {
return C$.subst$S$S$S(System.getProperty$S(propName), arg1, arg2);
}, 1);

Clazz.newMeth(C$, 'substProp$S$S$S$S', function (propName, arg1, arg2, arg3) {
return C$.subst$S$S$S$S(System.getProperty$S(propName), arg1, arg2, arg3);
}, 1);

Clazz.newMeth(C$, 'toStderr$S', function (msg) {
System.err.println$S(msg);
}, 1);

Clazz.newMeth(C$, 'toStdout$S', function (msg) {
System.out.println$S(msg);
}, 1);

Clazz.newMeth(C$, 'err$S', function (s) {
C$.toStderr$S(s + "\n");
}, 1);

Clazz.newMeth(C$, 'out$S', function (s) {
C$.toStdout$S(s + "\n");
}, 1);

Clazz.newMeth(C$, 'where$', function () {
var t=Clazz.new_($I$(2));
var es=t.getStackTrace$();
for (var i=1; i < es.length; i++) C$.toStderr$S("\t" + es[i].toString() + "\n" );

}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
