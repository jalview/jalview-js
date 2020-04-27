(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.Vector']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AquaInternalFrameManager", null, 'javax.swing.DefaultDesktopManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fChildFrames=Clazz.new_($I$(1,1).c$$I,[1]);
},1);

C$.$fields$=[['O',['fCurrentFrame','javax.swing.JInternalFrame','+fInitialFrame','fChildFrames','java.util.Vector','ourManager','javax.swing.DesktopManager']]]

Clazz.newMeth(C$, 'c$$javax_swing_DesktopManager', function (desktopManager) {
Clazz.super_(C$, this);
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
}this.fChildFrames.addElement$O(f);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
