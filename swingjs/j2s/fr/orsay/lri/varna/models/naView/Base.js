(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.naView"),I$=[[0,'fr.orsay.lri.varna.models.naView.Region']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Base");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mate=0;
this.x=0;
this.y=0;
this.extracted=false;
this.region=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.region=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getMate$', function () {
return this.mate;
});

Clazz.newMeth(C$, 'setMate$I', function (mate) {
this.mate=mate;
});

Clazz.newMeth(C$, 'getX$', function () {
return this.x;
});

Clazz.newMeth(C$, 'setX$D', function (x) {
this.x=x;
});

Clazz.newMeth(C$, 'getY$', function () {
return this.y;
});

Clazz.newMeth(C$, 'setY$D', function (y) {
this.y=y;
});

Clazz.newMeth(C$, 'isExtracted$', function () {
return this.extracted;
});

Clazz.newMeth(C$, 'setExtracted$Z', function (extracted) {
this.extracted=extracted;
});

Clazz.newMeth(C$, 'getRegion$', function () {
return this.region;
});

Clazz.newMeth(C$, 'setRegion$fr_orsay_lri_varna_models_naView_Region', function (region) {
this.region=region;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
