(function(){var P$=Clazz.newPackage("javax.print.attribute"),I$=[[0,'java.util.Locale']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TextSyntax", null, null, ['java.io.Serializable', 'Cloneable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
this.locale=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Locale', function (value, locale) {
C$.$init$.apply(this);
this.value=C$.verify$S(value);
this.locale=C$.verify$java_util_Locale(locale);
}, 1);

Clazz.newMeth(C$, 'verify$S', function (value) {
if (value == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[" value is null"]);
}return value;
}, 1);

Clazz.newMeth(C$, 'verify$java_util_Locale', function (locale) {
if (locale == null ) {
return $I$(1).getDefault$();
}return locale;
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'getLocale$', function () {
return this.locale;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.value.hashCode$() ^ this.locale.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (object) {
return (object != null  && Clazz.instanceOf(object, "javax.print.attribute.TextSyntax")  && this.value.equals$O((object).value)  && this.locale.equals$O((object).locale) );
});

Clazz.newMeth(C$, 'toString', function () {
return this.value;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
