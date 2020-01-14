(function(){var P$=Clazz.newPackage("sun.applet"),I$=[];
var C$=Clazz.newClass(P$, "AppletEventMulticaster", null, null, 'sun.applet.AppletListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.a=null;
this.b=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$sun_applet_AppletListener$sun_applet_AppletListener', function (a, b) {
C$.$init$.apply(this);
this.a=a;
this.b=b;
}, 1);

Clazz.newMeth(C$, ['appletStateChanged$sun_applet_AppletEvent','appletStateChanged$'], function (e) {
this.a.appletStateChanged$(e);
this.b.appletStateChanged$(e);
});

Clazz.newMeth(C$, 'add$sun_applet_AppletListener$sun_applet_AppletListener', function (a, b) {
return C$.addInternal$sun_applet_AppletListener$sun_applet_AppletListener(a, b);
}, 1);

Clazz.newMeth(C$, 'remove$sun_applet_AppletListener$sun_applet_AppletListener', function (l, oldl) {
return C$.removeInternal$sun_applet_AppletListener$sun_applet_AppletListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'addInternal$sun_applet_AppletListener$sun_applet_AppletListener', function (a, b) {
if (a == null ) return b;
if (b == null ) return a;
return Clazz.new_(C$.c$$sun_applet_AppletListener$sun_applet_AppletListener,[a, b]);
}, 1);

Clazz.newMeth(C$, 'remove$sun_applet_AppletListener', function (oldl) {
if (oldl === this.a ) return this.b;
if (oldl === this.b ) return this.a;
var a2=C$.removeInternal$sun_applet_AppletListener$sun_applet_AppletListener(this.a, oldl);
var b2=C$.removeInternal$sun_applet_AppletListener$sun_applet_AppletListener(this.b, oldl);
if (a2 === this.a  && b2 === this.b  ) {
return this;
}return C$.addInternal$sun_applet_AppletListener$sun_applet_AppletListener(a2, b2);
});

Clazz.newMeth(C$, 'removeInternal$sun_applet_AppletListener$sun_applet_AppletListener', function (l, oldl) {
if (l === oldl  || l == null  ) {
return null;
} else if (Clazz.instanceOf(l, "sun.applet.AppletEventMulticaster")) {
return (l).remove$sun_applet_AppletListener(oldl);
} else {
return l;
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
