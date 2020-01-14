(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.RegSyntax']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RegSyntaxError", null, 'Error');
C$.RegSyntaxErrorEnabled=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.RegSyntaxErrorEnabled=false;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
C$.superclazz.c$$S.apply(this, [s]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'endItAll$S', function (s) {
if (C$.RegSyntaxErrorEnabled) {
throw Clazz.new_(C$.c$$S,[s]);
}throw Clazz.new_($I$(1).c$$S,[s]);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
