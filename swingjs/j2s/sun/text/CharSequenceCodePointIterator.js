(function(){var P$=Clazz.newPackage("sun.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CharSequenceCodePointIterator", null, 'sun.text.CodePointIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['text','CharSequence']]]

Clazz.newMeth(C$, 'c$$CharSequence', function (text) {
Clazz.super_(C$, this);
this.text=text;
}, 1);

Clazz.newMeth(C$, 'setToStart$', function () {
this.index=0;
});

Clazz.newMeth(C$, 'setToLimit$', function () {
this.index=this.text.length$();
});

Clazz.newMeth(C$, 'next$', function () {
if (this.index < this.text.length$()) {
var cp1=this.text.charAt$I(this.index++);
if (Character.isHighSurrogate$C(cp1) && this.index < this.text.length$() ) {
var cp2=this.text.charAt$I(this.index + 1);
if (Character.isLowSurrogate$C(cp2)) {
++this.index;
return Character.toCodePoint$C$C(cp1, cp2);
}}return cp1.$c();
}return -1;
});

Clazz.newMeth(C$, 'prev$', function () {
if (this.index > 0) {
var cp2=this.text.charAt$I(--this.index);
if (Character.isLowSurrogate$C(cp2) && this.index > 0 ) {
var cp1=this.text.charAt$I(this.index - 1);
if (Character.isHighSurrogate$C(cp1)) {
--this.index;
return Character.toCodePoint$C$C(cp1, cp2);
}}return cp2.$c();
}return -1;
});

Clazz.newMeth(C$, 'charIndex$', function () {
return this.index;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
