(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Color','jalview.util.Platform','jalview.renderer.AnnotationRenderer','jalview.datamodel.Annotation','jalview.appletgui.UserDefinedColours','jalview.appletgui.EditNameDialog','java.awt.PopupMenu','jalview.util.MessageManager','java.awt.MenuItem','StringBuilder','jalview.util.Comparison','jalview.schemes.ResidueProperties','java.awt.Dimension']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationPanel", null, 'java.awt.Panel', ['jalview.renderer.AwtRenderPanelI', 'java.awt.event.AdjustmentListener', 'java.awt.event.ActionListener', 'java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'jalview.viewmodel.ViewportListenerI']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.activeRow=-1;
this.HELIX="Helix";
this.SHEET="Sheet";
this.STEM="RNA Helix";
this.LABEL="Label";
this.REMOVE="Remove Annotation";
this.COLOUR="Colour";
this.HELIX_COLOUR=$I$(1).red.darker$();
this.SHEET_COLOUR=$I$(1).green.darker$().darker$();
this.imgWidth=0;
this.fastPaint=false;
this.graphStretch=-1;
this.graphStretchY=-1;
this.mouseDragging=false;
this.needValidating=false;
this.scrollOffset=0;
this.bounds=Clazz.array(Integer.TYPE, [2]);
},1);

C$.$fields$=[['Z',['fastPaint','mouseDragging','needValidating'],'I',['activeRow','imgWidth','graphStretch','graphStretchY','scrollOffset'],'S',['HELIX','SHEET','STEM','LABEL','REMOVE','COLOUR'],'O',['av','jalview.appletgui.AlignViewport','ap','jalview.appletgui.AlignmentPanel','HELIX_COLOUR','java.awt.Color','+SHEET_COLOUR','image','java.awt.Image','gg','java.awt.Graphics','fm','java.awt.FontMetrics','renderer','jalview.renderer.AnnotationRenderer','bounds','int[]']]
,['I',['GRAPH_HEIGHT']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this);
Clazz.new_($I$(2,1));
this.ap=ap;
this.av=ap.av;
this.setLayout$java_awt_LayoutManager(null);
var height=this.adjustPanelHeight$();
ap.apvscroll.setValues$I$I$I$I(0, this.getSize$().height, 0, height);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
this.addMouseListener$java_awt_event_MouseListener(this);
this.renderer=Clazz.new_($I$(3,1));
this.av.getRanges$().addPropertyChangeListener$jalview_viewmodel_ViewportListenerI(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport', function (av) {
Clazz.super_(C$, this);
this.av=av;
this.renderer=Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent', function (evt) {
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
var aa=this.av.getAlignment$().getAlignmentAnnotation$();
if (aa == null ) {
return;
}var anot=aa[this.activeRow].annotations;
if (anot.length < this.av.getColumnSelection$().getMax$()) {
var temp=Clazz.array($I$(4), [this.av.getColumnSelection$().getMax$() + 2]);
System.arraycopy$O$I$O$I$I(anot, 0, temp, 0, anot.length);
anot=temp;
aa[this.activeRow].annotations=anot;
}var label="";
if (this.av.getColumnSelection$() != null  && !this.av.getColumnSelection$().isEmpty$()  && anot[this.av.getColumnSelection$().getMin$()] != null  ) {
label=anot[this.av.getColumnSelection$().getMin$()].displayCharacter;
}if (evt.getActionCommand$().equals$O("Remove Annotation")) {
for (var index, $index = this.av.getColumnSelection$().getSelected$().iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
if (this.av.getAlignment$().getHiddenColumns$().isVisible$I(index)) {
anot[index]=null;
}}
} else if (evt.getActionCommand$().equals$O("Label")) {
label=this.enterLabel$S$S(label, "Enter Label");
if (label == null ) {
return;
}if ((label.length$() > 0) && !aa[this.activeRow].hasText ) {
aa[this.activeRow].hasText=true;
}for (var index, $index = this.av.getColumnSelection$().getSelected$().iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
if (!this.av.getAlignment$().getHiddenColumns$().isVisible$I(index)) {
continue;
}if (anot[index] == null ) {
anot[index]=Clazz.new_($I$(4,1).c$$S$S$C$F,[label, "", " ", 0]);
}anot[index].displayCharacter=label;
}
} else if (evt.getActionCommand$().equals$O("Colour")) {
var udc=Clazz.new_([this, $I$(1).black, this.ap.alignFrame],$I$(5,1).c$$java_awt_Component$java_awt_Color$java_awt_Frame);
var col=udc.getColor$();
for (var index, $index = this.av.getColumnSelection$().getSelected$().iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
if (!this.av.getAlignment$().getHiddenColumns$().isVisible$I(index)) {
continue;
}if (anot[index] == null ) {
anot[index]=Clazz.new_($I$(4,1).c$$S$S$C$F,["", "", " ", 0]);
}anot[index].colour=col;
}
} else {
var type=String.fromCharCode(0);
var symbol="\u03b1";
if (evt.getActionCommand$().equals$O("Helix")) {
type="H";
} else if (evt.getActionCommand$().equals$O("Sheet")) {
type="E";
symbol="\u03b2";
} else if (evt.getActionCommand$().equals$O("RNA Helix")) {
type="S";
var column=this.av.getColumnSelection$().getSelectedRanges$().get$I(0)[0];
symbol=aa[this.activeRow].getDefaultRnaHelixSymbol$I(column);
}if (!aa[this.activeRow].hasIcons) {
aa[this.activeRow].hasIcons=true;
}label=this.enterLabel$S$S(symbol, "Enter Label");
if (label == null ) {
return;
}if ((label.length$() > 0) && !aa[this.activeRow].hasText ) {
aa[this.activeRow].hasText=true;
if (evt.getActionCommand$().equals$O("RNA Helix")) {
aa[this.activeRow].showAllColLabels=true;
}}for (var index, $index = this.av.getColumnSelection$().getSelected$().iterator$(); $index.hasNext$()&&((index=($index.next$()).intValue$()),1);) {
if (!this.av.getAlignment$().getHiddenColumns$().isVisible$I(index)) {
continue;
}if (anot[index] == null ) {
anot[index]=Clazz.new_($I$(4,1).c$$S$S$C$F,[label, "", type, 0]);
}anot[index].secondaryStructure=type != "S" ? type : label.length$() == 0 ? " " : label.charAt$I(0);
anot[index].displayCharacter=label;
}
}this.av.getAlignment$().validateAnnotation$jalview_datamodel_AlignmentAnnotation(aa[this.activeRow]);
this.ap.alignmentChanged$();
this.adjustPanelHeight$();
this.repaint$();
return;
});

Clazz.newMeth(C$, 'enterLabel$S$S', function (text, label) {
var dialog=Clazz.new_($I$(6,1).c$$S$S$S$S$java_awt_Frame$S$I$I$Z,[text, null, label, null, this.ap.alignFrame, "Enter Label", 400, 200, true]);
if (dialog.accept) {
return dialog.getName$();
} else {
return null;
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
var aa=this.av.getAlignment$().getAlignmentAnnotation$();
if (aa == null ) {
return;
}var height=-this.scrollOffset;
this.activeRow=-1;
for (var i=0; i < aa.length; i++) {
if (aa[i].visible) {
height+=aa[i].height;
}if (evt.getY$() < height) {
if (aa[i].editable) {
this.activeRow=i;
} else if (aa[i].graph > 0) {
this.graphStretch=i;
this.graphStretchY=evt.getY$();
}break;
}}
if ((evt.getModifiersEx$() & 4096) == 4096 && this.activeRow != -1 ) {
if (this.av.getColumnSelection$() == null  || this.av.getColumnSelection$().isEmpty$() ) {
return;
}var pop=Clazz.new_([$I$(8).getString$S("label.structure_type")],$I$(7,1).c$$S);
var item;
if (this.av.getAlignment$().isNucleotide$()) {
item=Clazz.new_($I$(9,1).c$$S,["RNA Helix"]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$java_awt_MenuItem(item);
} else {
item=Clazz.new_($I$(9,1).c$$S,["Helix"]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$java_awt_MenuItem(item);
item=Clazz.new_($I$(9,1).c$$S,["Sheet"]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$java_awt_MenuItem(item);
}item=Clazz.new_($I$(9,1).c$$S,["Label"]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$java_awt_MenuItem(item);
item=Clazz.new_($I$(9,1).c$$S,["Colour"]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$java_awt_MenuItem(item);
item=Clazz.new_($I$(9,1).c$$S,["Remove Annotation"]);
item.addActionListener$java_awt_event_ActionListener(this);
pop.add$java_awt_MenuItem(item);
this.ap.alignFrame.add$java_awt_PopupMenu(pop);
pop.show$java_awt_Component$I$I(this, evt.getX$(), evt.getY$());
return;
}this.ap.scalePanel.mousePressed$java_awt_event_MouseEvent(evt);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
this.graphStretch=-1;
this.graphStretchY=-1;
this.mouseDragging=false;
if (this.needValidating) {
this.ap.validate$();
this.needValidating=false;
}this.ap.scalePanel.mouseReleased$java_awt_event_MouseEvent(evt);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
if (this.graphStretch > -1) {
this.av.getAlignment$().getAlignmentAnnotation$()[this.graphStretch].graphHeight+=this.graphStretchY - evt.getY$();
if (this.av.getAlignment$().getAlignmentAnnotation$()[this.graphStretch].graphHeight < 0) {
this.av.getAlignment$().getAlignmentAnnotation$()[this.graphStretch].graphHeight=0;
}this.graphStretchY=evt.getY$();
this.av.calcPanelHeight$();
this.needValidating=true;
this.ap.paintAlignment$Z$Z(true, false);
} else {
this.ap.scalePanel.mouseDragged$java_awt_event_MouseEvent(evt);
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
var aa=this.av.getAlignment$().getAlignmentAnnotation$();
if (aa == null ) {
return;
}var row=-1;
var height=-this.scrollOffset;
for (var i=0; i < aa.length; i++) {
if (aa[i].visible) {
height+=aa[i].height;
}if (evt.getY$() < height) {
row=i;
break;
}}
var column=(evt.getX$()/this.av.getCharWidth$()|0) + this.av.getRanges$().getStartRes$();
if (this.av.hasHiddenColumns$()) {
column=this.av.getAlignment$().getHiddenColumns$().visibleToAbsoluteColumn$I(column);
}if (row > -1 && column < aa[row].annotations.length  && aa[row].annotations[column] != null  ) {
var text=Clazz.new_($I$(10,1));
text.append$S($I$(8).getString$S("label.column")).append$S(" ").append$I(column + 1);
var description=aa[row].annotations[column].description;
if (description != null  && description.length$() > 0 ) {
text.append$S("  ").append$S(description);
}var seqref=aa[row].sequenceRef;
if (seqref != null ) {
var seqIndex=this.av.getAlignment$().findIndex$jalview_datamodel_SequenceI(seqref);
if (seqIndex != -1) {
text.append$S(", ").append$S($I$(8).getString$S("label.sequence")).append$S(" ").append$I(seqIndex + 1);
var residue=seqref.getCharAt$I(column);
if (!$I$(11).isGap$C(residue)) {
text.append$S(" ");
var name;
if (this.av.getAlignment$().isNucleotide$()) {
name=$I$(12).nucleotideName.get$O(String.valueOf$C(residue));
text.append$S(" Nucleotide: ").append$O(name != null  ? name : new Character(residue));
} else {
name="X" == residue ? "X" : ("*" == residue ? "STOP" : $I$(12).aa2Triplet.get$O(String.valueOf$C(residue)));
text.append$S(" Residue: ").append$O(name != null  ? name : new Character(residue));
}var residuePos=seqref.findPosition$I(column);
text.append$S(" (").append$I(residuePos).append$S(")");
}}}this.ap.alignFrame.statusBar.setText$S(text.toString());
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
this.ap.scalePanel.mouseEntered$java_awt_event_MouseEvent(evt);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
this.ap.scalePanel.mouseExited$java_awt_event_MouseEvent(evt);
});

Clazz.newMeth(C$, 'adjustPanelHeight$', function () {
return this.adjustPanelHeight$Z(true);
});

Clazz.newMeth(C$, 'adjustPanelHeight$Z', function (repaint) {
var height=this.av.calcPanelHeight$();
this.setSize$java_awt_Dimension(Clazz.new_([this.getSize$().width, height],$I$(13,1).c$$I$I));
if (repaint) {
this.repaint$();
}return height;
});

Clazz.newMeth(C$, 'addEditableColumn$I', function (i) {
if (this.activeRow == -1) {
var aa=this.av.getAlignment$().getAlignmentAnnotation$();
if (aa == null ) {
return;
}for (var j=0; j < aa.length; j++) {
if (aa[j].editable) {
this.activeRow=j;
break;
}}
}});

Clazz.newMeth(C$, 'update$java_awt_Graphics', function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
var d=this.getSize$();
this.imgWidth=d.width;
if (this.imgWidth < 1 || d.height < 1 ) {
return;
}if (this.image == null  || this.imgWidth != this.image.getWidth$java_awt_image_ImageObserver(this)  || d.height != this.image.getHeight$java_awt_image_ImageObserver(this) ) {
this.image=this.createImage$I$I(this.imgWidth, d.height);
this.gg=this.image.getGraphics$();
this.gg.setFont$java_awt_Font(this.av.getFont$());
this.fm=this.gg.getFontMetrics$();
this.fastPaint=false;
}if (this.fastPaint) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, this);
this.fastPaint=false;
return;
}this.gg.setColor$java_awt_Color($I$(1).white);
this.gg.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
this.drawComponent$java_awt_Graphics$I$I(this.gg, this.av.getRanges$().getStartRes$(), this.av.getRanges$().getEndRes$() + 1);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, this);
});

Clazz.newMeth(C$, 'fastPaint$I', function (horizontal) {
if (horizontal == 0 || this.gg == null   || this.av.getAlignment$().getAlignmentAnnotation$() == null   || this.av.getAlignment$().getAlignmentAnnotation$().length < 1 ) {
this.repaint$();
return;
}this.gg.copyArea$I$I$I$I$I$I(0, 0, this.imgWidth, this.getSize$().height, -horizontal * this.av.getCharWidth$(), 0);
var sr=this.av.getRanges$().getStartRes$();
var er=this.av.getRanges$().getEndRes$() + 1;
var transX=0;
if (horizontal > 0) {
transX=(er - sr - horizontal ) * this.av.getCharWidth$();
sr=er - horizontal;
} else if (horizontal < 0) {
er=sr - horizontal;
}this.gg.translate$I$I(transX, 0);
this.drawComponent$java_awt_Graphics$I$I(this.gg, sr, er);
this.gg.translate$I$I(-transX, 0);
this.fastPaint=true;
this.repaint$();
});

Clazz.newMeth(C$, 'drawComponent$java_awt_Graphics$I$I', function (g, startRes, endRes) {
var ofont=this.av.getFont$();
g.setFont$java_awt_Font(ofont);
g.setColor$java_awt_Color($I$(1).white);
g.fillRect$I$I$I$I(0, 0, (endRes - startRes) * this.av.getCharWidth$(), this.getSize$().height);
if (this.fm == null ) {
this.fm=g.getFontMetrics$();
}if ((this.av.getAlignment$().getAlignmentAnnotation$() == null ) || (this.av.getAlignment$().getAlignmentAnnotation$().length < 1) ) {
g.setColor$java_awt_Color($I$(1).white);
g.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
g.setColor$java_awt_Color($I$(1).black);
if (this.av.validCharWidth) {
g.drawString$S$I$I($I$(8).getString$S("label.alignment_has_no_annotations"), 20, 15);
}return;
}g.translate$I$I(0, -this.scrollOffset);
this.renderer.drawComponent$jalview_renderer_AwtRenderPanelI$jalview_api_AlignViewportI$java_awt_Graphics$I$I$I(this, this.av, g, this.activeRow, startRes, endRes);
g.translate$I$I(0, +this.scrollOffset);
});

Clazz.newMeth(C$, 'setScrollOffset$I$Z', function (value, repaint) {
this.scrollOffset=value;
if (repaint) {
this.repaint$();
}});

Clazz.newMeth(C$, 'getFontMetrics$', function () {
return this.fm;
});

Clazz.newMeth(C$, 'getFadedImage$', function () {
return this.image;
});

Clazz.newMeth(C$, 'getFadedImageWidth$', function () {
return this.imgWidth;
});

Clazz.newMeth(C$, 'getVisibleVRange$', function () {
if (this.ap != null  && this.ap.alabels != null  ) {
var sOffset=-this.ap.alabels.scrollOffset;
var visHeight=sOffset + this.ap.annotationPanelHolder.getHeight$();
this.bounds[0]=sOffset;
this.bounds[1]=visHeight;
return this.bounds;
} else {
return null;
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (evt) {
if (evt.getPropertyName$().equals$O("startres")) {
this.fastPaint$I(((evt.getNewValue$()).valueOf()|0) - ((evt.getOldValue$()).valueOf()|0));
} else if (evt.getPropertyName$().equals$O("startresandseq")) {
this.fastPaint$I((evt.getNewValue$())[0] - (evt.getOldValue$())[0]);
} else if (evt.getPropertyName$().equals$O("move_viewport")) {
this.repaint$();
}});

C$.$static$=function(){C$.$static$=0;
C$.GRAPH_HEIGHT=40;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
