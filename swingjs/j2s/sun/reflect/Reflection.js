(function(){var P$=Clazz.newPackage("sun.reflect"),I$=[[0,'InternalError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Reflection");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCallerClass$', function () {
var cl=null;

var m;
(m = arguments.callee) && (m = m.caller) && (m = m.exClazz) && (cl = Clazz.getClass(m)) || null;
return cl;
}, 1);

Clazz.newMeth(C$, 'getCallerClass$I', function (depth) {
var callee=arguments ||null;
for (var i=0; i < depth; i++) {
callee=callee.callee ||null;
if (callee == null ) return null;
}
var cl=null;

var m = (m = callee) && (m = m.caller) && (m = m.exClazz) && (cl = Clazz.getClass(m)) || null;
return cl;
}, 1);

Clazz.newMeth(C$, 'isSameClassPackage$Class$Class', function (c1, c2) {
return C$.isSameClassPackage$ClassLoader$S$ClassLoader$S(c1.getClassLoader$(), c1.getName$(), c2.getClassLoader$(), c2.getName$());
}, 1);

Clazz.newMeth(C$, 'isSameClassPackage$ClassLoader$S$ClassLoader$S', function (loader1, name1, loader2, name2) {
if (loader1 !== loader2 ) {
return false;
} else {
var lastDot1=name1.lastIndexOf$I(".");
var lastDot2=name2.lastIndexOf$I(".");
if ((lastDot1 == -1) || (lastDot2 == -1) ) {
return (lastDot1 == lastDot2);
} else {
var idx1=0;
var idx2=0;
if (name1.charAt$I(idx1) == "[") {
do {
idx1++;
} while (name1.charAt$I(idx1) == "[");
if (name1.charAt$I(idx1) != "L") {
throw Clazz.new_($I$(1).c$$S,["Illegal class name " + name1]);
}}if (name2.charAt$I(idx2) == "[") {
do {
idx2++;
} while (name2.charAt$I(idx2) == "[");
if (name2.charAt$I(idx2) != "L") {
throw Clazz.new_($I$(1).c$$S,["Illegal class name " + name2]);
}}var length1=lastDot1 - idx1;
var length2=lastDot2 - idx2;
if (length1 != length2) {
return false;
}return name1.regionMatches$Z$I$S$I$I(false, idx1, name2, idx2, length1);
}}}, 1);

Clazz.newMeth(C$, 'isSubclassOf$Class$Class', function (queryClass, ofClass) {
while (queryClass != null ){
if (queryClass === ofClass ) {
return true;
}queryClass=queryClass.getSuperclass$();
}
return false;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
