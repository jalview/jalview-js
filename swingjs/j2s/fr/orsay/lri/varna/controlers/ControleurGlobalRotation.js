(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ControleurGlobalRotation", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['_oldAngle'],'O',['_vGR','fr.orsay.lri.varna.views.VueGlobalRotation','_vp','fr.orsay.lri.varna.VARNAPanel']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_views_VueGlobalRotation$fr_orsay_lri_varna_VARNAPanel', function (vGR, vp) {
;C$.$init$.apply(this);
this._vGR=vGR;
this._oldAngle=0;
this._vp=vp;
}, 1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
this._vp.getVARNAUI$().UIGlobalRotation$D(this._vGR.getAngle$() - this._oldAngle);
this._oldAngle=this._vGR.getAngle$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
