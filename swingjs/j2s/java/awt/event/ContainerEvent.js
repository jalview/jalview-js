(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
var C$=Clazz.newClass(P$, "ContainerEvent", null, 'java.awt.event.ComponentEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.child=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$java_awt_Component', function (source, id, child) {
C$.superclazz.c$$java_awt_Component$I.apply(this, [source, id]);
C$.$init$.apply(this);
this.child=child;
}, 1);

Clazz.newMeth(C$, 'getContainer$', function () {
return (Clazz.instanceOf(this.source, "java.awt.Container")) ? this.source : null;
});

Clazz.newMeth(C$, 'getChild$', function () {
return this.child;
});

Clazz.newMeth(C$, 'paramString$', function () {
var typeStr;
switch (this.id) {
case 300:
typeStr="COMPONENT_ADDED";
break;
case 301:
typeStr="COMPONENT_REMOVED";
break;
default:
typeStr="unknown type";
}
return typeStr + ",child=" + this.child.getName$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
