(function(){var P$=Clazz.newPackage("sun.awt"),I$=[];
var C$=Clazz.newClass(P$, "AWTAccessor", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.componentAccessor=null;
C$.kfmAccessor=null;
C$.windowAccessor=null;
C$.awtEventAccessor=null;
C$.eventQueueAccessor=null;
C$.defaultKeyboardFocusManagerAccessor=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setDefaultKeyboardFocusManagerAccessor$sun_awt_AWTAccessor_DefaultKeyboardFocusManagerAccessor', function (dkfma) {
C$.defaultKeyboardFocusManagerAccessor=dkfma;
}, 1);

Clazz.newMeth(C$, 'setKeyboardFocusManagerAccessor$sun_awt_AWTAccessor_KeyboardFocusManagerAccessor', function (kfma) {
C$.kfmAccessor=kfma;
}, 1);

Clazz.newMeth(C$, 'getKeyboardFocusManagerAccessor$', function () {
return C$.kfmAccessor;
}, 1);

Clazz.newMeth(C$, 'setWindowAccessor$sun_awt_AWTAccessor_WindowAccessor', function (wa) {
C$.windowAccessor=wa;
}, 1);

Clazz.newMeth(C$, 'getWindowAccessor$', function () {
return C$.windowAccessor;
}, 1);

Clazz.newMeth(C$, 'setComponentAccessor$sun_awt_AWTAccessor_ComponentAccessor', function (ca) {
C$.componentAccessor=ca;
}, 1);

Clazz.newMeth(C$, 'getComponentAccessor$', function () {
return C$.componentAccessor;
}, 1);

Clazz.newMeth(C$, 'setAWTEventAccessor$sun_awt_AWTAccessor_AWTEventAccessor', function (aea) {
C$.awtEventAccessor=aea;
}, 1);

Clazz.newMeth(C$, 'getAWTEventAccessor$', function () {
return C$.awtEventAccessor;
}, 1);

Clazz.newMeth(C$, 'setEventQueueAccessor$sun_awt_AWTAccessor_EventQueueAccessor', function (eqa) {
C$.eventQueueAccessor=eqa;
}, 1);

Clazz.newMeth(C$, 'getEventQueueAccessor$', function () {
return C$.eventQueueAccessor;
}, 1);
;
(function(){var C$=Clazz.newInterface(P$.AWTAccessor, "WindowAccessor", function(){
});
})()
;
(function(){var C$=Clazz.newInterface(P$.AWTAccessor, "ComponentAccessor", function(){
});
})()
;
(function(){var C$=Clazz.newInterface(P$.AWTAccessor, "KeyboardFocusManagerAccessor", function(){
});
})()
;
(function(){var C$=Clazz.newInterface(P$.AWTAccessor, "AWTEventAccessor", function(){
});
})()
;
(function(){var C$=Clazz.newInterface(P$.AWTAccessor, "EventQueueAccessor", function(){
});
})()
;
(function(){var C$=Clazz.newInterface(P$.AWTAccessor, "CursorAccessor", function(){
});
})()
;
(function(){var C$=Clazz.newInterface(P$.AWTAccessor, "ClientPropertyKeyAccessor", function(){
});
})()
;
(function(){var C$=Clazz.newInterface(P$.AWTAccessor, "DefaultKeyboardFocusManagerAccessor", function(){
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
