(function(){var P$=Clazz.newPackage("sun.util.locale"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LocaleSyntaxException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=-1;
},1);

C$.$fields$=[['I',['index']]]

Clazz.newMeth(C$, 'c$$S',  function (msg) {
C$.c$$S$I.apply(this, [msg, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (msg, errorIndex) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
this.index=errorIndex;
}, 1);

Clazz.newMeth(C$, 'getErrorIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:14 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
