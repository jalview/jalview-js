(function(){var P$=Clazz.newPackage("java.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MessageFormat");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['pattern']]]

Clazz.newMeth(C$, 'c$$S',  function (pattern) {
;C$.$init$.apply(this);
this.pattern=pattern;
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Locale',  function (pattern, locale) {
;C$.$init$.apply(this);
this.pattern=pattern;
}, 1);

Clazz.newMeth(C$, 'format$S$OA',  function (pattern, args) {
{
return pattern.replace (/\{(\d+)\}/g, function ($0, $1) { var i = parseInt ($1);
if (args == null) return null;
return args[i];
});
}
}, 1);

Clazz.newMeth(C$, 'format$O',  function (obj) {
return C$.format$S$OA(this.pattern, Clazz.array(java.lang.Object, -1, [obj]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:09 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
