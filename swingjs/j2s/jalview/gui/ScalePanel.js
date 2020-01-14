(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.util.Platform','javax.swing.JPopupMenu','javax.swing.JMenuItem','jalview.util.MessageManager','jalview.datamodel.SequenceGroup','java.awt.Point','javax.swing.ToolTipManager','java.awt.RenderingHints','java.awt.Color','jalview.renderer.ScaleRenderer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScalePanel", null, 'javax.swing.JPanel', ['java.awt.event.MouseMotionListener', 'java.awt.event.MouseListener', 'jalview.viewmodel.ViewportListenerI']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.offy=0;
this.$width=0;
this.av=null;
this.ap=null;
this.stretchingGroup=false;
this.min=0;
this.max=0;
this.mouseDragging=false;
this.reveal=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.offy=4;
this.stretchingGroup=false;
this.mouseDragging=false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel', function (av, ap) {
Clazz.super_(C$, this,1);
this.av=av;
this.ap=ap;
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
av.getRanges$().addPropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
var x=((evt.getX$()/this.av.getCharWidth$()|0)) + this.av.getRanges$().getStartRes$();
var res;
if (this.av.hasHiddenColumns$()) {
x=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(x);
}res=Math.min(x, this.av.getAlignment$().getWidth$() - 1);
this.min=res;
this.max=res;
if (evt.isPopupTrigger$()) {
this.rightMouseButtonPressed$java_awt_event_MouseEvent$I(evt, res);
return;
}if ($I$(1).isWinRightButton$java_awt_event_MouseEvent(evt)) {
return;
}this.leftMouseButtonPressed$java_awt_event_MouseEvent$I(evt, res);
});

Clazz.newMeth(C$, 'rightMouseButtonPressed$java_awt_event_MouseEvent$I', function (evt, res) {
var pop=this.buildPopupMenu$I(res);
if (pop.getSubElements$().length > 0) {
pop.show$java_awt_Component$I$I(this, evt.getX$(), evt.getY$());
}});

Clazz.newMeth(C$, 'buildPopupMenu$I', function (res) {
var pop=Clazz.new_($I$(2));
var hiddenRange=this.reveal;
if (hiddenRange != null ) {
var item=Clazz.new_($I$(3).c$$S,[$I$(4).getString$S("label.reveal")]);
item.addActionListener$java_awt_event_ActionListener(((P$.ScalePanel$1||
(function(){var C$=Clazz.newClass(P$, "ScalePanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.ScalePanel'].av.showColumn$I(this.$finals$.hiddenRange[0]);
this.b$['jalview.gui.ScalePanel'].reveal=null;
this.b$['jalview.gui.ScalePanel'].ap.updateLayout$();
this.b$['jalview.gui.ScalePanel'].ap.paintAlignment$Z$Z(true, true);
this.b$['jalview.gui.ScalePanel'].av.sendSelection$();
});
})()
), Clazz.new_(P$.ScalePanel$1.$init$, [this, {hiddenRange: hiddenRange}])));
pop.add$javax_swing_JMenuItem(item);
if (this.av.getAlignment$().getHiddenColumns$().hasMultiHiddenColumnRegions$()) {
item=Clazz.new_($I$(3).c$$S,[$I$(4).getString$S("action.reveal_all")]);
item.addActionListener$java_awt_event_ActionListener(((P$.ScalePanel$2||
(function(){var C$=Clazz.newClass(P$, "ScalePanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.ScalePanel'].av.showAllHiddenColumns$();
this.b$['jalview.gui.ScalePanel'].reveal=null;
this.b$['jalview.gui.ScalePanel'].ap.updateLayout$();
this.b$['jalview.gui.ScalePanel'].ap.paintAlignment$Z$Z(true, true);
this.b$['jalview.gui.ScalePanel'].av.sendSelection$();
});
})()
), Clazz.new_(P$.ScalePanel$2.$init$, [this, null])));
pop.add$javax_swing_JMenuItem(item);
}}if (this.av.getColumnSelection$().contains$I(res)) {
var item=Clazz.new_($I$(3).c$$S,[$I$(4).getString$S("label.hide_columns")]);
item.addActionListener$java_awt_event_ActionListener(((P$.ScalePanel$3||
(function(){var C$=Clazz.newClass(P$, "ScalePanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.ScalePanel'].av.hideColumns$I$I(this.$finals$.res, this.$finals$.res);
if (this.b$['jalview.gui.ScalePanel'].av.getSelectionGroup$() != null  && this.b$['jalview.gui.ScalePanel'].av.getSelectionGroup$().getSize$() == this.b$['jalview.gui.ScalePanel'].av.getAlignment$().getHeight$() ) {
this.b$['jalview.gui.ScalePanel'].av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
}this.b$['jalview.gui.ScalePanel'].ap.updateLayout$();
this.b$['jalview.gui.ScalePanel'].ap.paintAlignment$Z$Z(true, true);
this.b$['jalview.gui.ScalePanel'].av.sendSelection$();
});
})()
), Clazz.new_(P$.ScalePanel$3.$init$, [this, {res: res}])));
pop.add$javax_swing_JMenuItem(item);
}return pop;
});

Clazz.newMeth(C$, 'leftMouseButtonPressed$java_awt_event_MouseEvent$I', function (evt, res) {
if (!$I$(1).isControlDown$java_awt_event_MouseEvent(evt) && !evt.isShiftDown$() ) {
this.av.getColumnSelection$().clear$();
}this.av.getColumnSelection$().addElement$I(res);
var sg=Clazz.new_($I$(5).c$$java_util_List,[this.av.getAlignment$().getSequences$()]);
sg.setStartRes$I(res);
sg.setEndRes$I(res);
if (evt.isShiftDown$()) {
var min=Math.min(this.av.getColumnSelection$().getMin$(), res);
var max=Math.max(this.av.getColumnSelection$().getMax$(), res);
for (var i=min; i < max; i++) {
this.av.getColumnSelection$().addElement$I(i);
}
sg.setStartRes$I(min);
sg.setEndRes$I(max);
}this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
this.ap.paintAlignment$Z$Z(false, false);
this.av.sendSelection$();
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
var wasDragging=this.mouseDragging;
this.mouseDragging=false;
this.ap.getSeqPanel$().stopScrolling$();
var xCords=Math.max(0, evt.getX$());
var ranges=this.av.getRanges$();
var res=((xCords/this.av.getCharWidth$()|0)) + ranges.getStartRes$();
res=Math.min(res, ranges.getEndRes$());
if (this.av.hasHiddenColumns$()) {
res=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(res);
}res=Math.max(0, res);
if (!this.stretchingGroup) {
if (evt.isPopupTrigger$()) {
this.rightMouseButtonPressed$java_awt_event_MouseEvent$I(evt, res);
} else {
this.ap.paintAlignment$Z$Z(false, false);
}return;
}var sg=this.av.getSelectionGroup$();
if (sg != null ) {
if (res > sg.getStartRes$()) {
sg.setEndRes$I(res);
} else if (res < sg.getStartRes$()) {
sg.setStartRes$I(res);
}if (wasDragging) {
this.min=Math.min(res, this.min);
this.max=Math.max(res, this.max);
this.av.getColumnSelection$().stretchGroup$I$jalview_datamodel_SequenceGroup$I$I(res, sg, this.min, this.max);
}}this.stretchingGroup=false;
this.ap.paintAlignment$Z$Z(false, false);
this.av.isSelectionGroupChanged$Z(true);
this.av.isColSelChanged$Z(true);
this.av.sendSelection$();
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
this.mouseDragging=true;
var cs=this.av.getColumnSelection$();
var hidden=this.av.getAlignment$().getHiddenColumns$();
var res=((evt.getX$()/this.av.getCharWidth$()|0)) + this.av.getRanges$().getStartRes$();
res=Math.max(0, res);
res=hidden.visibleToAbsoluteColumn$I(res);
res=Math.min(res, this.av.getAlignment$().getWidth$() - 1);
this.min=Math.min(res, this.min);
this.max=Math.max(res, this.max);
var sg=this.av.getSelectionGroup$();
if (sg != null ) {
this.stretchingGroup=true;
cs.stretchGroup$I$jalview_datamodel_SequenceGroup$I$I(res, sg, this.min, this.max);
this.ap.paintAlignment$Z$Z(false, false);
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
if (this.mouseDragging) {
this.mouseDragging=false;
this.ap.getSeqPanel$().stopScrolling$();
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
if (this.mouseDragging) {
this.ap.getSeqPanel$().startScrolling$java_awt_Point(Clazz.new_($I$(6).c$$I$I,[evt.getX$(), 0]));
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
this.setToolTipText$S(null);
this.reveal=null;
if (!this.av.hasHiddenColumns$()) {
return;
}var res=((evt.getX$()/this.av.getCharWidth$()|0)) + this.av.getRanges$().getStartRes$();
this.reveal=this.av.getAlignment$().getHiddenColumns$().getRegionWithEdgeAtRes$I(res);
res=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(res);
$I$(7).sharedInstance$().registerComponent$javax_swing_JComponent(this);
this.setToolTipText$S($I$(4).getString$S("label.reveal_hidden_columns"));
this.repaint$();
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
if (!this.av.getWrapAlignment$()) {
this.drawScale$java_awt_Graphics$I$I$I$I(g, this.av.getRanges$().getStartRes$(), this.av.getRanges$().getEndRes$(), this.getWidth$(), this.getHeight$());
}});

Clazz.newMeth(C$, 'drawScale$java_awt_Graphics$I$I$I$I', function (g, startx, endx, width, height) {
var gg=g;
gg.setFont$java_awt_Font(this.av.getFont$());
if (this.av.antiAlias) {
gg.setRenderingHint$java_awt_RenderingHints_Key$O($I$(8).KEY_ANTIALIASING, $I$(8).VALUE_ANTIALIAS_ON);
}gg.setColor$java_awt_Color($I$(9).white);
gg.fillRect$I$I$I$I(0, 0, width, height);
gg.setColor$java_awt_Color($I$(9).black);
var cs=this.av.getColumnSelection$();
var hidden=this.av.getAlignment$().getHiddenColumns$();
var avCharWidth=this.av.getCharWidth$();
var avCharHeight=this.av.getCharHeight$();
if (cs != null ) {
gg.setColor$java_awt_Color(Clazz.new_($I$(9).c$$I$I$I,[220, 0, 0]));
for (var sel, $sel = cs.getSelected$().iterator$(); $sel.hasNext$()&&((sel=($sel.next$()).intValue$()),1);) {
if (this.av.hasHiddenColumns$()) {
if (hidden.isVisible$I(sel)) {
sel=hidden.absoluteToVisibleColumn$I(sel);
} else {
continue;
}}if ((sel >= startx) && (sel <= endx) ) {
gg.fillRect$I$I$I$I((sel - startx) * avCharWidth, 0, avCharWidth, this.getHeight$());
}}
}var widthx=1 + endx - startx;
var fm=gg.getFontMetrics$java_awt_Font(this.av.getFont$());
var y=avCharHeight;
var yOf=fm.getDescent$();
y-=yOf;
if (this.av.hasHiddenColumns$()) {
gg.setColor$java_awt_Color($I$(9).blue);
var res;
if (this.av.getShowHiddenMarkers$()) {
var it=hidden.getStartRegionIterator$I$I(startx, startx + widthx + 1 );
while (it.hasNext$()){
res=(it.next$()).intValue$() - startx;
gg.fillPolygon$IA$IA$I(Clazz.array(Integer.TYPE, -1, [-1 + res * avCharWidth - (avCharHeight/4|0), -1 + res * avCharWidth + (avCharHeight/4|0), -1 + res * avCharWidth]), Clazz.array(Integer.TYPE, -1, [y, y, y + 2 * yOf]), 3);
}
}}gg.setColor$java_awt_Color($I$(9).black);
var maxX=0;
var marks=Clazz.new_($I$(10)).calculateMarks$jalview_api_AlignViewportI$I$I(this.av, startx, endx);
for (var mark, $mark = marks.iterator$(); $mark.hasNext$()&&((mark=($mark.next$())),1);) {
var major=mark.major;
var mpos=mark.column;
var mstring=mark.text;
if (mstring != null ) {
if (mpos * avCharWidth > maxX) {
gg.drawString$S$I$I(mstring, mpos * avCharWidth, y);
maxX=(mpos + 2) * avCharWidth + fm.stringWidth$S(mstring);
}}if (major) {
gg.drawLine$I$I$I$I((mpos * avCharWidth) + ((avCharWidth/2|0)), y + 2, (mpos * avCharWidth) + ((avCharWidth/2|0)), y + (yOf * 2));
} else {
gg.drawLine$I$I$I$I((mpos * avCharWidth) + ((avCharWidth/2|0)), y + yOf, (mpos * avCharWidth) + ((avCharWidth/2|0)), y + (yOf * 2));
}}
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
if (evt.getPropertyName$().equals$O("startres") || evt.getPropertyName$().equals$O("startresandseq") || evt.getPropertyName$().equals$O("move_viewport")  ) {
this.av.getAlignPanel$().repaint$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
