(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.geom"),p$1={},I$=[[0,['java.awt.geom.Point2D','.Double'],'fr.orsay.lri.varna.models.geom.MiscGeom','java.awt.geom.AffineTransform']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HalfEllipse");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['a','b'],'I',['n'],'O',['points','java.awt.geom.Point2D.Double[]','lengths','double[]','unitVectors','java.awt.geom.Point2D.Double[]']]]

Clazz.newMeth(C$, 'getN$', function () {
return this.n;
});

Clazz.newMeth(C$, 'getApproxCurveLength$', function () {
return this.lengths[this.n - 1];
});

Clazz.newMeth(C$, 'standardParam$D', function (t) {
var x=this.a * Math.cos(t * 3.141592653589793);
var y=this.b * Math.sin(t * 3.141592653589793);
return Clazz.new_($I$(1,1).c$$D$D,[x, y]);
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
result[i]=Clazz.new_($I$(1,1).c$$D$D,[x, y]);
}
return result;
});

Clazz.newMeth(C$, 'c$$D$D$I', function (a, b, n) {
;C$.$init$.apply(this);
this.a=a;
this.b=b;
this.n=n;
if (n < 1) {
throw (Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["n must be at least 1"]));
}p$1.computeData.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'matchAxisA$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (P0, P1) {
var theta=$I$(2).angleFromVector$D$D(P0.x - P1.x, P0.y - P1.y);
var mid=Clazz.new_([(P0.x + P1.x) / 2, (P0.y + P1.y) / 2],$I$(1,1).c$$D$D);
var transform=Clazz.new_($I$(3,1));
transform.translate$D$D(mid.x, mid.y);
transform.rotate$D(theta);
return transform;
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
this.unitVectors[i]=Clazz.new_($I$(1,1).c$$D$D,[dx, dy]);
sum += l;
this.lengths[i]=sum;
}
}, p$1);

Clazz.newMeth(C$, 'lineLength$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double', function (P1, P2) {
return P2.distance$java_awt_geom_Point2D(P1);
}, p$1);

Clazz.newMeth(C$, 'getA$', function () {
return this.a;
});

Clazz.newMeth(C$, 'getB$', function () {
return this.b;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
