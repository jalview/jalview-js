(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.Bits']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ByteOrder");
C$.BIG_ENDIAN=null;
C$.LITTLE_ENDIAN=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.BIG_ENDIAN=Clazz.new_(C$.c$$S,["BIG_ENDIAN"]);
C$.LITTLE_ENDIAN=Clazz.new_(C$.c$$S,["LITTLE_ENDIAN"]);
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

Clazz.newMeth(C$, 'nativeOrder$', function () {
return $I$(1).byteOrder$();
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
