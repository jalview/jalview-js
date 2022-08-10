(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'jalview.datamodel.SequenceGroup','java.awt.PopupMenu','java.awt.MenuItem','jalview.util.MessageManager','java.awt.Color','jalview.renderer.ScaleRenderer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScalePanel", null, 'java.awt.Panel', ['java.awt.event.MouseMotionListener', 'java.awt.event.MouseListener', 'jalview.viewmodel.ViewportListenerI']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offy=4;
this.stretchingGroup=false;
this.mouseDragging=false;
},1);

C$.$fields$=[['Z',['stretchingGroup','mouseDragging'],'I',['offy','$width','min','max'],'O',['av','jalview.appletgui.AlignViewport','ap','jalview.appletgui.AlignmentPanel','reveal','int[]']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel',  function (av, ap) {
Clazz.super_(C$, this);
this.setLayout$java_awt_LayoutManager(null);
this.av=av;
this.ap=ap;
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
av.getRanges$().addPropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
var x=((evt.getX$()/this.av.getCharWidth$()|0)) + this.av.getRanges$().getStartRes$();
var res;
if (this.av.hasHiddenColumns$()) {
res=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(x);
} else {
res=x;
}this.min=res;
this.max=res;
if ((evt.getModifiersEx$() & 4096) == 4096) {
this.rightMouseButtonPressed$java_awt_event_MouseEvent$I(evt, res);
} else {
this.leftMouseButtonPressed$java_awt_event_MouseEvent$I(evt, res);
}});

Clazz.newMeth(C$, 'leftMouseButtonPressed$java_awt_event_MouseEvent$I',  function (evt, res) {
if (!evt.isControlDown$() && !evt.isShiftDown$() ) {
this.av.getColumnSelection$().clear$();
}this.av.getColumnSelection$().addElement$I(res);
var sg=Clazz.new_($I$(1,1));
for (var i=0; i < this.av.getAlignment$().getSequences$().size$(); i++) {
sg.addSequence$jalview_datamodel_SequenceI$Z(this.av.getAlignment$().getSequenceAt$I(i), false);
}
sg.setStartRes$I(res);
sg.setEndRes$I(res);
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
if (evt.isShiftDown$()) {
var min=Math.min(this.av.getColumnSelection$().getMin$(), res);
var max=Math.max(this.av.getColumnSelection$().getMax$(), res);
for (var i=min; i < max; i++) {
this.av.getColumnSelection$().addElement$I(i);
}
sg.setStartRes$I(min);
sg.setEndRes$I(max);
}this.ap.paintAlignment$Z$Z(false, false);
this.av.sendSelection$();
});

Clazz.newMeth(C$, 'rightMouseButtonPressed$java_awt_event_MouseEvent$I',  function (evt, res) {
var pop=Clazz.new_($I$(2,1));
if (this.reveal != null ) {
var item=Clazz.new_([$I$(4).getString$S("label.reveal")],$I$(3,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.ScalePanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScalePanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.appletgui.ScalePanel'].av.showColumn$I(this.b$['jalview.appletgui.ScalePanel'].reveal[0]);
this.b$['jalview.appletgui.ScalePanel'].reveal=null;
this.b$['jalview.appletgui.ScalePanel'].ap.paintAlignment$Z$Z(true, true);
this.b$['jalview.appletgui.ScalePanel'].av.sendSelection$();
});
})()
), Clazz.new_(P$.ScalePanel$1.$init$,[this, null])));
pop.add$java_awt_MenuItem(item);
if (this.av.getAlignment$().getHiddenColumns$().hasMultiHiddenColumnRegions$()) {
item=Clazz.new_([$I$(4).getString$S("action.reveal_all")],$I$(3,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.ScalePanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScalePanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.appletgui.ScalePanel'].av.showAllHiddenColumns$();
this.b$['jalview.appletgui.ScalePanel'].reveal=null;
this.b$['jalview.appletgui.ScalePanel'].ap.paintAlignment$Z$Z(true, true);
this.b$['jalview.appletgui.ScalePanel'].av.sendSelection$();
});
})()
), Clazz.new_(P$.ScalePanel$2.$init$,[this, null])));
pop.add$java_awt_MenuItem(item);
}this.add$java_awt_PopupMenu(pop);
pop.show$java_awt_Component$I$I(this, evt.getX$(), evt.getY$());
} else if (this.av.getColumnSelection$().contains$I(res)) {
var item=Clazz.new_([$I$(4).getString$S("label.hide_columns")],$I$(3,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.ScalePanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScalePanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.appletgui.ScalePanel'].av.hideColumns$I$I(this.$finals$.res, this.$finals$.res);
if (this.b$['jalview.appletgui.ScalePanel'].av.getSelectionGroup$() != null  && this.b$['jalview.appletgui.ScalePanel'].av.getSelectionGroup$().getSize$() == this.b$['jalview.appletgui.ScalePanel'].av.getAlignment$().getHeight$() ) {
this.b$['jalview.appletgui.ScalePanel'].av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
}this.b$['jalview.appletgui.ScalePanel'].ap.paintAlignment$Z$Z(true, true);
this.b$['jalview.appletgui.ScalePanel'].av.sendSelection$();
});
})()
), Clazz.new_(P$.ScalePanel$3.$init$,[this, {res:res}])));
pop.add$java_awt_MenuItem(item);
this.add$java_awt_PopupMenu(pop);
pop.show$java_awt_Component$I$I(this, evt.getX$(), evt.getY$());
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
this.mouseDragging=false;
var res=((evt.getX$()/this.av.getCharWidth$()|0)) + this.av.getRanges$().getStartRes$();
if (res > this.av.getAlignment$().getWidth$()) {
res=this.av.getAlignment$().getWidth$() - 1;
}if (this.av.hasHiddenColumns$()) {
res=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(res);
}if (!this.stretchingGroup) {
this.ap.paintAlignment$Z$Z(false, false);
return;
}var sg=this.av.getSelectionGroup$();
if (res > sg.getStartRes$()) {
sg.setEndRes$I(res);
} else if (res < sg.getStartRes$()) {
sg.setStartRes$I(res);
}this.stretchingGroup=false;
this.ap.paintAlignment$Z$Z(false, false);
this.av.sendSelection$();
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (evt) {
this.mouseDragging=true;
var cs=this.av.getColumnSelection$();
var res=((evt.getX$()/this.av.getCharWidth$()|0)) + this.av.getRanges$().getStartRes$();
res=Math.max(0, res);
res=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(res);
res=Math.min(res, this.av.getAlignment$().getWidth$() - 1);
this.min=Math.min(res, this.min);
this.max=Math.max(res, this.max);
var sg=this.av.getSelectionGroup$();
if (sg != null ) {
this.stretchingGroup=true;
cs.stretchGroup$I$jalview_datamodel_SequenceGroup$I$I(res, sg, this.min, this.max);
this.ap.paintAlignment$Z$Z(false, false);
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (evt) {
if (this.mouseDragging) {
this.ap.seqPanel.scrollCanvas$java_awt_event_MouseEvent(null);
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (evt) {
if (this.mouseDragging) {
this.ap.seqPanel.scrollCanvas$java_awt_event_MouseEvent(evt);
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (evt) {
if (!this.av.hasHiddenColumns$()) {
return;
}var res=((evt.getX$()/this.av.getCharWidth$()|0)) + this.av.getRanges$().getStartRes$();
this.reveal=this.av.getAlignment$().getHiddenColumns$().getRegionWithEdgeAtRes$I(res);
this.repaint$();
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (!this.av.getWrapAlignment$()) {
this.drawScale$java_awt_Graphics$I$I$I$I(g, this.av.getRanges$().getStartRes$(), this.av.getRanges$().getEndRes$(), this.getSize$().width, this.getSize$().height);
}});

Clazz.newMeth(C$, 'drawScale$java_awt_Graphics$I$I$I$I',  function (gg, startx, endx, width, height) {
gg.setFont$java_awt_Font(this.av.getFont$());
gg.setColor$java_awt_Color($I$(5).white);
gg.fillRect$I$I$I$I(0, 0, width, height);
gg.setColor$java_awt_Color($I$(5).black);
var cs=this.av.getColumnSelection$();
var hidden=this.av.getAlignment$().getHiddenColumns$();
var avCharWidth=this.av.getCharWidth$();
var avcharHeight=this.av.getCharHeight$();
if (cs != null ) {
gg.setColor$java_awt_Color(Clazz.new_($I$(5,1).c$$I$I$I,[220, 0, 0]));
var hasHiddenColumns=hidden.hasHiddenColumns$();
for (var sel, $sel = cs.getSelected$().iterator$(); $sel.hasNext$()&&((sel=($sel.next$()).intValue$()),1);) {
if (hasHiddenColumns) {
if (hidden.isVisible$I(sel)) {
sel=hidden.absoluteToVisibleColumn$I(sel);
} else {
continue;
}}if ((sel >= startx) && (sel <= endx) ) {
gg.fillRect$I$I$I$I((sel - startx) * avCharWidth, 0, avCharWidth, this.getSize$().height);
}}
}gg.setColor$java_awt_Color($I$(5).black);
var maxX=0;
var marks=Clazz.new_($I$(6,1)).calculateMarks$jalview_api_AlignViewportI$I$I(this.av, startx, endx);
var fm=gg.getFontMetrics$java_awt_Font(this.av.getFont$());
var y=avcharHeight;
var yOf=fm.getDescent$();
y-=yOf;
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
if (this.av.hasHiddenColumns$()) {
gg.setColor$java_awt_Color($I$(5).blue);
var res;
if (this.av.getShowHiddenMarkers$()) {
var widthx=1 + endx - startx;
var it=hidden.getStartRegionIterator$I$I(startx, startx + widthx + 1 );
while (it.hasNext$()){
res=((it.next$()).$c() - startx)|0;
gg.fillPolygon$IA$IA$I(Clazz.array(Integer.TYPE, -1, [-1 + res * avCharWidth - (avcharHeight/4|0), -1 + res * avCharWidth + (avcharHeight/4|0), -1 + res * avCharWidth]), Clazz.array(Integer.TYPE, -1, [y, y, y + 2 * yOf]), 3);
}
}}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
if (evt.getPropertyName$().equals$O("startres") || evt.getPropertyName$().equals$O("startresandseq") || evt.getPropertyName$().equals$O("move_viewport")  ) {
this.repaint$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:28 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
