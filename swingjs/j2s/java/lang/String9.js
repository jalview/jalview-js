(function(){var P$=java.lang,p$1={};
/*c*/var C$=Clazz.newClass(P$, "String9");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.coder=($b$[0] = 0, $b$[0]);
},1);

C$.$fields$=[['B',['coder']]
,['Z',['COMPACT_STRINGS']]]

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

C$.$static$=function(){C$.$static$=0;
{
C$.COMPACT_STRINGS=true;
};
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
