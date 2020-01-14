(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,'java.awt.Dimension','java.awt.Rectangle','javax.swing.ButtonGroup',['org.openscience.jmol.app.jmolpanel.DisplayPanel','.HomeAction'],['org.openscience.jmol.app.jmolpanel.DisplayPanel','.DefineCenterAction'],['org.openscience.jmol.app.jmolpanel.DisplayPanel','.MoveToAction'],['org.openscience.jmol.app.jmolpanel.DisplayPanel','.CheckBoxMenuItemAction'],['org.openscience.jmol.app.jmolpanel.DisplayPanel','.SetStatusAction'],'org.jmol.i18n.GT','java.awt.Point','java.awt.RenderingHints','javax.swing.Action']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DisplayPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['org.jmol.awt.JmolFrame', 'java.awt.event.ComponentListener', 'java.awt.print.Printable']);
C$.timeLast=0;
C$.timeCount=0;
C$.timeTotal=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.timeLast=0;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.status=null;
this.vwr=null;
this.displaySpeed=null;
this.startupDimension=null;
this.haveDisplay=false;
this.$border=null;
this.haveBorder=false;
this.measurementTable=null;
this.jmolPanel=null;
this.frame=null;
this.showPaintTime=false;
this.dimSize=null;
this.rectClip=null;
this.buttonRotate=null;
this.buttonModelkit=null;
this.toolbarButtonGroup=null;
this.homeAction=null;
this.defineCenterAction=null;
this.frontAction=null;
this.topAction=null;
this.bottomAction=null;
this.rightAction=null;
this.leftAction=null;
this.hydrogensAction=null;
this.measurementsAction=null;
this.perspectiveAction=null;
this.axesAction=null;
this.boundboxAction=null;
this.deleteAction=null;
this.zoomAction=null;
this.xlateAction=null;
this.timeBegin=0;
this.lastMotionEventNumber=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.showPaintTime=true;
this.dimSize=Clazz.new_($I$(1));
this.rectClip=Clazz.new_($I$(2));
this.toolbarButtonGroup=Clazz.new_($I$(3));
this.homeAction=Clazz.new_($I$(4), [this, null]);
this.defineCenterAction=Clazz.new_($I$(5), [this, null]);
this.frontAction=Clazz.new_($I$(6).c$$S$S, [this, null, "front", "moveto 2.0 front"]);
this.topAction=Clazz.new_($I$(6).c$$S$S, [this, null, "top", "moveto 1.0 front;moveto 2.0 top"]);
this.bottomAction=Clazz.new_($I$(6).c$$S$S, [this, null, "bottom", "moveto 1.0 front;moveto 2.0 bottom"]);
this.rightAction=Clazz.new_($I$(6).c$$S$S, [this, null, "right", "moveto 1.0 front;moveto 2.0 right"]);
this.leftAction=Clazz.new_($I$(6).c$$S$S, [this, null, "left", "moveto 1.0 front;moveto 2.0 left"]);
this.hydrogensAction=Clazz.new_($I$(7).c$$S$S, [this, null, "hydrogensCheck", "set showHydrogens"]);
this.measurementsAction=Clazz.new_($I$(7).c$$S$S, [this, null, "measurementsCheck", "set showMeasurements"]);
this.perspectiveAction=Clazz.new_($I$(7).c$$S$S, [this, null, "perspectiveCheck", "set PerspectiveDepth"]);
this.axesAction=Clazz.new_($I$(7).c$$S$S, [this, null, "axesCheck", "set showAxes"]);
this.boundboxAction=Clazz.new_($I$(7).c$$S$S, [this, null, "boundboxCheck", "set showBoundBox"]);
this.deleteAction=Clazz.new_($I$(8).c$$S$S, [this, null, "delete", $I$(9).$$S("Delete atoms")]);
this.zoomAction=Clazz.new_($I$(8).c$$S$S, [this, null, "zoom", null]);
this.xlateAction=Clazz.new_($I$(8).c$$S$S, [this, null, "xlate", null]);
}, 1);

Clazz.newMeth(C$, 'getFrame$', function () {
return this.frame;
});

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_jmolpanel_JmolPanel', function (jmol) {
Clazz.super_(C$, this,1);
this.jmolPanel=jmol;
this.frame=jmol.frame;
this.status=jmol.status;
this.$border=jmol.jmolApp.border;
this.haveDisplay=jmol.jmolApp.haveDisplay;
this.startupDimension=Clazz.new_($I$(1).c$$I$I,[jmol.startupWidth, jmol.startupHeight]);
this.setFocusable$Z(true);
if (System.getProperty$S$S("painttime", "false").equals$O("true")) this.showPaintTime=true;
this.displaySpeed=System.getProperty$S("display.speed");
if (this.displaySpeed == null ) {
this.displaySpeed="ms";
}this.setDoubleBuffered$Z(false);
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
p$1.updateSize$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'start$', function () {
this.addComponentListener$java_awt_event_ComponentListener(this);
});

Clazz.newMeth(C$, 'isRotateMode$', function () {
return (this.buttonRotate != null  && this.buttonRotate.isSelected$() );
});

Clazz.newMeth(C$, 'setRotateMode$', function () {
if (this.buttonRotate != null  && !this.isRotateMode$() ) {
this.buttonRotate.setSelected$Z(true);
this.vwr.setSelectionHalosEnabled$Z(false);
}});

Clazz.newMeth(C$, 'setModelkitMode$', function () {
if (this.buttonModelkit != null ) this.buttonModelkit.setSelected$Z(true);
this.vwr.setSelectionHalosEnabled$Z(false);
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent', function (e) {
p$1.updateSize$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent', function (e) {
p$1.updateSize$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'updateSize$Z', function (doAll) {
if (this.haveDisplay) {
this.getSize$java_awt_Dimension(this.dimSize);
this.vwr.setScreenDimension$I$I(this.dimSize.width, this.dimSize.height);
} else {
this.vwr.setScreenDimension$I$I(this.startupDimension.width, this.startupDimension.height);
}if (!doAll) return;
this.setRotateMode$();
if (this.haveDisplay) this.status.setStatus$I$S(2, this.dimSize.width + " x " + this.dimSize.height );
this.vwr.refresh$I$S(3, "updateSize");
}, p$1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
if (this.showPaintTime) p$1.startPaintClock.apply(this, []);
if (this.dimSize.width == 0) return;
this.vwr.renderScreenImage$O$I$I(g, this.dimSize.width, this.dimSize.height);
if (this.$border == null ) this.$border=Clazz.new_($I$(10));
if (!this.haveBorder) this.setBorder$();
if (this.showPaintTime) p$1.stopPaintClock.apply(this, []);
});

Clazz.newMeth(C$, 'setBorder$', function () {
if (this.dimSize.width < 50) return;
this.$border.x=this.startupDimension.width - this.dimSize.width;
this.$border.y=this.startupDimension.height - this.dimSize.height;
this.haveBorder=true;
});

Clazz.newMeth(C$, ['print$java_awt_Graphics$java_awt_print_PageFormat$I','print$'], function (g, pf, pageIndex) {
var g2=g;
if (pageIndex > 0) return 1;
this.rectClip.x=this.rectClip.y=0;
var screenWidth=this.rectClip.width=this.vwr.getScreenWidth$();
var screenHeight=this.rectClip.height=this.vwr.getScreenHeight$();
var image=this.vwr.getScreenImageBuffer$();
var pageX=(pf.getImageableX$()|0);
var pageY=(pf.getImageableY$()|0);
var pageWidth=(pf.getImageableWidth$()|0);
var pageHeight=(pf.getImageableHeight$()|0);
var scaleWidth=pageWidth / screenWidth;
var scaleHeight=pageHeight / screenHeight;
var scale=(scaleWidth < scaleHeight  ? scaleWidth : scaleHeight);
if (scale < 1 ) {
var width=((screenWidth * scale)|0);
var height=((screenHeight * scale)|0);
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(11).KEY_RENDERING, $I$(11).VALUE_RENDER_QUALITY);
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(11).KEY_INTERPOLATION, $I$(11).VALUE_INTERPOLATION_BICUBIC);
g2.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(image, pageX, pageY, width, height, null);
} else {
g2.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, pageX, pageY, null);
}this.vwr.releaseScreenImage$();
return 0;
});

Clazz.newMeth(C$, 'getActions$', function () {
return Clazz.array($I$(12), -1, [this.deleteAction, this.zoomAction, this.xlateAction, this.frontAction, this.topAction, this.bottomAction, this.rightAction, this.leftAction, this.defineCenterAction, this.hydrogensAction, this.measurementsAction, this.homeAction, this.perspectiveAction, this.axesAction, this.boundboxAction]);
});

Clazz.newMeth(C$, 'resetTimes', function () {
C$.timeCount=C$.timeTotal=0;
C$.timeLast=-1;
}, p$1);

Clazz.newMeth(C$, 'recordTime$I', function (time) {
if (C$.timeLast != -1) {
C$.timeTotal+=C$.timeLast;
++C$.timeCount;
}C$.timeLast=time;
}, p$1);

Clazz.newMeth(C$, 'startPaintClock', function () {
this.timeBegin=System.currentTimeMillis$();
var motionEventNumber=this.vwr.getMotionEventNumber$();
if (this.lastMotionEventNumber != motionEventNumber) {
this.lastMotionEventNumber=motionEventNumber;
p$1.resetTimes.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'stopPaintClock', function () {
var time=((System.currentTimeMillis$() - this.timeBegin)|0);
p$1.recordTime$I.apply(this, [time]);
p$1.showTimes.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'fmt$I', function (num) {
if (num < 0) return "---";
if (num < 10) return "  " + num;
if (num < 100) return " " + num;
return "" + num;
}, p$1);

Clazz.newMeth(C$, 'showTimes', function () {
var timeAverage=(C$.timeCount == 0) ? -1 : ((C$.timeTotal + (C$.timeCount/2|0))/C$.timeCount|0);
if (this.displaySpeed.equalsIgnoreCase$S("fps")) {
this.status.setStatus$I$S(3, p$1.fmt$I.apply(this, [(1000/C$.timeLast|0)]) + "FPS : " + p$1.fmt$I.apply(this, [(1000/timeAverage|0)]) + "FPS" );
} else {
this.status.setStatus$I$S(3, this.vwr.getP$S("_memory") + " Mb; " + p$1.fmt$I.apply(this, [C$.timeLast]) + "/" + timeAverage + " ms" );
}}, p$1);

Clazz.newMeth(C$, 'setJmolSize$java_awt_Dimension', function (d) {
this.dimSize.width=d.width;
this.dimSize.height=d.height;
this.setPreferredSize$java_awt_Dimension(d);
});
;
(function(){var C$=Clazz.newClass(P$.DisplayPanel, "SetStatusAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.statusText=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (name, status) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
this.statusText=status;
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.this$0.vwr.setSelectionHalosEnabled$Z(false);
if (this.statusText != null ) {
this.this$0.status.setStatus$I$S(1, this.statusText);
} else {
this.this$0.status.setStatus$I$S(1, (e.getSource$()).getToolTipText$());
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.DisplayPanel, "MoveToAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.action=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (name, action) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
this.action=action;
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (this.this$0.vwr.getShowBbcage$() || this.this$0.vwr.getBooleanProperty$S("showUnitCell") ) {
this.this$0.vwr.evalStringQuiet$S(this.action);
} else {
this.this$0.vwr.evalStringQuiet$S("boundbox on;" + this.action + ";delay 1;boundbox off" );
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.DisplayPanel, "DefineCenterAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, ["definecenter"]);
C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.this$0.vwr.evalStringQuiet$S("center (selected)");
this.this$0.setRotateMode$.apply(this.this$0, []);
});
})()
;
(function(){var C$=Clazz.newClass(P$.DisplayPanel, "HomeAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, ["home"]);
C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.this$0.vwr.homePosition$();
this.this$0.setRotateMode$.apply(this.this$0, []);
});
})()
;
(function(){var C$=Clazz.newClass(P$.DisplayPanel, "CheckBoxMenuItemAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.action=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (name, action) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
this.action=action;
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var cbmi=e.getSource$();
this.this$0.vwr.evalStringQuiet$S(this.action + " " + cbmi.isSelected$() );
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
