(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.awt.Dimension']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ViewportLayout", null, null, 'java.awt.LayoutManager');
C$.SHARED_INSTANCE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.SHARED_INSTANCE=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component', function (name, c) {
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component', function (c) {
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container', function (parent) {
var view=(parent).getView$();
if (view == null ) {
return Clazz.new_($I$(1).c$$I$I,[0, 0]);
} else if (Clazz.instanceOf(view, "javax.swing.Scrollable")) {
return (view).getPreferredScrollableViewportSize$();
} else {
return view.getPreferredSize$();
}});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container', function (parent) {
return Clazz.new_($I$(1).c$$I$I,[4, 4]);
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container', function (parent) {
var vp=parent;
var view=vp.getView$();
var scrollableView=null;
if (view == null ) {
return;
} else if (Clazz.instanceOf(view, "javax.swing.Scrollable")) {
scrollableView=view;
}var viewPrefSize=view.getPreferredSize$();
var vpSize=vp.getSize$();
var extentSize=vp.toViewCoordinates$java_awt_Dimension(vpSize);
var viewSize=Clazz.new_($I$(1).c$$java_awt_Dimension,[viewPrefSize]);
if (scrollableView != null ) {
if (scrollableView.getScrollableTracksViewportWidth$()) {
viewSize.width=vpSize.width;
}if (scrollableView.getScrollableTracksViewportHeight$()) {
viewSize.height=vpSize.height;
}}var viewPosition=vp.getViewPosition$();
if (scrollableView == null  || vp.getParent$() == null   || vp.getParent$().getComponentOrientation$().isLeftToRight$() ) {
if ((viewPosition.x + extentSize.width) > viewSize.width) {
viewPosition.x=Math.max(0, viewSize.width - extentSize.width);
}} else {
if (extentSize.width > viewSize.width) {
viewPosition.x=viewSize.width - extentSize.width;
} else {
viewPosition.x=Math.max(0, Math.min(viewSize.width - extentSize.width, viewPosition.x));
}}if ((viewPosition.y + extentSize.height) > viewSize.height) {
viewPosition.y=Math.max(0, viewSize.height - extentSize.height);
}if (scrollableView == null ) {
if ((viewPosition.x == 0) && (vpSize.width > viewPrefSize.width) ) {
viewSize.width=vpSize.width;
}if ((viewPosition.y == 0) && (vpSize.height > viewPrefSize.height) ) {
viewSize.height=vpSize.height;
}}vp.setViewPosition$java_awt_Point(viewPosition);
vp.setViewSize$java_awt_Dimension(viewSize);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
