(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.naView"),I$=[];
var C$=Clazz.newClass(P$, "Radloop");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.radius=0;
this.loopnumber=0;
this.next=null;
this.prev=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRadius$', function () {
return this.radius;
});

Clazz.newMeth(C$, 'setRadius$D', function (radius) {
this.radius=radius;
});

Clazz.newMeth(C$, 'getLoopnumber$', function () {
return this.loopnumber;
});

Clazz.newMeth(C$, 'setLoopnumber$I', function (loopnumber) {
this.loopnumber=loopnumber;
});

Clazz.newMeth(C$, 'getNext$', function () {
return this.next;
});

Clazz.newMeth(C$, 'setNext$fr_orsay_lri_varna_models_naView_Radloop', function (next) {
this.next=next;
});

Clazz.newMeth(C$, 'getPrev$', function () {
return this.prev;
});

Clazz.newMeth(C$, 'setPrev$fr_orsay_lri_varna_models_naView_Radloop', function (prev) {
this.prev=prev;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
