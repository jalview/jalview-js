(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ArcCommand", null, 'fr.orsay.lri.varna.models.export.GraphicElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['width','height','startAngle','endAngle'],'O',['center','java.awt.geom.Point2D.Double']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_Double$D$D$D$D', function (origine, width, height, startAngle, endAngle) {
Clazz.super_(C$, this);
this.center=origine;
this.width=width;
this.height=height;
this.startAngle=startAngle;
this.endAngle=endAngle;
}, 1);

Clazz.newMeth(C$, 'getCenter$', function () {
return this.center;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getStartAngle$', function () {
return this.startAngle;
});

Clazz.newMeth(C$, 'getEndAngle$', function () {
return this.endAngle;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
