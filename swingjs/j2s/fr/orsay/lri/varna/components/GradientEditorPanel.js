(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),p$1={},I$=[[0,'java.awt.Color','java.awt.RenderingHints','javax.swing.JColorChooser','fr.orsay.lri.varna.models.rna.ModeleColorMap','java.awt.Cursor']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GradientEditorPanel", null, 'javax.swing.JPanel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._mcm=null;
this.EDGES=null;
this.BUTTONS=null;
this._selectedIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.EDGES=$I$(1).gray.brighter$();
this.BUTTONS=$I$(1).LIGHT_GRAY.brighter$();
this._selectedIndex=-1;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_ModeleColorMap', function (mcm) {
Clazz.super_(C$, this,1);
this._mcm=mcm;
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
}, 1);

Clazz.newMeth(C$, 'setColorMap$fr_orsay_lri_varna_models_rna_ModeleColorMap', function (mcm) {
this._mcm=mcm;
this.repaint$();
this.firePropertyChange$S$O$O("PaletteChanged", "a", "b");
});

Clazz.newMeth(C$, 'getColorMap$', function () {
return this._mcm;
});

Clazz.newMeth(C$, 'getStartChoose$', function () {
return this.getHeight$() - 11 - 11 - 4 - 1 ;
});

Clazz.newMeth(C$, 'getEndChoose$', function () {
return this.getStartChoose$() + 11;
});

Clazz.newMeth(C$, 'getStartRemove$', function () {
return this.getEndChoose$() + 4;
});

Clazz.newMeth(C$, 'getEndRemove$', function () {
return this.getStartRemove$() + 11;
});

Clazz.newMeth(C$, 'getStripeHeight', function () {
return this.getHeight$() - 11 - 11 - 8  - 1;
}, p$1);

Clazz.newMeth(C$, 'alterColor$java_awt_Color$I', function (c, inc) {
var nr=Math.min(Math.max(c.getRed$() + inc, 0), 255);
var ng=Math.min(Math.max(c.getGreen$() + inc, 0), 255);
var nb=Math.min(Math.max(c.getBlue$() + inc, 0), 255);
return Clazz.new_($I$(1).c$$I$I$I,[nr, ng, nb]);
}, p$1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
var g2d=g;
g2d.setRenderingHint$java_awt_RenderingHints_Key$O($I$(2).KEY_ANTIALIASING, $I$(2).VALUE_ANTIALIAS_ON);
var height=p$1.getStripeHeight.apply(this, []);
var v1=this._mcm.getMinValue$();
var v2=this._mcm.getMaxValue$();
for (var i=0; i <= this.getWidth$(); i++) {
var ratio=((i) / (this.getWidth$()));
var val=v1 + (v2 - v1) * ratio;
g2d.setColor$java_awt_Color(this._mcm.getColorForValue$D(val));
g2d.drawLine$I$I$I$I(i, 0, i, height);
}
for (var i=0; i < this._mcm.getNumColors$(); i++) {
var val=(this._mcm.getValueAt$I(i)).doubleValue$();
var c=this._mcm.getColorAt$I(i);
var norm=(val - this._mcm.getMinValue$()) / (this._mcm.getMaxValue$() - this._mcm.getMinValue$());
var x=((norm * (this.getWidth$() - 1))|0);
g2d.setColor$java_awt_Color(c);
g2d.fillRect$I$I$I$I(x - 2 + 1, 0, 3, this.getHeight$() - 1);
g2d.setColor$java_awt_Color(this.EDGES);
g2d.drawLine$I$I$I$I(x - 2, 0, x - 2, this.getHeight$());
g2d.drawLine$I$I$I$I(x + 2, 0, x + 2, this.getHeight$());
if (i == 0) {
g2d.setColor$java_awt_Color(this.EDGES);
g2d.drawRect$I$I$I$I(x, height + 4, 11, 26);
g2d.setColor$java_awt_Color(c);
g2d.fillRect$I$I$I$I(x + 1, height + 4 + 1 , 10, 25);
} else if (i == this._mcm.getNumColors$() - 1) {
g2d.setColor$java_awt_Color(this.EDGES);
g2d.drawRect$I$I$I$I(x - 11, height + 4, 11, 26);
g2d.setColor$java_awt_Color(c);
g2d.fillRect$I$I$I$I(x - 11 + 1, height + 4 + 1 , 10, 25);
} else {
g2d.setColor$java_awt_Color(this.EDGES);
g2d.drawRect$I$I$I$I(x - 5, height + 4, 11, 11);
g2d.setColor$java_awt_Color(p$1.alterColor$java_awt_Color$I.apply(this, [c, -15]));
g2d.fillRect$I$I$I$I(x - 5 + 1, height + 4 + 1 , 10, 10);
g2d.setColor$java_awt_Color(c);
g2d.fillOval$I$I$I$I(x - 5 + 1, height + 4 + 1 , 10, 10);
g2d.setColor$java_awt_Color(p$1.alterColor$java_awt_Color$I.apply(this, [c, 10]));
g2d.fillOval$I$I$I$I(x - 5 + 1 + 2, height + 4 + 1 + 2 , 6, 6);
g2d.setColor$java_awt_Color(this.EDGES);
g2d.drawRect$I$I$I$I(x - 5, height + 8 + 11, 11, 11);
g2d.setColor$java_awt_Color(this.BUTTONS);
g2d.fillRect$I$I$I$I(x - 5 + 1, height + 8 + 1 + 11, 10, 10);
var xcross1=x - 5 + 2;
var ycross1=height + 8 + 11 + 2;
var xcross2=xcross1 + 11 - 4;
var ycross2=ycross1 + 11 - 4;
g2d.setColor$java_awt_Color($I$(1).red);
g2d.drawLine$I$I$I$I(xcross1, ycross1, xcross2, ycross2);
g2d.drawLine$I$I$I$I(xcross1, ycross2, xcross2, ycross1);
}}
});

Clazz.newMeth(C$, 'isChooseColor$I$I', function (x, y) {
if (this._selectedIndex != -1) {
if ((this._selectedIndex == 0) || (this._selectedIndex == this._mcm.getNumColors$() - 1) ) return (y <= this.getEndRemove$() && y >= this.getStartChoose$()  && Math.abs(p$1.getXPos$I.apply(this, [this._selectedIndex]) - x) <= 11 );
if (y <= this.getEndChoose$() && y >= this.getStartChoose$() ) {
return Math.abs(p$1.getXPos$I.apply(this, [this._selectedIndex]) - x) <= 5;
}}return false;
}, p$1);

Clazz.newMeth(C$, 'isRemove$I$I', function (x, y) {
if (this._selectedIndex != -1) {
if ((this._selectedIndex == 0) || (this._selectedIndex == this._mcm.getNumColors$() - 1) ) return false;
if (y <= this.getEndRemove$() && y >= this.getStartRemove$() ) {
return Math.abs(p$1.getXPos$I.apply(this, [this._selectedIndex]) - x) <= 5;
}}return false;
}, p$1);

Clazz.newMeth(C$, 'getXPos$I', function (i) {
var val=(this._mcm.getValueAt$I(i)).doubleValue$();
var norm=(val - this._mcm.getMinValue$()) / (this._mcm.getMaxValue$() - this._mcm.getMinValue$());
return ((norm * (this.getWidth$() - 1))|0);
}, p$1);

Clazz.newMeth(C$, 'locateSelectedIndex$I$I', function (x, y) {
var dist=1.7976931348623157E308;
var index=-1;
for (var i=0; i < this._mcm.getNumColors$(); i++) {
var xp=p$1.getXPos$I.apply(this, [i]);
var tmpDist=Math.abs(x - xp);
if (tmpDist < dist ) {
index=i;
dist=tmpDist;
}}
return index;
}, p$1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (arg0) {
this._selectedIndex=p$1.locateSelectedIndex$I$I.apply(this, [arg0.getX$(), arg0.getY$()]);
if (this._selectedIndex != -1) {
if (p$1.isRemove$I$I.apply(this, [arg0.getX$(), arg0.getY$()])) {
p$1.removeEntry$I.apply(this, [this._selectedIndex]);
} else if (Math.abs(p$1.getXPos$I.apply(this, [this._selectedIndex]) - arg0.getX$()) > 5) {
var val=this._mcm.getMinValue$() + arg0.getX$() * (this._mcm.getMaxValue$() - this._mcm.getMinValue$()) / (this.getWidth$() - 1);
var nc=$I$(3).showDialog$java_awt_Component$S$java_awt_Color(this, "Choose new color", this._mcm.getColorAt$I(this._selectedIndex));
if (nc != null ) {
this._mcm.addColor$D$java_awt_Color(val, nc);
this.repaint$();
this.firePropertyChange$S$O$O("PaletteChanged", "a", "b");
}}}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (arg0) {
this.requestFocus$();
this._selectedIndex=p$1.locateSelectedIndex$I$I.apply(this, [arg0.getX$(), arg0.getY$()]);
if (this._selectedIndex != -1) {
if (p$1.isChooseColor$I$I.apply(this, [arg0.getX$(), arg0.getY$()])) {
var nc=$I$(3).showDialog$java_awt_Component$S$java_awt_Color(this, "Choose new color", this._mcm.getColorAt$I(this._selectedIndex));
if (nc != null ) {
var nv=(this._mcm.getValueAt$I(this._selectedIndex)).doubleValue$();
p$1.replaceEntry$I$java_awt_Color$D.apply(this, [this._selectedIndex, nc, nv]);
this._selectedIndex=-1;
}}}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (arg0) {
this._selectedIndex=-1;
});

Clazz.newMeth(C$, 'replaceEntry$I$java_awt_Color$D', function (index, nc, nv) {
var cm=Clazz.new_($I$(4));
for (var i=0; i < this._mcm.getNumColors$(); i++) {
if (i != index) {
var val=(this._mcm.getValueAt$I(i)).doubleValue$();
var c=this._mcm.getColorAt$I(i);
cm.addColor$D$java_awt_Color(val, c);
} else {
cm.addColor$D$java_awt_Color(nv, nc);
}}
this._mcm=cm;
this.repaint$();
this.firePropertyChange$S$O$O("PaletteChanged", "a", "b");
}, p$1);

Clazz.newMeth(C$, 'removeEntry$I', function (index) {
var cm=Clazz.new_($I$(4));
for (var i=0; i < this._mcm.getNumColors$(); i++) {
if (i != index) {
var val=(this._mcm.getValueAt$I(i)).doubleValue$();
var c=this._mcm.getColorAt$I(i);
cm.addColor$D$java_awt_Color(val, c);
}}
this._mcm=cm;
this.repaint$();
this.firePropertyChange$S$O$O("PaletteChanged", "a", "b");
}, p$1);

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (arg0) {
if ((this._selectedIndex != -1) && (this._selectedIndex != 0) && (this._selectedIndex != this._mcm.getNumColors$() - 1)  ) {
var c=this._mcm.getColorAt$I(this._selectedIndex);
var val=this._mcm.getMinValue$() + arg0.getX$() * (this._mcm.getMaxValue$() - this._mcm.getMinValue$()) / (this.getWidth$() - 1);
p$1.replaceEntry$I$java_awt_Color$D.apply(this, [this._selectedIndex, c, val]);
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (arg0) {
var c=$I$(5).getPredefinedCursor$I(0);
this._selectedIndex=p$1.locateSelectedIndex$I$I.apply(this, [arg0.getX$(), arg0.getY$()]);
if (this._selectedIndex != -1) {
if (p$1.isChooseColor$I$I.apply(this, [arg0.getX$(), arg0.getY$()])) {
c=$I$(5).getPredefinedCursor$I(12);
} else if ((this._selectedIndex != 0) && (this._selectedIndex != this._mcm.getNumColors$() - 1) ) {
if (p$1.isRemove$I$I.apply(this, [arg0.getX$(), arg0.getY$()])) {
c=$I$(5).getPredefinedCursor$I(12);
} else if (Math.abs(p$1.getXPos$I.apply(this, [this._selectedIndex]) - arg0.getX$()) <= 5) {
c=$I$(5).getPredefinedCursor$I(11);
} else if (arg0.getY$() < this.getHeight$() - p$1.getStripeHeight.apply(this, [])) {
c=$I$(5).getPredefinedCursor$I(12);
} else {
$I$(5).getPredefinedCursor$I(0);
}}}this.setCursor$java_awt_Cursor(c);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
