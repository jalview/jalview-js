(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'sun.awt.AWTAccessor','sun.awt.CausedFocusEvent',['sun.awt.CausedFocusEvent','.Cause'],'sun.awt.SunToolkit']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "KeyboardFocusManagerPeerImpl", null, null, 'java.awt.peer.KeyboardFocusManagerPeer');
C$.kfmAccessor=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.kfmAccessor=$I$(1).getKeyboardFocusManagerAccessor$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'clearGlobalFocusOwner$java_awt_Window', function (activeWindow) {
if (activeWindow != null ) {
var focusOwner=activeWindow.getFocusOwner$();
if (focusOwner != null ) {
var fl=Clazz.new_($I$(2).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause,[focusOwner, 1005, false, null, $I$(3).CLEAR_GLOBAL_FOCUS_OWNER]);
$I$(4).postPriorityEvent$java_awt_AWTEvent(fl);
}}});

Clazz.newMeth(C$, 'shouldFocusOnClick$java_awt_Component', function (component) {
var acceptFocusOnClick=false;
if (Clazz.instanceOf(component, "java.awt.Canvas") || Clazz.instanceOf(component, "java.awt.Scrollbar") ) {
acceptFocusOnClick=true;
} else if (Clazz.instanceOf(component, "java.awt.Panel")) {
acceptFocusOnClick=((component).getComponentCount$() == 0);
} else {
var peer=(component != null  ? component.getPeer$() : null);
acceptFocusOnClick=(peer != null  ? peer.isFocusable$() : false);
}return acceptFocusOnClick && $I$(1).getComponentAccessor$().canBeFocusOwner$java_awt_Component(component) ;
}, 1);

Clazz.newMeth(C$, 'deliverFocus$java_awt_Component$java_awt_Component$Z$Z$J$sun_awt_CausedFocusEvent_Cause$java_awt_Component', function (lightweightChild, target, temporary, focusedWindowChangeAllowed, time, cause, currentFocusOwner) {
if (lightweightChild == null ) {
lightweightChild=target;
}var currentOwner=currentFocusOwner;
if (currentOwner != null  && currentOwner.getPeer$() == null  ) {
currentOwner=null;
}if (currentOwner != null ) {
var fl=Clazz.new_($I$(2).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause,[currentOwner, 1005, false, lightweightChild, cause]);
$I$(4).postEvent$sun_awt_AppContext$java_awt_AWTEvent($I$(4).targetToAppContext$O(currentOwner), fl);
}var fg=Clazz.new_($I$(2).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause,[lightweightChild, 1004, false, currentOwner, cause]);
$I$(4).postEvent$sun_awt_AppContext$java_awt_AWTEvent($I$(4).targetToAppContext$O(lightweightChild), fg);
return true;
}, 1);

Clazz.newMeth(C$, 'requestFocusFor$java_awt_Component$sun_awt_CausedFocusEvent_Cause', function (target, cause) {
return $I$(1).getComponentAccessor$().requestFocus$java_awt_Component$sun_awt_CausedFocusEvent_Cause(target, cause);
}, 1);

Clazz.newMeth(C$, 'shouldNativelyFocusHeavyweight$java_awt_Component$java_awt_Component$Z$Z$J$sun_awt_CausedFocusEvent_Cause', function (heavyweight, descendant, temporary, focusedWindowChangeAllowed, time, cause) {
return C$.kfmAccessor.shouldNativelyFocusHeavyweight$java_awt_Component$java_awt_Component$Z$Z$J$sun_awt_CausedFocusEvent_Cause(heavyweight, descendant, temporary, focusedWindowChangeAllowed, time, cause);
}, 1);

Clazz.newMeth(C$, 'removeLastFocusRequest$java_awt_Component', function (heavyweight) {
C$.kfmAccessor.removeLastFocusRequest$java_awt_Component(heavyweight);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
