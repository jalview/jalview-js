(function(){var P$=Clazz.newPackage("javax.swing.plaf"),I$=[[0,'javax.swing.PopupFactory']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PopupMenuUI", null, 'javax.swing.plaf.ComponentUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isPopupTrigger$java_awt_event_MouseEvent', function (e) {
return e.isPopupTrigger$();
});

Clazz.newMeth(C$, 'getPopup$javax_swing_JPopupMenu$I$I', function (popup, x, y) {
var popupFactory=$I$(1).getSharedInstance$();
return popupFactory.getPopup$java_awt_Component$java_awt_Component$I$I(popup.getInvoker$(), popup, x, y);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
