(function(){var P$=Clazz.newPackage("org.jmol.viewer"),p$1={},p$2={},I$=[[0,'org.jmol.viewer.MouseState','org.jmol.util.Rectangle','org.jmol.viewer.Viewer','org.jmol.viewer.binding.JmolBinding','org.jmol.viewer.binding.Binding','org.jmol.viewer.Gesture','org.jmol.i18n.GT','org.jmol.util.BSUtil','org.jmol.thread.HoverWatcherThread','org.jmol.util.Logger','javajs.util.AU','javajs.util.PT','org.jmol.util.Escape','org.jmol.util.Point3fi','org.jmol.api.Interface','javajs.util.P3','org.jmol.script.ScriptEval','org.jmol.script.SV','org.jmol.viewer.MotionPoint']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Gesture");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.action=0;
this.nodes=null;
this.ptNext=0;
this.time0=0;
this.vwr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$org_jmol_viewer_Viewer', function (nPoints, vwr) {
C$.$init$.apply(this);
this.vwr=vwr;
this.nodes=Clazz.array($I$(19), [nPoints]);
for (var i=0; i < nPoints; i++) this.nodes[i]=Clazz.new_($I$(19));

}, 1);

Clazz.newMeth(C$, 'setAction$I$J', function (action, time) {
this.action=action;
this.ptNext=0;
this.time0=time;
for (var i=0; i < this.nodes.length; i++) this.nodes[i].index=-1;

});

Clazz.newMeth(C$, 'add$I$I$I$J', function (action, x, y, time) {
this.action=action;
this.getNode$I(this.ptNext).set$I$I$I$J(this.ptNext, x, y, time - this.time0);
this.ptNext++;
return this.ptNext;
});

Clazz.newMeth(C$, 'getTimeDifference$I', function (nPoints) {
nPoints=p$2.getPointCount2$I$I.apply(this, [nPoints, 0]);
if (nPoints < 2) return 0;
var mp1=this.getNode$I(this.ptNext - 1);
var mp0=this.getNode$I(this.ptNext - nPoints);
return mp1.time - mp0.time;
});

Clazz.newMeth(C$, 'getSpeedPixelsPerMillisecond$I$I', function (nPoints, nPointsPrevious) {
nPoints=p$2.getPointCount2$I$I.apply(this, [nPoints, nPointsPrevious]);
if (nPoints < 2) return 0;
var mp1=this.getNode$I(this.ptNext - 1 - nPointsPrevious );
var mp0=this.getNode$I(this.ptNext - nPoints - nPointsPrevious );
var dx=((mp1.x - mp0.x)) / this.vwr.getScreenWidth$() * 360;
var dy=((mp1.y - mp0.y)) / this.vwr.getScreenHeight$() * 360;
return Math.sqrt(dx * dx + dy * dy) / (mp1.time - mp0.time);
});

Clazz.newMeth(C$, 'getDX$I$I', function (nPoints, nPointsPrevious) {
nPoints=p$2.getPointCount2$I$I.apply(this, [nPoints, nPointsPrevious]);
if (nPoints < 2) return 0;
var mp1=this.getNode$I(this.ptNext - 1 - nPointsPrevious );
var mp0=this.getNode$I(this.ptNext - nPoints - nPointsPrevious );
return mp1.x - mp0.x;
});

Clazz.newMeth(C$, 'getDY$I$I', function (nPoints, nPointsPrevious) {
nPoints=p$2.getPointCount2$I$I.apply(this, [nPoints, nPointsPrevious]);
if (nPoints < 2) return 0;
var mp1=this.getNode$I(this.ptNext - 1 - nPointsPrevious );
var mp0=this.getNode$I(this.ptNext - nPoints - nPointsPrevious );
return mp1.y - mp0.y;
});

Clazz.newMeth(C$, 'getPointCount$', function () {
return this.ptNext;
});

Clazz.newMeth(C$, 'getPointCount2$I$I', function (nPoints, nPointsPrevious) {
if (nPoints > this.nodes.length - nPointsPrevious) nPoints=this.nodes.length - nPointsPrevious;
var n=nPoints + 1;
for (; --n >= 0; ) if (this.getNode$I(this.ptNext - n - nPointsPrevious ).index >= 0) break;

return n;
}, p$2);

Clazz.newMeth(C$, 'getNode$I', function (i) {
return this.nodes[(i + this.nodes.length + this.nodes.length ) % this.nodes.length];
});

Clazz.newMeth(C$, 'toString', function () {
if (this.nodes.length == 0) return "" + this;
return $I$(5).getMouseActionName$I$Z(this.action, false) + " nPoints = " + this.ptNext + " " + this.nodes[0] ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:23:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
