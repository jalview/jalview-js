(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.Vector']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AquaInternalFrameManager", null, 'javax.swing.DefaultDesktopManager');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fCurrentFrame=null;
this.fInitialFrame=null;
this.fChildFrames=null;
this.ourManager=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.fChildFrames=Clazz.new_($I$(1).c$$I,[1]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_DesktopManager', function (desktopManager) {
Clazz.super_(C$, this,1);
this.ourManager=desktopManager;
}, 1);

Clazz.newMeth(C$, 'closeFrame$javax_swing_JInternalFrame', function (f) {
if (f === this.fCurrentFrame ) {
var mostRecentFrame=this.fChildFrames.indexOf$O(f) == this.fChildFrames.size$() - 1;
if (!mostRecentFrame) {
this.activateNextFrame$();
} else {
this.activatePreviousFrame$();
}}this.fChildFrames.removeElement$O(f);
C$.superclazz.prototype.closeFrame$javax_swing_JInternalFrame.apply(this, [f]);
});

Clazz.newMeth(C$, 'deiconifyFrame$javax_swing_JInternalFrame', function (f) {
var desktopIcon;
desktopIcon=f.getDesktopIcon$();
f.reshape$I$I$I$I(desktopIcon.getX$(), desktopIcon.getY$(), f.getWidth$(), f.getHeight$());
this.ourManager.deiconifyFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'addIcon$java_awt_Container$javax_swing_JInternalFrame_JDesktopIcon', function (c, desktopIcon) {
c.add$java_awt_Component(desktopIcon);
});

Clazz.newMeth(C$, 'iconifyFrame$javax_swing_JInternalFrame', function (f) {
this.ourManager.iconifyFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'activateFrame$javax_swing_JInternalFrame', function (f) {
try {
if (f != null ) {
C$.superclazz.prototype.activateFrame$javax_swing_JInternalFrame.apply(this, [f]);
}if (this.fChildFrames.indexOf$O(f) != -1) {
this.fChildFrames.remove$O(f);
}this.fChildFrames.addElement$TE(f);
if (this.fCurrentFrame != null  && f !== this.fCurrentFrame  ) {
if (this.fCurrentFrame.isSelected$()) {
this.fCurrentFrame.setSelected$Z(false);
}}if (f != null  && !f.isSelected$() ) {
f.setSelected$Z(true);
}this.fCurrentFrame=f;
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'switchFrame$Z', function (next) {
if (this.fCurrentFrame == null ) {
if (this.fInitialFrame != null ) {
this.activateFrame$javax_swing_JInternalFrame(this.fInitialFrame);
}return;
}var count=this.fChildFrames.size$();
if (count <= 1) {
return;
}var currentIndex=this.fChildFrames.indexOf$O(this.fCurrentFrame);
if (currentIndex == -1) {
this.fCurrentFrame=null;
return;
}var nextIndex;
if (next) {
nextIndex=currentIndex + 1;
if (nextIndex == count) {
nextIndex=0;
}} else {
nextIndex=currentIndex - 1;
if (nextIndex == -1) {
nextIndex=count - 1;
}}var f=this.fChildFrames.elementAt$I(nextIndex);
this.activateFrame$javax_swing_JInternalFrame(f);
this.fCurrentFrame=f;
}, p$1);

Clazz.newMeth(C$, 'activateNextFrame$', function () {
p$1.switchFrame$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'activateNextFrame$javax_swing_JInternalFrame', function (f) {
this.fInitialFrame=f;
p$1.switchFrame$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'activatePreviousFrame$', function () {
p$1.switchFrame$Z.apply(this, [false]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
