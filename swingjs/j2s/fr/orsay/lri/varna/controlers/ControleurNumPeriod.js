(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers");
/*c*/var C$=Clazz.newClass(P$, "ControleurNumPeriod", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vnp','fr.orsay.lri.varna.views.VueNumPeriod']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_views_VueNumPeriod', function (vnp) {
;C$.$init$.apply(this);
this._vnp=vnp;
}, 1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
this._vnp.get_vp$().setNumPeriod$I(this._vnp.getNumPeriod$());
this._vnp.get_vp$().repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
