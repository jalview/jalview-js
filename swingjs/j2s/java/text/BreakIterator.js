(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'java.lang.ref.SoftReference','InternalError','java.text.StringCharacterIterator','java.util.Locale',['java.text.BreakIterator','.BreakIteratorCache'],'sun.util.locale.provider.LocaleProviderAdapter','java.text.spi.BreakIteratorProvider','sun.util.locale.provider.LocaleServiceProviderPool']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BreakIterator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.iterCache=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.iterCache=Clazz.array($I$(1), [4]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(2).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'preceding$I', function (offset) {
var pos=this.following$I(offset);
while (pos >= offset && pos != -1 ){
pos=this.previous$();
}
return pos;
});

Clazz.newMeth(C$, 'isBoundary$I', function (offset) {
if (offset == 0) {
return true;
}var boundary=this.following$I(offset - 1);
if (boundary == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return boundary == offset;
});

Clazz.newMeth(C$, 'setText$S', function (newText) {
this.setText$java_text_CharacterIterator(Clazz.new_($I$(3).c$$S,[newText]));
});

Clazz.newMeth(C$, 'getWordInstance$', function () {
return C$.getWordInstance$java_util_Locale($I$(4).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getWordInstance$java_util_Locale', function (locale) {
return C$.getBreakInstance$java_util_Locale$I(locale, 1);
}, 1);

Clazz.newMeth(C$, 'getLineInstance$', function () {
return C$.getLineInstance$java_util_Locale($I$(4).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getLineInstance$java_util_Locale', function (locale) {
return C$.getBreakInstance$java_util_Locale$I(locale, 2);
}, 1);

Clazz.newMeth(C$, 'getCharacterInstance$', function () {
return C$.getCharacterInstance$java_util_Locale($I$(4).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getCharacterInstance$java_util_Locale', function (locale) {
return C$.getBreakInstance$java_util_Locale$I(locale, 0);
}, 1);

Clazz.newMeth(C$, 'getSentenceInstance$', function () {
return C$.getSentenceInstance$java_util_Locale($I$(4).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getSentenceInstance$java_util_Locale', function (locale) {
return C$.getBreakInstance$java_util_Locale$I(locale, 3);
}, 1);

Clazz.newMeth(C$, 'getBreakInstance$java_util_Locale$I', function (locale, type) {
if (C$.iterCache[type] != null ) {
var cache=C$.iterCache[type].get$();
if (cache != null ) {
if (cache.getLocale$().equals$O(locale)) {
return cache.createBreakInstance$();
}}}var result=C$.createBreakInstance$java_util_Locale$I(locale, type);
var cache=Clazz.new_($I$(5).c$$java_util_Locale$java_text_BreakIterator,[locale, result]);
C$.iterCache[type]=Clazz.new_($I$(1).c$$TT,[cache]);
return result;
}, 1);

Clazz.newMeth(C$, 'createBreakInstance$java_util_Locale$I', function (locale, type) {
var adapter=$I$(6).getAdapter$Class$java_util_Locale(Clazz.getClass($I$(7)), locale);
var iterator=C$.createBreakInstance$sun_util_locale_provider_LocaleProviderAdapter$java_util_Locale$I(adapter, locale, type);
if (iterator == null ) {
iterator=C$.createBreakInstance$sun_util_locale_provider_LocaleProviderAdapter$java_util_Locale$I($I$(6).forJRE$(), locale, type);
}return iterator;
}, 1);

Clazz.newMeth(C$, 'createBreakInstance$sun_util_locale_provider_LocaleProviderAdapter$java_util_Locale$I', function (adapter, locale, type) {
var breakIteratorProvider=adapter.getBreakIteratorProvider$();
var iterator=null;
switch (type) {
case 0:
iterator=breakIteratorProvider.getCharacterInstance$java_util_Locale(locale);
break;
case 1:
iterator=breakIteratorProvider.getWordInstance$java_util_Locale(locale);
break;
case 2:
iterator=breakIteratorProvider.getLineInstance$java_util_Locale(locale);
break;
case 3:
iterator=breakIteratorProvider.getSentenceInstance$java_util_Locale(locale);
break;
}
return iterator;
}, 1);

Clazz.newMeth(C$, 'getAvailableLocales$', function () {
var pool=$I$(8).getPool$Class(Clazz.getClass($I$(7)));
return pool.getAvailableLocales$();
}, 1);
;
(function(){var C$=Clazz.newClass(P$.BreakIterator, "BreakIteratorCache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.iter=null;
this.locale=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale$java_text_BreakIterator', function (locale, iter) {
C$.$init$.apply(this);
this.locale=locale;
this.iter=iter.clone$();
}, 1);

Clazz.newMeth(C$, 'getLocale$', function () {
return this.locale;
});

Clazz.newMeth(C$, 'createBreakInstance$', function () {
return this.iter.clone$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
