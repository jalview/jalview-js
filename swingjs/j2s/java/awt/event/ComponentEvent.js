(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
var C$=Clazz.newClass(P$, "ComponentEvent", null, 'java.awt.AWTEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I', function (source, id) {
C$.superclazz.c$$O$I.apply(this, [source, id]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getComponent$', function () {
return (Clazz.instanceOf(this.source, "java.awt.Component")) ? this.source : null;
});

Clazz.newMeth(C$, 'paramString$', function () {
var typeStr;
var b=(this.source != null  ? (this.source).getBounds$() : null);
switch (this.id) {
case 102:
typeStr="COMPONENT_SHOWN";
break;
case 103:
typeStr="COMPONENT_HIDDEN";
break;
case 100:
typeStr="COMPONENT_MOVED (" + b.x + "," + b.y + " " + b.width + "x" + b.height + ")" ;
break;
case 101:
typeStr="COMPONENT_RESIZED (" + b.x + "," + b.y + " " + b.width + "x" + b.height + ")" ;
break;
default:
typeStr="unknown type";
}
return typeStr;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
