(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),I$=[[0,'java.awt.Dimension','java.awt.Rectangle','javax.swing.ButtonGroup',['org.openscience.jmol.app.jmolpanel.DisplayPanel','.HomeAction'],['org.openscience.jmol.app.jmolpanel.DisplayPanel','.DefineCenterAction'],['org.openscience.jmol.app.jmolpanel.DisplayPanel','.MoveToAction'],['org.openscience.jmol.app.jmolpanel.DisplayPanel','.CheckBoxMenuItemAction'],['org.openscience.jmol.app.jmolpanel.DisplayPanel','.SetStatusAction'],'org.jmol.i18n.GT','java.awt.RenderingHints','javax.swing.Action','java.util.Arrays']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DisplayPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['org.jmol.awt.JmolFrame', 'java.awt.event.ComponentListener', 'java.awt.print.Printable']);
C$.$classes$=[['SetStatusAction',4],['MoveToAction',4],['DefineCenterAction',0],['HomeAction',0],['CheckBoxMenuItemAction',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.showPaintTime=true;
this.dimSize=Clazz.new_($I$(1,1));
this.rectClip=Clazz.new_($I$(2,1));
this.toolbarButtonGroup=Clazz.new_($I$(3,1));
this.homeAction=Clazz.new_($I$(4,1),[this, null]);
this.defineCenterAction=Clazz.new_($I$(5,1),[this, null]);
this.frontAction=Clazz.new_($I$(6,1).c$$S$S,[this, null, "front", "moveto 2.0 front"]);
this.topAction=Clazz.new_($I$(6,1).c$$S$S,[this, null, "top", "moveto 1.0 front;moveto 2.0 top"]);
this.bottomAction=Clazz.new_($I$(6,1).c$$S$S,[this, null, "bottom", "moveto 1.0 front;moveto 2.0 bottom"]);
this.rightAction=Clazz.new_($I$(6,1).c$$S$S,[this, null, "right", "moveto 1.0 front;moveto 2.0 right"]);
this.leftAction=Clazz.new_($I$(6,1).c$$S$S,[this, null, "left", "moveto 1.0 front;moveto 2.0 left"]);
this.hydrogensAction=Clazz.new_($I$(7,1).c$$S$S,[this, null, "hydrogensCheck", "set showHydrogens"]);
this.measurementsAction=Clazz.new_($I$(7,1).c$$S$S,[this, null, "measurementsCheck", "set showMeasurements"]);
this.perspectiveAction=Clazz.new_($I$(7,1).c$$S$S,[this, null, "perspectiveCheck", "set PerspectiveDepth"]);
this.axesAction=Clazz.new_($I$(7,1).c$$S$S,[this, null, "axesCheck", "set showAxes"]);
this.boundboxAction=Clazz.new_($I$(7,1).c$$S$S,[this, null, "boundboxCheck", "set showBoundBox"]);
this.deleteAction=Clazz.new_([this, null, "delete", $I$(9).$$S("Delete atoms")],$I$(8,1).c$$S$S);
this.zoomAction=Clazz.new_($I$(8,1).c$$S$S,[this, null, "zoom", null]);
this.xlateAction=Clazz.new_($I$(8,1).c$$S$S,[this, null, "xlate", null]);
},1);

C$.$fields$=[['Z',['haveDisplay','showPaintTime'],'I',['lastMotionEventNumber'],'J',['timeBegin'],'S',['displaySpeed'],'O',['vwr','org.jmol.viewer.Viewer','startupDim','java.awt.Dimension','frame','javax.swing.JFrame','jmolPanel','org.openscience.jmol.app.jmolpanel.JmolPanel','dimSize','java.awt.Dimension','rectClip','java.awt.Rectangle','buttonRotate','javax.swing.AbstractButton','+buttonModelkit','toolbarButtonGroup','javax.swing.ButtonGroup','homeAction','org.openscience.jmol.app.jmolpanel.DisplayPanel.HomeAction','defineCenterAction','org.openscience.jmol.app.jmolpanel.DisplayPanel.DefineCenterAction','frontAction','javax.swing.Action','+topAction','+bottomAction','+rightAction','+leftAction','+hydrogensAction','+measurementsAction','+perspectiveAction','+axesAction','+boundboxAction','+deleteAction','+zoomAction','+xlateAction']]
,['I',['timeLast','timeCount','timeTotal']]]

Clazz.newMeth(C$, 'getFrame$', function () {
return this.frame;
});

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_jmolpanel_JmolPanel', function (jmolPanel) {
Clazz.super_(C$, this);
this.jmolPanel=jmolPanel;
this.frame=jmolPanel.frame;
this.haveDisplay=jmolPanel.jmolApp.haveDisplay;
this.startupDim=Clazz.new_($I$(1,1).c$$I$I,[jmolPanel.startupWidth, jmolPanel.startupHeight]);
this.setMinimumSize$java_awt_Dimension(this.startupDim);
this.setPreferredSize$java_awt_Dimension(this.startupDim);
this.setMaximumSize$java_awt_Dimension(this.startupDim);
this.setFocusable$Z(true);
if (System.getProperty$S$S("painttime", "false").equals$O("true")) this.showPaintTime=true;
this.displaySpeed=System.getProperty$S("display.speed");
if (this.displaySpeed == null ) {
this.displaySpeed="ms";
}this.setDoubleBuffered$Z(false);
}, 1);

Clazz.newMeth(C$, 'say$S', function (msg) {
this.jmolPanel.say$S(msg);
});

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
this.updateSize$Z(false);
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
this.updateSize$Z(true);
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent', function (e) {
this.updateSize$Z(true);
});

Clazz.newMeth(C$, 'updateSize$Z', function (doAll) {
if (this.haveDisplay) {
this.getSize$java_awt_Dimension(this.dimSize);
if (this.dimSize.width == 0) return;
this.vwr.setScreenDimension$I$I(this.dimSize.width, this.dimSize.height);
} else {
this.vwr.setScreenDimension$I$I(this.startupDim.width, this.startupDim.height);
}if (!doAll) return;
this.setRotateMode$();
if (this.haveDisplay) this.jmolPanel.setStatus$I$S(2, this.dimSize.width + " x " + this.dimSize.height );
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
this.updateSize$Z(false);
if (this.dimSize.width == 0) return;
if (this.showPaintTime) this.startPaintClock$();
this.vwr.renderScreenImage$O$I$I(g, this.dimSize.width, this.dimSize.height);
if (this.showPaintTime) this.stopPaintClock$();
});

Clazz.newMeth(C$, 'print$java_awt_Graphics$java_awt_print_PageFormat$I', function (g, pf, pageIndex) {
var g2=g;
if (pageIndex > 0) return 1;
this.rectClip.x=this.rectClip.y=0;
var screenWidth=this.rectClip.width=this.vwr.getScreenWidth$();
var screenHeight=this.rectClip.height=this.vwr.getScreenHeight$();
var image=this.vwr.getScreenImage$();
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
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(10).KEY_RENDERING, $I$(10).VALUE_RENDER_QUALITY);
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(10).KEY_INTERPOLATION, $I$(10).VALUE_INTERPOLATION_BICUBIC);
g2.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(image, pageX, pageY, width, height, null);
} else {
g2.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, pageX, pageY, null);
}this.vwr.releaseScreenImage$();
return 0;
});

Clazz.newMeth(C$, 'addActions$java_util_List', function (actions) {
var a=Clazz.array($I$(11), -1, [this.deleteAction, this.zoomAction, this.xlateAction, this.frontAction, this.topAction, this.bottomAction, this.rightAction, this.leftAction, this.defineCenterAction, this.hydrogensAction, this.measurementsAction, this.homeAction, this.perspectiveAction, this.axesAction, this.boundboxAction]);
actions.addAll$java_util_Collection($I$(12).asList$OA(a));
});

Clazz.newMeth(C$, 'resetTimes$', function () {
C$.timeCount=C$.timeTotal=0;
C$.timeLast=-1;
});

Clazz.newMeth(C$, 'recordTime$I', function (time) {
if (C$.timeLast != -1) {
C$.timeTotal+=C$.timeLast;
++C$.timeCount;
}C$.timeLast=time;
});

Clazz.newMeth(C$, 'startPaintClock$', function () {
this.timeBegin=System.currentTimeMillis$();
var motionEventNumber=this.vwr.getMotionEventNumber$();
if (this.lastMotionEventNumber != motionEventNumber) {
this.lastMotionEventNumber=motionEventNumber;
this.resetTimes$();
}});

Clazz.newMeth(C$, 'stopPaintClock$', function () {
var time=((System.currentTimeMillis$() - this.timeBegin)|0);
this.recordTime$I(time);
this.showTimes$();
});

Clazz.newMeth(C$, 'fmt$I', function (num) {
if (num < 0) return "---";
if (num < 10) return "  " + num;
if (num < 100) return " " + num;
return "" + num;
});

Clazz.newMeth(C$, 'showTimes$', function () {
var timeAverage=(C$.timeCount == 0 ? -1 : ((C$.timeTotal + (C$.timeCount/2|0))/C$.timeCount|0));
this.jmolPanel.setStatus$I$S(3, (this.displaySpeed.equalsIgnoreCase$S("fps") ? this.fmt$I((1000/C$.timeLast|0)) + "FPS : " + this.fmt$I((1000/timeAverage|0)) + "FPS"  : this.vwr.getP$S("_memory") + " Mb; " + this.fmt$I(C$.timeLast) + "/" + timeAverage + " ms" ));
});

Clazz.newMeth(C$, 'setJmolSize$java_awt_Dimension', function (d) {
this.dimSize.width=d.width;
this.dimSize.height=d.height;
this.setPreferredSize$java_awt_Dimension(d);
});

C$.$static$=function(){C$.$static$=0;
C$.timeLast=0;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DisplayPanel, "SetStatusAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['statusText']]]

Clazz.newMeth(C$, 'c$$S$S', function (name, status) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.statusText=status;
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'].vwr.setSelectionHalosEnabled$Z(false);
this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'].jmolPanel.setStatus$I$S(1, this.statusText == null  ? (e.getSource$()).getToolTipText$() : this.statusText);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DisplayPanel, "MoveToAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['action']]]

Clazz.newMeth(C$, 'c$$S$S', function (name, action) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.action=action;
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'].vwr.getShowBbcage$() || this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'].vwr.getBooleanProperty$S("showUnitCell") ) {
this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'].vwr.evalStringQuiet$S(this.action);
} else {
this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'].vwr.evalStringQuiet$S("boundbox on;" + this.action + ";delay 1;boundbox off" );
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DisplayPanel, "DefineCenterAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["definecenter"]);C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'].vwr.evalStringQuiet$S("center (selected)");
this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'].setRotateMode$.apply(this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'], []);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DisplayPanel, "HomeAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["home"]);C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'].vwr.homePosition$();
this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'].setRotateMode$.apply(this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'], []);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DisplayPanel, "CheckBoxMenuItemAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['action']]]

Clazz.newMeth(C$, 'c$$S$S', function (name, action) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.action=action;
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var cbmi=e.getSource$();
this.b$['org.openscience.jmol.app.jmolpanel.DisplayPanel'].vwr.evalStringQuiet$S(this.action + " " + cbmi.isSelected$() );
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
