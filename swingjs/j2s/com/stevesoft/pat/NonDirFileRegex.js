(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
var C$=Clazz.newClass(P$, "NonDirFileRegex", null, 'com.stevesoft.pat.FileRegex');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.dirflag=2;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (fp) {
C$.superclazz.c$$S.apply(this, [fp]);
C$.$init$.apply(this);
this.dirflag=2;
}, 1);

Clazz.newMeth(C$, 'list$S', function (f) {
return P$.FileRegex.list$S$I(f, 2);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
