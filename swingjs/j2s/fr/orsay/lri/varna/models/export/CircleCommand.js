(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),I$=[];
var C$=Clazz.newClass(P$, "CircleCommand", null, 'fr.orsay.lri.varna.models.export.GraphicElement');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._base=null;
this._radius=0;
this._thickness=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_Double$D$D', function (base, radius, thickness) {
Clazz.super_(C$, this,1);
this._base=base;
this._radius=radius;
this._thickness=thickness;
}, 1);

Clazz.newMeth(C$, 'get_base$', function () {
return this._base;
});

Clazz.newMeth(C$, 'get_radius$', function () {
return this._radius;
});

Clazz.newMeth(C$, 'get_thickness$', function () {
return this._thickness;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
