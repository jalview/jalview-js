(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[[0,'java.awt.Point']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ControleurDraggedMolette", null, null, ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);
C$._rightButtonClick=null;
C$._direction=null;
C$._avant=null;
C$._apres=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.$init$.apply(this);
this._vp=vp;
C$._rightButtonClick=new Boolean(false);
C$._avant=C$._apres=C$._direction=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
if ((C$._rightButtonClick).booleanValue$()) {
C$._apres=e.getPoint$();
C$._direction=Clazz.new_($I$(1).c$$I$I,[C$._apres.x - C$._avant.x, C$._apres.y - C$._avant.y]);
this._vp.setTranslation$java_awt_Point(Clazz.new_($I$(1).c$$I$I,[this._vp.getTranslation$().x + C$._direction.x, this._vp.getTranslation$().y + C$._direction.y]));
C$._avant=C$._apres;
this._vp.checkTranslation$();
this._vp.repaint$();
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
C$._avant=e.getPoint$();
if (e.getButton$() == 2) {
C$._rightButtonClick=new Boolean(true);
} else {
C$._rightButtonClick=new Boolean(false);
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
if (e.getButton$() == 2) C$._rightButtonClick=new Boolean(false);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
