(function(){var P$=Clazz.newPackage("sun.nio.cs"),I$=[[0,'sun.nio.cs.StandardCharsets',['sun.nio.cs.UTF_16LE','.Decoder'],['sun.nio.cs.UTF_16LE','.Encoder']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UTF_16LE", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.nio.cs.Unicode');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S$SA.apply(this, ["UTF-16LE", $I$(1).aliases_UTF_16LE]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'historicalName$', function () {
return "UnicodeLittleUnmarked";
});

Clazz.newMeth(C$, 'newDecoder$', function () {
return Clazz.new_($I$(2).c$$java_nio_charset_Charset,[this]);
});

Clazz.newMeth(C$, 'newEncoder$', function () {
return Clazz.new_($I$(3).c$$java_nio_charset_Charset,[this]);
});
;
(function(){var C$=Clazz.newClass(P$.UTF_16LE, "Decoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.nio.cs.UnicodeDecoder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset', function (cs) {
C$.superclazz.c$$java_nio_charset_Charset$I.apply(this, [cs, 2]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.UTF_16LE, "Encoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.nio.cs.UnicodeEncoder');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset', function (cs) {
C$.superclazz.c$$java_nio_charset_Charset$I$Z.apply(this, [cs, 1, false]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
