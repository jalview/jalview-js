(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[[0,'java.awt.Point']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DragSourceEvent", null, 'java.util.EventObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.locationSpecified=false;
this.x=0;
this.y=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext', function (dsc) {
C$.superclazz.c$$O.apply(this, [dsc]);
C$.$init$.apply(this);
this.locationSpecified=false;
this.x=0;
this.y=0;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext$I$I', function (dsc, x, y) {
C$.superclazz.c$$O.apply(this, [dsc]);
C$.$init$.apply(this);
this.locationSpecified=true;
this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'getDragSourceContext$', function () {
return this.getSource$();
});

Clazz.newMeth(C$, 'getLocation$', function () {
if (this.locationSpecified) {
return Clazz.new_($I$(1).c$$I$I,[this.x, this.y]);
} else {
return null;
}});

Clazz.newMeth(C$, 'getX$', function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$', function () {
return this.y;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
