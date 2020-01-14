(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'Boolean',['javax.swing.ScrollPaneLayout','.UIResource'],'java.awt.Point','java.awt.Rectangle','javax.swing.SwingUtilities',['javax.swing.JScrollPane','.ScrollBar'],'javax.swing.JViewport']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JScrollPane", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', 'javax.swing.ScrollPaneConstants');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.viewportBorder=null;
this.verticalScrollBarPolicy=0;
this.horizontalScrollBarPolicy=0;
this.viewport=null;
this.verticalScrollBar=null;
this.horizontalScrollBar=null;
this.rowHeader=null;
this.columnHeader=null;
this.lowerLeft=null;
this.lowerRight=null;
this.upperLeft=null;
this.upperRight=null;
this.wheelScrollState=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.verticalScrollBarPolicy=20;
this.horizontalScrollBarPolicy=30;
this.wheelScrollState=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$I', function (view, vsbPolicy, hsbPolicy) {
Clazz.super_(C$, this,1);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2)));
this.setVerticalScrollBarPolicy$I(vsbPolicy);
this.setHorizontalScrollBarPolicy$I(hsbPolicy);
this.setViewport$javax_swing_JViewport(this.createViewport$());
this.setVerticalScrollBar$javax_swing_JScrollBar(this.createVerticalScrollBar$());
this.setHorizontalScrollBar$javax_swing_JScrollBar(this.createHorizontalScrollBar$());
if (view != null ) {
this.setViewportView$java_awt_Component(view);
}if (!this.getComponentOrientation$().isLeftToRight$()) {
this.viewport.setViewPosition$java_awt_Point(Clazz.new_($I$(3).c$$I$I,[2147483647, 0]));
}this.setUIProperty$S$O("opaque", new Boolean(true));
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$', function () {
return "ScrollPaneUI";
});

Clazz.newMeth(C$, 'c$$java_awt_Component', function (view) {
C$.c$$java_awt_Component$I$I.apply(this, [view, 20, 30]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (vsbPolicy, hsbPolicy) {
C$.c$$java_awt_Component$I$I.apply(this, [null, vsbPolicy, hsbPolicy]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_awt_Component$I$I.apply(this, [null, 20, 30]);
}, 1);

Clazz.newMeth(C$, 'setLayout$java_awt_LayoutManager', function (layout) {
if (Clazz.instanceOf(layout, "javax.swing.ScrollPaneLayout")) {
C$.superclazz.prototype.setLayout$java_awt_LayoutManager.apply(this, [layout]);
(layout).syncWithScrollPane$javax_swing_JScrollPane(this);
} else if (layout == null ) {
C$.superclazz.prototype.setLayout$java_awt_LayoutManager.apply(this, [layout]);
} else {
var s="layout of JScrollPane must be a ScrollPaneLayout";
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[s]);
}});

Clazz.newMeth(C$, 'isValidateRoot$', function () {
return true;
});

Clazz.newMeth(C$, 'getVerticalScrollBarPolicy$', function () {
return this.verticalScrollBarPolicy;
});

Clazz.newMeth(C$, 'setVerticalScrollBarPolicy$I', function (policy) {
switch (policy) {
case 20:
case 21:
case 22:
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid verticalScrollBarPolicy"]);
}
var old=this.verticalScrollBarPolicy;
this.verticalScrollBarPolicy=policy;
this.firePropertyChange$S$I$I("verticalScrollBarPolicy", old, policy);
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'getHorizontalScrollBarPolicy$', function () {
return this.horizontalScrollBarPolicy;
});

Clazz.newMeth(C$, 'setHorizontalScrollBarPolicy$I', function (policy) {
switch (policy) {
case 30:
case 31:
case 32:
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid horizontalScrollBarPolicy"]);
}
var old=this.horizontalScrollBarPolicy;
this.horizontalScrollBarPolicy=policy;
this.firePropertyChange$S$I$I("horizontalScrollBarPolicy", old, policy);
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'getViewportBorder$', function () {
return this.viewportBorder;
});

Clazz.newMeth(C$, 'setViewportBorder$javax_swing_border_Border', function (viewportBorder) {
var oldValue=this.viewportBorder;
this.viewportBorder=viewportBorder;
this.firePropertyChange$S$O$O("viewportBorder", oldValue, viewportBorder);
});

Clazz.newMeth(C$, 'getViewportBorderBounds$', function () {
var borderR=Clazz.new_($I$(4).c$$java_awt_Dimension,[this.getSize$()]);
var insets=this.getInsets$();
borderR.x=insets.left;
borderR.y=insets.top;
borderR.width-=insets.left + insets.right;
borderR.height-=insets.top + insets.bottom;
var leftToRight=$I$(5).isLeftToRight$java_awt_Component(this);
var colHead=this.getColumnHeader$();
if ((colHead != null ) && (colHead.isVisible$()) ) {
var colHeadHeight=colHead.getHeight$();
borderR.y+=colHeadHeight;
borderR.height-=colHeadHeight;
}var rowHead=this.getRowHeader$();
if ((rowHead != null ) && (rowHead.isVisible$()) ) {
var rowHeadWidth=rowHead.getWidth$();
if (leftToRight) {
borderR.x+=rowHeadWidth;
}borderR.width-=rowHeadWidth;
}var vsb=this.getVerticalScrollBar$();
if ((vsb != null ) && (vsb.isVisible$()) ) {
var vsbWidth=vsb.getWidth$();
if (!leftToRight) {
borderR.x+=vsbWidth;
}borderR.width-=vsbWidth;
}var hsb=this.getHorizontalScrollBar$();
if ((hsb != null ) && (hsb.isVisible$()) ) {
borderR.height-=hsb.getHeight$();
}return borderR;
});

Clazz.newMeth(C$, 'createHorizontalScrollBar$', function () {
return Clazz.new_($I$(6).c$$I, [this, null, 0]);
});

Clazz.newMeth(C$, 'getHorizontalScrollBar$', function () {
return this.horizontalScrollBar;
});

Clazz.newMeth(C$, 'setHorizontalScrollBar$javax_swing_JScrollBar', function (horizontalScrollBar) {
var old=this.getHorizontalScrollBar$();
this.horizontalScrollBar=horizontalScrollBar;
if (horizontalScrollBar != null ) {
this.add$java_awt_Component$O(horizontalScrollBar, "HORIZONTAL_SCROLLBAR");
} else if (old != null ) {
this.remove$java_awt_Component(old);
}this.firePropertyChange$S$O$O("horizontalScrollBar", old, horizontalScrollBar);
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'createVerticalScrollBar$', function () {
return Clazz.new_($I$(6).c$$I, [this, null, 1]);
});

Clazz.newMeth(C$, 'getVerticalScrollBar$', function () {
return this.verticalScrollBar;
});

Clazz.newMeth(C$, 'setVerticalScrollBar$javax_swing_JScrollBar', function (verticalScrollBar) {
var old=this.getVerticalScrollBar$();
this.verticalScrollBar=verticalScrollBar;
this.add$java_awt_Component$O(verticalScrollBar, "VERTICAL_SCROLLBAR");
this.firePropertyChange$S$O$O("verticalScrollBar", old, verticalScrollBar);
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'createViewport$', function () {
return Clazz.new_($I$(7));
});

Clazz.newMeth(C$, 'getViewport$', function () {
return this.viewport;
});

Clazz.newMeth(C$, 'setViewport$javax_swing_JViewport', function (viewport) {
var old=this.getViewport$();
this.viewport=viewport;
if (viewport != null ) {
this.add$java_awt_Component$O(viewport, "VIEWPORT");
} else if (old != null ) {
this.remove$java_awt_Component(old);
}this.firePropertyChange$S$O$O("viewport", old, viewport);
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'setViewportView$java_awt_Component', function (view) {
if (this.getViewport$() == null ) {
this.setViewport$javax_swing_JViewport(this.createViewport$());
}this.getViewport$().setView$java_awt_Component(view);
});

Clazz.newMeth(C$, 'getRowHeader$', function () {
return this.rowHeader;
});

Clazz.newMeth(C$, 'setRowHeader$javax_swing_JViewport', function (rowHeader) {
var old=this.getRowHeader$();
this.rowHeader=rowHeader;
if (rowHeader != null ) {
this.add$java_awt_Component$O(rowHeader, "ROW_HEADER");
} else if (old != null ) {
this.remove$java_awt_Component(old);
}this.firePropertyChange$S$O$O("rowHeader", old, rowHeader);
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'setRowHeaderView$java_awt_Component', function (view) {
if (this.getRowHeader$() == null ) {
this.setRowHeader$javax_swing_JViewport(this.createViewport$());
}this.getRowHeader$().setView$java_awt_Component(view);
});

Clazz.newMeth(C$, 'getColumnHeader$', function () {
return this.columnHeader;
});

Clazz.newMeth(C$, 'setColumnHeader$javax_swing_JViewport', function (columnHeader) {
var old=this.getColumnHeader$();
this.columnHeader=columnHeader;
if (columnHeader != null ) {
this.add$java_awt_Component$O(columnHeader, "COLUMN_HEADER");
} else if (old != null ) {
this.remove$java_awt_Component(old);
}this.firePropertyChange$S$O$O("columnHeader", old, columnHeader);
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'setColumnHeaderView$java_awt_Component', function (view) {
if (this.getColumnHeader$() == null ) {
this.setColumnHeader$javax_swing_JViewport(this.createViewport$());
}this.getColumnHeader$().setView$java_awt_Component(view);
});

Clazz.newMeth(C$, 'getCorner$S', function (key) {
var isLeftToRight=this.getComponentOrientation$().isLeftToRight$();
if (key.equals$O("LOWER_LEADING_CORNER")) {
key=isLeftToRight ? "LOWER_LEFT_CORNER" : "LOWER_RIGHT_CORNER";
} else if (key.equals$O("LOWER_TRAILING_CORNER")) {
key=isLeftToRight ? "LOWER_RIGHT_CORNER" : "LOWER_LEFT_CORNER";
} else if (key.equals$O("UPPER_LEADING_CORNER")) {
key=isLeftToRight ? "UPPER_LEFT_CORNER" : "UPPER_RIGHT_CORNER";
} else if (key.equals$O("UPPER_TRAILING_CORNER")) {
key=isLeftToRight ? "UPPER_RIGHT_CORNER" : "UPPER_LEFT_CORNER";
}if (key.equals$O("LOWER_LEFT_CORNER")) {
return this.lowerLeft;
} else if (key.equals$O("LOWER_RIGHT_CORNER")) {
return this.lowerRight;
} else if (key.equals$O("UPPER_LEFT_CORNER")) {
return this.upperLeft;
} else if (key.equals$O("UPPER_RIGHT_CORNER")) {
return this.upperRight;
} else {
return null;
}});

Clazz.newMeth(C$, 'setCorner$S$java_awt_Component', function (key, corner) {
var old;
var isLeftToRight=this.getComponentOrientation$().isLeftToRight$();
if (key.equals$O("LOWER_LEADING_CORNER")) {
key=isLeftToRight ? "LOWER_LEFT_CORNER" : "LOWER_RIGHT_CORNER";
} else if (key.equals$O("LOWER_TRAILING_CORNER")) {
key=isLeftToRight ? "LOWER_RIGHT_CORNER" : "LOWER_LEFT_CORNER";
} else if (key.equals$O("UPPER_LEADING_CORNER")) {
key=isLeftToRight ? "UPPER_LEFT_CORNER" : "UPPER_RIGHT_CORNER";
} else if (key.equals$O("UPPER_TRAILING_CORNER")) {
key=isLeftToRight ? "UPPER_RIGHT_CORNER" : "UPPER_LEFT_CORNER";
}if (key.equals$O("LOWER_LEFT_CORNER")) {
old=this.lowerLeft;
this.lowerLeft=corner;
} else if (key.equals$O("LOWER_RIGHT_CORNER")) {
old=this.lowerRight;
this.lowerRight=corner;
} else if (key.equals$O("UPPER_LEFT_CORNER")) {
old=this.upperLeft;
this.upperLeft=corner;
} else if (key.equals$O("UPPER_RIGHT_CORNER")) {
old=this.upperRight;
this.upperRight=corner;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid corner key"]);
}if (old != null ) {
this.remove$java_awt_Component(old);
}if (corner != null ) {
this.add$java_awt_Component$O(corner, key);
}this.firePropertyChange$S$O$O(key, old, corner);
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'setComponentOrientation$java_awt_ComponentOrientation', function (co) {
C$.superclazz.prototype.setComponentOrientation$java_awt_ComponentOrientation.apply(this, [co]);
if (this.verticalScrollBar != null ) this.verticalScrollBar.setComponentOrientation$java_awt_ComponentOrientation(co);
if (this.horizontalScrollBar != null ) this.horizontalScrollBar.setComponentOrientation$java_awt_ComponentOrientation(co);
});

Clazz.newMeth(C$, 'isWheelScrollingEnabled$', function () {
return this.wheelScrollState;
});

Clazz.newMeth(C$, 'setWheelScrollingEnabled$Z', function (handleWheel) {
var old=this.wheelScrollState;
this.wheelScrollState=handleWheel;
this.firePropertyChange$S$Z$Z("wheelScrollingEnabled", old, handleWheel);
});
;
(function(){var C$=Clazz.newClass(P$.JScrollPane, "ScrollBar", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JScrollBar', 'javax.swing.plaf.UIResource');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.unitIncrementSet=false;
this.blockIncrementSet=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (orientation) {
C$.superclazz.c$$I.apply(this, [orientation]);
C$.$init$.apply(this);
this.putClientProperty$O$O("JScrollBar.fastWheelScrolling", $I$(1).TRUE);
}, 1);

Clazz.newMeth(C$, 'setUnitIncrement$I', function (unitIncrement) {
this.unitIncrementSet=true;
this.putClientProperty$O$O("JScrollBar.fastWheelScrolling", null);
C$.superclazz.prototype.setUnitIncrement$I.apply(this, [unitIncrement]);
});

Clazz.newMeth(C$, 'getUnitIncrement$I', function (direction) {
var vp=this.this$0.getViewport$.apply(this.this$0, []);
if (!this.unitIncrementSet && (vp != null ) && (Clazz.instanceOf(vp.getView$(), "javax.swing.Scrollable"))  ) {
var view=(vp.getView$());
var vr=vp.getViewRect$();
return view.getScrollableUnitIncrement$java_awt_Rectangle$I$I(vr, this.getOrientation$(), direction);
} else {
return C$.superclazz.prototype.getUnitIncrement$I.apply(this, [direction]);
}});

Clazz.newMeth(C$, 'setBlockIncrement$I', function (blockIncrement) {
this.blockIncrementSet=true;
this.putClientProperty$O$O("JScrollBar.fastWheelScrolling", null);
C$.superclazz.prototype.setBlockIncrement$I.apply(this, [blockIncrement]);
});

Clazz.newMeth(C$, 'getBlockIncrement$I', function (direction) {
var vp=this.this$0.getViewport$.apply(this.this$0, []);
if (this.blockIncrementSet || vp == null  ) {
return C$.superclazz.prototype.getBlockIncrement$I.apply(this, [direction]);
} else if (Clazz.instanceOf(vp.getView$(), "javax.swing.Scrollable")) {
var view=(vp.getView$());
var vr=vp.getViewRect$();
return view.getScrollableBlockIncrement$java_awt_Rectangle$I$I(vr, this.getOrientation$(), direction);
} else if (this.getOrientation$() == 1) {
return vp.getExtentSize$().height;
} else {
return vp.getExtentSize$().width;
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
