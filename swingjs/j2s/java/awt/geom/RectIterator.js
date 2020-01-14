(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[];
var C$=Clazz.newClass(P$, "RectIterator", null, null, 'java.awt.geom.PathIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.x=0;
this.y=0;
this.w=0;
this.h=0;
this.affine=null;
this.index=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$java_awt_geom_Rectangle2D$java_awt_geom_AffineTransform', function (r, at) {
this.x=r.getX$();
this.y=r.getY$();
this.w=r.getWidth$();
this.h=r.getHeight$();
this.affine=at;
this.index=(this.w < 0  || this.h < 0   ? 6 : 0);
return this;
});

Clazz.newMeth(C$, 'getWindingRule$', function () {
return 1;
});

Clazz.newMeth(C$, 'isDone$', function () {
return this.index > 5;
});

Clazz.newMeth(C$, 'next$', function () {
this.index++;
});

Clazz.newMeth(C$, 'currentSegment$FA', function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["rect iterator out of bounds"]);
}if (this.index == 5) {
return 4;
}coords[0]=this.x;
coords[1]=this.y;
if (this.index == 1 || this.index == 2 ) {
coords[0] += this.w;
}if (this.index == 2 || this.index == 3 ) {
coords[1] += this.h;
}if (this.affine != null ) {
this.affine.transform$FA$I$FA$I$I(coords, 0, coords, 0, 1);
}return (this.index == 0 ? 0 : 1);
});

Clazz.newMeth(C$, 'currentSegment$DA', function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["rect iterator out of bounds"]);
}if (this.index == 5) {
return 4;
}coords[0]=this.x;
coords[1]=this.y;
if (this.index == 1 || this.index == 2 ) {
coords[0] += this.w;
}if (this.index == 2 || this.index == 3 ) {
coords[1] += this.h;
}if (this.affine != null ) {
this.affine.transform$DA$I$DA$I$I(coords, 0, coords, 0, 1);
}return (this.index == 0 ? 0 : 1);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
