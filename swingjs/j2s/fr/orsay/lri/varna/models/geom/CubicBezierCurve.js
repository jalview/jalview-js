(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.geom"),p$1={},I$=[[0,['java.awt.geom.Point2D','.Double']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CubicBezierCurve");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.P0=null;
this.P1=null;
this.P2=null;
this.P3=null;
this.n=0;
this.points=null;
this.lengths=null;
this.unitVectors=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getN$', function () {
return this.n;
});

Clazz.newMeth(C$, 'getApproxCurveLength$', function () {
return this.lengths[this.n - 1];
});

Clazz.newMeth(C$, 'standardParam$D', function (t) {
var x=Math.pow(1 - t, 3) * this.P0.x + 3 * Math.pow(1 - t, 2) * t * this.P1.x  + 3 * (1 - t) * t * t * this.P2.x  + t * t * t * this.P3.x ;
var y=Math.pow(1 - t, 3) * this.P0.y + 3 * Math.pow(1 - t, 2) * t * this.P1.y  + 3 * (1 - t) * t * t * this.P2.y  + t * t * t * this.P3.y ;
return Clazz.new_($I$(1).c$$D$D,[x, y]);
});

Clazz.newMeth(C$, 'uniformParam$DA', function (t) {
var m=t.length;
var result=Clazz.array($I$(1), [m]);
var line=0;
for (var i=0; i < m; i++) {
while ((line < this.n) && (this.lengths[line] < t[i] ) ){
line++;
}
if (line >= this.n) {
line=this.n - 1;
}if (t[i] < 0 ) {
throw (Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["t[" + i + "] < 0" ]));
}var lengthOnLine=t[i] - (line != 0 ? this.lengths[line - 1] : 0);
var x=this.points[line].x + this.unitVectors[line].x * lengthOnLine;
var y=this.points[line].y + this.unitVectors[line].y * lengthOnLine;
result[i]=Clazz.new_($I$(1).c$$D$D,[x, y]);
}
return result;
});

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$I', function (P0, P1, P2, P3, n) {
C$.$init$.apply(this);
this.P0=P0;
this.P1=P1;
this.P2=P2;
this.P3=P3;
this.n=n;
if (n < 1) {
throw (Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["n must be at least 1"]));
}p$1.computeData.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'computeData', function () {
this.points=Clazz.array($I$(1), [this.n + 1]);
for (var k=0; k <= this.n; k++) {
this.points[k]=this.standardParam$D((k) / this.n);
}
this.lengths=Clazz.array(Double.TYPE, [this.n]);
this.unitVectors=Clazz.array($I$(1), [this.n]);
var sum=0;
for (var i=0; i < this.n; i++) {
var l=p$1.lineLength$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double.apply(this, [this.points[i], this.points[i + 1]]);
var dx=(this.points[i + 1].x - this.points[i].x) / l;
var dy=(this.points[i + 1].y - this.points[i].y) / l;
this.unitVectors[i]=Clazz.new_($I$(1).c$$D$D,[dx, dy]);
sum += l;
this.lengths[i]=sum;
}
}, p$1);

Clazz.newMeth(C$, 'lineLength$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (P1, P2) {
return P2.distance$java_awt_geom_Point2D(P1);
}, p$1);

Clazz.newMeth(C$, 'getP0$', function () {
return this.P0;
});

Clazz.newMeth(C$, 'getP1$', function () {
return this.P1;
});

Clazz.newMeth(C$, 'getP2$', function () {
return this.P2;
});

Clazz.newMeth(C$, 'getP3$', function () {
return this.P3;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
