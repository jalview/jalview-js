(function(){var P$=Clazz.newPackage("sun.applet"),I$=[];
var C$=Clazz.newClass(P$, "AppletEvent", null, 'java.util.EventObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.arg=null;
this.id=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$I$O', function (source, id, argument) {
C$.superclazz.c$$O.apply(this, [source]);
C$.$init$.apply(this);
this.arg=argument;
this.id=id;
}, 1);

Clazz.newMeth(C$, 'getID$', function () {
return this.id;
});

Clazz.newMeth(C$, 'getArgument$', function () {
return this.arg;
});

Clazz.newMeth(C$, 'toString', function () {
var str=this.getClass$().getName$() + "[source=" + this.source + " + id=" + this.id ;
if (this.arg != null ) {
str += " + arg=" + this.arg;
}str += " ]";
return str;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
