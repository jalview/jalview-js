(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers");
var C$=Clazz.newClass(P$, "ControleurSpaceBetweenBases", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vsbb=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_views_VueSpaceBetweenBases', function (vsbb) {
C$.$init$.apply(this);
this._vsbb=vsbb;
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
this._vsbb.get_vp$().setSpaceBetweenBases$D((this._vsbb.getSpace$()).doubleValue$());
this._vsbb.get_vp$().drawRNA$();
this._vsbb.get_vp$().repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
