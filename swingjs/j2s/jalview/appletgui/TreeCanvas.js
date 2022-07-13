(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.util.Hashtable','jalview.appletgui.PaintRefresher','jalview.datamodel.SequenceGroup','java.awt.Color','jalview.util.Format','java.awt.Rectangle','java.awt.Point','java.awt.Dimension','java.util.Vector','jalview.schemes.UserColourScheme','jalview.schemes.ColourSchemeProperty','jalview.analysis.Conservation','jalview.util.MappingUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TreeCanvas", null, 'java.awt.Panel', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);

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
},1);

C$.$fields$=[['Z',['fitToWindow','showDistances','showBootstrap','markPlaceholders'],'F',['threshold'],'I',['offx','offy','labelLength'],'S',['longestName'],'O',['tree','jalview.analysis.TreeModel','scrollPane','java.awt.ScrollPane','av','jalview.appletgui.AlignViewport','$font','java.awt.Font','nameHash','java.util.Hashtable','+nodeHash','highlightNode','jalview.datamodel.SequenceNode','ap','jalview.appletgui.AlignmentPanel']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel$java_awt_ScrollPane',  function (ap, scroller) {
Clazz.super_(C$, this);
this.ap=ap;
this.av=ap.av;
this.$font=this.av.getFont$();
this.scrollPane=scroller;
this.addMouseListener$java_awt_event_MouseListener(this);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.setLayout$java_awt_LayoutManager(null);
$I$(2,"Register$java_awt_Component$S",[this, this.av.getSequenceSetId$()]);
}, 1);

Clazz.newMeth(C$, 'treeSelectionChanged$jalview_datamodel_SequenceI',  function (sequence) {
var selected=this.av.getSelectionGroup$();
if (selected == null ) {
selected=Clazz.new_($I$(3,1));
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(selected);
}selected.setEndRes$I(this.av.getAlignment$().getWidth$() - 1);
selected.addOrRemove$jalview_datamodel_SequenceI$Z(sequence, true);
});

Clazz.newMeth(C$, 'setTree$jalview_analysis_TreeModel',  function (tree2) {
this.tree=tree2;
tree2.findHeight$jalview_datamodel_SequenceNode(tree2.getTopNode$());
var leaves=tree2.findLeaves$jalview_datamodel_SequenceNode(tree2.getTopNode$());
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

Clazz.newMeth(C$, 'drawNode$java_awt_Graphics$jalview_datamodel_SequenceNode$F$D$I$I$I',  function (g, node, chunk, scale, width, offx, offy) {
if (node == null ) {
return;
}if (node.left$() == null  && node.right$() == null  ) {
var height=node.height;
var dist=node.dist;
var xstart=(((height - dist) * scale)|0) + offx;
var xend=((height * scale)|0) + offx;
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
if (this.showDistances && node.dist > 0  ) {
nodeLabel=Clazz.new_($I$(5,1).c$$S,["%-.2f"]).form$D(node.dist);
}if (this.showBootstrap) {
var btstrap=node.getBootstrap$();
if (btstrap > -1) {
if (this.showDistances) {
nodeLabel=nodeLabel + " : ";
}nodeLabel=nodeLabel + String.valueOf$I(node.getBootstrap$());
}}if (!nodeLabel.equals$O("")) {
g.drawString$S$I$I(nodeLabel, xstart + 2, ypos - 2);
}var name=(this.markPlaceholders && node.isPlaceholder$() ) ? (" * " + node.getName$()) : node.getName$();
var fm=g.getFontMetrics$java_awt_Font(this.$font);
var charWidth=fm.stringWidth$S(name) + 3;
var charHeight=fm.getHeight$();
var rect=Clazz.new_($I$(6,1).c$$I$I$I$I,[xend + 10, ypos - charHeight, charWidth, charHeight]);
this.nameHash.put$O$O(node.element$(), rect);
var selected=this.av.getSelectionGroup$();
if (selected != null  && selected.getSequences$java_util_Map(null).contains$O(node.element$()) ) {
g.setColor$java_awt_Color($I$(4).gray);
g.fillRect$I$I$I$I(xend + 10, ypos - charHeight + 3, charWidth, charHeight);
g.setColor$java_awt_Color($I$(4).white);
}g.drawString$S$I$I(name, xend + 10, ypos);
g.setColor$java_awt_Color($I$(4).black);
} else {
this.drawNode$java_awt_Graphics$jalview_datamodel_SequenceNode$F$D$I$I$I(g, node.left$(), chunk, scale, width, offx, offy);
this.drawNode$java_awt_Graphics$jalview_datamodel_SequenceNode$F$D$I$I$I(g, node.right$(), chunk, scale, width, offx, offy);
var height=node.height;
var dist=node.dist;
var xstart=(((height - dist) * scale)|0) + offx;
var xend=((height * scale)|0) + offx;
var ypos=((node.ycount * chunk)|0) + offy;
g.setColor$java_awt_Color(node.color.darker$());
g.drawLine$I$I$I$I(xstart, ypos, xend, ypos);
if (node === this.highlightNode ) {
g.fillRect$I$I$I$I(xend - 3, ypos - 3, 6, 6);
} else {
g.fillRect$I$I$I$I(xend - 2, ypos - 2, 4, 4);
}var ystart=((node.left$() == null  ? 0 : ((node.left$()).ycount * chunk))|0) + offy;
var yend=((node.right$() == null  ? 0 : ((node.right$()).ycount * chunk))|0) + offy;
var pos=Clazz.new_($I$(6,1).c$$I$I$I$I,[xend - 2, ypos - 2, 5, 5]);
this.nodeHash.put$O$O(node, pos);
g.drawLine$I$I$I$I(((height * scale)|0) + offx, ystart, ((height * scale)|0) + offx, yend);
var nodeLabel="";
if (this.showDistances && (node.dist > 0 ) ) {
nodeLabel=Clazz.new_($I$(5,1).c$$S,["%-.2f"]).form$D(node.dist);
}if (this.showBootstrap) {
var btstrap=node.getBootstrap$();
if (btstrap > -1) {
if (this.showDistances) {
nodeLabel=nodeLabel + " : ";
}nodeLabel=nodeLabel + String.valueOf$I(node.getBootstrap$());
}}if (!nodeLabel.equals$O("")) {
g.drawString$S$I$I(nodeLabel, xstart + 2, ypos - 2);
}}});

Clazz.newMeth(C$, 'findElement$I$I',  function (x, y) {
var keys=this.nameHash.keys$();
while (keys.hasMoreElements$()){
var ob=keys.nextElement$();
var rect=this.nameHash.get$O(ob);
if (x >= rect.x && x <= (rect.x + rect.width)  && y >= rect.y  && y <= (rect.y + rect.height) ) {
return ob;
}}
keys=this.nodeHash.keys$();
while (keys.hasMoreElements$()){
var ob=keys.nextElement$();
var rect=this.nodeHash.get$O(ob);
if (x >= rect.x && x <= (rect.x + rect.width)  && y >= rect.y  && y <= (rect.y + rect.height) ) {
return ob;
}}
return null;
});

Clazz.newMeth(C$, 'pickNodes$java_awt_Rectangle',  function (pickBox) {
var width=this.getSize$().width;
var height=this.getSize$().height;
var top=this.tree.getTopNode$();
var wscale=(width * 0.8 - this.offx * 2) / this.tree.getMaxHeight$();
if (top.count == 0) {
top.count=(top.left$()).count + (top.right$()).count;
}var chunk=(height - this.offy) / top.count;
this.pickNode$java_awt_Rectangle$jalview_datamodel_SequenceNode$F$D$I$I$I(pickBox, top, chunk, wscale, width, this.offx, this.offy);
});

Clazz.newMeth(C$, 'pickNode$java_awt_Rectangle$jalview_datamodel_SequenceNode$F$D$I$I$I',  function (pickBox, node, chunk, scale, width, offx, offy) {
if (node == null ) {
return;
}if (node.left$() == null  && node.right$() == null  ) {
var height=node.height;
var xend=((height * scale)|0) + offx;
var ypos=((node.ycount * chunk)|0) + offy;
if (pickBox.contains$java_awt_Point(Clazz.new_($I$(7,1).c$$I$I,[xend, ypos]))) {
if (Clazz.instanceOf(node.element$(), "jalview.datamodel.SequenceI")) {
var seq=node.element$();
var sg=this.av.getSelectionGroup$();
if (sg != null ) {
sg.addOrRemove$jalview_datamodel_SequenceI$Z(seq, true);
}}}} else {
this.pickNode$java_awt_Rectangle$jalview_datamodel_SequenceNode$F$D$I$I$I(pickBox, node.left$(), chunk, scale, width, offx, offy);
this.pickNode$java_awt_Rectangle$jalview_datamodel_SequenceNode$F$D$I$I$I(pickBox, node.right$(), chunk, scale, width, offx, offy);
}});

Clazz.newMeth(C$, 'setColor$jalview_datamodel_SequenceNode$java_awt_Color',  function (node, c) {
if (node == null ) {
return;
}if (node.left$() == null  && node.right$() == null  ) {
node.color=c;
if (Clazz.instanceOf(node.element$(), "jalview.datamodel.SequenceI")) {
this.av.setSequenceColour$jalview_datamodel_SequenceI$java_awt_Color(node.element$(), c);
}} else {
node.color=c;
this.setColor$jalview_datamodel_SequenceNode$java_awt_Color(node.left$(), c);
this.setColor$jalview_datamodel_SequenceNode$java_awt_Color(node.right$(), c);
}});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (this.tree == null ) {
return;
}if (this.nameHash.size$() == 0) {
this.repaint$();
}var width=this.scrollPane.getSize$().width;
var height=this.scrollPane.getSize$().height;
if (!this.fitToWindow) {
height=g.getFontMetrics$java_awt_Font(this.$font).getHeight$() * this.nameHash.size$();
}if (this.getSize$().width > width) {
this.setSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[width, height]));
this.scrollPane.validate$();
return;
}this.setSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[width, height]));
g.setFont$java_awt_Font(this.$font);
this.draw$java_awt_Graphics$I$I(g, width, height);
this.validate$();
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics$I$I',  function (g, width, height) {
this.offy=this.$font.getSize$() + 10;
g.setColor$java_awt_Color($I$(4).white);
g.fillRect$I$I$I$I(0, 0, width, height);
this.labelLength=g.getFontMetrics$java_awt_Font(this.$font).stringWidth$S(this.longestName) + 20;
var wscale=(width - this.labelLength - this.offx * 2 ) / this.tree.getMaxHeight$();
var top=this.tree.getTopNode$();
if (top.count == 0) {
top.count=(top.left$()).count + (top.right$()).count;
}var chunk=(height - this.offy) / top.count;
this.drawNode$java_awt_Graphics$jalview_datamodel_SequenceNode$F$D$I$I$I(g, this.tree.getTopNode$(), chunk, wscale, width, this.offx, this.offy);
if (this.threshold != 0 ) {
if (this.av.getCurrentTree$() === this.tree ) {
g.setColor$java_awt_Color($I$(4).red);
} else {
g.setColor$java_awt_Color($I$(4).gray);
}var x=((this.threshold * (this.getSize$().width - this.labelLength - 2 * this.offx ) + this.offx)|0);
g.drawLine$I$I$I$I(x, 0, x, this.getSize$().height);
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
if (this.highlightNode != null ) {
if (evt.getClickCount$() > 1) {
this.tree.swapNodes$jalview_datamodel_SequenceNode(this.highlightNode);
this.tree.reCount$jalview_datamodel_SequenceNode(this.tree.getTopNode$());
this.tree.findHeight$jalview_datamodel_SequenceNode(this.tree.getTopNode$());
} else {
var leaves=this.tree.findLeaves$jalview_datamodel_SequenceNode(this.highlightNode);
for (var i=0; i < leaves.size$(); i++) {
var seq=leaves.elementAt$I(i).element$();
this.treeSelectionChanged$jalview_datamodel_SequenceI(seq);
}
}$I$(2,"Refresh$java_awt_Component$S",[this, this.av.getSequenceSetId$()]);
this.repaint$();
this.av.sendSelection$();
}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (ect) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (evt) {
this.av.setCurrentTree$jalview_analysis_TreeModel(this.tree);
var ob=this.findElement$I$I(evt.getX$(), evt.getY$());
if (Clazz.instanceOf(ob, "jalview.datamodel.SequenceNode")) {
this.highlightNode=ob;
this.repaint$();
} else {
if (this.highlightNode != null ) {
this.highlightNode=null;
this.repaint$();
}}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.av.setCurrentTree$jalview_analysis_TreeModel(this.tree);
var x=e.getX$();
var y=e.getY$();
var ob=this.findElement$I$I(x, y);
if (Clazz.instanceOf(ob, "jalview.datamodel.SequenceI")) {
this.treeSelectionChanged$jalview_datamodel_SequenceI(ob);
$I$(2,"Refresh$java_awt_Component$S",[this, this.av.getSequenceSetId$()]);
this.repaint$();
this.av.sendSelection$();
return;
} else if (!(Clazz.instanceOf(ob, "jalview.datamodel.SequenceNode"))) {
if (this.tree.getMaxHeight$() != 0 ) {
this.threshold=(x - this.offx) / (this.getSize$().width - this.labelLength - 2 * this.offx );
var groups=this.tree.groupNodes$F(this.threshold);
this.setColor$jalview_datamodel_SequenceNode$java_awt_Color(this.tree.getTopNode$(), $I$(4).black);
this.av.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.av.getAlignment$().deleteAllGroups$();
this.av.clearSequenceColours$();
var codingComplement=this.av.getCodingComplement$();
if (codingComplement != null ) {
codingComplement.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
codingComplement.getAlignment$().deleteAllGroups$();
codingComplement.clearSequenceColours$();
}this.colourGroups$java_util_List(groups);
}}$I$(2,"Refresh$java_awt_Component$S",[this, this.av.getSequenceSetId$()]);
this.repaint$();
});

Clazz.newMeth(C$, 'colourGroups$java_util_List',  function (groups) {
for (var i=0; i < groups.size$(); i++) {
var col=Clazz.new_([((Math.random() * 255)|0), ((Math.random() * 255)|0), ((Math.random() * 255)|0)],$I$(4,1).c$$I$I$I);
this.setColor$jalview_datamodel_SequenceNode$java_awt_Color(groups.get$I(i), col.brighter$());
var l=this.tree.findLeaves$jalview_datamodel_SequenceNode(groups.get$I(i));
var sequences=Clazz.new_($I$(9,1));
for (var j=0; j < l.size$(); j++) {
var s1=l.elementAt$I(j).element$();
if (!sequences.contains$O(s1)) {
sequences.addElement$O(s1);
}}
var cs=null;
var sg=Clazz.new_([sequences, "", cs, true, true, false, 0, this.av.getAlignment$().getWidth$() - 1],$I$(3,1).c$$java_util_List$S$jalview_schemes_ColourSchemeI$Z$Z$Z$I$I);
if (this.av.getGlobalColourScheme$() != null ) {
if (Clazz.instanceOf(this.av.getGlobalColourScheme$(), "jalview.schemes.UserColourScheme")) {
cs=Clazz.new_([(this.av.getGlobalColourScheme$()).getColours$()],$I$(10,1).c$$java_awt_ColorA);
} else {
cs=$I$(11,"getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S",[this.av, sg, $I$(11,"getColourName$jalview_schemes_ColourSchemeI",[this.av.getGlobalColourScheme$()])]);
}}sg.setColourScheme$jalview_schemes_ColourSchemeI(cs);
sg.getGroupColourScheme$().setThreshold$I$Z(this.av.getResidueShading$().getThreshold$(), this.av.isIgnoreGapsConsensus$());
sg.setName$S("JTreeGroup:" + sg.hashCode$());
sg.setIdColour$java_awt_Color(col);
if (this.av.getGlobalColourScheme$() != null  && this.av.getResidueShading$().conservationApplied$() ) {
var c=Clazz.new_(["Group", sg.getSequences$java_util_Map(null), sg.getStartRes$(), sg.getEndRes$()],$I$(12,1).c$$S$java_util_List$I$I);
c.calculate$();
c.verdict$Z$F(false, this.av.getConsPercGaps$());
sg.setColourScheme$jalview_schemes_ColourSchemeI(cs);
sg.getGroupColourScheme$().setConservation$jalview_analysis_Conservation(c);
}this.av.getAlignment$().addGroup$jalview_datamodel_SequenceGroup(sg);
this.av.getAlignment$().addGroup$jalview_datamodel_SequenceGroup(sg);
var codingComplement=this.av.getCodingComplement$();
if (codingComplement != null ) {
var mappedGroup=$I$(13).mapSequenceGroup$jalview_datamodel_SequenceGroup$jalview_api_AlignViewportI$jalview_api_AlignViewportI(sg, this.av, codingComplement);
if (mappedGroup.getSequences$().size$() > 0) {
codingComplement.getAlignment$().addGroup$jalview_datamodel_SequenceGroup(mappedGroup);
for (var seq, $seq = mappedGroup.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
codingComplement.setSequenceColour$jalview_datamodel_SequenceI$java_awt_Color(seq, col);
}
}}}
this.ap.updateAnnotation$();
if (this.av.getCodingComplement$() != null ) {
(this.av.getCodingComplement$()).firePropertyChange$S$O$O("alignment", null, this.ap.av.getAlignment$().getSequences$());
}});

Clazz.newMeth(C$, 'setShowDistances$Z',  function (state) {
this.showDistances=state;
this.repaint$();
});

Clazz.newMeth(C$, 'setShowBootstrap$Z',  function (state) {
this.showBootstrap=state;
this.repaint$();
});

Clazz.newMeth(C$, 'setMarkPlaceholders$Z',  function (state) {
this.markPlaceholders=state;
this.repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:28 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
