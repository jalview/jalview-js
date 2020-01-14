(function(){var P$=Clazz.newPackage("java.nio.charset"),I$=[];
var C$=Clazz.newClass(P$, "CodingErrorAction");
C$.IGNORE=null;
C$.REPLACE=null;
C$.REPORT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.IGNORE=Clazz.new_(C$.c$$S,["IGNORE"]);
C$.REPLACE=Clazz.new_(C$.c$$S,["REPLACE"]);
C$.REPORT=Clazz.new_(C$.c$$S,["REPORT"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
