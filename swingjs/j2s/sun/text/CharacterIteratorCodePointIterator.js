(function(){var P$=Clazz.newPackage("sun.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CharacterIteratorCodePointIterator", null, 'sun.text.CodePointIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['iter','java.text.CharacterIterator']]]

Clazz.newMeth(C$, 'c$$java_text_CharacterIterator',  function (iter) {
Clazz.super_(C$, this);
this.iter=iter;
}, 1);

Clazz.newMeth(C$, 'setToStart$',  function () {
this.iter.setIndex$I(this.iter.getBeginIndex$());
});

Clazz.newMeth(C$, 'setToLimit$',  function () {
this.iter.setIndex$I(this.iter.getEndIndex$());
});

Clazz.newMeth(C$, 'next$',  function () {
var cp1=this.iter.current$();
if (cp1 != "\uffff") {
var cp2=this.iter.next$();
if (Character.isHighSurrogate$C(cp1) && cp2 != "\uffff" ) {
if (Character.isLowSurrogate$C(cp2)) {
this.iter.next$();
return Character.toCodePoint$C$C(cp1, cp2);
}}return cp1.$c();
}return -1;
});

Clazz.newMeth(C$, 'prev$',  function () {
var cp2=this.iter.previous$();
if (cp2 != "\uffff") {
if (Character.isLowSurrogate$C(cp2)) {
var cp1=this.iter.previous$();
if (Character.isHighSurrogate$C(cp1)) {
return Character.toCodePoint$C$C(cp1, cp2);
}this.iter.next$();
}return cp2.$c();
}return -1;
});

Clazz.newMeth(C$, 'charIndex$',  function () {
return this.iter.getIndex$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:09 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
