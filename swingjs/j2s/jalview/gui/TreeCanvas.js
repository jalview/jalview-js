(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.util.Hashtable','javax.swing.ToolTipManager','jalview.datamodel.SequenceGroup','java.awt.Color','jalview.util.Format','java.awt.Rectangle','java.awt.Point','Thread','java.awt.print.PrinterJob','jalview.util.MessageManager','java.awt.Dimension','java.awt.RenderingHints','jalview.gui.PaintRefresher','jalview.gui.JalviewColourChooser','javax.swing.SwingUtilities','java.util.Vector','jalview.analysis.Conservation','jalview.gui.AlignmentPanel']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TreeCanvas", null, 'javax.swing.JPanel', ['java.awt.event.MouseListener', 'Runnable', 'java.awt.print.Printable', 'java.awt.event.MouseMotionListener', 'jalview.structure.SelectionSource']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fitToWindow=true;
this.showDistances=false;
this.showBootstrap=false;
this.markPlaceholders=false;
this.offx=20;
this.labelLength=-1;
this.nameHash=Clazz.new_($I$(1,1));
this.nodeHash=Clazz.new_($I$(1,1));
this.applyToAllViews=false;
},1);

C$.$fields$=[['Z',['fitToWindow','showDistances','showBootstrap','markPlaceholders','applyToAllViews'],'F',['threshold'],'I',['offx','offy','labelLength'],'S',['longestName'],'O',['tree','jalview.analysis.TreeModel','scrollPane','javax.swing.JScrollPane','tp','jalview.gui.TreePanel','av','jalview.gui.AlignViewport','ap','jalview.gui.AlignmentPanel','$font','java.awt.Font','fm','java.awt.FontMetrics','nameHash','java.util.Hashtable','+nodeHash','highlightNode','jalview.datamodel.SequenceNode']]]

Clazz.newMeth(C$, 'c$$jalview_gui_TreePanel$jalview_gui_AlignmentPanel$javax_swing_JScrollPane', function (tp, ap, scroller) {
Clazz.super_(C$, this);
this.tp=tp;
this.av=ap.av;
this.setAssociatedPanel$jalview_gui_AlignmentPanel(ap);
this.$font=this.av.getFont$();
this.scrollPane=scroller;
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
$I$(2).sharedInstance$().registerComponent$javax_swing_JComponent(this);
}, 1);

Clazz.newMeth(C$, 'treeSelectionChanged$jalview_datamodel_SequenceI', function (sequence) {
var aps=this.getAssociatedPanels$();
for (var a=0; a < aps.length; a++) {
var selected=aps[a].av.getSelectionGroup$();
if (selected == null ) {
selected=Clazz.new_($I$(3,1));
aps[a].av.setSelectionGroup$jalview_datamodel_SequenceGroup(selected);
}selected.setEndRes$I(aps[a].av.getAlignment$().getWidth$() - 1);
selected.addOrRemove$jalview_datamodel_SequenceI$Z(sequence, true);
}
});

Clazz.newMeth(C$, 'setTree$jalview_analysis_TreeModel', function (tree) {
this.tree=tree;
tree.findHeight$jalview_datamodel_SequenceNode(tree.getTopNode$());
var leaves=tree.findLeaves$jalview_datamodel_SequenceNode(tree.getTopNode$());
var has_placeholders=false;
this.longestName="";
for (var i=0; i < leaves.size$(); i++) {
var lf=leaves.elementAt$I(i);
if (lf.isPlaceholder$()) {
has_placeholders=true;
}if (this.longestName.length$() < (lf.element$()).getName$().length$()) {
this.longestName=" * " + (lf.element$()).getName$();
}}
this.setMarkPlaceholders$Z(has_placeholders);
});

Clazz.newMeth(C$, 'drawNode$java_awt_Graphics$jalview_datamodel_SequenceNode$F$D$I$I$I', function (g, node, chunk, wscale, width, offx, offy) {
if (node == null ) {
return;
}if ((node.left$() == null ) && (node.right$() == null ) ) {
var height=node.height;
var dist=node.dist;
var xstart=(((height - dist) * wscale)|0) + offx;
var xend=((height * wscale)|0) + offx;
var ypos=((node.ycount * chunk)|0) + offy;
if (Clazz.instanceOf(node.element$(), "jalview.datamodel.SequenceI")) {
var seq=node.element$();
if (this.av.getSequenceColour$jalview_datamodel_SequenceI(seq) === $I$(4).white ) {
g.setColor$java_awt_Color($I$(4).black);
} else {
g.setColor$java_awt_Color(this.av.getSequenceColour$jalview_datamodel_SequenceI(seq).darker$());
}} else {
g.setColor$java_awt_Color($I$(4).black);
}g.drawLine$I$I$I$I(xstart, ypos, xend, ypos);
var nodeLabel="";
if (this.showDistances && (node.dist > 0 ) ) {
nodeLabel=Clazz.new_($I$(5,1).c$$S,["%-.2f"]).form$D(node.dist);
}if (this.showBootstrap && node.bootstrap > -1 ) {
if (this.showDistances) {
nodeLabel=nodeLabel + " : ";
}nodeLabel=nodeLabel + String.valueOf$I(node.bootstrap);
}if (!nodeLabel.equals$O("")) {
g.drawString$S$I$I(nodeLabel, xstart + 2, ypos - 2);
}var name=(this.markPlaceholders && node.isPlaceholder$() ) ? (" * " + node.getName$()) : node.getName$();
var charWidth=this.fm.stringWidth$S(name) + 3;
var charHeight=this.$font.getSize$();
var rect=Clazz.new_([xend + 10, ypos - (charHeight/2|0), charWidth, charHeight],$I$(6,1).c$$I$I$I$I);
this.nameHash.put$O$O(node.element$(), rect);
var selected=this.av.getSelectionGroup$();
if ((selected != null ) && selected.getSequences$java_util_Map(null).contains$O(node.element$()) ) {
g.setColor$java_awt_Color($I$(4).gray);
g.fillRect$I$I$I$I(xend + 10, ypos - (charHeight/2|0), charWidth, charHeight);
g.setColor$java_awt_Color($I$(4).white);
}g.drawString$S$I$I(name, xend + 10, ypos + this.fm.getDescent$());
g.setColor$java_awt_Color($I$(4).black);
} else {
this.drawNode$java_awt_Graphics$jalview_datamodel_SequenceNode$F$D$I$I$I(g, node.left$(), chunk, wscale, width, offx, offy);
this.drawNode$java_awt_Graphics$jalview_datamodel_SequenceNode$F$D$I$I$I(g, node.right$(), chunk, wscale, width, offx, offy);
var height=node.height;
var dist=node.dist;
var xstart=(((height - dist) * wscale)|0) + offx;
var xend=((height * wscale)|0) + offx;
var ypos=((node.ycount * chunk)|0) + offy;
g.setColor$java_awt_Color(node.color.darker$());
g.drawLine$I$I$I$I(xstart, ypos, xend, ypos);
if (node === this.highlightNode ) {
g.fillRect$I$I$I$I(xend - 3, ypos - 3, 6, 6);
} else {
g.fillRect$I$I$I$I(xend - 2, ypos - 2, 4, 4);
}var ystart=(node.left$() == null  ? 0 : (((node.left$()).ycount * chunk)|0)) + offy;
var yend=(node.right$() == null  ? 0 : (((node.right$()).ycount * chunk)|0)) + offy;
var pos=Clazz.new_($I$(6,1).c$$I$I$I$I,[xend - 2, ypos - 2, 5, 5]);
this.nodeHash.put$O$O(node, pos);
g.drawLine$I$I$I$I(((height * wscale)|0) + offx, ystart, ((height * wscale)|0) + offx, yend);
var nodeLabel="";
if (this.showDistances && (node.dist > 0 ) ) {
nodeLabel=Clazz.new_($I$(5,1).c$$S,["%-.2f"]).form$D(node.dist);
}if (this.showBootstrap && node.bootstrap > -1 ) {
if (this.showDistances) {
nodeLabel=nodeLabel + " : ";
}nodeLabel=nodeLabel + String.valueOf$I(node.bootstrap);
}if (!nodeLabel.equals$O("")) {
g.drawString$S$I$I(nodeLabel, xstart + 2, ypos - 2);
}}});

Clazz.newMeth(C$, 'findElement$I$I', function (x, y) {
var keys=this.nameHash.keys$();
while (keys.hasMoreElements$()){
var ob=keys.nextElement$();
var rect=this.nameHash.get$O(ob);
if ((x >= rect.x) && (x <= (rect.x + rect.width)) && (y >= rect.y) && (y <= (rect.y + rect.height))  ) {
return ob;
}}
keys=this.nodeHash.keys$();
while (keys.hasMoreElements$()){
var ob=keys.nextElement$();
var rect=this.nodeHash.get$O(ob);
if ((x >= rect.x) && (x <= (rect.x + rect.width)) && (y >= rect.y) && (y <= (rect.y + rect.height))  ) {
return ob;
}}
return null;
});

Clazz.newMeth(C$, 'pickNodes$java_awt_Rectangle', function (pickBox) {
var width=this.getWidth$();
var height=this.getHeight$();
var top=this.tree.getTopNode$();
var wscale=((width * 0.8) - (this.offx * 2)) / this.tree.getMaxHeight$();
if (top.count == 0) {
top.count=(top.left$()).count + (top.right$()).count;
}var chunk=(height - (this.offy)) / top.count;
this.pickNode$java_awt_Rectangle$jalview_datamodel_SequenceNode$F$D$I$I$I(pickBox, top, chunk, wscale, width, this.offx, this.offy);
});

Clazz.newMeth(C$, 'pickNode$java_awt_Rectangle$jalview_datamodel_SequenceNode$F$D$I$I$I', function (pickBox, node, chunk, wscale, width, offx, offy) {
if (node == null ) {
return;
}if ((node.left$() == null ) && (node.right$() == null ) ) {
var height=node.height;
var dist=node.dist;
var xstart=(((height - dist) * wscale)|0) + offx;
var xend=((height * wscale)|0) + offx;
var ypos=((node.ycount * chunk)|0) + offy;
if (pickBox.contains$java_awt_Point(Clazz.new_($I$(7,1).c$$I$I,[xend, ypos]))) {
if (Clazz.instanceOf(node.element$(), "jalview.datamodel.SequenceI")) {
var seq=node.element$();
var sg=this.av.getSelectionGroup$();
if (sg != null ) {
sg.addOrRemove$jalview_datamodel_SequenceI$Z(seq, true);
}}}} else {
this.pickNode$java_awt_Rectangle$jalview_datamodel_SequenceNode$F$D$I$I$I(pickBox, node.left$(), chunk, wscale, width, offx, offy);
this.pickNode$java_awt_Rectangle$jalview_datamodel_SequenceNode$F$D$I$I$I(pickBox, node.right$(), chunk, wscale, width, offx, offy);
}});

Clazz.newMeth(C$, 'setColor$jalview_datamodel_SequenceNode$java_awt_Color', function (node, c) {
if (node == null ) {
return;
}node.color=c;
if (Clazz.instanceOf(node.element$(), "jalview.datamodel.SequenceI")) {
var seq=node.element$();
var aps=this.getAssociatedPanels$();
if (aps != null ) {
for (var a=0; a < aps.length; a++) {
aps[a].av.setSequenceColour$jalview_datamodel_SequenceI$java_awt_Color(seq, c);
}
}}this.setColor$jalview_datamodel_SequenceNode$java_awt_Color(node.left$(), c);
this.setColor$jalview_datamodel_SequenceNode$java_awt_Color(node.right$(), c);
});

Clazz.newMeth(C$, 'startPrinting$', function () {
var thread=Clazz.new_($I$(8,1).c$$Runnable,[this]);
thread.start$();
});

Clazz.newMeth(C$, 'run$', function () {
var printJob=$I$(9).getPrinterJob$();
var defaultPage=printJob.defaultPage$();
var pf=printJob.pageDialog$java_awt_print_PageFormat(defaultPage);
if (defaultPage === pf ) {
return;
}printJob.setPrintable$java_awt_print_Printable$java_awt_print_PageFormat(this, pf);
if (printJob.printDialog$()) {
try {
printJob.print$();
} catch (PrintException) {
if (Clazz.exceptionOf(PrintException,"Exception")){
PrintException.printStackTrace$();
} else {
throw PrintException;
}
}
}});

Clazz.newMeth(C$, 'print$java_awt_Graphics$java_awt_print_PageFormat$I', function (pg, pf, pi) {
pg.setFont$java_awt_Font(this.$font);
pg.translate$I$I((pf.getImageableX$()|0), (pf.getImageableY$()|0));
var pwidth=(pf.getImageableWidth$()|0);
var pheight=(pf.getImageableHeight$()|0);
var noPages=(this.getHeight$()/pheight|0);
if (pi > noPages) {
return 1;
}if (pwidth > this.getWidth$()) {
pwidth=this.getWidth$();
}if (this.fitToWindow) {
if (pheight > this.getHeight$()) {
pheight=this.getHeight$();
}noPages=0;
} else {
var fm=pg.getFontMetrics$java_awt_Font(this.$font);
var height=fm.getHeight$() * this.nameHash.size$();
pg.translate$I$I(0, -pi * pheight);
pg.setClip$I$I$I$I(0, pi * pheight, pwidth, (pi * pheight) + pheight);
pheight=height;
}this.draw$java_awt_Graphics$I$I(pg, pwidth, pheight);
return 0;
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
g.setFont$java_awt_Font(this.$font);
if (this.tree == null ) {
g.drawString$S$I$I($I$(10).getString$S("label.calculating_tree") + "....", 20, (this.getHeight$()/2|0));
} else {
this.fm=g.getFontMetrics$java_awt_Font(this.$font);
if (this.nameHash.size$() == 0) {
this.repaint$();
}if (this.fitToWindow || (!this.fitToWindow && (this.scrollPane.getHeight$() > ((this.fm.getHeight$() * this.nameHash.size$()) + this.offy)) ) ) {
this.draw$java_awt_Graphics$I$I(g, this.scrollPane.getWidth$(), this.scrollPane.getHeight$());
this.setPreferredSize$java_awt_Dimension(null);
} else {
this.setPreferredSize$java_awt_Dimension(Clazz.new_([this.scrollPane.getWidth$(), this.fm.getHeight$() * this.nameHash.size$()],$I$(11,1).c$$I$I));
this.draw$java_awt_Graphics$I$I(g, this.scrollPane.getWidth$(), this.fm.getHeight$() * this.nameHash.size$());
}this.scrollPane.revalidate$();
}});

Clazz.newMeth(C$, 'setFont$java_awt_Font', function (font) {
this.$font=font;
this.repaint$();
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics$I$I', function (g1, width, height) {
var g2=g1;
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(12).KEY_ANTIALIASING, $I$(12).VALUE_ANTIALIAS_ON);
g2.setColor$java_awt_Color($I$(4).white);
g2.fillRect$I$I$I$I(0, 0, width, height);
g2.setFont$java_awt_Font(this.$font);
if (this.longestName == null  || this.tree == null  ) {
g2.drawString$S$I$I("Calculating tree.", 20, 20);
}this.offy=this.$font.getSize$() + 10;
this.fm=g2.getFontMetrics$java_awt_Font(this.$font);
this.labelLength=this.fm.stringWidth$S(this.longestName) + 20;
var wscale=(width - this.labelLength - (this.offx * 2) ) / this.tree.getMaxHeight$();
var top=this.tree.getTopNode$();
if (top.count == 0) {
top.count=(top.left$()).count + (top.right$()).count;
}var chunk=(height - (this.offy)) / top.count;
this.drawNode$java_awt_Graphics$jalview_datamodel_SequenceNode$F$D$I$I$I(g2, this.tree.getTopNode$(), chunk, wscale, width, this.offx, this.offy);
if (this.threshold != 0 ) {
if (this.av.getCurrentTree$() === this.tree ) {
g2.setColor$java_awt_Color($I$(4).red);
} else {
g2.setColor$java_awt_Color($I$(4).gray);
}var x=(((this.threshold * (this.getWidth$() - this.labelLength - (2 * this.offx) )) + this.offx)|0);
g2.drawLine$I$I$I$I(x, 0, x, this.getHeight$());
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
if (e.isPopupTrigger$()) {
this.chooseSubtreeColour$();
e.consume$();
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
if (this.highlightNode == null ) {
return;
}if (evt.getClickCount$() > 1) {
this.tree.swapNodes$jalview_datamodel_SequenceNode(this.highlightNode);
this.tree.reCount$jalview_datamodel_SequenceNode(this.tree.getTopNode$());
this.tree.findHeight$jalview_datamodel_SequenceNode(this.tree.getTopNode$());
} else {
var leaves=this.tree.findLeaves$jalview_datamodel_SequenceNode(this.highlightNode);
for (var i=0; i < leaves.size$(); i++) {
var seq=leaves.elementAt$I(i).element$();
this.treeSelectionChanged$jalview_datamodel_SequenceI(seq);
}
this.av.sendSelection$();
}$I$(13,"Refresh$java_awt_Component$S",[this.tp, this.av.getSequenceSetId$()]);
this.repaint$();
});

Clazz.newMeth(C$, 'chooseSubtreeColour$', function () {
var ttl=$I$(10).getString$S("label.select_subtree_colour");
var listener=((P$.TreeCanvas$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TreeCanvas$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'colourSelected$java_awt_Color', function (c) {
this.b$['jalview.gui.TreeCanvas'].setColor$jalview_datamodel_SequenceNode$java_awt_Color.apply(this.b$['jalview.gui.TreeCanvas'], [this.b$['jalview.gui.TreeCanvas'].highlightNode, c]);
$I$(13,"Refresh$java_awt_Component$S",[this.b$['jalview.gui.TreeCanvas'].tp, this.b$['jalview.gui.TreeCanvas'].ap.av.getSequenceSetId$()]);
this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
});
})()
), Clazz.new_(P$.TreeCanvas$1.$init$,[this, null]));
$I$(14).showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener(this, ttl, this.highlightNode.color, listener);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
this.av.setCurrentTree$jalview_analysis_TreeModel(this.tree);
var ob=this.findElement$I$I(evt.getX$(), evt.getY$());
if (Clazz.instanceOf(ob, "jalview.datamodel.SequenceNode")) {
this.highlightNode=ob;
this.setToolTipText$S("<html>" + $I$(10).getString$S("label.highlightnode"));
this.repaint$();
} else {
if (this.highlightNode != null ) {
this.highlightNode=null;
this.setToolTipText$S(null);
this.repaint$();
}}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (ect) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
this.av.setCurrentTree$jalview_analysis_TreeModel(this.tree);
if (e.isPopupTrigger$()) {
if (this.highlightNode != null ) {
this.chooseSubtreeColour$();
}return;
}if ($I$(15).isRightMouseButton$java_awt_event_MouseEvent(e)) {
return;
}var x=e.getX$();
var y=e.getY$();
var ob=this.findElement$I$I(x, y);
if (Clazz.instanceOf(ob, "jalview.datamodel.SequenceI")) {
this.treeSelectionChanged$jalview_datamodel_SequenceI(ob);
$I$(13,"Refresh$java_awt_Component$S",[this.tp, this.getAssociatedPanel$().av.getSequenceSetId$()]);
this.repaint$();
this.av.sendSelection$();
return;
} else if (!(Clazz.instanceOf(ob, "jalview.datamodel.SequenceNode"))) {
if (this.tree.getMaxHeight$() != 0 ) {
this.threshold=(x - this.offx) / (this.getWidth$() - this.labelLength - (2 * this.offx) );
var groups=this.tree.groupNodes$F(this.threshold);
this.setColor$jalview_datamodel_SequenceNode$java_awt_Color(this.tree.getTopNode$(), $I$(4).black);
var aps=this.getAssociatedPanels$();
for (var a=0; a < aps.length; a++) {
aps[a].av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
aps[a].av.getAlignment$().deleteAllGroups$();
aps[a].av.clearSequenceColours$();
if (aps[a].av.getCodingComplement$() != null ) {
aps[a].av.getCodingComplement$().setSelectionGroup$jalview_datamodel_SequenceGroup(null);
aps[a].av.getCodingComplement$().getAlignment$().deleteAllGroups$();
aps[a].av.getCodingComplement$().clearSequenceColours$();
}aps[a].av.setUpdateStructures$Z(true);
}
this.colourGroups$java_util_List(groups);
if (groups.isEmpty$()) {
this.threshold=0.0;
}}$I$(13,"Refresh$java_awt_Component$S",[this.tp, this.getAssociatedPanel$().av.getSequenceSetId$()]);
this.repaint$();
}});

Clazz.newMeth(C$, 'colourGroups$java_util_List', function (groups) {
var aps=this.getAssociatedPanels$();
for (var i=0; i < groups.size$(); i++) {
var col=Clazz.new_([((Math.random() * 255)|0), ((Math.random() * 255)|0), ((Math.random() * 255)|0)],$I$(4,1).c$$I$I$I);
this.setColor$jalview_datamodel_SequenceNode$java_awt_Color(groups.get$I(i), col.brighter$());
var l=this.tree.findLeaves$jalview_datamodel_SequenceNode(groups.get$I(i));
var sequences=Clazz.new_($I$(16,1));
for (var j=0; j < l.size$(); j++) {
var s1=l.elementAt$I(j).element$();
if (!sequences.contains$O(s1)) {
sequences.addElement$O(s1);
}}
var cs=null;
var _sg=Clazz.new_([sequences, null, cs, true, true, false, 0, this.av.getAlignment$().getWidth$() - 1],$I$(3,1).c$$java_util_List$S$jalview_schemes_ColourSchemeI$Z$Z$Z$I$I);
_sg.setName$S("JTreeGroup:" + _sg.hashCode$());
_sg.setIdColour$java_awt_Color(col);
for (var a=0; a < aps.length; a++) {
var sg=Clazz.new_($I$(3,1).c$$jalview_datamodel_SequenceGroup,[_sg]);
var viewport=aps[a].av;
if (viewport.getGlobalColourScheme$() != null ) {
cs=viewport.getGlobalColourScheme$().getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI(viewport, sg);
sg.setColourScheme$jalview_schemes_ColourSchemeI(cs);
sg.getGroupColourScheme$().setThreshold$I$Z(viewport.getResidueShading$().getThreshold$(), viewport.isIgnoreGapsConsensus$());
if (viewport.getResidueShading$().conservationApplied$()) {
var c=Clazz.new_(["Group", sg.getSequences$java_util_Map(null), sg.getStartRes$(), sg.getEndRes$()],$I$(17,1).c$$S$java_util_List$I$I);
c.calculate$();
c.verdict$Z$F(false, viewport.getConsPercGaps$());
sg.cs.setConservation$jalview_analysis_Conservation(c);
}}viewport.setUpdateStructures$Z(true);
viewport.addSequenceGroup$jalview_datamodel_SequenceGroup(sg);
}
}
for (var a=0; a < aps.length; a++) {
aps[a].updateAnnotation$();
var codingComplement=aps[a].av.getCodingComplement$();
if (codingComplement != null ) {
(codingComplement).getAlignPanel$().updateAnnotation$();
}}
});

Clazz.newMeth(C$, 'setShowDistances$Z', function (state) {
this.showDistances=state;
this.repaint$();
});

Clazz.newMeth(C$, 'setShowBootstrap$Z', function (state) {
this.showBootstrap=state;
this.repaint$();
});

Clazz.newMeth(C$, 'setMarkPlaceholders$Z', function (state) {
this.markPlaceholders=state;
this.repaint$();
});

Clazz.newMeth(C$, 'getAssociatedPanels$', function () {
if (this.applyToAllViews) {
return $I$(13,"getAssociatedPanels$S",[this.av.getSequenceSetId$()]);
} else {
return Clazz.array($I$(18), -1, [this.getAssociatedPanel$()]);
}});

Clazz.newMeth(C$, 'getAssociatedPanel$', function () {
return this.ap;
});

Clazz.newMeth(C$, 'setAssociatedPanel$jalview_gui_AlignmentPanel', function (ap) {
this.ap=ap;
});

Clazz.newMeth(C$, 'getViewport$', function () {
return this.av;
});

Clazz.newMeth(C$, 'setViewport$jalview_gui_AlignViewport', function (av) {
this.av=av;
});

Clazz.newMeth(C$, 'getThreshold$', function () {
return this.threshold;
});

Clazz.newMeth(C$, 'setThreshold$F', function (threshold) {
this.threshold=threshold;
});

Clazz.newMeth(C$, 'isApplyToAllViews$', function () {
return this.applyToAllViews;
});

Clazz.newMeth(C$, 'setApplyToAllViews$Z', function (applyToAllViews) {
this.applyToAllViews=applyToAllViews;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
