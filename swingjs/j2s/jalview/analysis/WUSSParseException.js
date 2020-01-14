(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[];
var C$=Clazz.newClass(P$, "WUSSParseException", null, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.problemPos=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J', function (problemPos) {
C$.c$$S$J.apply(this, ["Invalid WUSS Notation", problemPos]);
}, 1);

Clazz.newMeth(C$, 'c$$S$J', function (message, problemPos) {
C$.superclazz.c$$S.apply(this, [message + " at or near position " + problemPos ]);
C$.$init$.apply(this);
this.problemPos=problemPos;
}, 1);

Clazz.newMeth(C$, 'getProblemPos$', function () {
return this.problemPos;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
