(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "EventListenerProxy", null, null, 'java.util.EventListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.listener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$TT', function (listener) {
C$.$init$.apply(this);
this.listener=listener;
}, 1);

Clazz.newMeth(C$, 'getListener$', function () {
return this.listener;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
