(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JSplitPane','jalview.util.Platform','java.awt.MouseInfo','java.awt.Rectangle']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GSplitFrame", null, 'javax.swing.JInternalFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['dividerRatio'],'O',['topFrame','jalview.jbgui.GAlignFrame','+bottomFrame','splitPane','javax.swing.JSplitPane']]]

Clazz.newMeth(C$, 'c$$jalview_jbgui_GAlignFrame$jalview_jbgui_GAlignFrame', function (top, bottom) {
Clazz.super_(C$, this);
this.setName$S("jalview-splitframe");
this.topFrame=top;
this.bottomFrame=bottom;
this.hideTitleBars$();
this.addSplitPane$();
}, 1);

Clazz.newMeth(C$, 'addSplitPane$', function () {
this.splitPane=Clazz.new_($I$(1,1).c$$I$java_awt_Component$java_awt_Component,[0, this.topFrame, this.bottomFrame]);
this.splitPane.setVisible$Z(true);
var topFrameHeight=this.topFrame.getHeight$();
this.splitPane.setDividerSize$I(5);
if (topFrameHeight == 0) {
this.setRelativeDividerLocation$D(0.5);
} else {
var dividerPosition=topFrameHeight + 2;
this.splitPane.setDividerLocation$I(dividerPosition);
}this.splitPane.setResizeWeight$D(0.5);
this.add$java_awt_Component(this.splitPane);
});

Clazz.newMeth(C$, 'hideTitleBars$', function () {
if ($I$(2).isAMacAndNotJS$()) {
this.topFrame.putClientProperty$O$O("JInternalFrame.isPalette", new Boolean(true));
this.bottomFrame.putClientProperty$O$O("JInternalFrame.isPalette", new Boolean(true));
} else {
(this.topFrame.getUI$()).setNorthPane$javax_swing_JComponent(null);
(this.bottomFrame.getUI$()).setNorthPane$javax_swing_JComponent(null);
}});

Clazz.newMeth(C$, 'getTopFrame$', function () {
return this.topFrame;
});

Clazz.newMeth(C$, 'getBottomFrame$', function () {
return this.bottomFrame;
});

Clazz.newMeth(C$, 'getFrameAtMouse$', function () {
var loc=$I$(3).getPointerInfo$().getLocation$();
if (p$1.isIn$java_awt_Point$java_awt_Component.apply(this, [loc, this.splitPane.getTopComponent$()])) {
return this.getTopFrame$();
} else if (p$1.isIn$java_awt_Point$java_awt_Component.apply(this, [loc, this.splitPane.getBottomComponent$()])) {
return this.getBottomFrame$();
}return null;
});

Clazz.newMeth(C$, 'isIn$java_awt_Point$java_awt_Component', function (loc, comp) {
if (!comp.isVisible$()) {
return false;
}var p=comp.getLocationOnScreen$();
var r=Clazz.new_([p.x, p.y, comp.getWidth$(), comp.getHeight$()],$I$(4,1).c$$I$I$I$I);
return r.contains$java_awt_Point(loc);
}, p$1);

Clazz.newMeth(C$, 'setComplementVisible$O$Z', function (alignFrame, show) {
if (show) {
this.setRelativeDividerLocation$D(this.dividerRatio);
} else {
this.dividerRatio=this.splitPane.getDividerLocation$() / (this.splitPane.getHeight$() - this.splitPane.getDividerSize$());
}if (alignFrame === this.topFrame ) {
this.bottomFrame.setVisible$Z(show);
} else if (alignFrame === this.bottomFrame ) {
this.topFrame.setVisible$Z(show);
}this.validate$();
});

Clazz.newMeth(C$, 'setRelativeDividerLocation$D', function (r) {
this.dividerRatio=r;
this.splitPane.setDividerLocation$D(r);
});

Clazz.newMeth(C$, 'setDividerLocation$I', function (p) {
this.splitPane.setDividerLocation$I(p);
});

Clazz.newMeth(C$, 'getDividerLocation$', function () {
return this.splitPane.getDividerLocation$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
