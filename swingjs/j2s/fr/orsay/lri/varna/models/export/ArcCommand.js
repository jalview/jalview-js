(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),I$=[];
var C$=Clazz.newClass(P$, "ArcCommand", null, 'fr.orsay.lri.varna.models.export.GraphicElement');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.center=null;
this.width=0;
this.height=0;
this.startAngle=0;
this.endAngle=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_Double$D$D$D$D', function (origine, width, height, startAngle, endAngle) {
Clazz.super_(C$, this,1);
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
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
