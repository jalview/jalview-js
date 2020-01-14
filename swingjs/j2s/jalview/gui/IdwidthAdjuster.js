(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.Color','java.awt.Cursor']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IdwidthAdjuster", null, 'javax.swing.JPanel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.active=false;
this.oldX=0;
this.ap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.active=false;
this.oldX=0;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this,1);
this.ap=ap;
this.setBackground$java_awt_Color($I$(1).white);
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
this.oldX=evt.getX$();
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
this.active=false;
this.repaint$();
var viewport=this.ap.getAlignViewport$();
if (viewport.getCodingComplement$() != null  && viewport.isScaleProteinAsCdna$() ) {
viewport.getCodingComplement$().setIdWidth$I(viewport.getIdWidth$());
var sf=this.ap.alignFrame.getSplitViewContainer$();
sf.repaint$();
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
this.active=true;
this.repaint$();
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
this.active=false;
this.repaint$();
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
this.active=true;
var viewport=this.ap.getAlignViewport$();
var curwidth=viewport.getIdWidth$();
var dif=evt.getX$() - this.oldX;
var newWidth=curwidth + dif;
if ((newWidth > 20) || (dif > 0) ) {
viewport.setIdWidth$I(newWidth);
this.ap.paintAlignment$Z$Z(true, false);
}this.oldX=evt.getX$();
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color($I$(1).white);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
if (this.active) {
this.setCursor$java_awt_Cursor($I$(2).getPredefinedCursor$I(10));
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
