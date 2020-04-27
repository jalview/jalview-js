(function(){var P$=Clazz.newPackage("java.nio.charset"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnmappableCharacterException", null, 'java.nio.charset.CharacterCodingException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['inputLength']]]

Clazz.newMeth(C$, 'c$$I', function (inputLength) {
Clazz.super_(C$, this);
this.inputLength=inputLength;
}, 1);

Clazz.newMeth(C$, 'getInputLength$', function () {
return this.inputLength;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return "Input length = " + this.inputLength;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
