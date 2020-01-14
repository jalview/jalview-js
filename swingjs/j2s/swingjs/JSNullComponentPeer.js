(function(){var P$=Clazz.newPackage("swingjs"),I$=[];
var C$=Clazz.newClass(P$, "JSNullComponentPeer", null, null, 'java.awt.peer.LightweightPeer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.target=null;
this.isNull=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isNull=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component', function (target) {
C$.$init$.apply(this);
this.target=target;
}, 1);

Clazz.newMeth(C$, 'isObscured$', function () {
return false;
});

Clazz.newMeth(C$, 'canDetermineObscurity$', function () {
return false;
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
});

Clazz.newMeth(C$, 'setEnabled$Z', function (b) {
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I', function (tm, x, y, width, height) {
});

Clazz.newMeth(C$, 'print$java_awt_Graphics', function (g) {
});

Clazz.newMeth(C$, 'setBounds$I$I$I$I$I', function (x, y, width, height, op) {
});

Clazz.newMeth(C$, 'handleEvent$java_awt_AWTEvent', function (e) {
});

Clazz.newMeth(C$, 'coalescePaintEvent$java_awt_event_PaintEvent', function (e) {
});

Clazz.newMeth(C$, 'getLocationOnScreen$', function () {
return null;
});

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return null;
});

Clazz.newMeth(C$, 'getMinimumSize$', function () {
return null;
});

Clazz.newMeth(C$, 'getColorModel$', function () {
return null;
});

Clazz.newMeth(C$, 'getToolkit$', function () {
return null;
});

Clazz.newMeth(C$, 'getGraphics$', function () {
return null;
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font', function (font) {
return null;
});

Clazz.newMeth(C$, 'dispose$', function () {
});

Clazz.newMeth(C$, 'setForeground$java_awt_Color', function (c) {
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color', function (c) {
});

Clazz.newMeth(C$, 'setFont$java_awt_Font', function (f) {
});

Clazz.newMeth(C$, 'updateCursorImmediately$', function () {
});

Clazz.newMeth(C$, 'requestFocus$java_awt_Component$Z$Z$J$sun_awt_CausedFocusEvent_Cause', function (lightweightChild, temporary, focusedWindowChangeAllowed, time, cause) {
return false;
});

Clazz.newMeth(C$, 'isFocusable$', function () {
return false;
});

Clazz.newMeth(C$, 'createImage$java_awt_image_ImageProducer', function (producer) {
return null;
});

Clazz.newMeth(C$, 'createImage$I$I', function (width, height) {
return null;
});

Clazz.newMeth(C$, 'createVolatileImage$I$I', function (width, height) {
return null;
});

Clazz.newMeth(C$, 'prepareImage$java_awt_Image$I$I$java_awt_image_ImageObserver', function (img, w, h, o) {
return false;
});

Clazz.newMeth(C$, 'checkImage$java_awt_Image$I$I$java_awt_image_ImageObserver', function (img, w, h, o) {
return 0;
});

Clazz.newMeth(C$, 'getGraphicsConfiguration$', function () {
return null;
});

Clazz.newMeth(C$, 'handlesWheelScrolling$', function () {
return false;
});

Clazz.newMeth(C$, 'getBackBuffer$', function () {
return null;
});

Clazz.newMeth(C$, 'destroyBuffers$', function () {
});

Clazz.newMeth(C$, 'reparent$java_awt_peer_ContainerPeer', function (newContainer) {
});

Clazz.newMeth(C$, 'isReparentSupported$', function () {
return false;
});

Clazz.newMeth(C$, 'layout$', function () {
});

Clazz.newMeth(C$, 'getBounds$', function () {
return null;
});

Clazz.newMeth(C$, 'getInsets$', function () {
return null;
});

Clazz.newMeth(C$, 'beginValidate$', function () {
});

Clazz.newMeth(C$, 'endValidate$', function () {
});

Clazz.newMeth(C$, 'beginLayout$', function () {
});

Clazz.newMeth(C$, 'endLayout$', function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
