(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
var C$=Clazz.newClass(P$, "P3", null, 'javajs.util.T3');
C$.unlikely=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'newP$javajs_util_T3', function (t) {
var p=Clazz.new_(C$);
p.x=t.x;
p.y=t.y;
p.z=t.z;
return p;
}, 1);

Clazz.newMeth(C$, 'getUnlikely$', function () {
return (C$.unlikely == null  ? C$.unlikely=C$.new3$F$F$F(3.1415927, 2.7182817, 8.539734) : C$.unlikely);
}, 1);

Clazz.newMeth(C$, 'new3$F$F$F', function (x, y, z) {
var p=Clazz.new_(C$);
p.x=x;
p.y=y;
p.z=z;
return p;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
