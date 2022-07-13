(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'jalview.datamodel.Point','jalview.appletgui.PaintRefresher','java.awt.Dimension','java.awt.Font','jalview.util.MessageManager','java.awt.Color','jalview.datamodel.SequenceGroup','jalview.math.RotatableMatrix',['jalview.math.RotatableMatrix','.Axis']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RotatableCanvas", null, 'java.awt.Panel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.KeyListener', 'jalview.api.RotatableCanvasI']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.drawAxes=true;
this.mouseX=0;
this.mouseY=0;
this.$width=Clazz.array(Float.TYPE, [3]);
this.max=Clazz.array(Float.TYPE, [3]);
this.min=Clazz.array(Float.TYPE, [3]);
this.scalefactor=1;
this.showLabels=false;
},1);

C$.$fields$=[['Z',['drawAxes','showLabels'],'F',['maxwidth','scale','scalefactor'],'I',['toolx','tooly','mouseX','mouseY','npoint','startx','starty','lastx','lasty','rectx1','recty1','rectx2','recty2'],'S',['tooltip'],'O',['img','java.awt.Image','ig','java.awt.Graphics','prefsize','java.awt.Dimension','centre','jalview.datamodel.Point','$width','float[]','+max','+min','points','java.util.List','orig','jalview.datamodel.Point[]','+axisEndPoints','av','jalview.viewmodel.AlignmentViewport']]]

Clazz.newMeth(C$, 'c$$jalview_viewmodel_AlignmentViewport',  function (viewport) {
Clazz.super_(C$, this);
this.av=viewport;
this.axisEndPoints=Clazz.array($I$(1), [3]);
}, 1);

Clazz.newMeth(C$, 'showLabels$Z',  function (b) {
this.showLabels=b;
this.repaint$();
});

Clazz.newMeth(C$, 'setPoints$java_util_List$I',  function (points, npoint) {
this.points=points;
this.npoint=npoint;
$I$(2,"Register$java_awt_Component$S",[this, this.av.getSequenceSetId$()]);
this.prefsize=this.getPreferredSize$();
this.orig=Clazz.array($I$(1), [npoint]);
for (var i=0; i < npoint; i++) {
var sp=points.get$I(i);
this.orig[i]=sp.coord;
}
this.resetAxes$();
this.findCentre$();
this.findWidth$();
this.scale=this.findScale$();
this.addMouseListener$java_awt_event_MouseListener(this);
this.addKeyListener$java_awt_event_KeyListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
});

Clazz.newMeth(C$, 'resetAxes$',  function () {
this.axisEndPoints[0]=Clazz.new_($I$(1,1).c$$F$F$F,[1.0, 0.0, 0.0]);
this.axisEndPoints[1]=Clazz.new_($I$(1,1).c$$F$F$F,[0.0, 1.0, 0.0]);
this.axisEndPoints[2]=Clazz.new_($I$(1,1).c$$F$F$F,[0.0, 0.0, 1.0]);
});

Clazz.newMeth(C$, 'findWidth$',  function () {
this.max=Clazz.array(Float.TYPE, [3]);
this.min=Clazz.array(Float.TYPE, [3]);
this.max[0]=1.4E-45;
this.max[1]=1.4E-45;
this.max[2]=1.4E-45;
this.min[0]=3.4028235E38;
this.min[1]=3.4028235E38;
this.min[2]=3.4028235E38;
for (var sp, $sp = this.points.iterator$(); $sp.hasNext$()&&((sp=($sp.next$())),1);) {
this.max[0]=Math.max(this.max[0], sp.coord.x);
this.max[1]=Math.max(this.max[1], sp.coord.y);
this.max[2]=Math.max(this.max[2], sp.coord.z);
this.min[0]=Math.min(this.min[0], sp.coord.x);
this.min[1]=Math.min(this.min[1], sp.coord.y);
this.min[2]=Math.min(this.min[2], sp.coord.z);
}
this.$width[0]=Math.abs(this.max[0] - this.min[0]);
this.$width[1]=Math.abs(this.max[1] - this.min[1]);
this.$width[2]=Math.abs(this.max[2] - this.min[2]);
this.maxwidth=Math.max(this.$width[0], Math.max(this.$width[1], this.$width[2]));
});

Clazz.newMeth(C$, 'findScale$',  function () {
var dim;
var w;
var height;
if (this.getSize$().width != 0) {
w=this.getSize$().width;
height=this.getSize$().height;
} else {
w=this.prefsize.width;
height=this.prefsize.height;
}if (w < height) {
dim=w;
} else {
dim=height;
}return dim * this.scalefactor / (2 * this.maxwidth);
});

Clazz.newMeth(C$, 'findCentre$',  function () {
this.findWidth$();
var x=(this.max[0] + this.min[0]) / 2;
var y=(this.max[1] + this.min[1]) / 2;
var z=(this.max[2] + this.min[2]) / 2;
this.centre=Clazz.new_($I$(1,1).c$$F$F$F,[x, y, z]);
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
if (this.prefsize != null ) {
return this.prefsize;
} else {
return Clazz.new_($I$(3,1).c$$I$I,[400, 400]);
}});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (this.points == null ) {
g.setFont$java_awt_Font(Clazz.new_($I$(4,1).c$$S$I$I,["Verdana", 0, 18]));
g.drawString$S$I$I($I$(5).getString$S("label.calculating_pca") + "....", 20, (this.getSize$().height/2|0));
} else {
if ((this.img == null ) || (this.prefsize.width != this.getSize$().width) || (this.prefsize.height != this.getSize$().height)  ) {
this.prefsize.width=this.getSize$().width;
this.prefsize.height=this.getSize$().height;
this.scale=this.findScale$();
this.img=this.createImage$I$I(this.getSize$().width, this.getSize$().height);
this.ig=this.img.getGraphics$();
}this.drawBackground$java_awt_Graphics$java_awt_Color(this.ig, $I$(6).black);
this.drawScene$java_awt_Graphics(this.ig);
if (this.drawAxes) {
this.drawAxes$java_awt_Graphics(this.ig);
}if (this.tooltip != null ) {
this.ig.setColor$java_awt_Color($I$(6).red);
this.ig.drawString$S$I$I(this.tooltip, this.toolx, this.tooly);
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.img, 0, 0, this);
}});

Clazz.newMeth(C$, 'drawAxes$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color($I$(6).yellow);
for (var i=0; i < 3; i++) {
g.drawLine$I$I$I$I((this.getSize$().width/2|0), (this.getSize$().height/2|0), ((this.axisEndPoints[i].x * this.scale * this.max[0]  + (this.getSize$().width/2|0))|0), ((this.axisEndPoints[i].y * this.scale * this.max[1]  + (this.getSize$().height/2|0))|0));
}
});

Clazz.newMeth(C$, 'drawBackground$java_awt_Graphics$java_awt_Color',  function (g, col) {
g.setColor$java_awt_Color(col);
g.fillRect$I$I$I$I(0, 0, this.prefsize.width, this.prefsize.height);
});

Clazz.newMeth(C$, 'drawScene$java_awt_Graphics',  function (g) {
for (var i=0; i < this.npoint; i++) {
var sp=this.points.get$I(i);
var sequence=sp.getSequence$();
var sequenceColour=this.av.getSequenceColour$jalview_datamodel_SequenceI(sequence);
g.setColor$java_awt_Color(sequenceColour === $I$(6).black  ? $I$(6).white : sequenceColour);
if (this.av.getSelectionGroup$() != null ) {
if (this.av.getSelectionGroup$().getSequences$java_util_Map(null).contains$O(sequence)) {
g.setColor$java_awt_Color($I$(6).gray);
}}if (sp.coord.z < this.centre.z ) {
g.setColor$java_awt_Color(g.getColor$().darker$());
}var halfwidth=(this.getSize$().width/2|0);
var halfheight=(this.getSize$().height/2|0);
var x=(((sp.coord.x - this.centre.x) * this.scale)|0) + halfwidth;
var y=(((sp.coord.y - this.centre.y) * this.scale)|0) + halfheight;
g.fillRect$I$I$I$I(x - 3, y - 3, 6, 6);
if (this.showLabels) {
g.setColor$java_awt_Color($I$(6).red);
g.drawString$S$I$I(sequence.getName$(), x - 3, y - 4);
}}
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (evt) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (evt) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (evt) {
var shiftDown=evt.isShiftDown$();
var keyCode=evt.getKeyCode$();
if (keyCode == 38) {
if (shiftDown) {
this.rotate$F$F(0.0, -1.0);
} else {
this.zoom$F(1.1);
}} else if (keyCode == 40) {
if (shiftDown) {
this.rotate$F$F(0.0, 1.0);
} else {
this.zoom$F(0.9);
}} else if (shiftDown && keyCode == 37 ) {
this.rotate$F$F(1.0, 0.0);
} else if (shiftDown && keyCode == 39 ) {
this.rotate$F$F(-1.0, 0.0);
} else if (evt.getKeyChar$() == "s") {
System.err.println$S("DEBUG: Rectangle selection");
if (this.rectx2 != -1 && this.recty2 != -1 ) {
this.rectSelect$I$I$I$I(this.rectx1, this.recty1, this.rectx2, this.recty2);
}}this.repaint$();
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
var x=evt.getX$();
var y=evt.getY$();
this.mouseX=x;
this.mouseY=y;
this.startx=x;
this.starty=y;
this.rectx1=x;
this.recty1=y;
this.rectx2=-1;
this.recty2=-1;
var found=this.findSequenceAtPoint$I$I(x, y);
if (found != null ) {
if (this.av.getSelectionGroup$() != null ) {
this.av.getSelectionGroup$().addOrRemove$jalview_datamodel_SequenceI$Z(found, true);
this.av.getSelectionGroup$().setEndRes$I(this.av.getAlignment$().getWidth$() - 1);
} else {
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(Clazz.new_($I$(7,1)));
this.av.getSelectionGroup$().addOrRemove$jalview_datamodel_SequenceI$Z(found, true);
this.av.getSelectionGroup$().setEndRes$I(this.av.getAlignment$().getWidth$() - 1);
}$I$(2,"Refresh$java_awt_Component$S",[this, this.av.getSequenceSetId$()]);
this.av.sendSelection$();
}this.repaint$();
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (evt) {
var found=this.findSequenceAtPoint$I$I(evt.getX$(), evt.getY$());
if (found == null ) {
this.tooltip=null;
} else {
this.tooltip=found.getName$();
this.toolx=evt.getX$();
this.tooly=evt.getY$();
}this.repaint$();
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (evt) {
var xPos=evt.getX$();
var yPos=evt.getY$();
if (xPos == this.mouseX && yPos == this.mouseY ) {
return;
}var xDelta=xPos - this.mouseX;
var yDelta=yPos - this.mouseY;
this.rotate$F$F(xDelta, yDelta);
this.repaint$();
});

Clazz.newMeth(C$, 'rectSelect$I$I$I$I',  function (x1, y1, x2, y2) {
for (var i=0; i < this.npoint; i++) {
var sp=this.points.get$I(i);
var tmp1=(((sp.coord.x - this.centre.x) * this.scale + this.getSize$().width / 2.0)|0);
var tmp2=(((sp.coord.y - this.centre.y) * this.scale + this.getSize$().height / 2.0)|0);
var sequence=sp.getSequence$();
if (tmp1 > x1 && tmp1 < x2  && tmp2 > y1  && tmp2 < y2 ) {
if (this.av != null ) {
if (!this.av.getSelectionGroup$().getSequences$java_util_Map(null).contains$O(sequence)) {
this.av.getSelectionGroup$().addSequence$jalview_datamodel_SequenceI$Z(sequence, true);
}}}}
});

Clazz.newMeth(C$, 'findSequenceAtPoint$I$I',  function (x, y) {
var halfwidth=(this.getSize$().width/2|0);
var halfheight=(this.getSize$().height/2|0);
var found=-1;
for (var i=0; i < this.npoint; i++) {
var sp=this.points.get$I(i);
var px=(((sp.coord.x - this.centre.x) * this.scale)|0) + halfwidth;
var py=(((sp.coord.y - this.centre.y) * this.scale)|0) + halfheight;
if (Math.abs(px - x) < 3 && Math.abs(py - y) < 3 ) {
found=i;
break;
}}
if (found != -1) {
return this.points.get$I(found).getSequence$();
} else {
return null;
}});

Clazz.newMeth(C$, 'resetView$',  function () {
this.img=null;
this.resetAxes$();
});

Clazz.newMeth(C$, 'zoom$F',  function (factor) {
if (factor > 0.0 ) {
this.scalefactor*=factor;
}this.scale=this.findScale$();
});

Clazz.newMeth(C$, 'rotate$F$F',  function (x, y) {
if (x == 0.0  && y == 0.0  ) {
return;
}var rotmat=Clazz.new_($I$(8,1));
if (y != 0 ) {
rotmat.rotate$F$jalview_math_RotatableMatrix_Axis(y, $I$(9).X);
}if (x != 0 ) {
rotmat.rotate$F$jalview_math_RotatableMatrix_Axis(x, $I$(9).Y);
}for (var i=0; i < this.npoint; i++) {
var sp=this.points.get$I(i);
sp.translate$F$F$F(-this.centre.x, -this.centre.y, -this.centre.z);
sp.coord=rotmat.vectorMultiply$jalview_datamodel_Point(sp.coord);
sp.translate$F$F$F(this.centre.x, this.centre.y, this.centre.z);
}
for (var i=0; i < 3; i++) {
this.axisEndPoints[i]=rotmat.vectorMultiply$jalview_datamodel_Point(this.axisEndPoints[i]);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:28 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
