(function(){var P$=java.lang,p$1={};
var C$=Clazz.newClass(P$, "String9");
C$.COMPACT_STRINGS=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.COMPACT_STRINGS=false;
{
C$.COMPACT_STRINGS=true;
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.coder=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.coder=($b$[0] = 0, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'isLatin1', function () {
return C$.COMPACT_STRINGS && true ;
}, p$1);

Clazz.newMeth(C$, 'checkIndex$I$I', function (index, length) {
if (index < 0 || index >= length ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$S,["index " + index]);
}}, 1);

Clazz.newMeth(C$, 'checkOffset$I$I', function (offset, length) {
if (offset < 0 || offset > length ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$S,["offset " + offset + ",length " + length ]);
}}, 1);

Clazz.newMeth(C$, 'checkBoundsOffCount$I$I$I', function (offset, count, length) {
if (offset < 0 || count < 0  || offset > length - count ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$S,["offset " + offset + ", count " + count + ", length " + length ]);
}}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:35 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
