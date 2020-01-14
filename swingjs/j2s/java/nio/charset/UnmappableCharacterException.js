(function(){var P$=Clazz.newPackage("java.nio.charset"),I$=[];
var C$=Clazz.newClass(P$, "UnmappableCharacterException", null, 'java.nio.charset.CharacterCodingException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.inputLength=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (inputLength) {
Clazz.super_(C$, this,1);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
