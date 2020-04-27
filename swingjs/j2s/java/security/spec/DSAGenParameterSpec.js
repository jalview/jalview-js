(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DSAGenParameterSpec", null, null, 'java.security.spec.AlgorithmParameterSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pLen','qLen','seedLen']]]

Clazz.newMeth(C$, 'c$$I$I', function (primePLen, subprimeQLen) {
C$.c$$I$I$I.apply(this, [primePLen, subprimeQLen, subprimeQLen]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (primePLen, subprimeQLen, seedLen) {
;C$.$init$.apply(this);
switch (primePLen) {
case 1024:
if (subprimeQLen != 160) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["subprimeQLen must be 160 when primePLen=1024"]);
}break;
case 2048:
if (subprimeQLen != 224 && subprimeQLen != 256 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["subprimeQLen must be 224 or 256 when primePLen=2048"]);
}break;
case 3072:
if (subprimeQLen != 256) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["subprimeQLen must be 256 when primePLen=3072"]);
}break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["primePLen must be 1024, 2048, or 3072"]);
}
if (seedLen < subprimeQLen) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["seedLen must be equal to or greater than subprimeQLen"]);
}this.pLen=primePLen;
this.qLen=subprimeQLen;
this.seedLen=seedLen;
}, 1);

Clazz.newMeth(C$, 'getPrimePLength$', function () {
return this.pLen;
});

Clazz.newMeth(C$, 'getSubprimeQLength$', function () {
return this.qLen;
});

Clazz.newMeth(C$, 'getSeedLength$', function () {
return this.seedLen;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
