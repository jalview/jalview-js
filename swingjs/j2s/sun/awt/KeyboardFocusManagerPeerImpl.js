(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'sun.awt.AWTAccessor','sun.awt.CausedFocusEvent',['sun.awt.CausedFocusEvent','.Cause'],'sun.awt.SunToolkit']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KeyboardFocusManagerPeerImpl", null, null, 'java.awt.peer.KeyboardFocusManagerPeer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['kfmAccessor','sun.awt.AWTAccessor.KeyboardFocusManagerAccessor']]]

Clazz.newMeth(C$, 'clearGlobalFocusOwner$java_awt_Window', function (activeWindow) {
if (activeWindow != null ) {
var focusOwner=activeWindow.getFocusOwner$();
if (focusOwner != null ) {
var fl=Clazz.new_([focusOwner, 1005, false, null, $I$(3).CLEAR_GLOBAL_FOCUS_OWNER],$I$(2,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause);
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
var fl=Clazz.new_($I$(2,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause,[currentOwner, 1005, false, lightweightChild, cause]);
$I$(4,"postEvent$sun_awt_AppContext$java_awt_AWTEvent",[$I$(4).targetToAppContext$O(currentOwner), fl]);
}var fg=Clazz.new_($I$(2,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause,[lightweightChild, 1004, false, currentOwner, cause]);
$I$(4,"postEvent$sun_awt_AppContext$java_awt_AWTEvent",[$I$(4).targetToAppContext$O(lightweightChild), fg]);
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

C$.$static$=function(){C$.$static$=0;
C$.kfmAccessor=$I$(1).getKeyboardFocusManagerAccessor$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-27 13:55:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
