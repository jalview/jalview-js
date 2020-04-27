(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ControleurMolette", null, null, 'java.awt.event.MouseWheelListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vp','fr.orsay.lri.varna.VARNAPanel']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vuep) {
;C$.$init$.apply(this);
this._vp=vuep;
}, 1);

Clazz.newMeth(C$, 'mouseWheelMoved$java_awt_event_MouseWheelEvent', function (e) {
if (this._vp.isFocusOwner$()) {
if (e.getWheelRotation$() == -1) {
this._vp.getVARNAUI$().UIZoomIn$();
} else {
this._vp.getVARNAUI$().UIZoomOut$();
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
