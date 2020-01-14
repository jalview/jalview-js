(function(){var P$=Clazz.newPackage("swingjs");
var C$=Clazz.newClass(P$, "JSThreadGroup", null, 'ThreadGroup');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
this.html5Applet=J2S._applets[name] ||null;
}, 1);

Clazz.newMeth(C$, 'c$$ThreadGroup$S', function (parent, name) {
C$.superclazz.c$$ThreadGroup$S.apply(this, [parent, name]);
C$.$init$.apply(this);
this.html5Applet=J2S._applets[name] ||null;
}, 1);

Clazz.newMeth(C$, 'getHtmlApplet$', function () {
return this.html5Applet;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
