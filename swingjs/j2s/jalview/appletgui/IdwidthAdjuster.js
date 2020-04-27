(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Color','java.awt.Cursor']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IdwidthAdjuster", null, 'java.awt.Panel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.active=false;
this.oldX=0;
},1);

C$.$fields$=[['Z',['active'],'I',['oldX'],'O',['ap','jalview.appletgui.AlignmentPanel']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this);
this.setLayout$java_awt_LayoutManager(null);
this.ap=ap;
this.setBackground$java_awt_Color($I$(1).WHITE);
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
this.oldX=evt.getX$();
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
this.active=false;
this.repaint$();
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
this.active=true;
this.setCursor$java_awt_Cursor($I$(2).getPredefinedCursor$I(10));
this.repaint$();
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
this.active=false;
this.setCursor$java_awt_Cursor($I$(2).getPredefinedCursor$I(0));
this.repaint$();
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
this.active=true;
var d=this.ap.idPanel.idCanvas.getSize$();
var dif=evt.getX$() - this.oldX;
var newWidth=d.width + dif;
if (newWidth > 20 || dif > 0 ) {
this.ap.setIdWidth$I$I(newWidth, d.height);
this.setSize$I$I(newWidth, this.getSize$().height);
this.oldX=evt.getX$();
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:45 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
