(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[];
var C$=Clazz.newClass(P$, "MouseState");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.x=0;
this.y=0;
this.modifiers=0;
this.time=0;
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.x=-1000;
this.y=-1000;
this.modifiers=0;
this.time=-1;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'set$J$I$I$I', function (time, x, y, modifiers) {
this.time=time;
this.x=x;
this.y=y;
this.modifiers=modifiers;
});

Clazz.newMeth(C$, 'setCurrent$org_jmol_viewer_MouseState$I', function (current, clickCount) {
this.time=current.time;
if (clickCount < 2) {
this.x=current.x;
this.y=current.y;
}this.modifiers=current.modifiers;
});

Clazz.newMeth(C$, 'inRange$I$I$I', function (xyRange, x, y) {
return (Math.abs(this.x - x) <= xyRange && Math.abs(this.y - y) <= xyRange );
});

Clazz.newMeth(C$, 'check$I$I$I$I$J$J', function (xyRange, x, y, modifiers, time, delayMax) {
return (this.modifiers == modifiers && (delayMax >= 2147483647 ? this.inRange$I$I$I(xyRange, x, y) : time - this.time < delayMax && time - this.time > 20 ) );
});

Clazz.newMeth(C$, 'is$org_jmol_viewer_MouseState', function (current) {
return (current.x == this.x && current.y == this.y  && current.time == this.time );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
