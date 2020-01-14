(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[[0,'java.awt.Dimension']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ControleurBorder", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vb=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_views_VueBorder', function (vb) {
C$.$init$.apply(this);
this._vb=vb;
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
if (this._vb.getDimension$().getHeight$() < this._vb.get_vp$().getHeight$()  && this._vb.getDimension$().getWidth$() < this._vb.get_vp$().getWidth$()  ) {
this._vb.get_vp$().setBorderSize$java_awt_Dimension(this._vb.getDimension$());
this._vb.get_vp$().setMinimumSize$java_awt_Dimension(Clazz.new_($I$(1).c$$I$I,[this._vb.get_vp$().getBorderSize$().width * 2, this._vb.get_vp$().getBorderSize$().height * 2]));
this._vb.get_vp$().repaint$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
