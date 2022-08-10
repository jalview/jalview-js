(function(){var P$=Clazz.newPackage("javax.print.attribute.standard"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RequestingUserName", null, 'javax.print.attribute.TextSyntax', 'javax.print.attribute.PrintRequestAttribute');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$java_util_Locale',  function (userName, locale) {
;C$.superclazz.c$$S$java_util_Locale.apply(this,[userName, locale]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (object) {
return (C$.superclazz.prototype.equals$O.apply(this, [object]) && Clazz.instanceOf(object, "javax.print.attribute.standard.RequestingUserName") );
});

Clazz.newMeth(C$, 'getCategory$',  function () {
return Clazz.getClass(C$);
});

Clazz.newMeth(C$, 'getName$',  function () {
return "requesting-user-name";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
