(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[];
var C$=Clazz.newClass(P$, "ControleurGlobalRescale", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vGR=null;
this._oldScale=0;
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_views_VueGlobalRescale$fr_orsay_lri_varna_VARNAPanel', function (vGR, vp) {
C$.$init$.apply(this);
this._vGR=vGR;
this._oldScale=1.0;
this._vp=vp;
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
this._vp.getVARNAUI$().UIGlobalRescale$D(this._vGR.getScale$() / this._oldScale);
this._oldScale=this._vGR.getScale$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
