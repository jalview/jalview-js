(function(){var P$=Clazz.newPackage("swingjs.api.js"),I$=[];
var C$=Clazz.newClass(P$, "HTML5CanvasContext2D", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.imageData=null;
this._aSaved=null;
this.lineWidth=0;
this.font=null;
this.fillStyle=null;
this.strokeStyle=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'push', function (ctx, map) {
{
(ctx._aSaved || (ctx._aSaved = [])).push(map);
return ctx._aSaved.length;
}
}, 1);

Clazz.newMeth(C$, 'pop', function (ctx) {
{
return (ctx._aSaved && ctx._aSaved.length > 0 ? ctx._aSaved.pop() : null);
}
}, 1);

Clazz.newMeth(C$, 'getSavedLevel', function (ctx) {
{
return (ctx._aSaved ? ctx._aSaved.length : 0);
}
}, 1);

Clazz.newMeth(C$, 'getMatrix', function (ctx, transform) {
var m=ctx._m ||null;
if (m == null ) {
m=Clazz.array(Double.TYPE, [6]);

ctx._m = m;
transform.getMatrix$DA(m);
}return m;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.HTML5CanvasContext2D, "ImageData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
