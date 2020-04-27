(function(){var P$=Clazz.newPackage("org.jmol.smiles"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InvalidSmilesException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['lastError']]]

Clazz.newMeth(C$, 'getLastError$', function () {
return C$.lastError;
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
C$.lastError=null;
}, 1);

Clazz.newMeth(C$, 'getMessage$', function () {
return C$.lastError;
});

Clazz.newMeth(C$, 'c$$S', function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
C$.lastError=(message.startsWith$S("Jmol SMILES") ? message : "Jmol SMILES Exception: " + message);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
