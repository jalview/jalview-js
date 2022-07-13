(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PolygonCommand", null, 'fr.orsay.lri.varna.models.export.GraphicElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['_thickness'],'O',['_points','java.awt.geom.Point2D.Double[]']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_DoubleA$D', function (points, thickness) {
Clazz.super_(C$, this);
this._points=points;
this._thickness=thickness;
}, 1);

Clazz.newMeth(C$, 'get_points$', function () {
return this._points;
});

Clazz.newMeth(C$, 'get_thickness$', function () {
return this._thickness;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
