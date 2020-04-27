(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.Color','java.awt.Cursor']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IdwidthAdjuster", null, 'javax.swing.JPanel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.oldX=0;
},1);

C$.$fields$=[['I',['oldX'],'O',['ap','jalview.gui.AlignmentPanel']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this);
this.ap=ap;
this.setBackground$java_awt_Color($I$(1).white);
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
this.oldX=evt.getX$();
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
this.repaint$();
var viewport=this.ap.getAlignViewport$();
if (viewport.getCodingComplement$() != null ) {
viewport.getCodingComplement$().setIdWidth$I(viewport.getIdWidth$());
var sf=this.ap.alignFrame.getSplitViewContainer$();
sf.repaint$();
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
this.repaint$();
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
var mouseX=evt.getX$();
var viewport=this.ap.getAlignViewport$();
var curwidth=viewport.getIdWidth$();
var dif=mouseX - this.oldX;
var newWidth=curwidth + dif;
if (newWidth < 20) {
return;
}this.oldX=evt.getX$();
if (dif > 0 && mouseX < 0 ) {
return;
}viewport.setIdWidth$I(newWidth);
this.ap.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color($I$(1).white);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
this.setCursor$java_awt_Cursor($I$(2).getPredefinedCursor$I(10));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:53 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
