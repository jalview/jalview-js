(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "IllegalFormatWidthException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['w']]]

Clazz.newMeth(C$, 'c$$I',  function (w) {
Clazz.super_(C$, this);
this.w=w;
}, 1);

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.w;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return Integer.toString$I(this.w);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:12 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
