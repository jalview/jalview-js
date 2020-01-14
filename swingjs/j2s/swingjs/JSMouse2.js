(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'javajs.util.V3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSMouse2");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mouse=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$swingjs_JSMouse', function (mouse) {
this.mouse=mouse;
return this;
});

Clazz.newMeth(C$, 'processTwoPointGesture$FAAA', function (touches) {
if (touches[0].length < 2) return;
var t1=touches[0];
var t2=touches[1];
var t1first=t1[0];
var t1last=t1[t2.length - 1];
var x1first=t1first[0];
var x1last=t1last[0];
var dx1=x1last - x1first;
var y1first=t1first[1];
var y1last=t1last[1];
var dy1=y1last - y1first;
var v1=$I$(1).new3$F$F$F(dx1, dy1, 0);
var d1=v1.length$();
var t2first=t2[0];
var t2last=t2[t2.length - 1];
var x2first=t2first[0];
var x2last=t2last[0];
var dx2=x2last - x2first;
var y2first=t2first[1];
var y2last=t2last[1];
var dy2=y2last - y2first;
var v2=$I$(1).new3$F$F$F(dx2, dy2, 0);
var d2=v2.length$();
if (d1 < 1  || d2 < 1  ) return;
v1.normalize$();
v2.normalize$();
var cos12=(v1.dot$javajs_util_T3(v2));
if (cos12 > 0.8 ) {
var deltaX=((x1last - t1[t1.length - 2][0])|0);
var deltaY=((y1last - t1[t1.length - 2][1])|0);
this.mouse.translateXYBy$I$I(deltaX, deltaY);
} else if (cos12 < -0.8 ) {
v1=$I$(1).new3$F$F$F(x2first - x1first, y2first - y1first, 0);
v2=$I$(1).new3$F$F$F(x2last - x1last, y2last - y1last, 0);
var dx=v2.length$() - v1.length$();
this.mouse.wheeled$J$I$I$I$I(System.currentTimeMillis$(), 0, 0, dx < 0  ? -1 : 1, 507);
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
