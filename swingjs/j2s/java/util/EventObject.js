(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "EventObject", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.source=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O', function (source) {
C$.$init$.apply(this);
if (source == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null source"]);
this.source=source;
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "[source=" + this.source + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
