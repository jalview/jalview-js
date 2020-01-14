(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.Arrays','java.awt.Color','jalview.datamodel.Point','javax.swing.ToolTipManager','java.awt.Dimension','java.awt.RenderingHints','java.awt.Font','jalview.util.MessageManager','jalview.util.ColorUtils','jalview.datamodel.SequenceGroup','jalview.gui.PaintRefresher','jalview.math.RotatableMatrix',['jalview.math.RotatableMatrix','.Axis'],'jalview.gui.AlignmentPanel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RotatableCanvas", null, 'javax.swing.JPanel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.KeyListener', 'jalview.api.RotatableCanvasI', 'java.awt.event.MouseWheelListener']);
C$.AXES=null;
C$.AXIS_COLOUR=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.AXES=$I$(1).asList$TTA(["x", "y", "z"]);
C$.AXIS_COLOUR=$I$(2).yellow;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.drawAxes=false;
this.mouseX=0;
this.mouseY=0;
this.img=null;
this.ig=null;
this.$prefSize=null;
this.seqMin=null;
this.seqMax=null;
this.scaleFactor=0;
this.npoint=0;
this.sequencePoints=null;
this.axisEndPoints=null;
this.av=null;
this.ap=null;
this.showLabels=false;
this.bgColour=null;
this.applyToAllViews=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.drawAxes=true;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (panel) {
Clazz.super_(C$, this,1);
this.av=panel.av;
this.ap=panel;
this.setAxisEndPoints$jalview_datamodel_PointA(Clazz.array($I$(3), [3]));
this.setShowLabels$Z(false);
this.setApplyToAllViews$Z(false);
this.setBgColour$java_awt_Color($I$(2).BLACK);
this.resetAxes$();
$I$(4).sharedInstance$().registerComponent$javax_swing_JComponent(this);
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.addMouseWheelListener$java_awt_event_MouseWheelListener(this);
}, 1);

Clazz.newMeth(C$, 'showLabels$Z', function (show) {
this.setShowLabels$Z(show);
this.repaint$();
});

Clazz.newMeth(C$, 'setPoints$java_util_List$I', function (points, np) {
this.sequencePoints=points;
this.npoint=np;
this.$prefSize=this.getPreferredSize$();
this.findWidths$();
this.setScaleFactor$F(1.0);
});

Clazz.newMeth(C$, 'resetAxes$', function () {
this.getAxisEndPoints$()[0]=Clazz.new_($I$(3).c$$F$F$F,[1.0, 0.0, 0.0]);
this.getAxisEndPoints$()[1]=Clazz.new_($I$(3).c$$F$F$F,[0.0, 1.0, 0.0]);
this.getAxisEndPoints$()[2]=Clazz.new_($I$(3).c$$F$F$F,[0.0, 0.0, 1.0]);
});

Clazz.newMeth(C$, 'findWidths$', function () {
var max=Clazz.array(Float.TYPE, [3]);
var min=Clazz.array(Float.TYPE, [3]);
max[0]=-3.4028235E38;
max[1]=-3.4028235E38;
max[2]=-3.4028235E38;
min[0]=3.4028235E38;
min[1]=3.4028235E38;
min[2]=3.4028235E38;
for (var sp, $sp = this.sequencePoints.iterator$(); $sp.hasNext$()&&((sp=($sp.next$())),1);) {
max[0]=Math.max(max[0], sp.coord.x);
max[1]=Math.max(max[1], sp.coord.y);
max[2]=Math.max(max[2], sp.coord.z);
min[0]=Math.min(min[0], sp.coord.x);
min[1]=Math.min(min[1], sp.coord.y);
min[2]=Math.min(min[2], sp.coord.z);
}
this.seqMin=min;
this.seqMax=max;
});

Clazz.newMeth(C$, 'getPreferredSize$', function () {
if (this.$prefSize != null ) {
return this.$prefSize;
} else {
return Clazz.new_($I$(5).c$$I$I,[400, 400]);
}});

Clazz.newMeth(C$, 'getMinimumSize$', function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g1) {
var g=g1;
g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(6).KEY_ANTIALIASING, $I$(6).VALUE_ANTIALIAS_ON);
if (this.sequencePoints == null ) {
g.setFont$java_awt_Font(Clazz.new_($I$(7).c$$S$I$I,["Verdana", 0, 18]));
g.drawString$S$I$I($I$(8).getString$S("label.calculating_pca") + "....", 20, (this.getHeight$()/2|0));
} else {
var resized=this.$prefSize.width != this.getWidth$() || this.$prefSize.height != this.getHeight$() ;
if (this.img == null  || resized ) {
this.$prefSize.width=this.getWidth$();
this.$prefSize.height=this.getHeight$();
this.img=this.createImage$I$I(this.getWidth$(), this.getHeight$());
this.ig=this.img.getGraphics$();
}this.drawBackground$java_awt_Graphics(this.ig);
this.drawScene$java_awt_Graphics(this.ig);
if (this.drawAxes) {
this.drawAxes$java_awt_Graphics(this.ig);
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.img, 0, 0, this);
}});

Clazz.newMeth(C$, 'resetView$', function () {
this.img=null;
this.findWidths$();
this.resetAxes$();
this.repaint$();
});

Clazz.newMeth(C$, 'drawAxes$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color(C$.AXIS_COLOUR);
var midX=(this.getWidth$()/2|0);
var midY=(this.getHeight$()/2|0);
var maxWidth=Math.max(Math.abs(this.seqMax[0] - this.seqMin[0]), Math.abs(this.seqMax[1] - this.seqMin[1]));
var pix=Math.min(this.getWidth$(), this.getHeight$());
var scaleBy=pix * this.getScaleFactor$() / (2.0 * maxWidth);
for (var i=0; i < 3; i++) {
g.drawLine$I$I$I$I(midX, midY, midX + ((this.getAxisEndPoints$()[i].x * scaleBy * this.seqMax[0] )|0), midY + ((this.getAxisEndPoints$()[i].y * scaleBy * this.seqMax[1] )|0));
}
});

Clazz.newMeth(C$, 'drawBackground$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color(this.getBgColour$());
g.fillRect$I$I$I$I(0, 0, this.$prefSize.width, this.$prefSize.height);
});

Clazz.newMeth(C$, 'drawScene$java_awt_Graphics', function (g1) {
var g=g1;
g.setRenderingHint$java_awt_RenderingHints_Key$O($I$(6).KEY_ANTIALIASING, $I$(6).VALUE_ANTIALIAS_ON);
var pix=Math.min(this.getWidth$(), this.getHeight$());
var xWidth=Math.abs(this.seqMax[0] - this.seqMin[0]);
var yWidth=Math.abs(this.seqMax[1] - this.seqMin[1]);
var maxWidth=Math.max(xWidth, yWidth);
var scaleBy=pix * this.getScaleFactor$() / (2.0 * maxWidth);
var centre=p$1.getCentre.apply(this, []);
for (var i=0; i < this.npoint; i++) {
var sp=this.sequencePoints.get$I(i);
var sequenceColour=this.getSequencePointColour$jalview_datamodel_SequencePoint(sp);
g.setColor$java_awt_Color(sequenceColour);
var halfwidth=(this.getWidth$()/2|0);
var halfheight=(this.getHeight$()/2|0);
var x=(((sp.coord.x - centre[0]) * scaleBy)|0) + halfwidth;
var y=(((sp.coord.y - centre[1]) * scaleBy)|0) + halfheight;
g.fillRect$I$I$I$I(x - 3, y - 3, 6, 6);
if (this.isShowLabels$()) {
g.setColor$java_awt_Color($I$(2).red);
g.drawString$S$I$I(sp.getSequence$().getName$(), x - 3, y - 4);
}}
if (this.isShowLabels$()) {
g.setColor$java_awt_Color(C$.AXIS_COLOUR);
var midX=(this.getWidth$()/2|0);
var midY=(this.getHeight$()/2|0);
var axes=C$.AXES.iterator$();
for (var p, $p = 0, $$p = this.getAxisEndPoints$(); $p<$$p.length&&((p=($$p[$p])),1);$p++) {
var x=midX + ((p.x * scaleBy * this.seqMax[0] )|0);
var y=midY + ((p.y * scaleBy * this.seqMax[1] )|0);
g.drawString$S$I$I(axes.next$(), x - 3, y - 4);
}
}});

Clazz.newMeth(C$, 'getSequencePointColour$jalview_datamodel_SequencePoint', function (sp) {
var sequence=sp.getSequence$();
var sequenceColour=this.av.getSequenceColour$jalview_datamodel_SequenceI(sequence);
if (sequenceColour === $I$(2).black ) {
sequenceColour=$I$(2).white;
}if (this.av.getSelectionGroup$() != null ) {
if (this.av.getSelectionGroup$().getSequences$java_util_Map(null).contains$O(sequence)) {
sequenceColour=$I$(2).gray;
}}var zCentre=(this.seqMin[2] + this.seqMax[2]) / 2.0;
if (sp.coord.z > zCentre ) {
sequenceColour=$I$(9).getGraduatedColour$F$F$java_awt_Color$F$java_awt_Color(sp.coord.z, 0, sequenceColour, this.seqMax[2], sequenceColour.brighter$());
} else if (sp.coord.z < zCentre ) {
sequenceColour=$I$(9).getGraduatedColour$F$F$java_awt_Color$F$java_awt_Color(sp.coord.z, this.seqMin[2], sequenceColour.darker$(), 0, sequenceColour);
}return sequenceColour;
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (evt) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (evt) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
var keyCode=evt.getKeyCode$();
var shiftDown=evt.isShiftDown$();
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
}this.repaint$();
});

Clazz.newMeth(C$, 'zoom$F', function (factor) {
if (factor > 0.0 ) {
this.setScaleFactor$F(this.getScaleFactor$() * factor);
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
var x=evt.getX$();
var y=evt.getY$();
this.mouseX=x;
this.mouseY=y;
var found=this.findSequenceAtPoint$I$I(x, y);
if (found != null ) {
var aps=this.getAssociatedPanels$();
for (var a=0; a < aps.length; a++) {
if (aps[a].av.getSelectionGroup$() != null ) {
aps[a].av.getSelectionGroup$().addOrRemove$jalview_datamodel_SequenceI$Z(found, true);
} else {
aps[a].av.setSelectionGroup$jalview_datamodel_SequenceGroup(Clazz.new_($I$(10)));
aps[a].av.getSelectionGroup$().addOrRemove$jalview_datamodel_SequenceI$Z(found, true);
aps[a].av.getSelectionGroup$().setEndRes$I(aps[a].av.getAlignment$().getWidth$() - 1);
}}
$I$(11).Refresh$java_awt_Component$S(this, this.av.getSequenceSetId$());
this.av.sendSelection$();
}this.repaint$();
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
var found=this.findSequenceAtPoint$I$I(evt.getX$(), evt.getY$());
this.setToolTipText$S(found == null  ? null : found.getName$());
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
var xPos=evt.getX$();
var yPos=evt.getY$();
if (xPos == this.mouseX && yPos == this.mouseY ) {
return;
}var xDelta=xPos - this.mouseX;
var yDelta=yPos - this.mouseY;
if ((evt.getModifiers$() & 8) != 0) {
} else {
this.rotate$F$F(xDelta, yDelta);
this.mouseX=xPos;
this.mouseY=yPos;
this.repaint$();
}});

Clazz.newMeth(C$, 'rotate$F$F', function (x, y) {
if (x == 0.0  && y == 0.0  ) {
return;
}var rotmat=Clazz.new_($I$(12));
if (y != 0 ) {
rotmat.rotate$F$jalview_math_RotatableMatrix_Axis(y, $I$(13).X);
}if (x != 0 ) {
rotmat.rotate$F$jalview_math_RotatableMatrix_Axis(x, $I$(13).Y);
}var centre=p$1.getCentre.apply(this, []);
var zMin=3.4028235E38;
var zMax=-3.4028235E38;
for (var i=0; i < this.npoint; i++) {
var sp=this.sequencePoints.get$I(i);
sp.translate$F$F$F(-centre[0], -centre[1], -centre[2]);
sp.coord=rotmat.vectorMultiply$jalview_datamodel_Point(sp.coord);
sp.translate$F$F$F(centre[0], centre[1], centre[2]);
zMin=Math.min(zMin, sp.coord.z);
zMax=Math.max(zMax, sp.coord.z);
}
this.seqMin[2]=zMin;
this.seqMax[2]=zMax;
for (var i=0; i < 3; i++) {
this.getAxisEndPoints$()[i]=rotmat.vectorMultiply$jalview_datamodel_Point(this.getAxisEndPoints$()[i]);
}
});

Clazz.newMeth(C$, 'getCentre', function () {
var xCentre=(this.seqMin[0] + this.seqMax[0]) / 2.0;
var yCentre=(this.seqMin[1] + this.seqMax[1]) / 2.0;
var zCentre=(this.seqMin[2] + this.seqMax[2]) / 2.0;
return Clazz.array(Float.TYPE, -1, [xCentre, yCentre, zCentre]);
}, p$1);

Clazz.newMeth(C$, 'rectSelect$I$I$I$I', function (x1, y1, x2, y2) {
var centre=p$1.getCentre.apply(this, []);
for (var i=0; i < this.npoint; i++) {
var sp=this.sequencePoints.get$I(i);
var tmp1=((((sp.coord.x - centre[0]) * this.getScaleFactor$()) + (this.getWidth$() / 2.0))|0);
var tmp2=((((sp.coord.y - centre[1]) * this.getScaleFactor$()) + (this.getHeight$() / 2.0))|0);
if ((tmp1 > x1) && (tmp1 < x2) && (tmp2 > y1) && (tmp2 < y2)  ) {
if (this.av != null ) {
var sequence=sp.getSequence$();
if (!this.av.getSelectionGroup$().getSequences$java_util_Map(null).contains$O(sequence)) {
this.av.getSelectionGroup$().addSequence$jalview_datamodel_SequenceI$Z(sequence, true);
}}}}
});

Clazz.newMeth(C$, 'findSequenceAtPoint$I$I', function (x, y) {
var halfwidth=(this.getWidth$()/2|0);
var halfheight=(this.getHeight$()/2|0);
var found=-1;
var pix=Math.min(this.getWidth$(), this.getHeight$());
var xWidth=Math.abs(this.seqMax[0] - this.seqMin[0]);
var yWidth=Math.abs(this.seqMax[1] - this.seqMin[1]);
var maxWidth=Math.max(xWidth, yWidth);
var scaleBy=pix * this.getScaleFactor$() / (2.0 * maxWidth);
var centre=p$1.getCentre.apply(this, []);
for (var i=0; i < this.npoint; i++) {
var sp=this.sequencePoints.get$I(i);
var px=(((sp.coord.x - centre[0]) * scaleBy)|0) + halfwidth;
var py=(((sp.coord.y - centre[1]) * scaleBy)|0) + halfheight;
if ((Math.abs(px - x) < 3) && (Math.abs(py - y) < 3) ) {
found=i;
break;
}}
if (found != -1) {
return this.sequencePoints.get$I(found).getSequence$();
} else {
return null;
}});

Clazz.newMeth(C$, 'getAssociatedPanels$', function () {
if (this.isApplyToAllViews$()) {
return $I$(11).getAssociatedPanels$S(this.av.getSequenceSetId$());
} else {
return Clazz.array($I$(14), -1, [this.ap]);
}});

Clazz.newMeth(C$, 'getBackgroundColour$', function () {
return this.getBgColour$();
});

Clazz.newMeth(C$, ['mouseWheelMoved$java_awt_event_MouseWheelEvent','mouseWheelMoved$'], function (e) {
var wheelRotation=e.getPreciseWheelRotation$();
if (wheelRotation > 0 ) {
this.zoom$F(1.1);
this.repaint$();
} else if (wheelRotation < 0 ) {
this.zoom$F(0.9);
this.repaint$();
}});

Clazz.newMeth(C$, 'getSeqMin$', function () {
return this.seqMin;
});

Clazz.newMeth(C$, 'getSeqMax$', function () {
return this.seqMax;
});

Clazz.newMeth(C$, 'setSeqMinMax$FA$FA', function (min, max) {
this.seqMin=min;
this.seqMax=max;
});

Clazz.newMeth(C$, 'getScaleFactor$', function () {
return this.scaleFactor;
});

Clazz.newMeth(C$, 'setScaleFactor$F', function (scaleFactor) {
this.scaleFactor=scaleFactor;
});

Clazz.newMeth(C$, 'isShowLabels$', function () {
return this.showLabels;
});

Clazz.newMeth(C$, 'setShowLabels$Z', function (showLabels) {
this.showLabels=showLabels;
});

Clazz.newMeth(C$, 'isApplyToAllViews$', function () {
return this.applyToAllViews;
});

Clazz.newMeth(C$, 'setApplyToAllViews$Z', function (applyToAllViews) {
this.applyToAllViews=applyToAllViews;
});

Clazz.newMeth(C$, 'getAxisEndPoints$', function () {
return this.axisEndPoints;
});

Clazz.newMeth(C$, 'setAxisEndPoints$jalview_datamodel_PointA', function (axisEndPoints) {
this.axisEndPoints=axisEndPoints;
});

Clazz.newMeth(C$, 'getBgColour$', function () {
return this.bgColour;
});

Clazz.newMeth(C$, 'setBgColour$java_awt_Color', function (bgColour) {
this.bgColour=bgColour;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
