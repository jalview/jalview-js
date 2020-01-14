(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.Point','java.awt.Dimension',['java.awt.geom.Rectangle2D','.Double'],'java.awt.geom.Rectangle2D']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Rectangle", null, 'java.awt.geom.Rectangle2D', 'java.awt.Shape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.x=0;
this.y=0;
this.width=0;
this.height=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$I$I$I.apply(this, [0, 0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Rectangle', function (r) {
C$.c$$I$I$I$I.apply(this, [r.x, r.y, r.width, r.height]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (x, y, width, height) {
Clazz.super_(C$, this,1);
this.x=x;
this.y=y;
this.width=width;
this.height=height;
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (width, height) {
C$.c$$I$I$I$I.apply(this, [0, 0, width, height]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Point$java_awt_Dimension', function (p, d) {
C$.c$$I$I$I$I.apply(this, [p.x, p.y, d.width, d.height]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Point', function (p) {
C$.c$$I$I$I$I.apply(this, [p.x, p.y, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dimension', function (d) {
C$.c$$I$I$I$I.apply(this, [0, 0, d.width, d.height]);
}, 1);

Clazz.newMeth(C$, 'getX$', function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$', function () {
return this.y;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getBounds$', function () {
return Clazz.new_(C$.c$$I$I$I$I,[this.x, this.y, this.width, this.height]);
});

Clazz.newMeth(C$, 'getBounds2D$', function () {
return Clazz.new_(C$.c$$I$I$I$I,[this.x, this.y, this.width, this.height]);
});

Clazz.newMeth(C$, 'setBounds$java_awt_Rectangle', function (r) {
this.reshape$I$I$I$I(r.x, r.y, r.width, r.height);
});

Clazz.newMeth(C$, 'setBounds$I$I$I$I', function (x, y, width, height) {
this.reshape$I$I$I$I(x, y, width, height);
});

Clazz.newMeth(C$, 'setRect$D$D$D$D', function (x, y, width, height) {
var newx;
var newy;
var neww;
var newh;
if (x > 4.294967294E9 ) {
newx=2147483647;
neww=-1;
} else {
newx=C$.clip$D$Z(x, false);
if (width >= 0 ) width += x - newx;
neww=C$.clip$D$Z(width, width >= 0 );
}if (y > 4.294967294E9 ) {
newy=2147483647;
newh=-1;
} else {
newy=C$.clip$D$Z(y, false);
if (height >= 0 ) height += y - newy;
newh=C$.clip$D$Z(height, height >= 0 );
}this.reshape$I$I$I$I(newx, newy, neww, newh);
});

Clazz.newMeth(C$, 'clip$D$Z', function (v, doceil) {
if (v <= -2147483648 ) {
return -2147483648;
}if (v >= 2147483647 ) {
return 2147483647;
}return ((doceil ? Math.ceil(v) : Math.floor(v))|0);
}, 1);

Clazz.newMeth(C$, 'reshape$I$I$I$I', function (x, y, width, height) {
this.x=x;
this.y=y;
this.width=width;
this.height=height;
});

Clazz.newMeth(C$, 'getLocation$', function () {
return Clazz.new_($I$(1).c$$I$I,[this.x, this.y]);
});

Clazz.newMeth(C$, 'setLocation$java_awt_Point', function (p) {
this.setLocation$I$I(p.x, p.y);
});

Clazz.newMeth(C$, 'setLocation$I$I', function (x, y) {
this.move$I$I(x, y);
});

Clazz.newMeth(C$, 'move$I$I', function (x, y) {
this.x=x;
this.y=y;
});

Clazz.newMeth(C$, 'translate$I$I', function (dx, dy) {
var oldv=this.x;
var newv=oldv + dx;
if (dx < 0) {
if (newv > oldv) {
if (this.width >= 0) {
this.width+=newv - -2147483648;
}newv=-2147483648;
}} else {
if (newv < oldv) {
if (this.width >= 0) {
this.width+=newv - 2147483647;
if (this.width < 0) this.width=2147483647;
}newv=2147483647;
}}this.x=newv;
oldv=this.y;
newv=oldv + dy;
if (dy < 0) {
if (newv > oldv) {
if (this.height >= 0) {
this.height+=newv - -2147483648;
}newv=-2147483648;
}} else {
if (newv < oldv) {
if (this.height >= 0) {
this.height+=newv - 2147483647;
if (this.height < 0) this.height=2147483647;
}newv=2147483647;
}}this.y=newv;
});

Clazz.newMeth(C$, 'getSize$', function () {
return Clazz.new_($I$(2).c$$I$I,[this.width, this.height]);
});

Clazz.newMeth(C$, 'setSize$java_awt_Dimension', function (d) {
this.setSize$I$I(d.width, d.height);
});

Clazz.newMeth(C$, 'setSize$I$I', function (width, height) {
this.resize$I$I(width, height);
});

Clazz.newMeth(C$, 'resize$I$I', function (width, height) {
this.width=width;
this.height=height;
});

Clazz.newMeth(C$, 'contains$java_awt_Point', function (p) {
return this.contains$I$I(p.x, p.y);
});

Clazz.newMeth(C$, 'contains$I$I', function (x, y) {
return this.inside$I$I(x, y);
});

Clazz.newMeth(C$, 'contains$java_awt_Rectangle', function (r) {
return this.contains$I$I$I$I(r.x, r.y, r.width, r.height);
});

Clazz.newMeth(C$, 'contains$I$I$I$I', function (X, Y, W, H) {
var w=this.width;
var h=this.height;
if ((w | h | W | H ) < 0) {
return false;
}var x=this.x;
var y=this.y;
if (X < x || Y < y ) {
return false;
}w+=x;
W+=X;
if (W <= X) {
if (w >= x || W > w ) return false;
} else {
if (w >= x && W > w ) return false;
}h+=y;
H+=Y;
if (H <= Y) {
if (h >= y || H > h ) return false;
} else {
if (h >= y && H > h ) return false;
}return true;
});

Clazz.newMeth(C$, 'inside$I$I', function (X, Y) {
var w=this.width;
var h=this.height;
if ((w | h) < 0) {
return false;
}var x=this.x;
var y=this.y;
if (X < x || Y < y ) {
return false;
}w+=x;
h+=y;
return ((w < x || w > X ) && (h < y || h > Y ) );
});

Clazz.newMeth(C$, 'intersects$java_awt_Rectangle', function (r) {
var tw=this.width;
var th=this.height;
var rw=r.width;
var rh=r.height;
if (rw <= 0 || rh <= 0  || tw <= 0  || th <= 0 ) {
return false;
}var tx=this.x;
var ty=this.y;
var rx=r.x;
var ry=r.y;
rw+=rx;
rh+=ry;
tw+=tx;
th+=ty;
return ((rw < rx || rw > tx ) && (rh < ry || rh > ty ) && (tw < tx || tw > rx ) && (th < ty || th > ry )  );
});

Clazz.newMeth(C$, 'intersection$java_awt_Rectangle', function (r) {
var tx1=this.x;
var ty1=this.y;
var rx1=r.x;
var ry1=r.y;
var tx2=tx1;
tx2+=this.width;
var ty2=ty1;
ty2+=this.height;
var rx2=rx1;
rx2+=r.width;
var ry2=ry1;
ry2+=r.height;
if (tx1 < rx1) tx1=rx1;
if (ty1 < ry1) ty1=ry1;
if (tx2 > rx2) tx2=rx2;
if (ty2 > ry2) ty2=ry2;
tx2-=tx1;
ty2-=ty1;
if (tx2 < -2147483648) tx2=-2147483648;
if (ty2 < -2147483648) ty2=-2147483648;
return Clazz.new_(C$.c$$I$I$I$I,[tx1, ty1, (tx2|0), (ty2|0)]);
});

Clazz.newMeth(C$, 'union$java_awt_Rectangle', function (r) {
var tx2=this.width;
var ty2=this.height;
if ((tx2 | ty2) < 0) {
return Clazz.new_(C$.c$$java_awt_Rectangle,[r]);
}var rx2=r.width;
var ry2=r.height;
if ((rx2 | ry2) < 0) {
return Clazz.new_(C$.c$$java_awt_Rectangle,[this]);
}var tx1=this.x;
var ty1=this.y;
tx2+=tx1;
ty2+=ty1;
var rx1=r.x;
var ry1=r.y;
rx2+=rx1;
ry2+=ry1;
if (tx1 > rx1) tx1=rx1;
if (ty1 > ry1) ty1=ry1;
if (tx2 < rx2) tx2=rx2;
if (ty2 < ry2) ty2=ry2;
tx2-=tx1;
ty2-=ty1;
if (tx2 > 2147483647) tx2=2147483647;
if (ty2 > 2147483647) ty2=2147483647;
return Clazz.new_(C$.c$$I$I$I$I,[tx1, ty1, (tx2|0), (ty2|0)]);
});

Clazz.newMeth(C$, 'add$I$I', function (newx, newy) {
if ((this.width | this.height) < 0) {
this.x=newx;
this.y=newy;
this.width=this.height=0;
return;
}var x1=this.x;
var y1=this.y;
var x2=this.width;
var y2=this.height;
x2+=x1;
y2+=y1;
if (x1 > newx) x1=newx;
if (y1 > newy) y1=newy;
if (x2 < newx) x2=newx;
if (y2 < newy) y2=newy;
x2-=x1;
y2-=y1;
if (x2 > 2147483647) x2=2147483647;
if (y2 > 2147483647) y2=2147483647;
this.reshape$I$I$I$I(x1, y1, (x2|0), (y2|0));
});

Clazz.newMeth(C$, 'add$java_awt_Point', function (pt) {
this.add$I$I(pt.x, pt.y);
});

Clazz.newMeth(C$, 'add$java_awt_Rectangle', function (r) {
var tx2=this.width;
var ty2=this.height;
if ((tx2 | ty2) < 0) {
this.reshape$I$I$I$I(r.x, r.y, r.width, r.height);
}var rx2=r.width;
var ry2=r.height;
if ((rx2 | ry2) < 0) {
return;
}var tx1=this.x;
var ty1=this.y;
tx2+=tx1;
ty2+=ty1;
var rx1=r.x;
var ry1=r.y;
rx2+=rx1;
ry2+=ry1;
if (tx1 > rx1) tx1=rx1;
if (ty1 > ry1) ty1=ry1;
if (tx2 < rx2) tx2=rx2;
if (ty2 < ry2) ty2=ry2;
tx2-=tx1;
ty2-=ty1;
if (tx2 > 2147483647) tx2=2147483647;
if (ty2 > 2147483647) ty2=2147483647;
this.reshape$I$I$I$I(tx1, ty1, (tx2|0), (ty2|0));
});

Clazz.newMeth(C$, 'grow$I$I', function (h, v) {
var x0=this.x;
var y0=this.y;
var x1=this.width;
var y1=this.height;
x1+=x0;
y1+=y0;
x0-=h;
y0-=v;
x1+=h;
y1+=v;
if (x1 < x0) {
x1-=x0;
if (x1 < -2147483648) x1=-2147483648;
if (x0 < -2147483648) x0=-2147483648;
 else if (x0 > 2147483647) x0=2147483647;
} else {
if (x0 < -2147483648) x0=-2147483648;
 else if (x0 > 2147483647) x0=2147483647;
x1-=x0;
if (x1 < -2147483648) x1=-2147483648;
 else if (x1 > 2147483647) x1=2147483647;
}if (y1 < y0) {
y1-=y0;
if (y1 < -2147483648) y1=-2147483648;
if (y0 < -2147483648) y0=-2147483648;
 else if (y0 > 2147483647) y0=2147483647;
} else {
if (y0 < -2147483648) y0=-2147483648;
 else if (y0 > 2147483647) y0=2147483647;
y1-=y0;
if (y1 < -2147483648) y1=-2147483648;
 else if (y1 > 2147483647) y1=2147483647;
}this.reshape$I$I$I$I((x0|0), (y0|0), (x1|0), (y1|0));
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return (this.width <= 0) || (this.height <= 0) ;
});

Clazz.newMeth(C$, 'outcode$D$D', function (x, y) {
var out=0;
if (this.width <= 0) {
out|=5;
} else if (x < this.x ) {
out|=1;
} else if (x > this.x + this.width ) {
out|=4;
}if (this.height <= 0) {
out|=10;
} else if (y < this.y ) {
out|=2;
} else if (y > this.y + this.height ) {
out|=8;
}return out;
});

Clazz.newMeth(C$, 'createIntersection$java_awt_geom_Rectangle2D', function (r) {
if (Clazz.instanceOf(r, "java.awt.Rectangle")) {
return this.intersection$java_awt_Rectangle(r);
}var dest=Clazz.new_($I$(3));
$I$(4).intersect$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D(this, r, dest);
return dest;
});

Clazz.newMeth(C$, 'createUnion$java_awt_geom_Rectangle2D', function (r) {
if (Clazz.instanceOf(r, "java.awt.Rectangle")) {
return this.union$java_awt_Rectangle(r);
}var dest=Clazz.new_($I$(3));
$I$(4).union$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D(this, r, dest);
return dest;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "java.awt.Rectangle")) {
var r=obj;
return ((this.x == r.x) && (this.y == r.y) && (this.width == r.width) && (this.height == r.height)  );
}return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "[x=" + this.x + ",y=" + this.y + ",width=" + this.width + ",height=" + this.height + "]" ;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:25 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
