(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers");
/*c*/var C$=Clazz.newClass(P$, "ControleurSpaceBetweenBases", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vsbb','fr.orsay.lri.varna.views.VueSpaceBetweenBases']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_views_VueSpaceBetweenBases', function (vsbb) {
;C$.$init$.apply(this);
this._vsbb=vsbb;
}, 1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
this._vsbb.get_vp$().setSpaceBetweenBases$D((this._vsbb.getSpace$()).valueOf());
this._vsbb.get_vp$().drawRNA$();
this._vsbb.get_vp$().repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
