(function(){var P$=Clazz.newPackage("java.util.spi"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LocaleServiceProvider");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale', function (locale) {
locale=locale.stripExtensions$();
for (var available, $available = 0, $$available = this.getAvailableLocales$(); $available<$$available.length&&((available=($$available[$available])),1);$available++) {
if (locale.equals$O(available.stripExtensions$())) {
return true;
}}
return false;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:46 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
