(function(){var P$=Clazz.newPackage("java.net"),I$=[];
var C$=Clazz.newClass(P$, "URLEncoder");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'encode$S', function (s) {
return (1?encodeURIComponent(s):null);
}, 1);

Clazz.newMeth(C$, 'encode$S$S', function (s, enc) {
return (1?encodeURIComponent(s):null);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
