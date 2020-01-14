(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[[0,['java.awt.geom.Rectangle2D','.Double'],'java.awt.Rectangle','java.awt.geom.FlatteningPathIterator','InternalError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RectangularShape", null, null, ['java.awt.Shape', 'Cloneable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMinX$', function () {
return this.getX$();
});

Clazz.newMeth(C$, 'getMinY$', function () {
return this.getY$();
});

Clazz.newMeth(C$, 'getMaxX$', function () {
return this.getX$() + this.getWidth$();
});

Clazz.newMeth(C$, 'getMaxY$', function () {
return this.getY$() + this.getHeight$();
});

Clazz.newMeth(C$, 'getCenterX$', function () {
return this.getX$() + this.getWidth$() / 2.0;
});

Clazz.newMeth(C$, 'getCenterY$', function () {
return this.getY$() + this.getHeight$() / 2.0;
});

Clazz.newMeth(C$, 'getFrame$', function () {
return Clazz.new_($I$(1).c$$D$D$D$D,[this.getX$(), this.getY$(), this.getWidth$(), this.getHeight$()]);
});

Clazz.newMeth(C$, 'setFrame$java_awt_geom_Point2D$java_awt_geom_Dimension2D', function (loc, size) {
this.setFrame$D$D$D$D(loc.getX$(), loc.getY$(), size.getWidth$(), size.getHeight$());
});

Clazz.newMeth(C$, 'setFrame$java_awt_geom_Rectangle2D', function (r) {
this.setFrame$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'setFrameFromDiagonal$D$D$D$D', function (x1, y1, x2, y2) {
if (x2 < x1 ) {
var t=x1;
x1=x2;
x2=t;
}if (y2 < y1 ) {
var t=y1;
y1=y2;
y2=t;
}this.setFrame$D$D$D$D(x1, y1, x2 - x1, y2 - y1);
});

Clazz.newMeth(C$, 'setFrameFromDiagonal$java_awt_geom_Point2D$java_awt_geom_Point2D', function (p1, p2) {
this.setFrameFromDiagonal$D$D$D$D(p1.getX$(), p1.getY$(), p2.getX$(), p2.getY$());
});

Clazz.newMeth(C$, 'setFrameFromCenter$D$D$D$D', function (centerX, centerY, cornerX, cornerY) {
var halfW=Math.abs(cornerX - centerX);
var halfH=Math.abs(cornerY - centerY);
this.setFrame$D$D$D$D(centerX - halfW, centerY - halfH, halfW * 2.0, halfH * 2.0);
});

Clazz.newMeth(C$, 'setFrameFromCenter$java_awt_geom_Point2D$java_awt_geom_Point2D', function (center, corner) {
this.setFrameFromCenter$D$D$D$D(center.getX$(), center.getY$(), corner.getX$(), corner.getY$());
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Point2D', function (p) {
return this.contains$D$D(p.getX$(), p.getY$());
});

Clazz.newMeth(C$, 'intersects$java_awt_geom_Rectangle2D', function (r) {
return this.intersects$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Rectangle2D', function (r) {
return this.contains$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'getBounds$', function () {
var width=this.getWidth$();
var height=this.getHeight$();
if (width < 0  || height < 0  ) {
return Clazz.new_($I$(2));
}var x=this.getX$();
var y=this.getY$();
var x1=Math.floor(x);
var y1=Math.floor(y);
var x2=Math.ceil(x + width);
var y2=Math.ceil(y + height);
return Clazz.new_($I$(2).c$$I$I$I$I,[(x1|0), (y1|0), ((x2 - x1)|0), ((y2 - y1)|0)]);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform$D', function (at, flatness) {
return Clazz.new_($I$(3).c$$java_awt_geom_PathIterator$D,[this.getPathIterator$java_awt_geom_AffineTransform(at), flatness]);
});

Clazz.newMeth(C$, 'clone$', function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(4));
} else {
throw e;
}
}
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
