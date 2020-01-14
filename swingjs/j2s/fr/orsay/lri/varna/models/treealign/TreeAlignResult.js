(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.treealign"),I$=[];
var C$=Clazz.newClass(P$, "TreeAlignResult");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.alignment=null;
this.distance=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getAlignment$', function () {
return this.alignment;
});

Clazz.newMeth(C$, 'setAlignment$fr_orsay_lri_varna_models_treealign_Tree', function (alignment) {
this.alignment=alignment;
});

Clazz.newMeth(C$, 'getDistance$', function () {
return this.distance;
});

Clazz.newMeth(C$, 'setDistance$D', function (distance) {
this.distance=distance;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
