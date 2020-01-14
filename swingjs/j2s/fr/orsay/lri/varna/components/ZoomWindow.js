(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),I$=[[0,'java.awt.image.BufferedImage','java.awt.RenderingHints','fr.orsay.lri.varna.models.export.SwingGraphics',['java.awt.geom.Rectangle2D','.Double'],['java.awt.geom.Point2D','.Double'],'java.awt.Color','java.awt.BasicStroke','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ZoomWindow", null, 'javax.swing.JPanel', ['java.awt.image.ImageObserver', 'Runnable', 'java.awt.event.MouseMotionListener', 'java.awt.event.MouseListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this._bi=null;
this.rnaRect=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._vp=null;
this._bi=null;
this.rnaRect=null;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
Clazz.super_(C$, this,1);
this._vp=vp;
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.addMouseListener$java_awt_event_MouseListener(this);
}, 1);

Clazz.newMeth(C$, 'setPanel$fr_orsay_lri_varna_VARNAPanel', function (vp) {
this._vp=vp;
});

Clazz.newMeth(C$, 'drawPanel$', function () {
if (this.getWidth$() > 0 && this.getHeight$() > 0 ) {
this._bi=Clazz.new_($I$(1).c$$I$I$I,[this.getWidth$(), this.getHeight$(), 6]);
var g2=this._bi.createGraphics$();
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(2).KEY_ANTIALIASING, $I$(2).VALUE_ANTIALIAS_ON);
var g2D=Clazz.new_($I$(3).c$$java_awt_Graphics2D,[g2]);
this.rnaRect=this._vp.renderRNA$fr_orsay_lri_varna_models_export_VueVARNAGraphics$java_awt_geom_Rectangle2D_Double$Z$Z(g2D, Clazz.new_($I$(4).c$$D$D$D$D,[0, 0, this.getWidth$(), this.getHeight$()]), false, true);
var p1=this._vp.panelToLogicPoint$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[0.0, 0.0]));
var p2=this._vp.panelToLogicPoint$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[this._vp.getWidth$(), this._vp.getHeight$()]));
var w=p2.x - p1.x;
var h=p2.y - p1.y;
var rnaBox=this._vp.getRNA$().getBBox$();
var ratiox=w / rnaBox.width;
var ratioy=h / rnaBox.height;
var rvisible=Clazz.new_($I$(4).c$$D$D$D$D,[this.rnaRect.x + this.rnaRect.width * (p1.x - rnaBox.x) / rnaBox.width, this.rnaRect.y + this.rnaRect.height * (p1.y - rnaBox.y) / rnaBox.height, ratiox * this.rnaRect.width, ratioy * this.rnaRect.height]);
var shade=Clazz.new_($I$(6).c$$F$F$F$F,[0.9, 0.9, 0.9, 0.4]);
g2.setStroke$java_awt_Stroke(Clazz.new_($I$(7).c$$F,[1.0]));
g2.setColor$java_awt_Color(shade);
g2.fillRect$I$I$I$I(0, 0, this.getWidth$(), (rvisible.y|0));
g2.fillRect$I$I$I$I(0, (rvisible.y|0), (rvisible.x|0), (rvisible.height|0) + 1);
g2.fillRect$I$I$I$I(((rvisible.x + rvisible.width)|0), (rvisible.y|0), ((this.getHeight$() - (rvisible.x + rvisible.width))|0), ((rvisible.height + 1)|0));
g2.fillRect$I$I$I$I(0, ((rvisible.y + rvisible.height)|0), this.getWidth$(), ((this.getHeight$() - (rvisible.y + rvisible.height))|0));
g2.setColor$java_awt_Color(Clazz.new_($I$(6).c$$F$F$F$F,[0.7, 0.7, 0.7, 0.3]));
g2.draw$java_awt_Shape(rvisible);
g2.drawLine$I$I$I$I(0, 0, (rvisible.x|0), (rvisible.y|0));
g2D.drawLine$D$D$D$D(this.getWidth$(), 0, rvisible.x + rvisible.width, rvisible.y);
g2D.drawLine$D$D$D$D(this.getWidth$(), this.getHeight$(), rvisible.x + rvisible.width, rvisible.y + rvisible.height);
g2D.drawLine$D$D$D$D(0, this.getHeight$(), rvisible.x, rvisible.y + rvisible.height);
g2.dispose$();
}});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
this.setBackground$java_awt_Color(this._vp.getBackground$());
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
this.drawPanel$();
if (this._bi != null ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this._bi, 0, 0, this);
}});

Clazz.newMeth(C$, 'run$', function () {
while (true){
this.repaint$();
try {
$I$(8).sleep$J(500);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
e.printStackTrace$();
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
