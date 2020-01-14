(function(){var P$=Clazz.newPackage("gnu.jpdf"),p$1={},p$2={},I$=[[0,'javax.swing.JPanel','java.io.File','java.io.FileOutputStream','java.awt.event.WindowAdapter','java.awt.BorderLayout','gnu.jpdf.TestMenuBar','gnu.jpdf.PDFJob','gnu.jpdf.TestPanel','javax.swing.JScrollPane','java.awt.Dimension','java.awt.Toolkit','javax.swing.JOptionPane','gnu.jpdf.HelpFrame','java.awt.JobAttributes','java.awt.Color','java.awt.Point','java.awt.Font','gnu.jpdf.BoundingBox','java.awt.MediaTracker','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.KeyStroke','javax.swing.JTextArea','StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TestPanel", null, 'javax.swing.JPanel', 'javax.swing.Scrollable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.image=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPreferredScrollableViewportSize$', function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$, 'getScrollableBlockIncrement$java_awt_Rectangle$I$I', function (visibleRect, orientation, direction) {
return 20;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportHeight$', function () {
return false;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$', function () {
return false;
});

Clazz.newMeth(C$, 'getScrollableUnitIncrement$java_awt_Rectangle$I$I', function (visibleRect, orientation, direction) {
return 5;
});

Clazz.newMeth(C$, 'setImage$java_awt_Image', function (img) {
this.image=img;
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
g.setColor$java_awt_Color($I$(15).gray);
g.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
if (this.image != null ) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, this);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
