(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[];
var C$=Clazz.newClass(P$, "ControleurMolette", null, null, 'java.awt.event.MouseWheelListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vuep) {
C$.$init$.apply(this);
this._vp=vuep;
}, 1);

Clazz.newMeth(C$, ['mouseWheelMoved$java_awt_event_MouseWheelEvent','mouseWheelMoved$'], function (e) {
if (this._vp.isFocusOwner$()) {
if (e.getWheelRotation$() == -1) {
this._vp.getVARNAUI$().UIZoomIn$();
} else {
this._vp.getVARNAUI$().UIZoomOut$();
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
