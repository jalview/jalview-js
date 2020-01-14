(function(){var P$=Clazz.newPackage("java.text"),I$=[];
var C$=Clazz.newClass(P$, "AttributeEntry", null, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=null;
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator_Attribute$O', function (key, value) {
C$.$init$.apply(this);
this.key=key;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "java.text.AttributeEntry"))) {
return false;
}var other=o;
return other.key.equals$O(this.key) && (this.value == null  ? other.value == null  : other.value.equals$O(this.value)) ;
});

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, ['setValue$O','setValue$TV'], function (newValue) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.key.hashCode$() ^ (this.value == null  ? 0 : this.value.hashCode$());
});

Clazz.newMeth(C$, 'toString', function () {
return this.key.toString() + "=" + this.value.toString() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
