(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "WUSSParseException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['problemPos']]]

Clazz.newMeth(C$, 'c$$J', function (problemPos) {
C$.c$$S$J.apply(this, ["Invalid WUSS Notation", problemPos]);
}, 1);

Clazz.newMeth(C$, 'c$$S$J', function (message, problemPos) {
;C$.superclazz.c$$S.apply(this,[message + " at or near position " + problemPos ]);C$.$init$.apply(this);
this.problemPos=problemPos;
}, 1);

Clazz.newMeth(C$, 'getProblemPos$', function () {
return this.problemPos;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
