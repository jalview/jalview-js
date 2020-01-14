(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),I$=[];
var C$=Clazz.newClass(P$, "TextCommand", null, 'fr.orsay.lri.varna.models.export.GraphicElement');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._base=null;
this._txt=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_Double$S', function (base, txt) {
Clazz.super_(C$, this,1);
this._base=base;
this._txt=txt;
}, 1);

Clazz.newMeth(C$, 'get_base$', function () {
return this._base;
});

Clazz.newMeth(C$, 'get_txt$', function () {
return this._txt;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
