(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[[0,'java.awt.Dimension']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ControleurBorder", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vb','fr.orsay.lri.varna.views.VueBorder']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_views_VueBorder', function (vb) {
;C$.$init$.apply(this);
this._vb=vb;
}, 1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
if (this._vb.getDimension$().getHeight$() < this._vb.get_vp$().getHeight$()  && this._vb.getDimension$().getWidth$() < this._vb.get_vp$().getWidth$()  ) {
this._vb.get_vp$().setBorderSize$java_awt_Dimension(this._vb.getDimension$());
this._vb.get_vp$().setMinimumSize$java_awt_Dimension(Clazz.new_([this._vb.get_vp$().getBorderSize$().width * 2, this._vb.get_vp$().getBorderSize$().height * 2],$I$(1,1).c$$I$I));
this._vb.get_vp$().repaint$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
