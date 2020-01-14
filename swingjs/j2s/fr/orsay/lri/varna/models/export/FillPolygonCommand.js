(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),I$=[];
var C$=Clazz.newClass(P$, "FillPolygonCommand", null, 'fr.orsay.lri.varna.models.export.GraphicElement');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._points=null;
this._color=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_DoubleA$java_awt_Color', function (points, color) {
Clazz.super_(C$, this,1);
this._points=points;
this._color=color;
}, 1);

Clazz.newMeth(C$, 'get_points$', function () {
return this._points;
});

Clazz.newMeth(C$, 'get_color$', function () {
return this._color;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
